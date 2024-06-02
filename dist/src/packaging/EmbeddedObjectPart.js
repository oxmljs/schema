import { OxmlPart } from "../framework/OxmlPart";
class EmbeddedObjectPart extends OxmlPart {
  static _N = "EmbeddedObjectPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject";
  static _C = "*";
  static _P = "embeddings";
  static _T = "embeddedObject";
  get embeddedObject() {
    return this._r;
  }
  set embeddedObject(root) {
    this._r = root;
  }
}
export {
  EmbeddedObjectPart
};
