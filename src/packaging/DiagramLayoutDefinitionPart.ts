import { LayoutDefinition } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class DiagramLayoutDefinitionPart extends OxmlPart<LayoutDefinition> {

    public static override _N = 'DiagramLayoutDefinitionPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramLayout';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml';
    public static _P = '../graphics';
    public static _T = 'layout';
    public static override _E = LayoutDefinition;

    public get layout() { return this._r; }
    public set layout(root: LayoutDefinition | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
