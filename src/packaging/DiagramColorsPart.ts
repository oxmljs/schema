import { ColorsDefinition } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';

export class DiagramColorsPart extends OxmlPart<ColorsDefinition> {

    public static override _N = 'DiagramColorsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramColors';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml';
    public static _P = '../graphics';
    public static _T = 'colors';
    public static override _E = ColorsDefinition;

    public get colors() { return this._r; }
    public set colors(root: ColorsDefinition | undefined) { this._r = root; }


}
