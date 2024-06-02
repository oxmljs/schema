import { AuthorList } from '../schema/Office2021/PowerPoint/Comment';
import { OxmlPart } from '../framework/OxmlPart';

export class PowerPointAuthorsPart extends OxmlPart<AuthorList> {

    public static override _N = 'PowerPointAuthorsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2018/10/relationships/authors';
    public static override _C = 'application/vnd.ms-powerpoint.authors+xml';
    public static _P = '.';
    public static _T = 'authors';
    public static override _E = AuthorList;

    public get authors() { return this._r; }
    public set authors(root: AuthorList | undefined) { this._r = root; }


}
