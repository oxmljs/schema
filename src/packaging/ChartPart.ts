import { ChartSpace } from '../schema/Drawing/Charts';
import { OxmlPart } from '../framework/OxmlPart';
import { ChartDrawingPart } from './ChartDrawingPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';
import { ThemeOverridePart } from './ThemeOverridePart';
import { ChartStylePart } from './ChartStylePart';
import { ChartColorStylePart } from './ChartColorStylePart';

export class ChartPart extends OxmlPart<ChartSpace> {

    public static override _N = 'ChartPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawingml.chart+xml';
    public static _P = 'charts';
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
