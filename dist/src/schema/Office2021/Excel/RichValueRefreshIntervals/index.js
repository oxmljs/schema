import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class RichValueRefreshInterval extends OxmlLeafElement {
  static _Q = "xlrvr:refreshInterval";
  static _A = [":resourceIdInt", ":resourceIdStr", ":interval"];
  /** resourceIdInt. Serialized as `:resourceIdInt` */
  get resourceIdInt() {
    return this._g(":resourceIdInt");
  }
  set resourceIdInt(v) {
    this._s(":resourceIdInt", v);
  }
  /** resourceIdStr. Serialized as `:resourceIdStr` */
  get resourceIdStr() {
    return this._g(":resourceIdStr");
  }
  set resourceIdStr(v) {
    this._s(":resourceIdStr", v);
  }
  /** interval. Serialized as `:interval` */
  get interval() {
    return this._g(":interval");
  }
  set interval(v) {
    this._s(":interval", v);
  }
}
class RichValueRefreshIntervals extends OxmlCompositeElement {
  static _Q = "xlrvr:refreshIntervals";
}
function initOffice2021ExcelRichValueRefreshIntervalsNamespace() {
  RichValueRefreshInterval._D = {
    ":resourceIdInt": new OxmlAttr(":resourceIdInt", OxmlType.Int32Value),
    ":resourceIdStr": new OxmlAttr(":resourceIdStr", OxmlType.StringValue),
    ":interval": new OxmlAttr(":interval", OxmlType.Int32Value)
  };
  RichValueRefreshIntervals._C = {
    "xlrvr:refreshInterval": RichValueRefreshInterval
  };
  return {
    prefix: "xlrvr",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2020/richvaluerefresh"
  };
}
export {
  RichValueRefreshInterval,
  RichValueRefreshIntervals,
  initOffice2021ExcelRichValueRefreshIntervalsNamespace
};
