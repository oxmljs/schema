import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as XExtension } from '../../../Spreadsheet';


/** Defines the Mention Class. Serialized as `xltc:mention` */
export class Mention extends OxmlLeafElement {

    public static override _Q = 'xltc:mention';
    public static override _A = [':mentionpersonId',':mentionId',':startIndex',':length',];
    /** mentionpersonId. Serialized as `:mentionpersonId` */
    public get mentionpersonId(): StringValue | undefined { return this._g(':mentionpersonId'); }
    public set mentionpersonId(v: StringValue | undefined) { this._s(':mentionpersonId', v); }
    /** mentionId. Serialized as `:mentionId` */
    public get mentionId(): StringValue | undefined { return this._g(':mentionId'); }
    public set mentionId(v: StringValue | undefined) { this._s(':mentionId', v); }
    /** startIndex. Serialized as `:startIndex` */
    public get startIndex(): UInt32Value | undefined { return this._g(':startIndex'); }
    public set startIndex(v: UInt32Value | undefined) { this._s(':startIndex', v); }
    /** length. Serialized as `:length` */
    public get length(): UInt32Value | undefined { return this._g(':length'); }
    public set length(v: UInt32Value | undefined) { this._s(':length', v); }

}
/** Defines the ThreadedCommentMentions Class. Serialized as `xltc:mentions` */
export class ThreadedCommentMentions extends OxmlCompositeElement<Mention> {

    public static override _Q = 'xltc:mentions';

}
/** Defines the ThreadedCommentText Class. Serialized as `xltc:text` */
export class ThreadedCommentText extends OxmlLeafTextElement {

    public static override _Q = 'xltc:text';

}
/** Defines the ThreadedComment Class. Serialized as `xltc:threadedComment` */
export class ThreadedComment extends OxmlCompositeElement<ThreadedCommentText | ThreadedCommentMentions | ExtensionList> {

    public static override _Q = 'xltc:threadedComment';
    public static override _A = [':ref',':dT',':personId',':id',':parentId',':done',];
    /** ref. Serialized as `:ref` */
    public get ref(): StringValue | undefined { return this._g(':ref'); }
    public set ref(v: StringValue | undefined) { this._s(':ref', v); }
    /** dT. Serialized as `:dT` */
    public get dT(): DateTimeValue | undefined { return this._g(':dT'); }
    public set dT(v: DateTimeValue | undefined) { this._s(':dT', v); }
    /** personId. Serialized as `:personId` */
    public get personId(): StringValue | undefined { return this._g(':personId'); }
    public set personId(v: StringValue | undefined) { this._s(':personId', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** parentId. Serialized as `:parentId` */
    public get parentId(): StringValue | undefined { return this._g(':parentId'); }
    public set parentId(v: StringValue | undefined) { this._s(':parentId', v); }
    /** done. Serialized as `:done` */
    public get done(): BooleanValue | undefined { return this._g(':done'); }
    public set done(v: BooleanValue | undefined) { this._s(':done', v); }
    /** Returns ThreadedCommentText. */
    public get threadedCommentText(): ThreadedCommentText | undefined { return this._f(ThreadedCommentText); }
    /** Returns ThreadedCommentMentions. */
    public get threadedCommentMentions(): ThreadedCommentMentions | undefined { return this._f(ThreadedCommentMentions); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ExtensionList Class. Serialized as `xltc:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xltc:extLst';

}
/** Defines the Person Class. Serialized as `xltc:person` */
export class Person extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'xltc:person';
    public static override _A = [':displayName',':id',':userId',':providerId',];
    /** displayName. Serialized as `:displayName` */
    public get displayName(): StringValue | undefined { return this._g(':displayName'); }
    public set displayName(v: StringValue | undefined) { this._s(':displayName', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** userId. Serialized as `:userId` */
    public get userId(): StringValue | undefined { return this._g(':userId'); }
    public set userId(v: StringValue | undefined) { this._s(':userId', v); }
    /** providerId. Serialized as `:providerId` */
    public get providerId(): StringValue | undefined { return this._g(':providerId'); }
    public set providerId(v: StringValue | undefined) { this._s(':providerId', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ThreadedComments Class. Serialized as `xltc:ThreadedComments` */
export class ThreadedComments extends OxmlPartRootElement<ThreadedComment | ExtensionList> {

    public static override _Q = 'xltc:ThreadedComments';

}
/** Defines the PersonList Class. Serialized as `xltc:personList` */
export class PersonList extends OxmlPartRootElement<Person | ExtensionList> {

    public static override _Q = 'xltc:personList';

}

export function initOffice2019ExcelThreadedCommentsNamespace() {
    Mention._D = {
        ':mentionpersonId': new OxmlAttr(':mentionpersonId', OxmlType.StringValue),
        ':mentionId': new OxmlAttr(':mentionId', OxmlType.StringValue),
        ':startIndex': new OxmlAttr(':startIndex', OxmlType.UInt32Value),
        ':length': new OxmlAttr(':length', OxmlType.UInt32Value),
    };
    ThreadedCommentMentions._C = {
        'xltc:mention': Mention,
    };
    ThreadedComment._C = {
        'xltc:text': ThreadedCommentText,
        'xltc:mentions': ThreadedCommentMentions,
        'xltc:extLst': ExtensionList,
    };
    ThreadedComment._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':dT': new OxmlAttr(':dT', OxmlType.DateTimeValue),
        ':personId': new OxmlAttr(':personId', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':parentId': new OxmlAttr(':parentId', OxmlType.StringValue),
        ':done': new OxmlAttr(':done', OxmlType.BooleanValue),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    Person._C = {
        'xltc:extLst': ExtensionList,
    };
    Person._D = {
        ':displayName': new OxmlAttr(':displayName', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':userId': new OxmlAttr(':userId', OxmlType.StringValue),
        ':providerId': new OxmlAttr(':providerId', OxmlType.StringValue),
    };
    ThreadedComments._C = {
        'xltc:threadedComment': ThreadedComment,
        'xltc:extLst': ExtensionList,
    };
    PersonList._C = {
        'xltc:person': Person,
        'xltc:extLst': ExtensionList,
    };
    return {
        prefix: 'xltc',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments',
    };
}
