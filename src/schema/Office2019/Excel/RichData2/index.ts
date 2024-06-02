import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { UInt16Value } from '../../../../framework/types/UInt16Value';
import { DoubleValue } from '../../../../framework/types/DoubleValue';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { FilterOperatorValues, FilterOperatorValuesArray } from '../../../Spreadsheet';
import { DateTimeGroupingValues, DateTimeGroupingValuesArray } from '../../../Spreadsheet';
import { DynamicFilterValues, DynamicFilterValuesArray } from '../../../Spreadsheet';
import { SortByValues, SortByValuesArray } from '../../../Spreadsheet';
import { IconSetTypeValues, IconSetTypeValuesArray } from '../../../Office2010/Excel';import { DifferentialFormat as XDifferentialFormat } from '../../../Spreadsheet';
import { Extension as XExtension } from '../../../Spreadsheet';


export enum SupportingPropertyBagValueType {
    /** undefined. Serialized value: `d` */
    D = 'd',
    /** undefined. Serialized value: `i` */
    I = 'i',
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `s` */
    S = 's',
    /** undefined. Serialized value: `spb` */
    Spb = 'spb',
    /** undefined. Serialized value: `spba` */
    Spba = 'spba',
}

export const SupportingPropertyBagValueTypeArray = [
    SupportingPropertyBagValueType.D,
    SupportingPropertyBagValueType.I,
    SupportingPropertyBagValueType.B,
    SupportingPropertyBagValueType.S,
    SupportingPropertyBagValueType.Spb,
    SupportingPropertyBagValueType.Spba,
] as const;

export enum SupportingPropertyBagArrayValueType {
    /** undefined. Serialized value: `d` */
    D = 'd',
    /** undefined. Serialized value: `i` */
    I = 'i',
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `s` */
    S = 's',
    /** undefined. Serialized value: `spb` */
    Spb = 'spb',
}

export const SupportingPropertyBagArrayValueTypeArray = [
    SupportingPropertyBagArrayValueType.D,
    SupportingPropertyBagArrayValueType.I,
    SupportingPropertyBagArrayValueType.B,
    SupportingPropertyBagArrayValueType.S,
    SupportingPropertyBagArrayValueType.Spb,
] as const;

export enum ArrayValueType {
    /** undefined. Serialized value: `d` */
    D = 'd',
    /** undefined. Serialized value: `i` */
    I = 'i',
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `e` */
    E = 'e',
    /** undefined. Serialized value: `s` */
    S = 's',
    /** undefined. Serialized value: `r` */
    R = 'r',
    /** undefined. Serialized value: `a` */
    A = 'a',
}

export const ArrayValueTypeArray = [
    ArrayValueType.D,
    ArrayValueType.I,
    ArrayValueType.B,
    ArrayValueType.E,
    ArrayValueType.S,
    ArrayValueType.R,
    ArrayValueType.A,
] as const;

export enum RichFormatPropertyType {
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `n` */
    N = 'n',
    /** undefined. Serialized value: `i` */
    I = 'i',
    /** undefined. Serialized value: `s` */
    S = 's',
}

export const RichFormatPropertyTypeArray = [
    RichFormatPropertyType.B,
    RichFormatPropertyType.N,
    RichFormatPropertyType.I,
    RichFormatPropertyType.S,
] as const;

/** Defines the RichValueTypeReservedKeyFlag Class. Serialized as `xlrd2:flag` */
export class RichValueTypeReservedKeyFlag extends OxmlLeafElement {

    public static override _Q = 'xlrd2:flag';
    public static override _A = [':name',':value',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** value. Serialized as `:value` */
    public get value(): BooleanValue | undefined { return this._g(':value'); }
    public set value(v: BooleanValue | undefined) { this._s(':value', v); }

}
/** Defines the RichValueTypeReservedKey Class. Serialized as `xlrd2:key` */
export class RichValueTypeReservedKey extends OxmlCompositeElement<RichValueTypeReservedKeyFlag> {

    public static override _Q = 'xlrd2:key';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the RichValueTypeKeyFlags Class. Serialized as `xlrd2:keyFlags` */
export class RichValueTypeKeyFlags extends OxmlCompositeElement<RichValueTypeReservedKey> {

