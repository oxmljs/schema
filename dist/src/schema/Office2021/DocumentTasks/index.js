import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { Extension as OelExtension } from "../../Office2021/OfficeExtLst";
class CommentAnchor extends OxmlLeafElement {
  static _Q = "t:Comment";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class TaskUndo extends OxmlLeafElement {
  static _Q = "t:Undo";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class TaskUnassignAll extends OxmlLeafElement {
  static _Q = "t:UnassignAll";
}
class TaskUndeleteEventInfo extends OxmlLeafElement {
  static _Q = "t:Undelete";
}
class TaskDeleteEventInfo extends OxmlLeafElement {
  static _Q = "t:Delete";
}
class TaskPriorityEventInfo extends OxmlLeafElement {
  static _Q = "t:Priority";
  static _A = [":value"];
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
}
class TaskProgressEventInfo extends OxmlLeafElement {
  static _Q = "t:Progress";
  static _A = [":percentComplete"];
  /** percentComplete. Serialized as `:percentComplete` */
  get percentComplete() {
    return this._g(":percentComplete");
  }
  set percentComplete(v) {
    this._s(":percentComplete", v);
  }
}
class TaskScheduleEventInfo extends OxmlLeafElement {
  static _Q = "t:Schedule";
  static _A = [":startDate", ":dueDate"];
  /** startDate. Serialized as `:startDate` */
  get startDate() {
    return this._g(":startDate");
  }
  set startDate(v) {
    this._s(":startDate", v);
  }
  /** dueDate. Serialized as `:dueDate` */
  get dueDate() {
    return this._g(":dueDate");
  }
  set dueDate(v) {
    this._s(":dueDate", v);
  }
}
class TaskTitleEventInfo extends OxmlLeafElement {
  static _Q = "t:SetTitle";
  static _A = [":title"];
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
}
class TaskCreateEventInfo extends OxmlLeafElement {
  static _Q = "t:Create";
}
class OpenXmlTaskUserElement extends OxmlLeafElement {
  static _A = [":userId", ":userName", ":userProvider"];
  /** userId. Serialized as `:userId` */
  get userId() {
    return this._g(":userId");
  }
  set userId(v) {
    this._s(":userId", v);
  }
  /** userName. Serialized as `:userName` */
  get userName() {
    return this._g(":userName");
  }
  set userName(v) {
    this._s(":userName", v);
  }
  /** userProvider. Serialized as `:userProvider` */
  get userProvider() {
    return this._g(":userProvider");
  }
  set userProvider(v) {
    this._s(":userProvider", v);
  }
}
class UnassignTaskUser extends OpenXmlTaskUserElement {
  static _Q = "t:Unassign";
}
class AssignTaskUser extends OpenXmlTaskUserElement {
  static _Q = "t:Assign";
}
class AttributionTaskUser extends OpenXmlTaskUserElement {
  static _Q = "t:Attribution";
}
class TaskHistoryEvent extends OxmlCompositeElement {
  static _Q = "t:Event";
  static _A = [":time", ":id"];
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns AttributionTaskUser. */
  get attributionTaskUser() {
    return this._f(AttributionTaskUser);
  }
  /** Returns TaskAnchor. */
  get taskAnchor() {
    return this._f(TaskAnchor);
  }
}
class TaskHistory extends OxmlCompositeElement {
  static _Q = "t:History";
}
class TaskAnchor extends OxmlCompositeElement {
  static _Q = "t:Anchor";
  /** Returns CommentAnchor. */
  get commentAnchor() {
    return this._f(CommentAnchor);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "t:extLst";
}
class Task extends OxmlCompositeElement {
  static _Q = "t:Task";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns TaskAnchor. */
  get taskAnchor() {
    return this._f(TaskAnchor);
  }
  /** Returns TaskHistory. */
  get taskHistory() {
    return this._f(TaskHistory);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Tasks extends OxmlPartRootElement {
  static _Q = "t:Tasks";
}
function initOffice2021DocumentTasksNamespace() {
  CommentAnchor._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskUndo._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskPriorityEventInfo._D = {
    ":value": new OxmlAttr(":value", OxmlType.Int32Value)
  };
  TaskProgressEventInfo._D = {
    ":percentComplete": new OxmlAttr(":percentComplete", OxmlType.Int32Value)
  };
  TaskScheduleEventInfo._D = {
    ":startDate": new OxmlAttr(":startDate", OxmlType.DateTimeValue),
    ":dueDate": new OxmlAttr(":dueDate", OxmlType.DateTimeValue)
  };
  TaskTitleEventInfo._D = {
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  OpenXmlTaskUserElement._D = {
    ":userId": new OxmlAttr(":userId", OxmlType.StringValue),
    ":userName": new OxmlAttr(":userName", OxmlType.StringValue),
    ":userProvider": new OxmlAttr(":userProvider", OxmlType.StringValue)
  };
  TaskHistoryEvent._C = {
    "t:Attribution": AttributionTaskUser,
    "t:Anchor": TaskAnchor,
    "t:Assign": AssignTaskUser,
    "t:Unassign": UnassignTaskUser,
    "t:Create": TaskCreateEventInfo,
    "t:SetTitle": TaskTitleEventInfo,
    "t:Schedule": TaskScheduleEventInfo,
    "t:Progress": TaskProgressEventInfo,
    "t:Priority": TaskPriorityEventInfo,
    "t:Delete": TaskDeleteEventInfo,
    "t:Undelete": TaskUndeleteEventInfo,
    "t:UnassignAll": TaskUnassignAll,
    "t:Undo": TaskUndo,
    "t:extLst": ExtensionList
  };
  TaskHistoryEvent._D = {
    ":time": new OxmlAttr(":time", OxmlType.DateTimeValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskHistory._C = {
    "t:Event": TaskHistoryEvent
  };
  TaskAnchor._C = {
    "t:Comment": CommentAnchor,
    "t:extLst": ExtensionList
  };
  ExtensionList._C = {
    "oel:ext": OelExtension
  };
  Task._C = {
    "t:Anchor": TaskAnchor,
    "t:History": TaskHistory,
    "t:extLst": ExtensionList
  };
  Task._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  Tasks._C = {
    "t:Task": Task,
    "t:extLst": ExtensionList
  };
  return {
    prefix: "t",
    xmlns: "http://schemas.microsoft.com/office/tasks/2019/documenttasks"
  };
}
export {
  AssignTaskUser,
  AttributionTaskUser,
  CommentAnchor,
  ExtensionList,
  OpenXmlTaskUserElement,
  Task,
  TaskAnchor,
  TaskCreateEventInfo,
  TaskDeleteEventInfo,
  TaskHistory,
  TaskHistoryEvent,
  TaskPriorityEventInfo,
  TaskProgressEventInfo,
  TaskScheduleEventInfo,
  TaskTitleEventInfo,
  TaskUnassignAll,
  TaskUndeleteEventInfo,
  TaskUndo,
  Tasks,
  UnassignTaskUser,
  initOffice2021DocumentTasksNamespace
};
