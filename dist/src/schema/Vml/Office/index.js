import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { ExtensionHandlingBehaviorValuesArray } from "../../Vml";
import { StrokeLineStyleValuesArray } from "../../Vml";
import { StrokeJoinStyleValuesArray } from "../../Vml";
import { StrokeEndCapValuesArray } from "../../Vml";
import { FillTypeValuesArray } from "../../Vml";
import { ImageAspectValuesArray } from "../../Vml";
import { StrokeArrowValuesArray } from "../../Vml";
import { StrokeArrowWidthValuesArray } from "../../Vml";
import { StrokeArrowLengthValuesArray } from "../../Vml";
import { Fill as VFill } from "../../Vml";
import { ImageData as VImageData } from "../../Vml";
import { Stroke as VStroke } from "../../Vml";
import { TextBox as VTextBox } from "../../Vml";
import { Shadow as VShadow } from "../../Vml";
var AlignmentValues = /* @__PURE__ */ ((AlignmentValues2) => {
  AlignmentValues2["Top"] = "top";
  AlignmentValues2["Middle"] = "middle";
  AlignmentValues2["Bottom"] = "bottom";
  AlignmentValues2["Left"] = "left";
  AlignmentValues2["Center"] = "center";
  AlignmentValues2["Right"] = "right";
  return AlignmentValues2;
})(AlignmentValues || {});
const AlignmentValuesArray = [
  "top" /* Top */,
  "middle" /* Middle */,
  "bottom" /* Bottom */,
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */
];
var ScreenSizeValues = /* @__PURE__ */ ((ScreenSizeValues2) => {
  ScreenSizeValues2["Sz544x376"] = "544,376";
  ScreenSizeValues2["Sz640x480"] = "640,480";
  ScreenSizeValues2["Sz720x512"] = "720,512";
  ScreenSizeValues2["Sz800x600"] = "800,600";
  ScreenSizeValues2["Sz1024x768"] = "1024,768";
  ScreenSizeValues2["Sz1152x862"] = "1152,862";
  return ScreenSizeValues2;
})(ScreenSizeValues || {});
const ScreenSizeValuesArray = [
  "544,376" /* Sz544x376 */,
  "640,480" /* Sz640x480 */,
  "720,512" /* Sz720x512 */,
  "800,600" /* Sz800x600 */,
  "1024,768" /* Sz1024x768 */,
  "1152,862" /* Sz1152x862 */
];
var InsetMarginValues = /* @__PURE__ */ ((InsetMarginValues2) => {
  InsetMarginValues2["Auto"] = "auto";
  InsetMarginValues2["Custom"] = "custom";
  return InsetMarginValues2;
})(InsetMarginValues || {});
const InsetMarginValuesArray = [
  "auto" /* Auto */,
  "custom" /* Custom */
];
var ColorModeValues = /* @__PURE__ */ ((ColorModeValues2) => {
  ColorModeValues2["Auto"] = "auto";
  ColorModeValues2["Custom"] = "custom";
  return ColorModeValues2;
})(ColorModeValues || {});
const ColorModeValuesArray = [
  "auto" /* Auto */,
  "custom" /* Custom */
];
var ExtrusionValues = /* @__PURE__ */ ((ExtrusionValues2) => {
  ExtrusionValues2["Perspective"] = "perspective";
  ExtrusionValues2["Parallel"] = "parallel";
  return ExtrusionValues2;
})(ExtrusionValues || {});
const ExtrusionValuesArray = [
  "perspective" /* Perspective */,
  "parallel" /* Parallel */
];
var ExtrusionRenderValues = /* @__PURE__ */ ((ExtrusionRenderValues2) => {
  ExtrusionRenderValues2["Solid"] = "solid";
  ExtrusionRenderValues2["WireFrame"] = "wireFrame";
  ExtrusionRenderValues2["BoundingCube"] = "boundingCube";
  return ExtrusionRenderValues2;
})(ExtrusionRenderValues || {});
const ExtrusionRenderValuesArray = [
  "solid" /* Solid */,
  "wireFrame" /* WireFrame */,
  "boundingCube" /* BoundingCube */
];
var ExtrusionPlaneValues = /* @__PURE__ */ ((ExtrusionPlaneValues2) => {
  ExtrusionPlaneValues2["XY"] = "XY";
  ExtrusionPlaneValues2["ZX"] = "ZX";
  ExtrusionPlaneValues2["YZ"] = "YZ";
  return ExtrusionPlaneValues2;
})(ExtrusionPlaneValues || {});
const ExtrusionPlaneValuesArray = [
  "XY" /* XY */,
  "ZX" /* ZX */,
  "YZ" /* YZ */
];
var AngleValues = /* @__PURE__ */ ((AngleValues2) => {
  AngleValues2["Any"] = "any";
  AngleValues2["Degree30"] = "30";
  AngleValues2["Degree45"] = "45";
  AngleValues2["Degree60"] = "60";
  AngleValues2["Degree90"] = "90";
  AngleValues2["Auto"] = "auto";
  return AngleValues2;
})(AngleValues || {});
const AngleValuesArray = [
  "any" /* Any */,
  "30" /* Degree30 */,
  "45" /* Degree45 */,
  "60" /* Degree60 */,
  "90" /* Degree90 */,
  "auto" /* Auto */
];
var CalloutPlacementValues = /* @__PURE__ */ ((CalloutPlacementValues2) => {
  CalloutPlacementValues2["Top"] = "top";
  CalloutPlacementValues2["Center"] = "center";
  CalloutPlacementValues2["Bottom"] = "bottom";
  CalloutPlacementValues2["User"] = "user";
  return CalloutPlacementValues2;
})(CalloutPlacementValues || {});
const CalloutPlacementValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "bottom" /* Bottom */,
  "user" /* User */
];
var ConnectorValues = /* @__PURE__ */ ((ConnectorValues2) => {
  ConnectorValues2["None"] = "none";
  ConnectorValues2["Straight"] = "straight";
  ConnectorValues2["Elbow"] = "elbow";
  ConnectorValues2["Curved"] = "curved";
  return ConnectorValues2;
})(ConnectorValues || {});
const ConnectorValuesArray = [
  "none" /* None */,
  "straight" /* Straight */,
  "elbow" /* Elbow */,
  "curved" /* Curved */
];
var HorizontalRuleAlignmentValues = /* @__PURE__ */ ((HorizontalRuleAlignmentValues2) => {
  HorizontalRuleAlignmentValues2["Left"] = "left";
  HorizontalRuleAlignmentValues2["Right"] = "right";
  HorizontalRuleAlignmentValues2["Center"] = "center";
  return HorizontalRuleAlignmentValues2;
})(HorizontalRuleAlignmentValues || {});
const HorizontalRuleAlignmentValuesArray = [
  "left" /* Left */,
  "right" /* Right */,
  "center" /* Center */
];
var ConnectValues = /* @__PURE__ */ ((ConnectValues2) => {
  ConnectValues2["None"] = "none";
  ConnectValues2["Rectangle"] = "rect";
  ConnectValues2["Segments"] = "segments";
  ConnectValues2["Custom"] = "custom";
  return ConnectValues2;
})(ConnectValues || {});
const ConnectValuesArray = [
  "none" /* None */,
  "rect" /* Rectangle */,
  "segments" /* Segments */,
  "custom" /* Custom */
];
var OleLinkValues = /* @__PURE__ */ ((OleLinkValues2) => {
  OleLinkValues2["Picture"] = "Picture";
  OleLinkValues2["Bitmap"] = "Bitmap";
  OleLinkValues2["EnhancedMetaFile"] = "EnhancedMetaFile";
  return OleLinkValues2;
})(OleLinkValues || {});
const OleLinkValuesArray = [
  "Picture" /* Picture */,
  "Bitmap" /* Bitmap */,
  "EnhancedMetaFile" /* EnhancedMetaFile */
];
var OleValues = /* @__PURE__ */ ((OleValues2) => {
  OleValues2["Embed"] = "Embed";
  OleValues2["Link"] = "Link";
  return OleValues2;
})(OleValues || {});
const OleValuesArray = [
  "Embed" /* Embed */,
  "Link" /* Link */
];
var OleDrawAspectValues = /* @__PURE__ */ ((OleDrawAspectValues2) => {
  OleDrawAspectValues2["Content"] = "Content";
  OleDrawAspectValues2["Icon"] = "Icon";
  return OleDrawAspectValues2;
})(OleDrawAspectValues || {});
const OleDrawAspectValuesArray = [
  "Content" /* Content */,
  "Icon" /* Icon */
];
var OleUpdateModeValues = /* @__PURE__ */ ((OleUpdateModeValues2) => {
  OleUpdateModeValues2["Always"] = "Always";
  OleUpdateModeValues2["OnCall"] = "OnCall";
  return OleUpdateModeValues2;
})(OleUpdateModeValues || {});
const OleUpdateModeValuesArray = [
  "Always" /* Always */,
  "OnCall" /* OnCall */
];
var FillValues = /* @__PURE__ */ ((FillValues2) => {
  FillValues2["GradientCenter"] = "gradientCenter";
  FillValues2["Solid"] = "solid";
  FillValues2["Pattern"] = "pattern";
  FillValues2["Tile"] = "tile";
  FillValues2["Frame"] = "frame";
  FillValues2["GradientUnscaled"] = "gradientUnscaled";
  FillValues2["GradientRadial"] = "gradientRadial";
  FillValues2["Gradient"] = "gradient";
  FillValues2["Background"] = "background";
  return FillValues2;
})(FillValues || {});
const FillValuesArray = [
  "gradientCenter" /* GradientCenter */,
  "solid" /* Solid */,
  "pattern" /* Pattern */,
  "tile" /* Tile */,
  "frame" /* Frame */,
  "gradientUnscaled" /* GradientUnscaled */,
  "gradientRadial" /* GradientRadial */,
  "gradient" /* Gradient */,
  "background" /* Background */
];
var RuleValues = /* @__PURE__ */ ((RuleValues2) => {
  RuleValues2["Arc"] = "arc";
  RuleValues2["Callout"] = "callout";
  RuleValues2["Connector"] = "connector";
  return RuleValues2;
})(RuleValues || {});
const RuleValuesArray = [
  "arc" /* Arc */,
  "callout" /* Callout */,
  "connector" /* Connector */
];
var BlackAndWhiteModeValues = /* @__PURE__ */ ((BlackAndWhiteModeValues2) => {
  BlackAndWhiteModeValues2["Color"] = "color";
  BlackAndWhiteModeValues2["Auto"] = "auto";
  BlackAndWhiteModeValues2["GrayScale"] = "grayScale";
  BlackAndWhiteModeValues2["LightGrayScale"] = "lightGrayScale";
  BlackAndWhiteModeValues2["InverseGray"] = "inverseGray";
  BlackAndWhiteModeValues2["GrayOutline"] = "grayOutline";
  BlackAndWhiteModeValues2["HighContrast"] = "highContrast";
  BlackAndWhiteModeValues2["Black"] = "black";
  BlackAndWhiteModeValues2["White"] = "white";
  BlackAndWhiteModeValues2["Undrawn"] = "undrawn";
  BlackAndWhiteModeValues2["BlackTextAndLines"] = "blackTextAndLines";
  return BlackAndWhiteModeValues2;
})(BlackAndWhiteModeValues || {});
const BlackAndWhiteModeValuesArray = [
  "color" /* Color */,
  "auto" /* Auto */,
  "grayScale" /* GrayScale */,
  "lightGrayScale" /* LightGrayScale */,
  "inverseGray" /* InverseGray */,
  "grayOutline" /* GrayOutline */,
  "highContrast" /* HighContrast */,
  "black" /* Black */,
  "white" /* White */,
  "undrawn" /* Undrawn */,
  "blackTextAndLines" /* BlackTextAndLines */
];
class ColorMenu extends OxmlLeafElement {
  static _Q = "o:colormenu";
  static _A = ["v:ext", ":strokecolor", ":fillcolor", ":shadowcolor", ":extrusioncolor"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Default stroke color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Default fill color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Default shadow color. Serialized as `:shadowcolor` */
  get shadowColor() {
    return this._g(":shadowcolor");
  }
  set shadowColor(v) {
    this._s(":shadowcolor", v);
  }
  /** Default extrusion color. Serialized as `:extrusioncolor` */
  get extrusionColor() {
    return this._g(":extrusioncolor");
  }
  set extrusionColor(v) {
    this._s(":extrusioncolor", v);
  }
}
class ColorMostRecentlyUsed extends OxmlLeafElement {
  static _Q = "o:colormru";
  static _A = ["v:ext", ":colors"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Recent colors. Serialized as `:colors` */
  get colors() {
    return this._g(":colors");
  }
  set colors(v) {
    this._s(":colors", v);
  }
}
class Proxy extends OxmlLeafElement {
  static _Q = "o:proxy";
  static _A = [":start", ":end", ":idref", ":connectloc"];
  /** Start Point Connection Flag. Serialized as `:start` */
  get start() {
    return this._g(":start");
  }
  set start(v) {
    this._s(":start", v);
  }
  /** End Point Connection Flag. Serialized as `:end` */
  get end() {
    return this._g(":end");
  }
  set end(v) {
    this._s(":end", v);
  }
  /** Proxy Shape Reference. Serialized as `:idref` */
  get shapeReference() {
    return this._g(":idref");
  }
  set shapeReference(v) {
    this._s(":idref", v);
  }
  /** Connection Location. Serialized as `:connectloc` */
  get connectionLocation() {
    return this._g(":connectloc");
  }
  set connectionLocation(v) {
    this._s(":connectloc", v);
  }
}
class FieldCodes extends OxmlLeafTextElement {
  static _Q = "o:FieldCodes";
}
class LockedField extends OxmlLeafTextElement {
  static _Q = "o:LockedField";
}
class LinkType extends OxmlLeafTextElement {
  static _Q = "o:LinkType";
}
class Relation extends OxmlLeafElement {
  static _Q = "o:rel";
  static _A = ["v:ext", ":idsrc", ":iddest", ":idcntr"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Diagram Relationship Source Shape. Serialized as `:idsrc` */
  get sourceId() {
    return this._g(":idsrc");
  }
  set sourceId(v) {
    this._s(":idsrc", v);
  }
  /** Diagram Relationship Destination Shape. Serialized as `:iddest` */
  get destinationId() {
    return this._g(":iddest");
  }
  set destinationId(v) {
    this._s(":iddest", v);
  }
  /** Diagram Relationship Center Shape. Serialized as `:idcntr` */
  get centerShapeId() {
    return this._g(":idcntr");
  }
  set centerShapeId(v) {
    this._s(":idcntr", v);
  }
}
class RelationTable extends OxmlCompositeElement {
  static _Q = "o:relationtable";
  static _A = ["v:ext"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
}
class Rule extends OxmlCompositeElement {
  static _Q = "o:r";
  static _A = [":id", ":type", ":how", ":idref"];
  /** Rule ID. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Rule Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Alignment Rule Type. Serialized as `:how` */
  get how() {
    return this._g(":how");
  }
  set how(v) {
    this._s(":how", v);
  }
  /** Rule Shape Reference. Serialized as `:idref` */
  get shapeReference() {
    return this._g(":idref");
  }
  set shapeReference(v) {
    this._s(":idref", v);
  }
}
class Entry extends OxmlLeafElement {
  static _Q = "o:entry";
  static _A = [":new", ":old"];
  /** New Group ID. Serialized as `:new` */
  get new() {
    return this._g(":new");
  }
  set new(v) {
    this._s(":new", v);
  }
  /** Old Group ID. Serialized as `:old` */
  get old() {
    return this._g(":old");
  }
  set old(v) {
    this._s(":old", v);
  }
}
class Rules extends OxmlCompositeElement {
  static _Q = "o:rules";
  static _A = ["v:ext"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
}
class RegroupTable extends OxmlCompositeElement {
  static _Q = "o:regrouptable";
  static _A = ["v:ext"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
}
class ShapeIdMap extends OxmlLeafElement {
  static _Q = "o:idmap";
  static _A = ["v:ext", ":data"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Shape IDs. Serialized as `:data` */
  get data() {
    return this._g(":data");
  }
  set data(v) {
    this._s(":data", v);
  }
}
class FillExtendedProperties extends OxmlLeafElement {
  static _Q = "o:fill";
  static _A = ["v:ext", ":type"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Fill Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
}
class ClipPath extends OxmlLeafElement {
  static _Q = "o:clippath";
  static _A = ["o:v"];
  /** Path Definition. Serialized as `o:v` */
  get value() {
    return this._g("o:v");
  }
  set value(v) {
    this._s("o:v", v);
  }
}
class StrokeChildType extends OxmlLeafElement {
  static _A = ["v:ext", ":on", ":weight", ":color", ":color2", ":opacity", ":linestyle", ":miterlimit", ":joinstyle", ":endcap", ":dashstyle", ":insetpen", ":filltype", ":src", ":imageaspect", ":imagesize", ":imagealignshape", ":startarrow", ":startarrowwidth", ":startarrowlength", ":endarrow", ":endarrowwidth", ":endarrowlength", "o:href", "o:althref", "o:title", "o:forcedash"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Stroke Toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Stroke Weight. Serialized as `:weight` */
  get weight() {
    return this._g(":weight");
  }
  set weight(v) {
    this._s(":weight", v);
  }
  /** Stroke Color. Serialized as `:color` */
  get color() {
    return this._g(":color");
  }
  set color(v) {
    this._s(":color", v);
  }
  /** Stroke Alternate Pattern Color. Serialized as `:color2` */
  get color2() {
    return this._g(":color2");
  }
  set color2(v) {
    this._s(":color2", v);
  }
  /** Stroke Opacity. Serialized as `:opacity` */
  get opacity() {
    return this._g(":opacity");
  }
  set opacity(v) {
    this._s(":opacity", v);
  }
  /** Stroke Line Style. Serialized as `:linestyle` */
  get lineStyle() {
    return this._g(":linestyle");
  }
  set lineStyle(v) {
    this._s(":linestyle", v);
  }
  /** Miter Joint Limit. Serialized as `:miterlimit` */
  get miterLimit() {
    return this._g(":miterlimit");
  }
  set miterLimit(v) {
    this._s(":miterlimit", v);
  }
  /** Line End Join Style). Serialized as `:joinstyle` */
  get joinStyle() {
    return this._g(":joinstyle");
  }
  set joinStyle(v) {
    this._s(":joinstyle", v);
  }
  /** Line End Cap. Serialized as `:endcap` */
  get endCap() {
    return this._g(":endcap");
  }
  set endCap(v) {
    this._s(":endcap", v);
  }
  /** Stroke Dash Pattern. Serialized as `:dashstyle` */
  get dashStyle() {
    return this._g(":dashstyle");
  }
  set dashStyle(v) {
    this._s(":dashstyle", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Stroke Image Style. Serialized as `:filltype` */
  get fillType() {
    return this._g(":filltype");
  }
  set fillType(v) {
    this._s(":filltype", v);
  }
  /** Stroke Image Location. Serialized as `:src` */
  get source() {
    return this._g(":src");
  }
  set source(v) {
    this._s(":src", v);
  }
  /** Stroke Image Aspect Ratio. Serialized as `:imageaspect` */
  get imageAspect() {
    return this._g(":imageaspect");
  }
  set imageAspect(v) {
    this._s(":imageaspect", v);
  }
  /** Stroke Image Size. Serialized as `:imagesize` */
  get imageSize() {
    return this._g(":imagesize");
  }
  set imageSize(v) {
    this._s(":imagesize", v);
  }
  /** Stoke Image Alignment. Serialized as `:imagealignshape` */
  get imageAlignShape() {
    return this._g(":imagealignshape");
  }
  set imageAlignShape(v) {
    this._s(":imagealignshape", v);
  }
  /** Line Start Arrowhead. Serialized as `:startarrow` */
  get startArrow() {
    return this._g(":startarrow");
  }
  set startArrow(v) {
    this._s(":startarrow", v);
  }
  /** Line Start Arrowhead Width. Serialized as `:startarrowwidth` */
  get startArrowWidth() {
    return this._g(":startarrowwidth");
  }
  set startArrowWidth(v) {
    this._s(":startarrowwidth", v);
  }
  /** Line Start Arrowhead Length. Serialized as `:startarrowlength` */
  get startArrowLength() {
    return this._g(":startarrowlength");
  }
  set startArrowLength(v) {
    this._s(":startarrowlength", v);
  }
  /** Line End Arrowhead. Serialized as `:endarrow` */
  get endArrow() {
    return this._g(":endarrow");
  }
  set endArrow(v) {
    this._s(":endarrow", v);
  }
  /** Line End Arrowhead Width. Serialized as `:endarrowwidth` */
  get endArrowWidth() {
    return this._g(":endarrowwidth");
  }
  set endArrowWidth(v) {
    this._s(":endarrowwidth", v);
  }
  /** Line End Arrowhead Length. Serialized as `:endarrowlength` */
  get endArrowLength() {
    return this._g(":endarrowlength");
  }
  set endArrowLength(v) {
    this._s(":endarrowlength", v);
  }
  /** Original Image Reference. Serialized as `o:href` */
  get href() {
    return this._g("o:href");
  }
  set href(v) {
    this._s("o:href", v);
  }
  /** Alternate Image Reference. Serialized as `o:althref` */
  get alternateImageReference() {
    return this._g("o:althref");
  }
  set alternateImageReference(v) {
    this._s("o:althref", v);
  }
  /** Stroke Title. Serialized as `o:title` */
  get title() {
    return this._g("o:title");
  }
  set title(v) {
    this._s("o:title", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
}
class ColumnStroke extends StrokeChildType {
  static _Q = "o:column";
}
class BottomStroke extends StrokeChildType {
  static _Q = "o:bottom";
}
class RightStroke extends StrokeChildType {
  static _Q = "o:right";
}
class TopStroke extends StrokeChildType {
  static _Q = "o:top";
}
class LeftStroke extends StrokeChildType {
  static _Q = "o:left";
}
class Complex extends OxmlLeafElement {
  static _Q = "o:complex";
  static _A = ["v:ext"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
}
class OleObject extends OxmlCompositeElement {
  static _Q = "o:OLEObject";
  static _A = [":Type", ":ProgID", ":ShapeID", ":DrawAspect", ":ObjectID", "r:id", ":UpdateMode"];
  /** OLE Object Type. Serialized as `:Type` */
  get type() {
    return this._g(":Type");
  }
  set type(v) {
    this._s(":Type", v);
  }
  /** OLE Object Application. Serialized as `:ProgID` */
  get progId() {
    return this._g(":ProgID");
  }
  set progId(v) {
    this._s(":ProgID", v);
  }
  /** OLE Object Shape. Serialized as `:ShapeID` */
  get shapeId() {
    return this._g(":ShapeID");
  }
  set shapeId(v) {
    this._s(":ShapeID", v);
  }
  /** OLE Object Representation. Serialized as `:DrawAspect` */
  get drawAspect() {
    return this._g(":DrawAspect");
  }
  set drawAspect(v) {
    this._s(":DrawAspect", v);
  }
  /** OLE Object Unique ID. Serialized as `:ObjectID` */
  get objectId() {
    return this._g(":ObjectID");
  }
  set objectId(v) {
    this._s(":ObjectID", v);
  }
  /** Relationship. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** OLE Update Mode. Serialized as `:UpdateMode` */
  get updateMode() {
    return this._g(":UpdateMode");
  }
  set updateMode(v) {
    this._s(":UpdateMode", v);
  }
  /** Embedded Object Alternate Image Request. */
  get linkType() {
    return this._f(LinkType);
  }
  /** Embedded Object Cannot Be Refreshed. */
  get lockedField() {
    return this._f(LockedField);
  }
  /** WordprocessingML Field Switches. */
  get fieldCodes() {
    return this._f(FieldCodes);
  }
}
class Lock extends OxmlLeafElement {
  static _Q = "o:lock";
  static _A = ["v:ext", ":position", ":selection", ":grouping", ":ungrouping", ":rotation", ":cropping", ":verticies", ":adjusthandles", ":text", ":aspectratio", ":shapetype"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Position Lock. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
  /** Selection Lock. Serialized as `:selection` */
  get selection() {
    return this._g(":selection");
  }
  set selection(v) {
    this._s(":selection", v);
  }
  /** Grouping Lock. Serialized as `:grouping` */
  get grouping() {
    return this._g(":grouping");
  }
  set grouping(v) {
    this._s(":grouping", v);
  }
  /** Ungrouping Lock. Serialized as `:ungrouping` */
  get ungrouping() {
    return this._g(":ungrouping");
  }
  set ungrouping(v) {
    this._s(":ungrouping", v);
  }
  /** Rotation Lock. Serialized as `:rotation` */
  get rotation() {
    return this._g(":rotation");
  }
  set rotation(v) {
    this._s(":rotation", v);
  }
  /** Cropping Lock. Serialized as `:cropping` */
  get cropping() {
    return this._g(":cropping");
  }
  set cropping(v) {
    this._s(":cropping", v);
  }
  /** Vertices Lock. Serialized as `:verticies` */
  get verticies() {
    return this._g(":verticies");
  }
  set verticies(v) {
    this._s(":verticies", v);
  }
  /** Handles Lock. Serialized as `:adjusthandles` */
  get adjustHandles() {
    return this._g(":adjusthandles");
  }
  set adjustHandles(v) {
    this._s(":adjusthandles", v);
  }
  /** Text Lock. Serialized as `:text` */
  get textLock() {
    return this._g(":text");
  }
  set textLock(v) {
    this._s(":text", v);
  }
  /** Aspect Ratio Lock. Serialized as `:aspectratio` */
  get aspectRatio() {
    return this._g(":aspectratio");
  }
  set aspectRatio(v) {
    this._s(":aspectratio", v);
  }
  /** AutoShape Type Lock. Serialized as `:shapetype` */
  get shapeType() {
    return this._g(":shapetype");
  }
  set shapeType(v) {
    this._s(":shapetype", v);
  }
}
class Callout extends OxmlLeafElement {
  static _Q = "o:callout";
  static _A = ["v:ext", ":on", ":type", ":gap", ":angle", ":dropauto", ":drop", ":distance", ":lengthspecified", ":length", ":accentbar", ":textborder", ":minusx", ":minusy"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Callout toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Callout type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Callout gap. Serialized as `:gap` */
  get gap() {
    return this._g(":gap");
  }
  set gap(v) {
    this._s(":gap", v);
  }
  /** Callout angle. Serialized as `:angle` */
  get angle() {
    return this._g(":angle");
  }
  set angle(v) {
    this._s(":angle", v);
  }
  /** Callout automatic drop toggle. Serialized as `:dropauto` */
  get dropAuto() {
    return this._g(":dropauto");
  }
  set dropAuto(v) {
    this._s(":dropauto", v);
  }
  /** Callout drop position. Serialized as `:drop` */
  get drop() {
    return this._g(":drop");
  }
  set drop(v) {
    this._s(":drop", v);
  }
  /** Callout drop distance. Serialized as `:distance` */
  get distance() {
    return this._g(":distance");
  }
  set distance(v) {
    this._s(":distance", v);
  }
  /** Callout length toggle. Serialized as `:lengthspecified` */
  get lengthSpecified() {
    return this._g(":lengthspecified");
  }
  set lengthSpecified(v) {
    this._s(":lengthspecified", v);
  }
  /** Callout length. Serialized as `:length` */
  get length() {
    return this._g(":length");
  }
  set length(v) {
    this._s(":length", v);
  }
  /** Callout accent bar toggle. Serialized as `:accentbar` */
  get accentBar() {
    return this._g(":accentbar");
  }
  set accentBar(v) {
    this._s(":accentbar", v);
  }
  /** Callout text border toggle. Serialized as `:textborder` */
  get textBorder() {
    return this._g(":textborder");
  }
  set textBorder(v) {
    this._s(":textborder", v);
  }
  /** Callout flip x. Serialized as `:minusx` */
  get minusX() {
    return this._g(":minusx");
  }
  set minusX(v) {
    this._s(":minusx", v);
  }
  /** Callout flip y. Serialized as `:minusy` */
  get minusY() {
    return this._g(":minusy");
  }
  set minusY(v) {
    this._s(":minusy", v);
  }
}
class Extrusion extends OxmlLeafElement {
  static _Q = "o:extrusion";
  static _A = ["v:ext", ":on", ":type", ":render", ":viewpointorigin", ":viewpoint", ":skewangle", ":skewamt", ":foredepth", ":backdepth", ":orientation", ":orientationangle", ":lockrotationcenter", ":autorotationcenter", ":rotationcenter", ":rotationangle", ":color", ":shininess", ":specularity", ":diffusity", ":metal", ":edge", ":facet", ":lightface", ":brightness", ":lightposition", ":lightlevel", ":lightharsh", ":lightposition2", ":lightlevel2", ":lightharsh2"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Extrusion Toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Extrusion Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Extrusion Render Mode. Serialized as `:render` */
  get render() {
    return this._g(":render");
  }
  set render(v) {
    this._s(":render", v);
  }
  /** Extrusion Viewpoint Origin. Serialized as `:viewpointorigin` */
  get viewpointOrigin() {
    return this._g(":viewpointorigin");
  }
  set viewpointOrigin(v) {
    this._s(":viewpointorigin", v);
  }
  /** Extrusion Viewpoint. Serialized as `:viewpoint` */
  get viewpoint() {
    return this._g(":viewpoint");
  }
  set viewpoint(v) {
    this._s(":viewpoint", v);
  }
  /** Extrusion Skew Angle. Serialized as `:skewangle` */
  get skewAngle() {
    return this._g(":skewangle");
  }
  set skewAngle(v) {
    this._s(":skewangle", v);
  }
  /** Extrusion Skew. Serialized as `:skewamt` */
  get skewAmount() {
    return this._g(":skewamt");
  }
  set skewAmount(v) {
    this._s(":skewamt", v);
  }
  /** Forward Extrusion. Serialized as `:foredepth` */
  get forceDepth() {
    return this._g(":foredepth");
  }
  set forceDepth(v) {
    this._s(":foredepth", v);
  }
  /** Backward Extrusion Depth. Serialized as `:backdepth` */
  get backDepth() {
    return this._g(":backdepth");
  }
  set backDepth(v) {
    this._s(":backdepth", v);
  }
  /** Rotation Axis. Serialized as `:orientation` */
  get orientation() {
    return this._g(":orientation");
  }
  set orientation(v) {
    this._s(":orientation", v);
  }
  /** Rotation Around Axis. Serialized as `:orientationangle` */
  get orientationAngle() {
    return this._g(":orientationangle");
  }
  set orientationAngle(v) {
    this._s(":orientationangle", v);
  }
  /** Rotation Toggle. Serialized as `:lockrotationcenter` */
  get lockRotationCenter() {
    return this._g(":lockrotationcenter");
  }
  set lockRotationCenter(v) {
    this._s(":lockrotationcenter", v);
  }
  /** Center of Rotation Toggle. Serialized as `:autorotationcenter` */
  get autoRotationCenter() {
    return this._g(":autorotationcenter");
  }
  set autoRotationCenter(v) {
    this._s(":autorotationcenter", v);
  }
  /** Rotation Center. Serialized as `:rotationcenter` */
  get rotationCenter() {
    return this._g(":rotationcenter");
  }
  set rotationCenter(v) {
    this._s(":rotationcenter", v);
  }
  /** X-Y Rotation Angle. Serialized as `:rotationangle` */
  get rotationAngle() {
    return this._g(":rotationangle");
  }
  set rotationAngle(v) {
    this._s(":rotationangle", v);
  }
  /** Extrusion Color. Serialized as `:color` */
  get color() {
    return this._g(":color");
  }
  set color(v) {
    this._s(":color", v);
  }
  /** Shininess. Serialized as `:shininess` */
  get shininess() {
    return this._g(":shininess");
  }
  set shininess(v) {
    this._s(":shininess", v);
  }
  /** Specularity. Serialized as `:specularity` */
  get specularity() {
    return this._g(":specularity");
  }
  set specularity(v) {
    this._s(":specularity", v);
  }
  /** Diffuse Reflection. Serialized as `:diffusity` */
  get diffusity() {
    return this._g(":diffusity");
  }
  set diffusity(v) {
    this._s(":diffusity", v);
  }
  /** Metallic Surface Toggle. Serialized as `:metal` */
  get metal() {
    return this._g(":metal");
  }
  set metal(v) {
    this._s(":metal", v);
  }
  /** Simulated Bevel. Serialized as `:edge` */
  get edge() {
    return this._g(":edge");
  }
  set edge(v) {
    this._s(":edge", v);
  }
  /** Faceting Quality. Serialized as `:facet` */
  get facet() {
    return this._g(":facet");
  }
  set facet(v) {
    this._s(":facet", v);
  }
  /** Shape Face Lighting Toggle. Serialized as `:lightface` */
  get lightFace() {
    return this._g(":lightface");
  }
  set lightFace(v) {
    this._s(":lightface", v);
  }
  /** Brightness. Serialized as `:brightness` */
  get brightness() {
    return this._g(":brightness");
  }
  set brightness(v) {
    this._s(":brightness", v);
  }
  /** Primary Light Position. Serialized as `:lightposition` */
  get lightPosition() {
    return this._g(":lightposition");
  }
  set lightPosition(v) {
    this._s(":lightposition", v);
  }
  /** Primary Light Intensity. Serialized as `:lightlevel` */
  get lightLevel() {
    return this._g(":lightlevel");
  }
  set lightLevel(v) {
    this._s(":lightlevel", v);
  }
  /** Primary Light Harshness Toggle. Serialized as `:lightharsh` */
  get lightHarsh() {
    return this._g(":lightharsh");
  }
  set lightHarsh(v) {
    this._s(":lightharsh", v);
  }
  /** Secondary Light Position. Serialized as `:lightposition2` */
  get lightPosition2() {
    return this._g(":lightposition2");
  }
  set lightPosition2(v) {
    this._s(":lightposition2", v);
  }
  /** Secondary Light Intensity. Serialized as `:lightlevel2` */
  get lightLevel2() {
    return this._g(":lightlevel2");
  }
  set lightLevel2(v) {
    this._s(":lightlevel2", v);
  }
  /** Secondary Light Harshness Toggle. Serialized as `:lightharsh2` */
  get lightHarsh2() {
    return this._g(":lightharsh2");
  }
  set lightHarsh2(v) {
    this._s(":lightharsh2", v);
  }
}
class Skew extends OxmlLeafElement {
  static _Q = "o:skew";
  static _A = ["v:ext", ":id", ":on", ":offset", ":origin", ":matrix"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Skew ID. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Skew Toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Skew Offset. Serialized as `:offset` */
  get offset() {
    return this._g(":offset");
  }
  set offset(v) {
    this._s(":offset", v);
  }
  /** Skew Origin. Serialized as `:origin` */
  get origin() {
    return this._g(":origin");
  }
  set origin(v) {
    this._s(":origin", v);
  }
  /** Skew Perspective Matrix. Serialized as `:matrix` */
  get matrix() {
    return this._g(":matrix");
  }
  set matrix(v) {
    this._s(":matrix", v);
  }
}
class Diagram extends OxmlCompositeElement {
  static _Q = "o:diagram";
  static _A = ["v:ext", ":dgmstyle", ":autoformat", ":reverse", ":autolayout", ":dgmscalex", ":dgmscaley", ":dgmfontsize", ":constrainbounds", ":dgmbasetextscale"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Diagram Style Options. Serialized as `:dgmstyle` */
  get style() {
    return this._g(":dgmstyle");
  }
  set style(v) {
    this._s(":dgmstyle", v);
  }
  /** Diagram Automatic Format. Serialized as `:autoformat` */
  get autoFormat() {
    return this._g(":autoformat");
  }
  set autoFormat(v) {
    this._s(":autoformat", v);
  }
  /** Diagram Reverse Direction. Serialized as `:reverse` */
  get reverse() {
    return this._g(":reverse");
  }
  set reverse(v) {
    this._s(":reverse", v);
  }
  /** Diagram Automatic Layout. Serialized as `:autolayout` */
  get autoLayout() {
    return this._g(":autolayout");
  }
  set autoLayout(v) {
    this._s(":autolayout", v);
  }
  /** Diagram Layout X Scale. Serialized as `:dgmscalex` */
  get scaleX() {
    return this._g(":dgmscalex");
  }
  set scaleX(v) {
    this._s(":dgmscalex", v);
  }
  /** Diagram Layout Y Scale. Serialized as `:dgmscaley` */
  get scaleY() {
    return this._g(":dgmscaley");
  }
  set scaleY(v) {
    this._s(":dgmscaley", v);
  }
  /** Diagram Font Size. Serialized as `:dgmfontsize` */
  get fontSize() {
    return this._g(":dgmfontsize");
  }
  set fontSize(v) {
    this._s(":dgmfontsize", v);
  }
  /** Diagram Layout Extents. Serialized as `:constrainbounds` */
  get constrainBounds() {
    return this._g(":constrainbounds");
  }
  set constrainBounds(v) {
    this._s(":constrainbounds", v);
  }
  /** Diagram Base Font Size. Serialized as `:dgmbasetextscale` */
  get baseTextScale() {
    return this._g(":dgmbasetextscale");
  }
  set baseTextScale(v) {
    this._s(":dgmbasetextscale", v);
  }
  /** Diagram Relationship Table. */
  get relationTable() {
    return this._f(RelationTable);
  }
}
class Ink extends OxmlLeafElement {
  static _Q = "o:ink";
  static _A = [":i", ":annotation"];
  /** Ink Data. Serialized as `:i` */
  get inkData() {
    return this._g(":i");
  }
  set inkData(v) {
    this._s(":i", v);
  }
  /** Annotation Flag. Serialized as `:annotation` */
  get annotationFlag() {
    return this._g(":annotation");
  }
  set annotationFlag(v) {
    this._s(":annotation", v);
  }
}
class SignatureLine extends OxmlLeafElement {
  static _Q = "o:signatureline";
  static _A = ["v:ext", ":issignatureline", ":id", ":provid", ":signinginstructionsset", ":allowcomments", ":showsigndate", "o:suggestedsigner", "o:suggestedsigner2", "o:suggestedsigneremail", ":signinginstructions", ":addlxml", ":sigprovurl"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Signature Line Flag. Serialized as `:issignatureline` */
  get isSignatureLine() {
    return this._g(":issignatureline");
  }
  set isSignatureLine(v) {
    this._s(":issignatureline", v);
  }
  /** Unique ID. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Signature Provider ID. Serialized as `:provid` */
  get providerId() {
    return this._g(":provid");
  }
  set providerId(v) {
    this._s(":provid", v);
  }
  /** Use Signing Instructions Flag. Serialized as `:signinginstructionsset` */
  get signingInstructionsSet() {
    return this._g(":signinginstructionsset");
  }
  set signingInstructionsSet(v) {
    this._s(":signinginstructionsset", v);
  }
  /** User-specified Comments Flag. Serialized as `:allowcomments` */
  get allowComments() {
    return this._g(":allowcomments");
  }
  set allowComments(v) {
    this._s(":allowcomments", v);
  }
  /** Show Signed Date Flag. Serialized as `:showsigndate` */
  get showSignDate() {
    return this._g(":showsigndate");
  }
  set showSignDate(v) {
    this._s(":showsigndate", v);
  }
  /** Suggested Signer Line 1. Serialized as `o:suggestedsigner` */
  get suggestedSigner() {
    return this._g("o:suggestedsigner");
  }
  set suggestedSigner(v) {
    this._s("o:suggestedsigner", v);
  }
  /** Suggested Signer Line 2. Serialized as `o:suggestedsigner2` */
  get suggestedSigner2() {
    return this._g("o:suggestedsigner2");
  }
  set suggestedSigner2(v) {
    this._s("o:suggestedsigner2", v);
  }
  /** Suggested Signer E-mail Address. Serialized as `o:suggestedsigneremail` */
  get suggestedSignerEmail() {
    return this._g("o:suggestedsigneremail");
  }
  set suggestedSignerEmail(v) {
    this._s("o:suggestedsigneremail", v);
  }
  /** Instructions for Signing. Serialized as `:signinginstructions` */
  get signingInstructions() {
    return this._g(":signinginstructions");
  }
  set signingInstructions(v) {
    this._s(":signinginstructions", v);
  }
  /** Additional Signature Information. Serialized as `:addlxml` */
  get additionalXml() {
    return this._g(":addlxml");
  }
  set additionalXml(v) {
    this._s(":addlxml", v);
  }
  /** Signature Provider Download URL. Serialized as `:sigprovurl` */
  get signatureProviderUrl() {
    return this._g(":sigprovurl");
  }
  set signatureProviderUrl(v) {
    this._s(":sigprovurl", v);
  }
}
class ShapeLayout extends OxmlCompositeElement {
  static _Q = "o:shapelayout";
  static _A = ["v:ext"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Shape ID Map. */
  get shapeIdMap() {
    return this._f(ShapeIdMap);
  }
  /** Shape Grouping History. */
  get regroupTable() {
    return this._f(RegroupTable);
  }
  /** Rule Set. */
  get rules() {
    return this._f(Rules);
  }
}
class ShapeDefaults extends OxmlCompositeElement {
  static _Q = "o:shapedefaults";
  static _A = ["v:ext", ":spidmax", ":style", ":fill", ":fillcolor", ":stroke", ":strokecolor", "o:allowincell", "o:allowoverlap", "o:insetmode"];
  /** VML Extension Handling Behavior. Serialized as `v:ext` */
  get extension() {
    return this._g("v:ext");
  }
  set extension(v) {
    this._s("v:ext", v);
  }
  /** Shape ID Optional Storage. Serialized as `:spidmax` */
  get maxShapeId() {
    return this._g(":spidmax");
  }
  set maxShapeId(v) {
    this._s(":spidmax", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Shape Fill Toggle. Serialized as `:fill` */
  get beFilled() {
    return this._g(":fill");
  }
  set beFilled(v) {
    this._s(":fill", v);
  }
  /** Default Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroke` */
  get isStroke() {
    return this._g(":stroke");
  }
  set isStroke(v) {
    this._s(":stroke", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** allowoverlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** insetmode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Returns VFill. */
  get fill() {
    return this._f(VFill);
  }
  /** Returns VImageData. */
  get imageData() {
    return this._f(VImageData);
  }
  /** Returns VStroke. */
  get stroke() {
    return this._f(VStroke);
  }
  /** Returns VTextBox. */
  get textBox() {
    return this._f(VTextBox);
  }
  /** Returns VShadow. */
  get shadow() {
    return this._f(VShadow);
  }
  /** Returns Skew. */
  get skew() {
    return this._f(Skew);
  }
  /** Returns Extrusion. */
  get extrusion() {
    return this._f(Extrusion);
  }
  /** Callout. */
  get callout() {
    return this._f(Callout);
  }
  /** Shape Protections. */
  get lock() {
    return this._f(Lock);
  }
  /** Most Recently Used Colors. */
  get colorMostRecentlyUsed() {
    return this._f(ColorMostRecentlyUsed);
  }
  /** UI Default Colors. */
  get colorMenu() {
    return this._f(ColorMenu);
  }
}
function initVmlOfficeNamespace() {
  ColorMenu._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":shadowcolor": new OxmlAttr(":shadowcolor", OxmlType.StringValue),
    ":extrusioncolor": new OxmlAttr(":extrusioncolor", OxmlType.StringValue)
  };
  ColorMostRecentlyUsed._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":colors": new OxmlAttr(":colors", OxmlType.StringValue)
  };
  Proxy._D = {
    ":start": new OxmlAttr(":start", OxmlType.TrueFalseBlankValue),
    ":end": new OxmlAttr(":end", OxmlType.TrueFalseBlankValue),
    ":idref": new OxmlAttr(":idref", OxmlType.StringValue),
    ":connectloc": new OxmlAttr(":connectloc", OxmlType.Int32Value)
  };
  Relation._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":idsrc": new OxmlAttr(":idsrc", OxmlType.StringValue),
    ":iddest": new OxmlAttr(":iddest", OxmlType.StringValue),
    ":idcntr": new OxmlAttr(":idcntr", OxmlType.StringValue)
  };
  RelationTable._C = {
    "o:rel": Relation
  };
  RelationTable._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray)
  };
  Rule._C = {
    "o:proxy": Proxy
  };
  Rule._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, RuleValuesArray),
    ":how": new OxmlAttr(":how", OxmlType.EnumValue, AlignmentValuesArray),
    ":idref": new OxmlAttr(":idref", OxmlType.StringValue)
  };
  Entry._D = {
    ":new": new OxmlAttr(":new", OxmlType.Int32Value),
    ":old": new OxmlAttr(":old", OxmlType.Int32Value)
  };
  Rules._C = {
    "o:r": Rule
  };
  Rules._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray)
  };
  RegroupTable._C = {
    "o:entry": Entry
  };
  RegroupTable._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray)
  };
  ShapeIdMap._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":data": new OxmlAttr(":data", OxmlType.StringValue)
  };
  FillExtendedProperties._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, FillValuesArray)
  };
  ClipPath._D = {
    "o:v": new OxmlAttr("o:v", OxmlType.StringValue)
  };
  StrokeChildType._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":weight": new OxmlAttr(":weight", OxmlType.StringValue),
    ":color": new OxmlAttr(":color", OxmlType.StringValue),
    ":color2": new OxmlAttr(":color2", OxmlType.StringValue),
    ":opacity": new OxmlAttr(":opacity", OxmlType.StringValue),
    ":linestyle": new OxmlAttr(":linestyle", OxmlType.EnumValue, StrokeLineStyleValuesArray),
    ":miterlimit": new OxmlAttr(":miterlimit", OxmlType.DecimalValue),
    ":joinstyle": new OxmlAttr(":joinstyle", OxmlType.EnumValue, StrokeJoinStyleValuesArray),
    ":endcap": new OxmlAttr(":endcap", OxmlType.EnumValue, StrokeEndCapValuesArray),
    ":dashstyle": new OxmlAttr(":dashstyle", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    ":filltype": new OxmlAttr(":filltype", OxmlType.EnumValue, FillTypeValuesArray),
    ":src": new OxmlAttr(":src", OxmlType.StringValue),
    ":imageaspect": new OxmlAttr(":imageaspect", OxmlType.EnumValue, ImageAspectValuesArray),
    ":imagesize": new OxmlAttr(":imagesize", OxmlType.StringValue),
    ":imagealignshape": new OxmlAttr(":imagealignshape", OxmlType.TrueFalseValue),
    ":startarrow": new OxmlAttr(":startarrow", OxmlType.EnumValue, StrokeArrowValuesArray),
    ":startarrowwidth": new OxmlAttr(":startarrowwidth", OxmlType.EnumValue, StrokeArrowWidthValuesArray),
    ":startarrowlength": new OxmlAttr(":startarrowlength", OxmlType.EnumValue, StrokeArrowLengthValuesArray),
    ":endarrow": new OxmlAttr(":endarrow", OxmlType.EnumValue, StrokeArrowValuesArray),
    ":endarrowwidth": new OxmlAttr(":endarrowwidth", OxmlType.EnumValue, StrokeArrowWidthValuesArray),
    ":endarrowlength": new OxmlAttr(":endarrowlength", OxmlType.EnumValue, StrokeArrowLengthValuesArray),
    "o:href": new OxmlAttr("o:href", OxmlType.StringValue),
    "o:althref": new OxmlAttr("o:althref", OxmlType.StringValue),
    "o:title": new OxmlAttr("o:title", OxmlType.StringValue),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue)
  };
  Complex._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray)
  };
  OleObject._C = {
    "o:LinkType": LinkType,
    "o:LockedField": LockedField,
    "o:FieldCodes": FieldCodes
  };
  OleObject._D = {
    ":Type": new OxmlAttr(":Type", OxmlType.EnumValue, OleValuesArray),
    ":ProgID": new OxmlAttr(":ProgID", OxmlType.StringValue),
    ":ShapeID": new OxmlAttr(":ShapeID", OxmlType.StringValue),
    ":DrawAspect": new OxmlAttr(":DrawAspect", OxmlType.EnumValue, OleDrawAspectValuesArray),
    ":ObjectID": new OxmlAttr(":ObjectID", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":UpdateMode": new OxmlAttr(":UpdateMode", OxmlType.EnumValue, OleUpdateModeValuesArray)
  };
  Lock._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":position": new OxmlAttr(":position", OxmlType.TrueFalseValue),
    ":selection": new OxmlAttr(":selection", OxmlType.TrueFalseValue),
    ":grouping": new OxmlAttr(":grouping", OxmlType.TrueFalseValue),
    ":ungrouping": new OxmlAttr(":ungrouping", OxmlType.TrueFalseValue),
    ":rotation": new OxmlAttr(":rotation", OxmlType.TrueFalseValue),
    ":cropping": new OxmlAttr(":cropping", OxmlType.TrueFalseValue),
    ":verticies": new OxmlAttr(":verticies", OxmlType.TrueFalseValue),
    ":adjusthandles": new OxmlAttr(":adjusthandles", OxmlType.TrueFalseValue),
    ":text": new OxmlAttr(":text", OxmlType.TrueFalseValue),
    ":aspectratio": new OxmlAttr(":aspectratio", OxmlType.TrueFalseValue),
    ":shapetype": new OxmlAttr(":shapetype", OxmlType.TrueFalseValue)
  };
  Callout._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":gap": new OxmlAttr(":gap", OxmlType.StringValue),
    ":angle": new OxmlAttr(":angle", OxmlType.EnumValue, AngleValuesArray),
    ":dropauto": new OxmlAttr(":dropauto", OxmlType.TrueFalseValue),
    ":drop": new OxmlAttr(":drop", OxmlType.StringValue),
    ":distance": new OxmlAttr(":distance", OxmlType.StringValue),
    ":lengthspecified": new OxmlAttr(":lengthspecified", OxmlType.TrueFalseValue),
    ":length": new OxmlAttr(":length", OxmlType.StringValue),
    ":accentbar": new OxmlAttr(":accentbar", OxmlType.TrueFalseValue),
    ":textborder": new OxmlAttr(":textborder", OxmlType.TrueFalseValue),
    ":minusx": new OxmlAttr(":minusx", OxmlType.TrueFalseValue),
    ":minusy": new OxmlAttr(":minusy", OxmlType.TrueFalseValue)
  };
  Extrusion._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ExtrusionValuesArray),
    ":render": new OxmlAttr(":render", OxmlType.EnumValue, ExtrusionRenderValuesArray),
    ":viewpointorigin": new OxmlAttr(":viewpointorigin", OxmlType.StringValue),
    ":viewpoint": new OxmlAttr(":viewpoint", OxmlType.StringValue),
    ":skewangle": new OxmlAttr(":skewangle", OxmlType.SingleValue),
    ":skewamt": new OxmlAttr(":skewamt", OxmlType.StringValue),
    ":foredepth": new OxmlAttr(":foredepth", OxmlType.StringValue),
    ":backdepth": new OxmlAttr(":backdepth", OxmlType.StringValue),
    ":orientation": new OxmlAttr(":orientation", OxmlType.StringValue),
    ":orientationangle": new OxmlAttr(":orientationangle", OxmlType.SingleValue),
    ":lockrotationcenter": new OxmlAttr(":lockrotationcenter", OxmlType.TrueFalseValue),
    ":autorotationcenter": new OxmlAttr(":autorotationcenter", OxmlType.TrueFalseValue),
    ":rotationcenter": new OxmlAttr(":rotationcenter", OxmlType.StringValue),
    ":rotationangle": new OxmlAttr(":rotationangle", OxmlType.StringValue),
    ":color": new OxmlAttr(":color", OxmlType.StringValue),
    ":shininess": new OxmlAttr(":shininess", OxmlType.SingleValue),
    ":specularity": new OxmlAttr(":specularity", OxmlType.StringValue),
    ":diffusity": new OxmlAttr(":diffusity", OxmlType.StringValue),
    ":metal": new OxmlAttr(":metal", OxmlType.TrueFalseValue),
    ":edge": new OxmlAttr(":edge", OxmlType.StringValue),
    ":facet": new OxmlAttr(":facet", OxmlType.StringValue),
    ":lightface": new OxmlAttr(":lightface", OxmlType.TrueFalseValue),
    ":brightness": new OxmlAttr(":brightness", OxmlType.StringValue),
    ":lightposition": new OxmlAttr(":lightposition", OxmlType.StringValue),
    ":lightlevel": new OxmlAttr(":lightlevel", OxmlType.StringValue),
    ":lightharsh": new OxmlAttr(":lightharsh", OxmlType.TrueFalseValue),
    ":lightposition2": new OxmlAttr(":lightposition2", OxmlType.StringValue),
    ":lightlevel2": new OxmlAttr(":lightlevel2", OxmlType.StringValue),
    ":lightharsh2": new OxmlAttr(":lightharsh2", OxmlType.TrueFalseValue)
  };
  Skew._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":offset": new OxmlAttr(":offset", OxmlType.StringValue),
    ":origin": new OxmlAttr(":origin", OxmlType.StringValue),
    ":matrix": new OxmlAttr(":matrix", OxmlType.StringValue)
  };
  Diagram._C = {
    "o:relationtable": RelationTable
  };
  Diagram._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":dgmstyle": new OxmlAttr(":dgmstyle", OxmlType.IntegerValue),
    ":autoformat": new OxmlAttr(":autoformat", OxmlType.TrueFalseValue),
    ":reverse": new OxmlAttr(":reverse", OxmlType.TrueFalseValue),
    ":autolayout": new OxmlAttr(":autolayout", OxmlType.TrueFalseValue),
    ":dgmscalex": new OxmlAttr(":dgmscalex", OxmlType.IntegerValue),
    ":dgmscaley": new OxmlAttr(":dgmscaley", OxmlType.IntegerValue),
    ":dgmfontsize": new OxmlAttr(":dgmfontsize", OxmlType.IntegerValue),
    ":constrainbounds": new OxmlAttr(":constrainbounds", OxmlType.StringValue),
    ":dgmbasetextscale": new OxmlAttr(":dgmbasetextscale", OxmlType.IntegerValue)
  };
  Ink._D = {
    ":i": new OxmlAttr(":i", OxmlType.Base64BinaryValue),
    ":annotation": new OxmlAttr(":annotation", OxmlType.TrueFalseValue)
  };
  SignatureLine._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":issignatureline": new OxmlAttr(":issignatureline", OxmlType.TrueFalseValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":provid": new OxmlAttr(":provid", OxmlType.StringValue),
    ":signinginstructionsset": new OxmlAttr(":signinginstructionsset", OxmlType.TrueFalseValue),
    ":allowcomments": new OxmlAttr(":allowcomments", OxmlType.TrueFalseValue),
    ":showsigndate": new OxmlAttr(":showsigndate", OxmlType.TrueFalseValue),
    "o:suggestedsigner": new OxmlAttr("o:suggestedsigner", OxmlType.StringValue),
    "o:suggestedsigner2": new OxmlAttr("o:suggestedsigner2", OxmlType.StringValue),
    "o:suggestedsigneremail": new OxmlAttr("o:suggestedsigneremail", OxmlType.StringValue),
    ":signinginstructions": new OxmlAttr(":signinginstructions", OxmlType.StringValue),
    ":addlxml": new OxmlAttr(":addlxml", OxmlType.StringValue),
    ":sigprovurl": new OxmlAttr(":sigprovurl", OxmlType.StringValue)
  };
  ShapeLayout._C = {
    "o:idmap": ShapeIdMap,
    "o:regrouptable": RegroupTable,
    "o:rules": Rules
  };
  ShapeLayout._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray)
  };
  ShapeDefaults._C = {
    "v:fill": VFill,
    "v:imagedata": VImageData,
    "v:stroke": VStroke,
    "v:textbox": VTextBox,
    "v:shadow": VShadow,
    "o:skew": Skew,
    "o:extrusion": Extrusion,
    "o:callout": Callout,
    "o:lock": Lock,
    "o:colormru": ColorMostRecentlyUsed,
    "o:colormenu": ColorMenu
  };
  ShapeDefaults._D = {
    "v:ext": new OxmlAttr("v:ext", OxmlType.EnumValue, ExtensionHandlingBehaviorValuesArray),
    ":spidmax": new OxmlAttr(":spidmax", OxmlType.IntegerValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":fill": new OxmlAttr(":fill", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroke": new OxmlAttr(":stroke", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray)
  };
  return {
    prefix: "o",
    xmlns: "urn:schemas-microsoft-com:office:office"
  };
}
export {
  AlignmentValues,
  AlignmentValuesArray,
  AngleValues,
  AngleValuesArray,
  BlackAndWhiteModeValues,
  BlackAndWhiteModeValuesArray,
  BottomStroke,
  Callout,
  CalloutPlacementValues,
  CalloutPlacementValuesArray,
  ClipPath,
  ColorMenu,
  ColorModeValues,
  ColorModeValuesArray,
  ColorMostRecentlyUsed,
  ColumnStroke,
  Complex,
  ConnectValues,
  ConnectValuesArray,
  ConnectorValues,
  ConnectorValuesArray,
  Diagram,
  Entry,
  Extrusion,
  ExtrusionPlaneValues,
  ExtrusionPlaneValuesArray,
  ExtrusionRenderValues,
  ExtrusionRenderValuesArray,
  ExtrusionValues,
  ExtrusionValuesArray,
  FieldCodes,
  FillExtendedProperties,
  FillValues,
  FillValuesArray,
  HorizontalRuleAlignmentValues,
  HorizontalRuleAlignmentValuesArray,
  Ink,
  InsetMarginValues,
  InsetMarginValuesArray,
  LeftStroke,
  LinkType,
  Lock,
  LockedField,
  OleDrawAspectValues,
  OleDrawAspectValuesArray,
  OleLinkValues,
  OleLinkValuesArray,
  OleObject,
  OleUpdateModeValues,
  OleUpdateModeValuesArray,
  OleValues,
  OleValuesArray,
  Proxy,
  RegroupTable,
  Relation,
  RelationTable,
  RightStroke,
  Rule,
  RuleValues,
  RuleValuesArray,
  Rules,
  ScreenSizeValues,
  ScreenSizeValuesArray,
  ShapeDefaults,
  ShapeIdMap,
  ShapeLayout,
  SignatureLine,
  Skew,
  StrokeChildType,
  TopStroke,
  initVmlOfficeNamespace
};
