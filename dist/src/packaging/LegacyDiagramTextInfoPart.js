import { OxmlPart } from "../framework/OxmlPart";
class LegacyDiagramTextInfoPart extends OxmlPart {
  static _N = "LegacyDiagramTextInfoPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/legacyDocTextInfo";
  static _C = "application/vnd.ms-office.legacyDocTextInfo";
  static _P = ".";
  static _T = "legacyDocTextInfo";
  get legacyDocTextInfo() {
    return this._r;
  }
  set legacyDocTextInfo(root) {
    this._r = root;
  }
}
export {
  LegacyDiagramTextInfoPart
};
