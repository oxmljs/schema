import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';


export enum ModelTimeGroupingContentType {
    /** undefined. Serialized value: `years` */
    Years = 'years',
    /** undefined. Serialized value: `quarters` */
    Quarters = 'quarters',
    /** undefined. Serialized value: `monthsindex` */
    Monthsindex = 'monthsindex',
    /** undefined. Serialized value: `months` */
    Months = 'months',
    /** undefined. Serialized value: `daysindex` */
    Daysindex = 'daysindex',
    /** undefined. Serialized value: `days` */
    Days = 'days',
    /** undefined. Serialized value: `hours` */
    Hours = 'hours',
    /** undefined. Serialized value: `minutes` */
    Minutes = 'minutes',
    /** undefined. Serialized value: `seconds` */
    Seconds = 'seconds',
}

export const ModelTimeGroupingContentTypeArray = [
    ModelTimeGroupingContentType.Years,
    ModelTimeGroupingContentType.Quarters,
    ModelTimeGroupingContentType.Monthsindex,
    ModelTimeGroupingContentType.Months,
    ModelTimeGroupingContentType.Daysindex,
    ModelTimeGroupingContentType.Days,
    ModelTimeGroupingContentType.Hours,
    ModelTimeGroupingContentType.Minutes,
    ModelTimeGroupingContentType.Seconds,
] as const;

/** Defines the CalculatedTimeColumn Class. Serialized as `x16:calculatedTimeColumn` */
export class CalculatedTimeColumn extends OxmlLeafElement {

    public static override _Q = 'x16:calculatedTimeColumn';
    public static override _A = [':columnName',':columnId',':contentType',':isSelected',];
    /** columnName. Serialized as `:columnName` */
    public get columnName(): StringValue | undefined { return this._g(':columnName'); }
    public set columnName(v: StringValue | undefined) { this._s(':columnName', v); }
    /** columnId. Serialized as `:columnId` */
    public get columnId(): StringValue | undefined { return this._g(':columnId'); }
    public set columnId(v: StringValue | undefined) { this._s(':columnId', v); }
    /** contentType. Serialized as `:contentType` */
    public get contentType(): ModelTimeGroupingContentType | undefined { return this._g(':contentType'); }
    public set contentType(v: ModelTimeGroupingContentType | undefined) { this._s(':contentType', v); }
    /** isSelected. Serialized as `:isSelected` */
    public get isSelected(): BooleanValue | undefined { return this._g(':isSelected'); }
    public set isSelected(v: BooleanValue | undefined) { this._s(':isSelected', v); }

}
/** Defines the ModelTimeGrouping Class. Serialized as `x16:modelTimeGrouping` */
export class ModelTimeGrouping extends OxmlCompositeElement<CalculatedTimeColumn> {

    public static override _Q = 'x16:modelTimeGrouping';
    public static override _A = [':tableName',':columnName',':columnId',];
    /** tableName. Serialized as `:tableName` */
    public get tableName(): StringValue | undefined { return this._g(':tableName'); }
    public set tableName(v: StringValue | undefined) { this._s(':tableName', v); }
    /** columnName. Serialized as `:columnName` */
    public get columnName(): StringValue | undefined { return this._g(':columnName'); }
    public set columnName(v: StringValue | undefined) { this._s(':columnName', v); }
    /** columnId. Serialized as `:columnId` */
    public get columnId(): StringValue | undefined { return this._g(':columnId'); }
    public set columnId(v: StringValue | undefined) { this._s(':columnId', v); }

}
/** Defines the ModelTimeGroupings Class. Serialized as `x16:modelTimeGroupings` */
export class ModelTimeGroupings extends OxmlCompositeElement<ModelTimeGrouping> {

    public static override _Q = 'x16:modelTimeGroupings';

}

export function initOffice2016ExcelAcNamespace() {
    CalculatedTimeColumn._D = {
        ':columnName': new OxmlAttr(':columnName', OxmlType.StringValue),
        ':columnId': new OxmlAttr(':columnId', OxmlType.StringValue),
        ':contentType': new OxmlAttr(':contentType', OxmlType.EnumValue, ModelTimeGroupingContentTypeArray),
        ':isSelected': new OxmlAttr(':isSelected', OxmlType.BooleanValue),
    };
    ModelTimeGrouping._C = {
        'x16:calculatedTimeColumn': CalculatedTimeColumn,
    };
    ModelTimeGrouping._D = {
        ':tableName': new OxmlAttr(':tableName', OxmlType.StringValue),
        ':columnName': new OxmlAttr(':columnName', OxmlType.StringValue),
        ':columnId': new OxmlAttr(':columnId', OxmlType.StringValue),
    };
    ModelTimeGroupings._C = {
        'x16:modelTimeGrouping': ModelTimeGrouping,
    };
    return {
        prefix: 'x16',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2014/11/main',
    };
}
