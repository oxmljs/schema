import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class Extension extends OxmlCompositeElement {
  static _Q = "oel:ext";
  static _A = [":uri"];
  /** uri. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
function initOffice2021OfficeExtLstNamespace() {
  Extension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  return {
    prefix: "oel",
    xmlns: "http://schemas.microsoft.com/office/2019/extlst"
  };
}
export {
  Extension,
  initOffice2021OfficeExtLstNamespace
};
