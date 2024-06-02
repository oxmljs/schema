import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class ReadonlyRecommended extends OxmlLeafElement {
  static _Q = "p1710:readonlyRecommended";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
function initOffice2019Presentationp1710Namespace() {
  ReadonlyRecommended._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  return {
    prefix: "p1710",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2017/10/main"
  };
}
export {
  ReadonlyRecommended,
  initOffice2019Presentationp1710Namespace
};
