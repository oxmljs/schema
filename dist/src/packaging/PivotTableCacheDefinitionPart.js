import { PivotCacheDefinition } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class PivotTableCacheDefinitionPart extends OxmlPart {
  static _N = "PivotTableCacheDefinitionPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheDefinition";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml";
  static _P = "../pivotCache";
  static _T = "pivotCacheDefinition";
  static _E = PivotCacheDefinition;
  get pivotCacheDefinition() {
    return this._r;
  }
  set pivotCacheDefinition(root) {
    this._r = root;
  }
  get pivotTableCacheRecordsPart() {
    return this._f("PivotTableCacheRecordsPart");
  }
}
export {
  PivotTableCacheDefinitionPart
};
