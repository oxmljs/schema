import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';


/** Defines the Extension Class. Serialized as `oel:ext` */
export class Extension extends OxmlCompositeElement {

    public static override _Q = 'oel:ext';
    public static override _A = [':uri',];
    /** uri. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}

export function initOffice2021OfficeExtLstNamespace() {
    Extension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    return {
        prefix: 'oel',
        xmlns: 'http://schemas.microsoft.com/office/2019/extlst',
    };
}
