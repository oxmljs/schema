import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
/** Defines the BooleanFalse Class. Serialized as `c16r3:dispNaAsBlank` */
export declare class BooleanFalse extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `c16r3:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the DataDisplayOptions16 Class. Serialized as `c16r3:dataDisplayOptions16` */
export declare class DataDisplayOptions16 extends OxmlCompositeElement<BooleanFalse> {
    static _Q: string;
    /** Returns BooleanFalse. */
    get booleanFalse(): BooleanFalse | undefined;
}
export declare function initOffice2019DrawingChartNamespace(): {
    prefix: string;
    xmlns: string;
};
