import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';


/** Defines the BooleanFalse Class. Serialized as `c16r3:dispNaAsBlank` */
export class BooleanFalse extends OxmlLeafElement {

    public static override _Q = 'c16r3:dispNaAsBlank';
    public static override _A = ['c16r3:val',];
    /** val. Serialized as `c16r3:val` */
    public get val(): BooleanValue | undefined { return this._g('c16r3:val'); }
    public set val(v: BooleanValue | undefined) { this._s('c16r3:val', v); }

}
/** Defines the DataDisplayOptions16 Class. Serialized as `c16r3:dataDisplayOptions16` */
export class DataDisplayOptions16 extends OxmlCompositeElement<BooleanFalse> {

    public static override _Q = 'c16r3:dataDisplayOptions16';
    /** Returns BooleanFalse. */
    public get booleanFalse(): BooleanFalse | undefined { return this._f(BooleanFalse); }

}

export function initOffice2019DrawingChartNamespace() {
    BooleanFalse._D = {
        'c16r3:val': new OxmlAttr('c16r3:val', OxmlType.BooleanValue),
    };
    DataDisplayOptions16._C = {
        'c16r3:dispNaAsBlank': BooleanFalse,
    };
    return {
        prefix: 'c16r3',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2017/03/chart',
    };
}
