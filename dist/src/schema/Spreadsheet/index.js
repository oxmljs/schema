import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { SpaceProcessingModeValuesArray } from "..";
import { PivotCacheDefinition as X14PivotCacheDefinition } from "../Office2010/Excel";
import { PivotCacheDecoupled as X15PivotCacheDecoupled } from "../Office2013/Excel";
import { TimelinePivotCacheDefinition as X15TimelinePivotCacheDefinition } from "../Office2013/Excel";
import { PivotCacheIdVersion as X15PivotCacheIdVersion } from "../Office2013/Excel";
import { Xsdboolean as XxpimXsdboolean } from "../Office2021/Excel/Pivot";
import { CacheVersionInfo as XxpviCacheVersionInfo } from "../Office/SpreadSheetML/Y2022/PivotVersionInfo";
import { PivotTableDefinition as X14PivotTableDefinition } from "../Office2010/Excel";
import { PivotTableData as X15PivotTableData } from "../Office2013/Excel";
import { PivotTableUISettings as X15PivotTableUISettings } from "../Office2013/Excel";
import { PivotVersionInfo as XxpviPivotVersionInfo } from "../Office/SpreadSheetML/Y2022/PivotVersionInfo";
import { DefinedNames as X14DefinedNames } from "../Office2010/Excel";
import { PivotCaches as X14PivotCaches } from "../Office2010/Excel";
import { SlicerCaches as X14SlicerCaches } from "../Office2010/Excel";
import { SlicerCaches as X15SlicerCaches } from "../Office2013/Excel";
import { WorkbookProperties as X14WorkbookProperties } from "../Office2010/Excel";
import { PivotCaches as X15PivotCaches } from "../Office2013/Excel";
import { PivotTableReferences as X15PivotTableReferences } from "../Office2013/Excel";
import { TimelineCachePivotCaches as X15TimelineCachePivotCaches } from "../Office2013/Excel";
import { TimelineCacheReferences as X15TimelineCacheReferences } from "../Office2013/Excel";
import { WorkbookProperties as X15WorkbookProperties } from "../Office2013/Excel";
import { DataModel as X15DataModel } from "../Office2013/Excel";
import { DifferentialFormats as X14DifferentialFormats } from "../Office2010/Excel";
import { SlicerStyles as X14SlicerStyles } from "../Office2010/Excel";
import { DifferentialFormats as X15DifferentialFormats } from "../Office2013/Excel";
import { TimelineStyles as X15TimelineStyles } from "../Office2013/Excel";
import { ConditionalFormattings as X14ConditionalFormattings } from "../Office2010/Excel";
import { DataValidations as X14DataValidations } from "../Office2010/Excel";
import { SparklineGroups as X14SparklineGroups } from "../Office2010/Excel";
import { SlicerList as X14SlicerList } from "../Office2010/Excel";
import { ProtectedRanges as X14ProtectedRanges } from "../Office2010/Excel";
import { IgnoredErrors as X14IgnoredErrors } from "../Office2010/Excel";
import { WebExtensions as X15WebExtensions } from "../Office2013/Excel";
import { TimelineReferences as X15TimelineReferences } from "../Office2013/Excel";
import { DataField as X14DataField } from "../Office2010/Excel";
import { DataField as X15DataField } from "../Office2013/Excel";
import { CalculatedMember as X14CalculatedMember } from "../Office2010/Excel";
import { CalculatedMember as X15CalculatedMember } from "../Office2013/Excel";
import { CacheHierarchy as X14CacheHierarchy } from "../Office2010/Excel";
import { CacheHierarchy as X15CacheHierarchy } from "../Office2013/Excel";
import { CacheField as X14CacheField } from "../Office2010/Excel";
import { CachedUniqueNames as X15CachedUniqueNames } from "../Office2013/Excel";
import { Connection as X14Connection } from "../Office2010/Excel";
import { Connection as X15Connection } from "../Office2013/Excel";
import { QueryTable as X15QueryTable } from "../Office2013/Excel";
import { PivotFilter as X15PivotFilter } from "../Office2013/Excel";
import { MovingPeriodState as X15MovingPeriodState } from "../Office2013/Excel";
import { SlicerCachePivotTables as X15SlicerCachePivotTables } from "../Office2013/Excel";
import { TableSlicerCache as X15TableSlicerCache } from "../Office2013/Excel";
import { SlicerCacheHideItemsWithNoData as X15SlicerCacheHideItemsWithNoData } from "../Office2013/Excel";
import { Filter as X14Filter } from "../Office2010/Excel";
import { SourceConnection as X14SourceConnection } from "../Office2010/Excel";
import { PivotField as X14PivotField } from "../Office2010/Excel";
import { PivotHierarchy as X14PivotHierarchy } from "../Office2010/Excel";
import { Id as X14Id } from "../Office2010/Excel";
import { ColumnId as XdrColumnId } from "../Drawing/Spreadsheet";
import { ColumnOffset as XdrColumnOffset } from "../Drawing/Spreadsheet";
import { RowId as XdrRowId } from "../Drawing/Spreadsheet";
import { RowOffset as XdrRowOffset } from "../Drawing/Spreadsheet";
import { Table as X14Table } from "../Office2010/Excel";
import { ExternalBookAlternateUrls as Xxl21ExternalBookAlternateUrls } from "../Office/SpreadSheetML/Y2021/ExtLinks2021";
import { OleItem as X14OleItem } from "../Office2010/Excel";
import { List as X12acList } from "../Office2010/ExcelAc";
import { SortCondition as X14SortCondition } from "../Office2010/Excel";
import { CustomFilters as X14CustomFilters } from "../Office2010/Excel";
import { IconFilter as X14IconFilter } from "../Office2010/Excel";
import { AbsolutePath as X15acAbsolutePath } from "../Office2013/ExcelAc";
var FilterOperatorValues = /* @__PURE__ */ ((FilterOperatorValues2) => {
  FilterOperatorValues2["Equal"] = "equal";
  FilterOperatorValues2["LessThan"] = "lessThan";
  FilterOperatorValues2["LessThanOrEqual"] = "lessThanOrEqual";
  FilterOperatorValues2["NotEqual"] = "notEqual";
  FilterOperatorValues2["GreaterThanOrEqual"] = "greaterThanOrEqual";
  FilterOperatorValues2["GreaterThan"] = "greaterThan";
  return FilterOperatorValues2;
})(FilterOperatorValues || {});
const FilterOperatorValuesArray = [
  "equal" /* Equal */,
  "lessThan" /* LessThan */,
  "lessThanOrEqual" /* LessThanOrEqual */,
  "notEqual" /* NotEqual */,
  "greaterThanOrEqual" /* GreaterThanOrEqual */,
  "greaterThan" /* GreaterThan */
];
var DynamicFilterValues = /* @__PURE__ */ ((DynamicFilterValues2) => {
  DynamicFilterValues2["Null"] = "null";
  DynamicFilterValues2["AboveAverage"] = "aboveAverage";
  DynamicFilterValues2["BelowAverage"] = "belowAverage";
  DynamicFilterValues2["Tomorrow"] = "tomorrow";
  DynamicFilterValues2["Today"] = "today";
  DynamicFilterValues2["Yesterday"] = "yesterday";
  DynamicFilterValues2["NextWeek"] = "nextWeek";
  DynamicFilterValues2["ThisWeek"] = "thisWeek";
  DynamicFilterValues2["LastWeek"] = "lastWeek";
  DynamicFilterValues2["NextMonth"] = "nextMonth";
  DynamicFilterValues2["ThisMonth"] = "thisMonth";
  DynamicFilterValues2["LastMonth"] = "lastMonth";
  DynamicFilterValues2["NextQuarter"] = "nextQuarter";
  DynamicFilterValues2["ThisQuarter"] = "thisQuarter";
  DynamicFilterValues2["LastQuarter"] = "lastQuarter";
  DynamicFilterValues2["NextYear"] = "nextYear";
  DynamicFilterValues2["ThisYear"] = "thisYear";
  DynamicFilterValues2["LastYear"] = "lastYear";
  DynamicFilterValues2["YearToDate"] = "yearToDate";
  DynamicFilterValues2["Quarter1"] = "Q1";
  DynamicFilterValues2["Quarter2"] = "Q2";
  DynamicFilterValues2["Quarter3"] = "Q3";
  DynamicFilterValues2["Quarter4"] = "Q4";
  DynamicFilterValues2["January"] = "M1";
  DynamicFilterValues2["February"] = "M2";
  DynamicFilterValues2["March"] = "M3";
  DynamicFilterValues2["April"] = "M4";
  DynamicFilterValues2["May"] = "M5";
  DynamicFilterValues2["June"] = "M6";
  DynamicFilterValues2["July"] = "M7";
  DynamicFilterValues2["August"] = "M8";
  DynamicFilterValues2["September"] = "M9";
  DynamicFilterValues2["October"] = "M10";
  DynamicFilterValues2["November"] = "M11";
  DynamicFilterValues2["December"] = "M12";
  return DynamicFilterValues2;
})(DynamicFilterValues || {});
const DynamicFilterValuesArray = [
  "null" /* Null */,
  "aboveAverage" /* AboveAverage */,
  "belowAverage" /* BelowAverage */,
  "tomorrow" /* Tomorrow */,
  "today" /* Today */,
  "yesterday" /* Yesterday */,
  "nextWeek" /* NextWeek */,
  "thisWeek" /* ThisWeek */,
  "lastWeek" /* LastWeek */,
  "nextMonth" /* NextMonth */,
  "thisMonth" /* ThisMonth */,
  "lastMonth" /* LastMonth */,
  "nextQuarter" /* NextQuarter */,
  "thisQuarter" /* ThisQuarter */,
  "lastQuarter" /* LastQuarter */,
  "nextYear" /* NextYear */,
  "thisYear" /* ThisYear */,
  "lastYear" /* LastYear */,
  "yearToDate" /* YearToDate */,
  "Q1" /* Quarter1 */,
  "Q2" /* Quarter2 */,
  "Q3" /* Quarter3 */,
  "Q4" /* Quarter4 */,
  "M1" /* January */,
  "M2" /* February */,
  "M3" /* March */,
  "M4" /* April */,
  "M5" /* May */,
  "M6" /* June */,
  "M7" /* July */,
  "M8" /* August */,
  "M9" /* September */,
  "M10" /* October */,
  "M11" /* November */,
  "M12" /* December */
];
var IconSetValues = /* @__PURE__ */ ((IconSetValues2) => {
  IconSetValues2["ThreeArrows"] = "3Arrows";
  IconSetValues2["ThreeArrowsGray"] = "3ArrowsGray";
  IconSetValues2["ThreeFlags"] = "3Flags";
  IconSetValues2["ThreeTrafficLights1"] = "3TrafficLights1";
  IconSetValues2["ThreeTrafficLights2"] = "3TrafficLights2";
  IconSetValues2["ThreeSigns"] = "3Signs";
  IconSetValues2["ThreeSymbols"] = "3Symbols";
  IconSetValues2["ThreeSymbols2"] = "3Symbols2";
  IconSetValues2["FourArrows"] = "4Arrows";
  IconSetValues2["FourArrowsGray"] = "4ArrowsGray";
  IconSetValues2["FourRedToBlack"] = "4RedToBlack";
  IconSetValues2["FourRating"] = "4Rating";
  IconSetValues2["FourTrafficLights"] = "4TrafficLights";
  IconSetValues2["FiveArrows"] = "5Arrows";
  IconSetValues2["FiveArrowsGray"] = "5ArrowsGray";
  IconSetValues2["FiveRating"] = "5Rating";
  IconSetValues2["FiveQuarters"] = "5Quarters";
  return IconSetValues2;
})(IconSetValues || {});
const IconSetValuesArray = [
  "3Arrows" /* ThreeArrows */,
  "3ArrowsGray" /* ThreeArrowsGray */,
  "3Flags" /* ThreeFlags */,
  "3TrafficLights1" /* ThreeTrafficLights1 */,
  "3TrafficLights2" /* ThreeTrafficLights2 */,
  "3Signs" /* ThreeSigns */,
  "3Symbols" /* ThreeSymbols */,
  "3Symbols2" /* ThreeSymbols2 */,
  "4Arrows" /* FourArrows */,
  "4ArrowsGray" /* FourArrowsGray */,
  "4RedToBlack" /* FourRedToBlack */,
  "4Rating" /* FourRating */,
  "4TrafficLights" /* FourTrafficLights */,
  "5Arrows" /* FiveArrows */,
  "5ArrowsGray" /* FiveArrowsGray */,
  "5Rating" /* FiveRating */,
  "5Quarters" /* FiveQuarters */
];
var SortByValues = /* @__PURE__ */ ((SortByValues2) => {
  SortByValues2["Value"] = "value";
  SortByValues2["CellColor"] = "cellColor";
  SortByValues2["FontColor"] = "fontColor";
  SortByValues2["Icon"] = "icon";
  return SortByValues2;
})(SortByValues || {});
const SortByValuesArray = [
  "value" /* Value */,
  "cellColor" /* CellColor */,
  "fontColor" /* FontColor */,
  "icon" /* Icon */
];
var SortMethodValues = /* @__PURE__ */ ((SortMethodValues2) => {
  SortMethodValues2["Stroke"] = "stroke";
  SortMethodValues2["PinYin"] = "pinYin";
  SortMethodValues2["None"] = "none";
  return SortMethodValues2;
})(SortMethodValues || {});
const SortMethodValuesArray = [
  "stroke" /* Stroke */,
  "pinYin" /* PinYin */,
  "none" /* None */
];
var CalendarValues = /* @__PURE__ */ ((CalendarValues2) => {
  CalendarValues2["None"] = "none";
  CalendarValues2["Gregorian"] = "gregorian";
  CalendarValues2["GregorianUs"] = "gregorianUs";
  CalendarValues2["Japan"] = "japan";
  CalendarValues2["Taiwan"] = "taiwan";
  CalendarValues2["Korea"] = "korea";
  CalendarValues2["Hijri"] = "hijri";
  CalendarValues2["Thai"] = "thai";
  CalendarValues2["Hebrew"] = "hebrew";
  CalendarValues2["GregorianMiddleEastFrench"] = "gregorianMeFrench";
  CalendarValues2["GregorianArabic"] = "gregorianArabic";
  CalendarValues2["GregorianTransliteratedEnglish"] = "gregorianXlitEnglish";
  CalendarValues2["GregorianTransliteratedFrench"] = "gregorianXlitFrench";
  return CalendarValues2;
})(CalendarValues || {});
const CalendarValuesArray = [
  "none" /* None */,
  "gregorian" /* Gregorian */,
  "gregorianUs" /* GregorianUs */,
  "japan" /* Japan */,
  "taiwan" /* Taiwan */,
  "korea" /* Korea */,
  "hijri" /* Hijri */,
  "thai" /* Thai */,
  "hebrew" /* Hebrew */,
  "gregorianMeFrench" /* GregorianMiddleEastFrench */,
  "gregorianArabic" /* GregorianArabic */,
  "gregorianXlitEnglish" /* GregorianTransliteratedEnglish */,
  "gregorianXlitFrench" /* GregorianTransliteratedFrench */
];
var DateTimeGroupingValues = /* @__PURE__ */ ((DateTimeGroupingValues2) => {
  DateTimeGroupingValues2["Year"] = "year";
  DateTimeGroupingValues2["Month"] = "month";
  DateTimeGroupingValues2["Day"] = "day";
  DateTimeGroupingValues2["Hour"] = "hour";
  DateTimeGroupingValues2["Minute"] = "minute";
  DateTimeGroupingValues2["Second"] = "second";
  return DateTimeGroupingValues2;
})(DateTimeGroupingValues || {});
const DateTimeGroupingValuesArray = [
  "year" /* Year */,
  "month" /* Month */,
  "day" /* Day */,
  "hour" /* Hour */,
  "minute" /* Minute */,
  "second" /* Second */
];
var HtmlFormattingValues = /* @__PURE__ */ ((HtmlFormattingValues2) => {
  HtmlFormattingValues2["None"] = "none";
  HtmlFormattingValues2["HonorRichText"] = "rtf";
  HtmlFormattingValues2["All"] = "all";
  return HtmlFormattingValues2;
})(HtmlFormattingValues || {});
const HtmlFormattingValuesArray = [
  "none" /* None */,
  "rtf" /* HonorRichText */,
  "all" /* All */
];
var ParameterValues = /* @__PURE__ */ ((ParameterValues2) => {
  ParameterValues2["Prompt"] = "prompt";
  ParameterValues2["Value"] = "value";
  ParameterValues2["Cell"] = "cell";
  return ParameterValues2;
})(ParameterValues || {});
const ParameterValuesArray = [
  "prompt" /* Prompt */,
  "value" /* Value */,
  "cell" /* Cell */
];
var FileTypeValues = /* @__PURE__ */ ((FileTypeValues2) => {
  FileTypeValues2["Mac"] = "mac";
  FileTypeValues2["Win"] = "win";
  FileTypeValues2["Dos"] = "dos";
  return FileTypeValues2;
})(FileTypeValues || {});
const FileTypeValuesArray = [
  "mac" /* Mac */,
  "win" /* Win */,
  "dos" /* Dos */
];
var QualifierValues = /* @__PURE__ */ ((QualifierValues2) => {
  QualifierValues2["DoubleQuote"] = "doubleQuote";
  QualifierValues2["SingleQuote"] = "singleQuote";
  QualifierValues2["None"] = "none";
  return QualifierValues2;
})(QualifierValues || {});
const QualifierValuesArray = [
  "doubleQuote" /* DoubleQuote */,
  "singleQuote" /* SingleQuote */,
  "none" /* None */
];
var ExternalConnectionValues = /* @__PURE__ */ ((ExternalConnectionValues2) => {
  ExternalConnectionValues2["General"] = "general";
  ExternalConnectionValues2["Text"] = "text";
  ExternalConnectionValues2["MonthDayYear"] = "MDY";
  ExternalConnectionValues2["DayMonthYear"] = "DMY";
  ExternalConnectionValues2["YearMonthDay"] = "YMD";
  ExternalConnectionValues2["MonthYearDay"] = "MYD";
  ExternalConnectionValues2["DayYearMonth"] = "DYM";
  ExternalConnectionValues2["YearDayMonth"] = "YDM";
  ExternalConnectionValues2["Skip"] = "skip";
  ExternalConnectionValues2["EMD"] = "EMD";
  return ExternalConnectionValues2;
})(ExternalConnectionValues || {});
const ExternalConnectionValuesArray = [
  "general" /* General */,
  "text" /* Text */,
  "MDY" /* MonthDayYear */,
  "DMY" /* DayMonthYear */,
  "YMD" /* YearMonthDay */,
  "MYD" /* MonthYearDay */,
  "DYM" /* DayYearMonth */,
  "YDM" /* YearDayMonth */,
  "skip" /* Skip */,
  "EMD" /* EMD */
];
var CredentialsMethodValues = /* @__PURE__ */ ((CredentialsMethodValues2) => {
  CredentialsMethodValues2["Integrated"] = "integrated";
  CredentialsMethodValues2["None"] = "none";
  CredentialsMethodValues2["Stored"] = "stored";
  return CredentialsMethodValues2;
})(CredentialsMethodValues || {});
const CredentialsMethodValuesArray = [
  "integrated" /* Integrated */,
  "none" /* None */,
  "stored" /* Stored */
];
var SourceValues = /* @__PURE__ */ ((SourceValues2) => {
  SourceValues2["Worksheet"] = "worksheet";
  SourceValues2["External"] = "external";
  SourceValues2["Consolidation"] = "consolidation";
  SourceValues2["Scenario"] = "scenario";
  return SourceValues2;
})(SourceValues || {});
const SourceValuesArray = [
  "worksheet" /* Worksheet */,
  "external" /* External */,
  "consolidation" /* Consolidation */,
  "scenario" /* Scenario */
];
var GroupByValues = /* @__PURE__ */ ((GroupByValues2) => {
  GroupByValues2["Range"] = "range";
  GroupByValues2["Seconds"] = "seconds";
  GroupByValues2["Minutes"] = "minutes";
  GroupByValues2["Hours"] = "hours";
  GroupByValues2["Days"] = "days";
  GroupByValues2["Months"] = "months";
  GroupByValues2["Quarters"] = "quarters";
  GroupByValues2["Years"] = "years";
  return GroupByValues2;
})(GroupByValues || {});
const GroupByValuesArray = [
  "range" /* Range */,
  "seconds" /* Seconds */,
  "minutes" /* Minutes */,
  "hours" /* Hours */,
  "days" /* Days */,
  "months" /* Months */,
  "quarters" /* Quarters */,
  "years" /* Years */
];
var SortValues = /* @__PURE__ */ ((SortValues2) => {
  SortValues2["None"] = "none";
  SortValues2["Ascending"] = "ascending";
  SortValues2["Descending"] = "descending";
  SortValues2["AscendingAlpha"] = "ascendingAlpha";
  SortValues2["DescendingAlpha"] = "descendingAlpha";
  SortValues2["AscendingNatural"] = "ascendingNatural";
  SortValues2["DescendingNatural"] = "descendingNatural";
  return SortValues2;
})(SortValues || {});
const SortValuesArray = [
  "none" /* None */,
  "ascending" /* Ascending */,
  "descending" /* Descending */,
  "ascendingAlpha" /* AscendingAlpha */,
  "descendingAlpha" /* DescendingAlpha */,
  "ascendingNatural" /* AscendingNatural */,
  "descendingNatural" /* DescendingNatural */
];
var ScopeValues = /* @__PURE__ */ ((ScopeValues2) => {
  ScopeValues2["Selection"] = "selection";
  ScopeValues2["Data"] = "data";
  ScopeValues2["Field"] = "field";
  return ScopeValues2;
})(ScopeValues || {});
const ScopeValuesArray = [
  "selection" /* Selection */,
  "data" /* Data */,
  "field" /* Field */
];
var RuleValues = /* @__PURE__ */ ((RuleValues2) => {
  RuleValues2["None"] = "none";
  RuleValues2["All"] = "all";
  RuleValues2["Row"] = "row";
  RuleValues2["Column"] = "column";
  return RuleValues2;
})(RuleValues || {});
const RuleValuesArray = [
  "none" /* None */,
  "all" /* All */,
  "row" /* Row */,
  "column" /* Column */
];
var ShowDataAsValues = /* @__PURE__ */ ((ShowDataAsValues2) => {
  ShowDataAsValues2["Normal"] = "normal";
  ShowDataAsValues2["Difference"] = "difference";
  ShowDataAsValues2["Percent"] = "percent";
  ShowDataAsValues2["PercentageDifference"] = "percentDiff";
  ShowDataAsValues2["RunTotal"] = "runTotal";
  ShowDataAsValues2["PercentOfRaw"] = "percentOfRow";
  ShowDataAsValues2["PercentOfColumn"] = "percentOfCol";
  ShowDataAsValues2["PercentOfTotal"] = "percentOfTotal";
  ShowDataAsValues2["Index"] = "index";
  return ShowDataAsValues2;
})(ShowDataAsValues || {});
const ShowDataAsValuesArray = [
  "normal" /* Normal */,
  "difference" /* Difference */,
  "percent" /* Percent */,
  "percentDiff" /* PercentageDifference */,
  "runTotal" /* RunTotal */,
  "percentOfRow" /* PercentOfRaw */,
  "percentOfCol" /* PercentOfColumn */,
  "percentOfTotal" /* PercentOfTotal */,
  "index" /* Index */
];
var ItemValues = /* @__PURE__ */ ((ItemValues2) => {
  ItemValues2["Data"] = "data";
  ItemValues2["Default"] = "default";
  ItemValues2["Sum"] = "sum";
  ItemValues2["CountA"] = "countA";
  ItemValues2["Average"] = "avg";
  ItemValues2["Maximum"] = "max";
  ItemValues2["Minimum"] = "min";
  ItemValues2["Product"] = "product";
  ItemValues2["Count"] = "count";
  ItemValues2["StandardDeviation"] = "stdDev";
  ItemValues2["StandardDeviationP"] = "stdDevP";
  ItemValues2["Variance"] = "var";
  ItemValues2["VarianceP"] = "varP";
  ItemValues2["Grand"] = "grand";
  ItemValues2["Blank"] = "blank";
  return ItemValues2;
})(ItemValues || {});
const ItemValuesArray = [
  "data" /* Data */,
  "default" /* Default */,
  "sum" /* Sum */,
  "countA" /* CountA */,
  "avg" /* Average */,
  "max" /* Maximum */,
  "min" /* Minimum */,
  "product" /* Product */,
  "count" /* Count */,
  "stdDev" /* StandardDeviation */,
  "stdDevP" /* StandardDeviationP */,
  "var" /* Variance */,
  "varP" /* VarianceP */,
  "grand" /* Grand */,
  "blank" /* Blank */
];
var FieldSortValues = /* @__PURE__ */ ((FieldSortValues2) => {
  FieldSortValues2["Manual"] = "manual";
  FieldSortValues2["Ascending"] = "ascending";
  FieldSortValues2["Descending"] = "descending";
  return FieldSortValues2;
})(FieldSortValues || {});
const FieldSortValuesArray = [
  "manual" /* Manual */,
  "ascending" /* Ascending */,
  "descending" /* Descending */
];
var PivotFilterValues = /* @__PURE__ */ ((PivotFilterValues2) => {
  PivotFilterValues2["Unknown"] = "unknown";
  PivotFilterValues2["Count"] = "count";
  PivotFilterValues2["Percent"] = "percent";
  PivotFilterValues2["Sum"] = "sum";
  PivotFilterValues2["CaptionEqual"] = "captionEqual";
  PivotFilterValues2["CaptionNotEqual"] = "captionNotEqual";
  PivotFilterValues2["CaptionBeginsWith"] = "captionBeginsWith";
  PivotFilterValues2["CaptionNotBeginsWith"] = "captionNotBeginsWith";
  PivotFilterValues2["CaptionEndsWith"] = "captionEndsWith";
  PivotFilterValues2["CaptionNotEndsWith"] = "captionNotEndsWith";
  PivotFilterValues2["CaptionContains"] = "captionContains";
  PivotFilterValues2["CaptionNotContains"] = "captionNotContains";
  PivotFilterValues2["CaptionGreaterThan"] = "captionGreaterThan";
  PivotFilterValues2["CaptionGreaterThanOrEqual"] = "captionGreaterThanOrEqual";
  PivotFilterValues2["CaptionLessThan"] = "captionLessThan";
  PivotFilterValues2["CaptionLessThanOrEqual"] = "captionLessThanOrEqual";
  PivotFilterValues2["CaptionBetween"] = "captionBetween";
  PivotFilterValues2["CaptionNotBetween"] = "captionNotBetween";
  PivotFilterValues2["ValueEqual"] = "valueEqual";
  PivotFilterValues2["ValueNotEqual"] = "valueNotEqual";
  PivotFilterValues2["ValueGreaterThan"] = "valueGreaterThan";
  PivotFilterValues2["ValueGreaterThanOrEqual"] = "valueGreaterThanOrEqual";
  PivotFilterValues2["ValueLessThan"] = "valueLessThan";
  PivotFilterValues2["ValueLessThanOrEqual"] = "valueLessThanOrEqual";
  PivotFilterValues2["ValueBetween"] = "valueBetween";
  PivotFilterValues2["ValueNotBetween"] = "valueNotBetween";
  PivotFilterValues2["DateEqual"] = "dateEqual";
  PivotFilterValues2["DateNotEqual"] = "dateNotEqual";
  PivotFilterValues2["DateOlderThan"] = "dateOlderThan";
  PivotFilterValues2["DateOlderThanOrEqual"] = "dateOlderThanOrEqual";
  PivotFilterValues2["DateNewerThan"] = "dateNewerThan";
  PivotFilterValues2["DateNewerThanOrEqual"] = "dateNewerThanOrEqual";
  PivotFilterValues2["DateBetween"] = "dateBetween";
  PivotFilterValues2["DateNotBetween"] = "dateNotBetween";
  PivotFilterValues2["Tomorrow"] = "tomorrow";
  PivotFilterValues2["Today"] = "today";
  PivotFilterValues2["Yesterday"] = "yesterday";
  PivotFilterValues2["NextWeek"] = "nextWeek";
  PivotFilterValues2["ThisWeek"] = "thisWeek";
  PivotFilterValues2["LastWeek"] = "lastWeek";
  PivotFilterValues2["NextMonth"] = "nextMonth";
  PivotFilterValues2["ThisMonth"] = "thisMonth";
  PivotFilterValues2["LastMonth"] = "lastMonth";
  PivotFilterValues2["NextQuarter"] = "nextQuarter";
  PivotFilterValues2["ThisQuarter"] = "thisQuarter";
  PivotFilterValues2["LastQuarter"] = "lastQuarter";
  PivotFilterValues2["NextYear"] = "nextYear";
  PivotFilterValues2["ThisYear"] = "thisYear";
  PivotFilterValues2["LastYear"] = "lastYear";
  PivotFilterValues2["YearToDate"] = "yearToDate";
  PivotFilterValues2["Quarter1"] = "Q1";
  PivotFilterValues2["Quarter2"] = "Q2";
  PivotFilterValues2["Quarter3"] = "Q3";
  PivotFilterValues2["Quarter4"] = "Q4";
  PivotFilterValues2["January"] = "M1";
  PivotFilterValues2["February"] = "M2";
  PivotFilterValues2["March"] = "M3";
  PivotFilterValues2["April"] = "M4";
  PivotFilterValues2["May"] = "M5";
  PivotFilterValues2["June"] = "M6";
  PivotFilterValues2["July"] = "M7";
  PivotFilterValues2["August"] = "M8";
  PivotFilterValues2["September"] = "M9";
  PivotFilterValues2["October"] = "M10";
  PivotFilterValues2["November"] = "M11";
  PivotFilterValues2["December"] = "M12";
  return PivotFilterValues2;
})(PivotFilterValues || {});
const PivotFilterValuesArray = [
  "unknown" /* Unknown */,
  "count" /* Count */,
  "percent" /* Percent */,
  "sum" /* Sum */,
  "captionEqual" /* CaptionEqual */,
  "captionNotEqual" /* CaptionNotEqual */,
  "captionBeginsWith" /* CaptionBeginsWith */,
  "captionNotBeginsWith" /* CaptionNotBeginsWith */,
  "captionEndsWith" /* CaptionEndsWith */,
  "captionNotEndsWith" /* CaptionNotEndsWith */,
  "captionContains" /* CaptionContains */,
  "captionNotContains" /* CaptionNotContains */,
  "captionGreaterThan" /* CaptionGreaterThan */,
  "captionGreaterThanOrEqual" /* CaptionGreaterThanOrEqual */,
  "captionLessThan" /* CaptionLessThan */,
  "captionLessThanOrEqual" /* CaptionLessThanOrEqual */,
  "captionBetween" /* CaptionBetween */,
  "captionNotBetween" /* CaptionNotBetween */,
  "valueEqual" /* ValueEqual */,
  "valueNotEqual" /* ValueNotEqual */,
  "valueGreaterThan" /* ValueGreaterThan */,
  "valueGreaterThanOrEqual" /* ValueGreaterThanOrEqual */,
  "valueLessThan" /* ValueLessThan */,
  "valueLessThanOrEqual" /* ValueLessThanOrEqual */,
  "valueBetween" /* ValueBetween */,
  "valueNotBetween" /* ValueNotBetween */,
  "dateEqual" /* DateEqual */,
  "dateNotEqual" /* DateNotEqual */,
  "dateOlderThan" /* DateOlderThan */,
  "dateOlderThanOrEqual" /* DateOlderThanOrEqual */,
  "dateNewerThan" /* DateNewerThan */,
  "dateNewerThanOrEqual" /* DateNewerThanOrEqual */,
  "dateBetween" /* DateBetween */,
  "dateNotBetween" /* DateNotBetween */,
  "tomorrow" /* Tomorrow */,
  "today" /* Today */,
  "yesterday" /* Yesterday */,
  "nextWeek" /* NextWeek */,
  "thisWeek" /* ThisWeek */,
  "lastWeek" /* LastWeek */,
  "nextMonth" /* NextMonth */,
  "thisMonth" /* ThisMonth */,
  "lastMonth" /* LastMonth */,
  "nextQuarter" /* NextQuarter */,
  "thisQuarter" /* ThisQuarter */,
  "lastQuarter" /* LastQuarter */,
  "nextYear" /* NextYear */,
  "thisYear" /* ThisYear */,
  "lastYear" /* LastYear */,
  "yearToDate" /* YearToDate */,
  "Q1" /* Quarter1 */,
  "Q2" /* Quarter2 */,
  "Q3" /* Quarter3 */,
  "Q4" /* Quarter4 */,
  "M1" /* January */,
  "M2" /* February */,
  "M3" /* March */,
  "M4" /* April */,
  "M5" /* May */,
  "M6" /* June */,
  "M7" /* July */,
  "M8" /* August */,
  "M9" /* September */,
  "M10" /* October */,
  "M11" /* November */,
  "M12" /* December */
];
var FormatActionValues = /* @__PURE__ */ ((FormatActionValues2) => {
  FormatActionValues2["Blank"] = "blank";
  FormatActionValues2["Formatting"] = "formatting";
  return FormatActionValues2;
})(FormatActionValues || {});
const FormatActionValuesArray = [
  "blank" /* Blank */,
  "formatting" /* Formatting */
];
var PivotTableAxisValues = /* @__PURE__ */ ((PivotTableAxisValues2) => {
  PivotTableAxisValues2["AxisRow"] = "axisRow";
  PivotTableAxisValues2["AxisColumn"] = "axisCol";
  PivotTableAxisValues2["AxisPage"] = "axisPage";
  PivotTableAxisValues2["AxisValues"] = "axisValues";
  return PivotTableAxisValues2;
})(PivotTableAxisValues || {});
const PivotTableAxisValuesArray = [
  "axisRow" /* AxisRow */,
  "axisCol" /* AxisColumn */,
  "axisPage" /* AxisPage */,
  "axisValues" /* AxisValues */
];
var GrowShrinkValues = /* @__PURE__ */ ((GrowShrinkValues2) => {
  GrowShrinkValues2["InsertDelete"] = "insertDelete";
  GrowShrinkValues2["InsertClear"] = "insertClear";
  GrowShrinkValues2["OverwriteClear"] = "overwriteClear";
  return GrowShrinkValues2;
})(GrowShrinkValues || {});
const GrowShrinkValuesArray = [
  "insertDelete" /* InsertDelete */,
  "insertClear" /* InsertClear */,
  "overwriteClear" /* OverwriteClear */
];
var PhoneticValues = /* @__PURE__ */ ((PhoneticValues2) => {
  PhoneticValues2["HalfWidthKatakana"] = "halfwidthKatakana";
  PhoneticValues2["FullWidthKatakana"] = "fullwidthKatakana";
  PhoneticValues2["Hiragana"] = "Hiragana";
  PhoneticValues2["NoConversion"] = "noConversion";
  return PhoneticValues2;
})(PhoneticValues || {});
const PhoneticValuesArray = [
  "halfwidthKatakana" /* HalfWidthKatakana */,
  "fullwidthKatakana" /* FullWidthKatakana */,
  "Hiragana" /* Hiragana */,
  "noConversion" /* NoConversion */
];
var PhoneticAlignmentValues = /* @__PURE__ */ ((PhoneticAlignmentValues2) => {
  PhoneticAlignmentValues2["NoControl"] = "noControl";
  PhoneticAlignmentValues2["Left"] = "left";
  PhoneticAlignmentValues2["Center"] = "center";
  PhoneticAlignmentValues2["Distributed"] = "distributed";
  return PhoneticAlignmentValues2;
})(PhoneticAlignmentValues || {});
const PhoneticAlignmentValuesArray = [
  "noControl" /* NoControl */,
  "left" /* Left */,
  "center" /* Center */,
  "distributed" /* Distributed */
];
var RowColumnActionValues = /* @__PURE__ */ ((RowColumnActionValues2) => {
  RowColumnActionValues2["InsertRow"] = "insertRow";
  RowColumnActionValues2["DeleteRow"] = "deleteRow";
  RowColumnActionValues2["ColumnInsert"] = "insertCol";
  RowColumnActionValues2["DeleteColumn"] = "deleteCol";
  return RowColumnActionValues2;
})(RowColumnActionValues || {});
const RowColumnActionValuesArray = [
  "insertRow" /* InsertRow */,
  "deleteRow" /* DeleteRow */,
  "insertCol" /* ColumnInsert */,
  "deleteCol" /* DeleteColumn */
];
var RevisionActionValues = /* @__PURE__ */ ((RevisionActionValues2) => {
  RevisionActionValues2["Add"] = "add";
  RevisionActionValues2["Delete"] = "delete";
  return RevisionActionValues2;
})(RevisionActionValues || {});
const RevisionActionValuesArray = [
  "add" /* Add */,
  "delete" /* Delete */
];
var FormulaExpressionValues = /* @__PURE__ */ ((FormulaExpressionValues2) => {
  FormulaExpressionValues2["Reference"] = "ref";
  FormulaExpressionValues2["ReferenceError"] = "refError";
  FormulaExpressionValues2["Area"] = "area";
  FormulaExpressionValues2["AreaError"] = "areaError";
  FormulaExpressionValues2["ComputedArea"] = "computedArea";
  return FormulaExpressionValues2;
})(FormulaExpressionValues || {});
const FormulaExpressionValuesArray = [
  "ref" /* Reference */,
  "refError" /* ReferenceError */,
  "area" /* Area */,
  "areaError" /* AreaError */,
  "computedArea" /* ComputedArea */
];
var CellFormulaValues = /* @__PURE__ */ ((CellFormulaValues2) => {
  CellFormulaValues2["Normal"] = "normal";
  CellFormulaValues2["Array"] = "array";
  CellFormulaValues2["DataTable"] = "dataTable";
  CellFormulaValues2["Shared"] = "shared";
  return CellFormulaValues2;
})(CellFormulaValues || {});
const CellFormulaValuesArray = [
  "normal" /* Normal */,
  "array" /* Array */,
  "dataTable" /* DataTable */,
  "shared" /* Shared */
];
var PaneValues = /* @__PURE__ */ ((PaneValues2) => {
  PaneValues2["BottomRight"] = "bottomRight";
  PaneValues2["TopRight"] = "topRight";
  PaneValues2["BottomLeft"] = "bottomLeft";
  PaneValues2["TopLeft"] = "topLeft";
  return PaneValues2;
})(PaneValues || {});
const PaneValuesArray = [
  "bottomRight" /* BottomRight */,
  "topRight" /* TopRight */,
  "bottomLeft" /* BottomLeft */,
  "topLeft" /* TopLeft */
];
var SheetViewValues = /* @__PURE__ */ ((SheetViewValues2) => {
  SheetViewValues2["Normal"] = "normal";
  SheetViewValues2["PageBreakPreview"] = "pageBreakPreview";
  SheetViewValues2["PageLayout"] = "pageLayout";
  return SheetViewValues2;
})(SheetViewValues || {});
const SheetViewValuesArray = [
  "normal" /* Normal */,
  "pageBreakPreview" /* PageBreakPreview */,
  "pageLayout" /* PageLayout */
];
var DataConsolidateFunctionValues = /* @__PURE__ */ ((DataConsolidateFunctionValues2) => {
  DataConsolidateFunctionValues2["Average"] = "average";
  DataConsolidateFunctionValues2["Count"] = "count";
  DataConsolidateFunctionValues2["CountNumbers"] = "countNums";
  DataConsolidateFunctionValues2["Maximum"] = "max";
  DataConsolidateFunctionValues2["Minimum"] = "min";
  DataConsolidateFunctionValues2["Product"] = "product";
  DataConsolidateFunctionValues2["StandardDeviation"] = "stdDev";
  DataConsolidateFunctionValues2["StandardDeviationP"] = "stdDevp";
  DataConsolidateFunctionValues2["Sum"] = "sum";
  DataConsolidateFunctionValues2["Variance"] = "var";
  DataConsolidateFunctionValues2["VarianceP"] = "varp";
  return DataConsolidateFunctionValues2;
})(DataConsolidateFunctionValues || {});
const DataConsolidateFunctionValuesArray = [
  "average" /* Average */,
  "count" /* Count */,
  "countNums" /* CountNumbers */,
  "max" /* Maximum */,
  "min" /* Minimum */,
  "product" /* Product */,
  "stdDev" /* StandardDeviation */,
  "stdDevp" /* StandardDeviationP */,
  "sum" /* Sum */,
  "var" /* Variance */,
  "varp" /* VarianceP */
];
var DataValidationValues = /* @__PURE__ */ ((DataValidationValues2) => {
  DataValidationValues2["None"] = "none";
  DataValidationValues2["Whole"] = "whole";
  DataValidationValues2["Decimal"] = "decimal";
  DataValidationValues2["List"] = "list";
  DataValidationValues2["Date"] = "date";
  DataValidationValues2["Time"] = "time";
  DataValidationValues2["TextLength"] = "textLength";
  DataValidationValues2["Custom"] = "custom";
  return DataValidationValues2;
})(DataValidationValues || {});
const DataValidationValuesArray = [
  "none" /* None */,
  "whole" /* Whole */,
  "decimal" /* Decimal */,
  "list" /* List */,
  "date" /* Date */,
  "time" /* Time */,
  "textLength" /* TextLength */,
  "custom" /* Custom */
];
var DataValidationOperatorValues = /* @__PURE__ */ ((DataValidationOperatorValues2) => {
  DataValidationOperatorValues2["Between"] = "between";
  DataValidationOperatorValues2["NotBetween"] = "notBetween";
  DataValidationOperatorValues2["Equal"] = "equal";
  DataValidationOperatorValues2["NotEqual"] = "notEqual";
  DataValidationOperatorValues2["LessThan"] = "lessThan";
  DataValidationOperatorValues2["LessThanOrEqual"] = "lessThanOrEqual";
  DataValidationOperatorValues2["GreaterThan"] = "greaterThan";
  DataValidationOperatorValues2["GreaterThanOrEqual"] = "greaterThanOrEqual";
  return DataValidationOperatorValues2;
})(DataValidationOperatorValues || {});
const DataValidationOperatorValuesArray = [
  "between" /* Between */,
  "notBetween" /* NotBetween */,
  "equal" /* Equal */,
  "notEqual" /* NotEqual */,
  "lessThan" /* LessThan */,
  "lessThanOrEqual" /* LessThanOrEqual */,
  "greaterThan" /* GreaterThan */,
  "greaterThanOrEqual" /* GreaterThanOrEqual */
];
var DataValidationErrorStyleValues = /* @__PURE__ */ ((DataValidationErrorStyleValues2) => {
  DataValidationErrorStyleValues2["Stop"] = "stop";
  DataValidationErrorStyleValues2["Warning"] = "warning";
  DataValidationErrorStyleValues2["Information"] = "information";
  return DataValidationErrorStyleValues2;
})(DataValidationErrorStyleValues || {});
const DataValidationErrorStyleValuesArray = [
  "stop" /* Stop */,
  "warning" /* Warning */,
  "information" /* Information */
];
var DataValidationImeModeValues = /* @__PURE__ */ ((DataValidationImeModeValues2) => {
  DataValidationImeModeValues2["NoControl"] = "noControl";
  DataValidationImeModeValues2["Off"] = "off";
  DataValidationImeModeValues2["On"] = "on";
  DataValidationImeModeValues2["Disabled"] = "disabled";
  DataValidationImeModeValues2["Hiragana"] = "hiragana";
  DataValidationImeModeValues2["FullKatakana"] = "fullKatakana";
  DataValidationImeModeValues2["HalfKatakana"] = "halfKatakana";
  DataValidationImeModeValues2["FullAlpha"] = "fullAlpha";
  DataValidationImeModeValues2["HalfAlpha"] = "halfAlpha";
  DataValidationImeModeValues2["FullHangul"] = "fullHangul";
  DataValidationImeModeValues2["HalfHangul"] = "halfHangul";
  return DataValidationImeModeValues2;
})(DataValidationImeModeValues || {});
const DataValidationImeModeValuesArray = [
  "noControl" /* NoControl */,
  "off" /* Off */,
  "on" /* On */,
  "disabled" /* Disabled */,
  "hiragana" /* Hiragana */,
  "fullKatakana" /* FullKatakana */,
  "halfKatakana" /* HalfKatakana */,
  "fullAlpha" /* FullAlpha */,
  "halfAlpha" /* HalfAlpha */,
  "fullHangul" /* FullHangul */,
  "halfHangul" /* HalfHangul */
];
var ConditionalFormatValues = /* @__PURE__ */ ((ConditionalFormatValues2) => {
  ConditionalFormatValues2["Expression"] = "expression";
  ConditionalFormatValues2["CellIs"] = "cellIs";
  ConditionalFormatValues2["ColorScale"] = "colorScale";
  ConditionalFormatValues2["DataBar"] = "dataBar";
  ConditionalFormatValues2["IconSet"] = "iconSet";
  ConditionalFormatValues2["Top10"] = "top10";
  ConditionalFormatValues2["UniqueValues"] = "uniqueValues";
  ConditionalFormatValues2["DuplicateValues"] = "duplicateValues";
  ConditionalFormatValues2["ContainsText"] = "containsText";
  ConditionalFormatValues2["NotContainsText"] = "notContainsText";
  ConditionalFormatValues2["BeginsWith"] = "beginsWith";
  ConditionalFormatValues2["EndsWith"] = "endsWith";
  ConditionalFormatValues2["ContainsBlanks"] = "containsBlanks";
  ConditionalFormatValues2["NotContainsBlanks"] = "notContainsBlanks";
  ConditionalFormatValues2["ContainsErrors"] = "containsErrors";
  ConditionalFormatValues2["NotContainsErrors"] = "notContainsErrors";
  ConditionalFormatValues2["TimePeriod"] = "timePeriod";
  ConditionalFormatValues2["AboveAverage"] = "aboveAverage";
  return ConditionalFormatValues2;
})(ConditionalFormatValues || {});
const ConditionalFormatValuesArray = [
  "expression" /* Expression */,
  "cellIs" /* CellIs */,
  "colorScale" /* ColorScale */,
  "dataBar" /* DataBar */,
  "iconSet" /* IconSet */,
  "top10" /* Top10 */,
  "uniqueValues" /* UniqueValues */,
  "duplicateValues" /* DuplicateValues */,
  "containsText" /* ContainsText */,
  "notContainsText" /* NotContainsText */,
  "beginsWith" /* BeginsWith */,
  "endsWith" /* EndsWith */,
  "containsBlanks" /* ContainsBlanks */,
  "notContainsBlanks" /* NotContainsBlanks */,
  "containsErrors" /* ContainsErrors */,
  "notContainsErrors" /* NotContainsErrors */,
  "timePeriod" /* TimePeriod */,
  "aboveAverage" /* AboveAverage */
];
var TimePeriodValues = /* @__PURE__ */ ((TimePeriodValues2) => {
  TimePeriodValues2["Today"] = "today";
  TimePeriodValues2["Yesterday"] = "yesterday";
  TimePeriodValues2["Tomorrow"] = "tomorrow";
  TimePeriodValues2["Last7Days"] = "last7Days";
  TimePeriodValues2["ThisMonth"] = "thisMonth";
  TimePeriodValues2["LastMonth"] = "lastMonth";
  TimePeriodValues2["NextMonth"] = "nextMonth";
  TimePeriodValues2["ThisWeek"] = "thisWeek";
  TimePeriodValues2["LastWeek"] = "lastWeek";
  TimePeriodValues2["NextWeek"] = "nextWeek";
  return TimePeriodValues2;
})(TimePeriodValues || {});
const TimePeriodValuesArray = [
  "today" /* Today */,
  "yesterday" /* Yesterday */,
  "tomorrow" /* Tomorrow */,
  "last7Days" /* Last7Days */,
  "thisMonth" /* ThisMonth */,
  "lastMonth" /* LastMonth */,
  "nextMonth" /* NextMonth */,
  "thisWeek" /* ThisWeek */,
  "lastWeek" /* LastWeek */,
  "nextWeek" /* NextWeek */
];
var ConditionalFormattingOperatorValues = /* @__PURE__ */ ((ConditionalFormattingOperatorValues2) => {
  ConditionalFormattingOperatorValues2["LessThan"] = "lessThan";
  ConditionalFormattingOperatorValues2["LessThanOrEqual"] = "lessThanOrEqual";
  ConditionalFormattingOperatorValues2["Equal"] = "equal";
  ConditionalFormattingOperatorValues2["NotEqual"] = "notEqual";
  ConditionalFormattingOperatorValues2["GreaterThanOrEqual"] = "greaterThanOrEqual";
  ConditionalFormattingOperatorValues2["GreaterThan"] = "greaterThan";
  ConditionalFormattingOperatorValues2["Between"] = "between";
  ConditionalFormattingOperatorValues2["NotBetween"] = "notBetween";
  ConditionalFormattingOperatorValues2["ContainsText"] = "containsText";
  ConditionalFormattingOperatorValues2["NotContains"] = "notContains";
  ConditionalFormattingOperatorValues2["BeginsWith"] = "beginsWith";
  ConditionalFormattingOperatorValues2["EndsWith"] = "endsWith";
  return ConditionalFormattingOperatorValues2;
})(ConditionalFormattingOperatorValues || {});
const ConditionalFormattingOperatorValuesArray = [
  "lessThan" /* LessThan */,
  "lessThanOrEqual" /* LessThanOrEqual */,
  "equal" /* Equal */,
  "notEqual" /* NotEqual */,
  "greaterThanOrEqual" /* GreaterThanOrEqual */,
  "greaterThan" /* GreaterThan */,
  "between" /* Between */,
  "notBetween" /* NotBetween */,
  "containsText" /* ContainsText */,
  "notContains" /* NotContains */,
  "beginsWith" /* BeginsWith */,
  "endsWith" /* EndsWith */
];
var ConditionalFormatValueObjectValues = /* @__PURE__ */ ((ConditionalFormatValueObjectValues2) => {
  ConditionalFormatValueObjectValues2["Number"] = "num";
  ConditionalFormatValueObjectValues2["Percent"] = "percent";
  ConditionalFormatValueObjectValues2["Max"] = "max";
  ConditionalFormatValueObjectValues2["Min"] = "min";
  ConditionalFormatValueObjectValues2["Formula"] = "formula";
  ConditionalFormatValueObjectValues2["Percentile"] = "percentile";
  return ConditionalFormatValueObjectValues2;
})(ConditionalFormatValueObjectValues || {});
const ConditionalFormatValueObjectValuesArray = [
  "num" /* Number */,
  "percent" /* Percent */,
  "max" /* Max */,
  "min" /* Min */,
  "formula" /* Formula */,
  "percentile" /* Percentile */
];
var PageOrderValues = /* @__PURE__ */ ((PageOrderValues2) => {
  PageOrderValues2["DownThenOver"] = "downThenOver";
  PageOrderValues2["OverThenDown"] = "overThenDown";
  return PageOrderValues2;
})(PageOrderValues || {});
const PageOrderValuesArray = [
  "downThenOver" /* DownThenOver */,
  "overThenDown" /* OverThenDown */
];
var OrientationValues = /* @__PURE__ */ ((OrientationValues2) => {
  OrientationValues2["Default"] = "default";
  OrientationValues2["Portrait"] = "portrait";
  OrientationValues2["Landscape"] = "landscape";
  return OrientationValues2;
})(OrientationValues || {});
const OrientationValuesArray = [
  "default" /* Default */,
  "portrait" /* Portrait */,
  "landscape" /* Landscape */
];
var CellCommentsValues = /* @__PURE__ */ ((CellCommentsValues2) => {
  CellCommentsValues2["None"] = "none";
  CellCommentsValues2["AsDisplayed"] = "asDisplayed";
  CellCommentsValues2["AtEnd"] = "atEnd";
  return CellCommentsValues2;
})(CellCommentsValues || {});
const CellCommentsValuesArray = [
  "none" /* None */,
  "asDisplayed" /* AsDisplayed */,
  "atEnd" /* AtEnd */
];
var PrintErrorValues = /* @__PURE__ */ ((PrintErrorValues2) => {
  PrintErrorValues2["Displayed"] = "displayed";
  PrintErrorValues2["Blank"] = "blank";
  PrintErrorValues2["Dash"] = "dash";
  PrintErrorValues2["NA"] = "NA";
  return PrintErrorValues2;
})(PrintErrorValues || {});
const PrintErrorValuesArray = [
  "displayed" /* Displayed */,
  "blank" /* Blank */,
  "dash" /* Dash */,
  "NA" /* NA */
];
var DataViewAspectValues = /* @__PURE__ */ ((DataViewAspectValues2) => {
  DataViewAspectValues2["DataViewAspectContent"] = "DVASPECT_CONTENT";
  DataViewAspectValues2["DataViewAspectIcon"] = "DVASPECT_ICON";
  return DataViewAspectValues2;
})(DataViewAspectValues || {});
const DataViewAspectValuesArray = [
  "DVASPECT_CONTENT" /* DataViewAspectContent */,
  "DVASPECT_ICON" /* DataViewAspectIcon */
];
var OleUpdateValues = /* @__PURE__ */ ((OleUpdateValues2) => {
  OleUpdateValues2["OleUpdateAlways"] = "OLEUPDATE_ALWAYS";
  OleUpdateValues2["OleUpdateOnCall"] = "OLEUPDATE_ONCALL";
  return OleUpdateValues2;
})(OleUpdateValues || {});
const OleUpdateValuesArray = [
  "OLEUPDATE_ALWAYS" /* OleUpdateAlways */,
  "OLEUPDATE_ONCALL" /* OleUpdateOnCall */
];
var WebSourceValues = /* @__PURE__ */ ((WebSourceValues2) => {
  WebSourceValues2["Sheet"] = "sheet";
  WebSourceValues2["PrintArea"] = "printArea";
  WebSourceValues2["AutoFilter"] = "autoFilter";
  WebSourceValues2["Range"] = "range";
  WebSourceValues2["Chart"] = "chart";
  WebSourceValues2["PivotTable"] = "pivotTable";
  WebSourceValues2["Query"] = "query";
  WebSourceValues2["Label"] = "label";
  return WebSourceValues2;
})(WebSourceValues || {});
const WebSourceValuesArray = [
  "sheet" /* Sheet */,
  "printArea" /* PrintArea */,
  "autoFilter" /* AutoFilter */,
  "range" /* Range */,
  "chart" /* Chart */,
  "pivotTable" /* PivotTable */,
  "query" /* Query */,
  "label" /* Label */
];
var PaneStateValues = /* @__PURE__ */ ((PaneStateValues2) => {
  PaneStateValues2["Split"] = "split";
  PaneStateValues2["Frozen"] = "frozen";
  PaneStateValues2["FrozenSplit"] = "frozenSplit";
  return PaneStateValues2;
})(PaneStateValues || {});
const PaneStateValuesArray = [
  "split" /* Split */,
  "frozen" /* Frozen */,
  "frozenSplit" /* FrozenSplit */
];
var MdxFunctionValues = /* @__PURE__ */ ((MdxFunctionValues2) => {
  MdxFunctionValues2["CubeMember"] = "m";
  MdxFunctionValues2["CubeValue"] = "v";
  MdxFunctionValues2["CubeSet"] = "s";
  MdxFunctionValues2["CubeSetCount"] = "c";
  MdxFunctionValues2["CubeRankedMember"] = "r";
  MdxFunctionValues2["CubeMemberProperty"] = "p";
  MdxFunctionValues2["CubeKPIMember"] = "k";
  return MdxFunctionValues2;
})(MdxFunctionValues || {});
const MdxFunctionValuesArray = [
  "m" /* CubeMember */,
  "v" /* CubeValue */,
  "s" /* CubeSet */,
  "c" /* CubeSetCount */,
  "r" /* CubeRankedMember */,
  "p" /* CubeMemberProperty */,
  "k" /* CubeKPIMember */
];
var MdxSetOrderValues = /* @__PURE__ */ ((MdxSetOrderValues2) => {
  MdxSetOrderValues2["Unsorted"] = "u";
  MdxSetOrderValues2["Ascending"] = "a";
  MdxSetOrderValues2["Descending"] = "d";
  MdxSetOrderValues2["AlphaAscendingSortOrder"] = "aa";
  MdxSetOrderValues2["AlphaDescendingSortOrder"] = "ad";
  MdxSetOrderValues2["NaturalAscending"] = "na";
  MdxSetOrderValues2["NaturalDescending"] = "nd";
  return MdxSetOrderValues2;
})(MdxSetOrderValues || {});
const MdxSetOrderValuesArray = [
  "u" /* Unsorted */,
  "a" /* Ascending */,
  "d" /* Descending */,
  "aa" /* AlphaAscendingSortOrder */,
  "ad" /* AlphaDescendingSortOrder */,
  "na" /* NaturalAscending */,
  "nd" /* NaturalDescending */
];
var MdxKPIPropertyValues = /* @__PURE__ */ ((MdxKPIPropertyValues2) => {
  MdxKPIPropertyValues2["Value"] = "v";
  MdxKPIPropertyValues2["Goal"] = "g";
  MdxKPIPropertyValues2["Status"] = "s";
  MdxKPIPropertyValues2["Trend"] = "t";
  MdxKPIPropertyValues2["Weight"] = "w";
  MdxKPIPropertyValues2["Time"] = "m";
  return MdxKPIPropertyValues2;
})(MdxKPIPropertyValues || {});
const MdxKPIPropertyValuesArray = [
  "v" /* Value */,
  "g" /* Goal */,
  "s" /* Status */,
  "t" /* Trend */,
  "w" /* Weight */,
  "m" /* Time */
];
var BorderStyleValues = /* @__PURE__ */ ((BorderStyleValues2) => {
  BorderStyleValues2["None"] = "none";
  BorderStyleValues2["Thin"] = "thin";
  BorderStyleValues2["Medium"] = "medium";
  BorderStyleValues2["Dashed"] = "dashed";
  BorderStyleValues2["Dotted"] = "dotted";
  BorderStyleValues2["Thick"] = "thick";
  BorderStyleValues2["Double"] = "double";
  BorderStyleValues2["Hair"] = "hair";
  BorderStyleValues2["MediumDashed"] = "mediumDashed";
  BorderStyleValues2["DashDot"] = "dashDot";
  BorderStyleValues2["MediumDashDot"] = "mediumDashDot";
  BorderStyleValues2["DashDotDot"] = "dashDotDot";
  BorderStyleValues2["MediumDashDotDot"] = "mediumDashDotDot";
  BorderStyleValues2["SlantDashDot"] = "slantDashDot";
  return BorderStyleValues2;
})(BorderStyleValues || {});
const BorderStyleValuesArray = [
  "none" /* None */,
  "thin" /* Thin */,
  "medium" /* Medium */,
  "dashed" /* Dashed */,
  "dotted" /* Dotted */,
  "thick" /* Thick */,
  "double" /* Double */,
  "hair" /* Hair */,
  "mediumDashed" /* MediumDashed */,
  "dashDot" /* DashDot */,
  "mediumDashDot" /* MediumDashDot */,
  "dashDotDot" /* DashDotDot */,
  "mediumDashDotDot" /* MediumDashDotDot */,
  "slantDashDot" /* SlantDashDot */
];
var PatternValues = /* @__PURE__ */ ((PatternValues2) => {
  PatternValues2["None"] = "none";
  PatternValues2["Solid"] = "solid";
  PatternValues2["MediumGray"] = "mediumGray";
  PatternValues2["DarkGray"] = "darkGray";
  PatternValues2["LightGray"] = "lightGray";
  PatternValues2["DarkHorizontal"] = "darkHorizontal";
  PatternValues2["DarkVertical"] = "darkVertical";
  PatternValues2["DarkDown"] = "darkDown";
  PatternValues2["DarkUp"] = "darkUp";
  PatternValues2["DarkGrid"] = "darkGrid";
  PatternValues2["DarkTrellis"] = "darkTrellis";
  PatternValues2["LightHorizontal"] = "lightHorizontal";
  PatternValues2["LightVertical"] = "lightVertical";
  PatternValues2["LightDown"] = "lightDown";
  PatternValues2["LightUp"] = "lightUp";
  PatternValues2["LightGrid"] = "lightGrid";
  PatternValues2["LightTrellis"] = "lightTrellis";
  PatternValues2["Gray125"] = "gray125";
  PatternValues2["Gray0625"] = "gray0625";
  return PatternValues2;
})(PatternValues || {});
const PatternValuesArray = [
  "none" /* None */,
  "solid" /* Solid */,
  "mediumGray" /* MediumGray */,
  "darkGray" /* DarkGray */,
  "lightGray" /* LightGray */,
  "darkHorizontal" /* DarkHorizontal */,
  "darkVertical" /* DarkVertical */,
  "darkDown" /* DarkDown */,
  "darkUp" /* DarkUp */,
  "darkGrid" /* DarkGrid */,
  "darkTrellis" /* DarkTrellis */,
  "lightHorizontal" /* LightHorizontal */,
  "lightVertical" /* LightVertical */,
  "lightDown" /* LightDown */,
  "lightUp" /* LightUp */,
  "lightGrid" /* LightGrid */,
  "lightTrellis" /* LightTrellis */,
  "gray125" /* Gray125 */,
  "gray0625" /* Gray0625 */
];
var GradientValues = /* @__PURE__ */ ((GradientValues2) => {
  GradientValues2["Linear"] = "linear";
  GradientValues2["Path"] = "path";
  return GradientValues2;
})(GradientValues || {});
const GradientValuesArray = [
  "linear" /* Linear */,
  "path" /* Path */
];
var HorizontalAlignmentValues = /* @__PURE__ */ ((HorizontalAlignmentValues2) => {
  HorizontalAlignmentValues2["General"] = "general";
  HorizontalAlignmentValues2["Left"] = "left";
  HorizontalAlignmentValues2["Center"] = "center";
  HorizontalAlignmentValues2["Right"] = "right";
  HorizontalAlignmentValues2["Fill"] = "fill";
  HorizontalAlignmentValues2["Justify"] = "justify";
  HorizontalAlignmentValues2["CenterContinuous"] = "centerContinuous";
  HorizontalAlignmentValues2["Distributed"] = "distributed";
  return HorizontalAlignmentValues2;
})(HorizontalAlignmentValues || {});
const HorizontalAlignmentValuesArray = [
  "general" /* General */,
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */,
  "fill" /* Fill */,
  "justify" /* Justify */,
  "centerContinuous" /* CenterContinuous */,
  "distributed" /* Distributed */
];
var VerticalAlignmentValues = /* @__PURE__ */ ((VerticalAlignmentValues2) => {
  VerticalAlignmentValues2["Top"] = "top";
  VerticalAlignmentValues2["Center"] = "center";
  VerticalAlignmentValues2["Bottom"] = "bottom";
  VerticalAlignmentValues2["Justify"] = "justify";
  VerticalAlignmentValues2["Distributed"] = "distributed";
  return VerticalAlignmentValues2;
})(VerticalAlignmentValues || {});
const VerticalAlignmentValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "bottom" /* Bottom */,
  "justify" /* Justify */,
  "distributed" /* Distributed */
];
var TableStyleValues = /* @__PURE__ */ ((TableStyleValues2) => {
  TableStyleValues2["WholeTable"] = "wholeTable";
  TableStyleValues2["HeaderRow"] = "headerRow";
  TableStyleValues2["TotalRow"] = "totalRow";
  TableStyleValues2["FirstColumn"] = "firstColumn";
  TableStyleValues2["LastColumn"] = "lastColumn";
  TableStyleValues2["FirstRowStripe"] = "firstRowStripe";
  TableStyleValues2["SecondRowStripe"] = "secondRowStripe";
  TableStyleValues2["FirstColumnStripe"] = "firstColumnStripe";
  TableStyleValues2["SecondColumnStripe"] = "secondColumnStripe";
  TableStyleValues2["FirstHeaderCell"] = "firstHeaderCell";
  TableStyleValues2["LastHeaderCell"] = "lastHeaderCell";
  TableStyleValues2["FirstTotalCell"] = "firstTotalCell";
  TableStyleValues2["LastTotalCell"] = "lastTotalCell";
  TableStyleValues2["FirstSubtotalColumn"] = "firstSubtotalColumn";
  TableStyleValues2["SecondSubtotalColumn"] = "secondSubtotalColumn";
  TableStyleValues2["ThirdSubtotalColumn"] = "thirdSubtotalColumn";
  TableStyleValues2["FirstSubtotalRow"] = "firstSubtotalRow";
  TableStyleValues2["SecondSubtotalRow"] = "secondSubtotalRow";
  TableStyleValues2["ThirdSubtotalRow"] = "thirdSubtotalRow";
  TableStyleValues2["BlankRow"] = "blankRow";
  TableStyleValues2["FirstColumnSubheading"] = "firstColumnSubheading";
  TableStyleValues2["SecondColumnSubheading"] = "secondColumnSubheading";
  TableStyleValues2["ThirdColumnSubheading"] = "thirdColumnSubheading";
  TableStyleValues2["FirstRowSubheading"] = "firstRowSubheading";
  TableStyleValues2["SecondRowSubheading"] = "secondRowSubheading";
  TableStyleValues2["ThirdRowSubheading"] = "thirdRowSubheading";
  TableStyleValues2["PageFieldLabels"] = "pageFieldLabels";
  TableStyleValues2["PageFieldValues"] = "pageFieldValues";
  return TableStyleValues2;
})(TableStyleValues || {});
const TableStyleValuesArray = [
  "wholeTable" /* WholeTable */,
  "headerRow" /* HeaderRow */,
  "totalRow" /* TotalRow */,
  "firstColumn" /* FirstColumn */,
  "lastColumn" /* LastColumn */,
  "firstRowStripe" /* FirstRowStripe */,
  "secondRowStripe" /* SecondRowStripe */,
  "firstColumnStripe" /* FirstColumnStripe */,
  "secondColumnStripe" /* SecondColumnStripe */,
  "firstHeaderCell" /* FirstHeaderCell */,
  "lastHeaderCell" /* LastHeaderCell */,
  "firstTotalCell" /* FirstTotalCell */,
  "lastTotalCell" /* LastTotalCell */,
  "firstSubtotalColumn" /* FirstSubtotalColumn */,
  "secondSubtotalColumn" /* SecondSubtotalColumn */,
  "thirdSubtotalColumn" /* ThirdSubtotalColumn */,
  "firstSubtotalRow" /* FirstSubtotalRow */,
  "secondSubtotalRow" /* SecondSubtotalRow */,
  "thirdSubtotalRow" /* ThirdSubtotalRow */,
  "blankRow" /* BlankRow */,
  "firstColumnSubheading" /* FirstColumnSubheading */,
  "secondColumnSubheading" /* SecondColumnSubheading */,
  "thirdColumnSubheading" /* ThirdColumnSubheading */,
  "firstRowSubheading" /* FirstRowSubheading */,
  "secondRowSubheading" /* SecondRowSubheading */,
  "thirdRowSubheading" /* ThirdRowSubheading */,
  "pageFieldLabels" /* PageFieldLabels */,
  "pageFieldValues" /* PageFieldValues */
];
var VerticalAlignmentRunValues = /* @__PURE__ */ ((VerticalAlignmentRunValues2) => {
  VerticalAlignmentRunValues2["Baseline"] = "baseline";
  VerticalAlignmentRunValues2["Superscript"] = "superscript";
  VerticalAlignmentRunValues2["Subscript"] = "subscript";
  return VerticalAlignmentRunValues2;
})(VerticalAlignmentRunValues || {});
const VerticalAlignmentRunValuesArray = [
  "baseline" /* Baseline */,
  "superscript" /* Superscript */,
  "subscript" /* Subscript */
];
var FontSchemeValues = /* @__PURE__ */ ((FontSchemeValues2) => {
  FontSchemeValues2["None"] = "none";
  FontSchemeValues2["Major"] = "major";
  FontSchemeValues2["Minor"] = "minor";
  return FontSchemeValues2;
})(FontSchemeValues || {});
const FontSchemeValuesArray = [
  "none" /* None */,
  "major" /* Major */,
  "minor" /* Minor */
];
var UnderlineValues = /* @__PURE__ */ ((UnderlineValues2) => {
  UnderlineValues2["Single"] = "single";
  UnderlineValues2["Double"] = "double";
  UnderlineValues2["SingleAccounting"] = "singleAccounting";
  UnderlineValues2["DoubleAccounting"] = "doubleAccounting";
  UnderlineValues2["None"] = "none";
  return UnderlineValues2;
})(UnderlineValues || {});
const UnderlineValuesArray = [
  "single" /* Single */,
  "double" /* Double */,
  "singleAccounting" /* SingleAccounting */,
  "doubleAccounting" /* DoubleAccounting */,
  "none" /* None */
];
var DdeValues = /* @__PURE__ */ ((DdeValues2) => {
  DdeValues2["Nil"] = "nil";
  DdeValues2["Boolean"] = "b";
  DdeValues2["RealNumber"] = "n";
  DdeValues2["Error"] = "e";
  DdeValues2["String"] = "str";
  return DdeValues2;
})(DdeValues || {});
const DdeValuesArray = [
  "nil" /* Nil */,
  "b" /* Boolean */,
  "n" /* RealNumber */,
  "e" /* Error */,
  "str" /* String */
];
var TableValues = /* @__PURE__ */ ((TableValues2) => {
  TableValues2["Worksheet"] = "worksheet";
  TableValues2["Xml"] = "xml";
  TableValues2["QueryTable"] = "queryTable";
  return TableValues2;
})(TableValues || {});
const TableValuesArray = [
  "worksheet" /* Worksheet */,
  "xml" /* Xml */,
  "queryTable" /* QueryTable */
];
var TotalsRowFunctionValues = /* @__PURE__ */ ((TotalsRowFunctionValues2) => {
  TotalsRowFunctionValues2["None"] = "none";
  TotalsRowFunctionValues2["Sum"] = "sum";
  TotalsRowFunctionValues2["Minimum"] = "min";
  TotalsRowFunctionValues2["Maximum"] = "max";
  TotalsRowFunctionValues2["Average"] = "average";
  TotalsRowFunctionValues2["Count"] = "count";
  TotalsRowFunctionValues2["CountNumbers"] = "countNums";
  TotalsRowFunctionValues2["StandardDeviation"] = "stdDev";
  TotalsRowFunctionValues2["Variance"] = "var";
  TotalsRowFunctionValues2["Custom"] = "custom";
  return TotalsRowFunctionValues2;
})(TotalsRowFunctionValues || {});
const TotalsRowFunctionValuesArray = [
  "none" /* None */,
  "sum" /* Sum */,
  "min" /* Minimum */,
  "max" /* Maximum */,
  "average" /* Average */,
  "count" /* Count */,
  "countNums" /* CountNumbers */,
  "stdDev" /* StandardDeviation */,
  "var" /* Variance */,
  "custom" /* Custom */
];
var XmlDataValues = /* @__PURE__ */ ((XmlDataValues2) => {
  XmlDataValues2["String"] = "string";
  XmlDataValues2["NormalizedString"] = "normalizedString";
  XmlDataValues2["Token"] = "token";
  XmlDataValues2["Byte"] = "byte";
  XmlDataValues2["UnsignedByte"] = "unsignedByte";
  XmlDataValues2["Base64Binary"] = "base64Binary";
  XmlDataValues2["HexBinary"] = "hexBinary";
  XmlDataValues2["Integer"] = "integer";
  XmlDataValues2["PositiveInteger"] = "positiveInteger";
  XmlDataValues2["NegativeInteger"] = "negativeInteger";
  XmlDataValues2["NonPositiveInteger"] = "nonPositiveInteger";
  XmlDataValues2["NonNegativeInteger"] = "nonNegativeInteger";
  XmlDataValues2["Int"] = "int";
  XmlDataValues2["UnsignedInteger"] = "unsignedInt";
  XmlDataValues2["Long"] = "long";
  XmlDataValues2["UnsignedLong"] = "unsignedLong";
  XmlDataValues2["Short"] = "short";
  XmlDataValues2["UnsignedShort"] = "unsignedShort";
  XmlDataValues2["Decimal"] = "decimal";
  XmlDataValues2["Float"] = "float";
  XmlDataValues2["Double"] = "double";
  XmlDataValues2["Boolean"] = "boolean";
  XmlDataValues2["Time"] = "time";
  XmlDataValues2["DateTime"] = "dateTime";
  XmlDataValues2["Duration"] = "duration";
  XmlDataValues2["Date"] = "date";
  XmlDataValues2["Gmonth"] = "gMonth";
  XmlDataValues2["Gyear"] = "gYear";
  XmlDataValues2["GYearMonth"] = "gYearMonth";
  XmlDataValues2["Gday"] = "gDay";
  XmlDataValues2["GMonthDay"] = "gMonthDay";
  XmlDataValues2["Name"] = "Name";
  XmlDataValues2["Qname"] = "QName";
  XmlDataValues2["NCName"] = "NCName";
  XmlDataValues2["AnyURI"] = "anyURI";
  XmlDataValues2["Language"] = "language";
  XmlDataValues2["Id"] = "ID";
  XmlDataValues2["IdRef"] = "IDREF";
  XmlDataValues2["IdRefs"] = "IDREFS";
  XmlDataValues2["Entity"] = "ENTITY";
  XmlDataValues2["Entities"] = "ENTITIES";
  XmlDataValues2["Notation"] = "NOTATION";
  XmlDataValues2["NMToken"] = "NMTOKEN";
  XmlDataValues2["NMTokens"] = "NMTOKENS";
  XmlDataValues2["AnyType"] = "anyType";
  return XmlDataValues2;
})(XmlDataValues || {});
const XmlDataValuesArray = [
  "string" /* String */,
  "normalizedString" /* NormalizedString */,
  "token" /* Token */,
  "byte" /* Byte */,
  "unsignedByte" /* UnsignedByte */,
  "base64Binary" /* Base64Binary */,
  "hexBinary" /* HexBinary */,
  "integer" /* Integer */,
  "positiveInteger" /* PositiveInteger */,
  "negativeInteger" /* NegativeInteger */,
  "nonPositiveInteger" /* NonPositiveInteger */,
  "nonNegativeInteger" /* NonNegativeInteger */,
  "int" /* Int */,
  "unsignedInt" /* UnsignedInteger */,
  "long" /* Long */,
  "unsignedLong" /* UnsignedLong */,
  "short" /* Short */,
  "unsignedShort" /* UnsignedShort */,
  "decimal" /* Decimal */,
  "float" /* Float */,
  "double" /* Double */,
  "boolean" /* Boolean */,
  "time" /* Time */,
  "dateTime" /* DateTime */,
  "duration" /* Duration */,
  "date" /* Date */,
  "gMonth" /* Gmonth */,
  "gYear" /* Gyear */,
  "gYearMonth" /* GYearMonth */,
  "gDay" /* Gday */,
  "gMonthDay" /* GMonthDay */,
  "Name" /* Name */,
  "QName" /* Qname */,
  "NCName" /* NCName */,
  "anyURI" /* AnyURI */,
  "language" /* Language */,
  "ID" /* Id */,
  "IDREF" /* IdRef */,
  "IDREFS" /* IdRefs */,
  "ENTITY" /* Entity */,
  "ENTITIES" /* Entities */,
  "NOTATION" /* Notation */,
  "NMTOKEN" /* NMToken */,
  "NMTOKENS" /* NMTokens */,
  "anyType" /* AnyType */
];
var VolatileDependencyValues = /* @__PURE__ */ ((VolatileDependencyValues2) => {
  VolatileDependencyValues2["RealTimeData"] = "realTimeData";
  VolatileDependencyValues2["OlapFunctions"] = "olapFunctions";
  return VolatileDependencyValues2;
})(VolatileDependencyValues || {});
const VolatileDependencyValuesArray = [
  "realTimeData" /* RealTimeData */,
  "olapFunctions" /* OlapFunctions */
];
var VolatileValues = /* @__PURE__ */ ((VolatileValues2) => {
  VolatileValues2["Boolean"] = "b";
  VolatileValues2["RealNumber"] = "n";
  VolatileValues2["Error"] = "e";
  VolatileValues2["String"] = "s";
  return VolatileValues2;
})(VolatileValues || {});
const VolatileValuesArray = [
  "b" /* Boolean */,
  "n" /* RealNumber */,
  "e" /* Error */,
  "s" /* String */
];
var VisibilityValues = /* @__PURE__ */ ((VisibilityValues2) => {
  VisibilityValues2["Visible"] = "visible";
  VisibilityValues2["Hidden"] = "hidden";
  VisibilityValues2["VeryHidden"] = "veryHidden";
  return VisibilityValues2;
})(VisibilityValues || {});
const VisibilityValuesArray = [
  "visible" /* Visible */,
  "hidden" /* Hidden */,
  "veryHidden" /* VeryHidden */
];
var CommentsValues = /* @__PURE__ */ ((CommentsValues2) => {
  CommentsValues2["CommentNone"] = "commNone";
  CommentsValues2["CommentIndicator"] = "commIndicator";
  CommentsValues2["CommentIndicatorAndComment"] = "commIndAndComment";
  return CommentsValues2;
})(CommentsValues || {});
const CommentsValuesArray = [
  "commNone" /* CommentNone */,
  "commIndicator" /* CommentIndicator */,
  "commIndAndComment" /* CommentIndicatorAndComment */
];
var ObjectDisplayValues = /* @__PURE__ */ ((ObjectDisplayValues2) => {
  ObjectDisplayValues2["All"] = "all";
  ObjectDisplayValues2["Placeholders"] = "placeholders";
  ObjectDisplayValues2["None"] = "none";
  return ObjectDisplayValues2;
})(ObjectDisplayValues || {});
const ObjectDisplayValuesArray = [
  "all" /* All */,
  "placeholders" /* Placeholders */,
  "none" /* None */
];
var SheetStateValues = /* @__PURE__ */ ((SheetStateValues2) => {
  SheetStateValues2["Visible"] = "visible";
  SheetStateValues2["Hidden"] = "hidden";
  SheetStateValues2["VeryHidden"] = "veryHidden";
  return SheetStateValues2;
})(SheetStateValues || {});
const SheetStateValuesArray = [
  "visible" /* Visible */,
  "hidden" /* Hidden */,
  "veryHidden" /* VeryHidden */
];
var UpdateLinksBehaviorValues = /* @__PURE__ */ ((UpdateLinksBehaviorValues2) => {
  UpdateLinksBehaviorValues2["UserSet"] = "userSet";
  UpdateLinksBehaviorValues2["Never"] = "never";
  UpdateLinksBehaviorValues2["Always"] = "always";
  return UpdateLinksBehaviorValues2;
})(UpdateLinksBehaviorValues || {});
const UpdateLinksBehaviorValuesArray = [
  "userSet" /* UserSet */,
  "never" /* Never */,
  "always" /* Always */
];
var CalculateModeValues = /* @__PURE__ */ ((CalculateModeValues2) => {
  CalculateModeValues2["Manual"] = "manual";
  CalculateModeValues2["Auto"] = "auto";
  CalculateModeValues2["AutoNoTable"] = "autoNoTable";
  return CalculateModeValues2;
})(CalculateModeValues || {});
const CalculateModeValuesArray = [
  "manual" /* Manual */,
  "auto" /* Auto */,
  "autoNoTable" /* AutoNoTable */
];
var ReferenceModeValues = /* @__PURE__ */ ((ReferenceModeValues2) => {
  ReferenceModeValues2["A1"] = "A1";
  ReferenceModeValues2["R1C1"] = "R1C1";
  return ReferenceModeValues2;
})(ReferenceModeValues || {});
const ReferenceModeValuesArray = [
  "A1" /* A1 */,
  "R1C1" /* R1C1 */
];
var TargetScreenSizeValues = /* @__PURE__ */ ((TargetScreenSizeValues2) => {
  TargetScreenSizeValues2["Sz544x376"] = "544x376";
  TargetScreenSizeValues2["Sz640x480"] = "640x480";
  TargetScreenSizeValues2["Sz720x512"] = "720x512";
  TargetScreenSizeValues2["Sz800x600"] = "800x600";
  TargetScreenSizeValues2["Sz1024x768"] = "1024x768";
  TargetScreenSizeValues2["Sz1152x882"] = "1152x882";
  TargetScreenSizeValues2["Sz1152x900"] = "1152x900";
  TargetScreenSizeValues2["Sz1280x1024"] = "1280x1024";
  TargetScreenSizeValues2["Sz1600x1200"] = "1600x1200";
  TargetScreenSizeValues2["Sz1800x1440"] = "1800x1440";
  TargetScreenSizeValues2["Sz1920x1200"] = "1920x1200";
  return TargetScreenSizeValues2;
})(TargetScreenSizeValues || {});
const TargetScreenSizeValuesArray = [
  "544x376" /* Sz544x376 */,
  "640x480" /* Sz640x480 */,
  "720x512" /* Sz720x512 */,
  "800x600" /* Sz800x600 */,
  "1024x768" /* Sz1024x768 */,
  "1152x882" /* Sz1152x882 */,
  "1152x900" /* Sz1152x900 */,
  "1280x1024" /* Sz1280x1024 */,
  "1600x1200" /* Sz1600x1200 */,
  "1800x1440" /* Sz1800x1440 */,
  "1920x1200" /* Sz1920x1200 */
];
var TextHorizontalAlignmentValues = /* @__PURE__ */ ((TextHorizontalAlignmentValues2) => {
  TextHorizontalAlignmentValues2["Left"] = "left";
  TextHorizontalAlignmentValues2["Center"] = "center";
  TextHorizontalAlignmentValues2["Right"] = "right";
  TextHorizontalAlignmentValues2["Justify"] = "justify";
  TextHorizontalAlignmentValues2["Distributed"] = "distributed";
  return TextHorizontalAlignmentValues2;
})(TextHorizontalAlignmentValues || {});
const TextHorizontalAlignmentValuesArray = [
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */,
  "justify" /* Justify */,
  "distributed" /* Distributed */
];
var TextVerticalAlignmentValues = /* @__PURE__ */ ((TextVerticalAlignmentValues2) => {
  TextVerticalAlignmentValues2["Top"] = "top";
  TextVerticalAlignmentValues2["Center"] = "center";
  TextVerticalAlignmentValues2["Bottom"] = "bottom";
  TextVerticalAlignmentValues2["Justify"] = "justify";
  TextVerticalAlignmentValues2["Distributed"] = "distributed";
  return TextVerticalAlignmentValues2;
})(TextVerticalAlignmentValues || {});
const TextVerticalAlignmentValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "bottom" /* Bottom */,
  "justify" /* Justify */,
  "distributed" /* Distributed */
];
var CellValues = /* @__PURE__ */ ((CellValues2) => {
  CellValues2["Boolean"] = "b";
  CellValues2["Number"] = "n";
  CellValues2["Error"] = "e";
  CellValues2["SharedString"] = "s";
  CellValues2["String"] = "str";
  CellValues2["InlineString"] = "inlineStr";
  CellValues2["Date"] = "d";
  return CellValues2;
})(CellValues || {});
const CellValuesArray = [
  "b" /* Boolean */,
  "n" /* Number */,
  "e" /* Error */,
  "s" /* SharedString */,
  "str" /* String */,
  "inlineStr" /* InlineString */,
  "d" /* Date */
];
var PivotAreaValues = /* @__PURE__ */ ((PivotAreaValues2) => {
  PivotAreaValues2["None"] = "none";
  PivotAreaValues2["Normal"] = "normal";
  PivotAreaValues2["Data"] = "data";
  PivotAreaValues2["All"] = "all";
  PivotAreaValues2["Origin"] = "origin";
  PivotAreaValues2["Button"] = "button";
  PivotAreaValues2["TopRight"] = "topRight";
  PivotAreaValues2["TopEnd"] = "topEnd";
  return PivotAreaValues2;
})(PivotAreaValues || {});
const PivotAreaValuesArray = [
  "none" /* None */,
  "normal" /* Normal */,
  "data" /* Data */,
  "all" /* All */,
  "origin" /* Origin */,
  "button" /* Button */,
  "topRight" /* TopRight */,
  "topEnd" /* TopEnd */
];
var ConformanceClass = /* @__PURE__ */ ((ConformanceClass2) => {
  ConformanceClass2["Enumstrict"] = "strict";
  ConformanceClass2["Enumtransitional"] = "transitional";
  return ConformanceClass2;
})(ConformanceClass || {});
const ConformanceClassArray = [
  "strict" /* Enumstrict */,
  "transitional" /* Enumtransitional */
];
class SheetDataSet extends OxmlCompositeElement {
  static _Q = "x:sheetDataSet";
}
class ExternalDefinedNames extends OxmlCompositeElement {
  static _Q = "x:definedNames";
}
class SheetNames extends OxmlCompositeElement {
  static _Q = "x:sheetNames";
}
class RichDataPivotCacheGuid extends OxmlLeafElement {
  static _Q = "x:richInfo";
  static _A = [":pivotCacheGuid"];
  /** pivotCacheGuid. Serialized as `:pivotCacheGuid` */
  get pivotCacheGuid() {
    return this._g(":pivotCacheGuid");
  }
  set pivotCacheGuid(v) {
    this._s(":pivotCacheGuid", v);
  }
}
class PivotCacheDefinitionExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14PivotCacheDefinition. */
  get pivotCacheDefinition() {
    return this._f(X14PivotCacheDefinition);
  }
  /** Returns X15PivotCacheDecoupled. */
  get pivotCacheDecoupled() {
    return this._f(X15PivotCacheDecoupled);
  }
  /** Returns X15TimelinePivotCacheDefinition. */
  get timelinePivotCacheDefinition() {
    return this._f(X15TimelinePivotCacheDefinition);
  }
  /** Returns X15PivotCacheIdVersion. */
  get pivotCacheIdVersion() {
    return this._f(X15PivotCacheIdVersion);
  }
  /** Returns XxpimXsdboolean. */
  get xsdboolean() {
    return this._f(XxpimXsdboolean);
  }
  /** Returns RichDataPivotCacheGuid. */
  get richDataPivotCacheGuid() {
    return this._f(RichDataPivotCacheGuid);
  }
  /** Returns XxpviCacheVersionInfo. */
  get cacheVersionInfo() {
    return this._f(XxpviCacheVersionInfo);
  }
}
class PivotCacheDefinitionExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class Maps extends OxmlCompositeElement {
  static _Q = "x:maps";
  static _A = [":count"];
  /** Measure Group Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class MeasureGroups extends OxmlCompositeElement {
  static _Q = "x:measureGroups";
  static _A = [":count"];
  /** Measure Group Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Dimensions extends OxmlCompositeElement {
  static _Q = "x:dimensions";
  static _A = [":count"];
  /** OLAP Dimensions Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CalculatedMembers extends OxmlCompositeElement {
  static _Q = "x:calculatedMembers";
  static _A = [":count"];
  /** Calculated Members Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CalculatedItems extends OxmlCompositeElement {
  static _Q = "x:calculatedItems";
  static _A = [":count"];
  /** Calculated Item Formula Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class TupleCache extends OxmlCompositeElement {
  static _Q = "x:tupleCache";
  /** Entries. */
  get entries() {
    return this._f(Entries);
  }
  /** Sets. */
  get sets() {
    return this._f(Sets);
  }
  /** OLAP Query Cache. */
  get queryCache() {
    return this._f(QueryCache);
  }
  /** Server Formats. */
  get serverFormats() {
    return this._f(ServerFormats);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Kpis extends OxmlCompositeElement {
  static _Q = "x:kpis";
  static _A = [":count"];
  /** KPI Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CacheHierarchies extends OxmlCompositeElement {
  static _Q = "x:cacheHierarchies";
  static _A = [":count"];
  /** Hierarchy Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CacheFields extends OxmlCompositeElement {
  static _Q = "x:cacheFields";
  static _A = [":count"];
  /** Field Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CacheSource extends OxmlCompositeElement {
  static _Q = "x:cacheSource";
  static _A = [":type", ":connectionId"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** connectionId. Serialized as `:connectionId` */
  get connectionId() {
    return this._g(":connectionId");
  }
  set connectionId(v) {
    this._s(":connectionId", v);
  }
  /** Returns WorksheetSource. */
  get worksheetSource() {
    return this._f(WorksheetSource);
  }
  /** Returns Consolidation. */
  get consolidation() {
    return this._f(Consolidation);
  }
  /** Returns CacheSourceExtensionList. */
  get cacheSourceExtensionList() {
    return this._f(CacheSourceExtensionList);
  }
}
class PivotTableDefinitionExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14PivotTableDefinition. */
  get pivotTableDefinition() {
    return this._f(X14PivotTableDefinition);
  }
  /** Returns X15PivotTableData. */
  get pivotTableData() {
    return this._f(X15PivotTableData);
  }
  /** Returns X15PivotTableUISettings. */
  get pivotTableUISettings() {
    return this._f(X15PivotTableUISettings);
  }
  /** Returns XxpviPivotVersionInfo. */
  get pivotVersionInfo() {
    return this._f(XxpviPivotVersionInfo);
  }
}
class PivotTableDefinitionExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class ColumnHierarchiesUsage extends OxmlCompositeElement {
  static _Q = "x:colHierarchiesUsage";
  static _A = [":count"];
  /** Items Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RowHierarchiesUsage extends OxmlCompositeElement {
  static _Q = "x:rowHierarchiesUsage";
  static _A = [":count"];
  /** Item Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotFilters extends OxmlCompositeElement {
  static _Q = "x:filters";
  static _A = [":count"];
  /** Pivot Filter Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotTableStyle extends OxmlLeafElement {
  static _Q = "x:pivotTableStyleInfo";
  static _A = [":name", ":showRowHeaders", ":showColHeaders", ":showRowStripes", ":showColStripes", ":showLastColumn"];
  /** Table Style Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Show Row Header Formatting. Serialized as `:showRowHeaders` */
  get showRowHeaders() {
    return this._g(":showRowHeaders");
  }
  set showRowHeaders(v) {
    this._s(":showRowHeaders", v);
  }
  /** Show Table Style Column Header Formatting. Serialized as `:showColHeaders` */
  get showColumnHeaders() {
    return this._g(":showColHeaders");
  }
  set showColumnHeaders(v) {
    this._s(":showColHeaders", v);
  }
  /** Show Row Stripes. Serialized as `:showRowStripes` */
  get showRowStripes() {
    return this._g(":showRowStripes");
  }
  set showRowStripes(v) {
    this._s(":showRowStripes", v);
  }
  /** Show Column Stripes. Serialized as `:showColStripes` */
  get showColumnStripes() {
    return this._g(":showColStripes");
  }
  set showColumnStripes(v) {
    this._s(":showColStripes", v);
  }
  /** Show Last Column. Serialized as `:showLastColumn` */
  get showLastColumn() {
    return this._g(":showLastColumn");
  }
  set showLastColumn(v) {
    this._s(":showLastColumn", v);
  }
}
class PivotHierarchies extends OxmlCompositeElement {
  static _Q = "x:pivotHierarchies";
  static _A = [":count"];
  /** OLAP Hierarchy Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ChartFormats extends OxmlCompositeElement {
  static _Q = "x:chartFormats";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ConditionalFormats extends OxmlCompositeElement {
  static _Q = "x:conditionalFormats";
  static _A = [":count"];
  /** Conditional Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Formats extends OxmlCompositeElement {
  static _Q = "x:formats";
  static _A = [":count"];
  /** Formats Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class DataFields extends OxmlCompositeElement {
  static _Q = "x:dataFields";
  static _A = [":count"];
  /** Data Items Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PageFields extends OxmlCompositeElement {
  static _Q = "x:pageFields";
  static _A = [":count"];
  /** Page Item Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ColumnItems extends OxmlCompositeElement {
  static _Q = "x:colItems";
  static _A = [":count"];
  /** Column Item Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ColumnFields extends OxmlCompositeElement {
  static _Q = "x:colFields";
  static _A = [":count"];
  /** Repeated Items Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RowItems extends OxmlCompositeElement {
  static _Q = "x:rowItems";
  static _A = [":count"];
  /** Items in a Row Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RowFields extends OxmlCompositeElement {
  static _Q = "x:rowFields";
  static _A = [":count"];
  /** Repeated Items Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotFields extends OxmlCompositeElement {
  static _Q = "x:pivotFields";
  static _A = [":count"];
  /** Field Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Location extends OxmlLeafElement {
  static _Q = "x:location";
  static _A = [":ref", ":firstHeaderRow", ":firstDataRow", ":firstDataCol", ":rowPageCount", ":colPageCount"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** First Header Row. Serialized as `:firstHeaderRow` */
  get firstHeaderRow() {
    return this._g(":firstHeaderRow");
  }
  set firstHeaderRow(v) {
    this._s(":firstHeaderRow", v);
  }
  /** PivotTable Data First Row. Serialized as `:firstDataRow` */
  get firstDataRow() {
    return this._g(":firstDataRow");
  }
  set firstDataRow(v) {
    this._s(":firstDataRow", v);
  }
  /** First Data Column. Serialized as `:firstDataCol` */
  get firstDataColumn() {
    return this._g(":firstDataCol");
  }
  set firstDataColumn(v) {
    this._s(":firstDataCol", v);
  }
  /** Rows Per Page Count. Serialized as `:rowPageCount` */
  get rowPageCount() {
    return this._g(":rowPageCount");
  }
  set rowPageCount(v) {
    this._s(":rowPageCount", v);
  }
  /** Columns Per Page. Serialized as `:colPageCount` */
  get columnsPerPage() {
    return this._g(":colPageCount");
  }
  set columnsPerPage(v) {
    this._s(":colPageCount", v);
  }
}
class WorkbookExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14PivotCaches. */
  get x14PivotCaches() {
    return this._f(X14PivotCaches);
  }
  /** Returns X14SlicerCaches. */
  get x14SlicerCaches() {
    return this._f(X14SlicerCaches);
  }
  /** Returns X15SlicerCaches. */
  get x15SlicerCaches() {
    return this._f(X15SlicerCaches);
  }
  /** Returns X14WorkbookProperties. */
  get x14WorkbookProperties() {
    return this._f(X14WorkbookProperties);
  }
  /** Returns X15PivotCaches. */
  get x15PivotCaches() {
    return this._f(X15PivotCaches);
  }
  /** Returns X15WorkbookProperties. */
  get x15WorkbookProperties() {
    return this._f(X15WorkbookProperties);
  }
  /** Returns X14DefinedNames. */
  get definedNames() {
    return this._f(X14DefinedNames);
  }
  /** Returns X15PivotTableReferences. */
  get pivotTableReferences() {
    return this._f(X15PivotTableReferences);
  }
  /** Returns X15TimelineCachePivotCaches. */
  get timelineCachePivotCaches() {
    return this._f(X15TimelineCachePivotCaches);
  }
  /** Returns X15TimelineCacheReferences. */
  get timelineCacheReferences() {
    return this._f(X15TimelineCacheReferences);
  }
  /** Returns X15DataModel. */
  get dataModel() {
    return this._f(X15DataModel);
  }
}
class WorkbookExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class WebPublishObjects extends OxmlCompositeElement {
  static _Q = "x:webPublishObjects";
  static _A = [":count"];
  /** Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class FileRecoveryProperties extends OxmlLeafElement {
  static _Q = "x:fileRecoveryPr";
  static _A = [":autoRecover", ":crashSave", ":dataExtractLoad", ":repairLoad"];
  /** Auto Recover. Serialized as `:autoRecover` */
  get autoRecover() {
    return this._g(":autoRecover");
  }
  set autoRecover(v) {
    this._s(":autoRecover", v);
  }
  /** Crash Save. Serialized as `:crashSave` */
  get crashSave() {
    return this._g(":crashSave");
  }
  set crashSave(v) {
    this._s(":crashSave", v);
  }
  /** Data Extract Load. Serialized as `:dataExtractLoad` */
  get dataExtractLoad() {
    return this._g(":dataExtractLoad");
  }
  set dataExtractLoad(v) {
    this._s(":dataExtractLoad", v);
  }
  /** Repair Load. Serialized as `:repairLoad` */
  get repairLoad() {
    return this._g(":repairLoad");
  }
  set repairLoad(v) {
    this._s(":repairLoad", v);
  }
}
class WebPublishing extends OxmlLeafElement {
  static _Q = "x:webPublishing";
  static _A = [":css", ":thicket", ":longFileNames", ":vml", ":allowPng", ":targetScreenSize", ":dpi", ":codePage", ":characterSet"];
  /** css. Serialized as `:css` */
  get useCss() {
    return this._g(":css");
  }
  set useCss(v) {
    this._s(":css", v);
  }
  /** thicket. Serialized as `:thicket` */
  get thicket() {
    return this._g(":thicket");
  }
  set thicket(v) {
    this._s(":thicket", v);
  }
  /** longFileNames. Serialized as `:longFileNames` */
  get longFileNames() {
    return this._g(":longFileNames");
  }
  set longFileNames(v) {
    this._s(":longFileNames", v);
  }
  /** vml. Serialized as `:vml` */
  get useVml() {
    return this._g(":vml");
  }
  set useVml(v) {
    this._s(":vml", v);
  }
  /** allowPng. Serialized as `:allowPng` */
  get allowPng() {
    return this._g(":allowPng");
  }
  set allowPng(v) {
    this._s(":allowPng", v);
  }
  /** targetScreenSize. Serialized as `:targetScreenSize` */
  get targetScreenSize() {
    return this._g(":targetScreenSize");
  }
  set targetScreenSize(v) {
    this._s(":targetScreenSize", v);
  }
  /** dpi. Serialized as `:dpi` */
  get dpi() {
    return this._g(":dpi");
  }
  set dpi(v) {
    this._s(":dpi", v);
  }
  /** codePage. Serialized as `:codePage` */
  get codePage() {
    return this._g(":codePage");
  }
  set codePage(v) {
    this._s(":codePage", v);
  }
  /** characterSet. Serialized as `:characterSet` */
  get characterSet() {
    return this._g(":characterSet");
  }
  set characterSet(v) {
    this._s(":characterSet", v);
  }
}
class PivotCaches extends OxmlCompositeElement {
  static _Q = "x:pivotCaches";
}
class CustomWorkbookViews extends OxmlCompositeElement {
  static _Q = "x:customWorkbookViews";
}
class OleSize extends OxmlLeafElement {
  static _Q = "x:oleSize";
  static _A = [":ref"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class CalculationProperties extends OxmlLeafElement {
  static _Q = "x:calcPr";
  static _A = [":calcId", ":calcMode", ":fullCalcOnLoad", ":refMode", ":iterate", ":iterateCount", ":iterateDelta", ":fullPrecision", ":calcCompleted", ":calcOnSave", ":concurrentCalc", ":concurrentManualCount", ":forceFullCalc"];
  /** Calculation Id. Serialized as `:calcId` */
  get calculationId() {
    return this._g(":calcId");
  }
  set calculationId(v) {
    this._s(":calcId", v);
  }
  /** Calculation Mode. Serialized as `:calcMode` */
  get calculationMode() {
    return this._g(":calcMode");
  }
  set calculationMode(v) {
    this._s(":calcMode", v);
  }
  /** Full Calculation On Load. Serialized as `:fullCalcOnLoad` */
  get fullCalculationOnLoad() {
    return this._g(":fullCalcOnLoad");
  }
  set fullCalculationOnLoad(v) {
    this._s(":fullCalcOnLoad", v);
  }
  /** Reference Mode. Serialized as `:refMode` */
  get referenceMode() {
    return this._g(":refMode");
  }
  set referenceMode(v) {
    this._s(":refMode", v);
  }
  /** Calculation Iteration. Serialized as `:iterate` */
  get iterate() {
    return this._g(":iterate");
  }
  set iterate(v) {
    this._s(":iterate", v);
  }
  /** Iteration Count. Serialized as `:iterateCount` */
  get iterateCount() {
    return this._g(":iterateCount");
  }
  set iterateCount(v) {
    this._s(":iterateCount", v);
  }
  /** Iterative Calculation Delta. Serialized as `:iterateDelta` */
  get iterateDelta() {
    return this._g(":iterateDelta");
  }
  set iterateDelta(v) {
    this._s(":iterateDelta", v);
  }
  /** Full Precision Calculation. Serialized as `:fullPrecision` */
  get fullPrecision() {
    return this._g(":fullPrecision");
  }
  set fullPrecision(v) {
    this._s(":fullPrecision", v);
  }
  /** Calc Completed. Serialized as `:calcCompleted` */
  get calculationCompleted() {
    return this._g(":calcCompleted");
  }
  set calculationCompleted(v) {
    this._s(":calcCompleted", v);
  }
  /** Calculate On Save. Serialized as `:calcOnSave` */
  get calculationOnSave() {
    return this._g(":calcOnSave");
  }
  set calculationOnSave(v) {
    this._s(":calcOnSave", v);
  }
  /** Concurrent Calculations. Serialized as `:concurrentCalc` */
  get concurrentCalculation() {
    return this._g(":concurrentCalc");
  }
  set concurrentCalculation(v) {
    this._s(":concurrentCalc", v);
  }
  /** Concurrent Thread Manual Count. Serialized as `:concurrentManualCount` */
  get concurrentManualCount() {
    return this._g(":concurrentManualCount");
  }
  set concurrentManualCount(v) {
    this._s(":concurrentManualCount", v);
  }
  /** Force Full Calculation. Serialized as `:forceFullCalc` */
  get forceFullCalculation() {
    return this._g(":forceFullCalc");
  }
  set forceFullCalculation(v) {
    this._s(":forceFullCalc", v);
  }
}
class DefinedNames extends OxmlCompositeElement {
  static _Q = "x:definedNames";
}
class ExternalReferences extends OxmlCompositeElement {
  static _Q = "x:externalReferences";
}
class FunctionGroups extends OxmlCompositeElement {
  static _Q = "x:functionGroups";
  static _A = [":builtInGroupCount"];
  /** Built-in Function Group Count. Serialized as `:builtInGroupCount` */
  get builtInGroupCount() {
    return this._g(":builtInGroupCount");
  }
  set builtInGroupCount(v) {
    this._s(":builtInGroupCount", v);
  }
}
class Sheets extends OxmlCompositeElement {
  static _Q = "x:sheets";
}
class BookViews extends OxmlCompositeElement {
  static _Q = "x:bookViews";
}
class WorkbookProtection extends OxmlLeafElement {
  static _Q = "x:workbookProtection";
  static _A = [":workbookPassword", ":revisionsPassword", ":lockStructure", ":lockWindows", ":lockRevision", ":revisionsAlgorithmName", ":revisionsHashValue", ":revisionsSaltValue", ":revisionsSpinCount", ":workbookAlgorithmName", ":workbookHashValue", ":workbookSaltValue", ":workbookSpinCount"];
  /** Workbook Password. Serialized as `:workbookPassword` */
  get workbookPassword() {
    return this._g(":workbookPassword");
  }
  set workbookPassword(v) {
    this._s(":workbookPassword", v);
  }
  /** Revisions Password. Serialized as `:revisionsPassword` */
  get revisionsPassword() {
    return this._g(":revisionsPassword");
  }
  set revisionsPassword(v) {
    this._s(":revisionsPassword", v);
  }
  /** Lock Structure. Serialized as `:lockStructure` */
  get lockStructure() {
    return this._g(":lockStructure");
  }
  set lockStructure(v) {
    this._s(":lockStructure", v);
  }
  /** Lock Windows. Serialized as `:lockWindows` */
  get lockWindows() {
    return this._g(":lockWindows");
  }
  set lockWindows(v) {
    this._s(":lockWindows", v);
  }
  /** Lock Revisions. Serialized as `:lockRevision` */
  get lockRevision() {
    return this._g(":lockRevision");
  }
  set lockRevision(v) {
    this._s(":lockRevision", v);
  }
  /** Cryptographic Algorithm Name. Serialized as `:revisionsAlgorithmName` */
  get revisionsAlgorithmName() {
    return this._g(":revisionsAlgorithmName");
  }
  set revisionsAlgorithmName(v) {
    this._s(":revisionsAlgorithmName", v);
  }
  /** Password Hash Value. Serialized as `:revisionsHashValue` */
  get revisionsHashValue() {
    return this._g(":revisionsHashValue");
  }
  set revisionsHashValue(v) {
    this._s(":revisionsHashValue", v);
  }
  /** Salt Value for Password Verifier. Serialized as `:revisionsSaltValue` */
  get revisionsSaltValue() {
    return this._g(":revisionsSaltValue");
  }
  set revisionsSaltValue(v) {
    this._s(":revisionsSaltValue", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `:revisionsSpinCount` */
  get revisionsSpinCount() {
    return this._g(":revisionsSpinCount");
  }
  set revisionsSpinCount(v) {
    this._s(":revisionsSpinCount", v);
  }
  /** Cryptographic Algorithm Name. Serialized as `:workbookAlgorithmName` */
  get workbookAlgorithmName() {
    return this._g(":workbookAlgorithmName");
  }
  set workbookAlgorithmName(v) {
    this._s(":workbookAlgorithmName", v);
  }
  /** Password Hash Value. Serialized as `:workbookHashValue` */
  get workbookHashValue() {
    return this._g(":workbookHashValue");
  }
  set workbookHashValue(v) {
    this._s(":workbookHashValue", v);
  }
  /** Salt Value for Password Verifier. Serialized as `:workbookSaltValue` */
  get workbookSaltValue() {
    return this._g(":workbookSaltValue");
  }
  set workbookSaltValue(v) {
    this._s(":workbookSaltValue", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `:workbookSpinCount` */
  get workbookSpinCount() {
    return this._g(":workbookSpinCount");
  }
  set workbookSpinCount(v) {
    this._s(":workbookSpinCount", v);
  }
}
class WorkbookProperties extends OxmlLeafElement {
  static _Q = "x:workbookPr";
  static _A = [":date1904", ":dateCompatibility", ":showObjects", ":showBorderUnselectedTables", ":filterPrivacy", ":promptedSolutions", ":showInkAnnotation", ":backupFile", ":saveExternalLinkValues", ":updateLinks", ":codeName", ":hidePivotFieldList", ":showPivotChartFilter", ":allowRefreshQuery", ":publishItems", ":checkCompatibility", ":autoCompressPictures", ":refreshAllConnections", ":defaultThemeVersion"];
  /** Date 1904. Serialized as `:date1904` */
  get date1904() {
    return this._g(":date1904");
  }
  set date1904(v) {
    this._s(":date1904", v);
  }
  /** dateCompatibility. Serialized as `:dateCompatibility` */
  get dateCompatibility() {
    return this._g(":dateCompatibility");
  }
  set dateCompatibility(v) {
    this._s(":dateCompatibility", v);
  }
  /** Show Objects. Serialized as `:showObjects` */
  get showObjects() {
    return this._g(":showObjects");
  }
  set showObjects(v) {
    this._s(":showObjects", v);
  }
  /** Show Border Unselected Table. Serialized as `:showBorderUnselectedTables` */
  get showBorderUnselectedTables() {
    return this._g(":showBorderUnselectedTables");
  }
  set showBorderUnselectedTables(v) {
    this._s(":showBorderUnselectedTables", v);
  }
  /** Filter Privacy. Serialized as `:filterPrivacy` */
  get filterPrivacy() {
    return this._g(":filterPrivacy");
  }
  set filterPrivacy(v) {
    this._s(":filterPrivacy", v);
  }
  /** Prompted Solutions. Serialized as `:promptedSolutions` */
  get promptedSolutions() {
    return this._g(":promptedSolutions");
  }
  set promptedSolutions(v) {
    this._s(":promptedSolutions", v);
  }
  /** Show Ink Annotations. Serialized as `:showInkAnnotation` */
  get showInkAnnotation() {
    return this._g(":showInkAnnotation");
  }
  set showInkAnnotation(v) {
    this._s(":showInkAnnotation", v);
  }
  /** Create Backup File. Serialized as `:backupFile` */
  get backupFile() {
    return this._g(":backupFile");
  }
  set backupFile(v) {
    this._s(":backupFile", v);
  }
  /** Save External Link Values. Serialized as `:saveExternalLinkValues` */
  get saveExternalLinkValues() {
    return this._g(":saveExternalLinkValues");
  }
  set saveExternalLinkValues(v) {
    this._s(":saveExternalLinkValues", v);
  }
  /** Update Links Behavior. Serialized as `:updateLinks` */
  get updateLinks() {
    return this._g(":updateLinks");
  }
  set updateLinks(v) {
    this._s(":updateLinks", v);
  }
  /** Code Name. Serialized as `:codeName` */
  get codeName() {
    return this._g(":codeName");
  }
  set codeName(v) {
    this._s(":codeName", v);
  }
  /** Hide Pivot Field List. Serialized as `:hidePivotFieldList` */
  get hidePivotFieldList() {
    return this._g(":hidePivotFieldList");
  }
  set hidePivotFieldList(v) {
    this._s(":hidePivotFieldList", v);
  }
  /** Show Pivot Chart Filter. Serialized as `:showPivotChartFilter` */
  get showPivotChartFilter() {
    return this._g(":showPivotChartFilter");
  }
  set showPivotChartFilter(v) {
    this._s(":showPivotChartFilter", v);
  }
  /** Allow Refresh Query. Serialized as `:allowRefreshQuery` */
  get allowRefreshQuery() {
    return this._g(":allowRefreshQuery");
  }
  set allowRefreshQuery(v) {
    this._s(":allowRefreshQuery", v);
  }
  /** Publish Items. Serialized as `:publishItems` */
  get publishItems() {
    return this._g(":publishItems");
  }
  set publishItems(v) {
    this._s(":publishItems", v);
  }
  /** Check Compatibility On Save. Serialized as `:checkCompatibility` */
  get checkCompatibility() {
    return this._g(":checkCompatibility");
  }
  set checkCompatibility(v) {
    this._s(":checkCompatibility", v);
  }
  /** Auto Compress Pictures. Serialized as `:autoCompressPictures` */
  get autoCompressPictures() {
    return this._g(":autoCompressPictures");
  }
  set autoCompressPictures(v) {
    this._s(":autoCompressPictures", v);
  }
  /** Refresh all Connections on Open. Serialized as `:refreshAllConnections` */
  get refreshAllConnections() {
    return this._g(":refreshAllConnections");
  }
  set refreshAllConnections(v) {
    this._s(":refreshAllConnections", v);
  }
  /** Default Theme Version. Serialized as `:defaultThemeVersion` */
  get defaultThemeVersion() {
    return this._g(":defaultThemeVersion");
  }
  set defaultThemeVersion(v) {
    this._s(":defaultThemeVersion", v);
  }
}
class FileSharing extends OxmlLeafElement {
  static _Q = "x:fileSharing";
  static _A = [":readOnlyRecommended", ":userName", ":reservationPassword", ":algorithmName", ":hashValue", ":saltValue", ":spinCount"];
  /** Read Only Recommended. Serialized as `:readOnlyRecommended` */
  get readOnlyRecommended() {
    return this._g(":readOnlyRecommended");
  }
  set readOnlyRecommended(v) {
    this._s(":readOnlyRecommended", v);
  }
  /** User Name. Serialized as `:userName` */
  get userName() {
    return this._g(":userName");
  }
  set userName(v) {
    this._s(":userName", v);
  }
  /** Write Reservation Password. Serialized as `:reservationPassword` */
  get reservationPassword() {
    return this._g(":reservationPassword");
  }
  set reservationPassword(v) {
    this._s(":reservationPassword", v);
  }
  /** Password hash algorithm. Serialized as `:algorithmName` */
  get algorithmName() {
    return this._g(":algorithmName");
  }
  set algorithmName(v) {
    this._s(":algorithmName", v);
  }
  /** Password hash. Serialized as `:hashValue` */
  get hashValue() {
    return this._g(":hashValue");
  }
  set hashValue(v) {
    this._s(":hashValue", v);
  }
  /** Salt for password hash. Serialized as `:saltValue` */
  get saltValue() {
    return this._g(":saltValue");
  }
  set saltValue(v) {
    this._s(":saltValue", v);
  }
  /** Spin count for password hash. Serialized as `:spinCount` */
  get spinCount() {
    return this._g(":spinCount");
  }
  set spinCount(v) {
    this._s(":spinCount", v);
  }
}
class FileVersion extends OxmlLeafElement {
  static _Q = "x:fileVersion";
  static _A = [":appName", ":lastEdited", ":lowestEdited", ":rupBuild", ":codeName"];
  /** Application Name. Serialized as `:appName` */
  get applicationName() {
    return this._g(":appName");
  }
  set applicationName(v) {
    this._s(":appName", v);
  }
  /** Last Edited Version. Serialized as `:lastEdited` */
  get lastEdited() {
    return this._g(":lastEdited");
  }
  set lastEdited(v) {
    this._s(":lastEdited", v);
  }
  /** Lowest Edited Version. Serialized as `:lowestEdited` */
  get lowestEdited() {
    return this._g(":lowestEdited");
  }
  set lowestEdited(v) {
    this._s(":lowestEdited", v);
  }
  /** Build Version. Serialized as `:rupBuild` */
  get buildVersion() {
    return this._g(":rupBuild");
  }
  set buildVersion(v) {
    this._s(":rupBuild", v);
  }
  /** Code Name. Serialized as `:codeName` */
  get codeName() {
    return this._g(":codeName");
  }
  set codeName(v) {
    this._s(":codeName", v);
  }
}
class StylesheetExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14DifferentialFormats. */
  get x14DifferentialFormats() {
    return this._f(X14DifferentialFormats);
  }
  /** Returns X15DifferentialFormats. */
  get x15DifferentialFormats() {
    return this._f(X15DifferentialFormats);
  }
  /** Returns X14SlicerStyles. */
  get slicerStyles() {
    return this._f(X14SlicerStyles);
  }
  /** Returns X15TimelineStyles. */
  get timelineStyles() {
    return this._f(X15TimelineStyles);
  }
}
class StylesheetExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class Colors extends OxmlCompositeElement {
  static _Q = "x:colors";
  /** Color Indexes. */
  get indexedColors() {
    return this._f(IndexedColors);
  }
  /** MRU Colors. */
  get mruColors() {
    return this._f(MruColors);
  }
}
class TableStyles extends OxmlCompositeElement {
  static _Q = "x:tableStyles";
  static _A = [":count", ":defaultTableStyle", ":defaultPivotStyle"];
  /** Table Style Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Default Table Style. Serialized as `:defaultTableStyle` */
  get defaultTableStyle() {
    return this._g(":defaultTableStyle");
  }
  set defaultTableStyle(v) {
    this._s(":defaultTableStyle", v);
  }
  /** Default Pivot Style. Serialized as `:defaultPivotStyle` */
  get defaultPivotStyle() {
    return this._g(":defaultPivotStyle");
  }
  set defaultPivotStyle(v) {
    this._s(":defaultPivotStyle", v);
  }
}
class DifferentialFormats extends OxmlCompositeElement {
  static _Q = "x:dxfs";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CellStyles extends OxmlCompositeElement {
  static _Q = "x:cellStyles";
  static _A = [":count"];
  /** Style Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CellFormats extends OxmlCompositeElement {
  static _Q = "x:cellXfs";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CellStyleFormats extends OxmlCompositeElement {
  static _Q = "x:cellStyleXfs";
  static _A = [":count"];
  /** Style Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Borders extends OxmlCompositeElement {
  static _Q = "x:borders";
  static _A = [":count"];
  /** Border Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Fills extends OxmlCompositeElement {
  static _Q = "x:fills";
  static _A = [":count"];
  /** Fill Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Fonts extends OxmlCompositeElement {
  static _Q = "x:fonts";
  static _A = [":count", "x14ac:knownFonts"];
  /** Font Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** knownFonts. Serialized as `x14ac:knownFonts` */
  get knownFonts() {
    return this._g("x14ac:knownFonts");
  }
  set knownFonts(v) {
    this._s("x14ac:knownFonts", v);
  }
}
class NumberingFormats extends OxmlCompositeElement {
  static _Q = "x:numFmts";
  static _A = [":count"];
  /** Number Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class WorksheetExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14ConditionalFormattings. */
  get conditionalFormattings() {
    return this._f(X14ConditionalFormattings);
  }
  /** Returns X14DataValidations. */
  get dataValidations() {
    return this._f(X14DataValidations);
  }
  /** Returns X14SparklineGroups. */
  get sparklineGroups() {
    return this._f(X14SparklineGroups);
  }
  /** Returns X14SlicerList. */
  get slicerList() {
    return this._f(X14SlicerList);
  }
  /** Returns X14ProtectedRanges. */
  get protectedRanges() {
    return this._f(X14ProtectedRanges);
  }
  /** Returns X14IgnoredErrors. */
  get ignoredErrors() {
    return this._f(X14IgnoredErrors);
  }
  /** Returns X15WebExtensions. */
  get webExtensions() {
    return this._f(X15WebExtensions);
  }
  /** Returns X15TimelineReferences. */
  get timelineReferences() {
    return this._f(X15TimelineReferences);
  }
}
class WorksheetExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class TableParts extends OxmlCompositeElement {
  static _Q = "x:tableParts";
  static _A = [":count"];
  /** Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class IgnoredErrors extends OxmlCompositeElement {
  static _Q = "x:ignoredErrors";
}
class CellWatches extends OxmlCompositeElement {
  static _Q = "x:cellWatches";
}
class Hyperlinks extends OxmlCompositeElement {
  static _Q = "x:hyperlinks";
}
class DataValidations extends OxmlCompositeElement {
  static _Q = "x:dataValidations";
  static _A = [":disablePrompts", ":xWindow", ":yWindow", ":count"];
  /** Disable Prompts. Serialized as `:disablePrompts` */
  get disablePrompts() {
    return this._g(":disablePrompts");
  }
  set disablePrompts(v) {
    this._s(":disablePrompts", v);
  }
  /** Top Left Corner (X Coodrinate). Serialized as `:xWindow` */
  get xWindow() {
    return this._g(":xWindow");
  }
  set xWindow(v) {
    this._s(":xWindow", v);
  }
  /** Top Left Corner (Y Coordinate). Serialized as `:yWindow` */
  get yWindow() {
    return this._g(":yWindow");
  }
  set yWindow(v) {
    this._s(":yWindow", v);
  }
  /** Data Validation Item Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class MergeCells extends OxmlCompositeElement {
  static _Q = "x:mergeCells";
  static _A = [":count"];
  /** Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Scenarios extends OxmlCompositeElement {
  static _Q = "x:scenarios";
  static _A = [":current", ":show", ":sqref"];
  /** Current Scenario. Serialized as `:current` */
  get current() {
    return this._g(":current");
  }
  set current(v) {
    this._s(":current", v);
  }
  /** Last Shown Scenario. Serialized as `:show` */
  get show() {
    return this._g(":show");
  }
  set show(v) {
    this._s(":show", v);
  }
  /** Sequence of References. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
}
class ProtectedRanges extends OxmlCompositeElement {
  static _Q = "x:protectedRanges";
}
class SheetCalculationProperties extends OxmlLeafElement {
  static _Q = "x:sheetCalcPr";
  static _A = [":fullCalcOnLoad"];
  /** Full Calculation On Load. Serialized as `:fullCalcOnLoad` */
  get fullCalculationOnLoad() {
    return this._g(":fullCalcOnLoad");
  }
  set fullCalculationOnLoad(v) {
    this._s(":fullCalcOnLoad", v);
  }
}
class QueryTableExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class QueryTableRefresh extends OxmlCompositeElement {
  static _Q = "x:queryTableRefresh";
  static _A = [":preserveSortFilterLayout", ":fieldIdWrapped", ":headersInLastRefresh", ":minimumVersion", ":nextId", ":unboundColumnsLeft", ":unboundColumnsRight"];
  /** Preserve Sort and Filter Layout. Serialized as `:preserveSortFilterLayout` */
  get preserveSortFilterLayout() {
    return this._g(":preserveSortFilterLayout");
  }
  set preserveSortFilterLayout(v) {
    this._s(":preserveSortFilterLayout", v);
  }
  /** Next Field Id Wrapped. Serialized as `:fieldIdWrapped` */
  get fieldIdWrapped() {
    return this._g(":fieldIdWrapped");
  }
  set fieldIdWrapped(v) {
    this._s(":fieldIdWrapped", v);
  }
  /** Headers In Last Refresh. Serialized as `:headersInLastRefresh` */
  get headersInLastRefresh() {
    return this._g(":headersInLastRefresh");
  }
  set headersInLastRefresh(v) {
    this._s(":headersInLastRefresh", v);
  }
  /** Minimum Refresh Version. Serialized as `:minimumVersion` */
  get minimumVersion() {
    return this._g(":minimumVersion");
  }
  set minimumVersion(v) {
    this._s(":minimumVersion", v);
  }
  /** Next field id. Serialized as `:nextId` */
  get nextId() {
    return this._g(":nextId");
  }
  set nextId(v) {
    this._s(":nextId", v);
  }
  /** Columns Left. Serialized as `:unboundColumnsLeft` */
  get unboundColumnsLeft() {
    return this._g(":unboundColumnsLeft");
  }
  set unboundColumnsLeft(v) {
    this._s(":unboundColumnsLeft", v);
  }
  /** Columns Right. Serialized as `:unboundColumnsRight` */
  get unboundColumnsRight() {
    return this._g(":unboundColumnsRight");
  }
  set unboundColumnsRight(v) {
    this._s(":unboundColumnsRight", v);
  }
  /** Query table fields. */
  get queryTableFields() {
    return this._f(QueryTableFields);
  }
  /** Deleted Fields. */
  get queryTableDeletedFields() {
    return this._f(QueryTableDeletedFields);
  }
  /** Sort State. */
  get sortState() {
    return this._f(SortState);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PivotFilterExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class DataFieldExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14DataField. */
  get x14DataField() {
    return this._f(X14DataField);
  }
  /** Returns X15DataField. */
  get x15DataField() {
    return this._f(X15DataField);
  }
}
class DataFieldExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class CalculatedMemberExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14CalculatedMember. */
  get x14CalculatedMember() {
    return this._f(X14CalculatedMember);
  }
  /** Returns X15CalculatedMember. */
  get x15CalculatedMember() {
    return this._f(X15CalculatedMember);
  }
}
class CalculatedMemberExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class CacheHierarchyExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14CacheHierarchy. */
  get x14CacheHierarchy() {
    return this._f(X14CacheHierarchy);
  }
  /** Returns X15CacheHierarchy. */
  get x15CacheHierarchy() {
    return this._f(X15CacheHierarchy);
  }
}
class CacheHierarchyExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class GroupLevels extends OxmlCompositeElement {
  static _Q = "x:groupLevels";
  static _A = [":count"];
  /** Grouping Level Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class FieldsUsage extends OxmlCompositeElement {
  static _Q = "x:fieldsUsage";
  static _A = [":count"];
  /** Field Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CacheFieldExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14CacheField. */
  get cacheField() {
    return this._f(X14CacheField);
  }
  /** Returns X15CachedUniqueNames. */
  get cachedUniqueNames() {
    return this._f(X15CachedUniqueNames);
  }
}
class CacheFieldExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class FieldGroup extends OxmlCompositeElement {
  static _Q = "x:fieldGroup";
  static _A = [":par", ":base"];
  /** Parent. Serialized as `:par` */
  get parentId() {
    return this._g(":par");
  }
  set parentId(v) {
    this._s(":par", v);
  }
  /** Field Base. Serialized as `:base` */
  get base() {
    return this._g(":base");
  }
  set base(v) {
    this._s(":base", v);
  }
}
class SharedItems extends OxmlCompositeElement {
  static _Q = "x:sharedItems";
  static _A = [":containsSemiMixedTypes", ":containsNonDate", ":containsDate", ":containsString", ":containsBlank", ":containsMixedTypes", ":containsNumber", ":containsInteger", ":minValue", ":maxValue", ":minDate", ":maxDate", ":count", ":longText"];
  /** Contains Semi Mixed Data Types. Serialized as `:containsSemiMixedTypes` */
  get containsSemiMixedTypes() {
    return this._g(":containsSemiMixedTypes");
  }
  set containsSemiMixedTypes(v) {
    this._s(":containsSemiMixedTypes", v);
  }
  /** Contains Non Date. Serialized as `:containsNonDate` */
  get containsNonDate() {
    return this._g(":containsNonDate");
  }
  set containsNonDate(v) {
    this._s(":containsNonDate", v);
  }
  /** Contains Date. Serialized as `:containsDate` */
  get containsDate() {
    return this._g(":containsDate");
  }
  set containsDate(v) {
    this._s(":containsDate", v);
  }
  /** Contains String. Serialized as `:containsString` */
  get containsString() {
    return this._g(":containsString");
  }
  set containsString(v) {
    this._s(":containsString", v);
  }
  /** Contains Blank. Serialized as `:containsBlank` */
  get containsBlank() {
    return this._g(":containsBlank");
  }
  set containsBlank(v) {
    this._s(":containsBlank", v);
  }
  /** Contains Mixed Data Types. Serialized as `:containsMixedTypes` */
  get containsMixedTypes() {
    return this._g(":containsMixedTypes");
  }
  set containsMixedTypes(v) {
    this._s(":containsMixedTypes", v);
  }
  /** Contains Numbers. Serialized as `:containsNumber` */
  get containsNumber() {
    return this._g(":containsNumber");
  }
  set containsNumber(v) {
    this._s(":containsNumber", v);
  }
  /** Contains Integer. Serialized as `:containsInteger` */
  get containsInteger() {
    return this._g(":containsInteger");
  }
  set containsInteger(v) {
    this._s(":containsInteger", v);
  }
  /** Minimum Numeric Value. Serialized as `:minValue` */
  get minValue() {
    return this._g(":minValue");
  }
  set minValue(v) {
    this._s(":minValue", v);
  }
  /** Maximum Numeric Value. Serialized as `:maxValue` */
  get maxValue() {
    return this._g(":maxValue");
  }
  set maxValue(v) {
    this._s(":maxValue", v);
  }
  /** Minimum Date Time. Serialized as `:minDate` */
  get minDate() {
    return this._g(":minDate");
  }
  set minDate(v) {
    this._s(":minDate", v);
  }
  /** Maximum Date Time Value. Serialized as `:maxDate` */
  get maxDate() {
    return this._g(":maxDate");
  }
  set maxDate(v) {
    this._s(":maxDate", v);
  }
  /** Shared Items Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Long Text. Serialized as `:longText` */
  get longText() {
    return this._g(":longText");
  }
  set longText(v) {
    this._s(":longText", v);
  }
}
class TextFields extends OxmlCompositeElement {
  static _Q = "x:textFields";
  static _A = [":count"];
  /** Count of Fields. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ConnectionExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14Connection. */
  get x14Connection() {
    return this._f(X14Connection);
  }
  /** Returns X15Connection. */
  get x15Connection() {
    return this._f(X15Connection);
  }
}
class ConnectionExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class Parameters extends OxmlCompositeElement {
  static _Q = "x:parameters";
  static _A = [":count"];
  /** Parameter Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class TextProperties extends OxmlCompositeElement {
  static _Q = "x:textPr";
  static _A = [":prompt", ":fileType", ":codePage", ":characterSet", ":firstRow", ":sourceFile", ":delimited", ":decimal", ":thousands", ":tab", ":space", ":comma", ":semicolon", ":consecutive", ":qualifier", ":delimiter"];
  /** prompt. Serialized as `:prompt` */
  get prompt() {
    return this._g(":prompt");
  }
  set prompt(v) {
    this._s(":prompt", v);
  }
  /** fileType. Serialized as `:fileType` */
  get fileType() {
    return this._g(":fileType");
  }
  set fileType(v) {
    this._s(":fileType", v);
  }
  /** codePage. Serialized as `:codePage` */
  get codePage() {
    return this._g(":codePage");
  }
  set codePage(v) {
    this._s(":codePage", v);
  }
  /** characterSet. Serialized as `:characterSet` */
  get textCharacterSet() {
    return this._g(":characterSet");
  }
  set textCharacterSet(v) {
    this._s(":characterSet", v);
  }
  /** firstRow. Serialized as `:firstRow` */
  get firstRow() {
    return this._g(":firstRow");
  }
  set firstRow(v) {
    this._s(":firstRow", v);
  }
  /** sourceFile. Serialized as `:sourceFile` */
  get sourceFile() {
    return this._g(":sourceFile");
  }
  set sourceFile(v) {
    this._s(":sourceFile", v);
  }
  /** delimited. Serialized as `:delimited` */
  get delimited() {
    return this._g(":delimited");
  }
  set delimited(v) {
    this._s(":delimited", v);
  }
  /** decimal. Serialized as `:decimal` */
  get decimal() {
    return this._g(":decimal");
  }
  set decimal(v) {
    this._s(":decimal", v);
  }
  /** thousands. Serialized as `:thousands` */
  get thousands() {
    return this._g(":thousands");
  }
  set thousands(v) {
    this._s(":thousands", v);
  }
  /** tab. Serialized as `:tab` */
  get tabAsDelimiter() {
    return this._g(":tab");
  }
  set tabAsDelimiter(v) {
    this._s(":tab", v);
  }
  /** space. Serialized as `:space` */
  get space() {
    return this._g(":space");
  }
  set space(v) {
    this._s(":space", v);
  }
  /** comma. Serialized as `:comma` */
  get comma() {
    return this._g(":comma");
  }
  set comma(v) {
    this._s(":comma", v);
  }
  /** semicolon. Serialized as `:semicolon` */
  get semicolon() {
    return this._g(":semicolon");
  }
  set semicolon(v) {
    this._s(":semicolon", v);
  }
  /** consecutive. Serialized as `:consecutive` */
  get consecutive() {
    return this._g(":consecutive");
  }
  set consecutive(v) {
    this._s(":consecutive", v);
  }
  /** qualifier. Serialized as `:qualifier` */
  get qualifier() {
    return this._g(":qualifier");
  }
  set qualifier(v) {
    this._s(":qualifier", v);
  }
  /** delimiter. Serialized as `:delimiter` */
  get delimiter() {
    return this._g(":delimiter");
  }
  set delimiter(v) {
    this._s(":delimiter", v);
  }
  /** Returns TextFields. */
  get textFields() {
    return this._f(TextFields);
  }
}
class WebQueryProperties extends OxmlCompositeElement {
  static _Q = "x:webPr";
  static _A = [":xml", ":sourceData", ":parsePre", ":consecutive", ":firstRow", ":xl97", ":textDates", ":xl2000", ":url", ":post", ":htmlTables", ":htmlFormat", ":editPage"];
  /** XML Source. Serialized as `:xml` */
  get xmlSource() {
    return this._g(":xml");
  }
  set xmlSource(v) {
    this._s(":xml", v);
  }
  /** Import XML Source Data. Serialized as `:sourceData` */
  get sourceData() {
    return this._g(":sourceData");
  }
  set sourceData(v) {
    this._s(":sourceData", v);
  }
  /** Parse PRE. Serialized as `:parsePre` */
  get parsePreTag() {
    return this._g(":parsePre");
  }
  set parsePreTag(v) {
    this._s(":parsePre", v);
  }
  /** Consecutive Delimiters. Serialized as `:consecutive` */
  get consecutive() {
    return this._g(":consecutive");
  }
  set consecutive(v) {
    this._s(":consecutive", v);
  }
  /** Use First Row. Serialized as `:firstRow` */
  get firstRow() {
    return this._g(":firstRow");
  }
  set firstRow(v) {
    this._s(":firstRow", v);
  }
  /** Created in Excel 97. Serialized as `:xl97` */
  get createdInExcel97() {
    return this._g(":xl97");
  }
  set createdInExcel97(v) {
    this._s(":xl97", v);
  }
  /** Dates as Text. Serialized as `:textDates` */
  get textDates() {
    return this._g(":textDates");
  }
  set textDates(v) {
    this._s(":textDates", v);
  }
  /** Refreshed in Excel 2000. Serialized as `:xl2000` */
  get refreshedInExcel2000() {
    return this._g(":xl2000");
  }
  set refreshedInExcel2000(v) {
    this._s(":xl2000", v);
  }
  /** URL. Serialized as `:url` */
  get url() {
    return this._g(":url");
  }
  set url(v) {
    this._s(":url", v);
  }
  /** Web Post. Serialized as `:post` */
  get post() {
    return this._g(":post");
  }
  set post(v) {
    this._s(":post", v);
  }
  /** HTML Tables Only. Serialized as `:htmlTables` */
  get htmlTables() {
    return this._g(":htmlTables");
  }
  set htmlTables(v) {
    this._s(":htmlTables", v);
  }
  /** HTML Formatting Handling. Serialized as `:htmlFormat` */
  get htmlFormat() {
    return this._g(":htmlFormat");
  }
  set htmlFormat(v) {
    this._s(":htmlFormat", v);
  }
  /** Edit Query URL. Serialized as `:editPage` */
  get editPage() {
    return this._g(":editPage");
  }
  set editPage(v) {
    this._s(":editPage", v);
  }
  /** Tables. */
  get tables() {
    return this._f(Tables);
  }
}
class OlapProperties extends OxmlLeafElement {
  static _Q = "x:olapPr";
  static _A = [":local", ":localConnection", ":localRefresh", ":sendLocale", ":rowDrillCount", ":serverFill", ":serverNumberFormat", ":serverFont", ":serverFontColor"];
  /** Local Cube. Serialized as `:local` */
  get local() {
    return this._g(":local");
  }
  set local(v) {
    this._s(":local", v);
  }
  /** Local Cube Connection. Serialized as `:localConnection` */
  get localConnection() {
    return this._g(":localConnection");
  }
  set localConnection(v) {
    this._s(":localConnection", v);
  }
  /** Local Refresh. Serialized as `:localRefresh` */
  get localRefresh() {
    return this._g(":localRefresh");
  }
  set localRefresh(v) {
    this._s(":localRefresh", v);
  }
  /** Send Locale to OLAP. Serialized as `:sendLocale` */
  get sendLocale() {
    return this._g(":sendLocale");
  }
  set sendLocale(v) {
    this._s(":sendLocale", v);
  }
  /** Drill Through Count. Serialized as `:rowDrillCount` */
  get rowDrillCount() {
    return this._g(":rowDrillCount");
  }
  set rowDrillCount(v) {
    this._s(":rowDrillCount", v);
  }
  /** OLAP Fill Formatting. Serialized as `:serverFill` */
  get serverFill() {
    return this._g(":serverFill");
  }
  set serverFill(v) {
    this._s(":serverFill", v);
  }
  /** OLAP Number Format. Serialized as `:serverNumberFormat` */
  get serverNumberFormat() {
    return this._g(":serverNumberFormat");
  }
  set serverNumberFormat(v) {
    this._s(":serverNumberFormat", v);
  }
  /** OLAP Server Font. Serialized as `:serverFont` */
  get serverFont() {
    return this._g(":serverFont");
  }
  set serverFont(v) {
    this._s(":serverFont", v);
  }
  /** OLAP Font Formatting. Serialized as `:serverFontColor` */
  get serverFontColor() {
    return this._g(":serverFontColor");
  }
  set serverFontColor(v) {
    this._s(":serverFontColor", v);
  }
}
class DatabaseProperties extends OxmlLeafElement {
  static _Q = "x:dbPr";
  static _A = [":connection", ":command", ":serverCommand", ":commandType"];
  /** Connection String. Serialized as `:connection` */
  get connection() {
    return this._g(":connection");
  }
  set connection(v) {
    this._s(":connection", v);
  }
  /** Command Text. Serialized as `:command` */
  get command() {
    return this._g(":command");
  }
  set command(v) {
    this._s(":command", v);
  }
  /** Command Text. Serialized as `:serverCommand` */
  get serverCommand() {
    return this._g(":serverCommand");
  }
  set serverCommand(v) {
    this._s(":serverCommand", v);
  }
  /** OLE DB Command Type. Serialized as `:commandType` */
  get commandType() {
    return this._g(":commandType");
  }
  set commandType(v) {
    this._s(":commandType", v);
  }
}
class QueryTableExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X15QueryTable. */
  get queryTable() {
    return this._f(X15QueryTable);
  }
}
class PivotFilterExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X15PivotFilter. */
  get pivotFilter() {
    return this._f(X15PivotFilter);
  }
  /** Returns X15MovingPeriodState. */
  get movingPeriodState() {
    return this._f(X15MovingPeriodState);
  }
}
class SlicerCacheDefinitionExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X15SlicerCachePivotTables. */
  get slicerCachePivotTables() {
    return this._f(X15SlicerCachePivotTables);
  }
  /** Returns X15TableSlicerCache. */
  get tableSlicerCache() {
    return this._f(X15TableSlicerCache);
  }
  /** Returns X15SlicerCacheHideItemsWithNoData. */
  get slicerCacheHideItemsWithNoData() {
    return this._f(X15SlicerCacheHideItemsWithNoData);
  }
}
class IconFilter extends OxmlLeafElement {
  static _Q = "x:iconFilter";
  static _A = [":iconSet", ":iconId"];
  /** Icon Set. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** Icon Id. Serialized as `:iconId` */
  get iconId() {
    return this._g(":iconId");
  }
  set iconId(v) {
    this._s(":iconId", v);
  }
}
class ColorFilter extends OxmlLeafElement {
  static _Q = "x:colorFilter";
  static _A = [":dxfId", ":cellColor"];
  /** Differential Format Record Id. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
  /** Filter By Cell Color. Serialized as `:cellColor` */
  get cellColor() {
    return this._g(":cellColor");
  }
  set cellColor(v) {
    this._s(":cellColor", v);
  }
}
class DynamicFilter extends OxmlLeafElement {
  static _Q = "x:dynamicFilter";
  static _A = [":type", ":val", ":maxVal", ":valIso", ":maxValIso"];
  /** Dynamic filter type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Max Value. Serialized as `:maxVal` */
  get maxVal() {
    return this._g(":maxVal");
  }
  set maxVal(v) {
    this._s(":maxVal", v);
  }
  /** valIso. Serialized as `:valIso` */
  get valIso() {
    return this._g(":valIso");
  }
  set valIso(v) {
    this._s(":valIso", v);
  }
  /** maxValIso. Serialized as `:maxValIso` */
  get maxValIso() {
    return this._g(":maxValIso");
  }
  set maxValIso(v) {
    this._s(":maxValIso", v);
  }
}
class CustomFilters extends OxmlCompositeElement {
  static _Q = "x:customFilters";
  static _A = [":and"];
  /** And. Serialized as `:and` */
  get and() {
    return this._g(":and");
  }
  set and(v) {
    this._s(":and", v);
  }
}
class Top10 extends OxmlLeafElement {
  static _Q = "x:top10";
  static _A = [":top", ":percent", ":val", ":filterVal"];
  /** Top. Serialized as `:top` */
  get top() {
    return this._g(":top");
  }
  set top(v) {
    this._s(":top", v);
  }
  /** Filter by Percent. Serialized as `:percent` */
  get percent() {
    return this._g(":percent");
  }
  set percent(v) {
    this._s(":percent", v);
  }
  /** Top or Bottom Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Filter Value. Serialized as `:filterVal` */
  get filterValue() {
    return this._g(":filterVal");
  }
  set filterValue(v) {
    this._s(":filterVal", v);
  }
}
class Filters extends OxmlCompositeElement {
  static _Q = "x:filters";
  static _A = [":blank", ":calendarType"];
  /** Filter by Blank. Serialized as `:blank` */
  get blank() {
    return this._g(":blank");
  }
  set blank(v) {
    this._s(":blank", v);
  }
  /** Calendar Type. Serialized as `:calendarType` */
  get calendarType() {
    return this._g(":calendarType");
  }
  set calendarType(v) {
    this._s(":calendarType", v);
  }
}
class DateGroupItem extends OxmlLeafElement {
  static _Q = "x:dateGroupItem";
  static _A = [":year", ":month", ":day", ":hour", ":minute", ":second", ":dateTimeGrouping"];
  /** Year. Serialized as `:year` */
  get year() {
    return this._g(":year");
  }
  set year(v) {
    this._s(":year", v);
  }
  /** Month. Serialized as `:month` */
  get month() {
    return this._g(":month");
  }
  set month(v) {
    this._s(":month", v);
  }
  /** Day. Serialized as `:day` */
  get day() {
    return this._g(":day");
  }
  set day(v) {
    this._s(":day", v);
  }
  /** Hour. Serialized as `:hour` */
  get hour() {
    return this._g(":hour");
  }
  set hour(v) {
    this._s(":hour", v);
  }
  /** Minute. Serialized as `:minute` */
  get minute() {
    return this._g(":minute");
  }
  set minute(v) {
    this._s(":minute", v);
  }
  /** Second. Serialized as `:second` */
  get second() {
    return this._g(":second");
  }
  set second(v) {
    this._s(":second", v);
  }
  /** Date Time Grouping. Serialized as `:dateTimeGrouping` */
  get dateTimeGrouping() {
    return this._g(":dateTimeGrouping");
  }
  set dateTimeGrouping(v) {
    this._s(":dateTimeGrouping", v);
  }
}
class Filter extends OxmlLeafElement {
  static _Q = "x:filter";
  static _A = [":val"];
  /** Filter Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class SortCondition extends OxmlLeafElement {
  static _Q = "x:sortCondition";
  static _A = [":descending", ":sortBy", ":ref", ":customList", ":dxfId", ":iconSet", ":iconId"];
  /** Descending. Serialized as `:descending` */
  get descending() {
    return this._g(":descending");
  }
  set descending(v) {
    this._s(":descending", v);
  }
  /** Sort By. Serialized as `:sortBy` */
  get sortBy() {
    return this._g(":sortBy");
  }
  set sortBy(v) {
    this._s(":sortBy", v);
  }
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Custom List. Serialized as `:customList` */
  get customList() {
    return this._g(":customList");
  }
  set customList(v) {
    this._s(":customList", v);
  }
  /** Format Id. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
  /** Icon Set. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** Icon Id. Serialized as `:iconId` */
  get iconId() {
    return this._g(":iconId");
  }
  set iconId(v) {
    this._s(":iconId", v);
  }
}
class CommentProperties extends OxmlCompositeElement {
  static _Q = "x:commentPr";
  static _A = [":locked", ":defaultSize", ":print", ":disabled", ":uiObject", ":autoFill", ":autoLine", ":altText", ":textHAlign", ":textVAlign", ":lockText", ":justLastX", ":autoScale", ":rowHidden", ":colHidden"];
  /** locked. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** defaultSize. Serialized as `:defaultSize` */
  get defaultSize() {
    return this._g(":defaultSize");
  }
  set defaultSize(v) {
    this._s(":defaultSize", v);
  }
  /** print. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** disabled. Serialized as `:disabled` */
  get disabled() {
    return this._g(":disabled");
  }
  set disabled(v) {
    this._s(":disabled", v);
  }
  /** uiObject. Serialized as `:uiObject` */
  get uiObject() {
    return this._g(":uiObject");
  }
  set uiObject(v) {
    this._s(":uiObject", v);
  }
  /** autoFill. Serialized as `:autoFill` */
  get autoFill() {
    return this._g(":autoFill");
  }
  set autoFill(v) {
    this._s(":autoFill", v);
  }
  /** autoLine. Serialized as `:autoLine` */
  get autoLine() {
    return this._g(":autoLine");
  }
  set autoLine(v) {
    this._s(":autoLine", v);
  }
  /** altText. Serialized as `:altText` */
  get altText() {
    return this._g(":altText");
  }
  set altText(v) {
    this._s(":altText", v);
  }
  /** textHAlign. Serialized as `:textHAlign` */
  get textHAlign() {
    return this._g(":textHAlign");
  }
  set textHAlign(v) {
    this._s(":textHAlign", v);
  }
  /** textVAlign. Serialized as `:textVAlign` */
  get textVAlign() {
    return this._g(":textVAlign");
  }
  set textVAlign(v) {
    this._s(":textVAlign", v);
  }
  /** lockText. Serialized as `:lockText` */
  get lockText() {
    return this._g(":lockText");
  }
  set lockText(v) {
    this._s(":lockText", v);
  }
  /** justLastX. Serialized as `:justLastX` */
  get justLastX() {
    return this._g(":justLastX");
  }
  set justLastX(v) {
    this._s(":justLastX", v);
  }
  /** autoScale. Serialized as `:autoScale` */
  get autoScale() {
    return this._g(":autoScale");
  }
  set autoScale(v) {
    this._s(":autoScale", v);
  }
  /** rowHidden. Serialized as `:rowHidden` */
  get rowHidden() {
    return this._g(":rowHidden");
  }
  set rowHidden(v) {
    this._s(":rowHidden", v);
  }
  /** colHidden. Serialized as `:colHidden` */
  get colHidden() {
    return this._g(":colHidden");
  }
  set colHidden(v) {
    this._s(":colHidden", v);
  }
  /** Returns ObjectAnchor. */
  get objectAnchor() {
    return this._f(ObjectAnchor);
  }
}
class CacheSourceExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class Consolidation extends OxmlCompositeElement {
  static _Q = "x:consolidation";
  static _A = [":autoPage"];
  /** Auto Page. Serialized as `:autoPage` */
  get autoPage() {
    return this._g(":autoPage");
  }
  set autoPage(v) {
    this._s(":autoPage", v);
  }
  /** Page Item Values. */
  get pages() {
    return this._f(Pages);
  }
  /** Range Sets. */
  get rangeSets() {
    return this._f(RangeSets);
  }
}
class WorksheetSource extends OxmlLeafElement {
  static _Q = "x:worksheetSource";
  static _A = [":ref", ":name", ":sheet", "r:id"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Named Range. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Sheet Name. Serialized as `:sheet` */
  get sheet() {
    return this._g(":sheet");
  }
  set sheet(v) {
    this._s(":sheet", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class PivotFieldExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class AutoSortScope extends OxmlCompositeElement {
  static _Q = "x:autoSortScope";
  /** Auto Sort Scope. */
  get pivotArea() {
    return this._f(PivotArea);
  }
}
class Items extends OxmlCompositeElement {
  static _Q = "x:items";
  static _A = [":count"];
  /** Field Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotHierarchyExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class Members extends OxmlCompositeElement {
  static _Q = "x:members";
  static _A = [":count", ":level"];
  /** Item Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Hierarchy Level. Serialized as `:level` */
  get level() {
    return this._g(":level");
  }
  set level(v) {
    this._s(":level", v);
  }
}
class MemberProperties extends OxmlCompositeElement {
  static _Q = "x:mps";
  static _A = [":count"];
  /** OLAP Member Properties Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CustomProperties extends OxmlCompositeElement {
  static _Q = "x:customProperties";
}
class ConditionalFormatting extends OxmlCompositeElement {
  static _Q = "x:conditionalFormatting";
  static _A = [":pivot", ":sqref"];
  /** PivotTable Conditional Formatting. Serialized as `:pivot` */
  get pivot() {
    return this._g(":pivot");
  }
  set pivot(v) {
    this._s(":pivot", v);
  }
  /** Sequence of References. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
}
class DataConsolidate extends OxmlCompositeElement {
  static _Q = "x:dataConsolidate";
  static _A = [":function", ":leftLabels", ":startLabels", ":topLabels", ":link"];
  /** Function Index. Serialized as `:function` */
  get function() {
    return this._g(":function");
  }
  set function(v) {
    this._s(":function", v);
  }
  /** Use Left Column Labels. Serialized as `:leftLabels` */
  get leftLabels() {
    return this._g(":leftLabels");
  }
  set leftLabels(v) {
    this._s(":leftLabels", v);
  }
  /** startLabels. Serialized as `:startLabels` */
  get startLabels() {
    return this._g(":startLabels");
  }
  set startLabels(v) {
    this._s(":startLabels", v);
  }
  /** Labels In Top Row. Serialized as `:topLabels` */
  get topLabels() {
    return this._g(":topLabels");
  }
  set topLabels(v) {
    this._s(":topLabels", v);
  }
  /** Link. Serialized as `:link` */
  get link() {
    return this._g(":link");
  }
  set link(v) {
    this._s(":link", v);
  }
  /** Data Consolidation References. */
  get dataReferences() {
    return this._f(DataReferences);
  }
}
class SheetData extends OxmlCompositeElement {
  static _Q = "x:sheetData";
}
class Columns extends OxmlCompositeElement {
  static _Q = "x:cols";
}
class SheetDimension extends OxmlLeafElement {
  static _Q = "x:dimension";
  static _A = [":ref"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class Controls extends OxmlCompositeElement {
  static _Q = "x:controls";
}
class OleObjects extends OxmlCompositeElement {
  static _Q = "x:oleObjects";
}
class CustomSheetViews extends OxmlCompositeElement {
  static _Q = "x:customSheetViews";
}
class SheetProtection extends OxmlLeafElement {
  static _Q = "x:sheetProtection";
  static _A = [":password", ":algorithmName", ":hashValue", ":saltValue", ":spinCount", ":sheet", ":objects", ":scenarios", ":formatCells", ":formatColumns", ":formatRows", ":insertColumns", ":insertRows", ":insertHyperlinks", ":deleteColumns", ":deleteRows", ":selectLockedCells", ":sort", ":autoFilter", ":pivotTables", ":selectUnlockedCells"];
  /** Password. Serialized as `:password` */
  get password() {
    return this._g(":password");
  }
  set password(v) {
    this._s(":password", v);
  }
  /** Cryptographic Algorithm Name. Serialized as `:algorithmName` */
  get algorithmName() {
    return this._g(":algorithmName");
  }
  set algorithmName(v) {
    this._s(":algorithmName", v);
  }
  /** Password Hash Value. Serialized as `:hashValue` */
  get hashValue() {
    return this._g(":hashValue");
  }
  set hashValue(v) {
    this._s(":hashValue", v);
  }
  /** Salt Value for Password Verifier. Serialized as `:saltValue` */
  get saltValue() {
    return this._g(":saltValue");
  }
  set saltValue(v) {
    this._s(":saltValue", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
  get spinCount() {
    return this._g(":spinCount");
  }
  set spinCount(v) {
    this._s(":spinCount", v);
  }
  /** Sheet Locked. Serialized as `:sheet` */
  get sheet() {
    return this._g(":sheet");
  }
  set sheet(v) {
    this._s(":sheet", v);
  }
  /** Objects Locked. Serialized as `:objects` */
  get objects() {
    return this._g(":objects");
  }
  set objects(v) {
    this._s(":objects", v);
  }
  /** Scenarios Locked. Serialized as `:scenarios` */
  get scenarios() {
    return this._g(":scenarios");
  }
  set scenarios(v) {
    this._s(":scenarios", v);
  }
  /** Format Cells Locked. Serialized as `:formatCells` */
  get formatCells() {
    return this._g(":formatCells");
  }
  set formatCells(v) {
    this._s(":formatCells", v);
  }
  /** Format Columns Locked. Serialized as `:formatColumns` */
  get formatColumns() {
    return this._g(":formatColumns");
  }
  set formatColumns(v) {
    this._s(":formatColumns", v);
  }
  /** Format Rows Locked. Serialized as `:formatRows` */
  get formatRows() {
    return this._g(":formatRows");
  }
  set formatRows(v) {
    this._s(":formatRows", v);
  }
  /** Insert Columns Locked. Serialized as `:insertColumns` */
  get insertColumns() {
    return this._g(":insertColumns");
  }
  set insertColumns(v) {
    this._s(":insertColumns", v);
  }
  /** Insert Rows Locked. Serialized as `:insertRows` */
  get insertRows() {
    return this._g(":insertRows");
  }
  set insertRows(v) {
    this._s(":insertRows", v);
  }
  /** Insert Hyperlinks Locked. Serialized as `:insertHyperlinks` */
  get insertHyperlinks() {
    return this._g(":insertHyperlinks");
  }
  set insertHyperlinks(v) {
    this._s(":insertHyperlinks", v);
  }
  /** Delete Columns Locked. Serialized as `:deleteColumns` */
  get deleteColumns() {
    return this._g(":deleteColumns");
  }
  set deleteColumns(v) {
    this._s(":deleteColumns", v);
  }
  /** Delete Rows Locked. Serialized as `:deleteRows` */
  get deleteRows() {
    return this._g(":deleteRows");
  }
  set deleteRows(v) {
    this._s(":deleteRows", v);
  }
  /** Select Locked Cells Locked. Serialized as `:selectLockedCells` */
  get selectLockedCells() {
    return this._g(":selectLockedCells");
  }
  set selectLockedCells(v) {
    this._s(":selectLockedCells", v);
  }
  /** Sort Locked. Serialized as `:sort` */
  get sort() {
    return this._g(":sort");
  }
  set sort(v) {
    this._s(":sort", v);
  }
  /** AutoFilter Locked. Serialized as `:autoFilter` */
  get autoFilter() {
    return this._g(":autoFilter");
  }
  set autoFilter(v) {
    this._s(":autoFilter", v);
  }
  /** Pivot Tables Locked. Serialized as `:pivotTables` */
  get pivotTables() {
    return this._g(":pivotTables");
  }
  set pivotTables(v) {
    this._s(":pivotTables", v);
  }
  /** Select Unlocked Cells Locked. Serialized as `:selectUnlockedCells` */
  get selectUnlockedCells() {
    return this._g(":selectUnlockedCells");
  }
  set selectUnlockedCells(v) {
    this._s(":selectUnlockedCells", v);
  }
}
class SheetFormatProperties extends OxmlLeafElement {
  static _Q = "x:sheetFormatPr";
  static _A = [":baseColWidth", ":defaultColWidth", ":defaultRowHeight", ":customHeight", ":zeroHeight", ":thickTop", ":thickBottom", ":outlineLevelRow", ":outlineLevelCol", "x14ac:dyDescent"];
  /** Base Column Width. Serialized as `:baseColWidth` */
  get baseColumnWidth() {
    return this._g(":baseColWidth");
  }
  set baseColumnWidth(v) {
    this._s(":baseColWidth", v);
  }
  /** Default Column Width. Serialized as `:defaultColWidth` */
  get defaultColumnWidth() {
    return this._g(":defaultColWidth");
  }
  set defaultColumnWidth(v) {
    this._s(":defaultColWidth", v);
  }
  /** Default Row Height. Serialized as `:defaultRowHeight` */
  get defaultRowHeight() {
    return this._g(":defaultRowHeight");
  }
  set defaultRowHeight(v) {
    this._s(":defaultRowHeight", v);
  }
  /** Custom Height. Serialized as `:customHeight` */
  get customHeight() {
    return this._g(":customHeight");
  }
  set customHeight(v) {
    this._s(":customHeight", v);
  }
  /** Hidden By Default. Serialized as `:zeroHeight` */
  get zeroHeight() {
    return this._g(":zeroHeight");
  }
  set zeroHeight(v) {
    this._s(":zeroHeight", v);
  }
  /** Thick Top Border. Serialized as `:thickTop` */
  get thickTop() {
    return this._g(":thickTop");
  }
  set thickTop(v) {
    this._s(":thickTop", v);
  }
  /** Thick Bottom Border. Serialized as `:thickBottom` */
  get thickBottom() {
    return this._g(":thickBottom");
  }
  set thickBottom(v) {
    this._s(":thickBottom", v);
  }
  /** Maximum Outline Row. Serialized as `:outlineLevelRow` */
  get outlineLevelRow() {
    return this._g(":outlineLevelRow");
  }
  set outlineLevelRow(v) {
    this._s(":outlineLevelRow", v);
  }
  /** Column Outline Level. Serialized as `:outlineLevelCol` */
  get outlineLevelColumn() {
    return this._g(":outlineLevelCol");
  }
  set outlineLevelColumn(v) {
    this._s(":outlineLevelCol", v);
  }
  /** dyDescent. Serialized as `x14ac:dyDescent` */
  get dyDescent() {
    return this._g("x14ac:dyDescent");
  }
  set dyDescent(v) {
    this._s("x14ac:dyDescent", v);
  }
}
class SheetViews extends OxmlCompositeElement {
  static _Q = "x:sheetViews";
}
class SheetProperties extends OxmlCompositeElement {
  static _Q = "x:sheetPr";
  static _A = [":syncHorizontal", ":syncVertical", ":syncRef", ":transitionEvaluation", ":transitionEntry", ":published", ":codeName", ":filterMode", ":enableFormatConditionsCalculation"];
  /** Synch Horizontal. Serialized as `:syncHorizontal` */
  get syncHorizontal() {
    return this._g(":syncHorizontal");
  }
  set syncHorizontal(v) {
    this._s(":syncHorizontal", v);
  }
  /** Synch Vertical. Serialized as `:syncVertical` */
  get syncVertical() {
    return this._g(":syncVertical");
  }
  set syncVertical(v) {
    this._s(":syncVertical", v);
  }
  /** Synch Reference. Serialized as `:syncRef` */
  get syncReference() {
    return this._g(":syncRef");
  }
  set syncReference(v) {
    this._s(":syncRef", v);
  }
  /** Transition Formula Evaluation. Serialized as `:transitionEvaluation` */
  get transitionEvaluation() {
    return this._g(":transitionEvaluation");
  }
  set transitionEvaluation(v) {
    this._s(":transitionEvaluation", v);
  }
  /** Transition Formula Entry. Serialized as `:transitionEntry` */
  get transitionEntry() {
    return this._g(":transitionEntry");
  }
  set transitionEntry(v) {
    this._s(":transitionEntry", v);
  }
  /** Published. Serialized as `:published` */
  get published() {
    return this._g(":published");
  }
  set published(v) {
    this._s(":published", v);
  }
  /** Code Name. Serialized as `:codeName` */
  get codeName() {
    return this._g(":codeName");
  }
  set codeName(v) {
    this._s(":codeName", v);
  }
  /** Filter Mode. Serialized as `:filterMode` */
  get filterMode() {
    return this._g(":filterMode");
  }
  set filterMode(v) {
    this._s(":filterMode", v);
  }
  /** Enable Conditional Formatting Calculations. Serialized as `:enableFormatConditionsCalculation` */
  get enableFormatConditionsCalculation() {
    return this._g(":enableFormatConditionsCalculation");
  }
  set enableFormatConditionsCalculation(v) {
    this._s(":enableFormatConditionsCalculation", v);
  }
  /** Sheet Tab Color. */
  get tabColor() {
    return this._f(TabColor);
  }
  /** Outline Properties. */
  get outlineProperties() {
    return this._f(OutlineProperties);
  }
  /** Page Setup Properties. */
  get pageSetupProperties() {
    return this._f(PageSetupProperties);
  }
}
class DataReferences extends OxmlCompositeElement {
  static _Q = "x:dataRefs";
  static _A = [":count"];
  /** Data Consolidation Reference Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ConditionalFormattingRuleExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class IconSet extends OxmlCompositeElement {
  static _Q = "x:iconSet";
  static _A = [":iconSet", ":showValue", ":percent", ":reverse"];
  /** Icon Set. Serialized as `:iconSet` */
  get iconSetValue() {
    return this._g(":iconSet");
  }
  set iconSetValue(v) {
    this._s(":iconSet", v);
  }
  /** Show Value. Serialized as `:showValue` */
  get showValue() {
    return this._g(":showValue");
  }
  set showValue(v) {
    this._s(":showValue", v);
  }
  /** Percent. Serialized as `:percent` */
  get percent() {
    return this._g(":percent");
  }
  set percent(v) {
    this._s(":percent", v);
  }
  /** Reverse Icons. Serialized as `:reverse` */
  get reverse() {
    return this._g(":reverse");
  }
  set reverse(v) {
    this._s(":reverse", v);
  }
}
class DataBar extends OxmlCompositeElement {
  static _Q = "x:dataBar";
  static _A = [":minLength", ":maxLength", ":showValue"];
  /** Minimum Length. Serialized as `:minLength` */
  get minLength() {
    return this._g(":minLength");
  }
  set minLength(v) {
    this._s(":minLength", v);
  }
  /** Maximum Length. Serialized as `:maxLength` */
  get maxLength() {
    return this._g(":maxLength");
  }
  set maxLength(v) {
    this._s(":maxLength", v);
  }
  /** Show Values. Serialized as `:showValue` */
  get showValue() {
    return this._g(":showValue");
  }
  set showValue(v) {
    this._s(":showValue", v);
  }
}
class ColorScale extends OxmlCompositeElement {
  static _Q = "x:colorScale";
}
class WebPublishItems extends OxmlCompositeElement {
  static _Q = "x:webPublishItems";
  static _A = [":count"];
  /** Web Publishing Items Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Picture extends OxmlLeafElement {
  static _Q = "x:picture";
  static _A = ["r:id"];
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class DrawingHeaderFooter extends OxmlLeafElement {
  static _Q = "x:drawingHF";
  static _A = ["r:id", ":lho", ":lhe", ":lhf", ":cho", ":che", ":chf", ":rho", ":rhe", ":rhf", ":lfo", ":lfe", ":lff", ":cfo", ":cfe", ":cff", ":rfo", ":rfe", ":rff"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** lho. Serialized as `:lho` */
  get lho() {
    return this._g(":lho");
  }
  set lho(v) {
    this._s(":lho", v);
  }
  /** lhe. Serialized as `:lhe` */
  get lhe() {
    return this._g(":lhe");
  }
  set lhe(v) {
    this._s(":lhe", v);
  }
  /** lhf. Serialized as `:lhf` */
  get lhf() {
    return this._g(":lhf");
  }
  set lhf(v) {
    this._s(":lhf", v);
  }
  /** cho. Serialized as `:cho` */
  get cho() {
    return this._g(":cho");
  }
  set cho(v) {
    this._s(":cho", v);
  }
  /** che. Serialized as `:che` */
  get che() {
    return this._g(":che");
  }
  set che(v) {
    this._s(":che", v);
  }
  /** chf. Serialized as `:chf` */
  get chf() {
    return this._g(":chf");
  }
  set chf(v) {
    this._s(":chf", v);
  }
  /** rho. Serialized as `:rho` */
  get rho() {
    return this._g(":rho");
  }
  set rho(v) {
    this._s(":rho", v);
  }
  /** rhe. Serialized as `:rhe` */
  get rhe() {
    return this._g(":rhe");
  }
  set rhe(v) {
    this._s(":rhe", v);
  }
  /** rhf. Serialized as `:rhf` */
  get rhf() {
    return this._g(":rhf");
  }
  set rhf(v) {
    this._s(":rhf", v);
  }
  /** lfo. Serialized as `:lfo` */
  get lfo() {
    return this._g(":lfo");
  }
  set lfo(v) {
    this._s(":lfo", v);
  }
  /** lfe. Serialized as `:lfe` */
  get lfe() {
    return this._g(":lfe");
  }
  set lfe(v) {
    this._s(":lfe", v);
  }
  /** lff. Serialized as `:lff` */
  get lff() {
    return this._g(":lff");
  }
  set lff(v) {
    this._s(":lff", v);
  }
  /** cfo. Serialized as `:cfo` */
  get cfo() {
    return this._g(":cfo");
  }
  set cfo(v) {
    this._s(":cfo", v);
  }
  /** cfe. Serialized as `:cfe` */
  get cfe() {
    return this._g(":cfe");
  }
  set cfe(v) {
    this._s(":cfe", v);
  }
  /** cff. Serialized as `:cff` */
  get cff() {
    return this._g(":cff");
  }
  set cff(v) {
    this._s(":cff", v);
  }
  /** rfo. Serialized as `:rfo` */
  get rfo() {
    return this._g(":rfo");
  }
  set rfo(v) {
    this._s(":rfo", v);
  }
  /** rfe. Serialized as `:rfe` */
  get rfe() {
    return this._g(":rfe");
  }
  set rfe(v) {
    this._s(":rfe", v);
  }
  /** rff. Serialized as `:rff` */
  get rff() {
    return this._g(":rff");
  }
  set rff(v) {
    this._s(":rff", v);
  }
}
class LegacyDrawingType extends OxmlLeafElement {
  static _A = ["r:id"];
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class LegacyDrawingHeaderFooter extends LegacyDrawingType {
  static _Q = "x:legacyDrawingHF";
}
class LegacyDrawing extends LegacyDrawingType {
  static _Q = "x:legacyDrawing";
}
class Drawing extends OxmlLeafElement {
  static _Q = "x:drawing";
  static _A = ["r:id"];
  /** Relationship id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class CustomChartsheetViews extends OxmlCompositeElement {
  static _Q = "x:customSheetViews";
}
class ChartSheetProtection extends OxmlLeafElement {
  static _Q = "x:sheetProtection";
  static _A = [":password", ":algorithmName", ":hashValue", ":saltValue", ":spinCount", ":content", ":objects"];
  /** Password. Serialized as `:password` */
  get password() {
    return this._g(":password");
  }
  set password(v) {
    this._s(":password", v);
  }
  /** Cryptographic Algorithm Name. Serialized as `:algorithmName` */
  get algorithmName() {
    return this._g(":algorithmName");
  }
  set algorithmName(v) {
    this._s(":algorithmName", v);
  }
  /** Password Hash Value. Serialized as `:hashValue` */
  get hashValue() {
    return this._g(":hashValue");
  }
  set hashValue(v) {
    this._s(":hashValue", v);
  }
  /** Salt Value for Password Verifier. Serialized as `:saltValue` */
  get saltValue() {
    return this._g(":saltValue");
  }
  set saltValue(v) {
    this._s(":saltValue", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
  get spinCount() {
    return this._g(":spinCount");
  }
  set spinCount(v) {
    this._s(":spinCount", v);
  }
  /** Contents. Serialized as `:content` */
  get content() {
    return this._g(":content");
  }
  set content(v) {
    this._s(":content", v);
  }
  /** Objects Locked. Serialized as `:objects` */
  get objects() {
    return this._g(":objects");
  }
  set objects(v) {
    this._s(":objects", v);
  }
}
class ChartSheetViews extends OxmlCompositeElement {
  static _Q = "x:sheetViews";
}
class ChartSheetProperties extends OxmlCompositeElement {
  static _Q = "x:sheetPr";
  static _A = [":published", ":codeName"];
  /** Published. Serialized as `:published` */
  get published() {
    return this._g(":published");
  }
  set published(v) {
    this._s(":published", v);
  }
  /** Code Name. Serialized as `:codeName` */
  get codeName() {
    return this._g(":codeName");
  }
  set codeName(v) {
    this._s(":codeName", v);
  }
  /** Returns TabColor. */
  get tabColor() {
    return this._f(TabColor);
  }
}
class EmbeddedObjectProperties extends OxmlCompositeElement {
  static _Q = "x:objectPr";
  static _A = [":locked", ":defaultSize", ":print", ":disabled", ":uiObject", ":autoFill", ":autoLine", ":autoPict", ":macro", ":altText", ":dde", "r:id"];
  /** locked. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** defaultSize. Serialized as `:defaultSize` */
  get defaultSize() {
    return this._g(":defaultSize");
  }
  set defaultSize(v) {
    this._s(":defaultSize", v);
  }
  /** print. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** disabled. Serialized as `:disabled` */
  get disabled() {
    return this._g(":disabled");
  }
  set disabled(v) {
    this._s(":disabled", v);
  }
  /** uiObject. Serialized as `:uiObject` */
  get uiObject() {
    return this._g(":uiObject");
  }
  set uiObject(v) {
    this._s(":uiObject", v);
  }
  /** autoFill. Serialized as `:autoFill` */
  get autoFill() {
    return this._g(":autoFill");
  }
  set autoFill(v) {
    this._s(":autoFill", v);
  }
  /** autoLine. Serialized as `:autoLine` */
  get autoLine() {
    return this._g(":autoLine");
  }
  set autoLine(v) {
    this._s(":autoLine", v);
  }
  /** autoPict. Serialized as `:autoPict` */
  get autoPict() {
    return this._g(":autoPict");
  }
  set autoPict(v) {
    this._s(":autoPict", v);
  }
  /** macro. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** altText. Serialized as `:altText` */
  get altText() {
    return this._g(":altText");
  }
  set altText(v) {
    this._s(":altText", v);
  }
  /** dde. Serialized as `:dde` */
  get dde() {
    return this._g(":dde");
  }
  set dde(v) {
    this._s(":dde", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns ObjectAnchor. */
  get objectAnchor() {
    return this._f(ObjectAnchor);
  }
}
class ControlProperties extends OxmlCompositeElement {
  static _Q = "x:controlPr";
  static _A = [":locked", ":defaultSize", ":print", ":disabled", ":recalcAlways", ":uiObject", ":autoFill", ":autoLine", ":autoPict", ":macro", ":altText", ":linkedCell", ":listFillRange", ":cf", "r:id"];
  /** locked. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** defaultSize. Serialized as `:defaultSize` */
  get defaultSize() {
    return this._g(":defaultSize");
  }
  set defaultSize(v) {
    this._s(":defaultSize", v);
  }
  /** print. Serialized as `:print` */
  get print() {
    return this._g(":print");
  }
  set print(v) {
    this._s(":print", v);
  }
  /** disabled. Serialized as `:disabled` */
  get disabled() {
    return this._g(":disabled");
  }
  set disabled(v) {
    this._s(":disabled", v);
  }
  /** recalcAlways. Serialized as `:recalcAlways` */
  get recalcAlways() {
    return this._g(":recalcAlways");
  }
  set recalcAlways(v) {
    this._s(":recalcAlways", v);
  }
  /** uiObject. Serialized as `:uiObject` */
  get uiObject() {
    return this._g(":uiObject");
  }
  set uiObject(v) {
    this._s(":uiObject", v);
  }
  /** autoFill. Serialized as `:autoFill` */
  get autoFill() {
    return this._g(":autoFill");
  }
  set autoFill(v) {
    this._s(":autoFill", v);
  }
  /** autoLine. Serialized as `:autoLine` */
  get autoLine() {
    return this._g(":autoLine");
  }
  set autoLine(v) {
    this._s(":autoLine", v);
  }
  /** autoPict. Serialized as `:autoPict` */
  get autoPict() {
    return this._g(":autoPict");
  }
  set autoPict(v) {
    this._s(":autoPict", v);
  }
  /** macro. Serialized as `:macro` */
  get macro() {
    return this._g(":macro");
  }
  set macro(v) {
    this._s(":macro", v);
  }
  /** altText. Serialized as `:altText` */
  get altText() {
    return this._g(":altText");
  }
  set altText(v) {
    this._s(":altText", v);
  }
  /** linkedCell. Serialized as `:linkedCell` */
  get linkedCell() {
    return this._g(":linkedCell");
  }
  set linkedCell(v) {
    this._s(":linkedCell", v);
  }
  /** listFillRange. Serialized as `:listFillRange` */
  get listFillRange() {
    return this._g(":listFillRange");
  }
  set listFillRange(v) {
    this._s(":listFillRange", v);
  }
  /** cf. Serialized as `:cf` */
  get cf() {
    return this._g(":cf");
  }
  set cf(v) {
    this._s(":cf", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns ObjectAnchor. */
  get objectAnchor() {
    return this._f(ObjectAnchor);
  }
}
class BorderPropertiesType extends OxmlCompositeElement {
  static _A = [":style"];
  /** Line Style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Color. */
  get color() {
    return this._f(Color);
  }
}
class HorizontalBorder extends BorderPropertiesType {
  static _Q = "x:horizontal";
}
class VerticalBorder extends BorderPropertiesType {
  static _Q = "x:vertical";
}
class DiagonalBorder extends BorderPropertiesType {
  static _Q = "x:diagonal";
}
class BottomBorder extends BorderPropertiesType {
  static _Q = "x:bottom";
}
class TopBorder extends BorderPropertiesType {
  static _Q = "x:top";
}
class RightBorder extends BorderPropertiesType {
  static _Q = "x:right";
}
class LeftBorder extends BorderPropertiesType {
  static _Q = "x:left";
}
class EndBorder extends BorderPropertiesType {
  static _Q = "x:end";
}
class StartBorder extends BorderPropertiesType {
  static _Q = "x:start";
}
class OleItem extends OxmlLeafElement {
  static _Q = "x:oleItem";
  static _A = [":name", ":icon", ":advise", ":preferPic"];
  /** OLE Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Icon. Serialized as `:icon` */
  get icon() {
    return this._g(":icon");
  }
  set icon(v) {
    this._s(":icon", v);
  }
  /** Advise. Serialized as `:advise` */
  get advise() {
    return this._g(":advise");
  }
  set advise(v) {
    this._s(":advise", v);
  }
  /** Object is an Image. Serialized as `:preferPic` */
  get preferPicture() {
    return this._g(":preferPic");
  }
  set preferPicture(v) {
    this._s(":preferPic", v);
  }
}
class TableExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class TableStyleInfo extends OxmlLeafElement {
  static _Q = "x:tableStyleInfo";
  static _A = [":name", ":showFirstColumn", ":showLastColumn", ":showRowStripes", ":showColumnStripes"];
  /** Style Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Show First Column. Serialized as `:showFirstColumn` */
  get showFirstColumn() {
    return this._g(":showFirstColumn");
  }
  set showFirstColumn(v) {
    this._s(":showFirstColumn", v);
  }
  /** Show Last Column. Serialized as `:showLastColumn` */
  get showLastColumn() {
    return this._g(":showLastColumn");
  }
  set showLastColumn(v) {
    this._s(":showLastColumn", v);
  }
  /** Show Row Stripes. Serialized as `:showRowStripes` */
  get showRowStripes() {
    return this._g(":showRowStripes");
  }
  set showRowStripes(v) {
    this._s(":showRowStripes", v);
  }
  /** Show Column Stripes. Serialized as `:showColumnStripes` */
  get showColumnStripes() {
    return this._g(":showColumnStripes");
  }
  set showColumnStripes(v) {
    this._s(":showColumnStripes", v);
  }
}
class TableColumns extends OxmlCompositeElement {
  static _Q = "x:tableColumns";
  static _A = [":count"];
  /** Column Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CacheSourceExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14SourceConnection. */
  get sourceConnection() {
    return this._f(X14SourceConnection);
  }
}
class PivotFieldExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14PivotField. */
  get pivotField() {
    return this._f(X14PivotField);
  }
}
class PivotHierarchyExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14PivotHierarchy. */
  get pivotHierarchy() {
    return this._f(X14PivotHierarchy);
  }
}
class ConditionalFormattingRuleExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14Id. */
  get id() {
    return this._f(X14Id);
  }
}
class MarkerType extends OxmlCompositeElement {
  /** Column). */
  get columnId() {
    return this._f(XdrColumnId);
  }
  /** Column Offset. */
  get columnOffset() {
    return this._f(XdrColumnOffset);
  }
  /** Row. */
  get rowId() {
    return this._f(XdrRowId);
  }
  /** Row Offset. */
  get rowOffset() {
    return this._f(XdrRowOffset);
  }
}
class ToMarker extends MarkerType {
  static _Q = "x:to";
}
class FromMarker extends MarkerType {
  static _Q = "x:from";
}
class ObjectAnchor extends OxmlCompositeElement {
  static _Q = "x:anchor";
  static _A = [":moveWithCells", ":sizeWithCells", ":z-order"];
  /** moveWithCells. Serialized as `:moveWithCells` */
  get moveWithCells() {
    return this._g(":moveWithCells");
  }
  set moveWithCells(v) {
    this._s(":moveWithCells", v);
  }
  /** sizeWithCells. Serialized as `:sizeWithCells` */
  get sizeWithCells() {
    return this._g(":sizeWithCells");
  }
  set sizeWithCells(v) {
    this._s(":sizeWithCells", v);
  }
  /** z-order. Serialized as `:z-order` */
  get zOrder() {
    return this._g(":z-order");
  }
  set zOrder(v) {
    this._s(":z-order", v);
  }
  /** Returns FromMarker. */
  get fromMarker() {
    return this._f(FromMarker);
  }
  /** Returns ToMarker. */
  get toMarker() {
    return this._f(ToMarker);
  }
}
class TableExtension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns X14Table. */
  get table() {
    return this._f(X14Table);
  }
}
class FunctionGroup extends OxmlLeafElement {
  static _Q = "x:functionGroup";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class DefinedName extends OxmlLeafTextElement {
  static _Q = "x:definedName";
  static _A = [":name", ":comment", ":customMenu", ":description", ":help", ":statusBar", ":localSheetId", ":hidden", ":function", ":vbProcedure", ":xlm", ":functionGroupId", ":shortcutKey", ":publishToServer", ":workbookParameter"];
  /** Defined Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Comment. Serialized as `:comment` */
  get comment() {
    return this._g(":comment");
  }
  set comment(v) {
    this._s(":comment", v);
  }
  /** Custom Menu Text. Serialized as `:customMenu` */
  get customMenu() {
    return this._g(":customMenu");
  }
  set customMenu(v) {
    this._s(":customMenu", v);
  }
  /** Description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** Help. Serialized as `:help` */
  get help() {
    return this._g(":help");
  }
  set help(v) {
    this._s(":help", v);
  }
  /** Status Bar. Serialized as `:statusBar` */
  get statusBar() {
    return this._g(":statusBar");
  }
  set statusBar(v) {
    this._s(":statusBar", v);
  }
  /** Local Name Sheet Id. Serialized as `:localSheetId` */
  get localSheetId() {
    return this._g(":localSheetId");
  }
  set localSheetId(v) {
    this._s(":localSheetId", v);
  }
  /** Hidden Name. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Function. Serialized as `:function` */
  get function() {
    return this._g(":function");
  }
  set function(v) {
    this._s(":function", v);
  }
  /** Procedure. Serialized as `:vbProcedure` */
  get vbProcedure() {
    return this._g(":vbProcedure");
  }
  set vbProcedure(v) {
    this._s(":vbProcedure", v);
  }
  /** External Function. Serialized as `:xlm` */
  get xlm() {
    return this._g(":xlm");
  }
  set xlm(v) {
    this._s(":xlm", v);
  }
  /** Function Group Id. Serialized as `:functionGroupId` */
  get functionGroupId() {
    return this._g(":functionGroupId");
  }
  set functionGroupId(v) {
    this._s(":functionGroupId", v);
  }
  /** Shortcut Key. Serialized as `:shortcutKey` */
  get shortcutKey() {
    return this._g(":shortcutKey");
  }
  set shortcutKey(v) {
    this._s(":shortcutKey", v);
  }
  /** Publish To Server. Serialized as `:publishToServer` */
  get publishToServer() {
    return this._g(":publishToServer");
  }
  set publishToServer(v) {
    this._s(":publishToServer", v);
  }
  /** Workbook Parameter (Server). Serialized as `:workbookParameter` */
  get workbookParameter() {
    return this._g(":workbookParameter");
  }
  set workbookParameter(v) {
    this._s(":workbookParameter", v);
  }
}
class WorkbookView extends OxmlCompositeElement {
  static _Q = "x:workbookView";
  static _A = [":visibility", ":minimized", ":showHorizontalScroll", ":showVerticalScroll", ":showSheetTabs", ":xWindow", ":yWindow", ":windowWidth", ":windowHeight", ":tabRatio", ":firstSheet", ":activeTab", ":autoFilterDateGrouping"];
  /** Visibility. Serialized as `:visibility` */
  get visibility() {
    return this._g(":visibility");
  }
  set visibility(v) {
    this._s(":visibility", v);
  }
  /** Minimized. Serialized as `:minimized` */
  get minimized() {
    return this._g(":minimized");
  }
  set minimized(v) {
    this._s(":minimized", v);
  }
  /** Show Horizontal Scroll. Serialized as `:showHorizontalScroll` */
  get showHorizontalScroll() {
    return this._g(":showHorizontalScroll");
  }
  set showHorizontalScroll(v) {
    this._s(":showHorizontalScroll", v);
  }
  /** Show Vertical Scroll. Serialized as `:showVerticalScroll` */
  get showVerticalScroll() {
    return this._g(":showVerticalScroll");
  }
  set showVerticalScroll(v) {
    this._s(":showVerticalScroll", v);
  }
  /** Show Sheet Tabs. Serialized as `:showSheetTabs` */
  get showSheetTabs() {
    return this._g(":showSheetTabs");
  }
  set showSheetTabs(v) {
    this._s(":showSheetTabs", v);
  }
  /** Upper Left Corner (X Coordinate). Serialized as `:xWindow` */
  get xWindow() {
    return this._g(":xWindow");
  }
  set xWindow(v) {
    this._s(":xWindow", v);
  }
  /** Upper Left Corner (Y Coordinate). Serialized as `:yWindow` */
  get yWindow() {
    return this._g(":yWindow");
  }
  set yWindow(v) {
    this._s(":yWindow", v);
  }
  /** Window Width. Serialized as `:windowWidth` */
  get windowWidth() {
    return this._g(":windowWidth");
  }
  set windowWidth(v) {
    this._s(":windowWidth", v);
  }
  /** Window Height. Serialized as `:windowHeight` */
  get windowHeight() {
    return this._g(":windowHeight");
  }
  set windowHeight(v) {
    this._s(":windowHeight", v);
  }
  /** Sheet Tab Ratio. Serialized as `:tabRatio` */
  get tabRatio() {
    return this._g(":tabRatio");
  }
  set tabRatio(v) {
    this._s(":tabRatio", v);
  }
  /** First Sheet. Serialized as `:firstSheet` */
  get firstSheet() {
    return this._g(":firstSheet");
  }
  set firstSheet(v) {
    this._s(":firstSheet", v);
  }
  /** Active Sheet Index. Serialized as `:activeTab` */
  get activeTab() {
    return this._g(":activeTab");
  }
  set activeTab(v) {
    this._s(":activeTab", v);
  }
  /** AutoFilter Date Grouping. Serialized as `:autoFilterDateGrouping` */
  get autoFilterDateGrouping() {
    return this._g(":autoFilterDateGrouping");
  }
  set autoFilterDateGrouping(v) {
    this._s(":autoFilterDateGrouping", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Sheet extends OxmlLeafElement {
  static _Q = "x:sheet";
  static _A = [":name", ":sheetId", ":state", "r:id"];
  /** Sheet Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Sheet Tab Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Visible State. Serialized as `:state` */
  get state() {
    return this._g(":state");
  }
  set state(v) {
    this._s(":state", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class CustomWorkbookView extends OxmlCompositeElement {
  static _Q = "x:customWorkbookView";
  static _A = [":name", ":guid", ":autoUpdate", ":mergeInterval", ":changesSavedWin", ":onlySync", ":personalView", ":includePrintSettings", ":includeHiddenRowCol", ":maximized", ":minimized", ":showHorizontalScroll", ":showVerticalScroll", ":showSheetTabs", ":xWindow", ":yWindow", ":windowWidth", ":windowHeight", ":tabRatio", ":activeSheetId", ":showFormulaBar", ":showStatusbar", ":showComments", ":showObjects"];
  /** Custom View Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Custom View GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** Auto Update. Serialized as `:autoUpdate` */
  get autoUpdate() {
    return this._g(":autoUpdate");
  }
  set autoUpdate(v) {
    this._s(":autoUpdate", v);
  }
  /** Merge Interval. Serialized as `:mergeInterval` */
  get mergeInterval() {
    return this._g(":mergeInterval");
  }
  set mergeInterval(v) {
    this._s(":mergeInterval", v);
  }
  /** Changes Saved Win. Serialized as `:changesSavedWin` */
  get changesSavedWin() {
    return this._g(":changesSavedWin");
  }
  set changesSavedWin(v) {
    this._s(":changesSavedWin", v);
  }
  /** Only Synch. Serialized as `:onlySync` */
  get onlySync() {
    return this._g(":onlySync");
  }
  set onlySync(v) {
    this._s(":onlySync", v);
  }
  /** Personal View. Serialized as `:personalView` */
  get personalView() {
    return this._g(":personalView");
  }
  set personalView(v) {
    this._s(":personalView", v);
  }
  /** Include Print Settings. Serialized as `:includePrintSettings` */
  get includePrintSettings() {
    return this._g(":includePrintSettings");
  }
  set includePrintSettings(v) {
    this._s(":includePrintSettings", v);
  }
  /** Include Hidden Rows and Columns. Serialized as `:includeHiddenRowCol` */
  get includeHiddenRowColumn() {
    return this._g(":includeHiddenRowCol");
  }
  set includeHiddenRowColumn(v) {
    this._s(":includeHiddenRowCol", v);
  }
  /** Maximized. Serialized as `:maximized` */
  get maximized() {
    return this._g(":maximized");
  }
  set maximized(v) {
    this._s(":maximized", v);
  }
  /** Minimized. Serialized as `:minimized` */
  get minimized() {
    return this._g(":minimized");
  }
  set minimized(v) {
    this._s(":minimized", v);
  }
  /** Show Horizontal Scroll. Serialized as `:showHorizontalScroll` */
  get showHorizontalScroll() {
    return this._g(":showHorizontalScroll");
  }
  set showHorizontalScroll(v) {
    this._s(":showHorizontalScroll", v);
  }
  /** Show Vertical Scroll. Serialized as `:showVerticalScroll` */
  get showVerticalScroll() {
    return this._g(":showVerticalScroll");
  }
  set showVerticalScroll(v) {
    this._s(":showVerticalScroll", v);
  }
  /** Show Sheet Tabs. Serialized as `:showSheetTabs` */
  get showSheetTabs() {
    return this._g(":showSheetTabs");
  }
  set showSheetTabs(v) {
    this._s(":showSheetTabs", v);
  }
  /** Top Left Corner (X Coordinate). Serialized as `:xWindow` */
  get xWindow() {
    return this._g(":xWindow");
  }
  set xWindow(v) {
    this._s(":xWindow", v);
  }
  /** Top Left Corner (Y Coordinate). Serialized as `:yWindow` */
  get yWindow() {
    return this._g(":yWindow");
  }
  set yWindow(v) {
    this._s(":yWindow", v);
  }
  /** Window Width. Serialized as `:windowWidth` */
  get windowWidth() {
    return this._g(":windowWidth");
  }
  set windowWidth(v) {
    this._s(":windowWidth", v);
  }
  /** Window Height. Serialized as `:windowHeight` */
  get windowHeight() {
    return this._g(":windowHeight");
  }
  set windowHeight(v) {
    this._s(":windowHeight", v);
  }
  /** Sheet Tab Ratio. Serialized as `:tabRatio` */
  get tabRatio() {
    return this._g(":tabRatio");
  }
  set tabRatio(v) {
    this._s(":tabRatio", v);
  }
  /** Active Sheet in Book View. Serialized as `:activeSheetId` */
  get activeSheetId() {
    return this._g(":activeSheetId");
  }
  set activeSheetId(v) {
    this._s(":activeSheetId", v);
  }
  /** Show Formula Bar. Serialized as `:showFormulaBar` */
  get showFormulaBar() {
    return this._g(":showFormulaBar");
  }
  set showFormulaBar(v) {
    this._s(":showFormulaBar", v);
  }
  /** Show Status Bar. Serialized as `:showStatusbar` */
  get showStatusbar() {
    return this._g(":showStatusbar");
  }
  set showStatusbar(v) {
    this._s(":showStatusbar", v);
  }
  /** Show Comments. Serialized as `:showComments` */
  get showComments() {
    return this._g(":showComments");
  }
  set showComments(v) {
    this._s(":showComments", v);
  }
  /** Show Objects. Serialized as `:showObjects` */
  get showObjects() {
    return this._g(":showObjects");
  }
  set showObjects(v) {
    this._s(":showObjects", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExternalReference extends OxmlLeafElement {
  static _Q = "x:externalReference";
  static _A = ["r:id"];
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class WebPublishObject extends OxmlLeafElement {
  static _Q = "x:webPublishObject";
  static _A = [":id", ":divId", ":sourceObject", ":destinationFile", ":title", ":autoRepublish"];
  /** Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Div Id. Serialized as `:divId` */
  get divId() {
    return this._g(":divId");
  }
  set divId(v) {
    this._s(":divId", v);
  }
  /** Source Object. Serialized as `:sourceObject` */
  get sourceObject() {
    return this._g(":sourceObject");
  }
  set sourceObject(v) {
    this._s(":sourceObject", v);
  }
  /** Destination File. Serialized as `:destinationFile` */
  get destinationFile() {
    return this._g(":destinationFile");
  }
  set destinationFile(v) {
    this._s(":destinationFile", v);
  }
  /** Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Auto Republish. Serialized as `:autoRepublish` */
  get autoRepublish() {
    return this._g(":autoRepublish");
  }
  set autoRepublish(v) {
    this._s(":autoRepublish", v);
  }
}
class PivotCache extends OxmlLeafElement {
  static _Q = "x:pivotCache";
  static _A = [":cacheId", "r:id"];
  /** PivotCache Id. Serialized as `:cacheId` */
  get cacheId() {
    return this._g(":cacheId");
  }
  set cacheId(v) {
    this._s(":cacheId", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class TopicReferences extends OxmlLeafElement {
  static _Q = "x:tr";
  static _A = [":r", ":s"];
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Sheet Id. Serialized as `:s` */
  get sheetId() {
    return this._g(":s");
  }
  set sheetId(v) {
    this._s(":s", v);
  }
}
class Topic extends OxmlCompositeElement {
  static _Q = "x:tp";
  static _A = [":t"];
  /** Type. Serialized as `:t` */
  get valueType() {
    return this._g(":t");
  }
  set valueType(v) {
    this._s(":t", v);
  }
  /** Topic Value. */
  get xstring() {
    return this._f(Xstring);
  }
}
class Main extends OxmlCompositeElement {
  static _Q = "x:main";
  static _A = [":first"];
  /** First String. Serialized as `:first` */
  get first() {
    return this._g(":first");
  }
  set first(v) {
    this._s(":first", v);
  }
}
class VolatileType extends OxmlCompositeElement {
  static _Q = "x:volType";
  static _A = [":type"];
  /** Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
}
class XmlColumnProperties extends OxmlCompositeElement {
  static _Q = "x:xmlColumnPr";
  static _A = [":mapId", ":xpath", ":denormalized", ":xmlDataType"];
  /** XML Map Id. Serialized as `:mapId` */
  get mapId() {
    return this._g(":mapId");
  }
  set mapId(v) {
    this._s(":mapId", v);
  }
  /** XPath. Serialized as `:xpath` */
  get xPath() {
    return this._g(":xpath");
  }
  set xPath(v) {
    this._s(":xpath", v);
  }
  /** Denormalized. Serialized as `:denormalized` */
  get denormalized() {
    return this._g(":denormalized");
  }
  set denormalized(v) {
    this._s(":denormalized", v);
  }
  /** XML Data Type. Serialized as `:xmlDataType` */
  get xmlDataType() {
    return this._g(":xmlDataType");
  }
  set xmlDataType(v) {
    this._s(":xmlDataType", v);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TableFormulaType extends OxmlLeafTextElement {
  static _A = [":array", "xml:space"];
  /** Array. Serialized as `:array` */
  get array() {
    return this._g(":array");
  }
  set array(v) {
    this._s(":array", v);
  }
  /** space. Serialized as `xml:space` */
  get space() {
    return this._g("xml:space");
  }
  set space(v) {
    this._s("xml:space", v);
  }
}
class TotalsRowFormula extends TableFormulaType {
  static _Q = "x:totalsRowFormula";
}
class CalculatedColumnFormula extends TableFormulaType {
  static _Q = "x:calculatedColumnFormula";
}
class TableColumn extends OxmlCompositeElement {
  static _Q = "x:tableColumn";
  static _A = [":id", ":uniqueName", ":name", ":totalsRowFunction", ":totalsRowLabel", ":queryTableFieldId", ":headerRowDxfId", ":dataDxfId", ":totalsRowDxfId", ":headerRowCellStyle", ":dataCellStyle", ":totalsRowCellStyle"];
  /** Table Field Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Unique Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** Column name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Totals Row Function. Serialized as `:totalsRowFunction` */
  get totalsRowFunction() {
    return this._g(":totalsRowFunction");
  }
  set totalsRowFunction(v) {
    this._s(":totalsRowFunction", v);
  }
  /** Totals Row Label. Serialized as `:totalsRowLabel` */
  get totalsRowLabel() {
    return this._g(":totalsRowLabel");
  }
  set totalsRowLabel(v) {
    this._s(":totalsRowLabel", v);
  }
  /** Query Table Field Id. Serialized as `:queryTableFieldId` */
  get queryTableFieldId() {
    return this._g(":queryTableFieldId");
  }
  set queryTableFieldId(v) {
    this._s(":queryTableFieldId", v);
  }
  /** Header Row Cell Format Id. Serialized as `:headerRowDxfId` */
  get headerRowDifferentialFormattingId() {
    return this._g(":headerRowDxfId");
  }
  set headerRowDifferentialFormattingId(v) {
    this._s(":headerRowDxfId", v);
  }
  /** Data and Insert Row Format Id. Serialized as `:dataDxfId` */
  get dataFormatId() {
    return this._g(":dataDxfId");
  }
  set dataFormatId(v) {
    this._s(":dataDxfId", v);
  }
  /** Totals Row Format Id. Serialized as `:totalsRowDxfId` */
  get totalsRowDifferentialFormattingId() {
    return this._g(":totalsRowDxfId");
  }
  set totalsRowDifferentialFormattingId(v) {
    this._s(":totalsRowDxfId", v);
  }
  /** Header Row Cell Style. Serialized as `:headerRowCellStyle` */
  get headerRowCellStyle() {
    return this._g(":headerRowCellStyle");
  }
  set headerRowCellStyle(v) {
    this._s(":headerRowCellStyle", v);
  }
  /** Data Area Style Name. Serialized as `:dataCellStyle` */
  get dataCellStyle() {
    return this._g(":dataCellStyle");
  }
  set dataCellStyle(v) {
    this._s(":dataCellStyle", v);
  }
  /** Totals Row Style Name. Serialized as `:totalsRowCellStyle` */
  get totalsRowCellStyle() {
    return this._g(":totalsRowCellStyle");
  }
  set totalsRowCellStyle(v) {
    this._s(":totalsRowCellStyle", v);
  }
  /** Calculated Column Formula. */
  get calculatedColumnFormula() {
    return this._f(CalculatedColumnFormula);
  }
  /** Totals Row Formula. */
  get totalsRowFormula() {
    return this._f(TotalsRowFormula);
  }
  /** XML Column Properties. */
  get xmlColumnProperties() {
    return this._f(XmlColumnProperties);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Xstring extends OxmlLeafTextElement {
  static _Q = "x:v";
}
class SheetName extends OxmlLeafElement {
  static _Q = "x:sheetName";
  static _A = [":val"];
  /** Sheet Name Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class OleLink extends OxmlCompositeElement {
  static _Q = "x:oleLink";
  static _A = ["r:id", ":progId"];
  /** OLE Link Relationship. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** OLE Link ProgID. Serialized as `:progId` */
  get progId() {
    return this._g(":progId");
  }
  set progId(v) {
    this._s(":progId", v);
  }
  /** OLE Link Items. */
  get oleItems() {
    return this._f(OleItems);
  }
}
class DdeLink extends OxmlCompositeElement {
  static _Q = "x:ddeLink";
  static _A = [":ddeService", ":ddeTopic"];
  /** Service name. Serialized as `:ddeService` */
  get ddeService() {
    return this._g(":ddeService");
  }
  set ddeService(v) {
    this._s(":ddeService", v);
  }
  /** Topic for DDE server. Serialized as `:ddeTopic` */
  get ddeTopic() {
    return this._g(":ddeTopic");
  }
  set ddeTopic(v) {
    this._s(":ddeTopic", v);
  }
  /** DDE Items Collection. */
  get ddeItems() {
    return this._f(DdeItems);
  }
}
class ExternalBook extends OxmlCompositeElement {
  static _Q = "x:externalBook";
  static _A = ["r:id"];
  /** Relationship to supporting book file path. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Alternate URLs and identifiers of the external book. */
  get externalBookAlternateUrls() {
    return this._f(Xxl21ExternalBookAlternateUrls);
  }
  /** Sheet names of supporting book. */
  get sheetNames() {
    return this._f(SheetNames);
  }
  /** Defined names associated with supporting book.. */
  get externalDefinedNames() {
    return this._f(ExternalDefinedNames);
  }
  /** Cached worksheet data associated with supporting book. */
  get sheetDataSet() {
    return this._f(SheetDataSet);
  }
}
class OleItems extends OxmlCompositeElement {
  static _Q = "x:oleItems";
}
class Value extends OxmlCompositeElement {
  static _Q = "x:value";
  static _A = [":t"];
  /** DDE Value Type. Serialized as `:t` */
  get valueType() {
    return this._g(":t");
  }
  set valueType(v) {
    this._s(":t", v);
  }
  /** DDE Link Value. */
  get ddeLinkValue() {
    return this._f(DdeLinkValue);
  }
}
class Values extends OxmlCompositeElement {
  static _Q = "x:values";
  static _A = [":rows", ":cols"];
  /** Rows. Serialized as `:rows` */
  get rows() {
    return this._g(":rows");
  }
  set rows(v) {
    this._s(":rows", v);
  }
  /** Columns. Serialized as `:cols` */
  get columns() {
    return this._g(":cols");
  }
  set columns(v) {
    this._s(":cols", v);
  }
}
class DdeItem extends OxmlCompositeElement {
  static _Q = "x:ddeItem";
  static _A = [":name", ":ole", ":advise", ":preferPic"];
  /** DDE Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** OLE. Serialized as `:ole` */
  get useOle() {
    return this._g(":ole");
  }
  set useOle(v) {
    this._s(":ole", v);
  }
  /** Advise. Serialized as `:advise` */
  get advise() {
    return this._g(":advise");
  }
  set advise(v) {
    this._s(":advise", v);
  }
  /** Data is an Image. Serialized as `:preferPic` */
  get preferPicture() {
    return this._g(":preferPic");
  }
  set preferPicture(v) {
    this._s(":preferPic", v);
  }
  /** DDE Name Values. */
  get values() {
    return this._f(Values);
  }
}
class DdeItems extends OxmlCompositeElement {
  static _Q = "x:ddeItems";
}
class ExternalCell extends OxmlCompositeElement {
  static _Q = "x:cell";
  static _A = [":r", ":t", ":vm"];
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Type. Serialized as `:t` */
  get dataType() {
    return this._g(":t");
  }
  set dataType(v) {
    this._s(":t", v);
  }
  /** Value Metadata. Serialized as `:vm` */
  get valueMetaIndex() {
    return this._g(":vm");
  }
  set valueMetaIndex(v) {
    this._s(":vm", v);
  }
  /** Value. */
  get xstring() {
    return this._f(Xstring);
  }
}
class ExternalRow extends OxmlCompositeElement {
  static _Q = "x:row";
  static _A = [":r"];
  /** Row. Serialized as `:r` */
  get rowIndex() {
    return this._g(":r");
  }
  set rowIndex(v) {
    this._s(":r", v);
  }
}
class ExternalSheetData extends OxmlCompositeElement {
  static _Q = "x:sheetData";
  static _A = [":sheetId", ":refreshError"];
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Last Refresh Resulted in Error. Serialized as `:refreshError` */
  get refreshError() {
    return this._g(":refreshError");
  }
  set refreshError(v) {
    this._s(":refreshError", v);
  }
}
class ExternalDefinedName extends OxmlLeafElement {
  static _Q = "x:definedName";
  static _A = [":name", ":refersTo", ":sheetId"];
  /** Defined Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Refers To. Serialized as `:refersTo` */
  get refersTo() {
    return this._g(":refersTo");
  }
  set refersTo(v) {
    this._s(":refersTo", v);
  }
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
}
class TableStyleElement extends OxmlLeafElement {
  static _Q = "x:tableStyleElement";
  static _A = [":type", ":size", ":dxfId"];
  /** Table Style Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Band Size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** Formatting Id. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
}
class FontCharSet extends OxmlLeafElement {
  static _Q = "x:charset";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class FontFamilyNumbering extends OxmlLeafElement {
  static _Q = "x:family";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class FontName extends OxmlLeafElement {
  static _Q = "x:name";
  static _A = [":val"];
  /** String Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class CellFormat extends OxmlCompositeElement {
  static _Q = "x:xf";
  static _A = [":numFmtId", ":fontId", ":fillId", ":borderId", ":xfId", ":quotePrefix", ":pivotButton", ":applyNumberFormat", ":applyFont", ":applyFill", ":applyBorder", ":applyAlignment", ":applyProtection"];
  /** Number Format Id. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
  /** Font Id. Serialized as `:fontId` */
  get fontId() {
    return this._g(":fontId");
  }
  set fontId(v) {
    this._s(":fontId", v);
  }
  /** Fill Id. Serialized as `:fillId` */
  get fillId() {
    return this._g(":fillId");
  }
  set fillId(v) {
    this._s(":fillId", v);
  }
  /** Border Id. Serialized as `:borderId` */
  get borderId() {
    return this._g(":borderId");
  }
  set borderId(v) {
    this._s(":borderId", v);
  }
  /** Format Id. Serialized as `:xfId` */
  get formatId() {
    return this._g(":xfId");
  }
  set formatId(v) {
    this._s(":xfId", v);
  }
  /** Quote Prefix. Serialized as `:quotePrefix` */
  get quotePrefix() {
    return this._g(":quotePrefix");
  }
  set quotePrefix(v) {
    this._s(":quotePrefix", v);
  }
  /** Pivot Button. Serialized as `:pivotButton` */
  get pivotButton() {
    return this._g(":pivotButton");
  }
  set pivotButton(v) {
    this._s(":pivotButton", v);
  }
  /** Apply Number Format. Serialized as `:applyNumberFormat` */
  get applyNumberFormat() {
    return this._g(":applyNumberFormat");
  }
  set applyNumberFormat(v) {
    this._s(":applyNumberFormat", v);
  }
  /** Apply Font. Serialized as `:applyFont` */
  get applyFont() {
    return this._g(":applyFont");
  }
  set applyFont(v) {
    this._s(":applyFont", v);
  }
  /** Apply Fill. Serialized as `:applyFill` */
  get applyFill() {
    return this._g(":applyFill");
  }
  set applyFill(v) {
    this._s(":applyFill", v);
  }
  /** Apply Border. Serialized as `:applyBorder` */
  get applyBorder() {
    return this._g(":applyBorder");
  }
  set applyBorder(v) {
    this._s(":applyBorder", v);
  }
  /** Apply Alignment. Serialized as `:applyAlignment` */
  get applyAlignment() {
    return this._g(":applyAlignment");
  }
  set applyAlignment(v) {
    this._s(":applyAlignment", v);
  }
  /** Apply Protection. Serialized as `:applyProtection` */
  get applyProtection() {
    return this._g(":applyProtection");
  }
  set applyProtection(v) {
    this._s(":applyProtection", v);
  }
  /** Alignment. */
  get alignment() {
    return this._f(Alignment);
  }
  /** Protection. */
  get protection() {
    return this._f(Protection);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CellStyle extends OxmlCompositeElement {
  static _Q = "x:cellStyle";
  static _A = [":name", ":xfId", ":builtinId", ":iLevel", ":hidden", ":customBuiltin"];
  /** User Defined Cell Style. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Format Id. Serialized as `:xfId` */
  get formatId() {
    return this._g(":xfId");
  }
  set formatId(v) {
    this._s(":xfId", v);
  }
  /** Built-In Style Id. Serialized as `:builtinId` */
  get builtinId() {
    return this._g(":builtinId");
  }
  set builtinId(v) {
    this._s(":builtinId", v);
  }
  /** Outline Style. Serialized as `:iLevel` */
  get outlineLevel() {
    return this._g(":iLevel");
  }
  set outlineLevel(v) {
    this._s(":iLevel", v);
  }
  /** Hidden Style. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Custom Built In. Serialized as `:customBuiltin` */
  get customBuiltin() {
    return this._g(":customBuiltin");
  }
  set customBuiltin(v) {
    this._s(":customBuiltin", v);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RgbColor extends OxmlLeafElement {
  static _Q = "x:rgbColor";
  static _A = [":rgb"];
  /** Alpha Red Green Blue. Serialized as `:rgb` */
  get rgb() {
    return this._g(":rgb");
  }
  set rgb(v) {
    this._s(":rgb", v);
  }
}
class TableStyle extends OxmlCompositeElement {
  static _Q = "x:tableStyle";
  static _A = [":name", ":pivot", ":table", ":count"];
  /** Table Style Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Pivot Style. Serialized as `:pivot` */
  get pivot() {
    return this._g(":pivot");
  }
  set pivot(v) {
    this._s(":pivot", v);
  }
  /** Table. Serialized as `:table` */
  get table() {
    return this._g(":table");
  }
  set table(v) {
    this._s(":table", v);
  }
  /** Table Style Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class MruColors extends OxmlCompositeElement {
  static _Q = "x:mruColors";
}
class IndexedColors extends OxmlCompositeElement {
  static _Q = "x:indexedColors";
}
class Border extends OxmlCompositeElement {
  static _Q = "x:border";
  static _A = [":diagonalUp", ":diagonalDown", ":outline"];
  /** Diagonal Up. Serialized as `:diagonalUp` */
  get diagonalUp() {
    return this._g(":diagonalUp");
  }
  set diagonalUp(v) {
    this._s(":diagonalUp", v);
  }
  /** Diagonal Down. Serialized as `:diagonalDown` */
  get diagonalDown() {
    return this._g(":diagonalDown");
  }
  set diagonalDown(v) {
    this._s(":diagonalDown", v);
  }
  /** Outline. Serialized as `:outline` */
  get outline() {
    return this._g(":outline");
  }
  set outline(v) {
    this._s(":outline", v);
  }
  /** Returns StartBorder. */
  get startBorder() {
    return this._f(StartBorder);
  }
  /** Returns EndBorder. */
  get endBorder() {
    return this._f(EndBorder);
  }
  /** Left Border. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Right Border. */
  get rightBorder() {
    return this._f(RightBorder);
  }
  /** Top Border. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Bottom Border. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Diagonal. */
  get diagonalBorder() {
    return this._f(DiagonalBorder);
  }
  /** Vertical Inner Border. */
  get verticalBorder() {
    return this._f(VerticalBorder);
  }
  /** Horizontal Inner Borders. */
  get horizontalBorder() {
    return this._f(HorizontalBorder);
  }
}
class Fill extends OxmlCompositeElement {
  static _Q = "x:fill";
  /** Pattern. */
  get patternFill() {
    return this._f(PatternFill);
  }
  /** Gradient. */
  get gradientFill() {
    return this._f(GradientFill);
  }
}
class Font extends OxmlCompositeElement {
  static _Q = "x:font";
  /** Bold. */
  get bold() {
    return this._f(Bold);
  }
  /** Italic. */
  get italic() {
    return this._f(Italic);
  }
  /** Strike Through. */
  get strike() {
    return this._f(Strike);
  }
  /** Condense. */
  get condense() {
    return this._f(Condense);
  }
  /** Extend. */
  get extend() {
    return this._f(Extend);
  }
  /** Outline. */
  get outline() {
    return this._f(Outline);
  }
  /** Shadow. */
  get shadow() {
    return this._f(Shadow);
  }
  /** Underline. */
  get underline() {
    return this._f(Underline);
  }
  /** Text Vertical Alignment. */
  get verticalTextAlignment() {
    return this._f(VerticalTextAlignment);
  }
  /** Font Size. */
  get fontSize() {
    return this._f(FontSize);
  }
  /** Text Color. */
  get color() {
    return this._f(Color);
  }
  /** Font Name. */
  get fontName() {
    return this._f(FontName);
  }
  /** Font Family. */
  get fontFamilyNumbering() {
    return this._f(FontFamilyNumbering);
  }
  /** Character Set. */
  get fontCharSet() {
    return this._f(FontCharSet);
  }
  /** Scheme. */
  get fontScheme() {
    return this._f(FontScheme);
  }
}
class Protection extends OxmlLeafElement {
  static _Q = "x:protection";
  static _A = [":locked", ":hidden"];
  /** Cell Locked. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** Hidden Cell. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
}
class Alignment extends OxmlLeafElement {
  static _Q = "x:alignment";
  static _A = [":horizontal", ":vertical", ":textRotation", ":wrapText", ":indent", ":relativeIndent", ":justifyLastLine", ":shrinkToFit", ":readingOrder", ":mergeCell"];
  /** Horizontal Alignment. Serialized as `:horizontal` */
  get horizontal() {
    return this._g(":horizontal");
  }
  set horizontal(v) {
    this._s(":horizontal", v);
  }
  /** Vertical Alignment. Serialized as `:vertical` */
  get vertical() {
    return this._g(":vertical");
  }
  set vertical(v) {
    this._s(":vertical", v);
  }
  /** Text Rotation. Serialized as `:textRotation` */
  get textRotation() {
    return this._g(":textRotation");
  }
  set textRotation(v) {
    this._s(":textRotation", v);
  }
  /** Wrap Text. Serialized as `:wrapText` */
  get wrapText() {
    return this._g(":wrapText");
  }
  set wrapText(v) {
    this._s(":wrapText", v);
  }
  /** Indent. Serialized as `:indent` */
  get indent() {
    return this._g(":indent");
  }
  set indent(v) {
    this._s(":indent", v);
  }
  /** Relative Indent. Serialized as `:relativeIndent` */
  get relativeIndent() {
    return this._g(":relativeIndent");
  }
  set relativeIndent(v) {
    this._s(":relativeIndent", v);
  }
  /** Justify Last Line. Serialized as `:justifyLastLine` */
  get justifyLastLine() {
    return this._g(":justifyLastLine");
  }
  set justifyLastLine(v) {
    this._s(":justifyLastLine", v);
  }
  /** Shrink To Fit. Serialized as `:shrinkToFit` */
  get shrinkToFit() {
    return this._g(":shrinkToFit");
  }
  set shrinkToFit(v) {
    this._s(":shrinkToFit", v);
  }
  /** Reading Order. Serialized as `:readingOrder` */
  get readingOrder() {
    return this._g(":readingOrder");
  }
  set readingOrder(v) {
    this._s(":readingOrder", v);
  }
  /** mergeCell. Serialized as `:mergeCell` */
  get mergeCell() {
    return this._g(":mergeCell");
  }
  set mergeCell(v) {
    this._s(":mergeCell", v);
  }
}
class NumberingFormat extends OxmlLeafElement {
  static _Q = "x:numFmt";
  static _A = [":numFmtId", ":formatCode"];
  /** Number Format Id. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
  /** Number Format Code. Serialized as `:formatCode` */
  get formatCode() {
    return this._g(":formatCode");
  }
  set formatCode(v) {
    this._s(":formatCode", v);
  }
}
class GradientStop extends OxmlCompositeElement {
  static _Q = "x:stop";
  static _A = [":position"];
  /** Gradient Stop Position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
  /** Color. */
  get color() {
    return this._f(Color);
  }
}
class GradientFill extends OxmlCompositeElement {
  static _Q = "x:gradientFill";
  static _A = [":type", ":degree", ":left", ":right", ":top", ":bottom"];
  /** Gradient Fill Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Linear Gradient Degree. Serialized as `:degree` */
  get degree() {
    return this._g(":degree");
  }
  set degree(v) {
    this._s(":degree", v);
  }
  /** Left Convergence. Serialized as `:left` */
  get left() {
    return this._g(":left");
  }
  set left(v) {
    this._s(":left", v);
  }
  /** Right Convergence. Serialized as `:right` */
  get right() {
    return this._g(":right");
  }
  set right(v) {
    this._s(":right", v);
  }
  /** Top Gradient Convergence. Serialized as `:top` */
  get top() {
    return this._g(":top");
  }
  set top(v) {
    this._s(":top", v);
  }
  /** Bottom Convergence. Serialized as `:bottom` */
  get bottom() {
    return this._g(":bottom");
  }
  set bottom(v) {
    this._s(":bottom", v);
  }
}
class PatternFill extends OxmlCompositeElement {
  static _Q = "x:patternFill";
  static _A = [":patternType"];
  /** Pattern Type. Serialized as `:patternType` */
  get patternType() {
    return this._g(":patternType");
  }
  set patternType(v) {
    this._s(":patternType", v);
  }
  /** Foreground Color. */
  get foregroundColor() {
    return this._f(ForegroundColor);
  }
  /** Background Color. */
  get backgroundColor() {
    return this._f(BackgroundColor);
  }
}
class XmlProperties extends OxmlCompositeElement {
  static _Q = "x:xmlPr";
  static _A = [":mapId", ":xpath", ":xmlDataType"];
  /** XML Map Id. Serialized as `:mapId` */
  get mapId() {
    return this._g(":mapId");
  }
  set mapId(v) {
    this._s(":mapId", v);
  }
  /** XPath. Serialized as `:xpath` */
  get xPath() {
    return this._g(":xpath");
  }
  set xPath(v) {
    this._s(":xpath", v);
  }
  /** XML Data Type. Serialized as `:xmlDataType` */
  get xmlDataType() {
    return this._g(":xmlDataType");
  }
  set xmlDataType(v) {
    this._s(":xmlDataType", v);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class XmlCellProperties extends OxmlCompositeElement {
  static _Q = "x:xmlCellPr";
  static _A = [":id", ":uniqueName"];
  /** Table Field Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Unique Table Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** Column XML Properties. */
  get xmlProperties() {
    return this._f(XmlProperties);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SingleXmlCell extends OxmlCompositeElement {
  static _Q = "x:singleXmlCell";
  static _A = [":id", ":r", ":connectionId"];
  /** Table Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Connection ID. Serialized as `:connectionId` */
  get connectionId() {
    return this._g(":connectionId");
  }
  set connectionId(v) {
    this._s(":connectionId", v);
  }
  /** Cell Properties. */
  get xmlCellProperties() {
    return this._f(XmlCellProperties);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NameIndex extends OxmlLeafElement {
  static _Q = "x:n";
  static _A = [":x", ":s"];
  /** Index Value. Serialized as `:x` */
  get index() {
    return this._g(":x");
  }
  set index(v) {
    this._s(":x", v);
  }
  /** String is a Set. Serialized as `:s` */
  get isASet() {
    return this._g(":s");
  }
  set isASet(v) {
    this._s(":s", v);
  }
}
class MdxKpi extends OxmlLeafElement {
  static _Q = "x:k";
  static _A = [":n", ":np", ":p"];
  /** Member Unique Name Index. Serialized as `:n` */
  get nameIndex() {
    return this._g(":n");
  }
  set nameIndex(v) {
    this._s(":n", v);
  }
  /** KPI Index. Serialized as `:np` */
  get kpiIndex() {
    return this._g(":np");
  }
  set kpiIndex(v) {
    this._s(":np", v);
  }
  /** KPI Property. Serialized as `:p` */
  get kpiProperty() {
    return this._g(":p");
  }
  set kpiProperty(v) {
    this._s(":p", v);
  }
}
class MdxMemberProp extends OxmlLeafElement {
  static _Q = "x:p";
  static _A = [":n", ":np"];
  /** Member Unique Name Index. Serialized as `:n` */
  get nameIndex() {
    return this._g(":n");
  }
  set nameIndex(v) {
    this._s(":n", v);
  }
  /** Property Name Index. Serialized as `:np` */
  get propertyNameIndex() {
    return this._g(":np");
  }
  set propertyNameIndex(v) {
    this._s(":np", v);
  }
}
class MdxSet extends OxmlCompositeElement {
  static _Q = "x:ms";
  static _A = [":ns", ":c", ":o"];
  /** Set Definition Index. Serialized as `:ns` */
  get setDefinitionIndex() {
    return this._g(":ns");
  }
  set setDefinitionIndex(v) {
    this._s(":ns", v);
  }
  /** Sort By Member Index Count. Serialized as `:c` */
  get memberIndexCount() {
    return this._g(":c");
  }
  set memberIndexCount(v) {
    this._s(":c", v);
  }
  /** Set Sort Order. Serialized as `:o` */
  get sortingOrder() {
    return this._g(":o");
  }
  set sortingOrder(v) {
    this._s(":o", v);
  }
}
class MdxTuple extends OxmlCompositeElement {
  static _Q = "x:t";
  static _A = [":c", ":ct", ":si", ":fi", ":bc", ":fc", ":i", ":u", ":st", ":b"];
  /** Member Index Count. Serialized as `:c` */
  get memberIndexCount() {
    return this._g(":c");
  }
  set memberIndexCount(v) {
    this._s(":c", v);
  }
  /** Server Formatting Culture Currency. Serialized as `:ct` */
  get cultureCurrency() {
    return this._g(":ct");
  }
  set cultureCurrency(v) {
    this._s(":ct", v);
  }
  /** Server Formatting String Index. Serialized as `:si` */
  get formattingStringIndex() {
    return this._g(":si");
  }
  set formattingStringIndex(v) {
    this._s(":si", v);
  }
  /** Server Formatting Built-In Number Format Index. Serialized as `:fi` */
  get formatIndex() {
    return this._g(":fi");
  }
  set formatIndex(v) {
    this._s(":fi", v);
  }
  /** Server Formatting Background Color. Serialized as `:bc` */
  get backgroundColor() {
    return this._g(":bc");
  }
  set backgroundColor(v) {
    this._s(":bc", v);
  }
  /** Server Formatting Foreground Color. Serialized as `:fc` */
  get foregroundColor() {
    return this._g(":fc");
  }
  set foregroundColor(v) {
    this._s(":fc", v);
  }
  /** Server Formatting Italic Font. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** Server Formatting Underline Font. Serialized as `:u` */
  get underline() {
    return this._g(":u");
  }
  set underline(v) {
    this._s(":u", v);
  }
  /** Server Formatting Strikethrough Font. Serialized as `:st` */
  get strikethrough() {
    return this._g(":st");
  }
  set strikethrough(v) {
    this._s(":st", v);
  }
  /** Server Formatting Bold Font. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
}
class Mdx extends OxmlCompositeElement {
  static _Q = "x:mdx";
  static _A = [":n", ":f"];
  /** Connection Name Index. Serialized as `:n` */
  get nameIndex() {
    return this._g(":n");
  }
  set nameIndex(v) {
    this._s(":n", v);
  }
  /** Cube Function Tag. Serialized as `:f` */
  get cubeFunction() {
    return this._g(":f");
  }
  set cubeFunction(v) {
    this._s(":f", v);
  }
  /** Tuple MDX Metadata. */
  get mdxTuple() {
    return this._f(MdxTuple);
  }
  /** Set MDX Metadata. */
  get mdxSet() {
    return this._f(MdxSet);
  }
  /** Member Property MDX Metadata. */
  get mdxMemberProp() {
    return this._f(MdxMemberProp);
  }
  /** KPI MDX Metadata. */
  get mdxKpi() {
    return this._f(MdxKpi);
  }
}
class FutureMetadataBlock extends OxmlCompositeElement {
  static _Q = "x:bk";
  /** Future Feature Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class MetadataRecord extends OxmlLeafElement {
  static _Q = "x:rc";
  static _A = [":t", ":v"];
  /** Metadata Record Type Index. Serialized as `:t` */
  get typeIndex() {
    return this._g(":t");
  }
  set typeIndex(v) {
    this._s(":t", v);
  }
  /** Metadata Record Value Index. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
}
class MetadataBlock extends OxmlCompositeElement {
  static _Q = "x:bk";
}
class MetadataType extends OxmlLeafElement {
  static _Q = "x:metadataType";
  static _A = [":name", ":minSupportedVersion", ":ghostRow", ":ghostCol", ":edit", ":delete", ":copy", ":pasteAll", ":pasteFormulas", ":pasteValues", ":pasteFormats", ":pasteComments", ":pasteDataValidation", ":pasteBorders", ":pasteColWidths", ":pasteNumberFormats", ":merge", ":splitFirst", ":splitAll", ":rowColShift", ":clearAll", ":clearFormats", ":clearContents", ":clearComments", ":assign", ":coerce", ":adjust", ":cellMeta"];
  /** Metadata Type Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Minimum Supported Version. Serialized as `:minSupportedVersion` */
  get minSupportedVersion() {
    return this._g(":minSupportedVersion");
  }
  set minSupportedVersion(v) {
    this._s(":minSupportedVersion", v);
  }
  /** Metadata Ghost Row. Serialized as `:ghostRow` */
  get ghostRow() {
    return this._g(":ghostRow");
  }
  set ghostRow(v) {
    this._s(":ghostRow", v);
  }
  /** Metadata Ghost Column. Serialized as `:ghostCol` */
  get ghostColumn() {
    return this._g(":ghostCol");
  }
  set ghostColumn(v) {
    this._s(":ghostCol", v);
  }
  /** Metadata Edit. Serialized as `:edit` */
  get edit() {
    return this._g(":edit");
  }
  set edit(v) {
    this._s(":edit", v);
  }
  /** Metadata Cell Value Delete. Serialized as `:delete` */
  get delete() {
    return this._g(":delete");
  }
  set delete(v) {
    this._s(":delete", v);
  }
  /** Metadata Copy. Serialized as `:copy` */
  get copy() {
    return this._g(":copy");
  }
  set copy(v) {
    this._s(":copy", v);
  }
  /** Metadata Paste All. Serialized as `:pasteAll` */
  get pasteAll() {
    return this._g(":pasteAll");
  }
  set pasteAll(v) {
    this._s(":pasteAll", v);
  }
  /** Metadata Paste Formulas. Serialized as `:pasteFormulas` */
  get pasteFormulas() {
    return this._g(":pasteFormulas");
  }
  set pasteFormulas(v) {
    this._s(":pasteFormulas", v);
  }
  /** Metadata Paste Special Values. Serialized as `:pasteValues` */
  get pasteValues() {
    return this._g(":pasteValues");
  }
  set pasteValues(v) {
    this._s(":pasteValues", v);
  }
  /** Metadata Paste Formats. Serialized as `:pasteFormats` */
  get pasteFormats() {
    return this._g(":pasteFormats");
  }
  set pasteFormats(v) {
    this._s(":pasteFormats", v);
  }
  /** Metadata Paste Comments. Serialized as `:pasteComments` */
  get pasteComments() {
    return this._g(":pasteComments");
  }
  set pasteComments(v) {
    this._s(":pasteComments", v);
  }
  /** Metadata Paste Data Validation. Serialized as `:pasteDataValidation` */
  get pasteDataValidation() {
    return this._g(":pasteDataValidation");
  }
  set pasteDataValidation(v) {
    this._s(":pasteDataValidation", v);
  }
  /** Metadata Paste Borders. Serialized as `:pasteBorders` */
  get pasteBorders() {
    return this._g(":pasteBorders");
  }
  set pasteBorders(v) {
    this._s(":pasteBorders", v);
  }
  /** Metadata Paste Column Widths. Serialized as `:pasteColWidths` */
  get pasteColWidths() {
    return this._g(":pasteColWidths");
  }
  set pasteColWidths(v) {
    this._s(":pasteColWidths", v);
  }
  /** Metadata Paste Number Formats. Serialized as `:pasteNumberFormats` */
  get pasteNumberFormats() {
    return this._g(":pasteNumberFormats");
  }
  set pasteNumberFormats(v) {
    this._s(":pasteNumberFormats", v);
  }
  /** Metadata Merge. Serialized as `:merge` */
  get merge() {
    return this._g(":merge");
  }
  set merge(v) {
    this._s(":merge", v);
  }
  /** Meatadata Split First. Serialized as `:splitFirst` */
  get splitFirst() {
    return this._g(":splitFirst");
  }
  set splitFirst(v) {
    this._s(":splitFirst", v);
  }
  /** Metadata Split All. Serialized as `:splitAll` */
  get splitAll() {
    return this._g(":splitAll");
  }
  set splitAll(v) {
    this._s(":splitAll", v);
  }
  /** Metadata Insert Delete. Serialized as `:rowColShift` */
  get rowColumnShift() {
    return this._g(":rowColShift");
  }
  set rowColumnShift(v) {
    this._s(":rowColShift", v);
  }
  /** Metadata Clear All. Serialized as `:clearAll` */
  get clearAll() {
    return this._g(":clearAll");
  }
  set clearAll(v) {
    this._s(":clearAll", v);
  }
  /** Metadata Clear Formats. Serialized as `:clearFormats` */
  get clearFormats() {
    return this._g(":clearFormats");
  }
  set clearFormats(v) {
    this._s(":clearFormats", v);
  }
  /** Metadata Clear Contents. Serialized as `:clearContents` */
  get clearContents() {
    return this._g(":clearContents");
  }
  set clearContents(v) {
    this._s(":clearContents", v);
  }
  /** Metadata Clear Comments. Serialized as `:clearComments` */
  get clearComments() {
    return this._g(":clearComments");
  }
  set clearComments(v) {
    this._s(":clearComments", v);
  }
  /** Metadata Formula Assignment. Serialized as `:assign` */
  get assign() {
    return this._g(":assign");
  }
  set assign(v) {
    this._s(":assign", v);
  }
  /** Metadata Coercion. Serialized as `:coerce` */
  get coerce() {
    return this._g(":coerce");
  }
  set coerce(v) {
    this._s(":coerce", v);
  }
  /** Adjust Metadata. Serialized as `:adjust` */
  get adjust() {
    return this._g(":adjust");
  }
  set adjust(v) {
    this._s(":adjust", v);
  }
  /** Cell Metadata. Serialized as `:cellMeta` */
  get cellMeta() {
    return this._g(":cellMeta");
  }
  set cellMeta(v) {
    this._s(":cellMeta", v);
  }
}
class MetadataBlocksType extends OxmlCompositeElement {
  static _A = [":count"];
  /** Metadata Block Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ValueMetadata extends MetadataBlocksType {
  static _Q = "x:valueMetadata";
}
class CellMetadata extends MetadataBlocksType {
  static _Q = "x:cellMetadata";
}
class FutureMetadata extends OxmlCompositeElement {
  static _Q = "x:futureMetadata";
  static _A = [":name", ":count"];
  /** Metadata Type Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Future Metadata Block Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class MdxMetadata extends OxmlCompositeElement {
  static _Q = "x:mdxMetadata";
  static _A = [":count"];
  /** MDX Metadata Record Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class MetadataStrings extends OxmlCompositeElement {
  static _Q = "x:metadataStrings";
  static _A = [":count"];
  /** MDX Metadata String Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class MetadataTypes extends OxmlCompositeElement {
  static _Q = "x:metadataTypes";
  static _A = [":count"];
  /** Metadata Type Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class OleObject extends OxmlCompositeElement {
  static _Q = "x:oleObject";
  static _A = [":progId", ":dvAspect", ":link", ":oleUpdate", ":autoLoad", ":shapeId", "r:id"];
  /** OLE ProgId. Serialized as `:progId` */
  get progId() {
    return this._g(":progId");
  }
  set progId(v) {
    this._s(":progId", v);
  }
  /** Data or View Aspect. Serialized as `:dvAspect` */
  get dataOrViewAspect() {
    return this._g(":dvAspect");
  }
  set dataOrViewAspect(v) {
    this._s(":dvAspect", v);
  }
  /** OLE Link Moniker. Serialized as `:link` */
  get link() {
    return this._g(":link");
  }
  set link(v) {
    this._s(":link", v);
  }
  /** OLE Update. Serialized as `:oleUpdate` */
  get oleUpdate() {
    return this._g(":oleUpdate");
  }
  set oleUpdate(v) {
    this._s(":oleUpdate", v);
  }
  /** Auto Load. Serialized as `:autoLoad` */
  get autoLoad() {
    return this._g(":autoLoad");
  }
  set autoLoad(v) {
    this._s(":autoLoad", v);
  }
  /** Shape Id. Serialized as `:shapeId` */
  get shapeId() {
    return this._g(":shapeId");
  }
  set shapeId(v) {
    this._s(":shapeId", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns EmbeddedObjectProperties. */
  get embeddedObjectProperties() {
    return this._f(EmbeddedObjectProperties);
  }
}
class CustomSheetView extends OxmlCompositeElement {
  static _Q = "x:customSheetView";
  static _A = [":guid", ":scale", ":colorId", ":showPageBreaks", ":showFormulas", ":showGridLines", ":showRowCol", ":outlineSymbols", ":zeroValues", ":fitToPage", ":printArea", ":filter", ":showAutoFilter", ":hiddenRows", ":hiddenColumns", ":state", ":filterUnique", ":view", ":showRuler", ":topLeftCell"];
  /** GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** Print Scale. Serialized as `:scale` */
  get scale() {
    return this._g(":scale");
  }
  set scale(v) {
    this._s(":scale", v);
  }
  /** Color Id. Serialized as `:colorId` */
  get colorId() {
    return this._g(":colorId");
  }
  set colorId(v) {
    this._s(":colorId", v);
  }
  /** Show Page Breaks. Serialized as `:showPageBreaks` */
  get showPageBreaks() {
    return this._g(":showPageBreaks");
  }
  set showPageBreaks(v) {
    this._s(":showPageBreaks", v);
  }
  /** Show Formulas. Serialized as `:showFormulas` */
  get showFormulas() {
    return this._g(":showFormulas");
  }
  set showFormulas(v) {
    this._s(":showFormulas", v);
  }
  /** Show Grid Lines. Serialized as `:showGridLines` */
  get showGridLines() {
    return this._g(":showGridLines");
  }
  set showGridLines(v) {
    this._s(":showGridLines", v);
  }
  /** Show Headers. Serialized as `:showRowCol` */
  get showRowColumn() {
    return this._g(":showRowCol");
  }
  set showRowColumn(v) {
    this._s(":showRowCol", v);
  }
  /** Show Outline Symbols. Serialized as `:outlineSymbols` */
  get outlineSymbols() {
    return this._g(":outlineSymbols");
  }
  set outlineSymbols(v) {
    this._s(":outlineSymbols", v);
  }
  /** Show Zero Values. Serialized as `:zeroValues` */
  get zeroValues() {
    return this._g(":zeroValues");
  }
  set zeroValues(v) {
    this._s(":zeroValues", v);
  }
  /** Fit To Page. Serialized as `:fitToPage` */
  get fitToPage() {
    return this._g(":fitToPage");
  }
  set fitToPage(v) {
    this._s(":fitToPage", v);
  }
  /** Print Area Defined. Serialized as `:printArea` */
  get printArea() {
    return this._g(":printArea");
  }
  set printArea(v) {
    this._s(":printArea", v);
  }
  /** Filtered List. Serialized as `:filter` */
  get filter() {
    return this._g(":filter");
  }
  set filter(v) {
    this._s(":filter", v);
  }
  /** Show AutoFitler Drop Down Controls. Serialized as `:showAutoFilter` */
  get showAutoFilter() {
    return this._g(":showAutoFilter");
  }
  set showAutoFilter(v) {
    this._s(":showAutoFilter", v);
  }
  /** Hidden Rows. Serialized as `:hiddenRows` */
  get hiddenRows() {
    return this._g(":hiddenRows");
  }
  set hiddenRows(v) {
    this._s(":hiddenRows", v);
  }
  /** Hidden Columns. Serialized as `:hiddenColumns` */
  get hiddenColumns() {
    return this._g(":hiddenColumns");
  }
  set hiddenColumns(v) {
    this._s(":hiddenColumns", v);
  }
  /** Visible State. Serialized as `:state` */
  get state() {
    return this._g(":state");
  }
  set state(v) {
    this._s(":state", v);
  }
  /** Filter. Serialized as `:filterUnique` */
  get filterUnique() {
    return this._g(":filterUnique");
  }
  set filterUnique(v) {
    this._s(":filterUnique", v);
  }
  /** View Type. Serialized as `:view` */
  get view() {
    return this._g(":view");
  }
  set view(v) {
    this._s(":view", v);
  }
  /** Show Ruler. Serialized as `:showRuler` */
  get showRuler() {
    return this._g(":showRuler");
  }
  set showRuler(v) {
    this._s(":showRuler", v);
  }
  /** Top Left Visible Cell. Serialized as `:topLeftCell` */
  get topLeftCell() {
    return this._g(":topLeftCell");
  }
  set topLeftCell(v) {
    this._s(":topLeftCell", v);
  }
  /** Pane Split Information. */
  get pane() {
    return this._f(Pane);
  }
  /** Selection. */
  get selection() {
    return this._f(Selection);
  }
  /** Horizontal Page Breaks. */
  get rowBreaks() {
    return this._f(RowBreaks);
  }
  /** Vertical Page Breaks. */
  get columnBreaks() {
    return this._f(ColumnBreaks);
  }
  /** Page Margins. */
  get pageMargins() {
    return this._f(PageMargins);
  }
  /** Print Options. */
  get printOptions() {
    return this._f(PrintOptions);
  }
  /** Page Setup Settings. */
  get pageSetup() {
    return this._f(PageSetup);
  }
  /** Header Footer Settings. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** AutoFilter Settings. */
  get autoFilter() {
    return this._f(AutoFilter);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SheetView extends OxmlCompositeElement {
  static _Q = "x:sheetView";
  static _A = [":windowProtection", ":showFormulas", ":showGridLines", ":showRowColHeaders", ":showZeros", ":rightToLeft", ":tabSelected", ":showRuler", ":showOutlineSymbols", ":defaultGridColor", ":showWhiteSpace", ":view", ":topLeftCell", ":colorId", ":zoomScale", ":zoomScaleNormal", ":zoomScaleSheetLayoutView", ":zoomScalePageLayoutView", ":workbookViewId"];
  /** Window Protection. Serialized as `:windowProtection` */
  get windowProtection() {
    return this._g(":windowProtection");
  }
  set windowProtection(v) {
    this._s(":windowProtection", v);
  }
  /** Show Formulas. Serialized as `:showFormulas` */
  get showFormulas() {
    return this._g(":showFormulas");
  }
  set showFormulas(v) {
    this._s(":showFormulas", v);
  }
  /** Show Grid Lines. Serialized as `:showGridLines` */
  get showGridLines() {
    return this._g(":showGridLines");
  }
  set showGridLines(v) {
    this._s(":showGridLines", v);
  }
  /** Show Headers. Serialized as `:showRowColHeaders` */
  get showRowColHeaders() {
    return this._g(":showRowColHeaders");
  }
  set showRowColHeaders(v) {
    this._s(":showRowColHeaders", v);
  }
  /** Show Zero Values. Serialized as `:showZeros` */
  get showZeros() {
    return this._g(":showZeros");
  }
  set showZeros(v) {
    this._s(":showZeros", v);
  }
  /** Right To Left. Serialized as `:rightToLeft` */
  get rightToLeft() {
    return this._g(":rightToLeft");
  }
  set rightToLeft(v) {
    this._s(":rightToLeft", v);
  }
  /** Sheet Tab Selected. Serialized as `:tabSelected` */
  get tabSelected() {
    return this._g(":tabSelected");
  }
  set tabSelected(v) {
    this._s(":tabSelected", v);
  }
  /** Show Ruler. Serialized as `:showRuler` */
  get showRuler() {
    return this._g(":showRuler");
  }
  set showRuler(v) {
    this._s(":showRuler", v);
  }
  /** Show Outline Symbols. Serialized as `:showOutlineSymbols` */
  get showOutlineSymbols() {
    return this._g(":showOutlineSymbols");
  }
  set showOutlineSymbols(v) {
    this._s(":showOutlineSymbols", v);
  }
  /** Default Grid Color. Serialized as `:defaultGridColor` */
  get defaultGridColor() {
    return this._g(":defaultGridColor");
  }
  set defaultGridColor(v) {
    this._s(":defaultGridColor", v);
  }
  /** Show White Space. Serialized as `:showWhiteSpace` */
  get showWhiteSpace() {
    return this._g(":showWhiteSpace");
  }
  set showWhiteSpace(v) {
    this._s(":showWhiteSpace", v);
  }
  /** View Type. Serialized as `:view` */
  get view() {
    return this._g(":view");
  }
  set view(v) {
    this._s(":view", v);
  }
  /** Top Left Visible Cell. Serialized as `:topLeftCell` */
  get topLeftCell() {
    return this._g(":topLeftCell");
  }
  set topLeftCell(v) {
    this._s(":topLeftCell", v);
  }
  /** Color Id. Serialized as `:colorId` */
  get colorId() {
    return this._g(":colorId");
  }
  set colorId(v) {
    this._s(":colorId", v);
  }
  /** Zoom Scale. Serialized as `:zoomScale` */
  get zoomScale() {
    return this._g(":zoomScale");
  }
  set zoomScale(v) {
    this._s(":zoomScale", v);
  }
  /** Zoom Scale Normal View. Serialized as `:zoomScaleNormal` */
  get zoomScaleNormal() {
    return this._g(":zoomScaleNormal");
  }
  set zoomScaleNormal(v) {
    this._s(":zoomScaleNormal", v);
  }
  /** Zoom Scale Page Break Preview. Serialized as `:zoomScaleSheetLayoutView` */
  get zoomScaleSheetLayoutView() {
    return this._g(":zoomScaleSheetLayoutView");
  }
  set zoomScaleSheetLayoutView(v) {
    this._s(":zoomScaleSheetLayoutView", v);
  }
  /** Zoom Scale Page Layout View. Serialized as `:zoomScalePageLayoutView` */
  get zoomScalePageLayoutView() {
    return this._g(":zoomScalePageLayoutView");
  }
  set zoomScalePageLayoutView(v) {
    this._s(":zoomScalePageLayoutView", v);
  }
  /** Workbook View Index. Serialized as `:workbookViewId` */
  get workbookViewId() {
    return this._g(":workbookViewId");
  }
  set workbookViewId(v) {
    this._s(":workbookViewId", v);
  }
  /** View Pane. */
  get pane() {
    return this._f(Pane);
  }
}
class DataValidation extends OxmlCompositeElement {
  static _Q = "x:dataValidation";
  static _A = [":type", ":errorStyle", ":imeMode", ":operator", ":allowBlank", ":showDropDown", ":showInputMessage", ":showErrorMessage", ":errorTitle", ":error", ":promptTitle", ":prompt", ":sqref"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** errorStyle. Serialized as `:errorStyle` */
  get errorStyle() {
    return this._g(":errorStyle");
  }
  set errorStyle(v) {
    this._s(":errorStyle", v);
  }
  /** imeMode. Serialized as `:imeMode` */
  get imeMode() {
    return this._g(":imeMode");
  }
  set imeMode(v) {
    this._s(":imeMode", v);
  }
  /** operator. Serialized as `:operator` */
  get operator() {
    return this._g(":operator");
  }
  set operator(v) {
    this._s(":operator", v);
  }
  /** allowBlank. Serialized as `:allowBlank` */
  get allowBlank() {
    return this._g(":allowBlank");
  }
  set allowBlank(v) {
    this._s(":allowBlank", v);
  }
  /** showDropDown. Serialized as `:showDropDown` */
  get showDropDown() {
    return this._g(":showDropDown");
  }
  set showDropDown(v) {
    this._s(":showDropDown", v);
  }
  /** showInputMessage. Serialized as `:showInputMessage` */
  get showInputMessage() {
    return this._g(":showInputMessage");
  }
  set showInputMessage(v) {
    this._s(":showInputMessage", v);
  }
  /** showErrorMessage. Serialized as `:showErrorMessage` */
  get showErrorMessage() {
    return this._g(":showErrorMessage");
  }
  set showErrorMessage(v) {
    this._s(":showErrorMessage", v);
  }
  /** errorTitle. Serialized as `:errorTitle` */
  get errorTitle() {
    return this._g(":errorTitle");
  }
  set errorTitle(v) {
    this._s(":errorTitle", v);
  }
  /** error. Serialized as `:error` */
  get error() {
    return this._g(":error");
  }
  set error(v) {
    this._s(":error", v);
  }
  /** promptTitle. Serialized as `:promptTitle` */
  get promptTitle() {
    return this._g(":promptTitle");
  }
  set promptTitle(v) {
    this._s(":promptTitle", v);
  }
  /** prompt. Serialized as `:prompt` */
  get prompt() {
    return this._g(":prompt");
  }
  set prompt(v) {
    this._s(":prompt", v);
  }
  /** sqref. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
  /** Returns X12acList. */
  get list() {
    return this._f(X12acList);
  }
  /** Returns Formula1. */
  get formula1() {
    return this._f(Formula1);
  }
  /** Returns Formula2. */
  get formula2() {
    return this._f(Formula2);
  }
}
class MergeCell extends OxmlLeafElement {
  static _Q = "x:mergeCell";
  static _A = [":ref"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class IgnoredError extends OxmlLeafElement {
  static _Q = "x:ignoredError";
  static _A = [":sqref", ":evalError", ":twoDigitTextYear", ":numberStoredAsText", ":formula", ":formulaRange", ":unlockedFormula", ":emptyCellReference", ":listDataValidation", ":calculatedColumn"];
  /** Sequence of References. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
  /** Evaluation Error. Serialized as `:evalError` */
  get evalError() {
    return this._g(":evalError");
  }
  set evalError(v) {
    this._s(":evalError", v);
  }
  /** Two Digit Text Year. Serialized as `:twoDigitTextYear` */
  get twoDigitTextYear() {
    return this._g(":twoDigitTextYear");
  }
  set twoDigitTextYear(v) {
    this._s(":twoDigitTextYear", v);
  }
  /** Number Stored As Text. Serialized as `:numberStoredAsText` */
  get numberStoredAsText() {
    return this._g(":numberStoredAsText");
  }
  set numberStoredAsText(v) {
    this._s(":numberStoredAsText", v);
  }
  /** Formula. Serialized as `:formula` */
  get formula() {
    return this._g(":formula");
  }
  set formula(v) {
    this._s(":formula", v);
  }
  /** Formula Range. Serialized as `:formulaRange` */
  get formulaRange() {
    return this._g(":formulaRange");
  }
  set formulaRange(v) {
    this._s(":formulaRange", v);
  }
  /** Unlocked Formula. Serialized as `:unlockedFormula` */
  get unlockedFormula() {
    return this._g(":unlockedFormula");
  }
  set unlockedFormula(v) {
    this._s(":unlockedFormula", v);
  }
  /** Empty Cell Reference. Serialized as `:emptyCellReference` */
  get emptyCellReference() {
    return this._g(":emptyCellReference");
  }
  set emptyCellReference(v) {
    this._s(":emptyCellReference", v);
  }
  /** List Data Validation. Serialized as `:listDataValidation` */
  get listDataValidation() {
    return this._g(":listDataValidation");
  }
  set listDataValidation(v) {
    this._s(":listDataValidation", v);
  }
  /** Calculated Column. Serialized as `:calculatedColumn` */
  get calculatedColumn() {
    return this._g(":calculatedColumn");
  }
  set calculatedColumn(v) {
    this._s(":calculatedColumn", v);
  }
}
class Control extends OxmlCompositeElement {
  static _Q = "x:control";
  static _A = [":shapeId", "r:id", ":name"];
  /** Shape Id. Serialized as `:shapeId` */
  get shapeId() {
    return this._g(":shapeId");
  }
  set shapeId(v) {
    this._s(":shapeId", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Control Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class InputCells extends OxmlLeafElement {
  static _Q = "x:inputCells";
  static _A = [":r", ":deleted", ":undone", ":val", ":numFmtId"];
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Deleted. Serialized as `:deleted` */
  get deleted() {
    return this._g(":deleted");
  }
  set deleted(v) {
    this._s(":deleted", v);
  }
  /** Undone. Serialized as `:undone` */
  get undone() {
    return this._g(":undone");
  }
  set undone(v) {
    this._s(":undone", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Number Format Id. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
}
class CustomChartsheetView extends OxmlCompositeElement {
  static _Q = "x:customSheetView";
  static _A = [":guid", ":scale", ":state", ":zoomToFit"];
  /** GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** Print Scale. Serialized as `:scale` */
  get scale() {
    return this._g(":scale");
  }
  set scale(v) {
    this._s(":scale", v);
  }
  /** Visible State. Serialized as `:state` */
  get state() {
    return this._g(":state");
  }
  set state(v) {
    this._s(":state", v);
  }
  /** Zoom To Fit. Serialized as `:zoomToFit` */
  get zoomToFit() {
    return this._g(":zoomToFit");
  }
  set zoomToFit(v) {
    this._s(":zoomToFit", v);
  }
  /** Returns PageMargins. */
  get pageMargins() {
    return this._f(PageMargins);
  }
  /** Chart Sheet Page Setup. */
  get chartSheetPageSetup() {
    return this._f(ChartSheetPageSetup);
  }
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
}
class ChartSheetView extends OxmlCompositeElement {
  static _Q = "x:sheetView";
  static _A = [":tabSelected", ":zoomScale", ":workbookViewId", ":zoomToFit"];
  /** Sheet Tab Selected. Serialized as `:tabSelected` */
  get tabSelected() {
    return this._g(":tabSelected");
  }
  set tabSelected(v) {
    this._s(":tabSelected", v);
  }
  /** Window Zoom Scale. Serialized as `:zoomScale` */
  get zoomScale() {
    return this._g(":zoomScale");
  }
  set zoomScale(v) {
    this._s(":zoomScale", v);
  }
  /** Workbook View Id. Serialized as `:workbookViewId` */
  get workbookViewId() {
    return this._g(":workbookViewId");
  }
  set workbookViewId(v) {
    this._s(":workbookViewId", v);
  }
  /** Zoom To Fit. Serialized as `:zoomToFit` */
  get zoomToFit() {
    return this._g(":zoomToFit");
  }
  set zoomToFit(v) {
    this._s(":zoomToFit", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TablePart extends OxmlLeafElement {
  static _Q = "x:tablePart";
  static _A = ["r:id"];
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class WebPublishItem extends OxmlLeafElement {
  static _Q = "x:webPublishItem";
  static _A = [":id", ":divId", ":sourceType", ":sourceRef", ":sourceObject", ":destinationFile", ":title", ":autoRepublish"];
  /** Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Destination Bookmark. Serialized as `:divId` */
  get divId() {
    return this._g(":divId");
  }
  set divId(v) {
    this._s(":divId", v);
  }
  /** Web Source Type. Serialized as `:sourceType` */
  get sourceType() {
    return this._g(":sourceType");
  }
  set sourceType(v) {
    this._s(":sourceType", v);
  }
  /** Source Id. Serialized as `:sourceRef` */
  get sourceRef() {
    return this._g(":sourceRef");
  }
  set sourceRef(v) {
    this._s(":sourceRef", v);
  }
  /** Source Object Name. Serialized as `:sourceObject` */
  get sourceObject() {
    return this._g(":sourceObject");
  }
  set sourceObject(v) {
    this._s(":sourceObject", v);
  }
  /** Destination File Name. Serialized as `:destinationFile` */
  get destinationFile() {
    return this._g(":destinationFile");
  }
  set destinationFile(v) {
    this._s(":destinationFile", v);
  }
  /** Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Automatically Publish. Serialized as `:autoRepublish` */
  get autoRepublish() {
    return this._g(":autoRepublish");
  }
  set autoRepublish(v) {
    this._s(":autoRepublish", v);
  }
}
class CustomProperty extends OxmlLeafElement {
  static _Q = "x:customPr";
  static _A = [":name", "r:id"];
  /** Custom Property Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class ChartSheetPageSetup extends OxmlLeafElement {
  static _Q = "x:pageSetup";
  static _A = [":paperSize", ":firstPageNumber", ":orientation", ":usePrinterDefaults", ":blackAndWhite", ":draft", ":useFirstPageNumber", ":horizontalDpi", ":verticalDpi", ":copies", "r:id"];
  /** Paper Size. Serialized as `:paperSize` */
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
  /** Use Printer Defaults. Serialized as `:usePrinterDefaults` */
  get usePrinterDefaults() {
    return this._g(":usePrinterDefaults");
  }
  set usePrinterDefaults(v) {
    this._s(":usePrinterDefaults", v);
  }
  /** Black And White. Serialized as `:blackAndWhite` */
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
  /** Number Of Copies. Serialized as `:copies` */
  get copies() {
    return this._g(":copies");
  }
  set copies(v) {
    this._s(":copies", v);
  }
  /** Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class CellWatch extends OxmlLeafElement {
  static _Q = "x:cellWatch";
  static _A = [":r"];
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
}
class ProtectedRange extends OxmlLeafElement {
  static _Q = "x:protectedRange";
  static _A = [":password", ":algorithmName", ":hashValue", ":saltValue", ":spinCount", ":sqref", ":name", ":securityDescriptor"];
  /** password. Serialized as `:password` */
  get password() {
    return this._g(":password");
  }
  set password(v) {
    this._s(":password", v);
  }
  /** algorithmName. Serialized as `:algorithmName` */
  get algorithmName() {
    return this._g(":algorithmName");
  }
  set algorithmName(v) {
    this._s(":algorithmName", v);
  }
  /** hashValue. Serialized as `:hashValue` */
  get hashValue() {
    return this._g(":hashValue");
  }
  set hashValue(v) {
    this._s(":hashValue", v);
  }
  /** saltValue. Serialized as `:saltValue` */
  get saltValue() {
    return this._g(":saltValue");
  }
  set saltValue(v) {
    this._s(":saltValue", v);
  }
  /** spinCount. Serialized as `:spinCount` */
  get spinCount() {
    return this._g(":spinCount");
  }
  set spinCount(v) {
    this._s(":spinCount", v);
  }
  /** sqref. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** securityDescriptor. Serialized as `:securityDescriptor` */
  get securityDescriptor() {
    return this._g(":securityDescriptor");
  }
  set securityDescriptor(v) {
    this._s(":securityDescriptor", v);
  }
}
class Scenario extends OxmlCompositeElement {
  static _Q = "x:scenario";
  static _A = [":name", ":locked", ":hidden", ":count", ":user", ":comment"];
  /** Scenario Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Scenario Locked. Serialized as `:locked` */
  get locked() {
    return this._g(":locked");
  }
  set locked(v) {
    this._s(":locked", v);
  }
  /** Hidden Scenario. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Changing Cell Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** User Name. Serialized as `:user` */
  get user() {
    return this._g(":user");
  }
  set user(v) {
    this._s(":user", v);
  }
  /** Scenario Comment. Serialized as `:comment` */
  get comment() {
    return this._g(":comment");
  }
  set comment(v) {
    this._s(":comment", v);
  }
}
class ConditionalFormatValueObject extends OxmlCompositeElement {
  static _Q = "x:cfvo";
  static _A = [":type", ":val", ":gte"];
  /** Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Greater Than Or Equal. Serialized as `:gte` */
  get greaterThanOrEqual() {
    return this._g(":gte");
  }
  set greaterThanOrEqual(v) {
    this._s(":gte", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Hyperlink extends OxmlLeafElement {
  static _Q = "x:hyperlink";
  static _A = [":ref", "r:id", ":location", ":tooltip", ":display"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Location. Serialized as `:location` */
  get location() {
    return this._g(":location");
  }
  set location(v) {
    this._s(":location", v);
  }
  /** Tool Tip. Serialized as `:tooltip` */
  get tooltip() {
    return this._g(":tooltip");
  }
  set tooltip(v) {
    this._s(":tooltip", v);
  }
  /** Display String. Serialized as `:display` */
  get display() {
    return this._g(":display");
  }
  set display(v) {
    this._s(":display", v);
  }
}
class ConditionalFormattingRule extends OxmlCompositeElement {
  static _Q = "x:cfRule";
  static _A = [":type", ":dxfId", ":priority", ":stopIfTrue", ":aboveAverage", ":percent", ":bottom", ":operator", ":text", ":timePeriod", ":rank", ":stdDev", ":equalAverage"];
  /** Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Differential Formatting Id. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
  /** Priority. Serialized as `:priority` */
  get priority() {
    return this._g(":priority");
  }
  set priority(v) {
    this._s(":priority", v);
  }
  /** Stop If True. Serialized as `:stopIfTrue` */
  get stopIfTrue() {
    return this._g(":stopIfTrue");
  }
  set stopIfTrue(v) {
    this._s(":stopIfTrue", v);
  }
  /** Above Or Below Average. Serialized as `:aboveAverage` */
  get aboveAverage() {
    return this._g(":aboveAverage");
  }
  set aboveAverage(v) {
    this._s(":aboveAverage", v);
  }
  /** Top 10 Percent. Serialized as `:percent` */
  get percent() {
    return this._g(":percent");
  }
  set percent(v) {
    this._s(":percent", v);
  }
  /** Bottom N. Serialized as `:bottom` */
  get bottom() {
    return this._g(":bottom");
  }
  set bottom(v) {
    this._s(":bottom", v);
  }
  /** Operator. Serialized as `:operator` */
  get operator() {
    return this._g(":operator");
  }
  set operator(v) {
    this._s(":operator", v);
  }
  /** Text. Serialized as `:text` */
  get text() {
    return this._g(":text");
  }
  set text(v) {
    this._s(":text", v);
  }
  /** Time Period. Serialized as `:timePeriod` */
  get timePeriod() {
    return this._g(":timePeriod");
  }
  set timePeriod(v) {
    this._s(":timePeriod", v);
  }
  /** Rank. Serialized as `:rank` */
  get rank() {
    return this._g(":rank");
  }
  set rank(v) {
    this._s(":rank", v);
  }
  /** StdDev. Serialized as `:stdDev` */
  get stdDev() {
    return this._g(":stdDev");
  }
  set stdDev(v) {
    this._s(":stdDev", v);
  }
  /** Equal Average. Serialized as `:equalAverage` */
  get equalAverage() {
    return this._g(":equalAverage");
  }
  set equalAverage(v) {
    this._s(":equalAverage", v);
  }
}
class AutoFilter extends OxmlCompositeElement {
  static _Q = "x:autoFilter";
  static _A = [":ref"];
  /** Cell or Range Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class HeaderFooter extends OxmlCompositeElement {
  static _Q = "x:headerFooter";
  static _A = [":differentOddEven", ":differentFirst", ":scaleWithDoc", ":alignWithMargins"];
  /** Different Odd Even Header Footer. Serialized as `:differentOddEven` */
  get differentOddEven() {
    return this._g(":differentOddEven");
  }
  set differentOddEven(v) {
    this._s(":differentOddEven", v);
  }
  /** Different First Page. Serialized as `:differentFirst` */
  get differentFirst() {
    return this._g(":differentFirst");
  }
  set differentFirst(v) {
    this._s(":differentFirst", v);
  }
  /** Scale Header and Footer With Document. Serialized as `:scaleWithDoc` */
  get scaleWithDoc() {
    return this._g(":scaleWithDoc");
  }
  set scaleWithDoc(v) {
    this._s(":scaleWithDoc", v);
  }
  /** Align Margins. Serialized as `:alignWithMargins` */
  get alignWithMargins() {
    return this._g(":alignWithMargins");
  }
  set alignWithMargins(v) {
    this._s(":alignWithMargins", v);
  }
  /** Odd Header. */
  get oddHeader() {
    return this._f(OddHeader);
  }
  /** Odd Page Footer. */
  get oddFooter() {
    return this._f(OddFooter);
  }
  /** Even Page Header. */
  get evenHeader() {
    return this._f(EvenHeader);
  }
  /** Even Page Footer. */
  get evenFooter() {
    return this._f(EvenFooter);
  }
  /** First Page Header. */
  get firstHeader() {
    return this._f(FirstHeader);
  }
  /** First Page Footer. */
  get firstFooter() {
    return this._f(FirstFooter);
  }
}
class PageSetup extends OxmlLeafElement {
  static _Q = "x:pageSetup";
  static _A = [":paperSize", ":scale", ":firstPageNumber", ":fitToWidth", ":fitToHeight", ":pageOrder", ":orientation", ":usePrinterDefaults", ":blackAndWhite", ":draft", ":cellComments", ":useFirstPageNumber", ":errors", ":horizontalDpi", ":verticalDpi", ":copies", "r:id"];
  /** Paper Size. Serialized as `:paperSize` */
  get paperSize() {
    return this._g(":paperSize");
  }
  set paperSize(v) {
    this._s(":paperSize", v);
  }
  /** Print Scale. Serialized as `:scale` */
  get scale() {
    return this._g(":scale");
  }
  set scale(v) {
    this._s(":scale", v);
  }
  /** First Page Number. Serialized as `:firstPageNumber` */
  get firstPageNumber() {
    return this._g(":firstPageNumber");
  }
  set firstPageNumber(v) {
    this._s(":firstPageNumber", v);
  }
  /** Fit To Width. Serialized as `:fitToWidth` */
  get fitToWidth() {
    return this._g(":fitToWidth");
  }
  set fitToWidth(v) {
    this._s(":fitToWidth", v);
  }
  /** Fit To Height. Serialized as `:fitToHeight` */
  get fitToHeight() {
    return this._g(":fitToHeight");
  }
  set fitToHeight(v) {
    this._s(":fitToHeight", v);
  }
  /** Page Order. Serialized as `:pageOrder` */
  get pageOrder() {
    return this._g(":pageOrder");
  }
  set pageOrder(v) {
    this._s(":pageOrder", v);
  }
  /** Orientation. Serialized as `:orientation` */
  get orientation() {
    return this._g(":orientation");
  }
  set orientation(v) {
    this._s(":orientation", v);
  }
  /** Use Printer Defaults. Serialized as `:usePrinterDefaults` */
  get usePrinterDefaults() {
    return this._g(":usePrinterDefaults");
  }
  set usePrinterDefaults(v) {
    this._s(":usePrinterDefaults", v);
  }
  /** Black And White. Serialized as `:blackAndWhite` */
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
  /** Print Cell Comments. Serialized as `:cellComments` */
  get cellComments() {
    return this._g(":cellComments");
  }
  set cellComments(v) {
    this._s(":cellComments", v);
  }
  /** Use First Page Number. Serialized as `:useFirstPageNumber` */
  get useFirstPageNumber() {
    return this._g(":useFirstPageNumber");
  }
  set useFirstPageNumber(v) {
    this._s(":useFirstPageNumber", v);
  }
  /** Print Error Handling. Serialized as `:errors` */
  get errors() {
    return this._g(":errors");
  }
  set errors(v) {
    this._s(":errors", v);
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
  /** Number Of Copies. Serialized as `:copies` */
  get copies() {
    return this._g(":copies");
  }
  set copies(v) {
    this._s(":copies", v);
  }
  /** Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class PrintOptions extends OxmlLeafElement {
  static _Q = "x:printOptions";
  static _A = [":horizontalCentered", ":verticalCentered", ":headings", ":gridLines", ":gridLinesSet"];
  /** Horizontal Centered. Serialized as `:horizontalCentered` */
  get horizontalCentered() {
    return this._g(":horizontalCentered");
  }
  set horizontalCentered(v) {
    this._s(":horizontalCentered", v);
  }
  /** Vertical Centered. Serialized as `:verticalCentered` */
  get verticalCentered() {
    return this._g(":verticalCentered");
  }
  set verticalCentered(v) {
    this._s(":verticalCentered", v);
  }
  /** Print Headings. Serialized as `:headings` */
  get headings() {
    return this._g(":headings");
  }
  set headings(v) {
    this._s(":headings", v);
  }
  /** Print Grid Lines. Serialized as `:gridLines` */
  get gridLines() {
    return this._g(":gridLines");
  }
  set gridLines(v) {
    this._s(":gridLines", v);
  }
  /** Grid Lines Set. Serialized as `:gridLinesSet` */
  get gridLinesSet() {
    return this._g(":gridLinesSet");
  }
  set gridLinesSet(v) {
    this._s(":gridLinesSet", v);
  }
}
class PageMargins extends OxmlLeafElement {
  static _Q = "x:pageMargins";
  static _A = [":left", ":right", ":top", ":bottom", ":header", ":footer"];
  /** Left Page Margin. Serialized as `:left` */
  get left() {
    return this._g(":left");
  }
  set left(v) {
    this._s(":left", v);
  }
  /** Right Page Margin. Serialized as `:right` */
  get right() {
    return this._g(":right");
  }
  set right(v) {
    this._s(":right", v);
  }
  /** Top Page Margin. Serialized as `:top` */
  get top() {
    return this._g(":top");
  }
  set top(v) {
    this._s(":top", v);
  }
  /** Bottom Page Margin. Serialized as `:bottom` */
  get bottom() {
    return this._g(":bottom");
  }
  set bottom(v) {
    this._s(":bottom", v);
  }
  /** Header Page Margin. Serialized as `:header` */
  get header() {
    return this._g(":header");
  }
  set header(v) {
    this._s(":header", v);
  }
  /** Footer Page Margin. Serialized as `:footer` */
  get footer() {
    return this._g(":footer");
  }
  set footer(v) {
    this._s(":footer", v);
  }
}
class PageBreakType extends OxmlCompositeElement {
  static _A = [":count", ":manualBreakCount"];
  /** Page Break Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Manual Break Count. Serialized as `:manualBreakCount` */
  get manualBreakCount() {
    return this._g(":manualBreakCount");
  }
  set manualBreakCount(v) {
    this._s(":manualBreakCount", v);
  }
}
class ColumnBreaks extends PageBreakType {
  static _Q = "x:colBreaks";
}
class RowBreaks extends PageBreakType {
  static _Q = "x:rowBreaks";
}
class DataReference extends OxmlLeafElement {
  static _Q = "x:dataRef";
  static _A = [":ref", ":name", ":sheet", "r:id"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Named Range. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Sheet Name. Serialized as `:sheet` */
  get sheet() {
    return this._g(":sheet");
  }
  set sheet(v) {
    this._s(":sheet", v);
  }
  /** relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class Break extends OxmlLeafElement {
  static _Q = "x:brk";
  static _A = [":id", ":min", ":max", ":man", ":pt"];
  /** Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Minimum. Serialized as `:min` */
  get min() {
    return this._g(":min");
  }
  set min(v) {
    this._s(":min", v);
  }
  /** Maximum. Serialized as `:max` */
  get max() {
    return this._g(":max");
  }
  set max(v) {
    this._s(":max", v);
  }
  /** Manual Page Break. Serialized as `:man` */
  get manualPageBreak() {
    return this._g(":man");
  }
  set manualPageBreak(v) {
    this._s(":man", v);
  }
  /** Pivot-Created Page Break. Serialized as `:pt` */
  get pivotTablePageBreak() {
    return this._g(":pt");
  }
  set pivotTablePageBreak(v) {
    this._s(":pt", v);
  }
}
class PivotSelection extends OxmlCompositeElement {
  static _Q = "x:pivotSelection";
  static _A = [":pane", ":showHeader", ":label", ":data", ":extendable", ":count", ":axis", ":dimension", ":start", ":min", ":max", ":activeRow", ":activeCol", ":previousRow", ":previousCol", ":click", "r:id"];
  /** Pane. Serialized as `:pane` */
  get pane() {
    return this._g(":pane");
  }
  set pane(v) {
    this._s(":pane", v);
  }
  /** Show Header. Serialized as `:showHeader` */
  get showHeader() {
    return this._g(":showHeader");
  }
  set showHeader(v) {
    this._s(":showHeader", v);
  }
  /** Label. Serialized as `:label` */
  get label() {
    return this._g(":label");
  }
  set label(v) {
    this._s(":label", v);
  }
  /** Data Selection. Serialized as `:data` */
  get data() {
    return this._g(":data");
  }
  set data(v) {
    this._s(":data", v);
  }
  /** Extendable. Serialized as `:extendable` */
  get extendable() {
    return this._g(":extendable");
  }
  set extendable(v) {
    this._s(":extendable", v);
  }
  /** Selection Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Axis. Serialized as `:axis` */
  get axis() {
    return this._g(":axis");
  }
  set axis(v) {
    this._s(":axis", v);
  }
  /** Dimension. Serialized as `:dimension` */
  get dimension() {
    return this._g(":dimension");
  }
  set dimension(v) {
    this._s(":dimension", v);
  }
  /** Start. Serialized as `:start` */
  get start() {
    return this._g(":start");
  }
  set start(v) {
    this._s(":start", v);
  }
  /** Minimum. Serialized as `:min` */
  get min() {
    return this._g(":min");
  }
  set min(v) {
    this._s(":min", v);
  }
  /** Maximum. Serialized as `:max` */
  get max() {
    return this._g(":max");
  }
  set max(v) {
    this._s(":max", v);
  }
  /** Active Row. Serialized as `:activeRow` */
  get activeRow() {
    return this._g(":activeRow");
  }
  set activeRow(v) {
    this._s(":activeRow", v);
  }
  /** Active Column. Serialized as `:activeCol` */
  get activeColumn() {
    return this._g(":activeCol");
  }
  set activeColumn(v) {
    this._s(":activeCol", v);
  }
  /** Previous Row. Serialized as `:previousRow` */
  get previousRow() {
    return this._g(":previousRow");
  }
  set previousRow(v) {
    this._s(":previousRow", v);
  }
  /** Previous Column Selection. Serialized as `:previousCol` */
  get previousColumn() {
    return this._g(":previousCol");
  }
  set previousColumn(v) {
    this._s(":previousCol", v);
  }
  /** Click Count. Serialized as `:click` */
  get click() {
    return this._g(":click");
  }
  set click(v) {
    this._s(":click", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Pivot Area. */
  get pivotArea() {
    return this._f(PivotArea);
  }
}
class Selection extends OxmlLeafElement {
  static _Q = "x:selection";
  static _A = [":pane", ":activeCell", ":activeCellId", ":sqref"];
  /** Pane. Serialized as `:pane` */
  get pane() {
    return this._g(":pane");
  }
  set pane(v) {
    this._s(":pane", v);
  }
  /** Active Cell Location. Serialized as `:activeCell` */
  get activeCell() {
    return this._g(":activeCell");
  }
  set activeCell(v) {
    this._s(":activeCell", v);
  }
  /** Active Cell Index. Serialized as `:activeCellId` */
  get activeCellId() {
    return this._g(":activeCellId");
  }
  set activeCellId(v) {
    this._s(":activeCellId", v);
  }
  /** Sequence of References. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
}
class Pane extends OxmlLeafElement {
  static _Q = "x:pane";
  static _A = [":xSplit", ":ySplit", ":topLeftCell", ":activePane", ":state"];
  /** Horizontal Split Position. Serialized as `:xSplit` */
  get horizontalSplit() {
    return this._g(":xSplit");
  }
  set horizontalSplit(v) {
    this._s(":xSplit", v);
  }
  /** Vertical Split Position. Serialized as `:ySplit` */
  get verticalSplit() {
    return this._g(":ySplit");
  }
  set verticalSplit(v) {
    this._s(":ySplit", v);
  }
  /** Top Left Visible Cell. Serialized as `:topLeftCell` */
  get topLeftCell() {
    return this._g(":topLeftCell");
  }
  set topLeftCell(v) {
    this._s(":topLeftCell", v);
  }
  /** Active Pane. Serialized as `:activePane` */
  get activePane() {
    return this._g(":activePane");
  }
  set activePane(v) {
    this._s(":activePane", v);
  }
  /** Split State. Serialized as `:state` */
  get state() {
    return this._g(":state");
  }
  set state(v) {
    this._s(":state", v);
  }
}
class PageSetupProperties extends OxmlLeafElement {
  static _Q = "x:pageSetUpPr";
  static _A = [":autoPageBreaks", ":fitToPage"];
  /** Show Auto Page Breaks. Serialized as `:autoPageBreaks` */
  get autoPageBreaks() {
    return this._g(":autoPageBreaks");
  }
  set autoPageBreaks(v) {
    this._s(":autoPageBreaks", v);
  }
  /** Fit To Page. Serialized as `:fitToPage` */
  get fitToPage() {
    return this._g(":fitToPage");
  }
  set fitToPage(v) {
    this._s(":fitToPage", v);
  }
}
class OutlineProperties extends OxmlLeafElement {
  static _Q = "x:outlinePr";
  static _A = [":applyStyles", ":summaryBelow", ":summaryRight", ":showOutlineSymbols"];
  /** Apply Styles in Outline. Serialized as `:applyStyles` */
  get applyStyles() {
    return this._g(":applyStyles");
  }
  set applyStyles(v) {
    this._s(":applyStyles", v);
  }
  /** Summary Below. Serialized as `:summaryBelow` */
  get summaryBelow() {
    return this._g(":summaryBelow");
  }
  set summaryBelow(v) {
    this._s(":summaryBelow", v);
  }
  /** Summary Right. Serialized as `:summaryRight` */
  get summaryRight() {
    return this._g(":summaryRight");
  }
  set summaryRight(v) {
    this._s(":summaryRight", v);
  }
  /** Show Outline Symbols. Serialized as `:showOutlineSymbols` */
  get showOutlineSymbols() {
    return this._g(":showOutlineSymbols");
  }
  set showOutlineSymbols(v) {
    this._s(":showOutlineSymbols", v);
  }
}
class Column extends OxmlLeafElement {
  static _Q = "x:col";
  static _A = [":min", ":max", ":width", ":style", ":hidden", ":bestFit", ":customWidth", ":phonetic", ":outlineLevel", ":collapsed"];
  /** Minimum Column. Serialized as `:min` */
  get min() {
    return this._g(":min");
  }
  set min(v) {
    this._s(":min", v);
  }
  /** Maximum Column. Serialized as `:max` */
  get max() {
    return this._g(":max");
  }
  set max(v) {
    this._s(":max", v);
  }
  /** Column Width. Serialized as `:width` */
  get width() {
    return this._g(":width");
  }
  set width(v) {
    this._s(":width", v);
  }
  /** Style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Hidden Columns. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Best Fit Column Width. Serialized as `:bestFit` */
  get bestFit() {
    return this._g(":bestFit");
  }
  set bestFit(v) {
    this._s(":bestFit", v);
  }
  /** Custom Width. Serialized as `:customWidth` */
  get customWidth() {
    return this._g(":customWidth");
  }
  set customWidth(v) {
    this._s(":customWidth", v);
  }
  /** Show Phonetic Information. Serialized as `:phonetic` */
  get phonetic() {
    return this._g(":phonetic");
  }
  set phonetic(v) {
    this._s(":phonetic", v);
  }
  /** Outline Level. Serialized as `:outlineLevel` */
  get outlineLevel() {
    return this._g(":outlineLevel");
  }
  set outlineLevel(v) {
    this._s(":outlineLevel", v);
  }
  /** Collapsed. Serialized as `:collapsed` */
  get collapsed() {
    return this._g(":collapsed");
  }
  set collapsed(v) {
    this._s(":collapsed", v);
  }
}
class Row extends OxmlCompositeElement {
  static _Q = "x:row";
  static _A = [":r", ":spans", ":s", ":customFormat", ":ht", ":hidden", ":customHeight", ":outlineLevel", ":collapsed", ":thickTop", ":thickBot", ":ph", "x14ac:dyDescent"];
  /** Row Index. Serialized as `:r` */
  get rowIndex() {
    return this._g(":r");
  }
  set rowIndex(v) {
    this._s(":r", v);
  }
  /** Spans. Serialized as `:spans` */
  get spans() {
    return this._g(":spans");
  }
  set spans(v) {
    this._s(":spans", v);
  }
  /** Style Index. Serialized as `:s` */
  get styleIndex() {
    return this._g(":s");
  }
  set styleIndex(v) {
    this._s(":s", v);
  }
  /** Custom Format. Serialized as `:customFormat` */
  get customFormat() {
    return this._g(":customFormat");
  }
  set customFormat(v) {
    this._s(":customFormat", v);
  }
  /** Row Height. Serialized as `:ht` */
  get height() {
    return this._g(":ht");
  }
  set height(v) {
    this._s(":ht", v);
  }
  /** Hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Custom Height. Serialized as `:customHeight` */
  get customHeight() {
    return this._g(":customHeight");
  }
  set customHeight(v) {
    this._s(":customHeight", v);
  }
  /** Outline Level. Serialized as `:outlineLevel` */
  get outlineLevel() {
    return this._g(":outlineLevel");
  }
  set outlineLevel(v) {
    this._s(":outlineLevel", v);
  }
  /** Collapsed. Serialized as `:collapsed` */
  get collapsed() {
    return this._g(":collapsed");
  }
  set collapsed(v) {
    this._s(":collapsed", v);
  }
  /** Thick Top Border. Serialized as `:thickTop` */
  get thickTop() {
    return this._g(":thickTop");
  }
  set thickTop(v) {
    this._s(":thickTop", v);
  }
  /** Thick Bottom. Serialized as `:thickBot` */
  get thickBot() {
    return this._g(":thickBot");
  }
  set thickBot(v) {
    this._s(":thickBot", v);
  }
  /** Show Phonetic. Serialized as `:ph` */
  get showPhonetic() {
    return this._g(":ph");
  }
  set showPhonetic(v) {
    this._s(":ph", v);
  }
  /** dyDescent. Serialized as `x14ac:dyDescent` */
  get dyDescent() {
    return this._g("x14ac:dyDescent");
  }
  set dyDescent(v) {
    this._s("x14ac:dyDescent", v);
  }
}
class UserInfo extends OxmlCompositeElement {
  static _Q = "x:userInfo";
  static _A = [":guid", ":name", ":id", ":dateTime"];
  /** User Revisions GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** User Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** User Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Date Time. Serialized as `:dateTime` */
  get dateTime() {
    return this._g(":dateTime");
  }
  set dateTime(v) {
    this._s(":dateTime", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CellFormula extends OxmlLeafTextElement {
  static _Q = "x:f";
  static _A = [":t", ":aca", ":ref", ":dt2D", ":dtr", ":del1", ":del2", ":r1", ":r2", ":ca", ":si", ":bx", "xml:space"];
  /** Formula Type. Serialized as `:t` */
  get formulaType() {
    return this._g(":t");
  }
  set formulaType(v) {
    this._s(":t", v);
  }
  /** Always Calculate Array. Serialized as `:aca` */
  get alwaysCalculateArray() {
    return this._g(":aca");
  }
  set alwaysCalculateArray(v) {
    this._s(":aca", v);
  }
  /** Range of Cells. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Data Table 2-D. Serialized as `:dt2D` */
  get dataTable2D() {
    return this._g(":dt2D");
  }
  set dataTable2D(v) {
    this._s(":dt2D", v);
  }
  /** Data Table Row. Serialized as `:dtr` */
  get dataTableRow() {
    return this._g(":dtr");
  }
  set dataTableRow(v) {
    this._s(":dtr", v);
  }
  /** Input 1 Deleted. Serialized as `:del1` */
  get input1Deleted() {
    return this._g(":del1");
  }
  set input1Deleted(v) {
    this._s(":del1", v);
  }
  /** Input 2 Deleted. Serialized as `:del2` */
  get input2Deleted() {
    return this._g(":del2");
  }
  set input2Deleted(v) {
    this._s(":del2", v);
  }
  /** Data Table Cell 1. Serialized as `:r1` */
  get r1() {
    return this._g(":r1");
  }
  set r1(v) {
    this._s(":r1", v);
  }
  /** Input Cell 2. Serialized as `:r2` */
  get r2() {
    return this._g(":r2");
  }
  set r2(v) {
    this._s(":r2", v);
  }
  /** Calculate Cell. Serialized as `:ca` */
  get calculateCell() {
    return this._g(":ca");
  }
  set calculateCell(v) {
    this._s(":ca", v);
  }
  /** Shared Group Index. Serialized as `:si` */
  get sharedIndex() {
    return this._g(":si");
  }
  set sharedIndex(v) {
    this._s(":si", v);
  }
  /** Assigns Value to Name. Serialized as `:bx` */
  get bx() {
    return this._g(":bx");
  }
  set bx(v) {
    this._s(":bx", v);
  }
  /** Content Contains Significant Whitespace. Serialized as `xml:space` */
  get space() {
    return this._g("xml:space");
  }
  set space(v) {
    this._s("xml:space", v);
  }
}
class SheetId extends OxmlLeafElement {
  static _Q = "x:sheetId";
  static _A = [":val"];
  /** Sheet Id. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DifferentialFormatType extends OxmlCompositeElement {
  /** Font Properties. */
  get font() {
    return this._f(Font);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Fill. */
  get fill() {
    return this._f(Fill);
  }
  /** Alignment. */
  get alignment() {
    return this._f(Alignment);
  }
  /** Border Properties. */
  get border() {
    return this._f(Border);
  }
  /** Protection Properties. */
  get protection() {
    return this._f(Protection);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DifferentialFormat extends DifferentialFormatType {
  static _Q = "x:dxf";
}
class NewDifferentialFormat extends DifferentialFormatType {
  static _Q = "x:ndxf";
}
class OldDifferentialFormat extends DifferentialFormatType {
  static _Q = "x:odxf";
}
class NewCell extends OxmlCompositeElement {
  static _Q = "x:nc";
  static _A = [":r", ":s", ":t", ":cm", ":vm", ":ph"];
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Style Index. Serialized as `:s` */
  get styleIndex() {
    return this._g(":s");
  }
  set styleIndex(v) {
    this._s(":s", v);
  }
  /** Cell Data Type. Serialized as `:t` */
  get dataType() {
    return this._g(":t");
  }
  set dataType(v) {
    this._s(":t", v);
  }
  /** Cell Metadata Index. Serialized as `:cm` */
  get cellMetaIndex() {
    return this._g(":cm");
  }
  set cellMetaIndex(v) {
    this._s(":cm", v);
  }
  /** Value Metadata Index. Serialized as `:vm` */
  get valueMetaIndex() {
    return this._g(":vm");
  }
  set valueMetaIndex(v) {
    this._s(":vm", v);
  }
  /** Show Phonetic. Serialized as `:ph` */
  get showPhonetic() {
    return this._g(":ph");
  }
  set showPhonetic(v) {
    this._s(":ph", v);
  }
  /** Formula. */
  get cellFormula() {
    return this._f(CellFormula);
  }
  /** Cell Value. */
  get cellValue() {
    return this._f(CellValue);
  }
  /** Rich Text Inline. */
  get inlineString() {
    return this._f(InlineString);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CellType extends OxmlCompositeElement {
  static _A = [":r", ":s", ":t", ":cm", ":vm", ":ph"];
  /** Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Style Index. Serialized as `:s` */
  get styleIndex() {
    return this._g(":s");
  }
  set styleIndex(v) {
    this._s(":s", v);
  }
  /** Cell Data Type. Serialized as `:t` */
  get dataType() {
    return this._g(":t");
  }
  set dataType(v) {
    this._s(":t", v);
  }
  /** Cell Metadata Index. Serialized as `:cm` */
  get cellMetaIndex() {
    return this._g(":cm");
  }
  set cellMetaIndex(v) {
    this._s(":cm", v);
  }
  /** Value Metadata Index. Serialized as `:vm` */
  get valueMetaIndex() {
    return this._g(":vm");
  }
  set valueMetaIndex(v) {
    this._s(":vm", v);
  }
  /** Show Phonetic. Serialized as `:ph` */
  get showPhonetic() {
    return this._g(":ph");
  }
  set showPhonetic(v) {
    this._s(":ph", v);
  }
  /** Formula. */
  get cellFormula() {
    return this._f(CellFormula);
  }
  /** Cell Value. */
  get cellValue() {
    return this._f(CellValue);
  }
  /** Rich Text Inline. */
  get inlineString() {
    return this._f(InlineString);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Cell extends CellType {
  static _Q = "x:c";
}
class OldCell extends CellType {
  static _Q = "x:oc";
}
class Undo extends OxmlLeafElement {
  static _Q = "x:undo";
  static _A = [":index", ":exp", ":ref3D", ":array", ":v", ":nf", ":cs", ":dr", ":dn", ":r", ":sId"];
  /** Index. Serialized as `:index` */
  get index() {
    return this._g(":index");
  }
  set index(v) {
    this._s(":index", v);
  }
  /** Expression. Serialized as `:exp` */
  get expression() {
    return this._g(":exp");
  }
  set expression(v) {
    this._s(":exp", v);
  }
  /** Reference 3D. Serialized as `:ref3D` */
  get reference3D() {
    return this._g(":ref3D");
  }
  set reference3D(v) {
    this._s(":ref3D", v);
  }
  /** Array Entered. Serialized as `:array` */
  get array() {
    return this._g(":array");
  }
  set array(v) {
    this._s(":array", v);
  }
  /** Value Needed. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
  /** Defined Name Formula. Serialized as `:nf` */
  get definedNameFormula() {
    return this._g(":nf");
  }
  set definedNameFormula(v) {
    this._s(":nf", v);
  }
  /** Cross Sheet Move. Serialized as `:cs` */
  get crossSheetMove() {
    return this._g(":cs");
  }
  set crossSheetMove(v) {
    this._s(":cs", v);
  }
  /** Range. Serialized as `:dr` */
  get deletedRange() {
    return this._g(":dr");
  }
  set deletedRange(v) {
    this._s(":dr", v);
  }
  /** Defined Name. Serialized as `:dn` */
  get definedName() {
    return this._g(":dn");
  }
  set definedName(v) {
    this._s(":dn", v);
  }
  /** Cell Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Sheet Id. Serialized as `:sId` */
  get sheetId() {
    return this._g(":sId");
  }
  set sheetId(v) {
    this._s(":sId", v);
  }
}
class Reviewed extends OxmlLeafElement {
  static _Q = "x:reviewed";
  static _A = [":rId"];
  /** revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
}
class ReviewedList extends OxmlCompositeElement {
  static _Q = "x:reviewedList";
  static _A = [":count"];
  /** Reviewed Revisions Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SheetIdMap extends OxmlCompositeElement {
  static _Q = "x:sheetIdMap";
  static _A = [":count"];
  /** Sheet Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RevisionConflict extends OxmlLeafElement {
  static _Q = "x:rcft";
  static _A = [":rId", ":ua", ":ra", ":sheetId"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
}
class RevisionQueryTable extends OxmlLeafElement {
  static _Q = "x:rqt";
  static _A = [":sheetId", ":ref", ":fieldId"];
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** QueryTable Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Field Id. Serialized as `:fieldId` */
  get fieldId() {
    return this._g(":fieldId");
  }
  set fieldId(v) {
    this._s(":fieldId", v);
  }
}
class RevisionComment extends OxmlLeafElement {
  static _Q = "x:rcmt";
  static _A = [":sheetId", ":cell", ":guid", ":action", ":alwaysShow", ":old", ":hiddenRow", ":hiddenColumn", ":author", ":oldLength", ":newLength"];
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Cell. Serialized as `:cell` */
  get cell() {
    return this._g(":cell");
  }
  set cell(v) {
    this._s(":cell", v);
  }
  /** GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** User Action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
  /** Always Show Comment. Serialized as `:alwaysShow` */
  get alwaysShow() {
    return this._g(":alwaysShow");
  }
  set alwaysShow(v) {
    this._s(":alwaysShow", v);
  }
  /** Old Comment. Serialized as `:old` */
  get old() {
    return this._g(":old");
  }
  set old(v) {
    this._s(":old", v);
  }
  /** Comment In Hidden Row. Serialized as `:hiddenRow` */
  get hiddenRow() {
    return this._g(":hiddenRow");
  }
  set hiddenRow(v) {
    this._s(":hiddenRow", v);
  }
  /** Hidden Column. Serialized as `:hiddenColumn` */
  get hiddenColumn() {
    return this._g(":hiddenColumn");
  }
  set hiddenColumn(v) {
    this._s(":hiddenColumn", v);
  }
  /** Author. Serialized as `:author` */
  get author() {
    return this._g(":author");
  }
  set author(v) {
    this._s(":author", v);
  }
  /** Original Comment Length. Serialized as `:oldLength` */
  get oldLength() {
    return this._g(":oldLength");
  }
  set oldLength(v) {
    this._s(":oldLength", v);
  }
  /** New Comment Length. Serialized as `:newLength` */
  get newLength() {
    return this._g(":newLength");
  }
  set newLength(v) {
    this._s(":newLength", v);
  }
}
class RevisionDefinedName extends OxmlCompositeElement {
  static _Q = "x:rdn";
  static _A = [":rId", ":ua", ":ra", ":localSheetId", ":customView", ":name", ":function", ":oldFunction", ":functionGroupId", ":oldFunctionGroupId", ":shortcutKey", ":oldShortcutKey", ":hidden", ":oldHidden", ":customMenu", ":oldCustomMenu", ":description", ":oldDescription", ":help", ":oldHelp", ":statusBar", ":oldStatusBar", ":comment", ":oldComment"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Local Name Sheet Id. Serialized as `:localSheetId` */
  get localSheetId() {
    return this._g(":localSheetId");
  }
  set localSheetId(v) {
    this._s(":localSheetId", v);
  }
  /** Custom View. Serialized as `:customView` */
  get customView() {
    return this._g(":customView");
  }
  set customView(v) {
    this._s(":customView", v);
  }
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Function. Serialized as `:function` */
  get function() {
    return this._g(":function");
  }
  set function(v) {
    this._s(":function", v);
  }
  /** Old Function. Serialized as `:oldFunction` */
  get oldFunction() {
    return this._g(":oldFunction");
  }
  set oldFunction(v) {
    this._s(":oldFunction", v);
  }
  /** Function Group Id. Serialized as `:functionGroupId` */
  get functionGroupId() {
    return this._g(":functionGroupId");
  }
  set functionGroupId(v) {
    this._s(":functionGroupId", v);
  }
  /** Old Function Group Id. Serialized as `:oldFunctionGroupId` */
  get oldFunctionGroupId() {
    return this._g(":oldFunctionGroupId");
  }
  set oldFunctionGroupId(v) {
    this._s(":oldFunctionGroupId", v);
  }
  /** Shortcut Key. Serialized as `:shortcutKey` */
  get shortcutKey() {
    return this._g(":shortcutKey");
  }
  set shortcutKey(v) {
    this._s(":shortcutKey", v);
  }
  /** Old Short Cut Key. Serialized as `:oldShortcutKey` */
  get oldShortcutKey() {
    return this._g(":oldShortcutKey");
  }
  set oldShortcutKey(v) {
    this._s(":oldShortcutKey", v);
  }
  /** Named Range Hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Old Hidden. Serialized as `:oldHidden` */
  get oldHidden() {
    return this._g(":oldHidden");
  }
  set oldHidden(v) {
    this._s(":oldHidden", v);
  }
  /** New Custom Menu. Serialized as `:customMenu` */
  get customMenu() {
    return this._g(":customMenu");
  }
  set customMenu(v) {
    this._s(":customMenu", v);
  }
  /** Old Custom Menu Text. Serialized as `:oldCustomMenu` */
  get oldCustomMenu() {
    return this._g(":oldCustomMenu");
  }
  set oldCustomMenu(v) {
    this._s(":oldCustomMenu", v);
  }
  /** Description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** Old Description. Serialized as `:oldDescription` */
  get oldDescription() {
    return this._g(":oldDescription");
  }
  set oldDescription(v) {
    this._s(":oldDescription", v);
  }
  /** New Help Topic. Serialized as `:help` */
  get help() {
    return this._g(":help");
  }
  set help(v) {
    this._s(":help", v);
  }
  /** Old Help Topic. Serialized as `:oldHelp` */
  get oldHelp() {
    return this._g(":oldHelp");
  }
  set oldHelp(v) {
    this._s(":oldHelp", v);
  }
  /** Status Bar. Serialized as `:statusBar` */
  get statusBar() {
    return this._g(":statusBar");
  }
  set statusBar(v) {
    this._s(":statusBar", v);
  }
  /** Old Status Bar. Serialized as `:oldStatusBar` */
  get oldStatusBar() {
    return this._g(":oldStatusBar");
  }
  set oldStatusBar(v) {
    this._s(":oldStatusBar", v);
  }
  /** Name Comment. Serialized as `:comment` */
  get comment() {
    return this._g(":comment");
  }
  set comment(v) {
    this._s(":comment", v);
  }
  /** Old Name Comment. Serialized as `:oldComment` */
  get oldComment() {
    return this._g(":oldComment");
  }
  set oldComment(v) {
    this._s(":oldComment", v);
  }
  /** Formula. */
  get formula() {
    return this._f(Formula);
  }
  /** Old Formula. */
  get oldFormula() {
    return this._f(OldFormula);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RevisionAutoFormat extends OxmlLeafElement {
  static _Q = "x:raf";
  static _A = [":sheetId", ":autoFormatId", ":applyNumberFormats", ":applyBorderFormats", ":applyFontFormats", ":applyPatternFormats", ":applyAlignmentFormats", ":applyWidthHeightFormats", ":ref"];
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Auto Format Id. Serialized as `:autoFormatId` */
  get autoFormatId() {
    return this._g(":autoFormatId");
  }
  set autoFormatId(v) {
    this._s(":autoFormatId", v);
  }
  /** Apply Number Formats. Serialized as `:applyNumberFormats` */
  get applyNumberFormats() {
    return this._g(":applyNumberFormats");
  }
  set applyNumberFormats(v) {
    this._s(":applyNumberFormats", v);
  }
  /** Apply Border Formats. Serialized as `:applyBorderFormats` */
  get applyBorderFormats() {
    return this._g(":applyBorderFormats");
  }
  set applyBorderFormats(v) {
    this._s(":applyBorderFormats", v);
  }
  /** Apply Font Formats. Serialized as `:applyFontFormats` */
  get applyFontFormats() {
    return this._g(":applyFontFormats");
  }
  set applyFontFormats(v) {
    this._s(":applyFontFormats", v);
  }
  /** Apply Pattern Formats. Serialized as `:applyPatternFormats` */
  get applyPatternFormats() {
    return this._g(":applyPatternFormats");
  }
  set applyPatternFormats(v) {
    this._s(":applyPatternFormats", v);
  }
  /** Apply Alignment Formats. Serialized as `:applyAlignmentFormats` */
  get applyAlignmentFormats() {
    return this._g(":applyAlignmentFormats");
  }
  set applyAlignmentFormats(v) {
    this._s(":applyAlignmentFormats", v);
  }
  /** Apply Width / Height Formats. Serialized as `:applyWidthHeightFormats` */
  get applyWidthHeightFormats() {
    return this._g(":applyWidthHeightFormats");
  }
  set applyWidthHeightFormats(v) {
    this._s(":applyWidthHeightFormats", v);
  }
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class RevisionFormat extends OxmlCompositeElement {
  static _Q = "x:rfmt";
  static _A = [":sheetId", ":xfDxf", ":s", ":sqref", ":start", ":length"];
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Row or Column Formatting Change. Serialized as `:xfDxf` */
  get rowOrColumnAffected() {
    return this._g(":xfDxf");
  }
  set rowOrColumnAffected(v) {
    this._s(":xfDxf", v);
  }
  /** Style. Serialized as `:s` */
  get styleAffected() {
    return this._g(":s");
  }
  set styleAffected(v) {
    this._s(":s", v);
  }
  /** Sequence Of References. Serialized as `:sqref` */
  get sequenceOfReferences() {
    return this._g(":sqref");
  }
  set sequenceOfReferences(v) {
    this._s(":sqref", v);
  }
  /** Start index. Serialized as `:start` */
  get start() {
    return this._g(":start");
  }
  set start(v) {
    this._s(":start", v);
  }
  /** Length. Serialized as `:length` */
  get length() {
    return this._g(":length");
  }
  set length(v) {
    this._s(":length", v);
  }
  /** Formatting. */
  get differentialFormat() {
    return this._f(DifferentialFormat);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RevisionCellChange extends OxmlCompositeElement {
  static _Q = "x:rcc";
  static _A = [":rId", ":ua", ":ra", ":sId", ":odxf", ":xfDxf", ":s", ":dxf", ":numFmtId", ":quotePrefix", ":oldQuotePrefix", ":ph", ":oldPh", ":endOfListFormulaUpdate"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Sheet Id. Serialized as `:sId` */
  get sheetId() {
    return this._g(":sId");
  }
  set sheetId(v) {
    this._s(":sId", v);
  }
  /** Old Formatting. Serialized as `:odxf` */
  get oldFormatting() {
    return this._g(":odxf");
  }
  set oldFormatting(v) {
    this._s(":odxf", v);
  }
  /** Row Column Formatting Change. Serialized as `:xfDxf` */
  get rowColumnFormattingAffected() {
    return this._g(":xfDxf");
  }
  set rowColumnFormattingAffected(v) {
    this._s(":xfDxf", v);
  }
  /** Style Revision. Serialized as `:s` */
  get styleRevision() {
    return this._g(":s");
  }
  set styleRevision(v) {
    this._s(":s", v);
  }
  /** Formatting. Serialized as `:dxf` */
  get format() {
    return this._g(":dxf");
  }
  set format(v) {
    this._s(":dxf", v);
  }
  /** Number Format Id. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
  /** Quote Prefix. Serialized as `:quotePrefix` */
  get quotePrefix() {
    return this._g(":quotePrefix");
  }
  set quotePrefix(v) {
    this._s(":quotePrefix", v);
  }
  /** Old Quote Prefix. Serialized as `:oldQuotePrefix` */
  get oldQuotePrefix() {
    return this._g(":oldQuotePrefix");
  }
  set oldQuotePrefix(v) {
    this._s(":oldQuotePrefix", v);
  }
  /** Phonetic Text. Serialized as `:ph` */
  get hasPhoneticText() {
    return this._g(":ph");
  }
  set hasPhoneticText(v) {
    this._s(":ph", v);
  }
  /** Old Phonetic Text. Serialized as `:oldPh` */
  get oldPhoneticText() {
    return this._g(":oldPh");
  }
  set oldPhoneticText(v) {
    this._s(":oldPh", v);
  }
  /** End of List  Formula Update. Serialized as `:endOfListFormulaUpdate` */
  get endOfListFormulaUpdate() {
    return this._g(":endOfListFormulaUpdate");
  }
  set endOfListFormulaUpdate(v) {
    this._s(":endOfListFormulaUpdate", v);
  }
  /** Old Cell Data. */
  get oldCell() {
    return this._f(OldCell);
  }
  /** New Cell Data. */
  get newCell() {
    return this._f(NewCell);
  }
  /** Old Formatting Information. */
  get oldDifferentialFormat() {
    return this._f(OldDifferentialFormat);
  }
  /** New Formatting Information. */
  get newDifferentialFormat() {
    return this._f(NewDifferentialFormat);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RevisionInsertSheet extends OxmlLeafElement {
  static _Q = "x:ris";
  static _A = [":rId", ":ua", ":ra", ":sheetId", ":name", ":sheetPosition"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Sheet Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Sheet Position. Serialized as `:sheetPosition` */
  get sheetPosition() {
    return this._g(":sheetPosition");
  }
  set sheetPosition(v) {
    this._s(":sheetPosition", v);
  }
}
class RevisionSheetName extends OxmlCompositeElement {
  static _Q = "x:rsnm";
  static _A = [":rId", ":ua", ":ra", ":sheetId", ":oldName", ":newName"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Old Sheet Name. Serialized as `:oldName` */
  get oldName() {
    return this._g(":oldName");
  }
  set oldName(v) {
    this._s(":oldName", v);
  }
  /** New Sheet Name. Serialized as `:newName` */
  get newName() {
    return this._g(":newName");
  }
  set newName(v) {
    this._s(":newName", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RevisionCustomView extends OxmlLeafElement {
  static _Q = "x:rcv";
  static _A = [":guid", ":action"];
  /** GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** User Action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
}
class RevisionMove extends OxmlCompositeElement {
  static _Q = "x:rm";
  static _A = [":rId", ":ua", ":ra", ":sheetId", ":source", ":destination", ":sourceSheetId"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Sheet Id. Serialized as `:sheetId` */
  get sheetId() {
    return this._g(":sheetId");
  }
  set sheetId(v) {
    this._s(":sheetId", v);
  }
  /** Source. Serialized as `:source` */
  get source() {
    return this._g(":source");
  }
  set source(v) {
    this._s(":source", v);
  }
  /** Destination. Serialized as `:destination` */
  get destination() {
    return this._g(":destination");
  }
  set destination(v) {
    this._s(":destination", v);
  }
  /** Source Sheet Id. Serialized as `:sourceSheetId` */
  get sourceSheetId() {
    return this._g(":sourceSheetId");
  }
  set sourceSheetId(v) {
    this._s(":sourceSheetId", v);
  }
}
class RevisionRowColumn extends OxmlCompositeElement {
  static _Q = "x:rrc";
  static _A = [":rId", ":ua", ":ra", ":sId", ":eol", ":ref", ":action", ":edge"];
  /** Revision Id. Serialized as `:rId` */
  get revisionId() {
    return this._g(":rId");
  }
  set revisionId(v) {
    this._s(":rId", v);
  }
  /** Revision From Rejection. Serialized as `:ua` */
  get ua() {
    return this._g(":ua");
  }
  set ua(v) {
    this._s(":ua", v);
  }
  /** Revision Undo Rejected. Serialized as `:ra` */
  get ra() {
    return this._g(":ra");
  }
  set ra(v) {
    this._s(":ra", v);
  }
  /** Sheet Id. Serialized as `:sId` */
  get sheetId() {
    return this._g(":sId");
  }
  set sheetId(v) {
    this._s(":sId", v);
  }
  /** End Of List. Serialized as `:eol` */
  get endOfList() {
    return this._g(":eol");
  }
  set endOfList(v) {
    this._s(":eol", v);
  }
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** User Action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
  /** Edge Deleted. Serialized as `:edge` */
  get edge() {
    return this._g(":edge");
  }
  set edge(v) {
    this._s(":edge", v);
  }
}
class Header extends OxmlCompositeElement {
  static _Q = "x:header";
  static _A = [":guid", ":dateTime", ":maxSheetId", ":userName", "r:id", ":minRId", ":maxRId"];
  /** GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** Date Time. Serialized as `:dateTime` */
  get dateTime() {
    return this._g(":dateTime");
  }
  set dateTime(v) {
    this._s(":dateTime", v);
  }
  /** Last Sheet Id. Serialized as `:maxSheetId` */
  get maxSheetId() {
    return this._g(":maxSheetId");
  }
  set maxSheetId(v) {
    this._s(":maxSheetId", v);
  }
  /** User Name. Serialized as `:userName` */
  get userName() {
    return this._g(":userName");
  }
  set userName(v) {
    this._s(":userName", v);
  }
  /** Relationship ID. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Minimum Revision Id. Serialized as `:minRId` */
  get minRevisionId() {
    return this._g(":minRId");
  }
  set minRevisionId(v) {
    this._s(":minRId", v);
  }
  /** Max Revision Id. Serialized as `:maxRId` */
  get maxRevisionId() {
    return this._g(":maxRId");
  }
  set maxRevisionId(v) {
    this._s(":maxRId", v);
  }
  /** Sheet Id Map. */
  get sheetIdMap() {
    return this._f(SheetIdMap);
  }
  /** Reviewed List. */
  get reviewedList() {
    return this._f(ReviewedList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PhoneticProperties extends OxmlLeafElement {
  static _Q = "x:phoneticPr";
  static _A = [":fontId", ":type", ":alignment"];
  /** Font Id. Serialized as `:fontId` */
  get fontId() {
    return this._g(":fontId");
  }
  set fontId(v) {
    this._s(":fontId", v);
  }
  /** Character Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Alignment. Serialized as `:alignment` */
  get alignment() {
    return this._g(":alignment");
  }
  set alignment(v) {
    this._s(":alignment", v);
  }
}
class PhoneticRun extends OxmlCompositeElement {
  static _Q = "x:rPh";
  static _A = [":sb", ":eb"];
  /** Base Text Start Index. Serialized as `:sb` */
  get baseTextStartIndex() {
    return this._g(":sb");
  }
  set baseTextStartIndex(v) {
    this._s(":sb", v);
  }
  /** Base Text End Index. Serialized as `:eb` */
  get endingBaseIndex() {
    return this._g(":eb");
  }
  set endingBaseIndex(v) {
    this._s(":eb", v);
  }
  /** Text. */
  get text() {
    return this._f(Text);
  }
}
class Run extends OxmlCompositeElement {
  static _Q = "x:r";
  /** Run Properties. */
  get runProperties() {
    return this._f(RunProperties);
  }
  /** Text. */
  get text() {
    return this._f(Text);
  }
}
class RunProperties extends OxmlCompositeElement {
  static _Q = "x:rPr";
}
class FontScheme extends OxmlLeafElement {
  static _Q = "x:scheme";
  static _A = [":val"];
  /** Font Scheme. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class InternationalPropertyType extends OxmlLeafElement {
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class RunPropertyCharSet extends InternationalPropertyType {
  static _Q = "x:charset";
}
class FontFamily extends InternationalPropertyType {
  static _Q = "x:family";
}
class RunFont extends OxmlLeafElement {
  static _Q = "x:rFont";
  static _A = [":val"];
  /** String Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ColorType extends OxmlLeafElement {
  static _A = [":auto", ":indexed", ":rgb", ":theme", ":tint"];
  /** Automatic. Serialized as `:auto` */
  get auto() {
    return this._g(":auto");
  }
  set auto(v) {
    this._s(":auto", v);
  }
  /** Index. Serialized as `:indexed` */
  get indexed() {
    return this._g(":indexed");
  }
  set indexed(v) {
    this._s(":indexed", v);
  }
  /** Alpha Red Green Blue Color Value. Serialized as `:rgb` */
  get rgb() {
    return this._g(":rgb");
  }
  set rgb(v) {
    this._s(":rgb", v);
  }
  /** Theme Color. Serialized as `:theme` */
  get theme() {
    return this._g(":theme");
  }
  set theme(v) {
    this._s(":theme", v);
  }
  /** Tint. Serialized as `:tint` */
  get tint() {
    return this._g(":tint");
  }
  set tint(v) {
    this._s(":tint", v);
  }
}
class BackgroundColor extends ColorType {
  static _Q = "x:bgColor";
}
class ForegroundColor extends ColorType {
  static _Q = "x:fgColor";
}
class TabColor extends ColorType {
  static _Q = "x:tabColor";
}
class Color extends ColorType {
  static _Q = "x:color";
}
class FontSize extends OxmlLeafElement {
  static _Q = "x:sz";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class VerticalTextAlignment extends OxmlLeafElement {
  static _Q = "x:vertAlign";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Underline extends OxmlLeafElement {
  static _Q = "x:u";
  static _A = [":val"];
  /** Underline Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BooleanPropertyType extends OxmlLeafElement {
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Shadow extends BooleanPropertyType {
  static _Q = "x:shadow";
}
class Outline extends BooleanPropertyType {
  static _Q = "x:outline";
}
class Extend extends BooleanPropertyType {
  static _Q = "x:extend";
}
class Condense extends BooleanPropertyType {
  static _Q = "x:condense";
}
class Strike extends BooleanPropertyType {
  static _Q = "x:strike";
}
class Italic extends BooleanPropertyType {
  static _Q = "x:i";
}
class Bold extends BooleanPropertyType {
  static _Q = "x:b";
}
class RstType extends OxmlCompositeElement {
  /** Text. */
  get text() {
    return this._f(Text);
  }
}
class CommentText extends RstType {
  static _Q = "x:text";
}
class InlineString extends RstType {
  static _Q = "x:is";
}
class SharedStringItem extends RstType {
  static _Q = "x:si";
}
class QueryTableField extends OxmlCompositeElement {
  static _Q = "x:queryTableField";
  static _A = [":id", ":name", ":dataBound", ":rowNumbers", ":fillFormulas", ":clipped", ":tableColumnId"];
  /** Field Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Data Bound Column. Serialized as `:dataBound` */
  get dataBound() {
    return this._g(":dataBound");
  }
  set dataBound(v) {
    this._s(":dataBound", v);
  }
  /** Row Numbers. Serialized as `:rowNumbers` */
  get rowNumbers() {
    return this._g(":rowNumbers");
  }
  set rowNumbers(v) {
    this._s(":rowNumbers", v);
  }
  /** Fill This Formula On Refresh. Serialized as `:fillFormulas` */
  get fillFormulas() {
    return this._g(":fillFormulas");
  }
  set fillFormulas(v) {
    this._s(":fillFormulas", v);
  }
  /** Clipped Column. Serialized as `:clipped` */
  get clipped() {
    return this._g(":clipped");
  }
  set clipped(v) {
    this._s(":clipped", v);
  }
  /** Table Column Id. Serialized as `:tableColumnId` */
  get tableColumnId() {
    return this._g(":tableColumnId");
  }
  set tableColumnId(v) {
    this._s(":tableColumnId", v);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DeletedField extends OxmlLeafElement {
  static _Q = "x:deletedField";
  static _A = [":name"];
  /** Deleted Fields Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class QueryTableDeletedFields extends OxmlCompositeElement {
  static _Q = "x:queryTableDeletedFields";
  static _A = [":count"];
  /** Deleted Fields Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class QueryTableFields extends OxmlCompositeElement {
  static _Q = "x:queryTableFields";
  static _A = [":count"];
  /** Column Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotAreaReference extends OxmlCompositeElement {
  static _Q = "x:reference";
  static _A = [":field", ":count", ":selected", ":byPosition", ":relative", ":defaultSubtotal", ":sumSubtotal", ":countASubtotal", ":avgSubtotal", ":maxSubtotal", ":minSubtotal", ":productSubtotal", ":countSubtotal", ":stdDevSubtotal", ":stdDevPSubtotal", ":varSubtotal", ":varPSubtotal"];
  /** Field Index. Serialized as `:field` */
  get field() {
    return this._g(":field");
  }
  set field(v) {
    this._s(":field", v);
  }
  /** Item Index Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Selected. Serialized as `:selected` */
  get selected() {
    return this._g(":selected");
  }
  set selected(v) {
    this._s(":selected", v);
  }
  /** Positional Reference. Serialized as `:byPosition` */
  get byPosition() {
    return this._g(":byPosition");
  }
  set byPosition(v) {
    this._s(":byPosition", v);
  }
  /** Relative Reference. Serialized as `:relative` */
  get relative() {
    return this._g(":relative");
  }
  set relative(v) {
    this._s(":relative", v);
  }
  /** Include Default Filter. Serialized as `:defaultSubtotal` */
  get defaultSubtotal() {
    return this._g(":defaultSubtotal");
  }
  set defaultSubtotal(v) {
    this._s(":defaultSubtotal", v);
  }
  /** Include Sum Filter. Serialized as `:sumSubtotal` */
  get sumSubtotal() {
    return this._g(":sumSubtotal");
  }
  set sumSubtotal(v) {
    this._s(":sumSubtotal", v);
  }
  /** Include CountA Filter. Serialized as `:countASubtotal` */
  get countASubtotal() {
    return this._g(":countASubtotal");
  }
  set countASubtotal(v) {
    this._s(":countASubtotal", v);
  }
  /** Include Average Filter. Serialized as `:avgSubtotal` */
  get averageSubtotal() {
    return this._g(":avgSubtotal");
  }
  set averageSubtotal(v) {
    this._s(":avgSubtotal", v);
  }
  /** Include Maximum Filter. Serialized as `:maxSubtotal` */
  get maxSubtotal() {
    return this._g(":maxSubtotal");
  }
  set maxSubtotal(v) {
    this._s(":maxSubtotal", v);
  }
  /** Include Minimum Filter. Serialized as `:minSubtotal` */
  get minSubtotal() {
    return this._g(":minSubtotal");
  }
  set minSubtotal(v) {
    this._s(":minSubtotal", v);
  }
  /** Include Product Filter. Serialized as `:productSubtotal` */
  get applyProductInSubtotal() {
    return this._g(":productSubtotal");
  }
  set applyProductInSubtotal(v) {
    this._s(":productSubtotal", v);
  }
  /** Include Count Subtotal. Serialized as `:countSubtotal` */
  get countSubtotal() {
    return this._g(":countSubtotal");
  }
  set countSubtotal(v) {
    this._s(":countSubtotal", v);
  }
  /** Include StdDev Filter. Serialized as `:stdDevSubtotal` */
  get applyStandardDeviationInSubtotal() {
    return this._g(":stdDevSubtotal");
  }
  set applyStandardDeviationInSubtotal(v) {
    this._s(":stdDevSubtotal", v);
  }
  /** Include StdDevP Filter. Serialized as `:stdDevPSubtotal` */
  get applyStandardDeviationPInSubtotal() {
    return this._g(":stdDevPSubtotal");
  }
  set applyStandardDeviationPInSubtotal(v) {
    this._s(":stdDevPSubtotal", v);
  }
  /** Include Var Filter. Serialized as `:varSubtotal` */
  get applyVarianceInSubtotal() {
    return this._g(":varSubtotal");
  }
  set applyVarianceInSubtotal(v) {
    this._s(":varSubtotal", v);
  }
  /** Include VarP Filter. Serialized as `:varPSubtotal` */
  get applyVariancePInSubtotal() {
    return this._g(":varPSubtotal");
  }
  set applyVariancePInSubtotal(v) {
    this._s(":varPSubtotal", v);
  }
}
class PivotAreaReferences extends OxmlCompositeElement {
  static _Q = "x:references";
  static _A = [":count"];
  /** Pivot Filter Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PageField extends OxmlCompositeElement {
  static _Q = "x:pageField";
  static _A = [":fld", ":item", ":hier", ":name", ":cap"];
  /** Field. Serialized as `:fld` */
  get field() {
    return this._g(":fld");
  }
  set field(v) {
    this._s(":fld", v);
  }
  /** Item Index. Serialized as `:item` */
  get item() {
    return this._g(":item");
  }
  set item(v) {
    this._s(":item", v);
  }
  /** OLAP Hierarchy Index. Serialized as `:hier` */
  get hierarchy() {
    return this._g(":hier");
  }
  set hierarchy(v) {
    this._s(":hier", v);
  }
  /** Hierarchy Unique Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Hierarchy Display Name. Serialized as `:cap` */
  get caption() {
    return this._g(":cap");
  }
  set caption(v) {
    this._s(":cap", v);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class GroupItems extends OxmlCompositeElement {
  static _Q = "x:groupItems";
  static _A = [":count"];
  /** Items Created Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class DiscreteProperties extends OxmlCompositeElement {
  static _Q = "x:discretePr";
  static _A = [":count"];
  /** Mapping Index Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RangeProperties extends OxmlLeafElement {
  static _Q = "x:rangePr";
  static _A = [":autoStart", ":autoEnd", ":groupBy", ":startNum", ":endNum", ":startDate", ":endDate", ":groupInterval"];
  /** Source Data Set Beginning Range. Serialized as `:autoStart` */
  get autoStart() {
    return this._g(":autoStart");
  }
  set autoStart(v) {
    this._s(":autoStart", v);
  }
  /** Source Data Ending Range. Serialized as `:autoEnd` */
  get autoEnd() {
    return this._g(":autoEnd");
  }
  set autoEnd(v) {
    this._s(":autoEnd", v);
  }
  /** Group By. Serialized as `:groupBy` */
  get groupBy() {
    return this._g(":groupBy");
  }
  set groupBy(v) {
    this._s(":groupBy", v);
  }
  /** Numeric Grouping Start Value. Serialized as `:startNum` */
  get startNumber() {
    return this._g(":startNum");
  }
  set startNumber(v) {
    this._s(":startNum", v);
  }
  /** Numeric Grouping End Value. Serialized as `:endNum` */
  get endNum() {
    return this._g(":endNum");
  }
  set endNum(v) {
    this._s(":endNum", v);
  }
  /** Date Grouping Start Value. Serialized as `:startDate` */
  get startDate() {
    return this._g(":startDate");
  }
  set startDate(v) {
    this._s(":startDate", v);
  }
  /** Date Grouping End Value. Serialized as `:endDate` */
  get endDate() {
    return this._g(":endDate");
  }
  set endDate(v) {
    this._s(":endDate", v);
  }
  /** Grouping Interval. Serialized as `:groupInterval` */
  get groupInterval() {
    return this._g(":groupInterval");
  }
  set groupInterval(v) {
    this._s(":groupInterval", v);
  }
}
class CacheHierarchy extends OxmlCompositeElement {
  static _Q = "x:cacheHierarchy";
  static _A = [":uniqueName", ":caption", ":measure", ":set", ":parentSet", ":iconSet", ":attribute", ":time", ":keyAttribute", ":defaultMemberUniqueName", ":allUniqueName", ":allCaption", ":dimensionUniqueName", ":displayFolder", ":measureGroup", ":measures", ":count", ":oneField", ":memberValueDatatype", ":unbalanced", ":unbalancedGroup", ":hidden"];
  /** uniqueName. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** caption. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** measure. Serialized as `:measure` */
  get measure() {
    return this._g(":measure");
  }
  set measure(v) {
    this._s(":measure", v);
  }
  /** set. Serialized as `:set` */
  get set() {
    return this._g(":set");
  }
  set set(v) {
    this._s(":set", v);
  }
  /** parentSet. Serialized as `:parentSet` */
  get parentSet() {
    return this._g(":parentSet");
  }
  set parentSet(v) {
    this._s(":parentSet", v);
  }
  /** iconSet. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** attribute. Serialized as `:attribute` */
  get attribute() {
    return this._g(":attribute");
  }
  set attribute(v) {
    this._s(":attribute", v);
  }
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** keyAttribute. Serialized as `:keyAttribute` */
  get keyAttribute() {
    return this._g(":keyAttribute");
  }
  set keyAttribute(v) {
    this._s(":keyAttribute", v);
  }
  /** defaultMemberUniqueName. Serialized as `:defaultMemberUniqueName` */
  get defaultMemberUniqueName() {
    return this._g(":defaultMemberUniqueName");
  }
  set defaultMemberUniqueName(v) {
    this._s(":defaultMemberUniqueName", v);
  }
  /** allUniqueName. Serialized as `:allUniqueName` */
  get allUniqueName() {
    return this._g(":allUniqueName");
  }
  set allUniqueName(v) {
    this._s(":allUniqueName", v);
  }
  /** allCaption. Serialized as `:allCaption` */
  get allCaption() {
    return this._g(":allCaption");
  }
  set allCaption(v) {
    this._s(":allCaption", v);
  }
  /** dimensionUniqueName. Serialized as `:dimensionUniqueName` */
  get dimensionUniqueName() {
    return this._g(":dimensionUniqueName");
  }
  set dimensionUniqueName(v) {
    this._s(":dimensionUniqueName", v);
  }
  /** displayFolder. Serialized as `:displayFolder` */
  get displayFolder() {
    return this._g(":displayFolder");
  }
  set displayFolder(v) {
    this._s(":displayFolder", v);
  }
  /** measureGroup. Serialized as `:measureGroup` */
  get measureGroup() {
    return this._g(":measureGroup");
  }
  set measureGroup(v) {
    this._s(":measureGroup", v);
  }
  /** measures. Serialized as `:measures` */
  get measures() {
    return this._g(":measures");
  }
  set measures(v) {
    this._s(":measures", v);
  }
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** oneField. Serialized as `:oneField` */
  get oneField() {
    return this._g(":oneField");
  }
  set oneField(v) {
    this._s(":oneField", v);
  }
  /** memberValueDatatype. Serialized as `:memberValueDatatype` */
  get memberValueDatatype() {
    return this._g(":memberValueDatatype");
  }
  set memberValueDatatype(v) {
    this._s(":memberValueDatatype", v);
  }
  /** unbalanced. Serialized as `:unbalanced` */
  get unbalanced() {
    return this._g(":unbalanced");
  }
  set unbalanced(v) {
    this._s(":unbalanced", v);
  }
  /** unbalancedGroup. Serialized as `:unbalancedGroup` */
  get unbalancedGroup() {
    return this._g(":unbalancedGroup");
  }
  set unbalancedGroup(v) {
    this._s(":unbalancedGroup", v);
  }
  /** hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Returns FieldsUsage. */
  get fieldsUsage() {
    return this._f(FieldsUsage);
  }
  /** Returns GroupLevels. */
  get groupLevels() {
    return this._f(GroupLevels);
  }
  /** Returns CacheHierarchyExtensionList. */
  get cacheHierarchyExtensionList() {
    return this._f(CacheHierarchyExtensionList);
  }
}
class PivotFilter extends OxmlCompositeElement {
  static _Q = "x:filter";
  static _A = [":fld", ":mpFld", ":type", ":evalOrder", ":id", ":iMeasureHier", ":iMeasureFld", ":name", ":description", ":stringValue1", ":stringValue2"];
  /** fld. Serialized as `:fld` */
  get field() {
    return this._g(":fld");
  }
  set field(v) {
    this._s(":fld", v);
  }
  /** mpFld. Serialized as `:mpFld` */
  get memberPropertyFieldId() {
    return this._g(":mpFld");
  }
  set memberPropertyFieldId(v) {
    this._s(":mpFld", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** evalOrder. Serialized as `:evalOrder` */
  get evaluationOrder() {
    return this._g(":evalOrder");
  }
  set evaluationOrder(v) {
    this._s(":evalOrder", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** iMeasureHier. Serialized as `:iMeasureHier` */
  get measureHierarchy() {
    return this._g(":iMeasureHier");
  }
  set measureHierarchy(v) {
    this._s(":iMeasureHier", v);
  }
  /** iMeasureFld. Serialized as `:iMeasureFld` */
  get measureField() {
    return this._g(":iMeasureFld");
  }
  set measureField(v) {
    this._s(":iMeasureFld", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** stringValue1. Serialized as `:stringValue1` */
  get stringValue1() {
    return this._g(":stringValue1");
  }
  set stringValue1(v) {
    this._s(":stringValue1", v);
  }
  /** stringValue2. Serialized as `:stringValue2` */
  get stringValue2() {
    return this._g(":stringValue2");
  }
  set stringValue2(v) {
    this._s(":stringValue2", v);
  }
  /** Returns AutoFilter. */
  get autoFilter() {
    return this._f(AutoFilter);
  }
  /** Returns PivotFilterExtensionList. */
  get pivotFilterExtensionList() {
    return this._f(PivotFilterExtensionList);
  }
}
class MeasureDimensionMap extends OxmlLeafElement {
  static _Q = "x:map";
  static _A = [":measureGroup", ":dimension"];
  /** Measure Group Id. Serialized as `:measureGroup` */
  get measureGroup() {
    return this._g(":measureGroup");
  }
  set measureGroup(v) {
    this._s(":measureGroup", v);
  }
  /** Dimension Id. Serialized as `:dimension` */
  get dimension() {
    return this._g(":dimension");
  }
  set dimension(v) {
    this._s(":dimension", v);
  }
}
class MeasureGroup extends OxmlLeafElement {
  static _Q = "x:measureGroup";
  static _A = [":name", ":caption"];
  /** Measure Group Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Measure Group Display Name. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
}
class Dimension extends OxmlLeafElement {
  static _Q = "x:dimension";
  static _A = [":measure", ":name", ":uniqueName", ":caption"];
  /** Measure. Serialized as `:measure` */
  get measure() {
    return this._g(":measure");
  }
  set measure(v) {
    this._s(":measure", v);
  }
  /** Dimension Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Dimension Unique Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** Dimension Display Name. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
}
class Member extends OxmlLeafElement {
  static _Q = "x:member";
  static _A = [":name"];
  /** Hidden Item Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class MemberProperty extends OxmlLeafElement {
  static _Q = "x:mp";
  static _A = [":name", ":showCell", ":showTip", ":showAsCaption", ":nameLen", ":pPos", ":pLen", ":level", ":field"];
  /** OLAP Member Property Unique Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Show Cell. Serialized as `:showCell` */
  get showCell() {
    return this._g(":showCell");
  }
  set showCell(v) {
    this._s(":showCell", v);
  }
  /** Show Tooltip. Serialized as `:showTip` */
  get showTip() {
    return this._g(":showTip");
  }
  set showTip(v) {
    this._s(":showTip", v);
  }
  /** Show As Caption. Serialized as `:showAsCaption` */
  get showAsCaption() {
    return this._g(":showAsCaption");
  }
  set showAsCaption(v) {
    this._s(":showAsCaption", v);
  }
  /** Name Length. Serialized as `:nameLen` */
  get nameLength() {
    return this._g(":nameLen");
  }
  set nameLength(v) {
    this._s(":nameLen", v);
  }
  /** Property Name Character Index. Serialized as `:pPos` */
  get propertyNamePosition() {
    return this._g(":pPos");
  }
  set propertyNamePosition(v) {
    this._s(":pPos", v);
  }
  /** Property Name Length. Serialized as `:pLen` */
  get propertyNameLength() {
    return this._g(":pLen");
  }
  set propertyNameLength(v) {
    this._s(":pLen", v);
  }
  /** Level Index. Serialized as `:level` */
  get level() {
    return this._g(":level");
  }
  set level(v) {
    this._s(":level", v);
  }
  /** Field Index. Serialized as `:field` */
  get field() {
    return this._g(":field");
  }
  set field(v) {
    this._s(":field", v);
  }
}
class HierarchyUsageType extends OxmlLeafElement {
  static _A = [":hierarchyUsage"];
  /** Hierarchy Usage. Serialized as `:hierarchyUsage` */
  get value() {
    return this._g(":hierarchyUsage");
  }
  set value(v) {
    this._s(":hierarchyUsage", v);
  }
}
class ColumnHierarchyUsage extends HierarchyUsageType {
  static _Q = "x:colHierarchyUsage";
}
class RowHierarchyUsage extends HierarchyUsageType {
  static _Q = "x:rowHierarchyUsage";
}
class PivotHierarchy extends OxmlCompositeElement {
  static _Q = "x:pivotHierarchy";
  static _A = [":outline", ":multipleItemSelectionAllowed", ":subtotalTop", ":showInFieldList", ":dragToRow", ":dragToCol", ":dragToPage", ":dragToData", ":dragOff", ":includeNewItemsInFilter", ":caption"];
  /** Outline New Levels. Serialized as `:outline` */
  get outline() {
    return this._g(":outline");
  }
  set outline(v) {
    this._s(":outline", v);
  }
  /** Multiple Field Filters. Serialized as `:multipleItemSelectionAllowed` */
  get multipleItemSelectionAllowed() {
    return this._g(":multipleItemSelectionAllowed");
  }
  set multipleItemSelectionAllowed(v) {
    this._s(":multipleItemSelectionAllowed", v);
  }
  /** New Levels Subtotals At Top. Serialized as `:subtotalTop` */
  get subtotalTop() {
    return this._g(":subtotalTop");
  }
  set subtotalTop(v) {
    this._s(":subtotalTop", v);
  }
  /** Show In Field List. Serialized as `:showInFieldList` */
  get showInFieldList() {
    return this._g(":showInFieldList");
  }
  set showInFieldList(v) {
    this._s(":showInFieldList", v);
  }
  /** Drag To Row. Serialized as `:dragToRow` */
  get dragToRow() {
    return this._g(":dragToRow");
  }
  set dragToRow(v) {
    this._s(":dragToRow", v);
  }
  /** Drag To Column. Serialized as `:dragToCol` */
  get dragToColumn() {
    return this._g(":dragToCol");
  }
  set dragToColumn(v) {
    this._s(":dragToCol", v);
  }
  /** Drag to Page. Serialized as `:dragToPage` */
  get dragToPage() {
    return this._g(":dragToPage");
  }
  set dragToPage(v) {
    this._s(":dragToPage", v);
  }
  /** Drag To Data. Serialized as `:dragToData` */
  get dragToData() {
    return this._g(":dragToData");
  }
  set dragToData(v) {
    this._s(":dragToData", v);
  }
  /** Drag Off. Serialized as `:dragOff` */
  get dragOff() {
    return this._g(":dragOff");
  }
  set dragOff(v) {
    this._s(":dragOff", v);
  }
  /** Inclusive Manual Filter. Serialized as `:includeNewItemsInFilter` */
  get includeNewItemsInFilter() {
    return this._g(":includeNewItemsInFilter");
  }
  set includeNewItemsInFilter(v) {
    this._s(":includeNewItemsInFilter", v);
  }
  /** Hierarchy Caption. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** OLAP Member Properties. */
  get memberProperties() {
    return this._f(MemberProperties);
  }
}
class ChartFormat extends OxmlCompositeElement {
  static _Q = "x:chartFormat";
  static _A = [":chart", ":format", ":series"];
  /** Chart Index. Serialized as `:chart` */
  get chart() {
    return this._g(":chart");
  }
  set chart(v) {
    this._s(":chart", v);
  }
  /** Pivot Format Id. Serialized as `:format` */
  get format() {
    return this._g(":format");
  }
  set format(v) {
    this._s(":format", v);
  }
  /** Series Format. Serialized as `:series` */
  get series() {
    return this._g(":series");
  }
  set series(v) {
    this._s(":series", v);
  }
  /** Pivot Table Location Rule. */
  get pivotArea() {
    return this._f(PivotArea);
  }
}
class PivotAreas extends OxmlCompositeElement {
  static _Q = "x:pivotAreas";
  static _A = [":count"];
  /** Pivot Area Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ConditionalFormat extends OxmlCompositeElement {
  static _Q = "x:conditionalFormat";
  static _A = [":scope", ":type", ":priority"];
  /** Conditional Formatting Scope. Serialized as `:scope` */
  get scope() {
    return this._g(":scope");
  }
  set scope(v) {
    this._s(":scope", v);
  }
  /** Conditional Formatting Rule Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Priority. Serialized as `:priority` */
  get priority() {
    return this._g(":priority");
  }
  set priority(v) {
    this._s(":priority", v);
  }
  /** Pivot Areas. */
  get pivotAreas() {
    return this._f(PivotAreas);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Format extends OxmlCompositeElement {
  static _Q = "x:format";
  static _A = [":action", ":dxfId"];
  /** Format Action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
  /** Format Id. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
  /** Pivot Table Location. */
  get pivotArea() {
    return this._f(PivotArea);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Field extends OxmlLeafElement {
  static _Q = "x:field";
  static _A = [":x"];
  /** Field Index. Serialized as `:x` */
  get index() {
    return this._g(":x");
  }
  set index(v) {
    this._s(":x", v);
  }
}
class RowItem extends OxmlCompositeElement {
  static _Q = "x:i";
  static _A = [":t", ":r", ":i"];
  /** Item Type. Serialized as `:t` */
  get itemType() {
    return this._g(":t");
  }
  set itemType(v) {
    this._s(":t", v);
  }
  /** Repeated Items Count. Serialized as `:r` */
  get repeatedItemCount() {
    return this._g(":r");
  }
  set repeatedItemCount(v) {
    this._s(":r", v);
  }
  /** Data Field Index. Serialized as `:i` */
  get index() {
    return this._g(":i");
  }
  set index(v) {
    this._s(":i", v);
  }
}
class DataField extends OxmlCompositeElement {
  static _Q = "x:dataField";
  static _A = [":name", ":fld", ":subtotal", ":showDataAs", ":baseField", ":baseItem", ":numFmtId"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** fld. Serialized as `:fld` */
  get field() {
    return this._g(":fld");
  }
  set field(v) {
    this._s(":fld", v);
  }
  /** subtotal. Serialized as `:subtotal` */
  get subtotal() {
    return this._g(":subtotal");
  }
  set subtotal(v) {
    this._s(":subtotal", v);
  }
  /** showDataAs. Serialized as `:showDataAs` */
  get showDataAs() {
    return this._g(":showDataAs");
  }
  set showDataAs(v) {
    this._s(":showDataAs", v);
  }
  /** baseField. Serialized as `:baseField` */
  get baseField() {
    return this._g(":baseField");
  }
  set baseField(v) {
    this._s(":baseField", v);
  }
  /** baseItem. Serialized as `:baseItem` */
  get baseItem() {
    return this._g(":baseItem");
  }
  set baseItem(v) {
    this._s(":baseItem", v);
  }
  /** numFmtId. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
  /** Returns DataFieldExtensionList. */
  get dataFieldExtensionList() {
    return this._f(DataFieldExtensionList);
  }
}
class Item extends OxmlLeafElement {
  static _Q = "x:item";
  static _A = [":n", ":t", ":h", ":s", ":sd", ":f", ":m", ":c", ":x", ":d", ":e"];
  /** Item User Caption. Serialized as `:n` */
  get itemName() {
    return this._g(":n");
  }
  set itemName(v) {
    this._s(":n", v);
  }
  /** Item Type. Serialized as `:t` */
  get itemType() {
    return this._g(":t");
  }
  set itemType(v) {
    this._s(":t", v);
  }
  /** Hidden. Serialized as `:h` */
  get hidden() {
    return this._g(":h");
  }
  set hidden(v) {
    this._s(":h", v);
  }
  /** Character. Serialized as `:s` */
  get hasStringVlue() {
    return this._g(":s");
  }
  set hasStringVlue(v) {
    this._s(":s", v);
  }
  /** Hide Details. Serialized as `:sd` */
  get hideDetails() {
    return this._g(":sd");
  }
  set hideDetails(v) {
    this._s(":sd", v);
  }
  /** Calculated Member. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Missing. Serialized as `:m` */
  get missing() {
    return this._g(":m");
  }
  set missing(v) {
    this._s(":m", v);
  }
  /** Child Items. Serialized as `:c` */
  get childItems() {
    return this._g(":c");
  }
  set childItems(v) {
    this._s(":c", v);
  }
  /** Item Index. Serialized as `:x` */
  get index() {
    return this._g(":x");
  }
  set index(v) {
    this._s(":x", v);
  }
  /** Expanded. Serialized as `:d` */
  get expanded() {
    return this._g(":d");
  }
  set expanded(v) {
    this._s(":d", v);
  }
  /** Drill Across Attributes. Serialized as `:e` */
  get drillAcrossAttributes() {
    return this._g(":e");
  }
  set drillAcrossAttributes(v) {
    this._s(":e", v);
  }
}
class PivotField extends OxmlCompositeElement {
  static _Q = "x:pivotField";
  static _A = [":name", ":axis", ":dataField", ":subtotalCaption", ":showDropDowns", ":hiddenLevel", ":uniqueMemberProperty", ":compact", ":allDrilled", ":numFmtId", ":outline", ":subtotalTop", ":dragToRow", ":dragToCol", ":multipleItemSelectionAllowed", ":dragToPage", ":dragToData", ":dragOff", ":showAll", ":insertBlankRow", ":serverField", ":insertPageBreak", ":autoShow", ":topAutoShow", ":hideNewItems", ":measureFilter", ":includeNewItemsInFilter", ":itemPageCount", ":sortType", ":dataSourceSort", ":nonAutoSortDefault", ":rankBy", ":defaultSubtotal", ":sumSubtotal", ":countASubtotal", ":avgSubtotal", ":maxSubtotal", ":minSubtotal", ":productSubtotal", ":countSubtotal", ":stdDevSubtotal", ":stdDevPSubtotal", ":varSubtotal", ":varPSubtotal", ":showPropCell", ":showPropTip", ":showPropAsCaption", ":defaultAttributeDrillState"];
  /** Field Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Axis. Serialized as `:axis` */
  get axis() {
    return this._g(":axis");
  }
  set axis(v) {
    this._s(":axis", v);
  }
  /** Data Field. Serialized as `:dataField` */
  get dataField() {
    return this._g(":dataField");
  }
  set dataField(v) {
    this._s(":dataField", v);
  }
  /** Custom Subtotal Caption. Serialized as `:subtotalCaption` */
  get subtotalCaption() {
    return this._g(":subtotalCaption");
  }
  set subtotalCaption(v) {
    this._s(":subtotalCaption", v);
  }
  /** Show PivotField Header Drop Downs. Serialized as `:showDropDowns` */
  get showDropDowns() {
    return this._g(":showDropDowns");
  }
  set showDropDowns(v) {
    this._s(":showDropDowns", v);
  }
  /** Hidden Level. Serialized as `:hiddenLevel` */
  get hiddenLevel() {
    return this._g(":hiddenLevel");
  }
  set hiddenLevel(v) {
    this._s(":hiddenLevel", v);
  }
  /** Unique Member Property. Serialized as `:uniqueMemberProperty` */
  get uniqueMemberProperty() {
    return this._g(":uniqueMemberProperty");
  }
  set uniqueMemberProperty(v) {
    this._s(":uniqueMemberProperty", v);
  }
  /** Compact. Serialized as `:compact` */
  get compact() {
    return this._g(":compact");
  }
  set compact(v) {
    this._s(":compact", v);
  }
  /** All Items Expanded. Serialized as `:allDrilled` */
  get allDrilled() {
    return this._g(":allDrilled");
  }
  set allDrilled(v) {
    this._s(":allDrilled", v);
  }
  /** Number Format Id. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
  /** Outline Items. Serialized as `:outline` */
  get outline() {
    return this._g(":outline");
  }
  set outline(v) {
    this._s(":outline", v);
  }
  /** Subtotals At Top. Serialized as `:subtotalTop` */
  get subtotalTop() {
    return this._g(":subtotalTop");
  }
  set subtotalTop(v) {
    this._s(":subtotalTop", v);
  }
  /** Drag To Row. Serialized as `:dragToRow` */
  get dragToRow() {
    return this._g(":dragToRow");
  }
  set dragToRow(v) {
    this._s(":dragToRow", v);
  }
  /** Drag To Column. Serialized as `:dragToCol` */
  get dragToColumn() {
    return this._g(":dragToCol");
  }
  set dragToColumn(v) {
    this._s(":dragToCol", v);
  }
  /** Multiple Field Filters. Serialized as `:multipleItemSelectionAllowed` */
  get multipleItemSelectionAllowed() {
    return this._g(":multipleItemSelectionAllowed");
  }
  set multipleItemSelectionAllowed(v) {
    this._s(":multipleItemSelectionAllowed", v);
  }
  /** Drag Field to Page. Serialized as `:dragToPage` */
  get dragToPage() {
    return this._g(":dragToPage");
  }
  set dragToPage(v) {
    this._s(":dragToPage", v);
  }
  /** Field Can Drag to Data. Serialized as `:dragToData` */
  get dragToData() {
    return this._g(":dragToData");
  }
  set dragToData(v) {
    this._s(":dragToData", v);
  }
  /** Drag Off. Serialized as `:dragOff` */
  get dragOff() {
    return this._g(":dragOff");
  }
  set dragOff(v) {
    this._s(":dragOff", v);
  }
  /** Show All Items. Serialized as `:showAll` */
  get showAll() {
    return this._g(":showAll");
  }
  set showAll(v) {
    this._s(":showAll", v);
  }
  /** Insert Blank Row. Serialized as `:insertBlankRow` */
  get insertBlankRow() {
    return this._g(":insertBlankRow");
  }
  set insertBlankRow(v) {
    this._s(":insertBlankRow", v);
  }
  /** Server-based Page Field. Serialized as `:serverField` */
  get serverField() {
    return this._g(":serverField");
  }
  set serverField(v) {
    this._s(":serverField", v);
  }
  /** Insert Item Page Break. Serialized as `:insertPageBreak` */
  get insertPageBreak() {
    return this._g(":insertPageBreak");
  }
  set insertPageBreak(v) {
    this._s(":insertPageBreak", v);
  }
  /** Auto Show. Serialized as `:autoShow` */
  get autoShow() {
    return this._g(":autoShow");
  }
  set autoShow(v) {
    this._s(":autoShow", v);
  }
  /** Top Auto Show. Serialized as `:topAutoShow` */
  get topAutoShow() {
    return this._g(":topAutoShow");
  }
  set topAutoShow(v) {
    this._s(":topAutoShow", v);
  }
  /** Hide New Items. Serialized as `:hideNewItems` */
  get hideNewItems() {
    return this._g(":hideNewItems");
  }
  set hideNewItems(v) {
    this._s(":hideNewItems", v);
  }
  /** Measure Filter. Serialized as `:measureFilter` */
  get measureFilter() {
    return this._g(":measureFilter");
  }
  set measureFilter(v) {
    this._s(":measureFilter", v);
  }
  /** Inclusive Manual Filter. Serialized as `:includeNewItemsInFilter` */
  get includeNewItemsInFilter() {
    return this._g(":includeNewItemsInFilter");
  }
  set includeNewItemsInFilter(v) {
    this._s(":includeNewItemsInFilter", v);
  }
  /** Items Per Page Count. Serialized as `:itemPageCount` */
  get itemPageCount() {
    return this._g(":itemPageCount");
  }
  set itemPageCount(v) {
    this._s(":itemPageCount", v);
  }
  /** Auto Sort Type. Serialized as `:sortType` */
  get sortType() {
    return this._g(":sortType");
  }
  set sortType(v) {
    this._s(":sortType", v);
  }
  /** Data Source Sort. Serialized as `:dataSourceSort` */
  get dataSourceSort() {
    return this._g(":dataSourceSort");
  }
  set dataSourceSort(v) {
    this._s(":dataSourceSort", v);
  }
  /** Auto Sort. Serialized as `:nonAutoSortDefault` */
  get nonAutoSortDefault() {
    return this._g(":nonAutoSortDefault");
  }
  set nonAutoSortDefault(v) {
    this._s(":nonAutoSortDefault", v);
  }
  /** Auto Show Rank By. Serialized as `:rankBy` */
  get rankBy() {
    return this._g(":rankBy");
  }
  set rankBy(v) {
    this._s(":rankBy", v);
  }
  /** Show Default Subtotal. Serialized as `:defaultSubtotal` */
  get defaultSubtotal() {
    return this._g(":defaultSubtotal");
  }
  set defaultSubtotal(v) {
    this._s(":defaultSubtotal", v);
  }
  /** Sum Subtotal. Serialized as `:sumSubtotal` */
  get sumSubtotal() {
    return this._g(":sumSubtotal");
  }
  set sumSubtotal(v) {
    this._s(":sumSubtotal", v);
  }
  /** CountA. Serialized as `:countASubtotal` */
  get countASubtotal() {
    return this._g(":countASubtotal");
  }
  set countASubtotal(v) {
    this._s(":countASubtotal", v);
  }
  /** Average. Serialized as `:avgSubtotal` */
  get averageSubTotal() {
    return this._g(":avgSubtotal");
  }
  set averageSubTotal(v) {
    this._s(":avgSubtotal", v);
  }
  /** Max Subtotal. Serialized as `:maxSubtotal` */
  get maxSubtotal() {
    return this._g(":maxSubtotal");
  }
  set maxSubtotal(v) {
    this._s(":maxSubtotal", v);
  }
  /** Min Subtotal. Serialized as `:minSubtotal` */
  get minSubtotal() {
    return this._g(":minSubtotal");
  }
  set minSubtotal(v) {
    this._s(":minSubtotal", v);
  }
  /** Product Subtotal. Serialized as `:productSubtotal` */
  get applyProductInSubtotal() {
    return this._g(":productSubtotal");
  }
  set applyProductInSubtotal(v) {
    this._s(":productSubtotal", v);
  }
  /** Count. Serialized as `:countSubtotal` */
  get countSubtotal() {
    return this._g(":countSubtotal");
  }
  set countSubtotal(v) {
    this._s(":countSubtotal", v);
  }
  /** StdDev Subtotal. Serialized as `:stdDevSubtotal` */
  get applyStandardDeviationInSubtotal() {
    return this._g(":stdDevSubtotal");
  }
  set applyStandardDeviationInSubtotal(v) {
    this._s(":stdDevSubtotal", v);
  }
  /** StdDevP Subtotal. Serialized as `:stdDevPSubtotal` */
  get applyStandardDeviationPInSubtotal() {
    return this._g(":stdDevPSubtotal");
  }
  set applyStandardDeviationPInSubtotal(v) {
    this._s(":stdDevPSubtotal", v);
  }
  /** Variance Subtotal. Serialized as `:varSubtotal` */
  get applyVarianceInSubtotal() {
    return this._g(":varSubtotal");
  }
  set applyVarianceInSubtotal(v) {
    this._s(":varSubtotal", v);
  }
  /** VarP Subtotal. Serialized as `:varPSubtotal` */
  get applyVariancePInSubtotal() {
    return this._g(":varPSubtotal");
  }
  set applyVariancePInSubtotal(v) {
    this._s(":varPSubtotal", v);
  }
  /** Show Member Property in Cell. Serialized as `:showPropCell` */
  get showPropCell() {
    return this._g(":showPropCell");
  }
  set showPropCell(v) {
    this._s(":showPropCell", v);
  }
  /** Show Member Property ToolTip. Serialized as `:showPropTip` */
  get showPropertyTooltip() {
    return this._g(":showPropTip");
  }
  set showPropertyTooltip(v) {
    this._s(":showPropTip", v);
  }
  /** Show As Caption. Serialized as `:showPropAsCaption` */
  get showPropAsCaption() {
    return this._g(":showPropAsCaption");
  }
  set showPropAsCaption(v) {
    this._s(":showPropAsCaption", v);
  }
  /** Drill State. Serialized as `:defaultAttributeDrillState` */
  get defaultAttributeDrillState() {
    return this._g(":defaultAttributeDrillState");
  }
  set defaultAttributeDrillState(v) {
    this._s(":defaultAttributeDrillState", v);
  }
  /** Field Items. */
  get items() {
    return this._f(Items);
  }
  /** AutoSort Scope. */
  get autoSortScope() {
    return this._f(AutoSortScope);
  }
  /** Future Feature Data Storage Area. */
  get pivotFieldExtensionList() {
    return this._f(PivotFieldExtensionList);
  }
}
class CalculatedMember extends OxmlCompositeElement {
  static _Q = "x:calculatedMember";
  static _A = [":name", ":mdx", ":memberName", ":hierarchy", ":parent", ":solveOrder", ":set"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** mdx. Serialized as `:mdx` */
  get mdx() {
    return this._g(":mdx");
  }
  set mdx(v) {
    this._s(":mdx", v);
  }
  /** memberName. Serialized as `:memberName` */
  get memberName() {
    return this._g(":memberName");
  }
  set memberName(v) {
    this._s(":memberName", v);
  }
  /** hierarchy. Serialized as `:hierarchy` */
  get hierarchy() {
    return this._g(":hierarchy");
  }
  set hierarchy(v) {
    this._s(":hierarchy", v);
  }
  /** parent. Serialized as `:parent` */
  get parentName() {
    return this._g(":parent");
  }
  set parentName(v) {
    this._s(":parent", v);
  }
  /** solveOrder. Serialized as `:solveOrder` */
  get solveOrder() {
    return this._g(":solveOrder");
  }
  set solveOrder(v) {
    this._s(":solveOrder", v);
  }
  /** set. Serialized as `:set` */
  get set() {
    return this._g(":set");
  }
  set set(v) {
    this._s(":set", v);
  }
  /** Returns CalculatedMemberExtensionList. */
  get calculatedMemberExtensionList() {
    return this._f(CalculatedMemberExtensionList);
  }
}
class PivotArea extends OxmlCompositeElement {
  static _Q = "x:pivotArea";
  static _A = [":field", ":type", ":dataOnly", ":labelOnly", ":grandRow", ":grandCol", ":cacheIndex", ":outline", ":offset", ":collapsedLevelsAreSubtotals", ":axis", ":fieldPosition"];
  /** Field Index. Serialized as `:field` */
  get field() {
    return this._g(":field");
  }
  set field(v) {
    this._s(":field", v);
  }
  /** Rule Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Data Only. Serialized as `:dataOnly` */
  get dataOnly() {
    return this._g(":dataOnly");
  }
  set dataOnly(v) {
    this._s(":dataOnly", v);
  }
  /** Labels Only. Serialized as `:labelOnly` */
  get labelOnly() {
    return this._g(":labelOnly");
  }
  set labelOnly(v) {
    this._s(":labelOnly", v);
  }
  /** Include Row Grand Total. Serialized as `:grandRow` */
  get grandRow() {
    return this._g(":grandRow");
  }
  set grandRow(v) {
    this._s(":grandRow", v);
  }
  /** Include Column Grand Total. Serialized as `:grandCol` */
  get grandColumn() {
    return this._g(":grandCol");
  }
  set grandColumn(v) {
    this._s(":grandCol", v);
  }
  /** Cache Index. Serialized as `:cacheIndex` */
  get cacheIndex() {
    return this._g(":cacheIndex");
  }
  set cacheIndex(v) {
    this._s(":cacheIndex", v);
  }
  /** Outline. Serialized as `:outline` */
  get outline() {
    return this._g(":outline");
  }
  set outline(v) {
    this._s(":outline", v);
  }
  /** Offset Reference. Serialized as `:offset` */
  get offset() {
    return this._g(":offset");
  }
  set offset(v) {
    this._s(":offset", v);
  }
  /** Collapsed Levels Are Subtotals. Serialized as `:collapsedLevelsAreSubtotals` */
  get collapsedLevelsAreSubtotals() {
    return this._g(":collapsedLevelsAreSubtotals");
  }
  set collapsedLevelsAreSubtotals(v) {
    this._s(":collapsedLevelsAreSubtotals", v);
  }
  /** Axis. Serialized as `:axis` */
  get axis() {
    return this._g(":axis");
  }
  set axis(v) {
    this._s(":axis", v);
  }
  /** Field Position. Serialized as `:fieldPosition` */
  get fieldPosition() {
    return this._g(":fieldPosition");
  }
  set fieldPosition(v) {
    this._s(":fieldPosition", v);
  }
  /** References. */
  get pivotAreaReferences() {
    return this._f(PivotAreaReferences);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CalculatedItem extends OxmlCompositeElement {
  static _Q = "x:calculatedItem";
  static _A = [":field", ":formula"];
  /** Field Index. Serialized as `:field` */
  get field() {
    return this._g(":field");
  }
  set field(v) {
    this._s(":field", v);
  }
  /** Calculated Item Formula. Serialized as `:formula` */
  get formula() {
    return this._g(":formula");
  }
  set formula(v) {
    this._s(":formula", v);
  }
  /** Calculated Item Location. */
  get pivotArea() {
    return this._f(PivotArea);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Query extends OxmlCompositeElement {
  static _Q = "x:query";
  static _A = [":mdx"];
  /** MDX Query String. Serialized as `:mdx` */
  get mdx() {
    return this._g(":mdx");
  }
  set mdx(v) {
    this._s(":mdx", v);
  }
  /** Tuples. */
  get tuples() {
    return this._f(Tuples);
  }
}
class TupleSet extends OxmlCompositeElement {
  static _Q = "x:set";
  static _A = [":count", ":maxRank", ":setDefinition", ":sortType", ":queryFailed"];
  /** Number of Tuples. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Maximum Rank Requested. Serialized as `:maxRank` */
  get maxRank() {
    return this._g(":maxRank");
  }
  set maxRank(v) {
    this._s(":maxRank", v);
  }
  /** MDX Set Definition. Serialized as `:setDefinition` */
  get setDefinition() {
    return this._g(":setDefinition");
  }
  set setDefinition(v) {
    this._s(":setDefinition", v);
  }
  /** Set Sort Order. Serialized as `:sortType` */
  get sortType() {
    return this._g(":sortType");
  }
  set sortType(v) {
    this._s(":sortType", v);
  }
  /** Query Failed. Serialized as `:queryFailed` */
  get queryFailed() {
    return this._g(":queryFailed");
  }
  set queryFailed(v) {
    this._s(":queryFailed", v);
  }
}
class Tuple extends OxmlLeafElement {
  static _Q = "x:tpl";
  static _A = [":fld", ":hier", ":item"];
  /** Field Index. Serialized as `:fld` */
  get field() {
    return this._g(":fld");
  }
  set field(v) {
    this._s(":fld", v);
  }
  /** Hierarchy Index. Serialized as `:hier` */
  get hierarchy() {
    return this._g(":hier");
  }
  set hierarchy(v) {
    this._s(":hier", v);
  }
  /** Item Index. Serialized as `:item` */
  get item() {
    return this._g(":item");
  }
  set item(v) {
    this._s(":item", v);
  }
}
class ServerFormat extends OxmlLeafElement {
  static _Q = "x:serverFormat";
  static _A = [":culture", ":format"];
  /** Culture. Serialized as `:culture` */
  get culture() {
    return this._g(":culture");
  }
  set culture(v) {
    this._s(":culture", v);
  }
  /** Format. Serialized as `:format` */
  get format() {
    return this._g(":format");
  }
  set format(v) {
    this._s(":format", v);
  }
}
class ServerFormats extends OxmlCompositeElement {
  static _Q = "x:serverFormats";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class QueryCache extends OxmlCompositeElement {
  static _Q = "x:queryCache";
  static _A = [":count"];
  /** Cached Query Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Sets extends OxmlCompositeElement {
  static _Q = "x:sets";
  static _A = [":count"];
  /** Tuple Set Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Entries extends OxmlCompositeElement {
  static _Q = "x:entries";
  static _A = [":count"];
  /** Tuple Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class GroupMember extends OxmlLeafElement {
  static _Q = "x:groupMember";
  static _A = [":uniqueName", ":group"];
  /** Group Member Unique Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** Group. Serialized as `:group` */
  get group() {
    return this._g(":group");
  }
  set group(v) {
    this._s(":group", v);
  }
}
class GroupMembers extends OxmlCompositeElement {
  static _Q = "x:groupMembers";
  static _A = [":count"];
  /** Group Member Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Group extends OxmlCompositeElement {
  static _Q = "x:group";
  static _A = [":name", ":uniqueName", ":caption", ":uniqueParent", ":id"];
  /** Group Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Unique Group Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** Group Caption. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** Parent Unique Name. Serialized as `:uniqueParent` */
  get uniqueParent() {
    return this._g(":uniqueParent");
  }
  set uniqueParent(v) {
    this._s(":uniqueParent", v);
  }
  /** Group Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** OLAP Group Members. */
  get groupMembers() {
    return this._f(GroupMembers);
  }
}
class Groups extends OxmlCompositeElement {
  static _Q = "x:groups";
  static _A = [":count"];
  /** Level Group Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class GroupLevel extends OxmlCompositeElement {
  static _Q = "x:groupLevel";
  static _A = [":uniqueName", ":caption", ":user", ":customRollUp"];
  /** Unique Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** Grouping Level Display Name. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** User-Defined Group Level. Serialized as `:user` */
  get user() {
    return this._g(":user");
  }
  set user(v) {
    this._s(":user", v);
  }
  /** Custom Roll Up. Serialized as `:customRollUp` */
  get customRollUp() {
    return this._g(":customRollUp");
  }
  set customRollUp(v) {
    this._s(":customRollUp", v);
  }
  /** OLAP Level Groups. */
  get groups() {
    return this._f(Groups);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class FieldUsage extends OxmlLeafElement {
  static _Q = "x:fieldUsage";
  static _A = [":x"];
  /** Field Index. Serialized as `:x` */
  get index() {
    return this._g(":x");
  }
  set index(v) {
    this._s(":x", v);
  }
}
class Kpi extends OxmlLeafElement {
  static _Q = "x:kpi";
  static _A = [":uniqueName", ":caption", ":displayFolder", ":measureGroup", ":parent", ":value", ":goal", ":status", ":trend", ":weight"];
  /** KPI Unique Name. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** KPI Display Name. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** KPI Display Folder. Serialized as `:displayFolder` */
  get displayFolder() {
    return this._g(":displayFolder");
  }
  set displayFolder(v) {
    this._s(":displayFolder", v);
  }
  /** KPI Measure Group Name. Serialized as `:measureGroup` */
  get measureGroup() {
    return this._g(":measureGroup");
  }
  set measureGroup(v) {
    this._s(":measureGroup", v);
  }
  /** Parent KPI. Serialized as `:parent` */
  get parentKpi() {
    return this._g(":parent");
  }
  set parentKpi(v) {
    this._s(":parent", v);
  }
  /** KPI Value Unique Name. Serialized as `:value` */
  get value() {
    return this._g(":value");
  }
  set value(v) {
    this._s(":value", v);
  }
  /** KPI Goal Unique Name. Serialized as `:goal` */
  get goal() {
    return this._g(":goal");
  }
  set goal(v) {
    this._s(":goal", v);
  }
  /** KPI Status Unique Name. Serialized as `:status` */
  get status() {
    return this._g(":status");
  }
  set status(v) {
    this._s(":status", v);
  }
  /** KPI Trend Unique Name. Serialized as `:trend` */
  get trend() {
    return this._g(":trend");
  }
  set trend(v) {
    this._s(":trend", v);
  }
  /** KPI Weight Unique Name. Serialized as `:weight` */
  get weight() {
    return this._g(":weight");
  }
  set weight(v) {
    this._s(":weight", v);
  }
}
class PivotCacheRecord extends OxmlCompositeElement {
  static _Q = "x:r";
}
class XType extends OxmlLeafElement {
  static _A = [":v"];
  /** Shared Items Index. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
}
class MemberPropertiesMap extends XType {
  static _Q = "x:mpMap";
}
class MemberPropertyIndex extends XType {
  static _Q = "x:x";
}
class TuplesType extends OxmlCompositeElement {
  static _A = [":c"];
  /** Member Name Count. Serialized as `:c` */
  get memberNameCount() {
    return this._g(":c");
  }
  set memberNameCount(v) {
    this._s(":c", v);
  }
}
class SortByTuple extends TuplesType {
  static _Q = "x:sortByTuple";
}
class Tuples extends TuplesType {
  static _Q = "x:tpls";
}
class DateTimeItem extends OxmlCompositeElement {
  static _Q = "x:d";
  static _A = [":v", ":u", ":f", ":c", ":cp"];
  /** Value. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
  /** Unused Item. Serialized as `:u` */
  get unused() {
    return this._g(":u");
  }
  set unused(v) {
    this._s(":u", v);
  }
  /** Calculated Item Value. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Caption. Serialized as `:c` */
  get caption() {
    return this._g(":c");
  }
  set caption(v) {
    this._s(":c", v);
  }
  /** Member Property Count. Serialized as `:cp` */
  get propertyCount() {
    return this._g(":cp");
  }
  set propertyCount(v) {
    this._s(":cp", v);
  }
}
class StringItem extends OxmlCompositeElement {
  static _Q = "x:s";
  static _A = [":v", ":u", ":f", ":c", ":cp", ":in", ":bc", ":fc", ":i", ":un", ":st", ":b"];
  /** Value. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
  /** Unused Item. Serialized as `:u` */
  get unused() {
    return this._g(":u");
  }
  set unused(v) {
    this._s(":u", v);
  }
  /** Calculated Item. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Item Caption. Serialized as `:c` */
  get caption() {
    return this._g(":c");
  }
  set caption(v) {
    this._s(":c", v);
  }
  /** Member Property Count. Serialized as `:cp` */
  get propertyCount() {
    return this._g(":cp");
  }
  set propertyCount(v) {
    this._s(":cp", v);
  }
  /** Format Index. Serialized as `:in` */
  get formatIndex() {
    return this._g(":in");
  }
  set formatIndex(v) {
    this._s(":in", v);
  }
  /** Background Color. Serialized as `:bc` */
  get backgroundColor() {
    return this._g(":bc");
  }
  set backgroundColor(v) {
    this._s(":bc", v);
  }
  /** Foreground Color. Serialized as `:fc` */
  get foregroundColor() {
    return this._g(":fc");
  }
  set foregroundColor(v) {
    this._s(":fc", v);
  }
  /** Italic. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** Underline. Serialized as `:un` */
  get underline() {
    return this._g(":un");
  }
  set underline(v) {
    this._s(":un", v);
  }
  /** Strikethrough. Serialized as `:st` */
  get strikethrough() {
    return this._g(":st");
  }
  set strikethrough(v) {
    this._s(":st", v);
  }
  /** Bold. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
}
class ErrorItem extends OxmlCompositeElement {
  static _Q = "x:e";
  static _A = [":v", ":u", ":f", ":c", ":cp", ":in", ":bc", ":fc", ":i", ":un", ":st", ":b"];
  /** Value. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
  /** Unused Item. Serialized as `:u` */
  get unused() {
    return this._g(":u");
  }
  set unused(v) {
    this._s(":u", v);
  }
  /** Calculated Item. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Item Caption. Serialized as `:c` */
  get caption() {
    return this._g(":c");
  }
  set caption(v) {
    this._s(":c", v);
  }
  /** Member Property Count. Serialized as `:cp` */
  get propertyCount() {
    return this._g(":cp");
  }
  set propertyCount(v) {
    this._s(":cp", v);
  }
  /** Format Index. Serialized as `:in` */
  get formatIndex() {
    return this._g(":in");
  }
  set formatIndex(v) {
    this._s(":in", v);
  }
  /** background Color. Serialized as `:bc` */
  get backgroundColor() {
    return this._g(":bc");
  }
  set backgroundColor(v) {
    this._s(":bc", v);
  }
  /** Foreground Color. Serialized as `:fc` */
  get foregroundColor() {
    return this._g(":fc");
  }
  set foregroundColor(v) {
    this._s(":fc", v);
  }
  /** Italic. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** Underline. Serialized as `:un` */
  get underline() {
    return this._g(":un");
  }
  set underline(v) {
    this._s(":un", v);
  }
  /** Strikethrough. Serialized as `:st` */
  get strikethrough() {
    return this._g(":st");
  }
  set strikethrough(v) {
    this._s(":st", v);
  }
  /** Bold. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
  /** Tuples. */
  get tuples() {
    return this._f(Tuples);
  }
}
class BooleanItem extends OxmlCompositeElement {
  static _Q = "x:b";
  static _A = [":v", ":u", ":f", ":c", ":cp"];
  /** Value. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
  /** Unused Item. Serialized as `:u` */
  get unused() {
    return this._g(":u");
  }
  set unused(v) {
    this._s(":u", v);
  }
  /** Calculated Item. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Caption. Serialized as `:c` */
  get caption() {
    return this._g(":c");
  }
  set caption(v) {
    this._s(":c", v);
  }
  /** Member Property Count. Serialized as `:cp` */
  get propertyCount() {
    return this._g(":cp");
  }
  set propertyCount(v) {
    this._s(":cp", v);
  }
}
class NumberItem extends OxmlCompositeElement {
  static _Q = "x:n";
  static _A = [":v", ":u", ":f", ":c", ":cp", ":in", ":bc", ":fc", ":i", ":un", ":st", ":b"];
  /** Value. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
  /** Unused Item. Serialized as `:u` */
  get unused() {
    return this._g(":u");
  }
  set unused(v) {
    this._s(":u", v);
  }
  /** Calculated Item. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Caption. Serialized as `:c` */
  get caption() {
    return this._g(":c");
  }
  set caption(v) {
    this._s(":c", v);
  }
  /** Member Property Count. Serialized as `:cp` */
  get propertyCount() {
    return this._g(":cp");
  }
  set propertyCount(v) {
    this._s(":cp", v);
  }
  /** Format Index. Serialized as `:in` */
  get formatIndex() {
    return this._g(":in");
  }
  set formatIndex(v) {
    this._s(":in", v);
  }
  /** Background Color. Serialized as `:bc` */
  get backgroundColor() {
    return this._g(":bc");
  }
  set backgroundColor(v) {
    this._s(":bc", v);
  }
  /** Foreground Color. Serialized as `:fc` */
  get foregroundColor() {
    return this._g(":fc");
  }
  set foregroundColor(v) {
    this._s(":fc", v);
  }
  /** Italic. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** Underline. Serialized as `:un` */
  get underline() {
    return this._g(":un");
  }
  set underline(v) {
    this._s(":un", v);
  }
  /** Strikethrough. Serialized as `:st` */
  get strikethrough() {
    return this._g(":st");
  }
  set strikethrough(v) {
    this._s(":st", v);
  }
  /** Bold. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
}
class MissingItem extends OxmlCompositeElement {
  static _Q = "x:m";
  static _A = [":u", ":f", ":c", ":cp", ":in", ":bc", ":fc", ":i", ":un", ":st", ":b"];
  /** Unused Item. Serialized as `:u` */
  get unused() {
    return this._g(":u");
  }
  set unused(v) {
    this._s(":u", v);
  }
  /** Calculated Item. Serialized as `:f` */
  get calculated() {
    return this._g(":f");
  }
  set calculated(v) {
    this._s(":f", v);
  }
  /** Caption. Serialized as `:c` */
  get caption() {
    return this._g(":c");
  }
  set caption(v) {
    this._s(":c", v);
  }
  /** Member Property Count. Serialized as `:cp` */
  get propertyCount() {
    return this._g(":cp");
  }
  set propertyCount(v) {
    this._s(":cp", v);
  }
  /** Format Index. Serialized as `:in` */
  get formatIndex() {
    return this._g(":in");
  }
  set formatIndex(v) {
    this._s(":in", v);
  }
  /** background Color. Serialized as `:bc` */
  get backgroundColor() {
    return this._g(":bc");
  }
  set backgroundColor(v) {
    this._s(":bc", v);
  }
  /** Foreground Color. Serialized as `:fc` */
  get foregroundColor() {
    return this._g(":fc");
  }
  set foregroundColor(v) {
    this._s(":fc", v);
  }
  /** Italic. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** Underline. Serialized as `:un` */
  get underline() {
    return this._g(":un");
  }
  set underline(v) {
    this._s(":un", v);
  }
  /** Strikethrough. Serialized as `:st` */
  get strikethrough() {
    return this._g(":st");
  }
  set strikethrough(v) {
    this._s(":st", v);
  }
  /** Bold. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
}
class RangeSet extends OxmlLeafElement {
  static _Q = "x:rangeSet";
  static _A = [":i1", ":i2", ":i3", ":i4", ":ref", ":name", ":sheet", "r:id"];
  /** Field Item Index Page 1. Serialized as `:i1` */
  get fieldItemIndexPage1() {
    return this._g(":i1");
  }
  set fieldItemIndexPage1(v) {
    this._s(":i1", v);
  }
  /** Field Item Index Page 2. Serialized as `:i2` */
  get fieldItemIndexPage2() {
    return this._g(":i2");
  }
  set fieldItemIndexPage2(v) {
    this._s(":i2", v);
  }
  /** Field Item index Page 3. Serialized as `:i3` */
  get fieldItemIndexPage3() {
    return this._g(":i3");
  }
  set fieldItemIndexPage3(v) {
    this._s(":i3", v);
  }
  /** Field Item Index Page 4. Serialized as `:i4` */
  get fieldItemIndexPage4() {
    return this._g(":i4");
  }
  set fieldItemIndexPage4(v) {
    this._s(":i4", v);
  }
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Named Range. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Sheet Name. Serialized as `:sheet` */
  get sheet() {
    return this._g(":sheet");
  }
  set sheet(v) {
    this._s(":sheet", v);
  }
  /** Relationship Id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class PageItem extends OxmlLeafElement {
  static _Q = "x:pageItem";
  static _A = [":name"];
  /** Page Item Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class Page extends OxmlCompositeElement {
  static _Q = "x:page";
  static _A = [":count"];
  /** Page Item String Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class RangeSets extends OxmlCompositeElement {
  static _Q = "x:rangeSets";
  static _A = [":count"];
  /** Reference and Page Item Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Pages extends OxmlCompositeElement {
  static _Q = "x:pages";
  static _A = [":count"];
  /** Page Item String Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class CacheField extends OxmlCompositeElement {
  static _Q = "x:cacheField";
  static _A = [":name", ":caption", ":propertyName", ":serverField", ":uniqueList", ":numFmtId", ":formula", ":sqlType", ":hierarchy", ":level", ":databaseField", ":mappingCount", ":memberPropertyField"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** caption. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** propertyName. Serialized as `:propertyName` */
  get propertyName() {
    return this._g(":propertyName");
  }
  set propertyName(v) {
    this._s(":propertyName", v);
  }
  /** serverField. Serialized as `:serverField` */
  get serverField() {
    return this._g(":serverField");
  }
  set serverField(v) {
    this._s(":serverField", v);
  }
  /** uniqueList. Serialized as `:uniqueList` */
  get uniqueList() {
    return this._g(":uniqueList");
  }
  set uniqueList(v) {
    this._s(":uniqueList", v);
  }
  /** numFmtId. Serialized as `:numFmtId` */
  get numberFormatId() {
    return this._g(":numFmtId");
  }
  set numberFormatId(v) {
    this._s(":numFmtId", v);
  }
  /** formula. Serialized as `:formula` */
  get formula() {
    return this._g(":formula");
  }
  set formula(v) {
    this._s(":formula", v);
  }
  /** sqlType. Serialized as `:sqlType` */
  get sqlType() {
    return this._g(":sqlType");
  }
  set sqlType(v) {
    this._s(":sqlType", v);
  }
  /** hierarchy. Serialized as `:hierarchy` */
  get hierarchy() {
    return this._g(":hierarchy");
  }
  set hierarchy(v) {
    this._s(":hierarchy", v);
  }
  /** level. Serialized as `:level` */
  get level() {
    return this._g(":level");
  }
  set level(v) {
    this._s(":level", v);
  }
  /** databaseField. Serialized as `:databaseField` */
  get databaseField() {
    return this._g(":databaseField");
  }
  set databaseField(v) {
    this._s(":databaseField", v);
  }
  /** mappingCount. Serialized as `:mappingCount` */
  get mappingCount() {
    return this._g(":mappingCount");
  }
  set mappingCount(v) {
    this._s(":mappingCount", v);
  }
  /** memberPropertyField. Serialized as `:memberPropertyField` */
  get memberPropertyField() {
    return this._g(":memberPropertyField");
  }
  set memberPropertyField(v) {
    this._s(":memberPropertyField", v);
  }
  /** Returns SharedItems. */
  get sharedItems() {
    return this._f(SharedItems);
  }
  /** Returns FieldGroup. */
  get fieldGroup() {
    return this._f(FieldGroup);
  }
}
class TextField extends OxmlLeafElement {
  static _Q = "x:textField";
  static _A = [":type", ":position"];
  /** Field Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
}
class FieldItem extends OxmlLeafElement {
  static _Q = "x:x";
  static _A = [":v"];
  /** Shared Items Index. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
}
class CharacterValue extends OxmlLeafElement {
  static _Q = "x:s";
  static _A = [":v"];
  /** Value. Serialized as `:v` */
  get val() {
    return this._g(":v");
  }
  set val(v) {
    this._s(":v", v);
  }
}
class MissingTable extends OxmlLeafElement {
  static _Q = "x:m";
}
class Parameter extends OxmlLeafElement {
  static _Q = "x:parameter";
  static _A = [":name", ":sqlType", ":parameterType", ":refreshOnChange", ":prompt", ":boolean", ":double", ":integer", ":string", ":cell"];
  /** Parameter Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** SQL Data Type. Serialized as `:sqlType` */
  get sqlType() {
    return this._g(":sqlType");
  }
  set sqlType(v) {
    this._s(":sqlType", v);
  }
  /** Parameter Type. Serialized as `:parameterType` */
  get parameterType() {
    return this._g(":parameterType");
  }
  set parameterType(v) {
    this._s(":parameterType", v);
  }
  /** Refresh on Change. Serialized as `:refreshOnChange` */
  get refreshOnChange() {
    return this._g(":refreshOnChange");
  }
  set refreshOnChange(v) {
    this._s(":refreshOnChange", v);
  }
  /** Parameter Prompt String. Serialized as `:prompt` */
  get prompt() {
    return this._g(":prompt");
  }
  set prompt(v) {
    this._s(":prompt", v);
  }
  /** Boolean. Serialized as `:boolean` */
  get boolean() {
    return this._g(":boolean");
  }
  set boolean(v) {
    this._s(":boolean", v);
  }
  /** Double. Serialized as `:double` */
  get double() {
    return this._g(":double");
  }
  set double(v) {
    this._s(":double", v);
  }
  /** Integer. Serialized as `:integer` */
  get integer() {
    return this._g(":integer");
  }
  set integer(v) {
    this._s(":integer", v);
  }
  /** String. Serialized as `:string` */
  get string() {
    return this._g(":string");
  }
  set string(v) {
    this._s(":string", v);
  }
  /** Cell Reference. Serialized as `:cell` */
  get cell() {
    return this._g(":cell");
  }
  set cell(v) {
    this._s(":cell", v);
  }
}
class Tables extends OxmlCompositeElement {
  static _Q = "x:tables";
  static _A = [":count"];
  /** Count of Tables. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Connection extends OxmlCompositeElement {
  static _Q = "x:connection";
  static _A = [":id", ":sourceFile", ":odcFile", ":keepAlive", ":interval", ":name", ":description", ":type", ":reconnectionMethod", ":refreshedVersion", ":minRefreshableVersion", ":savePassword", ":new", ":deleted", ":onlyUseConnectionFile", ":background", ":refreshOnLoad", ":saveData", ":credentials", ":singleSignOnId"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** sourceFile. Serialized as `:sourceFile` */
  get sourceFile() {
    return this._g(":sourceFile");
  }
  set sourceFile(v) {
    this._s(":sourceFile", v);
  }
  /** odcFile. Serialized as `:odcFile` */
  get connectionFile() {
    return this._g(":odcFile");
  }
  set connectionFile(v) {
    this._s(":odcFile", v);
  }
  /** keepAlive. Serialized as `:keepAlive` */
  get keepAlive() {
    return this._g(":keepAlive");
  }
  set keepAlive(v) {
    this._s(":keepAlive", v);
  }
  /** interval. Serialized as `:interval` */
  get interval() {
    return this._g(":interval");
  }
  set interval(v) {
    this._s(":interval", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** reconnectionMethod. Serialized as `:reconnectionMethod` */
  get reconnectionMethod() {
    return this._g(":reconnectionMethod");
  }
  set reconnectionMethod(v) {
    this._s(":reconnectionMethod", v);
  }
  /** refreshedVersion. Serialized as `:refreshedVersion` */
  get refreshedVersion() {
    return this._g(":refreshedVersion");
  }
  set refreshedVersion(v) {
    this._s(":refreshedVersion", v);
  }
  /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
  get minRefreshableVersion() {
    return this._g(":minRefreshableVersion");
  }
  set minRefreshableVersion(v) {
    this._s(":minRefreshableVersion", v);
  }
  /** savePassword. Serialized as `:savePassword` */
  get savePassword() {
    return this._g(":savePassword");
  }
  set savePassword(v) {
    this._s(":savePassword", v);
  }
  /** new. Serialized as `:new` */
  get new() {
    return this._g(":new");
  }
  set new(v) {
    this._s(":new", v);
  }
  /** deleted. Serialized as `:deleted` */
  get deleted() {
    return this._g(":deleted");
  }
  set deleted(v) {
    this._s(":deleted", v);
  }
  /** onlyUseConnectionFile. Serialized as `:onlyUseConnectionFile` */
  get onlyUseConnectionFile() {
    return this._g(":onlyUseConnectionFile");
  }
  set onlyUseConnectionFile(v) {
    this._s(":onlyUseConnectionFile", v);
  }
  /** background. Serialized as `:background` */
  get background() {
    return this._g(":background");
  }
  set background(v) {
    this._s(":background", v);
  }
  /** refreshOnLoad. Serialized as `:refreshOnLoad` */
  get refreshOnLoad() {
    return this._g(":refreshOnLoad");
  }
  set refreshOnLoad(v) {
    this._s(":refreshOnLoad", v);
  }
  /** saveData. Serialized as `:saveData` */
  get saveData() {
    return this._g(":saveData");
  }
  set saveData(v) {
    this._s(":saveData", v);
  }
  /** credentials. Serialized as `:credentials` */
  get credentials() {
    return this._g(":credentials");
  }
  set credentials(v) {
    this._s(":credentials", v);
  }
  /** singleSignOnId. Serialized as `:singleSignOnId` */
  get singleSignOnId() {
    return this._g(":singleSignOnId");
  }
  set singleSignOnId(v) {
    this._s(":singleSignOnId", v);
  }
  /** Returns DatabaseProperties. */
  get databaseProperties() {
    return this._f(DatabaseProperties);
  }
  /** Returns OlapProperties. */
  get olapProperties() {
    return this._f(OlapProperties);
  }
  /** Returns WebQueryProperties. */
  get webQueryProperties() {
    return this._f(WebQueryProperties);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Returns Parameters. */
  get parameters() {
    return this._f(Parameters);
  }
  /** Returns ConnectionExtensionList. */
  get connectionExtensionList() {
    return this._f(ConnectionExtensionList);
  }
}
class DataBinding extends OxmlCompositeElement {
  static _Q = "x:DataBinding";
  static _A = [":DataBindingName", ":FileBinding", ":ConnectionID", ":FileBindingName", ":DataBindingLoadMode"];
  /** DataBindingName. Serialized as `:DataBindingName` */
  get dataBindingName() {
    return this._g(":DataBindingName");
  }
  set dataBindingName(v) {
    this._s(":DataBindingName", v);
  }
  /** FileBinding. Serialized as `:FileBinding` */
  get fileBinding() {
    return this._g(":FileBinding");
  }
  set fileBinding(v) {
    this._s(":FileBinding", v);
  }
  /** ConnectionID. Serialized as `:ConnectionID` */
  get connectionId() {
    return this._g(":ConnectionID");
  }
  set connectionId(v) {
    this._s(":ConnectionID", v);
  }
  /** FileBindingName. Serialized as `:FileBindingName` */
  get fileBindingName() {
    return this._g(":FileBindingName");
  }
  set fileBindingName(v) {
    this._s(":FileBindingName", v);
  }
  /** DataBindingLoadMode. Serialized as `:DataBindingLoadMode` */
  get dataBindingLoadMode() {
    return this._g(":DataBindingLoadMode");
  }
  set dataBindingLoadMode(v) {
    this._s(":DataBindingLoadMode", v);
  }
}
class Map extends OxmlCompositeElement {
  static _Q = "x:Map";
  static _A = [":ID", ":Name", ":RootElement", ":SchemaID", ":ShowImportExportValidationErrors", ":AutoFit", ":Append", ":PreserveSortAFLayout", ":PreserveFormat"];
  /** XML Mapping ID. Serialized as `:ID` */
  get iD() {
    return this._g(":ID");
  }
  set iD(v) {
    this._s(":ID", v);
  }
  /** XML Mapping Name. Serialized as `:Name` */
  get name() {
    return this._g(":Name");
  }
  set name(v) {
    this._s(":Name", v);
  }
  /** Root Element Name. Serialized as `:RootElement` */
  get rootElement() {
    return this._g(":RootElement");
  }
  set rootElement(v) {
    this._s(":RootElement", v);
  }
  /** Schema Name. Serialized as `:SchemaID` */
  get schemaId() {
    return this._g(":SchemaID");
  }
  set schemaId(v) {
    this._s(":SchemaID", v);
  }
  /** Show Validation Errors. Serialized as `:ShowImportExportValidationErrors` */
  get showImportExportErrors() {
    return this._g(":ShowImportExportValidationErrors");
  }
  set showImportExportErrors(v) {
    this._s(":ShowImportExportValidationErrors", v);
  }
  /** AutoFit Table on Refresh. Serialized as `:AutoFit` */
  get autoFit() {
    return this._g(":AutoFit");
  }
  set autoFit(v) {
    this._s(":AutoFit", v);
  }
  /** Append Data to Table. Serialized as `:Append` */
  get appendData() {
    return this._g(":Append");
  }
  set appendData(v) {
    this._s(":Append", v);
  }
  /** Preserve AutoFilter State. Serialized as `:PreserveSortAFLayout` */
  get preserveAutoFilterState() {
    return this._g(":PreserveSortAFLayout");
  }
  set preserveAutoFilterState(v) {
    this._s(":PreserveSortAFLayout", v);
  }
  /** Preserve Cell Formatting. Serialized as `:PreserveFormat` */
  get preserveFormat() {
    return this._g(":PreserveFormat");
  }
  set preserveFormat(v) {
    this._s(":PreserveFormat", v);
  }
  /** XML Mapping. */
  get dataBinding() {
    return this._f(DataBinding);
  }
}
class Schema extends OxmlCompositeElement {
  static _Q = "x:Schema";
  static _A = [":ID", ":SchemaRef", ":Namespace"];
  /** Schema ID. Serialized as `:ID` */
  get id() {
    return this._g(":ID");
  }
  set id(v) {
    this._s(":ID", v);
  }
  /** Schema Reference. Serialized as `:SchemaRef` */
  get schemaReference() {
    return this._g(":SchemaRef");
  }
  set schemaReference(v) {
    this._s(":SchemaRef", v);
  }
  /** Schema Root Namespace. Serialized as `:Namespace` */
  get namespace() {
    return this._g(":Namespace");
  }
  set namespace(v) {
    this._s(":Namespace", v);
  }
}
class XstringType extends OxmlLeafTextElement {
  static _A = ["xml:space"];
  /** Content Contains Significant Whitespace. Serialized as `xml:space` */
  get space() {
    return this._g("xml:space");
  }
  set space(v) {
    this._s("xml:space", v);
  }
}
class Formula2 extends XstringType {
  static _Q = "x:formula2";
}
class Formula1 extends XstringType {
  static _Q = "x:formula1";
}
class Subtopic extends XstringType {
  static _Q = "x:stp";
}
class DdeLinkValue extends XstringType {
  static _Q = "x:val";
}
class FirstFooter extends XstringType {
  static _Q = "x:firstFooter";
}
class FirstHeader extends XstringType {
  static _Q = "x:firstHeader";
}
class EvenFooter extends XstringType {
  static _Q = "x:evenFooter";
}
class EvenHeader extends XstringType {
  static _Q = "x:evenHeader";
}
class OddFooter extends XstringType {
  static _Q = "x:oddFooter";
}
class OddHeader extends XstringType {
  static _Q = "x:oddHeader";
}
class OldFormula extends XstringType {
  static _Q = "x:oldFormula";
}
class Formula extends XstringType {
  static _Q = "x:formula";
}
class CellValue extends XstringType {
  static _Q = "x:v";
}
class Text extends XstringType {
  static _Q = "x:t";
}
class Author extends XstringType {
  static _Q = "x:author";
}
class Comment extends OxmlCompositeElement {
  static _Q = "x:comment";
  static _A = [":ref", ":authorId", ":guid", ":shapeId"];
  /** Cell Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Author Id. Serialized as `:authorId` */
  get authorId() {
    return this._g(":authorId");
  }
  set authorId(v) {
    this._s(":authorId", v);
  }
  /** Unique Identifier for Comment. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** shapeId. Serialized as `:shapeId` */
  get shapeId() {
    return this._g(":shapeId");
  }
  set shapeId(v) {
    this._s(":shapeId", v);
  }
  /** Comment Text. */
  get commentText() {
    return this._f(CommentText);
  }
  /** Returns CommentProperties. */
  get commentProperties() {
    return this._f(CommentProperties);
  }
}
class CommentList extends OxmlCompositeElement {
  static _Q = "x:commentList";
}
class Authors extends OxmlCompositeElement {
  static _Q = "x:authors";
}
class CalculationCell extends OxmlLeafElement {
  static _Q = "x:c";
  static _A = [":r", ":i", ":s", ":l", ":t", ":a"];
  /** Cell Reference. Serialized as `:r` */
  get cellReference() {
    return this._g(":r");
  }
  set cellReference(v) {
    this._s(":r", v);
  }
  /** Sheet Id. Serialized as `:i` */
  get sheetId() {
    return this._g(":i");
  }
  set sheetId(v) {
    this._s(":i", v);
  }
  /** Child Chain. Serialized as `:s` */
  get inChildChain() {
    return this._g(":s");
  }
  set inChildChain(v) {
    this._s(":s", v);
  }
  /** New Dependency Level. Serialized as `:l` */
  get newLevel() {
    return this._g(":l");
  }
  set newLevel(v) {
    this._s(":l", v);
  }
  /** New Thread. Serialized as `:t` */
  get newThread() {
    return this._g(":t");
  }
  set newThread(v) {
    this._s(":t", v);
  }
  /** Array. Serialized as `:a` */
  get array() {
    return this._g(":a");
  }
  set array(v) {
    this._s(":a", v);
  }
}
class CustomFilter extends OxmlLeafElement {
  static _Q = "x:customFilter";
  static _A = [":operator", ":val"];
  /** Filter Comparison Operator. Serialized as `:operator` */
  get operator() {
    return this._g(":operator");
  }
  set operator(v) {
    this._s(":operator", v);
  }
  /** Top or Bottom Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "x:extLst";
}
class SortState extends OxmlCompositeElement {
  static _Q = "x:sortState";
  static _A = [":columnSort", ":caseSensitive", ":sortMethod", ":ref"];
  /** Sort by Columns. Serialized as `:columnSort` */
  get columnSort() {
    return this._g(":columnSort");
  }
  set columnSort(v) {
    this._s(":columnSort", v);
  }
  /** Case Sensitive. Serialized as `:caseSensitive` */
  get caseSensitive() {
    return this._g(":caseSensitive");
  }
  set caseSensitive(v) {
    this._s(":caseSensitive", v);
  }
  /** Sort Method. Serialized as `:sortMethod` */
  get sortMethod() {
    return this._g(":sortMethod");
  }
  set sortMethod(v) {
    this._s(":sortMethod", v);
  }
  /** Sort Range. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class FilterColumn extends OxmlCompositeElement {
  static _Q = "x:filterColumn";
  static _A = [":colId", ":hiddenButton", ":showButton"];
  /** Filter Column Data. Serialized as `:colId` */
  get columnId() {
    return this._g(":colId");
  }
  set columnId(v) {
    this._s(":colId", v);
  }
  /** Hidden AutoFilter Button. Serialized as `:hiddenButton` */
  get hiddenButton() {
    return this._g(":hiddenButton");
  }
  set hiddenButton(v) {
    this._s(":hiddenButton", v);
  }
  /** Show Filter Button. Serialized as `:showButton` */
  get showButton() {
    return this._g(":showButton");
  }
  set showButton(v) {
    this._s(":showButton", v);
  }
  /** Filter Criteria. */
  get filters() {
    return this._f(Filters);
  }
  /** Top 10. */
  get top10() {
    return this._f(Top10);
  }
  /** Returns X14CustomFilters. */
  get customFilters14() {
    return this._f(X14CustomFilters);
  }
  /** Custom Filters. */
  get customFilters() {
    return this._f(CustomFilters);
  }
  /** Dynamic Filter. */
  get dynamicFilter() {
    return this._f(DynamicFilter);
  }
  /** Color Filter Criteria. */
  get colorFilter() {
    return this._f(ColorFilter);
  }
  /** Returns X14IconFilter. */
  get iconFilter14() {
    return this._f(X14IconFilter);
  }
  /** Icon Filter. */
  get iconFilter() {
    return this._f(IconFilter);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Workbook extends OxmlPartRootElement {
  static _Q = "x:workbook";
  static _A = [":conformance"];
  /** conformance. Serialized as `:conformance` */
  get conformance() {
    return this._g(":conformance");
  }
  set conformance(v) {
    this._s(":conformance", v);
  }
  /** Returns FileVersion. */
  get fileVersion() {
    return this._f(FileVersion);
  }
  /** Returns FileSharing. */
  get fileSharing() {
    return this._f(FileSharing);
  }
  /** Returns WorkbookProperties. */
  get workbookProperties() {
    return this._f(WorkbookProperties);
  }
  /** Returns X15acAbsolutePath. */
  get absolutePath() {
    return this._f(X15acAbsolutePath);
  }
  /** Returns WorkbookProtection. */
  get workbookProtection() {
    return this._f(WorkbookProtection);
  }
  /** Returns BookViews. */
  get bookViews() {
    return this._f(BookViews);
  }
  /** Returns Sheets. */
  get sheets() {
    return this._f(Sheets);
  }
  /** Returns FunctionGroups. */
  get functionGroups() {
    return this._f(FunctionGroups);
  }
  /** Returns ExternalReferences. */
  get externalReferences() {
    return this._f(ExternalReferences);
  }
  /** Returns DefinedNames. */
  get definedNames() {
    return this._f(DefinedNames);
  }
  /** Returns CalculationProperties. */
  get calculationProperties() {
    return this._f(CalculationProperties);
  }
  /** Returns OleSize. */
  get oleSize() {
    return this._f(OleSize);
  }
  /** Returns CustomWorkbookViews. */
  get customWorkbookViews() {
    return this._f(CustomWorkbookViews);
  }
  /** Returns PivotCaches. */
  get pivotCaches() {
    return this._f(PivotCaches);
  }
  /** Returns WebPublishing. */
  get webPublishing() {
    return this._f(WebPublishing);
  }
}
class VolatileTypes extends OxmlPartRootElement {
  static _Q = "x:volTypes";
}
class Table extends OxmlPartRootElement {
  static _Q = "x:table";
  static _A = [":id", ":name", ":displayName", ":comment", ":ref", ":tableType", ":headerRowCount", ":insertRow", ":insertRowShift", ":totalsRowCount", ":totalsRowShown", ":published", ":headerRowDxfId", ":dataDxfId", ":totalsRowDxfId", ":headerRowBorderDxfId", ":tableBorderDxfId", ":totalsRowBorderDxfId", ":headerRowCellStyle", ":dataCellStyle", ":totalsRowCellStyle", ":connectionId"];
  /** Table Id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Table Name. Serialized as `:displayName` */
  get displayName() {
    return this._g(":displayName");
  }
  set displayName(v) {
    this._s(":displayName", v);
  }
  /** Table Comment. Serialized as `:comment` */
  get comment() {
    return this._g(":comment");
  }
  set comment(v) {
    this._s(":comment", v);
  }
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Table Type. Serialized as `:tableType` */
  get tableType() {
    return this._g(":tableType");
  }
  set tableType(v) {
    this._s(":tableType", v);
  }
  /** Header Row Count. Serialized as `:headerRowCount` */
  get headerRowCount() {
    return this._g(":headerRowCount");
  }
  set headerRowCount(v) {
    this._s(":headerRowCount", v);
  }
  /** Insert Row Showing. Serialized as `:insertRow` */
  get insertRow() {
    return this._g(":insertRow");
  }
  set insertRow(v) {
    this._s(":insertRow", v);
  }
  /** Insert Row Shift. Serialized as `:insertRowShift` */
  get insertRowShift() {
    return this._g(":insertRowShift");
  }
  set insertRowShift(v) {
    this._s(":insertRowShift", v);
  }
  /** Totals Row Count. Serialized as `:totalsRowCount` */
  get totalsRowCount() {
    return this._g(":totalsRowCount");
  }
  set totalsRowCount(v) {
    this._s(":totalsRowCount", v);
  }
  /** Totals Row Shown. Serialized as `:totalsRowShown` */
  get totalsRowShown() {
    return this._g(":totalsRowShown");
  }
  set totalsRowShown(v) {
    this._s(":totalsRowShown", v);
  }
  /** Published. Serialized as `:published` */
  get published() {
    return this._g(":published");
  }
  set published(v) {
    this._s(":published", v);
  }
  /** Header Row Format Id. Serialized as `:headerRowDxfId` */
  get headerRowFormatId() {
    return this._g(":headerRowDxfId");
  }
  set headerRowFormatId(v) {
    this._s(":headerRowDxfId", v);
  }
  /** Data Area Format Id. Serialized as `:dataDxfId` */
  get dataFormatId() {
    return this._g(":dataDxfId");
  }
  set dataFormatId(v) {
    this._s(":dataDxfId", v);
  }
  /** Totals Row Format Id. Serialized as `:totalsRowDxfId` */
  get totalsRowFormatId() {
    return this._g(":totalsRowDxfId");
  }
  set totalsRowFormatId(v) {
    this._s(":totalsRowDxfId", v);
  }
  /** Header Row Border Format Id. Serialized as `:headerRowBorderDxfId` */
  get headerRowBorderFormatId() {
    return this._g(":headerRowBorderDxfId");
  }
  set headerRowBorderFormatId(v) {
    this._s(":headerRowBorderDxfId", v);
  }
  /** Table Border Format Id. Serialized as `:tableBorderDxfId` */
  get borderFormatId() {
    return this._g(":tableBorderDxfId");
  }
  set borderFormatId(v) {
    this._s(":tableBorderDxfId", v);
  }
  /** Totals Row Border Format Id. Serialized as `:totalsRowBorderDxfId` */
  get totalsRowBorderFormatId() {
    return this._g(":totalsRowBorderDxfId");
  }
  set totalsRowBorderFormatId(v) {
    this._s(":totalsRowBorderDxfId", v);
  }
  /** Header Row Style. Serialized as `:headerRowCellStyle` */
  get headerRowCellStyle() {
    return this._g(":headerRowCellStyle");
  }
  set headerRowCellStyle(v) {
    this._s(":headerRowCellStyle", v);
  }
  /** Data Style Name. Serialized as `:dataCellStyle` */
  get dataCellStyle() {
    return this._g(":dataCellStyle");
  }
  set dataCellStyle(v) {
    this._s(":dataCellStyle", v);
  }
  /** Totals Row Style. Serialized as `:totalsRowCellStyle` */
  get totalsRowCellStyle() {
    return this._g(":totalsRowCellStyle");
  }
  set totalsRowCellStyle(v) {
    this._s(":totalsRowCellStyle", v);
  }
  /** Connection ID. Serialized as `:connectionId` */
  get connectionId() {
    return this._g(":connectionId");
  }
  set connectionId(v) {
    this._s(":connectionId", v);
  }
  /** Table AutoFilter. */
  get autoFilter() {
    return this._f(AutoFilter);
  }
  /** Sort State. */
  get sortState() {
    return this._f(SortState);
  }
  /** Table Columns. */
  get tableColumns() {
    return this._f(TableColumns);
  }
  /** Table Style. */
  get tableStyleInfo() {
    return this._f(TableStyleInfo);
  }
  /** Future Feature Data Storage Area. */
  get tableExtensionList() {
    return this._f(TableExtensionList);
  }
}
class ExternalLink extends OxmlPartRootElement {
  static _Q = "x:externalLink";
}
class Stylesheet extends OxmlPartRootElement {
  static _Q = "x:styleSheet";
  /** Returns NumberingFormats. */
  get numberingFormats() {
    return this._f(NumberingFormats);
  }
  /** Returns Fonts. */
  get fonts() {
    return this._f(Fonts);
  }
  /** Returns Fills. */
  get fills() {
    return this._f(Fills);
  }
  /** Returns Borders. */
  get borders() {
    return this._f(Borders);
  }
  /** Returns CellStyleFormats. */
  get cellStyleFormats() {
    return this._f(CellStyleFormats);
  }
  /** Returns CellFormats. */
  get cellFormats() {
    return this._f(CellFormats);
  }
  /** Returns CellStyles. */
  get cellStyles() {
    return this._f(CellStyles);
  }
  /** Returns DifferentialFormats. */
  get differentialFormats() {
    return this._f(DifferentialFormats);
  }
  /** Returns TableStyles. */
  get tableStyles() {
    return this._f(TableStyles);
  }
  /** Returns Colors. */
  get colors() {
    return this._f(Colors);
  }
  /** Returns StylesheetExtensionList. */
  get stylesheetExtensionList() {
    return this._f(StylesheetExtensionList);
  }
}
class SingleXmlCells extends OxmlPartRootElement {
  static _Q = "x:singleXmlCells";
}
class Metadata extends OxmlPartRootElement {
  static _Q = "x:metadata";
  /** Metadata Types Collection. */
  get metadataTypes() {
    return this._f(MetadataTypes);
  }
  /** Metadata String Store. */
  get metadataStrings() {
    return this._f(MetadataStrings);
  }
  /** MDX Metadata Information. */
  get mdxMetadata() {
    return this._f(MdxMetadata);
  }
}
class DialogSheet extends OxmlPartRootElement {
  static _Q = "x:dialogsheet";
  /** Sheet Properties. */
  get sheetProperties() {
    return this._f(SheetProperties);
  }
  /** Dialog Sheet Views. */
  get sheetViews() {
    return this._f(SheetViews);
  }
  /** Dialog Sheet Format Properties. */
  get sheetFormatProperties() {
    return this._f(SheetFormatProperties);
  }
  /** Sheet Protection. */
  get sheetProtection() {
    return this._f(SheetProtection);
  }
  /** Custom Sheet Views. */
  get customSheetViews() {
    return this._f(CustomSheetViews);
  }
  /** Print Options. */
  get printOptions() {
    return this._f(PrintOptions);
  }
  /** Page Margins. */
  get pageMargins() {
    return this._f(PageMargins);
  }
  /** Page Setup Settings. */
  get pageSetup() {
    return this._f(PageSetup);
  }
  /** Header and Footer Settings. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Drawing. */
  get drawing() {
    return this._f(Drawing);
  }
  /** Legacy Drawing. */
  get legacyDrawing() {
    return this._f(LegacyDrawing);
  }
  /** Legacy Drawing Header Footer. */
  get legacyDrawingHeaderFooter() {
    return this._f(LegacyDrawingHeaderFooter);
  }
  /** Returns DrawingHeaderFooter. */
  get drawingHeaderFooter() {
    return this._f(DrawingHeaderFooter);
  }
  /** Returns OleObjects. */
  get oleObjects() {
    return this._f(OleObjects);
  }
  /** Returns Controls. */
  get controls() {
    return this._f(Controls);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Chartsheet extends OxmlPartRootElement {
  static _Q = "x:chartsheet";
  /** Chart Sheet Properties. */
  get chartSheetProperties() {
    return this._f(ChartSheetProperties);
  }
  /** Chart Sheet Views. */
  get chartSheetViews() {
    return this._f(ChartSheetViews);
  }
  /** Chart Sheet Protection. */
  get chartSheetProtection() {
    return this._f(ChartSheetProtection);
  }
  /** Custom Chart Sheet Views. */
  get customChartsheetViews() {
    return this._f(CustomChartsheetViews);
  }
  /** Returns PageMargins. */
  get pageMargins() {
    return this._f(PageMargins);
  }
  /** Returns ChartSheetPageSetup. */
  get chartSheetPageSetup() {
    return this._f(ChartSheetPageSetup);
  }
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Drawing. */
  get drawing() {
    return this._f(Drawing);
  }
  /** Returns LegacyDrawing. */
  get legacyDrawing() {
    return this._f(LegacyDrawing);
  }
  /** Legacy Drawing Reference in  Header Footer. */
  get legacyDrawingHeaderFooter() {
    return this._f(LegacyDrawingHeaderFooter);
  }
  /** Returns DrawingHeaderFooter. */
  get drawingHeaderFooter() {
    return this._f(DrawingHeaderFooter);
  }
  /** Returns Picture. */
  get picture() {
    return this._f(Picture);
  }
  /** Returns WebPublishItems. */
  get webPublishItems() {
    return this._f(WebPublishItems);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Worksheet extends OxmlPartRootElement {
  static _Q = "x:worksheet";
  /** Returns SheetProperties. */
  get sheetProperties() {
    return this._f(SheetProperties);
  }
  /** Returns SheetDimension. */
  get sheetDimension() {
    return this._f(SheetDimension);
  }
  /** Returns SheetViews. */
  get sheetViews() {
    return this._f(SheetViews);
  }
  /** Returns SheetFormatProperties. */
  get sheetFormatProperties() {
    return this._f(SheetFormatProperties);
  }
}
class Users extends OxmlPartRootElement {
  static _Q = "x:users";
  static _A = [":count"];
  /** Active User Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class Revisions extends OxmlPartRootElement {
  static _Q = "x:revisions";
}
class Headers extends OxmlPartRootElement {
  static _Q = "x:headers";
  static _A = [":guid", ":lastGuid", ":shared", ":diskRevisions", ":history", ":trackRevisions", ":exclusive", ":revisionId", ":version", ":keepChangeHistory", ":protected", ":preserveHistory"];
  /** Last Revision GUID. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** Last GUID. Serialized as `:lastGuid` */
  get lastGuid() {
    return this._g(":lastGuid");
  }
  set lastGuid(v) {
    this._s(":lastGuid", v);
  }
  /** Shared Workbook. Serialized as `:shared` */
  get shared() {
    return this._g(":shared");
  }
  set shared(v) {
    this._s(":shared", v);
  }
  /** Disk Revisions. Serialized as `:diskRevisions` */
  get diskRevisions() {
    return this._g(":diskRevisions");
  }
  set diskRevisions(v) {
    this._s(":diskRevisions", v);
  }
  /** History. Serialized as `:history` */
  get history() {
    return this._g(":history");
  }
  set history(v) {
    this._s(":history", v);
  }
  /** Track Revisions. Serialized as `:trackRevisions` */
  get trackRevisions() {
    return this._g(":trackRevisions");
  }
  set trackRevisions(v) {
    this._s(":trackRevisions", v);
  }
  /** Exclusive Mode. Serialized as `:exclusive` */
  get exclusive() {
    return this._g(":exclusive");
  }
  set exclusive(v) {
    this._s(":exclusive", v);
  }
  /** Revision Id. Serialized as `:revisionId` */
  get revisionId() {
    return this._g(":revisionId");
  }
  set revisionId(v) {
    this._s(":revisionId", v);
  }
  /** Version. Serialized as `:version` */
  get version() {
    return this._g(":version");
  }
  set version(v) {
    this._s(":version", v);
  }
  /** Keep Change History. Serialized as `:keepChangeHistory` */
  get keepChangeHistory() {
    return this._g(":keepChangeHistory");
  }
  set keepChangeHistory(v) {
    this._s(":keepChangeHistory", v);
  }
  /** Protected. Serialized as `:protected` */
  get protected() {
    return this._g(":protected");
  }
  set protected(v) {
    this._s(":protected", v);
  }
  /** Preserve History. Serialized as `:preserveHistory` */
  get preserveHistory() {
    return this._g(":preserveHistory");
  }
  set preserveHistory(v) {
    this._s(":preserveHistory", v);
  }
}
class SharedStringTable extends OxmlPartRootElement {
  static _Q = "x:sst";
  static _A = [":count", ":uniqueCount"];
  /** String Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** Unique String Count. Serialized as `:uniqueCount` */
  get uniqueCount() {
    return this._g(":uniqueCount");
  }
  set uniqueCount(v) {
    this._s(":uniqueCount", v);
  }
}
class QueryTable extends OxmlPartRootElement {
  static _Q = "x:queryTable";
  static _A = [":name", ":headers", ":rowNumbers", ":disableRefresh", ":backgroundRefresh", ":firstBackgroundRefresh", ":refreshOnLoad", ":growShrinkType", ":fillFormulas", ":removeDataOnSave", ":disableEdit", ":preserveFormatting", ":adjustColumnWidth", ":intermediate", ":connectionId", ":autoFormatId", ":applyNumberFormats", ":applyBorderFormats", ":applyFontFormats", ":applyPatternFormats", ":applyAlignmentFormats", ":applyWidthHeightFormats"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** headers. Serialized as `:headers` */
  get headers() {
    return this._g(":headers");
  }
  set headers(v) {
    this._s(":headers", v);
  }
  /** rowNumbers. Serialized as `:rowNumbers` */
  get rowNumbers() {
    return this._g(":rowNumbers");
  }
  set rowNumbers(v) {
    this._s(":rowNumbers", v);
  }
  /** disableRefresh. Serialized as `:disableRefresh` */
  get disableRefresh() {
    return this._g(":disableRefresh");
  }
  set disableRefresh(v) {
    this._s(":disableRefresh", v);
  }
  /** backgroundRefresh. Serialized as `:backgroundRefresh` */
  get backgroundRefresh() {
    return this._g(":backgroundRefresh");
  }
  set backgroundRefresh(v) {
    this._s(":backgroundRefresh", v);
  }
  /** firstBackgroundRefresh. Serialized as `:firstBackgroundRefresh` */
  get firstBackgroundRefresh() {
    return this._g(":firstBackgroundRefresh");
  }
  set firstBackgroundRefresh(v) {
    this._s(":firstBackgroundRefresh", v);
  }
  /** refreshOnLoad. Serialized as `:refreshOnLoad` */
  get refreshOnLoad() {
    return this._g(":refreshOnLoad");
  }
  set refreshOnLoad(v) {
    this._s(":refreshOnLoad", v);
  }
  /** growShrinkType. Serialized as `:growShrinkType` */
  get growShrinkType() {
    return this._g(":growShrinkType");
  }
  set growShrinkType(v) {
    this._s(":growShrinkType", v);
  }
  /** fillFormulas. Serialized as `:fillFormulas` */
  get fillFormulas() {
    return this._g(":fillFormulas");
  }
  set fillFormulas(v) {
    this._s(":fillFormulas", v);
  }
  /** removeDataOnSave. Serialized as `:removeDataOnSave` */
  get removeDataOnSave() {
    return this._g(":removeDataOnSave");
  }
  set removeDataOnSave(v) {
    this._s(":removeDataOnSave", v);
  }
  /** disableEdit. Serialized as `:disableEdit` */
  get disableEdit() {
    return this._g(":disableEdit");
  }
  set disableEdit(v) {
    this._s(":disableEdit", v);
  }
  /** preserveFormatting. Serialized as `:preserveFormatting` */
  get preserveFormatting() {
    return this._g(":preserveFormatting");
  }
  set preserveFormatting(v) {
    this._s(":preserveFormatting", v);
  }
  /** adjustColumnWidth. Serialized as `:adjustColumnWidth` */
  get adjustColumnWidth() {
    return this._g(":adjustColumnWidth");
  }
  set adjustColumnWidth(v) {
    this._s(":adjustColumnWidth", v);
  }
  /** intermediate. Serialized as `:intermediate` */
  get intermediate() {
    return this._g(":intermediate");
  }
  set intermediate(v) {
    this._s(":intermediate", v);
  }
  /** connectionId. Serialized as `:connectionId` */
  get connectionId() {
    return this._g(":connectionId");
  }
  set connectionId(v) {
    this._s(":connectionId", v);
  }
  /** Auto Format Id. Serialized as `:autoFormatId` */
  get autoFormatId() {
    return this._g(":autoFormatId");
  }
  set autoFormatId(v) {
    this._s(":autoFormatId", v);
  }
  /** Apply Number Formats. Serialized as `:applyNumberFormats` */
  get applyNumberFormats() {
    return this._g(":applyNumberFormats");
  }
  set applyNumberFormats(v) {
    this._s(":applyNumberFormats", v);
  }
  /** Apply Border Formats. Serialized as `:applyBorderFormats` */
  get applyBorderFormats() {
    return this._g(":applyBorderFormats");
  }
  set applyBorderFormats(v) {
    this._s(":applyBorderFormats", v);
  }
  /** Apply Font Formats. Serialized as `:applyFontFormats` */
  get applyFontFormats() {
    return this._g(":applyFontFormats");
  }
  set applyFontFormats(v) {
    this._s(":applyFontFormats", v);
  }
  /** Apply Pattern Formats. Serialized as `:applyPatternFormats` */
  get applyPatternFormats() {
    return this._g(":applyPatternFormats");
  }
  set applyPatternFormats(v) {
    this._s(":applyPatternFormats", v);
  }
  /** Apply Alignment Formats. Serialized as `:applyAlignmentFormats` */
  get applyAlignmentFormats() {
    return this._g(":applyAlignmentFormats");
  }
  set applyAlignmentFormats(v) {
    this._s(":applyAlignmentFormats", v);
  }
  /** Apply Width / Height Formats. Serialized as `:applyWidthHeightFormats` */
  get applyWidthHeightFormats() {
    return this._g(":applyWidthHeightFormats");
  }
  set applyWidthHeightFormats(v) {
    this._s(":applyWidthHeightFormats", v);
  }
  /** Returns QueryTableRefresh. */
  get queryTableRefresh() {
    return this._f(QueryTableRefresh);
  }
  /** Returns QueryTableExtensionList. */
  get queryTableExtensionList() {
    return this._f(QueryTableExtensionList);
  }
}
class PivotTableDefinition extends OxmlPartRootElement {
  static _Q = "x:pivotTableDefinition";
  static _A = [":name", ":cacheId", ":dataOnRows", ":dataPosition", ":autoFormatId", ":applyNumberFormats", ":applyBorderFormats", ":applyFontFormats", ":applyPatternFormats", ":applyAlignmentFormats", ":applyWidthHeightFormats", ":dataCaption", ":grandTotalCaption", ":errorCaption", ":showError", ":missingCaption", ":showMissing", ":pageStyle", ":pivotTableStyle", ":vacatedStyle", ":tag", ":updatedVersion", ":minRefreshableVersion", ":asteriskTotals", ":showItems", ":editData", ":disableFieldList", ":showCalcMbrs", ":visualTotals", ":showMultipleLabel", ":showDataDropDown", ":showDrill", ":printDrill", ":showMemberPropertyTips", ":showDataTips", ":enableWizard", ":enableDrill", ":enableFieldProperties", ":preserveFormatting", ":useAutoFormatting", ":pageWrap", ":pageOverThenDown", ":subtotalHiddenItems", ":rowGrandTotals", ":colGrandTotals", ":fieldPrintTitles", ":itemPrintTitles", ":mergeItem", ":showDropZones", ":createdVersion", ":indent", ":showEmptyRow", ":showEmptyCol", ":showHeaders", ":compact", ":outline", ":outlineData", ":compactData", ":published", ":gridDropZones", ":immersive", ":multipleFieldFilters", ":chartFormat", ":rowHeaderCaption", ":colHeaderCaption", ":fieldListSortAscending", ":mdxSubqueries", ":customListSort"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** cacheId. Serialized as `:cacheId` */
  get cacheId() {
    return this._g(":cacheId");
  }
  set cacheId(v) {
    this._s(":cacheId", v);
  }
  /** dataOnRows. Serialized as `:dataOnRows` */
  get dataOnRows() {
    return this._g(":dataOnRows");
  }
  set dataOnRows(v) {
    this._s(":dataOnRows", v);
  }
  /** dataPosition. Serialized as `:dataPosition` */
  get dataPosition() {
    return this._g(":dataPosition");
  }
  set dataPosition(v) {
    this._s(":dataPosition", v);
  }
  /** Auto Format Id. Serialized as `:autoFormatId` */
  get autoFormatId() {
    return this._g(":autoFormatId");
  }
  set autoFormatId(v) {
    this._s(":autoFormatId", v);
  }
  /** Apply Number Formats. Serialized as `:applyNumberFormats` */
  get applyNumberFormats() {
    return this._g(":applyNumberFormats");
  }
  set applyNumberFormats(v) {
    this._s(":applyNumberFormats", v);
  }
  /** Apply Border Formats. Serialized as `:applyBorderFormats` */
  get applyBorderFormats() {
    return this._g(":applyBorderFormats");
  }
  set applyBorderFormats(v) {
    this._s(":applyBorderFormats", v);
  }
  /** Apply Font Formats. Serialized as `:applyFontFormats` */
  get applyFontFormats() {
    return this._g(":applyFontFormats");
  }
  set applyFontFormats(v) {
    this._s(":applyFontFormats", v);
  }
  /** Apply Pattern Formats. Serialized as `:applyPatternFormats` */
  get applyPatternFormats() {
    return this._g(":applyPatternFormats");
  }
  set applyPatternFormats(v) {
    this._s(":applyPatternFormats", v);
  }
  /** Apply Alignment Formats. Serialized as `:applyAlignmentFormats` */
  get applyAlignmentFormats() {
    return this._g(":applyAlignmentFormats");
  }
  set applyAlignmentFormats(v) {
    this._s(":applyAlignmentFormats", v);
  }
  /** Apply Width / Height Formats. Serialized as `:applyWidthHeightFormats` */
  get applyWidthHeightFormats() {
    return this._g(":applyWidthHeightFormats");
  }
  set applyWidthHeightFormats(v) {
    this._s(":applyWidthHeightFormats", v);
  }
  /** dataCaption. Serialized as `:dataCaption` */
  get dataCaption() {
    return this._g(":dataCaption");
  }
  set dataCaption(v) {
    this._s(":dataCaption", v);
  }
  /** grandTotalCaption. Serialized as `:grandTotalCaption` */
  get grandTotalCaption() {
    return this._g(":grandTotalCaption");
  }
  set grandTotalCaption(v) {
    this._s(":grandTotalCaption", v);
  }
  /** errorCaption. Serialized as `:errorCaption` */
  get errorCaption() {
    return this._g(":errorCaption");
  }
  set errorCaption(v) {
    this._s(":errorCaption", v);
  }
  /** showError. Serialized as `:showError` */
  get showError() {
    return this._g(":showError");
  }
  set showError(v) {
    this._s(":showError", v);
  }
  /** missingCaption. Serialized as `:missingCaption` */
  get missingCaption() {
    return this._g(":missingCaption");
  }
  set missingCaption(v) {
    this._s(":missingCaption", v);
  }
  /** showMissing. Serialized as `:showMissing` */
  get showMissing() {
    return this._g(":showMissing");
  }
  set showMissing(v) {
    this._s(":showMissing", v);
  }
  /** pageStyle. Serialized as `:pageStyle` */
  get pageStyle() {
    return this._g(":pageStyle");
  }
  set pageStyle(v) {
    this._s(":pageStyle", v);
  }
  /** pivotTableStyle. Serialized as `:pivotTableStyle` */
  get pivotTableStyleName() {
    return this._g(":pivotTableStyle");
  }
  set pivotTableStyleName(v) {
    this._s(":pivotTableStyle", v);
  }
  /** vacatedStyle. Serialized as `:vacatedStyle` */
  get vacatedStyle() {
    return this._g(":vacatedStyle");
  }
  set vacatedStyle(v) {
    this._s(":vacatedStyle", v);
  }
  /** tag. Serialized as `:tag` */
  get tag() {
    return this._g(":tag");
  }
  set tag(v) {
    this._s(":tag", v);
  }
  /** updatedVersion. Serialized as `:updatedVersion` */
  get updatedVersion() {
    return this._g(":updatedVersion");
  }
  set updatedVersion(v) {
    this._s(":updatedVersion", v);
  }
  /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
  get minRefreshableVersion() {
    return this._g(":minRefreshableVersion");
  }
  set minRefreshableVersion(v) {
    this._s(":minRefreshableVersion", v);
  }
  /** asteriskTotals. Serialized as `:asteriskTotals` */
  get asteriskTotals() {
    return this._g(":asteriskTotals");
  }
  set asteriskTotals(v) {
    this._s(":asteriskTotals", v);
  }
  /** showItems. Serialized as `:showItems` */
  get showItems() {
    return this._g(":showItems");
  }
  set showItems(v) {
    this._s(":showItems", v);
  }
  /** editData. Serialized as `:editData` */
  get editData() {
    return this._g(":editData");
  }
  set editData(v) {
    this._s(":editData", v);
  }
  /** disableFieldList. Serialized as `:disableFieldList` */
  get disableFieldList() {
    return this._g(":disableFieldList");
  }
  set disableFieldList(v) {
    this._s(":disableFieldList", v);
  }
  /** showCalcMbrs. Serialized as `:showCalcMbrs` */
  get showCalculatedMembers() {
    return this._g(":showCalcMbrs");
  }
  set showCalculatedMembers(v) {
    this._s(":showCalcMbrs", v);
  }
  /** visualTotals. Serialized as `:visualTotals` */
  get visualTotals() {
    return this._g(":visualTotals");
  }
  set visualTotals(v) {
    this._s(":visualTotals", v);
  }
  /** showMultipleLabel. Serialized as `:showMultipleLabel` */
  get showMultipleLabel() {
    return this._g(":showMultipleLabel");
  }
  set showMultipleLabel(v) {
    this._s(":showMultipleLabel", v);
  }
  /** showDataDropDown. Serialized as `:showDataDropDown` */
  get showDataDropDown() {
    return this._g(":showDataDropDown");
  }
  set showDataDropDown(v) {
    this._s(":showDataDropDown", v);
  }
  /** showDrill. Serialized as `:showDrill` */
  get showDrill() {
    return this._g(":showDrill");
  }
  set showDrill(v) {
    this._s(":showDrill", v);
  }
  /** printDrill. Serialized as `:printDrill` */
  get printDrill() {
    return this._g(":printDrill");
  }
  set printDrill(v) {
    this._s(":printDrill", v);
  }
  /** showMemberPropertyTips. Serialized as `:showMemberPropertyTips` */
  get showMemberPropertyTips() {
    return this._g(":showMemberPropertyTips");
  }
  set showMemberPropertyTips(v) {
    this._s(":showMemberPropertyTips", v);
  }
  /** showDataTips. Serialized as `:showDataTips` */
  get showDataTips() {
    return this._g(":showDataTips");
  }
  set showDataTips(v) {
    this._s(":showDataTips", v);
  }
  /** enableWizard. Serialized as `:enableWizard` */
  get enableWizard() {
    return this._g(":enableWizard");
  }
  set enableWizard(v) {
    this._s(":enableWizard", v);
  }
  /** enableDrill. Serialized as `:enableDrill` */
  get enableDrill() {
    return this._g(":enableDrill");
  }
  set enableDrill(v) {
    this._s(":enableDrill", v);
  }
  /** enableFieldProperties. Serialized as `:enableFieldProperties` */
  get enableFieldProperties() {
    return this._g(":enableFieldProperties");
  }
  set enableFieldProperties(v) {
    this._s(":enableFieldProperties", v);
  }
  /** preserveFormatting. Serialized as `:preserveFormatting` */
  get preserveFormatting() {
    return this._g(":preserveFormatting");
  }
  set preserveFormatting(v) {
    this._s(":preserveFormatting", v);
  }
  /** useAutoFormatting. Serialized as `:useAutoFormatting` */
  get useAutoFormatting() {
    return this._g(":useAutoFormatting");
  }
  set useAutoFormatting(v) {
    this._s(":useAutoFormatting", v);
  }
  /** pageWrap. Serialized as `:pageWrap` */
  get pageWrap() {
    return this._g(":pageWrap");
  }
  set pageWrap(v) {
    this._s(":pageWrap", v);
  }
  /** pageOverThenDown. Serialized as `:pageOverThenDown` */
  get pageOverThenDown() {
    return this._g(":pageOverThenDown");
  }
  set pageOverThenDown(v) {
    this._s(":pageOverThenDown", v);
  }
  /** subtotalHiddenItems. Serialized as `:subtotalHiddenItems` */
  get subtotalHiddenItems() {
    return this._g(":subtotalHiddenItems");
  }
  set subtotalHiddenItems(v) {
    this._s(":subtotalHiddenItems", v);
  }
  /** rowGrandTotals. Serialized as `:rowGrandTotals` */
  get rowGrandTotals() {
    return this._g(":rowGrandTotals");
  }
  set rowGrandTotals(v) {
    this._s(":rowGrandTotals", v);
  }
  /** colGrandTotals. Serialized as `:colGrandTotals` */
  get columnGrandTotals() {
    return this._g(":colGrandTotals");
  }
  set columnGrandTotals(v) {
    this._s(":colGrandTotals", v);
  }
  /** fieldPrintTitles. Serialized as `:fieldPrintTitles` */
  get fieldPrintTitles() {
    return this._g(":fieldPrintTitles");
  }
  set fieldPrintTitles(v) {
    this._s(":fieldPrintTitles", v);
  }
  /** itemPrintTitles. Serialized as `:itemPrintTitles` */
  get itemPrintTitles() {
    return this._g(":itemPrintTitles");
  }
  set itemPrintTitles(v) {
    this._s(":itemPrintTitles", v);
  }
  /** mergeItem. Serialized as `:mergeItem` */
  get mergeItem() {
    return this._g(":mergeItem");
  }
  set mergeItem(v) {
    this._s(":mergeItem", v);
  }
  /** showDropZones. Serialized as `:showDropZones` */
  get showDropZones() {
    return this._g(":showDropZones");
  }
  set showDropZones(v) {
    this._s(":showDropZones", v);
  }
  /** createdVersion. Serialized as `:createdVersion` */
  get createdVersion() {
    return this._g(":createdVersion");
  }
  set createdVersion(v) {
    this._s(":createdVersion", v);
  }
  /** indent. Serialized as `:indent` */
  get indent() {
    return this._g(":indent");
  }
  set indent(v) {
    this._s(":indent", v);
  }
  /** showEmptyRow. Serialized as `:showEmptyRow` */
  get showEmptyRow() {
    return this._g(":showEmptyRow");
  }
  set showEmptyRow(v) {
    this._s(":showEmptyRow", v);
  }
  /** showEmptyCol. Serialized as `:showEmptyCol` */
  get showEmptyColumn() {
    return this._g(":showEmptyCol");
  }
  set showEmptyColumn(v) {
    this._s(":showEmptyCol", v);
  }
  /** showHeaders. Serialized as `:showHeaders` */
  get showHeaders() {
    return this._g(":showHeaders");
  }
  set showHeaders(v) {
    this._s(":showHeaders", v);
  }
  /** compact. Serialized as `:compact` */
  get compact() {
    return this._g(":compact");
  }
  set compact(v) {
    this._s(":compact", v);
  }
  /** outline. Serialized as `:outline` */
  get outline() {
    return this._g(":outline");
  }
  set outline(v) {
    this._s(":outline", v);
  }
  /** outlineData. Serialized as `:outlineData` */
  get outlineData() {
    return this._g(":outlineData");
  }
  set outlineData(v) {
    this._s(":outlineData", v);
  }
  /** compactData. Serialized as `:compactData` */
  get compactData() {
    return this._g(":compactData");
  }
  set compactData(v) {
    this._s(":compactData", v);
  }
  /** published. Serialized as `:published` */
  get published() {
    return this._g(":published");
  }
  set published(v) {
    this._s(":published", v);
  }
  /** gridDropZones. Serialized as `:gridDropZones` */
  get gridDropZones() {
    return this._g(":gridDropZones");
  }
  set gridDropZones(v) {
    this._s(":gridDropZones", v);
  }
  /** immersive. Serialized as `:immersive` */
  get stopImmersiveUi() {
    return this._g(":immersive");
  }
  set stopImmersiveUi(v) {
    this._s(":immersive", v);
  }
  /** multipleFieldFilters. Serialized as `:multipleFieldFilters` */
  get multipleFieldFilters() {
    return this._g(":multipleFieldFilters");
  }
  set multipleFieldFilters(v) {
    this._s(":multipleFieldFilters", v);
  }
  /** chartFormat. Serialized as `:chartFormat` */
  get chartFormat() {
    return this._g(":chartFormat");
  }
  set chartFormat(v) {
    this._s(":chartFormat", v);
  }
  /** rowHeaderCaption. Serialized as `:rowHeaderCaption` */
  get rowHeaderCaption() {
    return this._g(":rowHeaderCaption");
  }
  set rowHeaderCaption(v) {
    this._s(":rowHeaderCaption", v);
  }
  /** colHeaderCaption. Serialized as `:colHeaderCaption` */
  get columnHeaderCaption() {
    return this._g(":colHeaderCaption");
  }
  set columnHeaderCaption(v) {
    this._s(":colHeaderCaption", v);
  }
  /** fieldListSortAscending. Serialized as `:fieldListSortAscending` */
  get fieldListSortAscending() {
    return this._g(":fieldListSortAscending");
  }
  set fieldListSortAscending(v) {
    this._s(":fieldListSortAscending", v);
  }
  /** mdxSubqueries. Serialized as `:mdxSubqueries` */
  get mdxSubqueries() {
    return this._g(":mdxSubqueries");
  }
  set mdxSubqueries(v) {
    this._s(":mdxSubqueries", v);
  }
  /** customListSort. Serialized as `:customListSort` */
  get customListSort() {
    return this._g(":customListSort");
  }
  set customListSort(v) {
    this._s(":customListSort", v);
  }
  /** Returns Location. */
  get location() {
    return this._f(Location);
  }
  /** Returns PivotFields. */
  get pivotFields() {
    return this._f(PivotFields);
  }
  /** Returns RowFields. */
  get rowFields() {
    return this._f(RowFields);
  }
  /** Returns RowItems. */
  get rowItems() {
    return this._f(RowItems);
  }
  /** Returns ColumnFields. */
  get columnFields() {
    return this._f(ColumnFields);
  }
  /** Returns ColumnItems. */
  get columnItems() {
    return this._f(ColumnItems);
  }
  /** Returns PageFields. */
  get pageFields() {
    return this._f(PageFields);
  }
  /** Returns DataFields. */
  get dataFields() {
    return this._f(DataFields);
  }
  /** Returns Formats. */
  get formats() {
    return this._f(Formats);
  }
  /** Returns ConditionalFormats. */
  get conditionalFormats() {
    return this._f(ConditionalFormats);
  }
  /** Returns ChartFormats. */
  get chartFormats() {
    return this._f(ChartFormats);
  }
  /** Returns PivotHierarchies. */
  get pivotHierarchies() {
    return this._f(PivotHierarchies);
  }
  /** Returns PivotTableStyle. */
  get pivotTableStyle() {
    return this._f(PivotTableStyle);
  }
  /** Returns PivotFilters. */
  get pivotFilters() {
    return this._f(PivotFilters);
  }
  /** Returns RowHierarchiesUsage. */
  get rowHierarchiesUsage() {
    return this._f(RowHierarchiesUsage);
  }
  /** Returns ColumnHierarchiesUsage. */
  get columnHierarchiesUsage() {
    return this._f(ColumnHierarchiesUsage);
  }
  /** Returns PivotTableDefinitionExtensionList. */
  get pivotTableDefinitionExtensionList() {
    return this._f(PivotTableDefinitionExtensionList);
  }
}
class PivotCacheRecords extends OxmlPartRootElement {
  static _Q = "x:pivotCacheRecords";
  static _A = [":count"];
  /** PivotCache Records Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotCacheDefinition extends OxmlPartRootElement {
  static _Q = "x:pivotCacheDefinition";
  static _A = ["r:id", ":invalid", ":saveData", ":refreshOnLoad", ":optimizeMemory", ":enableRefresh", ":refreshedBy", ":refreshedDateIso", ":refreshedDate", ":backgroundQuery", ":missingItemsLimit", ":createdVersion", ":refreshedVersion", ":minRefreshableVersion", ":recordCount", ":upgradeOnRefresh", ":tupleCache", ":supportSubquery", ":supportAdvancedDrill"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** invalid. Serialized as `:invalid` */
  get invalid() {
    return this._g(":invalid");
  }
  set invalid(v) {
    this._s(":invalid", v);
  }
  /** saveData. Serialized as `:saveData` */
  get saveData() {
    return this._g(":saveData");
  }
  set saveData(v) {
    this._s(":saveData", v);
  }
  /** refreshOnLoad. Serialized as `:refreshOnLoad` */
  get refreshOnLoad() {
    return this._g(":refreshOnLoad");
  }
  set refreshOnLoad(v) {
    this._s(":refreshOnLoad", v);
  }
  /** optimizeMemory. Serialized as `:optimizeMemory` */
  get optimizeMemory() {
    return this._g(":optimizeMemory");
  }
  set optimizeMemory(v) {
    this._s(":optimizeMemory", v);
  }
  /** enableRefresh. Serialized as `:enableRefresh` */
  get enableRefresh() {
    return this._g(":enableRefresh");
  }
  set enableRefresh(v) {
    this._s(":enableRefresh", v);
  }
  /** refreshedBy. Serialized as `:refreshedBy` */
  get refreshedBy() {
    return this._g(":refreshedBy");
  }
  set refreshedBy(v) {
    this._s(":refreshedBy", v);
  }
  /** refreshedDateIso. Serialized as `:refreshedDateIso` */
  get lastRefreshedDateIso() {
    return this._g(":refreshedDateIso");
  }
  set lastRefreshedDateIso(v) {
    this._s(":refreshedDateIso", v);
  }
  /** refreshedDate. Serialized as `:refreshedDate` */
  get refreshedDate() {
    return this._g(":refreshedDate");
  }
  set refreshedDate(v) {
    this._s(":refreshedDate", v);
  }
  /** backgroundQuery. Serialized as `:backgroundQuery` */
  get backgroundQuery() {
    return this._g(":backgroundQuery");
  }
  set backgroundQuery(v) {
    this._s(":backgroundQuery", v);
  }
  /** missingItemsLimit. Serialized as `:missingItemsLimit` */
  get missingItemsLimit() {
    return this._g(":missingItemsLimit");
  }
  set missingItemsLimit(v) {
    this._s(":missingItemsLimit", v);
  }
  /** createdVersion. Serialized as `:createdVersion` */
  get createdVersion() {
    return this._g(":createdVersion");
  }
  set createdVersion(v) {
    this._s(":createdVersion", v);
  }
  /** refreshedVersion. Serialized as `:refreshedVersion` */
  get refreshedVersion() {
    return this._g(":refreshedVersion");
  }
  set refreshedVersion(v) {
    this._s(":refreshedVersion", v);
  }
  /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
  get minRefreshableVersion() {
    return this._g(":minRefreshableVersion");
  }
  set minRefreshableVersion(v) {
    this._s(":minRefreshableVersion", v);
  }
  /** recordCount. Serialized as `:recordCount` */
  get recordCount() {
    return this._g(":recordCount");
  }
  set recordCount(v) {
    this._s(":recordCount", v);
  }
  /** upgradeOnRefresh. Serialized as `:upgradeOnRefresh` */
  get upgradeOnRefresh() {
    return this._g(":upgradeOnRefresh");
  }
  set upgradeOnRefresh(v) {
    this._s(":upgradeOnRefresh", v);
  }
  /** tupleCache. Serialized as `:tupleCache` */
  get isTupleCache() {
    return this._g(":tupleCache");
  }
  set isTupleCache(v) {
    this._s(":tupleCache", v);
  }
  /** supportSubquery. Serialized as `:supportSubquery` */
  get supportSubquery() {
    return this._g(":supportSubquery");
  }
  set supportSubquery(v) {
    this._s(":supportSubquery", v);
  }
  /** supportAdvancedDrill. Serialized as `:supportAdvancedDrill` */
  get supportAdvancedDrill() {
    return this._g(":supportAdvancedDrill");
  }
  set supportAdvancedDrill(v) {
    this._s(":supportAdvancedDrill", v);
  }
  /** Returns CacheSource. */
  get cacheSource() {
    return this._f(CacheSource);
  }
  /** Returns CacheFields. */
  get cacheFields() {
    return this._f(CacheFields);
  }
  /** Returns CacheHierarchies. */
  get cacheHierarchies() {
    return this._f(CacheHierarchies);
  }
  /** Returns Kpis. */
  get kpis() {
    return this._f(Kpis);
  }
  /** Returns TupleCache. */
  get tupleCache() {
    return this._f(TupleCache);
  }
  /** Returns CalculatedItems. */
  get calculatedItems() {
    return this._f(CalculatedItems);
  }
  /** Returns CalculatedMembers. */
  get calculatedMembers() {
    return this._f(CalculatedMembers);
  }
  /** Returns Dimensions. */
  get dimensions() {
    return this._f(Dimensions);
  }
  /** Returns MeasureGroups. */
  get measureGroups() {
    return this._f(MeasureGroups);
  }
  /** Returns Maps. */
  get maps() {
    return this._f(Maps);
  }
  /** Returns PivotCacheDefinitionExtensionList. */
  get pivotCacheDefinitionExtensionList() {
    return this._f(PivotCacheDefinitionExtensionList);
  }
}
class Connections extends OxmlPartRootElement {
  static _Q = "x:connections";
}
class MapInfo extends OxmlPartRootElement {
  static _Q = "x:MapInfo";
  static _A = [":SelectionNamespaces"];
  /** Prefix Mappings for XPath Expressions. Serialized as `:SelectionNamespaces` */
  get selectionNamespaces() {
    return this._g(":SelectionNamespaces");
  }
  set selectionNamespaces(v) {
    this._s(":SelectionNamespaces", v);
  }
}
class Comments extends OxmlPartRootElement {
  static _Q = "x:comments";
  /** Authors. */
  get authors() {
    return this._f(Authors);
  }
  /** List of Comments. */
  get commentList() {
    return this._f(CommentList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CalculationChain extends OxmlPartRootElement {
  static _Q = "x:calcChain";
}
class Extension extends OxmlCompositeElement {
  static _Q = "x:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
function initSpreadsheetNamespace() {
  SheetDataSet._C = {
    "x:sheetData": ExternalSheetData
  };
  ExternalDefinedNames._C = {
    "x:definedName": ExternalDefinedName
  };
  SheetNames._C = {
    "x:sheetName": SheetName
  };
  RichDataPivotCacheGuid._D = {
    ":pivotCacheGuid": new OxmlAttr(":pivotCacheGuid", OxmlType.StringValue)
  };
  PivotCacheDefinitionExtension._C = {
    "x14:pivotCacheDefinition": X14PivotCacheDefinition,
    "x15:pivotCacheDecoupled": X15PivotCacheDecoupled,
    "x15:timelinePivotCacheDefinition": X15TimelinePivotCacheDefinition,
    "x15:pivotCacheIdVersion": X15PivotCacheIdVersion,
    "xxpim:implicitMeasureSupport": XxpimXsdboolean,
    "x:richInfo": RichDataPivotCacheGuid,
    "xxpvi:cacheVersionInfo": XxpviCacheVersionInfo
  };
  PivotCacheDefinitionExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PivotCacheDefinitionExtensionList._C = {
    "x:ext": PivotCacheDefinitionExtension
  };
  Maps._C = {
    "x:map": MeasureDimensionMap
  };
  Maps._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  MeasureGroups._C = {
    "x:measureGroup": MeasureGroup
  };
  MeasureGroups._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Dimensions._C = {
    "x:dimension": Dimension
  };
  Dimensions._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CalculatedMembers._C = {
    "x:calculatedMember": CalculatedMember
  };
  CalculatedMembers._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CalculatedItems._C = {
    "x:calculatedItem": CalculatedItem
  };
  CalculatedItems._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  TupleCache._C = {
    "x:entries": Entries,
    "x:sets": Sets,
    "x:queryCache": QueryCache,
    "x:serverFormats": ServerFormats,
    "x:extLst": ExtensionList
  };
  Kpis._C = {
    "x:kpi": Kpi
  };
  Kpis._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CacheHierarchies._C = {
    "x:cacheHierarchy": CacheHierarchy
  };
  CacheHierarchies._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CacheFields._C = {
    "x:cacheField": CacheField
  };
  CacheFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CacheSource._C = {
    "x:worksheetSource": WorksheetSource,
    "x:consolidation": Consolidation,
    "x:extLst": CacheSourceExtensionList
  };
  CacheSource._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, SourceValuesArray),
    ":connectionId": new OxmlAttr(":connectionId", OxmlType.UInt32Value)
  };
  PivotTableDefinitionExtension._C = {
    "x14:pivotTableDefinition": X14PivotTableDefinition,
    "x15:pivotTableData": X15PivotTableData,
    "x15:pivotTableUISettings": X15PivotTableUISettings,
    "xxpvi:pivotVersionInfo": XxpviPivotVersionInfo
  };
  PivotTableDefinitionExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PivotTableDefinitionExtensionList._C = {
    "x:ext": PivotTableDefinitionExtension
  };
  ColumnHierarchiesUsage._C = {
    "x:colHierarchyUsage": ColumnHierarchyUsage
  };
  ColumnHierarchiesUsage._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RowHierarchiesUsage._C = {
    "x:rowHierarchyUsage": RowHierarchyUsage
  };
  RowHierarchiesUsage._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotFilters._C = {
    "x:filter": PivotFilter
  };
  PivotFilters._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotTableStyle._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":showRowHeaders": new OxmlAttr(":showRowHeaders", OxmlType.BooleanValue),
    ":showColHeaders": new OxmlAttr(":showColHeaders", OxmlType.BooleanValue),
    ":showRowStripes": new OxmlAttr(":showRowStripes", OxmlType.BooleanValue),
    ":showColStripes": new OxmlAttr(":showColStripes", OxmlType.BooleanValue),
    ":showLastColumn": new OxmlAttr(":showLastColumn", OxmlType.BooleanValue)
  };
  PivotHierarchies._C = {
    "x:pivotHierarchy": PivotHierarchy
  };
  PivotHierarchies._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ChartFormats._C = {
    "x:chartFormat": ChartFormat
  };
  ChartFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConditionalFormats._C = {
    "x:conditionalFormat": ConditionalFormat
  };
  ConditionalFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Formats._C = {
    "x:format": Format
  };
  Formats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  DataFields._C = {
    "x:dataField": DataField
  };
  DataFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PageFields._C = {
    "x:pageField": PageField
  };
  PageFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ColumnItems._C = {
    "x:i": RowItem
  };
  ColumnItems._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ColumnFields._C = {
    "x:field": Field
  };
  ColumnFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RowItems._C = {
    "x:i": RowItem
  };
  RowItems._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RowFields._C = {
    "x:field": Field
  };
  RowFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotFields._C = {
    "x:pivotField": PivotField
  };
  PivotFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Location._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":firstHeaderRow": new OxmlAttr(":firstHeaderRow", OxmlType.UInt32Value),
    ":firstDataRow": new OxmlAttr(":firstDataRow", OxmlType.UInt32Value),
    ":firstDataCol": new OxmlAttr(":firstDataCol", OxmlType.UInt32Value),
    ":rowPageCount": new OxmlAttr(":rowPageCount", OxmlType.UInt32Value),
    ":colPageCount": new OxmlAttr(":colPageCount", OxmlType.UInt32Value)
  };
  WorkbookExtension._C = {
    "x14:definedNames": X14DefinedNames,
    "x14:pivotCaches": X14PivotCaches,
    "x14:slicerCaches": X14SlicerCaches,
    "x15:slicerCaches": X15SlicerCaches,
    "x14:workbookPr": X14WorkbookProperties,
    "x15:pivotCaches": X15PivotCaches,
    "x15:pivotTableReferences": X15PivotTableReferences,
    "x15:timelineCachePivotCaches": X15TimelineCachePivotCaches,
    "x15:timelineCacheRefs": X15TimelineCacheReferences,
    "x15:workbookPr": X15WorkbookProperties,
    "x15:dataModel": X15DataModel
  };
  WorkbookExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  WorkbookExtensionList._C = {
    "x:ext": WorkbookExtension
  };
  WebPublishObjects._C = {
    "x:webPublishObject": WebPublishObject
  };
  WebPublishObjects._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  FileRecoveryProperties._D = {
    ":autoRecover": new OxmlAttr(":autoRecover", OxmlType.BooleanValue),
    ":crashSave": new OxmlAttr(":crashSave", OxmlType.BooleanValue),
    ":dataExtractLoad": new OxmlAttr(":dataExtractLoad", OxmlType.BooleanValue),
    ":repairLoad": new OxmlAttr(":repairLoad", OxmlType.BooleanValue)
  };
  WebPublishing._D = {
    ":css": new OxmlAttr(":css", OxmlType.BooleanValue),
    ":thicket": new OxmlAttr(":thicket", OxmlType.BooleanValue),
    ":longFileNames": new OxmlAttr(":longFileNames", OxmlType.BooleanValue),
    ":vml": new OxmlAttr(":vml", OxmlType.BooleanValue),
    ":allowPng": new OxmlAttr(":allowPng", OxmlType.BooleanValue),
    ":targetScreenSize": new OxmlAttr(":targetScreenSize", OxmlType.EnumValue, TargetScreenSizeValuesArray),
    ":dpi": new OxmlAttr(":dpi", OxmlType.UInt32Value),
    ":codePage": new OxmlAttr(":codePage", OxmlType.UInt32Value),
    ":characterSet": new OxmlAttr(":characterSet", OxmlType.StringValue)
  };
  PivotCaches._C = {
    "x:pivotCache": PivotCache
  };
  CustomWorkbookViews._C = {
    "x:customWorkbookView": CustomWorkbookView
  };
  OleSize._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  CalculationProperties._D = {
    ":calcId": new OxmlAttr(":calcId", OxmlType.UInt32Value),
    ":calcMode": new OxmlAttr(":calcMode", OxmlType.EnumValue, CalculateModeValuesArray),
    ":fullCalcOnLoad": new OxmlAttr(":fullCalcOnLoad", OxmlType.BooleanValue),
    ":refMode": new OxmlAttr(":refMode", OxmlType.EnumValue, ReferenceModeValuesArray),
    ":iterate": new OxmlAttr(":iterate", OxmlType.BooleanValue),
    ":iterateCount": new OxmlAttr(":iterateCount", OxmlType.UInt32Value),
    ":iterateDelta": new OxmlAttr(":iterateDelta", OxmlType.DoubleValue),
    ":fullPrecision": new OxmlAttr(":fullPrecision", OxmlType.BooleanValue),
    ":calcCompleted": new OxmlAttr(":calcCompleted", OxmlType.BooleanValue),
    ":calcOnSave": new OxmlAttr(":calcOnSave", OxmlType.BooleanValue),
    ":concurrentCalc": new OxmlAttr(":concurrentCalc", OxmlType.BooleanValue),
    ":concurrentManualCount": new OxmlAttr(":concurrentManualCount", OxmlType.UInt32Value),
    ":forceFullCalc": new OxmlAttr(":forceFullCalc", OxmlType.BooleanValue)
  };
  DefinedNames._C = {
    "x:definedName": DefinedName
  };
  ExternalReferences._C = {
    "x:externalReference": ExternalReference
  };
  FunctionGroups._C = {
    "x:functionGroup": FunctionGroup
  };
  FunctionGroups._D = {
    ":builtInGroupCount": new OxmlAttr(":builtInGroupCount", OxmlType.UInt32Value)
  };
  Sheets._C = {
    "x:sheet": Sheet
  };
  BookViews._C = {
    "x:workbookView": WorkbookView
  };
  WorkbookProtection._D = {
    ":workbookPassword": new OxmlAttr(":workbookPassword", OxmlType.HexBinaryValue),
    ":revisionsPassword": new OxmlAttr(":revisionsPassword", OxmlType.HexBinaryValue),
    ":lockStructure": new OxmlAttr(":lockStructure", OxmlType.BooleanValue),
    ":lockWindows": new OxmlAttr(":lockWindows", OxmlType.BooleanValue),
    ":lockRevision": new OxmlAttr(":lockRevision", OxmlType.BooleanValue),
    ":revisionsAlgorithmName": new OxmlAttr(":revisionsAlgorithmName", OxmlType.StringValue),
    ":revisionsHashValue": new OxmlAttr(":revisionsHashValue", OxmlType.Base64BinaryValue),
    ":revisionsSaltValue": new OxmlAttr(":revisionsSaltValue", OxmlType.Base64BinaryValue),
    ":revisionsSpinCount": new OxmlAttr(":revisionsSpinCount", OxmlType.UInt32Value),
    ":workbookAlgorithmName": new OxmlAttr(":workbookAlgorithmName", OxmlType.StringValue),
    ":workbookHashValue": new OxmlAttr(":workbookHashValue", OxmlType.Base64BinaryValue),
    ":workbookSaltValue": new OxmlAttr(":workbookSaltValue", OxmlType.Base64BinaryValue),
    ":workbookSpinCount": new OxmlAttr(":workbookSpinCount", OxmlType.UInt32Value)
  };
  WorkbookProperties._D = {
    ":date1904": new OxmlAttr(":date1904", OxmlType.BooleanValue),
    ":dateCompatibility": new OxmlAttr(":dateCompatibility", OxmlType.BooleanValue),
    ":showObjects": new OxmlAttr(":showObjects", OxmlType.EnumValue, ObjectDisplayValuesArray),
    ":showBorderUnselectedTables": new OxmlAttr(":showBorderUnselectedTables", OxmlType.BooleanValue),
    ":filterPrivacy": new OxmlAttr(":filterPrivacy", OxmlType.BooleanValue),
    ":promptedSolutions": new OxmlAttr(":promptedSolutions", OxmlType.BooleanValue),
    ":showInkAnnotation": new OxmlAttr(":showInkAnnotation", OxmlType.BooleanValue),
    ":backupFile": new OxmlAttr(":backupFile", OxmlType.BooleanValue),
    ":saveExternalLinkValues": new OxmlAttr(":saveExternalLinkValues", OxmlType.BooleanValue),
    ":updateLinks": new OxmlAttr(":updateLinks", OxmlType.EnumValue, UpdateLinksBehaviorValuesArray),
    ":codeName": new OxmlAttr(":codeName", OxmlType.StringValue),
    ":hidePivotFieldList": new OxmlAttr(":hidePivotFieldList", OxmlType.BooleanValue),
    ":showPivotChartFilter": new OxmlAttr(":showPivotChartFilter", OxmlType.BooleanValue),
    ":allowRefreshQuery": new OxmlAttr(":allowRefreshQuery", OxmlType.BooleanValue),
    ":publishItems": new OxmlAttr(":publishItems", OxmlType.BooleanValue),
    ":checkCompatibility": new OxmlAttr(":checkCompatibility", OxmlType.BooleanValue),
    ":autoCompressPictures": new OxmlAttr(":autoCompressPictures", OxmlType.BooleanValue),
    ":refreshAllConnections": new OxmlAttr(":refreshAllConnections", OxmlType.BooleanValue),
    ":defaultThemeVersion": new OxmlAttr(":defaultThemeVersion", OxmlType.UInt32Value)
  };
  FileSharing._D = {
    ":readOnlyRecommended": new OxmlAttr(":readOnlyRecommended", OxmlType.BooleanValue),
    ":userName": new OxmlAttr(":userName", OxmlType.StringValue),
    ":reservationPassword": new OxmlAttr(":reservationPassword", OxmlType.HexBinaryValue),
    ":algorithmName": new OxmlAttr(":algorithmName", OxmlType.StringValue),
    ":hashValue": new OxmlAttr(":hashValue", OxmlType.Base64BinaryValue),
    ":saltValue": new OxmlAttr(":saltValue", OxmlType.Base64BinaryValue),
    ":spinCount": new OxmlAttr(":spinCount", OxmlType.UInt32Value)
  };
  FileVersion._D = {
    ":appName": new OxmlAttr(":appName", OxmlType.StringValue),
    ":lastEdited": new OxmlAttr(":lastEdited", OxmlType.StringValue),
    ":lowestEdited": new OxmlAttr(":lowestEdited", OxmlType.StringValue),
    ":rupBuild": new OxmlAttr(":rupBuild", OxmlType.StringValue),
    ":codeName": new OxmlAttr(":codeName", OxmlType.StringValue)
  };
  StylesheetExtension._C = {
    "x14:dxfs": X14DifferentialFormats,
    "x14:slicerStyles": X14SlicerStyles,
    "x15:dxfs": X15DifferentialFormats,
    "x15:timelineStyles": X15TimelineStyles
  };
  StylesheetExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  StylesheetExtensionList._C = {
    "x:ext": StylesheetExtension
  };
  Colors._C = {
    "x:indexedColors": IndexedColors,
    "x:mruColors": MruColors
  };
  TableStyles._C = {
    "x:tableStyle": TableStyle
  };
  TableStyles._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":defaultTableStyle": new OxmlAttr(":defaultTableStyle", OxmlType.StringValue),
    ":defaultPivotStyle": new OxmlAttr(":defaultPivotStyle", OxmlType.StringValue)
  };
  DifferentialFormats._C = {
    "x:dxf": DifferentialFormat
  };
  DifferentialFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CellStyles._C = {
    "x:cellStyle": CellStyle
  };
  CellStyles._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CellFormats._C = {
    "x:xf": CellFormat
  };
  CellFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CellStyleFormats._C = {
    "x:xf": CellFormat
  };
  CellStyleFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Borders._C = {
    "x:border": Border
  };
  Borders._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Fills._C = {
    "x:fill": Fill
  };
  Fills._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Fonts._C = {
    "x:font": Font
  };
  Fonts._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    "x14ac:knownFonts": new OxmlAttr("x14ac:knownFonts", OxmlType.BooleanValue)
  };
  NumberingFormats._C = {
    "x:numFmt": NumberingFormat
  };
  NumberingFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  WorksheetExtension._C = {
    "x14:conditionalFormattings": X14ConditionalFormattings,
    "x14:dataValidations": X14DataValidations,
    "x14:sparklineGroups": X14SparklineGroups,
    "x14:slicerList": X14SlicerList,
    "x14:protectedRanges": X14ProtectedRanges,
    "x14:ignoredErrors": X14IgnoredErrors,
    "x15:webExtensions": X15WebExtensions,
    "x15:timelineRefs": X15TimelineReferences
  };
  WorksheetExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  WorksheetExtensionList._C = {
    "x:ext": WorksheetExtension
  };
  TableParts._C = {
    "x:tablePart": TablePart
  };
  TableParts._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  IgnoredErrors._C = {
    "x:ignoredError": IgnoredError,
    "x:extLst": ExtensionList
  };
  CellWatches._C = {
    "x:cellWatch": CellWatch
  };
  Hyperlinks._C = {
    "x:hyperlink": Hyperlink
  };
  DataValidations._C = {
    "x:dataValidation": DataValidation
  };
  DataValidations._D = {
    ":disablePrompts": new OxmlAttr(":disablePrompts", OxmlType.BooleanValue),
    ":xWindow": new OxmlAttr(":xWindow", OxmlType.UInt32Value),
    ":yWindow": new OxmlAttr(":yWindow", OxmlType.UInt32Value),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  MergeCells._C = {
    "x:mergeCell": MergeCell
  };
  MergeCells._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Scenarios._C = {
    "x:scenario": Scenario
  };
  Scenarios._D = {
    ":current": new OxmlAttr(":current", OxmlType.UInt32Value),
    ":show": new OxmlAttr(":show", OxmlType.UInt32Value),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue)
  };
  ProtectedRanges._C = {
    "x:protectedRange": ProtectedRange
  };
  SheetCalculationProperties._D = {
    ":fullCalcOnLoad": new OxmlAttr(":fullCalcOnLoad", OxmlType.BooleanValue)
  };
  QueryTableExtensionList._C = {
    "x:ext": QueryTableExtension
  };
  QueryTableRefresh._C = {
    "x:queryTableFields": QueryTableFields,
    "x:queryTableDeletedFields": QueryTableDeletedFields,
    "x:sortState": SortState,
    "x:extLst": ExtensionList
  };
  QueryTableRefresh._D = {
    ":preserveSortFilterLayout": new OxmlAttr(":preserveSortFilterLayout", OxmlType.BooleanValue),
    ":fieldIdWrapped": new OxmlAttr(":fieldIdWrapped", OxmlType.BooleanValue),
    ":headersInLastRefresh": new OxmlAttr(":headersInLastRefresh", OxmlType.BooleanValue),
    ":minimumVersion": new OxmlAttr(":minimumVersion", OxmlType.ByteValue),
    ":nextId": new OxmlAttr(":nextId", OxmlType.UInt32Value),
    ":unboundColumnsLeft": new OxmlAttr(":unboundColumnsLeft", OxmlType.UInt32Value),
    ":unboundColumnsRight": new OxmlAttr(":unboundColumnsRight", OxmlType.UInt32Value)
  };
  PivotFilterExtensionList._C = {
    "x:ext": PivotFilterExtension
  };
  DataFieldExtension._C = {
    "x14:dataField": X14DataField,
    "x15:dataField": X15DataField
  };
  DataFieldExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  DataFieldExtensionList._C = {
    "x:ext": DataFieldExtension
  };
  CalculatedMemberExtension._C = {
    "x14:calculatedMember": X14CalculatedMember,
    "x15:calculatedMember": X15CalculatedMember
  };
  CalculatedMemberExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CalculatedMemberExtensionList._C = {
    "x:ext": CalculatedMemberExtension
  };
  CacheHierarchyExtension._C = {
    "x14:cacheHierarchy": X14CacheHierarchy,
    "x15:cacheHierarchy": X15CacheHierarchy
  };
  CacheHierarchyExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CacheHierarchyExtensionList._C = {
    "x:ext": CacheHierarchyExtension
  };
  GroupLevels._C = {
    "x:groupLevel": GroupLevel
  };
  GroupLevels._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  FieldsUsage._C = {
    "x:fieldUsage": FieldUsage
  };
  FieldsUsage._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CacheFieldExtension._C = {
    "x14:cacheField": X14CacheField,
    "x15:cachedUniqueNames": X15CachedUniqueNames
  };
  CacheFieldExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CacheFieldExtensionList._C = {
    "x:ext": CacheFieldExtension
  };
  FieldGroup._C = {
    "x:rangePr": RangeProperties,
    "x:discretePr": DiscreteProperties,
    "x:groupItems": GroupItems
  };
  FieldGroup._D = {
    ":par": new OxmlAttr(":par", OxmlType.UInt32Value),
    ":base": new OxmlAttr(":base", OxmlType.UInt32Value)
  };
  SharedItems._C = {
    "x:m": MissingItem,
    "x:n": NumberItem,
    "x:b": BooleanItem,
    "x:e": ErrorItem,
    "x:s": StringItem,
    "x:d": DateTimeItem
  };
  SharedItems._D = {
    ":containsSemiMixedTypes": new OxmlAttr(":containsSemiMixedTypes", OxmlType.BooleanValue),
    ":containsNonDate": new OxmlAttr(":containsNonDate", OxmlType.BooleanValue),
    ":containsDate": new OxmlAttr(":containsDate", OxmlType.BooleanValue),
    ":containsString": new OxmlAttr(":containsString", OxmlType.BooleanValue),
    ":containsBlank": new OxmlAttr(":containsBlank", OxmlType.BooleanValue),
    ":containsMixedTypes": new OxmlAttr(":containsMixedTypes", OxmlType.BooleanValue),
    ":containsNumber": new OxmlAttr(":containsNumber", OxmlType.BooleanValue),
    ":containsInteger": new OxmlAttr(":containsInteger", OxmlType.BooleanValue),
    ":minValue": new OxmlAttr(":minValue", OxmlType.DoubleValue),
    ":maxValue": new OxmlAttr(":maxValue", OxmlType.DoubleValue),
    ":minDate": new OxmlAttr(":minDate", OxmlType.DateTimeValue),
    ":maxDate": new OxmlAttr(":maxDate", OxmlType.DateTimeValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":longText": new OxmlAttr(":longText", OxmlType.BooleanValue)
  };
  TextFields._C = {
    "x:textField": TextField
  };
  TextFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConnectionExtension._C = {
    "x14:connection": X14Connection,
    "x15:connection": X15Connection
  };
  ConnectionExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ConnectionExtensionList._C = {
    "x:ext": ConnectionExtension
  };
  Parameters._C = {
    "x:parameter": Parameter
  };
  Parameters._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  TextProperties._C = {
    "x:textFields": TextFields
  };
  TextProperties._D = {
    ":prompt": new OxmlAttr(":prompt", OxmlType.BooleanValue),
    ":fileType": new OxmlAttr(":fileType", OxmlType.EnumValue, FileTypeValuesArray),
    ":codePage": new OxmlAttr(":codePage", OxmlType.UInt32Value),
    ":characterSet": new OxmlAttr(":characterSet", OxmlType.StringValue),
    ":firstRow": new OxmlAttr(":firstRow", OxmlType.UInt32Value),
    ":sourceFile": new OxmlAttr(":sourceFile", OxmlType.StringValue),
    ":delimited": new OxmlAttr(":delimited", OxmlType.BooleanValue),
    ":decimal": new OxmlAttr(":decimal", OxmlType.StringValue),
    ":thousands": new OxmlAttr(":thousands", OxmlType.StringValue),
    ":tab": new OxmlAttr(":tab", OxmlType.BooleanValue),
    ":space": new OxmlAttr(":space", OxmlType.BooleanValue),
    ":comma": new OxmlAttr(":comma", OxmlType.BooleanValue),
    ":semicolon": new OxmlAttr(":semicolon", OxmlType.BooleanValue),
    ":consecutive": new OxmlAttr(":consecutive", OxmlType.BooleanValue),
    ":qualifier": new OxmlAttr(":qualifier", OxmlType.EnumValue, QualifierValuesArray),
    ":delimiter": new OxmlAttr(":delimiter", OxmlType.StringValue)
  };
  WebQueryProperties._C = {
    "x:tables": Tables
  };
  WebQueryProperties._D = {
    ":xml": new OxmlAttr(":xml", OxmlType.BooleanValue),
    ":sourceData": new OxmlAttr(":sourceData", OxmlType.BooleanValue),
    ":parsePre": new OxmlAttr(":parsePre", OxmlType.BooleanValue),
    ":consecutive": new OxmlAttr(":consecutive", OxmlType.BooleanValue),
    ":firstRow": new OxmlAttr(":firstRow", OxmlType.BooleanValue),
    ":xl97": new OxmlAttr(":xl97", OxmlType.BooleanValue),
    ":textDates": new OxmlAttr(":textDates", OxmlType.BooleanValue),
    ":xl2000": new OxmlAttr(":xl2000", OxmlType.BooleanValue),
    ":url": new OxmlAttr(":url", OxmlType.StringValue),
    ":post": new OxmlAttr(":post", OxmlType.StringValue),
    ":htmlTables": new OxmlAttr(":htmlTables", OxmlType.BooleanValue),
    ":htmlFormat": new OxmlAttr(":htmlFormat", OxmlType.EnumValue, HtmlFormattingValuesArray),
    ":editPage": new OxmlAttr(":editPage", OxmlType.StringValue)
  };
  OlapProperties._D = {
    ":local": new OxmlAttr(":local", OxmlType.BooleanValue),
    ":localConnection": new OxmlAttr(":localConnection", OxmlType.StringValue),
    ":localRefresh": new OxmlAttr(":localRefresh", OxmlType.BooleanValue),
    ":sendLocale": new OxmlAttr(":sendLocale", OxmlType.BooleanValue),
    ":rowDrillCount": new OxmlAttr(":rowDrillCount", OxmlType.UInt32Value),
    ":serverFill": new OxmlAttr(":serverFill", OxmlType.BooleanValue),
    ":serverNumberFormat": new OxmlAttr(":serverNumberFormat", OxmlType.BooleanValue),
    ":serverFont": new OxmlAttr(":serverFont", OxmlType.BooleanValue),
    ":serverFontColor": new OxmlAttr(":serverFontColor", OxmlType.BooleanValue)
  };
  DatabaseProperties._D = {
    ":connection": new OxmlAttr(":connection", OxmlType.StringValue),
    ":command": new OxmlAttr(":command", OxmlType.StringValue),
    ":serverCommand": new OxmlAttr(":serverCommand", OxmlType.StringValue),
    ":commandType": new OxmlAttr(":commandType", OxmlType.UInt32Value)
  };
  QueryTableExtension._C = {
    "x15:queryTable": X15QueryTable
  };
  QueryTableExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PivotFilterExtension._C = {
    "x15:pivotFilter": X15PivotFilter,
    "x15:movingPeriodState": X15MovingPeriodState
  };
  PivotFilterExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SlicerCacheDefinitionExtension._C = {
    "x15:slicerCachePivotTables": X15SlicerCachePivotTables,
    "x15:tableSlicerCache": X15TableSlicerCache,
    "x15:slicerCacheHideItemsWithNoData": X15SlicerCacheHideItemsWithNoData
  };
  SlicerCacheDefinitionExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  IconFilter._D = {
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  ColorFilter._D = {
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value),
    ":cellColor": new OxmlAttr(":cellColor", OxmlType.BooleanValue)
  };
  DynamicFilter._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, DynamicFilterValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue),
    ":maxVal": new OxmlAttr(":maxVal", OxmlType.DoubleValue),
    ":valIso": new OxmlAttr(":valIso", OxmlType.DateTimeValue),
    ":maxValIso": new OxmlAttr(":maxValIso", OxmlType.DateTimeValue)
  };
  CustomFilters._C = {
    "x:customFilter": CustomFilter
  };
  CustomFilters._D = {
    ":and": new OxmlAttr(":and", OxmlType.BooleanValue)
  };
  Top10._D = {
    ":top": new OxmlAttr(":top", OxmlType.BooleanValue),
    ":percent": new OxmlAttr(":percent", OxmlType.BooleanValue),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue),
    ":filterVal": new OxmlAttr(":filterVal", OxmlType.DoubleValue)
  };
  Filters._C = {
    "x14:filter": X14Filter,
    "x:filter": Filter,
    "x:dateGroupItem": DateGroupItem
  };
  Filters._D = {
    ":blank": new OxmlAttr(":blank", OxmlType.BooleanValue),
    ":calendarType": new OxmlAttr(":calendarType", OxmlType.EnumValue, CalendarValuesArray)
  };
  DateGroupItem._D = {
    ":year": new OxmlAttr(":year", OxmlType.UInt16Value),
    ":month": new OxmlAttr(":month", OxmlType.UInt16Value),
    ":day": new OxmlAttr(":day", OxmlType.UInt16Value),
    ":hour": new OxmlAttr(":hour", OxmlType.UInt16Value),
    ":minute": new OxmlAttr(":minute", OxmlType.UInt16Value),
    ":second": new OxmlAttr(":second", OxmlType.UInt16Value),
    ":dateTimeGrouping": new OxmlAttr(":dateTimeGrouping", OxmlType.EnumValue, DateTimeGroupingValuesArray)
  };
  Filter._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  SortCondition._D = {
    ":descending": new OxmlAttr(":descending", OxmlType.BooleanValue),
    ":sortBy": new OxmlAttr(":sortBy", OxmlType.EnumValue, SortByValuesArray),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":customList": new OxmlAttr(":customList", OxmlType.StringValue),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value),
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  CommentProperties._C = {
    "x:anchor": ObjectAnchor
  };
  CommentProperties._D = {
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue),
    ":defaultSize": new OxmlAttr(":defaultSize", OxmlType.BooleanValue),
    ":print": new OxmlAttr(":print", OxmlType.BooleanValue),
    ":disabled": new OxmlAttr(":disabled", OxmlType.BooleanValue),
    ":uiObject": new OxmlAttr(":uiObject", OxmlType.BooleanValue),
    ":autoFill": new OxmlAttr(":autoFill", OxmlType.BooleanValue),
    ":autoLine": new OxmlAttr(":autoLine", OxmlType.BooleanValue),
    ":altText": new OxmlAttr(":altText", OxmlType.StringValue),
    ":textHAlign": new OxmlAttr(":textHAlign", OxmlType.EnumValue, TextHorizontalAlignmentValuesArray),
    ":textVAlign": new OxmlAttr(":textVAlign", OxmlType.EnumValue, TextVerticalAlignmentValuesArray),
    ":lockText": new OxmlAttr(":lockText", OxmlType.BooleanValue),
    ":justLastX": new OxmlAttr(":justLastX", OxmlType.BooleanValue),
    ":autoScale": new OxmlAttr(":autoScale", OxmlType.BooleanValue),
    ":rowHidden": new OxmlAttr(":rowHidden", OxmlType.BooleanValue),
    ":colHidden": new OxmlAttr(":colHidden", OxmlType.BooleanValue)
  };
  CacheSourceExtensionList._C = {
    "x:ext": CacheSourceExtension
  };
  Consolidation._C = {
    "x:pages": Pages,
    "x:rangeSets": RangeSets
  };
  Consolidation._D = {
    ":autoPage": new OxmlAttr(":autoPage", OxmlType.BooleanValue)
  };
  WorksheetSource._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sheet": new OxmlAttr(":sheet", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  PivotFieldExtensionList._C = {
    "x:ext": PivotFieldExtension
  };
  AutoSortScope._C = {
    "x:pivotArea": PivotArea
  };
  Items._C = {
    "x:item": Item
  };
  Items._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotHierarchyExtensionList._C = {
    "x:ext": PivotHierarchyExtension
  };
  Members._C = {
    "x:member": Member
  };
  Members._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":level": new OxmlAttr(":level", OxmlType.UInt32Value)
  };
  MemberProperties._C = {
    "x:mp": MemberProperty
  };
  MemberProperties._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CustomProperties._C = {
    "x:customPr": CustomProperty
  };
  ConditionalFormatting._C = {
    "x:cfRule": ConditionalFormattingRule,
    "x:extLst": ExtensionList
  };
  ConditionalFormatting._D = {
    ":pivot": new OxmlAttr(":pivot", OxmlType.BooleanValue),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue)
  };
  DataConsolidate._C = {
    "x:dataRefs": DataReferences
  };
  DataConsolidate._D = {
    ":function": new OxmlAttr(":function", OxmlType.EnumValue, DataConsolidateFunctionValuesArray),
    ":leftLabels": new OxmlAttr(":leftLabels", OxmlType.BooleanValue),
    ":startLabels": new OxmlAttr(":startLabels", OxmlType.BooleanValue),
    ":topLabels": new OxmlAttr(":topLabels", OxmlType.BooleanValue),
    ":link": new OxmlAttr(":link", OxmlType.BooleanValue)
  };
  SheetData._C = {
    "x:row": Row
  };
  Columns._C = {
    "x:col": Column
  };
  SheetDimension._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  Controls._C = {
    "x:control": Control
  };
  OleObjects._C = {
    "x:oleObject": OleObject
  };
  CustomSheetViews._C = {
    "x:customSheetView": CustomSheetView
  };
  SheetProtection._D = {
    ":password": new OxmlAttr(":password", OxmlType.HexBinaryValue),
    ":algorithmName": new OxmlAttr(":algorithmName", OxmlType.StringValue),
    ":hashValue": new OxmlAttr(":hashValue", OxmlType.Base64BinaryValue),
    ":saltValue": new OxmlAttr(":saltValue", OxmlType.Base64BinaryValue),
    ":spinCount": new OxmlAttr(":spinCount", OxmlType.UInt32Value),
    ":sheet": new OxmlAttr(":sheet", OxmlType.BooleanValue),
    ":objects": new OxmlAttr(":objects", OxmlType.BooleanValue),
    ":scenarios": new OxmlAttr(":scenarios", OxmlType.BooleanValue),
    ":formatCells": new OxmlAttr(":formatCells", OxmlType.BooleanValue),
    ":formatColumns": new OxmlAttr(":formatColumns", OxmlType.BooleanValue),
    ":formatRows": new OxmlAttr(":formatRows", OxmlType.BooleanValue),
    ":insertColumns": new OxmlAttr(":insertColumns", OxmlType.BooleanValue),
    ":insertRows": new OxmlAttr(":insertRows", OxmlType.BooleanValue),
    ":insertHyperlinks": new OxmlAttr(":insertHyperlinks", OxmlType.BooleanValue),
    ":deleteColumns": new OxmlAttr(":deleteColumns", OxmlType.BooleanValue),
    ":deleteRows": new OxmlAttr(":deleteRows", OxmlType.BooleanValue),
    ":selectLockedCells": new OxmlAttr(":selectLockedCells", OxmlType.BooleanValue),
    ":sort": new OxmlAttr(":sort", OxmlType.BooleanValue),
    ":autoFilter": new OxmlAttr(":autoFilter", OxmlType.BooleanValue),
    ":pivotTables": new OxmlAttr(":pivotTables", OxmlType.BooleanValue),
    ":selectUnlockedCells": new OxmlAttr(":selectUnlockedCells", OxmlType.BooleanValue)
  };
  SheetFormatProperties._D = {
    ":baseColWidth": new OxmlAttr(":baseColWidth", OxmlType.UInt32Value),
    ":defaultColWidth": new OxmlAttr(":defaultColWidth", OxmlType.DoubleValue),
    ":defaultRowHeight": new OxmlAttr(":defaultRowHeight", OxmlType.DoubleValue),
    ":customHeight": new OxmlAttr(":customHeight", OxmlType.BooleanValue),
    ":zeroHeight": new OxmlAttr(":zeroHeight", OxmlType.BooleanValue),
    ":thickTop": new OxmlAttr(":thickTop", OxmlType.BooleanValue),
    ":thickBottom": new OxmlAttr(":thickBottom", OxmlType.BooleanValue),
    ":outlineLevelRow": new OxmlAttr(":outlineLevelRow", OxmlType.ByteValue),
    ":outlineLevelCol": new OxmlAttr(":outlineLevelCol", OxmlType.ByteValue),
    "x14ac:dyDescent": new OxmlAttr("x14ac:dyDescent", OxmlType.DoubleValue)
  };
  SheetViews._C = {
    "x:sheetView": SheetView,
    "x:extLst": ExtensionList
  };
  SheetProperties._C = {
    "x:tabColor": TabColor,
    "x:outlinePr": OutlineProperties,
    "x:pageSetUpPr": PageSetupProperties
  };
  SheetProperties._D = {
    ":syncHorizontal": new OxmlAttr(":syncHorizontal", OxmlType.BooleanValue),
    ":syncVertical": new OxmlAttr(":syncVertical", OxmlType.BooleanValue),
    ":syncRef": new OxmlAttr(":syncRef", OxmlType.StringValue),
    ":transitionEvaluation": new OxmlAttr(":transitionEvaluation", OxmlType.BooleanValue),
    ":transitionEntry": new OxmlAttr(":transitionEntry", OxmlType.BooleanValue),
    ":published": new OxmlAttr(":published", OxmlType.BooleanValue),
    ":codeName": new OxmlAttr(":codeName", OxmlType.StringValue),
    ":filterMode": new OxmlAttr(":filterMode", OxmlType.BooleanValue),
    ":enableFormatConditionsCalculation": new OxmlAttr(":enableFormatConditionsCalculation", OxmlType.BooleanValue)
  };
  DataReferences._C = {
    "x:dataRef": DataReference
  };
  DataReferences._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConditionalFormattingRuleExtensionList._C = {
    "x:ext": ConditionalFormattingRuleExtension
  };
  IconSet._C = {
    "x:cfvo": ConditionalFormatValueObject
  };
  IconSet._D = {
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetValuesArray),
    ":showValue": new OxmlAttr(":showValue", OxmlType.BooleanValue),
    ":percent": new OxmlAttr(":percent", OxmlType.BooleanValue),
    ":reverse": new OxmlAttr(":reverse", OxmlType.BooleanValue)
  };
  DataBar._C = {
    "x:cfvo": ConditionalFormatValueObject,
    "x:color": Color
  };
  DataBar._D = {
    ":minLength": new OxmlAttr(":minLength", OxmlType.UInt32Value),
    ":maxLength": new OxmlAttr(":maxLength", OxmlType.UInt32Value),
    ":showValue": new OxmlAttr(":showValue", OxmlType.BooleanValue)
  };
  ColorScale._C = {
    "x:cfvo": ConditionalFormatValueObject,
    "x:color": Color
  };
  WebPublishItems._C = {
    "x:webPublishItem": WebPublishItem
  };
  WebPublishItems._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Picture._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  DrawingHeaderFooter._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":lho": new OxmlAttr(":lho", OxmlType.UInt32Value),
    ":lhe": new OxmlAttr(":lhe", OxmlType.UInt32Value),
    ":lhf": new OxmlAttr(":lhf", OxmlType.UInt32Value),
    ":cho": new OxmlAttr(":cho", OxmlType.UInt32Value),
    ":che": new OxmlAttr(":che", OxmlType.UInt32Value),
    ":chf": new OxmlAttr(":chf", OxmlType.UInt32Value),
    ":rho": new OxmlAttr(":rho", OxmlType.UInt32Value),
    ":rhe": new OxmlAttr(":rhe", OxmlType.UInt32Value),
    ":rhf": new OxmlAttr(":rhf", OxmlType.UInt32Value),
    ":lfo": new OxmlAttr(":lfo", OxmlType.UInt32Value),
    ":lfe": new OxmlAttr(":lfe", OxmlType.UInt32Value),
    ":lff": new OxmlAttr(":lff", OxmlType.UInt32Value),
    ":cfo": new OxmlAttr(":cfo", OxmlType.UInt32Value),
    ":cfe": new OxmlAttr(":cfe", OxmlType.UInt32Value),
    ":cff": new OxmlAttr(":cff", OxmlType.UInt32Value),
    ":rfo": new OxmlAttr(":rfo", OxmlType.UInt32Value),
    ":rfe": new OxmlAttr(":rfe", OxmlType.UInt32Value),
    ":rff": new OxmlAttr(":rff", OxmlType.UInt32Value)
  };
  LegacyDrawingType._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Drawing._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  CustomChartsheetViews._C = {
    "x:customSheetView": CustomChartsheetView
  };
  ChartSheetProtection._D = {
    ":password": new OxmlAttr(":password", OxmlType.HexBinaryValue),
    ":algorithmName": new OxmlAttr(":algorithmName", OxmlType.StringValue),
    ":hashValue": new OxmlAttr(":hashValue", OxmlType.Base64BinaryValue),
    ":saltValue": new OxmlAttr(":saltValue", OxmlType.Base64BinaryValue),
    ":spinCount": new OxmlAttr(":spinCount", OxmlType.UInt32Value),
    ":content": new OxmlAttr(":content", OxmlType.BooleanValue),
    ":objects": new OxmlAttr(":objects", OxmlType.BooleanValue)
  };
  ChartSheetViews._C = {
    "x:sheetView": ChartSheetView,
    "x:extLst": ExtensionList
  };
  ChartSheetProperties._C = {
    "x:tabColor": TabColor
  };
  ChartSheetProperties._D = {
    ":published": new OxmlAttr(":published", OxmlType.BooleanValue),
    ":codeName": new OxmlAttr(":codeName", OxmlType.StringValue)
  };
  EmbeddedObjectProperties._C = {
    "x:anchor": ObjectAnchor
  };
  EmbeddedObjectProperties._D = {
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue),
    ":defaultSize": new OxmlAttr(":defaultSize", OxmlType.BooleanValue),
    ":print": new OxmlAttr(":print", OxmlType.BooleanValue),
    ":disabled": new OxmlAttr(":disabled", OxmlType.BooleanValue),
    ":uiObject": new OxmlAttr(":uiObject", OxmlType.BooleanValue),
    ":autoFill": new OxmlAttr(":autoFill", OxmlType.BooleanValue),
    ":autoLine": new OxmlAttr(":autoLine", OxmlType.BooleanValue),
    ":autoPict": new OxmlAttr(":autoPict", OxmlType.BooleanValue),
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":altText": new OxmlAttr(":altText", OxmlType.StringValue),
    ":dde": new OxmlAttr(":dde", OxmlType.BooleanValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ControlProperties._C = {
    "x:anchor": ObjectAnchor
  };
  ControlProperties._D = {
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue),
    ":defaultSize": new OxmlAttr(":defaultSize", OxmlType.BooleanValue),
    ":print": new OxmlAttr(":print", OxmlType.BooleanValue),
    ":disabled": new OxmlAttr(":disabled", OxmlType.BooleanValue),
    ":recalcAlways": new OxmlAttr(":recalcAlways", OxmlType.BooleanValue),
    ":uiObject": new OxmlAttr(":uiObject", OxmlType.BooleanValue),
    ":autoFill": new OxmlAttr(":autoFill", OxmlType.BooleanValue),
    ":autoLine": new OxmlAttr(":autoLine", OxmlType.BooleanValue),
    ":autoPict": new OxmlAttr(":autoPict", OxmlType.BooleanValue),
    ":macro": new OxmlAttr(":macro", OxmlType.StringValue),
    ":altText": new OxmlAttr(":altText", OxmlType.StringValue),
    ":linkedCell": new OxmlAttr(":linkedCell", OxmlType.StringValue),
    ":listFillRange": new OxmlAttr(":listFillRange", OxmlType.StringValue),
    ":cf": new OxmlAttr(":cf", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  BorderPropertiesType._C = {
    "x:color": Color
  };
  BorderPropertiesType._D = {
    ":style": new OxmlAttr(":style", OxmlType.EnumValue, BorderStyleValuesArray)
  };
  HorizontalBorder._C = {
    "x:color": Color
  };
  VerticalBorder._C = {
    "x:color": Color
  };
  DiagonalBorder._C = {
    "x:color": Color
  };
  BottomBorder._C = {
    "x:color": Color
  };
  TopBorder._C = {
    "x:color": Color
  };
  RightBorder._C = {
    "x:color": Color
  };
  LeftBorder._C = {
    "x:color": Color
  };
  EndBorder._C = {
    "x:color": Color
  };
  StartBorder._C = {
    "x:color": Color
  };
  OleItem._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":icon": new OxmlAttr(":icon", OxmlType.BooleanValue),
    ":advise": new OxmlAttr(":advise", OxmlType.BooleanValue),
    ":preferPic": new OxmlAttr(":preferPic", OxmlType.BooleanValue)
  };
  TableExtensionList._C = {
    "x:ext": TableExtension
  };
  TableStyleInfo._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":showFirstColumn": new OxmlAttr(":showFirstColumn", OxmlType.BooleanValue),
    ":showLastColumn": new OxmlAttr(":showLastColumn", OxmlType.BooleanValue),
    ":showRowStripes": new OxmlAttr(":showRowStripes", OxmlType.BooleanValue),
    ":showColumnStripes": new OxmlAttr(":showColumnStripes", OxmlType.BooleanValue)
  };
  TableColumns._C = {
    "x:tableColumn": TableColumn
  };
  TableColumns._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CacheSourceExtension._C = {
    "x14:sourceConnection": X14SourceConnection
  };
  CacheSourceExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PivotFieldExtension._C = {
    "x14:pivotField": X14PivotField
  };
  PivotFieldExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PivotHierarchyExtension._C = {
    "x14:pivotHierarchy": X14PivotHierarchy
  };
  PivotHierarchyExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ConditionalFormattingRuleExtension._C = {
    "x14:id": X14Id
  };
  ConditionalFormattingRuleExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  MarkerType._C = {
    "xdr:col": XdrColumnId,
    "xdr:colOff": XdrColumnOffset,
    "xdr:row": XdrRowId,
    "xdr:rowOff": XdrRowOffset
  };
  ToMarker._C = {
    "xdr:col": XdrColumnId,
    "xdr:colOff": XdrColumnOffset,
    "xdr:row": XdrRowId,
    "xdr:rowOff": XdrRowOffset
  };
  FromMarker._C = {
    "xdr:col": XdrColumnId,
    "xdr:colOff": XdrColumnOffset,
    "xdr:row": XdrRowId,
    "xdr:rowOff": XdrRowOffset
  };
  ObjectAnchor._C = {
    "x:from": FromMarker,
    "x:to": ToMarker
  };
  ObjectAnchor._D = {
    ":moveWithCells": new OxmlAttr(":moveWithCells", OxmlType.BooleanValue),
    ":sizeWithCells": new OxmlAttr(":sizeWithCells", OxmlType.BooleanValue),
    ":z-order": new OxmlAttr(":z-order", OxmlType.UInt32Value)
  };
  TableExtension._C = {
    "x14:table": X14Table
  };
  TableExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  FunctionGroup._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  DefinedName._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":comment": new OxmlAttr(":comment", OxmlType.StringValue),
    ":customMenu": new OxmlAttr(":customMenu", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":help": new OxmlAttr(":help", OxmlType.StringValue),
    ":statusBar": new OxmlAttr(":statusBar", OxmlType.StringValue),
    ":localSheetId": new OxmlAttr(":localSheetId", OxmlType.UInt32Value),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":function": new OxmlAttr(":function", OxmlType.BooleanValue),
    ":vbProcedure": new OxmlAttr(":vbProcedure", OxmlType.BooleanValue),
    ":xlm": new OxmlAttr(":xlm", OxmlType.BooleanValue),
    ":functionGroupId": new OxmlAttr(":functionGroupId", OxmlType.UInt32Value),
    ":shortcutKey": new OxmlAttr(":shortcutKey", OxmlType.StringValue),
    ":publishToServer": new OxmlAttr(":publishToServer", OxmlType.BooleanValue),
    ":workbookParameter": new OxmlAttr(":workbookParameter", OxmlType.BooleanValue)
  };
  WorkbookView._C = {
    "x:extLst": ExtensionList
  };
  WorkbookView._D = {
    ":visibility": new OxmlAttr(":visibility", OxmlType.EnumValue, VisibilityValuesArray),
    ":minimized": new OxmlAttr(":minimized", OxmlType.BooleanValue),
    ":showHorizontalScroll": new OxmlAttr(":showHorizontalScroll", OxmlType.BooleanValue),
    ":showVerticalScroll": new OxmlAttr(":showVerticalScroll", OxmlType.BooleanValue),
    ":showSheetTabs": new OxmlAttr(":showSheetTabs", OxmlType.BooleanValue),
    ":xWindow": new OxmlAttr(":xWindow", OxmlType.Int32Value),
    ":yWindow": new OxmlAttr(":yWindow", OxmlType.Int32Value),
    ":windowWidth": new OxmlAttr(":windowWidth", OxmlType.UInt32Value),
    ":windowHeight": new OxmlAttr(":windowHeight", OxmlType.UInt32Value),
    ":tabRatio": new OxmlAttr(":tabRatio", OxmlType.UInt32Value),
    ":firstSheet": new OxmlAttr(":firstSheet", OxmlType.UInt32Value),
    ":activeTab": new OxmlAttr(":activeTab", OxmlType.UInt32Value),
    ":autoFilterDateGrouping": new OxmlAttr(":autoFilterDateGrouping", OxmlType.BooleanValue)
  };
  Sheet._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":state": new OxmlAttr(":state", OxmlType.EnumValue, SheetStateValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  CustomWorkbookView._C = {
    "x:extLst": ExtensionList
  };
  CustomWorkbookView._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":autoUpdate": new OxmlAttr(":autoUpdate", OxmlType.BooleanValue),
    ":mergeInterval": new OxmlAttr(":mergeInterval", OxmlType.UInt32Value),
    ":changesSavedWin": new OxmlAttr(":changesSavedWin", OxmlType.BooleanValue),
    ":onlySync": new OxmlAttr(":onlySync", OxmlType.BooleanValue),
    ":personalView": new OxmlAttr(":personalView", OxmlType.BooleanValue),
    ":includePrintSettings": new OxmlAttr(":includePrintSettings", OxmlType.BooleanValue),
    ":includeHiddenRowCol": new OxmlAttr(":includeHiddenRowCol", OxmlType.BooleanValue),
    ":maximized": new OxmlAttr(":maximized", OxmlType.BooleanValue),
    ":minimized": new OxmlAttr(":minimized", OxmlType.BooleanValue),
    ":showHorizontalScroll": new OxmlAttr(":showHorizontalScroll", OxmlType.BooleanValue),
    ":showVerticalScroll": new OxmlAttr(":showVerticalScroll", OxmlType.BooleanValue),
    ":showSheetTabs": new OxmlAttr(":showSheetTabs", OxmlType.BooleanValue),
    ":xWindow": new OxmlAttr(":xWindow", OxmlType.Int32Value),
    ":yWindow": new OxmlAttr(":yWindow", OxmlType.Int32Value),
    ":windowWidth": new OxmlAttr(":windowWidth", OxmlType.UInt32Value),
    ":windowHeight": new OxmlAttr(":windowHeight", OxmlType.UInt32Value),
    ":tabRatio": new OxmlAttr(":tabRatio", OxmlType.UInt32Value),
    ":activeSheetId": new OxmlAttr(":activeSheetId", OxmlType.UInt32Value),
    ":showFormulaBar": new OxmlAttr(":showFormulaBar", OxmlType.BooleanValue),
    ":showStatusbar": new OxmlAttr(":showStatusbar", OxmlType.BooleanValue),
    ":showComments": new OxmlAttr(":showComments", OxmlType.EnumValue, CommentsValuesArray),
    ":showObjects": new OxmlAttr(":showObjects", OxmlType.EnumValue, ObjectDisplayValuesArray)
  };
  ExternalReference._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  WebPublishObject._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":divId": new OxmlAttr(":divId", OxmlType.StringValue),
    ":sourceObject": new OxmlAttr(":sourceObject", OxmlType.StringValue),
    ":destinationFile": new OxmlAttr(":destinationFile", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":autoRepublish": new OxmlAttr(":autoRepublish", OxmlType.BooleanValue)
  };
  PivotCache._D = {
    ":cacheId": new OxmlAttr(":cacheId", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  TopicReferences._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":s": new OxmlAttr(":s", OxmlType.UInt32Value)
  };
  Topic._C = {
    "x:v": Xstring,
    "x:stp": Subtopic,
    "x:tr": TopicReferences
  };
  Topic._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, VolatileValuesArray)
  };
  Main._C = {
    "x:tp": Topic
  };
  Main._D = {
    ":first": new OxmlAttr(":first", OxmlType.StringValue)
  };
  VolatileType._C = {
    "x:main": Main
  };
  VolatileType._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, VolatileDependencyValuesArray)
  };
  XmlColumnProperties._C = {
    "x:extLst": ExtensionList
  };
  XmlColumnProperties._D = {
    ":mapId": new OxmlAttr(":mapId", OxmlType.UInt32Value),
    ":xpath": new OxmlAttr(":xpath", OxmlType.StringValue),
    ":denormalized": new OxmlAttr(":denormalized", OxmlType.BooleanValue),
    ":xmlDataType": new OxmlAttr(":xmlDataType", OxmlType.EnumValue, XmlDataValuesArray)
  };
  TableFormulaType._D = {
    ":array": new OxmlAttr(":array", OxmlType.BooleanValue),
    "xml:space": new OxmlAttr("xml:space", OxmlType.EnumValue, SpaceProcessingModeValuesArray)
  };
  TableColumn._C = {
    "x:calculatedColumnFormula": CalculatedColumnFormula,
    "x:totalsRowFormula": TotalsRowFormula,
    "x:xmlColumnPr": XmlColumnProperties,
    "x:extLst": ExtensionList
  };
  TableColumn._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":totalsRowFunction": new OxmlAttr(":totalsRowFunction", OxmlType.EnumValue, TotalsRowFunctionValuesArray),
    ":totalsRowLabel": new OxmlAttr(":totalsRowLabel", OxmlType.StringValue),
    ":queryTableFieldId": new OxmlAttr(":queryTableFieldId", OxmlType.UInt32Value),
    ":headerRowDxfId": new OxmlAttr(":headerRowDxfId", OxmlType.UInt32Value),
    ":dataDxfId": new OxmlAttr(":dataDxfId", OxmlType.UInt32Value),
    ":totalsRowDxfId": new OxmlAttr(":totalsRowDxfId", OxmlType.UInt32Value),
    ":headerRowCellStyle": new OxmlAttr(":headerRowCellStyle", OxmlType.StringValue),
    ":dataCellStyle": new OxmlAttr(":dataCellStyle", OxmlType.StringValue),
    ":totalsRowCellStyle": new OxmlAttr(":totalsRowCellStyle", OxmlType.StringValue)
  };
  SheetName._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  OleLink._C = {
    "x:oleItems": OleItems
  };
  OleLink._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":progId": new OxmlAttr(":progId", OxmlType.StringValue)
  };
  DdeLink._C = {
    "x:ddeItems": DdeItems
  };
  DdeLink._D = {
    ":ddeService": new OxmlAttr(":ddeService", OxmlType.StringValue),
    ":ddeTopic": new OxmlAttr(":ddeTopic", OxmlType.StringValue)
  };
  ExternalBook._C = {
    "xxl21:alternateUrls": Xxl21ExternalBookAlternateUrls,
    "x:sheetNames": SheetNames,
    "x:definedNames": ExternalDefinedNames,
    "x:sheetDataSet": SheetDataSet
  };
  ExternalBook._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  OleItems._C = {
    "x:oleItem": OleItem,
    "x14:oleItem": X14OleItem
  };
  Value._C = {
    "x:val": DdeLinkValue
  };
  Value._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, DdeValuesArray)
  };
  Values._C = {
    "x:value": Value
  };
  Values._D = {
    ":rows": new OxmlAttr(":rows", OxmlType.UInt32Value),
    ":cols": new OxmlAttr(":cols", OxmlType.UInt32Value)
  };
  DdeItem._C = {
    "x:values": Values
  };
  DdeItem._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":ole": new OxmlAttr(":ole", OxmlType.BooleanValue),
    ":advise": new OxmlAttr(":advise", OxmlType.BooleanValue),
    ":preferPic": new OxmlAttr(":preferPic", OxmlType.BooleanValue)
  };
  DdeItems._C = {
    "x:ddeItem": DdeItem
  };
  ExternalCell._C = {
    "x:v": Xstring
  };
  ExternalCell._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, CellValuesArray),
    ":vm": new OxmlAttr(":vm", OxmlType.UInt32Value)
  };
  ExternalRow._C = {
    "x:cell": ExternalCell
  };
  ExternalRow._D = {
    ":r": new OxmlAttr(":r", OxmlType.UInt32Value)
  };
  ExternalSheetData._C = {
    "x:row": ExternalRow
  };
  ExternalSheetData._D = {
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":refreshError": new OxmlAttr(":refreshError", OxmlType.BooleanValue)
  };
  ExternalDefinedName._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":refersTo": new OxmlAttr(":refersTo", OxmlType.StringValue),
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value)
  };
  TableStyleElement._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, TableStyleValuesArray),
    ":size": new OxmlAttr(":size", OxmlType.UInt32Value),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value)
  };
  FontCharSet._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  FontFamilyNumbering._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  FontName._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  CellFormat._C = {
    "x:alignment": Alignment,
    "x:protection": Protection,
    "x:extLst": ExtensionList
  };
  CellFormat._D = {
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value),
    ":fontId": new OxmlAttr(":fontId", OxmlType.UInt32Value),
    ":fillId": new OxmlAttr(":fillId", OxmlType.UInt32Value),
    ":borderId": new OxmlAttr(":borderId", OxmlType.UInt32Value),
    ":xfId": new OxmlAttr(":xfId", OxmlType.UInt32Value),
    ":quotePrefix": new OxmlAttr(":quotePrefix", OxmlType.BooleanValue),
    ":pivotButton": new OxmlAttr(":pivotButton", OxmlType.BooleanValue),
    ":applyNumberFormat": new OxmlAttr(":applyNumberFormat", OxmlType.BooleanValue),
    ":applyFont": new OxmlAttr(":applyFont", OxmlType.BooleanValue),
    ":applyFill": new OxmlAttr(":applyFill", OxmlType.BooleanValue),
    ":applyBorder": new OxmlAttr(":applyBorder", OxmlType.BooleanValue),
    ":applyAlignment": new OxmlAttr(":applyAlignment", OxmlType.BooleanValue),
    ":applyProtection": new OxmlAttr(":applyProtection", OxmlType.BooleanValue)
  };
  CellStyle._C = {
    "x:extLst": ExtensionList
  };
  CellStyle._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":xfId": new OxmlAttr(":xfId", OxmlType.UInt32Value),
    ":builtinId": new OxmlAttr(":builtinId", OxmlType.UInt32Value),
    ":iLevel": new OxmlAttr(":iLevel", OxmlType.UInt32Value),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":customBuiltin": new OxmlAttr(":customBuiltin", OxmlType.BooleanValue)
  };
  RgbColor._D = {
    ":rgb": new OxmlAttr(":rgb", OxmlType.HexBinaryValue)
  };
  TableStyle._C = {
    "x:tableStyleElement": TableStyleElement
  };
  TableStyle._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":pivot": new OxmlAttr(":pivot", OxmlType.BooleanValue),
    ":table": new OxmlAttr(":table", OxmlType.BooleanValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  MruColors._C = {
    "x:color": Color
  };
  IndexedColors._C = {
    "x:rgbColor": RgbColor
  };
  Border._C = {
    "x:start": StartBorder,
    "x:end": EndBorder,
    "x:left": LeftBorder,
    "x:right": RightBorder,
    "x:top": TopBorder,
    "x:bottom": BottomBorder,
    "x:diagonal": DiagonalBorder,
    "x:vertical": VerticalBorder,
    "x:horizontal": HorizontalBorder
  };
  Border._D = {
    ":diagonalUp": new OxmlAttr(":diagonalUp", OxmlType.BooleanValue),
    ":diagonalDown": new OxmlAttr(":diagonalDown", OxmlType.BooleanValue),
    ":outline": new OxmlAttr(":outline", OxmlType.BooleanValue)
  };
  Fill._C = {
    "x:patternFill": PatternFill,
    "x:gradientFill": GradientFill
  };
  Font._C = {
    "x:b": Bold,
    "x:i": Italic,
    "x:strike": Strike,
    "x:condense": Condense,
    "x:extend": Extend,
    "x:outline": Outline,
    "x:shadow": Shadow,
    "x:u": Underline,
    "x:vertAlign": VerticalTextAlignment,
    "x:sz": FontSize,
    "x:color": Color,
    "x:name": FontName,
    "x:family": FontFamilyNumbering,
    "x:charset": FontCharSet,
    "x:scheme": FontScheme
  };
  Protection._D = {
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue)
  };
  Alignment._D = {
    ":horizontal": new OxmlAttr(":horizontal", OxmlType.EnumValue, HorizontalAlignmentValuesArray),
    ":vertical": new OxmlAttr(":vertical", OxmlType.EnumValue, VerticalAlignmentValuesArray),
    ":textRotation": new OxmlAttr(":textRotation", OxmlType.UInt32Value),
    ":wrapText": new OxmlAttr(":wrapText", OxmlType.BooleanValue),
    ":indent": new OxmlAttr(":indent", OxmlType.UInt32Value),
    ":relativeIndent": new OxmlAttr(":relativeIndent", OxmlType.Int32Value),
    ":justifyLastLine": new OxmlAttr(":justifyLastLine", OxmlType.BooleanValue),
    ":shrinkToFit": new OxmlAttr(":shrinkToFit", OxmlType.BooleanValue),
    ":readingOrder": new OxmlAttr(":readingOrder", OxmlType.UInt32Value),
    ":mergeCell": new OxmlAttr(":mergeCell", OxmlType.StringValue)
  };
  NumberingFormat._D = {
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value),
    ":formatCode": new OxmlAttr(":formatCode", OxmlType.StringValue)
  };
  GradientStop._C = {
    "x:color": Color
  };
  GradientStop._D = {
    ":position": new OxmlAttr(":position", OxmlType.DoubleValue)
  };
  GradientFill._C = {
    "x:stop": GradientStop
  };
  GradientFill._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, GradientValuesArray),
    ":degree": new OxmlAttr(":degree", OxmlType.DoubleValue),
    ":left": new OxmlAttr(":left", OxmlType.DoubleValue),
    ":right": new OxmlAttr(":right", OxmlType.DoubleValue),
    ":top": new OxmlAttr(":top", OxmlType.DoubleValue),
    ":bottom": new OxmlAttr(":bottom", OxmlType.DoubleValue)
  };
  PatternFill._C = {
    "x:fgColor": ForegroundColor,
    "x:bgColor": BackgroundColor
  };
  PatternFill._D = {
    ":patternType": new OxmlAttr(":patternType", OxmlType.EnumValue, PatternValuesArray)
  };
  XmlProperties._C = {
    "x:extLst": ExtensionList
  };
  XmlProperties._D = {
    ":mapId": new OxmlAttr(":mapId", OxmlType.UInt32Value),
    ":xpath": new OxmlAttr(":xpath", OxmlType.StringValue),
    ":xmlDataType": new OxmlAttr(":xmlDataType", OxmlType.EnumValue, XmlDataValuesArray)
  };
  XmlCellProperties._C = {
    "x:xmlPr": XmlProperties,
    "x:extLst": ExtensionList
  };
  XmlCellProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue)
  };
  SingleXmlCell._C = {
    "x:xmlCellPr": XmlCellProperties,
    "x:extLst": ExtensionList
  };
  SingleXmlCell._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":connectionId": new OxmlAttr(":connectionId", OxmlType.UInt32Value)
  };
  NameIndex._D = {
    ":x": new OxmlAttr(":x", OxmlType.UInt32Value),
    ":s": new OxmlAttr(":s", OxmlType.BooleanValue)
  };
  MdxKpi._D = {
    ":n": new OxmlAttr(":n", OxmlType.UInt32Value),
    ":np": new OxmlAttr(":np", OxmlType.UInt32Value),
    ":p": new OxmlAttr(":p", OxmlType.EnumValue, MdxKPIPropertyValuesArray)
  };
  MdxMemberProp._D = {
    ":n": new OxmlAttr(":n", OxmlType.UInt32Value),
    ":np": new OxmlAttr(":np", OxmlType.UInt32Value)
  };
  MdxSet._C = {
    "x:n": NameIndex
  };
  MdxSet._D = {
    ":ns": new OxmlAttr(":ns", OxmlType.UInt32Value),
    ":c": new OxmlAttr(":c", OxmlType.UInt32Value),
    ":o": new OxmlAttr(":o", OxmlType.EnumValue, MdxSetOrderValuesArray)
  };
  MdxTuple._C = {
    "x:n": NameIndex
  };
  MdxTuple._D = {
    ":c": new OxmlAttr(":c", OxmlType.UInt32Value),
    ":ct": new OxmlAttr(":ct", OxmlType.StringValue),
    ":si": new OxmlAttr(":si", OxmlType.UInt32Value),
    ":fi": new OxmlAttr(":fi", OxmlType.UInt32Value),
    ":bc": new OxmlAttr(":bc", OxmlType.HexBinaryValue),
    ":fc": new OxmlAttr(":fc", OxmlType.HexBinaryValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":st": new OxmlAttr(":st", OxmlType.BooleanValue),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue)
  };
  Mdx._C = {
    "x:t": MdxTuple,
    "x:ms": MdxSet,
    "x:p": MdxMemberProp,
    "x:k": MdxKpi
  };
  Mdx._D = {
    ":n": new OxmlAttr(":n", OxmlType.UInt32Value),
    ":f": new OxmlAttr(":f", OxmlType.EnumValue, MdxFunctionValuesArray)
  };
  FutureMetadataBlock._C = {
    "x:extLst": ExtensionList
  };
  MetadataRecord._D = {
    ":t": new OxmlAttr(":t", OxmlType.UInt32Value),
    ":v": new OxmlAttr(":v", OxmlType.UInt32Value)
  };
  MetadataBlock._C = {
    "x:rc": MetadataRecord
  };
  MetadataType._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":minSupportedVersion": new OxmlAttr(":minSupportedVersion", OxmlType.UInt32Value),
    ":ghostRow": new OxmlAttr(":ghostRow", OxmlType.BooleanValue),
    ":ghostCol": new OxmlAttr(":ghostCol", OxmlType.BooleanValue),
    ":edit": new OxmlAttr(":edit", OxmlType.BooleanValue),
    ":delete": new OxmlAttr(":delete", OxmlType.BooleanValue),
    ":copy": new OxmlAttr(":copy", OxmlType.BooleanValue),
    ":pasteAll": new OxmlAttr(":pasteAll", OxmlType.BooleanValue),
    ":pasteFormulas": new OxmlAttr(":pasteFormulas", OxmlType.BooleanValue),
    ":pasteValues": new OxmlAttr(":pasteValues", OxmlType.BooleanValue),
    ":pasteFormats": new OxmlAttr(":pasteFormats", OxmlType.BooleanValue),
    ":pasteComments": new OxmlAttr(":pasteComments", OxmlType.BooleanValue),
    ":pasteDataValidation": new OxmlAttr(":pasteDataValidation", OxmlType.BooleanValue),
    ":pasteBorders": new OxmlAttr(":pasteBorders", OxmlType.BooleanValue),
    ":pasteColWidths": new OxmlAttr(":pasteColWidths", OxmlType.BooleanValue),
    ":pasteNumberFormats": new OxmlAttr(":pasteNumberFormats", OxmlType.BooleanValue),
    ":merge": new OxmlAttr(":merge", OxmlType.BooleanValue),
    ":splitFirst": new OxmlAttr(":splitFirst", OxmlType.BooleanValue),
    ":splitAll": new OxmlAttr(":splitAll", OxmlType.BooleanValue),
    ":rowColShift": new OxmlAttr(":rowColShift", OxmlType.BooleanValue),
    ":clearAll": new OxmlAttr(":clearAll", OxmlType.BooleanValue),
    ":clearFormats": new OxmlAttr(":clearFormats", OxmlType.BooleanValue),
    ":clearContents": new OxmlAttr(":clearContents", OxmlType.BooleanValue),
    ":clearComments": new OxmlAttr(":clearComments", OxmlType.BooleanValue),
    ":assign": new OxmlAttr(":assign", OxmlType.BooleanValue),
    ":coerce": new OxmlAttr(":coerce", OxmlType.BooleanValue),
    ":adjust": new OxmlAttr(":adjust", OxmlType.BooleanValue),
    ":cellMeta": new OxmlAttr(":cellMeta", OxmlType.BooleanValue)
  };
  MetadataBlocksType._C = {
    "x:bk": MetadataBlock
  };
  MetadataBlocksType._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ValueMetadata._C = {
    "x:bk": MetadataBlock
  };
  CellMetadata._C = {
    "x:bk": MetadataBlock
  };
  FutureMetadata._C = {
    "x:bk": FutureMetadataBlock,
    "x:extLst": ExtensionList
  };
  FutureMetadata._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  MdxMetadata._C = {
    "x:mdx": Mdx
  };
  MdxMetadata._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  MetadataStrings._C = {
    "x:s": CharacterValue
  };
  MetadataStrings._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  MetadataTypes._C = {
    "x:metadataType": MetadataType
  };
  MetadataTypes._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  OleObject._C = {
    "x:objectPr": EmbeddedObjectProperties
  };
  OleObject._D = {
    ":progId": new OxmlAttr(":progId", OxmlType.StringValue),
    ":dvAspect": new OxmlAttr(":dvAspect", OxmlType.EnumValue, DataViewAspectValuesArray),
    ":link": new OxmlAttr(":link", OxmlType.StringValue),
    ":oleUpdate": new OxmlAttr(":oleUpdate", OxmlType.EnumValue, OleUpdateValuesArray),
    ":autoLoad": new OxmlAttr(":autoLoad", OxmlType.BooleanValue),
    ":shapeId": new OxmlAttr(":shapeId", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  CustomSheetView._C = {
    "x:pane": Pane,
    "x:selection": Selection,
    "x:rowBreaks": RowBreaks,
    "x:colBreaks": ColumnBreaks,
    "x:pageMargins": PageMargins,
    "x:printOptions": PrintOptions,
    "x:pageSetup": PageSetup,
    "x:headerFooter": HeaderFooter,
    "x:autoFilter": AutoFilter,
    "x:extLst": ExtensionList
  };
  CustomSheetView._D = {
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":scale": new OxmlAttr(":scale", OxmlType.UInt32Value),
    ":colorId": new OxmlAttr(":colorId", OxmlType.UInt32Value),
    ":showPageBreaks": new OxmlAttr(":showPageBreaks", OxmlType.BooleanValue),
    ":showFormulas": new OxmlAttr(":showFormulas", OxmlType.BooleanValue),
    ":showGridLines": new OxmlAttr(":showGridLines", OxmlType.BooleanValue),
    ":showRowCol": new OxmlAttr(":showRowCol", OxmlType.BooleanValue),
    ":outlineSymbols": new OxmlAttr(":outlineSymbols", OxmlType.BooleanValue),
    ":zeroValues": new OxmlAttr(":zeroValues", OxmlType.BooleanValue),
    ":fitToPage": new OxmlAttr(":fitToPage", OxmlType.BooleanValue),
    ":printArea": new OxmlAttr(":printArea", OxmlType.BooleanValue),
    ":filter": new OxmlAttr(":filter", OxmlType.BooleanValue),
    ":showAutoFilter": new OxmlAttr(":showAutoFilter", OxmlType.BooleanValue),
    ":hiddenRows": new OxmlAttr(":hiddenRows", OxmlType.BooleanValue),
    ":hiddenColumns": new OxmlAttr(":hiddenColumns", OxmlType.BooleanValue),
    ":state": new OxmlAttr(":state", OxmlType.EnumValue, SheetStateValuesArray),
    ":filterUnique": new OxmlAttr(":filterUnique", OxmlType.BooleanValue),
    ":view": new OxmlAttr(":view", OxmlType.EnumValue, SheetViewValuesArray),
    ":showRuler": new OxmlAttr(":showRuler", OxmlType.BooleanValue),
    ":topLeftCell": new OxmlAttr(":topLeftCell", OxmlType.StringValue)
  };
  SheetView._C = {
    "x:pane": Pane,
    "x:selection": Selection,
    "x:pivotSelection": PivotSelection,
    "x:extLst": ExtensionList
  };
  SheetView._D = {
    ":windowProtection": new OxmlAttr(":windowProtection", OxmlType.BooleanValue),
    ":showFormulas": new OxmlAttr(":showFormulas", OxmlType.BooleanValue),
    ":showGridLines": new OxmlAttr(":showGridLines", OxmlType.BooleanValue),
    ":showRowColHeaders": new OxmlAttr(":showRowColHeaders", OxmlType.BooleanValue),
    ":showZeros": new OxmlAttr(":showZeros", OxmlType.BooleanValue),
    ":rightToLeft": new OxmlAttr(":rightToLeft", OxmlType.BooleanValue),
    ":tabSelected": new OxmlAttr(":tabSelected", OxmlType.BooleanValue),
    ":showRuler": new OxmlAttr(":showRuler", OxmlType.BooleanValue),
    ":showOutlineSymbols": new OxmlAttr(":showOutlineSymbols", OxmlType.BooleanValue),
    ":defaultGridColor": new OxmlAttr(":defaultGridColor", OxmlType.BooleanValue),
    ":showWhiteSpace": new OxmlAttr(":showWhiteSpace", OxmlType.BooleanValue),
    ":view": new OxmlAttr(":view", OxmlType.EnumValue, SheetViewValuesArray),
    ":topLeftCell": new OxmlAttr(":topLeftCell", OxmlType.StringValue),
    ":colorId": new OxmlAttr(":colorId", OxmlType.UInt32Value),
    ":zoomScale": new OxmlAttr(":zoomScale", OxmlType.UInt32Value),
    ":zoomScaleNormal": new OxmlAttr(":zoomScaleNormal", OxmlType.UInt32Value),
    ":zoomScaleSheetLayoutView": new OxmlAttr(":zoomScaleSheetLayoutView", OxmlType.UInt32Value),
    ":zoomScalePageLayoutView": new OxmlAttr(":zoomScalePageLayoutView", OxmlType.UInt32Value),
    ":workbookViewId": new OxmlAttr(":workbookViewId", OxmlType.UInt32Value)
  };
  DataValidation._C = {
    "x12ac:list": X12acList,
    "x:formula1": Formula1,
    "x:formula2": Formula2
  };
  DataValidation._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, DataValidationValuesArray),
    ":errorStyle": new OxmlAttr(":errorStyle", OxmlType.EnumValue, DataValidationErrorStyleValuesArray),
    ":imeMode": new OxmlAttr(":imeMode", OxmlType.EnumValue, DataValidationImeModeValuesArray),
    ":operator": new OxmlAttr(":operator", OxmlType.EnumValue, DataValidationOperatorValuesArray),
    ":allowBlank": new OxmlAttr(":allowBlank", OxmlType.BooleanValue),
    ":showDropDown": new OxmlAttr(":showDropDown", OxmlType.BooleanValue),
    ":showInputMessage": new OxmlAttr(":showInputMessage", OxmlType.BooleanValue),
    ":showErrorMessage": new OxmlAttr(":showErrorMessage", OxmlType.BooleanValue),
    ":errorTitle": new OxmlAttr(":errorTitle", OxmlType.StringValue),
    ":error": new OxmlAttr(":error", OxmlType.StringValue),
    ":promptTitle": new OxmlAttr(":promptTitle", OxmlType.StringValue),
    ":prompt": new OxmlAttr(":prompt", OxmlType.StringValue),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue)
  };
  MergeCell._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  IgnoredError._D = {
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue),
    ":evalError": new OxmlAttr(":evalError", OxmlType.BooleanValue),
    ":twoDigitTextYear": new OxmlAttr(":twoDigitTextYear", OxmlType.BooleanValue),
    ":numberStoredAsText": new OxmlAttr(":numberStoredAsText", OxmlType.BooleanValue),
    ":formula": new OxmlAttr(":formula", OxmlType.BooleanValue),
    ":formulaRange": new OxmlAttr(":formulaRange", OxmlType.BooleanValue),
    ":unlockedFormula": new OxmlAttr(":unlockedFormula", OxmlType.BooleanValue),
    ":emptyCellReference": new OxmlAttr(":emptyCellReference", OxmlType.BooleanValue),
    ":listDataValidation": new OxmlAttr(":listDataValidation", OxmlType.BooleanValue),
    ":calculatedColumn": new OxmlAttr(":calculatedColumn", OxmlType.BooleanValue)
  };
  Control._C = {
    "x:controlPr": ControlProperties
  };
  Control._D = {
    ":shapeId": new OxmlAttr(":shapeId", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  InputCells._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":deleted": new OxmlAttr(":deleted", OxmlType.BooleanValue),
    ":undone": new OxmlAttr(":undone", OxmlType.BooleanValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue),
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value)
  };
  CustomChartsheetView._C = {
    "x:pageMargins": PageMargins,
    "x:pageSetup": ChartSheetPageSetup,
    "x:headerFooter": HeaderFooter
  };
  CustomChartsheetView._D = {
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":scale": new OxmlAttr(":scale", OxmlType.UInt32Value),
    ":state": new OxmlAttr(":state", OxmlType.EnumValue, SheetStateValuesArray),
    ":zoomToFit": new OxmlAttr(":zoomToFit", OxmlType.BooleanValue)
  };
  ChartSheetView._C = {
    "x:extLst": ExtensionList
  };
  ChartSheetView._D = {
    ":tabSelected": new OxmlAttr(":tabSelected", OxmlType.BooleanValue),
    ":zoomScale": new OxmlAttr(":zoomScale", OxmlType.UInt32Value),
    ":workbookViewId": new OxmlAttr(":workbookViewId", OxmlType.UInt32Value),
    ":zoomToFit": new OxmlAttr(":zoomToFit", OxmlType.BooleanValue)
  };
  TablePart._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  WebPublishItem._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":divId": new OxmlAttr(":divId", OxmlType.StringValue),
    ":sourceType": new OxmlAttr(":sourceType", OxmlType.EnumValue, WebSourceValuesArray),
    ":sourceRef": new OxmlAttr(":sourceRef", OxmlType.StringValue),
    ":sourceObject": new OxmlAttr(":sourceObject", OxmlType.StringValue),
    ":destinationFile": new OxmlAttr(":destinationFile", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":autoRepublish": new OxmlAttr(":autoRepublish", OxmlType.BooleanValue)
  };
  CustomProperty._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ChartSheetPageSetup._D = {
    ":paperSize": new OxmlAttr(":paperSize", OxmlType.UInt32Value),
    ":firstPageNumber": new OxmlAttr(":firstPageNumber", OxmlType.UInt32Value),
    ":orientation": new OxmlAttr(":orientation", OxmlType.EnumValue, OrientationValuesArray),
    ":usePrinterDefaults": new OxmlAttr(":usePrinterDefaults", OxmlType.BooleanValue),
    ":blackAndWhite": new OxmlAttr(":blackAndWhite", OxmlType.BooleanValue),
    ":draft": new OxmlAttr(":draft", OxmlType.BooleanValue),
    ":useFirstPageNumber": new OxmlAttr(":useFirstPageNumber", OxmlType.BooleanValue),
    ":horizontalDpi": new OxmlAttr(":horizontalDpi", OxmlType.UInt32Value),
    ":verticalDpi": new OxmlAttr(":verticalDpi", OxmlType.UInt32Value),
    ":copies": new OxmlAttr(":copies", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  CellWatch._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue)
  };
  ProtectedRange._D = {
    ":password": new OxmlAttr(":password", OxmlType.HexBinaryValue),
    ":algorithmName": new OxmlAttr(":algorithmName", OxmlType.StringValue),
    ":hashValue": new OxmlAttr(":hashValue", OxmlType.Base64BinaryValue),
    ":saltValue": new OxmlAttr(":saltValue", OxmlType.Base64BinaryValue),
    ":spinCount": new OxmlAttr(":spinCount", OxmlType.UInt32Value),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":securityDescriptor": new OxmlAttr(":securityDescriptor", OxmlType.StringValue)
  };
  Scenario._C = {
    "x:inputCells": InputCells
  };
  Scenario._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":locked": new OxmlAttr(":locked", OxmlType.BooleanValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":user": new OxmlAttr(":user", OxmlType.StringValue),
    ":comment": new OxmlAttr(":comment", OxmlType.StringValue)
  };
  ConditionalFormatValueObject._C = {
    "x:extLst": ExtensionList
  };
  ConditionalFormatValueObject._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConditionalFormatValueObjectValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue),
    ":gte": new OxmlAttr(":gte", OxmlType.BooleanValue)
  };
  Hyperlink._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":location": new OxmlAttr(":location", OxmlType.StringValue),
    ":tooltip": new OxmlAttr(":tooltip", OxmlType.StringValue),
    ":display": new OxmlAttr(":display", OxmlType.StringValue)
  };
  ConditionalFormattingRule._C = {
    "x:formula": Formula,
    "x:colorScale": ColorScale,
    "x:dataBar": DataBar,
    "x:iconSet": IconSet,
    "x:extLst": ConditionalFormattingRuleExtensionList
  };
  ConditionalFormattingRule._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConditionalFormatValuesArray),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value),
    ":priority": new OxmlAttr(":priority", OxmlType.Int32Value),
    ":stopIfTrue": new OxmlAttr(":stopIfTrue", OxmlType.BooleanValue),
    ":aboveAverage": new OxmlAttr(":aboveAverage", OxmlType.BooleanValue),
    ":percent": new OxmlAttr(":percent", OxmlType.BooleanValue),
    ":bottom": new OxmlAttr(":bottom", OxmlType.BooleanValue),
    ":operator": new OxmlAttr(":operator", OxmlType.EnumValue, ConditionalFormattingOperatorValuesArray),
    ":text": new OxmlAttr(":text", OxmlType.StringValue),
    ":timePeriod": new OxmlAttr(":timePeriod", OxmlType.EnumValue, TimePeriodValuesArray),
    ":rank": new OxmlAttr(":rank", OxmlType.UInt32Value),
    ":stdDev": new OxmlAttr(":stdDev", OxmlType.Int32Value),
    ":equalAverage": new OxmlAttr(":equalAverage", OxmlType.BooleanValue)
  };
  AutoFilter._C = {
    "x:filterColumn": FilterColumn,
    "x:sortState": SortState,
    "x:extLst": ExtensionList
  };
  AutoFilter._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  HeaderFooter._C = {
    "x:oddHeader": OddHeader,
    "x:oddFooter": OddFooter,
    "x:evenHeader": EvenHeader,
    "x:evenFooter": EvenFooter,
    "x:firstHeader": FirstHeader,
    "x:firstFooter": FirstFooter
  };
  HeaderFooter._D = {
    ":differentOddEven": new OxmlAttr(":differentOddEven", OxmlType.BooleanValue),
    ":differentFirst": new OxmlAttr(":differentFirst", OxmlType.BooleanValue),
    ":scaleWithDoc": new OxmlAttr(":scaleWithDoc", OxmlType.BooleanValue),
    ":alignWithMargins": new OxmlAttr(":alignWithMargins", OxmlType.BooleanValue)
  };
  PageSetup._D = {
    ":paperSize": new OxmlAttr(":paperSize", OxmlType.UInt32Value),
    ":scale": new OxmlAttr(":scale", OxmlType.UInt32Value),
    ":firstPageNumber": new OxmlAttr(":firstPageNumber", OxmlType.UInt32Value),
    ":fitToWidth": new OxmlAttr(":fitToWidth", OxmlType.UInt32Value),
    ":fitToHeight": new OxmlAttr(":fitToHeight", OxmlType.UInt32Value),
    ":pageOrder": new OxmlAttr(":pageOrder", OxmlType.EnumValue, PageOrderValuesArray),
    ":orientation": new OxmlAttr(":orientation", OxmlType.EnumValue, OrientationValuesArray),
    ":usePrinterDefaults": new OxmlAttr(":usePrinterDefaults", OxmlType.BooleanValue),
    ":blackAndWhite": new OxmlAttr(":blackAndWhite", OxmlType.BooleanValue),
    ":draft": new OxmlAttr(":draft", OxmlType.BooleanValue),
    ":cellComments": new OxmlAttr(":cellComments", OxmlType.EnumValue, CellCommentsValuesArray),
    ":useFirstPageNumber": new OxmlAttr(":useFirstPageNumber", OxmlType.BooleanValue),
    ":errors": new OxmlAttr(":errors", OxmlType.EnumValue, PrintErrorValuesArray),
    ":horizontalDpi": new OxmlAttr(":horizontalDpi", OxmlType.UInt32Value),
    ":verticalDpi": new OxmlAttr(":verticalDpi", OxmlType.UInt32Value),
    ":copies": new OxmlAttr(":copies", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  PrintOptions._D = {
    ":horizontalCentered": new OxmlAttr(":horizontalCentered", OxmlType.BooleanValue),
    ":verticalCentered": new OxmlAttr(":verticalCentered", OxmlType.BooleanValue),
    ":headings": new OxmlAttr(":headings", OxmlType.BooleanValue),
    ":gridLines": new OxmlAttr(":gridLines", OxmlType.BooleanValue),
    ":gridLinesSet": new OxmlAttr(":gridLinesSet", OxmlType.BooleanValue)
  };
  PageMargins._D = {
    ":left": new OxmlAttr(":left", OxmlType.DoubleValue),
    ":right": new OxmlAttr(":right", OxmlType.DoubleValue),
    ":top": new OxmlAttr(":top", OxmlType.DoubleValue),
    ":bottom": new OxmlAttr(":bottom", OxmlType.DoubleValue),
    ":header": new OxmlAttr(":header", OxmlType.DoubleValue),
    ":footer": new OxmlAttr(":footer", OxmlType.DoubleValue)
  };
  PageBreakType._C = {
    "x:brk": Break
  };
  PageBreakType._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":manualBreakCount": new OxmlAttr(":manualBreakCount", OxmlType.UInt32Value)
  };
  ColumnBreaks._C = {
    "x:brk": Break
  };
  RowBreaks._C = {
    "x:brk": Break
  };
  DataReference._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sheet": new OxmlAttr(":sheet", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Break._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":min": new OxmlAttr(":min", OxmlType.UInt32Value),
    ":max": new OxmlAttr(":max", OxmlType.UInt32Value),
    ":man": new OxmlAttr(":man", OxmlType.BooleanValue),
    ":pt": new OxmlAttr(":pt", OxmlType.BooleanValue)
  };
  PivotSelection._C = {
    "x:pivotArea": PivotArea
  };
  PivotSelection._D = {
    ":pane": new OxmlAttr(":pane", OxmlType.EnumValue, PaneValuesArray),
    ":showHeader": new OxmlAttr(":showHeader", OxmlType.BooleanValue),
    ":label": new OxmlAttr(":label", OxmlType.BooleanValue),
    ":data": new OxmlAttr(":data", OxmlType.BooleanValue),
    ":extendable": new OxmlAttr(":extendable", OxmlType.BooleanValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":axis": new OxmlAttr(":axis", OxmlType.EnumValue, PivotTableAxisValuesArray),
    ":dimension": new OxmlAttr(":dimension", OxmlType.UInt32Value),
    ":start": new OxmlAttr(":start", OxmlType.UInt32Value),
    ":min": new OxmlAttr(":min", OxmlType.UInt32Value),
    ":max": new OxmlAttr(":max", OxmlType.UInt32Value),
    ":activeRow": new OxmlAttr(":activeRow", OxmlType.UInt32Value),
    ":activeCol": new OxmlAttr(":activeCol", OxmlType.UInt32Value),
    ":previousRow": new OxmlAttr(":previousRow", OxmlType.UInt32Value),
    ":previousCol": new OxmlAttr(":previousCol", OxmlType.UInt32Value),
    ":click": new OxmlAttr(":click", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Selection._D = {
    ":pane": new OxmlAttr(":pane", OxmlType.EnumValue, PaneValuesArray),
    ":activeCell": new OxmlAttr(":activeCell", OxmlType.StringValue),
    ":activeCellId": new OxmlAttr(":activeCellId", OxmlType.UInt32Value),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue)
  };
  Pane._D = {
    ":xSplit": new OxmlAttr(":xSplit", OxmlType.DoubleValue),
    ":ySplit": new OxmlAttr(":ySplit", OxmlType.DoubleValue),
    ":topLeftCell": new OxmlAttr(":topLeftCell", OxmlType.StringValue),
    ":activePane": new OxmlAttr(":activePane", OxmlType.EnumValue, PaneValuesArray),
    ":state": new OxmlAttr(":state", OxmlType.EnumValue, PaneStateValuesArray)
  };
  PageSetupProperties._D = {
    ":autoPageBreaks": new OxmlAttr(":autoPageBreaks", OxmlType.BooleanValue),
    ":fitToPage": new OxmlAttr(":fitToPage", OxmlType.BooleanValue)
  };
  OutlineProperties._D = {
    ":applyStyles": new OxmlAttr(":applyStyles", OxmlType.BooleanValue),
    ":summaryBelow": new OxmlAttr(":summaryBelow", OxmlType.BooleanValue),
    ":summaryRight": new OxmlAttr(":summaryRight", OxmlType.BooleanValue),
    ":showOutlineSymbols": new OxmlAttr(":showOutlineSymbols", OxmlType.BooleanValue)
  };
  Column._D = {
    ":min": new OxmlAttr(":min", OxmlType.UInt32Value),
    ":max": new OxmlAttr(":max", OxmlType.UInt32Value),
    ":width": new OxmlAttr(":width", OxmlType.DoubleValue),
    ":style": new OxmlAttr(":style", OxmlType.UInt32Value),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":bestFit": new OxmlAttr(":bestFit", OxmlType.BooleanValue),
    ":customWidth": new OxmlAttr(":customWidth", OxmlType.BooleanValue),
    ":phonetic": new OxmlAttr(":phonetic", OxmlType.BooleanValue),
    ":outlineLevel": new OxmlAttr(":outlineLevel", OxmlType.ByteValue),
    ":collapsed": new OxmlAttr(":collapsed", OxmlType.BooleanValue)
  };
  Row._C = {
    "x:c": Cell,
    "x:extLst": ExtensionList
  };
  Row._D = {
    ":r": new OxmlAttr(":r", OxmlType.UInt32Value),
    ":spans": new OxmlAttr(":spans", OxmlType.ListValue),
    ":s": new OxmlAttr(":s", OxmlType.UInt32Value),
    ":customFormat": new OxmlAttr(":customFormat", OxmlType.BooleanValue),
    ":ht": new OxmlAttr(":ht", OxmlType.DoubleValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":customHeight": new OxmlAttr(":customHeight", OxmlType.BooleanValue),
    ":outlineLevel": new OxmlAttr(":outlineLevel", OxmlType.ByteValue),
    ":collapsed": new OxmlAttr(":collapsed", OxmlType.BooleanValue),
    ":thickTop": new OxmlAttr(":thickTop", OxmlType.BooleanValue),
    ":thickBot": new OxmlAttr(":thickBot", OxmlType.BooleanValue),
    ":ph": new OxmlAttr(":ph", OxmlType.BooleanValue),
    "x14ac:dyDescent": new OxmlAttr("x14ac:dyDescent", OxmlType.DoubleValue)
  };
  UserInfo._C = {
    "x:extLst": ExtensionList
  };
  UserInfo._D = {
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.Int32Value),
    ":dateTime": new OxmlAttr(":dateTime", OxmlType.DateTimeValue)
  };
  CellFormula._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, CellFormulaValuesArray),
    ":aca": new OxmlAttr(":aca", OxmlType.BooleanValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":dt2D": new OxmlAttr(":dt2D", OxmlType.BooleanValue),
    ":dtr": new OxmlAttr(":dtr", OxmlType.BooleanValue),
    ":del1": new OxmlAttr(":del1", OxmlType.BooleanValue),
    ":del2": new OxmlAttr(":del2", OxmlType.BooleanValue),
    ":r1": new OxmlAttr(":r1", OxmlType.StringValue),
    ":r2": new OxmlAttr(":r2", OxmlType.StringValue),
    ":ca": new OxmlAttr(":ca", OxmlType.BooleanValue),
    ":si": new OxmlAttr(":si", OxmlType.UInt32Value),
    ":bx": new OxmlAttr(":bx", OxmlType.BooleanValue),
    "xml:space": new OxmlAttr("xml:space", OxmlType.EnumValue, SpaceProcessingModeValuesArray)
  };
  SheetId._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  DifferentialFormatType._C = {
    "x:font": Font,
    "x:numFmt": NumberingFormat,
    "x:fill": Fill,
    "x:alignment": Alignment,
    "x:border": Border,
    "x:protection": Protection,
    "x:extLst": ExtensionList
  };
  DifferentialFormat._C = {
    "x:font": Font,
    "x:numFmt": NumberingFormat,
    "x:fill": Fill,
    "x:alignment": Alignment,
    "x:border": Border,
    "x:protection": Protection,
    "x:extLst": ExtensionList
  };
  NewDifferentialFormat._C = {
    "x:font": Font,
    "x:numFmt": NumberingFormat,
    "x:fill": Fill,
    "x:alignment": Alignment,
    "x:border": Border,
    "x:protection": Protection,
    "x:extLst": ExtensionList
  };
  OldDifferentialFormat._C = {
    "x:font": Font,
    "x:numFmt": NumberingFormat,
    "x:fill": Fill,
    "x:alignment": Alignment,
    "x:border": Border,
    "x:protection": Protection,
    "x:extLst": ExtensionList
  };
  NewCell._C = {
    "x:f": CellFormula,
    "x:v": CellValue,
    "x:is": InlineString,
    "x:extLst": ExtensionList
  };
  NewCell._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":s": new OxmlAttr(":s", OxmlType.UInt32Value),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, CellValuesArray),
    ":cm": new OxmlAttr(":cm", OxmlType.UInt32Value),
    ":vm": new OxmlAttr(":vm", OxmlType.UInt32Value),
    ":ph": new OxmlAttr(":ph", OxmlType.BooleanValue)
  };
  CellType._C = {
    "x:f": CellFormula,
    "x:v": CellValue,
    "x:is": InlineString,
    "x:extLst": ExtensionList
  };
  CellType._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":s": new OxmlAttr(":s", OxmlType.UInt32Value),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, CellValuesArray),
    ":cm": new OxmlAttr(":cm", OxmlType.UInt32Value),
    ":vm": new OxmlAttr(":vm", OxmlType.UInt32Value),
    ":ph": new OxmlAttr(":ph", OxmlType.BooleanValue)
  };
  Cell._C = {
    "x:f": CellFormula,
    "x:v": CellValue,
    "x:is": InlineString,
    "x:extLst": ExtensionList
  };
  OldCell._C = {
    "x:f": CellFormula,
    "x:v": CellValue,
    "x:is": InlineString,
    "x:extLst": ExtensionList
  };
  Undo._D = {
    ":index": new OxmlAttr(":index", OxmlType.UInt32Value),
    ":exp": new OxmlAttr(":exp", OxmlType.EnumValue, FormulaExpressionValuesArray),
    ":ref3D": new OxmlAttr(":ref3D", OxmlType.BooleanValue),
    ":array": new OxmlAttr(":array", OxmlType.BooleanValue),
    ":v": new OxmlAttr(":v", OxmlType.BooleanValue),
    ":nf": new OxmlAttr(":nf", OxmlType.BooleanValue),
    ":cs": new OxmlAttr(":cs", OxmlType.BooleanValue),
    ":dr": new OxmlAttr(":dr", OxmlType.StringValue),
    ":dn": new OxmlAttr(":dn", OxmlType.StringValue),
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":sId": new OxmlAttr(":sId", OxmlType.UInt32Value)
  };
  Reviewed._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value)
  };
  ReviewedList._C = {
    "x:reviewed": Reviewed
  };
  ReviewedList._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SheetIdMap._C = {
    "x:sheetId": SheetId
  };
  SheetIdMap._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RevisionConflict._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value)
  };
  RevisionQueryTable._D = {
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":fieldId": new OxmlAttr(":fieldId", OxmlType.UInt32Value)
  };
  RevisionComment._D = {
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":cell": new OxmlAttr(":cell", OxmlType.StringValue),
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":action": new OxmlAttr(":action", OxmlType.EnumValue, RevisionActionValuesArray),
    ":alwaysShow": new OxmlAttr(":alwaysShow", OxmlType.BooleanValue),
    ":old": new OxmlAttr(":old", OxmlType.BooleanValue),
    ":hiddenRow": new OxmlAttr(":hiddenRow", OxmlType.BooleanValue),
    ":hiddenColumn": new OxmlAttr(":hiddenColumn", OxmlType.BooleanValue),
    ":author": new OxmlAttr(":author", OxmlType.StringValue),
    ":oldLength": new OxmlAttr(":oldLength", OxmlType.UInt32Value),
    ":newLength": new OxmlAttr(":newLength", OxmlType.UInt32Value)
  };
  RevisionDefinedName._C = {
    "x:formula": Formula,
    "x:oldFormula": OldFormula,
    "x:extLst": ExtensionList
  };
  RevisionDefinedName._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":localSheetId": new OxmlAttr(":localSheetId", OxmlType.UInt32Value),
    ":customView": new OxmlAttr(":customView", OxmlType.BooleanValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":function": new OxmlAttr(":function", OxmlType.BooleanValue),
    ":oldFunction": new OxmlAttr(":oldFunction", OxmlType.BooleanValue),
    ":functionGroupId": new OxmlAttr(":functionGroupId", OxmlType.ByteValue),
    ":oldFunctionGroupId": new OxmlAttr(":oldFunctionGroupId", OxmlType.ByteValue),
    ":shortcutKey": new OxmlAttr(":shortcutKey", OxmlType.ByteValue),
    ":oldShortcutKey": new OxmlAttr(":oldShortcutKey", OxmlType.ByteValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":oldHidden": new OxmlAttr(":oldHidden", OxmlType.BooleanValue),
    ":customMenu": new OxmlAttr(":customMenu", OxmlType.StringValue),
    ":oldCustomMenu": new OxmlAttr(":oldCustomMenu", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":oldDescription": new OxmlAttr(":oldDescription", OxmlType.StringValue),
    ":help": new OxmlAttr(":help", OxmlType.StringValue),
    ":oldHelp": new OxmlAttr(":oldHelp", OxmlType.StringValue),
    ":statusBar": new OxmlAttr(":statusBar", OxmlType.StringValue),
    ":oldStatusBar": new OxmlAttr(":oldStatusBar", OxmlType.StringValue),
    ":comment": new OxmlAttr(":comment", OxmlType.StringValue),
    ":oldComment": new OxmlAttr(":oldComment", OxmlType.StringValue)
  };
  RevisionAutoFormat._D = {
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":autoFormatId": new OxmlAttr(":autoFormatId", OxmlType.UInt32Value),
    ":applyNumberFormats": new OxmlAttr(":applyNumberFormats", OxmlType.BooleanValue),
    ":applyBorderFormats": new OxmlAttr(":applyBorderFormats", OxmlType.BooleanValue),
    ":applyFontFormats": new OxmlAttr(":applyFontFormats", OxmlType.BooleanValue),
    ":applyPatternFormats": new OxmlAttr(":applyPatternFormats", OxmlType.BooleanValue),
    ":applyAlignmentFormats": new OxmlAttr(":applyAlignmentFormats", OxmlType.BooleanValue),
    ":applyWidthHeightFormats": new OxmlAttr(":applyWidthHeightFormats", OxmlType.BooleanValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  RevisionFormat._C = {
    "x:dxf": DifferentialFormat,
    "x:extLst": ExtensionList
  };
  RevisionFormat._D = {
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":xfDxf": new OxmlAttr(":xfDxf", OxmlType.BooleanValue),
    ":s": new OxmlAttr(":s", OxmlType.BooleanValue),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue),
    ":start": new OxmlAttr(":start", OxmlType.UInt32Value),
    ":length": new OxmlAttr(":length", OxmlType.UInt32Value)
  };
  RevisionCellChange._C = {
    "x:oc": OldCell,
    "x:nc": NewCell,
    "x:odxf": OldDifferentialFormat,
    "x:ndxf": NewDifferentialFormat,
    "x:extLst": ExtensionList
  };
  RevisionCellChange._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":sId": new OxmlAttr(":sId", OxmlType.UInt32Value),
    ":odxf": new OxmlAttr(":odxf", OxmlType.BooleanValue),
    ":xfDxf": new OxmlAttr(":xfDxf", OxmlType.BooleanValue),
    ":s": new OxmlAttr(":s", OxmlType.BooleanValue),
    ":dxf": new OxmlAttr(":dxf", OxmlType.BooleanValue),
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value),
    ":quotePrefix": new OxmlAttr(":quotePrefix", OxmlType.BooleanValue),
    ":oldQuotePrefix": new OxmlAttr(":oldQuotePrefix", OxmlType.BooleanValue),
    ":ph": new OxmlAttr(":ph", OxmlType.BooleanValue),
    ":oldPh": new OxmlAttr(":oldPh", OxmlType.BooleanValue),
    ":endOfListFormulaUpdate": new OxmlAttr(":endOfListFormulaUpdate", OxmlType.BooleanValue)
  };
  RevisionInsertSheet._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sheetPosition": new OxmlAttr(":sheetPosition", OxmlType.UInt32Value)
  };
  RevisionSheetName._C = {
    "x:extLst": ExtensionList
  };
  RevisionSheetName._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":oldName": new OxmlAttr(":oldName", OxmlType.StringValue),
    ":newName": new OxmlAttr(":newName", OxmlType.StringValue)
  };
  RevisionCustomView._D = {
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":action": new OxmlAttr(":action", OxmlType.EnumValue, RevisionActionValuesArray)
  };
  RevisionMove._C = {
    "x:undo": Undo,
    "x:rcc": RevisionCellChange,
    "x:rfmt": RevisionFormat
  };
  RevisionMove._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":sheetId": new OxmlAttr(":sheetId", OxmlType.UInt32Value),
    ":source": new OxmlAttr(":source", OxmlType.StringValue),
    ":destination": new OxmlAttr(":destination", OxmlType.StringValue),
    ":sourceSheetId": new OxmlAttr(":sourceSheetId", OxmlType.UInt32Value)
  };
  RevisionRowColumn._C = {
    "x:undo": Undo,
    "x:rcc": RevisionCellChange,
    "x:rfmt": RevisionFormat
  };
  RevisionRowColumn._D = {
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value),
    ":ua": new OxmlAttr(":ua", OxmlType.BooleanValue),
    ":ra": new OxmlAttr(":ra", OxmlType.BooleanValue),
    ":sId": new OxmlAttr(":sId", OxmlType.UInt32Value),
    ":eol": new OxmlAttr(":eol", OxmlType.BooleanValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":action": new OxmlAttr(":action", OxmlType.EnumValue, RowColumnActionValuesArray),
    ":edge": new OxmlAttr(":edge", OxmlType.BooleanValue)
  };
  Header._C = {
    "x:sheetIdMap": SheetIdMap,
    "x:reviewedList": ReviewedList,
    "x:extLst": ExtensionList
  };
  Header._D = {
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":dateTime": new OxmlAttr(":dateTime", OxmlType.DateTimeValue),
    ":maxSheetId": new OxmlAttr(":maxSheetId", OxmlType.UInt32Value),
    ":userName": new OxmlAttr(":userName", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":minRId": new OxmlAttr(":minRId", OxmlType.UInt32Value),
    ":maxRId": new OxmlAttr(":maxRId", OxmlType.UInt32Value)
  };
  PhoneticProperties._D = {
    ":fontId": new OxmlAttr(":fontId", OxmlType.UInt32Value),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, PhoneticValuesArray),
    ":alignment": new OxmlAttr(":alignment", OxmlType.EnumValue, PhoneticAlignmentValuesArray)
  };
  PhoneticRun._C = {
    "x:t": Text
  };
  PhoneticRun._D = {
    ":sb": new OxmlAttr(":sb", OxmlType.UInt32Value),
    ":eb": new OxmlAttr(":eb", OxmlType.UInt32Value)
  };
  Run._C = {
    "x:rPr": RunProperties,
    "x:t": Text
  };
  RunProperties._C = {
    "x:b": Bold,
    "x:i": Italic,
    "x:strike": Strike,
    "x:condense": Condense,
    "x:extend": Extend,
    "x:outline": Outline,
    "x:shadow": Shadow,
    "x:u": Underline,
    "x:vertAlign": VerticalTextAlignment,
    "x:sz": FontSize,
    "x:color": Color,
    "x:rFont": RunFont,
    "x:family": FontFamily,
    "x:charset": RunPropertyCharSet,
    "x:scheme": FontScheme
  };
  FontScheme._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, FontSchemeValuesArray)
  };
  InternationalPropertyType._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  RunFont._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ColorType._D = {
    ":auto": new OxmlAttr(":auto", OxmlType.BooleanValue),
    ":indexed": new OxmlAttr(":indexed", OxmlType.UInt32Value),
    ":rgb": new OxmlAttr(":rgb", OxmlType.HexBinaryValue),
    ":theme": new OxmlAttr(":theme", OxmlType.UInt32Value),
    ":tint": new OxmlAttr(":tint", OxmlType.DoubleValue)
  };
  FontSize._D = {
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  VerticalTextAlignment._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, VerticalAlignmentRunValuesArray)
  };
  Underline._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, UnderlineValuesArray)
  };
  BooleanPropertyType._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  RstType._C = {
    "x:t": Text,
    "x:r": Run,
    "x:rPh": PhoneticRun,
    "x:phoneticPr": PhoneticProperties
  };
  CommentText._C = {
    "x:t": Text,
    "x:r": Run,
    "x:rPh": PhoneticRun,
    "x:phoneticPr": PhoneticProperties
  };
  InlineString._C = {
    "x:t": Text,
    "x:r": Run,
    "x:rPh": PhoneticRun,
    "x:phoneticPr": PhoneticProperties
  };
  SharedStringItem._C = {
    "x:t": Text,
    "x:r": Run,
    "x:rPh": PhoneticRun,
    "x:phoneticPr": PhoneticProperties
  };
  QueryTableField._C = {
    "x:extLst": ExtensionList
  };
  QueryTableField._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":dataBound": new OxmlAttr(":dataBound", OxmlType.BooleanValue),
    ":rowNumbers": new OxmlAttr(":rowNumbers", OxmlType.BooleanValue),
    ":fillFormulas": new OxmlAttr(":fillFormulas", OxmlType.BooleanValue),
    ":clipped": new OxmlAttr(":clipped", OxmlType.BooleanValue),
    ":tableColumnId": new OxmlAttr(":tableColumnId", OxmlType.UInt32Value)
  };
  DeletedField._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  QueryTableDeletedFields._C = {
    "x:deletedField": DeletedField
  };
  QueryTableDeletedFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  QueryTableFields._C = {
    "x:queryTableField": QueryTableField
  };
  QueryTableFields._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotAreaReference._C = {
    "x:x": FieldItem,
    "x:extLst": ExtensionList
  };
  PivotAreaReference._D = {
    ":field": new OxmlAttr(":field", OxmlType.UInt32Value),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":selected": new OxmlAttr(":selected", OxmlType.BooleanValue),
    ":byPosition": new OxmlAttr(":byPosition", OxmlType.BooleanValue),
    ":relative": new OxmlAttr(":relative", OxmlType.BooleanValue),
    ":defaultSubtotal": new OxmlAttr(":defaultSubtotal", OxmlType.BooleanValue),
    ":sumSubtotal": new OxmlAttr(":sumSubtotal", OxmlType.BooleanValue),
    ":countASubtotal": new OxmlAttr(":countASubtotal", OxmlType.BooleanValue),
    ":avgSubtotal": new OxmlAttr(":avgSubtotal", OxmlType.BooleanValue),
    ":maxSubtotal": new OxmlAttr(":maxSubtotal", OxmlType.BooleanValue),
    ":minSubtotal": new OxmlAttr(":minSubtotal", OxmlType.BooleanValue),
    ":productSubtotal": new OxmlAttr(":productSubtotal", OxmlType.BooleanValue),
    ":countSubtotal": new OxmlAttr(":countSubtotal", OxmlType.BooleanValue),
    ":stdDevSubtotal": new OxmlAttr(":stdDevSubtotal", OxmlType.BooleanValue),
    ":stdDevPSubtotal": new OxmlAttr(":stdDevPSubtotal", OxmlType.BooleanValue),
    ":varSubtotal": new OxmlAttr(":varSubtotal", OxmlType.BooleanValue),
    ":varPSubtotal": new OxmlAttr(":varPSubtotal", OxmlType.BooleanValue)
  };
  PivotAreaReferences._C = {
    "x:reference": PivotAreaReference
  };
  PivotAreaReferences._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PageField._C = {
    "x:extLst": ExtensionList
  };
  PageField._D = {
    ":fld": new OxmlAttr(":fld", OxmlType.Int32Value),
    ":item": new OxmlAttr(":item", OxmlType.UInt32Value),
    ":hier": new OxmlAttr(":hier", OxmlType.Int32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":cap": new OxmlAttr(":cap", OxmlType.StringValue)
  };
  GroupItems._C = {
    "x:m": MissingItem,
    "x:n": NumberItem,
    "x:b": BooleanItem,
    "x:e": ErrorItem,
    "x:s": StringItem,
    "x:d": DateTimeItem
  };
  GroupItems._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  DiscreteProperties._C = {
    "x:x": FieldItem
  };
  DiscreteProperties._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RangeProperties._D = {
    ":autoStart": new OxmlAttr(":autoStart", OxmlType.BooleanValue),
    ":autoEnd": new OxmlAttr(":autoEnd", OxmlType.BooleanValue),
    ":groupBy": new OxmlAttr(":groupBy", OxmlType.EnumValue, GroupByValuesArray),
    ":startNum": new OxmlAttr(":startNum", OxmlType.DoubleValue),
    ":endNum": new OxmlAttr(":endNum", OxmlType.DoubleValue),
    ":startDate": new OxmlAttr(":startDate", OxmlType.DateTimeValue),
    ":endDate": new OxmlAttr(":endDate", OxmlType.DateTimeValue),
    ":groupInterval": new OxmlAttr(":groupInterval", OxmlType.DoubleValue)
  };
  CacheHierarchy._C = {
    "x:fieldsUsage": FieldsUsage,
    "x:groupLevels": GroupLevels,
    "x:extLst": CacheHierarchyExtensionList
  };
  CacheHierarchy._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":measure": new OxmlAttr(":measure", OxmlType.BooleanValue),
    ":set": new OxmlAttr(":set", OxmlType.BooleanValue),
    ":parentSet": new OxmlAttr(":parentSet", OxmlType.UInt32Value),
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.Int32Value),
    ":attribute": new OxmlAttr(":attribute", OxmlType.BooleanValue),
    ":time": new OxmlAttr(":time", OxmlType.BooleanValue),
    ":keyAttribute": new OxmlAttr(":keyAttribute", OxmlType.BooleanValue),
    ":defaultMemberUniqueName": new OxmlAttr(":defaultMemberUniqueName", OxmlType.StringValue),
    ":allUniqueName": new OxmlAttr(":allUniqueName", OxmlType.StringValue),
    ":allCaption": new OxmlAttr(":allCaption", OxmlType.StringValue),
    ":dimensionUniqueName": new OxmlAttr(":dimensionUniqueName", OxmlType.StringValue),
    ":displayFolder": new OxmlAttr(":displayFolder", OxmlType.StringValue),
    ":measureGroup": new OxmlAttr(":measureGroup", OxmlType.StringValue),
    ":measures": new OxmlAttr(":measures", OxmlType.BooleanValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":oneField": new OxmlAttr(":oneField", OxmlType.BooleanValue),
    ":memberValueDatatype": new OxmlAttr(":memberValueDatatype", OxmlType.UInt16Value),
    ":unbalanced": new OxmlAttr(":unbalanced", OxmlType.BooleanValue),
    ":unbalancedGroup": new OxmlAttr(":unbalancedGroup", OxmlType.BooleanValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue)
  };
  PivotFilter._C = {
    "x:autoFilter": AutoFilter,
    "x:extLst": PivotFilterExtensionList
  };
  PivotFilter._D = {
    ":fld": new OxmlAttr(":fld", OxmlType.UInt32Value),
    ":mpFld": new OxmlAttr(":mpFld", OxmlType.UInt32Value),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, PivotFilterValuesArray),
    ":evalOrder": new OxmlAttr(":evalOrder", OxmlType.Int32Value),
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":iMeasureHier": new OxmlAttr(":iMeasureHier", OxmlType.UInt32Value),
    ":iMeasureFld": new OxmlAttr(":iMeasureFld", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":stringValue1": new OxmlAttr(":stringValue1", OxmlType.StringValue),
    ":stringValue2": new OxmlAttr(":stringValue2", OxmlType.StringValue)
  };
  MeasureDimensionMap._D = {
    ":measureGroup": new OxmlAttr(":measureGroup", OxmlType.UInt32Value),
    ":dimension": new OxmlAttr(":dimension", OxmlType.UInt32Value)
  };
  MeasureGroup._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue)
  };
  Dimension._D = {
    ":measure": new OxmlAttr(":measure", OxmlType.BooleanValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue)
  };
  Member._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  MemberProperty._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":showCell": new OxmlAttr(":showCell", OxmlType.BooleanValue),
    ":showTip": new OxmlAttr(":showTip", OxmlType.BooleanValue),
    ":showAsCaption": new OxmlAttr(":showAsCaption", OxmlType.BooleanValue),
    ":nameLen": new OxmlAttr(":nameLen", OxmlType.UInt32Value),
    ":pPos": new OxmlAttr(":pPos", OxmlType.UInt32Value),
    ":pLen": new OxmlAttr(":pLen", OxmlType.UInt32Value),
    ":level": new OxmlAttr(":level", OxmlType.UInt32Value),
    ":field": new OxmlAttr(":field", OxmlType.UInt32Value)
  };
  HierarchyUsageType._D = {
    ":hierarchyUsage": new OxmlAttr(":hierarchyUsage", OxmlType.Int32Value)
  };
  PivotHierarchy._C = {
    "x:mps": MemberProperties,
    "x:members": Members,
    "x:extLst": PivotHierarchyExtensionList
  };
  PivotHierarchy._D = {
    ":outline": new OxmlAttr(":outline", OxmlType.BooleanValue),
    ":multipleItemSelectionAllowed": new OxmlAttr(":multipleItemSelectionAllowed", OxmlType.BooleanValue),
    ":subtotalTop": new OxmlAttr(":subtotalTop", OxmlType.BooleanValue),
    ":showInFieldList": new OxmlAttr(":showInFieldList", OxmlType.BooleanValue),
    ":dragToRow": new OxmlAttr(":dragToRow", OxmlType.BooleanValue),
    ":dragToCol": new OxmlAttr(":dragToCol", OxmlType.BooleanValue),
    ":dragToPage": new OxmlAttr(":dragToPage", OxmlType.BooleanValue),
    ":dragToData": new OxmlAttr(":dragToData", OxmlType.BooleanValue),
    ":dragOff": new OxmlAttr(":dragOff", OxmlType.BooleanValue),
    ":includeNewItemsInFilter": new OxmlAttr(":includeNewItemsInFilter", OxmlType.BooleanValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue)
  };
  ChartFormat._C = {
    "x:pivotArea": PivotArea
  };
  ChartFormat._D = {
    ":chart": new OxmlAttr(":chart", OxmlType.UInt32Value),
    ":format": new OxmlAttr(":format", OxmlType.UInt32Value),
    ":series": new OxmlAttr(":series", OxmlType.BooleanValue)
  };
  PivotAreas._C = {
    "x:pivotArea": PivotArea
  };
  PivotAreas._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConditionalFormat._C = {
    "x:pivotAreas": PivotAreas,
    "x:extLst": ExtensionList
  };
  ConditionalFormat._D = {
    ":scope": new OxmlAttr(":scope", OxmlType.EnumValue, ScopeValuesArray),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, RuleValuesArray),
    ":priority": new OxmlAttr(":priority", OxmlType.UInt32Value)
  };
  Format._C = {
    "x:pivotArea": PivotArea,
    "x:extLst": ExtensionList
  };
  Format._D = {
    ":action": new OxmlAttr(":action", OxmlType.EnumValue, FormatActionValuesArray),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value)
  };
  Field._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int32Value)
  };
  RowItem._C = {
    "x:x": MemberPropertyIndex
  };
  RowItem._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, ItemValuesArray),
    ":r": new OxmlAttr(":r", OxmlType.UInt32Value),
    ":i": new OxmlAttr(":i", OxmlType.UInt32Value)
  };
  DataField._C = {
    "x:extLst": DataFieldExtensionList
  };
  DataField._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":fld": new OxmlAttr(":fld", OxmlType.UInt32Value),
    ":subtotal": new OxmlAttr(":subtotal", OxmlType.EnumValue, DataConsolidateFunctionValuesArray),
    ":showDataAs": new OxmlAttr(":showDataAs", OxmlType.EnumValue, ShowDataAsValuesArray),
    ":baseField": new OxmlAttr(":baseField", OxmlType.Int32Value),
    ":baseItem": new OxmlAttr(":baseItem", OxmlType.UInt32Value),
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value)
  };
  Item._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, ItemValuesArray),
    ":h": new OxmlAttr(":h", OxmlType.BooleanValue),
    ":s": new OxmlAttr(":s", OxmlType.BooleanValue),
    ":sd": new OxmlAttr(":sd", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":m": new OxmlAttr(":m", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.BooleanValue),
    ":x": new OxmlAttr(":x", OxmlType.UInt32Value),
    ":d": new OxmlAttr(":d", OxmlType.BooleanValue),
    ":e": new OxmlAttr(":e", OxmlType.BooleanValue)
  };
  PivotField._C = {
    "x:items": Items,
    "x:autoSortScope": AutoSortScope,
    "x:extLst": PivotFieldExtensionList
  };
  PivotField._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":axis": new OxmlAttr(":axis", OxmlType.EnumValue, PivotTableAxisValuesArray),
    ":dataField": new OxmlAttr(":dataField", OxmlType.BooleanValue),
    ":subtotalCaption": new OxmlAttr(":subtotalCaption", OxmlType.StringValue),
    ":showDropDowns": new OxmlAttr(":showDropDowns", OxmlType.BooleanValue),
    ":hiddenLevel": new OxmlAttr(":hiddenLevel", OxmlType.BooleanValue),
    ":uniqueMemberProperty": new OxmlAttr(":uniqueMemberProperty", OxmlType.StringValue),
    ":compact": new OxmlAttr(":compact", OxmlType.BooleanValue),
    ":allDrilled": new OxmlAttr(":allDrilled", OxmlType.BooleanValue),
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value),
    ":outline": new OxmlAttr(":outline", OxmlType.BooleanValue),
    ":subtotalTop": new OxmlAttr(":subtotalTop", OxmlType.BooleanValue),
    ":dragToRow": new OxmlAttr(":dragToRow", OxmlType.BooleanValue),
    ":dragToCol": new OxmlAttr(":dragToCol", OxmlType.BooleanValue),
    ":multipleItemSelectionAllowed": new OxmlAttr(":multipleItemSelectionAllowed", OxmlType.BooleanValue),
    ":dragToPage": new OxmlAttr(":dragToPage", OxmlType.BooleanValue),
    ":dragToData": new OxmlAttr(":dragToData", OxmlType.BooleanValue),
    ":dragOff": new OxmlAttr(":dragOff", OxmlType.BooleanValue),
    ":showAll": new OxmlAttr(":showAll", OxmlType.BooleanValue),
    ":insertBlankRow": new OxmlAttr(":insertBlankRow", OxmlType.BooleanValue),
    ":serverField": new OxmlAttr(":serverField", OxmlType.BooleanValue),
    ":insertPageBreak": new OxmlAttr(":insertPageBreak", OxmlType.BooleanValue),
    ":autoShow": new OxmlAttr(":autoShow", OxmlType.BooleanValue),
    ":topAutoShow": new OxmlAttr(":topAutoShow", OxmlType.BooleanValue),
    ":hideNewItems": new OxmlAttr(":hideNewItems", OxmlType.BooleanValue),
    ":measureFilter": new OxmlAttr(":measureFilter", OxmlType.BooleanValue),
    ":includeNewItemsInFilter": new OxmlAttr(":includeNewItemsInFilter", OxmlType.BooleanValue),
    ":itemPageCount": new OxmlAttr(":itemPageCount", OxmlType.UInt32Value),
    ":sortType": new OxmlAttr(":sortType", OxmlType.EnumValue, FieldSortValuesArray),
    ":dataSourceSort": new OxmlAttr(":dataSourceSort", OxmlType.BooleanValue),
    ":nonAutoSortDefault": new OxmlAttr(":nonAutoSortDefault", OxmlType.BooleanValue),
    ":rankBy": new OxmlAttr(":rankBy", OxmlType.UInt32Value),
    ":defaultSubtotal": new OxmlAttr(":defaultSubtotal", OxmlType.BooleanValue),
    ":sumSubtotal": new OxmlAttr(":sumSubtotal", OxmlType.BooleanValue),
    ":countASubtotal": new OxmlAttr(":countASubtotal", OxmlType.BooleanValue),
    ":avgSubtotal": new OxmlAttr(":avgSubtotal", OxmlType.BooleanValue),
    ":maxSubtotal": new OxmlAttr(":maxSubtotal", OxmlType.BooleanValue),
    ":minSubtotal": new OxmlAttr(":minSubtotal", OxmlType.BooleanValue),
    ":productSubtotal": new OxmlAttr(":productSubtotal", OxmlType.BooleanValue),
    ":countSubtotal": new OxmlAttr(":countSubtotal", OxmlType.BooleanValue),
    ":stdDevSubtotal": new OxmlAttr(":stdDevSubtotal", OxmlType.BooleanValue),
    ":stdDevPSubtotal": new OxmlAttr(":stdDevPSubtotal", OxmlType.BooleanValue),
    ":varSubtotal": new OxmlAttr(":varSubtotal", OxmlType.BooleanValue),
    ":varPSubtotal": new OxmlAttr(":varPSubtotal", OxmlType.BooleanValue),
    ":showPropCell": new OxmlAttr(":showPropCell", OxmlType.BooleanValue),
    ":showPropTip": new OxmlAttr(":showPropTip", OxmlType.BooleanValue),
    ":showPropAsCaption": new OxmlAttr(":showPropAsCaption", OxmlType.BooleanValue),
    ":defaultAttributeDrillState": new OxmlAttr(":defaultAttributeDrillState", OxmlType.BooleanValue)
  };
  CalculatedMember._C = {
    "x:extLst": CalculatedMemberExtensionList
  };
  CalculatedMember._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":mdx": new OxmlAttr(":mdx", OxmlType.StringValue),
    ":memberName": new OxmlAttr(":memberName", OxmlType.StringValue),
    ":hierarchy": new OxmlAttr(":hierarchy", OxmlType.StringValue),
    ":parent": new OxmlAttr(":parent", OxmlType.StringValue),
    ":solveOrder": new OxmlAttr(":solveOrder", OxmlType.Int32Value),
    ":set": new OxmlAttr(":set", OxmlType.BooleanValue)
  };
  PivotArea._C = {
    "x:references": PivotAreaReferences,
    "x:extLst": ExtensionList
  };
  PivotArea._D = {
    ":field": new OxmlAttr(":field", OxmlType.Int32Value),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, PivotAreaValuesArray),
    ":dataOnly": new OxmlAttr(":dataOnly", OxmlType.BooleanValue),
    ":labelOnly": new OxmlAttr(":labelOnly", OxmlType.BooleanValue),
    ":grandRow": new OxmlAttr(":grandRow", OxmlType.BooleanValue),
    ":grandCol": new OxmlAttr(":grandCol", OxmlType.BooleanValue),
    ":cacheIndex": new OxmlAttr(":cacheIndex", OxmlType.BooleanValue),
    ":outline": new OxmlAttr(":outline", OxmlType.BooleanValue),
    ":offset": new OxmlAttr(":offset", OxmlType.StringValue),
    ":collapsedLevelsAreSubtotals": new OxmlAttr(":collapsedLevelsAreSubtotals", OxmlType.BooleanValue),
    ":axis": new OxmlAttr(":axis", OxmlType.EnumValue, PivotTableAxisValuesArray),
    ":fieldPosition": new OxmlAttr(":fieldPosition", OxmlType.UInt32Value)
  };
  CalculatedItem._C = {
    "x:pivotArea": PivotArea,
    "x:extLst": ExtensionList
  };
  CalculatedItem._D = {
    ":field": new OxmlAttr(":field", OxmlType.UInt32Value),
    ":formula": new OxmlAttr(":formula", OxmlType.StringValue)
  };
  Query._C = {
    "x:tpls": Tuples
  };
  Query._D = {
    ":mdx": new OxmlAttr(":mdx", OxmlType.StringValue)
  };
  TupleSet._C = {
    "x:tpls": Tuples,
    "x:sortByTuple": SortByTuple
  };
  TupleSet._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":maxRank": new OxmlAttr(":maxRank", OxmlType.Int32Value),
    ":setDefinition": new OxmlAttr(":setDefinition", OxmlType.StringValue),
    ":sortType": new OxmlAttr(":sortType", OxmlType.EnumValue, SortValuesArray),
    ":queryFailed": new OxmlAttr(":queryFailed", OxmlType.BooleanValue)
  };
  Tuple._D = {
    ":fld": new OxmlAttr(":fld", OxmlType.UInt32Value),
    ":hier": new OxmlAttr(":hier", OxmlType.UInt32Value),
    ":item": new OxmlAttr(":item", OxmlType.UInt32Value)
  };
  ServerFormat._D = {
    ":culture": new OxmlAttr(":culture", OxmlType.StringValue),
    ":format": new OxmlAttr(":format", OxmlType.StringValue)
  };
  ServerFormats._C = {
    "x:serverFormat": ServerFormat
  };
  ServerFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  QueryCache._C = {
    "x:query": Query
  };
  QueryCache._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Sets._C = {
    "x:set": TupleSet
  };
  Sets._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Entries._C = {
    "x:m": MissingItem,
    "x:n": NumberItem,
    "x:e": ErrorItem,
    "x:s": StringItem
  };
  Entries._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  GroupMember._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":group": new OxmlAttr(":group", OxmlType.BooleanValue)
  };
  GroupMembers._C = {
    "x:groupMember": GroupMember
  };
  GroupMembers._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Group._C = {
    "x:groupMembers": GroupMembers
  };
  Group._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":uniqueParent": new OxmlAttr(":uniqueParent", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.Int32Value)
  };
  Groups._C = {
    "x:group": Group
  };
  Groups._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  GroupLevel._C = {
    "x:groups": Groups,
    "x:extLst": ExtensionList
  };
  GroupLevel._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":user": new OxmlAttr(":user", OxmlType.BooleanValue),
    ":customRollUp": new OxmlAttr(":customRollUp", OxmlType.BooleanValue)
  };
  FieldUsage._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int32Value)
  };
  Kpi._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":displayFolder": new OxmlAttr(":displayFolder", OxmlType.StringValue),
    ":measureGroup": new OxmlAttr(":measureGroup", OxmlType.StringValue),
    ":parent": new OxmlAttr(":parent", OxmlType.StringValue),
    ":value": new OxmlAttr(":value", OxmlType.StringValue),
    ":goal": new OxmlAttr(":goal", OxmlType.StringValue),
    ":status": new OxmlAttr(":status", OxmlType.StringValue),
    ":trend": new OxmlAttr(":trend", OxmlType.StringValue),
    ":weight": new OxmlAttr(":weight", OxmlType.StringValue)
  };
  PivotCacheRecord._C = {
    "x:m": MissingItem,
    "x:n": NumberItem,
    "x:b": BooleanItem,
    "x:e": ErrorItem,
    "x:s": StringItem,
    "x:d": DateTimeItem,
    "x:x": FieldItem
  };
  XType._D = {
    ":v": new OxmlAttr(":v", OxmlType.Int32Value)
  };
  TuplesType._C = {
    "x:tpl": Tuple
  };
  TuplesType._D = {
    ":c": new OxmlAttr(":c", OxmlType.UInt32Value)
  };
  SortByTuple._C = {
    "x:tpl": Tuple
  };
  Tuples._C = {
    "x:tpl": Tuple
  };
  DateTimeItem._C = {
    "x:x": MemberPropertyIndex
  };
  DateTimeItem._D = {
    ":v": new OxmlAttr(":v", OxmlType.DateTimeValue),
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":cp": new OxmlAttr(":cp", OxmlType.UInt32Value)
  };
  StringItem._C = {
    "x:tpls": Tuples,
    "x:x": MemberPropertyIndex
  };
  StringItem._D = {
    ":v": new OxmlAttr(":v", OxmlType.StringValue),
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":cp": new OxmlAttr(":cp", OxmlType.UInt32Value),
    ":in": new OxmlAttr(":in", OxmlType.UInt32Value),
    ":bc": new OxmlAttr(":bc", OxmlType.HexBinaryValue),
    ":fc": new OxmlAttr(":fc", OxmlType.HexBinaryValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":un": new OxmlAttr(":un", OxmlType.BooleanValue),
    ":st": new OxmlAttr(":st", OxmlType.BooleanValue),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue)
  };
  ErrorItem._C = {
    "x:tpls": Tuples,
    "x:x": MemberPropertyIndex
  };
  ErrorItem._D = {
    ":v": new OxmlAttr(":v", OxmlType.StringValue),
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":cp": new OxmlAttr(":cp", OxmlType.UInt32Value),
    ":in": new OxmlAttr(":in", OxmlType.UInt32Value),
    ":bc": new OxmlAttr(":bc", OxmlType.HexBinaryValue),
    ":fc": new OxmlAttr(":fc", OxmlType.HexBinaryValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":un": new OxmlAttr(":un", OxmlType.BooleanValue),
    ":st": new OxmlAttr(":st", OxmlType.BooleanValue),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue)
  };
  BooleanItem._C = {
    "x:x": MemberPropertyIndex
  };
  BooleanItem._D = {
    ":v": new OxmlAttr(":v", OxmlType.BooleanValue),
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":cp": new OxmlAttr(":cp", OxmlType.UInt32Value)
  };
  NumberItem._C = {
    "x:tpls": Tuples,
    "x:x": MemberPropertyIndex
  };
  NumberItem._D = {
    ":v": new OxmlAttr(":v", OxmlType.DoubleValue),
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":cp": new OxmlAttr(":cp", OxmlType.UInt32Value),
    ":in": new OxmlAttr(":in", OxmlType.UInt32Value),
    ":bc": new OxmlAttr(":bc", OxmlType.HexBinaryValue),
    ":fc": new OxmlAttr(":fc", OxmlType.HexBinaryValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":un": new OxmlAttr(":un", OxmlType.BooleanValue),
    ":st": new OxmlAttr(":st", OxmlType.BooleanValue),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue)
  };
  MissingItem._C = {
    "x:tpls": Tuples,
    "x:x": MemberPropertyIndex
  };
  MissingItem._D = {
    ":u": new OxmlAttr(":u", OxmlType.BooleanValue),
    ":f": new OxmlAttr(":f", OxmlType.BooleanValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":cp": new OxmlAttr(":cp", OxmlType.UInt32Value),
    ":in": new OxmlAttr(":in", OxmlType.UInt32Value),
    ":bc": new OxmlAttr(":bc", OxmlType.HexBinaryValue),
    ":fc": new OxmlAttr(":fc", OxmlType.HexBinaryValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":un": new OxmlAttr(":un", OxmlType.BooleanValue),
    ":st": new OxmlAttr(":st", OxmlType.BooleanValue),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue)
  };
  RangeSet._D = {
    ":i1": new OxmlAttr(":i1", OxmlType.UInt32Value),
    ":i2": new OxmlAttr(":i2", OxmlType.UInt32Value),
    ":i3": new OxmlAttr(":i3", OxmlType.UInt32Value),
    ":i4": new OxmlAttr(":i4", OxmlType.UInt32Value),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sheet": new OxmlAttr(":sheet", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  PageItem._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  Page._C = {
    "x:pageItem": PageItem
  };
  Page._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  RangeSets._C = {
    "x:rangeSet": RangeSet
  };
  RangeSets._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Pages._C = {
    "x:page": Page
  };
  Pages._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  CacheField._C = {
    "x:sharedItems": SharedItems,
    "x:fieldGroup": FieldGroup,
    "x:mpMap": MemberPropertiesMap,
    "x:extLst": CacheFieldExtensionList
  };
  CacheField._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":propertyName": new OxmlAttr(":propertyName", OxmlType.StringValue),
    ":serverField": new OxmlAttr(":serverField", OxmlType.BooleanValue),
    ":uniqueList": new OxmlAttr(":uniqueList", OxmlType.BooleanValue),
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value),
    ":formula": new OxmlAttr(":formula", OxmlType.StringValue),
    ":sqlType": new OxmlAttr(":sqlType", OxmlType.Int32Value),
    ":hierarchy": new OxmlAttr(":hierarchy", OxmlType.Int32Value),
    ":level": new OxmlAttr(":level", OxmlType.UInt32Value),
    ":databaseField": new OxmlAttr(":databaseField", OxmlType.BooleanValue),
    ":mappingCount": new OxmlAttr(":mappingCount", OxmlType.UInt32Value),
    ":memberPropertyField": new OxmlAttr(":memberPropertyField", OxmlType.BooleanValue)
  };
  TextField._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ExternalConnectionValuesArray),
    ":position": new OxmlAttr(":position", OxmlType.UInt32Value)
  };
  FieldItem._D = {
    ":v": new OxmlAttr(":v", OxmlType.UInt32Value)
  };
  CharacterValue._D = {
    ":v": new OxmlAttr(":v", OxmlType.StringValue)
  };
  Parameter._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sqlType": new OxmlAttr(":sqlType", OxmlType.Int32Value),
    ":parameterType": new OxmlAttr(":parameterType", OxmlType.EnumValue, ParameterValuesArray),
    ":refreshOnChange": new OxmlAttr(":refreshOnChange", OxmlType.BooleanValue),
    ":prompt": new OxmlAttr(":prompt", OxmlType.StringValue),
    ":boolean": new OxmlAttr(":boolean", OxmlType.BooleanValue),
    ":double": new OxmlAttr(":double", OxmlType.DoubleValue),
    ":integer": new OxmlAttr(":integer", OxmlType.Int32Value),
    ":string": new OxmlAttr(":string", OxmlType.StringValue),
    ":cell": new OxmlAttr(":cell", OxmlType.StringValue)
  };
  Tables._C = {
    "x:m": MissingTable,
    "x:s": CharacterValue,
    "x:x": FieldItem
  };
  Tables._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Connection._C = {
    "x:dbPr": DatabaseProperties,
    "x:olapPr": OlapProperties,
    "x:webPr": WebQueryProperties,
    "x:textPr": TextProperties,
    "x:parameters": Parameters,
    "x:extLst": ConnectionExtensionList
  };
  Connection._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":sourceFile": new OxmlAttr(":sourceFile", OxmlType.StringValue),
    ":odcFile": new OxmlAttr(":odcFile", OxmlType.StringValue),
    ":keepAlive": new OxmlAttr(":keepAlive", OxmlType.BooleanValue),
    ":interval": new OxmlAttr(":interval", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.UInt32Value),
    ":reconnectionMethod": new OxmlAttr(":reconnectionMethod", OxmlType.UInt32Value),
    ":refreshedVersion": new OxmlAttr(":refreshedVersion", OxmlType.ByteValue),
    ":minRefreshableVersion": new OxmlAttr(":minRefreshableVersion", OxmlType.ByteValue),
    ":savePassword": new OxmlAttr(":savePassword", OxmlType.BooleanValue),
    ":new": new OxmlAttr(":new", OxmlType.BooleanValue),
    ":deleted": new OxmlAttr(":deleted", OxmlType.BooleanValue),
    ":onlyUseConnectionFile": new OxmlAttr(":onlyUseConnectionFile", OxmlType.BooleanValue),
    ":background": new OxmlAttr(":background", OxmlType.BooleanValue),
    ":refreshOnLoad": new OxmlAttr(":refreshOnLoad", OxmlType.BooleanValue),
    ":saveData": new OxmlAttr(":saveData", OxmlType.BooleanValue),
    ":credentials": new OxmlAttr(":credentials", OxmlType.EnumValue, CredentialsMethodValuesArray),
    ":singleSignOnId": new OxmlAttr(":singleSignOnId", OxmlType.StringValue)
  };
  DataBinding._D = {
    ":DataBindingName": new OxmlAttr(":DataBindingName", OxmlType.StringValue),
    ":FileBinding": new OxmlAttr(":FileBinding", OxmlType.BooleanValue),
    ":ConnectionID": new OxmlAttr(":ConnectionID", OxmlType.UInt32Value),
    ":FileBindingName": new OxmlAttr(":FileBindingName", OxmlType.StringValue),
    ":DataBindingLoadMode": new OxmlAttr(":DataBindingLoadMode", OxmlType.UInt32Value)
  };
  Map._C = {
    "x:DataBinding": DataBinding
  };
  Map._D = {
    ":ID": new OxmlAttr(":ID", OxmlType.UInt32Value),
    ":Name": new OxmlAttr(":Name", OxmlType.StringValue),
    ":RootElement": new OxmlAttr(":RootElement", OxmlType.StringValue),
    ":SchemaID": new OxmlAttr(":SchemaID", OxmlType.StringValue),
    ":ShowImportExportValidationErrors": new OxmlAttr(":ShowImportExportValidationErrors", OxmlType.BooleanValue),
    ":AutoFit": new OxmlAttr(":AutoFit", OxmlType.BooleanValue),
    ":Append": new OxmlAttr(":Append", OxmlType.BooleanValue),
    ":PreserveSortAFLayout": new OxmlAttr(":PreserveSortAFLayout", OxmlType.BooleanValue),
    ":PreserveFormat": new OxmlAttr(":PreserveFormat", OxmlType.BooleanValue)
  };
  Schema._D = {
    ":ID": new OxmlAttr(":ID", OxmlType.StringValue),
    ":SchemaRef": new OxmlAttr(":SchemaRef", OxmlType.StringValue),
    ":Namespace": new OxmlAttr(":Namespace", OxmlType.StringValue)
  };
  XstringType._D = {
    "xml:space": new OxmlAttr("xml:space", OxmlType.EnumValue, SpaceProcessingModeValuesArray)
  };
  Comment._C = {
    "x:text": CommentText,
    "x:commentPr": CommentProperties
  };
  Comment._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":authorId": new OxmlAttr(":authorId", OxmlType.UInt32Value),
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":shapeId": new OxmlAttr(":shapeId", OxmlType.UInt32Value)
  };
  CommentList._C = {
    "x:comment": Comment
  };
  Authors._C = {
    "x:author": Author
  };
  CalculationCell._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":i": new OxmlAttr(":i", OxmlType.Int32Value),
    ":s": new OxmlAttr(":s", OxmlType.BooleanValue),
    ":l": new OxmlAttr(":l", OxmlType.BooleanValue),
    ":t": new OxmlAttr(":t", OxmlType.BooleanValue),
    ":a": new OxmlAttr(":a", OxmlType.BooleanValue)
  };
  CustomFilter._D = {
    ":operator": new OxmlAttr(":operator", OxmlType.EnumValue, FilterOperatorValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "x:ext": Extension
  };
  SortState._C = {
    "x14:sortCondition": X14SortCondition,
    "x:sortCondition": SortCondition,
    "x:extLst": ExtensionList
  };
  SortState._D = {
    ":columnSort": new OxmlAttr(":columnSort", OxmlType.BooleanValue),
    ":caseSensitive": new OxmlAttr(":caseSensitive", OxmlType.BooleanValue),
    ":sortMethod": new OxmlAttr(":sortMethod", OxmlType.EnumValue, SortMethodValuesArray),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  FilterColumn._C = {
    "x:filters": Filters,
    "x:top10": Top10,
    "x14:customFilters": X14CustomFilters,
    "x:customFilters": CustomFilters,
    "x:dynamicFilter": DynamicFilter,
    "x:colorFilter": ColorFilter,
    "x14:iconFilter": X14IconFilter,
    "x:iconFilter": IconFilter,
    "x:extLst": ExtensionList
  };
  FilterColumn._D = {
    ":colId": new OxmlAttr(":colId", OxmlType.UInt32Value),
    ":hiddenButton": new OxmlAttr(":hiddenButton", OxmlType.BooleanValue),
    ":showButton": new OxmlAttr(":showButton", OxmlType.BooleanValue)
  };
  Workbook._C = {
    "x:fileVersion": FileVersion,
    "x:fileSharing": FileSharing,
    "x:workbookPr": WorkbookProperties,
    "x15ac:absPath": X15acAbsolutePath,
    "x:workbookProtection": WorkbookProtection,
    "x:bookViews": BookViews,
    "x:sheets": Sheets,
    "x:functionGroups": FunctionGroups,
    "x:externalReferences": ExternalReferences,
    "x:definedNames": DefinedNames,
    "x:calcPr": CalculationProperties,
    "x:oleSize": OleSize,
    "x:customWorkbookViews": CustomWorkbookViews,
    "x:pivotCaches": PivotCaches,
    "x:webPublishing": WebPublishing,
    "x:fileRecoveryPr": FileRecoveryProperties,
    "x:webPublishObjects": WebPublishObjects,
    "x:extLst": WorkbookExtensionList
  };
  Workbook._D = {
    ":conformance": new OxmlAttr(":conformance", OxmlType.EnumValue, ConformanceClassArray)
  };
  VolatileTypes._C = {
    "x:volType": VolatileType,
    "x:extLst": ExtensionList
  };
  Table._C = {
    "x:autoFilter": AutoFilter,
    "x:sortState": SortState,
    "x:tableColumns": TableColumns,
    "x:tableStyleInfo": TableStyleInfo,
    "x:extLst": TableExtensionList
  };
  Table._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":displayName": new OxmlAttr(":displayName", OxmlType.StringValue),
    ":comment": new OxmlAttr(":comment", OxmlType.StringValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":tableType": new OxmlAttr(":tableType", OxmlType.EnumValue, TableValuesArray),
    ":headerRowCount": new OxmlAttr(":headerRowCount", OxmlType.UInt32Value),
    ":insertRow": new OxmlAttr(":insertRow", OxmlType.BooleanValue),
    ":insertRowShift": new OxmlAttr(":insertRowShift", OxmlType.BooleanValue),
    ":totalsRowCount": new OxmlAttr(":totalsRowCount", OxmlType.UInt32Value),
    ":totalsRowShown": new OxmlAttr(":totalsRowShown", OxmlType.BooleanValue),
    ":published": new OxmlAttr(":published", OxmlType.BooleanValue),
    ":headerRowDxfId": new OxmlAttr(":headerRowDxfId", OxmlType.UInt32Value),
    ":dataDxfId": new OxmlAttr(":dataDxfId", OxmlType.UInt32Value),
    ":totalsRowDxfId": new OxmlAttr(":totalsRowDxfId", OxmlType.UInt32Value),
    ":headerRowBorderDxfId": new OxmlAttr(":headerRowBorderDxfId", OxmlType.UInt32Value),
    ":tableBorderDxfId": new OxmlAttr(":tableBorderDxfId", OxmlType.UInt32Value),
    ":totalsRowBorderDxfId": new OxmlAttr(":totalsRowBorderDxfId", OxmlType.UInt32Value),
    ":headerRowCellStyle": new OxmlAttr(":headerRowCellStyle", OxmlType.StringValue),
    ":dataCellStyle": new OxmlAttr(":dataCellStyle", OxmlType.StringValue),
    ":totalsRowCellStyle": new OxmlAttr(":totalsRowCellStyle", OxmlType.StringValue),
    ":connectionId": new OxmlAttr(":connectionId", OxmlType.UInt32Value)
  };
  ExternalLink._C = {
    "x:externalBook": ExternalBook,
    "x:ddeLink": DdeLink,
    "x:oleLink": OleLink,
    "x:extLst": ExtensionList
  };
  Stylesheet._C = {
    "x:numFmts": NumberingFormats,
    "x:fonts": Fonts,
    "x:fills": Fills,
    "x:borders": Borders,
    "x:cellStyleXfs": CellStyleFormats,
    "x:cellXfs": CellFormats,
    "x:cellStyles": CellStyles,
    "x:dxfs": DifferentialFormats,
    "x:tableStyles": TableStyles,
    "x:colors": Colors,
    "x:extLst": StylesheetExtensionList
  };
  SingleXmlCells._C = {
    "x:singleXmlCell": SingleXmlCell
  };
  Metadata._C = {
    "x:metadataTypes": MetadataTypes,
    "x:metadataStrings": MetadataStrings,
    "x:mdxMetadata": MdxMetadata,
    "x:futureMetadata": FutureMetadata,
    "x:cellMetadata": CellMetadata,
    "x:valueMetadata": ValueMetadata,
    "x:extLst": ExtensionList
  };
  DialogSheet._C = {
    "x:sheetPr": SheetProperties,
    "x:sheetViews": SheetViews,
    "x:sheetFormatPr": SheetFormatProperties,
    "x:sheetProtection": SheetProtection,
    "x:customSheetViews": CustomSheetViews,
    "x:printOptions": PrintOptions,
    "x:pageMargins": PageMargins,
    "x:pageSetup": PageSetup,
    "x:headerFooter": HeaderFooter,
    "x:drawing": Drawing,
    "x:legacyDrawing": LegacyDrawing,
    "x:legacyDrawingHF": LegacyDrawingHeaderFooter,
    "x:drawingHF": DrawingHeaderFooter,
    "x:oleObjects": OleObjects,
    "x:controls": Controls,
    "x:extLst": ExtensionList
  };
  Chartsheet._C = {
    "x:sheetPr": ChartSheetProperties,
    "x:sheetViews": ChartSheetViews,
    "x:sheetProtection": ChartSheetProtection,
    "x:customSheetViews": CustomChartsheetViews,
    "x:pageMargins": PageMargins,
    "x:pageSetup": ChartSheetPageSetup,
    "x:headerFooter": HeaderFooter,
    "x:drawing": Drawing,
    "x:legacyDrawing": LegacyDrawing,
    "x:legacyDrawingHF": LegacyDrawingHeaderFooter,
    "x:drawingHF": DrawingHeaderFooter,
    "x:picture": Picture,
    "x:webPublishItems": WebPublishItems,
    "x:extLst": ExtensionList
  };
  Worksheet._C = {
    "x:sheetPr": SheetProperties,
    "x:dimension": SheetDimension,
    "x:sheetViews": SheetViews,
    "x:sheetFormatPr": SheetFormatProperties,
    "x:cols": Columns,
    "x:sheetData": SheetData,
    "x:sheetCalcPr": SheetCalculationProperties,
    "x:sheetProtection": SheetProtection,
    "x:protectedRanges": ProtectedRanges,
    "x:scenarios": Scenarios,
    "x:autoFilter": AutoFilter,
    "x:sortState": SortState,
    "x:dataConsolidate": DataConsolidate,
    "x:customSheetViews": CustomSheetViews,
    "x:mergeCells": MergeCells,
    "x:phoneticPr": PhoneticProperties,
    "x:conditionalFormatting": ConditionalFormatting,
    "x:dataValidations": DataValidations,
    "x:hyperlinks": Hyperlinks,
    "x:printOptions": PrintOptions,
    "x:pageMargins": PageMargins,
    "x:pageSetup": PageSetup,
    "x:headerFooter": HeaderFooter,
    "x:rowBreaks": RowBreaks,
    "x:colBreaks": ColumnBreaks,
    "x:customProperties": CustomProperties,
    "x:cellWatches": CellWatches,
    "x:ignoredErrors": IgnoredErrors,
    "x:drawing": Drawing,
    "x:legacyDrawing": LegacyDrawing,
    "x:legacyDrawingHF": LegacyDrawingHeaderFooter,
    "x:drawingHF": DrawingHeaderFooter,
    "x:picture": Picture,
    "x:oleObjects": OleObjects,
    "x:controls": Controls,
    "x:webPublishItems": WebPublishItems,
    "x:tableParts": TableParts,
    "x:extLst": WorksheetExtensionList
  };
  Users._C = {
    "x:userInfo": UserInfo
  };
  Users._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  Revisions._C = {
    "x:rrc": RevisionRowColumn,
    "x:rm": RevisionMove,
    "x:rcv": RevisionCustomView,
    "x:rsnm": RevisionSheetName,
    "x:ris": RevisionInsertSheet,
    "x:rcc": RevisionCellChange,
    "x:rfmt": RevisionFormat,
    "x:raf": RevisionAutoFormat,
    "x:rdn": RevisionDefinedName,
    "x:rcmt": RevisionComment,
    "x:rqt": RevisionQueryTable,
    "x:rcft": RevisionConflict
  };
  Headers._C = {
    "x:header": Header
  };
  Headers._D = {
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":lastGuid": new OxmlAttr(":lastGuid", OxmlType.StringValue),
    ":shared": new OxmlAttr(":shared", OxmlType.BooleanValue),
    ":diskRevisions": new OxmlAttr(":diskRevisions", OxmlType.BooleanValue),
    ":history": new OxmlAttr(":history", OxmlType.BooleanValue),
    ":trackRevisions": new OxmlAttr(":trackRevisions", OxmlType.BooleanValue),
    ":exclusive": new OxmlAttr(":exclusive", OxmlType.BooleanValue),
    ":revisionId": new OxmlAttr(":revisionId", OxmlType.UInt32Value),
    ":version": new OxmlAttr(":version", OxmlType.Int32Value),
    ":keepChangeHistory": new OxmlAttr(":keepChangeHistory", OxmlType.BooleanValue),
    ":protected": new OxmlAttr(":protected", OxmlType.BooleanValue),
    ":preserveHistory": new OxmlAttr(":preserveHistory", OxmlType.UInt32Value)
  };
  SharedStringTable._C = {
    "x:si": SharedStringItem,
    "x:extLst": ExtensionList
  };
  SharedStringTable._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":uniqueCount": new OxmlAttr(":uniqueCount", OxmlType.UInt32Value)
  };
  QueryTable._C = {
    "x:queryTableRefresh": QueryTableRefresh,
    "x:extLst": QueryTableExtensionList
  };
  QueryTable._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":headers": new OxmlAttr(":headers", OxmlType.BooleanValue),
    ":rowNumbers": new OxmlAttr(":rowNumbers", OxmlType.BooleanValue),
    ":disableRefresh": new OxmlAttr(":disableRefresh", OxmlType.BooleanValue),
    ":backgroundRefresh": new OxmlAttr(":backgroundRefresh", OxmlType.BooleanValue),
    ":firstBackgroundRefresh": new OxmlAttr(":firstBackgroundRefresh", OxmlType.BooleanValue),
    ":refreshOnLoad": new OxmlAttr(":refreshOnLoad", OxmlType.BooleanValue),
    ":growShrinkType": new OxmlAttr(":growShrinkType", OxmlType.EnumValue, GrowShrinkValuesArray),
    ":fillFormulas": new OxmlAttr(":fillFormulas", OxmlType.BooleanValue),
    ":removeDataOnSave": new OxmlAttr(":removeDataOnSave", OxmlType.BooleanValue),
    ":disableEdit": new OxmlAttr(":disableEdit", OxmlType.BooleanValue),
    ":preserveFormatting": new OxmlAttr(":preserveFormatting", OxmlType.BooleanValue),
    ":adjustColumnWidth": new OxmlAttr(":adjustColumnWidth", OxmlType.BooleanValue),
    ":intermediate": new OxmlAttr(":intermediate", OxmlType.BooleanValue),
    ":connectionId": new OxmlAttr(":connectionId", OxmlType.UInt32Value),
    ":autoFormatId": new OxmlAttr(":autoFormatId", OxmlType.UInt32Value),
    ":applyNumberFormats": new OxmlAttr(":applyNumberFormats", OxmlType.BooleanValue),
    ":applyBorderFormats": new OxmlAttr(":applyBorderFormats", OxmlType.BooleanValue),
    ":applyFontFormats": new OxmlAttr(":applyFontFormats", OxmlType.BooleanValue),
    ":applyPatternFormats": new OxmlAttr(":applyPatternFormats", OxmlType.BooleanValue),
    ":applyAlignmentFormats": new OxmlAttr(":applyAlignmentFormats", OxmlType.BooleanValue),
    ":applyWidthHeightFormats": new OxmlAttr(":applyWidthHeightFormats", OxmlType.BooleanValue)
  };
  PivotTableDefinition._C = {
    "x:location": Location,
    "x:pivotFields": PivotFields,
    "x:rowFields": RowFields,
    "x:rowItems": RowItems,
    "x:colFields": ColumnFields,
    "x:colItems": ColumnItems,
    "x:pageFields": PageFields,
    "x:dataFields": DataFields,
    "x:formats": Formats,
    "x:conditionalFormats": ConditionalFormats,
    "x:chartFormats": ChartFormats,
    "x:pivotHierarchies": PivotHierarchies,
    "x:pivotTableStyleInfo": PivotTableStyle,
    "x:filters": PivotFilters,
    "x:rowHierarchiesUsage": RowHierarchiesUsage,
    "x:colHierarchiesUsage": ColumnHierarchiesUsage,
    "x:extLst": PivotTableDefinitionExtensionList
  };
  PivotTableDefinition._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":cacheId": new OxmlAttr(":cacheId", OxmlType.UInt32Value),
    ":dataOnRows": new OxmlAttr(":dataOnRows", OxmlType.BooleanValue),
    ":dataPosition": new OxmlAttr(":dataPosition", OxmlType.UInt32Value),
    ":autoFormatId": new OxmlAttr(":autoFormatId", OxmlType.UInt32Value),
    ":applyNumberFormats": new OxmlAttr(":applyNumberFormats", OxmlType.BooleanValue),
    ":applyBorderFormats": new OxmlAttr(":applyBorderFormats", OxmlType.BooleanValue),
    ":applyFontFormats": new OxmlAttr(":applyFontFormats", OxmlType.BooleanValue),
    ":applyPatternFormats": new OxmlAttr(":applyPatternFormats", OxmlType.BooleanValue),
    ":applyAlignmentFormats": new OxmlAttr(":applyAlignmentFormats", OxmlType.BooleanValue),
    ":applyWidthHeightFormats": new OxmlAttr(":applyWidthHeightFormats", OxmlType.BooleanValue),
    ":dataCaption": new OxmlAttr(":dataCaption", OxmlType.StringValue),
    ":grandTotalCaption": new OxmlAttr(":grandTotalCaption", OxmlType.StringValue),
    ":errorCaption": new OxmlAttr(":errorCaption", OxmlType.StringValue),
    ":showError": new OxmlAttr(":showError", OxmlType.BooleanValue),
    ":missingCaption": new OxmlAttr(":missingCaption", OxmlType.StringValue),
    ":showMissing": new OxmlAttr(":showMissing", OxmlType.BooleanValue),
    ":pageStyle": new OxmlAttr(":pageStyle", OxmlType.StringValue),
    ":pivotTableStyle": new OxmlAttr(":pivotTableStyle", OxmlType.StringValue),
    ":vacatedStyle": new OxmlAttr(":vacatedStyle", OxmlType.StringValue),
    ":tag": new OxmlAttr(":tag", OxmlType.StringValue),
    ":updatedVersion": new OxmlAttr(":updatedVersion", OxmlType.ByteValue),
    ":minRefreshableVersion": new OxmlAttr(":minRefreshableVersion", OxmlType.ByteValue),
    ":asteriskTotals": new OxmlAttr(":asteriskTotals", OxmlType.BooleanValue),
    ":showItems": new OxmlAttr(":showItems", OxmlType.BooleanValue),
    ":editData": new OxmlAttr(":editData", OxmlType.BooleanValue),
    ":disableFieldList": new OxmlAttr(":disableFieldList", OxmlType.BooleanValue),
    ":showCalcMbrs": new OxmlAttr(":showCalcMbrs", OxmlType.BooleanValue),
    ":visualTotals": new OxmlAttr(":visualTotals", OxmlType.BooleanValue),
    ":showMultipleLabel": new OxmlAttr(":showMultipleLabel", OxmlType.BooleanValue),
    ":showDataDropDown": new OxmlAttr(":showDataDropDown", OxmlType.BooleanValue),
    ":showDrill": new OxmlAttr(":showDrill", OxmlType.BooleanValue),
    ":printDrill": new OxmlAttr(":printDrill", OxmlType.BooleanValue),
    ":showMemberPropertyTips": new OxmlAttr(":showMemberPropertyTips", OxmlType.BooleanValue),
    ":showDataTips": new OxmlAttr(":showDataTips", OxmlType.BooleanValue),
    ":enableWizard": new OxmlAttr(":enableWizard", OxmlType.BooleanValue),
    ":enableDrill": new OxmlAttr(":enableDrill", OxmlType.BooleanValue),
    ":enableFieldProperties": new OxmlAttr(":enableFieldProperties", OxmlType.BooleanValue),
    ":preserveFormatting": new OxmlAttr(":preserveFormatting", OxmlType.BooleanValue),
    ":useAutoFormatting": new OxmlAttr(":useAutoFormatting", OxmlType.BooleanValue),
    ":pageWrap": new OxmlAttr(":pageWrap", OxmlType.UInt32Value),
    ":pageOverThenDown": new OxmlAttr(":pageOverThenDown", OxmlType.BooleanValue),
    ":subtotalHiddenItems": new OxmlAttr(":subtotalHiddenItems", OxmlType.BooleanValue),
    ":rowGrandTotals": new OxmlAttr(":rowGrandTotals", OxmlType.BooleanValue),
    ":colGrandTotals": new OxmlAttr(":colGrandTotals", OxmlType.BooleanValue),
    ":fieldPrintTitles": new OxmlAttr(":fieldPrintTitles", OxmlType.BooleanValue),
    ":itemPrintTitles": new OxmlAttr(":itemPrintTitles", OxmlType.BooleanValue),
    ":mergeItem": new OxmlAttr(":mergeItem", OxmlType.BooleanValue),
    ":showDropZones": new OxmlAttr(":showDropZones", OxmlType.BooleanValue),
    ":createdVersion": new OxmlAttr(":createdVersion", OxmlType.ByteValue),
    ":indent": new OxmlAttr(":indent", OxmlType.UInt32Value),
    ":showEmptyRow": new OxmlAttr(":showEmptyRow", OxmlType.BooleanValue),
    ":showEmptyCol": new OxmlAttr(":showEmptyCol", OxmlType.BooleanValue),
    ":showHeaders": new OxmlAttr(":showHeaders", OxmlType.BooleanValue),
    ":compact": new OxmlAttr(":compact", OxmlType.BooleanValue),
    ":outline": new OxmlAttr(":outline", OxmlType.BooleanValue),
    ":outlineData": new OxmlAttr(":outlineData", OxmlType.BooleanValue),
    ":compactData": new OxmlAttr(":compactData", OxmlType.BooleanValue),
    ":published": new OxmlAttr(":published", OxmlType.BooleanValue),
    ":gridDropZones": new OxmlAttr(":gridDropZones", OxmlType.BooleanValue),
    ":immersive": new OxmlAttr(":immersive", OxmlType.BooleanValue),
    ":multipleFieldFilters": new OxmlAttr(":multipleFieldFilters", OxmlType.BooleanValue),
    ":chartFormat": new OxmlAttr(":chartFormat", OxmlType.UInt32Value),
    ":rowHeaderCaption": new OxmlAttr(":rowHeaderCaption", OxmlType.StringValue),
    ":colHeaderCaption": new OxmlAttr(":colHeaderCaption", OxmlType.StringValue),
    ":fieldListSortAscending": new OxmlAttr(":fieldListSortAscending", OxmlType.BooleanValue),
    ":mdxSubqueries": new OxmlAttr(":mdxSubqueries", OxmlType.BooleanValue),
    ":customListSort": new OxmlAttr(":customListSort", OxmlType.BooleanValue)
  };
  PivotCacheRecords._C = {
    "x:r": PivotCacheRecord,
    "x:extLst": ExtensionList
  };
  PivotCacheRecords._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotCacheDefinition._C = {
    "x:cacheSource": CacheSource,
    "x:cacheFields": CacheFields,
    "x:cacheHierarchies": CacheHierarchies,
    "x:kpis": Kpis,
    "x:tupleCache": TupleCache,
    "x:calculatedItems": CalculatedItems,
    "x:calculatedMembers": CalculatedMembers,
    "x:dimensions": Dimensions,
    "x:measureGroups": MeasureGroups,
    "x:maps": Maps,
    "x:extLst": PivotCacheDefinitionExtensionList
  };
  PivotCacheDefinition._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":invalid": new OxmlAttr(":invalid", OxmlType.BooleanValue),
    ":saveData": new OxmlAttr(":saveData", OxmlType.BooleanValue),
    ":refreshOnLoad": new OxmlAttr(":refreshOnLoad", OxmlType.BooleanValue),
    ":optimizeMemory": new OxmlAttr(":optimizeMemory", OxmlType.BooleanValue),
    ":enableRefresh": new OxmlAttr(":enableRefresh", OxmlType.BooleanValue),
    ":refreshedBy": new OxmlAttr(":refreshedBy", OxmlType.StringValue),
    ":refreshedDateIso": new OxmlAttr(":refreshedDateIso", OxmlType.DateTimeValue),
    ":refreshedDate": new OxmlAttr(":refreshedDate", OxmlType.DoubleValue),
    ":backgroundQuery": new OxmlAttr(":backgroundQuery", OxmlType.BooleanValue),
    ":missingItemsLimit": new OxmlAttr(":missingItemsLimit", OxmlType.UInt32Value),
    ":createdVersion": new OxmlAttr(":createdVersion", OxmlType.ByteValue),
    ":refreshedVersion": new OxmlAttr(":refreshedVersion", OxmlType.ByteValue),
    ":minRefreshableVersion": new OxmlAttr(":minRefreshableVersion", OxmlType.ByteValue),
    ":recordCount": new OxmlAttr(":recordCount", OxmlType.UInt32Value),
    ":upgradeOnRefresh": new OxmlAttr(":upgradeOnRefresh", OxmlType.BooleanValue),
    ":tupleCache": new OxmlAttr(":tupleCache", OxmlType.BooleanValue),
    ":supportSubquery": new OxmlAttr(":supportSubquery", OxmlType.BooleanValue),
    ":supportAdvancedDrill": new OxmlAttr(":supportAdvancedDrill", OxmlType.BooleanValue)
  };
  Connections._C = {
    "x:connection": Connection
  };
  MapInfo._C = {
    "x:Schema": Schema,
    "x:Map": Map
  };
  MapInfo._D = {
    ":SelectionNamespaces": new OxmlAttr(":SelectionNamespaces", OxmlType.StringValue)
  };
  Comments._C = {
    "x:authors": Authors,
    "x:commentList": CommentList,
    "x:extLst": ExtensionList
  };
  CalculationChain._C = {
    "x:c": CalculationCell,
    "x:extLst": ExtensionList
  };
  Extension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  return {
    prefix: "x",
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  };
}
export {
  Alignment,
  Author,
  Authors,
  AutoFilter,
  AutoSortScope,
  BackgroundColor,
  Bold,
  BookViews,
  BooleanItem,
  BooleanPropertyType,
  Border,
  BorderPropertiesType,
  BorderStyleValues,
  BorderStyleValuesArray,
  Borders,
  BottomBorder,
  Break,
  CacheField,
  CacheFieldExtension,
  CacheFieldExtensionList,
  CacheFields,
  CacheHierarchies,
  CacheHierarchy,
  CacheHierarchyExtension,
  CacheHierarchyExtensionList,
  CacheSource,
  CacheSourceExtension,
  CacheSourceExtensionList,
  CalculateModeValues,
  CalculateModeValuesArray,
  CalculatedColumnFormula,
  CalculatedItem,
  CalculatedItems,
  CalculatedMember,
  CalculatedMemberExtension,
  CalculatedMemberExtensionList,
  CalculatedMembers,
  CalculationCell,
  CalculationChain,
  CalculationProperties,
  CalendarValues,
  CalendarValuesArray,
  Cell,
  CellCommentsValues,
  CellCommentsValuesArray,
  CellFormat,
  CellFormats,
  CellFormula,
  CellFormulaValues,
  CellFormulaValuesArray,
  CellMetadata,
  CellStyle,
  CellStyleFormats,
  CellStyles,
  CellType,
  CellValue,
  CellValues,
  CellValuesArray,
  CellWatch,
  CellWatches,
  CharacterValue,
  ChartFormat,
  ChartFormats,
  ChartSheetPageSetup,
  ChartSheetProperties,
  ChartSheetProtection,
  ChartSheetView,
  ChartSheetViews,
  Chartsheet,
  Color,
  ColorFilter,
  ColorScale,
  ColorType,
  Colors,
  Column,
  ColumnBreaks,
  ColumnFields,
  ColumnHierarchiesUsage,
  ColumnHierarchyUsage,
  ColumnItems,
  Columns,
  Comment,
  CommentList,
  CommentProperties,
  CommentText,
  Comments,
  CommentsValues,
  CommentsValuesArray,
  Condense,
  ConditionalFormat,
  ConditionalFormatValueObject,
  ConditionalFormatValueObjectValues,
  ConditionalFormatValueObjectValuesArray,
  ConditionalFormatValues,
  ConditionalFormatValuesArray,
  ConditionalFormats,
  ConditionalFormatting,
  ConditionalFormattingOperatorValues,
  ConditionalFormattingOperatorValuesArray,
  ConditionalFormattingRule,
  ConditionalFormattingRuleExtension,
  ConditionalFormattingRuleExtensionList,
  ConformanceClass,
  ConformanceClassArray,
  Connection,
  ConnectionExtension,
  ConnectionExtensionList,
  Connections,
  Consolidation,
  Control,
  ControlProperties,
  Controls,
  CredentialsMethodValues,
  CredentialsMethodValuesArray,
  CustomChartsheetView,
  CustomChartsheetViews,
  CustomFilter,
  CustomFilters,
  CustomProperties,
  CustomProperty,
  CustomSheetView,
  CustomSheetViews,
  CustomWorkbookView,
  CustomWorkbookViews,
  DataBar,
  DataBinding,
  DataConsolidate,
  DataConsolidateFunctionValues,
  DataConsolidateFunctionValuesArray,
  DataField,
  DataFieldExtension,
  DataFieldExtensionList,
  DataFields,
  DataReference,
  DataReferences,
  DataValidation,
  DataValidationErrorStyleValues,
  DataValidationErrorStyleValuesArray,
  DataValidationImeModeValues,
  DataValidationImeModeValuesArray,
  DataValidationOperatorValues,
  DataValidationOperatorValuesArray,
  DataValidationValues,
  DataValidationValuesArray,
  DataValidations,
  DataViewAspectValues,
  DataViewAspectValuesArray,
  DatabaseProperties,
  DateGroupItem,
  DateTimeGroupingValues,
  DateTimeGroupingValuesArray,
  DateTimeItem,
  DdeItem,
  DdeItems,
  DdeLink,
  DdeLinkValue,
  DdeValues,
  DdeValuesArray,
  DefinedName,
  DefinedNames,
  DeletedField,
  DiagonalBorder,
  DialogSheet,
  DifferentialFormat,
  DifferentialFormatType,
  DifferentialFormats,
  Dimension,
  Dimensions,
  DiscreteProperties,
  Drawing,
  DrawingHeaderFooter,
  DynamicFilter,
  DynamicFilterValues,
  DynamicFilterValuesArray,
  EmbeddedObjectProperties,
  EndBorder,
  Entries,
  ErrorItem,
  EvenFooter,
  EvenHeader,
  Extend,
  Extension,
  ExtensionList,
  ExternalBook,
  ExternalCell,
  ExternalConnectionValues,
  ExternalConnectionValuesArray,
  ExternalDefinedName,
  ExternalDefinedNames,
  ExternalLink,
  ExternalReference,
  ExternalReferences,
  ExternalRow,
  ExternalSheetData,
  Field,
  FieldGroup,
  FieldItem,
  FieldSortValues,
  FieldSortValuesArray,
  FieldUsage,
  FieldsUsage,
  FileRecoveryProperties,
  FileSharing,
  FileTypeValues,
  FileTypeValuesArray,
  FileVersion,
  Fill,
  Fills,
  Filter,
  FilterColumn,
  FilterOperatorValues,
  FilterOperatorValuesArray,
  Filters,
  FirstFooter,
  FirstHeader,
  Font,
  FontCharSet,
  FontFamily,
  FontFamilyNumbering,
  FontName,
  FontScheme,
  FontSchemeValues,
  FontSchemeValuesArray,
  FontSize,
  Fonts,
  ForegroundColor,
  Format,
  FormatActionValues,
  FormatActionValuesArray,
  Formats,
  Formula,
  Formula1,
  Formula2,
  FormulaExpressionValues,
  FormulaExpressionValuesArray,
  FromMarker,
  FunctionGroup,
  FunctionGroups,
  FutureMetadata,
  FutureMetadataBlock,
  GradientFill,
  GradientStop,
  GradientValues,
  GradientValuesArray,
  Group,
  GroupByValues,
  GroupByValuesArray,
  GroupItems,
  GroupLevel,
  GroupLevels,
  GroupMember,
  GroupMembers,
  Groups,
  GrowShrinkValues,
  GrowShrinkValuesArray,
  Header,
  HeaderFooter,
  Headers,
  HierarchyUsageType,
  HorizontalAlignmentValues,
  HorizontalAlignmentValuesArray,
  HorizontalBorder,
  HtmlFormattingValues,
  HtmlFormattingValuesArray,
  Hyperlink,
  Hyperlinks,
  IconFilter,
  IconSet,
  IconSetValues,
  IconSetValuesArray,
  IgnoredError,
  IgnoredErrors,
  IndexedColors,
  InlineString,
  InputCells,
  InternationalPropertyType,
  Italic,
  Item,
  ItemValues,
  ItemValuesArray,
  Items,
  Kpi,
  Kpis,
  LeftBorder,
  LegacyDrawing,
  LegacyDrawingHeaderFooter,
  LegacyDrawingType,
  Location,
  Main,
  Map,
  MapInfo,
  Maps,
  MarkerType,
  Mdx,
  MdxFunctionValues,
  MdxFunctionValuesArray,
  MdxKPIPropertyValues,
  MdxKPIPropertyValuesArray,
  MdxKpi,
  MdxMemberProp,
  MdxMetadata,
  MdxSet,
  MdxSetOrderValues,
  MdxSetOrderValuesArray,
  MdxTuple,
  MeasureDimensionMap,
  MeasureGroup,
  MeasureGroups,
  Member,
  MemberProperties,
  MemberPropertiesMap,
  MemberProperty,
  MemberPropertyIndex,
  Members,
  MergeCell,
  MergeCells,
  Metadata,
  MetadataBlock,
  MetadataBlocksType,
  MetadataRecord,
  MetadataStrings,
  MetadataType,
  MetadataTypes,
  MissingItem,
  MissingTable,
  MruColors,
  NameIndex,
  NewCell,
  NewDifferentialFormat,
  NumberItem,
  NumberingFormat,
  NumberingFormats,
  ObjectAnchor,
  ObjectDisplayValues,
  ObjectDisplayValuesArray,
  OddFooter,
  OddHeader,
  OlapProperties,
  OldCell,
  OldDifferentialFormat,
  OldFormula,
  OleItem,
  OleItems,
  OleLink,
  OleObject,
  OleObjects,
  OleSize,
  OleUpdateValues,
  OleUpdateValuesArray,
  OrientationValues,
  OrientationValuesArray,
  Outline,
  OutlineProperties,
  Page,
  PageBreakType,
  PageField,
  PageFields,
  PageItem,
  PageMargins,
  PageOrderValues,
  PageOrderValuesArray,
  PageSetup,
  PageSetupProperties,
  Pages,
  Pane,
  PaneStateValues,
  PaneStateValuesArray,
  PaneValues,
  PaneValuesArray,
  Parameter,
  ParameterValues,
  ParameterValuesArray,
  Parameters,
  PatternFill,
  PatternValues,
  PatternValuesArray,
  PhoneticAlignmentValues,
  PhoneticAlignmentValuesArray,
  PhoneticProperties,
  PhoneticRun,
  PhoneticValues,
  PhoneticValuesArray,
  Picture,
  PivotArea,
  PivotAreaReference,
  PivotAreaReferences,
  PivotAreaValues,
  PivotAreaValuesArray,
  PivotAreas,
  PivotCache,
  PivotCacheDefinition,
  PivotCacheDefinitionExtension,
  PivotCacheDefinitionExtensionList,
  PivotCacheRecord,
  PivotCacheRecords,
  PivotCaches,
  PivotField,
  PivotFieldExtension,
  PivotFieldExtensionList,
  PivotFields,
  PivotFilter,
  PivotFilterExtension,
  PivotFilterExtensionList,
  PivotFilterValues,
  PivotFilterValuesArray,
  PivotFilters,
  PivotHierarchies,
  PivotHierarchy,
  PivotHierarchyExtension,
  PivotHierarchyExtensionList,
  PivotSelection,
  PivotTableAxisValues,
  PivotTableAxisValuesArray,
  PivotTableDefinition,
  PivotTableDefinitionExtension,
  PivotTableDefinitionExtensionList,
  PivotTableStyle,
  PrintErrorValues,
  PrintErrorValuesArray,
  PrintOptions,
  ProtectedRange,
  ProtectedRanges,
  Protection,
  QualifierValues,
  QualifierValuesArray,
  Query,
  QueryCache,
  QueryTable,
  QueryTableDeletedFields,
  QueryTableExtension,
  QueryTableExtensionList,
  QueryTableField,
  QueryTableFields,
  QueryTableRefresh,
  RangeProperties,
  RangeSet,
  RangeSets,
  ReferenceModeValues,
  ReferenceModeValuesArray,
  Reviewed,
  ReviewedList,
  RevisionActionValues,
  RevisionActionValuesArray,
  RevisionAutoFormat,
  RevisionCellChange,
  RevisionComment,
  RevisionConflict,
  RevisionCustomView,
  RevisionDefinedName,
  RevisionFormat,
  RevisionInsertSheet,
  RevisionMove,
  RevisionQueryTable,
  RevisionRowColumn,
  RevisionSheetName,
  Revisions,
  RgbColor,
  RichDataPivotCacheGuid,
  RightBorder,
  Row,
  RowBreaks,
  RowColumnActionValues,
  RowColumnActionValuesArray,
  RowFields,
  RowHierarchiesUsage,
  RowHierarchyUsage,
  RowItem,
  RowItems,
  RstType,
  RuleValues,
  RuleValuesArray,
  Run,
  RunFont,
  RunProperties,
  RunPropertyCharSet,
  Scenario,
  Scenarios,
  Schema,
  ScopeValues,
  ScopeValuesArray,
  Selection,
  ServerFormat,
  ServerFormats,
  Sets,
  Shadow,
  SharedItems,
  SharedStringItem,
  SharedStringTable,
  Sheet,
  SheetCalculationProperties,
  SheetData,
  SheetDataSet,
  SheetDimension,
  SheetFormatProperties,
  SheetId,
  SheetIdMap,
  SheetName,
  SheetNames,
  SheetProperties,
  SheetProtection,
  SheetStateValues,
  SheetStateValuesArray,
  SheetView,
  SheetViewValues,
  SheetViewValuesArray,
  SheetViews,
  Sheets,
  ShowDataAsValues,
  ShowDataAsValuesArray,
  SingleXmlCell,
  SingleXmlCells,
  SlicerCacheDefinitionExtension,
  SortByTuple,
  SortByValues,
  SortByValuesArray,
  SortCondition,
  SortMethodValues,
  SortMethodValuesArray,
  SortState,
  SortValues,
  SortValuesArray,
  SourceValues,
  SourceValuesArray,
  StartBorder,
  Strike,
  StringItem,
  Stylesheet,
  StylesheetExtension,
  StylesheetExtensionList,
  Subtopic,
  TabColor,
  Table,
  TableColumn,
  TableColumns,
  TableExtension,
  TableExtensionList,
  TableFormulaType,
  TablePart,
  TableParts,
  TableStyle,
  TableStyleElement,
  TableStyleInfo,
  TableStyleValues,
  TableStyleValuesArray,
  TableStyles,
  TableValues,
  TableValuesArray,
  Tables,
  TargetScreenSizeValues,
  TargetScreenSizeValuesArray,
  Text,
  TextField,
  TextFields,
  TextHorizontalAlignmentValues,
  TextHorizontalAlignmentValuesArray,
  TextProperties,
  TextVerticalAlignmentValues,
  TextVerticalAlignmentValuesArray,
  TimePeriodValues,
  TimePeriodValuesArray,
  ToMarker,
  Top10,
  TopBorder,
  Topic,
  TopicReferences,
  TotalsRowFormula,
  TotalsRowFunctionValues,
  TotalsRowFunctionValuesArray,
  Tuple,
  TupleCache,
  TupleSet,
  Tuples,
  TuplesType,
  Underline,
  UnderlineValues,
  UnderlineValuesArray,
  Undo,
  UpdateLinksBehaviorValues,
  UpdateLinksBehaviorValuesArray,
  UserInfo,
  Users,
  Value,
  ValueMetadata,
  Values,
  VerticalAlignmentRunValues,
  VerticalAlignmentRunValuesArray,
  VerticalAlignmentValues,
  VerticalAlignmentValuesArray,
  VerticalBorder,
  VerticalTextAlignment,
  VisibilityValues,
  VisibilityValuesArray,
  VolatileDependencyValues,
  VolatileDependencyValuesArray,
  VolatileType,
  VolatileTypes,
  VolatileValues,
  VolatileValuesArray,
  WebPublishItem,
  WebPublishItems,
  WebPublishObject,
  WebPublishObjects,
  WebPublishing,
  WebQueryProperties,
  WebSourceValues,
  WebSourceValuesArray,
  Workbook,
  WorkbookExtension,
  WorkbookExtensionList,
  WorkbookProperties,
  WorkbookProtection,
  WorkbookView,
  Worksheet,
  WorksheetExtension,
  WorksheetExtensionList,
  WorksheetSource,
  XType,
  XmlCellProperties,
  XmlColumnProperties,
  XmlDataValues,
  XmlDataValuesArray,
  XmlProperties,
  Xstring,
  XstringType,
  initSpreadsheetNamespace
};
