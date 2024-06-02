import { Drawing } from '../schema/Office/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class DiagramPersistLayoutPart extends OxmlPart<Drawing> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Drawing;
    get drawing(): Drawing | undefined;
    set drawing(root: Drawing | undefined);
    get imageParts(): ImagePart[];
}
