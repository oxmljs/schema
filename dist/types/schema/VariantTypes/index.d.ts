import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { Int32Value } from '../../framework/types/Int32Value';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { StringValue } from '../../framework/types/StringValue';
export declare enum VectorBaseValues {
    /** Variant Base Type. Serialized value: `variant` */
    Variant = "variant",
    /** Vector Base Type Enumeration Value. Serialized value: `i1` */
    OneByteSignedInteger = "i1",
    /** 2-Byte Signed Integer Base Type. Serialized value: `i2` */
    TwoBytesSignedInteger = "i2",
    /** 4-Byte Signed Integer Base Type. Serialized value: `i4` */
    FourBytesSignedInteger = "i4",
    /** 8-Byte Signed Integer Base Type. Serialized value: `i8` */
    EightBytesSignedInteger = "i8",
    /** 1-Byte Unsigned Integer Base Type. Serialized value: `ui1` */
    OneByteUnsignedInteger = "ui1",
    /** 2-Byte Unsigned Integer Base Type. Serialized value: `ui2` */
    TwoBytesUnsignedInteger = "ui2",
    /** 4-Byte Unsigned Integer Base Type. Serialized value: `ui4` */
    FourBytesUnsignedInteger = "ui4",
    /** 8-Byte Unsigned Integer Base Type. Serialized value: `ui8` */
    EightBytesUnsignedInteger = "ui8",
    /** 4-Byte Real Number Base Type. Serialized value: `r4` */
    FourBytesReal = "r4",
    /** 8-Byte Real Number Base Type. Serialized value: `r8` */
    EightBytesReal = "r8",
    /** LPSTR Base Type. Serialized value: `lpstr` */
    Lpstr = "lpstr",
    /** LPWSTR Base Type. Serialized value: `lpwstr` */
    Lpwstr = "lpwstr",
    /** Basic String Base Type. Serialized value: `bstr` */
    Bstr = "bstr",
    /** Date and Time Base Type. Serialized value: `date` */
    Date = "date",
    /** File Time Base Type. Serialized value: `filetime` */
    Filetime = "filetime",
    /** Boolean Base Type. Serialized value: `bool` */
    Bool = "bool",
    /** Currency Base Type. Serialized value: `cy` */
    Currency = "cy",
    /** Error Status Code Base Type. Serialized value: `error` */
    Error = "error",
    /** Class ID Base Type. Serialized value: `clsid` */
    ClassId = "clsid",
    /** Clipboard Data Base Type. Serialized value: `cf` */
    ClipboardData = "cf"
}
export declare const VectorBaseValuesArray: readonly [VectorBaseValues.Variant, VectorBaseValues.OneByteSignedInteger, VectorBaseValues.TwoBytesSignedInteger, VectorBaseValues.FourBytesSignedInteger, VectorBaseValues.EightBytesSignedInteger, VectorBaseValues.OneByteUnsignedInteger, VectorBaseValues.TwoBytesUnsignedInteger, VectorBaseValues.FourBytesUnsignedInteger, VectorBaseValues.EightBytesUnsignedInteger, VectorBaseValues.FourBytesReal, VectorBaseValues.EightBytesReal, VectorBaseValues.Lpstr, VectorBaseValues.Lpwstr, VectorBaseValues.Bstr, VectorBaseValues.Date, VectorBaseValues.Filetime, VectorBaseValues.Bool, VectorBaseValues.Currency, VectorBaseValues.Error, VectorBaseValues.ClassId, VectorBaseValues.ClipboardData];
export declare enum ArrayBaseValues {
    /** Variant Base Type. Serialized value: `variant` */
    Variant = "variant",
    /** 1-Byte Signed Integer Base Type. Serialized value: `i1` */
    OneByteSignedInteger = "i1",
    /** 2-Byte Signed Integer Base Type. Serialized value: `i2` */
    TwoBytesSignedInteger = "i2",
    /** 4-Byte Signed Integer Base Type. Serialized value: `i4` */
    FourBytesSignedInteger = "i4",
    /** Integer Base Type. Serialized value: `int` */
    Integer = "int",
    /** 1-Byte Unsigned Integer Base Type. Serialized value: `ui1` */
    OneByteUnsignedInteger = "ui1",
    /** 2-Byte Unsigned Integer Base Type. Serialized value: `ui2` */
    TwoBytesUnsignedInteger = "ui2",
    /** 4-Byte Unsigned Integer Base Type. Serialized value: `ui4` */
    FourBytesUnsignedInteger = "ui4",
    /** Unsigned Integer Base Type. Serialized value: `uint` */
    UnsignedInteger = "uint",
    /** 4-Byte Real Number Base Type. Serialized value: `r4` */
    FourBytesReal = "r4",
    /** 8-Byte Real Number Base Type. Serialized value: `r8` */
    EightBytesReal = "r8",
    /** Decimal Base Type. Serialized value: `decimal` */
    Decimal = "decimal",
    /** Basic String Base Type. Serialized value: `bstr` */
    Bstr = "bstr",
    /** Date and Time Base Type. Serialized value: `date` */
    Date = "date",
    /** Boolean Base Type. Serialized value: `bool` */
    Bool = "bool",
    /** Currency Base Type. Serialized value: `cy` */
    Currency = "cy",
    /** Error Status Code Base Type. Serialized value: `error` */
    Error = "error"
}
export declare const ArrayBaseValuesArray: readonly [ArrayBaseValues.Variant, ArrayBaseValues.OneByteSignedInteger, ArrayBaseValues.TwoBytesSignedInteger, ArrayBaseValues.FourBytesSignedInteger, ArrayBaseValues.Integer, ArrayBaseValues.OneByteUnsignedInteger, ArrayBaseValues.TwoBytesUnsignedInteger, ArrayBaseValues.FourBytesUnsignedInteger, ArrayBaseValues.UnsignedInteger, ArrayBaseValues.FourBytesReal, ArrayBaseValues.EightBytesReal, ArrayBaseValues.Decimal, ArrayBaseValues.Bstr, ArrayBaseValues.Date, ArrayBaseValues.Bool, ArrayBaseValues.Currency, ArrayBaseValues.Error];
/** Clipboard Data. Serialized as `vt:cf` */
export declare class VTClipboardData extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** Format Attribute. Serialized as `:format` */
    get format(): Int32Value | undefined;
    set format(v: Int32Value | undefined);
    /** size. Serialized as `:size` */
    get size(): UInt32Value | undefined;
    set size(v: UInt32Value | undefined);
}
/** Class ID. Serialized as `vt:clsid` */
export declare class VTClassId extends OxmlLeafTextElement {
    static _Q: string;
}
/** Binary Versioned Stream. Serialized as `vt:vstream` */
export declare class VTVStreamData extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** VSTREAM Version Attribute. Serialized as `:version` */
    get version(): StringValue | undefined;
    set version(v: StringValue | undefined);
}
/** Error Status Code. Serialized as `vt:error` */
export declare class VTError extends OxmlLeafTextElement {
    static _Q: string;
}
/** Currency. Serialized as `vt:cy` */
export declare class VTCurrency extends OxmlLeafTextElement {
    static _Q: string;
}
/** Boolean. Serialized as `vt:bool` */
export declare class VTBool extends OxmlLeafTextElement {
    static _Q: string;
}
/** File Time. Serialized as `vt:filetime` */
export declare class VTFileTime extends OxmlLeafTextElement {
    static _Q: string;
}
/** Date and Time. Serialized as `vt:date` */
export declare class VTDate extends OxmlLeafTextElement {
    static _Q: string;
}
/** Basic String. Serialized as `vt:bstr` */
export declare class VTBString extends OxmlLeafTextElement {
    static _Q: string;
}
/** LPWSTR. Serialized as `vt:lpwstr` */
export declare class VTLPWSTR extends OxmlLeafTextElement {
    static _Q: string;
}
/** LPSTR. Serialized as `vt:lpstr` */
export declare class VTLPSTR extends OxmlLeafTextElement {
    static _Q: string;
}
/** Decimal. Serialized as `vt:decimal` */
export declare class VTDecimal extends OxmlLeafTextElement {
    static _Q: string;
}
/** 8-Byte Real Number. Serialized as `vt:r8` */
export declare class VTDouble extends OxmlLeafTextElement {
    static _Q: string;
}
/** 4-Byte Real Number. Serialized as `vt:r4` */
export declare class VTFloat extends OxmlLeafTextElement {
    static _Q: string;
}
/** 8-Byte Unsigned Integer. Serialized as `vt:ui8` */
export declare class VTUnsignedInt64 extends OxmlLeafTextElement {
    static _Q: string;
}
/** Unsigned Integer. Serialized as `vt:uint` */
export declare class VTUnsignedInteger extends OxmlLeafTextElement {
    static _Q: string;
}
/** 4-Byte Unsigned Integer. Serialized as `vt:ui4` */
export declare class VTUnsignedInt32 extends OxmlLeafTextElement {
    static _Q: string;
}
/** 2-Byte Unsigned Integer. Serialized as `vt:ui2` */
export declare class VTUnsignedShort extends OxmlLeafTextElement {
    static _Q: string;
}
/** 1-Byte Unsigned Integer. Serialized as `vt:ui1` */
export declare class VTUnsignedByte extends OxmlLeafTextElement {
    static _Q: string;
}
/** 8-Byte Signed Integer. Serialized as `vt:i8` */
export declare class VTInt64 extends OxmlLeafTextElement {
    static _Q: string;
}
/** Integer. Serialized as `vt:int` */
export declare class VTInteger extends OxmlLeafTextElement {
    static _Q: string;
}
/** 4-Byte Signed Integer. Serialized as `vt:i4` */
export declare class VTInt32 extends OxmlLeafTextElement {
    static _Q: string;
}
/** 2-Byte Signed Integer. Serialized as `vt:i2` */
export declare class VTShort extends OxmlLeafTextElement {
    static _Q: string;
}
/** 1-Byte Signed Integer. Serialized as `vt:i1` */
export declare class VTByte extends OxmlLeafTextElement {
    static _Q: string;
}
/** Null. Serialized as `vt:null` */
export declare class VTNull extends OxmlLeafElement {
    static _Q: string;
}
/** Empty. Serialized as `vt:empty` */
export declare class VTEmpty extends OxmlLeafElement {
    static _Q: string;
}
/** Binary Storage Object. Serialized as `vt:ostorage` */
export declare class VTOStorage extends OxmlLeafTextElement {
    static _Q: string;
}
/** Binary Storage. Serialized as `vt:storage` */
export declare class VTStorage extends OxmlLeafTextElement {
    static _Q: string;
}
/** Binary Stream Object. Serialized as `vt:ostream` */
export declare class VTOStreamData extends OxmlLeafTextElement {
    static _Q: string;
}
/** Binary Stream. Serialized as `vt:stream` */
export declare class VTStreamData extends OxmlLeafTextElement {
    static _Q: string;
}
/** Binary Blob Object. Serialized as `vt:oblob` */
export declare class VTOBlob extends OxmlLeafTextElement {
    static _Q: string;
}
/** Binary Blob. Serialized as `vt:blob` */
export declare class VTBlob extends OxmlLeafTextElement {
    static _Q: string;
}
/** Array. Serialized as `vt:array` */
export declare class VTArray extends OxmlCompositeElement<Variant | VTByte | VTShort | VTInt32 | VTInteger | VTUnsignedByte | VTUnsignedShort | VTUnsignedInt32 | VTUnsignedInteger | VTFloat | VTDouble | VTDecimal | VTBString | VTDate | VTBool | VTError | VTCurrency> {
    static _Q: string;
    static _A: string[];
    /** Array Lower Bounds Attribute. Serialized as `:lBound` */
    get lowerBounds(): Int32Value | undefined;
    set lowerBounds(v: Int32Value | undefined);
    /** Array Upper Bounds Attribute. Serialized as `:uBound` */
    get upperBounds(): Int32Value | undefined;
    set upperBounds(v: Int32Value | undefined);
    /** Array Base Type. Serialized as `:baseType` */
    get baseType(): ArrayBaseValues | undefined;
    set baseType(v: ArrayBaseValues | undefined);
}
/** Vector. Serialized as `vt:vector` */
export declare class VTVector extends OxmlCompositeElement<Variant | VTByte | VTShort | VTInt32 | VTInt64 | VTUnsignedByte | VTUnsignedShort | VTUnsignedInt32 | VTUnsignedInt64 | VTFloat | VTDouble | VTLPSTR | VTLPWSTR | VTBString | VTDate | VTFileTime | VTBool | VTCurrency | VTError | VTClassId | VTClipboardData> {
    static _Q: string;
    static _A: string[];
    /** Vector Base Type. Serialized as `:baseType` */
    get baseType(): VectorBaseValues | undefined;
    set baseType(v: VectorBaseValues | undefined);
    /** Vector Size. Serialized as `:size` */
    get size(): UInt32Value | undefined;
    set size(v: UInt32Value | undefined);
}
/** Variant. Serialized as `vt:variant` */
export declare class Variant extends OxmlCompositeElement<Variant | VTVector | VTArray | VTBlob | VTOBlob | VTEmpty | VTNull | VTByte | VTShort | VTInt32 | VTInt64 | VTInteger | VTUnsignedByte | VTUnsignedShort | VTUnsignedInt32 | VTUnsignedInt64 | VTUnsignedInteger | VTFloat | VTDouble | VTDecimal | VTLPSTR | VTLPWSTR | VTBString | VTDate | VTFileTime | VTBool | VTCurrency | VTError | VTStreamData | VTOStreamData | VTStorage | VTOStorage | VTVStreamData | VTClassId | VTClipboardData> {
    static _Q: string;
    /** Variant. */
    get innerVariant(): Variant | undefined;
    /** Vector. */
    get vTVector(): VTVector | undefined;
    /** Array. */
    get vTArray(): VTArray | undefined;
    /** Binary Blob. */
    get vTBlob(): VTBlob | undefined;
    /** Binary Blob Object. */
    get vTOBlob(): VTOBlob | undefined;
    /** Empty. */
    get vTEmpty(): VTEmpty | undefined;
    /** Null. */
    get vTNull(): VTNull | undefined;
    /** 1-Byte Signed Integer. */
    get vTByte(): VTByte | undefined;
    /** 2-Byte Signed Integer. */
    get vTShort(): VTShort | undefined;
    /** 4-Byte Signed Integer. */
    get vTInt32(): VTInt32 | undefined;
    /** 8-Byte Signed Integer. */
    get vTInt64(): VTInt64 | undefined;
    /** Integer. */
    get vTInteger(): VTInteger | undefined;
    /** 1-Byte Unsigned Integer. */
    get vTUnsignedByte(): VTUnsignedByte | undefined;
    /** 2-Byte Unsigned Integer. */
    get vTUnsignedShort(): VTUnsignedShort | undefined;
    /** 4-Byte Unsigned Integer. */
    get vTUnsignedInt32(): VTUnsignedInt32 | undefined;
    /** 8-Byte Unsigned Integer. */
    get vTUnsignedInt64(): VTUnsignedInt64 | undefined;
    /** Unsigned Integer. */
    get vTUnsignedInteger(): VTUnsignedInteger | undefined;
    /** 4-Byte Real Number. */
    get vTFloat(): VTFloat | undefined;
    /** 8-Byte Real Number. */
    get vTDouble(): VTDouble | undefined;
    /** Decimal. */
    get vTDecimal(): VTDecimal | undefined;
    /** LPSTR. */
    get vTLPSTR(): VTLPSTR | undefined;
    /** LPWSTR. */
    get vTLPWSTR(): VTLPWSTR | undefined;
    /** Basic String. */
    get vTBString(): VTBString | undefined;
    /** Date and Time. */
    get vTDate(): VTDate | undefined;
    /** File Time. */
    get vTFileTime(): VTFileTime | undefined;
    /** Boolean. */
    get vTBool(): VTBool | undefined;
    /** Currency. */
    get vTCurrency(): VTCurrency | undefined;
    /** Error Status Code. */
    get vTError(): VTError | undefined;
    /** Binary Stream. */
    get vTStreamData(): VTStreamData | undefined;
    /** Binary Stream Object. */
    get vTOStreamData(): VTOStreamData | undefined;
    /** Binary Storage. */
    get vTStorage(): VTStorage | undefined;
    /** Binary Storage Object. */
    get vTOStorage(): VTOStorage | undefined;
    /** Binary Versioned Stream. */
    get vTVStreamData(): VTVStreamData | undefined;
    /** Class ID. */
    get vTClassId(): VTClassId | undefined;
    /** Clipboard Data. */
    get vTClipboardData(): VTClipboardData | undefined;
}
export declare function initVariantTypesNamespace(): {
    prefix: string;
    xmlns: string;
};
