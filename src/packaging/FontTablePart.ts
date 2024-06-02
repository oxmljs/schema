import { Fonts } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { FontPart } from './FontPart';

export class FontTablePart extends OxmlPart<Fonts> {

    public static override _N = 'FontTablePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml';
    public static _P = '.';
    public static _T = 'fontTable';
    public static override _E = Fonts;

    public get fontTable() { return this._r; }
    public set fontTable(root: Fonts | undefined) { this._r = root; }

    public get fontParts() { return this._m<FontPart>('FontPart'); }

}
