import { CommentsEx } from "../schema/Office2013/Word";
import { OxmlPart } from "../framework/OxmlPart";
class WordprocessingCommentsExPart extends OxmlPart {
  static _N = "WordprocessingCommentsExPart";
  static _R = "http://schemas.microsoft.com/office/2011/relationships/commentsExtended";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.commentsExtended+xml";
  static _P = ".";
  static _T = "commentsExtended";
  static _E = CommentsEx;
  get commentsExtended() {
    return this._r;
  }
  set commentsExtended(root) {
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
  WordprocessingCommentsExPart
};
