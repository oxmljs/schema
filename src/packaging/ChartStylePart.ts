import { ChartStyle } from '../schema/Office2013/Drawing/ChartStyle';
import { OxmlPart } from '../framework/OxmlPart';

export class ChartStylePart extends OxmlPart<ChartStyle> {

    public static override _N = 'ChartStylePart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/chartStyle';
    public static override _C = 'application/vnd.ms-office.chartstyle+xml';
    public static _P = '.';
    public static _T = 'style';
    public static override _E = ChartStyle;

    public get style() { return this._r; }
    public set style(root: ChartStyle | undefined) { this._r = root; }


}
