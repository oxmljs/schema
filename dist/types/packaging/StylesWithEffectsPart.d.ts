import { Styles } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
export declare class StylesWithEffectsPart extends OxmlPart<Styles> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Styles;
    get stylesWithEffects(): Styles | undefined;
    set stylesWithEffects(root: Styles | undefined);
}
