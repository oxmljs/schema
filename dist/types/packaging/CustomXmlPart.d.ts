import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { CustomXmlPropertiesPart } from './CustomXmlPropertiesPart';
export declare class CustomXmlPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get item(): OxmlElement | undefined;
    set item(root: OxmlElement | undefined);
    get customXmlPropertiesPart(): CustomXmlPropertiesPart | undefined;
}
