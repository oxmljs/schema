//@ts-check

import * as fs from 'fs';
import * as path from 'path';
import { cap, csNamepaceToTsPath, decap } from './util.mjs';

/**
 * @typedef OxmlSchema
 * @property {string} NamespacePath
 * @property {string} TargetNamespace
 * @property {string[]} Dependencies
 * @property {OxmlType[]?} Types
 * @property {OxmlEnum[]?} Enums
 * 
 * @typedef OxmlType
 * @property {string} Name
 * @property {string} Part
 * @property {string} ClassName
 * @property {string} Summary
 * @property {string} BaseClass
 * @property {boolean} IsDerived
 * @property {boolean} IsLeafElement
 * @property {boolean} IsLeafText
 * @property {OxmlTypeAttribute[]} Attributes
 * @property {OxmlTypeChild[]} Children
 * @property {OxmlSchema} Schema
 * 
 * @typedef OxmlTypeChild
 * @property {string} Name
 * @property {string} PropertyName
 * @property {string} PropertyComments
 * 
 * @typedef OxmlTypeAttribute
 * @property {string} QName
 * @property {string} Type
 * @property {string} PropertyName
 * @property {string} StringValue
 * @property {string} PropertyComments
 * @property {OxmlTypeAttributeValidator[]?} Validators
 * 
 * @typedef OxmlTypeAttributeValidator
 * @property {OxmlTypeAttributeValidatorArgument[]} Arguments
 * @property {string} Name
 * @property {number} UnionId
 * @property {boolean} IsInitialVersion
 * 
 * @typedef OxmlTypeAttributeValidatorArgument
 * @property {string} Type
 * @property {string} Name
 * @property {string} Value
 * 
 * @typedef OxmlEnum
 * @property {string} Name
 * @property {string} Type
 * @property {OxmlEnumFacet[]} Facets
 * 
 * @typedef OxmlEnumFacet
 * @property {string} Name
 * @property {string} Value
 * @property {string} Comments
 */

/**
 * @typedef OxmlPart
 * @property {string} Root
 * @property {string} Name
 * @property {string} Base
 * @property {string} Target
 * @property {string} RootElement
 * @property {string} ContentType
 * @property {string} RelationshipType
 * @property {OxmlPartPaths} Paths
 * @property {OxmlPartChild[]} Children
 * 
 * @typedef OxmlPartPaths
 * @property {string?} General
 * @property {string?} Word
 * @property {string?} Excel
 * @property {string?} PowerPoint
 * 
 * @typedef OxmlPartChild
 * @property {string} Name
 * @property {string} ApiName
 * @property {boolean} HasFixedContent
 * @property {boolean} IsDataPartReference
 * @property {boolean} MinOccursIsNonZero
 * @property {boolean} MaxOccursGreatThanOne
 */

const DATA_TYPES = [
    'StringValue',
    'OnOffValue',
    'Int16Value',
    'Int32Value',
    'Int64Value',
    'UInt16Value',
    'UInt32Value',
    'UInt64Value',
    'DoubleValue',
    'DecimalValue',
    'BooleanValue',
    'ByteValue',
    'SByteValue',
    'SingleValue',
    'IntegerValue',
    'TrueFalseValue',
    'TrueFalseBlankValue',
    'EnumValue',
    'ListValue',
    'DateTimeValue',
    'HexBinaryValue',
    'Base64BinaryValue',
    'ListValue',
];

const BASE_TYPES = [
    'OxmlType',
    'OxmlAttr',
    'OxmlElement',
    'OxmlLeafElement',
    'OxmlLeafTextElement',
    'OxmlCompositeElement',
    'OxmlPartRootElement',
    'OxmlNamespace',
];

/**  @param {OxmlTypeAttribute} attr */
function getPropName(attr) {
    if (attr.PropertyName) {
        return decap(attr.PropertyName);
    }
    if (attr.QName === 'w:val') return 'value';
    return attr.QName.split(':')[1];
}

export class SchemasRenderer {

    //#region properties

    stats = {
        packages: 0,
        schemas: 0,
        parts: 0,
        enums: 0,
        types: 0,
        chars: 0,
    };

    /** @type {OxmlPart[]} */
    parts = [];

