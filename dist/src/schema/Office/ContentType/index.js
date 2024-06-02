import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class ContentTypeSchema extends OxmlCompositeElement {
  static _Q = "ct:contentTypeSchema";
  static _A = ["ct:_", "ma:_", "ma:contentTypeName", "ma:contentTypeID", "ma:contentTypeVersion", "ma:contentTypeDescription", "ma:contentTypeScope", "ma:versionID"];
  /** _. Serialized as `ct:_` */
  get underScore() {
    return this._g("ct:_");
  }
  set underScore(v) {
    this._s("ct:_", v);
  }
  /** _. Serialized as `ma:_` */
  get reservedAttributeString() {
    return this._g("ma:_");
  }
  set reservedAttributeString(v) {
    this._s("ma:_", v);
  }
  /** contentTypeName. Serialized as `ma:contentTypeName` */
  get contentTypeName() {
    return this._g("ma:contentTypeName");
  }
  set contentTypeName(v) {
    this._s("ma:contentTypeName", v);
  }
  /** contentTypeID. Serialized as `ma:contentTypeID` */
  get contentTypeID() {
    return this._g("ma:contentTypeID");
  }
  set contentTypeID(v) {
    this._s("ma:contentTypeID", v);
  }
  /** contentTypeVersion. Serialized as `ma:contentTypeVersion` */
  get contentTypeVersion() {
    return this._g("ma:contentTypeVersion");
  }
  set contentTypeVersion(v) {
    this._s("ma:contentTypeVersion", v);
  }
  /** contentTypeDescription. Serialized as `ma:contentTypeDescription` */
  get contentTypeDescription() {
    return this._g("ma:contentTypeDescription");
  }
  set contentTypeDescription(v) {
    this._s("ma:contentTypeDescription", v);
  }
  /** contentTypeScope. Serialized as `ma:contentTypeScope` */
  get contentTypeScope() {
    return this._g("ma:contentTypeScope");
  }
  set contentTypeScope(v) {
    this._s("ma:contentTypeScope", v);
  }
  /** versionID. Serialized as `ma:versionID` */
  get versionID() {
    return this._g("ma:versionID");
  }
  set versionID(v) {
    this._s("ma:versionID", v);
  }
}
function initOfficeContentTypeNamespace() {
  ContentTypeSchema._D = {
    "ct:_": new OxmlAttr("ct:_", OxmlType.StringValue),
    "ma:_": new OxmlAttr("ma:_", OxmlType.StringValue),
    "ma:contentTypeName": new OxmlAttr("ma:contentTypeName", OxmlType.StringValue),
    "ma:contentTypeID": new OxmlAttr("ma:contentTypeID", OxmlType.StringValue),
    "ma:contentTypeVersion": new OxmlAttr("ma:contentTypeVersion", OxmlType.Int32Value),
    "ma:contentTypeDescription": new OxmlAttr("ma:contentTypeDescription", OxmlType.StringValue),
    "ma:contentTypeScope": new OxmlAttr("ma:contentTypeScope", OxmlType.StringValue),
    "ma:versionID": new OxmlAttr("ma:versionID", OxmlType.StringValue)
  };
  return {
    prefix: "ct",
    xmlns: "http://schemas.microsoft.com/office/2006/metadata/contentType"
  };
}
export {
  ContentTypeSchema,
  initOfficeContentTypeNamespace
};
