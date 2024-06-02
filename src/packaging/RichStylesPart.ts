import { RichStylesheet } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';

export class RichStylesPart extends OxmlPart<RichStylesheet> {

    public static override _N = 'RichStylesPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/richStyles';
    public static override _C = 'application/vnd.ms-excel.richstyles+xml';
    public static _P = 'richData';
    public static _T = 'richStyles';
    public static override _E = RichStylesheet;

    public get richStyles() { return this._r; }
    public set richStyles(root: RichStylesheet | undefined) { this._r = root; }


}
