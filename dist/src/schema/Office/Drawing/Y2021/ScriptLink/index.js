import { OxmlCompositeElement } from "../../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "asl:extLst";
}
class ScriptLink extends OxmlCompositeElement {
  static _Q = "asl:scriptLink";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOfficeDrawingY2021ScriptLinkNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  ScriptLink._C = {
    "asl:extLst": OfficeArtExtensionList
  };
  ScriptLink._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  return {
    prefix: "asl",
    xmlns: "http://schemas.microsoft.com/office/drawing/2021/scriptlink"
  };
}
export {
  OfficeArtExtensionList,
  ScriptLink,
  initOfficeDrawingY2021ScriptLinkNamespace
};
