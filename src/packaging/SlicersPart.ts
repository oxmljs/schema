import { Slicers } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';

export class SlicersPart extends OxmlPart<Slicers> {

    public static override _N = 'SlicersPart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/slicer';
    public static override _C = 'application/vnd.ms-excel.slicer+xml';
    public static _P = '../slicers';
    public static _T = 'slicer';
    public static override _E = Slicers;

    public get slicer() { return this._r; }
    public set slicer(root: Slicers | undefined) { this._r = root; }


}
