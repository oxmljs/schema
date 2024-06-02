import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { EmbeddedControlPersistenceBinaryDataPart } from './EmbeddedControlPersistenceBinaryDataPart';

export class EmbeddedControlPersistencePart extends OxmlPart {

    public static override _N = 'EmbeddedControlPersistencePart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/control';
    public static override _C = '*';
    public static _P = 'embeddings';
    public static _T = 'control';
    public get control() { return this._r; }
    public set control(root: OxmlElement | undefined) { this._r = root; }

    public get embeddedControlPersistenceBinaryDataParts() { return this._m<EmbeddedControlPersistenceBinaryDataPart>('EmbeddedControlPersistenceBinaryDataPart'); }

}
