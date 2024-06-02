import { Connections } from '../schema/Spreadsheet';
import { OxmlPart } from '../framework/OxmlPart';
export declare class ConnectionsPart extends OxmlPart<Connections> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Connections;
    get connections(): Connections | undefined;
    set connections(root: Connections | undefined);
}
