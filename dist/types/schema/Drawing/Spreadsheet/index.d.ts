import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { Int32Value } from '../../../framework/types/Int32Value';
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
import { GraphicFrameLocks as AGraphicFrameLocks } from '../../Drawing';
import { PictureLocks as APictureLocks } from '../../Drawing';
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from '../../Drawing';
import { ConnectionShapeLocks as AConnectionShapeLocks } from '../../Drawing';
import { StartConnection as AStartConnection } from '../../Drawing';
import { EndConnection as AEndConnection } from '../../Drawing';
import { ShapeLocks as AShapeLocks } from '../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { Offset as AOffset } from '../../Drawing';
import { Extents as AExtents } from '../../Drawing';
import { Blip as ABlip } from '../../Drawing';
import { SourceRectangle as ASourceRectangle } from '../../Drawing';
import { Tile as ATile } from '../../Drawing';
import { Stretch as AStretch } from '../../Drawing';
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
import { ExcelNonVisualContentPartShapeProperties as Xdr14ExcelNonVisualContentPartShapeProperties } from '../../Office2010/Excel/Drawing';
import { ApplicationNonVisualDrawingProperties as Xdr14ApplicationNonVisualDrawingProperties } from '../../Office2010/Excel/Drawing';
import { Transform2D as Xdr14Transform2D } from '../../Office2010/Excel/Drawing';
import { OfficeArtExtensionList as Xdr14OfficeArtExtensionList } from '../../Office2010/Excel/Drawing';
import { Graphic as AGraphic } from '../../Drawing';
import { ContentPart as Xdr14ContentPart } from '../../Office2010/Excel/Drawing';
export declare enum EditAsValues {
    /** Move and Resize With Anchor Cells. Serialized value: `twoCell` */
    TwoCell = "twoCell",
    /** Move With Cells but Do Not Resize. Serialized value: `oneCell` */
    OneCell = "oneCell",
    /** Do Not Move or Resize With Underlying Rows/Columns. Serialized value: `absolute` */
    Absolute = "absolute"
}
export declare const EditAsValuesArray: readonly [EditAsValues.TwoCell, EditAsValues.OneCell, EditAsValues.Absolute];
/** Group Shape Properties. Serialized as `xdr:grpSpPr` */
export declare class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): ATransformGroup | undefined;
}
/** Non-Visual Properties for a Group Shape. Serialized as `xdr:nvGrpSpPr` */
export declare class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties> {
    static _Q: string;
    /** Connection Non-Visual Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Group Shape Drawing Properties. */
    get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined;
}
/** Non-Visual Group Shape Drawing Properties. Serialized as `xdr:cNvGrpSpPr` */
export declare class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns AGroupShapeLocks. */
    get groupShapeLocks(): AGroupShapeLocks | undefined;
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `xdr:cNvGraphicFramePr` */
export declare class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {
    static _Q: string;
    /** Graphic Frame Locks. */
    get graphicFrameLocks(): AGraphicFrameLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Non-Visual Picture Drawing Properties. Serialized as `xdr:cNvPicPr` */
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
/** Non-Visual Connector Shape Drawing Properties. Serialized as `xdr:cNvCxnSpPr` */
export declare class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {
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
/** Connection Non-Visual Shape Properties. Serialized as `xdr:cNvSpPr` */
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
/** Non-Visual Drawing Properties. Serialized as `xdr:cNvPr` */
export declare class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** descr. Serialized as `:descr` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Returns AHyperlinkOnClick. */
    get hyperlinkOnClick(): AHyperlinkOnClick | undefined;
    /** Returns AHyperlinkOnHover. */
    get hyperlinkOnHover(): AHyperlinkOnHover | undefined;
    /** Returns ANonVisualDrawingPropertiesExtensionList. */
    get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined;
}
/** Position. Serialized as `xdr:pos` */
export declare class Position extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** X-Axis Coordinate. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Axis Coordinate. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
}
/** Defines the Extent Class. Serialized as `xdr:ext` */
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
/** Client Data. Serialized as `xdr:clientData` */
export declare class ClientData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Locks With Sheet Flag. Serialized as `:fLocksWithSheet` */
    get lockWithSheet(): BooleanValue | undefined;
    set lockWithSheet(v: BooleanValue | undefined);
    /** Prints With Sheet Flag. Serialized as `:fPrintsWithSheet` */
    get printWithSheet(): BooleanValue | undefined;
    set printWithSheet(v: BooleanValue | undefined);
}
/** Defines the MarkerType Class. */
export declare abstract class MarkerType extends OxmlCompositeElement<ColumnId | ColumnOffset | RowId | RowOffset> {
    /** Column). */
    get columnId(): ColumnId | undefined;
    /** Column Offset. */
    get columnOffset(): ColumnOffset | undefined;
    /** Row. */
    get rowId(): RowId | undefined;
    /** Row Offset. */
    get rowOffset(): RowOffset | undefined;
}
/** Ending Anchor Point. Serialized as `xdr:to` */
export declare class ToMarker extends MarkerType {
    static _Q: string;
}
/** Starting Anchor Point. Serialized as `xdr:from` */
export declare class FromMarker extends MarkerType {
    static _Q: string;
}
/** Row. Serialized as `xdr:row` */
export declare class RowId extends OxmlLeafTextElement {
    static _Q: string;
}
/** Row Offset. Serialized as `xdr:rowOff` */
export declare class RowOffset extends OxmlLeafTextElement {
    static _Q: string;
}
/** Column Offset. Serialized as `xdr:colOff` */
export declare class ColumnOffset extends OxmlLeafTextElement {
    static _Q: string;
}
/** Column). Serialized as `xdr:col` */
export declare class ColumnId extends OxmlLeafTextElement {
    static _Q: string;
}
/** 2D Transform for Graphic Frames. Serialized as `xdr:xfrm` */
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
/** Non-Visual Properties for a Graphic Frame. Serialized as `xdr:nvGraphicFramePr` */
export declare class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties> {
    static _Q: string;
    /** Connection Non-Visual Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Graphic Frame Drawing Properties. */
    get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined;
}
/** Picture Fill. Serialized as `xdr:blipFill` */
export declare class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {
    static _Q: string;
    static _A: string[];
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** Returns ABlip. */
    get blip(): ABlip | undefined;
    /** Source Rectangle. */
    get sourceRectangle(): ASourceRectangle | undefined;
}
/** Non-Visual Properties for a Picture. Serialized as `xdr:nvPicPr` */
export declare class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Picture Drawing Properties. */
    get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined;
}
/** Non-Visual Properties for a Connection Shape. Serialized as `xdr:nvCxnSpPr` */
export declare class NonVisualConnectionShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectorShapeDrawingProperties> {
    static _Q: string;
    /** Connection Non-Visual Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Connector Shape Drawing Properties. */
    get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined;
}
/** Shape Text Body. Serialized as `xdr:txBody` */
export declare class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Defines the ShapeStyle Class. Serialized as `xdr:style` */
export declare class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {
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
/** Shape Properties. Serialized as `xdr:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Non-Visual Properties for a Shape. Serialized as `xdr:nvSpPr` */
export declare class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Connection Non-Visual Shape Properties. */
    get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined;
}
/** Worksheet Drawing. Serialized as `xdr:wsDr` */
export declare class WorksheetDrawing extends OxmlPartRootElement<TwoCellAnchor | OneCellAnchor | AbsoluteAnchor> {
    static _Q: string;
}
/** Defines the ContentPart Class. Serialized as `xdr:contentPart` */
export declare class ContentPart extends OxmlCompositeElement<Xdr14ExcelNonVisualContentPartShapeProperties | Xdr14ApplicationNonVisualDrawingProperties | Xdr14Transform2D | Xdr14OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** bwMode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** Returns Xdr14ExcelNonVisualContentPartShapeProperties. */
    get excelNonVisualContentPartShapeProperties(): Xdr14ExcelNonVisualContentPartShapeProperties | undefined;
    /** Returns Xdr14ApplicationNonVisualDrawingProperties. */
    get applicationNonVisualDrawingProperties(): Xdr14ApplicationNonVisualDrawingProperties | undefined;
    /** Returns Xdr14Transform2D. */
    get transform2D(): Xdr14Transform2D | undefined;
    /** Returns Xdr14OfficeArtExtensionList. */
    get officeArtExtensionList(): Xdr14OfficeArtExtensionList | undefined;
}
/** Defines the Picture Class. Serialized as `xdr:pic` */
export declare class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | ShapeStyle> {
    static _Q: string;
    static _A: string[];
    /** Reference To Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Publish to Server Flag. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Properties for a Picture. */
    get nonVisualPictureProperties(): NonVisualPictureProperties | undefined;
    /** Picture Fill. */
    get blipFill(): BlipFill | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Shape Style. */
    get shapeStyle(): ShapeStyle | undefined;
}
/** Connection Shape. Serialized as `xdr:cxnSp` */
export declare class ConnectionShape extends OxmlCompositeElement<NonVisualConnectionShapeProperties | ShapeProperties | ShapeStyle> {
    static _Q: string;
    static _A: string[];
    /** Reference to Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Publish to Server Flag. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Properties for a Connection Shape. */
    get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined;
    /** Connector Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ShapeStyle. */
    get shapeStyle(): ShapeStyle | undefined;
}
/** Graphic Frame. Serialized as `xdr:graphicFrame` */
export declare class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Transform | AGraphic> {
    static _Q: string;
    static _A: string[];
    /** Reference To Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Publish to Server Flag. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Properties for a Graphic Frame. */
    get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined;
    /** 2D Transform for Graphic Frames. */
    get transform(): Transform | undefined;
    /** Returns AGraphic. */
    get graphic(): AGraphic | undefined;
}
/** Group Shape. Serialized as `xdr:grpSp` */
export declare class GroupShape extends OxmlCompositeElement<NonVisualGroupShapeProperties | GroupShapeProperties | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Xdr14ContentPart> {
    static _Q: string;
    /** Non-Visual Properties for a Group Shape. */
    get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined;
    /** Group Shape Properties. */
    get groupShapeProperties(): GroupShapeProperties | undefined;
}
/** Shape. Serialized as `xdr:sp` */
export declare class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | ShapeStyle | TextBody> {
    static _Q: string;
    static _A: string[];
    /** Reference to Custom Function. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** Text Link. Serialized as `:textlink` */
    get textLink(): StringValue | undefined;
    set textLink(v: StringValue | undefined);
    /** Lock Text Flag. Serialized as `:fLocksText` */
    get lockText(): BooleanValue | undefined;
    set lockText(v: BooleanValue | undefined);
    /** Publish to Server Flag. Serialized as `:fPublished` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Non-Visual Properties for a Shape. */
    get nonVisualShapeProperties(): NonVisualShapeProperties | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ShapeStyle. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Shape Text Body. */
    get textBody(): TextBody | undefined;
}
/** Absolute Anchor Shape Size. Serialized as `xdr:absoluteAnchor` */
export declare class AbsoluteAnchor extends OxmlCompositeElement<Position | Extent | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ClientData> {
    static _Q: string;
    /** Position. */
    get position(): Position | undefined;
    /** Shape Extent. */
    get extent(): Extent | undefined;
}
/** One Cell Anchor Shape Size. Serialized as `xdr:oneCellAnchor` */
export declare class OneCellAnchor extends OxmlCompositeElement<FromMarker | Extent | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ClientData> {
    static _Q: string;
    /** Returns FromMarker. */
    get fromMarker(): FromMarker | undefined;
    /** Returns Extent. */
    get extent(): Extent | undefined;
}
/** Two Cell Anchor Shape Size. Serialized as `xdr:twoCellAnchor` */
export declare class TwoCellAnchor extends OxmlCompositeElement<FromMarker | ToMarker | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ClientData> {
    static _Q: string;
    static _A: string[];
    /** Positioning and Resizing Behaviors. Serialized as `:editAs` */
    get editAs(): EditAsValues | undefined;
    set editAs(v: EditAsValues | undefined);
    /** Starting Anchor Point. */
    get fromMarker(): FromMarker | undefined;
    /** Ending Anchor Point. */
    get toMarker(): ToMarker | undefined;
}
export declare function initDrawingSpreadsheetNamespace(): {
    prefix: string;
    xmlns: string;
};
