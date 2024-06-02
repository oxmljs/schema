import { Connections } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';

export class ConnectionsPart extends OxmlPart<Connections> {

    public static override _N = 'ConnectionsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections';
    public static override _C = 'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml';
    public static _P = '.';
    public static _T = 'connections';
    public static override _E = Connections;

    public get connections() { return this._r; }
    public set connections(root: Connections | undefined) { this._r = root; }


}
