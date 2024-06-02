import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { Int32Value } from '../../../framework/types/Int32Value';
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


export enum EditAsValues {
    /** Move and Resize With Anchor Cells. Serialized value: `twoCell` */
    TwoCell = 'twoCell',
    /** Move With Cells but Do Not Resize. Serialized value: `oneCell` */
    OneCell = 'oneCell',
    /** Do Not Move or Resize With Underlying Rows/Columns. Serialized value: `absolute` */
    Absolute = 'absolute',
}

export const EditAsValuesArray = [
    EditAsValues.TwoCell,
    EditAsValues.OneCell,
    EditAsValues.Absolute,
] as const;

/** Group Shape Properties. Serialized as `xdr:grpSpPr` */
export class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {

    public static override _Q = 'xdr:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): ATransformGroup | undefined { return this._f(ATransformGroup); }

}
/** Non-Visual Properties for a Group Shape. Serialized as `xdr:nvGrpSpPr` */
export class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties> {

    public static override _Q = 'xdr:nvGrpSpPr';
    /** Connection Non-Visual Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Group Shape Drawing Properties. */
    public get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined { return this._f(NonVisualGroupShapeDrawingProperties); }

}
/** Non-Visual Group Shape Drawing Properties. Serialized as `xdr:cNvGrpSpPr` */
export class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'xdr:cNvGrpSpPr';
    /** Returns AGroupShapeLocks. */
    public get groupShapeLocks(): AGroupShapeLocks | undefined { return this._f(AGroupShapeLocks); }
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(ANonVisualGroupDrawingShapePropsExtensionList); }

}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `xdr:cNvGraphicFramePr` */
export class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {

