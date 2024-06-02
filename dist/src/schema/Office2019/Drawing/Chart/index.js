import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class BooleanFalse extends OxmlLeafElement {
  static _Q = "c16r3:dispNaAsBlank";
  static _A = ["c16r3:val"];
  /** val. Serialized as `c16r3:val` */
  get val() {
    return this._g("c16r3:val");
  }
  set val(v) {
    this._s("c16r3:val", v);
  }
}
class DataDisplayOptions16 extends OxmlCompositeElement {
  static _Q = "c16r3:dataDisplayOptions16";
  /** Returns BooleanFalse. */
  get booleanFalse() {
    return this._f(BooleanFalse);
  }
}
function initOffice2019DrawingChartNamespace() {
  BooleanFalse._D = {
    "c16r3:val": new OxmlAttr("c16r3:val", OxmlType.BooleanValue)
  };
  DataDisplayOptions16._C = {
    "c16r3:dispNaAsBlank": BooleanFalse
  };
  return {
    prefix: "c16r3",
    xmlns: "http://schemas.microsoft.com/office/drawing/2017/03/chart"
  };
}
export {
  BooleanFalse,
  DataDisplayOptions16,
  initOffice2019DrawingChartNamespace
};
