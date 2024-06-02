import { ThemeOverride } from "../schema/Drawing";
import { OxmlPart } from "../framework/OxmlPart";
class ThemeOverridePart extends OxmlPart {
  static _N = "ThemeOverridePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/themeOverride";
  static _C = "application/vnd.openxmlformats-officedocument.themeOverride+xml";
  static _P = "theme";
  static _T = "themeoverride";
  static _E = ThemeOverride;
  get themeoverride() {
    return this._r;
  }
  set themeoverride(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  ThemeOverridePart
};
