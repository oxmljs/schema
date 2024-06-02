import { PivotCacheDefinition } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { PivotTableCacheRecordsPart } from './PivotTableCacheRecordsPart';

export class PivotTableCacheDefinitionPart extends OxmlPart<PivotCacheDefinition> {

    public static override _N = 'PivotTableCacheDefinitionPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheDefinition';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml';
    public static _P = '../pivotCache';
    public static _T = 'pivotCacheDefinition';
    public static override _E = PivotCacheDefinition;

    public get pivotCacheDefinition() { return this._r; }
    public set pivotCacheDefinition(root: PivotCacheDefinition | undefined) { this._r = root; }

    public get pivotTableCacheRecordsPart() { return this._f<PivotTableCacheRecordsPart>('PivotTableCacheRecordsPart'); }

}
