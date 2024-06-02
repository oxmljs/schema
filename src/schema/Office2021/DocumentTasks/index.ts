import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { Extension as OelExtension } from '../../Office2021/OfficeExtLst';


/** Defines the CommentAnchor Class. Serialized as `t:Comment` */
export class CommentAnchor extends OxmlLeafElement {

    public static override _Q = 't:Comment';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the TaskUndo Class. Serialized as `t:Undo` */
export class TaskUndo extends OxmlLeafElement {

    public static override _Q = 't:Undo';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the TaskUnassignAll Class. Serialized as `t:UnassignAll` */
export class TaskUnassignAll extends OxmlLeafElement {

    public static override _Q = 't:UnassignAll';

}
/** Defines the TaskUndeleteEventInfo Class. Serialized as `t:Undelete` */
export class TaskUndeleteEventInfo extends OxmlLeafElement {

    public static override _Q = 't:Undelete';

}
/** Defines the TaskDeleteEventInfo Class. Serialized as `t:Delete` */
export class TaskDeleteEventInfo extends OxmlLeafElement {

    public static override _Q = 't:Delete';

}
/** Defines the TaskPriorityEventInfo Class. Serialized as `t:Priority` */
export class TaskPriorityEventInfo extends OxmlLeafElement {

    public static override _Q = 't:Priority';
    public static override _A = [':value',];
    /** value. Serialized as `:value` */
    public get value(): Int32Value | undefined { return this._g(':value'); }
    public set value(v: Int32Value | undefined) { this._s(':value', v); }

}
/** Defines the TaskProgressEventInfo Class. Serialized as `t:Progress` */
export class TaskProgressEventInfo extends OxmlLeafElement {

    public static override _Q = 't:Progress';
    public static override _A = [':percentComplete',];
    /** percentComplete. Serialized as `:percentComplete` */
    public get percentComplete(): Int32Value | undefined { return this._g(':percentComplete'); }
    public set percentComplete(v: Int32Value | undefined) { this._s(':percentComplete', v); }

}
/** Defines the TaskScheduleEventInfo Class. Serialized as `t:Schedule` */
export class TaskScheduleEventInfo extends OxmlLeafElement {

    public static override _Q = 't:Schedule';
    public static override _A = [':startDate',':dueDate',];
    /** startDate. Serialized as `:startDate` */
    public get startDate(): DateTimeValue | undefined { return this._g(':startDate'); }
    public set startDate(v: DateTimeValue | undefined) { this._s(':startDate', v); }
    /** dueDate. Serialized as `:dueDate` */
    public get dueDate(): DateTimeValue | undefined { return this._g(':dueDate'); }
    public set dueDate(v: DateTimeValue | undefined) { this._s(':dueDate', v); }

}
/** Defines the TaskTitleEventInfo Class. Serialized as `t:SetTitle` */
export class TaskTitleEventInfo extends OxmlLeafElement {

    public static override _Q = 't:SetTitle';
    public static override _A = [':title',];
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }

}
/** Defines the TaskCreateEventInfo Class. Serialized as `t:Create` */
export class TaskCreateEventInfo extends OxmlLeafElement {

    public static override _Q = 't:Create';

}
/** Defines the OpenXmlTaskUserElement Class. */
export abstract class OpenXmlTaskUserElement extends OxmlLeafElement {

    public static override _A = [':userId',':userName',':userProvider',];
    /** userId. Serialized as `:userId` */
    public get userId(): StringValue | undefined { return this._g(':userId'); }
    public set userId(v: StringValue | undefined) { this._s(':userId', v); }
    /** userName. Serialized as `:userName` */
    public get userName(): StringValue | undefined { return this._g(':userName'); }
    public set userName(v: StringValue | undefined) { this._s(':userName', v); }
    /** userProvider. Serialized as `:userProvider` */
    public get userProvider(): StringValue | undefined { return this._g(':userProvider'); }
    public set userProvider(v: StringValue | undefined) { this._s(':userProvider', v); }

}
/** Defines the UnassignTaskUser Class. Serialized as `t:Unassign` */
export class UnassignTaskUser extends OpenXmlTaskUserElement {

    public static override _Q = 't:Unassign';

}
/** Defines the AssignTaskUser Class. Serialized as `t:Assign` */
export class AssignTaskUser extends OpenXmlTaskUserElement {

    public static override _Q = 't:Assign';

}
/** Defines the AttributionTaskUser Class. Serialized as `t:Attribution` */
export class AttributionTaskUser extends OpenXmlTaskUserElement {

