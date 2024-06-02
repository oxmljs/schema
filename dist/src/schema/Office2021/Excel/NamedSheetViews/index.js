import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { SortByValuesArray } from "../../../Spreadsheet";
import { IconSetTypeValuesArray } from "../../../Office2010/Excel";
import { SortMethodValuesArray } from "../../../Spreadsheet";
import { Filters as XFilters } from "../../../Spreadsheet";
import { Top10 as XTop10 } from "../../../Spreadsheet";
import { CustomFilters as X14CustomFilters } from "../../../Office2010/Excel";
import { CustomFilters as XCustomFilters } from "../../../Spreadsheet";
import { DynamicFilter as XDynamicFilter } from "../../../Spreadsheet";
import { ColorFilter as XColorFilter } from "../../../Spreadsheet";
import { IconFilter as X14IconFilter } from "../../../Office2010/Excel";
import { IconFilter as XIconFilter } from "../../../Spreadsheet";
import { ExtensionList as XExtensionList } from "../../../Spreadsheet";
import { Font as XFont } from "../../../Spreadsheet";
import { NumberingFormat as XNumberingFormat } from "../../../Spreadsheet";
import { Fill as XFill } from "../../../Spreadsheet";
import { Alignment as XAlignment } from "../../../Spreadsheet";
import { Border as XBorder } from "../../../Spreadsheet";
import { Protection as XProtection } from "../../../Spreadsheet";
import { Extension as XExtension } from "../../../Spreadsheet";
class RichSortCondition extends OxmlLeafElement {
  static _Q = "xnsv:richSortCondition";
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
class SortCondition extends OxmlLeafElement {
  static _Q = "xnsv:sortCondition";
  static _A = [":descending", ":sortBy", ":ref", ":customList", ":dxfId", ":iconSet", ":iconId"];
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
class SortRule extends OxmlCompositeElement {
  static _Q = "xnsv:sortRule";
  static _A = [":colId", ":id"];
  /** colId. Serialized as `:colId` */
  get colId() {
    return this._g(":colId");
  }
  set colId(v) {
    this._s(":colId", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns DifferentialFormatType. */
  get differentialFormatType() {
    return this._f(DifferentialFormatType);
  }
}
class FilterColumn extends OxmlCompositeElement {
  static _Q = "xnsv:filter";
  static _A = [":colId", ":hiddenButton", ":showButton"];
  /** Filter Column Data. Serialized as `:colId` */
  get columnId() {
    return this._g(":colId");
  }
  set columnId(v) {
    this._s(":colId", v);
  }
  /** Hidden AutoFilter Button. Serialized as `:hiddenButton` */
  get hiddenButton() {
    return this._g(":hiddenButton");
  }
  set hiddenButton(v) {
    this._s(":hiddenButton", v);
  }
  /** Show Filter Button. Serialized as `:showButton` */
  get showButton() {
    return this._g(":showButton");
  }
  set showButton(v) {
    this._s(":showButton", v);
  }
  /** Filter Criteria. */
  get filters() {
    return this._f(XFilters);
  }
  /** Top 10. */
  get top10() {
    return this._f(XTop10);
  }
  /** Returns X14CustomFilters. */
  get customFilters14() {
    return this._f(X14CustomFilters);
  }
  /** Custom Filters. */
  get customFilters() {
    return this._f(XCustomFilters);
  }
  /** Dynamic Filter. */
  get dynamicFilter() {
    return this._f(XDynamicFilter);
  }
  /** Color Filter Criteria. */
  get colorFilter() {
    return this._f(XColorFilter);
  }
  /** Returns X14IconFilter. */
  get iconFilter14() {
    return this._f(X14IconFilter);
  }
  /** Icon Filter. */
  get iconFilter() {
    return this._f(XIconFilter);
  }
  /** Returns XExtensionList. */
  get extensionList() {
    return this._f(XExtensionList);
  }
}
class DifferentialFormatType extends OxmlCompositeElement {
  static _Q = "xnsv:dxf";
  /** Font Properties. */
  get font() {
    return this._f(XFont);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(XNumberingFormat);
  }
  /** Fill. */
  get fill() {
    return this._f(XFill);
  }
  /** Alignment. */
  get alignment() {
    return this._f(XAlignment);
  }
  /** Border Properties. */
  get border() {
    return this._f(XBorder);
  }
  /** Protection Properties. */
  get protection() {
    return this._f(XProtection);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(XExtensionList);
  }
}
class SortRules extends OxmlCompositeElement {
  static _Q = "xnsv:sortRules";
  static _A = [":sortMethod", ":caseSensitive"];
  /** sortMethod. Serialized as `:sortMethod` */
  get sortMethod() {
    return this._g(":sortMethod");
  }
  set sortMethod(v) {
    this._s(":sortMethod", v);
  }
  /** caseSensitive. Serialized as `:caseSensitive` */
  get caseSensitive() {
    return this._g(":caseSensitive");
  }
  set caseSensitive(v) {
    this._s(":caseSensitive", v);
  }
}
class ColumnFilter extends OxmlCompositeElement {
  static _Q = "xnsv:columnFilter";
  static _A = [":colId", ":id"];
  /** colId. Serialized as `:colId` */
  get colId() {
    return this._g(":colId");
  }
  set colId(v) {
    this._s(":colId", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns DifferentialFormatType. */
  get differentialFormatType() {
    return this._f(DifferentialFormatType);
  }
}
class NsvFilter extends OxmlCompositeElement {
  static _Q = "xnsv:nsvFilter";
  static _A = [":filterId", ":ref", ":tableId"];
  /** filterId. Serialized as `:filterId` */
  get filterId() {
    return this._g(":filterId");
  }
  set filterId(v) {
    this._s(":filterId", v);
  }
  /** ref. Serialized as `:ref` */
  get ref() {
    return this._g(":ref");
  }
  set ref(v) {
    this._s(":ref", v);
  }
  /** tableId. Serialized as `:tableId` */
  get tableId() {
    return this._g(":tableId");
  }
  set tableId(v) {
    this._s(":tableId", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xnsv:extLst";
}
class NamedSheetView extends OxmlCompositeElement {
  static _Q = "xnsv:namedSheetView";
  static _A = [":name", ":id"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class NamedSheetViews extends OxmlPartRootElement {
  static _Q = "xnsv:namedSheetViews";
}
function initOffice2021ExcelNamedSheetViewsNamespace() {
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
  SortCondition._D = {
    ":descending": new OxmlAttr(":descending", OxmlType.BooleanValue),
    ":sortBy": new OxmlAttr(":sortBy", OxmlType.EnumValue, SortByValuesArray),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":customList": new OxmlAttr(":customList", OxmlType.StringValue),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value),
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetTypeValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  SortRule._C = {
    "xnsv:dxf": DifferentialFormatType,
    "xnsv:sortCondition": SortCondition,
    "xnsv:richSortCondition": RichSortCondition
  };
  SortRule._D = {
    ":colId": new OxmlAttr(":colId", OxmlType.UInt32Value),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  FilterColumn._C = {
    "x:filters": XFilters,
    "x:top10": XTop10,
    "x14:customFilters": X14CustomFilters,
    "x:customFilters": XCustomFilters,
    "x:dynamicFilter": XDynamicFilter,
    "x:colorFilter": XColorFilter,
    "x14:iconFilter": X14IconFilter,
    "x:iconFilter": XIconFilter,
    "x:extLst": XExtensionList
  };
  FilterColumn._D = {
    ":colId": new OxmlAttr(":colId", OxmlType.UInt32Value),
    ":hiddenButton": new OxmlAttr(":hiddenButton", OxmlType.BooleanValue),
    ":showButton": new OxmlAttr(":showButton", OxmlType.BooleanValue)
  };
  DifferentialFormatType._C = {
    "x:font": XFont,
    "x:numFmt": XNumberingFormat,
    "x:fill": XFill,
    "x:alignment": XAlignment,
    "x:border": XBorder,
    "x:protection": XProtection,
    "x:extLst": XExtensionList
  };
  SortRules._C = {
    "xnsv:sortRule": SortRule,
    "xnsv:extLst": ExtensionList
  };
  SortRules._D = {
    ":sortMethod": new OxmlAttr(":sortMethod", OxmlType.EnumValue, SortMethodValuesArray),
    ":caseSensitive": new OxmlAttr(":caseSensitive", OxmlType.BooleanValue)
  };
  ColumnFilter._C = {
    "xnsv:dxf": DifferentialFormatType,
    "xnsv:filter": FilterColumn,
    "xnsv:extLst": ExtensionList
  };
  ColumnFilter._D = {
    ":colId": new OxmlAttr(":colId", OxmlType.UInt32Value),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  NsvFilter._C = {
    "xnsv:columnFilter": ColumnFilter,
    "xnsv:sortRules": SortRules,
    "xnsv:extLst": ExtensionList
  };
  NsvFilter._D = {
    ":filterId": new OxmlAttr(":filterId", OxmlType.StringValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":tableId": new OxmlAttr(":tableId", OxmlType.UInt32Value)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  NamedSheetView._C = {
    "xnsv:nsvFilter": NsvFilter,
    "xnsv:extLst": ExtensionList
  };
  NamedSheetView._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  NamedSheetViews._C = {
    "xnsv:namedSheetView": NamedSheetView,
    "xnsv:extLst": ExtensionList
  };
  return {
    prefix: "xnsv",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2019/namedsheetviews"
  };
}
export {
  ColumnFilter,
  DifferentialFormatType,
  ExtensionList,
  FilterColumn,
  NamedSheetView,
  NamedSheetViews,
  NsvFilter,
  RichSortCondition,
  SortCondition,
  SortRule,
  SortRules,
  initOffice2021ExcelNamedSheetViewsNamespace
};
