import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';import { TransformGroup as ATransformGroup } from '../../Drawing';
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
export abstract class GroupShapeType extends OxmlCompositeElement<GroupShapeNonVisualProperties | GroupShapeProperties | Shape | GroupShape | OfficeArtExtensionList> {

    /** Returns GroupShapeNonVisualProperties. */
    public get groupShapeNonVisualProperties(): GroupShapeNonVisualProperties | undefined { return this._f(GroupShapeNonVisualProperties); }
    /** Returns GroupShapeProperties. */
    public get groupShapeProperties(): GroupShapeProperties | undefined { return this._f(GroupShapeProperties); }

}
/** Defines the ShapeTree Class. Serialized as `dsp:spTree` */
export class ShapeTree extends GroupShapeType {

    public static override _Q = 'dsp:spTree';

}
/** Defines the GroupShape Class. Serialized as `dsp:grpSp` */
export class GroupShape extends GroupShapeType {

    public static override _Q = 'dsp:grpSp';

}
/** Defines the Shape Class. Serialized as `dsp:sp` */
export class Shape extends OxmlCompositeElement<ShapeNonVisualProperties | ShapeProperties | ShapeStyle | TextBody | Transform2D | OfficeArtExtensionList> {

    public static override _Q = 'dsp:sp';
    public static override _A = [':modelId',];
    /** modelId. Serialized as `:modelId` */
    public get modelId(): StringValue | undefined { return this._g(':modelId'); }
    public set modelId(v: StringValue | undefined) { this._s(':modelId', v); }
    /** Returns ShapeNonVisualProperties. */
    public get shapeNonVisualProperties(): ShapeNonVisualProperties | undefined { return this._f(ShapeNonVisualProperties); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ShapeStyle. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns TextBody. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }
    /** Returns Transform2D. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the GroupShapeProperties Class. Serialized as `dsp:grpSpPr` */
export class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {

    public static override _Q = 'dsp:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): ATransformGroup | undefined { return this._f(ATransformGroup); }

}
/** Defines the GroupShapeNonVisualProperties Class. Serialized as `dsp:nvGrpSpPr` */
export class GroupShapeNonVisualProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupDrawingShapeProperties> {

