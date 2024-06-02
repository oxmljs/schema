import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { DefaultParagraphProperties as ADefaultParagraphProperties } from "../../../Drawing";
import { Level1ParagraphProperties as ALevel1ParagraphProperties } from "../../../Drawing";
import { Level2ParagraphProperties as ALevel2ParagraphProperties } from "../../../Drawing";
import { Level3ParagraphProperties as ALevel3ParagraphProperties } from "../../../Drawing";
import { Level4ParagraphProperties as ALevel4ParagraphProperties } from "../../../Drawing";
import { Level5ParagraphProperties as ALevel5ParagraphProperties } from "../../../Drawing";
import { Level6ParagraphProperties as ALevel6ParagraphProperties } from "../../../Drawing";
import { Level7ParagraphProperties as ALevel7ParagraphProperties } from "../../../Drawing";
import { Level8ParagraphProperties as ALevel8ParagraphProperties } from "../../../Drawing";
import { Level9ParagraphProperties as ALevel9ParagraphProperties } from "../../../Drawing";
import { ExtensionList as AExtensionList } from "../../../Drawing";
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
class TextListStyleType extends OxmlCompositeElement {
  static _Q = "dgm1612:lstStyle";
  /** Default Paragraph Style. */
  get defaultParagraphProperties() {
    return this._f(ADefaultParagraphProperties);
  }
  /** List Level 1 Text Style. */
  get level1ParagraphProperties() {
    return this._f(ALevel1ParagraphProperties);
  }
  /** List Level 2 Text Style. */
  get level2ParagraphProperties() {
    return this._f(ALevel2ParagraphProperties);
  }
  /** List Level 3 Text Style. */
  get level3ParagraphProperties() {
    return this._f(ALevel3ParagraphProperties);
  }
  /** List Level 4 Text Style. */
  get level4ParagraphProperties() {
    return this._f(ALevel4ParagraphProperties);
  }
  /** List Level 5 Text Style. */
  get level5ParagraphProperties() {
    return this._f(ALevel5ParagraphProperties);
  }
  /** List Level 6 Text Style. */
  get level6ParagraphProperties() {
    return this._f(ALevel6ParagraphProperties);
  }
  /** List Level 7 Text Style. */
  get level7ParagraphProperties() {
    return this._f(ALevel7ParagraphProperties);
  }
  /** List Level 8 Text Style. */
  get level8ParagraphProperties() {
    return this._f(ALevel8ParagraphProperties);
  }
  /** List Level 9 Text Style. */
  get level9ParagraphProperties() {
    return this._f(ALevel9ParagraphProperties);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "dgm1612:spPr";
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
function initOffice2019DrawingDiagram12Namespace() {
  TextListStyleType._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
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
  return {
    prefix: "dgm1612",
    xmlns: "http://schemas.microsoft.com/office/drawing/2016/12/diagram"
  };
}
export {
  ShapeProperties,
  TextListStyleType,
  initOffice2019DrawingDiagram12Namespace
};
