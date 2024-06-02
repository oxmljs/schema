import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../../framework/types/HexBinaryValue';


/** Defines the SymEx Class. Serialized as `w16se:symEx` */
export class SymEx extends OxmlLeafElement {

    public static override _Q = 'w16se:symEx';
    public static override _A = ['w16se:font','w16se:char',];
    /** font. Serialized as `w16se:font` */
    public get font(): StringValue | undefined { return this._g('w16se:font'); }
    public set font(v: StringValue | undefined) { this._s('w16se:font', v); }
    /** char. Serialized as `w16se:char` */
    public get char(): HexBinaryValue | undefined { return this._g('w16se:char'); }
    public set char(v: HexBinaryValue | undefined) { this._s('w16se:char', v); }

}

export function initOffice2016WordSymexNamespace() {
    SymEx._D = {
        'w16se:font': new OxmlAttr('w16se:font', OxmlType.StringValue),
        'w16se:char': new OxmlAttr('w16se:char', OxmlType.HexBinaryValue),
    };
    return {
        prefix: 'w16se',
        xmlns: 'http://schemas.microsoft.com/office/word/2015/wordml/symex',
    };
}
