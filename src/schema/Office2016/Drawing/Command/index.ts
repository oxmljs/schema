import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { Int64Value } from '../../../../framework/types/Int64Value';
import { LineCapValues, LineCapValuesArray } from '../../../Drawing';
import { CompoundLineValues, CompoundLineValuesArray } from '../../../Drawing';
import { PenAlignmentValues, PenAlignmentValuesArray } from '../../../Drawing';
import { BlipCompressionValues, BlipCompressionValuesArray } from '../../../Drawing';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';
import { FontCollectionIndexValues, FontCollectionIndexValuesArray } from '../../../Drawing';
import { TextVerticalOverflowValues, TextVerticalOverflowValuesArray } from '../../../Drawing';
import { TextHorizontalOverflowValues, TextHorizontalOverflowValuesArray } from '../../../Drawing';
import { TextVerticalValues, TextVerticalValuesArray } from '../../../Drawing';
import { TextWrappingValues, TextWrappingValuesArray } from '../../../Drawing';
import { TextAnchoringTypeValues, TextAnchoringTypeValuesArray } from '../../../Drawing';
import { TextAlignmentTypeValues, TextAlignmentTypeValuesArray } from '../../../Drawing';
import { TextFontAlignmentValues, TextFontAlignmentValuesArray } from '../../../Drawing';import { NoFill as ANoFill } from '../../../Drawing';
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


export enum ResourceLinkage {
    /** undefined. Serialized value: `embed` */
    Embed = 'embed',
    /** undefined. Serialized value: `link` */
    Link = 'link',
    /** undefined. Serialized value: `linkAndEmbed` */
    LinkAndEmbed = 'linkAndEmbed',
}

export const ResourceLinkageArray = [
    ResourceLinkage.Embed,
    ResourceLinkage.Link,
    ResourceLinkage.LinkAndEmbed,
] as const;

export enum DetachConnection {
    /** undefined. Serialized value: `start` */
    Start = 'start',
    /** undefined. Serialized value: `end` */
    End = 'end',
    /** undefined. Serialized value: `both` */
    Both = 'both',
}

export const DetachConnectionArray = [
    DetachConnection.Start,
    DetachConnection.End,
    DetachConnection.Both,
] as const;

/** Defines the TextCharRangeContext Class. Serialized as `oac:context` */
export class TextCharRangeContext extends OxmlLeafElement {

    public static override _Q = 'oac:context';
    public static override _A = [':len',':hash',];
    /** len. Serialized as `:len` */
    public get len(): UInt32Value | undefined { return this._g(':len'); }
    public set len(v: UInt32Value | undefined) { this._s(':len', v); }
    /** hash. Serialized as `:hash` */
    public get hash(): UInt32Value | undefined { return this._g(':hash'); }
    public set hash(v: UInt32Value | undefined) { this._s(':hash', v); }

}
/** Defines the ResetHyperlinkProps Class. Serialized as `oac:hlink` */
export class ResetHyperlinkProps extends OxmlCompositeElement<HlinkClickEmpty | HlinkHoverEmpty> {

    public static override _Q = 'oac:hlink';
    /** Returns HlinkClickEmpty. */
    public get hlinkClickEmpty(): HlinkClickEmpty | undefined { return this._f(HlinkClickEmpty); }
    /** Returns HlinkHoverEmpty. */
    public get hlinkHoverEmpty(): HlinkHoverEmpty | undefined { return this._f(HlinkHoverEmpty); }

}
/** Defines the ModifyHyperlinkProps Class. Serialized as `oac:hlink` */
export class ModifyHyperlinkProps extends OxmlCompositeElement<HlinkClickHyperlinkProps | HlinkHoverHyperlinkProps> {

    public static override _Q = 'oac:hlink';
    /** Returns HlinkClickHyperlinkProps. */
    public get hlinkClickHyperlinkProps(): HlinkClickHyperlinkProps | undefined { return this._f(HlinkClickHyperlinkProps); }
    /** Returns HlinkHoverHyperlinkProps. */
    public get hlinkHoverHyperlinkProps(): HlinkHoverHyperlinkProps | undefined { return this._f(HlinkHoverHyperlinkProps); }

}
/** Defines the OpenXmlHyperlinkPropsElement Class. */
export abstract class OpenXmlHyperlinkPropsElement extends OxmlCompositeElement<SndDataImgData> {

    public static override _A = [':source',':action',':tgtFrame',':tooltip',':highlightClick',':endSnd',':sndName',];
    /** source. Serialized as `:source` */
    public get source(): StringValue | undefined { return this._g(':source'); }
    public set source(v: StringValue | undefined) { this._s(':source', v); }
    /** action. Serialized as `:action` */
    public get action(): StringValue | undefined { return this._g(':action'); }
    public set action(v: StringValue | undefined) { this._s(':action', v); }
    /** tgtFrame. Serialized as `:tgtFrame` */
    public get tgtFrame(): StringValue | undefined { return this._g(':tgtFrame'); }
    public set tgtFrame(v: StringValue | undefined) { this._s(':tgtFrame', v); }
    /** tooltip. Serialized as `:tooltip` */
    public get tooltip(): StringValue | undefined { return this._g(':tooltip'); }
    public set tooltip(v: StringValue | undefined) { this._s(':tooltip', v); }
    /** highlightClick. Serialized as `:highlightClick` */
    public get highlightClick(): BooleanValue | undefined { return this._g(':highlightClick'); }
    public set highlightClick(v: BooleanValue | undefined) { this._s(':highlightClick', v); }
    /** endSnd. Serialized as `:endSnd` */
    public get endSnd(): BooleanValue | undefined { return this._g(':endSnd'); }
    public set endSnd(v: BooleanValue | undefined) { this._s(':endSnd', v); }
    /** sndName. Serialized as `:sndName` */
    public get sndName(): StringValue | undefined { return this._g(':sndName'); }
    public set sndName(v: StringValue | undefined) { this._s(':sndName', v); }
    /** Returns SndDataImgData. */
    public get sndDataImgData(): SndDataImgData | undefined { return this._f(SndDataImgData); }

}
/** Defines the HlinkHoverHyperlinkProps Class. Serialized as `oac:hlinkHover` */
export class HlinkHoverHyperlinkProps extends OpenXmlHyperlinkPropsElement {

    public static override _Q = 'oac:hlinkHover';

}
/** Defines the HlinkClickHyperlinkProps Class. Serialized as `oac:hlinkClick` */
export class HlinkClickHyperlinkProps extends OpenXmlHyperlinkPropsElement {

    public static override _Q = 'oac:hlinkClick';

}
/** Defines the ModifyNonVisualInkProps Class. Serialized as `oac:cNvInkPr` */
export class ModifyNonVisualInkProps extends OxmlLeafElement {

