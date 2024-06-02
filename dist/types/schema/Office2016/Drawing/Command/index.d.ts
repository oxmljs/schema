import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { Int64Value } from '../../../../framework/types/Int64Value';
import { LineCapValues } from '../../../Drawing';
import { CompoundLineValues } from '../../../Drawing';
import { PenAlignmentValues } from '../../../Drawing';
import { BlipCompressionValues } from '../../../Drawing';
import { BlackWhiteModeValues } from '../../../Drawing';
import { FontCollectionIndexValues } from '../../../Drawing';
import { TextVerticalOverflowValues } from '../../../Drawing';
import { TextHorizontalOverflowValues } from '../../../Drawing';
import { TextVerticalValues } from '../../../Drawing';
import { TextWrappingValues } from '../../../Drawing';
import { TextAnchoringTypeValues } from '../../../Drawing';
import { TextAlignmentTypeValues } from '../../../Drawing';
import { TextFontAlignmentValues } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { PresetDash as APresetDash } from '../../../Drawing';
import { CustomDash as ACustomDash } from '../../../Drawing';
import { Round as ARound } from '../../../Drawing';
import { LineJoinBevel as ALineJoinBevel } from '../../../Drawing';
import { Miter as AMiter } from '../../../Drawing';
import { HeadEnd as AHeadEnd } from '../../../Drawing';
import { TailEnd as ATailEnd } from '../../../Drawing';
import { LinePropertiesExtensionList as ALinePropertiesExtensionList } from '../../../Drawing';
import { GroupShapeLocks as AGroupShapeLocks } from '../../../Drawing';
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from '../../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../../Drawing';
import { TransformGroup as ATransformGroup } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { ExtensionList as AExtensionList } from '../../../Drawing';
import { Blip as ABlip } from '../../../Drawing';
import { SourceRectangle as ASourceRectangle } from '../../../Drawing';
import { Tile as ATile } from '../../../Drawing';
import { Stretch as AStretch } from '../../../Drawing';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../../Drawing';
import { HslColor as AHslColor } from '../../../Drawing';
import { SystemColor as ASystemColor } from '../../../Drawing';
import { SchemeColor as ASchemeColor } from '../../../Drawing';
import { PresetColor as APresetColor } from '../../../Drawing';
import { Transform2D as ATransform2D } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';
import { Outline as AOutline } from '../../../Drawing';
import { Shape3DType as AShape3DType } from '../../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../../Drawing';
import { PresetTextWrap as APresetTextWrap } from '../../../Drawing';
import { NoAutoFit as ANoAutoFit } from '../../../Drawing';
import { NormalAutoFit as ANormalAutoFit } from '../../../Drawing';
import { ShapeAutoFit as AShapeAutoFit } from '../../../Drawing';
import { FlatText as AFlatText } from '../../../Drawing';
import { LineSpacing as ALineSpacing } from '../../../Drawing';
import { SpaceBefore as ASpaceBefore } from '../../../Drawing';
import { SpaceAfter as ASpaceAfter } from '../../../Drawing';
import { BulletColorText as ABulletColorText } from '../../../Drawing';
import { BulletColor as ABulletColor } from '../../../Drawing';
import { BulletSizeText as ABulletSizeText } from '../../../Drawing';
import { BulletSizePercentage as ABulletSizePercentage } from '../../../Drawing';
import { BulletSizePoints as ABulletSizePoints } from '../../../Drawing';
import { BulletFontText as ABulletFontText } from '../../../Drawing';
import { BulletFont as ABulletFont } from '../../../Drawing';
import { NoBullet as ANoBullet } from '../../../Drawing';
import { AutoNumberedBullet as AAutoNumberedBullet } from '../../../Drawing';
import { CharacterBullet as ACharacterBullet } from '../../../Drawing';
import { PictureBullet as APictureBullet } from '../../../Drawing';
import { TabStopList as ATabStopList } from '../../../Drawing';
import { DefaultRunProperties as ADefaultRunProperties } from '../../../Drawing';
import { Offset as AOffset } from '../../../Drawing';
import { Extents as AExtents } from '../../../Drawing';
export declare enum ResourceLinkage {
    /** undefined. Serialized value: `embed` */
    Embed = "embed",
    /** undefined. Serialized value: `link` */
    Link = "link",
    /** undefined. Serialized value: `linkAndEmbed` */
    LinkAndEmbed = "linkAndEmbed"
}
export declare const ResourceLinkageArray: readonly [ResourceLinkage.Embed, ResourceLinkage.Link, ResourceLinkage.LinkAndEmbed];
export declare enum DetachConnection {
    /** undefined. Serialized value: `start` */
    Start = "start",
    /** undefined. Serialized value: `end` */
    End = "end",
    /** undefined. Serialized value: `both` */
    Both = "both"
}
export declare const DetachConnectionArray: readonly [DetachConnection.Start, DetachConnection.End, DetachConnection.Both];
/** Defines the TextCharRangeContext Class. Serialized as `oac:context` */
export declare class TextCharRangeContext extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** len. Serialized as `:len` */
    get len(): UInt32Value | undefined;
    set len(v: UInt32Value | undefined);
    /** hash. Serialized as `:hash` */
    get hash(): UInt32Value | undefined;
    set hash(v: UInt32Value | undefined);
}
/** Defines the ResetHyperlinkProps Class. Serialized as `oac:hlink` */
export declare class ResetHyperlinkProps extends OxmlCompositeElement<HlinkClickEmpty | HlinkHoverEmpty> {
    static _Q: string;
    /** Returns HlinkClickEmpty. */
    get hlinkClickEmpty(): HlinkClickEmpty | undefined;
    /** Returns HlinkHoverEmpty. */
    get hlinkHoverEmpty(): HlinkHoverEmpty | undefined;
}
/** Defines the ModifyHyperlinkProps Class. Serialized as `oac:hlink` */
export declare class ModifyHyperlinkProps extends OxmlCompositeElement<HlinkClickHyperlinkProps | HlinkHoverHyperlinkProps> {
    static _Q: string;
    /** Returns HlinkClickHyperlinkProps. */
    get hlinkClickHyperlinkProps(): HlinkClickHyperlinkProps | undefined;
    /** Returns HlinkHoverHyperlinkProps. */
    get hlinkHoverHyperlinkProps(): HlinkHoverHyperlinkProps | undefined;
}
/** Defines the OpenXmlHyperlinkPropsElement Class. */
export declare abstract class OpenXmlHyperlinkPropsElement extends OxmlCompositeElement<SndDataImgData> {
    static _A: string[];
    /** source. Serialized as `:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** action. Serialized as `:action` */
    get action(): StringValue | undefined;
    set action(v: StringValue | undefined);
    /** tgtFrame. Serialized as `:tgtFrame` */
    get tgtFrame(): StringValue | undefined;
    set tgtFrame(v: StringValue | undefined);
    /** tooltip. Serialized as `:tooltip` */
    get tooltip(): StringValue | undefined;
    set tooltip(v: StringValue | undefined);
    /** highlightClick. Serialized as `:highlightClick` */
    get highlightClick(): BooleanValue | undefined;
    set highlightClick(v: BooleanValue | undefined);
    /** endSnd. Serialized as `:endSnd` */
    get endSnd(): BooleanValue | undefined;
    set endSnd(v: BooleanValue | undefined);
    /** sndName. Serialized as `:sndName` */
    get sndName(): StringValue | undefined;
    set sndName(v: StringValue | undefined);
    /** Returns SndDataImgData. */
    get sndDataImgData(): SndDataImgData | undefined;
}
/** Defines the HlinkHoverHyperlinkProps Class. Serialized as `oac:hlinkHover` */
export declare class HlinkHoverHyperlinkProps extends OpenXmlHyperlinkPropsElement {
    static _Q: string;
}
/** Defines the HlinkClickHyperlinkProps Class. Serialized as `oac:hlinkClick` */
export declare class HlinkClickHyperlinkProps extends OpenXmlHyperlinkPropsElement {
    static _Q: string;
}
/** Defines the ModifyNonVisualInkProps Class. Serialized as `oac:cNvInkPr` */
export declare class ModifyNonVisualInkProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** noGrp. Serialized as `:noGrp` */
    get noGrp(): BooleanValue | undefined;
    set noGrp(v: BooleanValue | undefined);
    /** noSelect. Serialized as `:noSelect` */
    get noSelect(): BooleanValue | undefined;
    set noSelect(v: BooleanValue | undefined);
    /** noRot. Serialized as `:noRot` */
    get noRot(): BooleanValue | undefined;
    set noRot(v: BooleanValue | undefined);
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** noMove. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** noResize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** noEditPoints. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** isComment. Serialized as `:isComment` */
    get isComment(): BooleanValue | undefined;
    set isComment(v: BooleanValue | undefined);
}
/** Defines the LinePropertiesType Class. Serialized as `oac:lineProps` */
export declare class LinePropertiesType extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | APatternFill | APresetDash | ACustomDash | ARound | ALineJoinBevel | AMiter | AHeadEnd | ATailEnd | ALinePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** line width. Serialized as `:w` */
    get width(): Int32Value | undefined;
    set width(v: Int32Value | undefined);
    /** line cap. Serialized as `:cap` */
    get capType(): LineCapValues | undefined;
    set capType(v: LineCapValues | undefined);
    /** compound line type. Serialized as `:cmpd` */
    get compoundLineType(): CompoundLineValues | undefined;
    set compoundLineType(v: CompoundLineValues | undefined);
    /** pen alignment. Serialized as `:algn` */
    get alignment(): PenAlignmentValues | undefined;
    set alignment(v: PenAlignmentValues | undefined);
}
/** Defines the SVGBlipMonikerList Class. Serialized as `oac:svgBlipMkLst` */
export declare class SVGBlipMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the BoundRect Class. Serialized as `oac:bounds` */
export declare class BoundRect extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** l. Serialized as `:l` */
    get l(): Int64Value | undefined;
    set l(v: Int64Value | undefined);
    /** t. Serialized as `:t` */
    get t(): Int64Value | undefined;
    set t(v: Int64Value | undefined);
    /** r. Serialized as `:r` */
    get r(): Int64Value | undefined;
    set r(v: Int64Value | undefined);
    /** b. Serialized as `:b` */
    get b(): Int64Value | undefined;
    set b(v: Int64Value | undefined);
}
/** Defines the ResetNonVisualPictureProps Class. Serialized as `oac:cNvPicPr` */
export declare class ResetNonVisualPictureProps extends OxmlCompositeElement<LfPrEmpty> {
    static _Q: string;
    /** Returns LfPrEmpty. */
    get lfPrEmpty(): LfPrEmpty | undefined;
}
/** Defines the ModifyNonVisualPictureProps Class. Serialized as `oac:cNvPicPr` */
export declare class ModifyNonVisualPictureProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** noGrp. Serialized as `:noGrp` */
    get noGrp(): BooleanValue | undefined;
    set noGrp(v: BooleanValue | undefined);
    /** noSelect. Serialized as `:noSelect` */
    get noSelect(): BooleanValue | undefined;
    set noSelect(v: BooleanValue | undefined);
    /** noRot. Serialized as `:noRot` */
    get noRot(): BooleanValue | undefined;
    set noRot(v: BooleanValue | undefined);
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** noMove. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** noResize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** noEditPoints. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** noCrop. Serialized as `:noCrop` */
    get noCrop(): BooleanValue | undefined;
    set noCrop(v: BooleanValue | undefined);
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    get preferRelativeResize(): BooleanValue | undefined;
    set preferRelativeResize(v: BooleanValue | undefined);
}
/** Defines the CompressPictureProps Class. Serialized as `oac:compressPicPr` */
export declare class CompressPictureProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** removeCrop. Serialized as `:removeCrop` */
    get removeCrop(): BooleanValue | undefined;
    set removeCrop(v: BooleanValue | undefined);
    /** useLocalDpi. Serialized as `:useLocalDpi` */
    get useLocalDpi(): BooleanValue | undefined;
    set useLocalDpi(v: BooleanValue | undefined);
    /** cstate. Serialized as `:cstate` */
    get cstate(): BlipCompressionValues | undefined;
    set cstate(v: BlipCompressionValues | undefined);
}
/** Defines the ResetNonVisualConnectorProps Class. Serialized as `oac:cNvCxnSpPr` */
export declare class ResetNonVisualConnectorProps extends OxmlCompositeElement<StCxnEmpty | EndCxnEmpty | NoGrpEmpty | NoSelectEmpty | NoRotEmpty | NoChangeAspectEmpty | NoMoveEmpty | NoResizeEmpty | NoEditPointsEmpty | NoAdjustHandlesEmpty | NoChangeArrowheadsEmpty | NoChangeShapeTypeEmpty> {
    static _Q: string;
    /** Returns StCxnEmpty. */
    get stCxnEmpty(): StCxnEmpty | undefined;
    /** Returns EndCxnEmpty. */
    get endCxnEmpty(): EndCxnEmpty | undefined;
    /** Returns NoGrpEmpty. */
    get noGrpEmpty(): NoGrpEmpty | undefined;
    /** Returns NoSelectEmpty. */
    get noSelectEmpty(): NoSelectEmpty | undefined;
    /** Returns NoRotEmpty. */
    get noRotEmpty(): NoRotEmpty | undefined;
    /** Returns NoChangeAspectEmpty. */
    get noChangeAspectEmpty(): NoChangeAspectEmpty | undefined;
    /** Returns NoMoveEmpty. */
    get noMoveEmpty(): NoMoveEmpty | undefined;
    /** Returns NoResizeEmpty. */
    get noResizeEmpty(): NoResizeEmpty | undefined;
    /** Returns NoEditPointsEmpty. */
    get noEditPointsEmpty(): NoEditPointsEmpty | undefined;
    /** Returns NoAdjustHandlesEmpty. */
    get noAdjustHandlesEmpty(): NoAdjustHandlesEmpty | undefined;
    /** Returns NoChangeArrowheadsEmpty. */
    get noChangeArrowheadsEmpty(): NoChangeArrowheadsEmpty | undefined;
    /** Returns NoChangeShapeTypeEmpty. */
    get noChangeShapeTypeEmpty(): NoChangeShapeTypeEmpty | undefined;
}
/** Defines the ModifyNonVisualConnectorProps Class. Serialized as `oac:cNvCxnSpPr` */
export declare class ModifyNonVisualConnectorProps extends OxmlCompositeElement<StCxnConnection | EndCxnConnection> {
    static _Q: string;
    static _A: string[];
    /** noGrp. Serialized as `:noGrp` */
    get noGrp(): BooleanValue | undefined;
    set noGrp(v: BooleanValue | undefined);
    /** noSelect. Serialized as `:noSelect` */
    get noSelect(): BooleanValue | undefined;
    set noSelect(v: BooleanValue | undefined);
    /** noRot. Serialized as `:noRot` */
    get noRot(): BooleanValue | undefined;
    set noRot(v: BooleanValue | undefined);
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** noMove. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** noResize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** noEditPoints. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** Returns StCxnConnection. */
    get stCxnConnection(): StCxnConnection | undefined;
    /** Returns EndCxnConnection. */
    get endCxnConnection(): EndCxnConnection | undefined;
}
/** Defines the ConnectionType Class. */
export declare abstract class ConnectionType extends OxmlLeafElement {
    static _A: string[];
    /** Identifier. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
}
/** Defines the EndCxnConnection Class. Serialized as `oac:endCxn` */
export declare class EndCxnConnection extends ConnectionType {
    static _Q: string;
}
/** Defines the StCxnConnection Class. Serialized as `oac:stCxn` */
export declare class StCxnConnection extends ConnectionType {
    static _Q: string;
}
/** Defines the ModifyNonVisualGraphicFrameProps Class. Serialized as `oac:cNvGraphicFramePr` */
export declare class ModifyNonVisualGraphicFrameProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** noGrp. Serialized as `:noGrp` */
    get noGrp(): BooleanValue | undefined;
    set noGrp(v: BooleanValue | undefined);
    /** noDrilldown. Serialized as `:noDrilldown` */
    get noDrilldown(): BooleanValue | undefined;
    set noDrilldown(v: BooleanValue | undefined);
    /** noSelect. Serialized as `:noSelect` */
    get noSelect(): BooleanValue | undefined;
    set noSelect(v: BooleanValue | undefined);
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** noMove. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** noResize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
}
/** Defines the NonVisualGroupDrawingShapeProps Class. Serialized as `oac:cNvGrpSpPr` */
export declare class NonVisualGroupDrawingShapeProps extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns AGroupShapeLocks. */
    get groupShapeLocks(): AGroupShapeLocks | undefined;
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** Defines the NonVisualDrawingProps Class. Serialized as `oac:cNvPr` */
export declare class NonVisualDrawingProps extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Application defined unique identifier.. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Description of the drawing element.. Serialized as `:descr` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Hyperlink associated with clicking or selecting the element.. */
    get hyperlinkOnClick(): AHyperlinkOnClick | undefined;
    /** Hyperlink associated with hovering over the element.. */
    get hyperlinkOnHover(): AHyperlinkOnHover | undefined;
    /** Future extension. */
    get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined;
}
/** Defines the ResetGroupShapeProperties Class. Serialized as `oac:grpSpPr` */
export declare class ResetGroupShapeProperties extends OxmlCompositeElement<XfrmEmpty | FillEmpty | EffectEmpty | Scene3dEmpty | ExtLstEmpty | BwModeEmpty> {
    static _Q: string;
    /** Returns XfrmEmpty. */
    get xfrmEmpty(): XfrmEmpty | undefined;
    /** Returns FillEmpty. */
    get fillEmpty(): FillEmpty | undefined;
    /** Returns EffectEmpty. */
    get effectEmpty(): EffectEmpty | undefined;
    /** Returns Scene3dEmpty. */
    get scene3dEmpty(): Scene3dEmpty | undefined;
    /** Returns ExtLstEmpty. */
    get extLstEmpty(): ExtLstEmpty | undefined;
    /** Returns BwModeEmpty. */
    get bwModeEmpty(): BwModeEmpty | undefined;
}
/** Defines the GroupShapeProperties Class. Serialized as `oac:grpSpPr` */
export declare class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): ATransformGroup | undefined;
}
/** Defines the ModifyNonVisualGroupDrawingShapeProps Class. Serialized as `oac:cNvGrpSpPr` */
export declare class ModifyNonVisualGroupDrawingShapeProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** noGrp. Serialized as `:noGrp` */
    get noGrp(): BooleanValue | undefined;
    set noGrp(v: BooleanValue | undefined);
    /** noUngrp. Serialized as `:noUngrp` */
    get noUngrp(): BooleanValue | undefined;
    set noUngrp(v: BooleanValue | undefined);
    /** noSelect. Serialized as `:noSelect` */
    get noSelect(): BooleanValue | undefined;
    set noSelect(v: BooleanValue | undefined);
    /** noRot. Serialized as `:noRot` */
    get noRot(): BooleanValue | undefined;
    set noRot(v: BooleanValue | undefined);
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** noMove. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** noResize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
}
/** Defines the ResetBlipFillProperties Class. Serialized as `oac:blipFill` */
export declare class ResetBlipFillProperties extends OxmlCompositeElement<SrcRectEmpty | FillModeEmpty | DpiEmpty | RotWithShapeEmpty> {
    static _Q: string;
    /** Returns SrcRectEmpty. */
    get srcRectEmpty(): SrcRectEmpty | undefined;
    /** Returns FillModeEmpty. */
    get fillModeEmpty(): FillModeEmpty | undefined;
    /** Returns DpiEmpty. */
    get dpiEmpty(): DpiEmpty | undefined;
    /** Returns RotWithShapeEmpty. */
    get rotWithShapeEmpty(): RotWithShapeEmpty | undefined;
}
/** Defines the OpenXmlRelativeRectPropsElement Class. */
export declare abstract class OpenXmlRelativeRectPropsElement extends OxmlLeafElement {
    static _A: string[];
    /** l. Serialized as `:l` */
    get l(): Int32Value | undefined;
    set l(v: Int32Value | undefined);
    /** t. Serialized as `:t` */
    get t(): Int32Value | undefined;
    set t(v: Int32Value | undefined);
    /** r. Serialized as `:r` */
    get r(): Int32Value | undefined;
    set r(v: Int32Value | undefined);
    /** b. Serialized as `:b` */
    get b(): Int32Value | undefined;
    set b(v: Int32Value | undefined);
}
/** Defines the SrcRectRelativeRectProps Class. Serialized as `oac:srcRect` */
export declare class SrcRectRelativeRectProps extends OpenXmlRelativeRectPropsElement {
    static _Q: string;
}
/** Defines the FillRectRelativeRectProps Class. Serialized as `oac:fillRect` */
export declare class FillRectRelativeRectProps extends OpenXmlRelativeRectPropsElement {
    static _Q: string;
}
/** Defines the BlipFillProperties Class. Serialized as `oac:blipFill` */
export declare class BlipFillProperties extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {
    static _Q: string;
    static _A: string[];
    /** DPI Setting. Serialized as `:dpi` */
    get dpi(): UInt32Value | undefined;
    set dpi(v: UInt32Value | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** Returns ABlip. */
    get blip(): ABlip | undefined;
    /** Source Rectangle. */
    get sourceRectangle(): ASourceRectangle | undefined;
}
/** Defines the UseBoundsXsdboolean Class. Serialized as `oac:useBounds` */
export declare class UseBoundsXsdboolean extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the ResetXsdboolean Class. Serialized as `oac:reset` */
export declare class ResetXsdboolean extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the ModifyShapeStyleProps Class. Serialized as `oac:style` */
export declare class ModifyShapeStyleProps extends OxmlCompositeElement<LnRefStyleMatrixReference | FillRefStyleMatrixReference | EffectRefStyleMatrixReference | FontReference> {
    static _Q: string;
    /** Returns LnRefStyleMatrixReference. */
    get lnRefStyleMatrixReference(): LnRefStyleMatrixReference | undefined;
    /** Returns FillRefStyleMatrixReference. */
    get fillRefStyleMatrixReference(): FillRefStyleMatrixReference | undefined;
    /** Returns EffectRefStyleMatrixReference. */
    get effectRefStyleMatrixReference(): EffectRefStyleMatrixReference | undefined;
    /** Returns FontReference. */
    get fontReference(): FontReference | undefined;
}
/** Defines the FontReference Class. Serialized as `oac:fontRef` */
export declare class FontReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _Q: string;
    static _A: string[];
    /** Identifier. Serialized as `:idx` */
    get index(): FontCollectionIndexValues | undefined;
    set index(v: FontCollectionIndexValues | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Defines the StyleMatrixReferenceType Class. */
export declare abstract class StyleMatrixReferenceType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _A: string[];
    /** Style Matrix Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Defines the EffectRefStyleMatrixReference Class. Serialized as `oac:effectRef` */
export declare class EffectRefStyleMatrixReference extends StyleMatrixReferenceType {
    static _Q: string;
}
/** Defines the FillRefStyleMatrixReference Class. Serialized as `oac:fillRef` */
export declare class FillRefStyleMatrixReference extends StyleMatrixReferenceType {
    static _Q: string;
}
/** Defines the LnRefStyleMatrixReference Class. Serialized as `oac:lnRef` */
export declare class LnRefStyleMatrixReference extends StyleMatrixReferenceType {
    static _Q: string;
}
/** Defines the ResetShapeProperties Class. Serialized as `oac:spPr` */
export declare class ResetShapeProperties extends OxmlCompositeElement<XfrmEmpty | GeomEmpty | FillEmpty | LnEmpty | EffectEmpty | Scene3dEmpty | Sp3dEmpty | ExtLstEmpty | BwModeEmpty> {
    static _Q: string;
    /** Returns XfrmEmpty. */
    get xfrmEmpty(): XfrmEmpty | undefined;
    /** Returns GeomEmpty. */
    get geomEmpty(): GeomEmpty | undefined;
    /** Returns FillEmpty. */
    get fillEmpty(): FillEmpty | undefined;
    /** Returns LnEmpty. */
    get lnEmpty(): LnEmpty | undefined;
    /** Returns EffectEmpty. */
    get effectEmpty(): EffectEmpty | undefined;
    /** Returns Scene3dEmpty. */
    get scene3dEmpty(): Scene3dEmpty | undefined;
    /** Returns Sp3dEmpty. */
    get sp3dEmpty(): Sp3dEmpty | undefined;
    /** Returns ExtLstEmpty. */
    get extLstEmpty(): ExtLstEmpty | undefined;
    /** Returns BwModeEmpty. */
    get bwModeEmpty(): BwModeEmpty | undefined;
}
/** Defines the OpenXmlEmptyElement Class. */
export declare abstract class OpenXmlEmptyElement extends OxmlLeafElement {
}
/** Defines the HlinkHoverEmpty Class. Serialized as `oac:hlinkHover` */
export declare class HlinkHoverEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the HlinkClickEmpty Class. Serialized as `oac:hlinkClick` */
export declare class HlinkClickEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the LfPrEmpty Class. Serialized as `oac:lfPr` */
export declare class LfPrEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoChangeShapeTypeEmpty Class. Serialized as `oac:noChangeShapeType` */
export declare class NoChangeShapeTypeEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoChangeArrowheadsEmpty Class. Serialized as `oac:noChangeArrowheads` */
export declare class NoChangeArrowheadsEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoAdjustHandlesEmpty Class. Serialized as `oac:noAdjustHandles` */
export declare class NoAdjustHandlesEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoEditPointsEmpty Class. Serialized as `oac:noEditPoints` */
export declare class NoEditPointsEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoResizeEmpty Class. Serialized as `oac:noResize` */
export declare class NoResizeEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoMoveEmpty Class. Serialized as `oac:noMove` */
export declare class NoMoveEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoChangeAspectEmpty Class. Serialized as `oac:noChangeAspect` */
export declare class NoChangeAspectEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoRotEmpty Class. Serialized as `oac:noRot` */
export declare class NoRotEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoSelectEmpty Class. Serialized as `oac:noSelect` */
export declare class NoSelectEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the NoGrpEmpty Class. Serialized as `oac:noGrp` */
export declare class NoGrpEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the EndCxnEmpty Class. Serialized as `oac:endCxn` */
export declare class EndCxnEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the StCxnEmpty Class. Serialized as `oac:stCxn` */
export declare class StCxnEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the RotWithShapeEmpty Class. Serialized as `oac:rotWithShape` */
export declare class RotWithShapeEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the DpiEmpty Class. Serialized as `oac:dpi` */
export declare class DpiEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the FillModeEmpty Class. Serialized as `oac:fillMode` */
export declare class FillModeEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the SrcRectEmpty Class. Serialized as `oac:srcRect` */
export declare class SrcRectEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the BwModeEmpty Class. Serialized as `oac:bwMode` */
export declare class BwModeEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the ExtLstEmpty Class. Serialized as `oac:extLst` */
export declare class ExtLstEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the Sp3dEmpty Class. Serialized as `oac:sp3d` */
export declare class Sp3dEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the Scene3dEmpty Class. Serialized as `oac:scene3d` */
export declare class Scene3dEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the EffectEmpty Class. Serialized as `oac:effect` */
export declare class EffectEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the LnEmpty Class. Serialized as `oac:ln` */
export declare class LnEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the FillEmpty Class. Serialized as `oac:fill` */
export declare class FillEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the GeomEmpty Class. Serialized as `oac:geom` */
export declare class GeomEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the XfrmEmpty Class. Serialized as `oac:xfrm` */
export declare class XfrmEmpty extends OpenXmlEmptyElement {
    static _Q: string;
}
/** Defines the ShapeProperties Class. Serialized as `oac:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the ShapePropsMonikerList Class. Serialized as `oac:spMkLst` */
export declare class ShapePropsMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the ModifyNonVisualDrawingShapeProps Class. Serialized as `oac:cNvSpPr` */
export declare class ModifyNonVisualDrawingShapeProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** noGrp. Serialized as `:noGrp` */
    get noGrp(): BooleanValue | undefined;
    set noGrp(v: BooleanValue | undefined);
    /** noSelect. Serialized as `:noSelect` */
    get noSelect(): BooleanValue | undefined;
    set noSelect(v: BooleanValue | undefined);
    /** noRot. Serialized as `:noRot` */
    get noRot(): BooleanValue | undefined;
    set noRot(v: BooleanValue | undefined);
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** noMove. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** noResize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** noEditPoints. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** noTextEdit. Serialized as `:noTextEdit` */
    get noTextEdit(): BooleanValue | undefined;
    set noTextEdit(v: BooleanValue | undefined);
    /** txBox. Serialized as `:txBox` */
    get txBox(): BooleanValue | undefined;
    set txBox(v: BooleanValue | undefined);
}
/** Defines the TextBodyProperties Class. Serialized as `oac:bodyPr` */
export declare class TextBodyProperties extends OxmlCompositeElement<APresetTextWrap | ANoAutoFit | ANormalAutoFit | AShapeAutoFit | AScene3DType | AShape3DType | AFlatText | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
    get useParagraphSpacing(): BooleanValue | undefined;
    set useParagraphSpacing(v: BooleanValue | undefined);
    /** Text Vertical Overflow. Serialized as `:vertOverflow` */
    get verticalOverflow(): TextVerticalOverflowValues | undefined;
    set verticalOverflow(v: TextVerticalOverflowValues | undefined);
    /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
    get horizontalOverflow(): TextHorizontalOverflowValues | undefined;
    set horizontalOverflow(v: TextHorizontalOverflowValues | undefined);
    /** Vertical Text. Serialized as `:vert` */
    get vertical(): TextVerticalValues | undefined;
    set vertical(v: TextVerticalValues | undefined);
    /** Text Wrapping Type. Serialized as `:wrap` */
    get wrap(): TextWrappingValues | undefined;
    set wrap(v: TextWrappingValues | undefined);
    /** Left Inset. Serialized as `:lIns` */
    get leftInset(): Int32Value | undefined;
    set leftInset(v: Int32Value | undefined);
    /** Top Inset. Serialized as `:tIns` */
    get topInset(): Int32Value | undefined;
    set topInset(v: Int32Value | undefined);
    /** Right Inset. Serialized as `:rIns` */
    get rightInset(): Int32Value | undefined;
    set rightInset(v: Int32Value | undefined);
    /** Bottom Inset. Serialized as `:bIns` */
    get bottomInset(): Int32Value | undefined;
    set bottomInset(v: Int32Value | undefined);
    /** Number of Columns. Serialized as `:numCol` */
    get columnCount(): Int32Value | undefined;
    set columnCount(v: Int32Value | undefined);
    /** Space Between Columns. Serialized as `:spcCol` */
    get columnSpacing(): Int32Value | undefined;
    set columnSpacing(v: Int32Value | undefined);
    /** Columns Right-To-Left. Serialized as `:rtlCol` */
    get rightToLeftColumns(): BooleanValue | undefined;
    set rightToLeftColumns(v: BooleanValue | undefined);
    /** From WordArt. Serialized as `:fromWordArt` */
    get fromWordArt(): BooleanValue | undefined;
    set fromWordArt(v: BooleanValue | undefined);
    /** Anchor. Serialized as `:anchor` */
    get anchor(): TextAnchoringTypeValues | undefined;
    set anchor(v: TextAnchoringTypeValues | undefined);
    /** Anchor Center. Serialized as `:anchorCtr` */
    get anchorCenter(): BooleanValue | undefined;
    set anchorCenter(v: BooleanValue | undefined);
    /** Force Anti-Alias. Serialized as `:forceAA` */
    get forceAntiAlias(): BooleanValue | undefined;
    set forceAntiAlias(v: BooleanValue | undefined);
    /** Text Upright. Serialized as `:upright` */
    get upRight(): BooleanValue | undefined;
    set upRight(v: BooleanValue | undefined);
    /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
    get compatibleLineSpacing(): BooleanValue | undefined;
    set compatibleLineSpacing(v: BooleanValue | undefined);
    /** Preset Text Shape. */
    get presetTextWrap(): APresetTextWrap | undefined;
}
/** Defines the TextParagraphPropertiesType Class. Serialized as `oac:pPr` */
export declare class TextParagraphPropertiesType extends OxmlCompositeElement<ALineSpacing | ASpaceBefore | ASpaceAfter | ABulletColorText | ABulletColor | ABulletSizeText | ABulletSizePercentage | ABulletSizePoints | ABulletFontText | ABulletFont | ANoBullet | AAutoNumberedBullet | ACharacterBullet | APictureBullet | ATabStopList | ADefaultRunProperties | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Left Margin. Serialized as `:marL` */
    get leftMargin(): Int32Value | undefined;
    set leftMargin(v: Int32Value | undefined);
    /** Right Margin. Serialized as `:marR` */
    get rightMargin(): Int32Value | undefined;
    set rightMargin(v: Int32Value | undefined);
    /** Level. Serialized as `:lvl` */
    get level(): Int32Value | undefined;
    set level(v: Int32Value | undefined);
    /** Indent. Serialized as `:indent` */
    get indent(): Int32Value | undefined;
    set indent(v: Int32Value | undefined);
    /** Alignment. Serialized as `:algn` */
    get alignment(): TextAlignmentTypeValues | undefined;
    set alignment(v: TextAlignmentTypeValues | undefined);
    /** Default Tab Size. Serialized as `:defTabSz` */
    get defaultTabSize(): Int32Value | undefined;
    set defaultTabSize(v: Int32Value | undefined);
    /** Right To Left. Serialized as `:rtl` */
    get rightToLeft(): BooleanValue | undefined;
    set rightToLeft(v: BooleanValue | undefined);
    /** East Asian Line Break. Serialized as `:eaLnBrk` */
    get eastAsianLineBreak(): BooleanValue | undefined;
    set eastAsianLineBreak(v: BooleanValue | undefined);
    /** Font Alignment. Serialized as `:fontAlgn` */
    get fontAlignment(): TextFontAlignmentValues | undefined;
    set fontAlignment(v: TextFontAlignmentValues | undefined);
    /** Latin Line Break. Serialized as `:latinLnBrk` */
    get latinLineBreak(): BooleanValue | undefined;
    set latinLineBreak(v: BooleanValue | undefined);
    /** Hanging Punctuation. Serialized as `:hangingPunct` */
    get height(): BooleanValue | undefined;
    set height(v: BooleanValue | undefined);
    /** Line Spacing. */
    get lineSpacing(): ALineSpacing | undefined;
    /** Space Before. */
    get spaceBefore(): ASpaceBefore | undefined;
    /** Space After. */
    get spaceAfter(): ASpaceAfter | undefined;
}
/** Defines the Point2DType Class. Serialized as `oac:off` */
export declare class Point2DType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** X-Axis Coordinate. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Axis Coordinate. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
}
/** Defines the ModifyTransformProps Class. Serialized as `oac:xfrm` */
export declare class ModifyTransformProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** x. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** y. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
    /** cx. Serialized as `:cx` */
    get cx(): Int64Value | undefined;
    set cx(v: Int64Value | undefined);
    /** cy. Serialized as `:cy` */
    get cy(): Int64Value | undefined;
    set cy(v: Int64Value | undefined);
    /** rot. Serialized as `:rot` */
    get rot(): Int32Value | undefined;
    set rot(v: Int32Value | undefined);
    /** flipH. Serialized as `:flipH` */
    get flipH(): BooleanValue | undefined;
    set flipH(v: BooleanValue | undefined);
    /** flipV. Serialized as `:flipV` */
    get flipV(): BooleanValue | undefined;
    set flipV(v: BooleanValue | undefined);
}
/** Defines the ModifyNonVisualDrawingProps Class. Serialized as `oac:cNvPr` */
export declare class ModifyNonVisualDrawingProps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** descr. Serialized as `:descr` */
    get descr(): StringValue | undefined;
    set descr(v: StringValue | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** decor. Serialized as `:decor` */
    get decor(): BooleanValue | undefined;
    set decor(v: BooleanValue | undefined);
    /** scriptLink. Serialized as `:scriptLink` */
    get scriptLink(): StringValue | undefined;
    set scriptLink(v: StringValue | undefined);
}
/** Defines the TableColumnMonikerList Class. Serialized as `oac:gridColMkLst` */
export declare class TableColumnMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the TableRowMonikerList Class. Serialized as `oac:trMkLst` */
export declare class TableRowMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the TableCellMonikerList Class. Serialized as `oac:tcMkLst` */
export declare class TableCellMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the TableMonikerList Class. Serialized as `oac:tblMkLst` */
export declare class TableMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the DrawingSelectionStgList Class. Serialized as `oac:drSelLst` */
export declare class DrawingSelectionStgList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the EditorSelectionStgList Class. Serialized as `oac:editorSelLst` */
export declare class EditorSelectionStgList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the ViewSelectionStgList Class. Serialized as `oac:viewSelLst` */
export declare class ViewSelectionStgList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the Model3DMonikerList Class. Serialized as `oac:model3DMkLst` */
export declare class Model3DMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the HyperlinkMonikerList Class. Serialized as `oac:hlinkMkLst` */
export declare class HyperlinkMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the TextCharRangeMonikerList Class. Serialized as `oac:txMkLst` */
export declare class TextCharRangeMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the TextBodyMonikerList Class. Serialized as `oac:txBodyMkLst` */
export declare class TextBodyMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the InkMonikerList Class. Serialized as `oac:inkMkLst` */
export declare class InkMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the PictureMonikerList Class. Serialized as `oac:picMkLst` */
export declare class PictureMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the ConnectorMonikerList Class. Serialized as `oac:cxnSpMkLst` */
export declare class ConnectorMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the GraphicFrameMonikerList Class. Serialized as `oac:graphicFrameMkLst` */
export declare class GraphicFrameMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the ShapeMonikerList Class. Serialized as `oac:spMkLst` */
export declare class ShapeMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the GraphicParentMonikerList Class. Serialized as `oac:graphicParentMkLst` */
export declare class GraphicParentMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the DocumentContextMonikerList Class. Serialized as `oac:dcMkLst` */
export declare class DocumentContextMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the ImgLink Class. Serialized as `oac:imgLink` */
export declare class ImgLink extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** tgt. Serialized as `:tgt` */
    get tgt(): StringValue | undefined;
    set tgt(v: StringValue | undefined);
}
/** Defines the GroupCommand Class. Serialized as `oac:grpCmd` */
export declare class GroupCommand extends OxmlCompositeElement<DrawingMonikerList | ShapeMoniker | GroupShapeMoniker | GraphicFrameMoniker | ConnectorMoniker | PictureMoniker | InkMoniker | GroupShapeProperties | NonVisualDrawingProps | NonVisualGroupDrawingShapeProps> {
    static _Q: string;
    static _A: string[];
    /** verId. Serialized as `:verId` */
    get verId(): UInt32Value | undefined;
    set verId(v: UInt32Value | undefined);
    /** preventRegroup. Serialized as `:preventRegroup` */
    get preventRegroup(): BooleanValue | undefined;
    set preventRegroup(v: BooleanValue | undefined);
    /** grpId. Serialized as `:grpId` */
    get grpId(): UInt32Value | undefined;
    set grpId(v: UInt32Value | undefined);
    /** Returns DrawingMonikerList. */
    get drawingMonikerList(): DrawingMonikerList | undefined;
}
/** Defines the TextBodyPackage Class. Serialized as `oac:txBodyPkg` */
export declare class TextBodyPackage extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the ResourceUrl Class. Serialized as `oac:imgUrl` */
export declare class ResourceUrl extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** src. Serialized as `:src` */
    get src(): StringValue | undefined;
    set src(v: StringValue | undefined);
    /** linkage. Serialized as `:linkage` */
    get linkage(): ResourceLinkage | undefined;
    set linkage(v: ResourceLinkage | undefined);
}
/** Defines the OpenXmlImgDataElement Class. */
export declare abstract class OpenXmlImgDataElement extends OxmlLeafTextElement {
}
/** Defines the SndDataImgData Class. Serialized as `oac:sndData` */
export declare class SndDataImgData extends OpenXmlImgDataElement {
    static _Q: string;
}
/** Defines the OrigImgDataImgData Class. Serialized as `oac:origImgData` */
export declare class OrigImgDataImgData extends OpenXmlImgDataElement {
    static _Q: string;
}
/** Defines the ImgDataImgData Class. Serialized as `oac:imgData` */
export declare class ImgDataImgData extends OpenXmlImgDataElement {
    static _Q: string;
}
/** Defines the OpenXmlDrawingElementMonikerListElement Class. */
export declare abstract class OpenXmlDrawingElementMonikerListElement extends OxmlCompositeElement {
}
/** Defines the DeTgtMkLstDrawingElementMonikerList Class. Serialized as `oac:deTgtMkLst` */
export declare class DeTgtMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
    static _Q: string;
}
/** Defines the DeSrcMkLstDrawingElementMonikerList Class. Serialized as `oac:deSrcMkLst` */
export declare class DeSrcMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
    static _Q: string;
}
/** Defines the DeMasterMkLstDrawingElementMonikerList Class. Serialized as `oac:deMasterMkLst` */
export declare class DeMasterMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
    static _Q: string;
}
/** Defines the DeMkLstDrawingElementMonikerList Class. Serialized as `oac:deMkLst` */
export declare class DeMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {
    static _Q: string;
}
/** Defines the DrawingElementPackage Class. Serialized as `oac:dePkg` */
export declare class DrawingElementPackage extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the GroupShapeMonikerList Class. Serialized as `oac:grpSpMkLst` */
export declare class GroupShapeMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the Transform2D Class. Serialized as `oac:xfrm` */
export declare class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Horizontal Flip. Serialized as `:flipH` */
    get horizontalFlip(): BooleanValue | undefined;
    set horizontalFlip(v: BooleanValue | undefined);
    /** Vertical Flip. Serialized as `:flipV` */
    get verticalFlip(): BooleanValue | undefined;
    set verticalFlip(v: BooleanValue | undefined);
    /** Offset. */
    get offset(): AOffset | undefined;
    /** Extents. */
    get extents(): AExtents | undefined;
}
/** Defines the DrawingMonikerList Class. Serialized as `oac:dgMkLst` */
export declare class DrawingMonikerList extends OxmlCompositeElement {
    static _Q: string;
}
/** Defines the InkMoniker Class. Serialized as `oac:inkMk` */
export declare class InkMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** creationId. Serialized as `:creationId` */
    get creationId(): StringValue | undefined;
    set creationId(v: StringValue | undefined);
}
/** Defines the PictureMoniker Class. Serialized as `oac:picMk` */
export declare class PictureMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** creationId. Serialized as `:creationId` */
    get creationId(): StringValue | undefined;
    set creationId(v: StringValue | undefined);
}
/** Defines the ConnectorMoniker Class. Serialized as `oac:cxnSpMk` */
export declare class ConnectorMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** creationId. Serialized as `:creationId` */
    get creationId(): StringValue | undefined;
    set creationId(v: StringValue | undefined);
}
/** Defines the GraphicFrameMoniker Class. Serialized as `oac:graphicFrameMk` */
export declare class GraphicFrameMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** creationId. Serialized as `:creationId` */
    get creationId(): StringValue | undefined;
    set creationId(v: StringValue | undefined);
}
/** Defines the GroupShapeMoniker Class. Serialized as `oac:grpSpMk` */
export declare class GroupShapeMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** creationId. Serialized as `:creationId` */
    get creationId(): StringValue | undefined;
    set creationId(v: StringValue | undefined);
}
/** Defines the ShapeMoniker Class. Serialized as `oac:spMk` */
export declare class ShapeMoniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** creationId. Serialized as `:creationId` */
    get creationId(): StringValue | undefined;
    set creationId(v: StringValue | undefined);
}
export declare function initOffice2016DrawingCommandNamespace(): {
    prefix: string;
    xmlns: string;
};
