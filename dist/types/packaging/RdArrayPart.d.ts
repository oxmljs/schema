import { ArrayData } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdArrayPart extends OxmlPart<ArrayData> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ArrayData;
    get rdarray(): ArrayData | undefined;
    set rdarray(root: ArrayData | undefined);
}
