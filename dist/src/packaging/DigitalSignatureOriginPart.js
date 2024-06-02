import { OxmlPart } from "../framework/OxmlPart";
class DigitalSignatureOriginPart extends OxmlPart {
  static _N = "DigitalSignatureOriginPart";
  static _R = "http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/origin";
  static _C = "application/vnd.openxmlformats-package.digital-signature-origin";
  static _P = "_xmlsignatures";
  static _T = "origin";
  get origin() {
    return this._r;
  }
  set origin(root) {
    this._r = root;
  }
  get xmlSignatureParts() {
    return this._m("XmlSignaturePart");
  }
}
export {
  DigitalSignatureOriginPart
};
