import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../framework/types/StringValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { Extension as AExtension } from '../../Drawing';
/** Defines the ThemeVariantList Class. Serialized as `thm15:themeVariantLst` */
export declare class ThemeVariantList extends OxmlCompositeElement<ThemeVariant> {
    static _Q: string;
}
/** Defines the ThemeVariant Class. Serialized as `thm15:themeVariant` */
export declare class ThemeVariant extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** vid. Serialized as `:vid` */
    get vid(): StringValue | undefined;
    set vid(v: StringValue | undefined);
    /** cx. Serialized as `:cx` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** cy. Serialized as `:cy` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `thm15:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the ThemeFamily Class. Serialized as `thm15:themeFamily` */
export declare class ThemeFamily extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** vid. Serialized as `:vid` */
    get vid(): StringValue | undefined;
    set vid(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2013ThemeNamespace(): {
    prefix: string;
    xmlns: string;
};
