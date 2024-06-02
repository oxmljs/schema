import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { FilterOperatorValuesArray } from "../../Spreadsheet";
import { ScopeValuesArray } from "../../Spreadsheet";
import { RuleValuesArray } from "../../Spreadsheet";
import { PivotAreaValuesArray } from "../../Spreadsheet";
import { PivotTableAxisValuesArray } from "../../Spreadsheet";
import { DataValidationValuesArray } from "../../Spreadsheet";
import { DataValidationErrorStyleValuesArray } from "../../Spreadsheet";
import { DataValidationImeModeValuesArray } from "../../Spreadsheet";
import { DataValidationOperatorValuesArray } from "../../Spreadsheet";
import { ConditionalFormatValuesArray } from "../../Spreadsheet";
import { ConditionalFormattingOperatorValuesArray } from "../../Spreadsheet";
import { TimePeriodValuesArray } from "../../Spreadsheet";
import { SortByValuesArray } from "../../Spreadsheet";
import { SlicerCacheDefinitionExtension as XSlicerCacheDefinitionExtension } from "../../Spreadsheet";
import { ReferenceSequence as XneReferenceSequence } from "../../Office/Excel";
import { PivotArea as XPivotArea } from "../../Spreadsheet";
import { Value as XValue } from "../../Spreadsheet";
import { PivotAreaReferences as XPivotAreaReferences } from "../../Spreadsheet";
import { ExtensionList as XExtensionList } from "../../Spreadsheet";
import { Formula as XneFormula } from "../../Office/Excel";
import { CalculatedMember as XCalculatedMember } from "../../Spreadsheet";
import { Font as XFont } from "../../Spreadsheet";
import { NumberingFormat as XNumberingFormat } from "../../Spreadsheet";
import { Fill as XFill } from "../../Spreadsheet";
import { Alignment as XAlignment } from "../../Spreadsheet";
import { Border as XBorder } from "../../Spreadsheet";
import { Protection as XProtection } from "../../Spreadsheet";
import { Extension as XExtension } from "../../Spreadsheet";
import { DifferentialFormat as XDifferentialFormat } from "../../Spreadsheet";
import { PivotCache as XPivotCache } from "../../Spreadsheet";
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
var SparklineAxisMinMaxValues = /* @__PURE__ */ ((SparklineAxisMinMaxValues2) => {
  SparklineAxisMinMaxValues2["Individual"] = "individual";
  SparklineAxisMinMaxValues2["Group"] = "group";
  SparklineAxisMinMaxValues2["Custom"] = "custom";
  return SparklineAxisMinMaxValues2;
})(SparklineAxisMinMaxValues || {});
const SparklineAxisMinMaxValuesArray = [
  "individual" /* Individual */,
  "group" /* Group */,
  "custom" /* Custom */
];
var SparklineTypeValues = /* @__PURE__ */ ((SparklineTypeValues2) => {
  SparklineTypeValues2["Line"] = "line";
  SparklineTypeValues2["Column"] = "column";
  SparklineTypeValues2["Stacked"] = "stacked";
  return SparklineTypeValues2;
})(SparklineTypeValues || {});
const SparklineTypeValuesArray = [
  "line" /* Line */,
  "column" /* Column */,
  "stacked" /* Stacked */
];
var PivotShowAsValues = /* @__PURE__ */ ((PivotShowAsValues2) => {
  PivotShowAsValues2["PercentOfParent"] = "percentOfParent";
  PivotShowAsValues2["PercentOfParentRow"] = "percentOfParentRow";
  PivotShowAsValues2["PercentOfParentColumn"] = "percentOfParentCol";
  PivotShowAsValues2["PercentOfRunningTotal"] = "percentOfRunningTotal";
  PivotShowAsValues2["RankAscending"] = "rankAscending";
  PivotShowAsValues2["RankDescending"] = "rankDescending";
  return PivotShowAsValues2;
})(PivotShowAsValues || {});
const PivotShowAsValuesArray = [
  "percentOfParent" /* PercentOfParent */,
  "percentOfParentRow" /* PercentOfParentRow */,
  "percentOfParentCol" /* PercentOfParentColumn */,
  "percentOfRunningTotal" /* PercentOfRunningTotal */,
  "rankAscending" /* RankAscending */,
  "rankDescending" /* RankDescending */
];
var DataBarDirectionValues = /* @__PURE__ */ ((DataBarDirectionValues2) => {
  DataBarDirectionValues2["Context"] = "context";
  DataBarDirectionValues2["LeftToRight"] = "leftToRight";
  DataBarDirectionValues2["RightToLeft"] = "rightToLeft";
  return DataBarDirectionValues2;
})(DataBarDirectionValues || {});
const DataBarDirectionValuesArray = [
  "context" /* Context */,
  "leftToRight" /* LeftToRight */,
  "rightToLeft" /* RightToLeft */
];
var DataBarAxisPositionValues = /* @__PURE__ */ ((DataBarAxisPositionValues2) => {
  DataBarAxisPositionValues2["Automatic"] = "automatic";
  DataBarAxisPositionValues2["Middle"] = "middle";
  DataBarAxisPositionValues2["None"] = "none";
  return DataBarAxisPositionValues2;
})(DataBarAxisPositionValues || {});
const DataBarAxisPositionValuesArray = [
  "automatic" /* Automatic */,
  "middle" /* Middle */,
  "none" /* None */
];
var ConditionalFormattingValueObjectTypeValues = /* @__PURE__ */ ((ConditionalFormattingValueObjectTypeValues2) => {
  ConditionalFormattingValueObjectTypeValues2["Numeric"] = "num";
  ConditionalFormattingValueObjectTypeValues2["Percent"] = "percent";
  ConditionalFormattingValueObjectTypeValues2["Max"] = "max";
  ConditionalFormattingValueObjectTypeValues2["Min"] = "min";
  ConditionalFormattingValueObjectTypeValues2["Formula"] = "formula";
  ConditionalFormattingValueObjectTypeValues2["Percentile"] = "percentile";
  ConditionalFormattingValueObjectTypeValues2["AutoMin"] = "autoMin";
  ConditionalFormattingValueObjectTypeValues2["AutoMax"] = "autoMax";
  return ConditionalFormattingValueObjectTypeValues2;
})(ConditionalFormattingValueObjectTypeValues || {});
const ConditionalFormattingValueObjectTypeValuesArray = [
  "num" /* Numeric */,
  "percent" /* Percent */,
  "max" /* Max */,
  "min" /* Min */,
  "formula" /* Formula */,
  "percentile" /* Percentile */,
  "autoMin" /* AutoMin */,
  "autoMax" /* AutoMax */
];
var IconSetTypeValues = /* @__PURE__ */ ((IconSetTypeValues2) => {
  IconSetTypeValues2["ThreeArrows"] = "3Arrows";
  IconSetTypeValues2["ThreeArrowsGray"] = "3ArrowsGray";
  IconSetTypeValues2["ThreeFlags"] = "3Flags";
  IconSetTypeValues2["ThreeTrafficLights1"] = "3TrafficLights1";
  IconSetTypeValues2["ThreeTrafficLights2"] = "3TrafficLights2";
  IconSetTypeValues2["ThreeSigns"] = "3Signs";
  IconSetTypeValues2["ThreeSymbols"] = "3Symbols";
  IconSetTypeValues2["ThreeSymbols2"] = "3Symbols2";
  IconSetTypeValues2["FourArrows"] = "4Arrows";
  IconSetTypeValues2["FourArrowsGray"] = "4ArrowsGray";
  IconSetTypeValues2["FourRedToBlack"] = "4RedToBlack";
  IconSetTypeValues2["FourRating"] = "4Rating";
  IconSetTypeValues2["FourTrafficLights"] = "4TrafficLights";
  IconSetTypeValues2["FiveArrows"] = "5Arrows";
  IconSetTypeValues2["FiveArrowsGray"] = "5ArrowsGray";
  IconSetTypeValues2["FiveRating"] = "5Rating";
  IconSetTypeValues2["FiveQuarters"] = "5Quarters";
  IconSetTypeValues2["ThreeStars"] = "3Stars";
  IconSetTypeValues2["ThreeTriangles"] = "3Triangles";
  IconSetTypeValues2["FiveBoxes"] = "5Boxes";
  IconSetTypeValues2["NoIcons"] = "NoIcons";
  return IconSetTypeValues2;
})(IconSetTypeValues || {});
const IconSetTypeValuesArray = [
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
  "5Quarters" /* FiveQuarters */,
  "3Stars" /* ThreeStars */,
  "3Triangles" /* ThreeTriangles */,
  "5Boxes" /* FiveBoxes */,
  "NoIcons" /* NoIcons */
];
var PivotEditValueTypeValues = /* @__PURE__ */ ((PivotEditValueTypeValues2) => {
  PivotEditValueTypeValues2["Number"] = "number";
  PivotEditValueTypeValues2["DateTime"] = "dateTime";
  PivotEditValueTypeValues2["String"] = "string";
  PivotEditValueTypeValues2["Boolean"] = "boolean";
  PivotEditValueTypeValues2["Error"] = "error";
  return PivotEditValueTypeValues2;
})(PivotEditValueTypeValues || {});
const PivotEditValueTypeValuesArray = [
  "number" /* Number */,
  "dateTime" /* DateTime */,
  "string" /* String */,
  "boolean" /* Boolean */,
  "error" /* Error */
];
var AllocationMethodValues = /* @__PURE__ */ ((AllocationMethodValues2) => {
  AllocationMethodValues2["EqualAllocation"] = "equalAllocation";
  AllocationMethodValues2["EqualIncrement"] = "equalIncrement";
  AllocationMethodValues2["WeightedAllocation"] = "weightedAllocation";
  AllocationMethodValues2["WeightedIncrement"] = "weightedIncrement";
  return AllocationMethodValues2;
})(AllocationMethodValues || {});
const AllocationMethodValuesArray = [
  "equalAllocation" /* EqualAllocation */,
  "equalIncrement" /* EqualIncrement */,
  "weightedAllocation" /* WeightedAllocation */,
  "weightedIncrement" /* WeightedIncrement */
];
var SlicerStyleTypeValues = /* @__PURE__ */ ((SlicerStyleTypeValues2) => {
  SlicerStyleTypeValues2["UnselectedItemWithData"] = "unselectedItemWithData";
  SlicerStyleTypeValues2["SelectedItemWithData"] = "selectedItemWithData";
  SlicerStyleTypeValues2["UnselectedItemWithNoData"] = "unselectedItemWithNoData";
  SlicerStyleTypeValues2["SelectedItemWithNoData"] = "selectedItemWithNoData";
  SlicerStyleTypeValues2["HoveredUnselectedItemWithData"] = "hoveredUnselectedItemWithData";
  SlicerStyleTypeValues2["HoveredSelectedItemWithData"] = "hoveredSelectedItemWithData";
  SlicerStyleTypeValues2["HoveredUnselectedItemWithNoData"] = "hoveredUnselectedItemWithNoData";
  SlicerStyleTypeValues2["HoveredSelectedItemWithNoData"] = "hoveredSelectedItemWithNoData";
  return SlicerStyleTypeValues2;
})(SlicerStyleTypeValues || {});
const SlicerStyleTypeValuesArray = [
  "unselectedItemWithData" /* UnselectedItemWithData */,
  "selectedItemWithData" /* SelectedItemWithData */,
  "unselectedItemWithNoData" /* UnselectedItemWithNoData */,
  "selectedItemWithNoData" /* SelectedItemWithNoData */,
  "hoveredUnselectedItemWithData" /* HoveredUnselectedItemWithData */,
  "hoveredSelectedItemWithData" /* HoveredSelectedItemWithData */,
  "hoveredUnselectedItemWithNoData" /* HoveredUnselectedItemWithNoData */,
  "hoveredSelectedItemWithNoData" /* HoveredSelectedItemWithNoData */
];
var CheckedValues = /* @__PURE__ */ ((CheckedValues2) => {
  CheckedValues2["Unchecked"] = "Unchecked";
  CheckedValues2["Checked"] = "Checked";
  CheckedValues2["Mixed"] = "Mixed";
  return CheckedValues2;
})(CheckedValues || {});
const CheckedValuesArray = [
  "Unchecked" /* Unchecked */,
  "Checked" /* Checked */,
  "Mixed" /* Mixed */
];
var DropStyleValues = /* @__PURE__ */ ((DropStyleValues2) => {
  DropStyleValues2["Combo"] = "combo";
  DropStyleValues2["ComboEdit"] = "comboedit";
  DropStyleValues2["Simple"] = "simple";
  return DropStyleValues2;
})(DropStyleValues || {});
const DropStyleValuesArray = [
  "combo" /* Combo */,
  "comboedit" /* ComboEdit */,
  "simple" /* Simple */
];
var SelectionTypeValues = /* @__PURE__ */ ((SelectionTypeValues2) => {
  SelectionTypeValues2["Single"] = "single";
  SelectionTypeValues2["Multiple"] = "multi";
  SelectionTypeValues2["Extended"] = "extended";
  return SelectionTypeValues2;
})(SelectionTypeValues || {});
const SelectionTypeValuesArray = [
  "single" /* Single */,
  "multi" /* Multiple */,
  "extended" /* Extended */
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
var EditValidationValues = /* @__PURE__ */ ((EditValidationValues2) => {
  EditValidationValues2["Text"] = "text";
  EditValidationValues2["Integer"] = "integer";
  EditValidationValues2["Number"] = "number";
  EditValidationValues2["Reference"] = "reference";
  EditValidationValues2["Formula"] = "formula";
  return EditValidationValues2;
})(EditValidationValues || {});
const EditValidationValuesArray = [
  "text" /* Text */,
  "integer" /* Integer */,
  "number" /* Number */,
  "reference" /* Reference */,
  "formula" /* Formula */
];
var OlapSlicerCacheSortOrderValues = /* @__PURE__ */ ((OlapSlicerCacheSortOrderValues2) => {
  OlapSlicerCacheSortOrderValues2["Natural"] = "natural";
  OlapSlicerCacheSortOrderValues2["Ascending"] = "ascending";
  OlapSlicerCacheSortOrderValues2["Descending"] = "descending";
  return OlapSlicerCacheSortOrderValues2;
})(OlapSlicerCacheSortOrderValues || {});
const OlapSlicerCacheSortOrderValuesArray = [
  "natural" /* Natural */,
  "ascending" /* Ascending */,
  "descending" /* Descending */
];
var TabularSlicerCacheSortOrderValues = /* @__PURE__ */ ((TabularSlicerCacheSortOrderValues2) => {
  TabularSlicerCacheSortOrderValues2["Ascending"] = "ascending";
  TabularSlicerCacheSortOrderValues2["Descending"] = "descending";
  return TabularSlicerCacheSortOrderValues2;
})(TabularSlicerCacheSortOrderValues || {});
const TabularSlicerCacheSortOrderValuesArray = [
  "ascending" /* Ascending */,
  "descending" /* Descending */
];
var SlicerCacheCrossFilterValues = /* @__PURE__ */ ((SlicerCacheCrossFilterValues2) => {
  SlicerCacheCrossFilterValues2["None"] = "none";
  SlicerCacheCrossFilterValues2["ShowItemsWithDataAtTop"] = "showItemsWithDataAtTop";
  SlicerCacheCrossFilterValues2["ShowItemsWithNoData"] = "showItemsWithNoData";
  return SlicerCacheCrossFilterValues2;
})(SlicerCacheCrossFilterValues || {});
const SlicerCacheCrossFilterValuesArray = [
  "none" /* None */,
  "showItemsWithDataAtTop" /* ShowItemsWithDataAtTop */,
  "showItemsWithNoData" /* ShowItemsWithNoData */
];
var ObjectTypeValues = /* @__PURE__ */ ((ObjectTypeValues2) => {
  ObjectTypeValues2["Button"] = "Button";
  ObjectTypeValues2["CheckBox"] = "CheckBox";
  ObjectTypeValues2["Drop"] = "Drop";
  ObjectTypeValues2["GroupBox"] = "GBox";
  ObjectTypeValues2["Label"] = "Label";
  ObjectTypeValues2["List"] = "List";
  ObjectTypeValues2["Radio"] = "Radio";
  ObjectTypeValues2["Scroll"] = "Scroll";
  ObjectTypeValues2["Spin"] = "Spin";
  ObjectTypeValues2["EditBox"] = "EditBox";
  ObjectTypeValues2["Dialog"] = "Dialog";
  return ObjectTypeValues2;
})(ObjectTypeValues || {});
const ObjectTypeValuesArray = [
  "Button" /* Button */,
  "CheckBox" /* CheckBox */,
  "Drop" /* Drop */,
  "GBox" /* GroupBox */,
  "Label" /* Label */,
  "List" /* List */,
  "Radio" /* Radio */,
  "Scroll" /* Scroll */,
  "Spin" /* Spin */,
  "EditBox" /* EditBox */,
  "Dialog" /* Dialog */
];
class SlicerCacheDefinitionExtensionList extends OxmlCompositeElement {
  static _Q = "x14:extLst";
}
class SlicerCacheData extends OxmlCompositeElement {
  static _Q = "x14:data";
  /** Returns OlapSlicerCache. */
  get olapSlicerCache() {
    return this._f(OlapSlicerCache);
  }
  /** Returns TabularSlicerCache. */
  get tabularSlicerCache() {
    return this._f(TabularSlicerCache);
  }
}
class SlicerCachePivotTables extends OxmlCompositeElement {
  static _Q = "x14:pivotTables";
}
class TabularSlicerCacheItem extends OxmlLeafElement {
  static _Q = "x14:i";
  static _A = [":x", ":s", ":nd"];
  /** x. Serialized as `:x` */
  get atom() {
    return this._g(":x");
  }
  set atom(v) {
    this._s(":x", v);
  }
  /** s. Serialized as `:s` */
  get isSelected() {
    return this._g(":s");
  }
  set isSelected(v) {
    this._s(":s", v);
  }
  /** nd. Serialized as `:nd` */
  get nonDisplay() {
    return this._g(":nd");
  }
  set nonDisplay(v) {
    this._s(":nd", v);
  }
}
class TabularSlicerCacheItems extends OxmlCompositeElement {
  static _Q = "x14:items";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class OlapSlicerCacheSelection extends OxmlCompositeElement {
  static _Q = "x14:selection";
  static _A = [":n"];
  /** n. Serialized as `:n` */
  get name() {
    return this._g(":n");
  }
  set name(v) {
    this._s(":n", v);
  }
}
class OlapSlicerCacheSelections extends OxmlCompositeElement {
  static _Q = "x14:selections";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class OlapSlicerCacheLevelsData extends OxmlCompositeElement {
  static _Q = "x14:levels";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class OlapSlicerCacheLevelData extends OxmlCompositeElement {
  static _Q = "x14:level";
  static _A = [":uniqueName", ":sourceCaption", ":count", ":sortOrder", ":crossFilter"];
  /** uniqueName. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** sourceCaption. Serialized as `:sourceCaption` */
  get sourceCaption() {
    return this._g(":sourceCaption");
  }
  set sourceCaption(v) {
    this._s(":sourceCaption", v);
  }
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
  /** sortOrder. Serialized as `:sortOrder` */
  get sortOrder() {
    return this._g(":sortOrder");
  }
  set sortOrder(v) {
    this._s(":sortOrder", v);
  }
  /** crossFilter. Serialized as `:crossFilter` */
  get crossFilter() {
    return this._g(":crossFilter");
  }
  set crossFilter(v) {
    this._s(":crossFilter", v);
  }
  /** Returns OlapSlicerCacheRanges. */
  get olapSlicerCacheRanges() {
    return this._f(OlapSlicerCacheRanges);
  }
}
class OlapSlicerCacheRanges extends OxmlCompositeElement {
  static _Q = "x14:ranges";
}
class OlapSlicerCacheRange extends OxmlCompositeElement {
  static _Q = "x14:range";
  static _A = [":startItem"];
  /** startItem. Serialized as `:startItem` */
  get startItem() {
    return this._g(":startItem");
  }
  set startItem(v) {
    this._s(":startItem", v);
  }
}
class OlapSlicerCacheItem extends OxmlCompositeElement {
  static _Q = "x14:i";
  static _A = [":n", ":c", ":nd"];
  /** n. Serialized as `:n` */
  get name() {
    return this._g(":n");
  }
  set name(v) {
    this._s(":n", v);
  }
  /** c. Serialized as `:c` */
  get displayName() {
    return this._g(":c");
  }
  set displayName(v) {
    this._s(":c", v);
  }
  /** nd. Serialized as `:nd` */
  get nonDisplay() {
    return this._g(":nd");
  }
  set nonDisplay(v) {
    this._s(":nd", v);
  }
}
class OlapSlicerCacheItemParent extends OxmlLeafElement {
  static _Q = "x14:p";
  static _A = [":n"];
  /** n. Serialized as `:n` */
  get name() {
    return this._g(":n");
  }
  set name(v) {
    this._s(":n", v);
  }
}
class SlicerCachePivotTable extends OxmlLeafElement {
  static _Q = "x14:pivotTable";
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
class TabularSlicerCache extends OxmlCompositeElement {
  static _Q = "x14:tabular";
  static _A = [":pivotCacheId", ":sortOrder", ":customListSort", ":showMissing", ":crossFilter"];
  /** pivotCacheId. Serialized as `:pivotCacheId` */
  get pivotCacheId() {
    return this._g(":pivotCacheId");
  }
  set pivotCacheId(v) {
    this._s(":pivotCacheId", v);
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
  /** showMissing. Serialized as `:showMissing` */
  get showMissing() {
    return this._g(":showMissing");
  }
  set showMissing(v) {
    this._s(":showMissing", v);
  }
  /** crossFilter. Serialized as `:crossFilter` */
  get crossFilter() {
    return this._g(":crossFilter");
  }
  set crossFilter(v) {
    this._s(":crossFilter", v);
  }
  /** Returns TabularSlicerCacheItems. */
  get tabularSlicerCacheItems() {
    return this._f(TabularSlicerCacheItems);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class OlapSlicerCache extends OxmlCompositeElement {
  static _Q = "x14:olap";
  static _A = [":pivotCacheId"];
  /** pivotCacheId. Serialized as `:pivotCacheId` */
  get pivotCacheId() {
    return this._g(":pivotCacheId");
  }
  set pivotCacheId(v) {
    this._s(":pivotCacheId", v);
  }
  /** Returns OlapSlicerCacheLevelsData. */
  get olapSlicerCacheLevelsData() {
    return this._f(OlapSlicerCacheLevelsData);
  }
  /** Returns OlapSlicerCacheSelections. */
  get olapSlicerCacheSelections() {
    return this._f(OlapSlicerCacheSelections);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Slicer extends OxmlCompositeElement {
  static _Q = "x14:slicer";
  static _A = [":name", ":cache", ":caption", ":startItem", ":columnCount", ":showCaption", ":level", ":style", ":lockedPosition", ":rowHeight"];
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
  /** startItem. Serialized as `:startItem` */
  get startItem() {
    return this._g(":startItem");
  }
  set startItem(v) {
    this._s(":startItem", v);
  }
  /** columnCount. Serialized as `:columnCount` */
  get columnCount() {
    return this._g(":columnCount");
  }
  set columnCount(v) {
    this._s(":columnCount", v);
  }
  /** showCaption. Serialized as `:showCaption` */
  get showCaption() {
    return this._g(":showCaption");
  }
  set showCaption(v) {
    this._s(":showCaption", v);
  }
  /** level. Serialized as `:level` */
  get level() {
    return this._g(":level");
  }
  set level(v) {
    this._s(":level", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** lockedPosition. Serialized as `:lockedPosition` */
  get lockedPosition() {
    return this._g(":lockedPosition");
  }
  set lockedPosition(v) {
    this._s(":lockedPosition", v);
  }
  /** rowHeight. Serialized as `:rowHeight` */
  get rowHeight() {
    return this._g(":rowHeight");
  }
  set rowHeight(v) {
    this._s(":rowHeight", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ListItems extends OxmlCompositeElement {
  static _Q = "x14:itemLst";
}
class ListItem extends OxmlLeafElement {
  static _Q = "x14:item";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class CustomFilter extends OxmlLeafElement {
  static _Q = "x14:customFilter";
  static _A = [":operator", ":val"];
  /** operator. Serialized as `:operator` */
  get operator() {
    return this._g(":operator");
  }
  set operator(v) {
    this._s(":operator", v);
  }
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ProtectedRange extends OxmlCompositeElement {
  static _Q = "x14:protectedRange";
  static _A = [":password", ":algorithmName", ":hashValue", ":saltValue", ":spinCount", ":name", ":securityDescriptor"];
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
  /** Returns XneReferenceSequence. */
  get referenceSequence() {
    return this._f(XneReferenceSequence);
  }
}
class IgnoredError extends OxmlCompositeElement {
  static _Q = "x14:ignoredError";
  static _A = [":evalError", ":twoDigitTextYear", ":numberStoredAsText", ":formula", ":formulaRange", ":unlockedFormula", ":emptyCellReference", ":listDataValidation", ":calculatedColumn"];
  /** evalError. Serialized as `:evalError` */
  get evalError() {
    return this._g(":evalError");
  }
  set evalError(v) {
    this._s(":evalError", v);
  }
  /** twoDigitTextYear. Serialized as `:twoDigitTextYear` */
  get twoDigitTextYear() {
    return this._g(":twoDigitTextYear");
  }
  set twoDigitTextYear(v) {
    this._s(":twoDigitTextYear", v);
  }
  /** numberStoredAsText. Serialized as `:numberStoredAsText` */
  get numberStoredAsText() {
    return this._g(":numberStoredAsText");
  }
  set numberStoredAsText(v) {
    this._s(":numberStoredAsText", v);
  }
  /** formula. Serialized as `:formula` */
  get formula() {
    return this._g(":formula");
  }
  set formula(v) {
    this._s(":formula", v);
  }
  /** formulaRange. Serialized as `:formulaRange` */
  get formulaRange() {
    return this._g(":formulaRange");
  }
  set formulaRange(v) {
    this._s(":formulaRange", v);
  }
  /** unlockedFormula. Serialized as `:unlockedFormula` */
  get unlockedFormula() {
    return this._g(":unlockedFormula");
  }
  set unlockedFormula(v) {
    this._s(":unlockedFormula", v);
  }
  /** emptyCellReference. Serialized as `:emptyCellReference` */
  get emptyCellReference() {
    return this._g(":emptyCellReference");
  }
  set emptyCellReference(v) {
    this._s(":emptyCellReference", v);
  }
  /** listDataValidation. Serialized as `:listDataValidation` */
  get listDataValidation() {
    return this._g(":listDataValidation");
  }
  set listDataValidation(v) {
    this._s(":listDataValidation", v);
  }
  /** calculatedColumn. Serialized as `:calculatedColumn` */
  get calculatedColumn() {
    return this._g(":calculatedColumn");
  }
  set calculatedColumn(v) {
    this._s(":calculatedColumn", v);
  }
  /** Returns XneReferenceSequence. */
  get referenceSequence() {
    return this._f(XneReferenceSequence);
  }
}
class SlicerStyleElement extends OxmlLeafElement {
  static _Q = "x14:slicerStyleElement";
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
class SlicerStyle extends OxmlCompositeElement {
  static _Q = "x14:slicerStyle";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Returns SlicerStyleElements. */
  get slicerStyleElements() {
    return this._f(SlicerStyleElements);
  }
}
class PivotAreas extends OxmlCompositeElement {
  static _Q = "x14:pivotAreas";
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
  static _Q = "x14:conditionalFormat";
  static _A = [":scope", ":type", ":priority", ":id"];
  /** scope. Serialized as `:scope` */
  get scope() {
    return this._g(":scope");
  }
  set scope(v) {
    this._s(":scope", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** priority. Serialized as `:priority` */
  get priority() {
    return this._g(":priority");
  }
  set priority(v) {
    this._s(":priority", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns PivotAreas. */
  get pivotAreas() {
    return this._f(PivotAreas);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DdeValues extends OxmlCompositeElement {
  static _Q = "x14:values";
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
class SlicerStyleElements extends OxmlCompositeElement {
  static _Q = "x14:slicerStyleElements";
}
class Xstring extends OxmlLeafTextElement {
  static _Q = "x14:tupleItem";
}
class PivotEditValue extends OxmlLeafTextElement {
  static _Q = "x14:editValue";
  static _A = [":valueType"];
  /** valueType. Serialized as `:valueType` */
  get valueType() {
    return this._g(":valueType");
  }
  set valueType(v) {
    this._s(":valueType", v);
  }
}
class PivotChange extends OxmlCompositeElement {
  static _Q = "x14:pivotChange";
  static _A = [":allocationMethod", ":weightExpression"];
  /** allocationMethod. Serialized as `:allocationMethod` */
  get allocationMethod() {
    return this._g(":allocationMethod");
  }
  set allocationMethod(v) {
    this._s(":allocationMethod", v);
  }
  /** weightExpression. Serialized as `:weightExpression` */
  get weightExpression() {
    return this._g(":weightExpression");
  }
  set weightExpression(v) {
    this._s(":weightExpression", v);
  }
  /** Returns PivotEditValue. */
  get pivotEditValue() {
    return this._f(PivotEditValue);
  }
  /** Returns TupleItems. */
  get tupleItems() {
    return this._f(TupleItems);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PivotArea extends OxmlCompositeElement {
  static _Q = "x14:pivotArea";
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
    return this._f(XPivotAreaReferences);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(XExtensionList);
  }
}
class TupleItems extends OxmlCompositeElement {
  static _Q = "x14:tupleItems";
}
class PivotUserEdit extends OxmlCompositeElement {
  static _Q = "x14:userEdit";
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
  /** Returns PivotEditValue. */
  get pivotEditValue() {
    return this._f(PivotEditValue);
  }
}
class PivotEdit extends OxmlCompositeElement {
  static _Q = "x14:pivotEdit";
  /** Returns PivotUserEdit. */
  get pivotUserEdit() {
    return this._f(PivotUserEdit);
  }
  /** Returns TupleItems. */
  get tupleItems() {
    return this._f(TupleItems);
  }
  /** Returns PivotArea. */
  get pivotArea() {
    return this._f(PivotArea);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CalculatedMembers extends OxmlCompositeElement {
  static _Q = "x14:calculatedMembers";
  static _A = [":count"];
  /** Calculated Members Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ConditionalFormats extends OxmlCompositeElement {
  static _Q = "x14:conditionalFormats";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class PivotChanges extends OxmlCompositeElement {
  static _Q = "x14:pivotChanges";
}
class PivotEdits extends OxmlCompositeElement {
  static _Q = "x14:pivotEdits";
}
class ConditionalFormattingIcon extends OxmlLeafElement {
  static _Q = "x14:cfIcon";
  static _A = [":iconSet", ":iconId"];
  /** iconSet. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** iconId. Serialized as `:iconId` */
  get iconId() {
    return this._g(":iconId");
  }
  set iconId(v) {
    this._s(":iconId", v);
  }
}
class ConditionalFormattingValueObject extends OxmlCompositeElement {
  static _Q = "x14:cfvo";
  static _A = [":type", ":gte"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** gte. Serialized as `:gte` */
  get greaterThanOrEqual() {
    return this._g(":gte");
  }
  set greaterThanOrEqual(v) {
    this._s(":gte", v);
  }
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DifferentialType extends OxmlCompositeElement {
  static _Q = "x14:dxf";
  /** Font Properties. */
  get font() {
    return this._f(XFont);
  }
  /** Number Format. */
  get numberingFormat() {
    return this._f(XNumberingFormat);
  }
  /** Fill. */
  get fill() {
    return this._f(XFill);
  }
  /** Alignment. */
  get alignment() {
    return this._f(XAlignment);
  }
  /** Border Properties. */
  get border() {
    return this._f(XBorder);
  }
  /** Protection Properties. */
  get protection() {
    return this._f(XProtection);
  }
  /** Future Feature Data Storage Area. */
  get extensionList() {
    return this._f(XExtensionList);
  }
}
class IconSet extends OxmlCompositeElement {
  static _Q = "x14:iconSet";
  static _A = [":iconSet", ":showValue", ":percent", ":reverse", ":custom"];
  /** iconSet. Serialized as `:iconSet` */
  get iconSetTypes() {
    return this._g(":iconSet");
  }
  set iconSetTypes(v) {
    this._s(":iconSet", v);
  }
  /** showValue. Serialized as `:showValue` */
  get showValue() {
    return this._g(":showValue");
  }
  set showValue(v) {
    this._s(":showValue", v);
  }
  /** percent. Serialized as `:percent` */
  get percent() {
    return this._g(":percent");
  }
  set percent(v) {
    this._s(":percent", v);
  }
  /** reverse. Serialized as `:reverse` */
  get reverse() {
    return this._g(":reverse");
  }
  set reverse(v) {
    this._s(":reverse", v);
  }
  /** custom. Serialized as `:custom` */
  get custom() {
    return this._g(":custom");
  }
  set custom(v) {
    this._s(":custom", v);
  }
}
class DataBar extends OxmlCompositeElement {
  static _Q = "x14:dataBar";
  static _A = [":minLength", ":maxLength", ":showValue", ":border", ":gradient", ":direction", ":negativeBarColorSameAsPositive", ":negativeBarBorderColorSameAsPositive", ":axisPosition"];
  /** minLength. Serialized as `:minLength` */
  get minLength() {
    return this._g(":minLength");
  }
  set minLength(v) {
    this._s(":minLength", v);
  }
  /** maxLength. Serialized as `:maxLength` */
  get maxLength() {
    return this._g(":maxLength");
  }
  set maxLength(v) {
    this._s(":maxLength", v);
  }
  /** showValue. Serialized as `:showValue` */
  get showValue() {
    return this._g(":showValue");
  }
  set showValue(v) {
    this._s(":showValue", v);
  }
  /** border. Serialized as `:border` */
  get border() {
    return this._g(":border");
  }
  set border(v) {
    this._s(":border", v);
  }
  /** gradient. Serialized as `:gradient` */
  get gradient() {
    return this._g(":gradient");
  }
  set gradient(v) {
    this._s(":gradient", v);
  }
  /** direction. Serialized as `:direction` */
  get direction() {
    return this._g(":direction");
  }
  set direction(v) {
    this._s(":direction", v);
  }
  /** negativeBarColorSameAsPositive. Serialized as `:negativeBarColorSameAsPositive` */
  get negativeBarColorSameAsPositive() {
    return this._g(":negativeBarColorSameAsPositive");
  }
  set negativeBarColorSameAsPositive(v) {
    this._s(":negativeBarColorSameAsPositive", v);
  }
  /** negativeBarBorderColorSameAsPositive. Serialized as `:negativeBarBorderColorSameAsPositive` */
  get negativeBarBorderColorSameAsPositive() {
    return this._g(":negativeBarBorderColorSameAsPositive");
  }
  set negativeBarBorderColorSameAsPositive(v) {
    this._s(":negativeBarBorderColorSameAsPositive", v);
  }
  /** axisPosition. Serialized as `:axisPosition` */
  get axisPosition() {
    return this._g(":axisPosition");
  }
  set axisPosition(v) {
    this._s(":axisPosition", v);
  }
}
class ColorScale extends OxmlCompositeElement {
  static _Q = "x14:colorScale";
}
class SetLevels extends OxmlCompositeElement {
  static _Q = "x14:setLevels";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SetLevel extends OxmlLeafElement {
  static _Q = "x14:setLevel";
  static _A = [":hierarchy"];
  /** hierarchy. Serialized as `:hierarchy` */
  get hierarchy() {
    return this._g(":hierarchy");
  }
  set hierarchy(v) {
    this._s(":hierarchy", v);
  }
}
class TupleSetRowItem extends OxmlLeafElement {
  static _Q = "x14:rowItem";
  static _A = [":u", ":d"];
  /** u. Serialized as `:u` */
  get uniqueName() {
    return this._g(":u");
  }
  set uniqueName(v) {
    this._s(":u", v);
  }
  /** d. Serialized as `:d` */
  get displayName() {
    return this._g(":d");
  }
  set displayName(v) {
    this._s(":d", v);
  }
}
class TupleSetRow extends OxmlCompositeElement {
  static _Q = "x14:row";
}
class TupleSetHeader extends OxmlLeafElement {
  static _Q = "x14:header";
  static _A = [":uniqueName", ":hierarchyName"];
  /** uniqueName. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
  /** hierarchyName. Serialized as `:hierarchyName` */
  get hierarchyName() {
    return this._g(":hierarchyName");
  }
  set hierarchyName(v) {
    this._s(":hierarchyName", v);
  }
}
class TupleSetRows extends OxmlCompositeElement {
  static _Q = "x14:rows";
}
class TupleSetHeaders extends OxmlCompositeElement {
  static _Q = "x14:headers";
}
class TupleSet extends OxmlCompositeElement {
  static _Q = "x14:tupleSet";
  static _A = [":rowCount", ":columnCount"];
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
  /** Returns TupleSetHeaders. */
  get tupleSetHeaders() {
    return this._f(TupleSetHeaders);
  }
  /** Returns TupleSetRows. */
  get tupleSetRows() {
    return this._f(TupleSetRows);
  }
}
class ArgumentDescription extends OxmlLeafTextElement {
  static _Q = "x14:argumentDescription";
  static _A = [":index"];
  /** index. Serialized as `:index` */
  get index() {
    return this._g(":index");
  }
  set index(v) {
    this._s(":index", v);
  }
}
class ArgumentDescriptions extends OxmlCompositeElement {
  static _Q = "x14:argumentDescriptions";
  static _A = [":count"];
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class DefinedName extends OxmlCompositeElement {
  static _Q = "x14:definedName";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Returns ArgumentDescriptions. */
  get argumentDescriptions() {
    return this._f(ArgumentDescriptions);
  }
}
class SlicerCache extends OxmlLeafElement {
  static _Q = "x14:slicerCache";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class SlicerRef extends OxmlLeafElement {
  static _Q = "x14:slicer";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class Sparkline extends OxmlCompositeElement {
  static _Q = "x14:sparkline";
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
  /** Returns XneReferenceSequence. */
  get referenceSequence() {
    return this._f(XneReferenceSequence);
  }
}
class Sparklines extends OxmlCompositeElement {
  static _Q = "x14:sparklines";
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
class BarAxisColor extends ColorType {
  static _Q = "x14:axisColor";
}
class NegativeBorderColor extends ColorType {
  static _Q = "x14:negativeBorderColor";
}
class NegativeFillColor extends ColorType {
  static _Q = "x14:negativeFillColor";
}
class BorderColor extends ColorType {
  static _Q = "x14:borderColor";
}
class FillColor extends ColorType {
  static _Q = "x14:fillColor";
}
class Color extends ColorType {
  static _Q = "x14:color";
}
class LowMarkerColor extends ColorType {
  static _Q = "x14:colorLow";
}
class HighMarkerColor extends ColorType {
  static _Q = "x14:colorHigh";
}
class LastMarkerColor extends ColorType {
  static _Q = "x14:colorLast";
}
class FirstMarkerColor extends ColorType {
  static _Q = "x14:colorFirst";
}
class MarkersColor extends ColorType {
  static _Q = "x14:colorMarkers";
}
class AxisColor extends ColorType {
  static _Q = "x14:colorAxis";
}
class NegativeColor extends ColorType {
  static _Q = "x14:colorNegative";
}
class SeriesColor extends ColorType {
  static _Q = "x14:colorSeries";
}
class SparklineGroup extends OxmlCompositeElement {
  static _Q = "x14:sparklineGroup";
  static _A = [":manualMax", ":manualMin", ":lineWeight", ":type", ":dateAxis", ":displayEmptyCellsAs", ":markers", ":high", ":low", ":first", ":last", ":negative", ":displayXAxis", ":displayHidden", ":minAxisType", ":maxAxisType", ":rightToLeft"];
  /** manualMax. Serialized as `:manualMax` */
  get manualMax() {
    return this._g(":manualMax");
  }
  set manualMax(v) {
    this._s(":manualMax", v);
  }
  /** manualMin. Serialized as `:manualMin` */
  get manualMin() {
    return this._g(":manualMin");
  }
  set manualMin(v) {
    this._s(":manualMin", v);
  }
  /** lineWeight. Serialized as `:lineWeight` */
  get lineWeight() {
    return this._g(":lineWeight");
  }
  set lineWeight(v) {
    this._s(":lineWeight", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** dateAxis. Serialized as `:dateAxis` */
  get dateAxis() {
    return this._g(":dateAxis");
  }
  set dateAxis(v) {
    this._s(":dateAxis", v);
  }
  /** displayEmptyCellsAs. Serialized as `:displayEmptyCellsAs` */
  get displayEmptyCellsAs() {
    return this._g(":displayEmptyCellsAs");
  }
  set displayEmptyCellsAs(v) {
    this._s(":displayEmptyCellsAs", v);
  }
  /** markers. Serialized as `:markers` */
  get markers() {
    return this._g(":markers");
  }
  set markers(v) {
    this._s(":markers", v);
  }
  /** high. Serialized as `:high` */
  get high() {
    return this._g(":high");
  }
  set high(v) {
    this._s(":high", v);
  }
  /** low. Serialized as `:low` */
  get low() {
    return this._g(":low");
  }
  set low(v) {
    this._s(":low", v);
  }
  /** first. Serialized as `:first` */
  get first() {
    return this._g(":first");
  }
  set first(v) {
    this._s(":first", v);
  }
  /** last. Serialized as `:last` */
  get last() {
    return this._g(":last");
  }
  set last(v) {
    this._s(":last", v);
  }
  /** negative. Serialized as `:negative` */
  get negative() {
    return this._g(":negative");
  }
  set negative(v) {
    this._s(":negative", v);
  }
  /** displayXAxis. Serialized as `:displayXAxis` */
  get displayXAxis() {
    return this._g(":displayXAxis");
  }
  set displayXAxis(v) {
    this._s(":displayXAxis", v);
  }
  /** displayHidden. Serialized as `:displayHidden` */
  get displayHidden() {
    return this._g(":displayHidden");
  }
  set displayHidden(v) {
    this._s(":displayHidden", v);
  }
  /** minAxisType. Serialized as `:minAxisType` */
  get minAxisType() {
    return this._g(":minAxisType");
  }
  set minAxisType(v) {
    this._s(":minAxisType", v);
  }
  /** maxAxisType. Serialized as `:maxAxisType` */
  get maxAxisType() {
    return this._g(":maxAxisType");
  }
  set maxAxisType(v) {
    this._s(":maxAxisType", v);
  }
  /** rightToLeft. Serialized as `:rightToLeft` */
  get rightToLeft() {
    return this._g(":rightToLeft");
  }
  set rightToLeft(v) {
    this._s(":rightToLeft", v);
  }
  /** Returns SeriesColor. */
  get seriesColor() {
    return this._f(SeriesColor);
  }
  /** Returns NegativeColor. */
  get negativeColor() {
    return this._f(NegativeColor);
  }
  /** Returns AxisColor. */
  get axisColor() {
    return this._f(AxisColor);
  }
  /** Returns MarkersColor. */
  get markersColor() {
    return this._f(MarkersColor);
  }
  /** Returns FirstMarkerColor. */
  get firstMarkerColor() {
    return this._f(FirstMarkerColor);
  }
  /** Returns LastMarkerColor. */
  get lastMarkerColor() {
    return this._f(LastMarkerColor);
  }
  /** Returns HighMarkerColor. */
  get highMarkerColor() {
    return this._f(HighMarkerColor);
  }
  /** Returns LowMarkerColor. */
  get lowMarkerColor() {
    return this._f(LowMarkerColor);
  }
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
  /** Returns Sparklines. */
  get sparklines() {
    return this._f(Sparklines);
  }
}
class DataValidationFormulaType extends OxmlCompositeElement {
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
}
class DataValidationForumla2 extends DataValidationFormulaType {
  static _Q = "x14:formula2";
}
class DataValidationForumla1 extends DataValidationFormulaType {
  static _Q = "x14:formula1";
}
class DataValidation extends OxmlCompositeElement {
  static _Q = "x14:dataValidation";
  static _A = [":type", ":errorStyle", ":imeMode", ":operator", ":allowBlank", ":showDropDown", ":showInputMessage", ":showErrorMessage", ":errorTitle", ":error", ":promptTitle", ":prompt"];
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
  /** Returns DataValidationForumla1. */
  get dataValidationForumla1() {
    return this._f(DataValidationForumla1);
  }
  /** Returns DataValidationForumla2. */
  get dataValidationForumla2() {
    return this._f(DataValidationForumla2);
  }
  /** Returns XneReferenceSequence. */
  get referenceSequence() {
    return this._f(XneReferenceSequence);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "x14:extLst";
}
class ConditionalFormattingRule extends OxmlCompositeElement {
  static _Q = "x14:cfRule";
  static _A = [":type", ":priority", ":stopIfTrue", ":aboveAverage", ":percent", ":bottom", ":operator", ":text", ":timePeriod", ":rank", ":stdDev", ":equalAverage", ":activePresent", ":id"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** priority. Serialized as `:priority` */
  get priority() {
    return this._g(":priority");
  }
  set priority(v) {
    this._s(":priority", v);
  }
  /** stopIfTrue. Serialized as `:stopIfTrue` */
  get stopIfTrue() {
    return this._g(":stopIfTrue");
  }
  set stopIfTrue(v) {
    this._s(":stopIfTrue", v);
  }
  /** aboveAverage. Serialized as `:aboveAverage` */
  get aboveAverage() {
    return this._g(":aboveAverage");
  }
  set aboveAverage(v) {
    this._s(":aboveAverage", v);
  }
  /** percent. Serialized as `:percent` */
  get percent() {
    return this._g(":percent");
  }
  set percent(v) {
    this._s(":percent", v);
  }
  /** bottom. Serialized as `:bottom` */
  get bottom() {
    return this._g(":bottom");
  }
  set bottom(v) {
    this._s(":bottom", v);
  }
  /** operator. Serialized as `:operator` */
  get operator() {
    return this._g(":operator");
  }
  set operator(v) {
    this._s(":operator", v);
  }
  /** text. Serialized as `:text` */
  get text() {
    return this._g(":text");
  }
  set text(v) {
    this._s(":text", v);
  }
  /** timePeriod. Serialized as `:timePeriod` */
  get timePeriod() {
    return this._g(":timePeriod");
  }
  set timePeriod(v) {
    this._s(":timePeriod", v);
  }
  /** rank. Serialized as `:rank` */
  get rank() {
    return this._g(":rank");
  }
  set rank(v) {
    this._s(":rank", v);
  }
  /** stdDev. Serialized as `:stdDev` */
  get standardDeviation() {
    return this._g(":stdDev");
  }
  set standardDeviation(v) {
    this._s(":stdDev", v);
  }
  /** equalAverage. Serialized as `:equalAverage` */
  get equalAverage() {
    return this._g(":equalAverage");
  }
  set equalAverage(v) {
    this._s(":equalAverage", v);
  }
  /** activePresent. Serialized as `:activePresent` */
  get activePresent() {
    return this._g(":activePresent");
  }
  set activePresent(v) {
    this._s(":activePresent", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class ConditionalFormatting extends OxmlCompositeElement {
  static _Q = "x14:conditionalFormatting";
  static _A = [":pivot"];
  /** pivot. Serialized as `:pivot` */
  get pivot() {
    return this._g(":pivot");
  }
  set pivot(v) {
    this._s(":pivot", v);
  }
}
class SlicerCacheDefinition extends OxmlPartRootElement {
  static _Q = "x14:slicerCacheDefinition";
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
  /** Returns SlicerCachePivotTables. */
  get slicerCachePivotTables() {
    return this._f(SlicerCachePivotTables);
  }
  /** Returns SlicerCacheData. */
  get slicerCacheData() {
    return this._f(SlicerCacheData);
  }
  /** Returns SlicerCacheDefinitionExtensionList. */
  get slicerCacheDefinitionExtensionList() {
    return this._f(SlicerCacheDefinitionExtensionList);
  }
}
class Slicers extends OxmlPartRootElement {
  static _Q = "x14:slicers";
}
class FormControlProperties extends OxmlPartRootElement {
  static _Q = "x14:formControlPr";
  static _A = [":objectType", ":checked", ":colored", ":dropLines", ":dropStyle", ":dx", ":firstButton", ":fmlaGroup", ":fmlaLink", ":fmlaRange", ":fmlaTxbx", ":horiz", ":inc", ":justLastX", ":lockText", ":max", ":min", ":multiSel", ":noThreeD", ":noThreeD2", ":page", ":sel", ":seltype", ":textHAlign", ":textVAlign", ":val", ":widthMin", ":editVal", ":multiLine", ":verticalBar", ":passwordEdit"];
  /** objectType. Serialized as `:objectType` */
  get objectType() {
    return this._g(":objectType");
  }
  set objectType(v) {
    this._s(":objectType", v);
  }
  /** checked. Serialized as `:checked` */
  get checked() {
    return this._g(":checked");
  }
  set checked(v) {
    this._s(":checked", v);
  }
  /** colored. Serialized as `:colored` */
  get colored() {
    return this._g(":colored");
  }
  set colored(v) {
    this._s(":colored", v);
  }
  /** dropLines. Serialized as `:dropLines` */
  get dropLines() {
    return this._g(":dropLines");
  }
  set dropLines(v) {
    this._s(":dropLines", v);
  }
  /** dropStyle. Serialized as `:dropStyle` */
  get dropStyle() {
    return this._g(":dropStyle");
  }
  set dropStyle(v) {
    this._s(":dropStyle", v);
  }
  /** dx. Serialized as `:dx` */
  get scrollBarWidth() {
    return this._g(":dx");
  }
  set scrollBarWidth(v) {
    this._s(":dx", v);
  }
  /** firstButton. Serialized as `:firstButton` */
  get firstButton() {
    return this._g(":firstButton");
  }
  set firstButton(v) {
    this._s(":firstButton", v);
  }
  /** fmlaGroup. Serialized as `:fmlaGroup` */
  get fmlaGroup() {
    return this._g(":fmlaGroup");
  }
  set fmlaGroup(v) {
    this._s(":fmlaGroup", v);
  }
  /** fmlaLink. Serialized as `:fmlaLink` */
  get fmlaLink() {
    return this._g(":fmlaLink");
  }
  set fmlaLink(v) {
    this._s(":fmlaLink", v);
  }
  /** fmlaRange. Serialized as `:fmlaRange` */
  get fmlaRange() {
    return this._g(":fmlaRange");
  }
  set fmlaRange(v) {
    this._s(":fmlaRange", v);
  }
  /** fmlaTxbx. Serialized as `:fmlaTxbx` */
  get fmlaTextbox() {
    return this._g(":fmlaTxbx");
  }
  set fmlaTextbox(v) {
    this._s(":fmlaTxbx", v);
  }
  /** horiz. Serialized as `:horiz` */
  get horizontal() {
    return this._g(":horiz");
  }
  set horizontal(v) {
    this._s(":horiz", v);
  }
  /** inc. Serialized as `:inc` */
  get incremental() {
    return this._g(":inc");
  }
  set incremental(v) {
    this._s(":inc", v);
  }
  /** justLastX. Serialized as `:justLastX` */
  get justLastX() {
    return this._g(":justLastX");
  }
  set justLastX(v) {
    this._s(":justLastX", v);
  }
  /** lockText. Serialized as `:lockText` */
  get lockText() {
    return this._g(":lockText");
  }
  set lockText(v) {
    this._s(":lockText", v);
  }
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
  /** multiSel. Serialized as `:multiSel` */
  get multipleSelection() {
    return this._g(":multiSel");
  }
  set multipleSelection(v) {
    this._s(":multiSel", v);
  }
  /** noThreeD. Serialized as `:noThreeD` */
  get noThreeD() {
    return this._g(":noThreeD");
  }
  set noThreeD(v) {
    this._s(":noThreeD", v);
  }
  /** noThreeD2. Serialized as `:noThreeD2` */
  get noThreeD2() {
    return this._g(":noThreeD2");
  }
  set noThreeD2(v) {
    this._s(":noThreeD2", v);
  }
  /** page. Serialized as `:page` */
  get page() {
    return this._g(":page");
  }
  set page(v) {
    this._s(":page", v);
  }
  /** sel. Serialized as `:sel` */
  get selected() {
    return this._g(":sel");
  }
  set selected(v) {
    this._s(":sel", v);
  }
  /** seltype. Serialized as `:seltype` */
  get selectionType() {
    return this._g(":seltype");
  }
  set selectionType(v) {
    this._s(":seltype", v);
  }
  /** textHAlign. Serialized as `:textHAlign` */
  get textHorizontalAlign() {
    return this._g(":textHAlign");
  }
  set textHorizontalAlign(v) {
    this._s(":textHAlign", v);
  }
  /** textVAlign. Serialized as `:textVAlign` */
  get textVerticalAlign() {
    return this._g(":textVAlign");
  }
  set textVerticalAlign(v) {
    this._s(":textVAlign", v);
  }
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** widthMin. Serialized as `:widthMin` */
  get minimumWidth() {
    return this._g(":widthMin");
  }
  set minimumWidth(v) {
    this._s(":widthMin", v);
  }
  /** editVal. Serialized as `:editVal` */
  get editVal() {
    return this._g(":editVal");
  }
  set editVal(v) {
    this._s(":editVal", v);
  }
  /** multiLine. Serialized as `:multiLine` */
  get multipleLines() {
    return this._g(":multiLine");
  }
  set multipleLines(v) {
    this._s(":multiLine", v);
  }
  /** verticalBar. Serialized as `:verticalBar` */
  get verticalBar() {
    return this._g(":verticalBar");
  }
  set verticalBar(v) {
    this._s(":verticalBar", v);
  }
  /** passwordEdit. Serialized as `:passwordEdit` */
  get passwordEdit() {
    return this._g(":passwordEdit");
  }
  set passwordEdit(v) {
    this._s(":passwordEdit", v);
  }
  /** Returns ListItems. */
  get listItems() {
    return this._f(ListItems);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class DatastoreItem extends OxmlPartRootElement {
  static _Q = "x14:datastoreItem";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SourceConnection extends OxmlLeafElement {
  static _Q = "x14:sourceConnection";
  static _A = [":name"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class SortCondition extends OxmlLeafElement {
  static _Q = "x14:sortCondition";
  static _A = [":descending", ":sortBy", ":ref", ":customList", ":dxfId", ":iconSet", ":iconId"];
  /** descending. Serialized as `:descending` */
  get descending() {
    return this._g(":descending");
  }
  set descending(v) {
    this._s(":descending", v);
  }
  /** sortBy. Serialized as `:sortBy` */
  get sortBy() {
    return this._g(":sortBy");
  }
  set sortBy(v) {
    this._s(":sortBy", v);
  }
  /** ref. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** customList. Serialized as `:customList` */
  get customList() {
    return this._g(":customList");
  }
  set customList(v) {
    this._s(":customList", v);
  }
  /** dxfId. Serialized as `:dxfId` */
  get formatId() {
    return this._g(":dxfId");
  }
  set formatId(v) {
    this._s(":dxfId", v);
  }
  /** iconSet. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** iconId. Serialized as `:iconId` */
  get iconId() {
    return this._g(":iconId");
  }
  set iconId(v) {
    this._s(":iconId", v);
  }
}
class CustomFilters extends OxmlCompositeElement {
  static _Q = "x14:customFilters";
  static _A = [":and"];
  /** and. Serialized as `:and` */
  get and() {
    return this._g(":and");
  }
  set and(v) {
    this._s(":and", v);
  }
}
class Filter extends OxmlLeafElement {
  static _Q = "x14:filter";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class IconFilter extends OxmlLeafElement {
  static _Q = "x14:iconFilter";
  static _A = [":iconSet", ":iconId"];
  /** iconSet. Serialized as `:iconSet` */
  get iconSet() {
    return this._g(":iconSet");
  }
  set iconSet(v) {
    this._s(":iconSet", v);
  }
  /** iconId. Serialized as `:iconId` */
  get iconId() {
    return this._g(":iconId");
  }
  set iconId(v) {
    this._s(":iconId", v);
  }
}
class Id extends OxmlLeafTextElement {
  static _Q = "x14:id";
}
class CacheField extends OxmlLeafElement {
  static _Q = "x14:cacheField";
  static _A = [":ignore"];
  /** ignore. Serialized as `:ignore` */
  get ignore() {
    return this._g(":ignore");
  }
  set ignore(v) {
    this._s(":ignore", v);
  }
}
class PivotHierarchy extends OxmlLeafElement {
  static _Q = "x14:pivotHierarchy";
  static _A = [":ignore"];
  /** ignore. Serialized as `:ignore` */
  get ignore() {
    return this._g(":ignore");
  }
  set ignore(v) {
    this._s(":ignore", v);
  }
}
class OleItem extends OxmlCompositeElement {
  static _Q = "x14:oleItem";
  static _A = [":name", ":icon", ":advise", ":preferPic"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** icon. Serialized as `:icon` */
  get icon() {
    return this._g(":icon");
  }
  set icon(v) {
    this._s(":icon", v);
  }
  /** advise. Serialized as `:advise` */
  get advise() {
    return this._g(":advise");
  }
  set advise(v) {
    this._s(":advise", v);
  }
  /** preferPic. Serialized as `:preferPic` */
  get preferPicture() {
    return this._g(":preferPic");
  }
  set preferPicture(v) {
    this._s(":preferPic", v);
  }
  /** Returns DdeValues. */
  get ddeValues() {
    return this._f(DdeValues);
  }
}
class DifferentialFormats extends OxmlCompositeElement {
  static _Q = "x14:dxfs";
  static _A = [":count"];
  /** Format Count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class SlicerStyles extends OxmlCompositeElement {
  static _Q = "x14:slicerStyles";
  static _A = [":defaultSlicerStyle"];
  /** defaultSlicerStyle. Serialized as `:defaultSlicerStyle` */
  get defaultSlicerStyle() {
    return this._g(":defaultSlicerStyle");
  }
  set defaultSlicerStyle(v) {
    this._s(":defaultSlicerStyle", v);
  }
}
class Table extends OxmlLeafElement {
  static _Q = "x14:table";
  static _A = [":altText", ":altTextSummary"];
  /** altText. Serialized as `:altText` */
  get altText() {
    return this._g(":altText");
  }
  set altText(v) {
    this._s(":altText", v);
  }
  /** altTextSummary. Serialized as `:altTextSummary` */
  get altTextSummary() {
    return this._g(":altTextSummary");
  }
  set altTextSummary(v) {
    this._s(":altTextSummary", v);
  }
}
class Connection extends OxmlCompositeElement {
  static _Q = "x14:connection";
  static _A = [":culture", ":embeddedDataId"];
  /** culture. Serialized as `:culture` */
  get culture() {
    return this._g(":culture");
  }
  set culture(v) {
    this._s(":culture", v);
  }
  /** embeddedDataId. Serialized as `:embeddedDataId` */
  get embeddedDataId() {
    return this._g(":embeddedDataId");
  }
  set embeddedDataId(v) {
    this._s(":embeddedDataId", v);
  }
  /** Returns CalculatedMembers. */
  get calculatedMembers() {
    return this._f(CalculatedMembers);
  }
}
class PivotCacheDefinition extends OxmlLeafElement {
  static _Q = "x14:pivotCacheDefinition";
  static _A = [":slicerData", ":pivotCacheId", ":supportSubqueryNonVisual", ":supportSubqueryCalcMem", ":supportAddCalcMems"];
  /** slicerData. Serialized as `:slicerData` */
  get slicerData() {
    return this._g(":slicerData");
  }
  set slicerData(v) {
    this._s(":slicerData", v);
  }
  /** pivotCacheId. Serialized as `:pivotCacheId` */
  get pivotCacheId() {
    return this._g(":pivotCacheId");
  }
  set pivotCacheId(v) {
    this._s(":pivotCacheId", v);
  }
  /** supportSubqueryNonVisual. Serialized as `:supportSubqueryNonVisual` */
  get supportSubqueryNonVisual() {
    return this._g(":supportSubqueryNonVisual");
  }
  set supportSubqueryNonVisual(v) {
    this._s(":supportSubqueryNonVisual", v);
  }
  /** supportSubqueryCalcMem. Serialized as `:supportSubqueryCalcMem` */
  get supportSubqueryCalcMem() {
    return this._g(":supportSubqueryCalcMem");
  }
  set supportSubqueryCalcMem(v) {
    this._s(":supportSubqueryCalcMem", v);
  }
  /** supportAddCalcMems. Serialized as `:supportAddCalcMems` */
  get supportAddCalcMems() {
    return this._g(":supportAddCalcMems");
  }
  set supportAddCalcMems(v) {
    this._s(":supportAddCalcMems", v);
  }
}
class PivotTableDefinition extends OxmlCompositeElement {
  static _Q = "x14:pivotTableDefinition";
  static _A = [":fillDownLabelsDefault", ":visualTotalsForSets", ":calculatedMembersInFilters", ":altText", ":altTextSummary", ":enableEdit", ":autoApply", ":allocationMethod", ":weightExpression", ":hideValuesRow"];
  /** fillDownLabelsDefault. Serialized as `:fillDownLabelsDefault` */
  get fillDownLabelsDefault() {
    return this._g(":fillDownLabelsDefault");
  }
  set fillDownLabelsDefault(v) {
    this._s(":fillDownLabelsDefault", v);
  }
  /** visualTotalsForSets. Serialized as `:visualTotalsForSets` */
  get visualTotalsForSets() {
    return this._g(":visualTotalsForSets");
  }
  set visualTotalsForSets(v) {
    this._s(":visualTotalsForSets", v);
  }
  /** calculatedMembersInFilters. Serialized as `:calculatedMembersInFilters` */
  get calculatedMembersInFilters() {
    return this._g(":calculatedMembersInFilters");
  }
  set calculatedMembersInFilters(v) {
    this._s(":calculatedMembersInFilters", v);
  }
  /** altText. Serialized as `:altText` */
  get altText() {
    return this._g(":altText");
  }
  set altText(v) {
    this._s(":altText", v);
  }
  /** altTextSummary. Serialized as `:altTextSummary` */
  get altTextSummary() {
    return this._g(":altTextSummary");
  }
  set altTextSummary(v) {
    this._s(":altTextSummary", v);
  }
  /** enableEdit. Serialized as `:enableEdit` */
  get enableEdit() {
    return this._g(":enableEdit");
  }
  set enableEdit(v) {
    this._s(":enableEdit", v);
  }
  /** autoApply. Serialized as `:autoApply` */
  get autoApply() {
    return this._g(":autoApply");
  }
  set autoApply(v) {
    this._s(":autoApply", v);
  }
  /** allocationMethod. Serialized as `:allocationMethod` */
  get allocationMethod() {
    return this._g(":allocationMethod");
  }
  set allocationMethod(v) {
    this._s(":allocationMethod", v);
  }
  /** weightExpression. Serialized as `:weightExpression` */
  get weightExpression() {
    return this._g(":weightExpression");
  }
  set weightExpression(v) {
    this._s(":weightExpression", v);
  }
  /** hideValuesRow. Serialized as `:hideValuesRow` */
  get hideValuesRow() {
    return this._g(":hideValuesRow");
  }
  set hideValuesRow(v) {
    this._s(":hideValuesRow", v);
  }
  /** Returns PivotEdits. */
  get pivotEdits() {
    return this._f(PivotEdits);
  }
  /** Returns PivotChanges. */
  get pivotChanges() {
    return this._f(PivotChanges);
  }
  /** Returns ConditionalFormats. */
  get conditionalFormats() {
    return this._f(ConditionalFormats);
  }
}
class PivotField extends OxmlLeafElement {
  static _Q = "x14:pivotField";
  static _A = [":fillDownLabels", ":ignore"];
  /** fillDownLabels. Serialized as `:fillDownLabels` */
  get fillDownLabels() {
    return this._g(":fillDownLabels");
  }
  set fillDownLabels(v) {
    this._s(":fillDownLabels", v);
  }
  /** ignore. Serialized as `:ignore` */
  get ignore() {
    return this._g(":ignore");
  }
  set ignore(v) {
    this._s(":ignore", v);
  }
}
class DataField extends OxmlLeafElement {
  static _Q = "x14:dataField";
  static _A = [":pivotShowAs", ":sourceField", ":uniqueName"];
  /** pivotShowAs. Serialized as `:pivotShowAs` */
  get pivotShowAs() {
    return this._g(":pivotShowAs");
  }
  set pivotShowAs(v) {
    this._s(":pivotShowAs", v);
  }
  /** sourceField. Serialized as `:sourceField` */
  get sourceField() {
    return this._g(":sourceField");
  }
  set sourceField(v) {
    this._s(":sourceField", v);
  }
  /** uniqueName. Serialized as `:uniqueName` */
  get uniqueName() {
    return this._g(":uniqueName");
  }
  set uniqueName(v) {
    this._s(":uniqueName", v);
  }
}
class CacheHierarchy extends OxmlCompositeElement {
  static _Q = "x14:cacheHierarchy";
  static _A = [":flattenHierarchies", ":measuresSet", ":hierarchizeDistinct", ":ignore"];
  /** flattenHierarchies. Serialized as `:flattenHierarchies` */
  get flattenHierarchies() {
    return this._g(":flattenHierarchies");
  }
  set flattenHierarchies(v) {
    this._s(":flattenHierarchies", v);
  }
  /** measuresSet. Serialized as `:measuresSet` */
  get measuresSet() {
    return this._g(":measuresSet");
  }
  set measuresSet(v) {
    this._s(":measuresSet", v);
  }
  /** hierarchizeDistinct. Serialized as `:hierarchizeDistinct` */
  get hierarchizeDistinct() {
    return this._g(":hierarchizeDistinct");
  }
  set hierarchizeDistinct(v) {
    this._s(":hierarchizeDistinct", v);
  }
  /** ignore. Serialized as `:ignore` */
  get ignore() {
    return this._g(":ignore");
  }
  set ignore(v) {
    this._s(":ignore", v);
  }
  /** Returns SetLevels. */
  get setLevels() {
    return this._f(SetLevels);
  }
}
class CalculatedMember extends OxmlCompositeElement {
  static _Q = "x14:calculatedMember";
  static _A = [":displayFolder", ":flattenHierarchies", ":dynamicSet", ":hierarchizeDistinct", ":mdxLong"];
  /** displayFolder. Serialized as `:displayFolder` */
  get displayFolder() {
    return this._g(":displayFolder");
  }
  set displayFolder(v) {
    this._s(":displayFolder", v);
  }
  /** flattenHierarchies. Serialized as `:flattenHierarchies` */
  get flattenHierarchies() {
    return this._g(":flattenHierarchies");
  }
  set flattenHierarchies(v) {
    this._s(":flattenHierarchies", v);
  }
  /** dynamicSet. Serialized as `:dynamicSet` */
  get dynamicSet() {
    return this._g(":dynamicSet");
  }
  set dynamicSet(v) {
    this._s(":dynamicSet", v);
  }
  /** hierarchizeDistinct. Serialized as `:hierarchizeDistinct` */
  get hierarchizeDistinct() {
    return this._g(":hierarchizeDistinct");
  }
  set hierarchizeDistinct(v) {
    this._s(":hierarchizeDistinct", v);
  }
  /** mdxLong. Serialized as `:mdxLong` */
  get mdxLong() {
    return this._g(":mdxLong");
  }
  set mdxLong(v) {
    this._s(":mdxLong", v);
  }
  /** Returns TupleSet. */
  get tupleSet() {
    return this._f(TupleSet);
  }
}
class WorkbookProperties extends OxmlLeafElement {
  static _Q = "x14:workbookPr";
  static _A = [":defaultImageDpi", ":discardImageEditData", ":accuracyVersion"];
  /** defaultImageDpi. Serialized as `:defaultImageDpi` */
  get defaultImageDpi() {
    return this._g(":defaultImageDpi");
  }
  set defaultImageDpi(v) {
    this._s(":defaultImageDpi", v);
  }
  /** discardImageEditData. Serialized as `:discardImageEditData` */
  get discardImageEditData() {
    return this._g(":discardImageEditData");
  }
  set discardImageEditData(v) {
    this._s(":discardImageEditData", v);
  }
  /** accuracyVersion. Serialized as `:accuracyVersion` */
  get accuracyVersion() {
    return this._g(":accuracyVersion");
  }
  set accuracyVersion(v) {
    this._s(":accuracyVersion", v);
  }
}
class SlicerCaches extends OxmlCompositeElement {
  static _Q = "x14:slicerCaches";
}
class PivotCaches extends OxmlCompositeElement {
  static _Q = "x14:pivotCaches";
}
class DefinedNames extends OxmlCompositeElement {
  static _Q = "x14:definedNames";
}
class IgnoredErrors extends OxmlCompositeElement {
  static _Q = "x14:ignoredErrors";
}
class ProtectedRanges extends OxmlCompositeElement {
  static _Q = "x14:protectedRanges";
}
class SlicerList extends OxmlCompositeElement {
  static _Q = "x14:slicerList";
}
class SparklineGroups extends OxmlCompositeElement {
  static _Q = "x14:sparklineGroups";
}
class DataValidations extends OxmlCompositeElement {
  static _Q = "x14:dataValidations";
  static _A = [":disablePrompts", ":xWindow", ":yWindow", ":count"];
  /** disablePrompts. Serialized as `:disablePrompts` */
  get disablePrompts() {
    return this._g(":disablePrompts");
  }
  set disablePrompts(v) {
    this._s(":disablePrompts", v);
  }
  /** xWindow. Serialized as `:xWindow` */
  get xWindow() {
    return this._g(":xWindow");
  }
  set xWindow(v) {
    this._s(":xWindow", v);
  }
  /** yWindow. Serialized as `:yWindow` */
  get yWindow() {
    return this._g(":yWindow");
  }
  set yWindow(v) {
    this._s(":yWindow", v);
  }
  /** count. Serialized as `:count` */
  get count() {
    return this._g(":count");
  }
  set count(v) {
    this._s(":count", v);
  }
}
class ConditionalFormattings extends OxmlCompositeElement {
  static _Q = "x14:conditionalFormattings";
}
function initOffice2010ExcelNamespace() {
  SlicerCacheDefinitionExtensionList._C = {
    "x:ext": XSlicerCacheDefinitionExtension
  };
  SlicerCacheData._C = {
    "x14:olap": OlapSlicerCache,
    "x14:tabular": TabularSlicerCache
  };
  SlicerCachePivotTables._C = {
    "x14:pivotTable": SlicerCachePivotTable
  };
  TabularSlicerCacheItem._D = {
    ":x": new OxmlAttr(":x", OxmlType.UInt32Value),
    ":s": new OxmlAttr(":s", OxmlType.BooleanValue),
    ":nd": new OxmlAttr(":nd", OxmlType.BooleanValue)
  };
  TabularSlicerCacheItems._C = {
    "x14:i": TabularSlicerCacheItem
  };
  TabularSlicerCacheItems._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  OlapSlicerCacheSelection._C = {
    "x14:p": OlapSlicerCacheItemParent
  };
  OlapSlicerCacheSelection._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue)
  };
  OlapSlicerCacheSelections._C = {
    "x14:selection": OlapSlicerCacheSelection
  };
  OlapSlicerCacheSelections._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  OlapSlicerCacheLevelsData._C = {
    "x14:level": OlapSlicerCacheLevelData
  };
  OlapSlicerCacheLevelsData._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  OlapSlicerCacheLevelData._C = {
    "x14:ranges": OlapSlicerCacheRanges
  };
  OlapSlicerCacheLevelData._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":sourceCaption": new OxmlAttr(":sourceCaption", OxmlType.StringValue),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value),
    ":sortOrder": new OxmlAttr(":sortOrder", OxmlType.EnumValue, OlapSlicerCacheSortOrderValuesArray),
    ":crossFilter": new OxmlAttr(":crossFilter", OxmlType.EnumValue, SlicerCacheCrossFilterValuesArray)
  };
  OlapSlicerCacheRanges._C = {
    "x14:range": OlapSlicerCacheRange
  };
  OlapSlicerCacheRange._C = {
    "x14:i": OlapSlicerCacheItem
  };
  OlapSlicerCacheRange._D = {
    ":startItem": new OxmlAttr(":startItem", OxmlType.UInt32Value)
  };
  OlapSlicerCacheItem._C = {
    "x14:p": OlapSlicerCacheItemParent
  };
  OlapSlicerCacheItem._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":c": new OxmlAttr(":c", OxmlType.StringValue),
    ":nd": new OxmlAttr(":nd", OxmlType.BooleanValue)
  };
  OlapSlicerCacheItemParent._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue)
  };
  SlicerCachePivotTable._D = {
    ":tabId": new OxmlAttr(":tabId", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  TabularSlicerCache._C = {
    "x14:items": TabularSlicerCacheItems,
    "x14:extLst": ExtensionList
  };
  TabularSlicerCache._D = {
    ":pivotCacheId": new OxmlAttr(":pivotCacheId", OxmlType.UInt32Value),
    ":sortOrder": new OxmlAttr(":sortOrder", OxmlType.EnumValue, TabularSlicerCacheSortOrderValuesArray),
    ":customListSort": new OxmlAttr(":customListSort", OxmlType.BooleanValue),
    ":showMissing": new OxmlAttr(":showMissing", OxmlType.BooleanValue),
    ":crossFilter": new OxmlAttr(":crossFilter", OxmlType.EnumValue, SlicerCacheCrossFilterValuesArray)
  };
  OlapSlicerCache._C = {
    "x14:levels": OlapSlicerCacheLevelsData,
    "x14:selections": OlapSlicerCacheSelections,
    "x14:extLst": ExtensionList
  };
  OlapSlicerCache._D = {
    ":pivotCacheId": new OxmlAttr(":pivotCacheId", OxmlType.UInt32Value)
  };
  Slicer._C = {
    "x14:extLst": ExtensionList
  };
  Slicer._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":cache": new OxmlAttr(":cache", OxmlType.StringValue),
    ":caption": new OxmlAttr(":caption", OxmlType.StringValue),
    ":startItem": new OxmlAttr(":startItem", OxmlType.UInt32Value),
    ":columnCount": new OxmlAttr(":columnCount", OxmlType.UInt32Value),
    ":showCaption": new OxmlAttr(":showCaption", OxmlType.BooleanValue),
    ":level": new OxmlAttr(":level", OxmlType.UInt32Value),
    ":style": new OxmlAttr(":style", OxmlType.StringValue),
    ":lockedPosition": new OxmlAttr(":lockedPosition", OxmlType.BooleanValue),
    ":rowHeight": new OxmlAttr(":rowHeight", OxmlType.UInt32Value)
  };
  ListItems._C = {
    "x14:item": ListItem,
    "x14:extLst": ExtensionList
  };
  ListItem._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  CustomFilter._D = {
    ":operator": new OxmlAttr(":operator", OxmlType.EnumValue, FilterOperatorValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ProtectedRange._C = {
    "xne:sqref": XneReferenceSequence
  };
  ProtectedRange._D = {
    ":password": new OxmlAttr(":password", OxmlType.HexBinaryValue),
    ":algorithmName": new OxmlAttr(":algorithmName", OxmlType.StringValue),
    ":hashValue": new OxmlAttr(":hashValue", OxmlType.Base64BinaryValue),
    ":saltValue": new OxmlAttr(":saltValue", OxmlType.Base64BinaryValue),
    ":spinCount": new OxmlAttr(":spinCount", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":securityDescriptor": new OxmlAttr(":securityDescriptor", OxmlType.StringValue)
  };
  IgnoredError._C = {
    "xne:sqref": XneReferenceSequence
  };
  IgnoredError._D = {
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
  SlicerStyleElement._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, SlicerStyleTypeValuesArray),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value)
  };
  SlicerStyle._C = {
    "x14:slicerStyleElements": SlicerStyleElements
  };
  SlicerStyle._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  PivotAreas._C = {
    "x:pivotArea": XPivotArea
  };
  PivotAreas._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConditionalFormat._C = {
    "x14:pivotAreas": PivotAreas,
    "x14:extLst": ExtensionList
  };
  ConditionalFormat._D = {
    ":scope": new OxmlAttr(":scope", OxmlType.EnumValue, ScopeValuesArray),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, RuleValuesArray),
    ":priority": new OxmlAttr(":priority", OxmlType.UInt32Value),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  DdeValues._C = {
    "x:value": XValue
  };
  DdeValues._D = {
    ":rows": new OxmlAttr(":rows", OxmlType.UInt32Value),
    ":cols": new OxmlAttr(":cols", OxmlType.UInt32Value)
  };
  SlicerStyleElements._C = {
    "x14:slicerStyleElement": SlicerStyleElement
  };
  PivotEditValue._D = {
    ":valueType": new OxmlAttr(":valueType", OxmlType.EnumValue, PivotEditValueTypeValuesArray)
  };
  PivotChange._C = {
    "x14:editValue": PivotEditValue,
    "x14:tupleItems": TupleItems,
    "x14:extLst": ExtensionList
  };
  PivotChange._D = {
    ":allocationMethod": new OxmlAttr(":allocationMethod", OxmlType.EnumValue, AllocationMethodValuesArray),
    ":weightExpression": new OxmlAttr(":weightExpression", OxmlType.StringValue)
  };
  PivotArea._C = {
    "x:references": XPivotAreaReferences,
    "x:extLst": XExtensionList
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
  TupleItems._C = {
    "x14:tupleItem": Xstring
  };
  PivotUserEdit._C = {
    "xne:f": XneFormula,
    "x14:editValue": PivotEditValue
  };
  PivotEdit._C = {
    "x14:userEdit": PivotUserEdit,
    "x14:tupleItems": TupleItems,
    "x14:pivotArea": PivotArea,
    "x14:extLst": ExtensionList
  };
  CalculatedMembers._C = {
    "x:calculatedMember": XCalculatedMember
  };
  CalculatedMembers._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConditionalFormats._C = {
    "x14:conditionalFormat": ConditionalFormat
  };
  ConditionalFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  PivotChanges._C = {
    "x14:pivotChange": PivotChange
  };
  PivotEdits._C = {
    "x14:pivotEdit": PivotEdit
  };
  ConditionalFormattingIcon._D = {
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetTypeValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  ConditionalFormattingValueObject._C = {
    "xne:f": XneFormula,
    "x14:extLst": ExtensionList
  };
  ConditionalFormattingValueObject._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConditionalFormattingValueObjectTypeValuesArray),
    ":gte": new OxmlAttr(":gte", OxmlType.BooleanValue)
  };
  DifferentialType._C = {
    "x:font": XFont,
    "x:numFmt": XNumberingFormat,
    "x:fill": XFill,
    "x:alignment": XAlignment,
    "x:border": XBorder,
    "x:protection": XProtection,
    "x:extLst": XExtensionList
  };
  IconSet._C = {
    "x14:cfvo": ConditionalFormattingValueObject,
    "x14:cfIcon": ConditionalFormattingIcon
  };
  IconSet._D = {
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetTypeValuesArray),
    ":showValue": new OxmlAttr(":showValue", OxmlType.BooleanValue),
    ":percent": new OxmlAttr(":percent", OxmlType.BooleanValue),
    ":reverse": new OxmlAttr(":reverse", OxmlType.BooleanValue),
    ":custom": new OxmlAttr(":custom", OxmlType.BooleanValue)
  };
  DataBar._C = {
    "x14:cfvo": ConditionalFormattingValueObject,
    "x14:fillColor": FillColor,
    "x14:borderColor": BorderColor,
    "x14:negativeFillColor": NegativeFillColor,
    "x14:negativeBorderColor": NegativeBorderColor,
    "x14:axisColor": BarAxisColor
  };
  DataBar._D = {
    ":minLength": new OxmlAttr(":minLength", OxmlType.UInt32Value),
    ":maxLength": new OxmlAttr(":maxLength", OxmlType.UInt32Value),
    ":showValue": new OxmlAttr(":showValue", OxmlType.BooleanValue),
    ":border": new OxmlAttr(":border", OxmlType.BooleanValue),
    ":gradient": new OxmlAttr(":gradient", OxmlType.BooleanValue),
    ":direction": new OxmlAttr(":direction", OxmlType.EnumValue, DataBarDirectionValuesArray),
    ":negativeBarColorSameAsPositive": new OxmlAttr(":negativeBarColorSameAsPositive", OxmlType.BooleanValue),
    ":negativeBarBorderColorSameAsPositive": new OxmlAttr(":negativeBarBorderColorSameAsPositive", OxmlType.BooleanValue),
    ":axisPosition": new OxmlAttr(":axisPosition", OxmlType.EnumValue, DataBarAxisPositionValuesArray)
  };
  ColorScale._C = {
    "x14:cfvo": ConditionalFormattingValueObject,
    "x14:color": Color
  };
  SetLevels._C = {
    "x14:setLevel": SetLevel
  };
  SetLevels._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SetLevel._D = {
    ":hierarchy": new OxmlAttr(":hierarchy", OxmlType.Int32Value)
  };
  TupleSetRowItem._D = {
    ":u": new OxmlAttr(":u", OxmlType.StringValue),
    ":d": new OxmlAttr(":d", OxmlType.StringValue)
  };
  TupleSetRow._C = {
    "x14:rowItem": TupleSetRowItem
  };
  TupleSetHeader._D = {
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue),
    ":hierarchyName": new OxmlAttr(":hierarchyName", OxmlType.StringValue)
  };
  TupleSetRows._C = {
    "x14:row": TupleSetRow
  };
  TupleSetHeaders._C = {
    "x14:header": TupleSetHeader
  };
  TupleSet._C = {
    "x14:headers": TupleSetHeaders,
    "x14:rows": TupleSetRows
  };
  TupleSet._D = {
    ":rowCount": new OxmlAttr(":rowCount", OxmlType.UInt32Value),
    ":columnCount": new OxmlAttr(":columnCount", OxmlType.UInt32Value)
  };
  ArgumentDescription._D = {
    ":index": new OxmlAttr(":index", OxmlType.UInt32Value)
  };
  ArgumentDescriptions._C = {
    "x14:argumentDescription": ArgumentDescription
  };
  ArgumentDescriptions._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  DefinedName._C = {
    "x14:argumentDescriptions": ArgumentDescriptions
  };
  DefinedName._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  SlicerCache._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SlicerRef._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Sparkline._C = {
    "xne:f": XneFormula,
    "xne:sqref": XneReferenceSequence
  };
  Sparklines._C = {
    "x14:sparkline": Sparkline
  };
  ColorType._D = {
    ":auto": new OxmlAttr(":auto", OxmlType.BooleanValue),
    ":indexed": new OxmlAttr(":indexed", OxmlType.UInt32Value),
    ":rgb": new OxmlAttr(":rgb", OxmlType.HexBinaryValue),
    ":theme": new OxmlAttr(":theme", OxmlType.UInt32Value),
    ":tint": new OxmlAttr(":tint", OxmlType.DoubleValue)
  };
  SparklineGroup._C = {
    "x14:colorSeries": SeriesColor,
    "x14:colorNegative": NegativeColor,
    "x14:colorAxis": AxisColor,
    "x14:colorMarkers": MarkersColor,
    "x14:colorFirst": FirstMarkerColor,
    "x14:colorLast": LastMarkerColor,
    "x14:colorHigh": HighMarkerColor,
    "x14:colorLow": LowMarkerColor,
    "xne:f": XneFormula,
    "x14:sparklines": Sparklines
  };
  SparklineGroup._D = {
    ":manualMax": new OxmlAttr(":manualMax", OxmlType.DoubleValue),
    ":manualMin": new OxmlAttr(":manualMin", OxmlType.DoubleValue),
    ":lineWeight": new OxmlAttr(":lineWeight", OxmlType.DoubleValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, SparklineTypeValuesArray),
    ":dateAxis": new OxmlAttr(":dateAxis", OxmlType.BooleanValue),
    ":displayEmptyCellsAs": new OxmlAttr(":displayEmptyCellsAs", OxmlType.EnumValue, DisplayBlanksAsValuesArray),
    ":markers": new OxmlAttr(":markers", OxmlType.BooleanValue),
    ":high": new OxmlAttr(":high", OxmlType.BooleanValue),
    ":low": new OxmlAttr(":low", OxmlType.BooleanValue),
    ":first": new OxmlAttr(":first", OxmlType.BooleanValue),
    ":last": new OxmlAttr(":last", OxmlType.BooleanValue),
    ":negative": new OxmlAttr(":negative", OxmlType.BooleanValue),
    ":displayXAxis": new OxmlAttr(":displayXAxis", OxmlType.BooleanValue),
    ":displayHidden": new OxmlAttr(":displayHidden", OxmlType.BooleanValue),
    ":minAxisType": new OxmlAttr(":minAxisType", OxmlType.EnumValue, SparklineAxisMinMaxValuesArray),
    ":maxAxisType": new OxmlAttr(":maxAxisType", OxmlType.EnumValue, SparklineAxisMinMaxValuesArray),
    ":rightToLeft": new OxmlAttr(":rightToLeft", OxmlType.BooleanValue)
  };
  DataValidationFormulaType._C = {
    "xne:f": XneFormula
  };
  DataValidationForumla2._C = {
    "xne:f": XneFormula
  };
  DataValidationForumla1._C = {
    "xne:f": XneFormula
  };
  DataValidation._C = {
    "x14:formula1": DataValidationForumla1,
    "x14:formula2": DataValidationForumla2,
    "xne:sqref": XneReferenceSequence
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
    ":prompt": new OxmlAttr(":prompt", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  ConditionalFormattingRule._C = {
    "xne:f": XneFormula,
    "x14:colorScale": ColorScale,
    "x14:dataBar": DataBar,
    "x14:iconSet": IconSet,
    "x14:dxf": DifferentialType,
    "x14:extLst": ExtensionList
  };
  ConditionalFormattingRule._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConditionalFormatValuesArray),
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
    ":equalAverage": new OxmlAttr(":equalAverage", OxmlType.BooleanValue),
    ":activePresent": new OxmlAttr(":activePresent", OxmlType.BooleanValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  ConditionalFormatting._C = {
    "x14:cfRule": ConditionalFormattingRule,
    "xne:sqref": XneReferenceSequence,
    "x14:extLst": ExtensionList
  };
  ConditionalFormatting._D = {
    ":pivot": new OxmlAttr(":pivot", OxmlType.BooleanValue)
  };
  SlicerCacheDefinition._C = {
    "x14:pivotTables": SlicerCachePivotTables,
    "x14:data": SlicerCacheData,
    "x14:extLst": SlicerCacheDefinitionExtensionList
  };
  SlicerCacheDefinition._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":sourceName": new OxmlAttr(":sourceName", OxmlType.StringValue)
  };
  Slicers._C = {
    "x14:slicer": Slicer
  };
  FormControlProperties._C = {
    "x14:itemLst": ListItems,
    "x14:extLst": ExtensionList
  };
  FormControlProperties._D = {
    ":objectType": new OxmlAttr(":objectType", OxmlType.EnumValue, ObjectTypeValuesArray),
    ":checked": new OxmlAttr(":checked", OxmlType.EnumValue, CheckedValuesArray),
    ":colored": new OxmlAttr(":colored", OxmlType.BooleanValue),
    ":dropLines": new OxmlAttr(":dropLines", OxmlType.UInt32Value),
    ":dropStyle": new OxmlAttr(":dropStyle", OxmlType.EnumValue, DropStyleValuesArray),
    ":dx": new OxmlAttr(":dx", OxmlType.UInt32Value),
    ":firstButton": new OxmlAttr(":firstButton", OxmlType.BooleanValue),
    ":fmlaGroup": new OxmlAttr(":fmlaGroup", OxmlType.StringValue),
    ":fmlaLink": new OxmlAttr(":fmlaLink", OxmlType.StringValue),
    ":fmlaRange": new OxmlAttr(":fmlaRange", OxmlType.StringValue),
    ":fmlaTxbx": new OxmlAttr(":fmlaTxbx", OxmlType.StringValue),
    ":horiz": new OxmlAttr(":horiz", OxmlType.BooleanValue),
    ":inc": new OxmlAttr(":inc", OxmlType.UInt32Value),
    ":justLastX": new OxmlAttr(":justLastX", OxmlType.BooleanValue),
    ":lockText": new OxmlAttr(":lockText", OxmlType.BooleanValue),
    ":max": new OxmlAttr(":max", OxmlType.UInt32Value),
    ":min": new OxmlAttr(":min", OxmlType.UInt32Value),
    ":multiSel": new OxmlAttr(":multiSel", OxmlType.StringValue),
    ":noThreeD": new OxmlAttr(":noThreeD", OxmlType.BooleanValue),
    ":noThreeD2": new OxmlAttr(":noThreeD2", OxmlType.BooleanValue),
    ":page": new OxmlAttr(":page", OxmlType.UInt32Value),
    ":sel": new OxmlAttr(":sel", OxmlType.UInt32Value),
    ":seltype": new OxmlAttr(":seltype", OxmlType.EnumValue, SelectionTypeValuesArray),
    ":textHAlign": new OxmlAttr(":textHAlign", OxmlType.EnumValue, TextHorizontalAlignmentValuesArray),
    ":textVAlign": new OxmlAttr(":textVAlign", OxmlType.EnumValue, TextVerticalAlignmentValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value),
    ":widthMin": new OxmlAttr(":widthMin", OxmlType.UInt32Value),
    ":editVal": new OxmlAttr(":editVal", OxmlType.EnumValue, EditValidationValuesArray),
    ":multiLine": new OxmlAttr(":multiLine", OxmlType.BooleanValue),
    ":verticalBar": new OxmlAttr(":verticalBar", OxmlType.BooleanValue),
    ":passwordEdit": new OxmlAttr(":passwordEdit", OxmlType.BooleanValue)
  };
  DatastoreItem._C = {
    "x14:extLst": ExtensionList
  };
  DatastoreItem._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  SourceConnection._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  SortCondition._D = {
    ":descending": new OxmlAttr(":descending", OxmlType.BooleanValue),
    ":sortBy": new OxmlAttr(":sortBy", OxmlType.EnumValue, SortByValuesArray),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":customList": new OxmlAttr(":customList", OxmlType.StringValue),
    ":dxfId": new OxmlAttr(":dxfId", OxmlType.UInt32Value),
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetTypeValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  CustomFilters._C = {
    "x14:customFilter": CustomFilter
  };
  CustomFilters._D = {
    ":and": new OxmlAttr(":and", OxmlType.BooleanValue)
  };
  Filter._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  IconFilter._D = {
    ":iconSet": new OxmlAttr(":iconSet", OxmlType.EnumValue, IconSetTypeValuesArray),
    ":iconId": new OxmlAttr(":iconId", OxmlType.UInt32Value)
  };
  CacheField._D = {
    ":ignore": new OxmlAttr(":ignore", OxmlType.BooleanValue)
  };
  PivotHierarchy._D = {
    ":ignore": new OxmlAttr(":ignore", OxmlType.BooleanValue)
  };
  OleItem._C = {
    "x14:values": DdeValues
  };
  OleItem._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":icon": new OxmlAttr(":icon", OxmlType.BooleanValue),
    ":advise": new OxmlAttr(":advise", OxmlType.BooleanValue),
    ":preferPic": new OxmlAttr(":preferPic", OxmlType.BooleanValue)
  };
  DifferentialFormats._C = {
    "x:dxf": XDifferentialFormat
  };
  DifferentialFormats._D = {
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  SlicerStyles._C = {
    "x14:slicerStyle": SlicerStyle
  };
  SlicerStyles._D = {
    ":defaultSlicerStyle": new OxmlAttr(":defaultSlicerStyle", OxmlType.StringValue)
  };
  Table._D = {
    ":altText": new OxmlAttr(":altText", OxmlType.StringValue),
    ":altTextSummary": new OxmlAttr(":altTextSummary", OxmlType.StringValue)
  };
  Connection._C = {
    "x14:calculatedMembers": CalculatedMembers
  };
  Connection._D = {
    ":culture": new OxmlAttr(":culture", OxmlType.StringValue),
    ":embeddedDataId": new OxmlAttr(":embeddedDataId", OxmlType.StringValue)
  };
  PivotCacheDefinition._D = {
    ":slicerData": new OxmlAttr(":slicerData", OxmlType.BooleanValue),
    ":pivotCacheId": new OxmlAttr(":pivotCacheId", OxmlType.UInt32Value),
    ":supportSubqueryNonVisual": new OxmlAttr(":supportSubqueryNonVisual", OxmlType.BooleanValue),
    ":supportSubqueryCalcMem": new OxmlAttr(":supportSubqueryCalcMem", OxmlType.BooleanValue),
    ":supportAddCalcMems": new OxmlAttr(":supportAddCalcMems", OxmlType.BooleanValue)
  };
  PivotTableDefinition._C = {
    "x14:pivotEdits": PivotEdits,
    "x14:pivotChanges": PivotChanges,
    "x14:conditionalFormats": ConditionalFormats
  };
  PivotTableDefinition._D = {
    ":fillDownLabelsDefault": new OxmlAttr(":fillDownLabelsDefault", OxmlType.BooleanValue),
    ":visualTotalsForSets": new OxmlAttr(":visualTotalsForSets", OxmlType.BooleanValue),
    ":calculatedMembersInFilters": new OxmlAttr(":calculatedMembersInFilters", OxmlType.BooleanValue),
    ":altText": new OxmlAttr(":altText", OxmlType.StringValue),
    ":altTextSummary": new OxmlAttr(":altTextSummary", OxmlType.StringValue),
    ":enableEdit": new OxmlAttr(":enableEdit", OxmlType.BooleanValue),
    ":autoApply": new OxmlAttr(":autoApply", OxmlType.BooleanValue),
    ":allocationMethod": new OxmlAttr(":allocationMethod", OxmlType.EnumValue, AllocationMethodValuesArray),
    ":weightExpression": new OxmlAttr(":weightExpression", OxmlType.StringValue),
    ":hideValuesRow": new OxmlAttr(":hideValuesRow", OxmlType.BooleanValue)
  };
  PivotField._D = {
    ":fillDownLabels": new OxmlAttr(":fillDownLabels", OxmlType.BooleanValue),
    ":ignore": new OxmlAttr(":ignore", OxmlType.BooleanValue)
  };
  DataField._D = {
    ":pivotShowAs": new OxmlAttr(":pivotShowAs", OxmlType.EnumValue, PivotShowAsValuesArray),
    ":sourceField": new OxmlAttr(":sourceField", OxmlType.UInt32Value),
    ":uniqueName": new OxmlAttr(":uniqueName", OxmlType.StringValue)
  };
  CacheHierarchy._C = {
    "x14:setLevels": SetLevels
  };
  CacheHierarchy._D = {
    ":flattenHierarchies": new OxmlAttr(":flattenHierarchies", OxmlType.BooleanValue),
    ":measuresSet": new OxmlAttr(":measuresSet", OxmlType.BooleanValue),
    ":hierarchizeDistinct": new OxmlAttr(":hierarchizeDistinct", OxmlType.BooleanValue),
    ":ignore": new OxmlAttr(":ignore", OxmlType.BooleanValue)
  };
  CalculatedMember._C = {
    "x14:tupleSet": TupleSet
  };
  CalculatedMember._D = {
    ":displayFolder": new OxmlAttr(":displayFolder", OxmlType.StringValue),
    ":flattenHierarchies": new OxmlAttr(":flattenHierarchies", OxmlType.BooleanValue),
    ":dynamicSet": new OxmlAttr(":dynamicSet", OxmlType.BooleanValue),
    ":hierarchizeDistinct": new OxmlAttr(":hierarchizeDistinct", OxmlType.BooleanValue),
    ":mdxLong": new OxmlAttr(":mdxLong", OxmlType.StringValue)
  };
  WorkbookProperties._D = {
    ":defaultImageDpi": new OxmlAttr(":defaultImageDpi", OxmlType.UInt32Value),
    ":discardImageEditData": new OxmlAttr(":discardImageEditData", OxmlType.BooleanValue),
    ":accuracyVersion": new OxmlAttr(":accuracyVersion", OxmlType.UInt32Value)
  };
  SlicerCaches._C = {
    "x14:slicerCache": SlicerCache
  };
  PivotCaches._C = {
    "x:pivotCache": XPivotCache
  };
  DefinedNames._C = {
    "x14:definedName": DefinedName
  };
  IgnoredErrors._C = {
    "x14:ignoredError": IgnoredError,
    "x14:extLst": ExtensionList
  };
  ProtectedRanges._C = {
    "x14:protectedRange": ProtectedRange
  };
  SlicerList._C = {
    "x14:slicer": SlicerRef
  };
  SparklineGroups._C = {
    "x14:sparklineGroup": SparklineGroup
  };
  DataValidations._C = {
    "x14:dataValidation": DataValidation
  };
  DataValidations._D = {
    ":disablePrompts": new OxmlAttr(":disablePrompts", OxmlType.BooleanValue),
    ":xWindow": new OxmlAttr(":xWindow", OxmlType.UInt32Value),
    ":yWindow": new OxmlAttr(":yWindow", OxmlType.UInt32Value),
    ":count": new OxmlAttr(":count", OxmlType.UInt32Value)
  };
  ConditionalFormattings._C = {
    "x14:conditionalFormatting": ConditionalFormatting
  };
  return {
    prefix: "x14",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"
  };
}
export {
  AllocationMethodValues,
  AllocationMethodValuesArray,
  ArgumentDescription,
  ArgumentDescriptions,
  AxisColor,
  BarAxisColor,
  BorderColor,
  CacheField,
  CacheHierarchy,
  CalculatedMember,
  CalculatedMembers,
  CheckedValues,
  CheckedValuesArray,
  Color,
  ColorScale,
  ColorType,
  ConditionalFormat,
  ConditionalFormats,
  ConditionalFormatting,
  ConditionalFormattingIcon,
  ConditionalFormattingRule,
  ConditionalFormattingValueObject,
  ConditionalFormattingValueObjectTypeValues,
  ConditionalFormattingValueObjectTypeValuesArray,
  ConditionalFormattings,
  Connection,
  CustomFilter,
  CustomFilters,
  DataBar,
  DataBarAxisPositionValues,
  DataBarAxisPositionValuesArray,
  DataBarDirectionValues,
  DataBarDirectionValuesArray,
  DataField,
  DataValidation,
  DataValidationFormulaType,
  DataValidationForumla1,
  DataValidationForumla2,
  DataValidations,
  DatastoreItem,
  DdeValues,
  DefinedName,
  DefinedNames,
  DifferentialFormats,
  DifferentialType,
  DisplayBlanksAsValues,
  DisplayBlanksAsValuesArray,
  DropStyleValues,
  DropStyleValuesArray,
  EditValidationValues,
  EditValidationValuesArray,
  ExtensionList,
  FillColor,
  Filter,
  FirstMarkerColor,
  FormControlProperties,
  HighMarkerColor,
  IconFilter,
  IconSet,
  IconSetTypeValues,
  IconSetTypeValuesArray,
  Id,
  IgnoredError,
  IgnoredErrors,
  LastMarkerColor,
  ListItem,
  ListItems,
  LowMarkerColor,
  MarkersColor,
  NegativeBorderColor,
  NegativeColor,
  NegativeFillColor,
  ObjectTypeValues,
  ObjectTypeValuesArray,
  OlapSlicerCache,
  OlapSlicerCacheItem,
  OlapSlicerCacheItemParent,
  OlapSlicerCacheLevelData,
  OlapSlicerCacheLevelsData,
  OlapSlicerCacheRange,
  OlapSlicerCacheRanges,
  OlapSlicerCacheSelection,
  OlapSlicerCacheSelections,
  OlapSlicerCacheSortOrderValues,
  OlapSlicerCacheSortOrderValuesArray,
  OleItem,
  PivotArea,
  PivotAreas,
  PivotCacheDefinition,
  PivotCaches,
  PivotChange,
  PivotChanges,
  PivotEdit,
  PivotEditValue,
  PivotEditValueTypeValues,
  PivotEditValueTypeValuesArray,
  PivotEdits,
  PivotField,
  PivotHierarchy,
  PivotShowAsValues,
  PivotShowAsValuesArray,
  PivotTableDefinition,
  PivotUserEdit,
  ProtectedRange,
  ProtectedRanges,
  SelectionTypeValues,
  SelectionTypeValuesArray,
  SeriesColor,
  SetLevel,
  SetLevels,
  Slicer,
  SlicerCache,
  SlicerCacheCrossFilterValues,
  SlicerCacheCrossFilterValuesArray,
  SlicerCacheData,
  SlicerCacheDefinition,
  SlicerCacheDefinitionExtensionList,
  SlicerCachePivotTable,
  SlicerCachePivotTables,
  SlicerCaches,
  SlicerList,
  SlicerRef,
  SlicerStyle,
  SlicerStyleElement,
  SlicerStyleElements,
  SlicerStyleTypeValues,
  SlicerStyleTypeValuesArray,
  SlicerStyles,
  Slicers,
  SortCondition,
  SourceConnection,
  Sparkline,
  SparklineAxisMinMaxValues,
  SparklineAxisMinMaxValuesArray,
  SparklineGroup,
  SparklineGroups,
  SparklineTypeValues,
  SparklineTypeValuesArray,
  Sparklines,
  Table,
  TabularSlicerCache,
  TabularSlicerCacheItem,
  TabularSlicerCacheItems,
  TabularSlicerCacheSortOrderValues,
  TabularSlicerCacheSortOrderValuesArray,
  TextHorizontalAlignmentValues,
  TextHorizontalAlignmentValuesArray,
  TextVerticalAlignmentValues,
  TextVerticalAlignmentValuesArray,
  TupleItems,
  TupleSet,
  TupleSetHeader,
  TupleSetHeaders,
  TupleSetRow,
  TupleSetRowItem,
  TupleSetRows,
  WorkbookProperties,
  Xstring,
  initOffice2010ExcelNamespace
};
