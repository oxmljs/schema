import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { Extension as XExtension } from "../../../Spreadsheet";
class OpenXmlWebImageSupportingRichDataRelationshipElement extends OxmlLeafElement {
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class BlipWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {
  static _Q = "xlrdwi:blip";
}
class MoreImagesAddressWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {
  static _Q = "xlrdwi:moreImagesAddress";
}
class AddressWebImageSupportingRichDataRelationship extends OpenXmlWebImageSupportingRichDataRelationshipElement {
  static _Q = "xlrdwi:address";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xlrdwi:extLst";
}
class WebImageSupportingRichData extends OxmlCompositeElement {
  static _Q = "xlrdwi:webImageSrd";
  /** Returns AddressWebImageSupportingRichDataRelationship. */
  get addressWebImageSupportingRichDataRelationship() {
    return this._f(AddressWebImageSupportingRichDataRelationship);
  }
  /** Returns MoreImagesAddressWebImageSupportingRichDataRelationship. */
  get moreImagesAddressWebImageSupportingRichDataRelationship() {
    return this._f(MoreImagesAddressWebImageSupportingRichDataRelationship);
  }
  /** Returns BlipWebImageSupportingRichDataRelationship. */
  get blipWebImageSupportingRichDataRelationship() {
    return this._f(BlipWebImageSupportingRichDataRelationship);
  }
}
class WebImagesSupportingRichData extends OxmlPartRootElement {
  static _Q = "xlrdwi:webImagesSrd";
}
function initOffice2021ExcelRichDataWebImageNamespace() {
  OpenXmlWebImageSupportingRichDataRelationshipElement._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  WebImageSupportingRichData._C = {
    "xlrdwi:address": AddressWebImageSupportingRichDataRelationship,
    "xlrdwi:moreImagesAddress": MoreImagesAddressWebImageSupportingRichDataRelationship,
    "xlrdwi:blip": BlipWebImageSupportingRichDataRelationship
  };
  WebImagesSupportingRichData._C = {
    "xlrdwi:webImageSrd": WebImageSupportingRichData,
    "xlrdwi:extLst": ExtensionList
  };
  return {
    prefix: "xlrdwi",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2020/richdatawebimage"
  };
}
export {
  AddressWebImageSupportingRichDataRelationship,
  BlipWebImageSupportingRichDataRelationship,
  ExtensionList,
  MoreImagesAddressWebImageSupportingRichDataRelationship,
  OpenXmlWebImageSupportingRichDataRelationshipElement,
  WebImageSupportingRichData,
  WebImagesSupportingRichData,
  initOffice2021ExcelRichDataWebImageNamespace
};
