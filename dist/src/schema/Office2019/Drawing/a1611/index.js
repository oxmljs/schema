import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class PictureAttributionSourceURL extends OxmlLeafElement {
  static _Q = "a1611:picAttrSrcUrl";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
function initOffice2019Drawinga1611Namespace() {
  PictureAttributionSourceURL._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  return {
    prefix: "a1611",
    xmlns: "http://schemas.microsoft.com/office/drawing/2016/11/main"
  };
}
export {
  PictureAttributionSourceURL,
  initOffice2019Drawinga1611Namespace
};
