import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';


/** Custom XML Schema Reference. Serialized as `sl:schema` */
export class Schema extends OxmlLeafElement {

    public static override _Q = 'sl:schema';
    public static override _A = ['sl:uri','sl:manifestLocation','sl:schemaLocation',];
    /** Custom XML Schema Namespace. Serialized as `sl:uri` */
    public get uri(): StringValue | undefined { return this._g('sl:uri'); }
    public set uri(v: StringValue | undefined) { this._s('sl:uri', v); }
    /** Resource File Location. Serialized as `sl:manifestLocation` */
    public get manifestLocation(): StringValue | undefined { return this._g('sl:manifestLocation'); }
    public set manifestLocation(v: StringValue | undefined) { this._s('sl:manifestLocation', v); }
    /** Custom XML Schema Location. Serialized as `sl:schemaLocation` */
    public get schemaLocation(): StringValue | undefined { return this._g('sl:schemaLocation'); }
    public set schemaLocation(v: StringValue | undefined) { this._s('sl:schemaLocation', v); }

}
/** Embedded Custom XML Schema Supplementary Data. Serialized as `sl:schemaLibrary` */
export class SchemaLibrary extends OxmlCompositeElement<Schema> {

    public static override _Q = 'sl:schemaLibrary';

}

export function initCustomXmlSchemaReferencesNamespace() {
    Schema._D = {
        'sl:uri': new OxmlAttr('sl:uri', OxmlType.StringValue),
        'sl:manifestLocation': new OxmlAttr('sl:manifestLocation', OxmlType.StringValue),
        'sl:schemaLocation': new OxmlAttr('sl:schemaLocation', OxmlType.StringValue),
    };
    SchemaLibrary._C = {
        'sl:schema': Schema,
    };
    return {
        prefix: 'sl',
        xmlns: 'http://schemas.openxmlformats.org/schemaLibrary/2006/main',
    };
}
