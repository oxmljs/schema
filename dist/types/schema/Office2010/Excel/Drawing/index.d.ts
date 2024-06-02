import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BlackWhiteModeValues } from '../../../Drawing';
import { Extension as AExtension } from '../../../Drawing';
import { Offset as AOffset } from '../../../Drawing';
import { Extents as AExtents } from '../../../Drawing';
import { ContentPartLocks as A14ContentPartLocks } from '../../../Office2010/Drawing';
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from '../../../Office2010/Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `xdr14:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the Transform2D Class. Serialized as `xdr14:xfrm` */
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
/** Defines the ApplicationNonVisualDrawingProperties Class. Serialized as `xdr14:nvPr` */
export declare class ApplicationNonVisualDrawingProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** macro. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** fPublished. Serialized as `:fPublished` */
    get publishedFlag(): BooleanValue | undefined;
    set publishedFlag(v: BooleanValue | undefined);
}
/** Defines the ExcelNonVisualContentPartShapeProperties Class. Serialized as `xdr14:nvContentPartPr` */
export declare class ExcelNonVisualContentPartShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualInkContentPartProperties. */
    get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined;
}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `xdr14:cNvContentPartPr` */
export declare class NonVisualInkContentPartProperties extends OxmlCompositeElement<A14ContentPartLocks | A14OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** isComment. Serialized as `:isComment` */
    get isComment(): BooleanValue | undefined;
    set isComment(v: BooleanValue | undefined);
    /** Returns A14ContentPartLocks. */
    get contentPartLocks(): A14ContentPartLocks | undefined;
    /** Returns A14OfficeArtExtensionList. */
    get officeArtExtensionList(): A14OfficeArtExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `xdr14:cNvPr` */
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
/** Defines the ContentPart Class. Serialized as `xdr14:contentPart` */
export declare class ContentPart extends OxmlCompositeElement<ExcelNonVisualContentPartShapeProperties | ApplicationNonVisualDrawingProperties | Transform2D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** bwMode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** Returns ExcelNonVisualContentPartShapeProperties. */
    get excelNonVisualContentPartShapeProperties(): ExcelNonVisualContentPartShapeProperties | undefined;
    /** Returns ApplicationNonVisualDrawingProperties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
    /** Returns Transform2D. */
    get transform2D(): Transform2D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2010ExcelDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
