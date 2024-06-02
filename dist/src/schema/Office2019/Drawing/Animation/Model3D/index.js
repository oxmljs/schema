import { OxmlCompositeElement } from "../../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../../Drawing";
import { OfficeArtExtensionList as AanimOfficeArtExtensionList } from "../../../../Office2019/Drawing/Animation";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "a3danim:extLst";
}
class AnimationProperties extends OxmlCompositeElement {
  static _Q = "a3danim:animPr";
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
  /** Returns AanimOfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(AanimOfficeArtExtensionList);
  }
}
class PosterFrame extends OxmlLeafElement {
  static _Q = "a3danim:posterFrame";
  static _A = [":animId", ":frame"];
  /** animId. Serialized as `:animId` */
  get animId() {
    return this._g(":animId");
  }
  set animId(v) {
    this._s(":animId", v);
  }
  /** frame. Serialized as `:frame` */
  get frame() {
    return this._g(":frame");
  }
  set frame(v) {
    this._s(":frame", v);
  }
}
class EmbeddedAnimation extends OxmlCompositeElement {
  static _Q = "a3danim:embedAnim";
  static _A = [":animId"];
  /** animId. Serialized as `:animId` */
  get animId() {
    return this._g(":animId");
  }
  set animId(v) {
    this._s(":animId", v);
  }
  /** Returns AnimationProperties. */
  get animationProperties() {
    return this._f(AnimationProperties);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2019DrawingAnimationModel3DNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  AnimationProperties._C = {
    "aanim:extLst": AanimOfficeArtExtensionList
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
  PosterFrame._D = {
    ":animId": new OxmlAttr(":animId", OxmlType.UInt32Value),
    ":frame": new OxmlAttr(":frame", OxmlType.Int32Value)
  };
  EmbeddedAnimation._C = {
    "a3danim:animPr": AnimationProperties,
    "a3danim:extLst": OfficeArtExtensionList
  };
  EmbeddedAnimation._D = {
    ":animId": new OxmlAttr(":animId", OxmlType.UInt32Value)
  };
  return {
    prefix: "a3danim",
    xmlns: "http://schemas.microsoft.com/office/drawing/2018/animation/model3d"
  };
}
export {
  AnimationProperties,
  EmbeddedAnimation,
  OfficeArtExtensionList,
  PosterFrame,
  initOffice2019DrawingAnimationModel3DNamespace
};
