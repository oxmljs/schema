import { DataModelRoot } from "../schema/Drawing/Diagrams";
import { OxmlPart } from "../framework/OxmlPart";
class DiagramDataPart extends OxmlPart {
  static _N = "DiagramDataPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramData";
  static _C = "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml";
  static _P = "../graphics";
  static _T = "data";
  static _E = DataModelRoot;
  get data() {
    return this._r;
  }
  set data(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
  get slideParts() {
    return this._m("SlidePart");
  }
  get worksheetParts() {
    return this._m("WorksheetPart");
  }
}
export {
  DiagramDataPart
};
