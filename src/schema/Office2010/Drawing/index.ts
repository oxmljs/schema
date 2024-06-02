import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { PresetMaterialTypeValues, PresetMaterialTypeValuesArray } from '../../Drawing';
import { LineCapValues, LineCapValuesArray } from '../../Drawing';
import { CompoundLineValues, CompoundLineValuesArray } from '../../Drawing';
import { PenAlignmentValues, PenAlignmentValuesArray } from '../../Drawing';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';import { Offset as AOffset } from '../../Drawing';
import { Extents as AExtents } from '../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { Extension as AExtension } from '../../Drawing';
import { BevelTop as ABevelTop } from '../../Drawing';
import { BevelBottom as ABevelBottom } from '../../Drawing';
import { ExtrusionColor as AExtrusionColor } from '../../Drawing';
import { ContourColor as AContourColor } from '../../Drawing';
import { ExtensionList as AExtensionList } from '../../Drawing';
import { Camera as ACamera } from '../../Drawing';
import { LightRig as ALightRig } from '../../Drawing';
import { Backdrop as ABackdrop } from '../../Drawing';
import { EffectList as AEffectList } from '../../Drawing';
import { EffectDag as AEffectDag } from '../../Drawing';
import { NoFill as ANoFill } from '../../Drawing';
import { SolidFill as ASolidFill } from '../../Drawing';
import { GradientFill as AGradientFill } from '../../Drawing';
import { PatternFill as APatternFill } from '../../Drawing';
import { PresetDash as APresetDash } from '../../Drawing';
import { CustomDash as ACustomDash } from '../../Drawing';
import { Round as ARound } from '../../Drawing';
import { LineJoinBevel as ALineJoinBevel } from '../../Drawing';
import { Miter as AMiter } from '../../Drawing';
import { HeadEnd as AHeadEnd } from '../../Drawing';
import { TailEnd as ATailEnd } from '../../Drawing';
import { LinePropertiesExtensionList as ALinePropertiesExtensionList } from '../../Drawing';
import { BlipFill as ABlipFill } from '../../Drawing';
import { GroupFill as AGroupFill } from '../../Drawing';


/** Defines the Transform2D Class. Serialized as `a14:xfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'a14:xfrm';
    public static override _A = [':rot',':flipH',':flipV',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): Int32Value | undefined { return this._g(':rot'); }
    public set rotation(v: Int32Value | undefined) { this._s(':rot', v); }
    /** Horizontal Flip. Serialized as `:flipH` */
    public get horizontalFlip(): BooleanValue | undefined { return this._g(':flipH'); }
    public set horizontalFlip(v: BooleanValue | undefined) { this._s(':flipH', v); }
    /** Vertical Flip. Serialized as `:flipV` */
    public get verticalFlip(): BooleanValue | undefined { return this._g(':flipV'); }
    public set verticalFlip(v: BooleanValue | undefined) { this._s(':flipV', v); }
    /** Offset. */
    public get offset(): AOffset | undefined { return this._f(AOffset); }
    /** Extents. */
    public get extents(): AExtents | undefined { return this._f(AExtents); }

}
/** Defines the NonVisualContentPartProperties Class. Serialized as `a14:nvContentPartPr` */
export class NonVisualContentPartProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties> {

    public static override _Q = 'a14:nvContentPartPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualInkContentPartProperties. */
    public get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined { return this._f(NonVisualInkContentPartProperties); }

}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `a14:cNvContentPartPr` */
export class NonVisualInkContentPartProperties extends OxmlCompositeElement<ContentPartLocks | OfficeArtExtensionList> {

