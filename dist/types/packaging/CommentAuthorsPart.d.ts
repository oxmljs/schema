import { CommentAuthorList } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
export declare class CommentAuthorsPart extends OxmlPart<CommentAuthorList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof CommentAuthorList;
    get commentAuthors(): CommentAuthorList | undefined;
    set commentAuthors(root: CommentAuthorList | undefined);
}
