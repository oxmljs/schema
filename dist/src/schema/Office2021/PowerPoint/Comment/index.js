import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { SlideMonikerList as PcSlideMonikerList } from "../../../Office2016/Presentation/Command";
import { SlideLayoutMonikerList as PcSlideLayoutMonikerList } from "../../../Office2016/Presentation/Command";
import { MainMasterMonikerList as PcMainMasterMonikerList } from "../../../Office2016/Presentation/Command";
import { DeMkLstDrawingElementMonikerList as OacDeMkLstDrawingElementMonikerList } from "../../../Office2016/Drawing/Command";
import { TextBodyMonikerList as OacTextBodyMonikerList } from "../../../Office2016/Drawing/Command";
import { TextCharRangeMonikerList as OacTextCharRangeMonikerList } from "../../../Office2016/Drawing/Command";
import { TableCellMonikerList as OacTableCellMonikerList } from "../../../Office2016/Drawing/Command";
import { TableRowMonikerList as OacTableRowMonikerList } from "../../../Office2016/Drawing/Command";
import { TableColumnMonikerList as OacTableColumnMonikerList } from "../../../Office2016/Drawing/Command";
import { Extension as PExtension } from "../../../Presentation";
import { BodyProperties as ABodyProperties } from "../../../Drawing";
import { ListStyle as AListStyle } from "../../../Drawing";
import { Paragraph as AParagraph } from "../../../Drawing";
var CommentStatus = /* @__PURE__ */ ((CommentStatus2) => {
  CommentStatus2["Active"] = "active";
  CommentStatus2["Resolved"] = "resolved";
  CommentStatus2["Closed"] = "closed";
  return CommentStatus2;
})(CommentStatus || {});
const CommentStatusArray = [
  "active" /* Active */,
  "resolved" /* Resolved */,
  "closed" /* Closed */
];
class Comment extends OxmlCompositeElement {
  static _Q = "p188:cm";
  static _A = [":id", ":authorId", ":status", ":created", ":tags", ":likes", ":startDate", ":dueDate", ":assignedTo", ":complete", ":priority", ":title"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** authorId. Serialized as `:authorId` */
  get authorId() {
    return this._g(":authorId");
  }
  set authorId(v) {
    this._s(":authorId", v);
  }
  /** status. Serialized as `:status` */
  get status() {
    return this._g(":status");
  }
  set status(v) {
    this._s(":status", v);
  }
  /** created. Serialized as `:created` */
  get created() {
    return this._g(":created");
  }
  set created(v) {
    this._s(":created", v);
  }
  /** tags. Serialized as `:tags` */
  get tags() {
    return this._g(":tags");
  }
  set tags(v) {
    this._s(":tags", v);
  }
  /** likes. Serialized as `:likes` */
  get likes() {
    return this._g(":likes");
  }
  set likes(v) {
    this._s(":likes", v);
  }
  /** startDate. Serialized as `:startDate` */
  get startDate() {
    return this._g(":startDate");
  }
  set startDate(v) {
    this._s(":startDate", v);
  }
  /** dueDate. Serialized as `:dueDate` */
  get dueDate() {
    return this._g(":dueDate");
  }
  set dueDate(v) {
    this._s(":dueDate", v);
  }
  /** assignedTo. Serialized as `:assignedTo` */
  get assignedTo() {
    return this._g(":assignedTo");
  }
  set assignedTo(v) {
    this._s(":assignedTo", v);
  }
  /** complete. Serialized as `:complete` */
  get complete() {
    return this._g(":complete");
  }
  set complete(v) {
    this._s(":complete", v);
  }
  /** priority. Serialized as `:priority` */
  get priority() {
    return this._g(":priority");
  }
  set priority(v) {
    this._s(":priority", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
}
class CommentReplyList extends OxmlCompositeElement {
  static _Q = "p188:replyLst";
}
class Point2DType extends OxmlLeafElement {
  static _Q = "p188:pos";
  static _A = [":x", ":y"];
  /** X-Axis Coordinate. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y-Axis Coordinate. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
}
class CommentReply extends OxmlCompositeElement {
  static _Q = "p188:reply";
  static _A = [":id", ":authorId", ":status", ":created", ":tags", ":likes"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** authorId. Serialized as `:authorId` */
  get authorId() {
    return this._g(":authorId");
  }
  set authorId(v) {
    this._s(":authorId", v);
  }
  /** status. Serialized as `:status` */
  get status() {
    return this._g(":status");
  }
  set status(v) {
    this._s(":status", v);
  }
  /** created. Serialized as `:created` */
  get created() {
    return this._g(":created");
  }
  set created(v) {
    this._s(":created", v);
  }
  /** tags. Serialized as `:tags` */
  get tags() {
    return this._g(":tags");
  }
  set tags(v) {
    this._s(":tags", v);
  }
  /** likes. Serialized as `:likes` */
  get likes() {
    return this._g(":likes");
  }
  set likes(v) {
    this._s(":likes", v);
  }
  /** Returns TextBodyType. */
  get textBodyType() {
    return this._f(TextBodyType);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Author extends OxmlCompositeElement {
  static _Q = "p188:author";
  static _A = [":id", ":name", ":initials", ":userId", ":providerId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** initials. Serialized as `:initials` */
  get initials() {
    return this._g(":initials");
  }
  set initials(v) {
    this._s(":initials", v);
  }
  /** userId. Serialized as `:userId` */
  get userId() {
    return this._g(":userId");
  }
  set userId(v) {
    this._s(":userId", v);
  }
  /** providerId. Serialized as `:providerId` */
  get providerId() {
    return this._g(":providerId");
  }
  set providerId(v) {
    this._s(":providerId", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CommentRelationship extends OxmlLeafElement {
  static _Q = "p188:commentRel";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class CommentList extends OxmlPartRootElement {
  static _Q = "p188:cmLst";
}
class AuthorList extends OxmlPartRootElement {
  static _Q = "p188:authorLst";
}
class CommentUnknownAnchor extends OxmlLeafElement {
  static _Q = "p188:unknownAnchor";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p188:extLst";
}
class TextBodyType extends OxmlCompositeElement {
  static _Q = "p188:txBody";
  /** Body Properties. */
  get bodyProperties() {
    return this._f(ABodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(AListStyle);
  }
}
function initOffice2021PowerPointCommentNamespace() {
  Comment._C = {
    "pc:sldMkLst": PcSlideMonikerList,
    "pc:sldLayoutMkLst": PcSlideLayoutMonikerList,
    "pc:sldMasterMkLst": PcMainMasterMonikerList,
    "oac:deMkLst": OacDeMkLstDrawingElementMonikerList,
    "oac:txBodyMkLst": OacTextBodyMonikerList,
    "oac:txMkLst": OacTextCharRangeMonikerList,
    "oac:tcMkLst": OacTableCellMonikerList,
    "oac:trMkLst": OacTableRowMonikerList,
    "oac:gridColMkLst": OacTableColumnMonikerList,
    "p188:unknownAnchor": CommentUnknownAnchor,
    "p188:pos": Point2DType,
    "p188:replyLst": CommentReplyList,
    "p188:txBody": TextBodyType,
    "p188:extLst": ExtensionList
  };
  Comment._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":authorId": new OxmlAttr(":authorId", OxmlType.StringValue),
    ":status": new OxmlAttr(":status", OxmlType.EnumValue, CommentStatusArray),
    ":created": new OxmlAttr(":created", OxmlType.DateTimeValue),
    ":tags": new OxmlAttr(":tags", OxmlType.ListValue),
    ":likes": new OxmlAttr(":likes", OxmlType.ListValue),
    ":startDate": new OxmlAttr(":startDate", OxmlType.DateTimeValue),
    ":dueDate": new OxmlAttr(":dueDate", OxmlType.DateTimeValue),
    ":assignedTo": new OxmlAttr(":assignedTo", OxmlType.ListValue),
    ":complete": new OxmlAttr(":complete", OxmlType.Int32Value),
    ":priority": new OxmlAttr(":priority", OxmlType.UInt32Value),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  CommentReplyList._C = {
    "p188:reply": CommentReply
  };
  Point2DType._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  CommentReply._C = {
    "p188:txBody": TextBodyType,
    "p188:extLst": ExtensionList
  };
  CommentReply._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":authorId": new OxmlAttr(":authorId", OxmlType.StringValue),
    ":status": new OxmlAttr(":status", OxmlType.EnumValue, CommentStatusArray),
    ":created": new OxmlAttr(":created", OxmlType.DateTimeValue),
    ":tags": new OxmlAttr(":tags", OxmlType.ListValue),
    ":likes": new OxmlAttr(":likes", OxmlType.ListValue)
  };
  Author._C = {
    "p188:extLst": ExtensionList
  };
  Author._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":initials": new OxmlAttr(":initials", OxmlType.StringValue),
    ":userId": new OxmlAttr(":userId", OxmlType.StringValue),
    ":providerId": new OxmlAttr(":providerId", OxmlType.StringValue)
  };
  CommentRelationship._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  CommentList._C = {
    "p188:cm": Comment
  };
  AuthorList._C = {
    "p188:author": Author
  };
  ExtensionList._C = {
    "p:ext": PExtension
  };
  TextBodyType._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  return {
    prefix: "p188",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2018/8/main"
  };
}
export {
  Author,
  AuthorList,
  Comment,
  CommentList,
  CommentRelationship,
  CommentReply,
  CommentReplyList,
  CommentStatus,
  CommentStatusArray,
  CommentUnknownAnchor,
  ExtensionList,
  Point2DType,
  TextBodyType,
  initOffice2021PowerPointCommentNamespace
};
