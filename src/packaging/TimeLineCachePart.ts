import { TimelineCacheDefinition } from '../schema/Office2013/Excel';
import { OxmlPart } from '../framework/OxmlPart';

export class TimeLineCachePart extends OxmlPart<TimelineCacheDefinition> {

    public static override _N = 'TimeLineCachePart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/timelineCache';
    public static override _C = 'application/vnd.ms-excel.timelineCache+xml';
    public static _P = 'timelineCaches';
    public static _T = 'timelineCache';
    public static override _E = TimelineCacheDefinition;

    public get timelineCache() { return this._r; }
    public set timelineCache(root: TimelineCacheDefinition | undefined) { this._r = root; }


}
