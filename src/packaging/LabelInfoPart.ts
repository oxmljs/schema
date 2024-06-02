import { ClassificationLabelList } from '../schema/Office2021/MipLabelMetaData';
import { OxmlPart } from '../framework/OxmlPart';

export class LabelInfoPart extends OxmlPart<ClassificationLabelList> {

    public static override _N = 'LabelInfoPart';
    public static override _R = 'http://schemas.microsoft.com/office/2020/02/relationships/classificationlabels';
    public static override _C = 'application/vnd.ms-office.classificationlabels+xml';
    public static _P = 'docMetadata';
    public static _T = 'LabelInfo';
    public static override _E = ClassificationLabelList;

    public get LabelInfo() { return this._r; }
    public set LabelInfo(root: ClassificationLabelList | undefined) { this._r = root; }


}
