import { NamedSheetViews } from '../schema/Office2021/Excel/NamedSheetViews';
import { OxmlPart } from '../framework/OxmlPart';
export declare class NamedSheetViewsPart extends OxmlPart<NamedSheetViews> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof NamedSheetViews;
    get namedSheetView(): NamedSheetViews | undefined;
    set namedSheetView(root: NamedSheetViews | undefined);
}
