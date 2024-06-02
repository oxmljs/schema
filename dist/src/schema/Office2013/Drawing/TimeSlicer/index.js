import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "tsle:extLst";
}
class TimeSlicer extends OxmlCompositeElement {
  static _Q = "tsle:timeslicer";
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
function initOffice2013DrawingTimeSlicerNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  TimeSlicer._C = {
    "tsle:extLst": OfficeArtExtensionList
  };
  TimeSlicer._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  return {
    prefix: "tsle",
    xmlns: "http://schemas.microsoft.com/office/drawing/2012/timeslicer"
  };
}
export {
  OfficeArtExtensionList,
  TimeSlicer,
  initOffice2013DrawingTimeSlicerNamespace
};
