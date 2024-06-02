import { OxmlPart } from "../framework/OxmlPart";
class EmbeddedControlPersistencePart extends OxmlPart {
  static _N = "EmbeddedControlPersistencePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/control";
  static _C = "*";
  static _P = "embeddings";
  static _T = "control";
  get control() {
    return this._r;
  }
  set control(root) {
    this._r = root;
  }
  get embeddedControlPersistenceBinaryDataParts() {
    return this._m("EmbeddedControlPersistenceBinaryDataPart");
  }
}
export {
  EmbeddedControlPersistencePart
};
