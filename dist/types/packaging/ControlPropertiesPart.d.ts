import { FormControlProperties } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';
export declare class ControlPropertiesPart extends OxmlPart<FormControlProperties> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof FormControlProperties;
    get ctrlProp(): FormControlProperties | undefined;
    set ctrlProp(root: FormControlProperties | undefined);
}
