import { CalculationChain } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class CalculationChainPart extends OxmlPart {
  static _N = "CalculationChainPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml";
  static _P = ".";
  static _T = "calcChain";
  static _E = CalculationChain;
  get calcChain() {
    return this._r;
  }
  set calcChain(root) {
    this._r = root;
  }
}
export {
  CalculationChainPart
};
