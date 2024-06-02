import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../Drawing";
import { Transform2D as ATransform2D } from "../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../Drawing";
import { NoFill as ANoFill } from "../../Drawing";
import { SolidFill as ASolidFill } from "../../Drawing";
import { GradientFill as AGradientFill } from "../../Drawing";
import { BlipFill as ABlipFill } from "../../Drawing";
import { PatternFill as APatternFill } from "../../Drawing";
import { GroupFill as AGroupFill } from "../../Drawing";
import { Outline as AOutline } from "../../Drawing";
import { EffectList as AEffectList } from "../../Drawing";
import { EffectDag as AEffectDag } from "../../Drawing";
import { Scene3DType as AScene3DType } from "../../Drawing";
import { Shape3DType as AShape3DType } from "../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../Drawing";
import { Blip as ABlip } from "../../Drawing";
import { SourceRectangle as ASourceRectangle } from "../../Drawing";
import { Tile as ATile } from "../../Drawing";
import { Stretch as AStretch } from "../../Drawing";
import { PictureLocks as APictureLocks } from "../../Drawing";
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from "../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { ShapeStyle as Pic14ShapeStyle } from "../../Office2010/Drawing/Pictures";
import { OfficeArtExtensionList as Pic14OfficeArtExtensionList } from "../../Office2010/Drawing/Pictures";
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "pic:spPr";
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
class BlipFill extends OxmlCompositeElement {
  static _Q = "pic:blipFill";
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
  static _Q = "pic:nvPicPr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Picture Drawing Properties. */
  get nonVisualPictureDrawingProperties() {
    return this._f(NonVisualPictureDrawingProperties);
  }
}
class NonVisualPictureDrawingProperties extends OxmlCompositeElement {
  static _Q = "pic:cNvPicPr";
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
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "pic:cNvPr";
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
  static _Q = "pic:pic";
  /** Non-Visual Picture Properties. */
  get nonVisualPictureProperties() {
    return this._f(NonVisualPictureProperties);
  }
  /** Picture Fill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns Pic14ShapeStyle. */
  get shapeStyle() {
    return this._f(Pic14ShapeStyle);
  }
  /** Returns Pic14OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(Pic14OfficeArtExtensionList);
  }
}
function initDrawingPicturesNamespace() {
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
    "pic:cNvPr": NonVisualDrawingProperties,
    "pic:cNvPicPr": NonVisualPictureDrawingProperties
  };
  NonVisualPictureDrawingProperties._C = {
    "a:picLocks": APictureLocks,
    "a:extLst": ANonVisualPicturePropertiesExtensionList
  };
  NonVisualPictureDrawingProperties._D = {
    ":preferRelativeResize": new OxmlAttr(":preferRelativeResize", OxmlType.BooleanValue)
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
    "pic:nvPicPr": NonVisualPictureProperties,
    "pic:blipFill": BlipFill,
    "pic:spPr": ShapeProperties,
    "pic14:style": Pic14ShapeStyle,
    "pic14:extLst": Pic14OfficeArtExtensionList
  };
  return {
    prefix: "pic",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture"
  };
}
export {
  BlipFill,
  NonVisualDrawingProperties,
  NonVisualPictureDrawingProperties,
  NonVisualPictureProperties,
  Picture,
  ShapeProperties,
  initDrawingPicturesNamespace
};
