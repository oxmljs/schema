import { Headers } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { WorkbookRevisionLogPart } from './WorkbookRevisionLogPart';
export declare class WorkbookRevisionHeaderPart extends OxmlPart<Headers> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Headers;
    get revisionHeaders(): Headers | undefined;
    set revisionHeaders(root: Headers | undefined);
    get workbookRevisionLogParts(): WorkbookRevisionLogPart[];
}
