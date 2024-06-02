import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class WordprocessingPrinterSettingsPart extends OxmlPart {

    public static override _N = 'WordprocessingPrinterSettingsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/printerSettings';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.printerSettings';
    public static _P = '../printerSettings';
    public static _T = 'printerSettings';
    public get printerSettings() { return this._r; }
    public set printerSettings(root: OxmlElement | undefined) { this._r = root; }


}