    public static override _Q = 'a14:cNvContentPartPr';
    public static override _A = [':isComment',];
    /** isComment. Serialized as `:isComment` */
    public get isComment(): BooleanValue | undefined { return this._g(':isComment'); }
    public set isComment(v: BooleanValue | undefined) { this._s(':isComment', v); }
    /** Returns ContentPartLocks. */
    public get contentPartLocks(): ContentPartLocks | undefined { return this._f(ContentPartLocks); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `a14:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'a14:cNvPr';
    public static override _A = [':id',':name',':descr',':hidden',':title',];
    /** Application defined unique identifier.. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Description of the drawing element.. Serialized as `:descr` */
    public get description(): StringValue | undefined { return this._g(':descr'); }
    public set description(v: StringValue | undefined) { this._s(':descr', v); }
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Hyperlink associated with clicking or selecting the element.. */
    public get hyperlinkOnClick(): AHyperlinkOnClick | undefined { return this._f(AHyperlinkOnClick); }
    /** Hyperlink associated with hovering over the element.. */
    public get hyperlinkOnHover(): AHyperlinkOnHover | undefined { return this._f(AHyperlinkOnHover); }
    /** Future extension. */
    public get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined { return this._f(ANonVisualDrawingPropertiesExtensionList); }

}
/** Defines the ImageLayer Class. Serialized as `a14:imgLayer` */
export class ImageLayer extends OxmlCompositeElement<ImageEffect> {

    public static override _Q = 'a14:imgLayer';
    public static override _A = ['r:embed',];
    /** embed. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }

}
/** Defines the ImageEffect Class. Serialized as `a14:imgEffect` */
export class ImageEffect extends OxmlCompositeElement<ArtisticBlur | ArtisticCement | ArtisticChalkSketch | ArtisticCrisscrossEtching | ArtisticCutout | ArtisticFilmGrain | ArtisticGlass | ArtisticGlowDiffused | ArtisticGlowEdges | ArtisticLightScreen | ArtisticLineDrawing | ArtisticMarker | ArtisticMosaicBubbles | ArtisticPaintStrokes | ArtisticPaintBrush | ArtisticPastelsSmooth | ArtisticPencilGrayscale | ArtisticPencilSketch | ArtisticPhotocopy | ArtisticPlasticWrap | ArtisticTexturizer | ArtisticWatercolorSponge | BackgroundRemoval | BrightnessContrast | ColorTemperature | Saturation | SharpenSoften> {

    public static override _Q = 'a14:imgEffect';
    public static override _A = [':visible',];
    /** visible. Serialized as `:visible` */
    public get visible(): BooleanValue | undefined { return this._g(':visible'); }
    public set visible(v: BooleanValue | undefined) { this._s(':visible', v); }
    /** Returns ArtisticBlur. */
    public get artisticBlur(): ArtisticBlur | undefined { return this._f(ArtisticBlur); }
    /** Returns ArtisticCement. */
    public get artisticCement(): ArtisticCement | undefined { return this._f(ArtisticCement); }
    /** Returns ArtisticChalkSketch. */
    public get artisticChalkSketch(): ArtisticChalkSketch | undefined { return this._f(ArtisticChalkSketch); }
    /** Returns ArtisticCrisscrossEtching. */
    public get artisticCrisscrossEtching(): ArtisticCrisscrossEtching | undefined { return this._f(ArtisticCrisscrossEtching); }
    /** Returns ArtisticCutout. */
    public get artisticCutout(): ArtisticCutout | undefined { return this._f(ArtisticCutout); }
    /** Returns ArtisticFilmGrain. */
    public get artisticFilmGrain(): ArtisticFilmGrain | undefined { return this._f(ArtisticFilmGrain); }
    /** Returns ArtisticGlass. */
    public get artisticGlass(): ArtisticGlass | undefined { return this._f(ArtisticGlass); }
    /** Returns ArtisticGlowDiffused. */
    public get artisticGlowDiffused(): ArtisticGlowDiffused | undefined { return this._f(ArtisticGlowDiffused); }
    /** Returns ArtisticGlowEdges. */
    public get artisticGlowEdges(): ArtisticGlowEdges | undefined { return this._f(ArtisticGlowEdges); }
    /** Returns ArtisticLightScreen. */
    public get artisticLightScreen(): ArtisticLightScreen | undefined { return this._f(ArtisticLightScreen); }
    /** Returns ArtisticLineDrawing. */
    public get artisticLineDrawing(): ArtisticLineDrawing | undefined { return this._f(ArtisticLineDrawing); }
    /** Returns ArtisticMarker. */
    public get artisticMarker(): ArtisticMarker | undefined { return this._f(ArtisticMarker); }
    /** Returns ArtisticMosaicBubbles. */
    public get artisticMosaicBubbles(): ArtisticMosaicBubbles | undefined { return this._f(ArtisticMosaicBubbles); }
    /** Returns ArtisticPaintStrokes. */
    public get artisticPaintStrokes(): ArtisticPaintStrokes | undefined { return this._f(ArtisticPaintStrokes); }
    /** Returns ArtisticPaintBrush. */
    public get artisticPaintBrush(): ArtisticPaintBrush | undefined { return this._f(ArtisticPaintBrush); }
    /** Returns ArtisticPastelsSmooth. */
    public get artisticPastelsSmooth(): ArtisticPastelsSmooth | undefined { return this._f(ArtisticPastelsSmooth); }
    /** Returns ArtisticPencilGrayscale. */
    public get artisticPencilGrayscale(): ArtisticPencilGrayscale | undefined { return this._f(ArtisticPencilGrayscale); }
    /** Returns ArtisticPencilSketch. */
    public get artisticPencilSketch(): ArtisticPencilSketch | undefined { return this._f(ArtisticPencilSketch); }
    /** Returns ArtisticPhotocopy. */
    public get artisticPhotocopy(): ArtisticPhotocopy | undefined { return this._f(ArtisticPhotocopy); }
    /** Returns ArtisticPlasticWrap. */
    public get artisticPlasticWrap(): ArtisticPlasticWrap | undefined { return this._f(ArtisticPlasticWrap); }
    /** Returns ArtisticTexturizer. */
    public get artisticTexturizer(): ArtisticTexturizer | undefined { return this._f(ArtisticTexturizer); }
    /** Returns ArtisticWatercolorSponge. */
    public get artisticWatercolorSponge(): ArtisticWatercolorSponge | undefined { return this._f(ArtisticWatercolorSponge); }
    /** Returns BackgroundRemoval. */
    public get backgroundRemoval(): BackgroundRemoval | undefined { return this._f(BackgroundRemoval); }
    /** Returns BrightnessContrast. */
    public get brightnessContrast(): BrightnessContrast | undefined { return this._f(BrightnessContrast); }
    /** Returns ColorTemperature. */
    public get colorTemperature(): ColorTemperature | undefined { return this._f(ColorTemperature); }
    /** Returns Saturation. */
    public get saturation(): Saturation | undefined { return this._f(Saturation); }
    /** Returns SharpenSoften. */
    public get sharpenSoften(): SharpenSoften | undefined { return this._f(SharpenSoften); }

}
/** Defines the SharpenSoften Class. Serialized as `a14:sharpenSoften` */
export class SharpenSoften extends OxmlLeafElement {

    public static override _Q = 'a14:sharpenSoften';
    public static override _A = [':amount',];
    /** amount. Serialized as `:amount` */
    public get amount(): Int32Value | undefined { return this._g(':amount'); }
    public set amount(v: Int32Value | undefined) { this._s(':amount', v); }

}
/** Defines the Saturation Class. Serialized as `a14:saturation` */
export class Saturation extends OxmlLeafElement {

    public static override _Q = 'a14:saturation';
    public static override _A = [':sat',];
    /** sat. Serialized as `:sat` */
    public get saturationAmount(): Int32Value | undefined { return this._g(':sat'); }
    public set saturationAmount(v: Int32Value | undefined) { this._s(':sat', v); }

}
/** Defines the ColorTemperature Class. Serialized as `a14:colorTemperature` */
export class ColorTemperature extends OxmlLeafElement {

    public static override _Q = 'a14:colorTemperature';
    public static override _A = [':colorTemp',];
    /** colorTemp. Serialized as `:colorTemp` */
    public get colorTemperatureValue(): Int32Value | undefined { return this._g(':colorTemp'); }
    public set colorTemperatureValue(v: Int32Value | undefined) { this._s(':colorTemp', v); }

}
/** Defines the BrightnessContrast Class. Serialized as `a14:brightnessContrast` */
export class BrightnessContrast extends OxmlLeafElement {

    public static override _Q = 'a14:brightnessContrast';
    public static override _A = [':bright',':contrast',];
    /** bright. Serialized as `:bright` */
    public get bright(): Int32Value | undefined { return this._g(':bright'); }
    public set bright(v: Int32Value | undefined) { this._s(':bright', v); }
    /** contrast. Serialized as `:contrast` */
    public get contrast(): Int32Value | undefined { return this._g(':contrast'); }
    public set contrast(v: Int32Value | undefined) { this._s(':contrast', v); }

}
/** Defines the BackgroundRemoval Class. Serialized as `a14:backgroundRemoval` */
export class BackgroundRemoval extends OxmlCompositeElement<ForegroundMark | BackgroundMark> {

    public static override _Q = 'a14:backgroundRemoval';
    public static override _A = [':t',':b',':l',':r',];
    /** t. Serialized as `:t` */
    public get marqueeTop(): Int32Value | undefined { return this._g(':t'); }
    public set marqueeTop(v: Int32Value | undefined) { this._s(':t', v); }
    /** b. Serialized as `:b` */
    public get marqueeBottom(): Int32Value | undefined { return this._g(':b'); }
    public set marqueeBottom(v: Int32Value | undefined) { this._s(':b', v); }
    /** l. Serialized as `:l` */
    public get marqueeLeft(): Int32Value | undefined { return this._g(':l'); }
    public set marqueeLeft(v: Int32Value | undefined) { this._s(':l', v); }
    /** r. Serialized as `:r` */
    public get marqueeRight(): Int32Value | undefined { return this._g(':r'); }
    public set marqueeRight(v: Int32Value | undefined) { this._s(':r', v); }

}
/** Defines the ArtisticWatercolorSponge Class. Serialized as `a14:artisticWatercolorSponge` */
export class ArtisticWatercolorSponge extends OxmlLeafElement {

    public static override _Q = 'a14:artisticWatercolorSponge';
    public static override _A = [':trans',':brushSize',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** brushSize. Serialized as `:brushSize` */
    public get brushSize(): Int32Value | undefined { return this._g(':brushSize'); }
    public set brushSize(v: Int32Value | undefined) { this._s(':brushSize', v); }

}
/** Defines the ArtisticTexturizer Class. Serialized as `a14:artisticTexturizer` */
export class ArtisticTexturizer extends OxmlLeafElement {

    public static override _Q = 'a14:artisticTexturizer';
    public static override _A = [':trans',':scaling',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** scaling. Serialized as `:scaling` */
    public get scaling(): Int32Value | undefined { return this._g(':scaling'); }
    public set scaling(v: Int32Value | undefined) { this._s(':scaling', v); }

}
/** Defines the ArtisticPlasticWrap Class. Serialized as `a14:artisticPlasticWrap` */
export class ArtisticPlasticWrap extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPlasticWrap';
    public static override _A = [':trans',':smoothness',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** smoothness. Serialized as `:smoothness` */
    public get smoothness(): Int32Value | undefined { return this._g(':smoothness'); }
    public set smoothness(v: Int32Value | undefined) { this._s(':smoothness', v); }

}
/** Defines the ArtisticPhotocopy Class. Serialized as `a14:artisticPhotocopy` */
export class ArtisticPhotocopy extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPhotocopy';
    public static override _A = [':trans',':detail',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** detail. Serialized as `:detail` */
    public get detail(): Int32Value | undefined { return this._g(':detail'); }
    public set detail(v: Int32Value | undefined) { this._s(':detail', v); }

}
/** Defines the ArtisticPencilSketch Class. Serialized as `a14:artisticPencilSketch` */
export class ArtisticPencilSketch extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPencilSketch';
    public static override _A = [':trans',':pressure',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** pressure. Serialized as `:pressure` */
    public get pressure(): Int32Value | undefined { return this._g(':pressure'); }
    public set pressure(v: Int32Value | undefined) { this._s(':pressure', v); }

}
/** Defines the ArtisticPencilGrayscale Class. Serialized as `a14:artisticPencilGrayscale` */
export class ArtisticPencilGrayscale extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPencilGrayscale';
    public static override _A = [':trans',':pencilSize',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** pencilSize. Serialized as `:pencilSize` */
    public get brushSize(): Int32Value | undefined { return this._g(':pencilSize'); }
    public set brushSize(v: Int32Value | undefined) { this._s(':pencilSize', v); }

}
/** Defines the ArtisticPastelsSmooth Class. Serialized as `a14:artisticPastelsSmooth` */
export class ArtisticPastelsSmooth extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPastelsSmooth';
    public static override _A = [':trans',':scaling',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** scaling. Serialized as `:scaling` */
    public get brushSize(): Int32Value | undefined { return this._g(':scaling'); }
    public set brushSize(v: Int32Value | undefined) { this._s(':scaling', v); }

}
/** Defines the ArtisticPaintBrush Class. Serialized as `a14:artisticPaintBrush` */
export class ArtisticPaintBrush extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPaintBrush';
    public static override _A = [':trans',':brushSize',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** brushSize. Serialized as `:brushSize` */
    public get brushSize(): Int32Value | undefined { return this._g(':brushSize'); }
    public set brushSize(v: Int32Value | undefined) { this._s(':brushSize', v); }

}
/** Defines the ArtisticPaintStrokes Class. Serialized as `a14:artisticPaintStrokes` */
export class ArtisticPaintStrokes extends OxmlLeafElement {

    public static override _Q = 'a14:artisticPaintStrokes';
    public static override _A = [':trans',':intensity',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** intensity. Serialized as `:intensity` */
    public get intensity(): Int32Value | undefined { return this._g(':intensity'); }
    public set intensity(v: Int32Value | undefined) { this._s(':intensity', v); }

}
/** Defines the ArtisticMosaicBubbles Class. Serialized as `a14:artisticMosiaicBubbles` */
export class ArtisticMosaicBubbles extends OxmlLeafElement {

    public static override _Q = 'a14:artisticMosiaicBubbles';
    public static override _A = [':trans',':pressure',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** pressure. Serialized as `:pressure` */
    public get pressure(): Int32Value | undefined { return this._g(':pressure'); }
    public set pressure(v: Int32Value | undefined) { this._s(':pressure', v); }

}
/** Defines the ArtisticMarker Class. Serialized as `a14:artisticMarker` */
export class ArtisticMarker extends OxmlLeafElement {

    public static override _Q = 'a14:artisticMarker';
    public static override _A = [':trans',':size',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** size. Serialized as `:size` */
    public get size(): Int32Value | undefined { return this._g(':size'); }
    public set size(v: Int32Value | undefined) { this._s(':size', v); }

}
/** Defines the ArtisticLineDrawing Class. Serialized as `a14:artisticLineDrawing` */
export class ArtisticLineDrawing extends OxmlLeafElement {

    public static override _Q = 'a14:artisticLineDrawing';
    public static override _A = [':trans',':pencilSize',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** pencilSize. Serialized as `:pencilSize` */
    public get pencilSize(): Int32Value | undefined { return this._g(':pencilSize'); }
    public set pencilSize(v: Int32Value | undefined) { this._s(':pencilSize', v); }

}
/** Defines the ArtisticLightScreen Class. Serialized as `a14:artisticLightScreen` */
export class ArtisticLightScreen extends OxmlLeafElement {

    public static override _Q = 'a14:artisticLightScreen';
    public static override _A = [':trans',':gridSize',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** gridSize. Serialized as `:gridSize` */
    public get gridSize(): Int32Value | undefined { return this._g(':gridSize'); }
    public set gridSize(v: Int32Value | undefined) { this._s(':gridSize', v); }

}
/** Defines the ArtisticGlowEdges Class. Serialized as `a14:artisticGlowEdges` */
export class ArtisticGlowEdges extends OxmlLeafElement {

    public static override _Q = 'a14:artisticGlowEdges';
    public static override _A = [':trans',':smoothness',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** smoothness. Serialized as `:smoothness` */
    public get smoothness(): Int32Value | undefined { return this._g(':smoothness'); }
    public set smoothness(v: Int32Value | undefined) { this._s(':smoothness', v); }

}
/** Defines the ArtisticGlowDiffused Class. Serialized as `a14:artisticGlowDiffused` */
export class ArtisticGlowDiffused extends OxmlLeafElement {

    public static override _Q = 'a14:artisticGlowDiffused';
    public static override _A = [':trans',':intensity',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** intensity. Serialized as `:intensity` */
    public get intensity(): Int32Value | undefined { return this._g(':intensity'); }
    public set intensity(v: Int32Value | undefined) { this._s(':intensity', v); }

}
/** Defines the ArtisticGlass Class. Serialized as `a14:artisticGlass` */
export class ArtisticGlass extends OxmlLeafElement {

    public static override _Q = 'a14:artisticGlass';
    public static override _A = [':trans',':scaling',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** scaling. Serialized as `:scaling` */
    public get scaling(): Int32Value | undefined { return this._g(':scaling'); }
    public set scaling(v: Int32Value | undefined) { this._s(':scaling', v); }

}
/** Defines the ArtisticFilmGrain Class. Serialized as `a14:artisticFilmGrain` */
export class ArtisticFilmGrain extends OxmlLeafElement {

    public static override _Q = 'a14:artisticFilmGrain';
    public static override _A = [':trans',':grainSize',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** grainSize. Serialized as `:grainSize` */
    public get grainSize(): Int32Value | undefined { return this._g(':grainSize'); }
    public set grainSize(v: Int32Value | undefined) { this._s(':grainSize', v); }

}
/** Defines the ArtisticCutout Class. Serialized as `a14:artisticCutout` */
export class ArtisticCutout extends OxmlLeafElement {

    public static override _Q = 'a14:artisticCutout';
    public static override _A = [':trans',':numberOfShades',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** numberOfShades. Serialized as `:numberOfShades` */
    public get numberOfShades(): Int32Value | undefined { return this._g(':numberOfShades'); }
    public set numberOfShades(v: Int32Value | undefined) { this._s(':numberOfShades', v); }

}
/** Defines the ArtisticCrisscrossEtching Class. Serialized as `a14:artisticCrisscrossEtching` */
export class ArtisticCrisscrossEtching extends OxmlLeafElement {

    public static override _Q = 'a14:artisticCrisscrossEtching';
    public static override _A = [':trans',':pressure',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** pressure. Serialized as `:pressure` */
    public get pressure(): Int32Value | undefined { return this._g(':pressure'); }
    public set pressure(v: Int32Value | undefined) { this._s(':pressure', v); }

}
/** Defines the ArtisticChalkSketch Class. Serialized as `a14:artisticChalkSketch` */
export class ArtisticChalkSketch extends OxmlLeafElement {

    public static override _Q = 'a14:artisticChalkSketch';
    public static override _A = [':trans',':pressure',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** pressure. Serialized as `:pressure` */
    public get pressure(): Int32Value | undefined { return this._g(':pressure'); }
    public set pressure(v: Int32Value | undefined) { this._s(':pressure', v); }

}
/** Defines the ArtisticCement Class. Serialized as `a14:artisticCement` */
export class ArtisticCement extends OxmlLeafElement {

    public static override _Q = 'a14:artisticCement';
    public static override _A = [':trans',':crackSpacing',];
    /** trans. Serialized as `:trans` */
    public get transparancy(): Int32Value | undefined { return this._g(':trans'); }
    public set transparancy(v: Int32Value | undefined) { this._s(':trans', v); }
    /** crackSpacing. Serialized as `:crackSpacing` */
    public get crackSpacing(): Int32Value | undefined { return this._g(':crackSpacing'); }
    public set crackSpacing(v: Int32Value | undefined) { this._s(':crackSpacing', v); }

}
/** Defines the ArtisticBlur Class. Serialized as `a14:artisticBlur` */
export class ArtisticBlur extends OxmlLeafElement {

    public static override _Q = 'a14:artisticBlur';
    public static override _A = [':radius',];
    /** radius. Serialized as `:radius` */
    public get radius(): Int32Value | undefined { return this._g(':radius'); }
    public set radius(v: Int32Value | undefined) { this._s(':radius', v); }

}
/** Defines the BackgroundMark Class. Serialized as `a14:backgroundMark` */
export class BackgroundMark extends OxmlLeafElement {

    public static override _Q = 'a14:backgroundMark';
    public static override _A = [':x1',':y1',':x2',':y2',];
    /** x1. Serialized as `:x1` */
    public get firstXCoordinate(): Int32Value | undefined { return this._g(':x1'); }
    public set firstXCoordinate(v: Int32Value | undefined) { this._s(':x1', v); }
    /** y1. Serialized as `:y1` */
    public get firstYCoordinate(): Int32Value | undefined { return this._g(':y1'); }
    public set firstYCoordinate(v: Int32Value | undefined) { this._s(':y1', v); }
    /** x2. Serialized as `:x2` */
    public get secondXCoordinate(): Int32Value | undefined { return this._g(':x2'); }
    public set secondXCoordinate(v: Int32Value | undefined) { this._s(':x2', v); }
    /** y2. Serialized as `:y2` */
    public get secondYCoordinate(): Int32Value | undefined { return this._g(':y2'); }
    public set secondYCoordinate(v: Int32Value | undefined) { this._s(':y2', v); }

}
/** Defines the ForegroundMark Class. Serialized as `a14:foregroundMark` */
export class ForegroundMark extends OxmlLeafElement {

    public static override _Q = 'a14:foregroundMark';
    public static override _A = [':x1',':y1',':x2',':y2',];
    /** x1. Serialized as `:x1` */
    public get firstXCoordinate(): Int32Value | undefined { return this._g(':x1'); }
    public set firstXCoordinate(v: Int32Value | undefined) { this._s(':x1', v); }
    /** y1. Serialized as `:y1` */
    public get firstYCoordinate(): Int32Value | undefined { return this._g(':y1'); }
    public set firstYCoordinate(v: Int32Value | undefined) { this._s(':y1', v); }
    /** x2. Serialized as `:x2` */
    public get secondXCoordinate(): Int32Value | undefined { return this._g(':x2'); }
    public set secondXCoordinate(v: Int32Value | undefined) { this._s(':x2', v); }
    /** y2. Serialized as `:y2` */
    public get secondYCoordinate(): Int32Value | undefined { return this._g(':y2'); }
    public set secondYCoordinate(v: Int32Value | undefined) { this._s(':y2', v); }

}
/** Defines the ContentPartLocks Class. Serialized as `a14:cpLocks` */
export class ContentPartLocks extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'a14:cpLocks';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    public get noGrouping(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrouping(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    public get noSelection(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelection(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    public get noRotation(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRotation(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** Disallow Shape Movement. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** Disallow Shape Resize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `a14:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'a14:extLst';

}
/** Defines the TextMath Class. Serialized as `a14:m` */
export class TextMath extends OxmlLeafElement {

