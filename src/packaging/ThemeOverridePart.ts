import { ThemeOverride } from '../schema/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class ThemeOverridePart extends OxmlPart<ThemeOverride> {

    public static override _N = 'ThemeOverridePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/themeOverride';
    public static override _C = 'application/vnd.openxmlformats-officedocument.themeOverride+xml';
    public static _P = 'theme';
    public static _T = 'themeoverride';
    public static override _E = ThemeOverride;

    public get themeoverride() { return this._r; }
    public set themeoverride(root: ThemeOverride | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
