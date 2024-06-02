import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { SpreadsheetPrinterSettingsPart } from './SpreadsheetPrinterSettingsPart';
import { DrawingsPart } from './DrawingsPart';
import { VmlDrawingPart } from './VmlDrawingPart';
import { WorksheetCommentsPart } from './WorksheetCommentsPart';
import { CustomPropertyPart } from './CustomPropertyPart';
import { EmbeddedObjectPart } from './EmbeddedObjectPart';
import { EmbeddedPackagePart } from './EmbeddedPackagePart';
import { ImagePart } from './ImagePart';

export class InternationalMacroSheetPart extends OxmlPart {

    public static override _N = 'InternationalMacroSheetPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/xlIntlMacrosheet';
    public static override _C = 'application/vnd.ms-excel.intlmacrosheet+xml';
    public static _P = 'macrosheets';
    public static _T = 'intlsheet';
    public get intlsheet() { return this._r; }
    public set intlsheet(root: OxmlElement | undefined) { this._r = root; }

    public get spreadsheetPrinterSettingsParts() { return this._m<SpreadsheetPrinterSettingsPart>('SpreadsheetPrinterSettingsPart'); }
    public get drawingsPart() { return this._f<DrawingsPart>('DrawingsPart'); }
    public get vmlDrawingParts() { return this._m<VmlDrawingPart>('VmlDrawingPart'); }
    public get worksheetCommentsPart() { return this._f<WorksheetCommentsPart>('WorksheetCommentsPart'); }
    public get customPropertyParts() { return this._m<CustomPropertyPart>('CustomPropertyPart'); }
    public get embeddedObjectParts() { return this._m<EmbeddedObjectPart>('EmbeddedObjectPart'); }
    public get embeddedPackageParts() { return this._m<EmbeddedPackagePart>('EmbeddedPackagePart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
