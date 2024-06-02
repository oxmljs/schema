import { AuthorList } from '../schema/Office2021/PowerPoint/Comment';
import { OxmlPart } from '../framework/OxmlPart';
export declare class PowerPointAuthorsPart extends OxmlPart<AuthorList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof AuthorList;
    get authors(): AuthorList | undefined;
    set authors(root: AuthorList | undefined);
}
