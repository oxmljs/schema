import { Revisions } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorkbookRevisionLogPart extends OxmlPart {
  static _N = "WorkbookRevisionLogPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionLog";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml";
  static _P = ".";
  static _T = "revisionLog";
  static _E = Revisions;
  get revisionLog() {
    return this._r;
  }
  set revisionLog(root) {
    this._r = root;
  }
}
export {
  WorkbookRevisionLogPart
};
