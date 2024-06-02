import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
/** Defines the RoamingProperty Class. Serialized as `pRoam:props` */
export declare class RoamingProperty extends OxmlCompositeElement<Key | Value> {
    static _Q: string;
    /** Returns Key. */
    get key(): Key | undefined;
    /** Returns Value. */
    get value(): Value | undefined;
}
/** Defines the Value Class. Serialized as `pRoam:value` */
export declare class Value extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Key Class. Serialized as `pRoam:key` */
export declare class Key extends OxmlLeafTextElement {
    static _Q: string;
}
export declare function initOffice2013PowerPointRoamingNamespace(): {
    prefix: string;
    xmlns: string;
};
