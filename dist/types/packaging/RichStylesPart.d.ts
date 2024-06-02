import { RichStylesheet } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RichStylesPart extends OxmlPart<RichStylesheet> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof RichStylesheet;
    get richStyles(): RichStylesheet | undefined;
    set richStyles(root: RichStylesheet | undefined);
}
