import { VolatileTypes } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class VolatileDependenciesPart extends OxmlPart<VolatileTypes> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof VolatileTypes;
    get volatileDependencies(): VolatileTypes | undefined;
    set volatileDependencies(root: VolatileTypes | undefined);
}
