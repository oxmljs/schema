import { CommentsExtensible } from "../schema/Office2021/Word/CommentsExt";
import { OxmlPart } from "../framework/OxmlPart";
class WordCommentsExtensiblePart extends OxmlPart {
  static _N = "WordCommentsExtensiblePart";
  static _R = "http://schemas.microsoft.com/office/2018/08/relationships/commentsExtensible";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.commentsExtensible+xml";
  static _P = ".";
  static _T = "commentsExtensible";
  static _E = CommentsExtensible;
  get commentsExtensible() {
    return this._r;
  }
  set commentsExtensible(root) {
    this._r = root;
  }
}
export {
  WordCommentsExtensiblePart
};
