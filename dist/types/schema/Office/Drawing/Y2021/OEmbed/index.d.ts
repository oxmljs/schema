import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `aoe:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the OEmbedShared Class. Serialized as `aoe:oembedShared` */
export declare class OEmbedShared extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** srcUrl. Serialized as `:srcUrl` */
    get srcUrl(): StringValue | undefined;
    set srcUrl(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOfficeDrawingY2021OEmbedNamespace(): {
    prefix: string;
    xmlns: string;
};
