import { DatastoreItem } from "../schema/Office2010/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class CustomDataPropertiesPart extends OxmlPart {
  static _N = "CustomDataPropertiesPart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/customDataProps";
  static _C = "application/vnd.ms-excel.customDataProperties+xml";
  static _P = "customData";
  static _T = "customDataProps";
  static _E = DatastoreItem;
  get customDataProps() {
    return this._r;
  }
  set customDataProps(root) {
    this._r = root;
  }
  get customDataPart() {
    return this._f("CustomDataPart");
  }
}
export {
  CustomDataPropertiesPart
};
