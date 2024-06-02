import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { StringValue } from '../../framework/types/StringValue';
/** Custom XML Schema Reference. Serialized as `sl:schema` */
export declare class Schema extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Custom XML Schema Namespace. Serialized as `sl:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Resource File Location. Serialized as `sl:manifestLocation` */
    get manifestLocation(): StringValue | undefined;
    set manifestLocation(v: StringValue | undefined);
    /** Custom XML Schema Location. Serialized as `sl:schemaLocation` */
    get schemaLocation(): StringValue | undefined;
    set schemaLocation(v: StringValue | undefined);
}
/** Embedded Custom XML Schema Supplementary Data. Serialized as `sl:schemaLibrary` */
export declare class SchemaLibrary extends OxmlCompositeElement<Schema> {
    static _Q: string;
}
export declare function initCustomXmlSchemaReferencesNamespace(): {
    prefix: string;
    xmlns: string;
};
