import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { UInt16Value } from '../../../../framework/types/UInt16Value';
import { DoubleValue } from '../../../../framework/types/DoubleValue';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { FilterOperatorValues } from '../../../Spreadsheet';
import { DateTimeGroupingValues } from '../../../Spreadsheet';
import { DynamicFilterValues } from '../../../Spreadsheet';
import { SortByValues } from '../../../Spreadsheet';
import { IconSetTypeValues } from '../../../Office2010/Excel';
import { DifferentialFormat as XDifferentialFormat } from '../../../Spreadsheet';
import { Extension as XExtension } from '../../../Spreadsheet';
export declare enum SupportingPropertyBagValueType {
    /** undefined. Serialized value: `d` */
    D = "d",
    /** undefined. Serialized value: `i` */
    I = "i",
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `s` */
    S = "s",
    /** undefined. Serialized value: `spb` */
    Spb = "spb",
    /** undefined. Serialized value: `spba` */
    Spba = "spba"
}
export declare const SupportingPropertyBagValueTypeArray: readonly [SupportingPropertyBagValueType.D, SupportingPropertyBagValueType.I, SupportingPropertyBagValueType.B, SupportingPropertyBagValueType.S, SupportingPropertyBagValueType.Spb, SupportingPropertyBagValueType.Spba];
export declare enum SupportingPropertyBagArrayValueType {
    /** undefined. Serialized value: `d` */
    D = "d",
    /** undefined. Serialized value: `i` */
    I = "i",
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `s` */
    S = "s",
    /** undefined. Serialized value: `spb` */
    Spb = "spb"
}
export declare const SupportingPropertyBagArrayValueTypeArray: readonly [SupportingPropertyBagArrayValueType.D, SupportingPropertyBagArrayValueType.I, SupportingPropertyBagArrayValueType.B, SupportingPropertyBagArrayValueType.S, SupportingPropertyBagArrayValueType.Spb];
export declare enum ArrayValueType {
    /** undefined. Serialized value: `d` */
    D = "d",
    /** undefined. Serialized value: `i` */
    I = "i",
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `e` */
    E = "e",
    /** undefined. Serialized value: `s` */
    S = "s",
    /** undefined. Serialized value: `r` */
    R = "r",
    /** undefined. Serialized value: `a` */
    A = "a"
}
export declare const ArrayValueTypeArray: readonly [ArrayValueType.D, ArrayValueType.I, ArrayValueType.B, ArrayValueType.E, ArrayValueType.S, ArrayValueType.R, ArrayValueType.A];
export declare enum RichFormatPropertyType {
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `n` */
    N = "n",
    /** undefined. Serialized value: `i` */
    I = "i",
    /** undefined. Serialized value: `s` */
    S = "s"
}
export declare const RichFormatPropertyTypeArray: readonly [RichFormatPropertyType.B, RichFormatPropertyType.N, RichFormatPropertyType.I, RichFormatPropertyType.S];
/** Defines the RichValueTypeReservedKeyFlag Class. Serialized as `xlrd2:flag` */
export declare class RichValueTypeReservedKeyFlag extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** value. Serialized as `:value` */
    get value(): BooleanValue | undefined;
    set value(v: BooleanValue | undefined);
}
/** Defines the RichValueTypeReservedKey Class. Serialized as `xlrd2:key` */
export declare class RichValueTypeReservedKey extends OxmlCompositeElement<RichValueTypeReservedKeyFlag> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the RichValueTypeKeyFlags Class. Serialized as `xlrd2:keyFlags` */
export declare class RichValueTypeKeyFlags extends OxmlCompositeElement<RichValueTypeReservedKey> {
    static _Q: string;
}
/** Defines the RichValueType Class. Serialized as `xlrd2:type` */
export declare class RichValueType extends OxmlCompositeElement<RichValueTypeKeyFlags | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns RichValueTypeKeyFlags. */
    get richValueTypeKeyFlags(): RichValueTypeKeyFlags | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the RichValueTypes Class. Serialized as `xlrd2:types` */
