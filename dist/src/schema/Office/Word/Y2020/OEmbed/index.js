import { OxmlLeafElement } from "../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
class OEmbed extends OxmlLeafElement {
  static _Q = "woe:oembed";
  static _A = [":oEmbedUrl", ":mediaType", ":picLocksAutoForOEmbed"];
  /** oEmbedUrl. Serialized as `:oEmbedUrl` */
  get oEmbedUrl() {
    return this._g(":oEmbedUrl");
  }
  set oEmbedUrl(v) {
    this._s(":oEmbedUrl", v);
  }
  /** mediaType. Serialized as `:mediaType` */
  get mediaType() {
    return this._g(":mediaType");
  }
  set mediaType(v) {
    this._s(":mediaType", v);
  }
  /** picLocksAutoForOEmbed. Serialized as `:picLocksAutoForOEmbed` */
  get picLocksAutoForOEmbed() {
    return this._g(":picLocksAutoForOEmbed");
  }
  set picLocksAutoForOEmbed(v) {
    this._s(":picLocksAutoForOEmbed", v);
  }
}
function initOfficeWordY2020OEmbedNamespace() {
  OEmbed._D = {
    ":oEmbedUrl": new OxmlAttr(":oEmbedUrl", OxmlType.StringValue),
    ":mediaType": new OxmlAttr(":mediaType", OxmlType.StringValue),
    ":picLocksAutoForOEmbed": new OxmlAttr(":picLocksAutoForOEmbed", OxmlType.BooleanValue)
  };
  return {
    prefix: "woe",
    xmlns: "http://schemas.microsoft.com/office/word/2020/oembed"
  };
}
export {
  OEmbed,
  initOfficeWordY2020OEmbedNamespace
};
