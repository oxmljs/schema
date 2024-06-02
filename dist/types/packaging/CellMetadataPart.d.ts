import { Metadata } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class CellMetadataPart extends OxmlPart<Metadata> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Metadata;
    get metadata(): Metadata | undefined;
    set metadata(root: Metadata | undefined);
}
