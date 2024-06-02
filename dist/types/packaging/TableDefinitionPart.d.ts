import { Table } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { QueryTablePart } from './QueryTablePart';
export declare class TableDefinitionPart extends OxmlPart<Table> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Table;
    get table(): Table | undefined;
    set table(root: Table | undefined);
    get queryTableParts(): QueryTablePart[];
}
