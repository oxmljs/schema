import { AuthorList } from "../schema/Office2021/PowerPoint/Comment";
import { OxmlPart } from "../framework/OxmlPart";
class PowerPointAuthorsPart extends OxmlPart {
  static _N = "PowerPointAuthorsPart";
  static _R = "http://schemas.microsoft.com/office/2018/10/relationships/authors";
  static _C = "application/vnd.ms-powerpoint.authors+xml";
  static _P = ".";
  static _T = "authors";
  static _E = AuthorList;
  get authors() {
    return this._r;
  }
  set authors(root) {
    this._r = root;
  }
}
export {
  PowerPointAuthorsPart
};
