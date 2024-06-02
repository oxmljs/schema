import { ThreadedComments } from '../schema/Office2019/Excel/ThreadedComments';
import { OxmlPart } from '../framework/OxmlPart';

export class WorksheetThreadedCommentsPart extends OxmlPart<ThreadedComments> {

    public static override _N = 'WorksheetThreadedCommentsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/10/relationships/threadedComment';
    public static override _C = 'application/vnd.ms-excel.threadedcomments+xml';
    public static _P = '../threadedcomments';
    public static _T = 'threadedcomment';
    public static override _E = ThreadedComments;

    public get threadedcomment() { return this._r; }
    public set threadedcomment(root: ThreadedComments | undefined) { this._r = root; }


}
