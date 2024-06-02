import { PresentationProperties } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class PresentationPropertiesPart extends OxmlPart {
  static _N = "PresentationPropertiesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.presProps+xml";
  static _P = ".";
  static _T = "presProps";
  static _E = PresentationProperties;
  get presProps() {
    return this._r;
  }
  set presProps(root) {
    this._r = root;
  }
}
export {
  PresentationPropertiesPart
};