export declare class RichValueTypes extends OxmlCompositeElement<RichValueType> {
    static _Q: string;
}
/** Defines the RichValueGlobalType Class. Serialized as `xlrd2:global` */
export declare class RichValueGlobalType extends OxmlCompositeElement<RichValueTypeKeyFlags | ExtensionList> {
    static _Q: string;
    /** Returns RichValueTypeKeyFlags. */
    get richValueTypeKeyFlags(): RichValueTypeKeyFlags | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the RichStylePropertyValue Class. Serialized as `xlrd2:rpv` */
export declare class RichStylePropertyValue extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** i. Serialized as `:i` */
    get i(): UInt32Value | undefined;
    set i(v: UInt32Value | undefined);
}
/** Defines the RichStyle Class. Serialized as `xlrd2:rSty` */
export declare class RichStyle extends OxmlCompositeElement<RichStylePropertyValue> {
    static _Q: string;
    static _A: string[];
    /** dxfid. Serialized as `:dxfid` */
    get dxfid(): UInt32Value | undefined;
    set dxfid(v: UInt32Value | undefined);
}
/** Defines the RichFormatProperty Class. Serialized as `xlrd2:rPr` */
export declare class RichFormatProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** t. Serialized as `:t` */
    get t(): RichFormatPropertyType | undefined;
    set t(v: RichFormatPropertyType | undefined);
}
/** Defines the RichStyles Class. Serialized as `xlrd2:richStyles` */
export declare class RichStyles extends OxmlCompositeElement<RichStyle> {
    static _Q: string;
}
/** Defines the RichFormatProperties Class. Serialized as `xlrd2:richProperties` */
export declare class RichFormatProperties extends OxmlCompositeElement<RichFormatProperty> {
    static _Q: string;
}
/** Defines the Dxfs Class. Serialized as `xlrd2:dxfs` */
export declare class Dxfs extends OxmlCompositeElement<XDifferentialFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ArrayValue Class. Serialized as `xlrd2:v` */
export declare class ArrayValue extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get t(): ArrayValueType | undefined;
    set t(v: ArrayValueType | undefined);
}
/** Defines the Array Class. Serialized as `xlrd2:a` */
export declare class Array extends OxmlCompositeElement<ArrayValue> {
    static _Q: string;
    static _A: string[];
    /** r. Serialized as `:r` */
    get r(): UInt32Value | undefined;
    set r(v: UInt32Value | undefined);
    /** c. Serialized as `:c` */
    get c(): UInt32Value | undefined;
    set c(v: UInt32Value | undefined);
}
/** Defines the SupportingPropertyBagArrayValue Class. Serialized as `xlrd2:v` */
export declare class SupportingPropertyBagArrayValue extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get t(): SupportingPropertyBagArrayValueType | undefined;
    set t(v: SupportingPropertyBagArrayValueType | undefined);
}
/** Defines the SupportingPropertyBagArray Class. Serialized as `xlrd2:a` */
export declare class SupportingPropertyBagArray extends OxmlCompositeElement<SupportingPropertyBagArrayValue> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the SupportingPropertyBagKey Class. Serialized as `xlrd2:k` */
export declare class SupportingPropertyBagKey extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** t. Serialized as `:t` */
    get t(): SupportingPropertyBagValueType | undefined;
    set t(v: SupportingPropertyBagValueType | undefined);
}
/** Defines the SupportingPropertyBagStructure Class. Serialized as `xlrd2:s` */
export declare class SupportingPropertyBagStructure extends OxmlCompositeElement<SupportingPropertyBagKey> {
    static _Q: string;
}
/** Defines the SupportingPropertyBagValue Class. Serialized as `xlrd2:v` */
export declare class SupportingPropertyBagValue extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the SupportingPropertyBag Class. Serialized as `xlrd2:spb` */
export declare class SupportingPropertyBag extends OxmlCompositeElement<SupportingPropertyBagValue> {
    static _Q: string;
    static _A: string[];
    /** s. Serialized as `:s` */
    get s(): UInt32Value | undefined;
    set s(v: UInt32Value | undefined);
}
/** Defines the SupportingPropertyBagData Class. Serialized as `xlrd2:spbData` */
export declare class SupportingPropertyBagData extends OxmlCompositeElement<SupportingPropertyBag | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the SupportingPropertyBagArrayData Class. Serialized as `xlrd2:spbArrays` */
export declare class SupportingPropertyBagArrayData extends OxmlCompositeElement<SupportingPropertyBagArray | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CustomRichFilter Class. Serialized as `xlrd2:customFilter` */
export declare class CustomRichFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** key. Serialized as `:key` */
    get key(): StringValue | undefined;
    set key(v: StringValue | undefined);
    /** Filter Comparison Operator. Serialized as `:operator` */
    get operator(): FilterOperatorValues | undefined;
    set operator(v: FilterOperatorValues | undefined);
    /** Top or Bottom Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the RichDateGroupItem Class. Serialized as `xlrd2:dateGroupItem` */
