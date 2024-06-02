import { SlideLayout } from "../schema/Presentation";
import { OxmlPart } from "../framework/OxmlPart";
class SlideLayoutPart extends OxmlPart {
  static _N = "SlideLayoutPart";
  static _R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout";
  static _C = "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml";
  static _P = "../slideLayouts";
  static _T = "slideLayout";
  static _E = SlideLayout;
  get slideLayout() {
    return this._r;
  }
  set slideLayout(root) {
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
  get slideParts() {
    return this._m("SlidePart");
  }
  get slideMasterPart() {
    return this._f("SlideMasterPart");
  }
  get themeOverridePart() {
    return this._f("ThemeOverridePart");
  }
  get userDefinedTagsParts() {
    return this._m("UserDefinedTagsPart");
  }
  get embeddedControlPersistenceParts() {
    return this._m("EmbeddedControlPersistencePart");
  }
}
export {
  SlideLayoutPart
};