    /** @type {OxmlPart[]} */
    packages = [];

    /** @type {OxmlSchema[]} */
    schemas = [];

    /** @type {{[k:string]:string}} */
    prefixToXmlNamespace;

    /** @type {{[k:string]:string}} */
    xmlNamespaceToPrefix;

    /** @type {{[k:string]:string}} */
    prefixToTsPath;

    /** @type {{[k:string]:string}} */
    xmlNamespaceToTsPath;

    /** @type {string} */
    outputPath;

    /** @type {{[k:string]:{name:string;ns:string}}} */
    ctNameToElement = {};

    /** @type {{[k:string]:OxmlType}} */
    nameToType = {};

    //#endregion properties

    /**  
     * @param {string} dataPath
     * @param {string} outputPath 
     */
    constructor(dataPath, outputPath) {

        this.outputPath = outputPath;

        const prefixToXmlNamespace = this.prefixToXmlNamespace = JSON
            .parse(fs.readFileSync(path.join(dataPath, 'namespaces.json'), 'utf-8'))
            .reduce((a, c) => { a[c.Prefix] = c.Uri; return a; }, {});

        const xmlNamespaceToPrefix = this.xmlNamespaceToPrefix = Object.keys(prefixToXmlNamespace)
            .reduce((a, k) => { a[prefixToXmlNamespace[k]] = k; return a; }, {});

        const prefixToTsPath = this.prefixToTsPath = JSON
            .parse(fs.readFileSync(path.join(dataPath, 'typed/namespaces.json'), 'utf-8'))
            .reduce((a, c) => { a[c.Prefix] = csNamepaceToTsPath(c.Namespace); return a; }, {});

        const xmlNamespaceToTsPath = this.xmlNamespaceToTsPath = Object.keys(prefixToXmlNamespace)
            .reduce((a, k) => { a[prefixToXmlNamespace[k]] = prefixToTsPath[k] || ''; return a; }, {});

        const schemaNamespaceDulicateDict = {};

        fs.readdirSync(path.join(dataPath, 'schemas')).forEach(schemaFile => {
            const schemaFilePath = path.join(dataPath, 'schemas', schemaFile);
            /** @type {OxmlSchema} */
            const schema = JSON.parse(fs.readFileSync(schemaFilePath, 'utf-8'));
            this.schemas.push(schema);
            const namespacePath = xmlNamespaceToTsPath[schema.TargetNamespace] || '';
            schema.NamespacePath = namespacePath === 'Office2019/Drawing' || namespacePath === 'Office2019/Presentation'
                ? namespacePath + '/' + xmlNamespaceToPrefix[schema.TargetNamespace] : namespacePath;
            if (schemaNamespaceDulicateDict[schema.NamespacePath])
                schemaNamespaceDulicateDict[schema.NamespacePath].push(schemaFilePath);
            else schemaNamespaceDulicateDict[schema.NamespacePath] = [schemaFilePath];
            schema.Types?.forEach(type => {
                type.Schema = schema;
                if (!type.Name.endsWith('/')) {
                    if (this.nameToType[type.Name]) throw new Error(JSON.stringify(type));
                    this.nameToType[type.Name] = type;
                }
            })
        });

        const schemaNamespaceDulicates = Object.keys(schemaNamespaceDulicateDict)
            .filter(k => schemaNamespaceDulicateDict[k].length > 1)
            .map(k => schemaNamespaceDulicateDict[k]);

        if (schemaNamespaceDulicates.length > 0) {
            throw new Error('Unhandled duplicates: ' + JSON.stringify(schemaNamespaceDulicates));
        }

        fs.readdirSync(path.join(dataPath, 'parts')).forEach(partFile => {
            const partFilePath = path.join(dataPath, 'parts', partFile);
            /** @type {OxmlPart} */
            const part = JSON.parse(fs.readFileSync(partFilePath, 'utf-8'));
            if (part.Name.endsWith('Document')) {
                this.packages.push(part);
            } else {
                this.parts.push(part);
            }
        });

    }

    render() {
        this.schemas.forEach(schema => this.renderSchema(schema));
        this.packages.forEach(schema => this.renderPackage(schema));
        this.parts.forEach(schema => this.renderPart(schema));
        this.renderPackagingIndex();
        this.renderSchemaIndex();
    }

