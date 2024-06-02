import { Header } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class HeaderPart extends OxmlPart {
  static _N = "HeaderPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml";
  static _P = ".";
  static _T = "header";
  static _E = Header;
  get header() {
    return this._r;
  }
  set header(root) {
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
  HeaderPart
};
