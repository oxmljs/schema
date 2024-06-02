import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { PresetMaterialTypeValues } from '../../Drawing';
import { LineCapValues } from '../../Drawing';
import { CompoundLineValues } from '../../Drawing';
import { PenAlignmentValues } from '../../Drawing';
import { BlackWhiteModeValues } from '../../Drawing';
import { Offset as AOffset } from '../../Drawing';
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
export declare class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Horizontal Flip. Serialized as `:flipH` */
    get horizontalFlip(): BooleanValue | undefined;
    set horizontalFlip(v: BooleanValue | undefined);
    /** Vertical Flip. Serialized as `:flipV` */
    get verticalFlip(): BooleanValue | undefined;
    set verticalFlip(v: BooleanValue | undefined);
    /** Offset. */
    get offset(): AOffset | undefined;
    /** Extents. */
    get extents(): AExtents | undefined;
}
/** Defines the NonVisualContentPartProperties Class. Serialized as `a14:nvContentPartPr` */
export declare class NonVisualContentPartProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualInkContentPartProperties. */
    get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined;
}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `a14:cNvContentPartPr` */
export declare class NonVisualInkContentPartProperties extends OxmlCompositeElement<ContentPartLocks | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** isComment. Serialized as `:isComment` */
    get isComment(): BooleanValue | undefined;
    set isComment(v: BooleanValue | undefined);
    /** Returns ContentPartLocks. */
    get contentPartLocks(): ContentPartLocks | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `a14:cNvPr` */
