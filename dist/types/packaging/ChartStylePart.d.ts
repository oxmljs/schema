import { ChartStyle } from '../schema/Office2013/Drawing/ChartStyle';
import { OxmlPart } from '../framework/OxmlPart';
export declare class ChartStylePart extends OxmlPart<ChartStyle> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ChartStyle;
    get style(): ChartStyle | undefined;
    set style(root: ChartStyle | undefined);
}
