import { RichValueData } from '../schema/Office2019/Excel/RichData';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdRichValuePart extends OxmlPart<RichValueData> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof RichValueData;
    get rdrichvalue(): RichValueData | undefined;
    set rdrichvalue(root: RichValueData | undefined);
}
