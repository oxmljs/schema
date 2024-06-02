import { PersonList } from '../schema/Office2019/Excel/ThreadedComments';
import { OxmlPart } from '../framework/OxmlPart';

export class WorkbookPersonPart extends OxmlPart<PersonList> {

    public static override _N = 'WorkbookPersonPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/10/relationships/person';
    public static override _C = 'application/vnd.ms-excel.person+xml';
    public static _P = 'persons';
    public static _T = 'person';
    public static override _E = PersonList;

    public get person() { return this._r; }
    public set person(root: PersonList | undefined) { this._r = root; }


}
