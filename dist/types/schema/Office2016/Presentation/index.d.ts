import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../framework/types/BooleanValue';
/** Defines the DesignElement Class. Serialized as `p16:designElem` */
export declare class DesignElement extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
export declare function initOffice2016PresentationNamespace(): {
    prefix: string;
    xmlns: string;
};
