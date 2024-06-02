import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { Int64Value } from '../../../framework/types/Int64Value';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { BlackWhiteModeValues } from '../../Drawing';
import { TransformGroup as ATransformGroup } from '../../Drawing';
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
export declare class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): ATransformGroup | undefined;
}
/** Non-Visual Group Shape Properties. Serialized as `cdr:nvGrpSpPr` */
export declare class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties> {
    static _Q: string;
    /** Chart Non Visual Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Group Shape Drawing Properties. */
    get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined;
}
/** Shape Extent. Serialized as `cdr:ext` */
export declare class Extent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Extent Length. Serialized as `:cx` */
    get cx(): Int64Value | undefined;
    set cx(v: Int64Value | undefined);
    /** Extent Width. Serialized as `:cy` */
    get cy(): Int64Value | undefined;
    set cy(v: Int64Value | undefined);
}
/** Defines the MarkerType Class. */
export declare abstract class MarkerType extends OxmlCompositeElement<XPosition | YPosition> {
    /** Relative X Coordinate. */
    get xPosition(): XPosition | undefined;
    /** Relative Y Coordinate. */
    get yPosition(): YPosition | undefined;
}
/** Ending Anchor Point. Serialized as `cdr:to` */
export declare class ToAnchor extends MarkerType {
    static _Q: string;
}
/** Starting Anchor Point. Serialized as `cdr:from` */
export declare class FromAnchor extends MarkerType {
    static _Q: string;
}
/** Relative Y Coordinate. Serialized as `cdr:y` */
export declare class YPosition extends OxmlLeafTextElement {
    static _Q: string;
}
/** Relative X Coordinate. Serialized as `cdr:x` */
export declare class XPosition extends OxmlLeafTextElement {
    static _Q: string;
}
/** Non-Visual Group Shape Drawing Properties. Serialized as `cdr:cNvGrpSpPr` */
export declare class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns AGroupShapeLocks. */
    get groupShapeLocks(): AGroupShapeLocks | undefined;
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** Graphic Frame Transform. Serialized as `cdr:xfrm` */
export declare class Transform extends OxmlCompositeElement<AOffset | AExtents> {
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
/** Non-Visual Graphic Frame Properties. Serialized as `cdr:nvGraphicFramePr` */
export declare class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Graphic Frame Drawing Properties. */
    get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined;
}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `cdr:cNvGraphicFramePr` */
export declare class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {
    static _Q: string;
    /** Graphic Frame Locks. */
    get graphicFrameLocks(): AGraphicFrameLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Picture Fill. Serialized as `cdr:blipFill` */
export declare class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {
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
/** Non-Visual Picture Properties. Serialized as `cdr:nvPicPr` */
export declare class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Picture Drawing Properties. */
    get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined;
}
/** Non-Visual Picture Drawing Properties. Serialized as `cdr:cNvPicPr` */
export declare class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    get preferRelativeResize(): BooleanValue | undefined;
    set preferRelativeResize(v: BooleanValue | undefined);
    /** Returns APictureLocks. */
    get pictureLocks(): APictureLocks | undefined;
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined;
}
/** Connector Non Visual Properties. Serialized as `cdr:nvCxnSpPr` */
export declare class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectionShapeProperties> {
    static _Q: string;
    /** Chart Non Visual Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Connection Shape Drawing Properties. */
    get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined;
}
/** Non-Visual Connection Shape Drawing Properties. Serialized as `cdr:cNvCxnSpPr` */
export declare class NonVisualConnectionShapeProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {
    static _Q: string;
    /** Connection Shape Locks. */
    get connectionShapeLocks(): AConnectionShapeLocks | undefined;
    /** Connection Start. */
    get startConnection(): AStartConnection | undefined;
    /** Connection End. */
    get endConnection(): AEndConnection | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Shape Text Body. Serialized as `cdr:txBody` */
export declare class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Shape Style. Serialized as `cdr:style` */
export declare class Style extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {
    static _Q: string;
    /** Returns ALineReference. */
    get lineReference(): ALineReference | undefined;
    /** Returns AFillReference. */
    get fillReference(): AFillReference | undefined;
    /** Returns AEffectReference. */
    get effectReference(): AEffectReference | undefined;
    /** Font Reference. */
    get fontReference(): AFontReference | undefined;
}
/** Shape Properties. Serialized as `cdr:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Non-Visual Shape Properties. Serialized as `cdr:nvSpPr` */
export declare class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties> {
    static _Q: string;
    /** Chart Non Visual Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Shape Drawing Properties. */
    get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined;
}
/** Non-Visual Shape Drawing Properties. Serialized as `cdr:cNvSpPr` */
export declare class NonVisualShapeDrawingProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Text Box. Serialized as `:txBox` */
    get textBox(): BooleanValue | undefined;
    set textBox(v: BooleanValue | undefined);
    /** Shape Locks. */
    get shapeLocks(): AShapeLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Chart Non Visual Properties. Serialized as `cdr:cNvPr` */
export declare class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {
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
/** Defines the Picture Class. Serialized as `cdr:pic` */
export declare class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | Style> {
    static _Q: string;
    static _A: string[];
    /** Reference to Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Publish to Server. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Picture Properties. */
    get nonVisualPictureProperties(): NonVisualPictureProperties | undefined;
    /** Picture Fill. */
    get blipFill(): BlipFill | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns Style. */
    get style(): Style | undefined;
}
/** Connection Shape. Serialized as `cdr:cxnSp` */
export declare class ConnectionShape extends OxmlCompositeElement<NonVisualConnectorShapeDrawingProperties | ShapeProperties | Style> {
    static _Q: string;
    static _A: string[];
    /** Reference to Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Publish to Server. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Connector Non Visual Properties. */
    get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Connection Shape Style. */
    get style(): Style | undefined;
}
/** Graphic Frame. Serialized as `cdr:graphicFrame` */
export declare class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Transform | AGraphic> {
    static _Q: string;
    static _A: string[];
    /** Reference to Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Publish To Server. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Graphic Frame Properties. */
    get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined;
    /** Graphic Frame Transform. */
    get transform(): Transform | undefined;
    /** Graphical Object. */
    get graphic(): AGraphic | undefined;
}
/** Group Shape. Serialized as `cdr:grpSp` */
export declare class GroupShape extends OxmlCompositeElement<NonVisualGroupShapeProperties | GroupShapeProperties | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Cdr14ContentPart> {
    static _Q: string;
    /** Non-Visual Group Shape Properties. */
    get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined;
    /** Group Shape Properties. */
    get groupShapeProperties(): GroupShapeProperties | undefined;
}
/** Shape Definition. Serialized as `cdr:sp` */
export declare class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | Style | TextBody> {
    static _Q: string;
    static _A: string[];
    /** Reference to Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Text Link. Serialized as `:textlink` */
    get textLink(): StringValue | undefined;
    set textLink(v: StringValue | undefined);
    /** Lock Text. Serialized as `:fLocksText` */
    get lockText(): BooleanValue | undefined;
    set lockText(v: BooleanValue | undefined);
    /** Publish to Server. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Shape Properties. */
    get nonVisualShapeProperties(): NonVisualShapeProperties | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Shape Style. */
    get style(): Style | undefined;
    /** Shape Text Body. */
    get textBody(): TextBody | undefined;
}
/** Absolute Anchor Shape Size. Serialized as `cdr:absSizeAnchor` */
export declare class AbsoluteAnchorSize extends OxmlCompositeElement<FromAnchor | Extent | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Cdr14ContentPart> {
    static _Q: string;
    /** Returns FromAnchor. */
    get fromAnchor(): FromAnchor | undefined;
    /** Shape Extent. */
    get extent(): Extent | undefined;
}
/** Relative Anchor Shape Size. Serialized as `cdr:relSizeAnchor` */
export declare class RelativeAnchorSize extends OxmlCompositeElement<FromAnchor | ToAnchor | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Cdr14ContentPart> {
    static _Q: string;
    /** Starting Anchor Point. */
    get fromAnchor(): FromAnchor | undefined;
    /** Ending Anchor Point. */
    get toAnchor(): ToAnchor | undefined;
}
export declare function initDrawingChartDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
