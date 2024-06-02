import { Theme } from "../schema/Drawing";
import { OxmlPart } from "../framework/OxmlPart";
class ThemePart extends OxmlPart {
  static _N = "ThemePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
  static _C = "application/vnd.openxmlformats-officedocument.theme+xml";
  static _P = "theme";
  static _T = "theme";
  static _E = Theme;
  get theme() {
    return this._r;
  }
  set theme(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  ThemePart
};
