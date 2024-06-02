import { RichStylesheet } from "../schema/Office2019/Excel/RichData2";
import { OxmlPart } from "../framework/OxmlPart";
class RichStylesPart extends OxmlPart {
  static _N = "RichStylesPart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/richStyles";
  static _C = "application/vnd.ms-excel.richstyles+xml";
  static _P = "richData";
  static _T = "richStyles";
  static _E = RichStylesheet;
  get richStyles() {
    return this._r;
  }
  set richStyles(root) {
    this._r = root;
  }
}
export {
  RichStylesPart
};
