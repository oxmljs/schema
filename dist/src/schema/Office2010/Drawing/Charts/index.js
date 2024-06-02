import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
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
class ShowSketchButton extends OxmlLeafElement {
  static _Q = "c14:showSketchBtn";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BooleanFalseType extends OxmlLeafElement {
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class InSketchMode extends BooleanFalseType {
  static _Q = "c14:inSketchMode";
}
class DropZonesVisible extends BooleanFalseType {
  static _Q = "c14:dropZonesVisible";
}
class DropZoneSeries extends BooleanFalseType {
  static _Q = "c14:dropZoneSeries";
}
class DropZoneData extends BooleanFalseType {
  static _Q = "c14:dropZoneData";
}
class DropZoneCategories extends BooleanFalseType {
  static _Q = "c14:dropZoneCategories";
}
class DropZoneFilter extends BooleanFalseType {
  static _Q = "c14:dropZoneFilter";
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "c14:spPr";
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
class Style extends OxmlLeafElement {
  static _Q = "c14:style";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class InvertSolidFillFormat extends OxmlCompositeElement {
  static _Q = "c14:invertSolidFillFmt";
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
}
class SketchOptions extends OxmlCompositeElement {
  static _Q = "c14:sketchOptions";
  /** Returns InSketchMode. */
  get inSketchMode() {
    return this._f(InSketchMode);
  }
  /** Returns ShowSketchButton. */
  get showSketchButton() {
    return this._f(ShowSketchButton);
  }
}
class PivotOptions extends OxmlCompositeElement {
  static _Q = "c14:pivotOptions";
  /** Returns DropZoneFilter. */
  get dropZoneFilter() {
    return this._f(DropZoneFilter);
  }
  /** Returns DropZoneCategories. */
  get dropZoneCategories() {
    return this._f(DropZoneCategories);
  }
  /** Returns DropZoneData. */
  get dropZoneData() {
    return this._f(DropZoneData);
  }
  /** Returns DropZoneSeries. */
  get dropZoneSeries() {
    return this._f(DropZoneSeries);
  }
  /** Returns DropZonesVisible. */
  get dropZonesVisible() {
    return this._f(DropZonesVisible);
  }
}
function initOffice2010DrawingChartsNamespace() {
  ShowSketchButton._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  BooleanFalseType._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
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
  Style._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  InvertSolidFillFormat._C = {
    "c14:spPr": ShapeProperties
  };
  SketchOptions._C = {
    "c14:inSketchMode": InSketchMode,
    "c14:showSketchBtn": ShowSketchButton
  };
  PivotOptions._C = {
    "c14:dropZoneFilter": DropZoneFilter,
    "c14:dropZoneCategories": DropZoneCategories,
    "c14:dropZoneData": DropZoneData,
    "c14:dropZoneSeries": DropZoneSeries,
    "c14:dropZonesVisible": DropZonesVisible
  };
  return {
    prefix: "c14",
    xmlns: "http://schemas.microsoft.com/office/drawing/2007/8/2/chart"
  };
}
export {
  BooleanFalseType,
  DropZoneCategories,
  DropZoneData,
  DropZoneFilter,
  DropZoneSeries,
  DropZonesVisible,
  InSketchMode,
  InvertSolidFillFormat,
  PivotOptions,
  ShapeProperties,
  ShowSketchButton,
  SketchOptions,
  Style,
  initOffice2010DrawingChartsNamespace
};
