import { OxmlPart } from "../framework/OxmlPart";
class LegacyDiagramTextPart extends OxmlPart {
  static _N = "LegacyDiagramTextPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/legacyDiagramText";
  static _C = "application/vnd.ms-office.legacyDiagramText";
  static _P = ".";
  static _T = "legacyDiagramText";
  get legacyDiagramText() {
    return this._r;
  }
  set legacyDiagramText(root) {
    this._r = root;
  }
}
export {
  LegacyDiagramTextPart
};
