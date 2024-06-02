import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
class SchemaReferences extends OxmlCompositeElement {
  static _Q = "ds:schemaRefs";
}
class SchemaReference extends OxmlLeafElement {
  static _Q = "ds:schemaRef";
  static _A = ["ds:uri"];
  /** Target Namespace of Associated XML Schema. Serialized as `ds:uri` */
  get uri() {
    return this._g("ds:uri");
  }
  set uri(v) {
    this._s("ds:uri", v);
  }
}
class DataStoreItem extends OxmlPartRootElement {
  static _Q = "ds:datastoreItem";
  static _A = ["ds:itemID"];
  /** Custom XML Data ID. Serialized as `ds:itemID` */
  get itemId() {
    return this._g("ds:itemID");
  }
  set itemId(v) {
    this._s("ds:itemID", v);
  }
  /** Set of Associated XML Schemas. */
  get schemaReferences() {
    return this._f(SchemaReferences);
  }
}
function initCustomXmlDataPropertiesNamespace() {
  SchemaReferences._C = {
    "ds:schemaRef": SchemaReference
  };
  SchemaReference._D = {
    "ds:uri": new OxmlAttr("ds:uri", OxmlType.StringValue)
  };
  DataStoreItem._C = {
    "ds:schemaRefs": SchemaReferences
  };
  DataStoreItem._D = {
    "ds:itemID": new OxmlAttr("ds:itemID", OxmlType.StringValue)
  };
  return {
    prefix: "ds",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/customXml"
  };
}
export {
  DataStoreItem,
  SchemaReference,
  SchemaReferences,
  initCustomXmlDataPropertiesNamespace
};
