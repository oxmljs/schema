import { Numbering } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class NumberingDefinitionsPart extends OxmlPart<Numbering> {

    public static override _N = 'NumberingDefinitionsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml';
    public static _P = '.';
    public static _T = 'numbering';
    public static override _E = Numbering;

    public get numbering() { return this._r; }
    public set numbering(root: Numbering | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
