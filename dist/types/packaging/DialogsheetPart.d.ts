import { DialogSheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';
export declare class DialogsheetPart extends OxmlPart<DialogSheet> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof DialogSheet;
    get sheet(): DialogSheet | undefined;
    set sheet(root: DialogSheet | undefined);
    get spreadsheetPrinterSettingsParts(): SpreadsheetPrinterSettingsPart[];
    get drawingsPart(): DrawingsPart | undefined;
    get vmlDrawingParts(): VmlDrawingPart[];
    get embeddedObjectParts(): EmbeddedObjectPart[];
}
