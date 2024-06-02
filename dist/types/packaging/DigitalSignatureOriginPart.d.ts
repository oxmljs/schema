import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { XmlSignaturePart } from './XmlSignaturePart';
export declare class DigitalSignatureOriginPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get origin(): OxmlElement | undefined;
    set origin(root: OxmlElement | undefined);
    get xmlSignatureParts(): XmlSignaturePart[];
}
