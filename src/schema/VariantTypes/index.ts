import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { Int32Value } from '../../framework/types/Int32Value';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { StringValue } from '../../framework/types/StringValue';


export enum VectorBaseValues {
    /** Variant Base Type. Serialized value: `variant` */
    Variant = 'variant',
    /** Vector Base Type Enumeration Value. Serialized value: `i1` */
    OneByteSignedInteger = 'i1',
    /** 2-Byte Signed Integer Base Type. Serialized value: `i2` */
    TwoBytesSignedInteger = 'i2',
    /** 4-Byte Signed Integer Base Type. Serialized value: `i4` */
    FourBytesSignedInteger = 'i4',
    /** 8-Byte Signed Integer Base Type. Serialized value: `i8` */
    EightBytesSignedInteger = 'i8',
    /** 1-Byte Unsigned Integer Base Type. Serialized value: `ui1` */
    OneByteUnsignedInteger = 'ui1',
    /** 2-Byte Unsigned Integer Base Type. Serialized value: `ui2` */
    TwoBytesUnsignedInteger = 'ui2',
    /** 4-Byte Unsigned Integer Base Type. Serialized value: `ui4` */
    FourBytesUnsignedInteger = 'ui4',
    /** 8-Byte Unsigned Integer Base Type. Serialized value: `ui8` */
    EightBytesUnsignedInteger = 'ui8',
    /** 4-Byte Real Number Base Type. Serialized value: `r4` */
    FourBytesReal = 'r4',
    /** 8-Byte Real Number Base Type. Serialized value: `r8` */
    EightBytesReal = 'r8',
    /** LPSTR Base Type. Serialized value: `lpstr` */
    Lpstr = 'lpstr',
    /** LPWSTR Base Type. Serialized value: `lpwstr` */
    Lpwstr = 'lpwstr',
    /** Basic String Base Type. Serialized value: `bstr` */
    Bstr = 'bstr',
    /** Date and Time Base Type. Serialized value: `date` */
    Date = 'date',
    /** File Time Base Type. Serialized value: `filetime` */
    Filetime = 'filetime',
    /** Boolean Base Type. Serialized value: `bool` */
    Bool = 'bool',
    /** Currency Base Type. Serialized value: `cy` */
    Currency = 'cy',
    /** Error Status Code Base Type. Serialized value: `error` */
    Error = 'error',
    /** Class ID Base Type. Serialized value: `clsid` */
    ClassId = 'clsid',
    /** Clipboard Data Base Type. Serialized value: `cf` */
    ClipboardData = 'cf',
}

export const VectorBaseValuesArray = [
    VectorBaseValues.Variant,
    VectorBaseValues.OneByteSignedInteger,
    VectorBaseValues.TwoBytesSignedInteger,
    VectorBaseValues.FourBytesSignedInteger,
    VectorBaseValues.EightBytesSignedInteger,
    VectorBaseValues.OneByteUnsignedInteger,
    VectorBaseValues.TwoBytesUnsignedInteger,
    VectorBaseValues.FourBytesUnsignedInteger,
    VectorBaseValues.EightBytesUnsignedInteger,
    VectorBaseValues.FourBytesReal,
    VectorBaseValues.EightBytesReal,
    VectorBaseValues.Lpstr,
    VectorBaseValues.Lpwstr,
    VectorBaseValues.Bstr,
    VectorBaseValues.Date,
    VectorBaseValues.Filetime,
    VectorBaseValues.Bool,
    VectorBaseValues.Currency,
    VectorBaseValues.Error,
    VectorBaseValues.ClassId,
    VectorBaseValues.ClipboardData,
] as const;

