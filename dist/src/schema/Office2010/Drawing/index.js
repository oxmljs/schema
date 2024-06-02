import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { PresetMaterialTypeValuesArray } from "../../Drawing";
import { LineCapValuesArray } from "../../Drawing";
import { CompoundLineValuesArray } from "../../Drawing";
import { PenAlignmentValuesArray } from "../../Drawing";
import { BlackWhiteModeValuesArray } from "../../Drawing";
import { Offset as AOffset } from "../../Drawing";
import { Extents as AExtents } from "../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { Extension as AExtension } from "../../Drawing";
import { BevelTop as ABevelTop } from "../../Drawing";
import { BevelBottom as ABevelBottom } from "../../Drawing";
import { ExtrusionColor as AExtrusionColor } from "../../Drawing";
import { ContourColor as AContourColor } from "../../Drawing";
import { ExtensionList as AExtensionList } from "../../Drawing";
import { Camera as ACamera } from "../../Drawing";
import { LightRig as ALightRig } from "../../Drawing";
import { Backdrop as ABackdrop } from "../../Drawing";
import { EffectList as AEffectList } from "../../Drawing";
import { EffectDag as AEffectDag } from "../../Drawing";
import { NoFill as ANoFill } from "../../Drawing";
import { SolidFill as ASolidFill } from "../../Drawing";
import { GradientFill as AGradientFill } from "../../Drawing";
import { PatternFill as APatternFill } from "../../Drawing";
import { PresetDash as APresetDash } from "../../Drawing";
import { CustomDash as ACustomDash } from "../../Drawing";
import { Round as ARound } from "../../Drawing";
import { LineJoinBevel as ALineJoinBevel } from "../../Drawing";
import { Miter as AMiter } from "../../Drawing";
import { HeadEnd as AHeadEnd } from "../../Drawing";
import { TailEnd as ATailEnd } from "../../Drawing";
import { LinePropertiesExtensionList as ALinePropertiesExtensionList } from "../../Drawing";
import { BlipFill as ABlipFill } from "../../Drawing";
import { GroupFill as AGroupFill } from "../../Drawing";
class Transform2D extends OxmlCompositeElement {
  static _Q = "a14:xfrm";
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
class NonVisualContentPartProperties extends OxmlCompositeElement {
  static _Q = "a14:nvContentPartPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualInkContentPartProperties. */
  get nonVisualInkContentPartProperties() {
    return this._f(NonVisualInkContentPartProperties);
  }
}
class NonVisualInkContentPartProperties extends OxmlCompositeElement {
  static _Q = "a14:cNvContentPartPr";
  static _A = [":isComment"];
  /** isComment. Serialized as `:isComment` */
  get isComment() {
    return this._g(":isComment");
  }
  set isComment(v) {
    this._s(":isComment", v);
  }
  /** Returns ContentPartLocks. */
  get contentPartLocks() {
    return this._f(ContentPartLocks);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "a14:cNvPr";
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
class ImageLayer extends OxmlCompositeElement {
  static _Q = "a14:imgLayer";
  static _A = ["r:embed"];
  /** embed. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
}
class ImageEffect extends OxmlCompositeElement {
  static _Q = "a14:imgEffect";
  static _A = [":visible"];
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** Returns ArtisticBlur. */
  get artisticBlur() {
    return this._f(ArtisticBlur);
  }
  /** Returns ArtisticCement. */
  get artisticCement() {
    return this._f(ArtisticCement);
  }
  /** Returns ArtisticChalkSketch. */
  get artisticChalkSketch() {
    return this._f(ArtisticChalkSketch);
  }
  /** Returns ArtisticCrisscrossEtching. */
  get artisticCrisscrossEtching() {
    return this._f(ArtisticCrisscrossEtching);
  }
  /** Returns ArtisticCutout. */
  get artisticCutout() {
    return this._f(ArtisticCutout);
  }
  /** Returns ArtisticFilmGrain. */
  get artisticFilmGrain() {
    return this._f(ArtisticFilmGrain);
  }
  /** Returns ArtisticGlass. */
  get artisticGlass() {
    return this._f(ArtisticGlass);
  }
  /** Returns ArtisticGlowDiffused. */
  get artisticGlowDiffused() {
    return this._f(ArtisticGlowDiffused);
  }
  /** Returns ArtisticGlowEdges. */
  get artisticGlowEdges() {
    return this._f(ArtisticGlowEdges);
  }
  /** Returns ArtisticLightScreen. */
  get artisticLightScreen() {
    return this._f(ArtisticLightScreen);
  }
  /** Returns ArtisticLineDrawing. */
  get artisticLineDrawing() {
    return this._f(ArtisticLineDrawing);
  }
  /** Returns ArtisticMarker. */
  get artisticMarker() {
    return this._f(ArtisticMarker);
  }
  /** Returns ArtisticMosaicBubbles. */
  get artisticMosaicBubbles() {
    return this._f(ArtisticMosaicBubbles);
  }
  /** Returns ArtisticPaintStrokes. */
  get artisticPaintStrokes() {
    return this._f(ArtisticPaintStrokes);
  }
  /** Returns ArtisticPaintBrush. */
  get artisticPaintBrush() {
    return this._f(ArtisticPaintBrush);
  }
  /** Returns ArtisticPastelsSmooth. */
  get artisticPastelsSmooth() {
    return this._f(ArtisticPastelsSmooth);
  }
  /** Returns ArtisticPencilGrayscale. */
  get artisticPencilGrayscale() {
    return this._f(ArtisticPencilGrayscale);
  }
  /** Returns ArtisticPencilSketch. */
  get artisticPencilSketch() {
    return this._f(ArtisticPencilSketch);
  }
  /** Returns ArtisticPhotocopy. */
  get artisticPhotocopy() {
    return this._f(ArtisticPhotocopy);
  }
  /** Returns ArtisticPlasticWrap. */
  get artisticPlasticWrap() {
    return this._f(ArtisticPlasticWrap);
  }
  /** Returns ArtisticTexturizer. */
  get artisticTexturizer() {
    return this._f(ArtisticTexturizer);
  }
  /** Returns ArtisticWatercolorSponge. */
  get artisticWatercolorSponge() {
    return this._f(ArtisticWatercolorSponge);
  }
  /** Returns BackgroundRemoval. */
  get backgroundRemoval() {
    return this._f(BackgroundRemoval);
  }
  /** Returns BrightnessContrast. */
  get brightnessContrast() {
    return this._f(BrightnessContrast);
  }
  /** Returns ColorTemperature. */
  get colorTemperature() {
    return this._f(ColorTemperature);
  }
  /** Returns Saturation. */
  get saturation() {
    return this._f(Saturation);
  }
  /** Returns SharpenSoften. */
  get sharpenSoften() {
    return this._f(SharpenSoften);
  }
}
class SharpenSoften extends OxmlLeafElement {
  static _Q = "a14:sharpenSoften";
  static _A = [":amount"];
  /** amount. Serialized as `:amount` */
  get amount() {
    return this._g(":amount");
  }
  set amount(v) {
    this._s(":amount", v);
  }
}
class Saturation extends OxmlLeafElement {
  static _Q = "a14:saturation";
  static _A = [":sat"];
  /** sat. Serialized as `:sat` */
  get saturationAmount() {
    return this._g(":sat");
  }
  set saturationAmount(v) {
    this._s(":sat", v);
  }
}
class ColorTemperature extends OxmlLeafElement {
  static _Q = "a14:colorTemperature";
  static _A = [":colorTemp"];
  /** colorTemp. Serialized as `:colorTemp` */
  get colorTemperatureValue() {
    return this._g(":colorTemp");
  }
  set colorTemperatureValue(v) {
    this._s(":colorTemp", v);
  }
}
class BrightnessContrast extends OxmlLeafElement {
  static _Q = "a14:brightnessContrast";
  static _A = [":bright", ":contrast"];
  /** bright. Serialized as `:bright` */
  get bright() {
    return this._g(":bright");
  }
  set bright(v) {
    this._s(":bright", v);
  }
  /** contrast. Serialized as `:contrast` */
  get contrast() {
    return this._g(":contrast");
  }
  set contrast(v) {
    this._s(":contrast", v);
  }
}
class BackgroundRemoval extends OxmlCompositeElement {
  static _Q = "a14:backgroundRemoval";
  static _A = [":t", ":b", ":l", ":r"];
  /** t. Serialized as `:t` */
  get marqueeTop() {
    return this._g(":t");
  }
  set marqueeTop(v) {
    this._s(":t", v);
  }
  /** b. Serialized as `:b` */
  get marqueeBottom() {
    return this._g(":b");
  }
  set marqueeBottom(v) {
    this._s(":b", v);
  }
  /** l. Serialized as `:l` */
  get marqueeLeft() {
    return this._g(":l");
  }
  set marqueeLeft(v) {
    this._s(":l", v);
  }
  /** r. Serialized as `:r` */
  get marqueeRight() {
    return this._g(":r");
  }
  set marqueeRight(v) {
    this._s(":r", v);
  }
}
class ArtisticWatercolorSponge extends OxmlLeafElement {
  static _Q = "a14:artisticWatercolorSponge";
  static _A = [":trans", ":brushSize"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** brushSize. Serialized as `:brushSize` */
  get brushSize() {
    return this._g(":brushSize");
  }
  set brushSize(v) {
    this._s(":brushSize", v);
  }
}
class ArtisticTexturizer extends OxmlLeafElement {
  static _Q = "a14:artisticTexturizer";
  static _A = [":trans", ":scaling"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** scaling. Serialized as `:scaling` */
  get scaling() {
    return this._g(":scaling");
  }
  set scaling(v) {
    this._s(":scaling", v);
  }
}
class ArtisticPlasticWrap extends OxmlLeafElement {
  static _Q = "a14:artisticPlasticWrap";
  static _A = [":trans", ":smoothness"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** smoothness. Serialized as `:smoothness` */
  get smoothness() {
    return this._g(":smoothness");
  }
  set smoothness(v) {
    this._s(":smoothness", v);
  }
}
class ArtisticPhotocopy extends OxmlLeafElement {
  static _Q = "a14:artisticPhotocopy";
  static _A = [":trans", ":detail"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** detail. Serialized as `:detail` */
  get detail() {
    return this._g(":detail");
  }
  set detail(v) {
    this._s(":detail", v);
  }
}
class ArtisticPencilSketch extends OxmlLeafElement {
  static _Q = "a14:artisticPencilSketch";
  static _A = [":trans", ":pressure"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** pressure. Serialized as `:pressure` */
  get pressure() {
    return this._g(":pressure");
  }
  set pressure(v) {
    this._s(":pressure", v);
  }
}
class ArtisticPencilGrayscale extends OxmlLeafElement {
  static _Q = "a14:artisticPencilGrayscale";
  static _A = [":trans", ":pencilSize"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** pencilSize. Serialized as `:pencilSize` */
  get brushSize() {
    return this._g(":pencilSize");
  }
  set brushSize(v) {
    this._s(":pencilSize", v);
  }
}
class ArtisticPastelsSmooth extends OxmlLeafElement {
  static _Q = "a14:artisticPastelsSmooth";
  static _A = [":trans", ":scaling"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** scaling. Serialized as `:scaling` */
  get brushSize() {
    return this._g(":scaling");
  }
  set brushSize(v) {
    this._s(":scaling", v);
  }
}
class ArtisticPaintBrush extends OxmlLeafElement {
  static _Q = "a14:artisticPaintBrush";
  static _A = [":trans", ":brushSize"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** brushSize. Serialized as `:brushSize` */
  get brushSize() {
    return this._g(":brushSize");
  }
  set brushSize(v) {
    this._s(":brushSize", v);
  }
}
class ArtisticPaintStrokes extends OxmlLeafElement {
  static _Q = "a14:artisticPaintStrokes";
  static _A = [":trans", ":intensity"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** intensity. Serialized as `:intensity` */
  get intensity() {
    return this._g(":intensity");
  }
  set intensity(v) {
    this._s(":intensity", v);
  }
}
class ArtisticMosaicBubbles extends OxmlLeafElement {
  static _Q = "a14:artisticMosiaicBubbles";
  static _A = [":trans", ":pressure"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** pressure. Serialized as `:pressure` */
  get pressure() {
    return this._g(":pressure");
  }
  set pressure(v) {
    this._s(":pressure", v);
  }
}
class ArtisticMarker extends OxmlLeafElement {
  static _Q = "a14:artisticMarker";
  static _A = [":trans", ":size"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
}
class ArtisticLineDrawing extends OxmlLeafElement {
  static _Q = "a14:artisticLineDrawing";
  static _A = [":trans", ":pencilSize"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** pencilSize. Serialized as `:pencilSize` */
  get pencilSize() {
    return this._g(":pencilSize");
  }
  set pencilSize(v) {
    this._s(":pencilSize", v);
  }
}
class ArtisticLightScreen extends OxmlLeafElement {
  static _Q = "a14:artisticLightScreen";
  static _A = [":trans", ":gridSize"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** gridSize. Serialized as `:gridSize` */
  get gridSize() {
    return this._g(":gridSize");
  }
  set gridSize(v) {
    this._s(":gridSize", v);
  }
}
class ArtisticGlowEdges extends OxmlLeafElement {
  static _Q = "a14:artisticGlowEdges";
  static _A = [":trans", ":smoothness"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** smoothness. Serialized as `:smoothness` */
  get smoothness() {
    return this._g(":smoothness");
  }
  set smoothness(v) {
    this._s(":smoothness", v);
  }
}
class ArtisticGlowDiffused extends OxmlLeafElement {
  static _Q = "a14:artisticGlowDiffused";
  static _A = [":trans", ":intensity"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** intensity. Serialized as `:intensity` */
  get intensity() {
    return this._g(":intensity");
  }
  set intensity(v) {
    this._s(":intensity", v);
  }
}
class ArtisticGlass extends OxmlLeafElement {
  static _Q = "a14:artisticGlass";
  static _A = [":trans", ":scaling"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** scaling. Serialized as `:scaling` */
  get scaling() {
    return this._g(":scaling");
  }
  set scaling(v) {
    this._s(":scaling", v);
  }
}
class ArtisticFilmGrain extends OxmlLeafElement {
  static _Q = "a14:artisticFilmGrain";
  static _A = [":trans", ":grainSize"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** grainSize. Serialized as `:grainSize` */
  get grainSize() {
    return this._g(":grainSize");
  }
  set grainSize(v) {
    this._s(":grainSize", v);
  }
}
class ArtisticCutout extends OxmlLeafElement {
  static _Q = "a14:artisticCutout";
  static _A = [":trans", ":numberOfShades"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** numberOfShades. Serialized as `:numberOfShades` */
  get numberOfShades() {
    return this._g(":numberOfShades");
  }
  set numberOfShades(v) {
    this._s(":numberOfShades", v);
  }
}
class ArtisticCrisscrossEtching extends OxmlLeafElement {
  static _Q = "a14:artisticCrisscrossEtching";
  static _A = [":trans", ":pressure"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** pressure. Serialized as `:pressure` */
  get pressure() {
    return this._g(":pressure");
  }
  set pressure(v) {
    this._s(":pressure", v);
  }
}
class ArtisticChalkSketch extends OxmlLeafElement {
  static _Q = "a14:artisticChalkSketch";
  static _A = [":trans", ":pressure"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** pressure. Serialized as `:pressure` */
  get pressure() {
    return this._g(":pressure");
  }
  set pressure(v) {
    this._s(":pressure", v);
  }
}
class ArtisticCement extends OxmlLeafElement {
  static _Q = "a14:artisticCement";
  static _A = [":trans", ":crackSpacing"];
  /** trans. Serialized as `:trans` */
  get transparancy() {
    return this._g(":trans");
  }
  set transparancy(v) {
    this._s(":trans", v);
  }
  /** crackSpacing. Serialized as `:crackSpacing` */
  get crackSpacing() {
    return this._g(":crackSpacing");
  }
  set crackSpacing(v) {
    this._s(":crackSpacing", v);
  }
}
class ArtisticBlur extends OxmlLeafElement {
  static _Q = "a14:artisticBlur";
  static _A = [":radius"];
  /** radius. Serialized as `:radius` */
  get radius() {
    return this._g(":radius");
  }
  set radius(v) {
    this._s(":radius", v);
  }
}
class BackgroundMark extends OxmlLeafElement {
  static _Q = "a14:backgroundMark";
  static _A = [":x1", ":y1", ":x2", ":y2"];
  /** x1. Serialized as `:x1` */
  get firstXCoordinate() {
    return this._g(":x1");
  }
  set firstXCoordinate(v) {
    this._s(":x1", v);
  }
  /** y1. Serialized as `:y1` */
  get firstYCoordinate() {
    return this._g(":y1");
  }
  set firstYCoordinate(v) {
    this._s(":y1", v);
  }
  /** x2. Serialized as `:x2` */
  get secondXCoordinate() {
    return this._g(":x2");
  }
  set secondXCoordinate(v) {
    this._s(":x2", v);
  }
  /** y2. Serialized as `:y2` */
  get secondYCoordinate() {
    return this._g(":y2");
  }
  set secondYCoordinate(v) {
    this._s(":y2", v);
  }
}
class ForegroundMark extends OxmlLeafElement {
  static _Q = "a14:foregroundMark";
  static _A = [":x1", ":y1", ":x2", ":y2"];
  /** x1. Serialized as `:x1` */
  get firstXCoordinate() {
    return this._g(":x1");
  }
  set firstXCoordinate(v) {
    this._s(":x1", v);
  }
  /** y1. Serialized as `:y1` */
  get firstYCoordinate() {
    return this._g(":y1");
  }
  set firstYCoordinate(v) {
    this._s(":y1", v);
  }
  /** x2. Serialized as `:x2` */
  get secondXCoordinate() {
    return this._g(":x2");
  }
  set secondXCoordinate(v) {
    this._s(":x2", v);
  }
  /** y2. Serialized as `:y2` */
  get secondYCoordinate() {
    return this._g(":y2");
  }
  set secondYCoordinate(v) {
    this._s(":y2", v);
  }
}
class ContentPartLocks extends OxmlCompositeElement {
  static _Q = "a14:cpLocks";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType"];
  /** Disallow Shape Grouping. Serialized as `:noGrp` */
  get noGrouping() {
    return this._g(":noGrp");
  }
  set noGrouping(v) {
    this._s(":noGrp", v);
  }
  /** Disallow Shape Selection. Serialized as `:noSelect` */
  get noSelection() {
    return this._g(":noSelect");
  }
  set noSelection(v) {
    this._s(":noSelect", v);
  }
  /** Disallow Shape Rotation. Serialized as `:noRot` */
  get noRotation() {
    return this._g(":noRot");
  }
  set noRotation(v) {
    this._s(":noRot", v);
  }
  /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** Disallow Shape Movement. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** Disallow Shape Resize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "a14:extLst";
}
class TextMath extends OxmlLeafElement {
  static _Q = "a14:m";
}
class UseLocalDpi extends OxmlLeafElement {
  static _Q = "a14:useLocalDpi";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ImageProperties extends OxmlCompositeElement {
  static _Q = "a14:imgProps";
  /** Returns ImageLayer. */
  get imageLayer() {
    return this._f(ImageLayer);
  }
}
class HiddenShape3D extends OxmlCompositeElement {
  static _Q = "a14:hiddenSp3d";
  static _A = [":z", ":extrusionH", ":contourW", ":prstMaterial"];
  /** Shape Depth. Serialized as `:z` */
  get z() {
    return this._g(":z");
  }
  set z(v) {
    this._s(":z", v);
  }
  /** Extrusion Height. Serialized as `:extrusionH` */
  get extrusionHeight() {
    return this._g(":extrusionH");
  }
  set extrusionHeight(v) {
    this._s(":extrusionH", v);
  }
  /** Contour Width. Serialized as `:contourW` */
  get contourWidth() {
    return this._g(":contourW");
  }
  set contourWidth(v) {
    this._s(":contourW", v);
  }
  /** Preset Material Type. Serialized as `:prstMaterial` */
  get presetMaterial() {
    return this._g(":prstMaterial");
  }
  set presetMaterial(v) {
    this._s(":prstMaterial", v);
  }
  /** Top Bevel. */
  get bevelTop() {
    return this._f(ABevelTop);
  }
  /** Bottom Bevel. */
  get bevelBottom() {
    return this._f(ABevelBottom);
  }
  /** Extrusion Color. */
  get extrusionColor() {
    return this._f(AExtrusionColor);
  }
  /** Contour Color. */
  get contourColor() {
    return this._f(AContourColor);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class HiddenScene3D extends OxmlCompositeElement {
  static _Q = "a14:hiddenScene3d";
  /** Camera. */
  get camera() {
    return this._f(ACamera);
  }
  /** Light Rig. */
  get lightRig() {
    return this._f(ALightRig);
  }
  /** Backdrop Plane. */
  get backdrop() {
    return this._f(ABackdrop);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class HiddenEffectsProperties extends OxmlCompositeElement {
  static _Q = "a14:hiddenEffects";
  /** Effect Container. */
  get effectList() {
    return this._f(AEffectList);
  }
  /** Effect Container. */
  get effectDag() {
    return this._f(AEffectDag);
  }
}
class HiddenLineProperties extends OxmlCompositeElement {
  static _Q = "a14:hiddenLine";
  static _A = [":w", ":cap", ":cmpd", ":algn"];
  /** line width. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** line cap. Serialized as `:cap` */
  get capType() {
    return this._g(":cap");
  }
  set capType(v) {
    this._s(":cap", v);
  }
  /** compound line type. Serialized as `:cmpd` */
  get compoundLineType() {
    return this._g(":cmpd");
  }
  set compoundLineType(v) {
    this._s(":cmpd", v);
  }
  /** pen alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
}
class HiddenFillProperties extends OxmlCompositeElement {
  static _Q = "a14:hiddenFill";
  /** Returns ANoFill. */
  get noFill() {
    return this._f(ANoFill);
  }
  /** Returns ASolidFill. */
  get solidFill() {
    return this._f(ASolidFill);
  }
  /** Returns AGradientFill. */
  get gradientFill() {
    return this._f(AGradientFill);
  }
  /** Returns ABlipFill. */
  get blipFill() {
    return this._f(ABlipFill);
  }
  /** Pattern Fill. */
  get patternFill() {
    return this._f(APatternFill);
  }
  /** Group Fill. */
  get groupFill() {
    return this._f(AGroupFill);
  }
}
class ShadowObscured extends OxmlLeafElement {
  static _Q = "a14:shadowObscured";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class GvmlContentPart extends OxmlCompositeElement {
  static _Q = "a14:contentPart";
  static _A = [":bwMode", "r:id"];
  /** bwMode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** id. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Returns NonVisualContentPartProperties. */
  get nonVisualContentPartProperties() {
    return this._f(NonVisualContentPartProperties);
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
class IsCanvas extends OxmlLeafElement {
  static _Q = "a14:isCanvas";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class CompatExtension extends OxmlLeafElement {
  static _Q = "a14:compatExt";
  static _A = [":spid"];
  /** spid. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
}
class CameraTool extends OxmlLeafElement {
  static _Q = "a14:cameraTool";
  static _A = [":cellRange", ":spid"];
  /** cellRange. Serialized as `:cellRange` */
  get cellRange() {
    return this._g(":cellRange");
  }
  set cellRange(v) {
    this._s(":cellRange", v);
  }
  /** spid. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
}
function initOffice2010DrawingNamespace() {
  Transform2D._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform2D._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  NonVisualContentPartProperties._C = {
    "a14:cNvPr": NonVisualDrawingProperties,
    "a14:cNvContentPartPr": NonVisualInkContentPartProperties
  };
  NonVisualInkContentPartProperties._C = {
    "a14:cpLocks": ContentPartLocks,
    "a14:extLst": OfficeArtExtensionList
  };
  NonVisualInkContentPartProperties._D = {
    ":isComment": new OxmlAttr(":isComment", OxmlType.BooleanValue)
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
  ImageLayer._C = {
    "a14:imgEffect": ImageEffect
  };
  ImageLayer._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue)
  };
  ImageEffect._C = {
    "a14:artisticBlur": ArtisticBlur,
    "a14:artisticCement": ArtisticCement,
    "a14:artisticChalkSketch": ArtisticChalkSketch,
    "a14:artisticCrisscrossEtching": ArtisticCrisscrossEtching,
    "a14:artisticCutout": ArtisticCutout,
    "a14:artisticFilmGrain": ArtisticFilmGrain,
    "a14:artisticGlass": ArtisticGlass,
    "a14:artisticGlowDiffused": ArtisticGlowDiffused,
    "a14:artisticGlowEdges": ArtisticGlowEdges,
    "a14:artisticLightScreen": ArtisticLightScreen,
    "a14:artisticLineDrawing": ArtisticLineDrawing,
    "a14:artisticMarker": ArtisticMarker,
    "a14:artisticMosiaicBubbles": ArtisticMosaicBubbles,
    "a14:artisticPaintStrokes": ArtisticPaintStrokes,
    "a14:artisticPaintBrush": ArtisticPaintBrush,
    "a14:artisticPastelsSmooth": ArtisticPastelsSmooth,
    "a14:artisticPencilGrayscale": ArtisticPencilGrayscale,
    "a14:artisticPencilSketch": ArtisticPencilSketch,
    "a14:artisticPhotocopy": ArtisticPhotocopy,
    "a14:artisticPlasticWrap": ArtisticPlasticWrap,
    "a14:artisticTexturizer": ArtisticTexturizer,
    "a14:artisticWatercolorSponge": ArtisticWatercolorSponge,
    "a14:backgroundRemoval": BackgroundRemoval,
    "a14:brightnessContrast": BrightnessContrast,
    "a14:colorTemperature": ColorTemperature,
    "a14:saturation": Saturation,
    "a14:sharpenSoften": SharpenSoften
  };
  ImageEffect._D = {
    ":visible": new OxmlAttr(":visible", OxmlType.BooleanValue)
  };
  SharpenSoften._D = {
    ":amount": new OxmlAttr(":amount", OxmlType.Int32Value)
  };
  Saturation._D = {
    ":sat": new OxmlAttr(":sat", OxmlType.Int32Value)
  };
  ColorTemperature._D = {
    ":colorTemp": new OxmlAttr(":colorTemp", OxmlType.Int32Value)
  };
  BrightnessContrast._D = {
    ":bright": new OxmlAttr(":bright", OxmlType.Int32Value),
    ":contrast": new OxmlAttr(":contrast", OxmlType.Int32Value)
  };
  BackgroundRemoval._C = {
    "a14:foregroundMark": ForegroundMark,
    "a14:backgroundMark": BackgroundMark
  };
  BackgroundRemoval._D = {
    ":t": new OxmlAttr(":t", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.Int32Value),
    ":l": new OxmlAttr(":l", OxmlType.Int32Value),
    ":r": new OxmlAttr(":r", OxmlType.Int32Value)
  };
  ArtisticWatercolorSponge._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":brushSize": new OxmlAttr(":brushSize", OxmlType.Int32Value)
  };
  ArtisticTexturizer._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":scaling": new OxmlAttr(":scaling", OxmlType.Int32Value)
  };
  ArtisticPlasticWrap._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":smoothness": new OxmlAttr(":smoothness", OxmlType.Int32Value)
  };
  ArtisticPhotocopy._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":detail": new OxmlAttr(":detail", OxmlType.Int32Value)
  };
  ArtisticPencilSketch._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":pressure": new OxmlAttr(":pressure", OxmlType.Int32Value)
  };
  ArtisticPencilGrayscale._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":pencilSize": new OxmlAttr(":pencilSize", OxmlType.Int32Value)
  };
  ArtisticPastelsSmooth._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":scaling": new OxmlAttr(":scaling", OxmlType.Int32Value)
  };
  ArtisticPaintBrush._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":brushSize": new OxmlAttr(":brushSize", OxmlType.Int32Value)
  };
  ArtisticPaintStrokes._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":intensity": new OxmlAttr(":intensity", OxmlType.Int32Value)
  };
  ArtisticMosaicBubbles._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":pressure": new OxmlAttr(":pressure", OxmlType.Int32Value)
  };
  ArtisticMarker._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":size": new OxmlAttr(":size", OxmlType.Int32Value)
  };
  ArtisticLineDrawing._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":pencilSize": new OxmlAttr(":pencilSize", OxmlType.Int32Value)
  };
  ArtisticLightScreen._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":gridSize": new OxmlAttr(":gridSize", OxmlType.Int32Value)
  };
  ArtisticGlowEdges._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":smoothness": new OxmlAttr(":smoothness", OxmlType.Int32Value)
  };
  ArtisticGlowDiffused._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":intensity": new OxmlAttr(":intensity", OxmlType.Int32Value)
  };
  ArtisticGlass._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":scaling": new OxmlAttr(":scaling", OxmlType.Int32Value)
  };
  ArtisticFilmGrain._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":grainSize": new OxmlAttr(":grainSize", OxmlType.Int32Value)
  };
  ArtisticCutout._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":numberOfShades": new OxmlAttr(":numberOfShades", OxmlType.Int32Value)
  };
  ArtisticCrisscrossEtching._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":pressure": new OxmlAttr(":pressure", OxmlType.Int32Value)
  };
  ArtisticChalkSketch._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":pressure": new OxmlAttr(":pressure", OxmlType.Int32Value)
  };
  ArtisticCement._D = {
    ":trans": new OxmlAttr(":trans", OxmlType.Int32Value),
    ":crackSpacing": new OxmlAttr(":crackSpacing", OxmlType.Int32Value)
  };
  ArtisticBlur._D = {
    ":radius": new OxmlAttr(":radius", OxmlType.Int32Value)
  };
  BackgroundMark._D = {
    ":x1": new OxmlAttr(":x1", OxmlType.Int32Value),
    ":y1": new OxmlAttr(":y1", OxmlType.Int32Value),
    ":x2": new OxmlAttr(":x2", OxmlType.Int32Value),
    ":y2": new OxmlAttr(":y2", OxmlType.Int32Value)
  };
  ForegroundMark._D = {
    ":x1": new OxmlAttr(":x1", OxmlType.Int32Value),
    ":y1": new OxmlAttr(":y1", OxmlType.Int32Value),
    ":x2": new OxmlAttr(":x2", OxmlType.Int32Value),
    ":y2": new OxmlAttr(":y2", OxmlType.Int32Value)
  };
  ContentPartLocks._C = {
    "a14:extLst": OfficeArtExtensionList
  };
  ContentPartLocks._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue)
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  UseLocalDpi._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  ImageProperties._C = {
    "a14:imgLayer": ImageLayer
  };
  HiddenShape3D._C = {
    "a:bevelT": ABevelTop,
    "a:bevelB": ABevelBottom,
    "a:extrusionClr": AExtrusionColor,
    "a:contourClr": AContourColor,
    "a:extLst": AExtensionList
  };
  HiddenShape3D._D = {
    ":z": new OxmlAttr(":z", OxmlType.Int64Value),
    ":extrusionH": new OxmlAttr(":extrusionH", OxmlType.Int64Value),
    ":contourW": new OxmlAttr(":contourW", OxmlType.Int64Value),
    ":prstMaterial": new OxmlAttr(":prstMaterial", OxmlType.EnumValue, PresetMaterialTypeValuesArray)
  };
  HiddenScene3D._C = {
    "a:camera": ACamera,
    "a:lightRig": ALightRig,
    "a:backdrop": ABackdrop,
    "a:extLst": AExtensionList
  };
  HiddenEffectsProperties._C = {
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag
  };
  HiddenLineProperties._C = {
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:pattFill": APatternFill,
    "a:prstDash": APresetDash,
    "a:custDash": ACustomDash,
    "a:round": ARound,
    "a:bevel": ALineJoinBevel,
    "a:miter": AMiter,
    "a:headEnd": AHeadEnd,
    "a:tailEnd": ATailEnd,
    "a:extLst": ALinePropertiesExtensionList
  };
  HiddenLineProperties._D = {
    ":w": new OxmlAttr(":w", OxmlType.Int32Value),
    ":cap": new OxmlAttr(":cap", OxmlType.EnumValue, LineCapValuesArray),
    ":cmpd": new OxmlAttr(":cmpd", OxmlType.EnumValue, CompoundLineValuesArray),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, PenAlignmentValuesArray)
  };
  HiddenFillProperties._C = {
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill
  };
  ShadowObscured._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  GvmlContentPart._C = {
    "a14:nvContentPartPr": NonVisualContentPartProperties,
    "a14:xfrm": Transform2D,
    "a14:extLst": OfficeArtExtensionList
  };
  GvmlContentPart._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  IsCanvas._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  CompatExtension._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue)
  };
  CameraTool._D = {
    ":cellRange": new OxmlAttr(":cellRange", OxmlType.StringValue),
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue)
  };
  return {
    prefix: "a14",
    xmlns: "http://schemas.microsoft.com/office/drawing/2010/main"
  };
}
export {
  ArtisticBlur,
  ArtisticCement,
  ArtisticChalkSketch,
  ArtisticCrisscrossEtching,
  ArtisticCutout,
  ArtisticFilmGrain,
  ArtisticGlass,
  ArtisticGlowDiffused,
  ArtisticGlowEdges,
  ArtisticLightScreen,
  ArtisticLineDrawing,
  ArtisticMarker,
  ArtisticMosaicBubbles,
  ArtisticPaintBrush,
  ArtisticPaintStrokes,
  ArtisticPastelsSmooth,
  ArtisticPencilGrayscale,
  ArtisticPencilSketch,
  ArtisticPhotocopy,
  ArtisticPlasticWrap,
  ArtisticTexturizer,
  ArtisticWatercolorSponge,
  BackgroundMark,
  BackgroundRemoval,
  BrightnessContrast,
  CameraTool,
  ColorTemperature,
  CompatExtension,
  ContentPartLocks,
  ForegroundMark,
  GvmlContentPart,
  HiddenEffectsProperties,
  HiddenFillProperties,
  HiddenLineProperties,
  HiddenScene3D,
  HiddenShape3D,
  ImageEffect,
  ImageLayer,
  ImageProperties,
  IsCanvas,
  NonVisualContentPartProperties,
  NonVisualDrawingProperties,
  NonVisualInkContentPartProperties,
  OfficeArtExtensionList,
  Saturation,
  ShadowObscured,
  SharpenSoften,
  TextMath,
  Transform2D,
  UseLocalDpi,
  initOffice2010DrawingNamespace
};
