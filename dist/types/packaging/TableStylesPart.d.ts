import { TableStyleList } from '../schema/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
export declare class TableStylesPart extends OxmlPart<TableStyleList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof TableStyleList;
    get tableStyles(): TableStyleList | undefined;
    set tableStyles(root: TableStyleList | undefined);
}
