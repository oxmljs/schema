import { PersonList } from '../schema/Office2019/Excel/ThreadedComments';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorkbookPersonPart extends OxmlPart<PersonList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof PersonList;
    get person(): PersonList | undefined;
    set person(root: PersonList | undefined);
}
