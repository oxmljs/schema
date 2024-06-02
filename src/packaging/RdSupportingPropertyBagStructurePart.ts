import { SupportingPropertyBagStructures } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';

export class RdSupportingPropertyBagStructurePart extends OxmlPart<SupportingPropertyBagStructures> {

    public static override _N = 'RdSupportingPropertyBagStructurePart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/rdSupportingPropertyBagStructure';
    public static override _C = 'application/vnd.ms-excel.rdsupportingpropertybagstructure+xml';
    public static _P = 'richData';
    public static _T = 'rdsupportingpropertybagstructure';
    public static override _E = SupportingPropertyBagStructures;

    public get rdsupportingpropertybagstructure() { return this._r; }
    public set rdsupportingpropertybagstructure(root: SupportingPropertyBagStructures | undefined) { this._r = root; }


}
