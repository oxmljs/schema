import { Chartsheet } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class ChartsheetPart extends OxmlPart {
  static _N = "ChartsheetPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml";
  static _P = "chartsheets";
  static _T = "sheet";
  static _E = Chartsheet;
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
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  ChartsheetPart
};
