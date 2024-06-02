import { SingleXmlCells } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class SingleCellTablePart extends OxmlPart {
  static _N = "SingleCellTablePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableSingleCells";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml";
  static _P = "../tables";
  static _T = "tableSingleCells";
  static _E = SingleXmlCells;
  get tableSingleCells() {
    return this._r;
  }
  set tableSingleCells(root) {
    this._r = root;
  }
}
export {
  SingleCellTablePart
};
