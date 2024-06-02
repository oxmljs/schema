import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { XmlSignaturePart } from './XmlSignaturePart';

export class DigitalSignatureOriginPart extends OxmlPart {

    public static override _N = 'DigitalSignatureOriginPart';
    public static override _R = 'http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/origin';
    public static override _C = 'application/vnd.openxmlformats-package.digital-signature-origin';
    public static _P = '_xmlsignatures';
    public static _T = 'origin';
    public get origin() { return this._r; }
    public set origin(root: OxmlElement | undefined) { this._r = root; }

    public get xmlSignatureParts() { return this._m<XmlSignaturePart>('XmlSignaturePart'); }

}
