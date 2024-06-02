import { Properties } from "../schema/ExtendedProperties";
import { OxmlPart } from "../framework/OxmlPart";
class ExtendedFilePropertiesPart extends OxmlPart {
  static _N = "ExtendedFilePropertiesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
  static _C = "application/vnd.openxmlformats-officedocument.extended-properties+xml";
  static _P = "docProps";
  static _T = "app";
  static _E = Properties;
  get app() {
    return this._r;
  }
  set app(root) {
    this._r = root;
  }
}
export {
  ExtendedFilePropertiesPart
};
