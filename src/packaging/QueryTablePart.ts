import { QueryTable } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class QueryTablePart extends OxmlPart<QueryTable> {

    public static override _N = 'QueryTablePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/queryTable';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml';
    public static _P = '../queryTables';
    public static _T = 'queryTable';
    public static override _E = QueryTable;

    public get queryTable() { return this._r; }
    public set queryTable(root: QueryTable | undefined) { this._r = root; }


}
