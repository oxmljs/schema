import { ClassificationLabelList } from "../schema/Office2021/MipLabelMetaData";
import { OxmlPart } from "../framework/OxmlPart";
class LabelInfoPart extends OxmlPart {
  static _N = "LabelInfoPart";
  static _R = "http://schemas.microsoft.com/office/2020/02/relationships/classificationlabels";
  static _C = "application/vnd.ms-office.classificationlabels+xml";
  static _P = "docMetadata";
  static _T = "LabelInfo";
  static _E = ClassificationLabelList;
  get LabelInfo() {
    return this._r;
  }
  set LabelInfo(root) {
    this._r = root;
  }
}
export {
  LabelInfoPart
};
