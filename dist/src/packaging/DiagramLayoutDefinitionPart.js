import { LayoutDefinition } from "../schema/Drawing/Diagrams";
import { OxmlPart } from "../framework/OxmlPart";
class DiagramLayoutDefinitionPart extends OxmlPart {
  static _N = "DiagramLayoutDefinitionPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramLayout";
  static _C = "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml";
  static _P = "../graphics";
  static _T = "layout";
  static _E = LayoutDefinition;
  get layout() {
    return this._r;
  }
  set layout(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  DiagramLayoutDefinitionPart
};
