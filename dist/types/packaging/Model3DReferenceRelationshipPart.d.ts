import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
export declare class Model3DReferenceRelationshipPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get model3d(): OxmlElement | undefined;
    set model3d(root: OxmlElement | undefined);
}
