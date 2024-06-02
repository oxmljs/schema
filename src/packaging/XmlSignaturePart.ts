import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class XmlSignaturePart extends OxmlPart {

    public static override _N = 'XmlSignaturePart';
    public static override _R = 'http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/signature';
    public static override _C = 'application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml';
    public static _P = '_xmlsignatures';
    public static _T = 'sig';
    public get sig() { return this._r; }
    public set sig(root: OxmlElement | undefined) { this._r = root; }


}
