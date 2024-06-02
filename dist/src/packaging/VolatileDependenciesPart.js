import { VolatileTypes } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class VolatileDependenciesPart extends OxmlPart {
  static _N = "VolatileDependenciesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/volatileDependencies";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml";
  static _P = ".";
  static _T = "volatileDependencies";
  static _E = VolatileTypes;
  get volatileDependencies() {
    return this._r;
  }
  set volatileDependencies(root) {
    this._r = root;
  }
}
export {
  VolatileDependenciesPart
};
