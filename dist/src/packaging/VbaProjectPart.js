import { OxmlPart } from "../framework/OxmlPart";
class VbaProjectPart extends OxmlPart {
  static _N = "VbaProjectPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/vbaProject";
  static _C = "application/vnd.ms-office.vbaProject";
  static _P = ".";
  static _T = "vbaProject";
  get vbaProject() {
    return this._r;
  }
  set vbaProject(root) {
    this._r = root;
  }
  get vbaDataPart() {
    return this._f("VbaDataPart");
  }
}
export {
  VbaProjectPart
};
