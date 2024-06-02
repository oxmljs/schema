import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { ByteValue } from '../../../framework/types/ByteValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { ListValue } from '../../../framework/types/ListValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { UInt64Value } from '../../../framework/types/UInt64Value';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { SparklineTypeValues, SparklineTypeValuesArray } from '../../Office2010/Excel';
import { DisplayBlanksAsValues, DisplayBlanksAsValuesArray } from '../../Office2010/Excel';
import { SparklineAxisMinMaxValues, SparklineAxisMinMaxValuesArray } from '../../Office2010/Excel';
import { DataValidationValues, DataValidationValuesArray } from '../../Spreadsheet';
import { DataValidationErrorStyleValues, DataValidationErrorStyleValuesArray } from '../../Spreadsheet';
import { DataValidationImeModeValues, DataValidationImeModeValuesArray } from '../../Spreadsheet';
import { DataValidationOperatorValues, DataValidationOperatorValuesArray } from '../../Spreadsheet';
import { CellValues, CellValuesArray } from '../../Spreadsheet';import { Location as XLocation } from '../../Spreadsheet';
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


export enum RevisionContext {
    /** undefined. Serialized value: `normal` */
    Normal = 'normal',
    /** undefined. Serialized value: `undo` */
    Undo = 'undo',
    /** undefined. Serialized value: `redo` */
    Redo = 'redo',
    /** undefined. Serialized value: `copy` */
    Copy = 'copy',
}

export const RevisionContextArray = [
    RevisionContext.Normal,
    RevisionContext.Undo,
    RevisionContext.Redo,
    RevisionContext.Copy,
] as const;

export enum RwColAction {
    /** undefined. Serialized value: `insr` */
    Insr = 'insr',
    /** undefined. Serialized value: `delr` */
    Delr = 'delr',
    /** undefined. Serialized value: `insc` */
    Insc = 'insc',
    /** undefined. Serialized value: `delc` */
    Delc = 'delc',
}

export const RwColActionArray = [
    RwColAction.Insr,
    RwColAction.Delr,
    RwColAction.Insc,
    RwColAction.Delc,
] as const;

export enum FeatureType {
    /** undefined. Serialized value: `dataValidation` */
    DataValidation = 'dataValidation',
    /** undefined. Serialized value: `hyperlink` */
    Hyperlink = 'hyperlink',
    /** undefined. Serialized value: `rowColVisualOps` */
    RowColVisualOps = 'rowColVisualOps',
    /** undefined. Serialized value: `freezePanes` */
    FreezePanes = 'freezePanes',
    /** undefined. Serialized value: `sparklines` */
    Sparklines = 'sparklines',
    /** undefined. Serialized value: `hideUnhideSheet` */
    HideUnhideSheet = 'hideUnhideSheet',
    /** undefined. Serialized value: `showGridlinesHeadings` */
    ShowGridlinesHeadings = 'showGridlinesHeadings',
    /** undefined. Serialized value: `comment` */
    Comment = 'comment',
    /** undefined. Serialized value: `outlines` */
    Outlines = 'outlines',
    /** undefined. Serialized value: `drawingElement` */
    DrawingElement = 'drawingElement',
    /** undefined. Serialized value: `autoFilter` */
    AutoFilter = 'autoFilter',
    /** undefined. Serialized value: `pivotTable` */
    PivotTable = 'pivotTable',
    /** undefined. Serialized value: `future` */
    Future = 'future',
}

export const FeatureTypeArray = [
    FeatureType.DataValidation,
    FeatureType.Hyperlink,
    FeatureType.RowColVisualOps,
    FeatureType.FreezePanes,
    FeatureType.Sparklines,
    FeatureType.HideUnhideSheet,
    FeatureType.ShowGridlinesHeadings,
    FeatureType.Comment,
    FeatureType.Outlines,
    FeatureType.DrawingElement,
    FeatureType.AutoFilter,
    FeatureType.PivotTable,
    FeatureType.Future,
] as const;

export enum ExtFeatureType {
    /** undefined. Serialized value: `reserved` */
    Reserved = 'reserved',
}

export const ExtFeatureTypeArray = [
    ExtFeatureType.Reserved,
] as const;

export enum SubFeatureType {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `future` */
    Future = 'future',
}

export const SubFeatureTypeArray = [
    SubFeatureType.None,
    SubFeatureType.Future,
] as const;

export enum ExtSubFeatureType {
    /** undefined. Serialized value: `reserved` */
    Reserved = 'reserved',
}

export const ExtSubFeatureTypeArray = [
    ExtSubFeatureType.Reserved,
] as const;

export enum RowColVisualOp {
    /** undefined. Serialized value: `hide` */
    Hide = 'hide',
    /** undefined. Serialized value: `unhide` */
    Unhide = 'unhide',
    /** undefined. Serialized value: `resize` */
    Resize = 'resize',
    /** undefined. Serialized value: `autosize` */
    Autosize = 'autosize',
}

export const RowColVisualOpArray = [
    RowColVisualOp.Hide,
    RowColVisualOp.Unhide,
    RowColVisualOp.Resize,
    RowColVisualOp.Autosize,
] as const;

export enum SheetOp {
    /** undefined. Serialized value: `insert` */
    Insert = 'insert',
    /** undefined. Serialized value: `delete` */
    Delete = 'delete',
    /** undefined. Serialized value: `reorder` */
    Reorder = 'reorder',
    /** undefined. Serialized value: `rename` */
    Rename = 'rename',
}

export const SheetOpArray = [
    SheetOp.Insert,
    SheetOp.Delete,
    SheetOp.Reorder,
    SheetOp.Rename,
] as const;

export enum FillType {
    /** undefined. Serialized value: `fill` */
    Fill = 'fill',
    /** undefined. Serialized value: `array` */
    Array = 'array',
    /** undefined. Serialized value: `future` */
    Future = 'future',
}

export const FillTypeArray = [
    FillType.Fill,
    FillType.Array,
    FillType.Future,
] as const;

export enum FillTypeExt {
    /** undefined. Serialized value: `test` */
    Test = 'test',
}

export const FillTypeExtArray = [
    FillTypeExt.Test,
] as const;

export enum AdjustType {
    /** undefined. Serialized value: `fmla` */
    Fmla = 'fmla',
    /** undefined. Serialized value: `format` */
    Format = 'format',
    /** undefined. Serialized value: `condFmt` */
    CondFmt = 'condFmt',
    /** undefined. Serialized value: `sparkline` */
    Sparkline = 'sparkline',
    /** undefined. Serialized value: `anchor` */
    Anchor = 'anchor',
    /** undefined. Serialized value: `fmlaNoSticky` */
    FmlaNoSticky = 'fmlaNoSticky',
    /** undefined. Serialized value: `noAdj` */
    NoAdj = 'noAdj',
    /** undefined. Serialized value: `fragile` */
    Fragile = 'fragile',
    /** undefined. Serialized value: `future` */
    Future = 'future',
}

export const AdjustTypeArray = [
    AdjustType.Fmla,
    AdjustType.Format,
    AdjustType.CondFmt,
    AdjustType.Sparkline,
    AdjustType.Anchor,
    AdjustType.FmlaNoSticky,
    AdjustType.NoAdj,
    AdjustType.Fragile,
    AdjustType.Future,
] as const;

export enum AdjustTypeExt {
    /** undefined. Serialized value: `test` */
    Test = 'test',
}

export const AdjustTypeExtArray = [
    AdjustTypeExt.Test,
] as const;

export enum OartAnchorType {
    /** undefined. Serialized value: `twoCell` */
    TwoCell = 'twoCell',
    /** undefined. Serialized value: `oneCell` */
    OneCell = 'oneCell',
    /** undefined. Serialized value: `absolute` */
    Absolute = 'absolute',
}

export const OartAnchorTypeArray = [
    OartAnchorType.TwoCell,
    OartAnchorType.OneCell,
    OartAnchorType.Absolute,
] as const;

/** Represents a PivotTable View.. Serialized as `xr:pivotTableDefinition` */
export class pivotTableDefinition extends OxmlCompositeElement<XLocation | XPivotFields | XRowFields | XRowItems | XColumnFields | XColumnItems | XPageFields | XDataFields | XFormats | XConditionalFormats | XChartFormats | XPivotHierarchies | XPivotTableStyle | XPivotFilters | XRowHierarchiesUsage | XColumnHierarchiesUsage | XPivotTableDefinitionExtensionList> {

