import { RichValueTypesInfo } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';

export class RdRichValueTypesPart extends OxmlPart<RichValueTypesInfo> {

    public static override _N = 'RdRichValueTypesPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/rdRichValueTypes';
    public static override _C = 'application/vnd.ms-excel.rdrichvaluetypes+xml';
    public static _P = 'richData';
    public static _T = 'rdRichValueTypes';
    public static override _E = RichValueTypesInfo;

    public get rdRichValueTypes() { return this._r; }
    public set rdRichValueTypes(root: RichValueTypesInfo | undefined) { this._r = root; }


}
