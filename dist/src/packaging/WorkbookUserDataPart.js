import { Users } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorkbookUserDataPart extends OxmlPart {
  static _N = "WorkbookUserDataPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/usernames";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml";
  static _P = "revisions";
  static _T = "userNames";
  static _E = Users;
  get userNames() {
    return this._r;
  }
  set userNames(root) {
    this._r = root;
  }
}
export {
  WorkbookUserDataPart
};
