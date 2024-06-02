import { ChartStyle } from "../schema/Office2013/Drawing/ChartStyle";
import { OxmlPart } from "../framework/OxmlPart";
class ChartStylePart extends OxmlPart {
  static _N = "ChartStylePart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/chartStyle";
  static _C = "application/vnd.ms-office.chartstyle+xml";
  static _P = ".";
  static _T = "style";
  static _E = ChartStyle;
  get style() {
    return this._r;
  }
  set style(root) {
    this._r = root;
  }
}
export {
  ChartStylePart
};
