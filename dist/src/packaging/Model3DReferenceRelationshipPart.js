import { OxmlPart } from "../framework/OxmlPart";
class Model3DReferenceRelationshipPart extends OxmlPart {
  static _N = "Model3DReferenceRelationshipPart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/model3d";
  static _C = "model/gltf-binary";
  static _P = "../media";
  static _T = "model3d";
  get model3d() {
    return this._r;
  }
  set model3d(root) {
    this._r = root;
  }
}
export {
  Model3DReferenceRelationshipPart
};
