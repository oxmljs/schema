import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { Int64Value } from '../../../../framework/types/Int64Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt64Value } from '../../../../framework/types/UInt64Value';
import { BlackWhiteModeValues } from '../../../Drawing';
import { BlipCompressionValues } from '../../../Drawing';
import { Transform2D as ATransform2D } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { Outline as AOutline } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { Shape3DType as AShape3DType } from '../../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../../Drawing';
import { EmbeddedAnimation as A3danimEmbeddedAnimation } from '../../../Office2019/Drawing/Animation/Model3D';
import { PosterFrame as A3danimPosterFrame } from '../../../Office2019/Drawing/Animation/Model3D';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../../Drawing';
import { HslColor as AHslColor } from '../../../Drawing';
import { SystemColor as ASystemColor } from '../../../Drawing';
import { SchemeColor as ASchemeColor } from '../../../Drawing';
import { PresetColor as APresetColor } from '../../../Drawing';
import { AlphaBiLevel as AAlphaBiLevel } from '../../../Drawing';
import { AlphaCeiling as AAlphaCeiling } from '../../../Drawing';
import { AlphaFloor as AAlphaFloor } from '../../../Drawing';
import { AlphaInverse as AAlphaInverse } from '../../../Drawing';
import { AlphaModulationEffect as AAlphaModulationEffect } from '../../../Drawing';
import { AlphaModulationFixed as AAlphaModulationFixed } from '../../../Drawing';
import { AlphaReplace as AAlphaReplace } from '../../../Drawing';
import { BiLevel as ABiLevel } from '../../../Drawing';
import { Blur as ABlur } from '../../../Drawing';
import { ColorChange as AColorChange } from '../../../Drawing';
import { ColorReplacement as AColorReplacement } from '../../../Drawing';
import { Duotone as ADuotone } from '../../../Drawing';
import { FillOverlay as AFillOverlay } from '../../../Drawing';
import { Grayscale as AGrayscale } from '../../../Drawing';
import { Hsl as AHsl } from '../../../Drawing';
import { LuminanceEffect as ALuminanceEffect } from '../../../Drawing';
import { TintEffect as ATintEffect } from '../../../Drawing';
import { BlipExtensionList as ABlipExtensionList } from '../../../Drawing';
import { Extension as AExtension } from '../../../Drawing';
/** Defines the UnknownLight Class. Serialized as `am3d:unkLight` */
export declare class UnknownLight extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the DirectionalLight Class. Serialized as `am3d:dirLight` */
export declare class DirectionalLight extends OxmlCompositeElement<ColorType | IlluminancePositiveRatio | PosPoint3D | LookAtPoint3D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** angularRad. Serialized as `:angularRad` */
    get angularRad(): Int32Value | undefined;
    set angularRad(v: Int32Value | undefined);
    /** Returns ColorType. */
    get colorType(): ColorType | undefined;
    /** Returns IlluminancePositiveRatio. */
    get illuminancePositiveRatio(): IlluminancePositiveRatio | undefined;
    /** Returns PosPoint3D. */
    get posPoint3D(): PosPoint3D | undefined;
    /** Returns LookAtPoint3D. */
    get lookAtPoint3D(): LookAtPoint3D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the SpotLight Class. Serialized as `am3d:spotLight` */
export declare class SpotLight extends OxmlCompositeElement<ColorType | IntensityPositiveRatio | PosPoint3D | LookAtPoint3D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** rad. Serialized as `:rad` */
    get rad(): Int64Value | undefined;
    set rad(v: Int64Value | undefined);
    /** spotAng. Serialized as `:spotAng` */
    get spotAng(): Int32Value | undefined;
    set spotAng(v: Int32Value | undefined);
    /** Returns ColorType. */
    get colorType(): ColorType | undefined;
    /** Returns IntensityPositiveRatio. */
    get intensityPositiveRatio(): IntensityPositiveRatio | undefined;
    /** Returns PosPoint3D. */
    get posPoint3D(): PosPoint3D | undefined;
    /** Returns LookAtPoint3D. */
    get lookAtPoint3D(): LookAtPoint3D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the PointLight Class. Serialized as `am3d:ptLight` */
