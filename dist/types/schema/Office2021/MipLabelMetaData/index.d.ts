import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
/** Defines the ClassificationExtensionList Class. Serialized as `clbl:extLst` */
export declare class ClassificationExtensionList extends OxmlCompositeElement<ClassificationExtension> {
    static _Q: string;
}
/** Defines the ClassificationLabel Class. Serialized as `clbl:label` */
export declare class ClassificationLabel extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** enabled. Serialized as `:enabled` */
    get enabled(): BooleanValue | undefined;
    set enabled(v: BooleanValue | undefined);
    /** setDate. Serialized as `:setDate` */
    get setDate(): StringValue | undefined;
    set setDate(v: StringValue | undefined);
    /** method. Serialized as `:method` */
    get method(): StringValue | undefined;
    set method(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** siteId. Serialized as `:siteId` */
    get siteId(): StringValue | undefined;
    set siteId(v: StringValue | undefined);
    /** actionId. Serialized as `:actionId` */
    get actionId(): StringValue | undefined;
    set actionId(v: StringValue | undefined);
    /** contentBits. Serialized as `:contentBits` */
    get contentBits(): UInt32Value | undefined;
    set contentBits(v: UInt32Value | undefined);
    /** removed. Serialized as `:removed` */
    get removed(): BooleanValue | undefined;
    set removed(v: BooleanValue | undefined);
}
/** Defines the ClassificationExtension Class. Serialized as `clbl:ext` */
export declare class ClassificationExtension extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** uri. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Defines the ClassificationLabelList Class. Serialized as `clbl:labelList` */
export declare class ClassificationLabelList extends OxmlPartRootElement<ClassificationLabel | ClassificationExtensionList> {
    static _Q: string;
}
export declare function initOffice2021MipLabelMetaDataNamespace(): {
    prefix: string;
    xmlns: string;
};
