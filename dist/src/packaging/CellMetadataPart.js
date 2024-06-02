import { Metadata } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class CellMetadataPart extends OxmlPart {
  static _N = "CellMetadataPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml";
  static _P = ".";
  static _T = "metadata";
  static _E = Metadata;
  get metadata() {
    return this._r;
  }
  set metadata(root) {
    this._r = root;
  }
}
export {
  CellMetadataPart
};
