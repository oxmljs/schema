import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
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
export declare class CustomDocumentProperty extends OxmlCompositeElement<VtVTVector | VtVTArray | VtVTBlob | VtVTOBlob | VtVTEmpty | VtVTNull | VtVTByte | VtVTShort | VtVTInt32 | VtVTInt64 | VtVTInteger | VtVTUnsignedByte | VtVTUnsignedShort | VtVTUnsignedInt32 | VtVTUnsignedInt64 | VtVTUnsignedInteger | VtVTFloat | VtVTDouble | VtVTDecimal | VtVTLPSTR | VtVTLPWSTR | VtVTBString | VtVTDate | VtVTFileTime | VtVTBool | VtVTCurrency | VtVTError | VtVTStreamData | VtVTOStreamData | VtVTStorage | VtVTOStorage | VtVTVStreamData | VtVTClassId | VtVTClipboardData> {
    static _Q: string;
    static _A: string[];
    /** Format ID. Serialized as `:fmtid` */
    get formatId(): StringValue | undefined;
    set formatId(v: StringValue | undefined);
    /** Property ID. Serialized as `:pid` */
    get propertyId(): Int32Value | undefined;
    set propertyId(v: Int32Value | undefined);
    /** Custom File Property Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Bookmark Link Target. Serialized as `:linkTarget` */
    get linkTarget(): StringValue | undefined;
    set linkTarget(v: StringValue | undefined);
    /** Vector. */
    get vTVector(): VtVTVector | undefined;
    /** Array. */
    get vTArray(): VtVTArray | undefined;
    /** Binary Blob. */
    get vTBlob(): VtVTBlob | undefined;
    /** Binary Blob Object. */
    get vTOBlob(): VtVTOBlob | undefined;
    /** Empty. */
    get vTEmpty(): VtVTEmpty | undefined;
    /** Null. */
    get vTNull(): VtVTNull | undefined;
    /** 1-Byte Signed Integer. */
    get vTByte(): VtVTByte | undefined;
    /** 2-Byte Signed Integer. */
    get vTShort(): VtVTShort | undefined;
    /** 4-Byte Signed Integer. */
    get vTInt32(): VtVTInt32 | undefined;
    /** 8-Byte Signed Integer. */
    get vTInt64(): VtVTInt64 | undefined;
    /** Integer. */
    get vTInteger(): VtVTInteger | undefined;
    /** 1-Byte Unsigned Integer. */
    get vTUnsignedByte(): VtVTUnsignedByte | undefined;
    /** 2-Byte Unsigned Integer. */
    get vTUnsignedShort(): VtVTUnsignedShort | undefined;
    /** 4-Byte Unsigned Integer. */
    get vTUnsignedInt32(): VtVTUnsignedInt32 | undefined;
    /** 8-Byte Unsigned Integer. */
    get vTUnsignedInt64(): VtVTUnsignedInt64 | undefined;
    /** Unsigned Integer. */
    get vTUnsignedInteger(): VtVTUnsignedInteger | undefined;
    /** 4-Byte Real Number. */
    get vTFloat(): VtVTFloat | undefined;
    /** 8-Byte Real Number. */
    get vTDouble(): VtVTDouble | undefined;
    /** Decimal. */
    get vTDecimal(): VtVTDecimal | undefined;
    /** LPSTR. */
    get vTLPSTR(): VtVTLPSTR | undefined;
    /** LPWSTR. */
    get vTLPWSTR(): VtVTLPWSTR | undefined;
    /** Basic String. */
    get vTBString(): VtVTBString | undefined;
    /** Date and Time. */
    get vTDate(): VtVTDate | undefined;
    /** File Time. */
    get vTFileTime(): VtVTFileTime | undefined;
    /** Boolean. */
    get vTBool(): VtVTBool | undefined;
    /** Currency. */
    get vTCurrency(): VtVTCurrency | undefined;
    /** Error Status Code. */
    get vTError(): VtVTError | undefined;
    /** Binary Stream. */
    get vTStreamData(): VtVTStreamData | undefined;
    /** Binary Stream Object. */
    get vTOStreamData(): VtVTOStreamData | undefined;
    /** Binary Storage. */
    get vTStorage(): VtVTStorage | undefined;
    /** Binary Storage Object. */
    get vTOStorage(): VtVTOStorage | undefined;
    /** Binary Versioned Stream. */
    get vTVStreamData(): VtVTVStreamData | undefined;
    /** Class ID. */
    get vTClassId(): VtVTClassId | undefined;
    /** Clipboard Data. */
    get vTClipboardData(): VtVTClipboardData | undefined;
}
/** Custom File Properties. Serialized as `op:Properties` */
export declare class Properties extends OxmlPartRootElement<CustomDocumentProperty> {
    static _Q: string;
}
export declare function initCustomPropertiesNamespace(): {
    prefix: string;
    xmlns: string;
};
