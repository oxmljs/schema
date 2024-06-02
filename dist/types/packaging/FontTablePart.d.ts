import { Fonts } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { FontPart } from './FontPart';
export declare class FontTablePart extends OxmlPart<Fonts> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Fonts;
    get fontTable(): Fonts | undefined;
    set fontTable(root: Fonts | undefined);
    get fontParts(): FontPart[];
}
