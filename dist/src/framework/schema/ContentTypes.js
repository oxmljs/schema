import { OxmlAttr } from "../OxmlAttr";
import { OxmlLeafElement } from "../OxmlLeafElement";
import { OxmlPartRootElement } from "../OxmlPartRootElement";
import { OxmlType } from "../OxmlType";
class Default extends OxmlLeafElement {
  static _Q = "Default";
  static _A = ["Extension", "ContentType"];
  static _D = {
    "Extension": new OxmlAttr("Extension", OxmlType.StringValue),
    "ContentType": new OxmlAttr("ContentType", OxmlType.StringValue)
  };
  get extension() {
    return this._g("Extension");
  }
  set extension(v) {
    this._s("Extension", v);
  }
  get contentType() {
    return this._g("ContentType");
  }
  set contentType(v) {
    this._s("ContentType", v);
  }
}
class Override extends OxmlLeafElement {
  static _Q = "Override";
  static _A = ["PartName", "ContentType"];
  static _D = {
    "PartName": new OxmlAttr("PartName", OxmlType.StringValue),
    "ContentType": new OxmlAttr("ContentType", OxmlType.StringValue)
  };
  get partName() {
    return this._g("PartName");
  }
  set partName(v) {
    this._s("PartName", v);
  }
  get contentType() {
    return this._g("ContentType");
  }
  set contentType(v) {
    this._s("ContentType", v);
  }
}
class Types extends OxmlPartRootElement {
  static _Q = "Types";
  static _C = {
    "Default": Default,
    "Override": Override
  };
}
export {
  Default,
  Override,
  Types
};
