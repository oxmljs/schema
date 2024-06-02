import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { Extension as AExtension } from '../../../Drawing';
import { Offset as AOffset } from '../../../Drawing';
import { Extents as AExtents } from '../../../Drawing';
import { ContentPartLocks as A14ContentPartLocks } from '../../../Office2010/Drawing';
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from '../../../Office2010/Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `cdr14:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'cdr14:extLst';

}
/** Defines the Transform2D Class. Serialized as `cdr14:xfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'cdr14:xfrm';
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
/** Defines the ApplicationNonVisualDrawingProperties Class. Serialized as `cdr14:nvPr` */
export class ApplicationNonVisualDrawingProperties extends OxmlLeafElement {

    public static override _Q = 'cdr14:nvPr';
    public static override _A = [':macro',':fPublished',];
    /** macro. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** fPublished. Serialized as `:fPublished` */
    public get published(): BooleanValue | undefined { return this._g(':fPublished'); }
    public set published(v: BooleanValue | undefined) { this._s(':fPublished', v); }

}
/** Defines the NonVisualContentPartProperties Class. Serialized as `cdr14:nvContentPartPr` */
export class NonVisualContentPartProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties> {

    public static override _Q = 'cdr14:nvContentPartPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualInkContentPartProperties. */
    public get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined { return this._f(NonVisualInkContentPartProperties); }

}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `cdr14:cNvContentPartPr` */
export class NonVisualInkContentPartProperties extends OxmlCompositeElement<A14ContentPartLocks | A14OfficeArtExtensionList> {

    public static override _Q = 'cdr14:cNvContentPartPr';
    public static override _A = [':isComment',];
    /** isComment. Serialized as `:isComment` */
    public get isComment(): BooleanValue | undefined { return this._g(':isComment'); }
    public set isComment(v: BooleanValue | undefined) { this._s(':isComment', v); }
    /** Returns A14ContentPartLocks. */
    public get contentPartLocks(): A14ContentPartLocks | undefined { return this._f(A14ContentPartLocks); }
    /** Returns A14OfficeArtExtensionList. */
    public get officeArtExtensionList(): A14OfficeArtExtensionList | undefined { return this._f(A14OfficeArtExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `cdr14:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'cdr14:cNvPr';
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
/** Defines the ContentPart Class. Serialized as `cdr14:contentPart` */
export class ContentPart extends OxmlCompositeElement<NonVisualContentPartProperties | ApplicationNonVisualDrawingProperties | Transform2D | OfficeArtExtensionList> {

    public static override _Q = 'cdr14:contentPart';
    public static override _A = ['r:id',':bwMode',];
    /** id. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** bwMode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** Returns NonVisualContentPartProperties. */
    public get nonVisualContentPartProperties(): NonVisualContentPartProperties | undefined { return this._f(NonVisualContentPartProperties); }
    /** Returns ApplicationNonVisualDrawingProperties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }
    /** Returns Transform2D. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2010DrawingChartDrawingNamespace() {
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
    ApplicationNonVisualDrawingProperties._D = {
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':fPublished': new OxmlAttr(':fPublished', OxmlType.BooleanValue),
    };
    NonVisualContentPartProperties._C = {
        'cdr14:cNvPr': NonVisualDrawingProperties,
        'cdr14:cNvContentPartPr': NonVisualInkContentPartProperties,
    };
    NonVisualInkContentPartProperties._C = {
        'a14:cpLocks': A14ContentPartLocks,
        'a14:extLst': A14OfficeArtExtensionList,
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
    ContentPart._C = {
        'cdr14:nvContentPartPr': NonVisualContentPartProperties,
        'cdr14:nvPr': ApplicationNonVisualDrawingProperties,
        'cdr14:xfrm': Transform2D,
        'cdr14:extLst': OfficeArtExtensionList,
    };
    ContentPart._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    return {
        prefix: 'cdr14',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2010/chartDrawing',
    };
}
