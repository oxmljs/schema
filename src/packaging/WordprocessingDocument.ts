import { OxmlPackage } from '../framework/OxmlPackage';
import { MainDocumentPart } from './MainDocumentPart';
import { CoreFilePropertiesPart } from './CoreFilePropertiesPart';
import { ExtendedFilePropertiesPart } from './ExtendedFilePropertiesPart';
import { CustomFilePropertiesPart } from './CustomFilePropertiesPart';
import { ThumbnailPart } from './ThumbnailPart';
import { DigitalSignatureOriginPart } from './DigitalSignatureOriginPart';
import { QuickAccessToolbarCustomizationsPart } from './QuickAccessToolbarCustomizationsPart';
import { RibbonExtensibilityPart } from './RibbonExtensibilityPart';
import { RibbonAndBackstageCustomizationsPart } from './RibbonAndBackstageCustomizationsPart';
import { WebExTaskpanesPart } from './WebExTaskpanesPart';
import { LabelInfoPart } from './LabelInfoPart';

import * as JSZip from 'jszip';
export class WordprocessingDocument extends OxmlPackage {

    public static async open(source: JSZip.InputType) {
        const pkg = new WordprocessingDocument();
        await pkg.open(source);
        return pkg;
    }

    public static async create() {
        const pkg = new WordprocessingDocument();
        await pkg.create();
        return pkg;
    }

    private constructor() { super(null!); }

    public get mainDocumentPart() { return this._f<MainDocumentPart>('MainDocumentPart'); }
    public get coreFilePropertiesPart() { return this._f<CoreFilePropertiesPart>('CoreFilePropertiesPart'); }
    public get extendedFilePropertiesPart() { return this._f<ExtendedFilePropertiesPart>('ExtendedFilePropertiesPart'); }
    public get customFilePropertiesPart() { return this._f<CustomFilePropertiesPart>('CustomFilePropertiesPart'); }
    public get thumbnailPart() { return this._f<ThumbnailPart>('ThumbnailPart'); }
    public get digitalSignatureOriginPart() { return this._f<DigitalSignatureOriginPart>('DigitalSignatureOriginPart'); }
    public get quickAccessToolbarCustomizationsPart() { return this._f<QuickAccessToolbarCustomizationsPart>('QuickAccessToolbarCustomizationsPart'); }
    public get ribbonExtensibilityPart() { return this._f<RibbonExtensibilityPart>('RibbonExtensibilityPart'); }
    public get ribbonAndBackstageCustomizationsPart() { return this._f<RibbonAndBackstageCustomizationsPart>('RibbonAndBackstageCustomizationsPart'); }
    public get webExTaskpanesPart() { return this._f<WebExTaskpanesPart>('WebExTaskpanesPart'); }
    public get labelInfoPart() { return this._f<LabelInfoPart>('LabelInfoPart'); }

    public addMainDocumentPart() { return this._a(MainDocumentPart); }
    public addCoreFilePropertiesPart() { return this._a(CoreFilePropertiesPart); }
    public addExtendedFilePropertiesPart() { return this._a(ExtendedFilePropertiesPart); }
    public addCustomFilePropertiesPart() { return this._a(CustomFilePropertiesPart); }
    public addThumbnailPart() { return this._a(ThumbnailPart); }
    public addDigitalSignatureOriginPart() { return this._a(DigitalSignatureOriginPart); }
    public addQuickAccessToolbarCustomizationsPart() { return this._a(QuickAccessToolbarCustomizationsPart); }
    public addRibbonExtensibilityPart() { return this._a(RibbonExtensibilityPart); }
    public addRibbonAndBackstageCustomizationsPart() { return this._a(RibbonAndBackstageCustomizationsPart); }
    public addWebExTaskpanesPart() { return this._a(WebExTaskpanesPart); }
    public addLabelInfoPart() { return this._a(LabelInfoPart); }

}
