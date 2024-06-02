import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as XExtension } from '../../../Spreadsheet';
/** Defines the OpenXmlWebImageSupportingRichDataRelationshipElement Class. */
export declare abstract class OpenXmlWebImageSupportingRichDataRelationshipElement extends OxmlLeafElement {
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the BlipWebImageSupportingRichDataRelationship Class. Serialized as `xlrdwi:blip` */
export declare class BlipWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {
    static _Q: string;
}
/** Defines the MoreImagesAddressWebImageSupportingRichDataRelationship Class. Serialized as `xlrdwi:moreImagesAddress` */
export declare class MoreImagesAddressWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {
    static _Q: string;
}
/** Defines the AddressWebImageSupportingRichDataRelationship Class. Serialized as `xlrdwi:address` */
export declare class AddressWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {
    static _Q: string;
}
/** Defines the ExtensionList Class. Serialized as `xlrdwi:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the WebImageSupportingRichData Class. Serialized as `xlrdwi:webImageSrd` */
export declare class WebImageSupportingRichData extends OxmlCompositeElement<AddressWebImageSupportingRichDataRelationship | MoreImagesAddressWebImageSupportingRichDataRelationship | BlipWebImageSupportingRichDataRelationship> {
    static _Q: string;
    /** Returns AddressWebImageSupportingRichDataRelationship. */
    get addressWebImageSupportingRichDataRelationship(): AddressWebImageSupportingRichDataRelationship | undefined;
    /** Returns MoreImagesAddressWebImageSupportingRichDataRelationship. */
    get moreImagesAddressWebImageSupportingRichDataRelationship(): MoreImagesAddressWebImageSupportingRichDataRelationship | undefined;
    /** Returns BlipWebImageSupportingRichDataRelationship. */
    get blipWebImageSupportingRichDataRelationship(): BlipWebImageSupportingRichDataRelationship | undefined;
}
/** Defines the WebImagesSupportingRichData Class. Serialized as `xlrdwi:webImagesSrd` */
export declare class WebImagesSupportingRichData extends OxmlPartRootElement<WebImageSupportingRichData | ExtensionList> {
    static _Q: string;
}
export declare function initOffice2021ExcelRichDataWebImageNamespace(): {
    prefix: string;
    xmlns: string;
};
