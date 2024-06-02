import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { Int64Value } from '../../../../framework/types/Int64Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt64Value } from '../../../../framework/types/UInt64Value';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';
import { BlipCompressionValues, BlipCompressionValuesArray } from '../../../Drawing';import { Transform2D as ATransform2D } from '../../../Drawing';
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
export class UnknownLight extends OxmlLeafElement {

    public static override _Q = 'am3d:unkLight';

}
/** Defines the DirectionalLight Class. Serialized as `am3d:dirLight` */
export class DirectionalLight extends OxmlCompositeElement<ColorType | IlluminancePositiveRatio | PosPoint3D | LookAtPoint3D | OfficeArtExtensionList> {

    public static override _Q = 'am3d:dirLight';
    public static override _A = [':enabled',':angularRad',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** angularRad. Serialized as `:angularRad` */
    public get angularRad(): Int32Value | undefined { return this._g(':angularRad'); }
    public set angularRad(v: Int32Value | undefined) { this._s(':angularRad', v); }
    /** Returns ColorType. */
    public get colorType(): ColorType | undefined { return this._f(ColorType); }
    /** Returns IlluminancePositiveRatio. */
    public get illuminancePositiveRatio(): IlluminancePositiveRatio | undefined { return this._f(IlluminancePositiveRatio); }
    /** Returns PosPoint3D. */
    public get posPoint3D(): PosPoint3D | undefined { return this._f(PosPoint3D); }
    /** Returns LookAtPoint3D. */
    public get lookAtPoint3D(): LookAtPoint3D | undefined { return this._f(LookAtPoint3D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the SpotLight Class. Serialized as `am3d:spotLight` */
export class SpotLight extends OxmlCompositeElement<ColorType | IntensityPositiveRatio | PosPoint3D | LookAtPoint3D | OfficeArtExtensionList> {

    public static override _Q = 'am3d:spotLight';
    public static override _A = [':enabled',':rad',':spotAng',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** rad. Serialized as `:rad` */
    public get rad(): Int64Value | undefined { return this._g(':rad'); }
    public set rad(v: Int64Value | undefined) { this._s(':rad', v); }
    /** spotAng. Serialized as `:spotAng` */
    public get spotAng(): Int32Value | undefined { return this._g(':spotAng'); }
    public set spotAng(v: Int32Value | undefined) { this._s(':spotAng', v); }
    /** Returns ColorType. */
    public get colorType(): ColorType | undefined { return this._f(ColorType); }
    /** Returns IntensityPositiveRatio. */
    public get intensityPositiveRatio(): IntensityPositiveRatio | undefined { return this._f(IntensityPositiveRatio); }
    /** Returns PosPoint3D. */
    public get posPoint3D(): PosPoint3D | undefined { return this._f(PosPoint3D); }
    /** Returns LookAtPoint3D. */
    public get lookAtPoint3D(): LookAtPoint3D | undefined { return this._f(LookAtPoint3D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the PointLight Class. Serialized as `am3d:ptLight` */
export class PointLight extends OxmlCompositeElement<ColorType | IntensityPositiveRatio | PosPoint3D | OfficeArtExtensionList> {

    public static override _Q = 'am3d:ptLight';
    public static override _A = [':enabled',':rad',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** rad. Serialized as `:rad` */
    public get rad(): Int64Value | undefined { return this._g(':rad'); }
    public set rad(v: Int64Value | undefined) { this._s(':rad', v); }
    /** Returns ColorType. */
    public get colorType(): ColorType | undefined { return this._f(ColorType); }
    /** Returns IntensityPositiveRatio. */
    public get intensityPositiveRatio(): IntensityPositiveRatio | undefined { return this._f(IntensityPositiveRatio); }
    /** Returns PosPoint3D. */
    public get posPoint3D(): PosPoint3D | undefined { return this._f(PosPoint3D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Ambient light in a scene. Serialized as `am3d:ambientLight` */
export class AmbientLight extends OxmlCompositeElement<ColorType | IlluminancePositiveRatio | OfficeArtExtensionList> {

    public static override _Q = 'am3d:ambientLight';
    public static override _A = [':enabled',];
    /** enabled. Serialized as `:enabled` */
    public get enabled(): BooleanValue | undefined { return this._g(':enabled'); }
    public set enabled(v: BooleanValue | undefined) { this._s(':enabled', v); }
    /** Returns ColorType. */
    public get colorType(): ColorType | undefined { return this._f(ColorType); }
    /** Returns IlluminancePositiveRatio. */
    public get illuminancePositiveRatio(): IlluminancePositiveRatio | undefined { return this._f(IlluminancePositiveRatio); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the WindowViewport Class. Serialized as `am3d:winViewport` */
export class WindowViewport extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'am3d:winViewport';
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the ObjectViewport Class. Serialized as `am3d:objViewport` */
export class ObjectViewport extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'am3d:objViewport';
    public static override _A = [':viewportSz',];
    /** viewportSz. Serialized as `:viewportSz` */
    public get viewportSz(): Int64Value | undefined { return this._g(':viewportSz'); }
    public set viewportSz(v: Int64Value | undefined) { this._s(':viewportSz', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Future Model3D extensions. Serialized as `am3d:extLst` */
export class Model3DExtensionList extends OxmlCompositeElement<Model3DExtension> {

    public static override _Q = 'am3d:extLst';

}
/** Defines the Model3DRaster Class. Serialized as `am3d:raster` */
export class Model3DRaster extends OxmlCompositeElement<Blip> {

    public static override _Q = 'am3d:raster';
    public static override _A = [':rName',':rVer',];
    /** rName. Serialized as `:rName` */
    public get rName(): StringValue | undefined { return this._g(':rName'); }
    public set rName(v: StringValue | undefined) { this._s(':rName', v); }
    /** rVer. Serialized as `:rVer` */
    public get rVer(): StringValue | undefined { return this._g(':rVer'); }
    public set rVer(v: StringValue | undefined) { this._s(':rVer', v); }
    /** Returns Blip. */
    public get blip(): Blip | undefined { return this._f(Blip); }

}
/** Optional source attribution URL describes from whence the 3D model came.. Serialized as `am3d:attrSrcUrl` */
export class PictureAttributionSourceURL extends OxmlLeafElement {

    public static override _Q = 'am3d:attrSrcUrl';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the Model3DTransform Class. Serialized as `am3d:trans` */
export class Model3DTransform extends OxmlCompositeElement<MeterPerModelUnitPositiveRatio | PreTransVector3D | Scale3D | Rotate3D | PostTransVector3D | OfficeArtExtensionList> {

    public static override _Q = 'am3d:trans';
    /** Returns MeterPerModelUnitPositiveRatio. */
    public get meterPerModelUnitPositiveRatio(): MeterPerModelUnitPositiveRatio | undefined { return this._f(MeterPerModelUnitPositiveRatio); }
    /** Returns PreTransVector3D. */
    public get preTransVector3D(): PreTransVector3D | undefined { return this._f(PreTransVector3D); }
    /** Returns Scale3D. */
    public get scale3D(): Scale3D | undefined { return this._f(Scale3D); }
    /** Returns Rotate3D. */
    public get rotate3D(): Rotate3D | undefined { return this._f(Rotate3D); }
    /** Returns PostTransVector3D. */
    public get postTransVector3D(): PostTransVector3D | undefined { return this._f(PostTransVector3D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the Model3DCamera Class. Serialized as `am3d:camera` */
export class Model3DCamera extends OxmlCompositeElement<PosPoint3D | UpVector3D | LookAtPoint3D | OrthographicProjection | PerspectiveProjection | OfficeArtExtensionList> {

    public static override _Q = 'am3d:camera';
    /** Returns PosPoint3D. */
    public get posPoint3D(): PosPoint3D | undefined { return this._f(PosPoint3D); }
    /** Returns UpVector3D. */
    public get upVector3D(): UpVector3D | undefined { return this._f(UpVector3D); }
    /** Returns LookAtPoint3D. */
    public get lookAtPoint3D(): LookAtPoint3D | undefined { return this._f(LookAtPoint3D); }

}
/** Defines the ShapeProperties Class. Serialized as `am3d:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'am3d:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the Model3DExtension Class. Serialized as `am3d:ext` */
export class Model3DExtension extends OxmlCompositeElement<A3danimEmbeddedAnimation | A3danimPosterFrame> {

    public static override _Q = 'am3d:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A3danimEmbeddedAnimation. */
    public get embeddedAnimation(): A3danimEmbeddedAnimation | undefined { return this._f(A3danimEmbeddedAnimation); }
    /** Returns A3danimPosterFrame. */
    public get posterFrame(): A3danimPosterFrame | undefined { return this._f(A3danimPosterFrame); }

}
/** Defines the ColorType Class. Serialized as `am3d:clr` */
export class ColorType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _Q = 'am3d:clr';
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Defines the Blip Class. Serialized as `am3d:blip` */
export class Blip extends OxmlCompositeElement<AAlphaBiLevel | AAlphaCeiling | AAlphaFloor | AAlphaInverse | AAlphaModulationEffect | AAlphaModulationFixed | AAlphaReplace | ABiLevel | ABlur | AColorChange | AColorReplacement | ADuotone | AFillOverlay | AGrayscale | AHsl | ALuminanceEffect | ATintEffect | ABlipExtensionList> {

    public static override _Q = 'am3d:blip';
    public static override _A = ['r:embed','r:link',':cstate',];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Compression state for blips.. Serialized as `:cstate` */
    public get compressionState(): BlipCompressionValues | undefined { return this._g(':cstate'); }
    public set compressionState(v: BlipCompressionValues | undefined) { this._s(':cstate', v); }

}
/** Defines the PerspectiveProjection Class. Serialized as `am3d:perspective` */
export class PerspectiveProjection extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'am3d:perspective';
    public static override _A = [':fov',];
    /** fov. Serialized as `:fov` */
    public get fov(): Int32Value | undefined { return this._g(':fov'); }
    public set fov(v: Int32Value | undefined) { this._s(':fov', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OrthographicProjection Class. Serialized as `am3d:orthographic` */
export class OrthographicProjection extends OxmlCompositeElement<SzPositiveRatio | OfficeArtExtensionList> {

    public static override _Q = 'am3d:orthographic';
    /** Returns SzPositiveRatio. */
    public get szPositiveRatio(): SzPositiveRatio | undefined { return this._f(SzPositiveRatio); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OpenXmlPoint3DElement Class. */
export abstract class OpenXmlPoint3DElement extends OxmlLeafElement {

    public static override _A = [':x',':y',':z',];
    /** X-Coordinate in 3D. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Coordinate in 3D. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }
    /** Z-Coordinate in 3D. Serialized as `:z` */
    public get z(): Int64Value | undefined { return this._g(':z'); }
    public set z(v: Int64Value | undefined) { this._s(':z', v); }

}
/** Defines the LookAtPoint3D Class. Serialized as `am3d:lookAt` */
export class LookAtPoint3D extends OpenXmlPoint3DElement {

    public static override _Q = 'am3d:lookAt';

}
/** Defines the PosPoint3D Class. Serialized as `am3d:pos` */
export class PosPoint3D extends OpenXmlPoint3DElement {

    public static override _Q = 'am3d:pos';

}
/** Defines the OfficeArtExtensionList Class. Serialized as `am3d:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'am3d:extLst';

}
/** Defines the Rotate3D Class. Serialized as `am3d:rot` */
export class Rotate3D extends OxmlLeafElement {

    public static override _Q = 'am3d:rot';
    public static override _A = [':ax',':ay',':az',];
    /** ax. Serialized as `:ax` */
    public get ax(): Int32Value | undefined { return this._g(':ax'); }
    public set ax(v: Int32Value | undefined) { this._s(':ax', v); }
    /** ay. Serialized as `:ay` */
    public get ay(): Int32Value | undefined { return this._g(':ay'); }
    public set ay(v: Int32Value | undefined) { this._s(':ay', v); }
    /** az. Serialized as `:az` */
    public get az(): Int32Value | undefined { return this._g(':az'); }
    public set az(v: Int32Value | undefined) { this._s(':az', v); }

}
/** Defines the Scale3D Class. Serialized as `am3d:scale` */
export class Scale3D extends OxmlCompositeElement<SxRatio | SyRatio | SzRatio> {

    public static override _Q = 'am3d:scale';
    /** Returns SxRatio. */
    public get sxRatio(): SxRatio | undefined { return this._f(SxRatio); }
    /** Returns SyRatio. */
    public get syRatio(): SyRatio | undefined { return this._f(SyRatio); }
    /** Returns SzRatio. */
    public get szRatio(): SzRatio | undefined { return this._f(SzRatio); }

}
/** Defines the Vector3DType Class. */
export abstract class Vector3DType extends OxmlLeafElement {

    public static override _A = [':dx',':dy',':dz',];
    /** Distance along X-axis in 3D. Serialized as `:dx` */
    public get dx(): Int64Value | undefined { return this._g(':dx'); }
    public set dx(v: Int64Value | undefined) { this._s(':dx', v); }
    /** Distance along Y-axis in 3D. Serialized as `:dy` */
    public get dy(): Int64Value | undefined { return this._g(':dy'); }
    public set dy(v: Int64Value | undefined) { this._s(':dy', v); }
    /** Distance along Z-axis in 3D. Serialized as `:dz` */
    public get dz(): Int64Value | undefined { return this._g(':dz'); }
    public set dz(v: Int64Value | undefined) { this._s(':dz', v); }

}
/** Defines the UpVector3D Class. Serialized as `am3d:up` */
export class UpVector3D extends Vector3DType {

    public static override _Q = 'am3d:up';

}
/** Defines the PostTransVector3D Class. Serialized as `am3d:postTrans` */
export class PostTransVector3D extends Vector3DType {

    public static override _Q = 'am3d:postTrans';

}
/** Defines the PreTransVector3D Class. Serialized as `am3d:preTrans` */
export class PreTransVector3D extends Vector3DType {

    public static override _Q = 'am3d:preTrans';

}
/** Defines the OpenXmlPositiveRatioElement Class. */
export abstract class OpenXmlPositiveRatioElement extends OxmlLeafElement {

    public static override _A = [':n',':d',];
    /** n. Serialized as `:n` */
    public get n(): UInt64Value | undefined { return this._g(':n'); }
    public set n(v: UInt64Value | undefined) { this._s(':n', v); }
    /** d. Serialized as `:d` */
    public get d(): UInt64Value | undefined { return this._g(':d'); }
    public set d(v: UInt64Value | undefined) { this._s(':d', v); }

}
/** Defines the IntensityPositiveRatio Class. Serialized as `am3d:intensity` */
export class IntensityPositiveRatio extends OpenXmlPositiveRatioElement {

    public static override _Q = 'am3d:intensity';

}
/** Defines the IlluminancePositiveRatio Class. Serialized as `am3d:illuminance` */
export class IlluminancePositiveRatio extends OpenXmlPositiveRatioElement {

    public static override _Q = 'am3d:illuminance';

}
/** Defines the SzPositiveRatio Class. Serialized as `am3d:sz` */
export class SzPositiveRatio extends OpenXmlPositiveRatioElement {

    public static override _Q = 'am3d:sz';

}
/** Defines the MeterPerModelUnitPositiveRatio Class. Serialized as `am3d:meterPerModelUnit` */
export class MeterPerModelUnitPositiveRatio extends OpenXmlPositiveRatioElement {

    public static override _Q = 'am3d:meterPerModelUnit';

}
/** Defines the RatioType Class. */
export abstract class RatioType extends OxmlLeafElement {

    public static override _A = [':n',':d',];
    /** Numerator. Serialized as `:n` */
    public get numerator(): Int32Value | undefined { return this._g(':n'); }
    public set numerator(v: Int32Value | undefined) { this._s(':n', v); }
    /** Denominator. Serialized as `:d` */
    public get denominator(): Int32Value | undefined { return this._g(':d'); }
    public set denominator(v: Int32Value | undefined) { this._s(':d', v); }

}
/** Defines the SzRatio Class. Serialized as `am3d:sz` */
export class SzRatio extends RatioType {

    public static override _Q = 'am3d:sz';

}
/** Defines the SyRatio Class. Serialized as `am3d:sy` */
export class SyRatio extends RatioType {

    public static override _Q = 'am3d:sy';

}
/** Defines the SxRatio Class. Serialized as `am3d:sx` */
export class SxRatio extends RatioType {

    public static override _Q = 'am3d:sx';

}
/** Defines the Model3D Class. Serialized as `am3d:model3d` */
export class Model3D extends OxmlCompositeElement<ShapeProperties | Model3DCamera | Model3DTransform | PictureAttributionSourceURL | Model3DRaster | Model3DExtensionList | ObjectViewport | WindowViewport | AmbientLight | PointLight | SpotLight | DirectionalLight | UnknownLight> {

    public static override _Q = 'am3d:model3d';
    public static override _A = ['r:embed','r:link',];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns Model3DCamera. */
    public get model3DCamera(): Model3DCamera | undefined { return this._f(Model3DCamera); }
    /** Returns Model3DTransform. */
    public get model3DTransform(): Model3DTransform | undefined { return this._f(Model3DTransform); }
    /** Optional source attribution URL describes from whence the 3D model came.. */
    public get pictureAttributionSourceURL(): PictureAttributionSourceURL | undefined { return this._f(PictureAttributionSourceURL); }
    /** Returns Model3DRaster. */
    public get model3DRaster(): Model3DRaster | undefined { return this._f(Model3DRaster); }
    /** Future Model3D extensions. */
    public get model3DExtensionList(): Model3DExtensionList | undefined { return this._f(Model3DExtensionList); }

}

export function initOffice2019DrawingModel3DNamespace() {
    DirectionalLight._C = {
        'am3d:clr': ColorType,
        'am3d:illuminance': IlluminancePositiveRatio,
        'am3d:pos': PosPoint3D,
        'am3d:lookAt': LookAtPoint3D,
        'am3d:extLst': OfficeArtExtensionList,
    };
    DirectionalLight._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':angularRad': new OxmlAttr(':angularRad', OxmlType.Int32Value),
    };
    SpotLight._C = {
        'am3d:clr': ColorType,
        'am3d:intensity': IntensityPositiveRatio,
        'am3d:pos': PosPoint3D,
        'am3d:lookAt': LookAtPoint3D,
        'am3d:extLst': OfficeArtExtensionList,
    };
    SpotLight._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':rad': new OxmlAttr(':rad', OxmlType.Int64Value),
        ':spotAng': new OxmlAttr(':spotAng', OxmlType.Int32Value),
    };
    PointLight._C = {
        'am3d:clr': ColorType,
        'am3d:intensity': IntensityPositiveRatio,
        'am3d:pos': PosPoint3D,
        'am3d:extLst': OfficeArtExtensionList,
    };
    PointLight._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
        ':rad': new OxmlAttr(':rad', OxmlType.Int64Value),
    };
    AmbientLight._C = {
        'am3d:clr': ColorType,
        'am3d:illuminance': IlluminancePositiveRatio,
        'am3d:extLst': OfficeArtExtensionList,
    };
    AmbientLight._D = {
        ':enabled': new OxmlAttr(':enabled', OxmlType.BooleanValue),
    };
    WindowViewport._C = {
        'am3d:extLst': OfficeArtExtensionList,
    };
    ObjectViewport._C = {
        'am3d:extLst': OfficeArtExtensionList,
    };
    ObjectViewport._D = {
        ':viewportSz': new OxmlAttr(':viewportSz', OxmlType.Int64Value),
    };
    Model3DExtensionList._C = {
        'am3d:ext': Model3DExtension,
    };
    Model3DRaster._C = {
        'am3d:blip': Blip,
    };
    Model3DRaster._D = {
        ':rName': new OxmlAttr(':rName', OxmlType.StringValue),
        ':rVer': new OxmlAttr(':rVer', OxmlType.StringValue),
    };
    PictureAttributionSourceURL._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Model3DTransform._C = {
        'am3d:meterPerModelUnit': MeterPerModelUnitPositiveRatio,
        'am3d:preTrans': PreTransVector3D,
        'am3d:scale': Scale3D,
        'am3d:rot': Rotate3D,
        'am3d:postTrans': PostTransVector3D,
        'am3d:extLst': OfficeArtExtensionList,
    };
    Model3DCamera._C = {
        'am3d:pos': PosPoint3D,
        'am3d:up': UpVector3D,
        'am3d:lookAt': LookAtPoint3D,
        'am3d:orthographic': OrthographicProjection,
        'am3d:perspective': PerspectiveProjection,
        'am3d:extLst': OfficeArtExtensionList,
    };
    ShapeProperties._C = {
        'a:xfrm': ATransform2D,
        'a:custGeom': ACustomGeometry,
        'a:prstGeom': APresetGeometry,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:extLst': AShapePropertiesExtensionList,
    };
    ShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    Model3DExtension._C = {
        'a3danim:embedAnim': A3danimEmbeddedAnimation,
        'a3danim:posterFrame': A3danimPosterFrame,
    };
    Model3DExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ColorType._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    Blip._C = {
        'a:alphaBiLevel': AAlphaBiLevel,
        'a:alphaCeiling': AAlphaCeiling,
        'a:alphaFloor': AAlphaFloor,
        'a:alphaInv': AAlphaInverse,
        'a:alphaMod': AAlphaModulationEffect,
        'a:alphaModFix': AAlphaModulationFixed,
        'a:alphaRepl': AAlphaReplace,
        'a:biLevel': ABiLevel,
        'a:blur': ABlur,
        'a:clrChange': AColorChange,
        'a:clrRepl': AColorReplacement,
        'a:duotone': ADuotone,
        'a:fillOverlay': AFillOverlay,
        'a:grayscl': AGrayscale,
        'a:hsl': AHsl,
        'a:lum': ALuminanceEffect,
        'a:tint': ATintEffect,
        'a:extLst': ABlipExtensionList,
    };
    Blip._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
        ':cstate': new OxmlAttr(':cstate', OxmlType.EnumValue, BlipCompressionValuesArray),
    };
    PerspectiveProjection._C = {
        'am3d:extLst': OfficeArtExtensionList,
    };
    PerspectiveProjection._D = {
        ':fov': new OxmlAttr(':fov', OxmlType.Int32Value),
    };
    OrthographicProjection._C = {
        'am3d:sz': SzPositiveRatio,
        'am3d:extLst': OfficeArtExtensionList,
    };
    OpenXmlPoint3DElement._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
        ':z': new OxmlAttr(':z', OxmlType.Int64Value),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    Rotate3D._D = {
        ':ax': new OxmlAttr(':ax', OxmlType.Int32Value),
        ':ay': new OxmlAttr(':ay', OxmlType.Int32Value),
        ':az': new OxmlAttr(':az', OxmlType.Int32Value),
    };
    Scale3D._C = {
        'am3d:sx': SxRatio,
        'am3d:sy': SyRatio,
        'am3d:sz': SzRatio,
    };
    Vector3DType._D = {
        ':dx': new OxmlAttr(':dx', OxmlType.Int64Value),
        ':dy': new OxmlAttr(':dy', OxmlType.Int64Value),
        ':dz': new OxmlAttr(':dz', OxmlType.Int64Value),
    };
    OpenXmlPositiveRatioElement._D = {
        ':n': new OxmlAttr(':n', OxmlType.UInt64Value),
        ':d': new OxmlAttr(':d', OxmlType.UInt64Value),
    };
    RatioType._D = {
        ':n': new OxmlAttr(':n', OxmlType.Int32Value),
        ':d': new OxmlAttr(':d', OxmlType.Int32Value),
    };
    Model3D._C = {
        'am3d:spPr': ShapeProperties,
        'am3d:camera': Model3DCamera,
        'am3d:trans': Model3DTransform,
        'am3d:attrSrcUrl': PictureAttributionSourceURL,
        'am3d:raster': Model3DRaster,
        'am3d:extLst': Model3DExtensionList,
        'am3d:objViewport': ObjectViewport,
        'am3d:winViewport': WindowViewport,
        'am3d:ambientLight': AmbientLight,
        'am3d:ptLight': PointLight,
        'am3d:spotLight': SpotLight,
        'am3d:dirLight': DirectionalLight,
        'am3d:unkLight': UnknownLight,
    };
    Model3D._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    return {
        prefix: 'am3d',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2017/model3d',
    };
}
