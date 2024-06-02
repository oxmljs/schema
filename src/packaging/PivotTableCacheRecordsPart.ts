import { PivotCacheRecords } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class PivotTableCacheRecordsPart extends OxmlPart<PivotCacheRecords> {

    public static override _N = 'PivotTableCacheRecordsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheRecords';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml';
    public static _P = '.';
    public static _T = 'pivotCacheRecords';
    public static override _E = PivotCacheRecords;

    public get pivotCacheRecords() { return this._r; }
    public set pivotCacheRecords(root: PivotCacheRecords | undefined) { this._r = root; }


}
