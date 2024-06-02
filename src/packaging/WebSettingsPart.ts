import { WebSettings } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';

export class WebSettingsPart extends OxmlPart<WebSettings> {

    public static override _N = 'WebSettingsPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings';
    public static override _C = 'application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml';
    public static _P = '.';
    public static _T = 'webSettings';
    public static override _E = WebSettings;

    public get webSettings() { return this._r; }
    public set webSettings(root: WebSettings | undefined) { this._r = root; }


}
