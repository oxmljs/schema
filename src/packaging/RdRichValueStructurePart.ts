import { RichValueStructures } from '../schema/Office2019/Excel/RichData';
import { OxmlPart } from '../framework/OxmlPart';

export class RdRichValueStructurePart extends OxmlPart<RichValueStructures> {

    public static override _N = 'RdRichValueStructurePart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/rdRichValueStructure';
    public static override _C = 'application/vnd.ms-excel.rdrichvaluestructure+xml';
    public static _P = 'richData';
    public static _T = 'rdrichvaluestructure';
    public static override _E = RichValueStructures;

    public get rdrichvaluestructure() { return this._r; }
    public set rdrichvaluestructure(root: RichValueStructures | undefined) { this._r = root; }


}
