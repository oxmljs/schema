import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
var RelationValues = /* @__PURE__ */ ((RelationValues2) => {
  RelationValues2["GreaterThanOrEqualTo"] = "ge";
  RelationValues2["LessThanOrEqualTo"] = "le";
  RelationValues2["GreaterThan"] = "gt";
  RelationValues2["LessThan"] = "lt";
  RelationValues2["EqualTo"] = "eq";
  return RelationValues2;
})(RelationValues || {});
const RelationValuesArray = [
  "ge" /* GreaterThanOrEqualTo */,
  "le" /* LessThanOrEqualTo */,
  "gt" /* GreaterThan */,
  "lt" /* LessThan */,
  "eq" /* EqualTo */
];
class Characteristic extends OxmlLeafElement {
  static _Q = "ac:characteristic";
  static _A = [":name", ":relation", ":val", ":vocabulary"];
  /** Name of Characteristic. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Relationship of Value to Name. Serialized as `:relation` */
  get relation() {
    return this._g(":relation");
  }
  set relation(v) {
    this._s(":relation", v);
  }
  /** Characteristic Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Characteristic Grammar. Serialized as `:vocabulary` */
  get vocabulary() {
    return this._g(":vocabulary");
  }
  set vocabulary(v) {
    this._s(":vocabulary", v);
  }
}
class AdditionalCharacteristicsInfo extends OxmlPartRootElement {
  static _Q = "ac:additionalCharacteristics";
}
function initAdditionalCharacteristicsNamespace() {
  Characteristic._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":relation": new OxmlAttr(":relation", OxmlType.EnumValue, RelationValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue),
    ":vocabulary": new OxmlAttr(":vocabulary", OxmlType.StringValue)
  };
  AdditionalCharacteristicsInfo._C = {
    "ac:characteristic": Characteristic
  };
  return {
    prefix: "ac",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/characteristics"
  };
}
export {
  AdditionalCharacteristicsInfo,
  Characteristic,
  RelationValues,
  RelationValuesArray,
  initAdditionalCharacteristicsNamespace
};
