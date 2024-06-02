import { CommentAuthorList } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';

export class CommentAuthorsPart extends OxmlPart<CommentAuthorList> {

    public static override _N = 'CommentAuthorsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/commentAuthors';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml';
    public static _P = '.';
    public static _T = 'commentAuthors';
    public static override _E = CommentAuthorList;

    public get commentAuthors() { return this._r; }
    public set commentAuthors(root: CommentAuthorList | undefined) { this._r = root; }


}
