import { ChartSpace } from '../schema/Office2016/Drawing/ChartDrawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ChartDrawingPart } from './ChartDrawingPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';
import { ThemeOverridePart } from './ThemeOverridePart';
import { ChartStylePart } from './ChartStylePart';
import { ChartColorStylePart } from './ChartColorStylePart';

export class ExtendedChartPart extends OxmlPart<ChartSpace> {

    public static override _N = 'ExtendedChartPart';
    public static override _R = 'http://schemas.microsoft.com/office/2014/relationships/chartEx';
    public static override _C = 'application/vnd.ms-office.chartex+xml';
    public static _P = 'extendedCharts';
    public static _T = 'chart';
    public static override _E = ChartSpace;

    public get chart() { return this._r; }
    public set chart(root: ChartSpace | undefined) { this._r = root; }

    public get chartDrawingPart() { return this._f<ChartDrawingPart>('ChartDrawingPart'); }
    public get embeddedPackagePart() { return this._f<EmbeddedPackagePart>('EmbeddedPackagePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }
    public get themeOverridePart() { return this._f<ThemeOverridePart>('ThemeOverridePart'); }
    public get chartStyleParts() { return this._m<ChartStylePart>('ChartStylePart'); }
    public get chartColorStyleParts() { return this._m<ChartColorStylePart>('ChartColorStylePart'); }

}
