import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
var KnownContextNodeTypeValues = /* @__PURE__ */ ((KnownContextNodeTypeValues2) => {
  KnownContextNodeTypeValues2["Root"] = "root";
  KnownContextNodeTypeValues2["UnclassifiedInk"] = "unclassifiedInk";
  KnownContextNodeTypeValues2["WritingRegion"] = "writingRegion";
  KnownContextNodeTypeValues2["AnalysisHint"] = "analysisHint";
  KnownContextNodeTypeValues2["Object"] = "object";
  KnownContextNodeTypeValues2["InkDrawing"] = "inkDrawing";
  KnownContextNodeTypeValues2["Image"] = "image";
  KnownContextNodeTypeValues2["Paragraph"] = "paragraph";
  KnownContextNodeTypeValues2["Line"] = "line";
  KnownContextNodeTypeValues2["InkBullet"] = "inkBullet";
  KnownContextNodeTypeValues2["InkWord"] = "inkWord";
  KnownContextNodeTypeValues2["TextWord"] = "textWord";
  KnownContextNodeTypeValues2["CustomRecognizer"] = "customRecognizer";
  KnownContextNodeTypeValues2["MathRegion"] = "mathRegion";
  KnownContextNodeTypeValues2["MathEquation"] = "mathEquation";
  KnownContextNodeTypeValues2["MathStruct"] = "mathStruct";
  KnownContextNodeTypeValues2["MathSymbol"] = "mathSymbol";
  KnownContextNodeTypeValues2["MathIdentifier"] = "mathIdentifier";
  KnownContextNodeTypeValues2["MathOperator"] = "mathOperator";
  KnownContextNodeTypeValues2["MathNumber"] = "mathNumber";
  KnownContextNodeTypeValues2["NonInkDrawing"] = "nonInkDrawing";
  KnownContextNodeTypeValues2["GroupNode"] = "groupNode";
  KnownContextNodeTypeValues2["MixedDrawing"] = "mixedDrawing";
  return KnownContextNodeTypeValues2;
})(KnownContextNodeTypeValues || {});
const KnownContextNodeTypeValuesArray = [
  "root" /* Root */,
  "unclassifiedInk" /* UnclassifiedInk */,
  "writingRegion" /* WritingRegion */,
  "analysisHint" /* AnalysisHint */,
  "object" /* Object */,
  "inkDrawing" /* InkDrawing */,
  "image" /* Image */,
  "paragraph" /* Paragraph */,
  "line" /* Line */,
  "inkBullet" /* InkBullet */,
  "inkWord" /* InkWord */,
  "textWord" /* TextWord */,
  "customRecognizer" /* CustomRecognizer */,
  "mathRegion" /* MathRegion */,
  "mathEquation" /* MathEquation */,
  "mathStruct" /* MathStruct */,
  "mathSymbol" /* MathSymbol */,
  "mathIdentifier" /* MathIdentifier */,
  "mathOperator" /* MathOperator */,
  "mathNumber" /* MathNumber */,
  "nonInkDrawing" /* NonInkDrawing */,
  "groupNode" /* GroupNode */,
  "mixedDrawing" /* MixedDrawing */
];
var LinkDirectionValues = /* @__PURE__ */ ((LinkDirectionValues2) => {
  LinkDirectionValues2["To"] = "to";
  LinkDirectionValues2["From"] = "from";
  LinkDirectionValues2["With"] = "with";
  return LinkDirectionValues2;
})(LinkDirectionValues || {});
const LinkDirectionValuesArray = [
  "to" /* To */,
  "from" /* From */,
  "with" /* With */
];
var KnownSemanticTypeValues = /* @__PURE__ */ ((KnownSemanticTypeValues2) => {
  KnownSemanticTypeValues2["None"] = "none";
  KnownSemanticTypeValues2["Underline"] = "underline";
  KnownSemanticTypeValues2["Strikethrough"] = "strikethrough";
  KnownSemanticTypeValues2["Highlight"] = "highlight";
  KnownSemanticTypeValues2["ScratchOut"] = "scratchOut";
  KnownSemanticTypeValues2["VerticalRange"] = "verticalRange";
  KnownSemanticTypeValues2["Callout"] = "callout";
  KnownSemanticTypeValues2["Enclosure"] = "enclosure";
  KnownSemanticTypeValues2["Comment"] = "comment";
  KnownSemanticTypeValues2["Container"] = "container";
  KnownSemanticTypeValues2["Connector"] = "connector";
  return KnownSemanticTypeValues2;
})(KnownSemanticTypeValues || {});
const KnownSemanticTypeValuesArray = [
  "none" /* None */,
  "underline" /* Underline */,
  "strikethrough" /* Strikethrough */,
  "highlight" /* Highlight */,
  "scratchOut" /* ScratchOut */,
  "verticalRange" /* VerticalRange */,
  "callout" /* Callout */,
  "enclosure" /* Enclosure */,
  "comment" /* Comment */,
  "container" /* Container */,
  "connector" /* Connector */
];
class ContextLinkType extends OxmlLeafElement {
  static _A = [":direction", ":ref"];
  /** direction. Serialized as `:direction` */
  get direction() {
    return this._g(":direction");
  }
  set direction(v) {
    this._s(":direction", v);
  }
  /** ref. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class DestinationLink extends ContextLinkType {
  static _Q = "msink:destinationLink";
}
class SourceLink extends ContextLinkType {
  static _Q = "msink:sourceLink";
}
class ContextNodeProperty extends OxmlLeafTextElement {
  static _Q = "msink:property";
  static _A = [":type"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
}
class ContextNode extends OxmlCompositeElement {
  static _Q = "msink:context";
  static _A = [":id", ":type", ":rotatedBoundingBox", ":alignmentLevel", ":contentType", ":ascender", ":descender", ":baseline", ":midline", ":customRecognizerId", ":mathML", ":mathStruct", ":mathSymbol", ":beginModifierType", ":endModifierType", ":rotationAngle", ":hotPoints", ":centroid", ":semanticType", ":shapeName", ":shapeGeometry"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** rotatedBoundingBox. Serialized as `:rotatedBoundingBox` */
  get rotatedBoundingBox() {
    return this._g(":rotatedBoundingBox");
  }
  set rotatedBoundingBox(v) {
    this._s(":rotatedBoundingBox", v);
  }
  /** alignmentLevel. Serialized as `:alignmentLevel` */
  get alignmentLevel() {
    return this._g(":alignmentLevel");
  }
  set alignmentLevel(v) {
    this._s(":alignmentLevel", v);
  }
  /** contentType. Serialized as `:contentType` */
  get contentType() {
    return this._g(":contentType");
  }
  set contentType(v) {
    this._s(":contentType", v);
  }
  /** ascender. Serialized as `:ascender` */
  get ascender() {
    return this._g(":ascender");
  }
  set ascender(v) {
    this._s(":ascender", v);
  }
  /** descender. Serialized as `:descender` */
  get descender() {
    return this._g(":descender");
  }
  set descender(v) {
    this._s(":descender", v);
  }
  /** baseline. Serialized as `:baseline` */
  get baseline() {
    return this._g(":baseline");
  }
  set baseline(v) {
    this._s(":baseline", v);
  }
  /** midline. Serialized as `:midline` */
  get midline() {
    return this._g(":midline");
  }
  set midline(v) {
    this._s(":midline", v);
  }
  /** customRecognizerId. Serialized as `:customRecognizerId` */
  get customRecognizerId() {
    return this._g(":customRecognizerId");
  }
  set customRecognizerId(v) {
    this._s(":customRecognizerId", v);
  }
  /** mathML. Serialized as `:mathML` */
  get mathML() {
    return this._g(":mathML");
  }
  set mathML(v) {
    this._s(":mathML", v);
  }
  /** mathStruct. Serialized as `:mathStruct` */
  get mathStruct() {
    return this._g(":mathStruct");
  }
  set mathStruct(v) {
    this._s(":mathStruct", v);
  }
  /** mathSymbol. Serialized as `:mathSymbol` */
  get mathSymbol() {
    return this._g(":mathSymbol");
  }
  set mathSymbol(v) {
    this._s(":mathSymbol", v);
  }
  /** beginModifierType. Serialized as `:beginModifierType` */
  get beginModifierType() {
    return this._g(":beginModifierType");
  }
  set beginModifierType(v) {
    this._s(":beginModifierType", v);
  }
  /** endModifierType. Serialized as `:endModifierType` */
  get endModifierType() {
    return this._g(":endModifierType");
  }
  set endModifierType(v) {
    this._s(":endModifierType", v);
  }
  /** rotationAngle. Serialized as `:rotationAngle` */
  get rotationAngle() {
    return this._g(":rotationAngle");
  }
  set rotationAngle(v) {
    this._s(":rotationAngle", v);
  }
  /** hotPoints. Serialized as `:hotPoints` */
  get hotPoints() {
    return this._g(":hotPoints");
  }
  set hotPoints(v) {
    this._s(":hotPoints", v);
  }
  /** centroid. Serialized as `:centroid` */
  get centroid() {
    return this._g(":centroid");
  }
  set centroid(v) {
    this._s(":centroid", v);
  }
  /** semanticType. Serialized as `:semanticType` */
  get semanticType() {
    return this._g(":semanticType");
  }
  set semanticType(v) {
    this._s(":semanticType", v);
  }
  /** shapeName. Serialized as `:shapeName` */
  get shapeName() {
    return this._g(":shapeName");
  }
  set shapeName(v) {
    this._s(":shapeName", v);
  }
  /** shapeGeometry. Serialized as `:shapeGeometry` */
  get shapeGeometry() {
    return this._g(":shapeGeometry");
  }
  set shapeGeometry(v) {
    this._s(":shapeGeometry", v);
  }
}
function initOffice2010InkNamespace() {
  ContextLinkType._D = {
    ":direction": new OxmlAttr(":direction", OxmlType.EnumValue, LinkDirectionValuesArray),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  ContextNodeProperty._D = {
    ":type": new OxmlAttr(":type", OxmlType.StringValue)
  };
  ContextNode._C = {
    "msink:property": ContextNodeProperty,
    "msink:sourceLink": SourceLink,
    "msink:destinationLink": DestinationLink
  };
  ContextNode._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":rotatedBoundingBox": new OxmlAttr(":rotatedBoundingBox", OxmlType.ListValue),
    ":alignmentLevel": new OxmlAttr(":alignmentLevel", OxmlType.Int32Value),
    ":contentType": new OxmlAttr(":contentType", OxmlType.Int32Value),
    ":ascender": new OxmlAttr(":ascender", OxmlType.StringValue),
    ":descender": new OxmlAttr(":descender", OxmlType.StringValue),
    ":baseline": new OxmlAttr(":baseline", OxmlType.StringValue),
    ":midline": new OxmlAttr(":midline", OxmlType.StringValue),
    ":customRecognizerId": new OxmlAttr(":customRecognizerId", OxmlType.StringValue),
    ":mathML": new OxmlAttr(":mathML", OxmlType.StringValue),
    ":mathStruct": new OxmlAttr(":mathStruct", OxmlType.StringValue),
    ":mathSymbol": new OxmlAttr(":mathSymbol", OxmlType.StringValue),
    ":beginModifierType": new OxmlAttr(":beginModifierType", OxmlType.StringValue),
    ":endModifierType": new OxmlAttr(":endModifierType", OxmlType.StringValue),
    ":rotationAngle": new OxmlAttr(":rotationAngle", OxmlType.Int32Value),
    ":hotPoints": new OxmlAttr(":hotPoints", OxmlType.ListValue),
    ":centroid": new OxmlAttr(":centroid", OxmlType.StringValue),
    ":semanticType": new OxmlAttr(":semanticType", OxmlType.StringValue),
    ":shapeName": new OxmlAttr(":shapeName", OxmlType.StringValue),
    ":shapeGeometry": new OxmlAttr(":shapeGeometry", OxmlType.ListValue)
  };
  return {
    prefix: "msink",
    xmlns: "http://schemas.microsoft.com/ink/2010/main"
  };
}
export {
  ContextLinkType,
  ContextNode,
  ContextNodeProperty,
  DestinationLink,
  KnownContextNodeTypeValues,
  KnownContextNodeTypeValuesArray,
  KnownSemanticTypeValues,
  KnownSemanticTypeValuesArray,
  LinkDirectionValues,
  LinkDirectionValuesArray,
  SourceLink,
  initOffice2010InkNamespace
};
