import { UserShapes } from "../schema/Drawing/Charts";
import { OxmlPart } from "../framework/OxmlPart";
class ChartDrawingPart extends OxmlPart {
  static _N = "ChartDrawingPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartUserShapes";
  static _C = "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml";
  static _P = "../drawings";
  static _T = "drawing";
  static _E = UserShapes;
  get drawing() {
    return this._r;
  }
  set drawing(root) {
    this._r = root;
  }
  get chartPart() {
    return this._f("ChartPart");
  }
  get extendedChartPart() {
    return this._f("ExtendedChartPart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  ChartDrawingPart
};
