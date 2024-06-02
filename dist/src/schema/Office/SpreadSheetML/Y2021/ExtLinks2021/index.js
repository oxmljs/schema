import { OxmlCompositeElement } from "../../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../../framework/OxmlType";
class OpenXmlAlternateUrlElement extends OxmlLeafElement {
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class RelativeUrlAlternateUrl extends OpenXmlAlternateUrlElement {
  static _Q = "xxl21:relativeUrl";
}
class AbsoluteUrlAlternateUrl extends OpenXmlAlternateUrlElement {
  static _Q = "xxl21:absoluteUrl";
}
class ExternalBookAlternateUrls extends OxmlCompositeElement {
  static _Q = "xxl21:alternateUrls";
  static _A = [":driveId", ":itemId"];
  /** driveId. Serialized as `:driveId` */
  get driveId() {
    return this._g(":driveId");
  }
  set driveId(v) {
    this._s(":driveId", v);
  }
  /** itemId. Serialized as `:itemId` */
  get itemId() {
    return this._g(":itemId");
  }
  set itemId(v) {
    this._s(":itemId", v);
  }
  /** Returns AbsoluteUrlAlternateUrl. */
  get absoluteUrlAlternateUrl() {
    return this._f(AbsoluteUrlAlternateUrl);
  }
  /** Returns RelativeUrlAlternateUrl. */
  get relativeUrlAlternateUrl() {
    return this._f(RelativeUrlAlternateUrl);
  }
}
function initOfficeSpreadSheetMLY2021ExtLinks2021Namespace() {
  OpenXmlAlternateUrlElement._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ExternalBookAlternateUrls._C = {
    "xxl21:absoluteUrl": AbsoluteUrlAlternateUrl,
    "xxl21:relativeUrl": RelativeUrlAlternateUrl
  };
  ExternalBookAlternateUrls._D = {
    ":driveId": new OxmlAttr(":driveId", OxmlType.StringValue),
    ":itemId": new OxmlAttr(":itemId", OxmlType.StringValue)
  };
  return {
    prefix: "xxl21",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2021/extlinks2021"
  };
}
export {
  AbsoluteUrlAlternateUrl,
  ExternalBookAlternateUrls,
  OpenXmlAlternateUrlElement,
  RelativeUrlAlternateUrl,
  initOfficeSpreadSheetMLY2021ExtLinks2021Namespace
};
