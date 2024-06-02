import { ChartSpace } from "../schema/Drawing/Charts";
import { OxmlPart } from "../framework/OxmlPart";
class ChartPart extends OxmlPart {
  static _N = "ChartPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";
  static _C = "application/vnd.openxmlformats-officedocument.drawingml.chart+xml";
  static _P = "charts";
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
  ChartPart
};
