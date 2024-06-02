import { Stylesheet } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class WorkbookStylesPart extends OxmlPart {
  static _N = "WorkbookStylesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml";
  static _P = ".";
  static _T = "styles";
  static _E = Stylesheet;
  get styles() {
    return this._r;
  }
  set styles(root) {
    this._r = root;
  }
}
export {
  WorkbookStylesPart
};
