import { CustomUI } from '../schema/Office/CustomUI';
import { OxmlPart } from '../framework/OxmlPart';
import { ImagePart } from './ImagePart';

export class RibbonExtensibilityPart extends OxmlPart<CustomUI> {

    public static override _N = 'RibbonExtensibilityPart';
    public static override _R = 'http://schemas.microsoft.com/office/2006/relationships/ui/extensibility';
    public static override _C = 'application/xml';
    public static _P = 'customUI';
    public static _T = 'customUI';
    public static override _E = CustomUI;

    public get customUI() { return this._r; }
    public set customUI(root: CustomUI | undefined) { this._r = root; }

    public get imageParts() { return this._m<ImagePart>('ImagePart'); }

}
