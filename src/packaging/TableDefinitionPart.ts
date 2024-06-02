import { Table } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { QueryTablePart } from './QueryTablePart';

export class TableDefinitionPart extends OxmlPart<Table> {

    public static override _N = 'TableDefinitionPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/table';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml';
    public static _P = '../tables';
    public static _T = 'table';
    public static override _E = Table;

    public get table() { return this._r; }
    public set table(root: Table | undefined) { this._r = root; }

    public get queryTableParts() { return this._m<QueryTablePart>('QueryTablePart'); }

}
