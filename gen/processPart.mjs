//@ts-check

import * as fs from 'fs';
import path from 'path';
import { decap } from './util.mjs';

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
 * 
 */


/** @type {{ [key: string]: string }} */
const reverseOOXMLRelationshipTypes = {
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument': 'OfficeDocument',
    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties': 'CoreProperties',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties': 'ExtendedProperties',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties': 'CustomProperties',
    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail': 'Thumbnail',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles': 'Styles',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable': 'FontTable',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings': 'WebSettings',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings': 'Settings',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme': 'Theme',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart': 'Chart',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image': 'Image',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink': 'Hyperlink',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments': 'Comments',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing': 'VMLDrawing',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/embeddedPackage': 'EmbeddedPackage',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide': 'Slide',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout': 'SlideLayout',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster': 'SlideMaster',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide': 'NotesSlide',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster': 'NotesMaster',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/handoutMaster': 'HandoutMaster',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps': 'SlideShow',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/workbook': 'Workbook',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet': 'Worksheet',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings': 'SharedStringTable',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain': 'CalculationChain',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable': 'PivotTable'
};


/**
 * @param {OxmlPart} schema 
 * @param {string} outputPath 
 * @param {{[k:string]:{ns:string;name:string}}} ctNameToElement
 */
export function writePart(schema, outputPath, ctNameToElement) {

    let root = ctNameToElement[schema.Name];

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

    fs.writeFileSync(path.join(outputPath, schema.Name) + '.ts', imports + '\n' + code);

    return {
        part: true,
        name: schema.Name,
    };

}

/**
 * @param {OxmlPart} schema 
 * @param {string} outputPath 
 * @param {{[k:string]:{ns:string;name:string}}} ctNameToElement
 */
export function writePackage(schema, outputPath, ctNameToElement) {

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

    fs.writeFileSync(path.join(outputPath, schema.Name) + '.ts', imports + '\n' + code);

    return {
        part: false,
        name: schema.Name,
    };

}

/**
 * @param {string} partPath 
 * @param {string} outputPath 
 * @param {{[k:string]:{ns:string;name:string}}} ctNameToElement
 */
export function processPart(partPath, outputPath, ctNameToElement) {

    /** @type {OxmlPart} */
    const schema = JSON.parse(fs.readFileSync(partPath, 'utf-8'));

    if (schema.Base === 'OpenXmlPackage')
        return writePackage(schema, outputPath, ctNameToElement);

    return writePart(schema, outputPath, ctNameToElement);


}
