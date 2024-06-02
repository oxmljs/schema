import { CommentsExtensible } from '../schema/Office2021/Word/CommentsExt';
import { OxmlPart } from '../framework/OxmlPart';

export class WordCommentsExtensiblePart extends OxmlPart<CommentsExtensible> {

    public static override _N = 'WordCommentsExtensiblePart';
    public static override _R = 'http://schemas.microsoft.com/office/2018/08/relationships/commentsExtensible';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.commentsExtensible+xml';
    public static _P = '.';
    public static _T = 'commentsExtensible';
    public static override _E = CommentsExtensible;

    public get commentsExtensible() { return this._r; }
    public set commentsExtensible(root: CommentsExtensible | undefined) { this._r = root; }


}
