import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
class Schema extends OxmlLeafElement {
  static _Q = "sl:schema";
  static _A = ["sl:uri", "sl:manifestLocation", "sl:schemaLocation"];
  /** Custom XML Schema Namespace. Serialized as `sl:uri` */
  get uri() {
    return this._g("sl:uri");
  }
  set uri(v) {
    this._s("sl:uri", v);
  }
  /** Resource File Location. Serialized as `sl:manifestLocation` */
  get manifestLocation() {
    return this._g("sl:manifestLocation");
  }
  set manifestLocation(v) {
    this._s("sl:manifestLocation", v);
  }
  /** Custom XML Schema Location. Serialized as `sl:schemaLocation` */
  get schemaLocation() {
    return this._g("sl:schemaLocation");
  }
  set schemaLocation(v) {
    this._s("sl:schemaLocation", v);
  }
}
class SchemaLibrary extends OxmlCompositeElement {
  static _Q = "sl:schemaLibrary";
}
function initCustomXmlSchemaReferencesNamespace() {
  Schema._D = {
    "sl:uri": new OxmlAttr("sl:uri", OxmlType.StringValue),
    "sl:manifestLocation": new OxmlAttr("sl:manifestLocation", OxmlType.StringValue),
    "sl:schemaLocation": new OxmlAttr("sl:schemaLocation", OxmlType.StringValue)
  };
  SchemaLibrary._C = {
    "sl:schema": Schema
  };
  return {
    prefix: "sl",
    xmlns: "http://schemas.openxmlformats.org/schemaLibrary/2006/main"
  };
}
export {
  Schema,
  SchemaLibrary,
  initCustomXmlSchemaReferencesNamespace
};
