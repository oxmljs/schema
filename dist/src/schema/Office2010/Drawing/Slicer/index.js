import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "sle:extLst";
}
class Slicer extends OxmlCompositeElement {
  static _Q = "sle:slicer";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOffice2010DrawingSlicerNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  Slicer._C = {
    "sle:extLst": OfficeArtExtensionList
  };
  Slicer._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  return {
    prefix: "sle",
    xmlns: "http://schemas.microsoft.com/office/drawing/2010/slicer"
  };
}
export {
  OfficeArtExtensionList,
  Slicer,
  initOffice2010DrawingSlicerNamespace
};