    public static override _Q = 'xdr:cNvGraphicFramePr';
    /** Graphic Frame Locks. */
    public get graphicFrameLocks(): AGraphicFrameLocks | undefined { return this._f(AGraphicFrameLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Non-Visual Picture Drawing Properties. Serialized as `xdr:cNvPicPr` */
export class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {

    public static override _Q = 'xdr:cNvPicPr';
    public static override _A = [':preferRelativeResize',];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    public get preferRelativeResize(): BooleanValue | undefined { return this._g(':preferRelativeResize'); }
    public set preferRelativeResize(v: BooleanValue | undefined) { this._s(':preferRelativeResize', v); }
    /** Returns APictureLocks. */
    public get pictureLocks(): APictureLocks | undefined { return this._f(APictureLocks); }
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    public get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined { return this._f(ANonVisualPicturePropertiesExtensionList); }

}
/** Non-Visual Connector Shape Drawing Properties. Serialized as `xdr:cNvCxnSpPr` */
export class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {

    public static override _Q = 'xdr:cNvCxnSpPr';
    /** Connection Shape Locks. */
    public get connectionShapeLocks(): AConnectionShapeLocks | undefined { return this._f(AConnectionShapeLocks); }
    /** Connection Start. */
    public get startConnection(): AStartConnection | undefined { return this._f(AStartConnection); }
    /** Connection End. */
    public get endConnection(): AEndConnection | undefined { return this._f(AEndConnection); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Connection Non-Visual Shape Properties. Serialized as `xdr:cNvSpPr` */
export class NonVisualShapeDrawingProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {

    public static override _Q = 'xdr:cNvSpPr';
    public static override _A = [':txBox',];
    /** Text Box. Serialized as `:txBox` */
    public get textBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set textBox(v: BooleanValue | undefined) { this._s(':txBox', v); }
    /** Shape Locks. */
    public get shapeLocks(): AShapeLocks | undefined { return this._f(AShapeLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Non-Visual Drawing Properties. Serialized as `xdr:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'xdr:cNvPr';
    public static override _A = [':id',':name',':descr',':hidden',':title',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** descr. Serialized as `:descr` */
    public get description(): StringValue | undefined { return this._g(':descr'); }
    public set description(v: StringValue | undefined) { this._s(':descr', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Returns AHyperlinkOnClick. */
    public get hyperlinkOnClick(): AHyperlinkOnClick | undefined { return this._f(AHyperlinkOnClick); }
    /** Returns AHyperlinkOnHover. */
    public get hyperlinkOnHover(): AHyperlinkOnHover | undefined { return this._f(AHyperlinkOnHover); }
    /** Returns ANonVisualDrawingPropertiesExtensionList. */
    public get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined { return this._f(ANonVisualDrawingPropertiesExtensionList); }

}
/** Position. Serialized as `xdr:pos` */
export class Position extends OxmlLeafElement {

    public static override _Q = 'xdr:pos';
    public static override _A = [':x',':y',];
    /** X-Axis Coordinate. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Axis Coordinate. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }

}
/** Defines the Extent Class. Serialized as `xdr:ext` */
export class Extent extends OxmlLeafElement {

    public static override _Q = 'xdr:ext';
    public static override _A = [':cx',':cy',];
    /** Extent Length. Serialized as `:cx` */
    public get cx(): Int64Value | undefined { return this._g(':cx'); }
    public set cx(v: Int64Value | undefined) { this._s(':cx', v); }
    /** Extent Width. Serialized as `:cy` */
    public get cy(): Int64Value | undefined { return this._g(':cy'); }
    public set cy(v: Int64Value | undefined) { this._s(':cy', v); }

}
/** Client Data. Serialized as `xdr:clientData` */
export class ClientData extends OxmlLeafElement {

    public static override _Q = 'xdr:clientData';
    public static override _A = [':fLocksWithSheet',':fPrintsWithSheet',];
    /** Locks With Sheet Flag. Serialized as `:fLocksWithSheet` */
    public get lockWithSheet(): BooleanValue | undefined { return this._g(':fLocksWithSheet'); }
    public set lockWithSheet(v: BooleanValue | undefined) { this._s(':fLocksWithSheet', v); }
    /** Prints With Sheet Flag. Serialized as `:fPrintsWithSheet` */
    public get printWithSheet(): BooleanValue | undefined { return this._g(':fPrintsWithSheet'); }
    public set printWithSheet(v: BooleanValue | undefined) { this._s(':fPrintsWithSheet', v); }

}
/** Defines the MarkerType Class. */
export abstract class MarkerType extends OxmlCompositeElement<ColumnId | ColumnOffset | RowId | RowOffset> {

    /** Column). */
    public get columnId(): ColumnId | undefined { return this._f(ColumnId); }
    /** Column Offset. */
    public get columnOffset(): ColumnOffset | undefined { return this._f(ColumnOffset); }
    /** Row. */
    public get rowId(): RowId | undefined { return this._f(RowId); }
    /** Row Offset. */
    public get rowOffset(): RowOffset | undefined { return this._f(RowOffset); }

}
/** Ending Anchor Point. Serialized as `xdr:to` */
export class ToMarker extends MarkerType {

    public static override _Q = 'xdr:to';

}
/** Starting Anchor Point. Serialized as `xdr:from` */
export class FromMarker extends MarkerType {

    public static override _Q = 'xdr:from';

}
/** Row. Serialized as `xdr:row` */
export class RowId extends OxmlLeafTextElement {

    public static override _Q = 'xdr:row';

}
/** Row Offset. Serialized as `xdr:rowOff` */
export class RowOffset extends OxmlLeafTextElement {

    public static override _Q = 'xdr:rowOff';

}
/** Column Offset. Serialized as `xdr:colOff` */
export class ColumnOffset extends OxmlLeafTextElement {

    public static override _Q = 'xdr:colOff';

}
/** Column). Serialized as `xdr:col` */
export class ColumnId extends OxmlLeafTextElement {

    public static override _Q = 'xdr:col';

}
/** 2D Transform for Graphic Frames. Serialized as `xdr:xfrm` */
export class Transform extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'xdr:xfrm';
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
/** Non-Visual Properties for a Graphic Frame. Serialized as `xdr:nvGraphicFramePr` */
export class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties> {

    public static override _Q = 'xdr:nvGraphicFramePr';
    /** Connection Non-Visual Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Graphic Frame Drawing Properties. */
    public get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined { return this._f(NonVisualGraphicFrameDrawingProperties); }

}
/** Picture Fill. Serialized as `xdr:blipFill` */
export class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {

    public static override _Q = 'xdr:blipFill';
    public static override _A = [':rotWithShape',];
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** Returns ABlip. */
    public get blip(): ABlip | undefined { return this._f(ABlip); }
    /** Source Rectangle. */
    public get sourceRectangle(): ASourceRectangle | undefined { return this._f(ASourceRectangle); }

}
/** Non-Visual Properties for a Picture. Serialized as `xdr:nvPicPr` */
export class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {

    public static override _Q = 'xdr:nvPicPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Picture Drawing Properties. */
    public get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined { return this._f(NonVisualPictureDrawingProperties); }

}
/** Non-Visual Properties for a Connection Shape. Serialized as `xdr:nvCxnSpPr` */
export class NonVisualConnectionShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectorShapeDrawingProperties> {

    public static override _Q = 'xdr:nvCxnSpPr';
    /** Connection Non-Visual Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Connector Shape Drawing Properties. */
    public get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined { return this._f(NonVisualConnectorShapeDrawingProperties); }

}
/** Shape Text Body. Serialized as `xdr:txBody` */
export class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    public static override _Q = 'xdr:txBody';
    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Defines the ShapeStyle Class. Serialized as `xdr:style` */
export class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'xdr:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}
/** Shape Properties. Serialized as `xdr:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'xdr:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Non-Visual Properties for a Shape. Serialized as `xdr:nvSpPr` */
export class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties> {

    public static override _Q = 'xdr:nvSpPr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Connection Non-Visual Shape Properties. */
    public get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined { return this._f(NonVisualShapeDrawingProperties); }

}
/** Worksheet Drawing. Serialized as `xdr:wsDr` */
export class WorksheetDrawing extends OxmlPartRootElement<TwoCellAnchor | OneCellAnchor | AbsoluteAnchor> {

    public static override _Q = 'xdr:wsDr';

}
/** Defines the ContentPart Class. Serialized as `xdr:contentPart` */
export class ContentPart extends OxmlCompositeElement<Xdr14ExcelNonVisualContentPartShapeProperties | Xdr14ApplicationNonVisualDrawingProperties | Xdr14Transform2D | Xdr14OfficeArtExtensionList> {

    public static override _Q = 'xdr:contentPart';
    public static override _A = ['r:id',':bwMode',];
    /** id. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** bwMode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** Returns Xdr14ExcelNonVisualContentPartShapeProperties. */
    public get excelNonVisualContentPartShapeProperties(): Xdr14ExcelNonVisualContentPartShapeProperties | undefined { return this._f(Xdr14ExcelNonVisualContentPartShapeProperties); }
    /** Returns Xdr14ApplicationNonVisualDrawingProperties. */
    public get applicationNonVisualDrawingProperties(): Xdr14ApplicationNonVisualDrawingProperties | undefined { return this._f(Xdr14ApplicationNonVisualDrawingProperties); }
    /** Returns Xdr14Transform2D. */
    public get transform2D(): Xdr14Transform2D | undefined { return this._f(Xdr14Transform2D); }
    /** Returns Xdr14OfficeArtExtensionList. */
    public get officeArtExtensionList(): Xdr14OfficeArtExtensionList | undefined { return this._f(Xdr14OfficeArtExtensionList); }

}
/** Defines the Picture Class. Serialized as `xdr:pic` */
export class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | ShapeStyle> {

    public static override _Q = 'xdr:pic';
    public static override _A = [':macro',':fPublished',];
    /** Reference To Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Publish to Server Flag. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Properties for a Picture. */
    public get nonVisualPictureProperties(): NonVisualPictureProperties | undefined { return this._f(NonVisualPictureProperties); }
    /** Picture Fill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Shape Style. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }

}
/** Connection Shape. Serialized as `xdr:cxnSp` */
export class ConnectionShape extends OxmlCompositeElement<NonVisualConnectionShapeProperties | ShapeProperties | ShapeStyle> {

    public static override _Q = 'xdr:cxnSp';
    public static override _A = [':macro',':fPublished',];
    /** Reference to Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Publish to Server Flag. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Properties for a Connection Shape. */
    public get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined { return this._f(NonVisualConnectionShapeProperties); }
    /** Connector Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ShapeStyle. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }

}
/** Graphic Frame. Serialized as `xdr:graphicFrame` */
export class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Transform | AGraphic> {

    public static override _Q = 'xdr:graphicFrame';
    public static override _A = [':macro',':fPublished',];
    /** Reference To Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Publish to Server Flag. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Properties for a Graphic Frame. */
    public get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined { return this._f(NonVisualGraphicFrameProperties); }
    /** 2D Transform for Graphic Frames. */
    public get transform(): Transform | undefined { return this._f(Transform); }
    /** Returns AGraphic. */
    public get graphic(): AGraphic | undefined { return this._f(AGraphic); }

}
/** Group Shape. Serialized as `xdr:grpSp` */
export class GroupShape extends OxmlCompositeElement<NonVisualGroupShapeProperties | GroupShapeProperties | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | Xdr14ContentPart> {

    public static override _Q = 'xdr:grpSp';
    /** Non-Visual Properties for a Group Shape. */
    public get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined { return this._f(NonVisualGroupShapeProperties); }
    /** Group Shape Properties. */
    public get groupShapeProperties(): GroupShapeProperties | undefined { return this._f(GroupShapeProperties); }

}
/** Shape. Serialized as `xdr:sp` */
export class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | ShapeStyle | TextBody> {

    public static override _Q = 'xdr:sp';
    public static override _A = [':macro',':textlink',':fLocksText',':fPublished',];
    /** Reference to Custom Function. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** Text Link. Serialized as `:textlink` */
    public get textLink(): StringValue | undefined { return this._g(':textlink'); }
    public set textLink(v: StringValue | undefined) { this._s(':textlink', v); }
    /** Lock Text Flag. Serialized as `:fLocksText` */
    public get lockText(): BooleanValue | undefined { return this._g(':fLocksText'); }
    public set lockText(v: BooleanValue | undefined) { this._s(':fLocksText', v); }
    /** Publish to Server Flag. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }
    /** Non-Visual Properties for a Shape. */
    public get nonVisualShapeProperties(): NonVisualShapeProperties | undefined { return this._f(NonVisualShapeProperties); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ShapeStyle. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Shape Text Body. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }

}
/** Absolute Anchor Shape Size. Serialized as `xdr:absoluteAnchor` */
export class AbsoluteAnchor extends OxmlCompositeElement<Position | Extent | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ClientData> {

    public static override _Q = 'xdr:absoluteAnchor';
    /** Position. */
    public get position(): Position | undefined { return this._f(Position); }
    /** Shape Extent. */
    public get extent(): Extent | undefined { return this._f(Extent); }

}
/** One Cell Anchor Shape Size. Serialized as `xdr:oneCellAnchor` */
export class OneCellAnchor extends OxmlCompositeElement<FromMarker | Extent | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ClientData> {

    public static override _Q = 'xdr:oneCellAnchor';
    /** Returns FromMarker. */
    public get fromMarker(): FromMarker | undefined { return this._f(FromMarker); }
    /** Returns Extent. */
    public get extent(): Extent | undefined { return this._f(Extent); }

}
/** Two Cell Anchor Shape Size. Serialized as `xdr:twoCellAnchor` */
export class TwoCellAnchor extends OxmlCompositeElement<FromMarker | ToMarker | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ClientData> {

    public static override _Q = 'xdr:twoCellAnchor';
    public static override _A = [':editAs',];
    /** Positioning and Resizing Behaviors. Serialized as `:editAs` */
    public get editAs(): EditAsValues | undefined { return this._g(':editAs'); }
    public set editAs(v: EditAsValues | undefined) { this._s(':editAs', v); }
    /** Starting Anchor Point. */
    public get fromMarker(): FromMarker | undefined { return this._f(FromMarker); }
    /** Ending Anchor Point. */
    public get toMarker(): ToMarker | undefined { return this._f(ToMarker); }

}

export function initDrawingSpreadsheetNamespace() {
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
        'xdr:cNvPr': NonVisualDrawingProperties,
        'xdr:cNvGrpSpPr': NonVisualGroupShapeDrawingProperties,
    };
    NonVisualGroupShapeDrawingProperties._C = {
        'a:grpSpLocks': AGroupShapeLocks,
        'a:extLst': ANonVisualGroupDrawingShapePropsExtensionList,
    };
    NonVisualGraphicFrameDrawingProperties._C = {
        'a:graphicFrameLocks': AGraphicFrameLocks,
        'a:extLst': AExtensionList,
    };
    NonVisualPictureDrawingProperties._C = {
        'a:picLocks': APictureLocks,
        'a:extLst': ANonVisualPicturePropertiesExtensionList,
    };
    NonVisualPictureDrawingProperties._D = {
        ':preferRelativeResize': new OxmlAttr(':preferRelativeResize', OxmlType.BooleanValue),
    };
    NonVisualConnectorShapeDrawingProperties._C = {
        'a:cxnSpLocks': AConnectionShapeLocks,
        'a:stCxn': AStartConnection,
        'a:endCxn': AEndConnection,
        'a:extLst': AExtensionList,
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
    Position._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    Extent._D = {
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
    };
    ClientData._D = {
        ':fLocksWithSheet': new OxmlAttr(':fLocksWithSheet', OxmlType.BooleanValue),
        ':fPrintsWithSheet': new OxmlAttr(':fPrintsWithSheet', OxmlType.BooleanValue),
    };
    MarkerType._C = {
        'xdr:col': ColumnId,
        'xdr:colOff': ColumnOffset,
        'xdr:row': RowId,
        'xdr:rowOff': RowOffset,
    };
    ToMarker._C = {
        'xdr:col': ColumnId,
        'xdr:colOff': ColumnOffset,
        'xdr:row': RowId,
        'xdr:rowOff': RowOffset,
    };
    FromMarker._C = {
        'xdr:col': ColumnId,
        'xdr:colOff': ColumnOffset,
        'xdr:row': RowId,
        'xdr:rowOff': RowOffset,
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
        'xdr:cNvPr': NonVisualDrawingProperties,
        'xdr:cNvGraphicFramePr': NonVisualGraphicFrameDrawingProperties,
    };
    BlipFill._C = {
        'a:blip': ABlip,
        'a:srcRect': ASourceRectangle,
        'a:tile': ATile,
        'a:stretch': AStretch,
    };
    BlipFill._D = {
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    NonVisualPictureProperties._C = {
        'xdr:cNvPr': NonVisualDrawingProperties,
        'xdr:cNvPicPr': NonVisualPictureDrawingProperties,
    };
    NonVisualConnectionShapeProperties._C = {
        'xdr:cNvPr': NonVisualDrawingProperties,
        'xdr:cNvCxnSpPr': NonVisualConnectorShapeDrawingProperties,
    };
    TextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    ShapeStyle._C = {
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
        'xdr:cNvPr': NonVisualDrawingProperties,
        'xdr:cNvSpPr': NonVisualShapeDrawingProperties,
    };
    WorksheetDrawing._C = {
        'xdr:twoCellAnchor': TwoCellAnchor,
        'xdr:oneCellAnchor': OneCellAnchor,
        'xdr:absoluteAnchor': AbsoluteAnchor,
    };
    ContentPart._C = {
        'xdr14:nvContentPartPr': Xdr14ExcelNonVisualContentPartShapeProperties,
        'xdr14:nvPr': Xdr14ApplicationNonVisualDrawingProperties,
        'xdr14:xfrm': Xdr14Transform2D,
        'xdr14:extLst': Xdr14OfficeArtExtensionList,
    };
    ContentPart._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    Picture._C = {
        'xdr:nvPicPr': NonVisualPictureProperties,
        'xdr:blipFill': BlipFill,
        'xdr:spPr': ShapeProperties,
        'xdr:style': ShapeStyle,
    };
    Picture._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    ConnectionShape._C = {
        'xdr:nvCxnSpPr': NonVisualConnectionShapeProperties,
        'xdr:spPr': ShapeProperties,
        'xdr:style': ShapeStyle,
    };
    ConnectionShape._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    GraphicFrame._C = {
        'xdr:nvGraphicFramePr': NonVisualGraphicFrameProperties,
        'xdr:xfrm': Transform,
        'a:graphic': AGraphic,
    };
    GraphicFrame._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    GroupShape._C = {
        'xdr:nvGrpSpPr': NonVisualGroupShapeProperties,
        'xdr:grpSpPr': GroupShapeProperties,
        'xdr:sp': Shape,
        'xdr:grpSp': GroupShape,
        'xdr:graphicFrame': GraphicFrame,
        'xdr:cxnSp': ConnectionShape,
        'xdr:pic': Picture,
        'xdr14:contentPart': Xdr14ContentPart,
    };
    Shape._C = {
        'xdr:nvSpPr': NonVisualShapeProperties,
        'xdr:spPr': ShapeProperties,
        'xdr:style': ShapeStyle,
        'xdr:txBody': TextBody,
    };
    Shape._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':textlink': new OxmlAttr(':textlink', OxmlType.StringValue),
        ':fLocksText': new OxmlAttr(':fLocksText', OxmlType.BooleanValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    AbsoluteAnchor._C = {
        'xdr:pos': Position,
        'xdr:ext': Extent,
        'xdr:sp': Shape,
        'xdr:grpSp': GroupShape,
        'xdr:graphicFrame': GraphicFrame,
        'xdr:cxnSp': ConnectionShape,
        'xdr:pic': Picture,
        'xdr:contentPart': ContentPart,
        'xdr:clientData': ClientData,
    };
    OneCellAnchor._C = {
        'xdr:from': FromMarker,
        'xdr:ext': Extent,
        'xdr:sp': Shape,
        'xdr:grpSp': GroupShape,
        'xdr:graphicFrame': GraphicFrame,
        'xdr:cxnSp': ConnectionShape,
        'xdr:pic': Picture,
        'xdr:contentPart': ContentPart,
        'xdr:clientData': ClientData,
    };
    TwoCellAnchor._C = {
        'xdr:from': FromMarker,
        'xdr:to': ToMarker,
        'xdr:sp': Shape,
        'xdr:grpSp': GroupShape,
        'xdr:graphicFrame': GraphicFrame,
        'xdr:cxnSp': ConnectionShape,
        'xdr:pic': Picture,
        'xdr:contentPart': ContentPart,
        'xdr:clientData': ClientData,
    };
    TwoCellAnchor._D = {
        ':editAs': new OxmlAttr(':editAs', OxmlType.EnumValue, EditAsValuesArray),
    };
    return {
        prefix: 'xdr',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing',
    };
}