    public static override _Q = 'dsp:nvGrpSpPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualGroupDrawingShapeProperties. */
    public get nonVisualGroupDrawingShapeProperties(): NonVisualGroupDrawingShapeProperties | undefined { return this._f(NonVisualGroupDrawingShapeProperties); }

}
/** Defines the NonVisualGroupDrawingShapeProperties Class. Serialized as `dsp:cNvGrpSpPr` */
export class NonVisualGroupDrawingShapeProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'dsp:cNvGrpSpPr';
    /** Returns AGroupShapeLocks. */
    public get groupShapeLocks(): AGroupShapeLocks | undefined { return this._f(AGroupShapeLocks); }
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(ANonVisualGroupDrawingShapePropsExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `dsp:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'dsp:extLst';

}
/** Defines the Transform2D Class. Serialized as `dsp:txXfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'dsp:txXfrm';
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
/** Defines the TextBody Class. Serialized as `dsp:txBody` */
export class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    public static override _Q = 'dsp:txBody';
    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Defines the ShapeStyle Class. Serialized as `dsp:style` */
export class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'dsp:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}
/** Defines the ShapeProperties Class. Serialized as `dsp:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'dsp:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the ShapeNonVisualProperties Class. Serialized as `dsp:nvSpPr` */
export class ShapeNonVisualProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualDrawingShapeProperties> {

    public static override _Q = 'dsp:nvSpPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualDrawingShapeProperties. */
    public get nonVisualDrawingShapeProperties(): NonVisualDrawingShapeProperties | undefined { return this._f(NonVisualDrawingShapeProperties); }

}
/** Defines the NonVisualDrawingShapeProperties Class. Serialized as `dsp:cNvSpPr` */
export class NonVisualDrawingShapeProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {

    public static override _Q = 'dsp:cNvSpPr';
    public static override _A = [':txBox',];
    /** Text Box. Serialized as `:txBox` */
    public get textBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set textBox(v: BooleanValue | undefined) { this._s(':txBox', v); }
    /** Shape Locks. */
    public get shapeLocks(): AShapeLocks | undefined { return this._f(AShapeLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `dsp:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'dsp:cNvPr';
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
/** Defines the DataModelExtensionBlock Class. Serialized as `dsp:dataModelExt` */
export class DataModelExtensionBlock extends OxmlLeafElement {

    public static override _Q = 'dsp:dataModelExt';
    public static override _A = [':relId',':minVer',];
    /** relId. Serialized as `:relId` */
    public get relId(): StringValue | undefined { return this._g(':relId'); }
    public set relId(v: StringValue | undefined) { this._s(':relId', v); }
    /** minVer. Serialized as `:minVer` */
    public get minVer(): StringValue | undefined { return this._g(':minVer'); }
    public set minVer(v: StringValue | undefined) { this._s(':minVer', v); }

}
/** Defines the Drawing Class. Serialized as `dsp:drawing` */
export class Drawing extends OxmlPartRootElement<ShapeTree> {

    public static override _Q = 'dsp:drawing';
    /** Returns ShapeTree. */
    public get shapeTree(): ShapeTree | undefined { return this._f(ShapeTree); }

}

export function initOfficeDrawingNamespace() {
    GroupShapeType._C = {
        'dsp:nvGrpSpPr': GroupShapeNonVisualProperties,
        'dsp:grpSpPr': GroupShapeProperties,
        'dsp:sp': Shape,
        'dsp:grpSp': GroupShape,
        'dsp:extLst': OfficeArtExtensionList,
    };
    ShapeTree._C = {
        'dsp:nvGrpSpPr': GroupShapeNonVisualProperties,
        'dsp:grpSpPr': GroupShapeProperties,
        'dsp:sp': Shape,
        'dsp:grpSp': GroupShape,
        'dsp:extLst': OfficeArtExtensionList,
    };
    GroupShape._C = {
        'dsp:nvGrpSpPr': GroupShapeNonVisualProperties,
        'dsp:grpSpPr': GroupShapeProperties,
        'dsp:sp': Shape,
        'dsp:grpSp': GroupShape,
        'dsp:extLst': OfficeArtExtensionList,
    };
    Shape._C = {
        'dsp:nvSpPr': ShapeNonVisualProperties,
        'dsp:spPr': ShapeProperties,
        'dsp:style': ShapeStyle,
        'dsp:txBody': TextBody,
        'dsp:txXfrm': Transform2D,
        'dsp:extLst': OfficeArtExtensionList,
    };
    Shape._D = {
        ':modelId': new OxmlAttr(':modelId', OxmlType.StringValue),
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
    GroupShapeNonVisualProperties._C = {
        'dsp:cNvPr': NonVisualDrawingProperties,
        'dsp:cNvGrpSpPr': NonVisualGroupDrawingShapeProperties,
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
    TextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    ShapeStyle._C = {
        'a:lnRef': ALineReference,
        'a:fillRef': AFillReference,
        'a:effectRef': AEffectReference,
        'a:fontRef': AFontReference,
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
    ShapeNonVisualProperties._C = {
        'dsp:cNvPr': NonVisualDrawingProperties,
        'dsp:cNvSpPr': NonVisualDrawingShapeProperties,
    };
    NonVisualDrawingShapeProperties._C = {
        'a:spLocks': AShapeLocks,
        'a:extLst': AExtensionList,
    };
    NonVisualDrawingShapeProperties._D = {
        ':txBox': new OxmlAttr(':txBox', OxmlType.BooleanValue),
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
    DataModelExtensionBlock._D = {
        ':relId': new OxmlAttr(':relId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
    };
    Drawing._C = {
        'dsp:spTree': ShapeTree,
    };
    return {
        prefix: 'dsp',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2008/diagram',
    };
}
