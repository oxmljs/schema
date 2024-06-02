import { PivotTableDefinition } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { PivotTableCacheDefinitionPart } from './PivotTableCacheDefinitionPart';

export class PivotTablePart extends OxmlPart<PivotTableDefinition> {

    public static override _N = 'PivotTablePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml';
    public static _P = '../pivotTables';
    public static _T = 'pivotTable';
    public static override _E = PivotTableDefinition;

    public get pivotTable() { return this._r; }
    public set pivotTable(root: PivotTableDefinition | undefined) { this._r = root; }

    public get pivotTableCacheDefinitionPart() { return this._f<PivotTableCacheDefinitionPart>('PivotTableCacheDefinitionPart'); }

}
