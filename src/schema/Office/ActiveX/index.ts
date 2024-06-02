import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';


export enum PersistenceValues {
    /** undefined. Serialized value: `persistPropertyBag` */
    PersistPropertyBag = 'persistPropertyBag',
    /** undefined. Serialized value: `persistStream` */
    PersistStream = 'persistStream',
    /** undefined. Serialized value: `persistStreamInit` */
    PersistStreamInit = 'persistStreamInit',
    /** undefined. Serialized value: `persistStorage` */
    PersistStorage = 'persistStorage',
}

export const PersistenceValuesArray = [
    PersistenceValues.PersistPropertyBag,
    PersistenceValues.PersistStream,
    PersistenceValues.PersistStreamInit,
    PersistenceValues.PersistStorage,
] as const;

/** Defines the SharedComPicture Class. Serialized as `ax:picture` */
export class SharedComPicture extends OxmlLeafElement {

    public static override _Q = 'ax:picture';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the SharedComFont Class. Serialized as `ax:font` */
export class SharedComFont extends OxmlCompositeElement<ActiveXObjectProperty> {

    public static override _Q = 'ax:font';
    public static override _A = ['ax:persistence','r:id',];
    /** persistence. Serialized as `ax:persistence` */
    public get persistence(): PersistenceValues | undefined { return this._g('ax:persistence'); }
    public set persistence(v: PersistenceValues | undefined) { this._s('ax:persistence', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the ActiveXObjectProperty Class. Serialized as `ax:ocxPr` */
export class ActiveXObjectProperty extends OxmlCompositeElement<SharedComFont | SharedComPicture> {

    public static override _Q = 'ax:ocxPr';
    public static override _A = ['ax:name','ax:value',];
    /** name. Serialized as `ax:name` */
    public get name(): StringValue | undefined { return this._g('ax:name'); }
    public set name(v: StringValue | undefined) { this._s('ax:name', v); }
    /** value. Serialized as `ax:value` */
    public get value(): StringValue | undefined { return this._g('ax:value'); }
    public set value(v: StringValue | undefined) { this._s('ax:value', v); }
    /** Returns SharedComFont. */
    public get sharedComFont(): SharedComFont | undefined { return this._f(SharedComFont); }
    /** Returns SharedComPicture. */
    public get sharedComPicture(): SharedComPicture | undefined { return this._f(SharedComPicture); }

}
/** Defines the ActiveXControlData Class. Serialized as `ax:ocx` */
export class ActiveXControlData extends OxmlCompositeElement<ActiveXObjectProperty> {

    public static override _Q = 'ax:ocx';
    public static override _A = ['ax:classid','ax:license','r:id','ax:persistence',];
    /** classid. Serialized as `ax:classid` */
    public get activeXControlClassId(): StringValue | undefined { return this._g('ax:classid'); }
    public set activeXControlClassId(v: StringValue | undefined) { this._s('ax:classid', v); }
    /** license. Serialized as `ax:license` */
    public get license(): StringValue | undefined { return this._g('ax:license'); }
    public set license(v: StringValue | undefined) { this._s('ax:license', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** persistence. Serialized as `ax:persistence` */
    public get persistence(): PersistenceValues | undefined { return this._g('ax:persistence'); }
    public set persistence(v: PersistenceValues | undefined) { this._s('ax:persistence', v); }

}

export function initOfficeActiveXNamespace() {
    SharedComPicture._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SharedComFont._C = {
        'ax:ocxPr': ActiveXObjectProperty,
    };
    SharedComFont._D = {
        'ax:persistence': new OxmlAttr('ax:persistence', OxmlType.EnumValue, PersistenceValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ActiveXObjectProperty._C = {
        'ax:font': SharedComFont,
        'ax:picture': SharedComPicture,
    };
    ActiveXObjectProperty._D = {
        'ax:name': new OxmlAttr('ax:name', OxmlType.StringValue),
        'ax:value': new OxmlAttr('ax:value', OxmlType.StringValue),
    };
    ActiveXControlData._C = {
        'ax:ocxPr': ActiveXObjectProperty,
    };
    ActiveXControlData._D = {
        'ax:classid': new OxmlAttr('ax:classid', OxmlType.StringValue),
        'ax:license': new OxmlAttr('ax:license', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        'ax:persistence': new OxmlAttr('ax:persistence', OxmlType.EnumValue, PersistenceValuesArray),
    };
    return {
        prefix: 'ax',
        xmlns: 'http://schemas.microsoft.com/office/2006/activeX',
    };
}
