import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { BlackWhiteModeValues } from '../../Drawing';
import { Transform2D as ATransform2D } from '../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../Drawing';
import { NoFill as ANoFill } from '../../Drawing';
import { SolidFill as ASolidFill } from '../../Drawing';
import { GradientFill as AGradientFill } from '../../Drawing';
import { BlipFill as ABlipFill } from '../../Drawing';
import { PatternFill as APatternFill } from '../../Drawing';
import { GroupFill as AGroupFill } from '../../Drawing';
import { Outline as AOutline } from '../../Drawing';
import { EffectList as AEffectList } from '../../Drawing';
import { EffectDag as AEffectDag } from '../../Drawing';
import { Scene3DType as AScene3DType } from '../../Drawing';
import { Shape3DType as AShape3DType } from '../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../Drawing';
import { Blip as ABlip } from '../../Drawing';
import { SourceRectangle as ASourceRectangle } from '../../Drawing';
import { Tile as ATile } from '../../Drawing';
import { Stretch as AStretch } from '../../Drawing';
import { PictureLocks as APictureLocks } from '../../Drawing';
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from '../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { ShapeStyle as Pic14ShapeStyle } from '../../Office2010/Drawing/Pictures';
import { OfficeArtExtensionList as Pic14OfficeArtExtensionList } from '../../Office2010/Drawing/Pictures';
/** Shape Properties. Serialized as `pic:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Picture Fill. Serialized as `pic:blipFill` */
export declare class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {
    static _Q: string;
    static _A: string[];
    /** DPI Setting. Serialized as `:dpi` */
    get dpi(): UInt32Value | undefined;
    set dpi(v: UInt32Value | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** Returns ABlip. */
    get blip(): ABlip | undefined;
    /** Source Rectangle. */
    get sourceRectangle(): ASourceRectangle | undefined;
}
/** Non-Visual Picture Properties. Serialized as `pic:nvPicPr` */
export declare class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Picture Drawing Properties. */
    get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined;
}
/** Non-Visual Picture Drawing Properties. Serialized as `pic:cNvPicPr` */
export declare class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    get preferRelativeResize(): BooleanValue | undefined;
    set preferRelativeResize(v: BooleanValue | undefined);
    /** Returns APictureLocks. */
    get pictureLocks(): APictureLocks | undefined;
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined;
}
/** Non-Visual Drawing Properties. Serialized as `pic:cNvPr` */
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
/** Picture. Serialized as `pic:pic` */
export declare class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | Pic14ShapeStyle | Pic14OfficeArtExtensionList> {
    static _Q: string;
    /** Non-Visual Picture Properties. */
    get nonVisualPictureProperties(): NonVisualPictureProperties | undefined;
    /** Picture Fill. */
    get blipFill(): BlipFill | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns Pic14ShapeStyle. */
    get shapeStyle(): Pic14ShapeStyle | undefined;
    /** Returns Pic14OfficeArtExtensionList. */
    get officeArtExtensionList(): Pic14OfficeArtExtensionList | undefined;
}
export declare function initDrawingPicturesNamespace(): {
    prefix: string;
    xmlns: string;
};
