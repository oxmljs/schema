import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class WebVideoProperty extends OxmlLeafElement {
  static _Q = "wp15:webVideoPr";
  static _A = [":embeddedHtml", ":h", ":w"];
  /** embeddedHtml. Serialized as `:embeddedHtml` */
  get embeddedHtml() {
    return this._g(":embeddedHtml");
  }
  set embeddedHtml(v) {
    this._s(":embeddedHtml", v);
  }
  /** h. Serialized as `:h` */
  get height() {
    return this._g(":h");
  }
  set height(v) {
    this._s(":h", v);
  }
  /** w. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
}
function initOffice2013WordDrawingNamespace() {
  WebVideoProperty._D = {
    ":embeddedHtml": new OxmlAttr(":embeddedHtml", OxmlType.StringValue),
    ":h": new OxmlAttr(":h", OxmlType.UInt32Value),
    ":w": new OxmlAttr(":w", OxmlType.UInt32Value)
  };
  return {
    prefix: "wp15",
    xmlns: "http://schemas.microsoft.com/office/word/2012/wordprocessingDrawing"
  };
}
export {
  WebVideoProperty,
  initOffice2013WordDrawingNamespace
};
