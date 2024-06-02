import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { BlipCompressionValues } from '../../Drawing';
import { AlphaBiLevel as AAlphaBiLevel } from '../../Drawing';
import { AlphaCeiling as AAlphaCeiling } from '../../Drawing';
import { AlphaFloor as AAlphaFloor } from '../../Drawing';
import { AlphaInverse as AAlphaInverse } from '../../Drawing';
import { AlphaModulationEffect as AAlphaModulationEffect } from '../../Drawing';
import { AlphaModulationFixed as AAlphaModulationFixed } from '../../Drawing';
import { AlphaReplace as AAlphaReplace } from '../../Drawing';
import { BiLevel as ABiLevel } from '../../Drawing';
import { Blur as ABlur } from '../../Drawing';
import { ColorChange as AColorChange } from '../../Drawing';
import { ColorReplacement as AColorReplacement } from '../../Drawing';
import { Duotone as ADuotone } from '../../Drawing';
import { FillOverlay as AFillOverlay } from '../../Drawing';
import { Grayscale as AGrayscale } from '../../Drawing';
import { Hsl as AHsl } from '../../Drawing';
import { LuminanceEffect as ALuminanceEffect } from '../../Drawing';
import { TintEffect as ATintEffect } from '../../Drawing';
import { BlipExtensionList as ABlipExtensionList } from '../../Drawing';
import { Extension as AExtension } from '../../Drawing';
/** Defines the Snapshot Class. Serialized as `we:snapshot` */
export declare class Snapshot extends OxmlCompositeElement<AAlphaBiLevel | AAlphaCeiling | AAlphaFloor | AAlphaInverse | AAlphaModulationEffect | AAlphaModulationFixed | AAlphaReplace | ABiLevel | ABlur | AColorChange | AColorReplacement | ADuotone | AFillOverlay | AGrayscale | AHsl | ALuminanceEffect | ATintEffect | ABlipExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Compression state for blips.. Serialized as `:cstate` */
    get compressionState(): BlipCompressionValues | undefined;
    set compressionState(v: BlipCompressionValues | undefined);
}
/** Defines the WebExtensionBindingList Class. Serialized as `we:bindings` */
export declare class WebExtensionBindingList extends OxmlCompositeElement<WebExtensionBinding> {
    static _Q: string;
}
/** Defines the WebExtensionPropertyBag Class. Serialized as `we:properties` */
export declare class WebExtensionPropertyBag extends OxmlCompositeElement<WebExtensionProperty> {
    static _Q: string;
}
/** Defines the WebExtensionReferenceList Class. Serialized as `we:alternateReferences` */
export declare class WebExtensionReferenceList extends OxmlCompositeElement<WebExtensionStoreReference> {
    static _Q: string;
}
/** Defines the WebExtensionStoreReference Class. Serialized as `we:reference` */
export declare class WebExtensionStoreReference extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** version. Serialized as `:version` */
    get version(): StringValue | undefined;
    set version(v: StringValue | undefined);
    /** store. Serialized as `:store` */
    get store(): StringValue | undefined;
    set store(v: StringValue | undefined);
    /** storeType. Serialized as `:storeType` */
    get storeType(): StringValue | undefined;
    set storeType(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the WebExtensionBinding Class. Serialized as `we:binding` */
export declare class WebExtensionBinding extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** appref. Serialized as `:appref` */
    get appReference(): StringValue | undefined;
    set appReference(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `we:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the WebExtensionProperty Class. Serialized as `we:property` */
export declare class WebExtensionProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** value. Serialized as `:value` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
}
/** Defines the WebExtensionReference Class. Serialized as `we:webextensionref` */
export declare class WebExtensionReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the WebExtension Class. Serialized as `we:webextension` */
export declare class WebExtension extends OxmlPartRootElement<WebExtensionStoreReference | WebExtensionReferenceList | WebExtensionPropertyBag | WebExtensionBindingList | Snapshot | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** frozen. Serialized as `:frozen` */
    get frozen(): BooleanValue | undefined;
    set frozen(v: BooleanValue | undefined);
    /** Returns WebExtensionStoreReference. */
    get webExtensionStoreReference(): WebExtensionStoreReference | undefined;
    /** Returns WebExtensionReferenceList. */
    get webExtensionReferenceList(): WebExtensionReferenceList | undefined;
    /** Returns WebExtensionPropertyBag. */
    get webExtensionPropertyBag(): WebExtensionPropertyBag | undefined;
    /** Returns WebExtensionBindingList. */
    get webExtensionBindingList(): WebExtensionBindingList | undefined;
    /** Returns Snapshot. */
    get snapshot(): Snapshot | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2013WebExtensionNamespace(): {
    prefix: string;
    xmlns: string;
};
