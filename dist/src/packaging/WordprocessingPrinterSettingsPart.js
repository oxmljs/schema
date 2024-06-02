import { OxmlPart } from "../framework/OxmlPart";
class WordprocessingPrinterSettingsPart extends OxmlPart {
  static _N = "WordprocessingPrinterSettingsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/printerSettings";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.printerSettings";
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
  WordprocessingPrinterSettingsPart
};
