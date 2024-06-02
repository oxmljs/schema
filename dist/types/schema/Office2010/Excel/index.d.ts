import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { Base64BinaryValue } from '../../../framework/types/Base64BinaryValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { FilterOperatorValues } from '../../Spreadsheet';
import { ScopeValues } from '../../Spreadsheet';
import { RuleValues } from '../../Spreadsheet';
import { PivotAreaValues } from '../../Spreadsheet';
import { PivotTableAxisValues } from '../../Spreadsheet';
import { DataValidationValues } from '../../Spreadsheet';
import { DataValidationErrorStyleValues } from '../../Spreadsheet';
import { DataValidationImeModeValues } from '../../Spreadsheet';
import { DataValidationOperatorValues } from '../../Spreadsheet';
import { ConditionalFormatValues } from '../../Spreadsheet';
import { ConditionalFormattingOperatorValues } from '../../Spreadsheet';
import { TimePeriodValues } from '../../Spreadsheet';
import { SortByValues } from '../../Spreadsheet';
import { SlicerCacheDefinitionExtension as XSlicerCacheDefinitionExtension } from '../../Spreadsheet';
import { ReferenceSequence as XneReferenceSequence } from '../../Office/Excel';
import { PivotArea as XPivotArea } from '../../Spreadsheet';
import { Value as XValue } from '../../Spreadsheet';
import { PivotAreaReferences as XPivotAreaReferences } from '../../Spreadsheet';
import { ExtensionList as XExtensionList } from '../../Spreadsheet';
import { Formula as XneFormula } from '../../Office/Excel';
import { CalculatedMember as XCalculatedMember } from '../../Spreadsheet';
import { Font as XFont } from '../../Spreadsheet';
import { NumberingFormat as XNumberingFormat } from '../../Spreadsheet';
import { Fill as XFill } from '../../Spreadsheet';
import { Alignment as XAlignment } from '../../Spreadsheet';
import { Border as XBorder } from '../../Spreadsheet';
import { Protection as XProtection } from '../../Spreadsheet';
import { Extension as XExtension } from '../../Spreadsheet';
import { DifferentialFormat as XDifferentialFormat } from '../../Spreadsheet';
import { PivotCache as XPivotCache } from '../../Spreadsheet';
export declare enum DisplayBlanksAsValues {
    /** undefined. Serialized value: `span` */
    Span = "span",
    /** undefined. Serialized value: `gap` */
    Gap = "gap",
    /** undefined. Serialized value: `zero` */
    Zero = "zero"
}
export declare const DisplayBlanksAsValuesArray: readonly [DisplayBlanksAsValues.Span, DisplayBlanksAsValues.Gap, DisplayBlanksAsValues.Zero];
export declare enum SparklineAxisMinMaxValues {
    /** undefined. Serialized value: `individual` */
    Individual = "individual",
    /** undefined. Serialized value: `group` */
    Group = "group",
    /** undefined. Serialized value: `custom` */
    Custom = "custom"
}
export declare const SparklineAxisMinMaxValuesArray: readonly [SparklineAxisMinMaxValues.Individual, SparklineAxisMinMaxValues.Group, SparklineAxisMinMaxValues.Custom];
export declare enum SparklineTypeValues {
    /** undefined. Serialized value: `line` */
    Line = "line",
    /** undefined. Serialized value: `column` */
    Column = "column",
    /** undefined. Serialized value: `stacked` */
    Stacked = "stacked"
}
export declare const SparklineTypeValuesArray: readonly [SparklineTypeValues.Line, SparklineTypeValues.Column, SparklineTypeValues.Stacked];
export declare enum PivotShowAsValues {
    /** undefined. Serialized value: `percentOfParent` */
    PercentOfParent = "percentOfParent",
    /** undefined. Serialized value: `percentOfParentRow` */
    PercentOfParentRow = "percentOfParentRow",
    /** undefined. Serialized value: `percentOfParentCol` */
    PercentOfParentColumn = "percentOfParentCol",
    /** undefined. Serialized value: `percentOfRunningTotal` */
    PercentOfRunningTotal = "percentOfRunningTotal",
    /** undefined. Serialized value: `rankAscending` */
    RankAscending = "rankAscending",
    /** undefined. Serialized value: `rankDescending` */
    RankDescending = "rankDescending"
}
export declare const PivotShowAsValuesArray: readonly [PivotShowAsValues.PercentOfParent, PivotShowAsValues.PercentOfParentRow, PivotShowAsValues.PercentOfParentColumn, PivotShowAsValues.PercentOfRunningTotal, PivotShowAsValues.RankAscending, PivotShowAsValues.RankDescending];
export declare enum DataBarDirectionValues {
    /** undefined. Serialized value: `context` */
    Context = "context",
    /** undefined. Serialized value: `leftToRight` */
    LeftToRight = "leftToRight",
    /** undefined. Serialized value: `rightToLeft` */
    RightToLeft = "rightToLeft"
}
export declare const DataBarDirectionValuesArray: readonly [DataBarDirectionValues.Context, DataBarDirectionValues.LeftToRight, DataBarDirectionValues.RightToLeft];
export declare enum DataBarAxisPositionValues {
    /** undefined. Serialized value: `automatic` */
    Automatic = "automatic",
    /** undefined. Serialized value: `middle` */
    Middle = "middle",
    /** undefined. Serialized value: `none` */
    None = "none"
}
export declare const DataBarAxisPositionValuesArray: readonly [DataBarAxisPositionValues.Automatic, DataBarAxisPositionValues.Middle, DataBarAxisPositionValues.None];
export declare enum ConditionalFormattingValueObjectTypeValues {
    /** undefined. Serialized value: `num` */
    Numeric = "num",
    /** undefined. Serialized value: `percent` */
    Percent = "percent",
    /** undefined. Serialized value: `max` */
    Max = "max",
    /** undefined. Serialized value: `min` */
    Min = "min",
    /** undefined. Serialized value: `formula` */
    Formula = "formula",
    /** undefined. Serialized value: `percentile` */
    Percentile = "percentile",
    /** undefined. Serialized value: `autoMin` */
    AutoMin = "autoMin",
    /** undefined. Serialized value: `autoMax` */
    AutoMax = "autoMax"
}
export declare const ConditionalFormattingValueObjectTypeValuesArray: readonly [ConditionalFormattingValueObjectTypeValues.Numeric, ConditionalFormattingValueObjectTypeValues.Percent, ConditionalFormattingValueObjectTypeValues.Max, ConditionalFormattingValueObjectTypeValues.Min, ConditionalFormattingValueObjectTypeValues.Formula, ConditionalFormattingValueObjectTypeValues.Percentile, ConditionalFormattingValueObjectTypeValues.AutoMin, ConditionalFormattingValueObjectTypeValues.AutoMax];
export declare enum IconSetTypeValues {
    /** undefined. Serialized value: `3Arrows` */
    ThreeArrows = "3Arrows",
    /** undefined. Serialized value: `3ArrowsGray` */
    ThreeArrowsGray = "3ArrowsGray",
    /** undefined. Serialized value: `3Flags` */
    ThreeFlags = "3Flags",
    /** undefined. Serialized value: `3TrafficLights1` */
    ThreeTrafficLights1 = "3TrafficLights1",
    /** undefined. Serialized value: `3TrafficLights2` */
    ThreeTrafficLights2 = "3TrafficLights2",
    /** undefined. Serialized value: `3Signs` */
    ThreeSigns = "3Signs",
    /** undefined. Serialized value: `3Symbols` */
    ThreeSymbols = "3Symbols",
    /** undefined. Serialized value: `3Symbols2` */
    ThreeSymbols2 = "3Symbols2",
    /** undefined. Serialized value: `4Arrows` */
    FourArrows = "4Arrows",
    /** undefined. Serialized value: `4ArrowsGray` */
    FourArrowsGray = "4ArrowsGray",
    /** undefined. Serialized value: `4RedToBlack` */
    FourRedToBlack = "4RedToBlack",
    /** undefined. Serialized value: `4Rating` */
    FourRating = "4Rating",
    /** undefined. Serialized value: `4TrafficLights` */
    FourTrafficLights = "4TrafficLights",
    /** undefined. Serialized value: `5Arrows` */
    FiveArrows = "5Arrows",
    /** undefined. Serialized value: `5ArrowsGray` */
    FiveArrowsGray = "5ArrowsGray",
    /** undefined. Serialized value: `5Rating` */
    FiveRating = "5Rating",
    /** undefined. Serialized value: `5Quarters` */
    FiveQuarters = "5Quarters",
    /** undefined. Serialized value: `3Stars` */
    ThreeStars = "3Stars",
    /** undefined. Serialized value: `3Triangles` */
    ThreeTriangles = "3Triangles",
    /** undefined. Serialized value: `5Boxes` */
    FiveBoxes = "5Boxes",
    /** undefined. Serialized value: `NoIcons` */
    NoIcons = "NoIcons"
}
export declare const IconSetTypeValuesArray: readonly [IconSetTypeValues.ThreeArrows, IconSetTypeValues.ThreeArrowsGray, IconSetTypeValues.ThreeFlags, IconSetTypeValues.ThreeTrafficLights1, IconSetTypeValues.ThreeTrafficLights2, IconSetTypeValues.ThreeSigns, IconSetTypeValues.ThreeSymbols, IconSetTypeValues.ThreeSymbols2, IconSetTypeValues.FourArrows, IconSetTypeValues.FourArrowsGray, IconSetTypeValues.FourRedToBlack, IconSetTypeValues.FourRating, IconSetTypeValues.FourTrafficLights, IconSetTypeValues.FiveArrows, IconSetTypeValues.FiveArrowsGray, IconSetTypeValues.FiveRating, IconSetTypeValues.FiveQuarters, IconSetTypeValues.ThreeStars, IconSetTypeValues.ThreeTriangles, IconSetTypeValues.FiveBoxes, IconSetTypeValues.NoIcons];
export declare enum PivotEditValueTypeValues {
    /** undefined. Serialized value: `number` */
    Number = "number",
    /** undefined. Serialized value: `dateTime` */
    DateTime = "dateTime",
    /** undefined. Serialized value: `string` */
    String = "string",
    /** undefined. Serialized value: `boolean` */
    Boolean = "boolean",
    /** undefined. Serialized value: `error` */
    Error = "error"
}
export declare const PivotEditValueTypeValuesArray: readonly [PivotEditValueTypeValues.Number, PivotEditValueTypeValues.DateTime, PivotEditValueTypeValues.String, PivotEditValueTypeValues.Boolean, PivotEditValueTypeValues.Error];
export declare enum AllocationMethodValues {
    /** undefined. Serialized value: `equalAllocation` */
    EqualAllocation = "equalAllocation",
    /** undefined. Serialized value: `equalIncrement` */
    EqualIncrement = "equalIncrement",
    /** undefined. Serialized value: `weightedAllocation` */
    WeightedAllocation = "weightedAllocation",
    /** undefined. Serialized value: `weightedIncrement` */
    WeightedIncrement = "weightedIncrement"
}
export declare const AllocationMethodValuesArray: readonly [AllocationMethodValues.EqualAllocation, AllocationMethodValues.EqualIncrement, AllocationMethodValues.WeightedAllocation, AllocationMethodValues.WeightedIncrement];
export declare enum SlicerStyleTypeValues {
    /** undefined. Serialized value: `unselectedItemWithData` */
    UnselectedItemWithData = "unselectedItemWithData",
    /** undefined. Serialized value: `selectedItemWithData` */
    SelectedItemWithData = "selectedItemWithData",
    /** undefined. Serialized value: `unselectedItemWithNoData` */
    UnselectedItemWithNoData = "unselectedItemWithNoData",
    /** undefined. Serialized value: `selectedItemWithNoData` */
    SelectedItemWithNoData = "selectedItemWithNoData",
    /** undefined. Serialized value: `hoveredUnselectedItemWithData` */
    HoveredUnselectedItemWithData = "hoveredUnselectedItemWithData",
    /** undefined. Serialized value: `hoveredSelectedItemWithData` */
    HoveredSelectedItemWithData = "hoveredSelectedItemWithData",
    /** undefined. Serialized value: `hoveredUnselectedItemWithNoData` */
    HoveredUnselectedItemWithNoData = "hoveredUnselectedItemWithNoData",
    /** undefined. Serialized value: `hoveredSelectedItemWithNoData` */
    HoveredSelectedItemWithNoData = "hoveredSelectedItemWithNoData"
}
export declare const SlicerStyleTypeValuesArray: readonly [SlicerStyleTypeValues.UnselectedItemWithData, SlicerStyleTypeValues.SelectedItemWithData, SlicerStyleTypeValues.UnselectedItemWithNoData, SlicerStyleTypeValues.SelectedItemWithNoData, SlicerStyleTypeValues.HoveredUnselectedItemWithData, SlicerStyleTypeValues.HoveredSelectedItemWithData, SlicerStyleTypeValues.HoveredUnselectedItemWithNoData, SlicerStyleTypeValues.HoveredSelectedItemWithNoData];
export declare enum CheckedValues {
    /** undefined. Serialized value: `Unchecked` */
    Unchecked = "Unchecked",
    /** undefined. Serialized value: `Checked` */
    Checked = "Checked",
    /** undefined. Serialized value: `Mixed` */
    Mixed = "Mixed"
}
export declare const CheckedValuesArray: readonly [CheckedValues.Unchecked, CheckedValues.Checked, CheckedValues.Mixed];
export declare enum DropStyleValues {
    /** undefined. Serialized value: `combo` */
    Combo = "combo",
    /** undefined. Serialized value: `comboedit` */
    ComboEdit = "comboedit",
    /** undefined. Serialized value: `simple` */
    Simple = "simple"
}
export declare const DropStyleValuesArray: readonly [DropStyleValues.Combo, DropStyleValues.ComboEdit, DropStyleValues.Simple];
export declare enum SelectionTypeValues {
    /** undefined. Serialized value: `single` */
    Single = "single",
    /** undefined. Serialized value: `multi` */
    Multiple = "multi",
    /** undefined. Serialized value: `extended` */
    Extended = "extended"
}
export declare const SelectionTypeValuesArray: readonly [SelectionTypeValues.Single, SelectionTypeValues.Multiple, SelectionTypeValues.Extended];
export declare enum TextHorizontalAlignmentValues {
    /** undefined. Serialized value: `left` */
    Left = "left",
    /** undefined. Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `right` */
    Right = "right",
    /** undefined. Serialized value: `justify` */
    Justify = "justify",
    /** undefined. Serialized value: `distributed` */
    Distributed = "distributed"
}
export declare const TextHorizontalAlignmentValuesArray: readonly [TextHorizontalAlignmentValues.Left, TextHorizontalAlignmentValues.Center, TextHorizontalAlignmentValues.Right, TextHorizontalAlignmentValues.Justify, TextHorizontalAlignmentValues.Distributed];
export declare enum TextVerticalAlignmentValues {
    /** undefined. Serialized value: `top` */
    Top = "top",
    /** undefined. Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `bottom` */
    Bottom = "bottom",
    /** undefined. Serialized value: `justify` */
    Justify = "justify",
    /** undefined. Serialized value: `distributed` */
    Distributed = "distributed"
}
export declare const TextVerticalAlignmentValuesArray: readonly [TextVerticalAlignmentValues.Top, TextVerticalAlignmentValues.Center, TextVerticalAlignmentValues.Bottom, TextVerticalAlignmentValues.Justify, TextVerticalAlignmentValues.Distributed];
export declare enum EditValidationValues {
    /** undefined. Serialized value: `text` */
    Text = "text",
    /** undefined. Serialized value: `integer` */
    Integer = "integer",
    /** undefined. Serialized value: `number` */
    Number = "number",
    /** undefined. Serialized value: `reference` */
    Reference = "reference",
    /** undefined. Serialized value: `formula` */
    Formula = "formula"
}
export declare const EditValidationValuesArray: readonly [EditValidationValues.Text, EditValidationValues.Integer, EditValidationValues.Number, EditValidationValues.Reference, EditValidationValues.Formula];
export declare enum OlapSlicerCacheSortOrderValues {
    /** undefined. Serialized value: `natural` */
    Natural = "natural",
    /** undefined. Serialized value: `ascending` */
    Ascending = "ascending",
    /** undefined. Serialized value: `descending` */
    Descending = "descending"
}
export declare const OlapSlicerCacheSortOrderValuesArray: readonly [OlapSlicerCacheSortOrderValues.Natural, OlapSlicerCacheSortOrderValues.Ascending, OlapSlicerCacheSortOrderValues.Descending];
export declare enum TabularSlicerCacheSortOrderValues {
    /** undefined. Serialized value: `ascending` */
    Ascending = "ascending",
    /** undefined. Serialized value: `descending` */
    Descending = "descending"
}
export declare const TabularSlicerCacheSortOrderValuesArray: readonly [TabularSlicerCacheSortOrderValues.Ascending, TabularSlicerCacheSortOrderValues.Descending];
export declare enum SlicerCacheCrossFilterValues {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `showItemsWithDataAtTop` */
    ShowItemsWithDataAtTop = "showItemsWithDataAtTop",
    /** undefined. Serialized value: `showItemsWithNoData` */
    ShowItemsWithNoData = "showItemsWithNoData"
}
export declare const SlicerCacheCrossFilterValuesArray: readonly [SlicerCacheCrossFilterValues.None, SlicerCacheCrossFilterValues.ShowItemsWithDataAtTop, SlicerCacheCrossFilterValues.ShowItemsWithNoData];
export declare enum ObjectTypeValues {
    /** undefined. Serialized value: `Button` */
    Button = "Button",
    /** undefined. Serialized value: `CheckBox` */
    CheckBox = "CheckBox",
    /** undefined. Serialized value: `Drop` */
    Drop = "Drop",
    /** undefined. Serialized value: `GBox` */
    GroupBox = "GBox",
    /** undefined. Serialized value: `Label` */
    Label = "Label",
    /** undefined. Serialized value: `List` */
    List = "List",
    /** undefined. Serialized value: `Radio` */
    Radio = "Radio",
    /** undefined. Serialized value: `Scroll` */
    Scroll = "Scroll",
    /** undefined. Serialized value: `Spin` */
    Spin = "Spin",
    /** undefined. Serialized value: `EditBox` */
    EditBox = "EditBox",
    /** undefined. Serialized value: `Dialog` */
    Dialog = "Dialog"
}
export declare const ObjectTypeValuesArray: readonly [ObjectTypeValues.Button, ObjectTypeValues.CheckBox, ObjectTypeValues.Drop, ObjectTypeValues.GroupBox, ObjectTypeValues.Label, ObjectTypeValues.List, ObjectTypeValues.Radio, ObjectTypeValues.Scroll, ObjectTypeValues.Spin, ObjectTypeValues.EditBox, ObjectTypeValues.Dialog];
/** Defines the SlicerCacheDefinitionExtensionList Class. Serialized as `x14:extLst` */
export declare class SlicerCacheDefinitionExtensionList extends OxmlCompositeElement<XSlicerCacheDefinitionExtension> {
    static _Q: string;
}
/** Defines the SlicerCacheData Class. Serialized as `x14:data` */
export declare class SlicerCacheData extends OxmlCompositeElement<OlapSlicerCache | TabularSlicerCache> {
    static _Q: string;
    /** Returns OlapSlicerCache. */
    get olapSlicerCache(): OlapSlicerCache | undefined;
    /** Returns TabularSlicerCache. */
    get tabularSlicerCache(): TabularSlicerCache | undefined;
}
/** Defines the SlicerCachePivotTables Class. Serialized as `x14:pivotTables` */
export declare class SlicerCachePivotTables extends OxmlCompositeElement<SlicerCachePivotTable> {
    static _Q: string;
}
/** Defines the TabularSlicerCacheItem Class. Serialized as `x14:i` */
export declare class TabularSlicerCacheItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** x. Serialized as `:x` */
    get atom(): UInt32Value | undefined;
    set atom(v: UInt32Value | undefined);
    /** s. Serialized as `:s` */
    get isSelected(): BooleanValue | undefined;
    set isSelected(v: BooleanValue | undefined);
    /** nd. Serialized as `:nd` */
    get nonDisplay(): BooleanValue | undefined;
    set nonDisplay(v: BooleanValue | undefined);
}
/** Defines the TabularSlicerCacheItems Class. Serialized as `x14:items` */
export declare class TabularSlicerCacheItems extends OxmlCompositeElement<TabularSlicerCacheItem> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the OlapSlicerCacheSelection Class. Serialized as `x14:selection` */
export declare class OlapSlicerCacheSelection extends OxmlCompositeElement<OlapSlicerCacheItemParent> {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the OlapSlicerCacheSelections Class. Serialized as `x14:selections` */
export declare class OlapSlicerCacheSelections extends OxmlCompositeElement<OlapSlicerCacheSelection> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the OlapSlicerCacheLevelsData Class. Serialized as `x14:levels` */
export declare class OlapSlicerCacheLevelsData extends OxmlCompositeElement<OlapSlicerCacheLevelData> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the OlapSlicerCacheLevelData Class. Serialized as `x14:level` */
export declare class OlapSlicerCacheLevelData extends OxmlCompositeElement<OlapSlicerCacheRanges> {
    static _Q: string;
    static _A: string[];
    /** uniqueName. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** sourceCaption. Serialized as `:sourceCaption` */
    get sourceCaption(): StringValue | undefined;
    set sourceCaption(v: StringValue | undefined);
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** sortOrder. Serialized as `:sortOrder` */
    get sortOrder(): OlapSlicerCacheSortOrderValues | undefined;
    set sortOrder(v: OlapSlicerCacheSortOrderValues | undefined);
    /** crossFilter. Serialized as `:crossFilter` */
    get crossFilter(): SlicerCacheCrossFilterValues | undefined;
    set crossFilter(v: SlicerCacheCrossFilterValues | undefined);
    /** Returns OlapSlicerCacheRanges. */
    get olapSlicerCacheRanges(): OlapSlicerCacheRanges | undefined;
}
/** Defines the OlapSlicerCacheRanges Class. Serialized as `x14:ranges` */
export declare class OlapSlicerCacheRanges extends OxmlCompositeElement<OlapSlicerCacheRange> {
    static _Q: string;
}
/** Defines the OlapSlicerCacheRange Class. Serialized as `x14:range` */
export declare class OlapSlicerCacheRange extends OxmlCompositeElement<OlapSlicerCacheItem> {
    static _Q: string;
    static _A: string[];
    /** startItem. Serialized as `:startItem` */
    get startItem(): UInt32Value | undefined;
    set startItem(v: UInt32Value | undefined);
}
/** Defines the OlapSlicerCacheItem Class. Serialized as `x14:i` */
export declare class OlapSlicerCacheItem extends OxmlCompositeElement<OlapSlicerCacheItemParent> {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** c. Serialized as `:c` */
    get displayName(): StringValue | undefined;
    set displayName(v: StringValue | undefined);
    /** nd. Serialized as `:nd` */
    get nonDisplay(): BooleanValue | undefined;
    set nonDisplay(v: BooleanValue | undefined);
}
/** Defines the OlapSlicerCacheItemParent Class. Serialized as `x14:p` */
export declare class OlapSlicerCacheItemParent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** n. Serialized as `:n` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the SlicerCachePivotTable Class. Serialized as `x14:pivotTable` */
export declare class SlicerCachePivotTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** tabId. Serialized as `:tabId` */
    get tabId(): UInt32Value | undefined;
    set tabId(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the TabularSlicerCache Class. Serialized as `x14:tabular` */
export declare class TabularSlicerCache extends OxmlCompositeElement<TabularSlicerCacheItems | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    get pivotCacheId(): UInt32Value | undefined;
    set pivotCacheId(v: UInt32Value | undefined);
    /** sortOrder. Serialized as `:sortOrder` */
    get sortOrder(): TabularSlicerCacheSortOrderValues | undefined;
    set sortOrder(v: TabularSlicerCacheSortOrderValues | undefined);
    /** customListSort. Serialized as `:customListSort` */
    get customListSort(): BooleanValue | undefined;
    set customListSort(v: BooleanValue | undefined);
    /** showMissing. Serialized as `:showMissing` */
    get showMissing(): BooleanValue | undefined;
    set showMissing(v: BooleanValue | undefined);
    /** crossFilter. Serialized as `:crossFilter` */
    get crossFilter(): SlicerCacheCrossFilterValues | undefined;
    set crossFilter(v: SlicerCacheCrossFilterValues | undefined);
    /** Returns TabularSlicerCacheItems. */
    get tabularSlicerCacheItems(): TabularSlicerCacheItems | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the OlapSlicerCache Class. Serialized as `x14:olap` */
export declare class OlapSlicerCache extends OxmlCompositeElement<OlapSlicerCacheLevelsData | OlapSlicerCacheSelections | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    get pivotCacheId(): UInt32Value | undefined;
    set pivotCacheId(v: UInt32Value | undefined);
    /** Returns OlapSlicerCacheLevelsData. */
    get olapSlicerCacheLevelsData(): OlapSlicerCacheLevelsData | undefined;
    /** Returns OlapSlicerCacheSelections. */
    get olapSlicerCacheSelections(): OlapSlicerCacheSelections | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Slicer Class. Serialized as `x14:slicer` */
export declare class Slicer extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** cache. Serialized as `:cache` */
    get cache(): StringValue | undefined;
    set cache(v: StringValue | undefined);
    /** caption. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** startItem. Serialized as `:startItem` */
    get startItem(): UInt32Value | undefined;
    set startItem(v: UInt32Value | undefined);
    /** columnCount. Serialized as `:columnCount` */
    get columnCount(): UInt32Value | undefined;
    set columnCount(v: UInt32Value | undefined);
    /** showCaption. Serialized as `:showCaption` */
    get showCaption(): BooleanValue | undefined;
    set showCaption(v: BooleanValue | undefined);
    /** level. Serialized as `:level` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
    /** style. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** lockedPosition. Serialized as `:lockedPosition` */
    get lockedPosition(): BooleanValue | undefined;
    set lockedPosition(v: BooleanValue | undefined);
    /** rowHeight. Serialized as `:rowHeight` */
    get rowHeight(): UInt32Value | undefined;
    set rowHeight(v: UInt32Value | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ListItems Class. Serialized as `x14:itemLst` */
export declare class ListItems extends OxmlCompositeElement<ListItem | ExtensionList> {
    static _Q: string;
}
/** Defines the ListItem Class. Serialized as `x14:item` */
export declare class ListItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the CustomFilter Class. Serialized as `x14:customFilter` */
export declare class CustomFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** operator. Serialized as `:operator` */
    get operator(): FilterOperatorValues | undefined;
    set operator(v: FilterOperatorValues | undefined);
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the ProtectedRange Class. Serialized as `x14:protectedRange` */
export declare class ProtectedRange extends OxmlCompositeElement<XneReferenceSequence> {
    static _Q: string;
    static _A: string[];
    /** password. Serialized as `:password` */
    get password(): HexBinaryValue | undefined;
    set password(v: HexBinaryValue | undefined);
    /** algorithmName. Serialized as `:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** hashValue. Serialized as `:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** saltValue. Serialized as `:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** spinCount. Serialized as `:spinCount` */
    get spinCount(): UInt32Value | undefined;
    set spinCount(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** securityDescriptor. Serialized as `:securityDescriptor` */
    get securityDescriptor(): StringValue | undefined;
    set securityDescriptor(v: StringValue | undefined);
    /** Returns XneReferenceSequence. */
    get referenceSequence(): XneReferenceSequence | undefined;
}
/** Defines the IgnoredError Class. Serialized as `x14:ignoredError` */
export declare class IgnoredError extends OxmlCompositeElement<XneReferenceSequence> {
    static _Q: string;
    static _A: string[];
    /** evalError. Serialized as `:evalError` */
    get evalError(): BooleanValue | undefined;
    set evalError(v: BooleanValue | undefined);
    /** twoDigitTextYear. Serialized as `:twoDigitTextYear` */
    get twoDigitTextYear(): BooleanValue | undefined;
    set twoDigitTextYear(v: BooleanValue | undefined);
    /** numberStoredAsText. Serialized as `:numberStoredAsText` */
    get numberStoredAsText(): BooleanValue | undefined;
    set numberStoredAsText(v: BooleanValue | undefined);
    /** formula. Serialized as `:formula` */
    get formula(): BooleanValue | undefined;
    set formula(v: BooleanValue | undefined);
    /** formulaRange. Serialized as `:formulaRange` */
    get formulaRange(): BooleanValue | undefined;
    set formulaRange(v: BooleanValue | undefined);
    /** unlockedFormula. Serialized as `:unlockedFormula` */
    get unlockedFormula(): BooleanValue | undefined;
    set unlockedFormula(v: BooleanValue | undefined);
    /** emptyCellReference. Serialized as `:emptyCellReference` */
    get emptyCellReference(): BooleanValue | undefined;
    set emptyCellReference(v: BooleanValue | undefined);
    /** listDataValidation. Serialized as `:listDataValidation` */
    get listDataValidation(): BooleanValue | undefined;
    set listDataValidation(v: BooleanValue | undefined);
    /** calculatedColumn. Serialized as `:calculatedColumn` */
    get calculatedColumn(): BooleanValue | undefined;
    set calculatedColumn(v: BooleanValue | undefined);
    /** Returns XneReferenceSequence. */
    get referenceSequence(): XneReferenceSequence | undefined;
}
/** Defines the SlicerStyleElement Class. Serialized as `x14:slicerStyleElement` */
export declare class SlicerStyleElement extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): SlicerStyleTypeValues | undefined;
    set type(v: SlicerStyleTypeValues | undefined);
    /** dxfId. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
}
/** Defines the SlicerStyle Class. Serialized as `x14:slicerStyle` */
export declare class SlicerStyle extends OxmlCompositeElement<SlicerStyleElements> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns SlicerStyleElements. */
    get slicerStyleElements(): SlicerStyleElements | undefined;
}
/** Defines the PivotAreas Class. Serialized as `x14:pivotAreas` */
export declare class PivotAreas extends OxmlCompositeElement<XPivotArea> {
    static _Q: string;
    static _A: string[];
    /** Pivot Area Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ConditionalFormat Class. Serialized as `x14:conditionalFormat` */
export declare class ConditionalFormat extends OxmlCompositeElement<PivotAreas | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** scope. Serialized as `:scope` */
    get scope(): ScopeValues | undefined;
    set scope(v: ScopeValues | undefined);
    /** type. Serialized as `:type` */
    get type(): RuleValues | undefined;
    set type(v: RuleValues | undefined);
    /** priority. Serialized as `:priority` */
    get priority(): UInt32Value | undefined;
    set priority(v: UInt32Value | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns PivotAreas. */
    get pivotAreas(): PivotAreas | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DdeValues Class. Serialized as `x14:values` */
export declare class DdeValues extends OxmlCompositeElement<XValue> {
    static _Q: string;
    static _A: string[];
    /** Rows. Serialized as `:rows` */
    get rows(): UInt32Value | undefined;
    set rows(v: UInt32Value | undefined);
    /** Columns. Serialized as `:cols` */
    get columns(): UInt32Value | undefined;
    set columns(v: UInt32Value | undefined);
}
/** Defines the SlicerStyleElements Class. Serialized as `x14:slicerStyleElements` */
export declare class SlicerStyleElements extends OxmlCompositeElement<SlicerStyleElement> {
    static _Q: string;
}
/** Defines the Xstring Class. Serialized as `x14:tupleItem` */
export declare class Xstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PivotEditValue Class. Serialized as `x14:editValue` */
export declare class PivotEditValue extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** valueType. Serialized as `:valueType` */
    get valueType(): PivotEditValueTypeValues | undefined;
    set valueType(v: PivotEditValueTypeValues | undefined);
}
/** Defines the PivotChange Class. Serialized as `x14:pivotChange` */
export declare class PivotChange extends OxmlCompositeElement<PivotEditValue | TupleItems | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** allocationMethod. Serialized as `:allocationMethod` */
    get allocationMethod(): AllocationMethodValues | undefined;
    set allocationMethod(v: AllocationMethodValues | undefined);
    /** weightExpression. Serialized as `:weightExpression` */
    get weightExpression(): StringValue | undefined;
    set weightExpression(v: StringValue | undefined);
    /** Returns PivotEditValue. */
    get pivotEditValue(): PivotEditValue | undefined;
    /** Returns TupleItems. */
    get tupleItems(): TupleItems | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the PivotArea Class. Serialized as `x14:pivotArea` */
export declare class PivotArea extends OxmlCompositeElement<XPivotAreaReferences | XExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Field Index. Serialized as `:field` */
    get field(): Int32Value | undefined;
    set field(v: Int32Value | undefined);
    /** Rule Type. Serialized as `:type` */
    get type(): PivotAreaValues | undefined;
    set type(v: PivotAreaValues | undefined);
    /** Data Only. Serialized as `:dataOnly` */
    get dataOnly(): BooleanValue | undefined;
    set dataOnly(v: BooleanValue | undefined);
    /** Labels Only. Serialized as `:labelOnly` */
    get labelOnly(): BooleanValue | undefined;
    set labelOnly(v: BooleanValue | undefined);
    /** Include Row Grand Total. Serialized as `:grandRow` */
    get grandRow(): BooleanValue | undefined;
    set grandRow(v: BooleanValue | undefined);
    /** Include Column Grand Total. Serialized as `:grandCol` */
    get grandColumn(): BooleanValue | undefined;
    set grandColumn(v: BooleanValue | undefined);
    /** Cache Index. Serialized as `:cacheIndex` */
    get cacheIndex(): BooleanValue | undefined;
    set cacheIndex(v: BooleanValue | undefined);
    /** Outline. Serialized as `:outline` */
    get outline(): BooleanValue | undefined;
    set outline(v: BooleanValue | undefined);
    /** Offset Reference. Serialized as `:offset` */
    get offset(): StringValue | undefined;
    set offset(v: StringValue | undefined);
    /** Collapsed Levels Are Subtotals. Serialized as `:collapsedLevelsAreSubtotals` */
    get collapsedLevelsAreSubtotals(): BooleanValue | undefined;
    set collapsedLevelsAreSubtotals(v: BooleanValue | undefined);
    /** Axis. Serialized as `:axis` */
    get axis(): PivotTableAxisValues | undefined;
    set axis(v: PivotTableAxisValues | undefined);
    /** Field Position. Serialized as `:fieldPosition` */
    get fieldPosition(): UInt32Value | undefined;
    set fieldPosition(v: UInt32Value | undefined);
    /** References. */
    get pivotAreaReferences(): XPivotAreaReferences | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): XExtensionList | undefined;
}
/** Defines the TupleItems Class. Serialized as `x14:tupleItems` */
export declare class TupleItems extends OxmlCompositeElement<Xstring> {
    static _Q: string;
}
/** Defines the PivotUserEdit Class. Serialized as `x14:userEdit` */
export declare class PivotUserEdit extends OxmlCompositeElement<XneFormula | PivotEditValue> {
    static _Q: string;
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
    /** Returns PivotEditValue. */
    get pivotEditValue(): PivotEditValue | undefined;
}
/** Defines the PivotEdit Class. Serialized as `x14:pivotEdit` */
export declare class PivotEdit extends OxmlCompositeElement<PivotUserEdit | TupleItems | PivotArea | ExtensionList> {
    static _Q: string;
    /** Returns PivotUserEdit. */
    get pivotUserEdit(): PivotUserEdit | undefined;
    /** Returns TupleItems. */
    get tupleItems(): TupleItems | undefined;
    /** Returns PivotArea. */
    get pivotArea(): PivotArea | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the CalculatedMembers Class. Serialized as `x14:calculatedMembers` */
export declare class CalculatedMembers extends OxmlCompositeElement<XCalculatedMember> {
    static _Q: string;
    static _A: string[];
    /** Calculated Members Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ConditionalFormats Class. Serialized as `x14:conditionalFormats` */
export declare class ConditionalFormats extends OxmlCompositeElement<ConditionalFormat> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the PivotChanges Class. Serialized as `x14:pivotChanges` */
export declare class PivotChanges extends OxmlCompositeElement<PivotChange> {
    static _Q: string;
}
/** Defines the PivotEdits Class. Serialized as `x14:pivotEdits` */
export declare class PivotEdits extends OxmlCompositeElement<PivotEdit> {
    static _Q: string;
}
/** Defines the ConditionalFormattingIcon Class. Serialized as `x14:cfIcon` */
export declare class ConditionalFormattingIcon extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): IconSetTypeValues | undefined;
    set iconSet(v: IconSetTypeValues | undefined);
    /** iconId. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the ConditionalFormattingValueObject Class. Serialized as `x14:cfvo` */
export declare class ConditionalFormattingValueObject extends OxmlCompositeElement<XneFormula | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): ConditionalFormattingValueObjectTypeValues | undefined;
    set type(v: ConditionalFormattingValueObjectTypeValues | undefined);
    /** gte. Serialized as `:gte` */
    get greaterThanOrEqual(): BooleanValue | undefined;
    set greaterThanOrEqual(v: BooleanValue | undefined);
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DifferentialType Class. Serialized as `x14:dxf` */
export declare class DifferentialType extends OxmlCompositeElement<XFont | XNumberingFormat | XFill | XAlignment | XBorder | XProtection | XExtensionList> {
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
/** Defines the IconSet Class. Serialized as `x14:iconSet` */
export declare class IconSet extends OxmlCompositeElement<ConditionalFormattingValueObject | ConditionalFormattingIcon> {
    static _Q: string;
    static _A: string[];
    /** iconSet. Serialized as `:iconSet` */
    get iconSetTypes(): IconSetTypeValues | undefined;
    set iconSetTypes(v: IconSetTypeValues | undefined);
    /** showValue. Serialized as `:showValue` */
    get showValue(): BooleanValue | undefined;
    set showValue(v: BooleanValue | undefined);
    /** percent. Serialized as `:percent` */
    get percent(): BooleanValue | undefined;
    set percent(v: BooleanValue | undefined);
    /** reverse. Serialized as `:reverse` */
    get reverse(): BooleanValue | undefined;
    set reverse(v: BooleanValue | undefined);
    /** custom. Serialized as `:custom` */
    get custom(): BooleanValue | undefined;
    set custom(v: BooleanValue | undefined);
}
/** Defines the DataBar Class. Serialized as `x14:dataBar` */
export declare class DataBar extends OxmlCompositeElement<ConditionalFormattingValueObject | FillColor | BorderColor | NegativeFillColor | NegativeBorderColor | BarAxisColor> {
    static _Q: string;
    static _A: string[];
    /** minLength. Serialized as `:minLength` */
    get minLength(): UInt32Value | undefined;
    set minLength(v: UInt32Value | undefined);
    /** maxLength. Serialized as `:maxLength` */
    get maxLength(): UInt32Value | undefined;
    set maxLength(v: UInt32Value | undefined);
    /** showValue. Serialized as `:showValue` */
    get showValue(): BooleanValue | undefined;
    set showValue(v: BooleanValue | undefined);
    /** border. Serialized as `:border` */
    get border(): BooleanValue | undefined;
    set border(v: BooleanValue | undefined);
    /** gradient. Serialized as `:gradient` */
    get gradient(): BooleanValue | undefined;
    set gradient(v: BooleanValue | undefined);
    /** direction. Serialized as `:direction` */
    get direction(): DataBarDirectionValues | undefined;
    set direction(v: DataBarDirectionValues | undefined);
    /** negativeBarColorSameAsPositive. Serialized as `:negativeBarColorSameAsPositive` */
    get negativeBarColorSameAsPositive(): BooleanValue | undefined;
    set negativeBarColorSameAsPositive(v: BooleanValue | undefined);
    /** negativeBarBorderColorSameAsPositive. Serialized as `:negativeBarBorderColorSameAsPositive` */
    get negativeBarBorderColorSameAsPositive(): BooleanValue | undefined;
    set negativeBarBorderColorSameAsPositive(v: BooleanValue | undefined);
    /** axisPosition. Serialized as `:axisPosition` */
    get axisPosition(): DataBarAxisPositionValues | undefined;
    set axisPosition(v: DataBarAxisPositionValues | undefined);
}
/** Defines the ColorScale Class. Serialized as `x14:colorScale` */
export declare class ColorScale extends OxmlCompositeElement<ConditionalFormattingValueObject | Color> {
    static _Q: string;
}
/** Defines the SetLevels Class. Serialized as `x14:setLevels` */
export declare class SetLevels extends OxmlCompositeElement<SetLevel> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the SetLevel Class. Serialized as `x14:setLevel` */
export declare class SetLevel extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** hierarchy. Serialized as `:hierarchy` */
    get hierarchy(): Int32Value | undefined;
    set hierarchy(v: Int32Value | undefined);
}
/** Defines the TupleSetRowItem Class. Serialized as `x14:rowItem` */
export declare class TupleSetRowItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** u. Serialized as `:u` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** d. Serialized as `:d` */
    get displayName(): StringValue | undefined;
    set displayName(v: StringValue | undefined);
}
/** Defines the TupleSetRow Class. Serialized as `x14:row` */
export declare class TupleSetRow extends OxmlCompositeElement<TupleSetRowItem> {
    static _Q: string;
}
/** Defines the TupleSetHeader Class. Serialized as `x14:header` */
export declare class TupleSetHeader extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** uniqueName. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** hierarchyName. Serialized as `:hierarchyName` */
    get hierarchyName(): StringValue | undefined;
    set hierarchyName(v: StringValue | undefined);
}
/** Defines the TupleSetRows Class. Serialized as `x14:rows` */
export declare class TupleSetRows extends OxmlCompositeElement<TupleSetRow> {
    static _Q: string;
}
/** Defines the TupleSetHeaders Class. Serialized as `x14:headers` */
export declare class TupleSetHeaders extends OxmlCompositeElement<TupleSetHeader> {
    static _Q: string;
}
/** Defines the TupleSet Class. Serialized as `x14:tupleSet` */
export declare class TupleSet extends OxmlCompositeElement<TupleSetHeaders | TupleSetRows> {
    static _Q: string;
    static _A: string[];
    /** rowCount. Serialized as `:rowCount` */
    get rowCount(): UInt32Value | undefined;
    set rowCount(v: UInt32Value | undefined);
    /** columnCount. Serialized as `:columnCount` */
    get columnCount(): UInt32Value | undefined;
    set columnCount(v: UInt32Value | undefined);
    /** Returns TupleSetHeaders. */
    get tupleSetHeaders(): TupleSetHeaders | undefined;
    /** Returns TupleSetRows. */
    get tupleSetRows(): TupleSetRows | undefined;
}
/** Defines the ArgumentDescription Class. Serialized as `x14:argumentDescription` */
export declare class ArgumentDescription extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** index. Serialized as `:index` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
}
/** Defines the ArgumentDescriptions Class. Serialized as `x14:argumentDescriptions` */
export declare class ArgumentDescriptions extends OxmlCompositeElement<ArgumentDescription> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the DefinedName Class. Serialized as `x14:definedName` */
export declare class DefinedName extends OxmlCompositeElement<ArgumentDescriptions> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns ArgumentDescriptions. */
    get argumentDescriptions(): ArgumentDescriptions | undefined;
}
/** Defines the SlicerCache Class. Serialized as `x14:slicerCache` */
export declare class SlicerCache extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the SlicerRef Class. Serialized as `x14:slicer` */
export declare class SlicerRef extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the Sparkline Class. Serialized as `x14:sparkline` */
export declare class Sparkline extends OxmlCompositeElement<XneFormula | XneReferenceSequence> {
    static _Q: string;
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
    /** Returns XneReferenceSequence. */
    get referenceSequence(): XneReferenceSequence | undefined;
}
/** Defines the Sparklines Class. Serialized as `x14:sparklines` */
export declare class Sparklines extends OxmlCompositeElement<Sparkline> {
    static _Q: string;
}
/** Defines the ColorType Class. */
export declare abstract class ColorType extends OxmlLeafElement {
    static _A: string[];
    /** Automatic. Serialized as `:auto` */
    get auto(): BooleanValue | undefined;
    set auto(v: BooleanValue | undefined);
    /** Index. Serialized as `:indexed` */
    get indexed(): UInt32Value | undefined;
    set indexed(v: UInt32Value | undefined);
    /** Alpha Red Green Blue Color Value. Serialized as `:rgb` */
    get rgb(): HexBinaryValue | undefined;
    set rgb(v: HexBinaryValue | undefined);
    /** Theme Color. Serialized as `:theme` */
    get theme(): UInt32Value | undefined;
    set theme(v: UInt32Value | undefined);
    /** Tint. Serialized as `:tint` */
    get tint(): DoubleValue | undefined;
    set tint(v: DoubleValue | undefined);
}
/** Defines the BarAxisColor Class. Serialized as `x14:axisColor` */
export declare class BarAxisColor extends ColorType {
    static _Q: string;
}
/** Defines the NegativeBorderColor Class. Serialized as `x14:negativeBorderColor` */
export declare class NegativeBorderColor extends ColorType {
    static _Q: string;
}
/** Defines the NegativeFillColor Class. Serialized as `x14:negativeFillColor` */
export declare class NegativeFillColor extends ColorType {
    static _Q: string;
}
/** Defines the BorderColor Class. Serialized as `x14:borderColor` */
export declare class BorderColor extends ColorType {
    static _Q: string;
}
/** Defines the FillColor Class. Serialized as `x14:fillColor` */
export declare class FillColor extends ColorType {
    static _Q: string;
}
/** Defines the Color Class. Serialized as `x14:color` */
export declare class Color extends ColorType {
    static _Q: string;
}
/** Defines the LowMarkerColor Class. Serialized as `x14:colorLow` */
export declare class LowMarkerColor extends ColorType {
    static _Q: string;
}
/** Defines the HighMarkerColor Class. Serialized as `x14:colorHigh` */
export declare class HighMarkerColor extends ColorType {
    static _Q: string;
}
/** Defines the LastMarkerColor Class. Serialized as `x14:colorLast` */
export declare class LastMarkerColor extends ColorType {
    static _Q: string;
}
/** Defines the FirstMarkerColor Class. Serialized as `x14:colorFirst` */
export declare class FirstMarkerColor extends ColorType {
    static _Q: string;
}
/** Defines the MarkersColor Class. Serialized as `x14:colorMarkers` */
export declare class MarkersColor extends ColorType {
    static _Q: string;
}
/** Defines the AxisColor Class. Serialized as `x14:colorAxis` */
export declare class AxisColor extends ColorType {
    static _Q: string;
}
/** Defines the NegativeColor Class. Serialized as `x14:colorNegative` */
export declare class NegativeColor extends ColorType {
    static _Q: string;
}
/** Defines the SeriesColor Class. Serialized as `x14:colorSeries` */
export declare class SeriesColor extends ColorType {
    static _Q: string;
}
/** Defines the SparklineGroup Class. Serialized as `x14:sparklineGroup` */
export declare class SparklineGroup extends OxmlCompositeElement<SeriesColor | NegativeColor | AxisColor | MarkersColor | FirstMarkerColor | LastMarkerColor | HighMarkerColor | LowMarkerColor | XneFormula | Sparklines> {
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
    /** Returns SeriesColor. */
    get seriesColor(): SeriesColor | undefined;
    /** Returns NegativeColor. */
    get negativeColor(): NegativeColor | undefined;
    /** Returns AxisColor. */
    get axisColor(): AxisColor | undefined;
    /** Returns MarkersColor. */
    get markersColor(): MarkersColor | undefined;
    /** Returns FirstMarkerColor. */
    get firstMarkerColor(): FirstMarkerColor | undefined;
    /** Returns LastMarkerColor. */
    get lastMarkerColor(): LastMarkerColor | undefined;
    /** Returns HighMarkerColor. */
    get highMarkerColor(): HighMarkerColor | undefined;
    /** Returns LowMarkerColor. */
    get lowMarkerColor(): LowMarkerColor | undefined;
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
    /** Returns Sparklines. */
    get sparklines(): Sparklines | undefined;
}
/** Defines the DataValidationFormulaType Class. */
export declare abstract class DataValidationFormulaType extends OxmlCompositeElement<XneFormula> {
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
}
/** Defines the DataValidationForumla2 Class. Serialized as `x14:formula2` */
export declare class DataValidationForumla2 extends DataValidationFormulaType {
    static _Q: string;
}
/** Defines the DataValidationForumla1 Class. Serialized as `x14:formula1` */
export declare class DataValidationForumla1 extends DataValidationFormulaType {
    static _Q: string;
}
/** Defines the DataValidation Class. Serialized as `x14:dataValidation` */
export declare class DataValidation extends OxmlCompositeElement<DataValidationForumla1 | DataValidationForumla2 | XneReferenceSequence> {
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
    /** Returns DataValidationForumla1. */
    get dataValidationForumla1(): DataValidationForumla1 | undefined;
    /** Returns DataValidationForumla2. */
    get dataValidationForumla2(): DataValidationForumla2 | undefined;
    /** Returns XneReferenceSequence. */
    get referenceSequence(): XneReferenceSequence | undefined;
}
/** Defines the ExtensionList Class. Serialized as `x14:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the ConditionalFormattingRule Class. Serialized as `x14:cfRule` */
export declare class ConditionalFormattingRule extends OxmlCompositeElement<XneFormula | ColorScale | DataBar | IconSet | DifferentialType | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): ConditionalFormatValues | undefined;
    set type(v: ConditionalFormatValues | undefined);
    /** priority. Serialized as `:priority` */
    get priority(): Int32Value | undefined;
    set priority(v: Int32Value | undefined);
    /** stopIfTrue. Serialized as `:stopIfTrue` */
    get stopIfTrue(): BooleanValue | undefined;
    set stopIfTrue(v: BooleanValue | undefined);
    /** aboveAverage. Serialized as `:aboveAverage` */
    get aboveAverage(): BooleanValue | undefined;
    set aboveAverage(v: BooleanValue | undefined);
    /** percent. Serialized as `:percent` */
    get percent(): BooleanValue | undefined;
    set percent(v: BooleanValue | undefined);
    /** bottom. Serialized as `:bottom` */
    get bottom(): BooleanValue | undefined;
    set bottom(v: BooleanValue | undefined);
    /** operator. Serialized as `:operator` */
    get operator(): ConditionalFormattingOperatorValues | undefined;
    set operator(v: ConditionalFormattingOperatorValues | undefined);
    /** text. Serialized as `:text` */
    get text(): StringValue | undefined;
    set text(v: StringValue | undefined);
    /** timePeriod. Serialized as `:timePeriod` */
    get timePeriod(): TimePeriodValues | undefined;
    set timePeriod(v: TimePeriodValues | undefined);
    /** rank. Serialized as `:rank` */
    get rank(): UInt32Value | undefined;
    set rank(v: UInt32Value | undefined);
    /** stdDev. Serialized as `:stdDev` */
    get standardDeviation(): Int32Value | undefined;
    set standardDeviation(v: Int32Value | undefined);
    /** equalAverage. Serialized as `:equalAverage` */
    get equalAverage(): BooleanValue | undefined;
    set equalAverage(v: BooleanValue | undefined);
    /** activePresent. Serialized as `:activePresent` */
    get activePresent(): BooleanValue | undefined;
    set activePresent(v: BooleanValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the ConditionalFormatting Class. Serialized as `x14:conditionalFormatting` */
export declare class ConditionalFormatting extends OxmlCompositeElement<ConditionalFormattingRule | XneReferenceSequence | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** pivot. Serialized as `:pivot` */
    get pivot(): BooleanValue | undefined;
    set pivot(v: BooleanValue | undefined);
}
/** Defines the SlicerCacheDefinition Class. Serialized as `x14:slicerCacheDefinition` */
export declare class SlicerCacheDefinition extends OxmlPartRootElement<SlicerCachePivotTables | SlicerCacheData | SlicerCacheDefinitionExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** sourceName. Serialized as `:sourceName` */
    get sourceName(): StringValue | undefined;
    set sourceName(v: StringValue | undefined);
    /** Returns SlicerCachePivotTables. */
    get slicerCachePivotTables(): SlicerCachePivotTables | undefined;
    /** Returns SlicerCacheData. */
    get slicerCacheData(): SlicerCacheData | undefined;
    /** Returns SlicerCacheDefinitionExtensionList. */
    get slicerCacheDefinitionExtensionList(): SlicerCacheDefinitionExtensionList | undefined;
}
/** Defines the Slicers Class. Serialized as `x14:slicers` */
export declare class Slicers extends OxmlPartRootElement<Slicer> {
    static _Q: string;
}
/** Defines the FormControlProperties Class. Serialized as `x14:formControlPr` */
export declare class FormControlProperties extends OxmlPartRootElement<ListItems | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** objectType. Serialized as `:objectType` */
    get objectType(): ObjectTypeValues | undefined;
    set objectType(v: ObjectTypeValues | undefined);
    /** checked. Serialized as `:checked` */
    get checked(): CheckedValues | undefined;
    set checked(v: CheckedValues | undefined);
    /** colored. Serialized as `:colored` */
    get colored(): BooleanValue | undefined;
    set colored(v: BooleanValue | undefined);
    /** dropLines. Serialized as `:dropLines` */
    get dropLines(): UInt32Value | undefined;
    set dropLines(v: UInt32Value | undefined);
    /** dropStyle. Serialized as `:dropStyle` */
    get dropStyle(): DropStyleValues | undefined;
    set dropStyle(v: DropStyleValues | undefined);
    /** dx. Serialized as `:dx` */
    get scrollBarWidth(): UInt32Value | undefined;
    set scrollBarWidth(v: UInt32Value | undefined);
    /** firstButton. Serialized as `:firstButton` */
    get firstButton(): BooleanValue | undefined;
    set firstButton(v: BooleanValue | undefined);
    /** fmlaGroup. Serialized as `:fmlaGroup` */
    get fmlaGroup(): StringValue | undefined;
    set fmlaGroup(v: StringValue | undefined);
    /** fmlaLink. Serialized as `:fmlaLink` */
    get fmlaLink(): StringValue | undefined;
    set fmlaLink(v: StringValue | undefined);
    /** fmlaRange. Serialized as `:fmlaRange` */
    get fmlaRange(): StringValue | undefined;
    set fmlaRange(v: StringValue | undefined);
    /** fmlaTxbx. Serialized as `:fmlaTxbx` */
    get fmlaTextbox(): StringValue | undefined;
    set fmlaTextbox(v: StringValue | undefined);
    /** horiz. Serialized as `:horiz` */
    get horizontal(): BooleanValue | undefined;
    set horizontal(v: BooleanValue | undefined);
    /** inc. Serialized as `:inc` */
    get incremental(): UInt32Value | undefined;
    set incremental(v: UInt32Value | undefined);
    /** justLastX. Serialized as `:justLastX` */
    get justLastX(): BooleanValue | undefined;
    set justLastX(v: BooleanValue | undefined);
    /** lockText. Serialized as `:lockText` */
    get lockText(): BooleanValue | undefined;
    set lockText(v: BooleanValue | undefined);
    /** max. Serialized as `:max` */
    get max(): UInt32Value | undefined;
    set max(v: UInt32Value | undefined);
    /** min. Serialized as `:min` */
    get min(): UInt32Value | undefined;
    set min(v: UInt32Value | undefined);
    /** multiSel. Serialized as `:multiSel` */
    get multipleSelection(): StringValue | undefined;
    set multipleSelection(v: StringValue | undefined);
    /** noThreeD. Serialized as `:noThreeD` */
    get noThreeD(): BooleanValue | undefined;
    set noThreeD(v: BooleanValue | undefined);
    /** noThreeD2. Serialized as `:noThreeD2` */
    get noThreeD2(): BooleanValue | undefined;
    set noThreeD2(v: BooleanValue | undefined);
    /** page. Serialized as `:page` */
    get page(): UInt32Value | undefined;
    set page(v: UInt32Value | undefined);
    /** sel. Serialized as `:sel` */
    get selected(): UInt32Value | undefined;
    set selected(v: UInt32Value | undefined);
    /** seltype. Serialized as `:seltype` */
    get selectionType(): SelectionTypeValues | undefined;
    set selectionType(v: SelectionTypeValues | undefined);
    /** textHAlign. Serialized as `:textHAlign` */
    get textHorizontalAlign(): TextHorizontalAlignmentValues | undefined;
    set textHorizontalAlign(v: TextHorizontalAlignmentValues | undefined);
    /** textVAlign. Serialized as `:textVAlign` */
    get textVerticalAlign(): TextVerticalAlignmentValues | undefined;
    set textVerticalAlign(v: TextVerticalAlignmentValues | undefined);
    /** val. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
    /** widthMin. Serialized as `:widthMin` */
    get minimumWidth(): UInt32Value | undefined;
    set minimumWidth(v: UInt32Value | undefined);
    /** editVal. Serialized as `:editVal` */
    get editVal(): EditValidationValues | undefined;
    set editVal(v: EditValidationValues | undefined);
    /** multiLine. Serialized as `:multiLine` */
    get multipleLines(): BooleanValue | undefined;
    set multipleLines(v: BooleanValue | undefined);
    /** verticalBar. Serialized as `:verticalBar` */
    get verticalBar(): BooleanValue | undefined;
    set verticalBar(v: BooleanValue | undefined);
    /** passwordEdit. Serialized as `:passwordEdit` */
    get passwordEdit(): BooleanValue | undefined;
    set passwordEdit(v: BooleanValue | undefined);
    /** Returns ListItems. */
    get listItems(): ListItems | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DatastoreItem Class. Serialized as `x14:datastoreItem` */
