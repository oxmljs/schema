import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Extension as XExtension } from '../../../Spreadsheet';
/** Defines the Mention Class. Serialized as `xltc:mention` */
export declare class Mention extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** mentionpersonId. Serialized as `:mentionpersonId` */
    get mentionpersonId(): StringValue | undefined;
    set mentionpersonId(v: StringValue | undefined);
    /** mentionId. Serialized as `:mentionId` */
    get mentionId(): StringValue | undefined;
    set mentionId(v: StringValue | undefined);
    /** startIndex. Serialized as `:startIndex` */
    get startIndex(): UInt32Value | undefined;
    set startIndex(v: UInt32Value | undefined);
    /** length. Serialized as `:length` */
    get length(): UInt32Value | undefined;
    set length(v: UInt32Value | undefined);
}
/** Defines the ThreadedCommentMentions Class. Serialized as `xltc:mentions` */
export declare class ThreadedCommentMentions extends OxmlCompositeElement<Mention> {
    static _Q: string;
}
/** Defines the ThreadedCommentText Class. Serialized as `xltc:text` */
export declare class ThreadedCommentText extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the ThreadedComment Class. Serialized as `xltc:threadedComment` */
export declare class ThreadedComment extends OxmlCompositeElement<ThreadedCommentText | ThreadedCommentMentions | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** ref. Serialized as `:ref` */
    get ref(): StringValue | undefined;
    set ref(v: StringValue | undefined);
    /** dT. Serialized as `:dT` */
    get dT(): DateTimeValue | undefined;
    set dT(v: DateTimeValue | undefined);
    /** personId. Serialized as `:personId` */
    get personId(): StringValue | undefined;
    set personId(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** parentId. Serialized as `:parentId` */
    get parentId(): StringValue | undefined;
    set parentId(v: StringValue | undefined);
    /** done. Serialized as `:done` */
    get done(): BooleanValue | undefined;
    set done(v: BooleanValue | undefined);
    /** Returns ThreadedCommentText. */
    get threadedCommentText(): ThreadedCommentText | undefined;
    /** Returns ThreadedCommentMentions. */
    get threadedCommentMentions(): ThreadedCommentMentions | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ExtensionList Class. Serialized as `xltc:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the Person Class. Serialized as `xltc:person` */
export declare class Person extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** displayName. Serialized as `:displayName` */
    get displayName(): StringValue | undefined;
    set displayName(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** userId. Serialized as `:userId` */
    get userId(): StringValue | undefined;
    set userId(v: StringValue | undefined);
    /** providerId. Serialized as `:providerId` */
    get providerId(): StringValue | undefined;
    set providerId(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ThreadedComments Class. Serialized as `xltc:ThreadedComments` */
export declare class ThreadedComments extends OxmlPartRootElement<ThreadedComment | ExtensionList> {
    static _Q: string;
}
/** Defines the PersonList Class. Serialized as `xltc:personList` */
export declare class PersonList extends OxmlPartRootElement<Person | ExtensionList> {
    static _Q: string;
}
export declare function initOffice2019ExcelThreadedCommentsNamespace(): {
    prefix: string;
    xmlns: string;
};
