import { TemplateCommandGroup } from "../schema/Office/Word";
import { OxmlPart } from "../framework/OxmlPart";
class CustomizationPart extends OxmlPart {
  static _N = "CustomizationPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/keyMapCustomizations";
  static _C = "application/vnd.ms-word.keyMapCustomizations+xml";
  static _P = ".";
  static _T = "customizations";
  static _E = TemplateCommandGroup;
  get customizations() {
    return this._r;
  }
  set customizations(root) {
    this._r = root;
  }
  get wordAttachedToolbarsPart() {
    return this._f("WordAttachedToolbarsPart");
  }
}
export {
  CustomizationPart
};
