import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class ImagePart extends OxmlPart {

    public static override _N = 'ImagePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image';
    public static override _C = '*';
    public static _P = '../media';
    public static _T = 'image';
    public get image() { return this._r; }
    public set image(root: OxmlElement | undefined) { this._r = root; }


}
