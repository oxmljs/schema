import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';


/** Defines the ReadonlyRecommended Class. Serialized as `p1710:readonlyRecommended` */
export class ReadonlyRecommended extends OxmlLeafElement {

    public static override _Q = 'p1710:readonlyRecommended';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}

export function initOffice2019Presentationp1710Namespace() {
    ReadonlyRecommended._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    return {
        prefix: 'p1710',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2017/10/main',
    };
}
