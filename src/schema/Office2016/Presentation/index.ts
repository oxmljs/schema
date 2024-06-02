import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { BooleanValue } from '../../../framework/types/BooleanValue';


/** Defines the DesignElement Class. Serialized as `p16:designElem` */
export class DesignElement extends OxmlLeafElement {

    public static override _Q = 'p16:designElem';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}

export function initOffice2016PresentationNamespace() {
    DesignElement._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    return {
        prefix: 'p16',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2015/main',
    };
}
