import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';


/** Defines the ContentTypeSchema Class. Serialized as `ct:contentTypeSchema` */
export class ContentTypeSchema extends OxmlCompositeElement {

    public static override _Q = 'ct:contentTypeSchema';
    public static override _A = ['ct:_','ma:_','ma:contentTypeName','ma:contentTypeID','ma:contentTypeVersion','ma:contentTypeDescription','ma:contentTypeScope','ma:versionID',];
    /** _. Serialized as `ct:_` */
    public get underScore(): StringValue | undefined { return this._g('ct:_'); }
    public set underScore(v: StringValue | undefined) { this._s('ct:_', v); }
    /** _. Serialized as `ma:_` */
    public get reservedAttributeString(): StringValue | undefined { return this._g('ma:_'); }
    public set reservedAttributeString(v: StringValue | undefined) { this._s('ma:_', v); }
    /** contentTypeName. Serialized as `ma:contentTypeName` */
    public get contentTypeName(): StringValue | undefined { return this._g('ma:contentTypeName'); }
    public set contentTypeName(v: StringValue | undefined) { this._s('ma:contentTypeName', v); }
    /** contentTypeID. Serialized as `ma:contentTypeID` */
    public get contentTypeID(): StringValue | undefined { return this._g('ma:contentTypeID'); }
    public set contentTypeID(v: StringValue | undefined) { this._s('ma:contentTypeID', v); }
    /** contentTypeVersion. Serialized as `ma:contentTypeVersion` */
    public get contentTypeVersion(): Int32Value | undefined { return this._g('ma:contentTypeVersion'); }
    public set contentTypeVersion(v: Int32Value | undefined) { this._s('ma:contentTypeVersion', v); }
    /** contentTypeDescription. Serialized as `ma:contentTypeDescription` */
    public get contentTypeDescription(): StringValue | undefined { return this._g('ma:contentTypeDescription'); }
    public set contentTypeDescription(v: StringValue | undefined) { this._s('ma:contentTypeDescription', v); }
    /** contentTypeScope. Serialized as `ma:contentTypeScope` */
    public get contentTypeScope(): StringValue | undefined { return this._g('ma:contentTypeScope'); }
    public set contentTypeScope(v: StringValue | undefined) { this._s('ma:contentTypeScope', v); }
    /** versionID. Serialized as `ma:versionID` */
    public get versionID(): StringValue | undefined { return this._g('ma:versionID'); }
    public set versionID(v: StringValue | undefined) { this._s('ma:versionID', v); }

}

export function initOfficeContentTypeNamespace() {
    ContentTypeSchema._D = {
        'ct:_': new OxmlAttr('ct:_', OxmlType.StringValue),
        'ma:_': new OxmlAttr('ma:_', OxmlType.StringValue),
        'ma:contentTypeName': new OxmlAttr('ma:contentTypeName', OxmlType.StringValue),
        'ma:contentTypeID': new OxmlAttr('ma:contentTypeID', OxmlType.StringValue),
        'ma:contentTypeVersion': new OxmlAttr('ma:contentTypeVersion', OxmlType.Int32Value),
        'ma:contentTypeDescription': new OxmlAttr('ma:contentTypeDescription', OxmlType.StringValue),
        'ma:contentTypeScope': new OxmlAttr('ma:contentTypeScope', OxmlType.StringValue),
        'ma:versionID': new OxmlAttr('ma:versionID', OxmlType.StringValue),
    };
    return {
        prefix: 'ct',
        xmlns: 'http://schemas.microsoft.com/office/2006/metadata/contentType',
    };
}
