import { OxmlCompositeElement } from "../../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
import { Extension as AExtension } from "../../../../Drawing";
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "aoe:extLst";
}
class OEmbedShared extends OxmlCompositeElement {
  static _Q = "aoe:oembedShared";
  static _A = [":srcUrl", ":type"];
  /** srcUrl. Serialized as `:srcUrl` */
  get srcUrl() {
    return this._g(":srcUrl");
  }
  set srcUrl(v) {
    this._s(":srcUrl", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
function initOfficeDrawingY2021OEmbedNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  OEmbedShared._C = {
    "aoe:extLst": OfficeArtExtensionList
  };
  OEmbedShared._D = {
    ":srcUrl": new OxmlAttr(":srcUrl", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue)
  };
  return {
    prefix: "aoe",
    xmlns: "http://schemas.microsoft.com/office/drawing/2021/oembed"
  };
}
export {
  OEmbedShared,
  OfficeArtExtensionList,
  initOfficeDrawingY2021OEmbedNamespace
};
