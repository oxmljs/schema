import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../../Drawing';
/** Defines the OfficeArtExtensionList Class. Serialized as `asl:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the ScriptLink Class. Serialized as `asl:scriptLink` */
export declare class ScriptLink extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
export declare function initOfficeDrawingY2021ScriptLinkNamespace(): {
    prefix: string;
    xmlns: string;
};
