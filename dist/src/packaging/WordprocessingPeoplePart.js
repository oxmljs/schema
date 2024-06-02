import { People } from "../schema/Office2013/Word";
import { OxmlPart } from "../framework/OxmlPart";
class WordprocessingPeoplePart extends OxmlPart {
  static _N = "WordprocessingPeoplePart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/people";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.people+xml";
  static _P = ".";
  static _T = "people";
  static _E = People;
  get people() {
    return this._r;
  }
  set people(root) {
    this._r = root;
  }
}
export {
  WordprocessingPeoplePart
};
