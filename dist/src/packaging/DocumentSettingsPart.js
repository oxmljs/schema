import { Settings } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class DocumentSettingsPart extends OxmlPart {
  static _N = "DocumentSettingsPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml";
  static _P = ".";
  static _T = "settings";
  static _E = Settings;
  get settings() {
    return this._r;
  }
  set settings(root) {
    this._r = root;
  }
  get mailMergeRecipientDataPart() {
    return this._f("MailMergeRecipientDataPart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
}
export {
  DocumentSettingsPart
};