export enum ArrayBaseValues {
    /** Variant Base Type. Serialized value: `variant` */
    Variant = 'variant',
    /** 1-Byte Signed Integer Base Type. Serialized value: `i1` */
    OneByteSignedInteger = 'i1',
    /** 2-Byte Signed Integer Base Type. Serialized value: `i2` */
    TwoBytesSignedInteger = 'i2',
    /** 4-Byte Signed Integer Base Type. Serialized value: `i4` */
    FourBytesSignedInteger = 'i4',
    /** Integer Base Type. Serialized value: `int` */
    Integer = 'int',
    /** 1-Byte Unsigned Integer Base Type. Serialized value: `ui1` */
    OneByteUnsignedInteger = 'ui1',
    /** 2-Byte Unsigned Integer Base Type. Serialized value: `ui2` */
    TwoBytesUnsignedInteger = 'ui2',
    /** 4-Byte Unsigned Integer Base Type. Serialized value: `ui4` */
    FourBytesUnsignedInteger = 'ui4',
    /** Unsigned Integer Base Type. Serialized value: `uint` */
    UnsignedInteger = 'uint',
    /** 4-Byte Real Number Base Type. Serialized value: `r4` */
    FourBytesReal = 'r4',
    /** 8-Byte Real Number Base Type. Serialized value: `r8` */
    EightBytesReal = 'r8',
    /** Decimal Base Type. Serialized value: `decimal` */
    Decimal = 'decimal',
    /** Basic String Base Type. Serialized value: `bstr` */
    Bstr = 'bstr',
    /** Date and Time Base Type. Serialized value: `date` */
    Date = 'date',
    /** Boolean Base Type. Serialized value: `bool` */
    Bool = 'bool',
    /** Currency Base Type. Serialized value: `cy` */
    Currency = 'cy',
    /** Error Status Code Base Type. Serialized value: `error` */
    Error = 'error',
}

export const ArrayBaseValuesArray = [
    ArrayBaseValues.Variant,
    ArrayBaseValues.OneByteSignedInteger,
    ArrayBaseValues.TwoBytesSignedInteger,
    ArrayBaseValues.FourBytesSignedInteger,
    ArrayBaseValues.Integer,
    ArrayBaseValues.OneByteUnsignedInteger,
    ArrayBaseValues.TwoBytesUnsignedInteger,
    ArrayBaseValues.FourBytesUnsignedInteger,
    ArrayBaseValues.UnsignedInteger,
    ArrayBaseValues.FourBytesReal,
    ArrayBaseValues.EightBytesReal,
    ArrayBaseValues.Decimal,
    ArrayBaseValues.Bstr,
    ArrayBaseValues.Date,
    ArrayBaseValues.Bool,
    ArrayBaseValues.Currency,
    ArrayBaseValues.Error,
] as const;

/** Clipboard Data. Serialized as `vt:cf` */
export class VTClipboardData extends OxmlLeafTextElement {

    public static override _Q = 'vt:cf';
    public static override _A = [':format',':size',];
    /** Format Attribute. Serialized as `:format` */
    public get format(): Int32Value | undefined { return this._g(':format'); }
    public set format(v: Int32Value | undefined) { this._s(':format', v); }
    /** size. Serialized as `:size` */
    public get size(): UInt32Value | undefined { return this._g(':size'); }
    public set size(v: UInt32Value | undefined) { this._s(':size', v); }

}
/** Class ID. Serialized as `vt:clsid` */
export class VTClassId extends OxmlLeafTextElement {

    public static override _Q = 'vt:clsid';

}
/** Binary Versioned Stream. Serialized as `vt:vstream` */
export class VTVStreamData extends OxmlLeafTextElement {

    public static override _Q = 'vt:vstream';
    public static override _A = [':version',];
    /** VSTREAM Version Attribute. Serialized as `:version` */
    public get version(): StringValue | undefined { return this._g(':version'); }
    public set version(v: StringValue | undefined) { this._s(':version', v); }

}
/** Error Status Code. Serialized as `vt:error` */
export class VTError extends OxmlLeafTextElement {

    public static override _Q = 'vt:error';

}
/** Currency. Serialized as `vt:cy` */
export class VTCurrency extends OxmlLeafTextElement {

    public static override _Q = 'vt:cy';

}
/** Boolean. Serialized as `vt:bool` */
export class VTBool extends OxmlLeafTextElement {

