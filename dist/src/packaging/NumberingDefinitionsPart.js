import { Numbering } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class NumberingDefinitionsPart extends OxmlPart {
  static _N = "NumberingDefinitionsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml";
  static _P = ".";
  static _T = "numbering";
  static _E = Numbering;
  get numbering() {
    return this._r;
  }
  set numbering(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  NumberingDefinitionsPart
};
