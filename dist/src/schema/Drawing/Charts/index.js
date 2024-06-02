import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { ColorSchemeIndexValuesArray } from "../../Drawing";
import { BlackWhiteModeValuesArray } from "../../Drawing";
import { BooleanFalse as C16r3BooleanFalse } from "../../Office2019/Drawing/Chart";
import { PivotOptions as C14PivotOptions } from "../../Office2010/Drawing/Charts";
import { SketchOptions as C14SketchOptions } from "../../Office2010/Drawing/Charts";
import { PivotSource as C15PivotSource } from "../../Office2013/Drawing/Chart";
import { ExtensionList as AExtensionList } from "../../Drawing";
import { InvertSolidFillFormat as C14InvertSolidFillFormat } from "../../Office2010/Drawing/Charts";
import { FilteredCategoryTitle as C15FilteredCategoryTitle } from "../../Office2013/Drawing/Chart";
import { DataLabelsRange as C15DataLabelsRange } from "../../Office2013/Drawing/Chart";
import { CategoryFilterExceptions as C15CategoryFilterExceptions } from "../../Office2013/Drawing/Chart";
import { FilteredSeriesTitle as C15FilteredSeriesTitle } from "../../Office2013/Drawing/Chart";
import { NumberingFormat as C15NumberingFormat } from "../../Office2013/Drawing/Chart";
import { FilteredSurfaceSeries as C15FilteredSurfaceSeries } from "../../Office2013/Drawing/Chart";
import { FilteredBubbleSeries as C15FilteredBubbleSeries } from "../../Office2013/Drawing/Chart";
import { FilteredAreaSeries as C15FilteredAreaSeries } from "../../Office2013/Drawing/Chart";
import { FilteredBarSeries as C15FilteredBarSeries } from "../../Office2013/Drawing/Chart";
import { FilteredRadarSeries as C15FilteredRadarSeries } from "../../Office2013/Drawing/Chart";
import { FilteredScatterSeries as C15FilteredScatterSeries } from "../../Office2013/Drawing/Chart";
import { FilteredLineSeriesExtension as C15FilteredLineSeriesExtension } from "../../Office2013/Drawing/Chart";
import { ChartText as C15ChartText } from "../../Office2013/Drawing/Chart";
import { DataLabelFieldTable as C15DataLabelFieldTable } from "../../Office2013/Drawing/Chart";
import { ShowDataLabelsRange as C15ShowDataLabelsRange } from "../../Office2013/Drawing/Chart";
import { ShapeProperties as C15ShapeProperties } from "../../Office2013/Drawing/Chart";
import { Layout as C15Layout } from "../../Office2013/Drawing/Chart";
import { ShowLeaderLines as C15ShowLeaderLines } from "../../Office2013/Drawing/Chart";
import { LeaderLines as C15LeaderLines } from "../../Office2013/Drawing/Chart";
import { ExceptionForSave as C15ExceptionForSave } from "../../Office2013/Drawing/Chart";
import { FullReference as C15FullReference } from "../../Office2013/Drawing/Chart";
import { LevelReference as C15LevelReference } from "../../Office2013/Drawing/Chart";
import { FormulaReference as C15FormulaReference } from "../../Office2013/Drawing/Chart";
import { AutoGeneneratedCategories as C15AutoGeneneratedCategories } from "../../Office2013/Drawing/Chart";
import { FilteredPieSeries as C15FilteredPieSeries } from "../../Office2013/Drawing/Chart";
import { Transform2D as ATransform2D } from "../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../Drawing";
import { NoFill as ANoFill } from "../../Drawing";
import { SolidFill as ASolidFill } from "../../Drawing";
import { GradientFill as AGradientFill } from "../../Drawing";
import { BlipFill as ABlipFill } from "../../Drawing";
import { PatternFill as APatternFill } from "../../Drawing";
import { GroupFill as AGroupFill } from "../../Drawing";
import { Outline as AOutline } from "../../Drawing";
import { EffectList as AEffectList } from "../../Drawing";
import { EffectDag as AEffectDag } from "../../Drawing";
import { Scene3DType as AScene3DType } from "../../Drawing";
import { Shape3DType as AShape3DType } from "../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../Drawing";
import { RelativeAnchorSize as CdrRelativeAnchorSize } from "../../Drawing/ChartDrawing";
import { AbsoluteAnchorSize as CdrAbsoluteAnchorSize } from "../../Drawing/ChartDrawing";
import { Style as C14Style } from "../../Office2010/Drawing/Charts";
import { BodyProperties as ABodyProperties } from "../../Drawing";
import { ListStyle as AListStyle } from "../../Drawing";
import { Paragraph as AParagraph } from "../../Drawing";
var LayoutTargetValues = /* @__PURE__ */ ((LayoutTargetValues2) => {
  LayoutTargetValues2["Inner"] = "inner";
  LayoutTargetValues2["Outer"] = "outer";
  return LayoutTargetValues2;
})(LayoutTargetValues || {});
const LayoutTargetValuesArray = [
  "inner" /* Inner */,
  "outer" /* Outer */
];
var LayoutModeValues = /* @__PURE__ */ ((LayoutModeValues2) => {
  LayoutModeValues2["Edge"] = "edge";
  LayoutModeValues2["Factor"] = "factor";
  return LayoutModeValues2;
})(LayoutModeValues || {});
const LayoutModeValuesArray = [
  "edge" /* Edge */,
  "factor" /* Factor */
];
var SizeRepresentsValues = /* @__PURE__ */ ((SizeRepresentsValues2) => {
  SizeRepresentsValues2["Area"] = "area";
  SizeRepresentsValues2["Width"] = "w";
  return SizeRepresentsValues2;
})(SizeRepresentsValues || {});
const SizeRepresentsValuesArray = [
  "area" /* Area */,
  "w" /* Width */
];
var LabelAlignmentValues = /* @__PURE__ */ ((LabelAlignmentValues2) => {
  LabelAlignmentValues2["Center"] = "ctr";
  LabelAlignmentValues2["Left"] = "l";
  LabelAlignmentValues2["Right"] = "r";
  return LabelAlignmentValues2;
})(LabelAlignmentValues || {});
const LabelAlignmentValuesArray = [
  "ctr" /* Center */,
  "l" /* Left */,
  "r" /* Right */
];
var DataLabelPositionValues = /* @__PURE__ */ ((DataLabelPositionValues2) => {
  DataLabelPositionValues2["BestFit"] = "bestFit";
  DataLabelPositionValues2["Bottom"] = "b";
  DataLabelPositionValues2["Center"] = "ctr";
  DataLabelPositionValues2["InsideBase"] = "inBase";
  DataLabelPositionValues2["InsideEnd"] = "inEnd";
  DataLabelPositionValues2["Left"] = "l";
  DataLabelPositionValues2["OutsideEnd"] = "outEnd";
  DataLabelPositionValues2["Right"] = "r";
  DataLabelPositionValues2["Top"] = "t";
  return DataLabelPositionValues2;
})(DataLabelPositionValues || {});
const DataLabelPositionValuesArray = [
  "bestFit" /* BestFit */,
  "b" /* Bottom */,
  "ctr" /* Center */,
  "inBase" /* InsideBase */,
  "inEnd" /* InsideEnd */,
  "l" /* Left */,
  "outEnd" /* OutsideEnd */,
  "r" /* Right */,
  "t" /* Top */
];
var TrendlineValues = /* @__PURE__ */ ((TrendlineValues2) => {
  TrendlineValues2["Exponential"] = "exp";
  TrendlineValues2["Linear"] = "linear";
  TrendlineValues2["Logarithmic"] = "log";
  TrendlineValues2["MovingAverage"] = "movingAvg";
  TrendlineValues2["Polynomial"] = "poly";
  TrendlineValues2["Power"] = "power";
  return TrendlineValues2;
})(TrendlineValues || {});
const TrendlineValuesArray = [
  "exp" /* Exponential */,
  "linear" /* Linear */,
  "log" /* Logarithmic */,
  "movingAvg" /* MovingAverage */,
  "poly" /* Polynomial */,
  "power" /* Power */
];
var ErrorBarDirectionValues = /* @__PURE__ */ ((ErrorBarDirectionValues2) => {
  ErrorBarDirectionValues2["X"] = "x";
  ErrorBarDirectionValues2["Y"] = "y";
  return ErrorBarDirectionValues2;
})(ErrorBarDirectionValues || {});
const ErrorBarDirectionValuesArray = [
  "x" /* X */,
  "y" /* Y */
];
var ErrorBarValues = /* @__PURE__ */ ((ErrorBarValues2) => {
  ErrorBarValues2["Both"] = "both";
  ErrorBarValues2["Minus"] = "minus";
  ErrorBarValues2["Plus"] = "plus";
  return ErrorBarValues2;
})(ErrorBarValues || {});
const ErrorBarValuesArray = [
  "both" /* Both */,
  "minus" /* Minus */,
  "plus" /* Plus */
];
var ErrorValues = /* @__PURE__ */ ((ErrorValues2) => {
  ErrorValues2["Custom"] = "cust";
  ErrorValues2["FixedValue"] = "fixedVal";
  ErrorValues2["Percentage"] = "percentage";
  ErrorValues2["StandardDeviation"] = "stdDev";
  ErrorValues2["StandardError"] = "stdErr";
  return ErrorValues2;
})(ErrorValues || {});
const ErrorValuesArray = [
  "cust" /* Custom */,
  "fixedVal" /* FixedValue */,
  "percentage" /* Percentage */,
  "stdDev" /* StandardDeviation */,
  "stdErr" /* StandardError */
];
var GroupingValues = /* @__PURE__ */ ((GroupingValues2) => {
  GroupingValues2["PercentStacked"] = "percentStacked";
  GroupingValues2["Standard"] = "standard";
  GroupingValues2["Stacked"] = "stacked";
  return GroupingValues2;
})(GroupingValues || {});
const GroupingValuesArray = [
  "percentStacked" /* PercentStacked */,
  "standard" /* Standard */,
  "stacked" /* Stacked */
];
var RadarStyleValues = /* @__PURE__ */ ((RadarStyleValues2) => {
  RadarStyleValues2["Standard"] = "standard";
  RadarStyleValues2["Marker"] = "marker";
  RadarStyleValues2["Filled"] = "filled";
  return RadarStyleValues2;
})(RadarStyleValues || {});
const RadarStyleValuesArray = [
  "standard" /* Standard */,
  "marker" /* Marker */,
  "filled" /* Filled */
];
var BarGroupingValues = /* @__PURE__ */ ((BarGroupingValues2) => {
  BarGroupingValues2["PercentStacked"] = "percentStacked";
  BarGroupingValues2["Clustered"] = "clustered";
  BarGroupingValues2["Standard"] = "standard";
  BarGroupingValues2["Stacked"] = "stacked";
  return BarGroupingValues2;
})(BarGroupingValues || {});
const BarGroupingValuesArray = [
  "percentStacked" /* PercentStacked */,
  "clustered" /* Clustered */,
  "standard" /* Standard */,
  "stacked" /* Stacked */
];
var BarDirectionValues = /* @__PURE__ */ ((BarDirectionValues2) => {
  BarDirectionValues2["Bar"] = "bar";
  BarDirectionValues2["Column"] = "col";
  return BarDirectionValues2;
})(BarDirectionValues || {});
const BarDirectionValuesArray = [
  "bar" /* Bar */,
  "col" /* Column */
];
var ShapeValues = /* @__PURE__ */ ((ShapeValues2) => {
  ShapeValues2["Cone"] = "cone";
  ShapeValues2["ConeToMax"] = "coneToMax";
  ShapeValues2["Box"] = "box";
  ShapeValues2["Cylinder"] = "cylinder";
  ShapeValues2["Pyramid"] = "pyramid";
  ShapeValues2["PyramidToMaximum"] = "pyramidToMax";
  return ShapeValues2;
})(ShapeValues || {});
const ShapeValuesArray = [
  "cone" /* Cone */,
  "coneToMax" /* ConeToMax */,
  "box" /* Box */,
  "cylinder" /* Cylinder */,
  "pyramid" /* Pyramid */,
  "pyramidToMax" /* PyramidToMaximum */
];
var OfPieValues = /* @__PURE__ */ ((OfPieValues2) => {
  OfPieValues2["Pie"] = "pie";
  OfPieValues2["Bar"] = "bar";
  return OfPieValues2;
})(OfPieValues || {});
const OfPieValuesArray = [
  "pie" /* Pie */,
  "bar" /* Bar */
];
var AxisPositionValues = /* @__PURE__ */ ((AxisPositionValues2) => {
  AxisPositionValues2["Bottom"] = "b";
  AxisPositionValues2["Left"] = "l";
  AxisPositionValues2["Right"] = "r";
  AxisPositionValues2["Top"] = "t";
  return AxisPositionValues2;
})(AxisPositionValues || {});
const AxisPositionValuesArray = [
  "b" /* Bottom */,
  "l" /* Left */,
  "r" /* Right */,
  "t" /* Top */
];
var CrossesValues = /* @__PURE__ */ ((CrossesValues2) => {
  CrossesValues2["AutoZero"] = "autoZero";
  CrossesValues2["Maximum"] = "max";
  CrossesValues2["Minimum"] = "min";
  return CrossesValues2;
})(CrossesValues || {});
const CrossesValuesArray = [
  "autoZero" /* AutoZero */,
  "max" /* Maximum */,
  "min" /* Minimum */
];
var CrossBetweenValues = /* @__PURE__ */ ((CrossBetweenValues2) => {
  CrossBetweenValues2["Between"] = "between";
  CrossBetweenValues2["MidpointCategory"] = "midCat";
  return CrossBetweenValues2;
})(CrossBetweenValues || {});
const CrossBetweenValuesArray = [
  "between" /* Between */,
  "midCat" /* MidpointCategory */
];
var TickMarkValues = /* @__PURE__ */ ((TickMarkValues2) => {
  TickMarkValues2["Cross"] = "cross";
  TickMarkValues2["Inside"] = "in";
  TickMarkValues2["None"] = "none";
  TickMarkValues2["Outside"] = "out";
  return TickMarkValues2;
})(TickMarkValues || {});
const TickMarkValuesArray = [
  "cross" /* Cross */,
  "in" /* Inside */,
  "none" /* None */,
  "out" /* Outside */
];
var TickLabelPositionValues = /* @__PURE__ */ ((TickLabelPositionValues2) => {
  TickLabelPositionValues2["High"] = "high";
  TickLabelPositionValues2["Low"] = "low";
  TickLabelPositionValues2["NextTo"] = "nextTo";
  TickLabelPositionValues2["None"] = "none";
  return TickLabelPositionValues2;
})(TickLabelPositionValues || {});
const TickLabelPositionValuesArray = [
  "high" /* High */,
  "low" /* Low */,
  "nextTo" /* NextTo */,
  "none" /* None */
];
var TimeUnitValues = /* @__PURE__ */ ((TimeUnitValues2) => {
  TimeUnitValues2["Days"] = "days";
  TimeUnitValues2["Months"] = "months";
  TimeUnitValues2["Years"] = "years";
  return TimeUnitValues2;
})(TimeUnitValues || {});
const TimeUnitValuesArray = [
  "days" /* Days */,
  "months" /* Months */,
  "years" /* Years */
];
var BuiltInUnitValues = /* @__PURE__ */ ((BuiltInUnitValues2) => {
  BuiltInUnitValues2["Hundreds"] = "hundreds";
  BuiltInUnitValues2["Thousands"] = "thousands";
  BuiltInUnitValues2["TenThousands"] = "tenThousands";
  BuiltInUnitValues2["HundredThousands"] = "hundredThousands";
  BuiltInUnitValues2["Millions"] = "millions";
  BuiltInUnitValues2["TenMillions"] = "tenMillions";
  BuiltInUnitValues2["HundredMillions"] = "hundredMillions";
  BuiltInUnitValues2["Billions"] = "billions";
  BuiltInUnitValues2["Trillions"] = "trillions";
  return BuiltInUnitValues2;
})(BuiltInUnitValues || {});
const BuiltInUnitValuesArray = [
  "hundreds" /* Hundreds */,
  "thousands" /* Thousands */,
  "tenThousands" /* TenThousands */,
  "hundredThousands" /* HundredThousands */,
  "millions" /* Millions */,
  "tenMillions" /* TenMillions */,
  "hundredMillions" /* HundredMillions */,
  "billions" /* Billions */,
  "trillions" /* Trillions */
];
var PictureFormatValues = /* @__PURE__ */ ((PictureFormatValues2) => {
  PictureFormatValues2["Stretch"] = "stretch";
  PictureFormatValues2["Stack"] = "stack";
  PictureFormatValues2["StackScale"] = "stackScale";
  return PictureFormatValues2;
})(PictureFormatValues || {});
const PictureFormatValuesArray = [
  "stretch" /* Stretch */,
  "stack" /* Stack */,
  "stackScale" /* StackScale */
];
var OrientationValues = /* @__PURE__ */ ((OrientationValues2) => {
  OrientationValues2["MaxMin"] = "maxMin";
  OrientationValues2["MinMax"] = "minMax";
  return OrientationValues2;
})(OrientationValues || {});
const OrientationValuesArray = [
  "maxMin" /* MaxMin */,
  "minMax" /* MinMax */
];
var LegendPositionValues = /* @__PURE__ */ ((LegendPositionValues2) => {
  LegendPositionValues2["Bottom"] = "b";
  LegendPositionValues2["TopRight"] = "tr";
  LegendPositionValues2["Left"] = "l";
  LegendPositionValues2["Right"] = "r";
  LegendPositionValues2["Top"] = "t";
  return LegendPositionValues2;
})(LegendPositionValues || {});
const LegendPositionValuesArray = [
  "b" /* Bottom */,
  "tr" /* TopRight */,
  "l" /* Left */,
  "r" /* Right */,
  "t" /* Top */
];
var DisplayBlanksAsValues = /* @__PURE__ */ ((DisplayBlanksAsValues2) => {
  DisplayBlanksAsValues2["Span"] = "span";
  DisplayBlanksAsValues2["Gap"] = "gap";
  DisplayBlanksAsValues2["Zero"] = "zero";
  return DisplayBlanksAsValues2;
})(DisplayBlanksAsValues || {});
const DisplayBlanksAsValuesArray = [
  "span" /* Span */,
  "gap" /* Gap */,
  "zero" /* Zero */
];
var PageSetupOrientationValues = /* @__PURE__ */ ((PageSetupOrientationValues2) => {
  PageSetupOrientationValues2["Default"] = "default";
  PageSetupOrientationValues2["Portrait"] = "portrait";
  PageSetupOrientationValues2["Landscape"] = "landscape";
  return PageSetupOrientationValues2;
})(PageSetupOrientationValues || {});
const PageSetupOrientationValuesArray = [
  "default" /* Default */,
  "portrait" /* Portrait */,
  "landscape" /* Landscape */
];
var ScatterStyleValues = /* @__PURE__ */ ((ScatterStyleValues2) => {
  ScatterStyleValues2["Line"] = "line";
  ScatterStyleValues2["LineMarker"] = "lineMarker";
  ScatterStyleValues2["Marker"] = "marker";
  ScatterStyleValues2["Smooth"] = "smooth";
  ScatterStyleValues2["SmoothMarker"] = "smoothMarker";
  return ScatterStyleValues2;
})(ScatterStyleValues || {});
const ScatterStyleValuesArray = [
  "line" /* Line */,
  "lineMarker" /* LineMarker */,
  "marker" /* Marker */,
  "smooth" /* Smooth */,
  "smoothMarker" /* SmoothMarker */
];
var MarkerStyleValues = /* @__PURE__ */ ((MarkerStyleValues2) => {
  MarkerStyleValues2["Auto"] = "auto";
  MarkerStyleValues2["Circle"] = "circle";
  MarkerStyleValues2["Dash"] = "dash";
  MarkerStyleValues2["Diamond"] = "diamond";
  MarkerStyleValues2["Dot"] = "dot";
  MarkerStyleValues2["None"] = "none";
  MarkerStyleValues2["Picture"] = "picture";
  MarkerStyleValues2["Plus"] = "plus";
  MarkerStyleValues2["Square"] = "square";
  MarkerStyleValues2["Star"] = "star";
  MarkerStyleValues2["Triangle"] = "triangle";
  MarkerStyleValues2["X"] = "x";
  return MarkerStyleValues2;
})(MarkerStyleValues || {});
const MarkerStyleValuesArray = [
  "auto" /* Auto */,
  "circle" /* Circle */,
  "dash" /* Dash */,
  "diamond" /* Diamond */,
  "dot" /* Dot */,
  "none" /* None */,
  "picture" /* Picture */,
  "plus" /* Plus */,
  "square" /* Square */,
  "star" /* Star */,
  "triangle" /* Triangle */,
  "x" /* X */
];
var SplitValues = /* @__PURE__ */ ((SplitValues2) => {
  SplitValues2["Custom"] = "cust";
  SplitValues2["Percent"] = "percent";
  SplitValues2["Position"] = "pos";
  SplitValues2["Value"] = "val";
  return SplitValues2;
})(SplitValues || {});
const SplitValuesArray = [
  "cust" /* Custom */,
  "percent" /* Percent */,
  "pos" /* Position */,
  "val" /* Value */
];
class ChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class DisplayBlanksAs extends OxmlLeafElement {
  static _Q = "c:dispBlanksAs";
  static _A = [":val"];
  /** Display Blanks As Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Legend extends OxmlCompositeElement {
  static _Q = "c:legend";
  /** Legend Position. */
  get legendPosition() {
    return this._f(LegendPosition);
  }
}
class PlotArea extends OxmlCompositeElement {
  static _Q = "c:plotArea";
  /** Layout. */
  get layout() {
    return this._f(Layout);
  }
}
class SurfaceType extends OxmlCompositeElement {
  /** Thickness. */
  get thickness() {
    return this._f(Thickness);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Picture Options. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class BackWall extends SurfaceType {
  static _Q = "c:backWall";
}
class SideWall extends SurfaceType {
  static _Q = "c:sideWall";
}
class Floor extends SurfaceType {
  static _Q = "c:floor";
}
class View3D extends OxmlCompositeElement {
  static _Q = "c:view3D";
  /** X Rotation. */
  get rotateX() {
    return this._f(RotateX);
  }
  /** Height Percent. */
  get heightPercent() {
    return this._f(HeightPercent);
  }
  /** Y Rotation. */
  get rotateY() {
    return this._f(RotateY);
  }
  /** Depth Percent. */
  get depthPercent() {
    return this._f(DepthPercent);
  }
  /** Right Angle Axes. */
  get rightAngleAxes() {
    return this._f(RightAngleAxes);
  }
  /** Perspective. */
  get perspective() {
    return this._f(Perspective);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PivotFormats extends OxmlCompositeElement {
  static _Q = "c:pivotFmts";
}
class DataDisplayOptions16 extends OxmlCompositeElement {
  static _Q = "c:ext";
  /** Returns C16r3BooleanFalse. */
  get booleanFalse() {
    return this._f(C16r3BooleanFalse);
  }
}
class ChartSpaceExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C14PivotOptions. */
  get pivotOptions() {
    return this._f(C14PivotOptions);
  }
  /** Returns C14SketchOptions. */
  get sketchOptions() {
    return this._f(C14SketchOptions);
  }
  /** Returns C15PivotSource. */
  get pivotSource() {
    return this._f(C15PivotSource);
  }
}
class ChartSpaceExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class PrintSettings extends OxmlCompositeElement {
  static _Q = "c:printSettings";
  /** Header and Footer. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Page Margins. */
  get pageMargins() {
    return this._f(PageMargins);
  }
  /** Page Setup. */
  get pageSetup() {
    return this._f(PageSetup);
  }
  /** Legacy Drawing for Headers and Footers. */
  get legacyDrawingHeaderFooter() {
    return this._f(LegacyDrawingHeaderFooter);
  }
}
class ExternalData extends OxmlCompositeElement {
  static _Q = "c:externalData";
  static _A = ["r:id"];
  /** Relationship Reference. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Update Automatically. */
  get autoUpdate() {
    return this._f(AutoUpdate);
  }
}
class Chart extends OxmlCompositeElement {
  static _Q = "c:chart";
  /** Title data and formatting. */
  get title() {
    return this._f(Title);
  }
  /** True if the chart automatic title has been deleted.. */
  get autoTitleDeleted() {
    return this._f(AutoTitleDeleted);
  }
  /** pivot chart format persistence data. */
  get pivotFormats() {
    return this._f(PivotFormats);
  }
  /** 3D view settings. */
  get view3D() {
    return this._f(View3D);
  }
  /** 3D floor formatting. */
  get floor() {
    return this._f(Floor);
  }
  /** 3D side wall formatting. */
  get sideWall() {
    return this._f(SideWall);
  }
  /** 3D back wall formatting. */
  get backWall() {
    return this._f(BackWall);
  }
  /** Plot data and formatting. */
  get plotArea() {
    return this._f(PlotArea);
  }
  /** Legend data and formatting. */
  get legend() {
    return this._f(Legend);
  }
  /** True if only visible cells are plotted.. */
  get plotVisibleOnly() {
    return this._f(PlotVisibleOnly);
  }
  /** The way that blank cells are plotted on a chart.. */
  get displayBlanksAs() {
    return this._f(DisplayBlanksAs);
  }
  /** True if we should render datalabels over the maximum scale. */
  get showDataLabelsOverMaximum() {
    return this._f(ShowDataLabelsOverMaximum);
  }
  /** Extensibility container. */
  get chartExtensionList() {
    return this._f(ChartExtensionList);
  }
}
class Protection extends OxmlCompositeElement {
  static _Q = "c:protection";
  /** Chart Object. */
  get chartObject() {
    return this._f(ChartObject);
  }
  /** Data Cannot Be Changed. */
  get data() {
    return this._f(Data);
  }
  /** Formatting. */
  get formatting() {
    return this._f(Formatting);
  }
  /** Selection. */
  get selection() {
    return this._f(Selection);
  }
  /** User Interface. */
  get userInterface() {
    return this._f(UserInterface);
  }
}
class PivotSource extends OxmlCompositeElement {
  static _Q = "c:pivotSource";
  /** Pivot Name. */
  get pivotTableName() {
    return this._f(PivotTableName);
  }
  /** Format ID. */
  get formatId() {
    return this._f(FormatId);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ColorMapOverride extends OxmlCompositeElement {
  static _Q = "c:clrMapOvr";
  static _A = [":bg1", ":tx1", ":bg2", ":tx2", ":accent1", ":accent2", ":accent3", ":accent4", ":accent5", ":accent6", ":hlink", ":folHlink"];
  /** Background 1. Serialized as `:bg1` */
  get background1() {
    return this._g(":bg1");
  }
  set background1(v) {
    this._s(":bg1", v);
  }
  /** Text 1. Serialized as `:tx1` */
  get text1() {
    return this._g(":tx1");
  }
  set text1(v) {
    this._s(":tx1", v);
  }
  /** Background 2. Serialized as `:bg2` */
  get background2() {
    return this._g(":bg2");
  }
  set background2(v) {
    this._s(":bg2", v);
  }
  /** Text 2. Serialized as `:tx2` */
  get text2() {
    return this._g(":tx2");
  }
  set text2(v) {
    this._s(":tx2", v);
  }
  /** Accent 1. Serialized as `:accent1` */
  get accent1() {
    return this._g(":accent1");
  }
  set accent1(v) {
    this._s(":accent1", v);
  }
  /** Accent 2. Serialized as `:accent2` */
  get accent2() {
    return this._g(":accent2");
  }
  set accent2(v) {
    this._s(":accent2", v);
  }
  /** Accent 3. Serialized as `:accent3` */
  get accent3() {
    return this._g(":accent3");
  }
  set accent3(v) {
    this._s(":accent3", v);
  }
  /** Accent 4. Serialized as `:accent4` */
  get accent4() {
    return this._g(":accent4");
  }
  set accent4(v) {
    this._s(":accent4", v);
  }
  /** Accent 5. Serialized as `:accent5` */
  get accent5() {
    return this._g(":accent5");
  }
  set accent5(v) {
    this._s(":accent5", v);
  }
  /** Accent 6. Serialized as `:accent6` */
  get accent6() {
    return this._g(":accent6");
  }
  set accent6(v) {
    this._s(":accent6", v);
  }
  /** Hyperlink. Serialized as `:hlink` */
  get hyperlink() {
    return this._g(":hlink");
  }
  set hyperlink(v) {
    this._s(":hlink", v);
  }
  /** Followed Hyperlink. Serialized as `:folHlink` */
  get followedHyperlink() {
    return this._g(":folHlink");
  }
  set followedHyperlink(v) {
    this._s(":folHlink", v);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class Style extends OxmlLeafElement {
  static _Q = "c:style";
  static _A = [":val"];
  /** Style Type. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class EditingLanguage extends OxmlLeafElement {
  static _Q = "c:lang";
  static _A = [":val"];
  /** Language Code. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ValAxExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class DisplayUnits extends OxmlCompositeElement {
  static _Q = "c:dispUnits";
}
class CrossBetween extends OxmlLeafElement {
  static _Q = "c:crossBetween";
  static _A = [":val"];
  /** Cross Between Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class SerAxExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class DateAxExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class AxisUnitType extends OxmlLeafElement {
  static _A = [":val"];
  /** Major Unit Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class MinorUnit extends AxisUnitType {
  static _Q = "c:minorUnit";
}
class MajorUnit extends AxisUnitType {
  static _Q = "c:majorUnit";
}
class TimeUnitType extends OxmlLeafElement {
  static _A = [":val"];
  /** Time Unit Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class MinorTimeUnit extends TimeUnitType {
  static _Q = "c:minorTimeUnit";
}
class MajorTimeUnit extends TimeUnitType {
  static _Q = "c:majorTimeUnit";
}
class BaseTimeUnit extends TimeUnitType {
  static _Q = "c:baseTimeUnit";
}
class CatAxExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class SkipType extends OxmlLeafElement {
  static _A = [":val"];
  /** Tick Skip Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TickMarkSkip extends SkipType {
  static _Q = "c:tickMarkSkip";
}
class TickLabelSkip extends SkipType {
  static _Q = "c:tickLblSkip";
}
class LabelOffset extends OxmlLeafElement {
  static _Q = "c:lblOffset";
  static _A = [":val"];
  /** Label Offset Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class LabelAlignment extends OxmlLeafElement {
  static _Q = "c:lblAlgn";
  static _A = [":val"];
  /** Label Alignment Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Surface3DChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class SurfaceChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class BubbleChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class SizeRepresents extends OxmlLeafElement {
  static _Q = "c:sizeRepresents";
  static _A = [":val"];
  /** Size Represents Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BubbleScale extends OxmlLeafElement {
  static _Q = "c:bubbleScale";
  static _A = [":val"];
  /** Bubble Scale Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BubbleChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
  /** Returns InvertIfNegative. */
  get invertIfNegative() {
    return this._f(InvertIfNegative);
  }
}
class Area3DChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class AreaChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class Bar3DChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class BarChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class Overlap extends OxmlLeafElement {
  static _Q = "c:overlap";
  static _A = [":val"];
  /** Overlap Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class RadarChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class RadarChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
  /** Returns Marker. */
  get marker() {
    return this._f(Marker);
  }
}
class RadarStyle extends OxmlLeafElement {
  static _Q = "c:radarStyle";
  static _A = [":val"];
  /** Radar Style Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ScatterChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class ScatterChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns Marker. */
  get marker() {
    return this._f(Marker);
  }
}
class ScatterStyle extends OxmlLeafElement {
  static _Q = "c:scatterStyle";
  static _A = [":val"];
  /** Scatter Style Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Line3DChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class LineChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class SurfaceSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class BubbleSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C14InvertSolidFillFormat. */
  get invertSolidFillFormat() {
    return this._f(C14InvertSolidFillFormat);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class BubbleSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class PieSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class AreaSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class BarSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C14InvertSolidFillFormat. */
  get invertSolidFillFormat() {
    return this._f(C14InvertSolidFillFormat);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class BarSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class Shape extends OxmlLeafElement {
  static _Q = "c:shape";
  static _A = [":val"];
  /** Shape Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class RadarSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class ScatterSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class LineSerExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class AxisDataSourceType extends OxmlCompositeElement {
  /** Multi Level String Reference. */
  get multiLevelStringReference() {
    return this._f(MultiLevelStringReference);
  }
  /** Number Reference. */
  get numberReference() {
    return this._f(NumberReference);
  }
  /** Number Literal. */
  get numberLiteral() {
    return this._f(NumberLiteral);
  }
  /** Returns StringReference. */
  get stringReference() {
    return this._f(StringReference);
  }
  /** String Literal. */
  get stringLiteral() {
    return this._f(StringLiteral);
  }
}
class XValues extends AxisDataSourceType {
  static _Q = "c:xVal";
}
class CategoryAxisData extends AxisDataSourceType {
  static _Q = "c:cat";
}
class ErrorBars extends OxmlCompositeElement {
  static _Q = "c:errBars";
  /** Error Bar Direction. */
  get errorDirection() {
    return this._f(ErrorDirection);
  }
  /** Error Bar Type. */
  get errorBarType() {
    return this._f(ErrorBarType);
  }
  /** Error Bar Value Type. */
  get errorBarValueType() {
    return this._f(ErrorBarValueType);
  }
  /** No End Cap. */
  get noEndCap() {
    return this._f(NoEndCap);
  }
  /** Plus. */
  get plus() {
    return this._f(Plus);
  }
  /** Minus. */
  get minus() {
    return this._f(Minus);
  }
  /** Error Bar Value. */
  get errorBarValue() {
    return this._f(ErrorBarValue);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Trendline extends OxmlCompositeElement {
  static _Q = "c:trendline";
  /** Trendline Name. */
  get trendlineName() {
    return this._f(TrendlineName);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Trendline Type. */
  get trendlineType() {
    return this._f(TrendlineType);
  }
  /** Polynomial Trendline Order. */
  get polynomialOrder() {
    return this._f(PolynomialOrder);
  }
  /** Period. */
  get period() {
    return this._f(Period);
  }
  /** Forward. */
  get forward() {
    return this._f(Forward);
  }
  /** Backward. */
  get backward() {
    return this._f(Backward);
  }
  /** Intercept. */
  get intercept() {
    return this._f(Intercept);
  }
  /** Display R Squared Value. */
  get displayRSquaredValue() {
    return this._f(DisplayRSquaredValue);
  }
  /** Display Equation. */
  get displayEquation() {
    return this._f(DisplayEquation);
  }
  /** Trendline Label. */
  get trendlineLabel() {
    return this._f(TrendlineLabel);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DataPoint extends OxmlCompositeElement {
  static _Q = "c:dPt";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Invert if Negative. */
  get invertIfNegative() {
    return this._f(InvertIfNegative);
  }
  /** Marker. */
  get marker() {
    return this._f(Marker);
  }
  /** 3D Bubble. */
  get bubble3D() {
    return this._f(Bubble3D);
  }
  /** Explosion. */
  get explosion() {
    return this._f(Explosion);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DLblsExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class DLblExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class MultiLvlStrRefExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class MultiLevelStringCache extends OxmlCompositeElement {
  static _Q = "c:multiLvlStrCache";
  /** Returns PointCount. */
  get pointCount() {
    return this._f(PointCount);
  }
}
class StrRefExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class StrDataExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class NumRefExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class Pie3DChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class PieChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class StockChartExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class UpDownBars extends OxmlCompositeElement {
  static _Q = "c:upDownBars";
  /** Gap Width. */
  get gapWidth() {
    return this._f(GapWidth);
  }
  /** Up Bars. */
  get upBars() {
    return this._f(UpBars);
  }
  /** Down Bars. */
  get downBars() {
    return this._f(DownBars);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ValAxExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15NumberingFormat. */
  get numberingFormat() {
    return this._f(C15NumberingFormat);
  }
}
class SerAxExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15NumberingFormat. */
  get numberingFormat() {
    return this._f(C15NumberingFormat);
  }
}
class DateAxExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15NumberingFormat. */
  get numberingFormat() {
    return this._f(C15NumberingFormat);
  }
}
class CatAxExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15NumberingFormat. */
  get numberingFormat() {
    return this._f(C15NumberingFormat);
  }
}
class Surface3DChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSurfaceSeries. */
  get filteredSurfaceSeries() {
    return this._f(C15FilteredSurfaceSeries);
  }
}
class SurfaceChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSurfaceSeries. */
  get filteredSurfaceSeries() {
    return this._f(C15FilteredSurfaceSeries);
  }
}
class BubbleChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredBubbleSeries. */
  get filteredBubbleSeries() {
    return this._f(C15FilteredBubbleSeries);
  }
}
class Area3DChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredAreaSeries. */
  get filteredAreaSeries() {
    return this._f(C15FilteredAreaSeries);
  }
}
class AreaChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredAreaSeries. */
  get filteredAreaSeries() {
    return this._f(C15FilteredAreaSeries);
  }
}
class Bar3DChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredBarSeries. */
  get filteredBarSeries() {
    return this._f(C15FilteredBarSeries);
  }
}
class BarChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredBarSeries. */
  get filteredBarSeries() {
    return this._f(C15FilteredBarSeries);
  }
}
class RadarChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredRadarSeries. */
  get filteredRadarSeries() {
    return this._f(C15FilteredRadarSeries);
  }
}
class ScatterChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredScatterSeries. */
  get filteredScatterSeries() {
    return this._f(C15FilteredScatterSeries);
  }
}
class Line3DChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredLineSeriesExtension. */
  get filteredLineSeriesExtension() {
    return this._f(C15FilteredLineSeriesExtension);
  }
}
class LineChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredLineSeriesExtension. */
  get filteredLineSeriesExtension() {
    return this._f(C15FilteredLineSeriesExtension);
  }
}
class SurfaceSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class PieSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class AreaSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class RadarSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class ScatterSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class LineSerExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredSeriesTitle. */
  get filteredSeriesTitle() {
    return this._f(C15FilteredSeriesTitle);
  }
  /** Returns C15FilteredCategoryTitle. */
  get filteredCategoryTitle() {
    return this._f(C15FilteredCategoryTitle);
  }
  /** Returns C15DataLabelsRange. */
  get dataLabelsRange() {
    return this._f(C15DataLabelsRange);
  }
  /** Returns C15CategoryFilterExceptions. */
  get categoryFilterExceptions() {
    return this._f(C15CategoryFilterExceptions);
  }
}
class DLblsExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15ChartText. */
  get chartText() {
    return this._f(C15ChartText);
  }
  /** Returns C15DataLabelFieldTable. */
  get dataLabelFieldTable() {
    return this._f(C15DataLabelFieldTable);
  }
  /** Returns C15ShowDataLabelsRange. */
  get showDataLabelsRange() {
    return this._f(C15ShowDataLabelsRange);
  }
  /** Returns C15ShapeProperties. */
  get shapeProperties() {
    return this._f(C15ShapeProperties);
  }
  /** Returns C15Layout. */
  get layout() {
    return this._f(C15Layout);
  }
  /** Returns C15ShowLeaderLines. */
  get showLeaderLines() {
    return this._f(C15ShowLeaderLines);
  }
  /** Returns C15LeaderLines. */
  get leaderLines() {
    return this._f(C15LeaderLines);
  }
}
class DLblExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15DataLabelFieldTable. */
  get dataLabelFieldTable() {
    return this._f(C15DataLabelFieldTable);
  }
  /** Returns C15ExceptionForSave. */
  get exceptionForSave() {
    return this._f(C15ExceptionForSave);
  }
  /** Returns C15ShowDataLabelsRange. */
  get showDataLabelsRange() {
    return this._f(C15ShowDataLabelsRange);
  }
  /** Returns C15ShapeProperties. */
  get shapeProperties() {
    return this._f(C15ShapeProperties);
  }
  /** Returns C15Layout. */
  get layout() {
    return this._f(C15Layout);
  }
}
class MultiLvlStrRefExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FullReference. */
  get fullReference() {
    return this._f(C15FullReference);
  }
  /** Returns C15LevelReference. */
  get levelReference() {
    return this._f(C15LevelReference);
  }
  /** Returns C15FormulaReference. */
  get formulaReference() {
    return this._f(C15FormulaReference);
  }
}
class StrRefExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FullReference. */
  get fullReference() {
    return this._f(C15FullReference);
  }
  /** Returns C15LevelReference. */
  get levelReference() {
    return this._f(C15LevelReference);
  }
  /** Returns C15FormulaReference. */
  get formulaReference() {
    return this._f(C15FormulaReference);
  }
}
class StrDataExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15AutoGeneneratedCategories. */
  get autoGeneneratedCategories() {
    return this._f(C15AutoGeneneratedCategories);
  }
}
class NumRefExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FullReference. */
  get fullReference() {
    return this._f(C15FullReference);
  }
  /** Returns C15LevelReference. */
  get levelReference() {
    return this._f(C15LevelReference);
  }
  /** Returns C15FormulaReference. */
  get formulaReference() {
    return this._f(C15FormulaReference);
  }
}
class Pie3DChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredPieSeries. */
  get filteredPieSeries() {
    return this._f(C15FilteredPieSeries);
  }
}
class PieChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredPieSeries. */
  get filteredPieSeries() {
    return this._f(C15FilteredPieSeries);
  }
}
class StockChartExtension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns C15FilteredLineSeriesExtension. */
  get filteredLineSeriesExtension() {
    return this._f(C15FilteredLineSeriesExtension);
  }
}
class Thickness extends OxmlLeafElement {
  static _Q = "c:thickness";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class StringPoint extends OxmlCompositeElement {
  static _Q = "c:pt";
  static _A = [":idx"];
  /** Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** Text Value. */
  get numericValue() {
    return this._f(NumericValue);
  }
}
class HoleSize extends OxmlLeafElement {
  static _Q = "c:holeSize";
  static _A = [":val"];
  /** Hole Size Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class FirstSliceAngle extends OxmlLeafElement {
  static _Q = "c:firstSliceAng";
  static _A = [":val"];
  /** First Slice Angle Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DataTable extends OxmlCompositeElement {
  static _Q = "c:dTable";
  /** Show Horizontal Border. */
  get showHorizontalBorder() {
    return this._f(ShowHorizontalBorder);
  }
  /** Show Vertical Border. */
  get showVerticalBorder() {
    return this._f(ShowVerticalBorder);
  }
  /** Show Outline Border. */
  get showOutlineBorder() {
    return this._f(ShowOutlineBorder);
  }
  /** Show Legend Keys. */
  get showKeys() {
    return this._f(ShowKeys);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Text Properties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SeriesAxis extends OxmlCompositeElement {
  static _Q = "c:serAx";
  /** Axis ID. */
  get axisId() {
    return this._f(AxisId);
  }
  /** Scaling. */
  get scaling() {
    return this._f(Scaling);
  }
  /** Delete. */
  get delete() {
    return this._f(Delete);
  }
  /** Axis Position. */
  get axisPosition() {
    return this._f(AxisPosition);
  }
  /** Major Gridlines. */
  get majorGridlines() {
    return this._f(MajorGridlines);
  }
  /** Minor Gridlines. */
  get minorGridlines() {
    return this._f(MinorGridlines);
  }
  /** Title. */
  get title() {
    return this._f(Title);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Major Tick Mark. */
  get majorTickMark() {
    return this._f(MajorTickMark);
  }
  /** Minor Tick Mark. */
  get minorTickMark() {
    return this._f(MinorTickMark);
  }
  /** Tick Label Position. */
  get tickLabelPosition() {
    return this._f(TickLabelPosition);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Crossing Axis ID. */
  get crossingAxis() {
    return this._f(CrossingAxis);
  }
}
class DateAxis extends OxmlCompositeElement {
  static _Q = "c:dateAx";
  /** Axis ID. */
  get axisId() {
    return this._f(AxisId);
  }
  /** Scaling. */
  get scaling() {
    return this._f(Scaling);
  }
  /** Delete. */
  get delete() {
    return this._f(Delete);
  }
  /** Axis Position. */
  get axisPosition() {
    return this._f(AxisPosition);
  }
  /** Major Gridlines. */
  get majorGridlines() {
    return this._f(MajorGridlines);
  }
  /** Minor Gridlines. */
  get minorGridlines() {
    return this._f(MinorGridlines);
  }
  /** Title. */
  get title() {
    return this._f(Title);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Major Tick Mark. */
  get majorTickMark() {
    return this._f(MajorTickMark);
  }
  /** Minor Tick Mark. */
  get minorTickMark() {
    return this._f(MinorTickMark);
  }
  /** Tick Label Position. */
  get tickLabelPosition() {
    return this._f(TickLabelPosition);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Crossing Axis ID. */
  get crossingAxis() {
    return this._f(CrossingAxis);
  }
}
class CategoryAxis extends OxmlCompositeElement {
  static _Q = "c:catAx";
  /** Axis ID. */
  get axisId() {
    return this._f(AxisId);
  }
  /** Scaling. */
  get scaling() {
    return this._f(Scaling);
  }
  /** Delete. */
  get delete() {
    return this._f(Delete);
  }
  /** Axis Position. */
  get axisPosition() {
    return this._f(AxisPosition);
  }
  /** Major Gridlines. */
  get majorGridlines() {
    return this._f(MajorGridlines);
  }
  /** Minor Gridlines. */
  get minorGridlines() {
    return this._f(MinorGridlines);
  }
  /** Title. */
  get title() {
    return this._f(Title);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Major Tick Mark. */
  get majorTickMark() {
    return this._f(MajorTickMark);
  }
  /** Minor Tick Mark. */
  get minorTickMark() {
    return this._f(MinorTickMark);
  }
  /** Tick Label Position. */
  get tickLabelPosition() {
    return this._f(TickLabelPosition);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Crossing Axis ID. */
  get crossingAxis() {
    return this._f(CrossingAxis);
  }
}
class ValueAxis extends OxmlCompositeElement {
  static _Q = "c:valAx";
  /** Axis ID. */
  get axisId() {
    return this._f(AxisId);
  }
  /** Scaling. */
  get scaling() {
    return this._f(Scaling);
  }
  /** Delete. */
  get delete() {
    return this._f(Delete);
  }
  /** Axis Position. */
  get axisPosition() {
    return this._f(AxisPosition);
  }
  /** Major Gridlines. */
  get majorGridlines() {
    return this._f(MajorGridlines);
  }
  /** Minor Gridlines. */
  get minorGridlines() {
    return this._f(MinorGridlines);
  }
  /** Title. */
  get title() {
    return this._f(Title);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Major Tick Mark. */
  get majorTickMark() {
    return this._f(MajorTickMark);
  }
  /** Minor Tick Mark. */
  get minorTickMark() {
    return this._f(MinorTickMark);
  }
  /** Tick Label Position. */
  get tickLabelPosition() {
    return this._f(TickLabelPosition);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Crossing Axis ID. */
  get crossingAxis() {
    return this._f(CrossingAxis);
  }
}
class BubbleChart extends OxmlCompositeElement {
  static _Q = "c:bubbleChart";
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class Surface3DChart extends OxmlCompositeElement {
  static _Q = "c:surface3DChart";
  /** Returns Wireframe. */
  get wireframe() {
    return this._f(Wireframe);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class SurfaceChart extends OxmlCompositeElement {
  static _Q = "c:surfaceChart";
  /** Wireframe. */
  get wireframe() {
    return this._f(Wireframe);
  }
}
class OfPieChart extends OxmlCompositeElement {
  static _Q = "c:ofPieChart";
  /** Pie of Pie or Bar of Pie Type. */
  get ofPieType() {
    return this._f(OfPieType);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class Bar3DChart extends OxmlCompositeElement {
  static _Q = "c:bar3DChart";
  /** Bar Direction. */
  get barDirection() {
    return this._f(BarDirection);
  }
  /** Bar Grouping. */
  get barGrouping() {
    return this._f(BarGrouping);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class BarChart extends OxmlCompositeElement {
  static _Q = "c:barChart";
  /** Bar Direction. */
  get barDirection() {
    return this._f(BarDirection);
  }
  /** Bar Grouping. */
  get barGrouping() {
    return this._f(BarGrouping);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class DoughnutChart extends OxmlCompositeElement {
  static _Q = "c:doughnutChart";
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class Pie3DChart extends OxmlCompositeElement {
  static _Q = "c:pie3DChart";
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class PieChart extends OxmlCompositeElement {
  static _Q = "c:pieChart";
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class ScatterChart extends OxmlCompositeElement {
  static _Q = "c:scatterChart";
  /** Returns ScatterStyle. */
  get scatterStyle() {
    return this._f(ScatterStyle);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class RadarChart extends OxmlCompositeElement {
  static _Q = "c:radarChart";
  /** Returns RadarStyle. */
  get radarStyle() {
    return this._f(RadarStyle);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class StockChart extends OxmlCompositeElement {
  static _Q = "c:stockChart";
}
class Line3DChart extends OxmlCompositeElement {
  static _Q = "c:line3DChart";
  /** Grouping. */
  get grouping() {
    return this._f(Grouping);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class LineChart extends OxmlCompositeElement {
  static _Q = "c:lineChart";
  /** Grouping. */
  get grouping() {
    return this._f(Grouping);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class Area3DChart extends OxmlCompositeElement {
  static _Q = "c:area3DChart";
  /** Grouping. */
  get grouping() {
    return this._f(Grouping);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class AreaChart extends OxmlCompositeElement {
  static _Q = "c:areaChart";
  /** Grouping. */
  get grouping() {
    return this._f(Grouping);
  }
  /** Returns VaryColors. */
  get varyColors() {
    return this._f(VaryColors);
  }
}
class DataLabel extends OxmlCompositeElement {
  static _Q = "c:dLbl";
  /** Returns Index. */
  get index() {
    return this._f(Index);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "c:spPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Individual Objects. */
  get transform2D() {
    return this._f(ATransform2D);
  }
}
class PageSetup extends OxmlLeafElement {
  static _Q = "c:pageSetup";
  static _A = [":paperSize", ":firstPageNumber", ":orientation", ":blackAndWhite", ":draft", ":useFirstPageNumber", ":horizontalDpi", ":verticalDpi", ":copies"];
  /** Page Size. Serialized as `:paperSize` */
  get paperSize() {
    return this._g(":paperSize");
  }
  set paperSize(v) {
    this._s(":paperSize", v);
  }
  /** First Page Number. Serialized as `:firstPageNumber` */
  get firstPageNumber() {
    return this._g(":firstPageNumber");
  }
  set firstPageNumber(v) {
    this._s(":firstPageNumber", v);
  }
  /** Orientation. Serialized as `:orientation` */
  get orientation() {
    return this._g(":orientation");
  }
  set orientation(v) {
    this._s(":orientation", v);
  }
  /** Black and White. Serialized as `:blackAndWhite` */
  get blackAndWhite() {
    return this._g(":blackAndWhite");
  }
  set blackAndWhite(v) {
    this._s(":blackAndWhite", v);
  }
  /** Draft. Serialized as `:draft` */
  get draft() {
    return this._g(":draft");
  }
  set draft(v) {
    this._s(":draft", v);
  }
  /** Use First Page Number. Serialized as `:useFirstPageNumber` */
  get useFirstPageNumber() {
    return this._g(":useFirstPageNumber");
  }
  set useFirstPageNumber(v) {
    this._s(":useFirstPageNumber", v);
  }
  /** Horizontal DPI. Serialized as `:horizontalDpi` */
  get horizontalDpi() {
    return this._g(":horizontalDpi");
  }
  set horizontalDpi(v) {
    this._s(":horizontalDpi", v);
  }
  /** Vertical DPI. Serialized as `:verticalDpi` */
  get verticalDpi() {
    return this._g(":verticalDpi");
  }
  set verticalDpi(v) {
    this._s(":verticalDpi", v);
  }
  /** Copies. Serialized as `:copies` */
  get copies() {
    return this._g(":copies");
  }
  set copies(v) {
    this._s(":copies", v);
  }
}
class PageMargins extends OxmlLeafElement {
  static _Q = "c:pageMargins";
  static _A = [":l", ":r", ":t", ":b", ":header", ":footer"];
  /** Left. Serialized as `:l` */
  get left() {
    return this._g(":l");
  }
  set left(v) {
    this._s(":l", v);
  }
  /** Right. Serialized as `:r` */
  get right() {
    return this._g(":r");
  }
  set right(v) {
    this._s(":r", v);
  }
  /** Top. Serialized as `:t` */
  get top() {
    return this._g(":t");
  }
  set top(v) {
    this._s(":t", v);
  }
  /** Bottom. Serialized as `:b` */
  get bottom() {
    return this._g(":b");
  }
  set bottom(v) {
    this._s(":b", v);
  }
  /** Header. Serialized as `:header` */
  get header() {
    return this._g(":header");
  }
  set header(v) {
    this._s(":header", v);
  }
  /** Footer. Serialized as `:footer` */
  get footer() {
    return this._g(":footer");
  }
  set footer(v) {
    this._s(":footer", v);
  }
}
class HeaderFooter extends OxmlCompositeElement {
  static _Q = "c:headerFooter";
  static _A = [":alignWithMargins", ":differentOddEven", ":differentFirst"];
  /** Align With Margins. Serialized as `:alignWithMargins` */
  get alignWithMargins() {
    return this._g(":alignWithMargins");
  }
  set alignWithMargins(v) {
    this._s(":alignWithMargins", v);
  }
  /** Different Odd Even. Serialized as `:differentOddEven` */
  get differentOddEven() {
    return this._g(":differentOddEven");
  }
  set differentOddEven(v) {
    this._s(":differentOddEven", v);
  }
  /** Different First. Serialized as `:differentFirst` */
  get differentFirst() {
    return this._g(":differentFirst");
  }
  set differentFirst(v) {
    this._s(":differentFirst", v);
  }
  /** Odd Header. */
  get oddHeader() {
    return this._f(OddHeader);
  }
  /** Odd Footer. */
  get oddFooter() {
    return this._f(OddFooter);
  }
  /** Even Header. */
  get evenHeader() {
    return this._f(EvenHeader);
  }
  /** Even Footer. */
  get evenFooter() {
    return this._f(EvenFooter);
  }
  /** First Header. */
  get firstHeader() {
    return this._f(FirstHeader);
  }
  /** First Footer. */
  get firstFooter() {
    return this._f(FirstFooter);
  }
}
class LegendEntry extends OxmlCompositeElement {
  static _Q = "c:legendEntry";
  /** Index. */
  get index() {
    return this._f(Index);
  }
}
class LegendPosition extends OxmlLeafElement {
  static _Q = "c:legendPos";
  static _A = [":val"];
  /** Legend Position Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PivotFormat extends OxmlCompositeElement {
  static _Q = "c:pivotFmt";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Marker. */
  get marker() {
    return this._f(Marker);
  }
  /** Data Label. */
  get dataLabel() {
    return this._f(DataLabel);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Orientation extends OxmlLeafElement {
  static _Q = "c:orientation";
  static _A = [":val"];
  /** Orientation Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class LogBase extends OxmlLeafElement {
  static _Q = "c:logBase";
  static _A = [":val"];
  /** Logarithmic Base Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DisplayUnitsLabel extends OxmlCompositeElement {
  static _Q = "c:dispUnitsLbl";
  /** Layout. */
  get layout() {
    return this._f(Layout);
  }
  /** Returns ChartText. */
  get chartText() {
    return this._f(ChartText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
}
class BuiltInUnit extends OxmlLeafElement {
  static _Q = "c:builtInUnit";
  static _A = [":val"];
  /** Built In Unit Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PictureStackUnit extends OxmlLeafElement {
  static _Q = "c:pictureStackUnit";
  static _A = [":val"];
  /** Picture Stack Unit. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PictureFormat extends OxmlLeafElement {
  static _Q = "c:pictureFormat";
  static _A = [":val"];
  /** Picture Format Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BandFormat extends OxmlCompositeElement {
  static _Q = "c:bandFmt";
  /** Returns Index. */
  get index() {
    return this._f(Index);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
}
class SecondPieSize extends OxmlLeafElement {
  static _Q = "c:secondPieSize";
  static _A = [":val"];
  /** Second Pie Size Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class CustomSplit extends OxmlCompositeElement {
  static _Q = "c:custSplit";
}
class SplitType extends OxmlLeafElement {
  static _Q = "c:splitType";
  static _A = [":val"];
  /** Split Type Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class OfPieType extends OxmlLeafElement {
  static _Q = "c:ofPieType";
  static _A = [":val"];
  /** Pie of Pie or Bar of Pie Type Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class UpDownBarType extends OxmlCompositeElement {
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
}
class DownBars extends UpDownBarType {
  static _Q = "c:downBars";
}
class UpBars extends UpDownBarType {
  static _Q = "c:upBars";
}
class GapAmountType extends OxmlLeafElement {
  static _A = [":val"];
  /** Gap Size Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class GapDepth extends GapAmountType {
  static _Q = "c:gapDepth";
}
class GapWidth extends GapAmountType {
  static _Q = "c:gapWidth";
}
class NumberDataSourceType extends OxmlCompositeElement {
  /** Number Reference. */
  get numberReference() {
    return this._f(NumberReference);
  }
  /** Number Literal. */
  get numberLiteral() {
    return this._f(NumberLiteral);
  }
}
class BubbleSize extends NumberDataSourceType {
  static _Q = "c:bubbleSize";
}
class YValues extends NumberDataSourceType {
  static _Q = "c:yVal";
}
class Values extends NumberDataSourceType {
  static _Q = "c:val";
}
class Minus extends NumberDataSourceType {
  static _Q = "c:minus";
}
class Plus extends NumberDataSourceType {
  static _Q = "c:plus";
}
class ErrorBarValueType extends OxmlLeafElement {
  static _Q = "c:errValType";
  static _A = [":val"];
  /** Error Bar Type Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ErrorBarType extends OxmlLeafElement {
  static _Q = "c:errBarType";
  static _A = [":val"];
  /** Error Bar Type Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ErrorDirection extends OxmlLeafElement {
  static _Q = "c:errDir";
  static _A = [":val"];
  /** Error Bar Direction Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TrendlineLabel extends OxmlCompositeElement {
  static _Q = "c:trendlineLbl";
  /** Layout. */
  get layout() {
    return this._f(Layout);
  }
  /** Returns ChartText. */
  get chartText() {
    return this._f(ChartText);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Period extends OxmlLeafElement {
  static _Q = "c:period";
  static _A = [":val"];
  /** Period Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PolynomialOrder extends OxmlLeafElement {
  static _Q = "c:order";
  static _A = [":val"];
  /** Order Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TrendlineType extends OxmlLeafElement {
  static _Q = "c:trendlineType";
  static _A = [":val"];
  /** Trendline Type Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PictureOptions extends OxmlCompositeElement {
  static _Q = "c:pictureOptions";
  /** Apply To Front. */
  get applyToFront() {
    return this._f(ApplyToFront);
  }
  /** Apply To Sides. */
  get applyToSides() {
    return this._f(ApplyToSides);
  }
  /** Apply to End. */
  get applyToEnd() {
    return this._f(ApplyToEnd);
  }
  /** Picture Format. */
  get pictureFormat() {
    return this._f(PictureFormat);
  }
  /** Picture Stack Unit. */
  get pictureStackUnit() {
    return this._f(PictureStackUnit);
  }
}
class Marker extends OxmlCompositeElement {
  static _Q = "c:marker";
  /** Symbol. */
  get symbol() {
    return this._f(Symbol);
  }
  /** Size. */
  get size() {
    return this._f(Size);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Size extends OxmlLeafElement {
  static _Q = "c:size";
  static _A = [":val"];
  /** Marker Size Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Symbol extends OxmlLeafElement {
  static _Q = "c:symbol";
  static _A = [":val"];
  /** Marker Style Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Perspective extends OxmlLeafElement {
  static _Q = "c:perspective";
  static _A = [":val"];
  /** Perspective Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DepthPercent extends OxmlLeafElement {
  static _Q = "c:depthPercent";
  static _A = [":val"];
  /** Depth Percent Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class RotateY extends OxmlLeafElement {
  static _Q = "c:rotY";
  static _A = [":val"];
  /** Y Rotation Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class HeightPercent extends OxmlLeafElement {
  static _Q = "c:hPercent";
  static _A = [":val"];
  /** Height Percent Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class RotateX extends OxmlLeafElement {
  static _Q = "c:rotX";
  static _A = [":val"];
  /** X Rotation Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ManualLayout extends OxmlCompositeElement {
  static _Q = "c:manualLayout";
  /** Layout Target. */
  get layoutTarget() {
    return this._f(LayoutTarget);
  }
  /** Left Mode. */
  get leftMode() {
    return this._f(LeftMode);
  }
  /** Top Mode. */
  get topMode() {
    return this._f(TopMode);
  }
  /** Width Mode. */
  get widthMode() {
    return this._f(WidthMode);
  }
  /** Height Mode. */
  get heightMode() {
    return this._f(HeightMode);
  }
  /** Left. */
  get left() {
    return this._f(Left);
  }
  /** Top. */
  get top() {
    return this._f(Top);
  }
  /** Width. */
  get width() {
    return this._f(Width);
  }
  /** Height. */
  get height() {
    return this._f(Height);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class LayoutModeType extends OxmlLeafElement {
  static _A = [":val"];
  /** Layout Mode Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class HeightMode extends LayoutModeType {
  static _Q = "c:hMode";
}
class WidthMode extends LayoutModeType {
  static _Q = "c:wMode";
}
class TopMode extends LayoutModeType {
  static _Q = "c:yMode";
}
class LeftMode extends LayoutModeType {
  static _Q = "c:xMode";
}
class LayoutTarget extends OxmlLeafElement {
  static _Q = "c:layoutTarget";
  static _A = [":val"];
  /** Layout Target Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class StringDataType extends OxmlCompositeElement {
  /** Returns PointCount. */
  get pointCount() {
    return this._f(PointCount);
  }
}
class StringCache extends StringDataType {
  static _Q = "c:strCache";
}
class StringLiteral extends StringDataType {
  static _Q = "c:strLit";
}
class StringReference extends OxmlCompositeElement {
  static _Q = "c:strRef";
  /** Returns Formula. */
  get formula() {
    return this._f(Formula);
  }
  /** Returns StringCache. */
  get stringCache() {
    return this._f(StringCache);
  }
  /** Returns StrRefExtensionList. */
  get strRefExtensionList() {
    return this._f(StrRefExtensionList);
  }
}
class MultiLevelStringReference extends OxmlCompositeElement {
  static _Q = "c:multiLvlStrRef";
  /** Returns Formula. */
  get formula() {
    return this._f(Formula);
  }
  /** Returns MultiLevelStringCache. */
  get multiLevelStringCache() {
    return this._f(MultiLevelStringCache);
  }
  /** Returns MultiLvlStrRefExtensionList. */
  get multiLvlStrRefExtensionList() {
    return this._f(MultiLvlStrRefExtensionList);
  }
}
class Level extends OxmlCompositeElement {
  static _Q = "c:lvl";
}
class NumberDataType extends OxmlCompositeElement {
  /** Format Code. */
  get formatCode() {
    return this._f(FormatCode);
  }
  /** Point Count. */
  get pointCount() {
    return this._f(PointCount);
  }
}
class NumberingCache extends NumberDataType {
  static _Q = "c:numCache";
}
class NumberLiteral extends NumberDataType {
  static _Q = "c:numLit";
}
class NumberReference extends OxmlCompositeElement {
  static _Q = "c:numRef";
  /** Returns Formula. */
  get formula() {
    return this._f(Formula);
  }
  /** Returns NumberingCache. */
  get numberingCache() {
    return this._f(NumberingCache);
  }
  /** Returns NumRefExtensionList. */
  get numRefExtensionList() {
    return this._f(NumRefExtensionList);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "c:extLst";
}
class NumericPoint extends OxmlCompositeElement {
  static _Q = "c:pt";
  static _A = [":idx", ":formatCode"];
  /** Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** Number Format. Serialized as `:formatCode` */
  get formatCode() {
    return this._g(":formatCode");
  }
  set formatCode(v) {
    this._s(":formatCode", v);
  }
  /** Numeric Value. */
  get numericValue() {
    return this._f(NumericValue);
  }
}
class PivotTableName extends OxmlLeafTextElement {
  static _Q = "c:name";
}
class FirstFooter extends OxmlLeafTextElement {
  static _Q = "c:firstFooter";
}
class FirstHeader extends OxmlLeafTextElement {
  static _Q = "c:firstHeader";
}
class EvenFooter extends OxmlLeafTextElement {
  static _Q = "c:evenFooter";
}
class EvenHeader extends OxmlLeafTextElement {
  static _Q = "c:evenHeader";
}
class OddFooter extends OxmlLeafTextElement {
  static _Q = "c:oddFooter";
}
class OddHeader extends OxmlLeafTextElement {
  static _Q = "c:oddHeader";
}
class FormatCode extends OxmlLeafTextElement {
  static _Q = "c:formatCode";
}
class NumericValue extends OxmlLeafTextElement {
  static _Q = "c:v";
}
class Extension extends OxmlCompositeElement {
  static _Q = "c:ext";
  static _A = [":uri"];
  /** Uniform Resource Identifier. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
class RelationshipIdType extends OxmlLeafElement {
  static _A = ["r:id"];
  /** Relationship Reference. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class UserShapesReference extends RelationshipIdType {
  static _Q = "c:userShapes";
}
class LegacyDrawingHeaderFooter extends RelationshipIdType {
  static _Q = "c:legacyDrawingHF";
}
class ChartReference extends RelationshipIdType {
  static _Q = "c:chart";
}
class UserShapes extends OxmlPartRootElement {
  static _Q = "c:userShapes";
}
class ChartSpace extends OxmlPartRootElement {
  static _Q = "c:chartSpace";
  /** Returns Date1904. */
  get date1904() {
    return this._f(Date1904);
  }
  /** Returns EditingLanguage. */
  get editingLanguage() {
    return this._f(EditingLanguage);
  }
  /** Returns RoundedCorners. */
  get roundedCorners() {
    return this._f(RoundedCorners);
  }
}
class DoubleType extends OxmlLeafElement {
  static _A = [":val"];
  /** Floating Point Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class MinAxisValue extends DoubleType {
  static _Q = "c:min";
}
class MaxAxisValue extends DoubleType {
  static _Q = "c:max";
}
class CustomDisplayUnit extends DoubleType {
  static _Q = "c:custUnit";
}
class SplitPosition extends DoubleType {
  static _Q = "c:splitPos";
}
class ErrorBarValue extends DoubleType {
  static _Q = "c:val";
}
class Intercept extends DoubleType {
  static _Q = "c:intercept";
}
class Backward extends DoubleType {
  static _Q = "c:backward";
}
class Forward extends DoubleType {
  static _Q = "c:forward";
}
class Height extends DoubleType {
  static _Q = "c:h";
}
class Width extends DoubleType {
  static _Q = "c:w";
}
class Top extends DoubleType {
  static _Q = "c:y";
}
class Left extends DoubleType {
  static _Q = "c:x";
}
class CrossesAt extends DoubleType {
  static _Q = "c:crossesAt";
}
class Crosses extends OxmlLeafElement {
  static _Q = "c:crosses";
  static _A = [":val"];
  /** Crosses Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TickLabelPosition extends OxmlLeafElement {
  static _Q = "c:tickLblPos";
  static _A = [":val"];
  /** Tick Label Position Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TickMarkType extends OxmlLeafElement {
  static _A = [":val"];
  /** Tick Mark Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class MinorTickMark extends TickMarkType {
  static _Q = "c:minorTickMark";
}
class MajorTickMark extends TickMarkType {
  static _Q = "c:majorTickMark";
}
class Title extends OxmlCompositeElement {
  static _Q = "c:title";
  /** Chart Text. */
  get chartText() {
    return this._f(ChartText);
  }
  /** Layout. */
  get layout() {
    return this._f(Layout);
  }
  /** Overlay. */
  get overlay() {
    return this._f(Overlay);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class AxisPosition extends OxmlLeafElement {
  static _Q = "c:axPos";
  static _A = [":val"];
  /** Axis Position Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Scaling extends OxmlCompositeElement {
  static _Q = "c:scaling";
  /** Logarithmic Base. */
  get logBase() {
    return this._f(LogBase);
  }
  /** Axis Orientation. */
  get orientation() {
    return this._f(Orientation);
  }
  /** Maximum. */
  get maxAxisValue() {
    return this._f(MaxAxisValue);
  }
  /** Minimum. */
  get minAxisValue() {
    return this._f(MinAxisValue);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class BandFormats extends OxmlCompositeElement {
  static _Q = "c:bandFmts";
}
class SurfaceChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
  /** Returns CategoryAxisData. */
  get categoryAxisData() {
    return this._f(CategoryAxisData);
  }
  /** Returns Values. */
  get values() {
    return this._f(Values);
  }
  /** Returns Bubble3D. */
  get bubble3D() {
    return this._f(Bubble3D);
  }
  /** Returns SurfaceSerExtensionList. */
  get surfaceSerExtensionList() {
    return this._f(SurfaceSerExtensionList);
  }
}
class PieChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
  /** Returns Explosion. */
  get explosion() {
    return this._f(Explosion);
  }
}
class AreaChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
}
class BarChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns InvertIfNegative. */
  get invertIfNegative() {
    return this._f(InvertIfNegative);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
}
class BarGrouping extends OxmlLeafElement {
  static _Q = "c:grouping";
  static _A = [":val"];
  /** Bar Grouping Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BarDirection extends OxmlLeafElement {
  static _Q = "c:barDir";
  static _A = [":val"];
  /** Bar Direction Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DataLabels extends OxmlCompositeElement {
  static _Q = "c:dLbls";
}
class LineChartSeries extends OxmlCompositeElement {
  static _Q = "c:ser";
  /** Index. */
  get index() {
    return this._f(Index);
  }
  /** Order. */
  get order() {
    return this._f(Order);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(SeriesText);
  }
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
  /** Returns Marker. */
  get marker() {
    return this._f(Marker);
  }
  /** Returns PictureOptions. */
  get pictureOptions() {
    return this._f(PictureOptions);
  }
}
class Grouping extends OxmlLeafElement {
  static _Q = "c:grouping";
  static _A = [":val"];
  /** Grouping Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class SeriesText extends OxmlCompositeElement {
  static _Q = "c:tx";
  /** Returns StringReference. */
  get stringReference() {
    return this._f(StringReference);
  }
  /** Returns NumericValue. */
  get numericValue() {
    return this._f(NumericValue);
  }
}
class UnsignedIntegerType extends OxmlLeafElement {
  static _A = [":val"];
  /** Integer Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class FormatId extends UnsignedIntegerType {
  static _Q = "c:fmtId";
}
class Explosion extends UnsignedIntegerType {
  static _Q = "c:explosion";
}
class SecondPiePoint extends UnsignedIntegerType {
  static _Q = "c:secondPiePt";
}
class PointCount extends UnsignedIntegerType {
  static _Q = "c:ptCount";
}
class CrossingAxis extends UnsignedIntegerType {
  static _Q = "c:crossAx";
}
class AxisId extends UnsignedIntegerType {
  static _Q = "c:axId";
}
class Order extends UnsignedIntegerType {
  static _Q = "c:order";
}
class Index extends UnsignedIntegerType {
  static _Q = "c:idx";
}
class ChartLinesType extends OxmlCompositeElement {
  /** Returns ChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(ChartShapeProperties);
  }
}
class HighLowLines extends ChartLinesType {
  static _Q = "c:hiLowLines";
}
class SeriesLines extends ChartLinesType {
  static _Q = "c:serLines";
}
class MinorGridlines extends ChartLinesType {
  static _Q = "c:minorGridlines";
}
class MajorGridlines extends ChartLinesType {
  static _Q = "c:majorGridlines";
}
class DropLines extends ChartLinesType {
  static _Q = "c:dropLines";
}
class LeaderLines extends ChartLinesType {
  static _Q = "c:leaderLines";
}
class ChartText extends OxmlCompositeElement {
  static _Q = "c:tx";
  /** String Reference. */
  get stringReference() {
    return this._f(StringReference);
  }
  /** Rich Text. */
  get richText() {
    return this._f(RichText);
  }
  /** String Literal. */
  get stringLiteral() {
    return this._f(StringLiteral);
  }
}
class Layout extends OxmlCompositeElement {
  static _Q = "c:layout";
  /** Manual Layout. */
  get manualLayout() {
    return this._f(ManualLayout);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Formula extends OxmlLeafTextElement {
  static _Q = "c:f";
}
class TrendlineName extends OxmlLeafTextElement {
  static _Q = "c:name";
}
class Separator extends OxmlLeafTextElement {
  static _Q = "c:separator";
}
class BooleanType extends OxmlLeafElement {
  static _A = [":val"];
  /** Boolean Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ShowDataLabelsOverMaximum extends BooleanType {
  static _Q = "c:showDLblsOverMax";
}
class PlotVisibleOnly extends BooleanType {
  static _Q = "c:plotVisOnly";
}
class AutoTitleDeleted extends BooleanType {
  static _Q = "c:autoTitleDeleted";
}
class RoundedCorners extends BooleanType {
  static _Q = "c:roundedCorners";
}
class Date1904 extends BooleanType {
  static _Q = "c:date1904";
}
class NoMultiLevelLabels extends BooleanType {
  static _Q = "c:noMultiLvlLbl";
}
class AutoLabeled extends BooleanType {
  static _Q = "c:auto";
}
class ShowNegativeBubbles extends BooleanType {
  static _Q = "c:showNegBubbles";
}
class ShowMarker extends BooleanType {
  static _Q = "c:marker";
}
class Smooth extends BooleanType {
  static _Q = "c:smooth";
}
class AutoUpdate extends BooleanType {
  static _Q = "c:autoUpdate";
}
class UserInterface extends BooleanType {
  static _Q = "c:userInterface";
}
class Selection extends BooleanType {
  static _Q = "c:selection";
}
class Formatting extends BooleanType {
  static _Q = "c:formatting";
}
class Data extends BooleanType {
  static _Q = "c:data";
}
class ChartObject extends BooleanType {
  static _Q = "c:chartObject";
}
class ApplyToEnd extends BooleanType {
  static _Q = "c:applyToEnd";
}
class ApplyToSides extends BooleanType {
  static _Q = "c:applyToSides";
}
class ApplyToFront extends BooleanType {
  static _Q = "c:applyToFront";
}
class NoEndCap extends BooleanType {
  static _Q = "c:noEndCap";
}
class DisplayEquation extends BooleanType {
  static _Q = "c:dispEq";
}
class DisplayRSquaredValue extends BooleanType {
  static _Q = "c:dispRSqr";
}
class Bubble3D extends BooleanType {
  static _Q = "c:bubble3D";
}
class InvertIfNegative extends BooleanType {
  static _Q = "c:invertIfNegative";
}
class ShowKeys extends BooleanType {
  static _Q = "c:showKeys";
}
class ShowOutlineBorder extends BooleanType {
  static _Q = "c:showOutline";
}
class ShowVerticalBorder extends BooleanType {
  static _Q = "c:showVertBorder";
}
class ShowHorizontalBorder extends BooleanType {
  static _Q = "c:showHorzBorder";
}
class RightAngleAxes extends BooleanType {
  static _Q = "c:rAngAx";
}
class Overlay extends BooleanType {
  static _Q = "c:overlay";
}
class Delete extends BooleanType {
  static _Q = "c:delete";
}
class Wireframe extends BooleanType {
  static _Q = "c:wireframe";
}
class VaryColors extends BooleanType {
  static _Q = "c:varyColors";
}
class ShowLeaderLines extends BooleanType {
  static _Q = "c:showLeaderLines";
}
class ShowBubbleSize extends BooleanType {
  static _Q = "c:showBubbleSize";
}
class ShowPercent extends BooleanType {
  static _Q = "c:showPercent";
}
class ShowSeriesName extends BooleanType {
  static _Q = "c:showSerName";
}
class ShowCategoryName extends BooleanType {
  static _Q = "c:showCatName";
}
class ShowValue extends BooleanType {
  static _Q = "c:showVal";
}
class ShowLegendKey extends BooleanType {
  static _Q = "c:showLegendKey";
}
class DataLabelPosition extends OxmlLeafElement {
  static _Q = "c:dLblPos";
  static _A = [":val"];
  /** Data Label Position Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TextBodyType extends OxmlCompositeElement {
  /** Body Properties. */
  get bodyProperties() {
    return this._f(ABodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(AListStyle);
  }
}
class RichText extends TextBodyType {
  static _Q = "c:rich";
}
class TextProperties extends TextBodyType {
  static _Q = "c:txPr";
}
class ChartShapeProperties extends OxmlCompositeElement {
  static _Q = "c:spPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Individual Objects. */
  get transform2D() {
    return this._f(ATransform2D);
  }
}
class NumberingFormat extends OxmlLeafElement {
  static _Q = "c:numFmt";
  static _A = [":formatCode", ":sourceLinked"];
  /** Number Format Code. Serialized as `:formatCode` */
  get formatCode() {
    return this._g(":formatCode");
  }
  set formatCode(v) {
    this._s(":formatCode", v);
  }
  /** Linked to Source. Serialized as `:sourceLinked` */
  get sourceLinked() {
    return this._g(":sourceLinked");
  }
  set sourceLinked(v) {
    this._s(":sourceLinked", v);
  }
}
function initDrawingChartsNamespace() {
  ChartExtensionList._C = {
    "c:ext": DataDisplayOptions16
  };
  DisplayBlanksAs._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, DisplayBlanksAsValuesArray)
  };
  Legend._C = {
    "c:legendPos": LegendPosition,
    "c:legendEntry": LegendEntry,
    "c:layout": Layout,
    "c:overlay": Overlay,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:extLst": ExtensionList
  };
  PlotArea._C = {
    "c:layout": Layout,
    "c:areaChart": AreaChart,
    "c:area3DChart": Area3DChart,
    "c:lineChart": LineChart,
    "c:line3DChart": Line3DChart,
    "c:stockChart": StockChart,
    "c:radarChart": RadarChart,
    "c:scatterChart": ScatterChart,
    "c:pieChart": PieChart,
    "c:pie3DChart": Pie3DChart,
    "c:doughnutChart": DoughnutChart,
    "c:barChart": BarChart,
    "c:bar3DChart": Bar3DChart,
    "c:ofPieChart": OfPieChart,
    "c:surfaceChart": SurfaceChart,
    "c:surface3DChart": Surface3DChart,
    "c:bubbleChart": BubbleChart,
    "c:valAx": ValueAxis,
    "c:catAx": CategoryAxis,
    "c:dateAx": DateAxis,
    "c:serAx": SeriesAxis,
    "c:dTable": DataTable,
    "c:spPr": ShapeProperties,
    "c:extLst": ExtensionList
  };
  SurfaceType._C = {
    "c:thickness": Thickness,
    "c:spPr": ShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:extLst": ExtensionList
  };
  BackWall._C = {
    "c:thickness": Thickness,
    "c:spPr": ShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:extLst": ExtensionList
  };
  SideWall._C = {
    "c:thickness": Thickness,
    "c:spPr": ShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:extLst": ExtensionList
  };
  Floor._C = {
    "c:thickness": Thickness,
    "c:spPr": ShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:extLst": ExtensionList
  };
  View3D._C = {
    "c:rotX": RotateX,
    "c:hPercent": HeightPercent,
    "c:rotY": RotateY,
    "c:depthPercent": DepthPercent,
    "c:rAngAx": RightAngleAxes,
    "c:perspective": Perspective,
    "c:extLst": ExtensionList
  };
  PivotFormats._C = {
    "c:pivotFmt": PivotFormat
  };
  DataDisplayOptions16._C = {
    "c16r3:dispNaAsBlank": C16r3BooleanFalse
  };
  ChartSpaceExtension._C = {
    "c14:pivotOptions": C14PivotOptions,
    "c14:sketchOptions": C14SketchOptions,
    "c15:pivotSource": C15PivotSource
  };
  ChartSpaceExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ChartSpaceExtensionList._C = {
    "c:ext": ChartSpaceExtension
  };
  PrintSettings._C = {
    "c:headerFooter": HeaderFooter,
    "c:pageMargins": PageMargins,
    "c:pageSetup": PageSetup,
    "c:legacyDrawingHF": LegacyDrawingHeaderFooter
  };
  ExternalData._C = {
    "c:autoUpdate": AutoUpdate
  };
  ExternalData._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Chart._C = {
    "c:title": Title,
    "c:autoTitleDeleted": AutoTitleDeleted,
    "c:pivotFmts": PivotFormats,
    "c:view3D": View3D,
    "c:floor": Floor,
    "c:sideWall": SideWall,
    "c:backWall": BackWall,
    "c:plotArea": PlotArea,
    "c:legend": Legend,
    "c:plotVisOnly": PlotVisibleOnly,
    "c:dispBlanksAs": DisplayBlanksAs,
    "c:showDLblsOverMax": ShowDataLabelsOverMaximum,
    "c:extLst": ChartExtensionList
  };
  Protection._C = {
    "c:chartObject": ChartObject,
    "c:data": Data,
    "c:formatting": Formatting,
    "c:selection": Selection,
    "c:userInterface": UserInterface
  };
  PivotSource._C = {
    "c:name": PivotTableName,
    "c:fmtId": FormatId,
    "c:extLst": ExtensionList
  };
  ColorMapOverride._C = {
    "a:extLst": AExtensionList
  };
  ColorMapOverride._D = {
    ":bg1": new OxmlAttr(":bg1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":tx1": new OxmlAttr(":tx1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":bg2": new OxmlAttr(":bg2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":tx2": new OxmlAttr(":tx2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent1": new OxmlAttr(":accent1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent2": new OxmlAttr(":accent2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent3": new OxmlAttr(":accent3", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent4": new OxmlAttr(":accent4", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent5": new OxmlAttr(":accent5", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent6": new OxmlAttr(":accent6", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":hlink": new OxmlAttr(":hlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":folHlink": new OxmlAttr(":folHlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray)
  };
  Style._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  EditingLanguage._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ValAxExtensionList._C = {
    "c:ext": ValAxExtension
  };
  DisplayUnits._C = {
    "c:custUnit": CustomDisplayUnit,
    "c:builtInUnit": BuiltInUnit,
    "c:dispUnitsLbl": DisplayUnitsLabel,
    "c:extLst": ExtensionList
  };
  CrossBetween._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, CrossBetweenValuesArray)
  };
  SerAxExtensionList._C = {
    "c:ext": SerAxExtension
  };
  DateAxExtensionList._C = {
    "c:ext": DateAxExtension
  };
  AxisUnitType._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  TimeUnitType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, TimeUnitValuesArray)
  };
  CatAxExtensionList._C = {
    "c:ext": CatAxExtension
  };
  SkipType._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  LabelOffset._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  LabelAlignment._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, LabelAlignmentValuesArray)
  };
  Surface3DChartExtensionList._C = {
    "c:ext": Surface3DChartExtension
  };
  SurfaceChartExtensionList._C = {
    "c:ext": SurfaceChartExtension
  };
  BubbleChartExtensionList._C = {
    "c:ext": BubbleChartExtension
  };
  SizeRepresents._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, SizeRepresentsValuesArray)
  };
  BubbleScale._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  BubbleChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:invertIfNegative": InvertIfNegative,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:trendline": Trendline,
    "c:errBars": ErrorBars,
    "c:xVal": XValues,
    "c:yVal": YValues,
    "c:bubbleSize": BubbleSize,
    "c:bubble3D": Bubble3D,
    "c:extLst": BubbleSerExtensionList
  };
  Area3DChartExtensionList._C = {
    "c:ext": Area3DChartExtension
  };
  AreaChartExtensionList._C = {
    "c:ext": AreaChartExtension
  };
  Bar3DChartExtensionList._C = {
    "c:ext": Bar3DChartExtension
  };
  BarChartExtensionList._C = {
    "c:ext": BarChartExtension
  };
  Overlap._D = {
    ":val": new OxmlAttr(":val", OxmlType.SByteValue)
  };
  RadarChartExtensionList._C = {
    "c:ext": RadarChartExtension
  };
  RadarChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:marker": Marker,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:cat": CategoryAxisData,
    "c:val": Values,
    "c:extLst": RadarSerExtensionList
  };
  RadarStyle._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, RadarStyleValuesArray)
  };
  ScatterChartExtensionList._C = {
    "c:ext": ScatterChartExtension
  };
  ScatterChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:marker": Marker,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:trendline": Trendline,
    "c:errBars": ErrorBars,
    "c:xVal": XValues,
    "c:yVal": YValues,
    "c:smooth": Smooth,
    "c:extLst": ScatterSerExtensionList
  };
  ScatterStyle._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ScatterStyleValuesArray)
  };
  Line3DChartExtensionList._C = {
    "c:ext": Line3DChartExtension
  };
  LineChartExtensionList._C = {
    "c:ext": LineChartExtension
  };
  SurfaceSerExtensionList._C = {
    "c:ext": SurfaceSerExtension
  };
  BubbleSerExtension._C = {
    "c14:invertSolidFillFmt": C14InvertSolidFillFormat,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  BubbleSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  BubbleSerExtensionList._C = {
    "c:ext": BubbleSerExtension
  };
  PieSerExtensionList._C = {
    "c:ext": PieSerExtension
  };
  AreaSerExtensionList._C = {
    "c:ext": AreaSerExtension
  };
  BarSerExtension._C = {
    "c14:invertSolidFillFmt": C14InvertSolidFillFormat,
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  BarSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  BarSerExtensionList._C = {
    "c:ext": BarSerExtension
  };
  Shape._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ShapeValuesArray)
  };
  RadarSerExtensionList._C = {
    "c:ext": RadarSerExtension
  };
  ScatterSerExtensionList._C = {
    "c:ext": ScatterSerExtension
  };
  LineSerExtensionList._C = {
    "c:ext": LineSerExtension
  };
  AxisDataSourceType._C = {
    "c:multiLvlStrRef": MultiLevelStringReference,
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral,
    "c:strRef": StringReference,
    "c:strLit": StringLiteral
  };
  XValues._C = {
    "c:multiLvlStrRef": MultiLevelStringReference,
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral,
    "c:strRef": StringReference,
    "c:strLit": StringLiteral
  };
  CategoryAxisData._C = {
    "c:multiLvlStrRef": MultiLevelStringReference,
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral,
    "c:strRef": StringReference,
    "c:strLit": StringLiteral
  };
  ErrorBars._C = {
    "c:errDir": ErrorDirection,
    "c:errBarType": ErrorBarType,
    "c:errValType": ErrorBarValueType,
    "c:noEndCap": NoEndCap,
    "c:plus": Plus,
    "c:minus": Minus,
    "c:val": ErrorBarValue,
    "c:spPr": ChartShapeProperties,
    "c:extLst": ExtensionList
  };
  Trendline._C = {
    "c:name": TrendlineName,
    "c:spPr": ChartShapeProperties,
    "c:trendlineType": TrendlineType,
    "c:order": PolynomialOrder,
    "c:period": Period,
    "c:forward": Forward,
    "c:backward": Backward,
    "c:intercept": Intercept,
    "c:dispRSqr": DisplayRSquaredValue,
    "c:dispEq": DisplayEquation,
    "c:trendlineLbl": TrendlineLabel,
    "c:extLst": ExtensionList
  };
  DataPoint._C = {
    "c:idx": Index,
    "c:invertIfNegative": InvertIfNegative,
    "c:marker": Marker,
    "c:bubble3D": Bubble3D,
    "c:explosion": Explosion,
    "c:spPr": ChartShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:extLst": ExtensionList
  };
  DLblsExtensionList._C = {
    "c:ext": DLblsExtension
  };
  DLblExtensionList._C = {
    "c:ext": DLblExtension
  };
  MultiLvlStrRefExtensionList._C = {
    "c:ext": MultiLvlStrRefExtension
  };
  MultiLevelStringCache._C = {
    "c:ptCount": PointCount,
    "c:lvl": Level,
    "c:extLst": ExtensionList
  };
  StrRefExtensionList._C = {
    "c:ext": StrRefExtension
  };
  StrDataExtensionList._C = {
    "c:ext": StrDataExtension
  };
  NumRefExtensionList._C = {
    "c:ext": NumRefExtension
  };
  Pie3DChartExtensionList._C = {
    "c:ext": Pie3DChartExtension
  };
  PieChartExtensionList._C = {
    "c:ext": PieChartExtension
  };
  StockChartExtensionList._C = {
    "c:ext": StockChartExtension
  };
  UpDownBars._C = {
    "c:gapWidth": GapWidth,
    "c:upBars": UpBars,
    "c:downBars": DownBars,
    "c:extLst": ExtensionList
  };
  ValAxExtension._C = {
    "c15:numFmt": C15NumberingFormat
  };
  ValAxExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SerAxExtension._C = {
    "c15:numFmt": C15NumberingFormat
  };
  SerAxExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  DateAxExtension._C = {
    "c15:numFmt": C15NumberingFormat
  };
  DateAxExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CatAxExtension._C = {
    "c15:numFmt": C15NumberingFormat
  };
  CatAxExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  Surface3DChartExtension._C = {
    "c15:filteredSurfaceSeries": C15FilteredSurfaceSeries
  };
  Surface3DChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SurfaceChartExtension._C = {
    "c15:filteredSurfaceSeries": C15FilteredSurfaceSeries
  };
  SurfaceChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  BubbleChartExtension._C = {
    "c15:filteredBubbleSeries": C15FilteredBubbleSeries
  };
  BubbleChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  Area3DChartExtension._C = {
    "c15:filteredAreaSeries": C15FilteredAreaSeries
  };
  Area3DChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  AreaChartExtension._C = {
    "c15:filteredAreaSeries": C15FilteredAreaSeries
  };
  AreaChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  Bar3DChartExtension._C = {
    "c15:filteredBarSeries": C15FilteredBarSeries
  };
  Bar3DChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  BarChartExtension._C = {
    "c15:filteredBarSeries": C15FilteredBarSeries
  };
  BarChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  RadarChartExtension._C = {
    "c15:filteredRadarSeries": C15FilteredRadarSeries
  };
  RadarChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ScatterChartExtension._C = {
    "c15:filteredScatterSeries": C15FilteredScatterSeries
  };
  ScatterChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  Line3DChartExtension._C = {
    "c15:filteredLineSeries": C15FilteredLineSeriesExtension
  };
  Line3DChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  LineChartExtension._C = {
    "c15:filteredLineSeries": C15FilteredLineSeriesExtension
  };
  LineChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SurfaceSerExtension._C = {
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  SurfaceSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PieSerExtension._C = {
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  PieSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  AreaSerExtension._C = {
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  AreaSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  RadarSerExtension._C = {
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  RadarSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ScatterSerExtension._C = {
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  ScatterSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  LineSerExtension._C = {
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions
  };
  LineSerExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  DLblsExtension._C = {
    "c15:tx": C15ChartText,
    "c15:dlblFieldTable": C15DataLabelFieldTable,
    "c15:showDataLabelsRange": C15ShowDataLabelsRange,
    "c15:spPr": C15ShapeProperties,
    "c15:layout": C15Layout,
    "c15:showLeaderLines": C15ShowLeaderLines,
    "c15:leaderLines": C15LeaderLines
  };
  DLblsExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  DLblExtension._C = {
    "c15:dlblFieldTable": C15DataLabelFieldTable,
    "c15:xForSave": C15ExceptionForSave,
    "c15:showDataLabelsRange": C15ShowDataLabelsRange,
    "c15:spPr": C15ShapeProperties,
    "c15:layout": C15Layout
  };
  DLblExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  MultiLvlStrRefExtension._C = {
    "c15:fullRef": C15FullReference,
    "c15:levelRef": C15LevelReference,
    "c15:formulaRef": C15FormulaReference
  };
  MultiLvlStrRefExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  StrRefExtension._C = {
    "c15:fullRef": C15FullReference,
    "c15:levelRef": C15LevelReference,
    "c15:formulaRef": C15FormulaReference
  };
  StrRefExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  StrDataExtension._C = {
    "c15:autoCat": C15AutoGeneneratedCategories
  };
  StrDataExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  NumRefExtension._C = {
    "c15:fullRef": C15FullReference,
    "c15:levelRef": C15LevelReference,
    "c15:formulaRef": C15FormulaReference
  };
  NumRefExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  Pie3DChartExtension._C = {
    "c15:filteredPieSeries": C15FilteredPieSeries
  };
  Pie3DChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PieChartExtension._C = {
    "c15:filteredPieSeries": C15FilteredPieSeries
  };
  PieChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  StockChartExtension._C = {
    "c15:filteredLineSeries": C15FilteredLineSeriesExtension
  };
  StockChartExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  Thickness._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  StringPoint._C = {
    "c:v": NumericValue
  };
  StringPoint._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  HoleSize._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  FirstSliceAngle._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  DataTable._C = {
    "c:showHorzBorder": ShowHorizontalBorder,
    "c:showVertBorder": ShowVerticalBorder,
    "c:showOutline": ShowOutlineBorder,
    "c:showKeys": ShowKeys,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:extLst": ExtensionList
  };
  SeriesAxis._C = {
    "c:axId": AxisId,
    "c:scaling": Scaling,
    "c:delete": Delete,
    "c:axPos": AxisPosition,
    "c:majorGridlines": MajorGridlines,
    "c:minorGridlines": MinorGridlines,
    "c:title": Title,
    "c:numFmt": NumberingFormat,
    "c:majorTickMark": MajorTickMark,
    "c:minorTickMark": MinorTickMark,
    "c:tickLblPos": TickLabelPosition,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:crossAx": CrossingAxis,
    "c:crosses": Crosses,
    "c:crossesAt": CrossesAt,
    "c:tickLblSkip": TickLabelSkip,
    "c:tickMarkSkip": TickMarkSkip,
    "c:extLst": SerAxExtensionList
  };
  DateAxis._C = {
    "c:axId": AxisId,
    "c:scaling": Scaling,
    "c:delete": Delete,
    "c:axPos": AxisPosition,
    "c:majorGridlines": MajorGridlines,
    "c:minorGridlines": MinorGridlines,
    "c:title": Title,
    "c:numFmt": NumberingFormat,
    "c:majorTickMark": MajorTickMark,
    "c:minorTickMark": MinorTickMark,
    "c:tickLblPos": TickLabelPosition,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:crossAx": CrossingAxis,
    "c:crosses": Crosses,
    "c:crossesAt": CrossesAt,
    "c:auto": AutoLabeled,
    "c:lblOffset": LabelOffset,
    "c:baseTimeUnit": BaseTimeUnit,
    "c:majorUnit": MajorUnit,
    "c:majorTimeUnit": MajorTimeUnit,
    "c:minorUnit": MinorUnit,
    "c:minorTimeUnit": MinorTimeUnit,
    "c:extLst": DateAxExtensionList
  };
  CategoryAxis._C = {
    "c:axId": AxisId,
    "c:scaling": Scaling,
    "c:delete": Delete,
    "c:axPos": AxisPosition,
    "c:majorGridlines": MajorGridlines,
    "c:minorGridlines": MinorGridlines,
    "c:title": Title,
    "c:numFmt": NumberingFormat,
    "c:majorTickMark": MajorTickMark,
    "c:minorTickMark": MinorTickMark,
    "c:tickLblPos": TickLabelPosition,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:crossAx": CrossingAxis,
    "c:crosses": Crosses,
    "c:crossesAt": CrossesAt,
    "c:auto": AutoLabeled,
    "c:lblAlgn": LabelAlignment,
    "c:lblOffset": LabelOffset,
    "c:tickLblSkip": TickLabelSkip,
    "c:tickMarkSkip": TickMarkSkip,
    "c:noMultiLvlLbl": NoMultiLevelLabels,
    "c:extLst": CatAxExtensionList
  };
  ValueAxis._C = {
    "c:axId": AxisId,
    "c:scaling": Scaling,
    "c:delete": Delete,
    "c:axPos": AxisPosition,
    "c:majorGridlines": MajorGridlines,
    "c:minorGridlines": MinorGridlines,
    "c:title": Title,
    "c:numFmt": NumberingFormat,
    "c:majorTickMark": MajorTickMark,
    "c:minorTickMark": MinorTickMark,
    "c:tickLblPos": TickLabelPosition,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:crossAx": CrossingAxis,
    "c:crosses": Crosses,
    "c:crossesAt": CrossesAt,
    "c:crossBetween": CrossBetween,
    "c:majorUnit": MajorUnit,
    "c:minorUnit": MinorUnit,
    "c:dispUnits": DisplayUnits,
    "c:extLst": ValAxExtensionList
  };
  BubbleChart._C = {
    "c:varyColors": VaryColors,
    "c:ser": BubbleChartSeries,
    "c:dLbls": DataLabels,
    "c:bubble3D": Bubble3D,
    "c:bubbleScale": BubbleScale,
    "c:showNegBubbles": ShowNegativeBubbles,
    "c:sizeRepresents": SizeRepresents,
    "c:axId": AxisId,
    "c:extLst": BubbleChartExtensionList
  };
  Surface3DChart._C = {
    "c:wireframe": Wireframe,
    "c:varyColors": VaryColors,
    "c:ser": SurfaceChartSeries,
    "c:bandFmts": BandFormats,
    "c:axId": AxisId,
    "c:extLst": Surface3DChartExtensionList
  };
  SurfaceChart._C = {
    "c:wireframe": Wireframe,
    "c:ser": SurfaceChartSeries,
    "c:bandFmts": BandFormats,
    "c:axId": AxisId,
    "c:extLst": SurfaceChartExtensionList
  };
  OfPieChart._C = {
    "c:ofPieType": OfPieType,
    "c:varyColors": VaryColors,
    "c:ser": PieChartSeries,
    "c:dLbls": DataLabels,
    "c:gapWidth": GapWidth,
    "c:splitType": SplitType,
    "c:splitPos": SplitPosition,
    "c:custSplit": CustomSplit,
    "c:secondPieSize": SecondPieSize,
    "c:serLines": SeriesLines,
    "c:extLst": ExtensionList
  };
  Bar3DChart._C = {
    "c:barDir": BarDirection,
    "c:grouping": BarGrouping,
    "c:varyColors": VaryColors,
    "c:ser": BarChartSeries,
    "c:dLbls": DataLabels,
    "c:gapWidth": GapWidth,
    "c:gapDepth": GapDepth,
    "c:shape": Shape,
    "c:axId": AxisId,
    "c:extLst": Bar3DChartExtensionList
  };
  BarChart._C = {
    "c:barDir": BarDirection,
    "c:grouping": BarGrouping,
    "c:varyColors": VaryColors,
    "c:ser": BarChartSeries,
    "c:dLbls": DataLabels,
    "c:gapWidth": GapWidth,
    "c:overlap": Overlap,
    "c:serLines": SeriesLines,
    "c:axId": AxisId,
    "c:extLst": BarChartExtensionList
  };
  DoughnutChart._C = {
    "c:varyColors": VaryColors,
    "c:ser": PieChartSeries,
    "c:dLbls": DataLabels,
    "c:firstSliceAng": FirstSliceAngle,
    "c:holeSize": HoleSize,
    "c:extLst": ExtensionList
  };
  Pie3DChart._C = {
    "c:varyColors": VaryColors,
    "c:ser": PieChartSeries,
    "c:dLbls": DataLabels,
    "c:extLst": Pie3DChartExtensionList
  };
  PieChart._C = {
    "c:varyColors": VaryColors,
    "c:ser": PieChartSeries,
    "c:dLbls": DataLabels,
    "c:firstSliceAng": FirstSliceAngle,
    "c:extLst": PieChartExtensionList
  };
  ScatterChart._C = {
    "c:scatterStyle": ScatterStyle,
    "c:varyColors": VaryColors,
    "c:ser": ScatterChartSeries,
    "c:dLbls": DataLabels,
    "c:axId": AxisId,
    "c:extLst": ScatterChartExtensionList
  };
  RadarChart._C = {
    "c:radarStyle": RadarStyle,
    "c:varyColors": VaryColors,
    "c:ser": RadarChartSeries,
    "c:dLbls": DataLabels,
    "c:axId": AxisId,
    "c:extLst": RadarChartExtensionList
  };
  StockChart._C = {
    "c:ser": LineChartSeries,
    "c:dLbls": DataLabels,
    "c:dropLines": DropLines,
    "c:hiLowLines": HighLowLines,
    "c:upDownBars": UpDownBars,
    "c:axId": AxisId,
    "c:extLst": StockChartExtensionList
  };
  Line3DChart._C = {
    "c:grouping": Grouping,
    "c:varyColors": VaryColors,
    "c:ser": LineChartSeries,
    "c:dLbls": DataLabels,
    "c:dropLines": DropLines,
    "c:gapDepth": GapDepth,
    "c:axId": AxisId,
    "c:extLst": Line3DChartExtensionList
  };
  LineChart._C = {
    "c:grouping": Grouping,
    "c:varyColors": VaryColors,
    "c:ser": LineChartSeries,
    "c:dLbls": DataLabels,
    "c:dropLines": DropLines,
    "c:hiLowLines": HighLowLines,
    "c:upDownBars": UpDownBars,
    "c:marker": ShowMarker,
    "c:smooth": Smooth,
    "c:axId": AxisId,
    "c:extLst": LineChartExtensionList
  };
  Area3DChart._C = {
    "c:grouping": Grouping,
    "c:varyColors": VaryColors,
    "c:ser": AreaChartSeries,
    "c:dLbls": DataLabels,
    "c:dropLines": DropLines,
    "c:gapDepth": GapDepth,
    "c:axId": AxisId,
    "c:extLst": Area3DChartExtensionList
  };
  AreaChart._C = {
    "c:grouping": Grouping,
    "c:varyColors": VaryColors,
    "c:ser": AreaChartSeries,
    "c:dLbls": DataLabels,
    "c:dropLines": DropLines,
    "c:axId": AxisId,
    "c:extLst": AreaChartExtensionList
  };
  DataLabel._C = {
    "c:idx": Index,
    "c:delete": Delete,
    "c:layout": Layout,
    "c:tx": ChartText,
    "c:numFmt": NumberingFormat,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:dLblPos": DataLabelPosition,
    "c:showLegendKey": ShowLegendKey,
    "c:showVal": ShowValue,
    "c:showCatName": ShowCategoryName,
    "c:showSerName": ShowSeriesName,
    "c:showPercent": ShowPercent,
    "c:showBubbleSize": ShowBubbleSize,
    "c:separator": Separator,
    "c:extLst": DLblExtensionList
  };
  ShapeProperties._C = {
    "a:xfrm": ATransform2D,
    "a:custGeom": ACustomGeometry,
    "a:prstGeom": APresetGeometry,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:extLst": AShapePropertiesExtensionList
  };
  ShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  PageSetup._D = {
    ":paperSize": new OxmlAttr(":paperSize", OxmlType.UInt32Value),
    ":firstPageNumber": new OxmlAttr(":firstPageNumber", OxmlType.Int32Value),
    ":orientation": new OxmlAttr(":orientation", OxmlType.EnumValue, PageSetupOrientationValuesArray),
    ":blackAndWhite": new OxmlAttr(":blackAndWhite", OxmlType.BooleanValue),
    ":draft": new OxmlAttr(":draft", OxmlType.BooleanValue),
    ":useFirstPageNumber": new OxmlAttr(":useFirstPageNumber", OxmlType.BooleanValue),
    ":horizontalDpi": new OxmlAttr(":horizontalDpi", OxmlType.Int32Value),
    ":verticalDpi": new OxmlAttr(":verticalDpi", OxmlType.Int32Value),
    ":copies": new OxmlAttr(":copies", OxmlType.UInt32Value)
  };
  PageMargins._D = {
    ":l": new OxmlAttr(":l", OxmlType.DoubleValue),
    ":r": new OxmlAttr(":r", OxmlType.DoubleValue),
    ":t": new OxmlAttr(":t", OxmlType.DoubleValue),
    ":b": new OxmlAttr(":b", OxmlType.DoubleValue),
    ":header": new OxmlAttr(":header", OxmlType.DoubleValue),
    ":footer": new OxmlAttr(":footer", OxmlType.DoubleValue)
  };
  HeaderFooter._C = {
    "c:oddHeader": OddHeader,
    "c:oddFooter": OddFooter,
    "c:evenHeader": EvenHeader,
    "c:evenFooter": EvenFooter,
    "c:firstHeader": FirstHeader,
    "c:firstFooter": FirstFooter
  };
  HeaderFooter._D = {
    ":alignWithMargins": new OxmlAttr(":alignWithMargins", OxmlType.BooleanValue),
    ":differentOddEven": new OxmlAttr(":differentOddEven", OxmlType.BooleanValue),
    ":differentFirst": new OxmlAttr(":differentFirst", OxmlType.BooleanValue)
  };
  LegendEntry._C = {
    "c:idx": Index,
    "c:delete": Delete,
    "c:txPr": TextProperties,
    "c:extLst": ExtensionList
  };
  LegendPosition._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, LegendPositionValuesArray)
  };
  PivotFormat._C = {
    "c:idx": Index,
    "c:spPr": ShapeProperties,
    "c:marker": Marker,
    "c:dLbl": DataLabel,
    "c:extLst": ExtensionList
  };
  Orientation._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, OrientationValuesArray)
  };
  LogBase._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  DisplayUnitsLabel._C = {
    "c:layout": Layout,
    "c:tx": ChartText,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties
  };
  BuiltInUnit._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, BuiltInUnitValuesArray)
  };
  PictureStackUnit._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  PictureFormat._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, PictureFormatValuesArray)
  };
  BandFormat._C = {
    "c:idx": Index,
    "c:spPr": ChartShapeProperties
  };
  SecondPieSize._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  CustomSplit._C = {
    "c:secondPiePt": SecondPiePoint
  };
  SplitType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, SplitValuesArray)
  };
  OfPieType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, OfPieValuesArray)
  };
  UpDownBarType._C = {
    "c:spPr": ChartShapeProperties
  };
  DownBars._C = {
    "c:spPr": ChartShapeProperties
  };
  UpBars._C = {
    "c:spPr": ChartShapeProperties
  };
  GapAmountType._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  NumberDataSourceType._C = {
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral
  };
  BubbleSize._C = {
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral
  };
  YValues._C = {
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral
  };
  Values._C = {
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral
  };
  Minus._C = {
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral
  };
  Plus._C = {
    "c:numRef": NumberReference,
    "c:numLit": NumberLiteral
  };
  ErrorBarValueType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ErrorValuesArray)
  };
  ErrorBarType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ErrorBarValuesArray)
  };
  ErrorDirection._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ErrorBarDirectionValuesArray)
  };
  TrendlineLabel._C = {
    "c:layout": Layout,
    "c:tx": ChartText,
    "c:numFmt": NumberingFormat,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:extLst": ExtensionList
  };
  Period._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  PolynomialOrder._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  TrendlineType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, TrendlineValuesArray)
  };
  PictureOptions._C = {
    "c:applyToFront": ApplyToFront,
    "c:applyToSides": ApplyToSides,
    "c:applyToEnd": ApplyToEnd,
    "c:pictureFormat": PictureFormat,
    "c:pictureStackUnit": PictureStackUnit
  };
  Marker._C = {
    "c:symbol": Symbol,
    "c:size": Size,
    "c:spPr": ChartShapeProperties,
    "c:extLst": ExtensionList
  };
  Size._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  Symbol._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, MarkerStyleValuesArray)
  };
  Perspective._D = {
    ":val": new OxmlAttr(":val", OxmlType.ByteValue)
  };
  DepthPercent._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  RotateY._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  HeightPercent._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt16Value)
  };
  RotateX._D = {
    ":val": new OxmlAttr(":val", OxmlType.SByteValue)
  };
  ManualLayout._C = {
    "c:layoutTarget": LayoutTarget,
    "c:xMode": LeftMode,
    "c:yMode": TopMode,
    "c:wMode": WidthMode,
    "c:hMode": HeightMode,
    "c:x": Left,
    "c:y": Top,
    "c:w": Width,
    "c:h": Height,
    "c:extLst": ExtensionList
  };
  LayoutModeType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, LayoutModeValuesArray)
  };
  LayoutTarget._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, LayoutTargetValuesArray)
  };
  StringDataType._C = {
    "c:ptCount": PointCount,
    "c:pt": StringPoint,
    "c:extLst": StrDataExtensionList
  };
  StringCache._C = {
    "c:ptCount": PointCount,
    "c:pt": StringPoint,
    "c:extLst": StrDataExtensionList
  };
  StringLiteral._C = {
    "c:ptCount": PointCount,
    "c:pt": StringPoint,
    "c:extLst": StrDataExtensionList
  };
  StringReference._C = {
    "c:f": Formula,
    "c:strCache": StringCache,
    "c:extLst": StrRefExtensionList
  };
  MultiLevelStringReference._C = {
    "c:f": Formula,
    "c:multiLvlStrCache": MultiLevelStringCache,
    "c:extLst": MultiLvlStrRefExtensionList
  };
  Level._C = {
    "c:pt": StringPoint
  };
  NumberDataType._C = {
    "c:formatCode": FormatCode,
    "c:ptCount": PointCount,
    "c:pt": NumericPoint,
    "c:extLst": ExtensionList
  };
  NumberingCache._C = {
    "c:formatCode": FormatCode,
    "c:ptCount": PointCount,
    "c:pt": NumericPoint,
    "c:extLst": ExtensionList
  };
  NumberLiteral._C = {
    "c:formatCode": FormatCode,
    "c:ptCount": PointCount,
    "c:pt": NumericPoint,
    "c:extLst": ExtensionList
  };
  NumberReference._C = {
    "c:f": Formula,
    "c:numCache": NumberingCache,
    "c:extLst": NumRefExtensionList
  };
  ExtensionList._C = {
    "c:ext": Extension
  };
  NumericPoint._C = {
    "c:v": NumericValue
  };
  NumericPoint._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value),
    ":formatCode": new OxmlAttr(":formatCode", OxmlType.StringValue)
  };
  Extension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  RelationshipIdType._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  UserShapes._C = {
    "cdr:relSizeAnchor": CdrRelativeAnchorSize,
    "cdr:absSizeAnchor": CdrAbsoluteAnchorSize
  };
  ChartSpace._C = {
    "c:date1904": Date1904,
    "c:lang": EditingLanguage,
    "c:roundedCorners": RoundedCorners,
    "c14:style": C14Style,
    "c:style": Style,
    "c:clrMapOvr": ColorMapOverride,
    "c:pivotSource": PivotSource,
    "c:protection": Protection,
    "c:chart": Chart,
    "c:spPr": ShapeProperties,
    "c:txPr": TextProperties,
    "c:externalData": ExternalData,
    "c:printSettings": PrintSettings,
    "c:userShapes": UserShapesReference,
    "c:extLst": ChartSpaceExtensionList
  };
  DoubleType._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  Crosses._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, CrossesValuesArray)
  };
  TickLabelPosition._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, TickLabelPositionValuesArray)
  };
  TickMarkType._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, TickMarkValuesArray)
  };
  Title._C = {
    "c:tx": ChartText,
    "c:layout": Layout,
    "c:overlay": Overlay,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:extLst": ExtensionList
  };
  AxisPosition._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, AxisPositionValuesArray)
  };
  Scaling._C = {
    "c:logBase": LogBase,
    "c:orientation": Orientation,
    "c:max": MaxAxisValue,
    "c:min": MinAxisValue,
    "c:extLst": ExtensionList
  };
  BandFormats._C = {
    "c:bandFmt": BandFormat
  };
  SurfaceChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:cat": CategoryAxisData,
    "c:val": Values,
    "c:bubble3D": Bubble3D,
    "c:extLst": SurfaceSerExtensionList
  };
  PieChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:explosion": Explosion,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:cat": CategoryAxisData,
    "c:val": Values,
    "c:extLst": PieSerExtensionList
  };
  AreaChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:pictureOptions": PictureOptions,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:trendline": Trendline,
    "c:errBars": ErrorBars,
    "c:cat": CategoryAxisData,
    "c:val": Values,
    "c:extLst": AreaSerExtensionList
  };
  BarChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:invertIfNegative": InvertIfNegative,
    "c:pictureOptions": PictureOptions,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:trendline": Trendline,
    "c:errBars": ErrorBars,
    "c:cat": CategoryAxisData,
    "c:val": Values,
    "c:shape": Shape,
    "c:extLst": BarSerExtensionList
  };
  BarGrouping._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, BarGroupingValuesArray)
  };
  BarDirection._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, BarDirectionValuesArray)
  };
  DataLabels._C = {
    "c:dLbl": DataLabel,
    "c:delete": Delete,
    "c:numFmt": NumberingFormat,
    "c:spPr": ChartShapeProperties,
    "c:txPr": TextProperties,
    "c:dLblPos": DataLabelPosition,
    "c:showLegendKey": ShowLegendKey,
    "c:showVal": ShowValue,
    "c:showCatName": ShowCategoryName,
    "c:showSerName": ShowSeriesName,
    "c:showPercent": ShowPercent,
    "c:showBubbleSize": ShowBubbleSize,
    "c:separator": Separator,
    "c:showLeaderLines": ShowLeaderLines,
    "c:leaderLines": LeaderLines,
    "c:extLst": DLblsExtensionList
  };
  LineChartSeries._C = {
    "c:idx": Index,
    "c:order": Order,
    "c:tx": SeriesText,
    "c:spPr": ChartShapeProperties,
    "c:marker": Marker,
    "c:pictureOptions": PictureOptions,
    "c:dPt": DataPoint,
    "c:dLbls": DataLabels,
    "c:trendline": Trendline,
    "c:errBars": ErrorBars,
    "c:cat": CategoryAxisData,
    "c:val": Values,
    "c:smooth": Smooth,
    "c:extLst": LineSerExtensionList
  };
  Grouping._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, GroupingValuesArray)
  };
  SeriesText._C = {
    "c:strRef": StringReference,
    "c:v": NumericValue
  };
  UnsignedIntegerType._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  ChartLinesType._C = {
    "c:spPr": ChartShapeProperties
  };
  HighLowLines._C = {
    "c:spPr": ChartShapeProperties
  };
  SeriesLines._C = {
    "c:spPr": ChartShapeProperties
  };
  MinorGridlines._C = {
    "c:spPr": ChartShapeProperties
  };
  MajorGridlines._C = {
    "c:spPr": ChartShapeProperties
  };
  DropLines._C = {
    "c:spPr": ChartShapeProperties
  };
  LeaderLines._C = {
    "c:spPr": ChartShapeProperties
  };
  ChartText._C = {
    "c:strRef": StringReference,
    "c:rich": RichText,
    "c:strLit": StringLiteral
  };
  Layout._C = {
    "c:manualLayout": ManualLayout,
    "c:extLst": ExtensionList
  };
  BooleanType._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  DataLabelPosition._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, DataLabelPositionValuesArray)
  };
  TextBodyType._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  RichText._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  TextProperties._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  ChartShapeProperties._C = {
    "a:xfrm": ATransform2D,
    "a:custGeom": ACustomGeometry,
    "a:prstGeom": APresetGeometry,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:extLst": AExtensionList
  };
  ChartShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  NumberingFormat._D = {
    ":formatCode": new OxmlAttr(":formatCode", OxmlType.StringValue),
    ":sourceLinked": new OxmlAttr(":sourceLinked", OxmlType.BooleanValue)
  };
  return {
    prefix: "c",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/chart"
  };
}
export {
  ApplyToEnd,
  ApplyToFront,
  ApplyToSides,
  Area3DChart,
  Area3DChartExtension,
  Area3DChartExtensionList,
  AreaChart,
  AreaChartExtension,
  AreaChartExtensionList,
  AreaChartSeries,
  AreaSerExtension,
  AreaSerExtensionList,
  AutoLabeled,
  AutoTitleDeleted,
  AutoUpdate,
  AxisDataSourceType,
  AxisId,
  AxisPosition,
  AxisPositionValues,
  AxisPositionValuesArray,
  AxisUnitType,
  BackWall,
  Backward,
  BandFormat,
  BandFormats,
  Bar3DChart,
  Bar3DChartExtension,
  Bar3DChartExtensionList,
  BarChart,
  BarChartExtension,
  BarChartExtensionList,
  BarChartSeries,
  BarDirection,
  BarDirectionValues,
  BarDirectionValuesArray,
  BarGrouping,
  BarGroupingValues,
  BarGroupingValuesArray,
  BarSerExtension,
  BarSerExtensionList,
  BaseTimeUnit,
  BooleanType,
  Bubble3D,
  BubbleChart,
  BubbleChartExtension,
  BubbleChartExtensionList,
  BubbleChartSeries,
  BubbleScale,
  BubbleSerExtension,
  BubbleSerExtensionList,
  BubbleSize,
  BuiltInUnit,
  BuiltInUnitValues,
  BuiltInUnitValuesArray,
  CatAxExtension,
  CatAxExtensionList,
  CategoryAxis,
  CategoryAxisData,
  Chart,
  ChartExtensionList,
  ChartLinesType,
  ChartObject,
  ChartReference,
  ChartShapeProperties,
  ChartSpace,
  ChartSpaceExtension,
  ChartSpaceExtensionList,
  ChartText,
  ColorMapOverride,
  CrossBetween,
  CrossBetweenValues,
  CrossBetweenValuesArray,
  Crosses,
  CrossesAt,
  CrossesValues,
  CrossesValuesArray,
  CrossingAxis,
  CustomDisplayUnit,
  CustomSplit,
  DLblExtension,
  DLblExtensionList,
  DLblsExtension,
  DLblsExtensionList,
  Data,
  DataDisplayOptions16,
  DataLabel,
  DataLabelPosition,
  DataLabelPositionValues,
  DataLabelPositionValuesArray,
  DataLabels,
  DataPoint,
  DataTable,
  Date1904,
  DateAxExtension,
  DateAxExtensionList,
  DateAxis,
  Delete,
  DepthPercent,
  DisplayBlanksAs,
  DisplayBlanksAsValues,
  DisplayBlanksAsValuesArray,
  DisplayEquation,
  DisplayRSquaredValue,
  DisplayUnits,
  DisplayUnitsLabel,
  DoubleType,
  DoughnutChart,
  DownBars,
  DropLines,
  EditingLanguage,
  ErrorBarDirectionValues,
  ErrorBarDirectionValuesArray,
  ErrorBarType,
  ErrorBarValue,
  ErrorBarValueType,
  ErrorBarValues,
  ErrorBarValuesArray,
  ErrorBars,
  ErrorDirection,
  ErrorValues,
  ErrorValuesArray,
  EvenFooter,
  EvenHeader,
  Explosion,
  Extension,
  ExtensionList,
  ExternalData,
  FirstFooter,
  FirstHeader,
  FirstSliceAngle,
  Floor,
  FormatCode,
  FormatId,
  Formatting,
  Formula,
  Forward,
  GapAmountType,
  GapDepth,
  GapWidth,
  Grouping,
  GroupingValues,
  GroupingValuesArray,
  HeaderFooter,
  Height,
  HeightMode,
  HeightPercent,
  HighLowLines,
  HoleSize,
  Index,
  Intercept,
  InvertIfNegative,
  LabelAlignment,
  LabelAlignmentValues,
  LabelAlignmentValuesArray,
  LabelOffset,
  Layout,
  LayoutModeType,
  LayoutModeValues,
  LayoutModeValuesArray,
  LayoutTarget,
  LayoutTargetValues,
  LayoutTargetValuesArray,
  LeaderLines,
  Left,
  LeftMode,
  LegacyDrawingHeaderFooter,
  Legend,
  LegendEntry,
  LegendPosition,
  LegendPositionValues,
  LegendPositionValuesArray,
  Level,
  Line3DChart,
  Line3DChartExtension,
  Line3DChartExtensionList,
  LineChart,
  LineChartExtension,
  LineChartExtensionList,
  LineChartSeries,
  LineSerExtension,
  LineSerExtensionList,
  LogBase,
  MajorGridlines,
  MajorTickMark,
  MajorTimeUnit,
  MajorUnit,
  ManualLayout,
  Marker,
  MarkerStyleValues,
  MarkerStyleValuesArray,
  MaxAxisValue,
  MinAxisValue,
  MinorGridlines,
  MinorTickMark,
  MinorTimeUnit,
  MinorUnit,
  Minus,
  MultiLevelStringCache,
  MultiLevelStringReference,
  MultiLvlStrRefExtension,
  MultiLvlStrRefExtensionList,
  NoEndCap,
  NoMultiLevelLabels,
  NumRefExtension,
  NumRefExtensionList,
  NumberDataSourceType,
  NumberDataType,
  NumberLiteral,
  NumberReference,
  NumberingCache,
  NumberingFormat,
  NumericPoint,
  NumericValue,
  OddFooter,
  OddHeader,
  OfPieChart,
  OfPieType,
  OfPieValues,
  OfPieValuesArray,
  Order,
  Orientation,
  OrientationValues,
  OrientationValuesArray,
  Overlap,
  Overlay,
  PageMargins,
  PageSetup,
  PageSetupOrientationValues,
  PageSetupOrientationValuesArray,
  Period,
  Perspective,
  PictureFormat,
  PictureFormatValues,
  PictureFormatValuesArray,
  PictureOptions,
  PictureStackUnit,
  Pie3DChart,
  Pie3DChartExtension,
  Pie3DChartExtensionList,
  PieChart,
  PieChartExtension,
  PieChartExtensionList,
  PieChartSeries,
  PieSerExtension,
  PieSerExtensionList,
  PivotFormat,
  PivotFormats,
  PivotSource,
  PivotTableName,
  PlotArea,
  PlotVisibleOnly,
  Plus,
  PointCount,
  PolynomialOrder,
  PrintSettings,
  Protection,
  RadarChart,
  RadarChartExtension,
  RadarChartExtensionList,
  RadarChartSeries,
  RadarSerExtension,
  RadarSerExtensionList,
  RadarStyle,
  RadarStyleValues,
  RadarStyleValuesArray,
  RelationshipIdType,
  RichText,
  RightAngleAxes,
  RotateX,
  RotateY,
  RoundedCorners,
  Scaling,
  ScatterChart,
  ScatterChartExtension,
  ScatterChartExtensionList,
  ScatterChartSeries,
  ScatterSerExtension,
  ScatterSerExtensionList,
  ScatterStyle,
  ScatterStyleValues,
  ScatterStyleValuesArray,
  SecondPiePoint,
  SecondPieSize,
  Selection,
  Separator,
  SerAxExtension,
  SerAxExtensionList,
  SeriesAxis,
  SeriesLines,
  SeriesText,
  Shape,
  ShapeProperties,
  ShapeValues,
  ShapeValuesArray,
  ShowBubbleSize,
  ShowCategoryName,
  ShowDataLabelsOverMaximum,
  ShowHorizontalBorder,
  ShowKeys,
  ShowLeaderLines,
  ShowLegendKey,
  ShowMarker,
  ShowNegativeBubbles,
  ShowOutlineBorder,
  ShowPercent,
  ShowSeriesName,
  ShowValue,
  ShowVerticalBorder,
  SideWall,
  Size,
  SizeRepresents,
  SizeRepresentsValues,
  SizeRepresentsValuesArray,
  SkipType,
  Smooth,
  SplitPosition,
  SplitType,
  SplitValues,
  SplitValuesArray,
  StockChart,
  StockChartExtension,
  StockChartExtensionList,
  StrDataExtension,
  StrDataExtensionList,
  StrRefExtension,
  StrRefExtensionList,
  StringCache,
  StringDataType,
  StringLiteral,
  StringPoint,
  StringReference,
  Style,
  Surface3DChart,
  Surface3DChartExtension,
  Surface3DChartExtensionList,
  SurfaceChart,
  SurfaceChartExtension,
  SurfaceChartExtensionList,
  SurfaceChartSeries,
  SurfaceSerExtension,
  SurfaceSerExtensionList,
  SurfaceType,
  Symbol,
  TextBodyType,
  TextProperties,
  Thickness,
  TickLabelPosition,
  TickLabelPositionValues,
  TickLabelPositionValuesArray,
  TickLabelSkip,
  TickMarkSkip,
  TickMarkType,
  TickMarkValues,
  TickMarkValuesArray,
  TimeUnitType,
  TimeUnitValues,
  TimeUnitValuesArray,
  Title,
  Top,
  TopMode,
  Trendline,
  TrendlineLabel,
  TrendlineName,
  TrendlineType,
  TrendlineValues,
  TrendlineValuesArray,
  UnsignedIntegerType,
  UpBars,
  UpDownBarType,
  UpDownBars,
  UserInterface,
  UserShapes,
  UserShapesReference,
  ValAxExtension,
  ValAxExtensionList,
  ValueAxis,
  Values,
  VaryColors,
  View3D,
  Width,
  WidthMode,
  Wireframe,
  XValues,
  YValues,
  initDrawingChartsNamespace
};