export declare class RichDateGroupItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** key. Serialized as `:key` */
    get key(): StringValue | undefined;
    set key(v: StringValue | undefined);
    /** Year. Serialized as `:year` */
    get year(): UInt16Value | undefined;
    set year(v: UInt16Value | undefined);
    /** Month. Serialized as `:month` */
    get month(): UInt16Value | undefined;
    set month(v: UInt16Value | undefined);
    /** Day. Serialized as `:day` */
    get day(): UInt16Value | undefined;
    set day(v: UInt16Value | undefined);
    /** Hour. Serialized as `:hour` */
    get hour(): UInt16Value | undefined;
    set hour(v: UInt16Value | undefined);
    /** Minute. Serialized as `:minute` */
    get minute(): UInt16Value | undefined;
    set minute(v: UInt16Value | undefined);
    /** Second. Serialized as `:second` */
    get second(): UInt16Value | undefined;
    set second(v: UInt16Value | undefined);
    /** Date Time Grouping. Serialized as `:dateTimeGrouping` */
    get dateTimeGrouping(): DateTimeGroupingValues | undefined;
    set dateTimeGrouping(v: DateTimeGroupingValues | undefined);
}
/** Defines the RichFilter Class. Serialized as `xlrd2:filter` */
export declare class RichFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** key. Serialized as `:key` */
    get key(): StringValue | undefined;
    set key(v: StringValue | undefined);
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** blank. Serialized as `:blank` */
    get blank(): BooleanValue | undefined;
    set blank(v: BooleanValue | undefined);
    /** nodata. Serialized as `:nodata` */
    get nodata(): BooleanValue | undefined;
    set nodata(v: BooleanValue | undefined);
}
/** Defines the ExtensionList Class. Serialized as `xlrd2:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the DynamicRichFilter Class. Serialized as `xlrd2:dynamicFilter` */
export declare class DynamicRichFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** key. Serialized as `:key` */
    get key(): StringValue | undefined;
    set key(v: StringValue | undefined);
    /** Dynamic filter type. Serialized as `:type` */
    get type(): DynamicFilterValues | undefined;
    set type(v: DynamicFilterValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Max Value. Serialized as `:maxVal` */
    get maxVal(): DoubleValue | undefined;
    set maxVal(v: DoubleValue | undefined);
    /** valIso. Serialized as `:valIso` */
    get valIso(): DateTimeValue | undefined;
    set valIso(v: DateTimeValue | undefined);
    /** maxValIso. Serialized as `:maxValIso` */
    get maxValIso(): DateTimeValue | undefined;
    set maxValIso(v: DateTimeValue | undefined);
}
/** Defines the CustomRichFilters Class. Serialized as `xlrd2:customFilters` */
export declare class CustomRichFilters extends OxmlCompositeElement<CustomRichFilter | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** and. Serialized as `:and` */
    get and(): BooleanValue | undefined;
    set and(v: BooleanValue | undefined);
}
/** Defines the RichTop10 Class. Serialized as `xlrd2:top10` */
export declare class RichTop10 extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** key. Serialized as `:key` */
    get key(): StringValue | undefined;
    set key(v: StringValue | undefined);
    /** Top. Serialized as `:top` */
    get top(): BooleanValue | undefined;
    set top(v: BooleanValue | undefined);
    /** Filter by Percent. Serialized as `:percent` */
    get percent(): BooleanValue | undefined;
    set percent(v: BooleanValue | undefined);
    /** Top or Bottom Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Filter Value. Serialized as `:filterVal` */
    get filterValue(): DoubleValue | undefined;
    set filterValue(v: DoubleValue | undefined);
}
/** Defines the RichFilters Class. Serialized as `xlrd2:filters` */
export declare class RichFilters extends OxmlCompositeElement<RichFilter | RichDateGroupItem | ExtensionList> {
    static _Q: string;
}
/** Defines the RichValueTypesInfo Class. Serialized as `xlrd2:rvTypesInfo` */
export declare class RichValueTypesInfo extends OxmlPartRootElement<RichValueGlobalType | RichValueTypes | ExtensionList> {
    static _Q: string;
    /** Returns RichValueGlobalType. */
    get richValueGlobalType(): RichValueGlobalType | undefined;
    /** Returns RichValueTypes. */
    get richValueTypes(): RichValueTypes | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the RichStylesheet Class. Serialized as `xlrd2:richStyleSheet` */
export declare class RichStylesheet extends OxmlPartRootElement<Dxfs | RichFormatProperties | RichStyles | ExtensionList> {
    static _Q: string;
    /** Returns Dxfs. */
    get dxfs(): Dxfs | undefined;
    /** Returns RichFormatProperties. */
    get richFormatProperties(): RichFormatProperties | undefined;
    /** Returns RichStyles. */
    get richStyles(): RichStyles | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ArrayData Class. Serialized as `xlrd2:arrayData` */
export declare class ArrayData extends OxmlPartRootElement<Array | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the SupportingPropertyBagStructures Class. Serialized as `xlrd2:spbStructures` */
export declare class SupportingPropertyBagStructures extends OxmlPartRootElement<SupportingPropertyBagStructure | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the SupportingPropertyBags Class. Serialized as `xlrd2:supportingPropertyBags` */
export declare class SupportingPropertyBags extends OxmlPartRootElement<SupportingPropertyBagArrayData | SupportingPropertyBagData> {
    static _Q: string;
    /** Returns SupportingPropertyBagArrayData. */
    get supportingPropertyBagArrayData(): SupportingPropertyBagArrayData | undefined;
    /** Returns SupportingPropertyBagData. */
    get supportingPropertyBagData(): SupportingPropertyBagData | undefined;
}
/** Defines the RichSortCondition Class. Serialized as `xlrd2:richSortCondition` */
export declare class RichSortCondition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** richSortKey. Serialized as `:richSortKey` */
    get richSortKey(): StringValue | undefined;
    set richSortKey(v: StringValue | undefined);
    /** descending. Serialized as `:descending` */
    get descending(): BooleanValue | undefined;
    set descending(v: BooleanValue | undefined);
    /** sortBy. Serialized as `:sortBy` */
    get sortBy(): SortByValues | undefined;
    set sortBy(v: SortByValues | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** customList. Serialized as `:customList` */
    get customList(): StringValue | undefined;
    set customList(v: StringValue | undefined);
    /** dxfId. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): IconSetTypeValues | undefined;
    set iconSet(v: IconSetTypeValues | undefined);
    /** iconId. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the RichFilterColumn Class. Serialized as `xlrd2:filterColumn` */
export declare class RichFilterColumn extends OxmlCompositeElement<RichFilters | RichTop10 | CustomRichFilters | DynamicRichFilter | ExtensionList> {
    static _Q: string;
    /** Returns RichFilters. */
    get richFilters(): RichFilters | undefined;
    /** Returns RichTop10. */
    get richTop10(): RichTop10 | undefined;
    /** Returns CustomRichFilters. */
    get customRichFilters(): CustomRichFilters | undefined;
    /** Returns DynamicRichFilter. */
    get dynamicRichFilter(): DynamicRichFilter | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
export declare function initOffice2019ExcelRichData2Namespace(): {
    prefix: string;
    xmlns: string;
};
