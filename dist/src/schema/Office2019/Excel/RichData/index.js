import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as XExtension } from "../../../Spreadsheet";
var RichValueFallbackType = /* @__PURE__ */ ((RichValueFallbackType2) => {
  RichValueFallbackType2["B"] = "b";
  RichValueFallbackType2["N"] = "n";
  RichValueFallbackType2["E"] = "e";
  RichValueFallbackType2["S"] = "s";
  return RichValueFallbackType2;
})(RichValueFallbackType || {});
const RichValueFallbackTypeArray = [
  "b" /* B */,
  "n" /* N */,
  "e" /* E */,
  "s" /* S */
];
var RichValueValueType = /* @__PURE__ */ ((RichValueValueType2) => {
  RichValueValueType2["D"] = "d";
  RichValueValueType2["I"] = "i";
  RichValueValueType2["B"] = "b";
  RichValueValueType2["E"] = "e";
  RichValueValueType2["S"] = "s";
  RichValueValueType2["R"] = "r";
  RichValueValueType2["A"] = "a";
  RichValueValueType2["Spb"] = "spb";
  return RichValueValueType2;
})(RichValueValueType || {});
const RichValueValueTypeArray = [
  "d" /* D */,
  "i" /* I */,
  "b" /* B */,
  "e" /* E */,
  "s" /* S */,
  "r" /* R */,
  "a" /* A */,
  "spb" /* Spb */
];
class Key extends OxmlLeafElement {
  static _Q = "xlrd:k";
  static _A = [":n", ":t"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class RichValueStructure extends OxmlCompositeElement {
  static _Q = "xlrd:s";
  static _A = [":t"];
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class Value extends OxmlLeafTextElement {
  static _Q = "xlrd:v";
}
class RichValueFallback extends OxmlLeafTextElement {
  static _Q = "xlrd:fb";
  static _A = [":t"];
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xlrd:extLst";
}
class RichValue extends OxmlCompositeElement {
  static _Q = "xlrd:rv";
  static _A = [":s"];
  /** s. Serialized as `:s` */
  get s() {
    return this._g(":s");
  }
  set s(v) {
    this._s(":s", v);
  }
  /** Returns RichValueFallback. */
  get richValueFallback() {
    return this._f(RichValueFallback);
  }
}
class RichValueStructures extends OxmlPartRootElement {
  static _Q = "xlrd:rvStructures";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RichValueData extends OxmlPartRootElement {
  static _Q = "xlrd:rvData";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RichValueBlock extends OxmlLeafElement {
  static _Q = "xlrd:rvb";
  static _A = [":i"];
  /** i. Serialized as `:i` */
  get i() {
    return this._g(":i");
  }
  set i(v) {
    this._s(":i", v);
  }
}
function initOffice2019ExcelRichDataNamespace() {
  Key._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, RichValueValueTypeArray)
  };
  RichValueStructure._C = {
    "xlrd:k": Key
  };
  RichValueStructure._D = {
    ":t": new OxmlAttr(":t", OxmlType.StringValue)
  };
  RichValueFallback._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, RichValueFallbackTypeArray)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  RichValue._C = {
    "xlrd:fb": RichValueFallback,
    "xlrd:v": Value
  };
  RichValue._D = {
    ":s": new OxmlAttr(":s", OxmlType.UInt32Value)
  };
  RichValueStructures._C = {
    "xlrd:s": RichValueStructure,
    "xlrd:extLst": ExtensionList
  };
  RichValueStructures._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RichValueData._C = {
    "xlrd:rv": RichValue,
    "xlrd:extLst": ExtensionList
  };
  RichValueData._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RichValueBlock._D = {
    ":i": new OxmlAttr(":i", OxmlType.UInt32Value)
  };
  return {
    prefix: "xlrd",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2017/richdata"
  };
}
export {
  ExtensionList,
  Key,
  RichValue,
  RichValueBlock,
  RichValueData,
  RichValueFallback,
  RichValueFallbackType,
  RichValueFallbackTypeArray,
  RichValueStructure,
  RichValueStructures,
  RichValueValueType,
  RichValueValueTypeArray,
  Value,
  initOffice2019ExcelRichDataNamespace
};
