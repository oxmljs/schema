import { RichValueTypesInfo } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdRichValueTypesPart extends OxmlPart<RichValueTypesInfo> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof RichValueTypesInfo;
    get rdRichValueTypes(): RichValueTypesInfo | undefined;
    set rdRichValueTypes(root: RichValueTypesInfo | undefined);
}
