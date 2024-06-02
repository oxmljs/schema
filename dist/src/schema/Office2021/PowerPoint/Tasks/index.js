import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as PExtension } from "../../../Presentation";
class TaskHistory extends OxmlCompositeElement {
  static _Q = "p1912:history";
}
class TaskHistoryEvent extends OxmlCompositeElement {
  static _Q = "p1912:event";
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
  /** Returns AtrbtnTaskAssignUnassignUser. */
  get atrbtnTaskAssignUnassignUser() {
    return this._f(AtrbtnTaskAssignUnassignUser);
  }
  /** Returns TaskAnchor. */
  get taskAnchor() {
    return this._f(TaskAnchor);
  }
}
class TaskUnknownRecord extends OxmlLeafElement {
  static _Q = "p1912:unknown";
}
class TaskUndo extends OxmlLeafElement {
  static _Q = "p1912:undo";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class TaskPriorityRecord extends OxmlLeafElement {
  static _Q = "p1912:pri";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TaskProgressEventInfo extends OxmlLeafElement {
  static _Q = "p1912:pcntCmplt";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TaskScheduleEventInfo extends OxmlLeafElement {
  static _Q = "p1912:date";
  static _A = [":stDt", ":endDt"];
  /** stDt. Serialized as `:stDt` */
  get stDt() {
    return this._g(":stDt");
  }
  set stDt(v) {
    this._s(":stDt", v);
  }
  /** endDt. Serialized as `:endDt` */
  get endDt() {
    return this._g(":endDt");
  }
  set endDt(v) {
    this._s(":endDt", v);
  }
}
class TaskTitleEventInfo extends OxmlLeafElement {
  static _Q = "p1912:title";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class EmptyType extends OxmlLeafElement {
}
class UnasgnAllEmpty extends EmptyType {
  static _Q = "p1912:unasgnAll";
}
class AddEmpty extends EmptyType {
  static _Q = "p1912:add";
}
class TaskAnchor extends OxmlCompositeElement {
  static _Q = "p1912:anchr";
  /** Returns CommentAnchor. */
  get commentAnchor() {
    return this._f(CommentAnchor);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class OpenXmlTaskAssignUnassignUserElement extends OxmlLeafElement {
  static _A = [":authorId"];
  /** authorId. Serialized as `:authorId` */
  get authorId() {
    return this._g(":authorId");
  }
  set authorId(v) {
    this._s(":authorId", v);
  }
}
class UnAsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p1912:unAsgn";
}
class AsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p1912:asgn";
}
class AtrbtnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p1912:atrbtn";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p1912:extLst";
}
class CommentAnchor extends OxmlLeafElement {
  static _Q = "p1912:comment";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class TaskHistoryDetails extends OxmlCompositeElement {
  static _Q = "p1912:taskHistoryDetails";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
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
function initOffice2021PowerPointTasksNamespace() {
  TaskHistory._C = {
    "p1912:event": TaskHistoryEvent
  };
  TaskHistoryEvent._C = {
    "p1912:atrbtn": AtrbtnTaskAssignUnassignUser,
    "p1912:anchr": TaskAnchor,
    "p1912:asgn": AsgnTaskAssignUnassignUser,
    "p1912:unAsgn": UnAsgnTaskAssignUnassignUser,
    "p1912:add": AddEmpty,
    "p1912:title": TaskTitleEventInfo,
    "p1912:date": TaskScheduleEventInfo,
    "p1912:pcntCmplt": TaskProgressEventInfo,
    "p1912:pri": TaskPriorityRecord,
    "p1912:unasgnAll": UnasgnAllEmpty,
    "p1912:undo": TaskUndo,
    "p1912:unknown": TaskUnknownRecord,
    "p1912:extLst": ExtensionList
  };
  TaskHistoryEvent._D = {
    ":time": new OxmlAttr(":time", OxmlType.DateTimeValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskUndo._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskPriorityRecord._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  TaskProgressEventInfo._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  TaskScheduleEventInfo._D = {
    ":stDt": new OxmlAttr(":stDt", OxmlType.DateTimeValue),
    ":endDt": new OxmlAttr(":endDt", OxmlType.DateTimeValue)
  };
  TaskTitleEventInfo._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  TaskAnchor._C = {
    "p1912:comment": CommentAnchor,
    "p1912:extLst": ExtensionList
  };
  OpenXmlTaskAssignUnassignUserElement._D = {
    ":authorId": new OxmlAttr(":authorId", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "p:ext": PExtension
  };
  CommentAnchor._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskHistoryDetails._C = {
    "p1912:history": TaskHistory,
    "p1912:extLst": ExtensionList
  };
  TaskHistoryDetails._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  return {
    prefix: "p1912",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2019/12/main"
  };
}
export {
  AddEmpty,
  AsgnTaskAssignUnassignUser,
  AtrbtnTaskAssignUnassignUser,
  CommentAnchor,
  EmptyType,
  ExtensionList,
  OpenXmlTaskAssignUnassignUserElement,
  TaskAnchor,
  TaskHistory,
  TaskHistoryDetails,
  TaskHistoryEvent,
  TaskPriorityRecord,
  TaskProgressEventInfo,
  TaskScheduleEventInfo,
  TaskTitleEventInfo,
  TaskUndo,
  TaskUnknownRecord,
  UnAsgnTaskAssignUnassignUser,
  UnasgnAllEmpty,
  initOffice2021PowerPointTasksNamespace
};
