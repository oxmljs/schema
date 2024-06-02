import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class LegacyDrawing extends OxmlLeafElement {
  static _Q = "comp:legacyDrawing";
  static _A = [":spid"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
}
function initDrawingLegacyCompatibilityNamespace() {
  LegacyDrawing._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue)
  };
  return {
    prefix: "comp",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/compatibility"
  };
}
export {
  LegacyDrawing,
  initDrawingLegacyCompatibilityNamespace
};
