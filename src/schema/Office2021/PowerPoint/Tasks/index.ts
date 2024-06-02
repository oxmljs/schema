import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { DateTimeValue } from '../../../../framework/types/DateTimeValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { Extension as PExtension } from '../../../Presentation';


/** Defines the TaskHistory Class. Serialized as `p1912:history` */
export class TaskHistory extends OxmlCompositeElement<TaskHistoryEvent> {

    public static override _Q = 'p1912:history';

}
/** Defines the TaskHistoryEvent Class. Serialized as `p1912:event` */
export class TaskHistoryEvent extends OxmlCompositeElement<AtrbtnTaskAssignUnassignUser | TaskAnchor | AsgnTaskAssignUnassignUser | UnAsgnTaskAssignUnassignUser | AddEmpty | TaskTitleEventInfo | TaskScheduleEventInfo | TaskProgressEventInfo | TaskPriorityRecord | UnasgnAllEmpty | TaskUndo | TaskUnknownRecord | ExtensionList> {

    public static override _Q = 'p1912:event';
    public static override _A = [':time',':id',];
    /** time. Serialized as `:time` */
    public get time(): DateTimeValue | undefined { return this._g(':time'); }
    public set time(v: DateTimeValue | undefined) { this._s(':time', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns AtrbtnTaskAssignUnassignUser. */
    public get atrbtnTaskAssignUnassignUser(): AtrbtnTaskAssignUnassignUser | undefined { return this._f(AtrbtnTaskAssignUnassignUser); }
    /** Returns TaskAnchor. */
    public get taskAnchor(): TaskAnchor | undefined { return this._f(TaskAnchor); }

}
/** Defines the TaskUnknownRecord Class. Serialized as `p1912:unknown` */
export class TaskUnknownRecord extends OxmlLeafElement {

    public static override _Q = 'p1912:unknown';

}
/** Defines the TaskUndo Class. Serialized as `p1912:undo` */
export class TaskUndo extends OxmlLeafElement {

    public static override _Q = 'p1912:undo';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the TaskPriorityRecord Class. Serialized as `p1912:pri` */
export class TaskPriorityRecord extends OxmlLeafElement {

    public static override _Q = 'p1912:pri';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Defines the TaskProgressEventInfo Class. Serialized as `p1912:pcntCmplt` */
export class TaskProgressEventInfo extends OxmlLeafElement {

    public static override _Q = 'p1912:pcntCmplt';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Defines the TaskScheduleEventInfo Class. Serialized as `p1912:date` */
export class TaskScheduleEventInfo extends OxmlLeafElement {

    public static override _Q = 'p1912:date';
    public static override _A = [':stDt',':endDt',];
    /** stDt. Serialized as `:stDt` */
    public get stDt(): DateTimeValue | undefined { return this._g(':stDt'); }
    public set stDt(v: DateTimeValue | undefined) { this._s(':stDt', v); }
    /** endDt. Serialized as `:endDt` */
    public get endDt(): DateTimeValue | undefined { return this._g(':endDt'); }
    public set endDt(v: DateTimeValue | undefined) { this._s(':endDt', v); }

}
/** Defines the TaskTitleEventInfo Class. Serialized as `p1912:title` */
export class TaskTitleEventInfo extends OxmlLeafElement {

    public static override _Q = 'p1912:title';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Defines the UnasgnAllEmpty Class. Serialized as `p1912:unasgnAll` */
export class UnasgnAllEmpty extends EmptyType {

    public static override _Q = 'p1912:unasgnAll';

}
/** Defines the AddEmpty Class. Serialized as `p1912:add` */
export class AddEmpty extends EmptyType {

    public static override _Q = 'p1912:add';

}
/** Defines the TaskAnchor Class. Serialized as `p1912:anchr` */
export class TaskAnchor extends OxmlCompositeElement<CommentAnchor | ExtensionList> {

    public static override _Q = 'p1912:anchr';
    /** Returns CommentAnchor. */
    public get commentAnchor(): CommentAnchor | undefined { return this._f(CommentAnchor); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the OpenXmlTaskAssignUnassignUserElement Class. */
export abstract class OpenXmlTaskAssignUnassignUserElement extends OxmlLeafElement {

    public static override _A = [':authorId',];
    /** authorId. Serialized as `:authorId` */
    public get authorId(): StringValue | undefined { return this._g(':authorId'); }
    public set authorId(v: StringValue | undefined) { this._s(':authorId', v); }

}
/** Defines the UnAsgnTaskAssignUnassignUser Class. Serialized as `p1912:unAsgn` */
export class UnAsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {

    public static override _Q = 'p1912:unAsgn';

}
/** Defines the AsgnTaskAssignUnassignUser Class. Serialized as `p1912:asgn` */
export class AsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {

    public static override _Q = 'p1912:asgn';

}
/** Defines the AtrbtnTaskAssignUnassignUser Class. Serialized as `p1912:atrbtn` */
export class AtrbtnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {

    public static override _Q = 'p1912:atrbtn';

}
/** Defines the ExtensionList Class. Serialized as `p1912:extLst` */
export class ExtensionList extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p1912:extLst';

}
/** Defines the CommentAnchor Class. Serialized as `p1912:comment` */
export class CommentAnchor extends OxmlLeafElement {

    public static override _Q = 'p1912:comment';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the TaskHistoryDetails Class. Serialized as `p1912:taskHistoryDetails` */
export class TaskHistoryDetails extends OxmlCompositeElement<TaskHistory | ExtensionList> {

    public static override _Q = 'p1912:taskHistoryDetails';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns TaskHistory. */
    public get taskHistory(): TaskHistory | undefined { return this._f(TaskHistory); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}

export function initOffice2021PowerPointTasksNamespace() {
    TaskHistory._C = {
        'p1912:event': TaskHistoryEvent,
    };
    TaskHistoryEvent._C = {
        'p1912:atrbtn': AtrbtnTaskAssignUnassignUser,
        'p1912:anchr': TaskAnchor,
        'p1912:asgn': AsgnTaskAssignUnassignUser,
        'p1912:unAsgn': UnAsgnTaskAssignUnassignUser,
        'p1912:add': AddEmpty,
        'p1912:title': TaskTitleEventInfo,
        'p1912:date': TaskScheduleEventInfo,
        'p1912:pcntCmplt': TaskProgressEventInfo,
        'p1912:pri': TaskPriorityRecord,
        'p1912:unasgnAll': UnasgnAllEmpty,
        'p1912:undo': TaskUndo,
        'p1912:unknown': TaskUnknownRecord,
        'p1912:extLst': ExtensionList,
    };
    TaskHistoryEvent._D = {
        ':time': new OxmlAttr(':time', OxmlType.DateTimeValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskUndo._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskPriorityRecord._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    TaskProgressEventInfo._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    TaskScheduleEventInfo._D = {
        ':stDt': new OxmlAttr(':stDt', OxmlType.DateTimeValue),
        ':endDt': new OxmlAttr(':endDt', OxmlType.DateTimeValue),
    };
    TaskTitleEventInfo._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    TaskAnchor._C = {
        'p1912:comment': CommentAnchor,
        'p1912:extLst': ExtensionList,
    };
    OpenXmlTaskAssignUnassignUserElement._D = {
        ':authorId': new OxmlAttr(':authorId', OxmlType.StringValue),
    };
    ExtensionList._C = {
        'p:ext': PExtension,
    };
    CommentAnchor._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskHistoryDetails._C = {
        'p1912:history': TaskHistory,
        'p1912:extLst': ExtensionList,
    };
    TaskHistoryDetails._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    return {
        prefix: 'p1912',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2019/12/main',
    };
}
