import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { HexBinaryValue } from '../../../../framework/types/HexBinaryValue';
/** Defines the CommentId Class. Serialized as `w16cid:commentId` */
export declare class CommentId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** paraId. Serialized as `w16cid:paraId` */
    get paraId(): HexBinaryValue | undefined;
    set paraId(v: HexBinaryValue | undefined);
    /** durableId. Serialized as `w16cid:durableId` */
    get durableId(): HexBinaryValue | undefined;
    set durableId(v: HexBinaryValue | undefined);
}
/** Defines the CommentsIds Class. Serialized as `w16cid:commentsIds` */
export declare class CommentsIds extends OxmlPartRootElement<CommentId> {
    static _Q: string;
}
export declare function initOffice2019WordCidNamespace(): {
    prefix: string;
    xmlns: string;
};
