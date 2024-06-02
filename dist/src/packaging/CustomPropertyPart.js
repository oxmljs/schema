import { OxmlPart } from "../framework/OxmlPart";
class CustomPropertyPart extends OxmlPart {
  static _N = "CustomPropertyPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customProperty";
  static _C = "*";
  static _P = ".";
  static _T = "CustomProperty";
  get CustomProperty() {
    return this._r;
  }
  set CustomProperty(root) {
    this._r = root;
  }
}
export {
  CustomPropertyPart
};