export declare class PointLight extends OxmlCompositeElement<ColorType | IntensityPositiveRatio | PosPoint3D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** rad. Serialized as `:rad` */
    get rad(): Int64Value | undefined;
    set rad(v: Int64Value | undefined);
    /** Returns ColorType. */
    get colorType(): ColorType | undefined;
    /** Returns IntensityPositiveRatio. */
    get intensityPositiveRatio(): IntensityPositiveRatio | undefined;
    /** Returns PosPoint3D. */
    get posPoint3D(): PosPoint3D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Ambient light in a scene. Serialized as `am3d:ambientLight` */
export declare class AmbientLight extends OxmlCompositeElement<ColorType | IlluminancePositiveRatio | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** Returns ColorType. */
    get colorType(): ColorType | undefined;
    /** Returns IlluminancePositiveRatio. */
    get illuminancePositiveRatio(): IlluminancePositiveRatio | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the WindowViewport Class. Serialized as `am3d:winViewport` */
export declare class WindowViewport extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the ObjectViewport Class. Serialized as `am3d:objViewport` */
export declare class ObjectViewport extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** viewportSz. Serialized as `:viewportSz` */
    get viewportSz(): Int64Value | undefined;
    set viewportSz(v: Int64Value | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Future Model3D extensions. Serialized as `am3d:extLst` */
export declare class Model3DExtensionList extends OxmlCompositeElement<Model3DExtension> {
    static _Q: string;
}
/** Defines the Model3DRaster Class. Serialized as `am3d:raster` */
export declare class Model3DRaster extends OxmlCompositeElement<Blip> {
    static _Q: string;
    static _A: string[];
    /** rName. Serialized as `:rName` */
    get rName(): StringValue | undefined;
    set rName(v: StringValue | undefined);
    /** rVer. Serialized as `:rVer` */
    get rVer(): StringValue | undefined;
    set rVer(v: StringValue | undefined);
    /** Returns Blip. */
    get blip(): Blip | undefined;
}
/** Optional source attribution URL describes from whence the 3D model came.. Serialized as `am3d:attrSrcUrl` */
export declare class PictureAttributionSourceURL extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the Model3DTransform Class. Serialized as `am3d:trans` */
export declare class Model3DTransform extends OxmlCompositeElement<MeterPerModelUnitPositiveRatio | PreTransVector3D | Scale3D | Rotate3D | PostTransVector3D | OfficeArtExtensionList> {
    static _Q: string;
    /** Returns MeterPerModelUnitPositiveRatio. */
    get meterPerModelUnitPositiveRatio(): MeterPerModelUnitPositiveRatio | undefined;
    /** Returns PreTransVector3D. */
    get preTransVector3D(): PreTransVector3D | undefined;
    /** Returns Scale3D. */
    get scale3D(): Scale3D | undefined;
    /** Returns Rotate3D. */
    get rotate3D(): Rotate3D | undefined;
    /** Returns PostTransVector3D. */
    get postTransVector3D(): PostTransVector3D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the Model3DCamera Class. Serialized as `am3d:camera` */
export declare class Model3DCamera extends OxmlCompositeElement<PosPoint3D | UpVector3D | LookAtPoint3D | OrthographicProjection | PerspectiveProjection | OfficeArtExtensionList> {
    static _Q: string;
    /** Returns PosPoint3D. */
    get posPoint3D(): PosPoint3D | undefined;
    /** Returns UpVector3D. */
    get upVector3D(): UpVector3D | undefined;
    /** Returns LookAtPoint3D. */
    get lookAtPoint3D(): LookAtPoint3D | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `am3d:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the Model3DExtension Class. Serialized as `am3d:ext` */
export declare class Model3DExtension extends OxmlCompositeElement<A3danimEmbeddedAnimation | A3danimPosterFrame> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A3danimEmbeddedAnimation. */
    get embeddedAnimation(): A3danimEmbeddedAnimation | undefined;
    /** Returns A3danimPosterFrame. */
    get posterFrame(): A3danimPosterFrame | undefined;
}
/** Defines the ColorType Class. Serialized as `am3d:clr` */
export declare class ColorType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _Q: string;
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Defines the Blip Class. Serialized as `am3d:blip` */
export declare class Blip extends OxmlCompositeElement<AAlphaBiLevel | AAlphaCeiling | AAlphaFloor | AAlphaInverse | AAlphaModulationEffect | AAlphaModulationFixed | AAlphaReplace | ABiLevel | ABlur | AColorChange | AColorReplacement | ADuotone | AFillOverlay | AGrayscale | AHsl | ALuminanceEffect | ATintEffect | ABlipExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Compression state for blips.. Serialized as `:cstate` */
    get compressionState(): BlipCompressionValues | undefined;
    set compressionState(v: BlipCompressionValues | undefined);
}
/** Defines the PerspectiveProjection Class. Serialized as `am3d:perspective` */
export declare class PerspectiveProjection extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** fov. Serialized as `:fov` */
    get fov(): Int32Value | undefined;
    set fov(v: Int32Value | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OrthographicProjection Class. Serialized as `am3d:orthographic` */
export declare class OrthographicProjection extends OxmlCompositeElement<SzPositiveRatio | OfficeArtExtensionList> {
    static _Q: string;
    /** Returns SzPositiveRatio. */
    get szPositiveRatio(): SzPositiveRatio | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OpenXmlPoint3DElement Class. */
export declare abstract class OpenXmlPoint3DElement extends OxmlLeafElement {
    static _A: string[];
    /** X-Coordinate in 3D. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Coordinate in 3D. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
    /** Z-Coordinate in 3D. Serialized as `:z` */
    get z(): Int64Value | undefined;
    set z(v: Int64Value | undefined);
}
/** Defines the LookAtPoint3D Class. Serialized as `am3d:lookAt` */
export declare class LookAtPoint3D extends OpenXmlPoint3DElement {
    static _Q: string;
}
/** Defines the PosPoint3D Class. Serialized as `am3d:pos` */
export declare class PosPoint3D extends OpenXmlPoint3DElement {
    static _Q: string;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `am3d:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the Rotate3D Class. Serialized as `am3d:rot` */
export declare class Rotate3D extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** ax. Serialized as `:ax` */
    get ax(): Int32Value | undefined;
    set ax(v: Int32Value | undefined);
    /** ay. Serialized as `:ay` */
    get ay(): Int32Value | undefined;
    set ay(v: Int32Value | undefined);
    /** az. Serialized as `:az` */
    get az(): Int32Value | undefined;
    set az(v: Int32Value | undefined);
}
/** Defines the Scale3D Class. Serialized as `am3d:scale` */
export declare class Scale3D extends OxmlCompositeElement<SxRatio | SyRatio | SzRatio> {
    static _Q: string;
    /** Returns SxRatio. */
    get sxRatio(): SxRatio | undefined;
    /** Returns SyRatio. */
    get syRatio(): SyRatio | undefined;
    /** Returns SzRatio. */
    get szRatio(): SzRatio | undefined;
}
/** Defines the Vector3DType Class. */
export declare abstract class Vector3DType extends OxmlLeafElement {
    static _A: string[];
    /** Distance along X-axis in 3D. Serialized as `:dx` */
    get dx(): Int64Value | undefined;
    set dx(v: Int64Value | undefined);
    /** Distance along Y-axis in 3D. Serialized as `:dy` */
    get dy(): Int64Value | undefined;
    set dy(v: Int64Value | undefined);
    /** Distance along Z-axis in 3D. Serialized as `:dz` */
    get dz(): Int64Value | undefined;
    set dz(v: Int64Value | undefined);
}
/** Defines the UpVector3D Class. Serialized as `am3d:up` */
export declare class UpVector3D extends Vector3DType {
    static _Q: string;
}
/** Defines the PostTransVector3D Class. Serialized as `am3d:postTrans` */
export declare class PostTransVector3D extends Vector3DType {
    static _Q: string;
}
/** Defines the PreTransVector3D Class. Serialized as `am3d:preTrans` */
export declare class PreTransVector3D extends Vector3DType {
    static _Q: string;
}
/** Defines the OpenXmlPositiveRatioElement Class. */
export declare abstract class OpenXmlPositiveRatioElement extends OxmlLeafElement {
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): UInt64Value | undefined;
    set n(v: UInt64Value | undefined);
    /** d. Serialized as `:d` */
    get d(): UInt64Value | undefined;
    set d(v: UInt64Value | undefined);
}
/** Defines the IntensityPositiveRatio Class. Serialized as `am3d:intensity` */
export declare class IntensityPositiveRatio extends OpenXmlPositiveRatioElement {
    static _Q: string;
}
/** Defines the IlluminancePositiveRatio Class. Serialized as `am3d:illuminance` */
export declare class IlluminancePositiveRatio extends OpenXmlPositiveRatioElement {
    static _Q: string;
}
/** Defines the SzPositiveRatio Class. Serialized as `am3d:sz` */
export declare class SzPositiveRatio extends OpenXmlPositiveRatioElement {
    static _Q: string;
}
/** Defines the MeterPerModelUnitPositiveRatio Class. Serialized as `am3d:meterPerModelUnit` */
export declare class MeterPerModelUnitPositiveRatio extends OpenXmlPositiveRatioElement {
    static _Q: string;
}
/** Defines the RatioType Class. */
export declare abstract class RatioType extends OxmlLeafElement {
    static _A: string[];
    /** Numerator. Serialized as `:n` */
    get numerator(): Int32Value | undefined;
    set numerator(v: Int32Value | undefined);
    /** Denominator. Serialized as `:d` */
    get denominator(): Int32Value | undefined;
    set denominator(v: Int32Value | undefined);
}
/** Defines the SzRatio Class. Serialized as `am3d:sz` */
export declare class SzRatio extends RatioType {
    static _Q: string;
}
/** Defines the SyRatio Class. Serialized as `am3d:sy` */
export declare class SyRatio extends RatioType {
    static _Q: string;
}
/** Defines the SxRatio Class. Serialized as `am3d:sx` */
export declare class SxRatio extends RatioType {
    static _Q: string;
}
/** Defines the Model3D Class. Serialized as `am3d:model3d` */
export declare class Model3D extends OxmlCompositeElement<ShapeProperties | Model3DCamera | Model3DTransform | PictureAttributionSourceURL | Model3DRaster | Model3DExtensionList | ObjectViewport | WindowViewport | AmbientLight | PointLight | SpotLight | DirectionalLight | UnknownLight> {
    static _Q: string;
    static _A: string[];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns Model3DCamera. */
    get model3DCamera(): Model3DCamera | undefined;
    /** Returns Model3DTransform. */
    get model3DTransform(): Model3DTransform | undefined;
    /** Optional source attribution URL describes from whence the 3D model came.. */
    get pictureAttributionSourceURL(): PictureAttributionSourceURL | undefined;
    /** Returns Model3DRaster. */
    get model3DRaster(): Model3DRaster | undefined;
    /** Future Model3D extensions. */
    get model3DExtensionList(): Model3DExtensionList | undefined;
}
export declare function initOffice2019DrawingModel3DNamespace(): {
    prefix: string;
    xmlns: string;
};
