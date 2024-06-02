import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { HexBinaryValue } from '../../../../framework/types/HexBinaryValue';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { OnOffValue } from '../../../../framework/types/OnOffValue';
import { Extension as W16curExtension } from '../../../Office2021/Word/ExtensionList';
/** Defines the ExtensionList Class. Serialized as `w16cex:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<W16curExtension> {
    static _Q: string;
}
/** Defines the CommentExtensible Class. Serialized as `w16cex:commentExtensible` */
export declare class CommentExtensible extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** durableId. Serialized as `w16cex:durableId` */
    get durableId(): HexBinaryValue | undefined;
    set durableId(v: HexBinaryValue | undefined);
    /** dateUtc. Serialized as `w16cex:dateUtc` */
    get dateUtc(): DateTimeValue | undefined;
    set dateUtc(v: DateTimeValue | undefined);
    /** intelligentPlaceholder. Serialized as `w16cex:intelligentPlaceholder` */
    get intelligentPlaceholder(): OnOffValue | undefined;
    set intelligentPlaceholder(v: OnOffValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the CommentsExtensible Class. Serialized as `w16cex:commentsExtensible` */
export declare class CommentsExtensible extends OxmlPartRootElement<CommentExtensible | ExtensionList> {
    static _Q: string;
}
export declare function initOffice2021WordCommentsExtNamespace(): {
    prefix: string;
    xmlns: string;
};
