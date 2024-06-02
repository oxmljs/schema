import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { Extension as XExtension } from '../../../Spreadsheet';


/** Defines the OpenXmlWebImageSupportingRichDataRelationshipElement Class. */
export abstract class OpenXmlWebImageSupportingRichDataRelationshipElement extends OxmlLeafElement {

    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the BlipWebImageSupportingRichDataRelationship Class. Serialized as `xlrdwi:blip` */
export class BlipWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {

    public static override _Q = 'xlrdwi:blip';

}
/** Defines the MoreImagesAddressWebImageSupportingRichDataRelationship Class. Serialized as `xlrdwi:moreImagesAddress` */
export class MoreImagesAddressWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {

    public static override _Q = 'xlrdwi:moreImagesAddress';

}
/** Defines the AddressWebImageSupportingRichDataRelationship Class. Serialized as `xlrdwi:address` */
export class AddressWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {

    public static override _Q = 'xlrdwi:address';

}
/** Defines the ExtensionList Class. Serialized as `xlrdwi:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xlrdwi:extLst';

}
/** Defines the WebImageSupportingRichData Class. Serialized as `xlrdwi:webImageSrd` */
export class WebImageSupportingRichData extends OxmlCompositeElement<AddressWebImageSupportingRichDataRelationship | MoreImagesAddressWebImageSupportingRichDataRelationship | BlipWebImageSupportingRichDataRelationship> {

    public static override _Q = 'xlrdwi:webImageSrd';
    /** Returns AddressWebImageSupportingRichDataRelationship. */
    public get addressWebImageSupportingRichDataRelationship(): AddressWebImageSupportingRichDataRelationship | undefined { return this._f(AddressWebImageSupportingRichDataRelationship); }
    /** Returns MoreImagesAddressWebImageSupportingRichDataRelationship. */
    public get moreImagesAddressWebImageSupportingRichDataRelationship(): MoreImagesAddressWebImageSupportingRichDataRelationship | undefined { return this._f(MoreImagesAddressWebImageSupportingRichDataRelationship); }
    /** Returns BlipWebImageSupportingRichDataRelationship. */
    public get blipWebImageSupportingRichDataRelationship(): BlipWebImageSupportingRichDataRelationship | undefined { return this._f(BlipWebImageSupportingRichDataRelationship); }

}
/** Defines the WebImagesSupportingRichData Class. Serialized as `xlrdwi:webImagesSrd` */
export class WebImagesSupportingRichData extends OxmlPartRootElement<WebImageSupportingRichData | ExtensionList> {

    public static override _Q = 'xlrdwi:webImagesSrd';

}

export function initOffice2021ExcelRichDataWebImageNamespace() {
    OpenXmlWebImageSupportingRichDataRelationshipElement._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    WebImageSupportingRichData._C = {
        'xlrdwi:address': AddressWebImageSupportingRichDataRelationship,
        'xlrdwi:moreImagesAddress': MoreImagesAddressWebImageSupportingRichDataRelationship,
        'xlrdwi:blip': BlipWebImageSupportingRichDataRelationship,
    };
    WebImagesSupportingRichData._C = {
        'xlrdwi:webImageSrd': WebImageSupportingRichData,
        'xlrdwi:extLst': ExtensionList,
    };
    return {
        prefix: 'xlrdwi',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2020/richdatawebimage',
    };
}
