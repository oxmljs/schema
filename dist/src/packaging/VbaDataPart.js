import { VbaSuppData } from "../schema/Office/Word";
import { OxmlPart } from "../framework/OxmlPart";
class VbaDataPart extends OxmlPart {
  static _N = "VbaDataPart";
  static _R = "http://schemas.microsoft.com/office/2006/relationships/wordVbaData";
  static _C = "application/vnd.ms-word.vbaData+xml";
  static _P = ".";
  static _T = "vbaData";
  static _E = VbaSuppData;
  get vbaData() {
    return this._r;
  }
  set vbaData(root) {
    this._r = root;
  }
}
export {
  VbaDataPart
};