    public static override _Q = 'oac:cNvInkPr';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',':isComment',];
    /** noGrp. Serialized as `:noGrp` */
    public get noGrp(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrp(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** noSelect. Serialized as `:noSelect` */
    public get noSelect(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelect(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** noRot. Serialized as `:noRot` */
    public get noRot(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRot(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** noMove. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** noResize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** noEditPoints. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** isComment. Serialized as `:isComment` */
    public get isComment(): BooleanValue | undefined { return this._g(':isComment'); }
    public set isComment(v: BooleanValue | undefined) { this._s(':isComment', v); }

}
/** Defines the LinePropertiesType Class. Serialized as `oac:lineProps` */
export class LinePropertiesType extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | APatternFill | APresetDash | ACustomDash | ARound | ALineJoinBevel | AMiter | AHeadEnd | ATailEnd | ALinePropertiesExtensionList> {

    public static override _Q = 'oac:lineProps';
    public static override _A = [':w',':cap',':cmpd',':algn',];
    /** line width. Serialized as `:w` */
    public get width(): Int32Value | undefined { return this._g(':w'); }
    public set width(v: Int32Value | undefined) { this._s(':w', v); }
    /** line cap. Serialized as `:cap` */
    public get capType(): LineCapValues | undefined { return this._g(':cap'); }
    public set capType(v: LineCapValues | undefined) { this._s(':cap', v); }
    /** compound line type. Serialized as `:cmpd` */
    public get compoundLineType(): CompoundLineValues | undefined { return this._g(':cmpd'); }
    public set compoundLineType(v: CompoundLineValues | undefined) { this._s(':cmpd', v); }
    /** pen alignment. Serialized as `:algn` */
    public get alignment(): PenAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: PenAlignmentValues | undefined) { this._s(':algn', v); }

}
/** Defines the SVGBlipMonikerList Class. Serialized as `oac:svgBlipMkLst` */
export class SVGBlipMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:svgBlipMkLst';

}
/** Defines the BoundRect Class. Serialized as `oac:bounds` */
export class BoundRect extends OxmlLeafElement {

    public static override _Q = 'oac:bounds';
    public static override _A = [':l',':t',':r',':b',];
    /** l. Serialized as `:l` */
    public get l(): Int64Value | undefined { return this._g(':l'); }
    public set l(v: Int64Value | undefined) { this._s(':l', v); }
    /** t. Serialized as `:t` */
    public get t(): Int64Value | undefined { return this._g(':t'); }
    public set t(v: Int64Value | undefined) { this._s(':t', v); }
    /** r. Serialized as `:r` */
    public get r(): Int64Value | undefined { return this._g(':r'); }
    public set r(v: Int64Value | undefined) { this._s(':r', v); }
    /** b. Serialized as `:b` */
    public get b(): Int64Value | undefined { return this._g(':b'); }
    public set b(v: Int64Value | undefined) { this._s(':b', v); }

}
/** Defines the ResetNonVisualPictureProps Class. Serialized as `oac:cNvPicPr` */
export class ResetNonVisualPictureProps extends OxmlCompositeElement<LfPrEmpty> {

    public static override _Q = 'oac:cNvPicPr';
    /** Returns LfPrEmpty. */
    public get lfPrEmpty(): LfPrEmpty | undefined { return this._f(LfPrEmpty); }

}
/** Defines the ModifyNonVisualPictureProps Class. Serialized as `oac:cNvPicPr` */
export class ModifyNonVisualPictureProps extends OxmlLeafElement {

    public static override _Q = 'oac:cNvPicPr';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',':noCrop',':preferRelativeResize',];
    /** noGrp. Serialized as `:noGrp` */
    public get noGrp(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrp(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** noSelect. Serialized as `:noSelect` */
    public get noSelect(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelect(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** noRot. Serialized as `:noRot` */
    public get noRot(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRot(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** noMove. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** noResize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** noEditPoints. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** noCrop. Serialized as `:noCrop` */
    public get noCrop(): BooleanValue | undefined { return this._g(':noCrop'); }
    public set noCrop(v: BooleanValue | undefined) { this._s(':noCrop', v); }
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    public get preferRelativeResize(): BooleanValue | undefined { return this._g(':preferRelativeResize'); }
    public set preferRelativeResize(v: BooleanValue | undefined) { this._s(':preferRelativeResize', v); }

}
/** Defines the CompressPictureProps Class. Serialized as `oac:compressPicPr` */
export class CompressPictureProps extends OxmlLeafElement {

    public static override _Q = 'oac:compressPicPr';
    public static override _A = [':removeCrop',':useLocalDpi',':cstate',];
    /** removeCrop. Serialized as `:removeCrop` */
    public get removeCrop(): BooleanValue | undefined { return this._g(':removeCrop'); }
    public set removeCrop(v: BooleanValue | undefined) { this._s(':removeCrop', v); }
    /** useLocalDpi. Serialized as `:useLocalDpi` */
    public get useLocalDpi(): BooleanValue | undefined { return this._g(':useLocalDpi'); }
    public set useLocalDpi(v: BooleanValue | undefined) { this._s(':useLocalDpi', v); }
    /** cstate. Serialized as `:cstate` */
    public get cstate(): BlipCompressionValues | undefined { return this._g(':cstate'); }
    public set cstate(v: BlipCompressionValues | undefined) { this._s(':cstate', v); }

}
/** Defines the ResetNonVisualConnectorProps Class. Serialized as `oac:cNvCxnSpPr` */
export class ResetNonVisualConnectorProps extends OxmlCompositeElement<StCxnEmpty | EndCxnEmpty | NoGrpEmpty | NoSelectEmpty | NoRotEmpty | NoChangeAspectEmpty | NoMoveEmpty | NoResizeEmpty | NoEditPointsEmpty | NoAdjustHandlesEmpty | NoChangeArrowheadsEmpty | NoChangeShapeTypeEmpty> {

    public static override _Q = 'oac:cNvCxnSpPr';
    /** Returns StCxnEmpty. */
    public get stCxnEmpty(): StCxnEmpty | undefined { return this._f(StCxnEmpty); }
    /** Returns EndCxnEmpty. */
    public get endCxnEmpty(): EndCxnEmpty | undefined { return this._f(EndCxnEmpty); }
    /** Returns NoGrpEmpty. */
    public get noGrpEmpty(): NoGrpEmpty | undefined { return this._f(NoGrpEmpty); }
    /** Returns NoSelectEmpty. */
    public get noSelectEmpty(): NoSelectEmpty | undefined { return this._f(NoSelectEmpty); }
    /** Returns NoRotEmpty. */
    public get noRotEmpty(): NoRotEmpty | undefined { return this._f(NoRotEmpty); }
    /** Returns NoChangeAspectEmpty. */
    public get noChangeAspectEmpty(): NoChangeAspectEmpty | undefined { return this._f(NoChangeAspectEmpty); }
    /** Returns NoMoveEmpty. */
    public get noMoveEmpty(): NoMoveEmpty | undefined { return this._f(NoMoveEmpty); }
    /** Returns NoResizeEmpty. */
    public get noResizeEmpty(): NoResizeEmpty | undefined { return this._f(NoResizeEmpty); }
    /** Returns NoEditPointsEmpty. */
    public get noEditPointsEmpty(): NoEditPointsEmpty | undefined { return this._f(NoEditPointsEmpty); }
    /** Returns NoAdjustHandlesEmpty. */
    public get noAdjustHandlesEmpty(): NoAdjustHandlesEmpty | undefined { return this._f(NoAdjustHandlesEmpty); }
    /** Returns NoChangeArrowheadsEmpty. */
    public get noChangeArrowheadsEmpty(): NoChangeArrowheadsEmpty | undefined { return this._f(NoChangeArrowheadsEmpty); }
    /** Returns NoChangeShapeTypeEmpty. */
    public get noChangeShapeTypeEmpty(): NoChangeShapeTypeEmpty | undefined { return this._f(NoChangeShapeTypeEmpty); }

}
/** Defines the ModifyNonVisualConnectorProps Class. Serialized as `oac:cNvCxnSpPr` */
export class ModifyNonVisualConnectorProps extends OxmlCompositeElement<StCxnConnection | EndCxnConnection> {

    public static override _Q = 'oac:cNvCxnSpPr';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',];
    /** noGrp. Serialized as `:noGrp` */
    public get noGrp(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrp(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** noSelect. Serialized as `:noSelect` */
    public get noSelect(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelect(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** noRot. Serialized as `:noRot` */
    public get noRot(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRot(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** noMove. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** noResize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** noEditPoints. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** Returns StCxnConnection. */
    public get stCxnConnection(): StCxnConnection | undefined { return this._f(StCxnConnection); }
    /** Returns EndCxnConnection. */
    public get endCxnConnection(): EndCxnConnection | undefined { return this._f(EndCxnConnection); }

}
/** Defines the ConnectionType Class. */
export abstract class ConnectionType extends OxmlLeafElement {

    public static override _A = [':id',':idx',];
    /** Identifier. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }

}
/** Defines the EndCxnConnection Class. Serialized as `oac:endCxn` */
export class EndCxnConnection extends ConnectionType {

    public static override _Q = 'oac:endCxn';

}
/** Defines the StCxnConnection Class. Serialized as `oac:stCxn` */
export class StCxnConnection extends ConnectionType {

    public static override _Q = 'oac:stCxn';

}
/** Defines the ModifyNonVisualGraphicFrameProps Class. Serialized as `oac:cNvGraphicFramePr` */
export class ModifyNonVisualGraphicFrameProps extends OxmlLeafElement {

    public static override _Q = 'oac:cNvGraphicFramePr';
    public static override _A = [':noGrp',':noDrilldown',':noSelect',':noChangeAspect',':noMove',':noResize',];
    /** noGrp. Serialized as `:noGrp` */
    public get noGrp(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrp(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** noDrilldown. Serialized as `:noDrilldown` */
    public get noDrilldown(): BooleanValue | undefined { return this._g(':noDrilldown'); }
    public set noDrilldown(v: BooleanValue | undefined) { this._s(':noDrilldown', v); }
    /** noSelect. Serialized as `:noSelect` */
    public get noSelect(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelect(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** noMove. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** noResize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }

}
/** Defines the NonVisualGroupDrawingShapeProps Class. Serialized as `oac:cNvGrpSpPr` */
export class NonVisualGroupDrawingShapeProps extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'oac:cNvGrpSpPr';
    /** Returns AGroupShapeLocks. */
    public get groupShapeLocks(): AGroupShapeLocks | undefined { return this._f(AGroupShapeLocks); }
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(ANonVisualGroupDrawingShapePropsExtensionList); }

}
/** Defines the NonVisualDrawingProps Class. Serialized as `oac:cNvPr` */
export class NonVisualDrawingProps extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'oac:cNvPr';
    public static override _A = [':id',':name',':descr',':hidden',':title',];
    /** Application defined unique identifier.. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Description of the drawing element.. Serialized as `:descr` */
    public get description(): StringValue | undefined { return this._g(':descr'); }
    public set description(v: StringValue | undefined) { this._s(':descr', v); }
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Hyperlink associated with clicking or selecting the element.. */
    public get hyperlinkOnClick(): AHyperlinkOnClick | undefined { return this._f(AHyperlinkOnClick); }
    /** Hyperlink associated with hovering over the element.. */
    public get hyperlinkOnHover(): AHyperlinkOnHover | undefined { return this._f(AHyperlinkOnHover); }
    /** Future extension. */
    public get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined { return this._f(ANonVisualDrawingPropertiesExtensionList); }

}
/** Defines the ResetGroupShapeProperties Class. Serialized as `oac:grpSpPr` */
export class ResetGroupShapeProperties extends OxmlCompositeElement<XfrmEmpty | FillEmpty | EffectEmpty | Scene3dEmpty | ExtLstEmpty | BwModeEmpty> {

    public static override _Q = 'oac:grpSpPr';
    /** Returns XfrmEmpty. */
    public get xfrmEmpty(): XfrmEmpty | undefined { return this._f(XfrmEmpty); }
    /** Returns FillEmpty. */
    public get fillEmpty(): FillEmpty | undefined { return this._f(FillEmpty); }
    /** Returns EffectEmpty. */
    public get effectEmpty(): EffectEmpty | undefined { return this._f(EffectEmpty); }
    /** Returns Scene3dEmpty. */
    public get scene3dEmpty(): Scene3dEmpty | undefined { return this._f(Scene3dEmpty); }
    /** Returns ExtLstEmpty. */
    public get extLstEmpty(): ExtLstEmpty | undefined { return this._f(ExtLstEmpty); }
    /** Returns BwModeEmpty. */
    public get bwModeEmpty(): BwModeEmpty | undefined { return this._f(BwModeEmpty); }

}
/** Defines the GroupShapeProperties Class. Serialized as `oac:grpSpPr` */
export class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {

    public static override _Q = 'oac:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): ATransformGroup | undefined { return this._f(ATransformGroup); }

}
/** Defines the ModifyNonVisualGroupDrawingShapeProps Class. Serialized as `oac:cNvGrpSpPr` */
export class ModifyNonVisualGroupDrawingShapeProps extends OxmlLeafElement {

    public static override _Q = 'oac:cNvGrpSpPr';
    public static override _A = [':noGrp',':noUngrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',];
    /** noGrp. Serialized as `:noGrp` */
    public get noGrp(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrp(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** noUngrp. Serialized as `:noUngrp` */
    public get noUngrp(): BooleanValue | undefined { return this._g(':noUngrp'); }
    public set noUngrp(v: BooleanValue | undefined) { this._s(':noUngrp', v); }
    /** noSelect. Serialized as `:noSelect` */
    public get noSelect(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelect(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** noRot. Serialized as `:noRot` */
    public get noRot(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRot(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** noMove. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** noResize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }

}
/** Defines the ResetBlipFillProperties Class. Serialized as `oac:blipFill` */
export class ResetBlipFillProperties extends OxmlCompositeElement<SrcRectEmpty | FillModeEmpty | DpiEmpty | RotWithShapeEmpty> {

    public static override _Q = 'oac:blipFill';
    /** Returns SrcRectEmpty. */
    public get srcRectEmpty(): SrcRectEmpty | undefined { return this._f(SrcRectEmpty); }
    /** Returns FillModeEmpty. */
    public get fillModeEmpty(): FillModeEmpty | undefined { return this._f(FillModeEmpty); }
    /** Returns DpiEmpty. */
    public get dpiEmpty(): DpiEmpty | undefined { return this._f(DpiEmpty); }
    /** Returns RotWithShapeEmpty. */
    public get rotWithShapeEmpty(): RotWithShapeEmpty | undefined { return this._f(RotWithShapeEmpty); }

}
/** Defines the OpenXmlRelativeRectPropsElement Class. */
export abstract class OpenXmlRelativeRectPropsElement extends OxmlLeafElement {

    public static override _A = [':l',':t',':r',':b',];
    /** l. Serialized as `:l` */
    public get l(): Int32Value | undefined { return this._g(':l'); }
    public set l(v: Int32Value | undefined) { this._s(':l', v); }
    /** t. Serialized as `:t` */
    public get t(): Int32Value | undefined { return this._g(':t'); }
    public set t(v: Int32Value | undefined) { this._s(':t', v); }
    /** r. Serialized as `:r` */
    public get r(): Int32Value | undefined { return this._g(':r'); }
    public set r(v: Int32Value | undefined) { this._s(':r', v); }
    /** b. Serialized as `:b` */
    public get b(): Int32Value | undefined { return this._g(':b'); }
    public set b(v: Int32Value | undefined) { this._s(':b', v); }

}
/** Defines the SrcRectRelativeRectProps Class. Serialized as `oac:srcRect` */
export class SrcRectRelativeRectProps extends OpenXmlRelativeRectPropsElement {

    public static override _Q = 'oac:srcRect';

}
/** Defines the FillRectRelativeRectProps Class. Serialized as `oac:fillRect` */
export class FillRectRelativeRectProps extends OpenXmlRelativeRectPropsElement {

    public static override _Q = 'oac:fillRect';

}
/** Defines the BlipFillProperties Class. Serialized as `oac:blipFill` */
export class BlipFillProperties extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {

    public static override _Q = 'oac:blipFill';
    public static override _A = [':dpi',':rotWithShape',];
    /** DPI Setting. Serialized as `:dpi` */
    public get dpi(): UInt32Value | undefined { return this._g(':dpi'); }
    public set dpi(v: UInt32Value | undefined) { this._s(':dpi', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** Returns ABlip. */
    public get blip(): ABlip | undefined { return this._f(ABlip); }
    /** Source Rectangle. */
    public get sourceRectangle(): ASourceRectangle | undefined { return this._f(ASourceRectangle); }

}
/** Defines the UseBoundsXsdboolean Class. Serialized as `oac:useBounds` */
export class UseBoundsXsdboolean extends OxmlLeafTextElement {

    public static override _Q = 'oac:useBounds';

}
/** Defines the ResetXsdboolean Class. Serialized as `oac:reset` */
export class ResetXsdboolean extends OxmlLeafTextElement {

    public static override _Q = 'oac:reset';

}
/** Defines the ModifyShapeStyleProps Class. Serialized as `oac:style` */
export class ModifyShapeStyleProps extends OxmlCompositeElement<LnRefStyleMatrixReference | FillRefStyleMatrixReference | EffectRefStyleMatrixReference | FontReference> {

    public static override _Q = 'oac:style';
    /** Returns LnRefStyleMatrixReference. */
    public get lnRefStyleMatrixReference(): LnRefStyleMatrixReference | undefined { return this._f(LnRefStyleMatrixReference); }
    /** Returns FillRefStyleMatrixReference. */
    public get fillRefStyleMatrixReference(): FillRefStyleMatrixReference | undefined { return this._f(FillRefStyleMatrixReference); }
    /** Returns EffectRefStyleMatrixReference. */
    public get effectRefStyleMatrixReference(): EffectRefStyleMatrixReference | undefined { return this._f(EffectRefStyleMatrixReference); }
    /** Returns FontReference. */
    public get fontReference(): FontReference | undefined { return this._f(FontReference); }

}
/** Defines the FontReference Class. Serialized as `oac:fontRef` */
export class FontReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _Q = 'oac:fontRef';
    public static override _A = [':idx',];
    /** Identifier. Serialized as `:idx` */
    public get index(): FontCollectionIndexValues | undefined { return this._g(':idx'); }
    public set index(v: FontCollectionIndexValues | undefined) { this._s(':idx', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Defines the StyleMatrixReferenceType Class. */
export abstract class StyleMatrixReferenceType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _A = [':idx',];
    /** Style Matrix Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Defines the EffectRefStyleMatrixReference Class. Serialized as `oac:effectRef` */
export class EffectRefStyleMatrixReference extends StyleMatrixReferenceType {

    public static override _Q = 'oac:effectRef';

}
/** Defines the FillRefStyleMatrixReference Class. Serialized as `oac:fillRef` */
export class FillRefStyleMatrixReference extends StyleMatrixReferenceType {

    public static override _Q = 'oac:fillRef';

}
/** Defines the LnRefStyleMatrixReference Class. Serialized as `oac:lnRef` */
export class LnRefStyleMatrixReference extends StyleMatrixReferenceType {

    public static override _Q = 'oac:lnRef';

}
/** Defines the ResetShapeProperties Class. Serialized as `oac:spPr` */
export class ResetShapeProperties extends OxmlCompositeElement<XfrmEmpty | GeomEmpty | FillEmpty | LnEmpty | EffectEmpty | Scene3dEmpty | Sp3dEmpty | ExtLstEmpty | BwModeEmpty> {

    public static override _Q = 'oac:spPr';
    /** Returns XfrmEmpty. */
    public get xfrmEmpty(): XfrmEmpty | undefined { return this._f(XfrmEmpty); }
    /** Returns GeomEmpty. */
    public get geomEmpty(): GeomEmpty | undefined { return this._f(GeomEmpty); }
    /** Returns FillEmpty. */
    public get fillEmpty(): FillEmpty | undefined { return this._f(FillEmpty); }
    /** Returns LnEmpty. */
    public get lnEmpty(): LnEmpty | undefined { return this._f(LnEmpty); }
    /** Returns EffectEmpty. */
    public get effectEmpty(): EffectEmpty | undefined { return this._f(EffectEmpty); }
    /** Returns Scene3dEmpty. */
    public get scene3dEmpty(): Scene3dEmpty | undefined { return this._f(Scene3dEmpty); }
    /** Returns Sp3dEmpty. */
    public get sp3dEmpty(): Sp3dEmpty | undefined { return this._f(Sp3dEmpty); }
    /** Returns ExtLstEmpty. */
    public get extLstEmpty(): ExtLstEmpty | undefined { return this._f(ExtLstEmpty); }
    /** Returns BwModeEmpty. */
    public get bwModeEmpty(): BwModeEmpty | undefined { return this._f(BwModeEmpty); }

}
/** Defines the OpenXmlEmptyElement Class. */
export abstract class OpenXmlEmptyElement extends OxmlLeafElement {


}
/** Defines the HlinkHoverEmpty Class. Serialized as `oac:hlinkHover` */
export class HlinkHoverEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:hlinkHover';

}
/** Defines the HlinkClickEmpty Class. Serialized as `oac:hlinkClick` */
export class HlinkClickEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:hlinkClick';

}
/** Defines the LfPrEmpty Class. Serialized as `oac:lfPr` */
export class LfPrEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:lfPr';

}
/** Defines the NoChangeShapeTypeEmpty Class. Serialized as `oac:noChangeShapeType` */
export class NoChangeShapeTypeEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noChangeShapeType';

}
/** Defines the NoChangeArrowheadsEmpty Class. Serialized as `oac:noChangeArrowheads` */
export class NoChangeArrowheadsEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noChangeArrowheads';

}
/** Defines the NoAdjustHandlesEmpty Class. Serialized as `oac:noAdjustHandles` */
export class NoAdjustHandlesEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noAdjustHandles';

}
/** Defines the NoEditPointsEmpty Class. Serialized as `oac:noEditPoints` */
export class NoEditPointsEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noEditPoints';

}
/** Defines the NoResizeEmpty Class. Serialized as `oac:noResize` */
export class NoResizeEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noResize';

}
/** Defines the NoMoveEmpty Class. Serialized as `oac:noMove` */
export class NoMoveEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noMove';

}
/** Defines the NoChangeAspectEmpty Class. Serialized as `oac:noChangeAspect` */
export class NoChangeAspectEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noChangeAspect';

}
/** Defines the NoRotEmpty Class. Serialized as `oac:noRot` */
export class NoRotEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noRot';

}
/** Defines the NoSelectEmpty Class. Serialized as `oac:noSelect` */
export class NoSelectEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noSelect';

}
/** Defines the NoGrpEmpty Class. Serialized as `oac:noGrp` */
export class NoGrpEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:noGrp';

}
/** Defines the EndCxnEmpty Class. Serialized as `oac:endCxn` */
export class EndCxnEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:endCxn';

}
/** Defines the StCxnEmpty Class. Serialized as `oac:stCxn` */
export class StCxnEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:stCxn';

}
/** Defines the RotWithShapeEmpty Class. Serialized as `oac:rotWithShape` */
export class RotWithShapeEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:rotWithShape';

}
/** Defines the DpiEmpty Class. Serialized as `oac:dpi` */
export class DpiEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:dpi';

}
/** Defines the FillModeEmpty Class. Serialized as `oac:fillMode` */
export class FillModeEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:fillMode';

}
/** Defines the SrcRectEmpty Class. Serialized as `oac:srcRect` */
export class SrcRectEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:srcRect';

}
/** Defines the BwModeEmpty Class. Serialized as `oac:bwMode` */
export class BwModeEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:bwMode';

}
/** Defines the ExtLstEmpty Class. Serialized as `oac:extLst` */
export class ExtLstEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:extLst';

}
/** Defines the Sp3dEmpty Class. Serialized as `oac:sp3d` */
export class Sp3dEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:sp3d';

}
/** Defines the Scene3dEmpty Class. Serialized as `oac:scene3d` */
export class Scene3dEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:scene3d';

}
/** Defines the EffectEmpty Class. Serialized as `oac:effect` */
export class EffectEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:effect';

}
/** Defines the LnEmpty Class. Serialized as `oac:ln` */
export class LnEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:ln';

}
/** Defines the FillEmpty Class. Serialized as `oac:fill` */
export class FillEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:fill';

}
/** Defines the GeomEmpty Class. Serialized as `oac:geom` */
export class GeomEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:geom';

}
/** Defines the XfrmEmpty Class. Serialized as `oac:xfrm` */
export class XfrmEmpty extends OpenXmlEmptyElement {

