import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class SymEx extends OxmlLeafElement {
  static _Q = "w16se:symEx";
  static _A = ["w16se:font", "w16se:char"];
  /** font. Serialized as `w16se:font` */
  get font() {
    return this._g("w16se:font");
  }
  set font(v) {
    this._s("w16se:font", v);
  }
  /** char. Serialized as `w16se:char` */
  get char() {
    return this._g("w16se:char");
  }
  set char(v) {
    this._s("w16se:char", v);
  }
}
function initOffice2016WordSymexNamespace() {
  SymEx._D = {
    "w16se:font": new OxmlAttr("w16se:font", OxmlType.StringValue),
    "w16se:char": new OxmlAttr("w16se:char", OxmlType.HexBinaryValue)
  };
  return {
    prefix: "w16se",
    xmlns: "http://schemas.microsoft.com/office/word/2015/wordml/symex"
  };
}
export {
  SymEx,
  initOffice2016WordSymexNamespace
};
