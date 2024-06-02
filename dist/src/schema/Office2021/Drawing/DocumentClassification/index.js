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
  static _Q = "aclsh:classification";
  static _A = [":classificationOutcomeType"];
  /** classificationOutcomeType. Serialized as `:classificationOutcomeType` */
  get classificationOutcomeType() {
    return this._g(":classificationOutcomeType");
  }
  set classificationOutcomeType(v) {
    this._s(":classificationOutcomeType", v);
  }
}
function initOffice2021DrawingDocumentClassificationNamespace() {
  ClassificationOutcome._D = {
    ":classificationOutcomeType": new OxmlAttr(":classificationOutcomeType", OxmlType.EnumValue, ClassificationOutcomeTypeArray)
  };
  return {
    prefix: "aclsh",
    xmlns: "http://schemas.microsoft.com/office/drawing/2020/classificationShape"
  };
}
export {
  ClassificationOutcome,
  ClassificationOutcomeType,
  ClassificationOutcomeTypeArray,
  initOffice2021DrawingDocumentClassificationNamespace
};
