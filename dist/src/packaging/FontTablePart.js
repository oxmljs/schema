import { Fonts } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class FontTablePart extends OxmlPart {
  static _N = "FontTablePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml";
  static _P = ".";
  static _T = "fontTable";
  static _E = Fonts;
  get fontTable() {
    return this._r;
  }
  set fontTable(root) {
    this._r = root;
  }
  get fontParts() {
    return this._m("FontPart");
  }
}
export {
  FontTablePart
};
