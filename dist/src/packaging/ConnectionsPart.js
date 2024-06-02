import { Connections } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class ConnectionsPart extends OxmlPart {
  static _N = "ConnectionsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml";
  static _P = ".";
  static _T = "connections";
  static _E = Connections;
  get connections() {
    return this._r;
  }
  set connections(root) {
    this._r = root;
  }
}
export {
  ConnectionsPart
};
