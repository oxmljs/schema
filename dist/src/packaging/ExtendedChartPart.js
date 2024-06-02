import { ChartSpace } from "../schema/Office2016/Drawing/ChartDrawing";
import { OxmlPart } from "../framework/OxmlPart";
class ExtendedChartPart extends OxmlPart {
  static _N = "ExtendedChartPart";
  static _R = "http://schemas.microsoft.com/office/2014/relationships/chartEx";
  static _C = "application/vnd.ms-office.chartex+xml";
  static _P = "extendedCharts";
  static _T = "chart";
  static _E = ChartSpace;
  get chart() {
    return this._r;
  }
  set chart(root) {
    this._r = root;
  }
  get chartDrawingPart() {
    return this._f("ChartDrawingPart");
  }
  get embeddedPackagePart() {
    return this._f("EmbeddedPackagePart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
  get themeOverridePart() {
    return this._f("ThemeOverridePart");
  }
  get chartStyleParts() {
    return this._m("ChartStylePart");
  }
  get chartColorStyleParts() {
    return this._m("ChartColorStylePart");
  }
}
export {
  ExtendedChartPart
};
