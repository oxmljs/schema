import { PresentationProperties } from '../schema/Presentation';
import { OxmlPart } from '../framework/OxmlPart';
export declare class PresentationPropertiesPart extends OxmlPart<PresentationProperties> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof PresentationProperties;
    get presProps(): PresentationProperties | undefined;
    set presProps(root: PresentationProperties | undefined);
}
