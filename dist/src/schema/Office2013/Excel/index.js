import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { PivotFilterValuesArray } from "../../Spreadsheet";
import { FileTypeValuesArray } from "../../Spreadsheet";
import { QualifierValuesArray } from "../../Spreadsheet";
import { TabularSlicerCacheSortOrderValuesArray } from "../../Office2010/Excel";
import { SlicerCacheCrossFilterValuesArray } from "../../Office2010/Excel";
import { FilterColumn as XFilterColumn } from "../../Spreadsheet";
import { SortState as XSortState } from "../../Spreadsheet";
import { ExtensionList as XExtensionList } from "../../Spreadsheet";
import { Extension as XExtension } from "../../Spreadsheet";
import { TextFields as XTextFields } from "../../Spreadsheet";
import { Formula as XneFormula } from "../../Office/Excel";
import { SlicerCachePivotTable as X14SlicerCachePivotTable } from "../../Office2010/Excel";
import { SlicerCache as X14SlicerCache } from "../../Office2010/Excel";
import { DifferentialFormat as XDifferentialFormat } from "../../Spreadsheet";
import { PivotCache as XPivotCache } from "../../Spreadsheet";
var TimelineStyleType = /* @__PURE__ */ ((TimelineStyleType2) => {
  TimelineStyleType2["SelectionLabel"] = "selectionLabel";
  TimelineStyleType2["TimeLevel"] = "timeLevel";
  TimelineStyleType2["PeriodLabel1"] = "periodLabel1";
  TimelineStyleType2["PeriodLabel2"] = "periodLabel2";
  TimelineStyleType2["SelectedTimeBlock"] = "selectedTimeBlock";
  TimelineStyleType2["UnselectedTimeBlock"] = "unselectedTimeBlock";
  TimelineStyleType2["SelectedTimeBlockSpace"] = "selectedTimeBlockSpace";
  return TimelineStyleType2;
})(TimelineStyleType || {});
const TimelineStyleTypeArray = [
  "selectionLabel" /* SelectionLabel */,
  "timeLevel" /* TimeLevel */,
  "periodLabel1" /* PeriodLabel1 */,
  "periodLabel2" /* PeriodLabel2 */,
  "selectedTimeBlock" /* SelectedTimeBlock */,
  "unselectedTimeBlock" /* UnselectedTimeBlock */,
  "selectedTimeBlockSpace" /* SelectedTimeBlockSpace */
];
var CalculatedMemberNumberFormat = /* @__PURE__ */ ((CalculatedMemberNumberFormat2) => {
  CalculatedMemberNumberFormat2["Default"] = "default";
  CalculatedMemberNumberFormat2["Number"] = "number";
  CalculatedMemberNumberFormat2["Percent"] = "percent";
  return CalculatedMemberNumberFormat2;
})(CalculatedMemberNumberFormat || {});
const CalculatedMemberNumberFormatArray = [
  "default" /* Default */,
  "number" /* Number */,
  "percent" /* Percent */
];
var SXVCellType = /* @__PURE__ */ ((SXVCellType2) => {
  SXVCellType2["Boolean"] = "b";
  SXVCellType2["Number"] = "n";
  SXVCellType2["Error"] = "e";
  SXVCellType2["String"] = "str";
  SXVCellType2["Date"] = "d";
  SXVCellType2["Blank"] = "bl";
  return SXVCellType2;
})(SXVCellType || {});
const SXVCellTypeArray = [
  "b" /* Boolean */,
  "n" /* Number */,
  "e" /* Error */,
  "str" /* String */,
  "d" /* Date */,
  "bl" /* Blank */
];
var MovingPeriodStep = /* @__PURE__ */ ((MovingPeriodStep2) => {
  MovingPeriodStep2["Year"] = "year";
  MovingPeriodStep2["Quarter"] = "quarter";
  MovingPeriodStep2["Month"] = "month";
  MovingPeriodStep2["Week"] = "week";
  MovingPeriodStep2["Day"] = "day";
  return MovingPeriodStep2;
})(MovingPeriodStep || {});
const MovingPeriodStepArray = [
  "year" /* Year */,
  "quarter" /* Quarter */,
  "month" /* Month */,
  "week" /* Week */,
  "day" /* Day */
];
var QuestionType = /* @__PURE__ */ ((QuestionType2) => {
  QuestionType2["CheckBox"] = "checkBox";
  QuestionType2["Choice"] = "choice";
  QuestionType2["Date"] = "date";
  QuestionType2["Time"] = "time";
  QuestionType2["MultipleLinesOfText"] = "multipleLinesOfText";
  QuestionType2["Number"] = "number";
  QuestionType2["SingleLineOfText"] = "singleLineOfText";
  return QuestionType2;
})(QuestionType || {});
const QuestionTypeArray = [
  "checkBox" /* CheckBox */,
  "choice" /* Choice */,
  "date" /* Date */,
  "time" /* Time */,
  "multipleLinesOfText" /* MultipleLinesOfText */,
  "number" /* Number */,
  "singleLineOfText" /* SingleLineOfText */
];
var QuestionFormat = /* @__PURE__ */ ((QuestionFormat2) => {
  QuestionFormat2["GeneralDate"] = "generalDate";
  QuestionFormat2["LongDate"] = "longDate";
  QuestionFormat2["ShortDate"] = "shortDate";
  QuestionFormat2["LongTime"] = "longTime";
  QuestionFormat2["ShortTime"] = "shortTime";
  QuestionFormat2["GeneralNumber"] = "generalNumber";
  QuestionFormat2["Standard"] = "standard";
  QuestionFormat2["Fixed"] = "fixed";
  QuestionFormat2["Percent"] = "percent";
  QuestionFormat2["Currency"] = "currency";
  return QuestionFormat2;
})(QuestionFormat || {});
const QuestionFormatArray = [
  "generalDate" /* GeneralDate */,
  "longDate" /* LongDate */,
  "shortDate" /* ShortDate */,
  "longTime" /* LongTime */,
  "shortTime" /* ShortTime */,
  "generalNumber" /* GeneralNumber */,
  "standard" /* Standard */,
  "fixed" /* Fixed */,
  "percent" /* Percent */,
  "currency" /* Currency */
];
var SurveyPosition = /* @__PURE__ */ ((SurveyPosition2) => {
  SurveyPosition2["Absolute"] = "absolute";
  SurveyPosition2["Fixed"] = "fixed";
  SurveyPosition2["Relative"] = "relative";
  SurveyPosition2["Static"] = "static";
  SurveyPosition2["Inherit"] = "inherit";
  return SurveyPosition2;
})(SurveyPosition || {});
const SurveyPositionArray = [
  "absolute" /* Absolute */,
  "fixed" /* Fixed */,
  "relative" /* Relative */,
  "static" /* Static */,
  "inherit" /* Inherit */
];
class PivotRow extends OxmlCompositeElement {
  static _Q = "x15:pivotRow";
  static _A = [":r", ":count"];
  /** r. Serialized as `:r` */
  get reference() {
    return this._g(":r");
  }
  set reference(v) {
    this._s(":r", v);
  }
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class TimelineState extends OxmlCompositeElement {
  static _Q = "x15:state";
  static _A = [":singleRangeFilterState", ":minimalRefreshVersion", ":lastRefreshVersion", ":pivotCacheId", ":filterType", ":filterId", ":filterTabId", ":filterPivotName"];
  /** singleRangeFilterState. Serialized as `:singleRangeFilterState` */
  get singleRangeFilterState() {
    return this._g(":singleRangeFilterState");
  }
  set singleRangeFilterState(v) {
    this._s(":singleRangeFilterState", v);
  }
  /** minimalRefreshVersion. Serialized as `:minimalRefreshVersion` */
  get minimalRefreshVersion() {
    return this._g(":minimalRefreshVersion");
  }
  set minimalRefreshVersion(v) {
    this._s(":minimalRefreshVersion", v);
  }
  /** lastRefreshVersion. Serialized as `:lastRefreshVersion` */
  get lastRefreshVersion() {
    return this._g(":lastRefreshVersion");
  }
  set lastRefreshVersion(v) {
    this._s(":lastRefreshVersion", v);
  }
  /** pivotCacheId. Serialized as `:pivotCacheId` */
  get pivotCacheId() {
    return this._g(":pivotCacheId");
  }
  set pivotCacheId(v) {
    this._s(":pivotCacheId", v);
  }
  /** filterType. Serialized as `:filterType` */
  get filterType() {
    return this._g(":filterType");
  }
  set filterType(v) {
    this._s(":filterType", v);
  }
  /** filterId. Serialized as `:filterId` */
  get filterId() {
    return this._g(":filterId");
  }
  set filterId(v) {
    this._s(":filterId", v);
  }
  /** filterTabId. Serialized as `:filterTabId` */
  get filterTabId() {
    return this._g(":filterTabId");
  }
  set filterTabId(v) {
    this._s(":filterTabId", v);
  }
  /** filterPivotName. Serialized as `:filterPivotName` */
  get filterPivotName() {
    return this._g(":filterPivotName");
  }
  set filterPivotName(v) {
    this._s(":filterPivotName", v);
  }
  /** Returns SelectionTimelineRange. */
  get selectionTimelineRange() {
    return this._f(SelectionTimelineRange);
  }
  /** Returns BoundsTimelineRange. */
  get boundsTimelineRange() {
    return this._f(BoundsTimelineRange);
  }
  /** Returns MovingPeriodState. */
  get movingPeriodState() {
    return this._f(MovingPeriodState);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TimelineCachePivotTables extends OxmlCompositeElement {
  static _Q = "x15:pivotTables";
}
class AutoFilter extends OxmlCompositeElement {
  static _Q = "x15:autoFilter";
  static _A = [":ref"];
  /** Cell or Range Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class TimelineRange extends OxmlLeafElement {
  static _A = [":startDate", ":endDate"];
  /** startDate. Serialized as `:startDate` */
  get startDate() {
    return this._g(":startDate");
  }
  set startDate(v) {
    this._s(":startDate", v);
  }
  /** endDate. Serialized as `:endDate` */
  get endDate() {
    return this._g(":endDate");
  }
  set endDate(v) {
    this._s(":endDate", v);
  }
}
class BoundsTimelineRange extends TimelineRange {
  static _Q = "x15:bounds";
}
class SelectionTimelineRange extends TimelineRange {
  static _Q = "x15:selection";
}
class TimelineCachePivotTable extends OxmlLeafElement {
  static _Q = "x15:pivotTable";
  static _A = [":tabId", ":name"];
  /** tabId. Serialized as `:tabId` */
  get tabId() {
    return this._g(":tabId");
  }
  set tabId(v) {
    this._s(":tabId", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class Timeline extends OxmlCompositeElement {
  static _Q = "x15:timeline";
  static _A = [":name", ":cache", ":caption", ":showHeader", ":showSelectionLabel", ":showTimeLevel", ":showHorizontalScrollbar", ":level", ":selectionLevel", ":scrollPosition", ":style"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** cache. Serialized as `:cache` */
  get cache() {
    return this._g(":cache");
  }
  set cache(v) {
    this._s(":cache", v);
  }
  /** caption. Serialized as `:caption` */
  get caption() {
    return this._g(":caption");
  }
  set caption(v) {
    this._s(":caption", v);
  }
  /** showHeader. Serialized as `:showHeader` */
  get showHeader() {
    return this._g(":showHeader");
  }
  set showHeader(v) {
    this._s(":showHeader", v);
  }
  /** showSelectionLabel. Serialized as `:showSelectionLabel` */
  get showSelectionLabel() {
    return this._g(":showSelectionLabel");
  }
  set showSelectionLabel(v) {
    this._s(":showSelectionLabel", v);
  }
  /** showTimeLevel. Serialized as `:showTimeLevel` */
  get showTimeLevel() {
    return this._g(":showTimeLevel");
  }
  set showTimeLevel(v) {
    this._s(":showTimeLevel", v);
  }
  /** showHorizontalScrollbar. Serialized as `:showHorizontalScrollbar` */
  get showHorizontalScrollbar() {
    return this._g(":showHorizontalScrollbar");
  }
  set showHorizontalScrollbar(v) {
    this._s(":showHorizontalScrollbar", v);
  }
  /** level. Serialized as `:level` */
  get level() {
    return this._g(":level");
  }
  set level(v) {
    this._s(":level", v);
  }
  /** selectionLevel. Serialized as `:selectionLevel` */
  get selectionLevel() {
    return this._g(":selectionLevel");
  }
  set selectionLevel(v) {
    this._s(":selectionLevel", v);
  }
  /** scrollPosition. Serialized as `:scrollPosition` */
  get scrollPosition() {
    return this._g(":scrollPosition");
  }
  set scrollPosition(v) {
    this._s(":scrollPosition", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SurveyQuestion extends OxmlCompositeElement {
  static _Q = "x15:question";
  static _A = [":binding", ":text", ":type", ":format", ":helpText", ":required", ":defaultValue", ":decimalPlaces", ":rowSource"];
  /** binding. Serialized as `:binding` */
  get binding() {
    return this._g(":binding");
  }
  set binding(v) {
    this._s(":binding", v);
  }
  /** text. Serialized as `:text` */
  get text() {
    return this._g(":text");
  }
  set text(v) {
    this._s(":text", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** format. Serialized as `:format` */
  get format() {
    return this._g(":format");
  }
  set format(v) {
    this._s(":format", v);
  }
  /** helpText. Serialized as `:helpText` */
  get helpText() {
    return this._g(":helpText");
  }
  set helpText(v) {
    this._s(":helpText", v);
  }
  /** required. Serialized as `:required` */
  get required() {
    return this._g(":required");
  }
  set required(v) {
    this._s(":required", v);
  }
  /** defaultValue. Serialized as `:defaultValue` */
  get defaultValue() {
    return this._g(":defaultValue");
  }
  set defaultValue(v) {
    this._s(":defaultValue", v);
  }
  /** decimalPlaces. Serialized as `:decimalPlaces` */
  get decimalPlaces() {
    return this._g(":decimalPlaces");
  }
  set decimalPlaces(v) {
    this._s(":decimalPlaces", v);
  }
  /** rowSource. Serialized as `:rowSource` */
  get rowSource() {
    return this._g(":rowSource");
  }
  set rowSource(v) {
    this._s(":rowSource", v);
  }
  /** Returns QuestionPrSurveyElementPr. */
  get questionPrSurveyElementPr() {
    return this._f(QuestionPrSurveyElementPr);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SurveyQuestions extends OxmlCompositeElement {
  static _Q = "x15:questions";
  /** Returns QuestionsPrSurveyElementPr. */
  get questionsPrSurveyElementPr() {
    return this._f(QuestionsPrSurveyElementPr);
  }
}
class OpenXmlSurveyElementPrElement extends OxmlCompositeElement {
  static _A = [":cssClass", ":bottom", ":top", ":left", ":right", ":width", ":height", ":position"];
  /** cssClass. Serialized as `:cssClass` */
  get cssClass() {
    return this._g(":cssClass");
  }
  set cssClass(v) {
    this._s(":cssClass", v);
  }
  /** bottom. Serialized as `:bottom` */
  get bottom() {
    return this._g(":bottom");
  }
  set bottom(v) {
    this._s(":bottom", v);
  }
  /** top. Serialized as `:top` */
  get top() {
    return this._g(":top");
  }
  set top(v) {
    this._s(":top", v);
  }
  /** left. Serialized as `:left` */
  get left() {
    return this._g(":left");
  }
  set left(v) {
    this._s(":left", v);
  }
  /** right. Serialized as `:right` */
  get right() {
    return this._g(":right");
  }
  set right(v) {
    this._s(":right", v);
  }
  /** width. Serialized as `:width` */
  get width() {
    return this._g(":width");
  }
  set width(v) {
    this._s(":width", v);
  }
  /** height. Serialized as `:height` */
  get height() {
    return this._g(":height");
  }
  set height(v) {
    this._s(":height", v);
  }
  /** position. Serialized as `:position` */
  get position() {
    return this._g(":position");
  }
  set position(v) {
    this._s(":position", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class QuestionPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
  static _Q = "x15:questionPr";
}
class QuestionsPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
  static _Q = "x15:questionsPr";
}
class DescriptionPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
  static _Q = "x15:descriptionPr";
}
class TitlePrSurveyElementPr extends OpenXmlSurveyElementPrElement {
  static _Q = "x15:titlePr";
}
class SurveyPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
  static _Q = "x15:surveyPr";
}
class SlicerCacheOlapLevelName extends OxmlLeafElement {
  static _Q = "x15:slicerCacheOlapLevelName";
  static _A = [":uniqueName", ":count"];
  /** uniqueName. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ServerFormat extends OxmlLeafElement {
  static _Q = "x15:serverFormat";
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
class PivotTableServerFormats extends OxmlCompositeElement {
  static _Q = "x15:pivotTableServerFormats";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotValueCellExtra extends OxmlLeafElement {
  static _Q = "x15:x";
  static _A = [":in", ":bc", ":fc", ":i", ":un", ":st", ":b"];
  /** in. Serialized as `:in` */
  get formatIndex() {
    return this._g(":in");
  }
  set formatIndex(v) {
    this._s(":in", v);
  }
  /** bc. Serialized as `:bc` */
  get backgroundColor() {
    return this._g(":bc");
  }
  set backgroundColor(v) {
    this._s(":bc", v);
  }
  /** fc. Serialized as `:fc` */
  get foregroundColor() {
    return this._g(":fc");
  }
  set foregroundColor(v) {
    this._s(":fc", v);
  }
  /** i. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** un. Serialized as `:un` */
  get underline() {
    return this._g(":un");
  }
  set underline(v) {
    this._s(":un", v);
  }
  /** st. Serialized as `:st` */
  get strikethrough() {
    return this._g(":st");
  }
  set strikethrough(v) {
    this._s(":st", v);
  }
  /** b. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
}
class Xstring extends OxmlLeafTextElement {
  static _Q = "x15:v";
}
class PivotValueCell extends OxmlCompositeElement {
  static _Q = "x15:c";
  static _A = [":i", ":t"];
  /** i. Serialized as `:i` */
  get item() {
    return this._g(":i");
  }
  set item(v) {
    this._s(":i", v);
  }
  /** t. Serialized as `:t` */
  get text() {
    return this._g(":t");
  }
  set text(v) {
    this._s(":t", v);
  }
  /** Returns Xstring. */
  get xstring() {
    return this._f(Xstring);
  }
  /** Returns PivotValueCellExtra. */
  get pivotValueCellExtra() {
    return this._f(PivotValueCellExtra);
  }
}
class ModelRelationships extends OxmlCompositeElement {
  static _Q = "x15:modelRelationships";
}
class ModelTables extends OxmlCompositeElement {
  static _Q = "x15:modelTables";
}
class ModelRelationship extends OxmlLeafElement {
  static _Q = "x15:modelRelationship";
  static _A = [":fromTable", ":fromColumn", ":toTable", ":toColumn"];
  /** fromTable. Serialized as `:fromTable` */
  get fromTable() {
    return this._g(":fromTable");
  }
  set fromTable(v) {
    this._s(":fromTable", v);
  }
  /** fromColumn. Serialized as `:fromColumn` */
  get fromColumn() {
    return this._g(":fromColumn");
  }
  set fromColumn(v) {
    this._s(":fromColumn", v);
  }
  /** toTable. Serialized as `:toTable` */
  get toTable() {
    return this._g(":toTable");
  }
  set toTable(v) {
    this._s(":toTable", v);
  }
  /** toColumn. Serialized as `:toColumn` */
  get toColumn() {
    return this._g(":toColumn");
  }
  set toColumn(v) {
    this._s(":toColumn", v);
  }
}
class ModelTable extends OxmlLeafElement {
  static _Q = "x15:modelTable";
  static _A = [":id", ":name", ":connection"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** connection. Serialized as `:connection` */
  get connection() {
    return this._g(":connection");
  }
  set connection(v) {
    this._s(":connection", v);
  }
}
class CachedUniqueName extends OxmlLeafElement {
  static _Q = "x15:cachedUniqueName";
  static _A = [":index", ":name"];
  /** index. Serialized as `:index` */
  get index() {
    return this._g(":index");
  }
  set index(v) {
    this._s(":index", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "x15:extLst";
}
class FieldListActiveTabTopLevelEntity extends OxmlLeafElement {
  static _Q = "x15:activeTabTopLevelEntity";
  static _A = [":name", ":type"];
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
}
class DataFeedProperties extends OxmlCompositeElement {
  static _Q = "x15:dataFeedPr";
  static _A = [":connection"];
  /** connection. Serialized as `:connection` */
  get connection() {
    return this._g(":connection");
  }
  set connection(v) {
    this._s(":connection", v);
  }
  /** Returns DbTables. */
  get dbTables() {
    return this._f(DbTables);
  }
}
class OleDbPrpoperties extends OxmlCompositeElement {
  static _Q = "x15:oledbPr";
  static _A = [":connection"];
  /** connection. Serialized as `:connection` */
  get connection() {
    return this._g(":connection");
  }
  set connection(v) {
    this._s(":connection", v);
  }
  /** Returns DbTables. */
  get dbTables() {
    return this._f(DbTables);
  }
  /** Returns DbCommand. */
  get dbCommand() {
    return this._f(DbCommand);
  }
}
class RangeProperties extends OxmlLeafElement {
  static _Q = "x15:rangePr";
  static _A = [":sourceName"];
  /** sourceName. Serialized as `:sourceName` */
  get sourceName() {
    return this._g(":sourceName");
  }
  set sourceName(v) {
    this._s(":sourceName", v);
  }
}
class ModelTextProperties extends OxmlLeafElement {
  static _Q = "x15:modelTextPr";
  static _A = [":headers"];
  /** headers. Serialized as `:headers` */
  get headers() {
    return this._g(":headers");
  }
  set headers(v) {
    this._s(":headers", v);
  }
}
class TextProperties extends OxmlCompositeElement {
  static _Q = "x15:textPr";
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
  /** Returns XTextFields. */
  get textFields() {
    return this._f(XTextFields);
  }
}
class DbCommand extends OxmlLeafElement {
  static _Q = "x15:dbCommand";
  static _A = [":text"];
  /** text. Serialized as `:text` */
  get text() {
    return this._g(":text");
  }
  set text(v) {
    this._s(":text", v);
  }
}
class DbTables extends OxmlCompositeElement {
  static _Q = "x15:dbTables";
}
class DbTable extends OxmlLeafElement {
  static _Q = "x15:dbTable";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class TimelineStyleElements extends OxmlCompositeElement {
  static _Q = "x15:timelineStyleElements";
}
class TimelineStyleElement extends OxmlLeafElement {
  static _Q = "x15:timelineStyleElement";
  static _A = [":type", ":dxfId"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** dxfId. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
}
class TimelineStyle extends OxmlCompositeElement {
  static _Q = "x15:timelineStyle";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Returns TimelineStyleElements. */
  get timelineStyleElements() {
    return this._f(TimelineStyleElements);
  }
}
class TimelineReference extends OxmlLeafElement {
  static _Q = "x15:timelineRef";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class TimelineCacheReference extends OxmlLeafElement {
  static _Q = "x15:timelineCacheRef";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class WebExtension extends OxmlCompositeElement {
  static _Q = "x15:webExtension";
  static _A = [":appRef"];
  /** appRef. Serialized as `:appRef` */
  get applicationReference() {
    return this._g(":appRef");
  }
  set applicationReference(v) {
    this._s(":appRef", v);
  }
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
}
class PivotTableReference extends OxmlLeafElement {
  static _Q = "x15:pivotTableReference";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class TimelineCacheDefinition extends OxmlPartRootElement {
  static _Q = "x15:timelineCacheDefinition";
  static _A = [":name", ":sourceName"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** sourceName. Serialized as `:sourceName` */
  get sourceName() {
    return this._g(":sourceName");
  }
  set sourceName(v) {
    this._s(":sourceName", v);
  }
  /** Returns TimelineCachePivotTables. */
  get timelineCachePivotTables() {
    return this._f(TimelineCachePivotTables);
  }
  /** Returns TimelineState. */
  get timelineState() {
    return this._f(TimelineState);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Timelines extends OxmlPartRootElement {
  static _Q = "x15:timelines";
}
class Survey extends OxmlCompositeElement {
  static _Q = "x15:survey";
  static _A = [":id", ":guid", ":title", ":description"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** guid. Serialized as `:guid` */
  get guid() {
    return this._g(":guid");
  }
  set guid(v) {
    this._s(":guid", v);
  }
  /** title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** Returns SurveyPrSurveyElementPr. */
  get surveyPrSurveyElementPr() {
    return this._f(SurveyPrSurveyElementPr);
  }
  /** Returns TitlePrSurveyElementPr. */
  get titlePrSurveyElementPr() {
    return this._f(TitlePrSurveyElementPr);
  }
  /** Returns DescriptionPrSurveyElementPr. */
  get descriptionPrSurveyElementPr() {
    return this._f(DescriptionPrSurveyElementPr);
  }
  /** Returns SurveyQuestions. */
  get surveyQuestions() {
    return this._f(SurveyQuestions);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlicerCachePivotTables extends OxmlCompositeElement {
  static _Q = "x15:slicerCachePivotTables";
}
class SlicerCacheHideItemsWithNoData extends OxmlCompositeElement {
  static _Q = "x15:slicerCacheHideItemsWithNoData";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class TableSlicerCache extends OxmlCompositeElement {
  static _Q = "x15:tableSlicerCache";
  static _A = [":tableId", ":column", ":sortOrder", ":customListSort", ":crossFilter"];
  /** tableId. Serialized as `:tableId` */
  get tableId() {
    return this._g(":tableId");
  }
  set tableId(v) {
    this._s(":tableId", v);
  }
  /** column. Serialized as `:column` */
  get column() {
    return this._g(":column");
  }
  set column(v) {
    this._s(":column", v);
  }
  /** sortOrder. Serialized as `:sortOrder` */
  get sortOrder() {
    return this._g(":sortOrder");
  }
  set sortOrder(v) {
    this._s(":sortOrder", v);
  }
  /** customListSort. Serialized as `:customListSort` */
  get customListSort() {
    return this._g(":customListSort");
  }
  set customListSort(v) {
    this._s(":customListSort", v);
  }
  /** crossFilter. Serialized as `:crossFilter` */
  get crossFilter() {
    return this._g(":crossFilter");
  }
  set crossFilter(v) {
    this._s(":crossFilter", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlicerCaches extends OxmlCompositeElement {
  static _Q = "x15:slicerCaches";
}
class MovingPeriodState extends OxmlLeafElement {
  static _Q = "x15:movingPeriodState";
  static _A = [":referenceDateBegin", ":referencePeriod", ":referenceMultiple", ":movingPeriod", ":movingMultiple"];
  /** referenceDateBegin. Serialized as `:referenceDateBegin` */
  get referenceDateBegin() {
    return this._g(":referenceDateBegin");
  }
  set referenceDateBegin(v) {
    this._s(":referenceDateBegin", v);
  }
  /** referencePeriod. Serialized as `:referencePeriod` */
  get referencePeriod() {
    return this._g(":referencePeriod");
  }
  set referencePeriod(v) {
    this._s(":referencePeriod", v);
  }
  /** referenceMultiple. Serialized as `:referenceMultiple` */
  get referenceMultiple() {
    return this._g(":referenceMultiple");
  }
  set referenceMultiple(v) {
    this._s(":referenceMultiple", v);
  }
  /** movingPeriod. Serialized as `:movingPeriod` */
  get movingPeriod() {
    return this._g(":movingPeriod");
  }
  set movingPeriod(v) {
    this._s(":movingPeriod", v);
  }
  /** movingMultiple. Serialized as `:movingMultiple` */
  get movingMultiple() {
    return this._g(":movingMultiple");
  }
  set movingMultiple(v) {
    this._s(":movingMultiple", v);
  }
}
class DataField extends OxmlLeafElement {
  static _Q = "x15:dataField";
  static _A = [":isCountDistinct"];
  /** isCountDistinct. Serialized as `:isCountDistinct` */
  get isCountDistinct() {
    return this._g(":isCountDistinct");
  }
  set isCountDistinct(v) {
    this._s(":isCountDistinct", v);
  }
}
class PivotCacheDecoupled extends OxmlLeafElement {
  static _Q = "x15:pivotCacheDecoupled";
  static _A = [":decoupled"];
  /** decoupled. Serialized as `:decoupled` */
  get decoupled() {
    return this._g(":decoupled");
  }
  set decoupled(v) {
    this._s(":decoupled", v);
  }
}
class PivotTableData extends OxmlCompositeElement {
  static _Q = "x15:pivotTableData";
  static _A = [":rowCount", ":columnCount", ":cacheId"];
  /** rowCount. Serialized as `:rowCount` */
  get rowCount() {
    return this._g(":rowCount");
  }
  set rowCount(v) {
    this._s(":rowCount", v);
  }
  /** columnCount. Serialized as `:columnCount` */
  get columnCount() {
    return this._g(":columnCount");
  }
  set columnCount(v) {
    this._s(":columnCount", v);
  }
  /** cacheId. Serialized as `:cacheId` */
  get cacheId() {
    return this._g(":cacheId");
  }
  set cacheId(v) {
    this._s(":cacheId", v);
  }
}
class DataModel extends OxmlCompositeElement {
  static _Q = "x15:dataModel";
  static _A = [":minVersionLoad"];
  /** minVersionLoad. Serialized as `:minVersionLoad` */
  get minVersionLoad() {
    return this._g(":minVersionLoad");
  }
  set minVersionLoad(v) {
    this._s(":minVersionLoad", v);
  }
  /** Returns ModelTables. */
  get modelTables() {
    return this._f(ModelTables);
  }
  /** Returns ModelRelationships. */
  get modelRelationships() {
    return this._f(ModelRelationships);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PivotCacheIdVersion extends OxmlLeafElement {
  static _Q = "x15:pivotCacheIdVersion";
  static _A = [":cacheIdSupportedVersion", ":cacheIdCreatedVersion"];
  /** cacheIdSupportedVersion. Serialized as `:cacheIdSupportedVersion` */
  get cacheIdSupportedVersion() {
    return this._g(":cacheIdSupportedVersion");
  }
  set cacheIdSupportedVersion(v) {
    this._s(":cacheIdSupportedVersion", v);
  }
  /** cacheIdCreatedVersion. Serialized as `:cacheIdCreatedVersion` */
  get cacheIdCreatedVersion() {
    return this._g(":cacheIdCreatedVersion");
  }
  set cacheIdCreatedVersion(v) {
    this._s(":cacheIdCreatedVersion", v);
  }
}
class TimelinePivotCacheDefinition extends OxmlLeafElement {
  static _Q = "x15:timelinePivotCacheDefinition";
  static _A = [":timelineData"];
  /** timelineData. Serialized as `:timelineData` */
  get timelineData() {
    return this._g(":timelineData");
  }
  set timelineData(v) {
    this._s(":timelineData", v);
  }
}
class CacheHierarchy extends OxmlLeafElement {
  static _Q = "x15:cacheHierarchy";
  static _A = [":aggregatedColumn"];
  /** aggregatedColumn. Serialized as `:aggregatedColumn` */
  get aggregatedColumn() {
    return this._g(":aggregatedColumn");
  }
  set aggregatedColumn(v) {
    this._s(":aggregatedColumn", v);
  }
}
class CachedUniqueNames extends OxmlCompositeElement {
  static _Q = "x15:cachedUniqueNames";
}
class PivotFilter extends OxmlLeafElement {
  static _Q = "x15:pivotFilter";
  static _A = [":useWholeDay"];
  /** useWholeDay. Serialized as `:useWholeDay` */
  get useWholeDay() {
    return this._g(":useWholeDay");
  }
  set useWholeDay(v) {
    this._s(":useWholeDay", v);
  }
}
class PivotTableUISettings extends OxmlCompositeElement {
  static _Q = "x15:pivotTableUISettings";
  static _A = [":sourceDataName", ":relNeededHidden"];
  /** sourceDataName. Serialized as `:sourceDataName` */
  get sourceDataName() {
    return this._g(":sourceDataName");
  }
  set sourceDataName(v) {
    this._s(":sourceDataName", v);
  }
  /** relNeededHidden. Serialized as `:relNeededHidden` */
  get relNeededHidden() {
    return this._g(":relNeededHidden");
  }
  set relNeededHidden(v) {
    this._s(":relNeededHidden", v);
  }
}
class CalculatedMember extends OxmlLeafElement {
  static _Q = "x15:calculatedMember";
  static _A = [":measureGroup", ":numberFormat", ":measure"];
  /** measureGroup. Serialized as `:measureGroup` */
  get measureGroup() {
    return this._g(":measureGroup");
  }
  set measureGroup(v) {
    this._s(":measureGroup", v);
  }
  /** numberFormat. Serialized as `:numberFormat` */
  get numberFormat() {
    return this._g(":numberFormat");
  }
  set numberFormat(v) {
    this._s(":numberFormat", v);
  }
  /** measure. Serialized as `:measure` */
  get measure() {
    return this._g(":measure");
  }
  set measure(v) {
    this._s(":measure", v);
  }
}
class Connection extends OxmlCompositeElement {
  static _Q = "x15:connection";
  static _A = [":id", ":model", ":excludeFromRefreshAll", ":autoDelete", ":usedByAddin"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** model. Serialized as `:model` */
  get model() {
    return this._g(":model");
  }
  set model(v) {
    this._s(":model", v);
  }
  /** excludeFromRefreshAll. Serialized as `:excludeFromRefreshAll` */
  get excludeFromRefreshAll() {
    return this._g(":excludeFromRefreshAll");
  }
  set excludeFromRefreshAll(v) {
    this._s(":excludeFromRefreshAll", v);
  }
  /** autoDelete. Serialized as `:autoDelete` */
  get autoDelete() {
    return this._g(":autoDelete");
  }
  set autoDelete(v) {
    this._s(":autoDelete", v);
  }
  /** usedByAddin. Serialized as `:usedByAddin` */
  get usedByAddin() {
    return this._g(":usedByAddin");
  }
  set usedByAddin(v) {
    this._s(":usedByAddin", v);
  }
  /** Returns TextProperties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Returns ModelTextProperties. */
  get modelTextProperties() {
    return this._f(ModelTextProperties);
  }
  /** Returns RangeProperties. */
  get rangeProperties() {
    return this._f(RangeProperties);
  }
  /** Returns OleDbPrpoperties. */
  get oleDbPrpoperties() {
    return this._f(OleDbPrpoperties);
  }
  /** Returns DataFeedProperties. */
  get dataFeedProperties() {
    return this._f(DataFeedProperties);
  }
}
class DifferentialFormats extends OxmlCompositeElement {
  static _Q = "x15:dxfs";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class TimelineStyles extends OxmlCompositeElement {
  static _Q = "x15:timelineStyles";
  static _A = [":defaultTimelineStyle"];
  /** defaultTimelineStyle. Serialized as `:defaultTimelineStyle` */
  get defaultTimelineStyle() {
    return this._g(":defaultTimelineStyle");
  }
  set defaultTimelineStyle(v) {
    this._s(":defaultTimelineStyle", v);
  }
}
class WorkbookProperties extends OxmlLeafElement {
  static _Q = "x15:workbookPr";
  static _A = [":chartTrackingRefBase"];
  /** chartTrackingRefBase. Serialized as `:chartTrackingRefBase` */
  get chartTrackingReferenceBase() {
    return this._g(":chartTrackingRefBase");
  }
  set chartTrackingReferenceBase(v) {
    this._s(":chartTrackingRefBase", v);
  }
}
class TimelineReferences extends OxmlCompositeElement {
  static _Q = "x15:timelineRefs";
}
class TimelineCacheReferences extends OxmlCompositeElement {
  static _Q = "x15:timelineCacheRefs";
}
class WebExtensions extends OxmlCompositeElement {
  static _Q = "x15:webExtensions";
}
class QueryTable extends OxmlLeafElement {
  static _Q = "x15:queryTable";
  static _A = [":clipped", ":sourceDataName", ":drillThrough"];
  /** clipped. Serialized as `:clipped` */
  get clipped() {
    return this._g(":clipped");
  }
  set clipped(v) {
    this._s(":clipped", v);
  }
  /** sourceDataName. Serialized as `:sourceDataName` */
  get sourceDataName() {
    return this._g(":sourceDataName");
  }
  set sourceDataName(v) {
    this._s(":sourceDataName", v);
  }
  /** drillThrough. Serialized as `:drillThrough` */
  get drillThrough() {
    return this._g(":drillThrough");
  }
  set drillThrough(v) {
    this._s(":drillThrough", v);
  }
}
class PivotTableReferences extends OxmlCompositeElement {
  static _Q = "x15:pivotTableReferences";
}
class OpenXmlPivotCachesElement extends OxmlCompositeElement {
}
class TimelineCachePivotCaches extends OpenXmlPivotCachesElement {
  static _Q = "x15:timelineCachePivotCaches";
}
class PivotCaches extends OpenXmlPivotCachesElement {
  static _Q = "x15:pivotCaches";
}
function initOffice2013ExcelNamespace() {
  PivotRow._C = {
    "x15:c": PivotValueCell
  };
  PivotRow._D = {
    ":r": new OxmlAttr(":r", OxmlType.UInt32Value),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  TimelineState._C = {
    "x15:selection": SelectionTimelineRange,
    "x15:bounds": BoundsTimelineRange,
    "x15:movingPeriodState": MovingPeriodState,
    "x15:extLst": ExtensionList
  };
  TimelineState._D = {
    ":singleRangeFilterState": new OxmlAttr(":singleRangeFilterState", OxmlType.BooleanValue),
    ":minimalRefreshVersion": new OxmlAttr(":minimalRefreshVersion", OxmlType.UInt32Value),
    ":lastRefreshVersion": new OxmlAttr(":lastRefreshVersion", OxmlType.UInt32Value),
    ":pivotCacheId": new OxmlAttr(":pivotCacheId", OxmlType.UInt32Value),
    ":filterType": new OxmlAttr(":filterType", OxmlType.EnumValue, PivotFilterValuesArray),
    ":filterId": new OxmlAttr(":filterId", OxmlType.UInt32Value),
    ":filterTabId": new OxmlAttr(":filterTabId", OxmlType.UInt32Value),
    ":filterPivotName": new OxmlAttr(":filterPivotName", OxmlType.StringValue)
  };
  TimelineCachePivotTables._C = {
    "x15:pivotTable": TimelineCachePivotTable
  };
  AutoFilter._C = {
    "x:filterColumn": XFilterColumn,
    "x:sortState": XSortState,
    "x:extLst": XExtensionList
  };
  AutoFilter._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  TimelineRange._D = {
    ":startDate": new OxmlAttr(":startDate", OxmlType.DateTimeValue),
    ":endDate": new OxmlAttr(":endDate", OxmlType.DateTimeValue)
  };
  TimelineCachePivotTable._D = {
    ":tabId": new OxmlAttr(":tabId", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  Timeline._C = {
    "x15:extLst": ExtensionList
  };
  Timeline._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":cache": new OxmlAttr(":cache", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":showHeader": new OxmlAttr(":showHeader", OxmlType.BooleanValue),
    ":showSelectionLabel": new OxmlAttr(":showSelectionLabel", OxmlType.BooleanValue),
    ":showTimeLevel": new OxmlAttr(":showTimeLevel", OxmlType.BooleanValue),
    ":showHorizontalScrollbar": new OxmlAttr(":showHorizontalScrollbar", OxmlType.BooleanValue),
    ":level": new OxmlAttr(":level", OxmlType.UInt32Value),
    ":selectionLevel": new OxmlAttr(":selectionLevel", OxmlType.UInt32Value),
    ":scrollPosition": new OxmlAttr(":scrollPosition", OxmlType.DateTimeValue),
    ":style": new OxmlAttr(":style", OxmlType.StringValue)
  };
  SurveyQuestion._C = {
    "x15:questionPr": QuestionPrSurveyElementPr,
    "x15:extLst": ExtensionList
  };
  SurveyQuestion._D = {
    ":binding": new OxmlAttr(":binding", OxmlType.UInt32Value),
    ":text": new OxmlAttr(":text", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, QuestionTypeArray),
    ":format": new OxmlAttr(":format", OxmlType.EnumValue, QuestionFormatArray),
    ":helpText": new OxmlAttr(":helpText", OxmlType.StringValue),
    ":required": new OxmlAttr(":required", OxmlType.BooleanValue),
    ":defaultValue": new OxmlAttr(":defaultValue", OxmlType.StringValue),
    ":decimalPlaces": new OxmlAttr(":decimalPlaces", OxmlType.UInt32Value),
    ":rowSource": new OxmlAttr(":rowSource", OxmlType.StringValue)
  };
  SurveyQuestions._C = {
    "x15:questionsPr": QuestionsPrSurveyElementPr,
    "x15:question": SurveyQuestion
  };
  OpenXmlSurveyElementPrElement._C = {
    "x15:extLst": ExtensionList
  };
  OpenXmlSurveyElementPrElement._D = {
    ":cssClass": new OxmlAttr(":cssClass", OxmlType.StringValue),
    ":bottom": new OxmlAttr(":bottom", OxmlType.Int32Value),
    ":top": new OxmlAttr(":top", OxmlType.Int32Value),
    ":left": new OxmlAttr(":left", OxmlType.Int32Value),
    ":right": new OxmlAttr(":right", OxmlType.Int32Value),
    ":width": new OxmlAttr(":width", OxmlType.UInt32Value),
    ":height": new OxmlAttr(":height", OxmlType.UInt32Value),
    ":position": new OxmlAttr(":position", OxmlType.EnumValue, SurveyPositionArray)
  };
  QuestionPrSurveyElementPr._C = {
    "x15:extLst": ExtensionList
  };
  QuestionsPrSurveyElementPr._C = {
    "x15:extLst": ExtensionList
  };
  DescriptionPrSurveyElementPr._C = {
    "x15:extLst": ExtensionList
  };
  TitlePrSurveyElementPr._C = {
    "x15:extLst": ExtensionList
  };
  SurveyPrSurveyElementPr._C = {
    "x15:extLst": ExtensionList
  };
  SlicerCacheOlapLevelName._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ServerFormat._D = {
    ":culture": new OxmlAttr(":culture", OxmlType.StringValue),
    ":format": new OxmlAttr(":format", OxmlType.StringValue)
  };
  PivotTableServerFormats._C = {
    "x15:serverFormat": ServerFormat
  };
  PivotTableServerFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotValueCellExtra._D = {
    ":in": new OxmlAttr(":in", OxmlType.UInt32Value),
    ":bc": new OxmlAttr(":bc", OxmlType.HexBinaryValue),
    ":fc": new OxmlAttr(":fc", OxmlType.HexBinaryValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":un": new OxmlAttr(":un", OxmlType.BooleanValue),
    ":st": new OxmlAttr(":st", OxmlType.BooleanValue),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue)
  };
  PivotValueCell._C = {
    "x15:v": Xstring,
    "x15:x": PivotValueCellExtra
  };
  PivotValueCell._D = {
    ":i": new OxmlAttr(":i", OxmlType.UInt32Value),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, SXVCellTypeArray)
  };
  ModelRelationships._C = {
    "x15:modelRelationship": ModelRelationship
  };
  ModelTables._C = {
    "x15:modelTable": ModelTable
  };
  ModelRelationship._D = {
    ":fromTable": new OxmlAttr(":fromTable", OxmlType.StringValue),
    ":fromColumn": new OxmlAttr(":fromColumn", OxmlType.StringValue),
    ":toTable": new OxmlAttr(":toTable", OxmlType.StringValue),
    ":toColumn": new OxmlAttr(":toColumn", OxmlType.StringValue)
  };
  ModelTable._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":connection": new OxmlAttr(":connection", OxmlType.StringValue)
  };
  CachedUniqueName._D = {
    ":index": new OxmlAttr(":index", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  FieldListActiveTabTopLevelEntity._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.UInt32Value)
  };
  DataFeedProperties._C = {
    "x15:dbTables": DbTables
  };
  DataFeedProperties._D = {
    ":connection": new OxmlAttr(":connection", OxmlType.StringValue)
  };
  OleDbPrpoperties._C = {
    "x15:dbTables": DbTables,
    "x15:dbCommand": DbCommand
  };
  OleDbPrpoperties._D = {
    ":connection": new OxmlAttr(":connection", OxmlType.StringValue)
  };
  RangeProperties._D = {
    ":sourceName": new OxmlAttr(":sourceName", OxmlType.StringValue)
  };
  ModelTextProperties._D = {
    ":headers": new OxmlAttr(":headers", OxmlType.BooleanValue)
  };
  TextProperties._C = {
    "x:textFields": XTextFields
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
  DbCommand._D = {
    ":text": new OxmlAttr(":text", OxmlType.StringValue)
  };
  DbTables._C = {
    "x15:dbTable": DbTable
  };
  DbTable._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  TimelineStyleElements._C = {
    "x15:timelineStyleElement": TimelineStyleElement
  };
  TimelineStyleElement._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, TimelineStyleTypeArray),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value)
  };
  TimelineStyle._C = {
    "x15:timelineStyleElements": TimelineStyleElements
  };
  TimelineStyle._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  TimelineReference._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  TimelineCacheReference._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  WebExtension._C = {
    "xne:f": XneFormula
  };
  WebExtension._D = {
    ":appRef": new OxmlAttr(":appRef", OxmlType.StringValue)
  };
  PivotTableReference._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  TimelineCacheDefinition._C = {
    "x15:pivotTables": TimelineCachePivotTables,
    "x15:state": TimelineState,
    "x15:extLst": ExtensionList
  };
  TimelineCacheDefinition._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sourceName": new OxmlAttr(":sourceName", OxmlType.StringValue)
  };
  Timelines._C = {
    "x15:timeline": Timeline
  };
  Survey._C = {
    "x15:surveyPr": SurveyPrSurveyElementPr,
    "x15:titlePr": TitlePrSurveyElementPr,
    "x15:descriptionPr": DescriptionPrSurveyElementPr,
    "x15:questions": SurveyQuestions,
    "x15:extLst": ExtensionList
  };
  Survey._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":guid": new OxmlAttr(":guid", OxmlType.StringValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue)
  };
  SlicerCachePivotTables._C = {
    "x14:pivotTable": X14SlicerCachePivotTable
  };
  SlicerCacheHideItemsWithNoData._C = {
    "x15:slicerCacheOlapLevelName": SlicerCacheOlapLevelName
  };
  SlicerCacheHideItemsWithNoData._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  TableSlicerCache._C = {
    "x15:extLst": ExtensionList
  };
  TableSlicerCache._D = {
    ":tableId": new OxmlAttr(":tableId", OxmlType.UInt32Value),
    ":column": new OxmlAttr(":column", OxmlType.UInt32Value),
    ":sortOrder": new OxmlAttr(":sortOrder", OxmlType.EnumValue, TabularSlicerCacheSortOrderValuesArray),
    ":customListSort": new OxmlAttr(":customListSort", OxmlType.BooleanValue),
    ":crossFilter": new OxmlAttr(":crossFilter", OxmlType.EnumValue, SlicerCacheCrossFilterValuesArray)
  };
  SlicerCaches._C = {
    "x14:slicerCache": X14SlicerCache
  };
  MovingPeriodState._D = {
    ":referenceDateBegin": new OxmlAttr(":referenceDateBegin", OxmlType.DateTimeValue),
    ":referencePeriod": new OxmlAttr(":referencePeriod", OxmlType.EnumValue, MovingPeriodStepArray),
    ":referenceMultiple": new OxmlAttr(":referenceMultiple", OxmlType.UInt32Value),
    ":movingPeriod": new OxmlAttr(":movingPeriod", OxmlType.EnumValue, MovingPeriodStepArray),
    ":movingMultiple": new OxmlAttr(":movingMultiple", OxmlType.UInt32Value)
  };
  DataField._D = {
    ":isCountDistinct": new OxmlAttr(":isCountDistinct", OxmlType.BooleanValue)
  };
  PivotCacheDecoupled._D = {
    ":decoupled": new OxmlAttr(":decoupled", OxmlType.BooleanValue)
  };
  PivotTableData._C = {
    "x15:pivotRow": PivotRow
  };
  PivotTableData._D = {
    ":rowCount": new OxmlAttr(":rowCount", OxmlType.UInt32Value),
    ":columnCount": new OxmlAttr(":columnCount", OxmlType.UInt32Value),
    ":cacheId": new OxmlAttr(":cacheId", OxmlType.UInt32Value)
  };
  DataModel._C = {
    "x15:modelTables": ModelTables,
    "x15:modelRelationships": ModelRelationships,
    "x15:extLst": ExtensionList
  };
  DataModel._D = {
    ":minVersionLoad": new OxmlAttr(":minVersionLoad", OxmlType.ByteValue)
  };
  PivotCacheIdVersion._D = {
    ":cacheIdSupportedVersion": new OxmlAttr(":cacheIdSupportedVersion", OxmlType.ByteValue),
    ":cacheIdCreatedVersion": new OxmlAttr(":cacheIdCreatedVersion", OxmlType.ByteValue)
  };
  TimelinePivotCacheDefinition._D = {
    ":timelineData": new OxmlAttr(":timelineData", OxmlType.BooleanValue)
  };
  CacheHierarchy._D = {
    ":aggregatedColumn": new OxmlAttr(":aggregatedColumn", OxmlType.Int32Value)
  };
  CachedUniqueNames._C = {
    "x15:cachedUniqueName": CachedUniqueName
  };
  PivotFilter._D = {
    ":useWholeDay": new OxmlAttr(":useWholeDay", OxmlType.BooleanValue)
  };
  PivotTableUISettings._C = {
    "x15:activeTabTopLevelEntity": FieldListActiveTabTopLevelEntity,
    "x15:extLst": ExtensionList
  };
  PivotTableUISettings._D = {
    ":sourceDataName": new OxmlAttr(":sourceDataName", OxmlType.StringValue),
    ":relNeededHidden": new OxmlAttr(":relNeededHidden", OxmlType.BooleanValue)
  };
  CalculatedMember._D = {
    ":measureGroup": new OxmlAttr(":measureGroup", OxmlType.StringValue),
    ":numberFormat": new OxmlAttr(":numberFormat", OxmlType.EnumValue, CalculatedMemberNumberFormatArray),
    ":measure": new OxmlAttr(":measure", OxmlType.BooleanValue)
  };
  Connection._C = {
    "x15:textPr": TextProperties,
    "x15:modelTextPr": ModelTextProperties,
    "x15:rangePr": RangeProperties,
    "x15:oledbPr": OleDbPrpoperties,
    "x15:dataFeedPr": DataFeedProperties
  };
  Connection._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":model": new OxmlAttr(":model", OxmlType.BooleanValue),
    ":excludeFromRefreshAll": new OxmlAttr(":excludeFromRefreshAll", OxmlType.BooleanValue),
    ":autoDelete": new OxmlAttr(":autoDelete", OxmlType.BooleanValue),
    ":usedByAddin": new OxmlAttr(":usedByAddin", OxmlType.BooleanValue)
  };
  DifferentialFormats._C = {
    "x:dxf": XDifferentialFormat
  };
  DifferentialFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  TimelineStyles._C = {
    "x15:timelineStyle": TimelineStyle
  };
  TimelineStyles._D = {
    ":defaultTimelineStyle": new OxmlAttr(":defaultTimelineStyle", OxmlType.StringValue)
  };
  WorkbookProperties._D = {
    ":chartTrackingRefBase": new OxmlAttr(":chartTrackingRefBase", OxmlType.BooleanValue)
  };
  TimelineReferences._C = {
    "x15:timelineRef": TimelineReference
  };
  TimelineCacheReferences._C = {
    "x15:timelineCacheRef": TimelineCacheReference
  };
  WebExtensions._C = {
    "x15:webExtension": WebExtension
  };
  QueryTable._D = {
    ":clipped": new OxmlAttr(":clipped", OxmlType.BooleanValue),
    ":sourceDataName": new OxmlAttr(":sourceDataName", OxmlType.StringValue),
    ":drillThrough": new OxmlAttr(":drillThrough", OxmlType.BooleanValue)
  };
  PivotTableReferences._C = {
    "x15:pivotTableReference": PivotTableReference
  };
  OpenXmlPivotCachesElement._C = {
    "x:pivotCache": XPivotCache
  };
  TimelineCachePivotCaches._C = {
    "x:pivotCache": XPivotCache
  };
  PivotCaches._C = {
    "x:pivotCache": XPivotCache
  };
  return {
    prefix: "x15",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"
  };
}
export {
  AutoFilter,
  BoundsTimelineRange,
  CacheHierarchy,
  CachedUniqueName,
  CachedUniqueNames,
  CalculatedMember,
  CalculatedMemberNumberFormat,
  CalculatedMemberNumberFormatArray,
  Connection,
  DataFeedProperties,
  DataField,
  DataModel,
  DbCommand,
  DbTable,
  DbTables,
  DescriptionPrSurveyElementPr,
  DifferentialFormats,
  ExtensionList,
  FieldListActiveTabTopLevelEntity,
  ModelRelationship,
  ModelRelationships,
  ModelTable,
  ModelTables,
  ModelTextProperties,
  MovingPeriodState,
  MovingPeriodStep,
  MovingPeriodStepArray,
  OleDbPrpoperties,
  OpenXmlPivotCachesElement,
  OpenXmlSurveyElementPrElement,
  PivotCacheDecoupled,
  PivotCacheIdVersion,
  PivotCaches,
  PivotFilter,
  PivotRow,
  PivotTableData,
  PivotTableReference,
  PivotTableReferences,
  PivotTableServerFormats,
  PivotTableUISettings,
  PivotValueCell,
  PivotValueCellExtra,
  QueryTable,
  QuestionFormat,
  QuestionFormatArray,
  QuestionPrSurveyElementPr,
  QuestionType,
  QuestionTypeArray,
  QuestionsPrSurveyElementPr,
  RangeProperties,
  SXVCellType,
  SXVCellTypeArray,
  SelectionTimelineRange,
  ServerFormat,
  SlicerCacheHideItemsWithNoData,
  SlicerCacheOlapLevelName,
  SlicerCachePivotTables,
  SlicerCaches,
  Survey,
  SurveyPosition,
  SurveyPositionArray,
  SurveyPrSurveyElementPr,
  SurveyQuestion,
  SurveyQuestions,
  TableSlicerCache,
  TextProperties,
  Timeline,
  TimelineCacheDefinition,
  TimelineCachePivotCaches,
  TimelineCachePivotTable,
  TimelineCachePivotTables,
  TimelineCacheReference,
  TimelineCacheReferences,
  TimelinePivotCacheDefinition,
  TimelineRange,
  TimelineReference,
  TimelineReferences,
  TimelineState,
  TimelineStyle,
  TimelineStyleElement,
  TimelineStyleElements,
  TimelineStyleType,
  TimelineStyleTypeArray,
  TimelineStyles,
  Timelines,
  TitlePrSurveyElementPr,
  WebExtension,
  WebExtensions,
  WorkbookProperties,
  Xstring,
  initOffice2013ExcelNamespace
};
