import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { Extension as AExtension } from "../../../Drawing";
import { LineReference as ALineReference } from "../../../Drawing";
import { FillReference as AFillReference } from "../../../Drawing";
import { EffectReference as AEffectReference } from "../../../Drawing";
import { FontReference as AFontReference } from "../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "pic14:extLst";
}
class ShapeStyle extends OxmlCompositeElement {
  static _Q = "pic14:style";
  /** Returns ALineReference. */
  get lineReference() {
    return this._f(ALineReference);
  }
  /** Returns AFillReference. */
  get fillReference() {
    return this._f(AFillReference);
  }
  /** Returns AEffectReference. */
  get effectReference() {
    return this._f(AEffectReference);
  }
  /** Font Reference. */
  get fontReference() {
    return this._f(AFontReference);
  }
}
function initOffice2010DrawingPicturesNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  ShapeStyle._C = {
    "a:lnRef": ALineReference,
    "a:fillRef": AFillReference,
    "a:effectRef": AEffectReference,
    "a:fontRef": AFontReference
  };
  return {
    prefix: "pic14",
    xmlns: "http://schemas.microsoft.com/office/drawing/2010/picture"
  };
}
export {
  OfficeArtExtensionList,
  ShapeStyle,
  initOffice2010DrawingPicturesNamespace
};
