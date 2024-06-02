import { PivotCacheRecords } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class PivotTableCacheRecordsPart extends OxmlPart {
  static _N = "PivotTableCacheRecordsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheRecords";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml";
  static _P = ".";
  static _T = "pivotCacheRecords";
  static _E = PivotCacheRecords;
  get pivotCacheRecords() {
    return this._r;
  }
  set pivotCacheRecords(root) {
    this._r = root;
  }
}
export {
  PivotTableCacheRecordsPart
};
