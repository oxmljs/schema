import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
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
import { Extension as AExtension } from "../../Drawing";
import { Offset as AOffset } from "../../Drawing";
import { Extents as AExtents } from "../../Drawing";
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
class GroupShapeType extends OxmlCompositeElement {
  /** Returns GroupShapeNonVisualProperties. */
  get groupShapeNonVisualProperties() {
    return this._f(GroupShapeNonVisualProperties);
  }
  /** Returns GroupShapeProperties. */
  get groupShapeProperties() {
    return this._f(GroupShapeProperties);
  }
}
class ShapeTree extends GroupShapeType {
  static _Q = "dsp:spTree";
}
class GroupShape extends GroupShapeType {
  static _Q = "dsp:grpSp";
}
class Shape extends OxmlCompositeElement {
  static _Q = "dsp:sp";
  static _A = [":modelId"];
  /** modelId. Serialized as `:modelId` */
  get modelId() {
    return this._g(":modelId");
  }
  set modelId(v) {
    this._s(":modelId", v);
  }
  /** Returns ShapeNonVisualProperties. */
  get shapeNonVisualProperties() {
    return this._f(ShapeNonVisualProperties);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ShapeStyle. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns TextBody. */
  get textBody() {
    return this._f(TextBody);
  }
  /** Returns Transform2D. */
  get transform2D() {
    return this._f(Transform2D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class GroupShapeProperties extends OxmlCompositeElement {
  static _Q = "dsp:grpSpPr";
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
class GroupShapeNonVisualProperties extends OxmlCompositeElement {
  static _Q = "dsp:nvGrpSpPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualGroupDrawingShapeProperties. */
  get nonVisualGroupDrawingShapeProperties() {
    return this._f(NonVisualGroupDrawingShapeProperties);
  }
}
class NonVisualGroupDrawingShapeProperties extends OxmlCompositeElement {
  static _Q = "dsp:cNvGrpSpPr";
  /** Returns AGroupShapeLocks. */
  get groupShapeLocks() {
    return this._f(AGroupShapeLocks);
  }
  /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
  get nonVisualGroupDrawingShapePropsExtensionList() {
    return this._f(ANonVisualGroupDrawingShapePropsExtensionList);
  }
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "dsp:extLst";
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "dsp:txXfrm";
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
class TextBody extends OxmlCompositeElement {
  static _Q = "dsp:txBody";
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
  static _Q = "dsp:style";
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
  static _Q = "dsp:spPr";
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
class ShapeNonVisualProperties extends OxmlCompositeElement {
  static _Q = "dsp:nvSpPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualDrawingShapeProperties. */
  get nonVisualDrawingShapeProperties() {
    return this._f(NonVisualDrawingShapeProperties);
  }
}
class NonVisualDrawingShapeProperties extends OxmlCompositeElement {
  static _Q = "dsp:cNvSpPr";
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
  static _Q = "dsp:cNvPr";
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
class DataModelExtensionBlock extends OxmlLeafElement {
  static _Q = "dsp:dataModelExt";
  static _A = [":relId", ":minVer"];
  /** relId. Serialized as `:relId` */
  get relId() {
    return this._g(":relId");
  }
  set relId(v) {
    this._s(":relId", v);
  }
  /** minVer. Serialized as `:minVer` */
  get minVer() {
    return this._g(":minVer");
  }
  set minVer(v) {
    this._s(":minVer", v);
  }
}
class Drawing extends OxmlPartRootElement {
  static _Q = "dsp:drawing";
  /** Returns ShapeTree. */
  get shapeTree() {
    return this._f(ShapeTree);
  }
}
function initOfficeDrawingNamespace() {
  GroupShapeType._C = {
    "dsp:nvGrpSpPr": GroupShapeNonVisualProperties,
    "dsp:grpSpPr": GroupShapeProperties,
    "dsp:sp": Shape,
    "dsp:grpSp": GroupShape,
    "dsp:extLst": OfficeArtExtensionList
  };
  ShapeTree._C = {
    "dsp:nvGrpSpPr": GroupShapeNonVisualProperties,
    "dsp:grpSpPr": GroupShapeProperties,
    "dsp:sp": Shape,
    "dsp:grpSp": GroupShape,
    "dsp:extLst": OfficeArtExtensionList
  };
  GroupShape._C = {
    "dsp:nvGrpSpPr": GroupShapeNonVisualProperties,
    "dsp:grpSpPr": GroupShapeProperties,
    "dsp:sp": Shape,
    "dsp:grpSp": GroupShape,
    "dsp:extLst": OfficeArtExtensionList
  };
  Shape._C = {
    "dsp:nvSpPr": ShapeNonVisualProperties,
    "dsp:spPr": ShapeProperties,
    "dsp:style": ShapeStyle,
    "dsp:txBody": TextBody,
    "dsp:txXfrm": Transform2D,
    "dsp:extLst": OfficeArtExtensionList
  };
  Shape._D = {
    ":modelId": new OxmlAttr(":modelId", OxmlType.StringValue)
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
  GroupShapeNonVisualProperties._C = {
    "dsp:cNvPr": NonVisualDrawingProperties,
    "dsp:cNvGrpSpPr": NonVisualGroupDrawingShapeProperties
  };
  NonVisualGroupDrawingShapeProperties._C = {
    "a:grpSpLocks": AGroupShapeLocks,
    "a:extLst": ANonVisualGroupDrawingShapePropsExtensionList
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
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
  ShapeNonVisualProperties._C = {
    "dsp:cNvPr": NonVisualDrawingProperties,
    "dsp:cNvSpPr": NonVisualDrawingShapeProperties
  };
  NonVisualDrawingShapeProperties._C = {
    "a:spLocks": AShapeLocks,
    "a:extLst": AExtensionList
  };
  NonVisualDrawingShapeProperties._D = {
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
  DataModelExtensionBlock._D = {
    ":relId": new OxmlAttr(":relId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue)
  };
  Drawing._C = {
    "dsp:spTree": ShapeTree
  };
  return {
    prefix: "dsp",
    xmlns: "http://schemas.microsoft.com/office/drawing/2008/diagram"
  };
}
export {
  DataModelExtensionBlock,
  Drawing,
  GroupShape,
  GroupShapeNonVisualProperties,
  GroupShapeProperties,
  GroupShapeType,
  NonVisualDrawingProperties,
  NonVisualDrawingShapeProperties,
  NonVisualGroupDrawingShapeProperties,
  OfficeArtExtensionList,
  Shape,
  ShapeNonVisualProperties,
  ShapeProperties,
  ShapeStyle,
  ShapeTree,
  TextBody,
  Transform2D,
  initOfficeDrawingNamespace
};
