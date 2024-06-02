import { SupportingPropertyBags } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdSupportingPropertyBagPart extends OxmlPart<SupportingPropertyBags> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SupportingPropertyBags;
    get rdsupportingpropertybag(): SupportingPropertyBags | undefined;
    set rdsupportingpropertybag(root: SupportingPropertyBags | undefined);
}
