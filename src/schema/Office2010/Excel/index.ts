import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { Base64BinaryValue } from '../../../framework/types/Base64BinaryValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { FilterOperatorValues, FilterOperatorValuesArray } from '../../Spreadsheet';
import { ScopeValues, ScopeValuesArray } from '../../Spreadsheet';
import { RuleValues, RuleValuesArray } from '../../Spreadsheet';
import { PivotAreaValues, PivotAreaValuesArray } from '../../Spreadsheet';
import { PivotTableAxisValues, PivotTableAxisValuesArray } from '../../Spreadsheet';
import { DataValidationValues, DataValidationValuesArray } from '../../Spreadsheet';
import { DataValidationErrorStyleValues, DataValidationErrorStyleValuesArray } from '../../Spreadsheet';
import { DataValidationImeModeValues, DataValidationImeModeValuesArray } from '../../Spreadsheet';
import { DataValidationOperatorValues, DataValidationOperatorValuesArray } from '../../Spreadsheet';
import { ConditionalFormatValues, ConditionalFormatValuesArray } from '../../Spreadsheet';
import { ConditionalFormattingOperatorValues, ConditionalFormattingOperatorValuesArray } from '../../Spreadsheet';
import { TimePeriodValues, TimePeriodValuesArray } from '../../Spreadsheet';
import { SortByValues, SortByValuesArray } from '../../Spreadsheet';import { SlicerCacheDefinitionExtension as XSlicerCacheDefinitionExtension } from '../../Spreadsheet';
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


export enum DisplayBlanksAsValues {
    /** undefined. Serialized value: `span` */
    Span = 'span',
    /** undefined. Serialized value: `gap` */
    Gap = 'gap',
    /** undefined. Serialized value: `zero` */
    Zero = 'zero',
}

export const DisplayBlanksAsValuesArray = [
    DisplayBlanksAsValues.Span,
    DisplayBlanksAsValues.Gap,
    DisplayBlanksAsValues.Zero,
] as const;

export enum SparklineAxisMinMaxValues {
    /** undefined. Serialized value: `individual` */
    Individual = 'individual',
    /** undefined. Serialized value: `group` */
    Group = 'group',
    /** undefined. Serialized value: `custom` */
    Custom = 'custom',
}

export const SparklineAxisMinMaxValuesArray = [
    SparklineAxisMinMaxValues.Individual,
    SparklineAxisMinMaxValues.Group,
    SparklineAxisMinMaxValues.Custom,
] as const;

export enum SparklineTypeValues {
    /** undefined. Serialized value: `line` */
    Line = 'line',
    /** undefined. Serialized value: `column` */
    Column = 'column',
    /** undefined. Serialized value: `stacked` */
    Stacked = 'stacked',
}

export const SparklineTypeValuesArray = [
    SparklineTypeValues.Line,
    SparklineTypeValues.Column,
    SparklineTypeValues.Stacked,
] as const;

export enum PivotShowAsValues {
    /** undefined. Serialized value: `percentOfParent` */
    PercentOfParent = 'percentOfParent',
    /** undefined. Serialized value: `percentOfParentRow` */
    PercentOfParentRow = 'percentOfParentRow',
    /** undefined. Serialized value: `percentOfParentCol` */
    PercentOfParentColumn = 'percentOfParentCol',
    /** undefined. Serialized value: `percentOfRunningTotal` */
    PercentOfRunningTotal = 'percentOfRunningTotal',
    /** undefined. Serialized value: `rankAscending` */
    RankAscending = 'rankAscending',
    /** undefined. Serialized value: `rankDescending` */
    RankDescending = 'rankDescending',
}

export const PivotShowAsValuesArray = [
    PivotShowAsValues.PercentOfParent,
    PivotShowAsValues.PercentOfParentRow,
    PivotShowAsValues.PercentOfParentColumn,
    PivotShowAsValues.PercentOfRunningTotal,
    PivotShowAsValues.RankAscending,
    PivotShowAsValues.RankDescending,
] as const;

export enum DataBarDirectionValues {
    /** undefined. Serialized value: `context` */
    Context = 'context',
    /** undefined. Serialized value: `leftToRight` */
    LeftToRight = 'leftToRight',
    /** undefined. Serialized value: `rightToLeft` */
    RightToLeft = 'rightToLeft',
}

export const DataBarDirectionValuesArray = [
    DataBarDirectionValues.Context,
    DataBarDirectionValues.LeftToRight,
    DataBarDirectionValues.RightToLeft,
] as const;

export enum DataBarAxisPositionValues {
    /** undefined. Serialized value: `automatic` */
    Automatic = 'automatic',
    /** undefined. Serialized value: `middle` */
    Middle = 'middle',
    /** undefined. Serialized value: `none` */
    None = 'none',
}

export const DataBarAxisPositionValuesArray = [
    DataBarAxisPositionValues.Automatic,
    DataBarAxisPositionValues.Middle,
    DataBarAxisPositionValues.None,
] as const;

export enum ConditionalFormattingValueObjectTypeValues {
    /** undefined. Serialized value: `num` */
    Numeric = 'num',
    /** undefined. Serialized value: `percent` */
    Percent = 'percent',
    /** undefined. Serialized value: `max` */
    Max = 'max',
    /** undefined. Serialized value: `min` */
    Min = 'min',
    /** undefined. Serialized value: `formula` */
    Formula = 'formula',
    /** undefined. Serialized value: `percentile` */
    Percentile = 'percentile',
    /** undefined. Serialized value: `autoMin` */
    AutoMin = 'autoMin',
    /** undefined. Serialized value: `autoMax` */
    AutoMax = 'autoMax',
}

export const ConditionalFormattingValueObjectTypeValuesArray = [
    ConditionalFormattingValueObjectTypeValues.Numeric,
    ConditionalFormattingValueObjectTypeValues.Percent,
    ConditionalFormattingValueObjectTypeValues.Max,
    ConditionalFormattingValueObjectTypeValues.Min,
    ConditionalFormattingValueObjectTypeValues.Formula,
    ConditionalFormattingValueObjectTypeValues.Percentile,
    ConditionalFormattingValueObjectTypeValues.AutoMin,
    ConditionalFormattingValueObjectTypeValues.AutoMax,
] as const;

export enum IconSetTypeValues {
    /** undefined. Serialized value: `3Arrows` */
    ThreeArrows = '3Arrows',
    /** undefined. Serialized value: `3ArrowsGray` */
    ThreeArrowsGray = '3ArrowsGray',
    /** undefined. Serialized value: `3Flags` */
    ThreeFlags = '3Flags',
    /** undefined. Serialized value: `3TrafficLights1` */
    ThreeTrafficLights1 = '3TrafficLights1',
    /** undefined. Serialized value: `3TrafficLights2` */
    ThreeTrafficLights2 = '3TrafficLights2',
    /** undefined. Serialized value: `3Signs` */
    ThreeSigns = '3Signs',
    /** undefined. Serialized value: `3Symbols` */
    ThreeSymbols = '3Symbols',
    /** undefined. Serialized value: `3Symbols2` */
    ThreeSymbols2 = '3Symbols2',
    /** undefined. Serialized value: `4Arrows` */
    FourArrows = '4Arrows',
    /** undefined. Serialized value: `4ArrowsGray` */
    FourArrowsGray = '4ArrowsGray',
    /** undefined. Serialized value: `4RedToBlack` */
    FourRedToBlack = '4RedToBlack',
    /** undefined. Serialized value: `4Rating` */
    FourRating = '4Rating',
    /** undefined. Serialized value: `4TrafficLights` */
    FourTrafficLights = '4TrafficLights',
    /** undefined. Serialized value: `5Arrows` */
    FiveArrows = '5Arrows',
    /** undefined. Serialized value: `5ArrowsGray` */
    FiveArrowsGray = '5ArrowsGray',
    /** undefined. Serialized value: `5Rating` */
    FiveRating = '5Rating',
    /** undefined. Serialized value: `5Quarters` */
    FiveQuarters = '5Quarters',
    /** undefined. Serialized value: `3Stars` */
    ThreeStars = '3Stars',
    /** undefined. Serialized value: `3Triangles` */
    ThreeTriangles = '3Triangles',
    /** undefined. Serialized value: `5Boxes` */
    FiveBoxes = '5Boxes',
    /** undefined. Serialized value: `NoIcons` */
    NoIcons = 'NoIcons',
}

export const IconSetTypeValuesArray = [
    IconSetTypeValues.ThreeArrows,
    IconSetTypeValues.ThreeArrowsGray,
    IconSetTypeValues.ThreeFlags,
    IconSetTypeValues.ThreeTrafficLights1,
    IconSetTypeValues.ThreeTrafficLights2,
    IconSetTypeValues.ThreeSigns,
    IconSetTypeValues.ThreeSymbols,
    IconSetTypeValues.ThreeSymbols2,
    IconSetTypeValues.FourArrows,
    IconSetTypeValues.FourArrowsGray,
    IconSetTypeValues.FourRedToBlack,
    IconSetTypeValues.FourRating,
    IconSetTypeValues.FourTrafficLights,
    IconSetTypeValues.FiveArrows,
    IconSetTypeValues.FiveArrowsGray,
    IconSetTypeValues.FiveRating,
    IconSetTypeValues.FiveQuarters,
    IconSetTypeValues.ThreeStars,
    IconSetTypeValues.ThreeTriangles,
    IconSetTypeValues.FiveBoxes,
    IconSetTypeValues.NoIcons,
] as const;

export enum PivotEditValueTypeValues {
    /** undefined. Serialized value: `number` */
    Number = 'number',
    /** undefined. Serialized value: `dateTime` */
    DateTime = 'dateTime',
    /** undefined. Serialized value: `string` */
    String = 'string',
    /** undefined. Serialized value: `boolean` */
    Boolean = 'boolean',
    /** undefined. Serialized value: `error` */
    Error = 'error',
}

export const PivotEditValueTypeValuesArray = [
    PivotEditValueTypeValues.Number,
    PivotEditValueTypeValues.DateTime,
    PivotEditValueTypeValues.String,
    PivotEditValueTypeValues.Boolean,
    PivotEditValueTypeValues.Error,
] as const;

export enum AllocationMethodValues {
    /** undefined. Serialized value: `equalAllocation` */
    EqualAllocation = 'equalAllocation',
    /** undefined. Serialized value: `equalIncrement` */
    EqualIncrement = 'equalIncrement',
    /** undefined. Serialized value: `weightedAllocation` */
    WeightedAllocation = 'weightedAllocation',
    /** undefined. Serialized value: `weightedIncrement` */
    WeightedIncrement = 'weightedIncrement',
}

export const AllocationMethodValuesArray = [
    AllocationMethodValues.EqualAllocation,
    AllocationMethodValues.EqualIncrement,
    AllocationMethodValues.WeightedAllocation,
    AllocationMethodValues.WeightedIncrement,
] as const;

export enum SlicerStyleTypeValues {
    /** undefined. Serialized value: `unselectedItemWithData` */
    UnselectedItemWithData = 'unselectedItemWithData',
    /** undefined. Serialized value: `selectedItemWithData` */
    SelectedItemWithData = 'selectedItemWithData',
    /** undefined. Serialized value: `unselectedItemWithNoData` */
    UnselectedItemWithNoData = 'unselectedItemWithNoData',
    /** undefined. Serialized value: `selectedItemWithNoData` */
    SelectedItemWithNoData = 'selectedItemWithNoData',
    /** undefined. Serialized value: `hoveredUnselectedItemWithData` */
    HoveredUnselectedItemWithData = 'hoveredUnselectedItemWithData',
    /** undefined. Serialized value: `hoveredSelectedItemWithData` */
    HoveredSelectedItemWithData = 'hoveredSelectedItemWithData',
    /** undefined. Serialized value: `hoveredUnselectedItemWithNoData` */
    HoveredUnselectedItemWithNoData = 'hoveredUnselectedItemWithNoData',
    /** undefined. Serialized value: `hoveredSelectedItemWithNoData` */
    HoveredSelectedItemWithNoData = 'hoveredSelectedItemWithNoData',
}

export const SlicerStyleTypeValuesArray = [
    SlicerStyleTypeValues.UnselectedItemWithData,
    SlicerStyleTypeValues.SelectedItemWithData,
    SlicerStyleTypeValues.UnselectedItemWithNoData,
    SlicerStyleTypeValues.SelectedItemWithNoData,
    SlicerStyleTypeValues.HoveredUnselectedItemWithData,
    SlicerStyleTypeValues.HoveredSelectedItemWithData,
    SlicerStyleTypeValues.HoveredUnselectedItemWithNoData,
    SlicerStyleTypeValues.HoveredSelectedItemWithNoData,
] as const;

export enum CheckedValues {
    /** undefined. Serialized value: `Unchecked` */
    Unchecked = 'Unchecked',
    /** undefined. Serialized value: `Checked` */
    Checked = 'Checked',
    /** undefined. Serialized value: `Mixed` */
    Mixed = 'Mixed',
}

export const CheckedValuesArray = [
    CheckedValues.Unchecked,
    CheckedValues.Checked,
    CheckedValues.Mixed,
] as const;

export enum DropStyleValues {
    /** undefined. Serialized value: `combo` */
    Combo = 'combo',
    /** undefined. Serialized value: `comboedit` */
    ComboEdit = 'comboedit',
    /** undefined. Serialized value: `simple` */
    Simple = 'simple',
}

export const DropStyleValuesArray = [
    DropStyleValues.Combo,
    DropStyleValues.ComboEdit,
    DropStyleValues.Simple,
] as const;

export enum SelectionTypeValues {
    /** undefined. Serialized value: `single` */
    Single = 'single',
    /** undefined. Serialized value: `multi` */
    Multiple = 'multi',
    /** undefined. Serialized value: `extended` */
    Extended = 'extended',
}

export const SelectionTypeValuesArray = [
    SelectionTypeValues.Single,
    SelectionTypeValues.Multiple,
    SelectionTypeValues.Extended,
] as const;

export enum TextHorizontalAlignmentValues {
    /** undefined. Serialized value: `left` */
    Left = 'left',
    /** undefined. Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `right` */
    Right = 'right',
    /** undefined. Serialized value: `justify` */
    Justify = 'justify',
    /** undefined. Serialized value: `distributed` */
    Distributed = 'distributed',
}

export const TextHorizontalAlignmentValuesArray = [
    TextHorizontalAlignmentValues.Left,
    TextHorizontalAlignmentValues.Center,
    TextHorizontalAlignmentValues.Right,
    TextHorizontalAlignmentValues.Justify,
    TextHorizontalAlignmentValues.Distributed,
] as const;

export enum TextVerticalAlignmentValues {
    /** undefined. Serialized value: `top` */
    Top = 'top',
    /** undefined. Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** undefined. Serialized value: `justify` */
    Justify = 'justify',
    /** undefined. Serialized value: `distributed` */
    Distributed = 'distributed',
}

export const TextVerticalAlignmentValuesArray = [
    TextVerticalAlignmentValues.Top,
    TextVerticalAlignmentValues.Center,
    TextVerticalAlignmentValues.Bottom,
    TextVerticalAlignmentValues.Justify,
    TextVerticalAlignmentValues.Distributed,
] as const;

export enum EditValidationValues {
    /** undefined. Serialized value: `text` */
    Text = 'text',
    /** undefined. Serialized value: `integer` */
    Integer = 'integer',
    /** undefined. Serialized value: `number` */
    Number = 'number',
    /** undefined. Serialized value: `reference` */
    Reference = 'reference',
    /** undefined. Serialized value: `formula` */
    Formula = 'formula',
}

