import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { ListValue } from '../../../../framework/types/ListValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { Int64Value } from '../../../../framework/types/Int64Value';
import { SlideMonikerList as PcSlideMonikerList } from '../../../Office2016/Presentation/Command';
import { SlideLayoutMonikerList as PcSlideLayoutMonikerList } from '../../../Office2016/Presentation/Command';
import { MainMasterMonikerList as PcMainMasterMonikerList } from '../../../Office2016/Presentation/Command';
import { DeMkLstDrawingElementMonikerList as OacDeMkLstDrawingElementMonikerList } from '../../../Office2016/Drawing/Command';
import { TextBodyMonikerList as OacTextBodyMonikerList } from '../../../Office2016/Drawing/Command';
import { TextCharRangeMonikerList as OacTextCharRangeMonikerList } from '../../../Office2016/Drawing/Command';
import { TableCellMonikerList as OacTableCellMonikerList } from '../../../Office2016/Drawing/Command';
import { TableRowMonikerList as OacTableRowMonikerList } from '../../../Office2016/Drawing/Command';
import { TableColumnMonikerList as OacTableColumnMonikerList } from '../../../Office2016/Drawing/Command';
import { Extension as PExtension } from '../../../Presentation';
import { BodyProperties as ABodyProperties } from '../../../Drawing';
import { ListStyle as AListStyle } from '../../../Drawing';
import { Paragraph as AParagraph } from '../../../Drawing';
export declare enum CommentStatus {
    /** undefined. Serialized value: `active` */
    Active = "active",
    /** undefined. Serialized value: `resolved` */
    Resolved = "resolved",
    /** undefined. Serialized value: `closed` */
    Closed = "closed"
}
export declare const CommentStatusArray: readonly [CommentStatus.Active, CommentStatus.Resolved, CommentStatus.Closed];
/** Defines the Comment Class. Serialized as `p188:cm` */
export declare class Comment extends OxmlCompositeElement<PcSlideMonikerList | PcSlideLayoutMonikerList | PcMainMasterMonikerList | OacDeMkLstDrawingElementMonikerList | OacTextBodyMonikerList | OacTextCharRangeMonikerList | OacTableCellMonikerList | OacTableRowMonikerList | OacTableColumnMonikerList | CommentUnknownAnchor | Point2DType | CommentReplyList | TextBodyType | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** authorId. Serialized as `:authorId` */
    get authorId(): StringValue | undefined;
    set authorId(v: StringValue | undefined);
    /** status. Serialized as `:status` */
    get status(): CommentStatus | undefined;
    set status(v: CommentStatus | undefined);
    /** created. Serialized as `:created` */
    get created(): DateTimeValue | undefined;
    set created(v: DateTimeValue | undefined);
    /** tags. Serialized as `:tags` */
    get tags(): ListValue<StringValue> | undefined;
    set tags(v: ListValue<StringValue> | undefined);
    /** likes. Serialized as `:likes` */
    get likes(): ListValue<StringValue> | undefined;
    set likes(v: ListValue<StringValue> | undefined);
    /** startDate. Serialized as `:startDate` */
    get startDate(): DateTimeValue | undefined;
    set startDate(v: DateTimeValue | undefined);
    /** dueDate. Serialized as `:dueDate` */
    get dueDate(): DateTimeValue | undefined;
    set dueDate(v: DateTimeValue | undefined);
    /** assignedTo. Serialized as `:assignedTo` */
    get assignedTo(): ListValue<StringValue> | undefined;
    set assignedTo(v: ListValue<StringValue> | undefined);
    /** complete. Serialized as `:complete` */
    get complete(): Int32Value | undefined;
    set complete(v: Int32Value | undefined);
    /** priority. Serialized as `:priority` */
    get priority(): UInt32Value | undefined;
    set priority(v: UInt32Value | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
}
/** Defines the CommentReplyList Class. Serialized as `p188:replyLst` */
export declare class CommentReplyList extends OxmlCompositeElement<CommentReply> {
    static _Q: string;
}
/** Defines the Point2DType Class. Serialized as `p188:pos` */
export declare class Point2DType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** X-Axis Coordinate. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Axis Coordinate. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
}
/** Defines the CommentReply Class. Serialized as `p188:reply` */
export declare class CommentReply extends OxmlCompositeElement<TextBodyType | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** authorId. Serialized as `:authorId` */
    get authorId(): StringValue | undefined;
    set authorId(v: StringValue | undefined);
    /** status. Serialized as `:status` */
    get status(): CommentStatus | undefined;
    set status(v: CommentStatus | undefined);
    /** created. Serialized as `:created` */
    get created(): DateTimeValue | undefined;
    set created(v: DateTimeValue | undefined);
    /** tags. Serialized as `:tags` */
    get tags(): ListValue<StringValue> | undefined;
    set tags(v: ListValue<StringValue> | undefined);
    /** likes. Serialized as `:likes` */
    get likes(): ListValue<StringValue> | undefined;
    set likes(v: ListValue<StringValue> | undefined);
    /** Returns TextBodyType. */
    get textBodyType(): TextBodyType | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Author Class. Serialized as `p188:author` */
export declare class Author extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** initials. Serialized as `:initials` */
    get initials(): StringValue | undefined;
    set initials(v: StringValue | undefined);
    /** userId. Serialized as `:userId` */
    get userId(): StringValue | undefined;
    set userId(v: StringValue | undefined);
    /** providerId. Serialized as `:providerId` */
    get providerId(): StringValue | undefined;
    set providerId(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the CommentRelationship Class. Serialized as `p188:commentRel` */
export declare class CommentRelationship extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the CommentList Class. Serialized as `p188:cmLst` */
export declare class CommentList extends OxmlPartRootElement<Comment> {
    static _Q: string;
}
/** Defines the AuthorList Class. Serialized as `p188:authorLst` */
export declare class AuthorList extends OxmlPartRootElement<Author> {
    static _Q: string;
}
/** Defines the CommentUnknownAnchor Class. Serialized as `p188:unknownAnchor` */
export declare class CommentUnknownAnchor extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the ExtensionList Class. Serialized as `p188:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<PExtension> {
    static _Q: string;
}
/** Defines the TextBodyType Class. Serialized as `p188:txBody` */
export declare class TextBodyType extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
export declare function initOffice2021PowerPointCommentNamespace(): {
    prefix: string;
    xmlns: string;
};
