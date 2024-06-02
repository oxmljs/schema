import { CommentsExtensible } from '../schema/Office2021/Word/CommentsExt';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WordCommentsExtensiblePart extends OxmlPart<CommentsExtensible> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof CommentsExtensible;
    get commentsExtensible(): CommentsExtensible | undefined;
    set commentsExtensible(root: CommentsExtensible | undefined);
}
