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
export declare class InternationalMacroSheetPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get intlsheet(): OxmlElement | undefined;
    set intlsheet(root: OxmlElement | undefined);
    get spreadsheetPrinterSettingsParts(): SpreadsheetPrinterSettingsPart[];
    get drawingsPart(): DrawingsPart | undefined;
    get vmlDrawingParts(): VmlDrawingPart[];
    get worksheetCommentsPart(): WorksheetCommentsPart | undefined;
    get customPropertyParts(): CustomPropertyPart[];
    get embeddedObjectParts(): EmbeddedObjectPart[];
    get embeddedPackageParts(): EmbeddedPackagePart[];
    get imageParts(): ImagePart[];
}
