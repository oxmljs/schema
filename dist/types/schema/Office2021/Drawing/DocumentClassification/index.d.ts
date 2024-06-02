import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
export declare enum ClassificationOutcomeType {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `hdr` */
    Hdr = "hdr",
    /** undefined. Serialized value: `ftr` */
    Ftr = "ftr",
    /** undefined. Serialized value: `watermark` */
    Watermark = "watermark"
}
export declare const ClassificationOutcomeTypeArray: readonly [ClassificationOutcomeType.None, ClassificationOutcomeType.Hdr, ClassificationOutcomeType.Ftr, ClassificationOutcomeType.Watermark];
/** Defines the ClassificationOutcome Class. Serialized as `aclsh:classification` */
export declare class ClassificationOutcome extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** classificationOutcomeType. Serialized as `:classificationOutcomeType` */
    get classificationOutcomeType(): ClassificationOutcomeType | undefined;
    set classificationOutcomeType(v: ClassificationOutcomeType | undefined);
}
export declare function initOffice2021DrawingDocumentClassificationNamespace(): {
    prefix: string;
    xmlns: string;
};
