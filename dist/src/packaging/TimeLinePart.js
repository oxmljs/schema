import { Timelines } from "../schema/Office2013/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class TimeLinePart extends OxmlPart {
  static _N = "TimeLinePart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/timeline";
  static _C = "application/vnd.ms-excel.timeline+xml";
  static _P = "../timelines";
  static _T = "timeline";
  static _E = Timelines;
  get timeline() {
    return this._r;
  }
  set timeline(root) {
    this._r = root;
  }
}
export {
  TimeLinePart
};
