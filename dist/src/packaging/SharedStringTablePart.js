import { SharedStringTable } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class SharedStringTablePart extends OxmlPart {
  static _N = "SharedStringTablePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml";
  static _P = ".";
  static _T = "sharedStrings";
  static _E = SharedStringTable;
  get sharedStrings() {
    return this._r;
  }
  set sharedStrings(root) {
    this._r = root;
  }
}
export {
  SharedStringTablePart
};
