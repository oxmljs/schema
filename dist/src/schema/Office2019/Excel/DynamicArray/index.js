import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as XExtension } from "../../../Spreadsheet";
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xda:extLst";
}
class DynamicArrayProperties extends OxmlCompositeElement {
  static _Q = "xda:dynamicArrayProperties";
  static _A = [":fDynamic", ":fCollapsed"];
  /** fDynamic. Serialized as `:fDynamic` */
  get fDynamic() {
    return this._g(":fDynamic");
  }
  set fDynamic(v) {
    this._s(":fDynamic", v);
  }
  /** fCollapsed. Serialized as `:fCollapsed` */
  get fCollapsed() {
    return this._g(":fCollapsed");
  }
  set fCollapsed(v) {
    this._s(":fCollapsed", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
function initOffice2019ExcelDynamicArrayNamespace() {
  ExtensionList._C = {
    "x:ext": XExtension
  };
  DynamicArrayProperties._C = {
    "xda:extLst": ExtensionList
  };
  DynamicArrayProperties._D = {
    ":fDynamic": new OxmlAttr(":fDynamic", OxmlType.BooleanValue),
    ":fCollapsed": new OxmlAttr(":fCollapsed", OxmlType.BooleanValue)
  };
  return {
    prefix: "xda",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray"
  };
}
export {
  DynamicArrayProperties,
  ExtensionList,
  initOffice2019ExcelDynamicArrayNamespace
};
