import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as AExtension } from '../../../Drawing';
export declare enum Indefinite {
    /** undefined. Serialized value: `indefinite` */
    Indefinite = "indefinite"
}
export declare const IndefiniteArray: readonly [Indefinite];
/** Defines the OfficeArtExtensionList Class. Serialized as `aanim:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the AnimationProperties Class. Serialized as `aanim:animPr` */
export declare class AnimationProperties extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** length. Serialized as `:length` */
    get length(): StringValue | undefined;
    set length(v: StringValue | undefined);
    /** count. Serialized as `:count` */
    get count(): StringValue | undefined;
    set count(v: StringValue | undefined);
    /** auto. Serialized as `:auto` */
    get auto(): BooleanValue | undefined;
    set auto(v: BooleanValue | undefined);
    /** offset. Serialized as `:offset` */
    get offset(): StringValue | undefined;
    set offset(v: StringValue | undefined);
    /** st. Serialized as `:st` */
    get st(): StringValue | undefined;
    set st(v: StringValue | undefined);
    /** end. Serialized as `:end` */
    get end(): StringValue | undefined;
    set end(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOffice2019DrawingAnimationNamespace(): {
    prefix: string;
    xmlns: string;
};
