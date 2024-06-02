import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
export declare class LegacyDiagramTextInfoPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get legacyDocTextInfo(): OxmlElement | undefined;
    set legacyDocTextInfo(root: OxmlElement | undefined);
}
