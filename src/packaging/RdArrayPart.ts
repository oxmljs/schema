import { ArrayData } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';

export class RdArrayPart extends OxmlPart<ArrayData> {

    public static override _N = 'RdArrayPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/rdArray';
    public static override _C = 'application/vnd.ms-excel.rdarray+xml';
    public static _P = 'richData';
    public static _T = 'rdarray';
    public static override _E = ArrayData;

    public get rdarray() { return this._r; }
    public set rdarray(root: ArrayData | undefined) { this._r = root; }


}
