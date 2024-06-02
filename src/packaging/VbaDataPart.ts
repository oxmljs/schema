import { VbaSuppData } from '../schema/Office/Word';
import { OxmlPart } from '../framework/OxmlPart';

export class VbaDataPart extends OxmlPart<VbaSuppData> {

    public static override _N = 'VbaDataPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/wordVbaData';
    public static override _C = 'application/vnd.ms-word.vbaData+xml';
    public static _P = '.';
    public static _T = 'vbaData';
    public static override _E = VbaSuppData;

    public get vbaData() { return this._r; }
    public set vbaData(root: VbaSuppData | undefined) { this._r = root; }


}
