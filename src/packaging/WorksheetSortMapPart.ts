import { WorksheetSortMap } from '../schema/Office/Excel';
import { OxmlPart } from '../framework/OxmlPart';

export class WorksheetSortMapPart extends OxmlPart<WorksheetSortMap> {

    public static override _N = 'WorksheetSortMapPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/wsSortMap';
    public static override _C = 'application/vnd.ms-excel.wsSortMap+xml';
    public static _P = '.';
    public static _T = 'wsSortMap';
    public static override _E = WorksheetSortMap;

    public get wsSortMap() { return this._r; }
    public set wsSortMap(root: WorksheetSortMap | undefined) { this._r = root; }


}
