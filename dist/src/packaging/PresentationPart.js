import { Presentation } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class PresentationPart extends OxmlPart {
  static _N = "PresentationPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
  static _C = "*";
  static _P = "ppt";
  static _T = "presentation";
  static _E = Presentation;
  get presentation() {
    return this._r;
  }
  set presentation(root) {
    this._r = root;
  }
  get customXmlParts() {
    return this._m("CustomXmlPart");
  }
  get fontParts() {
    return this._m("FontPart");
  }
  get presentationPropertiesPart() {
    return this._f("PresentationPropertiesPart");
  }
  get tableStylesPart() {
    return this._f("TableStylesPart");
  }
  get themePart() {
    return this._f("ThemePart");
  }
  get viewPropertiesPart() {
    return this._f("ViewPropertiesPart");
  }
  get notesMasterPart() {
    return this._f("NotesMasterPart");
  }
  get slideParts() {
    return this._m("SlidePart");
  }
  get slideMasterParts() {
    return this._m("SlideMasterPart");
  }
  get userDefinedTagsPart() {
    return this._f("UserDefinedTagsPart");
  }
  get commentAuthorsPart() {
    return this._f("CommentAuthorsPart");
  }
  get handoutMasterPart() {
    return this._f("HandoutMasterPart");
  }
  get legacyDiagramTextInfoPart() {
    return this._f("LegacyDiagramTextInfoPart");
  }
  get vbaProjectPart() {
    return this._f("VbaProjectPart");
  }
  get commentParts() {
    return this._m("PowerPointCommentPart");
  }
  get authorsPart() {
    return this._f("PowerPointAuthorsPart");
  }
}
export {
  PresentationPart
};
