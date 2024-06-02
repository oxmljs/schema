import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class AlternativeFormatImportPart extends OxmlPart {

    public static override _N = 'AlternativeFormatImportPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk';
    public static override _C = '*';
    public static _P = '.';
    public static _T = 'afchunk';
    public get afchunk() { return this._r; }
    public set afchunk(root: OxmlElement | undefined) { this._r = root; }


}
