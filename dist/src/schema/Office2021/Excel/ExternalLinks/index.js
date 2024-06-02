import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class ExternalLinksPr extends OxmlLeafElement {
  static _Q = "xxlnp:externalLinksPr";
  static _A = [":autoRefresh"];
  /** autoRefresh. Serialized as `:autoRefresh` */
  get autoRefresh() {
    return this._g(":autoRefresh");
  }
  set autoRefresh(v) {
    this._s(":autoRefresh", v);
  }
}
function initOffice2021ExcelExternalLinksNamespace() {
  ExternalLinksPr._D = {
    ":autoRefresh": new OxmlAttr(":autoRefresh", OxmlType.BooleanValue)
  };
  return {
    prefix: "xxlnp",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2019/extlinksprops"
  };
}
export {
  ExternalLinksPr,
  initOffice2021ExcelExternalLinksNamespace
};
