import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
class LongProperty extends OxmlLeafTextElement {
  static _Q = "lp:LongProp";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class LongProperties extends OxmlCompositeElement {
  static _Q = "lp:LongProperties";
}
function initOfficeLongPropertiesNamespace() {
  LongProperty._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  LongProperties._C = {
    "lp:LongProp": LongProperty
  };
  return {
    prefix: "lp",
    xmlns: "http://schemas.microsoft.com/office/2006/metadata/longProperties"
  };
}
export {
  LongProperties,
  LongProperty,
  initOfficeLongPropertiesNamespace
};
