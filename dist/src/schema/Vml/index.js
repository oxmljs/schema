import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { HorizontalRuleAlignmentValuesArray } from "../Vml/Office";
import { InsetMarginValuesArray } from "../Vml/Office";
import { ConnectorValuesArray } from "../Vml/Office";
import { BlackAndWhiteModeValuesArray } from "../Vml/Office";
import { ScreenSizeValuesArray } from "../Vml/Office";
import { ConnectValuesArray } from "../Vml/Office";
import { Skew as OSkew } from "../Vml/Office";
import { Extrusion as OExtrusion } from "../Vml/Office";
import { Callout as OCallout } from "../Vml/Office";
import { Lock as OLock } from "../Vml/Office";
import { ClipPath as OClipPath } from "../Vml/Office";
import { SignatureLine as OSignatureLine } from "../Vml/Office";
import { TextWrap as W10TextWrap } from "../Vml/Wordprocessing";
import { AnchorLock as W10AnchorLock } from "../Vml/Wordprocessing";
import { TopBorder as W10TopBorder } from "../Vml/Wordprocessing";
import { BottomBorder as W10BottomBorder } from "../Vml/Wordprocessing";
import { LeftBorder as W10LeftBorder } from "../Vml/Wordprocessing";
import { RightBorder as W10RightBorder } from "../Vml/Wordprocessing";
import { ClientData as XvmlClientData } from "../Vml/Spreadsheet";
import { TextData as PvmlTextData } from "../Vml/Presentation";
import { Ink as OInk } from "../Vml/Office";
import { Diagram as ODiagram } from "../Vml/Office";
import { Complex as OComplex } from "../Vml/Office";
import { InkAnnotationFlag as PvmlInkAnnotationFlag } from "../Vml/Presentation";
import { TextBoxContent as WTextBoxContent } from "../Wordprocessing";
import { LeftStroke as OLeftStroke } from "../Vml/Office";
import { TopStroke as OTopStroke } from "../Vml/Office";
import { RightStroke as ORightStroke } from "../Vml/Office";
import { BottomStroke as OBottomStroke } from "../Vml/Office";
import { ColumnStroke as OColumnStroke } from "../Vml/Office";
import { FillExtendedProperties as OFillExtendedProperties } from "../Vml/Office";
var ExtensionHandlingBehaviorValues = /* @__PURE__ */ ((ExtensionHandlingBehaviorValues2) => {
  ExtensionHandlingBehaviorValues2["View"] = "view";
  ExtensionHandlingBehaviorValues2["Edit"] = "edit";
  ExtensionHandlingBehaviorValues2["BackwardCompatible"] = "backwardCompatible";
  return ExtensionHandlingBehaviorValues2;
})(ExtensionHandlingBehaviorValues || {});
const ExtensionHandlingBehaviorValuesArray = [
  "view" /* View */,
  "edit" /* Edit */,
  "backwardCompatible" /* BackwardCompatible */
];
var FillTypeValues = /* @__PURE__ */ ((FillTypeValues2) => {
  FillTypeValues2["Solid"] = "solid";
  FillTypeValues2["Gradient"] = "gradient";
  FillTypeValues2["GradientRadial"] = "gradientRadial";
  FillTypeValues2["Tile"] = "tile";
  FillTypeValues2["Pattern"] = "pattern";
  FillTypeValues2["Frame"] = "frame";
  return FillTypeValues2;
})(FillTypeValues || {});
const FillTypeValuesArray = [
  "solid" /* Solid */,
  "gradient" /* Gradient */,
  "gradientRadial" /* GradientRadial */,
  "tile" /* Tile */,
  "pattern" /* Pattern */,
  "frame" /* Frame */
];
var FillMethodValues = /* @__PURE__ */ ((FillMethodValues2) => {
  FillMethodValues2["None"] = "none";
  FillMethodValues2["Linear"] = "linear";
  FillMethodValues2["Sigma"] = "sigma";
  FillMethodValues2["Any"] = "any";
  FillMethodValues2["Linearsigma"] = "linear sigma";
  return FillMethodValues2;
})(FillMethodValues || {});
const FillMethodValuesArray = [
  "none" /* None */,
  "linear" /* Linear */,
  "sigma" /* Sigma */,
  "any" /* Any */,
  "linear sigma" /* Linearsigma */
];
var StrokeLineStyleValues = /* @__PURE__ */ ((StrokeLineStyleValues2) => {
  StrokeLineStyleValues2["Single"] = "single";
  StrokeLineStyleValues2["ThinThin"] = "thinThin";
  StrokeLineStyleValues2["ThinThick"] = "thinThick";
  StrokeLineStyleValues2["ThickThin"] = "thickThin";
  StrokeLineStyleValues2["ThickBetweenThin"] = "thickBetweenThin";
  return StrokeLineStyleValues2;
})(StrokeLineStyleValues || {});
const StrokeLineStyleValuesArray = [
  "single" /* Single */,
  "thinThin" /* ThinThin */,
  "thinThick" /* ThinThick */,
  "thickThin" /* ThickThin */,
  "thickBetweenThin" /* ThickBetweenThin */
];
var StrokeJoinStyleValues = /* @__PURE__ */ ((StrokeJoinStyleValues2) => {
  StrokeJoinStyleValues2["Round"] = "round";
  StrokeJoinStyleValues2["Bevel"] = "bevel";
  StrokeJoinStyleValues2["Miter"] = "miter";
  return StrokeJoinStyleValues2;
})(StrokeJoinStyleValues || {});
const StrokeJoinStyleValuesArray = [
  "round" /* Round */,
  "bevel" /* Bevel */,
  "miter" /* Miter */
];
var StrokeEndCapValues = /* @__PURE__ */ ((StrokeEndCapValues2) => {
  StrokeEndCapValues2["Flat"] = "flat";
  StrokeEndCapValues2["Square"] = "square";
  StrokeEndCapValues2["Round"] = "round";
  return StrokeEndCapValues2;
})(StrokeEndCapValues || {});
const StrokeEndCapValuesArray = [
  "flat" /* Flat */,
  "square" /* Square */,
  "round" /* Round */
];
var StrokeArrowLengthValues = /* @__PURE__ */ ((StrokeArrowLengthValues2) => {
  StrokeArrowLengthValues2["Short"] = "short";
  StrokeArrowLengthValues2["Medium"] = "medium";
  StrokeArrowLengthValues2["Long"] = "long";
  return StrokeArrowLengthValues2;
})(StrokeArrowLengthValues || {});
const StrokeArrowLengthValuesArray = [
  "short" /* Short */,
  "medium" /* Medium */,
  "long" /* Long */
];
var StrokeArrowWidthValues = /* @__PURE__ */ ((StrokeArrowWidthValues2) => {
  StrokeArrowWidthValues2["Narrow"] = "narrow";
  StrokeArrowWidthValues2["Medium"] = "medium";
  StrokeArrowWidthValues2["Wide"] = "wide";
  return StrokeArrowWidthValues2;
})(StrokeArrowWidthValues || {});
const StrokeArrowWidthValuesArray = [
  "narrow" /* Narrow */,
  "medium" /* Medium */,
  "wide" /* Wide */
];
var StrokeArrowValues = /* @__PURE__ */ ((StrokeArrowValues2) => {
  StrokeArrowValues2["None"] = "none";
  StrokeArrowValues2["Block"] = "block";
  StrokeArrowValues2["Classic"] = "classic";
  StrokeArrowValues2["Oval"] = "oval";
  StrokeArrowValues2["Diamond"] = "diamond";
  StrokeArrowValues2["Open"] = "open";
  return StrokeArrowValues2;
})(StrokeArrowValues || {});
const StrokeArrowValuesArray = [
  "none" /* None */,
  "block" /* Block */,
  "classic" /* Classic */,
  "oval" /* Oval */,
  "diamond" /* Diamond */,
  "open" /* Open */
];
var ImageAspectValues = /* @__PURE__ */ ((ImageAspectValues2) => {
  ImageAspectValues2["Ignore"] = "ignore";
  ImageAspectValues2["AtMost"] = "atMost";
  ImageAspectValues2["AtLeast"] = "atLeast";
  return ImageAspectValues2;
})(ImageAspectValues || {});
const ImageAspectValuesArray = [
  "ignore" /* Ignore */,
  "atMost" /* AtMost */,
  "atLeast" /* AtLeast */
];
var EditAsValues = /* @__PURE__ */ ((EditAsValues2) => {
  EditAsValues2["Canvas"] = "canvas";
  EditAsValues2["OrganizationChart"] = "orgchart";
  EditAsValues2["Radial"] = "radial";
  EditAsValues2["Cycle"] = "cycle";
  EditAsValues2["Stacked"] = "stacked";
  EditAsValues2["Venn"] = "venn";
  EditAsValues2["Bullseye"] = "bullseye";
  return EditAsValues2;
})(EditAsValues || {});
const EditAsValuesArray = [
  "canvas" /* Canvas */,
  "orgchart" /* OrganizationChart */,
  "radial" /* Radial */,
  "cycle" /* Cycle */,
  "stacked" /* Stacked */,
  "venn" /* Venn */,
  "bullseye" /* Bullseye */
];
var ShadowValues = /* @__PURE__ */ ((ShadowValues2) => {
  ShadowValues2["Single"] = "single";
  ShadowValues2["Double"] = "double";
  ShadowValues2["Emboss"] = "emboss";
  ShadowValues2["Perspective"] = "perspective";
  ShadowValues2["ShapeRelative"] = "shapeRelative";
  ShadowValues2["DrawingRelative"] = "drawingRelative";
  return ShadowValues2;
})(ShadowValues || {});
const ShadowValuesArray = [
  "single" /* Single */,
  "double" /* Double */,
  "emboss" /* Emboss */,
  "perspective" /* Perspective */,
  "shapeRelative" /* ShapeRelative */,
  "drawingRelative" /* DrawingRelative */
];
var StrokeFillTypeValues = /* @__PURE__ */ ((StrokeFillTypeValues2) => {
  StrokeFillTypeValues2["Solid"] = "solid";
  StrokeFillTypeValues2["Tile"] = "tile";
  StrokeFillTypeValues2["Pattern"] = "pattern";
  StrokeFillTypeValues2["Frame"] = "frame";
  return StrokeFillTypeValues2;
})(StrokeFillTypeValues || {});
const StrokeFillTypeValuesArray = [
  "solid" /* Solid */,
  "tile" /* Tile */,
  "pattern" /* Pattern */,
  "frame" /* Frame */
];
class Formula extends OxmlLeafElement {
  static _Q = "v:f";
  static _A = [":eqn"];
  /** Equation. Serialized as `:eqn` */
  get equation() {
    return this._g(":eqn");
  }
  set equation(v) {
    this._s(":eqn", v);
  }
}
class ShapeHandle extends OxmlLeafElement {
  static _Q = "v:h";
  static _A = [":position", ":polar", ":map", ":invx", ":invy", ":switch", ":xrange", ":yrange", ":radiusrange"];
  /** Handle Position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
  /** Handle Polar Center. Serialized as `:polar` */
  get polar() {
    return this._g(":polar");
  }
  set polar(v) {
    this._s(":polar", v);
  }
  /** Handle Coordinate Mapping. Serialized as `:map` */
  get map() {
    return this._g(":map");
  }
  set map(v) {
    this._s(":map", v);
  }
  /** Invert Handle's X Position. Serialized as `:invx` */
  get invertX() {
    return this._g(":invx");
  }
  set invertX(v) {
    this._s(":invx", v);
  }
  /** Invert Handle's Y Position. Serialized as `:invy` */
  get invertY() {
    return this._g(":invy");
  }
  set invertY(v) {
    this._s(":invy", v);
  }
  /** Handle Inversion Toggle. Serialized as `:switch` */
  get switch() {
    return this._g(":switch");
  }
  set switch(v) {
    this._s(":switch", v);
  }
  /** Handle X Position Range. Serialized as `:xrange` */
  get xRange() {
    return this._g(":xrange");
  }
  set xRange(v) {
    this._s(":xrange", v);
  }
  /** Handle Y Position Range. Serialized as `:yrange` */
  get yRange() {
    return this._g(":yrange");
  }
  set yRange(v) {
    this._s(":yrange", v);
  }
  /** Handle Polar Radius Range. Serialized as `:radiusrange` */
  get radiusRange() {
    return this._g(":radiusrange");
  }
  set radiusRange(v) {
    this._s(":radiusrange", v);
  }
}
class RoundRectangle extends OxmlCompositeElement {
  static _Q = "v:roundrect";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata", ":arcsize"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** href. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** class. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** alt. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** coordsize. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** wrapcoords. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** print. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
  /** Rounded Corner Arc Size. Serialized as `:arcsize` */
  get arcSize() {
    return this._g(":arcsize");
  }
  set arcSize(v) {
    this._s(":arcsize", v);
  }
}
class Rectangle extends OxmlCompositeElement {
  static _Q = "v:rect";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
}
class PolyLine extends OxmlCompositeElement {
  static _Q = "v:polyline";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata", ":points"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
  /** Points for Compound Line. Serialized as `:points` */
  get points() {
    return this._g(":points");
  }
  set points(v) {
    this._s(":points", v);
  }
}
class Oval extends OxmlCompositeElement {
  static _Q = "v:oval";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
}
class Line extends OxmlCompositeElement {
  static _Q = "v:line";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata", ":from", ":to"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
  /** Line Start. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** Line End Point. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
}
class ImageFile extends OxmlCompositeElement {
  static _Q = "v:image";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", ":src", ":cropleft", ":croptop", ":cropright", ":cropbottom", ":gain", ":blacklevel", ":gamma", ":grayscale", ":bilevel", "o:gfxdata"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** href. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** class. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** alt. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** coordsize. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** wrapcoords. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** print. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Image Source. Serialized as `:src` */
  get source() {
    return this._g(":src");
  }
  set source(v) {
    this._s(":src", v);
  }
  /** Image Left Crop. Serialized as `:cropleft` */
  get cropLeft() {
    return this._g(":cropleft");
  }
  set cropLeft(v) {
    this._s(":cropleft", v);
  }
  /** Image Top Crop. Serialized as `:croptop` */
  get cropTop() {
    return this._g(":croptop");
  }
  set cropTop(v) {
    this._s(":croptop", v);
  }
  /** Image Right Crop. Serialized as `:cropright` */
  get cropRight() {
    return this._g(":cropright");
  }
  set cropRight(v) {
    this._s(":cropright", v);
  }
  /** Image Bottom Crop. Serialized as `:cropbottom` */
  get cropBottom() {
    return this._g(":cropbottom");
  }
  set cropBottom(v) {
    this._s(":cropbottom", v);
  }
  /** Image Intensity. Serialized as `:gain` */
  get gain() {
    return this._g(":gain");
  }
  set gain(v) {
    this._s(":gain", v);
  }
  /** Image Brightness. Serialized as `:blacklevel` */
  get blackLevel() {
    return this._g(":blacklevel");
  }
  set blackLevel(v) {
    this._s(":blacklevel", v);
  }
  /** Image Gamma Correction. Serialized as `:gamma` */
  get gamma() {
    return this._g(":gamma");
  }
  set gamma(v) {
    this._s(":gamma", v);
  }
  /** Image Grayscale Toggle. Serialized as `:grayscale` */
  get grayScale() {
    return this._g(":grayscale");
  }
  set grayScale(v) {
    this._s(":grayscale", v);
  }
  /** Image Bilevel Toggle. Serialized as `:bilevel` */
  get biLevel() {
    return this._g(":bilevel");
  }
  set biLevel(v) {
    this._s(":bilevel", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
}
class Curve extends OxmlCompositeElement {
  static _Q = "v:curve";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata", ":from", ":control1", ":control2", ":to"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
  /** Curve Starting Point. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** First Curve Control Point. Serialized as `:control1` */
  get control1() {
    return this._g(":control1");
  }
  set control1(v) {
    this._s(":control1", v);
  }
  /** Second Curve Control Point. Serialized as `:control2` */
  get control2() {
    return this._g(":control2");
  }
  set control2(v) {
    this._s(":control2", v);
  }
  /** Curve Ending Point. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
}
class Arc extends OxmlCompositeElement {
  static _Q = "v:arc";
  static _A = ["o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", "o:gfxdata", ":id", ":style", ":href", ":target", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", ":startangle", ":endangle"];
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapcoords() {
    return this._g(":wrapcoords");
  }
  set wrapcoords(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Starting Angle. Serialized as `:startangle` */
  get startAngle() {
    return this._g(":startangle");
  }
  set startAngle(v) {
    this._s(":startangle", v);
  }
  /** Ending Angle. Serialized as `:endangle` */
  get endAngle() {
    return this._g(":endangle");
  }
  set endAngle(v) {
    this._s(":endangle", v);
  }
}
class Background extends OxmlCompositeElement {
  static _Q = "v:background";
  static _A = [":id", ":fill", ":fillcolor", "o:bwmode", "o:bwpure", "o:bwnormal", "o:targetscreensize"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Fill Toggle. Serialized as `:fill` */
  get filled() {
    return this._g(":fill");
  }
  set filled(v) {
    this._s(":fill", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillcolor() {
    return this._g(":fillcolor");
  }
  set fillcolor(v) {
    this._s(":fillcolor", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Target Screen Size. Serialized as `o:targetscreensize` */
  get targetScreenSize() {
    return this._g("o:targetscreensize");
  }
  set targetScreenSize(v) {
    this._s("o:targetscreensize", v);
  }
  /** Returns Fill. */
  get fill() {
    return this._f(Fill);
  }
}
class Group extends OxmlCompositeElement {
  static _Q = "v:group";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", "o:gfxdata", ":editas", "o:tableproperties", "o:tablelimits"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** spid. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** oned. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** regroupid. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** doubleclicknotify. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** button. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** userhidden. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** hr. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** hrstd. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** hrnoshade. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** hrpct. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** hralign. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** allowincell. Serialized as `o:allowincell` */
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
  /** userdrawn. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** dgmlayout. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** dgmnodekind. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** dgmlayoutmru. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** insetmode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get gfxdata() {
    return this._g("o:gfxdata");
  }
  set gfxdata(v) {
    this._s("o:gfxdata", v);
  }
  /** Group Diagram Type. Serialized as `:editas` */
  get editAs() {
    return this._g(":editas");
  }
  set editAs(v) {
    this._s(":editas", v);
  }
  /** Table Properties. Serialized as `o:tableproperties` */
  get tableProperties() {
    return this._g("o:tableproperties");
  }
  set tableProperties(v) {
    this._s("o:tableproperties", v);
  }
  /** Table Row Height Limits. Serialized as `o:tablelimits` */
  get tableLimits() {
    return this._g("o:tablelimits");
  }
  set tableLimits(v) {
    this._s("o:tablelimits", v);
  }
}
class Shapetype extends OxmlCompositeElement {
  static _Q = "v:shapetype";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", ":adj", ":path", "o:master"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Adjustment Parameters. Serialized as `:adj` */
  get adjustment() {
    return this._g(":adj");
  }
  set adjustment(v) {
    this._s(":adj", v);
  }
  /** Edge Path. Serialized as `:path` */
  get edgePath() {
    return this._g(":path");
  }
  set edgePath(v) {
    this._s(":path", v);
  }
  /** Master Element Toggle. Serialized as `o:master` */
  get master() {
    return this._g("o:master");
  }
  set master(v) {
    this._s("o:master", v);
  }
}
class Shape extends OxmlCompositeElement {
  static _Q = "v:shape";
  static _A = [":id", ":style", ":href", ":target", ":class", ":title", ":alt", ":coordsize", ":coordorigin", ":wrapcoords", ":print", "o:spid", "o:oned", "o:regroupid", "o:doubleclicknotify", "o:button", "o:userhidden", "o:bullet", "o:hr", "o:hrstd", "o:hrnoshade", "o:hrpct", "o:hralign", "o:allowincell", "o:allowoverlap", "o:userdrawn", "o:bordertopcolor", "o:borderleftcolor", "o:borderbottomcolor", "o:borderrightcolor", "o:dgmlayout", "o:dgmnodekind", "o:dgmlayoutmru", "o:insetmode", ":filled", ":fillcolor", ":stroked", ":strokecolor", ":strokeweight", ":insetpen", "o:spt", "o:connectortype", "o:bwmode", "o:bwpure", "o:bwnormal", "o:forcedash", "o:oleicon", "o:ole", "o:preferrelative", "o:cliptowrap", "o:clip", ":type", ":adj", ":path", "o:gfxdata", ":equationxml"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hyperlink Target. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Hyperlink Display Target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** CSS Reference. Serialized as `:class` */
  get class() {
    return this._g(":class");
  }
  set class(v) {
    this._s(":class", v);
  }
  /** Shape Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Alternate Text. Serialized as `:alt` */
  get alternate() {
    return this._g(":alt");
  }
  set alternate(v) {
    this._s(":alt", v);
  }
  /** Coordinate Space Size. Serialized as `:coordsize` */
  get coordinateSize() {
    return this._g(":coordsize");
  }
  set coordinateSize(v) {
    this._s(":coordsize", v);
  }
  /** Coordinate Space Origin. Serialized as `:coordorigin` */
  get coordinateOrigin() {
    return this._g(":coordorigin");
  }
  set coordinateOrigin(v) {
    this._s(":coordorigin", v);
  }
  /** Shape Bounding Polygon. Serialized as `:wrapcoords` */
  get wrapCoordinates() {
    return this._g(":wrapcoords");
  }
  set wrapCoordinates(v) {
    this._s(":wrapcoords", v);
  }
  /** Print Toggle. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** Optional String. Serialized as `o:spid` */
  get optionalString() {
    return this._g("o:spid");
  }
  set optionalString(v) {
    this._s("o:spid", v);
  }
  /** Shape Handle Toggle. Serialized as `o:oned` */
  get oned() {
    return this._g("o:oned");
  }
  set oned(v) {
    this._s("o:oned", v);
  }
  /** Regroup ID. Serialized as `o:regroupid` */
  get regroupId() {
    return this._g("o:regroupid");
  }
  set regroupId(v) {
    this._s("o:regroupid", v);
  }
  /** Double-click Notification Toggle. Serialized as `o:doubleclicknotify` */
  get doubleClickNotify() {
    return this._g("o:doubleclicknotify");
  }
  set doubleClickNotify(v) {
    this._s("o:doubleclicknotify", v);
  }
  /** Button Behavior Toggle. Serialized as `o:button` */
  get button() {
    return this._g("o:button");
  }
  set button(v) {
    this._s("o:button", v);
  }
  /** Hide Script Anchors. Serialized as `o:userhidden` */
  get userHidden() {
    return this._g("o:userhidden");
  }
  set userHidden(v) {
    this._s("o:userhidden", v);
  }
  /** Graphical Bullet. Serialized as `o:bullet` */
  get bullet() {
    return this._g("o:bullet");
  }
  set bullet(v) {
    this._s("o:bullet", v);
  }
  /** Horizontal Rule Toggle. Serialized as `o:hr` */
  get horizontal() {
    return this._g("o:hr");
  }
  set horizontal(v) {
    this._s("o:hr", v);
  }
  /** Horizontal Rule Standard Display Toggle. Serialized as `o:hrstd` */
  get horizontalStandard() {
    return this._g("o:hrstd");
  }
  set horizontalStandard(v) {
    this._s("o:hrstd", v);
  }
  /** Horizontal Rule 3D Shading Toggle. Serialized as `o:hrnoshade` */
  get horizontalNoShade() {
    return this._g("o:hrnoshade");
  }
  set horizontalNoShade(v) {
    this._s("o:hrnoshade", v);
  }
  /** Horizontal Rule Length Percentage. Serialized as `o:hrpct` */
  get horizontalPercentage() {
    return this._g("o:hrpct");
  }
  set horizontalPercentage(v) {
    this._s("o:hrpct", v);
  }
  /** Horizontal Rule Alignment. Serialized as `o:hralign` */
  get horizontalAlignment() {
    return this._g("o:hralign");
  }
  set horizontalAlignment(v) {
    this._s("o:hralign", v);
  }
  /** Allow in Table Cell. Serialized as `o:allowincell` */
  get allowInCell() {
    return this._g("o:allowincell");
  }
  set allowInCell(v) {
    this._s("o:allowincell", v);
  }
  /** Allow Shape Overlap. Serialized as `o:allowoverlap` */
  get allowOverlap() {
    return this._g("o:allowoverlap");
  }
  set allowOverlap(v) {
    this._s("o:allowoverlap", v);
  }
  /** Exists In Master Slide. Serialized as `o:userdrawn` */
  get userDrawn() {
    return this._g("o:userdrawn");
  }
  set userDrawn(v) {
    this._s("o:userdrawn", v);
  }
  /** Border Top Color. Serialized as `o:bordertopcolor` */
  get borderTopColor() {
    return this._g("o:bordertopcolor");
  }
  set borderTopColor(v) {
    this._s("o:bordertopcolor", v);
  }
  /** Border Left Color. Serialized as `o:borderleftcolor` */
  get borderLeftColor() {
    return this._g("o:borderleftcolor");
  }
  set borderLeftColor(v) {
    this._s("o:borderleftcolor", v);
  }
  /** Bottom Border Color. Serialized as `o:borderbottomcolor` */
  get borderBottomColor() {
    return this._g("o:borderbottomcolor");
  }
  set borderBottomColor(v) {
    this._s("o:borderbottomcolor", v);
  }
  /** Border Right Color. Serialized as `o:borderrightcolor` */
  get borderRightColor() {
    return this._g("o:borderrightcolor");
  }
  set borderRightColor(v) {
    this._s("o:borderrightcolor", v);
  }
  /** Diagram Node Layout Identifier. Serialized as `o:dgmlayout` */
  get diagramLayout() {
    return this._g("o:dgmlayout");
  }
  set diagramLayout(v) {
    this._s("o:dgmlayout", v);
  }
  /** Diagram Node Identifier. Serialized as `o:dgmnodekind` */
  get diagramNodeKind() {
    return this._g("o:dgmnodekind");
  }
  set diagramNodeKind(v) {
    this._s("o:dgmnodekind", v);
  }
  /** Diagram Node Recent Layout Identifier. Serialized as `o:dgmlayoutmru` */
  get diagramLayoutMostRecentUsed() {
    return this._g("o:dgmlayoutmru");
  }
  set diagramLayoutMostRecentUsed(v) {
    this._s("o:dgmlayoutmru", v);
  }
  /** Text Inset Mode. Serialized as `o:insetmode` */
  get insetMode() {
    return this._g("o:insetmode");
  }
  set insetMode(v) {
    this._s("o:insetmode", v);
  }
  /** Shape Fill Toggle. Serialized as `:filled` */
  get filled() {
    return this._g(":filled");
  }
  set filled(v) {
    this._s(":filled", v);
  }
  /** Fill Color. Serialized as `:fillcolor` */
  get fillColor() {
    return this._g(":fillcolor");
  }
  set fillColor(v) {
    this._s(":fillcolor", v);
  }
  /** Shape Stroke Toggle. Serialized as `:stroked` */
  get stroked() {
    return this._g(":stroked");
  }
  set stroked(v) {
    this._s(":stroked", v);
  }
  /** Shape Stroke Color. Serialized as `:strokecolor` */
  get strokeColor() {
    return this._g(":strokecolor");
  }
  set strokeColor(v) {
    this._s(":strokecolor", v);
  }
  /** Shape Stroke Weight. Serialized as `:strokeweight` */
  get strokeWeight() {
    return this._g(":strokeweight");
  }
  set strokeWeight(v) {
    this._s(":strokeweight", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetPen() {
    return this._g(":insetpen");
  }
  set insetPen(v) {
    this._s(":insetpen", v);
  }
  /** Optional Number. Serialized as `o:spt` */
  get optionalNumber() {
    return this._g("o:spt");
  }
  set optionalNumber(v) {
    this._s("o:spt", v);
  }
  /** Shape Connector Type. Serialized as `o:connectortype` */
  get connectorType() {
    return this._g("o:connectortype");
  }
  set connectorType(v) {
    this._s("o:connectortype", v);
  }
  /** Black-and-White Mode. Serialized as `o:bwmode` */
  get blackWhiteMode() {
    return this._g("o:bwmode");
  }
  set blackWhiteMode(v) {
    this._s("o:bwmode", v);
  }
  /** Pure Black-and-White Mode. Serialized as `o:bwpure` */
  get pureBlackWhiteMode() {
    return this._g("o:bwpure");
  }
  set pureBlackWhiteMode(v) {
    this._s("o:bwpure", v);
  }
  /** Normal Black-and-White Mode. Serialized as `o:bwnormal` */
  get normalBlackWhiteMode() {
    return this._g("o:bwnormal");
  }
  set normalBlackWhiteMode(v) {
    this._s("o:bwnormal", v);
  }
  /** Force Dashed Outline. Serialized as `o:forcedash` */
  get forceDash() {
    return this._g("o:forcedash");
  }
  set forceDash(v) {
    this._s("o:forcedash", v);
  }
  /** Embedded Object Icon Toggle. Serialized as `o:oleicon` */
  get oleIcon() {
    return this._g("o:oleicon");
  }
  set oleIcon(v) {
    this._s("o:oleicon", v);
  }
  /** Embedded Object Toggle. Serialized as `o:ole` */
  get ole() {
    return this._g("o:ole");
  }
  set ole(v) {
    this._s("o:ole", v);
  }
  /** Relative Resize Toggle. Serialized as `o:preferrelative` */
  get preferRelative() {
    return this._g("o:preferrelative");
  }
  set preferRelative(v) {
    this._s("o:preferrelative", v);
  }
  /** Clip to Wrapping Polygon. Serialized as `o:cliptowrap` */
  get clipToWrap() {
    return this._g("o:cliptowrap");
  }
  set clipToWrap(v) {
    this._s("o:cliptowrap", v);
  }
  /** Clipping Toggle. Serialized as `o:clip` */
  get clip() {
    return this._g("o:clip");
  }
  set clip(v) {
    this._s("o:clip", v);
  }
  /** Shape Type Reference. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Adjustment Parameters. Serialized as `:adj` */
  get adjustment() {
    return this._g(":adj");
  }
  set adjustment(v) {
    this._s(":adj", v);
  }
  /** Edge Path. Serialized as `:path` */
  get edgePath() {
    return this._g(":path");
  }
  set edgePath(v) {
    this._s(":path", v);
  }
  /** Encoded Package. Serialized as `o:gfxdata` */
  get encodedPackage() {
    return this._g("o:gfxdata");
  }
  set encodedPackage(v) {
    this._s("o:gfxdata", v);
  }
  /** Storage for Alternate Math Content. Serialized as `:equationxml` */
  get equationXml() {
    return this._g(":equationxml");
  }
  set equationXml(v) {
    this._s(":equationxml", v);
  }
}
class ImageData extends OxmlLeafElement {
  static _Q = "v:imagedata";
  static _A = [":id", ":chromakey", ":cropleft", ":croptop", ":cropright", ":cropbottom", ":gain", ":blacklevel", ":gamma", ":grayscale", ":bilevel", ":embosscolor", ":recolortarget", "o:title", "o:detectmouseclick", "o:relid", "r:id", "r:pict", "r:href"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Image Transparency Color. Serialized as `:chromakey` */
  get chromAKey() {
    return this._g(":chromakey");
  }
  set chromAKey(v) {
    this._s(":chromakey", v);
  }
  /** Image Left Crop. Serialized as `:cropleft` */
  get cropLeft() {
    return this._g(":cropleft");
  }
  set cropLeft(v) {
    this._s(":cropleft", v);
  }
  /** Image Top Crop. Serialized as `:croptop` */
  get cropTop() {
    return this._g(":croptop");
  }
  set cropTop(v) {
    this._s(":croptop", v);
  }
  /** Image Right Crop. Serialized as `:cropright` */
  get cropRight() {
    return this._g(":cropright");
  }
  set cropRight(v) {
    this._s(":cropright", v);
  }
  /** Image Bottom Crop. Serialized as `:cropbottom` */
  get cropBottom() {
    return this._g(":cropbottom");
  }
  set cropBottom(v) {
    this._s(":cropbottom", v);
  }
  /** Image Intensity. Serialized as `:gain` */
  get gain() {
    return this._g(":gain");
  }
  set gain(v) {
    this._s(":gain", v);
  }
  /** Image Brightness. Serialized as `:blacklevel` */
  get blackLevel() {
    return this._g(":blacklevel");
  }
  set blackLevel(v) {
    this._s(":blacklevel", v);
  }
  /** Image Gamma Correction. Serialized as `:gamma` */
  get gamma() {
    return this._g(":gamma");
  }
  set gamma(v) {
    this._s(":gamma", v);
  }
  /** Image Grayscale Toggle. Serialized as `:grayscale` */
  get grayscale() {
    return this._g(":grayscale");
  }
  set grayscale(v) {
    this._s(":grayscale", v);
  }
  /** Image Bilevel Toggle. Serialized as `:bilevel` */
  get biLevel() {
    return this._g(":bilevel");
  }
  set biLevel(v) {
    this._s(":bilevel", v);
  }
  /** Embossed Color. Serialized as `:embosscolor` */
  get embossColor() {
    return this._g(":embosscolor");
  }
  set embossColor(v) {
    this._s(":embosscolor", v);
  }
  /** Black Recoloring Color. Serialized as `:recolortarget` */
  get recolorTarget() {
    return this._g(":recolortarget");
  }
  set recolorTarget(v) {
    this._s(":recolortarget", v);
  }
  /** Image Data Title. Serialized as `o:title` */
  get title() {
    return this._g("o:title");
  }
  set title(v) {
    this._s("o:title", v);
  }
  /** Detect Mouse Click. Serialized as `o:detectmouseclick` */
  get detectMouseClick() {
    return this._g("o:detectmouseclick");
  }
  set detectMouseClick(v) {
    this._s("o:detectmouseclick", v);
  }
  /** Relationship to Part. Serialized as `o:relid` */
  get relId() {
    return this._g("o:relid");
  }
  set relId(v) {
    this._s("o:relid", v);
  }
  /** Explicit Relationship to Image Data. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Explicit Relationship to Alternate Image Data. Serialized as `r:pict` */
  get picture() {
    return this._g("r:pict");
  }
  set picture(v) {
    this._s("r:pict", v);
  }
  /** Explicit Relationship to Hyperlink Target. Serialized as `r:href` */
  get relHref() {
    return this._g("r:href");
  }
  set relHref(v) {
    this._s("r:href", v);
  }
}
class TextPath extends OxmlLeafElement {
  static _Q = "v:textpath";
  static _A = [":id", ":style", ":on", ":fitshape", ":fitpath", ":trim", ":xscale", ":string"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Text Path Toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Shape Fit Toggle. Serialized as `:fitshape` */
  get fitShape() {
    return this._g(":fitshape");
  }
  set fitShape(v) {
    this._s(":fitshape", v);
  }
  /** Path Fit Toggle. Serialized as `:fitpath` */
  get fitPath() {
    return this._g(":fitpath");
  }
  set fitPath(v) {
    this._s(":fitpath", v);
  }
  /** Text Path Trim Toggle. Serialized as `:trim` */
  get trim() {
    return this._g(":trim");
  }
  set trim(v) {
    this._s(":trim", v);
  }
  /** Text X-Scaling. Serialized as `:xscale` */
  get xScale() {
    return this._g(":xscale");
  }
  set xScale(v) {
    this._s(":xscale", v);
  }
  /** Text Path Text. Serialized as `:string` */
  get string() {
    return this._g(":string");
  }
  set string(v) {
    this._s(":string", v);
  }
}
class TextBox extends OxmlCompositeElement {
  static _Q = "v:textbox";
  static _A = [":id", ":style", ":inset", "o:singleclick"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shape Styling Properties. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Text Box Inset. Serialized as `:inset` */
  get inset() {
    return this._g(":inset");
  }
  set inset(v) {
    this._s(":inset", v);
  }
  /** Text Box Single-Click Selection Toggle. Serialized as `o:singleclick` */
  get singleClick() {
    return this._g("o:singleclick");
  }
  set singleClick(v) {
    this._s("o:singleclick", v);
  }
}
class Shadow extends OxmlLeafElement {
  static _Q = "v:shadow";
  static _A = [":id", ":on", ":type", ":obscured", ":color", ":opacity", ":offset", ":color2", ":offset2", ":origin", ":matrix"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Shadow Toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Shadow Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Shadow Transparency. Serialized as `:obscured` */
  get obscured() {
    return this._g(":obscured");
  }
  set obscured(v) {
    this._s(":obscured", v);
  }
  /** Shadow Primary Color. Serialized as `:color` */
  get color() {
    return this._g(":color");
  }
  set color(v) {
    this._s(":color", v);
  }
  /** Shadow Opacity. Serialized as `:opacity` */
  get opacity() {
    return this._g(":opacity");
  }
  set opacity(v) {
    this._s(":opacity", v);
  }
  /** Shadow Primary Offset. Serialized as `:offset` */
  get offset() {
    return this._g(":offset");
  }
  set offset(v) {
    this._s(":offset", v);
  }
  /** Shadow Secondary Color. Serialized as `:color2` */
  get color2() {
    return this._g(":color2");
  }
  set color2(v) {
    this._s(":color2", v);
  }
  /** Shadow Secondary Offset. Serialized as `:offset2` */
  get offset2() {
    return this._g(":offset2");
  }
  set offset2(v) {
    this._s(":offset2", v);
  }
  /** Shadow Origin. Serialized as `:origin` */
  get origin() {
    return this._g(":origin");
  }
  set origin(v) {
    this._s(":origin", v);
  }
  /** Shadow Perspective Matrix. Serialized as `:matrix` */
  get matrix() {
    return this._g(":matrix");
  }
  set matrix(v) {
    this._s(":matrix", v);
  }
}
class Stroke extends OxmlCompositeElement {
  static _Q = "v:stroke";
  static _A = [":id", ":on", ":weight", ":color", ":opacity", ":linestyle", ":miterlimit", ":joinstyle", ":endcap", ":dashstyle", ":filltype", ":src", ":imageaspect", ":imagesize", ":imagealignshape", ":color2", ":startarrow", ":startarrowwidth", ":startarrowlength", ":endarrow", ":endarrowwidth", ":endarrowlength", "o:href", "o:althref", "o:title", "o:forcedash", "r:id", ":insetpen"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
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
  get miterlimit() {
    return this._g(":miterlimit");
  }
  set miterlimit(v) {
    this._s(":miterlimit", v);
  }
  /** Line End Join Style. Serialized as `:joinstyle` */
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
  /** Stroke Alternate Pattern Color. Serialized as `:color2` */
  get color2() {
    return this._g(":color2");
  }
  set color2(v) {
    this._s(":color2", v);
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
  /** Relationship. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Inset Border From Path. Serialized as `:insetpen` */
  get insetpen() {
    return this._g(":insetpen");
  }
  set insetpen(v) {
    this._s(":insetpen", v);
  }
  /** Returns OLeftStroke. */
  get leftStroke() {
    return this._f(OLeftStroke);
  }
  /** Returns OTopStroke. */
  get topStroke() {
    return this._f(OTopStroke);
  }
  /** Returns ORightStroke. */
  get rightStroke() {
    return this._f(ORightStroke);
  }
  /** Returns OBottomStroke. */
  get bottomStroke() {
    return this._f(OBottomStroke);
  }
  /** Returns OColumnStroke. */
  get columnStroke() {
    return this._f(OColumnStroke);
  }
}
class Fill extends OxmlCompositeElement {
  static _Q = "v:fill";
  static _A = [":id", ":type", ":on", ":color", ":opacity", ":color2", ":src", "o:href", "o:althref", ":size", ":origin", ":position", ":aspect", ":colors", ":angle", ":alignshape", ":focus", ":focussize", ":focusposition", ":method", "o:detectmouseclick", "o:title", "o:opacity2", ":recolor", ":rotate", "r:id"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Fill Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Fill Toggle. Serialized as `:on` */
  get on() {
    return this._g(":on");
  }
  set on(v) {
    this._s(":on", v);
  }
  /** Primary Color. Serialized as `:color` */
  get color() {
    return this._g(":color");
  }
  set color(v) {
    this._s(":color", v);
  }
  /** Primary Color Opacity. Serialized as `:opacity` */
  get opacity() {
    return this._g(":opacity");
  }
  set opacity(v) {
    this._s(":opacity", v);
  }
  /** Secondary Color. Serialized as `:color2` */
  get color2() {
    return this._g(":color2");
  }
  set color2(v) {
    this._s(":color2", v);
  }
  /** Fill Image Source. Serialized as `:src` */
  get source() {
    return this._g(":src");
  }
  set source(v) {
    this._s(":src", v);
  }
  /** Hyperlink Target. Serialized as `o:href` */
  get href() {
    return this._g("o:href");
  }
  set href(v) {
    this._s("o:href", v);
  }
  /** Alternate Image Reference Location. Serialized as `o:althref` */
  get alternateImageReference() {
    return this._g("o:althref");
  }
  set alternateImageReference(v) {
    this._s("o:althref", v);
  }
  /** Fill Image Size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** Fill Image Origin. Serialized as `:origin` */
  get origin() {
    return this._g(":origin");
  }
  set origin(v) {
    this._s(":origin", v);
  }
  /** Fill Image Position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
  /** Image Aspect Ratio. Serialized as `:aspect` */
  get aspect() {
    return this._g(":aspect");
  }
  set aspect(v) {
    this._s(":aspect", v);
  }
  /** Intermediate Colors. Serialized as `:colors` */
  get colors() {
    return this._g(":colors");
  }
  set colors(v) {
    this._s(":colors", v);
  }
  /** Gradient Angle. Serialized as `:angle` */
  get angle() {
    return this._g(":angle");
  }
  set angle(v) {
    this._s(":angle", v);
  }
  /** Align Image With Shape. Serialized as `:alignshape` */
  get alignShape() {
    return this._g(":alignshape");
  }
  set alignShape(v) {
    this._s(":alignshape", v);
  }
  /** Gradient Center. Serialized as `:focus` */
  get focus() {
    return this._g(":focus");
  }
  set focus(v) {
    this._s(":focus", v);
  }
  /** Radial Gradient Size. Serialized as `:focussize` */
  get focusSize() {
    return this._g(":focussize");
  }
  set focusSize(v) {
    this._s(":focussize", v);
  }
  /** Radial Gradient Center. Serialized as `:focusposition` */
  get focusPosition() {
    return this._g(":focusposition");
  }
  set focusPosition(v) {
    this._s(":focusposition", v);
  }
  /** Gradient Fill Method. Serialized as `:method` */
  get method() {
    return this._g(":method");
  }
  set method(v) {
    this._s(":method", v);
  }
  /** Detect Mouse Click. Serialized as `o:detectmouseclick` */
  get detectMouseClick() {
    return this._g("o:detectmouseclick");
  }
  set detectMouseClick(v) {
    this._s("o:detectmouseclick", v);
  }
  /** Title. Serialized as `o:title` */
  get title() {
    return this._g("o:title");
  }
  set title(v) {
    this._s("o:title", v);
  }
  /** Secondary Color Opacity. Serialized as `o:opacity2` */
  get opacity2() {
    return this._g("o:opacity2");
  }
  set opacity2(v) {
    this._s("o:opacity2", v);
  }
  /** Recolor Fill as Picture. Serialized as `:recolor` */
  get recolor() {
    return this._g(":recolor");
  }
  set recolor(v) {
    this._s(":recolor", v);
  }
  /** Rotate Fill with Shape. Serialized as `:rotate` */
  get rotate() {
    return this._g(":rotate");
  }
  set rotate(v) {
    this._s(":rotate", v);
  }
  /** Relationship to Part. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Returns OFillExtendedProperties. */
  get fillExtendedProperties() {
    return this._f(OFillExtendedProperties);
  }
}
class ShapeHandles extends OxmlCompositeElement {
  static _Q = "v:handles";
}
class Formulas extends OxmlCompositeElement {
  static _Q = "v:formulas";
}
class Path extends OxmlLeafElement {
  static _Q = "v:path";
  static _A = [":id", ":v", ":limo", ":textboxrect", ":fillok", ":strokeok", ":shadowok", ":arrowok", ":gradientshapeok", ":textpathok", ":insetpenok", "o:connecttype", "o:connectlocs", "o:connectangles", "o:extrusionok"];
  /** Unique Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Path Definition. Serialized as `:v` */
  get value() {
    return this._g(":v");
  }
  set value(v) {
    this._s(":v", v);
  }
  /** Limo Stretch Point. Serialized as `:limo` */
  get limo() {
    return this._g(":limo");
  }
  set limo(v) {
    this._s(":limo", v);
  }
  /** Text Box Bounding Box. Serialized as `:textboxrect` */
  get textboxRectangle() {
    return this._g(":textboxrect");
  }
  set textboxRectangle(v) {
    this._s(":textboxrect", v);
  }
  /** Shape Fill Toggle. Serialized as `:fillok` */
  get allowFill() {
    return this._g(":fillok");
  }
  set allowFill(v) {
    this._s(":fillok", v);
  }
  /** Stroke Toggle. Serialized as `:strokeok` */
  get allowStroke() {
    return this._g(":strokeok");
  }
  set allowStroke(v) {
    this._s(":strokeok", v);
  }
  /** Shadow Toggle. Serialized as `:shadowok` */
  get allowShading() {
    return this._g(":shadowok");
  }
  set allowShading(v) {
    this._s(":shadowok", v);
  }
  /** Arrowhead Display Toggle. Serialized as `:arrowok` */
  get showArrowhead() {
    return this._g(":arrowok");
  }
  set showArrowhead(v) {
    this._s(":arrowok", v);
  }
  /** Gradient Shape Toggle. Serialized as `:gradientshapeok` */
  get allowGradientShape() {
    return this._g(":gradientshapeok");
  }
  set allowGradientShape(v) {
    this._s(":gradientshapeok", v);
  }
  /** Text Path Toggle. Serialized as `:textpathok` */
  get allowTextPath() {
    return this._g(":textpathok");
  }
  set allowTextPath(v) {
    this._s(":textpathok", v);
  }
  /** Inset Stroke From Path Flag. Serialized as `:insetpenok` */
  get allowInsetPen() {
    return this._g(":insetpenok");
  }
  set allowInsetPen(v) {
    this._s(":insetpenok", v);
  }
  /** Connection Point Type. Serialized as `o:connecttype` */
  get connectionPointType() {
    return this._g("o:connecttype");
  }
  set connectionPointType(v) {
    this._s("o:connecttype", v);
  }
  /** Connection Points. Serialized as `o:connectlocs` */
  get connectionPoints() {
    return this._g("o:connectlocs");
  }
  set connectionPoints(v) {
    this._s("o:connectlocs", v);
  }
  /** Connection Point Connect Angles. Serialized as `o:connectangles` */
  get connectAngles() {
    return this._g("o:connectangles");
  }
  set connectAngles(v) {
    this._s("o:connectangles", v);
  }
  /** Extrusion Toggle. Serialized as `o:extrusionok` */
  get allowExtrusion() {
    return this._g("o:extrusionok");
  }
  set allowExtrusion(v) {
    this._s("o:extrusionok", v);
  }
}
function initVmlNamespace() {
  Formula._D = {
    ":eqn": new OxmlAttr(":eqn", OxmlType.StringValue)
  };
  ShapeHandle._D = {
    ":position": new OxmlAttr(":position", OxmlType.StringValue),
    ":polar": new OxmlAttr(":polar", OxmlType.StringValue),
    ":map": new OxmlAttr(":map", OxmlType.StringValue),
    ":invx": new OxmlAttr(":invx", OxmlType.TrueFalseBlankValue),
    ":invy": new OxmlAttr(":invy", OxmlType.TrueFalseBlankValue),
    ":switch": new OxmlAttr(":switch", OxmlType.TrueFalseBlankValue),
    ":xrange": new OxmlAttr(":xrange", OxmlType.StringValue),
    ":yrange": new OxmlAttr(":yrange", OxmlType.StringValue),
    ":radiusrange": new OxmlAttr(":radiusrange", OxmlType.StringValue)
  };
  RoundRectangle._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  RoundRectangle._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":arcsize": new OxmlAttr(":arcsize", OxmlType.StringValue)
  };
  Rectangle._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  Rectangle._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue)
  };
  PolyLine._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData,
    "o:ink": OInk
  };
  PolyLine._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":points": new OxmlAttr(":points", OxmlType.StringValue)
  };
  Oval._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  Oval._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue)
  };
  Line._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  Line._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":from": new OxmlAttr(":from", OxmlType.StringValue),
    ":to": new OxmlAttr(":to", OxmlType.StringValue)
  };
  ImageFile._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  ImageFile._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    ":src": new OxmlAttr(":src", OxmlType.StringValue),
    ":cropleft": new OxmlAttr(":cropleft", OxmlType.StringValue),
    ":croptop": new OxmlAttr(":croptop", OxmlType.StringValue),
    ":cropright": new OxmlAttr(":cropright", OxmlType.StringValue),
    ":cropbottom": new OxmlAttr(":cropbottom", OxmlType.StringValue),
    ":gain": new OxmlAttr(":gain", OxmlType.StringValue),
    ":blacklevel": new OxmlAttr(":blacklevel", OxmlType.StringValue),
    ":gamma": new OxmlAttr(":gamma", OxmlType.StringValue),
    ":grayscale": new OxmlAttr(":grayscale", OxmlType.TrueFalseValue),
    ":bilevel": new OxmlAttr(":bilevel", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue)
  };
  Curve._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  Curve._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":from": new OxmlAttr(":from", OxmlType.StringValue),
    ":control1": new OxmlAttr(":control1", OxmlType.StringValue),
    ":control2": new OxmlAttr(":control2", OxmlType.StringValue),
    ":to": new OxmlAttr(":to", OxmlType.StringValue)
  };
  Arc._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData
  };
  Arc._D = {
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    ":startangle": new OxmlAttr(":startangle", OxmlType.DecimalValue),
    ":endangle": new OxmlAttr(":endangle", OxmlType.DecimalValue)
  };
  Background._C = {
    "v:fill": Fill
  };
  Background._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":fill": new OxmlAttr(":fill", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:targetscreensize": new OxmlAttr("o:targetscreensize", OxmlType.EnumValue, ScreenSizeValuesArray)
  };
  Group._C = {
    "v:group": Group,
    "v:shape": Shape,
    "v:shapetype": Shapetype,
    "v:arc": Arc,
    "v:curve": Curve,
    "v:image": ImageFile,
    "v:line": Line,
    "v:oval": Oval,
    "v:polyline": PolyLine,
    "v:rect": Rectangle,
    "v:roundrect": RoundRectangle,
    "o:diagram": ODiagram,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "xvml:ClientData": XvmlClientData
  };
  Group._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":editas": new OxmlAttr(":editas", OxmlType.EnumValue, EditAsValuesArray),
    "o:tableproperties": new OxmlAttr("o:tableproperties", OxmlType.StringValue),
    "o:tablelimits": new OxmlAttr("o:tablelimits", OxmlType.StringValue)
  };
  Shapetype._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData,
    "o:complex": OComplex
  };
  Shapetype._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    ":adj": new OxmlAttr(":adj", OxmlType.StringValue),
    ":path": new OxmlAttr(":path", OxmlType.StringValue),
    "o:master": new OxmlAttr("o:master", OxmlType.StringValue)
  };
  Shape._C = {
    "v:path": Path,
    "v:formulas": Formulas,
    "v:handles": ShapeHandles,
    "v:fill": Fill,
    "v:stroke": Stroke,
    "v:shadow": Shadow,
    "v:textbox": TextBox,
    "v:textpath": TextPath,
    "v:imagedata": ImageData,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:clippath": OClipPath,
    "o:signatureline": OSignatureLine,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "w10:bordertop": W10TopBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "xvml:ClientData": XvmlClientData,
    "pvml:textdata": PvmlTextData,
    "o:ink": OInk,
    "pvml:iscomment": PvmlInkAnnotationFlag
  };
  Shape._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":class": new OxmlAttr(":class", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":alt": new OxmlAttr(":alt", OxmlType.StringValue),
    ":coordsize": new OxmlAttr(":coordsize", OxmlType.StringValue),
    ":coordorigin": new OxmlAttr(":coordorigin", OxmlType.StringValue),
    ":wrapcoords": new OxmlAttr(":wrapcoords", OxmlType.StringValue),
    ":print": new OxmlAttr(":print", OxmlType.TrueFalseValue),
    "o:spid": new OxmlAttr("o:spid", OxmlType.StringValue),
    "o:oned": new OxmlAttr("o:oned", OxmlType.TrueFalseValue),
    "o:regroupid": new OxmlAttr("o:regroupid", OxmlType.IntegerValue),
    "o:doubleclicknotify": new OxmlAttr("o:doubleclicknotify", OxmlType.TrueFalseValue),
    "o:button": new OxmlAttr("o:button", OxmlType.TrueFalseValue),
    "o:userhidden": new OxmlAttr("o:userhidden", OxmlType.TrueFalseValue),
    "o:bullet": new OxmlAttr("o:bullet", OxmlType.TrueFalseValue),
    "o:hr": new OxmlAttr("o:hr", OxmlType.TrueFalseValue),
    "o:hrstd": new OxmlAttr("o:hrstd", OxmlType.TrueFalseValue),
    "o:hrnoshade": new OxmlAttr("o:hrnoshade", OxmlType.TrueFalseValue),
    "o:hrpct": new OxmlAttr("o:hrpct", OxmlType.SingleValue),
    "o:hralign": new OxmlAttr("o:hralign", OxmlType.EnumValue, HorizontalRuleAlignmentValuesArray),
    "o:allowincell": new OxmlAttr("o:allowincell", OxmlType.TrueFalseValue),
    "o:allowoverlap": new OxmlAttr("o:allowoverlap", OxmlType.TrueFalseValue),
    "o:userdrawn": new OxmlAttr("o:userdrawn", OxmlType.TrueFalseValue),
    "o:bordertopcolor": new OxmlAttr("o:bordertopcolor", OxmlType.StringValue),
    "o:borderleftcolor": new OxmlAttr("o:borderleftcolor", OxmlType.StringValue),
    "o:borderbottomcolor": new OxmlAttr("o:borderbottomcolor", OxmlType.StringValue),
    "o:borderrightcolor": new OxmlAttr("o:borderrightcolor", OxmlType.StringValue),
    "o:dgmlayout": new OxmlAttr("o:dgmlayout", OxmlType.IntegerValue),
    "o:dgmnodekind": new OxmlAttr("o:dgmnodekind", OxmlType.IntegerValue),
    "o:dgmlayoutmru": new OxmlAttr("o:dgmlayoutmru", OxmlType.IntegerValue),
    "o:insetmode": new OxmlAttr("o:insetmode", OxmlType.EnumValue, InsetMarginValuesArray),
    ":filled": new OxmlAttr(":filled", OxmlType.TrueFalseValue),
    ":fillcolor": new OxmlAttr(":fillcolor", OxmlType.StringValue),
    ":stroked": new OxmlAttr(":stroked", OxmlType.TrueFalseValue),
    ":strokecolor": new OxmlAttr(":strokecolor", OxmlType.StringValue),
    ":strokeweight": new OxmlAttr(":strokeweight", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue),
    "o:spt": new OxmlAttr("o:spt", OxmlType.Int32Value),
    "o:connectortype": new OxmlAttr("o:connectortype", OxmlType.EnumValue, ConnectorValuesArray),
    "o:bwmode": new OxmlAttr("o:bwmode", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwpure": new OxmlAttr("o:bwpure", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:bwnormal": new OxmlAttr("o:bwnormal", OxmlType.EnumValue, BlackAndWhiteModeValuesArray),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "o:oleicon": new OxmlAttr("o:oleicon", OxmlType.TrueFalseValue),
    "o:ole": new OxmlAttr("o:ole", OxmlType.TrueFalseBlankValue),
    "o:preferrelative": new OxmlAttr("o:preferrelative", OxmlType.TrueFalseValue),
    "o:cliptowrap": new OxmlAttr("o:cliptowrap", OxmlType.TrueFalseValue),
    "o:clip": new OxmlAttr("o:clip", OxmlType.TrueFalseValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":adj": new OxmlAttr(":adj", OxmlType.StringValue),
    ":path": new OxmlAttr(":path", OxmlType.StringValue),
    "o:gfxdata": new OxmlAttr("o:gfxdata", OxmlType.Base64BinaryValue),
    ":equationxml": new OxmlAttr(":equationxml", OxmlType.StringValue)
  };
  ImageData._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":chromakey": new OxmlAttr(":chromakey", OxmlType.StringValue),
    ":cropleft": new OxmlAttr(":cropleft", OxmlType.StringValue),
    ":croptop": new OxmlAttr(":croptop", OxmlType.StringValue),
    ":cropright": new OxmlAttr(":cropright", OxmlType.StringValue),
    ":cropbottom": new OxmlAttr(":cropbottom", OxmlType.StringValue),
    ":gain": new OxmlAttr(":gain", OxmlType.StringValue),
    ":blacklevel": new OxmlAttr(":blacklevel", OxmlType.StringValue),
    ":gamma": new OxmlAttr(":gamma", OxmlType.StringValue),
    ":grayscale": new OxmlAttr(":grayscale", OxmlType.TrueFalseValue),
    ":bilevel": new OxmlAttr(":bilevel", OxmlType.TrueFalseValue),
    ":embosscolor": new OxmlAttr(":embosscolor", OxmlType.StringValue),
    ":recolortarget": new OxmlAttr(":recolortarget", OxmlType.StringValue),
    "o:title": new OxmlAttr("o:title", OxmlType.StringValue),
    "o:detectmouseclick": new OxmlAttr("o:detectmouseclick", OxmlType.TrueFalseValue),
    "o:relid": new OxmlAttr("o:relid", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    "r:pict": new OxmlAttr("r:pict", OxmlType.StringValue),
    "r:href": new OxmlAttr("r:href", OxmlType.StringValue)
  };
  TextPath._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":fitshape": new OxmlAttr(":fitshape", OxmlType.TrueFalseValue),
    ":fitpath": new OxmlAttr(":fitpath", OxmlType.TrueFalseValue),
    ":trim": new OxmlAttr(":trim", OxmlType.TrueFalseValue),
    ":xscale": new OxmlAttr(":xscale", OxmlType.TrueFalseValue),
    ":string": new OxmlAttr(":string", OxmlType.StringValue)
  };
  TextBox._C = {
    "w:txbxContent": WTextBoxContent
  };
  TextBox._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":inset": new OxmlAttr(":inset", OxmlType.StringValue),
    "o:singleclick": new OxmlAttr("o:singleclick", OxmlType.TrueFalseValue)
  };
  Shadow._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ShadowValuesArray),
    ":obscured": new OxmlAttr(":obscured", OxmlType.TrueFalseValue),
    ":color": new OxmlAttr(":color", OxmlType.StringValue),
    ":opacity": new OxmlAttr(":opacity", OxmlType.StringValue),
    ":offset": new OxmlAttr(":offset", OxmlType.StringValue),
    ":color2": new OxmlAttr(":color2", OxmlType.StringValue),
    ":offset2": new OxmlAttr(":offset2", OxmlType.StringValue),
    ":origin": new OxmlAttr(":origin", OxmlType.StringValue),
    ":matrix": new OxmlAttr(":matrix", OxmlType.StringValue)
  };
  Stroke._C = {
    "o:left": OLeftStroke,
    "o:top": OTopStroke,
    "o:right": ORightStroke,
    "o:bottom": OBottomStroke,
    "o:column": OColumnStroke
  };
  Stroke._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":weight": new OxmlAttr(":weight", OxmlType.StringValue),
    ":color": new OxmlAttr(":color", OxmlType.StringValue),
    ":opacity": new OxmlAttr(":opacity", OxmlType.StringValue),
    ":linestyle": new OxmlAttr(":linestyle", OxmlType.EnumValue, StrokeLineStyleValuesArray),
    ":miterlimit": new OxmlAttr(":miterlimit", OxmlType.StringValue),
    ":joinstyle": new OxmlAttr(":joinstyle", OxmlType.EnumValue, StrokeJoinStyleValuesArray),
    ":endcap": new OxmlAttr(":endcap", OxmlType.EnumValue, StrokeEndCapValuesArray),
    ":dashstyle": new OxmlAttr(":dashstyle", OxmlType.StringValue),
    ":filltype": new OxmlAttr(":filltype", OxmlType.EnumValue, StrokeFillTypeValuesArray),
    ":src": new OxmlAttr(":src", OxmlType.StringValue),
    ":imageaspect": new OxmlAttr(":imageaspect", OxmlType.EnumValue, ImageAspectValuesArray),
    ":imagesize": new OxmlAttr(":imagesize", OxmlType.StringValue),
    ":imagealignshape": new OxmlAttr(":imagealignshape", OxmlType.TrueFalseValue),
    ":color2": new OxmlAttr(":color2", OxmlType.StringValue),
    ":startarrow": new OxmlAttr(":startarrow", OxmlType.EnumValue, StrokeArrowValuesArray),
    ":startarrowwidth": new OxmlAttr(":startarrowwidth", OxmlType.EnumValue, StrokeArrowWidthValuesArray),
    ":startarrowlength": new OxmlAttr(":startarrowlength", OxmlType.EnumValue, StrokeArrowLengthValuesArray),
    ":endarrow": new OxmlAttr(":endarrow", OxmlType.EnumValue, StrokeArrowValuesArray),
    ":endarrowwidth": new OxmlAttr(":endarrowwidth", OxmlType.EnumValue, StrokeArrowWidthValuesArray),
    ":endarrowlength": new OxmlAttr(":endarrowlength", OxmlType.EnumValue, StrokeArrowLengthValuesArray),
    "o:href": new OxmlAttr("o:href", OxmlType.StringValue),
    "o:althref": new OxmlAttr("o:althref", OxmlType.StringValue),
    "o:title": new OxmlAttr("o:title", OxmlType.StringValue),
    "o:forcedash": new OxmlAttr("o:forcedash", OxmlType.TrueFalseValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":insetpen": new OxmlAttr(":insetpen", OxmlType.TrueFalseValue)
  };
  Fill._C = {
    "o:fill": OFillExtendedProperties
  };
  Fill._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, FillTypeValuesArray),
    ":on": new OxmlAttr(":on", OxmlType.TrueFalseValue),
    ":color": new OxmlAttr(":color", OxmlType.StringValue),
    ":opacity": new OxmlAttr(":opacity", OxmlType.StringValue),
    ":color2": new OxmlAttr(":color2", OxmlType.StringValue),
    ":src": new OxmlAttr(":src", OxmlType.StringValue),
    "o:href": new OxmlAttr("o:href", OxmlType.StringValue),
    "o:althref": new OxmlAttr("o:althref", OxmlType.StringValue),
    ":size": new OxmlAttr(":size", OxmlType.StringValue),
    ":origin": new OxmlAttr(":origin", OxmlType.StringValue),
    ":position": new OxmlAttr(":position", OxmlType.StringValue),
    ":aspect": new OxmlAttr(":aspect", OxmlType.EnumValue, ImageAspectValuesArray),
    ":colors": new OxmlAttr(":colors", OxmlType.StringValue),
    ":angle": new OxmlAttr(":angle", OxmlType.DecimalValue),
    ":alignshape": new OxmlAttr(":alignshape", OxmlType.TrueFalseValue),
    ":focus": new OxmlAttr(":focus", OxmlType.StringValue),
    ":focussize": new OxmlAttr(":focussize", OxmlType.StringValue),
    ":focusposition": new OxmlAttr(":focusposition", OxmlType.StringValue),
    ":method": new OxmlAttr(":method", OxmlType.EnumValue, FillMethodValuesArray),
    "o:detectmouseclick": new OxmlAttr("o:detectmouseclick", OxmlType.TrueFalseValue),
    "o:title": new OxmlAttr("o:title", OxmlType.StringValue),
    "o:opacity2": new OxmlAttr("o:opacity2", OxmlType.StringValue),
    ":recolor": new OxmlAttr(":recolor", OxmlType.TrueFalseValue),
    ":rotate": new OxmlAttr(":rotate", OxmlType.TrueFalseValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ShapeHandles._C = {
    "v:h": ShapeHandle
  };
  Formulas._C = {
    "v:f": Formula
  };
  Path._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":v": new OxmlAttr(":v", OxmlType.StringValue),
    ":limo": new OxmlAttr(":limo", OxmlType.StringValue),
    ":textboxrect": new OxmlAttr(":textboxrect", OxmlType.StringValue),
    ":fillok": new OxmlAttr(":fillok", OxmlType.TrueFalseValue),
    ":strokeok": new OxmlAttr(":strokeok", OxmlType.TrueFalseValue),
    ":shadowok": new OxmlAttr(":shadowok", OxmlType.TrueFalseValue),
    ":arrowok": new OxmlAttr(":arrowok", OxmlType.TrueFalseValue),
    ":gradientshapeok": new OxmlAttr(":gradientshapeok", OxmlType.TrueFalseValue),
    ":textpathok": new OxmlAttr(":textpathok", OxmlType.TrueFalseValue),
    ":insetpenok": new OxmlAttr(":insetpenok", OxmlType.TrueFalseValue),
    "o:connecttype": new OxmlAttr("o:connecttype", OxmlType.EnumValue, ConnectValuesArray),
    "o:connectlocs": new OxmlAttr("o:connectlocs", OxmlType.StringValue),
    "o:connectangles": new OxmlAttr("o:connectangles", OxmlType.StringValue),
    "o:extrusionok": new OxmlAttr("o:extrusionok", OxmlType.TrueFalseValue)
  };
  return {
    prefix: "v",
    xmlns: "urn:schemas-microsoft-com:vml"
  };
}
export {
  Arc,
  Background,
  Curve,
  EditAsValues,
  EditAsValuesArray,
  ExtensionHandlingBehaviorValues,
  ExtensionHandlingBehaviorValuesArray,
  Fill,
  FillMethodValues,
  FillMethodValuesArray,
  FillTypeValues,
  FillTypeValuesArray,
  Formula,
  Formulas,
  Group,
  ImageAspectValues,
  ImageAspectValuesArray,
  ImageData,
  ImageFile,
  Line,
  Oval,
  Path,
  PolyLine,
  Rectangle,
  RoundRectangle,
  Shadow,
  ShadowValues,
  ShadowValuesArray,
  Shape,
  ShapeHandle,
  ShapeHandles,
  Shapetype,
  Stroke,
  StrokeArrowLengthValues,
  StrokeArrowLengthValuesArray,
  StrokeArrowValues,
  StrokeArrowValuesArray,
  StrokeArrowWidthValues,
  StrokeArrowWidthValuesArray,
  StrokeEndCapValues,
  StrokeEndCapValuesArray,
  StrokeFillTypeValues,
  StrokeFillTypeValuesArray,
  StrokeJoinStyleValues,
  StrokeJoinStyleValuesArray,
  StrokeLineStyleValues,
  StrokeLineStyleValuesArray,
  TextBox,
  TextPath,
  initVmlNamespace
};
