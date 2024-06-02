import { OxmlCompositeElement } from "../../../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../../framework/OxmlType";
import { Extension as PExtension } from "../../../../../Presentation";
class TaskHistory extends OxmlCompositeElement {
  static _Q = "p228:history";
}
class TaskHistoryEvent extends OxmlCompositeElement {
  static _Q = "p228:event";
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
  static _Q = "p228:unknown";
}
class TaskUndo extends OxmlLeafElement {
  static _Q = "p228:undo";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class TaskProgressEventInfo extends OxmlLeafElement {
  static _Q = "p228:pcntCmplt";
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
  static _Q = "p228:date";
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
  static _Q = "p228:title";
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
  static _Q = "p228:unasgnAll";
}
class AddEmpty extends EmptyType {
  static _Q = "p228:add";
}
class TaskAnchor extends OxmlCompositeElement {
  static _Q = "p228:anchr";
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
class AsgnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p228:asgn";
}
class AtrbtnTaskAssignUnassignUser extends OpenXmlTaskAssignUnassignUserElement {
  static _Q = "p228:atrbtn";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p228:extLst";
}
class CommentAnchor extends OxmlLeafElement {
  static _Q = "p228:comment";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class TaskDetails extends OxmlCompositeElement {
  static _Q = "p228:taskDetails";
  static _A = [":deleted", ":inactive"];
  /** deleted. Serialized as `:deleted` */
  get deleted() {
    return this._g(":deleted");
  }
  set deleted(v) {
    this._s(":deleted", v);
  }
  /** inactive. Serialized as `:inactive` */
  get inactive() {
    return this._g(":inactive");
  }
  set inactive(v) {
    this._s(":inactive", v);
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
function initOfficePowerPointY2022M08MainNamespace() {
  TaskHistory._C = {
    "p228:event": TaskHistoryEvent
  };
  TaskHistoryEvent._C = {
    "p228:atrbtn": AtrbtnTaskAssignUnassignUser,
    "p228:anchr": TaskAnchor,
    "p228:asgn": AsgnTaskAssignUnassignUser,
    "p228:add": AddEmpty,
    "p228:title": TaskTitleEventInfo,
    "p228:date": TaskScheduleEventInfo,
    "p228:pcntCmplt": TaskProgressEventInfo,
    "p228:unasgnAll": UnasgnAllEmpty,
    "p228:undo": TaskUndo,
    "p228:unknown": TaskUnknownRecord,
    "p228:extLst": ExtensionList
  };
  TaskHistoryEvent._D = {
    ":time": new OxmlAttr(":time", OxmlType.DateTimeValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  TaskUndo._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
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
    "p228:comment": CommentAnchor,
    "p228:extLst": ExtensionList
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
  TaskDetails._C = {
    "p228:history": TaskHistory,
    "p228:extLst": ExtensionList
  };
  TaskDetails._D = {
    ":deleted": new OxmlAttr(":deleted", OxmlType.BooleanValue),
    ":inactive": new OxmlAttr(":inactive", OxmlType.BooleanValue)
  };
  return {
    prefix: "p228",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2022/08/main"
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
  TaskDetails,
  TaskHistory,
  TaskHistoryEvent,
  TaskProgressEventInfo,
  TaskScheduleEventInfo,
  TaskTitleEventInfo,
  TaskUndo,
  TaskUnknownRecord,
  UnasgnAllEmpty,
  initOfficePowerPointY2022M08MainNamespace
};
