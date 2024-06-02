import { NamedSheetViews } from "../schema/Office2021/Excel/NamedSheetViews";
import { OxmlPart } from "../framework/OxmlPart";
class NamedSheetViewsPart extends OxmlPart {
  static _N = "NamedSheetViewsPart";
  static _R = "http://schemas.microsoft.com/office/2019/04/relationships/namedSheetView";
  static _C = "application/vnd.ms-excel.namedsheetviews+xml";
  static _P = "../namedSheetViews";
  static _T = "namedSheetView";
  static _E = NamedSheetViews;
  get namedSheetView() {
    return this._r;
  }
  set namedSheetView(root) {
    this._r = root;
  }
}
export {
  NamedSheetViewsPart
};
