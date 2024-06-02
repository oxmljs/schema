import { WorksheetSortMap } from '../schema/Office/Excel';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WorksheetSortMapPart extends OxmlPart<WorksheetSortMap> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof WorksheetSortMap;
    get wsSortMap(): WorksheetSortMap | undefined;
    set wsSortMap(root: WorksheetSortMap | undefined);
}
