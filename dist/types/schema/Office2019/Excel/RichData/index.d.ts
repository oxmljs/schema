import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { Extension as XExtension } from '../../../Spreadsheet';
export declare enum RichValueFallbackType {
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `n` */
    N = "n",
    /** undefined. Serialized value: `e` */
    E = "e",
    /** undefined. Serialized value: `s` */
    S = "s"
}
export declare const RichValueFallbackTypeArray: readonly [RichValueFallbackType.B, RichValueFallbackType.N, RichValueFallbackType.E, RichValueFallbackType.S];
export declare enum RichValueValueType {
    /** undefined. Serialized value: `d` */
    D = "d",
    /** undefined. Serialized value: `i` */
    I = "i",
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `e` */
    E = "e",
    /** undefined. Serialized value: `s` */
    S = "s",
    /** undefined. Serialized value: `r` */
    R = "r",
    /** undefined. Serialized value: `a` */
    A = "a",
    /** undefined. Serialized value: `spb` */
    Spb = "spb"
}
export declare const RichValueValueTypeArray: readonly [RichValueValueType.D, RichValueValueType.I, RichValueValueType.B, RichValueValueType.E, RichValueValueType.S, RichValueValueType.R, RichValueValueType.A, RichValueValueType.Spb];
/** Defines the Key Class. Serialized as `xlrd:k` */
export declare class Key extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** t. Serialized as `:t` */
    get t(): RichValueValueType | undefined;
    set t(v: RichValueValueType | undefined);
}
/** Defines the RichValueStructure Class. Serialized as `xlrd:s` */
export declare class RichValueStructure extends OxmlCompositeElement<Key> {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get t(): StringValue | undefined;
    set t(v: StringValue | undefined);
}
/** Defines the Value Class. Serialized as `xlrd:v` */
export declare class Value extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the RichValueFallback Class. Serialized as `xlrd:fb` */
export declare class RichValueFallback extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get t(): RichValueFallbackType | undefined;
    set t(v: RichValueFallbackType | undefined);
}
/** Defines the ExtensionList Class. Serialized as `xlrd:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the RichValue Class. Serialized as `xlrd:rv` */
export declare class RichValue extends OxmlCompositeElement<RichValueFallback | Value> {
    static _Q: string;
    static _A: string[];
    /** s. Serialized as `:s` */
    get s(): UInt32Value | undefined;
    set s(v: UInt32Value | undefined);
    /** Returns RichValueFallback. */
    get richValueFallback(): RichValueFallback | undefined;
}
/** Defines the RichValueStructures Class. Serialized as `xlrd:rvStructures` */
export declare class RichValueStructures extends OxmlPartRootElement<RichValueStructure | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the RichValueData Class. Serialized as `xlrd:rvData` */
export declare class RichValueData extends OxmlPartRootElement<RichValue | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the RichValueBlock Class. Serialized as `xlrd:rvb` */
export declare class RichValueBlock extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** i. Serialized as `:i` */
    get i(): UInt32Value | undefined;
    set i(v: UInt32Value | undefined);
}
export declare function initOffice2019ExcelRichDataNamespace(): {
    prefix: string;
    xmlns: string;
};
