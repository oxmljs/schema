import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';


/** Defines the RoamingProperty Class. Serialized as `pRoam:props` */
export class RoamingProperty extends OxmlCompositeElement<Key | Value> {

    public static override _Q = 'pRoam:props';
    /** Returns Key. */
    public get key(): Key | undefined { return this._f(Key); }
    /** Returns Value. */
    public get value(): Value | undefined { return this._f(Value); }

}
/** Defines the Value Class. Serialized as `pRoam:value` */
export class Value extends OxmlLeafTextElement {

    public static override _Q = 'pRoam:value';

}
/** Defines the Key Class. Serialized as `pRoam:key` */
export class Key extends OxmlLeafTextElement {

    public static override _Q = 'pRoam:key';

}

export function initOffice2013PowerPointRoamingNamespace() {
    RoamingProperty._C = {
        'pRoam:key': Key,
        'pRoam:value': Value,
    };
    return {
        prefix: 'pRoam',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2012/roamingSettings',
    };
}
