import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';


/** Defines the LongProperty Class. Serialized as `lp:LongProp` */
export class LongProperty extends OxmlLeafTextElement {

    public static override _Q = 'lp:LongProp';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the LongProperties Class. Serialized as `lp:LongProperties` */
export class LongProperties extends OxmlCompositeElement<LongProperty> {

    public static override _Q = 'lp:LongProperties';

}

export function initOfficeLongPropertiesNamespace() {
    LongProperty._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    LongProperties._C = {
        'lp:LongProp': LongProperty,
    };
    return {
        prefix: 'lp',
        xmlns: 'http://schemas.microsoft.com/office/2006/metadata/longProperties',
    };
}
