import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { PointCount as CPointCount } from "../../../Drawing/Charts";
import { Level as CLevel } from "../../../Drawing/Charts";
import { ExtensionList as CExtensionList } from "../../../Drawing/Charts";
class MultiLvlStrData extends OxmlCompositeElement {
  static _Q = "c16ac:multiLvlStrLit";
  /** Returns CPointCount. */
  get pointCount() {
    return this._f(CPointCount);
  }
}
function initOffice2016DrawingChartsAcNamespace() {
  MultiLvlStrData._C = {
    "c:ptCount": CPointCount,
    "c:lvl": CLevel,
    "c:extLst": CExtensionList
  };
  return {
    prefix: "c16ac",
    xmlns: "http://schemas.microsoft.com/office/drawing/2014/chart/ac"
  };
}
export {
  MultiLvlStrData,
  initOffice2016DrawingChartsAcNamespace
};
