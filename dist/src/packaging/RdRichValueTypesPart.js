import { RichValueTypesInfo } from "../schema/Office2019/Excel/RichData2";
import { OxmlPart } from "../framework/OxmlPart";
class RdRichValueTypesPart extends OxmlPart {
  static _N = "RdRichValueTypesPart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/rdRichValueTypes";
  static _C = "application/vnd.ms-excel.rdrichvaluetypes+xml";
  static _P = "richData";
  static _T = "rdRichValueTypes";
  static _E = RichValueTypesInfo;
  get rdRichValueTypes() {
    return this._r;
  }
  set rdRichValueTypes(root) {
    this._r = root;
  }
}
export {
  RdRichValueTypesPart
};
