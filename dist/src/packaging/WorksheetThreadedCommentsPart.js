import { ThreadedComments } from "../schema/Office2019/Excel/ThreadedComments";
import { OxmlPart } from "../framework/OxmlPart";
class WorksheetThreadedCommentsPart extends OxmlPart {
  static _N = "WorksheetThreadedCommentsPart";
  static _R = "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment";
  static _C = "application/vnd.ms-excel.threadedcomments+xml";
  static _P = "../threadedcomments";
  static _T = "threadedcomment";
  static _E = ThreadedComments;
  get threadedcomment() {
    return this._r;
  }
  set threadedcomment(root) {
    this._r = root;
  }
}
export {
  WorksheetThreadedCommentsPart
};
