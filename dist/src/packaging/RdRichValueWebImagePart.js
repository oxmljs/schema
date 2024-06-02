import { WebImagesSupportingRichData } from "../schema/Office2021/Excel/RichDataWebImage";
import { OxmlPart } from "../framework/OxmlPart";
class RdRichValueWebImagePart extends OxmlPart {
  static _N = "RdRichValueWebImagePart";
  static _R = "http://schemas.microsoft.com/office/2020/07/relationships/rdrichvaluewebimage";
  static _C = "application/vnd.ms-excel.rdrichvaluewebimage+xml";
  static _P = "richData";
  static _T = "rdRichValueWebImage";
  static _E = WebImagesSupportingRichData;
  get rdRichValueWebImage() {
    return this._r;
  }
  set rdRichValueWebImage(root) {
    this._r = root;
  }
}
export {
  RdRichValueWebImagePart
};
