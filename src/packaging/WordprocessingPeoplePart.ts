import { People } from '../schema/Office2013/Word';
import { OxmlPart } from '../framework/OxmlPart';

export class WordprocessingPeoplePart extends OxmlPart<People> {

    public static override _N = 'WordprocessingPeoplePart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/people';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.people+xml';
    public static _P = '.';
    public static _T = 'people';
    public static override _E = People;

    public get people() { return this._r; }
    public set people(root: People | undefined) { this._r = root; }


}
