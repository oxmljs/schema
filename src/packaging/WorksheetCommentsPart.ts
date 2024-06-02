import { Comments } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class WorksheetCommentsPart extends OxmlPart<Comments> {

    public static override _N = 'WorksheetCommentsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml';
    public static _P = '..';
    public static _T = 'comments';
    public static override _E = Comments;

    public get comments() { return this._r; }
    public set comments(root: Comments | undefined) { this._r = root; }


}
