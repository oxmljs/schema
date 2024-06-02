import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class DesignElement extends OxmlLeafElement {
  static _Q = "p16:designElem";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
function initOffice2016PresentationNamespace() {
  DesignElement._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  return {
    prefix: "p16",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2015/main"
  };
}
export {
  DesignElement,
  initOffice2016PresentationNamespace
};
