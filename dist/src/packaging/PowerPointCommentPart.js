import { CommentList } from "../schema/Office2021/PowerPoint/Comment";
import { OxmlPart } from "../framework/OxmlPart";
class PowerPointCommentPart extends OxmlPart {
  static _N = "PowerPointCommentPart";
  static _R = "http://schemas.microsoft.com/office/2018/10/relationships/comments";
  static _C = "application/vnd.ms-powerpoint.comments+xml";
  static _P = "../comments";
  static _T = "modernComment";
  static _E = CommentList;
  get modernComment() {
    return this._r;
  }
  set modernComment(root) {
    this._r = root;
  }
}
export {
  PowerPointCommentPart
};
