import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
export declare class EmbeddedObjectPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get embeddedObject(): OxmlElement | undefined;
    set embeddedObject(root: OxmlElement | undefined);
}
