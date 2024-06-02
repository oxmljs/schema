import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { CustomXmlPropertiesPart } from './CustomXmlPropertiesPart';

export class CustomXmlPart extends OxmlPart {

    public static override _N = 'CustomXmlPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml';
    public static override _C = '*';
    public static _P = '../customXml';
    public static _T = 'item';
    public get item() { return this._r; }
    public set item(root: OxmlElement | undefined) { this._r = root; }

    public get customXmlPropertiesPart() { return this._f<CustomXmlPropertiesPart>('CustomXmlPropertiesPart'); }

}
