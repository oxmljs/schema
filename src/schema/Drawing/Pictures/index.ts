import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';import { Transform2D as ATransform2D } from '../../Drawing';
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
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'pic:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Picture Fill. Serialized as `pic:blipFill` */
export class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {

    public static override _Q = 'pic:blipFill';
    public static override _A = [':dpi',':rotWithShape',];
    /** DPI Setting. Serialized as `:dpi` */
    public get dpi(): UInt32Value | undefined { return this._g(':dpi'); }
    public set dpi(v: UInt32Value | undefined) { this._s(':dpi', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** Returns ABlip. */
    public get blip(): ABlip | undefined { return this._f(ABlip); }
    /** Source Rectangle. */
    public get sourceRectangle(): ASourceRectangle | undefined { return this._f(ASourceRectangle); }

}
/** Non-Visual Picture Properties. Serialized as `pic:nvPicPr` */
export class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {

    public static override _Q = 'pic:nvPicPr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Picture Drawing Properties. */
    public get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined { return this._f(NonVisualPictureDrawingProperties); }

}
/** Non-Visual Picture Drawing Properties. Serialized as `pic:cNvPicPr` */
export class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {

    public static override _Q = 'pic:cNvPicPr';
    public static override _A = [':preferRelativeResize',];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    public get preferRelativeResize(): BooleanValue | undefined { return this._g(':preferRelativeResize'); }
    public set preferRelativeResize(v: BooleanValue | undefined) { this._s(':preferRelativeResize', v); }
    /** Returns APictureLocks. */
    public get pictureLocks(): APictureLocks | undefined { return this._f(APictureLocks); }
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    public get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined { return this._f(ANonVisualPicturePropertiesExtensionList); }

}
/** Non-Visual Drawing Properties. Serialized as `pic:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'pic:cNvPr';
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
/** Picture. Serialized as `pic:pic` */
export class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | Pic14ShapeStyle | Pic14OfficeArtExtensionList> {

    public static override _Q = 'pic:pic';
    /** Non-Visual Picture Properties. */
    public get nonVisualPictureProperties(): NonVisualPictureProperties | undefined { return this._f(NonVisualPictureProperties); }
    /** Picture Fill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns Pic14ShapeStyle. */
    public get shapeStyle(): Pic14ShapeStyle | undefined { return this._f(Pic14ShapeStyle); }
    /** Returns Pic14OfficeArtExtensionList. */
    public get officeArtExtensionList(): Pic14OfficeArtExtensionList | undefined { return this._f(Pic14OfficeArtExtensionList); }

}

export function initDrawingPicturesNamespace() {
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
    BlipFill._C = {
        'a:blip': ABlip,
        'a:srcRect': ASourceRectangle,
        'a:tile': ATile,
        'a:stretch': AStretch,
    };
    BlipFill._D = {
        ':dpi': new OxmlAttr(':dpi', OxmlType.UInt32Value),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    NonVisualPictureProperties._C = {
        'pic:cNvPr': NonVisualDrawingProperties,
        'pic:cNvPicPr': NonVisualPictureDrawingProperties,
    };
    NonVisualPictureDrawingProperties._C = {
        'a:picLocks': APictureLocks,
        'a:extLst': ANonVisualPicturePropertiesExtensionList,
    };
    NonVisualPictureDrawingProperties._D = {
        ':preferRelativeResize': new OxmlAttr(':preferRelativeResize', OxmlType.BooleanValue),
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
    Picture._C = {
        'pic:nvPicPr': NonVisualPictureProperties,
        'pic:blipFill': BlipFill,
        'pic:spPr': ShapeProperties,
        'pic14:style': Pic14ShapeStyle,
        'pic14:extLst': Pic14OfficeArtExtensionList,
    };
    return {
        prefix: 'pic',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/picture',
    };
}
