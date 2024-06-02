import { OxmlCompositeElement } from "../../../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../../framework/OxmlType";
import { SlideMonikerList as PcSlideMonikerList } from "../../../../../Office2016/Presentation/Command";
class CommentReplyV2Moniker extends OxmlLeafElement {
  static _Q = "pc2:cmRplyMk";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class CommentV2Moniker extends OxmlLeafElement {
  static _Q = "pc2:cmMK";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class CommentReplyV2MonikerList extends OxmlCompositeElement {
  static _Q = "pc2:cmRplyMkLst";
  /** Returns CommentV2MonikerList. */
  get commentV2MonikerList() {
    return this._f(CommentV2MonikerList);
  }
  /** Returns CommentReplyV2Moniker. */
  get commentReplyV2Moniker() {
    return this._f(CommentReplyV2Moniker);
  }
}
class CommentV2MonikerList extends OxmlCompositeElement {
  static _Q = "pc2:cmMkLst";
  /** Returns PcSlideMonikerList. */
  get slideMonikerList() {
    return this._f(PcSlideMonikerList);
  }
  /** Returns CommentV2Moniker. */
  get commentV2Moniker() {
    return this._f(CommentV2Moniker);
  }
}
function initOfficePowerPointY2019MainCommandNamespace() {
  CommentReplyV2Moniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  CommentV2Moniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  CommentReplyV2MonikerList._C = {
    "pc2:cmMkLst": CommentV2MonikerList,
    "pc2:cmRplyMk": CommentReplyV2Moniker
  };
  CommentV2MonikerList._C = {
    "pc:sldMkLst": PcSlideMonikerList,
    "pc2:cmMK": CommentV2Moniker
  };
  return {
    prefix: "pc2",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2019/9/main/command"
  };
}
export {
  CommentReplyV2Moniker,
  CommentReplyV2MonikerList,
  CommentV2Moniker,
  CommentV2MonikerList,
  initOfficePowerPointY2019MainCommandNamespace
};
