import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';
import { Extension as AExtension } from '../../../../Drawing';


/** Defines the OfficeArtExtensionList Class. Serialized as `asl:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'asl:extLst';

}
/** Defines the ScriptLink Class. Serialized as `asl:scriptLink` */
export class ScriptLink extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'asl:scriptLink';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOfficeDrawingY2021ScriptLinkNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    ScriptLink._C = {
        'asl:extLst': OfficeArtExtensionList,
    };
    ScriptLink._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    return {
        prefix: 'asl',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2021/scriptlink',
    };
}