    public static override _Q = 'a14:m';

}
/** Defines the UseLocalDpi Class. Serialized as `a14:useLocalDpi` */
export class UseLocalDpi extends OxmlLeafElement {

    public static override _Q = 'a14:useLocalDpi';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the ImageProperties Class. Serialized as `a14:imgProps` */
export class ImageProperties extends OxmlCompositeElement<ImageLayer> {

    public static override _Q = 'a14:imgProps';
    /** Returns ImageLayer. */
    public get imageLayer(): ImageLayer | undefined { return this._f(ImageLayer); }

}
/** Defines the HiddenShape3D Class. Serialized as `a14:hiddenSp3d` */
export class HiddenShape3D extends OxmlCompositeElement<ABevelTop | ABevelBottom | AExtrusionColor | AContourColor | AExtensionList> {

    public static override _Q = 'a14:hiddenSp3d';
    public static override _A = [':z',':extrusionH',':contourW',':prstMaterial',];
    /** Shape Depth. Serialized as `:z` */
    public get z(): Int64Value | undefined { return this._g(':z'); }
    public set z(v: Int64Value | undefined) { this._s(':z', v); }
    /** Extrusion Height. Serialized as `:extrusionH` */
    public get extrusionHeight(): Int64Value | undefined { return this._g(':extrusionH'); }
    public set extrusionHeight(v: Int64Value | undefined) { this._s(':extrusionH', v); }
    /** Contour Width. Serialized as `:contourW` */
    public get contourWidth(): Int64Value | undefined { return this._g(':contourW'); }
    public set contourWidth(v: Int64Value | undefined) { this._s(':contourW', v); }
    /** Preset Material Type. Serialized as `:prstMaterial` */
    public get presetMaterial(): PresetMaterialTypeValues | undefined { return this._g(':prstMaterial'); }
    public set presetMaterial(v: PresetMaterialTypeValues | undefined) { this._s(':prstMaterial', v); }
    /** Top Bevel. */
    public get bevelTop(): ABevelTop | undefined { return this._f(ABevelTop); }
    /** Bottom Bevel. */
    public get bevelBottom(): ABevelBottom | undefined { return this._f(ABevelBottom); }
    /** Extrusion Color. */
    public get extrusionColor(): AExtrusionColor | undefined { return this._f(AExtrusionColor); }
    /** Contour Color. */
    public get contourColor(): AContourColor | undefined { return this._f(AContourColor); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the HiddenScene3D Class. Serialized as `a14:hiddenScene3d` */
export class HiddenScene3D extends OxmlCompositeElement<ACamera | ALightRig | ABackdrop | AExtensionList> {

    public static override _Q = 'a14:hiddenScene3d';
    /** Camera. */
    public get camera(): ACamera | undefined { return this._f(ACamera); }
    /** Light Rig. */
    public get lightRig(): ALightRig | undefined { return this._f(ALightRig); }
    /** Backdrop Plane. */
    public get backdrop(): ABackdrop | undefined { return this._f(ABackdrop); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the HiddenEffectsProperties Class. Serialized as `a14:hiddenEffects` */
export class HiddenEffectsProperties extends OxmlCompositeElement<AEffectList | AEffectDag> {

    public static override _Q = 'a14:hiddenEffects';
    /** Effect Container. */
    public get effectList(): AEffectList | undefined { return this._f(AEffectList); }
    /** Effect Container. */
    public get effectDag(): AEffectDag | undefined { return this._f(AEffectDag); }

}
/** Defines the HiddenLineProperties Class. Serialized as `a14:hiddenLine` */
export class HiddenLineProperties extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | APatternFill | APresetDash | ACustomDash | ARound | ALineJoinBevel | AMiter | AHeadEnd | ATailEnd | ALinePropertiesExtensionList> {

    public static override _Q = 'a14:hiddenLine';
    public static override _A = [':w',':cap',':cmpd',':algn',];
    /** line width. Serialized as `:w` */
    public get width(): Int32Value | undefined { return this._g(':w'); }
    public set width(v: Int32Value | undefined) { this._s(':w', v); }
    /** line cap. Serialized as `:cap` */
    public get capType(): LineCapValues | undefined { return this._g(':cap'); }
    public set capType(v: LineCapValues | undefined) { this._s(':cap', v); }
    /** compound line type. Serialized as `:cmpd` */
    public get compoundLineType(): CompoundLineValues | undefined { return this._g(':cmpd'); }
    public set compoundLineType(v: CompoundLineValues | undefined) { this._s(':cmpd', v); }
    /** pen alignment. Serialized as `:algn` */
    public get alignment(): PenAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: PenAlignmentValues | undefined) { this._s(':algn', v); }

}
/** Defines the HiddenFillProperties Class. Serialized as `a14:hiddenFill` */
export class HiddenFillProperties extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill> {

    public static override _Q = 'a14:hiddenFill';
    /** Returns ANoFill. */
    public get noFill(): ANoFill | undefined { return this._f(ANoFill); }
    /** Returns ASolidFill. */
    public get solidFill(): ASolidFill | undefined { return this._f(ASolidFill); }
    /** Returns AGradientFill. */
    public get gradientFill(): AGradientFill | undefined { return this._f(AGradientFill); }
    /** Returns ABlipFill. */
    public get blipFill(): ABlipFill | undefined { return this._f(ABlipFill); }
    /** Pattern Fill. */
    public get patternFill(): APatternFill | undefined { return this._f(APatternFill); }
    /** Group Fill. */
    public get groupFill(): AGroupFill | undefined { return this._f(AGroupFill); }

}
/** Defines the ShadowObscured Class. Serialized as `a14:shadowObscured` */
export class ShadowObscured extends OxmlLeafElement {

    public static override _Q = 'a14:shadowObscured';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the GvmlContentPart Class. Serialized as `a14:contentPart` */
export class GvmlContentPart extends OxmlCompositeElement<NonVisualContentPartProperties | Transform2D | OfficeArtExtensionList> {

    public static override _Q = 'a14:contentPart';
    public static override _A = [':bwMode','r:id',];
    /** bwMode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** id. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns NonVisualContentPartProperties. */
    public get nonVisualContentPartProperties(): NonVisualContentPartProperties | undefined { return this._f(NonVisualContentPartProperties); }
    /** Returns Transform2D. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the IsCanvas Class. Serialized as `a14:isCanvas` */
export class IsCanvas extends OxmlLeafElement {

    public static override _Q = 'a14:isCanvas';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the CompatExtension Class. Serialized as `a14:compatExt` */
export class CompatExtension extends OxmlLeafElement {

    public static override _Q = 'a14:compatExt';
    public static override _A = [':spid',];
    /** spid. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }

}
/** Defines the CameraTool Class. Serialized as `a14:cameraTool` */
export class CameraTool extends OxmlLeafElement {

    public static override _Q = 'a14:cameraTool';
    public static override _A = [':cellRange',':spid',];
    /** cellRange. Serialized as `:cellRange` */
    public get cellRange(): StringValue | undefined { return this._g(':cellRange'); }
    public set cellRange(v: StringValue | undefined) { this._s(':cellRange', v); }
    /** spid. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }

}

export function initOffice2010DrawingNamespace() {
    Transform2D._C = {
        'a:off': AOffset,
        'a:ext': AExtents,
    };
    Transform2D._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    NonVisualContentPartProperties._C = {
        'a14:cNvPr': NonVisualDrawingProperties,
        'a14:cNvContentPartPr': NonVisualInkContentPartProperties,
    };
    NonVisualInkContentPartProperties._C = {
        'a14:cpLocks': ContentPartLocks,
        'a14:extLst': OfficeArtExtensionList,
    };
    NonVisualInkContentPartProperties._D = {
        ':isComment': new OxmlAttr(':isComment', OxmlType.BooleanValue),
    };
    NonVisualDrawingProperties._C = {
        'a:hlinkClick': AHyperlinkOnClick,
        'a:hlinkHover': AHyperlinkOnHover,
        'a:extLst': ANonVisualDrawingPropertiesExtensionList,
    };
    NonVisualDrawingProperties._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    ImageLayer._C = {
        'a14:imgEffect': ImageEffect,
    };
    ImageLayer._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
    };
    ImageEffect._C = {
        'a14:artisticBlur': ArtisticBlur,
        'a14:artisticCement': ArtisticCement,
        'a14:artisticChalkSketch': ArtisticChalkSketch,
        'a14:artisticCrisscrossEtching': ArtisticCrisscrossEtching,
        'a14:artisticCutout': ArtisticCutout,
        'a14:artisticFilmGrain': ArtisticFilmGrain,
        'a14:artisticGlass': ArtisticGlass,
        'a14:artisticGlowDiffused': ArtisticGlowDiffused,
        'a14:artisticGlowEdges': ArtisticGlowEdges,
        'a14:artisticLightScreen': ArtisticLightScreen,
        'a14:artisticLineDrawing': ArtisticLineDrawing,
        'a14:artisticMarker': ArtisticMarker,
        'a14:artisticMosiaicBubbles': ArtisticMosaicBubbles,
        'a14:artisticPaintStrokes': ArtisticPaintStrokes,
        'a14:artisticPaintBrush': ArtisticPaintBrush,
        'a14:artisticPastelsSmooth': ArtisticPastelsSmooth,
        'a14:artisticPencilGrayscale': ArtisticPencilGrayscale,
        'a14:artisticPencilSketch': ArtisticPencilSketch,
        'a14:artisticPhotocopy': ArtisticPhotocopy,
        'a14:artisticPlasticWrap': ArtisticPlasticWrap,
        'a14:artisticTexturizer': ArtisticTexturizer,
        'a14:artisticWatercolorSponge': ArtisticWatercolorSponge,
        'a14:backgroundRemoval': BackgroundRemoval,
        'a14:brightnessContrast': BrightnessContrast,
        'a14:colorTemperature': ColorTemperature,
        'a14:saturation': Saturation,
        'a14:sharpenSoften': SharpenSoften,
    };
    ImageEffect._D = {
        ':visible': new OxmlAttr(':visible', OxmlType.BooleanValue),
    };
    SharpenSoften._D = {
        ':amount': new OxmlAttr(':amount', OxmlType.Int32Value),
    };
    Saturation._D = {
        ':sat': new OxmlAttr(':sat', OxmlType.Int32Value),
    };
    ColorTemperature._D = {
        ':colorTemp': new OxmlAttr(':colorTemp', OxmlType.Int32Value),
    };
    BrightnessContrast._D = {
        ':bright': new OxmlAttr(':bright', OxmlType.Int32Value),
        ':contrast': new OxmlAttr(':contrast', OxmlType.Int32Value),
    };
    BackgroundRemoval._C = {
        'a14:foregroundMark': ForegroundMark,
        'a14:backgroundMark': BackgroundMark,
    };
    BackgroundRemoval._D = {
        ':t': new OxmlAttr(':t', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.Int32Value),
        ':l': new OxmlAttr(':l', OxmlType.Int32Value),
        ':r': new OxmlAttr(':r', OxmlType.Int32Value),
    };
    ArtisticWatercolorSponge._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':brushSize': new OxmlAttr(':brushSize', OxmlType.Int32Value),
    };
    ArtisticTexturizer._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':scaling': new OxmlAttr(':scaling', OxmlType.Int32Value),
    };
    ArtisticPlasticWrap._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':smoothness': new OxmlAttr(':smoothness', OxmlType.Int32Value),
    };
    ArtisticPhotocopy._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':detail': new OxmlAttr(':detail', OxmlType.Int32Value),
    };
    ArtisticPencilSketch._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':pressure': new OxmlAttr(':pressure', OxmlType.Int32Value),
    };
    ArtisticPencilGrayscale._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':pencilSize': new OxmlAttr(':pencilSize', OxmlType.Int32Value),
    };
    ArtisticPastelsSmooth._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':scaling': new OxmlAttr(':scaling', OxmlType.Int32Value),
    };
    ArtisticPaintBrush._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':brushSize': new OxmlAttr(':brushSize', OxmlType.Int32Value),
    };
    ArtisticPaintStrokes._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':intensity': new OxmlAttr(':intensity', OxmlType.Int32Value),
    };
    ArtisticMosaicBubbles._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':pressure': new OxmlAttr(':pressure', OxmlType.Int32Value),
    };
    ArtisticMarker._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':size': new OxmlAttr(':size', OxmlType.Int32Value),
    };
    ArtisticLineDrawing._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':pencilSize': new OxmlAttr(':pencilSize', OxmlType.Int32Value),
    };
    ArtisticLightScreen._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':gridSize': new OxmlAttr(':gridSize', OxmlType.Int32Value),
    };
    ArtisticGlowEdges._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':smoothness': new OxmlAttr(':smoothness', OxmlType.Int32Value),
    };
    ArtisticGlowDiffused._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':intensity': new OxmlAttr(':intensity', OxmlType.Int32Value),
    };
    ArtisticGlass._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':scaling': new OxmlAttr(':scaling', OxmlType.Int32Value),
    };
    ArtisticFilmGrain._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':grainSize': new OxmlAttr(':grainSize', OxmlType.Int32Value),
    };
    ArtisticCutout._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':numberOfShades': new OxmlAttr(':numberOfShades', OxmlType.Int32Value),
    };
    ArtisticCrisscrossEtching._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':pressure': new OxmlAttr(':pressure', OxmlType.Int32Value),
    };
    ArtisticChalkSketch._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':pressure': new OxmlAttr(':pressure', OxmlType.Int32Value),
    };
    ArtisticCement._D = {
        ':trans': new OxmlAttr(':trans', OxmlType.Int32Value),
        ':crackSpacing': new OxmlAttr(':crackSpacing', OxmlType.Int32Value),
    };
    ArtisticBlur._D = {
        ':radius': new OxmlAttr(':radius', OxmlType.Int32Value),
    };
    BackgroundMark._D = {
        ':x1': new OxmlAttr(':x1', OxmlType.Int32Value),
        ':y1': new OxmlAttr(':y1', OxmlType.Int32Value),
        ':x2': new OxmlAttr(':x2', OxmlType.Int32Value),
        ':y2': new OxmlAttr(':y2', OxmlType.Int32Value),
    };
    ForegroundMark._D = {
        ':x1': new OxmlAttr(':x1', OxmlType.Int32Value),
        ':y1': new OxmlAttr(':y1', OxmlType.Int32Value),
        ':x2': new OxmlAttr(':x2', OxmlType.Int32Value),
        ':y2': new OxmlAttr(':y2', OxmlType.Int32Value),
    };
    ContentPartLocks._C = {
        'a14:extLst': OfficeArtExtensionList,
    };
    ContentPartLocks._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    UseLocalDpi._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    ImageProperties._C = {
        'a14:imgLayer': ImageLayer,
    };
    HiddenShape3D._C = {
        'a:bevelT': ABevelTop,
        'a:bevelB': ABevelBottom,
        'a:extrusionClr': AExtrusionColor,
        'a:contourClr': AContourColor,
        'a:extLst': AExtensionList,
    };
    HiddenShape3D._D = {
        ':z': new OxmlAttr(':z', OxmlType.Int64Value),
        ':extrusionH': new OxmlAttr(':extrusionH', OxmlType.Int64Value),
        ':contourW': new OxmlAttr(':contourW', OxmlType.Int64Value),
        ':prstMaterial': new OxmlAttr(':prstMaterial', OxmlType.EnumValue, PresetMaterialTypeValuesArray),
    };
    HiddenScene3D._C = {
        'a:camera': ACamera,
        'a:lightRig': ALightRig,
        'a:backdrop': ABackdrop,
        'a:extLst': AExtensionList,
    };
    HiddenEffectsProperties._C = {
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
    };
    HiddenLineProperties._C = {
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:pattFill': APatternFill,
        'a:prstDash': APresetDash,
        'a:custDash': ACustomDash,
        'a:round': ARound,
        'a:bevel': ALineJoinBevel,
        'a:miter': AMiter,
        'a:headEnd': AHeadEnd,
        'a:tailEnd': ATailEnd,
        'a:extLst': ALinePropertiesExtensionList,
    };
    HiddenLineProperties._D = {
        ':w': new OxmlAttr(':w', OxmlType.Int32Value),
        ':cap': new OxmlAttr(':cap', OxmlType.EnumValue, LineCapValuesArray),
        ':cmpd': new OxmlAttr(':cmpd', OxmlType.EnumValue, CompoundLineValuesArray),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, PenAlignmentValuesArray),
    };
    HiddenFillProperties._C = {
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
    };
    ShadowObscured._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    GvmlContentPart._C = {
        'a14:nvContentPartPr': NonVisualContentPartProperties,
        'a14:xfrm': Transform2D,
        'a14:extLst': OfficeArtExtensionList,
    };
    GvmlContentPart._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    IsCanvas._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    CompatExtension._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
    };
    CameraTool._D = {
        ':cellRange': new OxmlAttr(':cellRange', OxmlType.StringValue),
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
    };
    return {
        prefix: 'a14',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2010/main',
    };
}
