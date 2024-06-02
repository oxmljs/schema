import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { Extension as AExtension } from "../../../Drawing";
import { NonVisualDrawingProperties as WpgNonVisualDrawingProperties } from "../../../Office2010/Word/DrawingGroup";
import { NonVisualGraphicFrameProperties as WpgNonVisualGraphicFrameProperties } from "../../../Office2010/Word/DrawingGroup";
import { Transform2D as WpgTransform2D } from "../../../Office2010/Word/DrawingGroup";
import { Graphic as AGraphic } from "../../../Drawing";
import { OfficeArtExtensionList as WpgOfficeArtExtensionList } from "../../../Office2010/Word/DrawingGroup";
import { Outline as AOutline } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { WordprocessingShape as WpsWordprocessingShape } from "../../../Office2010/Word/DrawingShape";
import { Picture as PicPicture } from "../../../Drawing/Pictures";
import { ContentPart as W14ContentPart } from "../../../Office2010/Word";
import { WordprocessingGroup as WpgWordprocessingGroup } from "../../../Office2010/Word/DrawingGroup";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "wpc:extLst";
}
class GraphicFrameType extends OxmlCompositeElement {
  static _Q = "wpc:graphicFrame";
  /** Returns WpgNonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(WpgNonVisualDrawingProperties);
  }
  /** Returns WpgNonVisualGraphicFrameProperties. */
  get nonVisualGraphicFrameProperties() {
    return this._f(WpgNonVisualGraphicFrameProperties);
  }
  /** Returns WpgTransform2D. */
  get transform2D() {
    return this._f(WpgTransform2D);
  }
  /** Returns AGraphic. */
  get graphic() {
    return this._f(AGraphic);
  }
  /** Returns WpgOfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(WpgOfficeArtExtensionList);
  }
}
class WholeFormatting extends OxmlCompositeElement {
  static _Q = "wpc:whole";
  /** Outline. */
  get outline() {
    return this._f(AOutline);
  }
}
class BackgroundFormatting extends OxmlCompositeElement {
  static _Q = "wpc:bg";
}
class WordprocessingCanvas extends OxmlCompositeElement {
  static _Q = "wpc:wpc";
  /** Returns BackgroundFormatting. */
  get backgroundFormatting() {
    return this._f(BackgroundFormatting);
  }
  /** Returns WholeFormatting. */
  get wholeFormatting() {
    return this._f(WholeFormatting);
  }
}
function initOffice2010WordDrawingCanvasNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  GraphicFrameType._C = {
    "wpg:cNvPr": WpgNonVisualDrawingProperties,
    "wpg:cNvFrPr": WpgNonVisualGraphicFrameProperties,
    "wpg:xfrm": WpgTransform2D,
    "a:graphic": AGraphic,
    "wpg:extLst": WpgOfficeArtExtensionList
  };
  WholeFormatting._C = {
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag
  };
  BackgroundFormatting._C = {
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag
  };
  WordprocessingCanvas._C = {
    "wpc:bg": BackgroundFormatting,
    "wpc:whole": WholeFormatting,
    "wps:wsp": WpsWordprocessingShape,
    "pic:pic": PicPicture,
    "w14:contentPart": W14ContentPart,
    "wpg:wgp": WpgWordprocessingGroup,
    "wpc:graphicFrame": GraphicFrameType,
    "wpc:extLst": OfficeArtExtensionList
  };
  return {
    prefix: "wpc",
    xmlns: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  };
}
export {
  BackgroundFormatting,
  GraphicFrameType,
  OfficeArtExtensionList,
  WholeFormatting,
  WordprocessingCanvas,
  initOffice2010WordDrawingCanvasNamespace
};
