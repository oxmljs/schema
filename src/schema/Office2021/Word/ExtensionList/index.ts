import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';


/** Defines the Extension Class. Serialized as `w16cur:ext` */
export class Extension extends OxmlCompositeElement {

    public static override _Q = 'w16cur:ext';
    public static override _A = ['w16cur:uri',];
    /** uri. Serialized as `w16cur:uri` */
    public get uri(): StringValue | undefined { return this._g('w16cur:uri'); }
    public set uri(v: StringValue | undefined) { this._s('w16cur:uri', v); }

}

export function initOffice2021WordExtensionListNamespace() {
    Extension._D = {
        'w16cur:uri': new OxmlAttr('w16cur:uri', OxmlType.StringValue),
    };
    return {
        prefix: 'w16cur',
        xmlns: 'http://schemas.microsoft.com/office/word/2018/wordml',
    };
}