    public static override _Q = 'xr:pivotTableDefinition';
    public static override _A = [':name',':cacheId',':dataOnRows',':dataPosition',':autoFormatId',':applyNumberFormats',':applyBorderFormats',':applyFontFormats',':applyPatternFormats',':applyAlignmentFormats',':applyWidthHeightFormats',':dataCaption',':grandTotalCaption',':errorCaption',':showError',':missingCaption',':showMissing',':pageStyle',':pivotTableStyle',':vacatedStyle',':tag',':updatedVersion',':minRefreshableVersion',':asteriskTotals',':showItems',':editData',':disableFieldList',':showCalcMbrs',':visualTotals',':showMultipleLabel',':showDataDropDown',':showDrill',':printDrill',':showMemberPropertyTips',':showDataTips',':enableWizard',':enableDrill',':enableFieldProperties',':preserveFormatting',':useAutoFormatting',':pageWrap',':pageOverThenDown',':subtotalHiddenItems',':rowGrandTotals',':colGrandTotals',':fieldPrintTitles',':itemPrintTitles',':mergeItem',':showDropZones',':createdVersion',':indent',':showEmptyRow',':showEmptyCol',':showHeaders',':compact',':outline',':outlineData',':compactData',':published',':gridDropZones',':immersive',':multipleFieldFilters',':chartFormat',':rowHeaderCaption',':colHeaderCaption',':fieldListSortAscending',':mdxSubqueries',':customListSort',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** cacheId. Serialized as `:cacheId` */
    public get cacheId(): UInt32Value | undefined { return this._g(':cacheId'); }
    public set cacheId(v: UInt32Value | undefined) { this._s(':cacheId', v); }
    /** dataOnRows. Serialized as `:dataOnRows` */
    public get dataOnRows(): BooleanValue | undefined { return this._g(':dataOnRows'); }
    public set dataOnRows(v: BooleanValue | undefined) { this._s(':dataOnRows', v); }
    /** dataPosition. Serialized as `:dataPosition` */
    public get dataPosition(): UInt32Value | undefined { return this._g(':dataPosition'); }
    public set dataPosition(v: UInt32Value | undefined) { this._s(':dataPosition', v); }
    /** Auto Format Id. Serialized as `:autoFormatId` */
    public get autoFormatId(): UInt32Value | undefined { return this._g(':autoFormatId'); }
    public set autoFormatId(v: UInt32Value | undefined) { this._s(':autoFormatId', v); }
    /** Apply Number Formats. Serialized as `:applyNumberFormats` */
    public get applyNumberFormats(): BooleanValue | undefined { return this._g(':applyNumberFormats'); }
    public set applyNumberFormats(v: BooleanValue | undefined) { this._s(':applyNumberFormats', v); }
    /** Apply Border Formats. Serialized as `:applyBorderFormats` */
    public get applyBorderFormats(): BooleanValue | undefined { return this._g(':applyBorderFormats'); }
    public set applyBorderFormats(v: BooleanValue | undefined) { this._s(':applyBorderFormats', v); }
    /** Apply Font Formats. Serialized as `:applyFontFormats` */
    public get applyFontFormats(): BooleanValue | undefined { return this._g(':applyFontFormats'); }
    public set applyFontFormats(v: BooleanValue | undefined) { this._s(':applyFontFormats', v); }
    /** Apply Pattern Formats. Serialized as `:applyPatternFormats` */
    public get applyPatternFormats(): BooleanValue | undefined { return this._g(':applyPatternFormats'); }
    public set applyPatternFormats(v: BooleanValue | undefined) { this._s(':applyPatternFormats', v); }
    /** Apply Alignment Formats. Serialized as `:applyAlignmentFormats` */
    public get applyAlignmentFormats(): BooleanValue | undefined { return this._g(':applyAlignmentFormats'); }
    public set applyAlignmentFormats(v: BooleanValue | undefined) { this._s(':applyAlignmentFormats', v); }
    /** Apply Width / Height Formats. Serialized as `:applyWidthHeightFormats` */
    public get applyWidthHeightFormats(): BooleanValue | undefined { return this._g(':applyWidthHeightFormats'); }
    public set applyWidthHeightFormats(v: BooleanValue | undefined) { this._s(':applyWidthHeightFormats', v); }
    /** dataCaption. Serialized as `:dataCaption` */
    public get dataCaption(): StringValue | undefined { return this._g(':dataCaption'); }
    public set dataCaption(v: StringValue | undefined) { this._s(':dataCaption', v); }
    /** grandTotalCaption. Serialized as `:grandTotalCaption` */
    public get grandTotalCaption(): StringValue | undefined { return this._g(':grandTotalCaption'); }
    public set grandTotalCaption(v: StringValue | undefined) { this._s(':grandTotalCaption', v); }
    /** errorCaption. Serialized as `:errorCaption` */
    public get errorCaption(): StringValue | undefined { return this._g(':errorCaption'); }
    public set errorCaption(v: StringValue | undefined) { this._s(':errorCaption', v); }
    /** showError. Serialized as `:showError` */
    public get showError(): BooleanValue | undefined { return this._g(':showError'); }
    public set showError(v: BooleanValue | undefined) { this._s(':showError', v); }
    /** missingCaption. Serialized as `:missingCaption` */
    public get missingCaption(): StringValue | undefined { return this._g(':missingCaption'); }
    public set missingCaption(v: StringValue | undefined) { this._s(':missingCaption', v); }
    /** showMissing. Serialized as `:showMissing` */
    public get showMissing(): BooleanValue | undefined { return this._g(':showMissing'); }
    public set showMissing(v: BooleanValue | undefined) { this._s(':showMissing', v); }
    /** pageStyle. Serialized as `:pageStyle` */
    public get pageStyle(): StringValue | undefined { return this._g(':pageStyle'); }
    public set pageStyle(v: StringValue | undefined) { this._s(':pageStyle', v); }
    /** pivotTableStyle. Serialized as `:pivotTableStyle` */
    public get pivotTableStyleName(): StringValue | undefined { return this._g(':pivotTableStyle'); }
    public set pivotTableStyleName(v: StringValue | undefined) { this._s(':pivotTableStyle', v); }
    /** vacatedStyle. Serialized as `:vacatedStyle` */
    public get vacatedStyle(): StringValue | undefined { return this._g(':vacatedStyle'); }
    public set vacatedStyle(v: StringValue | undefined) { this._s(':vacatedStyle', v); }
    /** tag. Serialized as `:tag` */
    public get tag(): StringValue | undefined { return this._g(':tag'); }
    public set tag(v: StringValue | undefined) { this._s(':tag', v); }
    /** updatedVersion. Serialized as `:updatedVersion` */
    public get updatedVersion(): ByteValue | undefined { return this._g(':updatedVersion'); }
    public set updatedVersion(v: ByteValue | undefined) { this._s(':updatedVersion', v); }
    /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
    public get minRefreshableVersion(): ByteValue | undefined { return this._g(':minRefreshableVersion'); }
    public set minRefreshableVersion(v: ByteValue | undefined) { this._s(':minRefreshableVersion', v); }
    /** asteriskTotals. Serialized as `:asteriskTotals` */
    public get asteriskTotals(): BooleanValue | undefined { return this._g(':asteriskTotals'); }
    public set asteriskTotals(v: BooleanValue | undefined) { this._s(':asteriskTotals', v); }
    /** showItems. Serialized as `:showItems` */
    public get showItems(): BooleanValue | undefined { return this._g(':showItems'); }
    public set showItems(v: BooleanValue | undefined) { this._s(':showItems', v); }
    /** editData. Serialized as `:editData` */
    public get editData(): BooleanValue | undefined { return this._g(':editData'); }
    public set editData(v: BooleanValue | undefined) { this._s(':editData', v); }
    /** disableFieldList. Serialized as `:disableFieldList` */
    public get disableFieldList(): BooleanValue | undefined { return this._g(':disableFieldList'); }
    public set disableFieldList(v: BooleanValue | undefined) { this._s(':disableFieldList', v); }
    /** showCalcMbrs. Serialized as `:showCalcMbrs` */
    public get showCalculatedMembers(): BooleanValue | undefined { return this._g(':showCalcMbrs'); }
    public set showCalculatedMembers(v: BooleanValue | undefined) { this._s(':showCalcMbrs', v); }
    /** visualTotals. Serialized as `:visualTotals` */
    public get visualTotals(): BooleanValue | undefined { return this._g(':visualTotals'); }
    public set visualTotals(v: BooleanValue | undefined) { this._s(':visualTotals', v); }
    /** showMultipleLabel. Serialized as `:showMultipleLabel` */
    public get showMultipleLabel(): BooleanValue | undefined { return this._g(':showMultipleLabel'); }
    public set showMultipleLabel(v: BooleanValue | undefined) { this._s(':showMultipleLabel', v); }
    /** showDataDropDown. Serialized as `:showDataDropDown` */
    public get showDataDropDown(): BooleanValue | undefined { return this._g(':showDataDropDown'); }
    public set showDataDropDown(v: BooleanValue | undefined) { this._s(':showDataDropDown', v); }
    /** showDrill. Serialized as `:showDrill` */
    public get showDrill(): BooleanValue | undefined { return this._g(':showDrill'); }
    public set showDrill(v: BooleanValue | undefined) { this._s(':showDrill', v); }
    /** printDrill. Serialized as `:printDrill` */
    public get printDrill(): BooleanValue | undefined { return this._g(':printDrill'); }
    public set printDrill(v: BooleanValue | undefined) { this._s(':printDrill', v); }
    /** showMemberPropertyTips. Serialized as `:showMemberPropertyTips` */
    public get showMemberPropertyTips(): BooleanValue | undefined { return this._g(':showMemberPropertyTips'); }
    public set showMemberPropertyTips(v: BooleanValue | undefined) { this._s(':showMemberPropertyTips', v); }
    /** showDataTips. Serialized as `:showDataTips` */
    public get showDataTips(): BooleanValue | undefined { return this._g(':showDataTips'); }
    public set showDataTips(v: BooleanValue | undefined) { this._s(':showDataTips', v); }
    /** enableWizard. Serialized as `:enableWizard` */
    public get enableWizard(): BooleanValue | undefined { return this._g(':enableWizard'); }
    public set enableWizard(v: BooleanValue | undefined) { this._s(':enableWizard', v); }
    /** enableDrill. Serialized as `:enableDrill` */
    public get enableDrill(): BooleanValue | undefined { return this._g(':enableDrill'); }
    public set enableDrill(v: BooleanValue | undefined) { this._s(':enableDrill', v); }
    /** enableFieldProperties. Serialized as `:enableFieldProperties` */
    public get enableFieldProperties(): BooleanValue | undefined { return this._g(':enableFieldProperties'); }
    public set enableFieldProperties(v: BooleanValue | undefined) { this._s(':enableFieldProperties', v); }
    /** preserveFormatting. Serialized as `:preserveFormatting` */
    public get preserveFormatting(): BooleanValue | undefined { return this._g(':preserveFormatting'); }
    public set preserveFormatting(v: BooleanValue | undefined) { this._s(':preserveFormatting', v); }
    /** useAutoFormatting. Serialized as `:useAutoFormatting` */
    public get useAutoFormatting(): BooleanValue | undefined { return this._g(':useAutoFormatting'); }
    public set useAutoFormatting(v: BooleanValue | undefined) { this._s(':useAutoFormatting', v); }
    /** pageWrap. Serialized as `:pageWrap` */
    public get pageWrap(): UInt32Value | undefined { return this._g(':pageWrap'); }
    public set pageWrap(v: UInt32Value | undefined) { this._s(':pageWrap', v); }
    /** pageOverThenDown. Serialized as `:pageOverThenDown` */
    public get pageOverThenDown(): BooleanValue | undefined { return this._g(':pageOverThenDown'); }
    public set pageOverThenDown(v: BooleanValue | undefined) { this._s(':pageOverThenDown', v); }
    /** subtotalHiddenItems. Serialized as `:subtotalHiddenItems` */
    public get subtotalHiddenItems(): BooleanValue | undefined { return this._g(':subtotalHiddenItems'); }
    public set subtotalHiddenItems(v: BooleanValue | undefined) { this._s(':subtotalHiddenItems', v); }
    /** rowGrandTotals. Serialized as `:rowGrandTotals` */
    public get rowGrandTotals(): BooleanValue | undefined { return this._g(':rowGrandTotals'); }
    public set rowGrandTotals(v: BooleanValue | undefined) { this._s(':rowGrandTotals', v); }
    /** colGrandTotals. Serialized as `:colGrandTotals` */
    public get columnGrandTotals(): BooleanValue | undefined { return this._g(':colGrandTotals'); }
    public set columnGrandTotals(v: BooleanValue | undefined) { this._s(':colGrandTotals', v); }
    /** fieldPrintTitles. Serialized as `:fieldPrintTitles` */
    public get fieldPrintTitles(): BooleanValue | undefined { return this._g(':fieldPrintTitles'); }
    public set fieldPrintTitles(v: BooleanValue | undefined) { this._s(':fieldPrintTitles', v); }
    /** itemPrintTitles. Serialized as `:itemPrintTitles` */
    public get itemPrintTitles(): BooleanValue | undefined { return this._g(':itemPrintTitles'); }
    public set itemPrintTitles(v: BooleanValue | undefined) { this._s(':itemPrintTitles', v); }
    /** mergeItem. Serialized as `:mergeItem` */
    public get mergeItem(): BooleanValue | undefined { return this._g(':mergeItem'); }
    public set mergeItem(v: BooleanValue | undefined) { this._s(':mergeItem', v); }
    /** showDropZones. Serialized as `:showDropZones` */
    public get showDropZones(): BooleanValue | undefined { return this._g(':showDropZones'); }
    public set showDropZones(v: BooleanValue | undefined) { this._s(':showDropZones', v); }
    /** createdVersion. Serialized as `:createdVersion` */
    public get createdVersion(): ByteValue | undefined { return this._g(':createdVersion'); }
    public set createdVersion(v: ByteValue | undefined) { this._s(':createdVersion', v); }
    /** indent. Serialized as `:indent` */
    public get indent(): UInt32Value | undefined { return this._g(':indent'); }
    public set indent(v: UInt32Value | undefined) { this._s(':indent', v); }
    /** showEmptyRow. Serialized as `:showEmptyRow` */
    public get showEmptyRow(): BooleanValue | undefined { return this._g(':showEmptyRow'); }
    public set showEmptyRow(v: BooleanValue | undefined) { this._s(':showEmptyRow', v); }
    /** showEmptyCol. Serialized as `:showEmptyCol` */
    public get showEmptyColumn(): BooleanValue | undefined { return this._g(':showEmptyCol'); }
    public set showEmptyColumn(v: BooleanValue | undefined) { this._s(':showEmptyCol', v); }
    /** showHeaders. Serialized as `:showHeaders` */
    public get showHeaders(): BooleanValue | undefined { return this._g(':showHeaders'); }
    public set showHeaders(v: BooleanValue | undefined) { this._s(':showHeaders', v); }
    /** compact. Serialized as `:compact` */
    public get compact(): BooleanValue | undefined { return this._g(':compact'); }
    public set compact(v: BooleanValue | undefined) { this._s(':compact', v); }
    /** outline. Serialized as `:outline` */
    public get outline(): BooleanValue | undefined { return this._g(':outline'); }
    public set outline(v: BooleanValue | undefined) { this._s(':outline', v); }
    /** outlineData. Serialized as `:outlineData` */
    public get outlineData(): BooleanValue | undefined { return this._g(':outlineData'); }
    public set outlineData(v: BooleanValue | undefined) { this._s(':outlineData', v); }
    /** compactData. Serialized as `:compactData` */
    public get compactData(): BooleanValue | undefined { return this._g(':compactData'); }
    public set compactData(v: BooleanValue | undefined) { this._s(':compactData', v); }
    /** published. Serialized as `:published` */
    public get published(): BooleanValue | undefined { return this._g(':published'); }
    public set published(v: BooleanValue | undefined) { this._s(':published', v); }
    /** gridDropZones. Serialized as `:gridDropZones` */
    public get gridDropZones(): BooleanValue | undefined { return this._g(':gridDropZones'); }
    public set gridDropZones(v: BooleanValue | undefined) { this._s(':gridDropZones', v); }
    /** immersive. Serialized as `:immersive` */
    public get stopImmersiveUi(): BooleanValue | undefined { return this._g(':immersive'); }
    public set stopImmersiveUi(v: BooleanValue | undefined) { this._s(':immersive', v); }
    /** multipleFieldFilters. Serialized as `:multipleFieldFilters` */
    public get multipleFieldFilters(): BooleanValue | undefined { return this._g(':multipleFieldFilters'); }
    public set multipleFieldFilters(v: BooleanValue | undefined) { this._s(':multipleFieldFilters', v); }
    /** chartFormat. Serialized as `:chartFormat` */
    public get chartFormat(): UInt32Value | undefined { return this._g(':chartFormat'); }
    public set chartFormat(v: UInt32Value | undefined) { this._s(':chartFormat', v); }
    /** rowHeaderCaption. Serialized as `:rowHeaderCaption` */
    public get rowHeaderCaption(): StringValue | undefined { return this._g(':rowHeaderCaption'); }
    public set rowHeaderCaption(v: StringValue | undefined) { this._s(':rowHeaderCaption', v); }
    /** colHeaderCaption. Serialized as `:colHeaderCaption` */
    public get columnHeaderCaption(): StringValue | undefined { return this._g(':colHeaderCaption'); }
    public set columnHeaderCaption(v: StringValue | undefined) { this._s(':colHeaderCaption', v); }
    /** fieldListSortAscending. Serialized as `:fieldListSortAscending` */
    public get fieldListSortAscending(): BooleanValue | undefined { return this._g(':fieldListSortAscending'); }
    public set fieldListSortAscending(v: BooleanValue | undefined) { this._s(':fieldListSortAscending', v); }
    /** mdxSubqueries. Serialized as `:mdxSubqueries` */
    public get mdxSubqueries(): BooleanValue | undefined { return this._g(':mdxSubqueries'); }
    public set mdxSubqueries(v: BooleanValue | undefined) { this._s(':mdxSubqueries', v); }
    /** customListSort. Serialized as `:customListSort` */
    public get customListSort(): BooleanValue | undefined { return this._g(':customListSort'); }
    public set customListSort(v: BooleanValue | undefined) { this._s(':customListSort', v); }
    /** Returns XLocation. */
    public get location(): XLocation | undefined { return this._f(XLocation); }
    /** Returns XPivotFields. */
    public get pivotFields(): XPivotFields | undefined { return this._f(XPivotFields); }
    /** Returns XRowFields. */
    public get rowFields(): XRowFields | undefined { return this._f(XRowFields); }
    /** Returns XRowItems. */
    public get rowItems(): XRowItems | undefined { return this._f(XRowItems); }
    /** Returns XColumnFields. */
    public get columnFields(): XColumnFields | undefined { return this._f(XColumnFields); }
    /** Returns XColumnItems. */
    public get columnItems(): XColumnItems | undefined { return this._f(XColumnItems); }
    /** Returns XPageFields. */
    public get pageFields(): XPageFields | undefined { return this._f(XPageFields); }
    /** Returns XDataFields. */
    public get dataFields(): XDataFields | undefined { return this._f(XDataFields); }
    /** Returns XFormats. */
    public get formats(): XFormats | undefined { return this._f(XFormats); }
    /** Returns XConditionalFormats. */
    public get conditionalFormats(): XConditionalFormats | undefined { return this._f(XConditionalFormats); }
    /** Returns XChartFormats. */
    public get chartFormats(): XChartFormats | undefined { return this._f(XChartFormats); }
    /** Returns XPivotHierarchies. */
    public get pivotHierarchies(): XPivotHierarchies | undefined { return this._f(XPivotHierarchies); }
    /** Returns XPivotTableStyle. */
    public get pivotTableStyle(): XPivotTableStyle | undefined { return this._f(XPivotTableStyle); }
    /** Returns XPivotFilters. */
    public get pivotFilters(): XPivotFilters | undefined { return this._f(XPivotFilters); }
    /** Returns XRowHierarchiesUsage. */
    public get rowHierarchiesUsage(): XRowHierarchiesUsage | undefined { return this._f(XRowHierarchiesUsage); }
    /** Returns XColumnHierarchiesUsage. */
    public get columnHierarchiesUsage(): XColumnHierarchiesUsage | undefined { return this._f(XColumnHierarchiesUsage); }
    /** Returns XPivotTableDefinitionExtensionList. */
    public get pivotTableDefinitionExtensionList(): XPivotTableDefinitionExtensionList | undefined { return this._f(XPivotTableDefinitionExtensionList); }

}
/** Represents an autofilter.. Serialized as `xr:autoFilter` */
export class AutoFilter extends OxmlCompositeElement<XFilterColumn | XSortState | XExtensionList> {

