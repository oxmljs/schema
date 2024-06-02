import { ClassificationLabelList } from '../schema/Office2021/MipLabelMetaData';
import { OxmlPart } from '../framework/OxmlPart';
export declare class LabelInfoPart extends OxmlPart<ClassificationLabelList> {
    static _N: string;
    static _R: string;
    static _C: string;
    static _P: string;
    static _T: string;
    static _E: typeof ClassificationLabelList;
    get LabelInfo(): ClassificationLabelList | undefined;
    set LabelInfo(root: ClassificationLabelList | undefined);
}
