import { SupportingPropertyBags } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';

export class RdSupportingPropertyBagPart extends OxmlPart<SupportingPropertyBags> {

    public static override _N = 'RdSupportingPropertyBagPart';
    public static override _R = 'http://schemas.microsoft.com/office/2017/06/relationships/rdSupportingPropertyBag';
    public static override _C = 'application/vnd.ms-excel.rdsupportingpropertybag+xml';
    public static _P = 'richData';
    public static _T = 'rdsupportingpropertybag';
    public static override _E = SupportingPropertyBags;

    public get rdsupportingpropertybag() { return this._r; }
    public set rdsupportingpropertybag(root: SupportingPropertyBags | undefined) { this._r = root; }


}
