import { OxmlPart } from "../framework/OxmlPart";
class CoreFilePropertiesPart extends OxmlPart {
  static _N = "CoreFilePropertiesPart";
  static _R = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
  static _C = "application/vnd.openxmlformats-package.core-properties+xml";
  static _P = "docProps";
  static _T = "core";
  get core() {
    return this._r;
  }
  set core(root) {
    this._r = root;
  }
}
export {
  CoreFilePropertiesPart
};
