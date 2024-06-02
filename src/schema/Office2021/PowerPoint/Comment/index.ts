import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
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


export enum CommentStatus {
    /** undefined. Serialized value: `active` */
    Active = 'active',
    /** undefined. Serialized value: `resolved` */
    Resolved = 'resolved',
    /** undefined. Serialized value: `closed` */
    Closed = 'closed',
}

export const CommentStatusArray = [
    CommentStatus.Active,
    CommentStatus.Resolved,
    CommentStatus.Closed,
] as const;

/** Defines the Comment Class. Serialized as `p188:cm` */
export class Comment extends OxmlCompositeElement<PcSlideMonikerList | PcSlideLayoutMonikerList | PcMainMasterMonikerList | OacDeMkLstDrawingElementMonikerList | OacTextBodyMonikerList | OacTextCharRangeMonikerList | OacTableCellMonikerList | OacTableRowMonikerList | OacTableColumnMonikerList | CommentUnknownAnchor | Point2DType | CommentReplyList | TextBodyType | ExtensionList> {

    public static override _Q = 'p188:cm';
    public static override _A = [':id',':authorId',':status',':created',':tags',':likes',':startDate',':dueDate',':assignedTo',':complete',':priority',':title',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** authorId. Serialized as `:authorId` */
    public get authorId(): StringValue | undefined { return this._g(':authorId'); }
    public set authorId(v: StringValue | undefined) { this._s(':authorId', v); }
    /** status. Serialized as `:status` */
    public get status(): CommentStatus | undefined { return this._g(':status'); }
    public set status(v: CommentStatus | undefined) { this._s(':status', v); }
    /** created. Serialized as `:created` */
    public get created(): DateTimeValue | undefined { return this._g(':created'); }
    public set created(v: DateTimeValue | undefined) { this._s(':created', v); }
    /** tags. Serialized as `:tags` */
    public get tags(): ListValue<StringValue> | undefined { return this._g(':tags'); }
    public set tags(v: ListValue<StringValue> | undefined) { this._s(':tags', v); }
    /** likes. Serialized as `:likes` */
    public get likes(): ListValue<StringValue> | undefined { return this._g(':likes'); }
    public set likes(v: ListValue<StringValue> | undefined) { this._s(':likes', v); }
    /** startDate. Serialized as `:startDate` */
    public get startDate(): DateTimeValue | undefined { return this._g(':startDate'); }
    public set startDate(v: DateTimeValue | undefined) { this._s(':startDate', v); }
    /** dueDate. Serialized as `:dueDate` */
    public get dueDate(): DateTimeValue | undefined { return this._g(':dueDate'); }
    public set dueDate(v: DateTimeValue | undefined) { this._s(':dueDate', v); }
    /** assignedTo. Serialized as `:assignedTo` */
    public get assignedTo(): ListValue<StringValue> | undefined { return this._g(':assignedTo'); }
    public set assignedTo(v: ListValue<StringValue> | undefined) { this._s(':assignedTo', v); }
    /** complete. Serialized as `:complete` */
    public get complete(): Int32Value | undefined { return this._g(':complete'); }
    public set complete(v: Int32Value | undefined) { this._s(':complete', v); }
    /** priority. Serialized as `:priority` */
    public get priority(): UInt32Value | undefined { return this._g(':priority'); }
    public set priority(v: UInt32Value | undefined) { this._s(':priority', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }

}
/** Defines the CommentReplyList Class. Serialized as `p188:replyLst` */
export class CommentReplyList extends OxmlCompositeElement<CommentReply> {

    public static override _Q = 'p188:replyLst';

}
/** Defines the Point2DType Class. Serialized as `p188:pos` */
export class Point2DType extends OxmlLeafElement {

    public static override _Q = 'p188:pos';
    public static override _A = [':x',':y',];
    /** X-Axis Coordinate. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Axis Coordinate. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }

}
/** Defines the CommentReply Class. Serialized as `p188:reply` */
export class CommentReply extends OxmlCompositeElement<TextBodyType | ExtensionList> {

    public static override _Q = 'p188:reply';
    public static override _A = [':id',':authorId',':status',':created',':tags',':likes',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** authorId. Serialized as `:authorId` */
    public get authorId(): StringValue | undefined { return this._g(':authorId'); }
    public set authorId(v: StringValue | undefined) { this._s(':authorId', v); }
    /** status. Serialized as `:status` */
    public get status(): CommentStatus | undefined { return this._g(':status'); }
    public set status(v: CommentStatus | undefined) { this._s(':status', v); }
    /** created. Serialized as `:created` */
    public get created(): DateTimeValue | undefined { return this._g(':created'); }
    public set created(v: DateTimeValue | undefined) { this._s(':created', v); }
    /** tags. Serialized as `:tags` */
    public get tags(): ListValue<StringValue> | undefined { return this._g(':tags'); }
    public set tags(v: ListValue<StringValue> | undefined) { this._s(':tags', v); }
    /** likes. Serialized as `:likes` */
    public get likes(): ListValue<StringValue> | undefined { return this._g(':likes'); }
    public set likes(v: ListValue<StringValue> | undefined) { this._s(':likes', v); }
    /** Returns TextBodyType. */
    public get textBodyType(): TextBodyType | undefined { return this._f(TextBodyType); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Author Class. Serialized as `p188:author` */
export class Author extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p188:author';
    public static override _A = [':id',':name',':initials',':userId',':providerId',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** initials. Serialized as `:initials` */
    public get initials(): StringValue | undefined { return this._g(':initials'); }
    public set initials(v: StringValue | undefined) { this._s(':initials', v); }
    /** userId. Serialized as `:userId` */
    public get userId(): StringValue | undefined { return this._g(':userId'); }
    public set userId(v: StringValue | undefined) { this._s(':userId', v); }
    /** providerId. Serialized as `:providerId` */
    public get providerId(): StringValue | undefined { return this._g(':providerId'); }
    public set providerId(v: StringValue | undefined) { this._s(':providerId', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the CommentRelationship Class. Serialized as `p188:commentRel` */
export class CommentRelationship extends OxmlLeafElement {

    public static override _Q = 'p188:commentRel';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the CommentList Class. Serialized as `p188:cmLst` */
export class CommentList extends OxmlPartRootElement<Comment> {

    public static override _Q = 'p188:cmLst';

}
/** Defines the AuthorList Class. Serialized as `p188:authorLst` */
export class AuthorList extends OxmlPartRootElement<Author> {

    public static override _Q = 'p188:authorLst';

}
/** Defines the CommentUnknownAnchor Class. Serialized as `p188:unknownAnchor` */
export class CommentUnknownAnchor extends OxmlLeafElement {

    public static override _Q = 'p188:unknownAnchor';

}
/** Defines the ExtensionList Class. Serialized as `p188:extLst` */
export class ExtensionList extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p188:extLst';

}
/** Defines the TextBodyType Class. Serialized as `p188:txBody` */
export class TextBodyType extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    public static override _Q = 'p188:txBody';
    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}

export function initOffice2021PowerPointCommentNamespace() {
    Comment._C = {
        'pc:sldMkLst': PcSlideMonikerList,
        'pc:sldLayoutMkLst': PcSlideLayoutMonikerList,
        'pc:sldMasterMkLst': PcMainMasterMonikerList,
        'oac:deMkLst': OacDeMkLstDrawingElementMonikerList,
        'oac:txBodyMkLst': OacTextBodyMonikerList,
        'oac:txMkLst': OacTextCharRangeMonikerList,
        'oac:tcMkLst': OacTableCellMonikerList,
        'oac:trMkLst': OacTableRowMonikerList,
        'oac:gridColMkLst': OacTableColumnMonikerList,
        'p188:unknownAnchor': CommentUnknownAnchor,
        'p188:pos': Point2DType,
        'p188:replyLst': CommentReplyList,
        'p188:txBody': TextBodyType,
        'p188:extLst': ExtensionList,
    };
    Comment._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':authorId': new OxmlAttr(':authorId', OxmlType.StringValue),
        ':status': new OxmlAttr(':status', OxmlType.EnumValue, CommentStatusArray),
        ':created': new OxmlAttr(':created', OxmlType.DateTimeValue),
        ':tags': new OxmlAttr(':tags', OxmlType.ListValue),
        ':likes': new OxmlAttr(':likes', OxmlType.ListValue),
        ':startDate': new OxmlAttr(':startDate', OxmlType.DateTimeValue),
        ':dueDate': new OxmlAttr(':dueDate', OxmlType.DateTimeValue),
        ':assignedTo': new OxmlAttr(':assignedTo', OxmlType.ListValue),
        ':complete': new OxmlAttr(':complete', OxmlType.Int32Value),
        ':priority': new OxmlAttr(':priority', OxmlType.UInt32Value),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    CommentReplyList._C = {
        'p188:reply': CommentReply,
    };
    Point2DType._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    CommentReply._C = {
        'p188:txBody': TextBodyType,
        'p188:extLst': ExtensionList,
    };
    CommentReply._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':authorId': new OxmlAttr(':authorId', OxmlType.StringValue),
        ':status': new OxmlAttr(':status', OxmlType.EnumValue, CommentStatusArray),
        ':created': new OxmlAttr(':created', OxmlType.DateTimeValue),
        ':tags': new OxmlAttr(':tags', OxmlType.ListValue),
        ':likes': new OxmlAttr(':likes', OxmlType.ListValue),
    };
    Author._C = {
        'p188:extLst': ExtensionList,
    };
    Author._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':initials': new OxmlAttr(':initials', OxmlType.StringValue),
        ':userId': new OxmlAttr(':userId', OxmlType.StringValue),
        ':providerId': new OxmlAttr(':providerId', OxmlType.StringValue),
    };
    CommentRelationship._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    CommentList._C = {
        'p188:cm': Comment,
    };
    AuthorList._C = {
        'p188:author': Author,
    };
    ExtensionList._C = {
        'p:ext': PExtension,
    };
    TextBodyType._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    return {
        prefix: 'p188',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2018/8/main',
    };
}
