import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class PivotTableDefinition16 extends OxmlLeafElement {
  static _Q = "xpdl:pivotTableDefinition16";
  static _A = [":EnabledSubtotalsDefault", ":SubtotalsOnTopDefault", ":InsertBlankRowDefault"];
  /** EnabledSubtotalsDefault. Serialized as `:EnabledSubtotalsDefault` */
  get EnabledSubtotalsDefault() {
    return this._g(":EnabledSubtotalsDefault");
  }
  set EnabledSubtotalsDefault(v) {
    this._s(":EnabledSubtotalsDefault", v);
  }
  /** SubtotalsOnTopDefault. Serialized as `:SubtotalsOnTopDefault` */
  get SubtotalsOnTopDefault() {
    return this._g(":SubtotalsOnTopDefault");
  }
  set SubtotalsOnTopDefault(v) {
    this._s(":SubtotalsOnTopDefault", v);
  }
  /** InsertBlankRowDefault. Serialized as `:InsertBlankRowDefault` */
  get InsertBlankRowDefault() {
    return this._g(":InsertBlankRowDefault");
  }
  set InsertBlankRowDefault(v) {
    this._s(":InsertBlankRowDefault", v);
  }
}
function initOffice2019ExcelPivotDefaultLayoutNamespace() {
  PivotTableDefinition16._D = {
    ":EnabledSubtotalsDefault": new OxmlAttr(":EnabledSubtotalsDefault", OxmlType.BooleanValue),
    ":SubtotalsOnTopDefault": new OxmlAttr(":SubtotalsOnTopDefault", OxmlType.BooleanValue),
    ":InsertBlankRowDefault": new OxmlAttr(":InsertBlankRowDefault", OxmlType.BooleanValue)
  };
  return {
    prefix: "xpdl",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2016/pivotdefaultlayout"
  };
}
export {
  PivotTableDefinition16,
  initOffice2019ExcelPivotDefaultLayoutNamespace
};
