import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { VTVector as VtVTVector } from "../VariantTypes";
import { VTArray as VtVTArray } from "../VariantTypes";
import { VTBlob as VtVTBlob } from "../VariantTypes";
import { VTOBlob as VtVTOBlob } from "../VariantTypes";
import { VTEmpty as VtVTEmpty } from "../VariantTypes";
import { VTNull as VtVTNull } from "../VariantTypes";
import { VTByte as VtVTByte } from "../VariantTypes";
import { VTShort as VtVTShort } from "../VariantTypes";
import { VTInt32 as VtVTInt32 } from "../VariantTypes";
import { VTInt64 as VtVTInt64 } from "../VariantTypes";
import { VTInteger as VtVTInteger } from "../VariantTypes";
import { VTUnsignedByte as VtVTUnsignedByte } from "../VariantTypes";
import { VTUnsignedShort as VtVTUnsignedShort } from "../VariantTypes";
import { VTUnsignedInt32 as VtVTUnsignedInt32 } from "../VariantTypes";
import { VTUnsignedInt64 as VtVTUnsignedInt64 } from "../VariantTypes";
import { VTUnsignedInteger as VtVTUnsignedInteger } from "../VariantTypes";
import { VTFloat as VtVTFloat } from "../VariantTypes";
import { VTDouble as VtVTDouble } from "../VariantTypes";
import { VTDecimal as VtVTDecimal } from "../VariantTypes";
import { VTLPSTR as VtVTLPSTR } from "../VariantTypes";
import { VTLPWSTR as VtVTLPWSTR } from "../VariantTypes";
import { VTBString as VtVTBString } from "../VariantTypes";
import { VTDate as VtVTDate } from "../VariantTypes";
import { VTFileTime as VtVTFileTime } from "../VariantTypes";
import { VTBool as VtVTBool } from "../VariantTypes";
import { VTCurrency as VtVTCurrency } from "../VariantTypes";
import { VTError as VtVTError } from "../VariantTypes";
import { VTStreamData as VtVTStreamData } from "../VariantTypes";
import { VTOStreamData as VtVTOStreamData } from "../VariantTypes";
import { VTStorage as VtVTStorage } from "../VariantTypes";
import { VTOStorage as VtVTOStorage } from "../VariantTypes";
import { VTVStreamData as VtVTVStreamData } from "../VariantTypes";
import { VTClassId as VtVTClassId } from "../VariantTypes";
import { VTClipboardData as VtVTClipboardData } from "../VariantTypes";
class CustomDocumentProperty extends OxmlCompositeElement {
  static _Q = "op:property";
  static _A = [":fmtid", ":pid", ":name", ":linkTarget"];
  /** Format ID. Serialized as `:fmtid` */
  get formatId() {
    return this._g(":fmtid");
  }
  set formatId(v) {
    this._s(":fmtid", v);
  }
  /** Property ID. Serialized as `:pid` */
  get propertyId() {
    return this._g(":pid");
  }
  set propertyId(v) {
    this._s(":pid", v);
  }
  /** Custom File Property Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Bookmark Link Target. Serialized as `:linkTarget` */
  get linkTarget() {
    return this._g(":linkTarget");
  }
  set linkTarget(v) {
    this._s(":linkTarget", v);
  }
  /** Vector. */
  get vTVector() {
    return this._f(VtVTVector);
  }
  /** Array. */
  get vTArray() {
    return this._f(VtVTArray);
  }
  /** Binary Blob. */
  get vTBlob() {
    return this._f(VtVTBlob);
  }
  /** Binary Blob Object. */
  get vTOBlob() {
    return this._f(VtVTOBlob);
  }
  /** Empty. */
  get vTEmpty() {
    return this._f(VtVTEmpty);
  }
  /** Null. */
  get vTNull() {
    return this._f(VtVTNull);
  }
  /** 1-Byte Signed Integer. */
  get vTByte() {
    return this._f(VtVTByte);
  }
  /** 2-Byte Signed Integer. */
  get vTShort() {
    return this._f(VtVTShort);
  }
  /** 4-Byte Signed Integer. */
  get vTInt32() {
    return this._f(VtVTInt32);
  }
  /** 8-Byte Signed Integer. */
  get vTInt64() {
    return this._f(VtVTInt64);
  }
  /** Integer. */
  get vTInteger() {
    return this._f(VtVTInteger);
  }
  /** 1-Byte Unsigned Integer. */
  get vTUnsignedByte() {
    return this._f(VtVTUnsignedByte);
  }
  /** 2-Byte Unsigned Integer. */
  get vTUnsignedShort() {
    return this._f(VtVTUnsignedShort);
  }
  /** 4-Byte Unsigned Integer. */
  get vTUnsignedInt32() {
    return this._f(VtVTUnsignedInt32);
  }
  /** 8-Byte Unsigned Integer. */
  get vTUnsignedInt64() {
    return this._f(VtVTUnsignedInt64);
  }
  /** Unsigned Integer. */
  get vTUnsignedInteger() {
    return this._f(VtVTUnsignedInteger);
  }
  /** 4-Byte Real Number. */
  get vTFloat() {
    return this._f(VtVTFloat);
  }
  /** 8-Byte Real Number. */
  get vTDouble() {
    return this._f(VtVTDouble);
  }
  /** Decimal. */
  get vTDecimal() {
    return this._f(VtVTDecimal);
  }
  /** LPSTR. */
  get vTLPSTR() {
    return this._f(VtVTLPSTR);
  }
  /** LPWSTR. */
  get vTLPWSTR() {
    return this._f(VtVTLPWSTR);
  }
  /** Basic String. */
  get vTBString() {
    return this._f(VtVTBString);
  }
  /** Date and Time. */
  get vTDate() {
    return this._f(VtVTDate);
  }
  /** File Time. */
  get vTFileTime() {
    return this._f(VtVTFileTime);
  }
  /** Boolean. */
  get vTBool() {
    return this._f(VtVTBool);
  }
  /** Currency. */
  get vTCurrency() {
    return this._f(VtVTCurrency);
  }
  /** Error Status Code. */
  get vTError() {
    return this._f(VtVTError);
  }
  /** Binary Stream. */
  get vTStreamData() {
    return this._f(VtVTStreamData);
  }
  /** Binary Stream Object. */
  get vTOStreamData() {
    return this._f(VtVTOStreamData);
  }
  /** Binary Storage. */
  get vTStorage() {
    return this._f(VtVTStorage);
  }
  /** Binary Storage Object. */
  get vTOStorage() {
    return this._f(VtVTOStorage);
  }
  /** Binary Versioned Stream. */
  get vTVStreamData() {
    return this._f(VtVTVStreamData);
  }
  /** Class ID. */
  get vTClassId() {
    return this._f(VtVTClassId);
  }
  /** Clipboard Data. */
  get vTClipboardData() {
    return this._f(VtVTClipboardData);
  }
}
class Properties extends OxmlPartRootElement {
  static _Q = "op:Properties";
}
function initCustomPropertiesNamespace() {
  CustomDocumentProperty._C = {
    "vt:vector": VtVTVector,
    "vt:array": VtVTArray,
    "vt:blob": VtVTBlob,
    "vt:oblob": VtVTOBlob,
    "vt:empty": VtVTEmpty,
    "vt:null": VtVTNull,
    "vt:i1": VtVTByte,
    "vt:i2": VtVTShort,
    "vt:i4": VtVTInt32,
    "vt:i8": VtVTInt64,
    "vt:int": VtVTInteger,
    "vt:ui1": VtVTUnsignedByte,
    "vt:ui2": VtVTUnsignedShort,
    "vt:ui4": VtVTUnsignedInt32,
    "vt:ui8": VtVTUnsignedInt64,
    "vt:uint": VtVTUnsignedInteger,
    "vt:r4": VtVTFloat,
    "vt:r8": VtVTDouble,
    "vt:decimal": VtVTDecimal,
    "vt:lpstr": VtVTLPSTR,
    "vt:lpwstr": VtVTLPWSTR,
    "vt:bstr": VtVTBString,
    "vt:date": VtVTDate,
    "vt:filetime": VtVTFileTime,
    "vt:bool": VtVTBool,
    "vt:cy": VtVTCurrency,
    "vt:error": VtVTError,
    "vt:stream": VtVTStreamData,
    "vt:ostream": VtVTOStreamData,
    "vt:storage": VtVTStorage,
    "vt:ostorage": VtVTOStorage,
    "vt:vstream": VtVTVStreamData,
    "vt:clsid": VtVTClassId,
    "vt:cf": VtVTClipboardData
  };
  CustomDocumentProperty._D = {
    ":fmtid": new OxmlAttr(":fmtid", OxmlType.StringValue),
    ":pid": new OxmlAttr(":pid", OxmlType.Int32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":linkTarget": new OxmlAttr(":linkTarget", OxmlType.StringValue)
  };
  Properties._C = {
    "op:property": CustomDocumentProperty
  };
  return {
    prefix: "op",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties"
  };
}
export {
  CustomDocumentProperty,
  Properties,
  initCustomPropertiesNamespace
};
