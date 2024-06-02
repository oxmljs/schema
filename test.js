//@ts-check

import * as fs from 'fs';
import { OxmlPart } from './dist/src/framework/OxmlPart';
import { OxmlPartContainer } from './dist/src/framework/OxmlPartContainer';
import { WordprocessingDocument } from './dist/src/packaging/WordprocessingDocument';

// const zip = new JSZip();
// zip.loadAsync(content).then(async () => {
//     const xml = await zip.files['[Content_Types].xml'].async('string')
//     console.log(JSON.stringify(oxmlParse(xml, ContentTypesNamespace), null, 4));
// }).catch(e => console.log(e));

async function main() {
    console.log(OxmlPartContainer);
    console.log(OxmlPart);

    const pkg = await WordprocessingDocument.open(fs.readFileSync('sandbox.docx'));
    console.log(pkg);
}

main().catch(console.error);