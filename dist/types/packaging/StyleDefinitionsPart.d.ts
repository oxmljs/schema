import { Styles } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
export declare class StyleDefinitionsPart extends OxmlPart<Styles> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Styles;
    get styles(): Styles | undefined;
    set styles(root: Styles | undefined);
}
