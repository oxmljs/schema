import { CommentsEx } from '../schema/Office2013/Word';
import { OxmlPart } from '../framework/OxmlPart';
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

export class WordprocessingCommentsExPart extends OxmlPart<CommentsEx> {

    public static override _N = 'WordprocessingCommentsExPart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/commentsExtended';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.commentsExtended+xml';
    public static _P = '.';
    public static _T = 'commentsExtended';
    public static override _E = CommentsEx;

    public get commentsExtended() { return this._r; }
    public set commentsExtended(root: CommentsEx | undefined) { this._r = root; }

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
