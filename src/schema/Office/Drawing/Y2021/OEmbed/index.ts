import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `aoe:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'aoe:extLst';

}
/** Defines the OEmbedShared Class. Serialized as `aoe:oembedShared` */
export class OEmbedShared extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'aoe:oembedShared';
    public static override _A = [':srcUrl',':type',];
    /** srcUrl. Serialized as `:srcUrl` */
    public get srcUrl(): StringValue | undefined { return this._g(':srcUrl'); }
    public set srcUrl(v: StringValue | undefined) { this._s(':srcUrl', v); }
    /** type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOfficeDrawingY2021OEmbedNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    OEmbedShared._C = {
        'aoe:extLst': OfficeArtExtensionList,
    };
    OEmbedShared._D = {
        ':srcUrl': new OxmlAttr(':srcUrl', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
    };
    return {
        prefix: 'aoe',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2021/oembed',
    };
}