    public static override _Q = 'xr:autoFilter';
    public static override _A = [':ref',];
    /** Cell or Range Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Represents one comment within a cell.. Serialized as `xr:comments` */
export class Comments extends OxmlCompositeElement<XAuthors | XCommentList | XExtensionList> {

    public static override _Q = 'xr:comments';
    /** Authors. */
    public get authors(): XAuthors | undefined { return this._f(XAuthors); }
    /** List of Comments. */
    public get commentList(): XCommentList | undefined { return this._f(XCommentList); }
    /** Returns XExtensionList. */
    public get extensionList(): XExtensionList | undefined { return this._f(XExtensionList); }

}
/** Represents a sparkline group of 1 or more sparklines.. Serialized as `xr:sparklineGroup` */
export class SparklineGroup extends OxmlCompositeElement<X14SeriesColor | X14NegativeColor | X14AxisColor | X14MarkersColor | X14FirstMarkerColor | X14LastMarkerColor | X14HighMarkerColor | X14LowMarkerColor | XneFormula | X14Sparklines> {

    public static override _Q = 'xr:sparklineGroup';
    public static override _A = [':manualMax',':manualMin',':lineWeight',':type',':dateAxis',':displayEmptyCellsAs',':markers',':high',':low',':first',':last',':negative',':displayXAxis',':displayHidden',':minAxisType',':maxAxisType',':rightToLeft',];
    /** manualMax. Serialized as `:manualMax` */
    public get manualMax(): DoubleValue | undefined { return this._g(':manualMax'); }
    public set manualMax(v: DoubleValue | undefined) { this._s(':manualMax', v); }
    /** manualMin. Serialized as `:manualMin` */
    public get manualMin(): DoubleValue | undefined { return this._g(':manualMin'); }
    public set manualMin(v: DoubleValue | undefined) { this._s(':manualMin', v); }
    /** lineWeight. Serialized as `:lineWeight` */
    public get lineWeight(): DoubleValue | undefined { return this._g(':lineWeight'); }
    public set lineWeight(v: DoubleValue | undefined) { this._s(':lineWeight', v); }
    /** type. Serialized as `:type` */
    public get type(): SparklineTypeValues | undefined { return this._g(':type'); }
    public set type(v: SparklineTypeValues | undefined) { this._s(':type', v); }
    /** dateAxis. Serialized as `:dateAxis` */
    public get dateAxis(): BooleanValue | undefined { return this._g(':dateAxis'); }
    public set dateAxis(v: BooleanValue | undefined) { this._s(':dateAxis', v); }
    /** displayEmptyCellsAs. Serialized as `:displayEmptyCellsAs` */
    public get displayEmptyCellsAs(): DisplayBlanksAsValues | undefined { return this._g(':displayEmptyCellsAs'); }
    public set displayEmptyCellsAs(v: DisplayBlanksAsValues | undefined) { this._s(':displayEmptyCellsAs', v); }
    /** markers. Serialized as `:markers` */
    public get markers(): BooleanValue | undefined { return this._g(':markers'); }
    public set markers(v: BooleanValue | undefined) { this._s(':markers', v); }
    /** high. Serialized as `:high` */
    public get high(): BooleanValue | undefined { return this._g(':high'); }
    public set high(v: BooleanValue | undefined) { this._s(':high', v); }
    /** low. Serialized as `:low` */
    public get low(): BooleanValue | undefined { return this._g(':low'); }
    public set low(v: BooleanValue | undefined) { this._s(':low', v); }
    /** first. Serialized as `:first` */
    public get first(): BooleanValue | undefined { return this._g(':first'); }
    public set first(v: BooleanValue | undefined) { this._s(':first', v); }
    /** last. Serialized as `:last` */
    public get last(): BooleanValue | undefined { return this._g(':last'); }
    public set last(v: BooleanValue | undefined) { this._s(':last', v); }
    /** negative. Serialized as `:negative` */
    public get negative(): BooleanValue | undefined { return this._g(':negative'); }
    public set negative(v: BooleanValue | undefined) { this._s(':negative', v); }
    /** displayXAxis. Serialized as `:displayXAxis` */
    public get displayXAxis(): BooleanValue | undefined { return this._g(':displayXAxis'); }
    public set displayXAxis(v: BooleanValue | undefined) { this._s(':displayXAxis', v); }
    /** displayHidden. Serialized as `:displayHidden` */
    public get displayHidden(): BooleanValue | undefined { return this._g(':displayHidden'); }
    public set displayHidden(v: BooleanValue | undefined) { this._s(':displayHidden', v); }
    /** minAxisType. Serialized as `:minAxisType` */
    public get minAxisType(): SparklineAxisMinMaxValues | undefined { return this._g(':minAxisType'); }
    public set minAxisType(v: SparklineAxisMinMaxValues | undefined) { this._s(':minAxisType', v); }
    /** maxAxisType. Serialized as `:maxAxisType` */
    public get maxAxisType(): SparklineAxisMinMaxValues | undefined { return this._g(':maxAxisType'); }
    public set maxAxisType(v: SparklineAxisMinMaxValues | undefined) { this._s(':maxAxisType', v); }
    /** rightToLeft. Serialized as `:rightToLeft` */
    public get rightToLeft(): BooleanValue | undefined { return this._g(':rightToLeft'); }
    public set rightToLeft(v: BooleanValue | undefined) { this._s(':rightToLeft', v); }
    /** Returns X14SeriesColor. */
    public get seriesColor(): X14SeriesColor | undefined { return this._f(X14SeriesColor); }
    /** Returns X14NegativeColor. */
    public get negativeColor(): X14NegativeColor | undefined { return this._f(X14NegativeColor); }
    /** Returns X14AxisColor. */
    public get axisColor(): X14AxisColor | undefined { return this._f(X14AxisColor); }
    /** Returns X14MarkersColor. */
    public get markersColor(): X14MarkersColor | undefined { return this._f(X14MarkersColor); }
    /** Returns X14FirstMarkerColor. */
    public get firstMarkerColor(): X14FirstMarkerColor | undefined { return this._f(X14FirstMarkerColor); }
    /** Returns X14LastMarkerColor. */
    public get lastMarkerColor(): X14LastMarkerColor | undefined { return this._f(X14LastMarkerColor); }
    /** Returns X14HighMarkerColor. */
    public get highMarkerColor(): X14HighMarkerColor | undefined { return this._f(X14HighMarkerColor); }
    /** Returns X14LowMarkerColor. */
    public get lowMarkerColor(): X14LowMarkerColor | undefined { return this._f(X14LowMarkerColor); }
    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }
    /** Returns X14Sparklines. */
    public get sparklines(): X14Sparklines | undefined { return this._f(X14Sparklines); }

}
/** Represents a hyperlink within a cell.. Serialized as `xr:hyperlink` */
export class Hyperlink extends OxmlLeafElement {

    public static override _Q = 'xr:hyperlink';
    public static override _A = [':ref','r:id',':location',':tooltip',':display',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Location. Serialized as `:location` */
    public get location(): StringValue | undefined { return this._g(':location'); }
    public set location(v: StringValue | undefined) { this._s(':location', v); }
    /** Tool Tip. Serialized as `:tooltip` */
    public get tooltip(): StringValue | undefined { return this._g(':tooltip'); }
    public set tooltip(v: StringValue | undefined) { this._s(':tooltip', v); }
    /** Display String. Serialized as `:display` */
    public get display(): StringValue | undefined { return this._g(':display'); }
    public set display(v: StringValue | undefined) { this._s(':display', v); }

}
/** Represents an external link to another workbook.. Serialized as `xr:dataValidation` */
export class DataValidation extends OxmlCompositeElement<X12acList | XFormula1 | XFormula2> {

