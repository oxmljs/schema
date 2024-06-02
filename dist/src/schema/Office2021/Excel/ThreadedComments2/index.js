import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as XExtension } from "../../../Spreadsheet";
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xltc2:extLst";
}
class CommentHyperlink extends OxmlCompositeElement {
  static _Q = "xltc2:hyperlink";
  static _A = [":startIndex", ":length", ":url"];
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
  /** url. Serialized as `:url` */
  get url() {
    return this._g(":url");
  }
  set url(v) {
    this._s(":url", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class XsdunsignedInt extends OxmlLeafTextElement {
  static _Q = "xltc2:checksum";
}
function initOffice2021ExcelThreadedComments2Namespace() {
  ExtensionList._C = {
    "x:ext": XExtension
  };
  CommentHyperlink._C = {
    "xltc2:extLst": ExtensionList
  };
  CommentHyperlink._D = {
    ":startIndex": new OxmlAttr(":startIndex", OxmlType.UInt32Value),
    ":length": new OxmlAttr(":length", OxmlType.UInt32Value),
    ":url": new OxmlAttr(":url", OxmlType.StringValue)
  };
  return {
    prefix: "xltc2",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2020/threadedcomments2"
  };
}
export {
  CommentHyperlink,
  ExtensionList,
  XsdunsignedInt,
  initOffice2021ExcelThreadedComments2Namespace
};
