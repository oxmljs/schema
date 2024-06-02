import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';


export enum HyperlinkColorEnum {
    /** undefined. Serialized value: `hlink` */
    HLink = 'hlink',
    /** undefined. Serialized value: `tx` */
    Tx = 'tx',
}

export const HyperlinkColorEnumArray = [
    HyperlinkColorEnum.HLink,
    HyperlinkColorEnum.Tx,
] as const;

/** Defines the HyperlinkColor Class. Serialized as `ahyp:hlinkClr` */
export class HyperlinkColor extends OxmlLeafElement {

    public static override _Q = 'ahyp:hlinkClr';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): HyperlinkColorEnum | undefined { return this._g(':val'); }
    public set val(v: HyperlinkColorEnum | undefined) { this._s(':val', v); }

}

export function initOffice2019DrawingHyperLinkColorNamespace() {
    HyperlinkColor._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, HyperlinkColorEnumArray),
    };
    return {
        prefix: 'ahyp',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2018/hyperlinkcolor',
    };
}
