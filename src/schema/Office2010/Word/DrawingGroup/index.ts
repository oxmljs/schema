import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { Graphic as AGraphic } from '../../../Drawing';
import { TransformGroup as ATransformGroup } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { ExtensionList as AExtensionList } from '../../../Drawing';
import { GroupShapeLocks as AGroupShapeLocks } from '../../../Drawing';
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from '../../../Drawing';
import { Extension as AExtension } from '../../../Drawing';
import { Offset as AOffset } from '../../../Drawing';
import { Extents as AExtents } from '../../../Drawing';
import { GraphicFrameLocks as AGraphicFrameLocks } from '../../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../../Drawing';
import { WordprocessingShape as WpsWordprocessingShape } from '../../../Office2010/Word/DrawingShape';
import { Picture as PicPicture } from '../../../Drawing/Pictures';
import { ContentPart as W14ContentPart } from '../../../Office2010/Word';


/** Defines the GraphicFrame Class. Serialized as `wpg:graphicFrame` */
export class GraphicFrame extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameProperties | Transform2D | AGraphic | OfficeArtExtensionList> {

    public static override _Q = 'wpg:graphicFrame';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualGraphicFrameProperties. */
    public get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined { return this._f(NonVisualGraphicFrameProperties); }
    /** Returns Transform2D. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }
    /** Returns AGraphic. */
    public get graphic(): AGraphic | undefined { return this._f(AGraphic); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the GroupShapeProperties Class. Serialized as `wpg:grpSpPr` */
export class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {

    public static override _Q = 'wpg:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): ATransformGroup | undefined { return this._f(ATransformGroup); }

}
/** Defines the NonVisualGroupDrawingShapeProperties Class. Serialized as `wpg:cNvGrpSpPr` */
export class NonVisualGroupDrawingShapeProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'wpg:cNvGrpSpPr';
    /** Returns AGroupShapeLocks. */
    public get groupShapeLocks(): AGroupShapeLocks | undefined { return this._f(AGroupShapeLocks); }
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(ANonVisualGroupDrawingShapePropsExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `wpg:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'wpg:extLst';

}
/** Defines the Transform2D Class. Serialized as `wpg:xfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'wpg:xfrm';
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
/** Defines the NonVisualGraphicFrameProperties Class. Serialized as `wpg:cNvFrPr` */
export class NonVisualGraphicFrameProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {

    public static override _Q = 'wpg:cNvFrPr';
    /** Graphic Frame Locks. */
    public get graphicFrameLocks(): AGraphicFrameLocks | undefined { return this._f(AGraphicFrameLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `wpg:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'wpg:cNvPr';
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
/** Defines the WordprocessingGroupType Class. */
export abstract class WordprocessingGroupType extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupDrawingShapeProperties | GroupShapeProperties | WpsWordprocessingShape | GroupShape | GraphicFrame | PicPicture | W14ContentPart | OfficeArtExtensionList> {

    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualGroupDrawingShapeProperties. */
    public get nonVisualGroupDrawingShapeProperties(): NonVisualGroupDrawingShapeProperties | undefined { return this._f(NonVisualGroupDrawingShapeProperties); }
    /** Returns GroupShapeProperties. */
    public get groupShapeProperties(): GroupShapeProperties | undefined { return this._f(GroupShapeProperties); }

}
/** Defines the GroupShape Class. Serialized as `wpg:grpSp` */
export class GroupShape extends WordprocessingGroupType {

    public static override _Q = 'wpg:grpSp';

}
/** Defines the WordprocessingGroup Class. Serialized as `wpg:wgp` */
export class WordprocessingGroup extends WordprocessingGroupType {

    public static override _Q = 'wpg:wgp';

}

export function initOffice2010WordDrawingGroupNamespace() {
    GraphicFrame._C = {
        'wpg:cNvPr': NonVisualDrawingProperties,
        'wpg:cNvFrPr': NonVisualGraphicFrameProperties,
        'wpg:xfrm': Transform2D,
        'a:graphic': AGraphic,
        'wpg:extLst': OfficeArtExtensionList,
    };
    GroupShapeProperties._C = {
        'a:xfrm': ATransformGroup,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:extLst': AExtensionList,
    };
    GroupShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    NonVisualGroupDrawingShapeProperties._C = {
        'a:grpSpLocks': AGroupShapeLocks,
        'a:extLst': ANonVisualGroupDrawingShapePropsExtensionList,
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    Transform2D._C = {
        'a:off': AOffset,
        'a:ext': AExtents,
    };
    Transform2D._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    NonVisualGraphicFrameProperties._C = {
        'a:graphicFrameLocks': AGraphicFrameLocks,
        'a:extLst': AExtensionList,
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
    WordprocessingGroupType._C = {
        'wpg:cNvPr': NonVisualDrawingProperties,
        'wpg:cNvGrpSpPr': NonVisualGroupDrawingShapeProperties,
        'wpg:grpSpPr': GroupShapeProperties,
        'wps:wsp': WpsWordprocessingShape,
        'wpg:grpSp': GroupShape,
        'wpg:graphicFrame': GraphicFrame,
        'pic:pic': PicPicture,
        'w14:contentPart': W14ContentPart,
        'wpg:extLst': OfficeArtExtensionList,
    };
    GroupShape._C = {
        'wpg:cNvPr': NonVisualDrawingProperties,
        'wpg:cNvGrpSpPr': NonVisualGroupDrawingShapeProperties,
        'wpg:grpSpPr': GroupShapeProperties,
        'wps:wsp': WpsWordprocessingShape,
        'wpg:grpSp': GroupShape,
        'wpg:graphicFrame': GraphicFrame,
        'pic:pic': PicPicture,
        'w14:contentPart': W14ContentPart,
        'wpg:extLst': OfficeArtExtensionList,
    };
    WordprocessingGroup._C = {
        'wpg:cNvPr': NonVisualDrawingProperties,
        'wpg:cNvGrpSpPr': NonVisualGroupDrawingShapeProperties,
        'wpg:grpSpPr': GroupShapeProperties,
        'wps:wsp': WpsWordprocessingShape,
        'wpg:grpSp': GroupShape,
        'wpg:graphicFrame': GraphicFrame,
        'pic:pic': PicPicture,
        'w14:contentPart': W14ContentPart,
        'wpg:extLst': OfficeArtExtensionList,
    };
    return {
        prefix: 'wpg',
        xmlns: 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup',
    };
}