    public static override _Q = 'oac:xfrm';

}
/** Defines the ShapeProperties Class. Serialized as `oac:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'oac:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the ShapePropsMonikerList Class. Serialized as `oac:spMkLst` */
export class ShapePropsMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:spMkLst';

}
/** Defines the ModifyNonVisualDrawingShapeProps Class. Serialized as `oac:cNvSpPr` */
export class ModifyNonVisualDrawingShapeProps extends OxmlLeafElement {

    public static override _Q = 'oac:cNvSpPr';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',':noTextEdit',':txBox',];
    /** noGrp. Serialized as `:noGrp` */
    public get noGrp(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrp(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** noSelect. Serialized as `:noSelect` */
    public get noSelect(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelect(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** noRot. Serialized as `:noRot` */
    public get noRot(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRot(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** noChangeAspect. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** noMove. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** noResize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** noEditPoints. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** noAdjustHandles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** noChangeArrowheads. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** noChangeShapeType. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** noTextEdit. Serialized as `:noTextEdit` */
    public get noTextEdit(): BooleanValue | undefined { return this._g(':noTextEdit'); }
    public set noTextEdit(v: BooleanValue | undefined) { this._s(':noTextEdit', v); }
    /** txBox. Serialized as `:txBox` */
    public get txBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set txBox(v: BooleanValue | undefined) { this._s(':txBox', v); }

}
/** Defines the TextBodyProperties Class. Serialized as `oac:bodyPr` */
export class TextBodyProperties extends OxmlCompositeElement<APresetTextWrap | ANoAutoFit | ANormalAutoFit | AShapeAutoFit | AScene3DType | AShape3DType | AFlatText | AExtensionList> {

    public static override _Q = 'oac:bodyPr';
    public static override _A = [':rot',':spcFirstLastPara',':vertOverflow',':horzOverflow',':vert',':wrap',':lIns',':tIns',':rIns',':bIns',':numCol',':spcCol',':rtlCol',':fromWordArt',':anchor',':anchorCtr',':forceAA',':upright',':compatLnSpc',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): Int32Value | undefined { return this._g(':rot'); }
    public set rotation(v: Int32Value | undefined) { this._s(':rot', v); }
    /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
    public get useParagraphSpacing(): BooleanValue | undefined { return this._g(':spcFirstLastPara'); }
    public set useParagraphSpacing(v: BooleanValue | undefined) { this._s(':spcFirstLastPara', v); }
    /** Text Vertical Overflow. Serialized as `:vertOverflow` */
    public get verticalOverflow(): TextVerticalOverflowValues | undefined { return this._g(':vertOverflow'); }
    public set verticalOverflow(v: TextVerticalOverflowValues | undefined) { this._s(':vertOverflow', v); }
    /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
    public get horizontalOverflow(): TextHorizontalOverflowValues | undefined { return this._g(':horzOverflow'); }
    public set horizontalOverflow(v: TextHorizontalOverflowValues | undefined) { this._s(':horzOverflow', v); }
    /** Vertical Text. Serialized as `:vert` */
    public get vertical(): TextVerticalValues | undefined { return this._g(':vert'); }
    public set vertical(v: TextVerticalValues | undefined) { this._s(':vert', v); }
    /** Text Wrapping Type. Serialized as `:wrap` */
    public get wrap(): TextWrappingValues | undefined { return this._g(':wrap'); }
    public set wrap(v: TextWrappingValues | undefined) { this._s(':wrap', v); }
    /** Left Inset. Serialized as `:lIns` */
    public get leftInset(): Int32Value | undefined { return this._g(':lIns'); }
    public set leftInset(v: Int32Value | undefined) { this._s(':lIns', v); }
    /** Top Inset. Serialized as `:tIns` */
    public get topInset(): Int32Value | undefined { return this._g(':tIns'); }
    public set topInset(v: Int32Value | undefined) { this._s(':tIns', v); }
    /** Right Inset. Serialized as `:rIns` */
    public get rightInset(): Int32Value | undefined { return this._g(':rIns'); }
    public set rightInset(v: Int32Value | undefined) { this._s(':rIns', v); }
    /** Bottom Inset. Serialized as `:bIns` */
    public get bottomInset(): Int32Value | undefined { return this._g(':bIns'); }
    public set bottomInset(v: Int32Value | undefined) { this._s(':bIns', v); }
    /** Number of Columns. Serialized as `:numCol` */
    public get columnCount(): Int32Value | undefined { return this._g(':numCol'); }
    public set columnCount(v: Int32Value | undefined) { this._s(':numCol', v); }
    /** Space Between Columns. Serialized as `:spcCol` */
    public get columnSpacing(): Int32Value | undefined { return this._g(':spcCol'); }
    public set columnSpacing(v: Int32Value | undefined) { this._s(':spcCol', v); }
    /** Columns Right-To-Left. Serialized as `:rtlCol` */
    public get rightToLeftColumns(): BooleanValue | undefined { return this._g(':rtlCol'); }
    public set rightToLeftColumns(v: BooleanValue | undefined) { this._s(':rtlCol', v); }
    /** From WordArt. Serialized as `:fromWordArt` */
    public get fromWordArt(): BooleanValue | undefined { return this._g(':fromWordArt'); }
    public set fromWordArt(v: BooleanValue | undefined) { this._s(':fromWordArt', v); }
    /** Anchor. Serialized as `:anchor` */
    public get anchor(): TextAnchoringTypeValues | undefined { return this._g(':anchor'); }
    public set anchor(v: TextAnchoringTypeValues | undefined) { this._s(':anchor', v); }
    /** Anchor Center. Serialized as `:anchorCtr` */
    public get anchorCenter(): BooleanValue | undefined { return this._g(':anchorCtr'); }
    public set anchorCenter(v: BooleanValue | undefined) { this._s(':anchorCtr', v); }
    /** Force Anti-Alias. Serialized as `:forceAA` */
    public get forceAntiAlias(): BooleanValue | undefined { return this._g(':forceAA'); }
    public set forceAntiAlias(v: BooleanValue | undefined) { this._s(':forceAA', v); }
    /** Text Upright. Serialized as `:upright` */
    public get upRight(): BooleanValue | undefined { return this._g(':upright'); }
    public set upRight(v: BooleanValue | undefined) { this._s(':upright', v); }
    /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
    public get compatibleLineSpacing(): BooleanValue | undefined { return this._g(':compatLnSpc'); }
    public set compatibleLineSpacing(v: BooleanValue | undefined) { this._s(':compatLnSpc', v); }
    /** Preset Text Shape. */
    public get presetTextWrap(): APresetTextWrap | undefined { return this._f(APresetTextWrap); }

}
/** Defines the TextParagraphPropertiesType Class. Serialized as `oac:pPr` */
export class TextParagraphPropertiesType extends OxmlCompositeElement<ALineSpacing | ASpaceBefore | ASpaceAfter | ABulletColorText | ABulletColor | ABulletSizeText | ABulletSizePercentage | ABulletSizePoints | ABulletFontText | ABulletFont | ANoBullet | AAutoNumberedBullet | ACharacterBullet | APictureBullet | ATabStopList | ADefaultRunProperties | AExtensionList> {

    public static override _Q = 'oac:pPr';
    public static override _A = [':marL',':marR',':lvl',':indent',':algn',':defTabSz',':rtl',':eaLnBrk',':fontAlgn',':latinLnBrk',':hangingPunct',];
    /** Left Margin. Serialized as `:marL` */
    public get leftMargin(): Int32Value | undefined { return this._g(':marL'); }
    public set leftMargin(v: Int32Value | undefined) { this._s(':marL', v); }
    /** Right Margin. Serialized as `:marR` */
    public get rightMargin(): Int32Value | undefined { return this._g(':marR'); }
    public set rightMargin(v: Int32Value | undefined) { this._s(':marR', v); }
    /** Level. Serialized as `:lvl` */
    public get level(): Int32Value | undefined { return this._g(':lvl'); }
    public set level(v: Int32Value | undefined) { this._s(':lvl', v); }
    /** Indent. Serialized as `:indent` */
    public get indent(): Int32Value | undefined { return this._g(':indent'); }
    public set indent(v: Int32Value | undefined) { this._s(':indent', v); }
    /** Alignment. Serialized as `:algn` */
    public get alignment(): TextAlignmentTypeValues | undefined { return this._g(':algn'); }
    public set alignment(v: TextAlignmentTypeValues | undefined) { this._s(':algn', v); }
    /** Default Tab Size. Serialized as `:defTabSz` */
    public get defaultTabSize(): Int32Value | undefined { return this._g(':defTabSz'); }
    public set defaultTabSize(v: Int32Value | undefined) { this._s(':defTabSz', v); }
    /** Right To Left. Serialized as `:rtl` */
    public get rightToLeft(): BooleanValue | undefined { return this._g(':rtl'); }
    public set rightToLeft(v: BooleanValue | undefined) { this._s(':rtl', v); }
    /** East Asian Line Break. Serialized as `:eaLnBrk` */
    public get eastAsianLineBreak(): BooleanValue | undefined { return this._g(':eaLnBrk'); }
    public set eastAsianLineBreak(v: BooleanValue | undefined) { this._s(':eaLnBrk', v); }
    /** Font Alignment. Serialized as `:fontAlgn` */
    public get fontAlignment(): TextFontAlignmentValues | undefined { return this._g(':fontAlgn'); }
    public set fontAlignment(v: TextFontAlignmentValues | undefined) { this._s(':fontAlgn', v); }
    /** Latin Line Break. Serialized as `:latinLnBrk` */
    public get latinLineBreak(): BooleanValue | undefined { return this._g(':latinLnBrk'); }
    public set latinLineBreak(v: BooleanValue | undefined) { this._s(':latinLnBrk', v); }
    /** Hanging Punctuation. Serialized as `:hangingPunct` */
    public get height(): BooleanValue | undefined { return this._g(':hangingPunct'); }
    public set height(v: BooleanValue | undefined) { this._s(':hangingPunct', v); }
    /** Line Spacing. */
    public get lineSpacing(): ALineSpacing | undefined { return this._f(ALineSpacing); }
    /** Space Before. */
    public get spaceBefore(): ASpaceBefore | undefined { return this._f(ASpaceBefore); }
    /** Space After. */
    public get spaceAfter(): ASpaceAfter | undefined { return this._f(ASpaceAfter); }

}
/** Defines the Point2DType Class. Serialized as `oac:off` */
export class Point2DType extends OxmlLeafElement {

    public static override _Q = 'oac:off';
    public static override _A = [':x',':y',];
    /** X-Axis Coordinate. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Axis Coordinate. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }

}
/** Defines the ModifyTransformProps Class. Serialized as `oac:xfrm` */
export class ModifyTransformProps extends OxmlLeafElement {

    public static override _Q = 'oac:xfrm';
    public static override _A = [':x',':y',':cx',':cy',':rot',':flipH',':flipV',];
    /** x. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** y. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }
    /** cx. Serialized as `:cx` */
    public get cx(): Int64Value | undefined { return this._g(':cx'); }
    public set cx(v: Int64Value | undefined) { this._s(':cx', v); }
    /** cy. Serialized as `:cy` */
    public get cy(): Int64Value | undefined { return this._g(':cy'); }
    public set cy(v: Int64Value | undefined) { this._s(':cy', v); }
    /** rot. Serialized as `:rot` */
    public get rot(): Int32Value | undefined { return this._g(':rot'); }
    public set rot(v: Int32Value | undefined) { this._s(':rot', v); }
    /** flipH. Serialized as `:flipH` */
    public get flipH(): BooleanValue | undefined { return this._g(':flipH'); }
    public set flipH(v: BooleanValue | undefined) { this._s(':flipH', v); }
    /** flipV. Serialized as `:flipV` */
    public get flipV(): BooleanValue | undefined { return this._g(':flipV'); }
    public set flipV(v: BooleanValue | undefined) { this._s(':flipV', v); }

}
/** Defines the ModifyNonVisualDrawingProps Class. Serialized as `oac:cNvPr` */
export class ModifyNonVisualDrawingProps extends OxmlLeafElement {

    public static override _Q = 'oac:cNvPr';
    public static override _A = [':name',':descr',':hidden',':title',':decor',':scriptLink',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** descr. Serialized as `:descr` */
    public get descr(): StringValue | undefined { return this._g(':descr'); }
    public set descr(v: StringValue | undefined) { this._s(':descr', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** decor. Serialized as `:decor` */
    public get decor(): BooleanValue | undefined { return this._g(':decor'); }
    public set decor(v: BooleanValue | undefined) { this._s(':decor', v); }
    /** scriptLink. Serialized as `:scriptLink` */
    public get scriptLink(): StringValue | undefined { return this._g(':scriptLink'); }
    public set scriptLink(v: StringValue | undefined) { this._s(':scriptLink', v); }

}
/** Defines the TableColumnMonikerList Class. Serialized as `oac:gridColMkLst` */
export class TableColumnMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:gridColMkLst';

}
/** Defines the TableRowMonikerList Class. Serialized as `oac:trMkLst` */
export class TableRowMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:trMkLst';

}
/** Defines the TableCellMonikerList Class. Serialized as `oac:tcMkLst` */
export class TableCellMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:tcMkLst';

}
/** Defines the TableMonikerList Class. Serialized as `oac:tblMkLst` */
export class TableMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:tblMkLst';

}
/** Defines the DrawingSelectionStgList Class. Serialized as `oac:drSelLst` */
export class DrawingSelectionStgList extends OxmlCompositeElement {

    public static override _Q = 'oac:drSelLst';

}
/** Defines the EditorSelectionStgList Class. Serialized as `oac:editorSelLst` */
export class EditorSelectionStgList extends OxmlCompositeElement {

    public static override _Q = 'oac:editorSelLst';

}
/** Defines the ViewSelectionStgList Class. Serialized as `oac:viewSelLst` */
export class ViewSelectionStgList extends OxmlCompositeElement {

    public static override _Q = 'oac:viewSelLst';

}
/** Defines the Model3DMonikerList Class. Serialized as `oac:model3DMkLst` */
export class Model3DMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:model3DMkLst';

}
/** Defines the HyperlinkMonikerList Class. Serialized as `oac:hlinkMkLst` */
export class HyperlinkMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:hlinkMkLst';

}
/** Defines the TextCharRangeMonikerList Class. Serialized as `oac:txMkLst` */
export class TextCharRangeMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:txMkLst';

}
/** Defines the TextBodyMonikerList Class. Serialized as `oac:txBodyMkLst` */
export class TextBodyMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:txBodyMkLst';

}
/** Defines the InkMonikerList Class. Serialized as `oac:inkMkLst` */
export class InkMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:inkMkLst';

}
/** Defines the PictureMonikerList Class. Serialized as `oac:picMkLst` */
export class PictureMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:picMkLst';

}
/** Defines the ConnectorMonikerList Class. Serialized as `oac:cxnSpMkLst` */
export class ConnectorMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:cxnSpMkLst';

}
/** Defines the GraphicFrameMonikerList Class. Serialized as `oac:graphicFrameMkLst` */
export class GraphicFrameMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:graphicFrameMkLst';

}
/** Defines the ShapeMonikerList Class. Serialized as `oac:spMkLst` */
export class ShapeMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:spMkLst';

}
/** Defines the GraphicParentMonikerList Class. Serialized as `oac:graphicParentMkLst` */
export class GraphicParentMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:graphicParentMkLst';

}
/** Defines the DocumentContextMonikerList Class. Serialized as `oac:dcMkLst` */
export class DocumentContextMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:dcMkLst';

}
/** Defines the ImgLink Class. Serialized as `oac:imgLink` */
export class ImgLink extends OxmlLeafElement {

