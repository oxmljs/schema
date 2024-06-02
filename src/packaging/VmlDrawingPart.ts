import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { ImagePart } from './ImagePart';
import { LegacyDiagramTextPart } from './LegacyDiagramTextPart';

export class VmlDrawingPart extends OxmlPart {

    public static override _N = 'VmlDrawingPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing';
    public static override _C = 'application/vnd.openxmlformats-officedocument.vmlDrawing';
    public static _P = '../drawings';
    public static _T = 'vmldrawing';
    public get vmldrawing() { return this._r; }
    public set vmldrawing(root: OxmlElement | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get legacyDiagramTextParts() { return this._m<LegacyDiagramTextPart>('LegacyDiagramTextPart'); }

}
