import { PivotTableDefinition } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class PivotTablePart extends OxmlPart {
  static _N = "PivotTablePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml";
  static _P = "../pivotTables";
  static _T = "pivotTable";
  static _E = PivotTableDefinition;
  get pivotTable() {
    return this._r;
  }
  set pivotTable(root) {
    this._r = root;
  }
  get pivotTableCacheDefinitionPart() {
    return this._f("PivotTableCacheDefinitionPart");
  }
}
export {
  PivotTablePart
};
