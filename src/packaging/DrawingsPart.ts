import { WorksheetDrawing } from '../schema/Drawing/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { ChartPart } from './ChartPart';
import { ExtendedChartPart } from './ExtendedChartPart';
import { DiagramColorsPart } from './DiagramColorsPart';
import { DiagramDataPart } from './DiagramDataPart';
import { DiagramPersistLayoutPart } from './DiagramPersistLayoutPart';
import { DiagramLayoutDefinitionPart } from './DiagramLayoutDefinitionPart';
import { DiagramStylePart } from './DiagramStylePart';
import { ImagePart } from './ImagePart';
import { CustomXmlPart } from './CustomXmlPart';
import { WebExtensionPart } from './WebExtensionPart';

export class DrawingsPart extends OxmlPart<WorksheetDrawing> {

    public static override _N = 'DrawingsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawing+xml';
    public static _P = '../drawings';
    public static _T = 'drawing';
    public static override _E = WorksheetDrawing;

    public get drawing() { return this._r; }
    public set drawing(root: WorksheetDrawing | undefined) { this._r = root; }

    public get chartParts() { return this._m<ChartPart>('ChartPart'); }
    public get extendedChartParts() { return this._m<ExtendedChartPart>('ExtendedChartPart'); }
    public get diagramColorsParts() { return this._m<DiagramColorsPart>('DiagramColorsPart'); }
    public get diagramDataParts() { return this._m<DiagramDataPart>('DiagramDataPart'); }
    public get diagramPersistLayoutParts() { return this._m<DiagramPersistLayoutPart>('DiagramPersistLayoutPart'); }
    public get diagramLayoutDefinitionParts() { return this._m<DiagramLayoutDefinitionPart>('DiagramLayoutDefinitionPart'); }
    public get diagramStyleParts() { return this._m<DiagramStylePart>('DiagramStylePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get customXmlParts() { return this._m<CustomXmlPart>('CustomXmlPart'); }
    public get webExtensionParts() { return this._m<WebExtensionPart>('WebExtensionPart'); }

}
