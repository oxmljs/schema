import { Workbook } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorkbookPart extends OxmlPart {
  static _N = "WorkbookPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
  static _C = "*";
  static _P = "xl";
  static _T = "workbook";
  static _E = Workbook;
  get workbook() {
    return this._r;
  }
  set workbook(root) {
    this._r = root;
  }
  get customXmlParts() {
    return this._m("CustomXmlPart");
  }
  get calculationChainPart() {
    return this._f("CalculationChainPart");
  }
  get cellMetadataPart() {
    return this._f("CellMetadataPart");
  }
  get connectionsPart() {
    return this._f("ConnectionsPart");
  }
  get customXmlMappingsPart() {
    return this._f("CustomXmlMappingsPart");
  }
  get sharedStringTablePart() {
    return this._f("SharedStringTablePart");
  }
  get workbookRevisionHeaderPart() {
    return this._f("WorkbookRevisionHeaderPart");
  }
  get workbookUserDataPart() {
    return this._f("WorkbookUserDataPart");
  }
  get workbookStylesPart() {
    return this._f("WorkbookStylesPart");
  }
  get themePart() {
    return this._f("ThemePart");
  }
  get thumbnailPart() {
    return this._f("ThumbnailPart");
  }
  get volatileDependenciesPart() {
    return this._f("VolatileDependenciesPart");
  }
  get chartsheetParts() {
    return this._m("ChartsheetPart");
  }
  get dialogsheetParts() {
    return this._m("DialogsheetPart");
  }
  get externalWorkbookParts() {
    return this._m("ExternalWorkbookPart");
  }
  get pivotTableCacheDefinitionParts() {
    return this._m("PivotTableCacheDefinitionPart");
  }
  get worksheetParts() {
    return this._m("WorksheetPart");
  }
  get excelAttachedToolbarsPart() {
    return this._f("ExcelAttachedToolbarsPart");
  }
  get vbaProjectPart() {
    return this._f("VbaProjectPart");
  }
  get macroSheetParts() {
    return this._m("MacroSheetPart");
  }
  get internationalMacroSheetParts() {
    return this._m("InternationalMacroSheetPart");
  }
  get customDataPropertiesParts() {
    return this._m("CustomDataPropertiesPart");
  }
  get slicerCacheParts() {
    return this._m("SlicerCachePart");
  }
  get timeLineCacheParts() {
    return this._m("TimeLineCachePart");
  }
  get workbookPersonParts() {
    return this._m("WorkbookPersonPart");
  }
  get rdRichValueParts() {
    return this._m("RdRichValuePart");
  }
  get cT_RdRichValueStructureParts() {
    return this._m("RdRichValueStructurePart");
  }
  get rdArrayParts() {
    return this._m("RdArrayPart");
  }
  get richStylesParts() {
    return this._m("RichStylesPart");
  }
  get rdSupportingPropertyBagParts() {
    return this._m("RdSupportingPropertyBagPart");
  }
  get rdSupportingPropertyBagStructureParts() {
    return this._m("RdSupportingPropertyBagStructurePart");
  }
  get rdRichValueTypesParts() {
    return this._m("RdRichValueTypesPart");
  }
  get rdRichValueWebImagePart() {
    return this._f("RdRichValueWebImagePart");
  }
}
export {
  WorkbookPart
};
