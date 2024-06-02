import { WorksheetSortMap } from "../schema/Office/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class WorksheetSortMapPart extends OxmlPart {
  static _N = "WorksheetSortMapPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/wsSortMap";
  static _C = "application/vnd.ms-excel.wsSortMap+xml";
  static _P = ".";
  static _T = "wsSortMap";
  static _E = WorksheetSortMap;
  get wsSortMap() {
    return this._r;
  }
  set wsSortMap(root) {
    this._r = root;
  }
}
export {
  WorksheetSortMapPart
};
