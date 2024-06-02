import { Macrosheet } from '../schema/Office/Excel';
import { OxmlPart } from '../framework/OxmlPart';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { WorksheetCommentsPart } from './WorksheetCommentsPart';
import { CustomPropertyPart } from './CustomPropertyPart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';

export class MacroSheetPart extends OxmlPart<Macrosheet> {

    public static override _N = 'MacroSheetPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet';
    public static override _C = 'application/vnd.ms-excel.macrosheet+xml';
    public static _P = 'macrosheets';
    public static _T = 'sheet';
    public static override _E = Macrosheet;

    public get sheet() { return this._r; }
    public set sheet(root: Macrosheet | undefined) { this._r = root; }

    public get spreadsheetPrinterSettingsParts() { return this._m<SpreadsheetPrinterSettingsPart>('SpreadsheetPrinterSettingsPart'); }
    public get drawingsPart() { return this._f<DrawingsPart>('DrawingsPart'); }
    public get vmlDrawingParts() { return this._m<VmlDrawingPart>('VmlDrawingPart'); }
    public get worksheetCommentsPart() { return this._f<WorksheetCommentsPart>('WorksheetCommentsPart'); }
    public get customPropertyParts() { return this._m<CustomPropertyPart>('CustomPropertyPart'); }
    public get embeddedObjectParts() { return this._m<EmbeddedObjectPart>('EmbeddedObjectPart'); }
    public get embeddedPackageParts() { return this._m<EmbeddedPackagePart>('EmbeddedPackagePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
