import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
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
import { Offset as AOffset } from "../../Drawing";
import { Extents as AExtents } from "../../Drawing";
import { GraphicFrameLocks as AGraphicFrameLocks } from "../../Drawing";
import { Blip as ABlip } from "../../Drawing";
import { SourceRectangle as ASourceRectangle } from "../../Drawing";
import { Tile as ATile } from "../../Drawing";
import { Stretch as AStretch } from "../../Drawing";
import { PictureLocks as APictureLocks } from "../../Drawing";
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from "../../Drawing";
import { ConnectionShapeLocks as AConnectionShapeLocks } from "../../Drawing";
import { StartConnection as AStartConnection } from "../../Drawing";
import { EndConnection as AEndConnection } from "../../Drawing";
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
import { ShapeLocks as AShapeLocks } from "../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { Graphic as AGraphic } from "../../Drawing";
import { ContentPart as Cdr14ContentPart } from "../../Office2010/Drawing/ChartDrawing";
class GroupShapeProperties extends OxmlCompositeElement {
  static _Q = "cdr:grpSpPr";
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
  static _Q = "cdr:nvGrpSpPr";
  /** Chart Non Visual Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Group Shape Drawing Properties. */
  get nonVisualGroupShapeDrawingProperties() {
    return this._f(NonVisualGroupShapeDrawingProperties);
  }
}
class Extent extends OxmlLeafElement {
  static _Q = "cdr:ext";
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
class MarkerType extends OxmlCompositeElement {
  /** Relative X Coordinate. */
  get xPosition() {
    return this._f(XPosition);
  }
  /** Relative Y Coordinate. */
  get yPosition() {
    return this._f(YPosition);
  }
}
class ToAnchor extends MarkerType {
  static _Q = "cdr:to";
}
class FromAnchor extends MarkerType {
  static _Q = "cdr:from";
}
class YPosition extends OxmlLeafTextElement {
  static _Q = "cdr:y";
}
class XPosition extends OxmlLeafTextElement {
  static _Q = "cdr:x";
}
class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "cdr:cNvGrpSpPr";
  /** Returns AGroupShapeLocks. */
  get groupShapeLocks() {
    return this._f(AGroupShapeLocks);
  }
  /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
  get nonVisualGroupDrawingShapePropsExtensionList() {
    return this._f(ANonVisualGroupDrawingShapePropsExtensionList);
  }
}
class Transform extends OxmlCompositeElement {
  static _Q = "cdr:xfrm";
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
  static _Q = "cdr:nvGraphicFramePr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Graphic Frame Drawing Properties. */
  get nonVisualGraphicFrameDrawingProperties() {
    return this._f(NonVisualGraphicFrameDrawingProperties);
  }
}
class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement {
  static _Q = "cdr:cNvGraphicFramePr";
  /** Graphic Frame Locks. */
  get graphicFrameLocks() {
    return this._f(AGraphicFrameLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class BlipFill extends OxmlCompositeElement {
  static _Q = "cdr:blipFill";
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
class NonVisualPictureProperties extends OxmlCompositeElement {
  static _Q = "cdr:nvPicPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Picture Drawing Properties. */
  get nonVisualPictureDrawingProperties() {
    return this._f(NonVisualPictureDrawingProperties);
  }
}
class NonVisualPictureDrawingProperties extends OxmlCompositeElement {
  static _Q = "cdr:cNvPicPr";
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
  static _Q = "cdr:nvCxnSpPr";
  /** Chart Non Visual Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Connection Shape Drawing Properties. */
  get nonVisualConnectionShapeProperties() {
    return this._f(NonVisualConnectionShapeProperties);
  }
}
class NonVisualConnectionShapeProperties extends OxmlCompositeElement {
  static _Q = "cdr:cNvCxnSpPr";
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
class TextBody extends OxmlCompositeElement {
  static _Q = "cdr:txBody";
  /** Body Properties. */
  get bodyProperties() {
    return this._f(ABodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(AListStyle);
  }
}
class Style extends OxmlCompositeElement {
  static _Q = "cdr:style";
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
  static _Q = "cdr:spPr";
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
  static _Q = "cdr:nvSpPr";
  /** Chart Non Visual Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Shape Drawing Properties. */
  get nonVisualShapeDrawingProperties() {
    return this._f(NonVisualShapeDrawingProperties);
  }
}
class NonVisualShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "cdr:cNvSpPr";
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
  static _Q = "cdr:cNvPr";
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
class Picture extends OxmlCompositeElement {
  static _Q = "cdr:pic";
  static _A = [":macro", ":fPublished"];
  /** Reference to Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Publish to Server. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Picture Properties. */
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
  /** Returns Style. */
  get style() {
    return this._f(Style);
  }
}
class ConnectionShape extends OxmlCompositeElement {
  static _Q = "cdr:cxnSp";
  static _A = [":macro", ":fPublished"];
  /** Reference to Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Publish to Server. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Connector Non Visual Properties. */
  get nonVisualConnectorShapeDrawingProperties() {
    return this._f(NonVisualConnectorShapeDrawingProperties);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Connection Shape Style. */
  get style() {
    return this._f(Style);
  }
}
class GraphicFrame extends OxmlCompositeElement {
  static _Q = "cdr:graphicFrame";
  static _A = [":macro", ":fPublished"];
  /** Reference to Custom Function. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** Publish To Server. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Graphic Frame Properties. */
  get nonVisualGraphicFrameProperties() {
    return this._f(NonVisualGraphicFrameProperties);
  }
  /** Graphic Frame Transform. */
  get transform() {
    return this._f(Transform);
  }
  /** Graphical Object. */
  get graphic() {
    return this._f(AGraphic);
  }
}
class GroupShape extends OxmlCompositeElement {
  static _Q = "cdr:grpSp";
  /** Non-Visual Group Shape Properties. */
  get nonVisualGroupShapeProperties() {
    return this._f(NonVisualGroupShapeProperties);
  }
  /** Group Shape Properties. */
  get groupShapeProperties() {
    return this._f(GroupShapeProperties);
  }
}
class Shape extends OxmlCompositeElement {
  static _Q = "cdr:sp";
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
  /** Lock Text. Serialized as `:fLocksText` */
  get lockText() {
    return this._g(":fLocksText");
  }
  set lockText(v) {
    this._s(":fLocksText", v);
  }
  /** Publish to Server. Serialized as `:fPublished` */
  get published() {
    return this._g(":fPublished");
  }
  set published(v) {
    this._s(":fPublished", v);
  }
  /** Non-Visual Shape Properties. */
  get nonVisualShapeProperties() {
    return this._f(NonVisualShapeProperties);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Shape Style. */
  get style() {
    return this._f(Style);
  }
  /** Shape Text Body. */
  get textBody() {
    return this._f(TextBody);
  }
}
class AbsoluteAnchorSize extends OxmlCompositeElement {
  static _Q = "cdr:absSizeAnchor";
  /** Returns FromAnchor. */
  get fromAnchor() {
    return this._f(FromAnchor);
  }
  /** Shape Extent. */
  get extent() {
    return this._f(Extent);
  }
}
class RelativeAnchorSize extends OxmlCompositeElement {
  static _Q = "cdr:relSizeAnchor";
  /** Starting Anchor Point. */
  get fromAnchor() {
    return this._f(FromAnchor);
  }
  /** Ending Anchor Point. */
  get toAnchor() {
    return this._f(ToAnchor);
  }
}
function initDrawingChartDrawingNamespace() {
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
    "cdr:cNvPr": NonVisualDrawingProperties,
    "cdr:cNvGrpSpPr": NonVisualGroupShapeDrawingProperties
  };
  Extent._D = {
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value)
  };
  MarkerType._C = {
    "cdr:x": XPosition,
    "cdr:y": YPosition
  };
  ToAnchor._C = {
    "cdr:x": XPosition,
    "cdr:y": YPosition
  };
  FromAnchor._C = {
    "cdr:x": XPosition,
    "cdr:y": YPosition
  };
  NonVisualGroupShapeDrawingProperties._C = {
    "a:grpSpLocks": AGroupShapeLocks,
    "a:extLst": ANonVisualGroupDrawingShapePropsExtensionList
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
    "cdr:cNvPr": NonVisualDrawingProperties,
    "cdr:cNvGraphicFramePr": NonVisualGraphicFrameDrawingProperties
  };
  NonVisualGraphicFrameDrawingProperties._C = {
    "a:graphicFrameLocks": AGraphicFrameLocks,
    "a:extLst": AExtensionList
  };
  BlipFill._C = {
    "a:blip": ABlip,
    "a:srcRect": ASourceRectangle,
    "a:tile": ATile,
    "a:stretch": AStretch
  };
  BlipFill._D = {
    ":dpi": new OxmlAttr(":dpi", OxmlType.UInt32Value),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  NonVisualPictureProperties._C = {
    "cdr:cNvPr": NonVisualDrawingProperties,
    "cdr:cNvPicPr": NonVisualPictureDrawingProperties
  };
  NonVisualPictureDrawingProperties._C = {
    "a:picLocks": APictureLocks,
    "a:extLst": ANonVisualPicturePropertiesExtensionList
  };
  NonVisualPictureDrawingProperties._D = {
    ":preferRelativeResize": new OxmlAttr(":preferRelativeResize", OxmlType.BooleanValue)
  };
  NonVisualConnectorShapeDrawingProperties._C = {
    "cdr:cNvPr": NonVisualDrawingProperties,
    "cdr:cNvCxnSpPr": NonVisualConnectionShapeProperties
  };
  NonVisualConnectionShapeProperties._C = {
    "a:cxnSpLocks": AConnectionShapeLocks,
    "a:stCxn": AStartConnection,
    "a:endCxn": AEndConnection,
    "a:extLst": AExtensionList
  };
  TextBody._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  Style._C = {
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
    "cdr:cNvPr": NonVisualDrawingProperties,
    "cdr:cNvSpPr": NonVisualShapeDrawingProperties
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
  Picture._C = {
    "cdr:nvPicPr": NonVisualPictureProperties,
    "cdr:blipFill": BlipFill,
    "cdr:spPr": ShapeProperties,
    "cdr:style": Style
  };
  Picture._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  ConnectionShape._C = {
    "cdr:nvCxnSpPr": NonVisualConnectorShapeDrawingProperties,
    "cdr:spPr": ShapeProperties,
    "cdr:style": Style
  };
  ConnectionShape._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  GraphicFrame._C = {
    "cdr:nvGraphicFramePr": NonVisualGraphicFrameProperties,
    "cdr:xfrm": Transform,
    "a:graphic": AGraphic
  };
  GraphicFrame._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  GroupShape._C = {
    "cdr:nvGrpSpPr": NonVisualGroupShapeProperties,
    "cdr:grpSpPr": GroupShapeProperties,
    "cdr:sp": Shape,
    "cdr:grpSp": GroupShape,
    "cdr:graphicFrame": GraphicFrame,
    "cdr:cxnSp": ConnectionShape,
    "cdr:pic": Picture,
    "cdr14:contentPart": Cdr14ContentPart
  };
  Shape._C = {
    "cdr:nvSpPr": NonVisualShapeProperties,
    "cdr:spPr": ShapeProperties,
    "cdr:style": Style,
    "cdr:txBody": TextBody
  };
  Shape._D = {
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":textlink": new OxmlAttr(":textlink", OxmlType.StringValue),
    ":fLocksText": new OxmlAttr(":fLocksText", OxmlType.BooleanValue),
    ":fPublished": new OxmlAttr(":fPublished", OxmlType.BooleanValue)
  };
  AbsoluteAnchorSize._C = {
    "cdr:from": FromAnchor,
    "cdr:ext": Extent,
    "cdr:sp": Shape,
    "cdr:grpSp": GroupShape,
    "cdr:graphicFrame": GraphicFrame,
    "cdr:cxnSp": ConnectionShape,
    "cdr:pic": Picture,
    "cdr14:contentPart": Cdr14ContentPart
  };
  RelativeAnchorSize._C = {
    "cdr:from": FromAnchor,
    "cdr:to": ToAnchor,
    "cdr:sp": Shape,
    "cdr:grpSp": GroupShape,
    "cdr:graphicFrame": GraphicFrame,
    "cdr:cxnSp": ConnectionShape,
    "cdr:pic": Picture,
    "cdr14:contentPart": Cdr14ContentPart
  };
  return {
    prefix: "cdr",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/chartDrawing"
  };
}
export {
  AbsoluteAnchorSize,
  BlipFill,
  ConnectionShape,
  Extent,
  FromAnchor,
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
  Picture,
  RelativeAnchorSize,
  Shape,
  ShapeProperties,
  Style,
  TextBody,
  ToAnchor,
  Transform,
  XPosition,
  YPosition,
  initDrawingChartDrawingNamespace
};
