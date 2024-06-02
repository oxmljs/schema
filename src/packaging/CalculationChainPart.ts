import { CalculationChain } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class CalculationChainPart extends OxmlPart<CalculationChain> {

    public static override _N = 'CalculationChainPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml';
    public static _P = '.';
    public static _T = 'calcChain';
    public static override _E = CalculationChain;

    public get calcChain() { return this._r; }
    public set calcChain(root: CalculationChain | undefined) { this._r = root; }


}