    public static override _Q = 'oac:imgLink';
    public static override _A = [':tgt',];
    /** tgt. Serialized as `:tgt` */
    public get tgt(): StringValue | undefined { return this._g(':tgt'); }
    public set tgt(v: StringValue | undefined) { this._s(':tgt', v); }

}
/** Defines the GroupCommand Class. Serialized as `oac:grpCmd` */
export class GroupCommand extends OxmlCompositeElement<DrawingMonikerList | ShapeMoniker | GroupShapeMoniker | GraphicFrameMoniker | ConnectorMoniker | PictureMoniker | InkMoniker | GroupShapeProperties | NonVisualDrawingProps | NonVisualGroupDrawingShapeProps> {

    public static override _Q = 'oac:grpCmd';
    public static override _A = [':verId',':preventRegroup',':grpId',];
    /** verId. Serialized as `:verId` */
    public get verId(): UInt32Value | undefined { return this._g(':verId'); }
    public set verId(v: UInt32Value | undefined) { this._s(':verId', v); }
    /** preventRegroup. Serialized as `:preventRegroup` */
    public get preventRegroup(): BooleanValue | undefined { return this._g(':preventRegroup'); }
    public set preventRegroup(v: BooleanValue | undefined) { this._s(':preventRegroup', v); }
    /** grpId. Serialized as `:grpId` */
    public get grpId(): UInt32Value | undefined { return this._g(':grpId'); }
    public set grpId(v: UInt32Value | undefined) { this._s(':grpId', v); }
    /** Returns DrawingMonikerList. */
    public get drawingMonikerList(): DrawingMonikerList | undefined { return this._f(DrawingMonikerList); }

}
/** Defines the TextBodyPackage Class. Serialized as `oac:txBodyPkg` */
export class TextBodyPackage extends OxmlLeafElement {

