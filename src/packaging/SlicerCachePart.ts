import { SlicerCacheDefinition } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';

export class SlicerCachePart extends OxmlPart<SlicerCacheDefinition> {

    public static override _N = 'SlicerCachePart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/slicerCache';
    public static override _C = 'application/vnd.ms-excel.slicerCache+xml';
    public static _P = 'slicerCaches';
    public static _T = 'slicerCache';
    public static override _E = SlicerCacheDefinition;

    public get slicerCache() { return this._r; }
    public set slicerCache(root: SlicerCacheDefinition | undefined) { this._r = root; }


}
