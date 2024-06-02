import { QueryTable } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class QueryTablePart extends OxmlPart {
  static _N = "QueryTablePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/queryTable";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml";
  static _P = "../queryTables";
  static _T = "queryTable";
  static _E = QueryTable;
  get queryTable() {
    return this._r;
  }
  set queryTable(root) {
    this._r = root;
  }
}
export {
  QueryTablePart
};
