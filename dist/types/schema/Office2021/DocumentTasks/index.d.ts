import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { Extension as OelExtension } from '../../Office2021/OfficeExtLst';
/** Defines the CommentAnchor Class. Serialized as `t:Comment` */
export declare class CommentAnchor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the TaskUndo Class. Serialized as `t:Undo` */
export declare class TaskUndo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the TaskUnassignAll Class. Serialized as `t:UnassignAll` */
export declare class TaskUnassignAll extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the TaskUndeleteEventInfo Class. Serialized as `t:Undelete` */
export declare class TaskUndeleteEventInfo extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the TaskDeleteEventInfo Class. Serialized as `t:Delete` */
export declare class TaskDeleteEventInfo extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the TaskPriorityEventInfo Class. Serialized as `t:Priority` */
export declare class TaskPriorityEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** value. Serialized as `:value` */
    get value(): Int32Value | undefined;
    set value(v: Int32Value | undefined);
}
/** Defines the TaskProgressEventInfo Class. Serialized as `t:Progress` */
export declare class TaskProgressEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** percentComplete. Serialized as `:percentComplete` */
    get percentComplete(): Int32Value | undefined;
    set percentComplete(v: Int32Value | undefined);
}
/** Defines the TaskScheduleEventInfo Class. Serialized as `t:Schedule` */
export declare class TaskScheduleEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** startDate. Serialized as `:startDate` */
    get startDate(): DateTimeValue | undefined;
    set startDate(v: DateTimeValue | undefined);
    /** dueDate. Serialized as `:dueDate` */
    get dueDate(): DateTimeValue | undefined;
    set dueDate(v: DateTimeValue | undefined);
}
/** Defines the TaskTitleEventInfo Class. Serialized as `t:SetTitle` */
export declare class TaskTitleEventInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
}
/** Defines the TaskCreateEventInfo Class. Serialized as `t:Create` */
export declare class TaskCreateEventInfo extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the OpenXmlTaskUserElement Class. */
export declare abstract class OpenXmlTaskUserElement extends OxmlLeafElement {
    static _A: string[];
    /** userId. Serialized as `:userId` */
    get userId(): StringValue | undefined;
    set userId(v: StringValue | undefined);
    /** userName. Serialized as `:userName` */
    get userName(): StringValue | undefined;
    set userName(v: StringValue | undefined);
    /** userProvider. Serialized as `:userProvider` */
    get userProvider(): StringValue | undefined;
    set userProvider(v: StringValue | undefined);
}
/** Defines the UnassignTaskUser Class. Serialized as `t:Unassign` */
export declare class UnassignTaskUser extends OpenXmlTaskUserElement {
    static _Q: string;
}
/** Defines the AssignTaskUser Class. Serialized as `t:Assign` */
export declare class AssignTaskUser extends OpenXmlTaskUserElement {
    static _Q: string;
}
/** Defines the AttributionTaskUser Class. Serialized as `t:Attribution` */
export declare class AttributionTaskUser extends OpenXmlTaskUserElement {
    static _Q: string;
}
/** Defines the TaskHistoryEvent Class. Serialized as `t:Event` */
export declare class TaskHistoryEvent extends OxmlCompositeElement<AttributionTaskUser | TaskAnchor | AssignTaskUser | UnassignTaskUser | TaskCreateEventInfo | TaskTitleEventInfo | TaskScheduleEventInfo | TaskProgressEventInfo | TaskPriorityEventInfo | TaskDeleteEventInfo | TaskUndeleteEventInfo | TaskUnassignAll | TaskUndo | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** time. Serialized as `:time` */
    get time(): DateTimeValue | undefined;
    set time(v: DateTimeValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns AttributionTaskUser. */
    get attributionTaskUser(): AttributionTaskUser | undefined;
    /** Returns TaskAnchor. */
    get taskAnchor(): TaskAnchor | undefined;
}
/** Defines the TaskHistory Class. Serialized as `t:History` */
export declare class TaskHistory extends OxmlCompositeElement<TaskHistoryEvent> {
    static _Q: string;
}
/** Defines the TaskAnchor Class. Serialized as `t:Anchor` */
export declare class TaskAnchor extends OxmlCompositeElement<CommentAnchor | ExtensionList> {
    static _Q: string;
    /** Returns CommentAnchor. */
    get commentAnchor(): CommentAnchor | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ExtensionList Class. Serialized as `t:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<OelExtension> {
    static _Q: string;
}
/** Defines the Task Class. Serialized as `t:Task` */
export declare class Task extends OxmlCompositeElement<TaskAnchor | TaskHistory | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns TaskAnchor. */
    get taskAnchor(): TaskAnchor | undefined;
    /** Returns TaskHistory. */
    get taskHistory(): TaskHistory | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Tasks Class. Serialized as `t:Tasks` */
export declare class Tasks extends OxmlPartRootElement<Task | ExtensionList> {
    static _Q: string;
}
export declare function initOffice2021DocumentTasksNamespace(): {
    prefix: string;
    xmlns: string;
};
