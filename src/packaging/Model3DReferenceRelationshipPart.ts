import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class Model3DReferenceRelationshipPart extends OxmlPart {

    public static override _N = 'Model3DReferenceRelationshipPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/model3d';
    public static override _C = 'model/gltf-binary';
    public static _P = '../media';
    public static _T = 'model3d';
    public get model3d() { return this._r; }
    public set model3d(root: OxmlElement | undefined) { this._r = root; }


}
