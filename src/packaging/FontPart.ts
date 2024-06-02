import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class FontPart extends OxmlPart {

    public static override _N = 'FontPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/font';
    public static override _C = '*';
    public static _P = 'fonts';
    public static _T = 'font';
    public get font() { return this._r; }
    public set font(root: OxmlElement | undefined) { this._r = root; }


}
