import { Document } from "../schema/Wordprocessing";
import { OxmlPart } from "../framework/OxmlPart";
class MainDocumentPart extends OxmlPart {
  static _N = "MainDocumentPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
  static _C = "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml";
  static _P = "word";
  static _T = "document";
  static _E = Document;
  get document() {
    return this._r;
  }
  set document(root) {
    this._r = root;
  }
  get customXmlParts() {
    return this._m("CustomXmlPart");
  }
  get glossaryDocumentPart() {
    return this._f("GlossaryDocumentPart");
  }
  get themePart() {
    return this._f("ThemePart");
  }
  get thumbnailPart() {
    return this._f("ThumbnailPart");
  }
  get wordprocessingCommentsPart() {
    return this._f("WordprocessingCommentsPart");
  }
  get documentSettingsPart() {
    return this._f("DocumentSettingsPart");
  }
  get endnotesPart() {
    return this._f("EndnotesPart");
  }
  get fontTablePart() {
    return this._f("FontTablePart");
  }
  get footnotesPart() {
    return this._f("FootnotesPart");
  }
  get numberingDefinitionsPart() {
    return this._f("NumberingDefinitionsPart");
  }
  get styleDefinitionsPart() {
    return this._f("StyleDefinitionsPart");
  }
  get stylesWithEffectsPart() {
    return this._f("StylesWithEffectsPart");
  }
  get webSettingsPart() {
    return this._f("WebSettingsPart");
  }
  get footerParts() {
    return this._m("FooterPart");
  }
  get headerParts() {
    return this._m("HeaderPart");
  }
  get wordprocessingPrinterSettingsParts() {
    return this._m("WordprocessingPrinterSettingsPart");
  }
  get customizationPart() {
    return this._f("CustomizationPart");
  }
  get vbaProjectPart() {
    return this._f("VbaProjectPart");
  }
  get wordprocessingCommentsExPart() {
    return this._f("WordprocessingCommentsExPart");
  }
  get wordprocessingPeoplePart() {
    return this._f("WordprocessingPeoplePart");
  }
  get wordprocessingCommentsIdsPart() {
    return this._f("WordprocessingCommentsIdsPart");
  }
  get documentTasksPart() {
    return this._f("DocumentTasksPart");
  }
  get wordCommentsExtensiblePart() {
    return this._f("WordCommentsExtensiblePart");
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
  MainDocumentPart
};
