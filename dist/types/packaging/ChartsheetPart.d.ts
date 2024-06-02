import { Chartsheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { ImagePart } from './ImagePart';
export declare class ChartsheetPart extends OxmlPart<Chartsheet> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Chartsheet;
    get sheet(): Chartsheet | undefined;
    set sheet(root: Chartsheet | undefined);
    get spreadsheetPrinterSettingsParts(): SpreadsheetPrinterSettingsPart[];
    get drawingsPart(): DrawingsPart | undefined;
    get vmlDrawingParts(): VmlDrawingPart[];
    get imageParts(): ImagePart[];
}
