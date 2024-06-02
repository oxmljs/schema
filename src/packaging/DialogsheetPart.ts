import { DialogSheet } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';

export class DialogsheetPart extends OxmlPart<DialogSheet> {

    public static override _N = 'DialogsheetPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml';
    public static _P = 'dialogsheets';
    public static _T = 'sheet';
    public static override _E = DialogSheet;

    public get sheet() { return this._r; }
    public set sheet(root: DialogSheet | undefined) { this._r = root; }

    public get spreadsheetPrinterSettingsParts() { return this._m<SpreadsheetPrinterSettingsPart>('SpreadsheetPrinterSettingsPart'); }
    public get drawingsPart() { return this._f<DrawingsPart>('DrawingsPart'); }
    public get vmlDrawingParts() { return this._m<VmlDrawingPart>('VmlDrawingPart'); }
    public get embeddedObjectParts() { return this._m<EmbeddedObjectPart>('EmbeddedObjectPart'); }

}