export const EditValidationValuesArray = [
    EditValidationValues.Text,
    EditValidationValues.Integer,
    EditValidationValues.Number,
    EditValidationValues.Reference,
    EditValidationValues.Formula,
] as const;

export enum OlapSlicerCacheSortOrderValues {
    /** undefined. Serialized value: `natural` */
    Natural = 'natural',
    /** undefined. Serialized value: `ascending` */
    Ascending = 'ascending',
    /** undefined. Serialized value: `descending` */
    Descending = 'descending',
}

export const OlapSlicerCacheSortOrderValuesArray = [
    OlapSlicerCacheSortOrderValues.Natural,
    OlapSlicerCacheSortOrderValues.Ascending,
    OlapSlicerCacheSortOrderValues.Descending,
] as const;

export enum TabularSlicerCacheSortOrderValues {
    /** undefined. Serialized value: `ascending` */
    Ascending = 'ascending',
    /** undefined. Serialized value: `descending` */
    Descending = 'descending',
}

export const TabularSlicerCacheSortOrderValuesArray = [
    TabularSlicerCacheSortOrderValues.Ascending,
    TabularSlicerCacheSortOrderValues.Descending,
] as const;

export enum SlicerCacheCrossFilterValues {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `showItemsWithDataAtTop` */
    ShowItemsWithDataAtTop = 'showItemsWithDataAtTop',
    /** undefined. Serialized value: `showItemsWithNoData` */
    ShowItemsWithNoData = 'showItemsWithNoData',
}

export const SlicerCacheCrossFilterValuesArray = [
    SlicerCacheCrossFilterValues.None,
    SlicerCacheCrossFilterValues.ShowItemsWithDataAtTop,
    SlicerCacheCrossFilterValues.ShowItemsWithNoData,
] as const;

export enum ObjectTypeValues {
    /** undefined. Serialized value: `Button` */
    Button = 'Button',
    /** undefined. Serialized value: `CheckBox` */
    CheckBox = 'CheckBox',
    /** undefined. Serialized value: `Drop` */
    Drop = 'Drop',
    /** undefined. Serialized value: `GBox` */
    GroupBox = 'GBox',
    /** undefined. Serialized value: `Label` */
    Label = 'Label',
    /** undefined. Serialized value: `List` */
    List = 'List',
    /** undefined. Serialized value: `Radio` */
    Radio = 'Radio',
    /** undefined. Serialized value: `Scroll` */
    Scroll = 'Scroll',
    /** undefined. Serialized value: `Spin` */
    Spin = 'Spin',
    /** undefined. Serialized value: `EditBox` */
    EditBox = 'EditBox',
    /** undefined. Serialized value: `Dialog` */
    Dialog = 'Dialog',
}

export const ObjectTypeValuesArray = [
    ObjectTypeValues.Button,
    ObjectTypeValues.CheckBox,
    ObjectTypeValues.Drop,
    ObjectTypeValues.GroupBox,
    ObjectTypeValues.Label,
    ObjectTypeValues.List,
    ObjectTypeValues.Radio,
    ObjectTypeValues.Scroll,
    ObjectTypeValues.Spin,
    ObjectTypeValues.EditBox,
    ObjectTypeValues.Dialog,
] as const;

/** Defines the SlicerCacheDefinitionExtensionList Class. Serialized as `x14:extLst` */
export class SlicerCacheDefinitionExtensionList extends OxmlCompositeElement<XSlicerCacheDefinitionExtension> {

    public static override _Q = 'x14:extLst';

}
/** Defines the SlicerCacheData Class. Serialized as `x14:data` */
export class SlicerCacheData extends OxmlCompositeElement<OlapSlicerCache | TabularSlicerCache> {

    public static override _Q = 'x14:data';
    /** Returns OlapSlicerCache. */
    public get olapSlicerCache(): OlapSlicerCache | undefined { return this._f(OlapSlicerCache); }
    /** Returns TabularSlicerCache. */
    public get tabularSlicerCache(): TabularSlicerCache | undefined { return this._f(TabularSlicerCache); }

}
/** Defines the SlicerCachePivotTables Class. Serialized as `x14:pivotTables` */
export class SlicerCachePivotTables extends OxmlCompositeElement<SlicerCachePivotTable> {

    public static override _Q = 'x14:pivotTables';

}
/** Defines the TabularSlicerCacheItem Class. Serialized as `x14:i` */
export class TabularSlicerCacheItem extends OxmlLeafElement {

    public static override _Q = 'x14:i';
    public static override _A = [':x',':s',':nd',];
    /** x. Serialized as `:x` */
    public get atom(): UInt32Value | undefined { return this._g(':x'); }
    public set atom(v: UInt32Value | undefined) { this._s(':x', v); }
    /** s. Serialized as `:s` */
    public get isSelected(): BooleanValue | undefined { return this._g(':s'); }
    public set isSelected(v: BooleanValue | undefined) { this._s(':s', v); }
    /** nd. Serialized as `:nd` */
    public get nonDisplay(): BooleanValue | undefined { return this._g(':nd'); }
    public set nonDisplay(v: BooleanValue | undefined) { this._s(':nd', v); }

}
/** Defines the TabularSlicerCacheItems Class. Serialized as `x14:items` */
export class TabularSlicerCacheItems extends OxmlCompositeElement<TabularSlicerCacheItem> {

    public static override _Q = 'x14:items';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the OlapSlicerCacheSelection Class. Serialized as `x14:selection` */
export class OlapSlicerCacheSelection extends OxmlCompositeElement<OlapSlicerCacheItemParent> {

    public static override _Q = 'x14:selection';
    public static override _A = [':n',];
    /** n. Serialized as `:n` */
    public get name(): StringValue | undefined { return this._g(':n'); }
    public set name(v: StringValue | undefined) { this._s(':n', v); }

}
/** Defines the OlapSlicerCacheSelections Class. Serialized as `x14:selections` */
export class OlapSlicerCacheSelections extends OxmlCompositeElement<OlapSlicerCacheSelection> {

    public static override _Q = 'x14:selections';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the OlapSlicerCacheLevelsData Class. Serialized as `x14:levels` */
export class OlapSlicerCacheLevelsData extends OxmlCompositeElement<OlapSlicerCacheLevelData> {

    public static override _Q = 'x14:levels';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the OlapSlicerCacheLevelData Class. Serialized as `x14:level` */
export class OlapSlicerCacheLevelData extends OxmlCompositeElement<OlapSlicerCacheRanges> {

    public static override _Q = 'x14:level';
    public static override _A = [':uniqueName',':sourceCaption',':count',':sortOrder',':crossFilter',];
    /** uniqueName. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** sourceCaption. Serialized as `:sourceCaption` */
    public get sourceCaption(): StringValue | undefined { return this._g(':sourceCaption'); }
    public set sourceCaption(v: StringValue | undefined) { this._s(':sourceCaption', v); }
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** sortOrder. Serialized as `:sortOrder` */
    public get sortOrder(): OlapSlicerCacheSortOrderValues | undefined { return this._g(':sortOrder'); }
    public set sortOrder(v: OlapSlicerCacheSortOrderValues | undefined) { this._s(':sortOrder', v); }
    /** crossFilter. Serialized as `:crossFilter` */
    public get crossFilter(): SlicerCacheCrossFilterValues | undefined { return this._g(':crossFilter'); }
    public set crossFilter(v: SlicerCacheCrossFilterValues | undefined) { this._s(':crossFilter', v); }
    /** Returns OlapSlicerCacheRanges. */
    public get olapSlicerCacheRanges(): OlapSlicerCacheRanges | undefined { return this._f(OlapSlicerCacheRanges); }

}
/** Defines the OlapSlicerCacheRanges Class. Serialized as `x14:ranges` */
export class OlapSlicerCacheRanges extends OxmlCompositeElement<OlapSlicerCacheRange> {

    public static override _Q = 'x14:ranges';

}
/** Defines the OlapSlicerCacheRange Class. Serialized as `x14:range` */
export class OlapSlicerCacheRange extends OxmlCompositeElement<OlapSlicerCacheItem> {

    public static override _Q = 'x14:range';
    public static override _A = [':startItem',];
    /** startItem. Serialized as `:startItem` */
    public get startItem(): UInt32Value | undefined { return this._g(':startItem'); }
    public set startItem(v: UInt32Value | undefined) { this._s(':startItem', v); }

}
/** Defines the OlapSlicerCacheItem Class. Serialized as `x14:i` */
export class OlapSlicerCacheItem extends OxmlCompositeElement<OlapSlicerCacheItemParent> {

    public static override _Q = 'x14:i';
    public static override _A = [':n',':c',':nd',];
    /** n. Serialized as `:n` */
    public get name(): StringValue | undefined { return this._g(':n'); }
    public set name(v: StringValue | undefined) { this._s(':n', v); }
    /** c. Serialized as `:c` */
    public get displayName(): StringValue | undefined { return this._g(':c'); }
    public set displayName(v: StringValue | undefined) { this._s(':c', v); }
    /** nd. Serialized as `:nd` */
    public get nonDisplay(): BooleanValue | undefined { return this._g(':nd'); }
    public set nonDisplay(v: BooleanValue | undefined) { this._s(':nd', v); }

}
/** Defines the OlapSlicerCacheItemParent Class. Serialized as `x14:p` */
export class OlapSlicerCacheItemParent extends OxmlLeafElement {

    public static override _Q = 'x14:p';
    public static override _A = [':n',];
    /** n. Serialized as `:n` */
    public get name(): StringValue | undefined { return this._g(':n'); }
    public set name(v: StringValue | undefined) { this._s(':n', v); }

}
/** Defines the SlicerCachePivotTable Class. Serialized as `x14:pivotTable` */
export class SlicerCachePivotTable extends OxmlLeafElement {

