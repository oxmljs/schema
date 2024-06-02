import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
/** Defines the CalcFeature Class. Serialized as `xcalcf:feature` */
export declare class CalcFeature extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the CalcFeatures Class. Serialized as `xcalcf:calcFeatures` */
export declare class CalcFeatures extends OxmlCompositeElement<CalcFeature> {
    static _Q: string;
}
export declare function initOffice2019ExcelCalcFeaturesNamespace(): {
    prefix: string;
    xmlns: string;
};
