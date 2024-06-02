import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { Int32Value } from '../../framework/types/Int32Value';
import { VTVector as VtVTVector } from '../VariantTypes';
import { VTArray as VtVTArray } from '../VariantTypes';
import { VTBlob as VtVTBlob } from '../VariantTypes';
import { VTOBlob as VtVTOBlob } from '../VariantTypes';
import { VTEmpty as VtVTEmpty } from '../VariantTypes';
import { VTNull as VtVTNull } from '../VariantTypes';
import { VTByte as VtVTByte } from '../VariantTypes';
import { VTShort as VtVTShort } from '../VariantTypes';
import { VTInt32 as VtVTInt32 } from '../VariantTypes';
import { VTInt64 as VtVTInt64 } from '../VariantTypes';
import { VTInteger as VtVTInteger } from '../VariantTypes';
import { VTUnsignedByte as VtVTUnsignedByte } from '../VariantTypes';
import { VTUnsignedShort as VtVTUnsignedShort } from '../VariantTypes';
import { VTUnsignedInt32 as VtVTUnsignedInt32 } from '../VariantTypes';
import { VTUnsignedInt64 as VtVTUnsignedInt64 } from '../VariantTypes';
import { VTUnsignedInteger as VtVTUnsignedInteger } from '../VariantTypes';
import { VTFloat as VtVTFloat } from '../VariantTypes';
import { VTDouble as VtVTDouble } from '../VariantTypes';
import { VTDecimal as VtVTDecimal } from '../VariantTypes';
import { VTLPSTR as VtVTLPSTR } from '../VariantTypes';
import { VTLPWSTR as VtVTLPWSTR } from '../VariantTypes';
import { VTBString as VtVTBString } from '../VariantTypes';
import { VTDate as VtVTDate } from '../VariantTypes';
import { VTFileTime as VtVTFileTime } from '../VariantTypes';
import { VTBool as VtVTBool } from '../VariantTypes';
import { VTCurrency as VtVTCurrency } from '../VariantTypes';
import { VTError as VtVTError } from '../VariantTypes';
import { VTStreamData as VtVTStreamData } from '../VariantTypes';
import { VTOStreamData as VtVTOStreamData } from '../VariantTypes';
import { VTStorage as VtVTStorage } from '../VariantTypes';
import { VTOStorage as VtVTOStorage } from '../VariantTypes';
import { VTVStreamData as VtVTVStreamData } from '../VariantTypes';
import { VTClassId as VtVTClassId } from '../VariantTypes';
import { VTClipboardData as VtVTClipboardData } from '../VariantTypes';


/** Custom File Property. Serialized as `op:property` */
export class CustomDocumentProperty extends OxmlCompositeElement<VtVTVector | VtVTArray | VtVTBlob | VtVTOBlob | VtVTEmpty | VtVTNull | VtVTByte | VtVTShort | VtVTInt32 | VtVTInt64 | VtVTInteger | VtVTUnsignedByte | VtVTUnsignedShort | VtVTUnsignedInt32 | VtVTUnsignedInt64 | VtVTUnsignedInteger | VtVTFloat | VtVTDouble | VtVTDecimal | VtVTLPSTR | VtVTLPWSTR | VtVTBString | VtVTDate | VtVTFileTime | VtVTBool | VtVTCurrency | VtVTError | VtVTStreamData | VtVTOStreamData | VtVTStorage | VtVTOStorage | VtVTVStreamData | VtVTClassId | VtVTClipboardData> {

