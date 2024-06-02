import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class CustomDataPart extends OxmlPart {

    public static override _N = 'CustomDataPart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/customData';
    public static override _C = 'application/binary';
    public static _P = 'customData';
    public static _T = 'customData';
    public get customData() { return this._r; }
    public set customData(root: OxmlElement | undefined) { this._r = root; }


}
