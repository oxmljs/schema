import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../../framework/types/HexBinaryValue';
/** Defines the SymEx Class. Serialized as `w16se:symEx` */
export declare class SymEx extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** font. Serialized as `w16se:font` */
    get font(): StringValue | undefined;
    set font(v: StringValue | undefined);
    /** char. Serialized as `w16se:char` */
    get char(): HexBinaryValue | undefined;
    set char(v: HexBinaryValue | undefined);
}
export declare function initOffice2016WordSymexNamespace(): {
    prefix: string;
    xmlns: string;
};
