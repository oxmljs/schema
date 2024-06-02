import { DataModelRoot } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
import { SlidePart } from './SlidePart';
import { WorksheetPart } from './WorksheetPart';

export class DiagramDataPart extends OxmlPart<DataModelRoot> {

    public static override _N = 'DiagramDataPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramData';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml';
    public static _P = '../graphics';
    public static _T = 'data';
    public static override _E = DataModelRoot;

    public get data() { return this._r; }
    public set data(root: DataModelRoot | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get slideParts() { return this._m<SlidePart>('SlidePart'); }
    public get worksheetParts() { return this._m<WorksheetPart>('WorksheetPart'); }

}
