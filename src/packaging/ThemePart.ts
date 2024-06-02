import { Theme } from '../schema/Drawing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class ThemePart extends OxmlPart<Theme> {

    public static override _N = 'ThemePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme';
    public static override _C = 'application/vnd.openxmlformats-officedocument.theme+xml';
    public static _P = 'theme';
    public static _T = 'theme';
    public static override _E = Theme;

    public get theme() { return this._r; }
    public set theme(root: Theme | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
