import { Taskpanes } from "../schema/Office2013/WebExtentionPane";
import { OxmlPart } from "../framework/OxmlPart";
class WebExTaskpanesPart extends OxmlPart {
  static _N = "WebExTaskpanesPart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/webextensiontaskpanes";
  static _C = "application/vnd.ms-office.webextensiontaskpanes+xml";
  static _P = "../webextensions";
  static _PW = "word/webextensions";
  static _PE = "xl/webextensions";
  static _PP = "ppt/webextensions";
  static _T = "taskpanes";
  static _E = Taskpanes;
  get taskpanes() {
    return this._r;
  }
  set taskpanes(root) {
    this._r = root;
  }
  get webExtensionParts() {
    return this._m("WebExtensionPart");
  }
}
export {
  WebExTaskpanesPart
};
