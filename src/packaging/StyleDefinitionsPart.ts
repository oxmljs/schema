import { Styles } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';

export class StyleDefinitionsPart extends OxmlPart<Styles> {

    public static override _N = 'StyleDefinitionsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml';
    public static _P = '.';
    public static _T = 'styles';
    public static override _E = Styles;

    public get styles() { return this._r; }
    public set styles(root: Styles | undefined) { this._r = root; }


}
