import { Endnotes } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class EndnotesPart extends OxmlPart {
  static _N = "EndnotesPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml";
  static _P = ".";
  static _T = "endnotes";
  static _E = Endnotes;
  get endnotes() {
    return this._r;
  }
  set endnotes(root) {
    this._r = root;
  }
  get alternativeFormatImportParts() {
    return this._m("AlternativeFormatImportPart");
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
  get embeddedControlPersistenceParts() {
    return this._m("EmbeddedControlPersistencePart");
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
  get model3DReferenceRelationshipParts() {
    return this._m("Model3DReferenceRelationshipPart");
  }
}
export {
  EndnotesPart
};
