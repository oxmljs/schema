import { Drawing } from "../schema/Office/Drawing";
import { OxmlPart } from "../framework/OxmlPart";
class DiagramPersistLayoutPart extends OxmlPart {
  static _N = "DiagramPersistLayoutPart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/diagramDrawing";
  static _C = "application/vnd.ms-office.drawingml.diagramDrawing+xml";
  static _P = "../diagrams";
  static _T = "drawing";
  static _E = Drawing;
  get drawing() {
    return this._r;
  }
  set drawing(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  DiagramPersistLayoutPart
};