export declare class DatastoreItem extends OxmlPartRootElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SourceConnection Class. Serialized as `x14:sourceConnection` */
export declare class SourceConnection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the SortCondition Class. Serialized as `x14:sortCondition` */
export declare class SortCondition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** descending. Serialized as `:descending` */
    get descending(): BooleanValue | undefined;
    set descending(v: BooleanValue | undefined);
    /** sortBy. Serialized as `:sortBy` */
    get sortBy(): SortByValues | undefined;
    set sortBy(v: SortByValues | undefined);
    /** ref. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** customList. Serialized as `:customList` */
    get customList(): StringValue | undefined;
    set customList(v: StringValue | undefined);
    /** dxfId. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): IconSetTypeValues | undefined;
    set iconSet(v: IconSetTypeValues | undefined);
    /** iconId. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the CustomFilters Class. Serialized as `x14:customFilters` */
export declare class CustomFilters extends OxmlCompositeElement<CustomFilter> {
    static _Q: string;
    static _A: string[];
    /** and. Serialized as `:and` */
    get and(): BooleanValue | undefined;
    set and(v: BooleanValue | undefined);
}
/** Defines the Filter Class. Serialized as `x14:filter` */
export declare class Filter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the IconFilter Class. Serialized as `x14:iconFilter` */
export declare class IconFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): IconSetTypeValues | undefined;
    set iconSet(v: IconSetTypeValues | undefined);
    /** iconId. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the Id Class. Serialized as `x14:id` */
