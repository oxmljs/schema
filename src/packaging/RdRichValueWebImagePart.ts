import { WebImagesSupportingRichData } from '../schema/Office2021/Excel/RichDataWebImage';
import { OxmlPart } from '../framework/OxmlPart';

export class RdRichValueWebImagePart extends OxmlPart<WebImagesSupportingRichData> {

    public static override _N = 'RdRichValueWebImagePart';
    public static override _R = 'http://schemas.microsoft.com/office/2020/07/relationships/rdrichvaluewebimage';
    public static override _C = 'application/vnd.ms-excel.rdrichvaluewebimage+xml';
    public static _P = 'richData';
    public static _T = 'rdRichValueWebImage';
    public static override _E = WebImagesSupportingRichData;

    public get rdRichValueWebImage() { return this._r; }
    public set rdRichValueWebImage(root: WebImagesSupportingRichData | undefined) { this._r = root; }


}
