import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';


export enum RelationValues {
    /** Greater Than or Equal to. Serialized value: `ge` */
    GreaterThanOrEqualTo = 'ge',
    /** Less Than or Equal To. Serialized value: `le` */
    LessThanOrEqualTo = 'le',
    /** Greater Than. Serialized value: `gt` */
    GreaterThan = 'gt',
    /** Less Than. Serialized value: `lt` */
    LessThan = 'lt',
    /** Equal To. Serialized value: `eq` */
    EqualTo = 'eq',
}

export const RelationValuesArray = [
    RelationValues.GreaterThanOrEqualTo,
    RelationValues.LessThanOrEqualTo,
    RelationValues.GreaterThan,
    RelationValues.LessThan,
    RelationValues.EqualTo,
] as const;

/** Single Characteristic. Serialized as `ac:characteristic` */
export class Characteristic extends OxmlLeafElement {

    public static override _Q = 'ac:characteristic';
    public static override _A = [':name',':relation',':val',':vocabulary',];
    /** Name of Characteristic. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Relationship of Value to Name. Serialized as `:relation` */
    public get relation(): RelationValues | undefined { return this._g(':relation'); }
    public set relation(v: RelationValues | undefined) { this._s(':relation', v); }
    /** Characteristic Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }
    /** Characteristic Grammar. Serialized as `:vocabulary` */
    public get vocabulary(): StringValue | undefined { return this._g(':vocabulary'); }
    public set vocabulary(v: StringValue | undefined) { this._s(':vocabulary', v); }

}
/** Set of Additional Characteristics. Serialized as `ac:additionalCharacteristics` */
export class AdditionalCharacteristicsInfo extends OxmlPartRootElement<Characteristic> {

    public static override _Q = 'ac:additionalCharacteristics';

}

export function initAdditionalCharacteristicsNamespace() {
    Characteristic._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':relation': new OxmlAttr(':relation', OxmlType.EnumValue, RelationValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
        ':vocabulary': new OxmlAttr(':vocabulary', OxmlType.StringValue),
    };
    AdditionalCharacteristicsInfo._C = {
        'ac:characteristic': Characteristic,
    };
    return {
        prefix: 'ac',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/characteristics',
    };
}
