import { CommentList } from '../schema/Office2021/PowerPoint/Comment';
import { OxmlPart } from '../framework/OxmlPart';
export declare class PowerPointCommentPart extends OxmlPart<CommentList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof CommentList;
    get modernComment(): CommentList | undefined;
    set modernComment(root: CommentList | undefined);
}
