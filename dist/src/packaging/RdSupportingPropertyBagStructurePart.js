import { SupportingPropertyBagStructures } from "../schema/Office2019/Excel/RichData2";
import { OxmlPart } from "../framework/OxmlPart";
class RdSupportingPropertyBagStructurePart extends OxmlPart {
  static _N = "RdSupportingPropertyBagStructurePart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/rdSupportingPropertyBagStructure";
  static _C = "application/vnd.ms-excel.rdsupportingpropertybagstructure+xml";
  static _P = "richData";
  static _T = "rdsupportingpropertybagstructure";
  static _E = SupportingPropertyBagStructures;
  get rdsupportingpropertybagstructure() {
    return this._r;
  }
  set rdsupportingpropertybagstructure(root) {
    this._r = root;
  }
}
export {
  RdSupportingPropertyBagStructurePart
};
