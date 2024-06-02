import { DataStoreItem } from "../schema/CustomXmlDataProperties";
import { OxmlPart } from "../framework/OxmlPart";
class CustomXmlPropertiesPart extends OxmlPart {
  static _N = "CustomXmlPropertiesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps";
  static _C = "application/vnd.openxmlformats-officedocument.customXmlProperties+xml";
  static _P = ".";
  static _T = "itemProps";
  static _E = DataStoreItem;
  get itemProps() {
    return this._r;
  }
  set itemProps(root) {
    this._r = root;
  }
}
export {
  CustomXmlPropertiesPart
};
