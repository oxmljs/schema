import { CustomUI } from "../schema/Office2010/CustomUI";
import { OxmlPart } from "../framework/OxmlPart";
class RibbonAndBackstageCustomizationsPart extends OxmlPart {
  static _N = "RibbonAndBackstageCustomizationsPart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/ui/extensibility";
  static _C = "application/xml";
  static _P = "customUI";
  static _T = "customUI";
  static _E = CustomUI;
  get customUI() {
    return this._r;
  }
  set customUI(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  RibbonAndBackstageCustomizationsPart
};
