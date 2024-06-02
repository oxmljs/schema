import { GlossaryDocument } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
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

export class GlossaryDocumentPart extends OxmlPart<GlossaryDocument> {

    public static override _N = 'GlossaryDocumentPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/glossaryDocument';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml';
    public static _P = 'glossary';
    public static _T = 'document';
    public static override _E = GlossaryDocument;

    public get document() { return this._r; }
    public set document(root: GlossaryDocument | undefined) { this._r = root; }

    public get wordprocessingCommentsPart() { return this._f<WordprocessingCommentsPart>('WordprocessingCommentsPart'); }
    public get documentSettingsPart() { return this._f<DocumentSettingsPart>('DocumentSettingsPart'); }
    public get endnotesPart() { return this._f<EndnotesPart>('EndnotesPart'); }
    public get fontTablePart() { return this._f<FontTablePart>('FontTablePart'); }
    public get footnotesPart() { return this._f<FootnotesPart>('FootnotesPart'); }
    public get numberingDefinitionsPart() { return this._f<NumberingDefinitionsPart>('NumberingDefinitionsPart'); }
    public get styleDefinitionsPart() { return this._f<StyleDefinitionsPart>('StyleDefinitionsPart'); }
    public get stylesWithEffectsPart() { return this._f<StylesWithEffectsPart>('StylesWithEffectsPart'); }
    public get webSettingsPart() { return this._f<WebSettingsPart>('WebSettingsPart'); }
    public get footerParts() { return this._m<FooterPart>('FooterPart'); }
    public get headerParts() { return this._m<HeaderPart>('HeaderPart'); }
    public get wordprocessingPrinterSettingsParts() { return this._m<WordprocessingPrinterSettingsPart>('WordprocessingPrinterSettingsPart'); }
    public get customizationPart() { return this._f<CustomizationPart>('CustomizationPart'); }
    public get vbaProjectPart() { return this._f<VbaProjectPart>('VbaProjectPart'); }
    public get wordprocessingCommentsExPart() { return this._f<WordprocessingCommentsExPart>('WordprocessingCommentsExPart'); }
    public get wordprocessingPeoplePart() { return this._f<WordprocessingPeoplePart>('WordprocessingPeoplePart'); }
    public get wordprocessingCommentsIdsPart() { return this._f<WordprocessingCommentsIdsPart>('WordprocessingCommentsIdsPart'); }
    public get documentTasksPart() { return this._f<DocumentTasksPart>('DocumentTasksPart'); }
    public get wordCommentsExtensiblePart() { return this._f<WordCommentsExtensiblePart>('WordCommentsExtensiblePart'); }
    public get alternativeFormatImportParts() { return this._m<AlternativeFormatImportPart>('AlternativeFormatImportPart'); }
    public get chartParts() { return this._m<ChartPart>('ChartPart'); }
    public get extendedChartParts() { return this._m<ExtendedChartPart>('ExtendedChartPart'); }
    public get diagramColorsParts() { return this._m<DiagramColorsPart>('DiagramColorsPart'); }
    public get diagramDataParts() { return this._m<DiagramDataPart>('DiagramDataPart'); }
    public get diagramPersistLayoutParts() { return this._m<DiagramPersistLayoutPart>('DiagramPersistLayoutPart'); }
    public get diagramLayoutDefinitionParts() { return this._m<DiagramLayoutDefinitionPart>('DiagramLayoutDefinitionPart'); }
    public get diagramStyleParts() { return this._m<DiagramStylePart>('DiagramStylePart'); }
    public get embeddedControlPersistenceParts() { return this._m<EmbeddedControlPersistencePart>('EmbeddedControlPersistencePart'); }
    public get embeddedObjectParts() { return this._m<EmbeddedObjectPart>('EmbeddedObjectPart'); }
    public get embeddedPackageParts() { return this._m<EmbeddedPackagePart>('EmbeddedPackagePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get model3DReferenceRelationshipParts() { return this._m<Model3DReferenceRelationshipPart>('Model3DReferenceRelationshipPart'); }

}
