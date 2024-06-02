import { Properties } from '../schema/CustomProperties';
import { OxmlPart } from '../framework/OxmlPart';

export class CustomFilePropertiesPart extends OxmlPart<Properties> {

    public static override _N = 'CustomFilePropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties';
    public static override _C = 'application/vnd.openxmlformats-officedocument.custom-properties+xml';
    public static _P = 'docProps';
    public static _T = 'custom';
    public static override _E = Properties;

    public get custom() { return this._r; }
    public set custom(root: Properties | undefined) { this._r = root; }


}