    /**  @param {OxmlSchema} schema */
    renderSchema(schema) {

        const { nameToType, xmlNamespaceToPrefix, ctNameToElement } = this;

        /** @type {{[k:string]:string}} */
        const enumsFilesDict = {};

        /** @type {{[k:string]:string}} */
        const enumsNamespacesDict = {};

        let totalLength = 0;

        /** @type {string[]} */
        const files = [];

        const outputPath = schema.NamespacePath
            ? path.join(this.outputPath, 'schema', schema.NamespacePath)
            : path.join(this.outputPath, 'schema');

        fs.mkdirSync(outputPath, { recursive: true });

        const ns = schema.NamespacePath?.split('/') || [];

        const frameworkBase = '../' + ns.map(n => '..').join('/');
        const shemaBase = ns.map(n => '..').join('/');

        let all = '';

        schema.Enums?.forEach(type => {
            let code = '';
            let array = '';
            code += `export enum ${type.Name} {\n`;
            type.Facets.forEach(f => {
                if (!f.Name) f.Name = cap(f.Value);
                code += `    /** ${f.Comments}. Serialized value: \`${f.Value}\` */\n`;
                code += `    ${f.Name} = '${f.Value}',\n`;
                array += `    ${type.Name}.${f.Name},\n`
            });
            code += `}\n\n`;
            code += `export const ${type.Name}Array = [\n${array}] as const;\n\n`;
            enumsFilesDict[type.Name] = './' + type.Name;
            totalLength += code.length;
            all += code;
        });

        const importsDict = {};

        const propsDict = {};

        /** @type {{[k:string]:string}} */ const classNameToName = {};
        /** @type {{[k:string]:string}} */ const nameToClassName = {};

        /**
         * @param {OxmlTypeChild} child 
         * @returns {string}
         */
        function resolveClassName(child) {
            let className = nameToClassName[child.Name];
            if (!className) {
                const externalType = nameToType[child.Name];
                if (!externalType) throw new Error(JSON.stringify(child));
                const prefix = cap(xmlNamespaceToPrefix[externalType.Schema.TargetNamespace]);
                className = prefix + externalType.ClassName;
                externalClassesImports[className] = {
                    name: externalType.ClassName,
                    path: path.join(shemaBase, externalType.Schema.NamespacePath)
                };
            }
            return className;
        }


        schema.Types?.forEach(type => {

            nameToClassName[type.Name] = type.ClassName;
            classNameToName[type.ClassName] = type.Name;

            if (type.Part) {
                ctNameToElement[type.Part] = { name: type.ClassName, ns: schema.NamespacePath };
                importsDict['OxmlPartRootElement'] = true;
                type.BaseClass = 'OxmlPartRootElement';
            } else {
                if (type.IsDerived) {
                    if (type.BaseClass === 'OpenXmlLeafTextElement') {
                        type.BaseClass = 'OxmlLeafTextElement';
                        importsDict[type.BaseClass] = true;
                    } else if (type.BaseClass === 'OpenXmlLeafElement') {
                        type.BaseClass = 'OxmlLeafElement';
                        importsDict[type.BaseClass] = true;
                    } else if (type.BaseClass === 'OpenXmlCompositeElement') {
                        type.BaseClass = 'OxmlCompositeElement';
                        importsDict[type.BaseClass] = true;
                    } else if (type.BaseClass === 'OpenXmlPartRootElement') {
                        type.BaseClass = 'OxmlPartRootElement';
                        importsDict[type.BaseClass] = true;
                    }
                } else {
                    if (type.IsLeafElement) {
                        type.BaseClass = 'OxmlLeafElement';
                        importsDict['OxmlLeafElement'] = true;
                    } else if (type.IsLeafText) {
                        type.BaseClass = 'OxmlLeafTextElement';
                        importsDict['OxmlLeafTextElement'] = true;
                    } else if (type.Part || type.BaseClass === 'OpenXmlPartRootElement') {
                        importsDict['OxmlPartRootElement'] = true;
                    } else {
                        importsDict['OxmlCompositeElement'] = true;
                    }
                }
            }

        });

        /**
         * @type {{[k:string]:{path:string;name:string}}}
         */
        const externalClassesImports = {};

        schema.Dependencies = [];

        /**
        * @param {OxmlType} type 
        */
        const processType = type => {

            let code = '';

            const qualifiedName = type.Name.split('/')[1];

            const classType = qualifiedName ? 'class' : 'abstract class';
            const comment = qualifiedName
                ? `/** ${type.Summary} Serialized as \`${qualifiedName}\` */\n`
                : `/** ${type.Summary} */\n`;

            const childType = type.Children?.length ? ('<' + type.Children.map(c => resolveClassName(c)).filter(c => c).join(' | ') + '>') : '';

            if (type.IsDerived) {
                code += comment;
                code += `export ${classType} ${type.ClassName} extends ${type.BaseClass} {\n\n`;
                //importsDict[type.BaseClass] = true;
            } else {
                if (type.IsLeafElement) {
                    code += comment;
                    code += `export ${classType} ${type.ClassName} extends OxmlLeafElement {\n\n`;
                } else if (type.IsLeafText) {
                    code += comment;
                    code += `export ${classType} ${type.ClassName} extends OxmlLeafTextElement {\n\n`;
                } else if (type.Part || type.BaseClass === 'OpenXmlPartRootElement') {
                    code += comment;
                    code += `export ${classType} ${type.ClassName} extends OxmlPartRootElement${childType} {\n\n`;
                } else {
                    code += comment;
                    code += `export ${classType} ${type.ClassName} extends OxmlCompositeElement${childType} {\n\n`;
                }
            }

            let attrsProps = '';
            let attrsNames = '';

            if (type.Attributes?.length) {
                importsDict['OxmlAttr'] = true;
                importsDict['OxmlType'] = true;
            }

            type.Attributes?.forEach(attr => {

                if (attr.Type.startsWith('ListValue')) {
                    if (attr.Type.includes('EnumValue')) {

                        attr.Type = attr.Type.replace('EnumValue<', '').replace(/>$/, '');
                        const type = attr.Type.replace('ListValue<', '').replace('>', '');
                        const enumNamespaceArr = csNamepaceToTsPath(type).split('/');
                        enumNamespaceArr.pop();
                        const enumNamespacePath = enumNamespaceArr.join('/');
                        attr.Type = type.split('.').pop() || '';
                        if (schema.NamespacePath !== enumNamespacePath && enumNamespacePath !== 'Office2019/Presentation') {
                            enumsFilesDict[attr.Type] = [`${shemaBase}`, enumNamespacePath].filter(n => n).join('/');
                            importsDict[attr.Type] = true;
                        }

                    } else {
                        importsDict['ListValue'] = true;
                        importsDict[attr.Type.replace('ListValue<', '').replace('>', '')] = true;
                    }
                } else if (attr.Type.startsWith('EnumValue')) {
                    attr.Type = attr.Type.replace('EnumValue<', '').replace('>', '');
                    const enumNamespaceArr = csNamepaceToTsPath(attr.Type).split('/');
                    enumNamespaceArr.pop();
                    const enumNamespacePath = enumNamespaceArr.join('/');
                    attr.Type = attr.Type.split('.').pop() || '';
                    if (schema.NamespacePath !== enumNamespacePath && enumNamespacePath !== 'Office2019/Presentation') {
                        enumsFilesDict[attr.Type] = [`${shemaBase}`, enumNamespacePath].filter(n => n).join('/');
                        importsDict[attr.Type] = true;
                    }
                } else {
                    if (DATA_TYPES.includes(attr.Type)) importsDict[attr.Type] = true;
                }

                const pName = getPropName(attr);

                attrsNames += `'${attr.QName}',`;

                attrsProps += `    /** ${attr.PropertyComments}. Serialized as \`${attr.QName}\` */\n`;
                attrsProps += `    public get ${pName}(): ${attr.Type} | undefined { return this._g('${attr.QName}'); }\n`;
                attrsProps += `    public set ${pName}(v: ${attr.Type} | undefined) { this._s('${attr.QName}', v); }\n`;
            });

            if (qualifiedName) {
                code += `    public static override _Q = '${qualifiedName}';\n`;
            }

            if (attrsNames) {
                code += `    public static override _A = [${attrsNames}];\n`;
            }

            if (attrsProps) {
                code += attrsProps;
            }

            if (type.Children) {

                const duplicateChildren = type.Children
                    .filter((v, _, s) => v.PropertyName && s.some(c => v !== c && c.PropertyName === v.PropertyName));

                /** @param {OxmlTypeChild} child  */
                const processChild = child => {
                    if (child.PropertyName) {
                        let className = resolveClassName(child);
                        const pName = decap(child.PropertyName);
                        if (propsDict[type.BaseClass + '.' + pName]) return;
                        propsDict[type.ClassName + '.' + pName] = true;
                        code += `    /** ${child.PropertyComments || 'Returns ' + className}. */\n`;
                        code += `    public get ${pName}(): ${className} | undefined { return this._f(${className}); }\n`;
                    }
                };

                duplicateChildren.forEach(child => {
                    child.PropertyName = child.Name.split('/')[1].split(':')[0] + child.PropertyName;
                    processChild(child);
                });

                type.Children.filter(c => !duplicateChildren.includes(c)).forEach(c => processChild(c));
            }

            code += `\n}\n`;

            totalLength += code.length;

            all += code;

        };


        schema.Types?.reverse().forEach(processType);

        const nsName = schema.NamespacePath.replace(/\//g, '');

        all += `\nexport function init${nsName}Namespace() {\n`;

        schema.Types?.forEach(type => {

            if (type.Children?.length) {
                all += `    ${type.ClassName}._C = {\n`;

                type.Children?.forEach(child => {
                    let className = resolveClassName(child);
                    const qualifiedName = child.Name.split('/')[1];
                    if (!qualifiedName) return;
                    all += `        '${qualifiedName}': ${className},\n`;
                });

                all += `    };\n`;
            }

            if (type.Attributes?.length) {
                all += `    ${type.ClassName}._D = {\n`;

                type.Attributes?.forEach(attr => {
                    if (attr.Type.startsWith('ListValue')) {
                        all += `        '${attr.QName}': new OxmlAttr('${attr.QName}', OxmlType.ListValue),\n`;
                    } else if (DATA_TYPES.includes(attr.Type)) {
                        all += `        '${attr.QName}': new OxmlAttr('${attr.QName}', OxmlType.${attr.Type}),\n`;
                    } else {
                        all += `        '${attr.QName}': new OxmlAttr('${attr.QName}', OxmlType.EnumValue, ${attr.Type}Array),\n`;
                    }
                });

                all += `    };\n`;
            }

        });

        all += `    return {\n`;
        all += `        prefix: '${xmlNamespaceToPrefix[schema.TargetNamespace]}',\n`;
        all += `        xmlns: '${schema.TargetNamespace}',\n`;
        all += `    };\n`;
        all += `}\n`;


        const imports = Object.keys(importsDict);

        const datatypesImports = imports.filter(i => DATA_TYPES.includes(i));
        const frameworkImports = imports.filter(i => BASE_TYPES.includes(i));

        const externalImports = imports.filter(i => !frameworkImports.includes(i) && !datatypesImports.includes(i));

        const frameworkImportsString = frameworkImports
            .map(i => `import { ${i} } from '${frameworkBase}/framework/${i}';\n`).concat(
                datatypesImports.map(i => `import { ${i} } from '${frameworkBase}/framework/types/${i}';\n`)
            ).join('');

        const externalImportsString = externalImports.map(i => {

            if (enumsFilesDict[i]) {
                if (enumsNamespacesDict[i]) {
                    return `import { ${enumsNamespacesDict[i]} } from '${enumsFilesDict[i]}';`;
                } else {
                    return `import { ${i}, ${i}Array } from '${enumsFilesDict[i]}';`;
                }
            } else {
                return `import { ${i} } from './${i}';`;
            }

        }).filter(i => i).join('\n');


        const externalClassesImportString = Object.keys(externalClassesImports)
            .map(k => `import { ${externalClassesImports[k].name} as ${k} } from '${externalClassesImports[k].path}';\n`).join('');

        all = frameworkImportsString + externalImportsString + externalClassesImportString + '\n\n' + all;


        files.push(schema.NamespacePath);
        fs.writeFile(path.join(outputPath, `index.ts`), all, (e) => {
            if (e) throw e;
        });

        this.stats.enums += schema.Enums?.length || 0;
        this.stats.types += schema.Types?.length || 0;
        this.stats.schemas += 1;
        this.stats.chars += all.length;

    }

    /**  @param {OxmlPart} schema  */
    renderPart(schema) {

        let root = this.ctNameToElement[schema.Name];

        const partsImports = [];
        const frameworkImports = ['OxmlPart'];

        let imports = ``;
        let code = ``;

        if (schema.Base === 'OpenXmlPart') {
            schema.Base = 'OxmlPart';
        } else if (schema.Base === 'StylesPart') {
            schema.Base = 'OxmlPart';
            root = { name: 'Styles', ns: 'Wordprocessing' };
        } else if (schema.Base === 'CustomUIPart') {
            schema.Base = 'OxmlPart';
            root = { name: 'CustomUI', ns: 'Office/CustomUI' };
        }

        if (root) {
            const ns = [`../schema`, root.ns].filter(n => n).join('/');
            imports += `import { ${root.name} } from '${ns}';\n`;
            code += `export class ${schema.Name} extends ${schema.Base}<${root.name}> {\n\n`;
        } else {
            code += `export class ${schema.Name} extends ${schema.Base} {\n\n`;
        }

        code += `    public static override _N = '${schema.Name}';\n`;

        if (schema.Name === 'MainDocumentPart') schema.ContentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml';

        if (schema.RelationshipType) code += `    public static override _R = '${schema.RelationshipType}';\n`;
        code += `    public static override _C = '${schema.ContentType || '*'}';\n`;
        if (schema.Paths.General) code += `    public static _P = '${schema.Paths.General}';\n`;
        if (schema.Paths.Word) code += `    public static _PW = '${schema.Paths.Word}';\n`;
        if (schema.Paths.Excel) code += `    public static _PE = '${schema.Paths.Excel}';\n`;
        if (schema.Paths.PowerPoint) code += `    public static _PP = '${schema.Paths.PowerPoint}';\n`;

        if (schema.Target) {

            code += `    public static _T = '${schema.Target}';\n`;

            if (root) {
                code += `    public static override _E = ${root.name};\n\n`;
            } else if (!frameworkImports.includes('OxmlElement')) {
                frameworkImports.push('OxmlElement');
            }


            code += `    public get ${schema.Target}() { return this._r; }\n`;
            code += `    public set ${schema.Target}(root: ${root?.name || 'OxmlElement'} | undefined) { this._r = root; }\n\n`;
        } else {
            code += `\n`;
        }

        schema.Children?.forEach(child => {
            if (!child.Name.endsWith('Part')) return;
            if (child.Name !== schema.Name) partsImports.push(child.Name);
            if (child.MaxOccursGreatThanOne) {
                code += `    public get ${decap(child.ApiName)}() { return this._m<${child.Name}>('${child.Name}'); }\n`;
            } else {
                code += `    public get ${decap(child.ApiName)}() { return this._f<${child.Name}>('${child.Name}'); }\n`;
            }
        });


        code += `\n}\n`;

        if (frameworkImports.length) imports += frameworkImports.map(i => `import { ${i} } from '../framework/${i}';\n`).join('');
        if (partsImports.length) imports += partsImports.map(i => `import { ${i} } from './${i}';\n`).join('');

        const outputPath = path.join(this.outputPath, 'packaging');

        const all = imports + '\n' + code;
        fs.writeFileSync(path.join(outputPath, schema.Name) + '.ts', all);

        this.stats.parts += 1;
        this.stats.chars += all.length;

    }

    /**  @param {OxmlPart} schema  */
    renderPackage(schema) {

        schema.Base = 'OxmlPackage';

        const partsImports = [];
        const frameworkImports = [schema.Base];

        let imports = ``;
        let code = `import * as JSZip from 'jszip';\n`;

        code += `export class ${schema.Name} extends ${schema.Base} {\n\n`;

        code += `    public static async open(source: JSZip.InputType) {\n`;
        code += `        const pkg = new ${schema.Name}();\n`;
        code += '        await pkg.open(source);\n';
        code += '        return pkg;\n';
        code += '    }\n\n';

        code += `    public static async create() {\n`;
        code += `        const pkg = new ${schema.Name}();\n`;
        code += '        await pkg.create();\n';
        code += '        return pkg;\n';
        code += '    }\n\n';

        code += `    private constructor() { super(null!); }\n\n`;

        schema.Children?.forEach(child => {
            if (!child.Name.endsWith('Part')) return;
            partsImports.push(child.Name);
            if (child.MaxOccursGreatThanOne) {
                code += `    public get ${decap(child.ApiName)}() { return this._m<${child.Name}>('${child.Name}'); }\n`;
            } else {
                code += `    public get ${decap(child.ApiName)}() { return this._f<${child.Name}>('${child.Name}'); }\n`;
            }
        });

        code += `\n`;

        schema.Children?.forEach(child => {
            if (!child.Name.endsWith('Part')) return;
            code += `    public add${child.ApiName}() { return this._a(${child.Name}); }\n`;
        });

        code += `\n}\n`;

        if (frameworkImports.length) imports += frameworkImports.map(i => `import { ${i} } from '../framework/${i}';\n`).join('');
        if (partsImports.length) imports += partsImports.map(i => `import { ${i} } from './${i}';\n`).join('');

        const outputPath = path.join(this.outputPath, 'packaging');
        const all = imports + '\n' + code;
        fs.writeFileSync(path.join(outputPath, schema.Name) + '.ts', all);

        this.stats.packages += 1;
        this.stats.chars += all.length;

    }

    renderPackagingIndex() {

        const { parts, packages, schemas } = this;

        let init = `import { OxmlPartContainer } from '../framework/OxmlPartContainer';\n`;
        init += `import { OxmlPackage } from '../framework/OxmlPackage';\n`;
        let code = ``;

        code += parts.map(f => `export * from './${f.Name}';\n`).join('');
        code += packages.map(f => `export * from './${f.Name}';\n`).join('');
        code += `\n`;

        let initCode = '';
        parts.forEach(part => {
            init += `import { ${part.Name} } from "./${part.Name}";\n`;
            initCode += `    parts[${part.Name}._R + '|' + ${part.Name}._C] = ${part.Name};\n`;
        });

        packages.forEach(pkg => {
            init += `import { ${pkg.Name} } from "./${pkg.Name}";\n`;
            initCode += `    packages[${pkg.Name}._E] = ${pkg.Name};\n`;
        });

        // schemas.forEach(n => {
        //     init += `import { ${n.name}Namespace } from "./schema/${n.path}";\n`;
        //     initCode += `    schemas['${n.prefix}'] = ${n.name}Namespace;\n`;
        // });

        init += `\nexport function oxmlInitPackaging() {\n`;
        init += `    const parts = OxmlPartContainer.registry;\n`;
        init += `    const packages = OxmlPackage.packages;\n`;
        init += initCode;
        init += `}\n`;

        fs.writeFileSync(path.join(this.outputPath, 'packaging', 'index.ts'), code);
        fs.writeFileSync(path.join(this.outputPath, 'packaging', '_init.ts'), init);
    }

    renderSchemaIndex() {
        let code = ``;

        /**  @type {OxmlSchema[]}  */
        const schemas = [];

        let iter = 0;
        do {
            iter++;
            for (let i = 0; i < this.schemas.length; ++i) {
                const schema = this.schemas[i];
                if (schemas.includes(schema)) continue;
                if (schema.Dependencies.some(d => !schemas.some(s => s.NamespacePath === d)) && iter < this.schemas.length) continue;
                schemas.push(schema);
            }
        } while (iter < this.schemas.length);

        schemas.forEach(schema => {
            const nsName = schema.NamespacePath.replace(/\//g, '');
            code += `import { init${nsName}Namespace } from './${schema.NamespacePath}';\n`;
        });

        code += `export function oxmlInitSchema() {\n`;

        schemas.forEach(schema => {
            const nsName = schema.NamespacePath.replace(/\//g, '');
            code += `    init${nsName}Namespace();\n`;
        });

        code += `}\n`;

        const outputPath = path.join(this.outputPath, 'schema', '_init.ts');
        fs.writeFileSync(outputPath, code);
    }

}
