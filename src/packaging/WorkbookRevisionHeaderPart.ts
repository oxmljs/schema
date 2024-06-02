import { Headers } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { WorkbookRevisionLogPart } from './WorkbookRevisionLogPart';

export class WorkbookRevisionHeaderPart extends OxmlPart<Headers> {

    public static override _N = 'WorkbookRevisionHeaderPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionHeaders';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml';
    public static _P = 'revisions';
    public static _T = 'revisionHeaders';
    public static override _E = Headers;

    public get revisionHeaders() { return this._r; }
    public set revisionHeaders(root: Headers | undefined) { this._r = root; }

    public get workbookRevisionLogParts() { return this._m<WorkbookRevisionLogPart>('WorkbookRevisionLogPart'); }

}
