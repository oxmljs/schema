import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BlackWhiteModeValues } from '../../Drawing';
import { TransformGroup as ATransformGroup } from '../../Drawing';
import { NoFill as ANoFill } from '../../Drawing';
import { SolidFill as ASolidFill } from '../../Drawing';
import { GradientFill as AGradientFill } from '../../Drawing';
import { BlipFill as ABlipFill } from '../../Drawing';
import { PatternFill as APatternFill } from '../../Drawing';
import { GroupFill as AGroupFill } from '../../Drawing';
import { EffectList as AEffectList } from '../../Drawing';
import { EffectDag as AEffectDag } from '../../Drawing';
import { Scene3DType as AScene3DType } from '../../Drawing';
import { ExtensionList as AExtensionList } from '../../Drawing';
import { GroupShapeLocks as AGroupShapeLocks } from '../../Drawing';
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from '../../Drawing';
import { Extension as AExtension } from '../../Drawing';
import { Offset as AOffset } from '../../Drawing';
import { Extents as AExtents } from '../../Drawing';
import { BodyProperties as ABodyProperties } from '../../Drawing';
import { ListStyle as AListStyle } from '../../Drawing';
import { Paragraph as AParagraph } from '../../Drawing';
import { LineReference as ALineReference } from '../../Drawing';
import { FillReference as AFillReference } from '../../Drawing';
import { EffectReference as AEffectReference } from '../../Drawing';
import { FontReference as AFontReference } from '../../Drawing';
import { Transform2D as ATransform2D } from '../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../Drawing';
import { Outline as AOutline } from '../../Drawing';
import { Shape3DType as AShape3DType } from '../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../Drawing';
import { ShapeLocks as AShapeLocks } from '../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
/** Defines the GroupShapeType Class. */
export declare abstract class GroupShapeType extends OxmlCompositeElement<GroupShapeNonVisualProperties | GroupShapeProperties | Shape | GroupShape | OfficeArtExtensionList> {
    /** Returns GroupShapeNonVisualProperties. */
    get groupShapeNonVisualProperties(): GroupShapeNonVisualProperties | undefined;
    /** Returns GroupShapeProperties. */
    get groupShapeProperties(): GroupShapeProperties | undefined;
}
/** Defines the ShapeTree Class. Serialized as `dsp:spTree` */
export declare class ShapeTree extends GroupShapeType {
    static _Q: string;
}
/** Defines the GroupShape Class. Serialized as `dsp:grpSp` */
export declare class GroupShape extends GroupShapeType {
    static _Q: string;
}
/** Defines the Shape Class. Serialized as `dsp:sp` */
export declare class Shape extends OxmlCompositeElement<ShapeNonVisualProperties | ShapeProperties | ShapeStyle | TextBody | Transform2D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** modelId. Serialized as `:modelId` */
    get modelId(): StringValue | undefined;
    set modelId(v: StringValue | undefined);
    /** Returns ShapeNonVisualProperties. */
    get shapeNonVisualProperties(): ShapeNonVisualProperties | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ShapeStyle. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns TextBody. */
    get textBody(): TextBody | undefined;
    /** Returns Transform2D. */
    get transform2D(): Transform2D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the GroupShapeProperties Class. Serialized as `dsp:grpSpPr` */
export declare class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): ATransformGroup | undefined;
}
/** Defines the GroupShapeNonVisualProperties Class. Serialized as `dsp:nvGrpSpPr` */
export declare class GroupShapeNonVisualProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupDrawingShapeProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualGroupDrawingShapeProperties. */
    get nonVisualGroupDrawingShapeProperties(): NonVisualGroupDrawingShapeProperties | undefined;
}
/** Defines the NonVisualGroupDrawingShapeProperties Class. Serialized as `dsp:cNvGrpSpPr` */
export declare class NonVisualGroupDrawingShapeProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns AGroupShapeLocks. */
    get groupShapeLocks(): AGroupShapeLocks | undefined;
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `dsp:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the Transform2D Class. Serialized as `dsp:txXfrm` */
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
/** Defines the TextBody Class. Serialized as `dsp:txBody` */
export declare class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Defines the ShapeStyle Class. Serialized as `dsp:style` */
export declare class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {
    static _Q: string;
    /** Returns ALineReference. */
    get lineReference(): ALineReference | undefined;
    /** Returns AFillReference. */
    get fillReference(): AFillReference | undefined;
    /** Returns AEffectReference. */
    get effectReference(): AEffectReference | undefined;
    /** Font Reference. */
    get fontReference(): AFontReference | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `dsp:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the ShapeNonVisualProperties Class. Serialized as `dsp:nvSpPr` */
export declare class ShapeNonVisualProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualDrawingShapeProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualDrawingShapeProperties. */
    get nonVisualDrawingShapeProperties(): NonVisualDrawingShapeProperties | undefined;
}
/** Defines the NonVisualDrawingShapeProperties Class. Serialized as `dsp:cNvSpPr` */
export declare class NonVisualDrawingShapeProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Text Box. Serialized as `:txBox` */
    get textBox(): BooleanValue | undefined;
    set textBox(v: BooleanValue | undefined);
    /** Shape Locks. */
    get shapeLocks(): AShapeLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `dsp:cNvPr` */
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
/** Defines the DataModelExtensionBlock Class. Serialized as `dsp:dataModelExt` */
export declare class DataModelExtensionBlock extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** relId. Serialized as `:relId` */
    get relId(): StringValue | undefined;
    set relId(v: StringValue | undefined);
    /** minVer. Serialized as `:minVer` */
    get minVer(): StringValue | undefined;
    set minVer(v: StringValue | undefined);
}
/** Defines the Drawing Class. Serialized as `dsp:drawing` */
export declare class Drawing extends OxmlPartRootElement<ShapeTree> {
    static _Q: string;
    /** Returns ShapeTree. */
    get shapeTree(): ShapeTree | undefined;
}
export declare function initOfficeDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
