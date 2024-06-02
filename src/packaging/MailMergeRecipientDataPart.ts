import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class MailMergeRecipientDataPart extends OxmlPart {

    public static override _N = 'MailMergeRecipientDataPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/recipientData';
    public static override _C = '*';
    public static _P = '.';
    public static _T = 'recipients';
    public get recipients() { return this._r; }
    public set recipients(root: OxmlElement | undefined) { this._r = root; }


}
