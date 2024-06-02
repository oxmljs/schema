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

/** Defines the ClassificationOutcome Class. Serialized as `p184:classification` */
export class ClassificationOutcome extends OxmlLeafElement {

    public static override _Q = 'p184:classification';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): ClassificationOutcomeType | undefined { return this._g(':val'); }
    public set val(v: ClassificationOutcomeType | undefined) { this._s(':val', v); }

}

export function initOffice2019Presentationp184Namespace() {
    ClassificationOutcome._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ClassificationOutcomeTypeArray),
    };
    return {
        prefix: 'p184',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2018/4/main',
    };
}
