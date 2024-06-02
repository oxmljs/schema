import { Revisions } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class WorkbookRevisionLogPart extends OxmlPart<Revisions> {

    public static override _N = 'WorkbookRevisionLogPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionLog';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml';
    public static _P = '.';
    public static _T = 'revisionLog';
    public static override _E = Revisions;

    public get revisionLog() { return this._r; }
    public set revisionLog(root: Revisions | undefined) { this._r = root; }


}
