import { Properties } from '../schema/ExtendedProperties';
import { OxmlPart } from '../framework/OxmlPart';

export class ExtendedFilePropertiesPart extends OxmlPart<Properties> {

    public static override _N = 'ExtendedFilePropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties';
    public static override _C = 'application/vnd.openxmlformats-officedocument.extended-properties+xml';
    public static _P = 'docProps';
    public static _T = 'app';
    public static override _E = Properties;

    public get app() { return this._r; }
    public set app(root: Properties | undefined) { this._r = root; }


}
