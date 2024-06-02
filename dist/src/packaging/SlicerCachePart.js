import { SlicerCacheDefinition } from "../schema/Office2010/Excel";
import { OxmlPart } from "../framework/OxmlPart";
class SlicerCachePart extends OxmlPart {
  static _N = "SlicerCachePart";
  static _R = "http://schemas.microsoft.com/office/2007/relationships/slicerCache";
  static _C = "application/vnd.ms-excel.slicerCache+xml";
  static _P = "slicerCaches";
  static _T = "slicerCache";
  static _E = SlicerCacheDefinition;
  get slicerCache() {
    return this._r;
  }
  set slicerCache(root) {
    this._r = root;
  }
}
export {
  SlicerCachePart
};
