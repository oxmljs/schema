import { Settings } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { MailMergeRecipientDataPart } from './MailMergeRecipientDataPart';
import { ImagePart } from './ImagePart';
export declare class DocumentSettingsPart extends OxmlPart<Settings> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Settings;
    get settings(): Settings | undefined;
    set settings(root: Settings | undefined);
    get mailMergeRecipientDataPart(): MailMergeRecipientDataPart | undefined;
    get imageParts(): ImagePart[];
}
