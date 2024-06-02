import { OxmlPart } from "../framework/OxmlPart";
class XmlSignaturePart extends OxmlPart {
  static _N = "XmlSignaturePart";
  static _R = "http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/signature";
  static _C = "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml";
  static _P = "_xmlsignatures";
  static _T = "sig";
  get sig() {
    return this._r;
  }
  set sig(root) {
    this._r = root;
  }
}
export {
  XmlSignaturePart
};