    public static override _Q = 'x14:pivotTable';
    public static override _A = [':tabId',':name',];
    /** tabId. Serialized as `:tabId` */
    public get tabId(): UInt32Value | undefined { return this._g(':tabId'); }
    public set tabId(v: UInt32Value | undefined) { this._s(':tabId', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the TabularSlicerCache Class. Serialized as `x14:tabular` */
export class TabularSlicerCache extends OxmlCompositeElement<TabularSlicerCacheItems | ExtensionList> {

    public static override _Q = 'x14:tabular';
    public static override _A = [':pivotCacheId',':sortOrder',':customListSort',':showMissing',':crossFilter',];
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    public get pivotCacheId(): UInt32Value | undefined { return this._g(':pivotCacheId'); }
    public set pivotCacheId(v: UInt32Value | undefined) { this._s(':pivotCacheId', v); }
    /** sortOrder. Serialized as `:sortOrder` */
    public get sortOrder(): TabularSlicerCacheSortOrderValues | undefined { return this._g(':sortOrder'); }
    public set sortOrder(v: TabularSlicerCacheSortOrderValues | undefined) { this._s(':sortOrder', v); }
    /** customListSort. Serialized as `:customListSort` */
    public get customListSort(): BooleanValue | undefined { return this._g(':customListSort'); }
    public set customListSort(v: BooleanValue | undefined) { this._s(':customListSort', v); }
    /** showMissing. Serialized as `:showMissing` */
    public get showMissing(): BooleanValue | undefined { return this._g(':showMissing'); }
    public set showMissing(v: BooleanValue | undefined) { this._s(':showMissing', v); }
    /** crossFilter. Serialized as `:crossFilter` */
    public get crossFilter(): SlicerCacheCrossFilterValues | undefined { return this._g(':crossFilter'); }
    public set crossFilter(v: SlicerCacheCrossFilterValues | undefined) { this._s(':crossFilter', v); }
    /** Returns TabularSlicerCacheItems. */
    public get tabularSlicerCacheItems(): TabularSlicerCacheItems | undefined { return this._f(TabularSlicerCacheItems); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the OlapSlicerCache Class. Serialized as `x14:olap` */
export class OlapSlicerCache extends OxmlCompositeElement<OlapSlicerCacheLevelsData | OlapSlicerCacheSelections | ExtensionList> {

    public static override _Q = 'x14:olap';
    public static override _A = [':pivotCacheId',];
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    public get pivotCacheId(): UInt32Value | undefined { return this._g(':pivotCacheId'); }
    public set pivotCacheId(v: UInt32Value | undefined) { this._s(':pivotCacheId', v); }
    /** Returns OlapSlicerCacheLevelsData. */
    public get olapSlicerCacheLevelsData(): OlapSlicerCacheLevelsData | undefined { return this._f(OlapSlicerCacheLevelsData); }
    /** Returns OlapSlicerCacheSelections. */
    public get olapSlicerCacheSelections(): OlapSlicerCacheSelections | undefined { return this._f(OlapSlicerCacheSelections); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Slicer Class. Serialized as `x14:slicer` */
export class Slicer extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x14:slicer';
    public static override _A = [':name',':cache',':caption',':startItem',':columnCount',':showCaption',':level',':style',':lockedPosition',':rowHeight',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** cache. Serialized as `:cache` */
    public get cache(): StringValue | undefined { return this._g(':cache'); }
    public set cache(v: StringValue | undefined) { this._s(':cache', v); }
    /** caption. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** startItem. Serialized as `:startItem` */
    public get startItem(): UInt32Value | undefined { return this._g(':startItem'); }
    public set startItem(v: UInt32Value | undefined) { this._s(':startItem', v); }
    /** columnCount. Serialized as `:columnCount` */
    public get columnCount(): UInt32Value | undefined { return this._g(':columnCount'); }
    public set columnCount(v: UInt32Value | undefined) { this._s(':columnCount', v); }
    /** showCaption. Serialized as `:showCaption` */
    public get showCaption(): BooleanValue | undefined { return this._g(':showCaption'); }
    public set showCaption(v: BooleanValue | undefined) { this._s(':showCaption', v); }
    /** level. Serialized as `:level` */
    public get level(): UInt32Value | undefined { return this._g(':level'); }
    public set level(v: UInt32Value | undefined) { this._s(':level', v); }
    /** style. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** lockedPosition. Serialized as `:lockedPosition` */
    public get lockedPosition(): BooleanValue | undefined { return this._g(':lockedPosition'); }
    public set lockedPosition(v: BooleanValue | undefined) { this._s(':lockedPosition', v); }
    /** rowHeight. Serialized as `:rowHeight` */
    public get rowHeight(): UInt32Value | undefined { return this._g(':rowHeight'); }
    public set rowHeight(v: UInt32Value | undefined) { this._s(':rowHeight', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ListItems Class. Serialized as `x14:itemLst` */
export class ListItems extends OxmlCompositeElement<ListItem | ExtensionList> {

    public static override _Q = 'x14:itemLst';

}
/** Defines the ListItem Class. Serialized as `x14:item` */
export class ListItem extends OxmlLeafElement {

    public static override _Q = 'x14:item';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the CustomFilter Class. Serialized as `x14:customFilter` */
export class CustomFilter extends OxmlLeafElement {

    public static override _Q = 'x14:customFilter';
    public static override _A = [':operator',':val',];
    /** operator. Serialized as `:operator` */
    public get operator(): FilterOperatorValues | undefined { return this._g(':operator'); }
    public set operator(v: FilterOperatorValues | undefined) { this._s(':operator', v); }
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the ProtectedRange Class. Serialized as `x14:protectedRange` */
export class ProtectedRange extends OxmlCompositeElement<XneReferenceSequence> {

    public static override _Q = 'x14:protectedRange';
    public static override _A = [':password',':algorithmName',':hashValue',':saltValue',':spinCount',':name',':securityDescriptor',];
    /** password. Serialized as `:password` */
    public get password(): HexBinaryValue | undefined { return this._g(':password'); }
    public set password(v: HexBinaryValue | undefined) { this._s(':password', v); }
    /** algorithmName. Serialized as `:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g(':algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s(':algorithmName', v); }
    /** hashValue. Serialized as `:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g(':hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s(':hashValue', v); }
    /** saltValue. Serialized as `:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g(':saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s(':saltValue', v); }
    /** spinCount. Serialized as `:spinCount` */
    public get spinCount(): UInt32Value | undefined { return this._g(':spinCount'); }
    public set spinCount(v: UInt32Value | undefined) { this._s(':spinCount', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** securityDescriptor. Serialized as `:securityDescriptor` */
    public get securityDescriptor(): StringValue | undefined { return this._g(':securityDescriptor'); }
    public set securityDescriptor(v: StringValue | undefined) { this._s(':securityDescriptor', v); }
    /** Returns XneReferenceSequence. */
    public get referenceSequence(): XneReferenceSequence | undefined { return this._f(XneReferenceSequence); }

}
/** Defines the IgnoredError Class. Serialized as `x14:ignoredError` */
export class IgnoredError extends OxmlCompositeElement<XneReferenceSequence> {

    public static override _Q = 'x14:ignoredError';
    public static override _A = [':evalError',':twoDigitTextYear',':numberStoredAsText',':formula',':formulaRange',':unlockedFormula',':emptyCellReference',':listDataValidation',':calculatedColumn',];
    /** evalError. Serialized as `:evalError` */
    public get evalError(): BooleanValue | undefined { return this._g(':evalError'); }
    public set evalError(v: BooleanValue | undefined) { this._s(':evalError', v); }
    /** twoDigitTextYear. Serialized as `:twoDigitTextYear` */
    public get twoDigitTextYear(): BooleanValue | undefined { return this._g(':twoDigitTextYear'); }
    public set twoDigitTextYear(v: BooleanValue | undefined) { this._s(':twoDigitTextYear', v); }
    /** numberStoredAsText. Serialized as `:numberStoredAsText` */
    public get numberStoredAsText(): BooleanValue | undefined { return this._g(':numberStoredAsText'); }
    public set numberStoredAsText(v: BooleanValue | undefined) { this._s(':numberStoredAsText', v); }
    /** formula. Serialized as `:formula` */
    public get formula(): BooleanValue | undefined { return this._g(':formula'); }
    public set formula(v: BooleanValue | undefined) { this._s(':formula', v); }
    /** formulaRange. Serialized as `:formulaRange` */
    public get formulaRange(): BooleanValue | undefined { return this._g(':formulaRange'); }
    public set formulaRange(v: BooleanValue | undefined) { this._s(':formulaRange', v); }
    /** unlockedFormula. Serialized as `:unlockedFormula` */
    public get unlockedFormula(): BooleanValue | undefined { return this._g(':unlockedFormula'); }
    public set unlockedFormula(v: BooleanValue | undefined) { this._s(':unlockedFormula', v); }
    /** emptyCellReference. Serialized as `:emptyCellReference` */
    public get emptyCellReference(): BooleanValue | undefined { return this._g(':emptyCellReference'); }
    public set emptyCellReference(v: BooleanValue | undefined) { this._s(':emptyCellReference', v); }
    /** listDataValidation. Serialized as `:listDataValidation` */
    public get listDataValidation(): BooleanValue | undefined { return this._g(':listDataValidation'); }
    public set listDataValidation(v: BooleanValue | undefined) { this._s(':listDataValidation', v); }
    /** calculatedColumn. Serialized as `:calculatedColumn` */
    public get calculatedColumn(): BooleanValue | undefined { return this._g(':calculatedColumn'); }
    public set calculatedColumn(v: BooleanValue | undefined) { this._s(':calculatedColumn', v); }
    /** Returns XneReferenceSequence. */
    public get referenceSequence(): XneReferenceSequence | undefined { return this._f(XneReferenceSequence); }

}
/** Defines the SlicerStyleElement Class. Serialized as `x14:slicerStyleElement` */
export class SlicerStyleElement extends OxmlLeafElement {

    public static override _Q = 'x14:slicerStyleElement';
    public static override _A = [':type',':dxfId',];
    /** type. Serialized as `:type` */
    public get type(): SlicerStyleTypeValues | undefined { return this._g(':type'); }
    public set type(v: SlicerStyleTypeValues | undefined) { this._s(':type', v); }
    /** dxfId. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }

}
/** Defines the SlicerStyle Class. Serialized as `x14:slicerStyle` */
export class SlicerStyle extends OxmlCompositeElement<SlicerStyleElements> {

    public static override _Q = 'x14:slicerStyle';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns SlicerStyleElements. */
    public get slicerStyleElements(): SlicerStyleElements | undefined { return this._f(SlicerStyleElements); }

}
/** Defines the PivotAreas Class. Serialized as `x14:pivotAreas` */
export class PivotAreas extends OxmlCompositeElement<XPivotArea> {

    public static override _Q = 'x14:pivotAreas';
    public static override _A = [':count',];
    /** Pivot Area Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ConditionalFormat Class. Serialized as `x14:conditionalFormat` */
export class ConditionalFormat extends OxmlCompositeElement<PivotAreas | ExtensionList> {

    public static override _Q = 'x14:conditionalFormat';
    public static override _A = [':scope',':type',':priority',':id',];
    /** scope. Serialized as `:scope` */
    public get scope(): ScopeValues | undefined { return this._g(':scope'); }
    public set scope(v: ScopeValues | undefined) { this._s(':scope', v); }
    /** type. Serialized as `:type` */
    public get type(): RuleValues | undefined { return this._g(':type'); }
    public set type(v: RuleValues | undefined) { this._s(':type', v); }
    /** priority. Serialized as `:priority` */
    public get priority(): UInt32Value | undefined { return this._g(':priority'); }
    public set priority(v: UInt32Value | undefined) { this._s(':priority', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns PivotAreas. */
    public get pivotAreas(): PivotAreas | undefined { return this._f(PivotAreas); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DdeValues Class. Serialized as `x14:values` */
export class DdeValues extends OxmlCompositeElement<XValue> {

    public static override _Q = 'x14:values';
    public static override _A = [':rows',':cols',];
    /** Rows. Serialized as `:rows` */
    public get rows(): UInt32Value | undefined { return this._g(':rows'); }
    public set rows(v: UInt32Value | undefined) { this._s(':rows', v); }
    /** Columns. Serialized as `:cols` */
    public get columns(): UInt32Value | undefined { return this._g(':cols'); }
    public set columns(v: UInt32Value | undefined) { this._s(':cols', v); }

}
/** Defines the SlicerStyleElements Class. Serialized as `x14:slicerStyleElements` */
export class SlicerStyleElements extends OxmlCompositeElement<SlicerStyleElement> {

    public static override _Q = 'x14:slicerStyleElements';

}
/** Defines the Xstring Class. Serialized as `x14:tupleItem` */
export class Xstring extends OxmlLeafTextElement {

    public static override _Q = 'x14:tupleItem';

}
/** Defines the PivotEditValue Class. Serialized as `x14:editValue` */
export class PivotEditValue extends OxmlLeafTextElement {

    public static override _Q = 'x14:editValue';
    public static override _A = [':valueType',];
    /** valueType. Serialized as `:valueType` */
    public get valueType(): PivotEditValueTypeValues | undefined { return this._g(':valueType'); }
    public set valueType(v: PivotEditValueTypeValues | undefined) { this._s(':valueType', v); }

}
/** Defines the PivotChange Class. Serialized as `x14:pivotChange` */
export class PivotChange extends OxmlCompositeElement<PivotEditValue | TupleItems | ExtensionList> {

    public static override _Q = 'x14:pivotChange';
    public static override _A = [':allocationMethod',':weightExpression',];
    /** allocationMethod. Serialized as `:allocationMethod` */
    public get allocationMethod(): AllocationMethodValues | undefined { return this._g(':allocationMethod'); }
    public set allocationMethod(v: AllocationMethodValues | undefined) { this._s(':allocationMethod', v); }
    /** weightExpression. Serialized as `:weightExpression` */
    public get weightExpression(): StringValue | undefined { return this._g(':weightExpression'); }
    public set weightExpression(v: StringValue | undefined) { this._s(':weightExpression', v); }
    /** Returns PivotEditValue. */
    public get pivotEditValue(): PivotEditValue | undefined { return this._f(PivotEditValue); }
    /** Returns TupleItems. */
    public get tupleItems(): TupleItems | undefined { return this._f(TupleItems); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the PivotArea Class. Serialized as `x14:pivotArea` */
export class PivotArea extends OxmlCompositeElement<XPivotAreaReferences | XExtensionList> {

    public static override _Q = 'x14:pivotArea';
    public static override _A = [':field',':type',':dataOnly',':labelOnly',':grandRow',':grandCol',':cacheIndex',':outline',':offset',':collapsedLevelsAreSubtotals',':axis',':fieldPosition',];
    /** Field Index. Serialized as `:field` */
    public get field(): Int32Value | undefined { return this._g(':field'); }
    public set field(v: Int32Value | undefined) { this._s(':field', v); }
    /** Rule Type. Serialized as `:type` */
    public get type(): PivotAreaValues | undefined { return this._g(':type'); }
    public set type(v: PivotAreaValues | undefined) { this._s(':type', v); }
    /** Data Only. Serialized as `:dataOnly` */
    public get dataOnly(): BooleanValue | undefined { return this._g(':dataOnly'); }
    public set dataOnly(v: BooleanValue | undefined) { this._s(':dataOnly', v); }
    /** Labels Only. Serialized as `:labelOnly` */
    public get labelOnly(): BooleanValue | undefined { return this._g(':labelOnly'); }
    public set labelOnly(v: BooleanValue | undefined) { this._s(':labelOnly', v); }
    /** Include Row Grand Total. Serialized as `:grandRow` */
    public get grandRow(): BooleanValue | undefined { return this._g(':grandRow'); }
    public set grandRow(v: BooleanValue | undefined) { this._s(':grandRow', v); }
    /** Include Column Grand Total. Serialized as `:grandCol` */
    public get grandColumn(): BooleanValue | undefined { return this._g(':grandCol'); }
    public set grandColumn(v: BooleanValue | undefined) { this._s(':grandCol', v); }
    /** Cache Index. Serialized as `:cacheIndex` */
    public get cacheIndex(): BooleanValue | undefined { return this._g(':cacheIndex'); }
    public set cacheIndex(v: BooleanValue | undefined) { this._s(':cacheIndex', v); }
    /** Outline. Serialized as `:outline` */
    public get outline(): BooleanValue | undefined { return this._g(':outline'); }
    public set outline(v: BooleanValue | undefined) { this._s(':outline', v); }
    /** Offset Reference. Serialized as `:offset` */
    public get offset(): StringValue | undefined { return this._g(':offset'); }
    public set offset(v: StringValue | undefined) { this._s(':offset', v); }
    /** Collapsed Levels Are Subtotals. Serialized as `:collapsedLevelsAreSubtotals` */
    public get collapsedLevelsAreSubtotals(): BooleanValue | undefined { return this._g(':collapsedLevelsAreSubtotals'); }
    public set collapsedLevelsAreSubtotals(v: BooleanValue | undefined) { this._s(':collapsedLevelsAreSubtotals', v); }
    /** Axis. Serialized as `:axis` */
    public get axis(): PivotTableAxisValues | undefined { return this._g(':axis'); }
    public set axis(v: PivotTableAxisValues | undefined) { this._s(':axis', v); }
    /** Field Position. Serialized as `:fieldPosition` */
    public get fieldPosition(): UInt32Value | undefined { return this._g(':fieldPosition'); }
    public set fieldPosition(v: UInt32Value | undefined) { this._s(':fieldPosition', v); }
    /** References. */
    public get pivotAreaReferences(): XPivotAreaReferences | undefined { return this._f(XPivotAreaReferences); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): XExtensionList | undefined { return this._f(XExtensionList); }

}
/** Defines the TupleItems Class. Serialized as `x14:tupleItems` */
export class TupleItems extends OxmlCompositeElement<Xstring> {

    public static override _Q = 'x14:tupleItems';

}
/** Defines the PivotUserEdit Class. Serialized as `x14:userEdit` */
export class PivotUserEdit extends OxmlCompositeElement<XneFormula | PivotEditValue> {

    public static override _Q = 'x14:userEdit';
    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }
    /** Returns PivotEditValue. */
    public get pivotEditValue(): PivotEditValue | undefined { return this._f(PivotEditValue); }

}
/** Defines the PivotEdit Class. Serialized as `x14:pivotEdit` */
export class PivotEdit extends OxmlCompositeElement<PivotUserEdit | TupleItems | PivotArea | ExtensionList> {

    public static override _Q = 'x14:pivotEdit';
    /** Returns PivotUserEdit. */
    public get pivotUserEdit(): PivotUserEdit | undefined { return this._f(PivotUserEdit); }
    /** Returns TupleItems. */
    public get tupleItems(): TupleItems | undefined { return this._f(TupleItems); }
    /** Returns PivotArea. */
    public get pivotArea(): PivotArea | undefined { return this._f(PivotArea); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the CalculatedMembers Class. Serialized as `x14:calculatedMembers` */
export class CalculatedMembers extends OxmlCompositeElement<XCalculatedMember> {

    public static override _Q = 'x14:calculatedMembers';
    public static override _A = [':count',];
    /** Calculated Members Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ConditionalFormats Class. Serialized as `x14:conditionalFormats` */
export class ConditionalFormats extends OxmlCompositeElement<ConditionalFormat> {

    public static override _Q = 'x14:conditionalFormats';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the PivotChanges Class. Serialized as `x14:pivotChanges` */
export class PivotChanges extends OxmlCompositeElement<PivotChange> {

    public static override _Q = 'x14:pivotChanges';

}
/** Defines the PivotEdits Class. Serialized as `x14:pivotEdits` */
export class PivotEdits extends OxmlCompositeElement<PivotEdit> {

    public static override _Q = 'x14:pivotEdits';

}
/** Defines the ConditionalFormattingIcon Class. Serialized as `x14:cfIcon` */
export class ConditionalFormattingIcon extends OxmlLeafElement {

    public static override _Q = 'x14:cfIcon';
    public static override _A = [':iconSet',':iconId',];
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** iconId. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the ConditionalFormattingValueObject Class. Serialized as `x14:cfvo` */
export class ConditionalFormattingValueObject extends OxmlCompositeElement<XneFormula | ExtensionList> {

    public static override _Q = 'x14:cfvo';
    public static override _A = [':type',':gte',];
    /** type. Serialized as `:type` */
    public get type(): ConditionalFormattingValueObjectTypeValues | undefined { return this._g(':type'); }
    public set type(v: ConditionalFormattingValueObjectTypeValues | undefined) { this._s(':type', v); }
    /** gte. Serialized as `:gte` */
    public get greaterThanOrEqual(): BooleanValue | undefined { return this._g(':gte'); }
    public set greaterThanOrEqual(v: BooleanValue | undefined) { this._s(':gte', v); }
    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DifferentialType Class. Serialized as `x14:dxf` */
export class DifferentialType extends OxmlCompositeElement<XFont | XNumberingFormat | XFill | XAlignment | XBorder | XProtection | XExtensionList> {

    public static override _Q = 'x14:dxf';
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
/** Defines the IconSet Class. Serialized as `x14:iconSet` */
export class IconSet extends OxmlCompositeElement<ConditionalFormattingValueObject | ConditionalFormattingIcon> {

    public static override _Q = 'x14:iconSet';
    public static override _A = [':iconSet',':showValue',':percent',':reverse',':custom',];
    /** iconSet. Serialized as `:iconSet` */
    public get iconSetTypes(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSetTypes(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** showValue. Serialized as `:showValue` */
    public get showValue(): BooleanValue | undefined { return this._g(':showValue'); }
    public set showValue(v: BooleanValue | undefined) { this._s(':showValue', v); }
    /** percent. Serialized as `:percent` */
    public get percent(): BooleanValue | undefined { return this._g(':percent'); }
    public set percent(v: BooleanValue | undefined) { this._s(':percent', v); }
    /** reverse. Serialized as `:reverse` */
    public get reverse(): BooleanValue | undefined { return this._g(':reverse'); }
    public set reverse(v: BooleanValue | undefined) { this._s(':reverse', v); }
    /** custom. Serialized as `:custom` */
    public get custom(): BooleanValue | undefined { return this._g(':custom'); }
    public set custom(v: BooleanValue | undefined) { this._s(':custom', v); }

}
/** Defines the DataBar Class. Serialized as `x14:dataBar` */
export class DataBar extends OxmlCompositeElement<ConditionalFormattingValueObject | FillColor | BorderColor | NegativeFillColor | NegativeBorderColor | BarAxisColor> {

    public static override _Q = 'x14:dataBar';
    public static override _A = [':minLength',':maxLength',':showValue',':border',':gradient',':direction',':negativeBarColorSameAsPositive',':negativeBarBorderColorSameAsPositive',':axisPosition',];
    /** minLength. Serialized as `:minLength` */
    public get minLength(): UInt32Value | undefined { return this._g(':minLength'); }
    public set minLength(v: UInt32Value | undefined) { this._s(':minLength', v); }
    /** maxLength. Serialized as `:maxLength` */
    public get maxLength(): UInt32Value | undefined { return this._g(':maxLength'); }
    public set maxLength(v: UInt32Value | undefined) { this._s(':maxLength', v); }
    /** showValue. Serialized as `:showValue` */
    public get showValue(): BooleanValue | undefined { return this._g(':showValue'); }
    public set showValue(v: BooleanValue | undefined) { this._s(':showValue', v); }
    /** border. Serialized as `:border` */
    public get border(): BooleanValue | undefined { return this._g(':border'); }
    public set border(v: BooleanValue | undefined) { this._s(':border', v); }
    /** gradient. Serialized as `:gradient` */
    public get gradient(): BooleanValue | undefined { return this._g(':gradient'); }
    public set gradient(v: BooleanValue | undefined) { this._s(':gradient', v); }
    /** direction. Serialized as `:direction` */
    public get direction(): DataBarDirectionValues | undefined { return this._g(':direction'); }
    public set direction(v: DataBarDirectionValues | undefined) { this._s(':direction', v); }
    /** negativeBarColorSameAsPositive. Serialized as `:negativeBarColorSameAsPositive` */
    public get negativeBarColorSameAsPositive(): BooleanValue | undefined { return this._g(':negativeBarColorSameAsPositive'); }
    public set negativeBarColorSameAsPositive(v: BooleanValue | undefined) { this._s(':negativeBarColorSameAsPositive', v); }
    /** negativeBarBorderColorSameAsPositive. Serialized as `:negativeBarBorderColorSameAsPositive` */
    public get negativeBarBorderColorSameAsPositive(): BooleanValue | undefined { return this._g(':negativeBarBorderColorSameAsPositive'); }
    public set negativeBarBorderColorSameAsPositive(v: BooleanValue | undefined) { this._s(':negativeBarBorderColorSameAsPositive', v); }
    /** axisPosition. Serialized as `:axisPosition` */
    public get axisPosition(): DataBarAxisPositionValues | undefined { return this._g(':axisPosition'); }
    public set axisPosition(v: DataBarAxisPositionValues | undefined) { this._s(':axisPosition', v); }

}
/** Defines the ColorScale Class. Serialized as `x14:colorScale` */
export class ColorScale extends OxmlCompositeElement<ConditionalFormattingValueObject | Color> {

    public static override _Q = 'x14:colorScale';

}
/** Defines the SetLevels Class. Serialized as `x14:setLevels` */
export class SetLevels extends OxmlCompositeElement<SetLevel> {

    public static override _Q = 'x14:setLevels';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the SetLevel Class. Serialized as `x14:setLevel` */
export class SetLevel extends OxmlLeafElement {

    public static override _Q = 'x14:setLevel';
    public static override _A = [':hierarchy',];
    /** hierarchy. Serialized as `:hierarchy` */
    public get hierarchy(): Int32Value | undefined { return this._g(':hierarchy'); }
    public set hierarchy(v: Int32Value | undefined) { this._s(':hierarchy', v); }

}
/** Defines the TupleSetRowItem Class. Serialized as `x14:rowItem` */
export class TupleSetRowItem extends OxmlLeafElement {

    public static override _Q = 'x14:rowItem';
    public static override _A = [':u',':d',];
    /** u. Serialized as `:u` */
    public get uniqueName(): StringValue | undefined { return this._g(':u'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':u', v); }
    /** d. Serialized as `:d` */
    public get displayName(): StringValue | undefined { return this._g(':d'); }
    public set displayName(v: StringValue | undefined) { this._s(':d', v); }

}
/** Defines the TupleSetRow Class. Serialized as `x14:row` */
export class TupleSetRow extends OxmlCompositeElement<TupleSetRowItem> {

    public static override _Q = 'x14:row';

}
/** Defines the TupleSetHeader Class. Serialized as `x14:header` */
export class TupleSetHeader extends OxmlLeafElement {

    public static override _Q = 'x14:header';
    public static override _A = [':uniqueName',':hierarchyName',];
    /** uniqueName. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** hierarchyName. Serialized as `:hierarchyName` */
    public get hierarchyName(): StringValue | undefined { return this._g(':hierarchyName'); }
    public set hierarchyName(v: StringValue | undefined) { this._s(':hierarchyName', v); }

}
/** Defines the TupleSetRows Class. Serialized as `x14:rows` */
export class TupleSetRows extends OxmlCompositeElement<TupleSetRow> {

    public static override _Q = 'x14:rows';

}
/** Defines the TupleSetHeaders Class. Serialized as `x14:headers` */
export class TupleSetHeaders extends OxmlCompositeElement<TupleSetHeader> {

    public static override _Q = 'x14:headers';

}
/** Defines the TupleSet Class. Serialized as `x14:tupleSet` */
export class TupleSet extends OxmlCompositeElement<TupleSetHeaders | TupleSetRows> {

    public static override _Q = 'x14:tupleSet';
    public static override _A = [':rowCount',':columnCount',];
    /** rowCount. Serialized as `:rowCount` */
    public get rowCount(): UInt32Value | undefined { return this._g(':rowCount'); }
    public set rowCount(v: UInt32Value | undefined) { this._s(':rowCount', v); }
    /** columnCount. Serialized as `:columnCount` */
    public get columnCount(): UInt32Value | undefined { return this._g(':columnCount'); }
    public set columnCount(v: UInt32Value | undefined) { this._s(':columnCount', v); }
    /** Returns TupleSetHeaders. */
    public get tupleSetHeaders(): TupleSetHeaders | undefined { return this._f(TupleSetHeaders); }
    /** Returns TupleSetRows. */
    public get tupleSetRows(): TupleSetRows | undefined { return this._f(TupleSetRows); }

}
/** Defines the ArgumentDescription Class. Serialized as `x14:argumentDescription` */
export class ArgumentDescription extends OxmlLeafTextElement {

    public static override _Q = 'x14:argumentDescription';
    public static override _A = [':index',];
    /** index. Serialized as `:index` */
    public get index(): UInt32Value | undefined { return this._g(':index'); }
    public set index(v: UInt32Value | undefined) { this._s(':index', v); }

}
/** Defines the ArgumentDescriptions Class. Serialized as `x14:argumentDescriptions` */
export class ArgumentDescriptions extends OxmlCompositeElement<ArgumentDescription> {

    public static override _Q = 'x14:argumentDescriptions';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the DefinedName Class. Serialized as `x14:definedName` */
export class DefinedName extends OxmlCompositeElement<ArgumentDescriptions> {

    public static override _Q = 'x14:definedName';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns ArgumentDescriptions. */
    public get argumentDescriptions(): ArgumentDescriptions | undefined { return this._f(ArgumentDescriptions); }

}
/** Defines the SlicerCache Class. Serialized as `x14:slicerCache` */
export class SlicerCache extends OxmlLeafElement {

    public static override _Q = 'x14:slicerCache';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the SlicerRef Class. Serialized as `x14:slicer` */
export class SlicerRef extends OxmlLeafElement {

    public static override _Q = 'x14:slicer';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the Sparkline Class. Serialized as `x14:sparkline` */
export class Sparkline extends OxmlCompositeElement<XneFormula | XneReferenceSequence> {

    public static override _Q = 'x14:sparkline';
    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }
    /** Returns XneReferenceSequence. */
    public get referenceSequence(): XneReferenceSequence | undefined { return this._f(XneReferenceSequence); }

}
/** Defines the Sparklines Class. Serialized as `x14:sparklines` */
export class Sparklines extends OxmlCompositeElement<Sparkline> {

    public static override _Q = 'x14:sparklines';

}
/** Defines the ColorType Class. */
export abstract class ColorType extends OxmlLeafElement {

    public static override _A = [':auto',':indexed',':rgb',':theme',':tint',];
    /** Automatic. Serialized as `:auto` */
    public get auto(): BooleanValue | undefined { return this._g(':auto'); }
    public set auto(v: BooleanValue | undefined) { this._s(':auto', v); }
    /** Index. Serialized as `:indexed` */
    public get indexed(): UInt32Value | undefined { return this._g(':indexed'); }
    public set indexed(v: UInt32Value | undefined) { this._s(':indexed', v); }
    /** Alpha Red Green Blue Color Value. Serialized as `:rgb` */
    public get rgb(): HexBinaryValue | undefined { return this._g(':rgb'); }
    public set rgb(v: HexBinaryValue | undefined) { this._s(':rgb', v); }
    /** Theme Color. Serialized as `:theme` */
    public get theme(): UInt32Value | undefined { return this._g(':theme'); }
    public set theme(v: UInt32Value | undefined) { this._s(':theme', v); }
    /** Tint. Serialized as `:tint` */
    public get tint(): DoubleValue | undefined { return this._g(':tint'); }
    public set tint(v: DoubleValue | undefined) { this._s(':tint', v); }

}
/** Defines the BarAxisColor Class. Serialized as `x14:axisColor` */
export class BarAxisColor extends ColorType {

    public static override _Q = 'x14:axisColor';

}
/** Defines the NegativeBorderColor Class. Serialized as `x14:negativeBorderColor` */
export class NegativeBorderColor extends ColorType {

    public static override _Q = 'x14:negativeBorderColor';

}
/** Defines the NegativeFillColor Class. Serialized as `x14:negativeFillColor` */
export class NegativeFillColor extends ColorType {

    public static override _Q = 'x14:negativeFillColor';

}
/** Defines the BorderColor Class. Serialized as `x14:borderColor` */
export class BorderColor extends ColorType {

    public static override _Q = 'x14:borderColor';

}
/** Defines the FillColor Class. Serialized as `x14:fillColor` */
export class FillColor extends ColorType {

    public static override _Q = 'x14:fillColor';

}
/** Defines the Color Class. Serialized as `x14:color` */
export class Color extends ColorType {

    public static override _Q = 'x14:color';

}
/** Defines the LowMarkerColor Class. Serialized as `x14:colorLow` */
export class LowMarkerColor extends ColorType {

    public static override _Q = 'x14:colorLow';

}
/** Defines the HighMarkerColor Class. Serialized as `x14:colorHigh` */
export class HighMarkerColor extends ColorType {

    public static override _Q = 'x14:colorHigh';

}
/** Defines the LastMarkerColor Class. Serialized as `x14:colorLast` */
export class LastMarkerColor extends ColorType {

    public static override _Q = 'x14:colorLast';

}
/** Defines the FirstMarkerColor Class. Serialized as `x14:colorFirst` */
export class FirstMarkerColor extends ColorType {

    public static override _Q = 'x14:colorFirst';

}
/** Defines the MarkersColor Class. Serialized as `x14:colorMarkers` */
export class MarkersColor extends ColorType {

    public static override _Q = 'x14:colorMarkers';

}
/** Defines the AxisColor Class. Serialized as `x14:colorAxis` */
export class AxisColor extends ColorType {

    public static override _Q = 'x14:colorAxis';

}
/** Defines the NegativeColor Class. Serialized as `x14:colorNegative` */
export class NegativeColor extends ColorType {

    public static override _Q = 'x14:colorNegative';

}
/** Defines the SeriesColor Class. Serialized as `x14:colorSeries` */
export class SeriesColor extends ColorType {

    public static override _Q = 'x14:colorSeries';

}
/** Defines the SparklineGroup Class. Serialized as `x14:sparklineGroup` */
export class SparklineGroup extends OxmlCompositeElement<SeriesColor | NegativeColor | AxisColor | MarkersColor | FirstMarkerColor | LastMarkerColor | HighMarkerColor | LowMarkerColor | XneFormula | Sparklines> {

    public static override _Q = 'x14:sparklineGroup';
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
    /** Returns SeriesColor. */
    public get seriesColor(): SeriesColor | undefined { return this._f(SeriesColor); }
    /** Returns NegativeColor. */
    public get negativeColor(): NegativeColor | undefined { return this._f(NegativeColor); }
    /** Returns AxisColor. */
    public get axisColor(): AxisColor | undefined { return this._f(AxisColor); }
    /** Returns MarkersColor. */
    public get markersColor(): MarkersColor | undefined { return this._f(MarkersColor); }
    /** Returns FirstMarkerColor. */
    public get firstMarkerColor(): FirstMarkerColor | undefined { return this._f(FirstMarkerColor); }
    /** Returns LastMarkerColor. */
    public get lastMarkerColor(): LastMarkerColor | undefined { return this._f(LastMarkerColor); }
    /** Returns HighMarkerColor. */
    public get highMarkerColor(): HighMarkerColor | undefined { return this._f(HighMarkerColor); }
    /** Returns LowMarkerColor. */
    public get lowMarkerColor(): LowMarkerColor | undefined { return this._f(LowMarkerColor); }
    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }
    /** Returns Sparklines. */
    public get sparklines(): Sparklines | undefined { return this._f(Sparklines); }

}
/** Defines the DataValidationFormulaType Class. */
export abstract class DataValidationFormulaType extends OxmlCompositeElement<XneFormula> {

    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }

}
/** Defines the DataValidationForumla2 Class. Serialized as `x14:formula2` */
export class DataValidationForumla2 extends DataValidationFormulaType {

    public static override _Q = 'x14:formula2';

}
/** Defines the DataValidationForumla1 Class. Serialized as `x14:formula1` */
export class DataValidationForumla1 extends DataValidationFormulaType {

    public static override _Q = 'x14:formula1';

}
/** Defines the DataValidation Class. Serialized as `x14:dataValidation` */
export class DataValidation extends OxmlCompositeElement<DataValidationForumla1 | DataValidationForumla2 | XneReferenceSequence> {

    public static override _Q = 'x14:dataValidation';
    public static override _A = [':type',':errorStyle',':imeMode',':operator',':allowBlank',':showDropDown',':showInputMessage',':showErrorMessage',':errorTitle',':error',':promptTitle',':prompt',];
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
    /** Returns DataValidationForumla1. */
    public get dataValidationForumla1(): DataValidationForumla1 | undefined { return this._f(DataValidationForumla1); }
    /** Returns DataValidationForumla2. */
    public get dataValidationForumla2(): DataValidationForumla2 | undefined { return this._f(DataValidationForumla2); }
    /** Returns XneReferenceSequence. */
    public get referenceSequence(): XneReferenceSequence | undefined { return this._f(XneReferenceSequence); }

}
/** Defines the ExtensionList Class. Serialized as `x14:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'x14:extLst';

}
/** Defines the ConditionalFormattingRule Class. Serialized as `x14:cfRule` */
export class ConditionalFormattingRule extends OxmlCompositeElement<XneFormula | ColorScale | DataBar | IconSet | DifferentialType | ExtensionList> {

    public static override _Q = 'x14:cfRule';
    public static override _A = [':type',':priority',':stopIfTrue',':aboveAverage',':percent',':bottom',':operator',':text',':timePeriod',':rank',':stdDev',':equalAverage',':activePresent',':id',];
    /** type. Serialized as `:type` */
    public get type(): ConditionalFormatValues | undefined { return this._g(':type'); }
    public set type(v: ConditionalFormatValues | undefined) { this._s(':type', v); }
    /** priority. Serialized as `:priority` */
    public get priority(): Int32Value | undefined { return this._g(':priority'); }
    public set priority(v: Int32Value | undefined) { this._s(':priority', v); }
    /** stopIfTrue. Serialized as `:stopIfTrue` */
    public get stopIfTrue(): BooleanValue | undefined { return this._g(':stopIfTrue'); }
    public set stopIfTrue(v: BooleanValue | undefined) { this._s(':stopIfTrue', v); }
    /** aboveAverage. Serialized as `:aboveAverage` */
    public get aboveAverage(): BooleanValue | undefined { return this._g(':aboveAverage'); }
    public set aboveAverage(v: BooleanValue | undefined) { this._s(':aboveAverage', v); }
    /** percent. Serialized as `:percent` */
    public get percent(): BooleanValue | undefined { return this._g(':percent'); }
    public set percent(v: BooleanValue | undefined) { this._s(':percent', v); }
    /** bottom. Serialized as `:bottom` */
    public get bottom(): BooleanValue | undefined { return this._g(':bottom'); }
    public set bottom(v: BooleanValue | undefined) { this._s(':bottom', v); }
    /** operator. Serialized as `:operator` */
    public get operator(): ConditionalFormattingOperatorValues | undefined { return this._g(':operator'); }
    public set operator(v: ConditionalFormattingOperatorValues | undefined) { this._s(':operator', v); }
    /** text. Serialized as `:text` */
    public get text(): StringValue | undefined { return this._g(':text'); }
    public set text(v: StringValue | undefined) { this._s(':text', v); }
    /** timePeriod. Serialized as `:timePeriod` */
    public get timePeriod(): TimePeriodValues | undefined { return this._g(':timePeriod'); }
    public set timePeriod(v: TimePeriodValues | undefined) { this._s(':timePeriod', v); }
    /** rank. Serialized as `:rank` */
    public get rank(): UInt32Value | undefined { return this._g(':rank'); }
    public set rank(v: UInt32Value | undefined) { this._s(':rank', v); }
    /** stdDev. Serialized as `:stdDev` */
    public get standardDeviation(): Int32Value | undefined { return this._g(':stdDev'); }
    public set standardDeviation(v: Int32Value | undefined) { this._s(':stdDev', v); }
    /** equalAverage. Serialized as `:equalAverage` */
    public get equalAverage(): BooleanValue | undefined { return this._g(':equalAverage'); }
    public set equalAverage(v: BooleanValue | undefined) { this._s(':equalAverage', v); }
    /** activePresent. Serialized as `:activePresent` */
    public get activePresent(): BooleanValue | undefined { return this._g(':activePresent'); }
    public set activePresent(v: BooleanValue | undefined) { this._s(':activePresent', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }

}
/** Defines the ConditionalFormatting Class. Serialized as `x14:conditionalFormatting` */
export class ConditionalFormatting extends OxmlCompositeElement<ConditionalFormattingRule | XneReferenceSequence | ExtensionList> {

    public static override _Q = 'x14:conditionalFormatting';
    public static override _A = [':pivot',];
    /** pivot. Serialized as `:pivot` */
    public get pivot(): BooleanValue | undefined { return this._g(':pivot'); }
    public set pivot(v: BooleanValue | undefined) { this._s(':pivot', v); }

}
/** Defines the SlicerCacheDefinition Class. Serialized as `x14:slicerCacheDefinition` */
export class SlicerCacheDefinition extends OxmlPartRootElement<SlicerCachePivotTables | SlicerCacheData | SlicerCacheDefinitionExtensionList> {

    public static override _Q = 'x14:slicerCacheDefinition';
    public static override _A = [':name',':sourceName',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** sourceName. Serialized as `:sourceName` */
    public get sourceName(): StringValue | undefined { return this._g(':sourceName'); }
    public set sourceName(v: StringValue | undefined) { this._s(':sourceName', v); }
    /** Returns SlicerCachePivotTables. */
    public get slicerCachePivotTables(): SlicerCachePivotTables | undefined { return this._f(SlicerCachePivotTables); }
    /** Returns SlicerCacheData. */
    public get slicerCacheData(): SlicerCacheData | undefined { return this._f(SlicerCacheData); }
    /** Returns SlicerCacheDefinitionExtensionList. */
    public get slicerCacheDefinitionExtensionList(): SlicerCacheDefinitionExtensionList | undefined { return this._f(SlicerCacheDefinitionExtensionList); }

}
/** Defines the Slicers Class. Serialized as `x14:slicers` */
export class Slicers extends OxmlPartRootElement<Slicer> {

    public static override _Q = 'x14:slicers';

}
/** Defines the FormControlProperties Class. Serialized as `x14:formControlPr` */
export class FormControlProperties extends OxmlPartRootElement<ListItems | ExtensionList> {

    public static override _Q = 'x14:formControlPr';
    public static override _A = [':objectType',':checked',':colored',':dropLines',':dropStyle',':dx',':firstButton',':fmlaGroup',':fmlaLink',':fmlaRange',':fmlaTxbx',':horiz',':inc',':justLastX',':lockText',':max',':min',':multiSel',':noThreeD',':noThreeD2',':page',':sel',':seltype',':textHAlign',':textVAlign',':val',':widthMin',':editVal',':multiLine',':verticalBar',':passwordEdit',];
    /** objectType. Serialized as `:objectType` */
    public get objectType(): ObjectTypeValues | undefined { return this._g(':objectType'); }
    public set objectType(v: ObjectTypeValues | undefined) { this._s(':objectType', v); }
    /** checked. Serialized as `:checked` */
    public get checked(): CheckedValues | undefined { return this._g(':checked'); }
    public set checked(v: CheckedValues | undefined) { this._s(':checked', v); }
    /** colored. Serialized as `:colored` */
    public get colored(): BooleanValue | undefined { return this._g(':colored'); }
    public set colored(v: BooleanValue | undefined) { this._s(':colored', v); }
    /** dropLines. Serialized as `:dropLines` */
    public get dropLines(): UInt32Value | undefined { return this._g(':dropLines'); }
    public set dropLines(v: UInt32Value | undefined) { this._s(':dropLines', v); }
    /** dropStyle. Serialized as `:dropStyle` */
    public get dropStyle(): DropStyleValues | undefined { return this._g(':dropStyle'); }
    public set dropStyle(v: DropStyleValues | undefined) { this._s(':dropStyle', v); }
    /** dx. Serialized as `:dx` */
    public get scrollBarWidth(): UInt32Value | undefined { return this._g(':dx'); }
    public set scrollBarWidth(v: UInt32Value | undefined) { this._s(':dx', v); }
    /** firstButton. Serialized as `:firstButton` */
    public get firstButton(): BooleanValue | undefined { return this._g(':firstButton'); }
    public set firstButton(v: BooleanValue | undefined) { this._s(':firstButton', v); }
    /** fmlaGroup. Serialized as `:fmlaGroup` */
    public get fmlaGroup(): StringValue | undefined { return this._g(':fmlaGroup'); }
    public set fmlaGroup(v: StringValue | undefined) { this._s(':fmlaGroup', v); }
    /** fmlaLink. Serialized as `:fmlaLink` */
    public get fmlaLink(): StringValue | undefined { return this._g(':fmlaLink'); }
    public set fmlaLink(v: StringValue | undefined) { this._s(':fmlaLink', v); }
    /** fmlaRange. Serialized as `:fmlaRange` */
    public get fmlaRange(): StringValue | undefined { return this._g(':fmlaRange'); }
    public set fmlaRange(v: StringValue | undefined) { this._s(':fmlaRange', v); }
    /** fmlaTxbx. Serialized as `:fmlaTxbx` */
    public get fmlaTextbox(): StringValue | undefined { return this._g(':fmlaTxbx'); }
    public set fmlaTextbox(v: StringValue | undefined) { this._s(':fmlaTxbx', v); }
    /** horiz. Serialized as `:horiz` */
    public get horizontal(): BooleanValue | undefined { return this._g(':horiz'); }
    public set horizontal(v: BooleanValue | undefined) { this._s(':horiz', v); }
    /** inc. Serialized as `:inc` */
    public get incremental(): UInt32Value | undefined { return this._g(':inc'); }
    public set incremental(v: UInt32Value | undefined) { this._s(':inc', v); }
    /** justLastX. Serialized as `:justLastX` */
    public get justLastX(): BooleanValue | undefined { return this._g(':justLastX'); }
    public set justLastX(v: BooleanValue | undefined) { this._s(':justLastX', v); }
    /** lockText. Serialized as `:lockText` */
    public get lockText(): BooleanValue | undefined { return this._g(':lockText'); }
    public set lockText(v: BooleanValue | undefined) { this._s(':lockText', v); }
    /** max. Serialized as `:max` */
    public get max(): UInt32Value | undefined { return this._g(':max'); }
    public set max(v: UInt32Value | undefined) { this._s(':max', v); }
    /** min. Serialized as `:min` */
    public get min(): UInt32Value | undefined { return this._g(':min'); }
    public set min(v: UInt32Value | undefined) { this._s(':min', v); }
    /** multiSel. Serialized as `:multiSel` */
    public get multipleSelection(): StringValue | undefined { return this._g(':multiSel'); }
    public set multipleSelection(v: StringValue | undefined) { this._s(':multiSel', v); }
    /** noThreeD. Serialized as `:noThreeD` */
    public get noThreeD(): BooleanValue | undefined { return this._g(':noThreeD'); }
    public set noThreeD(v: BooleanValue | undefined) { this._s(':noThreeD', v); }
    /** noThreeD2. Serialized as `:noThreeD2` */
    public get noThreeD2(): BooleanValue | undefined { return this._g(':noThreeD2'); }
    public set noThreeD2(v: BooleanValue | undefined) { this._s(':noThreeD2', v); }
    /** page. Serialized as `:page` */
    public get page(): UInt32Value | undefined { return this._g(':page'); }
    public set page(v: UInt32Value | undefined) { this._s(':page', v); }
    /** sel. Serialized as `:sel` */
    public get selected(): UInt32Value | undefined { return this._g(':sel'); }
    public set selected(v: UInt32Value | undefined) { this._s(':sel', v); }
    /** seltype. Serialized as `:seltype` */
    public get selectionType(): SelectionTypeValues | undefined { return this._g(':seltype'); }
    public set selectionType(v: SelectionTypeValues | undefined) { this._s(':seltype', v); }
    /** textHAlign. Serialized as `:textHAlign` */
    public get textHorizontalAlign(): TextHorizontalAlignmentValues | undefined { return this._g(':textHAlign'); }
    public set textHorizontalAlign(v: TextHorizontalAlignmentValues | undefined) { this._s(':textHAlign', v); }
    /** textVAlign. Serialized as `:textVAlign` */
    public get textVerticalAlign(): TextVerticalAlignmentValues | undefined { return this._g(':textVAlign'); }
    public set textVerticalAlign(v: TextVerticalAlignmentValues | undefined) { this._s(':textVAlign', v); }
    /** val. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }
    /** widthMin. Serialized as `:widthMin` */
    public get minimumWidth(): UInt32Value | undefined { return this._g(':widthMin'); }
    public set minimumWidth(v: UInt32Value | undefined) { this._s(':widthMin', v); }
    /** editVal. Serialized as `:editVal` */
    public get editVal(): EditValidationValues | undefined { return this._g(':editVal'); }
    public set editVal(v: EditValidationValues | undefined) { this._s(':editVal', v); }
    /** multiLine. Serialized as `:multiLine` */
    public get multipleLines(): BooleanValue | undefined { return this._g(':multiLine'); }
    public set multipleLines(v: BooleanValue | undefined) { this._s(':multiLine', v); }
    /** verticalBar. Serialized as `:verticalBar` */
    public get verticalBar(): BooleanValue | undefined { return this._g(':verticalBar'); }
    public set verticalBar(v: BooleanValue | undefined) { this._s(':verticalBar', v); }
    /** passwordEdit. Serialized as `:passwordEdit` */
    public get passwordEdit(): BooleanValue | undefined { return this._g(':passwordEdit'); }
    public set passwordEdit(v: BooleanValue | undefined) { this._s(':passwordEdit', v); }
    /** Returns ListItems. */
    public get listItems(): ListItems | undefined { return this._f(ListItems); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DatastoreItem Class. Serialized as `x14:datastoreItem` */
export class DatastoreItem extends OxmlPartRootElement<ExtensionList> {

    public static override _Q = 'x14:datastoreItem';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SourceConnection Class. Serialized as `x14:sourceConnection` */
export class SourceConnection extends OxmlLeafElement {

    public static override _Q = 'x14:sourceConnection';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the SortCondition Class. Serialized as `x14:sortCondition` */
export class SortCondition extends OxmlLeafElement {

    public static override _Q = 'x14:sortCondition';
    public static override _A = [':descending',':sortBy',':ref',':customList',':dxfId',':iconSet',':iconId',];
    /** descending. Serialized as `:descending` */
    public get descending(): BooleanValue | undefined { return this._g(':descending'); }
    public set descending(v: BooleanValue | undefined) { this._s(':descending', v); }
    /** sortBy. Serialized as `:sortBy` */
    public get sortBy(): SortByValues | undefined { return this._g(':sortBy'); }
    public set sortBy(v: SortByValues | undefined) { this._s(':sortBy', v); }
    /** ref. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** customList. Serialized as `:customList` */
    public get customList(): StringValue | undefined { return this._g(':customList'); }
    public set customList(v: StringValue | undefined) { this._s(':customList', v); }
    /** dxfId. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** iconId. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the CustomFilters Class. Serialized as `x14:customFilters` */
export class CustomFilters extends OxmlCompositeElement<CustomFilter> {

    public static override _Q = 'x14:customFilters';
    public static override _A = [':and',];
    /** and. Serialized as `:and` */
    public get and(): BooleanValue | undefined { return this._g(':and'); }
    public set and(v: BooleanValue | undefined) { this._s(':and', v); }

}
/** Defines the Filter Class. Serialized as `x14:filter` */
export class Filter extends OxmlLeafElement {

    public static override _Q = 'x14:filter';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the IconFilter Class. Serialized as `x14:iconFilter` */
export class IconFilter extends OxmlLeafElement {

    public static override _Q = 'x14:iconFilter';
    public static override _A = [':iconSet',':iconId',];
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): IconSetTypeValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetTypeValues | undefined) { this._s(':iconSet', v); }
    /** iconId. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the Id Class. Serialized as `x14:id` */
export class Id extends OxmlLeafTextElement {

    public static override _Q = 'x14:id';

}
/** Defines the CacheField Class. Serialized as `x14:cacheField` */
export class CacheField extends OxmlLeafElement {

    public static override _Q = 'x14:cacheField';
    public static override _A = [':ignore',];
    /** ignore. Serialized as `:ignore` */
    public get ignore(): BooleanValue | undefined { return this._g(':ignore'); }
    public set ignore(v: BooleanValue | undefined) { this._s(':ignore', v); }

}
/** Defines the PivotHierarchy Class. Serialized as `x14:pivotHierarchy` */
export class PivotHierarchy extends OxmlLeafElement {

    public static override _Q = 'x14:pivotHierarchy';
    public static override _A = [':ignore',];
    /** ignore. Serialized as `:ignore` */
    public get ignore(): BooleanValue | undefined { return this._g(':ignore'); }
    public set ignore(v: BooleanValue | undefined) { this._s(':ignore', v); }

}
/** Defines the OleItem Class. Serialized as `x14:oleItem` */
export class OleItem extends OxmlCompositeElement<DdeValues> {

    public static override _Q = 'x14:oleItem';
    public static override _A = [':name',':icon',':advise',':preferPic',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** icon. Serialized as `:icon` */
    public get icon(): BooleanValue | undefined { return this._g(':icon'); }
    public set icon(v: BooleanValue | undefined) { this._s(':icon', v); }
    /** advise. Serialized as `:advise` */
    public get advise(): BooleanValue | undefined { return this._g(':advise'); }
    public set advise(v: BooleanValue | undefined) { this._s(':advise', v); }
    /** preferPic. Serialized as `:preferPic` */
    public get preferPicture(): BooleanValue | undefined { return this._g(':preferPic'); }
    public set preferPicture(v: BooleanValue | undefined) { this._s(':preferPic', v); }
    /** Returns DdeValues. */
    public get ddeValues(): DdeValues | undefined { return this._f(DdeValues); }

}
/** Defines the DifferentialFormats Class. Serialized as `x14:dxfs` */
export class DifferentialFormats extends OxmlCompositeElement<XDifferentialFormat> {

    public static override _Q = 'x14:dxfs';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the SlicerStyles Class. Serialized as `x14:slicerStyles` */
export class SlicerStyles extends OxmlCompositeElement<SlicerStyle> {

    public static override _Q = 'x14:slicerStyles';
    public static override _A = [':defaultSlicerStyle',];
    /** defaultSlicerStyle. Serialized as `:defaultSlicerStyle` */
    public get defaultSlicerStyle(): StringValue | undefined { return this._g(':defaultSlicerStyle'); }
    public set defaultSlicerStyle(v: StringValue | undefined) { this._s(':defaultSlicerStyle', v); }

}
/** Defines the Table Class. Serialized as `x14:table` */
export class Table extends OxmlLeafElement {

    public static override _Q = 'x14:table';
    public static override _A = [':altText',':altTextSummary',];
    /** altText. Serialized as `:altText` */
    public get altText(): StringValue | undefined { return this._g(':altText'); }
    public set altText(v: StringValue | undefined) { this._s(':altText', v); }
    /** altTextSummary. Serialized as `:altTextSummary` */
    public get altTextSummary(): StringValue | undefined { return this._g(':altTextSummary'); }
    public set altTextSummary(v: StringValue | undefined) { this._s(':altTextSummary', v); }

}
/** Defines the Connection Class. Serialized as `x14:connection` */
export class Connection extends OxmlCompositeElement<CalculatedMembers> {

    public static override _Q = 'x14:connection';
    public static override _A = [':culture',':embeddedDataId',];
    /** culture. Serialized as `:culture` */
    public get culture(): StringValue | undefined { return this._g(':culture'); }
    public set culture(v: StringValue | undefined) { this._s(':culture', v); }
    /** embeddedDataId. Serialized as `:embeddedDataId` */
    public get embeddedDataId(): StringValue | undefined { return this._g(':embeddedDataId'); }
    public set embeddedDataId(v: StringValue | undefined) { this._s(':embeddedDataId', v); }
    /** Returns CalculatedMembers. */
    public get calculatedMembers(): CalculatedMembers | undefined { return this._f(CalculatedMembers); }

}
/** Defines the PivotCacheDefinition Class. Serialized as `x14:pivotCacheDefinition` */
export class PivotCacheDefinition extends OxmlLeafElement {

    public static override _Q = 'x14:pivotCacheDefinition';
    public static override _A = [':slicerData',':pivotCacheId',':supportSubqueryNonVisual',':supportSubqueryCalcMem',':supportAddCalcMems',];
    /** slicerData. Serialized as `:slicerData` */
    public get slicerData(): BooleanValue | undefined { return this._g(':slicerData'); }
    public set slicerData(v: BooleanValue | undefined) { this._s(':slicerData', v); }
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    public get pivotCacheId(): UInt32Value | undefined { return this._g(':pivotCacheId'); }
    public set pivotCacheId(v: UInt32Value | undefined) { this._s(':pivotCacheId', v); }
    /** supportSubqueryNonVisual. Serialized as `:supportSubqueryNonVisual` */
    public get supportSubqueryNonVisual(): BooleanValue | undefined { return this._g(':supportSubqueryNonVisual'); }
    public set supportSubqueryNonVisual(v: BooleanValue | undefined) { this._s(':supportSubqueryNonVisual', v); }
    /** supportSubqueryCalcMem. Serialized as `:supportSubqueryCalcMem` */
    public get supportSubqueryCalcMem(): BooleanValue | undefined { return this._g(':supportSubqueryCalcMem'); }
    public set supportSubqueryCalcMem(v: BooleanValue | undefined) { this._s(':supportSubqueryCalcMem', v); }
    /** supportAddCalcMems. Serialized as `:supportAddCalcMems` */
    public get supportAddCalcMems(): BooleanValue | undefined { return this._g(':supportAddCalcMems'); }
    public set supportAddCalcMems(v: BooleanValue | undefined) { this._s(':supportAddCalcMems', v); }

}
/** Defines the PivotTableDefinition Class. Serialized as `x14:pivotTableDefinition` */
export class PivotTableDefinition extends OxmlCompositeElement<PivotEdits | PivotChanges | ConditionalFormats> {

    public static override _Q = 'x14:pivotTableDefinition';
    public static override _A = [':fillDownLabelsDefault',':visualTotalsForSets',':calculatedMembersInFilters',':altText',':altTextSummary',':enableEdit',':autoApply',':allocationMethod',':weightExpression',':hideValuesRow',];
    /** fillDownLabelsDefault. Serialized as `:fillDownLabelsDefault` */
    public get fillDownLabelsDefault(): BooleanValue | undefined { return this._g(':fillDownLabelsDefault'); }
    public set fillDownLabelsDefault(v: BooleanValue | undefined) { this._s(':fillDownLabelsDefault', v); }
    /** visualTotalsForSets. Serialized as `:visualTotalsForSets` */
    public get visualTotalsForSets(): BooleanValue | undefined { return this._g(':visualTotalsForSets'); }
    public set visualTotalsForSets(v: BooleanValue | undefined) { this._s(':visualTotalsForSets', v); }
    /** calculatedMembersInFilters. Serialized as `:calculatedMembersInFilters` */
    public get calculatedMembersInFilters(): BooleanValue | undefined { return this._g(':calculatedMembersInFilters'); }
    public set calculatedMembersInFilters(v: BooleanValue | undefined) { this._s(':calculatedMembersInFilters', v); }
    /** altText. Serialized as `:altText` */
    public get altText(): StringValue | undefined { return this._g(':altText'); }
    public set altText(v: StringValue | undefined) { this._s(':altText', v); }
    /** altTextSummary. Serialized as `:altTextSummary` */
    public get altTextSummary(): StringValue | undefined { return this._g(':altTextSummary'); }
    public set altTextSummary(v: StringValue | undefined) { this._s(':altTextSummary', v); }
    /** enableEdit. Serialized as `:enableEdit` */
    public get enableEdit(): BooleanValue | undefined { return this._g(':enableEdit'); }
    public set enableEdit(v: BooleanValue | undefined) { this._s(':enableEdit', v); }
    /** autoApply. Serialized as `:autoApply` */
    public get autoApply(): BooleanValue | undefined { return this._g(':autoApply'); }
    public set autoApply(v: BooleanValue | undefined) { this._s(':autoApply', v); }
    /** allocationMethod. Serialized as `:allocationMethod` */
    public get allocationMethod(): AllocationMethodValues | undefined { return this._g(':allocationMethod'); }
    public set allocationMethod(v: AllocationMethodValues | undefined) { this._s(':allocationMethod', v); }
    /** weightExpression. Serialized as `:weightExpression` */
    public get weightExpression(): StringValue | undefined { return this._g(':weightExpression'); }
    public set weightExpression(v: StringValue | undefined) { this._s(':weightExpression', v); }
    /** hideValuesRow. Serialized as `:hideValuesRow` */
    public get hideValuesRow(): BooleanValue | undefined { return this._g(':hideValuesRow'); }
    public set hideValuesRow(v: BooleanValue | undefined) { this._s(':hideValuesRow', v); }
    /** Returns PivotEdits. */
    public get pivotEdits(): PivotEdits | undefined { return this._f(PivotEdits); }
    /** Returns PivotChanges. */
    public get pivotChanges(): PivotChanges | undefined { return this._f(PivotChanges); }
    /** Returns ConditionalFormats. */
    public get conditionalFormats(): ConditionalFormats | undefined { return this._f(ConditionalFormats); }

}
/** Defines the PivotField Class. Serialized as `x14:pivotField` */
export class PivotField extends OxmlLeafElement {

    public static override _Q = 'x14:pivotField';
    public static override _A = [':fillDownLabels',':ignore',];
    /** fillDownLabels. Serialized as `:fillDownLabels` */
    public get fillDownLabels(): BooleanValue | undefined { return this._g(':fillDownLabels'); }
    public set fillDownLabels(v: BooleanValue | undefined) { this._s(':fillDownLabels', v); }
    /** ignore. Serialized as `:ignore` */
    public get ignore(): BooleanValue | undefined { return this._g(':ignore'); }
    public set ignore(v: BooleanValue | undefined) { this._s(':ignore', v); }

}
/** Defines the DataField Class. Serialized as `x14:dataField` */
export class DataField extends OxmlLeafElement {

    public static override _Q = 'x14:dataField';
    public static override _A = [':pivotShowAs',':sourceField',':uniqueName',];
    /** pivotShowAs. Serialized as `:pivotShowAs` */
    public get pivotShowAs(): PivotShowAsValues | undefined { return this._g(':pivotShowAs'); }
    public set pivotShowAs(v: PivotShowAsValues | undefined) { this._s(':pivotShowAs', v); }
    /** sourceField. Serialized as `:sourceField` */
    public get sourceField(): UInt32Value | undefined { return this._g(':sourceField'); }
    public set sourceField(v: UInt32Value | undefined) { this._s(':sourceField', v); }
    /** uniqueName. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }

}
/** Defines the CacheHierarchy Class. Serialized as `x14:cacheHierarchy` */
export class CacheHierarchy extends OxmlCompositeElement<SetLevels> {

    public static override _Q = 'x14:cacheHierarchy';
    public static override _A = [':flattenHierarchies',':measuresSet',':hierarchizeDistinct',':ignore',];
    /** flattenHierarchies. Serialized as `:flattenHierarchies` */
    public get flattenHierarchies(): BooleanValue | undefined { return this._g(':flattenHierarchies'); }
    public set flattenHierarchies(v: BooleanValue | undefined) { this._s(':flattenHierarchies', v); }
    /** measuresSet. Serialized as `:measuresSet` */
    public get measuresSet(): BooleanValue | undefined { return this._g(':measuresSet'); }
    public set measuresSet(v: BooleanValue | undefined) { this._s(':measuresSet', v); }
    /** hierarchizeDistinct. Serialized as `:hierarchizeDistinct` */
    public get hierarchizeDistinct(): BooleanValue | undefined { return this._g(':hierarchizeDistinct'); }
    public set hierarchizeDistinct(v: BooleanValue | undefined) { this._s(':hierarchizeDistinct', v); }
    /** ignore. Serialized as `:ignore` */
    public get ignore(): BooleanValue | undefined { return this._g(':ignore'); }
    public set ignore(v: BooleanValue | undefined) { this._s(':ignore', v); }
    /** Returns SetLevels. */
    public get setLevels(): SetLevels | undefined { return this._f(SetLevels); }

}
/** Defines the CalculatedMember Class. Serialized as `x14:calculatedMember` */
export class CalculatedMember extends OxmlCompositeElement<TupleSet> {

    public static override _Q = 'x14:calculatedMember';
    public static override _A = [':displayFolder',':flattenHierarchies',':dynamicSet',':hierarchizeDistinct',':mdxLong',];
    /** displayFolder. Serialized as `:displayFolder` */
    public get displayFolder(): StringValue | undefined { return this._g(':displayFolder'); }
    public set displayFolder(v: StringValue | undefined) { this._s(':displayFolder', v); }
    /** flattenHierarchies. Serialized as `:flattenHierarchies` */
    public get flattenHierarchies(): BooleanValue | undefined { return this._g(':flattenHierarchies'); }
    public set flattenHierarchies(v: BooleanValue | undefined) { this._s(':flattenHierarchies', v); }
    /** dynamicSet. Serialized as `:dynamicSet` */
    public get dynamicSet(): BooleanValue | undefined { return this._g(':dynamicSet'); }
    public set dynamicSet(v: BooleanValue | undefined) { this._s(':dynamicSet', v); }
    /** hierarchizeDistinct. Serialized as `:hierarchizeDistinct` */
    public get hierarchizeDistinct(): BooleanValue | undefined { return this._g(':hierarchizeDistinct'); }
    public set hierarchizeDistinct(v: BooleanValue | undefined) { this._s(':hierarchizeDistinct', v); }
    /** mdxLong. Serialized as `:mdxLong` */
    public get mdxLong(): StringValue | undefined { return this._g(':mdxLong'); }
    public set mdxLong(v: StringValue | undefined) { this._s(':mdxLong', v); }
    /** Returns TupleSet. */
    public get tupleSet(): TupleSet | undefined { return this._f(TupleSet); }

}
/** Defines the WorkbookProperties Class. Serialized as `x14:workbookPr` */
export class WorkbookProperties extends OxmlLeafElement {

    public static override _Q = 'x14:workbookPr';
    public static override _A = [':defaultImageDpi',':discardImageEditData',':accuracyVersion',];
    /** defaultImageDpi. Serialized as `:defaultImageDpi` */
    public get defaultImageDpi(): UInt32Value | undefined { return this._g(':defaultImageDpi'); }
    public set defaultImageDpi(v: UInt32Value | undefined) { this._s(':defaultImageDpi', v); }
    /** discardImageEditData. Serialized as `:discardImageEditData` */
    public get discardImageEditData(): BooleanValue | undefined { return this._g(':discardImageEditData'); }
    public set discardImageEditData(v: BooleanValue | undefined) { this._s(':discardImageEditData', v); }
    /** accuracyVersion. Serialized as `:accuracyVersion` */
    public get accuracyVersion(): UInt32Value | undefined { return this._g(':accuracyVersion'); }
    public set accuracyVersion(v: UInt32Value | undefined) { this._s(':accuracyVersion', v); }

}
/** Defines the SlicerCaches Class. Serialized as `x14:slicerCaches` */
export class SlicerCaches extends OxmlCompositeElement<SlicerCache> {

    public static override _Q = 'x14:slicerCaches';

}
/** Defines the PivotCaches Class. Serialized as `x14:pivotCaches` */
export class PivotCaches extends OxmlCompositeElement<XPivotCache> {

    public static override _Q = 'x14:pivotCaches';

}
/** Defines the DefinedNames Class. Serialized as `x14:definedNames` */
export class DefinedNames extends OxmlCompositeElement<DefinedName> {

    public static override _Q = 'x14:definedNames';

}
/** Defines the IgnoredErrors Class. Serialized as `x14:ignoredErrors` */
export class IgnoredErrors extends OxmlCompositeElement<IgnoredError | ExtensionList> {

    public static override _Q = 'x14:ignoredErrors';

}
/** Defines the ProtectedRanges Class. Serialized as `x14:protectedRanges` */
export class ProtectedRanges extends OxmlCompositeElement<ProtectedRange> {

    public static override _Q = 'x14:protectedRanges';

}
/** Defines the SlicerList Class. Serialized as `x14:slicerList` */
export class SlicerList extends OxmlCompositeElement<SlicerRef> {

    public static override _Q = 'x14:slicerList';

}
/** Defines the SparklineGroups Class. Serialized as `x14:sparklineGroups` */
export class SparklineGroups extends OxmlCompositeElement<SparklineGroup> {

    public static override _Q = 'x14:sparklineGroups';

}
/** Defines the DataValidations Class. Serialized as `x14:dataValidations` */
export class DataValidations extends OxmlCompositeElement<DataValidation> {

    public static override _Q = 'x14:dataValidations';
    public static override _A = [':disablePrompts',':xWindow',':yWindow',':count',];
    /** disablePrompts. Serialized as `:disablePrompts` */
    public get disablePrompts(): BooleanValue | undefined { return this._g(':disablePrompts'); }
    public set disablePrompts(v: BooleanValue | undefined) { this._s(':disablePrompts', v); }
    /** xWindow. Serialized as `:xWindow` */
    public get xWindow(): UInt32Value | undefined { return this._g(':xWindow'); }
    public set xWindow(v: UInt32Value | undefined) { this._s(':xWindow', v); }
    /** yWindow. Serialized as `:yWindow` */
    public get yWindow(): UInt32Value | undefined { return this._g(':yWindow'); }
    public set yWindow(v: UInt32Value | undefined) { this._s(':yWindow', v); }
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ConditionalFormattings Class. Serialized as `x14:conditionalFormattings` */
export class ConditionalFormattings extends OxmlCompositeElement<ConditionalFormatting> {

    public static override _Q = 'x14:conditionalFormattings';

}

export function initOffice2010ExcelNamespace() {
    SlicerCacheDefinitionExtensionList._C = {
        'x:ext': XSlicerCacheDefinitionExtension,
    };
    SlicerCacheData._C = {
        'x14:olap': OlapSlicerCache,
        'x14:tabular': TabularSlicerCache,
    };
    SlicerCachePivotTables._C = {
        'x14:pivotTable': SlicerCachePivotTable,
    };
    TabularSlicerCacheItem._D = {
        ':x': new OxmlAttr(':x', OxmlType.UInt32Value),
        ':s': new OxmlAttr(':s', OxmlType.BooleanValue),
        ':nd': new OxmlAttr(':nd', OxmlType.BooleanValue),
    };
    TabularSlicerCacheItems._C = {
        'x14:i': TabularSlicerCacheItem,
    };
    TabularSlicerCacheItems._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    OlapSlicerCacheSelection._C = {
        'x14:p': OlapSlicerCacheItemParent,
    };
    OlapSlicerCacheSelection._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
    };
    OlapSlicerCacheSelections._C = {
        'x14:selection': OlapSlicerCacheSelection,
    };
    OlapSlicerCacheSelections._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    OlapSlicerCacheLevelsData._C = {
        'x14:level': OlapSlicerCacheLevelData,
    };
    OlapSlicerCacheLevelsData._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    OlapSlicerCacheLevelData._C = {
        'x14:ranges': OlapSlicerCacheRanges,
    };
    OlapSlicerCacheLevelData._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':sourceCaption': new OxmlAttr(':sourceCaption', OxmlType.StringValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':sortOrder': new OxmlAttr(':sortOrder', OxmlType.EnumValue, OlapSlicerCacheSortOrderValuesArray),
        ':crossFilter': new OxmlAttr(':crossFilter', OxmlType.EnumValue, SlicerCacheCrossFilterValuesArray),
    };
    OlapSlicerCacheRanges._C = {
        'x14:range': OlapSlicerCacheRange,
    };
    OlapSlicerCacheRange._C = {
        'x14:i': OlapSlicerCacheItem,
    };
    OlapSlicerCacheRange._D = {
        ':startItem': new OxmlAttr(':startItem', OxmlType.UInt32Value),
    };
    OlapSlicerCacheItem._C = {
        'x14:p': OlapSlicerCacheItemParent,
    };
    OlapSlicerCacheItem._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':nd': new OxmlAttr(':nd', OxmlType.BooleanValue),
    };
    OlapSlicerCacheItemParent._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
    };
    SlicerCachePivotTable._D = {
        ':tabId': new OxmlAttr(':tabId', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    TabularSlicerCache._C = {
        'x14:items': TabularSlicerCacheItems,
        'x14:extLst': ExtensionList,
    };
    TabularSlicerCache._D = {
        ':pivotCacheId': new OxmlAttr(':pivotCacheId', OxmlType.UInt32Value),
        ':sortOrder': new OxmlAttr(':sortOrder', OxmlType.EnumValue, TabularSlicerCacheSortOrderValuesArray),
        ':customListSort': new OxmlAttr(':customListSort', OxmlType.BooleanValue),
        ':showMissing': new OxmlAttr(':showMissing', OxmlType.BooleanValue),
        ':crossFilter': new OxmlAttr(':crossFilter', OxmlType.EnumValue, SlicerCacheCrossFilterValuesArray),
    };
    OlapSlicerCache._C = {
        'x14:levels': OlapSlicerCacheLevelsData,
        'x14:selections': OlapSlicerCacheSelections,
        'x14:extLst': ExtensionList,
    };
    OlapSlicerCache._D = {
        ':pivotCacheId': new OxmlAttr(':pivotCacheId', OxmlType.UInt32Value),
    };
    Slicer._C = {
        'x14:extLst': ExtensionList,
    };
    Slicer._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':cache': new OxmlAttr(':cache', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':startItem': new OxmlAttr(':startItem', OxmlType.UInt32Value),
        ':columnCount': new OxmlAttr(':columnCount', OxmlType.UInt32Value),
        ':showCaption': new OxmlAttr(':showCaption', OxmlType.BooleanValue),
        ':level': new OxmlAttr(':level', OxmlType.UInt32Value),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
        ':lockedPosition': new OxmlAttr(':lockedPosition', OxmlType.BooleanValue),
        ':rowHeight': new OxmlAttr(':rowHeight', OxmlType.UInt32Value),
    };
    ListItems._C = {
        'x14:item': ListItem,
        'x14:extLst': ExtensionList,
    };
    ListItem._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    CustomFilter._D = {
        ':operator': new OxmlAttr(':operator', OxmlType.EnumValue, FilterOperatorValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ProtectedRange._C = {
        'xne:sqref': XneReferenceSequence,
    };
    ProtectedRange._D = {
        ':password': new OxmlAttr(':password', OxmlType.HexBinaryValue),
        ':algorithmName': new OxmlAttr(':algorithmName', OxmlType.StringValue),
        ':hashValue': new OxmlAttr(':hashValue', OxmlType.Base64BinaryValue),
        ':saltValue': new OxmlAttr(':saltValue', OxmlType.Base64BinaryValue),
        ':spinCount': new OxmlAttr(':spinCount', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':securityDescriptor': new OxmlAttr(':securityDescriptor', OxmlType.StringValue),
    };
    IgnoredError._C = {
        'xne:sqref': XneReferenceSequence,
    };
    IgnoredError._D = {
        ':evalError': new OxmlAttr(':evalError', OxmlType.BooleanValue),
        ':twoDigitTextYear': new OxmlAttr(':twoDigitTextYear', OxmlType.BooleanValue),
        ':numberStoredAsText': new OxmlAttr(':numberStoredAsText', OxmlType.BooleanValue),
        ':formula': new OxmlAttr(':formula', OxmlType.BooleanValue),
        ':formulaRange': new OxmlAttr(':formulaRange', OxmlType.BooleanValue),
        ':unlockedFormula': new OxmlAttr(':unlockedFormula', OxmlType.BooleanValue),
        ':emptyCellReference': new OxmlAttr(':emptyCellReference', OxmlType.BooleanValue),
        ':listDataValidation': new OxmlAttr(':listDataValidation', OxmlType.BooleanValue),
        ':calculatedColumn': new OxmlAttr(':calculatedColumn', OxmlType.BooleanValue),
    };
    SlicerStyleElement._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, SlicerStyleTypeValuesArray),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
    };
    SlicerStyle._C = {
        'x14:slicerStyleElements': SlicerStyleElements,
    };
    SlicerStyle._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    PivotAreas._C = {
        'x:pivotArea': XPivotArea,
    };
    PivotAreas._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConditionalFormat._C = {
        'x14:pivotAreas': PivotAreas,
        'x14:extLst': ExtensionList,
    };
    ConditionalFormat._D = {
        ':scope': new OxmlAttr(':scope', OxmlType.EnumValue, ScopeValuesArray),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, RuleValuesArray),
        ':priority': new OxmlAttr(':priority', OxmlType.UInt32Value),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    DdeValues._C = {
        'x:value': XValue,
    };
    DdeValues._D = {
        ':rows': new OxmlAttr(':rows', OxmlType.UInt32Value),
        ':cols': new OxmlAttr(':cols', OxmlType.UInt32Value),
    };
    SlicerStyleElements._C = {
        'x14:slicerStyleElement': SlicerStyleElement,
    };
    PivotEditValue._D = {
        ':valueType': new OxmlAttr(':valueType', OxmlType.EnumValue, PivotEditValueTypeValuesArray),
    };
    PivotChange._C = {
        'x14:editValue': PivotEditValue,
        'x14:tupleItems': TupleItems,
        'x14:extLst': ExtensionList,
    };
    PivotChange._D = {
        ':allocationMethod': new OxmlAttr(':allocationMethod', OxmlType.EnumValue, AllocationMethodValuesArray),
        ':weightExpression': new OxmlAttr(':weightExpression', OxmlType.StringValue),
    };
    PivotArea._C = {
        'x:references': XPivotAreaReferences,
        'x:extLst': XExtensionList,
    };
    PivotArea._D = {
        ':field': new OxmlAttr(':field', OxmlType.Int32Value),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, PivotAreaValuesArray),
        ':dataOnly': new OxmlAttr(':dataOnly', OxmlType.BooleanValue),
        ':labelOnly': new OxmlAttr(':labelOnly', OxmlType.BooleanValue),
        ':grandRow': new OxmlAttr(':grandRow', OxmlType.BooleanValue),
        ':grandCol': new OxmlAttr(':grandCol', OxmlType.BooleanValue),
        ':cacheIndex': new OxmlAttr(':cacheIndex', OxmlType.BooleanValue),
        ':outline': new OxmlAttr(':outline', OxmlType.BooleanValue),
        ':offset': new OxmlAttr(':offset', OxmlType.StringValue),
        ':collapsedLevelsAreSubtotals': new OxmlAttr(':collapsedLevelsAreSubtotals', OxmlType.BooleanValue),
        ':axis': new OxmlAttr(':axis', OxmlType.EnumValue, PivotTableAxisValuesArray),
        ':fieldPosition': new OxmlAttr(':fieldPosition', OxmlType.UInt32Value),
    };
    TupleItems._C = {
        'x14:tupleItem': Xstring,
    };
    PivotUserEdit._C = {
        'xne:f': XneFormula,
        'x14:editValue': PivotEditValue,
    };
    PivotEdit._C = {
        'x14:userEdit': PivotUserEdit,
        'x14:tupleItems': TupleItems,
        'x14:pivotArea': PivotArea,
        'x14:extLst': ExtensionList,
    };
    CalculatedMembers._C = {
        'x:calculatedMember': XCalculatedMember,
    };
    CalculatedMembers._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConditionalFormats._C = {
        'x14:conditionalFormat': ConditionalFormat,
    };
    ConditionalFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotChanges._C = {
        'x14:pivotChange': PivotChange,
    };
    PivotEdits._C = {
        'x14:pivotEdit': PivotEdit,
    };
    ConditionalFormattingIcon._D = {
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    ConditionalFormattingValueObject._C = {
        'xne:f': XneFormula,
        'x14:extLst': ExtensionList,
    };
    ConditionalFormattingValueObject._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConditionalFormattingValueObjectTypeValuesArray),
        ':gte': new OxmlAttr(':gte', OxmlType.BooleanValue),
    };
    DifferentialType._C = {
        'x:font': XFont,
        'x:numFmt': XNumberingFormat,
        'x:fill': XFill,
        'x:alignment': XAlignment,
        'x:border': XBorder,
        'x:protection': XProtection,
        'x:extLst': XExtensionList,
    };
    IconSet._C = {
        'x14:cfvo': ConditionalFormattingValueObject,
        'x14:cfIcon': ConditionalFormattingIcon,
    };
    IconSet._D = {
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':showValue': new OxmlAttr(':showValue', OxmlType.BooleanValue),
        ':percent': new OxmlAttr(':percent', OxmlType.BooleanValue),
        ':reverse': new OxmlAttr(':reverse', OxmlType.BooleanValue),
        ':custom': new OxmlAttr(':custom', OxmlType.BooleanValue),
    };
    DataBar._C = {
        'x14:cfvo': ConditionalFormattingValueObject,
        'x14:fillColor': FillColor,
        'x14:borderColor': BorderColor,
        'x14:negativeFillColor': NegativeFillColor,
        'x14:negativeBorderColor': NegativeBorderColor,
        'x14:axisColor': BarAxisColor,
    };
    DataBar._D = {
        ':minLength': new OxmlAttr(':minLength', OxmlType.UInt32Value),
        ':maxLength': new OxmlAttr(':maxLength', OxmlType.UInt32Value),
        ':showValue': new OxmlAttr(':showValue', OxmlType.BooleanValue),
        ':border': new OxmlAttr(':border', OxmlType.BooleanValue),
        ':gradient': new OxmlAttr(':gradient', OxmlType.BooleanValue),
        ':direction': new OxmlAttr(':direction', OxmlType.EnumValue, DataBarDirectionValuesArray),
        ':negativeBarColorSameAsPositive': new OxmlAttr(':negativeBarColorSameAsPositive', OxmlType.BooleanValue),
        ':negativeBarBorderColorSameAsPositive': new OxmlAttr(':negativeBarBorderColorSameAsPositive', OxmlType.BooleanValue),
        ':axisPosition': new OxmlAttr(':axisPosition', OxmlType.EnumValue, DataBarAxisPositionValuesArray),
    };
    ColorScale._C = {
        'x14:cfvo': ConditionalFormattingValueObject,
        'x14:color': Color,
    };
    SetLevels._C = {
        'x14:setLevel': SetLevel,
    };
    SetLevels._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SetLevel._D = {
        ':hierarchy': new OxmlAttr(':hierarchy', OxmlType.Int32Value),
    };
    TupleSetRowItem._D = {
        ':u': new OxmlAttr(':u', OxmlType.StringValue),
        ':d': new OxmlAttr(':d', OxmlType.StringValue),
    };
    TupleSetRow._C = {
        'x14:rowItem': TupleSetRowItem,
    };
    TupleSetHeader._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':hierarchyName': new OxmlAttr(':hierarchyName', OxmlType.StringValue),
    };
    TupleSetRows._C = {
        'x14:row': TupleSetRow,
    };
    TupleSetHeaders._C = {
        'x14:header': TupleSetHeader,
    };
    TupleSet._C = {
        'x14:headers': TupleSetHeaders,
        'x14:rows': TupleSetRows,
    };
    TupleSet._D = {
        ':rowCount': new OxmlAttr(':rowCount', OxmlType.UInt32Value),
        ':columnCount': new OxmlAttr(':columnCount', OxmlType.UInt32Value),
    };
    ArgumentDescription._D = {
        ':index': new OxmlAttr(':index', OxmlType.UInt32Value),
    };
    ArgumentDescriptions._C = {
        'x14:argumentDescription': ArgumentDescription,
    };
    ArgumentDescriptions._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    DefinedName._C = {
        'x14:argumentDescriptions': ArgumentDescriptions,
    };
    DefinedName._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    SlicerCache._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SlicerRef._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Sparkline._C = {
        'xne:f': XneFormula,
        'xne:sqref': XneReferenceSequence,
    };
    Sparklines._C = {
        'x14:sparkline': Sparkline,
    };
    ColorType._D = {
        ':auto': new OxmlAttr(':auto', OxmlType.BooleanValue),
        ':indexed': new OxmlAttr(':indexed', OxmlType.UInt32Value),
        ':rgb': new OxmlAttr(':rgb', OxmlType.HexBinaryValue),
        ':theme': new OxmlAttr(':theme', OxmlType.UInt32Value),
        ':tint': new OxmlAttr(':tint', OxmlType.DoubleValue),
    };
    SparklineGroup._C = {
        'x14:colorSeries': SeriesColor,
        'x14:colorNegative': NegativeColor,
        'x14:colorAxis': AxisColor,
        'x14:colorMarkers': MarkersColor,
        'x14:colorFirst': FirstMarkerColor,
        'x14:colorLast': LastMarkerColor,
        'x14:colorHigh': HighMarkerColor,
        'x14:colorLow': LowMarkerColor,
        'xne:f': XneFormula,
        'x14:sparklines': Sparklines,
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
    DataValidationFormulaType._C = {
        'xne:f': XneFormula,
    };
    DataValidationForumla2._C = {
        'xne:f': XneFormula,
    };
    DataValidationForumla1._C = {
        'xne:f': XneFormula,
    };
    DataValidation._C = {
        'x14:formula1': DataValidationForumla1,
        'x14:formula2': DataValidationForumla2,
        'xne:sqref': XneReferenceSequence,
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
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    ConditionalFormattingRule._C = {
        'xne:f': XneFormula,
        'x14:colorScale': ColorScale,
        'x14:dataBar': DataBar,
        'x14:iconSet': IconSet,
        'x14:dxf': DifferentialType,
        'x14:extLst': ExtensionList,
    };
    ConditionalFormattingRule._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConditionalFormatValuesArray),
        ':priority': new OxmlAttr(':priority', OxmlType.Int32Value),
        ':stopIfTrue': new OxmlAttr(':stopIfTrue', OxmlType.BooleanValue),
        ':aboveAverage': new OxmlAttr(':aboveAverage', OxmlType.BooleanValue),
        ':percent': new OxmlAttr(':percent', OxmlType.BooleanValue),
        ':bottom': new OxmlAttr(':bottom', OxmlType.BooleanValue),
        ':operator': new OxmlAttr(':operator', OxmlType.EnumValue, ConditionalFormattingOperatorValuesArray),
        ':text': new OxmlAttr(':text', OxmlType.StringValue),
        ':timePeriod': new OxmlAttr(':timePeriod', OxmlType.EnumValue, TimePeriodValuesArray),
        ':rank': new OxmlAttr(':rank', OxmlType.UInt32Value),
        ':stdDev': new OxmlAttr(':stdDev', OxmlType.Int32Value),
        ':equalAverage': new OxmlAttr(':equalAverage', OxmlType.BooleanValue),
        ':activePresent': new OxmlAttr(':activePresent', OxmlType.BooleanValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    ConditionalFormatting._C = {
        'x14:cfRule': ConditionalFormattingRule,
        'xne:sqref': XneReferenceSequence,
        'x14:extLst': ExtensionList,
    };
    ConditionalFormatting._D = {
        ':pivot': new OxmlAttr(':pivot', OxmlType.BooleanValue),
    };
    SlicerCacheDefinition._C = {
        'x14:pivotTables': SlicerCachePivotTables,
        'x14:data': SlicerCacheData,
        'x14:extLst': SlicerCacheDefinitionExtensionList,
    };
    SlicerCacheDefinition._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sourceName': new OxmlAttr(':sourceName', OxmlType.StringValue),
    };
    Slicers._C = {
        'x14:slicer': Slicer,
    };
    FormControlProperties._C = {
        'x14:itemLst': ListItems,
        'x14:extLst': ExtensionList,
    };
    FormControlProperties._D = {
        ':objectType': new OxmlAttr(':objectType', OxmlType.EnumValue, ObjectTypeValuesArray),
        ':checked': new OxmlAttr(':checked', OxmlType.EnumValue, CheckedValuesArray),
        ':colored': new OxmlAttr(':colored', OxmlType.BooleanValue),
        ':dropLines': new OxmlAttr(':dropLines', OxmlType.UInt32Value),
        ':dropStyle': new OxmlAttr(':dropStyle', OxmlType.EnumValue, DropStyleValuesArray),
        ':dx': new OxmlAttr(':dx', OxmlType.UInt32Value),
        ':firstButton': new OxmlAttr(':firstButton', OxmlType.BooleanValue),
        ':fmlaGroup': new OxmlAttr(':fmlaGroup', OxmlType.StringValue),
        ':fmlaLink': new OxmlAttr(':fmlaLink', OxmlType.StringValue),
        ':fmlaRange': new OxmlAttr(':fmlaRange', OxmlType.StringValue),
        ':fmlaTxbx': new OxmlAttr(':fmlaTxbx', OxmlType.StringValue),
        ':horiz': new OxmlAttr(':horiz', OxmlType.BooleanValue),
        ':inc': new OxmlAttr(':inc', OxmlType.UInt32Value),
        ':justLastX': new OxmlAttr(':justLastX', OxmlType.BooleanValue),
        ':lockText': new OxmlAttr(':lockText', OxmlType.BooleanValue),
        ':max': new OxmlAttr(':max', OxmlType.UInt32Value),
        ':min': new OxmlAttr(':min', OxmlType.UInt32Value),
        ':multiSel': new OxmlAttr(':multiSel', OxmlType.StringValue),
        ':noThreeD': new OxmlAttr(':noThreeD', OxmlType.BooleanValue),
        ':noThreeD2': new OxmlAttr(':noThreeD2', OxmlType.BooleanValue),
        ':page': new OxmlAttr(':page', OxmlType.UInt32Value),
        ':sel': new OxmlAttr(':sel', OxmlType.UInt32Value),
        ':seltype': new OxmlAttr(':seltype', OxmlType.EnumValue, SelectionTypeValuesArray),
        ':textHAlign': new OxmlAttr(':textHAlign', OxmlType.EnumValue, TextHorizontalAlignmentValuesArray),
        ':textVAlign': new OxmlAttr(':textVAlign', OxmlType.EnumValue, TextVerticalAlignmentValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
        ':widthMin': new OxmlAttr(':widthMin', OxmlType.UInt32Value),
        ':editVal': new OxmlAttr(':editVal', OxmlType.EnumValue, EditValidationValuesArray),
        ':multiLine': new OxmlAttr(':multiLine', OxmlType.BooleanValue),
        ':verticalBar': new OxmlAttr(':verticalBar', OxmlType.BooleanValue),
        ':passwordEdit': new OxmlAttr(':passwordEdit', OxmlType.BooleanValue),
    };
    DatastoreItem._C = {
        'x14:extLst': ExtensionList,
    };
    DatastoreItem._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    SourceConnection._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    SortCondition._D = {
        ':descending': new OxmlAttr(':descending', OxmlType.BooleanValue),
        ':sortBy': new OxmlAttr(':sortBy', OxmlType.EnumValue, SortByValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':customList': new OxmlAttr(':customList', OxmlType.StringValue),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    CustomFilters._C = {
        'x14:customFilter': CustomFilter,
    };
    CustomFilters._D = {
        ':and': new OxmlAttr(':and', OxmlType.BooleanValue),
    };
    Filter._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    IconFilter._D = {
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetTypeValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    CacheField._D = {
        ':ignore': new OxmlAttr(':ignore', OxmlType.BooleanValue),
    };
    PivotHierarchy._D = {
        ':ignore': new OxmlAttr(':ignore', OxmlType.BooleanValue),
    };
    OleItem._C = {
        'x14:values': DdeValues,
    };
    OleItem._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':icon': new OxmlAttr(':icon', OxmlType.BooleanValue),
        ':advise': new OxmlAttr(':advise', OxmlType.BooleanValue),
        ':preferPic': new OxmlAttr(':preferPic', OxmlType.BooleanValue),
    };
    DifferentialFormats._C = {
        'x:dxf': XDifferentialFormat,
    };
    DifferentialFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SlicerStyles._C = {
        'x14:slicerStyle': SlicerStyle,
    };
    SlicerStyles._D = {
        ':defaultSlicerStyle': new OxmlAttr(':defaultSlicerStyle', OxmlType.StringValue),
    };
    Table._D = {
        ':altText': new OxmlAttr(':altText', OxmlType.StringValue),
        ':altTextSummary': new OxmlAttr(':altTextSummary', OxmlType.StringValue),
    };
    Connection._C = {
        'x14:calculatedMembers': CalculatedMembers,
    };
    Connection._D = {
        ':culture': new OxmlAttr(':culture', OxmlType.StringValue),
        ':embeddedDataId': new OxmlAttr(':embeddedDataId', OxmlType.StringValue),
    };
    PivotCacheDefinition._D = {
        ':slicerData': new OxmlAttr(':slicerData', OxmlType.BooleanValue),
        ':pivotCacheId': new OxmlAttr(':pivotCacheId', OxmlType.UInt32Value),
        ':supportSubqueryNonVisual': new OxmlAttr(':supportSubqueryNonVisual', OxmlType.BooleanValue),
        ':supportSubqueryCalcMem': new OxmlAttr(':supportSubqueryCalcMem', OxmlType.BooleanValue),
        ':supportAddCalcMems': new OxmlAttr(':supportAddCalcMems', OxmlType.BooleanValue),
    };
    PivotTableDefinition._C = {
        'x14:pivotEdits': PivotEdits,
        'x14:pivotChanges': PivotChanges,
        'x14:conditionalFormats': ConditionalFormats,
    };
    PivotTableDefinition._D = {
        ':fillDownLabelsDefault': new OxmlAttr(':fillDownLabelsDefault', OxmlType.BooleanValue),
        ':visualTotalsForSets': new OxmlAttr(':visualTotalsForSets', OxmlType.BooleanValue),
        ':calculatedMembersInFilters': new OxmlAttr(':calculatedMembersInFilters', OxmlType.BooleanValue),
        ':altText': new OxmlAttr(':altText', OxmlType.StringValue),
        ':altTextSummary': new OxmlAttr(':altTextSummary', OxmlType.StringValue),
        ':enableEdit': new OxmlAttr(':enableEdit', OxmlType.BooleanValue),
        ':autoApply': new OxmlAttr(':autoApply', OxmlType.BooleanValue),
        ':allocationMethod': new OxmlAttr(':allocationMethod', OxmlType.EnumValue, AllocationMethodValuesArray),
        ':weightExpression': new OxmlAttr(':weightExpression', OxmlType.StringValue),
        ':hideValuesRow': new OxmlAttr(':hideValuesRow', OxmlType.BooleanValue),
    };
    PivotField._D = {
        ':fillDownLabels': new OxmlAttr(':fillDownLabels', OxmlType.BooleanValue),
        ':ignore': new OxmlAttr(':ignore', OxmlType.BooleanValue),
    };
    DataField._D = {
        ':pivotShowAs': new OxmlAttr(':pivotShowAs', OxmlType.EnumValue, PivotShowAsValuesArray),
        ':sourceField': new OxmlAttr(':sourceField', OxmlType.UInt32Value),
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
    };
    CacheHierarchy._C = {
        'x14:setLevels': SetLevels,
    };
    CacheHierarchy._D = {
        ':flattenHierarchies': new OxmlAttr(':flattenHierarchies', OxmlType.BooleanValue),
        ':measuresSet': new OxmlAttr(':measuresSet', OxmlType.BooleanValue),
        ':hierarchizeDistinct': new OxmlAttr(':hierarchizeDistinct', OxmlType.BooleanValue),
        ':ignore': new OxmlAttr(':ignore', OxmlType.BooleanValue),
    };
    CalculatedMember._C = {
        'x14:tupleSet': TupleSet,
    };
    CalculatedMember._D = {
        ':displayFolder': new OxmlAttr(':displayFolder', OxmlType.StringValue),
        ':flattenHierarchies': new OxmlAttr(':flattenHierarchies', OxmlType.BooleanValue),
        ':dynamicSet': new OxmlAttr(':dynamicSet', OxmlType.BooleanValue),
        ':hierarchizeDistinct': new OxmlAttr(':hierarchizeDistinct', OxmlType.BooleanValue),
        ':mdxLong': new OxmlAttr(':mdxLong', OxmlType.StringValue),
    };
    WorkbookProperties._D = {
        ':defaultImageDpi': new OxmlAttr(':defaultImageDpi', OxmlType.UInt32Value),
        ':discardImageEditData': new OxmlAttr(':discardImageEditData', OxmlType.BooleanValue),
        ':accuracyVersion': new OxmlAttr(':accuracyVersion', OxmlType.UInt32Value),
    };
    SlicerCaches._C = {
        'x14:slicerCache': SlicerCache,
    };
    PivotCaches._C = {
        'x:pivotCache': XPivotCache,
    };
    DefinedNames._C = {
        'x14:definedName': DefinedName,
    };
    IgnoredErrors._C = {
        'x14:ignoredError': IgnoredError,
        'x14:extLst': ExtensionList,
    };
    ProtectedRanges._C = {
        'x14:protectedRange': ProtectedRange,
    };
    SlicerList._C = {
        'x14:slicer': SlicerRef,
    };
    SparklineGroups._C = {
        'x14:sparklineGroup': SparklineGroup,
    };
    DataValidations._C = {
        'x14:dataValidation': DataValidation,
    };
    DataValidations._D = {
        ':disablePrompts': new OxmlAttr(':disablePrompts', OxmlType.BooleanValue),
        ':xWindow': new OxmlAttr(':xWindow', OxmlType.UInt32Value),
        ':yWindow': new OxmlAttr(':yWindow', OxmlType.UInt32Value),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConditionalFormattings._C = {
        'x14:conditionalFormatting': ConditionalFormatting,
    };
    return {
        prefix: 'x14',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2009/9/main',
    };
}