    public static override _Q = 't:Attribution';

}
/** Defines the TaskHistoryEvent Class. Serialized as `t:Event` */
export class TaskHistoryEvent extends OxmlCompositeElement<AttributionTaskUser | TaskAnchor | AssignTaskUser | UnassignTaskUser | TaskCreateEventInfo | TaskTitleEventInfo | TaskScheduleEventInfo | TaskProgressEventInfo | TaskPriorityEventInfo | TaskDeleteEventInfo | TaskUndeleteEventInfo | TaskUnassignAll | TaskUndo | ExtensionList> {

    public static override _Q = 't:Event';
    public static override _A = [':time',':id',];
    /** time. Serialized as `:time` */
    public get time(): DateTimeValue | undefined { return this._g(':time'); }
    public set time(v: DateTimeValue | undefined) { this._s(':time', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns AttributionTaskUser. */
    public get attributionTaskUser(): AttributionTaskUser | undefined { return this._f(AttributionTaskUser); }
    /** Returns TaskAnchor. */
    public get taskAnchor(): TaskAnchor | undefined { return this._f(TaskAnchor); }

}
/** Defines the TaskHistory Class. Serialized as `t:History` */
export class TaskHistory extends OxmlCompositeElement<TaskHistoryEvent> {

    public static override _Q = 't:History';

}
/** Defines the TaskAnchor Class. Serialized as `t:Anchor` */
export class TaskAnchor extends OxmlCompositeElement<CommentAnchor | ExtensionList> {

    public static override _Q = 't:Anchor';
    /** Returns CommentAnchor. */
    public get commentAnchor(): CommentAnchor | undefined { return this._f(CommentAnchor); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ExtensionList Class. Serialized as `t:extLst` */
export class ExtensionList extends OxmlCompositeElement<OelExtension> {

    public static override _Q = 't:extLst';

}
/** Defines the Task Class. Serialized as `t:Task` */
export class Task extends OxmlCompositeElement<TaskAnchor | TaskHistory | ExtensionList> {

    public static override _Q = 't:Task';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns TaskAnchor. */
    public get taskAnchor(): TaskAnchor | undefined { return this._f(TaskAnchor); }
    /** Returns TaskHistory. */
    public get taskHistory(): TaskHistory | undefined { return this._f(TaskHistory); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Tasks Class. Serialized as `t:Tasks` */
export class Tasks extends OxmlPartRootElement<Task | ExtensionList> {

    public static override _Q = 't:Tasks';

}

export function initOffice2021DocumentTasksNamespace() {
    CommentAnchor._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskUndo._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskPriorityEventInfo._D = {
        ':value': new OxmlAttr(':value', OxmlType.Int32Value),
    };
    TaskProgressEventInfo._D = {
        ':percentComplete': new OxmlAttr(':percentComplete', OxmlType.Int32Value),
    };
    TaskScheduleEventInfo._D = {
        ':startDate': new OxmlAttr(':startDate', OxmlType.DateTimeValue),
        ':dueDate': new OxmlAttr(':dueDate', OxmlType.DateTimeValue),
    };
    TaskTitleEventInfo._D = {
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    OpenXmlTaskUserElement._D = {
        ':userId': new OxmlAttr(':userId', OxmlType.StringValue),
        ':userName': new OxmlAttr(':userName', OxmlType.StringValue),
        ':userProvider': new OxmlAttr(':userProvider', OxmlType.StringValue),
    };
    TaskHistoryEvent._C = {
        't:Attribution': AttributionTaskUser,
        't:Anchor': TaskAnchor,
        't:Assign': AssignTaskUser,
        't:Unassign': UnassignTaskUser,
        't:Create': TaskCreateEventInfo,
        't:SetTitle': TaskTitleEventInfo,
        't:Schedule': TaskScheduleEventInfo,
        't:Progress': TaskProgressEventInfo,
        't:Priority': TaskPriorityEventInfo,
        't:Delete': TaskDeleteEventInfo,
        't:Undelete': TaskUndeleteEventInfo,
        't:UnassignAll': TaskUnassignAll,
        't:Undo': TaskUndo,
        't:extLst': ExtensionList,
    };
    TaskHistoryEvent._D = {
        ':time': new OxmlAttr(':time', OxmlType.DateTimeValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskHistory._C = {
        't:Event': TaskHistoryEvent,
    };
    TaskAnchor._C = {
        't:Comment': CommentAnchor,
        't:extLst': ExtensionList,
    };
    ExtensionList._C = {
        'oel:ext': OelExtension,
    };
    Task._C = {
        't:Anchor': TaskAnchor,
        't:History': TaskHistory,
        't:extLst': ExtensionList,
    };
    Task._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    Tasks._C = {
        't:Task': Task,
        't:extLst': ExtensionList,
    };
    return {
        prefix: 't',
        xmlns: 'http://schemas.microsoft.com/office/tasks/2019/documenttasks',
    };
}
