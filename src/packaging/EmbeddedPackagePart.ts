import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class EmbeddedPackagePart extends OxmlPart {

    public static override _N = 'EmbeddedPackagePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/package';
    public static override _C = '*';
    public static _P = 'embeddings';
    public static _T = 'package';
    public get package() { return this._r; }
    public set package(root: OxmlElement | undefined) { this._r = root; }


}
