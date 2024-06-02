import { WebSettings } from '../schema/Wordprocessing';
import { OxmlPart } from '../framework/OxmlPart';
export declare class WebSettingsPart extends OxmlPart<WebSettings> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof WebSettings;
    get webSettings(): WebSettings | undefined;
    set webSettings(root: WebSettings | undefined);
}
