import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class AbsolutePath extends OxmlLeafElement {
  static _Q = "x15ac:absPath";
  static _A = [":url"];
  /** url. Serialized as `:url` */
  get url() {
    return this._g(":url");
  }
  set url(v) {
    this._s(":url", v);
  }
}
function initOffice2013ExcelAcNamespace() {
  AbsolutePath._D = {
    ":url": new OxmlAttr(":url", OxmlType.StringValue)
  };
  return {
    prefix: "x15ac",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2010/11/ac"
  };
}
export {
  AbsolutePath,
  initOffice2013ExcelAcNamespace
};
