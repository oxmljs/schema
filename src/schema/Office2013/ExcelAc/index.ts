import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';


/** Defines the AbsolutePath Class. Serialized as `x15ac:absPath` */
export class AbsolutePath extends OxmlLeafElement {

    public static override _Q = 'x15ac:absPath';
    public static override _A = [':url',];
    /** url. Serialized as `:url` */
    public get url(): StringValue | undefined { return this._g(':url'); }
    public set url(v: StringValue | undefined) { this._s(':url', v); }

}

export function initOffice2013ExcelAcNamespace() {
    AbsolutePath._D = {
        ':url': new OxmlAttr(':url', OxmlType.StringValue),
    };
    return {
        prefix: 'x15ac',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2010/11/ac',
    };
}
