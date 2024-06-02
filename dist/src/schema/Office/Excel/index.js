import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { SheetProperties as XSheetProperties } from "../../Spreadsheet";
import { SheetDimension as XSheetDimension } from "../../Spreadsheet";
import { SheetViews as XSheetViews } from "../../Spreadsheet";
import { SheetFormatProperties as XSheetFormatProperties } from "../../Spreadsheet";
import { Columns as XColumns } from "../../Spreadsheet";
import { SheetData as XSheetData } from "../../Spreadsheet";
import { SheetProtection as XSheetProtection } from "../../Spreadsheet";
import { AutoFilter as XAutoFilter } from "../../Spreadsheet";
import { SortState as XSortState } from "../../Spreadsheet";
import { DataConsolidate as XDataConsolidate } from "../../Spreadsheet";
import { CustomSheetViews as XCustomSheetViews } from "../../Spreadsheet";
import { PhoneticProperties as XPhoneticProperties } from "../../Spreadsheet";
import { ConditionalFormatting as XConditionalFormatting } from "../../Spreadsheet";
import { PrintOptions as XPrintOptions } from "../../Spreadsheet";
import { PageMargins as XPageMargins } from "../../Spreadsheet";
import { PageSetup as XPageSetup } from "../../Spreadsheet";
import { HeaderFooter as XHeaderFooter } from "../../Spreadsheet";
import { RowBreaks as XRowBreaks } from "../../Spreadsheet";
import { ColumnBreaks as XColumnBreaks } from "../../Spreadsheet";
import { CustomProperties as XCustomProperties } from "../../Spreadsheet";
import { Drawing as XDrawing } from "../../Spreadsheet";
import { LegacyDrawing as XLegacyDrawing } from "../../Spreadsheet";
import { LegacyDrawingHeaderFooter as XLegacyDrawingHeaderFooter } from "../../Spreadsheet";
import { Picture as XPicture } from "../../Spreadsheet";
import { OleObjects as XOleObjects } from "../../Spreadsheet";
import { DrawingHeaderFooter as XDrawingHeaderFooter } from "../../Spreadsheet";
import { ExtensionList as XExtensionList } from "../../Spreadsheet";
class SortMapItemType extends OxmlLeafElement {
  static _A = [":newVal", ":oldVal"];
  /** New Value. Serialized as `:newVal` */
  get newVal() {
    return this._g(":newVal");
  }
  set newVal(v) {
    this._s(":newVal", v);
  }
  /** Old Value. Serialized as `:oldVal` */
  get oldVal() {
    return this._g(":oldVal");
  }
  set oldVal(v) {
    this._s(":oldVal", v);
  }
}
class ColumnSortMapItem extends SortMapItemType {
  static _Q = "xne:col";
}
class RowSortMapItem extends SortMapItemType {
  static _Q = "xne:row";
}
class ColumnSortMap extends OxmlCompositeElement {
  static _Q = "xne:colSortMap";
  static _A = [":ref", ":count"];
  /** Reference. Serialized as `:ref` */
  get ref() {
    return this._g(":ref");
  }
  set ref(v) {
    this._s(":ref", v);
  }
  /** Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RowSortMap extends OxmlCompositeElement {
  static _Q = "xne:rowSortMap";
  static _A = [":ref", ":count"];
  /** Reference. Serialized as `:ref` */
  get ref() {
    return this._g(":ref");
  }
  set ref(v) {
    this._s(":ref", v);
  }
  /** Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Formula extends OxmlLeafTextElement {
  static _Q = "xne:f";
}
class ReferenceSequence extends OxmlLeafTextElement {
  static _Q = "xne:sqref";
}
class WorksheetSortMap extends OxmlPartRootElement {
  static _Q = "xne:worksheetSortMap";
  /** Row Sort Map. */
  get rowSortMap() {
    return this._f(RowSortMap);
  }
  /** Column Sort Map. */
  get columnSortMap() {
    return this._f(ColumnSortMap);
  }
}
class Macrosheet extends OxmlPartRootElement {
  static _Q = "xne:macrosheet";
  /** Sheet Properties. */
  get sheetProperties() {
    return this._f(XSheetProperties);
  }
  /** Macro Sheet Dimensions. */
  get sheetDimension() {
    return this._f(XSheetDimension);
  }
  /** Macro Sheet Views. */
  get sheetViews() {
    return this._f(XSheetViews);
  }
  /** Sheet Format Properties. */
  get sheetFormatProperties() {
    return this._f(XSheetFormatProperties);
  }
}
function initOfficeExcelNamespace() {
  SortMapItemType._D = {
    ":newVal": new OxmlAttr(":newVal", OxmlType.UInt32Value),
    ":oldVal": new OxmlAttr(":oldVal", OxmlType.UInt32Value)
  };
  ColumnSortMap._C = {
    "xne:col": ColumnSortMapItem
  };
  ColumnSortMap._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RowSortMap._C = {
    "xne:row": RowSortMapItem
  };
  RowSortMap._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  WorksheetSortMap._C = {
    "xne:rowSortMap": RowSortMap,
    "xne:colSortMap": ColumnSortMap
  };
  Macrosheet._C = {
    "x:sheetPr": XSheetProperties,
    "x:dimension": XSheetDimension,
    "x:sheetViews": XSheetViews,
    "x:sheetFormatPr": XSheetFormatProperties,
    "x:cols": XColumns,
    "x:sheetData": XSheetData,
    "x:sheetProtection": XSheetProtection,
    "x:autoFilter": XAutoFilter,
    "x:sortState": XSortState,
    "x:dataConsolidate": XDataConsolidate,
    "x:customSheetViews": XCustomSheetViews,
    "x:phoneticPr": XPhoneticProperties,
    "x:conditionalFormatting": XConditionalFormatting,
    "x:printOptions": XPrintOptions,
    "x:pageMargins": XPageMargins,
    "x:pageSetup": XPageSetup,
    "x:headerFooter": XHeaderFooter,
    "x:rowBreaks": XRowBreaks,
    "x:colBreaks": XColumnBreaks,
    "x:customProperties": XCustomProperties,
    "x:drawing": XDrawing,
    "x:legacyDrawing": XLegacyDrawing,
    "x:legacyDrawingHF": XLegacyDrawingHeaderFooter,
    "x:picture": XPicture,
    "x:oleObjects": XOleObjects,
    "x:drawingHF": XDrawingHeaderFooter,
    "x:extLst": XExtensionList
  };
  return {
    prefix: "xne",
    xmlns: "http://schemas.microsoft.com/office/excel/2006/main"
  };
}
export {
  ColumnSortMap,
  ColumnSortMapItem,
  Formula,
  Macrosheet,
  ReferenceSequence,
  RowSortMap,
  RowSortMapItem,
  SortMapItemType,
  WorksheetSortMap,
  initOfficeExcelNamespace
};
