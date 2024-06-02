import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var TrueOnlyValues = /* @__PURE__ */ ((TrueOnlyValues2) => {
  TrueOnlyValues2["True"] = "true";
  return TrueOnlyValues2;
})(TrueOnlyValues || {});
const TrueOnlyValuesArray = [
  "true" /* True */
];
class Dummy extends OxmlLeafElement {
  static _Q = "ma:DummyContentTypeElement";
  static _A = [":decimals", ":default", ":description", ":displayName", ":fieldsID", ":format", ":hidden", ":index", ":internalName", ":LCID", ":list", ":percentage", ":readOnly", ":requiredMultiChoice", ":root", ":showField", ":web"];
  /** decimals. Serialized as `:decimals` */
  get decimals() {
    return this._g(":decimals");
  }
  set decimals(v) {
    this._s(":decimals", v);
  }
  /** default. Serialized as `:default` */
  get default() {
    return this._g(":default");
  }
  set default(v) {
    this._s(":default", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** displayName. Serialized as `:displayName` */
  get displayName() {
    return this._g(":displayName");
  }
  set displayName(v) {
    this._s(":displayName", v);
  }
  /** fieldsID. Serialized as `:fieldsID` */
  get fieldsID() {
    return this._g(":fieldsID");
  }
  set fieldsID(v) {
    this._s(":fieldsID", v);
  }
  /** format. Serialized as `:format` */
  get format() {
    return this._g(":format");
  }
  set format(v) {
    this._s(":format", v);
  }
  /** hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** index. Serialized as `:index` */
  get index() {
    return this._g(":index");
  }
  set index(v) {
    this._s(":index", v);
  }
  /** internalName. Serialized as `:internalName` */
  get internalName() {
    return this._g(":internalName");
  }
  set internalName(v) {
    this._s(":internalName", v);
  }
  /** LCID. Serialized as `:LCID` */
  get lCID() {
    return this._g(":LCID");
  }
  set lCID(v) {
    this._s(":LCID", v);
  }
  /** list. Serialized as `:list` */
  get list() {
    return this._g(":list");
  }
  set list(v) {
    this._s(":list", v);
  }
  /** percentage. Serialized as `:percentage` */
  get percentage() {
    return this._g(":percentage");
  }
  set percentage(v) {
    this._s(":percentage", v);
  }
  /** readOnly. Serialized as `:readOnly` */
  get readOnly() {
    return this._g(":readOnly");
  }
  set readOnly(v) {
    this._s(":readOnly", v);
  }
  /** requiredMultiChoice. Serialized as `:requiredMultiChoice` */
  get requiredMultiChoice() {
    return this._g(":requiredMultiChoice");
  }
  set requiredMultiChoice(v) {
    this._s(":requiredMultiChoice", v);
  }
  /** root. Serialized as `:root` */
  get root() {
    return this._g(":root");
  }
  set root(v) {
    this._s(":root", v);
  }
  /** showField. Serialized as `:showField` */
  get showField() {
    return this._g(":showField");
  }
  set showField(v) {
    this._s(":showField", v);
  }
  /** web. Serialized as `:web` */
  get web() {
    return this._g(":web");
  }
  set web(v) {
    this._s(":web", v);
  }
}
function initOfficeMetaAttributesNamespace() {
  Dummy._D = {
    ":decimals": new OxmlAttr(":decimals", OxmlType.StringValue),
    ":default": new OxmlAttr(":default", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":displayName": new OxmlAttr(":displayName", OxmlType.StringValue),
    ":fieldsID": new OxmlAttr(":fieldsID", OxmlType.StringValue),
    ":format": new OxmlAttr(":format", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.StringValue),
    ":index": new OxmlAttr(":index", OxmlType.Int32Value),
    ":internalName": new OxmlAttr(":internalName", OxmlType.StringValue),
    ":LCID": new OxmlAttr(":LCID", OxmlType.Int32Value),
    ":list": new OxmlAttr(":list", OxmlType.StringValue),
    ":percentage": new OxmlAttr(":percentage", OxmlType.StringValue),
    ":readOnly": new OxmlAttr(":readOnly", OxmlType.StringValue),
    ":requiredMultiChoice": new OxmlAttr(":requiredMultiChoice", OxmlType.StringValue),
    ":root": new OxmlAttr(":root", OxmlType.EnumValue, TrueOnlyValuesArray),
    ":showField": new OxmlAttr(":showField", OxmlType.StringValue),
    ":web": new OxmlAttr(":web", OxmlType.StringValue)
  };
  return {
    prefix: "ma",
    xmlns: "http://schemas.microsoft.com/office/2006/metadata/properties/metaAttributes"
  };
}
export {
  Dummy,
  TrueOnlyValues,
  TrueOnlyValuesArray,
  initOfficeMetaAttributesNamespace
};
