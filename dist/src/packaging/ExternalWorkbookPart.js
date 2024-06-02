import { ExternalLink } from "../schema/Spreadsheet";
import { OxmlPart } from "../framework/OxmlPart";
class ExternalWorkbookPart extends OxmlPart {
  static _N = "ExternalWorkbookPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink";
  static _C = "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml";
  static _P = "externalReferences";
  static _T = "externalReference";
  static _E = ExternalLink;
  get externalReference() {
    return this._r;
  }
  set externalReference(root) {
    this._r = root;
  }
}
export {
  ExternalWorkbookPart
};
