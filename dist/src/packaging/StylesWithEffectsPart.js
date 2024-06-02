import { Styles } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class StylesWithEffectsPart extends OxmlPart {
  static _N = "StylesWithEffectsPart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects";
  static _C = "application/vnd.ms-word.stylesWithEffects+xml";
  static _P = ".";
  static _T = "stylesWithEffects";
  static _E = Styles;
  get stylesWithEffects() {
    return this._r;
  }
  set stylesWithEffects(root) {
    this._r = root;
  }
}
export {
  StylesWithEffectsPart
};
