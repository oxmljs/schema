import { ThemeOverride } from '../schema/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class ThemeOverridePart extends OxmlPart<ThemeOverride> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ThemeOverride;
    get themeoverride(): ThemeOverride | undefined;
    set themeoverride(root: ThemeOverride | undefined);
    get imageParts(): ImagePart[];
}
