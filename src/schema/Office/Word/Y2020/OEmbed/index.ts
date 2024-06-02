import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../../framework/types/BooleanValue';


/** Defines the OEmbed Class. Serialized as `woe:oembed` */
export class OEmbed extends OxmlLeafElement {

    public static override _Q = 'woe:oembed';
    public static override _A = [':oEmbedUrl',':mediaType',':picLocksAutoForOEmbed',];
    /** oEmbedUrl. Serialized as `:oEmbedUrl` */
    public get oEmbedUrl(): StringValue | undefined { return this._g(':oEmbedUrl'); }
    public set oEmbedUrl(v: StringValue | undefined) { this._s(':oEmbedUrl', v); }
    /** mediaType. Serialized as `:mediaType` */
    public get mediaType(): StringValue | undefined { return this._g(':mediaType'); }
    public set mediaType(v: StringValue | undefined) { this._s(':mediaType', v); }
    /** picLocksAutoForOEmbed. Serialized as `:picLocksAutoForOEmbed` */
    public get picLocksAutoForOEmbed(): BooleanValue | undefined { return this._g(':picLocksAutoForOEmbed'); }
    public set picLocksAutoForOEmbed(v: BooleanValue | undefined) { this._s(':picLocksAutoForOEmbed', v); }

}

export function initOfficeWordY2020OEmbedNamespace() {
    OEmbed._D = {
        ':oEmbedUrl': new OxmlAttr(':oEmbedUrl', OxmlType.StringValue),
        ':mediaType': new OxmlAttr(':mediaType', OxmlType.StringValue),
        ':picLocksAutoForOEmbed': new OxmlAttr(':picLocksAutoForOEmbed', OxmlType.BooleanValue),
    };
    return {
        prefix: 'woe',
        xmlns: 'http://schemas.microsoft.com/office/word/2020/oembed',
    };
}
