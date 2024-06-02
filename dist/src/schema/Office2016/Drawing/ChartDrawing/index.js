import { OxmlPartRootElement } from "../../../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { ColorSchemeIndexValuesArray } from "../../../Drawing";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { ExtensionList as AExtensionList } from "../../../Drawing";
import { Transform2D as ATransform2D } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { Outline as AOutline } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { Shape3DType as AShape3DType } from "../../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../../Drawing";
import { BodyProperties as ABodyProperties } from "../../../Drawing";
import { ListStyle as AListStyle } from "../../../Drawing";
import { Paragraph as AParagraph } from "../../../Drawing";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../../Drawing";
import { HslColor as AHslColor } from "../../../Drawing";
import { SystemColor as ASystemColor } from "../../../Drawing";
import { SchemeColor as ASchemeColor } from "../../../Drawing";
import { PresetColor as APresetColor } from "../../../Drawing";
var FormulaDirection = /* @__PURE__ */ ((FormulaDirection2) => {
  FormulaDirection2["Col"] = "col";
  FormulaDirection2["Row"] = "row";
  return FormulaDirection2;
})(FormulaDirection || {});
const FormulaDirectionArray = [
  "col" /* Col */,
  "row" /* Row */
];
var StringDimensionType = /* @__PURE__ */ ((StringDimensionType2) => {
  StringDimensionType2["Cat"] = "cat";
  StringDimensionType2["ColorStr"] = "colorStr";
  StringDimensionType2["EntityId"] = "entityId";
  return StringDimensionType2;
})(StringDimensionType || {});
const StringDimensionTypeArray = [
  "cat" /* Cat */,
  "colorStr" /* ColorStr */,
  "entityId" /* EntityId */
];
var NumericDimensionType = /* @__PURE__ */ ((NumericDimensionType2) => {
  NumericDimensionType2["Val"] = "val";
  NumericDimensionType2["X"] = "x";
  NumericDimensionType2["Y"] = "y";
  NumericDimensionType2["Size"] = "size";
  NumericDimensionType2["ColorVal"] = "colorVal";
  return NumericDimensionType2;
})(NumericDimensionType || {});
const NumericDimensionTypeArray = [
  "val" /* Val */,
  "x" /* X */,
  "y" /* Y */,
  "size" /* Size */,
  "colorVal" /* ColorVal */
];
var SidePos = /* @__PURE__ */ ((SidePos2) => {
  SidePos2["L"] = "l";
  SidePos2["T"] = "t";
  SidePos2["R"] = "r";
  SidePos2["B"] = "b";
  return SidePos2;
})(SidePos || {});
const SidePosArray = [
  "l" /* L */,
  "t" /* T */,
  "r" /* R */,
  "b" /* B */
];
var PosAlign = /* @__PURE__ */ ((PosAlign2) => {
  PosAlign2["Min"] = "min";
  PosAlign2["Ctr"] = "ctr";
  PosAlign2["Max"] = "max";
  return PosAlign2;
})(PosAlign || {});
const PosAlignArray = [
  "min" /* Min */,
  "ctr" /* Ctr */,
  "max" /* Max */
];
var AxisUnit = /* @__PURE__ */ ((AxisUnit2) => {
  AxisUnit2["Hundreds"] = "hundreds";
  AxisUnit2["Thousands"] = "thousands";
  AxisUnit2["TenThousands"] = "tenThousands";
  AxisUnit2["HundredThousands"] = "hundredThousands";
  AxisUnit2["Millions"] = "millions";
  AxisUnit2["TenMillions"] = "tenMillions";
  AxisUnit2["HundredMillions"] = "hundredMillions";
  AxisUnit2["Billions"] = "billions";
  AxisUnit2["Trillions"] = "trillions";
  AxisUnit2["Percentage"] = "percentage";
  return AxisUnit2;
})(AxisUnit || {});
const AxisUnitArray = [
  "hundreds" /* Hundreds */,
  "thousands" /* Thousands */,
  "tenThousands" /* TenThousands */,
  "hundredThousands" /* HundredThousands */,
  "millions" /* Millions */,
  "tenMillions" /* TenMillions */,
  "hundredMillions" /* HundredMillions */,
  "billions" /* Billions */,
  "trillions" /* Trillions */,
  "percentage" /* Percentage */
];
var TickMarksType = /* @__PURE__ */ ((TickMarksType2) => {
  TickMarksType2["In"] = "in";
  TickMarksType2["Out"] = "out";
  TickMarksType2["Cross"] = "cross";
  TickMarksType2["None"] = "none";
  return TickMarksType2;
})(TickMarksType || {});
const TickMarksTypeArray = [
  "in" /* In */,
  "out" /* Out */,
  "cross" /* Cross */,
  "none" /* None */
];
var SeriesLayout = /* @__PURE__ */ ((SeriesLayout2) => {
  SeriesLayout2["BoxWhisker"] = "boxWhisker";
  SeriesLayout2["ClusteredColumn"] = "clusteredColumn";
  SeriesLayout2["Funnel"] = "funnel";
  SeriesLayout2["ParetoLine"] = "paretoLine";
  SeriesLayout2["RegionMap"] = "regionMap";
  SeriesLayout2["Sunburst"] = "sunburst";
  SeriesLayout2["Treemap"] = "treemap";
  SeriesLayout2["Waterfall"] = "waterfall";
  return SeriesLayout2;
})(SeriesLayout || {});
const SeriesLayoutArray = [
  "boxWhisker" /* BoxWhisker */,
  "clusteredColumn" /* ClusteredColumn */,
  "funnel" /* Funnel */,
  "paretoLine" /* ParetoLine */,
  "regionMap" /* RegionMap */,
  "sunburst" /* Sunburst */,
  "treemap" /* Treemap */,
  "waterfall" /* Waterfall */
];
var ParentLabelLayoutVal = /* @__PURE__ */ ((ParentLabelLayoutVal2) => {
  ParentLabelLayoutVal2["None"] = "none";
  ParentLabelLayoutVal2["Banner"] = "banner";
  ParentLabelLayoutVal2["Overlapping"] = "overlapping";
  return ParentLabelLayoutVal2;
})(ParentLabelLayoutVal || {});
const ParentLabelLayoutValArray = [
  "none" /* None */,
  "banner" /* Banner */,
  "overlapping" /* Overlapping */
];
var RegionLabelLayoutEnum = /* @__PURE__ */ ((RegionLabelLayoutEnum2) => {
  RegionLabelLayoutEnum2["None"] = "none";
  RegionLabelLayoutEnum2["BestFitOnly"] = "bestFitOnly";
  RegionLabelLayoutEnum2["ShowAll"] = "showAll";
  return RegionLabelLayoutEnum2;
})(RegionLabelLayoutEnum || {});
const RegionLabelLayoutEnumArray = [
  "none" /* None */,
  "bestFitOnly" /* BestFitOnly */,
  "showAll" /* ShowAll */
];
var IntervalClosedSide = /* @__PURE__ */ ((IntervalClosedSide2) => {
  IntervalClosedSide2["L"] = "l";
  IntervalClosedSide2["R"] = "r";
  return IntervalClosedSide2;
})(IntervalClosedSide || {});
const IntervalClosedSideArray = [
  "l" /* L */,
  "r" /* R */
];
var EntityTypeEnum = /* @__PURE__ */ ((EntityTypeEnum2) => {
  EntityTypeEnum2["Address"] = "Address";
  EntityTypeEnum2["AdminDistrict"] = "AdminDistrict";
  EntityTypeEnum2["AdminDistrict2"] = "AdminDistrict2";
  EntityTypeEnum2["AdminDistrict3"] = "AdminDistrict3";
  EntityTypeEnum2["Continent"] = "Continent";
  EntityTypeEnum2["CountryRegion"] = "CountryRegion";
  EntityTypeEnum2["Locality"] = "Locality";
  EntityTypeEnum2["Ocean"] = "Ocean";
  EntityTypeEnum2["Planet"] = "Planet";
  EntityTypeEnum2["PostalCode"] = "PostalCode";
  EntityTypeEnum2["Region"] = "Region";
  EntityTypeEnum2["Unsupported"] = "Unsupported";
  return EntityTypeEnum2;
})(EntityTypeEnum || {});
const EntityTypeEnumArray = [
  "Address" /* Address */,
  "AdminDistrict" /* AdminDistrict */,
  "AdminDistrict2" /* AdminDistrict2 */,
  "AdminDistrict3" /* AdminDistrict3 */,
  "Continent" /* Continent */,
  "CountryRegion" /* CountryRegion */,
  "Locality" /* Locality */,
  "Ocean" /* Ocean */,
  "Planet" /* Planet */,
  "PostalCode" /* PostalCode */,
  "Region" /* Region */,
  "Unsupported" /* Unsupported */
];
var GeoProjectionType = /* @__PURE__ */ ((GeoProjectionType2) => {
  GeoProjectionType2["Mercator"] = "mercator";
  GeoProjectionType2["Miller"] = "miller";
  GeoProjectionType2["Robinson"] = "robinson";
  GeoProjectionType2["Albers"] = "albers";
  return GeoProjectionType2;
})(GeoProjectionType || {});
const GeoProjectionTypeArray = [
  "mercator" /* Mercator */,
  "miller" /* Miller */,
  "robinson" /* Robinson */,
  "albers" /* Albers */
];
var GeoMappingLevel = /* @__PURE__ */ ((GeoMappingLevel2) => {
  GeoMappingLevel2["DataOnly"] = "dataOnly";
  GeoMappingLevel2["PostalCode"] = "postalCode";
  GeoMappingLevel2["County"] = "county";
  GeoMappingLevel2["State"] = "state";
  GeoMappingLevel2["CountryRegion"] = "countryRegion";
  GeoMappingLevel2["CountryRegionList"] = "countryRegionList";
  GeoMappingLevel2["World"] = "world";
  return GeoMappingLevel2;
})(GeoMappingLevel || {});
const GeoMappingLevelArray = [
  "dataOnly" /* DataOnly */,
  "postalCode" /* PostalCode */,
  "county" /* County */,
  "state" /* State */,
  "countryRegion" /* CountryRegion */,
  "countryRegionList" /* CountryRegionList */,
  "world" /* World */
];
var QuartileMethod = /* @__PURE__ */ ((QuartileMethod2) => {
  QuartileMethod2["Inclusive"] = "inclusive";
  QuartileMethod2["Exclusive"] = "exclusive";
  return QuartileMethod2;
})(QuartileMethod || {});
const QuartileMethodArray = [
  "inclusive" /* Inclusive */,
  "exclusive" /* Exclusive */
];
var DataLabelPos = /* @__PURE__ */ ((DataLabelPos2) => {
  DataLabelPos2["BestFit"] = "bestFit";
  DataLabelPos2["B"] = "b";
  DataLabelPos2["Ctr"] = "ctr";
  DataLabelPos2["InBase"] = "inBase";
  DataLabelPos2["InEnd"] = "inEnd";
  DataLabelPos2["L"] = "l";
  DataLabelPos2["OutEnd"] = "outEnd";
  DataLabelPos2["R"] = "r";
  DataLabelPos2["T"] = "t";
  return DataLabelPos2;
})(DataLabelPos || {});
const DataLabelPosArray = [
  "bestFit" /* BestFit */,
  "b" /* B */,
  "ctr" /* Ctr */,
  "inBase" /* InBase */,
  "inEnd" /* InEnd */,
  "l" /* L */,
  "outEnd" /* OutEnd */,
  "r" /* R */,
  "t" /* T */
];
var PageOrientation = /* @__PURE__ */ ((PageOrientation2) => {
  PageOrientation2["Default"] = "default";
  PageOrientation2["Portrait"] = "portrait";
  PageOrientation2["Landscape"] = "landscape";
  return PageOrientation2;
})(PageOrientation || {});
const PageOrientationArray = [
  "default" /* Default */,
  "portrait" /* Portrait */,
  "landscape" /* Landscape */
];
class UnsignedIntegerType extends OxmlLeafElement {
  static _Q = "cx:idx";
  static _A = [":val"];
  /** Integer Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PrintSettings extends OxmlCompositeElement {
  static _Q = "cx:printSettings";
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Returns PageMargins. */
  get pageMargins() {
    return this._f(PageMargins);
  }
  /** Returns PageSetup. */
  get pageSetup() {
    return this._f(PageSetup);
  }
}
class FormatOverrides extends OxmlCompositeElement {
  static _Q = "cx:fmtOvrs";
}
class ColorMappingType extends OxmlCompositeElement {
  static _Q = "cx:clrMapOvr";
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
class Chart extends OxmlCompositeElement {
  static _Q = "cx:chart";
  /** Returns ChartTitle. */
  get chartTitle() {
    return this._f(ChartTitle);
  }
  /** Returns PlotArea. */
  get plotArea() {
    return this._f(PlotArea);
  }
  /** Returns Legend. */
  get legend() {
    return this._f(Legend);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ChartData extends OxmlCompositeElement {
  static _Q = "cx:chartData";
  /** Returns ExternalData. */
  get externalData() {
    return this._f(ExternalData);
  }
}
class PageSetup extends OxmlLeafElement {
  static _Q = "cx:pageSetup";
  static _A = [":paperSize", ":firstPageNumber", ":orientation", ":blackAndWhite", ":draft", ":useFirstPageNumber", ":horizontalDpi", ":verticalDpi", ":copies"];
  /** paperSize. Serialized as `:paperSize` */
  get paperSize() {
    return this._g(":paperSize");
  }
  set paperSize(v) {
    this._s(":paperSize", v);
  }
  /** firstPageNumber. Serialized as `:firstPageNumber` */
  get firstPageNumber() {
    return this._g(":firstPageNumber");
  }
  set firstPageNumber(v) {
    this._s(":firstPageNumber", v);
  }
  /** orientation. Serialized as `:orientation` */
  get orientation() {
    return this._g(":orientation");
  }
  set orientation(v) {
    this._s(":orientation", v);
  }
  /** blackAndWhite. Serialized as `:blackAndWhite` */
  get blackAndWhite() {
    return this._g(":blackAndWhite");
  }
  set blackAndWhite(v) {
    this._s(":blackAndWhite", v);
  }
  /** draft. Serialized as `:draft` */
  get draft() {
    return this._g(":draft");
  }
  set draft(v) {
    this._s(":draft", v);
  }
  /** useFirstPageNumber. Serialized as `:useFirstPageNumber` */
  get useFirstPageNumber() {
    return this._g(":useFirstPageNumber");
  }
  set useFirstPageNumber(v) {
    this._s(":useFirstPageNumber", v);
  }
  /** horizontalDpi. Serialized as `:horizontalDpi` */
  get horizontalDpi() {
    return this._g(":horizontalDpi");
  }
  set horizontalDpi(v) {
    this._s(":horizontalDpi", v);
  }
  /** verticalDpi. Serialized as `:verticalDpi` */
  get verticalDpi() {
    return this._g(":verticalDpi");
  }
  set verticalDpi(v) {
    this._s(":verticalDpi", v);
  }
  /** copies. Serialized as `:copies` */
  get copies() {
    return this._g(":copies");
  }
  set copies(v) {
    this._s(":copies", v);
  }
}
class PageMargins extends OxmlLeafElement {
  static _Q = "cx:pageMargins";
  static _A = [":l", ":r", ":t", ":b", ":header", ":footer"];
  /** l. Serialized as `:l` */
  get l() {
    return this._g(":l");
  }
  set l(v) {
    this._s(":l", v);
  }
  /** r. Serialized as `:r` */
  get r() {
    return this._g(":r");
  }
  set r(v) {
    this._s(":r", v);
  }
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
  /** b. Serialized as `:b` */
  get b() {
    return this._g(":b");
  }
  set b(v) {
    this._s(":b", v);
  }
  /** header. Serialized as `:header` */
  get header() {
    return this._g(":header");
  }
  set header(v) {
    this._s(":header", v);
  }
  /** footer. Serialized as `:footer` */
  get footer() {
    return this._g(":footer");
  }
  set footer(v) {
    this._s(":footer", v);
  }
}
class HeaderFooter extends OxmlCompositeElement {
  static _Q = "cx:headerFooter";
  static _A = [":alignWithMargins", ":differentOddEven", ":differentFirst"];
  /** alignWithMargins. Serialized as `:alignWithMargins` */
  get alignWithMargins() {
    return this._g(":alignWithMargins");
  }
  set alignWithMargins(v) {
    this._s(":alignWithMargins", v);
  }
  /** differentOddEven. Serialized as `:differentOddEven` */
  get differentOddEven() {
    return this._g(":differentOddEven");
  }
  set differentOddEven(v) {
    this._s(":differentOddEven", v);
  }
  /** differentFirst. Serialized as `:differentFirst` */
  get differentFirst() {
    return this._g(":differentFirst");
  }
  set differentFirst(v) {
    this._s(":differentFirst", v);
  }
  /** Returns OddHeaderXsdstring. */
  get oddHeaderXsdstring() {
    return this._f(OddHeaderXsdstring);
  }
  /** Returns OddFooterXsdstring. */
  get oddFooterXsdstring() {
    return this._f(OddFooterXsdstring);
  }
  /** Returns EvenHeaderXsdstring. */
  get evenHeaderXsdstring() {
    return this._f(EvenHeaderXsdstring);
  }
  /** Returns EvenFooterXsdstring. */
  get evenFooterXsdstring() {
    return this._f(EvenFooterXsdstring);
  }
  /** Returns FirstHeaderXsdstring. */
  get firstHeaderXsdstring() {
    return this._f(FirstHeaderXsdstring);
  }
  /** Returns FirstFooterXsdstring. */
  get firstFooterXsdstring() {
    return this._f(FirstFooterXsdstring);
  }
}
class FormatOverride extends OxmlCompositeElement {
  static _Q = "cx:fmtOvr";
  static _A = [":idx"];
  /** idx. Serialized as `:idx` */
  get idx() {
    return this._g(":idx");
  }
  set idx(v) {
    this._s(":idx", v);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Legend extends OxmlCompositeElement {
  static _Q = "cx:legend";
  static _A = [":pos", ":align", ":overlay"];
  /** pos. Serialized as `:pos` */
  get pos() {
    return this._g(":pos");
  }
  set pos(v) {
    this._s(":pos", v);
  }
  /** align. Serialized as `:align` */
  get align() {
    return this._g(":align");
  }
  set align(v) {
    this._s(":align", v);
  }
  /** overlay. Serialized as `:overlay` */
  get overlay() {
    return this._g(":overlay");
  }
  set overlay(v) {
    this._s(":overlay", v);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PlotArea extends OxmlCompositeElement {
  static _Q = "cx:plotArea";
  /** Returns PlotAreaRegion. */
  get plotAreaRegion() {
    return this._f(PlotAreaRegion);
  }
}
class ChartTitle extends OxmlCompositeElement {
  static _Q = "cx:title";
  static _A = [":pos", ":align", ":overlay"];
  /** pos. Serialized as `:pos` */
  get pos() {
    return this._g(":pos");
  }
  set pos(v) {
    this._s(":pos", v);
  }
  /** align. Serialized as `:align` */
  get align() {
    return this._g(":align");
  }
  set align(v) {
    this._s(":align", v);
  }
  /** overlay. Serialized as `:overlay` */
  get overlay() {
    return this._g(":overlay");
  }
  set overlay(v) {
    this._s(":overlay", v);
  }
  /** Returns Text. */
  get text() {
    return this._f(Text);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Axis extends OxmlCompositeElement {
  static _Q = "cx:axis";
  static _A = [":id", ":hidden"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
}
class PlotAreaRegion extends OxmlCompositeElement {
  static _Q = "cx:plotAreaRegion";
  /** Returns PlotSurface. */
  get plotSurface() {
    return this._f(PlotSurface);
  }
}
class Series extends OxmlCompositeElement {
  static _Q = "cx:series";
  static _A = [":layoutId", ":hidden", ":ownerIdx", ":uniqueId", ":formatIdx"];
  /** layoutId. Serialized as `:layoutId` */
  get layoutId() {
    return this._g(":layoutId");
  }
  set layoutId(v) {
    this._s(":layoutId", v);
  }
  /** hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** ownerIdx. Serialized as `:ownerIdx` */
  get ownerIdx() {
    return this._g(":ownerIdx");
  }
  set ownerIdx(v) {
    this._s(":ownerIdx", v);
  }
  /** uniqueId. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** formatIdx. Serialized as `:formatIdx` */
  get formatIdx() {
    return this._g(":formatIdx");
  }
  set formatIdx(v) {
    this._s(":formatIdx", v);
  }
  /** Returns Text. */
  get text() {
    return this._f(Text);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ValueColors. */
  get valueColors() {
    return this._f(ValueColors);
  }
  /** Returns ValueColorPositions. */
  get valueColorPositions() {
    return this._f(ValueColorPositions);
  }
}
class PlotSurface extends OxmlCompositeElement {
  static _Q = "cx:plotSurface";
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class AxisId extends OxmlLeafTextElement {
  static _Q = "cx:axisId";
}
class SeriesLayoutProperties extends OxmlCompositeElement {
  static _Q = "cx:layoutPr";
  /** Returns ParentLabelLayout. */
  get parentLabelLayout() {
    return this._f(ParentLabelLayout);
  }
  /** Returns RegionLabelLayout. */
  get regionLabelLayout() {
    return this._f(RegionLabelLayout);
  }
  /** Returns SeriesElementVisibilities. */
  get seriesElementVisibilities() {
    return this._f(SeriesElementVisibilities);
  }
}
class DataId extends OxmlLeafElement {
  static _Q = "cx:dataId";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DataLabels extends OxmlCompositeElement {
  static _Q = "cx:dataLabels";
  static _A = [":pos"];
  /** pos. Serialized as `:pos` */
  get pos() {
    return this._g(":pos");
  }
  set pos(v) {
    this._s(":pos", v);
  }
  /** Returns NumberFormat. */
  get numberFormat() {
    return this._f(NumberFormat);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns DataLabelVisibilities. */
  get dataLabelVisibilities() {
    return this._f(DataLabelVisibilities);
  }
  /** Returns SeparatorXsdstring. */
  get separatorXsdstring() {
    return this._f(SeparatorXsdstring);
  }
}
class DataPoint extends OxmlCompositeElement {
  static _Q = "cx:dataPt";
  static _A = [":idx"];
  /** idx. Serialized as `:idx` */
  get idx() {
    return this._g(":idx");
  }
  set idx(v) {
    this._s(":idx", v);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ValueColorPositions extends OxmlCompositeElement {
  static _Q = "cx:valueColorPositions";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Returns MinValueColorEndPosition. */
  get minValueColorEndPosition() {
    return this._f(MinValueColorEndPosition);
  }
  /** Returns ValueColorMiddlePosition. */
  get valueColorMiddlePosition() {
    return this._f(ValueColorMiddlePosition);
  }
  /** Returns MaxValueColorEndPosition. */
  get maxValueColorEndPosition() {
    return this._f(MaxValueColorEndPosition);
  }
}
class ValueColors extends OxmlCompositeElement {
  static _Q = "cx:valueColors";
  /** Returns MinColorSolidColorFillProperties. */
  get minColorSolidColorFillProperties() {
    return this._f(MinColorSolidColorFillProperties);
  }
  /** Returns MidColorSolidColorFillProperties. */
  get midColorSolidColorFillProperties() {
    return this._f(MidColorSolidColorFillProperties);
  }
  /** Returns MaxColorSolidColorFillProperties. */
  get maxColorSolidColorFillProperties() {
    return this._f(MaxColorSolidColorFillProperties);
  }
}
class DataLabelHidden extends OxmlLeafElement {
  static _Q = "cx:dataLabelHidden";
  static _A = [":idx"];
  /** idx. Serialized as `:idx` */
  get idx() {
    return this._g(":idx");
  }
  set idx(v) {
    this._s(":idx", v);
  }
}
class DataLabel extends OxmlCompositeElement {
  static _Q = "cx:dataLabel";
  static _A = [":idx", ":pos"];
  /** idx. Serialized as `:idx` */
  get idx() {
    return this._g(":idx");
  }
  set idx(v) {
    this._s(":idx", v);
  }
  /** pos. Serialized as `:pos` */
  get pos() {
    return this._g(":pos");
  }
  set pos(v) {
    this._s(":pos", v);
  }
  /** Returns NumberFormat. */
  get numberFormat() {
    return this._f(NumberFormat);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns DataLabelVisibilities. */
  get dataLabelVisibilities() {
    return this._f(DataLabelVisibilities);
  }
  /** Returns SeparatorXsdstring. */
  get separatorXsdstring() {
    return this._f(SeparatorXsdstring);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DataLabelVisibilities extends OxmlLeafElement {
  static _Q = "cx:visibility";
  static _A = [":seriesName", ":categoryName", ":value"];
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
  /** value. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
}
class ValueColorMiddlePosition extends OxmlCompositeElement {
  static _Q = "cx:mid";
  /** Returns NumberColorPosition. */
  get numberColorPosition() {
    return this._f(NumberColorPosition);
  }
  /** Returns PercentageColorPosition. */
  get percentageColorPosition() {
    return this._f(PercentageColorPosition);
  }
}
class OpenXmlValueColorEndPositionElement extends OxmlCompositeElement {
  /** Returns ExtremeValueColorPosition. */
  get extremeValueColorPosition() {
    return this._f(ExtremeValueColorPosition);
  }
  /** Returns NumberColorPosition. */
  get numberColorPosition() {
    return this._f(NumberColorPosition);
  }
  /** Returns PercentageColorPosition. */
  get percentageColorPosition() {
    return this._f(PercentageColorPosition);
  }
}
class MaxValueColorEndPosition extends OpenXmlValueColorEndPositionElement {
  static _Q = "cx:max";
}
class MinValueColorEndPosition extends OpenXmlValueColorEndPositionElement {
  static _Q = "cx:min";
}
class PercentageColorPosition extends OxmlLeafElement {
  static _Q = "cx:percent";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class NumberColorPosition extends OxmlLeafElement {
  static _Q = "cx:number";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ExtremeValueColorPosition extends OxmlLeafElement {
  static _Q = "cx:extremeValue";
}
class Subtotals extends OxmlCompositeElement {
  static _Q = "cx:subtotals";
}
class Statistics extends OxmlLeafElement {
  static _Q = "cx:statistics";
  static _A = [":quartileMethod"];
  /** quartileMethod. Serialized as `:quartileMethod` */
  get quartileMethod() {
    return this._g(":quartileMethod");
  }
  set quartileMethod(v) {
    this._s(":quartileMethod", v);
  }
}
class Geography extends OxmlCompositeElement {
  static _Q = "cx:geography";
  static _A = [":projectionType", ":viewedRegionType", ":cultureLanguage", ":cultureRegion", ":attribution"];
  /** projectionType. Serialized as `:projectionType` */
  get projectionType() {
    return this._g(":projectionType");
  }
  set projectionType(v) {
    this._s(":projectionType", v);
  }
  /** viewedRegionType. Serialized as `:viewedRegionType` */
  get viewedRegionType() {
    return this._g(":viewedRegionType");
  }
  set viewedRegionType(v) {
    this._s(":viewedRegionType", v);
  }
  /** cultureLanguage. Serialized as `:cultureLanguage` */
  get cultureLanguage() {
    return this._g(":cultureLanguage");
  }
  set cultureLanguage(v) {
    this._s(":cultureLanguage", v);
  }
  /** cultureRegion. Serialized as `:cultureRegion` */
  get cultureRegion() {
    return this._g(":cultureRegion");
  }
  set cultureRegion(v) {
    this._s(":cultureRegion", v);
  }
  /** attribution. Serialized as `:attribution` */
  get attribution() {
    return this._g(":attribution");
  }
  set attribution(v) {
    this._s(":attribution", v);
  }
  /** Returns GeoCache. */
  get geoCache() {
    return this._f(GeoCache);
  }
}
class Binning extends OxmlCompositeElement {
  static _Q = "cx:binning";
  static _A = [":intervalClosed", ":underflow", ":overflow"];
  /** intervalClosed. Serialized as `:intervalClosed` */
  get intervalClosed() {
    return this._g(":intervalClosed");
  }
  set intervalClosed(v) {
    this._s(":intervalClosed", v);
  }
  /** underflow. Serialized as `:underflow` */
  get underflow() {
    return this._g(":underflow");
  }
  set underflow(v) {
    this._s(":underflow", v);
  }
  /** overflow. Serialized as `:overflow` */
  get overflow() {
    return this._g(":overflow");
  }
  set overflow(v) {
    this._s(":overflow", v);
  }
  /** Returns Xsddouble. */
  get xsddouble() {
    return this._f(Xsddouble);
  }
  /** Returns BinCountXsdunsignedInt. */
  get binCountXsdunsignedInt() {
    return this._f(BinCountXsdunsignedInt);
  }
}
class Aggregation extends OxmlLeafElement {
  static _Q = "cx:aggregation";
}
class SeriesElementVisibilities extends OxmlLeafElement {
  static _Q = "cx:visibility";
  static _A = [":connectorLines", ":meanLine", ":meanMarker", ":nonoutliers", ":outliers"];
  /** connectorLines. Serialized as `:connectorLines` */
  get connectorLines() {
    return this._g(":connectorLines");
  }
  set connectorLines(v) {
    this._s(":connectorLines", v);
  }
  /** meanLine. Serialized as `:meanLine` */
  get meanLine() {
    return this._g(":meanLine");
  }
  set meanLine(v) {
    this._s(":meanLine", v);
  }
  /** meanMarker. Serialized as `:meanMarker` */
  get meanMarker() {
    return this._g(":meanMarker");
  }
  set meanMarker(v) {
    this._s(":meanMarker", v);
  }
  /** nonoutliers. Serialized as `:nonoutliers` */
  get nonoutliers() {
    return this._g(":nonoutliers");
  }
  set nonoutliers(v) {
    this._s(":nonoutliers", v);
  }
  /** outliers. Serialized as `:outliers` */
  get outliers() {
    return this._g(":outliers");
  }
  set outliers(v) {
    this._s(":outliers", v);
  }
}
class RegionLabelLayout extends OxmlLeafElement {
  static _Q = "cx:regionLabelLayout";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ParentLabelLayout extends OxmlLeafElement {
  static _Q = "cx:parentLabelLayout";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get parentLabelLayoutVal() {
    return this._g(":val");
  }
  set parentLabelLayoutVal(v) {
    this._s(":val", v);
  }
}
class GeoCache extends OxmlCompositeElement {
  static _Q = "cx:geoCache";
  static _A = [":provider"];
  /** provider. Serialized as `:provider` */
  get provider() {
    return this._g(":provider");
  }
  set provider(v) {
    this._s(":provider", v);
  }
}
class Clear extends OxmlCompositeElement {
  static _Q = "cx:clear";
  /** Returns GeoLocationQueryResults. */
  get geoLocationQueryResults() {
    return this._f(GeoLocationQueryResults);
  }
  /** Returns GeoDataEntityQueryResults. */
  get geoDataEntityQueryResults() {
    return this._f(GeoDataEntityQueryResults);
  }
  /** Returns GeoDataPointToEntityQueryResults. */
  get geoDataPointToEntityQueryResults() {
    return this._f(GeoDataPointToEntityQueryResults);
  }
  /** Returns GeoChildEntitiesQueryResults. */
  get geoChildEntitiesQueryResults() {
    return this._f(GeoChildEntitiesQueryResults);
  }
  /** Returns GeoParentEntitiesQueryResults. */
  get geoParentEntitiesQueryResults() {
    return this._f(GeoParentEntitiesQueryResults);
  }
}
class Xsdbase64Binary extends OxmlLeafTextElement {
  static _Q = "cx:binary";
}
class GeoParentEntitiesQueryResults extends OxmlCompositeElement {
  static _Q = "cx:geoParentEntitiesQueryResults";
}
class GeoChildEntitiesQueryResults extends OxmlCompositeElement {
  static _Q = "cx:geoChildEntitiesQueryResults";
}
class GeoDataPointToEntityQueryResults extends OxmlCompositeElement {
  static _Q = "cx:geoDataPointToEntityQueryResults";
}
class GeoDataEntityQueryResults extends OxmlCompositeElement {
  static _Q = "cx:geoDataEntityQueryResults";
}
class GeoLocationQueryResults extends OxmlCompositeElement {
  static _Q = "cx:geoLocationQueryResults";
}
class GeoParentEntitiesQueryResult extends OxmlCompositeElement {
  static _Q = "cx:geoParentEntitiesQueryResult";
  /** Returns GeoParentEntitiesQuery. */
  get geoParentEntitiesQuery() {
    return this._f(GeoParentEntitiesQuery);
  }
  /** Returns GeoEntity. */
  get geoEntity() {
    return this._f(GeoEntity);
  }
  /** Returns GeoParentEntity. */
  get geoParentEntity() {
    return this._f(GeoParentEntity);
  }
}
class GeoParentEntity extends OxmlLeafElement {
  static _Q = "cx:geoParentEntity";
  static _A = [":entityId"];
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
}
class GeoEntity extends OxmlLeafElement {
  static _Q = "cx:geoEntity";
  static _A = [":entityName", ":entityType"];
  /** entityName. Serialized as `:entityName` */
  get entityName() {
    return this._g(":entityName");
  }
  set entityName(v) {
    this._s(":entityName", v);
  }
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
}
class GeoParentEntitiesQuery extends OxmlLeafElement {
  static _Q = "cx:geoParentEntitiesQuery";
  static _A = [":entityId"];
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
}
class GeoChildEntitiesQueryResult extends OxmlCompositeElement {
  static _Q = "cx:geoChildEntitiesQueryResult";
  /** Returns GeoChildEntitiesQuery. */
  get geoChildEntitiesQuery() {
    return this._f(GeoChildEntitiesQuery);
  }
  /** Returns GeoChildEntities. */
  get geoChildEntities() {
    return this._f(GeoChildEntities);
  }
}
class GeoChildEntities extends OxmlCompositeElement {
  static _Q = "cx:geoChildEntities";
}
class GeoChildEntitiesQuery extends OxmlCompositeElement {
  static _Q = "cx:geoChildEntitiesQuery";
  static _A = [":entityId"];
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
  /** Returns GeoChildTypes. */
  get geoChildTypes() {
    return this._f(GeoChildTypes);
  }
}
class GeoHierarchyEntity extends OxmlLeafElement {
  static _Q = "cx:geoHierarchyEntity";
  static _A = [":entityName", ":entityId", ":entityType"];
  /** entityName. Serialized as `:entityName` */
  get entityName() {
    return this._g(":entityName");
  }
  set entityName(v) {
    this._s(":entityName", v);
  }
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
}
class GeoChildTypes extends OxmlCompositeElement {
  static _Q = "cx:geoChildTypes";
}
class EntityType extends OxmlLeafTextElement {
  static _Q = "cx:entityType";
}
class GeoDataPointToEntityQueryResult extends OxmlCompositeElement {
  static _Q = "cx:geoDataPointToEntityQueryResult";
  /** Returns GeoDataPointQuery. */
  get geoDataPointQuery() {
    return this._f(GeoDataPointQuery);
  }
  /** Returns GeoDataPointToEntityQuery. */
  get geoDataPointToEntityQuery() {
    return this._f(GeoDataPointToEntityQuery);
  }
}
class GeoDataPointToEntityQuery extends OxmlLeafElement {
  static _Q = "cx:geoDataPointToEntityQuery";
  static _A = [":entityType", ":entityId"];
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
}
class GeoDataPointQuery extends OxmlLeafElement {
  static _Q = "cx:geoDataPointQuery";
  static _A = [":entityType", ":latitude", ":longitude"];
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
  /** latitude. Serialized as `:latitude` */
  get latitude() {
    return this._g(":latitude");
  }
  set latitude(v) {
    this._s(":latitude", v);
  }
  /** longitude. Serialized as `:longitude` */
  get longitude() {
    return this._g(":longitude");
  }
  set longitude(v) {
    this._s(":longitude", v);
  }
}
class GeoDataEntityQueryResult extends OxmlCompositeElement {
  static _Q = "cx:geoDataEntityQueryResult";
  /** Returns GeoDataEntityQuery. */
  get geoDataEntityQuery() {
    return this._f(GeoDataEntityQuery);
  }
  /** Returns GeoData. */
  get geoData() {
    return this._f(GeoData);
  }
}
class GeoData extends OxmlCompositeElement {
  static _Q = "cx:geoData";
  static _A = [":entityName", ":entityId", ":east", ":west", ":north", ":south"];
  /** entityName. Serialized as `:entityName` */
  get entityName() {
    return this._g(":entityName");
  }
  set entityName(v) {
    this._s(":entityName", v);
  }
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
  /** east. Serialized as `:east` */
  get east() {
    return this._g(":east");
  }
  set east(v) {
    this._s(":east", v);
  }
  /** west. Serialized as `:west` */
  get west() {
    return this._g(":west");
  }
  set west(v) {
    this._s(":west", v);
  }
  /** north. Serialized as `:north` */
  get north() {
    return this._g(":north");
  }
  set north(v) {
    this._s(":north", v);
  }
  /** south. Serialized as `:south` */
  get south() {
    return this._g(":south");
  }
  set south(v) {
    this._s(":south", v);
  }
  /** Returns GeoPolygons. */
  get geoPolygons() {
    return this._f(GeoPolygons);
  }
  /** Returns Copyrights. */
  get copyrights() {
    return this._f(Copyrights);
  }
}
class GeoDataEntityQuery extends OxmlLeafElement {
  static _Q = "cx:geoDataEntityQuery";
  static _A = [":entityType", ":entityId"];
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
  /** entityId. Serialized as `:entityId` */
  get entityId() {
    return this._g(":entityId");
  }
  set entityId(v) {
    this._s(":entityId", v);
  }
}
class Copyrights extends OxmlCompositeElement {
  static _Q = "cx:copyrights";
}
class GeoPolygons extends OxmlCompositeElement {
  static _Q = "cx:geoPolygons";
}
class GeoPolygon extends OxmlLeafElement {
  static _Q = "cx:geoPolygon";
  static _A = [":polygonId", ":numPoints", ":pcaRings"];
  /** polygonId. Serialized as `:polygonId` */
  get polygonId() {
    return this._g(":polygonId");
  }
  set polygonId(v) {
    this._s(":polygonId", v);
  }
  /** numPoints. Serialized as `:numPoints` */
  get numPoints() {
    return this._g(":numPoints");
  }
  set numPoints(v) {
    this._s(":numPoints", v);
  }
  /** pcaRings. Serialized as `:pcaRings` */
  get pcaRings() {
    return this._g(":pcaRings");
  }
  set pcaRings(v) {
    this._s(":pcaRings", v);
  }
}
class GeoLocationQueryResult extends OxmlCompositeElement {
  static _Q = "cx:geoLocationQueryResult";
  /** Returns GeoLocationQuery. */
  get geoLocationQuery() {
    return this._f(GeoLocationQuery);
  }
  /** Returns GeoLocations. */
  get geoLocations() {
    return this._f(GeoLocations);
  }
}
class GeoLocations extends OxmlCompositeElement {
  static _Q = "cx:geoLocations";
  /** Returns GeoLocation. */
  get geoLocation() {
    return this._f(GeoLocation);
  }
}
class GeoLocationQuery extends OxmlLeafElement {
  static _Q = "cx:geoLocationQuery";
  static _A = [":countryRegion", ":adminDistrict1", ":adminDistrict2", ":postalCode", ":entityType"];
  /** countryRegion. Serialized as `:countryRegion` */
  get countryRegion() {
    return this._g(":countryRegion");
  }
  set countryRegion(v) {
    this._s(":countryRegion", v);
  }
  /** adminDistrict1. Serialized as `:adminDistrict1` */
  get adminDistrict1() {
    return this._g(":adminDistrict1");
  }
  set adminDistrict1(v) {
    this._s(":adminDistrict1", v);
  }
  /** adminDistrict2. Serialized as `:adminDistrict2` */
  get adminDistrict2() {
    return this._g(":adminDistrict2");
  }
  set adminDistrict2(v) {
    this._s(":adminDistrict2", v);
  }
  /** postalCode. Serialized as `:postalCode` */
  get postalCode() {
    return this._g(":postalCode");
  }
  set postalCode(v) {
    this._s(":postalCode", v);
  }
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
}
class GeoLocation extends OxmlCompositeElement {
  static _Q = "cx:geoLocation";
  static _A = [":latitude", ":longitude", ":entityName", ":entityType"];
  /** latitude. Serialized as `:latitude` */
  get latitude() {
    return this._g(":latitude");
  }
  set latitude(v) {
    this._s(":latitude", v);
  }
  /** longitude. Serialized as `:longitude` */
  get longitude() {
    return this._g(":longitude");
  }
  set longitude(v) {
    this._s(":longitude", v);
  }
  /** entityName. Serialized as `:entityName` */
  get entityName() {
    return this._g(":entityName");
  }
  set entityName(v) {
    this._s(":entityName", v);
  }
  /** entityType. Serialized as `:entityType` */
  get entityType() {
    return this._g(":entityType");
  }
  set entityType(v) {
    this._s(":entityType", v);
  }
  /** Returns Address. */
  get address() {
    return this._f(Address);
  }
}
class Address extends OxmlLeafElement {
  static _Q = "cx:address";
  static _A = [":address1", ":countryRegion", ":adminDistrict1", ":adminDistrict2", ":postalCode", ":locality", ":isoCountryCode"];
  /** address1. Serialized as `:address1` */
  get address1() {
    return this._g(":address1");
  }
  set address1(v) {
    this._s(":address1", v);
  }
  /** countryRegion. Serialized as `:countryRegion` */
  get countryRegion() {
    return this._g(":countryRegion");
  }
  set countryRegion(v) {
    this._s(":countryRegion", v);
  }
  /** adminDistrict1. Serialized as `:adminDistrict1` */
  get adminDistrict1() {
    return this._g(":adminDistrict1");
  }
  set adminDistrict1(v) {
    this._s(":adminDistrict1", v);
  }
  /** adminDistrict2. Serialized as `:adminDistrict2` */
  get adminDistrict2() {
    return this._g(":adminDistrict2");
  }
  set adminDistrict2(v) {
    this._s(":adminDistrict2", v);
  }
  /** postalCode. Serialized as `:postalCode` */
  get postalCode() {
    return this._g(":postalCode");
  }
  set postalCode(v) {
    this._s(":postalCode", v);
  }
  /** locality. Serialized as `:locality` */
  get locality() {
    return this._g(":locality");
  }
  set locality(v) {
    this._s(":locality", v);
  }
  /** isoCountryCode. Serialized as `:isoCountryCode` */
  get isoCountryCode() {
    return this._g(":isoCountryCode");
  }
  set isoCountryCode(v) {
    this._s(":isoCountryCode", v);
  }
}
class Xsddouble extends OxmlLeafTextElement {
  static _Q = "cx:binSize";
}
class NumberFormat extends OxmlLeafElement {
  static _Q = "cx:numFmt";
  static _A = [":formatCode", ":sourceLinked"];
  /** formatCode. Serialized as `:formatCode` */
  get formatCode() {
    return this._g(":formatCode");
  }
  set formatCode(v) {
    this._s(":formatCode", v);
  }
  /** sourceLinked. Serialized as `:sourceLinked` */
  get sourceLinked() {
    return this._g(":sourceLinked");
  }
  set sourceLinked(v) {
    this._s(":sourceLinked", v);
  }
}
class TickLabels extends OxmlCompositeElement {
  static _Q = "cx:tickLabels";
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class OpenXmlTickMarksElement extends OxmlCompositeElement {
  static _A = [":type"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class MinorTickMarksTickMarks extends OpenXmlTickMarksElement {
  static _Q = "cx:minorTickMarks";
}
class MajorTickMarksTickMarks extends OpenXmlTickMarksElement {
  static _Q = "cx:majorTickMarks";
}
class OpenXmlGridlinesElement extends OxmlCompositeElement {
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class MinorGridlinesGridlines extends OpenXmlGridlinesElement {
  static _Q = "cx:minorGridlines";
}
class MajorGridlinesGridlines extends OpenXmlGridlinesElement {
  static _Q = "cx:majorGridlines";
}
class AxisUnits extends OxmlCompositeElement {
  static _Q = "cx:units";
  static _A = [":unit"];
  /** unit. Serialized as `:unit` */
  get unit() {
    return this._g(":unit");
  }
  set unit(v) {
    this._s(":unit", v);
  }
  /** Returns AxisUnitsLabel. */
  get axisUnitsLabel() {
    return this._f(AxisUnitsLabel);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class AxisTitle extends OxmlCompositeElement {
  static _Q = "cx:title";
  /** Returns Text. */
  get text() {
    return this._f(Text);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ValueAxisScaling extends OxmlLeafElement {
  static _Q = "cx:valScaling";
  static _A = [":max", ":min", ":majorUnit", ":minorUnit"];
  /** max. Serialized as `:max` */
  get max() {
    return this._g(":max");
  }
  set max(v) {
    this._s(":max", v);
  }
  /** min. Serialized as `:min` */
  get min() {
    return this._g(":min");
  }
  set min(v) {
    this._s(":min", v);
  }
  /** majorUnit. Serialized as `:majorUnit` */
  get majorUnit() {
    return this._g(":majorUnit");
  }
  set majorUnit(v) {
    this._s(":majorUnit", v);
  }
  /** minorUnit. Serialized as `:minorUnit` */
  get minorUnit() {
    return this._g(":minorUnit");
  }
  set minorUnit(v) {
    this._s(":minorUnit", v);
  }
}
class CategoryAxisScaling extends OxmlLeafElement {
  static _Q = "cx:catScaling";
  static _A = [":gapWidth"];
  /** gapWidth. Serialized as `:gapWidth` */
  get gapWidth() {
    return this._g(":gapWidth");
  }
  set gapWidth(v) {
    this._s(":gapWidth", v);
  }
}
class AxisUnitsLabel extends OxmlCompositeElement {
  static _Q = "cx:unitsLabel";
  /** Returns Text. */
  get text() {
    return this._f(Text);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "cx:spPr";
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
class Text extends OxmlCompositeElement {
  static _Q = "cx:tx";
  /** Returns TextData. */
  get textData() {
    return this._f(TextData);
  }
  /** Returns RichTextBody. */
  get richTextBody() {
    return this._f(RichTextBody);
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
class TxPrTextBody extends TextBodyType {
  static _Q = "cx:txPr";
}
class RichTextBody extends TextBodyType {
  static _Q = "cx:rich";
}
class TextData extends OxmlCompositeElement {
  static _Q = "cx:txData";
}
class FirstFooterXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:firstFooter";
}
class FirstHeaderXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:firstHeader";
}
class EvenFooterXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:evenFooter";
}
class EvenHeaderXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:evenHeader";
}
class OddFooterXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:oddFooter";
}
class OddHeaderXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:oddHeader";
}
class SeparatorXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:separator";
}
class CopyrightXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:copyright";
}
class VXsdstring extends OxmlLeafTextElement {
  static _Q = "cx:v";
}
class Data extends OxmlCompositeElement {
  static _Q = "cx:data";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class ExternalData extends OxmlLeafElement {
  static _Q = "cx:externalData";
  static _A = ["r:id", "cx:autoUpdate"];
  /** RelId of the relationship for the external data. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** True if the external link should automatically update. Serialized as `cx:autoUpdate` */
  get autoUpdate() {
    return this._g("cx:autoUpdate");
  }
  set autoUpdate(v) {
    this._s("cx:autoUpdate", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "cx:extLst";
}
class StringDimension extends OxmlCompositeElement {
  static _Q = "cx:strDim";
  static _A = [":type"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
}
class NumericDimension extends OxmlCompositeElement {
  static _Q = "cx:numDim";
  static _A = [":type"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
}
class NumericLevel extends OxmlCompositeElement {
  static _Q = "cx:lvl";
  static _A = [":ptCount", ":formatCode", ":name"];
  /** ptCount. Serialized as `:ptCount` */
  get ptCount() {
    return this._g(":ptCount");
  }
  set ptCount(v) {
    this._s(":ptCount", v);
  }
  /** formatCode. Serialized as `:formatCode` */
  get formatCode() {
    return this._g(":formatCode");
  }
  set formatCode(v) {
    this._s(":formatCode", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class NumericValue extends OxmlLeafTextElement {
  static _Q = "cx:pt";
  static _A = [":idx"];
  /** idx. Serialized as `:idx` */
  get idx() {
    return this._g(":idx");
  }
  set idx(v) {
    this._s(":idx", v);
  }
}
class StringLevel extends OxmlCompositeElement {
  static _Q = "cx:lvl";
  static _A = [":ptCount", ":name"];
  /** ptCount. Serialized as `:ptCount` */
  get ptCount() {
    return this._g(":ptCount");
  }
  set ptCount(v) {
    this._s(":ptCount", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class OpenXmlFormulaElement extends OxmlLeafTextElement {
  static _A = [":dir"];
  /** dir. Serialized as `:dir` */
  get dir() {
    return this._g(":dir");
  }
  set dir(v) {
    this._s(":dir", v);
  }
}
class NfFormula extends OpenXmlFormulaElement {
  static _Q = "cx:nf";
}
class Formula extends OpenXmlFormulaElement {
  static _Q = "cx:f";
}
class ChartStringValue extends OxmlLeafTextElement {
  static _Q = "cx:pt";
  static _A = [":idx"];
  /** idx. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
}
class OpenXmlSolidColorFillPropertiesElement extends OxmlCompositeElement {
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class MaxColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {
  static _Q = "cx:maxColor";
}
class MidColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {
  static _Q = "cx:midColor";
}
class MinColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {
  static _Q = "cx:minColor";
}
class Extension2 extends OxmlCompositeElement {
  static _Q = "cx:ext";
  static _A = [":uri"];
  /** uri. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
class BinCountXsdunsignedInt extends OxmlLeafTextElement {
  static _Q = "cx:binCount";
}
class Openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3XsdunsignedInt extends OxmlLeafTextElement {
  static _Q = "cx:openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3";
}
class RelId extends OxmlLeafElement {
  static _Q = "cx:chart";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class ChartSpace extends OxmlPartRootElement {
  static _Q = "cx:chartSpace";
  /** Returns ChartData. */
  get chartData() {
    return this._f(ChartData);
  }
  /** Returns Chart. */
  get chart() {
    return this._f(Chart);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns TxPrTextBody. */
  get txPrTextBody() {
    return this._f(TxPrTextBody);
  }
  /** Returns ColorMappingType. */
  get colorMappingType() {
    return this._f(ColorMappingType);
  }
  /** Returns FormatOverrides. */
  get formatOverrides() {
    return this._f(FormatOverrides);
  }
  /** Returns PrintSettings. */
  get printSettings() {
    return this._f(PrintSettings);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
function initOffice2016DrawingChartDrawingNamespace() {
  UnsignedIntegerType._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  PrintSettings._C = {
    "cx:headerFooter": HeaderFooter,
    "cx:pageMargins": PageMargins,
    "cx:pageSetup": PageSetup
  };
  FormatOverrides._C = {
    "cx:fmtOvr": FormatOverride
  };
  ColorMappingType._C = {
    "a:extLst": AExtensionList
  };
  ColorMappingType._D = {
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
  Chart._C = {
    "cx:title": ChartTitle,
    "cx:plotArea": PlotArea,
    "cx:legend": Legend,
    "cx:extLst": ExtensionList
  };
  ChartData._C = {
    "cx:externalData": ExternalData,
    "cx:data": Data,
    "cx:extLst": ExtensionList
  };
  PageSetup._D = {
    ":paperSize": new OxmlAttr(":paperSize", OxmlType.UInt32Value),
    ":firstPageNumber": new OxmlAttr(":firstPageNumber", OxmlType.UInt32Value),
    ":orientation": new OxmlAttr(":orientation", OxmlType.EnumValue, PageOrientationArray),
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
    "cx:oddHeader": OddHeaderXsdstring,
    "cx:oddFooter": OddFooterXsdstring,
    "cx:evenHeader": EvenHeaderXsdstring,
    "cx:evenFooter": EvenFooterXsdstring,
    "cx:firstHeader": FirstHeaderXsdstring,
    "cx:firstFooter": FirstFooterXsdstring
  };
  HeaderFooter._D = {
    ":alignWithMargins": new OxmlAttr(":alignWithMargins", OxmlType.BooleanValue),
    ":differentOddEven": new OxmlAttr(":differentOddEven", OxmlType.BooleanValue),
    ":differentFirst": new OxmlAttr(":differentFirst", OxmlType.BooleanValue)
  };
  FormatOverride._C = {
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  FormatOverride._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  Legend._C = {
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:extLst": ExtensionList
  };
  Legend._D = {
    ":pos": new OxmlAttr(":pos", OxmlType.EnumValue, SidePosArray),
    ":align": new OxmlAttr(":align", OxmlType.EnumValue, PosAlignArray),
    ":overlay": new OxmlAttr(":overlay", OxmlType.BooleanValue)
  };
  PlotArea._C = {
    "cx:plotAreaRegion": PlotAreaRegion,
    "cx:axis": Axis,
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  ChartTitle._C = {
    "cx:tx": Text,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:extLst": ExtensionList
  };
  ChartTitle._D = {
    ":pos": new OxmlAttr(":pos", OxmlType.EnumValue, SidePosArray),
    ":align": new OxmlAttr(":align", OxmlType.EnumValue, PosAlignArray),
    ":overlay": new OxmlAttr(":overlay", OxmlType.BooleanValue)
  };
  Axis._C = {
    "cx:catScaling": CategoryAxisScaling,
    "cx:valScaling": ValueAxisScaling,
    "cx:title": AxisTitle,
    "cx:units": AxisUnits,
    "cx:majorGridlines": MajorGridlinesGridlines,
    "cx:minorGridlines": MinorGridlinesGridlines,
    "cx:majorTickMarks": MajorTickMarksTickMarks,
    "cx:minorTickMarks": MinorTickMarksTickMarks,
    "cx:tickLabels": TickLabels,
    "cx:numFmt": NumberFormat,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:extLst": ExtensionList
  };
  Axis._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue)
  };
  PlotAreaRegion._C = {
    "cx:plotSurface": PlotSurface,
    "cx:series": Series,
    "cx:extLst": ExtensionList
  };
  Series._C = {
    "cx:tx": Text,
    "cx:spPr": ShapeProperties,
    "cx:valueColors": ValueColors,
    "cx:valueColorPositions": ValueColorPositions,
    "cx:dataPt": DataPoint,
    "cx:dataLabels": DataLabels,
    "cx:dataId": DataId,
    "cx:layoutPr": SeriesLayoutProperties,
    "cx:axisId": AxisId,
    "cx:extLst": ExtensionList
  };
  Series._D = {
    ":layoutId": new OxmlAttr(":layoutId", OxmlType.EnumValue, SeriesLayoutArray),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":ownerIdx": new OxmlAttr(":ownerIdx", OxmlType.UInt32Value),
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":formatIdx": new OxmlAttr(":formatIdx", OxmlType.UInt32Value)
  };
  PlotSurface._C = {
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  SeriesLayoutProperties._C = {
    "cx:parentLabelLayout": ParentLabelLayout,
    "cx:regionLabelLayout": RegionLabelLayout,
    "cx:visibility": SeriesElementVisibilities,
    "cx:aggregation": Aggregation,
    "cx:binning": Binning,
    "cx:geography": Geography,
    "cx:statistics": Statistics,
    "cx:subtotals": Subtotals,
    "cx:extLst": ExtensionList
  };
  DataId._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  DataLabels._C = {
    "cx:numFmt": NumberFormat,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:visibility": DataLabelVisibilities,
    "cx:separator": SeparatorXsdstring,
    "cx:dataLabel": DataLabel,
    "cx:dataLabelHidden": DataLabelHidden,
    "cx:extLst": ExtensionList
  };
  DataLabels._D = {
    ":pos": new OxmlAttr(":pos", OxmlType.EnumValue, DataLabelPosArray)
  };
  DataPoint._C = {
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  DataPoint._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  ValueColorPositions._C = {
    "cx:min": MinValueColorEndPosition,
    "cx:mid": ValueColorMiddlePosition,
    "cx:max": MaxValueColorEndPosition
  };
  ValueColorPositions._D = {
    ":count": new OxmlAttr(":count", OxmlType.Int32Value)
  };
  ValueColors._C = {
    "cx:minColor": MinColorSolidColorFillProperties,
    "cx:midColor": MidColorSolidColorFillProperties,
    "cx:maxColor": MaxColorSolidColorFillProperties
  };
  DataLabelHidden._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  DataLabel._C = {
    "cx:numFmt": NumberFormat,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:visibility": DataLabelVisibilities,
    "cx:separator": SeparatorXsdstring,
    "cx:extLst": ExtensionList
  };
  DataLabel._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value),
    ":pos": new OxmlAttr(":pos", OxmlType.EnumValue, DataLabelPosArray)
  };
  DataLabelVisibilities._D = {
    ":seriesName": new OxmlAttr(":seriesName", OxmlType.BooleanValue),
    ":categoryName": new OxmlAttr(":categoryName", OxmlType.BooleanValue),
    ":value": new OxmlAttr(":value", OxmlType.BooleanValue)
  };
  ValueColorMiddlePosition._C = {
    "cx:number": NumberColorPosition,
    "cx:percent": PercentageColorPosition
  };
  OpenXmlValueColorEndPositionElement._C = {
    "cx:extremeValue": ExtremeValueColorPosition,
    "cx:number": NumberColorPosition,
    "cx:percent": PercentageColorPosition
  };
  MaxValueColorEndPosition._C = {
    "cx:extremeValue": ExtremeValueColorPosition,
    "cx:number": NumberColorPosition,
    "cx:percent": PercentageColorPosition
  };
  MinValueColorEndPosition._C = {
    "cx:extremeValue": ExtremeValueColorPosition,
    "cx:number": NumberColorPosition,
    "cx:percent": PercentageColorPosition
  };
  PercentageColorPosition._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  NumberColorPosition._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  Subtotals._C = {
    "cx:idx": UnsignedIntegerType
  };
  Statistics._D = {
    ":quartileMethod": new OxmlAttr(":quartileMethod", OxmlType.EnumValue, QuartileMethodArray)
  };
  Geography._C = {
    "cx:geoCache": GeoCache
  };
  Geography._D = {
    ":projectionType": new OxmlAttr(":projectionType", OxmlType.EnumValue, GeoProjectionTypeArray),
    ":viewedRegionType": new OxmlAttr(":viewedRegionType", OxmlType.EnumValue, GeoMappingLevelArray),
    ":cultureLanguage": new OxmlAttr(":cultureLanguage", OxmlType.StringValue),
    ":cultureRegion": new OxmlAttr(":cultureRegion", OxmlType.StringValue),
    ":attribution": new OxmlAttr(":attribution", OxmlType.StringValue)
  };
  Binning._C = {
    "cx:binSize": Xsddouble,
    "cx:binCount": BinCountXsdunsignedInt
  };
  Binning._D = {
    ":intervalClosed": new OxmlAttr(":intervalClosed", OxmlType.EnumValue, IntervalClosedSideArray),
    ":underflow": new OxmlAttr(":underflow", OxmlType.StringValue),
    ":overflow": new OxmlAttr(":overflow", OxmlType.StringValue)
  };
  SeriesElementVisibilities._D = {
    ":connectorLines": new OxmlAttr(":connectorLines", OxmlType.BooleanValue),
    ":meanLine": new OxmlAttr(":meanLine", OxmlType.BooleanValue),
    ":meanMarker": new OxmlAttr(":meanMarker", OxmlType.BooleanValue),
    ":nonoutliers": new OxmlAttr(":nonoutliers", OxmlType.BooleanValue),
    ":outliers": new OxmlAttr(":outliers", OxmlType.BooleanValue)
  };
  RegionLabelLayout._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, RegionLabelLayoutEnumArray)
  };
  ParentLabelLayout._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ParentLabelLayoutValArray)
  };
  GeoCache._C = {
    "cx:binary": Xsdbase64Binary,
    "cx:clear": Clear
  };
  GeoCache._D = {
    ":provider": new OxmlAttr(":provider", OxmlType.StringValue)
  };
  Clear._C = {
    "cx:geoLocationQueryResults": GeoLocationQueryResults,
    "cx:geoDataEntityQueryResults": GeoDataEntityQueryResults,
    "cx:geoDataPointToEntityQueryResults": GeoDataPointToEntityQueryResults,
    "cx:geoChildEntitiesQueryResults": GeoChildEntitiesQueryResults,
    "cx:geoParentEntitiesQueryResults": GeoParentEntitiesQueryResults
  };
  GeoParentEntitiesQueryResults._C = {
    "cx:geoParentEntitiesQueryResult": GeoParentEntitiesQueryResult
  };
  GeoChildEntitiesQueryResults._C = {
    "cx:geoChildEntitiesQueryResult": GeoChildEntitiesQueryResult
  };
  GeoDataPointToEntityQueryResults._C = {
    "cx:geoDataPointToEntityQueryResult": GeoDataPointToEntityQueryResult
  };
  GeoDataEntityQueryResults._C = {
    "cx:geoDataEntityQueryResult": GeoDataEntityQueryResult
  };
  GeoLocationQueryResults._C = {
    "cx:geoLocationQueryResult": GeoLocationQueryResult
  };
  GeoParentEntitiesQueryResult._C = {
    "cx:geoParentEntitiesQuery": GeoParentEntitiesQuery,
    "cx:geoEntity": GeoEntity,
    "cx:geoParentEntity": GeoParentEntity
  };
  GeoParentEntity._D = {
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue)
  };
  GeoEntity._D = {
    ":entityName": new OxmlAttr(":entityName", OxmlType.StringValue),
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray)
  };
  GeoParentEntitiesQuery._D = {
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue)
  };
  GeoChildEntitiesQueryResult._C = {
    "cx:geoChildEntitiesQuery": GeoChildEntitiesQuery,
    "cx:geoChildEntities": GeoChildEntities
  };
  GeoChildEntities._C = {
    "cx:geoHierarchyEntity": GeoHierarchyEntity
  };
  GeoChildEntitiesQuery._C = {
    "cx:geoChildTypes": GeoChildTypes
  };
  GeoChildEntitiesQuery._D = {
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue)
  };
  GeoHierarchyEntity._D = {
    ":entityName": new OxmlAttr(":entityName", OxmlType.StringValue),
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue),
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray)
  };
  GeoChildTypes._C = {
    "cx:entityType": EntityType
  };
  GeoDataPointToEntityQueryResult._C = {
    "cx:geoDataPointQuery": GeoDataPointQuery,
    "cx:geoDataPointToEntityQuery": GeoDataPointToEntityQuery
  };
  GeoDataPointToEntityQuery._D = {
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray),
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue)
  };
  GeoDataPointQuery._D = {
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray),
    ":latitude": new OxmlAttr(":latitude", OxmlType.DoubleValue),
    ":longitude": new OxmlAttr(":longitude", OxmlType.DoubleValue)
  };
  GeoDataEntityQueryResult._C = {
    "cx:geoDataEntityQuery": GeoDataEntityQuery,
    "cx:geoData": GeoData
  };
  GeoData._C = {
    "cx:geoPolygons": GeoPolygons,
    "cx:copyrights": Copyrights
  };
  GeoData._D = {
    ":entityName": new OxmlAttr(":entityName", OxmlType.StringValue),
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue),
    ":east": new OxmlAttr(":east", OxmlType.DoubleValue),
    ":west": new OxmlAttr(":west", OxmlType.DoubleValue),
    ":north": new OxmlAttr(":north", OxmlType.DoubleValue),
    ":south": new OxmlAttr(":south", OxmlType.DoubleValue)
  };
  GeoDataEntityQuery._D = {
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray),
    ":entityId": new OxmlAttr(":entityId", OxmlType.StringValue)
  };
  Copyrights._C = {
    "cx:copyright": CopyrightXsdstring
  };
  GeoPolygons._C = {
    "cx:geoPolygon": GeoPolygon
  };
  GeoPolygon._D = {
    ":polygonId": new OxmlAttr(":polygonId", OxmlType.StringValue),
    ":numPoints": new OxmlAttr(":numPoints", OxmlType.IntegerValue),
    ":pcaRings": new OxmlAttr(":pcaRings", OxmlType.StringValue)
  };
  GeoLocationQueryResult._C = {
    "cx:geoLocationQuery": GeoLocationQuery,
    "cx:geoLocations": GeoLocations
  };
  GeoLocations._C = {
    "cx:geoLocation": GeoLocation
  };
  GeoLocationQuery._D = {
    ":countryRegion": new OxmlAttr(":countryRegion", OxmlType.StringValue),
    ":adminDistrict1": new OxmlAttr(":adminDistrict1", OxmlType.StringValue),
    ":adminDistrict2": new OxmlAttr(":adminDistrict2", OxmlType.StringValue),
    ":postalCode": new OxmlAttr(":postalCode", OxmlType.StringValue),
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray)
  };
  GeoLocation._C = {
    "cx:address": Address
  };
  GeoLocation._D = {
    ":latitude": new OxmlAttr(":latitude", OxmlType.DoubleValue),
    ":longitude": new OxmlAttr(":longitude", OxmlType.DoubleValue),
    ":entityName": new OxmlAttr(":entityName", OxmlType.StringValue),
    ":entityType": new OxmlAttr(":entityType", OxmlType.EnumValue, EntityTypeEnumArray)
  };
  Address._D = {
    ":address1": new OxmlAttr(":address1", OxmlType.StringValue),
    ":countryRegion": new OxmlAttr(":countryRegion", OxmlType.StringValue),
    ":adminDistrict1": new OxmlAttr(":adminDistrict1", OxmlType.StringValue),
    ":adminDistrict2": new OxmlAttr(":adminDistrict2", OxmlType.StringValue),
    ":postalCode": new OxmlAttr(":postalCode", OxmlType.StringValue),
    ":locality": new OxmlAttr(":locality", OxmlType.StringValue),
    ":isoCountryCode": new OxmlAttr(":isoCountryCode", OxmlType.StringValue)
  };
  NumberFormat._D = {
    ":formatCode": new OxmlAttr(":formatCode", OxmlType.StringValue),
    ":sourceLinked": new OxmlAttr(":sourceLinked", OxmlType.BooleanValue)
  };
  TickLabels._C = {
    "cx:extLst": ExtensionList
  };
  OpenXmlTickMarksElement._C = {
    "cx:extLst": ExtensionList
  };
  OpenXmlTickMarksElement._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, TickMarksTypeArray)
  };
  MinorTickMarksTickMarks._C = {
    "cx:extLst": ExtensionList
  };
  MajorTickMarksTickMarks._C = {
    "cx:extLst": ExtensionList
  };
  OpenXmlGridlinesElement._C = {
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  MinorGridlinesGridlines._C = {
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  MajorGridlinesGridlines._C = {
    "cx:spPr": ShapeProperties,
    "cx:extLst": ExtensionList
  };
  AxisUnits._C = {
    "cx:unitsLabel": AxisUnitsLabel,
    "cx:extLst": ExtensionList
  };
  AxisUnits._D = {
    ":unit": new OxmlAttr(":unit", OxmlType.EnumValue, AxisUnitArray)
  };
  AxisTitle._C = {
    "cx:tx": Text,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:extLst": ExtensionList
  };
  ValueAxisScaling._D = {
    ":max": new OxmlAttr(":max", OxmlType.StringValue),
    ":min": new OxmlAttr(":min", OxmlType.StringValue),
    ":majorUnit": new OxmlAttr(":majorUnit", OxmlType.StringValue),
    ":minorUnit": new OxmlAttr(":minorUnit", OxmlType.StringValue)
  };
  CategoryAxisScaling._D = {
    ":gapWidth": new OxmlAttr(":gapWidth", OxmlType.StringValue)
  };
  AxisUnitsLabel._C = {
    "cx:tx": Text,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:extLst": ExtensionList
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
  Text._C = {
    "cx:txData": TextData,
    "cx:rich": RichTextBody
  };
  TextBodyType._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  TxPrTextBody._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  RichTextBody._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  TextData._C = {
    "cx:f": Formula,
    "cx:v": VXsdstring
  };
  Data._C = {
    "cx:numDim": NumericDimension,
    "cx:strDim": StringDimension,
    "cx:extLst": ExtensionList
  };
  Data._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value)
  };
  ExternalData._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    "cx:autoUpdate": new OxmlAttr("cx:autoUpdate", OxmlType.BooleanValue)
  };
  ExtensionList._C = {
    "cx:ext": Extension2
  };
  StringDimension._C = {
    "cx:f": Formula,
    "cx:nf": NfFormula,
    "cx:lvl": StringLevel
  };
  StringDimension._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, StringDimensionTypeArray)
  };
  NumericDimension._C = {
    "cx:f": Formula,
    "cx:nf": NfFormula,
    "cx:lvl": NumericLevel
  };
  NumericDimension._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, NumericDimensionTypeArray)
  };
  NumericLevel._C = {
    "cx:pt": NumericValue
  };
  NumericLevel._D = {
    ":ptCount": new OxmlAttr(":ptCount", OxmlType.UInt32Value),
    ":formatCode": new OxmlAttr(":formatCode", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  NumericValue._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  StringLevel._C = {
    "cx:pt": ChartStringValue
  };
  StringLevel._D = {
    ":ptCount": new OxmlAttr(":ptCount", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  OpenXmlFormulaElement._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, FormulaDirectionArray)
  };
  ChartStringValue._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  OpenXmlSolidColorFillPropertiesElement._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  MaxColorSolidColorFillProperties._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  MidColorSolidColorFillProperties._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  MinColorSolidColorFillProperties._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  Extension2._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  RelId._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ChartSpace._C = {
    "cx:chartData": ChartData,
    "cx:chart": Chart,
    "cx:spPr": ShapeProperties,
    "cx:txPr": TxPrTextBody,
    "cx:clrMapOvr": ColorMappingType,
    "cx:fmtOvrs": FormatOverrides,
    "cx:printSettings": PrintSettings,
    "cx:extLst": ExtensionList
  };
  return {
    prefix: "cx",
    xmlns: "http://schemas.microsoft.com/office/drawing/2014/chartex"
  };
}
export {
  Address,
  Aggregation,
  Axis,
  AxisId,
  AxisTitle,
  AxisUnit,
  AxisUnitArray,
  AxisUnits,
  AxisUnitsLabel,
  BinCountXsdunsignedInt,
  Binning,
  CategoryAxisScaling,
  Chart,
  ChartData,
  ChartSpace,
  ChartStringValue,
  ChartTitle,
  Clear,
  ColorMappingType,
  CopyrightXsdstring,
  Copyrights,
  Data,
  DataId,
  DataLabel,
  DataLabelHidden,
  DataLabelPos,
  DataLabelPosArray,
  DataLabelVisibilities,
  DataLabels,
  DataPoint,
  EntityType,
  EntityTypeEnum,
  EntityTypeEnumArray,
  EvenFooterXsdstring,
  EvenHeaderXsdstring,
  Extension2,
  ExtensionList,
  ExternalData,
  ExtremeValueColorPosition,
  FirstFooterXsdstring,
  FirstHeaderXsdstring,
  FormatOverride,
  FormatOverrides,
  Formula,
  FormulaDirection,
  FormulaDirectionArray,
  GeoCache,
  GeoChildEntities,
  GeoChildEntitiesQuery,
  GeoChildEntitiesQueryResult,
  GeoChildEntitiesQueryResults,
  GeoChildTypes,
  GeoData,
  GeoDataEntityQuery,
  GeoDataEntityQueryResult,
  GeoDataEntityQueryResults,
  GeoDataPointQuery,
  GeoDataPointToEntityQuery,
  GeoDataPointToEntityQueryResult,
  GeoDataPointToEntityQueryResults,
  GeoEntity,
  GeoHierarchyEntity,
  GeoLocation,
  GeoLocationQuery,
  GeoLocationQueryResult,
  GeoLocationQueryResults,
  GeoLocations,
  GeoMappingLevel,
  GeoMappingLevelArray,
  GeoParentEntitiesQuery,
  GeoParentEntitiesQueryResult,
  GeoParentEntitiesQueryResults,
  GeoParentEntity,
  GeoPolygon,
  GeoPolygons,
  GeoProjectionType,
  GeoProjectionTypeArray,
  Geography,
  HeaderFooter,
  IntervalClosedSide,
  IntervalClosedSideArray,
  Legend,
  MajorGridlinesGridlines,
  MajorTickMarksTickMarks,
  MaxColorSolidColorFillProperties,
  MaxValueColorEndPosition,
  MidColorSolidColorFillProperties,
  MinColorSolidColorFillProperties,
  MinValueColorEndPosition,
  MinorGridlinesGridlines,
  MinorTickMarksTickMarks,
  NfFormula,
  NumberColorPosition,
  NumberFormat,
  NumericDimension,
  NumericDimensionType,
  NumericDimensionTypeArray,
  NumericLevel,
  NumericValue,
  OddFooterXsdstring,
  OddHeaderXsdstring,
  OpenXmlFormulaElement,
  OpenXmlGridlinesElement,
  OpenXmlSolidColorFillPropertiesElement,
  OpenXmlTickMarksElement,
  OpenXmlValueColorEndPositionElement,
  Openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3XsdunsignedInt,
  PageMargins,
  PageOrientation,
  PageOrientationArray,
  PageSetup,
  ParentLabelLayout,
  ParentLabelLayoutVal,
  ParentLabelLayoutValArray,
  PercentageColorPosition,
  PlotArea,
  PlotAreaRegion,
  PlotSurface,
  PosAlign,
  PosAlignArray,
  PrintSettings,
  QuartileMethod,
  QuartileMethodArray,
  RegionLabelLayout,
  RegionLabelLayoutEnum,
  RegionLabelLayoutEnumArray,
  RelId,
  RichTextBody,
  SeparatorXsdstring,
  Series,
  SeriesElementVisibilities,
  SeriesLayout,
  SeriesLayoutArray,
  SeriesLayoutProperties,
  ShapeProperties,
  SidePos,
  SidePosArray,
  Statistics,
  StringDimension,
  StringDimensionType,
  StringDimensionTypeArray,
  StringLevel,
  Subtotals,
  Text,
  TextBodyType,
  TextData,
  TickLabels,
  TickMarksType,
  TickMarksTypeArray,
  TxPrTextBody,
  UnsignedIntegerType,
  VXsdstring,
  ValueAxisScaling,
  ValueColorMiddlePosition,
  ValueColorPositions,
  ValueColors,
  Xsdbase64Binary,
  Xsddouble,
  initOffice2016DrawingChartDrawingNamespace
};
