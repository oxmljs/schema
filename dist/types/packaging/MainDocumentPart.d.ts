import { Document } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { CustomXmlPart } from './CustomXmlPart';
import { GlossaryDocumentPart } from './GlossaryDocumentPart';
import { ThemePart } from './ThemePart';
import { ThumbnailPart } from './ThumbnailPart';
import { WordprocessingCommentsPart } from './WordprocessingCommentsPart';
import { DocumentSettingsPart } from './DocumentSettingsPart';
import { EndnotesPart } from './EndnotesPart';
import { FontTablePart } from './FontTablePart';
import { FootnotesPart } from './FootnotesPart';
import { NumberingDefinitionsPart } from './NumberingDefinitionsPart';
import { StyleDefinitionsPart } from './StyleDefinitionsPart';
import { StylesWithEffectsPart } from './StylesWithEffectsPart';
import { WebSettingsPart } from './WebSettingsPart';
import { FooterPart } from './FooterPart';
import { HeaderPart } from './HeaderPart';
import { WordprocessingPrinterSettingsPart } from './WordprocessingPrinterSettingsPart';
import { CustomizationPart } from './CustomizationPart';
import { VbaProjectPart } from './VbaProjectPart';
import { WordprocessingCommentsExPart } from './WordprocessingCommentsExPart';
import { WordprocessingPeoplePart } from './WordprocessingPeoplePart';
import { WordprocessingCommentsIdsPart } from './WordprocessingCommentsIdsPart';
import { DocumentTasksPart } from './DocumentTasksPart';
import { WordCommentsExtensiblePart } from './WordCommentsExtensiblePart';
import { AlternativeFormatImportPart } from './AlternativeFormatImportPart';
import { ChartPart } from './ChartPart';
import { ExtendedChartPart } from './ExtendedChartPart';
import { DiagramColorsPart } from './DiagramColorsPart';
import { DiagramDataPart } from './DiagramDataPart';
import { DiagramPersistLayoutPart } from './DiagramPersistLayoutPart';
import { DiagramLayoutDefinitionPart } from './DiagramLayoutDefinitionPart';
import { DiagramStylePart } from './DiagramStylePart';
import { EmbeddedControlPersistencePart } from './EmbeddedControlPersistencePart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';
import { Model3DReferenceRelationshipPart } from './Model3DReferenceRelationshipPart';
export declare class MainDocumentPart extends OxmlPart<Document> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Document;
    get document(): Document | undefined;
    set document(root: Document | undefined);
    get customXmlParts(): CustomXmlPart[];
    get glossaryDocumentPart(): GlossaryDocumentPart | undefined;
    get themePart(): ThemePart | undefined;
    get thumbnailPart(): ThumbnailPart | undefined;
    get wordprocessingCommentsPart(): WordprocessingCommentsPart | undefined;
    get documentSettingsPart(): DocumentSettingsPart | undefined;
    get endnotesPart(): EndnotesPart | undefined;
    get fontTablePart(): FontTablePart | undefined;
    get footnotesPart(): FootnotesPart | undefined;
    get numberingDefinitionsPart(): NumberingDefinitionsPart | undefined;
    get styleDefinitionsPart(): StyleDefinitionsPart | undefined;
    get stylesWithEffectsPart(): StylesWithEffectsPart | undefined;
    get webSettingsPart(): WebSettingsPart | undefined;
    get footerParts(): FooterPart[];
    get headerParts(): HeaderPart[];
    get wordprocessingPrinterSettingsParts(): WordprocessingPrinterSettingsPart[];
    get customizationPart(): CustomizationPart | undefined;
    get vbaProjectPart(): VbaProjectPart | undefined;
    get wordprocessingCommentsExPart(): WordprocessingCommentsExPart | undefined;
    get wordprocessingPeoplePart(): WordprocessingPeoplePart | undefined;
    get wordprocessingCommentsIdsPart(): WordprocessingCommentsIdsPart | undefined;
    get documentTasksPart(): DocumentTasksPart | undefined;
    get wordCommentsExtensiblePart(): WordCommentsExtensiblePart | undefined;
    get alternativeFormatImportParts(): AlternativeFormatImportPart[];
    get chartParts(): ChartPart[];
    get extendedChartParts(): ExtendedChartPart[];
    get diagramColorsParts(): DiagramColorsPart[];
    get diagramDataParts(): DiagramDataPart[];
    get diagramPersistLayoutParts(): DiagramPersistLayoutPart[];
    get diagramLayoutDefinitionParts(): DiagramLayoutDefinitionPart[];
    get diagramStyleParts(): DiagramStylePart[];
    get embeddedControlPersistenceParts(): EmbeddedControlPersistencePart[];
    get embeddedObjectParts(): EmbeddedObjectPart[];
    get embeddedPackageParts(): EmbeddedPackagePart[];
    get imageParts(): ImagePart[];
    get model3DReferenceRelationshipParts(): Model3DReferenceRelationshipPart[];
}
