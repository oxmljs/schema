import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { LineCapValuesArray } from "../../../Drawing";
import { CompoundLineValuesArray } from "../../../Drawing";
import { PenAlignmentValuesArray } from "../../../Drawing";
import { BlipCompressionValuesArray } from "../../../Drawing";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { FontCollectionIndexValuesArray } from "../../../Drawing";
import { TextVerticalOverflowValuesArray } from "../../../Drawing";
import { TextHorizontalOverflowValuesArray } from "../../../Drawing";
import { TextVerticalValuesArray } from "../../../Drawing";
import { TextWrappingValuesArray } from "../../../Drawing";
import { TextAnchoringTypeValuesArray } from "../../../Drawing";
import { TextAlignmentTypeValuesArray } from "../../../Drawing";
import { TextFontAlignmentValuesArray } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { PresetDash as APresetDash } from "../../../Drawing";
import { CustomDash as ACustomDash } from "../../../Drawing";
import { Round as ARound } from "../../../Drawing";
import { LineJoinBevel as ALineJoinBevel } from "../../../Drawing";
import { Miter as AMiter } from "../../../Drawing";
import { HeadEnd as AHeadEnd } from "../../../Drawing";
import { TailEnd as ATailEnd } from "../../../Drawing";
import { LinePropertiesExtensionList as ALinePropertiesExtensionList } from "../../../Drawing";
import { GroupShapeLocks as AGroupShapeLocks } from "../../../Drawing";
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from "../../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../../Drawing";
import { TransformGroup as ATransformGroup } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { ExtensionList as AExtensionList } from "../../../Drawing";
import { Blip as ABlip } from "../../../Drawing";
import { SourceRectangle as ASourceRectangle } from "../../../Drawing";
import { Tile as ATile } from "../../../Drawing";
import { Stretch as AStretch } from "../../../Drawing";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../../Drawing";
import { HslColor as AHslColor } from "../../../Drawing";
import { SystemColor as ASystemColor } from "../../../Drawing";
import { SchemeColor as ASchemeColor } from "../../../Drawing";
import { PresetColor as APresetColor } from "../../../Drawing";
import { Transform2D as ATransform2D } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
import { Outline as AOutline } from "../../../Drawing";
import { Shape3DType as AShape3DType } from "../../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../../Drawing";
import { PresetTextWrap as APresetTextWrap } from "../../../Drawing";
import { NoAutoFit as ANoAutoFit } from "../../../Drawing";
import { NormalAutoFit as ANormalAutoFit } from "../../../Drawing";
import { ShapeAutoFit as AShapeAutoFit } from "../../../Drawing";
import { FlatText as AFlatText } from "../../../Drawing";
import { LineSpacing as ALineSpacing } from "../../../Drawing";
import { SpaceBefore as ASpaceBefore } from "../../../Drawing";
import { SpaceAfter as ASpaceAfter } from "../../../Drawing";
import { BulletColorText as ABulletColorText } from "../../../Drawing";
import { BulletColor as ABulletColor } from "../../../Drawing";
import { BulletSizeText as ABulletSizeText } from "../../../Drawing";
import { BulletSizePercentage as ABulletSizePercentage } from "../../../Drawing";
import { BulletSizePoints as ABulletSizePoints } from "../../../Drawing";
import { BulletFontText as ABulletFontText } from "../../../Drawing";
import { BulletFont as ABulletFont } from "../../../Drawing";
import { NoBullet as ANoBullet } from "../../../Drawing";
import { AutoNumberedBullet as AAutoNumberedBullet } from "../../../Drawing";
import { CharacterBullet as ACharacterBullet } from "../../../Drawing";
import { PictureBullet as APictureBullet } from "../../../Drawing";
import { TabStopList as ATabStopList } from "../../../Drawing";
import { DefaultRunProperties as ADefaultRunProperties } from "../../../Drawing";
import { Offset as AOffset } from "../../../Drawing";
import { Extents as AExtents } from "../../../Drawing";
var ResourceLinkage = /* @__PURE__ */ ((ResourceLinkage2) => {
  ResourceLinkage2["Embed"] = "embed";
  ResourceLinkage2["Link"] = "link";
  ResourceLinkage2["LinkAndEmbed"] = "linkAndEmbed";
  return ResourceLinkage2;
})(ResourceLinkage || {});
const ResourceLinkageArray = [
  "embed" /* Embed */,
  "link" /* Link */,
  "linkAndEmbed" /* LinkAndEmbed */
];
var DetachConnection = /* @__PURE__ */ ((DetachConnection2) => {
  DetachConnection2["Start"] = "start";
  DetachConnection2["End"] = "end";
  DetachConnection2["Both"] = "both";
  return DetachConnection2;
})(DetachConnection || {});
const DetachConnectionArray = [
  "start" /* Start */,
  "end" /* End */,
  "both" /* Both */
];
class TextCharRangeContext extends OxmlLeafElement {
  static _Q = "oac:context";
  static _A = [":len", ":hash"];
  /** len. Serialized as `:len` */
  get len() {
    return this._g(":len");
  }
  set len(v) {
    this._s(":len", v);
  }
  /** hash. Serialized as `:hash` */
  get hash() {
    return this._g(":hash");
  }
  set hash(v) {
    this._s(":hash", v);
  }
}
class ResetHyperlinkProps extends OxmlCompositeElement {
  static _Q = "oac:hlink";
  /** Returns HlinkClickEmpty. */
  get hlinkClickEmpty() {
    return this._f(HlinkClickEmpty);
  }
  /** Returns HlinkHoverEmpty. */
  get hlinkHoverEmpty() {
    return this._f(HlinkHoverEmpty);
  }
}
class ModifyHyperlinkProps extends OxmlCompositeElement {
  static _Q = "oac:hlink";
  /** Returns HlinkClickHyperlinkProps. */
  get hlinkClickHyperlinkProps() {
    return this._f(HlinkClickHyperlinkProps);
  }
  /** Returns HlinkHoverHyperlinkProps. */
  get hlinkHoverHyperlinkProps() {
    return this._f(HlinkHoverHyperlinkProps);
  }
}
class OpenXmlHyperlinkPropsElement extends OxmlCompositeElement {
  static _A = [":source", ":action", ":tgtFrame", ":tooltip", ":highlightClick", ":endSnd", ":sndName"];
  /** source. Serialized as `:source` */
  get source() {
    return this._g(":source");
  }
  set source(v) {
    this._s(":source", v);
  }
  /** action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
  /** tgtFrame. Serialized as `:tgtFrame` */
  get tgtFrame() {
    return this._g(":tgtFrame");
  }
  set tgtFrame(v) {
    this._s(":tgtFrame", v);
  }
  /** tooltip. Serialized as `:tooltip` */
  get tooltip() {
    return this._g(":tooltip");
  }
  set tooltip(v) {
    this._s(":tooltip", v);
  }
  /** highlightClick. Serialized as `:highlightClick` */
  get highlightClick() {
    return this._g(":highlightClick");
  }
  set highlightClick(v) {
    this._s(":highlightClick", v);
  }
  /** endSnd. Serialized as `:endSnd` */
  get endSnd() {
    return this._g(":endSnd");
  }
  set endSnd(v) {
    this._s(":endSnd", v);
  }
  /** sndName. Serialized as `:sndName` */
  get sndName() {
    return this._g(":sndName");
  }
  set sndName(v) {
    this._s(":sndName", v);
  }
  /** Returns SndDataImgData. */
  get sndDataImgData() {
    return this._f(SndDataImgData);
  }
}
class HlinkHoverHyperlinkProps extends OpenXmlHyperlinkPropsElement {
  static _Q = "oac:hlinkHover";
}
class HlinkClickHyperlinkProps extends OpenXmlHyperlinkPropsElement {
  static _Q = "oac:hlinkClick";
}
class ModifyNonVisualInkProps extends OxmlLeafElement {
  static _Q = "oac:cNvInkPr";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType", ":isComment"];
  /** noGrp. Serialized as `:noGrp` */
  get noGrp() {
    return this._g(":noGrp");
  }
  set noGrp(v) {
    this._s(":noGrp", v);
  }
  /** noSelect. Serialized as `:noSelect` */
  get noSelect() {
    return this._g(":noSelect");
  }
  set noSelect(v) {
    this._s(":noSelect", v);
  }
  /** noRot. Serialized as `:noRot` */
  get noRot() {
    return this._g(":noRot");
  }
  set noRot(v) {
    this._s(":noRot", v);
  }
  /** noChangeAspect. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** noMove. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** noResize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** noEditPoints. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** noAdjustHandles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** noChangeShapeType. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** isComment. Serialized as `:isComment` */
  get isComment() {
    return this._g(":isComment");
  }
  set isComment(v) {
    this._s(":isComment", v);
  }
}
class LinePropertiesType extends OxmlCompositeElement {
  static _Q = "oac:lineProps";
  static _A = [":w", ":cap", ":cmpd", ":algn"];
  /** line width. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** line cap. Serialized as `:cap` */
  get capType() {
    return this._g(":cap");
  }
  set capType(v) {
    this._s(":cap", v);
  }
  /** compound line type. Serialized as `:cmpd` */
  get compoundLineType() {
    return this._g(":cmpd");
  }
  set compoundLineType(v) {
    this._s(":cmpd", v);
  }
  /** pen alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
}
class SVGBlipMonikerList extends OxmlCompositeElement {
  static _Q = "oac:svgBlipMkLst";
}
class BoundRect extends OxmlLeafElement {
  static _Q = "oac:bounds";
  static _A = [":l", ":t", ":r", ":b"];
  /** l. Serialized as `:l` */
  get l() {
    return this._g(":l");
  }
  set l(v) {
    this._s(":l", v);
  }
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
  /** r. Serialized as `:r` */
  get r() {
    return this._g(":r");
  }
  set r(v) {
    this._s(":r", v);
  }
  /** b. Serialized as `:b` */
  get b() {
    return this._g(":b");
  }
  set b(v) {
    this._s(":b", v);
  }
}
class ResetNonVisualPictureProps extends OxmlCompositeElement {
  static _Q = "oac:cNvPicPr";
  /** Returns LfPrEmpty. */
  get lfPrEmpty() {
    return this._f(LfPrEmpty);
  }
}
class ModifyNonVisualPictureProps extends OxmlLeafElement {
  static _Q = "oac:cNvPicPr";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType", ":noCrop", ":preferRelativeResize"];
  /** noGrp. Serialized as `:noGrp` */
  get noGrp() {
    return this._g(":noGrp");
  }
  set noGrp(v) {
    this._s(":noGrp", v);
  }
  /** noSelect. Serialized as `:noSelect` */
  get noSelect() {
    return this._g(":noSelect");
  }
  set noSelect(v) {
    this._s(":noSelect", v);
  }
  /** noRot. Serialized as `:noRot` */
  get noRot() {
    return this._g(":noRot");
  }
  set noRot(v) {
    this._s(":noRot", v);
  }
  /** noChangeAspect. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** noMove. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** noResize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** noEditPoints. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** noAdjustHandles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** noChangeShapeType. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** noCrop. Serialized as `:noCrop` */
  get noCrop() {
    return this._g(":noCrop");
  }
  set noCrop(v) {
    this._s(":noCrop", v);
  }
  /** preferRelativeResize. Serialized as `:preferRelativeResize` */
  get preferRelativeResize() {
    return this._g(":preferRelativeResize");
  }
  set preferRelativeResize(v) {
    this._s(":preferRelativeResize", v);
  }
}
class CompressPictureProps extends OxmlLeafElement {
  static _Q = "oac:compressPicPr";
  static _A = [":removeCrop", ":useLocalDpi", ":cstate"];
  /** removeCrop. Serialized as `:removeCrop` */
  get removeCrop() {
    return this._g(":removeCrop");
  }
  set removeCrop(v) {
    this._s(":removeCrop", v);
  }
  /** useLocalDpi. Serialized as `:useLocalDpi` */
  get useLocalDpi() {
    return this._g(":useLocalDpi");
  }
  set useLocalDpi(v) {
    this._s(":useLocalDpi", v);
  }
  /** cstate. Serialized as `:cstate` */
  get cstate() {
    return this._g(":cstate");
  }
  set cstate(v) {
    this._s(":cstate", v);
  }
}
class ResetNonVisualConnectorProps extends OxmlCompositeElement {
  static _Q = "oac:cNvCxnSpPr";
  /** Returns StCxnEmpty. */
  get stCxnEmpty() {
    return this._f(StCxnEmpty);
  }
  /** Returns EndCxnEmpty. */
  get endCxnEmpty() {
    return this._f(EndCxnEmpty);
  }
  /** Returns NoGrpEmpty. */
  get noGrpEmpty() {
    return this._f(NoGrpEmpty);
  }
  /** Returns NoSelectEmpty. */
  get noSelectEmpty() {
    return this._f(NoSelectEmpty);
  }
  /** Returns NoRotEmpty. */
  get noRotEmpty() {
    return this._f(NoRotEmpty);
  }
  /** Returns NoChangeAspectEmpty. */
  get noChangeAspectEmpty() {
    return this._f(NoChangeAspectEmpty);
  }
  /** Returns NoMoveEmpty. */
  get noMoveEmpty() {
    return this._f(NoMoveEmpty);
  }
  /** Returns NoResizeEmpty. */
  get noResizeEmpty() {
    return this._f(NoResizeEmpty);
  }
  /** Returns NoEditPointsEmpty. */
  get noEditPointsEmpty() {
    return this._f(NoEditPointsEmpty);
  }
  /** Returns NoAdjustHandlesEmpty. */
  get noAdjustHandlesEmpty() {
    return this._f(NoAdjustHandlesEmpty);
  }
  /** Returns NoChangeArrowheadsEmpty. */
  get noChangeArrowheadsEmpty() {
    return this._f(NoChangeArrowheadsEmpty);
  }
  /** Returns NoChangeShapeTypeEmpty. */
  get noChangeShapeTypeEmpty() {
    return this._f(NoChangeShapeTypeEmpty);
  }
}
class ModifyNonVisualConnectorProps extends OxmlCompositeElement {
  static _Q = "oac:cNvCxnSpPr";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType"];
  /** noGrp. Serialized as `:noGrp` */
  get noGrp() {
    return this._g(":noGrp");
  }
  set noGrp(v) {
    this._s(":noGrp", v);
  }
  /** noSelect. Serialized as `:noSelect` */
  get noSelect() {
    return this._g(":noSelect");
  }
  set noSelect(v) {
    this._s(":noSelect", v);
  }
  /** noRot. Serialized as `:noRot` */
  get noRot() {
    return this._g(":noRot");
  }
  set noRot(v) {
    this._s(":noRot", v);
  }
  /** noChangeAspect. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** noMove. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** noResize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** noEditPoints. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** noAdjustHandles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** noChangeShapeType. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** Returns StCxnConnection. */
  get stCxnConnection() {
    return this._f(StCxnConnection);
  }
  /** Returns EndCxnConnection. */
  get endCxnConnection() {
    return this._f(EndCxnConnection);
  }
}
class ConnectionType extends OxmlLeafElement {
  static _A = [":id", ":idx"];
  /** Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
}
class EndCxnConnection extends ConnectionType {
  static _Q = "oac:endCxn";
}
class StCxnConnection extends ConnectionType {
  static _Q = "oac:stCxn";
}
class ModifyNonVisualGraphicFrameProps extends OxmlLeafElement {
  static _Q = "oac:cNvGraphicFramePr";
  static _A = [":noGrp", ":noDrilldown", ":noSelect", ":noChangeAspect", ":noMove", ":noResize"];
  /** noGrp. Serialized as `:noGrp` */
  get noGrp() {
    return this._g(":noGrp");
  }
  set noGrp(v) {
    this._s(":noGrp", v);
  }
  /** noDrilldown. Serialized as `:noDrilldown` */
  get noDrilldown() {
    return this._g(":noDrilldown");
  }
  set noDrilldown(v) {
    this._s(":noDrilldown", v);
  }
  /** noSelect. Serialized as `:noSelect` */
  get noSelect() {
    return this._g(":noSelect");
  }
  set noSelect(v) {
    this._s(":noSelect", v);
  }
  /** noChangeAspect. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** noMove. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** noResize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
}
class NonVisualGroupDrawingShapeProps extends OxmlCompositeElement {
  static _Q = "oac:cNvGrpSpPr";
  /** Returns AGroupShapeLocks. */
  get groupShapeLocks() {
    return this._f(AGroupShapeLocks);
  }
  /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
  get nonVisualGroupDrawingShapePropsExtensionList() {
    return this._f(ANonVisualGroupDrawingShapePropsExtensionList);
  }
}
class NonVisualDrawingProps extends OxmlCompositeElement {
  static _Q = "oac:cNvPr";
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
class ResetGroupShapeProperties extends OxmlCompositeElement {
  static _Q = "oac:grpSpPr";
  /** Returns XfrmEmpty. */
  get xfrmEmpty() {
    return this._f(XfrmEmpty);
  }
  /** Returns FillEmpty. */
  get fillEmpty() {
    return this._f(FillEmpty);
  }
  /** Returns EffectEmpty. */
  get effectEmpty() {
    return this._f(EffectEmpty);
  }
  /** Returns Scene3dEmpty. */
  get scene3dEmpty() {
    return this._f(Scene3dEmpty);
  }
  /** Returns ExtLstEmpty. */
  get extLstEmpty() {
    return this._f(ExtLstEmpty);
  }
  /** Returns BwModeEmpty. */
  get bwModeEmpty() {
    return this._f(BwModeEmpty);
  }
}
class GroupShapeProperties extends OxmlCompositeElement {
  static _Q = "oac:grpSpPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Grouped Objects. */
  get transformGroup() {
    return this._f(ATransformGroup);
  }
}
class ModifyNonVisualGroupDrawingShapeProps extends OxmlLeafElement {
  static _Q = "oac:cNvGrpSpPr";
  static _A = [":noGrp", ":noUngrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize"];
  /** noGrp. Serialized as `:noGrp` */
  get noGrp() {
    return this._g(":noGrp");
  }
  set noGrp(v) {
    this._s(":noGrp", v);
  }
  /** noUngrp. Serialized as `:noUngrp` */
  get noUngrp() {
    return this._g(":noUngrp");
  }
  set noUngrp(v) {
    this._s(":noUngrp", v);
  }
  /** noSelect. Serialized as `:noSelect` */
  get noSelect() {
    return this._g(":noSelect");
  }
  set noSelect(v) {
    this._s(":noSelect", v);
  }
  /** noRot. Serialized as `:noRot` */
  get noRot() {
    return this._g(":noRot");
  }
  set noRot(v) {
    this._s(":noRot", v);
  }
  /** noChangeAspect. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** noMove. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** noResize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
}
class ResetBlipFillProperties extends OxmlCompositeElement {
  static _Q = "oac:blipFill";
  /** Returns SrcRectEmpty. */
  get srcRectEmpty() {
    return this._f(SrcRectEmpty);
  }
  /** Returns FillModeEmpty. */
  get fillModeEmpty() {
    return this._f(FillModeEmpty);
  }
  /** Returns DpiEmpty. */
  get dpiEmpty() {
    return this._f(DpiEmpty);
  }
  /** Returns RotWithShapeEmpty. */
  get rotWithShapeEmpty() {
    return this._f(RotWithShapeEmpty);
  }
}
class OpenXmlRelativeRectPropsElement extends OxmlLeafElement {
  static _A = [":l", ":t", ":r", ":b"];
  /** l. Serialized as `:l` */
  get l() {
    return this._g(":l");
  }
  set l(v) {
    this._s(":l", v);
  }
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
  /** r. Serialized as `:r` */
  get r() {
    return this._g(":r");
  }
  set r(v) {
    this._s(":r", v);
  }
  /** b. Serialized as `:b` */
  get b() {
    return this._g(":b");
  }
  set b(v) {
    this._s(":b", v);
  }
}
class SrcRectRelativeRectProps extends OpenXmlRelativeRectPropsElement {
  static _Q = "oac:srcRect";
}
class FillRectRelativeRectProps extends OpenXmlRelativeRectPropsElement {
  static _Q = "oac:fillRect";
}
class BlipFillProperties extends OxmlCompositeElement {
  static _Q = "oac:blipFill";
  static _A = [":dpi", ":rotWithShape"];
  /** DPI Setting. Serialized as `:dpi` */
  get dpi() {
    return this._g(":dpi");
  }
  set dpi(v) {
    this._s(":dpi", v);
  }
  /** Rotate With Shape. Serialized as `:rotWithShape` */
  get rotateWithShape() {
    return this._g(":rotWithShape");
  }
  set rotateWithShape(v) {
    this._s(":rotWithShape", v);
  }
  /** Returns ABlip. */
  get blip() {
    return this._f(ABlip);
  }
  /** Source Rectangle. */
  get sourceRectangle() {
    return this._f(ASourceRectangle);
  }
}
class UseBoundsXsdboolean extends OxmlLeafTextElement {
  static _Q = "oac:useBounds";
}
class ResetXsdboolean extends OxmlLeafTextElement {
  static _Q = "oac:reset";
}
class ModifyShapeStyleProps extends OxmlCompositeElement {
  static _Q = "oac:style";
  /** Returns LnRefStyleMatrixReference. */
  get lnRefStyleMatrixReference() {
    return this._f(LnRefStyleMatrixReference);
  }
  /** Returns FillRefStyleMatrixReference. */
  get fillRefStyleMatrixReference() {
    return this._f(FillRefStyleMatrixReference);
  }
  /** Returns EffectRefStyleMatrixReference. */
  get effectRefStyleMatrixReference() {
    return this._f(EffectRefStyleMatrixReference);
  }
  /** Returns FontReference. */
  get fontReference() {
    return this._f(FontReference);
  }
}
class FontReference extends OxmlCompositeElement {
  static _Q = "oac:fontRef";
  static _A = [":idx"];
  /** Identifier. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class StyleMatrixReferenceType extends OxmlCompositeElement {
  static _A = [":idx"];
  /** Style Matrix Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class EffectRefStyleMatrixReference extends StyleMatrixReferenceType {
  static _Q = "oac:effectRef";
}
class FillRefStyleMatrixReference extends StyleMatrixReferenceType {
  static _Q = "oac:fillRef";
}
class LnRefStyleMatrixReference extends StyleMatrixReferenceType {
  static _Q = "oac:lnRef";
}
class ResetShapeProperties extends OxmlCompositeElement {
  static _Q = "oac:spPr";
  /** Returns XfrmEmpty. */
  get xfrmEmpty() {
    return this._f(XfrmEmpty);
  }
  /** Returns GeomEmpty. */
  get geomEmpty() {
    return this._f(GeomEmpty);
  }
  /** Returns FillEmpty. */
  get fillEmpty() {
    return this._f(FillEmpty);
  }
  /** Returns LnEmpty. */
  get lnEmpty() {
    return this._f(LnEmpty);
  }
  /** Returns EffectEmpty. */
  get effectEmpty() {
    return this._f(EffectEmpty);
  }
  /** Returns Scene3dEmpty. */
  get scene3dEmpty() {
    return this._f(Scene3dEmpty);
  }
  /** Returns Sp3dEmpty. */
  get sp3dEmpty() {
    return this._f(Sp3dEmpty);
  }
  /** Returns ExtLstEmpty. */
  get extLstEmpty() {
    return this._f(ExtLstEmpty);
  }
  /** Returns BwModeEmpty. */
  get bwModeEmpty() {
    return this._f(BwModeEmpty);
  }
}
class OpenXmlEmptyElement extends OxmlLeafElement {
}
class HlinkHoverEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:hlinkHover";
}
class HlinkClickEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:hlinkClick";
}
class LfPrEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:lfPr";
}
class NoChangeShapeTypeEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noChangeShapeType";
}
class NoChangeArrowheadsEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noChangeArrowheads";
}
class NoAdjustHandlesEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noAdjustHandles";
}
class NoEditPointsEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noEditPoints";
}
class NoResizeEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noResize";
}
class NoMoveEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noMove";
}
class NoChangeAspectEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noChangeAspect";
}
class NoRotEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noRot";
}
class NoSelectEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noSelect";
}
class NoGrpEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:noGrp";
}
class EndCxnEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:endCxn";
}
class StCxnEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:stCxn";
}
class RotWithShapeEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:rotWithShape";
}
class DpiEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:dpi";
}
class FillModeEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:fillMode";
}
class SrcRectEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:srcRect";
}
class BwModeEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:bwMode";
}
class ExtLstEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:extLst";
}
class Sp3dEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:sp3d";
}
class Scene3dEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:scene3d";
}
class EffectEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:effect";
}
class LnEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:ln";
}
class FillEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:fill";
}
class GeomEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:geom";
}
class XfrmEmpty extends OpenXmlEmptyElement {
  static _Q = "oac:xfrm";
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "oac:spPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Individual Objects. */
  get transform2D() {
    return this._f(ATransform2D);
  }
}
class ShapePropsMonikerList extends OxmlCompositeElement {
  static _Q = "oac:spMkLst";
}
class ModifyNonVisualDrawingShapeProps extends OxmlLeafElement {
  static _Q = "oac:cNvSpPr";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType", ":noTextEdit", ":txBox"];
  /** noGrp. Serialized as `:noGrp` */
  get noGrp() {
    return this._g(":noGrp");
  }
  set noGrp(v) {
    this._s(":noGrp", v);
  }
  /** noSelect. Serialized as `:noSelect` */
  get noSelect() {
    return this._g(":noSelect");
  }
  set noSelect(v) {
    this._s(":noSelect", v);
  }
  /** noRot. Serialized as `:noRot` */
  get noRot() {
    return this._g(":noRot");
  }
  set noRot(v) {
    this._s(":noRot", v);
  }
  /** noChangeAspect. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** noMove. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** noResize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** noEditPoints. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** noAdjustHandles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** noChangeShapeType. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** noTextEdit. Serialized as `:noTextEdit` */
  get noTextEdit() {
    return this._g(":noTextEdit");
  }
  set noTextEdit(v) {
    this._s(":noTextEdit", v);
  }
  /** txBox. Serialized as `:txBox` */
  get txBox() {
    return this._g(":txBox");
  }
  set txBox(v) {
    this._s(":txBox", v);
  }
}
class TextBodyProperties extends OxmlCompositeElement {
  static _Q = "oac:bodyPr";
  static _A = [":rot", ":spcFirstLastPara", ":vertOverflow", ":horzOverflow", ":vert", ":wrap", ":lIns", ":tIns", ":rIns", ":bIns", ":numCol", ":spcCol", ":rtlCol", ":fromWordArt", ":anchor", ":anchorCtr", ":forceAA", ":upright", ":compatLnSpc"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
  get useParagraphSpacing() {
    return this._g(":spcFirstLastPara");
  }
  set useParagraphSpacing(v) {
    this._s(":spcFirstLastPara", v);
  }
  /** Text Vertical Overflow. Serialized as `:vertOverflow` */
  get verticalOverflow() {
    return this._g(":vertOverflow");
  }
  set verticalOverflow(v) {
    this._s(":vertOverflow", v);
  }
  /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
  get horizontalOverflow() {
    return this._g(":horzOverflow");
  }
  set horizontalOverflow(v) {
    this._s(":horzOverflow", v);
  }
  /** Vertical Text. Serialized as `:vert` */
  get vertical() {
    return this._g(":vert");
  }
  set vertical(v) {
    this._s(":vert", v);
  }
  /** Text Wrapping Type. Serialized as `:wrap` */
  get wrap() {
    return this._g(":wrap");
  }
  set wrap(v) {
    this._s(":wrap", v);
  }
  /** Left Inset. Serialized as `:lIns` */
  get leftInset() {
    return this._g(":lIns");
  }
  set leftInset(v) {
    this._s(":lIns", v);
  }
  /** Top Inset. Serialized as `:tIns` */
  get topInset() {
    return this._g(":tIns");
  }
  set topInset(v) {
    this._s(":tIns", v);
  }
  /** Right Inset. Serialized as `:rIns` */
  get rightInset() {
    return this._g(":rIns");
  }
  set rightInset(v) {
    this._s(":rIns", v);
  }
  /** Bottom Inset. Serialized as `:bIns` */
  get bottomInset() {
    return this._g(":bIns");
  }
  set bottomInset(v) {
    this._s(":bIns", v);
  }
  /** Number of Columns. Serialized as `:numCol` */
  get columnCount() {
    return this._g(":numCol");
  }
  set columnCount(v) {
    this._s(":numCol", v);
  }
  /** Space Between Columns. Serialized as `:spcCol` */
  get columnSpacing() {
    return this._g(":spcCol");
  }
  set columnSpacing(v) {
    this._s(":spcCol", v);
  }
  /** Columns Right-To-Left. Serialized as `:rtlCol` */
  get rightToLeftColumns() {
    return this._g(":rtlCol");
  }
  set rightToLeftColumns(v) {
    this._s(":rtlCol", v);
  }
  /** From WordArt. Serialized as `:fromWordArt` */
  get fromWordArt() {
    return this._g(":fromWordArt");
  }
  set fromWordArt(v) {
    this._s(":fromWordArt", v);
  }
  /** Anchor. Serialized as `:anchor` */
  get anchor() {
    return this._g(":anchor");
  }
  set anchor(v) {
    this._s(":anchor", v);
  }
  /** Anchor Center. Serialized as `:anchorCtr` */
  get anchorCenter() {
    return this._g(":anchorCtr");
  }
  set anchorCenter(v) {
    this._s(":anchorCtr", v);
  }
  /** Force Anti-Alias. Serialized as `:forceAA` */
  get forceAntiAlias() {
    return this._g(":forceAA");
  }
  set forceAntiAlias(v) {
    this._s(":forceAA", v);
  }
  /** Text Upright. Serialized as `:upright` */
  get upRight() {
    return this._g(":upright");
  }
  set upRight(v) {
    this._s(":upright", v);
  }
  /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
  get compatibleLineSpacing() {
    return this._g(":compatLnSpc");
  }
  set compatibleLineSpacing(v) {
    this._s(":compatLnSpc", v);
  }
  /** Preset Text Shape. */
  get presetTextWrap() {
    return this._f(APresetTextWrap);
  }
}
class TextParagraphPropertiesType extends OxmlCompositeElement {
  static _Q = "oac:pPr";
  static _A = [":marL", ":marR", ":lvl", ":indent", ":algn", ":defTabSz", ":rtl", ":eaLnBrk", ":fontAlgn", ":latinLnBrk", ":hangingPunct"];
  /** Left Margin. Serialized as `:marL` */
  get leftMargin() {
    return this._g(":marL");
  }
  set leftMargin(v) {
    this._s(":marL", v);
  }
  /** Right Margin. Serialized as `:marR` */
  get rightMargin() {
    return this._g(":marR");
  }
  set rightMargin(v) {
    this._s(":marR", v);
  }
  /** Level. Serialized as `:lvl` */
  get level() {
    return this._g(":lvl");
  }
  set level(v) {
    this._s(":lvl", v);
  }
  /** Indent. Serialized as `:indent` */
  get indent() {
    return this._g(":indent");
  }
  set indent(v) {
    this._s(":indent", v);
  }
  /** Alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
  /** Default Tab Size. Serialized as `:defTabSz` */
  get defaultTabSize() {
    return this._g(":defTabSz");
  }
  set defaultTabSize(v) {
    this._s(":defTabSz", v);
  }
  /** Right To Left. Serialized as `:rtl` */
  get rightToLeft() {
    return this._g(":rtl");
  }
  set rightToLeft(v) {
    this._s(":rtl", v);
  }
  /** East Asian Line Break. Serialized as `:eaLnBrk` */
  get eastAsianLineBreak() {
    return this._g(":eaLnBrk");
  }
  set eastAsianLineBreak(v) {
    this._s(":eaLnBrk", v);
  }
  /** Font Alignment. Serialized as `:fontAlgn` */
  get fontAlignment() {
    return this._g(":fontAlgn");
  }
  set fontAlignment(v) {
    this._s(":fontAlgn", v);
  }
  /** Latin Line Break. Serialized as `:latinLnBrk` */
  get latinLineBreak() {
    return this._g(":latinLnBrk");
  }
  set latinLineBreak(v) {
    this._s(":latinLnBrk", v);
  }
  /** Hanging Punctuation. Serialized as `:hangingPunct` */
  get height() {
    return this._g(":hangingPunct");
  }
  set height(v) {
    this._s(":hangingPunct", v);
  }
  /** Line Spacing. */
  get lineSpacing() {
    return this._f(ALineSpacing);
  }
  /** Space Before. */
  get spaceBefore() {
    return this._f(ASpaceBefore);
  }
  /** Space After. */
  get spaceAfter() {
    return this._f(ASpaceAfter);
  }
}
class Point2DType extends OxmlLeafElement {
  static _Q = "oac:off";
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
class ModifyTransformProps extends OxmlLeafElement {
  static _Q = "oac:xfrm";
  static _A = [":x", ":y", ":cx", ":cy", ":rot", ":flipH", ":flipV"];
  /** x. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** y. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
  /** cx. Serialized as `:cx` */
  get cx() {
    return this._g(":cx");
  }
  set cx(v) {
    this._s(":cx", v);
  }
  /** cy. Serialized as `:cy` */
  get cy() {
    return this._g(":cy");
  }
  set cy(v) {
    this._s(":cy", v);
  }
  /** rot. Serialized as `:rot` */
  get rot() {
    return this._g(":rot");
  }
  set rot(v) {
    this._s(":rot", v);
  }
  /** flipH. Serialized as `:flipH` */
  get flipH() {
    return this._g(":flipH");
  }
  set flipH(v) {
    this._s(":flipH", v);
  }
  /** flipV. Serialized as `:flipV` */
  get flipV() {
    return this._g(":flipV");
  }
  set flipV(v) {
    this._s(":flipV", v);
  }
}
class ModifyNonVisualDrawingProps extends OxmlLeafElement {
  static _Q = "oac:cNvPr";
  static _A = [":name", ":descr", ":hidden", ":title", ":decor", ":scriptLink"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** descr. Serialized as `:descr` */
  get descr() {
    return this._g(":descr");
  }
  set descr(v) {
    this._s(":descr", v);
  }
  /** hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** decor. Serialized as `:decor` */
  get decor() {
    return this._g(":decor");
  }
  set decor(v) {
    this._s(":decor", v);
  }
  /** scriptLink. Serialized as `:scriptLink` */
  get scriptLink() {
    return this._g(":scriptLink");
  }
  set scriptLink(v) {
    this._s(":scriptLink", v);
  }
}
class TableColumnMonikerList extends OxmlCompositeElement {
  static _Q = "oac:gridColMkLst";
}
class TableRowMonikerList extends OxmlCompositeElement {
  static _Q = "oac:trMkLst";
}
class TableCellMonikerList extends OxmlCompositeElement {
  static _Q = "oac:tcMkLst";
}
class TableMonikerList extends OxmlCompositeElement {
  static _Q = "oac:tblMkLst";
}
class DrawingSelectionStgList extends OxmlCompositeElement {
  static _Q = "oac:drSelLst";
}
class EditorSelectionStgList extends OxmlCompositeElement {
  static _Q = "oac:editorSelLst";
}
class ViewSelectionStgList extends OxmlCompositeElement {
  static _Q = "oac:viewSelLst";
}
class Model3DMonikerList extends OxmlCompositeElement {
  static _Q = "oac:model3DMkLst";
}
class HyperlinkMonikerList extends OxmlCompositeElement {
  static _Q = "oac:hlinkMkLst";
}
class TextCharRangeMonikerList extends OxmlCompositeElement {
  static _Q = "oac:txMkLst";
}
class TextBodyMonikerList extends OxmlCompositeElement {
  static _Q = "oac:txBodyMkLst";
}
class InkMonikerList extends OxmlCompositeElement {
  static _Q = "oac:inkMkLst";
}
class PictureMonikerList extends OxmlCompositeElement {
  static _Q = "oac:picMkLst";
}
class ConnectorMonikerList extends OxmlCompositeElement {
  static _Q = "oac:cxnSpMkLst";
}
class GraphicFrameMonikerList extends OxmlCompositeElement {
  static _Q = "oac:graphicFrameMkLst";
}
class ShapeMonikerList extends OxmlCompositeElement {
  static _Q = "oac:spMkLst";
}
class GraphicParentMonikerList extends OxmlCompositeElement {
  static _Q = "oac:graphicParentMkLst";
}
class DocumentContextMonikerList extends OxmlCompositeElement {
  static _Q = "oac:dcMkLst";
}
class ImgLink extends OxmlLeafElement {
  static _Q = "oac:imgLink";
  static _A = [":tgt"];
  /** tgt. Serialized as `:tgt` */
  get tgt() {
    return this._g(":tgt");
  }
  set tgt(v) {
    this._s(":tgt", v);
  }
}
class GroupCommand extends OxmlCompositeElement {
  static _Q = "oac:grpCmd";
  static _A = [":verId", ":preventRegroup", ":grpId"];
  /** verId. Serialized as `:verId` */
  get verId() {
    return this._g(":verId");
  }
  set verId(v) {
    this._s(":verId", v);
  }
  /** preventRegroup. Serialized as `:preventRegroup` */
  get preventRegroup() {
    return this._g(":preventRegroup");
  }
  set preventRegroup(v) {
    this._s(":preventRegroup", v);
  }
  /** grpId. Serialized as `:grpId` */
  get grpId() {
    return this._g(":grpId");
  }
  set grpId(v) {
    this._s(":grpId", v);
  }
  /** Returns DrawingMonikerList. */
  get drawingMonikerList() {
    return this._f(DrawingMonikerList);
  }
}
class TextBodyPackage extends OxmlLeafElement {
  static _Q = "oac:txBodyPkg";
}
class ResourceUrl extends OxmlLeafElement {
  static _Q = "oac:imgUrl";
  static _A = [":src", ":linkage"];
  /** src. Serialized as `:src` */
  get src() {
    return this._g(":src");
  }
  set src(v) {
    this._s(":src", v);
  }
  /** linkage. Serialized as `:linkage` */
  get linkage() {
    return this._g(":linkage");
  }
  set linkage(v) {
    this._s(":linkage", v);
  }
}
class OpenXmlImgDataElement extends OxmlLeafTextElement {
}
class SndDataImgData extends OpenXmlImgDataElement {
  static _Q = "oac:sndData";
}
class OrigImgDataImgData extends OpenXmlImgDataElement {
  static _Q = "oac:origImgData";
}
class ImgDataImgData extends OpenXmlImgDataElement {
  static _Q = "oac:imgData";
}
class OpenXmlDrawingElementMonikerListElement extends OxmlCompositeElement {
}
class DeTgtMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
  static _Q = "oac:deTgtMkLst";
}
class DeSrcMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
  static _Q = "oac:deSrcMkLst";
}
class DeMasterMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
  static _Q = "oac:deMasterMkLst";
}
class DeMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
  static _Q = "oac:deMkLst";
}
class DrawingElementPackage extends OxmlLeafElement {
  static _Q = "oac:dePkg";
}
class GroupShapeMonikerList extends OxmlCompositeElement {
  static _Q = "oac:grpSpMkLst";
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "oac:xfrm";
  static _A = [":rot", ":flipH", ":flipV"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Horizontal Flip. Serialized as `:flipH` */
  get horizontalFlip() {
    return this._g(":flipH");
  }
  set horizontalFlip(v) {
    this._s(":flipH", v);
  }
  /** Vertical Flip. Serialized as `:flipV` */
  get verticalFlip() {
    return this._g(":flipV");
  }
  set verticalFlip(v) {
    this._s(":flipV", v);
  }
  /** Offset. */
  get offset() {
    return this._f(AOffset);
  }
  /** Extents. */
  get extents() {
    return this._f(AExtents);
  }
}
class DrawingMonikerList extends OxmlCompositeElement {
  static _Q = "oac:dgMkLst";
}
class InkMoniker extends OxmlLeafElement {
  static _Q = "oac:inkMk";
  static _A = [":id", ":creationId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** creationId. Serialized as `:creationId` */
  get creationId() {
    return this._g(":creationId");
  }
  set creationId(v) {
    this._s(":creationId", v);
  }
}
class PictureMoniker extends OxmlLeafElement {
  static _Q = "oac:picMk";
  static _A = [":id", ":creationId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** creationId. Serialized as `:creationId` */
  get creationId() {
    return this._g(":creationId");
  }
  set creationId(v) {
    this._s(":creationId", v);
  }
}
class ConnectorMoniker extends OxmlLeafElement {
  static _Q = "oac:cxnSpMk";
  static _A = [":id", ":creationId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** creationId. Serialized as `:creationId` */
  get creationId() {
    return this._g(":creationId");
  }
  set creationId(v) {
    this._s(":creationId", v);
  }
}
class GraphicFrameMoniker extends OxmlLeafElement {
  static _Q = "oac:graphicFrameMk";
  static _A = [":id", ":creationId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** creationId. Serialized as `:creationId` */
  get creationId() {
    return this._g(":creationId");
  }
  set creationId(v) {
    this._s(":creationId", v);
  }
}
class GroupShapeMoniker extends OxmlLeafElement {
  static _Q = "oac:grpSpMk";
  static _A = [":id", ":creationId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** creationId. Serialized as `:creationId` */
  get creationId() {
    return this._g(":creationId");
  }
  set creationId(v) {
    this._s(":creationId", v);
  }
}
class ShapeMoniker extends OxmlLeafElement {
  static _Q = "oac:spMk";
  static _A = [":id", ":creationId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** creationId. Serialized as `:creationId` */
  get creationId() {
    return this._g(":creationId");
  }
  set creationId(v) {
    this._s(":creationId", v);
  }
}
function initOffice2016DrawingCommandNamespace() {
  TextCharRangeContext._D = {
    ":len": new OxmlAttr(":len", OxmlType.UInt32Value),
    ":hash": new OxmlAttr(":hash", OxmlType.UInt32Value)
  };
  ResetHyperlinkProps._C = {
    "oac:hlinkClick": HlinkClickEmpty,
    "oac:hlinkHover": HlinkHoverEmpty
  };
  ModifyHyperlinkProps._C = {
    "oac:hlinkClick": HlinkClickHyperlinkProps,
    "oac:hlinkHover": HlinkHoverHyperlinkProps
  };
  OpenXmlHyperlinkPropsElement._C = {
    "oac:sndData": SndDataImgData
  };
  OpenXmlHyperlinkPropsElement._D = {
    ":source": new OxmlAttr(":source", OxmlType.StringValue),
    ":action": new OxmlAttr(":action", OxmlType.StringValue),
    ":tgtFrame": new OxmlAttr(":tgtFrame", OxmlType.StringValue),
    ":tooltip": new OxmlAttr(":tooltip", OxmlType.StringValue),
    ":highlightClick": new OxmlAttr(":highlightClick", OxmlType.BooleanValue),
    ":endSnd": new OxmlAttr(":endSnd", OxmlType.BooleanValue),
    ":sndName": new OxmlAttr(":sndName", OxmlType.StringValue)
  };
  HlinkHoverHyperlinkProps._C = {
    "oac:sndData": SndDataImgData
  };
  HlinkClickHyperlinkProps._C = {
    "oac:sndData": SndDataImgData
  };
  ModifyNonVisualInkProps._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue),
    ":isComment": new OxmlAttr(":isComment", OxmlType.BooleanValue)
  };
  LinePropertiesType._C = {
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:pattFill": APatternFill,
    "a:prstDash": APresetDash,
    "a:custDash": ACustomDash,
    "a:round": ARound,
    "a:bevel": ALineJoinBevel,
    "a:miter": AMiter,
    "a:headEnd": AHeadEnd,
    "a:tailEnd": ATailEnd,
    "a:extLst": ALinePropertiesExtensionList
  };
  LinePropertiesType._D = {
    ":w": new OxmlAttr(":w", OxmlType.Int32Value),
    ":cap": new OxmlAttr(":cap", OxmlType.EnumValue, LineCapValuesArray),
    ":cmpd": new OxmlAttr(":cmpd", OxmlType.EnumValue, CompoundLineValuesArray),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, PenAlignmentValuesArray)
  };
  BoundRect._D = {
    ":l": new OxmlAttr(":l", OxmlType.Int64Value),
    ":t": new OxmlAttr(":t", OxmlType.Int64Value),
    ":r": new OxmlAttr(":r", OxmlType.Int64Value),
    ":b": new OxmlAttr(":b", OxmlType.Int64Value)
  };
  ResetNonVisualPictureProps._C = {
    "oac:lfPr": LfPrEmpty
  };
  ModifyNonVisualPictureProps._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue),
    ":noCrop": new OxmlAttr(":noCrop", OxmlType.BooleanValue),
    ":preferRelativeResize": new OxmlAttr(":preferRelativeResize", OxmlType.BooleanValue)
  };
  CompressPictureProps._D = {
    ":removeCrop": new OxmlAttr(":removeCrop", OxmlType.BooleanValue),
    ":useLocalDpi": new OxmlAttr(":useLocalDpi", OxmlType.BooleanValue),
    ":cstate": new OxmlAttr(":cstate", OxmlType.EnumValue, BlipCompressionValuesArray)
  };
  ResetNonVisualConnectorProps._C = {
    "oac:stCxn": StCxnEmpty,
    "oac:endCxn": EndCxnEmpty,
    "oac:noGrp": NoGrpEmpty,
    "oac:noSelect": NoSelectEmpty,
    "oac:noRot": NoRotEmpty,
    "oac:noChangeAspect": NoChangeAspectEmpty,
    "oac:noMove": NoMoveEmpty,
    "oac:noResize": NoResizeEmpty,
    "oac:noEditPoints": NoEditPointsEmpty,
    "oac:noAdjustHandles": NoAdjustHandlesEmpty,
    "oac:noChangeArrowheads": NoChangeArrowheadsEmpty,
    "oac:noChangeShapeType": NoChangeShapeTypeEmpty
  };
  ModifyNonVisualConnectorProps._C = {
    "oac:stCxn": StCxnConnection,
    "oac:endCxn": EndCxnConnection
  };
  ModifyNonVisualConnectorProps._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue)
  };
  ConnectionType._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  ModifyNonVisualGraphicFrameProps._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noDrilldown": new OxmlAttr(":noDrilldown", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue)
  };
  NonVisualGroupDrawingShapeProps._C = {
    "a:grpSpLocks": AGroupShapeLocks,
    "a:extLst": ANonVisualGroupDrawingShapePropsExtensionList
  };
  NonVisualDrawingProps._C = {
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkHover": AHyperlinkOnHover,
    "a:extLst": ANonVisualDrawingPropertiesExtensionList
  };
  NonVisualDrawingProps._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  ResetGroupShapeProperties._C = {
    "oac:xfrm": XfrmEmpty,
    "oac:fill": FillEmpty,
    "oac:effect": EffectEmpty,
    "oac:scene3d": Scene3dEmpty,
    "oac:extLst": ExtLstEmpty,
    "oac:bwMode": BwModeEmpty
  };
  GroupShapeProperties._C = {
    "a:xfrm": ATransformGroup,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:extLst": AExtensionList
  };
  GroupShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  ModifyNonVisualGroupDrawingShapeProps._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noUngrp": new OxmlAttr(":noUngrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue)
  };
  ResetBlipFillProperties._C = {
    "oac:srcRect": SrcRectEmpty,
    "oac:fillMode": FillModeEmpty,
    "oac:dpi": DpiEmpty,
    "oac:rotWithShape": RotWithShapeEmpty
  };
  OpenXmlRelativeRectPropsElement._D = {
    ":l": new OxmlAttr(":l", OxmlType.Int32Value),
    ":t": new OxmlAttr(":t", OxmlType.Int32Value),
    ":r": new OxmlAttr(":r", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.Int32Value)
  };
  BlipFillProperties._C = {
    "a:blip": ABlip,
    "a:srcRect": ASourceRectangle,
    "a:tile": ATile,
    "a:stretch": AStretch
  };
  BlipFillProperties._D = {
    ":dpi": new OxmlAttr(":dpi", OxmlType.UInt32Value),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  ModifyShapeStyleProps._C = {
    "oac:lnRef": LnRefStyleMatrixReference,
    "oac:fillRef": FillRefStyleMatrixReference,
    "oac:effectRef": EffectRefStyleMatrixReference,
    "oac:fontRef": FontReference
  };
  FontReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  FontReference._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.EnumValue, FontCollectionIndexValuesArray)
  };
  StyleMatrixReferenceType._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  StyleMatrixReferenceType._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  EffectRefStyleMatrixReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  FillRefStyleMatrixReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  LnRefStyleMatrixReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ResetShapeProperties._C = {
    "oac:xfrm": XfrmEmpty,
    "oac:geom": GeomEmpty,
    "oac:fill": FillEmpty,
    "oac:ln": LnEmpty,
    "oac:effect": EffectEmpty,
    "oac:scene3d": Scene3dEmpty,
    "oac:sp3d": Sp3dEmpty,
    "oac:extLst": ExtLstEmpty,
    "oac:bwMode": BwModeEmpty
  };
  ShapeProperties._C = {
    "a:xfrm": ATransform2D,
    "a:custGeom": ACustomGeometry,
    "a:prstGeom": APresetGeometry,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:extLst": AShapePropertiesExtensionList
  };
  ShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  ModifyNonVisualDrawingShapeProps._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue),
    ":noTextEdit": new OxmlAttr(":noTextEdit", OxmlType.BooleanValue),
    ":txBox": new OxmlAttr(":txBox", OxmlType.BooleanValue)
  };
  TextBodyProperties._C = {
    "a:prstTxWarp": APresetTextWrap,
    "a:noAutofit": ANoAutoFit,
    "a:normAutofit": ANormalAutoFit,
    "a:spAutoFit": AShapeAutoFit,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:flatTx": AFlatText,
    "a:extLst": AExtensionList
  };
  TextBodyProperties._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":spcFirstLastPara": new OxmlAttr(":spcFirstLastPara", OxmlType.BooleanValue),
    ":vertOverflow": new OxmlAttr(":vertOverflow", OxmlType.EnumValue, TextVerticalOverflowValuesArray),
    ":horzOverflow": new OxmlAttr(":horzOverflow", OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
    ":vert": new OxmlAttr(":vert", OxmlType.EnumValue, TextVerticalValuesArray),
    ":wrap": new OxmlAttr(":wrap", OxmlType.EnumValue, TextWrappingValuesArray),
    ":lIns": new OxmlAttr(":lIns", OxmlType.Int32Value),
    ":tIns": new OxmlAttr(":tIns", OxmlType.Int32Value),
    ":rIns": new OxmlAttr(":rIns", OxmlType.Int32Value),
    ":bIns": new OxmlAttr(":bIns", OxmlType.Int32Value),
    ":numCol": new OxmlAttr(":numCol", OxmlType.Int32Value),
    ":spcCol": new OxmlAttr(":spcCol", OxmlType.Int32Value),
    ":rtlCol": new OxmlAttr(":rtlCol", OxmlType.BooleanValue),
    ":fromWordArt": new OxmlAttr(":fromWordArt", OxmlType.BooleanValue),
    ":anchor": new OxmlAttr(":anchor", OxmlType.EnumValue, TextAnchoringTypeValuesArray),
    ":anchorCtr": new OxmlAttr(":anchorCtr", OxmlType.BooleanValue),
    ":forceAA": new OxmlAttr(":forceAA", OxmlType.BooleanValue),
    ":upright": new OxmlAttr(":upright", OxmlType.BooleanValue),
    ":compatLnSpc": new OxmlAttr(":compatLnSpc", OxmlType.BooleanValue)
  };
  TextParagraphPropertiesType._C = {
    "a:lnSpc": ALineSpacing,
    "a:spcBef": ASpaceBefore,
    "a:spcAft": ASpaceAfter,
    "a:buClrTx": ABulletColorText,
    "a:buClr": ABulletColor,
    "a:buSzTx": ABulletSizeText,
    "a:buSzPct": ABulletSizePercentage,
    "a:buSzPts": ABulletSizePoints,
    "a:buFontTx": ABulletFontText,
    "a:buFont": ABulletFont,
    "a:buNone": ANoBullet,
    "a:buAutoNum": AAutoNumberedBullet,
    "a:buChar": ACharacterBullet,
    "a:buBlip": APictureBullet,
    "a:tabLst": ATabStopList,
    "a:defRPr": ADefaultRunProperties,
    "a:extLst": AExtensionList
  };
  TextParagraphPropertiesType._D = {
    ":marL": new OxmlAttr(":marL", OxmlType.Int32Value),
    ":marR": new OxmlAttr(":marR", OxmlType.Int32Value),
    ":lvl": new OxmlAttr(":lvl", OxmlType.Int32Value),
    ":indent": new OxmlAttr(":indent", OxmlType.Int32Value),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, TextAlignmentTypeValuesArray),
    ":defTabSz": new OxmlAttr(":defTabSz", OxmlType.Int32Value),
    ":rtl": new OxmlAttr(":rtl", OxmlType.BooleanValue),
    ":eaLnBrk": new OxmlAttr(":eaLnBrk", OxmlType.BooleanValue),
    ":fontAlgn": new OxmlAttr(":fontAlgn", OxmlType.EnumValue, TextFontAlignmentValuesArray),
    ":latinLnBrk": new OxmlAttr(":latinLnBrk", OxmlType.BooleanValue),
    ":hangingPunct": new OxmlAttr(":hangingPunct", OxmlType.BooleanValue)
  };
  Point2DType._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  ModifyTransformProps._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value),
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value),
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  ModifyNonVisualDrawingProps._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":decor": new OxmlAttr(":decor", OxmlType.BooleanValue),
    ":scriptLink": new OxmlAttr(":scriptLink", OxmlType.StringValue)
  };
  ImgLink._D = {
    ":tgt": new OxmlAttr(":tgt", OxmlType.StringValue)
  };
  GroupCommand._C = {
    "oac:dgMkLst": DrawingMonikerList,
    "oac:spMk": ShapeMoniker,
    "oac:grpSpMk": GroupShapeMoniker,
    "oac:graphicFrameMk": GraphicFrameMoniker,
    "oac:cxnSpMk": ConnectorMoniker,
    "oac:picMk": PictureMoniker,
    "oac:inkMk": InkMoniker,
    "oac:grpSpPr": GroupShapeProperties,
    "oac:cNvPr": NonVisualDrawingProps,
    "oac:cNvGrpSpPr": NonVisualGroupDrawingShapeProps
  };
  GroupCommand._D = {
    ":verId": new OxmlAttr(":verId", OxmlType.UInt32Value),
    ":preventRegroup": new OxmlAttr(":preventRegroup", OxmlType.BooleanValue),
    ":grpId": new OxmlAttr(":grpId", OxmlType.UInt32Value)
  };
  ResourceUrl._D = {
    ":src": new OxmlAttr(":src", OxmlType.StringValue),
    ":linkage": new OxmlAttr(":linkage", OxmlType.EnumValue, ResourceLinkageArray)
  };
  Transform2D._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform2D._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  InkMoniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":creationId": new OxmlAttr(":creationId", OxmlType.StringValue)
  };
  PictureMoniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":creationId": new OxmlAttr(":creationId", OxmlType.StringValue)
  };
  ConnectorMoniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":creationId": new OxmlAttr(":creationId", OxmlType.StringValue)
  };
  GraphicFrameMoniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":creationId": new OxmlAttr(":creationId", OxmlType.StringValue)
  };
  GroupShapeMoniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":creationId": new OxmlAttr(":creationId", OxmlType.StringValue)
  };
  ShapeMoniker._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":creationId": new OxmlAttr(":creationId", OxmlType.StringValue)
  };
  return {
    prefix: "oac",
    xmlns: "http://schemas.microsoft.com/office/drawing/2013/main/command"
  };
}
export {
  BlipFillProperties,
  BoundRect,
  BwModeEmpty,
  CompressPictureProps,
  ConnectionType,
  ConnectorMoniker,
  ConnectorMonikerList,
  DeMasterMkLstDrawingElementMonikerList,
  DeMkLstDrawingElementMonikerList,
  DeSrcMkLstDrawingElementMonikerList,
  DeTgtMkLstDrawingElementMonikerList,
  DetachConnection,
  DetachConnectionArray,
  DocumentContextMonikerList,
  DpiEmpty,
  DrawingElementPackage,
  DrawingMonikerList,
  DrawingSelectionStgList,
  EditorSelectionStgList,
  EffectEmpty,
  EffectRefStyleMatrixReference,
  EndCxnConnection,
  EndCxnEmpty,
  ExtLstEmpty,
  FillEmpty,
  FillModeEmpty,
  FillRectRelativeRectProps,
  FillRefStyleMatrixReference,
  FontReference,
  GeomEmpty,
  GraphicFrameMoniker,
  GraphicFrameMonikerList,
  GraphicParentMonikerList,
  GroupCommand,
  GroupShapeMoniker,
  GroupShapeMonikerList,
  GroupShapeProperties,
  HlinkClickEmpty,
  HlinkClickHyperlinkProps,
  HlinkHoverEmpty,
  HlinkHoverHyperlinkProps,
  HyperlinkMonikerList,
  ImgDataImgData,
  ImgLink,
  InkMoniker,
  InkMonikerList,
  LfPrEmpty,
  LinePropertiesType,
  LnEmpty,
  LnRefStyleMatrixReference,
  Model3DMonikerList,
  ModifyHyperlinkProps,
  ModifyNonVisualConnectorProps,
  ModifyNonVisualDrawingProps,
  ModifyNonVisualDrawingShapeProps,
  ModifyNonVisualGraphicFrameProps,
  ModifyNonVisualGroupDrawingShapeProps,
  ModifyNonVisualInkProps,
  ModifyNonVisualPictureProps,
  ModifyShapeStyleProps,
  ModifyTransformProps,
  NoAdjustHandlesEmpty,
  NoChangeArrowheadsEmpty,
  NoChangeAspectEmpty,
  NoChangeShapeTypeEmpty,
  NoEditPointsEmpty,
  NoGrpEmpty,
  NoMoveEmpty,
  NoResizeEmpty,
  NoRotEmpty,
  NoSelectEmpty,
  NonVisualDrawingProps,
  NonVisualGroupDrawingShapeProps,
  OpenXmlDrawingElementMonikerListElement,
  OpenXmlEmptyElement,
  OpenXmlHyperlinkPropsElement,
  OpenXmlImgDataElement,
  OpenXmlRelativeRectPropsElement,
  OrigImgDataImgData,
  PictureMoniker,
  PictureMonikerList,
  Point2DType,
  ResetBlipFillProperties,
  ResetGroupShapeProperties,
  ResetHyperlinkProps,
  ResetNonVisualConnectorProps,
  ResetNonVisualPictureProps,
  ResetShapeProperties,
  ResetXsdboolean,
  ResourceLinkage,
  ResourceLinkageArray,
  ResourceUrl,
  RotWithShapeEmpty,
  SVGBlipMonikerList,
  Scene3dEmpty,
  ShapeMoniker,
  ShapeMonikerList,
  ShapeProperties,
  ShapePropsMonikerList,
  SndDataImgData,
  Sp3dEmpty,
  SrcRectEmpty,
  SrcRectRelativeRectProps,
  StCxnConnection,
  StCxnEmpty,
  StyleMatrixReferenceType,
  TableCellMonikerList,
  TableColumnMonikerList,
  TableMonikerList,
  TableRowMonikerList,
  TextBodyMonikerList,
  TextBodyPackage,
  TextBodyProperties,
  TextCharRangeContext,
  TextCharRangeMonikerList,
  TextParagraphPropertiesType,
  Transform2D,
  UseBoundsXsdboolean,
  ViewSelectionStgList,
  XfrmEmpty,
  initOffice2016DrawingCommandNamespace
};
