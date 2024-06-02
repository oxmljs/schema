import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';


/** Defines the Decorative Class. Serialized as `adec:decorative` */
export class Decorative extends OxmlLeafElement {

    public static override _Q = 'adec:decorative';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}

export function initOffice2019DrawingadecNamespace() {
    Decorative._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    return {
        prefix: 'adec',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2017/decorative',
    };
}
