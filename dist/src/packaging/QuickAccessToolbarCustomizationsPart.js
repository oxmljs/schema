import { CustomUI } from "../schema/Office/CustomUI";
import { OxmlPart } from "../framework/OxmlPart";
class QuickAccessToolbarCustomizationsPart extends OxmlPart {
  static _N = "QuickAccessToolbarCustomizationsPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/ui/userCustomization";
  static _C = "application/xml";
  static _P = "userCustomization";
  static _T = "customUI";
  static _E = CustomUI;
  get customUI() {
    return this._r;
  }
  set customUI(root) {
    this._r = root;
  }
}
export {
  QuickAccessToolbarCustomizationsPart
};
