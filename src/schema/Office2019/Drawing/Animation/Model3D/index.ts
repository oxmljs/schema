import { OxmlCompositeElement } from '../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../framework/OxmlType';
import { StringValue } from '../../../../../framework/types/StringValue';
import { BooleanValue } from '../../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../../framework/types/UInt32Value';
import { Int32Value } from '../../../../../framework/types/Int32Value';
import { Extension as AExtension } from '../../../../Drawing';
import { OfficeArtExtensionList as AanimOfficeArtExtensionList } from '../../../../Office2019/Drawing/Animation';


/** Defines the OfficeArtExtensionList Class. Serialized as `a3danim:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'a3danim:extLst';

}
/** Defines the AnimationProperties Class. Serialized as `a3danim:animPr` */
export class AnimationProperties extends OxmlCompositeElement<AanimOfficeArtExtensionList> {

    public static override _Q = 'a3danim:animPr';
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
    /** Returns AanimOfficeArtExtensionList. */
    public get officeArtExtensionList(): AanimOfficeArtExtensionList | undefined { return this._f(AanimOfficeArtExtensionList); }

}
/** Defines the PosterFrame Class. Serialized as `a3danim:posterFrame` */
export class PosterFrame extends OxmlLeafElement {

    public static override _Q = 'a3danim:posterFrame';
    public static override _A = [':animId',':frame',];
    /** animId. Serialized as `:animId` */
    public get animId(): UInt32Value | undefined { return this._g(':animId'); }
    public set animId(v: UInt32Value | undefined) { this._s(':animId', v); }
    /** frame. Serialized as `:frame` */
    public get frame(): Int32Value | undefined { return this._g(':frame'); }
    public set frame(v: Int32Value | undefined) { this._s(':frame', v); }

}
/** Defines the EmbeddedAnimation Class. Serialized as `a3danim:embedAnim` */
export class EmbeddedAnimation extends OxmlCompositeElement<AnimationProperties | OfficeArtExtensionList> {

    public static override _Q = 'a3danim:embedAnim';
    public static override _A = [':animId',];
    /** animId. Serialized as `:animId` */
    public get animId(): UInt32Value | undefined { return this._g(':animId'); }
    public set animId(v: UInt32Value | undefined) { this._s(':animId', v); }
    /** Returns AnimationProperties. */
    public get animationProperties(): AnimationProperties | undefined { return this._f(AnimationProperties); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}

export function initOffice2019DrawingAnimationModel3DNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    AnimationProperties._C = {
        'aanim:extLst': AanimOfficeArtExtensionList,
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
    PosterFrame._D = {
        ':animId': new OxmlAttr(':animId', OxmlType.UInt32Value),
        ':frame': new OxmlAttr(':frame', OxmlType.Int32Value),
    };
    EmbeddedAnimation._C = {
        'a3danim:animPr': AnimationProperties,
        'a3danim:extLst': OfficeArtExtensionList,
    };
    EmbeddedAnimation._D = {
        ':animId': new OxmlAttr(':animId', OxmlType.UInt32Value),
    };
    return {
        prefix: 'a3danim',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2018/animation/model3d',
    };
}
