//@ts-check

import * as fs from 'fs';
import * as path from 'path';
import { cap, csNamepaceToTsPath, decap } from './util.mjs';

/**
 * @typedef OxmlSchema
 * @property {string} NamespacePath
 * @property {string} TargetNamespace
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
 * @property {OxmlTypeAttribute[]} Attributes
 * @property {OxmlTypeChild[]} Children
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

export class SchemasRenderer {

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

        fs.readdirSync(path.join(dataPath, 'schemas')).forEach(schemaFile => {
            const schemaFilePath = path.join(dataPath, 'schemas', schemaFile);
            /** @type {OxmlSchema} */
            const schema = JSON.parse(fs.readFileSync(schemaFilePath, 'utf-8'));
            this.schemas.push(schema);
            const namespacePath = xmlNamespaceToTsPath[schema.TargetNamespace] || '';
            schema.NamespacePath = namespacePath === 'Office2019/Drawing' || namespacePath === 'Office2019/Presentation'
                ? namespacePath + '/' + xmlNamespaceToPrefix[schema.TargetNamespace] : namespacePath;
        });

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
    }

    /**  @param {OxmlSchema} schema */
    renderSchema(schema) {

        const { xmlNamespaceToTsPath, xmlNamespaceToPrefix, ctNameToElement } = this;

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

        schema.Types?.forEach(type => {

            nameToClassName[type.Name] = type.ClassName;
            classNameToName[type.ClassName] = type.Name;

            if (type.Part) {
                ctNameToElement[type.Part] = { name: type.ClassName, ns: schema.NamespacePath };
            }

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
                } else {
                    importsDict['OxmlCompositeElement'] = true;
                }
            }

        });

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

            const childType = type.Children?.length ? ('<' + type.Children.map(c => {
                const className = nameToClassName[c.Name];
                if (!className) {
                    // TODO: add external schemas imports
                    return;
                }
                return className;
            }).filter(c => c).join(' | ') + '>') : '';

            if (type.ClassName === 'Paragraph') {
                console.log(type.ClassName + childType);
            }

            if (type.IsDerived) {
                code += comment;
                code += `export ${classType} ${type.ClassName}${childType} extends ${type.BaseClass} {\n\n`;
                //importsDict[type.BaseClass] = true;
            } else {
                if (type.IsLeafElement) {
                    code += comment;
                    code += `export ${classType} ${type.ClassName} extends OxmlLeafElement {\n\n`;
                } else {
                    code += comment;
                    code += `export ${classType} ${type.ClassName}${childType} extends OxmlCompositeElement {\n\n`;
                }
            }

            let attrsProps = '';
            let attrsDefs = '';

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

                attrsProps += `    /** ${attr.PropertyComments}. Serialized as \`${attr.QName}\` */\n`;
                attrsProps += `    public get ${pName}(): ${attr.Type} | undefined { return this._g('${attr.QName}'); }\n`;
                attrsProps += `    public set ${pName}(v: ${attr.Type} | undefined) { this._s('${attr.QName}', v); }\n`;
                if (attr.Type.startsWith('ListValue')) {
                    attrsDefs += `        new OxmlAttr('${attr.QName}', OxmlType.ListValue),\n`;
                } else if (DATA_TYPES.includes(attr.Type)) {
                    attrsDefs += `        new OxmlAttr('${attr.QName}', OxmlType.${attr.Type}),\n`;
                } else {
                    attrsDefs += `        new OxmlAttr('${attr.QName}', OxmlType.EnumValue, ${attr.Type}Array),\n`;
                }
            });

            if (qualifiedName) {
                code += `    public static override _Q = '${qualifiedName}';\n`;
            }


            if (attrsDefs) {
                code += `    public static override _A = [\n${attrsDefs}    ];\n\n`;
                code += attrsProps;
            }

            type.Children?.forEach(child => {
                if (child.PropertyName) {
                    const className = nameToClassName[child.Name];
                    if (!className) {
                        // TODO: add external schemas imports
                        return;
                    }
                    const pName = decap(child.PropertyName);
                    if (propsDict[type.BaseClass + '.' + pName]) return;
                    propsDict[type.ClassName + '.' + pName] = true;
                    code += `    /** ${child.PropertyComments || 'Returns ' + className}. */\n`;
                    code += `    public get ${pName}(): ${className} | undefined { return this._f(${className}); }\n`;
                }
            });


            code += `\n}\n`;

            totalLength += code.length;

            all += code;

        };


        schema.Types?.reverse().forEach(processType);

        schema.Types?.forEach(type => {

            if (type.Children?.length) {
                all += `${type.ClassName}._C = {\n`;

                type.Children?.forEach(child => {
                    const className = nameToClassName[child.Name];
                    const qualifiedName = child.Name.split('/')[1];
                    if (!qualifiedName) return;
                    if (!className) {
                        // TODO: add external schemas imports
                        return;
                    }
                    all += `    '${qualifiedName}': ${className},\n`;
                });

                all += `};\n`;
            }

        });


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

        all = frameworkImportsString + externalImportsString + '\n\n' + all;

        let sch = ``;

        const nsName = schema.NamespacePath.replace(/\//g, '');

        sch += `export const ContentTypesNamespace: OxmlNamespace = {\n`;
        sch += `    name: '${nsName}',\n`;
        sch += `    prefix: '${xmlNamespaceToPrefix[schema.TargetNamespace]}',\n`;
        sch += `    xmlns: '${schema.TargetNamespace}',\n`;
        sch += `    elements: {\n`;

        schema.Types?.forEach(type => {

            const qualifiedName = type.Name.split('/')[1];

            if (qualifiedName) {
                sch += `        '${qualifiedName}': ${type.ClassName},\n`;
            }

        });

        sch += `    }\n`;
        sch += `};\n`;

        files.push(schema.NamespacePath);
        fs.writeFile(path.join(outputPath, `index.ts`), all, (e) => {
            if (e) throw e;
        });

        return {
            path: schema.NamespacePath,
            name: nsName,
            prefix: xmlNamespaceToPrefix[schema.TargetNamespace],
            types: schema.Types?.length || 0,
            enums: schema.Enums?.length || 0,
            length: totalLength,
            files: files,
        };

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
        if (schema.ContentType) code += `    public static override _C = '${schema.ContentType}';\n`;
        if (schema.Paths.General) code += `    public static _P = '${schema.Paths.General}';\n`;
        if (schema.Paths.Word) code += `    public static _PW = '${schema.Paths.Word}';\n`;
        if (schema.Paths.Excel) code += `    public static _PE = '${schema.Paths.Excel}';\n`;
        if (schema.Paths.PowerPoint) code += `    public static _PP = '${schema.Paths.PowerPoint}';\n`;

        if (schema.Target) {
            code += `    public static _T = '${schema.Target}';\n\n`;
            code += `    public get ${schema.Target}() { return this._r; }\n`;
            if (!root) {
                if (!frameworkImports.includes('OxmlElement')) frameworkImports.push('OxmlElement');
            }
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

        fs.writeFileSync(path.join(outputPath, schema.Name) + '.ts', imports + '\n' + code);

        return {
            part: true,
            name: schema.Name,
        };

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

        code += `    public static create() {\n`;
        code += `        const pkg = new ${schema.Name}();\n`;
        code += '        pkg.create();\n';
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
        fs.writeFileSync(path.join(outputPath, schema.Name) + '.ts', imports + '\n' + code);

        return {
            part: false,
            name: schema.Name,
        };

    }

}



