import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
export declare class MailMergeRecipientDataPart extends OxmlPart {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    get recipients(): OxmlElement | undefined;
    set recipients(root: OxmlElement | undefined);
}
