import { ColorStyle } from '../schema/Office2013/Drawing/ChartStyle';
import { OxmlPart } from '../framework/OxmlPart';
export declare class ChartColorStylePart extends OxmlPart<ColorStyle> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ColorStyle;
    get colors(): ColorStyle | undefined;
    set colors(root: ColorStyle | undefined);
}
