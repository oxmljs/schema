import { Theme } from '../schema/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class ThemePart extends OxmlPart<Theme> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Theme;
    get theme(): Theme | undefined;
    set theme(root: Theme | undefined);
    get imageParts(): ImagePart[];
}
