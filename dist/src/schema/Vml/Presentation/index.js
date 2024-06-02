import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class TextData extends OxmlLeafElement {
  static _Q = "pvml:textdata";
  static _A = [":id"];
  /** Text Reference. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class InkAnnotationFlag extends OxmlLeafElement {
  static _Q = "pvml:iscomment";
}
function initVmlPresentationNamespace() {
  TextData._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  return {
    prefix: "pvml",
    xmlns: "urn:schemas-microsoft-com:office:powerpoint"
  };
}
export {
  InkAnnotationFlag,
  TextData,
  initVmlPresentationNamespace
};
