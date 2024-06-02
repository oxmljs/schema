import { RichValueStructures } from "../schema/Office2019/Excel/RichData";
import { OxmlPart } from "../framework/OxmlPart";
class RdRichValueStructurePart extends OxmlPart {
  static _N = "RdRichValueStructurePart";
  static _R = "http://schemas.microsoft.com/office/2017/06/relationships/rdRichValueStructure";
  static _C = "application/vnd.ms-excel.rdrichvaluestructure+xml";
  static _P = "richData";
  static _T = "rdrichvaluestructure";
  static _E = RichValueStructures;
  get rdrichvaluestructure() {
    return this._r;
  }
  set rdrichvaluestructure(root) {
    this._r = root;
  }
}
export {
  RdRichValueStructurePart
};
