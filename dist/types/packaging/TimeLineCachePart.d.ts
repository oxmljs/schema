import { TimelineCacheDefinition } from '../schema/Office2013/Excel';
import { OxmlPart } from '../framework/OxmlPart';
export declare class TimeLineCachePart extends OxmlPart<TimelineCacheDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof TimelineCacheDefinition;
    get timelineCache(): TimelineCacheDefinition | undefined;
    set timelineCache(root: TimelineCacheDefinition | undefined);
}
