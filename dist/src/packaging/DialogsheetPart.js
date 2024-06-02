import { DialogSheet } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class DialogsheetPart extends OxmlPart {
  static _N = "DialogsheetPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml";
  static _P = "dialogsheets";
  static _T = "sheet";
  static _E = DialogSheet;
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
  get embeddedObjectParts() {
    return this._m("EmbeddedObjectPart");
  }
}
export {
  DialogsheetPart
};
