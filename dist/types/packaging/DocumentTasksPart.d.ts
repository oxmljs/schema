import { Tasks } from '../schema/Office2021/DocumentTasks';
import { OxmlPart } from '../framework/OxmlPart';
export declare class DocumentTasksPart extends OxmlPart<Tasks> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Tasks;
    get tasks(): Tasks | undefined;
    set tasks(root: Tasks | undefined);
}
