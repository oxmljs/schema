import { NamedSheetViews } from '../schema/Office2021/Excel/NamedSheetViews';
import { OxmlPart } from '../framework/OxmlPart';

export class NamedSheetViewsPart extends OxmlPart<NamedSheetViews> {

    public static override _N = 'NamedSheetViewsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2019/04/relationships/namedSheetView';
    public static override _C = 'application/vnd.ms-excel.namedsheetviews+xml';
    public static _P = '../namedSheetViews';
    public static _T = 'namedSheetView';
    public static override _E = NamedSheetViews;

    public get namedSheetView() { return this._r; }
    public set namedSheetView(root: NamedSheetViews | undefined) { this._r = root; }


}
