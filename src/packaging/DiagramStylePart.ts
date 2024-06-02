import { StyleDefinition } from '../schema/Drawing/Diagrams';
import { OxmlPart } from '../framework/OxmlPart';

export class DiagramStylePart extends OxmlPart<StyleDefinition> {

    public static override _N = 'DiagramStylePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramQuickStyle';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml';
    public static _P = '../graphics';
    public static _T = 'quickStyle';
    public static override _E = StyleDefinition;

    public get quickStyle() { return this._r; }
    public set quickStyle(root: StyleDefinition | undefined) { this._r = root; }


}
