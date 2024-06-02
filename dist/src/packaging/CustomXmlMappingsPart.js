import { MapInfo } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class CustomXmlMappingsPart extends OxmlPart {
  static _N = "CustomXmlMappingsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/xmlMaps";
  static _C = "application/xml";
  static _P = ".";
  static _T = "xmlMaps";
  static _E = MapInfo;
  get xmlMaps() {
    return this._r;
  }
  set xmlMaps(root) {
    this._r = root;
  }
}
export {
  CustomXmlMappingsPart
};
