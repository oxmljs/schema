import { OxmlPart } from "../framework/OxmlPart";
class ExcelAttachedToolbarsPart extends OxmlPart {
  static _N = "ExcelAttachedToolbarsPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/attachedToolbars";
  static _C = "application/vnd.ms-excel.attachedToolbars";
  static _P = ".";
  static _T = "attachedToolbars";
  get attachedToolbars() {
    return this._r;
  }
  set attachedToolbars(root) {
    this._r = root;
  }
}
export {
  ExcelAttachedToolbarsPart
};