    public static override _Q = 'vt:bool';

}
/** File Time. Serialized as `vt:filetime` */
export class VTFileTime extends OxmlLeafTextElement {

    public static override _Q = 'vt:filetime';

}
/** Date and Time. Serialized as `vt:date` */
export class VTDate extends OxmlLeafTextElement {

    public static override _Q = 'vt:date';

}
/** Basic String. Serialized as `vt:bstr` */
export class VTBString extends OxmlLeafTextElement {

    public static override _Q = 'vt:bstr';

}
/** LPWSTR. Serialized as `vt:lpwstr` */
export class VTLPWSTR extends OxmlLeafTextElement {

    public static override _Q = 'vt:lpwstr';

}
/** LPSTR. Serialized as `vt:lpstr` */
export class VTLPSTR extends OxmlLeafTextElement {

    public static override _Q = 'vt:lpstr';

}
/** Decimal. Serialized as `vt:decimal` */
export class VTDecimal extends OxmlLeafTextElement {

    public static override _Q = 'vt:decimal';

}
/** 8-Byte Real Number. Serialized as `vt:r8` */
export class VTDouble extends OxmlLeafTextElement {

    public static override _Q = 'vt:r8';

}
/** 4-Byte Real Number. Serialized as `vt:r4` */
export class VTFloat extends OxmlLeafTextElement {

    public static override _Q = 'vt:r4';

}
/** 8-Byte Unsigned Integer. Serialized as `vt:ui8` */
export class VTUnsignedInt64 extends OxmlLeafTextElement {

    public static override _Q = 'vt:ui8';

}
/** Unsigned Integer. Serialized as `vt:uint` */
export class VTUnsignedInteger extends OxmlLeafTextElement {

    public static override _Q = 'vt:uint';

}
/** 4-Byte Unsigned Integer. Serialized as `vt:ui4` */
export class VTUnsignedInt32 extends OxmlLeafTextElement {

    public static override _Q = 'vt:ui4';

}
/** 2-Byte Unsigned Integer. Serialized as `vt:ui2` */
export class VTUnsignedShort extends OxmlLeafTextElement {

    public static override _Q = 'vt:ui2';

}
/** 1-Byte Unsigned Integer. Serialized as `vt:ui1` */
export class VTUnsignedByte extends OxmlLeafTextElement {

    public static override _Q = 'vt:ui1';

}
/** 8-Byte Signed Integer. Serialized as `vt:i8` */
export class VTInt64 extends OxmlLeafTextElement {

    public static override _Q = 'vt:i8';

}
/** Integer. Serialized as `vt:int` */
export class VTInteger extends OxmlLeafTextElement {

    public static override _Q = 'vt:int';

}
/** 4-Byte Signed Integer. Serialized as `vt:i4` */
export class VTInt32 extends OxmlLeafTextElement {

    public static override _Q = 'vt:i4';

}
/** 2-Byte Signed Integer. Serialized as `vt:i2` */
export class VTShort extends OxmlLeafTextElement {

    public static override _Q = 'vt:i2';

}
/** 1-Byte Signed Integer. Serialized as `vt:i1` */
export class VTByte extends OxmlLeafTextElement {

    public static override _Q = 'vt:i1';

}
/** Null. Serialized as `vt:null` */
export class VTNull extends OxmlLeafElement {

    public static override _Q = 'vt:null';

}
/** Empty. Serialized as `vt:empty` */
export class VTEmpty extends OxmlLeafElement {

    public static override _Q = 'vt:empty';

}
/** Binary Storage Object. Serialized as `vt:ostorage` */
export class VTOStorage extends OxmlLeafTextElement {

    public static override _Q = 'vt:ostorage';

}
/** Binary Storage. Serialized as `vt:storage` */
export class VTStorage extends OxmlLeafTextElement {

    public static override _Q = 'vt:storage';

}
/** Binary Stream Object. Serialized as `vt:ostream` */
export class VTOStreamData extends OxmlLeafTextElement {