    public static override _Q = 'oac:txBodyPkg';

}
/** Defines the ResourceUrl Class. Serialized as `oac:imgUrl` */
export class ResourceUrl extends OxmlLeafElement {

    public static override _Q = 'oac:imgUrl';
    public static override _A = [':src',':linkage',];
    /** src. Serialized as `:src` */
    public get src(): StringValue | undefined { return this._g(':src'); }
    public set src(v: StringValue | undefined) { this._s(':src', v); }
    /** linkage. Serialized as `:linkage` */
    public get linkage(): ResourceLinkage | undefined { return this._g(':linkage'); }
    public set linkage(v: ResourceLinkage | undefined) { this._s(':linkage', v); }

}
/** Defines the OpenXmlImgDataElement Class. */
export abstract class OpenXmlImgDataElement extends OxmlLeafTextElement {


}
/** Defines the SndDataImgData Class. Serialized as `oac:sndData` */
export class SndDataImgData extends OpenXmlImgDataElement {

    public static override _Q = 'oac:sndData';

}
/** Defines the OrigImgDataImgData Class. Serialized as `oac:origImgData` */
export class OrigImgDataImgData extends OpenXmlImgDataElement {

    public static override _Q = 'oac:origImgData';

}
/** Defines the ImgDataImgData Class. Serialized as `oac:imgData` */
export class ImgDataImgData extends OpenXmlImgDataElement {