export declare class Id extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CacheField Class. Serialized as `x14:cacheField` */
export declare class CacheField extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** ignore. Serialized as `:ignore` */
    get ignore(): BooleanValue | undefined;
    set ignore(v: BooleanValue | undefined);
}
/** Defines the PivotHierarchy Class. Serialized as `x14:pivotHierarchy` */
export declare class PivotHierarchy extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** ignore. Serialized as `:ignore` */
    get ignore(): BooleanValue | undefined;
    set ignore(v: BooleanValue | undefined);
}
/** Defines the OleItem Class. Serialized as `x14:oleItem` */
export declare class OleItem extends OxmlCompositeElement<DdeValues> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** icon. Serialized as `:icon` */
    get icon(): BooleanValue | undefined;
    set icon(v: BooleanValue | undefined);
    /** advise. Serialized as `:advise` */
    get advise(): BooleanValue | undefined;
    set advise(v: BooleanValue | undefined);
    /** preferPic. Serialized as `:preferPic` */
    get preferPicture(): BooleanValue | undefined;
    set preferPicture(v: BooleanValue | undefined);
    /** Returns DdeValues. */
    get ddeValues(): DdeValues | undefined;
}
/** Defines the DifferentialFormats Class. Serialized as `x14:dxfs` */
export declare class DifferentialFormats extends OxmlCompositeElement<XDifferentialFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the SlicerStyles Class. Serialized as `x14:slicerStyles` */
export declare class SlicerStyles extends OxmlCompositeElement<SlicerStyle> {
    static _Q: string;
    static _A: string[];
    /** defaultSlicerStyle. Serialized as `:defaultSlicerStyle` */
    get defaultSlicerStyle(): StringValue | undefined;
    set defaultSlicerStyle(v: StringValue | undefined);
}
/** Defines the Table Class. Serialized as `x14:table` */
export declare class Table extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** altText. Serialized as `:altText` */
    get altText(): StringValue | undefined;
    set altText(v: StringValue | undefined);
    /** altTextSummary. Serialized as `:altTextSummary` */
    get altTextSummary(): StringValue | undefined;
    set altTextSummary(v: StringValue | undefined);
}
/** Defines the Connection Class. Serialized as `x14:connection` */
export declare class Connection extends OxmlCompositeElement<CalculatedMembers> {
    static _Q: string;
    static _A: string[];
    /** culture. Serialized as `:culture` */
    get culture(): StringValue | undefined;
    set culture(v: StringValue | undefined);
    /** embeddedDataId. Serialized as `:embeddedDataId` */
    get embeddedDataId(): StringValue | undefined;
    set embeddedDataId(v: StringValue | undefined);
    /** Returns CalculatedMembers. */
    get calculatedMembers(): CalculatedMembers | undefined;
}
/** Defines the PivotCacheDefinition Class. Serialized as `x14:pivotCacheDefinition` */
export declare class PivotCacheDefinition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** slicerData. Serialized as `:slicerData` */
    get slicerData(): BooleanValue | undefined;
    set slicerData(v: BooleanValue | undefined);
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    get pivotCacheId(): UInt32Value | undefined;
    set pivotCacheId(v: UInt32Value | undefined);
    /** supportSubqueryNonVisual. Serialized as `:supportSubqueryNonVisual` */
    get supportSubqueryNonVisual(): BooleanValue | undefined;
    set supportSubqueryNonVisual(v: BooleanValue | undefined);
    /** supportSubqueryCalcMem. Serialized as `:supportSubqueryCalcMem` */
    get supportSubqueryCalcMem(): BooleanValue | undefined;
    set supportSubqueryCalcMem(v: BooleanValue | undefined);
    /** supportAddCalcMems. Serialized as `:supportAddCalcMems` */
    get supportAddCalcMems(): BooleanValue | undefined;
    set supportAddCalcMems(v: BooleanValue | undefined);
}
/** Defines the PivotTableDefinition Class. Serialized as `x14:pivotTableDefinition` */
export declare class PivotTableDefinition extends OxmlCompositeElement<PivotEdits | PivotChanges | ConditionalFormats> {
    static _Q: string;
    static _A: string[];
    /** fillDownLabelsDefault. Serialized as `:fillDownLabelsDefault` */
    get fillDownLabelsDefault(): BooleanValue | undefined;
    set fillDownLabelsDefault(v: BooleanValue | undefined);
    /** visualTotalsForSets. Serialized as `:visualTotalsForSets` */
    get visualTotalsForSets(): BooleanValue | undefined;
    set visualTotalsForSets(v: BooleanValue | undefined);
    /** calculatedMembersInFilters. Serialized as `:calculatedMembersInFilters` */
    get calculatedMembersInFilters(): BooleanValue | undefined;
    set calculatedMembersInFilters(v: BooleanValue | undefined);
    /** altText. Serialized as `:altText` */
    get altText(): StringValue | undefined;
    set altText(v: StringValue | undefined);
    /** altTextSummary. Serialized as `:altTextSummary` */
    get altTextSummary(): StringValue | undefined;
    set altTextSummary(v: StringValue | undefined);
    /** enableEdit. Serialized as `:enableEdit` */
    get enableEdit(): BooleanValue | undefined;
    set enableEdit(v: BooleanValue | undefined);
    /** autoApply. Serialized as `:autoApply` */
    get autoApply(): BooleanValue | undefined;
    set autoApply(v: BooleanValue | undefined);
    /** allocationMethod. Serialized as `:allocationMethod` */
    get allocationMethod(): AllocationMethodValues | undefined;
    set allocationMethod(v: AllocationMethodValues | undefined);
    /** weightExpression. Serialized as `:weightExpression` */
    get weightExpression(): StringValue | undefined;
    set weightExpression(v: StringValue | undefined);
    /** hideValuesRow. Serialized as `:hideValuesRow` */
    get hideValuesRow(): BooleanValue | undefined;
    set hideValuesRow(v: BooleanValue | undefined);
    /** Returns PivotEdits. */
    get pivotEdits(): PivotEdits | undefined;
    /** Returns PivotChanges. */
    get pivotChanges(): PivotChanges | undefined;
    /** Returns ConditionalFormats. */
    get conditionalFormats(): ConditionalFormats | undefined;
}
/** Defines the PivotField Class. Serialized as `x14:pivotField` */
export declare class PivotField extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** fillDownLabels. Serialized as `:fillDownLabels` */
    get fillDownLabels(): BooleanValue | undefined;
    set fillDownLabels(v: BooleanValue | undefined);
    /** ignore. Serialized as `:ignore` */
    get ignore(): BooleanValue | undefined;
    set ignore(v: BooleanValue | undefined);
}
/** Defines the DataField Class. Serialized as `x14:dataField` */
export declare class DataField extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** pivotShowAs. Serialized as `:pivotShowAs` */
    get pivotShowAs(): PivotShowAsValues | undefined;
    set pivotShowAs(v: PivotShowAsValues | undefined);
    /** sourceField. Serialized as `:sourceField` */
    get sourceField(): UInt32Value | undefined;
    set sourceField(v: UInt32Value | undefined);
    /** uniqueName. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
}
/** Defines the CacheHierarchy Class. Serialized as `x14:cacheHierarchy` */
export declare class CacheHierarchy extends OxmlCompositeElement<SetLevels> {
    static _Q: string;
    static _A: string[];
    /** flattenHierarchies. Serialized as `:flattenHierarchies` */
    get flattenHierarchies(): BooleanValue | undefined;
    set flattenHierarchies(v: BooleanValue | undefined);
    /** measuresSet. Serialized as `:measuresSet` */
    get measuresSet(): BooleanValue | undefined;
    set measuresSet(v: BooleanValue | undefined);
    /** hierarchizeDistinct. Serialized as `:hierarchizeDistinct` */
    get hierarchizeDistinct(): BooleanValue | undefined;
    set hierarchizeDistinct(v: BooleanValue | undefined);
    /** ignore. Serialized as `:ignore` */
    get ignore(): BooleanValue | undefined;
    set ignore(v: BooleanValue | undefined);
    /** Returns SetLevels. */
    get setLevels(): SetLevels | undefined;
}
/** Defines the CalculatedMember Class. Serialized as `x14:calculatedMember` */
export declare class CalculatedMember extends OxmlCompositeElement<TupleSet> {
    static _Q: string;
    static _A: string[];
    /** displayFolder. Serialized as `:displayFolder` */
    get displayFolder(): StringValue | undefined;
    set displayFolder(v: StringValue | undefined);
    /** flattenHierarchies. Serialized as `:flattenHierarchies` */
    get flattenHierarchies(): BooleanValue | undefined;
    set flattenHierarchies(v: BooleanValue | undefined);
    /** dynamicSet. Serialized as `:dynamicSet` */
    get dynamicSet(): BooleanValue | undefined;
    set dynamicSet(v: BooleanValue | undefined);
    /** hierarchizeDistinct. Serialized as `:hierarchizeDistinct` */
    get hierarchizeDistinct(): BooleanValue | undefined;
    set hierarchizeDistinct(v: BooleanValue | undefined);
    /** mdxLong. Serialized as `:mdxLong` */
    get mdxLong(): StringValue | undefined;
    set mdxLong(v: StringValue | undefined);
    /** Returns TupleSet. */
    get tupleSet(): TupleSet | undefined;
}
/** Defines the WorkbookProperties Class. Serialized as `x14:workbookPr` */
export declare class WorkbookProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** defaultImageDpi. Serialized as `:defaultImageDpi` */
    get defaultImageDpi(): UInt32Value | undefined;
    set defaultImageDpi(v: UInt32Value | undefined);
    /** discardImageEditData. Serialized as `:discardImageEditData` */
    get discardImageEditData(): BooleanValue | undefined;
    set discardImageEditData(v: BooleanValue | undefined);
    /** accuracyVersion. Serialized as `:accuracyVersion` */
    get accuracyVersion(): UInt32Value | undefined;
    set accuracyVersion(v: UInt32Value | undefined);
}
/** Defines the SlicerCaches Class. Serialized as `x14:slicerCaches` */
export declare class SlicerCaches extends OxmlCompositeElement<SlicerCache> {
    static _Q: string;
}
/** Defines the PivotCaches Class. Serialized as `x14:pivotCaches` */
export declare class PivotCaches extends OxmlCompositeElement<XPivotCache> {
    static _Q: string;
}
/** Defines the DefinedNames Class. Serialized as `x14:definedNames` */
export declare class DefinedNames extends OxmlCompositeElement<DefinedName> {
    static _Q: string;
}
/** Defines the IgnoredErrors Class. Serialized as `x14:ignoredErrors` */
export declare class IgnoredErrors extends OxmlCompositeElement<IgnoredError | ExtensionList> {
    static _Q: string;
}
/** Defines the ProtectedRanges Class. Serialized as `x14:protectedRanges` */
export declare class ProtectedRanges extends OxmlCompositeElement<ProtectedRange> {
    static _Q: string;
}
/** Defines the SlicerList Class. Serialized as `x14:slicerList` */
export declare class SlicerList extends OxmlCompositeElement<SlicerRef> {
    static _Q: string;
}
/** Defines the SparklineGroups Class. Serialized as `x14:sparklineGroups` */
export declare class SparklineGroups extends OxmlCompositeElement<SparklineGroup> {
    static _Q: string;
}
/** Defines the DataValidations Class. Serialized as `x14:dataValidations` */
export declare class DataValidations extends OxmlCompositeElement<DataValidation> {
    static _Q: string;
    static _A: string[];
    /** disablePrompts. Serialized as `:disablePrompts` */
    get disablePrompts(): BooleanValue | undefined;
    set disablePrompts(v: BooleanValue | undefined);
    /** xWindow. Serialized as `:xWindow` */
    get xWindow(): UInt32Value | undefined;
    set xWindow(v: UInt32Value | undefined);
    /** yWindow. Serialized as `:yWindow` */
    get yWindow(): UInt32Value | undefined;
    set yWindow(v: UInt32Value | undefined);
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ConditionalFormattings Class. Serialized as `x14:conditionalFormattings` */
export declare class ConditionalFormattings extends OxmlCompositeElement<ConditionalFormatting> {
    static _Q: string;
}
export declare function initOffice2010ExcelNamespace(): {
    prefix: string;
    xmlns: string;
};
