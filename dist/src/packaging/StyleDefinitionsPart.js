import { Styles } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class StyleDefinitionsPart extends OxmlPart {
  static _N = "StyleDefinitionsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml";
  static _P = ".";
  static _T = "styles";
  static _E = Styles;
  get styles() {
    return this._r;
  }
  set styles(root) {
    this._r = root;
  }
}
export {
  StyleDefinitionsPart
};
