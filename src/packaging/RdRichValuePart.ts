import { RichValueData } from '../schema/Office2019/Excel/RichData';
import { OxmlPart } from '../framework/OxmlPart';

export class RdRichValuePart extends OxmlPart<RichValueData> {

    public static override _N = 'RdRichValuePart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/rdRichValue';
    public static override _C = 'application/vnd.ms-excel.rdrichvalue+xml';
    public static _P = 'richData';
    public static _T = 'rdrichvalue';
    public static override _E = RichValueData;

    public get rdrichvalue() { return this._r; }
    public set rdrichvalue(root: RichValueData | undefined) { this._r = root; }


}
