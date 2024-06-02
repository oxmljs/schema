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
export declare class MacroSheetPart extends OxmlPart<Macrosheet> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Macrosheet;
    get sheet(): Macrosheet | undefined;
    set sheet(root: Macrosheet | undefined);
    get spreadsheetPrinterSettingsParts(): SpreadsheetPrinterSettingsPart[];
    get drawingsPart(): DrawingsPart | undefined;
    get vmlDrawingParts(): VmlDrawingPart[];
    get worksheetCommentsPart(): WorksheetCommentsPart | undefined;
    get customPropertyParts(): CustomPropertyPart[];
    get embeddedObjectParts(): EmbeddedObjectPart[];
    get embeddedPackageParts(): EmbeddedPackagePart[];
    get imageParts(): ImagePart[];
}
