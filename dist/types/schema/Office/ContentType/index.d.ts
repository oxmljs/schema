import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
/** Defines the ContentTypeSchema Class. Serialized as `ct:contentTypeSchema` */
export declare class ContentTypeSchema extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** _. Serialized as `ct:_` */
    get underScore(): StringValue | undefined;
    set underScore(v: StringValue | undefined);
    /** _. Serialized as `ma:_` */
    get reservedAttributeString(): StringValue | undefined;
    set reservedAttributeString(v: StringValue | undefined);
    /** contentTypeName. Serialized as `ma:contentTypeName` */
    get contentTypeName(): StringValue | undefined;
    set contentTypeName(v: StringValue | undefined);
    /** contentTypeID. Serialized as `ma:contentTypeID` */
    get contentTypeID(): StringValue | undefined;
    set contentTypeID(v: StringValue | undefined);
    /** contentTypeVersion. Serialized as `ma:contentTypeVersion` */
    get contentTypeVersion(): Int32Value | undefined;
    set contentTypeVersion(v: Int32Value | undefined);
    /** contentTypeDescription. Serialized as `ma:contentTypeDescription` */
    get contentTypeDescription(): StringValue | undefined;
    set contentTypeDescription(v: StringValue | undefined);
    /** contentTypeScope. Serialized as `ma:contentTypeScope` */
    get contentTypeScope(): StringValue | undefined;
    set contentTypeScope(v: StringValue | undefined);
    /** versionID. Serialized as `ma:versionID` */
    get versionID(): StringValue | undefined;
    set versionID(v: StringValue | undefined);
}
export declare function initOfficeContentTypeNamespace(): {
    prefix: string;
    xmlns: string;
};
