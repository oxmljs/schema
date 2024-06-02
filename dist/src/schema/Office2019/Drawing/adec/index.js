import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class Decorative extends OxmlLeafElement {
  static _Q = "adec:decorative";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
function initOffice2019DrawingadecNamespace() {
  Decorative._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  return {
    prefix: "adec",
    xmlns: "http://schemas.microsoft.com/office/drawing/2017/decorative"
  };
}
export {
  Decorative,
  initOffice2019DrawingadecNamespace
};
