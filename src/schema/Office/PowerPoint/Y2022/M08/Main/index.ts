import { OxmlCompositeElement } from '../../../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../../../framework/OxmlType';
import { DateTimeValue } from '../../../../../../framework/types/DateTimeValue';
import { StringValue } from '../../../../../../framework/types/StringValue';
import { Int32Value } from '../../../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../../../framework/types/BooleanValue';
import { Extension as PExtension } from '../../../../../Presentation';


/** Defines the TaskHistory Class. Serialized as `p228:history` */
export class TaskHistory extends OxmlCompositeElement<TaskHistoryEvent> {

    public static override _Q = 'p228:history';

}
/** Defines the TaskHistoryEvent Class. Serialized as `p228:event` */
export class TaskHistoryEvent extends OxmlCompositeElement<AtrbtnTaskAssignUnassignUser | TaskAnchor | AsgnTaskAssignUnassignUser | AddEmpty | TaskTitleEventInfo | TaskScheduleEventInfo | TaskProgressEventInfo | UnasgnAllEmpty | TaskUndo | TaskUnknownRecord | ExtensionList> {

    public static override _Q = 'p228:event';
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
/** Defines the TaskUnknownRecord Class. Serialized as `p228:unknown` */
export class TaskUnknownRecord extends OxmlLeafElement {

    public static override _Q = 'p228:unknown';

}
/** Defines the TaskUndo Class. Serialized as `p228:undo` */
export class TaskUndo extends OxmlLeafElement {

    public static override _Q = 'p228:undo';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the TaskProgressEventInfo Class. Serialized as `p228:pcntCmplt` */
export class TaskProgressEventInfo extends OxmlLeafElement {

    public static override _Q = 'p228:pcntCmplt';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Defines the TaskScheduleEventInfo Class. Serialized as `p228:date` */
export class TaskScheduleEventInfo extends OxmlLeafElement {

    public static override _Q = 'p228:date';
    public static override _A = [':stDt',':endDt',];
    /** stDt. Serialized as `:stDt` */
    public get stDt(): DateTimeValue | undefined { return this._g(':stDt'); }
    public set stDt(v: DateTimeValue | undefined) { this._s(':stDt', v); }
    /** endDt. Serialized as `:endDt` */
    public get endDt(): DateTimeValue | undefined { return this._g(':endDt'); }
    public set endDt(v: DateTimeValue | undefined) { this._s(':endDt', v); }

}
/** Defines the TaskTitleEventInfo Class. Serialized as `p228:title` */
export class TaskTitleEventInfo extends OxmlLeafElement {

    public static override _Q = 'p228:title';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Defines the UnasgnAllEmpty Class. Serialized as `p228:unasgnAll` */
export class UnasgnAllEmpty extends EmptyType {

    public static override _Q = 'p228:unasgnAll';

}
/** Defines the AddEmpty Class. Serialized as `p228:add` */
export class AddEmpty extends EmptyType {

    public static override _Q = 'p228:add';

}
/** Defines the TaskAnchor Class. Serialized as `p228:anchr` */
export class TaskAnchor extends OxmlCompositeElement<CommentAnchor | ExtensionList> {

    public static override _Q = 'p228:anchr';
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
/** Defines the AsgnTaskAssignUnassignUser Class. Serialized as `p228:asgn` */
export class AsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {

    public static override _Q = 'p228:asgn';

}
/** Defines the AtrbtnTaskAssignUnassignUser Class. Serialized as `p228:atrbtn` */
export class AtrbtnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {

    public static override _Q = 'p228:atrbtn';

}
/** Defines the ExtensionList Class. Serialized as `p228:extLst` */
export class ExtensionList extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p228:extLst';

}
/** Defines the CommentAnchor Class. Serialized as `p228:comment` */
export class CommentAnchor extends OxmlLeafElement {

    public static override _Q = 'p228:comment';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the TaskDetails Class. Serialized as `p228:taskDetails` */
export class TaskDetails extends OxmlCompositeElement<TaskHistory | ExtensionList> {

    public static override _Q = 'p228:taskDetails';
    public static override _A = [':deleted',':inactive',];
    /** deleted. Serialized as `:deleted` */
    public get deleted(): BooleanValue | undefined { return this._g(':deleted'); }
    public set deleted(v: BooleanValue | undefined) { this._s(':deleted', v); }
    /** inactive. Serialized as `:inactive` */
    public get inactive(): BooleanValue | undefined { return this._g(':inactive'); }
    public set inactive(v: BooleanValue | undefined) { this._s(':inactive', v); }
    /** Returns TaskHistory. */
    public get taskHistory(): TaskHistory | undefined { return this._f(TaskHistory); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}

export function initOfficePowerPointY2022M08MainNamespace() {
    TaskHistory._C = {
        'p228:event': TaskHistoryEvent,
    };
    TaskHistoryEvent._C = {
        'p228:atrbtn': AtrbtnTaskAssignUnassignUser,
        'p228:anchr': TaskAnchor,
        'p228:asgn': AsgnTaskAssignUnassignUser,
        'p228:add': AddEmpty,
        'p228:title': TaskTitleEventInfo,
        'p228:date': TaskScheduleEventInfo,
        'p228:pcntCmplt': TaskProgressEventInfo,
        'p228:unasgnAll': UnasgnAllEmpty,
        'p228:undo': TaskUndo,
        'p228:unknown': TaskUnknownRecord,
        'p228:extLst': ExtensionList,
    };
    TaskHistoryEvent._D = {
        ':time': new OxmlAttr(':time', OxmlType.DateTimeValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    TaskUndo._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
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
        'p228:comment': CommentAnchor,
        'p228:extLst': ExtensionList,
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
    TaskDetails._C = {
        'p228:history': TaskHistory,
        'p228:extLst': ExtensionList,
    };
    TaskDetails._D = {
        ':deleted': new OxmlAttr(':deleted', OxmlType.BooleanValue),
        ':inactive': new OxmlAttr(':inactive', OxmlType.BooleanValue),
    };
    return {
        prefix: 'p228',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2022/08/main',
    };
}
