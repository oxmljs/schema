import { OxmlPart } from "../framework/OxmlPart";
class WordAttachedToolbarsPart extends OxmlPart {
  static _N = "WordAttachedToolbarsPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/attachedToolbars";
  static _C = "application/vnd.ms-word.attachedToolbars";
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
  WordAttachedToolbarsPart
};
