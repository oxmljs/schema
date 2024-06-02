import { Drawing } from '../schema/Office/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class DiagramPersistLayoutPart extends OxmlPart<Drawing> {

    public static override _N = 'DiagramPersistLayoutPart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/diagramDrawing';
    public static override _C = 'application/vnd.ms-office.drawingml.diagramDrawing+xml';
    public static _P = '../diagrams';
    public static _T = 'drawing';
    public static override _E = Drawing;

    public get drawing() { return this._r; }
    public set drawing(root: Drawing | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
