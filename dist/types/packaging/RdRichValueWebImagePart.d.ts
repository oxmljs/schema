import { WebImagesSupportingRichData } from '../schema/Office2021/Excel/RichDataWebImage';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdRichValueWebImagePart extends OxmlPart<WebImagesSupportingRichData> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof WebImagesSupportingRichData;
    get rdRichValueWebImage(): WebImagesSupportingRichData | undefined;
    set rdRichValueWebImage(root: WebImagesSupportingRichData | undefined);
}
