import { ViewProperties } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class ViewPropertiesPart extends OxmlPart {
  static _N = "ViewPropertiesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml";
  static _P = ".";
  static _T = "viewProps";
  static _E = ViewProperties;
  get viewProps() {
    return this._r;
  }
  set viewProps(root) {
    this._r = root;
  }
  get slideParts() {
    return this._m("SlidePart");
  }
}
export {
  ViewPropertiesPart
};
