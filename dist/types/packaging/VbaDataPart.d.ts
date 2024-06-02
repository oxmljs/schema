import { VbaSuppData } from '../schema/Office/Word';
import { OxmlPart } from '../framework/OxmlPart';
export declare class VbaDataPart extends OxmlPart<VbaSuppData> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof VbaSuppData;
    get vbaData(): VbaSuppData | undefined;
    set vbaData(root: VbaSuppData | undefined);
}