    public static override _Q = 'vt:ostream';

}
/** Binary Stream. Serialized as `vt:stream` */
export class VTStreamData extends OxmlLeafTextElement {

    public static override _Q = 'vt:stream';

}
/** Binary Blob Object. Serialized as `vt:oblob` */
export class VTOBlob extends OxmlLeafTextElement {

    public static override _Q = 'vt:oblob';

}
/** Binary Blob. Serialized as `vt:blob` */
export class VTBlob extends OxmlLeafTextElement {

    public static override _Q = 'vt:blob';

}
/** Array. Serialized as `vt:array` */
export class VTArray extends OxmlCompositeElement<Variant | VTByte | VTShort | VTInt32 | VTInteger | VTUnsignedByte | VTUnsignedShort | VTUnsignedInt32 | VTUnsignedInteger | VTFloat | VTDouble | VTDecimal | VTBString | VTDate | VTBool | VTError | VTCurrency> {

    public static override _Q = 'vt:array';
    public static override _A = [':lBound',':uBound',':baseType',];
    /** Array Lower Bounds Attribute. Serialized as `:lBound` */
    public get lowerBounds(): Int32Value | undefined { return this._g(':lBound'); }
    public set lowerBounds(v: Int32Value | undefined) { this._s(':lBound', v); }
    /** Array Upper Bounds Attribute. Serialized as `:uBound` */
    public get upperBounds(): Int32Value | undefined { return this._g(':uBound'); }
    public set upperBounds(v: Int32Value | undefined) { this._s(':uBound', v); }
    /** Array Base Type. Serialized as `:baseType` */
    public get baseType(): ArrayBaseValues | undefined { return this._g(':baseType'); }
    public set baseType(v: ArrayBaseValues | undefined) { this._s(':baseType', v); }

}
/** Vector. Serialized as `vt:vector` */
export class VTVector extends OxmlCompositeElement<Variant | VTByte | VTShort | VTInt32 | VTInt64 | VTUnsignedByte | VTUnsignedShort | VTUnsignedInt32 | VTUnsignedInt64 | VTFloat | VTDouble | VTLPSTR | VTLPWSTR | VTBString | VTDate | VTFileTime | VTBool | VTCurrency | VTError | VTClassId | VTClipboardData> {

    public static override _Q = 'vt:vector';
    public static override _A = [':baseType',':size',];
    /** Vector Base Type. Serialized as `:baseType` */
    public get baseType(): VectorBaseValues | undefined { return this._g(':baseType'); }
    public set baseType(v: VectorBaseValues | undefined) { this._s(':baseType', v); }
    /** Vector Size. Serialized as `:size` */
    public get size(): UInt32Value | undefined { return this._g(':size'); }
    public set size(v: UInt32Value | undefined) { this._s(':size', v); }

}
/** Variant. Serialized as `vt:variant` */
export class Variant extends OxmlCompositeElement<Variant | VTVector | VTArray | VTBlob | VTOBlob | VTEmpty | VTNull | VTByte | VTShort | VTInt32 | VTInt64 | VTInteger | VTUnsignedByte | VTUnsignedShort | VTUnsignedInt32 | VTUnsignedInt64 | VTUnsignedInteger | VTFloat | VTDouble | VTDecimal | VTLPSTR | VTLPWSTR | VTBString | VTDate | VTFileTime | VTBool | VTCurrency | VTError | VTStreamData | VTOStreamData | VTStorage | VTOStorage | VTVStreamData | VTClassId | VTClipboardData> {

