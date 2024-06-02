import { SingleXmlCells } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class SingleCellTablePart extends OxmlPart<SingleXmlCells> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SingleXmlCells;
    get tableSingleCells(): SingleXmlCells | undefined;
    set tableSingleCells(root: SingleXmlCells | undefined);
}
