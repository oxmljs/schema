import { Worksheet } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorksheetPart extends OxmlPart {
  static _N = "WorksheetPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml";
  static _P = "worksheets";
  static _T = "sheet";
  static _E = Worksheet;
  get sheet() {
    return this._r;
  }
  set sheet(root) {
    this._r = root;
  }
  get spreadsheetPrinterSettingsParts() {
    return this._m("SpreadsheetPrinterSettingsPart");
  }
  get drawingsPart() {
    return this._f("DrawingsPart");
  }
  get vmlDrawingParts() {
    return this._m("VmlDrawingPart");
  }
  get worksheetCommentsPart() {
    return this._f("WorksheetCommentsPart");
  }
  get pivotTableParts() {
    return this._m("PivotTablePart");
  }
  get singleCellTablePart() {
    return this._f("SingleCellTablePart");
  }
  get tableDefinitionParts() {
    return this._m("TableDefinitionPart");
  }
  get embeddedControlPersistenceParts() {
    return this._m("EmbeddedControlPersistencePart");
  }
  get controlPropertiesParts() {
    return this._m("ControlPropertiesPart");
  }
  get embeddedObjectParts() {
    return this._m("EmbeddedObjectPart");
  }
  get embeddedPackageParts() {
    return this._m("EmbeddedPackagePart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
  get customPropertyParts() {
    return this._m("CustomPropertyPart");
  }
  get worksheetSortMapPart() {
    return this._f("WorksheetSortMapPart");
  }
  get queryTableParts() {
    return this._m("QueryTablePart");
  }
  get embeddedControlPersistenceBinaryDataParts() {
    return this._m("EmbeddedControlPersistenceBinaryDataPart");
  }
  get slicersParts() {
    return this._m("SlicersPart");
  }
  get timeLineParts() {
    return this._m("TimeLinePart");
  }
  get worksheetThreadedCommentsParts() {
    return this._m("WorksheetThreadedCommentsPart");
  }
  get model3DReferenceRelationshipParts() {
    return this._m("Model3DReferenceRelationshipPart");
  }
  get namedSheetViewsParts() {
    return this._m("NamedSheetViewsPart");
  }
}
export {
  WorksheetPart
};
