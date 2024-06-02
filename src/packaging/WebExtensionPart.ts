import { WebExtension } from '../schema/Office2013/WebExtension';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class WebExtensionPart extends OxmlPart<WebExtension> {

    public static override _N = 'WebExtensionPart';
    public static override _R = 'http://schemas.microsoft.com/office/2011/relationships/webextension';
    public static override _C = 'application/vnd.ms-office.webextension+xml';
    public static _P = '../webextensions';
    public static _T = 'webextension';
    public static override _E = WebExtension;

    public get webextension() { return this._r; }
    public set webextension(root: WebExtension | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
