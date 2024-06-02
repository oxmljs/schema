import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class ThumbnailPart extends OxmlPart {

    public static override _N = 'ThumbnailPart';
    public static override _R = 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail';
    public static override _C = '*';
    public static _P = 'docProps';
    public static _T = 'thumbnail';
    public get thumbnail() { return this._r; }
    public set thumbnail(root: OxmlElement | undefined) { this._r = root; }


}
