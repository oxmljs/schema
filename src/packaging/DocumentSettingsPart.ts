import { Settings } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
import { MailMergeRecipientDataPart } from './MailMergeRecipientDataPart';
import { ImagePart } from './ImagePart';

export class DocumentSettingsPart extends OxmlPart<Settings> {

    public static override _N = 'DocumentSettingsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml';
    public static _P = '.';
    public static _T = 'settings';
    public static override _E = Settings;

    public get settings() { return this._r; }
    public set settings(root: Settings | undefined) { this._r = root; }

    public get mailMergeRecipientDataPart() { return this._f<MailMergeRecipientDataPart>('MailMergeRecipientDataPart'); }
    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
