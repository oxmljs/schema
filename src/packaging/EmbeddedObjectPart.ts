import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class EmbeddedObjectPart extends OxmlPart {

    public static override _N = 'EmbeddedObjectPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject';
    public static override _C = '*';
    public static _P = 'embeddings';
    public static _T = 'embeddedObject';
    public get embeddedObject() { return this._r; }
    public set embeddedObject(root: OxmlElement | undefined) { this._r = root; }


}
