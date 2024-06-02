import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
export declare enum HyperlinkColorEnum {
    /** undefined. Serialized value: `hlink` */
    HLink = "hlink",
    /** undefined. Serialized value: `tx` */
    Tx = "tx"
}
export declare const HyperlinkColorEnumArray: readonly [HyperlinkColorEnum.HLink, HyperlinkColorEnum.Tx];
/** Defines the HyperlinkColor Class. Serialized as `ahyp:hlinkClr` */
export declare class HyperlinkColor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): HyperlinkColorEnum | undefined;
    set val(v: HyperlinkColorEnum | undefined);
}
export declare function initOffice2019DrawingHyperLinkColorNamespace(): {
    prefix: string;
    xmlns: string;
};
