import { OxmlPart } from "../framework/OxmlPart";
class SpreadsheetPrinterSettingsPart extends OxmlPart {
  static _N = "SpreadsheetPrinterSettingsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/printerSettings";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings";
  static _P = "../printerSettings";
  static _T = "printerSettings";
  get printerSettings() {
    return this._r;
  }
  set printerSettings(root) {
    this._r = root;
  }
}
export {
  SpreadsheetPrinterSettingsPart
};
