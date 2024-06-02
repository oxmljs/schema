import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';


export enum TrueOnlyValues {
    /** undefined. Serialized value: `true` */
    True = 'true',
}

export const TrueOnlyValuesArray = [
    TrueOnlyValues.True,
] as const;

/** Defines the Dummy Class. Serialized as `ma:DummyContentTypeElement` */
export class Dummy extends OxmlLeafElement {

    public static override _Q = 'ma:DummyContentTypeElement';
    public static override _A = [':decimals',':default',':description',':displayName',':fieldsID',':format',':hidden',':index',':internalName',':LCID',':list',':percentage',':readOnly',':requiredMultiChoice',':root',':showField',':web',];
    /** decimals. Serialized as `:decimals` */
    public get decimals(): StringValue | undefined { return this._g(':decimals'); }
    public set decimals(v: StringValue | undefined) { this._s(':decimals', v); }
    /** default. Serialized as `:default` */
    public get default(): StringValue | undefined { return this._g(':default'); }
    public set default(v: StringValue | undefined) { this._s(':default', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** displayName. Serialized as `:displayName` */
    public get displayName(): StringValue | undefined { return this._g(':displayName'); }
    public set displayName(v: StringValue | undefined) { this._s(':displayName', v); }
    /** fieldsID. Serialized as `:fieldsID` */
    public get fieldsID(): StringValue | undefined { return this._g(':fieldsID'); }
    public set fieldsID(v: StringValue | undefined) { this._s(':fieldsID', v); }
    /** format. Serialized as `:format` */
    public get format(): StringValue | undefined { return this._g(':format'); }
    public set format(v: StringValue | undefined) { this._s(':format', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): StringValue | undefined { return this._g(':hidden'); }
    public set hidden(v: StringValue | undefined) { this._s(':hidden', v); }
    /** index. Serialized as `:index` */
    public get index(): Int32Value | undefined { return this._g(':index'); }
    public set index(v: Int32Value | undefined) { this._s(':index', v); }
    /** internalName. Serialized as `:internalName` */
    public get internalName(): StringValue | undefined { return this._g(':internalName'); }
    public set internalName(v: StringValue | undefined) { this._s(':internalName', v); }
    /** LCID. Serialized as `:LCID` */
    public get lCID(): Int32Value | undefined { return this._g(':LCID'); }
    public set lCID(v: Int32Value | undefined) { this._s(':LCID', v); }
    /** list. Serialized as `:list` */
    public get list(): StringValue | undefined { return this._g(':list'); }
    public set list(v: StringValue | undefined) { this._s(':list', v); }
    /** percentage. Serialized as `:percentage` */
    public get percentage(): StringValue | undefined { return this._g(':percentage'); }
    public set percentage(v: StringValue | undefined) { this._s(':percentage', v); }
    /** readOnly. Serialized as `:readOnly` */
    public get readOnly(): StringValue | undefined { return this._g(':readOnly'); }
    public set readOnly(v: StringValue | undefined) { this._s(':readOnly', v); }
    /** requiredMultiChoice. Serialized as `:requiredMultiChoice` */
    public get requiredMultiChoice(): StringValue | undefined { return this._g(':requiredMultiChoice'); }
    public set requiredMultiChoice(v: StringValue | undefined) { this._s(':requiredMultiChoice', v); }
    /** root. Serialized as `:root` */
    public get root(): TrueOnlyValues | undefined { return this._g(':root'); }
    public set root(v: TrueOnlyValues | undefined) { this._s(':root', v); }
    /** showField. Serialized as `:showField` */
    public get showField(): StringValue | undefined { return this._g(':showField'); }
    public set showField(v: StringValue | undefined) { this._s(':showField', v); }
    /** web. Serialized as `:web` */
    public get web(): StringValue | undefined { return this._g(':web'); }
    public set web(v: StringValue | undefined) { this._s(':web', v); }

}

export function initOfficeMetaAttributesNamespace() {
    Dummy._D = {
        ':decimals': new OxmlAttr(':decimals', OxmlType.StringValue),
        ':default': new OxmlAttr(':default', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':displayName': new OxmlAttr(':displayName', OxmlType.StringValue),
        ':fieldsID': new OxmlAttr(':fieldsID', OxmlType.StringValue),
        ':format': new OxmlAttr(':format', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.StringValue),
        ':index': new OxmlAttr(':index', OxmlType.Int32Value),
        ':internalName': new OxmlAttr(':internalName', OxmlType.StringValue),
        ':LCID': new OxmlAttr(':LCID', OxmlType.Int32Value),
        ':list': new OxmlAttr(':list', OxmlType.StringValue),
        ':percentage': new OxmlAttr(':percentage', OxmlType.StringValue),
        ':readOnly': new OxmlAttr(':readOnly', OxmlType.StringValue),
        ':requiredMultiChoice': new OxmlAttr(':requiredMultiChoice', OxmlType.StringValue),
        ':root': new OxmlAttr(':root', OxmlType.EnumValue, TrueOnlyValuesArray),
        ':showField': new OxmlAttr(':showField', OxmlType.StringValue),
        ':web': new OxmlAttr(':web', OxmlType.StringValue),
    };
    return {
        prefix: 'ma',
        xmlns: 'http://schemas.microsoft.com/office/2006/metadata/properties/metaAttributes',
    };
}
