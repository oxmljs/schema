import { OxmlPart } from "../framework/OxmlPart";
class FontPart extends OxmlPart {
  static _N = "FontPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font";
  static _C = "*";
  static _P = "fonts";
  static _T = "font";
  get font() {
    return this._r;
  }
  set font(root) {
    this._r = root;
  }
}
export {
  FontPart
};
