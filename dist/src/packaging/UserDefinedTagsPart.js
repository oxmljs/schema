import { TagList } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class UserDefinedTagsPart extends OxmlPart {
  static _N = "UserDefinedTagsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tags";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.tags+xml";
  static _P = "tags";
  static _T = "tag";
  static _E = TagList;
  get tag() {
    return this._r;
  }
  set tag(root) {
    this._r = root;
  }
}
export {
  UserDefinedTagsPart
};
