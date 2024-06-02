import { Comments } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorksheetCommentsPart extends OxmlPart<Comments> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Comments;
    get comments(): Comments | undefined;
    set comments(root: Comments | undefined);
}
