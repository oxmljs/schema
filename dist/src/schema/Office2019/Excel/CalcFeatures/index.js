import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class CalcFeature extends OxmlLeafElement {
  static _Q = "xcalcf:feature";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class CalcFeatures extends OxmlCompositeElement {
  static _Q = "xcalcf:calcFeatures";
}
function initOffice2019ExcelCalcFeaturesNamespace() {
  CalcFeature._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  CalcFeatures._C = {
    "xcalcf:feature": CalcFeature
  };
  return {
    prefix: "xcalcf",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2018/calcfeatures"
  };
}
export {
  CalcFeature,
  CalcFeatures,
  initOffice2019ExcelCalcFeaturesNamespace
};
