import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class Extension extends OxmlCompositeElement {
  static _Q = "w16cur:ext";
  static _A = ["w16cur:uri"];
  /** uri. Serialized as `w16cur:uri` */
  get uri() {
    return this._g("w16cur:uri");
  }
  set uri(v) {
    this._s("w16cur:uri", v);
  }
}
function initOffice2021WordExtensionListNamespace() {
  Extension._D = {
    "w16cur:uri": new OxmlAttr("w16cur:uri", OxmlType.StringValue)
  };
  return {
    prefix: "w16cur",
    xmlns: "http://schemas.microsoft.com/office/word/2018/wordml"
  };
}
export {
  Extension,
  initOffice2021WordExtensionListNamespace
};
