import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { Extension as AExtension } from "../../Drawing";
class ThemeVariantList extends OxmlCompositeElement {
  static _Q = "thm15:themeVariantLst";
}
class ThemeVariant extends OxmlCompositeElement {
  static _Q = "thm15:themeVariant";
  static _A = [":name", ":vid", ":cx", ":cy", "r:id"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** vid. Serialized as `:vid` */
  get vid() {
    return this._g(":vid");
  }
  set vid(v) {
    this._s(":vid", v);
  }
  /** cx. Serialized as `:cx` */
  get x() {
    return this._g(":cx");
  }
  set x(v) {
    this._s(":cx", v);
  }
  /** cy. Serialized as `:cy` */
  get y() {
    return this._g(":cy");
  }
  set y(v) {
    this._s(":cy", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "thm15:extLst";
}
class ThemeFamily extends OxmlCompositeElement {
  static _Q = "thm15:themeFamily";
  static _A = [":name", ":id", ":vid"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** vid. Serialized as `:vid` */
  get vid() {
    return this._g(":vid");
  }
  set vid(v) {
    this._s(":vid", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2013ThemeNamespace() {
  ThemeVariantList._C = {
    "thm15:themeVariant": ThemeVariant
  };
  ThemeVariant._C = {
    "thm15:extLst": OfficeArtExtensionList
  };
  ThemeVariant._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":vid": new OxmlAttr(":vid", OxmlType.StringValue),
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  ThemeFamily._C = {
    "thm15:extLst": OfficeArtExtensionList
  };
  ThemeFamily._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":vid": new OxmlAttr(":vid", OxmlType.StringValue)
  };
  return {
    prefix: "thm15",
    xmlns: "http://schemas.microsoft.com/office/thememl/2012/main"
  };
}
export {
  OfficeArtExtensionList,
  ThemeFamily,
  ThemeVariant,
  ThemeVariantList,
  initOffice2013ThemeNamespace
};
