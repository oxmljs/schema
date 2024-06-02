import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { EmbeddedControlPersistenceBinaryDataPart } from './EmbeddedControlPersistenceBinaryDataPart';
export declare class EmbeddedControlPersistencePart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get control(): OxmlElement | undefined;
    set control(root: OxmlElement | undefined);
    get embeddedControlPersistenceBinaryDataParts(): EmbeddedControlPersistenceBinaryDataPart[];
}
