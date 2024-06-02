import { SlideLayout } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
import { CustomXmlPart } from './CustomXmlPart';
import { ChartPart } from './ChartPart';
import { ExtendedChartPart } from './ExtendedChartPart';
import { DiagramColorsPart } from './DiagramColorsPart';
import { DiagramDataPart } from './DiagramDataPart';
import { DiagramPersistLayoutPart } from './DiagramPersistLayoutPart';
import { DiagramLayoutDefinitionPart } from './DiagramLayoutDefinitionPart';
import { DiagramStylePart } from './DiagramStylePart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { EmbeddedControlPersistenceBinaryDataPart } from './EmbeddedControlPersistenceBinaryDataPart';
import { Model3DReferenceRelationshipPart } from './Model3DReferenceRelationshipPart';
import { SlidePart } from './SlidePart';
import { SlideMasterPart } from './SlideMasterPart';
import { ThemeOverridePart } from './ThemeOverridePart';
import { UserDefinedTagsPart } from './UserDefinedTagsPart';
import { EmbeddedControlPersistencePart } from './EmbeddedControlPersistencePart';

export class SlideLayoutPart extends OxmlPart<SlideLayout> {

    public static override _N = 'SlideLayoutPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml';
    public static _P = '../slideLayouts';
    public static _T = 'slideLayout';
    public static override _E = SlideLayout;

    public get slideLayout() { return this._r; }
    public set slideLayout(root: SlideLayout | undefined) { this._r = root; }

    public get customXmlParts() { return this._m<CustomXmlPart>('CustomXmlPart'); }
    public get chartParts() { return this._m<ChartPart>('ChartPart'); }
    public get extendedChartParts() { return this._m<ExtendedChartPart>('ExtendedChartPart'); }
    public get diagramColorsParts() { return this._m<DiagramColorsPart>('DiagramColorsPart'); }
    public get diagramDataParts() { return this._m<DiagramDataPart>('DiagramDataPart'); }
    public get diagramPersistLayoutParts() { return this._m<DiagramPersistLayoutPart>('DiagramPersistLayoutPart'); }
    public get diagramLayoutDefinitionParts() { return this._m<DiagramLayoutDefinitionPart>('DiagramLayoutDefinitionPart'); }
    public get diagramStyleParts() { return this._m<DiagramStylePart>('DiagramStylePart'); }
    public get embeddedObjectParts() { return this._m<EmbeddedObjectPart>('EmbeddedObjectPart'); }
    public get embeddedPackageParts() { return this._m<EmbeddedPackagePart>('EmbeddedPackagePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get vmlDrawingParts() { return this._m<VmlDrawingPart>('VmlDrawingPart'); }
    public get embeddedControlPersistenceBinaryDataParts() { return this._m<EmbeddedControlPersistenceBinaryDataPart>('EmbeddedControlPersistenceBinaryDataPart'); }
    public get model3DReferenceRelationshipParts() { return this._m<Model3DReferenceRelationshipPart>('Model3DReferenceRelationshipPart'); }
    public get slideParts() { return this._m<SlidePart>('SlidePart'); }
    public get slideMasterPart() { return this._f<SlideMasterPart>('SlideMasterPart'); }
    public get themeOverridePart() { return this._f<ThemeOverridePart>('ThemeOverridePart'); }
    public get userDefinedTagsParts() { return this._m<UserDefinedTagsPart>('UserDefinedTagsPart'); }
    public get embeddedControlPersistenceParts() { return this._m<EmbeddedControlPersistencePart>('EmbeddedControlPersistencePart'); }

}
