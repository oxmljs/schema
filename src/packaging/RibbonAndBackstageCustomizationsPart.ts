import { CustomUI } from '../schema/Office2010/CustomUI';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class RibbonAndBackstageCustomizationsPart extends OxmlPart<CustomUI> {

    public static override _N = 'RibbonAndBackstageCustomizationsPart';
    public static override _R = 'http://schemas.microsoft.com/office/2007/relationships/ui/extensibility';
    public static override _C = 'application/xml';
    public static _P = 'customUI';
    public static _T = 'customUI';
    public static override _E = CustomUI;

    public get customUI() { return this._r; }
    public set customUI(root: CustomUI | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
