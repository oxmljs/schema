import { WebExtension } from '../schema/Office2013/WebExtension';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';
export declare class WebExtensionPart extends OxmlPart<WebExtension> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof WebExtension;
    get webextension(): WebExtension | undefined;
    set webextension(root: WebExtension | undefined);
    get imageParts(): ImagePart[];
}
