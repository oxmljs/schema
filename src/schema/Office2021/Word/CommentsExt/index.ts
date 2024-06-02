import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { HexBinaryValue } from '../../../../framework/types/HexBinaryValue';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { OnOffValue } from '../../../../framework/types/OnOffValue';
import { Extension as W16curExtension } from '../../../Office2021/Word/ExtensionList';


/** Defines the ExtensionList Class. Serialized as `w16cex:extLst` */
export class ExtensionList extends OxmlCompositeElement<W16curExtension> {

    public static override _Q = 'w16cex:extLst';

}
/** Defines the CommentExtensible Class. Serialized as `w16cex:commentExtensible` */
export class CommentExtensible extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'w16cex:commentExtensible';
    public static override _A = ['w16cex:durableId','w16cex:dateUtc','w16cex:intelligentPlaceholder',];
    /** durableId. Serialized as `w16cex:durableId` */
    public get durableId(): HexBinaryValue | undefined { return this._g('w16cex:durableId'); }
    public set durableId(v: HexBinaryValue | undefined) { this._s('w16cex:durableId', v); }
    /** dateUtc. Serialized as `w16cex:dateUtc` */
    public get dateUtc(): DateTimeValue | undefined { return this._g('w16cex:dateUtc'); }
    public set dateUtc(v: DateTimeValue | undefined) { this._s('w16cex:dateUtc', v); }
    /** intelligentPlaceholder. Serialized as `w16cex:intelligentPlaceholder` */
    public get intelligentPlaceholder(): OnOffValue | undefined { return this._g('w16cex:intelligentPlaceholder'); }
    public set intelligentPlaceholder(v: OnOffValue | undefined) { this._s('w16cex:intelligentPlaceholder', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the CommentsExtensible Class. Serialized as `w16cex:commentsExtensible` */
export class CommentsExtensible extends OxmlPartRootElement<CommentExtensible | ExtensionList> {

    public static override _Q = 'w16cex:commentsExtensible';

}

export function initOffice2021WordCommentsExtNamespace() {
    ExtensionList._C = {
        'w16cur:ext': W16curExtension,
    };
    CommentExtensible._C = {
        'w16cex:extLst': ExtensionList,
    };
    CommentExtensible._D = {
        'w16cex:durableId': new OxmlAttr('w16cex:durableId', OxmlType.HexBinaryValue),
        'w16cex:dateUtc': new OxmlAttr('w16cex:dateUtc', OxmlType.DateTimeValue),
        'w16cex:intelligentPlaceholder': new OxmlAttr('w16cex:intelligentPlaceholder', OxmlType.OnOffValue),
    };
    CommentsExtensible._C = {
        'w16cex:commentExtensible': CommentExtensible,
        'w16cex:extLst': ExtensionList,
    };
    return {
        prefix: 'w16cex',
        xmlns: 'http://schemas.microsoft.com/office/word/2018/wordml/cex',
    };
}
