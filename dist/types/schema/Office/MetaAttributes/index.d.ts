import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
export declare enum TrueOnlyValues {
    /** undefined. Serialized value: `true` */
    True = "true"
}
export declare const TrueOnlyValuesArray: readonly [TrueOnlyValues];
/** Defines the Dummy Class. Serialized as `ma:DummyContentTypeElement` */
export declare class Dummy extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** decimals. Serialized as `:decimals` */
    get decimals(): StringValue | undefined;
    set decimals(v: StringValue | undefined);
    /** default. Serialized as `:default` */
    get default(): StringValue | undefined;
    set default(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** displayName. Serialized as `:displayName` */
    get displayName(): StringValue | undefined;
    set displayName(v: StringValue | undefined);
    /** fieldsID. Serialized as `:fieldsID` */
    get fieldsID(): StringValue | undefined;
    set fieldsID(v: StringValue | undefined);
    /** format. Serialized as `:format` */
    get format(): StringValue | undefined;
    set format(v: StringValue | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): StringValue | undefined;
    set hidden(v: StringValue | undefined);
    /** index. Serialized as `:index` */
    get index(): Int32Value | undefined;
    set index(v: Int32Value | undefined);
    /** internalName. Serialized as `:internalName` */
    get internalName(): StringValue | undefined;
    set internalName(v: StringValue | undefined);
    /** LCID. Serialized as `:LCID` */
    get lCID(): Int32Value | undefined;
    set lCID(v: Int32Value | undefined);
    /** list. Serialized as `:list` */
    get list(): StringValue | undefined;
    set list(v: StringValue | undefined);
    /** percentage. Serialized as `:percentage` */
    get percentage(): StringValue | undefined;
    set percentage(v: StringValue | undefined);
    /** readOnly. Serialized as `:readOnly` */
    get readOnly(): StringValue | undefined;
    set readOnly(v: StringValue | undefined);
    /** requiredMultiChoice. Serialized as `:requiredMultiChoice` */
    get requiredMultiChoice(): StringValue | undefined;
    set requiredMultiChoice(v: StringValue | undefined);
    /** root. Serialized as `:root` */
    get root(): TrueOnlyValues | undefined;
    set root(v: TrueOnlyValues | undefined);
    /** showField. Serialized as `:showField` */
    get showField(): StringValue | undefined;
    set showField(v: StringValue | undefined);
    /** web. Serialized as `:web` */
    get web(): StringValue | undefined;
    set web(v: StringValue | undefined);
}
export declare function initOfficeMetaAttributesNamespace(): {
    prefix: string;
    xmlns: string;
};
