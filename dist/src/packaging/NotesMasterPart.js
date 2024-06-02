import { NotesMaster } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class NotesMasterPart extends OxmlPart {
  static _N = "NotesMasterPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml";
  static _P = "notesMasters";
  static _T = "notesMaster";
  static _E = NotesMaster;
  get notesMaster() {
    return this._r;
  }
  set notesMaster(root) {
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
  get themePart() {
    return this._f("ThemePart");
  }
  get userDefinedTagsParts() {
    return this._m("UserDefinedTagsPart");
  }
  get slidePart() {
    return this._f("SlidePart");
  }
}
export {
  NotesMasterPart
};
