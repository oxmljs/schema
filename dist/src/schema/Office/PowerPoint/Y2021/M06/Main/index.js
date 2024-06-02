import { OxmlCompositeElement } from "../../../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../../framework/OxmlType";
import { Extension as PExtension } from "../../../../../Presentation";
class TaskHistory extends OxmlCompositeElement {
  static _Q = "p216:history";
}
class TaskHistoryEvent extends OxmlCompositeElement {
  static _Q = "p216:event";
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
  static _Q = "p216:unknown";
}
class TaskUndo extends OxmlLeafElement {
  static _Q = "p216:undo";
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
  static _Q = "p216:pri";
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
  static _Q = "p216:pcntCmplt";
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
  static _Q = "p216:date";
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
  static _Q = "p216:title";
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
  static _Q = "p216:unasgnAll";
}
class AddEmpty extends EmptyType {
  static _Q = "p216:add";
}
class TaskAnchor extends OxmlCompositeElement {
  static _Q = "p216:anchr";
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
  static _Q = "p216:unAsgn";
}
class AsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p216:asgn";
}
class AtrbtnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p216:atrbtn";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p216:extLst";
}
class CommentAnchor extends OxmlLeafElement {
  static _Q = "p216:comment";
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
  static _Q = "p216:taskHistoryDetails";
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
function initOfficePowerPointY2021M06MainNamespace() {
  TaskHistory._C = {
    "p216:event": TaskHistoryEvent
  };
  TaskHistoryEvent._C = {
    "p216:atrbtn": AtrbtnTaskAssignUnassignUser,
    "p216:anchr": TaskAnchor,
    "p216:asgn": AsgnTaskAssignUnassignUser,
    "p216:unAsgn": UnAsgnTaskAssignUnassignUser,
    "p216:add": AddEmpty,
    "p216:title": TaskTitleEventInfo,
    "p216:date": TaskScheduleEventInfo,
    "p216:pcntCmplt": TaskProgressEventInfo,
    "p216:pri": TaskPriorityRecord,
    "p216:unasgnAll": UnasgnAllEmpty,
    "p216:undo": TaskUndo,
    "p216:unknown": TaskUnknownRecord,
    "p216:extLst": ExtensionList
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
    "p216:comment": CommentAnchor,
    "p216:extLst": ExtensionList
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
    "p216:history": TaskHistory,
    "p216:extLst": ExtensionList
  };
  TaskHistoryDetails._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  return {
    prefix: "p216",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2021/06/main"
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
  initOfficePowerPointY2021M06MainNamespace
};
