import { CommentList } from '../schema/Office2021/PowerPoint/Comment';
import { OxmlPart } from '../framework/OxmlPart';

export class PowerPointCommentPart extends OxmlPart<CommentList> {

    public static override _N = 'PowerPointCommentPart';
    public static override _R = 'http://schemas.microsoft.com/office/2018/10/relationships/comments';
    public static override _C = 'application/vnd.ms-powerpoint.comments+xml';
    public static _P = '../comments';
    public static _T = 'modernComment';
    public static override _E = CommentList;

    public get modernComment() { return this._r; }
    public set modernComment(root: CommentList | undefined) { this._r = root; }


}
