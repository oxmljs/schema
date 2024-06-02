import { SupportingPropertyBagStructures } from '../schema/Office2019/Excel/RichData2';
import { OxmlPart } from '../framework/OxmlPart';
export declare class RdSupportingPropertyBagStructurePart extends OxmlPart<SupportingPropertyBagStructures> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof SupportingPropertyBagStructures;
    get rdsupportingpropertybagstructure(): SupportingPropertyBagStructures | undefined;
    set rdsupportingpropertybagstructure(root: SupportingPropertyBagStructures | undefined);
}
