import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as AExtension } from '../../../Drawing';


export enum Indefinite {
    /** undefined. Serialized value: `indefinite` */
    Indefinite = 'indefinite',
}

export const IndefiniteArray = [
    Indefinite.Indefinite,
] as const;

/** Defines the OfficeArtExtensionList Class. Serialized as `aanim:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'aanim:extLst';

}
/** Defines the AnimationProperties Class. Serialized as `aanim:animPr` */
export class AnimationProperties extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'aanim:animPr';
    public static override _A = [':name',':length',':count',':auto',':offset',':st',':end',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** length. Serialized as `:length` */
    public get length(): StringValue | undefined { return this._g(':length'); }
    public set length(v: StringValue | undefined) { this._s(':length', v); }
    /** count. Serialized as `:count` */
    public get count(): StringValue | undefined { return this._g(':count'); }
    public set count(v: StringValue | undefined) { this._s(':count', v); }
    /** auto. Serialized as `:auto` */
    public get auto(): BooleanValue | undefined { return this._g(':auto'); }
    public set auto(v: BooleanValue | undefined) { this._s(':auto', v); }
    /** offset. Serialized as `:offset` */
    public get offset(): StringValue | undefined { return this._g(':offset'); }
    public set offset(v: StringValue | undefined) { this._s(':offset', v); }
    /** st. Serialized as `:st` */
    public get st(): StringValue | undefined { return this._g(':st'); }
    public set st(v: StringValue | undefined) { this._s(':st', v); }
    /** end. Serialized as `:end` */
    public get end(): StringValue | undefined { return this._g(':end'); }
    public set end(v: StringValue | undefined) { this._s(':end', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2019DrawingAnimationNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    AnimationProperties._C = {
        'aanim:extLst': OfficeArtExtensionList,
    };
    AnimationProperties._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':length': new OxmlAttr(':length', OxmlType.StringValue),
        ':count': new OxmlAttr(':count', OxmlType.StringValue),
        ':auto': new OxmlAttr(':auto', OxmlType.BooleanValue),
        ':offset': new OxmlAttr(':offset', OxmlType.StringValue),
        ':st': new OxmlAttr(':st', OxmlType.StringValue),
        ':end': new OxmlAttr(':end', OxmlType.StringValue),
    };
    return {
        prefix: 'aanim',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2018/animation',
    };
}
