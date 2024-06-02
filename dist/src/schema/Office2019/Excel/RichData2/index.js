import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { FilterOperatorValuesArray } from "../../../Spreadsheet";
import { DateTimeGroupingValuesArray } from "../../../Spreadsheet";
import { DynamicFilterValuesArray } from "../../../Spreadsheet";
import { SortByValuesArray } from "../../../Spreadsheet";
import { IconSetTypeValuesArray } from "../../../Office2010/Excel";
import { DifferentialFormat as XDifferentialFormat } from "../../../Spreadsheet";
import { Extension as XExtension } from "../../../Spreadsheet";
var SupportingPropertyBagValueType = /* @__PURE__ */ ((SupportingPropertyBagValueType2) => {
  SupportingPropertyBagValueType2["D"] = "d";
  SupportingPropertyBagValueType2["I"] = "i";
  SupportingPropertyBagValueType2["B"] = "b";
  SupportingPropertyBagValueType2["S"] = "s";
  SupportingPropertyBagValueType2["Spb"] = "spb";
  SupportingPropertyBagValueType2["Spba"] = "spba";
  return SupportingPropertyBagValueType2;
})(SupportingPropertyBagValueType || {});
const SupportingPropertyBagValueTypeArray = [
  "d" /* D */,
  "i" /* I */,
  "b" /* B */,
  "s" /* S */,
  "spb" /* Spb */,
  "spba" /* Spba */
];
var SupportingPropertyBagArrayValueType = /* @__PURE__ */ ((SupportingPropertyBagArrayValueType2) => {
  SupportingPropertyBagArrayValueType2["D"] = "d";
  SupportingPropertyBagArrayValueType2["I"] = "i";
  SupportingPropertyBagArrayValueType2["B"] = "b";
  SupportingPropertyBagArrayValueType2["S"] = "s";
  SupportingPropertyBagArrayValueType2["Spb"] = "spb";
  return SupportingPropertyBagArrayValueType2;
})(SupportingPropertyBagArrayValueType || {});
const SupportingPropertyBagArrayValueTypeArray = [
  "d" /* D */,
  "i" /* I */,
  "b" /* B */,
  "s" /* S */,
  "spb" /* Spb */
];
var ArrayValueType = /* @__PURE__ */ ((ArrayValueType2) => {
  ArrayValueType2["D"] = "d";
  ArrayValueType2["I"] = "i";
  ArrayValueType2["B"] = "b";
  ArrayValueType2["E"] = "e";
  ArrayValueType2["S"] = "s";
  ArrayValueType2["R"] = "r";
  ArrayValueType2["A"] = "a";
  return ArrayValueType2;
})(ArrayValueType || {});
const ArrayValueTypeArray = [
  "d" /* D */,
  "i" /* I */,
  "b" /* B */,
  "e" /* E */,
  "s" /* S */,
  "r" /* R */,
  "a" /* A */
];
var RichFormatPropertyType = /* @__PURE__ */ ((RichFormatPropertyType2) => {
  RichFormatPropertyType2["B"] = "b";
  RichFormatPropertyType2["N"] = "n";
  RichFormatPropertyType2["I"] = "i";
  RichFormatPropertyType2["S"] = "s";
  return RichFormatPropertyType2;
})(RichFormatPropertyType || {});
const RichFormatPropertyTypeArray = [
  "b" /* B */,
  "n" /* N */,
  "i" /* I */,
  "s" /* S */
];
class RichValueTypeReservedKeyFlag extends OxmlLeafElement {
  static _Q = "xlrd2:flag";
  static _A = [":name", ":value"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
}
class RichValueTypeReservedKey extends OxmlCompositeElement {
  static _Q = "xlrd2:key";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class RichValueTypeKeyFlags extends OxmlCompositeElement {
  static _Q = "xlrd2:keyFlags";
}
class RichValueType extends OxmlCompositeElement {
  static _Q = "xlrd2:type";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Returns RichValueTypeKeyFlags. */
  get richValueTypeKeyFlags() {
    return this._f(RichValueTypeKeyFlags);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RichValueTypes extends OxmlCompositeElement {
  static _Q = "xlrd2:types";
}
class RichValueGlobalType extends OxmlCompositeElement {
  static _Q = "xlrd2:global";
  /** Returns RichValueTypeKeyFlags. */
  get richValueTypeKeyFlags() {
    return this._f(RichValueTypeKeyFlags);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RichStylePropertyValue extends OxmlLeafTextElement {
  static _Q = "xlrd2:rpv";
  static _A = [":i"];
  /** i. Serialized as `:i` */
  get i() {
    return this._g(":i");
  }
  set i(v) {
    this._s(":i", v);
  }
}
class RichStyle extends OxmlCompositeElement {
  static _Q = "xlrd2:rSty";
  static _A = [":dxfid"];
  /** dxfid. Serialized as `:dxfid` */
  get dxfid() {
    return this._g(":dxfid");
  }
  set dxfid(v) {
    this._s(":dxfid", v);
  }
}
class RichFormatProperty extends OxmlLeafElement {
  static _Q = "xlrd2:rPr";
  static _A = [":n", ":t"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class RichStyles extends OxmlCompositeElement {
  static _Q = "xlrd2:richStyles";
}
class RichFormatProperties extends OxmlCompositeElement {
  static _Q = "xlrd2:richProperties";
}
class Dxfs extends OxmlCompositeElement {
  static _Q = "xlrd2:dxfs";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ArrayValue extends OxmlLeafTextElement {
  static _Q = "xlrd2:v";
  static _A = [":t"];
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class Array extends OxmlCompositeElement {
  static _Q = "xlrd2:a";
  static _A = [":r", ":c"];
  /** r. Serialized as `:r` */
  get r() {
    return this._g(":r");
  }
  set r(v) {
    this._s(":r", v);
  }
  /** c. Serialized as `:c` */
  get c() {
    return this._g(":c");
  }
  set c(v) {
    this._s(":c", v);
  }
}
class SupportingPropertyBagArrayValue extends OxmlLeafTextElement {
  static _Q = "xlrd2:v";
  static _A = [":t"];
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class SupportingPropertyBagArray extends OxmlCompositeElement {
  static _Q = "xlrd2:a";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SupportingPropertyBagKey extends OxmlLeafElement {
  static _Q = "xlrd2:k";
  static _A = [":n", ":t"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class SupportingPropertyBagStructure extends OxmlCompositeElement {
  static _Q = "xlrd2:s";
}
class SupportingPropertyBagValue extends OxmlLeafTextElement {
  static _Q = "xlrd2:v";
}
class SupportingPropertyBag extends OxmlCompositeElement {
  static _Q = "xlrd2:spb";
  static _A = [":s"];
  /** s. Serialized as `:s` */
  get s() {
    return this._g(":s");
  }
  set s(v) {
    this._s(":s", v);
  }
}
class SupportingPropertyBagData extends OxmlCompositeElement {
  static _Q = "xlrd2:spbData";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SupportingPropertyBagArrayData extends OxmlCompositeElement {
  static _Q = "xlrd2:spbArrays";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CustomRichFilter extends OxmlLeafElement {
  static _Q = "xlrd2:customFilter";
  static _A = [":key", ":operator", ":val"];
  /** key. Serialized as `:key` */
  get key() {
    return this._g(":key");
  }
  set key(v) {
    this._s(":key", v);
  }
  /** Filter Comparison Operator. Serialized as `:operator` */
  get operator() {
    return this._g(":operator");
  }
  set operator(v) {
    this._s(":operator", v);
  }
  /** Top or Bottom Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class RichDateGroupItem extends OxmlLeafElement {
  static _Q = "xlrd2:dateGroupItem";
  static _A = [":key", ":year", ":month", ":day", ":hour", ":minute", ":second", ":dateTimeGrouping"];
  /** key. Serialized as `:key` */
  get key() {
    return this._g(":key");
  }
  set key(v) {
    this._s(":key", v);
  }
  /** Year. Serialized as `:year` */
  get year() {
    return this._g(":year");
  }
  set year(v) {
    this._s(":year", v);
  }
  /** Month. Serialized as `:month` */
  get month() {
    return this._g(":month");
  }
  set month(v) {
    this._s(":month", v);
  }
  /** Day. Serialized as `:day` */
  get day() {
    return this._g(":day");
  }
  set day(v) {
    this._s(":day", v);
  }
  /** Hour. Serialized as `:hour` */
  get hour() {
    return this._g(":hour");
  }
  set hour(v) {
    this._s(":hour", v);
  }
  /** Minute. Serialized as `:minute` */
  get minute() {
    return this._g(":minute");
  }
  set minute(v) {
    this._s(":minute", v);
  }
  /** Second. Serialized as `:second` */
  get second() {
    return this._g(":second");
  }
  set second(v) {
    this._s(":second", v);
  }
  /** Date Time Grouping. Serialized as `:dateTimeGrouping` */
  get dateTimeGrouping() {
    return this._g(":dateTimeGrouping");
  }
  set dateTimeGrouping(v) {
    this._s(":dateTimeGrouping", v);
  }
}
class RichFilter extends OxmlLeafElement {
  static _Q = "xlrd2:filter";
  static _A = [":key", ":val", ":blank", ":nodata"];
  /** key. Serialized as `:key` */
  get key() {
    return this._g(":key");
  }
  set key(v) {
    this._s(":key", v);
  }
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** blank. Serialized as `:blank` */
  get blank() {
    return this._g(":blank");
  }
  set blank(v) {
    this._s(":blank", v);
  }
  /** nodata. Serialized as `:nodata` */
  get nodata() {
    return this._g(":nodata");
  }
  set nodata(v) {
    this._s(":nodata", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xlrd2:extLst";
}
class DynamicRichFilter extends OxmlLeafElement {
  static _Q = "xlrd2:dynamicFilter";
  static _A = [":key", ":type", ":val", ":maxVal", ":valIso", ":maxValIso"];
  /** key. Serialized as `:key` */
  get key() {
    return this._g(":key");
  }
  set key(v) {
    this._s(":key", v);
  }
  /** Dynamic filter type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Max Value. Serialized as `:maxVal` */
  get maxVal() {
    return this._g(":maxVal");
  }
  set maxVal(v) {
    this._s(":maxVal", v);
  }
  /** valIso. Serialized as `:valIso` */
  get valIso() {
    return this._g(":valIso");
  }
  set valIso(v) {
    this._s(":valIso", v);
  }
  /** maxValIso. Serialized as `:maxValIso` */
  get maxValIso() {
    return this._g(":maxValIso");
  }
  set maxValIso(v) {
    this._s(":maxValIso", v);
  }
}
class CustomRichFilters extends OxmlCompositeElement {
  static _Q = "xlrd2:customFilters";
  static _A = [":and"];
  /** and. Serialized as `:and` */
  get and() {
    return this._g(":and");
  }
  set and(v) {
    this._s(":and", v);
  }
}
class RichTop10 extends OxmlLeafElement {
  static _Q = "xlrd2:top10";
  static _A = [":key", ":top", ":percent", ":val", ":filterVal"];
  /** key. Serialized as `:key` */
  get key() {
    return this._g(":key");
  }
  set key(v) {
    this._s(":key", v);
  }
  /** Top. Serialized as `:top` */
  get top() {
    return this._g(":top");
  }
  set top(v) {
    this._s(":top", v);
  }
  /** Filter by Percent. Serialized as `:percent` */
  get percent() {
    return this._g(":percent");
  }
  set percent(v) {
    this._s(":percent", v);
  }
  /** Top or Bottom Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Filter Value. Serialized as `:filterVal` */
  get filterValue() {
    return this._g(":filterVal");
  }
  set filterValue(v) {
    this._s(":filterVal", v);
  }
}
class RichFilters extends OxmlCompositeElement {
  static _Q = "xlrd2:filters";
}
class RichValueTypesInfo extends OxmlPartRootElement {
  static _Q = "xlrd2:rvTypesInfo";
  /** Returns RichValueGlobalType. */
  get richValueGlobalType() {
    return this._f(RichValueGlobalType);
  }
  /** Returns RichValueTypes. */
  get richValueTypes() {
    return this._f(RichValueTypes);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RichStylesheet extends OxmlPartRootElement {
  static _Q = "xlrd2:richStyleSheet";
  /** Returns Dxfs. */
  get dxfs() {
    return this._f(Dxfs);
  }
  /** Returns RichFormatProperties. */
  get richFormatProperties() {
    return this._f(RichFormatProperties);
  }
  /** Returns RichStyles. */
  get richStyles() {
    return this._f(RichStyles);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ArrayData extends OxmlPartRootElement {
  static _Q = "xlrd2:arrayData";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SupportingPropertyBagStructures extends OxmlPartRootElement {
  static _Q = "xlrd2:spbStructures";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SupportingPropertyBags extends OxmlPartRootElement {
  static _Q = "xlrd2:supportingPropertyBags";
  /** Returns SupportingPropertyBagArrayData. */
  get supportingPropertyBagArrayData() {
    return this._f(SupportingPropertyBagArrayData);
  }
  /** Returns SupportingPropertyBagData. */
  get supportingPropertyBagData() {
    return this._f(SupportingPropertyBagData);
  }
}
class RichSortCondition extends OxmlLeafElement {
  static _Q = "xlrd2:richSortCondition";
  static _A = [":richSortKey", ":descending", ":sortBy", ":ref", ":customList", ":dxfId", ":iconSet", ":iconId"];
  /** richSortKey. Serialized as `:richSortKey` */
  get richSortKey() {
    return this._g(":richSortKey");
  }
  set richSortKey(v) {
    this._s(":richSortKey", v);
  }
  /** descending. Serialized as `:descending` */
  get descending() {
    return this._g(":descending");
  }
  set descending(v) {
    this._s(":descending", v);
  }
  /** sortBy. Serialized as `:sortBy` */
  get sortBy() {
    return this._g(":sortBy");
  }
  set sortBy(v) {
    this._s(":sortBy", v);
  }
  /** ref. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** customList. Serialized as `:customList` */
  get customList() {
    return this._g(":customList");
  }
  set customList(v) {
    this._s(":customList", v);
  }
  /** dxfId. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
  /** iconSet. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** iconId. Serialized as `:iconId` */
  get iconId() {
    return this._g(":iconId");
  }
  set iconId(v) {
    this._s(":iconId", v);
  }
}
class RichFilterColumn extends OxmlCompositeElement {
  static _Q = "xlrd2:filterColumn";
  /** Returns RichFilters. */
  get richFilters() {
    return this._f(RichFilters);
  }
  /** Returns RichTop10. */
  get richTop10() {
    return this._f(RichTop10);
  }
  /** Returns CustomRichFilters. */
  get customRichFilters() {
    return this._f(CustomRichFilters);
  }
  /** Returns DynamicRichFilter. */
  get dynamicRichFilter() {
    return this._f(DynamicRichFilter);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
function initOffice2019ExcelRichData2Namespace() {
  RichValueTypeReservedKeyFlag._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":value": new OxmlAttr(":value", OxmlType.BooleanValue)
  };
  RichValueTypeReservedKey._C = {
    "xlrd2:flag": RichValueTypeReservedKeyFlag
  };
  RichValueTypeReservedKey._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  RichValueTypeKeyFlags._C = {
    "xlrd2:key": RichValueTypeReservedKey
  };
  RichValueType._C = {
    "xlrd2:keyFlags": RichValueTypeKeyFlags,
    "xlrd2:extLst": ExtensionList
  };
  RichValueType._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  RichValueTypes._C = {
    "xlrd2:type": RichValueType
  };
  RichValueGlobalType._C = {
    "xlrd2:keyFlags": RichValueTypeKeyFlags,
    "xlrd2:extLst": ExtensionList
  };
  RichStylePropertyValue._D = {
    ":i": new OxmlAttr(":i", OxmlType.UInt32Value)
  };
  RichStyle._C = {
    "xlrd2:rpv": RichStylePropertyValue
  };
  RichStyle._D = {
    ":dxfid": new OxmlAttr(":dxfid", OxmlType.UInt32Value)
  };
  RichFormatProperty._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, RichFormatPropertyTypeArray)
  };
  RichStyles._C = {
    "xlrd2:rSty": RichStyle
  };
  RichFormatProperties._C = {
    "xlrd2:rPr": RichFormatProperty
  };
  Dxfs._C = {
    "x:dxf": XDifferentialFormat
  };
  Dxfs._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ArrayValue._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, ArrayValueTypeArray)
  };
  Array._C = {
    "xlrd2:v": ArrayValue
  };
  Array._D = {
    ":r": new OxmlAttr(":r", OxmlType.UInt32Value),
    ":c": new OxmlAttr(":c", OxmlType.UInt32Value)
  };
  SupportingPropertyBagArrayValue._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, SupportingPropertyBagArrayValueTypeArray)
  };
  SupportingPropertyBagArray._C = {
    "xlrd2:v": SupportingPropertyBagArrayValue
  };
  SupportingPropertyBagArray._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SupportingPropertyBagKey._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, SupportingPropertyBagValueTypeArray)
  };
  SupportingPropertyBagStructure._C = {
    "xlrd2:k": SupportingPropertyBagKey
  };
  SupportingPropertyBag._C = {
    "xlrd2:v": SupportingPropertyBagValue
  };
  SupportingPropertyBag._D = {
    ":s": new OxmlAttr(":s", OxmlType.UInt32Value)
  };
  SupportingPropertyBagData._C = {
    "xlrd2:spb": SupportingPropertyBag,
    "xlrd2:extLst": ExtensionList
  };
  SupportingPropertyBagData._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SupportingPropertyBagArrayData._C = {
    "xlrd2:a": SupportingPropertyBagArray,
    "xlrd2:extLst": ExtensionList
  };
  SupportingPropertyBagArrayData._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CustomRichFilter._D = {
    ":key": new OxmlAttr(":key", OxmlType.StringValue),
    ":operator": new OxmlAttr(":operator", OxmlType.EnumValue, FilterOperatorValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  RichDateGroupItem._D = {
    ":key": new OxmlAttr(":key", OxmlType.StringValue),
    ":year": new OxmlAttr(":year", OxmlType.UInt16Value),
    ":month": new OxmlAttr(":month", OxmlType.UInt16Value),
    ":day": new OxmlAttr(":day", OxmlType.UInt16Value),
    ":hour": new OxmlAttr(":hour", OxmlType.UInt16Value),
    ":minute": new OxmlAttr(":minute", OxmlType.UInt16Value),
    ":second": new OxmlAttr(":second", OxmlType.UInt16Value),
    ":dateTimeGrouping": new OxmlAttr(":dateTimeGrouping", OxmlType.EnumValue, DateTimeGroupingValuesArray)
  };
  RichFilter._D = {
    ":key": new OxmlAttr(":key", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue),
    ":blank": new OxmlAttr(":blank", OxmlType.BooleanValue),
    ":nodata": new OxmlAttr(":nodata", OxmlType.BooleanValue)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  DynamicRichFilter._D = {
    ":key": new OxmlAttr(":key", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, DynamicFilterValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue),
    ":maxVal": new OxmlAttr(":maxVal", OxmlType.DoubleValue),
    ":valIso": new OxmlAttr(":valIso", OxmlType.DateTimeValue),
    ":maxValIso": new OxmlAttr(":maxValIso", OxmlType.DateTimeValue)
  };
  CustomRichFilters._C = {
    "xlrd2:customFilter": CustomRichFilter,
    "xlrd2:extLst": ExtensionList
  };
  CustomRichFilters._D = {
    ":and": new OxmlAttr(":and", OxmlType.BooleanValue)
  };
  RichTop10._D = {
    ":key": new OxmlAttr(":key", OxmlType.StringValue),
    ":top": new OxmlAttr(":top", OxmlType.BooleanValue),
    ":percent": new OxmlAttr(":percent", OxmlType.BooleanValue),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue),
    ":filterVal": new OxmlAttr(":filterVal", OxmlType.DoubleValue)
  };
  RichFilters._C = {
    "xlrd2:filter": RichFilter,
    "xlrd2:dateGroupItem": RichDateGroupItem,
    "xlrd2:extLst": ExtensionList
  };
  RichValueTypesInfo._C = {
    "xlrd2:global": RichValueGlobalType,
    "xlrd2:types": RichValueTypes,
    "xlrd2:extLst": ExtensionList
  };
  RichStylesheet._C = {
    "xlrd2:dxfs": Dxfs,
    "xlrd2:richProperties": RichFormatProperties,
    "xlrd2:richStyles": RichStyles,
    "xlrd2:extLst": ExtensionList
  };
  ArrayData._C = {
    "xlrd2:a": Array,
    "xlrd2:extLst": ExtensionList
  };
  ArrayData._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SupportingPropertyBagStructures._C = {
    "xlrd2:s": SupportingPropertyBagStructure,
    "xlrd2:extLst": ExtensionList
  };
  SupportingPropertyBagStructures._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SupportingPropertyBags._C = {
    "xlrd2:spbArrays": SupportingPropertyBagArrayData,
    "xlrd2:spbData": SupportingPropertyBagData
  };
  RichSortCondition._D = {
    ":richSortKey": new OxmlAttr(":richSortKey", OxmlType.StringValue),
    ":descending": new OxmlAttr(":descending", OxmlType.BooleanValue),
    ":sortBy": new OxmlAttr(":sortBy", OxmlType.EnumValue, SortByValuesArray),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":customList": new OxmlAttr(":customList", OxmlType.StringValue),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value),
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetTypeValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  RichFilterColumn._C = {
    "xlrd2:filters": RichFilters,
    "xlrd2:top10": RichTop10,
    "xlrd2:customFilters": CustomRichFilters,
    "xlrd2:dynamicFilter": DynamicRichFilter,
    "xlrd2:extLst": ExtensionList
  };
  return {
    prefix: "xlrd2",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2017/richdata2"
  };
}
export {
  Array,
  ArrayData,
  ArrayValue,
  ArrayValueType,
  ArrayValueTypeArray,
  CustomRichFilter,
  CustomRichFilters,
  Dxfs,
  DynamicRichFilter,
  ExtensionList,
  RichDateGroupItem,
  RichFilter,
  RichFilterColumn,
  RichFilters,
  RichFormatProperties,
  RichFormatProperty,
  RichFormatPropertyType,
  RichFormatPropertyTypeArray,
  RichSortCondition,
  RichStyle,
  RichStylePropertyValue,
  RichStyles,
  RichStylesheet,
  RichTop10,
  RichValueGlobalType,
  RichValueType,
  RichValueTypeKeyFlags,
  RichValueTypeReservedKey,
  RichValueTypeReservedKeyFlag,
  RichValueTypes,
  RichValueTypesInfo,
  SupportingPropertyBag,
  SupportingPropertyBagArray,
  SupportingPropertyBagArrayData,
  SupportingPropertyBagArrayValue,
  SupportingPropertyBagArrayValueType,
  SupportingPropertyBagArrayValueTypeArray,
  SupportingPropertyBagData,
  SupportingPropertyBagKey,
  SupportingPropertyBagStructure,
  SupportingPropertyBagStructures,
  SupportingPropertyBagValue,
  SupportingPropertyBagValueType,
  SupportingPropertyBagValueTypeArray,
  SupportingPropertyBags,
  initOffice2019ExcelRichData2Namespace
};
