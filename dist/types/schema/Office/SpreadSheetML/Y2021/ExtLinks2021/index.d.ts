import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../../framework/types/StringValue';
/** Defines the OpenXmlAlternateUrlElement Class. */
export declare abstract class OpenXmlAlternateUrlElement extends OxmlLeafElement {
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the RelativeUrlAlternateUrl Class. Serialized as `xxl21:relativeUrl` */
export declare class RelativeUrlAlternateUrl extends OpenXmlAlternateUrlElement {
    static _Q: string;
}
/** Defines the AbsoluteUrlAlternateUrl Class. Serialized as `xxl21:absoluteUrl` */
export declare class AbsoluteUrlAlternateUrl extends OpenXmlAlternateUrlElement {
    static _Q: string;
}
/** Defines the ExternalBookAlternateUrls Class. Serialized as `xxl21:alternateUrls` */
export declare class ExternalBookAlternateUrls extends OxmlCompositeElement<AbsoluteUrlAlternateUrl | RelativeUrlAlternateUrl> {
    static _Q: string;
    static _A: string[];
    /** driveId. Serialized as `:driveId` */
    get driveId(): StringValue | undefined;
    set driveId(v: StringValue | undefined);
    /** itemId. Serialized as `:itemId` */
    get itemId(): StringValue | undefined;
    set itemId(v: StringValue | undefined);
    /** Returns AbsoluteUrlAlternateUrl. */
    get absoluteUrlAlternateUrl(): AbsoluteUrlAlternateUrl | undefined;
    /** Returns RelativeUrlAlternateUrl. */
    get relativeUrlAlternateUrl(): RelativeUrlAlternateUrl | undefined;
}
export declare function initOfficeSpreadSheetMLY2021ExtLinks2021Namespace(): {
    prefix: string;
    xmlns: string;
};
