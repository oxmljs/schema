import { ThreadedComments } from '../schema/Office2019/Excel/ThreadedComments';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorksheetThreadedCommentsPart extends OxmlPart<ThreadedComments> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ThreadedComments;
    get threadedcomment(): ThreadedComments | undefined;
    set threadedcomment(root: ThreadedComments | undefined);
}
