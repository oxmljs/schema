import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { StringValue } from '../../framework/types/StringValue';
/** Set of Associated XML Schemas. Serialized as `ds:schemaRefs` */
export declare class SchemaReferences extends OxmlCompositeElement<SchemaReference> {
    static _Q: string;
}
/** Associated XML Schema. Serialized as `ds:schemaRef` */
export declare class SchemaReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Target Namespace of Associated XML Schema. Serialized as `ds:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Custom XML Data Properties. Serialized as `ds:datastoreItem` */
export declare class DataStoreItem extends OxmlPartRootElement<SchemaReferences> {
    static _Q: string;
    static _A: string[];
    /** Custom XML Data ID. Serialized as `ds:itemID` */
    get itemId(): StringValue | undefined;
    set itemId(v: StringValue | undefined);
    /** Set of Associated XML Schemas. */
    get schemaReferences(): SchemaReferences | undefined;
}
export declare function initCustomXmlDataPropertiesNamespace(): {
    prefix: string;
    xmlns: string;
};
