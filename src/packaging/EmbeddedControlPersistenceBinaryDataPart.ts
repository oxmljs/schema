import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class EmbeddedControlPersistenceBinaryDataPart extends OxmlPart {

    public static override _N = 'EmbeddedControlPersistenceBinaryDataPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/activeXControlBinary';
    public static override _C = '*';
    public static _P = '.';
    public static _T = 'ActiveXControl';
    public get ActiveXControl() { return this._r; }
    public set ActiveXControl(root: OxmlElement | undefined) { this._r = root; }


}
