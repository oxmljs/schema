import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../../framework/types/StringValue';
/** Defines the Extension Class. Serialized as `w16cur:ext` */
export declare class Extension extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** uri. Serialized as `w16cur:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
export declare function initOffice2021WordExtensionListNamespace(): {
    prefix: string;
    xmlns: string;
};