    public static override _Q = 'oac:imgData';

}
/** Defines the OpenXmlDrawingElementMonikerListElement Class. */
export abstract class OpenXmlDrawingElementMonikerListElement extends OxmlCompositeElement {


}
/** Defines the DeTgtMkLstDrawingElementMonikerList Class. Serialized as `oac:deTgtMkLst` */
export class DeTgtMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {

    public static override _Q = 'oac:deTgtMkLst';

}
/** Defines the DeSrcMkLstDrawingElementMonikerList Class. Serialized as `oac:deSrcMkLst` */
export class DeSrcMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {

    public static override _Q = 'oac:deSrcMkLst';

}
/** Defines the DeMasterMkLstDrawingElementMonikerList Class. Serialized as `oac:deMasterMkLst` */
export class DeMasterMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {

    public static override _Q = 'oac:deMasterMkLst';

}
/** Defines the DeMkLstDrawingElementMonikerList Class. Serialized as `oac:deMkLst` */
export class DeMkLstDrawingElementMonikerList extends OpenXmlDrawingElementMonikerListElement {

    public static override _Q = 'oac:deMkLst';

}
/** Defines the DrawingElementPackage Class. Serialized as `oac:dePkg` */
export class DrawingElementPackage extends OxmlLeafElement {

    public static override _Q = 'oac:dePkg';

}
/** Defines the GroupShapeMonikerList Class. Serialized as `oac:grpSpMkLst` */
export class GroupShapeMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:grpSpMkLst';

}
/** Defines the Transform2D Class. Serialized as `oac:xfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'oac:xfrm';
    public static override _A = [':rot',':flipH',':flipV',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): Int32Value | undefined { return this._g(':rot'); }
    public set rotation(v: Int32Value | undefined) { this._s(':rot', v); }
    /** Horizontal Flip. Serialized as `:flipH` */
    public get horizontalFlip(): BooleanValue | undefined { return this._g(':flipH'); }
    public set horizontalFlip(v: BooleanValue | undefined) { this._s(':flipH', v); }
    /** Vertical Flip. Serialized as `:flipV` */
    public get verticalFlip(): BooleanValue | undefined { return this._g(':flipV'); }
    public set verticalFlip(v: BooleanValue | undefined) { this._s(':flipV', v); }
    /** Offset. */
    public get offset(): AOffset | undefined { return this._f(AOffset); }
    /** Extents. */
    public get extents(): AExtents | undefined { return this._f(AExtents); }

}
/** Defines the DrawingMonikerList Class. Serialized as `oac:dgMkLst` */
export class DrawingMonikerList extends OxmlCompositeElement {

