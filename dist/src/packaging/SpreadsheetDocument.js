import { OxmlPackage } from "../framework/OxmlPackage";
import { WorkbookPart } from "./WorkbookPart";
import { CoreFilePropertiesPart } from "./CoreFilePropertiesPart";
import { ExtendedFilePropertiesPart } from "./ExtendedFilePropertiesPart";
import { CustomFilePropertiesPart } from "./CustomFilePropertiesPart";
import { ThumbnailPart } from "./ThumbnailPart";
import { DigitalSignatureOriginPart } from "./DigitalSignatureOriginPart";
import { QuickAccessToolbarCustomizationsPart } from "./QuickAccessToolbarCustomizationsPart";
import { RibbonExtensibilityPart } from "./RibbonExtensibilityPart";
import { RibbonAndBackstageCustomizationsPart } from "./RibbonAndBackstageCustomizationsPart";
import { WebExTaskpanesPart } from "./WebExTaskpanesPart";
import { LabelInfoPart } from "./LabelInfoPart";
class SpreadsheetDocument extends OxmlPackage {
  static async open(source) {
    const pkg = new SpreadsheetDocument();
    await pkg.open(source);
    return pkg;
  }
  static async create() {
    const pkg = new SpreadsheetDocument();
    await pkg.create();
    return pkg;
  }
  constructor() {
    super(null);
  }
  get workbookPart() {
    return this._f("WorkbookPart");
  }
  get coreFilePropertiesPart() {
    return this._f("CoreFilePropertiesPart");
  }
  get extendedFilePropertiesPart() {
    return this._f("ExtendedFilePropertiesPart");
  }
  get customFilePropertiesPart() {
    return this._f("CustomFilePropertiesPart");
  }
  get thumbnailPart() {
    return this._f("ThumbnailPart");
  }
  get digitalSignatureOriginPart() {
    return this._f("DigitalSignatureOriginPart");
  }
  get quickAccessToolbarCustomizationsPart() {
    return this._f("QuickAccessToolbarCustomizationsPart");
  }
  get ribbonExtensibilityPart() {
    return this._f("RibbonExtensibilityPart");
  }
  get ribbonAndBackstageCustomizationsPart() {
    return this._f("RibbonAndBackstageCustomizationsPart");
  }
  get webExTaskpanesPart() {
    return this._f("WebExTaskpanesPart");
  }
  get labelInfoPart() {
    return this._f("LabelInfoPart");
  }
  addWorkbookPart() {
    return this._a(WorkbookPart);
  }
  addCoreFilePropertiesPart() {
    return this._a(CoreFilePropertiesPart);
  }
  addExtendedFilePropertiesPart() {
    return this._a(ExtendedFilePropertiesPart);
  }
  addCustomFilePropertiesPart() {
    return this._a(CustomFilePropertiesPart);
  }
  addThumbnailPart() {
    return this._a(ThumbnailPart);
  }
  addDigitalSignatureOriginPart() {
    return this._a(DigitalSignatureOriginPart);
  }
  addQuickAccessToolbarCustomizationsPart() {
    return this._a(QuickAccessToolbarCustomizationsPart);
  }
  addRibbonExtensibilityPart() {
    return this._a(RibbonExtensibilityPart);
  }
  addRibbonAndBackstageCustomizationsPart() {
    return this._a(RibbonAndBackstageCustomizationsPart);
  }
  addWebExTaskpanesPart() {
    return this._a(WebExTaskpanesPart);
  }
  addLabelInfoPart() {
    return this._a(LabelInfoPart);
  }
}
export {
  SpreadsheetDocument
};