    public static override _Q = 'vt:variant';
    /** Variant. */
    public get innerVariant(): Variant | undefined { return this._f(Variant); }
    /** Vector. */
    public get vTVector(): VTVector | undefined { return this._f(VTVector); }
    /** Array. */
    public get vTArray(): VTArray | undefined { return this._f(VTArray); }
    /** Binary Blob. */
    public get vTBlob(): VTBlob | undefined { return this._f(VTBlob); }
    /** Binary Blob Object. */
    public get vTOBlob(): VTOBlob | undefined { return this._f(VTOBlob); }
    /** Empty. */
    public get vTEmpty(): VTEmpty | undefined { return this._f(VTEmpty); }
    /** Null. */
    public get vTNull(): VTNull | undefined { return this._f(VTNull); }
    /** 1-Byte Signed Integer. */
    public get vTByte(): VTByte | undefined { return this._f(VTByte); }
    /** 2-Byte Signed Integer. */
    public get vTShort(): VTShort | undefined { return this._f(VTShort); }
    /** 4-Byte Signed Integer. */
    public get vTInt32(): VTInt32 | undefined { return this._f(VTInt32); }
    /** 8-Byte Signed Integer. */
    public get vTInt64(): VTInt64 | undefined { return this._f(VTInt64); }
    /** Integer. */
    public get vTInteger(): VTInteger | undefined { return this._f(VTInteger); }
    /** 1-Byte Unsigned Integer. */
    public get vTUnsignedByte(): VTUnsignedByte | undefined { return this._f(VTUnsignedByte); }
    /** 2-Byte Unsigned Integer. */
    public get vTUnsignedShort(): VTUnsignedShort | undefined { return this._f(VTUnsignedShort); }
    /** 4-Byte Unsigned Integer. */
    public get vTUnsignedInt32(): VTUnsignedInt32 | undefined { return this._f(VTUnsignedInt32); }
    /** 8-Byte Unsigned Integer. */
    public get vTUnsignedInt64(): VTUnsignedInt64 | undefined { return this._f(VTUnsignedInt64); }
    /** Unsigned Integer. */
    public get vTUnsignedInteger(): VTUnsignedInteger | undefined { return this._f(VTUnsignedInteger); }
    /** 4-Byte Real Number. */
    public get vTFloat(): VTFloat | undefined { return this._f(VTFloat); }
    /** 8-Byte Real Number. */
    public get vTDouble(): VTDouble | undefined { return this._f(VTDouble); }
    /** Decimal. */
    public get vTDecimal(): VTDecimal | undefined { return this._f(VTDecimal); }
    /** LPSTR. */
    public get vTLPSTR(): VTLPSTR | undefined { return this._f(VTLPSTR); }
    /** LPWSTR. */
    public get vTLPWSTR(): VTLPWSTR | undefined { return this._f(VTLPWSTR); }
    /** Basic String. */
    public get vTBString(): VTBString | undefined { return this._f(VTBString); }
    /** Date and Time. */
    public get vTDate(): VTDate | undefined { return this._f(VTDate); }
    /** File Time. */
    public get vTFileTime(): VTFileTime | undefined { return this._f(VTFileTime); }
    /** Boolean. */
    public get vTBool(): VTBool | undefined { return this._f(VTBool); }
    /** Currency. */
    public get vTCurrency(): VTCurrency | undefined { return this._f(VTCurrency); }
    /** Error Status Code. */
    public get vTError(): VTError | undefined { return this._f(VTError); }
    /** Binary Stream. */
    public get vTStreamData(): VTStreamData | undefined { return this._f(VTStreamData); }
    /** Binary Stream Object. */
    public get vTOStreamData(): VTOStreamData | undefined { return this._f(VTOStreamData); }
    /** Binary Storage. */
    public get vTStorage(): VTStorage | undefined { return this._f(VTStorage); }
    /** Binary Storage Object. */
    public get vTOStorage(): VTOStorage | undefined { return this._f(VTOStorage); }
    /** Binary Versioned Stream. */
    public get vTVStreamData(): VTVStreamData | undefined { return this._f(VTVStreamData); }
    /** Class ID. */
    public get vTClassId(): VTClassId | undefined { return this._f(VTClassId); }
    /** Clipboard Data. */
    public get vTClipboardData(): VTClipboardData | undefined { return this._f(VTClipboardData); }

}

