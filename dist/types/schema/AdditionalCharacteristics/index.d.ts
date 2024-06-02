import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { StringValue } from '../../framework/types/StringValue';
export declare enum RelationValues {
    /** Greater Than or Equal to. Serialized value: `ge` */
    GreaterThanOrEqualTo = "ge",
    /** Less Than or Equal To. Serialized value: `le` */
    LessThanOrEqualTo = "le",
    /** Greater Than. Serialized value: `gt` */
    GreaterThan = "gt",
    /** Less Than. Serialized value: `lt` */
    LessThan = "lt",
    /** Equal To. Serialized value: `eq` */
    EqualTo = "eq"
}
export declare const RelationValuesArray: readonly [RelationValues.GreaterThanOrEqualTo, RelationValues.LessThanOrEqualTo, RelationValues.GreaterThan, RelationValues.LessThan, RelationValues.EqualTo];
/** Single Characteristic. Serialized as `ac:characteristic` */
export declare class Characteristic extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Name of Characteristic. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Relationship of Value to Name. Serialized as `:relation` */
    get relation(): RelationValues | undefined;
    set relation(v: RelationValues | undefined);
    /** Characteristic Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Characteristic Grammar. Serialized as `:vocabulary` */
    get vocabulary(): StringValue | undefined;
    set vocabulary(v: StringValue | undefined);
}
/** Set of Additional Characteristics. Serialized as `ac:additionalCharacteristics` */
export declare class AdditionalCharacteristicsInfo extends OxmlPartRootElement<Characteristic> {
    static _Q: string;
}
export declare function initAdditionalCharacteristicsNamespace(): {
    prefix: string;
    xmlns: string;
};