    public static override _Q = 'xlrd2:keyFlags';

}
/** Defines the RichValueType Class. Serialized as `xlrd2:type` */
export class RichValueType extends OxmlCompositeElement<RichValueTypeKeyFlags | ExtensionList> {

    public static override _Q = 'xlrd2:type';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns RichValueTypeKeyFlags. */
    public get richValueTypeKeyFlags(): RichValueTypeKeyFlags | undefined { return this._f(RichValueTypeKeyFlags); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the RichValueTypes Class. Serialized as `xlrd2:types` */
export class RichValueTypes extends OxmlCompositeElement<RichValueType> {

    public static override _Q = 'xlrd2:types';

}
/** Defines the RichValueGlobalType Class. Serialized as `xlrd2:global` */
export class RichValueGlobalType extends OxmlCompositeElement<RichValueTypeKeyFlags | ExtensionList> {

    public static override _Q = 'xlrd2:global';
    /** Returns RichValueTypeKeyFlags. */
    public get richValueTypeKeyFlags(): RichValueTypeKeyFlags | undefined { return this._f(RichValueTypeKeyFlags); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the RichStylePropertyValue Class. Serialized as `xlrd2:rpv` */
export class RichStylePropertyValue extends OxmlLeafTextElement {

    public static override _Q = 'xlrd2:rpv';
    public static override _A = [':i',];
    /** i. Serialized as `:i` */
    public get i(): UInt32Value | undefined { return this._g(':i'); }
    public set i(v: UInt32Value | undefined) { this._s(':i', v); }

}
/** Defines the RichStyle Class. Serialized as `xlrd2:rSty` */
export class RichStyle extends OxmlCompositeElement<RichStylePropertyValue> {

    public static override _Q = 'xlrd2:rSty';
    public static override _A = [':dxfid',];
    /** dxfid. Serialized as `:dxfid` */
    public get dxfid(): UInt32Value | undefined { return this._g(':dxfid'); }
    public set dxfid(v: UInt32Value | undefined) { this._s(':dxfid', v); }

}
/** Defines the RichFormatProperty Class. Serialized as `xlrd2:rPr` */
export class RichFormatProperty extends OxmlLeafElement {

    public static override _Q = 'xlrd2:rPr';
    public static override _A = [':n',':t',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** t. Serialized as `:t` */
    public get t(): RichFormatPropertyType | undefined { return this._g(':t'); }
    public set t(v: RichFormatPropertyType | undefined) { this._s(':t', v); }

}
/** Defines the RichStyles Class. Serialized as `xlrd2:richStyles` */
export class RichStyles extends OxmlCompositeElement<RichStyle> {

    public static override _Q = 'xlrd2:richStyles';

}
/** Defines the RichFormatProperties Class. Serialized as `xlrd2:richProperties` */
export class RichFormatProperties extends OxmlCompositeElement<RichFormatProperty> {

    public static override _Q = 'xlrd2:richProperties';

}
/** Defines the Dxfs Class. Serialized as `xlrd2:dxfs` */
export class Dxfs extends OxmlCompositeElement<XDifferentialFormat> {

    public static override _Q = 'xlrd2:dxfs';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ArrayValue Class. Serialized as `xlrd2:v` */
export class ArrayValue extends OxmlLeafTextElement {

    public static override _Q = 'xlrd2:v';
    public static override _A = [':t',];
    /** t. Serialized as `:t` */
    public get t(): ArrayValueType | undefined { return this._g(':t'); }
    public set t(v: ArrayValueType | undefined) { this._s(':t', v); }

}
/** Defines the Array Class. Serialized as `xlrd2:a` */
export class Array extends OxmlCompositeElement<ArrayValue> {

    public static override _Q = 'xlrd2:a';
    public static override _A = [':r',':c',];
    /** r. Serialized as `:r` */
    public get r(): UInt32Value | undefined { return this._g(':r'); }
    public set r(v: UInt32Value | undefined) { this._s(':r', v); }
    /** c. Serialized as `:c` */
    public get c(): UInt32Value | undefined { return this._g(':c'); }
    public set c(v: UInt32Value | undefined) { this._s(':c', v); }

}
/** Defines the SupportingPropertyBagArrayValue Class. Serialized as `xlrd2:v` */
export class SupportingPropertyBagArrayValue extends OxmlLeafTextElement {

    public static override _Q = 'xlrd2:v';
    public static override _A = [':t',];
    /** t. Serialized as `:t` */
    public get t(): SupportingPropertyBagArrayValueType | undefined { return this._g(':t'); }
    public set t(v: SupportingPropertyBagArrayValueType | undefined) { this._s(':t', v); }

}
/** Defines the SupportingPropertyBagArray Class. Serialized as `xlrd2:a` */
export class SupportingPropertyBagArray extends OxmlCompositeElement<SupportingPropertyBagArrayValue> {

    public static override _Q = 'xlrd2:a';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the SupportingPropertyBagKey Class. Serialized as `xlrd2:k` */
export class SupportingPropertyBagKey extends OxmlLeafElement {

    public static override _Q = 'xlrd2:k';
    public static override _A = [':n',':t',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** t. Serialized as `:t` */
    public get t(): SupportingPropertyBagValueType | undefined { return this._g(':t'); }
    public set t(v: SupportingPropertyBagValueType | undefined) { this._s(':t', v); }

}
/** Defines the SupportingPropertyBagStructure Class. Serialized as `xlrd2:s` */
export class SupportingPropertyBagStructure extends OxmlCompositeElement<SupportingPropertyBagKey> {

    public static override _Q = 'xlrd2:s';

}
/** Defines the SupportingPropertyBagValue Class. Serialized as `xlrd2:v` */
export class SupportingPropertyBagValue extends OxmlLeafTextElement {

    public static override _Q = 'xlrd2:v';

}
/** Defines the SupportingPropertyBag Class. Serialized as `xlrd2:spb` */
export class SupportingPropertyBag extends OxmlCompositeElement<SupportingPropertyBagValue> {

    public static override _Q = 'xlrd2:spb';
    public static override _A = [':s',];
    /** s. Serialized as `:s` */
    public get s(): UInt32Value | undefined { return this._g(':s'); }
    public set s(v: UInt32Value | undefined) { this._s(':s', v); }

}
/** Defines the SupportingPropertyBagData Class. Serialized as `xlrd2:spbData` */
export class SupportingPropertyBagData extends OxmlCompositeElement<SupportingPropertyBag | ExtensionList> {

    public static override _Q = 'xlrd2:spbData';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the SupportingPropertyBagArrayData Class. Serialized as `xlrd2:spbArrays` */
export class SupportingPropertyBagArrayData extends OxmlCompositeElement<SupportingPropertyBagArray | ExtensionList> {

    public static override _Q = 'xlrd2:spbArrays';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CustomRichFilter Class. Serialized as `xlrd2:customFilter` */
export class CustomRichFilter extends OxmlLeafElement {

    public static override _Q = 'xlrd2:customFilter';
    public static override _A = [':key',':operator',':val',];
    /** key. Serialized as `:key` */
    public get key(): StringValue | undefined { return this._g(':key'); }
    public set key(v: StringValue | undefined) { this._s(':key', v); }
    /** Filter Comparison Operator. Serialized as `:operator` */
    public get operator(): FilterOperatorValues | undefined { return this._g(':operator'); }
    public set operator(v: FilterOperatorValues | undefined) { this._s(':operator', v); }
    /** Top or Bottom Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the RichDateGroupItem Class. Serialized as `xlrd2:dateGroupItem` */
export class RichDateGroupItem extends OxmlLeafElement {

    public static override _Q = 'xlrd2:dateGroupItem';
    public static override _A = [':key',':year',':month',':day',':hour',':minute',':second',':dateTimeGrouping',];
    /** key. Serialized as `:key` */
    public get key(): StringValue | undefined { return this._g(':key'); }
    public set key(v: StringValue | undefined) { this._s(':key', v); }
    /** Year. Serialized as `:year` */
    public get year(): UInt16Value | undefined { return this._g(':year'); }
    public set year(v: UInt16Value | undefined) { this._s(':year', v); }
    /** Month. Serialized as `:month` */
    public get month(): UInt16Value | undefined { return this._g(':month'); }
    public set month(v: UInt16Value | undefined) { this._s(':month', v); }
    /** Day. Serialized as `:day` */
    public get day(): UInt16Value | undefined { return this._g(':day'); }
    public set day(v: UInt16Value | undefined) { this._s(':day', v); }
    /** Hour. Serialized as `:hour` */
    public get hour(): UInt16Value | undefined { return this._g(':hour'); }
    public set hour(v: UInt16Value | undefined) { this._s(':hour', v); }
    /** Minute. Serialized as `:minute` */
    public get minute(): UInt16Value | undefined { return this._g(':minute'); }
    public set minute(v: UInt16Value | undefined) { this._s(':minute', v); }
    /** Second. Serialized as `:second` */
    public get second(): UInt16Value | undefined { return this._g(':second'); }
    public set second(v: UInt16Value | undefined) { this._s(':second', v); }
    /** Date Time Grouping. Serialized as `:dateTimeGrouping` */
    public get dateTimeGrouping(): DateTimeGroupingValues | undefined { return this._g(':dateTimeGrouping'); }
    public set dateTimeGrouping(v: DateTimeGroupingValues | undefined) { this._s(':dateTimeGrouping', v); }

}
/** Defines the RichFilter Class. Serialized as `xlrd2:filter` */
export class RichFilter extends OxmlLeafElement {

    public static override _Q = 'xlrd2:filter';
    public static override _A = [':key',':val',':blank',':nodata',];
    /** key. Serialized as `:key` */
    public get key(): StringValue | undefined { return this._g(':key'); }
    public set key(v: StringValue | undefined) { this._s(':key', v); }
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }
    /** blank. Serialized as `:blank` */
    public get blank(): BooleanValue | undefined { return this._g(':blank'); }
    public set blank(v: BooleanValue | undefined) { this._s(':blank', v); }
    /** nodata. Serialized as `:nodata` */
    public get nodata(): BooleanValue | undefined { return this._g(':nodata'); }
    public set nodata(v: BooleanValue | undefined) { this._s(':nodata', v); }

}
/** Defines the ExtensionList Class. Serialized as `xlrd2:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xlrd2:extLst';

}
/** Defines the DynamicRichFilter Class. Serialized as `xlrd2:dynamicFilter` */
export class DynamicRichFilter extends OxmlLeafElement {

    public static override _Q = 'xlrd2:dynamicFilter';
    public static override _A = [':key',':type',':val',':maxVal',':valIso',':maxValIso',];
    /** key. Serialized as `:key` */
    public get key(): StringValue | undefined { return this._g(':key'); }
    public set key(v: StringValue | undefined) { this._s(':key', v); }
    /** Dynamic filter type. Serialized as `:type` */
    public get type(): DynamicFilterValues | undefined { return this._g(':type'); }
    public set type(v: DynamicFilterValues | undefined) { this._s(':type', v); }
    /** Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }
    /** Max Value. Serialized as `:maxVal` */
    public get maxVal(): DoubleValue | undefined { return this._g(':maxVal'); }
    public set maxVal(v: DoubleValue | undefined) { this._s(':maxVal', v); }
    /** valIso. Serialized as `:valIso` */
    public get valIso(): DateTimeValue | undefined { return this._g(':valIso'); }
    public set valIso(v: DateTimeValue | undefined) { this._s(':valIso', v); }
    /** maxValIso. Serialized as `:maxValIso` */
    public get maxValIso(): DateTimeValue | undefined { return this._g(':maxValIso'); }
    public set maxValIso(v: DateTimeValue | undefined) { this._s(':maxValIso', v); }

}
/** Defines the CustomRichFilters Class. Serialized as `xlrd2:customFilters` */
export class CustomRichFilters extends OxmlCompositeElement<CustomRichFilter | ExtensionList> {

    public static override _Q = 'xlrd2:customFilters';
    public static override _A = [':and',];
    /** and. Serialized as `:and` */
    public get and(): BooleanValue | undefined { return this._g(':and'); }
    public set and(v: BooleanValue | undefined) { this._s(':and', v); }

}
/** Defines the RichTop10 Class. Serialized as `xlrd2:top10` */
export class RichTop10 extends OxmlLeafElement {

    public static override _Q = 'xlrd2:top10';
    public static override _A = [':key',':top',':percent',':val',':filterVal',];
    /** key. Serialized as `:key` */
    public get key(): StringValue | undefined { return this._g(':key'); }
    public set key(v: StringValue | undefined) { this._s(':key', v); }
    /** Top. Serialized as `:top` */
    public get top(): BooleanValue | undefined { return this._g(':top'); }
    public set top(v: BooleanValue | undefined) { this._s(':top', v); }
    /** Filter by Percent. Serialized as `:percent` */
    public get percent(): BooleanValue | undefined { return this._g(':percent'); }
    public set percent(v: BooleanValue | undefined) { this._s(':percent', v); }
    /** Top or Bottom Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }
    /** Filter Value. Serialized as `:filterVal` */
    public get filterValue(): DoubleValue | undefined { return this._g(':filterVal'); }
    public set filterValue(v: DoubleValue | undefined) { this._s(':filterVal', v); }

}
/** Defines the RichFilters Class. Serialized as `xlrd2:filters` */
export class RichFilters extends OxmlCompositeElement<RichFilter | RichDateGroupItem | ExtensionList> {

    public static override _Q = 'xlrd2:filters';

}
/** Defines the RichValueTypesInfo Class. Serialized as `xlrd2:rvTypesInfo` */
export class RichValueTypesInfo extends OxmlPartRootElement<RichValueGlobalType | RichValueTypes | ExtensionList> {

    public static override _Q = 'xlrd2:rvTypesInfo';
    /** Returns RichValueGlobalType. */
    public get richValueGlobalType(): RichValueGlobalType | undefined { return this._f(RichValueGlobalType); }
    /** Returns RichValueTypes. */
    public get richValueTypes(): RichValueTypes | undefined { return this._f(RichValueTypes); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the RichStylesheet Class. Serialized as `xlrd2:richStyleSheet` */
export class RichStylesheet extends OxmlPartRootElement<Dxfs | RichFormatProperties | RichStyles | ExtensionList> {

    public static override _Q = 'xlrd2:richStyleSheet';
    /** Returns Dxfs. */
    public get dxfs(): Dxfs | undefined { return this._f(Dxfs); }
    /** Returns RichFormatProperties. */
    public get richFormatProperties(): RichFormatProperties | undefined { return this._f(RichFormatProperties); }
    /** Returns RichStyles. */
    public get richStyles(): RichStyles | undefined { return this._f(RichStyles); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ArrayData Class. Serialized as `xlrd2:arrayData` */
export class ArrayData extends OxmlPartRootElement<Array | ExtensionList> {

    public static override _Q = 'xlrd2:arrayData';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the SupportingPropertyBagStructures Class. Serialized as `xlrd2:spbStructures` */
export class SupportingPropertyBagStructures extends OxmlPartRootElement<SupportingPropertyBagStructure | ExtensionList> {

    public static override _Q = 'xlrd2:spbStructures';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the SupportingPropertyBags Class. Serialized as `xlrd2:supportingPropertyBags` */
export class SupportingPropertyBags extends OxmlPartRootElement<SupportingPropertyBagArrayData | SupportingPropertyBagData> {

    public static override _Q = 'xlrd2:supportingPropertyBags';
    /** Returns SupportingPropertyBagArrayData. */
    public get supportingPropertyBagArrayData(): SupportingPropertyBagArrayData | undefined { return this._f(SupportingPropertyBagArrayData); }
    /** Returns SupportingPropertyBagData. */
    public get supportingPropertyBagData(): SupportingPropertyBagData | undefined { return this._f(SupportingPropertyBagData); }

}
/** Defines the RichSortCondition Class. Serialized as `xlrd2:richSortCondition` */
export class RichSortCondition extends OxmlLeafElement {

    public static override _Q = 'xlrd2:richSortCondition';
    public static override _A = [':richSortKey',':descending',':sortBy',':ref',':customList',':dxfId',':iconSet',':iconId',];
    /** richSortKey. Serialized as `:richSortKey` */
    public get richSortKey(): StringValue | undefined { return this._g(':richSortKey'); }
    public set richSortKey(v: StringValue | undefined) { this._s(':richSortKey', v); }
    /** descending. Serialized as `:descending` */
    public get descending(): BooleanValue | undefined { return this._g(':descending'); }
    public set descending(v: BooleanValue | undefined) { this._s(':descending', v); }
    /** sortBy. Serialized as `:sortBy` */
    public get sortBy(): SortByValues | undefined { return this._g(':sortBy'); }
    public set sortBy(v: SortByValues | undefined) { this._s(':sortBy', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** customList. Serialized as `:customList` */
    public get customList(): StringValue | undefined { return this._g(':customList'); }
    public set customList(v: StringValue | undefined) { this._s(':customList', v); }
    /** dxfId. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** iconId. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the RichFilterColumn Class. Serialized as `xlrd2:filterColumn` */
export class RichFilterColumn extends OxmlCompositeElement<RichFilters | RichTop10 | CustomRichFilters | DynamicRichFilter | ExtensionList> {

    public static override _Q = 'xlrd2:filterColumn';
    /** Returns RichFilters. */
    public get richFilters(): RichFilters | undefined { return this._f(RichFilters); }
    /** Returns RichTop10. */
    public get richTop10(): RichTop10 | undefined { return this._f(RichTop10); }
    /** Returns CustomRichFilters. */
    public get customRichFilters(): CustomRichFilters | undefined { return this._f(CustomRichFilters); }
    /** Returns DynamicRichFilter. */
    public get dynamicRichFilter(): DynamicRichFilter | undefined { return this._f(DynamicRichFilter); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}

export function initOffice2019ExcelRichData2Namespace() {
    RichValueTypeReservedKeyFlag._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':value': new OxmlAttr(':value', OxmlType.BooleanValue),
    };
    RichValueTypeReservedKey._C = {
        'xlrd2:flag': RichValueTypeReservedKeyFlag,
    };
    RichValueTypeReservedKey._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    RichValueTypeKeyFlags._C = {
        'xlrd2:key': RichValueTypeReservedKey,
    };
    RichValueType._C = {
        'xlrd2:keyFlags': RichValueTypeKeyFlags,
        'xlrd2:extLst': ExtensionList,
    };
    RichValueType._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    RichValueTypes._C = {
        'xlrd2:type': RichValueType,
    };
    RichValueGlobalType._C = {
        'xlrd2:keyFlags': RichValueTypeKeyFlags,
        'xlrd2:extLst': ExtensionList,
    };
    RichStylePropertyValue._D = {
        ':i': new OxmlAttr(':i', OxmlType.UInt32Value),
    };
    RichStyle._C = {
        'xlrd2:rpv': RichStylePropertyValue,
    };
    RichStyle._D = {
        ':dxfid': new OxmlAttr(':dxfid', OxmlType.UInt32Value),
    };
    RichFormatProperty._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, RichFormatPropertyTypeArray),
    };
    RichStyles._C = {
        'xlrd2:rSty': RichStyle,
    };
    RichFormatProperties._C = {
        'xlrd2:rPr': RichFormatProperty,
    };
    Dxfs._C = {
        'x:dxf': XDifferentialFormat,
    };
    Dxfs._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ArrayValue._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, ArrayValueTypeArray),
    };
    Array._C = {
        'xlrd2:v': ArrayValue,
    };
    Array._D = {
        ':r': new OxmlAttr(':r', OxmlType.UInt32Value),
        ':c': new OxmlAttr(':c', OxmlType.UInt32Value),
    };
    SupportingPropertyBagArrayValue._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, SupportingPropertyBagArrayValueTypeArray),
    };
    SupportingPropertyBagArray._C = {
        'xlrd2:v': SupportingPropertyBagArrayValue,
    };
    SupportingPropertyBagArray._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SupportingPropertyBagKey._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, SupportingPropertyBagValueTypeArray),
    };
    SupportingPropertyBagStructure._C = {
        'xlrd2:k': SupportingPropertyBagKey,
    };
    SupportingPropertyBag._C = {
        'xlrd2:v': SupportingPropertyBagValue,
    };
    SupportingPropertyBag._D = {
        ':s': new OxmlAttr(':s', OxmlType.UInt32Value),
    };
    SupportingPropertyBagData._C = {
        'xlrd2:spb': SupportingPropertyBag,
        'xlrd2:extLst': ExtensionList,
    };
    SupportingPropertyBagData._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SupportingPropertyBagArrayData._C = {
        'xlrd2:a': SupportingPropertyBagArray,
        'xlrd2:extLst': ExtensionList,
    };
    SupportingPropertyBagArrayData._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CustomRichFilter._D = {
        ':key': new OxmlAttr(':key', OxmlType.StringValue),
        ':operator': new OxmlAttr(':operator', OxmlType.EnumValue, FilterOperatorValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    RichDateGroupItem._D = {
        ':key': new OxmlAttr(':key', OxmlType.StringValue),
        ':year': new OxmlAttr(':year', OxmlType.UInt16Value),
        ':month': new OxmlAttr(':month', OxmlType.UInt16Value),
        ':day': new OxmlAttr(':day', OxmlType.UInt16Value),
        ':hour': new OxmlAttr(':hour', OxmlType.UInt16Value),
        ':minute': new OxmlAttr(':minute', OxmlType.UInt16Value),
        ':second': new OxmlAttr(':second', OxmlType.UInt16Value),
        ':dateTimeGrouping': new OxmlAttr(':dateTimeGrouping', OxmlType.EnumValue, DateTimeGroupingValuesArray),
    };
    RichFilter._D = {
        ':key': new OxmlAttr(':key', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
        ':blank': new OxmlAttr(':blank', OxmlType.BooleanValue),
        ':nodata': new OxmlAttr(':nodata', OxmlType.BooleanValue),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    DynamicRichFilter._D = {
        ':key': new OxmlAttr(':key', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, DynamicFilterValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
        ':maxVal': new OxmlAttr(':maxVal', OxmlType.DoubleValue),
        ':valIso': new OxmlAttr(':valIso', OxmlType.DateTimeValue),
        ':maxValIso': new OxmlAttr(':maxValIso', OxmlType.DateTimeValue),
    };
    CustomRichFilters._C = {
        'xlrd2:customFilter': CustomRichFilter,
        'xlrd2:extLst': ExtensionList,
    };
    CustomRichFilters._D = {
        ':and': new OxmlAttr(':and', OxmlType.BooleanValue),
    };
    RichTop10._D = {
        ':key': new OxmlAttr(':key', OxmlType.StringValue),
        ':top': new OxmlAttr(':top', OxmlType.BooleanValue),
        ':percent': new OxmlAttr(':percent', OxmlType.BooleanValue),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
        ':filterVal': new OxmlAttr(':filterVal', OxmlType.DoubleValue),
    };
    RichFilters._C = {
        'xlrd2:filter': RichFilter,
        'xlrd2:dateGroupItem': RichDateGroupItem,
        'xlrd2:extLst': ExtensionList,
    };
    RichValueTypesInfo._C = {
        'xlrd2:global': RichValueGlobalType,
        'xlrd2:types': RichValueTypes,
        'xlrd2:extLst': ExtensionList,
    };
    RichStylesheet._C = {
        'xlrd2:dxfs': Dxfs,
        'xlrd2:richProperties': RichFormatProperties,
        'xlrd2:richStyles': RichStyles,
        'xlrd2:extLst': ExtensionList,
    };
    ArrayData._C = {
        'xlrd2:a': Array,
        'xlrd2:extLst': ExtensionList,
    };
    ArrayData._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SupportingPropertyBagStructures._C = {
        'xlrd2:s': SupportingPropertyBagStructure,
        'xlrd2:extLst': ExtensionList,
    };
    SupportingPropertyBagStructures._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SupportingPropertyBags._C = {
        'xlrd2:spbArrays': SupportingPropertyBagArrayData,
        'xlrd2:spbData': SupportingPropertyBagData,
    };
    RichSortCondition._D = {
        ':richSortKey': new OxmlAttr(':richSortKey', OxmlType.StringValue),
        ':descending': new OxmlAttr(':descending', OxmlType.BooleanValue),
        ':sortBy': new OxmlAttr(':sortBy', OxmlType.EnumValue, SortByValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':customList': new OxmlAttr(':customList', OxmlType.StringValue),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    RichFilterColumn._C = {
        'xlrd2:filters': RichFilters,
        'xlrd2:top10': RichTop10,
        'xlrd2:customFilters': CustomRichFilters,
        'xlrd2:dynamicFilter': DynamicRichFilter,
        'xlrd2:extLst': ExtensionList,
    };
    return {
        prefix: 'xlrd2',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2017/richdata2',
    };
}
