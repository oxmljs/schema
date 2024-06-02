import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { ImagePart } from './ImagePart';
import { LegacyDiagramTextPart } from './LegacyDiagramTextPart';
export declare class VmlDrawingPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get vmldrawing(): OxmlElement | undefined;
    set vmldrawing(root: OxmlElement | undefined);
    get imageParts(): ImagePart[];
    get legacyDiagramTextParts(): LegacyDiagramTextPart[];
}
