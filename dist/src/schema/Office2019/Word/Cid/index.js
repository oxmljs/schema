import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class CommentId extends OxmlLeafElement {
  static _Q = "w16cid:commentId";
  static _A = ["w16cid:paraId", "w16cid:durableId"];
  /** paraId. Serialized as `w16cid:paraId` */
  get paraId() {
    return this._g("w16cid:paraId");
  }
  set paraId(v) {
    this._s("w16cid:paraId", v);
  }
  /** durableId. Serialized as `w16cid:durableId` */
  get durableId() {
    return this._g("w16cid:durableId");
  }
  set durableId(v) {
    this._s("w16cid:durableId", v);
  }
}
class CommentsIds extends OxmlPartRootElement {
  static _Q = "w16cid:commentsIds";
}
function initOffice2019WordCidNamespace() {
  CommentId._D = {
    "w16cid:paraId": new OxmlAttr("w16cid:paraId", OxmlType.HexBinaryValue),
    "w16cid:durableId": new OxmlAttr("w16cid:durableId", OxmlType.HexBinaryValue)
  };
  CommentsIds._C = {
    "w16cid:commentId": CommentId
  };
  return {
    prefix: "w16cid",
    xmlns: "http://schemas.microsoft.com/office/word/2016/wordml/cid"
  };
}
export {
  CommentId,
  CommentsIds,
  initOffice2019WordCidNamespace
};
