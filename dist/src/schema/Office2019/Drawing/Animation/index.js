import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../Drawing";
var Indefinite = /* @__PURE__ */ ((_Indefinite) => {
  _Indefinite["Indefinite"] = "indefinite";
  return _Indefinite;
})(Indefinite || {});
const IndefiniteArray = [
  "indefinite" /* Indefinite */
];
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "aanim:extLst";
}
class AnimationProperties extends OxmlCompositeElement {
  static _Q = "aanim:animPr";
  static _A = [":name", ":length", ":count", ":auto", ":offset", ":st", ":end"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** length. Serialized as `:length` */
  get length() {
    return this._g(":length");
  }
  set length(v) {
    this._s(":length", v);
  }
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** auto. Serialized as `:auto` */
  get auto() {
    return this._g(":auto");
  }
  set auto(v) {
    this._s(":auto", v);
  }
  /** offset. Serialized as `:offset` */
  get offset() {
    return this._g(":offset");
  }
  set offset(v) {
    this._s(":offset", v);
  }
  /** st. Serialized as `:st` */
  get st() {
    return this._g(":st");
  }
  set st(v) {
    this._s(":st", v);
  }
  /** end. Serialized as `:end` */
  get end() {
    return this._g(":end");
  }
  set end(v) {
    this._s(":end", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2019DrawingAnimationNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  AnimationProperties._C = {
    "aanim:extLst": OfficeArtExtensionList
  };
  AnimationProperties._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":length": new OxmlAttr(":length", OxmlType.StringValue),
    ":count": new OxmlAttr(":count", OxmlType.StringValue),
    ":auto": new OxmlAttr(":auto", OxmlType.BooleanValue),
    ":offset": new OxmlAttr(":offset", OxmlType.StringValue),
    ":st": new OxmlAttr(":st", OxmlType.StringValue),
    ":end": new OxmlAttr(":end", OxmlType.StringValue)
  };
  return {
    prefix: "aanim",
    xmlns: "http://schemas.microsoft.com/office/drawing/2018/animation"
  };
}
export {
  AnimationProperties,
  Indefinite,
  IndefiniteArray,
  OfficeArtExtensionList,
  initOffice2019DrawingAnimationNamespace
};
