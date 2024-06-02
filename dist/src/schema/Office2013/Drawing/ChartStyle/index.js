import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { TextVerticalOverflowValuesArray } from "../../../Drawing";
import { TextHorizontalOverflowValuesArray } from "../../../Drawing";
import { TextVerticalValuesArray } from "../../../Drawing";
import { TextWrappingValuesArray } from "../../../Drawing";
import { TextAnchoringTypeValuesArray } from "../../../Drawing";
import { TextUnderlineValuesArray } from "../../../Drawing";
import { TextStrikeValuesArray } from "../../../Drawing";
import { TextCapsValuesArray } from "../../../Drawing";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { FontCollectionIndexValuesArray } from "../../../Drawing";
import { PresetTextWrap as APresetTextWrap } from "../../../Drawing";
import { NoAutoFit as ANoAutoFit } from "../../../Drawing";
import { NormalAutoFit as ANormalAutoFit } from "../../../Drawing";
import { ShapeAutoFit as AShapeAutoFit } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { Shape3DType as AShape3DType } from "../../../Drawing";
import { FlatText as AFlatText } from "../../../Drawing";
import { ExtensionList as AExtensionList } from "../../../Drawing";
import { Outline as AOutline } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { Highlight as AHighlight } from "../../../Drawing";
import { UnderlineFollowsText as AUnderlineFollowsText } from "../../../Drawing";
import { Underline as AUnderline } from "../../../Drawing";
import { UnderlineFillText as AUnderlineFillText } from "../../../Drawing";
import { UnderlineFill as AUnderlineFill } from "../../../Drawing";
import { LatinFont as ALatinFont } from "../../../Drawing";
import { EastAsianFont as AEastAsianFont } from "../../../Drawing";
import { ComplexScriptFont as AComplexScriptFont } from "../../../Drawing";
import { SymbolFont as ASymbolFont } from "../../../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../../Drawing";
import { HyperlinkOnMouseOver as AHyperlinkOnMouseOver } from "../../../Drawing";
import { RightToLeft as ARightToLeft } from "../../../Drawing";
import { Transform2D as ATransform2D } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../../Drawing";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../../Drawing";
import { HslColor as AHslColor } from "../../../Drawing";
import { SystemColor as ASystemColor } from "../../../Drawing";
import { SchemeColor as ASchemeColor } from "../../../Drawing";
import { PresetColor as APresetColor } from "../../../Drawing";
import { Tint as ATint } from "../../../Drawing";
import { Shade as AShade } from "../../../Drawing";
import { Complement as AComplement } from "../../../Drawing";
import { Inverse as AInverse } from "../../../Drawing";
import { Gray as AGray } from "../../../Drawing";
import { Alpha as AAlpha } from "../../../Drawing";
import { AlphaOffset as AAlphaOffset } from "../../../Drawing";
import { AlphaModulation as AAlphaModulation } from "../../../Drawing";
import { Hue as AHue } from "../../../Drawing";
import { HueOffset as AHueOffset } from "../../../Drawing";
import { HueModulation as AHueModulation } from "../../../Drawing";
import { Saturation as ASaturation } from "../../../Drawing";
import { SaturationOffset as ASaturationOffset } from "../../../Drawing";
import { SaturationModulation as ASaturationModulation } from "../../../Drawing";
import { Luminance as ALuminance } from "../../../Drawing";
import { LuminanceOffset as ALuminanceOffset } from "../../../Drawing";
import { LuminanceModulation as ALuminanceModulation } from "../../../Drawing";
import { Red as ARed } from "../../../Drawing";
import { RedOffset as ARedOffset } from "../../../Drawing";
import { RedModulation as ARedModulation } from "../../../Drawing";
import { Green as AGreen } from "../../../Drawing";
import { GreenOffset as AGreenOffset } from "../../../Drawing";
import { GreenModulation as AGreenModulation } from "../../../Drawing";
import { Blue as ABlue } from "../../../Drawing";
import { BlueOffset as ABlueOffset } from "../../../Drawing";
import { BlueModulation as ABlueModulation } from "../../../Drawing";
import { Gamma as AGamma } from "../../../Drawing";
import { InverseGamma as AInverseGamma } from "../../../Drawing";
import { Extension as AExtension } from "../../../Drawing";
var ColorStyleMethodEnum = /* @__PURE__ */ ((ColorStyleMethodEnum2) => {
  ColorStyleMethodEnum2["Cycle"] = "cycle";
  ColorStyleMethodEnum2["WithinLinear"] = "withinLinear";
  ColorStyleMethodEnum2["AcrossLinear"] = "acrossLinear";
  ColorStyleMethodEnum2["WithinLinearReversed"] = "withinLinearReversed";
  ColorStyleMethodEnum2["AcrossLinearReversed"] = "acrossLinearReversed";
  return ColorStyleMethodEnum2;
})(ColorStyleMethodEnum || {});
const ColorStyleMethodEnumArray = [
  "cycle" /* Cycle */,
  "withinLinear" /* WithinLinear */,
  "acrossLinear" /* AcrossLinear */,
  "withinLinearReversed" /* WithinLinearReversed */,
  "acrossLinearReversed" /* AcrossLinearReversed */
];
var StyleReferenceModifierEnum = /* @__PURE__ */ ((StyleReferenceModifierEnum2) => {
  StyleReferenceModifierEnum2["IgnoreCSTransforms"] = "ignoreCSTransforms";
  return StyleReferenceModifierEnum2;
})(StyleReferenceModifierEnum || {});
const StyleReferenceModifierEnumArray = [
  "ignoreCSTransforms" /* IgnoreCSTransforms */
];
var StyleColorEnum = /* @__PURE__ */ ((StyleColorEnum2) => {
  StyleColorEnum2["Automatic"] = "auto";
  return StyleColorEnum2;
})(StyleColorEnum || {});
const StyleColorEnumArray = [
  "auto" /* Automatic */
];
var StyleEntryModifierEnum = /* @__PURE__ */ ((StyleEntryModifierEnum2) => {
  StyleEntryModifierEnum2["AllowNoFillOverride"] = "allowNoFillOverride";
  StyleEntryModifierEnum2["AllowNoLineOverride"] = "allowNoLineOverride";
  return StyleEntryModifierEnum2;
})(StyleEntryModifierEnum || {});
const StyleEntryModifierEnumArray = [
  "allowNoFillOverride" /* AllowNoFillOverride */,
  "allowNoLineOverride" /* AllowNoLineOverride */
];
var MarkerStyle = /* @__PURE__ */ ((MarkerStyle2) => {
  MarkerStyle2["Circle"] = "circle";
  MarkerStyle2["Dash"] = "dash";
  MarkerStyle2["Diamond"] = "diamond";
  MarkerStyle2["Dot"] = "dot";
  MarkerStyle2["Plus"] = "plus";
  MarkerStyle2["Square"] = "square";
  MarkerStyle2["Star"] = "star";
  MarkerStyle2["Triangle"] = "triangle";
  MarkerStyle2["X"] = "x";
  return MarkerStyle2;
})(MarkerStyle || {});
const MarkerStyleArray = [
  "circle" /* Circle */,
  "dash" /* Dash */,
  "diamond" /* Diamond */,
  "dot" /* Dot */,
  "plus" /* Plus */,
  "square" /* Square */,
  "star" /* Star */,
  "triangle" /* Triangle */,
  "x" /* X */
];
var Boolean = /* @__PURE__ */ ((Boolean2) => {
  Boolean2["False"] = "false";
  Boolean2["True"] = "true";
  Boolean2["Ninch"] = "ninch";
  return Boolean2;
})(Boolean || {});
const BooleanArray = [
  "false" /* False */,
  "true" /* True */,
  "ninch" /* Ninch */
];
var TickMarkNinch = /* @__PURE__ */ ((TickMarkNinch2) => {
  TickMarkNinch2["Cross"] = "cross";
  TickMarkNinch2["Inside"] = "inside";
  TickMarkNinch2["None"] = "none";
  TickMarkNinch2["Outside"] = "outside";
  TickMarkNinch2["Ninch"] = "ninch";
  return TickMarkNinch2;
})(TickMarkNinch || {});
const TickMarkNinchArray = [
  "cross" /* Cross */,
  "inside" /* Inside */,
  "none" /* None */,
  "outside" /* Outside */,
  "ninch" /* Ninch */
];
var TickLabelPositionNinch = /* @__PURE__ */ ((TickLabelPositionNinch2) => {
  TickLabelPositionNinch2["High"] = "high";
  TickLabelPositionNinch2["Low"] = "low";
  TickLabelPositionNinch2["NextToAxis"] = "nextToAxis";
  TickLabelPositionNinch2["None"] = "none";
  TickLabelPositionNinch2["Ninch"] = "ninch";
  return TickLabelPositionNinch2;
})(TickLabelPositionNinch || {});
const TickLabelPositionNinchArray = [
  "high" /* High */,
  "low" /* Low */,
  "nextToAxis" /* NextToAxis */,
  "none" /* None */,
  "ninch" /* Ninch */
];
var DataLabelsPosition = /* @__PURE__ */ ((DataLabelsPosition2) => {
  DataLabelsPosition2["Center"] = "center";
  DataLabelsPosition2["InsideEnd"] = "insideEnd";
  DataLabelsPosition2["InsideBase"] = "insideBase";
  DataLabelsPosition2["OutsideEnd"] = "outsideEnd";
  DataLabelsPosition2["Ninch"] = "ninch";
  return DataLabelsPosition2;
})(DataLabelsPosition || {});
const DataLabelsPositionArray = [
  "center" /* Center */,
  "insideEnd" /* InsideEnd */,
  "insideBase" /* InsideBase */,
  "outsideEnd" /* OutsideEnd */,
  "ninch" /* Ninch */
];
var LegendPosition = /* @__PURE__ */ ((LegendPosition2) => {
  LegendPosition2["Right"] = "right";
  LegendPosition2["Top"] = "top";
  LegendPosition2["Left"] = "left";
  LegendPosition2["Bottom"] = "bottom";
  LegendPosition2["Ninch"] = "ninch";
  return LegendPosition2;
})(LegendPosition || {});
const LegendPositionArray = [
  "right" /* Right */,
  "top" /* Top */,
  "left" /* Left */,
  "bottom" /* Bottom */,
  "ninch" /* Ninch */
];
var TitlePosition = /* @__PURE__ */ ((TitlePosition2) => {
  TitlePosition2["Above"] = "above";
  TitlePosition2["Overlay"] = "overlay";
  TitlePosition2["Off"] = "off";
  TitlePosition2["Ninch"] = "ninch";
  return TitlePosition2;
})(TitlePosition || {});
const TitlePositionArray = [
  "above" /* Above */,
  "overlay" /* Overlay */,
  "off" /* Off */,
  "ninch" /* Ninch */
];
class MarkerLayoutProperties extends OxmlLeafElement {
  static _Q = "cs:dataPointMarkerLayout";
  static _A = [":symbol", ":size"];
  /** symbol. Serialized as `:symbol` */
  get symbol() {
    return this._g(":symbol");
  }
  set symbol(v) {
    this._s(":symbol", v);
  }
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
}
class StyleEntry extends OxmlCompositeElement {
  static _A = [":mods"];
  /** mods. Serialized as `:mods` */
  get modifiers() {
    return this._g(":mods");
  }
  set modifiers(v) {
    this._s(":mods", v);
  }
  /** Returns LineReference. */
  get lineReference() {
    return this._f(LineReference);
  }
  /** Returns LineWidthScale. */
  get lineWidthScale() {
    return this._f(LineWidthScale);
  }
  /** Returns FillReference. */
  get fillReference() {
    return this._f(FillReference);
  }
  /** Returns EffectReference. */
  get effectReference() {
    return this._f(EffectReference);
  }
  /** Returns FontReference. */
  get fontReference() {
    return this._f(FontReference);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TextCharacterPropertiesType. */
  get textCharacterPropertiesType() {
    return this._f(TextCharacterPropertiesType);
  }
  /** Returns TextBodyProperties. */
  get textBodyProperties() {
    return this._f(TextBodyProperties);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class Wall extends StyleEntry {
  static _Q = "cs:wall";
}
class ValueAxis extends StyleEntry {
  static _Q = "cs:valueAxis";
}
class UpBar extends StyleEntry {
  static _Q = "cs:upBar";
}
class TrendlineLabel extends StyleEntry {
  static _Q = "cs:trendlineLabel";
}
class TrendlineStyle extends StyleEntry {
  static _Q = "cs:trendline";
}
class TitleStyle extends StyleEntry {
  static _Q = "cs:title";
}
class SeriesLine extends StyleEntry {
  static _Q = "cs:seriesLine";
}
class SeriesAxis extends StyleEntry {
  static _Q = "cs:seriesAxis";
}
class PlotArea3D extends StyleEntry {
  static _Q = "cs:plotArea3D";
}
class PlotArea extends StyleEntry {
  static _Q = "cs:plotArea";
}
class LegendStyle extends StyleEntry {
  static _Q = "cs:legend";
}
class LeaderLine extends StyleEntry {
  static _Q = "cs:leaderLine";
}
class HiLoLine extends StyleEntry {
  static _Q = "cs:hiLoLine";
}
class GridlineMinor extends StyleEntry {
  static _Q = "cs:gridlineMinor";
}
class GridlineMajor extends StyleEntry {
  static _Q = "cs:gridlineMajor";
}
class Floor extends StyleEntry {
  static _Q = "cs:floor";
}
class ErrorBar extends StyleEntry {
  static _Q = "cs:errorBar";
}
class DropLine extends StyleEntry {
  static _Q = "cs:dropLine";
}
class DownBar extends StyleEntry {
  static _Q = "cs:downBar";
}
class DataTableStyle extends StyleEntry {
  static _Q = "cs:dataTable";
}
class DataPointWireframe extends StyleEntry {
  static _Q = "cs:dataPointWireframe";
}
class DataPointMarker extends StyleEntry {
  static _Q = "cs:dataPointMarker";
}
class DataPointLine extends StyleEntry {
  static _Q = "cs:dataPointLine";
}
class DataPoint3D extends StyleEntry {
  static _Q = "cs:dataPoint3D";
}
class DataPoint extends StyleEntry {
  static _Q = "cs:dataPoint";
}
class DataLabelCallout extends StyleEntry {
  static _Q = "cs:dataLabelCallout";
}
class DataLabel extends StyleEntry {
  static _Q = "cs:dataLabel";
}
class ChartArea extends StyleEntry {
  static _Q = "cs:chartArea";
}
class CategoryAxis extends StyleEntry {
  static _Q = "cs:categoryAxis";
}
class AxisTitle extends StyleEntry {
  static _Q = "cs:axisTitle";
}
class View3DProperties extends OxmlLeafElement {
  static _Q = "cs:view3D";
  static _A = [":rotX", ":rotY", ":rAngAx", ":perspective", ":heightPercent", ":depthPercent"];
  /** rotX. Serialized as `:rotX` */
  get rotX() {
    return this._g(":rotX");
  }
  set rotX(v) {
    this._s(":rotX", v);
  }
  /** rotY. Serialized as `:rotY` */
  get rotY() {
    return this._g(":rotY");
  }
  set rotY(v) {
    this._s(":rotY", v);
  }
  /** rAngAx. Serialized as `:rAngAx` */
  get rightAngleAxes() {
    return this._g(":rAngAx");
  }
  set rightAngleAxes(v) {
    this._s(":rAngAx", v);
  }
  /** perspective. Serialized as `:perspective` */
  get perspective() {
    return this._g(":perspective");
  }
  set perspective(v) {
    this._s(":perspective", v);
  }
  /** heightPercent. Serialized as `:heightPercent` */
  get heightPercent() {
    return this._g(":heightPercent");
  }
  set heightPercent(v) {
    this._s(":heightPercent", v);
  }
  /** depthPercent. Serialized as `:depthPercent` */
  get depthPercent() {
    return this._g(":depthPercent");
  }
  set depthPercent(v) {
    this._s(":depthPercent", v);
  }
}
class Trendline extends OxmlLeafElement {
  static _Q = "cs:trendline";
  static _A = [":add", ":equation", ":rsquared"];
  /** add. Serialized as `:add` */
  get add() {
    return this._g(":add");
  }
  set add(v) {
    this._s(":add", v);
  }
  /** equation. Serialized as `:equation` */
  get equation() {
    return this._g(":equation");
  }
  set equation(v) {
    this._s(":equation", v);
  }
  /** rsquared. Serialized as `:rsquared` */
  get rSquared() {
    return this._g(":rsquared");
  }
  set rSquared(v) {
    this._s(":rsquared", v);
  }
}
class Title extends OxmlLeafElement {
  static _Q = "cs:title";
  static _A = [":position"];
  /** position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
}
class Legend extends OxmlLeafElement {
  static _Q = "cs:legend";
  static _A = [":visible", ":includeInLayout", ":position"];
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** includeInLayout. Serialized as `:includeInLayout` */
  get includeInLayout() {
    return this._g(":includeInLayout");
  }
  set includeInLayout(v) {
    this._s(":includeInLayout", v);
  }
  /** position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
}
class DataTable extends OxmlLeafElement {
  static _Q = "cs:dataTable";
  static _A = [":legendKeys", ":horizontalBorder", ":verticalBorder", ":outlineBorder"];
  /** legendKeys. Serialized as `:legendKeys` */
  get legendKeys() {
    return this._g(":legendKeys");
  }
  set legendKeys(v) {
    this._s(":legendKeys", v);
  }
  /** horizontalBorder. Serialized as `:horizontalBorder` */
  get horizontalBorder() {
    return this._g(":horizontalBorder");
  }
  set horizontalBorder(v) {
    this._s(":horizontalBorder", v);
  }
  /** verticalBorder. Serialized as `:verticalBorder` */
  get verticalBorder() {
    return this._g(":verticalBorder");
  }
  set verticalBorder(v) {
    this._s(":verticalBorder", v);
  }
  /** outlineBorder. Serialized as `:outlineBorder` */
  get outlineBorder() {
    return this._g(":outlineBorder");
  }
  set outlineBorder(v) {
    this._s(":outlineBorder", v);
  }
}
class DataLabels extends OxmlLeafElement {
  static _Q = "cs:dataLabels";
  static _A = [":position", ":value", ":seriesName", ":categoryName", ":legendKey", ":percentage"];
  /** position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
  /** seriesName. Serialized as `:seriesName` */
  get seriesName() {
    return this._g(":seriesName");
  }
  set seriesName(v) {
    this._s(":seriesName", v);
  }
  /** categoryName. Serialized as `:categoryName` */
  get categoryName() {
    return this._g(":categoryName");
  }
  set categoryName(v) {
    this._s(":categoryName", v);
  }
  /** legendKey. Serialized as `:legendKey` */
  get legendKey() {
    return this._g(":legendKey");
  }
  set legendKey(v) {
    this._s(":legendKey", v);
  }
  /** percentage. Serialized as `:percentage` */
  get percentage() {
    return this._g(":percentage");
  }
  set percentage(v) {
    this._s(":percentage", v);
  }
}
class DataSeries extends OxmlLeafElement {
  static _Q = "cs:dataSeries";
  static _A = [":overlap", ":gapWidth", ":gapDepth", ":doughnutHoleSize", ":markerVisible", ":hiloLines", ":dropLines", ":seriesLines"];
  /** overlap. Serialized as `:overlap` */
  get overlap() {
    return this._g(":overlap");
  }
  set overlap(v) {
    this._s(":overlap", v);
  }
  /** gapWidth. Serialized as `:gapWidth` */
  get gapWidth() {
    return this._g(":gapWidth");
  }
  set gapWidth(v) {
    this._s(":gapWidth", v);
  }
  /** gapDepth. Serialized as `:gapDepth` */
  get gapDepth() {
    return this._g(":gapDepth");
  }
  set gapDepth(v) {
    this._s(":gapDepth", v);
  }
  /** doughnutHoleSize. Serialized as `:doughnutHoleSize` */
  get doughnutHoleSize() {
    return this._g(":doughnutHoleSize");
  }
  set doughnutHoleSize(v) {
    this._s(":doughnutHoleSize", v);
  }
  /** markerVisible. Serialized as `:markerVisible` */
  get markerVisible() {
    return this._g(":markerVisible");
  }
  set markerVisible(v) {
    this._s(":markerVisible", v);
  }
  /** hiloLines. Serialized as `:hiloLines` */
  get hiloLines() {
    return this._g(":hiloLines");
  }
  set hiloLines(v) {
    this._s(":hiloLines", v);
  }
  /** dropLines. Serialized as `:dropLines` */
  get dropLines() {
    return this._g(":dropLines");
  }
  set dropLines(v) {
    this._s(":dropLines", v);
  }
  /** seriesLines. Serialized as `:seriesLines` */
  get seriesLines() {
    return this._g(":seriesLines");
  }
  set seriesLines(v) {
    this._s(":seriesLines", v);
  }
}
class AxisProperties extends OxmlLeafElement {
  static _A = [":visible", ":majorTick", ":minorTick", ":labelPosition", ":majorGridlines", ":minorGridlines", ":title"];
  /** visible. Serialized as `:visible` */
  get visible() {
    return this._g(":visible");
  }
  set visible(v) {
    this._s(":visible", v);
  }
  /** majorTick. Serialized as `:majorTick` */
  get majorTick() {
    return this._g(":majorTick");
  }
  set majorTick(v) {
    this._s(":majorTick", v);
  }
  /** minorTick. Serialized as `:minorTick` */
  get minorTickProp() {
    return this._g(":minorTick");
  }
  set minorTickProp(v) {
    this._s(":minorTick", v);
  }
  /** labelPosition. Serialized as `:labelPosition` */
  get labelPosition() {
    return this._g(":labelPosition");
  }
  set labelPosition(v) {
    this._s(":labelPosition", v);
  }
  /** majorGridlines. Serialized as `:majorGridlines` */
  get majorGridlines() {
    return this._g(":majorGridlines");
  }
  set majorGridlines(v) {
    this._s(":majorGridlines", v);
  }
  /** minorGridlines. Serialized as `:minorGridlines` */
  get minorGridlinesProp() {
    return this._g(":minorGridlines");
  }
  set minorGridlinesProp(v) {
    this._s(":minorGridlines", v);
  }
  /** title. Serialized as `:title` */
  get titleProp() {
    return this._g(":title");
  }
  set titleProp(v) {
    this._s(":title", v);
  }
}
class ValueAxisProperties extends AxisProperties {
  static _Q = "cs:valueAxis";
}
class SeriesAxisProperties extends AxisProperties {
  static _Q = "cs:seriesAxis";
}
class CategoryAxisProperties extends AxisProperties {
  static _Q = "cs:categoryAxis";
}
class TextBodyProperties extends OxmlCompositeElement {
  static _Q = "cs:bodyPr";
  static _A = [":rot", ":spcFirstLastPara", ":vertOverflow", ":horzOverflow", ":vert", ":wrap", ":lIns", ":tIns", ":rIns", ":bIns", ":numCol", ":spcCol", ":rtlCol", ":fromWordArt", ":anchor", ":anchorCtr", ":forceAA", ":upright", ":compatLnSpc"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
  get useParagraphSpacing() {
    return this._g(":spcFirstLastPara");
  }
  set useParagraphSpacing(v) {
    this._s(":spcFirstLastPara", v);
  }
  /** Text Vertical Overflow. Serialized as `:vertOverflow` */
  get verticalOverflow() {
    return this._g(":vertOverflow");
  }
  set verticalOverflow(v) {
    this._s(":vertOverflow", v);
  }
  /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
  get horizontalOverflow() {
    return this._g(":horzOverflow");
  }
  set horizontalOverflow(v) {
    this._s(":horzOverflow", v);
  }
  /** Vertical Text. Serialized as `:vert` */
  get vertical() {
    return this._g(":vert");
  }
  set vertical(v) {
    this._s(":vert", v);
  }
  /** Text Wrapping Type. Serialized as `:wrap` */
  get wrap() {
    return this._g(":wrap");
  }
  set wrap(v) {
    this._s(":wrap", v);
  }
  /** Left Inset. Serialized as `:lIns` */
  get leftInset() {
    return this._g(":lIns");
  }
  set leftInset(v) {
    this._s(":lIns", v);
  }
  /** Top Inset. Serialized as `:tIns` */
  get topInset() {
    return this._g(":tIns");
  }
  set topInset(v) {
    this._s(":tIns", v);
  }
  /** Right Inset. Serialized as `:rIns` */
  get rightInset() {
    return this._g(":rIns");
  }
  set rightInset(v) {
    this._s(":rIns", v);
  }
  /** Bottom Inset. Serialized as `:bIns` */
  get bottomInset() {
    return this._g(":bIns");
  }
  set bottomInset(v) {
    this._s(":bIns", v);
  }
  /** Number of Columns. Serialized as `:numCol` */
  get columnCount() {
    return this._g(":numCol");
  }
  set columnCount(v) {
    this._s(":numCol", v);
  }
  /** Space Between Columns. Serialized as `:spcCol` */
  get columnSpacing() {
    return this._g(":spcCol");
  }
  set columnSpacing(v) {
    this._s(":spcCol", v);
  }
  /** Columns Right-To-Left. Serialized as `:rtlCol` */
  get rightToLeftColumns() {
    return this._g(":rtlCol");
  }
  set rightToLeftColumns(v) {
    this._s(":rtlCol", v);
  }
  /** From WordArt. Serialized as `:fromWordArt` */
  get fromWordArt() {
    return this._g(":fromWordArt");
  }
  set fromWordArt(v) {
    this._s(":fromWordArt", v);
  }
  /** Anchor. Serialized as `:anchor` */
  get anchor() {
    return this._g(":anchor");
  }
  set anchor(v) {
    this._s(":anchor", v);
  }
  /** Anchor Center. Serialized as `:anchorCtr` */
  get anchorCenter() {
    return this._g(":anchorCtr");
  }
  set anchorCenter(v) {
    this._s(":anchorCtr", v);
  }
  /** Force Anti-Alias. Serialized as `:forceAA` */
  get forceAntiAlias() {
    return this._g(":forceAA");
  }
  set forceAntiAlias(v) {
    this._s(":forceAA", v);
  }
  /** Text Upright. Serialized as `:upright` */
  get upRight() {
    return this._g(":upright");
  }
  set upRight(v) {
    this._s(":upright", v);
  }
  /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
  get compatibleLineSpacing() {
    return this._g(":compatLnSpc");
  }
  set compatibleLineSpacing(v) {
    this._s(":compatLnSpc", v);
  }
  /** Preset Text Shape. */
  get presetTextWrap() {
    return this._f(APresetTextWrap);
  }
}
class TextCharacterPropertiesType extends OxmlCompositeElement {
  static _Q = "cs:defRPr";
  static _A = [":kumimoji", ":lang", ":altLang", ":sz", ":b", ":i", ":u", ":strike", ":kern", ":cap", ":spc", ":normalizeH", ":baseline", ":noProof", ":dirty", ":err", ":smtClean", ":smtId", ":bmk"];
  /** kumimoji. Serialized as `:kumimoji` */
  get kumimoji() {
    return this._g(":kumimoji");
  }
  set kumimoji(v) {
    this._s(":kumimoji", v);
  }
  /** lang. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** altLang. Serialized as `:altLang` */
  get alternativeLanguage() {
    return this._g(":altLang");
  }
  set alternativeLanguage(v) {
    this._s(":altLang", v);
  }
  /** sz. Serialized as `:sz` */
  get fontSize() {
    return this._g(":sz");
  }
  set fontSize(v) {
    this._s(":sz", v);
  }
  /** b. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
  /** i. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** u. Serialized as `:u` */
  get underline() {
    return this._g(":u");
  }
  set underline(v) {
    this._s(":u", v);
  }
  /** strike. Serialized as `:strike` */
  get strike() {
    return this._g(":strike");
  }
  set strike(v) {
    this._s(":strike", v);
  }
  /** kern. Serialized as `:kern` */
  get kerning() {
    return this._g(":kern");
  }
  set kerning(v) {
    this._s(":kern", v);
  }
  /** cap. Serialized as `:cap` */
  get capital() {
    return this._g(":cap");
  }
  set capital(v) {
    this._s(":cap", v);
  }
  /** spc. Serialized as `:spc` */
  get spacing() {
    return this._g(":spc");
  }
  set spacing(v) {
    this._s(":spc", v);
  }
  /** normalizeH. Serialized as `:normalizeH` */
  get normalizeHeight() {
    return this._g(":normalizeH");
  }
  set normalizeHeight(v) {
    this._s(":normalizeH", v);
  }
  /** baseline. Serialized as `:baseline` */
  get baseline() {
    return this._g(":baseline");
  }
  set baseline(v) {
    this._s(":baseline", v);
  }
  /** noProof. Serialized as `:noProof` */
  get noProof() {
    return this._g(":noProof");
  }
  set noProof(v) {
    this._s(":noProof", v);
  }
  /** dirty. Serialized as `:dirty` */
  get dirty() {
    return this._g(":dirty");
  }
  set dirty(v) {
    this._s(":dirty", v);
  }
  /** err. Serialized as `:err` */
  get spellingError() {
    return this._g(":err");
  }
  set spellingError(v) {
    this._s(":err", v);
  }
  /** smtClean. Serialized as `:smtClean` */
  get smartTagClean() {
    return this._g(":smtClean");
  }
  set smartTagClean(v) {
    this._s(":smtClean", v);
  }
  /** smtId. Serialized as `:smtId` */
  get smartTagId() {
    return this._g(":smtId");
  }
  set smartTagId(v) {
    this._s(":smtId", v);
  }
  /** bmk. Serialized as `:bmk` */
  get bookmark() {
    return this._g(":bmk");
  }
  set bookmark(v) {
    this._s(":bmk", v);
  }
  /** Returns AOutline. */
  get outline() {
    return this._f(AOutline);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "cs:spPr";
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
class FontReference extends OxmlCompositeElement {
  static _Q = "cs:fontRef";
  static _A = [":idx", ":mods"];
  /** idx. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** mods. Serialized as `:mods` */
  get modifiers() {
    return this._g(":mods");
  }
  set modifiers(v) {
    this._s(":mods", v);
  }
}
class LineWidthScale extends OxmlLeafTextElement {
  static _Q = "cs:lineWidthScale";
}
class StyleReference extends OxmlCompositeElement {
  static _A = [":idx", ":mods"];
  /** idx. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** mods. Serialized as `:mods` */
  get modifiers() {
    return this._g(":mods");
  }
  set modifiers(v) {
    this._s(":mods", v);
  }
}
class EffectReference extends StyleReference {
  static _Q = "cs:effectRef";
}
class FillReference extends StyleReference {
  static _Q = "cs:fillRef";
}
class LineReference extends StyleReference {
  static _Q = "cs:lnRef";
}
class StyleColor extends OxmlCompositeElement {
  static _Q = "cs:styleClr";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "cs:extLst";
}
class ColorStyleVariation extends OxmlCompositeElement {
  static _Q = "cs:variation";
}
class ChartStyle extends OxmlPartRootElement {
  static _Q = "cs:chartStyle";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns AxisTitle. */
  get axisTitle() {
    return this._f(AxisTitle);
  }
  /** Returns CategoryAxis. */
  get categoryAxis() {
    return this._f(CategoryAxis);
  }
  /** Returns ChartArea. */
  get chartArea() {
    return this._f(ChartArea);
  }
  /** Returns DataLabel. */
  get dataLabel() {
    return this._f(DataLabel);
  }
  /** Returns DataLabelCallout. */
  get dataLabelCallout() {
    return this._f(DataLabelCallout);
  }
  /** Returns DataPoint. */
  get dataPoint() {
    return this._f(DataPoint);
  }
  /** Returns DataPoint3D. */
  get dataPoint3D() {
    return this._f(DataPoint3D);
  }
  /** Returns DataPointLine. */
  get dataPointLine() {
    return this._f(DataPointLine);
  }
  /** Returns DataPointMarker. */
  get dataPointMarker() {
    return this._f(DataPointMarker);
  }
  /** Returns MarkerLayoutProperties. */
  get markerLayoutProperties() {
    return this._f(MarkerLayoutProperties);
  }
  /** Returns DataPointWireframe. */
  get dataPointWireframe() {
    return this._f(DataPointWireframe);
  }
  /** Returns DataTableStyle. */
  get dataTableStyle() {
    return this._f(DataTableStyle);
  }
  /** Returns DownBar. */
  get downBar() {
    return this._f(DownBar);
  }
  /** Returns DropLine. */
  get dropLine() {
    return this._f(DropLine);
  }
  /** Returns ErrorBar. */
  get errorBar() {
    return this._f(ErrorBar);
  }
  /** Returns Floor. */
  get floor() {
    return this._f(Floor);
  }
  /** Returns GridlineMajor. */
  get gridlineMajor() {
    return this._f(GridlineMajor);
  }
  /** Returns GridlineMinor. */
  get gridlineMinor() {
    return this._f(GridlineMinor);
  }
  /** Returns HiLoLine. */
  get hiLoLine() {
    return this._f(HiLoLine);
  }
  /** Returns LeaderLine. */
  get leaderLine() {
    return this._f(LeaderLine);
  }
  /** Returns LegendStyle. */
  get legendStyle() {
    return this._f(LegendStyle);
  }
  /** Returns PlotArea. */
  get plotArea() {
    return this._f(PlotArea);
  }
  /** Returns PlotArea3D. */
  get plotArea3D() {
    return this._f(PlotArea3D);
  }
  /** Returns SeriesAxis. */
  get seriesAxis() {
    return this._f(SeriesAxis);
  }
  /** Returns SeriesLine. */
  get seriesLine() {
    return this._f(SeriesLine);
  }
  /** Returns TitleStyle. */
  get titleStyle() {
    return this._f(TitleStyle);
  }
  /** Returns TrendlineStyle. */
  get trendlineStyle() {
    return this._f(TrendlineStyle);
  }
  /** Returns TrendlineLabel. */
  get trendlineLabel() {
    return this._f(TrendlineLabel);
  }
  /** Returns UpBar. */
  get upBar() {
    return this._f(UpBar);
  }
  /** Returns ValueAxis. */
  get valueAxis() {
    return this._f(ValueAxis);
  }
  /** Returns Wall. */
  get wall() {
    return this._f(Wall);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class ColorStyle extends OxmlPartRootElement {
  static _Q = "cs:colorStyle";
  static _A = [":meth", ":id"];
  /** meth. Serialized as `:meth` */
  get method() {
    return this._g(":meth");
  }
  set method(v) {
    this._s(":meth", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
function initOffice2013DrawingChartStyleNamespace() {
  MarkerLayoutProperties._D = {
    ":symbol": new OxmlAttr(":symbol", OxmlType.EnumValue, MarkerStyleArray),
    ":size": new OxmlAttr(":size", OxmlType.ByteValue)
  };
  StyleEntry._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  StyleEntry._D = {
    ":mods": new OxmlAttr(":mods", OxmlType.ListValue)
  };
  Wall._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  ValueAxis._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  UpBar._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  TrendlineLabel._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  TrendlineStyle._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  TitleStyle._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  SeriesLine._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  SeriesAxis._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  PlotArea3D._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  PlotArea._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  LegendStyle._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  LeaderLine._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  HiLoLine._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  GridlineMinor._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  GridlineMajor._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  Floor._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  ErrorBar._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DropLine._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DownBar._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataTableStyle._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataPointWireframe._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataPointMarker._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataPointLine._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataPoint3D._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataPoint._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataLabelCallout._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  DataLabel._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  ChartArea._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  CategoryAxis._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  AxisTitle._C = {
    "cs:lnRef": LineReference,
    "cs:lineWidthScale": LineWidthScale,
    "cs:fillRef": FillReference,
    "cs:effectRef": EffectReference,
    "cs:fontRef": FontReference,
    "cs:spPr": ShapeProperties,
    "cs:defRPr": TextCharacterPropertiesType,
    "cs:bodyPr": TextBodyProperties,
    "cs:extLst": OfficeArtExtensionList
  };
  View3DProperties._D = {
    ":rotX": new OxmlAttr(":rotX", OxmlType.SByteValue),
    ":rotY": new OxmlAttr(":rotY", OxmlType.UInt16Value),
    ":rAngAx": new OxmlAttr(":rAngAx", OxmlType.EnumValue, BooleanArray),
    ":perspective": new OxmlAttr(":perspective", OxmlType.ByteValue),
    ":heightPercent": new OxmlAttr(":heightPercent", OxmlType.UInt16Value),
    ":depthPercent": new OxmlAttr(":depthPercent", OxmlType.UInt16Value)
  };
  Trendline._D = {
    ":add": new OxmlAttr(":add", OxmlType.EnumValue, BooleanArray),
    ":equation": new OxmlAttr(":equation", OxmlType.EnumValue, BooleanArray),
    ":rsquared": new OxmlAttr(":rsquared", OxmlType.EnumValue, BooleanArray)
  };
  Title._D = {
    ":position": new OxmlAttr(":position", OxmlType.EnumValue, TitlePositionArray)
  };
  Legend._D = {
    ":visible": new OxmlAttr(":visible", OxmlType.EnumValue, BooleanArray),
    ":includeInLayout": new OxmlAttr(":includeInLayout", OxmlType.EnumValue, BooleanArray),
    ":position": new OxmlAttr(":position", OxmlType.EnumValue, LegendPositionArray)
  };
  DataTable._D = {
    ":legendKeys": new OxmlAttr(":legendKeys", OxmlType.EnumValue, BooleanArray),
    ":horizontalBorder": new OxmlAttr(":horizontalBorder", OxmlType.EnumValue, BooleanArray),
    ":verticalBorder": new OxmlAttr(":verticalBorder", OxmlType.EnumValue, BooleanArray),
    ":outlineBorder": new OxmlAttr(":outlineBorder", OxmlType.EnumValue, BooleanArray)
  };
  DataLabels._D = {
    ":position": new OxmlAttr(":position", OxmlType.EnumValue, DataLabelsPositionArray),
    ":value": new OxmlAttr(":value", OxmlType.EnumValue, BooleanArray),
    ":seriesName": new OxmlAttr(":seriesName", OxmlType.EnumValue, BooleanArray),
    ":categoryName": new OxmlAttr(":categoryName", OxmlType.EnumValue, BooleanArray),
    ":legendKey": new OxmlAttr(":legendKey", OxmlType.EnumValue, BooleanArray),
    ":percentage": new OxmlAttr(":percentage", OxmlType.EnumValue, BooleanArray)
  };
  DataSeries._D = {
    ":overlap": new OxmlAttr(":overlap", OxmlType.SByteValue),
    ":gapWidth": new OxmlAttr(":gapWidth", OxmlType.UInt16Value),
    ":gapDepth": new OxmlAttr(":gapDepth", OxmlType.UInt16Value),
    ":doughnutHoleSize": new OxmlAttr(":doughnutHoleSize", OxmlType.ByteValue),
    ":markerVisible": new OxmlAttr(":markerVisible", OxmlType.EnumValue, BooleanArray),
    ":hiloLines": new OxmlAttr(":hiloLines", OxmlType.EnumValue, BooleanArray),
    ":dropLines": new OxmlAttr(":dropLines", OxmlType.EnumValue, BooleanArray),
    ":seriesLines": new OxmlAttr(":seriesLines", OxmlType.EnumValue, BooleanArray)
  };
  AxisProperties._D = {
    ":visible": new OxmlAttr(":visible", OxmlType.EnumValue, BooleanArray),
    ":majorTick": new OxmlAttr(":majorTick", OxmlType.EnumValue, TickMarkNinchArray),
    ":minorTick": new OxmlAttr(":minorTick", OxmlType.EnumValue, TickMarkNinchArray),
    ":labelPosition": new OxmlAttr(":labelPosition", OxmlType.EnumValue, TickLabelPositionNinchArray),
    ":majorGridlines": new OxmlAttr(":majorGridlines", OxmlType.EnumValue, BooleanArray),
    ":minorGridlines": new OxmlAttr(":minorGridlines", OxmlType.EnumValue, BooleanArray),
    ":title": new OxmlAttr(":title", OxmlType.EnumValue, BooleanArray)
  };
  TextBodyProperties._C = {
    "a:prstTxWarp": APresetTextWrap,
    "a:noAutofit": ANoAutoFit,
    "a:normAutofit": ANormalAutoFit,
    "a:spAutoFit": AShapeAutoFit,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:flatTx": AFlatText,
    "a:extLst": AExtensionList
  };
  TextBodyProperties._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":spcFirstLastPara": new OxmlAttr(":spcFirstLastPara", OxmlType.BooleanValue),
    ":vertOverflow": new OxmlAttr(":vertOverflow", OxmlType.EnumValue, TextVerticalOverflowValuesArray),
    ":horzOverflow": new OxmlAttr(":horzOverflow", OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
    ":vert": new OxmlAttr(":vert", OxmlType.EnumValue, TextVerticalValuesArray),
    ":wrap": new OxmlAttr(":wrap", OxmlType.EnumValue, TextWrappingValuesArray),
    ":lIns": new OxmlAttr(":lIns", OxmlType.Int32Value),
    ":tIns": new OxmlAttr(":tIns", OxmlType.Int32Value),
    ":rIns": new OxmlAttr(":rIns", OxmlType.Int32Value),
    ":bIns": new OxmlAttr(":bIns", OxmlType.Int32Value),
    ":numCol": new OxmlAttr(":numCol", OxmlType.Int32Value),
    ":spcCol": new OxmlAttr(":spcCol", OxmlType.Int32Value),
    ":rtlCol": new OxmlAttr(":rtlCol", OxmlType.BooleanValue),
    ":fromWordArt": new OxmlAttr(":fromWordArt", OxmlType.BooleanValue),
    ":anchor": new OxmlAttr(":anchor", OxmlType.EnumValue, TextAnchoringTypeValuesArray),
    ":anchorCtr": new OxmlAttr(":anchorCtr", OxmlType.BooleanValue),
    ":forceAA": new OxmlAttr(":forceAA", OxmlType.BooleanValue),
    ":upright": new OxmlAttr(":upright", OxmlType.BooleanValue),
    ":compatLnSpc": new OxmlAttr(":compatLnSpc", OxmlType.BooleanValue)
  };
  TextCharacterPropertiesType._C = {
    "a:ln": AOutline,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:highlight": AHighlight,
    "a:uLnTx": AUnderlineFollowsText,
    "a:uLn": AUnderline,
    "a:uFillTx": AUnderlineFillText,
    "a:uFill": AUnderlineFill,
    "a:latin": ALatinFont,
    "a:ea": AEastAsianFont,
    "a:cs": AComplexScriptFont,
    "a:sym": ASymbolFont,
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkMouseOver": AHyperlinkOnMouseOver,
    "a:rtl": ARightToLeft,
    "a:extLst": AExtensionList
  };
  TextCharacterPropertiesType._D = {
    ":kumimoji": new OxmlAttr(":kumimoji", OxmlType.BooleanValue),
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":altLang": new OxmlAttr(":altLang", OxmlType.StringValue),
    ":sz": new OxmlAttr(":sz", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":u": new OxmlAttr(":u", OxmlType.EnumValue, TextUnderlineValuesArray),
    ":strike": new OxmlAttr(":strike", OxmlType.EnumValue, TextStrikeValuesArray),
    ":kern": new OxmlAttr(":kern", OxmlType.Int32Value),
    ":cap": new OxmlAttr(":cap", OxmlType.EnumValue, TextCapsValuesArray),
    ":spc": new OxmlAttr(":spc", OxmlType.Int32Value),
    ":normalizeH": new OxmlAttr(":normalizeH", OxmlType.BooleanValue),
    ":baseline": new OxmlAttr(":baseline", OxmlType.Int32Value),
    ":noProof": new OxmlAttr(":noProof", OxmlType.BooleanValue),
    ":dirty": new OxmlAttr(":dirty", OxmlType.BooleanValue),
    ":err": new OxmlAttr(":err", OxmlType.BooleanValue),
    ":smtClean": new OxmlAttr(":smtClean", OxmlType.BooleanValue),
    ":smtId": new OxmlAttr(":smtId", OxmlType.UInt32Value),
    ":bmk": new OxmlAttr(":bmk", OxmlType.StringValue)
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
  FontReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor,
    "cs:styleClr": StyleColor
  };
  FontReference._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.EnumValue, FontCollectionIndexValuesArray),
    ":mods": new OxmlAttr(":mods", OxmlType.ListValue)
  };
  StyleReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor,
    "cs:styleClr": StyleColor
  };
  StyleReference._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value),
    ":mods": new OxmlAttr(":mods", OxmlType.ListValue)
  };
  EffectReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor,
    "cs:styleClr": StyleColor
  };
  FillReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor,
    "cs:styleClr": StyleColor
  };
  LineReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor,
    "cs:styleClr": StyleColor
  };
  StyleColor._C = {
    "a:tint": ATint,
    "a:shade": AShade,
    "a:comp": AComplement,
    "a:inv": AInverse,
    "a:gray": AGray,
    "a:alpha": AAlpha,
    "a:alphaOff": AAlphaOffset,
    "a:alphaMod": AAlphaModulation,
    "a:hue": AHue,
    "a:hueOff": AHueOffset,
    "a:hueMod": AHueModulation,
    "a:sat": ASaturation,
    "a:satOff": ASaturationOffset,
    "a:satMod": ASaturationModulation,
    "a:lum": ALuminance,
    "a:lumOff": ALuminanceOffset,
    "a:lumMod": ALuminanceModulation,
    "a:red": ARed,
    "a:redOff": ARedOffset,
    "a:redMod": ARedModulation,
    "a:green": AGreen,
    "a:greenOff": AGreenOffset,
    "a:greenMod": AGreenModulation,
    "a:blue": ABlue,
    "a:blueOff": ABlueOffset,
    "a:blueMod": ABlueModulation,
    "a:gamma": AGamma,
    "a:invGamma": AInverseGamma
  };
  StyleColor._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  ColorStyleVariation._C = {
    "a:tint": ATint,
    "a:shade": AShade,
    "a:comp": AComplement,
    "a:inv": AInverse,
    "a:gray": AGray,
    "a:alpha": AAlpha,
    "a:alphaOff": AAlphaOffset,
    "a:alphaMod": AAlphaModulation,
    "a:hue": AHue,
    "a:hueOff": AHueOffset,
    "a:hueMod": AHueModulation,
    "a:sat": ASaturation,
    "a:satOff": ASaturationOffset,
    "a:satMod": ASaturationModulation,
    "a:lum": ALuminance,
    "a:lumOff": ALuminanceOffset,
    "a:lumMod": ALuminanceModulation,
    "a:red": ARed,
    "a:redOff": ARedOffset,
    "a:redMod": ARedModulation,
    "a:green": AGreen,
    "a:greenOff": AGreenOffset,
    "a:greenMod": AGreenModulation,
    "a:blue": ABlue,
    "a:blueOff": ABlueOffset,
    "a:blueMod": ABlueModulation,
    "a:gamma": AGamma,
    "a:invGamma": AInverseGamma
  };
  ChartStyle._C = {
    "cs:axisTitle": AxisTitle,
    "cs:categoryAxis": CategoryAxis,
    "cs:chartArea": ChartArea,
    "cs:dataLabel": DataLabel,
    "cs:dataLabelCallout": DataLabelCallout,
    "cs:dataPoint": DataPoint,
    "cs:dataPoint3D": DataPoint3D,
    "cs:dataPointLine": DataPointLine,
    "cs:dataPointMarker": DataPointMarker,
    "cs:dataPointMarkerLayout": MarkerLayoutProperties,
    "cs:dataPointWireframe": DataPointWireframe,
    "cs:dataTable": DataTableStyle,
    "cs:downBar": DownBar,
    "cs:dropLine": DropLine,
    "cs:errorBar": ErrorBar,
    "cs:floor": Floor,
    "cs:gridlineMajor": GridlineMajor,
    "cs:gridlineMinor": GridlineMinor,
    "cs:hiLoLine": HiLoLine,
    "cs:leaderLine": LeaderLine,
    "cs:legend": LegendStyle,
    "cs:plotArea": PlotArea,
    "cs:plotArea3D": PlotArea3D,
    "cs:seriesAxis": SeriesAxis,
    "cs:seriesLine": SeriesLine,
    "cs:title": TitleStyle,
    "cs:trendline": TrendlineStyle,
    "cs:trendlineLabel": TrendlineLabel,
    "cs:upBar": UpBar,
    "cs:valueAxis": ValueAxis,
    "cs:wall": Wall,
    "cs:extLst": OfficeArtExtensionList
  };
  ChartStyle._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value)
  };
  ColorStyle._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor,
    "cs:variation": ColorStyleVariation,
    "cs:extLst": OfficeArtExtensionList
  };
  ColorStyle._D = {
    ":meth": new OxmlAttr(":meth", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value)
  };
  return {
    prefix: "cs",
    xmlns: "http://schemas.microsoft.com/office/drawing/2012/chartStyle"
  };
}
export {
  AxisProperties,
  AxisTitle,
  Boolean,
  BooleanArray,
  CategoryAxis,
  CategoryAxisProperties,
  ChartArea,
  ChartStyle,
  ColorStyle,
  ColorStyleMethodEnum,
  ColorStyleMethodEnumArray,
  ColorStyleVariation,
  DataLabel,
  DataLabelCallout,
  DataLabels,
  DataLabelsPosition,
  DataLabelsPositionArray,
  DataPoint,
  DataPoint3D,
  DataPointLine,
  DataPointMarker,
  DataPointWireframe,
  DataSeries,
  DataTable,
  DataTableStyle,
  DownBar,
  DropLine,
  EffectReference,
  ErrorBar,
  FillReference,
  Floor,
  FontReference,
  GridlineMajor,
  GridlineMinor,
  HiLoLine,
  LeaderLine,
  Legend,
  LegendPosition,
  LegendPositionArray,
  LegendStyle,
  LineReference,
  LineWidthScale,
  MarkerLayoutProperties,
  MarkerStyle,
  MarkerStyleArray,
  OfficeArtExtensionList,
  PlotArea,
  PlotArea3D,
  SeriesAxis,
  SeriesAxisProperties,
  SeriesLine,
  ShapeProperties,
  StyleColor,
  StyleColorEnum,
  StyleColorEnumArray,
  StyleEntry,
  StyleEntryModifierEnum,
  StyleEntryModifierEnumArray,
  StyleReference,
  StyleReferenceModifierEnum,
  StyleReferenceModifierEnumArray,
  TextBodyProperties,
  TextCharacterPropertiesType,
  TickLabelPositionNinch,
  TickLabelPositionNinchArray,
  TickMarkNinch,
  TickMarkNinchArray,
  Title,
  TitlePosition,
  TitlePositionArray,
  TitleStyle,
  Trendline,
  TrendlineLabel,
  TrendlineStyle,
  UpBar,
  ValueAxis,
  ValueAxisProperties,
  View3DProperties,
  Wall,
  initOffice2013DrawingChartStyleNamespace
};
