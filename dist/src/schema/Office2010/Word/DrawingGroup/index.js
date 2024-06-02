import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { Graphic as AGraphic } from "../../../Drawing";
import { TransformGroup as ATransformGroup } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { ExtensionList as AExtensionList } from "../../../Drawing";
import { GroupShapeLocks as AGroupShapeLocks } from "../../../Drawing";
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from "../../../Drawing";
import { Extension as AExtension } from "../../../Drawing";
import { Offset as AOffset } from "../../../Drawing";
import { Extents as AExtents } from "../../../Drawing";
import { GraphicFrameLocks as AGraphicFrameLocks } from "../../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../../Drawing";
import { WordprocessingShape as WpsWordprocessingShape } from "../../../Office2010/Word/DrawingShape";
import { Picture as PicPicture } from "../../../Drawing/Pictures";
import { ContentPart as W14ContentPart } from "../../../Office2010/Word";
class GraphicFrame extends OxmlCompositeElement {
  static _Q = "wpg:graphicFrame";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualGraphicFrameProperties. */
  get nonVisualGraphicFrameProperties() {
    return this._f(NonVisualGraphicFrameProperties);
  }
  /** Returns Transform2D. */
  get transform2D() {
    return this._f(Transform2D);
  }
  /** Returns AGraphic. */
  get graphic() {
    return this._f(AGraphic);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class GroupShapeProperties extends OxmlCompositeElement {
  static _Q = "wpg:grpSpPr";
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
class NonVisualGroupDrawingShapeProperties extends OxmlCompositeElement {
  static _Q = "wpg:cNvGrpSpPr";
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
  static _Q = "wpg:extLst";
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "wpg:xfrm";
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
  static _Q = "wpg:cNvFrPr";
  /** Graphic Frame Locks. */
  get graphicFrameLocks() {
    return this._f(AGraphicFrameLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "wpg:cNvPr";
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
class WordprocessingGroupType extends OxmlCompositeElement {
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualGroupDrawingShapeProperties. */
  get nonVisualGroupDrawingShapeProperties() {
    return this._f(NonVisualGroupDrawingShapeProperties);
  }
  /** Returns GroupShapeProperties. */
  get groupShapeProperties() {
    return this._f(GroupShapeProperties);
  }
}
class GroupShape extends WordprocessingGroupType {
  static _Q = "wpg:grpSp";
}
class WordprocessingGroup extends WordprocessingGroupType {
  static _Q = "wpg:wgp";
}
function initOffice2010WordDrawingGroupNamespace() {
  GraphicFrame._C = {
    "wpg:cNvPr": NonVisualDrawingProperties,
    "wpg:cNvFrPr": NonVisualGraphicFrameProperties,
    "wpg:xfrm": Transform2D,
    "a:graphic": AGraphic,
    "wpg:extLst": OfficeArtExtensionList
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
  NonVisualGraphicFrameProperties._C = {
    "a:graphicFrameLocks": AGraphicFrameLocks,
    "a:extLst": AExtensionList
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
  WordprocessingGroupType._C = {
    "wpg:cNvPr": NonVisualDrawingProperties,
    "wpg:cNvGrpSpPr": NonVisualGroupDrawingShapeProperties,
    "wpg:grpSpPr": GroupShapeProperties,
    "wps:wsp": WpsWordprocessingShape,
    "wpg:grpSp": GroupShape,
    "wpg:graphicFrame": GraphicFrame,
    "pic:pic": PicPicture,
    "w14:contentPart": W14ContentPart,
    "wpg:extLst": OfficeArtExtensionList
  };
  GroupShape._C = {
    "wpg:cNvPr": NonVisualDrawingProperties,
    "wpg:cNvGrpSpPr": NonVisualGroupDrawingShapeProperties,
    "wpg:grpSpPr": GroupShapeProperties,
    "wps:wsp": WpsWordprocessingShape,
    "wpg:grpSp": GroupShape,
    "wpg:graphicFrame": GraphicFrame,
    "pic:pic": PicPicture,
    "w14:contentPart": W14ContentPart,
    "wpg:extLst": OfficeArtExtensionList
  };
  WordprocessingGroup._C = {
    "wpg:cNvPr": NonVisualDrawingProperties,
    "wpg:cNvGrpSpPr": NonVisualGroupDrawingShapeProperties,
    "wpg:grpSpPr": GroupShapeProperties,
    "wps:wsp": WpsWordprocessingShape,
    "wpg:grpSp": GroupShape,
    "wpg:graphicFrame": GraphicFrame,
    "pic:pic": PicPicture,
    "w14:contentPart": W14ContentPart,
    "wpg:extLst": OfficeArtExtensionList
  };
  return {
    prefix: "wpg",
    xmlns: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
  };
}
export {
  GraphicFrame,
  GroupShape,
  GroupShapeProperties,
  NonVisualDrawingProperties,
  NonVisualGraphicFrameProperties,
  NonVisualGroupDrawingShapeProperties,
  OfficeArtExtensionList,
  Transform2D,
  WordprocessingGroup,
  WordprocessingGroupType,
  initOffice2010WordDrawingGroupNamespace
};
