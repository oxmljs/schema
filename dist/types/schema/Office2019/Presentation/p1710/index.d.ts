import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
/** Defines the ReadonlyRecommended Class. Serialized as `p1710:readonlyRecommended` */
export declare class ReadonlyRecommended extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
export declare function initOffice2019Presentationp1710Namespace(): {
    prefix: string;
    xmlns: string;
};
