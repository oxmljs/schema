import { WebExtension } from "../schema/Office2013/WebExtension";
import { OxmlPart } from "../framework/OxmlPart";
class WebExtensionPart extends OxmlPart {
  static _N = "WebExtensionPart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/webextension";
  static _C = "application/vnd.ms-office.webextension+xml";
  static _P = "../webextensions";
  static _T = "webextension";
  static _E = WebExtension;
  get webextension() {
    return this._r;
  }
  set webextension(root) {
    this._r = root;
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  WebExtensionPart
};
