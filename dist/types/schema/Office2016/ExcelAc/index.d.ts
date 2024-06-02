import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
export declare enum ModelTimeGroupingContentType {
    /** undefined. Serialized value: `years` */
    Years = "years",
    /** undefined. Serialized value: `quarters` */
    Quarters = "quarters",
    /** undefined. Serialized value: `monthsindex` */
    Monthsindex = "monthsindex",
    /** undefined. Serialized value: `months` */
    Months = "months",
    /** undefined. Serialized value: `daysindex` */
    Daysindex = "daysindex",
    /** undefined. Serialized value: `days` */
    Days = "days",
    /** undefined. Serialized value: `hours` */
    Hours = "hours",
    /** undefined. Serialized value: `minutes` */
    Minutes = "minutes",
    /** undefined. Serialized value: `seconds` */
    Seconds = "seconds"
}
export declare const ModelTimeGroupingContentTypeArray: readonly [ModelTimeGroupingContentType.Years, ModelTimeGroupingContentType.Quarters, ModelTimeGroupingContentType.Monthsindex, ModelTimeGroupingContentType.Months, ModelTimeGroupingContentType.Daysindex, ModelTimeGroupingContentType.Days, ModelTimeGroupingContentType.Hours, ModelTimeGroupingContentType.Minutes, ModelTimeGroupingContentType.Seconds];
/** Defines the CalculatedTimeColumn Class. Serialized as `x16:calculatedTimeColumn` */
export declare class CalculatedTimeColumn extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** columnName. Serialized as `:columnName` */
    get columnName(): StringValue | undefined;
    set columnName(v: StringValue | undefined);
    /** columnId. Serialized as `:columnId` */
    get columnId(): StringValue | undefined;
    set columnId(v: StringValue | undefined);
    /** contentType. Serialized as `:contentType` */
    get contentType(): ModelTimeGroupingContentType | undefined;
    set contentType(v: ModelTimeGroupingContentType | undefined);
    /** isSelected. Serialized as `:isSelected` */
    get isSelected(): BooleanValue | undefined;
    set isSelected(v: BooleanValue | undefined);
}
/** Defines the ModelTimeGrouping Class. Serialized as `x16:modelTimeGrouping` */
export declare class ModelTimeGrouping extends OxmlCompositeElement<CalculatedTimeColumn> {
    static _Q: string;
    static _A: string[];
    /** tableName. Serialized as `:tableName` */
    get tableName(): StringValue | undefined;
    set tableName(v: StringValue | undefined);
    /** columnName. Serialized as `:columnName` */
    get columnName(): StringValue | undefined;
    set columnName(v: StringValue | undefined);
    /** columnId. Serialized as `:columnId` */
    get columnId(): StringValue | undefined;
    set columnId(v: StringValue | undefined);
}
/** Defines the ModelTimeGroupings Class. Serialized as `x16:modelTimeGroupings` */
export declare class ModelTimeGroupings extends OxmlCompositeElement<ModelTimeGrouping> {
    static _Q: string;
}
export declare function initOffice2016ExcelAcNamespace(): {
    prefix: string;
    xmlns: string;
};
