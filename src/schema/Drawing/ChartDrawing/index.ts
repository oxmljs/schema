import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { Int64Value } from '../../../framework/types/Int64Value';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';import { TransformGroup as ATransformGroup } from '../../Drawing';
import { NoFill as ANoFill } from '../../Drawing';
import { SolidFill as ASolidFill } from '../../Drawing';
import { GradientFill as AGradientFill } from '../../Drawing';
import { BlipFill as ABlipFill } from '../../Drawing';
import { PatternFill as APatternFill } from '../../Drawing';
import { GroupFill as AGroupFill } from '../../Drawing';
import { EffectList as AEffectList } from '../../Drawing';
import { EffectDag as AEffectDag } from '../../Drawing';
import { Scene3DType as AScene3DType } from '../../Drawing';
import { ExtensionList as AExtensionList } from '../../Drawing';
import { GroupShapeLocks as AGroupShapeLocks } from '../../Drawing';
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from '../../Drawing';
import { Offset as AOffset } from '../../Drawing';
import { Extents as AExtents } from '../../Drawing';
import { GraphicFrameLocks as AGraphicFrameLocks } from '../../Drawing';
import { Blip as ABlip } from '../../Drawing';
import { SourceRectangle as ASourceRectangle } from '../../Drawing';
import { Tile as ATile } from '../../Drawing';
import { Stretch as AStretch } from '../../Drawing';
import { PictureLocks as APictureLocks } from '../../Drawing';
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from '../../Drawing';
import { ConnectionShapeLocks as AConnectionShapeLocks } from '../../Drawing';
import { StartConnection as AStartConnection } from '../../Drawing';
import { EndConnection as AEndConnection } from '../../Drawing';
import { BodyProperties as ABodyProperties } from '../../Drawing';
import { ListStyle as AListStyle } from '../../Drawing';
import { Paragraph as AParagraph } from '../../Drawing';
import { LineReference as ALineReference } from '../../Drawing';
import { FillReference as AFillReference } from '../../Drawing';
import { EffectReference as AEffectReference } from '../../Drawing';
import { FontReference as AFontReference } from '../../Drawing';
import { Transform2D as ATransform2D } from '../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../Drawing';
import { Outline as AOutline } from '../../Drawing';
import { Shape3DType as AShape3DType } from '../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../Drawing';
import { ShapeLocks as AShapeLocks } from '../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { Graphic as AGraphic } from '../../Drawing';
import { ContentPart as Cdr14ContentPart } from '../../Office2010/Drawing/ChartDrawing';


/** Group Shape Properties. Serialized as `cdr:grpSpPr` */
export class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {

    public static override _Q = 'cdr:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): ATransformGroup | undefined { return this._f(ATransformGroup); }

}
/** Non-Visual Group Shape Properties. Serialized as `cdr:nvGrpSpPr` */
export class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties> {

    public static override _Q = 'cdr:nvGrpSpPr';
    /** Chart Non Visual Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Group Shape Drawing Properties. */
    public get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined { return this._f(NonVisualGroupShapeDrawingProperties); }

}
/** Shape Extent. Serialized as `cdr:ext` */
export class Extent extends OxmlLeafElement {

    public static override _Q = 'cdr:ext';
    public static override _A = [':cx',':cy',];
    /** Extent Length. Serialized as `:cx` */
    public get cx(): Int64Value | undefined { return this._g(':cx'); }
    public set cx(v: Int64Value | undefined) { this._s(':cx', v); }
    /** Extent Width. Serialized as `:cy` */
    public get cy(): Int64Value | undefined { return this._g(':cy'); }
    public set cy(v: Int64Value | undefined) { this._s(':cy', v); }

}
/** Defines the MarkerType Class. */
export abstract class MarkerType extends OxmlCompositeElement<XPosition | YPosition> {

    /** Relative X Coordinate. */
    public get xPosition(): XPosition | undefined { return this._f(XPosition); }
    /** Relative Y Coordinate. */
    public get yPosition(): YPosition | undefined { return this._f(YPosition); }

}
/** Ending Anchor Point. Serialized as `cdr:to` */
export class ToAnchor extends MarkerType {

    public static override _Q = 'cdr:to';

}
/** Starting Anchor Point. Serialized as `cdr:from` */
export class FromAnchor extends MarkerType {

    public static override _Q = 'cdr:from';

}
/** Relative Y Coordinate. Serialized as `cdr:y` */
export class YPosition extends OxmlLeafTextElement {

    public static override _Q = 'cdr:y';

}
/** Relative X Coordinate. Serialized as `cdr:x` */
export class XPosition extends OxmlLeafTextElement {

