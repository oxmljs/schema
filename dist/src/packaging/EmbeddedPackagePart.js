import { OxmlPart } from "../framework/OxmlPart";
class EmbeddedPackagePart extends OxmlPart {
  static _N = "EmbeddedPackagePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/package";
  static _C = "*";
  static _P = "embeddings";
  static _T = "package";
  get package() {
    return this._r;
  }
  set package(root) {
    this._r = root;
  }
}
export {
  EmbeddedPackagePart
};
