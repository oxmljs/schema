import { CommentList } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';

export class SlideCommentsPart extends OxmlPart<CommentList> {

    public static override _N = 'SlideCommentsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments';
    public static override _C = 'application/vnd.openxmlformats-officedocument.presentationml.comments+xml';
    public static _P = '../comments';
    public static _T = 'comment';
    public static override _E = CommentList;

    public get comment() { return this._r; }
    public set comment(root: CommentList | undefined) { this._r = root; }


}
