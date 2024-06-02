import { OxmlPart } from "../framework/OxmlPart";
class VmlDrawingPart extends OxmlPart {
  static _N = "VmlDrawingPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing";
  static _C = "application/vnd.openxmlformats-officedocument.vmlDrawing";
  static _P = "../drawings";
  static _T = "vmldrawing";
  get vmldrawing() {
    return this._r;
  }
  set vmldrawing(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
  get legacyDiagramTextParts() {
    return this._m("LegacyDiagramTextPart");
  }
}
export {
  VmlDrawingPart
};
