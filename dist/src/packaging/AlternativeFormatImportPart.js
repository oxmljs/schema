import { OxmlPart } from "../framework/OxmlPart";
class AlternativeFormatImportPart extends OxmlPart {
  static _N = "AlternativeFormatImportPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk";
  static _C = "*";
  static _P = ".";
  static _T = "afchunk";
  get afchunk() {
    return this._r;
  }
  set afchunk(root) {
    this._r = root;
  }
}
export {
  AlternativeFormatImportPart
};
