import { SlicerCacheDefinition } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';
export declare class SlicerCachePart extends OxmlPart<SlicerCacheDefinition> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SlicerCacheDefinition;
    get slicerCache(): SlicerCacheDefinition | undefined;
    set slicerCache(root: SlicerCacheDefinition | undefined);
}
