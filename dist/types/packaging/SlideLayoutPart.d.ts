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
export declare class SlideLayoutPart extends OxmlPart<SlideLayout> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SlideLayout;
    get slideLayout(): SlideLayout | undefined;
    set slideLayout(root: SlideLayout | undefined);
    get customXmlParts(): CustomXmlPart[];
    get chartParts(): ChartPart[];
    get extendedChartParts(): ExtendedChartPart[];
    get diagramColorsParts(): DiagramColorsPart[];
    get diagramDataParts(): DiagramDataPart[];
    get diagramPersistLayoutParts(): DiagramPersistLayoutPart[];
    get diagramLayoutDefinitionParts(): DiagramLayoutDefinitionPart[];
    get diagramStyleParts(): DiagramStylePart[];
    get embeddedObjectParts(): EmbeddedObjectPart[];
    get embeddedPackageParts(): EmbeddedPackagePart[];
    get imageParts(): ImagePart[];
    get vmlDrawingParts(): VmlDrawingPart[];
    get embeddedControlPersistenceBinaryDataParts(): EmbeddedControlPersistenceBinaryDataPart[];
    get model3DReferenceRelationshipParts(): Model3DReferenceRelationshipPart[];
    get slideParts(): SlidePart[];
    get slideMasterPart(): SlideMasterPart | undefined;
    get themeOverridePart(): ThemeOverridePart | undefined;
    get userDefinedTagsParts(): UserDefinedTagsPart[];
    get embeddedControlPersistenceParts(): EmbeddedControlPersistencePart[];
}
