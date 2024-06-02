import { Properties } from "../schema/CustomProperties";
import { OxmlPart } from "../framework/OxmlPart";
class CustomFilePropertiesPart extends OxmlPart {
  static _N = "CustomFilePropertiesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
  static _C = "application/vnd.openxmlformats-officedocument.custom-properties+xml";
  static _P = "docProps";
  static _T = "custom";
  static _E = Properties;
  get custom() {
    return this._r;
  }
  set custom(root) {
    this._r = root;
  }
}
export {
  CustomFilePropertiesPart
};
