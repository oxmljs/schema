import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
/** Defines the ExternalLinksPr Class. Serialized as `xxlnp:externalLinksPr` */
export declare class ExternalLinksPr extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** autoRefresh. Serialized as `:autoRefresh` */
    get autoRefresh(): BooleanValue | undefined;
    set autoRefresh(v: BooleanValue | undefined);
}
export declare function initOffice2021ExcelExternalLinksNamespace(): {
    prefix: string;
    xmlns: string;
};
