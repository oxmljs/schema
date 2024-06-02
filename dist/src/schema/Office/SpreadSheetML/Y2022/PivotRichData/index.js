import { OxmlLeafElement } from "../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
class RichDataPivotCacheGuid extends OxmlLeafElement {
  static _Q = "xprd:richInfo";
  static _A = [":pivotCacheGuid"];
  /** pivotCacheGuid. Serialized as `:pivotCacheGuid` */
  get pivotCacheGuid() {
    return this._g(":pivotCacheGuid");
  }
  set pivotCacheGuid(v) {
    this._s(":pivotCacheGuid", v);
  }
}
function initOfficeSpreadSheetMLY2022PivotRichDataNamespace() {
  RichDataPivotCacheGuid._D = {
    ":pivotCacheGuid": new OxmlAttr(":pivotCacheGuid", OxmlType.StringValue)
  };
  return {
    prefix: "xprd",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2022/pivotRichData"
  };
}
export {
  RichDataPivotCacheGuid,
  initOfficeSpreadSheetMLY2022PivotRichDataNamespace
};
