import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as XExtension } from "../../../Spreadsheet";
class Mention extends OxmlLeafElement {
  static _Q = "xltc:mention";
  static _A = [":mentionpersonId", ":mentionId", ":startIndex", ":length"];
  /** mentionpersonId. Serialized as `:mentionpersonId` */
  get mentionpersonId() {
    return this._g(":mentionpersonId");
  }
  set mentionpersonId(v) {
    this._s(":mentionpersonId", v);
  }
  /** mentionId. Serialized as `:mentionId` */
  get mentionId() {
    return this._g(":mentionId");
  }
  set mentionId(v) {
    this._s(":mentionId", v);
  }
  /** startIndex. Serialized as `:startIndex` */
  get startIndex() {
    return this._g(":startIndex");
  }
  set startIndex(v) {
    this._s(":startIndex", v);
  }
  /** length. Serialized as `:length` */
  get length() {
    return this._g(":length");
  }
  set length(v) {
    this._s(":length", v);
  }
}
class ThreadedCommentMentions extends OxmlCompositeElement {
  static _Q = "xltc:mentions";
}
class ThreadedCommentText extends OxmlLeafTextElement {
  static _Q = "xltc:text";
}
class ThreadedComment extends OxmlCompositeElement {
  static _Q = "xltc:threadedComment";
  static _A = [":ref", ":dT", ":personId", ":id", ":parentId", ":done"];
  /** ref. Serialized as `:ref` */
  get ref() {
    return this._g(":ref");
  }
  set ref(v) {
    this._s(":ref", v);
  }
  /** dT. Serialized as `:dT` */
  get dT() {
    return this._g(":dT");
  }
  set dT(v) {
    this._s(":dT", v);
  }
  /** personId. Serialized as `:personId` */
  get personId() {
    return this._g(":personId");
  }
  set personId(v) {
    this._s(":personId", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** parentId. Serialized as `:parentId` */
  get parentId() {
    return this._g(":parentId");
  }
  set parentId(v) {
    this._s(":parentId", v);
  }
  /** done. Serialized as `:done` */
  get done() {
    return this._g(":done");
  }
  set done(v) {
    this._s(":done", v);
  }
  /** Returns ThreadedCommentText. */
  get threadedCommentText() {
    return this._f(ThreadedCommentText);
  }
  /** Returns ThreadedCommentMentions. */
  get threadedCommentMentions() {
    return this._f(ThreadedCommentMentions);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xltc:extLst";
}
class Person extends OxmlCompositeElement {
  static _Q = "xltc:person";
  static _A = [":displayName", ":id", ":userId", ":providerId"];
  /** displayName. Serialized as `:displayName` */
  get displayName() {
    return this._g(":displayName");
  }
  set displayName(v) {
    this._s(":displayName", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
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
class ThreadedComments extends OxmlPartRootElement {
  static _Q = "xltc:ThreadedComments";
}
class PersonList extends OxmlPartRootElement {
  static _Q = "xltc:personList";
}
function initOffice2019ExcelThreadedCommentsNamespace() {
  Mention._D = {
    ":mentionpersonId": new OxmlAttr(":mentionpersonId", OxmlType.StringValue),
    ":mentionId": new OxmlAttr(":mentionId", OxmlType.StringValue),
    ":startIndex": new OxmlAttr(":startIndex", OxmlType.UInt32Value),
    ":length": new OxmlAttr(":length", OxmlType.UInt32Value)
  };
  ThreadedCommentMentions._C = {
    "xltc:mention": Mention
  };
  ThreadedComment._C = {
    "xltc:text": ThreadedCommentText,
    "xltc:mentions": ThreadedCommentMentions,
    "xltc:extLst": ExtensionList
  };
  ThreadedComment._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":dT": new OxmlAttr(":dT", OxmlType.DateTimeValue),
    ":personId": new OxmlAttr(":personId", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":parentId": new OxmlAttr(":parentId", OxmlType.StringValue),
    ":done": new OxmlAttr(":done", OxmlType.BooleanValue)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  Person._C = {
    "xltc:extLst": ExtensionList
  };
  Person._D = {
    ":displayName": new OxmlAttr(":displayName", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":userId": new OxmlAttr(":userId", OxmlType.StringValue),
    ":providerId": new OxmlAttr(":providerId", OxmlType.StringValue)
  };
  ThreadedComments._C = {
    "xltc:threadedComment": ThreadedComment,
    "xltc:extLst": ExtensionList
  };
  PersonList._C = {
    "xltc:person": Person,
    "xltc:extLst": ExtensionList
  };
  return {
    prefix: "xltc",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments"
  };
}
export {
  ExtensionList,
  Mention,
  Person,
  PersonList,
  ThreadedComment,
  ThreadedCommentMentions,
  ThreadedCommentText,
  ThreadedComments,
  initOffice2019ExcelThreadedCommentsNamespace
};
