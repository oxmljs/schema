import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class ClassificationExtensionList extends OxmlCompositeElement {
  static _Q = "clbl:extLst";
}
class ClassificationLabel extends OxmlLeafElement {
  static _Q = "clbl:label";
  static _A = [":id", ":enabled", ":setDate", ":method", ":name", ":siteId", ":actionId", ":contentBits", ":removed"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** enabled. Serialized as `:enabled` */
  get enabled() {
    return this._g(":enabled");
  }
  set enabled(v) {
    this._s(":enabled", v);
  }
  /** setDate. Serialized as `:setDate` */
  get setDate() {
    return this._g(":setDate");
  }
  set setDate(v) {
    this._s(":setDate", v);
  }
  /** method. Serialized as `:method` */
  get method() {
    return this._g(":method");
  }
  set method(v) {
    this._s(":method", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** siteId. Serialized as `:siteId` */
  get siteId() {
    return this._g(":siteId");
  }
  set siteId(v) {
    this._s(":siteId", v);
  }
  /** actionId. Serialized as `:actionId` */
  get actionId() {
    return this._g(":actionId");
  }
  set actionId(v) {
    this._s(":actionId", v);
  }
  /** contentBits. Serialized as `:contentBits` */
  get contentBits() {
    return this._g(":contentBits");
  }
  set contentBits(v) {
    this._s(":contentBits", v);
  }
  /** removed. Serialized as `:removed` */
  get removed() {
    return this._g(":removed");
  }
  set removed(v) {
    this._s(":removed", v);
  }
}
class ClassificationExtension extends OxmlCompositeElement {
  static _Q = "clbl:ext";
  static _A = [":uri"];
  /** uri. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
class ClassificationLabelList extends OxmlPartRootElement {
  static _Q = "clbl:labelList";
}
function initOffice2021MipLabelMetaDataNamespace() {
  ClassificationExtensionList._C = {
    "clbl:ext": ClassificationExtension
  };
  ClassificationLabel._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":enabled": new OxmlAttr(":enabled", OxmlType.BooleanValue),
    ":setDate": new OxmlAttr(":setDate", OxmlType.StringValue),
    ":method": new OxmlAttr(":method", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":siteId": new OxmlAttr(":siteId", OxmlType.StringValue),
    ":actionId": new OxmlAttr(":actionId", OxmlType.StringValue),
    ":contentBits": new OxmlAttr(":contentBits", OxmlType.UInt32Value),
    ":removed": new OxmlAttr(":removed", OxmlType.BooleanValue)
  };
  ClassificationExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ClassificationLabelList._C = {
    "clbl:label": ClassificationLabel,
    "clbl:extLst": ClassificationExtensionList
  };
  return {
    prefix: "clbl",
    xmlns: "http://schemas.microsoft.com/office/2020/mipLabelMetadata"
  };
}
export {
  ClassificationExtension,
  ClassificationExtensionList,
  ClassificationLabel,
  ClassificationLabelList,
  initOffice2021MipLabelMetaDataNamespace
};
