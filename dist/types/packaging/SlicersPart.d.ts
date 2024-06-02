import { Slicers } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';
export declare class SlicersPart extends OxmlPart<Slicers> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof Slicers;
    get slicer(): Slicers | undefined;
    set slicer(root: Slicers | undefined);
}
