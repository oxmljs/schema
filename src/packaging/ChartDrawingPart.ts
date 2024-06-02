import { UserShapes } from '../schema/Drawing/Charts';
import { OxmlPart } from '../framework/OxmlPart';
import { ChartPart } from './ChartPart';
import { ExtendedChartPart } from './ExtendedChartPart';
import { ImagePart } from './ImagePart';

export class ChartDrawingPart extends OxmlPart<UserShapes> {

    public static override _N = 'ChartDrawingPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartUserShapes';
    public static override _C = 'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml';
    public static _P = '../drawings';
    public static _T = 'drawing';
    public static override _E = UserShapes;

    public get drawing() { return this._r; }
    public set drawing(root: UserShapes | undefined) { this._r = root; }

    public get chartPart() { return this._f<ChartPart>('ChartPart'); }
    public get extendedChartPart() { return this._f<ExtendedChartPart>('ExtendedChartPart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
