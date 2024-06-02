import { CommentList } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class SlideCommentsPart extends OxmlPart {
  static _N = "SlideCommentsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.comments+xml";
  static _P = "../comments";
  static _T = "comment";
  static _E = CommentList;
  get comment() {
    return this._r;
  }
  set comment(root) {
    this._r = root;
  }
}
export {
  SlideCommentsPart
};
