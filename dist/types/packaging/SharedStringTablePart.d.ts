import { SharedStringTable } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class SharedStringTablePart extends OxmlPart<SharedStringTable> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SharedStringTable;
    get sharedStrings(): SharedStringTable | undefined;
    set sharedStrings(root: SharedStringTable | undefined);
}
