import { PivotTableDefinition } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { PivotTableCacheDefinitionPart } from './PivotTableCacheDefinitionPart';
export declare class PivotTablePart extends OxmlPart<PivotTableDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof PivotTableDefinition;
    get pivotTable(): PivotTableDefinition | undefined;
    set pivotTable(root: PivotTableDefinition | undefined);
    get pivotTableCacheDefinitionPart(): PivotTableCacheDefinitionPart | undefined;
}
