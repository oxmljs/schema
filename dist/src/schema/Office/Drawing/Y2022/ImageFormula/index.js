import { OxmlLeafElement } from "../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
class ImageFormula extends OxmlLeafElement {
  static _Q = "aif:imageFormula";
  static _A = [":formula"];
  /** formula. Serialized as `:formula` */
  get formula() {
    return this._g(":formula");
  }
  set formula(v) {
    this._s(":formula", v);
  }
}
function initOfficeDrawingY2022ImageFormulaNamespace() {
  ImageFormula._D = {
    ":formula": new OxmlAttr(":formula", OxmlType.StringValue)
  };
  return {
    prefix: "aif",
    xmlns: "http://schemas.microsoft.com/office/drawing/2022/imageformula"
  };
}
export {
  ImageFormula,
  initOfficeDrawingY2022ImageFormulaNamespace
};
