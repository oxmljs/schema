import { Numbering } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class NumberingDefinitionsPart extends OxmlPart<Numbering> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Numbering;
    get numbering(): Numbering | undefined;
    set numbering(root: Numbering | undefined);
    get imageParts(): ImagePart[];
}