    public static override _Q = 'oac:dgMkLst';

}
/** Defines the InkMoniker Class. Serialized as `oac:inkMk` */
export class InkMoniker extends OxmlLeafElement {

    public static override _Q = 'oac:inkMk';
    public static override _A = [':id',':creationId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** creationId. Serialized as `:creationId` */
    public get creationId(): StringValue | undefined { return this._g(':creationId'); }
    public set creationId(v: StringValue | undefined) { this._s(':creationId', v); }

}
/** Defines the PictureMoniker Class. Serialized as `oac:picMk` */
export class PictureMoniker extends OxmlLeafElement {

    public static override _Q = 'oac:picMk';
    public static override _A = [':id',':creationId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** creationId. Serialized as `:creationId` */
    public get creationId(): StringValue | undefined { return this._g(':creationId'); }
    public set creationId(v: StringValue | undefined) { this._s(':creationId', v); }

}
/** Defines the ConnectorMoniker Class. Serialized as `oac:cxnSpMk` */
export class ConnectorMoniker extends OxmlLeafElement {

    public static override _Q = 'oac:cxnSpMk';
    public static override _A = [':id',':creationId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** creationId. Serialized as `:creationId` */
    public get creationId(): StringValue | undefined { return this._g(':creationId'); }
    public set creationId(v: StringValue | undefined) { this._s(':creationId', v); }

}
/** Defines the GraphicFrameMoniker Class. Serialized as `oac:graphicFrameMk` */
export class GraphicFrameMoniker extends OxmlLeafElement {

    public static override _Q = 'oac:graphicFrameMk';
    public static override _A = [':id',':creationId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** creationId. Serialized as `:creationId` */
    public get creationId(): StringValue | undefined { return this._g(':creationId'); }
    public set creationId(v: StringValue | undefined) { this._s(':creationId', v); }

}
/** Defines the GroupShapeMoniker Class. Serialized as `oac:grpSpMk` */
export class GroupShapeMoniker extends OxmlLeafElement {

    public static override _Q = 'oac:grpSpMk';
    public static override _A = [':id',':creationId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** creationId. Serialized as `:creationId` */
    public get creationId(): StringValue | undefined { return this._g(':creationId'); }
    public set creationId(v: StringValue | undefined) { this._s(':creationId', v); }

}
/** Defines the ShapeMoniker Class. Serialized as `oac:spMk` */
export class ShapeMoniker extends OxmlLeafElement {

