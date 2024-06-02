import { OxmlPart } from "../framework/OxmlPart";
class ThumbnailPart extends OxmlPart {
  static _N = "ThumbnailPart";
  static _R = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail";
  static _C = "*";
  static _P = "docProps";
  static _T = "thumbnail";
  get thumbnail() {
    return this._r;
  }
  set thumbnail(root) {
    this._r = root;
  }
}
export {
  ThumbnailPart
};
