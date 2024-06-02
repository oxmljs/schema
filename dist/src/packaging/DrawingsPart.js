import { WorksheetDrawing } from "../schema/Drawing/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class DrawingsPart extends OxmlPart {
  static _N = "DrawingsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
  static _C = "application/vnd.openxmlformats-officedocument.drawing+xml";
  static _P = "../drawings";
  static _T = "drawing";
  static _E = WorksheetDrawing;
  get drawing() {
    return this._r;
  }
  set drawing(root) {
    this._r = root;
  }
  get chartParts() {
    return this._m("ChartPart");
  }
  get extendedChartParts() {
    return this._m("ExtendedChartPart");
  }
  get diagramColorsParts() {
    return this._m("DiagramColorsPart");
  }
  get diagramDataParts() {
    return this._m("DiagramDataPart");
  }
  get diagramPersistLayoutParts() {
    return this._m("DiagramPersistLayoutPart");
  }
  get diagramLayoutDefinitionParts() {
    return this._m("DiagramLayoutDefinitionPart");
  }
  get diagramStyleParts() {
    return this._m("DiagramStylePart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
  get customXmlParts() {
    return this._m("CustomXmlPart");
  }
  get webExtensionParts() {
    return this._m("WebExtensionPart");
  }
}
export {
  DrawingsPart
};