    public static override _Q = 'oac:spMk';
    public static override _A = [':id',':creationId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** creationId. Serialized as `:creationId` */
    public get creationId(): StringValue | undefined { return this._g(':creationId'); }
    public set creationId(v: StringValue | undefined) { this._s(':creationId', v); }

}

export function initOffice2016DrawingCommandNamespace() {
    TextCharRangeContext._D = {
        ':len': new OxmlAttr(':len', OxmlType.UInt32Value),
        ':hash': new OxmlAttr(':hash', OxmlType.UInt32Value),
    };
    ResetHyperlinkProps._C = {
        'oac:hlinkClick': HlinkClickEmpty,
        'oac:hlinkHover': HlinkHoverEmpty,
    };
    ModifyHyperlinkProps._C = {
        'oac:hlinkClick': HlinkClickHyperlinkProps,
        'oac:hlinkHover': HlinkHoverHyperlinkProps,
    };
    OpenXmlHyperlinkPropsElement._C = {
        'oac:sndData': SndDataImgData,
    };
    OpenXmlHyperlinkPropsElement._D = {
        ':source': new OxmlAttr(':source', OxmlType.StringValue),
        ':action': new OxmlAttr(':action', OxmlType.StringValue),
        ':tgtFrame': new OxmlAttr(':tgtFrame', OxmlType.StringValue),
        ':tooltip': new OxmlAttr(':tooltip', OxmlType.StringValue),
        ':highlightClick': new OxmlAttr(':highlightClick', OxmlType.BooleanValue),
        ':endSnd': new OxmlAttr(':endSnd', OxmlType.BooleanValue),
        ':sndName': new OxmlAttr(':sndName', OxmlType.StringValue),
    };
    HlinkHoverHyperlinkProps._C = {
        'oac:sndData': SndDataImgData,
    };
    HlinkClickHyperlinkProps._C = {
        'oac:sndData': SndDataImgData,
    };
    ModifyNonVisualInkProps._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
        ':isComment': new OxmlAttr(':isComment', OxmlType.BooleanValue),
    };
    LinePropertiesType._C = {
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:pattFill': APatternFill,
        'a:prstDash': APresetDash,
        'a:custDash': ACustomDash,
        'a:round': ARound,
        'a:bevel': ALineJoinBevel,
        'a:miter': AMiter,
        'a:headEnd': AHeadEnd,
        'a:tailEnd': ATailEnd,
        'a:extLst': ALinePropertiesExtensionList,
    };
    LinePropertiesType._D = {
        ':w': new OxmlAttr(':w', OxmlType.Int32Value),
        ':cap': new OxmlAttr(':cap', OxmlType.EnumValue, LineCapValuesArray),
        ':cmpd': new OxmlAttr(':cmpd', OxmlType.EnumValue, CompoundLineValuesArray),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, PenAlignmentValuesArray),
    };
    BoundRect._D = {
        ':l': new OxmlAttr(':l', OxmlType.Int64Value),
        ':t': new OxmlAttr(':t', OxmlType.Int64Value),
        ':r': new OxmlAttr(':r', OxmlType.Int64Value),
        ':b': new OxmlAttr(':b', OxmlType.Int64Value),
    };
    ResetNonVisualPictureProps._C = {
        'oac:lfPr': LfPrEmpty,
    };
    ModifyNonVisualPictureProps._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
        ':noCrop': new OxmlAttr(':noCrop', OxmlType.BooleanValue),
        ':preferRelativeResize': new OxmlAttr(':preferRelativeResize', OxmlType.BooleanValue),
    };
    CompressPictureProps._D = {
        ':removeCrop': new OxmlAttr(':removeCrop', OxmlType.BooleanValue),
        ':useLocalDpi': new OxmlAttr(':useLocalDpi', OxmlType.BooleanValue),
        ':cstate': new OxmlAttr(':cstate', OxmlType.EnumValue, BlipCompressionValuesArray),
    };
    ResetNonVisualConnectorProps._C = {
        'oac:stCxn': StCxnEmpty,
        'oac:endCxn': EndCxnEmpty,
        'oac:noGrp': NoGrpEmpty,
        'oac:noSelect': NoSelectEmpty,
        'oac:noRot': NoRotEmpty,
        'oac:noChangeAspect': NoChangeAspectEmpty,
        'oac:noMove': NoMoveEmpty,
        'oac:noResize': NoResizeEmpty,
        'oac:noEditPoints': NoEditPointsEmpty,
        'oac:noAdjustHandles': NoAdjustHandlesEmpty,
        'oac:noChangeArrowheads': NoChangeArrowheadsEmpty,
        'oac:noChangeShapeType': NoChangeShapeTypeEmpty,
    };
    ModifyNonVisualConnectorProps._C = {
        'oac:stCxn': StCxnConnection,
        'oac:endCxn': EndCxnConnection,
    };
    ModifyNonVisualConnectorProps._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
    };
    ConnectionType._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    ModifyNonVisualGraphicFrameProps._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noDrilldown': new OxmlAttr(':noDrilldown', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
    };
    NonVisualGroupDrawingShapeProps._C = {
        'a:grpSpLocks': AGroupShapeLocks,
        'a:extLst': ANonVisualGroupDrawingShapePropsExtensionList,
    };
    NonVisualDrawingProps._C = {
        'a:hlinkClick': AHyperlinkOnClick,
        'a:hlinkHover': AHyperlinkOnHover,
        'a:extLst': ANonVisualDrawingPropertiesExtensionList,
    };
    NonVisualDrawingProps._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    ResetGroupShapeProperties._C = {
        'oac:xfrm': XfrmEmpty,
        'oac:fill': FillEmpty,
        'oac:effect': EffectEmpty,
        'oac:scene3d': Scene3dEmpty,
        'oac:extLst': ExtLstEmpty,
        'oac:bwMode': BwModeEmpty,
    };
    GroupShapeProperties._C = {
        'a:xfrm': ATransformGroup,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:extLst': AExtensionList,
    };
    GroupShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    ModifyNonVisualGroupDrawingShapeProps._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noUngrp': new OxmlAttr(':noUngrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
    };
    ResetBlipFillProperties._C = {
        'oac:srcRect': SrcRectEmpty,
        'oac:fillMode': FillModeEmpty,
        'oac:dpi': DpiEmpty,
        'oac:rotWithShape': RotWithShapeEmpty,
    };
    OpenXmlRelativeRectPropsElement._D = {
        ':l': new OxmlAttr(':l', OxmlType.Int32Value),
        ':t': new OxmlAttr(':t', OxmlType.Int32Value),
        ':r': new OxmlAttr(':r', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.Int32Value),
    };
    BlipFillProperties._C = {
        'a:blip': ABlip,
        'a:srcRect': ASourceRectangle,
        'a:tile': ATile,
        'a:stretch': AStretch,
    };
    BlipFillProperties._D = {
        ':dpi': new OxmlAttr(':dpi', OxmlType.UInt32Value),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    ModifyShapeStyleProps._C = {
        'oac:lnRef': LnRefStyleMatrixReference,
        'oac:fillRef': FillRefStyleMatrixReference,
        'oac:effectRef': EffectRefStyleMatrixReference,
        'oac:fontRef': FontReference,
    };
    FontReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    FontReference._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.EnumValue, FontCollectionIndexValuesArray),
    };
    StyleMatrixReferenceType._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    StyleMatrixReferenceType._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    EffectRefStyleMatrixReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    FillRefStyleMatrixReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    LnRefStyleMatrixReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ResetShapeProperties._C = {
        'oac:xfrm': XfrmEmpty,
        'oac:geom': GeomEmpty,
        'oac:fill': FillEmpty,
        'oac:ln': LnEmpty,
        'oac:effect': EffectEmpty,
        'oac:scene3d': Scene3dEmpty,
        'oac:sp3d': Sp3dEmpty,
        'oac:extLst': ExtLstEmpty,
        'oac:bwMode': BwModeEmpty,
    };
    ShapeProperties._C = {
        'a:xfrm': ATransform2D,
        'a:custGeom': ACustomGeometry,
        'a:prstGeom': APresetGeometry,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:extLst': AShapePropertiesExtensionList,
    };
    ShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    ModifyNonVisualDrawingShapeProps._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
        ':noTextEdit': new OxmlAttr(':noTextEdit', OxmlType.BooleanValue),
        ':txBox': new OxmlAttr(':txBox', OxmlType.BooleanValue),
    };
    TextBodyProperties._C = {
        'a:prstTxWarp': APresetTextWrap,
        'a:noAutofit': ANoAutoFit,
        'a:normAutofit': ANormalAutoFit,
        'a:spAutoFit': AShapeAutoFit,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:flatTx': AFlatText,
        'a:extLst': AExtensionList,
    };
    TextBodyProperties._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':spcFirstLastPara': new OxmlAttr(':spcFirstLastPara', OxmlType.BooleanValue),
        ':vertOverflow': new OxmlAttr(':vertOverflow', OxmlType.EnumValue, TextVerticalOverflowValuesArray),
        ':horzOverflow': new OxmlAttr(':horzOverflow', OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
        ':vert': new OxmlAttr(':vert', OxmlType.EnumValue, TextVerticalValuesArray),
        ':wrap': new OxmlAttr(':wrap', OxmlType.EnumValue, TextWrappingValuesArray),
        ':lIns': new OxmlAttr(':lIns', OxmlType.Int32Value),
        ':tIns': new OxmlAttr(':tIns', OxmlType.Int32Value),
        ':rIns': new OxmlAttr(':rIns', OxmlType.Int32Value),
        ':bIns': new OxmlAttr(':bIns', OxmlType.Int32Value),
        ':numCol': new OxmlAttr(':numCol', OxmlType.Int32Value),
        ':spcCol': new OxmlAttr(':spcCol', OxmlType.Int32Value),
        ':rtlCol': new OxmlAttr(':rtlCol', OxmlType.BooleanValue),
        ':fromWordArt': new OxmlAttr(':fromWordArt', OxmlType.BooleanValue),
        ':anchor': new OxmlAttr(':anchor', OxmlType.EnumValue, TextAnchoringTypeValuesArray),
        ':anchorCtr': new OxmlAttr(':anchorCtr', OxmlType.BooleanValue),
        ':forceAA': new OxmlAttr(':forceAA', OxmlType.BooleanValue),
        ':upright': new OxmlAttr(':upright', OxmlType.BooleanValue),
        ':compatLnSpc': new OxmlAttr(':compatLnSpc', OxmlType.BooleanValue),
    };
    TextParagraphPropertiesType._C = {
        'a:lnSpc': ALineSpacing,
        'a:spcBef': ASpaceBefore,
        'a:spcAft': ASpaceAfter,
        'a:buClrTx': ABulletColorText,
        'a:buClr': ABulletColor,
        'a:buSzTx': ABulletSizeText,
        'a:buSzPct': ABulletSizePercentage,
        'a:buSzPts': ABulletSizePoints,
        'a:buFontTx': ABulletFontText,
        'a:buFont': ABulletFont,
        'a:buNone': ANoBullet,
        'a:buAutoNum': AAutoNumberedBullet,
        'a:buChar': ACharacterBullet,
        'a:buBlip': APictureBullet,
        'a:tabLst': ATabStopList,
        'a:defRPr': ADefaultRunProperties,
        'a:extLst': AExtensionList,
    };
    TextParagraphPropertiesType._D = {
        ':marL': new OxmlAttr(':marL', OxmlType.Int32Value),
        ':marR': new OxmlAttr(':marR', OxmlType.Int32Value),
        ':lvl': new OxmlAttr(':lvl', OxmlType.Int32Value),
        ':indent': new OxmlAttr(':indent', OxmlType.Int32Value),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, TextAlignmentTypeValuesArray),
        ':defTabSz': new OxmlAttr(':defTabSz', OxmlType.Int32Value),
        ':rtl': new OxmlAttr(':rtl', OxmlType.BooleanValue),
        ':eaLnBrk': new OxmlAttr(':eaLnBrk', OxmlType.BooleanValue),
        ':fontAlgn': new OxmlAttr(':fontAlgn', OxmlType.EnumValue, TextFontAlignmentValuesArray),
        ':latinLnBrk': new OxmlAttr(':latinLnBrk', OxmlType.BooleanValue),
        ':hangingPunct': new OxmlAttr(':hangingPunct', OxmlType.BooleanValue),
    };
    Point2DType._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    ModifyTransformProps._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    ModifyNonVisualDrawingProps._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':decor': new OxmlAttr(':decor', OxmlType.BooleanValue),
        ':scriptLink': new OxmlAttr(':scriptLink', OxmlType.StringValue),
    };
    ImgLink._D = {
        ':tgt': new OxmlAttr(':tgt', OxmlType.StringValue),
    };
    GroupCommand._C = {
        'oac:dgMkLst': DrawingMonikerList,
        'oac:spMk': ShapeMoniker,
        'oac:grpSpMk': GroupShapeMoniker,
        'oac:graphicFrameMk': GraphicFrameMoniker,
        'oac:cxnSpMk': ConnectorMoniker,
        'oac:picMk': PictureMoniker,
        'oac:inkMk': InkMoniker,
        'oac:grpSpPr': GroupShapeProperties,
        'oac:cNvPr': NonVisualDrawingProps,
        'oac:cNvGrpSpPr': NonVisualGroupDrawingShapeProps,
    };
    GroupCommand._D = {
        ':verId': new OxmlAttr(':verId', OxmlType.UInt32Value),
        ':preventRegroup': new OxmlAttr(':preventRegroup', OxmlType.BooleanValue),
        ':grpId': new OxmlAttr(':grpId', OxmlType.UInt32Value),
    };
    ResourceUrl._D = {
        ':src': new OxmlAttr(':src', OxmlType.StringValue),
        ':linkage': new OxmlAttr(':linkage', OxmlType.EnumValue, ResourceLinkageArray),
    };
    Transform2D._C = {
        'a:off': AOffset,
        'a:ext': AExtents,
    };
    Transform2D._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    InkMoniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':creationId': new OxmlAttr(':creationId', OxmlType.StringValue),
    };
    PictureMoniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':creationId': new OxmlAttr(':creationId', OxmlType.StringValue),
    };
    ConnectorMoniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':creationId': new OxmlAttr(':creationId', OxmlType.StringValue),
    };
    GraphicFrameMoniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':creationId': new OxmlAttr(':creationId', OxmlType.StringValue),
    };
    GroupShapeMoniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':creationId': new OxmlAttr(':creationId', OxmlType.StringValue),
    };
    ShapeMoniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':creationId': new OxmlAttr(':creationId', OxmlType.StringValue),
    };
    return {
        prefix: 'oac',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2013/main/command',
    };
}
