import { OxmlPart } from '../framework/OxmlPart';
import { OxmlElement } from '../framework/OxmlElement';
import { VbaDataPart } from './VbaDataPart';

export class VbaProjectPart extends OxmlPart {

    public static override _N = 'VbaProjectPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/vbaProject';
    public static override _C = 'application/vnd.ms-office.vbaProject';
    public static _P = '.';
    public static _T = 'vbaProject';
    public get vbaProject() { return this._r; }
    public set vbaProject(root: OxmlElement | undefined) { this._r = root; }

    public get vbaDataPart() { return this._f<VbaDataPart>('VbaDataPart'); }

}
