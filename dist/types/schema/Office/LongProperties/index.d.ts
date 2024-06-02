import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { StringValue } from '../../../framework/types/StringValue';
/** Defines the LongProperty Class. Serialized as `lp:LongProp` */
export declare class LongProperty extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the LongProperties Class. Serialized as `lp:LongProperties` */
export declare class LongProperties extends OxmlCompositeElement<LongProperty> {
    static _Q: string;
}
export declare function initOfficeLongPropertiesNamespace(): {
    prefix: string;
    xmlns: string;
};
