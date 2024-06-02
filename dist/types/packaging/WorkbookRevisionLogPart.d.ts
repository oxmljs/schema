import { Revisions } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorkbookRevisionLogPart extends OxmlPart<Revisions> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Revisions;
    get revisionLog(): Revisions | undefined;
    set revisionLog(root: Revisions | undefined);
}