    public static override _Q = 'xr:dataValidation';
    public static override _A = [':type',':errorStyle',':imeMode',':operator',':allowBlank',':showDropDown',':showInputMessage',':showErrorMessage',':errorTitle',':error',':promptTitle',':prompt',':sqref',];
    /** type. Serialized as `:type` */
    public get type(): DataValidationValues | undefined { return this._g(':type'); }
    public set type(v: DataValidationValues | undefined) { this._s(':type', v); }
    /** errorStyle. Serialized as `:errorStyle` */
    public get errorStyle(): DataValidationErrorStyleValues | undefined { return this._g(':errorStyle'); }
    public set errorStyle(v: DataValidationErrorStyleValues | undefined) { this._s(':errorStyle', v); }
    /** imeMode. Serialized as `:imeMode` */
    public get imeMode(): DataValidationImeModeValues | undefined { return this._g(':imeMode'); }
    public set imeMode(v: DataValidationImeModeValues | undefined) { this._s(':imeMode', v); }
    /** operator. Serialized as `:operator` */
    public get operator(): DataValidationOperatorValues | undefined { return this._g(':operator'); }
    public set operator(v: DataValidationOperatorValues | undefined) { this._s(':operator', v); }
    /** allowBlank. Serialized as `:allowBlank` */
    public get allowBlank(): BooleanValue | undefined { return this._g(':allowBlank'); }
    public set allowBlank(v: BooleanValue | undefined) { this._s(':allowBlank', v); }
    /** showDropDown. Serialized as `:showDropDown` */
    public get showDropDown(): BooleanValue | undefined { return this._g(':showDropDown'); }
    public set showDropDown(v: BooleanValue | undefined) { this._s(':showDropDown', v); }
    /** showInputMessage. Serialized as `:showInputMessage` */
    public get showInputMessage(): BooleanValue | undefined { return this._g(':showInputMessage'); }
    public set showInputMessage(v: BooleanValue | undefined) { this._s(':showInputMessage', v); }
    /** showErrorMessage. Serialized as `:showErrorMessage` */
    public get showErrorMessage(): BooleanValue | undefined { return this._g(':showErrorMessage'); }
    public set showErrorMessage(v: BooleanValue | undefined) { this._s(':showErrorMessage', v); }
    /** errorTitle. Serialized as `:errorTitle` */
    public get errorTitle(): StringValue | undefined { return this._g(':errorTitle'); }
    public set errorTitle(v: StringValue | undefined) { this._s(':errorTitle', v); }
    /** error. Serialized as `:error` */
    public get error(): StringValue | undefined { return this._g(':error'); }
    public set error(v: StringValue | undefined) { this._s(':error', v); }
    /** promptTitle. Serialized as `:promptTitle` */
    public get promptTitle(): StringValue | undefined { return this._g(':promptTitle'); }
    public set promptTitle(v: StringValue | undefined) { this._s(':promptTitle', v); }
    /** prompt. Serialized as `:prompt` */
    public get prompt(): StringValue | undefined { return this._g(':prompt'); }
    public set prompt(v: StringValue | undefined) { this._s(':prompt', v); }
    /** sqref. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }
    /** Returns X12acList. */
    public get list(): X12acList | undefined { return this._f(X12acList); }
    /** Returns XFormula1. */
    public get formula1(): XFormula1 | undefined { return this._f(XFormula1); }
    /** Returns XFormula2. */
    public get formula2(): XFormula2 | undefined { return this._f(XFormula2); }

}
/** Defines the RefTest Class. Serialized as `xr:test` */
export class RefTest extends OxmlLeafElement {

    public static override _Q = 'xr:test';
    public static override _A = [':n',':ajt',':ajtx',':homeRef',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** ajt. Serialized as `:ajt` */
    public get ajt(): AdjustType | undefined { return this._g(':ajt'); }
    public set ajt(v: AdjustType | undefined) { this._s(':ajt', v); }
    /** ajtx. Serialized as `:ajtx` */
    public get ajtx(): AdjustTypeExt | undefined { return this._g(':ajtx'); }
    public set ajtx(v: AdjustTypeExt | undefined) { this._s(':ajtx', v); }
    /** homeRef. Serialized as `:homeRef` */
    public get homeRef(): BooleanValue | undefined { return this._g(':homeRef'); }
    public set homeRef(v: BooleanValue | undefined) { this._s(':homeRef', v); }

}
/** Defines the RefFuture Class. Serialized as `xr:future` */
export class RefFuture extends OxmlLeafElement {

    public static override _Q = 'xr:future';

}
/** Defines the RefOartAnchor Class. Serialized as `xr:oartAnchor` */
export class RefOartAnchor extends OxmlLeafElement {

    public static override _Q = 'xr:oartAnchor';
    public static override _A = [':n',':ajt',':ajtx',':homeRef',':r',':fromRowOff',':fromColOff',':toRowOff',':toColOff',':cx',':cy',':x',':y',':oat',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** ajt. Serialized as `:ajt` */
    public get ajt(): AdjustType | undefined { return this._g(':ajt'); }
    public set ajt(v: AdjustType | undefined) { this._s(':ajt', v); }
    /** ajtx. Serialized as `:ajtx` */
    public get ajtx(): AdjustTypeExt | undefined { return this._g(':ajtx'); }
    public set ajtx(v: AdjustTypeExt | undefined) { this._s(':ajtx', v); }
    /** homeRef. Serialized as `:homeRef` */
    public get homeRef(): BooleanValue | undefined { return this._g(':homeRef'); }
    public set homeRef(v: BooleanValue | undefined) { this._s(':homeRef', v); }
    /** r. Serialized as `:r` */
    public get r(): StringValue | undefined { return this._g(':r'); }
    public set r(v: StringValue | undefined) { this._s(':r', v); }
    /** fromRowOff. Serialized as `:fromRowOff` */
    public get fromRowOff(): Int64Value | undefined { return this._g(':fromRowOff'); }
    public set fromRowOff(v: Int64Value | undefined) { this._s(':fromRowOff', v); }
    /** fromColOff. Serialized as `:fromColOff` */
    public get fromColOff(): Int64Value | undefined { return this._g(':fromColOff'); }
    public set fromColOff(v: Int64Value | undefined) { this._s(':fromColOff', v); }
    /** toRowOff. Serialized as `:toRowOff` */
    public get toRowOff(): Int64Value | undefined { return this._g(':toRowOff'); }
    public set toRowOff(v: Int64Value | undefined) { this._s(':toRowOff', v); }
    /** toColOff. Serialized as `:toColOff` */
    public get toColOff(): Int64Value | undefined { return this._g(':toColOff'); }
    public set toColOff(v: Int64Value | undefined) { this._s(':toColOff', v); }
    /** cx. Serialized as `:cx` */
    public get cx(): Int64Value | undefined { return this._g(':cx'); }
    public set cx(v: Int64Value | undefined) { this._s(':cx', v); }
    /** cy. Serialized as `:cy` */
    public get cy(): Int64Value | undefined { return this._g(':cy'); }
    public set cy(v: Int64Value | undefined) { this._s(':cy', v); }
    /** x. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** y. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }
    /** oat. Serialized as `:oat` */
    public get oat(): OartAnchorType | undefined { return this._g(':oat'); }
    public set oat(v: OartAnchorType | undefined) { this._s(':oat', v); }

}
/** Defines the SheetXluid Class. Serialized as `xr:sheetUid` */
export class SheetXluid extends OxmlLeafElement {

