import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { BlackWhiteModeValues } from '../../../Drawing';
import { Graphic as AGraphic } from '../../../Drawing';
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
export declare class GraphicFrame extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameProperties | Transform2D | AGraphic | OfficeArtExtensionList> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualGraphicFrameProperties. */
    get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined;
    /** Returns Transform2D. */
    get transform2D(): Transform2D | undefined;
    /** Returns AGraphic. */
    get graphic(): AGraphic | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the GroupShapeProperties Class. Serialized as `wpg:grpSpPr` */
export declare class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): ATransformGroup | undefined;
}
/** Defines the NonVisualGroupDrawingShapeProperties Class. Serialized as `wpg:cNvGrpSpPr` */
export declare class NonVisualGroupDrawingShapeProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns AGroupShapeLocks. */
    get groupShapeLocks(): AGroupShapeLocks | undefined;
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `wpg:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the Transform2D Class. Serialized as `wpg:xfrm` */
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
/** Defines the NonVisualGraphicFrameProperties Class. Serialized as `wpg:cNvFrPr` */
export declare class NonVisualGraphicFrameProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {
    static _Q: string;
    /** Graphic Frame Locks. */
    get graphicFrameLocks(): AGraphicFrameLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `wpg:cNvPr` */
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
/** Defines the WordprocessingGroupType Class. */
export declare abstract class WordprocessingGroupType extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupDrawingShapeProperties | GroupShapeProperties | WpsWordprocessingShape | GroupShape | GraphicFrame | PicPicture | W14ContentPart | OfficeArtExtensionList> {
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualGroupDrawingShapeProperties. */
    get nonVisualGroupDrawingShapeProperties(): NonVisualGroupDrawingShapeProperties | undefined;
    /** Returns GroupShapeProperties. */
    get groupShapeProperties(): GroupShapeProperties | undefined;
}
/** Defines the GroupShape Class. Serialized as `wpg:grpSp` */
export declare class GroupShape extends WordprocessingGroupType {
    static _Q: string;
}
/** Defines the WordprocessingGroup Class. Serialized as `wpg:wgp` */
export declare class WordprocessingGroup extends WordprocessingGroupType {
    static _Q: string;
}
export declare function initOffice2010WordDrawingGroupNamespace(): {
    prefix: string;
    xmlns: string;
};
