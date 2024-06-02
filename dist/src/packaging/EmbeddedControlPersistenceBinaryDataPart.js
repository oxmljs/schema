import { OxmlPart } from "../framework/OxmlPart";
class EmbeddedControlPersistenceBinaryDataPart extends OxmlPart {
  static _N = "EmbeddedControlPersistenceBinaryDataPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/activeXControlBinary";
  static _C = "*";
  static _P = ".";
  static _T = "ActiveXControl";
  get ActiveXControl() {
    return this._r;
  }
  set ActiveXControl(root) {
    this._r = root;
  }
}
export {
  EmbeddedControlPersistenceBinaryDataPart
};