    public static override _Q = 'xr:sheetUid';
    public static override _A = [':n',':ajt',':ajtx',':homeRef',':uid',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** ajt. Serialized as `:ajt` */
    public get ajt(): AdjustType | undefined { return this._g(':ajt'); }
    public set ajt(v: AdjustType | undefined) { this._s(':ajt', v); }
    /** ajtx. Serialized as `:ajtx` */
    public get ajtx(): AdjustTypeExt | undefined { return this._g(':ajtx'); }
    public set ajtx(v: AdjustTypeExt | undefined) { this._s(':ajtx', v); }
    /** homeRef. Serialized as `:homeRef` */
    public get homeRef(): BooleanValue | undefined { return this._g(':homeRef'); }
    public set homeRef(v: BooleanValue | undefined) { this._s(':homeRef', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }

}
/** Defines the RefCell Class. Serialized as `xr:ref` */
export class RefCell extends OxmlLeafElement {

    public static override _Q = 'xr:ref';
    public static override _A = [':n',':ajt',':ajtx',':homeRef',':r',':uid',':uidLast',];
    /** n. Serialized as `:n` */
    public get n(): StringValue | undefined { return this._g(':n'); }
    public set n(v: StringValue | undefined) { this._s(':n', v); }
    /** ajt. Serialized as `:ajt` */
    public get ajt(): AdjustType | undefined { return this._g(':ajt'); }
    public set ajt(v: AdjustType | undefined) { this._s(':ajt', v); }
    /** ajtx. Serialized as `:ajtx` */
    public get ajtx(): AdjustTypeExt | undefined { return this._g(':ajtx'); }
    public set ajtx(v: AdjustTypeExt | undefined) { this._s(':ajtx', v); }
    /** homeRef. Serialized as `:homeRef` */
    public get homeRef(): BooleanValue | undefined { return this._g(':homeRef'); }
    public set homeRef(v: BooleanValue | undefined) { this._s(':homeRef', v); }
    /** r. Serialized as `:r` */
    public get r(): ListValue<StringValue> | undefined { return this._g(':r'); }
    public set r(v: ListValue<StringValue> | undefined) { this._s(':r', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** uidLast. Serialized as `:uidLast` */
    public get uidLast(): StringValue | undefined { return this._g(':uidLast'); }
    public set uidLast(v: StringValue | undefined) { this._s(':uidLast', v); }

}
/** Defines the RstType Class. Serialized as `xr:is` */
export class RstType extends OxmlCompositeElement<XText | XRun | XPhoneticRun | XPhoneticProperties> {

    public static override _Q = 'xr:is';
    /** Text. */
    public get text(): XText | undefined { return this._f(XText); }

}
/** Defines the Xstring Class. Serialized as `xr:v` */
export class Xstring extends OxmlLeafTextElement {

    public static override _Q = 'xr:v';

}
/** Defines the Outline Class. Serialized as `xr:outline` */
export class Outline extends OxmlLeafElement {

    public static override _Q = 'xr:outline';
    public static override _A = [':isCollapsed',':level',];
    /** isCollapsed. Serialized as `:isCollapsed` */
    public get isCollapsed(): BooleanValue | undefined { return this._g(':isCollapsed'); }
    public set isCollapsed(v: BooleanValue | undefined) { this._s(':isCollapsed', v); }
    /** level. Serialized as `:level` */
    public get level(): ByteValue | undefined { return this._g(':level'); }
    public set level(v: ByteValue | undefined) { this._s(':level', v); }

}
/** Defines the Outlines Class. Serialized as `xr:outlines` */
export class Outlines extends OxmlCompositeElement<Outline> {

    public static override _Q = 'xr:outlines';
    public static override _A = [':isRow',];
    /** isRow. Serialized as `:isRow` */
    public get isRow(): BooleanValue | undefined { return this._g(':isRow'); }
    public set isRow(v: BooleanValue | undefined) { this._s(':isRow', v); }

}
/** Defines the FreezePanes Class. Serialized as `xr:freezePanes` */
export class FreezePanes extends OxmlLeafElement {

    public static override _Q = 'xr:freezePanes';
    public static override _A = [':sheetViewUid',];
    /** sheetViewUid. Serialized as `:sheetViewUid` */
    public get sheetViewUid(): StringValue | undefined { return this._g(':sheetViewUid'); }
    public set sheetViewUid(v: StringValue | undefined) { this._s(':sheetViewUid', v); }

}
/** Defines the ShowGridlinesHeadings Class. Serialized as `xr:showGridlinesHeadings` */
export class ShowGridlinesHeadings extends OxmlLeafElement {

    public static override _Q = 'xr:showGridlinesHeadings';
    public static override _A = [':showGridLines',':showRowCol',];
    /** showGridLines. Serialized as `:showGridLines` */
    public get showGridLines(): BooleanValue | undefined { return this._g(':showGridLines'); }
    public set showGridLines(v: BooleanValue | undefined) { this._s(':showGridLines', v); }
    /** showRowCol. Serialized as `:showRowCol` */
    public get showRowCol(): BooleanValue | undefined { return this._g(':showRowCol'); }
    public set showRowCol(v: BooleanValue | undefined) { this._s(':showRowCol', v); }

}
/** Defines the HideUnhideSheet Class. Serialized as `xr:hideUnhideSheet` */
export class HideUnhideSheet extends OxmlLeafElement {

    public static override _Q = 'xr:hideUnhideSheet';
    public static override _A = [':hide',];
    /** hide. Serialized as `:hide` */
    public get hide(): BooleanValue | undefined { return this._g(':hide'); }
    public set hide(v: BooleanValue | undefined) { this._s(':hide', v); }

}
/** Defines the RowColVisualOps Class. Serialized as `xr:rowColVisualOps` */
export class RowColVisualOps extends OxmlLeafElement {

    public static override _Q = 'xr:rowColVisualOps';
    public static override _A = [':action',':isRow',':size',':userSized',];
    /** action. Serialized as `:action` */
    public get action(): RowColVisualOp | undefined { return this._g(':action'); }
    public set action(v: RowColVisualOp | undefined) { this._s(':action', v); }
    /** isRow. Serialized as `:isRow` */
    public get isRow(): BooleanValue | undefined { return this._g(':isRow'); }
    public set isRow(v: BooleanValue | undefined) { this._s(':isRow', v); }
    /** size. Serialized as `:size` */
    public get size(): UInt32Value | undefined { return this._g(':size'); }
    public set size(v: UInt32Value | undefined) { this._s(':size', v); }
    /** userSized. Serialized as `:userSized` */
    public get userSized(): BooleanValue | undefined { return this._g(':userSized'); }
    public set userSized(v: BooleanValue | undefined) { this._s(':userSized', v); }

}
/** Defines the RefMap Class. Serialized as `xr:refmap` */
export class RefMap extends OxmlCompositeElement<RefCell | SheetXluid | RefOartAnchor | RefFuture | RefTest> {

    public static override _Q = 'xr:refmap';

}
/** Defines the RevisionState Class. Serialized as `xr:body` */
export class RevisionState extends OxmlCompositeElement<RowColVisualOps | HideUnhideSheet | ShowGridlinesHeadings | FreezePanes | Outlines> {

    public static override _Q = 'xr:body';
    /** Returns RowColVisualOps. */
    public get rowColVisualOps(): RowColVisualOps | undefined { return this._f(RowColVisualOps); }
    /** Returns HideUnhideSheet. */
    public get hideUnhideSheet(): HideUnhideSheet | undefined { return this._f(HideUnhideSheet); }
    /** Returns ShowGridlinesHeadings. */
    public get showGridlinesHeadings(): ShowGridlinesHeadings | undefined { return this._f(ShowGridlinesHeadings); }
    /** Returns FreezePanes. */
    public get freezePanes(): FreezePanes | undefined { return this._f(FreezePanes); }
    /** Returns Outlines. */
    public get outlines(): Outlines | undefined { return this._f(Outlines); }

}
/** Defines the RevisionStateLink Class. Serialized as `xr:link` */
export class RevisionStateLink extends OxmlLeafElement {

    public static override _Q = 'xr:link';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the StateBasedHeader Class. Serialized as `xr:hdr` */
export class StateBasedHeader extends OxmlCompositeElement<RefMap> {

    public static override _Q = 'xr:hdr';
    public static override _A = [':uid',':eft',':eftx',':seft',':seftx',];
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** eft. Serialized as `:eft` */
    public get eft(): FeatureType | undefined { return this._g(':eft'); }
    public set eft(v: FeatureType | undefined) { this._s(':eft', v); }
    /** eftx. Serialized as `:eftx` */
    public get eftx(): ExtFeatureType | undefined { return this._g(':eftx'); }
    public set eftx(v: ExtFeatureType | undefined) { this._s(':eftx', v); }
    /** seft. Serialized as `:seft` */
    public get seft(): SubFeatureType | undefined { return this._g(':seft'); }
    public set seft(v: SubFeatureType | undefined) { this._s(':seft', v); }
    /** seftx. Serialized as `:seftx` */
    public get seftx(): ExtSubFeatureType | undefined { return this._g(':seftx'); }
    public set seftx(v: ExtSubFeatureType | undefined) { this._s(':seftx', v); }
    /** Returns RefMap. */
    public get refMap(): RefMap | undefined { return this._f(RefMap); }

}
/** Defines the FFormula Class. Serialized as `xr:f` */
export class FFormula extends OxmlLeafTextElement {

    public static override _Q = 'xr:f';

}
/** Defines the FormulaFormula Class. Serialized as `xr:formula` */
export class FormulaFormula extends OxmlLeafTextElement {

    public static override _Q = 'xr:formula';

}
/** Defines the ExtensionList Class. Serialized as `xr:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'xr:extLst';

}
/** Defines the ChangeCellSubEdit Class. Serialized as `xr:ccse` */
export class ChangeCellSubEdit extends OxmlCompositeElement<RevCell> {

    public static override _Q = 'xr:ccse';
    public static override _A = [':r',':t',':x',':w',];
    /** r. Serialized as `:r` */
    public get r(): StringValue | undefined { return this._g(':r'); }
    public set r(v: StringValue | undefined) { this._s(':r', v); }
    /** t. Serialized as `:t` */
    public get t(): FillType | undefined { return this._g(':t'); }
    public set t(v: FillType | undefined) { this._s(':t', v); }
    /** x. Serialized as `:x` */
    public get x(): FillTypeExt | undefined { return this._g(':x'); }
    public set x(v: FillTypeExt | undefined) { this._s(':x', v); }
    /** w. Serialized as `:w` */
    public get w(): UInt32Value | undefined { return this._g(':w'); }
    public set w(v: UInt32Value | undefined) { this._s(':w', v); }

}
/** Defines the RevCell Class. Serialized as `xr:c` */
export class RevCell extends OxmlCompositeElement<FFormula | Xstring | RstType> {

    public static override _Q = 'xr:c';
    public static override _A = [':t',':nop',':tick',':rep',];
    /** t. Serialized as `:t` */
    public get t(): CellValues | undefined { return this._g(':t'); }
    public set t(v: CellValues | undefined) { this._s(':t', v); }
    /** nop. Serialized as `:nop` */
    public get nop(): BooleanValue | undefined { return this._g(':nop'); }
    public set nop(v: BooleanValue | undefined) { this._s(':nop', v); }
    /** tick. Serialized as `:tick` */
    public get tick(): BooleanValue | undefined { return this._g(':tick'); }
    public set tick(v: BooleanValue | undefined) { this._s(':tick', v); }
    /** rep. Serialized as `:rep` */
    public get rep(): UInt32Value | undefined { return this._g(':rep'); }
    public set rep(v: UInt32Value | undefined) { this._s(':rep', v); }
    /** Returns FFormula. */
    public get fFormula(): FFormula | undefined { return this._f(FFormula); }
    /** Returns Xstring. */
    public get xstring(): Xstring | undefined { return this._f(Xstring); }
    /** Returns RstType. */
    public get rstType(): RstType | undefined { return this._f(RstType); }

}
/** Defines the RevExTest Class. Serialized as `xr:xrrtest` */
export class RevExTest extends OxmlLeafElement {

    public static override _Q = 'xr:xrrtest';

}
/** Defines the RevGroup Class. Serialized as `xr:xrrg` */
export class RevGroup extends OxmlCompositeElement<RevExFuture | RevExUnsupported | RevExTrimmed | RevExRowColumn | RevExMove | RevExChangeCell | RevExFormatting | RevExDefinedName | RevExDelObj | RevExChgObj | RevExSheetOp | RevisionList | RevListAutoExpandRw> {

    public static override _Q = 'xr:xrrg';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }

}
/** Defines the RevListAutoExpandRw Class. Serialized as `xr:xrrListExpR` */
export class RevListAutoExpandRw extends OxmlLeafElement {

    public static override _Q = 'xr:xrrListExpR';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':refAdded',':listGuid',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** refAdded. Serialized as `:refAdded` */
    public get refAdded(): StringValue | undefined { return this._g(':refAdded'); }
    public set refAdded(v: StringValue | undefined) { this._s(':refAdded', v); }
    /** listGuid. Serialized as `:listGuid` */
    public get listGuid(): StringValue | undefined { return this._g(':listGuid'); }
    public set listGuid(v: StringValue | undefined) { this._s(':listGuid', v); }

}
/** Defines the RevisionList Class. Serialized as `xr:xrrList` */
export class RevisionList extends OxmlLeafElement {

    public static override _Q = 'xr:xrrList';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':Data',':Formatting',':RangeBased',':Fake',':ref',':Headers',':InsDelHeaders',':rId',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** Data. Serialized as `:Data` */
    public get Data(): BooleanValue | undefined { return this._g(':Data'); }
    public set Data(v: BooleanValue | undefined) { this._s(':Data', v); }
    /** Formatting. Serialized as `:Formatting` */
    public get Formatting(): BooleanValue | undefined { return this._g(':Formatting'); }
    public set Formatting(v: BooleanValue | undefined) { this._s(':Formatting', v); }
    /** RangeBased. Serialized as `:RangeBased` */
    public get RangeBased(): BooleanValue | undefined { return this._g(':RangeBased'); }
    public set RangeBased(v: BooleanValue | undefined) { this._s(':RangeBased', v); }
    /** Fake. Serialized as `:Fake` */
    public get Fake(): BooleanValue | undefined { return this._g(':Fake'); }
    public set Fake(v: BooleanValue | undefined) { this._s(':Fake', v); }
    /** ref. Serialized as `:ref` */
    public get ref(): StringValue | undefined { return this._g(':ref'); }
    public set ref(v: StringValue | undefined) { this._s(':ref', v); }
    /** Headers. Serialized as `:Headers` */
    public get Headers(): BooleanValue | undefined { return this._g(':Headers'); }
    public set Headers(v: BooleanValue | undefined) { this._s(':Headers', v); }
    /** InsDelHeaders. Serialized as `:InsDelHeaders` */
    public get InsDelHeaders(): BooleanValue | undefined { return this._g(':InsDelHeaders'); }
    public set InsDelHeaders(v: BooleanValue | undefined) { this._s(':InsDelHeaders', v); }
    /** rId. Serialized as `:rId` */
    public get rId(): UInt32Value | undefined { return this._g(':rId'); }
    public set rId(v: UInt32Value | undefined) { this._s(':rId', v); }

}
/** Defines the RevExSheetOp Class. Serialized as `xr:xrrSheet` */
export class RevExSheetOp extends OxmlLeafElement {

    public static override _Q = 'xr:xrrSheet';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':op',':name',':idOrig',':idNew',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** op. Serialized as `:op` */
    public get op(): SheetOp | undefined { return this._g(':op'); }
    public set op(v: SheetOp | undefined) { this._s(':op', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** idOrig. Serialized as `:idOrig` */
    public get idOrig(): UInt32Value | undefined { return this._g(':idOrig'); }
    public set idOrig(v: UInt32Value | undefined) { this._s(':idOrig', v); }
    /** idNew. Serialized as `:idNew` */
    public get idNew(): UInt32Value | undefined { return this._g(':idNew'); }
    public set idNew(v: UInt32Value | undefined) { this._s(':idNew', v); }

}
/** Defines the RevExChgObj Class. Serialized as `xr:xrrco` */
export class RevExChgObj extends OxmlCompositeElement<StateBasedHeader | RevisionStateLink | RevisionState> {

    public static override _Q = 'xr:xrrco';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** Returns StateBasedHeader. */
    public get stateBasedHeader(): StateBasedHeader | undefined { return this._f(StateBasedHeader); }

}
/** Defines the RevExDelObj Class. Serialized as `xr:xrrdo` */
export class RevExDelObj extends OxmlCompositeElement<StateBasedHeader> {

    public static override _Q = 'xr:xrrdo';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** Returns StateBasedHeader. */
    public get stateBasedHeader(): StateBasedHeader | undefined { return this._f(StateBasedHeader); }

}
/** Defines the RevExDefinedName Class. Serialized as `xr:xrrDefName` */
export class RevExDefinedName extends OxmlCompositeElement<FormulaFormula | ExtensionList> {

    public static override _Q = 'xr:xrrDefName';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':customView',':name',':function',':functionGroupId',':shortcutKey',':hidden',':customMenu',':description',':help',':statusBar',':comment',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** customView. Serialized as `:customView` */
    public get customView(): BooleanValue | undefined { return this._g(':customView'); }
    public set customView(v: BooleanValue | undefined) { this._s(':customView', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** function. Serialized as `:function` */
    public get function(): BooleanValue | undefined { return this._g(':function'); }
    public set function(v: BooleanValue | undefined) { this._s(':function', v); }
    /** functionGroupId. Serialized as `:functionGroupId` */
    public get functionGroupId(): ByteValue | undefined { return this._g(':functionGroupId'); }
    public set functionGroupId(v: ByteValue | undefined) { this._s(':functionGroupId', v); }
    /** shortcutKey. Serialized as `:shortcutKey` */
    public get shortcutKey(): ByteValue | undefined { return this._g(':shortcutKey'); }
    public set shortcutKey(v: ByteValue | undefined) { this._s(':shortcutKey', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** customMenu. Serialized as `:customMenu` */
    public get customMenu(): StringValue | undefined { return this._g(':customMenu'); }
    public set customMenu(v: StringValue | undefined) { this._s(':customMenu', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** help. Serialized as `:help` */
    public get help(): StringValue | undefined { return this._g(':help'); }
    public set help(v: StringValue | undefined) { this._s(':help', v); }
    /** statusBar. Serialized as `:statusBar` */
    public get statusBar(): StringValue | undefined { return this._g(':statusBar'); }
    public set statusBar(v: StringValue | undefined) { this._s(':statusBar', v); }
    /** comment. Serialized as `:comment` */
    public get comment(): StringValue | undefined { return this._g(':comment'); }
    public set comment(v: StringValue | undefined) { this._s(':comment', v); }
    /** Returns FormulaFormula. */
    public get formulaFormula(): FormulaFormula | undefined { return this._f(FormulaFormula); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the RevExFormatting Class. Serialized as `xr:xrrf` */
export class RevExFormatting extends OxmlCompositeElement<DifferentialFormatType | ExtensionList> {

    public static override _Q = 'xr:xrrf';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':numFmtId',':xfDxf',':style',':sqref',':start',':length',':styleUid',':fBlankCell',':applyNumberFormat',':applyFont',':applyFill',':applyBorder',':applyAlignment',':applyProtection',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** numFmtId. Serialized as `:numFmtId` */
    public get numFmtId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numFmtId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** xfDxf. Serialized as `:xfDxf` */
    public get xfDxf(): BooleanValue | undefined { return this._g(':xfDxf'); }
    public set xfDxf(v: BooleanValue | undefined) { this._s(':xfDxf', v); }
    /** style. Serialized as `:style` */
    public get style(): BooleanValue | undefined { return this._g(':style'); }
    public set style(v: BooleanValue | undefined) { this._s(':style', v); }
    /** sqref. Serialized as `:sqref` */
    public get sqref(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sqref(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }
    /** start. Serialized as `:start` */
    public get start(): UInt32Value | undefined { return this._g(':start'); }
    public set start(v: UInt32Value | undefined) { this._s(':start', v); }
    /** length. Serialized as `:length` */
    public get length(): UInt32Value | undefined { return this._g(':length'); }
    public set length(v: UInt32Value | undefined) { this._s(':length', v); }
    /** styleUid. Serialized as `:styleUid` */
    public get styleUid(): StringValue | undefined { return this._g(':styleUid'); }
    public set styleUid(v: StringValue | undefined) { this._s(':styleUid', v); }
    /** fBlankCell. Serialized as `:fBlankCell` */
    public get fBlankCell(): BooleanValue | undefined { return this._g(':fBlankCell'); }
    public set fBlankCell(v: BooleanValue | undefined) { this._s(':fBlankCell', v); }
    /** applyNumberFormat. Serialized as `:applyNumberFormat` */
    public get applyNumberFormat(): BooleanValue | undefined { return this._g(':applyNumberFormat'); }
    public set applyNumberFormat(v: BooleanValue | undefined) { this._s(':applyNumberFormat', v); }
    /** applyFont. Serialized as `:applyFont` */
    public get applyFont(): BooleanValue | undefined { return this._g(':applyFont'); }
    public set applyFont(v: BooleanValue | undefined) { this._s(':applyFont', v); }
    /** applyFill. Serialized as `:applyFill` */
    public get applyFill(): BooleanValue | undefined { return this._g(':applyFill'); }
    public set applyFill(v: BooleanValue | undefined) { this._s(':applyFill', v); }
    /** applyBorder. Serialized as `:applyBorder` */
    public get applyBorder(): BooleanValue | undefined { return this._g(':applyBorder'); }
    public set applyBorder(v: BooleanValue | undefined) { this._s(':applyBorder', v); }
    /** applyAlignment. Serialized as `:applyAlignment` */
    public get applyAlignment(): BooleanValue | undefined { return this._g(':applyAlignment'); }
    public set applyAlignment(v: BooleanValue | undefined) { this._s(':applyAlignment', v); }
    /** applyProtection. Serialized as `:applyProtection` */
    public get applyProtection(): BooleanValue | undefined { return this._g(':applyProtection'); }
    public set applyProtection(v: BooleanValue | undefined) { this._s(':applyProtection', v); }
    /** Returns DifferentialFormatType. */
    public get differentialFormatType(): DifferentialFormatType | undefined { return this._f(DifferentialFormatType); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the RevExChangeCell Class. Serialized as `xr:xrrc` */
export class RevExChangeCell extends OxmlCompositeElement<RevCell | ChangeCellSubEdit> {

    public static override _Q = 'xr:xrrc';
    public static override _A = [':listUid',':rev',':uid',':sh',':uidp',':ctx',':r',':t',':x',':w',];
    /** listUid. Serialized as `:listUid` */
    public get listUid(): StringValue | undefined { return this._g(':listUid'); }
    public set listUid(v: StringValue | undefined) { this._s(':listUid', v); }
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** r. Serialized as `:r` */
    public get r(): StringValue | undefined { return this._g(':r'); }
    public set r(v: StringValue | undefined) { this._s(':r', v); }
    /** t. Serialized as `:t` */
    public get t(): FillType | undefined { return this._g(':t'); }
    public set t(v: FillType | undefined) { this._s(':t', v); }
    /** x. Serialized as `:x` */
    public get x(): FillTypeExt | undefined { return this._g(':x'); }
    public set x(v: FillTypeExt | undefined) { this._s(':x', v); }
    /** w. Serialized as `:w` */
    public get w(): UInt32Value | undefined { return this._g(':w'); }
    public set w(v: UInt32Value | undefined) { this._s(':w', v); }

}
/** Defines the RevExMove Class. Serialized as `xr:xrrm` */
export class RevExMove extends OxmlLeafElement {

    public static override _Q = 'xr:xrrm';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':src',':dst',':srcSh',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** src. Serialized as `:src` */
    public get src(): StringValue | undefined { return this._g(':src'); }
    public set src(v: StringValue | undefined) { this._s(':src', v); }
    /** dst. Serialized as `:dst` */
    public get dst(): StringValue | undefined { return this._g(':dst'); }
    public set dst(v: StringValue | undefined) { this._s(':dst', v); }
    /** srcSh. Serialized as `:srcSh` */
    public get srcSh(): StringValue | undefined { return this._g(':srcSh'); }
    public set srcSh(v: StringValue | undefined) { this._s(':srcSh', v); }

}
/** Defines the RevExRowColumn Class. Serialized as `xr:xrrrc` */
export class RevExRowColumn extends OxmlLeafElement {

    public static override _Q = 'xr:xrrrc';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':eol',':ref',':action',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** eol. Serialized as `:eol` */
    public get eol(): BooleanValue | undefined { return this._g(':eol'); }
    public set eol(v: BooleanValue | undefined) { this._s(':eol', v); }
    /** ref. Serialized as `:ref` */
    public get ref(): StringValue | undefined { return this._g(':ref'); }
    public set ref(v: StringValue | undefined) { this._s(':ref', v); }
    /** action. Serialized as `:action` */
    public get action(): RwColAction | undefined { return this._g(':action'); }
    public set action(v: RwColAction | undefined) { this._s(':action', v); }

}
/** Defines the RevExTrimmed Class. Serialized as `xr:xrrTrim` */
export class RevExTrimmed extends OxmlLeafElement {

    public static override _Q = 'xr:xrrTrim';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }

}
/** Defines the RevExUnsupported Class. Serialized as `xr:xrrUspt` */
export class RevExUnsupported extends OxmlLeafElement {

    public static override _Q = 'xr:xrrUspt';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }

}
/** Defines the RevExFuture Class. Serialized as `xr:xrrftr` */
export class RevExFuture extends OxmlCompositeElement<RevExTest> {

    public static override _Q = 'xr:xrrftr';
    public static override _A = [':rev',':uid',':sh',':uidp',':ctx',':sti',];
    /** rev. Serialized as `:rev` */
    public get rev(): UInt64Value | undefined { return this._g(':rev'); }
    public set rev(v: UInt64Value | undefined) { this._s(':rev', v); }
    /** uid. Serialized as `:uid` */
    public get uid(): StringValue | undefined { return this._g(':uid'); }
    public set uid(v: StringValue | undefined) { this._s(':uid', v); }
    /** sh. Serialized as `:sh` */
    public get sh(): StringValue | undefined { return this._g(':sh'); }
    public set sh(v: StringValue | undefined) { this._s(':sh', v); }
    /** uidp. Serialized as `:uidp` */
    public get uidp(): StringValue | undefined { return this._g(':uidp'); }
    public set uidp(v: StringValue | undefined) { this._s(':uidp', v); }
    /** ctx. Serialized as `:ctx` */
    public get ctx(): RevisionContext | undefined { return this._g(':ctx'); }
    public set ctx(v: RevisionContext | undefined) { this._s(':ctx', v); }
    /** sti. Serialized as `:sti` */
    public get sti(): BooleanValue | undefined { return this._g(':sti'); }
    public set sti(v: BooleanValue | undefined) { this._s(':sti', v); }

}
/** Defines the RevExHeader Class. Serialized as `xr:hdr` */
export class RevExHeader extends OxmlLeafElement {

    public static override _Q = 'xr:hdr';
    public static override _A = ['r:id',':minRev',':maxRev',':time',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** minRev. Serialized as `:minRev` */
    public get minRev(): UInt64Value | undefined { return this._g(':minRev'); }
    public set minRev(v: UInt64Value | undefined) { this._s(':minRev', v); }
    /** maxRev. Serialized as `:maxRev` */
    public get maxRev(): UInt64Value | undefined { return this._g(':maxRev'); }
    public set maxRev(v: UInt64Value | undefined) { this._s(':maxRev', v); }
    /** time. Serialized as `:time` */
    public get time(): DateTimeValue | undefined { return this._g(':time'); }
    public set time(v: DateTimeValue | undefined) { this._s(':time', v); }

}
/** Defines the StateBasedObject Class. Serialized as `xr:objectState` */
export class StateBasedObject extends OxmlCompositeElement<DataValidation | Hyperlink | SparklineGroup | Comments | AutoFilter | pivotTableDefinition> {

    public static override _Q = 'xr:objectState';
    /** Represents an external link to another workbook.. */
    public get dataValidation(): DataValidation | undefined { return this._f(DataValidation); }
    /** Represents a hyperlink within a cell.. */
    public get hyperlink(): Hyperlink | undefined { return this._f(Hyperlink); }
    /** Represents a sparkline group of 1 or more sparklines.. */
    public get sparklineGroup(): SparklineGroup | undefined { return this._f(SparklineGroup); }
    /** Represents one comment within a cell.. */
    public get comments(): Comments | undefined { return this._f(Comments); }
    /** Represents an autofilter.. */
    public get autoFilter(): AutoFilter | undefined { return this._f(AutoFilter); }
    /** Represents a PivotTable View.. */
    public get pivotTableDefinition(): pivotTableDefinition | undefined { return this._f(pivotTableDefinition); }

}
/** Defines the RevisionPtr Class. Serialized as `xr:revisionPtr` */
export class RevisionPtr extends OxmlLeafElement {

    public static override _Q = 'xr:revisionPtr';
    public static override _A = [':revIDLastSave',':documentId',];
    /** revIDLastSave. Serialized as `:revIDLastSave` */
    public get revIDLastSave(): UInt64Value | undefined { return this._g(':revIDLastSave'); }
    public set revIDLastSave(v: UInt64Value | undefined) { this._s(':revIDLastSave', v); }
    /** documentId. Serialized as `:documentId` */
    public get documentId(): StringValue | undefined { return this._g(':documentId'); }
    public set documentId(v: StringValue | undefined) { this._s(':documentId', v); }

}
/** Defines the DifferentialFormatType Class. Serialized as `xr:dxf` */
export class DifferentialFormatType extends OxmlCompositeElement<XFont | XNumberingFormat | XFill | XAlignment | XBorder | XProtection | XExtensionList> {

    public static override _Q = 'xr:dxf';
    /** Font Properties. */
    public get font(): XFont | undefined { return this._f(XFont); }
    /** Number Format. */
    public get numberingFormat(): XNumberingFormat | undefined { return this._f(XNumberingFormat); }
    /** Fill. */
    public get fill(): XFill | undefined { return this._f(XFill); }
    /** Alignment. */
    public get alignment(): XAlignment | undefined { return this._f(XAlignment); }
    /** Border Properties. */
    public get border(): XBorder | undefined { return this._f(XBorder); }
    /** Protection Properties. */
    public get protection(): XProtection | undefined { return this._f(XProtection); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): XExtensionList | undefined { return this._f(XExtensionList); }

}
/** Defines the RevExStream Class. Serialized as `xr:revStream` */
export class RevExStream extends OxmlCompositeElement<RevExFuture | RevExUnsupported | RevExTrimmed | RevExRowColumn | RevExMove | RevExChangeCell | RevExFormatting | RevExDefinedName | RevExDelObj | RevExChgObj | RevExSheetOp | RevisionList | RevListAutoExpandRw | RevGroup> {

    public static override _Q = 'xr:revStream';

}
/** Defines the RevExHeaders Class. Serialized as `xr:revHdrs` */
export class RevExHeaders extends OxmlCompositeElement<RevExHeader> {

    public static override _Q = 'xr:revHdrs';
    public static override _A = [':minRev',':maxRev',':docId',':endpointId',];
    /** minRev. Serialized as `:minRev` */
    public get minRev(): UInt64Value | undefined { return this._g(':minRev'); }
    public set minRev(v: UInt64Value | undefined) { this._s(':minRev', v); }
    /** maxRev. Serialized as `:maxRev` */
    public get maxRev(): UInt64Value | undefined { return this._g(':maxRev'); }
    public set maxRev(v: UInt64Value | undefined) { this._s(':maxRev', v); }
    /** docId. Serialized as `:docId` */
    public get docId(): StringValue | undefined { return this._g(':docId'); }
    public set docId(v: StringValue | undefined) { this._s(':docId', v); }
    /** endpointId. Serialized as `:endpointId` */
    public get endpointId(): StringValue | undefined { return this._g(':endpointId'); }
    public set endpointId(v: StringValue | undefined) { this._s(':endpointId', v); }

}

export function initOffice2016ExcelNamespace() {
    pivotTableDefinition._C = {
        'x:location': XLocation,
        'x:pivotFields': XPivotFields,
        'x:rowFields': XRowFields,
        'x:rowItems': XRowItems,
        'x:colFields': XColumnFields,
        'x:colItems': XColumnItems,
        'x:pageFields': XPageFields,
        'x:dataFields': XDataFields,
        'x:formats': XFormats,
        'x:conditionalFormats': XConditionalFormats,
        'x:chartFormats': XChartFormats,
        'x:pivotHierarchies': XPivotHierarchies,
        'x:pivotTableStyleInfo': XPivotTableStyle,
        'x:filters': XPivotFilters,
        'x:rowHierarchiesUsage': XRowHierarchiesUsage,
        'x:colHierarchiesUsage': XColumnHierarchiesUsage,
        'x:extLst': XPivotTableDefinitionExtensionList,
    };
    pivotTableDefinition._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':cacheId': new OxmlAttr(':cacheId', OxmlType.UInt32Value),
        ':dataOnRows': new OxmlAttr(':dataOnRows', OxmlType.BooleanValue),
        ':dataPosition': new OxmlAttr(':dataPosition', OxmlType.UInt32Value),
        ':autoFormatId': new OxmlAttr(':autoFormatId', OxmlType.UInt32Value),
        ':applyNumberFormats': new OxmlAttr(':applyNumberFormats', OxmlType.BooleanValue),
        ':applyBorderFormats': new OxmlAttr(':applyBorderFormats', OxmlType.BooleanValue),
        ':applyFontFormats': new OxmlAttr(':applyFontFormats', OxmlType.BooleanValue),
        ':applyPatternFormats': new OxmlAttr(':applyPatternFormats', OxmlType.BooleanValue),
        ':applyAlignmentFormats': new OxmlAttr(':applyAlignmentFormats', OxmlType.BooleanValue),
        ':applyWidthHeightFormats': new OxmlAttr(':applyWidthHeightFormats', OxmlType.BooleanValue),
        ':dataCaption': new OxmlAttr(':dataCaption', OxmlType.StringValue),
        ':grandTotalCaption': new OxmlAttr(':grandTotalCaption', OxmlType.StringValue),
        ':errorCaption': new OxmlAttr(':errorCaption', OxmlType.StringValue),
        ':showError': new OxmlAttr(':showError', OxmlType.BooleanValue),
        ':missingCaption': new OxmlAttr(':missingCaption', OxmlType.StringValue),
        ':showMissing': new OxmlAttr(':showMissing', OxmlType.BooleanValue),
        ':pageStyle': new OxmlAttr(':pageStyle', OxmlType.StringValue),
        ':pivotTableStyle': new OxmlAttr(':pivotTableStyle', OxmlType.StringValue),
        ':vacatedStyle': new OxmlAttr(':vacatedStyle', OxmlType.StringValue),
        ':tag': new OxmlAttr(':tag', OxmlType.StringValue),
        ':updatedVersion': new OxmlAttr(':updatedVersion', OxmlType.ByteValue),
        ':minRefreshableVersion': new OxmlAttr(':minRefreshableVersion', OxmlType.ByteValue),
        ':asteriskTotals': new OxmlAttr(':asteriskTotals', OxmlType.BooleanValue),
        ':showItems': new OxmlAttr(':showItems', OxmlType.BooleanValue),
        ':editData': new OxmlAttr(':editData', OxmlType.BooleanValue),
        ':disableFieldList': new OxmlAttr(':disableFieldList', OxmlType.BooleanValue),
        ':showCalcMbrs': new OxmlAttr(':showCalcMbrs', OxmlType.BooleanValue),
        ':visualTotals': new OxmlAttr(':visualTotals', OxmlType.BooleanValue),
        ':showMultipleLabel': new OxmlAttr(':showMultipleLabel', OxmlType.BooleanValue),
        ':showDataDropDown': new OxmlAttr(':showDataDropDown', OxmlType.BooleanValue),
        ':showDrill': new OxmlAttr(':showDrill', OxmlType.BooleanValue),
        ':printDrill': new OxmlAttr(':printDrill', OxmlType.BooleanValue),
        ':showMemberPropertyTips': new OxmlAttr(':showMemberPropertyTips', OxmlType.BooleanValue),
        ':showDataTips': new OxmlAttr(':showDataTips', OxmlType.BooleanValue),
        ':enableWizard': new OxmlAttr(':enableWizard', OxmlType.BooleanValue),
        ':enableDrill': new OxmlAttr(':enableDrill', OxmlType.BooleanValue),
        ':enableFieldProperties': new OxmlAttr(':enableFieldProperties', OxmlType.BooleanValue),
        ':preserveFormatting': new OxmlAttr(':preserveFormatting', OxmlType.BooleanValue),
        ':useAutoFormatting': new OxmlAttr(':useAutoFormatting', OxmlType.BooleanValue),
        ':pageWrap': new OxmlAttr(':pageWrap', OxmlType.UInt32Value),
        ':pageOverThenDown': new OxmlAttr(':pageOverThenDown', OxmlType.BooleanValue),
        ':subtotalHiddenItems': new OxmlAttr(':subtotalHiddenItems', OxmlType.BooleanValue),
        ':rowGrandTotals': new OxmlAttr(':rowGrandTotals', OxmlType.BooleanValue),
        ':colGrandTotals': new OxmlAttr(':colGrandTotals', OxmlType.BooleanValue),
        ':fieldPrintTitles': new OxmlAttr(':fieldPrintTitles', OxmlType.BooleanValue),
        ':itemPrintTitles': new OxmlAttr(':itemPrintTitles', OxmlType.BooleanValue),
        ':mergeItem': new OxmlAttr(':mergeItem', OxmlType.BooleanValue),
        ':showDropZones': new OxmlAttr(':showDropZones', OxmlType.BooleanValue),
        ':createdVersion': new OxmlAttr(':createdVersion', OxmlType.ByteValue),
        ':indent': new OxmlAttr(':indent', OxmlType.UInt32Value),
        ':showEmptyRow': new OxmlAttr(':showEmptyRow', OxmlType.BooleanValue),
        ':showEmptyCol': new OxmlAttr(':showEmptyCol', OxmlType.BooleanValue),
        ':showHeaders': new OxmlAttr(':showHeaders', OxmlType.BooleanValue),
        ':compact': new OxmlAttr(':compact', OxmlType.BooleanValue),
        ':outline': new OxmlAttr(':outline', OxmlType.BooleanValue),
        ':outlineData': new OxmlAttr(':outlineData', OxmlType.BooleanValue),
        ':compactData': new OxmlAttr(':compactData', OxmlType.BooleanValue),
        ':published': new OxmlAttr(':published', OxmlType.BooleanValue),
        ':gridDropZones': new OxmlAttr(':gridDropZones', OxmlType.BooleanValue),
        ':immersive': new OxmlAttr(':immersive', OxmlType.BooleanValue),
        ':multipleFieldFilters': new OxmlAttr(':multipleFieldFilters', OxmlType.BooleanValue),
        ':chartFormat': new OxmlAttr(':chartFormat', OxmlType.UInt32Value),
        ':rowHeaderCaption': new OxmlAttr(':rowHeaderCaption', OxmlType.StringValue),
        ':colHeaderCaption': new OxmlAttr(':colHeaderCaption', OxmlType.StringValue),
        ':fieldListSortAscending': new OxmlAttr(':fieldListSortAscending', OxmlType.BooleanValue),
        ':mdxSubqueries': new OxmlAttr(':mdxSubqueries', OxmlType.BooleanValue),
        ':customListSort': new OxmlAttr(':customListSort', OxmlType.BooleanValue),
    };
    AutoFilter._C = {
        'x:filterColumn': XFilterColumn,
        'x:sortState': XSortState,
        'x:extLst': XExtensionList,
    };
    AutoFilter._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    Comments._C = {
        'x:authors': XAuthors,
        'x:commentList': XCommentList,
        'x:extLst': XExtensionList,
    };
    SparklineGroup._C = {
        'x14:colorSeries': X14SeriesColor,
        'x14:colorNegative': X14NegativeColor,
        'x14:colorAxis': X14AxisColor,
        'x14:colorMarkers': X14MarkersColor,
        'x14:colorFirst': X14FirstMarkerColor,
        'x14:colorLast': X14LastMarkerColor,
        'x14:colorHigh': X14HighMarkerColor,
        'x14:colorLow': X14LowMarkerColor,
        'xne:f': XneFormula,
        'x14:sparklines': X14Sparklines,
    };
    SparklineGroup._D = {
        ':manualMax': new OxmlAttr(':manualMax', OxmlType.DoubleValue),
        ':manualMin': new OxmlAttr(':manualMin', OxmlType.DoubleValue),
        ':lineWeight': new OxmlAttr(':lineWeight', OxmlType.DoubleValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, SparklineTypeValuesArray),
        ':dateAxis': new OxmlAttr(':dateAxis', OxmlType.BooleanValue),
        ':displayEmptyCellsAs': new OxmlAttr(':displayEmptyCellsAs', OxmlType.EnumValue, DisplayBlanksAsValuesArray),
        ':markers': new OxmlAttr(':markers', OxmlType.BooleanValue),
        ':high': new OxmlAttr(':high', OxmlType.BooleanValue),
        ':low': new OxmlAttr(':low', OxmlType.BooleanValue),
        ':first': new OxmlAttr(':first', OxmlType.BooleanValue),
        ':last': new OxmlAttr(':last', OxmlType.BooleanValue),
        ':negative': new OxmlAttr(':negative', OxmlType.BooleanValue),
        ':displayXAxis': new OxmlAttr(':displayXAxis', OxmlType.BooleanValue),
        ':displayHidden': new OxmlAttr(':displayHidden', OxmlType.BooleanValue),
        ':minAxisType': new OxmlAttr(':minAxisType', OxmlType.EnumValue, SparklineAxisMinMaxValuesArray),
        ':maxAxisType': new OxmlAttr(':maxAxisType', OxmlType.EnumValue, SparklineAxisMinMaxValuesArray),
        ':rightToLeft': new OxmlAttr(':rightToLeft', OxmlType.BooleanValue),
    };
    Hyperlink._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':location': new OxmlAttr(':location', OxmlType.StringValue),
        ':tooltip': new OxmlAttr(':tooltip', OxmlType.StringValue),
        ':display': new OxmlAttr(':display', OxmlType.StringValue),
    };
    DataValidation._C = {
        'x12ac:list': X12acList,
        'x:formula1': XFormula1,
        'x:formula2': XFormula2,
    };
    DataValidation._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, DataValidationValuesArray),
        ':errorStyle': new OxmlAttr(':errorStyle', OxmlType.EnumValue, DataValidationErrorStyleValuesArray),
        ':imeMode': new OxmlAttr(':imeMode', OxmlType.EnumValue, DataValidationImeModeValuesArray),
        ':operator': new OxmlAttr(':operator', OxmlType.EnumValue, DataValidationOperatorValuesArray),
        ':allowBlank': new OxmlAttr(':allowBlank', OxmlType.BooleanValue),
        ':showDropDown': new OxmlAttr(':showDropDown', OxmlType.BooleanValue),
        ':showInputMessage': new OxmlAttr(':showInputMessage', OxmlType.BooleanValue),
        ':showErrorMessage': new OxmlAttr(':showErrorMessage', OxmlType.BooleanValue),
        ':errorTitle': new OxmlAttr(':errorTitle', OxmlType.StringValue),
        ':error': new OxmlAttr(':error', OxmlType.StringValue),
        ':promptTitle': new OxmlAttr(':promptTitle', OxmlType.StringValue),
        ':prompt': new OxmlAttr(':prompt', OxmlType.StringValue),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
    };
    RefTest._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':ajt': new OxmlAttr(':ajt', OxmlType.EnumValue, AdjustTypeArray),
        ':ajtx': new OxmlAttr(':ajtx', OxmlType.EnumValue, AdjustTypeExtArray),
        ':homeRef': new OxmlAttr(':homeRef', OxmlType.BooleanValue),
    };
    RefOartAnchor._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':ajt': new OxmlAttr(':ajt', OxmlType.EnumValue, AdjustTypeArray),
        ':ajtx': new OxmlAttr(':ajtx', OxmlType.EnumValue, AdjustTypeExtArray),
        ':homeRef': new OxmlAttr(':homeRef', OxmlType.BooleanValue),
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':fromRowOff': new OxmlAttr(':fromRowOff', OxmlType.Int64Value),
        ':fromColOff': new OxmlAttr(':fromColOff', OxmlType.Int64Value),
        ':toRowOff': new OxmlAttr(':toRowOff', OxmlType.Int64Value),
        ':toColOff': new OxmlAttr(':toColOff', OxmlType.Int64Value),
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
        ':oat': new OxmlAttr(':oat', OxmlType.EnumValue, OartAnchorTypeArray),
    };
    SheetXluid._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':ajt': new OxmlAttr(':ajt', OxmlType.EnumValue, AdjustTypeArray),
        ':ajtx': new OxmlAttr(':ajtx', OxmlType.EnumValue, AdjustTypeExtArray),
        ':homeRef': new OxmlAttr(':homeRef', OxmlType.BooleanValue),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
    };
    RefCell._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':ajt': new OxmlAttr(':ajt', OxmlType.EnumValue, AdjustTypeArray),
        ':ajtx': new OxmlAttr(':ajtx', OxmlType.EnumValue, AdjustTypeExtArray),
        ':homeRef': new OxmlAttr(':homeRef', OxmlType.BooleanValue),
        ':r': new OxmlAttr(':r', OxmlType.ListValue),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':uidLast': new OxmlAttr(':uidLast', OxmlType.StringValue),
    };
    RstType._C = {
        'x:t': XText,
        'x:r': XRun,
        'x:rPh': XPhoneticRun,
        'x:phoneticPr': XPhoneticProperties,
    };
    Outline._D = {
        ':isCollapsed': new OxmlAttr(':isCollapsed', OxmlType.BooleanValue),
        ':level': new OxmlAttr(':level', OxmlType.ByteValue),
    };
    Outlines._C = {
        'xr:outline': Outline,
    };
    Outlines._D = {
        ':isRow': new OxmlAttr(':isRow', OxmlType.BooleanValue),
    };
    FreezePanes._D = {
        ':sheetViewUid': new OxmlAttr(':sheetViewUid', OxmlType.StringValue),
    };
    ShowGridlinesHeadings._D = {
        ':showGridLines': new OxmlAttr(':showGridLines', OxmlType.BooleanValue),
        ':showRowCol': new OxmlAttr(':showRowCol', OxmlType.BooleanValue),
    };
    HideUnhideSheet._D = {
        ':hide': new OxmlAttr(':hide', OxmlType.BooleanValue),
    };
    RowColVisualOps._D = {
        ':action': new OxmlAttr(':action', OxmlType.EnumValue, RowColVisualOpArray),
        ':isRow': new OxmlAttr(':isRow', OxmlType.BooleanValue),
        ':size': new OxmlAttr(':size', OxmlType.UInt32Value),
        ':userSized': new OxmlAttr(':userSized', OxmlType.BooleanValue),
    };
    RefMap._C = {
        'xr:ref': RefCell,
        'xr:sheetUid': SheetXluid,
        'xr:oartAnchor': RefOartAnchor,
        'xr:future': RefFuture,
        'xr:test': RefTest,
    };
    RevisionState._C = {
        'xr:rowColVisualOps': RowColVisualOps,
        'xr:hideUnhideSheet': HideUnhideSheet,
        'xr:showGridlinesHeadings': ShowGridlinesHeadings,
        'xr:freezePanes': FreezePanes,
        'xr:outlines': Outlines,
    };
    RevisionStateLink._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    StateBasedHeader._C = {
        'xr:refmap': RefMap,
    };
    StateBasedHeader._D = {
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':eft': new OxmlAttr(':eft', OxmlType.EnumValue, FeatureTypeArray),
        ':eftx': new OxmlAttr(':eftx', OxmlType.EnumValue, ExtFeatureTypeArray),
        ':seft': new OxmlAttr(':seft', OxmlType.EnumValue, SubFeatureTypeArray),
        ':seftx': new OxmlAttr(':seftx', OxmlType.EnumValue, ExtSubFeatureTypeArray),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    ChangeCellSubEdit._C = {
        'xr:c': RevCell,
    };
    ChangeCellSubEdit._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, FillTypeArray),
        ':x': new OxmlAttr(':x', OxmlType.EnumValue, FillTypeExtArray),
        ':w': new OxmlAttr(':w', OxmlType.UInt32Value),
    };
    RevCell._C = {
        'xr:f': FFormula,
        'xr:v': Xstring,
        'xr:is': RstType,
    };
    RevCell._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, CellValuesArray),
        ':nop': new OxmlAttr(':nop', OxmlType.BooleanValue),
        ':tick': new OxmlAttr(':tick', OxmlType.BooleanValue),
        ':rep': new OxmlAttr(':rep', OxmlType.UInt32Value),
    };
    RevGroup._C = {
        'xr:xrrftr': RevExFuture,
        'xr:xrrUspt': RevExUnsupported,
        'xr:xrrTrim': RevExTrimmed,
        'xr:xrrrc': RevExRowColumn,
        'xr:xrrm': RevExMove,
        'xr:xrrc': RevExChangeCell,
        'xr:xrrf': RevExFormatting,
        'xr:xrrDefName': RevExDefinedName,
        'xr:xrrdo': RevExDelObj,
        'xr:xrrco': RevExChgObj,
        'xr:xrrSheet': RevExSheetOp,
        'xr:xrrList': RevisionList,
        'xr:xrrListExpR': RevListAutoExpandRw,
    };
    RevGroup._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
    };
    RevListAutoExpandRw._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':refAdded': new OxmlAttr(':refAdded', OxmlType.StringValue),
        ':listGuid': new OxmlAttr(':listGuid', OxmlType.StringValue),
    };
    RevisionList._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':Data': new OxmlAttr(':Data', OxmlType.BooleanValue),
        ':Formatting': new OxmlAttr(':Formatting', OxmlType.BooleanValue),
        ':RangeBased': new OxmlAttr(':RangeBased', OxmlType.BooleanValue),
        ':Fake': new OxmlAttr(':Fake', OxmlType.BooleanValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':Headers': new OxmlAttr(':Headers', OxmlType.BooleanValue),
        ':InsDelHeaders': new OxmlAttr(':InsDelHeaders', OxmlType.BooleanValue),
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
    };
    RevExSheetOp._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':op': new OxmlAttr(':op', OxmlType.EnumValue, SheetOpArray),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':idOrig': new OxmlAttr(':idOrig', OxmlType.UInt32Value),
        ':idNew': new OxmlAttr(':idNew', OxmlType.UInt32Value),
    };
    RevExChgObj._C = {
        'xr:hdr': StateBasedHeader,
        'xr:link': RevisionStateLink,
        'xr:body': RevisionState,
    };
    RevExChgObj._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
    };
    RevExDelObj._C = {
        'xr:hdr': StateBasedHeader,
    };
    RevExDelObj._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
    };
    RevExDefinedName._C = {
        'xr:formula': FormulaFormula,
        'xr:extLst': ExtensionList,
    };
    RevExDefinedName._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':customView': new OxmlAttr(':customView', OxmlType.BooleanValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':function': new OxmlAttr(':function', OxmlType.BooleanValue),
        ':functionGroupId': new OxmlAttr(':functionGroupId', OxmlType.ByteValue),
        ':shortcutKey': new OxmlAttr(':shortcutKey', OxmlType.ByteValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':customMenu': new OxmlAttr(':customMenu', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':help': new OxmlAttr(':help', OxmlType.StringValue),
        ':statusBar': new OxmlAttr(':statusBar', OxmlType.StringValue),
        ':comment': new OxmlAttr(':comment', OxmlType.StringValue),
    };
    RevExFormatting._C = {
        'xr:dxf': DifferentialFormatType,
        'xr:extLst': ExtensionList,
    };
    RevExFormatting._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
        ':xfDxf': new OxmlAttr(':xfDxf', OxmlType.BooleanValue),
        ':style': new OxmlAttr(':style', OxmlType.BooleanValue),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
        ':start': new OxmlAttr(':start', OxmlType.UInt32Value),
        ':length': new OxmlAttr(':length', OxmlType.UInt32Value),
        ':styleUid': new OxmlAttr(':styleUid', OxmlType.StringValue),
        ':fBlankCell': new OxmlAttr(':fBlankCell', OxmlType.BooleanValue),
        ':applyNumberFormat': new OxmlAttr(':applyNumberFormat', OxmlType.BooleanValue),
        ':applyFont': new OxmlAttr(':applyFont', OxmlType.BooleanValue),
        ':applyFill': new OxmlAttr(':applyFill', OxmlType.BooleanValue),
        ':applyBorder': new OxmlAttr(':applyBorder', OxmlType.BooleanValue),
        ':applyAlignment': new OxmlAttr(':applyAlignment', OxmlType.BooleanValue),
        ':applyProtection': new OxmlAttr(':applyProtection', OxmlType.BooleanValue),
    };
    RevExChangeCell._C = {
        'xr:c': RevCell,
        'xr:ccse': ChangeCellSubEdit,
    };
    RevExChangeCell._D = {
        ':listUid': new OxmlAttr(':listUid', OxmlType.StringValue),
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, FillTypeArray),
        ':x': new OxmlAttr(':x', OxmlType.EnumValue, FillTypeExtArray),
        ':w': new OxmlAttr(':w', OxmlType.UInt32Value),
    };
    RevExMove._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':src': new OxmlAttr(':src', OxmlType.StringValue),
        ':dst': new OxmlAttr(':dst', OxmlType.StringValue),
        ':srcSh': new OxmlAttr(':srcSh', OxmlType.StringValue),
    };
    RevExRowColumn._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':eol': new OxmlAttr(':eol', OxmlType.BooleanValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':action': new OxmlAttr(':action', OxmlType.EnumValue, RwColActionArray),
    };
    RevExTrimmed._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
    };
    RevExUnsupported._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
    };
    RevExFuture._C = {
        'xr:xrrtest': RevExTest,
    };
    RevExFuture._D = {
        ':rev': new OxmlAttr(':rev', OxmlType.UInt64Value),
        ':uid': new OxmlAttr(':uid', OxmlType.StringValue),
        ':sh': new OxmlAttr(':sh', OxmlType.StringValue),
        ':uidp': new OxmlAttr(':uidp', OxmlType.StringValue),
        ':ctx': new OxmlAttr(':ctx', OxmlType.EnumValue, RevisionContextArray),
        ':sti': new OxmlAttr(':sti', OxmlType.BooleanValue),
    };
    RevExHeader._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':minRev': new OxmlAttr(':minRev', OxmlType.UInt64Value),
        ':maxRev': new OxmlAttr(':maxRev', OxmlType.UInt64Value),
        ':time': new OxmlAttr(':time', OxmlType.DateTimeValue),
    };
    StateBasedObject._C = {
        'xr:dataValidation': DataValidation,
        'xr:hyperlink': Hyperlink,
        'xr:sparklineGroup': SparklineGroup,
        'xr:comments': Comments,
        'xr:autoFilter': AutoFilter,
        'xr:pivotTableDefinition': pivotTableDefinition,
    };
    RevisionPtr._D = {
        ':revIDLastSave': new OxmlAttr(':revIDLastSave', OxmlType.UInt64Value),
        ':documentId': new OxmlAttr(':documentId', OxmlType.StringValue),
    };
    DifferentialFormatType._C = {
        'x:font': XFont,
        'x:numFmt': XNumberingFormat,
        'x:fill': XFill,
        'x:alignment': XAlignment,
        'x:border': XBorder,
        'x:protection': XProtection,
        'x:extLst': XExtensionList,
    };
    RevExStream._C = {
        'xr:xrrftr': RevExFuture,
        'xr:xrrUspt': RevExUnsupported,
        'xr:xrrTrim': RevExTrimmed,
        'xr:xrrrc': RevExRowColumn,
        'xr:xrrm': RevExMove,
        'xr:xrrc': RevExChangeCell,
        'xr:xrrf': RevExFormatting,
        'xr:xrrDefName': RevExDefinedName,
        'xr:xrrdo': RevExDelObj,
        'xr:xrrco': RevExChgObj,
        'xr:xrrSheet': RevExSheetOp,
        'xr:xrrList': RevisionList,
        'xr:xrrListExpR': RevListAutoExpandRw,
        'xr:xrrg': RevGroup,
    };
    RevExHeaders._C = {
        'xr:hdr': RevExHeader,
    };
    RevExHeaders._D = {
        ':minRev': new OxmlAttr(':minRev', OxmlType.UInt64Value),
        ':maxRev': new OxmlAttr(':maxRev', OxmlType.UInt64Value),
        ':docId': new OxmlAttr(':docId', OxmlType.StringValue),
        ':endpointId': new OxmlAttr(':endpointId', OxmlType.StringValue),
    };
    return {
        prefix: 'xr',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2014/revision',
    };
}
