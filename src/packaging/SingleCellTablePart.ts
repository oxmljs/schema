import { SingleXmlCells } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class SingleCellTablePart extends OxmlPart<SingleXmlCells> {

    public static override _N = 'SingleCellTablePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableSingleCells';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml';
    public static _P = '../tables';
    public static _T = 'tableSingleCells';
    public static override _E = SingleXmlCells;

    public get tableSingleCells() { return this._r; }
    public set tableSingleCells(root: SingleXmlCells | undefined) { this._r = root; }


}
