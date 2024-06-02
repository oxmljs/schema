import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { BlipCompressionValuesArray } from "../../../Drawing";
import { Transform2D as ATransform2D } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { Outline as AOutline } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { Shape3DType as AShape3DType } from "../../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../../Drawing";
import { EmbeddedAnimation as A3danimEmbeddedAnimation } from "../../../Office2019/Drawing/Animation/Model3D";
import { PosterFrame as A3danimPosterFrame } from "../../../Office2019/Drawing/Animation/Model3D";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../../Drawing";
import { HslColor as AHslColor } from "../../../Drawing";
import { SystemColor as ASystemColor } from "../../../Drawing";
import { SchemeColor as ASchemeColor } from "../../../Drawing";
import { PresetColor as APresetColor } from "../../../Drawing";
import { AlphaBiLevel as AAlphaBiLevel } from "../../../Drawing";
import { AlphaCeiling as AAlphaCeiling } from "../../../Drawing";
import { AlphaFloor as AAlphaFloor } from "../../../Drawing";
import { AlphaInverse as AAlphaInverse } from "../../../Drawing";
import { AlphaModulationEffect as AAlphaModulationEffect } from "../../../Drawing";
import { AlphaModulationFixed as AAlphaModulationFixed } from "../../../Drawing";
import { AlphaReplace as AAlphaReplace } from "../../../Drawing";
import { BiLevel as ABiLevel } from "../../../Drawing";
import { Blur as ABlur } from "../../../Drawing";
import { ColorChange as AColorChange } from "../../../Drawing";
import { ColorReplacement as AColorReplacement } from "../../../Drawing";
import { Duotone as ADuotone } from "../../../Drawing";
import { FillOverlay as AFillOverlay } from "../../../Drawing";
import { Grayscale as AGrayscale } from "../../../Drawing";
import { Hsl as AHsl } from "../../../Drawing";
import { LuminanceEffect as ALuminanceEffect } from "../../../Drawing";
import { TintEffect as ATintEffect } from "../../../Drawing";
import { BlipExtensionList as ABlipExtensionList } from "../../../Drawing";
import { Extension as AExtension } from "../../../Drawing";
class UnknownLight extends OxmlLeafElement {
  static _Q = "am3d:unkLight";
}
class DirectionalLight extends OxmlCompositeElement {
  static _Q = "am3d:dirLight";
  static _A = [":enabled", ":angularRad"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** angularRad. Serialized as `:angularRad` */
  get angularRad() {
    return this._g(":angularRad");
  }
  set angularRad(v) {
    this._s(":angularRad", v);
  }
  /** Returns ColorType. */
  get colorType() {
    return this._f(ColorType);
  }
  /** Returns IlluminancePositiveRatio. */
  get illuminancePositiveRatio() {
    return this._f(IlluminancePositiveRatio);
  }
  /** Returns PosPoint3D. */
  get posPoint3D() {
    return this._f(PosPoint3D);
  }
  /** Returns LookAtPoint3D. */
  get lookAtPoint3D() {
    return this._f(LookAtPoint3D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class SpotLight extends OxmlCompositeElement {
  static _Q = "am3d:spotLight";
  static _A = [":enabled", ":rad", ":spotAng"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** rad. Serialized as `:rad` */
  get rad() {
    return this._g(":rad");
  }
  set rad(v) {
    this._s(":rad", v);
  }
  /** spotAng. Serialized as `:spotAng` */
  get spotAng() {
    return this._g(":spotAng");
  }
  set spotAng(v) {
    this._s(":spotAng", v);
  }
  /** Returns ColorType. */
  get colorType() {
    return this._f(ColorType);
  }
  /** Returns IntensityPositiveRatio. */
  get intensityPositiveRatio() {
    return this._f(IntensityPositiveRatio);
  }
  /** Returns PosPoint3D. */
  get posPoint3D() {
    return this._f(PosPoint3D);
  }
  /** Returns LookAtPoint3D. */
  get lookAtPoint3D() {
    return this._f(LookAtPoint3D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class PointLight extends OxmlCompositeElement {
  static _Q = "am3d:ptLight";
  static _A = [":enabled", ":rad"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** rad. Serialized as `:rad` */
  get rad() {
    return this._g(":rad");
  }
  set rad(v) {
    this._s(":rad", v);
  }
  /** Returns ColorType. */
  get colorType() {
    return this._f(ColorType);
  }
  /** Returns IntensityPositiveRatio. */
  get intensityPositiveRatio() {
    return this._f(IntensityPositiveRatio);
  }
  /** Returns PosPoint3D. */
  get posPoint3D() {
    return this._f(PosPoint3D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class AmbientLight extends OxmlCompositeElement {
  static _Q = "am3d:ambientLight";
  static _A = [":enabled"];
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** Returns ColorType. */
  get colorType() {
    return this._f(ColorType);
  }
  /** Returns IlluminancePositiveRatio. */
  get illuminancePositiveRatio() {
    return this._f(IlluminancePositiveRatio);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class WindowViewport extends OxmlCompositeElement {
  static _Q = "am3d:winViewport";
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class ObjectViewport extends OxmlCompositeElement {
  static _Q = "am3d:objViewport";
  static _A = [":viewportSz"];
  /** viewportSz. Serialized as `:viewportSz` */
  get viewportSz() {
    return this._g(":viewportSz");
  }
  set viewportSz(v) {
    this._s(":viewportSz", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class Model3DExtensionList extends OxmlCompositeElement {
  static _Q = "am3d:extLst";
}
class Model3DRaster extends OxmlCompositeElement {
  static _Q = "am3d:raster";
  static _A = [":rName", ":rVer"];
  /** rName. Serialized as `:rName` */
  get rName() {
    return this._g(":rName");
  }
  set rName(v) {
    this._s(":rName", v);
  }
  /** rVer. Serialized as `:rVer` */
  get rVer() {
    return this._g(":rVer");
  }
  set rVer(v) {
    this._s(":rVer", v);
  }
  /** Returns Blip. */
  get blip() {
    return this._f(Blip);
  }
}
class PictureAttributionSourceURL extends OxmlLeafElement {
  static _Q = "am3d:attrSrcUrl";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class Model3DTransform extends OxmlCompositeElement {
  static _Q = "am3d:trans";
  /** Returns MeterPerModelUnitPositiveRatio. */
  get meterPerModelUnitPositiveRatio() {
    return this._f(MeterPerModelUnitPositiveRatio);
  }
  /** Returns PreTransVector3D. */
  get preTransVector3D() {
    return this._f(PreTransVector3D);
  }
  /** Returns Scale3D. */
  get scale3D() {
    return this._f(Scale3D);
  }
  /** Returns Rotate3D. */
  get rotate3D() {
    return this._f(Rotate3D);
  }
  /** Returns PostTransVector3D. */
  get postTransVector3D() {
    return this._f(PostTransVector3D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class Model3DCamera extends OxmlCompositeElement {
  static _Q = "am3d:camera";
  /** Returns PosPoint3D. */
  get posPoint3D() {
    return this._f(PosPoint3D);
  }
  /** Returns UpVector3D. */
  get upVector3D() {
    return this._f(UpVector3D);
  }
  /** Returns LookAtPoint3D. */
  get lookAtPoint3D() {
    return this._f(LookAtPoint3D);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "am3d:spPr";
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
class Model3DExtension extends OxmlCompositeElement {
  static _Q = "am3d:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A3danimEmbeddedAnimation. */
  get embeddedAnimation() {
    return this._f(A3danimEmbeddedAnimation);
  }
  /** Returns A3danimPosterFrame. */
  get posterFrame() {
    return this._f(A3danimPosterFrame);
  }
}
class ColorType extends OxmlCompositeElement {
  static _Q = "am3d:clr";
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class Blip extends OxmlCompositeElement {
  static _Q = "am3d:blip";
  static _A = ["r:embed", "r:link", ":cstate"];
  /** Embedded Picture Reference. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
  /** Linked Picture Reference. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
  /** Compression state for blips.. Serialized as `:cstate` */
  get compressionState() {
    return this._g(":cstate");
  }
  set compressionState(v) {
    this._s(":cstate", v);
  }
}
class PerspectiveProjection extends OxmlCompositeElement {
  static _Q = "am3d:perspective";
  static _A = [":fov"];
  /** fov. Serialized as `:fov` */
  get fov() {
    return this._g(":fov");
  }
  set fov(v) {
    this._s(":fov", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OrthographicProjection extends OxmlCompositeElement {
  static _Q = "am3d:orthographic";
  /** Returns SzPositiveRatio. */
  get szPositiveRatio() {
    return this._f(SzPositiveRatio);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OpenXmlPoint3DElement extends OxmlLeafElement {
  static _A = [":x", ":y", ":z"];
  /** X-Coordinate in 3D. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y-Coordinate in 3D. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
  /** Z-Coordinate in 3D. Serialized as `:z` */
  get z() {
    return this._g(":z");
  }
  set z(v) {
    this._s(":z", v);
  }
}
class LookAtPoint3D extends OpenXmlPoint3DElement {
  static _Q = "am3d:lookAt";
}
class PosPoint3D extends OpenXmlPoint3DElement {
  static _Q = "am3d:pos";
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "am3d:extLst";
}
class Rotate3D extends OxmlLeafElement {
  static _Q = "am3d:rot";
  static _A = [":ax", ":ay", ":az"];
  /** ax. Serialized as `:ax` */
  get ax() {
    return this._g(":ax");
  }
  set ax(v) {
    this._s(":ax", v);
  }
  /** ay. Serialized as `:ay` */
  get ay() {
    return this._g(":ay");
  }
  set ay(v) {
    this._s(":ay", v);
  }
  /** az. Serialized as `:az` */
  get az() {
    return this._g(":az");
  }
  set az(v) {
    this._s(":az", v);
  }
}
class Scale3D extends OxmlCompositeElement {
  static _Q = "am3d:scale";
  /** Returns SxRatio. */
  get sxRatio() {
    return this._f(SxRatio);
  }
  /** Returns SyRatio. */
  get syRatio() {
    return this._f(SyRatio);
  }
  /** Returns SzRatio. */
  get szRatio() {
    return this._f(SzRatio);
  }
}
class Vector3DType extends OxmlLeafElement {
  static _A = [":dx", ":dy", ":dz"];
  /** Distance along X-axis in 3D. Serialized as `:dx` */
  get dx() {
    return this._g(":dx");
  }
  set dx(v) {
    this._s(":dx", v);
  }
  /** Distance along Y-axis in 3D. Serialized as `:dy` */
  get dy() {
    return this._g(":dy");
  }
  set dy(v) {
    this._s(":dy", v);
  }
  /** Distance along Z-axis in 3D. Serialized as `:dz` */
  get dz() {
    return this._g(":dz");
  }
  set dz(v) {
    this._s(":dz", v);
  }
}
class UpVector3D extends Vector3DType {
  static _Q = "am3d:up";
}
class PostTransVector3D extends Vector3DType {
  static _Q = "am3d:postTrans";
}
class PreTransVector3D extends Vector3DType {
  static _Q = "am3d:preTrans";
}
class OpenXmlPositiveRatioElement extends OxmlLeafElement {
  static _A = [":n", ":d"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** d. Serialized as `:d` */
  get d() {
    return this._g(":d");
  }
  set d(v) {
    this._s(":d", v);
  }
}
class IntensityPositiveRatio extends OpenXmlPositiveRatioElement {
  static _Q = "am3d:intensity";
}
class IlluminancePositiveRatio extends OpenXmlPositiveRatioElement {
  static _Q = "am3d:illuminance";
}
class SzPositiveRatio extends OpenXmlPositiveRatioElement {
  static _Q = "am3d:sz";
}
class MeterPerModelUnitPositiveRatio extends OpenXmlPositiveRatioElement {
  static _Q = "am3d:meterPerModelUnit";
}
class RatioType extends OxmlLeafElement {
  static _A = [":n", ":d"];
  /** Numerator. Serialized as `:n` */
  get numerator() {
    return this._g(":n");
  }
  set numerator(v) {
    this._s(":n", v);
  }
  /** Denominator. Serialized as `:d` */
  get denominator() {
    return this._g(":d");
  }
  set denominator(v) {
    this._s(":d", v);
  }
}
class SzRatio extends RatioType {
  static _Q = "am3d:sz";
}
class SyRatio extends RatioType {
  static _Q = "am3d:sy";
}
class SxRatio extends RatioType {
  static _Q = "am3d:sx";
}
class Model3D extends OxmlCompositeElement {
  static _Q = "am3d:model3d";
  static _A = ["r:embed", "r:link"];
  /** Embedded Picture Reference. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
  /** Linked Picture Reference. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns Model3DCamera. */
  get model3DCamera() {
    return this._f(Model3DCamera);
  }
  /** Returns Model3DTransform. */
  get model3DTransform() {
    return this._f(Model3DTransform);
  }
  /** Optional source attribution URL describes from whence the 3D model came.. */
  get pictureAttributionSourceURL() {
    return this._f(PictureAttributionSourceURL);
  }
  /** Returns Model3DRaster. */
  get model3DRaster() {
    return this._f(Model3DRaster);
  }
  /** Future Model3D extensions. */
  get model3DExtensionList() {
    return this._f(Model3DExtensionList);
  }
}
function initOffice2019DrawingModel3DNamespace() {
  DirectionalLight._C = {
    "am3d:clr": ColorType,
    "am3d:illuminance": IlluminancePositiveRatio,
    "am3d:pos": PosPoint3D,
    "am3d:lookAt": LookAtPoint3D,
    "am3d:extLst": OfficeArtExtensionList
  };
  DirectionalLight._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":angularRad": new OxmlAttr(":angularRad", OxmlType.Int32Value)
  };
  SpotLight._C = {
    "am3d:clr": ColorType,
    "am3d:intensity": IntensityPositiveRatio,
    "am3d:pos": PosPoint3D,
    "am3d:lookAt": LookAtPoint3D,
    "am3d:extLst": OfficeArtExtensionList
  };
  SpotLight._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":rad": new OxmlAttr(":rad", OxmlType.Int64Value),
    ":spotAng": new OxmlAttr(":spotAng", OxmlType.Int32Value)
  };
  PointLight._C = {
    "am3d:clr": ColorType,
    "am3d:intensity": IntensityPositiveRatio,
    "am3d:pos": PosPoint3D,
    "am3d:extLst": OfficeArtExtensionList
  };
  PointLight._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":rad": new OxmlAttr(":rad", OxmlType.Int64Value)
  };
  AmbientLight._C = {
    "am3d:clr": ColorType,
    "am3d:illuminance": IlluminancePositiveRatio,
    "am3d:extLst": OfficeArtExtensionList
  };
  AmbientLight._D = {
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue)
  };
  WindowViewport._C = {
    "am3d:extLst": OfficeArtExtensionList
  };
  ObjectViewport._C = {
    "am3d:extLst": OfficeArtExtensionList
  };
  ObjectViewport._D = {
    ":viewportSz": new OxmlAttr(":viewportSz", OxmlType.Int64Value)
  };
  Model3DExtensionList._C = {
    "am3d:ext": Model3DExtension
  };
  Model3DRaster._C = {
    "am3d:blip": Blip
  };
  Model3DRaster._D = {
    ":rName": new OxmlAttr(":rName", OxmlType.StringValue),
    ":rVer": new OxmlAttr(":rVer", OxmlType.StringValue)
  };
  PictureAttributionSourceURL._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Model3DTransform._C = {
    "am3d:meterPerModelUnit": MeterPerModelUnitPositiveRatio,
    "am3d:preTrans": PreTransVector3D,
    "am3d:scale": Scale3D,
    "am3d:rot": Rotate3D,
    "am3d:postTrans": PostTransVector3D,
    "am3d:extLst": OfficeArtExtensionList
  };
  Model3DCamera._C = {
    "am3d:pos": PosPoint3D,
    "am3d:up": UpVector3D,
    "am3d:lookAt": LookAtPoint3D,
    "am3d:orthographic": OrthographicProjection,
    "am3d:perspective": PerspectiveProjection,
    "am3d:extLst": OfficeArtExtensionList
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
  Model3DExtension._C = {
    "a3danim:embedAnim": A3danimEmbeddedAnimation,
    "a3danim:posterFrame": A3danimPosterFrame
  };
  Model3DExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ColorType._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  Blip._C = {
    "a:alphaBiLevel": AAlphaBiLevel,
    "a:alphaCeiling": AAlphaCeiling,
    "a:alphaFloor": AAlphaFloor,
    "a:alphaInv": AAlphaInverse,
    "a:alphaMod": AAlphaModulationEffect,
    "a:alphaModFix": AAlphaModulationFixed,
    "a:alphaRepl": AAlphaReplace,
    "a:biLevel": ABiLevel,
    "a:blur": ABlur,
    "a:clrChange": AColorChange,
    "a:clrRepl": AColorReplacement,
    "a:duotone": ADuotone,
    "a:fillOverlay": AFillOverlay,
    "a:grayscl": AGrayscale,
    "a:hsl": AHsl,
    "a:lum": ALuminanceEffect,
    "a:tint": ATintEffect,
    "a:extLst": ABlipExtensionList
  };
  Blip._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue),
    ":cstate": new OxmlAttr(":cstate", OxmlType.EnumValue, BlipCompressionValuesArray)
  };
  PerspectiveProjection._C = {
    "am3d:extLst": OfficeArtExtensionList
  };
  PerspectiveProjection._D = {
    ":fov": new OxmlAttr(":fov", OxmlType.Int32Value)
  };
  OrthographicProjection._C = {
    "am3d:sz": SzPositiveRatio,
    "am3d:extLst": OfficeArtExtensionList
  };
  OpenXmlPoint3DElement._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value),
    ":z": new OxmlAttr(":z", OxmlType.Int64Value)
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  Rotate3D._D = {
    ":ax": new OxmlAttr(":ax", OxmlType.Int32Value),
    ":ay": new OxmlAttr(":ay", OxmlType.Int32Value),
    ":az": new OxmlAttr(":az", OxmlType.Int32Value)
  };
  Scale3D._C = {
    "am3d:sx": SxRatio,
    "am3d:sy": SyRatio,
    "am3d:sz": SzRatio
  };
  Vector3DType._D = {
    ":dx": new OxmlAttr(":dx", OxmlType.Int64Value),
    ":dy": new OxmlAttr(":dy", OxmlType.Int64Value),
    ":dz": new OxmlAttr(":dz", OxmlType.Int64Value)
  };
  OpenXmlPositiveRatioElement._D = {
    ":n": new OxmlAttr(":n", OxmlType.UInt64Value),
    ":d": new OxmlAttr(":d", OxmlType.UInt64Value)
  };
  RatioType._D = {
    ":n": new OxmlAttr(":n", OxmlType.Int32Value),
    ":d": new OxmlAttr(":d", OxmlType.Int32Value)
  };
  Model3D._C = {
    "am3d:spPr": ShapeProperties,
    "am3d:camera": Model3DCamera,
    "am3d:trans": Model3DTransform,
    "am3d:attrSrcUrl": PictureAttributionSourceURL,
    "am3d:raster": Model3DRaster,
    "am3d:extLst": Model3DExtensionList,
    "am3d:objViewport": ObjectViewport,
    "am3d:winViewport": WindowViewport,
    "am3d:ambientLight": AmbientLight,
    "am3d:ptLight": PointLight,
    "am3d:spotLight": SpotLight,
    "am3d:dirLight": DirectionalLight,
    "am3d:unkLight": UnknownLight
  };
  Model3D._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  return {
    prefix: "am3d",
    xmlns: "http://schemas.microsoft.com/office/drawing/2017/model3d"
  };
}
export {
  AmbientLight,
  Blip,
  ColorType,
  DirectionalLight,
  IlluminancePositiveRatio,
  IntensityPositiveRatio,
  LookAtPoint3D,
  MeterPerModelUnitPositiveRatio,
  Model3D,
  Model3DCamera,
  Model3DExtension,
  Model3DExtensionList,
  Model3DRaster,
  Model3DTransform,
  ObjectViewport,
  OfficeArtExtensionList,
  OpenXmlPoint3DElement,
  OpenXmlPositiveRatioElement,
  OrthographicProjection,
  PerspectiveProjection,
  PictureAttributionSourceURL,
  PointLight,
  PosPoint3D,
  PostTransVector3D,
  PreTransVector3D,
  RatioType,
  Rotate3D,
  Scale3D,
  ShapeProperties,
  SpotLight,
  SxRatio,
  SyRatio,
  SzPositiveRatio,
  SzRatio,
  UnknownLight,
  UpVector3D,
  Vector3DType,
  WindowViewport,
  initOffice2019DrawingModel3DNamespace
};
