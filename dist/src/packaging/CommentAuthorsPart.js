import { CommentAuthorList } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class CommentAuthorsPart extends OxmlPart {
  static _N = "CommentAuthorsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/commentAuthors";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml";
  static _P = ".";
  static _T = "commentAuthors";
  static _E = CommentAuthorList;
  get commentAuthors() {
    return this._r;
  }
  set commentAuthors(root) {
    this._r = root;
  }
}
export {
  CommentAuthorsPart
};