export function initVariantTypesNamespace() {
    VTClipboardData._D = {
        ':format': new OxmlAttr(':format', OxmlType.Int32Value),
        ':size': new OxmlAttr(':size', OxmlType.UInt32Value),
    };
    VTVStreamData._D = {
        ':version': new OxmlAttr(':version', OxmlType.StringValue),
    };
    VTArray._C = {
        'vt:variant': Variant,
        'vt:i1': VTByte,
        'vt:i2': VTShort,
        'vt:i4': VTInt32,
        'vt:int': VTInteger,
        'vt:ui1': VTUnsignedByte,
        'vt:ui2': VTUnsignedShort,
        'vt:ui4': VTUnsignedInt32,
        'vt:uint': VTUnsignedInteger,
        'vt:r4': VTFloat,
        'vt:r8': VTDouble,
        'vt:decimal': VTDecimal,
        'vt:bstr': VTBString,
        'vt:date': VTDate,
        'vt:bool': VTBool,
        'vt:error': VTError,
        'vt:cy': VTCurrency,
    };
    VTArray._D = {
        ':lBound': new OxmlAttr(':lBound', OxmlType.Int32Value),
        ':uBound': new OxmlAttr(':uBound', OxmlType.Int32Value),
        ':baseType': new OxmlAttr(':baseType', OxmlType.EnumValue, ArrayBaseValuesArray),
    };
    VTVector._C = {
        'vt:variant': Variant,
        'vt:i1': VTByte,
        'vt:i2': VTShort,
        'vt:i4': VTInt32,
        'vt:i8': VTInt64,
        'vt:ui1': VTUnsignedByte,
        'vt:ui2': VTUnsignedShort,
        'vt:ui4': VTUnsignedInt32,
        'vt:ui8': VTUnsignedInt64,
        'vt:r4': VTFloat,
        'vt:r8': VTDouble,
        'vt:lpstr': VTLPSTR,
        'vt:lpwstr': VTLPWSTR,
        'vt:bstr': VTBString,
        'vt:date': VTDate,
        'vt:filetime': VTFileTime,
        'vt:bool': VTBool,
        'vt:cy': VTCurrency,
        'vt:error': VTError,
        'vt:clsid': VTClassId,
        'vt:cf': VTClipboardData,
    };
    VTVector._D = {
        ':baseType': new OxmlAttr(':baseType', OxmlType.EnumValue, VectorBaseValuesArray),
        ':size': new OxmlAttr(':size', OxmlType.UInt32Value),
    };
    Variant._C = {
        'vt:variant': Variant,
        'vt:vector': VTVector,
        'vt:array': VTArray,
        'vt:blob': VTBlob,
        'vt:oblob': VTOBlob,
        'vt:empty': VTEmpty,
        'vt:null': VTNull,
        'vt:i1': VTByte,
        'vt:i2': VTShort,
        'vt:i4': VTInt32,
        'vt:i8': VTInt64,
        'vt:int': VTInteger,
        'vt:ui1': VTUnsignedByte,
        'vt:ui2': VTUnsignedShort,
        'vt:ui4': VTUnsignedInt32,
        'vt:ui8': VTUnsignedInt64,
        'vt:uint': VTUnsignedInteger,
        'vt:r4': VTFloat,
        'vt:r8': VTDouble,
        'vt:decimal': VTDecimal,
        'vt:lpstr': VTLPSTR,
        'vt:lpwstr': VTLPWSTR,
        'vt:bstr': VTBString,
        'vt:date': VTDate,
        'vt:filetime': VTFileTime,
        'vt:bool': VTBool,
        'vt:cy': VTCurrency,
        'vt:error': VTError,
        'vt:stream': VTStreamData,
        'vt:ostream': VTOStreamData,
        'vt:storage': VTStorage,
        'vt:ostorage': VTOStorage,
        'vt:vstream': VTVStreamData,
        'vt:clsid': VTClassId,
        'vt:cf': VTClipboardData,
    };
    return {
        prefix: 'vt',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
    };
}
