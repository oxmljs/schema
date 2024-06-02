import { Headers } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorkbookRevisionHeaderPart extends OxmlPart {
  static _N = "WorkbookRevisionHeaderPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionHeaders";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml";
  static _P = "revisions";
  static _T = "revisionHeaders";
  static _E = Headers;
  get revisionHeaders() {
    return this._r;
  }
  set revisionHeaders(root) {
    this._r = root;
  }
  get workbookRevisionLogParts() {
    return this._m("WorkbookRevisionLogPart");
  }
}
export {
  WorkbookRevisionHeaderPart
};
