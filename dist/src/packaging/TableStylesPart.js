import { TableStyleList } from "../schema/Drawing";
import { OxmlPart } from "../framework/OxmlPart";
class TableStylesPart extends OxmlPart {
  static _N = "TableStylesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml";
  static _P = ".";
  static _T = "tableStyles";
  static _E = TableStyleList;
  get tableStyles() {
    return this._r;
  }
  set tableStyles(root) {
    this._r = root;
  }
}
export {
  TableStylesPart
};
