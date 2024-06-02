import { RichValueStructures } from '../schema/Office2019/Excel/RichData';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdRichValueStructurePart extends OxmlPart<RichValueStructures> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof RichValueStructures;
    get rdrichvaluestructure(): RichValueStructures | undefined;
    set rdrichvaluestructure(root: RichValueStructures | undefined);
}
