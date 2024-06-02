import { Timelines } from '../schema/Office2013/Excel';
import { OxmlPart } from '../framework/OxmlPart';
export declare class TimeLinePart extends OxmlPart<Timelines> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Timelines;
    get timeline(): Timelines | undefined;
    set timeline(root: Timelines | undefined);
}
