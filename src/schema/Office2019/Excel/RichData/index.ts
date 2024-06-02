import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { Extension as XExtension } from '../../../Spreadsheet';


export enum RichValueFallbackType {
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `n` */
    N = 'n',
    /** undefined. Serialized value: `e` */
    E = 'e',
    /** undefined. Serialized value: `s` */
    S = 's',
}

export const RichValueFallbackTypeArray = [
    RichValueFallbackType.B,
    RichValueFallbackType.N,
    RichValueFallbackType.E,
    RichValueFallbackType.S,
] as const;

export enum RichValueValueType {
    /** undefined. Serialized value: `d` */
    D = 'd',
    /** undefined. Serialized value: `i` */
    I = 'i',
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `e` */
    E = 'e',
    /** undefined. Serialized value: `s` */
    S = 's',
    /** undefined. Serialized value: `r` */
    R = 'r',
    /** undefined. Serialized value: `a` */
    A = 'a',
    /** undefined. Serialized value: `spb` */
    Spb = 'spb',
}

export const RichValueValueTypeArray = [
    RichValueValueType.D,
    RichValueValueType.I,
    RichValueValueType.B,
    RichValueValueType.E,
    RichValueValueType.S,
    RichValueValueType.R,
    RichValueValueType.A,
    RichValueValueType.Spb,
] as const;

/** Defines the Key Class. Serialized as `xlrd:k` */
export class Key extends OxmlLeafElement {

    public static override _Q = 'xlrd:k';
    public static override _A = [':n',':t',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** t. Serialized as `:t` */
    public get t(): RichValueValueType | undefined { return this._g(':t'); }
    public set t(v: RichValueValueType | undefined) { this._s(':t', v); }

}
/** Defines the RichValueStructure Class. Serialized as `xlrd:s` */
export class RichValueStructure extends OxmlCompositeElement<Key> {

    public static override _Q = 'xlrd:s';
    public static override _A = [':t',];
    /** t. Serialized as `:t` */
    public get t(): StringValue | undefined { return this._g(':t'); }
    public set t(v: StringValue | undefined) { this._s(':t', v); }

}
/** Defines the Value Class. Serialized as `xlrd:v` */
export class Value extends OxmlLeafTextElement {

    public static override _Q = 'xlrd:v';

}
/** Defines the RichValueFallback Class. Serialized as `xlrd:fb` */
export class RichValueFallback extends OxmlLeafTextElement {

    public static override _Q = 'xlrd:fb';
    public static override _A = [':t',];
    /** t. Serialized as `:t` */
    public get t(): RichValueFallbackType | undefined { return this._g(':t'); }
    public set t(v: RichValueFallbackType | undefined) { this._s(':t', v); }

}
/** Defines the ExtensionList Class. Serialized as `xlrd:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xlrd:extLst';

}
/** Defines the RichValue Class. Serialized as `xlrd:rv` */
export class RichValue extends OxmlCompositeElement<RichValueFallback | Value> {

    public static override _Q = 'xlrd:rv';
    public static override _A = [':s',];
    /** s. Serialized as `:s` */
    public get s(): UInt32Value | undefined { return this._g(':s'); }
    public set s(v: UInt32Value | undefined) { this._s(':s', v); }
    /** Returns RichValueFallback. */
    public get richValueFallback(): RichValueFallback | undefined { return this._f(RichValueFallback); }

}
/** Defines the RichValueStructures Class. Serialized as `xlrd:rvStructures` */
export class RichValueStructures extends OxmlPartRootElement<RichValueStructure | ExtensionList> {

    public static override _Q = 'xlrd:rvStructures';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the RichValueData Class. Serialized as `xlrd:rvData` */
export class RichValueData extends OxmlPartRootElement<RichValue | ExtensionList> {

    public static override _Q = 'xlrd:rvData';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the RichValueBlock Class. Serialized as `xlrd:rvb` */
export class RichValueBlock extends OxmlLeafElement {

    public static override _Q = 'xlrd:rvb';
    public static override _A = [':i',];
    /** i. Serialized as `:i` */
    public get i(): UInt32Value | undefined { return this._g(':i'); }
    public set i(v: UInt32Value | undefined) { this._s(':i', v); }

}

export function initOffice2019ExcelRichDataNamespace() {
    Key._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, RichValueValueTypeArray),
    };
    RichValueStructure._C = {
        'xlrd:k': Key,
    };
    RichValueStructure._D = {
        ':t': new OxmlAttr(':t', OxmlType.StringValue),
    };
    RichValueFallback._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, RichValueFallbackTypeArray),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    RichValue._C = {
        'xlrd:fb': RichValueFallback,
        'xlrd:v': Value,
    };
    RichValue._D = {
        ':s': new OxmlAttr(':s', OxmlType.UInt32Value),
    };
    RichValueStructures._C = {
        'xlrd:s': RichValueStructure,
        'xlrd:extLst': ExtensionList,
    };
    RichValueStructures._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RichValueData._C = {
        'xlrd:rv': RichValue,
        'xlrd:extLst': ExtensionList,
    };
    RichValueData._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RichValueBlock._D = {
        ':i': new OxmlAttr(':i', OxmlType.UInt32Value),
    };
    return {
        prefix: 'xlrd',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2017/richdata',
    };
}
