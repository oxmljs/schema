import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';


/** Defines the CalcFeature Class. Serialized as `xcalcf:feature` */
export class CalcFeature extends OxmlLeafElement {

    public static override _Q = 'xcalcf:feature';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the CalcFeatures Class. Serialized as `xcalcf:calcFeatures` */
export class CalcFeatures extends OxmlCompositeElement<CalcFeature> {

    public static override _Q = 'xcalcf:calcFeatures';

}

export function initOffice2019ExcelCalcFeaturesNamespace() {
    CalcFeature._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    CalcFeatures._C = {
        'xcalcf:feature': CalcFeature,
    };
    return {
        prefix: 'xcalcf',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2018/calcfeatures',
    };
}
