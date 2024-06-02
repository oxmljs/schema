import { CustomUI } from '../schema/Office/CustomUI';
import { OxmlPart } from '../framework/OxmlPart';

export class QuickAccessToolbarCustomizationsPart extends OxmlPart<CustomUI> {

    public static override _N = 'QuickAccessToolbarCustomizationsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/ui/userCustomization';
    public static override _C = 'application/xml';
    public static _P = 'userCustomization';
    public static _T = 'customUI';
    public static override _E = CustomUI;

    public get customUI() { return this._r; }
    public set customUI(root: CustomUI | undefined) { this._r = root; }


}
