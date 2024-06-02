import { OxmlCompositeElement } from '../../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../../framework/OxmlType';
import { StringValue } from '../../../../../../framework/types/StringValue';
import { SlideMonikerList as PcSlideMonikerList } from '../../../../../Office2016/Presentation/Command';


/** Defines the CommentReplyV2Moniker Class. Serialized as `pc2:cmRplyMk` */
export class CommentReplyV2Moniker extends OxmlLeafElement {

    public static override _Q = 'pc2:cmRplyMk';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the CommentV2Moniker Class. Serialized as `pc2:cmMK` */
export class CommentV2Moniker extends OxmlLeafElement {

    public static override _Q = 'pc2:cmMK';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the CommentReplyV2MonikerList Class. Serialized as `pc2:cmRplyMkLst` */
export class CommentReplyV2MonikerList extends OxmlCompositeElement<CommentV2MonikerList | CommentReplyV2Moniker> {

    public static override _Q = 'pc2:cmRplyMkLst';
    /** Returns CommentV2MonikerList. */
    public get commentV2MonikerList(): CommentV2MonikerList | undefined { return this._f(CommentV2MonikerList); }
    /** Returns CommentReplyV2Moniker. */
    public get commentReplyV2Moniker(): CommentReplyV2Moniker | undefined { return this._f(CommentReplyV2Moniker); }

}
/** Defines the CommentV2MonikerList Class. Serialized as `pc2:cmMkLst` */
export class CommentV2MonikerList extends OxmlCompositeElement<PcSlideMonikerList | CommentV2Moniker> {

    public static override _Q = 'pc2:cmMkLst';
    /** Returns PcSlideMonikerList. */
    public get slideMonikerList(): PcSlideMonikerList | undefined { return this._f(PcSlideMonikerList); }
    /** Returns CommentV2Moniker. */
    public get commentV2Moniker(): CommentV2Moniker | undefined { return this._f(CommentV2Moniker); }

}

export function initOfficePowerPointY2019MainCommandNamespace() {
    CommentReplyV2Moniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    CommentV2Moniker._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    CommentReplyV2MonikerList._C = {
        'pc2:cmMkLst': CommentV2MonikerList,
        'pc2:cmRplyMk': CommentReplyV2Moniker,
    };
    CommentV2MonikerList._C = {
        'pc:sldMkLst': PcSlideMonikerList,
        'pc2:cmMK': CommentV2Moniker,
    };
    return {
        prefix: 'pc2',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2019/9/main/command',
    };
}
