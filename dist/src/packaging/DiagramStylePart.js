import { StyleDefinition } from "../schema/Drawing/Diagrams";
import { OxmlPart } from "../framework/OxmlPart";
class DiagramStylePart extends OxmlPart {
  static _N = "DiagramStylePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramQuickStyle";
  static _C = "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml";
  static _P = "../graphics";
  static _T = "quickStyle";
  static _E = StyleDefinition;
  get quickStyle() {
    return this._r;
  }
  set quickStyle(root) {
    this._r = root;
  }
}
export {
  DiagramStylePart
};
