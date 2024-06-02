import { People } from '../schema/Office2013/Word';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WordprocessingPeoplePart extends OxmlPart<People> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof People;
    get people(): People | undefined;
    set people(root: People | undefined);
}
