import { SupportingPropertyBags } from "../schema/Office2019/Excel/RichData2";
import { OxmlPart } from "../framework/OxmlPart";
class RdSupportingPropertyBagPart extends OxmlPart {
  static _N = "RdSupportingPropertyBagPart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/rdSupportingPropertyBag";
  static _C = "application/vnd.ms-excel.rdsupportingpropertybag+xml";
  static _P = "richData";
  static _T = "rdsupportingpropertybag";
  static _E = SupportingPropertyBags;
  get rdsupportingpropertybag() {
    return this._r;
  }
  set rdsupportingpropertybag(root) {
    this._r = root;
  }
}
export {
  RdSupportingPropertyBagPart
};
