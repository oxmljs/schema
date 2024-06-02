import { CommentList } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
export declare class SlideCommentsPart extends OxmlPart<CommentList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof CommentList;
    get comment(): CommentList | undefined;
    set comment(root: CommentList | undefined);
}
