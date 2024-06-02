import { OxmlPart } from "../framework/OxmlPart";
class CustomDataPart extends OxmlPart {
  static _N = "CustomDataPart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/customData";
  static _C = "application/binary";
  static _P = "customData";
  static _T = "customData";
  get customData() {
    return this._r;
  }
  set customData(root) {
    this._r = root;
  }
}
export {
  CustomDataPart
};
