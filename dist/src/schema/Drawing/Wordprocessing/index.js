import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { GraphicFrameLocks as AGraphicFrameLocks } from "../../Drawing";
import { ExtensionList as AExtensionList } from "../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { PercentagePositionVerticalOffset as Wp14PercentagePositionVerticalOffset } from "../../Office2010/Word/Drawing";
import { PercentagePositionHeightOffset as Wp14PercentagePositionHeightOffset } from "../../Office2010/Word/Drawing";
import { Graphic as AGraphic } from "../../Drawing";
import { RelativeWidth as Wp14RelativeWidth } from "../../Office2010/Word/Drawing";
import { RelativeHeight as Wp14RelativeHeight } from "../../Office2010/Word/Drawing";
var WrapTextValues = /* @__PURE__ */ ((WrapTextValues2) => {
  WrapTextValues2["BothSides"] = "bothSides";
  WrapTextValues2["Left"] = "left";
  WrapTextValues2["Right"] = "right";
  WrapTextValues2["Largest"] = "largest";
  return WrapTextValues2;
})(WrapTextValues || {});
const WrapTextValuesArray = [
  "bothSides" /* BothSides */,
  "left" /* Left */,
  "right" /* Right */,
  "largest" /* Largest */
];
var HorizontalAlignmentValues = /* @__PURE__ */ ((HorizontalAlignmentValues2) => {
  HorizontalAlignmentValues2["Left"] = "left";
  HorizontalAlignmentValues2["Right"] = "right";
  HorizontalAlignmentValues2["Center"] = "center";
  HorizontalAlignmentValues2["Inside"] = "inside";
  HorizontalAlignmentValues2["Outside"] = "outside";
  return HorizontalAlignmentValues2;
})(HorizontalAlignmentValues || {});
const HorizontalAlignmentValuesArray = [
  "left" /* Left */,
  "right" /* Right */,
  "center" /* Center */,
  "inside" /* Inside */,
  "outside" /* Outside */
];
var HorizontalRelativePositionValues = /* @__PURE__ */ ((HorizontalRelativePositionValues2) => {
  HorizontalRelativePositionValues2["Margin"] = "margin";
  HorizontalRelativePositionValues2["Page"] = "page";
  HorizontalRelativePositionValues2["Column"] = "column";
  HorizontalRelativePositionValues2["Character"] = "character";
  HorizontalRelativePositionValues2["LeftMargin"] = "leftMargin";
  HorizontalRelativePositionValues2["RightMargin"] = "rightMargin";
  HorizontalRelativePositionValues2["InsideMargin"] = "insideMargin";
  HorizontalRelativePositionValues2["OutsideMargin"] = "outsideMargin";
  return HorizontalRelativePositionValues2;
})(HorizontalRelativePositionValues || {});
const HorizontalRelativePositionValuesArray = [
  "margin" /* Margin */,
  "page" /* Page */,
  "column" /* Column */,
  "character" /* Character */,
  "leftMargin" /* LeftMargin */,
  "rightMargin" /* RightMargin */,
  "insideMargin" /* InsideMargin */,
  "outsideMargin" /* OutsideMargin */
];
var VerticalAlignmentValues = /* @__PURE__ */ ((VerticalAlignmentValues2) => {
  VerticalAlignmentValues2["Top"] = "top";
  VerticalAlignmentValues2["Bottom"] = "bottom";
  VerticalAlignmentValues2["Center"] = "center";
  VerticalAlignmentValues2["Inside"] = "inside";
  VerticalAlignmentValues2["Outside"] = "outside";
  return VerticalAlignmentValues2;
})(VerticalAlignmentValues || {});
const VerticalAlignmentValuesArray = [
  "top" /* Top */,
  "bottom" /* Bottom */,
  "center" /* Center */,
  "inside" /* Inside */,
  "outside" /* Outside */
];
var VerticalRelativePositionValues = /* @__PURE__ */ ((VerticalRelativePositionValues2) => {
  VerticalRelativePositionValues2["Margin"] = "margin";
  VerticalRelativePositionValues2["Page"] = "page";
  VerticalRelativePositionValues2["Paragraph"] = "paragraph";
  VerticalRelativePositionValues2["Line"] = "line";
  VerticalRelativePositionValues2["TopMargin"] = "topMargin";
  VerticalRelativePositionValues2["BottomMargin"] = "bottomMargin";
  VerticalRelativePositionValues2["InsideMargin"] = "insideMargin";
  VerticalRelativePositionValues2["OutsideMargin"] = "outsideMargin";
  return VerticalRelativePositionValues2;
})(VerticalRelativePositionValues || {});
const VerticalRelativePositionValuesArray = [
  "margin" /* Margin */,
  "page" /* Page */,
  "paragraph" /* Paragraph */,
  "line" /* Line */,
  "topMargin" /* TopMargin */,
  "bottomMargin" /* BottomMargin */,
  "insideMargin" /* InsideMargin */,
  "outsideMargin" /* OutsideMargin */
];
class HorizontalAlignment extends OxmlLeafTextElement {
  static _Q = "wp:align";
}
class PositionOffset extends OxmlLeafTextElement {
  static _Q = "wp:posOffset";
}
class VerticalAlignment extends OxmlLeafTextElement {
  static _Q = "wp:align";
}
class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement {
  static _Q = "wp:cNvGraphicFramePr";
  /** Graphic Frame Locks. */
  get graphicFrameLocks() {
    return this._f(AGraphicFrameLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class DocProperties extends OxmlCompositeElement {
  static _Q = "wp:docPr";
  static _A = [":id", ":name", ":descr", ":hidden", ":title"];
  /** Application defined unique identifier.. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Description of the drawing element.. Serialized as `:descr` */
  get description() {
    return this._g(":descr");
  }
  set description(v) {
    this._s(":descr", v);
  }
  /** Flag determining to show or hide this element.. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Hyperlink associated with clicking or selecting the element.. */
  get hyperlinkOnClick() {
    return this._f(AHyperlinkOnClick);
  }
  /** Hyperlink associated with hovering over the element.. */
  get hyperlinkOnHover() {
    return this._f(AHyperlinkOnHover);
  }
  /** Future extension. */
  get nonVisualDrawingPropertiesExtensionList() {
    return this._f(ANonVisualDrawingPropertiesExtensionList);
  }
}
class Extent extends OxmlLeafElement {
  static _Q = "wp:extent";
  static _A = [":cx", ":cy"];
  /** Extent Length. Serialized as `:cx` */
  get cx() {
    return this._g(":cx");
  }
  set cx(v) {
    this._s(":cx", v);
  }
  /** Extent Width. Serialized as `:cy` */
  get cy() {
    return this._g(":cy");
  }
  set cy(v) {
    this._s(":cy", v);
  }
}
class VerticalPosition extends OxmlCompositeElement {
  static _Q = "wp:positionV";
  static _A = [":relativeFrom"];
  /** Vertical Position Relative Base. Serialized as `:relativeFrom` */
  get relativeFrom() {
    return this._g(":relativeFrom");
  }
  set relativeFrom(v) {
    this._s(":relativeFrom", v);
  }
  /** Relative Vertical Alignment. */
  get verticalAlignment() {
    return this._f(VerticalAlignment);
  }
  /** Returns PositionOffset. */
  get positionOffset() {
    return this._f(PositionOffset);
  }
  /** Returns Wp14PercentagePositionVerticalOffset. */
  get percentagePositionVerticalOffset() {
    return this._f(Wp14PercentagePositionVerticalOffset);
  }
}
class HorizontalPosition extends OxmlCompositeElement {
  static _Q = "wp:positionH";
  static _A = [":relativeFrom"];
  /** Horizontal Position Relative Base. Serialized as `:relativeFrom` */
  get relativeFrom() {
    return this._g(":relativeFrom");
  }
  set relativeFrom(v) {
    this._s(":relativeFrom", v);
  }
  /** Relative Horizontal Alignment. */
  get horizontalAlignment() {
    return this._f(HorizontalAlignment);
  }
  /** Absolute Position Offset. */
  get positionOffset() {
    return this._f(PositionOffset);
  }
  /** Returns Wp14PercentagePositionHeightOffset. */
  get percentagePositionHeightOffset() {
    return this._f(Wp14PercentagePositionHeightOffset);
  }
}
class WrapPolygon extends OxmlCompositeElement {
  static _Q = "wp:wrapPolygon";
  static _A = [":edited"];
  /** Wrapping Points Modified. Serialized as `:edited` */
  get edited() {
    return this._g(":edited");
  }
  set edited(v) {
    this._s(":edited", v);
  }
  /** Wrapping Polygon Start. */
  get startPoint() {
    return this._f(StartPoint);
  }
}
class EffectExtent extends OxmlLeafElement {
  static _Q = "wp:effectExtent";
  static _A = [":l", ":t", ":r", ":b"];
  /** Additional Extent on Left Edge. Serialized as `:l` */
  get leftEdge() {
    return this._g(":l");
  }
  set leftEdge(v) {
    this._s(":l", v);
  }
  /** Additional Extent on Top Edge. Serialized as `:t` */
  get topEdge() {
    return this._g(":t");
  }
  set topEdge(v) {
    this._s(":t", v);
  }
  /** Additional Extent on Right Edge. Serialized as `:r` */
  get rightEdge() {
    return this._g(":r");
  }
  set rightEdge(v) {
    this._s(":r", v);
  }
  /** Additional Extent on Bottom Edge. Serialized as `:b` */
  get bottomEdge() {
    return this._g(":b");
  }
  set bottomEdge(v) {
    this._s(":b", v);
  }
}
class Point2DType extends OxmlLeafElement {
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
class SimplePosition extends Point2DType {
  static _Q = "wp:simplePos";
}
class LineTo extends Point2DType {
  static _Q = "wp:lineTo";
}
class StartPoint extends Point2DType {
  static _Q = "wp:start";
}
class Anchor extends OxmlCompositeElement {
  static _Q = "wp:anchor";
  static _A = [":distT", ":distB", ":distL", ":distR", ":simplePos", ":relativeHeight", ":behindDoc", ":locked", ":layoutInCell", ":hidden", ":allowOverlap", "wp14:editId", "wp14:anchorId"];
  /** Distance From Text on Top Edge. Serialized as `:distT` */
  get distanceFromTop() {
    return this._g(":distT");
  }
  set distanceFromTop(v) {
    this._s(":distT", v);
  }
  /** Distance From Text on Bottom Edge. Serialized as `:distB` */
  get distanceFromBottom() {
    return this._g(":distB");
  }
  set distanceFromBottom(v) {
    this._s(":distB", v);
  }
  /** Distance From Text on Left Edge. Serialized as `:distL` */
  get distanceFromLeft() {
    return this._g(":distL");
  }
  set distanceFromLeft(v) {
    this._s(":distL", v);
  }
  /** Distance From Text on Right Edge. Serialized as `:distR` */
  get distanceFromRight() {
    return this._g(":distR");
  }
  set distanceFromRight(v) {
    this._s(":distR", v);
  }
  /** Page Positioning. Serialized as `:simplePos` */
  get simplePos() {
    return this._g(":simplePos");
  }
  set simplePos(v) {
    this._s(":simplePos", v);
  }
  /** Relative Z-Ordering Position. Serialized as `:relativeHeight` */
  get relativeHeight() {
    return this._g(":relativeHeight");
  }
  set relativeHeight(v) {
    this._s(":relativeHeight", v);
  }
  /** Display Behind Document Text. Serialized as `:behindDoc` */
  get behindDoc() {
    return this._g(":behindDoc");
  }
  set behindDoc(v) {
    this._s(":behindDoc", v);
  }
  /** Lock Anchor. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** Layout In Table Cell. Serialized as `:layoutInCell` */
  get layoutInCell() {
    return this._g(":layoutInCell");
  }
  set layoutInCell(v) {
    this._s(":layoutInCell", v);
  }
  /** Hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Allow Objects to Overlap. Serialized as `:allowOverlap` */
  get allowOverlap() {
    return this._g(":allowOverlap");
  }
  set allowOverlap(v) {
    this._s(":allowOverlap", v);
  }
  /** editId. Serialized as `wp14:editId` */
  get editId() {
    return this._g("wp14:editId");
  }
  set editId(v) {
    this._s("wp14:editId", v);
  }
  /** anchorId. Serialized as `wp14:anchorId` */
  get anchorId() {
    return this._g("wp14:anchorId");
  }
  set anchorId(v) {
    this._s("wp14:anchorId", v);
  }
  /** Simple Positioning Coordinates. */
  get simplePosition() {
    return this._f(SimplePosition);
  }
  /** Horizontal Positioning. */
  get horizontalPosition() {
    return this._f(HorizontalPosition);
  }
  /** Vertical Positioning. */
  get verticalPosition() {
    return this._f(VerticalPosition);
  }
  /** Inline Drawing Object Extents. */
  get extent() {
    return this._f(Extent);
  }
  /** Returns EffectExtent. */
  get effectExtent() {
    return this._f(EffectExtent);
  }
}
class Inline extends OxmlCompositeElement {
  static _Q = "wp:inline";
  static _A = [":distT", ":distB", ":distL", ":distR", "wp14:anchorId", "wp14:editId"];
  /** Distance From Text on Top Edge. Serialized as `:distT` */
  get distanceFromTop() {
    return this._g(":distT");
  }
  set distanceFromTop(v) {
    this._s(":distT", v);
  }
  /** Distance From Text on Bottom Edge. Serialized as `:distB` */
  get distanceFromBottom() {
    return this._g(":distB");
  }
  set distanceFromBottom(v) {
    this._s(":distB", v);
  }
  /** Distance From Text on Left Edge. Serialized as `:distL` */
  get distanceFromLeft() {
    return this._g(":distL");
  }
  set distanceFromLeft(v) {
    this._s(":distL", v);
  }
  /** Distance From Text on Right Edge. Serialized as `:distR` */
  get distanceFromRight() {
    return this._g(":distR");
  }
  set distanceFromRight(v) {
    this._s(":distR", v);
  }
  /** anchorId. Serialized as `wp14:anchorId` */
  get anchorId() {
    return this._g("wp14:anchorId");
  }
  set anchorId(v) {
    this._s("wp14:anchorId", v);
  }
  /** editId. Serialized as `wp14:editId` */
  get editId() {
    return this._g("wp14:editId");
  }
  set editId(v) {
    this._s("wp14:editId", v);
  }
  /** Drawing Object Size. */
  get extent() {
    return this._f(Extent);
  }
  /** Inline Wrapping Extent. */
  get effectExtent() {
    return this._f(EffectExtent);
  }
  /** Drawing Object Non-Visual Properties. */
  get docProperties() {
    return this._f(DocProperties);
  }
  /** Common DrawingML Non-Visual Properties. */
  get nonVisualGraphicFrameDrawingProperties() {
    return this._f(NonVisualGraphicFrameDrawingProperties);
  }
  /** Returns AGraphic. */
  get graphic() {
    return this._f(AGraphic);
  }
}
class WrapTopBottom extends OxmlCompositeElement {
  static _Q = "wp:wrapTopAndBottom";
  static _A = [":distT", ":distB"];
  /** Distance From Text on Top Edge. Serialized as `:distT` */
  get distanceFromTop() {
    return this._g(":distT");
  }
  set distanceFromTop(v) {
    this._s(":distT", v);
  }
  /** Distance From Text on Bottom Edge. Serialized as `:distB` */
  get distanceFromBottom() {
    return this._g(":distB");
  }
  set distanceFromBottom(v) {
    this._s(":distB", v);
  }
  /** Wrapping Boundaries. */
  get effectExtent() {
    return this._f(EffectExtent);
  }
}
class WrapThrough extends OxmlCompositeElement {
  static _Q = "wp:wrapThrough";
  static _A = [":wrapText", ":distL", ":distR"];
  /** Text Wrapping Location. Serialized as `:wrapText` */
  get wrapText() {
    return this._g(":wrapText");
  }
  set wrapText(v) {
    this._s(":wrapText", v);
  }
  /** Distance From Text on Left Edge. Serialized as `:distL` */
  get distanceFromLeft() {
    return this._g(":distL");
  }
  set distanceFromLeft(v) {
    this._s(":distL", v);
  }
  /** Distance From Text on Right Edge. Serialized as `:distR` */
  get distanceFromRight() {
    return this._g(":distR");
  }
  set distanceFromRight(v) {
    this._s(":distR", v);
  }
  /** Wrapping Polygon. */
  get wrapPolygon() {
    return this._f(WrapPolygon);
  }
}
class WrapTight extends OxmlCompositeElement {
  static _Q = "wp:wrapTight";
  static _A = [":wrapText", ":distL", ":distR"];
  /** Text Wrapping Location. Serialized as `:wrapText` */
  get wrapText() {
    return this._g(":wrapText");
  }
  set wrapText(v) {
    this._s(":wrapText", v);
  }
  /** Distance From Test on Left Edge. Serialized as `:distL` */
  get distanceFromLeft() {
    return this._g(":distL");
  }
  set distanceFromLeft(v) {
    this._s(":distL", v);
  }
  /** Distance From Text on Right Edge. Serialized as `:distR` */
  get distanceFromRight() {
    return this._g(":distR");
  }
  set distanceFromRight(v) {
    this._s(":distR", v);
  }
  /** Tight Wrapping Extents Polygon. */
  get wrapPolygon() {
    return this._f(WrapPolygon);
  }
}
class WrapSquare extends OxmlCompositeElement {
  static _Q = "wp:wrapSquare";
  static _A = [":wrapText", ":distT", ":distB", ":distL", ":distR"];
  /** Text Wrapping Location. Serialized as `:wrapText` */
  get wrapText() {
    return this._g(":wrapText");
  }
  set wrapText(v) {
    this._s(":wrapText", v);
  }
  /** Distance From Text (Top). Serialized as `:distT` */
  get distanceFromTop() {
    return this._g(":distT");
  }
  set distanceFromTop(v) {
    this._s(":distT", v);
  }
  /** Distance From Text on Bottom Edge. Serialized as `:distB` */
  get distanceFromBottom() {
    return this._g(":distB");
  }
  set distanceFromBottom(v) {
    this._s(":distB", v);
  }
  /** Distance From Text on Left Edge. Serialized as `:distL` */
  get distanceFromLeft() {
    return this._g(":distL");
  }
  set distanceFromLeft(v) {
    this._s(":distL", v);
  }
  /** Distance From Text on Right Edge. Serialized as `:distR` */
  get distanceFromRight() {
    return this._g(":distR");
  }
  set distanceFromRight(v) {
    this._s(":distR", v);
  }
  /** Object Extents Including Effects. */
  get effectExtent() {
    return this._f(EffectExtent);
  }
}
class WrapNone extends OxmlLeafElement {
  static _Q = "wp:wrapNone";
}
function initDrawingWordprocessingNamespace() {
  NonVisualGraphicFrameDrawingProperties._C = {
    "a:graphicFrameLocks": AGraphicFrameLocks,
    "a:extLst": AExtensionList
  };
  DocProperties._C = {
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkHover": AHyperlinkOnHover,
    "a:extLst": ANonVisualDrawingPropertiesExtensionList
  };
  DocProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  Extent._D = {
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value)
  };
  VerticalPosition._C = {
    "wp:align": VerticalAlignment,
    "wp:posOffset": PositionOffset,
    "wp14:pctPosVOffset": Wp14PercentagePositionVerticalOffset
  };
  VerticalPosition._D = {
    ":relativeFrom": new OxmlAttr(":relativeFrom", OxmlType.EnumValue, VerticalRelativePositionValuesArray)
  };
  HorizontalPosition._C = {
    "wp:align": HorizontalAlignment,
    "wp:posOffset": PositionOffset,
    "wp14:pctPosHOffset": Wp14PercentagePositionHeightOffset
  };
  HorizontalPosition._D = {
    ":relativeFrom": new OxmlAttr(":relativeFrom", OxmlType.EnumValue, HorizontalRelativePositionValuesArray)
  };
  WrapPolygon._C = {
    "wp:start": StartPoint,
    "wp:lineTo": LineTo
  };
  WrapPolygon._D = {
    ":edited": new OxmlAttr(":edited", OxmlType.BooleanValue)
  };
  EffectExtent._D = {
    ":l": new OxmlAttr(":l", OxmlType.Int64Value),
    ":t": new OxmlAttr(":t", OxmlType.Int64Value),
    ":r": new OxmlAttr(":r", OxmlType.Int64Value),
    ":b": new OxmlAttr(":b", OxmlType.Int64Value)
  };
  Point2DType._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  Anchor._C = {
    "wp:simplePos": SimplePosition,
    "wp:positionH": HorizontalPosition,
    "wp:positionV": VerticalPosition,
    "wp:extent": Extent,
    "wp:effectExtent": EffectExtent,
    "wp:wrapNone": WrapNone,
    "wp:wrapSquare": WrapSquare,
    "wp:wrapTight": WrapTight,
    "wp:wrapThrough": WrapThrough,
    "wp:wrapTopAndBottom": WrapTopBottom,
    "wp:docPr": DocProperties,
    "wp:cNvGraphicFramePr": NonVisualGraphicFrameDrawingProperties,
    "a:graphic": AGraphic,
    "wp14:sizeRelH": Wp14RelativeWidth,
    "wp14:sizeRelV": Wp14RelativeHeight
  };
  Anchor._D = {
    ":distT": new OxmlAttr(":distT", OxmlType.UInt32Value),
    ":distB": new OxmlAttr(":distB", OxmlType.UInt32Value),
    ":distL": new OxmlAttr(":distL", OxmlType.UInt32Value),
    ":distR": new OxmlAttr(":distR", OxmlType.UInt32Value),
    ":simplePos": new OxmlAttr(":simplePos", OxmlType.BooleanValue),
    ":relativeHeight": new OxmlAttr(":relativeHeight", OxmlType.UInt32Value),
    ":behindDoc": new OxmlAttr(":behindDoc", OxmlType.BooleanValue),
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue),
    ":layoutInCell": new OxmlAttr(":layoutInCell", OxmlType.BooleanValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":allowOverlap": new OxmlAttr(":allowOverlap", OxmlType.BooleanValue),
    "wp14:editId": new OxmlAttr("wp14:editId", OxmlType.HexBinaryValue),
    "wp14:anchorId": new OxmlAttr("wp14:anchorId", OxmlType.HexBinaryValue)
  };
  Inline._C = {
    "wp:extent": Extent,
    "wp:effectExtent": EffectExtent,
    "wp:docPr": DocProperties,
    "wp:cNvGraphicFramePr": NonVisualGraphicFrameDrawingProperties,
    "a:graphic": AGraphic
  };
  Inline._D = {
    ":distT": new OxmlAttr(":distT", OxmlType.UInt32Value),
    ":distB": new OxmlAttr(":distB", OxmlType.UInt32Value),
    ":distL": new OxmlAttr(":distL", OxmlType.UInt32Value),
    ":distR": new OxmlAttr(":distR", OxmlType.UInt32Value),
    "wp14:anchorId": new OxmlAttr("wp14:anchorId", OxmlType.HexBinaryValue),
    "wp14:editId": new OxmlAttr("wp14:editId", OxmlType.HexBinaryValue)
  };
  WrapTopBottom._C = {
    "wp:effectExtent": EffectExtent
  };
  WrapTopBottom._D = {
    ":distT": new OxmlAttr(":distT", OxmlType.UInt32Value),
    ":distB": new OxmlAttr(":distB", OxmlType.UInt32Value)
  };
  WrapThrough._C = {
    "wp:wrapPolygon": WrapPolygon
  };
  WrapThrough._D = {
    ":wrapText": new OxmlAttr(":wrapText", OxmlType.EnumValue, WrapTextValuesArray),
    ":distL": new OxmlAttr(":distL", OxmlType.UInt32Value),
    ":distR": new OxmlAttr(":distR", OxmlType.UInt32Value)
  };
  WrapTight._C = {
    "wp:wrapPolygon": WrapPolygon
  };
  WrapTight._D = {
    ":wrapText": new OxmlAttr(":wrapText", OxmlType.EnumValue, WrapTextValuesArray),
    ":distL": new OxmlAttr(":distL", OxmlType.UInt32Value),
    ":distR": new OxmlAttr(":distR", OxmlType.UInt32Value)
  };
  WrapSquare._C = {
    "wp:effectExtent": EffectExtent
  };
  WrapSquare._D = {
    ":wrapText": new OxmlAttr(":wrapText", OxmlType.EnumValue, WrapTextValuesArray),
    ":distT": new OxmlAttr(":distT", OxmlType.UInt32Value),
    ":distB": new OxmlAttr(":distB", OxmlType.UInt32Value),
    ":distL": new OxmlAttr(":distL", OxmlType.UInt32Value),
    ":distR": new OxmlAttr(":distR", OxmlType.UInt32Value)
  };
  return {
    prefix: "wp",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  };
}
export {
  Anchor,
  DocProperties,
  EffectExtent,
  Extent,
  HorizontalAlignment,
  HorizontalAlignmentValues,
  HorizontalAlignmentValuesArray,
  HorizontalPosition,
  HorizontalRelativePositionValues,
  HorizontalRelativePositionValuesArray,
  Inline,
  LineTo,
  NonVisualGraphicFrameDrawingProperties,
  Point2DType,
  PositionOffset,
  SimplePosition,
  StartPoint,
  VerticalAlignment,
  VerticalAlignmentValues,
  VerticalAlignmentValuesArray,
  VerticalPosition,
  VerticalRelativePositionValues,
  VerticalRelativePositionValuesArray,
  WrapNone,
  WrapPolygon,
  WrapSquare,
  WrapTextValues,
  WrapTextValuesArray,
  WrapThrough,
  WrapTight,
  WrapTopBottom,
  initDrawingWordprocessingNamespace
};
