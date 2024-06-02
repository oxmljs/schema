import { Timelines } from '../schema/Office2013/Excel';
import { OxmlPart } from '../framework/OxmlPart';

export class TimeLinePart extends OxmlPart<Timelines> {

    public static override _N = 'TimeLinePart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/timeline';
    public static override _C = 'application/vnd.ms-excel.timeline+xml';
    public static _P = '../timelines';
    public static _T = 'timeline';
    public static override _E = Timelines;

    public get timeline() { return this._r; }
    public set timeline(root: Timelines | undefined) { this._r = root; }


}
