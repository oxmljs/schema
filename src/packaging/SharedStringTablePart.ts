import { SharedStringTable } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class SharedStringTablePart extends OxmlPart<SharedStringTable> {

    public static override _N = 'SharedStringTablePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml';
    public static _P = '.';
    public static _T = 'sharedStrings';
    public static override _E = SharedStringTable;

    public get sharedStrings() { return this._r; }
    public set sharedStrings(root: SharedStringTable | undefined) { this._r = root; }


}
