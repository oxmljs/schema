import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { Extension as PExtension } from '../../../Presentation';
/** Defines the TaskHistory Class. Serialized as `p1912:history` */
export declare class TaskHistory extends OxmlCompositeElement<TaskHistoryEvent> {
    static _Q: string;
}
/** Defines the TaskHistoryEvent Class. Serialized as `p1912:event` */
export declare class TaskHistoryEvent extends OxmlCompositeElement<AtrbtnTaskAssignUnassignUser | TaskAnchor | AsgnTaskAssignUnassignUser | UnAsgnTaskAssignUnassignUser | AddEmpty | TaskTitleEventInfo | TaskScheduleEventInfo | TaskProgressEventInfo | TaskPriorityRecord | UnasgnAllEmpty | TaskUndo | TaskUnknownRecord | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** time. Serialized as `:time` */
    get time(): DateTimeValue | undefined;
    set time(v: DateTimeValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns AtrbtnTaskAssignUnassignUser. */
    get atrbtnTaskAssignUnassignUser(): AtrbtnTaskAssignUnassignUser | undefined;
    /** Returns TaskAnchor. */
    get taskAnchor(): TaskAnchor | undefined;
}
/** Defines the TaskUnknownRecord Class. Serialized as `p1912:unknown` */
export declare class TaskUnknownRecord extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the TaskUndo Class. Serialized as `p1912:undo` */
export declare class TaskUndo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the TaskPriorityRecord Class. Serialized as `p1912:pri` */
export declare class TaskPriorityRecord extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the TaskProgressEventInfo Class. Serialized as `p1912:pcntCmplt` */
export declare class TaskProgressEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the TaskScheduleEventInfo Class. Serialized as `p1912:date` */
export declare class TaskScheduleEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** stDt. Serialized as `:stDt` */
    get stDt(): DateTimeValue | undefined;
    set stDt(v: DateTimeValue | undefined);
    /** endDt. Serialized as `:endDt` */
    get endDt(): DateTimeValue | undefined;
    set endDt(v: DateTimeValue | undefined);
}
/** Defines the TaskTitleEventInfo Class. Serialized as `p1912:title` */
export declare class TaskTitleEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the EmptyType Class. */
export declare abstract class EmptyType extends OxmlLeafElement {
}
/** Defines the UnasgnAllEmpty Class. Serialized as `p1912:unasgnAll` */
export declare class UnasgnAllEmpty extends EmptyType {
    static _Q: string;
}
/** Defines the AddEmpty Class. Serialized as `p1912:add` */
export declare class AddEmpty extends EmptyType {
    static _Q: string;
}
/** Defines the TaskAnchor Class. Serialized as `p1912:anchr` */
export declare class TaskAnchor extends OxmlCompositeElement<CommentAnchor | ExtensionList> {
    static _Q: string;
    /** Returns CommentAnchor. */
    get commentAnchor(): CommentAnchor | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the OpenXmlTaskAssignUnassignUserElement Class. */
export declare abstract class OpenXmlTaskAssignUnassignUserElement extends OxmlLeafElement {
    static _A: string[];
    /** authorId. Serialized as `:authorId` */
    get authorId(): StringValue | undefined;
    set authorId(v: StringValue | undefined);
}
/** Defines the UnAsgnTaskAssignUnassignUser Class. Serialized as `p1912:unAsgn` */
export declare class UnAsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
    static _Q: string;
}
/** Defines the AsgnTaskAssignUnassignUser Class. Serialized as `p1912:asgn` */
export declare class AsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
    static _Q: string;
}
/** Defines the AtrbtnTaskAssignUnassignUser Class. Serialized as `p1912:atrbtn` */
export declare class AtrbtnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
    static _Q: string;
}
/** Defines the ExtensionList Class. Serialized as `p1912:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<PExtension> {
    static _Q: string;
}
/** Defines the CommentAnchor Class. Serialized as `p1912:comment` */
export declare class CommentAnchor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the TaskHistoryDetails Class. Serialized as `p1912:taskHistoryDetails` */
export declare class TaskHistoryDetails extends OxmlCompositeElement<TaskHistory | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns TaskHistory. */
    get taskHistory(): TaskHistory | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
export declare function initOffice2021PowerPointTasksNamespace(): {
    prefix: string;
    xmlns: string;
};
