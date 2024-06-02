import { Comments } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorksheetCommentsPart extends OxmlPart {
  static _N = "WorksheetCommentsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml";
  static _P = "..";
  static _T = "comments";
  static _E = Comments;
  get comments() {
    return this._r;
  }
  set comments(root) {
    this._r = root;
  }
}
export {
  WorksheetCommentsPart
};
