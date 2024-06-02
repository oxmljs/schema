import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';


/** Defines the ExternalLinksPr Class. Serialized as `xxlnp:externalLinksPr` */
export class ExternalLinksPr extends OxmlLeafElement {

    public static override _Q = 'xxlnp:externalLinksPr';
    public static override _A = [':autoRefresh',];
    /** autoRefresh. Serialized as `:autoRefresh` */
    public get autoRefresh(): BooleanValue | undefined { return this._g(':autoRefresh'); }
    public set autoRefresh(v: BooleanValue | undefined) { this._s(':autoRefresh', v); }

}

export function initOffice2021ExcelExternalLinksNamespace() {
    ExternalLinksPr._D = {
        ':autoRefresh': new OxmlAttr(':autoRefresh', OxmlType.BooleanValue),
    };
    return {
        prefix: 'xxlnp',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2019/extlinksprops',
    };
}
