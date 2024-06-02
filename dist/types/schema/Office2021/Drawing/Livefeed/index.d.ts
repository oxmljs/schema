import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Extension as AExtension } from '../../../Drawing';
/** Defines the LiveFeedBackgroundProperties Class. Serialized as `alf:backgroundProps` */
export declare class LiveFeedBackgroundProperties extends OxmlCompositeElement<BackgroundNormalProperties | BackgroundRemovedProperties | BackgroundBlurProperties | BackgroundCustomProperties | OfficeArtExtensionList> {
    static _Q: string;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `alf:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the LiveFeedProperties Class. Serialized as `alf:liveFeedProps` */
export declare class LiveFeedProperties extends OxmlCompositeElement<LiveFeedBackgroundProperties | OfficeArtExtensionList> {
    static _Q: string;
    /** Returns LiveFeedBackgroundProperties. */
    get liveFeedBackgroundProperties(): LiveFeedBackgroundProperties | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the BackgroundCustomProperties Class. Serialized as `alf:Custom` */
export declare class BackgroundCustomProperties extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the BackgroundBlurProperties Class. Serialized as `alf:Blur` */
export declare class BackgroundBlurProperties extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the BackgroundRemovedProperties Class. Serialized as `alf:Removed` */
export declare class BackgroundRemovedProperties extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the BackgroundNormalProperties Class. Serialized as `alf:Normal` */
export declare class BackgroundNormalProperties extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2021DrawingLivefeedNamespace(): {
    prefix: string;
    xmlns: string;
};
