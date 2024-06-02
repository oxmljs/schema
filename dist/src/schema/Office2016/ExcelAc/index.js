import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var ModelTimeGroupingContentType = /* @__PURE__ */ ((ModelTimeGroupingContentType2) => {
  ModelTimeGroupingContentType2["Years"] = "years";
  ModelTimeGroupingContentType2["Quarters"] = "quarters";
  ModelTimeGroupingContentType2["Monthsindex"] = "monthsindex";
  ModelTimeGroupingContentType2["Months"] = "months";
  ModelTimeGroupingContentType2["Daysindex"] = "daysindex";
  ModelTimeGroupingContentType2["Days"] = "days";
  ModelTimeGroupingContentType2["Hours"] = "hours";
  ModelTimeGroupingContentType2["Minutes"] = "minutes";
  ModelTimeGroupingContentType2["Seconds"] = "seconds";
  return ModelTimeGroupingContentType2;
})(ModelTimeGroupingContentType || {});
const ModelTimeGroupingContentTypeArray = [
  "years" /* Years */,
  "quarters" /* Quarters */,
  "monthsindex" /* Monthsindex */,
  "months" /* Months */,
  "daysindex" /* Daysindex */,
  "days" /* Days */,
  "hours" /* Hours */,
  "minutes" /* Minutes */,
  "seconds" /* Seconds */
];
class CalculatedTimeColumn extends OxmlLeafElement {
  static _Q = "x16:calculatedTimeColumn";
  static _A = [":columnName", ":columnId", ":contentType", ":isSelected"];
  /** columnName. Serialized as `:columnName` */
  get columnName() {
    return this._g(":columnName");
  }
  set columnName(v) {
    this._s(":columnName", v);
  }
  /** columnId. Serialized as `:columnId` */
  get columnId() {
    return this._g(":columnId");
  }
  set columnId(v) {
    this._s(":columnId", v);
  }
  /** contentType. Serialized as `:contentType` */
  get contentType() {
    return this._g(":contentType");
  }
  set contentType(v) {
    this._s(":contentType", v);
  }
  /** isSelected. Serialized as `:isSelected` */
  get isSelected() {
    return this._g(":isSelected");
  }
  set isSelected(v) {
    this._s(":isSelected", v);
  }
}
class ModelTimeGrouping extends OxmlCompositeElement {
  static _Q = "x16:modelTimeGrouping";
  static _A = [":tableName", ":columnName", ":columnId"];
  /** tableName. Serialized as `:tableName` */
  get tableName() {
    return this._g(":tableName");
  }
  set tableName(v) {
    this._s(":tableName", v);
  }
  /** columnName. Serialized as `:columnName` */
  get columnName() {
    return this._g(":columnName");
  }
  set columnName(v) {
    this._s(":columnName", v);
  }
  /** columnId. Serialized as `:columnId` */
  get columnId() {
    return this._g(":columnId");
  }
  set columnId(v) {
    this._s(":columnId", v);
  }
}
class ModelTimeGroupings extends OxmlCompositeElement {
  static _Q = "x16:modelTimeGroupings";
}
function initOffice2016ExcelAcNamespace() {
  CalculatedTimeColumn._D = {
    ":columnName": new OxmlAttr(":columnName", OxmlType.StringValue),
    ":columnId": new OxmlAttr(":columnId", OxmlType.StringValue),
    ":contentType": new OxmlAttr(":contentType", OxmlType.EnumValue, ModelTimeGroupingContentTypeArray),
    ":isSelected": new OxmlAttr(":isSelected", OxmlType.BooleanValue)
  };
  ModelTimeGrouping._C = {
    "x16:calculatedTimeColumn": CalculatedTimeColumn
  };
  ModelTimeGrouping._D = {
    ":tableName": new OxmlAttr(":tableName", OxmlType.StringValue),
    ":columnName": new OxmlAttr(":columnName", OxmlType.StringValue),
    ":columnId": new OxmlAttr(":columnId", OxmlType.StringValue)
  };
  ModelTimeGroupings._C = {
    "x16:modelTimeGrouping": ModelTimeGrouping
  };
  return {
    prefix: "x16",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2014/11/main"
  };
}
export {
  CalculatedTimeColumn,
  ModelTimeGrouping,
  ModelTimeGroupingContentType,
  ModelTimeGroupingContentTypeArray,
  ModelTimeGroupings,
  initOffice2016ExcelAcNamespace
};
