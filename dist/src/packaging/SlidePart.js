import { Slide } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class SlidePart extends OxmlPart {
  static _N = "SlidePart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.slide+xml";
  static _P = "slides";
  static _T = "slide";
  static _E = Slide;
  get slide() {
    return this._r;
  }
  set slide(root) {
    this._r = root;
  }
  get customXmlParts() {
    return this._m("CustomXmlPart");
  }
  get chartParts() {
    return this._m("ChartPart");
  }
  get extendedChartParts() {
    return this._m("ExtendedChartPart");
  }
  get diagramColorsParts() {
    return this._m("DiagramColorsPart");
  }
  get diagramDataParts() {
    return this._m("DiagramDataPart");
  }
  get diagramPersistLayoutParts() {
    return this._m("DiagramPersistLayoutPart");
  }
  get diagramLayoutDefinitionParts() {
    return this._m("DiagramLayoutDefinitionPart");
  }
  get diagramStyleParts() {
    return this._m("DiagramStylePart");
  }
  get embeddedObjectParts() {
    return this._m("EmbeddedObjectPart");
  }
  get embeddedPackageParts() {
    return this._m("EmbeddedPackagePart");
  }
  get imageParts() {
    return this._m("ImagePart");
  }
  get vmlDrawingParts() {
    return this._m("VmlDrawingPart");
  }
  get embeddedControlPersistenceBinaryDataParts() {
    return this._m("EmbeddedControlPersistenceBinaryDataPart");
  }
  get model3DReferenceRelationshipParts() {
    return this._m("Model3DReferenceRelationshipPart");
  }
  get slideCommentsPart() {
    return this._f("SlideCommentsPart");
  }
  get notesSlidePart() {
    return this._f("NotesSlidePart");
  }
  get themeOverridePart() {
    return this._f("ThemeOverridePart");
  }
  get slideLayoutPart() {
    return this._f("SlideLayoutPart");
  }
  get slideSyncDataPart() {
    return this._f("SlideSyncDataPart");
  }
  get userDefinedTagsParts() {
    return this._m("UserDefinedTagsPart");
  }
  get slideParts() {
    return this._m("SlidePart");
  }
  get embeddedControlPersistenceParts() {
    return this._m("EmbeddedControlPersistencePart");
  }
  get webExtensionParts() {
    return this._m("WebExtensionPart");
  }
  get commentParts() {
    return this._m("PowerPointCommentPart");
  }
}
export {
  SlidePart
};
