import { CustomUI } from '../schema/Office/CustomUI';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class RibbonExtensibilityPart extends OxmlPart<CustomUI> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof CustomUI;
    get customUI(): CustomUI | undefined;
    set customUI(root: CustomUI | undefined);
    get imageParts(): ImagePart[];
}
