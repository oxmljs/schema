import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { Extension as AExtension } from "../../Drawing";
class WebExtensionTaskpane extends OxmlCompositeElement {
  static _Q = "wetp:taskpane";
  static _A = [":dockstate", ":visibility", ":width", ":row", ":locked"];
  /** dockstate. Serialized as `:dockstate` */
  get dockState() {
    return this._g(":dockstate");
  }
  set dockState(v) {
    this._s(":dockstate", v);
  }
  /** visibility. Serialized as `:visibility` */
  get visibility() {
    return this._g(":visibility");
  }
  set visibility(v) {
    this._s(":visibility", v);
  }
  /** width. Serialized as `:width` */
  get width() {
    return this._g(":width");
  }
  set width(v) {
    this._s(":width", v);
  }
  /** row. Serialized as `:row` */
  get row() {
    return this._g(":row");
  }
  set row(v) {
    this._s(":row", v);
  }
  /** locked. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** Returns WebExtensionPartReference. */
  get webExtensionPartReference() {
    return this._f(WebExtensionPartReference);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "wetp:extLst";
}
class WebExtensionPartReference extends OxmlLeafElement {
  static _Q = "wetp:webextensionref";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class Taskpanes extends OxmlPartRootElement {
  static _Q = "wetp:taskpanes";
}
function initOffice2013WebExtentionPaneNamespace() {
  WebExtensionTaskpane._C = {
    "wetp:webextensionref": WebExtensionPartReference,
    "wetp:extLst": OfficeArtExtensionList
  };
  WebExtensionTaskpane._D = {
    ":dockstate": new OxmlAttr(":dockstate", OxmlType.StringValue),
    ":visibility": new OxmlAttr(":visibility", OxmlType.BooleanValue),
    ":width": new OxmlAttr(":width", OxmlType.DoubleValue),
    ":row": new OxmlAttr(":row", OxmlType.UInt32Value),
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue)
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  WebExtensionPartReference._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Taskpanes._C = {
    "wetp:taskpane": WebExtensionTaskpane
  };
  return {
    prefix: "wetp",
    xmlns: "http://schemas.microsoft.com/office/webextensions/taskpanes/2010/11"
  };
}
export {
  OfficeArtExtensionList,
  Taskpanes,
  WebExtensionPartReference,
  WebExtensionTaskpane,
  initOffice2013WebExtentionPaneNamespace
};
