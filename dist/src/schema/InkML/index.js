import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { Emma as EmmaEmma } from "../EMMA";
var ChannelDataTypeValues = /* @__PURE__ */ ((ChannelDataTypeValues2) => {
  ChannelDataTypeValues2["Integer"] = "integer";
  ChannelDataTypeValues2["Decimal"] = "decimal";
  ChannelDataTypeValues2["Boolean"] = "boolean";
  return ChannelDataTypeValues2;
})(ChannelDataTypeValues || {});
const ChannelDataTypeValuesArray = [
  "integer" /* Integer */,
  "decimal" /* Decimal */,
  "boolean" /* Boolean */
];
var ChannelValueOrientationValues = /* @__PURE__ */ ((ChannelValueOrientationValues2) => {
  ChannelValueOrientationValues2["PlusVe"] = "+ve";
  ChannelValueOrientationValues2["MinusVe"] = "-ve";
  return ChannelValueOrientationValues2;
})(ChannelValueOrientationValues || {});
const ChannelValueOrientationValuesArray = [
  "+ve" /* PlusVe */,
  "-ve" /* MinusVe */
];
var StandardChannelPropertyNameValues = /* @__PURE__ */ ((StandardChannelPropertyNameValues2) => {
  StandardChannelPropertyNameValues2["Threshold"] = "threshold";
  StandardChannelPropertyNameValues2["Resolution"] = "resolution";
  StandardChannelPropertyNameValues2["Quantization"] = "quantization";
  StandardChannelPropertyNameValues2["Noise"] = "noise";
  StandardChannelPropertyNameValues2["Accuracy"] = "accuracy";
  StandardChannelPropertyNameValues2["CrossCoupling"] = "crossCoupling";
  StandardChannelPropertyNameValues2["Skew"] = "skew";
  StandardChannelPropertyNameValues2["MinBandwidth"] = "minBandwidth";
  StandardChannelPropertyNameValues2["PeakRate"] = "peakRate";
  StandardChannelPropertyNameValues2["Distortion"] = "distortion";
  return StandardChannelPropertyNameValues2;
})(StandardChannelPropertyNameValues || {});
const StandardChannelPropertyNameValuesArray = [
  "threshold" /* Threshold */,
  "resolution" /* Resolution */,
  "quantization" /* Quantization */,
  "noise" /* Noise */,
  "accuracy" /* Accuracy */,
  "crossCoupling" /* CrossCoupling */,
  "skew" /* Skew */,
  "minBandwidth" /* MinBandwidth */,
  "peakRate" /* PeakRate */,
  "distortion" /* Distortion */
];
var StandardBrushPropertyNameValues = /* @__PURE__ */ ((StandardBrushPropertyNameValues2) => {
  StandardBrushPropertyNameValues2["Width"] = "width";
  StandardBrushPropertyNameValues2["Height"] = "height";
  StandardBrushPropertyNameValues2["Color"] = "color";
  StandardBrushPropertyNameValues2["Transparency"] = "transparency";
  StandardBrushPropertyNameValues2["Tip"] = "tip";
  StandardBrushPropertyNameValues2["RasterOp"] = "rasterOp";
  StandardBrushPropertyNameValues2["AntiAliased"] = "antiAliased";
  StandardBrushPropertyNameValues2["FitToCurve"] = "fitToCurve";
  StandardBrushPropertyNameValues2["IgnorePressure"] = "ignorePressure";
  return StandardBrushPropertyNameValues2;
})(StandardBrushPropertyNameValues || {});
const StandardBrushPropertyNameValuesArray = [
  "width" /* Width */,
  "height" /* Height */,
  "color" /* Color */,
  "transparency" /* Transparency */,
  "tip" /* Tip */,
  "rasterOp" /* RasterOp */,
  "antiAliased" /* AntiAliased */,
  "fitToCurve" /* FitToCurve */,
  "ignorePressure" /* IgnorePressure */
];
var StandardChannelNameValues = /* @__PURE__ */ ((StandardChannelNameValues2) => {
  StandardChannelNameValues2["XCoordinate"] = "X";
  StandardChannelNameValues2["YCoordinate"] = "Y";
  StandardChannelNameValues2["ZCoordinate"] = "Z";
  StandardChannelNameValues2["PenTipForce"] = "F";
  StandardChannelNameValues2["TangentPressure"] = "TP";
  StandardChannelNameValues2["ButtonPressure"] = "BP";
  StandardChannelNameValues2["TipSwitchState"] = "S";
  StandardChannelNameValues2["SideButton1State"] = "B1";
  StandardChannelNameValues2["SideButton2State"] = "B2";
  StandardChannelNameValues2["SideButton3State"] = "B3";
  StandardChannelNameValues2["SideButton4State"] = "B4";
  StandardChannelNameValues2["PenInverted"] = "E";
  StandardChannelNameValues2["TiltAlongXAxis"] = "OTx";
  StandardChannelNameValues2["TiltAlongYAxis"] = "OTy";
  StandardChannelNameValues2["PenAzimuthAngle"] = "OA";
  StandardChannelNameValues2["PenElevationAngle"] = "OE";
  StandardChannelNameValues2["PexAxisRotation"] = "OR";
  StandardChannelNameValues2["PitchRotation"] = "RP";
  StandardChannelNameValues2["RollRotation"] = "RR";
  StandardChannelNameValues2["YawRotation"] = "RY";
  StandardChannelNameValues2["ColorValue"] = "C";
  StandardChannelNameValues2["RedColorValue"] = "CR";
  StandardChannelNameValues2["GreenColorValue"] = "CG";
  StandardChannelNameValues2["BlueColorValue"] = "CB";
  StandardChannelNameValues2["CyanColorValue"] = "CC";
  StandardChannelNameValues2["MegentaColorValue"] = "CM";
  StandardChannelNameValues2["YellowColorValue"] = "CY";
  StandardChannelNameValues2["BlackColorValue"] = "CK";
  StandardChannelNameValues2["StrokesWidth"] = "W";
  StandardChannelNameValues2["Time"] = "T";
  StandardChannelNameValues2["SerialNumber"] = "SN";
  StandardChannelNameValues2["TouchWidth"] = "TW";
  StandardChannelNameValues2["TouchHeight"] = "TH";
  StandardChannelNameValues2["FingerTouch"] = "TC";
  return StandardChannelNameValues2;
})(StandardChannelNameValues || {});
const StandardChannelNameValuesArray = [
  "X" /* XCoordinate */,
  "Y" /* YCoordinate */,
  "Z" /* ZCoordinate */,
  "F" /* PenTipForce */,
  "TP" /* TangentPressure */,
  "BP" /* ButtonPressure */,
  "S" /* TipSwitchState */,
  "B1" /* SideButton1State */,
  "B2" /* SideButton2State */,
  "B3" /* SideButton3State */,
  "B4" /* SideButton4State */,
  "E" /* PenInverted */,
  "OTx" /* TiltAlongXAxis */,
  "OTy" /* TiltAlongYAxis */,
  "OA" /* PenAzimuthAngle */,
  "OE" /* PenElevationAngle */,
  "OR" /* PexAxisRotation */,
  "RP" /* PitchRotation */,
  "RR" /* RollRotation */,
  "RY" /* YawRotation */,
  "C" /* ColorValue */,
  "CR" /* RedColorValue */,
  "CG" /* GreenColorValue */,
  "CB" /* BlueColorValue */,
  "CC" /* CyanColorValue */,
  "CM" /* MegentaColorValue */,
  "CY" /* YellowColorValue */,
  "CK" /* BlackColorValue */,
  "W" /* StrokesWidth */,
  "T" /* Time */,
  "SN" /* SerialNumber */,
  "TW" /* TouchWidth */,
  "TH" /* TouchHeight */,
  "TC" /* FingerTouch */
];
var StandardLengthUnitsValues = /* @__PURE__ */ ((StandardLengthUnitsValues2) => {
  StandardLengthUnitsValues2["Meter"] = "m";
  StandardLengthUnitsValues2["Centimeter"] = "cm";
  StandardLengthUnitsValues2["Millimeter"] = "mm";
  StandardLengthUnitsValues2["Inche"] = "in";
  StandardLengthUnitsValues2["Point"] = "pt";
  StandardLengthUnitsValues2["Pica"] = "pc";
  StandardLengthUnitsValues2["Em"] = "em";
  StandardLengthUnitsValues2["Ex"] = "ex";
  return StandardLengthUnitsValues2;
})(StandardLengthUnitsValues || {});
const StandardLengthUnitsValuesArray = [
  "m" /* Meter */,
  "cm" /* Centimeter */,
  "mm" /* Millimeter */,
  "in" /* Inche */,
  "pt" /* Point */,
  "pc" /* Pica */,
  "em" /* Em */,
  "ex" /* Ex */
];
var StandardPerLengthUnitsValues = /* @__PURE__ */ ((StandardPerLengthUnitsValues2) => {
  StandardPerLengthUnitsValues2["PerMeter"] = "1/m";
  StandardPerLengthUnitsValues2["PerCentimeter"] = "1/cm";
  StandardPerLengthUnitsValues2["PerMillimeter"] = "1/mm";
  StandardPerLengthUnitsValues2["PerInche"] = "1/in";
  StandardPerLengthUnitsValues2["PerPoint"] = "1/pt";
  StandardPerLengthUnitsValues2["PerPica"] = "1/pc";
  StandardPerLengthUnitsValues2["PerEm"] = "1/em";
  StandardPerLengthUnitsValues2["PerEx"] = "1/ex";
  return StandardPerLengthUnitsValues2;
})(StandardPerLengthUnitsValues || {});
const StandardPerLengthUnitsValuesArray = [
  "1/m" /* PerMeter */,
  "1/cm" /* PerCentimeter */,
  "1/mm" /* PerMillimeter */,
  "1/in" /* PerInche */,
  "1/pt" /* PerPoint */,
  "1/pc" /* PerPica */,
  "1/em" /* PerEm */,
  "1/ex" /* PerEx */
];
var StandardTimeUnitsValues = /* @__PURE__ */ ((StandardTimeUnitsValues2) => {
  StandardTimeUnitsValues2["Second"] = "s";
  StandardTimeUnitsValues2["Millisecond"] = "ms";
  return StandardTimeUnitsValues2;
})(StandardTimeUnitsValues || {});
const StandardTimeUnitsValuesArray = [
  "s" /* Second */,
  "ms" /* Millisecond */
];
var StandardPerTimeUnitsValues = /* @__PURE__ */ ((StandardPerTimeUnitsValues2) => {
  StandardPerTimeUnitsValues2["PerSecond"] = "1/s";
  StandardPerTimeUnitsValues2["PerMillisecond"] = "1/ms";
  return StandardPerTimeUnitsValues2;
})(StandardPerTimeUnitsValues || {});
const StandardPerTimeUnitsValuesArray = [
  "1/s" /* PerSecond */,
  "1/ms" /* PerMillisecond */
];
var StandardMassForceUnitsValues = /* @__PURE__ */ ((StandardMassForceUnitsValues2) => {
  StandardMassForceUnitsValues2["Kilogram"] = "Kg";
  StandardMassForceUnitsValues2["Gram"] = "g";
  StandardMassForceUnitsValues2["Milligram"] = "mg";
  StandardMassForceUnitsValues2["Newton"] = "N";
  StandardMassForceUnitsValues2["Pond"] = "lb";
  return StandardMassForceUnitsValues2;
})(StandardMassForceUnitsValues || {});
const StandardMassForceUnitsValuesArray = [
  "Kg" /* Kilogram */,
  "g" /* Gram */,
  "mg" /* Milligram */,
  "N" /* Newton */,
  "lb" /* Pond */
];
var StandardPerMassForceUnitsValues = /* @__PURE__ */ ((StandardPerMassForceUnitsValues2) => {
  StandardPerMassForceUnitsValues2["PerKilogram"] = "1/Kg";
  StandardPerMassForceUnitsValues2["PerGram"] = "1/g";
  StandardPerMassForceUnitsValues2["PerMilligram"] = "1/mg";
  StandardPerMassForceUnitsValues2["PerNewton"] = "1/N";
  StandardPerMassForceUnitsValues2["PerPond"] = "1/lb";
  return StandardPerMassForceUnitsValues2;
})(StandardPerMassForceUnitsValues || {});
const StandardPerMassForceUnitsValuesArray = [
  "1/Kg" /* PerKilogram */,
  "1/g" /* PerGram */,
  "1/mg" /* PerMilligram */,
  "1/N" /* PerNewton */,
  "1/lb" /* PerPond */
];
var StandardAngleUnitsValues = /* @__PURE__ */ ((StandardAngleUnitsValues2) => {
  StandardAngleUnitsValues2["Degree"] = "deg";
  StandardAngleUnitsValues2["Radian"] = "rad";
  return StandardAngleUnitsValues2;
})(StandardAngleUnitsValues || {});
const StandardAngleUnitsValuesArray = [
  "deg" /* Degree */,
  "rad" /* Radian */
];
var StandardPerAngleUnitsValues = /* @__PURE__ */ ((StandardPerAngleUnitsValues2) => {
  StandardPerAngleUnitsValues2["PerDegree"] = "1/deg";
  StandardPerAngleUnitsValues2["PerRadian"] = "1/rad";
  return StandardPerAngleUnitsValues2;
})(StandardPerAngleUnitsValues || {});
const StandardPerAngleUnitsValuesArray = [
  "1/deg" /* PerDegree */,
  "1/rad" /* PerRadian */
];
var StandardOtherUnitsValues = /* @__PURE__ */ ((StandardOtherUnitsValues2) => {
  StandardOtherUnitsValues2["Percentage"] = "%";
  StandardOtherUnitsValues2["DeviceResolution"] = "dev";
  StandardOtherUnitsValues2["None"] = "none";
  return StandardOtherUnitsValues2;
})(StandardOtherUnitsValues || {});
const StandardOtherUnitsValuesArray = [
  "%" /* Percentage */,
  "dev" /* DeviceResolution */,
  "none" /* None */
];
var StandardPerOtherUnitsValues = /* @__PURE__ */ ((StandardPerOtherUnitsValues2) => {
  StandardPerOtherUnitsValues2["PerPercentage"] = "1/%";
  StandardPerOtherUnitsValues2["PerDeviceResolution"] = "1/dev";
  return StandardPerOtherUnitsValues2;
})(StandardPerOtherUnitsValues || {});
const StandardPerOtherUnitsValuesArray = [
  "1/%" /* PerPercentage */,
  "1/dev" /* PerDeviceResolution */
];
var TraceTypeValues = /* @__PURE__ */ ((TraceTypeValues2) => {
  TraceTypeValues2["PenDown"] = "penDown";
  TraceTypeValues2["PenUp"] = "penUp";
  TraceTypeValues2["Indeterminate"] = "indeterminate";
  return TraceTypeValues2;
})(TraceTypeValues || {});
const TraceTypeValuesArray = [
  "penDown" /* PenDown */,
  "penUp" /* PenUp */,
  "indeterminate" /* Indeterminate */
];
var TraceContinuationValues = /* @__PURE__ */ ((TraceContinuationValues2) => {
  TraceContinuationValues2["Begin"] = "begin";
  TraceContinuationValues2["End"] = "end";
  TraceContinuationValues2["Middle"] = "middle";
  return TraceContinuationValues2;
})(TraceContinuationValues || {});
const TraceContinuationValuesArray = [
  "begin" /* Begin */,
  "end" /* End */,
  "middle" /* Middle */
];
var RasterOperationValues = /* @__PURE__ */ ((RasterOperationValues2) => {
  RasterOperationValues2["Black"] = "black";
  RasterOperationValues2["NotMergePen"] = "notMergePen";
  RasterOperationValues2["MaskNotPen"] = "maskNotPen";
  RasterOperationValues2["NotCopyPen"] = "notCopyPen";
  RasterOperationValues2["MaskPenNot"] = "maskPenNot";
  RasterOperationValues2["Not"] = "not";
  RasterOperationValues2["XOrPen"] = "xOrPen";
  RasterOperationValues2["NotMaskPen"] = "notMaskPen";
  RasterOperationValues2["MaskPen"] = "maskPen";
  RasterOperationValues2["NotXOrPen"] = "notXOrPen";
  RasterOperationValues2["NoOperation"] = "noOperation";
  RasterOperationValues2["MergeNotPen"] = "mergeNotPen";
  RasterOperationValues2["CopyPen"] = "copyPen";
  RasterOperationValues2["MergePenNot"] = "mergePenNot";
  RasterOperationValues2["MergePen"] = "mergePen";
  RasterOperationValues2["White"] = "white";
  return RasterOperationValues2;
})(RasterOperationValues || {});
const RasterOperationValuesArray = [
  "black" /* Black */,
  "notMergePen" /* NotMergePen */,
  "maskNotPen" /* MaskNotPen */,
  "notCopyPen" /* NotCopyPen */,
  "maskPenNot" /* MaskPenNot */,
  "not" /* Not */,
  "xOrPen" /* XOrPen */,
  "notMaskPen" /* NotMaskPen */,
  "maskPen" /* MaskPen */,
  "notXOrPen" /* NotXOrPen */,
  "noOperation" /* NoOperation */,
  "mergeNotPen" /* MergeNotPen */,
  "copyPen" /* CopyPen */,
  "mergePenNot" /* MergePenNot */,
  "mergePen" /* MergePen */,
  "white" /* White */
];
var PenTipShapeValues = /* @__PURE__ */ ((PenTipShapeValues2) => {
  PenTipShapeValues2["Ellipse"] = "ellipse";
  PenTipShapeValues2["Rectangle"] = "rectangle";
  PenTipShapeValues2["Drop"] = "drop";
  return PenTipShapeValues2;
})(PenTipShapeValues || {});
const PenTipShapeValuesArray = [
  "ellipse" /* Ellipse */,
  "rectangle" /* Rectangle */,
  "drop" /* Drop */
];
var MappingTypeValues = /* @__PURE__ */ ((MappingTypeValues2) => {
  MappingTypeValues2["Identity"] = "identity";
  MappingTypeValues2["Lookup"] = "lookup";
  MappingTypeValues2["Affine"] = "affine";
  MappingTypeValues2["MathML"] = "mathml";
  MappingTypeValues2["Product"] = "product";
  MappingTypeValues2["Unknown"] = "unknown";
  return MappingTypeValues2;
})(MappingTypeValues || {});
const MappingTypeValuesArray = [
  "identity" /* Identity */,
  "lookup" /* Lookup */,
  "affine" /* Affine */,
  "mathml" /* MathML */,
  "product" /* Product */,
  "unknown" /* Unknown */
];
var TableApplyValues = /* @__PURE__ */ ((TableApplyValues2) => {
  TableApplyValues2["Absolute"] = "absolute";
  TableApplyValues2["Relative"] = "relative";
  return TableApplyValues2;
})(TableApplyValues || {});
const TableApplyValuesArray = [
  "absolute" /* Absolute */,
  "relative" /* Relative */
];
var TableInterpolationValues = /* @__PURE__ */ ((TableInterpolationValues2) => {
  TableInterpolationValues2["Floor"] = "floor";
  TableInterpolationValues2["Middle"] = "middle";
  TableInterpolationValues2["Ceiling"] = "ceiling";
  TableInterpolationValues2["Linear"] = "linear";
  TableInterpolationValues2["Cubic"] = "cubic";
  return TableInterpolationValues2;
})(TableInterpolationValues || {});
const TableInterpolationValuesArray = [
  "floor" /* Floor */,
  "middle" /* Middle */,
  "ceiling" /* Ceiling */,
  "linear" /* Linear */,
  "cubic" /* Cubic */
];
class Definitions extends OxmlCompositeElement {
  static _Q = "inkml:definitions";
}
class Context extends OxmlCompositeElement {
  static _Q = "inkml:context";
  static _A = ["xml:id", ":contextRef", ":canvasRef", ":canvasTransformRef", ":traceFormatRef", ":inkSourceRef", ":brushRef", ":timestampRef"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** contextRef. Serialized as `:contextRef` */
  get contextRef() {
    return this._g(":contextRef");
  }
  set contextRef(v) {
    this._s(":contextRef", v);
  }
  /** canvasRef. Serialized as `:canvasRef` */
  get canvasRef() {
    return this._g(":canvasRef");
  }
  set canvasRef(v) {
    this._s(":canvasRef", v);
  }
  /** canvasTransformRef. Serialized as `:canvasTransformRef` */
  get canvasTransformRef() {
    return this._g(":canvasTransformRef");
  }
  set canvasTransformRef(v) {
    this._s(":canvasTransformRef", v);
  }
  /** traceFormatRef. Serialized as `:traceFormatRef` */
  get traceFromatRef() {
    return this._g(":traceFormatRef");
  }
  set traceFromatRef(v) {
    this._s(":traceFormatRef", v);
  }
  /** inkSourceRef. Serialized as `:inkSourceRef` */
  get inkSourceRef() {
    return this._g(":inkSourceRef");
  }
  set inkSourceRef(v) {
    this._s(":inkSourceRef", v);
  }
  /** brushRef. Serialized as `:brushRef` */
  get brushRef() {
    return this._g(":brushRef");
  }
  set brushRef(v) {
    this._s(":brushRef", v);
  }
  /** timestampRef. Serialized as `:timestampRef` */
  get timestampRef() {
    return this._g(":timestampRef");
  }
  set timestampRef(v) {
    this._s(":timestampRef", v);
  }
  /** Returns Canvas. */
  get canvas() {
    return this._f(Canvas);
  }
  /** Returns CanvasTransform. */
  get canvasTransform() {
    return this._f(CanvasTransform);
  }
  /** Returns TraceFormat. */
  get traceFormat() {
    return this._f(TraceFormat);
  }
  /** Returns InkSource. */
  get inkSource() {
    return this._f(InkSource);
  }
  /** Returns Brush. */
  get brush() {
    return this._f(Brush);
  }
  /** Returns Timestamp. */
  get timestamp() {
    return this._f(Timestamp);
  }
}
class TraceView extends OxmlCompositeElement {
  static _Q = "inkml:traceView";
  static _A = ["xml:id", ":contextRef", ":traceDataRef", ":from", ":to"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** contextRef. Serialized as `:contextRef` */
  get contextRef() {
    return this._g(":contextRef");
  }
  set contextRef(v) {
    this._s(":contextRef", v);
  }
  /** traceDataRef. Serialized as `:traceDataRef` */
  get traceDataRef() {
    return this._g(":traceDataRef");
  }
  set traceDataRef(v) {
    this._s(":traceDataRef", v);
  }
  /** from. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** to. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
}
class TraceGroup extends OxmlCompositeElement {
  static _Q = "inkml:traceGroup";
  static _A = ["xml:id", ":contextRef", ":brushRef"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** contextRef. Serialized as `:contextRef` */
  get contextRef() {
    return this._g(":contextRef");
  }
  set contextRef(v) {
    this._s(":contextRef", v);
  }
  /** brushRef. Serialized as `:brushRef` */
  get brushRef() {
    return this._g(":brushRef");
  }
  set brushRef(v) {
    this._s(":brushRef", v);
  }
}
class Trace extends OxmlLeafTextElement {
  static _Q = "inkml:trace";
  static _A = ["xml:id", ":type", ":continuation", ":priorRef", ":contextRef", ":brushRef", ":duration", ":timeOffset"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** continuation. Serialized as `:continuation` */
  get continuation() {
    return this._g(":continuation");
  }
  set continuation(v) {
    this._s(":continuation", v);
  }
  /** priorRef. Serialized as `:priorRef` */
  get priorRef() {
    return this._g(":priorRef");
  }
  set priorRef(v) {
    this._s(":priorRef", v);
  }
  /** contextRef. Serialized as `:contextRef` */
  get contextRef() {
    return this._g(":contextRef");
  }
  set contextRef(v) {
    this._s(":contextRef", v);
  }
  /** brushRef. Serialized as `:brushRef` */
  get brushRef() {
    return this._g(":brushRef");
  }
  set brushRef(v) {
    this._s(":brushRef", v);
  }
  /** duration. Serialized as `:duration` */
  get duration() {
    return this._g(":duration");
  }
  set duration(v) {
    this._s(":duration", v);
  }
  /** timeOffset. Serialized as `:timeOffset` */
  get timeOffset() {
    return this._g(":timeOffset");
  }
  set timeOffset(v) {
    this._s(":timeOffset", v);
  }
}
class Timestamp extends OxmlLeafElement {
  static _Q = "inkml:timestamp";
  static _A = ["xml:id", ":time", ":timestampRef", ":timeString", ":timeOffset"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** timestampRef. Serialized as `:timestampRef` */
  get timestampRef() {
    return this._g(":timestampRef");
  }
  set timestampRef(v) {
    this._s(":timestampRef", v);
  }
  /** timeString. Serialized as `:timeString` */
  get timeString() {
    return this._g(":timeString");
  }
  set timeString(v) {
    this._s(":timeString", v);
  }
  /** timeOffset. Serialized as `:timeOffset` */
  get timeOffset() {
    return this._g(":timeOffset");
  }
  set timeOffset(v) {
    this._s(":timeOffset", v);
  }
}
class Brush extends OxmlCompositeElement {
  static _Q = "inkml:brush";
  static _A = ["xml:id", ":brushRef"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** brushRef. Serialized as `:brushRef` */
  get brushRef() {
    return this._g(":brushRef");
  }
  set brushRef(v) {
    this._s(":brushRef", v);
  }
}
class InkSource extends OxmlCompositeElement {
  static _Q = "inkml:inkSource";
  static _A = ["xml:id", ":manufacturer", ":model", ":serialNo", ":specificationRef", ":description"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** manufacturer. Serialized as `:manufacturer` */
  get manufacturer() {
    return this._g(":manufacturer");
  }
  set manufacturer(v) {
    this._s(":manufacturer", v);
  }
  /** model. Serialized as `:model` */
  get model() {
    return this._g(":model");
  }
  set model(v) {
    this._s(":model", v);
  }
  /** serialNo. Serialized as `:serialNo` */
  get serialNo() {
    return this._g(":serialNo");
  }
  set serialNo(v) {
    this._s(":serialNo", v);
  }
  /** specificationRef. Serialized as `:specificationRef` */
  get specificationRef() {
    return this._g(":specificationRef");
  }
  set specificationRef(v) {
    this._s(":specificationRef", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** Returns TraceFormat. */
  get traceFormat() {
    return this._f(TraceFormat);
  }
  /** Returns SampleRate. */
  get sampleRate() {
    return this._f(SampleRate);
  }
  /** Returns Latency. */
  get latency() {
    return this._f(Latency);
  }
  /** Returns ActiveArea. */
  get activeArea() {
    return this._f(ActiveArea);
  }
}
class CanvasTransform extends OxmlCompositeElement {
  static _Q = "inkml:canvasTransform";
  static _A = ["xml:id", ":invertible"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** invertible. Serialized as `:invertible` */
  get invertible() {
    return this._g(":invertible");
  }
  set invertible(v) {
    this._s(":invertible", v);
  }
}
class Canvas extends OxmlCompositeElement {
  static _Q = "inkml:canvas";
  static _A = ["xml:id", ":traceFormatRef"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** traceFormatRef. Serialized as `:traceFormatRef` */
  get traceFormatRef() {
    return this._g(":traceFormatRef");
  }
  set traceFormatRef(v) {
    this._s(":traceFormatRef", v);
  }
  /** Returns TraceFormat. */
  get traceFormat() {
    return this._f(TraceFormat);
  }
}
class BrushProperty extends OxmlCompositeElement {
  static _Q = "inkml:brushProperty";
  static _A = [":name", ":value", ":units"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
  /** units. Serialized as `:units` */
  get units() {
    return this._g(":units");
  }
  set units(v) {
    this._s(":units", v);
  }
}
class AnnotationXml extends OxmlCompositeElement {
  static _Q = "inkml:annotationXML";
  static _A = [":type", ":encoding", ":href"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** encoding. Serialized as `:encoding` */
  get encoding() {
    return this._g(":encoding");
  }
  set encoding(v) {
    this._s(":encoding", v);
  }
  /** href. Serialized as `:href` */
  get href() {
    return this._g(":href");
  }
  set href(v) {
    this._s(":href", v);
  }
  /** Returns EmmaEmma. */
  get emma() {
    return this._f(EmmaEmma);
  }
}
class Annotation extends OxmlLeafTextElement {
  static _Q = "inkml:annotation";
  static _A = [":type", ":encoding"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** encoding. Serialized as `:encoding` */
  get encoding() {
    return this._g(":encoding");
  }
  set encoding(v) {
    this._s(":encoding", v);
  }
}
class ChannelProperties extends OxmlCompositeElement {
  static _Q = "inkml:channelProperties";
}
class SourceProperty extends OxmlLeafElement {
  static _Q = "inkml:srcProperty";
  static _A = [":name", ":value", ":units"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
  /** units. Serialized as `:units` */
  get units() {
    return this._g(":units");
  }
  set units(v) {
    this._s(":units", v);
  }
}
class ActiveArea extends OxmlLeafElement {
  static _Q = "inkml:activeArea";
  static _A = [":size", ":height", ":width", ":units"];
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** height. Serialized as `:height` */
  get height() {
    return this._g(":height");
  }
  set height(v) {
    this._s(":height", v);
  }
  /** width. Serialized as `:width` */
  get width() {
    return this._g(":width");
  }
  set width(v) {
    this._s(":width", v);
  }
  /** units. Serialized as `:units` */
  get units() {
    return this._g(":units");
  }
  set units(v) {
    this._s(":units", v);
  }
}
class Latency extends OxmlLeafElement {
  static _Q = "inkml:latency";
  static _A = [":value"];
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
}
class SampleRate extends OxmlLeafElement {
  static _Q = "inkml:sampleRate";
  static _A = [":uniform", ":value"];
  /** uniform. Serialized as `:uniform` */
  get uniform() {
    return this._g(":uniform");
  }
  set uniform(v) {
    this._s(":uniform", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
}
class TraceFormat extends OxmlCompositeElement {
  static _Q = "inkml:traceFormat";
  static _A = ["xml:id"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
}
class ChannelProperty extends OxmlLeafElement {
  static _Q = "inkml:channelProperty";
  static _A = [":channel", ":name", ":value", ":units"];
  /** channel. Serialized as `:channel` */
  get channel() {
    return this._g(":channel");
  }
  set channel(v) {
    this._s(":channel", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
  /** units. Serialized as `:units` */
  get units() {
    return this._g(":units");
  }
  set units(v) {
    this._s(":units", v);
  }
}
class IntermittentChannels extends OxmlCompositeElement {
  static _Q = "inkml:intermittentChannels";
}
class Channel extends OxmlCompositeElement {
  static _Q = "inkml:channel";
  static _A = ["xml:id", ":name", ":type", ":default", ":min", ":max", ":orientation", ":respectTo", ":units"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** default. Serialized as `:default` */
  get default() {
    return this._g(":default");
  }
  set default(v) {
    this._s(":default", v);
  }
  /** min. Serialized as `:min` */
  get min() {
    return this._g(":min");
  }
  set min(v) {
    this._s(":min", v);
  }
  /** max. Serialized as `:max` */
  get max() {
    return this._g(":max");
  }
  set max(v) {
    this._s(":max", v);
  }
  /** orientation. Serialized as `:orientation` */
  get orientation() {
    return this._g(":orientation");
  }
  set orientation(v) {
    this._s(":orientation", v);
  }
  /** respectTo. Serialized as `:respectTo` */
  get respectTo() {
    return this._g(":respectTo");
  }
  set respectTo(v) {
    this._s(":respectTo", v);
  }
  /** units. Serialized as `:units` */
  get units() {
    return this._g(":units");
  }
  set units(v) {
    this._s(":units", v);
  }
}
class Mapping extends OxmlCompositeElement {
  static _Q = "inkml:mapping";
  static _A = ["xml:id", ":type", ":mappingRef"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** mappingRef. Serialized as `:mappingRef` */
  get mappingRef() {
    return this._g(":mappingRef");
  }
  set mappingRef(v) {
    this._s(":mappingRef", v);
  }
}
class Matrix extends OxmlLeafTextElement {
  static _Q = "inkml:matrix";
  static _A = ["xml:id"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
}
class Table extends OxmlLeafTextElement {
  static _Q = "inkml:table";
  static _A = ["xml:id", ":apply", ":interpolation"];
  /** id. Serialized as `xml:id` */
  get id() {
    return this._g("xml:id");
  }
  set id(v) {
    this._s("xml:id", v);
  }
  /** apply. Serialized as `:apply` */
  get apply() {
    return this._g(":apply");
  }
  set apply(v) {
    this._s(":apply", v);
  }
  /** interpolation. Serialized as `:interpolation` */
  get interpolation() {
    return this._g(":interpolation");
  }
  set interpolation(v) {
    this._s(":interpolation", v);
  }
}
class Bind extends OxmlLeafElement {
  static _Q = "inkml:bind";
  static _A = [":source", ":target", ":column", ":variable"];
  /** source. Serialized as `:source` */
  get source() {
    return this._g(":source");
  }
  set source(v) {
    this._s(":source", v);
  }
  /** target. Serialized as `:target` */
  get target() {
    return this._g(":target");
  }
  set target(v) {
    this._s(":target", v);
  }
  /** column. Serialized as `:column` */
  get column() {
    return this._g(":column");
  }
  set column(v) {
    this._s(":column", v);
  }
  /** variable. Serialized as `:variable` */
  get variable() {
    return this._g(":variable");
  }
  set variable(v) {
    this._s(":variable", v);
  }
}
class Ink extends OxmlPartRootElement {
  static _Q = "inkml:ink";
  static _A = [":documentID"];
  /** documentID. Serialized as `:documentID` */
  get documentId() {
    return this._g(":documentID");
  }
  set documentId(v) {
    this._s(":documentID", v);
  }
}
function initInkMLNamespace() {
  Definitions._C = {
    "inkml:brush": Brush,
    "inkml:canvas": Canvas,
    "inkml:canvasTransform": CanvasTransform,
    "inkml:context": Context,
    "inkml:inkSource": InkSource,
    "inkml:mapping": Mapping,
    "inkml:timestamp": Timestamp,
    "inkml:trace": Trace,
    "inkml:traceFormat": TraceFormat,
    "inkml:traceGroup": TraceGroup,
    "inkml:traceView": TraceView
  };
  Context._C = {
    "inkml:canvas": Canvas,
    "inkml:canvasTransform": CanvasTransform,
    "inkml:traceFormat": TraceFormat,
    "inkml:inkSource": InkSource,
    "inkml:brush": Brush,
    "inkml:timestamp": Timestamp
  };
  Context._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":contextRef": new OxmlAttr(":contextRef", OxmlType.StringValue),
    ":canvasRef": new OxmlAttr(":canvasRef", OxmlType.StringValue),
    ":canvasTransformRef": new OxmlAttr(":canvasTransformRef", OxmlType.StringValue),
    ":traceFormatRef": new OxmlAttr(":traceFormatRef", OxmlType.StringValue),
    ":inkSourceRef": new OxmlAttr(":inkSourceRef", OxmlType.StringValue),
    ":brushRef": new OxmlAttr(":brushRef", OxmlType.StringValue),
    ":timestampRef": new OxmlAttr(":timestampRef", OxmlType.StringValue)
  };
  TraceView._C = {
    "inkml:annotation": Annotation,
    "inkml:annotationXML": AnnotationXml,
    "inkml:traceView": TraceView
  };
  TraceView._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":contextRef": new OxmlAttr(":contextRef", OxmlType.StringValue),
    ":traceDataRef": new OxmlAttr(":traceDataRef", OxmlType.StringValue),
    ":from": new OxmlAttr(":from", OxmlType.StringValue),
    ":to": new OxmlAttr(":to", OxmlType.StringValue)
  };
  TraceGroup._C = {
    "inkml:annotation": Annotation,
    "inkml:annotationXML": AnnotationXml,
    "inkml:trace": Trace,
    "inkml:traceGroup": TraceGroup
  };
  TraceGroup._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":contextRef": new OxmlAttr(":contextRef", OxmlType.StringValue),
    ":brushRef": new OxmlAttr(":brushRef", OxmlType.StringValue)
  };
  Trace._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, TraceTypeValuesArray),
    ":continuation": new OxmlAttr(":continuation", OxmlType.EnumValue, TraceContinuationValuesArray),
    ":priorRef": new OxmlAttr(":priorRef", OxmlType.StringValue),
    ":contextRef": new OxmlAttr(":contextRef", OxmlType.StringValue),
    ":brushRef": new OxmlAttr(":brushRef", OxmlType.StringValue),
    ":duration": new OxmlAttr(":duration", OxmlType.DecimalValue),
    ":timeOffset": new OxmlAttr(":timeOffset", OxmlType.DecimalValue)
  };
  Timestamp._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":time": new OxmlAttr(":time", OxmlType.DecimalValue),
    ":timestampRef": new OxmlAttr(":timestampRef", OxmlType.StringValue),
    ":timeString": new OxmlAttr(":timeString", OxmlType.DateTimeValue),
    ":timeOffset": new OxmlAttr(":timeOffset", OxmlType.DecimalValue)
  };
  Brush._C = {
    "inkml:annotation": Annotation,
    "inkml:annotationXML": AnnotationXml,
    "inkml:brushProperty": BrushProperty
  };
  Brush._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":brushRef": new OxmlAttr(":brushRef", OxmlType.StringValue)
  };
  InkSource._C = {
    "inkml:traceFormat": TraceFormat,
    "inkml:sampleRate": SampleRate,
    "inkml:latency": Latency,
    "inkml:activeArea": ActiveArea,
    "inkml:srcProperty": SourceProperty,
    "inkml:channelProperties": ChannelProperties
  };
  InkSource._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":manufacturer": new OxmlAttr(":manufacturer", OxmlType.StringValue),
    ":model": new OxmlAttr(":model", OxmlType.StringValue),
    ":serialNo": new OxmlAttr(":serialNo", OxmlType.StringValue),
    ":specificationRef": new OxmlAttr(":specificationRef", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue)
  };
  CanvasTransform._C = {
    "inkml:mapping": Mapping
  };
  CanvasTransform._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":invertible": new OxmlAttr(":invertible", OxmlType.BooleanValue)
  };
  Canvas._C = {
    "inkml:traceFormat": TraceFormat
  };
  Canvas._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":traceFormatRef": new OxmlAttr(":traceFormatRef", OxmlType.StringValue)
  };
  BrushProperty._C = {
    "inkml:annotation": Annotation,
    "inkml:annotationXML": AnnotationXml
  };
  BrushProperty._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":value": new OxmlAttr(":value", OxmlType.StringValue),
    ":units": new OxmlAttr(":units", OxmlType.StringValue)
  };
  AnnotationXml._C = {
    "emma:emma": EmmaEmma
  };
  AnnotationXml._D = {
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":encoding": new OxmlAttr(":encoding", OxmlType.StringValue),
    ":href": new OxmlAttr(":href", OxmlType.StringValue)
  };
  Annotation._D = {
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":encoding": new OxmlAttr(":encoding", OxmlType.StringValue)
  };
  ChannelProperties._C = {
    "inkml:channelProperty": ChannelProperty
  };
  SourceProperty._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":value": new OxmlAttr(":value", OxmlType.DecimalValue),
    ":units": new OxmlAttr(":units", OxmlType.StringValue)
  };
  ActiveArea._D = {
    ":size": new OxmlAttr(":size", OxmlType.StringValue),
    ":height": new OxmlAttr(":height", OxmlType.DecimalValue),
    ":width": new OxmlAttr(":width", OxmlType.DecimalValue),
    ":units": new OxmlAttr(":units", OxmlType.StringValue)
  };
  Latency._D = {
    ":value": new OxmlAttr(":value", OxmlType.DecimalValue)
  };
  SampleRate._D = {
    ":uniform": new OxmlAttr(":uniform", OxmlType.BooleanValue),
    ":value": new OxmlAttr(":value", OxmlType.DecimalValue)
  };
  TraceFormat._C = {
    "inkml:channel": Channel,
    "inkml:intermittentChannels": IntermittentChannels
  };
  TraceFormat._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue)
  };
  ChannelProperty._D = {
    ":channel": new OxmlAttr(":channel", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":value": new OxmlAttr(":value", OxmlType.DecimalValue),
    ":units": new OxmlAttr(":units", OxmlType.StringValue)
  };
  IntermittentChannels._C = {
    "inkml:channel": Channel
  };
  Channel._C = {
    "inkml:mapping": Mapping
  };
  Channel._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ChannelDataTypeValuesArray),
    ":default": new OxmlAttr(":default", OxmlType.StringValue),
    ":min": new OxmlAttr(":min", OxmlType.DecimalValue),
    ":max": new OxmlAttr(":max", OxmlType.DecimalValue),
    ":orientation": new OxmlAttr(":orientation", OxmlType.EnumValue, ChannelValueOrientationValuesArray),
    ":respectTo": new OxmlAttr(":respectTo", OxmlType.StringValue),
    ":units": new OxmlAttr(":units", OxmlType.StringValue)
  };
  Mapping._C = {
    "inkml:bind": Bind,
    "inkml:table": Table,
    "inkml:matrix": Matrix,
    "inkml:mapping": Mapping
  };
  Mapping._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, MappingTypeValuesArray),
    ":mappingRef": new OxmlAttr(":mappingRef", OxmlType.StringValue)
  };
  Matrix._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue)
  };
  Table._D = {
    "xml:id": new OxmlAttr("xml:id", OxmlType.StringValue),
    ":apply": new OxmlAttr(":apply", OxmlType.EnumValue, TableApplyValuesArray),
    ":interpolation": new OxmlAttr(":interpolation", OxmlType.EnumValue, TableInterpolationValuesArray)
  };
  Bind._D = {
    ":source": new OxmlAttr(":source", OxmlType.StringValue),
    ":target": new OxmlAttr(":target", OxmlType.StringValue),
    ":column": new OxmlAttr(":column", OxmlType.StringValue),
    ":variable": new OxmlAttr(":variable", OxmlType.StringValue)
  };
  Ink._C = {
    "inkml:annotation": Annotation,
    "inkml:annotationXML": AnnotationXml,
    "inkml:definitions": Definitions,
    "inkml:context": Context,
    "inkml:trace": Trace,
    "inkml:traceGroup": TraceGroup,
    "inkml:traceView": TraceView
  };
  Ink._D = {
    ":documentID": new OxmlAttr(":documentID", OxmlType.StringValue)
  };
  return {
    prefix: "inkml",
    xmlns: "http://www.w3.org/2003/InkML"
  };
}
export {
  ActiveArea,
  Annotation,
  AnnotationXml,
  Bind,
  Brush,
  BrushProperty,
  Canvas,
  CanvasTransform,
  Channel,
  ChannelDataTypeValues,
  ChannelDataTypeValuesArray,
  ChannelProperties,
  ChannelProperty,
  ChannelValueOrientationValues,
  ChannelValueOrientationValuesArray,
  Context,
  Definitions,
  Ink,
  InkSource,
  IntermittentChannels,
  Latency,
  Mapping,
  MappingTypeValues,
  MappingTypeValuesArray,
  Matrix,
  PenTipShapeValues,
  PenTipShapeValuesArray,
  RasterOperationValues,
  RasterOperationValuesArray,
  SampleRate,
  SourceProperty,
  StandardAngleUnitsValues,
  StandardAngleUnitsValuesArray,
  StandardBrushPropertyNameValues,
  StandardBrushPropertyNameValuesArray,
  StandardChannelNameValues,
  StandardChannelNameValuesArray,
  StandardChannelPropertyNameValues,
  StandardChannelPropertyNameValuesArray,
  StandardLengthUnitsValues,
  StandardLengthUnitsValuesArray,
  StandardMassForceUnitsValues,
  StandardMassForceUnitsValuesArray,
  StandardOtherUnitsValues,
  StandardOtherUnitsValuesArray,
  StandardPerAngleUnitsValues,
  StandardPerAngleUnitsValuesArray,
  StandardPerLengthUnitsValues,
  StandardPerLengthUnitsValuesArray,
  StandardPerMassForceUnitsValues,
  StandardPerMassForceUnitsValuesArray,
  StandardPerOtherUnitsValues,
  StandardPerOtherUnitsValuesArray,
  StandardPerTimeUnitsValues,
  StandardPerTimeUnitsValuesArray,
  StandardTimeUnitsValues,
  StandardTimeUnitsValuesArray,
  Table,
  TableApplyValues,
  TableApplyValuesArray,
  TableInterpolationValues,
  TableInterpolationValuesArray,
  Timestamp,
  Trace,
  TraceContinuationValues,
  TraceContinuationValuesArray,
  TraceFormat,
  TraceGroup,
  TraceTypeValues,
  TraceTypeValuesArray,
  TraceView,
  initInkMLNamespace
};
