import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var PersistenceValues = /* @__PURE__ */ ((PersistenceValues2) => {
  PersistenceValues2["PersistPropertyBag"] = "persistPropertyBag";
  PersistenceValues2["PersistStream"] = "persistStream";
  PersistenceValues2["PersistStreamInit"] = "persistStreamInit";
  PersistenceValues2["PersistStorage"] = "persistStorage";
  return PersistenceValues2;
})(PersistenceValues || {});
const PersistenceValuesArray = [
  "persistPropertyBag" /* PersistPropertyBag */,
  "persistStream" /* PersistStream */,
  "persistStreamInit" /* PersistStreamInit */,
  "persistStorage" /* PersistStorage */
];
class SharedComPicture extends OxmlLeafElement {
  static _Q = "ax:picture";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class SharedComFont extends OxmlCompositeElement {
  static _Q = "ax:font";
  static _A = ["ax:persistence", "r:id"];
  /** persistence. Serialized as `ax:persistence` */
  get persistence() {
    return this._g("ax:persistence");
  }
  set persistence(v) {
    this._s("ax:persistence", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class ActiveXObjectProperty extends OxmlCompositeElement {
  static _Q = "ax:ocxPr";
  static _A = ["ax:name", "ax:value"];
  /** name. Serialized as `ax:name` */
  get name() {
    return this._g("ax:name");
  }
  set name(v) {
    this._s("ax:name", v);
  }
  /** value. Serialized as `ax:value` */
  get value() {
    return this._g("ax:value");
  }
  set value(v) {
    this._s("ax:value", v);
  }
  /** Returns SharedComFont. */
  get sharedComFont() {
    return this._f(SharedComFont);
  }
  /** Returns SharedComPicture. */
  get sharedComPicture() {
    return this._f(SharedComPicture);
  }
}
class ActiveXControlData extends OxmlCompositeElement {
  static _Q = "ax:ocx";
  static _A = ["ax:classid", "ax:license", "r:id", "ax:persistence"];
  /** classid. Serialized as `ax:classid` */
  get activeXControlClassId() {
    return this._g("ax:classid");
  }
  set activeXControlClassId(v) {
    this._s("ax:classid", v);
  }
  /** license. Serialized as `ax:license` */
  get license() {
    return this._g("ax:license");
  }
  set license(v) {
    this._s("ax:license", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** persistence. Serialized as `ax:persistence` */
  get persistence() {
    return this._g("ax:persistence");
  }
  set persistence(v) {
    this._s("ax:persistence", v);
  }
}
function initOfficeActiveXNamespace() {
  SharedComPicture._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SharedComFont._C = {
    "ax:ocxPr": ActiveXObjectProperty
  };
  SharedComFont._D = {
    "ax:persistence": new OxmlAttr("ax:persistence", OxmlType.EnumValue, PersistenceValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ActiveXObjectProperty._C = {
    "ax:font": SharedComFont,
    "ax:picture": SharedComPicture
  };
  ActiveXObjectProperty._D = {
    "ax:name": new OxmlAttr("ax:name", OxmlType.StringValue),
    "ax:value": new OxmlAttr("ax:value", OxmlType.StringValue)
  };
  ActiveXControlData._C = {
    "ax:ocxPr": ActiveXObjectProperty
  };
  ActiveXControlData._D = {
    "ax:classid": new OxmlAttr("ax:classid", OxmlType.StringValue),
    "ax:license": new OxmlAttr("ax:license", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    "ax:persistence": new OxmlAttr("ax:persistence", OxmlType.EnumValue, PersistenceValuesArray)
  };
  return {
    prefix: "ax",
    xmlns: "http://schemas.microsoft.com/office/2006/activeX"
  };
}
export {
  ActiveXControlData,
  ActiveXObjectProperty,
  PersistenceValues,
  PersistenceValuesArray,
  SharedComFont,
  SharedComPicture,
  initOfficeActiveXNamespace
};
