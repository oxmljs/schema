import { VolatileTypes } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class VolatileDependenciesPart extends OxmlPart<VolatileTypes> {

    public static override _N = 'VolatileDependenciesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/volatileDependencies';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml';
    public static _P = '.';
    public static _T = 'volatileDependencies';
    public static override _E = VolatileTypes;

    public get volatileDependencies() { return this._r; }
    public set volatileDependencies(root: VolatileTypes | undefined) { this._r = root; }


}
