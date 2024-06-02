import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class DataFieldFutureData extends OxmlLeafElement {
  static _Q = "xxpim:dataFieldFutureData";
  static _A = [":version", ":sourceField"];
  /** version. Serialized as `:version` */
  get version() {
    return this._g(":version");
  }
  set version(v) {
    this._s(":version", v);
  }
  /** sourceField. Serialized as `:sourceField` */
  get sourceField() {
    return this._g(":sourceField");
  }
  set sourceField(v) {
    this._s(":sourceField", v);
  }
}
class Ignorable extends OxmlLeafElement {
  static _Q = "xxpim:ignorableAfterVersion";
  static _A = [":version"];
  /** version. Serialized as `:version` */
  get version() {
    return this._g(":version");
  }
  set version(v) {
    this._s(":version", v);
  }
}
class Xsdboolean extends OxmlLeafTextElement {
  static _Q = "xxpim:implicitMeasureSupport";
}
function initOffice2021ExcelPivotNamespace() {
  DataFieldFutureData._D = {
    ":version": new OxmlAttr(":version", OxmlType.ByteValue),
    ":sourceField": new OxmlAttr(":sourceField", OxmlType.UInt32Value)
  };
  Ignorable._D = {
    ":version": new OxmlAttr(":version", OxmlType.ByteValue)
  };
  return {
    prefix: "xxpim",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2020/pivotNov2020"
  };
}
export {
  DataFieldFutureData,
  Ignorable,
  Xsdboolean,
  initOffice2021ExcelPivotNamespace
};
