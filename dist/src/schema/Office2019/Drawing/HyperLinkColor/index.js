import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
var HyperlinkColorEnum = /* @__PURE__ */ ((HyperlinkColorEnum2) => {
  HyperlinkColorEnum2["HLink"] = "hlink";
  HyperlinkColorEnum2["Tx"] = "tx";
  return HyperlinkColorEnum2;
})(HyperlinkColorEnum || {});
const HyperlinkColorEnumArray = [
  "hlink" /* HLink */,
  "tx" /* Tx */
];
class HyperlinkColor extends OxmlLeafElement {
  static _Q = "ahyp:hlinkClr";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
function initOffice2019DrawingHyperLinkColorNamespace() {
  HyperlinkColor._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, HyperlinkColorEnumArray)
  };
  return {
    prefix: "ahyp",
    xmlns: "http://schemas.microsoft.com/office/drawing/2018/hyperlinkcolor"
  };
}
export {
  HyperlinkColor,
  HyperlinkColorEnum,
  HyperlinkColorEnumArray,
  initOffice2019DrawingHyperLinkColorNamespace
};
