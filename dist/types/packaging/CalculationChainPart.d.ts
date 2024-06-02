import { CalculationChain } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class CalculationChainPart extends OxmlPart<CalculationChain> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof CalculationChain;
    get calcChain(): CalculationChain | undefined;
    set calcChain(root: CalculationChain | undefined);
}
