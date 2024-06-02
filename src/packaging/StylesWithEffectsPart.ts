import { Styles } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';

export class StylesWithEffectsPart extends OxmlPart<Styles> {

    public static override _N = 'StylesWithEffectsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects';
    public static override _C = 'application/vnd.ms-word.stylesWithEffects+xml';
    public static _P = '.';
    public static _T = 'stylesWithEffects';
    public static override _E = Styles;

    public get stylesWithEffects() { return this._r; }
    public set stylesWithEffects(root: Styles | undefined) { this._r = root; }


}
