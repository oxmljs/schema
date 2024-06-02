import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
/** Defines the Decorative Class. Serialized as `adec:decorative` */
export declare class Decorative extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
export declare function initOffice2019DrawingadecNamespace(): {
    prefix: string;
    xmlns: string;
};
