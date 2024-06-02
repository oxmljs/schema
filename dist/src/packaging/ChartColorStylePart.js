import { ColorStyle } from "../schema/Office2013/Drawing/ChartStyle";
import { OxmlPart } from "../framework/OxmlPart";
class ChartColorStylePart extends OxmlPart {
  static _N = "ChartColorStylePart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/chartColorStyle";
  static _C = "application/vnd.ms-office.chartcolorstyle+xml";
  static _P = ".";
  static _T = "colors";
  static _E = ColorStyle;
  get colors() {
    return this._r;
  }
  set colors(root) {
    this._r = root;
  }
}
export {
  ChartColorStylePart
};
