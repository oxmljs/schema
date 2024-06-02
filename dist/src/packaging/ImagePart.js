import { OxmlPart } from "../framework/OxmlPart";
class ImagePart extends OxmlPart {
  static _N = "ImagePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
  static _C = "*";
  static _P = "../media";
  static _T = "image";
  get image() {
    return this._r;
  }
  set image(root) {
    this._r = root;
  }
}
export {
  ImagePart
};
