import { OxmlPart } from "../framework/OxmlPart";
class CustomXmlPart extends OxmlPart {
  static _N = "CustomXmlPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml";
  static _C = "*";
  static _P = "../customXml";
  static _T = "item";
  get item() {
    return this._r;
  }
  set item(root) {
    this._r = root;
  }
  get customXmlPropertiesPart() {
    return this._f("CustomXmlPropertiesPart");
  }
}
export {
  CustomXmlPart
};
