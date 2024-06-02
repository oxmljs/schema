import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
class CompatibilityShape extends OxmlLeafElement {
  static _Q = "com14:compatSp";
  static _A = [":spid"];
  /** spid. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
}
function initOffice2010DrawingLegacyCompatibilityNamespace() {
  CompatibilityShape._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue)
  };
  return {
    prefix: "com14",
    xmlns: "http://schemas.microsoft.com/office/drawing/2010/compatibility"
  };
}
export {
  CompatibilityShape,
  initOffice2010DrawingLegacyCompatibilityNamespace
};
