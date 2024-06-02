import { UserShapes } from '../schema/Drawing/Charts';
import { OxmlPart } from '../framework/OxmlPart';
import { ChartPart } from './ChartPart';
import { ExtendedChartPart } from './ExtendedChartPart';
import { ImagePart } from './ImagePart';
export declare class ChartDrawingPart extends OxmlPart<UserShapes> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof UserShapes;
    get drawing(): UserShapes | undefined;
    set drawing(root: UserShapes | undefined);
    get chartPart(): ChartPart | undefined;
    get extendedChartPart(): ExtendedChartPart | undefined;
    get imageParts(): ImagePart[];
}
