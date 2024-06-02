import { SlideSyncProperties } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class SlideSyncDataPart extends OxmlPart {
  static _N = "SlideSyncDataPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideUpdateInfo";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml";
  static _P = "slideUpdateInfo";
  static _T = "slideUpdateInfo";
  static _E = SlideSyncProperties;
  get slideUpdateInfo() {
    return this._r;
  }
  set slideUpdateInfo(root) {
    this._r = root;
  }
}
export {
  SlideSyncDataPart
};
