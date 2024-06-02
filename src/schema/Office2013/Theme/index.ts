import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { Extension as AExtension } from '../../Drawing';


/** Defines the ThemeVariantList Class. Serialized as `thm15:themeVariantLst` */
export class ThemeVariantList extends OxmlCompositeElement<ThemeVariant> {

    public static override _Q = 'thm15:themeVariantLst';

}
/** Defines the ThemeVariant Class. Serialized as `thm15:themeVariant` */
export class ThemeVariant extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'thm15:themeVariant';
    public static override _A = [':name',':vid',':cx',':cy','r:id',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** vid. Serialized as `:vid` */
    public get vid(): StringValue | undefined { return this._g(':vid'); }
    public set vid(v: StringValue | undefined) { this._s(':vid', v); }
    /** cx. Serialized as `:cx` */
    public get x(): Int64Value | undefined { return this._g(':cx'); }
    public set x(v: Int64Value | undefined) { this._s(':cx', v); }
    /** cy. Serialized as `:cy` */
    public get y(): Int64Value | undefined { return this._g(':cy'); }
    public set y(v: Int64Value | undefined) { this._s(':cy', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `thm15:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'thm15:extLst';

}
/** Defines the ThemeFamily Class. Serialized as `thm15:themeFamily` */
export class ThemeFamily extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'thm15:themeFamily';
    public static override _A = [':name',':id',':vid',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** vid. Serialized as `:vid` */
    public get vid(): StringValue | undefined { return this._g(':vid'); }
    public set vid(v: StringValue | undefined) { this._s(':vid', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2013ThemeNamespace() {
    ThemeVariantList._C = {
        'thm15:themeVariant': ThemeVariant,
    };
    ThemeVariant._C = {
        'thm15:extLst': OfficeArtExtensionList,
    };
    ThemeVariant._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':vid': new OxmlAttr(':vid', OxmlType.StringValue),
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    ThemeFamily._C = {
        'thm15:extLst': OfficeArtExtensionList,
    };
    ThemeFamily._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':vid': new OxmlAttr(':vid', OxmlType.StringValue),
    };
    return {
        prefix: 'thm15',
        xmlns: 'http://schemas.microsoft.com/office/thememl/2012/main',
    };
}
