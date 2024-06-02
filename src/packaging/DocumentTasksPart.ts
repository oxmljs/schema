import { Tasks } from '../schema/Office2021/DocumentTasks';
import { OxmlPart } from '../framework/OxmlPart';

export class DocumentTasksPart extends OxmlPart<Tasks> {

    public static override _N = 'DocumentTasksPart';
    public static override _R = 'http://schemas.microsoft.com/office/2019/05/relationships/documenttasks';
    public static override _C = 'application/vnd.ms-office.documenttasks+xml';
    public static _P = '.';
    public static _T = 'tasks';
    public static override _E = Tasks;

    public get tasks() { return this._r; }
    public set tasks(root: Tasks | undefined) { this._r = root; }


}
