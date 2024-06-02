import { PivotCacheDefinition } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { PivotTableCacheRecordsPart } from './PivotTableCacheRecordsPart';
export declare class PivotTableCacheDefinitionPart extends OxmlPart<PivotCacheDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof PivotCacheDefinition;
    get pivotCacheDefinition(): PivotCacheDefinition | undefined;
    set pivotCacheDefinition(root: PivotCacheDefinition | undefined);
    get pivotTableCacheRecordsPart(): PivotTableCacheRecordsPart | undefined;
}
