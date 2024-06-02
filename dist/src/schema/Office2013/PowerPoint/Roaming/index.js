import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
class RoamingProperty extends OxmlCompositeElement {
  static _Q = "pRoam:props";
  /** Returns Key. */
  get key() {
    return this._f(Key);
  }
  /** Returns Value. */
  get value() {
    return this._f(Value);
  }
}
class Value extends OxmlLeafTextElement {
  static _Q = "pRoam:value";
}
class Key extends OxmlLeafTextElement {
  static _Q = "pRoam:key";
}
function initOffice2013PowerPointRoamingNamespace() {
  RoamingProperty._C = {
    "pRoam:key": Key,
    "pRoam:value": Value
  };
  return {
    prefix: "pRoam",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2012/roamingSettings"
  };
}
export {
  Key,
  RoamingProperty,
  Value,
  initOffice2013PowerPointRoamingNamespace
};