    public static override _Q = 'cdr:x';

}
/** Non-Visual Group Shape Drawing Properties. Serialized as `cdr:cNvGrpSpPr` */
export class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'cdr:cNvGrpSpPr';
    /** Returns AGroupShapeLocks. */
    public get groupShapeLocks(): AGroupShapeLocks | undefined { return this._f(AGroupShapeLocks); }
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(ANonVisualGroupDrawingShapePropsExtensionList); }

}
/** Graphic Frame Transform. Serialized as `cdr:xfrm` */
export class Transform extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'cdr:xfrm';
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
/** Non-Visual Graphic Frame Properties. Serialized as `cdr:nvGraphicFramePr` */
export class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties> {

    public static override _Q = 'cdr:nvGraphicFramePr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Graphic Frame Drawing Properties. */
    public get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined { return this._f(NonVisualGraphicFrameDrawingProperties); }

}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `cdr:cNvGraphicFramePr` */
export class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {

    public static override _Q = 'cdr:cNvGraphicFramePr';
    /** Graphic Frame Locks. */
    public get graphicFrameLocks(): AGraphicFrameLocks | undefined { return this._f(AGraphicFrameLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Picture Fill. Serialized as `cdr:blipFill` */
export class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {

    public static override _Q = 'cdr:blipFill';
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
/** Non-Visual Picture Properties. Serialized as `cdr:nvPicPr` */
export class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {

    public static override _Q = 'cdr:nvPicPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Picture Drawing Properties. */
    public get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined { return this._f(NonVisualPictureDrawingProperties); }

}
/** Non-Visual Picture Drawing Properties. Serialized as `cdr:cNvPicPr` */
export class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {

    public static override _Q = 'cdr:cNvPicPr';
    public static override _A = [':preferRelativeResize',];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    public get preferRelativeResize(): BooleanValue | undefined { return this._g(':preferRelativeResize'); }
    public set preferRelativeResize(v: BooleanValue | undefined) { this._s(':preferRelativeResize', v); }
    /** Returns APictureLocks. */
    public get pictureLocks(): APictureLocks | undefined { return this._f(APictureLocks); }
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    public get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined { return this._f(ANonVisualPicturePropertiesExtensionList); }

}
/** Connector Non Visual Properties. Serialized as `cdr:nvCxnSpPr` */
export class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectionShapeProperties> {

    public static override _Q = 'cdr:nvCxnSpPr';
    /** Chart Non Visual Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Connection Shape Drawing Properties. */
    public get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined { return this._f(NonVisualConnectionShapeProperties); }

}
/** Non-Visual Connection Shape Drawing Properties. Serialized as `cdr:cNvCxnSpPr` */
export class NonVisualConnectionShapeProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {

    public static override _Q = 'cdr:cNvCxnSpPr';
    /** Connection Shape Locks. */
    public get connectionShapeLocks(): AConnectionShapeLocks | undefined { return this._f(AConnectionShapeLocks); }
    /** Connection Start. */
    public get startConnection(): AStartConnection | undefined { return this._f(AStartConnection); }
    /** Connection End. */
    public get endConnection(): AEndConnection | undefined { return this._f(AEndConnection); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Shape Text Body. Serialized as `cdr:txBody` */
export class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    public static override _Q = 'cdr:txBody';
    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Shape Style. Serialized as `cdr:style` */
export class Style extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'cdr:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}
/** Shape Properties. Serialized as `cdr:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'cdr:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Non-Visual Shape Properties. Serialized as `cdr:nvSpPr` */
export class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties> {

    public static override _Q = 'cdr:nvSpPr';
    /** Chart Non Visual Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Shape Drawing Properties. */
    public get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined { return this._f(NonVisualShapeDrawingProperties); }

}
/** Non-Visual Shape Drawing Properties. Serialized as `cdr:cNvSpPr` */
export class NonVisualShapeDrawingProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {

    public static override _Q = 'cdr:cNvSpPr';
    public static override _A = [':txBox',];
    /** Text Box. Serialized as `:txBox` */
    public get textBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set textBox(v: BooleanValue | undefined) { this._s(':txBox', v); }
    /** Shape Locks. */
    public get shapeLocks(): AShapeLocks | undefined { return this._f(AShapeLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Chart Non Visual Properties. Serialized as `cdr:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'cdr:cNvPr';
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
/** Defines the Picture Class. Serialized as `cdr:pic` */
export class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | Style> {

    public static override _Q = 'cdr:pic';
    public static override _A = [':macro',':fPublished',];
    /** Reference to Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Publish to Server. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Picture Properties. */
    public get nonVisualPictureProperties(): NonVisualPictureProperties | undefined { return this._f(NonVisualPictureProperties); }
    /** Picture Fill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns Style. */
    public get style(): Style | undefined { return this._f(Style); }

}
/** Connection Shape. Serialized as `cdr:cxnSp` */
export class ConnectionShape extends OxmlCompositeElement<NonVisualConnectorShapeDrawingProperties | ShapeProperties | Style> {

    public static override _Q = 'cdr:cxnSp';
    public static override _A = [':macro',':fPublished',];
    /** Reference to Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Publish to Server. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Connector Non Visual Properties. */
    public get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined { return this._f(NonVisualConnectorShapeDrawingProperties); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Connection Shape Style. */
    public get style(): Style | undefined { return this._f(Style); }

}
/** Graphic Frame. Serialized as `cdr:graphicFrame` */
export class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Transform | AGraphic> {

    public static override _Q = 'cdr:graphicFrame';
    public static override _A = [':macro',':fPublished',];
    /** Reference to Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Publish To Server. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Graphic Frame Properties. */
    public get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined { return this._f(NonVisualGraphicFrameProperties); }
    /** Graphic Frame Transform. */
    public get transform(): Transform | undefined { return this._f(Transform); }
    /** Graphical Object. */
    public get graphic(): AGraphic | undefined { return this._f(AGraphic); }

}
/** Group Shape. Serialized as `cdr:grpSp` */
export class GroupShape extends OxmlCompositeElement<NonVisualGroupShapeProperties | GroupShapeProperties | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Cdr14ContentPart> {

    public static override _Q = 'cdr:grpSp';
    /** Non-Visual Group Shape Properties. */
    public get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined { return this._f(NonVisualGroupShapeProperties); }
    /** Group Shape Properties. */
    public get groupShapeProperties(): GroupShapeProperties | undefined { return this._f(GroupShapeProperties); }

}
/** Shape Definition. Serialized as `cdr:sp` */
export class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | Style | TextBody> {

    public static override _Q = 'cdr:sp';
    public static override _A = [':macro',':textlink',':fLocksText',':fPublished',];
    /** Reference to Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Text Link. Serialized as `:textlink` */
    public get textLink(): StringValue | undefined { return this._g(':textlink'); }
    public set textLink(v: StringValue | undefined) { this._s(':textlink', v); }
    /** Lock Text. Serialized as `:fLocksText` */
    public get lockText(): BooleanValue | undefined { return this._g(':fLocksText'); }
    public set lockText(v: BooleanValue | undefined) { this._s(':fLocksText', v); }
    /** Publish to Server. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Shape Properties. */
    public get nonVisualShapeProperties(): NonVisualShapeProperties | undefined { return this._f(NonVisualShapeProperties); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Shape Style. */
    public get style(): Style | undefined { return this._f(Style); }
    /** Shape Text Body. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }

}
/** Absolute Anchor Shape Size. Serialized as `cdr:absSizeAnchor` */
export class AbsoluteAnchorSize extends OxmlCompositeElement<FromAnchor | Extent | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Cdr14ContentPart> {

    public static override _Q = 'cdr:absSizeAnchor';
    /** Returns FromAnchor. */
    public get fromAnchor(): FromAnchor | undefined { return this._f(FromAnchor); }
    /** Shape Extent. */
    public get extent(): Extent | undefined { return this._f(Extent); }

}
/** Relative Anchor Shape Size. Serialized as `cdr:relSizeAnchor` */
export class RelativeAnchorSize extends OxmlCompositeElement<FromAnchor | ToAnchor | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Cdr14ContentPart> {

    public static override _Q = 'cdr:relSizeAnchor';
    /** Starting Anchor Point. */
    public get fromAnchor(): FromAnchor | undefined { return this._f(FromAnchor); }
    /** Ending Anchor Point. */
    public get toAnchor(): ToAnchor | undefined { return this._f(ToAnchor); }

}

export function initDrawingChartDrawingNamespace() {
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
    NonVisualGroupShapeProperties._C = {
        'cdr:cNvPr': NonVisualDrawingProperties,
        'cdr:cNvGrpSpPr': NonVisualGroupShapeDrawingProperties,
    };
    Extent._D = {
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
    };
    MarkerType._C = {
        'cdr:x': XPosition,
        'cdr:y': YPosition,
    };
    ToAnchor._C = {
        'cdr:x': XPosition,
        'cdr:y': YPosition,
    };
    FromAnchor._C = {
        'cdr:x': XPosition,
        'cdr:y': YPosition,
    };
    NonVisualGroupShapeDrawingProperties._C = {
        'a:grpSpLocks': AGroupShapeLocks,
        'a:extLst': ANonVisualGroupDrawingShapePropsExtensionList,
    };
    Transform._C = {
        'a:off': AOffset,
        'a:ext': AExtents,
    };
    Transform._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    NonVisualGraphicFrameProperties._C = {
        'cdr:cNvPr': NonVisualDrawingProperties,
        'cdr:cNvGraphicFramePr': NonVisualGraphicFrameDrawingProperties,
    };
    NonVisualGraphicFrameDrawingProperties._C = {
        'a:graphicFrameLocks': AGraphicFrameLocks,
        'a:extLst': AExtensionList,
    };
    BlipFill._C = {
        'a:blip': ABlip,
        'a:srcRect': ASourceRectangle,
        'a:tile': ATile,
        'a:stretch': AStretch,
    };
    BlipFill._D = {
        ':dpi': new OxmlAttr(':dpi', OxmlType.UInt32Value),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    NonVisualPictureProperties._C = {
        'cdr:cNvPr': NonVisualDrawingProperties,
        'cdr:cNvPicPr': NonVisualPictureDrawingProperties,
    };
    NonVisualPictureDrawingProperties._C = {
        'a:picLocks': APictureLocks,
        'a:extLst': ANonVisualPicturePropertiesExtensionList,
    };
    NonVisualPictureDrawingProperties._D = {
        ':preferRelativeResize': new OxmlAttr(':preferRelativeResize', OxmlType.BooleanValue),
    };
    NonVisualConnectorShapeDrawingProperties._C = {
        'cdr:cNvPr': NonVisualDrawingProperties,
        'cdr:cNvCxnSpPr': NonVisualConnectionShapeProperties,
    };
    NonVisualConnectionShapeProperties._C = {
        'a:cxnSpLocks': AConnectionShapeLocks,
        'a:stCxn': AStartConnection,
        'a:endCxn': AEndConnection,
        'a:extLst': AExtensionList,
    };
    TextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    Style._C = {
        'a:lnRef': ALineReference,
        'a:fillRef': AFillReference,
        'a:effectRef': AEffectReference,
        'a:fontRef': AFontReference,
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
    NonVisualShapeProperties._C = {
        'cdr:cNvPr': NonVisualDrawingProperties,
        'cdr:cNvSpPr': NonVisualShapeDrawingProperties,
    };
    NonVisualShapeDrawingProperties._C = {
        'a:spLocks': AShapeLocks,
        'a:extLst': AExtensionList,
    };
    NonVisualShapeDrawingProperties._D = {
        ':txBox': new OxmlAttr(':txBox', OxmlType.BooleanValue),
    };
    NonVisualDrawingProperties._C = {
        'a:hlinkClick': AHyperlinkOnClick,
        'a:hlinkHover': AHyperlinkOnHover,
        'a:extLst': ANonVisualDrawingPropertiesExtensionList,
    };
    NonVisualDrawingProperties._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    Picture._C = {
        'cdr:nvPicPr': NonVisualPictureProperties,
        'cdr:blipFill': BlipFill,
        'cdr:spPr': ShapeProperties,
        'cdr:style': Style,
    };
    Picture._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    ConnectionShape._C = {
        'cdr:nvCxnSpPr': NonVisualConnectorShapeDrawingProperties,
        'cdr:spPr': ShapeProperties,
        'cdr:style': Style,
    };
    ConnectionShape._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    GraphicFrame._C = {
        'cdr:nvGraphicFramePr': NonVisualGraphicFrameProperties,
        'cdr:xfrm': Transform,
        'a:graphic': AGraphic,
    };
    GraphicFrame._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    GroupShape._C = {
        'cdr:nvGrpSpPr': NonVisualGroupShapeProperties,
        'cdr:grpSpPr': GroupShapeProperties,
        'cdr:sp': Shape,
        'cdr:grpSp': GroupShape,
        'cdr:graphicFrame': GraphicFrame,
        'cdr:cxnSp': ConnectionShape,
        'cdr:pic': Picture,
        'cdr14:contentPart': Cdr14ContentPart,
    };
    Shape._C = {
        'cdr:nvSpPr': NonVisualShapeProperties,
        'cdr:spPr': ShapeProperties,
        'cdr:style': Style,
        'cdr:txBody': TextBody,
    };
    Shape._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':textlink': new OxmlAttr(':textlink', OxmlType.StringValue),
        ':fLocksText': new OxmlAttr(':fLocksText', OxmlType.BooleanValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    AbsoluteAnchorSize._C = {
        'cdr:from': FromAnchor,
        'cdr:ext': Extent,
        'cdr:sp': Shape,
        'cdr:grpSp': GroupShape,
        'cdr:graphicFrame': GraphicFrame,
        'cdr:cxnSp': ConnectionShape,
        'cdr:pic': Picture,
        'cdr14:contentPart': Cdr14ContentPart,
    };
    RelativeAnchorSize._C = {
        'cdr:from': FromAnchor,
        'cdr:to': ToAnchor,
        'cdr:sp': Shape,
        'cdr:grpSp': GroupShape,
        'cdr:graphicFrame': GraphicFrame,
        'cdr:cxnSp': ConnectionShape,
        'cdr:pic': Picture,
        'cdr14:contentPart': Cdr14ContentPart,
    };
    return {
        prefix: 'cdr',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/chartDrawing',
    };
}
