import { WebSettings } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class WebSettingsPart extends OxmlPart {
  static _N = "WebSettingsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml";
  static _P = ".";
  static _T = "webSettings";
  static _E = WebSettings;
  get webSettings() {
    return this._r;
  }
  set webSettings(root) {
    this._r = root;
  }
}
export {
  WebSettingsPart
};