/**  @param {OxmlTypeAttribute} attr */
function getPropName(attr) {
    if (attr.PropertyName) {
        return decap(attr.PropertyName);
    }
    if (attr.QName === 'w:val') return 'value';
    return attr.QName.split(':')[1];
}

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
/**  */



/**
 * @param {string} schemaPath 
 * @param {string} outputPath 
 * @param {{[k:string]:string}} xmlNamespaceToTsPath
 * @param {{[k:string]:string}} xmlNamespaceToPrefix
 * @param {{[k:string]:{ns:string;name:string}}} ctNameToElement
 */
export function processSchema(schemaPath, outputPath, xmlNamespaceToTsPath, xmlNamespaceToPrefix, ctNameToElement) {

    /** @type {OxmlSchema} */
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

    /** @type {{[k:string]:string}} */
    const enumsFilesDict = {};

    /** @type {{[k:string]:string}} */
    const enumsNamespacesDict = {};

    let totalLength = 0;

    /** @type {string[]} */
    const files = [];

    let namespacePath = xmlNamespaceToTsPath[schema.TargetNamespace] || '';

    if (namespacePath === 'Office2019/Drawing' || namespacePath === 'Office2019/Presentation') {
        namespacePath += '/' + xmlNamespaceToPrefix[schema.TargetNamespace];
    }

    if (namespacePath) {
        outputPath = path.join(outputPath, namespacePath);
    }

    fs.mkdirSync(outputPath, { recursive: true });

    const ns = namespacePath?.split('/') || [];

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

    schema.Types?.forEach(type => {

        nameToClassName[type.Name] = type.ClassName;
        classNameToName[type.ClassName] = type.Name;

        if (type.Part) {
            ctNameToElement[type.Part] = { name: type.ClassName, ns: namespacePath };
        }

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
            } else {
                importsDict['OxmlCompositeElement'] = true;
            }
        }

    });

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

        if (type.IsDerived) {
            code += comment;
            code += `export ${classType} ${type.ClassName} extends ${type.BaseClass} {\n\n`;
            //importsDict[type.BaseClass] = true;
        } else {
            if (type.IsLeafElement) {
                code += comment;
                code += `export ${classType} ${type.ClassName} extends OxmlLeafElement {\n\n`;
            } else {
                code += comment;
                code += `export ${classType} ${type.ClassName} extends OxmlCompositeElement {\n\n`;
            }
        }

        let attrsProps = '';
        let attrsDefs = '';

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
                    if (namespacePath !== enumNamespacePath && enumNamespacePath !== 'Office2019/Presentation') {
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
                if (namespacePath !== enumNamespacePath && enumNamespacePath !== 'Office2019/Presentation') {
                    enumsFilesDict[attr.Type] = [`${shemaBase}`, enumNamespacePath].filter(n => n).join('/');
                    importsDict[attr.Type] = true;
                }
            } else {
                if (DATA_TYPES.includes(attr.Type)) importsDict[attr.Type] = true;
            }

            const pName = getPropName(attr);

            attrsProps += `    /** ${attr.PropertyComments}. Serialized as \`${attr.QName}\` */\n`;
            attrsProps += `    public get ${pName}(): ${attr.Type} | undefined { return this._g('${attr.QName}'); }\n`;
            attrsProps += `    public set ${pName}(v: ${attr.Type} | undefined) { this._s('${attr.QName}', v); }\n`;
            if (attr.Type.startsWith('ListValue')) {
                attrsDefs += `        new OxmlAttr('${attr.QName}', OxmlType.ListValue),\n`;
            } else if (DATA_TYPES.includes(attr.Type)) {
                attrsDefs += `        new OxmlAttr('${attr.QName}', OxmlType.${attr.Type}),\n`;
            } else {
                attrsDefs += `        new OxmlAttr('${attr.QName}', OxmlType.EnumValue, ${attr.Type}Array),\n`;
            }
        });

        if (qualifiedName) {
            code += `    public static override _Q = '${qualifiedName}';\n`;
        }


        if (attrsDefs) {
            code += `    public static override _A = [\n${attrsDefs}    ];\n\n`;
            code += attrsProps;
        }

        type.Children?.forEach(child => {
            if (child.PropertyName) {
                const className = nameToClassName[child.Name];
                if (!className) {
                    // TODO: add external schemas imports
                    return;
                }
                const pName = decap(child.PropertyName);
                if (propsDict[type.BaseClass + '.' + pName]) return;
                propsDict[type.ClassName + '.' + pName] = true;
                code += `    /** ${child.PropertyComments || 'Returns ' + className}. */\n`;
                code += `    public get ${pName}(): ${className} | undefined { return this._f(${className}); }\n`;
            }
        });


        code += `\n}\n`;

        totalLength += code.length;

        all += code;

    };


    schema.Types?.reverse().forEach(processType);

    schema.Types?.forEach(type => {

        if (type.Children?.length) {
            all += `${type.ClassName}._C = {\n`;

            type.Children?.forEach(child => {
                const className = nameToClassName[child.Name];
                const qualifiedName = child.Name.split('/')[1];
                if (!qualifiedName) return;
                if (!className) {
                    // TODO: add external schemas imports
                    return;
                }
                all += `    '${qualifiedName}': ${className},\n`;
            });

            all += `};\n`;
        }

    });


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

    all = frameworkImportsString + externalImportsString + '\n\n' + all;

    let sch = ``;

    const nsName = namespacePath.replace(/\//g, '');

    sch += `export const ContentTypesNamespace: OxmlNamespace = {\n`;
    sch += `    name: '${nsName}',\n`;
    sch += `    prefix: '${xmlNamespaceToPrefix[schema.TargetNamespace]}',\n`;
    sch += `    xmlns: '${schema.TargetNamespace}',\n`;
    sch += `    elements: {\n`;

    schema.Types?.forEach(type => {

        const qualifiedName = type.Name.split('/')[1];

        if (qualifiedName) {
            sch += `        '${qualifiedName}': ${type.ClassName},\n`;
        }

    });

    sch += `    }\n`;
    sch += `};\n`;

    files.push(namespacePath);
    fs.writeFile(path.join(outputPath, `index.ts`), all, (e) => {
        if (e) throw e;
    });

    return {
        path: namespacePath,
        name: nsName,
        prefix: xmlNamespaceToPrefix[schema.TargetNamespace],
        types: schema.Types?.length || 0,
        enums: schema.Enums?.length || 0,
        length: totalLength,
        files: files,
    };

}
