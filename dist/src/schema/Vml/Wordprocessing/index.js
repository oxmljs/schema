import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var BorderValues = /* @__PURE__ */ ((BorderValues2) => {
  BorderValues2["None"] = "none";
  BorderValues2["Single"] = "single";
  BorderValues2["Thick"] = "thick";
  BorderValues2["Double"] = "double";
  BorderValues2["Hairline"] = "hairline";
  BorderValues2["Dot"] = "dot";
  BorderValues2["Dash"] = "dash";
  BorderValues2["DotDash"] = "dotDash";
  BorderValues2["DashDotDot"] = "dashDotDot";
  BorderValues2["Triple"] = "triple";
  BorderValues2["ThinThickSmall"] = "thinThickSmall";
  BorderValues2["ThickThinSmall"] = "thickThinSmall";
  BorderValues2["ThickBetweenThinSmall"] = "thickBetweenThinSmall";
  BorderValues2["ThinThick"] = "thinThick";
  BorderValues2["ThickThin"] = "thickThin";
  BorderValues2["ThickBetweenThin"] = "thickBetweenThin";
  BorderValues2["ThinThickLarge"] = "thinThickLarge";
  BorderValues2["ThickThinLarge"] = "thickThinLarge";
  BorderValues2["ThickBetweenThinLarge"] = "thickBetweenThinLarge";
  BorderValues2["Wave"] = "wave";
  BorderValues2["DoubleWave"] = "doubleWave";
  BorderValues2["DashedSmall"] = "dashedSmall";
  BorderValues2["DashDotStroked"] = "dashDotStroked";
  BorderValues2["ThreeDEmboss"] = "threeDEmboss";
  BorderValues2["ThreeDEngrave"] = "threeDEngrave";
  BorderValues2["HTMLOutset"] = "HTMLOutset";
  BorderValues2["HTMLInset"] = "HTMLInset";
  return BorderValues2;
})(BorderValues || {});
const BorderValuesArray = [
  "none" /* None */,
  "single" /* Single */,
  "thick" /* Thick */,
  "double" /* Double */,
  "hairline" /* Hairline */,
  "dot" /* Dot */,
  "dash" /* Dash */,
  "dotDash" /* DotDash */,
  "dashDotDot" /* DashDotDot */,
  "triple" /* Triple */,
  "thinThickSmall" /* ThinThickSmall */,
  "thickThinSmall" /* ThickThinSmall */,
  "thickBetweenThinSmall" /* ThickBetweenThinSmall */,
  "thinThick" /* ThinThick */,
  "thickThin" /* ThickThin */,
  "thickBetweenThin" /* ThickBetweenThin */,
  "thinThickLarge" /* ThinThickLarge */,
  "thickThinLarge" /* ThickThinLarge */,
  "thickBetweenThinLarge" /* ThickBetweenThinLarge */,
  "wave" /* Wave */,
  "doubleWave" /* DoubleWave */,
  "dashedSmall" /* DashedSmall */,
  "dashDotStroked" /* DashDotStroked */,
  "threeDEmboss" /* ThreeDEmboss */,
  "threeDEngrave" /* ThreeDEngrave */,
  "HTMLOutset" /* HTMLOutset */,
  "HTMLInset" /* HTMLInset */
];
var WrapValues = /* @__PURE__ */ ((WrapValues2) => {
  WrapValues2["TopAndBottom"] = "topAndBottom";
  WrapValues2["Square"] = "square";
  WrapValues2["None"] = "none";
  WrapValues2["Tight"] = "tight";
  WrapValues2["Through"] = "through";
  return WrapValues2;
})(WrapValues || {});
const WrapValuesArray = [
  "topAndBottom" /* TopAndBottom */,
  "square" /* Square */,
  "none" /* None */,
  "tight" /* Tight */,
  "through" /* Through */
];
var WrapSideValues = /* @__PURE__ */ ((WrapSideValues2) => {
  WrapSideValues2["Both"] = "both";
  WrapSideValues2["Left"] = "left";
  WrapSideValues2["Right"] = "right";
  WrapSideValues2["Largest"] = "largest";
  return WrapSideValues2;
})(WrapSideValues || {});
const WrapSideValuesArray = [
  "both" /* Both */,
  "left" /* Left */,
  "right" /* Right */,
  "largest" /* Largest */
];
var HorizontalAnchorValues = /* @__PURE__ */ ((HorizontalAnchorValues2) => {
  HorizontalAnchorValues2["Margin"] = "margin";
  HorizontalAnchorValues2["Page"] = "page";
  HorizontalAnchorValues2["Text"] = "text";
  return HorizontalAnchorValues2;
})(HorizontalAnchorValues || {});
const HorizontalAnchorValuesArray = [
  "margin" /* Margin */,
  "page" /* Page */,
  "text" /* Text */
];
var VerticalAnchorValues = /* @__PURE__ */ ((VerticalAnchorValues2) => {
  VerticalAnchorValues2["Margin"] = "margin";
  VerticalAnchorValues2["Page"] = "page";
  VerticalAnchorValues2["Text"] = "text";
  return VerticalAnchorValues2;
})(VerticalAnchorValues || {});
const VerticalAnchorValuesArray = [
  "margin" /* Margin */,
  "page" /* Page */,
  "text" /* Text */
];
class AnchorLock extends OxmlLeafElement {
  static _Q = "w10:anchorlock";
}
class TextWrap extends OxmlLeafElement {
  static _Q = "w10:wrap";
  static _A = [":type", ":side", ":anchorx", ":anchory"];
  /** Wrapping type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Wrapping side. Serialized as `:side` */
  get side() {
    return this._g(":side");
  }
  set side(v) {
    this._s(":side", v);
  }
  /** Horizontal Positioning Base. Serialized as `:anchorx` */
  get anchorX() {
    return this._g(":anchorx");
  }
  set anchorX(v) {
    this._s(":anchorx", v);
  }
  /** Vertical Positioning Base. Serialized as `:anchory` */
  get anchorY() {
    return this._g(":anchory");
  }
  set anchorY(v) {
    this._s(":anchory", v);
  }
}
class BorderType extends OxmlLeafElement {
  static _A = [":type", ":width", ":shadow"];
  /** Border Style. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Border Width. Serialized as `:width` */
  get width() {
    return this._g(":width");
  }
  set width(v) {
    this._s(":width", v);
  }
  /** Border shadow. Serialized as `:shadow` */
  get shadow() {
    return this._g(":shadow");
  }
  set shadow(v) {
    this._s(":shadow", v);
  }
}
class BottomBorder extends BorderType {
  static _Q = "w10:borderbottom";
}
class RightBorder extends BorderType {
  static _Q = "w10:borderright";
}
class LeftBorder extends BorderType {
  static _Q = "w10:borderleft";
}
class TopBorder extends BorderType {
  static _Q = "w10:bordertop";
}
function initVmlWordprocessingNamespace() {
  TextWrap._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, WrapValuesArray),
    ":side": new OxmlAttr(":side", OxmlType.EnumValue, WrapSideValuesArray),
    ":anchorx": new OxmlAttr(":anchorx", OxmlType.EnumValue, HorizontalAnchorValuesArray),
    ":anchory": new OxmlAttr(":anchory", OxmlType.EnumValue, VerticalAnchorValuesArray)
  };
  BorderType._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, BorderValuesArray),
    ":width": new OxmlAttr(":width", OxmlType.IntegerValue),
    ":shadow": new OxmlAttr(":shadow", OxmlType.TrueFalseValue)
  };
  return {
    prefix: "w10",
    xmlns: "urn:schemas-microsoft-com:office:word"
  };
}
export {
  AnchorLock,
  BorderType,
  BorderValues,
  BorderValuesArray,
  BottomBorder,
  HorizontalAnchorValues,
  HorizontalAnchorValuesArray,
  LeftBorder,
  RightBorder,
  TextWrap,
  TopBorder,
  VerticalAnchorValues,
  VerticalAnchorValuesArray,
  WrapSideValues,
  WrapSideValuesArray,
  WrapValues,
  WrapValuesArray,
  initVmlWordprocessingNamespace
};
