import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { HexBinaryValue } from '../../../../framework/types/HexBinaryValue';


/** Defines the CommentId Class. Serialized as `w16cid:commentId` */
export class CommentId extends OxmlLeafElement {

    public static override _Q = 'w16cid:commentId';
    public static override _A = ['w16cid:paraId','w16cid:durableId',];
    /** paraId. Serialized as `w16cid:paraId` */
    public get paraId(): HexBinaryValue | undefined { return this._g('w16cid:paraId'); }
    public set paraId(v: HexBinaryValue | undefined) { this._s('w16cid:paraId', v); }
    /** durableId. Serialized as `w16cid:durableId` */
    public get durableId(): HexBinaryValue | undefined { return this._g('w16cid:durableId'); }
    public set durableId(v: HexBinaryValue | undefined) { this._s('w16cid:durableId', v); }

}
/** Defines the CommentsIds Class. Serialized as `w16cid:commentsIds` */
export class CommentsIds extends OxmlPartRootElement<CommentId> {

    public static override _Q = 'w16cid:commentsIds';

}

export function initOffice2019WordCidNamespace() {
    CommentId._D = {
        'w16cid:paraId': new OxmlAttr('w16cid:paraId', OxmlType.HexBinaryValue),
        'w16cid:durableId': new OxmlAttr('w16cid:durableId', OxmlType.HexBinaryValue),
    };
    CommentsIds._C = {
        'w16cid:commentId': CommentId,
    };
    return {
        prefix: 'w16cid',
        xmlns: 'http://schemas.microsoft.com/office/word/2016/wordml/cid',
    };
}
