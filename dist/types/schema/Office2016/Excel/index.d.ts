import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { StringValue } from '../../../framework/types/StringValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { ByteValue } from '../../../framework/types/ByteValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { ListValue } from '../../../framework/types/ListValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { UInt64Value } from '../../../framework/types/UInt64Value';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { SparklineTypeValues } from '../../Office2010/Excel';
import { DisplayBlanksAsValues } from '../../Office2010/Excel';
import { SparklineAxisMinMaxValues } from '../../Office2010/Excel';
import { DataValidationValues } from '../../Spreadsheet';
import { DataValidationErrorStyleValues } from '../../Spreadsheet';
import { DataValidationImeModeValues } from '../../Spreadsheet';
import { DataValidationOperatorValues } from '../../Spreadsheet';
import { CellValues } from '../../Spreadsheet';
import { Location as XLocation } from '../../Spreadsheet';
import { PivotFields as XPivotFields } from '../../Spreadsheet';
import { RowFields as XRowFields } from '../../Spreadsheet';
import { RowItems as XRowItems } from '../../Spreadsheet';
import { ColumnFields as XColumnFields } from '../../Spreadsheet';
import { ColumnItems as XColumnItems } from '../../Spreadsheet';
import { PageFields as XPageFields } from '../../Spreadsheet';
import { DataFields as XDataFields } from '../../Spreadsheet';
import { Formats as XFormats } from '../../Spreadsheet';
import { ConditionalFormats as XConditionalFormats } from '../../Spreadsheet';
import { ChartFormats as XChartFormats } from '../../Spreadsheet';
import { PivotHierarchies as XPivotHierarchies } from '../../Spreadsheet';
import { PivotTableStyle as XPivotTableStyle } from '../../Spreadsheet';
import { PivotFilters as XPivotFilters } from '../../Spreadsheet';
import { RowHierarchiesUsage as XRowHierarchiesUsage } from '../../Spreadsheet';
import { ColumnHierarchiesUsage as XColumnHierarchiesUsage } from '../../Spreadsheet';
import { PivotTableDefinitionExtensionList as XPivotTableDefinitionExtensionList } from '../../Spreadsheet';
import { FilterColumn as XFilterColumn } from '../../Spreadsheet';
import { SortState as XSortState } from '../../Spreadsheet';
import { ExtensionList as XExtensionList } from '../../Spreadsheet';
import { Authors as XAuthors } from '../../Spreadsheet';
import { CommentList as XCommentList } from '../../Spreadsheet';
import { SeriesColor as X14SeriesColor } from '../../Office2010/Excel';
import { NegativeColor as X14NegativeColor } from '../../Office2010/Excel';
import { AxisColor as X14AxisColor } from '../../Office2010/Excel';
import { MarkersColor as X14MarkersColor } from '../../Office2010/Excel';
import { FirstMarkerColor as X14FirstMarkerColor } from '../../Office2010/Excel';
import { LastMarkerColor as X14LastMarkerColor } from '../../Office2010/Excel';
import { HighMarkerColor as X14HighMarkerColor } from '../../Office2010/Excel';
import { LowMarkerColor as X14LowMarkerColor } from '../../Office2010/Excel';
import { Formula as XneFormula } from '../../Office/Excel';
import { Sparklines as X14Sparklines } from '../../Office2010/Excel';
import { List as X12acList } from '../../Office2010/ExcelAc';
import { Formula1 as XFormula1 } from '../../Spreadsheet';
import { Formula2 as XFormula2 } from '../../Spreadsheet';
import { Text as XText } from '../../Spreadsheet';
import { Run as XRun } from '../../Spreadsheet';
import { PhoneticRun as XPhoneticRun } from '../../Spreadsheet';
import { PhoneticProperties as XPhoneticProperties } from '../../Spreadsheet';
import { Extension as XExtension } from '../../Spreadsheet';
import { Font as XFont } from '../../Spreadsheet';
import { NumberingFormat as XNumberingFormat } from '../../Spreadsheet';
import { Fill as XFill } from '../../Spreadsheet';
import { Alignment as XAlignment } from '../../Spreadsheet';
import { Border as XBorder } from '../../Spreadsheet';
import { Protection as XProtection } from '../../Spreadsheet';
export declare enum RevisionContext {
    /** undefined. Serialized value: `normal` */
    Normal = "normal",
    /** undefined. Serialized value: `undo` */
    Undo = "undo",
    /** undefined. Serialized value: `redo` */
    Redo = "redo",
    /** undefined. Serialized value: `copy` */
    Copy = "copy"
}
export declare const RevisionContextArray: readonly [RevisionContext.Normal, RevisionContext.Undo, RevisionContext.Redo, RevisionContext.Copy];
export declare enum RwColAction {
    /** undefined. Serialized value: `insr` */
    Insr = "insr",
    /** undefined. Serialized value: `delr` */
    Delr = "delr",
    /** undefined. Serialized value: `insc` */
    Insc = "insc",
    /** undefined. Serialized value: `delc` */
    Delc = "delc"
}
export declare const RwColActionArray: readonly [RwColAction.Insr, RwColAction.Delr, RwColAction.Insc, RwColAction.Delc];
export declare enum FeatureType {
    /** undefined. Serialized value: `dataValidation` */
    DataValidation = "dataValidation",
    /** undefined. Serialized value: `hyperlink` */
    Hyperlink = "hyperlink",
    /** undefined. Serialized value: `rowColVisualOps` */
    RowColVisualOps = "rowColVisualOps",
    /** undefined. Serialized value: `freezePanes` */
    FreezePanes = "freezePanes",
    /** undefined. Serialized value: `sparklines` */
    Sparklines = "sparklines",
    /** undefined. Serialized value: `hideUnhideSheet` */
    HideUnhideSheet = "hideUnhideSheet",
    /** undefined. Serialized value: `showGridlinesHeadings` */
    ShowGridlinesHeadings = "showGridlinesHeadings",
    /** undefined. Serialized value: `comment` */
    Comment = "comment",
    /** undefined. Serialized value: `outlines` */
    Outlines = "outlines",
    /** undefined. Serialized value: `drawingElement` */
    DrawingElement = "drawingElement",
    /** undefined. Serialized value: `autoFilter` */
    AutoFilter = "autoFilter",
    /** undefined. Serialized value: `pivotTable` */
    PivotTable = "pivotTable",
    /** undefined. Serialized value: `future` */
    Future = "future"
}
export declare const FeatureTypeArray: readonly [FeatureType.DataValidation, FeatureType.Hyperlink, FeatureType.RowColVisualOps, FeatureType.FreezePanes, FeatureType.Sparklines, FeatureType.HideUnhideSheet, FeatureType.ShowGridlinesHeadings, FeatureType.Comment, FeatureType.Outlines, FeatureType.DrawingElement, FeatureType.AutoFilter, FeatureType.PivotTable, FeatureType.Future];
export declare enum ExtFeatureType {
    /** undefined. Serialized value: `reserved` */
    Reserved = "reserved"
}
export declare const ExtFeatureTypeArray: readonly [ExtFeatureType];
export declare enum SubFeatureType {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `future` */
    Future = "future"
}
export declare const SubFeatureTypeArray: readonly [SubFeatureType.None, SubFeatureType.Future];
export declare enum ExtSubFeatureType {
    /** undefined. Serialized value: `reserved` */
    Reserved = "reserved"
}
export declare const ExtSubFeatureTypeArray: readonly [ExtSubFeatureType];
export declare enum RowColVisualOp {
    /** undefined. Serialized value: `hide` */
    Hide = "hide",
    /** undefined. Serialized value: `unhide` */
    Unhide = "unhide",
    /** undefined. Serialized value: `resize` */
    Resize = "resize",
    /** undefined. Serialized value: `autosize` */
    Autosize = "autosize"
}
export declare const RowColVisualOpArray: readonly [RowColVisualOp.Hide, RowColVisualOp.Unhide, RowColVisualOp.Resize, RowColVisualOp.Autosize];
export declare enum SheetOp {
    /** undefined. Serialized value: `insert` */
    Insert = "insert",
    /** undefined. Serialized value: `delete` */
    Delete = "delete",
    /** undefined. Serialized value: `reorder` */
    Reorder = "reorder",
    /** undefined. Serialized value: `rename` */
    Rename = "rename"
}
export declare const SheetOpArray: readonly [SheetOp.Insert, SheetOp.Delete, SheetOp.Reorder, SheetOp.Rename];
export declare enum FillType {
    /** undefined. Serialized value: `fill` */
    Fill = "fill",
    /** undefined. Serialized value: `array` */
    Array = "array",
    /** undefined. Serialized value: `future` */
    Future = "future"
}
export declare const FillTypeArray: readonly [FillType.Fill, FillType.Array, FillType.Future];
export declare enum FillTypeExt {
    /** undefined. Serialized value: `test` */
    Test = "test"
}
export declare const FillTypeExtArray: readonly [FillTypeExt];
export declare enum AdjustType {
    /** undefined. Serialized value: `fmla` */
    Fmla = "fmla",
    /** undefined. Serialized value: `format` */
    Format = "format",
    /** undefined. Serialized value: `condFmt` */
    CondFmt = "condFmt",
    /** undefined. Serialized value: `sparkline` */
    Sparkline = "sparkline",
    /** undefined. Serialized value: `anchor` */
    Anchor = "anchor",
    /** undefined. Serialized value: `fmlaNoSticky` */
    FmlaNoSticky = "fmlaNoSticky",
    /** undefined. Serialized value: `noAdj` */
    NoAdj = "noAdj",
    /** undefined. Serialized value: `fragile` */
    Fragile = "fragile",
    /** undefined. Serialized value: `future` */
    Future = "future"
}
export declare const AdjustTypeArray: readonly [AdjustType.Fmla, AdjustType.Format, AdjustType.CondFmt, AdjustType.Sparkline, AdjustType.Anchor, AdjustType.FmlaNoSticky, AdjustType.NoAdj, AdjustType.Fragile, AdjustType.Future];
export declare enum AdjustTypeExt {
    /** undefined. Serialized value: `test` */
    Test = "test"
}
export declare const AdjustTypeExtArray: readonly [AdjustTypeExt];
export declare enum OartAnchorType {
    /** undefined. Serialized value: `twoCell` */
    TwoCell = "twoCell",
    /** undefined. Serialized value: `oneCell` */
    OneCell = "oneCell",
    /** undefined. Serialized value: `absolute` */
    Absolute = "absolute"
}
export declare const OartAnchorTypeArray: readonly [OartAnchorType.TwoCell, OartAnchorType.OneCell, OartAnchorType.Absolute];
/** Represents a PivotTable View.. Serialized as `xr:pivotTableDefinition` */
export declare class pivotTableDefinition extends OxmlCompositeElement<XLocation | XPivotFields | XRowFields | XRowItems | XColumnFields | XColumnItems | XPageFields | XDataFields | XFormats | XConditionalFormats | XChartFormats | XPivotHierarchies | XPivotTableStyle | XPivotFilters | XRowHierarchiesUsage | XColumnHierarchiesUsage | XPivotTableDefinitionExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** cacheId. Serialized as `:cacheId` */
    get cacheId(): UInt32Value | undefined;
    set cacheId(v: UInt32Value | undefined);
    /** dataOnRows. Serialized as `:dataOnRows` */
    get dataOnRows(): BooleanValue | undefined;
    set dataOnRows(v: BooleanValue | undefined);
    /** dataPosition. Serialized as `:dataPosition` */
    get dataPosition(): UInt32Value | undefined;
    set dataPosition(v: UInt32Value | undefined);
    /** Auto Format Id. Serialized as `:autoFormatId` */
    get autoFormatId(): UInt32Value | undefined;
    set autoFormatId(v: UInt32Value | undefined);
    /** Apply Number Formats. Serialized as `:applyNumberFormats` */
    get applyNumberFormats(): BooleanValue | undefined;
    set applyNumberFormats(v: BooleanValue | undefined);
    /** Apply Border Formats. Serialized as `:applyBorderFormats` */
    get applyBorderFormats(): BooleanValue | undefined;
    set applyBorderFormats(v: BooleanValue | undefined);
    /** Apply Font Formats. Serialized as `:applyFontFormats` */
    get applyFontFormats(): BooleanValue | undefined;
    set applyFontFormats(v: BooleanValue | undefined);
    /** Apply Pattern Formats. Serialized as `:applyPatternFormats` */
    get applyPatternFormats(): BooleanValue | undefined;
    set applyPatternFormats(v: BooleanValue | undefined);
    /** Apply Alignment Formats. Serialized as `:applyAlignmentFormats` */
    get applyAlignmentFormats(): BooleanValue | undefined;
    set applyAlignmentFormats(v: BooleanValue | undefined);
    /** Apply Width / Height Formats. Serialized as `:applyWidthHeightFormats` */
    get applyWidthHeightFormats(): BooleanValue | undefined;
    set applyWidthHeightFormats(v: BooleanValue | undefined);
    /** dataCaption. Serialized as `:dataCaption` */
    get dataCaption(): StringValue | undefined;
    set dataCaption(v: StringValue | undefined);
    /** grandTotalCaption. Serialized as `:grandTotalCaption` */
    get grandTotalCaption(): StringValue | undefined;
    set grandTotalCaption(v: StringValue | undefined);
    /** errorCaption. Serialized as `:errorCaption` */
    get errorCaption(): StringValue | undefined;
    set errorCaption(v: StringValue | undefined);
    /** showError. Serialized as `:showError` */
    get showError(): BooleanValue | undefined;
    set showError(v: BooleanValue | undefined);
    /** missingCaption. Serialized as `:missingCaption` */
    get missingCaption(): StringValue | undefined;
    set missingCaption(v: StringValue | undefined);
    /** showMissing. Serialized as `:showMissing` */
    get showMissing(): BooleanValue | undefined;
    set showMissing(v: BooleanValue | undefined);
    /** pageStyle. Serialized as `:pageStyle` */
    get pageStyle(): StringValue | undefined;
    set pageStyle(v: StringValue | undefined);
    /** pivotTableStyle. Serialized as `:pivotTableStyle` */
    get pivotTableStyleName(): StringValue | undefined;
    set pivotTableStyleName(v: StringValue | undefined);
    /** vacatedStyle. Serialized as `:vacatedStyle` */
    get vacatedStyle(): StringValue | undefined;
    set vacatedStyle(v: StringValue | undefined);
    /** tag. Serialized as `:tag` */
    get tag(): StringValue | undefined;
    set tag(v: StringValue | undefined);
    /** updatedVersion. Serialized as `:updatedVersion` */
    get updatedVersion(): ByteValue | undefined;
    set updatedVersion(v: ByteValue | undefined);
    /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
    get minRefreshableVersion(): ByteValue | undefined;
    set minRefreshableVersion(v: ByteValue | undefined);
    /** asteriskTotals. Serialized as `:asteriskTotals` */
    get asteriskTotals(): BooleanValue | undefined;
    set asteriskTotals(v: BooleanValue | undefined);
    /** showItems. Serialized as `:showItems` */
    get showItems(): BooleanValue | undefined;
    set showItems(v: BooleanValue | undefined);
    /** editData. Serialized as `:editData` */
    get editData(): BooleanValue | undefined;
    set editData(v: BooleanValue | undefined);
    /** disableFieldList. Serialized as `:disableFieldList` */
    get disableFieldList(): BooleanValue | undefined;
    set disableFieldList(v: BooleanValue | undefined);
    /** showCalcMbrs. Serialized as `:showCalcMbrs` */
    get showCalculatedMembers(): BooleanValue | undefined;
    set showCalculatedMembers(v: BooleanValue | undefined);
    /** visualTotals. Serialized as `:visualTotals` */
    get visualTotals(): BooleanValue | undefined;
    set visualTotals(v: BooleanValue | undefined);
    /** showMultipleLabel. Serialized as `:showMultipleLabel` */
    get showMultipleLabel(): BooleanValue | undefined;
    set showMultipleLabel(v: BooleanValue | undefined);
    /** showDataDropDown. Serialized as `:showDataDropDown` */
    get showDataDropDown(): BooleanValue | undefined;
    set showDataDropDown(v: BooleanValue | undefined);
    /** showDrill. Serialized as `:showDrill` */
    get showDrill(): BooleanValue | undefined;
    set showDrill(v: BooleanValue | undefined);
    /** printDrill. Serialized as `:printDrill` */
    get printDrill(): BooleanValue | undefined;
    set printDrill(v: BooleanValue | undefined);
    /** showMemberPropertyTips. Serialized as `:showMemberPropertyTips` */
    get showMemberPropertyTips(): BooleanValue | undefined;
    set showMemberPropertyTips(v: BooleanValue | undefined);
    /** showDataTips. Serialized as `:showDataTips` */
    get showDataTips(): BooleanValue | undefined;
    set showDataTips(v: BooleanValue | undefined);
    /** enableWizard. Serialized as `:enableWizard` */
    get enableWizard(): BooleanValue | undefined;
    set enableWizard(v: BooleanValue | undefined);
    /** enableDrill. Serialized as `:enableDrill` */
    get enableDrill(): BooleanValue | undefined;
    set enableDrill(v: BooleanValue | undefined);
    /** enableFieldProperties. Serialized as `:enableFieldProperties` */
    get enableFieldProperties(): BooleanValue | undefined;
    set enableFieldProperties(v: BooleanValue | undefined);
    /** preserveFormatting. Serialized as `:preserveFormatting` */
    get preserveFormatting(): BooleanValue | undefined;
    set preserveFormatting(v: BooleanValue | undefined);
    /** useAutoFormatting. Serialized as `:useAutoFormatting` */
    get useAutoFormatting(): BooleanValue | undefined;
    set useAutoFormatting(v: BooleanValue | undefined);
    /** pageWrap. Serialized as `:pageWrap` */
    get pageWrap(): UInt32Value | undefined;
    set pageWrap(v: UInt32Value | undefined);
    /** pageOverThenDown. Serialized as `:pageOverThenDown` */
    get pageOverThenDown(): BooleanValue | undefined;
    set pageOverThenDown(v: BooleanValue | undefined);
    /** subtotalHiddenItems. Serialized as `:subtotalHiddenItems` */
    get subtotalHiddenItems(): BooleanValue | undefined;
    set subtotalHiddenItems(v: BooleanValue | undefined);
    /** rowGrandTotals. Serialized as `:rowGrandTotals` */
    get rowGrandTotals(): BooleanValue | undefined;
    set rowGrandTotals(v: BooleanValue | undefined);
    /** colGrandTotals. Serialized as `:colGrandTotals` */
    get columnGrandTotals(): BooleanValue | undefined;
    set columnGrandTotals(v: BooleanValue | undefined);
    /** fieldPrintTitles. Serialized as `:fieldPrintTitles` */
    get fieldPrintTitles(): BooleanValue | undefined;
    set fieldPrintTitles(v: BooleanValue | undefined);
    /** itemPrintTitles. Serialized as `:itemPrintTitles` */
    get itemPrintTitles(): BooleanValue | undefined;
    set itemPrintTitles(v: BooleanValue | undefined);
    /** mergeItem. Serialized as `:mergeItem` */
    get mergeItem(): BooleanValue | undefined;
    set mergeItem(v: BooleanValue | undefined);
    /** showDropZones. Serialized as `:showDropZones` */
    get showDropZones(): BooleanValue | undefined;
    set showDropZones(v: BooleanValue | undefined);
    /** createdVersion. Serialized as `:createdVersion` */
    get createdVersion(): ByteValue | undefined;
    set createdVersion(v: ByteValue | undefined);
    /** indent. Serialized as `:indent` */
    get indent(): UInt32Value | undefined;
    set indent(v: UInt32Value | undefined);
    /** showEmptyRow. Serialized as `:showEmptyRow` */
    get showEmptyRow(): BooleanValue | undefined;
    set showEmptyRow(v: BooleanValue | undefined);
    /** showEmptyCol. Serialized as `:showEmptyCol` */
    get showEmptyColumn(): BooleanValue | undefined;
    set showEmptyColumn(v: BooleanValue | undefined);
    /** showHeaders. Serialized as `:showHeaders` */
    get showHeaders(): BooleanValue | undefined;
    set showHeaders(v: BooleanValue | undefined);
    /** compact. Serialized as `:compact` */
    get compact(): BooleanValue | undefined;
    set compact(v: BooleanValue | undefined);
    /** outline. Serialized as `:outline` */
    get outline(): BooleanValue | undefined;
    set outline(v: BooleanValue | undefined);
    /** outlineData. Serialized as `:outlineData` */
    get outlineData(): BooleanValue | undefined;
    set outlineData(v: BooleanValue | undefined);
    /** compactData. Serialized as `:compactData` */
    get compactData(): BooleanValue | undefined;
    set compactData(v: BooleanValue | undefined);
    /** published. Serialized as `:published` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** gridDropZones. Serialized as `:gridDropZones` */
    get gridDropZones(): BooleanValue | undefined;
    set gridDropZones(v: BooleanValue | undefined);
    /** immersive. Serialized as `:immersive` */
    get stopImmersiveUi(): BooleanValue | undefined;
    set stopImmersiveUi(v: BooleanValue | undefined);
    /** multipleFieldFilters. Serialized as `:multipleFieldFilters` */
    get multipleFieldFilters(): BooleanValue | undefined;
    set multipleFieldFilters(v: BooleanValue | undefined);
    /** chartFormat. Serialized as `:chartFormat` */
    get chartFormat(): UInt32Value | undefined;
    set chartFormat(v: UInt32Value | undefined);
    /** rowHeaderCaption. Serialized as `:rowHeaderCaption` */
    get rowHeaderCaption(): StringValue | undefined;
    set rowHeaderCaption(v: StringValue | undefined);
    /** colHeaderCaption. Serialized as `:colHeaderCaption` */
    get columnHeaderCaption(): StringValue | undefined;
    set columnHeaderCaption(v: StringValue | undefined);
    /** fieldListSortAscending. Serialized as `:fieldListSortAscending` */
    get fieldListSortAscending(): BooleanValue | undefined;
    set fieldListSortAscending(v: BooleanValue | undefined);
    /** mdxSubqueries. Serialized as `:mdxSubqueries` */
    get mdxSubqueries(): BooleanValue | undefined;
    set mdxSubqueries(v: BooleanValue | undefined);
    /** customListSort. Serialized as `:customListSort` */
    get customListSort(): BooleanValue | undefined;
    set customListSort(v: BooleanValue | undefined);
    /** Returns XLocation. */
    get location(): XLocation | undefined;
    /** Returns XPivotFields. */
    get pivotFields(): XPivotFields | undefined;
    /** Returns XRowFields. */
    get rowFields(): XRowFields | undefined;
    /** Returns XRowItems. */
    get rowItems(): XRowItems | undefined;
    /** Returns XColumnFields. */
    get columnFields(): XColumnFields | undefined;
    /** Returns XColumnItems. */
    get columnItems(): XColumnItems | undefined;
    /** Returns XPageFields. */
    get pageFields(): XPageFields | undefined;
    /** Returns XDataFields. */
    get dataFields(): XDataFields | undefined;
    /** Returns XFormats. */
    get formats(): XFormats | undefined;
    /** Returns XConditionalFormats. */
    get conditionalFormats(): XConditionalFormats | undefined;
    /** Returns XChartFormats. */
    get chartFormats(): XChartFormats | undefined;
    /** Returns XPivotHierarchies. */
    get pivotHierarchies(): XPivotHierarchies | undefined;
    /** Returns XPivotTableStyle. */
    get pivotTableStyle(): XPivotTableStyle | undefined;
    /** Returns XPivotFilters. */
    get pivotFilters(): XPivotFilters | undefined;
    /** Returns XRowHierarchiesUsage. */
    get rowHierarchiesUsage(): XRowHierarchiesUsage | undefined;
    /** Returns XColumnHierarchiesUsage. */
    get columnHierarchiesUsage(): XColumnHierarchiesUsage | undefined;
    /** Returns XPivotTableDefinitionExtensionList. */
    get pivotTableDefinitionExtensionList(): XPivotTableDefinitionExtensionList | undefined;
}
/** Represents an autofilter.. Serialized as `xr:autoFilter` */
export declare class AutoFilter extends OxmlCompositeElement<XFilterColumn | XSortState | XExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Cell or Range Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Represents one comment within a cell.. Serialized as `xr:comments` */
export declare class Comments extends OxmlCompositeElement<XAuthors | XCommentList | XExtensionList> {
    static _Q: string;
    /** Authors. */
    get authors(): XAuthors | undefined;
    /** List of Comments. */
    get commentList(): XCommentList | undefined;
    /** Returns XExtensionList. */
    get extensionList(): XExtensionList | undefined;
}
/** Represents a sparkline group of 1 or more sparklines.. Serialized as `xr:sparklineGroup` */
export declare class SparklineGroup extends OxmlCompositeElement<X14SeriesColor | X14NegativeColor | X14AxisColor | X14MarkersColor | X14FirstMarkerColor | X14LastMarkerColor | X14HighMarkerColor | X14LowMarkerColor | XneFormula | X14Sparklines> {
    static _Q: string;
    static _A: string[];
    /** manualMax. Serialized as `:manualMax` */
    get manualMax(): DoubleValue | undefined;
    set manualMax(v: DoubleValue | undefined);
    /** manualMin. Serialized as `:manualMin` */
    get manualMin(): DoubleValue | undefined;
    set manualMin(v: DoubleValue | undefined);
    /** lineWeight. Serialized as `:lineWeight` */
    get lineWeight(): DoubleValue | undefined;
    set lineWeight(v: DoubleValue | undefined);
    /** type. Serialized as `:type` */
    get type(): SparklineTypeValues | undefined;
    set type(v: SparklineTypeValues | undefined);
    /** dateAxis. Serialized as `:dateAxis` */
    get dateAxis(): BooleanValue | undefined;
    set dateAxis(v: BooleanValue | undefined);
    /** displayEmptyCellsAs. Serialized as `:displayEmptyCellsAs` */
    get displayEmptyCellsAs(): DisplayBlanksAsValues | undefined;
    set displayEmptyCellsAs(v: DisplayBlanksAsValues | undefined);
    /** markers. Serialized as `:markers` */
    get markers(): BooleanValue | undefined;
    set markers(v: BooleanValue | undefined);
    /** high. Serialized as `:high` */
    get high(): BooleanValue | undefined;
    set high(v: BooleanValue | undefined);
    /** low. Serialized as `:low` */
    get low(): BooleanValue | undefined;
    set low(v: BooleanValue | undefined);
    /** first. Serialized as `:first` */
    get first(): BooleanValue | undefined;
    set first(v: BooleanValue | undefined);
    /** last. Serialized as `:last` */
    get last(): BooleanValue | undefined;
    set last(v: BooleanValue | undefined);
    /** negative. Serialized as `:negative` */
    get negative(): BooleanValue | undefined;
    set negative(v: BooleanValue | undefined);
    /** displayXAxis. Serialized as `:displayXAxis` */
    get displayXAxis(): BooleanValue | undefined;
    set displayXAxis(v: BooleanValue | undefined);
    /** displayHidden. Serialized as `:displayHidden` */
    get displayHidden(): BooleanValue | undefined;
    set displayHidden(v: BooleanValue | undefined);
    /** minAxisType. Serialized as `:minAxisType` */
    get minAxisType(): SparklineAxisMinMaxValues | undefined;
    set minAxisType(v: SparklineAxisMinMaxValues | undefined);
    /** maxAxisType. Serialized as `:maxAxisType` */
    get maxAxisType(): SparklineAxisMinMaxValues | undefined;
    set maxAxisType(v: SparklineAxisMinMaxValues | undefined);
    /** rightToLeft. Serialized as `:rightToLeft` */
    get rightToLeft(): BooleanValue | undefined;
    set rightToLeft(v: BooleanValue | undefined);
    /** Returns X14SeriesColor. */
    get seriesColor(): X14SeriesColor | undefined;
    /** Returns X14NegativeColor. */
    get negativeColor(): X14NegativeColor | undefined;
    /** Returns X14AxisColor. */
    get axisColor(): X14AxisColor | undefined;
    /** Returns X14MarkersColor. */
    get markersColor(): X14MarkersColor | undefined;
    /** Returns X14FirstMarkerColor. */
    get firstMarkerColor(): X14FirstMarkerColor | undefined;
    /** Returns X14LastMarkerColor. */
    get lastMarkerColor(): X14LastMarkerColor | undefined;
    /** Returns X14HighMarkerColor. */
    get highMarkerColor(): X14HighMarkerColor | undefined;
    /** Returns X14LowMarkerColor. */
    get lowMarkerColor(): X14LowMarkerColor | undefined;
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
    /** Returns X14Sparklines. */
    get sparklines(): X14Sparklines | undefined;
}
/** Represents a hyperlink within a cell.. Serialized as `xr:hyperlink` */
export declare class Hyperlink extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Location. Serialized as `:location` */
    get location(): StringValue | undefined;
    set location(v: StringValue | undefined);
    /** Tool Tip. Serialized as `:tooltip` */
    get tooltip(): StringValue | undefined;
    set tooltip(v: StringValue | undefined);
    /** Display String. Serialized as `:display` */
    get display(): StringValue | undefined;
    set display(v: StringValue | undefined);
}
/** Represents an external link to another workbook.. Serialized as `xr:dataValidation` */
export declare class DataValidation extends OxmlCompositeElement<X12acList | XFormula1 | XFormula2> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): DataValidationValues | undefined;
    set type(v: DataValidationValues | undefined);
    /** errorStyle. Serialized as `:errorStyle` */
    get errorStyle(): DataValidationErrorStyleValues | undefined;
    set errorStyle(v: DataValidationErrorStyleValues | undefined);
    /** imeMode. Serialized as `:imeMode` */
    get imeMode(): DataValidationImeModeValues | undefined;
    set imeMode(v: DataValidationImeModeValues | undefined);
    /** operator. Serialized as `:operator` */
    get operator(): DataValidationOperatorValues | undefined;
    set operator(v: DataValidationOperatorValues | undefined);
    /** allowBlank. Serialized as `:allowBlank` */
    get allowBlank(): BooleanValue | undefined;
    set allowBlank(v: BooleanValue | undefined);
    /** showDropDown. Serialized as `:showDropDown` */
    get showDropDown(): BooleanValue | undefined;
    set showDropDown(v: BooleanValue | undefined);
    /** showInputMessage. Serialized as `:showInputMessage` */
    get showInputMessage(): BooleanValue | undefined;
    set showInputMessage(v: BooleanValue | undefined);
    /** showErrorMessage. Serialized as `:showErrorMessage` */
    get showErrorMessage(): BooleanValue | undefined;
    set showErrorMessage(v: BooleanValue | undefined);
    /** errorTitle. Serialized as `:errorTitle` */
    get errorTitle(): StringValue | undefined;
    set errorTitle(v: StringValue | undefined);
    /** error. Serialized as `:error` */
    get error(): StringValue | undefined;
    set error(v: StringValue | undefined);
    /** promptTitle. Serialized as `:promptTitle` */
    get promptTitle(): StringValue | undefined;
    set promptTitle(v: StringValue | undefined);
    /** prompt. Serialized as `:prompt` */
    get prompt(): StringValue | undefined;
    set prompt(v: StringValue | undefined);
    /** sqref. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
    /** Returns X12acList. */
    get list(): X12acList | undefined;
    /** Returns XFormula1. */
    get formula1(): XFormula1 | undefined;
    /** Returns XFormula2. */
    get formula2(): XFormula2 | undefined;
}
/** Defines the RefTest Class. Serialized as `xr:test` */
export declare class RefTest extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** ajt. Serialized as `:ajt` */
    get ajt(): AdjustType | undefined;
    set ajt(v: AdjustType | undefined);
    /** ajtx. Serialized as `:ajtx` */
    get ajtx(): AdjustTypeExt | undefined;
    set ajtx(v: AdjustTypeExt | undefined);
    /** homeRef. Serialized as `:homeRef` */
    get homeRef(): BooleanValue | undefined;
    set homeRef(v: BooleanValue | undefined);
}
/** Defines the RefFuture Class. Serialized as `xr:future` */
export declare class RefFuture extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the RefOartAnchor Class. Serialized as `xr:oartAnchor` */
export declare class RefOartAnchor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** ajt. Serialized as `:ajt` */
    get ajt(): AdjustType | undefined;
    set ajt(v: AdjustType | undefined);
    /** ajtx. Serialized as `:ajtx` */
    get ajtx(): AdjustTypeExt | undefined;
    set ajtx(v: AdjustTypeExt | undefined);
    /** homeRef. Serialized as `:homeRef` */
    get homeRef(): BooleanValue | undefined;
    set homeRef(v: BooleanValue | undefined);
    /** r. Serialized as `:r` */
    get r(): StringValue | undefined;
    set r(v: StringValue | undefined);
    /** fromRowOff. Serialized as `:fromRowOff` */
    get fromRowOff(): Int64Value | undefined;
    set fromRowOff(v: Int64Value | undefined);
    /** fromColOff. Serialized as `:fromColOff` */
    get fromColOff(): Int64Value | undefined;
    set fromColOff(v: Int64Value | undefined);
    /** toRowOff. Serialized as `:toRowOff` */
    get toRowOff(): Int64Value | undefined;
    set toRowOff(v: Int64Value | undefined);
    /** toColOff. Serialized as `:toColOff` */
    get toColOff(): Int64Value | undefined;
    set toColOff(v: Int64Value | undefined);
    /** cx. Serialized as `:cx` */
    get cx(): Int64Value | undefined;
    set cx(v: Int64Value | undefined);
    /** cy. Serialized as `:cy` */
    get cy(): Int64Value | undefined;
    set cy(v: Int64Value | undefined);
    /** x. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** y. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
    /** oat. Serialized as `:oat` */
    get oat(): OartAnchorType | undefined;
    set oat(v: OartAnchorType | undefined);
}
/** Defines the SheetXluid Class. Serialized as `xr:sheetUid` */
export declare class SheetXluid extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** ajt. Serialized as `:ajt` */
    get ajt(): AdjustType | undefined;
    set ajt(v: AdjustType | undefined);
    /** ajtx. Serialized as `:ajtx` */
    get ajtx(): AdjustTypeExt | undefined;
    set ajtx(v: AdjustTypeExt | undefined);
    /** homeRef. Serialized as `:homeRef` */
    get homeRef(): BooleanValue | undefined;
    set homeRef(v: BooleanValue | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
}
/** Defines the RefCell Class. Serialized as `xr:ref` */
export declare class RefCell extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get n(): StringValue | undefined;
    set n(v: StringValue | undefined);
    /** ajt. Serialized as `:ajt` */
    get ajt(): AdjustType | undefined;
    set ajt(v: AdjustType | undefined);
    /** ajtx. Serialized as `:ajtx` */
    get ajtx(): AdjustTypeExt | undefined;
    set ajtx(v: AdjustTypeExt | undefined);
    /** homeRef. Serialized as `:homeRef` */
    get homeRef(): BooleanValue | undefined;
    set homeRef(v: BooleanValue | undefined);
    /** r. Serialized as `:r` */
    get r(): ListValue<StringValue> | undefined;
    set r(v: ListValue<StringValue> | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** uidLast. Serialized as `:uidLast` */
    get uidLast(): StringValue | undefined;
    set uidLast(v: StringValue | undefined);
}
/** Defines the RstType Class. Serialized as `xr:is` */
export declare class RstType extends OxmlCompositeElement<XText | XRun | XPhoneticRun | XPhoneticProperties> {
    static _Q: string;
    /** Text. */
    get text(): XText | undefined;
}
/** Defines the Xstring Class. Serialized as `xr:v` */
export declare class Xstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Outline Class. Serialized as `xr:outline` */
export declare class Outline extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** isCollapsed. Serialized as `:isCollapsed` */
    get isCollapsed(): BooleanValue | undefined;
    set isCollapsed(v: BooleanValue | undefined);
    /** level. Serialized as `:level` */
    get level(): ByteValue | undefined;
    set level(v: ByteValue | undefined);
}
/** Defines the Outlines Class. Serialized as `xr:outlines` */
export declare class Outlines extends OxmlCompositeElement<Outline> {
    static _Q: string;
    static _A: string[];
    /** isRow. Serialized as `:isRow` */
    get isRow(): BooleanValue | undefined;
    set isRow(v: BooleanValue | undefined);
}
/** Defines the FreezePanes Class. Serialized as `xr:freezePanes` */
export declare class FreezePanes extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** sheetViewUid. Serialized as `:sheetViewUid` */
    get sheetViewUid(): StringValue | undefined;
    set sheetViewUid(v: StringValue | undefined);
}
/** Defines the ShowGridlinesHeadings Class. Serialized as `xr:showGridlinesHeadings` */
export declare class ShowGridlinesHeadings extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** showGridLines. Serialized as `:showGridLines` */
    get showGridLines(): BooleanValue | undefined;
    set showGridLines(v: BooleanValue | undefined);
    /** showRowCol. Serialized as `:showRowCol` */
    get showRowCol(): BooleanValue | undefined;
    set showRowCol(v: BooleanValue | undefined);
}
/** Defines the HideUnhideSheet Class. Serialized as `xr:hideUnhideSheet` */
export declare class HideUnhideSheet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** hide. Serialized as `:hide` */
    get hide(): BooleanValue | undefined;
    set hide(v: BooleanValue | undefined);
}
/** Defines the RowColVisualOps Class. Serialized as `xr:rowColVisualOps` */
export declare class RowColVisualOps extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** action. Serialized as `:action` */
    get action(): RowColVisualOp | undefined;
    set action(v: RowColVisualOp | undefined);
    /** isRow. Serialized as `:isRow` */
    get isRow(): BooleanValue | undefined;
    set isRow(v: BooleanValue | undefined);
    /** size. Serialized as `:size` */
    get size(): UInt32Value | undefined;
    set size(v: UInt32Value | undefined);
    /** userSized. Serialized as `:userSized` */
    get userSized(): BooleanValue | undefined;
    set userSized(v: BooleanValue | undefined);
}
/** Defines the RefMap Class. Serialized as `xr:refmap` */
export declare class RefMap extends OxmlCompositeElement<RefCell | SheetXluid | RefOartAnchor | RefFuture | RefTest> {
    static _Q: string;
}
/** Defines the RevisionState Class. Serialized as `xr:body` */
export declare class RevisionState extends OxmlCompositeElement<RowColVisualOps | HideUnhideSheet | ShowGridlinesHeadings | FreezePanes | Outlines> {
    static _Q: string;
    /** Returns RowColVisualOps. */
    get rowColVisualOps(): RowColVisualOps | undefined;
    /** Returns HideUnhideSheet. */
    get hideUnhideSheet(): HideUnhideSheet | undefined;
    /** Returns ShowGridlinesHeadings. */
    get showGridlinesHeadings(): ShowGridlinesHeadings | undefined;
    /** Returns FreezePanes. */
    get freezePanes(): FreezePanes | undefined;
    /** Returns Outlines. */
    get outlines(): Outlines | undefined;
}
/** Defines the RevisionStateLink Class. Serialized as `xr:link` */
export declare class RevisionStateLink extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the StateBasedHeader Class. Serialized as `xr:hdr` */
export declare class StateBasedHeader extends OxmlCompositeElement<RefMap> {
    static _Q: string;
    static _A: string[];
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** eft. Serialized as `:eft` */
    get eft(): FeatureType | undefined;
    set eft(v: FeatureType | undefined);
    /** eftx. Serialized as `:eftx` */
    get eftx(): ExtFeatureType | undefined;
    set eftx(v: ExtFeatureType | undefined);
    /** seft. Serialized as `:seft` */
    get seft(): SubFeatureType | undefined;
    set seft(v: SubFeatureType | undefined);
    /** seftx. Serialized as `:seftx` */
    get seftx(): ExtSubFeatureType | undefined;
    set seftx(v: ExtSubFeatureType | undefined);
    /** Returns RefMap. */
    get refMap(): RefMap | undefined;
}
/** Defines the FFormula Class. Serialized as `xr:f` */
export declare class FFormula extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the FormulaFormula Class. Serialized as `xr:formula` */
export declare class FormulaFormula extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the ExtensionList Class. Serialized as `xr:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the ChangeCellSubEdit Class. Serialized as `xr:ccse` */
export declare class ChangeCellSubEdit extends OxmlCompositeElement<RevCell> {
    static _Q: string;
    static _A: string[];
    /** r. Serialized as `:r` */
    get r(): StringValue | undefined;
    set r(v: StringValue | undefined);
    /** t. Serialized as `:t` */
    get t(): FillType | undefined;
    set t(v: FillType | undefined);
    /** x. Serialized as `:x` */
    get x(): FillTypeExt | undefined;
    set x(v: FillTypeExt | undefined);
    /** w. Serialized as `:w` */
    get w(): UInt32Value | undefined;
    set w(v: UInt32Value | undefined);
}
/** Defines the RevCell Class. Serialized as `xr:c` */
export declare class RevCell extends OxmlCompositeElement<FFormula | Xstring | RstType> {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get t(): CellValues | undefined;
    set t(v: CellValues | undefined);
    /** nop. Serialized as `:nop` */
    get nop(): BooleanValue | undefined;
    set nop(v: BooleanValue | undefined);
    /** tick. Serialized as `:tick` */
    get tick(): BooleanValue | undefined;
    set tick(v: BooleanValue | undefined);
    /** rep. Serialized as `:rep` */
    get rep(): UInt32Value | undefined;
    set rep(v: UInt32Value | undefined);
    /** Returns FFormula. */
    get fFormula(): FFormula | undefined;
    /** Returns Xstring. */
    get xstring(): Xstring | undefined;
    /** Returns RstType. */
    get rstType(): RstType | undefined;
}
/** Defines the RevExTest Class. Serialized as `xr:xrrtest` */
export declare class RevExTest extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the RevGroup Class. Serialized as `xr:xrrg` */
export declare class RevGroup extends OxmlCompositeElement<RevExFuture | RevExUnsupported | RevExTrimmed | RevExRowColumn | RevExMove | RevExChangeCell | RevExFormatting | RevExDefinedName | RevExDelObj | RevExChgObj | RevExSheetOp | RevisionList | RevListAutoExpandRw> {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
}
/** Defines the RevListAutoExpandRw Class. Serialized as `xr:xrrListExpR` */
export declare class RevListAutoExpandRw extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** refAdded. Serialized as `:refAdded` */
    get refAdded(): StringValue | undefined;
    set refAdded(v: StringValue | undefined);
    /** listGuid. Serialized as `:listGuid` */
    get listGuid(): StringValue | undefined;
    set listGuid(v: StringValue | undefined);
}
/** Defines the RevisionList Class. Serialized as `xr:xrrList` */
export declare class RevisionList extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** Data. Serialized as `:Data` */
    get Data(): BooleanValue | undefined;
    set Data(v: BooleanValue | undefined);
    /** Formatting. Serialized as `:Formatting` */
    get Formatting(): BooleanValue | undefined;
    set Formatting(v: BooleanValue | undefined);
    /** RangeBased. Serialized as `:RangeBased` */
    get RangeBased(): BooleanValue | undefined;
    set RangeBased(v: BooleanValue | undefined);
    /** Fake. Serialized as `:Fake` */
    get Fake(): BooleanValue | undefined;
    set Fake(v: BooleanValue | undefined);
    /** ref. Serialized as `:ref` */
    get ref(): StringValue | undefined;
    set ref(v: StringValue | undefined);
    /** Headers. Serialized as `:Headers` */
    get Headers(): BooleanValue | undefined;
    set Headers(v: BooleanValue | undefined);
    /** InsDelHeaders. Serialized as `:InsDelHeaders` */
    get InsDelHeaders(): BooleanValue | undefined;
    set InsDelHeaders(v: BooleanValue | undefined);
    /** rId. Serialized as `:rId` */
    get rId(): UInt32Value | undefined;
    set rId(v: UInt32Value | undefined);
}
/** Defines the RevExSheetOp Class. Serialized as `xr:xrrSheet` */
export declare class RevExSheetOp extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** op. Serialized as `:op` */
    get op(): SheetOp | undefined;
    set op(v: SheetOp | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** idOrig. Serialized as `:idOrig` */
    get idOrig(): UInt32Value | undefined;
    set idOrig(v: UInt32Value | undefined);
    /** idNew. Serialized as `:idNew` */
    get idNew(): UInt32Value | undefined;
    set idNew(v: UInt32Value | undefined);
}
/** Defines the RevExChgObj Class. Serialized as `xr:xrrco` */
export declare class RevExChgObj extends OxmlCompositeElement<StateBasedHeader | RevisionStateLink | RevisionState> {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** Returns StateBasedHeader. */
    get stateBasedHeader(): StateBasedHeader | undefined;
}
/** Defines the RevExDelObj Class. Serialized as `xr:xrrdo` */
export declare class RevExDelObj extends OxmlCompositeElement<StateBasedHeader> {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** Returns StateBasedHeader. */
    get stateBasedHeader(): StateBasedHeader | undefined;
}
/** Defines the RevExDefinedName Class. Serialized as `xr:xrrDefName` */
export declare class RevExDefinedName extends OxmlCompositeElement<FormulaFormula | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** customView. Serialized as `:customView` */
    get customView(): BooleanValue | undefined;
    set customView(v: BooleanValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** function. Serialized as `:function` */
    get function(): BooleanValue | undefined;
    set function(v: BooleanValue | undefined);
    /** functionGroupId. Serialized as `:functionGroupId` */
    get functionGroupId(): ByteValue | undefined;
    set functionGroupId(v: ByteValue | undefined);
    /** shortcutKey. Serialized as `:shortcutKey` */
    get shortcutKey(): ByteValue | undefined;
    set shortcutKey(v: ByteValue | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** customMenu. Serialized as `:customMenu` */
    get customMenu(): StringValue | undefined;
    set customMenu(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** help. Serialized as `:help` */
    get help(): StringValue | undefined;
    set help(v: StringValue | undefined);
    /** statusBar. Serialized as `:statusBar` */
    get statusBar(): StringValue | undefined;
    set statusBar(v: StringValue | undefined);
    /** comment. Serialized as `:comment` */
    get comment(): StringValue | undefined;
    set comment(v: StringValue | undefined);
    /** Returns FormulaFormula. */
    get formulaFormula(): FormulaFormula | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the RevExFormatting Class. Serialized as `xr:xrrf` */
export declare class RevExFormatting extends OxmlCompositeElement<DifferentialFormatType | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** numFmtId. Serialized as `:numFmtId` */
    get numFmtId(): UInt32Value | undefined;
    set numFmtId(v: UInt32Value | undefined);
    /** xfDxf. Serialized as `:xfDxf` */
    get xfDxf(): BooleanValue | undefined;
    set xfDxf(v: BooleanValue | undefined);
    /** style. Serialized as `:style` */
    get style(): BooleanValue | undefined;
    set style(v: BooleanValue | undefined);
    /** sqref. Serialized as `:sqref` */
    get sqref(): ListValue<StringValue> | undefined;
    set sqref(v: ListValue<StringValue> | undefined);
    /** start. Serialized as `:start` */
    get start(): UInt32Value | undefined;
    set start(v: UInt32Value | undefined);
    /** length. Serialized as `:length` */
    get length(): UInt32Value | undefined;
    set length(v: UInt32Value | undefined);
    /** styleUid. Serialized as `:styleUid` */
    get styleUid(): StringValue | undefined;
    set styleUid(v: StringValue | undefined);
    /** fBlankCell. Serialized as `:fBlankCell` */
    get fBlankCell(): BooleanValue | undefined;
    set fBlankCell(v: BooleanValue | undefined);
    /** applyNumberFormat. Serialized as `:applyNumberFormat` */
    get applyNumberFormat(): BooleanValue | undefined;
    set applyNumberFormat(v: BooleanValue | undefined);
    /** applyFont. Serialized as `:applyFont` */
    get applyFont(): BooleanValue | undefined;
    set applyFont(v: BooleanValue | undefined);
    /** applyFill. Serialized as `:applyFill` */
    get applyFill(): BooleanValue | undefined;
    set applyFill(v: BooleanValue | undefined);
    /** applyBorder. Serialized as `:applyBorder` */
    get applyBorder(): BooleanValue | undefined;
    set applyBorder(v: BooleanValue | undefined);
    /** applyAlignment. Serialized as `:applyAlignment` */
    get applyAlignment(): BooleanValue | undefined;
    set applyAlignment(v: BooleanValue | undefined);
    /** applyProtection. Serialized as `:applyProtection` */
    get applyProtection(): BooleanValue | undefined;
    set applyProtection(v: BooleanValue | undefined);
    /** Returns DifferentialFormatType. */
    get differentialFormatType(): DifferentialFormatType | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the RevExChangeCell Class. Serialized as `xr:xrrc` */
export declare class RevExChangeCell extends OxmlCompositeElement<RevCell | ChangeCellSubEdit> {
    static _Q: string;
    static _A: string[];
    /** listUid. Serialized as `:listUid` */
    get listUid(): StringValue | undefined;
    set listUid(v: StringValue | undefined);
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** r. Serialized as `:r` */
    get r(): StringValue | undefined;
    set r(v: StringValue | undefined);
    /** t. Serialized as `:t` */
    get t(): FillType | undefined;
    set t(v: FillType | undefined);
    /** x. Serialized as `:x` */
    get x(): FillTypeExt | undefined;
    set x(v: FillTypeExt | undefined);
    /** w. Serialized as `:w` */
    get w(): UInt32Value | undefined;
    set w(v: UInt32Value | undefined);
}
/** Defines the RevExMove Class. Serialized as `xr:xrrm` */
export declare class RevExMove extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** src. Serialized as `:src` */
    get src(): StringValue | undefined;
    set src(v: StringValue | undefined);
    /** dst. Serialized as `:dst` */
    get dst(): StringValue | undefined;
    set dst(v: StringValue | undefined);
    /** srcSh. Serialized as `:srcSh` */
    get srcSh(): StringValue | undefined;
    set srcSh(v: StringValue | undefined);
}
/** Defines the RevExRowColumn Class. Serialized as `xr:xrrrc` */
export declare class RevExRowColumn extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** eol. Serialized as `:eol` */
    get eol(): BooleanValue | undefined;
    set eol(v: BooleanValue | undefined);
    /** ref. Serialized as `:ref` */
    get ref(): StringValue | undefined;
    set ref(v: StringValue | undefined);
    /** action. Serialized as `:action` */
    get action(): RwColAction | undefined;
    set action(v: RwColAction | undefined);
}
/** Defines the RevExTrimmed Class. Serialized as `xr:xrrTrim` */
export declare class RevExTrimmed extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
}
/** Defines the RevExUnsupported Class. Serialized as `xr:xrrUspt` */
export declare class RevExUnsupported extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
}
/** Defines the RevExFuture Class. Serialized as `xr:xrrftr` */
export declare class RevExFuture extends OxmlCompositeElement<RevExTest> {
    static _Q: string;
    static _A: string[];
    /** rev. Serialized as `:rev` */
    get rev(): UInt64Value | undefined;
    set rev(v: UInt64Value | undefined);
    /** uid. Serialized as `:uid` */
    get uid(): StringValue | undefined;
    set uid(v: StringValue | undefined);
    /** sh. Serialized as `:sh` */
    get sh(): StringValue | undefined;
    set sh(v: StringValue | undefined);
    /** uidp. Serialized as `:uidp` */
    get uidp(): StringValue | undefined;
    set uidp(v: StringValue | undefined);
    /** ctx. Serialized as `:ctx` */
    get ctx(): RevisionContext | undefined;
    set ctx(v: RevisionContext | undefined);
    /** sti. Serialized as `:sti` */
    get sti(): BooleanValue | undefined;
    set sti(v: BooleanValue | undefined);
}
/** Defines the RevExHeader Class. Serialized as `xr:hdr` */
export declare class RevExHeader extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** minRev. Serialized as `:minRev` */
    get minRev(): UInt64Value | undefined;
    set minRev(v: UInt64Value | undefined);
    /** maxRev. Serialized as `:maxRev` */
    get maxRev(): UInt64Value | undefined;
    set maxRev(v: UInt64Value | undefined);
    /** time. Serialized as `:time` */
    get time(): DateTimeValue | undefined;
    set time(v: DateTimeValue | undefined);
}
/** Defines the StateBasedObject Class. Serialized as `xr:objectState` */
export declare class StateBasedObject extends OxmlCompositeElement<DataValidation | Hyperlink | SparklineGroup | Comments | AutoFilter | pivotTableDefinition> {
    static _Q: string;
    /** Represents an external link to another workbook.. */
    get dataValidation(): DataValidation | undefined;
    /** Represents a hyperlink within a cell.. */
    get hyperlink(): Hyperlink | undefined;
    /** Represents a sparkline group of 1 or more sparklines.. */
    get sparklineGroup(): SparklineGroup | undefined;
    /** Represents one comment within a cell.. */
    get comments(): Comments | undefined;
    /** Represents an autofilter.. */
    get autoFilter(): AutoFilter | undefined;
    /** Represents a PivotTable View.. */
    get pivotTableDefinition(): pivotTableDefinition | undefined;
}
/** Defines the RevisionPtr Class. Serialized as `xr:revisionPtr` */
export declare class RevisionPtr extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** revIDLastSave. Serialized as `:revIDLastSave` */
    get revIDLastSave(): UInt64Value | undefined;
    set revIDLastSave(v: UInt64Value | undefined);
    /** documentId. Serialized as `:documentId` */
    get documentId(): StringValue | undefined;
    set documentId(v: StringValue | undefined);
}
/** Defines the DifferentialFormatType Class. Serialized as `xr:dxf` */
export declare class DifferentialFormatType extends OxmlCompositeElement<XFont | XNumberingFormat | XFill | XAlignment | XBorder | XProtection | XExtensionList> {
    static _Q: string;
    /** Font Properties. */
    get font(): XFont | undefined;
    /** Number Format. */
    get numberingFormat(): XNumberingFormat | undefined;
    /** Fill. */
    get fill(): XFill | undefined;
    /** Alignment. */
    get alignment(): XAlignment | undefined;
    /** Border Properties. */
    get border(): XBorder | undefined;
    /** Protection Properties. */
    get protection(): XProtection | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): XExtensionList | undefined;
}
/** Defines the RevExStream Class. Serialized as `xr:revStream` */
export declare class RevExStream extends OxmlCompositeElement<RevExFuture | RevExUnsupported | RevExTrimmed | RevExRowColumn | RevExMove | RevExChangeCell | RevExFormatting | RevExDefinedName | RevExDelObj | RevExChgObj | RevExSheetOp | RevisionList | RevListAutoExpandRw | RevGroup> {
    static _Q: string;
}
/** Defines the RevExHeaders Class. Serialized as `xr:revHdrs` */
export declare class RevExHeaders extends OxmlCompositeElement<RevExHeader> {
    static _Q: string;
    static _A: string[];
    /** minRev. Serialized as `:minRev` */
    get minRev(): UInt64Value | undefined;
    set minRev(v: UInt64Value | undefined);
    /** maxRev. Serialized as `:maxRev` */
    get maxRev(): UInt64Value | undefined;
    set maxRev(v: UInt64Value | undefined);
    /** docId. Serialized as `:docId` */
    get docId(): StringValue | undefined;
    set docId(v: StringValue | undefined);
    /** endpointId. Serialized as `:endpointId` */
    get endpointId(): StringValue | undefined;
    set endpointId(v: StringValue | undefined);
}
export declare function initOffice2016ExcelNamespace(): {
    prefix: string;
    xmlns: string;
};
