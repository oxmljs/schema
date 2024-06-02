import { ArrayData } from "../schema/Office2019/Excel/RichData2";
import { OxmlPart } from "../framework/OxmlPart";
class RdArrayPart extends OxmlPart {
  static _N = "RdArrayPart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/rdArray";
  static _C = "application/vnd.ms-excel.rdarray+xml";
  static _P = "richData";
  static _T = "rdarray";
  static _E = ArrayData;
  get rdarray() {
    return this._r;
  }
  set rdarray(root) {
    this._r = root;
  }
}
export {
  RdArrayPart
};
