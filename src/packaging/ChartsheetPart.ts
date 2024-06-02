import { Chartsheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { ImagePart } from './ImagePart';

export class ChartsheetPart extends OxmlPart<Chartsheet> {

    public static override _N = 'ChartsheetPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml';
    public static _P = 'chartsheets';
    public static _T = 'sheet';
    public static override _E = Chartsheet;

    public get sheet() { return this._r; }
    public set sheet(root: Chartsheet | undefined) { this._r = root; }

    public get spreadsheetPrinterSettingsParts() { return this._m<SpreadsheetPrinterSettingsPart>('SpreadsheetPrinterSettingsPart'); }
    public get drawingsPart() { return this._f<DrawingsPart>('DrawingsPart'); }
    public get vmlDrawingParts() { return this._m<VmlDrawingPart>('VmlDrawingPart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
