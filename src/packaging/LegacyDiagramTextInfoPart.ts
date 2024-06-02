import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class LegacyDiagramTextInfoPart extends OxmlPart {

    public static override _N = 'LegacyDiagramTextInfoPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/legacyDocTextInfo';
    public static override _C = 'application/vnd.ms-office.legacyDocTextInfo';
    public static _P = '.';
    public static _T = 'legacyDocTextInfo';
    public get legacyDocTextInfo() { return this._r; }
    public set legacyDocTextInfo(root: OxmlElement | undefined) { this._r = root; }


}
