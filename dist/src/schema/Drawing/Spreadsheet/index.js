import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../Drawing";
import { TransformGroup as ATransformGroup } from "../../Drawing";
import { NoFill as ANoFill } from "../../Drawing";
import { SolidFill as ASolidFill } from "../../Drawing";
import { GradientFill as AGradientFill } from "../../Drawing";
import { BlipFill as ABlipFill } from "../../Drawing";
import { PatternFill as APatternFill } from "../../Drawing";
import { GroupFill as AGroupFill } from "../../Drawing";
import { EffectList as AEffectList } from "../../Drawing";
import { EffectDag as AEffectDag } from "../../Drawing";
import { Scene3DType as AScene3DType } from "../../Drawing";
import { ExtensionList as AExtensionList } from "../../Drawing";
import { GroupShapeLocks as AGroupShapeLocks } from "../../Drawing";
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from "../../Drawing";
import { GraphicFrameLocks as AGraphicFrameLocks } from "../../Drawing";
import { PictureLocks as APictureLocks } from "../../Drawing";
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from "../../Drawing";
import { ConnectionShapeLocks as AConnectionShapeLocks } from "../../Drawing";
import { StartConnection as AStartConnection } from "../../Drawing";
import { EndConnection as AEndConnection } from "../../Drawing";
import { ShapeLocks as AShapeLocks } from "../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { Offset as AOffset } from "../../Drawing";
import { Extents as AExtents } from "../../Drawing";
import { Blip as ABlip } from "../../Drawing";
import { SourceRectangle as ASourceRectangle } from "../../Drawing";
import { Tile as ATile } from "../../Drawing";
import { Stretch as AStretch } from "../../Drawing";
import { BodyProperties as ABodyProperties } from "../../Drawing";
import { ListStyle as AListStyle } from "../../Drawing";
import { Paragraph as AParagraph } from "../../Drawing";
import { LineReference as ALineReference } from "../../Drawing";
import { FillReference as AFillReference } from "../../Drawing";
import { EffectReference as AEffectReference } from "../../Drawing";
import { FontReference as AFontReference } from "../../Drawing";
import { Transform2D as ATransform2D } from "../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../Drawing";
import { Outline as AOutline } from "../../Drawing";
import { Shape3DType as AShape3DType } from "../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../Drawing";
import { ExcelNonVisualContentPartShapeProperties as Xdr14ExcelNonVisualContentPartShapeProperties } from "../../Office2010/Excel/Drawing";
import { ApplicationNonVisualDrawingProperties as Xdr14ApplicationNonVisualDrawingProperties } from "../../Office2010/Excel/Drawing";
import { Transform2D as Xdr14Transform2D } from "../../Office2010/Excel/Drawing";
import { OfficeArtExtensionList as Xdr14OfficeArtExtensionList } from "../../Office2010/Excel/Drawing";
import { Graphic as AGraphic } from "../../Drawing";
import { ContentPart as Xdr14ContentPart } from "../../Office2010/Excel/Drawing";
var EditAsValues = /* @__PURE__ */ ((EditAsValues2) => {
  EditAsValues2["TwoCell"] = "twoCell";
  EditAsValues2["OneCell"] = "oneCell";
  EditAsValues2["Absolute"] = "absolute";
  return EditAsValues2;
})(EditAsValues || {});
const EditAsValuesArray = [
  "twoCell" /* TwoCell */,
  "oneCell" /* OneCell */,
  "absolute" /* Absolute */
];
class GroupShapeProperties extends OxmlCompositeElement {
  static _Q = "xdr:grpSpPr";
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
class NonVisualGroupShapeProperties extends OxmlCompositeElement {
  static _Q = "xdr:nvGrpSpPr";
  /** Connection Non-Visual Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Group Shape Drawing Properties. */
  get nonVisualGroupShapeDrawingProperties() {
    return this._f(NonVisualGroupShapeDrawingProperties);
  }
}
class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr:cNvGrpSpPr";
  /** Returns AGroupShapeLocks. */
  get groupShapeLocks() {
    return this._f(AGroupShapeLocks);
  }
  /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
  get nonVisualGroupDrawingShapePropsExtensionList() {
    return this._f(ANonVisualGroupDrawingShapePropsExtensionList);
  }
}
class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr:cNvGraphicFramePr";
  /** Graphic Frame Locks. */
  get graphicFrameLocks() {
    return this._f(AGraphicFrameLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualPictureDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr:cNvPicPr";
  static _A = [":preferRelativeResize"];
  /** preferRelativeResize. Serialized as `:preferRelativeResize` */
  get preferRelativeResize() {
    return this._g(":preferRelativeResize");
  }
  set preferRelativeResize(v) {
    this._s(":preferRelativeResize", v);
  }
  /** Returns APictureLocks. */
  get pictureLocks() {
    return this._f(APictureLocks);
  }
  /** Returns ANonVisualPicturePropertiesExtensionList. */
  get nonVisualPicturePropertiesExtensionList() {
    return this._f(ANonVisualPicturePropertiesExtensionList);
  }
}
class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr:cNvCxnSpPr";
  /** Connection Shape Locks. */
  get connectionShapeLocks() {
    return this._f(AConnectionShapeLocks);
  }
  /** Connection Start. */
  get startConnection() {
    return this._f(AStartConnection);
  }
  /** Connection End. */
  get endConnection() {
    return this._f(AEndConnection);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr:cNvSpPr";
  static _A = [":txBox"];
  /** Text Box. Serialized as `:txBox` */
  get textBox() {
    return this._g(":txBox");
  }
  set textBox(v) {
    this._s(":txBox", v);
  }
  /** Shape Locks. */
  get shapeLocks() {
    return this._f(AShapeLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "xdr:cNvPr";
  static _A = [":id", ":name", ":descr", ":hidden", ":title"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** descr. Serialized as `:descr` */
  get description() {
    return this._g(":descr");
  }
  set description(v) {
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
  /** Returns AHyperlinkOnClick. */
  get hyperlinkOnClick() {
    return this._f(AHyperlinkOnClick);
  }
  /** Returns AHyperlinkOnHover. */
  get hyperlinkOnHover() {
    return this._f(AHyperlinkOnHover);
  }
  /** Returns ANonVisualDrawingPropertiesExtensionList. */
  get nonVisualDrawingPropertiesExtensionList() {
    return this._f(ANonVisualDrawingPropertiesExtensionList);
  }
}
class Position extends OxmlLeafElement {
  static _Q = "xdr:pos";
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
class Extent extends OxmlLeafElement {
  static _Q = "xdr:ext";
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
class ClientData extends OxmlLeafElement {
  static _Q = "xdr:clientData";
  static _A = [":fLocksWithSheet", ":fPrintsWithSheet"];
  /** Locks With Sheet Flag. Serialized as `:fLocksWithSheet` */
  get lockWithSheet() {
    return this._g(":fLocksWithSheet");
  }
  set lockWithSheet(v) {
    this._s(":fLocksWithSheet", v);
  }
  /** Prints With Sheet Flag. Serialized as `:fPrintsWithSheet` */
  get printWithSheet() {
    return this._g(":fPrintsWithSheet");
  }
  set printWithSheet(v) {
    this._s(":fPrintsWithSheet", v);
  }
}
class MarkerType extends OxmlCompositeElement {
  /** Column). */
  get columnId() {
    return this._f(ColumnId);
  }
  /** Column Offset. */
  get columnOffset() {
    return this._f(ColumnOffset);
  }
  /** Row. */
  get rowId() {
    return this._f(RowId);
  }
  /** Row Offset. */
  get rowOffset() {
    return this._f(RowOffset);
  }
}
class ToMarker extends MarkerType {
  static _Q = "xdr:to";
}
class FromMarker extends MarkerType {
  static _Q = "xdr:from";
}
class RowId extends OxmlLeafTextElement {
  static _Q = "xdr:row";
}
class RowOffset extends OxmlLeafTextElement {
  static _Q = "xdr:rowOff";
}
class ColumnOffset extends OxmlLeafTextElement {
  static _Q = "xdr:colOff";
}
class ColumnId extends OxmlLeafTextElement {
  static _Q = "xdr:col";
}
class Transform extends OxmlCompositeElement {
  static _Q = "xdr:xfrm";
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
class NonVisualGraphicFrameProperties extends OxmlCompositeElement {
  static _Q = "xdr:nvGraphicFramePr";
  /** Connection Non-Visual Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Graphic Frame Drawing Properties. */
  get nonVisualGraphicFrameDrawingProperties() {
    return this._f(NonVisualGraphicFrameDrawingProperties);
  }
}
class BlipFill extends OxmlCompositeElement {
  static _Q = "xdr:blipFill";
  static _A = [":rotWithShape"];
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
class NonVisualPictureProperties extends OxmlCompositeElement {
  static _Q = "xdr:nvPicPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Picture Drawing Properties. */
  get nonVisualPictureDrawingProperties() {
    return this._f(NonVisualPictureDrawingProperties);
  }
}
class NonVisualConnectionShapeProperties extends OxmlCompositeElement {
  static _Q = "xdr:nvCxnSpPr";
  /** Connection Non-Visual Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Connector Shape Drawing Properties. */
  get nonVisualConnectorShapeDrawingProperties() {
    return this._f(NonVisualConnectorShapeDrawingProperties);
  }
}
class TextBody extends OxmlCompositeElement {
  static _Q = "xdr:txBody";
  /** Body Properties. */
  get bodyProperties() {
    return this._f(ABodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(AListStyle);
  }
}
class ShapeStyle extends OxmlCompositeElement {
  static _Q = "xdr:style";
  /** Returns ALineReference. */
  get lineReference() {
    return this._f(ALineReference);
  }
  /** Returns AFillReference. */
  get fillReference() {
    return this._f(AFillReference);
  }
  /** Returns AEffectReference. */
  get effectReference() {
    return this._f(AEffectReference);
  }
  /** Font Reference. */
  get fontReference() {
    return this._f(AFontReference);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "xdr:spPr";
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
class NonVisualShapeProperties extends OxmlCompositeElement {
  static _Q = "xdr:nvSpPr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Connection Non-Visual Shape Properties. */
  get nonVisualShapeDrawingProperties() {
    return this._f(NonVisualShapeDrawingProperties);
  }
}
class WorksheetDrawing extends OxmlPartRootElement {
  static _Q = "xdr:wsDr";
}
class ContentPart extends OxmlCompositeElement {
  static _Q = "xdr:contentPart";
  static _A = ["r:id", ":bwMode"];
  /** id. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** bwMode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** Returns Xdr14ExcelNonVisualContentPartShapeProperties. */
  get excelNonVisualContentPartShapeProperties() {
    return this._f(Xdr14ExcelNonVisualContentPartShapeProperties);
  }
  /** Returns Xdr14ApplicationNonVisualDrawingProperties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(Xdr14ApplicationNonVisualDrawingProperties);
  }
  /** Returns Xdr14Transform2D. */
  get transform2D() {
    return this._f(Xdr14Transform2D);
  }
  /** Returns Xdr14OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(Xdr14OfficeArtExtensionList);
  }
}
class Picture extends OxmlCompositeElement {
  static _Q = "xdr:pic";
  static _A = [":macro", ":fPublished"];
  /** Reference To Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Publish to Server Flag. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Properties for a Picture. */
  get nonVisualPictureProperties() {
    return this._f(NonVisualPictureProperties);
  }
  /** Picture Fill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Shape Style. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
}
class ConnectionShape extends OxmlCompositeElement {
  static _Q = "xdr:cxnSp";
  static _A = [":macro", ":fPublished"];
  /** Reference to Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Publish to Server Flag. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Properties for a Connection Shape. */
  get nonVisualConnectionShapeProperties() {
    return this._f(NonVisualConnectionShapeProperties);
  }
  /** Connector Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ShapeStyle. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
}
class GraphicFrame extends OxmlCompositeElement {
  static _Q = "xdr:graphicFrame";
  static _A = [":macro", ":fPublished"];
  /** Reference To Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Publish to Server Flag. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Properties for a Graphic Frame. */
  get nonVisualGraphicFrameProperties() {
    return this._f(NonVisualGraphicFrameProperties);
  }
  /** 2D Transform for Graphic Frames. */
  get transform() {
    return this._f(Transform);
  }
  /** Returns AGraphic. */
  get graphic() {
    return this._f(AGraphic);
  }
}
class GroupShape extends OxmlCompositeElement {
  static _Q = "xdr:grpSp";
  /** Non-Visual Properties for a Group Shape. */
  get nonVisualGroupShapeProperties() {
    return this._f(NonVisualGroupShapeProperties);
  }
  /** Group Shape Properties. */
  get groupShapeProperties() {
    return this._f(GroupShapeProperties);
  }
}
class Shape extends OxmlCompositeElement {
  static _Q = "xdr:sp";
  static _A = [":macro", ":textlink", ":fLocksText", ":fPublished"];
  /** Reference to Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Text Link. Serialized as `:textlink` */
  get textLink() {
    return this._g(":textlink");
  }
  set textLink(v) {
    this._s(":textlink", v);
  }
  /** Lock Text Flag. Serialized as `:fLocksText` */
  get lockText() {
    return this._g(":fLocksText");
  }
  set lockText(v) {
    this._s(":fLocksText", v);
  }
  /** Publish to Server Flag. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Properties for a Shape. */
  get nonVisualShapeProperties() {
    return this._f(NonVisualShapeProperties);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ShapeStyle. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Shape Text Body. */
  get textBody() {
    return this._f(TextBody);
  }
}
class AbsoluteAnchor extends OxmlCompositeElement {
  static _Q = "xdr:absoluteAnchor";
  /** Position. */
  get position() {
    return this._f(Position);
  }
  /** Shape Extent. */
  get extent() {
    return this._f(Extent);
  }
}
class OneCellAnchor extends OxmlCompositeElement {
  static _Q = "xdr:oneCellAnchor";
  /** Returns FromMarker. */
  get fromMarker() {
    return this._f(FromMarker);
  }
  /** Returns Extent. */
  get extent() {
    return this._f(Extent);
  }
}
class TwoCellAnchor extends OxmlCompositeElement {
  static _Q = "xdr:twoCellAnchor";
  static _A = [":editAs"];
  /** Positioning and Resizing Behaviors. Serialized as `:editAs` */
  get editAs() {
    return this._g(":editAs");
  }
  set editAs(v) {
    this._s(":editAs", v);
  }
  /** Starting Anchor Point. */
  get fromMarker() {
    return this._f(FromMarker);
  }
  /** Ending Anchor Point. */
  get toMarker() {
    return this._f(ToMarker);
  }
}
function initDrawingSpreadsheetNamespace() {
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
  NonVisualGroupShapeProperties._C = {
    "xdr:cNvPr": NonVisualDrawingProperties,
    "xdr:cNvGrpSpPr": NonVisualGroupShapeDrawingProperties
  };
  NonVisualGroupShapeDrawingProperties._C = {
    "a:grpSpLocks": AGroupShapeLocks,
    "a:extLst": ANonVisualGroupDrawingShapePropsExtensionList
  };
  NonVisualGraphicFrameDrawingProperties._C = {
    "a:graphicFrameLocks": AGraphicFrameLocks,
    "a:extLst": AExtensionList
  };
  NonVisualPictureDrawingProperties._C = {
    "a:picLocks": APictureLocks,
    "a:extLst": ANonVisualPicturePropertiesExtensionList
  };
  NonVisualPictureDrawingProperties._D = {
    ":preferRelativeResize": new OxmlAttr(":preferRelativeResize", OxmlType.BooleanValue)
  };
  NonVisualConnectorShapeDrawingProperties._C = {
    "a:cxnSpLocks": AConnectionShapeLocks,
    "a:stCxn": AStartConnection,
    "a:endCxn": AEndConnection,
    "a:extLst": AExtensionList
  };
  NonVisualShapeDrawingProperties._C = {
    "a:spLocks": AShapeLocks,
    "a:extLst": AExtensionList
  };
  NonVisualShapeDrawingProperties._D = {
    ":txBox": new OxmlAttr(":txBox", OxmlType.BooleanValue)
  };
  NonVisualDrawingProperties._C = {
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkHover": AHyperlinkOnHover,
    "a:extLst": ANonVisualDrawingPropertiesExtensionList
  };
  NonVisualDrawingProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  Position._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  Extent._D = {
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value)
  };
  ClientData._D = {
    ":fLocksWithSheet": new OxmlAttr(":fLocksWithSheet", OxmlType.BooleanValue),
    ":fPrintsWithSheet": new OxmlAttr(":fPrintsWithSheet", OxmlType.BooleanValue)
  };
  MarkerType._C = {
    "xdr:col": ColumnId,
    "xdr:colOff": ColumnOffset,
    "xdr:row": RowId,
    "xdr:rowOff": RowOffset
  };
  ToMarker._C = {
    "xdr:col": ColumnId,
    "xdr:colOff": ColumnOffset,
    "xdr:row": RowId,
    "xdr:rowOff": RowOffset
  };
  FromMarker._C = {
    "xdr:col": ColumnId,
    "xdr:colOff": ColumnOffset,
    "xdr:row": RowId,
    "xdr:rowOff": RowOffset
  };
  Transform._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  NonVisualGraphicFrameProperties._C = {
    "xdr:cNvPr": NonVisualDrawingProperties,
    "xdr:cNvGraphicFramePr": NonVisualGraphicFrameDrawingProperties
  };
  BlipFill._C = {
    "a:blip": ABlip,
    "a:srcRect": ASourceRectangle,
    "a:tile": ATile,
    "a:stretch": AStretch
  };
  BlipFill._D = {
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  NonVisualPictureProperties._C = {
    "xdr:cNvPr": NonVisualDrawingProperties,
    "xdr:cNvPicPr": NonVisualPictureDrawingProperties
  };
  NonVisualConnectionShapeProperties._C = {
    "xdr:cNvPr": NonVisualDrawingProperties,
    "xdr:cNvCxnSpPr": NonVisualConnectorShapeDrawingProperties
  };
  TextBody._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  ShapeStyle._C = {
    "a:lnRef": ALineReference,
    "a:fillRef": AFillReference,
    "a:effectRef": AEffectReference,
    "a:fontRef": AFontReference
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
  NonVisualShapeProperties._C = {
    "xdr:cNvPr": NonVisualDrawingProperties,
    "xdr:cNvSpPr": NonVisualShapeDrawingProperties
  };
  WorksheetDrawing._C = {
    "xdr:twoCellAnchor": TwoCellAnchor,
    "xdr:oneCellAnchor": OneCellAnchor,
    "xdr:absoluteAnchor": AbsoluteAnchor
  };
  ContentPart._C = {
    "xdr14:nvContentPartPr": Xdr14ExcelNonVisualContentPartShapeProperties,
    "xdr14:nvPr": Xdr14ApplicationNonVisualDrawingProperties,
    "xdr14:xfrm": Xdr14Transform2D,
    "xdr14:extLst": Xdr14OfficeArtExtensionList
  };
  ContentPart._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  Picture._C = {
    "xdr:nvPicPr": NonVisualPictureProperties,
    "xdr:blipFill": BlipFill,
    "xdr:spPr": ShapeProperties,
    "xdr:style": ShapeStyle
  };
  Picture._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  ConnectionShape._C = {
    "xdr:nvCxnSpPr": NonVisualConnectionShapeProperties,
    "xdr:spPr": ShapeProperties,
    "xdr:style": ShapeStyle
  };
  ConnectionShape._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  GraphicFrame._C = {
    "xdr:nvGraphicFramePr": NonVisualGraphicFrameProperties,
    "xdr:xfrm": Transform,
    "a:graphic": AGraphic
  };
  GraphicFrame._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  GroupShape._C = {
    "xdr:nvGrpSpPr": NonVisualGroupShapeProperties,
    "xdr:grpSpPr": GroupShapeProperties,
    "xdr:sp": Shape,
    "xdr:grpSp": GroupShape,
    "xdr:graphicFrame": GraphicFrame,
    "xdr:cxnSp": ConnectionShape,
    "xdr:pic": Picture,
    "xdr14:contentPart": Xdr14ContentPart
  };
  Shape._C = {
    "xdr:nvSpPr": NonVisualShapeProperties,
    "xdr:spPr": ShapeProperties,
    "xdr:style": ShapeStyle,
    "xdr:txBody": TextBody
  };
  Shape._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":textlink": new OxmlAttr(":textlink", OxmlType.StringValue),
    ":fLocksText": new OxmlAttr(":fLocksText", OxmlType.BooleanValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  AbsoluteAnchor._C = {
    "xdr:pos": Position,
    "xdr:ext": Extent,
    "xdr:sp": Shape,
    "xdr:grpSp": GroupShape,
    "xdr:graphicFrame": GraphicFrame,
    "xdr:cxnSp": ConnectionShape,
    "xdr:pic": Picture,
    "xdr:contentPart": ContentPart,
    "xdr:clientData": ClientData
  };
  OneCellAnchor._C = {
    "xdr:from": FromMarker,
    "xdr:ext": Extent,
    "xdr:sp": Shape,
    "xdr:grpSp": GroupShape,
    "xdr:graphicFrame": GraphicFrame,
    "xdr:cxnSp": ConnectionShape,
    "xdr:pic": Picture,
    "xdr:contentPart": ContentPart,
    "xdr:clientData": ClientData
  };
  TwoCellAnchor._C = {
    "xdr:from": FromMarker,
    "xdr:to": ToMarker,
    "xdr:sp": Shape,
    "xdr:grpSp": GroupShape,
    "xdr:graphicFrame": GraphicFrame,
    "xdr:cxnSp": ConnectionShape,
    "xdr:pic": Picture,
    "xdr:contentPart": ContentPart,
    "xdr:clientData": ClientData
  };
  TwoCellAnchor._D = {
    ":editAs": new OxmlAttr(":editAs", OxmlType.EnumValue, EditAsValuesArray)
  };
  return {
    prefix: "xdr",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
  };
}
export {
  AbsoluteAnchor,
  BlipFill,
  ClientData,
  ColumnId,
  ColumnOffset,
  ConnectionShape,
  ContentPart,
  EditAsValues,
  EditAsValuesArray,
  Extent,
  FromMarker,
  GraphicFrame,
  GroupShape,
  GroupShapeProperties,
  MarkerType,
  NonVisualConnectionShapeProperties,
  NonVisualConnectorShapeDrawingProperties,
  NonVisualDrawingProperties,
  NonVisualGraphicFrameDrawingProperties,
  NonVisualGraphicFrameProperties,
  NonVisualGroupShapeDrawingProperties,
  NonVisualGroupShapeProperties,
  NonVisualPictureDrawingProperties,
  NonVisualPictureProperties,
  NonVisualShapeDrawingProperties,
  NonVisualShapeProperties,
  OneCellAnchor,
  Picture,
  Position,
  RowId,
  RowOffset,
  Shape,
  ShapeProperties,
  ShapeStyle,
  TextBody,
  ToMarker,
  Transform,
  TwoCellAnchor,
  WorksheetDrawing,
  initDrawingSpreadsheetNamespace
};
