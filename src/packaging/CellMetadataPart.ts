import { Metadata } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class CellMetadataPart extends OxmlPart<Metadata> {

    public static override _N = 'CellMetadataPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml';
    public static _P = '.';
    public static _T = 'metadata';
    public static override _E = Metadata;

    public get metadata() { return this._r; }
    public set metadata(root: Metadata | undefined) { this._r = root; }


}
