import { PivotCacheRecords } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class PivotTableCacheRecordsPart extends OxmlPart<PivotCacheRecords> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof PivotCacheRecords;
    get pivotCacheRecords(): PivotCacheRecords | undefined;
    set pivotCacheRecords(root: PivotCacheRecords | undefined);
}
