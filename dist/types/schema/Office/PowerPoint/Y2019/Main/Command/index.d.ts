import { OxmlCompositeElement } from '../../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../../../framework/types/StringValue';
import { SlideMonikerList as PcSlideMonikerList } from '../../../../../Office2016/Presentation/Command';
/** Defines the CommentReplyV2Moniker Class. Serialized as `pc2:cmRplyMk` */
export declare class CommentReplyV2Moniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the CommentV2Moniker Class. Serialized as `pc2:cmMK` */
export declare class CommentV2Moniker extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the CommentReplyV2MonikerList Class. Serialized as `pc2:cmRplyMkLst` */
export declare class CommentReplyV2MonikerList extends OxmlCompositeElement<CommentV2MonikerList | CommentReplyV2Moniker> {
    static _Q: string;
    /** Returns CommentV2MonikerList. */
    get commentV2MonikerList(): CommentV2MonikerList | undefined;
    /** Returns CommentReplyV2Moniker. */
    get commentReplyV2Moniker(): CommentReplyV2Moniker | undefined;
}
/** Defines the CommentV2MonikerList Class. Serialized as `pc2:cmMkLst` */
export declare class CommentV2MonikerList extends OxmlCompositeElement<PcSlideMonikerList | CommentV2Moniker> {
    static _Q: string;
    /** Returns PcSlideMonikerList. */
    get slideMonikerList(): PcSlideMonikerList | undefined;
    /** Returns CommentV2Moniker. */
    get commentV2Moniker(): CommentV2Moniker | undefined;
}
export declare function initOfficePowerPointY2019MainCommandNamespace(): {
    prefix: string;
    xmlns: string;
};
