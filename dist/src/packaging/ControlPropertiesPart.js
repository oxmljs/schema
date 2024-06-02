import { FormControlProperties } from "../schema/Office2010/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class ControlPropertiesPart extends OxmlPart {
  static _N = "ControlPropertiesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp";
  static _C = "application/vnd.ms-excel.controlproperties+xml";
  static _P = "../ctrlProps";
  static _T = "ctrlProp";
  static _E = FormControlProperties;
  get ctrlProp() {
    return this._r;
  }
  set ctrlProp(root) {
    this._r = root;
  }
}
export {
  ControlPropertiesPart
};
