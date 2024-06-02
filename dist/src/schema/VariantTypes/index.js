import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
var VectorBaseValues = /* @__PURE__ */ ((VectorBaseValues2) => {
  VectorBaseValues2["Variant"] = "variant";
  VectorBaseValues2["OneByteSignedInteger"] = "i1";
  VectorBaseValues2["TwoBytesSignedInteger"] = "i2";
  VectorBaseValues2["FourBytesSignedInteger"] = "i4";
  VectorBaseValues2["EightBytesSignedInteger"] = "i8";
  VectorBaseValues2["OneByteUnsignedInteger"] = "ui1";
  VectorBaseValues2["TwoBytesUnsignedInteger"] = "ui2";
  VectorBaseValues2["FourBytesUnsignedInteger"] = "ui4";
  VectorBaseValues2["EightBytesUnsignedInteger"] = "ui8";
  VectorBaseValues2["FourBytesReal"] = "r4";
  VectorBaseValues2["EightBytesReal"] = "r8";
  VectorBaseValues2["Lpstr"] = "lpstr";
  VectorBaseValues2["Lpwstr"] = "lpwstr";
  VectorBaseValues2["Bstr"] = "bstr";
  VectorBaseValues2["Date"] = "date";
  VectorBaseValues2["Filetime"] = "filetime";
  VectorBaseValues2["Bool"] = "bool";
  VectorBaseValues2["Currency"] = "cy";
  VectorBaseValues2["Error"] = "error";
  VectorBaseValues2["ClassId"] = "clsid";
  VectorBaseValues2["ClipboardData"] = "cf";
  return VectorBaseValues2;
})(VectorBaseValues || {});
const VectorBaseValuesArray = [
  "variant" /* Variant */,
  "i1" /* OneByteSignedInteger */,
  "i2" /* TwoBytesSignedInteger */,
  "i4" /* FourBytesSignedInteger */,
  "i8" /* EightBytesSignedInteger */,
  "ui1" /* OneByteUnsignedInteger */,
  "ui2" /* TwoBytesUnsignedInteger */,
  "ui4" /* FourBytesUnsignedInteger */,
  "ui8" /* EightBytesUnsignedInteger */,
  "r4" /* FourBytesReal */,
  "r8" /* EightBytesReal */,
  "lpstr" /* Lpstr */,
  "lpwstr" /* Lpwstr */,
  "bstr" /* Bstr */,
  "date" /* Date */,
  "filetime" /* Filetime */,
  "bool" /* Bool */,
  "cy" /* Currency */,
  "error" /* Error */,
  "clsid" /* ClassId */,
  "cf" /* ClipboardData */
];
var ArrayBaseValues = /* @__PURE__ */ ((ArrayBaseValues2) => {
  ArrayBaseValues2["Variant"] = "variant";
  ArrayBaseValues2["OneByteSignedInteger"] = "i1";
  ArrayBaseValues2["TwoBytesSignedInteger"] = "i2";
  ArrayBaseValues2["FourBytesSignedInteger"] = "i4";
  ArrayBaseValues2["Integer"] = "int";
  ArrayBaseValues2["OneByteUnsignedInteger"] = "ui1";
  ArrayBaseValues2["TwoBytesUnsignedInteger"] = "ui2";
  ArrayBaseValues2["FourBytesUnsignedInteger"] = "ui4";
  ArrayBaseValues2["UnsignedInteger"] = "uint";
  ArrayBaseValues2["FourBytesReal"] = "r4";
  ArrayBaseValues2["EightBytesReal"] = "r8";
  ArrayBaseValues2["Decimal"] = "decimal";
  ArrayBaseValues2["Bstr"] = "bstr";
  ArrayBaseValues2["Date"] = "date";
  ArrayBaseValues2["Bool"] = "bool";
  ArrayBaseValues2["Currency"] = "cy";
  ArrayBaseValues2["Error"] = "error";
  return ArrayBaseValues2;
})(ArrayBaseValues || {});
const ArrayBaseValuesArray = [
  "variant" /* Variant */,
  "i1" /* OneByteSignedInteger */,
  "i2" /* TwoBytesSignedInteger */,
  "i4" /* FourBytesSignedInteger */,
  "int" /* Integer */,
  "ui1" /* OneByteUnsignedInteger */,
  "ui2" /* TwoBytesUnsignedInteger */,
  "ui4" /* FourBytesUnsignedInteger */,
  "uint" /* UnsignedInteger */,
  "r4" /* FourBytesReal */,
  "r8" /* EightBytesReal */,
  "decimal" /* Decimal */,
  "bstr" /* Bstr */,
  "date" /* Date */,
  "bool" /* Bool */,
  "cy" /* Currency */,
  "error" /* Error */
];
class VTClipboardData extends OxmlLeafTextElement {
  static _Q = "vt:cf";
  static _A = [":format", ":size"];
  /** Format Attribute. Serialized as `:format` */
  get format() {
    return this._g(":format");
  }
  set format(v) {
    this._s(":format", v);
  }
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
}
class VTClassId extends OxmlLeafTextElement {
  static _Q = "vt:clsid";
}
class VTVStreamData extends OxmlLeafTextElement {
  static _Q = "vt:vstream";
  static _A = [":version"];
  /** VSTREAM Version Attribute. Serialized as `:version` */
  get version() {
    return this._g(":version");
  }
  set version(v) {
    this._s(":version", v);
  }
}
class VTError extends OxmlLeafTextElement {
  static _Q = "vt:error";
}
class VTCurrency extends OxmlLeafTextElement {
  static _Q = "vt:cy";
}
class VTBool extends OxmlLeafTextElement {
  static _Q = "vt:bool";
}
class VTFileTime extends OxmlLeafTextElement {
  static _Q = "vt:filetime";
}
class VTDate extends OxmlLeafTextElement {
  static _Q = "vt:date";
}
class VTBString extends OxmlLeafTextElement {
  static _Q = "vt:bstr";
}
class VTLPWSTR extends OxmlLeafTextElement {
  static _Q = "vt:lpwstr";
}
class VTLPSTR extends OxmlLeafTextElement {
  static _Q = "vt:lpstr";
}
class VTDecimal extends OxmlLeafTextElement {
  static _Q = "vt:decimal";
}
class VTDouble extends OxmlLeafTextElement {
  static _Q = "vt:r8";
}
class VTFloat extends OxmlLeafTextElement {
  static _Q = "vt:r4";
}
class VTUnsignedInt64 extends OxmlLeafTextElement {
  static _Q = "vt:ui8";
}
class VTUnsignedInteger extends OxmlLeafTextElement {
  static _Q = "vt:uint";
}
class VTUnsignedInt32 extends OxmlLeafTextElement {
  static _Q = "vt:ui4";
}
class VTUnsignedShort extends OxmlLeafTextElement {
  static _Q = "vt:ui2";
}
class VTUnsignedByte extends OxmlLeafTextElement {
  static _Q = "vt:ui1";
}
class VTInt64 extends OxmlLeafTextElement {
  static _Q = "vt:i8";
}
class VTInteger extends OxmlLeafTextElement {
  static _Q = "vt:int";
}
class VTInt32 extends OxmlLeafTextElement {
  static _Q = "vt:i4";
}
class VTShort extends OxmlLeafTextElement {
  static _Q = "vt:i2";
}
class VTByte extends OxmlLeafTextElement {
  static _Q = "vt:i1";
}
class VTNull extends OxmlLeafElement {
  static _Q = "vt:null";
}
class VTEmpty extends OxmlLeafElement {
  static _Q = "vt:empty";
}
class VTOStorage extends OxmlLeafTextElement {
  static _Q = "vt:ostorage";
}
class VTStorage extends OxmlLeafTextElement {
  static _Q = "vt:storage";
}
class VTOStreamData extends OxmlLeafTextElement {
  static _Q = "vt:ostream";
}
class VTStreamData extends OxmlLeafTextElement {
  static _Q = "vt:stream";
}
class VTOBlob extends OxmlLeafTextElement {
  static _Q = "vt:oblob";
}
class VTBlob extends OxmlLeafTextElement {
  static _Q = "vt:blob";
}
class VTArray extends OxmlCompositeElement {
  static _Q = "vt:array";
  static _A = [":lBound", ":uBound", ":baseType"];
  /** Array Lower Bounds Attribute. Serialized as `:lBound` */
  get lowerBounds() {
    return this._g(":lBound");
  }
  set lowerBounds(v) {
    this._s(":lBound", v);
  }
  /** Array Upper Bounds Attribute. Serialized as `:uBound` */
  get upperBounds() {
    return this._g(":uBound");
  }
  set upperBounds(v) {
    this._s(":uBound", v);
  }
  /** Array Base Type. Serialized as `:baseType` */
  get baseType() {
    return this._g(":baseType");
  }
  set baseType(v) {
    this._s(":baseType", v);
  }
}
class VTVector extends OxmlCompositeElement {
  static _Q = "vt:vector";
  static _A = [":baseType", ":size"];
  /** Vector Base Type. Serialized as `:baseType` */
  get baseType() {
    return this._g(":baseType");
  }
  set baseType(v) {
    this._s(":baseType", v);
  }
  /** Vector Size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
}
class Variant extends OxmlCompositeElement {
  static _Q = "vt:variant";
  /** Variant. */
  get innerVariant() {
    return this._f(Variant);
  }
  /** Vector. */
  get vTVector() {
    return this._f(VTVector);
  }
  /** Array. */
  get vTArray() {
    return this._f(VTArray);
  }
  /** Binary Blob. */
  get vTBlob() {
    return this._f(VTBlob);
  }
  /** Binary Blob Object. */
  get vTOBlob() {
    return this._f(VTOBlob);
  }
  /** Empty. */
  get vTEmpty() {
    return this._f(VTEmpty);
  }
  /** Null. */
  get vTNull() {
    return this._f(VTNull);
  }
  /** 1-Byte Signed Integer. */
  get vTByte() {
    return this._f(VTByte);
  }
  /** 2-Byte Signed Integer. */
  get vTShort() {
    return this._f(VTShort);
  }
  /** 4-Byte Signed Integer. */
  get vTInt32() {
    return this._f(VTInt32);
  }
  /** 8-Byte Signed Integer. */
  get vTInt64() {
    return this._f(VTInt64);
  }
  /** Integer. */
  get vTInteger() {
    return this._f(VTInteger);
  }
  /** 1-Byte Unsigned Integer. */
  get vTUnsignedByte() {
    return this._f(VTUnsignedByte);
  }
  /** 2-Byte Unsigned Integer. */
  get vTUnsignedShort() {
    return this._f(VTUnsignedShort);
  }
  /** 4-Byte Unsigned Integer. */
  get vTUnsignedInt32() {
    return this._f(VTUnsignedInt32);
  }
  /** 8-Byte Unsigned Integer. */
  get vTUnsignedInt64() {
    return this._f(VTUnsignedInt64);
  }
  /** Unsigned Integer. */
  get vTUnsignedInteger() {
    return this._f(VTUnsignedInteger);
  }
  /** 4-Byte Real Number. */
  get vTFloat() {
    return this._f(VTFloat);
  }
  /** 8-Byte Real Number. */
  get vTDouble() {
    return this._f(VTDouble);
  }
  /** Decimal. */
  get vTDecimal() {
    return this._f(VTDecimal);
  }
  /** LPSTR. */
  get vTLPSTR() {
    return this._f(VTLPSTR);
  }
  /** LPWSTR. */
  get vTLPWSTR() {
    return this._f(VTLPWSTR);
  }
  /** Basic String. */
  get vTBString() {
    return this._f(VTBString);
  }
  /** Date and Time. */
  get vTDate() {
    return this._f(VTDate);
  }
  /** File Time. */
  get vTFileTime() {
    return this._f(VTFileTime);
  }
  /** Boolean. */
  get vTBool() {
    return this._f(VTBool);
  }
  /** Currency. */
  get vTCurrency() {
    return this._f(VTCurrency);
  }
  /** Error Status Code. */
  get vTError() {
    return this._f(VTError);
  }
  /** Binary Stream. */
  get vTStreamData() {
    return this._f(VTStreamData);
  }
  /** Binary Stream Object. */
  get vTOStreamData() {
    return this._f(VTOStreamData);
  }
  /** Binary Storage. */
  get vTStorage() {
    return this._f(VTStorage);
  }
  /** Binary Storage Object. */
  get vTOStorage() {
    return this._f(VTOStorage);
  }
  /** Binary Versioned Stream. */
  get vTVStreamData() {
    return this._f(VTVStreamData);
  }
  /** Class ID. */
  get vTClassId() {
    return this._f(VTClassId);
  }
  /** Clipboard Data. */
  get vTClipboardData() {
    return this._f(VTClipboardData);
  }
}
function initVariantTypesNamespace() {
  VTClipboardData._D = {
    ":format": new OxmlAttr(":format", OxmlType.Int32Value),
    ":size": new OxmlAttr(":size", OxmlType.UInt32Value)
  };
  VTVStreamData._D = {
    ":version": new OxmlAttr(":version", OxmlType.StringValue)
  };
  VTArray._C = {
    "vt:variant": Variant,
    "vt:i1": VTByte,
    "vt:i2": VTShort,
    "vt:i4": VTInt32,
    "vt:int": VTInteger,
    "vt:ui1": VTUnsignedByte,
    "vt:ui2": VTUnsignedShort,
    "vt:ui4": VTUnsignedInt32,
    "vt:uint": VTUnsignedInteger,
    "vt:r4": VTFloat,
    "vt:r8": VTDouble,
    "vt:decimal": VTDecimal,
    "vt:bstr": VTBString,
    "vt:date": VTDate,
    "vt:bool": VTBool,
    "vt:error": VTError,
    "vt:cy": VTCurrency
  };
  VTArray._D = {
    ":lBound": new OxmlAttr(":lBound", OxmlType.Int32Value),
    ":uBound": new OxmlAttr(":uBound", OxmlType.Int32Value),
    ":baseType": new OxmlAttr(":baseType", OxmlType.EnumValue, ArrayBaseValuesArray)
  };
  VTVector._C = {
    "vt:variant": Variant,
    "vt:i1": VTByte,
    "vt:i2": VTShort,
    "vt:i4": VTInt32,
    "vt:i8": VTInt64,
    "vt:ui1": VTUnsignedByte,
    "vt:ui2": VTUnsignedShort,
    "vt:ui4": VTUnsignedInt32,
    "vt:ui8": VTUnsignedInt64,
    "vt:r4": VTFloat,
    "vt:r8": VTDouble,
    "vt:lpstr": VTLPSTR,
    "vt:lpwstr": VTLPWSTR,
    "vt:bstr": VTBString,
    "vt:date": VTDate,
    "vt:filetime": VTFileTime,
    "vt:bool": VTBool,
    "vt:cy": VTCurrency,
    "vt:error": VTError,
    "vt:clsid": VTClassId,
    "vt:cf": VTClipboardData
  };
  VTVector._D = {
    ":baseType": new OxmlAttr(":baseType", OxmlType.EnumValue, VectorBaseValuesArray),
    ":size": new OxmlAttr(":size", OxmlType.UInt32Value)
  };
  Variant._C = {
    "vt:variant": Variant,
    "vt:vector": VTVector,
    "vt:array": VTArray,
    "vt:blob": VTBlob,
    "vt:oblob": VTOBlob,
    "vt:empty": VTEmpty,
    "vt:null": VTNull,
    "vt:i1": VTByte,
    "vt:i2": VTShort,
    "vt:i4": VTInt32,
    "vt:i8": VTInt64,
    "vt:int": VTInteger,
    "vt:ui1": VTUnsignedByte,
    "vt:ui2": VTUnsignedShort,
    "vt:ui4": VTUnsignedInt32,
    "vt:ui8": VTUnsignedInt64,
    "vt:uint": VTUnsignedInteger,
    "vt:r4": VTFloat,
    "vt:r8": VTDouble,
    "vt:decimal": VTDecimal,
    "vt:lpstr": VTLPSTR,
    "vt:lpwstr": VTLPWSTR,
    "vt:bstr": VTBString,
    "vt:date": VTDate,
    "vt:filetime": VTFileTime,
    "vt:bool": VTBool,
    "vt:cy": VTCurrency,
    "vt:error": VTError,
    "vt:stream": VTStreamData,
    "vt:ostream": VTOStreamData,
    "vt:storage": VTStorage,
    "vt:ostorage": VTOStorage,
    "vt:vstream": VTVStreamData,
    "vt:clsid": VTClassId,
    "vt:cf": VTClipboardData
  };
  return {
    prefix: "vt",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"
  };
}
export {
  ArrayBaseValues,
  ArrayBaseValuesArray,
  VTArray,
  VTBString,
  VTBlob,
  VTBool,
  VTByte,
  VTClassId,
  VTClipboardData,
  VTCurrency,
  VTDate,
  VTDecimal,
  VTDouble,
  VTEmpty,
  VTError,
  VTFileTime,
  VTFloat,
  VTInt32,
  VTInt64,
  VTInteger,
  VTLPSTR,
  VTLPWSTR,
  VTNull,
  VTOBlob,
  VTOStorage,
  VTOStreamData,
  VTShort,
  VTStorage,
  VTStreamData,
  VTUnsignedByte,
  VTUnsignedInt32,
  VTUnsignedInt64,
  VTUnsignedInteger,
  VTUnsignedShort,
  VTVStreamData,
  VTVector,
  Variant,
  VectorBaseValues,
  VectorBaseValuesArray,
  initVariantTypesNamespace
};