export declare class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Application defined unique identifier.. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Description of the drawing element.. Serialized as `:descr` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Hyperlink associated with clicking or selecting the element.. */
    get hyperlinkOnClick(): AHyperlinkOnClick | undefined;
    /** Hyperlink associated with hovering over the element.. */
    get hyperlinkOnHover(): AHyperlinkOnHover | undefined;
    /** Future extension. */
    get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined;
}
/** Defines the ImageLayer Class. Serialized as `a14:imgLayer` */
export declare class ImageLayer extends OxmlCompositeElement<ImageEffect> {
    static _Q: string;
    static _A: string[];
    /** embed. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
}
/** Defines the ImageEffect Class. Serialized as `a14:imgEffect` */
export declare class ImageEffect extends OxmlCompositeElement<ArtisticBlur | ArtisticCement | ArtisticChalkSketch | ArtisticCrisscrossEtching | ArtisticCutout | ArtisticFilmGrain | ArtisticGlass | ArtisticGlowDiffused | ArtisticGlowEdges | ArtisticLightScreen | ArtisticLineDrawing | ArtisticMarker | ArtisticMosaicBubbles | ArtisticPaintStrokes | ArtisticPaintBrush | ArtisticPastelsSmooth | ArtisticPencilGrayscale | ArtisticPencilSketch | ArtisticPhotocopy | ArtisticPlasticWrap | ArtisticTexturizer | ArtisticWatercolorSponge | BackgroundRemoval | BrightnessContrast | ColorTemperature | Saturation | SharpenSoften> {
    static _Q: string;
    static _A: string[];
    /** visible. Serialized as `:visible` */
    get visible(): BooleanValue | undefined;
    set visible(v: BooleanValue | undefined);
    /** Returns ArtisticBlur. */
    get artisticBlur(): ArtisticBlur | undefined;
    /** Returns ArtisticCement. */
    get artisticCement(): ArtisticCement | undefined;
    /** Returns ArtisticChalkSketch. */
    get artisticChalkSketch(): ArtisticChalkSketch | undefined;
    /** Returns ArtisticCrisscrossEtching. */
    get artisticCrisscrossEtching(): ArtisticCrisscrossEtching | undefined;
    /** Returns ArtisticCutout. */
    get artisticCutout(): ArtisticCutout | undefined;
    /** Returns ArtisticFilmGrain. */
    get artisticFilmGrain(): ArtisticFilmGrain | undefined;
    /** Returns ArtisticGlass. */
    get artisticGlass(): ArtisticGlass | undefined;
    /** Returns ArtisticGlowDiffused. */
    get artisticGlowDiffused(): ArtisticGlowDiffused | undefined;
    /** Returns ArtisticGlowEdges. */
    get artisticGlowEdges(): ArtisticGlowEdges | undefined;
    /** Returns ArtisticLightScreen. */
    get artisticLightScreen(): ArtisticLightScreen | undefined;
    /** Returns ArtisticLineDrawing. */
    get artisticLineDrawing(): ArtisticLineDrawing | undefined;
    /** Returns ArtisticMarker. */
    get artisticMarker(): ArtisticMarker | undefined;
    /** Returns ArtisticMosaicBubbles. */
    get artisticMosaicBubbles(): ArtisticMosaicBubbles | undefined;
    /** Returns ArtisticPaintStrokes. */
    get artisticPaintStrokes(): ArtisticPaintStrokes | undefined;
    /** Returns ArtisticPaintBrush. */
    get artisticPaintBrush(): ArtisticPaintBrush | undefined;
    /** Returns ArtisticPastelsSmooth. */
    get artisticPastelsSmooth(): ArtisticPastelsSmooth | undefined;
    /** Returns ArtisticPencilGrayscale. */
    get artisticPencilGrayscale(): ArtisticPencilGrayscale | undefined;
    /** Returns ArtisticPencilSketch. */
    get artisticPencilSketch(): ArtisticPencilSketch | undefined;
    /** Returns ArtisticPhotocopy. */
    get artisticPhotocopy(): ArtisticPhotocopy | undefined;
    /** Returns ArtisticPlasticWrap. */
    get artisticPlasticWrap(): ArtisticPlasticWrap | undefined;
    /** Returns ArtisticTexturizer. */
    get artisticTexturizer(): ArtisticTexturizer | undefined;
    /** Returns ArtisticWatercolorSponge. */
    get artisticWatercolorSponge(): ArtisticWatercolorSponge | undefined;
    /** Returns BackgroundRemoval. */
    get backgroundRemoval(): BackgroundRemoval | undefined;
    /** Returns BrightnessContrast. */
    get brightnessContrast(): BrightnessContrast | undefined;
    /** Returns ColorTemperature. */
    get colorTemperature(): ColorTemperature | undefined;
    /** Returns Saturation. */
    get saturation(): Saturation | undefined;
    /** Returns SharpenSoften. */
    get sharpenSoften(): SharpenSoften | undefined;
}
/** Defines the SharpenSoften Class. Serialized as `a14:sharpenSoften` */
export declare class SharpenSoften extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** amount. Serialized as `:amount` */
    get amount(): Int32Value | undefined;
    set amount(v: Int32Value | undefined);
}
/** Defines the Saturation Class. Serialized as `a14:saturation` */
export declare class Saturation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** sat. Serialized as `:sat` */
    get saturationAmount(): Int32Value | undefined;
    set saturationAmount(v: Int32Value | undefined);
}
/** Defines the ColorTemperature Class. Serialized as `a14:colorTemperature` */
export declare class ColorTemperature extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** colorTemp. Serialized as `:colorTemp` */
    get colorTemperatureValue(): Int32Value | undefined;
    set colorTemperatureValue(v: Int32Value | undefined);
}
/** Defines the BrightnessContrast Class. Serialized as `a14:brightnessContrast` */
export declare class BrightnessContrast extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** bright. Serialized as `:bright` */
    get bright(): Int32Value | undefined;
    set bright(v: Int32Value | undefined);
    /** contrast. Serialized as `:contrast` */
    get contrast(): Int32Value | undefined;
    set contrast(v: Int32Value | undefined);
}
/** Defines the BackgroundRemoval Class. Serialized as `a14:backgroundRemoval` */
export declare class BackgroundRemoval extends OxmlCompositeElement<ForegroundMark | BackgroundMark> {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get marqueeTop(): Int32Value | undefined;
    set marqueeTop(v: Int32Value | undefined);
    /** b. Serialized as `:b` */
    get marqueeBottom(): Int32Value | undefined;
    set marqueeBottom(v: Int32Value | undefined);
    /** l. Serialized as `:l` */
    get marqueeLeft(): Int32Value | undefined;
    set marqueeLeft(v: Int32Value | undefined);
    /** r. Serialized as `:r` */
    get marqueeRight(): Int32Value | undefined;
    set marqueeRight(v: Int32Value | undefined);
}
/** Defines the ArtisticWatercolorSponge Class. Serialized as `a14:artisticWatercolorSponge` */
export declare class ArtisticWatercolorSponge extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** brushSize. Serialized as `:brushSize` */
    get brushSize(): Int32Value | undefined;
    set brushSize(v: Int32Value | undefined);
}
/** Defines the ArtisticTexturizer Class. Serialized as `a14:artisticTexturizer` */
export declare class ArtisticTexturizer extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** scaling. Serialized as `:scaling` */
    get scaling(): Int32Value | undefined;
    set scaling(v: Int32Value | undefined);
}
/** Defines the ArtisticPlasticWrap Class. Serialized as `a14:artisticPlasticWrap` */
export declare class ArtisticPlasticWrap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** smoothness. Serialized as `:smoothness` */
    get smoothness(): Int32Value | undefined;
    set smoothness(v: Int32Value | undefined);
}
/** Defines the ArtisticPhotocopy Class. Serialized as `a14:artisticPhotocopy` */
export declare class ArtisticPhotocopy extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** detail. Serialized as `:detail` */
    get detail(): Int32Value | undefined;
    set detail(v: Int32Value | undefined);
}
/** Defines the ArtisticPencilSketch Class. Serialized as `a14:artisticPencilSketch` */
export declare class ArtisticPencilSketch extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** pressure. Serialized as `:pressure` */
    get pressure(): Int32Value | undefined;
    set pressure(v: Int32Value | undefined);
}
/** Defines the ArtisticPencilGrayscale Class. Serialized as `a14:artisticPencilGrayscale` */
export declare class ArtisticPencilGrayscale extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** pencilSize. Serialized as `:pencilSize` */
    get brushSize(): Int32Value | undefined;
    set brushSize(v: Int32Value | undefined);
}
/** Defines the ArtisticPastelsSmooth Class. Serialized as `a14:artisticPastelsSmooth` */
export declare class ArtisticPastelsSmooth extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** scaling. Serialized as `:scaling` */
    get brushSize(): Int32Value | undefined;
    set brushSize(v: Int32Value | undefined);
}
/** Defines the ArtisticPaintBrush Class. Serialized as `a14:artisticPaintBrush` */
export declare class ArtisticPaintBrush extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** brushSize. Serialized as `:brushSize` */
    get brushSize(): Int32Value | undefined;
    set brushSize(v: Int32Value | undefined);
}
/** Defines the ArtisticPaintStrokes Class. Serialized as `a14:artisticPaintStrokes` */
export declare class ArtisticPaintStrokes extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** intensity. Serialized as `:intensity` */
    get intensity(): Int32Value | undefined;
    set intensity(v: Int32Value | undefined);
}
/** Defines the ArtisticMosaicBubbles Class. Serialized as `a14:artisticMosiaicBubbles` */
export declare class ArtisticMosaicBubbles extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** pressure. Serialized as `:pressure` */
    get pressure(): Int32Value | undefined;
    set pressure(v: Int32Value | undefined);
}
/** Defines the ArtisticMarker Class. Serialized as `a14:artisticMarker` */
export declare class ArtisticMarker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** size. Serialized as `:size` */
    get size(): Int32Value | undefined;
    set size(v: Int32Value | undefined);
}
/** Defines the ArtisticLineDrawing Class. Serialized as `a14:artisticLineDrawing` */
export declare class ArtisticLineDrawing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** pencilSize. Serialized as `:pencilSize` */
    get pencilSize(): Int32Value | undefined;
    set pencilSize(v: Int32Value | undefined);
}
/** Defines the ArtisticLightScreen Class. Serialized as `a14:artisticLightScreen` */
export declare class ArtisticLightScreen extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** gridSize. Serialized as `:gridSize` */
    get gridSize(): Int32Value | undefined;
    set gridSize(v: Int32Value | undefined);
}
/** Defines the ArtisticGlowEdges Class. Serialized as `a14:artisticGlowEdges` */
export declare class ArtisticGlowEdges extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** smoothness. Serialized as `:smoothness` */
    get smoothness(): Int32Value | undefined;
    set smoothness(v: Int32Value | undefined);
}
/** Defines the ArtisticGlowDiffused Class. Serialized as `a14:artisticGlowDiffused` */
export declare class ArtisticGlowDiffused extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** intensity. Serialized as `:intensity` */
    get intensity(): Int32Value | undefined;
    set intensity(v: Int32Value | undefined);
}
/** Defines the ArtisticGlass Class. Serialized as `a14:artisticGlass` */
export declare class ArtisticGlass extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** scaling. Serialized as `:scaling` */
    get scaling(): Int32Value | undefined;
    set scaling(v: Int32Value | undefined);
}
/** Defines the ArtisticFilmGrain Class. Serialized as `a14:artisticFilmGrain` */
export declare class ArtisticFilmGrain extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** grainSize. Serialized as `:grainSize` */
    get grainSize(): Int32Value | undefined;
    set grainSize(v: Int32Value | undefined);
}
/** Defines the ArtisticCutout Class. Serialized as `a14:artisticCutout` */
export declare class ArtisticCutout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** numberOfShades. Serialized as `:numberOfShades` */
    get numberOfShades(): Int32Value | undefined;
    set numberOfShades(v: Int32Value | undefined);
}
/** Defines the ArtisticCrisscrossEtching Class. Serialized as `a14:artisticCrisscrossEtching` */
export declare class ArtisticCrisscrossEtching extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** pressure. Serialized as `:pressure` */
    get pressure(): Int32Value | undefined;
    set pressure(v: Int32Value | undefined);
}
/** Defines the ArtisticChalkSketch Class. Serialized as `a14:artisticChalkSketch` */
export declare class ArtisticChalkSketch extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** pressure. Serialized as `:pressure` */
    get pressure(): Int32Value | undefined;
    set pressure(v: Int32Value | undefined);
}
/** Defines the ArtisticCement Class. Serialized as `a14:artisticCement` */
export declare class ArtisticCement extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** trans. Serialized as `:trans` */
    get transparancy(): Int32Value | undefined;
    set transparancy(v: Int32Value | undefined);
    /** crackSpacing. Serialized as `:crackSpacing` */
    get crackSpacing(): Int32Value | undefined;
    set crackSpacing(v: Int32Value | undefined);
}
/** Defines the ArtisticBlur Class. Serialized as `a14:artisticBlur` */
export declare class ArtisticBlur extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** radius. Serialized as `:radius` */
    get radius(): Int32Value | undefined;
    set radius(v: Int32Value | undefined);
}
/** Defines the BackgroundMark Class. Serialized as `a14:backgroundMark` */
export declare class BackgroundMark extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** x1. Serialized as `:x1` */
    get firstXCoordinate(): Int32Value | undefined;
    set firstXCoordinate(v: Int32Value | undefined);
    /** y1. Serialized as `:y1` */
    get firstYCoordinate(): Int32Value | undefined;
    set firstYCoordinate(v: Int32Value | undefined);
    /** x2. Serialized as `:x2` */
    get secondXCoordinate(): Int32Value | undefined;
    set secondXCoordinate(v: Int32Value | undefined);
    /** y2. Serialized as `:y2` */
    get secondYCoordinate(): Int32Value | undefined;
    set secondYCoordinate(v: Int32Value | undefined);
}
/** Defines the ForegroundMark Class. Serialized as `a14:foregroundMark` */
export declare class ForegroundMark extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** x1. Serialized as `:x1` */
    get firstXCoordinate(): Int32Value | undefined;
    set firstXCoordinate(v: Int32Value | undefined);
    /** y1. Serialized as `:y1` */
    get firstYCoordinate(): Int32Value | undefined;
    set firstYCoordinate(v: Int32Value | undefined);
    /** x2. Serialized as `:x2` */
    get secondXCoordinate(): Int32Value | undefined;
    set secondXCoordinate(v: Int32Value | undefined);
    /** y2. Serialized as `:y2` */
    get secondYCoordinate(): Int32Value | undefined;
    set secondYCoordinate(v: Int32Value | undefined);
}
/** Defines the ContentPartLocks Class. Serialized as `a14:cpLocks` */
export declare class ContentPartLocks extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    get noGrouping(): BooleanValue | undefined;
    set noGrouping(v: BooleanValue | undefined);
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    get noSelection(): BooleanValue | undefined;
    set noSelection(v: BooleanValue | undefined);
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    get noRotation(): BooleanValue | undefined;
    set noRotation(v: BooleanValue | undefined);
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** Disallow Shape Movement. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** Disallow Shape Resize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `a14:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the TextMath Class. Serialized as `a14:m` */
export declare class TextMath extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the UseLocalDpi Class. Serialized as `a14:useLocalDpi` */
export declare class UseLocalDpi extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the ImageProperties Class. Serialized as `a14:imgProps` */
export declare class ImageProperties extends OxmlCompositeElement<ImageLayer> {
    static _Q: string;
    /** Returns ImageLayer. */
    get imageLayer(): ImageLayer | undefined;
}
/** Defines the HiddenShape3D Class. Serialized as `a14:hiddenSp3d` */
export declare class HiddenShape3D extends OxmlCompositeElement<ABevelTop | ABevelBottom | AExtrusionColor | AContourColor | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Shape Depth. Serialized as `:z` */
    get z(): Int64Value | undefined;
    set z(v: Int64Value | undefined);
    /** Extrusion Height. Serialized as `:extrusionH` */
    get extrusionHeight(): Int64Value | undefined;
    set extrusionHeight(v: Int64Value | undefined);
    /** Contour Width. Serialized as `:contourW` */
    get contourWidth(): Int64Value | undefined;
    set contourWidth(v: Int64Value | undefined);
    /** Preset Material Type. Serialized as `:prstMaterial` */
    get presetMaterial(): PresetMaterialTypeValues | undefined;
    set presetMaterial(v: PresetMaterialTypeValues | undefined);
    /** Top Bevel. */
    get bevelTop(): ABevelTop | undefined;
    /** Bottom Bevel. */
    get bevelBottom(): ABevelBottom | undefined;
    /** Extrusion Color. */
    get extrusionColor(): AExtrusionColor | undefined;
    /** Contour Color. */
    get contourColor(): AContourColor | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the HiddenScene3D Class. Serialized as `a14:hiddenScene3d` */
export declare class HiddenScene3D extends OxmlCompositeElement<ACamera | ALightRig | ABackdrop | AExtensionList> {
    static _Q: string;
    /** Camera. */
    get camera(): ACamera | undefined;
    /** Light Rig. */
    get lightRig(): ALightRig | undefined;
    /** Backdrop Plane. */
    get backdrop(): ABackdrop | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the HiddenEffectsProperties Class. Serialized as `a14:hiddenEffects` */
export declare class HiddenEffectsProperties extends OxmlCompositeElement<AEffectList | AEffectDag> {
    static _Q: string;
    /** Effect Container. */
    get effectList(): AEffectList | undefined;
    /** Effect Container. */
    get effectDag(): AEffectDag | undefined;
}
/** Defines the HiddenLineProperties Class. Serialized as `a14:hiddenLine` */
export declare class HiddenLineProperties extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | APatternFill | APresetDash | ACustomDash | ARound | ALineJoinBevel | AMiter | AHeadEnd | ATailEnd | ALinePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** line width. Serialized as `:w` */
    get width(): Int32Value | undefined;
    set width(v: Int32Value | undefined);
    /** line cap. Serialized as `:cap` */
    get capType(): LineCapValues | undefined;
    set capType(v: LineCapValues | undefined);
    /** compound line type. Serialized as `:cmpd` */
    get compoundLineType(): CompoundLineValues | undefined;
    set compoundLineType(v: CompoundLineValues | undefined);
    /** pen alignment. Serialized as `:algn` */
    get alignment(): PenAlignmentValues | undefined;
    set alignment(v: PenAlignmentValues | undefined);
}
/** Defines the HiddenFillProperties Class. Serialized as `a14:hiddenFill` */
export declare class HiddenFillProperties extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill> {
    static _Q: string;
    /** Returns ANoFill. */
    get noFill(): ANoFill | undefined;
    /** Returns ASolidFill. */
    get solidFill(): ASolidFill | undefined;
    /** Returns AGradientFill. */
    get gradientFill(): AGradientFill | undefined;
    /** Returns ABlipFill. */
    get blipFill(): ABlipFill | undefined;
    /** Pattern Fill. */
    get patternFill(): APatternFill | undefined;
    /** Group Fill. */
    get groupFill(): AGroupFill | undefined;
}
/** Defines the ShadowObscured Class. Serialized as `a14:shadowObscured` */
export declare class ShadowObscured extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the GvmlContentPart Class. Serialized as `a14:contentPart` */
export declare class GvmlContentPart extends OxmlCompositeElement<NonVisualContentPartProperties | Transform2D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** bwMode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** id. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Returns NonVisualContentPartProperties. */
    get nonVisualContentPartProperties(): NonVisualContentPartProperties | undefined;
    /** Returns Transform2D. */
    get transform2D(): Transform2D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the IsCanvas Class. Serialized as `a14:isCanvas` */
export declare class IsCanvas extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the CompatExtension Class. Serialized as `a14:compatExt` */
export declare class CompatExtension extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** spid. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
}
/** Defines the CameraTool Class. Serialized as `a14:cameraTool` */
export declare class CameraTool extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** cellRange. Serialized as `:cellRange` */
    get cellRange(): StringValue | undefined;
    set cellRange(v: StringValue | undefined);
    /** spid. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
}
export declare function initOffice2010DrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
