import { FormControlProperties } from '../schema/Office2010/Excel';
import { OxmlPart } from '../framework/OxmlPart';

export class ControlPropertiesPart extends OxmlPart<FormControlProperties> {

    public static override _N = 'ControlPropertiesPart';
    public static override _R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp';
    public static override _C = 'application/vnd.ms-excel.controlproperties+xml';
    public static _P = '../ctrlProps';
    public static _T = 'ctrlProp';
    public static override _E = FormControlProperties;

    public get ctrlProp() { return this._r; }
    public set ctrlProp(root: FormControlProperties | undefined) { this._r = root; }


}
