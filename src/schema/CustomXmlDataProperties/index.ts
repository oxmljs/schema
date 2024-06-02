import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';


/** Set of Associated XML Schemas. Serialized as `ds:schemaRefs` */
export class SchemaReferences extends OxmlCompositeElement<SchemaReference> {

    public static override _Q = 'ds:schemaRefs';

}
/** Associated XML Schema. Serialized as `ds:schemaRef` */
export class SchemaReference extends OxmlLeafElement {

    public static override _Q = 'ds:schemaRef';
    public static override _A = ['ds:uri',];
    /** Target Namespace of Associated XML Schema. Serialized as `ds:uri` */
    public get uri(): StringValue | undefined { return this._g('ds:uri'); }
    public set uri(v: StringValue | undefined) { this._s('ds:uri', v); }

}
/** Custom XML Data Properties. Serialized as `ds:datastoreItem` */
export class DataStoreItem extends OxmlPartRootElement<SchemaReferences> {

    public static override _Q = 'ds:datastoreItem';
    public static override _A = ['ds:itemID',];
    /** Custom XML Data ID. Serialized as `ds:itemID` */
    public get itemId(): StringValue | undefined { return this._g('ds:itemID'); }
    public set itemId(v: StringValue | undefined) { this._s('ds:itemID', v); }
    /** Set of Associated XML Schemas. */
    public get schemaReferences(): SchemaReferences | undefined { return this._f(SchemaReferences); }

}

export function initCustomXmlDataPropertiesNamespace() {
    SchemaReferences._C = {
        'ds:schemaRef': SchemaReference,
    };
    SchemaReference._D = {
        'ds:uri': new OxmlAttr('ds:uri', OxmlType.StringValue),
    };
    DataStoreItem._C = {
        'ds:schemaRefs': SchemaReferences,
    };
    DataStoreItem._D = {
        'ds:itemID': new OxmlAttr('ds:itemID', OxmlType.StringValue),
    };
    return {
        prefix: 'ds',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/customXml',
    };
}
