import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class CustomPropertyPart extends OxmlPart {

    public static override _N = 'CustomPropertyPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/customProperty';
    public static override _C = '*';
    public static _P = '.';
    public static _T = 'CustomProperty';
    public get CustomProperty() { return this._r; }
    public set CustomProperty(root: OxmlElement | undefined) { this._r = root; }


}
