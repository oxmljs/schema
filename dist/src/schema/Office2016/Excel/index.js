import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { SparklineTypeValuesArray } from "../../Office2010/Excel";
import { DisplayBlanksAsValuesArray } from "../../Office2010/Excel";
import { SparklineAxisMinMaxValuesArray } from "../../Office2010/Excel";
import { DataValidationValuesArray } from "../../Spreadsheet";
import { DataValidationErrorStyleValuesArray } from "../../Spreadsheet";
import { DataValidationImeModeValuesArray } from "../../Spreadsheet";
import { DataValidationOperatorValuesArray } from "../../Spreadsheet";
import { CellValuesArray } from "../../Spreadsheet";
import { Location as XLocation } from "../../Spreadsheet";
import { PivotFields as XPivotFields } from "../../Spreadsheet";
import { RowFields as XRowFields } from "../../Spreadsheet";
import { RowItems as XRowItems } from "../../Spreadsheet";
import { ColumnFields as XColumnFields } from "../../Spreadsheet";
import { ColumnItems as XColumnItems } from "../../Spreadsheet";
import { PageFields as XPageFields } from "../../Spreadsheet";
import { DataFields as XDataFields } from "../../Spreadsheet";
import { Formats as XFormats } from "../../Spreadsheet";
import { ConditionalFormats as XConditionalFormats } from "../../Spreadsheet";
import { ChartFormats as XChartFormats } from "../../Spreadsheet";
import { PivotHierarchies as XPivotHierarchies } from "../../Spreadsheet";
import { PivotTableStyle as XPivotTableStyle } from "../../Spreadsheet";
import { PivotFilters as XPivotFilters } from "../../Spreadsheet";
import { RowHierarchiesUsage as XRowHierarchiesUsage } from "../../Spreadsheet";
import { ColumnHierarchiesUsage as XColumnHierarchiesUsage } from "../../Spreadsheet";
import { PivotTableDefinitionExtensionList as XPivotTableDefinitionExtensionList } from "../../Spreadsheet";
import { FilterColumn as XFilterColumn } from "../../Spreadsheet";
import { SortState as XSortState } from "../../Spreadsheet";
import { ExtensionList as XExtensionList } from "../../Spreadsheet";
import { Authors as XAuthors } from "../../Spreadsheet";
import { CommentList as XCommentList } from "../../Spreadsheet";
import { SeriesColor as X14SeriesColor } from "../../Office2010/Excel";
import { NegativeColor as X14NegativeColor } from "../../Office2010/Excel";
import { AxisColor as X14AxisColor } from "../../Office2010/Excel";
import { MarkersColor as X14MarkersColor } from "../../Office2010/Excel";
import { FirstMarkerColor as X14FirstMarkerColor } from "../../Office2010/Excel";
import { LastMarkerColor as X14LastMarkerColor } from "../../Office2010/Excel";
import { HighMarkerColor as X14HighMarkerColor } from "../../Office2010/Excel";
import { LowMarkerColor as X14LowMarkerColor } from "../../Office2010/Excel";
import { Formula as XneFormula } from "../../Office/Excel";
import { Sparklines as X14Sparklines } from "../../Office2010/Excel";
import { List as X12acList } from "../../Office2010/ExcelAc";
import { Formula1 as XFormula1 } from "../../Spreadsheet";
import { Formula2 as XFormula2 } from "../../Spreadsheet";
import { Text as XText } from "../../Spreadsheet";
import { Run as XRun } from "../../Spreadsheet";
import { PhoneticRun as XPhoneticRun } from "../../Spreadsheet";
import { PhoneticProperties as XPhoneticProperties } from "../../Spreadsheet";
import { Extension as XExtension } from "../../Spreadsheet";
import { Font as XFont } from "../../Spreadsheet";
import { NumberingFormat as XNumberingFormat } from "../../Spreadsheet";
import { Fill as XFill } from "../../Spreadsheet";
import { Alignment as XAlignment } from "../../Spreadsheet";
import { Border as XBorder } from "../../Spreadsheet";
import { Protection as XProtection } from "../../Spreadsheet";
var RevisionContext = /* @__PURE__ */ ((RevisionContext2) => {
  RevisionContext2["Normal"] = "normal";
  RevisionContext2["Undo"] = "undo";
  RevisionContext2["Redo"] = "redo";
  RevisionContext2["Copy"] = "copy";
  return RevisionContext2;
})(RevisionContext || {});
const RevisionContextArray = [
  "normal" /* Normal */,
  "undo" /* Undo */,
  "redo" /* Redo */,
  "copy" /* Copy */
];
var RwColAction = /* @__PURE__ */ ((RwColAction2) => {
  RwColAction2["Insr"] = "insr";
  RwColAction2["Delr"] = "delr";
  RwColAction2["Insc"] = "insc";
  RwColAction2["Delc"] = "delc";
  return RwColAction2;
})(RwColAction || {});
const RwColActionArray = [
  "insr" /* Insr */,
  "delr" /* Delr */,
  "insc" /* Insc */,
  "delc" /* Delc */
];
var FeatureType = /* @__PURE__ */ ((FeatureType2) => {
  FeatureType2["DataValidation"] = "dataValidation";
  FeatureType2["Hyperlink"] = "hyperlink";
  FeatureType2["RowColVisualOps"] = "rowColVisualOps";
  FeatureType2["FreezePanes"] = "freezePanes";
  FeatureType2["Sparklines"] = "sparklines";
  FeatureType2["HideUnhideSheet"] = "hideUnhideSheet";
  FeatureType2["ShowGridlinesHeadings"] = "showGridlinesHeadings";
  FeatureType2["Comment"] = "comment";
  FeatureType2["Outlines"] = "outlines";
  FeatureType2["DrawingElement"] = "drawingElement";
  FeatureType2["AutoFilter"] = "autoFilter";
  FeatureType2["PivotTable"] = "pivotTable";
  FeatureType2["Future"] = "future";
  return FeatureType2;
})(FeatureType || {});
const FeatureTypeArray = [
  "dataValidation" /* DataValidation */,
  "hyperlink" /* Hyperlink */,
  "rowColVisualOps" /* RowColVisualOps */,
  "freezePanes" /* FreezePanes */,
  "sparklines" /* Sparklines */,
  "hideUnhideSheet" /* HideUnhideSheet */,
  "showGridlinesHeadings" /* ShowGridlinesHeadings */,
  "comment" /* Comment */,
  "outlines" /* Outlines */,
  "drawingElement" /* DrawingElement */,
  "autoFilter" /* AutoFilter */,
  "pivotTable" /* PivotTable */,
  "future" /* Future */
];
var ExtFeatureType = /* @__PURE__ */ ((ExtFeatureType2) => {
  ExtFeatureType2["Reserved"] = "reserved";
  return ExtFeatureType2;
})(ExtFeatureType || {});
const ExtFeatureTypeArray = [
  "reserved" /* Reserved */
];
var SubFeatureType = /* @__PURE__ */ ((SubFeatureType2) => {
  SubFeatureType2["None"] = "none";
  SubFeatureType2["Future"] = "future";
  return SubFeatureType2;
})(SubFeatureType || {});
const SubFeatureTypeArray = [
  "none" /* None */,
  "future" /* Future */
];
var ExtSubFeatureType = /* @__PURE__ */ ((ExtSubFeatureType2) => {
  ExtSubFeatureType2["Reserved"] = "reserved";
  return ExtSubFeatureType2;
})(ExtSubFeatureType || {});
const ExtSubFeatureTypeArray = [
  "reserved" /* Reserved */
];
var RowColVisualOp = /* @__PURE__ */ ((RowColVisualOp2) => {
  RowColVisualOp2["Hide"] = "hide";
  RowColVisualOp2["Unhide"] = "unhide";
  RowColVisualOp2["Resize"] = "resize";
  RowColVisualOp2["Autosize"] = "autosize";
  return RowColVisualOp2;
})(RowColVisualOp || {});
const RowColVisualOpArray = [
  "hide" /* Hide */,
  "unhide" /* Unhide */,
  "resize" /* Resize */,
  "autosize" /* Autosize */
];
var SheetOp = /* @__PURE__ */ ((SheetOp2) => {
  SheetOp2["Insert"] = "insert";
  SheetOp2["Delete"] = "delete";
  SheetOp2["Reorder"] = "reorder";
  SheetOp2["Rename"] = "rename";
  return SheetOp2;
})(SheetOp || {});
const SheetOpArray = [
  "insert" /* Insert */,
  "delete" /* Delete */,
  "reorder" /* Reorder */,
  "rename" /* Rename */
];
var FillType = /* @__PURE__ */ ((FillType2) => {
  FillType2["Fill"] = "fill";
  FillType2["Array"] = "array";
  FillType2["Future"] = "future";
  return FillType2;
})(FillType || {});
const FillTypeArray = [
  "fill" /* Fill */,
  "array" /* Array */,
  "future" /* Future */
];
var FillTypeExt = /* @__PURE__ */ ((FillTypeExt2) => {
  FillTypeExt2["Test"] = "test";
  return FillTypeExt2;
})(FillTypeExt || {});
const FillTypeExtArray = [
  "test" /* Test */
];
var AdjustType = /* @__PURE__ */ ((AdjustType2) => {
  AdjustType2["Fmla"] = "fmla";
  AdjustType2["Format"] = "format";
  AdjustType2["CondFmt"] = "condFmt";
  AdjustType2["Sparkline"] = "sparkline";
  AdjustType2["Anchor"] = "anchor";
  AdjustType2["FmlaNoSticky"] = "fmlaNoSticky";
  AdjustType2["NoAdj"] = "noAdj";
  AdjustType2["Fragile"] = "fragile";
  AdjustType2["Future"] = "future";
  return AdjustType2;
})(AdjustType || {});
const AdjustTypeArray = [
  "fmla" /* Fmla */,
  "format" /* Format */,
  "condFmt" /* CondFmt */,
  "sparkline" /* Sparkline */,
  "anchor" /* Anchor */,
  "fmlaNoSticky" /* FmlaNoSticky */,
  "noAdj" /* NoAdj */,
  "fragile" /* Fragile */,
  "future" /* Future */
];
var AdjustTypeExt = /* @__PURE__ */ ((AdjustTypeExt2) => {
  AdjustTypeExt2["Test"] = "test";
  return AdjustTypeExt2;
})(AdjustTypeExt || {});
const AdjustTypeExtArray = [
  "test" /* Test */
];
var OartAnchorType = /* @__PURE__ */ ((OartAnchorType2) => {
  OartAnchorType2["TwoCell"] = "twoCell";
  OartAnchorType2["OneCell"] = "oneCell";
  OartAnchorType2["Absolute"] = "absolute";
  return OartAnchorType2;
})(OartAnchorType || {});
const OartAnchorTypeArray = [
  "twoCell" /* TwoCell */,
  "oneCell" /* OneCell */,
  "absolute" /* Absolute */
];
class pivotTableDefinition extends OxmlCompositeElement {
  static _Q = "xr:pivotTableDefinition";
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
  /** Returns XLocation. */
  get location() {
    return this._f(XLocation);
  }
  /** Returns XPivotFields. */
  get pivotFields() {
    return this._f(XPivotFields);
  }
  /** Returns XRowFields. */
  get rowFields() {
    return this._f(XRowFields);
  }
  /** Returns XRowItems. */
  get rowItems() {
    return this._f(XRowItems);
  }
  /** Returns XColumnFields. */
  get columnFields() {
    return this._f(XColumnFields);
  }
  /** Returns XColumnItems. */
  get columnItems() {
    return this._f(XColumnItems);
  }
  /** Returns XPageFields. */
  get pageFields() {
    return this._f(XPageFields);
  }
  /** Returns XDataFields. */
  get dataFields() {
    return this._f(XDataFields);
  }
  /** Returns XFormats. */
  get formats() {
    return this._f(XFormats);
  }
  /** Returns XConditionalFormats. */
  get conditionalFormats() {
    return this._f(XConditionalFormats);
  }
  /** Returns XChartFormats. */
  get chartFormats() {
    return this._f(XChartFormats);
  }
  /** Returns XPivotHierarchies. */
  get pivotHierarchies() {
    return this._f(XPivotHierarchies);
  }
  /** Returns XPivotTableStyle. */
  get pivotTableStyle() {
    return this._f(XPivotTableStyle);
  }
  /** Returns XPivotFilters. */
  get pivotFilters() {
    return this._f(XPivotFilters);
  }
  /** Returns XRowHierarchiesUsage. */
  get rowHierarchiesUsage() {
    return this._f(XRowHierarchiesUsage);
  }
  /** Returns XColumnHierarchiesUsage. */
  get columnHierarchiesUsage() {
    return this._f(XColumnHierarchiesUsage);
  }
  /** Returns XPivotTableDefinitionExtensionList. */
  get pivotTableDefinitionExtensionList() {
    return this._f(XPivotTableDefinitionExtensionList);
  }
}
class AutoFilter extends OxmlCompositeElement {
  static _Q = "xr:autoFilter";
  static _A = [":ref"];
  /** Cell or Range Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class Comments extends OxmlCompositeElement {
  static _Q = "xr:comments";
  /** Authors. */
  get authors() {
    return this._f(XAuthors);
  }
  /** List of Comments. */
  get commentList() {
    return this._f(XCommentList);
  }
  /** Returns XExtensionList. */
  get extensionList() {
    return this._f(XExtensionList);
  }
}
class SparklineGroup extends OxmlCompositeElement {
  static _Q = "xr:sparklineGroup";
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
  /** Returns X14SeriesColor. */
  get seriesColor() {
    return this._f(X14SeriesColor);
  }
  /** Returns X14NegativeColor. */
  get negativeColor() {
    return this._f(X14NegativeColor);
  }
  /** Returns X14AxisColor. */
  get axisColor() {
    return this._f(X14AxisColor);
  }
  /** Returns X14MarkersColor. */
  get markersColor() {
    return this._f(X14MarkersColor);
  }
  /** Returns X14FirstMarkerColor. */
  get firstMarkerColor() {
    return this._f(X14FirstMarkerColor);
  }
  /** Returns X14LastMarkerColor. */
  get lastMarkerColor() {
    return this._f(X14LastMarkerColor);
  }
  /** Returns X14HighMarkerColor. */
  get highMarkerColor() {
    return this._f(X14HighMarkerColor);
  }
  /** Returns X14LowMarkerColor. */
  get lowMarkerColor() {
    return this._f(X14LowMarkerColor);
  }
  /** Returns XneFormula. */
  get formula() {
    return this._f(XneFormula);
  }
  /** Returns X14Sparklines. */
  get sparklines() {
    return this._f(X14Sparklines);
  }
}
class Hyperlink extends OxmlLeafElement {
  static _Q = "xr:hyperlink";
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
class DataValidation extends OxmlCompositeElement {
  static _Q = "xr:dataValidation";
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
  /** Returns XFormula1. */
  get formula1() {
    return this._f(XFormula1);
  }
  /** Returns XFormula2. */
  get formula2() {
    return this._f(XFormula2);
  }
}
class RefTest extends OxmlLeafElement {
  static _Q = "xr:test";
  static _A = [":n", ":ajt", ":ajtx", ":homeRef"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** ajt. Serialized as `:ajt` */
  get ajt() {
    return this._g(":ajt");
  }
  set ajt(v) {
    this._s(":ajt", v);
  }
  /** ajtx. Serialized as `:ajtx` */
  get ajtx() {
    return this._g(":ajtx");
  }
  set ajtx(v) {
    this._s(":ajtx", v);
  }
  /** homeRef. Serialized as `:homeRef` */
  get homeRef() {
    return this._g(":homeRef");
  }
  set homeRef(v) {
    this._s(":homeRef", v);
  }
}
class RefFuture extends OxmlLeafElement {
  static _Q = "xr:future";
}
class RefOartAnchor extends OxmlLeafElement {
  static _Q = "xr:oartAnchor";
  static _A = [":n", ":ajt", ":ajtx", ":homeRef", ":r", ":fromRowOff", ":fromColOff", ":toRowOff", ":toColOff", ":cx", ":cy", ":x", ":y", ":oat"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** ajt. Serialized as `:ajt` */
  get ajt() {
    return this._g(":ajt");
  }
  set ajt(v) {
    this._s(":ajt", v);
  }
  /** ajtx. Serialized as `:ajtx` */
  get ajtx() {
    return this._g(":ajtx");
  }
  set ajtx(v) {
    this._s(":ajtx", v);
  }
  /** homeRef. Serialized as `:homeRef` */
  get homeRef() {
    return this._g(":homeRef");
  }
  set homeRef(v) {
    this._s(":homeRef", v);
  }
  /** r. Serialized as `:r` */
  get r() {
    return this._g(":r");
  }
  set r(v) {
    this._s(":r", v);
  }
  /** fromRowOff. Serialized as `:fromRowOff` */
  get fromRowOff() {
    return this._g(":fromRowOff");
  }
  set fromRowOff(v) {
    this._s(":fromRowOff", v);
  }
  /** fromColOff. Serialized as `:fromColOff` */
  get fromColOff() {
    return this._g(":fromColOff");
  }
  set fromColOff(v) {
    this._s(":fromColOff", v);
  }
  /** toRowOff. Serialized as `:toRowOff` */
  get toRowOff() {
    return this._g(":toRowOff");
  }
  set toRowOff(v) {
    this._s(":toRowOff", v);
  }
  /** toColOff. Serialized as `:toColOff` */
  get toColOff() {
    return this._g(":toColOff");
  }
  set toColOff(v) {
    this._s(":toColOff", v);
  }
  /** cx. Serialized as `:cx` */
  get cx() {
    return this._g(":cx");
  }
  set cx(v) {
    this._s(":cx", v);
  }
  /** cy. Serialized as `:cy` */
  get cy() {
    return this._g(":cy");
  }
  set cy(v) {
    this._s(":cy", v);
  }
  /** x. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** y. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
  /** oat. Serialized as `:oat` */
  get oat() {
    return this._g(":oat");
  }
  set oat(v) {
    this._s(":oat", v);
  }
}
class SheetXluid extends OxmlLeafElement {
  static _Q = "xr:sheetUid";
  static _A = [":n", ":ajt", ":ajtx", ":homeRef", ":uid"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** ajt. Serialized as `:ajt` */
  get ajt() {
    return this._g(":ajt");
  }
  set ajt(v) {
    this._s(":ajt", v);
  }
  /** ajtx. Serialized as `:ajtx` */
  get ajtx() {
    return this._g(":ajtx");
  }
  set ajtx(v) {
    this._s(":ajtx", v);
  }
  /** homeRef. Serialized as `:homeRef` */
  get homeRef() {
    return this._g(":homeRef");
  }
  set homeRef(v) {
    this._s(":homeRef", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
}
class RefCell extends OxmlLeafElement {
  static _Q = "xr:ref";
  static _A = [":n", ":ajt", ":ajtx", ":homeRef", ":r", ":uid", ":uidLast"];
  /** n. Serialized as `:n` */
  get n() {
    return this._g(":n");
  }
  set n(v) {
    this._s(":n", v);
  }
  /** ajt. Serialized as `:ajt` */
  get ajt() {
    return this._g(":ajt");
  }
  set ajt(v) {
    this._s(":ajt", v);
  }
  /** ajtx. Serialized as `:ajtx` */
  get ajtx() {
    return this._g(":ajtx");
  }
  set ajtx(v) {
    this._s(":ajtx", v);
  }
  /** homeRef. Serialized as `:homeRef` */
  get homeRef() {
    return this._g(":homeRef");
  }
  set homeRef(v) {
    this._s(":homeRef", v);
  }
  /** r. Serialized as `:r` */
  get r() {
    return this._g(":r");
  }
  set r(v) {
    this._s(":r", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** uidLast. Serialized as `:uidLast` */
  get uidLast() {
    return this._g(":uidLast");
  }
  set uidLast(v) {
    this._s(":uidLast", v);
  }
}
class RstType extends OxmlCompositeElement {
  static _Q = "xr:is";
  /** Text. */
  get text() {
    return this._f(XText);
  }
}
class Xstring extends OxmlLeafTextElement {
  static _Q = "xr:v";
}
class Outline extends OxmlLeafElement {
  static _Q = "xr:outline";
  static _A = [":isCollapsed", ":level"];
  /** isCollapsed. Serialized as `:isCollapsed` */
  get isCollapsed() {
    return this._g(":isCollapsed");
  }
  set isCollapsed(v) {
    this._s(":isCollapsed", v);
  }
  /** level. Serialized as `:level` */
  get level() {
    return this._g(":level");
  }
  set level(v) {
    this._s(":level", v);
  }
}
class Outlines extends OxmlCompositeElement {
  static _Q = "xr:outlines";
  static _A = [":isRow"];
  /** isRow. Serialized as `:isRow` */
  get isRow() {
    return this._g(":isRow");
  }
  set isRow(v) {
    this._s(":isRow", v);
  }
}
class FreezePanes extends OxmlLeafElement {
  static _Q = "xr:freezePanes";
  static _A = [":sheetViewUid"];
  /** sheetViewUid. Serialized as `:sheetViewUid` */
  get sheetViewUid() {
    return this._g(":sheetViewUid");
  }
  set sheetViewUid(v) {
    this._s(":sheetViewUid", v);
  }
}
class ShowGridlinesHeadings extends OxmlLeafElement {
  static _Q = "xr:showGridlinesHeadings";
  static _A = [":showGridLines", ":showRowCol"];
  /** showGridLines. Serialized as `:showGridLines` */
  get showGridLines() {
    return this._g(":showGridLines");
  }
  set showGridLines(v) {
    this._s(":showGridLines", v);
  }
  /** showRowCol. Serialized as `:showRowCol` */
  get showRowCol() {
    return this._g(":showRowCol");
  }
  set showRowCol(v) {
    this._s(":showRowCol", v);
  }
}
class HideUnhideSheet extends OxmlLeafElement {
  static _Q = "xr:hideUnhideSheet";
  static _A = [":hide"];
  /** hide. Serialized as `:hide` */
  get hide() {
    return this._g(":hide");
  }
  set hide(v) {
    this._s(":hide", v);
  }
}
class RowColVisualOps extends OxmlLeafElement {
  static _Q = "xr:rowColVisualOps";
  static _A = [":action", ":isRow", ":size", ":userSized"];
  /** action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
  /** isRow. Serialized as `:isRow` */
  get isRow() {
    return this._g(":isRow");
  }
  set isRow(v) {
    this._s(":isRow", v);
  }
  /** size. Serialized as `:size` */
  get size() {
    return this._g(":size");
  }
  set size(v) {
    this._s(":size", v);
  }
  /** userSized. Serialized as `:userSized` */
  get userSized() {
    return this._g(":userSized");
  }
  set userSized(v) {
    this._s(":userSized", v);
  }
}
class RefMap extends OxmlCompositeElement {
  static _Q = "xr:refmap";
}
class RevisionState extends OxmlCompositeElement {
  static _Q = "xr:body";
  /** Returns RowColVisualOps. */
  get rowColVisualOps() {
    return this._f(RowColVisualOps);
  }
  /** Returns HideUnhideSheet. */
  get hideUnhideSheet() {
    return this._f(HideUnhideSheet);
  }
  /** Returns ShowGridlinesHeadings. */
  get showGridlinesHeadings() {
    return this._f(ShowGridlinesHeadings);
  }
  /** Returns FreezePanes. */
  get freezePanes() {
    return this._f(FreezePanes);
  }
  /** Returns Outlines. */
  get outlines() {
    return this._f(Outlines);
  }
}
class RevisionStateLink extends OxmlLeafElement {
  static _Q = "xr:link";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class StateBasedHeader extends OxmlCompositeElement {
  static _Q = "xr:hdr";
  static _A = [":uid", ":eft", ":eftx", ":seft", ":seftx"];
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** eft. Serialized as `:eft` */
  get eft() {
    return this._g(":eft");
  }
  set eft(v) {
    this._s(":eft", v);
  }
  /** eftx. Serialized as `:eftx` */
  get eftx() {
    return this._g(":eftx");
  }
  set eftx(v) {
    this._s(":eftx", v);
  }
  /** seft. Serialized as `:seft` */
  get seft() {
    return this._g(":seft");
  }
  set seft(v) {
    this._s(":seft", v);
  }
  /** seftx. Serialized as `:seftx` */
  get seftx() {
    return this._g(":seftx");
  }
  set seftx(v) {
    this._s(":seftx", v);
  }
  /** Returns RefMap. */
  get refMap() {
    return this._f(RefMap);
  }
}
class FFormula extends OxmlLeafTextElement {
  static _Q = "xr:f";
}
class FormulaFormula extends OxmlLeafTextElement {
  static _Q = "xr:formula";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "xr:extLst";
}
class ChangeCellSubEdit extends OxmlCompositeElement {
  static _Q = "xr:ccse";
  static _A = [":r", ":t", ":x", ":w"];
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
  /** x. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** w. Serialized as `:w` */
  get w() {
    return this._g(":w");
  }
  set w(v) {
    this._s(":w", v);
  }
}
class RevCell extends OxmlCompositeElement {
  static _Q = "xr:c";
  static _A = [":t", ":nop", ":tick", ":rep"];
  /** t. Serialized as `:t` */
  get t() {
    return this._g(":t");
  }
  set t(v) {
    this._s(":t", v);
  }
  /** nop. Serialized as `:nop` */
  get nop() {
    return this._g(":nop");
  }
  set nop(v) {
    this._s(":nop", v);
  }
  /** tick. Serialized as `:tick` */
  get tick() {
    return this._g(":tick");
  }
  set tick(v) {
    this._s(":tick", v);
  }
  /** rep. Serialized as `:rep` */
  get rep() {
    return this._g(":rep");
  }
  set rep(v) {
    this._s(":rep", v);
  }
  /** Returns FFormula. */
  get fFormula() {
    return this._f(FFormula);
  }
  /** Returns Xstring. */
  get xstring() {
    return this._f(Xstring);
  }
  /** Returns RstType. */
  get rstType() {
    return this._f(RstType);
  }
}
class RevExTest extends OxmlLeafElement {
  static _Q = "xr:xrrtest";
}
class RevGroup extends OxmlCompositeElement {
  static _Q = "xr:xrrg";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
}
class RevListAutoExpandRw extends OxmlLeafElement {
  static _Q = "xr:xrrListExpR";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":refAdded", ":listGuid"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** refAdded. Serialized as `:refAdded` */
  get refAdded() {
    return this._g(":refAdded");
  }
  set refAdded(v) {
    this._s(":refAdded", v);
  }
  /** listGuid. Serialized as `:listGuid` */
  get listGuid() {
    return this._g(":listGuid");
  }
  set listGuid(v) {
    this._s(":listGuid", v);
  }
}
class RevisionList extends OxmlLeafElement {
  static _Q = "xr:xrrList";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":Data", ":Formatting", ":RangeBased", ":Fake", ":ref", ":Headers", ":InsDelHeaders", ":rId"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** Data. Serialized as `:Data` */
  get Data() {
    return this._g(":Data");
  }
  set Data(v) {
    this._s(":Data", v);
  }
  /** Formatting. Serialized as `:Formatting` */
  get Formatting() {
    return this._g(":Formatting");
  }
  set Formatting(v) {
    this._s(":Formatting", v);
  }
  /** RangeBased. Serialized as `:RangeBased` */
  get RangeBased() {
    return this._g(":RangeBased");
  }
  set RangeBased(v) {
    this._s(":RangeBased", v);
  }
  /** Fake. Serialized as `:Fake` */
  get Fake() {
    return this._g(":Fake");
  }
  set Fake(v) {
    this._s(":Fake", v);
  }
  /** ref. Serialized as `:ref` */
  get ref() {
    return this._g(":ref");
  }
  set ref(v) {
    this._s(":ref", v);
  }
  /** Headers. Serialized as `:Headers` */
  get Headers() {
    return this._g(":Headers");
  }
  set Headers(v) {
    this._s(":Headers", v);
  }
  /** InsDelHeaders. Serialized as `:InsDelHeaders` */
  get InsDelHeaders() {
    return this._g(":InsDelHeaders");
  }
  set InsDelHeaders(v) {
    this._s(":InsDelHeaders", v);
  }
  /** rId. Serialized as `:rId` */
  get rId() {
    return this._g(":rId");
  }
  set rId(v) {
    this._s(":rId", v);
  }
}
class RevExSheetOp extends OxmlLeafElement {
  static _Q = "xr:xrrSheet";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":op", ":name", ":idOrig", ":idNew"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** op. Serialized as `:op` */
  get op() {
    return this._g(":op");
  }
  set op(v) {
    this._s(":op", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** idOrig. Serialized as `:idOrig` */
  get idOrig() {
    return this._g(":idOrig");
  }
  set idOrig(v) {
    this._s(":idOrig", v);
  }
  /** idNew. Serialized as `:idNew` */
  get idNew() {
    return this._g(":idNew");
  }
  set idNew(v) {
    this._s(":idNew", v);
  }
}
class RevExChgObj extends OxmlCompositeElement {
  static _Q = "xr:xrrco";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** Returns StateBasedHeader. */
  get stateBasedHeader() {
    return this._f(StateBasedHeader);
  }
}
class RevExDelObj extends OxmlCompositeElement {
  static _Q = "xr:xrrdo";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** Returns StateBasedHeader. */
  get stateBasedHeader() {
    return this._f(StateBasedHeader);
  }
}
class RevExDefinedName extends OxmlCompositeElement {
  static _Q = "xr:xrrDefName";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":customView", ":name", ":function", ":functionGroupId", ":shortcutKey", ":hidden", ":customMenu", ":description", ":help", ":statusBar", ":comment"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** customView. Serialized as `:customView` */
  get customView() {
    return this._g(":customView");
  }
  set customView(v) {
    this._s(":customView", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** function. Serialized as `:function` */
  get function() {
    return this._g(":function");
  }
  set function(v) {
    this._s(":function", v);
  }
  /** functionGroupId. Serialized as `:functionGroupId` */
  get functionGroupId() {
    return this._g(":functionGroupId");
  }
  set functionGroupId(v) {
    this._s(":functionGroupId", v);
  }
  /** shortcutKey. Serialized as `:shortcutKey` */
  get shortcutKey() {
    return this._g(":shortcutKey");
  }
  set shortcutKey(v) {
    this._s(":shortcutKey", v);
  }
  /** hidden. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** customMenu. Serialized as `:customMenu` */
  get customMenu() {
    return this._g(":customMenu");
  }
  set customMenu(v) {
    this._s(":customMenu", v);
  }
  /** description. Serialized as `:description` */
  get description() {
    return this._g(":description");
  }
  set description(v) {
    this._s(":description", v);
  }
  /** help. Serialized as `:help` */
  get help() {
    return this._g(":help");
  }
  set help(v) {
    this._s(":help", v);
  }
  /** statusBar. Serialized as `:statusBar` */
  get statusBar() {
    return this._g(":statusBar");
  }
  set statusBar(v) {
    this._s(":statusBar", v);
  }
  /** comment. Serialized as `:comment` */
  get comment() {
    return this._g(":comment");
  }
  set comment(v) {
    this._s(":comment", v);
  }
  /** Returns FormulaFormula. */
  get formulaFormula() {
    return this._f(FormulaFormula);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RevExFormatting extends OxmlCompositeElement {
  static _Q = "xr:xrrf";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":numFmtId", ":xfDxf", ":style", ":sqref", ":start", ":length", ":styleUid", ":fBlankCell", ":applyNumberFormat", ":applyFont", ":applyFill", ":applyBorder", ":applyAlignment", ":applyProtection"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** numFmtId. Serialized as `:numFmtId` */
  get numFmtId() {
    return this._g(":numFmtId");
  }
  set numFmtId(v) {
    this._s(":numFmtId", v);
  }
  /** xfDxf. Serialized as `:xfDxf` */
  get xfDxf() {
    return this._g(":xfDxf");
  }
  set xfDxf(v) {
    this._s(":xfDxf", v);
  }
  /** style. Serialized as `:style` */
  get style() {
    return this._g(":style");
  }
  set style(v) {
    this._s(":style", v);
  }
  /** sqref. Serialized as `:sqref` */
  get sqref() {
    return this._g(":sqref");
  }
  set sqref(v) {
    this._s(":sqref", v);
  }
  /** start. Serialized as `:start` */
  get start() {
    return this._g(":start");
  }
  set start(v) {
    this._s(":start", v);
  }
  /** length. Serialized as `:length` */
  get length() {
    return this._g(":length");
  }
  set length(v) {
    this._s(":length", v);
  }
  /** styleUid. Serialized as `:styleUid` */
  get styleUid() {
    return this._g(":styleUid");
  }
  set styleUid(v) {
    this._s(":styleUid", v);
  }
  /** fBlankCell. Serialized as `:fBlankCell` */
  get fBlankCell() {
    return this._g(":fBlankCell");
  }
  set fBlankCell(v) {
    this._s(":fBlankCell", v);
  }
  /** applyNumberFormat. Serialized as `:applyNumberFormat` */
  get applyNumberFormat() {
    return this._g(":applyNumberFormat");
  }
  set applyNumberFormat(v) {
    this._s(":applyNumberFormat", v);
  }
  /** applyFont. Serialized as `:applyFont` */
  get applyFont() {
    return this._g(":applyFont");
  }
  set applyFont(v) {
    this._s(":applyFont", v);
  }
  /** applyFill. Serialized as `:applyFill` */
  get applyFill() {
    return this._g(":applyFill");
  }
  set applyFill(v) {
    this._s(":applyFill", v);
  }
  /** applyBorder. Serialized as `:applyBorder` */
  get applyBorder() {
    return this._g(":applyBorder");
  }
  set applyBorder(v) {
    this._s(":applyBorder", v);
  }
  /** applyAlignment. Serialized as `:applyAlignment` */
  get applyAlignment() {
    return this._g(":applyAlignment");
  }
  set applyAlignment(v) {
    this._s(":applyAlignment", v);
  }
  /** applyProtection. Serialized as `:applyProtection` */
  get applyProtection() {
    return this._g(":applyProtection");
  }
  set applyProtection(v) {
    this._s(":applyProtection", v);
  }
  /** Returns DifferentialFormatType. */
  get differentialFormatType() {
    return this._f(DifferentialFormatType);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class RevExChangeCell extends OxmlCompositeElement {
  static _Q = "xr:xrrc";
  static _A = [":listUid", ":rev", ":uid", ":sh", ":uidp", ":ctx", ":r", ":t", ":x", ":w"];
  /** listUid. Serialized as `:listUid` */
  get listUid() {
    return this._g(":listUid");
  }
  set listUid(v) {
    this._s(":listUid", v);
  }
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
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
  /** x. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** w. Serialized as `:w` */
  get w() {
    return this._g(":w");
  }
  set w(v) {
    this._s(":w", v);
  }
}
class RevExMove extends OxmlLeafElement {
  static _Q = "xr:xrrm";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":src", ":dst", ":srcSh"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** src. Serialized as `:src` */
  get src() {
    return this._g(":src");
  }
  set src(v) {
    this._s(":src", v);
  }
  /** dst. Serialized as `:dst` */
  get dst() {
    return this._g(":dst");
  }
  set dst(v) {
    this._s(":dst", v);
  }
  /** srcSh. Serialized as `:srcSh` */
  get srcSh() {
    return this._g(":srcSh");
  }
  set srcSh(v) {
    this._s(":srcSh", v);
  }
}
class RevExRowColumn extends OxmlLeafElement {
  static _Q = "xr:xrrrc";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":eol", ":ref", ":action"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** eol. Serialized as `:eol` */
  get eol() {
    return this._g(":eol");
  }
  set eol(v) {
    this._s(":eol", v);
  }
  /** ref. Serialized as `:ref` */
  get ref() {
    return this._g(":ref");
  }
  set ref(v) {
    this._s(":ref", v);
  }
  /** action. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
}
class RevExTrimmed extends OxmlLeafElement {
  static _Q = "xr:xrrTrim";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
}
class RevExUnsupported extends OxmlLeafElement {
  static _Q = "xr:xrrUspt";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
}
class RevExFuture extends OxmlCompositeElement {
  static _Q = "xr:xrrftr";
  static _A = [":rev", ":uid", ":sh", ":uidp", ":ctx", ":sti"];
  /** rev. Serialized as `:rev` */
  get rev() {
    return this._g(":rev");
  }
  set rev(v) {
    this._s(":rev", v);
  }
  /** uid. Serialized as `:uid` */
  get uid() {
    return this._g(":uid");
  }
  set uid(v) {
    this._s(":uid", v);
  }
  /** sh. Serialized as `:sh` */
  get sh() {
    return this._g(":sh");
  }
  set sh(v) {
    this._s(":sh", v);
  }
  /** uidp. Serialized as `:uidp` */
  get uidp() {
    return this._g(":uidp");
  }
  set uidp(v) {
    this._s(":uidp", v);
  }
  /** ctx. Serialized as `:ctx` */
  get ctx() {
    return this._g(":ctx");
  }
  set ctx(v) {
    this._s(":ctx", v);
  }
  /** sti. Serialized as `:sti` */
  get sti() {
    return this._g(":sti");
  }
  set sti(v) {
    this._s(":sti", v);
  }
}
class RevExHeader extends OxmlLeafElement {
  static _Q = "xr:hdr";
  static _A = ["r:id", ":minRev", ":maxRev", ":time"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** minRev. Serialized as `:minRev` */
  get minRev() {
    return this._g(":minRev");
  }
  set minRev(v) {
    this._s(":minRev", v);
  }
  /** maxRev. Serialized as `:maxRev` */
  get maxRev() {
    return this._g(":maxRev");
  }
  set maxRev(v) {
    this._s(":maxRev", v);
  }
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
}
class StateBasedObject extends OxmlCompositeElement {
  static _Q = "xr:objectState";
  /** Represents an external link to another workbook.. */
  get dataValidation() {
    return this._f(DataValidation);
  }
  /** Represents a hyperlink within a cell.. */
  get hyperlink() {
    return this._f(Hyperlink);
  }
  /** Represents a sparkline group of 1 or more sparklines.. */
  get sparklineGroup() {
    return this._f(SparklineGroup);
  }
  /** Represents one comment within a cell.. */
  get comments() {
    return this._f(Comments);
  }
  /** Represents an autofilter.. */
  get autoFilter() {
    return this._f(AutoFilter);
  }
  /** Represents a PivotTable View.. */
  get pivotTableDefinition() {
    return this._f(pivotTableDefinition);
  }
}
class RevisionPtr extends OxmlLeafElement {
  static _Q = "xr:revisionPtr";
  static _A = [":revIDLastSave", ":documentId"];
  /** revIDLastSave. Serialized as `:revIDLastSave` */
  get revIDLastSave() {
    return this._g(":revIDLastSave");
  }
  set revIDLastSave(v) {
    this._s(":revIDLastSave", v);
  }
  /** documentId. Serialized as `:documentId` */
  get documentId() {
    return this._g(":documentId");
  }
  set documentId(v) {
    this._s(":documentId", v);
  }
}
class DifferentialFormatType extends OxmlCompositeElement {
  static _Q = "xr:dxf";
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
class RevExStream extends OxmlCompositeElement {
  static _Q = "xr:revStream";
}
class RevExHeaders extends OxmlCompositeElement {
  static _Q = "xr:revHdrs";
  static _A = [":minRev", ":maxRev", ":docId", ":endpointId"];
  /** minRev. Serialized as `:minRev` */
  get minRev() {
    return this._g(":minRev");
  }
  set minRev(v) {
    this._s(":minRev", v);
  }
  /** maxRev. Serialized as `:maxRev` */
  get maxRev() {
    return this._g(":maxRev");
  }
  set maxRev(v) {
    this._s(":maxRev", v);
  }
  /** docId. Serialized as `:docId` */
  get docId() {
    return this._g(":docId");
  }
  set docId(v) {
    this._s(":docId", v);
  }
  /** endpointId. Serialized as `:endpointId` */
  get endpointId() {
    return this._g(":endpointId");
  }
  set endpointId(v) {
    this._s(":endpointId", v);
  }
}
function initOffice2016ExcelNamespace() {
  pivotTableDefinition._C = {
    "x:location": XLocation,
    "x:pivotFields": XPivotFields,
    "x:rowFields": XRowFields,
    "x:rowItems": XRowItems,
    "x:colFields": XColumnFields,
    "x:colItems": XColumnItems,
    "x:pageFields": XPageFields,
    "x:dataFields": XDataFields,
    "x:formats": XFormats,
    "x:conditionalFormats": XConditionalFormats,
    "x:chartFormats": XChartFormats,
    "x:pivotHierarchies": XPivotHierarchies,
    "x:pivotTableStyleInfo": XPivotTableStyle,
    "x:filters": XPivotFilters,
    "x:rowHierarchiesUsage": XRowHierarchiesUsage,
    "x:colHierarchiesUsage": XColumnHierarchiesUsage,
    "x:extLst": XPivotTableDefinitionExtensionList
  };
  pivotTableDefinition._D = {
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
  AutoFilter._C = {
    "x:filterColumn": XFilterColumn,
    "x:sortState": XSortState,
    "x:extLst": XExtensionList
  };
  AutoFilter._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  Comments._C = {
    "x:authors": XAuthors,
    "x:commentList": XCommentList,
    "x:extLst": XExtensionList
  };
  SparklineGroup._C = {
    "x14:colorSeries": X14SeriesColor,
    "x14:colorNegative": X14NegativeColor,
    "x14:colorAxis": X14AxisColor,
    "x14:colorMarkers": X14MarkersColor,
    "x14:colorFirst": X14FirstMarkerColor,
    "x14:colorLast": X14LastMarkerColor,
    "x14:colorHigh": X14HighMarkerColor,
    "x14:colorLow": X14LowMarkerColor,
    "xne:f": XneFormula,
    "x14:sparklines": X14Sparklines
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
  Hyperlink._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":location": new OxmlAttr(":location", OxmlType.StringValue),
    ":tooltip": new OxmlAttr(":tooltip", OxmlType.StringValue),
    ":display": new OxmlAttr(":display", OxmlType.StringValue)
  };
  DataValidation._C = {
    "x12ac:list": X12acList,
    "x:formula1": XFormula1,
    "x:formula2": XFormula2
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
  RefTest._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":ajt": new OxmlAttr(":ajt", OxmlType.EnumValue, AdjustTypeArray),
    ":ajtx": new OxmlAttr(":ajtx", OxmlType.EnumValue, AdjustTypeExtArray),
    ":homeRef": new OxmlAttr(":homeRef", OxmlType.BooleanValue)
  };
  RefOartAnchor._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":ajt": new OxmlAttr(":ajt", OxmlType.EnumValue, AdjustTypeArray),
    ":ajtx": new OxmlAttr(":ajtx", OxmlType.EnumValue, AdjustTypeExtArray),
    ":homeRef": new OxmlAttr(":homeRef", OxmlType.BooleanValue),
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":fromRowOff": new OxmlAttr(":fromRowOff", OxmlType.Int64Value),
    ":fromColOff": new OxmlAttr(":fromColOff", OxmlType.Int64Value),
    ":toRowOff": new OxmlAttr(":toRowOff", OxmlType.Int64Value),
    ":toColOff": new OxmlAttr(":toColOff", OxmlType.Int64Value),
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value),
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value),
    ":oat": new OxmlAttr(":oat", OxmlType.EnumValue, OartAnchorTypeArray)
  };
  SheetXluid._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":ajt": new OxmlAttr(":ajt", OxmlType.EnumValue, AdjustTypeArray),
    ":ajtx": new OxmlAttr(":ajtx", OxmlType.EnumValue, AdjustTypeExtArray),
    ":homeRef": new OxmlAttr(":homeRef", OxmlType.BooleanValue),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue)
  };
  RefCell._D = {
    ":n": new OxmlAttr(":n", OxmlType.StringValue),
    ":ajt": new OxmlAttr(":ajt", OxmlType.EnumValue, AdjustTypeArray),
    ":ajtx": new OxmlAttr(":ajtx", OxmlType.EnumValue, AdjustTypeExtArray),
    ":homeRef": new OxmlAttr(":homeRef", OxmlType.BooleanValue),
    ":r": new OxmlAttr(":r", OxmlType.ListValue),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":uidLast": new OxmlAttr(":uidLast", OxmlType.StringValue)
  };
  RstType._C = {
    "x:t": XText,
    "x:r": XRun,
    "x:rPh": XPhoneticRun,
    "x:phoneticPr": XPhoneticProperties
  };
  Outline._D = {
    ":isCollapsed": new OxmlAttr(":isCollapsed", OxmlType.BooleanValue),
    ":level": new OxmlAttr(":level", OxmlType.ByteValue)
  };
  Outlines._C = {
    "xr:outline": Outline
  };
  Outlines._D = {
    ":isRow": new OxmlAttr(":isRow", OxmlType.BooleanValue)
  };
  FreezePanes._D = {
    ":sheetViewUid": new OxmlAttr(":sheetViewUid", OxmlType.StringValue)
  };
  ShowGridlinesHeadings._D = {
    ":showGridLines": new OxmlAttr(":showGridLines", OxmlType.BooleanValue),
    ":showRowCol": new OxmlAttr(":showRowCol", OxmlType.BooleanValue)
  };
  HideUnhideSheet._D = {
    ":hide": new OxmlAttr(":hide", OxmlType.BooleanValue)
  };
  RowColVisualOps._D = {
    ":action": new OxmlAttr(":action", OxmlType.EnumValue, RowColVisualOpArray),
    ":isRow": new OxmlAttr(":isRow", OxmlType.BooleanValue),
    ":size": new OxmlAttr(":size", OxmlType.UInt32Value),
    ":userSized": new OxmlAttr(":userSized", OxmlType.BooleanValue)
  };
  RefMap._C = {
    "xr:ref": RefCell,
    "xr:sheetUid": SheetXluid,
    "xr:oartAnchor": RefOartAnchor,
    "xr:future": RefFuture,
    "xr:test": RefTest
  };
  RevisionState._C = {
    "xr:rowColVisualOps": RowColVisualOps,
    "xr:hideUnhideSheet": HideUnhideSheet,
    "xr:showGridlinesHeadings": ShowGridlinesHeadings,
    "xr:freezePanes": FreezePanes,
    "xr:outlines": Outlines
  };
  RevisionStateLink._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  StateBasedHeader._C = {
    "xr:refmap": RefMap
  };
  StateBasedHeader._D = {
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":eft": new OxmlAttr(":eft", OxmlType.EnumValue, FeatureTypeArray),
    ":eftx": new OxmlAttr(":eftx", OxmlType.EnumValue, ExtFeatureTypeArray),
    ":seft": new OxmlAttr(":seft", OxmlType.EnumValue, SubFeatureTypeArray),
    ":seftx": new OxmlAttr(":seftx", OxmlType.EnumValue, ExtSubFeatureTypeArray)
  };
  ExtensionList._C = {
    "x:ext": XExtension
  };
  ChangeCellSubEdit._C = {
    "xr:c": RevCell
  };
  ChangeCellSubEdit._D = {
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, FillTypeArray),
    ":x": new OxmlAttr(":x", OxmlType.EnumValue, FillTypeExtArray),
    ":w": new OxmlAttr(":w", OxmlType.UInt32Value)
  };
  RevCell._C = {
    "xr:f": FFormula,
    "xr:v": Xstring,
    "xr:is": RstType
  };
  RevCell._D = {
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, CellValuesArray),
    ":nop": new OxmlAttr(":nop", OxmlType.BooleanValue),
    ":tick": new OxmlAttr(":tick", OxmlType.BooleanValue),
    ":rep": new OxmlAttr(":rep", OxmlType.UInt32Value)
  };
  RevGroup._C = {
    "xr:xrrftr": RevExFuture,
    "xr:xrrUspt": RevExUnsupported,
    "xr:xrrTrim": RevExTrimmed,
    "xr:xrrrc": RevExRowColumn,
    "xr:xrrm": RevExMove,
    "xr:xrrc": RevExChangeCell,
    "xr:xrrf": RevExFormatting,
    "xr:xrrDefName": RevExDefinedName,
    "xr:xrrdo": RevExDelObj,
    "xr:xrrco": RevExChgObj,
    "xr:xrrSheet": RevExSheetOp,
    "xr:xrrList": RevisionList,
    "xr:xrrListExpR": RevListAutoExpandRw
  };
  RevGroup._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray)
  };
  RevListAutoExpandRw._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":refAdded": new OxmlAttr(":refAdded", OxmlType.StringValue),
    ":listGuid": new OxmlAttr(":listGuid", OxmlType.StringValue)
  };
  RevisionList._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":Data": new OxmlAttr(":Data", OxmlType.BooleanValue),
    ":Formatting": new OxmlAttr(":Formatting", OxmlType.BooleanValue),
    ":RangeBased": new OxmlAttr(":RangeBased", OxmlType.BooleanValue),
    ":Fake": new OxmlAttr(":Fake", OxmlType.BooleanValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":Headers": new OxmlAttr(":Headers", OxmlType.BooleanValue),
    ":InsDelHeaders": new OxmlAttr(":InsDelHeaders", OxmlType.BooleanValue),
    ":rId": new OxmlAttr(":rId", OxmlType.UInt32Value)
  };
  RevExSheetOp._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":op": new OxmlAttr(":op", OxmlType.EnumValue, SheetOpArray),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":idOrig": new OxmlAttr(":idOrig", OxmlType.UInt32Value),
    ":idNew": new OxmlAttr(":idNew", OxmlType.UInt32Value)
  };
  RevExChgObj._C = {
    "xr:hdr": StateBasedHeader,
    "xr:link": RevisionStateLink,
    "xr:body": RevisionState
  };
  RevExChgObj._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray)
  };
  RevExDelObj._C = {
    "xr:hdr": StateBasedHeader
  };
  RevExDelObj._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray)
  };
  RevExDefinedName._C = {
    "xr:formula": FormulaFormula,
    "xr:extLst": ExtensionList
  };
  RevExDefinedName._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":customView": new OxmlAttr(":customView", OxmlType.BooleanValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":function": new OxmlAttr(":function", OxmlType.BooleanValue),
    ":functionGroupId": new OxmlAttr(":functionGroupId", OxmlType.ByteValue),
    ":shortcutKey": new OxmlAttr(":shortcutKey", OxmlType.ByteValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":customMenu": new OxmlAttr(":customMenu", OxmlType.StringValue),
    ":description": new OxmlAttr(":description", OxmlType.StringValue),
    ":help": new OxmlAttr(":help", OxmlType.StringValue),
    ":statusBar": new OxmlAttr(":statusBar", OxmlType.StringValue),
    ":comment": new OxmlAttr(":comment", OxmlType.StringValue)
  };
  RevExFormatting._C = {
    "xr:dxf": DifferentialFormatType,
    "xr:extLst": ExtensionList
  };
  RevExFormatting._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":numFmtId": new OxmlAttr(":numFmtId", OxmlType.UInt32Value),
    ":xfDxf": new OxmlAttr(":xfDxf", OxmlType.BooleanValue),
    ":style": new OxmlAttr(":style", OxmlType.BooleanValue),
    ":sqref": new OxmlAttr(":sqref", OxmlType.ListValue),
    ":start": new OxmlAttr(":start", OxmlType.UInt32Value),
    ":length": new OxmlAttr(":length", OxmlType.UInt32Value),
    ":styleUid": new OxmlAttr(":styleUid", OxmlType.StringValue),
    ":fBlankCell": new OxmlAttr(":fBlankCell", OxmlType.BooleanValue),
    ":applyNumberFormat": new OxmlAttr(":applyNumberFormat", OxmlType.BooleanValue),
    ":applyFont": new OxmlAttr(":applyFont", OxmlType.BooleanValue),
    ":applyFill": new OxmlAttr(":applyFill", OxmlType.BooleanValue),
    ":applyBorder": new OxmlAttr(":applyBorder", OxmlType.BooleanValue),
    ":applyAlignment": new OxmlAttr(":applyAlignment", OxmlType.BooleanValue),
    ":applyProtection": new OxmlAttr(":applyProtection", OxmlType.BooleanValue)
  };
  RevExChangeCell._C = {
    "xr:c": RevCell,
    "xr:ccse": ChangeCellSubEdit
  };
  RevExChangeCell._D = {
    ":listUid": new OxmlAttr(":listUid", OxmlType.StringValue),
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.EnumValue, FillTypeArray),
    ":x": new OxmlAttr(":x", OxmlType.EnumValue, FillTypeExtArray),
    ":w": new OxmlAttr(":w", OxmlType.UInt32Value)
  };
  RevExMove._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":src": new OxmlAttr(":src", OxmlType.StringValue),
    ":dst": new OxmlAttr(":dst", OxmlType.StringValue),
    ":srcSh": new OxmlAttr(":srcSh", OxmlType.StringValue)
  };
  RevExRowColumn._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":eol": new OxmlAttr(":eol", OxmlType.BooleanValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":action": new OxmlAttr(":action", OxmlType.EnumValue, RwColActionArray)
  };
  RevExTrimmed._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray)
  };
  RevExUnsupported._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray)
  };
  RevExFuture._C = {
    "xr:xrrtest": RevExTest
  };
  RevExFuture._D = {
    ":rev": new OxmlAttr(":rev", OxmlType.UInt64Value),
    ":uid": new OxmlAttr(":uid", OxmlType.StringValue),
    ":sh": new OxmlAttr(":sh", OxmlType.StringValue),
    ":uidp": new OxmlAttr(":uidp", OxmlType.StringValue),
    ":ctx": new OxmlAttr(":ctx", OxmlType.EnumValue, RevisionContextArray),
    ":sti": new OxmlAttr(":sti", OxmlType.BooleanValue)
  };
  RevExHeader._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":minRev": new OxmlAttr(":minRev", OxmlType.UInt64Value),
    ":maxRev": new OxmlAttr(":maxRev", OxmlType.UInt64Value),
    ":time": new OxmlAttr(":time", OxmlType.DateTimeValue)
  };
  StateBasedObject._C = {
    "xr:dataValidation": DataValidation,
    "xr:hyperlink": Hyperlink,
    "xr:sparklineGroup": SparklineGroup,
    "xr:comments": Comments,
    "xr:autoFilter": AutoFilter,
    "xr:pivotTableDefinition": pivotTableDefinition
  };
  RevisionPtr._D = {
    ":revIDLastSave": new OxmlAttr(":revIDLastSave", OxmlType.UInt64Value),
    ":documentId": new OxmlAttr(":documentId", OxmlType.StringValue)
  };
  DifferentialFormatType._C = {
    "x:font": XFont,
    "x:numFmt": XNumberingFormat,
    "x:fill": XFill,
    "x:alignment": XAlignment,
    "x:border": XBorder,
    "x:protection": XProtection,
    "x:extLst": XExtensionList
  };
  RevExStream._C = {
    "xr:xrrftr": RevExFuture,
    "xr:xrrUspt": RevExUnsupported,
    "xr:xrrTrim": RevExTrimmed,
    "xr:xrrrc": RevExRowColumn,
    "xr:xrrm": RevExMove,
    "xr:xrrc": RevExChangeCell,
    "xr:xrrf": RevExFormatting,
    "xr:xrrDefName": RevExDefinedName,
    "xr:xrrdo": RevExDelObj,
    "xr:xrrco": RevExChgObj,
    "xr:xrrSheet": RevExSheetOp,
    "xr:xrrList": RevisionList,
    "xr:xrrListExpR": RevListAutoExpandRw,
    "xr:xrrg": RevGroup
  };
  RevExHeaders._C = {
    "xr:hdr": RevExHeader
  };
  RevExHeaders._D = {
    ":minRev": new OxmlAttr(":minRev", OxmlType.UInt64Value),
    ":maxRev": new OxmlAttr(":maxRev", OxmlType.UInt64Value),
    ":docId": new OxmlAttr(":docId", OxmlType.StringValue),
    ":endpointId": new OxmlAttr(":endpointId", OxmlType.StringValue)
  };
  return {
    prefix: "xr",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2014/revision"
  };
}
export {
  AdjustType,
  AdjustTypeArray,
  AdjustTypeExt,
  AdjustTypeExtArray,
  AutoFilter,
  ChangeCellSubEdit,
  Comments,
  DataValidation,
  DifferentialFormatType,
  ExtFeatureType,
  ExtFeatureTypeArray,
  ExtSubFeatureType,
  ExtSubFeatureTypeArray,
  ExtensionList,
  FFormula,
  FeatureType,
  FeatureTypeArray,
  FillType,
  FillTypeArray,
  FillTypeExt,
  FillTypeExtArray,
  FormulaFormula,
  FreezePanes,
  HideUnhideSheet,
  Hyperlink,
  OartAnchorType,
  OartAnchorTypeArray,
  Outline,
  Outlines,
  RefCell,
  RefFuture,
  RefMap,
  RefOartAnchor,
  RefTest,
  RevCell,
  RevExChangeCell,
  RevExChgObj,
  RevExDefinedName,
  RevExDelObj,
  RevExFormatting,
  RevExFuture,
  RevExHeader,
  RevExHeaders,
  RevExMove,
  RevExRowColumn,
  RevExSheetOp,
  RevExStream,
  RevExTest,
  RevExTrimmed,
  RevExUnsupported,
  RevGroup,
  RevListAutoExpandRw,
  RevisionContext,
  RevisionContextArray,
  RevisionList,
  RevisionPtr,
  RevisionState,
  RevisionStateLink,
  RowColVisualOp,
  RowColVisualOpArray,
  RowColVisualOps,
  RstType,
  RwColAction,
  RwColActionArray,
  SheetOp,
  SheetOpArray,
  SheetXluid,
  ShowGridlinesHeadings,
  SparklineGroup,
  StateBasedHeader,
  StateBasedObject,
  SubFeatureType,
  SubFeatureTypeArray,
  Xstring,
  initOffice2016ExcelNamespace,
  pivotTableDefinition
};
