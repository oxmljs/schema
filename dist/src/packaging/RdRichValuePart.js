import { RichValueData } from "../schema/Office2019/Excel/RichData";
import { OxmlPart } from "../framework/OxmlPart";
class RdRichValuePart extends OxmlPart {
  static _N = "RdRichValuePart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/rdRichValue";
  static _C = "application/vnd.ms-excel.rdrichvalue+xml";
  static _P = "richData";
  static _T = "rdrichvalue";
  static _E = RichValueData;
  get rdrichvalue() {
    return this._r;
  }
  set rdrichvalue(root) {
    this._r = root;
  }
}
export {
  RdRichValuePart
};
