import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';


export enum ClassificationOutcomeType {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `hdr` */
    Hdr = 'hdr',
    /** undefined. Serialized value: `ftr` */
    Ftr = 'ftr',
    /** undefined. Serialized value: `watermark` */
    Watermark = 'watermark',
}

export const ClassificationOutcomeTypeArray = [
    ClassificationOutcomeType.None,
    ClassificationOutcomeType.Hdr,
    ClassificationOutcomeType.Ftr,
    ClassificationOutcomeType.Watermark,
] as const;

/** Defines the ClassificationOutcome Class. Serialized as `aclsh:classification` */
export class ClassificationOutcome extends OxmlLeafElement {

    public static override _Q = 'aclsh:classification';
    public static override _A = [':classificationOutcomeType',];
    /** classificationOutcomeType. Serialized as `:classificationOutcomeType` */
    public get classificationOutcomeType(): ClassificationOutcomeType | undefined { return this._g(':classificationOutcomeType'); }
    public set classificationOutcomeType(v: ClassificationOutcomeType | undefined) { this._s(':classificationOutcomeType', v); }

}

export function initOffice2021DrawingDocumentClassificationNamespace() {
    ClassificationOutcome._D = {
        ':classificationOutcomeType': new OxmlAttr(':classificationOutcomeType', OxmlType.EnumValue, ClassificationOutcomeTypeArray),
    };
    return {
        prefix: 'aclsh',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2020/classificationShape',
    };
}
