import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
var SizeRelativeHorizontallyValues = /* @__PURE__ */ ((SizeRelativeHorizontallyValues2) => {
  SizeRelativeHorizontallyValues2["Margin"] = "margin";
  SizeRelativeHorizontallyValues2["Page"] = "page";
  SizeRelativeHorizontallyValues2["LeftMargin"] = "leftMargin";
  SizeRelativeHorizontallyValues2["RightMargin"] = "rightMargin";
  SizeRelativeHorizontallyValues2["InsideMargin"] = "insideMargin";
  SizeRelativeHorizontallyValues2["OutsideMargin"] = "outsideMargin";
  return SizeRelativeHorizontallyValues2;
})(SizeRelativeHorizontallyValues || {});
const SizeRelativeHorizontallyValuesArray = [
  "margin" /* Margin */,
  "page" /* Page */,
  "leftMargin" /* LeftMargin */,
  "rightMargin" /* RightMargin */,
  "insideMargin" /* InsideMargin */,
  "outsideMargin" /* OutsideMargin */
];
var SizeRelativeVerticallyValues = /* @__PURE__ */ ((SizeRelativeVerticallyValues2) => {
  SizeRelativeVerticallyValues2["Margin"] = "margin";
  SizeRelativeVerticallyValues2["Page"] = "page";
  SizeRelativeVerticallyValues2["TopMargin"] = "topMargin";
  SizeRelativeVerticallyValues2["BottomMargin"] = "bottomMargin";
  SizeRelativeVerticallyValues2["InsideMargin"] = "insideMargin";
  SizeRelativeVerticallyValues2["OutsideMargin"] = "outsideMargin";
  return SizeRelativeVerticallyValues2;
})(SizeRelativeVerticallyValues || {});
const SizeRelativeVerticallyValuesArray = [
  "margin" /* Margin */,
  "page" /* Page */,
  "topMargin" /* TopMargin */,
  "bottomMargin" /* BottomMargin */,
  "insideMargin" /* InsideMargin */,
  "outsideMargin" /* OutsideMargin */
];
class PercentageHeight extends OxmlLeafTextElement {
  static _Q = "wp14:pctHeight";
}
class PercentageWidth extends OxmlLeafTextElement {
  static _Q = "wp14:pctWidth";
}
class RelativeHeight extends OxmlCompositeElement {
  static _Q = "wp14:sizeRelV";
  static _A = [":relativeFrom"];
  /** relativeFrom. Serialized as `:relativeFrom` */
  get relativeFrom() {
    return this._g(":relativeFrom");
  }
  set relativeFrom(v) {
    this._s(":relativeFrom", v);
  }
  /** Returns PercentageHeight. */
  get percentageHeight() {
    return this._f(PercentageHeight);
  }
}
class RelativeWidth extends OxmlCompositeElement {
  static _Q = "wp14:sizeRelH";
  static _A = [":relativeFrom"];
  /** relativeFrom. Serialized as `:relativeFrom` */
  get objectId() {
    return this._g(":relativeFrom");
  }
  set objectId(v) {
    this._s(":relativeFrom", v);
  }
  /** Returns PercentageWidth. */
  get percentageWidth() {
    return this._f(PercentageWidth);
  }
}
class PercentagePositionVerticalOffset extends OxmlLeafTextElement {
  static _Q = "wp14:pctPosVOffset";
}
class PercentagePositionHeightOffset extends OxmlLeafTextElement {
  static _Q = "wp14:pctPosHOffset";
}
function initOffice2010WordDrawingNamespace() {
  RelativeHeight._C = {
    "wp14:pctHeight": PercentageHeight
  };
  RelativeHeight._D = {
    ":relativeFrom": new OxmlAttr(":relativeFrom", OxmlType.EnumValue, SizeRelativeVerticallyValuesArray)
  };
  RelativeWidth._C = {
    "wp14:pctWidth": PercentageWidth
  };
  RelativeWidth._D = {
    ":relativeFrom": new OxmlAttr(":relativeFrom", OxmlType.EnumValue, SizeRelativeHorizontallyValuesArray)
  };
  return {
    prefix: "wp14",
    xmlns: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
  };
}
export {
  PercentageHeight,
  PercentagePositionHeightOffset,
  PercentagePositionVerticalOffset,
  PercentageWidth,
  RelativeHeight,
  RelativeWidth,
  SizeRelativeHorizontallyValues,
  SizeRelativeHorizontallyValuesArray,
  SizeRelativeVerticallyValues,
  SizeRelativeVerticallyValuesArray,
  initOffice2010WordDrawingNamespace
};
