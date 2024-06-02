import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
export declare enum PersistenceValues {
    /** undefined. Serialized value: `persistPropertyBag` */
    PersistPropertyBag = "persistPropertyBag",
    /** undefined. Serialized value: `persistStream` */
    PersistStream = "persistStream",
    /** undefined. Serialized value: `persistStreamInit` */
    PersistStreamInit = "persistStreamInit",
    /** undefined. Serialized value: `persistStorage` */
    PersistStorage = "persistStorage"
}
export declare const PersistenceValuesArray: readonly [PersistenceValues.PersistPropertyBag, PersistenceValues.PersistStream, PersistenceValues.PersistStreamInit, PersistenceValues.PersistStorage];
/** Defines the SharedComPicture Class. Serialized as `ax:picture` */
export declare class SharedComPicture extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the SharedComFont Class. Serialized as `ax:font` */
export declare class SharedComFont extends OxmlCompositeElement<ActiveXObjectProperty> {
    static _Q: string;
    static _A: string[];
    /** persistence. Serialized as `ax:persistence` */
    get persistence(): PersistenceValues | undefined;
    set persistence(v: PersistenceValues | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the ActiveXObjectProperty Class. Serialized as `ax:ocxPr` */
export declare class ActiveXObjectProperty extends OxmlCompositeElement<SharedComFont | SharedComPicture> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `ax:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** value. Serialized as `ax:value` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
    /** Returns SharedComFont. */
    get sharedComFont(): SharedComFont | undefined;
    /** Returns SharedComPicture. */
    get sharedComPicture(): SharedComPicture | undefined;
}
/** Defines the ActiveXControlData Class. Serialized as `ax:ocx` */
export declare class ActiveXControlData extends OxmlCompositeElement<ActiveXObjectProperty> {
    static _Q: string;
    static _A: string[];
    /** classid. Serialized as `ax:classid` */
    get activeXControlClassId(): StringValue | undefined;
    set activeXControlClassId(v: StringValue | undefined);
    /** license. Serialized as `ax:license` */
    get license(): StringValue | undefined;
    set license(v: StringValue | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** persistence. Serialized as `ax:persistence` */
    get persistence(): PersistenceValues | undefined;
    set persistence(v: PersistenceValues | undefined);
}
export declare function initOfficeActiveXNamespace(): {
    prefix: string;
    xmlns: string;
};