    public static override _Q = 'op:property';
    public static override _A = [':fmtid',':pid',':name',':linkTarget',];
    /** Format ID. Serialized as `:fmtid` */
    public get formatId(): StringValue | undefined { return this._g(':fmtid'); }
    public set formatId(v: StringValue | undefined) { this._s(':fmtid', v); }
    /** Property ID. Serialized as `:pid` */
    public get propertyId(): Int32Value | undefined { return this._g(':pid'); }
    public set propertyId(v: Int32Value | undefined) { this._s(':pid', v); }
    /** Custom File Property Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Bookmark Link Target. Serialized as `:linkTarget` */
    public get linkTarget(): StringValue | undefined { return this._g(':linkTarget'); }
    public set linkTarget(v: StringValue | undefined) { this._s(':linkTarget', v); }
    /** Vector. */
    public get vTVector(): VtVTVector | undefined { return this._f(VtVTVector); }
    /** Array. */
    public get vTArray(): VtVTArray | undefined { return this._f(VtVTArray); }
    /** Binary Blob. */
    public get vTBlob(): VtVTBlob | undefined { return this._f(VtVTBlob); }
    /** Binary Blob Object. */
    public get vTOBlob(): VtVTOBlob | undefined { return this._f(VtVTOBlob); }
    /** Empty. */
    public get vTEmpty(): VtVTEmpty | undefined { return this._f(VtVTEmpty); }
    /** Null. */
    public get vTNull(): VtVTNull | undefined { return this._f(VtVTNull); }
    /** 1-Byte Signed Integer. */
    public get vTByte(): VtVTByte | undefined { return this._f(VtVTByte); }
    /** 2-Byte Signed Integer. */
    public get vTShort(): VtVTShort | undefined { return this._f(VtVTShort); }
    /** 4-Byte Signed Integer. */
    public get vTInt32(): VtVTInt32 | undefined { return this._f(VtVTInt32); }
    /** 8-Byte Signed Integer. */
    public get vTInt64(): VtVTInt64 | undefined { return this._f(VtVTInt64); }
    /** Integer. */
    public get vTInteger(): VtVTInteger | undefined { return this._f(VtVTInteger); }
    /** 1-Byte Unsigned Integer. */
    public get vTUnsignedByte(): VtVTUnsignedByte | undefined { return this._f(VtVTUnsignedByte); }
    /** 2-Byte Unsigned Integer. */
    public get vTUnsignedShort(): VtVTUnsignedShort | undefined { return this._f(VtVTUnsignedShort); }
    /** 4-Byte Unsigned Integer. */
    public get vTUnsignedInt32(): VtVTUnsignedInt32 | undefined { return this._f(VtVTUnsignedInt32); }
    /** 8-Byte Unsigned Integer. */
    public get vTUnsignedInt64(): VtVTUnsignedInt64 | undefined { return this._f(VtVTUnsignedInt64); }
    /** Unsigned Integer. */
    public get vTUnsignedInteger(): VtVTUnsignedInteger | undefined { return this._f(VtVTUnsignedInteger); }
    /** 4-Byte Real Number. */
    public get vTFloat(): VtVTFloat | undefined { return this._f(VtVTFloat); }
    /** 8-Byte Real Number. */
    public get vTDouble(): VtVTDouble | undefined { return this._f(VtVTDouble); }
    /** Decimal. */
    public get vTDecimal(): VtVTDecimal | undefined { return this._f(VtVTDecimal); }
    /** LPSTR. */
    public get vTLPSTR(): VtVTLPSTR | undefined { return this._f(VtVTLPSTR); }
    /** LPWSTR. */
    public get vTLPWSTR(): VtVTLPWSTR | undefined { return this._f(VtVTLPWSTR); }
    /** Basic String. */
    public get vTBString(): VtVTBString | undefined { return this._f(VtVTBString); }
    /** Date and Time. */
    public get vTDate(): VtVTDate | undefined { return this._f(VtVTDate); }
    /** File Time. */
    public get vTFileTime(): VtVTFileTime | undefined { return this._f(VtVTFileTime); }
    /** Boolean. */
    public get vTBool(): VtVTBool | undefined { return this._f(VtVTBool); }
    /** Currency. */
    public get vTCurrency(): VtVTCurrency | undefined { return this._f(VtVTCurrency); }
    /** Error Status Code. */
    public get vTError(): VtVTError | undefined { return this._f(VtVTError); }
    /** Binary Stream. */
    public get vTStreamData(): VtVTStreamData | undefined { return this._f(VtVTStreamData); }
    /** Binary Stream Object. */
    public get vTOStreamData(): VtVTOStreamData | undefined { return this._f(VtVTOStreamData); }
    /** Binary Storage. */
    public get vTStorage(): VtVTStorage | undefined { return this._f(VtVTStorage); }
    /** Binary Storage Object. */
    public get vTOStorage(): VtVTOStorage | undefined { return this._f(VtVTOStorage); }
    /** Binary Versioned Stream. */
    public get vTVStreamData(): VtVTVStreamData | undefined { return this._f(VtVTVStreamData); }
    /** Class ID. */
    public get vTClassId(): VtVTClassId | undefined { return this._f(VtVTClassId); }
    /** Clipboard Data. */
    public get vTClipboardData(): VtVTClipboardData | undefined { return this._f(VtVTClipboardData); }

}
/** Custom File Properties. Serialized as `op:Properties` */
export class Properties extends OxmlPartRootElement<CustomDocumentProperty> {

    public static override _Q = 'op:Properties';

}

export function initCustomPropertiesNamespace() {
    CustomDocumentProperty._C = {
        'vt:vector': VtVTVector,
        'vt:array': VtVTArray,
        'vt:blob': VtVTBlob,
        'vt:oblob': VtVTOBlob,
        'vt:empty': VtVTEmpty,
        'vt:null': VtVTNull,
        'vt:i1': VtVTByte,
        'vt:i2': VtVTShort,
        'vt:i4': VtVTInt32,
        'vt:i8': VtVTInt64,
        'vt:int': VtVTInteger,
        'vt:ui1': VtVTUnsignedByte,
        'vt:ui2': VtVTUnsignedShort,
        'vt:ui4': VtVTUnsignedInt32,
        'vt:ui8': VtVTUnsignedInt64,
        'vt:uint': VtVTUnsignedInteger,
        'vt:r4': VtVTFloat,
        'vt:r8': VtVTDouble,
        'vt:decimal': VtVTDecimal,
        'vt:lpstr': VtVTLPSTR,
        'vt:lpwstr': VtVTLPWSTR,
        'vt:bstr': VtVTBString,
        'vt:date': VtVTDate,
        'vt:filetime': VtVTFileTime,
        'vt:bool': VtVTBool,
        'vt:cy': VtVTCurrency,
        'vt:error': VtVTError,
        'vt:stream': VtVTStreamData,
        'vt:ostream': VtVTOStreamData,
        'vt:storage': VtVTStorage,
        'vt:ostorage': VtVTOStorage,
        'vt:vstream': VtVTVStreamData,
        'vt:clsid': VtVTClassId,
        'vt:cf': VtVTClipboardData,
    };
    CustomDocumentProperty._D = {
        ':fmtid': new OxmlAttr(':fmtid', OxmlType.StringValue),
        ':pid': new OxmlAttr(':pid', OxmlType.Int32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':linkTarget': new OxmlAttr(':linkTarget', OxmlType.StringValue),
    };
    Properties._C = {
        'op:property': CustomDocumentProperty,
    };
    return {
        prefix: 'op',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/custom-properties',
    };
}
