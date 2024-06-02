import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';

export class LegacyDiagramTextPart extends OxmlPart {

    public static override _N = 'LegacyDiagramTextPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/legacyDiagramText';
    public static override _C = 'application/vnd.ms-office.legacyDiagramText';
    public static _P = '.';
    public static _T = 'legacyDiagramText';
    public get legacyDiagramText() { return this._r; }
    public set legacyDiagramText(root: OxmlElement | undefined) { this._r = root; }


}
