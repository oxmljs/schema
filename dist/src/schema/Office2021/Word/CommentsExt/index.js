import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as W16curExtension } from "../../../Office2021/Word/ExtensionList";
class ExtensionList extends OxmlCompositeElement {
  static _Q = "w16cex:extLst";
}
class CommentExtensible extends OxmlCompositeElement {
  static _Q = "w16cex:commentExtensible";
  static _A = ["w16cex:durableId", "w16cex:dateUtc", "w16cex:intelligentPlaceholder"];
  /** durableId. Serialized as `w16cex:durableId` */
  get durableId() {
    return this._g("w16cex:durableId");
  }
  set durableId(v) {
    this._s("w16cex:durableId", v);
  }
  /** dateUtc. Serialized as `w16cex:dateUtc` */
  get dateUtc() {
    return this._g("w16cex:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16cex:dateUtc", v);
  }
  /** intelligentPlaceholder. Serialized as `w16cex:intelligentPlaceholder` */
  get intelligentPlaceholder() {
    return this._g("w16cex:intelligentPlaceholder");
  }
  set intelligentPlaceholder(v) {
    this._s("w16cex:intelligentPlaceholder", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CommentsExtensible extends OxmlPartRootElement {
  static _Q = "w16cex:commentsExtensible";
}
function initOffice2021WordCommentsExtNamespace() {
  ExtensionList._C = {
    "w16cur:ext": W16curExtension
  };
  CommentExtensible._C = {
    "w16cex:extLst": ExtensionList
  };
  CommentExtensible._D = {
    "w16cex:durableId": new OxmlAttr("w16cex:durableId", OxmlType.HexBinaryValue),
    "w16cex:dateUtc": new OxmlAttr("w16cex:dateUtc", OxmlType.DateTimeValue),
    "w16cex:intelligentPlaceholder": new OxmlAttr("w16cex:intelligentPlaceholder", OxmlType.OnOffValue)
  };
  CommentsExtensible._C = {
    "w16cex:commentExtensible": CommentExtensible,
    "w16cex:extLst": ExtensionList
  };
  return {
    prefix: "w16cex",
    xmlns: "http://schemas.microsoft.com/office/word/2018/wordml/cex"
  };
}
export {
  CommentExtensible,
  CommentsExtensible,
  ExtensionList,
  initOffice2021WordCommentsExtNamespace
};
