import { TimelineCacheDefinition } from "../schema/Office2013/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class TimeLineCachePart extends OxmlPart {
  static _N = "TimeLineCachePart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/timelineCache";
  static _C = "application/vnd.ms-excel.timelineCache+xml";
  static _P = "timelineCaches";
  static _T = "timelineCache";
  static _E = TimelineCacheDefinition;
  get timelineCache() {
    return this._r;
  }
  set timelineCache(root) {
    this._r = root;
  }
}
export {
  TimeLineCachePart
};
