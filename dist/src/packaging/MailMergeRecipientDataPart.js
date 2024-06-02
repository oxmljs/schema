import { OxmlPart } from "../framework/OxmlPart";
class MailMergeRecipientDataPart extends OxmlPart {
  static _N = "MailMergeRecipientDataPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/recipientData";
  static _C = "*";
  static _P = ".";
  static _T = "recipients";
  get recipients() {
    return this._r;
  }
  set recipients(root) {
    this._r = root;
  }
}
export {
  MailMergeRecipientDataPart
};
