import { Slicers } from "../schema/Office2010/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class SlicersPart extends OxmlPart {
  static _N = "SlicersPart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/slicer";
  static _C = "application/vnd.ms-excel.slicer+xml";
  static _P = "../slicers";
  static _T = "slicer";
  static _E = Slicers;
  get slicer() {
    return this._r;
  }
  set slicer(root) {
    this._r = root;
  }
}
export {
  SlicersPart
};
