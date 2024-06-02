import { QueryTable } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class QueryTablePart extends OxmlPart<QueryTable> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof QueryTable;
    get queryTable(): QueryTable | undefined;
    set queryTable(root: QueryTable | undefined);
}
