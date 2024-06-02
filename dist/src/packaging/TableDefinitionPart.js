import { Table } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class TableDefinitionPart extends OxmlPart {
  static _N = "TableDefinitionPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/table";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml";
  static _P = "../tables";
  static _T = "table";
  static _E = Table;
  get table() {
    return this._r;
  }
  set table(root) {
    this._r = root;
  }
  get queryTableParts() {
    return this._m("QueryTablePart");
  }
}
export {
  TableDefinitionPart
};
