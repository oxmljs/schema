import { OxmlPackage } from '../framework/OxmlPackage';
import { WorkbookPart } from './WorkbookPart';
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
export declare class SpreadsheetDocument extends OxmlPackage {
    static open(source: JSZip.InputType): Promise<SpreadsheetDocument>;
    static create(): Promise<SpreadsheetDocument>;
    private constructor();
    get workbookPart(): WorkbookPart | undefined;
    get coreFilePropertiesPart(): CoreFilePropertiesPart | undefined;
    get extendedFilePropertiesPart(): ExtendedFilePropertiesPart | undefined;
    get customFilePropertiesPart(): CustomFilePropertiesPart | undefined;
    get thumbnailPart(): ThumbnailPart | undefined;
    get digitalSignatureOriginPart(): DigitalSignatureOriginPart | undefined;
    get quickAccessToolbarCustomizationsPart(): QuickAccessToolbarCustomizationsPart | undefined;
    get ribbonExtensibilityPart(): RibbonExtensibilityPart | undefined;
    get ribbonAndBackstageCustomizationsPart(): RibbonAndBackstageCustomizationsPart | undefined;
    get webExTaskpanesPart(): WebExTaskpanesPart | undefined;
    get labelInfoPart(): LabelInfoPart | undefined;
    addWorkbookPart(): WorkbookPart;
    addCoreFilePropertiesPart(): CoreFilePropertiesPart;
    addExtendedFilePropertiesPart(): ExtendedFilePropertiesPart;
    addCustomFilePropertiesPart(): CustomFilePropertiesPart;
    addThumbnailPart(): ThumbnailPart;
    addDigitalSignatureOriginPart(): DigitalSignatureOriginPart;
    addQuickAccessToolbarCustomizationsPart(): QuickAccessToolbarCustomizationsPart;
    addRibbonExtensibilityPart(): RibbonExtensibilityPart;
    addRibbonAndBackstageCustomizationsPart(): RibbonAndBackstageCustomizationsPart;
    addWebExTaskpanesPart(): WebExTaskpanesPart;
    addLabelInfoPart(): LabelInfoPart;
}
