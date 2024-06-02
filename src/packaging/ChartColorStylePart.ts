import { ColorStyle } from '../schema/Office2013/Drawing/ChartStyle';
import { OxmlPart } from '../framework/OxmlPart';

export class ChartColorStylePart extends OxmlPart<ColorStyle> {

    public static override _N = 'ChartColorStylePart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/chartColorStyle';
    public static override _C = 'application/vnd.ms-office.chartcolorstyle+xml';
    public static _P = '.';
    public static _T = 'colors';
    public static override _E = ColorStyle;

    public get colors() { return this._r; }
    public set colors(root: ColorStyle | undefined) { this._r = root; }


}
