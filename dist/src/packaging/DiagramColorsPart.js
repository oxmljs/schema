import { ColorsDefinition } from "../schema/Drawing/Diagrams";
import { OxmlPart } from "../framework/OxmlPart";
class DiagramColorsPart extends OxmlPart {
  static _N = "DiagramColorsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramColors";
  static _C = "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml";
  static _P = "../graphics";
  static _T = "colors";
  static _E = ColorsDefinition;
  get colors() {
    return this._r;
  }
  set colors(root) {
    this._r = root;
  }
}
export {
  DiagramColorsPart
};
