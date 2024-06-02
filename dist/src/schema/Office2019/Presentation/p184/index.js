import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
var ClassificationOutcomeType = /* @__PURE__ */ ((ClassificationOutcomeType2) => {
  ClassificationOutcomeType2["None"] = "none";
  ClassificationOutcomeType2["Hdr"] = "hdr";
  ClassificationOutcomeType2["Ftr"] = "ftr";
  ClassificationOutcomeType2["Watermark"] = "watermark";
  return ClassificationOutcomeType2;
})(ClassificationOutcomeType || {});
const ClassificationOutcomeTypeArray = [
  "none" /* None */,
  "hdr" /* Hdr */,
  "ftr" /* Ftr */,
  "watermark" /* Watermark */
];
class ClassificationOutcome extends OxmlLeafElement {
  static _Q = "p184:classification";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
function initOffice2019Presentationp184Namespace() {
  ClassificationOutcome._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ClassificationOutcomeTypeArray)
  };
  return {
    prefix: "p184",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2018/4/main"
  };
}
export {
  ClassificationOutcome,
  ClassificationOutcomeType,
  ClassificationOutcomeTypeArray,
  initOffice2019Presentationp184Namespace
};
