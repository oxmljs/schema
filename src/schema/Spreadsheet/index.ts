import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { DoubleValue } from '../../framework/types/DoubleValue';
import { HexBinaryValue } from '../../framework/types/HexBinaryValue';
import { Base64BinaryValue } from '../../framework/types/Base64BinaryValue';
import { ListValue } from '../../framework/types/ListValue';
import { ByteValue } from '../../framework/types/ByteValue';
import { DateTimeValue } from '../../framework/types/DateTimeValue';
import { UInt16Value } from '../../framework/types/UInt16Value';
import { Int32Value } from '../../framework/types/Int32Value';
import { SpaceProcessingModeValues, SpaceProcessingModeValuesArray } from '..';import { PivotCacheDefinition as X14PivotCacheDefinition } from '../Office2010/Excel';
import { PivotCacheDecoupled as X15PivotCacheDecoupled } from '../Office2013/Excel';
import { TimelinePivotCacheDefinition as X15TimelinePivotCacheDefinition } from '../Office2013/Excel';
import { PivotCacheIdVersion as X15PivotCacheIdVersion } from '../Office2013/Excel';
import { Xsdboolean as XxpimXsdboolean } from '../Office2021/Excel/Pivot';
import { CacheVersionInfo as XxpviCacheVersionInfo } from '../Office/SpreadSheetML/Y2022/PivotVersionInfo';
import { PivotTableDefinition as X14PivotTableDefinition } from '../Office2010/Excel';
import { PivotTableData as X15PivotTableData } from '../Office2013/Excel';
import { PivotTableUISettings as X15PivotTableUISettings } from '../Office2013/Excel';
import { PivotVersionInfo as XxpviPivotVersionInfo } from '../Office/SpreadSheetML/Y2022/PivotVersionInfo';
import { DefinedNames as X14DefinedNames } from '../Office2010/Excel';
import { PivotCaches as X14PivotCaches } from '../Office2010/Excel';
import { SlicerCaches as X14SlicerCaches } from '../Office2010/Excel';
import { SlicerCaches as X15SlicerCaches } from '../Office2013/Excel';
import { WorkbookProperties as X14WorkbookProperties } from '../Office2010/Excel';
import { PivotCaches as X15PivotCaches } from '../Office2013/Excel';
import { PivotTableReferences as X15PivotTableReferences } from '../Office2013/Excel';
import { TimelineCachePivotCaches as X15TimelineCachePivotCaches } from '../Office2013/Excel';
import { TimelineCacheReferences as X15TimelineCacheReferences } from '../Office2013/Excel';
import { WorkbookProperties as X15WorkbookProperties } from '../Office2013/Excel';
import { DataModel as X15DataModel } from '../Office2013/Excel';
import { DifferentialFormats as X14DifferentialFormats } from '../Office2010/Excel';
import { SlicerStyles as X14SlicerStyles } from '../Office2010/Excel';
import { DifferentialFormats as X15DifferentialFormats } from '../Office2013/Excel';
import { TimelineStyles as X15TimelineStyles } from '../Office2013/Excel';
import { ConditionalFormattings as X14ConditionalFormattings } from '../Office2010/Excel';
import { DataValidations as X14DataValidations } from '../Office2010/Excel';
import { SparklineGroups as X14SparklineGroups } from '../Office2010/Excel';
import { SlicerList as X14SlicerList } from '../Office2010/Excel';
import { ProtectedRanges as X14ProtectedRanges } from '../Office2010/Excel';
import { IgnoredErrors as X14IgnoredErrors } from '../Office2010/Excel';
import { WebExtensions as X15WebExtensions } from '../Office2013/Excel';
import { TimelineReferences as X15TimelineReferences } from '../Office2013/Excel';
import { DataField as X14DataField } from '../Office2010/Excel';
import { DataField as X15DataField } from '../Office2013/Excel';
import { CalculatedMember as X14CalculatedMember } from '../Office2010/Excel';
import { CalculatedMember as X15CalculatedMember } from '../Office2013/Excel';
import { CacheHierarchy as X14CacheHierarchy } from '../Office2010/Excel';
import { CacheHierarchy as X15CacheHierarchy } from '../Office2013/Excel';
import { CacheField as X14CacheField } from '../Office2010/Excel';
import { CachedUniqueNames as X15CachedUniqueNames } from '../Office2013/Excel';
import { Connection as X14Connection } from '../Office2010/Excel';
import { Connection as X15Connection } from '../Office2013/Excel';
import { QueryTable as X15QueryTable } from '../Office2013/Excel';
import { PivotFilter as X15PivotFilter } from '../Office2013/Excel';
import { MovingPeriodState as X15MovingPeriodState } from '../Office2013/Excel';
import { SlicerCachePivotTables as X15SlicerCachePivotTables } from '../Office2013/Excel';
import { TableSlicerCache as X15TableSlicerCache } from '../Office2013/Excel';
import { SlicerCacheHideItemsWithNoData as X15SlicerCacheHideItemsWithNoData } from '../Office2013/Excel';
import { Filter as X14Filter } from '../Office2010/Excel';
import { SourceConnection as X14SourceConnection } from '../Office2010/Excel';
import { PivotField as X14PivotField } from '../Office2010/Excel';
import { PivotHierarchy as X14PivotHierarchy } from '../Office2010/Excel';
import { Id as X14Id } from '../Office2010/Excel';
import { ColumnId as XdrColumnId } from '../Drawing/Spreadsheet';
import { ColumnOffset as XdrColumnOffset } from '../Drawing/Spreadsheet';
import { RowId as XdrRowId } from '../Drawing/Spreadsheet';
import { RowOffset as XdrRowOffset } from '../Drawing/Spreadsheet';
import { Table as X14Table } from '../Office2010/Excel';
import { ExternalBookAlternateUrls as Xxl21ExternalBookAlternateUrls } from '../Office/SpreadSheetML/Y2021/ExtLinks2021';
import { OleItem as X14OleItem } from '../Office2010/Excel';
import { List as X12acList } from '../Office2010/ExcelAc';
import { SortCondition as X14SortCondition } from '../Office2010/Excel';
import { CustomFilters as X14CustomFilters } from '../Office2010/Excel';
import { IconFilter as X14IconFilter } from '../Office2010/Excel';
import { AbsolutePath as X15acAbsolutePath } from '../Office2013/ExcelAc';


export enum FilterOperatorValues {
    /** Equal. Serialized value: `equal` */
    Equal = 'equal',
    /** Less Than. Serialized value: `lessThan` */
    LessThan = 'lessThan',
    /** Less Than Or Equal. Serialized value: `lessThanOrEqual` */
    LessThanOrEqual = 'lessThanOrEqual',
    /** Not Equal. Serialized value: `notEqual` */
    NotEqual = 'notEqual',
    /** Greater Than Or Equal. Serialized value: `greaterThanOrEqual` */
    GreaterThanOrEqual = 'greaterThanOrEqual',
    /** Greater Than. Serialized value: `greaterThan` */
    GreaterThan = 'greaterThan',
}

export const FilterOperatorValuesArray = [
    FilterOperatorValues.Equal,
    FilterOperatorValues.LessThan,
    FilterOperatorValues.LessThanOrEqual,
    FilterOperatorValues.NotEqual,
    FilterOperatorValues.GreaterThanOrEqual,
    FilterOperatorValues.GreaterThan,
] as const;

export enum DynamicFilterValues {
    /** Null. Serialized value: `null` */
    Null = 'null',
    /** Above Average. Serialized value: `aboveAverage` */
    AboveAverage = 'aboveAverage',
    /** Below Average. Serialized value: `belowAverage` */
    BelowAverage = 'belowAverage',
    /** Tomorrow. Serialized value: `tomorrow` */
    Tomorrow = 'tomorrow',
    /** Today. Serialized value: `today` */
    Today = 'today',
    /** Yesterday. Serialized value: `yesterday` */
    Yesterday = 'yesterday',
    /** Next Week. Serialized value: `nextWeek` */
    NextWeek = 'nextWeek',
    /** This Week. Serialized value: `thisWeek` */
    ThisWeek = 'thisWeek',
    /** Last Week. Serialized value: `lastWeek` */
    LastWeek = 'lastWeek',
    /** Next Month. Serialized value: `nextMonth` */
    NextMonth = 'nextMonth',
    /** This Month. Serialized value: `thisMonth` */
    ThisMonth = 'thisMonth',
    /** Last Month. Serialized value: `lastMonth` */
    LastMonth = 'lastMonth',
    /** Next Quarter. Serialized value: `nextQuarter` */
    NextQuarter = 'nextQuarter',
    /** This Quarter. Serialized value: `thisQuarter` */
    ThisQuarter = 'thisQuarter',
    /** Last Quarter. Serialized value: `lastQuarter` */
    LastQuarter = 'lastQuarter',
    /** Next Year. Serialized value: `nextYear` */
    NextYear = 'nextYear',
    /** This Year. Serialized value: `thisYear` */
    ThisYear = 'thisYear',
    /** Last Year. Serialized value: `lastYear` */
    LastYear = 'lastYear',
    /** Year To Date. Serialized value: `yearToDate` */
    YearToDate = 'yearToDate',
    /** 1st Quarter. Serialized value: `Q1` */
    Quarter1 = 'Q1',
    /** 2nd Quarter. Serialized value: `Q2` */
    Quarter2 = 'Q2',
    /** 3rd Quarter. Serialized value: `Q3` */
    Quarter3 = 'Q3',
    /** 4th Quarter. Serialized value: `Q4` */
    Quarter4 = 'Q4',
    /** 1st Month. Serialized value: `M1` */
    January = 'M1',
    /** 2nd Month. Serialized value: `M2` */
    February = 'M2',
    /** 3rd Month. Serialized value: `M3` */
    March = 'M3',
    /** 4th Month. Serialized value: `M4` */
    April = 'M4',
    /** 5th Month. Serialized value: `M5` */
    May = 'M5',
    /** 6th Month. Serialized value: `M6` */
    June = 'M6',
    /** 7th Month. Serialized value: `M7` */
    July = 'M7',
    /** 8th Month. Serialized value: `M8` */
    August = 'M8',
    /** 9th Month. Serialized value: `M9` */
    September = 'M9',
    /** 10th Month. Serialized value: `M10` */
    October = 'M10',
    /** 11th Month. Serialized value: `M11` */
    November = 'M11',
    /** 12th Month. Serialized value: `M12` */
    December = 'M12',
}

export const DynamicFilterValuesArray = [
    DynamicFilterValues.Null,
    DynamicFilterValues.AboveAverage,
    DynamicFilterValues.BelowAverage,
    DynamicFilterValues.Tomorrow,
    DynamicFilterValues.Today,
    DynamicFilterValues.Yesterday,
    DynamicFilterValues.NextWeek,
    DynamicFilterValues.ThisWeek,
    DynamicFilterValues.LastWeek,
    DynamicFilterValues.NextMonth,
    DynamicFilterValues.ThisMonth,
    DynamicFilterValues.LastMonth,
    DynamicFilterValues.NextQuarter,
    DynamicFilterValues.ThisQuarter,
    DynamicFilterValues.LastQuarter,
    DynamicFilterValues.NextYear,
    DynamicFilterValues.ThisYear,
    DynamicFilterValues.LastYear,
    DynamicFilterValues.YearToDate,
    DynamicFilterValues.Quarter1,
    DynamicFilterValues.Quarter2,
    DynamicFilterValues.Quarter3,
    DynamicFilterValues.Quarter4,
    DynamicFilterValues.January,
    DynamicFilterValues.February,
    DynamicFilterValues.March,
    DynamicFilterValues.April,
    DynamicFilterValues.May,
    DynamicFilterValues.June,
    DynamicFilterValues.July,
    DynamicFilterValues.August,
    DynamicFilterValues.September,
    DynamicFilterValues.October,
    DynamicFilterValues.November,
    DynamicFilterValues.December,
] as const;

export enum IconSetValues {
    /** 3 Arrows. Serialized value: `3Arrows` */
    ThreeArrows = '3Arrows',
    /** 3 Arrows  (Gray). Serialized value: `3ArrowsGray` */
    ThreeArrowsGray = '3ArrowsGray',
    /** 3 Flags. Serialized value: `3Flags` */
    ThreeFlags = '3Flags',
    /** 3 Traffic Lights. Serialized value: `3TrafficLights1` */
    ThreeTrafficLights1 = '3TrafficLights1',
    /** 3 Traffic Lights Black. Serialized value: `3TrafficLights2` */
    ThreeTrafficLights2 = '3TrafficLights2',
    /** 3 Signs. Serialized value: `3Signs` */
    ThreeSigns = '3Signs',
    /** 3 Symbols Circled. Serialized value: `3Symbols` */
    ThreeSymbols = '3Symbols',
    /** 3 Symbols. Serialized value: `3Symbols2` */
    ThreeSymbols2 = '3Symbols2',
    /** 4 Arrows. Serialized value: `4Arrows` */
    FourArrows = '4Arrows',
    /** 4 Arrows (Gray). Serialized value: `4ArrowsGray` */
    FourArrowsGray = '4ArrowsGray',
    /** 4 Red To Black. Serialized value: `4RedToBlack` */
    FourRedToBlack = '4RedToBlack',
    /** 4 Ratings. Serialized value: `4Rating` */
    FourRating = '4Rating',
    /** 4 Traffic Lights. Serialized value: `4TrafficLights` */
    FourTrafficLights = '4TrafficLights',
    /** 5 Arrows. Serialized value: `5Arrows` */
    FiveArrows = '5Arrows',
    /** 5 Arrows (Gray). Serialized value: `5ArrowsGray` */
    FiveArrowsGray = '5ArrowsGray',
    /** 5 Ratings Icon Set. Serialized value: `5Rating` */
    FiveRating = '5Rating',
    /** 5 Quarters. Serialized value: `5Quarters` */
    FiveQuarters = '5Quarters',
}

export const IconSetValuesArray = [
    IconSetValues.ThreeArrows,
    IconSetValues.ThreeArrowsGray,
    IconSetValues.ThreeFlags,
    IconSetValues.ThreeTrafficLights1,
    IconSetValues.ThreeTrafficLights2,
    IconSetValues.ThreeSigns,
    IconSetValues.ThreeSymbols,
    IconSetValues.ThreeSymbols2,
    IconSetValues.FourArrows,
    IconSetValues.FourArrowsGray,
    IconSetValues.FourRedToBlack,
    IconSetValues.FourRating,
    IconSetValues.FourTrafficLights,
    IconSetValues.FiveArrows,
    IconSetValues.FiveArrowsGray,
    IconSetValues.FiveRating,
    IconSetValues.FiveQuarters,
] as const;

export enum SortByValues {
    /** Value. Serialized value: `value` */
    Value = 'value',
    /** Sort by Cell Color. Serialized value: `cellColor` */
    CellColor = 'cellColor',
    /** Sort by Font Color. Serialized value: `fontColor` */
    FontColor = 'fontColor',
    /** Sort by Icon. Serialized value: `icon` */
    Icon = 'icon',
}

export const SortByValuesArray = [
    SortByValues.Value,
    SortByValues.CellColor,
    SortByValues.FontColor,
    SortByValues.Icon,
] as const;

export enum SortMethodValues {
    /** Sort by Stroke. Serialized value: `stroke` */
    Stroke = 'stroke',
    /** PinYin Sort. Serialized value: `pinYin` */
    PinYin = 'pinYin',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const SortMethodValuesArray = [
    SortMethodValues.Stroke,
    SortMethodValues.PinYin,
    SortMethodValues.None,
] as const;

export enum CalendarValues {
    /** No Calendar Type. Serialized value: `none` */
    None = 'none',
    /** Gregorian. Serialized value: `gregorian` */
    Gregorian = 'gregorian',
    /** Gregorian (U.S.) Calendar. Serialized value: `gregorianUs` */
    GregorianUs = 'gregorianUs',
    /** Japanese Emperor Era Calendar. Serialized value: `japan` */
    Japan = 'japan',
    /** Taiwan Era Calendar. Serialized value: `taiwan` */
    Taiwan = 'taiwan',
    /** Korean Tangun Era Calendar. Serialized value: `korea` */
    Korea = 'korea',
    /** Hijri (Arabic Lunar) Calendar. Serialized value: `hijri` */
    Hijri = 'hijri',
    /** Thai Calendar. Serialized value: `thai` */
    Thai = 'thai',
    /** Hebrew (Lunar) Calendar. Serialized value: `hebrew` */
    Hebrew = 'hebrew',
    /** Gregorian Middle East French Calendar. Serialized value: `gregorianMeFrench` */
    GregorianMiddleEastFrench = 'gregorianMeFrench',
    /** Gregorian Arabic Calendar. Serialized value: `gregorianArabic` */
    GregorianArabic = 'gregorianArabic',
    /** Gregorian Transliterated English Calendar. Serialized value: `gregorianXlitEnglish` */
    GregorianTransliteratedEnglish = 'gregorianXlitEnglish',
    /** Gregorian Transliterated French Calendar. Serialized value: `gregorianXlitFrench` */
    GregorianTransliteratedFrench = 'gregorianXlitFrench',
}

export const CalendarValuesArray = [
    CalendarValues.None,
    CalendarValues.Gregorian,
    CalendarValues.GregorianUs,
    CalendarValues.Japan,
    CalendarValues.Taiwan,
    CalendarValues.Korea,
    CalendarValues.Hijri,
    CalendarValues.Thai,
    CalendarValues.Hebrew,
    CalendarValues.GregorianMiddleEastFrench,
    CalendarValues.GregorianArabic,
    CalendarValues.GregorianTransliteratedEnglish,
    CalendarValues.GregorianTransliteratedFrench,
] as const;

export enum DateTimeGroupingValues {
    /** Group by Year. Serialized value: `year` */
    Year = 'year',
    /** Month. Serialized value: `month` */
    Month = 'month',
    /** Day. Serialized value: `day` */
    Day = 'day',
    /** Group by Hour. Serialized value: `hour` */
    Hour = 'hour',
    /** Group by Minute. Serialized value: `minute` */
    Minute = 'minute',
    /** Second. Serialized value: `second` */
    Second = 'second',
}

export const DateTimeGroupingValuesArray = [
    DateTimeGroupingValues.Year,
    DateTimeGroupingValues.Month,
    DateTimeGroupingValues.Day,
    DateTimeGroupingValues.Hour,
    DateTimeGroupingValues.Minute,
    DateTimeGroupingValues.Second,
] as const;

export enum HtmlFormattingValues {
    /** No Formatting. Serialized value: `none` */
    None = 'none',
    /** Honor Rich Text. Serialized value: `rtf` */
    HonorRichText = 'rtf',
    /** All. Serialized value: `all` */
    All = 'all',
}

export const HtmlFormattingValuesArray = [
    HtmlFormattingValues.None,
    HtmlFormattingValues.HonorRichText,
    HtmlFormattingValues.All,
] as const;

export enum ParameterValues {
    /** Prompt on Refresh. Serialized value: `prompt` */
    Prompt = 'prompt',
    /** Value. Serialized value: `value` */
    Value = 'value',
    /** Parameter From Cell. Serialized value: `cell` */
    Cell = 'cell',
}

export const ParameterValuesArray = [
    ParameterValues.Prompt,
    ParameterValues.Value,
    ParameterValues.Cell,
] as const;

export enum FileTypeValues {
    /** Macintosh. Serialized value: `mac` */
    Mac = 'mac',
    /** Windows (ANSI). Serialized value: `win` */
    Win = 'win',
    /** DOS. Serialized value: `dos` */
    Dos = 'dos',
}

export const FileTypeValuesArray = [
    FileTypeValues.Mac,
    FileTypeValues.Win,
    FileTypeValues.Dos,
] as const;

export enum QualifierValues {
    /** Double Quote. Serialized value: `doubleQuote` */
    DoubleQuote = 'doubleQuote',
    /** Single Quote. Serialized value: `singleQuote` */
    SingleQuote = 'singleQuote',
    /** No Text Qualifier. Serialized value: `none` */
    None = 'none',
}

export const QualifierValuesArray = [
    QualifierValues.DoubleQuote,
    QualifierValues.SingleQuote,
    QualifierValues.None,
] as const;

export enum ExternalConnectionValues {
    /** General. Serialized value: `general` */
    General = 'general',
    /** Text. Serialized value: `text` */
    Text = 'text',
    /** Month Day Year. Serialized value: `MDY` */
    MonthDayYear = 'MDY',
    /** Day Month Year. Serialized value: `DMY` */
    DayMonthYear = 'DMY',
    /** Year Month Day. Serialized value: `YMD` */
    YearMonthDay = 'YMD',
    /** Month Day Year. Serialized value: `MYD` */
    MonthYearDay = 'MYD',
    /** Day Year Month. Serialized value: `DYM` */
    DayYearMonth = 'DYM',
    /** Year Day Month. Serialized value: `YDM` */
    YearDayMonth = 'YDM',
    /** Skip Field. Serialized value: `skip` */
    Skip = 'skip',
    /** East Asian Year Month Day. Serialized value: `EMD` */
    EMD = 'EMD',
}

export const ExternalConnectionValuesArray = [
    ExternalConnectionValues.General,
    ExternalConnectionValues.Text,
    ExternalConnectionValues.MonthDayYear,
    ExternalConnectionValues.DayMonthYear,
    ExternalConnectionValues.YearMonthDay,
    ExternalConnectionValues.MonthYearDay,
    ExternalConnectionValues.DayYearMonth,
    ExternalConnectionValues.YearDayMonth,
    ExternalConnectionValues.Skip,
    ExternalConnectionValues.EMD,
] as const;

export enum CredentialsMethodValues {
    /** Integrated Authentication. Serialized value: `integrated` */
    Integrated = 'integrated',
    /** No Credentials. Serialized value: `none` */
    None = 'none',
    /** Stored Credentials. Serialized value: `stored` */
    Stored = 'stored',
}

export const CredentialsMethodValuesArray = [
    CredentialsMethodValues.Integrated,
    CredentialsMethodValues.None,
    CredentialsMethodValues.Stored,
] as const;

export enum SourceValues {
    /** Worksheet. Serialized value: `worksheet` */
    Worksheet = 'worksheet',
    /** External. Serialized value: `external` */
    External = 'external',
    /** Consolidation Ranges. Serialized value: `consolidation` */
    Consolidation = 'consolidation',
    /** Scenario Summary Report. Serialized value: `scenario` */
    Scenario = 'scenario',
}

export const SourceValuesArray = [
    SourceValues.Worksheet,
    SourceValues.External,
    SourceValues.Consolidation,
    SourceValues.Scenario,
] as const;

export enum GroupByValues {
    /** Group By Numeric Ranges. Serialized value: `range` */
    Range = 'range',
    /** Seconds. Serialized value: `seconds` */
    Seconds = 'seconds',
    /** Minutes. Serialized value: `minutes` */
    Minutes = 'minutes',
    /** Hours. Serialized value: `hours` */
    Hours = 'hours',
    /** Days. Serialized value: `days` */
    Days = 'days',
    /** Months. Serialized value: `months` */
    Months = 'months',
    /** Quarters. Serialized value: `quarters` */
    Quarters = 'quarters',
    /** Years. Serialized value: `years` */
    Years = 'years',
}

export const GroupByValuesArray = [
    GroupByValues.Range,
    GroupByValues.Seconds,
    GroupByValues.Minutes,
    GroupByValues.Hours,
    GroupByValues.Days,
    GroupByValues.Months,
    GroupByValues.Quarters,
    GroupByValues.Years,
] as const;

export enum SortValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Ascending. Serialized value: `ascending` */
    Ascending = 'ascending',
    /** Descending. Serialized value: `descending` */
    Descending = 'descending',
    /** Ascending Alpha. Serialized value: `ascendingAlpha` */
    AscendingAlpha = 'ascendingAlpha',
    /** Alphabetic Order Descending. Serialized value: `descendingAlpha` */
    DescendingAlpha = 'descendingAlpha',
    /** Ascending Natural. Serialized value: `ascendingNatural` */
    AscendingNatural = 'ascendingNatural',
    /** Natural Order Descending. Serialized value: `descendingNatural` */
    DescendingNatural = 'descendingNatural',
}

export const SortValuesArray = [
    SortValues.None,
    SortValues.Ascending,
    SortValues.Descending,
    SortValues.AscendingAlpha,
    SortValues.DescendingAlpha,
    SortValues.AscendingNatural,
    SortValues.DescendingNatural,
] as const;

export enum ScopeValues {
    /** Selection. Serialized value: `selection` */
    Selection = 'selection',
    /** Data Fields. Serialized value: `data` */
    Data = 'data',
    /** Field Intersections. Serialized value: `field` */
    Field = 'field',
}

export const ScopeValuesArray = [
    ScopeValues.Selection,
    ScopeValues.Data,
    ScopeValues.Field,
] as const;

export enum RuleValues {
    /** Top N None. Serialized value: `none` */
    None = 'none',
    /** All. Serialized value: `all` */
    All = 'all',
    /** Row Top N. Serialized value: `row` */
    Row = 'row',
    /** Column Top N. Serialized value: `column` */
    Column = 'column',
}

export const RuleValuesArray = [
    RuleValues.None,
    RuleValues.All,
    RuleValues.Row,
    RuleValues.Column,
] as const;

export enum ShowDataAsValues {
    /** Normal Data Type. Serialized value: `normal` */
    Normal = 'normal',
    /** Difference. Serialized value: `difference` */
    Difference = 'difference',
    /** Percentage Of. Serialized value: `percent` */
    Percent = 'percent',
    /** Percentage Difference. Serialized value: `percentDiff` */
    PercentageDifference = 'percentDiff',
    /** Running Total. Serialized value: `runTotal` */
    RunTotal = 'runTotal',
    /** Percentage of Row. Serialized value: `percentOfRow` */
    PercentOfRaw = 'percentOfRow',
    /** Percent of Column. Serialized value: `percentOfCol` */
    PercentOfColumn = 'percentOfCol',
    /** Percentage of Total. Serialized value: `percentOfTotal` */
    PercentOfTotal = 'percentOfTotal',
    /** Index. Serialized value: `index` */
    Index = 'index',
}

export const ShowDataAsValuesArray = [
    ShowDataAsValues.Normal,
    ShowDataAsValues.Difference,
    ShowDataAsValues.Percent,
    ShowDataAsValues.PercentageDifference,
    ShowDataAsValues.RunTotal,
    ShowDataAsValues.PercentOfRaw,
    ShowDataAsValues.PercentOfColumn,
    ShowDataAsValues.PercentOfTotal,
    ShowDataAsValues.Index,
] as const;

export enum ItemValues {
    /** Data. Serialized value: `data` */
    Data = 'data',
    /** Default. Serialized value: `default` */
    Default = 'default',
    /** Sum. Serialized value: `sum` */
    Sum = 'sum',
    /** CountA. Serialized value: `countA` */
    CountA = 'countA',
    /** Average. Serialized value: `avg` */
    Average = 'avg',
    /** Max. Serialized value: `max` */
    Maximum = 'max',
    /** Min. Serialized value: `min` */
    Minimum = 'min',
    /** Product. Serialized value: `product` */
    Product = 'product',
    /** Count. Serialized value: `count` */
    Count = 'count',
    /** stdDev. Serialized value: `stdDev` */
    StandardDeviation = 'stdDev',
    /** StdDevP. Serialized value: `stdDevP` */
    StandardDeviationP = 'stdDevP',
    /** Var. Serialized value: `var` */
    Variance = 'var',
    /** VarP. Serialized value: `varP` */
    VarianceP = 'varP',
    /** Grand Total Item. Serialized value: `grand` */
    Grand = 'grand',
    /** Blank Pivot Item. Serialized value: `blank` */
    Blank = 'blank',
}

export const ItemValuesArray = [
    ItemValues.Data,
    ItemValues.Default,
    ItemValues.Sum,
    ItemValues.CountA,
    ItemValues.Average,
    ItemValues.Maximum,
    ItemValues.Minimum,
    ItemValues.Product,
    ItemValues.Count,
    ItemValues.StandardDeviation,
    ItemValues.StandardDeviationP,
    ItemValues.Variance,
    ItemValues.VarianceP,
    ItemValues.Grand,
    ItemValues.Blank,
] as const;

export enum FieldSortValues {
    /** Manual Sort. Serialized value: `manual` */
    Manual = 'manual',
    /** Ascending. Serialized value: `ascending` */
    Ascending = 'ascending',
    /** Descending. Serialized value: `descending` */
    Descending = 'descending',
}

export const FieldSortValuesArray = [
    FieldSortValues.Manual,
    FieldSortValues.Ascending,
    FieldSortValues.Descending,
] as const;

export enum PivotFilterValues {
    /** Unknown. Serialized value: `unknown` */
    Unknown = 'unknown',
    /** Count. Serialized value: `count` */
    Count = 'count',
    /** Percent. Serialized value: `percent` */
    Percent = 'percent',
    /** Sum. Serialized value: `sum` */
    Sum = 'sum',
    /** Caption Equals. Serialized value: `captionEqual` */
    CaptionEqual = 'captionEqual',
    /** Caption Not Equal. Serialized value: `captionNotEqual` */
    CaptionNotEqual = 'captionNotEqual',
    /** Caption Begins With. Serialized value: `captionBeginsWith` */
    CaptionBeginsWith = 'captionBeginsWith',
    /** Caption Does Not Begin With. Serialized value: `captionNotBeginsWith` */
    CaptionNotBeginsWith = 'captionNotBeginsWith',
    /** Caption Ends With. Serialized value: `captionEndsWith` */
    CaptionEndsWith = 'captionEndsWith',
    /** Caption Does Not End With. Serialized value: `captionNotEndsWith` */
    CaptionNotEndsWith = 'captionNotEndsWith',
    /** Caption Contains. Serialized value: `captionContains` */
    CaptionContains = 'captionContains',
    /** Caption Does Not Contain. Serialized value: `captionNotContains` */
    CaptionNotContains = 'captionNotContains',
    /** Caption Is Greater Than. Serialized value: `captionGreaterThan` */
    CaptionGreaterThan = 'captionGreaterThan',
    /** Caption Is Greater Than Or Equal To. Serialized value: `captionGreaterThanOrEqual` */
    CaptionGreaterThanOrEqual = 'captionGreaterThanOrEqual',
    /** Caption Is Less Than. Serialized value: `captionLessThan` */
    CaptionLessThan = 'captionLessThan',
    /** Caption Is Less Than Or Equal To. Serialized value: `captionLessThanOrEqual` */
    CaptionLessThanOrEqual = 'captionLessThanOrEqual',
    /** Caption Is Between. Serialized value: `captionBetween` */
    CaptionBetween = 'captionBetween',
    /** Caption Is Not Between. Serialized value: `captionNotBetween` */
    CaptionNotBetween = 'captionNotBetween',
    /** Value Equal. Serialized value: `valueEqual` */
    ValueEqual = 'valueEqual',
    /** Value Not Equal. Serialized value: `valueNotEqual` */
    ValueNotEqual = 'valueNotEqual',
    /** Value Greater Than. Serialized value: `valueGreaterThan` */
    ValueGreaterThan = 'valueGreaterThan',
    /** Value Greater Than Or Equal To. Serialized value: `valueGreaterThanOrEqual` */
    ValueGreaterThanOrEqual = 'valueGreaterThanOrEqual',
    /** Value Less Than. Serialized value: `valueLessThan` */
    ValueLessThan = 'valueLessThan',
    /** Value Less Than Or Equal To. Serialized value: `valueLessThanOrEqual` */
    ValueLessThanOrEqual = 'valueLessThanOrEqual',
    /** Value Between. Serialized value: `valueBetween` */
    ValueBetween = 'valueBetween',
    /** Value Not Between. Serialized value: `valueNotBetween` */
    ValueNotBetween = 'valueNotBetween',
    /** Date Equals. Serialized value: `dateEqual` */
    DateEqual = 'dateEqual',
    /** Date Does Not Equal. Serialized value: `dateNotEqual` */
    DateNotEqual = 'dateNotEqual',
    /** Date Older Than. Serialized value: `dateOlderThan` */
    DateOlderThan = 'dateOlderThan',
    /** Date Older Than Or Equal. Serialized value: `dateOlderThanOrEqual` */
    DateOlderThanOrEqual = 'dateOlderThanOrEqual',
    /** Date Newer Than. Serialized value: `dateNewerThan` */
    DateNewerThan = 'dateNewerThan',
    /** Date Newer Than or Equal To. Serialized value: `dateNewerThanOrEqual` */
    DateNewerThanOrEqual = 'dateNewerThanOrEqual',
    /** Date Between. Serialized value: `dateBetween` */
    DateBetween = 'dateBetween',
    /** Date Not Between. Serialized value: `dateNotBetween` */
    DateNotBetween = 'dateNotBetween',
    /** Tomorrow. Serialized value: `tomorrow` */
    Tomorrow = 'tomorrow',
    /** Today. Serialized value: `today` */
    Today = 'today',
    /** Yesterday. Serialized value: `yesterday` */
    Yesterday = 'yesterday',
    /** Next Week. Serialized value: `nextWeek` */
    NextWeek = 'nextWeek',
    /** This Week. Serialized value: `thisWeek` */
    ThisWeek = 'thisWeek',
    /** Last Week. Serialized value: `lastWeek` */
    LastWeek = 'lastWeek',
    /** Next Month. Serialized value: `nextMonth` */
    NextMonth = 'nextMonth',
    /** This Month. Serialized value: `thisMonth` */
    ThisMonth = 'thisMonth',
    /** Last Month. Serialized value: `lastMonth` */
    LastMonth = 'lastMonth',
    /** Next Quarter. Serialized value: `nextQuarter` */
    NextQuarter = 'nextQuarter',
    /** This Quarter. Serialized value: `thisQuarter` */
    ThisQuarter = 'thisQuarter',
    /** Last Quarter. Serialized value: `lastQuarter` */
    LastQuarter = 'lastQuarter',
    /** Next Year. Serialized value: `nextYear` */
    NextYear = 'nextYear',
    /** This Year. Serialized value: `thisYear` */
    ThisYear = 'thisYear',
    /** Last Year. Serialized value: `lastYear` */
    LastYear = 'lastYear',
    /** Year-To-Date. Serialized value: `yearToDate` */
    YearToDate = 'yearToDate',
    /** First Quarter. Serialized value: `Q1` */
    Quarter1 = 'Q1',
    /** Second Quarter. Serialized value: `Q2` */
    Quarter2 = 'Q2',
    /** Third Quarter. Serialized value: `Q3` */
    Quarter3 = 'Q3',
    /** Fourth Quarter. Serialized value: `Q4` */
    Quarter4 = 'Q4',
    /** January. Serialized value: `M1` */
    January = 'M1',
    /** Dates in February. Serialized value: `M2` */
    February = 'M2',
    /** Dates in March. Serialized value: `M3` */
    March = 'M3',
    /** Dates in April. Serialized value: `M4` */
    April = 'M4',
    /** Dates in May. Serialized value: `M5` */
    May = 'M5',
    /** Dates in June. Serialized value: `M6` */
    June = 'M6',
    /** Dates in July. Serialized value: `M7` */
    July = 'M7',
    /** Dates in August. Serialized value: `M8` */
    August = 'M8',
    /** Dates in September. Serialized value: `M9` */
    September = 'M9',
    /** Dates in October. Serialized value: `M10` */
    October = 'M10',
    /** Dates in November. Serialized value: `M11` */
    November = 'M11',
    /** Dates in December. Serialized value: `M12` */
    December = 'M12',
}

export const PivotFilterValuesArray = [
    PivotFilterValues.Unknown,
    PivotFilterValues.Count,
    PivotFilterValues.Percent,
    PivotFilterValues.Sum,
    PivotFilterValues.CaptionEqual,
    PivotFilterValues.CaptionNotEqual,
    PivotFilterValues.CaptionBeginsWith,
    PivotFilterValues.CaptionNotBeginsWith,
    PivotFilterValues.CaptionEndsWith,
    PivotFilterValues.CaptionNotEndsWith,
    PivotFilterValues.CaptionContains,
    PivotFilterValues.CaptionNotContains,
    PivotFilterValues.CaptionGreaterThan,
    PivotFilterValues.CaptionGreaterThanOrEqual,
    PivotFilterValues.CaptionLessThan,
    PivotFilterValues.CaptionLessThanOrEqual,
    PivotFilterValues.CaptionBetween,
    PivotFilterValues.CaptionNotBetween,
    PivotFilterValues.ValueEqual,
    PivotFilterValues.ValueNotEqual,
    PivotFilterValues.ValueGreaterThan,
    PivotFilterValues.ValueGreaterThanOrEqual,
    PivotFilterValues.ValueLessThan,
    PivotFilterValues.ValueLessThanOrEqual,
    PivotFilterValues.ValueBetween,
    PivotFilterValues.ValueNotBetween,
    PivotFilterValues.DateEqual,
    PivotFilterValues.DateNotEqual,
    PivotFilterValues.DateOlderThan,
    PivotFilterValues.DateOlderThanOrEqual,
    PivotFilterValues.DateNewerThan,
    PivotFilterValues.DateNewerThanOrEqual,
    PivotFilterValues.DateBetween,
    PivotFilterValues.DateNotBetween,
    PivotFilterValues.Tomorrow,
    PivotFilterValues.Today,
    PivotFilterValues.Yesterday,
    PivotFilterValues.NextWeek,
    PivotFilterValues.ThisWeek,
    PivotFilterValues.LastWeek,
    PivotFilterValues.NextMonth,
    PivotFilterValues.ThisMonth,
    PivotFilterValues.LastMonth,
    PivotFilterValues.NextQuarter,
    PivotFilterValues.ThisQuarter,
    PivotFilterValues.LastQuarter,
    PivotFilterValues.NextYear,
    PivotFilterValues.ThisYear,
    PivotFilterValues.LastYear,
    PivotFilterValues.YearToDate,
    PivotFilterValues.Quarter1,
    PivotFilterValues.Quarter2,
    PivotFilterValues.Quarter3,
    PivotFilterValues.Quarter4,
    PivotFilterValues.January,
    PivotFilterValues.February,
    PivotFilterValues.March,
    PivotFilterValues.April,
    PivotFilterValues.May,
    PivotFilterValues.June,
    PivotFilterValues.July,
    PivotFilterValues.August,
    PivotFilterValues.September,
    PivotFilterValues.October,
    PivotFilterValues.November,
    PivotFilterValues.December,
] as const;

export enum FormatActionValues {
    /** Blank. Serialized value: `blank` */
    Blank = 'blank',
    /** Formatting. Serialized value: `formatting` */
    Formatting = 'formatting',
}

export const FormatActionValuesArray = [
    FormatActionValues.Blank,
    FormatActionValues.Formatting,
] as const;

export enum PivotTableAxisValues {
    /** Row Axis. Serialized value: `axisRow` */
    AxisRow = 'axisRow',
    /** Column Axis. Serialized value: `axisCol` */
    AxisColumn = 'axisCol',
    /** Include Count Filter. Serialized value: `axisPage` */
    AxisPage = 'axisPage',
    /** Values Axis. Serialized value: `axisValues` */
    AxisValues = 'axisValues',
}

export const PivotTableAxisValuesArray = [
    PivotTableAxisValues.AxisRow,
    PivotTableAxisValues.AxisColumn,
    PivotTableAxisValues.AxisPage,
    PivotTableAxisValues.AxisValues,
] as const;

export enum GrowShrinkValues {
    /** Insert and Delete On Refresh. Serialized value: `insertDelete` */
    InsertDelete = 'insertDelete',
    /** Insert and Clear On Refresh. Serialized value: `insertClear` */
    InsertClear = 'insertClear',
    /** Overwrite and Clear On Refresh. Serialized value: `overwriteClear` */
    OverwriteClear = 'overwriteClear',
}

export const GrowShrinkValuesArray = [
    GrowShrinkValues.InsertDelete,
    GrowShrinkValues.InsertClear,
    GrowShrinkValues.OverwriteClear,
] as const;

export enum PhoneticValues {
    /** Half-Width Katakana. Serialized value: `halfwidthKatakana` */
    HalfWidthKatakana = 'halfwidthKatakana',
    /** Full-Width Katakana. Serialized value: `fullwidthKatakana` */
    FullWidthKatakana = 'fullwidthKatakana',
    /** Hiragana. Serialized value: `Hiragana` */
    Hiragana = 'Hiragana',
    /** No Conversion. Serialized value: `noConversion` */
    NoConversion = 'noConversion',
}

export const PhoneticValuesArray = [
    PhoneticValues.HalfWidthKatakana,
    PhoneticValues.FullWidthKatakana,
    PhoneticValues.Hiragana,
    PhoneticValues.NoConversion,
] as const;

export enum PhoneticAlignmentValues {
    /** No Control. Serialized value: `noControl` */
    NoControl = 'noControl',
    /** Left Alignment. Serialized value: `left` */
    Left = 'left',
    /** Center Alignment. Serialized value: `center` */
    Center = 'center',
    /** Distributed. Serialized value: `distributed` */
    Distributed = 'distributed',
}

export const PhoneticAlignmentValuesArray = [
    PhoneticAlignmentValues.NoControl,
    PhoneticAlignmentValues.Left,
    PhoneticAlignmentValues.Center,
    PhoneticAlignmentValues.Distributed,
] as const;

export enum RowColumnActionValues {
    /** Insert Row. Serialized value: `insertRow` */
    InsertRow = 'insertRow',
    /** Delete Row. Serialized value: `deleteRow` */
    DeleteRow = 'deleteRow',
    /** Column Insert. Serialized value: `insertCol` */
    ColumnInsert = 'insertCol',
    /** Delete Column. Serialized value: `deleteCol` */
    DeleteColumn = 'deleteCol',
}

export const RowColumnActionValuesArray = [
    RowColumnActionValues.InsertRow,
    RowColumnActionValues.DeleteRow,
    RowColumnActionValues.ColumnInsert,
    RowColumnActionValues.DeleteColumn,
] as const;

export enum RevisionActionValues {
    /** Add. Serialized value: `add` */
    Add = 'add',
    /** Delete. Serialized value: `delete` */
    Delete = 'delete',
}

export const RevisionActionValuesArray = [
    RevisionActionValues.Add,
    RevisionActionValues.Delete,
] as const;

export enum FormulaExpressionValues {
    /** Reference. Serialized value: `ref` */
    Reference = 'ref',
    /** Reference Is Error. Serialized value: `refError` */
    ReferenceError = 'refError',
    /** Area. Serialized value: `area` */
    Area = 'area',
    /** Area Error. Serialized value: `areaError` */
    AreaError = 'areaError',
    /** Computed Area. Serialized value: `computedArea` */
    ComputedArea = 'computedArea',
}

export const FormulaExpressionValuesArray = [
    FormulaExpressionValues.Reference,
    FormulaExpressionValues.ReferenceError,
    FormulaExpressionValues.Area,
    FormulaExpressionValues.AreaError,
    FormulaExpressionValues.ComputedArea,
] as const;

export enum CellFormulaValues {
    /** Normal. Serialized value: `normal` */
    Normal = 'normal',
    /** Array Entered. Serialized value: `array` */
    Array = 'array',
    /** Table Formula. Serialized value: `dataTable` */
    DataTable = 'dataTable',
    /** Shared Formula. Serialized value: `shared` */
    Shared = 'shared',
}

export const CellFormulaValuesArray = [
    CellFormulaValues.Normal,
    CellFormulaValues.Array,
    CellFormulaValues.DataTable,
    CellFormulaValues.Shared,
] as const;

export enum PaneValues {
    /** Bottom Right Pane. Serialized value: `bottomRight` */
    BottomRight = 'bottomRight',
    /** Top Right Pane. Serialized value: `topRight` */
    TopRight = 'topRight',
    /** Bottom Left Pane. Serialized value: `bottomLeft` */
    BottomLeft = 'bottomLeft',
    /** Top Left Pane. Serialized value: `topLeft` */
    TopLeft = 'topLeft',
}

export const PaneValuesArray = [
    PaneValues.BottomRight,
    PaneValues.TopRight,
    PaneValues.BottomLeft,
    PaneValues.TopLeft,
] as const;

export enum SheetViewValues {
    /** Normal View. Serialized value: `normal` */
    Normal = 'normal',
    /** Page Break Preview. Serialized value: `pageBreakPreview` */
    PageBreakPreview = 'pageBreakPreview',
    /** Page Layout View. Serialized value: `pageLayout` */
    PageLayout = 'pageLayout',
}

export const SheetViewValuesArray = [
    SheetViewValues.Normal,
    SheetViewValues.PageBreakPreview,
    SheetViewValues.PageLayout,
] as const;

export enum DataConsolidateFunctionValues {
    /** Average. Serialized value: `average` */
    Average = 'average',
    /** Count. Serialized value: `count` */
    Count = 'count',
    /** CountNums. Serialized value: `countNums` */
    CountNumbers = 'countNums',
    /** Maximum. Serialized value: `max` */
    Maximum = 'max',
    /** Minimum. Serialized value: `min` */
    Minimum = 'min',
    /** Product. Serialized value: `product` */
    Product = 'product',
    /** StdDev. Serialized value: `stdDev` */
    StandardDeviation = 'stdDev',
    /** StdDevP. Serialized value: `stdDevp` */
    StandardDeviationP = 'stdDevp',
    /** Sum. Serialized value: `sum` */
    Sum = 'sum',
    /** Variance. Serialized value: `var` */
    Variance = 'var',
    /** VarP. Serialized value: `varp` */
    VarianceP = 'varp',
}

export const DataConsolidateFunctionValuesArray = [
    DataConsolidateFunctionValues.Average,
    DataConsolidateFunctionValues.Count,
    DataConsolidateFunctionValues.CountNumbers,
    DataConsolidateFunctionValues.Maximum,
    DataConsolidateFunctionValues.Minimum,
    DataConsolidateFunctionValues.Product,
    DataConsolidateFunctionValues.StandardDeviation,
    DataConsolidateFunctionValues.StandardDeviationP,
    DataConsolidateFunctionValues.Sum,
    DataConsolidateFunctionValues.Variance,
    DataConsolidateFunctionValues.VarianceP,
] as const;

export enum DataValidationValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Whole Number. Serialized value: `whole` */
    Whole = 'whole',
    /** Decimal. Serialized value: `decimal` */
    Decimal = 'decimal',
    /** List. Serialized value: `list` */
    List = 'list',
    /** Date. Serialized value: `date` */
    Date = 'date',
    /** Time. Serialized value: `time` */
    Time = 'time',
    /** Text Length. Serialized value: `textLength` */
    TextLength = 'textLength',
    /** Custom. Serialized value: `custom` */
    Custom = 'custom',
}

export const DataValidationValuesArray = [
    DataValidationValues.None,
    DataValidationValues.Whole,
    DataValidationValues.Decimal,
    DataValidationValues.List,
    DataValidationValues.Date,
    DataValidationValues.Time,
    DataValidationValues.TextLength,
    DataValidationValues.Custom,
] as const;

export enum DataValidationOperatorValues {
    /** Between. Serialized value: `between` */
    Between = 'between',
    /** Not Between. Serialized value: `notBetween` */
    NotBetween = 'notBetween',
    /** Equal. Serialized value: `equal` */
    Equal = 'equal',
    /** Not Equal. Serialized value: `notEqual` */
    NotEqual = 'notEqual',
    /** Less Than. Serialized value: `lessThan` */
    LessThan = 'lessThan',
    /** Less Than Or Equal. Serialized value: `lessThanOrEqual` */
    LessThanOrEqual = 'lessThanOrEqual',
    /** Greater Than. Serialized value: `greaterThan` */
    GreaterThan = 'greaterThan',
    /** Greater Than Or Equal. Serialized value: `greaterThanOrEqual` */
    GreaterThanOrEqual = 'greaterThanOrEqual',
}

export const DataValidationOperatorValuesArray = [
    DataValidationOperatorValues.Between,
    DataValidationOperatorValues.NotBetween,
    DataValidationOperatorValues.Equal,
    DataValidationOperatorValues.NotEqual,
    DataValidationOperatorValues.LessThan,
    DataValidationOperatorValues.LessThanOrEqual,
    DataValidationOperatorValues.GreaterThan,
    DataValidationOperatorValues.GreaterThanOrEqual,
] as const;

export enum DataValidationErrorStyleValues {
    /** Stop Icon. Serialized value: `stop` */
    Stop = 'stop',
    /** Warning Icon. Serialized value: `warning` */
    Warning = 'warning',
    /** Information Icon. Serialized value: `information` */
    Information = 'information',
}

export const DataValidationErrorStyleValuesArray = [
    DataValidationErrorStyleValues.Stop,
    DataValidationErrorStyleValues.Warning,
    DataValidationErrorStyleValues.Information,
] as const;

export enum DataValidationImeModeValues {
    /** IME Mode Not Controlled. Serialized value: `noControl` */
    NoControl = 'noControl',
    /** IME Off. Serialized value: `off` */
    Off = 'off',
    /** IME On. Serialized value: `on` */
    On = 'on',
    /** Disabled IME Mode. Serialized value: `disabled` */
    Disabled = 'disabled',
    /** Hiragana IME Mode. Serialized value: `hiragana` */
    Hiragana = 'hiragana',
    /** Full Katakana IME Mode. Serialized value: `fullKatakana` */
    FullKatakana = 'fullKatakana',
    /** Half-Width Katakana. Serialized value: `halfKatakana` */
    HalfKatakana = 'halfKatakana',
    /** Full-Width Alpha-Numeric IME Mode. Serialized value: `fullAlpha` */
    FullAlpha = 'fullAlpha',
    /** Half Alpha IME. Serialized value: `halfAlpha` */
    HalfAlpha = 'halfAlpha',
    /** Full Width Hangul. Serialized value: `fullHangul` */
    FullHangul = 'fullHangul',
    /** Half-Width Hangul IME Mode. Serialized value: `halfHangul` */
    HalfHangul = 'halfHangul',
}

export const DataValidationImeModeValuesArray = [
    DataValidationImeModeValues.NoControl,
    DataValidationImeModeValues.Off,
    DataValidationImeModeValues.On,
    DataValidationImeModeValues.Disabled,
    DataValidationImeModeValues.Hiragana,
    DataValidationImeModeValues.FullKatakana,
    DataValidationImeModeValues.HalfKatakana,
    DataValidationImeModeValues.FullAlpha,
    DataValidationImeModeValues.HalfAlpha,
    DataValidationImeModeValues.FullHangul,
    DataValidationImeModeValues.HalfHangul,
] as const;

export enum ConditionalFormatValues {
    /** Expression. Serialized value: `expression` */
    Expression = 'expression',
    /** Cell Is. Serialized value: `cellIs` */
    CellIs = 'cellIs',
    /** Color Scale. Serialized value: `colorScale` */
    ColorScale = 'colorScale',
    /** Data Bar. Serialized value: `dataBar` */
    DataBar = 'dataBar',
    /** Icon Set. Serialized value: `iconSet` */
    IconSet = 'iconSet',
    /** Top 10. Serialized value: `top10` */
    Top10 = 'top10',
    /** Unique Values. Serialized value: `uniqueValues` */
    UniqueValues = 'uniqueValues',
    /** Duplicate Values. Serialized value: `duplicateValues` */
    DuplicateValues = 'duplicateValues',
    /** Contains Text. Serialized value: `containsText` */
    ContainsText = 'containsText',
    /** Does Not Contain Text. Serialized value: `notContainsText` */
    NotContainsText = 'notContainsText',
    /** Begins With. Serialized value: `beginsWith` */
    BeginsWith = 'beginsWith',
    /** Ends With. Serialized value: `endsWith` */
    EndsWith = 'endsWith',
    /** Contains Blanks. Serialized value: `containsBlanks` */
    ContainsBlanks = 'containsBlanks',
    /** Contains No Blanks. Serialized value: `notContainsBlanks` */
    NotContainsBlanks = 'notContainsBlanks',
    /** Contains Errors. Serialized value: `containsErrors` */
    ContainsErrors = 'containsErrors',
    /** Contains No Errors. Serialized value: `notContainsErrors` */
    NotContainsErrors = 'notContainsErrors',
    /** Time Period. Serialized value: `timePeriod` */
    TimePeriod = 'timePeriod',
    /** Above or Below Average. Serialized value: `aboveAverage` */
    AboveAverage = 'aboveAverage',
}

export const ConditionalFormatValuesArray = [
    ConditionalFormatValues.Expression,
    ConditionalFormatValues.CellIs,
    ConditionalFormatValues.ColorScale,
    ConditionalFormatValues.DataBar,
    ConditionalFormatValues.IconSet,
    ConditionalFormatValues.Top10,
    ConditionalFormatValues.UniqueValues,
    ConditionalFormatValues.DuplicateValues,
    ConditionalFormatValues.ContainsText,
    ConditionalFormatValues.NotContainsText,
    ConditionalFormatValues.BeginsWith,
    ConditionalFormatValues.EndsWith,
    ConditionalFormatValues.ContainsBlanks,
    ConditionalFormatValues.NotContainsBlanks,
    ConditionalFormatValues.ContainsErrors,
    ConditionalFormatValues.NotContainsErrors,
    ConditionalFormatValues.TimePeriod,
    ConditionalFormatValues.AboveAverage,
] as const;

export enum TimePeriodValues {
    /** Today. Serialized value: `today` */
    Today = 'today',
    /** Yesterday. Serialized value: `yesterday` */
    Yesterday = 'yesterday',
    /** Tomorrow. Serialized value: `tomorrow` */
    Tomorrow = 'tomorrow',
    /** Last 7 Days. Serialized value: `last7Days` */
    Last7Days = 'last7Days',
    /** This Month. Serialized value: `thisMonth` */
    ThisMonth = 'thisMonth',
    /** Last Month. Serialized value: `lastMonth` */
    LastMonth = 'lastMonth',
    /** Next Month. Serialized value: `nextMonth` */
    NextMonth = 'nextMonth',
    /** This Week. Serialized value: `thisWeek` */
    ThisWeek = 'thisWeek',
    /** Last Week. Serialized value: `lastWeek` */
    LastWeek = 'lastWeek',
    /** Next Week. Serialized value: `nextWeek` */
    NextWeek = 'nextWeek',
}

export const TimePeriodValuesArray = [
    TimePeriodValues.Today,
    TimePeriodValues.Yesterday,
    TimePeriodValues.Tomorrow,
    TimePeriodValues.Last7Days,
    TimePeriodValues.ThisMonth,
    TimePeriodValues.LastMonth,
    TimePeriodValues.NextMonth,
    TimePeriodValues.ThisWeek,
    TimePeriodValues.LastWeek,
    TimePeriodValues.NextWeek,
] as const;

export enum ConditionalFormattingOperatorValues {
    /** Less Than. Serialized value: `lessThan` */
    LessThan = 'lessThan',
    /** Less Than Or Equal. Serialized value: `lessThanOrEqual` */
    LessThanOrEqual = 'lessThanOrEqual',
    /** Equal. Serialized value: `equal` */
    Equal = 'equal',
    /** Not Equal. Serialized value: `notEqual` */
    NotEqual = 'notEqual',
    /** Greater Than Or Equal. Serialized value: `greaterThanOrEqual` */
    GreaterThanOrEqual = 'greaterThanOrEqual',
    /** Greater Than. Serialized value: `greaterThan` */
    GreaterThan = 'greaterThan',
    /** Between. Serialized value: `between` */
    Between = 'between',
    /** Not Between. Serialized value: `notBetween` */
    NotBetween = 'notBetween',
    /** Contains. Serialized value: `containsText` */
    ContainsText = 'containsText',
    /** Does Not Contain. Serialized value: `notContains` */
    NotContains = 'notContains',
    /** Begins With. Serialized value: `beginsWith` */
    BeginsWith = 'beginsWith',
    /** Ends With. Serialized value: `endsWith` */
    EndsWith = 'endsWith',
}

export const ConditionalFormattingOperatorValuesArray = [
    ConditionalFormattingOperatorValues.LessThan,
    ConditionalFormattingOperatorValues.LessThanOrEqual,
    ConditionalFormattingOperatorValues.Equal,
    ConditionalFormattingOperatorValues.NotEqual,
    ConditionalFormattingOperatorValues.GreaterThanOrEqual,
    ConditionalFormattingOperatorValues.GreaterThan,
    ConditionalFormattingOperatorValues.Between,
    ConditionalFormattingOperatorValues.NotBetween,
    ConditionalFormattingOperatorValues.ContainsText,
    ConditionalFormattingOperatorValues.NotContains,
    ConditionalFormattingOperatorValues.BeginsWith,
    ConditionalFormattingOperatorValues.EndsWith,
] as const;

export enum ConditionalFormatValueObjectValues {
    /** Number. Serialized value: `num` */
    Number = 'num',
    /** Percent. Serialized value: `percent` */
    Percent = 'percent',
    /** Maximum. Serialized value: `max` */
    Max = 'max',
    /** Minimum. Serialized value: `min` */
    Min = 'min',
    /** Formula. Serialized value: `formula` */
    Formula = 'formula',
    /** Percentile. Serialized value: `percentile` */
    Percentile = 'percentile',
}

export const ConditionalFormatValueObjectValuesArray = [
    ConditionalFormatValueObjectValues.Number,
    ConditionalFormatValueObjectValues.Percent,
    ConditionalFormatValueObjectValues.Max,
    ConditionalFormatValueObjectValues.Min,
    ConditionalFormatValueObjectValues.Formula,
    ConditionalFormatValueObjectValues.Percentile,
] as const;

export enum PageOrderValues {
    /** Down Then Over. Serialized value: `downThenOver` */
    DownThenOver = 'downThenOver',
    /** Over Then Down. Serialized value: `overThenDown` */
    OverThenDown = 'overThenDown',
}

export const PageOrderValuesArray = [
    PageOrderValues.DownThenOver,
    PageOrderValues.OverThenDown,
] as const;

export enum OrientationValues {
    /** Default. Serialized value: `default` */
    Default = 'default',
    /** Portrait. Serialized value: `portrait` */
    Portrait = 'portrait',
    /** Landscape. Serialized value: `landscape` */
    Landscape = 'landscape',
}

export const OrientationValuesArray = [
    OrientationValues.Default,
    OrientationValues.Portrait,
    OrientationValues.Landscape,
] as const;

export enum CellCommentsValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Print Comments As Displayed. Serialized value: `asDisplayed` */
    AsDisplayed = 'asDisplayed',
    /** Print At End. Serialized value: `atEnd` */
    AtEnd = 'atEnd',
}

export const CellCommentsValuesArray = [
    CellCommentsValues.None,
    CellCommentsValues.AsDisplayed,
    CellCommentsValues.AtEnd,
] as const;

export enum PrintErrorValues {
    /** Display Cell Errors. Serialized value: `displayed` */
    Displayed = 'displayed',
    /** Show Cell Errors As Blank. Serialized value: `blank` */
    Blank = 'blank',
    /** Dash Cell Errors. Serialized value: `dash` */
    Dash = 'dash',
    /** NA. Serialized value: `NA` */
    NA = 'NA',
}

export const PrintErrorValuesArray = [
    PrintErrorValues.Displayed,
    PrintErrorValues.Blank,
    PrintErrorValues.Dash,
    PrintErrorValues.NA,
] as const;

export enum DataViewAspectValues {
    /** Object Display Content. Serialized value: `DVASPECT_CONTENT` */
    DataViewAspectContent = 'DVASPECT_CONTENT',
    /** Object Display Icon. Serialized value: `DVASPECT_ICON` */
    DataViewAspectIcon = 'DVASPECT_ICON',
}

export const DataViewAspectValuesArray = [
    DataViewAspectValues.DataViewAspectContent,
    DataViewAspectValues.DataViewAspectIcon,
] as const;

export enum OleUpdateValues {
    /** Always Update OLE. Serialized value: `OLEUPDATE_ALWAYS` */
    OleUpdateAlways = 'OLEUPDATE_ALWAYS',
    /** Update OLE On Call. Serialized value: `OLEUPDATE_ONCALL` */
    OleUpdateOnCall = 'OLEUPDATE_ONCALL',
}

export const OleUpdateValuesArray = [
    OleUpdateValues.OleUpdateAlways,
    OleUpdateValues.OleUpdateOnCall,
] as const;

export enum WebSourceValues {
    /** All Sheet Content. Serialized value: `sheet` */
    Sheet = 'sheet',
    /** Print Area. Serialized value: `printArea` */
    PrintArea = 'printArea',
    /** AutoFilter. Serialized value: `autoFilter` */
    AutoFilter = 'autoFilter',
    /** Range. Serialized value: `range` */
    Range = 'range',
    /** Chart. Serialized value: `chart` */
    Chart = 'chart',
    /** PivotTable. Serialized value: `pivotTable` */
    PivotTable = 'pivotTable',
    /** QueryTable. Serialized value: `query` */
    Query = 'query',
    /** Label. Serialized value: `label` */
    Label = 'label',
}

export const WebSourceValuesArray = [
    WebSourceValues.Sheet,
    WebSourceValues.PrintArea,
    WebSourceValues.AutoFilter,
    WebSourceValues.Range,
    WebSourceValues.Chart,
    WebSourceValues.PivotTable,
    WebSourceValues.Query,
    WebSourceValues.Label,
] as const;

export enum PaneStateValues {
    /** Split. Serialized value: `split` */
    Split = 'split',
    /** Frozen. Serialized value: `frozen` */
    Frozen = 'frozen',
    /** Frozen Split. Serialized value: `frozenSplit` */
    FrozenSplit = 'frozenSplit',
}

export const PaneStateValuesArray = [
    PaneStateValues.Split,
    PaneStateValues.Frozen,
    PaneStateValues.FrozenSplit,
] as const;

export enum MdxFunctionValues {
    /** Cube Member. Serialized value: `m` */
    CubeMember = 'm',
    /** Cube Value. Serialized value: `v` */
    CubeValue = 'v',
    /** Cube Set. Serialized value: `s` */
    CubeSet = 's',
    /** Cube Set Count. Serialized value: `c` */
    CubeSetCount = 'c',
    /** Cube Ranked Member. Serialized value: `r` */
    CubeRankedMember = 'r',
    /** Cube Member Property. Serialized value: `p` */
    CubeMemberProperty = 'p',
    /** Cube KPI Member. Serialized value: `k` */
    CubeKPIMember = 'k',
}

export const MdxFunctionValuesArray = [
    MdxFunctionValues.CubeMember,
    MdxFunctionValues.CubeValue,
    MdxFunctionValues.CubeSet,
    MdxFunctionValues.CubeSetCount,
    MdxFunctionValues.CubeRankedMember,
    MdxFunctionValues.CubeMemberProperty,
    MdxFunctionValues.CubeKPIMember,
] as const;

export enum MdxSetOrderValues {
    /** Unsorted. Serialized value: `u` */
    Unsorted = 'u',
    /** Ascending. Serialized value: `a` */
    Ascending = 'a',
    /** Descending. Serialized value: `d` */
    Descending = 'd',
    /** Alpha Ascending Sort Order. Serialized value: `aa` */
    AlphaAscendingSortOrder = 'aa',
    /** Alpha Descending Sort Order. Serialized value: `ad` */
    AlphaDescendingSortOrder = 'ad',
    /** Natural Ascending. Serialized value: `na` */
    NaturalAscending = 'na',
    /** Natural Descending. Serialized value: `nd` */
    NaturalDescending = 'nd',
}

export const MdxSetOrderValuesArray = [
    MdxSetOrderValues.Unsorted,
    MdxSetOrderValues.Ascending,
    MdxSetOrderValues.Descending,
    MdxSetOrderValues.AlphaAscendingSortOrder,
    MdxSetOrderValues.AlphaDescendingSortOrder,
    MdxSetOrderValues.NaturalAscending,
    MdxSetOrderValues.NaturalDescending,
] as const;

export enum MdxKPIPropertyValues {
    /** Value. Serialized value: `v` */
    Value = 'v',
    /** Goal. Serialized value: `g` */
    Goal = 'g',
    /** Status. Serialized value: `s` */
    Status = 's',
    /** Trend. Serialized value: `t` */
    Trend = 't',
    /** Weight. Serialized value: `w` */
    Weight = 'w',
    /** Current Time Member. Serialized value: `m` */
    Time = 'm',
}

export const MdxKPIPropertyValuesArray = [
    MdxKPIPropertyValues.Value,
    MdxKPIPropertyValues.Goal,
    MdxKPIPropertyValues.Status,
    MdxKPIPropertyValues.Trend,
    MdxKPIPropertyValues.Weight,
    MdxKPIPropertyValues.Time,
] as const;

export enum BorderStyleValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Thin Border. Serialized value: `thin` */
    Thin = 'thin',
    /** Medium Border. Serialized value: `medium` */
    Medium = 'medium',
    /** Dashed. Serialized value: `dashed` */
    Dashed = 'dashed',
    /** Dotted. Serialized value: `dotted` */
    Dotted = 'dotted',
    /** Thick Line Border. Serialized value: `thick` */
    Thick = 'thick',
    /** Double Line. Serialized value: `double` */
    Double = 'double',
    /** Hairline Border. Serialized value: `hair` */
    Hair = 'hair',
    /** Medium Dashed. Serialized value: `mediumDashed` */
    MediumDashed = 'mediumDashed',
    /** Dash Dot. Serialized value: `dashDot` */
    DashDot = 'dashDot',
    /** Medium Dash Dot. Serialized value: `mediumDashDot` */
    MediumDashDot = 'mediumDashDot',
    /** Dash Dot Dot. Serialized value: `dashDotDot` */
    DashDotDot = 'dashDotDot',
    /** Medium Dash Dot Dot. Serialized value: `mediumDashDotDot` */
    MediumDashDotDot = 'mediumDashDotDot',
    /** Slant Dash Dot. Serialized value: `slantDashDot` */
    SlantDashDot = 'slantDashDot',
}

export const BorderStyleValuesArray = [
    BorderStyleValues.None,
    BorderStyleValues.Thin,
    BorderStyleValues.Medium,
    BorderStyleValues.Dashed,
    BorderStyleValues.Dotted,
    BorderStyleValues.Thick,
    BorderStyleValues.Double,
    BorderStyleValues.Hair,
    BorderStyleValues.MediumDashed,
    BorderStyleValues.DashDot,
    BorderStyleValues.MediumDashDot,
    BorderStyleValues.DashDotDot,
    BorderStyleValues.MediumDashDotDot,
    BorderStyleValues.SlantDashDot,
] as const;

export enum PatternValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Solid. Serialized value: `solid` */
    Solid = 'solid',
    /** Medium Gray. Serialized value: `mediumGray` */
    MediumGray = 'mediumGray',
    /** Dary Gray. Serialized value: `darkGray` */
    DarkGray = 'darkGray',
    /** Light Gray. Serialized value: `lightGray` */
    LightGray = 'lightGray',
    /** Dark Horizontal. Serialized value: `darkHorizontal` */
    DarkHorizontal = 'darkHorizontal',
    /** Dark Vertical. Serialized value: `darkVertical` */
    DarkVertical = 'darkVertical',
    /** Dark Down. Serialized value: `darkDown` */
    DarkDown = 'darkDown',
    /** Dark Up. Serialized value: `darkUp` */
    DarkUp = 'darkUp',
    /** Dark Grid. Serialized value: `darkGrid` */
    DarkGrid = 'darkGrid',
    /** Dark Trellis. Serialized value: `darkTrellis` */
    DarkTrellis = 'darkTrellis',
    /** Light Horizontal. Serialized value: `lightHorizontal` */
    LightHorizontal = 'lightHorizontal',
    /** Light Vertical. Serialized value: `lightVertical` */
    LightVertical = 'lightVertical',
    /** Light Down. Serialized value: `lightDown` */
    LightDown = 'lightDown',
    /** Light Up. Serialized value: `lightUp` */
    LightUp = 'lightUp',
    /** Light Grid. Serialized value: `lightGrid` */
    LightGrid = 'lightGrid',
    /** Light Trellis. Serialized value: `lightTrellis` */
    LightTrellis = 'lightTrellis',
    /** Gray 0.125. Serialized value: `gray125` */
    Gray125 = 'gray125',
    /** Gray 0.0625. Serialized value: `gray0625` */
    Gray0625 = 'gray0625',
}

export const PatternValuesArray = [
    PatternValues.None,
    PatternValues.Solid,
    PatternValues.MediumGray,
    PatternValues.DarkGray,
    PatternValues.LightGray,
    PatternValues.DarkHorizontal,
    PatternValues.DarkVertical,
    PatternValues.DarkDown,
    PatternValues.DarkUp,
    PatternValues.DarkGrid,
    PatternValues.DarkTrellis,
    PatternValues.LightHorizontal,
    PatternValues.LightVertical,
    PatternValues.LightDown,
    PatternValues.LightUp,
    PatternValues.LightGrid,
    PatternValues.LightTrellis,
    PatternValues.Gray125,
    PatternValues.Gray0625,
] as const;

export enum GradientValues {
    /** Linear Gradient. Serialized value: `linear` */
    Linear = 'linear',
    /** Path. Serialized value: `path` */
    Path = 'path',
}

export const GradientValuesArray = [
    GradientValues.Linear,
    GradientValues.Path,
] as const;

export enum HorizontalAlignmentValues {
    /** General Horizontal Alignment. Serialized value: `general` */
    General = 'general',
    /** Left Horizontal Alignment. Serialized value: `left` */
    Left = 'left',
    /** Centered Horizontal Alignment. Serialized value: `center` */
    Center = 'center',
    /** Right Horizontal Alignment. Serialized value: `right` */
    Right = 'right',
    /** Fill. Serialized value: `fill` */
    Fill = 'fill',
    /** Justify. Serialized value: `justify` */
    Justify = 'justify',
    /** Center Continuous Horizontal Alignment. Serialized value: `centerContinuous` */
    CenterContinuous = 'centerContinuous',
    /** Distributed Horizontal Alignment. Serialized value: `distributed` */
    Distributed = 'distributed',
}

export const HorizontalAlignmentValuesArray = [
    HorizontalAlignmentValues.General,
    HorizontalAlignmentValues.Left,
    HorizontalAlignmentValues.Center,
    HorizontalAlignmentValues.Right,
    HorizontalAlignmentValues.Fill,
    HorizontalAlignmentValues.Justify,
    HorizontalAlignmentValues.CenterContinuous,
    HorizontalAlignmentValues.Distributed,
] as const;

export enum VerticalAlignmentValues {
    /** Align Top. Serialized value: `top` */
    Top = 'top',
    /** Centered Vertical Alignment. Serialized value: `center` */
    Center = 'center',
    /** Aligned To Bottom. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** Justified Vertically. Serialized value: `justify` */
    Justify = 'justify',
    /** Distributed Vertical Alignment. Serialized value: `distributed` */
    Distributed = 'distributed',
}

export const VerticalAlignmentValuesArray = [
    VerticalAlignmentValues.Top,
    VerticalAlignmentValues.Center,
    VerticalAlignmentValues.Bottom,
    VerticalAlignmentValues.Justify,
    VerticalAlignmentValues.Distributed,
] as const;

export enum TableStyleValues {
    /** Whole Table Style. Serialized value: `wholeTable` */
    WholeTable = 'wholeTable',
    /** Header Row Style. Serialized value: `headerRow` */
    HeaderRow = 'headerRow',
    /** Total Row Style. Serialized value: `totalRow` */
    TotalRow = 'totalRow',
    /** First Column Style. Serialized value: `firstColumn` */
    FirstColumn = 'firstColumn',
    /** Last Column Style. Serialized value: `lastColumn` */
    LastColumn = 'lastColumn',
    /** First Row Stripe Style. Serialized value: `firstRowStripe` */
    FirstRowStripe = 'firstRowStripe',
    /** Second Row Stripe Style. Serialized value: `secondRowStripe` */
    SecondRowStripe = 'secondRowStripe',
    /** First Column Stripe Style. Serialized value: `firstColumnStripe` */
    FirstColumnStripe = 'firstColumnStripe',
    /** Second Column Stripe Style. Serialized value: `secondColumnStripe` */
    SecondColumnStripe = 'secondColumnStripe',
    /** First Header Row Style. Serialized value: `firstHeaderCell` */
    FirstHeaderCell = 'firstHeaderCell',
    /** Last Header Style. Serialized value: `lastHeaderCell` */
    LastHeaderCell = 'lastHeaderCell',
    /** First Total Row Style. Serialized value: `firstTotalCell` */
    FirstTotalCell = 'firstTotalCell',
    /** Last Total Row Style. Serialized value: `lastTotalCell` */
    LastTotalCell = 'lastTotalCell',
    /** First Subtotal Column Style. Serialized value: `firstSubtotalColumn` */
    FirstSubtotalColumn = 'firstSubtotalColumn',
    /** Second Subtotal Column Style. Serialized value: `secondSubtotalColumn` */
    SecondSubtotalColumn = 'secondSubtotalColumn',
    /** Third Subtotal Column Style. Serialized value: `thirdSubtotalColumn` */
    ThirdSubtotalColumn = 'thirdSubtotalColumn',
    /** First Subtotal Row Style. Serialized value: `firstSubtotalRow` */
    FirstSubtotalRow = 'firstSubtotalRow',
    /** Second Subtotal Row Style. Serialized value: `secondSubtotalRow` */
    SecondSubtotalRow = 'secondSubtotalRow',
    /** Third Subtotal Row Style. Serialized value: `thirdSubtotalRow` */
    ThirdSubtotalRow = 'thirdSubtotalRow',
    /** Blank Row Style. Serialized value: `blankRow` */
    BlankRow = 'blankRow',
    /** First Column Subheading Style. Serialized value: `firstColumnSubheading` */
    FirstColumnSubheading = 'firstColumnSubheading',
    /** Second Column Subheading Style. Serialized value: `secondColumnSubheading` */
    SecondColumnSubheading = 'secondColumnSubheading',
    /** Third Column Subheading Style. Serialized value: `thirdColumnSubheading` */
    ThirdColumnSubheading = 'thirdColumnSubheading',
    /** First Row Subheading Style. Serialized value: `firstRowSubheading` */
    FirstRowSubheading = 'firstRowSubheading',
    /** Second Row Subheading Style. Serialized value: `secondRowSubheading` */
    SecondRowSubheading = 'secondRowSubheading',
    /** Third Row Subheading Style. Serialized value: `thirdRowSubheading` */
    ThirdRowSubheading = 'thirdRowSubheading',
    /** Page Field Labels Style. Serialized value: `pageFieldLabels` */
    PageFieldLabels = 'pageFieldLabels',
    /** Page Field Values Style. Serialized value: `pageFieldValues` */
    PageFieldValues = 'pageFieldValues',
}

export const TableStyleValuesArray = [
    TableStyleValues.WholeTable,
    TableStyleValues.HeaderRow,
    TableStyleValues.TotalRow,
    TableStyleValues.FirstColumn,
    TableStyleValues.LastColumn,
    TableStyleValues.FirstRowStripe,
    TableStyleValues.SecondRowStripe,
    TableStyleValues.FirstColumnStripe,
    TableStyleValues.SecondColumnStripe,
    TableStyleValues.FirstHeaderCell,
    TableStyleValues.LastHeaderCell,
    TableStyleValues.FirstTotalCell,
    TableStyleValues.LastTotalCell,
    TableStyleValues.FirstSubtotalColumn,
    TableStyleValues.SecondSubtotalColumn,
    TableStyleValues.ThirdSubtotalColumn,
    TableStyleValues.FirstSubtotalRow,
    TableStyleValues.SecondSubtotalRow,
    TableStyleValues.ThirdSubtotalRow,
    TableStyleValues.BlankRow,
    TableStyleValues.FirstColumnSubheading,
    TableStyleValues.SecondColumnSubheading,
    TableStyleValues.ThirdColumnSubheading,
    TableStyleValues.FirstRowSubheading,
    TableStyleValues.SecondRowSubheading,
    TableStyleValues.ThirdRowSubheading,
    TableStyleValues.PageFieldLabels,
    TableStyleValues.PageFieldValues,
] as const;

export enum VerticalAlignmentRunValues {
    /** Baseline. Serialized value: `baseline` */
    Baseline = 'baseline',
    /** Superscript. Serialized value: `superscript` */
    Superscript = 'superscript',
    /** Subscript. Serialized value: `subscript` */
    Subscript = 'subscript',
}

export const VerticalAlignmentRunValuesArray = [
    VerticalAlignmentRunValues.Baseline,
    VerticalAlignmentRunValues.Superscript,
    VerticalAlignmentRunValues.Subscript,
] as const;

export enum FontSchemeValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Major Font. Serialized value: `major` */
    Major = 'major',
    /** Minor Font. Serialized value: `minor` */
    Minor = 'minor',
}

export const FontSchemeValuesArray = [
    FontSchemeValues.None,
    FontSchemeValues.Major,
    FontSchemeValues.Minor,
] as const;

export enum UnderlineValues {
    /** Single Underline. Serialized value: `single` */
    Single = 'single',
    /** Double Underline. Serialized value: `double` */
    Double = 'double',
    /** Accounting Single Underline. Serialized value: `singleAccounting` */
    SingleAccounting = 'singleAccounting',
    /** Accounting Double Underline. Serialized value: `doubleAccounting` */
    DoubleAccounting = 'doubleAccounting',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const UnderlineValuesArray = [
    UnderlineValues.Single,
    UnderlineValues.Double,
    UnderlineValues.SingleAccounting,
    UnderlineValues.DoubleAccounting,
    UnderlineValues.None,
] as const;

export enum DdeValues {
    /** Nil. Serialized value: `nil` */
    Nil = 'nil',
    /** Boolean. Serialized value: `b` */
    Boolean = 'b',
    /** Real Number. Serialized value: `n` */
    RealNumber = 'n',
    /** Error. Serialized value: `e` */
    Error = 'e',
    /** String. Serialized value: `str` */
    String = 'str',
}

export const DdeValuesArray = [
    DdeValues.Nil,
    DdeValues.Boolean,
    DdeValues.RealNumber,
    DdeValues.Error,
    DdeValues.String,
] as const;

export enum TableValues {
    /** Worksheet. Serialized value: `worksheet` */
    Worksheet = 'worksheet',
    /** XML. Serialized value: `xml` */
    Xml = 'xml',
    /** Query Table. Serialized value: `queryTable` */
    QueryTable = 'queryTable',
}

export const TableValuesArray = [
    TableValues.Worksheet,
    TableValues.Xml,
    TableValues.QueryTable,
] as const;

export enum TotalsRowFunctionValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Sum. Serialized value: `sum` */
    Sum = 'sum',
    /** Minimum. Serialized value: `min` */
    Minimum = 'min',
    /** Maximum. Serialized value: `max` */
    Maximum = 'max',
    /** Average. Serialized value: `average` */
    Average = 'average',
    /** Non Empty Cell Count. Serialized value: `count` */
    Count = 'count',
    /** Count Numbers. Serialized value: `countNums` */
    CountNumbers = 'countNums',
    /** StdDev. Serialized value: `stdDev` */
    StandardDeviation = 'stdDev',
    /** Var. Serialized value: `var` */
    Variance = 'var',
    /** Custom Formula. Serialized value: `custom` */
    Custom = 'custom',
}

export const TotalsRowFunctionValuesArray = [
    TotalsRowFunctionValues.None,
    TotalsRowFunctionValues.Sum,
    TotalsRowFunctionValues.Minimum,
    TotalsRowFunctionValues.Maximum,
    TotalsRowFunctionValues.Average,
    TotalsRowFunctionValues.Count,
    TotalsRowFunctionValues.CountNumbers,
    TotalsRowFunctionValues.StandardDeviation,
    TotalsRowFunctionValues.Variance,
    TotalsRowFunctionValues.Custom,
] as const;

export enum XmlDataValues {
    /** String. Serialized value: `string` */
    String = 'string',
    /** Normalized String. Serialized value: `normalizedString` */
    NormalizedString = 'normalizedString',
    /** Token. Serialized value: `token` */
    Token = 'token',
    /** Byte. Serialized value: `byte` */
    Byte = 'byte',
    /** Unsigned Byte. Serialized value: `unsignedByte` */
    UnsignedByte = 'unsignedByte',
    /** Base 64 Encoded Binary. Serialized value: `base64Binary` */
    Base64Binary = 'base64Binary',
    /** Hex Binary. Serialized value: `hexBinary` */
    HexBinary = 'hexBinary',
    /** Integer. Serialized value: `integer` */
    Integer = 'integer',
    /** Positive Integer. Serialized value: `positiveInteger` */
    PositiveInteger = 'positiveInteger',
    /** Negative Integer. Serialized value: `negativeInteger` */
    NegativeInteger = 'negativeInteger',
    /** Non Positive Integer. Serialized value: `nonPositiveInteger` */
    NonPositiveInteger = 'nonPositiveInteger',
    /** Non Negative Integer. Serialized value: `nonNegativeInteger` */
    NonNegativeInteger = 'nonNegativeInteger',
    /** Integer. Serialized value: `int` */
    Int = 'int',
    /** Unsigned Integer. Serialized value: `unsignedInt` */
    UnsignedInteger = 'unsignedInt',
    /** Long. Serialized value: `long` */
    Long = 'long',
    /** Unsigned Long. Serialized value: `unsignedLong` */
    UnsignedLong = 'unsignedLong',
    /** Short. Serialized value: `short` */
    Short = 'short',
    /** Unsigned Short. Serialized value: `unsignedShort` */
    UnsignedShort = 'unsignedShort',
    /** Decimal. Serialized value: `decimal` */
    Decimal = 'decimal',
    /** Float. Serialized value: `float` */
    Float = 'float',
    /** Double. Serialized value: `double` */
    Double = 'double',
    /** Boolean. Serialized value: `boolean` */
    Boolean = 'boolean',
    /** Time. Serialized value: `time` */
    Time = 'time',
    /** Date Time. Serialized value: `dateTime` */
    DateTime = 'dateTime',
    /** Duration. Serialized value: `duration` */
    Duration = 'duration',
    /** Date. Serialized value: `date` */
    Date = 'date',
    /** gMonth. Serialized value: `gMonth` */
    Gmonth = 'gMonth',
    /** gYear. Serialized value: `gYear` */
    Gyear = 'gYear',
    /** gYearMonth. Serialized value: `gYearMonth` */
    GYearMonth = 'gYearMonth',
    /** gDay. Serialized value: `gDay` */
    Gday = 'gDay',
    /** gMonthDays. Serialized value: `gMonthDay` */
    GMonthDay = 'gMonthDay',
    /** Name. Serialized value: `Name` */
    Name = 'Name',
    /** Qname. Serialized value: `QName` */
    Qname = 'QName',
    /** NCName. Serialized value: `NCName` */
    NCName = 'NCName',
    /** Any URI. Serialized value: `anyURI` */
    AnyURI = 'anyURI',
    /** Language. Serialized value: `language` */
    Language = 'language',
    /** ID. Serialized value: `ID` */
    Id = 'ID',
    /** IDREF. Serialized value: `IDREF` */
    IdRef = 'IDREF',
    /** IDREFS. Serialized value: `IDREFS` */
    IdRefs = 'IDREFS',
    /** ENTITY. Serialized value: `ENTITY` */
    Entity = 'ENTITY',
    /** ENTITIES. Serialized value: `ENTITIES` */
    Entities = 'ENTITIES',
    /** Notation. Serialized value: `NOTATION` */
    Notation = 'NOTATION',
    /** NMTOKEN. Serialized value: `NMTOKEN` */
    NMToken = 'NMTOKEN',
    /** NMTOKENS. Serialized value: `NMTOKENS` */
    NMTokens = 'NMTOKENS',
    /** Any Type. Serialized value: `anyType` */
    AnyType = 'anyType',
}

export const XmlDataValuesArray = [
    XmlDataValues.String,
    XmlDataValues.NormalizedString,
    XmlDataValues.Token,
    XmlDataValues.Byte,
    XmlDataValues.UnsignedByte,
    XmlDataValues.Base64Binary,
    XmlDataValues.HexBinary,
    XmlDataValues.Integer,
    XmlDataValues.PositiveInteger,
    XmlDataValues.NegativeInteger,
    XmlDataValues.NonPositiveInteger,
    XmlDataValues.NonNegativeInteger,
    XmlDataValues.Int,
    XmlDataValues.UnsignedInteger,
    XmlDataValues.Long,
    XmlDataValues.UnsignedLong,
    XmlDataValues.Short,
    XmlDataValues.UnsignedShort,
    XmlDataValues.Decimal,
    XmlDataValues.Float,
    XmlDataValues.Double,
    XmlDataValues.Boolean,
    XmlDataValues.Time,
    XmlDataValues.DateTime,
    XmlDataValues.Duration,
    XmlDataValues.Date,
    XmlDataValues.Gmonth,
    XmlDataValues.Gyear,
    XmlDataValues.GYearMonth,
    XmlDataValues.Gday,
    XmlDataValues.GMonthDay,
    XmlDataValues.Name,
    XmlDataValues.Qname,
    XmlDataValues.NCName,
    XmlDataValues.AnyURI,
    XmlDataValues.Language,
    XmlDataValues.Id,
    XmlDataValues.IdRef,
    XmlDataValues.IdRefs,
    XmlDataValues.Entity,
    XmlDataValues.Entities,
    XmlDataValues.Notation,
    XmlDataValues.NMToken,
    XmlDataValues.NMTokens,
    XmlDataValues.AnyType,
] as const;

export enum VolatileDependencyValues {
    /** Real Time Data. Serialized value: `realTimeData` */
    RealTimeData = 'realTimeData',
    /** OLAP Formulas. Serialized value: `olapFunctions` */
    OlapFunctions = 'olapFunctions',
}

export const VolatileDependencyValuesArray = [
    VolatileDependencyValues.RealTimeData,
    VolatileDependencyValues.OlapFunctions,
] as const;

export enum VolatileValues {
    /** Boolean. Serialized value: `b` */
    Boolean = 'b',
    /** Real Number. Serialized value: `n` */
    RealNumber = 'n',
    /** Error. Serialized value: `e` */
    Error = 'e',
    /** String. Serialized value: `s` */
    String = 's',
}

export const VolatileValuesArray = [
    VolatileValues.Boolean,
    VolatileValues.RealNumber,
    VolatileValues.Error,
    VolatileValues.String,
] as const;

export enum VisibilityValues {
    /** Visible. Serialized value: `visible` */
    Visible = 'visible',
    /** Hidden. Serialized value: `hidden` */
    Hidden = 'hidden',
    /** Very Hidden. Serialized value: `veryHidden` */
    VeryHidden = 'veryHidden',
}

export const VisibilityValuesArray = [
    VisibilityValues.Visible,
    VisibilityValues.Hidden,
    VisibilityValues.VeryHidden,
] as const;

export enum CommentsValues {
    /** No Comments. Serialized value: `commNone` */
    CommentNone = 'commNone',
    /** Show Comment Indicator. Serialized value: `commIndicator` */
    CommentIndicator = 'commIndicator',
    /** Show Comment and Indicator. Serialized value: `commIndAndComment` */
    CommentIndicatorAndComment = 'commIndAndComment',
}

export const CommentsValuesArray = [
    CommentsValues.CommentNone,
    CommentsValues.CommentIndicator,
    CommentsValues.CommentIndicatorAndComment,
] as const;

export enum ObjectDisplayValues {
    /** All. Serialized value: `all` */
    All = 'all',
    /** Show Placeholders. Serialized value: `placeholders` */
    Placeholders = 'placeholders',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const ObjectDisplayValuesArray = [
    ObjectDisplayValues.All,
    ObjectDisplayValues.Placeholders,
    ObjectDisplayValues.None,
] as const;

export enum SheetStateValues {
    /** Visible. Serialized value: `visible` */
    Visible = 'visible',
    /** Hidden. Serialized value: `hidden` */
    Hidden = 'hidden',
    /** Very Hidden. Serialized value: `veryHidden` */
    VeryHidden = 'veryHidden',
}

export const SheetStateValuesArray = [
    SheetStateValues.Visible,
    SheetStateValues.Hidden,
    SheetStateValues.VeryHidden,
] as const;

export enum UpdateLinksBehaviorValues {
    /** User Set. Serialized value: `userSet` */
    UserSet = 'userSet',
    /** Never Update Links. Serialized value: `never` */
    Never = 'never',
    /** Always Update Links. Serialized value: `always` */
    Always = 'always',
}

export const UpdateLinksBehaviorValuesArray = [
    UpdateLinksBehaviorValues.UserSet,
    UpdateLinksBehaviorValues.Never,
    UpdateLinksBehaviorValues.Always,
] as const;

export enum CalculateModeValues {
    /** Manual Calculation Mode. Serialized value: `manual` */
    Manual = 'manual',
    /** Automatic. Serialized value: `auto` */
    Auto = 'auto',
    /** Automatic Calculation (No Tables). Serialized value: `autoNoTable` */
    AutoNoTable = 'autoNoTable',
}

export const CalculateModeValuesArray = [
    CalculateModeValues.Manual,
    CalculateModeValues.Auto,
    CalculateModeValues.AutoNoTable,
] as const;

export enum ReferenceModeValues {
    /** A1 Mode. Serialized value: `A1` */
    A1 = 'A1',
    /** R1C1 Reference Mode. Serialized value: `R1C1` */
    R1C1 = 'R1C1',
}

export const ReferenceModeValuesArray = [
    ReferenceModeValues.A1,
    ReferenceModeValues.R1C1,
] as const;

export enum TargetScreenSizeValues {
    /** 544 x 376 Resolution. Serialized value: `544x376` */
    Sz544x376 = '544x376',
    /** 640 x 480 Resolution. Serialized value: `640x480` */
    Sz640x480 = '640x480',
    /** 720 x 512 Resolution. Serialized value: `720x512` */
    Sz720x512 = '720x512',
    /** 800 x 600 Resolution. Serialized value: `800x600` */
    Sz800x600 = '800x600',
    /** 1024 x 768 Resolution. Serialized value: `1024x768` */
    Sz1024x768 = '1024x768',
    /** 1152 x 882 Resolution. Serialized value: `1152x882` */
    Sz1152x882 = '1152x882',
    /** 1152 x 900 Resolution. Serialized value: `1152x900` */
    Sz1152x900 = '1152x900',
    /** 1280 x 1024 Resolution. Serialized value: `1280x1024` */
    Sz1280x1024 = '1280x1024',
    /** 1600 x 1200 Resolution. Serialized value: `1600x1200` */
    Sz1600x1200 = '1600x1200',
    /** 1800 x 1440 Resolution. Serialized value: `1800x1440` */
    Sz1800x1440 = '1800x1440',
    /** 1920 x 1200 Resolution. Serialized value: `1920x1200` */
    Sz1920x1200 = '1920x1200',
}

export const TargetScreenSizeValuesArray = [
    TargetScreenSizeValues.Sz544x376,
    TargetScreenSizeValues.Sz640x480,
    TargetScreenSizeValues.Sz720x512,
    TargetScreenSizeValues.Sz800x600,
    TargetScreenSizeValues.Sz1024x768,
    TargetScreenSizeValues.Sz1152x882,
    TargetScreenSizeValues.Sz1152x900,
    TargetScreenSizeValues.Sz1280x1024,
    TargetScreenSizeValues.Sz1600x1200,
    TargetScreenSizeValues.Sz1800x1440,
    TargetScreenSizeValues.Sz1920x1200,
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

export enum CellValues {
    /** Boolean. Serialized value: `b` */
    Boolean = 'b',
    /** Number. Serialized value: `n` */
    Number = 'n',
    /** Error. Serialized value: `e` */
    Error = 'e',
    /** Shared String. Serialized value: `s` */
    SharedString = 's',
    /** String. Serialized value: `str` */
    String = 'str',
    /** Inline String. Serialized value: `inlineStr` */
    InlineString = 'inlineStr',
    /** undefined. Serialized value: `d` */
    Date = 'd',
}

export const CellValuesArray = [
    CellValues.Boolean,
    CellValues.Number,
    CellValues.Error,
    CellValues.SharedString,
    CellValues.String,
    CellValues.InlineString,
    CellValues.Date,
] as const;

export enum PivotAreaValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Normal. Serialized value: `normal` */
    Normal = 'normal',
    /** Data. Serialized value: `data` */
    Data = 'data',
    /** All. Serialized value: `all` */
    All = 'all',
    /** Origin. Serialized value: `origin` */
    Origin = 'origin',
    /** Field Button. Serialized value: `button` */
    Button = 'button',
    /** Top Right. Serialized value: `topRight` */
    TopRight = 'topRight',
    /** undefined. Serialized value: `topEnd` */
    TopEnd = 'topEnd',
}

export const PivotAreaValuesArray = [
    PivotAreaValues.None,
    PivotAreaValues.Normal,
    PivotAreaValues.Data,
    PivotAreaValues.All,
    PivotAreaValues.Origin,
    PivotAreaValues.Button,
    PivotAreaValues.TopRight,
    PivotAreaValues.TopEnd,
] as const;

export enum ConformanceClass {
    /** Office Open XML Strict. Serialized value: `strict` */
    Enumstrict = 'strict',
    /** Office Open XML Transitional. Serialized value: `transitional` */
    Enumtransitional = 'transitional',
}

export const ConformanceClassArray = [
    ConformanceClass.Enumstrict,
    ConformanceClass.Enumtransitional,
] as const;

/** Cached worksheet data associated with supporting book. Serialized as `x:sheetDataSet` */
export class SheetDataSet extends OxmlCompositeElement<ExternalSheetData> {

    public static override _Q = 'x:sheetDataSet';

}
/** Defined names associated with supporting book.. Serialized as `x:definedNames` */
export class ExternalDefinedNames extends OxmlCompositeElement<ExternalDefinedName> {

    public static override _Q = 'x:definedNames';

}
/** Sheet names of supporting book. Serialized as `x:sheetNames` */
export class SheetNames extends OxmlCompositeElement<SheetName> {

    public static override _Q = 'x:sheetNames';

}
/** Defines the RichDataPivotCacheGuid Class. Serialized as `x:richInfo` */
export class RichDataPivotCacheGuid extends OxmlLeafElement {

    public static override _Q = 'x:richInfo';
    public static override _A = [':pivotCacheGuid',];
    /** pivotCacheGuid. Serialized as `:pivotCacheGuid` */
    public get pivotCacheGuid(): StringValue | undefined { return this._g(':pivotCacheGuid'); }
    public set pivotCacheGuid(v: StringValue | undefined) { this._s(':pivotCacheGuid', v); }

}
/** Defines the PivotCacheDefinitionExtension Class. Serialized as `x:ext` */
export class PivotCacheDefinitionExtension extends OxmlCompositeElement<X14PivotCacheDefinition | X15PivotCacheDecoupled | X15TimelinePivotCacheDefinition | X15PivotCacheIdVersion | XxpimXsdboolean | RichDataPivotCacheGuid | XxpviCacheVersionInfo> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14PivotCacheDefinition. */
    public get pivotCacheDefinition(): X14PivotCacheDefinition | undefined { return this._f(X14PivotCacheDefinition); }
    /** Returns X15PivotCacheDecoupled. */
    public get pivotCacheDecoupled(): X15PivotCacheDecoupled | undefined { return this._f(X15PivotCacheDecoupled); }
    /** Returns X15TimelinePivotCacheDefinition. */
    public get timelinePivotCacheDefinition(): X15TimelinePivotCacheDefinition | undefined { return this._f(X15TimelinePivotCacheDefinition); }
    /** Returns X15PivotCacheIdVersion. */
    public get pivotCacheIdVersion(): X15PivotCacheIdVersion | undefined { return this._f(X15PivotCacheIdVersion); }
    /** Returns XxpimXsdboolean. */
    public get xsdboolean(): XxpimXsdboolean | undefined { return this._f(XxpimXsdboolean); }
    /** Returns RichDataPivotCacheGuid. */
    public get richDataPivotCacheGuid(): RichDataPivotCacheGuid | undefined { return this._f(RichDataPivotCacheGuid); }
    /** Returns XxpviCacheVersionInfo. */
    public get cacheVersionInfo(): XxpviCacheVersionInfo | undefined { return this._f(XxpviCacheVersionInfo); }

}
/** Defines the PivotCacheDefinitionExtensionList Class. Serialized as `x:extLst` */
export class PivotCacheDefinitionExtensionList extends OxmlCompositeElement<PivotCacheDefinitionExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the Maps Class. Serialized as `x:maps` */
export class Maps extends OxmlCompositeElement<MeasureDimensionMap> {

    public static override _Q = 'x:maps';
    public static override _A = [':count',];
    /** Measure Group Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the MeasureGroups Class. Serialized as `x:measureGroups` */
export class MeasureGroups extends OxmlCompositeElement<MeasureGroup> {

    public static override _Q = 'x:measureGroups';
    public static override _A = [':count',];
    /** Measure Group Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Dimensions Class. Serialized as `x:dimensions` */
export class Dimensions extends OxmlCompositeElement<Dimension> {

    public static override _Q = 'x:dimensions';
    public static override _A = [':count',];
    /** OLAP Dimensions Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CalculatedMembers Class. Serialized as `x:calculatedMembers` */
export class CalculatedMembers extends OxmlCompositeElement<CalculatedMember> {

    public static override _Q = 'x:calculatedMembers';
    public static override _A = [':count',];
    /** Calculated Members Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CalculatedItems Class. Serialized as `x:calculatedItems` */
export class CalculatedItems extends OxmlCompositeElement<CalculatedItem> {

    public static override _Q = 'x:calculatedItems';
    public static override _A = [':count',];
    /** Calculated Item Formula Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the TupleCache Class. Serialized as `x:tupleCache` */
export class TupleCache extends OxmlCompositeElement<Entries | Sets | QueryCache | ServerFormats | ExtensionList> {

    public static override _Q = 'x:tupleCache';
    /** Entries. */
    public get entries(): Entries | undefined { return this._f(Entries); }
    /** Sets. */
    public get sets(): Sets | undefined { return this._f(Sets); }
    /** OLAP Query Cache. */
    public get queryCache(): QueryCache | undefined { return this._f(QueryCache); }
    /** Server Formats. */
    public get serverFormats(): ServerFormats | undefined { return this._f(ServerFormats); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Kpis Class. Serialized as `x:kpis` */
export class Kpis extends OxmlCompositeElement<Kpi> {

    public static override _Q = 'x:kpis';
    public static override _A = [':count',];
    /** KPI Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CacheHierarchies Class. Serialized as `x:cacheHierarchies` */
export class CacheHierarchies extends OxmlCompositeElement<CacheHierarchy> {

    public static override _Q = 'x:cacheHierarchies';
    public static override _A = [':count',];
    /** Hierarchy Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CacheFields Class. Serialized as `x:cacheFields` */
export class CacheFields extends OxmlCompositeElement<CacheField> {

    public static override _Q = 'x:cacheFields';
    public static override _A = [':count',];
    /** Field Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CacheSource Class. Serialized as `x:cacheSource` */
export class CacheSource extends OxmlCompositeElement<WorksheetSource | Consolidation | CacheSourceExtensionList> {

    public static override _Q = 'x:cacheSource';
    public static override _A = [':type',':connectionId',];
    /** type. Serialized as `:type` */
    public get type(): SourceValues | undefined { return this._g(':type'); }
    public set type(v: SourceValues | undefined) { this._s(':type', v); }
    /** connectionId. Serialized as `:connectionId` */
    public get connectionId(): UInt32Value | undefined { return this._g(':connectionId'); }
    public set connectionId(v: UInt32Value | undefined) { this._s(':connectionId', v); }
    /** Returns WorksheetSource. */
    public get worksheetSource(): WorksheetSource | undefined { return this._f(WorksheetSource); }
    /** Returns Consolidation. */
    public get consolidation(): Consolidation | undefined { return this._f(Consolidation); }
    /** Returns CacheSourceExtensionList. */
    public get cacheSourceExtensionList(): CacheSourceExtensionList | undefined { return this._f(CacheSourceExtensionList); }

}
/** Defines the PivotTableDefinitionExtension Class. Serialized as `x:ext` */
export class PivotTableDefinitionExtension extends OxmlCompositeElement<X14PivotTableDefinition | X15PivotTableData | X15PivotTableUISettings | XxpviPivotVersionInfo> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14PivotTableDefinition. */
    public get pivotTableDefinition(): X14PivotTableDefinition | undefined { return this._f(X14PivotTableDefinition); }
    /** Returns X15PivotTableData. */
    public get pivotTableData(): X15PivotTableData | undefined { return this._f(X15PivotTableData); }
    /** Returns X15PivotTableUISettings. */
    public get pivotTableUISettings(): X15PivotTableUISettings | undefined { return this._f(X15PivotTableUISettings); }
    /** Returns XxpviPivotVersionInfo. */
    public get pivotVersionInfo(): XxpviPivotVersionInfo | undefined { return this._f(XxpviPivotVersionInfo); }

}
/** Defines the PivotTableDefinitionExtensionList Class. Serialized as `x:extLst` */
export class PivotTableDefinitionExtensionList extends OxmlCompositeElement<PivotTableDefinitionExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the ColumnHierarchiesUsage Class. Serialized as `x:colHierarchiesUsage` */
export class ColumnHierarchiesUsage extends OxmlCompositeElement<ColumnHierarchyUsage> {

    public static override _Q = 'x:colHierarchiesUsage';
    public static override _A = [':count',];
    /** Items Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the RowHierarchiesUsage Class. Serialized as `x:rowHierarchiesUsage` */
export class RowHierarchiesUsage extends OxmlCompositeElement<RowHierarchyUsage> {

    public static override _Q = 'x:rowHierarchiesUsage';
    public static override _A = [':count',];
    /** Item Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the PivotFilters Class. Serialized as `x:filters` */
export class PivotFilters extends OxmlCompositeElement<PivotFilter> {

    public static override _Q = 'x:filters';
    public static override _A = [':count',];
    /** Pivot Filter Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the PivotTableStyle Class. Serialized as `x:pivotTableStyleInfo` */
export class PivotTableStyle extends OxmlLeafElement {

    public static override _Q = 'x:pivotTableStyleInfo';
    public static override _A = [':name',':showRowHeaders',':showColHeaders',':showRowStripes',':showColStripes',':showLastColumn',];
    /** Table Style Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Show Row Header Formatting. Serialized as `:showRowHeaders` */
    public get showRowHeaders(): BooleanValue | undefined { return this._g(':showRowHeaders'); }
    public set showRowHeaders(v: BooleanValue | undefined) { this._s(':showRowHeaders', v); }
    /** Show Table Style Column Header Formatting. Serialized as `:showColHeaders` */
    public get showColumnHeaders(): BooleanValue | undefined { return this._g(':showColHeaders'); }
    public set showColumnHeaders(v: BooleanValue | undefined) { this._s(':showColHeaders', v); }
    /** Show Row Stripes. Serialized as `:showRowStripes` */
    public get showRowStripes(): BooleanValue | undefined { return this._g(':showRowStripes'); }
    public set showRowStripes(v: BooleanValue | undefined) { this._s(':showRowStripes', v); }
    /** Show Column Stripes. Serialized as `:showColStripes` */
    public get showColumnStripes(): BooleanValue | undefined { return this._g(':showColStripes'); }
    public set showColumnStripes(v: BooleanValue | undefined) { this._s(':showColStripes', v); }
    /** Show Last Column. Serialized as `:showLastColumn` */
    public get showLastColumn(): BooleanValue | undefined { return this._g(':showLastColumn'); }
    public set showLastColumn(v: BooleanValue | undefined) { this._s(':showLastColumn', v); }

}
/** Defines the PivotHierarchies Class. Serialized as `x:pivotHierarchies` */
export class PivotHierarchies extends OxmlCompositeElement<PivotHierarchy> {

    public static override _Q = 'x:pivotHierarchies';
    public static override _A = [':count',];
    /** OLAP Hierarchy Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ChartFormats Class. Serialized as `x:chartFormats` */
export class ChartFormats extends OxmlCompositeElement<ChartFormat> {

    public static override _Q = 'x:chartFormats';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ConditionalFormats Class. Serialized as `x:conditionalFormats` */
export class ConditionalFormats extends OxmlCompositeElement<ConditionalFormat> {

    public static override _Q = 'x:conditionalFormats';
    public static override _A = [':count',];
    /** Conditional Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Formats Class. Serialized as `x:formats` */
export class Formats extends OxmlCompositeElement<Format> {

    public static override _Q = 'x:formats';
    public static override _A = [':count',];
    /** Formats Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the DataFields Class. Serialized as `x:dataFields` */
export class DataFields extends OxmlCompositeElement<DataField> {

    public static override _Q = 'x:dataFields';
    public static override _A = [':count',];
    /** Data Items Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the PageFields Class. Serialized as `x:pageFields` */
export class PageFields extends OxmlCompositeElement<PageField> {

    public static override _Q = 'x:pageFields';
    public static override _A = [':count',];
    /** Page Item Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ColumnItems Class. Serialized as `x:colItems` */
export class ColumnItems extends OxmlCompositeElement<RowItem> {

    public static override _Q = 'x:colItems';
    public static override _A = [':count',];
    /** Column Item Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ColumnFields Class. Serialized as `x:colFields` */
export class ColumnFields extends OxmlCompositeElement<Field> {

    public static override _Q = 'x:colFields';
    public static override _A = [':count',];
    /** Repeated Items Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the RowItems Class. Serialized as `x:rowItems` */
export class RowItems extends OxmlCompositeElement<RowItem> {

    public static override _Q = 'x:rowItems';
    public static override _A = [':count',];
    /** Items in a Row Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the RowFields Class. Serialized as `x:rowFields` */
export class RowFields extends OxmlCompositeElement<Field> {

    public static override _Q = 'x:rowFields';
    public static override _A = [':count',];
    /** Repeated Items Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the PivotFields Class. Serialized as `x:pivotFields` */
export class PivotFields extends OxmlCompositeElement<PivotField> {

    public static override _Q = 'x:pivotFields';
    public static override _A = [':count',];
    /** Field Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Location Class. Serialized as `x:location` */
export class Location extends OxmlLeafElement {

    public static override _Q = 'x:location';
    public static override _A = [':ref',':firstHeaderRow',':firstDataRow',':firstDataCol',':rowPageCount',':colPageCount',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** First Header Row. Serialized as `:firstHeaderRow` */
    public get firstHeaderRow(): UInt32Value | undefined { return this._g(':firstHeaderRow'); }
    public set firstHeaderRow(v: UInt32Value | undefined) { this._s(':firstHeaderRow', v); }
    /** PivotTable Data First Row. Serialized as `:firstDataRow` */
    public get firstDataRow(): UInt32Value | undefined { return this._g(':firstDataRow'); }
    public set firstDataRow(v: UInt32Value | undefined) { this._s(':firstDataRow', v); }
    /** First Data Column. Serialized as `:firstDataCol` */
    public get firstDataColumn(): UInt32Value | undefined { return this._g(':firstDataCol'); }
    public set firstDataColumn(v: UInt32Value | undefined) { this._s(':firstDataCol', v); }
    /** Rows Per Page Count. Serialized as `:rowPageCount` */
    public get rowPageCount(): UInt32Value | undefined { return this._g(':rowPageCount'); }
    public set rowPageCount(v: UInt32Value | undefined) { this._s(':rowPageCount', v); }
    /** Columns Per Page. Serialized as `:colPageCount` */
    public get columnsPerPage(): UInt32Value | undefined { return this._g(':colPageCount'); }
    public set columnsPerPage(v: UInt32Value | undefined) { this._s(':colPageCount', v); }

}
/** Defines the WorkbookExtension Class. Serialized as `x:ext` */
export class WorkbookExtension extends OxmlCompositeElement<X14DefinedNames | X14PivotCaches | X14SlicerCaches | X15SlicerCaches | X14WorkbookProperties | X15PivotCaches | X15PivotTableReferences | X15TimelineCachePivotCaches | X15TimelineCacheReferences | X15WorkbookProperties | X15DataModel> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14PivotCaches. */
    public get x14PivotCaches(): X14PivotCaches | undefined { return this._f(X14PivotCaches); }
    /** Returns X14SlicerCaches. */
    public get x14SlicerCaches(): X14SlicerCaches | undefined { return this._f(X14SlicerCaches); }
    /** Returns X15SlicerCaches. */
    public get x15SlicerCaches(): X15SlicerCaches | undefined { return this._f(X15SlicerCaches); }
    /** Returns X14WorkbookProperties. */
    public get x14WorkbookProperties(): X14WorkbookProperties | undefined { return this._f(X14WorkbookProperties); }
    /** Returns X15PivotCaches. */
    public get x15PivotCaches(): X15PivotCaches | undefined { return this._f(X15PivotCaches); }
    /** Returns X15WorkbookProperties. */
    public get x15WorkbookProperties(): X15WorkbookProperties | undefined { return this._f(X15WorkbookProperties); }
    /** Returns X14DefinedNames. */
    public get definedNames(): X14DefinedNames | undefined { return this._f(X14DefinedNames); }
    /** Returns X15PivotTableReferences. */
    public get pivotTableReferences(): X15PivotTableReferences | undefined { return this._f(X15PivotTableReferences); }
    /** Returns X15TimelineCachePivotCaches. */
    public get timelineCachePivotCaches(): X15TimelineCachePivotCaches | undefined { return this._f(X15TimelineCachePivotCaches); }
    /** Returns X15TimelineCacheReferences. */
    public get timelineCacheReferences(): X15TimelineCacheReferences | undefined { return this._f(X15TimelineCacheReferences); }
    /** Returns X15DataModel. */
    public get dataModel(): X15DataModel | undefined { return this._f(X15DataModel); }

}
/** Defines the WorkbookExtensionList Class. Serialized as `x:extLst` */
export class WorkbookExtensionList extends OxmlCompositeElement<WorkbookExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the WebPublishObjects Class. Serialized as `x:webPublishObjects` */
export class WebPublishObjects extends OxmlCompositeElement<WebPublishObject> {

    public static override _Q = 'x:webPublishObjects';
    public static override _A = [':count',];
    /** Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the FileRecoveryProperties Class. Serialized as `x:fileRecoveryPr` */
export class FileRecoveryProperties extends OxmlLeafElement {

    public static override _Q = 'x:fileRecoveryPr';
    public static override _A = [':autoRecover',':crashSave',':dataExtractLoad',':repairLoad',];
    /** Auto Recover. Serialized as `:autoRecover` */
    public get autoRecover(): BooleanValue | undefined { return this._g(':autoRecover'); }
    public set autoRecover(v: BooleanValue | undefined) { this._s(':autoRecover', v); }
    /** Crash Save. Serialized as `:crashSave` */
    public get crashSave(): BooleanValue | undefined { return this._g(':crashSave'); }
    public set crashSave(v: BooleanValue | undefined) { this._s(':crashSave', v); }
    /** Data Extract Load. Serialized as `:dataExtractLoad` */
    public get dataExtractLoad(): BooleanValue | undefined { return this._g(':dataExtractLoad'); }
    public set dataExtractLoad(v: BooleanValue | undefined) { this._s(':dataExtractLoad', v); }
    /** Repair Load. Serialized as `:repairLoad` */
    public get repairLoad(): BooleanValue | undefined { return this._g(':repairLoad'); }
    public set repairLoad(v: BooleanValue | undefined) { this._s(':repairLoad', v); }

}
/** Defines the WebPublishing Class. Serialized as `x:webPublishing` */
export class WebPublishing extends OxmlLeafElement {

    public static override _Q = 'x:webPublishing';
    public static override _A = [':css',':thicket',':longFileNames',':vml',':allowPng',':targetScreenSize',':dpi',':codePage',':characterSet',];
    /** css. Serialized as `:css` */
    public get useCss(): BooleanValue | undefined { return this._g(':css'); }
    public set useCss(v: BooleanValue | undefined) { this._s(':css', v); }
    /** thicket. Serialized as `:thicket` */
    public get thicket(): BooleanValue | undefined { return this._g(':thicket'); }
    public set thicket(v: BooleanValue | undefined) { this._s(':thicket', v); }
    /** longFileNames. Serialized as `:longFileNames` */
    public get longFileNames(): BooleanValue | undefined { return this._g(':longFileNames'); }
    public set longFileNames(v: BooleanValue | undefined) { this._s(':longFileNames', v); }
    /** vml. Serialized as `:vml` */
    public get useVml(): BooleanValue | undefined { return this._g(':vml'); }
    public set useVml(v: BooleanValue | undefined) { this._s(':vml', v); }
    /** allowPng. Serialized as `:allowPng` */
    public get allowPng(): BooleanValue | undefined { return this._g(':allowPng'); }
    public set allowPng(v: BooleanValue | undefined) { this._s(':allowPng', v); }
    /** targetScreenSize. Serialized as `:targetScreenSize` */
    public get targetScreenSize(): TargetScreenSizeValues | undefined { return this._g(':targetScreenSize'); }
    public set targetScreenSize(v: TargetScreenSizeValues | undefined) { this._s(':targetScreenSize', v); }
    /** dpi. Serialized as `:dpi` */
    public get dpi(): UInt32Value | undefined { return this._g(':dpi'); }
    public set dpi(v: UInt32Value | undefined) { this._s(':dpi', v); }
    /** codePage. Serialized as `:codePage` */
    public get codePage(): UInt32Value | undefined { return this._g(':codePage'); }
    public set codePage(v: UInt32Value | undefined) { this._s(':codePage', v); }
    /** characterSet. Serialized as `:characterSet` */
    public get characterSet(): StringValue | undefined { return this._g(':characterSet'); }
    public set characterSet(v: StringValue | undefined) { this._s(':characterSet', v); }

}
/** Defines the PivotCaches Class. Serialized as `x:pivotCaches` */
export class PivotCaches extends OxmlCompositeElement<PivotCache> {

    public static override _Q = 'x:pivotCaches';

}
/** Defines the CustomWorkbookViews Class. Serialized as `x:customWorkbookViews` */
export class CustomWorkbookViews extends OxmlCompositeElement<CustomWorkbookView> {

    public static override _Q = 'x:customWorkbookViews';

}
/** Defines the OleSize Class. Serialized as `x:oleSize` */
export class OleSize extends OxmlLeafElement {

    public static override _Q = 'x:oleSize';
    public static override _A = [':ref',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the CalculationProperties Class. Serialized as `x:calcPr` */
export class CalculationProperties extends OxmlLeafElement {

    public static override _Q = 'x:calcPr';
    public static override _A = [':calcId',':calcMode',':fullCalcOnLoad',':refMode',':iterate',':iterateCount',':iterateDelta',':fullPrecision',':calcCompleted',':calcOnSave',':concurrentCalc',':concurrentManualCount',':forceFullCalc',];
    /** Calculation Id. Serialized as `:calcId` */
    public get calculationId(): UInt32Value | undefined { return this._g(':calcId'); }
    public set calculationId(v: UInt32Value | undefined) { this._s(':calcId', v); }
    /** Calculation Mode. Serialized as `:calcMode` */
    public get calculationMode(): CalculateModeValues | undefined { return this._g(':calcMode'); }
    public set calculationMode(v: CalculateModeValues | undefined) { this._s(':calcMode', v); }
    /** Full Calculation On Load. Serialized as `:fullCalcOnLoad` */
    public get fullCalculationOnLoad(): BooleanValue | undefined { return this._g(':fullCalcOnLoad'); }
    public set fullCalculationOnLoad(v: BooleanValue | undefined) { this._s(':fullCalcOnLoad', v); }
    /** Reference Mode. Serialized as `:refMode` */
    public get referenceMode(): ReferenceModeValues | undefined { return this._g(':refMode'); }
    public set referenceMode(v: ReferenceModeValues | undefined) { this._s(':refMode', v); }
    /** Calculation Iteration. Serialized as `:iterate` */
    public get iterate(): BooleanValue | undefined { return this._g(':iterate'); }
    public set iterate(v: BooleanValue | undefined) { this._s(':iterate', v); }
    /** Iteration Count. Serialized as `:iterateCount` */
    public get iterateCount(): UInt32Value | undefined { return this._g(':iterateCount'); }
    public set iterateCount(v: UInt32Value | undefined) { this._s(':iterateCount', v); }
    /** Iterative Calculation Delta. Serialized as `:iterateDelta` */
    public get iterateDelta(): DoubleValue | undefined { return this._g(':iterateDelta'); }
    public set iterateDelta(v: DoubleValue | undefined) { this._s(':iterateDelta', v); }
    /** Full Precision Calculation. Serialized as `:fullPrecision` */
    public get fullPrecision(): BooleanValue | undefined { return this._g(':fullPrecision'); }
    public set fullPrecision(v: BooleanValue | undefined) { this._s(':fullPrecision', v); }
    /** Calc Completed. Serialized as `:calcCompleted` */
    public get calculationCompleted(): BooleanValue | undefined { return this._g(':calcCompleted'); }
    public set calculationCompleted(v: BooleanValue | undefined) { this._s(':calcCompleted', v); }
    /** Calculate On Save. Serialized as `:calcOnSave` */
    public get calculationOnSave(): BooleanValue | undefined { return this._g(':calcOnSave'); }
    public set calculationOnSave(v: BooleanValue | undefined) { this._s(':calcOnSave', v); }
    /** Concurrent Calculations. Serialized as `:concurrentCalc` */
    public get concurrentCalculation(): BooleanValue | undefined { return this._g(':concurrentCalc'); }
    public set concurrentCalculation(v: BooleanValue | undefined) { this._s(':concurrentCalc', v); }
    /** Concurrent Thread Manual Count. Serialized as `:concurrentManualCount` */
    public get concurrentManualCount(): UInt32Value | undefined { return this._g(':concurrentManualCount'); }
    public set concurrentManualCount(v: UInt32Value | undefined) { this._s(':concurrentManualCount', v); }
    /** Force Full Calculation. Serialized as `:forceFullCalc` */
    public get forceFullCalculation(): BooleanValue | undefined { return this._g(':forceFullCalc'); }
    public set forceFullCalculation(v: BooleanValue | undefined) { this._s(':forceFullCalc', v); }

}
/** Defines the DefinedNames Class. Serialized as `x:definedNames` */
export class DefinedNames extends OxmlCompositeElement<DefinedName> {

    public static override _Q = 'x:definedNames';

}
/** Defines the ExternalReferences Class. Serialized as `x:externalReferences` */
export class ExternalReferences extends OxmlCompositeElement<ExternalReference> {

    public static override _Q = 'x:externalReferences';

}
/** Defines the FunctionGroups Class. Serialized as `x:functionGroups` */
export class FunctionGroups extends OxmlCompositeElement<FunctionGroup> {

    public static override _Q = 'x:functionGroups';
    public static override _A = [':builtInGroupCount',];
    /** Built-in Function Group Count. Serialized as `:builtInGroupCount` */
    public get builtInGroupCount(): UInt32Value | undefined { return this._g(':builtInGroupCount'); }
    public set builtInGroupCount(v: UInt32Value | undefined) { this._s(':builtInGroupCount', v); }

}
/** Defines the Sheets Class. Serialized as `x:sheets` */
export class Sheets extends OxmlCompositeElement<Sheet> {

    public static override _Q = 'x:sheets';

}
/** Defines the BookViews Class. Serialized as `x:bookViews` */
export class BookViews extends OxmlCompositeElement<WorkbookView> {

    public static override _Q = 'x:bookViews';

}
/** Defines the WorkbookProtection Class. Serialized as `x:workbookProtection` */
export class WorkbookProtection extends OxmlLeafElement {

    public static override _Q = 'x:workbookProtection';
    public static override _A = [':workbookPassword',':revisionsPassword',':lockStructure',':lockWindows',':lockRevision',':revisionsAlgorithmName',':revisionsHashValue',':revisionsSaltValue',':revisionsSpinCount',':workbookAlgorithmName',':workbookHashValue',':workbookSaltValue',':workbookSpinCount',];
    /** Workbook Password. Serialized as `:workbookPassword` */
    public get workbookPassword(): HexBinaryValue | undefined { return this._g(':workbookPassword'); }
    public set workbookPassword(v: HexBinaryValue | undefined) { this._s(':workbookPassword', v); }
    /** Revisions Password. Serialized as `:revisionsPassword` */
    public get revisionsPassword(): HexBinaryValue | undefined { return this._g(':revisionsPassword'); }
    public set revisionsPassword(v: HexBinaryValue | undefined) { this._s(':revisionsPassword', v); }
    /** Lock Structure. Serialized as `:lockStructure` */
    public get lockStructure(): BooleanValue | undefined { return this._g(':lockStructure'); }
    public set lockStructure(v: BooleanValue | undefined) { this._s(':lockStructure', v); }
    /** Lock Windows. Serialized as `:lockWindows` */
    public get lockWindows(): BooleanValue | undefined { return this._g(':lockWindows'); }
    public set lockWindows(v: BooleanValue | undefined) { this._s(':lockWindows', v); }
    /** Lock Revisions. Serialized as `:lockRevision` */
    public get lockRevision(): BooleanValue | undefined { return this._g(':lockRevision'); }
    public set lockRevision(v: BooleanValue | undefined) { this._s(':lockRevision', v); }
    /** Cryptographic Algorithm Name. Serialized as `:revisionsAlgorithmName` */
    public get revisionsAlgorithmName(): StringValue | undefined { return this._g(':revisionsAlgorithmName'); }
    public set revisionsAlgorithmName(v: StringValue | undefined) { this._s(':revisionsAlgorithmName', v); }
    /** Password Hash Value. Serialized as `:revisionsHashValue` */
    public get revisionsHashValue(): Base64BinaryValue | undefined { return this._g(':revisionsHashValue'); }
    public set revisionsHashValue(v: Base64BinaryValue | undefined) { this._s(':revisionsHashValue', v); }
    /** Salt Value for Password Verifier. Serialized as `:revisionsSaltValue` */
    public get revisionsSaltValue(): Base64BinaryValue | undefined { return this._g(':revisionsSaltValue'); }
    public set revisionsSaltValue(v: Base64BinaryValue | undefined) { this._s(':revisionsSaltValue', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `:revisionsSpinCount` */
    public get revisionsSpinCount(): UInt32Value | undefined { return this._g(':revisionsSpinCount'); }
    public set revisionsSpinCount(v: UInt32Value | undefined) { this._s(':revisionsSpinCount', v); }
    /** Cryptographic Algorithm Name. Serialized as `:workbookAlgorithmName` */
    public get workbookAlgorithmName(): StringValue | undefined { return this._g(':workbookAlgorithmName'); }
    public set workbookAlgorithmName(v: StringValue | undefined) { this._s(':workbookAlgorithmName', v); }
    /** Password Hash Value. Serialized as `:workbookHashValue` */
    public get workbookHashValue(): Base64BinaryValue | undefined { return this._g(':workbookHashValue'); }
    public set workbookHashValue(v: Base64BinaryValue | undefined) { this._s(':workbookHashValue', v); }
    /** Salt Value for Password Verifier. Serialized as `:workbookSaltValue` */
    public get workbookSaltValue(): Base64BinaryValue | undefined { return this._g(':workbookSaltValue'); }
    public set workbookSaltValue(v: Base64BinaryValue | undefined) { this._s(':workbookSaltValue', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `:workbookSpinCount` */
    public get workbookSpinCount(): UInt32Value | undefined { return this._g(':workbookSpinCount'); }
    public set workbookSpinCount(v: UInt32Value | undefined) { this._s(':workbookSpinCount', v); }

}
/** Defines the WorkbookProperties Class. Serialized as `x:workbookPr` */
export class WorkbookProperties extends OxmlLeafElement {

    public static override _Q = 'x:workbookPr';
    public static override _A = [':date1904',':dateCompatibility',':showObjects',':showBorderUnselectedTables',':filterPrivacy',':promptedSolutions',':showInkAnnotation',':backupFile',':saveExternalLinkValues',':updateLinks',':codeName',':hidePivotFieldList',':showPivotChartFilter',':allowRefreshQuery',':publishItems',':checkCompatibility',':autoCompressPictures',':refreshAllConnections',':defaultThemeVersion',];
    /** Date 1904. Serialized as `:date1904` */
    public get date1904(): BooleanValue | undefined { return this._g(':date1904'); }
    public set date1904(v: BooleanValue | undefined) { this._s(':date1904', v); }
    /** dateCompatibility. Serialized as `:dateCompatibility` */
    public get dateCompatibility(): BooleanValue | undefined { return this._g(':dateCompatibility'); }
    public set dateCompatibility(v: BooleanValue | undefined) { this._s(':dateCompatibility', v); }
    /** Show Objects. Serialized as `:showObjects` */
    public get showObjects(): ObjectDisplayValues | undefined { return this._g(':showObjects'); }
    public set showObjects(v: ObjectDisplayValues | undefined) { this._s(':showObjects', v); }
    /** Show Border Unselected Table. Serialized as `:showBorderUnselectedTables` */
    public get showBorderUnselectedTables(): BooleanValue | undefined { return this._g(':showBorderUnselectedTables'); }
    public set showBorderUnselectedTables(v: BooleanValue | undefined) { this._s(':showBorderUnselectedTables', v); }
    /** Filter Privacy. Serialized as `:filterPrivacy` */
    public get filterPrivacy(): BooleanValue | undefined { return this._g(':filterPrivacy'); }
    public set filterPrivacy(v: BooleanValue | undefined) { this._s(':filterPrivacy', v); }
    /** Prompted Solutions. Serialized as `:promptedSolutions` */
    public get promptedSolutions(): BooleanValue | undefined { return this._g(':promptedSolutions'); }
    public set promptedSolutions(v: BooleanValue | undefined) { this._s(':promptedSolutions', v); }
    /** Show Ink Annotations. Serialized as `:showInkAnnotation` */
    public get showInkAnnotation(): BooleanValue | undefined { return this._g(':showInkAnnotation'); }
    public set showInkAnnotation(v: BooleanValue | undefined) { this._s(':showInkAnnotation', v); }
    /** Create Backup File. Serialized as `:backupFile` */
    public get backupFile(): BooleanValue | undefined { return this._g(':backupFile'); }
    public set backupFile(v: BooleanValue | undefined) { this._s(':backupFile', v); }
    /** Save External Link Values. Serialized as `:saveExternalLinkValues` */
    public get saveExternalLinkValues(): BooleanValue | undefined { return this._g(':saveExternalLinkValues'); }
    public set saveExternalLinkValues(v: BooleanValue | undefined) { this._s(':saveExternalLinkValues', v); }
    /** Update Links Behavior. Serialized as `:updateLinks` */
    public get updateLinks(): UpdateLinksBehaviorValues | undefined { return this._g(':updateLinks'); }
    public set updateLinks(v: UpdateLinksBehaviorValues | undefined) { this._s(':updateLinks', v); }
    /** Code Name. Serialized as `:codeName` */
    public get codeName(): StringValue | undefined { return this._g(':codeName'); }
    public set codeName(v: StringValue | undefined) { this._s(':codeName', v); }
    /** Hide Pivot Field List. Serialized as `:hidePivotFieldList` */
    public get hidePivotFieldList(): BooleanValue | undefined { return this._g(':hidePivotFieldList'); }
    public set hidePivotFieldList(v: BooleanValue | undefined) { this._s(':hidePivotFieldList', v); }
    /** Show Pivot Chart Filter. Serialized as `:showPivotChartFilter` */
    public get showPivotChartFilter(): BooleanValue | undefined { return this._g(':showPivotChartFilter'); }
    public set showPivotChartFilter(v: BooleanValue | undefined) { this._s(':showPivotChartFilter', v); }
    /** Allow Refresh Query. Serialized as `:allowRefreshQuery` */
    public get allowRefreshQuery(): BooleanValue | undefined { return this._g(':allowRefreshQuery'); }
    public set allowRefreshQuery(v: BooleanValue | undefined) { this._s(':allowRefreshQuery', v); }
    /** Publish Items. Serialized as `:publishItems` */
    public get publishItems(): BooleanValue | undefined { return this._g(':publishItems'); }
    public set publishItems(v: BooleanValue | undefined) { this._s(':publishItems', v); }
    /** Check Compatibility On Save. Serialized as `:checkCompatibility` */
    public get checkCompatibility(): BooleanValue | undefined { return this._g(':checkCompatibility'); }
    public set checkCompatibility(v: BooleanValue | undefined) { this._s(':checkCompatibility', v); }
    /** Auto Compress Pictures. Serialized as `:autoCompressPictures` */
    public get autoCompressPictures(): BooleanValue | undefined { return this._g(':autoCompressPictures'); }
    public set autoCompressPictures(v: BooleanValue | undefined) { this._s(':autoCompressPictures', v); }
    /** Refresh all Connections on Open. Serialized as `:refreshAllConnections` */
    public get refreshAllConnections(): BooleanValue | undefined { return this._g(':refreshAllConnections'); }
    public set refreshAllConnections(v: BooleanValue | undefined) { this._s(':refreshAllConnections', v); }
    /** Default Theme Version. Serialized as `:defaultThemeVersion` */
    public get defaultThemeVersion(): UInt32Value | undefined { return this._g(':defaultThemeVersion'); }
    public set defaultThemeVersion(v: UInt32Value | undefined) { this._s(':defaultThemeVersion', v); }

}
/** Defines the FileSharing Class. Serialized as `x:fileSharing` */
export class FileSharing extends OxmlLeafElement {

    public static override _Q = 'x:fileSharing';
    public static override _A = [':readOnlyRecommended',':userName',':reservationPassword',':algorithmName',':hashValue',':saltValue',':spinCount',];
    /** Read Only Recommended. Serialized as `:readOnlyRecommended` */
    public get readOnlyRecommended(): BooleanValue | undefined { return this._g(':readOnlyRecommended'); }
    public set readOnlyRecommended(v: BooleanValue | undefined) { this._s(':readOnlyRecommended', v); }
    /** User Name. Serialized as `:userName` */
    public get userName(): StringValue | undefined { return this._g(':userName'); }
    public set userName(v: StringValue | undefined) { this._s(':userName', v); }
    /** Write Reservation Password. Serialized as `:reservationPassword` */
    public get reservationPassword(): HexBinaryValue | undefined { return this._g(':reservationPassword'); }
    public set reservationPassword(v: HexBinaryValue | undefined) { this._s(':reservationPassword', v); }
    /** Password hash algorithm. Serialized as `:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g(':algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s(':algorithmName', v); }
    /** Password hash. Serialized as `:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g(':hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s(':hashValue', v); }
    /** Salt for password hash. Serialized as `:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g(':saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s(':saltValue', v); }
    /** Spin count for password hash. Serialized as `:spinCount` */
    public get spinCount(): UInt32Value | undefined { return this._g(':spinCount'); }
    public set spinCount(v: UInt32Value | undefined) { this._s(':spinCount', v); }

}
/** Defines the FileVersion Class. Serialized as `x:fileVersion` */
export class FileVersion extends OxmlLeafElement {

    public static override _Q = 'x:fileVersion';
    public static override _A = [':appName',':lastEdited',':lowestEdited',':rupBuild',':codeName',];
    /** Application Name. Serialized as `:appName` */
    public get applicationName(): StringValue | undefined { return this._g(':appName'); }
    public set applicationName(v: StringValue | undefined) { this._s(':appName', v); }
    /** Last Edited Version. Serialized as `:lastEdited` */
    public get lastEdited(): StringValue | undefined { return this._g(':lastEdited'); }
    public set lastEdited(v: StringValue | undefined) { this._s(':lastEdited', v); }
    /** Lowest Edited Version. Serialized as `:lowestEdited` */
    public get lowestEdited(): StringValue | undefined { return this._g(':lowestEdited'); }
    public set lowestEdited(v: StringValue | undefined) { this._s(':lowestEdited', v); }
    /** Build Version. Serialized as `:rupBuild` */
    public get buildVersion(): StringValue | undefined { return this._g(':rupBuild'); }
    public set buildVersion(v: StringValue | undefined) { this._s(':rupBuild', v); }
    /** Code Name. Serialized as `:codeName` */
    public get codeName(): StringValue | undefined { return this._g(':codeName'); }
    public set codeName(v: StringValue | undefined) { this._s(':codeName', v); }

}
/** Defines the StylesheetExtension Class. Serialized as `x:ext` */
export class StylesheetExtension extends OxmlCompositeElement<X14DifferentialFormats | X14SlicerStyles | X15DifferentialFormats | X15TimelineStyles> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14DifferentialFormats. */
    public get x14DifferentialFormats(): X14DifferentialFormats | undefined { return this._f(X14DifferentialFormats); }
    /** Returns X15DifferentialFormats. */
    public get x15DifferentialFormats(): X15DifferentialFormats | undefined { return this._f(X15DifferentialFormats); }
    /** Returns X14SlicerStyles. */
    public get slicerStyles(): X14SlicerStyles | undefined { return this._f(X14SlicerStyles); }
    /** Returns X15TimelineStyles. */
    public get timelineStyles(): X15TimelineStyles | undefined { return this._f(X15TimelineStyles); }

}
/** Defines the StylesheetExtensionList Class. Serialized as `x:extLst` */
export class StylesheetExtensionList extends OxmlCompositeElement<StylesheetExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the Colors Class. Serialized as `x:colors` */
export class Colors extends OxmlCompositeElement<IndexedColors | MruColors> {

    public static override _Q = 'x:colors';
    /** Color Indexes. */
    public get indexedColors(): IndexedColors | undefined { return this._f(IndexedColors); }
    /** MRU Colors. */
    public get mruColors(): MruColors | undefined { return this._f(MruColors); }

}
/** Defines the TableStyles Class. Serialized as `x:tableStyles` */
export class TableStyles extends OxmlCompositeElement<TableStyle> {

    public static override _Q = 'x:tableStyles';
    public static override _A = [':count',':defaultTableStyle',':defaultPivotStyle',];
    /** Table Style Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Default Table Style. Serialized as `:defaultTableStyle` */
    public get defaultTableStyle(): StringValue | undefined { return this._g(':defaultTableStyle'); }
    public set defaultTableStyle(v: StringValue | undefined) { this._s(':defaultTableStyle', v); }
    /** Default Pivot Style. Serialized as `:defaultPivotStyle` */
    public get defaultPivotStyle(): StringValue | undefined { return this._g(':defaultPivotStyle'); }
    public set defaultPivotStyle(v: StringValue | undefined) { this._s(':defaultPivotStyle', v); }

}
/** Defines the DifferentialFormats Class. Serialized as `x:dxfs` */
export class DifferentialFormats extends OxmlCompositeElement<DifferentialFormat> {

    public static override _Q = 'x:dxfs';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CellStyles Class. Serialized as `x:cellStyles` */
export class CellStyles extends OxmlCompositeElement<CellStyle> {

    public static override _Q = 'x:cellStyles';
    public static override _A = [':count',];
    /** Style Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CellFormats Class. Serialized as `x:cellXfs` */
export class CellFormats extends OxmlCompositeElement<CellFormat> {

    public static override _Q = 'x:cellXfs';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CellStyleFormats Class. Serialized as `x:cellStyleXfs` */
export class CellStyleFormats extends OxmlCompositeElement<CellFormat> {

    public static override _Q = 'x:cellStyleXfs';
    public static override _A = [':count',];
    /** Style Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Borders Class. Serialized as `x:borders` */
export class Borders extends OxmlCompositeElement<Border> {

    public static override _Q = 'x:borders';
    public static override _A = [':count',];
    /** Border Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Fills Class. Serialized as `x:fills` */
export class Fills extends OxmlCompositeElement<Fill> {

    public static override _Q = 'x:fills';
    public static override _A = [':count',];
    /** Fill Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Fonts Class. Serialized as `x:fonts` */
export class Fonts extends OxmlCompositeElement<Font> {

    public static override _Q = 'x:fonts';
    public static override _A = [':count','x14ac:knownFonts',];
    /** Font Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** knownFonts. Serialized as `x14ac:knownFonts` */
    public get knownFonts(): BooleanValue | undefined { return this._g('x14ac:knownFonts'); }
    public set knownFonts(v: BooleanValue | undefined) { this._s('x14ac:knownFonts', v); }

}
/** Defines the NumberingFormats Class. Serialized as `x:numFmts` */
export class NumberingFormats extends OxmlCompositeElement<NumberingFormat> {

    public static override _Q = 'x:numFmts';
    public static override _A = [':count',];
    /** Number Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the WorksheetExtension Class. Serialized as `x:ext` */
export class WorksheetExtension extends OxmlCompositeElement<X14ConditionalFormattings | X14DataValidations | X14SparklineGroups | X14SlicerList | X14ProtectedRanges | X14IgnoredErrors | X15WebExtensions | X15TimelineReferences> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14ConditionalFormattings. */
    public get conditionalFormattings(): X14ConditionalFormattings | undefined { return this._f(X14ConditionalFormattings); }
    /** Returns X14DataValidations. */
    public get dataValidations(): X14DataValidations | undefined { return this._f(X14DataValidations); }
    /** Returns X14SparklineGroups. */
    public get sparklineGroups(): X14SparklineGroups | undefined { return this._f(X14SparklineGroups); }
    /** Returns X14SlicerList. */
    public get slicerList(): X14SlicerList | undefined { return this._f(X14SlicerList); }
    /** Returns X14ProtectedRanges. */
    public get protectedRanges(): X14ProtectedRanges | undefined { return this._f(X14ProtectedRanges); }
    /** Returns X14IgnoredErrors. */
    public get ignoredErrors(): X14IgnoredErrors | undefined { return this._f(X14IgnoredErrors); }
    /** Returns X15WebExtensions. */
    public get webExtensions(): X15WebExtensions | undefined { return this._f(X15WebExtensions); }
    /** Returns X15TimelineReferences. */
    public get timelineReferences(): X15TimelineReferences | undefined { return this._f(X15TimelineReferences); }

}
/** Defines the WorksheetExtensionList Class. Serialized as `x:extLst` */
export class WorksheetExtensionList extends OxmlCompositeElement<WorksheetExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the TableParts Class. Serialized as `x:tableParts` */
export class TableParts extends OxmlCompositeElement<TablePart> {

    public static override _Q = 'x:tableParts';
    public static override _A = [':count',];
    /** Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the IgnoredErrors Class. Serialized as `x:ignoredErrors` */
export class IgnoredErrors extends OxmlCompositeElement<IgnoredError | ExtensionList> {

    public static override _Q = 'x:ignoredErrors';

}
/** Defines the CellWatches Class. Serialized as `x:cellWatches` */
export class CellWatches extends OxmlCompositeElement<CellWatch> {

    public static override _Q = 'x:cellWatches';

}
/** Defines the Hyperlinks Class. Serialized as `x:hyperlinks` */
export class Hyperlinks extends OxmlCompositeElement<Hyperlink> {

    public static override _Q = 'x:hyperlinks';

}
/** Defines the DataValidations Class. Serialized as `x:dataValidations` */
export class DataValidations extends OxmlCompositeElement<DataValidation> {

    public static override _Q = 'x:dataValidations';
    public static override _A = [':disablePrompts',':xWindow',':yWindow',':count',];
    /** Disable Prompts. Serialized as `:disablePrompts` */
    public get disablePrompts(): BooleanValue | undefined { return this._g(':disablePrompts'); }
    public set disablePrompts(v: BooleanValue | undefined) { this._s(':disablePrompts', v); }
    /** Top Left Corner (X Coodrinate). Serialized as `:xWindow` */
    public get xWindow(): UInt32Value | undefined { return this._g(':xWindow'); }
    public set xWindow(v: UInt32Value | undefined) { this._s(':xWindow', v); }
    /** Top Left Corner (Y Coordinate). Serialized as `:yWindow` */
    public get yWindow(): UInt32Value | undefined { return this._g(':yWindow'); }
    public set yWindow(v: UInt32Value | undefined) { this._s(':yWindow', v); }
    /** Data Validation Item Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the MergeCells Class. Serialized as `x:mergeCells` */
export class MergeCells extends OxmlCompositeElement<MergeCell> {

    public static override _Q = 'x:mergeCells';
    public static override _A = [':count',];
    /** Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Scenarios Class. Serialized as `x:scenarios` */
export class Scenarios extends OxmlCompositeElement<Scenario> {

    public static override _Q = 'x:scenarios';
    public static override _A = [':current',':show',':sqref',];
    /** Current Scenario. Serialized as `:current` */
    public get current(): UInt32Value | undefined { return this._g(':current'); }
    public set current(v: UInt32Value | undefined) { this._s(':current', v); }
    /** Last Shown Scenario. Serialized as `:show` */
    public get show(): UInt32Value | undefined { return this._g(':show'); }
    public set show(v: UInt32Value | undefined) { this._s(':show', v); }
    /** Sequence of References. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }

}
/** Defines the ProtectedRanges Class. Serialized as `x:protectedRanges` */
export class ProtectedRanges extends OxmlCompositeElement<ProtectedRange> {

    public static override _Q = 'x:protectedRanges';

}
/** Defines the SheetCalculationProperties Class. Serialized as `x:sheetCalcPr` */
export class SheetCalculationProperties extends OxmlLeafElement {

    public static override _Q = 'x:sheetCalcPr';
    public static override _A = [':fullCalcOnLoad',];
    /** Full Calculation On Load. Serialized as `:fullCalcOnLoad` */
    public get fullCalculationOnLoad(): BooleanValue | undefined { return this._g(':fullCalcOnLoad'); }
    public set fullCalculationOnLoad(v: BooleanValue | undefined) { this._s(':fullCalcOnLoad', v); }

}
/** Defines the QueryTableExtensionList Class. Serialized as `x:extLst` */
export class QueryTableExtensionList extends OxmlCompositeElement<QueryTableExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the QueryTableRefresh Class. Serialized as `x:queryTableRefresh` */
export class QueryTableRefresh extends OxmlCompositeElement<QueryTableFields | QueryTableDeletedFields | SortState | ExtensionList> {

    public static override _Q = 'x:queryTableRefresh';
    public static override _A = [':preserveSortFilterLayout',':fieldIdWrapped',':headersInLastRefresh',':minimumVersion',':nextId',':unboundColumnsLeft',':unboundColumnsRight',];
    /** Preserve Sort and Filter Layout. Serialized as `:preserveSortFilterLayout` */
    public get preserveSortFilterLayout(): BooleanValue | undefined { return this._g(':preserveSortFilterLayout'); }
    public set preserveSortFilterLayout(v: BooleanValue | undefined) { this._s(':preserveSortFilterLayout', v); }
    /** Next Field Id Wrapped. Serialized as `:fieldIdWrapped` */
    public get fieldIdWrapped(): BooleanValue | undefined { return this._g(':fieldIdWrapped'); }
    public set fieldIdWrapped(v: BooleanValue | undefined) { this._s(':fieldIdWrapped', v); }
    /** Headers In Last Refresh. Serialized as `:headersInLastRefresh` */
    public get headersInLastRefresh(): BooleanValue | undefined { return this._g(':headersInLastRefresh'); }
    public set headersInLastRefresh(v: BooleanValue | undefined) { this._s(':headersInLastRefresh', v); }
    /** Minimum Refresh Version. Serialized as `:minimumVersion` */
    public get minimumVersion(): ByteValue | undefined { return this._g(':minimumVersion'); }
    public set minimumVersion(v: ByteValue | undefined) { this._s(':minimumVersion', v); }
    /** Next field id. Serialized as `:nextId` */
    public get nextId(): UInt32Value | undefined { return this._g(':nextId'); }
    public set nextId(v: UInt32Value | undefined) { this._s(':nextId', v); }
    /** Columns Left. Serialized as `:unboundColumnsLeft` */
    public get unboundColumnsLeft(): UInt32Value | undefined { return this._g(':unboundColumnsLeft'); }
    public set unboundColumnsLeft(v: UInt32Value | undefined) { this._s(':unboundColumnsLeft', v); }
    /** Columns Right. Serialized as `:unboundColumnsRight` */
    public get unboundColumnsRight(): UInt32Value | undefined { return this._g(':unboundColumnsRight'); }
    public set unboundColumnsRight(v: UInt32Value | undefined) { this._s(':unboundColumnsRight', v); }
    /** Query table fields. */
    public get queryTableFields(): QueryTableFields | undefined { return this._f(QueryTableFields); }
    /** Deleted Fields. */
    public get queryTableDeletedFields(): QueryTableDeletedFields | undefined { return this._f(QueryTableDeletedFields); }
    /** Sort State. */
    public get sortState(): SortState | undefined { return this._f(SortState); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the PivotFilterExtensionList Class. Serialized as `x:extLst` */
export class PivotFilterExtensionList extends OxmlCompositeElement<PivotFilterExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the DataFieldExtension Class. Serialized as `x:ext` */
export class DataFieldExtension extends OxmlCompositeElement<X14DataField | X15DataField> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14DataField. */
    public get x14DataField(): X14DataField | undefined { return this._f(X14DataField); }
    /** Returns X15DataField. */
    public get x15DataField(): X15DataField | undefined { return this._f(X15DataField); }

}
/** Defines the DataFieldExtensionList Class. Serialized as `x:extLst` */
export class DataFieldExtensionList extends OxmlCompositeElement<DataFieldExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the CalculatedMemberExtension Class. Serialized as `x:ext` */
export class CalculatedMemberExtension extends OxmlCompositeElement<X14CalculatedMember | X15CalculatedMember> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14CalculatedMember. */
    public get x14CalculatedMember(): X14CalculatedMember | undefined { return this._f(X14CalculatedMember); }
    /** Returns X15CalculatedMember. */
    public get x15CalculatedMember(): X15CalculatedMember | undefined { return this._f(X15CalculatedMember); }

}
/** Defines the CalculatedMemberExtensionList Class. Serialized as `x:extLst` */
export class CalculatedMemberExtensionList extends OxmlCompositeElement<CalculatedMemberExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the CacheHierarchyExtension Class. Serialized as `x:ext` */
export class CacheHierarchyExtension extends OxmlCompositeElement<X14CacheHierarchy | X15CacheHierarchy> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14CacheHierarchy. */
    public get x14CacheHierarchy(): X14CacheHierarchy | undefined { return this._f(X14CacheHierarchy); }
    /** Returns X15CacheHierarchy. */
    public get x15CacheHierarchy(): X15CacheHierarchy | undefined { return this._f(X15CacheHierarchy); }

}
/** Defines the CacheHierarchyExtensionList Class. Serialized as `x:extLst` */
export class CacheHierarchyExtensionList extends OxmlCompositeElement<CacheHierarchyExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the GroupLevels Class. Serialized as `x:groupLevels` */
export class GroupLevels extends OxmlCompositeElement<GroupLevel> {

    public static override _Q = 'x:groupLevels';
    public static override _A = [':count',];
    /** Grouping Level Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the FieldsUsage Class. Serialized as `x:fieldsUsage` */
export class FieldsUsage extends OxmlCompositeElement<FieldUsage> {

    public static override _Q = 'x:fieldsUsage';
    public static override _A = [':count',];
    /** Field Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CacheFieldExtension Class. Serialized as `x:ext` */
export class CacheFieldExtension extends OxmlCompositeElement<X14CacheField | X15CachedUniqueNames> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14CacheField. */
    public get cacheField(): X14CacheField | undefined { return this._f(X14CacheField); }
    /** Returns X15CachedUniqueNames. */
    public get cachedUniqueNames(): X15CachedUniqueNames | undefined { return this._f(X15CachedUniqueNames); }

}
/** Defines the CacheFieldExtensionList Class. Serialized as `x:extLst` */
export class CacheFieldExtensionList extends OxmlCompositeElement<CacheFieldExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the FieldGroup Class. Serialized as `x:fieldGroup` */
export class FieldGroup extends OxmlCompositeElement<RangeProperties | DiscreteProperties | GroupItems> {

    public static override _Q = 'x:fieldGroup';
    public static override _A = [':par',':base',];
    /** Parent. Serialized as `:par` */
    public get parentId(): UInt32Value | undefined { return this._g(':par'); }
    public set parentId(v: UInt32Value | undefined) { this._s(':par', v); }
    /** Field Base. Serialized as `:base` */
    public get base(): UInt32Value | undefined { return this._g(':base'); }
    public set base(v: UInt32Value | undefined) { this._s(':base', v); }

}
/** Defines the SharedItems Class. Serialized as `x:sharedItems` */
export class SharedItems extends OxmlCompositeElement<MissingItem | NumberItem | BooleanItem | ErrorItem | StringItem | DateTimeItem> {

    public static override _Q = 'x:sharedItems';
    public static override _A = [':containsSemiMixedTypes',':containsNonDate',':containsDate',':containsString',':containsBlank',':containsMixedTypes',':containsNumber',':containsInteger',':minValue',':maxValue',':minDate',':maxDate',':count',':longText',];
    /** Contains Semi Mixed Data Types. Serialized as `:containsSemiMixedTypes` */
    public get containsSemiMixedTypes(): BooleanValue | undefined { return this._g(':containsSemiMixedTypes'); }
    public set containsSemiMixedTypes(v: BooleanValue | undefined) { this._s(':containsSemiMixedTypes', v); }
    /** Contains Non Date. Serialized as `:containsNonDate` */
    public get containsNonDate(): BooleanValue | undefined { return this._g(':containsNonDate'); }
    public set containsNonDate(v: BooleanValue | undefined) { this._s(':containsNonDate', v); }
    /** Contains Date. Serialized as `:containsDate` */
    public get containsDate(): BooleanValue | undefined { return this._g(':containsDate'); }
    public set containsDate(v: BooleanValue | undefined) { this._s(':containsDate', v); }
    /** Contains String. Serialized as `:containsString` */
    public get containsString(): BooleanValue | undefined { return this._g(':containsString'); }
    public set containsString(v: BooleanValue | undefined) { this._s(':containsString', v); }
    /** Contains Blank. Serialized as `:containsBlank` */
    public get containsBlank(): BooleanValue | undefined { return this._g(':containsBlank'); }
    public set containsBlank(v: BooleanValue | undefined) { this._s(':containsBlank', v); }
    /** Contains Mixed Data Types. Serialized as `:containsMixedTypes` */
    public get containsMixedTypes(): BooleanValue | undefined { return this._g(':containsMixedTypes'); }
    public set containsMixedTypes(v: BooleanValue | undefined) { this._s(':containsMixedTypes', v); }
    /** Contains Numbers. Serialized as `:containsNumber` */
    public get containsNumber(): BooleanValue | undefined { return this._g(':containsNumber'); }
    public set containsNumber(v: BooleanValue | undefined) { this._s(':containsNumber', v); }
    /** Contains Integer. Serialized as `:containsInteger` */
    public get containsInteger(): BooleanValue | undefined { return this._g(':containsInteger'); }
    public set containsInteger(v: BooleanValue | undefined) { this._s(':containsInteger', v); }
    /** Minimum Numeric Value. Serialized as `:minValue` */
    public get minValue(): DoubleValue | undefined { return this._g(':minValue'); }
    public set minValue(v: DoubleValue | undefined) { this._s(':minValue', v); }
    /** Maximum Numeric Value. Serialized as `:maxValue` */
    public get maxValue(): DoubleValue | undefined { return this._g(':maxValue'); }
    public set maxValue(v: DoubleValue | undefined) { this._s(':maxValue', v); }
    /** Minimum Date Time. Serialized as `:minDate` */
    public get minDate(): DateTimeValue | undefined { return this._g(':minDate'); }
    public set minDate(v: DateTimeValue | undefined) { this._s(':minDate', v); }
    /** Maximum Date Time Value. Serialized as `:maxDate` */
    public get maxDate(): DateTimeValue | undefined { return this._g(':maxDate'); }
    public set maxDate(v: DateTimeValue | undefined) { this._s(':maxDate', v); }
    /** Shared Items Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Long Text. Serialized as `:longText` */
    public get longText(): BooleanValue | undefined { return this._g(':longText'); }
    public set longText(v: BooleanValue | undefined) { this._s(':longText', v); }

}
/** Defines the TextFields Class. Serialized as `x:textFields` */
export class TextFields extends OxmlCompositeElement<TextField> {

    public static override _Q = 'x:textFields';
    public static override _A = [':count',];
    /** Count of Fields. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ConnectionExtension Class. Serialized as `x:ext` */
export class ConnectionExtension extends OxmlCompositeElement<X14Connection | X15Connection> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14Connection. */
    public get x14Connection(): X14Connection | undefined { return this._f(X14Connection); }
    /** Returns X15Connection. */
    public get x15Connection(): X15Connection | undefined { return this._f(X15Connection); }

}
/** Defines the ConnectionExtensionList Class. Serialized as `x:extLst` */
export class ConnectionExtensionList extends OxmlCompositeElement<ConnectionExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the Parameters Class. Serialized as `x:parameters` */
export class Parameters extends OxmlCompositeElement<Parameter> {

    public static override _Q = 'x:parameters';
    public static override _A = [':count',];
    /** Parameter Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the TextProperties Class. Serialized as `x:textPr` */
export class TextProperties extends OxmlCompositeElement<TextFields> {

    public static override _Q = 'x:textPr';
    public static override _A = [':prompt',':fileType',':codePage',':characterSet',':firstRow',':sourceFile',':delimited',':decimal',':thousands',':tab',':space',':comma',':semicolon',':consecutive',':qualifier',':delimiter',];
    /** prompt. Serialized as `:prompt` */
    public get prompt(): BooleanValue | undefined { return this._g(':prompt'); }
    public set prompt(v: BooleanValue | undefined) { this._s(':prompt', v); }
    /** fileType. Serialized as `:fileType` */
    public get fileType(): FileTypeValues | undefined { return this._g(':fileType'); }
    public set fileType(v: FileTypeValues | undefined) { this._s(':fileType', v); }
    /** codePage. Serialized as `:codePage` */
    public get codePage(): UInt32Value | undefined { return this._g(':codePage'); }
    public set codePage(v: UInt32Value | undefined) { this._s(':codePage', v); }
    /** characterSet. Serialized as `:characterSet` */
    public get textCharacterSet(): StringValue | undefined { return this._g(':characterSet'); }
    public set textCharacterSet(v: StringValue | undefined) { this._s(':characterSet', v); }
    /** firstRow. Serialized as `:firstRow` */
    public get firstRow(): UInt32Value | undefined { return this._g(':firstRow'); }
    public set firstRow(v: UInt32Value | undefined) { this._s(':firstRow', v); }
    /** sourceFile. Serialized as `:sourceFile` */
    public get sourceFile(): StringValue | undefined { return this._g(':sourceFile'); }
    public set sourceFile(v: StringValue | undefined) { this._s(':sourceFile', v); }
    /** delimited. Serialized as `:delimited` */
    public get delimited(): BooleanValue | undefined { return this._g(':delimited'); }
    public set delimited(v: BooleanValue | undefined) { this._s(':delimited', v); }
    /** decimal. Serialized as `:decimal` */
    public get decimal(): StringValue | undefined { return this._g(':decimal'); }
    public set decimal(v: StringValue | undefined) { this._s(':decimal', v); }
    /** thousands. Serialized as `:thousands` */
    public get thousands(): StringValue | undefined { return this._g(':thousands'); }
    public set thousands(v: StringValue | undefined) { this._s(':thousands', v); }
    /** tab. Serialized as `:tab` */
    public get tabAsDelimiter(): BooleanValue | undefined { return this._g(':tab'); }
    public set tabAsDelimiter(v: BooleanValue | undefined) { this._s(':tab', v); }
    /** space. Serialized as `:space` */
    public get space(): BooleanValue | undefined { return this._g(':space'); }
    public set space(v: BooleanValue | undefined) { this._s(':space', v); }
    /** comma. Serialized as `:comma` */
    public get comma(): BooleanValue | undefined { return this._g(':comma'); }
    public set comma(v: BooleanValue | undefined) { this._s(':comma', v); }
    /** semicolon. Serialized as `:semicolon` */
    public get semicolon(): BooleanValue | undefined { return this._g(':semicolon'); }
    public set semicolon(v: BooleanValue | undefined) { this._s(':semicolon', v); }
    /** consecutive. Serialized as `:consecutive` */
    public get consecutive(): BooleanValue | undefined { return this._g(':consecutive'); }
    public set consecutive(v: BooleanValue | undefined) { this._s(':consecutive', v); }
    /** qualifier. Serialized as `:qualifier` */
    public get qualifier(): QualifierValues | undefined { return this._g(':qualifier'); }
    public set qualifier(v: QualifierValues | undefined) { this._s(':qualifier', v); }
    /** delimiter. Serialized as `:delimiter` */
    public get delimiter(): StringValue | undefined { return this._g(':delimiter'); }
    public set delimiter(v: StringValue | undefined) { this._s(':delimiter', v); }
    /** Returns TextFields. */
    public get textFields(): TextFields | undefined { return this._f(TextFields); }

}
/** Defines the WebQueryProperties Class. Serialized as `x:webPr` */
export class WebQueryProperties extends OxmlCompositeElement<Tables> {

    public static override _Q = 'x:webPr';
    public static override _A = [':xml',':sourceData',':parsePre',':consecutive',':firstRow',':xl97',':textDates',':xl2000',':url',':post',':htmlTables',':htmlFormat',':editPage',];
    /** XML Source. Serialized as `:xml` */
    public get xmlSource(): BooleanValue | undefined { return this._g(':xml'); }
    public set xmlSource(v: BooleanValue | undefined) { this._s(':xml', v); }
    /** Import XML Source Data. Serialized as `:sourceData` */
    public get sourceData(): BooleanValue | undefined { return this._g(':sourceData'); }
    public set sourceData(v: BooleanValue | undefined) { this._s(':sourceData', v); }
    /** Parse PRE. Serialized as `:parsePre` */
    public get parsePreTag(): BooleanValue | undefined { return this._g(':parsePre'); }
    public set parsePreTag(v: BooleanValue | undefined) { this._s(':parsePre', v); }
    /** Consecutive Delimiters. Serialized as `:consecutive` */
    public get consecutive(): BooleanValue | undefined { return this._g(':consecutive'); }
    public set consecutive(v: BooleanValue | undefined) { this._s(':consecutive', v); }
    /** Use First Row. Serialized as `:firstRow` */
    public get firstRow(): BooleanValue | undefined { return this._g(':firstRow'); }
    public set firstRow(v: BooleanValue | undefined) { this._s(':firstRow', v); }
    /** Created in Excel 97. Serialized as `:xl97` */
    public get createdInExcel97(): BooleanValue | undefined { return this._g(':xl97'); }
    public set createdInExcel97(v: BooleanValue | undefined) { this._s(':xl97', v); }
    /** Dates as Text. Serialized as `:textDates` */
    public get textDates(): BooleanValue | undefined { return this._g(':textDates'); }
    public set textDates(v: BooleanValue | undefined) { this._s(':textDates', v); }
    /** Refreshed in Excel 2000. Serialized as `:xl2000` */
    public get refreshedInExcel2000(): BooleanValue | undefined { return this._g(':xl2000'); }
    public set refreshedInExcel2000(v: BooleanValue | undefined) { this._s(':xl2000', v); }
    /** URL. Serialized as `:url` */
    public get url(): StringValue | undefined { return this._g(':url'); }
    public set url(v: StringValue | undefined) { this._s(':url', v); }
    /** Web Post. Serialized as `:post` */
    public get post(): StringValue | undefined { return this._g(':post'); }
    public set post(v: StringValue | undefined) { this._s(':post', v); }
    /** HTML Tables Only. Serialized as `:htmlTables` */
    public get htmlTables(): BooleanValue | undefined { return this._g(':htmlTables'); }
    public set htmlTables(v: BooleanValue | undefined) { this._s(':htmlTables', v); }
    /** HTML Formatting Handling. Serialized as `:htmlFormat` */
    public get htmlFormat(): HtmlFormattingValues | undefined { return this._g(':htmlFormat'); }
    public set htmlFormat(v: HtmlFormattingValues | undefined) { this._s(':htmlFormat', v); }
    /** Edit Query URL. Serialized as `:editPage` */
    public get editPage(): StringValue | undefined { return this._g(':editPage'); }
    public set editPage(v: StringValue | undefined) { this._s(':editPage', v); }
    /** Tables. */
    public get tables(): Tables | undefined { return this._f(Tables); }

}
/** Defines the OlapProperties Class. Serialized as `x:olapPr` */
export class OlapProperties extends OxmlLeafElement {

    public static override _Q = 'x:olapPr';
    public static override _A = [':local',':localConnection',':localRefresh',':sendLocale',':rowDrillCount',':serverFill',':serverNumberFormat',':serverFont',':serverFontColor',];
    /** Local Cube. Serialized as `:local` */
    public get local(): BooleanValue | undefined { return this._g(':local'); }
    public set local(v: BooleanValue | undefined) { this._s(':local', v); }
    /** Local Cube Connection. Serialized as `:localConnection` */
    public get localConnection(): StringValue | undefined { return this._g(':localConnection'); }
    public set localConnection(v: StringValue | undefined) { this._s(':localConnection', v); }
    /** Local Refresh. Serialized as `:localRefresh` */
    public get localRefresh(): BooleanValue | undefined { return this._g(':localRefresh'); }
    public set localRefresh(v: BooleanValue | undefined) { this._s(':localRefresh', v); }
    /** Send Locale to OLAP. Serialized as `:sendLocale` */
    public get sendLocale(): BooleanValue | undefined { return this._g(':sendLocale'); }
    public set sendLocale(v: BooleanValue | undefined) { this._s(':sendLocale', v); }
    /** Drill Through Count. Serialized as `:rowDrillCount` */
    public get rowDrillCount(): UInt32Value | undefined { return this._g(':rowDrillCount'); }
    public set rowDrillCount(v: UInt32Value | undefined) { this._s(':rowDrillCount', v); }
    /** OLAP Fill Formatting. Serialized as `:serverFill` */
    public get serverFill(): BooleanValue | undefined { return this._g(':serverFill'); }
    public set serverFill(v: BooleanValue | undefined) { this._s(':serverFill', v); }
    /** OLAP Number Format. Serialized as `:serverNumberFormat` */
    public get serverNumberFormat(): BooleanValue | undefined { return this._g(':serverNumberFormat'); }
    public set serverNumberFormat(v: BooleanValue | undefined) { this._s(':serverNumberFormat', v); }
    /** OLAP Server Font. Serialized as `:serverFont` */
    public get serverFont(): BooleanValue | undefined { return this._g(':serverFont'); }
    public set serverFont(v: BooleanValue | undefined) { this._s(':serverFont', v); }
    /** OLAP Font Formatting. Serialized as `:serverFontColor` */
    public get serverFontColor(): BooleanValue | undefined { return this._g(':serverFontColor'); }
    public set serverFontColor(v: BooleanValue | undefined) { this._s(':serverFontColor', v); }

}
/** Defines the DatabaseProperties Class. Serialized as `x:dbPr` */
export class DatabaseProperties extends OxmlLeafElement {

    public static override _Q = 'x:dbPr';
    public static override _A = [':connection',':command',':serverCommand',':commandType',];
    /** Connection String. Serialized as `:connection` */
    public get connection(): StringValue | undefined { return this._g(':connection'); }
    public set connection(v: StringValue | undefined) { this._s(':connection', v); }
    /** Command Text. Serialized as `:command` */
    public get command(): StringValue | undefined { return this._g(':command'); }
    public set command(v: StringValue | undefined) { this._s(':command', v); }
    /** Command Text. Serialized as `:serverCommand` */
    public get serverCommand(): StringValue | undefined { return this._g(':serverCommand'); }
    public set serverCommand(v: StringValue | undefined) { this._s(':serverCommand', v); }
    /** OLE DB Command Type. Serialized as `:commandType` */
    public get commandType(): UInt32Value | undefined { return this._g(':commandType'); }
    public set commandType(v: UInt32Value | undefined) { this._s(':commandType', v); }

}
/** Defines the QueryTableExtension Class. Serialized as `x:ext` */
export class QueryTableExtension extends OxmlCompositeElement<X15QueryTable> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X15QueryTable. */
    public get queryTable(): X15QueryTable | undefined { return this._f(X15QueryTable); }

}
/** Defines the PivotFilterExtension Class. Serialized as `x:ext` */
export class PivotFilterExtension extends OxmlCompositeElement<X15PivotFilter | X15MovingPeriodState> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X15PivotFilter. */
    public get pivotFilter(): X15PivotFilter | undefined { return this._f(X15PivotFilter); }
    /** Returns X15MovingPeriodState. */
    public get movingPeriodState(): X15MovingPeriodState | undefined { return this._f(X15MovingPeriodState); }

}
/** Defines the SlicerCacheDefinitionExtension Class. Serialized as `x:ext` */
export class SlicerCacheDefinitionExtension extends OxmlCompositeElement<X15SlicerCachePivotTables | X15TableSlicerCache | X15SlicerCacheHideItemsWithNoData> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X15SlicerCachePivotTables. */
    public get slicerCachePivotTables(): X15SlicerCachePivotTables | undefined { return this._f(X15SlicerCachePivotTables); }
    /** Returns X15TableSlicerCache. */
    public get tableSlicerCache(): X15TableSlicerCache | undefined { return this._f(X15TableSlicerCache); }
    /** Returns X15SlicerCacheHideItemsWithNoData. */
    public get slicerCacheHideItemsWithNoData(): X15SlicerCacheHideItemsWithNoData | undefined { return this._f(X15SlicerCacheHideItemsWithNoData); }

}
/** Icon Filter. Serialized as `x:iconFilter` */
export class IconFilter extends OxmlLeafElement {

    public static override _Q = 'x:iconFilter';
    public static override _A = [':iconSet',':iconId',];
    /** Icon Set. Serialized as `:iconSet` */
    public get iconSet(): IconSetValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetValues | undefined) { this._s(':iconSet', v); }
    /** Icon Id. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Color Filter Criteria. Serialized as `x:colorFilter` */
export class ColorFilter extends OxmlLeafElement {

    public static override _Q = 'x:colorFilter';
    public static override _A = [':dxfId',':cellColor',];
    /** Differential Format Record Id. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** Filter By Cell Color. Serialized as `:cellColor` */
    public get cellColor(): BooleanValue | undefined { return this._g(':cellColor'); }
    public set cellColor(v: BooleanValue | undefined) { this._s(':cellColor', v); }

}
/** Dynamic Filter. Serialized as `x:dynamicFilter` */
export class DynamicFilter extends OxmlLeafElement {

    public static override _Q = 'x:dynamicFilter';
    public static override _A = [':type',':val',':maxVal',':valIso',':maxValIso',];
    /** Dynamic filter type. Serialized as `:type` */
    public get type(): DynamicFilterValues | undefined { return this._g(':type'); }
    public set type(v: DynamicFilterValues | undefined) { this._s(':type', v); }
    /** Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }
    /** Max Value. Serialized as `:maxVal` */
    public get maxVal(): DoubleValue | undefined { return this._g(':maxVal'); }
    public set maxVal(v: DoubleValue | undefined) { this._s(':maxVal', v); }
    /** valIso. Serialized as `:valIso` */
    public get valIso(): DateTimeValue | undefined { return this._g(':valIso'); }
    public set valIso(v: DateTimeValue | undefined) { this._s(':valIso', v); }
    /** maxValIso. Serialized as `:maxValIso` */
    public get maxValIso(): DateTimeValue | undefined { return this._g(':maxValIso'); }
    public set maxValIso(v: DateTimeValue | undefined) { this._s(':maxValIso', v); }

}
/** Custom Filters. Serialized as `x:customFilters` */
export class CustomFilters extends OxmlCompositeElement<CustomFilter> {

    public static override _Q = 'x:customFilters';
    public static override _A = [':and',];
    /** And. Serialized as `:and` */
    public get and(): BooleanValue | undefined { return this._g(':and'); }
    public set and(v: BooleanValue | undefined) { this._s(':and', v); }

}
/** Top 10. Serialized as `x:top10` */
export class Top10 extends OxmlLeafElement {

    public static override _Q = 'x:top10';
    public static override _A = [':top',':percent',':val',':filterVal',];
    /** Top. Serialized as `:top` */
    public get top(): BooleanValue | undefined { return this._g(':top'); }
    public set top(v: BooleanValue | undefined) { this._s(':top', v); }
    /** Filter by Percent. Serialized as `:percent` */
    public get percent(): BooleanValue | undefined { return this._g(':percent'); }
    public set percent(v: BooleanValue | undefined) { this._s(':percent', v); }
    /** Top or Bottom Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }
    /** Filter Value. Serialized as `:filterVal` */
    public get filterValue(): DoubleValue | undefined { return this._g(':filterVal'); }
    public set filterValue(v: DoubleValue | undefined) { this._s(':filterVal', v); }

}
/** Filter Criteria. Serialized as `x:filters` */
export class Filters extends OxmlCompositeElement<X14Filter | Filter | DateGroupItem> {

    public static override _Q = 'x:filters';
    public static override _A = [':blank',':calendarType',];
    /** Filter by Blank. Serialized as `:blank` */
    public get blank(): BooleanValue | undefined { return this._g(':blank'); }
    public set blank(v: BooleanValue | undefined) { this._s(':blank', v); }
    /** Calendar Type. Serialized as `:calendarType` */
    public get calendarType(): CalendarValues | undefined { return this._g(':calendarType'); }
    public set calendarType(v: CalendarValues | undefined) { this._s(':calendarType', v); }

}
/** Date Grouping. Serialized as `x:dateGroupItem` */
export class DateGroupItem extends OxmlLeafElement {

    public static override _Q = 'x:dateGroupItem';
    public static override _A = [':year',':month',':day',':hour',':minute',':second',':dateTimeGrouping',];
    /** Year. Serialized as `:year` */
    public get year(): UInt16Value | undefined { return this._g(':year'); }
    public set year(v: UInt16Value | undefined) { this._s(':year', v); }
    /** Month. Serialized as `:month` */
    public get month(): UInt16Value | undefined { return this._g(':month'); }
    public set month(v: UInt16Value | undefined) { this._s(':month', v); }
    /** Day. Serialized as `:day` */
    public get day(): UInt16Value | undefined { return this._g(':day'); }
    public set day(v: UInt16Value | undefined) { this._s(':day', v); }
    /** Hour. Serialized as `:hour` */
    public get hour(): UInt16Value | undefined { return this._g(':hour'); }
    public set hour(v: UInt16Value | undefined) { this._s(':hour', v); }
    /** Minute. Serialized as `:minute` */
    public get minute(): UInt16Value | undefined { return this._g(':minute'); }
    public set minute(v: UInt16Value | undefined) { this._s(':minute', v); }
    /** Second. Serialized as `:second` */
    public get second(): UInt16Value | undefined { return this._g(':second'); }
    public set second(v: UInt16Value | undefined) { this._s(':second', v); }
    /** Date Time Grouping. Serialized as `:dateTimeGrouping` */
    public get dateTimeGrouping(): DateTimeGroupingValues | undefined { return this._g(':dateTimeGrouping'); }
    public set dateTimeGrouping(v: DateTimeGroupingValues | undefined) { this._s(':dateTimeGrouping', v); }

}
/** Filter. Serialized as `x:filter` */
export class Filter extends OxmlLeafElement {

    public static override _Q = 'x:filter';
    public static override _A = [':val',];
    /** Filter Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the SortCondition Class. Serialized as `x:sortCondition` */
export class SortCondition extends OxmlLeafElement {

    public static override _Q = 'x:sortCondition';
    public static override _A = [':descending',':sortBy',':ref',':customList',':dxfId',':iconSet',':iconId',];
    /** Descending. Serialized as `:descending` */
    public get descending(): BooleanValue | undefined { return this._g(':descending'); }
    public set descending(v: BooleanValue | undefined) { this._s(':descending', v); }
    /** Sort By. Serialized as `:sortBy` */
    public get sortBy(): SortByValues | undefined { return this._g(':sortBy'); }
    public set sortBy(v: SortByValues | undefined) { this._s(':sortBy', v); }
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Custom List. Serialized as `:customList` */
    public get customList(): StringValue | undefined { return this._g(':customList'); }
    public set customList(v: StringValue | undefined) { this._s(':customList', v); }
    /** Format Id. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** Icon Set. Serialized as `:iconSet` */
    public get iconSet(): IconSetValues | undefined { return this._g(':iconSet'); }
    public set iconSet(v: IconSetValues | undefined) { this._s(':iconSet', v); }
    /** Icon Id. Serialized as `:iconId` */
    public get iconId(): UInt32Value | undefined { return this._g(':iconId'); }
    public set iconId(v: UInt32Value | undefined) { this._s(':iconId', v); }

}
/** Defines the CommentProperties Class. Serialized as `x:commentPr` */
export class CommentProperties extends OxmlCompositeElement<ObjectAnchor> {

    public static override _Q = 'x:commentPr';
    public static override _A = [':locked',':defaultSize',':print',':disabled',':uiObject',':autoFill',':autoLine',':altText',':textHAlign',':textVAlign',':lockText',':justLastX',':autoScale',':rowHidden',':colHidden',];
    /** locked. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** defaultSize. Serialized as `:defaultSize` */
    public get defaultSize(): BooleanValue | undefined { return this._g(':defaultSize'); }
    public set defaultSize(v: BooleanValue | undefined) { this._s(':defaultSize', v); }
    /** print. Serialized as `:print` */
    public get print(): BooleanValue | undefined { return this._g(':print'); }
    public set print(v: BooleanValue | undefined) { this._s(':print', v); }
    /** disabled. Serialized as `:disabled` */
    public get disabled(): BooleanValue | undefined { return this._g(':disabled'); }
    public set disabled(v: BooleanValue | undefined) { this._s(':disabled', v); }
    /** uiObject. Serialized as `:uiObject` */
    public get uiObject(): BooleanValue | undefined { return this._g(':uiObject'); }
    public set uiObject(v: BooleanValue | undefined) { this._s(':uiObject', v); }
    /** autoFill. Serialized as `:autoFill` */
    public get autoFill(): BooleanValue | undefined { return this._g(':autoFill'); }
    public set autoFill(v: BooleanValue | undefined) { this._s(':autoFill', v); }
    /** autoLine. Serialized as `:autoLine` */
    public get autoLine(): BooleanValue | undefined { return this._g(':autoLine'); }
    public set autoLine(v: BooleanValue | undefined) { this._s(':autoLine', v); }
    /** altText. Serialized as `:altText` */
    public get altText(): StringValue | undefined { return this._g(':altText'); }
    public set altText(v: StringValue | undefined) { this._s(':altText', v); }
    /** textHAlign. Serialized as `:textHAlign` */
    public get textHAlign(): TextHorizontalAlignmentValues | undefined { return this._g(':textHAlign'); }
    public set textHAlign(v: TextHorizontalAlignmentValues | undefined) { this._s(':textHAlign', v); }
    /** textVAlign. Serialized as `:textVAlign` */
    public get textVAlign(): TextVerticalAlignmentValues | undefined { return this._g(':textVAlign'); }
    public set textVAlign(v: TextVerticalAlignmentValues | undefined) { this._s(':textVAlign', v); }
    /** lockText. Serialized as `:lockText` */
    public get lockText(): BooleanValue | undefined { return this._g(':lockText'); }
    public set lockText(v: BooleanValue | undefined) { this._s(':lockText', v); }
    /** justLastX. Serialized as `:justLastX` */
    public get justLastX(): BooleanValue | undefined { return this._g(':justLastX'); }
    public set justLastX(v: BooleanValue | undefined) { this._s(':justLastX', v); }
    /** autoScale. Serialized as `:autoScale` */
    public get autoScale(): BooleanValue | undefined { return this._g(':autoScale'); }
    public set autoScale(v: BooleanValue | undefined) { this._s(':autoScale', v); }
    /** rowHidden. Serialized as `:rowHidden` */
    public get rowHidden(): BooleanValue | undefined { return this._g(':rowHidden'); }
    public set rowHidden(v: BooleanValue | undefined) { this._s(':rowHidden', v); }
    /** colHidden. Serialized as `:colHidden` */
    public get colHidden(): BooleanValue | undefined { return this._g(':colHidden'); }
    public set colHidden(v: BooleanValue | undefined) { this._s(':colHidden', v); }
    /** Returns ObjectAnchor. */
    public get objectAnchor(): ObjectAnchor | undefined { return this._f(ObjectAnchor); }

}
/** Defines the CacheSourceExtensionList Class. Serialized as `x:extLst` */
export class CacheSourceExtensionList extends OxmlCompositeElement<CacheSourceExtension> {

    public static override _Q = 'x:extLst';

}
/** Defines the Consolidation Class. Serialized as `x:consolidation` */
export class Consolidation extends OxmlCompositeElement<Pages | RangeSets> {

    public static override _Q = 'x:consolidation';
    public static override _A = [':autoPage',];
    /** Auto Page. Serialized as `:autoPage` */
    public get autoPage(): BooleanValue | undefined { return this._g(':autoPage'); }
    public set autoPage(v: BooleanValue | undefined) { this._s(':autoPage', v); }
    /** Page Item Values. */
    public get pages(): Pages | undefined { return this._f(Pages); }
    /** Range Sets. */
    public get rangeSets(): RangeSets | undefined { return this._f(RangeSets); }

}
/** Defines the WorksheetSource Class. Serialized as `x:worksheetSource` */
export class WorksheetSource extends OxmlLeafElement {

    public static override _Q = 'x:worksheetSource';
    public static override _A = [':ref',':name',':sheet','r:id',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Named Range. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Sheet Name. Serialized as `:sheet` */
    public get sheet(): StringValue | undefined { return this._g(':sheet'); }
    public set sheet(v: StringValue | undefined) { this._s(':sheet', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Future Feature Data Storage Area. Serialized as `x:extLst` */
export class PivotFieldExtensionList extends OxmlCompositeElement<PivotFieldExtension> {

    public static override _Q = 'x:extLst';

}
/** AutoSort Scope. Serialized as `x:autoSortScope` */
export class AutoSortScope extends OxmlCompositeElement<PivotArea> {

    public static override _Q = 'x:autoSortScope';
    /** Auto Sort Scope. */
    public get pivotArea(): PivotArea | undefined { return this._f(PivotArea); }

}
/** Field Items. Serialized as `x:items` */
export class Items extends OxmlCompositeElement<Item> {

    public static override _Q = 'x:items';
    public static override _A = [':count',];
    /** Field Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Future Feature Data Storage Area. Serialized as `x:extLst` */
export class PivotHierarchyExtensionList extends OxmlCompositeElement<PivotHierarchyExtension> {

    public static override _Q = 'x:extLst';

}
/** Members. Serialized as `x:members` */
export class Members extends OxmlCompositeElement<Member> {

    public static override _Q = 'x:members';
    public static override _A = [':count',':level',];
    /** Item Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Hierarchy Level. Serialized as `:level` */
    public get level(): UInt32Value | undefined { return this._g(':level'); }
    public set level(v: UInt32Value | undefined) { this._s(':level', v); }

}
/** OLAP Member Properties. Serialized as `x:mps` */
export class MemberProperties extends OxmlCompositeElement<MemberProperty> {

    public static override _Q = 'x:mps';
    public static override _A = [':count',];
    /** OLAP Member Properties Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Custom Properties. Serialized as `x:customProperties` */
export class CustomProperties extends OxmlCompositeElement<CustomProperty> {

    public static override _Q = 'x:customProperties';

}
/** Conditional Formatting. Serialized as `x:conditionalFormatting` */
export class ConditionalFormatting extends OxmlCompositeElement<ConditionalFormattingRule | ExtensionList> {

    public static override _Q = 'x:conditionalFormatting';
    public static override _A = [':pivot',':sqref',];
    /** PivotTable Conditional Formatting. Serialized as `:pivot` */
    public get pivot(): BooleanValue | undefined { return this._g(':pivot'); }
    public set pivot(v: BooleanValue | undefined) { this._s(':pivot', v); }
    /** Sequence of References. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }

}
/** Data Consolidation. Serialized as `x:dataConsolidate` */
export class DataConsolidate extends OxmlCompositeElement<DataReferences> {

    public static override _Q = 'x:dataConsolidate';
    public static override _A = [':function',':leftLabels',':startLabels',':topLabels',':link',];
    /** Function Index. Serialized as `:function` */
    public get function(): DataConsolidateFunctionValues | undefined { return this._g(':function'); }
    public set function(v: DataConsolidateFunctionValues | undefined) { this._s(':function', v); }
    /** Use Left Column Labels. Serialized as `:leftLabels` */
    public get leftLabels(): BooleanValue | undefined { return this._g(':leftLabels'); }
    public set leftLabels(v: BooleanValue | undefined) { this._s(':leftLabels', v); }
    /** startLabels. Serialized as `:startLabels` */
    public get startLabels(): BooleanValue | undefined { return this._g(':startLabels'); }
    public set startLabels(v: BooleanValue | undefined) { this._s(':startLabels', v); }
    /** Labels In Top Row. Serialized as `:topLabels` */
    public get topLabels(): BooleanValue | undefined { return this._g(':topLabels'); }
    public set topLabels(v: BooleanValue | undefined) { this._s(':topLabels', v); }
    /** Link. Serialized as `:link` */
    public get link(): BooleanValue | undefined { return this._g(':link'); }
    public set link(v: BooleanValue | undefined) { this._s(':link', v); }
    /** Data Consolidation References. */
    public get dataReferences(): DataReferences | undefined { return this._f(DataReferences); }

}
/** Sheet Data. Serialized as `x:sheetData` */
export class SheetData extends OxmlCompositeElement<Row> {

    public static override _Q = 'x:sheetData';

}
/** Column Information. Serialized as `x:cols` */
export class Columns extends OxmlCompositeElement<Column> {

    public static override _Q = 'x:cols';

}
/** Macro Sheet Dimensions. Serialized as `x:dimension` */
export class SheetDimension extends OxmlLeafElement {

    public static override _Q = 'x:dimension';
    public static override _A = [':ref',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the Controls Class. Serialized as `x:controls` */
export class Controls extends OxmlCompositeElement<Control> {

    public static override _Q = 'x:controls';

}
/** Defines the OleObjects Class. Serialized as `x:oleObjects` */
export class OleObjects extends OxmlCompositeElement<OleObject> {

    public static override _Q = 'x:oleObjects';

}
/** Custom Sheet Views. Serialized as `x:customSheetViews` */
export class CustomSheetViews extends OxmlCompositeElement<CustomSheetView> {

    public static override _Q = 'x:customSheetViews';

}
/** Sheet Protection. Serialized as `x:sheetProtection` */
export class SheetProtection extends OxmlLeafElement {

    public static override _Q = 'x:sheetProtection';
    public static override _A = [':password',':algorithmName',':hashValue',':saltValue',':spinCount',':sheet',':objects',':scenarios',':formatCells',':formatColumns',':formatRows',':insertColumns',':insertRows',':insertHyperlinks',':deleteColumns',':deleteRows',':selectLockedCells',':sort',':autoFilter',':pivotTables',':selectUnlockedCells',];
    /** Password. Serialized as `:password` */
    public get password(): HexBinaryValue | undefined { return this._g(':password'); }
    public set password(v: HexBinaryValue | undefined) { this._s(':password', v); }
    /** Cryptographic Algorithm Name. Serialized as `:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g(':algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s(':algorithmName', v); }
    /** Password Hash Value. Serialized as `:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g(':hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s(':hashValue', v); }
    /** Salt Value for Password Verifier. Serialized as `:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g(':saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s(':saltValue', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
    public get spinCount(): UInt32Value | undefined { return this._g(':spinCount'); }
    public set spinCount(v: UInt32Value | undefined) { this._s(':spinCount', v); }
    /** Sheet Locked. Serialized as `:sheet` */
    public get sheet(): BooleanValue | undefined { return this._g(':sheet'); }
    public set sheet(v: BooleanValue | undefined) { this._s(':sheet', v); }
    /** Objects Locked. Serialized as `:objects` */
    public get objects(): BooleanValue | undefined { return this._g(':objects'); }
    public set objects(v: BooleanValue | undefined) { this._s(':objects', v); }
    /** Scenarios Locked. Serialized as `:scenarios` */
    public get scenarios(): BooleanValue | undefined { return this._g(':scenarios'); }
    public set scenarios(v: BooleanValue | undefined) { this._s(':scenarios', v); }
    /** Format Cells Locked. Serialized as `:formatCells` */
    public get formatCells(): BooleanValue | undefined { return this._g(':formatCells'); }
    public set formatCells(v: BooleanValue | undefined) { this._s(':formatCells', v); }
    /** Format Columns Locked. Serialized as `:formatColumns` */
    public get formatColumns(): BooleanValue | undefined { return this._g(':formatColumns'); }
    public set formatColumns(v: BooleanValue | undefined) { this._s(':formatColumns', v); }
    /** Format Rows Locked. Serialized as `:formatRows` */
    public get formatRows(): BooleanValue | undefined { return this._g(':formatRows'); }
    public set formatRows(v: BooleanValue | undefined) { this._s(':formatRows', v); }
    /** Insert Columns Locked. Serialized as `:insertColumns` */
    public get insertColumns(): BooleanValue | undefined { return this._g(':insertColumns'); }
    public set insertColumns(v: BooleanValue | undefined) { this._s(':insertColumns', v); }
    /** Insert Rows Locked. Serialized as `:insertRows` */
    public get insertRows(): BooleanValue | undefined { return this._g(':insertRows'); }
    public set insertRows(v: BooleanValue | undefined) { this._s(':insertRows', v); }
    /** Insert Hyperlinks Locked. Serialized as `:insertHyperlinks` */
    public get insertHyperlinks(): BooleanValue | undefined { return this._g(':insertHyperlinks'); }
    public set insertHyperlinks(v: BooleanValue | undefined) { this._s(':insertHyperlinks', v); }
    /** Delete Columns Locked. Serialized as `:deleteColumns` */
    public get deleteColumns(): BooleanValue | undefined { return this._g(':deleteColumns'); }
    public set deleteColumns(v: BooleanValue | undefined) { this._s(':deleteColumns', v); }
    /** Delete Rows Locked. Serialized as `:deleteRows` */
    public get deleteRows(): BooleanValue | undefined { return this._g(':deleteRows'); }
    public set deleteRows(v: BooleanValue | undefined) { this._s(':deleteRows', v); }
    /** Select Locked Cells Locked. Serialized as `:selectLockedCells` */
    public get selectLockedCells(): BooleanValue | undefined { return this._g(':selectLockedCells'); }
    public set selectLockedCells(v: BooleanValue | undefined) { this._s(':selectLockedCells', v); }
    /** Sort Locked. Serialized as `:sort` */
    public get sort(): BooleanValue | undefined { return this._g(':sort'); }
    public set sort(v: BooleanValue | undefined) { this._s(':sort', v); }
    /** AutoFilter Locked. Serialized as `:autoFilter` */
    public get autoFilter(): BooleanValue | undefined { return this._g(':autoFilter'); }
    public set autoFilter(v: BooleanValue | undefined) { this._s(':autoFilter', v); }
    /** Pivot Tables Locked. Serialized as `:pivotTables` */
    public get pivotTables(): BooleanValue | undefined { return this._g(':pivotTables'); }
    public set pivotTables(v: BooleanValue | undefined) { this._s(':pivotTables', v); }
    /** Select Unlocked Cells Locked. Serialized as `:selectUnlockedCells` */
    public get selectUnlockedCells(): BooleanValue | undefined { return this._g(':selectUnlockedCells'); }
    public set selectUnlockedCells(v: BooleanValue | undefined) { this._s(':selectUnlockedCells', v); }

}
/** Dialog Sheet Format Properties. Serialized as `x:sheetFormatPr` */
export class SheetFormatProperties extends OxmlLeafElement {

    public static override _Q = 'x:sheetFormatPr';
    public static override _A = [':baseColWidth',':defaultColWidth',':defaultRowHeight',':customHeight',':zeroHeight',':thickTop',':thickBottom',':outlineLevelRow',':outlineLevelCol','x14ac:dyDescent',];
    /** Base Column Width. Serialized as `:baseColWidth` */
    public get baseColumnWidth(): UInt32Value | undefined { return this._g(':baseColWidth'); }
    public set baseColumnWidth(v: UInt32Value | undefined) { this._s(':baseColWidth', v); }
    /** Default Column Width. Serialized as `:defaultColWidth` */
    public get defaultColumnWidth(): DoubleValue | undefined { return this._g(':defaultColWidth'); }
    public set defaultColumnWidth(v: DoubleValue | undefined) { this._s(':defaultColWidth', v); }
    /** Default Row Height. Serialized as `:defaultRowHeight` */
    public get defaultRowHeight(): DoubleValue | undefined { return this._g(':defaultRowHeight'); }
    public set defaultRowHeight(v: DoubleValue | undefined) { this._s(':defaultRowHeight', v); }
    /** Custom Height. Serialized as `:customHeight` */
    public get customHeight(): BooleanValue | undefined { return this._g(':customHeight'); }
    public set customHeight(v: BooleanValue | undefined) { this._s(':customHeight', v); }
    /** Hidden By Default. Serialized as `:zeroHeight` */
    public get zeroHeight(): BooleanValue | undefined { return this._g(':zeroHeight'); }
    public set zeroHeight(v: BooleanValue | undefined) { this._s(':zeroHeight', v); }
    /** Thick Top Border. Serialized as `:thickTop` */
    public get thickTop(): BooleanValue | undefined { return this._g(':thickTop'); }
    public set thickTop(v: BooleanValue | undefined) { this._s(':thickTop', v); }
    /** Thick Bottom Border. Serialized as `:thickBottom` */
    public get thickBottom(): BooleanValue | undefined { return this._g(':thickBottom'); }
    public set thickBottom(v: BooleanValue | undefined) { this._s(':thickBottom', v); }
    /** Maximum Outline Row. Serialized as `:outlineLevelRow` */
    public get outlineLevelRow(): ByteValue | undefined { return this._g(':outlineLevelRow'); }
    public set outlineLevelRow(v: ByteValue | undefined) { this._s(':outlineLevelRow', v); }
    /** Column Outline Level. Serialized as `:outlineLevelCol` */
    public get outlineLevelColumn(): ByteValue | undefined { return this._g(':outlineLevelCol'); }
    public set outlineLevelColumn(v: ByteValue | undefined) { this._s(':outlineLevelCol', v); }
    /** dyDescent. Serialized as `x14ac:dyDescent` */
    public get dyDescent(): DoubleValue | undefined { return this._g('x14ac:dyDescent'); }
    public set dyDescent(v: DoubleValue | undefined) { this._s('x14ac:dyDescent', v); }

}
/** Dialog Sheet Views. Serialized as `x:sheetViews` */
export class SheetViews extends OxmlCompositeElement<SheetView | ExtensionList> {

    public static override _Q = 'x:sheetViews';

}
/** Sheet Properties. Serialized as `x:sheetPr` */
export class SheetProperties extends OxmlCompositeElement<TabColor | OutlineProperties | PageSetupProperties> {

    public static override _Q = 'x:sheetPr';
    public static override _A = [':syncHorizontal',':syncVertical',':syncRef',':transitionEvaluation',':transitionEntry',':published',':codeName',':filterMode',':enableFormatConditionsCalculation',];
    /** Synch Horizontal. Serialized as `:syncHorizontal` */
    public get syncHorizontal(): BooleanValue | undefined { return this._g(':syncHorizontal'); }
    public set syncHorizontal(v: BooleanValue | undefined) { this._s(':syncHorizontal', v); }
    /** Synch Vertical. Serialized as `:syncVertical` */
    public get syncVertical(): BooleanValue | undefined { return this._g(':syncVertical'); }
    public set syncVertical(v: BooleanValue | undefined) { this._s(':syncVertical', v); }
    /** Synch Reference. Serialized as `:syncRef` */
    public get syncReference(): StringValue | undefined { return this._g(':syncRef'); }
    public set syncReference(v: StringValue | undefined) { this._s(':syncRef', v); }
    /** Transition Formula Evaluation. Serialized as `:transitionEvaluation` */
    public get transitionEvaluation(): BooleanValue | undefined { return this._g(':transitionEvaluation'); }
    public set transitionEvaluation(v: BooleanValue | undefined) { this._s(':transitionEvaluation', v); }
    /** Transition Formula Entry. Serialized as `:transitionEntry` */
    public get transitionEntry(): BooleanValue | undefined { return this._g(':transitionEntry'); }
    public set transitionEntry(v: BooleanValue | undefined) { this._s(':transitionEntry', v); }
    /** Published. Serialized as `:published` */
    public get published(): BooleanValue | undefined { return this._g(':published'); }
    public set published(v: BooleanValue | undefined) { this._s(':published', v); }
    /** Code Name. Serialized as `:codeName` */
    public get codeName(): StringValue | undefined { return this._g(':codeName'); }
    public set codeName(v: StringValue | undefined) { this._s(':codeName', v); }
    /** Filter Mode. Serialized as `:filterMode` */
    public get filterMode(): BooleanValue | undefined { return this._g(':filterMode'); }
    public set filterMode(v: BooleanValue | undefined) { this._s(':filterMode', v); }
    /** Enable Conditional Formatting Calculations. Serialized as `:enableFormatConditionsCalculation` */
    public get enableFormatConditionsCalculation(): BooleanValue | undefined { return this._g(':enableFormatConditionsCalculation'); }
    public set enableFormatConditionsCalculation(v: BooleanValue | undefined) { this._s(':enableFormatConditionsCalculation', v); }
    /** Sheet Tab Color. */
    public get tabColor(): TabColor | undefined { return this._f(TabColor); }
    /** Outline Properties. */
    public get outlineProperties(): OutlineProperties | undefined { return this._f(OutlineProperties); }
    /** Page Setup Properties. */
    public get pageSetupProperties(): PageSetupProperties | undefined { return this._f(PageSetupProperties); }

}
/** Data Consolidation References. Serialized as `x:dataRefs` */
export class DataReferences extends OxmlCompositeElement<DataReference> {

    public static override _Q = 'x:dataRefs';
    public static override _A = [':count',];
    /** Data Consolidation Reference Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ConditionalFormattingRuleExtensionList Class. Serialized as `x:extLst` */
export class ConditionalFormattingRuleExtensionList extends OxmlCompositeElement<ConditionalFormattingRuleExtension> {

    public static override _Q = 'x:extLst';

}
/** Icon Set. Serialized as `x:iconSet` */
export class IconSet extends OxmlCompositeElement<ConditionalFormatValueObject> {

    public static override _Q = 'x:iconSet';
    public static override _A = [':iconSet',':showValue',':percent',':reverse',];
    /** Icon Set. Serialized as `:iconSet` */
    public get iconSetValue(): IconSetValues | undefined { return this._g(':iconSet'); }
    public set iconSetValue(v: IconSetValues | undefined) { this._s(':iconSet', v); }
    /** Show Value. Serialized as `:showValue` */
    public get showValue(): BooleanValue | undefined { return this._g(':showValue'); }
    public set showValue(v: BooleanValue | undefined) { this._s(':showValue', v); }
    /** Percent. Serialized as `:percent` */
    public get percent(): BooleanValue | undefined { return this._g(':percent'); }
    public set percent(v: BooleanValue | undefined) { this._s(':percent', v); }
    /** Reverse Icons. Serialized as `:reverse` */
    public get reverse(): BooleanValue | undefined { return this._g(':reverse'); }
    public set reverse(v: BooleanValue | undefined) { this._s(':reverse', v); }

}
/** Data Bar. Serialized as `x:dataBar` */
export class DataBar extends OxmlCompositeElement<ConditionalFormatValueObject | Color> {

    public static override _Q = 'x:dataBar';
    public static override _A = [':minLength',':maxLength',':showValue',];
    /** Minimum Length. Serialized as `:minLength` */
    public get minLength(): UInt32Value | undefined { return this._g(':minLength'); }
    public set minLength(v: UInt32Value | undefined) { this._s(':minLength', v); }
    /** Maximum Length. Serialized as `:maxLength` */
    public get maxLength(): UInt32Value | undefined { return this._g(':maxLength'); }
    public set maxLength(v: UInt32Value | undefined) { this._s(':maxLength', v); }
    /** Show Values. Serialized as `:showValue` */
    public get showValue(): BooleanValue | undefined { return this._g(':showValue'); }
    public set showValue(v: BooleanValue | undefined) { this._s(':showValue', v); }

}
/** Color Scale. Serialized as `x:colorScale` */
export class ColorScale extends OxmlCompositeElement<ConditionalFormatValueObject | Color> {

    public static override _Q = 'x:colorScale';

}
/** Defines the WebPublishItems Class. Serialized as `x:webPublishItems` */
export class WebPublishItems extends OxmlCompositeElement<WebPublishItem> {

    public static override _Q = 'x:webPublishItems';
    public static override _A = [':count',];
    /** Web Publishing Items Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the Picture Class. Serialized as `x:picture` */
export class Picture extends OxmlLeafElement {

    public static override _Q = 'x:picture';
    public static override _A = ['r:id',];
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the DrawingHeaderFooter Class. Serialized as `x:drawingHF` */
export class DrawingHeaderFooter extends OxmlLeafElement {

    public static override _Q = 'x:drawingHF';
    public static override _A = ['r:id',':lho',':lhe',':lhf',':cho',':che',':chf',':rho',':rhe',':rhf',':lfo',':lfe',':lff',':cfo',':cfe',':cff',':rfo',':rfe',':rff',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** lho. Serialized as `:lho` */
    public get lho(): UInt32Value | undefined { return this._g(':lho'); }
    public set lho(v: UInt32Value | undefined) { this._s(':lho', v); }
    /** lhe. Serialized as `:lhe` */
    public get lhe(): UInt32Value | undefined { return this._g(':lhe'); }
    public set lhe(v: UInt32Value | undefined) { this._s(':lhe', v); }
    /** lhf. Serialized as `:lhf` */
    public get lhf(): UInt32Value | undefined { return this._g(':lhf'); }
    public set lhf(v: UInt32Value | undefined) { this._s(':lhf', v); }
    /** cho. Serialized as `:cho` */
    public get cho(): UInt32Value | undefined { return this._g(':cho'); }
    public set cho(v: UInt32Value | undefined) { this._s(':cho', v); }
    /** che. Serialized as `:che` */
    public get che(): UInt32Value | undefined { return this._g(':che'); }
    public set che(v: UInt32Value | undefined) { this._s(':che', v); }
    /** chf. Serialized as `:chf` */
    public get chf(): UInt32Value | undefined { return this._g(':chf'); }
    public set chf(v: UInt32Value | undefined) { this._s(':chf', v); }
    /** rho. Serialized as `:rho` */
    public get rho(): UInt32Value | undefined { return this._g(':rho'); }
    public set rho(v: UInt32Value | undefined) { this._s(':rho', v); }
    /** rhe. Serialized as `:rhe` */
    public get rhe(): UInt32Value | undefined { return this._g(':rhe'); }
    public set rhe(v: UInt32Value | undefined) { this._s(':rhe', v); }
    /** rhf. Serialized as `:rhf` */
    public get rhf(): UInt32Value | undefined { return this._g(':rhf'); }
    public set rhf(v: UInt32Value | undefined) { this._s(':rhf', v); }
    /** lfo. Serialized as `:lfo` */
    public get lfo(): UInt32Value | undefined { return this._g(':lfo'); }
    public set lfo(v: UInt32Value | undefined) { this._s(':lfo', v); }
    /** lfe. Serialized as `:lfe` */
    public get lfe(): UInt32Value | undefined { return this._g(':lfe'); }
    public set lfe(v: UInt32Value | undefined) { this._s(':lfe', v); }
    /** lff. Serialized as `:lff` */
    public get lff(): UInt32Value | undefined { return this._g(':lff'); }
    public set lff(v: UInt32Value | undefined) { this._s(':lff', v); }
    /** cfo. Serialized as `:cfo` */
    public get cfo(): UInt32Value | undefined { return this._g(':cfo'); }
    public set cfo(v: UInt32Value | undefined) { this._s(':cfo', v); }
    /** cfe. Serialized as `:cfe` */
    public get cfe(): UInt32Value | undefined { return this._g(':cfe'); }
    public set cfe(v: UInt32Value | undefined) { this._s(':cfe', v); }
    /** cff. Serialized as `:cff` */
    public get cff(): UInt32Value | undefined { return this._g(':cff'); }
    public set cff(v: UInt32Value | undefined) { this._s(':cff', v); }
    /** rfo. Serialized as `:rfo` */
    public get rfo(): UInt32Value | undefined { return this._g(':rfo'); }
    public set rfo(v: UInt32Value | undefined) { this._s(':rfo', v); }
    /** rfe. Serialized as `:rfe` */
    public get rfe(): UInt32Value | undefined { return this._g(':rfe'); }
    public set rfe(v: UInt32Value | undefined) { this._s(':rfe', v); }
    /** rff. Serialized as `:rff` */
    public get rff(): UInt32Value | undefined { return this._g(':rff'); }
    public set rff(v: UInt32Value | undefined) { this._s(':rff', v); }

}
/** Defines the LegacyDrawingType Class. */
export abstract class LegacyDrawingType extends OxmlLeafElement {

    public static override _A = ['r:id',];
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Legacy Drawing Reference in  Header Footer. Serialized as `x:legacyDrawingHF` */
export class LegacyDrawingHeaderFooter extends LegacyDrawingType {

    public static override _Q = 'x:legacyDrawingHF';

}
/** Defines the LegacyDrawing Class. Serialized as `x:legacyDrawing` */
export class LegacyDrawing extends LegacyDrawingType {

    public static override _Q = 'x:legacyDrawing';

}
/** Drawing. Serialized as `x:drawing` */
export class Drawing extends OxmlLeafElement {

    public static override _Q = 'x:drawing';
    public static override _A = ['r:id',];
    /** Relationship id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Custom Chart Sheet Views. Serialized as `x:customSheetViews` */
export class CustomChartsheetViews extends OxmlCompositeElement<CustomChartsheetView> {

    public static override _Q = 'x:customSheetViews';

}
/** Chart Sheet Protection. Serialized as `x:sheetProtection` */
export class ChartSheetProtection extends OxmlLeafElement {

    public static override _Q = 'x:sheetProtection';
    public static override _A = [':password',':algorithmName',':hashValue',':saltValue',':spinCount',':content',':objects',];
    /** Password. Serialized as `:password` */
    public get password(): HexBinaryValue | undefined { return this._g(':password'); }
    public set password(v: HexBinaryValue | undefined) { this._s(':password', v); }
    /** Cryptographic Algorithm Name. Serialized as `:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g(':algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s(':algorithmName', v); }
    /** Password Hash Value. Serialized as `:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g(':hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s(':hashValue', v); }
    /** Salt Value for Password Verifier. Serialized as `:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g(':saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s(':saltValue', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
    public get spinCount(): UInt32Value | undefined { return this._g(':spinCount'); }
    public set spinCount(v: UInt32Value | undefined) { this._s(':spinCount', v); }
    /** Contents. Serialized as `:content` */
    public get content(): BooleanValue | undefined { return this._g(':content'); }
    public set content(v: BooleanValue | undefined) { this._s(':content', v); }
    /** Objects Locked. Serialized as `:objects` */
    public get objects(): BooleanValue | undefined { return this._g(':objects'); }
    public set objects(v: BooleanValue | undefined) { this._s(':objects', v); }

}
/** Chart Sheet Views. Serialized as `x:sheetViews` */
export class ChartSheetViews extends OxmlCompositeElement<ChartSheetView | ExtensionList> {

    public static override _Q = 'x:sheetViews';

}
/** Chart Sheet Properties. Serialized as `x:sheetPr` */
export class ChartSheetProperties extends OxmlCompositeElement<TabColor> {

    public static override _Q = 'x:sheetPr';
    public static override _A = [':published',':codeName',];
    /** Published. Serialized as `:published` */
    public get published(): BooleanValue | undefined { return this._g(':published'); }
    public set published(v: BooleanValue | undefined) { this._s(':published', v); }
    /** Code Name. Serialized as `:codeName` */
    public get codeName(): StringValue | undefined { return this._g(':codeName'); }
    public set codeName(v: StringValue | undefined) { this._s(':codeName', v); }
    /** Returns TabColor. */
    public get tabColor(): TabColor | undefined { return this._f(TabColor); }

}
/** Defines the EmbeddedObjectProperties Class. Serialized as `x:objectPr` */
export class EmbeddedObjectProperties extends OxmlCompositeElement<ObjectAnchor> {

    public static override _Q = 'x:objectPr';
    public static override _A = [':locked',':defaultSize',':print',':disabled',':uiObject',':autoFill',':autoLine',':autoPict',':macro',':altText',':dde','r:id',];
    /** locked. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** defaultSize. Serialized as `:defaultSize` */
    public get defaultSize(): BooleanValue | undefined { return this._g(':defaultSize'); }
    public set defaultSize(v: BooleanValue | undefined) { this._s(':defaultSize', v); }
    /** print. Serialized as `:print` */
    public get print(): BooleanValue | undefined { return this._g(':print'); }
    public set print(v: BooleanValue | undefined) { this._s(':print', v); }
    /** disabled. Serialized as `:disabled` */
    public get disabled(): BooleanValue | undefined { return this._g(':disabled'); }
    public set disabled(v: BooleanValue | undefined) { this._s(':disabled', v); }
    /** uiObject. Serialized as `:uiObject` */
    public get uiObject(): BooleanValue | undefined { return this._g(':uiObject'); }
    public set uiObject(v: BooleanValue | undefined) { this._s(':uiObject', v); }
    /** autoFill. Serialized as `:autoFill` */
    public get autoFill(): BooleanValue | undefined { return this._g(':autoFill'); }
    public set autoFill(v: BooleanValue | undefined) { this._s(':autoFill', v); }
    /** autoLine. Serialized as `:autoLine` */
    public get autoLine(): BooleanValue | undefined { return this._g(':autoLine'); }
    public set autoLine(v: BooleanValue | undefined) { this._s(':autoLine', v); }
    /** autoPict. Serialized as `:autoPict` */
    public get autoPict(): BooleanValue | undefined { return this._g(':autoPict'); }
    public set autoPict(v: BooleanValue | undefined) { this._s(':autoPict', v); }
    /** macro. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** altText. Serialized as `:altText` */
    public get altText(): StringValue | undefined { return this._g(':altText'); }
    public set altText(v: StringValue | undefined) { this._s(':altText', v); }
    /** dde. Serialized as `:dde` */
    public get dde(): BooleanValue | undefined { return this._g(':dde'); }
    public set dde(v: BooleanValue | undefined) { this._s(':dde', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ObjectAnchor. */
    public get objectAnchor(): ObjectAnchor | undefined { return this._f(ObjectAnchor); }

}
/** Defines the ControlProperties Class. Serialized as `x:controlPr` */
export class ControlProperties extends OxmlCompositeElement<ObjectAnchor> {

    public static override _Q = 'x:controlPr';
    public static override _A = [':locked',':defaultSize',':print',':disabled',':recalcAlways',':uiObject',':autoFill',':autoLine',':autoPict',':macro',':altText',':linkedCell',':listFillRange',':cf','r:id',];
    /** locked. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** defaultSize. Serialized as `:defaultSize` */
    public get defaultSize(): BooleanValue | undefined { return this._g(':defaultSize'); }
    public set defaultSize(v: BooleanValue | undefined) { this._s(':defaultSize', v); }
    /** print. Serialized as `:print` */
    public get print(): BooleanValue | undefined { return this._g(':print'); }
    public set print(v: BooleanValue | undefined) { this._s(':print', v); }
    /** disabled. Serialized as `:disabled` */
    public get disabled(): BooleanValue | undefined { return this._g(':disabled'); }
    public set disabled(v: BooleanValue | undefined) { this._s(':disabled', v); }
    /** recalcAlways. Serialized as `:recalcAlways` */
    public get recalcAlways(): BooleanValue | undefined { return this._g(':recalcAlways'); }
    public set recalcAlways(v: BooleanValue | undefined) { this._s(':recalcAlways', v); }
    /** uiObject. Serialized as `:uiObject` */
    public get uiObject(): BooleanValue | undefined { return this._g(':uiObject'); }
    public set uiObject(v: BooleanValue | undefined) { this._s(':uiObject', v); }
    /** autoFill. Serialized as `:autoFill` */
    public get autoFill(): BooleanValue | undefined { return this._g(':autoFill'); }
    public set autoFill(v: BooleanValue | undefined) { this._s(':autoFill', v); }
    /** autoLine. Serialized as `:autoLine` */
    public get autoLine(): BooleanValue | undefined { return this._g(':autoLine'); }
    public set autoLine(v: BooleanValue | undefined) { this._s(':autoLine', v); }
    /** autoPict. Serialized as `:autoPict` */
    public get autoPict(): BooleanValue | undefined { return this._g(':autoPict'); }
    public set autoPict(v: BooleanValue | undefined) { this._s(':autoPict', v); }
    /** macro. Serialized as `:macro` */
    public get macro(): StringValue | undefined { return this._g(':macro'); }
    public set macro(v: StringValue | undefined) { this._s(':macro', v); }
    /** altText. Serialized as `:altText` */
    public get altText(): StringValue | undefined { return this._g(':altText'); }
    public set altText(v: StringValue | undefined) { this._s(':altText', v); }
    /** linkedCell. Serialized as `:linkedCell` */
    public get linkedCell(): StringValue | undefined { return this._g(':linkedCell'); }
    public set linkedCell(v: StringValue | undefined) { this._s(':linkedCell', v); }
    /** listFillRange. Serialized as `:listFillRange` */
    public get listFillRange(): StringValue | undefined { return this._g(':listFillRange'); }
    public set listFillRange(v: StringValue | undefined) { this._s(':listFillRange', v); }
    /** cf. Serialized as `:cf` */
    public get cf(): StringValue | undefined { return this._g(':cf'); }
    public set cf(v: StringValue | undefined) { this._s(':cf', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ObjectAnchor. */
    public get objectAnchor(): ObjectAnchor | undefined { return this._f(ObjectAnchor); }

}
/** Defines the BorderPropertiesType Class. */
export abstract class BorderPropertiesType extends OxmlCompositeElement<Color> {

    public static override _A = [':style',];
    /** Line Style. Serialized as `:style` */
    public get style(): BorderStyleValues | undefined { return this._g(':style'); }
    public set style(v: BorderStyleValues | undefined) { this._s(':style', v); }
    /** Color. */
    public get color(): Color | undefined { return this._f(Color); }

}
/** Horizontal Inner Borders. Serialized as `x:horizontal` */
export class HorizontalBorder extends BorderPropertiesType {

    public static override _Q = 'x:horizontal';

}
/** Vertical Inner Border. Serialized as `x:vertical` */
export class VerticalBorder extends BorderPropertiesType {

    public static override _Q = 'x:vertical';

}
/** Diagonal. Serialized as `x:diagonal` */
export class DiagonalBorder extends BorderPropertiesType {

    public static override _Q = 'x:diagonal';

}
/** Bottom Border. Serialized as `x:bottom` */
export class BottomBorder extends BorderPropertiesType {

    public static override _Q = 'x:bottom';

}
/** Top Border. Serialized as `x:top` */
export class TopBorder extends BorderPropertiesType {

    public static override _Q = 'x:top';

}
/** Right Border. Serialized as `x:right` */
export class RightBorder extends BorderPropertiesType {

    public static override _Q = 'x:right';

}
/** Left Border. Serialized as `x:left` */
export class LeftBorder extends BorderPropertiesType {

    public static override _Q = 'x:left';

}
/** Defines the EndBorder Class. Serialized as `x:end` */
export class EndBorder extends BorderPropertiesType {

    public static override _Q = 'x:end';

}
/** Defines the StartBorder Class. Serialized as `x:start` */
export class StartBorder extends BorderPropertiesType {

    public static override _Q = 'x:start';

}
/** OLE Link Item. Serialized as `x:oleItem` */
export class OleItem extends OxmlLeafElement {

    public static override _Q = 'x:oleItem';
    public static override _A = [':name',':icon',':advise',':preferPic',];
    /** OLE Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Icon. Serialized as `:icon` */
    public get icon(): BooleanValue | undefined { return this._g(':icon'); }
    public set icon(v: BooleanValue | undefined) { this._s(':icon', v); }
    /** Advise. Serialized as `:advise` */
    public get advise(): BooleanValue | undefined { return this._g(':advise'); }
    public set advise(v: BooleanValue | undefined) { this._s(':advise', v); }
    /** Object is an Image. Serialized as `:preferPic` */
    public get preferPicture(): BooleanValue | undefined { return this._g(':preferPic'); }
    public set preferPicture(v: BooleanValue | undefined) { this._s(':preferPic', v); }

}
/** Future Feature Data Storage Area. Serialized as `x:extLst` */
export class TableExtensionList extends OxmlCompositeElement<TableExtension> {

    public static override _Q = 'x:extLst';

}
/** Table Style. Serialized as `x:tableStyleInfo` */
export class TableStyleInfo extends OxmlLeafElement {

    public static override _Q = 'x:tableStyleInfo';
    public static override _A = [':name',':showFirstColumn',':showLastColumn',':showRowStripes',':showColumnStripes',];
    /** Style Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Show First Column. Serialized as `:showFirstColumn` */
    public get showFirstColumn(): BooleanValue | undefined { return this._g(':showFirstColumn'); }
    public set showFirstColumn(v: BooleanValue | undefined) { this._s(':showFirstColumn', v); }
    /** Show Last Column. Serialized as `:showLastColumn` */
    public get showLastColumn(): BooleanValue | undefined { return this._g(':showLastColumn'); }
    public set showLastColumn(v: BooleanValue | undefined) { this._s(':showLastColumn', v); }
    /** Show Row Stripes. Serialized as `:showRowStripes` */
    public get showRowStripes(): BooleanValue | undefined { return this._g(':showRowStripes'); }
    public set showRowStripes(v: BooleanValue | undefined) { this._s(':showRowStripes', v); }
    /** Show Column Stripes. Serialized as `:showColumnStripes` */
    public get showColumnStripes(): BooleanValue | undefined { return this._g(':showColumnStripes'); }
    public set showColumnStripes(v: BooleanValue | undefined) { this._s(':showColumnStripes', v); }

}
/** Table Columns. Serialized as `x:tableColumns` */
export class TableColumns extends OxmlCompositeElement<TableColumn> {

    public static override _Q = 'x:tableColumns';
    public static override _A = [':count',];
    /** Column Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the CacheSourceExtension Class. Serialized as `x:ext` */
export class CacheSourceExtension extends OxmlCompositeElement<X14SourceConnection> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14SourceConnection. */
    public get sourceConnection(): X14SourceConnection | undefined { return this._f(X14SourceConnection); }

}
/** Defines the PivotFieldExtension Class. Serialized as `x:ext` */
export class PivotFieldExtension extends OxmlCompositeElement<X14PivotField> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14PivotField. */
    public get pivotField(): X14PivotField | undefined { return this._f(X14PivotField); }

}
/** Defines the PivotHierarchyExtension Class. Serialized as `x:ext` */
export class PivotHierarchyExtension extends OxmlCompositeElement<X14PivotHierarchy> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14PivotHierarchy. */
    public get pivotHierarchy(): X14PivotHierarchy | undefined { return this._f(X14PivotHierarchy); }

}
/** Defines the ConditionalFormattingRuleExtension Class. Serialized as `x:ext` */
export class ConditionalFormattingRuleExtension extends OxmlCompositeElement<X14Id> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14Id. */
    public get id(): X14Id | undefined { return this._f(X14Id); }

}
/** Defines the MarkerType Class. */
export abstract class MarkerType extends OxmlCompositeElement<XdrColumnId | XdrColumnOffset | XdrRowId | XdrRowOffset> {

    /** Column). */
    public get columnId(): XdrColumnId | undefined { return this._f(XdrColumnId); }
    /** Column Offset. */
    public get columnOffset(): XdrColumnOffset | undefined { return this._f(XdrColumnOffset); }
    /** Row. */
    public get rowId(): XdrRowId | undefined { return this._f(XdrRowId); }
    /** Row Offset. */
    public get rowOffset(): XdrRowOffset | undefined { return this._f(XdrRowOffset); }

}
/** Defines the ToMarker Class. Serialized as `x:to` */
export class ToMarker extends MarkerType {

    public static override _Q = 'x:to';

}
/** Defines the FromMarker Class. Serialized as `x:from` */
export class FromMarker extends MarkerType {

    public static override _Q = 'x:from';

}
/** Defines the ObjectAnchor Class. Serialized as `x:anchor` */
export class ObjectAnchor extends OxmlCompositeElement<FromMarker | ToMarker> {

    public static override _Q = 'x:anchor';
    public static override _A = [':moveWithCells',':sizeWithCells',':z-order',];
    /** moveWithCells. Serialized as `:moveWithCells` */
    public get moveWithCells(): BooleanValue | undefined { return this._g(':moveWithCells'); }
    public set moveWithCells(v: BooleanValue | undefined) { this._s(':moveWithCells', v); }
    /** sizeWithCells. Serialized as `:sizeWithCells` */
    public get sizeWithCells(): BooleanValue | undefined { return this._g(':sizeWithCells'); }
    public set sizeWithCells(v: BooleanValue | undefined) { this._s(':sizeWithCells', v); }
    /** z-order. Serialized as `:z-order` */
    public get zOrder(): UInt32Value | undefined { return this._g(':z-order'); }
    public set zOrder(v: UInt32Value | undefined) { this._s(':z-order', v); }
    /** Returns FromMarker. */
    public get fromMarker(): FromMarker | undefined { return this._f(FromMarker); }
    /** Returns ToMarker. */
    public get toMarker(): ToMarker | undefined { return this._f(ToMarker); }

}
/** Defines the TableExtension Class. Serialized as `x:ext` */
export class TableExtension extends OxmlCompositeElement<X14Table> {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns X14Table. */
    public get table(): X14Table | undefined { return this._f(X14Table); }

}
/** Function Group. Serialized as `x:functionGroup` */
export class FunctionGroup extends OxmlLeafElement {

    public static override _Q = 'x:functionGroup';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defined Name. Serialized as `x:definedName` */
export class DefinedName extends OxmlLeafTextElement {

    public static override _Q = 'x:definedName';
    public static override _A = [':name',':comment',':customMenu',':description',':help',':statusBar',':localSheetId',':hidden',':function',':vbProcedure',':xlm',':functionGroupId',':shortcutKey',':publishToServer',':workbookParameter',];
    /** Defined Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Comment. Serialized as `:comment` */
    public get comment(): StringValue | undefined { return this._g(':comment'); }
    public set comment(v: StringValue | undefined) { this._s(':comment', v); }
    /** Custom Menu Text. Serialized as `:customMenu` */
    public get customMenu(): StringValue | undefined { return this._g(':customMenu'); }
    public set customMenu(v: StringValue | undefined) { this._s(':customMenu', v); }
    /** Description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** Help. Serialized as `:help` */
    public get help(): StringValue | undefined { return this._g(':help'); }
    public set help(v: StringValue | undefined) { this._s(':help', v); }
    /** Status Bar. Serialized as `:statusBar` */
    public get statusBar(): StringValue | undefined { return this._g(':statusBar'); }
    public set statusBar(v: StringValue | undefined) { this._s(':statusBar', v); }
    /** Local Name Sheet Id. Serialized as `:localSheetId` */
    public get localSheetId(): UInt32Value | undefined { return this._g(':localSheetId'); }
    public set localSheetId(v: UInt32Value | undefined) { this._s(':localSheetId', v); }
    /** Hidden Name. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Function. Serialized as `:function` */
    public get function(): BooleanValue | undefined { return this._g(':function'); }
    public set function(v: BooleanValue | undefined) { this._s(':function', v); }
    /** Procedure. Serialized as `:vbProcedure` */
    public get vbProcedure(): BooleanValue | undefined { return this._g(':vbProcedure'); }
    public set vbProcedure(v: BooleanValue | undefined) { this._s(':vbProcedure', v); }
    /** External Function. Serialized as `:xlm` */
    public get xlm(): BooleanValue | undefined { return this._g(':xlm'); }
    public set xlm(v: BooleanValue | undefined) { this._s(':xlm', v); }
    /** Function Group Id. Serialized as `:functionGroupId` */
    public get functionGroupId(): UInt32Value | undefined { return this._g(':functionGroupId'); }
    public set functionGroupId(v: UInt32Value | undefined) { this._s(':functionGroupId', v); }
    /** Shortcut Key. Serialized as `:shortcutKey` */
    public get shortcutKey(): StringValue | undefined { return this._g(':shortcutKey'); }
    public set shortcutKey(v: StringValue | undefined) { this._s(':shortcutKey', v); }
    /** Publish To Server. Serialized as `:publishToServer` */
    public get publishToServer(): BooleanValue | undefined { return this._g(':publishToServer'); }
    public set publishToServer(v: BooleanValue | undefined) { this._s(':publishToServer', v); }
    /** Workbook Parameter (Server). Serialized as `:workbookParameter` */
    public get workbookParameter(): BooleanValue | undefined { return this._g(':workbookParameter'); }
    public set workbookParameter(v: BooleanValue | undefined) { this._s(':workbookParameter', v); }

}
/** Workbook View. Serialized as `x:workbookView` */
export class WorkbookView extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:workbookView';
    public static override _A = [':visibility',':minimized',':showHorizontalScroll',':showVerticalScroll',':showSheetTabs',':xWindow',':yWindow',':windowWidth',':windowHeight',':tabRatio',':firstSheet',':activeTab',':autoFilterDateGrouping',];
    /** Visibility. Serialized as `:visibility` */
    public get visibility(): VisibilityValues | undefined { return this._g(':visibility'); }
    public set visibility(v: VisibilityValues | undefined) { this._s(':visibility', v); }
    /** Minimized. Serialized as `:minimized` */
    public get minimized(): BooleanValue | undefined { return this._g(':minimized'); }
    public set minimized(v: BooleanValue | undefined) { this._s(':minimized', v); }
    /** Show Horizontal Scroll. Serialized as `:showHorizontalScroll` */
    public get showHorizontalScroll(): BooleanValue | undefined { return this._g(':showHorizontalScroll'); }
    public set showHorizontalScroll(v: BooleanValue | undefined) { this._s(':showHorizontalScroll', v); }
    /** Show Vertical Scroll. Serialized as `:showVerticalScroll` */
    public get showVerticalScroll(): BooleanValue | undefined { return this._g(':showVerticalScroll'); }
    public set showVerticalScroll(v: BooleanValue | undefined) { this._s(':showVerticalScroll', v); }
    /** Show Sheet Tabs. Serialized as `:showSheetTabs` */
    public get showSheetTabs(): BooleanValue | undefined { return this._g(':showSheetTabs'); }
    public set showSheetTabs(v: BooleanValue | undefined) { this._s(':showSheetTabs', v); }
    /** Upper Left Corner (X Coordinate). Serialized as `:xWindow` */
    public get xWindow(): Int32Value | undefined { return this._g(':xWindow'); }
    public set xWindow(v: Int32Value | undefined) { this._s(':xWindow', v); }
    /** Upper Left Corner (Y Coordinate). Serialized as `:yWindow` */
    public get yWindow(): Int32Value | undefined { return this._g(':yWindow'); }
    public set yWindow(v: Int32Value | undefined) { this._s(':yWindow', v); }
    /** Window Width. Serialized as `:windowWidth` */
    public get windowWidth(): UInt32Value | undefined { return this._g(':windowWidth'); }
    public set windowWidth(v: UInt32Value | undefined) { this._s(':windowWidth', v); }
    /** Window Height. Serialized as `:windowHeight` */
    public get windowHeight(): UInt32Value | undefined { return this._g(':windowHeight'); }
    public set windowHeight(v: UInt32Value | undefined) { this._s(':windowHeight', v); }
    /** Sheet Tab Ratio. Serialized as `:tabRatio` */
    public get tabRatio(): UInt32Value | undefined { return this._g(':tabRatio'); }
    public set tabRatio(v: UInt32Value | undefined) { this._s(':tabRatio', v); }
    /** First Sheet. Serialized as `:firstSheet` */
    public get firstSheet(): UInt32Value | undefined { return this._g(':firstSheet'); }
    public set firstSheet(v: UInt32Value | undefined) { this._s(':firstSheet', v); }
    /** Active Sheet Index. Serialized as `:activeTab` */
    public get activeTab(): UInt32Value | undefined { return this._g(':activeTab'); }
    public set activeTab(v: UInt32Value | undefined) { this._s(':activeTab', v); }
    /** AutoFilter Date Grouping. Serialized as `:autoFilterDateGrouping` */
    public get autoFilterDateGrouping(): BooleanValue | undefined { return this._g(':autoFilterDateGrouping'); }
    public set autoFilterDateGrouping(v: BooleanValue | undefined) { this._s(':autoFilterDateGrouping', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Sheet Information. Serialized as `x:sheet` */
export class Sheet extends OxmlLeafElement {

    public static override _Q = 'x:sheet';
    public static override _A = [':name',':sheetId',':state','r:id',];
    /** Sheet Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Sheet Tab Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Visible State. Serialized as `:state` */
    public get state(): SheetStateValues | undefined { return this._g(':state'); }
    public set state(v: SheetStateValues | undefined) { this._s(':state', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Custom Workbook View. Serialized as `x:customWorkbookView` */
export class CustomWorkbookView extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:customWorkbookView';
    public static override _A = [':name',':guid',':autoUpdate',':mergeInterval',':changesSavedWin',':onlySync',':personalView',':includePrintSettings',':includeHiddenRowCol',':maximized',':minimized',':showHorizontalScroll',':showVerticalScroll',':showSheetTabs',':xWindow',':yWindow',':windowWidth',':windowHeight',':tabRatio',':activeSheetId',':showFormulaBar',':showStatusbar',':showComments',':showObjects',];
    /** Custom View Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Custom View GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** Auto Update. Serialized as `:autoUpdate` */
    public get autoUpdate(): BooleanValue | undefined { return this._g(':autoUpdate'); }
    public set autoUpdate(v: BooleanValue | undefined) { this._s(':autoUpdate', v); }
    /** Merge Interval. Serialized as `:mergeInterval` */
    public get mergeInterval(): UInt32Value | undefined { return this._g(':mergeInterval'); }
    public set mergeInterval(v: UInt32Value | undefined) { this._s(':mergeInterval', v); }
    /** Changes Saved Win. Serialized as `:changesSavedWin` */
    public get changesSavedWin(): BooleanValue | undefined { return this._g(':changesSavedWin'); }
    public set changesSavedWin(v: BooleanValue | undefined) { this._s(':changesSavedWin', v); }
    /** Only Synch. Serialized as `:onlySync` */
    public get onlySync(): BooleanValue | undefined { return this._g(':onlySync'); }
    public set onlySync(v: BooleanValue | undefined) { this._s(':onlySync', v); }
    /** Personal View. Serialized as `:personalView` */
    public get personalView(): BooleanValue | undefined { return this._g(':personalView'); }
    public set personalView(v: BooleanValue | undefined) { this._s(':personalView', v); }
    /** Include Print Settings. Serialized as `:includePrintSettings` */
    public get includePrintSettings(): BooleanValue | undefined { return this._g(':includePrintSettings'); }
    public set includePrintSettings(v: BooleanValue | undefined) { this._s(':includePrintSettings', v); }
    /** Include Hidden Rows and Columns. Serialized as `:includeHiddenRowCol` */
    public get includeHiddenRowColumn(): BooleanValue | undefined { return this._g(':includeHiddenRowCol'); }
    public set includeHiddenRowColumn(v: BooleanValue | undefined) { this._s(':includeHiddenRowCol', v); }
    /** Maximized. Serialized as `:maximized` */
    public get maximized(): BooleanValue | undefined { return this._g(':maximized'); }
    public set maximized(v: BooleanValue | undefined) { this._s(':maximized', v); }
    /** Minimized. Serialized as `:minimized` */
    public get minimized(): BooleanValue | undefined { return this._g(':minimized'); }
    public set minimized(v: BooleanValue | undefined) { this._s(':minimized', v); }
    /** Show Horizontal Scroll. Serialized as `:showHorizontalScroll` */
    public get showHorizontalScroll(): BooleanValue | undefined { return this._g(':showHorizontalScroll'); }
    public set showHorizontalScroll(v: BooleanValue | undefined) { this._s(':showHorizontalScroll', v); }
    /** Show Vertical Scroll. Serialized as `:showVerticalScroll` */
    public get showVerticalScroll(): BooleanValue | undefined { return this._g(':showVerticalScroll'); }
    public set showVerticalScroll(v: BooleanValue | undefined) { this._s(':showVerticalScroll', v); }
    /** Show Sheet Tabs. Serialized as `:showSheetTabs` */
    public get showSheetTabs(): BooleanValue | undefined { return this._g(':showSheetTabs'); }
    public set showSheetTabs(v: BooleanValue | undefined) { this._s(':showSheetTabs', v); }
    /** Top Left Corner (X Coordinate). Serialized as `:xWindow` */
    public get xWindow(): Int32Value | undefined { return this._g(':xWindow'); }
    public set xWindow(v: Int32Value | undefined) { this._s(':xWindow', v); }
    /** Top Left Corner (Y Coordinate). Serialized as `:yWindow` */
    public get yWindow(): Int32Value | undefined { return this._g(':yWindow'); }
    public set yWindow(v: Int32Value | undefined) { this._s(':yWindow', v); }
    /** Window Width. Serialized as `:windowWidth` */
    public get windowWidth(): UInt32Value | undefined { return this._g(':windowWidth'); }
    public set windowWidth(v: UInt32Value | undefined) { this._s(':windowWidth', v); }
    /** Window Height. Serialized as `:windowHeight` */
    public get windowHeight(): UInt32Value | undefined { return this._g(':windowHeight'); }
    public set windowHeight(v: UInt32Value | undefined) { this._s(':windowHeight', v); }
    /** Sheet Tab Ratio. Serialized as `:tabRatio` */
    public get tabRatio(): UInt32Value | undefined { return this._g(':tabRatio'); }
    public set tabRatio(v: UInt32Value | undefined) { this._s(':tabRatio', v); }
    /** Active Sheet in Book View. Serialized as `:activeSheetId` */
    public get activeSheetId(): UInt32Value | undefined { return this._g(':activeSheetId'); }
    public set activeSheetId(v: UInt32Value | undefined) { this._s(':activeSheetId', v); }
    /** Show Formula Bar. Serialized as `:showFormulaBar` */
    public get showFormulaBar(): BooleanValue | undefined { return this._g(':showFormulaBar'); }
    public set showFormulaBar(v: BooleanValue | undefined) { this._s(':showFormulaBar', v); }
    /** Show Status Bar. Serialized as `:showStatusbar` */
    public get showStatusbar(): BooleanValue | undefined { return this._g(':showStatusbar'); }
    public set showStatusbar(v: BooleanValue | undefined) { this._s(':showStatusbar', v); }
    /** Show Comments. Serialized as `:showComments` */
    public get showComments(): CommentsValues | undefined { return this._g(':showComments'); }
    public set showComments(v: CommentsValues | undefined) { this._s(':showComments', v); }
    /** Show Objects. Serialized as `:showObjects` */
    public get showObjects(): ObjectDisplayValues | undefined { return this._g(':showObjects'); }
    public set showObjects(v: ObjectDisplayValues | undefined) { this._s(':showObjects', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** External Reference. Serialized as `x:externalReference` */
export class ExternalReference extends OxmlLeafElement {

    public static override _Q = 'x:externalReference';
    public static override _A = ['r:id',];
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Web Publishing Object. Serialized as `x:webPublishObject` */
export class WebPublishObject extends OxmlLeafElement {

    public static override _Q = 'x:webPublishObject';
    public static override _A = [':id',':divId',':sourceObject',':destinationFile',':title',':autoRepublish',];
    /** Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Div Id. Serialized as `:divId` */
    public get divId(): StringValue | undefined { return this._g(':divId'); }
    public set divId(v: StringValue | undefined) { this._s(':divId', v); }
    /** Source Object. Serialized as `:sourceObject` */
    public get sourceObject(): StringValue | undefined { return this._g(':sourceObject'); }
    public set sourceObject(v: StringValue | undefined) { this._s(':sourceObject', v); }
    /** Destination File. Serialized as `:destinationFile` */
    public get destinationFile(): StringValue | undefined { return this._g(':destinationFile'); }
    public set destinationFile(v: StringValue | undefined) { this._s(':destinationFile', v); }
    /** Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Auto Republish. Serialized as `:autoRepublish` */
    public get autoRepublish(): BooleanValue | undefined { return this._g(':autoRepublish'); }
    public set autoRepublish(v: BooleanValue | undefined) { this._s(':autoRepublish', v); }

}
/** PivotCache. Serialized as `x:pivotCache` */
export class PivotCache extends OxmlLeafElement {

    public static override _Q = 'x:pivotCache';
    public static override _A = [':cacheId','r:id',];
    /** PivotCache Id. Serialized as `:cacheId` */
    public get cacheId(): UInt32Value | undefined { return this._g(':cacheId'); }
    public set cacheId(v: UInt32Value | undefined) { this._s(':cacheId', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** References. Serialized as `x:tr` */
export class TopicReferences extends OxmlLeafElement {

    public static override _Q = 'x:tr';
    public static override _A = [':r',':s',];
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Sheet Id. Serialized as `:s` */
    public get sheetId(): UInt32Value | undefined { return this._g(':s'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':s', v); }

}
/** Topic. Serialized as `x:tp` */
export class Topic extends OxmlCompositeElement<Xstring | Subtopic | TopicReferences> {

    public static override _Q = 'x:tp';
    public static override _A = [':t',];
    /** Type. Serialized as `:t` */
    public get valueType(): VolatileValues | undefined { return this._g(':t'); }
    public set valueType(v: VolatileValues | undefined) { this._s(':t', v); }
    /** Topic Value. */
    public get xstring(): Xstring | undefined { return this._f(Xstring); }

}
/** Main. Serialized as `x:main` */
export class Main extends OxmlCompositeElement<Topic> {

    public static override _Q = 'x:main';
    public static override _A = [':first',];
    /** First String. Serialized as `:first` */
    public get first(): StringValue | undefined { return this._g(':first'); }
    public set first(v: StringValue | undefined) { this._s(':first', v); }

}
/** Volatile Dependency Type. Serialized as `x:volType` */
export class VolatileType extends OxmlCompositeElement<Main> {

    public static override _Q = 'x:volType';
    public static override _A = [':type',];
    /** Type. Serialized as `:type` */
    public get type(): VolatileDependencyValues | undefined { return this._g(':type'); }
    public set type(v: VolatileDependencyValues | undefined) { this._s(':type', v); }

}
/** XML Column Properties. Serialized as `x:xmlColumnPr` */
export class XmlColumnProperties extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:xmlColumnPr';
    public static override _A = [':mapId',':xpath',':denormalized',':xmlDataType',];
    /** XML Map Id. Serialized as `:mapId` */
    public get mapId(): UInt32Value | undefined { return this._g(':mapId'); }
    public set mapId(v: UInt32Value | undefined) { this._s(':mapId', v); }
    /** XPath. Serialized as `:xpath` */
    public get xPath(): StringValue | undefined { return this._g(':xpath'); }
    public set xPath(v: StringValue | undefined) { this._s(':xpath', v); }
    /** Denormalized. Serialized as `:denormalized` */
    public get denormalized(): BooleanValue | undefined { return this._g(':denormalized'); }
    public set denormalized(v: BooleanValue | undefined) { this._s(':denormalized', v); }
    /** XML Data Type. Serialized as `:xmlDataType` */
    public get xmlDataType(): XmlDataValues | undefined { return this._g(':xmlDataType'); }
    public set xmlDataType(v: XmlDataValues | undefined) { this._s(':xmlDataType', v); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the TableFormulaType Class. */
export abstract class TableFormulaType extends OxmlLeafTextElement {

    public static override _A = [':array','xml:space',];
    /** Array. Serialized as `:array` */
    public get array(): BooleanValue | undefined { return this._g(':array'); }
    public set array(v: BooleanValue | undefined) { this._s(':array', v); }
    /** space. Serialized as `xml:space` */
    public get space(): SpaceProcessingModeValues | undefined { return this._g('xml:space'); }
    public set space(v: SpaceProcessingModeValues | undefined) { this._s('xml:space', v); }

}
/** Totals Row Formula. Serialized as `x:totalsRowFormula` */
export class TotalsRowFormula extends TableFormulaType {

    public static override _Q = 'x:totalsRowFormula';

}
/** Calculated Column Formula. Serialized as `x:calculatedColumnFormula` */
export class CalculatedColumnFormula extends TableFormulaType {

    public static override _Q = 'x:calculatedColumnFormula';

}
/** Table Column. Serialized as `x:tableColumn` */
export class TableColumn extends OxmlCompositeElement<CalculatedColumnFormula | TotalsRowFormula | XmlColumnProperties | ExtensionList> {

    public static override _Q = 'x:tableColumn';
    public static override _A = [':id',':uniqueName',':name',':totalsRowFunction',':totalsRowLabel',':queryTableFieldId',':headerRowDxfId',':dataDxfId',':totalsRowDxfId',':headerRowCellStyle',':dataCellStyle',':totalsRowCellStyle',];
    /** Table Field Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Unique Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** Column name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Totals Row Function. Serialized as `:totalsRowFunction` */
    public get totalsRowFunction(): TotalsRowFunctionValues | undefined { return this._g(':totalsRowFunction'); }
    public set totalsRowFunction(v: TotalsRowFunctionValues | undefined) { this._s(':totalsRowFunction', v); }
    /** Totals Row Label. Serialized as `:totalsRowLabel` */
    public get totalsRowLabel(): StringValue | undefined { return this._g(':totalsRowLabel'); }
    public set totalsRowLabel(v: StringValue | undefined) { this._s(':totalsRowLabel', v); }
    /** Query Table Field Id. Serialized as `:queryTableFieldId` */
    public get queryTableFieldId(): UInt32Value | undefined { return this._g(':queryTableFieldId'); }
    public set queryTableFieldId(v: UInt32Value | undefined) { this._s(':queryTableFieldId', v); }
    /** Header Row Cell Format Id. Serialized as `:headerRowDxfId` */
    public get headerRowDifferentialFormattingId(): UInt32Value | undefined { return this._g(':headerRowDxfId'); }
    public set headerRowDifferentialFormattingId(v: UInt32Value | undefined) { this._s(':headerRowDxfId', v); }
    /** Data and Insert Row Format Id. Serialized as `:dataDxfId` */
    public get dataFormatId(): UInt32Value | undefined { return this._g(':dataDxfId'); }
    public set dataFormatId(v: UInt32Value | undefined) { this._s(':dataDxfId', v); }
    /** Totals Row Format Id. Serialized as `:totalsRowDxfId` */
    public get totalsRowDifferentialFormattingId(): UInt32Value | undefined { return this._g(':totalsRowDxfId'); }
    public set totalsRowDifferentialFormattingId(v: UInt32Value | undefined) { this._s(':totalsRowDxfId', v); }
    /** Header Row Cell Style. Serialized as `:headerRowCellStyle` */
    public get headerRowCellStyle(): StringValue | undefined { return this._g(':headerRowCellStyle'); }
    public set headerRowCellStyle(v: StringValue | undefined) { this._s(':headerRowCellStyle', v); }
    /** Data Area Style Name. Serialized as `:dataCellStyle` */
    public get dataCellStyle(): StringValue | undefined { return this._g(':dataCellStyle'); }
    public set dataCellStyle(v: StringValue | undefined) { this._s(':dataCellStyle', v); }
    /** Totals Row Style Name. Serialized as `:totalsRowCellStyle` */
    public get totalsRowCellStyle(): StringValue | undefined { return this._g(':totalsRowCellStyle'); }
    public set totalsRowCellStyle(v: StringValue | undefined) { this._s(':totalsRowCellStyle', v); }
    /** Calculated Column Formula. */
    public get calculatedColumnFormula(): CalculatedColumnFormula | undefined { return this._f(CalculatedColumnFormula); }
    /** Totals Row Formula. */
    public get totalsRowFormula(): TotalsRowFormula | undefined { return this._f(TotalsRowFormula); }
    /** XML Column Properties. */
    public get xmlColumnProperties(): XmlColumnProperties | undefined { return this._f(XmlColumnProperties); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Value. Serialized as `x:v` */
export class Xstring extends OxmlLeafTextElement {

    public static override _Q = 'x:v';

}
/** Sheet Name. Serialized as `x:sheetName` */
export class SheetName extends OxmlLeafElement {

    public static override _Q = 'x:sheetName';
    public static override _A = [':val',];
    /** Sheet Name Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** OLE Link. Serialized as `x:oleLink` */
export class OleLink extends OxmlCompositeElement<OleItems> {

    public static override _Q = 'x:oleLink';
    public static override _A = ['r:id',':progId',];
    /** OLE Link Relationship. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** OLE Link ProgID. Serialized as `:progId` */
    public get progId(): StringValue | undefined { return this._g(':progId'); }
    public set progId(v: StringValue | undefined) { this._s(':progId', v); }
    /** OLE Link Items. */
    public get oleItems(): OleItems | undefined { return this._f(OleItems); }

}
/** DDE Connection. Serialized as `x:ddeLink` */
export class DdeLink extends OxmlCompositeElement<DdeItems> {

    public static override _Q = 'x:ddeLink';
    public static override _A = [':ddeService',':ddeTopic',];
    /** Service name. Serialized as `:ddeService` */
    public get ddeService(): StringValue | undefined { return this._g(':ddeService'); }
    public set ddeService(v: StringValue | undefined) { this._s(':ddeService', v); }
    /** Topic for DDE server. Serialized as `:ddeTopic` */
    public get ddeTopic(): StringValue | undefined { return this._g(':ddeTopic'); }
    public set ddeTopic(v: StringValue | undefined) { this._s(':ddeTopic', v); }
    /** DDE Items Collection. */
    public get ddeItems(): DdeItems | undefined { return this._f(DdeItems); }

}
/** External Workbook. Serialized as `x:externalBook` */
export class ExternalBook extends OxmlCompositeElement<Xxl21ExternalBookAlternateUrls | SheetNames | ExternalDefinedNames | SheetDataSet> {

    public static override _Q = 'x:externalBook';
    public static override _A = ['r:id',];
    /** Relationship to supporting book file path. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Alternate URLs and identifiers of the external book. */
    public get externalBookAlternateUrls(): Xxl21ExternalBookAlternateUrls | undefined { return this._f(Xxl21ExternalBookAlternateUrls); }
    /** Sheet names of supporting book. */
    public get sheetNames(): SheetNames | undefined { return this._f(SheetNames); }
    /** Defined names associated with supporting book.. */
    public get externalDefinedNames(): ExternalDefinedNames | undefined { return this._f(ExternalDefinedNames); }
    /** Cached worksheet data associated with supporting book. */
    public get sheetDataSet(): SheetDataSet | undefined { return this._f(SheetDataSet); }

}
/** OLE Link Items. Serialized as `x:oleItems` */
export class OleItems extends OxmlCompositeElement<OleItem | X14OleItem> {

    public static override _Q = 'x:oleItems';

}
/** Value. Serialized as `x:value` */
export class Value extends OxmlCompositeElement<DdeLinkValue> {

    public static override _Q = 'x:value';
    public static override _A = [':t',];
    /** DDE Value Type. Serialized as `:t` */
    public get valueType(): DdeValues | undefined { return this._g(':t'); }
    public set valueType(v: DdeValues | undefined) { this._s(':t', v); }
    /** DDE Link Value. */
    public get ddeLinkValue(): DdeLinkValue | undefined { return this._f(DdeLinkValue); }

}
/** DDE Name Values. Serialized as `x:values` */
export class Values extends OxmlCompositeElement<Value> {

    public static override _Q = 'x:values';
    public static override _A = [':rows',':cols',];
    /** Rows. Serialized as `:rows` */
    public get rows(): UInt32Value | undefined { return this._g(':rows'); }
    public set rows(v: UInt32Value | undefined) { this._s(':rows', v); }
    /** Columns. Serialized as `:cols` */
    public get columns(): UInt32Value | undefined { return this._g(':cols'); }
    public set columns(v: UInt32Value | undefined) { this._s(':cols', v); }

}
/** DDE Item definition. Serialized as `x:ddeItem` */
export class DdeItem extends OxmlCompositeElement<Values> {

    public static override _Q = 'x:ddeItem';
    public static override _A = [':name',':ole',':advise',':preferPic',];
    /** DDE Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** OLE. Serialized as `:ole` */
    public get useOle(): BooleanValue | undefined { return this._g(':ole'); }
    public set useOle(v: BooleanValue | undefined) { this._s(':ole', v); }
    /** Advise. Serialized as `:advise` */
    public get advise(): BooleanValue | undefined { return this._g(':advise'); }
    public set advise(v: BooleanValue | undefined) { this._s(':advise', v); }
    /** Data is an Image. Serialized as `:preferPic` */
    public get preferPicture(): BooleanValue | undefined { return this._g(':preferPic'); }
    public set preferPicture(v: BooleanValue | undefined) { this._s(':preferPic', v); }
    /** DDE Name Values. */
    public get values(): Values | undefined { return this._f(Values); }

}
/** DDE Items Collection. Serialized as `x:ddeItems` */
export class DdeItems extends OxmlCompositeElement<DdeItem> {

    public static override _Q = 'x:ddeItems';

}
/** External Cell Data. Serialized as `x:cell` */
export class ExternalCell extends OxmlCompositeElement<Xstring> {

    public static override _Q = 'x:cell';
    public static override _A = [':r',':t',':vm',];
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Type. Serialized as `:t` */
    public get dataType(): CellValues | undefined { return this._g(':t'); }
    public set dataType(v: CellValues | undefined) { this._s(':t', v); }
    /** Value Metadata. Serialized as `:vm` */
    public get valueMetaIndex(): UInt32Value | undefined { return this._g(':vm'); }
    public set valueMetaIndex(v: UInt32Value | undefined) { this._s(':vm', v); }
    /** Value. */
    public get xstring(): Xstring | undefined { return this._f(Xstring); }

}
/** Row. Serialized as `x:row` */
export class ExternalRow extends OxmlCompositeElement<ExternalCell> {

    public static override _Q = 'x:row';
    public static override _A = [':r',];
    /** Row. Serialized as `:r` */
    public get rowIndex(): UInt32Value | undefined { return this._g(':r'); }
    public set rowIndex(v: UInt32Value | undefined) { this._s(':r', v); }

}
/** External Sheet Data Set. Serialized as `x:sheetData` */
export class ExternalSheetData extends OxmlCompositeElement<ExternalRow> {

    public static override _Q = 'x:sheetData';
    public static override _A = [':sheetId',':refreshError',];
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Last Refresh Resulted in Error. Serialized as `:refreshError` */
    public get refreshError(): BooleanValue | undefined { return this._g(':refreshError'); }
    public set refreshError(v: BooleanValue | undefined) { this._s(':refreshError', v); }

}
/** Defined Name. Serialized as `x:definedName` */
export class ExternalDefinedName extends OxmlLeafElement {

    public static override _Q = 'x:definedName';
    public static override _A = [':name',':refersTo',':sheetId',];
    /** Defined Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Refers To. Serialized as `:refersTo` */
    public get refersTo(): StringValue | undefined { return this._g(':refersTo'); }
    public set refersTo(v: StringValue | undefined) { this._s(':refersTo', v); }
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }

}
/** Table Style. Serialized as `x:tableStyleElement` */
export class TableStyleElement extends OxmlLeafElement {

    public static override _Q = 'x:tableStyleElement';
    public static override _A = [':type',':size',':dxfId',];
    /** Table Style Type. Serialized as `:type` */
    public get type(): TableStyleValues | undefined { return this._g(':type'); }
    public set type(v: TableStyleValues | undefined) { this._s(':type', v); }
    /** Band Size. Serialized as `:size` */
    public get size(): UInt32Value | undefined { return this._g(':size'); }
    public set size(v: UInt32Value | undefined) { this._s(':size', v); }
    /** Formatting Id. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }

}
/** Character Set. Serialized as `x:charset` */
export class FontCharSet extends OxmlLeafElement {

    public static override _Q = 'x:charset';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Font Family. Serialized as `x:family` */
export class FontFamilyNumbering extends OxmlLeafElement {

    public static override _Q = 'x:family';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Font Name. Serialized as `x:name` */
export class FontName extends OxmlLeafElement {

    public static override _Q = 'x:name';
    public static override _A = [':val',];
    /** String Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Formatting Elements. Serialized as `x:xf` */
export class CellFormat extends OxmlCompositeElement<Alignment | Protection | ExtensionList> {

    public static override _Q = 'x:xf';
    public static override _A = [':numFmtId',':fontId',':fillId',':borderId',':xfId',':quotePrefix',':pivotButton',':applyNumberFormat',':applyFont',':applyFill',':applyBorder',':applyAlignment',':applyProtection',];
    /** Number Format Id. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** Font Id. Serialized as `:fontId` */
    public get fontId(): UInt32Value | undefined { return this._g(':fontId'); }
    public set fontId(v: UInt32Value | undefined) { this._s(':fontId', v); }
    /** Fill Id. Serialized as `:fillId` */
    public get fillId(): UInt32Value | undefined { return this._g(':fillId'); }
    public set fillId(v: UInt32Value | undefined) { this._s(':fillId', v); }
    /** Border Id. Serialized as `:borderId` */
    public get borderId(): UInt32Value | undefined { return this._g(':borderId'); }
    public set borderId(v: UInt32Value | undefined) { this._s(':borderId', v); }
    /** Format Id. Serialized as `:xfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':xfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':xfId', v); }
    /** Quote Prefix. Serialized as `:quotePrefix` */
    public get quotePrefix(): BooleanValue | undefined { return this._g(':quotePrefix'); }
    public set quotePrefix(v: BooleanValue | undefined) { this._s(':quotePrefix', v); }
    /** Pivot Button. Serialized as `:pivotButton` */
    public get pivotButton(): BooleanValue | undefined { return this._g(':pivotButton'); }
    public set pivotButton(v: BooleanValue | undefined) { this._s(':pivotButton', v); }
    /** Apply Number Format. Serialized as `:applyNumberFormat` */
    public get applyNumberFormat(): BooleanValue | undefined { return this._g(':applyNumberFormat'); }
    public set applyNumberFormat(v: BooleanValue | undefined) { this._s(':applyNumberFormat', v); }
    /** Apply Font. Serialized as `:applyFont` */
    public get applyFont(): BooleanValue | undefined { return this._g(':applyFont'); }
    public set applyFont(v: BooleanValue | undefined) { this._s(':applyFont', v); }
    /** Apply Fill. Serialized as `:applyFill` */
    public get applyFill(): BooleanValue | undefined { return this._g(':applyFill'); }
    public set applyFill(v: BooleanValue | undefined) { this._s(':applyFill', v); }
    /** Apply Border. Serialized as `:applyBorder` */
    public get applyBorder(): BooleanValue | undefined { return this._g(':applyBorder'); }
    public set applyBorder(v: BooleanValue | undefined) { this._s(':applyBorder', v); }
    /** Apply Alignment. Serialized as `:applyAlignment` */
    public get applyAlignment(): BooleanValue | undefined { return this._g(':applyAlignment'); }
    public set applyAlignment(v: BooleanValue | undefined) { this._s(':applyAlignment', v); }
    /** Apply Protection. Serialized as `:applyProtection` */
    public get applyProtection(): BooleanValue | undefined { return this._g(':applyProtection'); }
    public set applyProtection(v: BooleanValue | undefined) { this._s(':applyProtection', v); }
    /** Alignment. */
    public get alignment(): Alignment | undefined { return this._f(Alignment); }
    /** Protection. */
    public get protection(): Protection | undefined { return this._f(Protection); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Cell Style. Serialized as `x:cellStyle` */
export class CellStyle extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:cellStyle';
    public static override _A = [':name',':xfId',':builtinId',':iLevel',':hidden',':customBuiltin',];
    /** User Defined Cell Style. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Format Id. Serialized as `:xfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':xfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':xfId', v); }
    /** Built-In Style Id. Serialized as `:builtinId` */
    public get builtinId(): UInt32Value | undefined { return this._g(':builtinId'); }
    public set builtinId(v: UInt32Value | undefined) { this._s(':builtinId', v); }
    /** Outline Style. Serialized as `:iLevel` */
    public get outlineLevel(): UInt32Value | undefined { return this._g(':iLevel'); }
    public set outlineLevel(v: UInt32Value | undefined) { this._s(':iLevel', v); }
    /** Hidden Style. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Custom Built In. Serialized as `:customBuiltin` */
    public get customBuiltin(): BooleanValue | undefined { return this._g(':customBuiltin'); }
    public set customBuiltin(v: BooleanValue | undefined) { this._s(':customBuiltin', v); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** RGB Color. Serialized as `x:rgbColor` */
export class RgbColor extends OxmlLeafElement {

    public static override _Q = 'x:rgbColor';
    public static override _A = [':rgb',];
    /** Alpha Red Green Blue. Serialized as `:rgb` */
    public get rgb(): HexBinaryValue | undefined { return this._g(':rgb'); }
    public set rgb(v: HexBinaryValue | undefined) { this._s(':rgb', v); }

}
/** Table Style. Serialized as `x:tableStyle` */
export class TableStyle extends OxmlCompositeElement<TableStyleElement> {

    public static override _Q = 'x:tableStyle';
    public static override _A = [':name',':pivot',':table',':count',];
    /** Table Style Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Pivot Style. Serialized as `:pivot` */
    public get pivot(): BooleanValue | undefined { return this._g(':pivot'); }
    public set pivot(v: BooleanValue | undefined) { this._s(':pivot', v); }
    /** Table. Serialized as `:table` */
    public get table(): BooleanValue | undefined { return this._g(':table'); }
    public set table(v: BooleanValue | undefined) { this._s(':table', v); }
    /** Table Style Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** MRU Colors. Serialized as `x:mruColors` */
export class MruColors extends OxmlCompositeElement<Color> {

    public static override _Q = 'x:mruColors';

}
/** Color Indexes. Serialized as `x:indexedColors` */
export class IndexedColors extends OxmlCompositeElement<RgbColor> {

    public static override _Q = 'x:indexedColors';

}
/** Border Properties. Serialized as `x:border` */
export class Border extends OxmlCompositeElement<StartBorder | EndBorder | LeftBorder | RightBorder | TopBorder | BottomBorder | DiagonalBorder | VerticalBorder | HorizontalBorder> {

    public static override _Q = 'x:border';
    public static override _A = [':diagonalUp',':diagonalDown',':outline',];
    /** Diagonal Up. Serialized as `:diagonalUp` */
    public get diagonalUp(): BooleanValue | undefined { return this._g(':diagonalUp'); }
    public set diagonalUp(v: BooleanValue | undefined) { this._s(':diagonalUp', v); }
    /** Diagonal Down. Serialized as `:diagonalDown` */
    public get diagonalDown(): BooleanValue | undefined { return this._g(':diagonalDown'); }
    public set diagonalDown(v: BooleanValue | undefined) { this._s(':diagonalDown', v); }
    /** Outline. Serialized as `:outline` */
    public get outline(): BooleanValue | undefined { return this._g(':outline'); }
    public set outline(v: BooleanValue | undefined) { this._s(':outline', v); }
    /** Returns StartBorder. */
    public get startBorder(): StartBorder | undefined { return this._f(StartBorder); }
    /** Returns EndBorder. */
    public get endBorder(): EndBorder | undefined { return this._f(EndBorder); }
    /** Left Border. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Right Border. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }
    /** Top Border. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Bottom Border. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Diagonal. */
    public get diagonalBorder(): DiagonalBorder | undefined { return this._f(DiagonalBorder); }
    /** Vertical Inner Border. */
    public get verticalBorder(): VerticalBorder | undefined { return this._f(VerticalBorder); }
    /** Horizontal Inner Borders. */
    public get horizontalBorder(): HorizontalBorder | undefined { return this._f(HorizontalBorder); }

}
/** Fill. Serialized as `x:fill` */
export class Fill extends OxmlCompositeElement<PatternFill | GradientFill> {

    public static override _Q = 'x:fill';
    /** Pattern. */
    public get patternFill(): PatternFill | undefined { return this._f(PatternFill); }
    /** Gradient. */
    public get gradientFill(): GradientFill | undefined { return this._f(GradientFill); }

}
/** Font Properties. Serialized as `x:font` */
export class Font extends OxmlCompositeElement<Bold | Italic | Strike | Condense | Extend | Outline | Shadow | Underline | VerticalTextAlignment | FontSize | Color | FontName | FontFamilyNumbering | FontCharSet | FontScheme> {

    public static override _Q = 'x:font';
    /** Bold. */
    public get bold(): Bold | undefined { return this._f(Bold); }
    /** Italic. */
    public get italic(): Italic | undefined { return this._f(Italic); }
    /** Strike Through. */
    public get strike(): Strike | undefined { return this._f(Strike); }
    /** Condense. */
    public get condense(): Condense | undefined { return this._f(Condense); }
    /** Extend. */
    public get extend(): Extend | undefined { return this._f(Extend); }
    /** Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }
    /** Shadow. */
    public get shadow(): Shadow | undefined { return this._f(Shadow); }
    /** Underline. */
    public get underline(): Underline | undefined { return this._f(Underline); }
    /** Text Vertical Alignment. */
    public get verticalTextAlignment(): VerticalTextAlignment | undefined { return this._f(VerticalTextAlignment); }
    /** Font Size. */
    public get fontSize(): FontSize | undefined { return this._f(FontSize); }
    /** Text Color. */
    public get color(): Color | undefined { return this._f(Color); }
    /** Font Name. */
    public get fontName(): FontName | undefined { return this._f(FontName); }
    /** Font Family. */
    public get fontFamilyNumbering(): FontFamilyNumbering | undefined { return this._f(FontFamilyNumbering); }
    /** Character Set. */
    public get fontCharSet(): FontCharSet | undefined { return this._f(FontCharSet); }
    /** Scheme. */
    public get fontScheme(): FontScheme | undefined { return this._f(FontScheme); }

}
/** Protection. Serialized as `x:protection` */
export class Protection extends OxmlLeafElement {

    public static override _Q = 'x:protection';
    public static override _A = [':locked',':hidden',];
    /** Cell Locked. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** Hidden Cell. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }

}
/** Alignment. Serialized as `x:alignment` */
export class Alignment extends OxmlLeafElement {

    public static override _Q = 'x:alignment';
    public static override _A = [':horizontal',':vertical',':textRotation',':wrapText',':indent',':relativeIndent',':justifyLastLine',':shrinkToFit',':readingOrder',':mergeCell',];
    /** Horizontal Alignment. Serialized as `:horizontal` */
    public get horizontal(): HorizontalAlignmentValues | undefined { return this._g(':horizontal'); }
    public set horizontal(v: HorizontalAlignmentValues | undefined) { this._s(':horizontal', v); }
    /** Vertical Alignment. Serialized as `:vertical` */
    public get vertical(): VerticalAlignmentValues | undefined { return this._g(':vertical'); }
    public set vertical(v: VerticalAlignmentValues | undefined) { this._s(':vertical', v); }
    /** Text Rotation. Serialized as `:textRotation` */
    public get textRotation(): UInt32Value | undefined { return this._g(':textRotation'); }
    public set textRotation(v: UInt32Value | undefined) { this._s(':textRotation', v); }
    /** Wrap Text. Serialized as `:wrapText` */
    public get wrapText(): BooleanValue | undefined { return this._g(':wrapText'); }
    public set wrapText(v: BooleanValue | undefined) { this._s(':wrapText', v); }
    /** Indent. Serialized as `:indent` */
    public get indent(): UInt32Value | undefined { return this._g(':indent'); }
    public set indent(v: UInt32Value | undefined) { this._s(':indent', v); }
    /** Relative Indent. Serialized as `:relativeIndent` */
    public get relativeIndent(): Int32Value | undefined { return this._g(':relativeIndent'); }
    public set relativeIndent(v: Int32Value | undefined) { this._s(':relativeIndent', v); }
    /** Justify Last Line. Serialized as `:justifyLastLine` */
    public get justifyLastLine(): BooleanValue | undefined { return this._g(':justifyLastLine'); }
    public set justifyLastLine(v: BooleanValue | undefined) { this._s(':justifyLastLine', v); }
    /** Shrink To Fit. Serialized as `:shrinkToFit` */
    public get shrinkToFit(): BooleanValue | undefined { return this._g(':shrinkToFit'); }
    public set shrinkToFit(v: BooleanValue | undefined) { this._s(':shrinkToFit', v); }
    /** Reading Order. Serialized as `:readingOrder` */
    public get readingOrder(): UInt32Value | undefined { return this._g(':readingOrder'); }
    public set readingOrder(v: UInt32Value | undefined) { this._s(':readingOrder', v); }
    /** mergeCell. Serialized as `:mergeCell` */
    public get mergeCell(): StringValue | undefined { return this._g(':mergeCell'); }
    public set mergeCell(v: StringValue | undefined) { this._s(':mergeCell', v); }

}
/** Number Formats. Serialized as `x:numFmt` */
export class NumberingFormat extends OxmlLeafElement {

    public static override _Q = 'x:numFmt';
    public static override _A = [':numFmtId',':formatCode',];
    /** Number Format Id. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** Number Format Code. Serialized as `:formatCode` */
    public get formatCode(): StringValue | undefined { return this._g(':formatCode'); }
    public set formatCode(v: StringValue | undefined) { this._s(':formatCode', v); }

}
/** Gradient Stop. Serialized as `x:stop` */
export class GradientStop extends OxmlCompositeElement<Color> {

    public static override _Q = 'x:stop';
    public static override _A = [':position',];
    /** Gradient Stop Position. Serialized as `:position` */
    public get position(): DoubleValue | undefined { return this._g(':position'); }
    public set position(v: DoubleValue | undefined) { this._s(':position', v); }
    /** Color. */
    public get color(): Color | undefined { return this._f(Color); }

}
/** Gradient. Serialized as `x:gradientFill` */
export class GradientFill extends OxmlCompositeElement<GradientStop> {

    public static override _Q = 'x:gradientFill';
    public static override _A = [':type',':degree',':left',':right',':top',':bottom',];
    /** Gradient Fill Type. Serialized as `:type` */
    public get type(): GradientValues | undefined { return this._g(':type'); }
    public set type(v: GradientValues | undefined) { this._s(':type', v); }
    /** Linear Gradient Degree. Serialized as `:degree` */
    public get degree(): DoubleValue | undefined { return this._g(':degree'); }
    public set degree(v: DoubleValue | undefined) { this._s(':degree', v); }
    /** Left Convergence. Serialized as `:left` */
    public get left(): DoubleValue | undefined { return this._g(':left'); }
    public set left(v: DoubleValue | undefined) { this._s(':left', v); }
    /** Right Convergence. Serialized as `:right` */
    public get right(): DoubleValue | undefined { return this._g(':right'); }
    public set right(v: DoubleValue | undefined) { this._s(':right', v); }
    /** Top Gradient Convergence. Serialized as `:top` */
    public get top(): DoubleValue | undefined { return this._g(':top'); }
    public set top(v: DoubleValue | undefined) { this._s(':top', v); }
    /** Bottom Convergence. Serialized as `:bottom` */
    public get bottom(): DoubleValue | undefined { return this._g(':bottom'); }
    public set bottom(v: DoubleValue | undefined) { this._s(':bottom', v); }

}
/** Pattern. Serialized as `x:patternFill` */
export class PatternFill extends OxmlCompositeElement<ForegroundColor | BackgroundColor> {

    public static override _Q = 'x:patternFill';
    public static override _A = [':patternType',];
    /** Pattern Type. Serialized as `:patternType` */
    public get patternType(): PatternValues | undefined { return this._g(':patternType'); }
    public set patternType(v: PatternValues | undefined) { this._s(':patternType', v); }
    /** Foreground Color. */
    public get foregroundColor(): ForegroundColor | undefined { return this._f(ForegroundColor); }
    /** Background Color. */
    public get backgroundColor(): BackgroundColor | undefined { return this._f(BackgroundColor); }

}
/** Column XML Properties. Serialized as `x:xmlPr` */
export class XmlProperties extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:xmlPr';
    public static override _A = [':mapId',':xpath',':xmlDataType',];
    /** XML Map Id. Serialized as `:mapId` */
    public get mapId(): UInt32Value | undefined { return this._g(':mapId'); }
    public set mapId(v: UInt32Value | undefined) { this._s(':mapId', v); }
    /** XPath. Serialized as `:xpath` */
    public get xPath(): StringValue | undefined { return this._g(':xpath'); }
    public set xPath(v: StringValue | undefined) { this._s(':xpath', v); }
    /** XML Data Type. Serialized as `:xmlDataType` */
    public get xmlDataType(): XmlDataValues | undefined { return this._g(':xmlDataType'); }
    public set xmlDataType(v: XmlDataValues | undefined) { this._s(':xmlDataType', v); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Cell Properties. Serialized as `x:xmlCellPr` */
export class XmlCellProperties extends OxmlCompositeElement<XmlProperties | ExtensionList> {

    public static override _Q = 'x:xmlCellPr';
    public static override _A = [':id',':uniqueName',];
    /** Table Field Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Unique Table Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** Column XML Properties. */
    public get xmlProperties(): XmlProperties | undefined { return this._f(XmlProperties); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Table Properties. Serialized as `x:singleXmlCell` */
export class SingleXmlCell extends OxmlCompositeElement<XmlCellProperties | ExtensionList> {

    public static override _Q = 'x:singleXmlCell';
    public static override _A = [':id',':r',':connectionId',];
    /** Table Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Connection ID. Serialized as `:connectionId` */
    public get connectionId(): UInt32Value | undefined { return this._g(':connectionId'); }
    public set connectionId(v: UInt32Value | undefined) { this._s(':connectionId', v); }
    /** Cell Properties. */
    public get xmlCellProperties(): XmlCellProperties | undefined { return this._f(XmlCellProperties); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Member Unique Name Index. Serialized as `x:n` */
export class NameIndex extends OxmlLeafElement {

    public static override _Q = 'x:n';
    public static override _A = [':x',':s',];
    /** Index Value. Serialized as `:x` */
    public get index(): UInt32Value | undefined { return this._g(':x'); }
    public set index(v: UInt32Value | undefined) { this._s(':x', v); }
    /** String is a Set. Serialized as `:s` */
    public get isASet(): BooleanValue | undefined { return this._g(':s'); }
    public set isASet(v: BooleanValue | undefined) { this._s(':s', v); }

}
/** KPI MDX Metadata. Serialized as `x:k` */
export class MdxKpi extends OxmlLeafElement {

    public static override _Q = 'x:k';
    public static override _A = [':n',':np',':p',];
    /** Member Unique Name Index. Serialized as `:n` */
    public get nameIndex(): UInt32Value | undefined { return this._g(':n'); }
    public set nameIndex(v: UInt32Value | undefined) { this._s(':n', v); }
    /** KPI Index. Serialized as `:np` */
    public get kpiIndex(): UInt32Value | undefined { return this._g(':np'); }
    public set kpiIndex(v: UInt32Value | undefined) { this._s(':np', v); }
    /** KPI Property. Serialized as `:p` */
    public get kpiProperty(): MdxKPIPropertyValues | undefined { return this._g(':p'); }
    public set kpiProperty(v: MdxKPIPropertyValues | undefined) { this._s(':p', v); }

}
/** Member Property MDX Metadata. Serialized as `x:p` */
export class MdxMemberProp extends OxmlLeafElement {

    public static override _Q = 'x:p';
    public static override _A = [':n',':np',];
    /** Member Unique Name Index. Serialized as `:n` */
    public get nameIndex(): UInt32Value | undefined { return this._g(':n'); }
    public set nameIndex(v: UInt32Value | undefined) { this._s(':n', v); }
    /** Property Name Index. Serialized as `:np` */
    public get propertyNameIndex(): UInt32Value | undefined { return this._g(':np'); }
    public set propertyNameIndex(v: UInt32Value | undefined) { this._s(':np', v); }

}
/** Set MDX Metadata. Serialized as `x:ms` */
export class MdxSet extends OxmlCompositeElement<NameIndex> {

    public static override _Q = 'x:ms';
    public static override _A = [':ns',':c',':o',];
    /** Set Definition Index. Serialized as `:ns` */
    public get setDefinitionIndex(): UInt32Value | undefined { return this._g(':ns'); }
    public set setDefinitionIndex(v: UInt32Value | undefined) { this._s(':ns', v); }
    /** Sort By Member Index Count. Serialized as `:c` */
    public get memberIndexCount(): UInt32Value | undefined { return this._g(':c'); }
    public set memberIndexCount(v: UInt32Value | undefined) { this._s(':c', v); }
    /** Set Sort Order. Serialized as `:o` */
    public get sortingOrder(): MdxSetOrderValues | undefined { return this._g(':o'); }
    public set sortingOrder(v: MdxSetOrderValues | undefined) { this._s(':o', v); }

}
/** Tuple MDX Metadata. Serialized as `x:t` */
export class MdxTuple extends OxmlCompositeElement<NameIndex> {

    public static override _Q = 'x:t';
    public static override _A = [':c',':ct',':si',':fi',':bc',':fc',':i',':u',':st',':b',];
    /** Member Index Count. Serialized as `:c` */
    public get memberIndexCount(): UInt32Value | undefined { return this._g(':c'); }
    public set memberIndexCount(v: UInt32Value | undefined) { this._s(':c', v); }
    /** Server Formatting Culture Currency. Serialized as `:ct` */
    public get cultureCurrency(): StringValue | undefined { return this._g(':ct'); }
    public set cultureCurrency(v: StringValue | undefined) { this._s(':ct', v); }
    /** Server Formatting String Index. Serialized as `:si` */
    public get formattingStringIndex(): UInt32Value | undefined { return this._g(':si'); }
    public set formattingStringIndex(v: UInt32Value | undefined) { this._s(':si', v); }
    /** Server Formatting Built-In Number Format Index. Serialized as `:fi` */
    public get formatIndex(): UInt32Value | undefined { return this._g(':fi'); }
    public set formatIndex(v: UInt32Value | undefined) { this._s(':fi', v); }
    /** Server Formatting Background Color. Serialized as `:bc` */
    public get backgroundColor(): HexBinaryValue | undefined { return this._g(':bc'); }
    public set backgroundColor(v: HexBinaryValue | undefined) { this._s(':bc', v); }
    /** Server Formatting Foreground Color. Serialized as `:fc` */
    public get foregroundColor(): HexBinaryValue | undefined { return this._g(':fc'); }
    public set foregroundColor(v: HexBinaryValue | undefined) { this._s(':fc', v); }
    /** Server Formatting Italic Font. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** Server Formatting Underline Font. Serialized as `:u` */
    public get underline(): BooleanValue | undefined { return this._g(':u'); }
    public set underline(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Server Formatting Strikethrough Font. Serialized as `:st` */
    public get strikethrough(): BooleanValue | undefined { return this._g(':st'); }
    public set strikethrough(v: BooleanValue | undefined) { this._s(':st', v); }
    /** Server Formatting Bold Font. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }

}
/** MDX Metadata Record. Serialized as `x:mdx` */
export class Mdx extends OxmlCompositeElement<MdxTuple | MdxSet | MdxMemberProp | MdxKpi> {

    public static override _Q = 'x:mdx';
    public static override _A = [':n',':f',];
    /** Connection Name Index. Serialized as `:n` */
    public get nameIndex(): UInt32Value | undefined { return this._g(':n'); }
    public set nameIndex(v: UInt32Value | undefined) { this._s(':n', v); }
    /** Cube Function Tag. Serialized as `:f` */
    public get cubeFunction(): MdxFunctionValues | undefined { return this._g(':f'); }
    public set cubeFunction(v: MdxFunctionValues | undefined) { this._s(':f', v); }
    /** Tuple MDX Metadata. */
    public get mdxTuple(): MdxTuple | undefined { return this._f(MdxTuple); }
    /** Set MDX Metadata. */
    public get mdxSet(): MdxSet | undefined { return this._f(MdxSet); }
    /** Member Property MDX Metadata. */
    public get mdxMemberProp(): MdxMemberProp | undefined { return this._f(MdxMemberProp); }
    /** KPI MDX Metadata. */
    public get mdxKpi(): MdxKpi | undefined { return this._f(MdxKpi); }

}
/** Future Metadata Block. Serialized as `x:bk` */
export class FutureMetadataBlock extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:bk';
    /** Future Feature Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Metadata Record. Serialized as `x:rc` */
export class MetadataRecord extends OxmlLeafElement {

    public static override _Q = 'x:rc';
    public static override _A = [':t',':v',];
    /** Metadata Record Type Index. Serialized as `:t` */
    public get typeIndex(): UInt32Value | undefined { return this._g(':t'); }
    public set typeIndex(v: UInt32Value | undefined) { this._s(':t', v); }
    /** Metadata Record Value Index. Serialized as `:v` */
    public get val(): UInt32Value | undefined { return this._g(':v'); }
    public set val(v: UInt32Value | undefined) { this._s(':v', v); }

}
/** Metadata Block. Serialized as `x:bk` */
export class MetadataBlock extends OxmlCompositeElement<MetadataRecord> {

    public static override _Q = 'x:bk';

}
/** Metadata Type Information. Serialized as `x:metadataType` */
export class MetadataType extends OxmlLeafElement {

    public static override _Q = 'x:metadataType';
    public static override _A = [':name',':minSupportedVersion',':ghostRow',':ghostCol',':edit',':delete',':copy',':pasteAll',':pasteFormulas',':pasteValues',':pasteFormats',':pasteComments',':pasteDataValidation',':pasteBorders',':pasteColWidths',':pasteNumberFormats',':merge',':splitFirst',':splitAll',':rowColShift',':clearAll',':clearFormats',':clearContents',':clearComments',':assign',':coerce',':adjust',':cellMeta',];
    /** Metadata Type Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Minimum Supported Version. Serialized as `:minSupportedVersion` */
    public get minSupportedVersion(): UInt32Value | undefined { return this._g(':minSupportedVersion'); }
    public set minSupportedVersion(v: UInt32Value | undefined) { this._s(':minSupportedVersion', v); }
    /** Metadata Ghost Row. Serialized as `:ghostRow` */
    public get ghostRow(): BooleanValue | undefined { return this._g(':ghostRow'); }
    public set ghostRow(v: BooleanValue | undefined) { this._s(':ghostRow', v); }
    /** Metadata Ghost Column. Serialized as `:ghostCol` */
    public get ghostColumn(): BooleanValue | undefined { return this._g(':ghostCol'); }
    public set ghostColumn(v: BooleanValue | undefined) { this._s(':ghostCol', v); }
    /** Metadata Edit. Serialized as `:edit` */
    public get edit(): BooleanValue | undefined { return this._g(':edit'); }
    public set edit(v: BooleanValue | undefined) { this._s(':edit', v); }
    /** Metadata Cell Value Delete. Serialized as `:delete` */
    public get delete(): BooleanValue | undefined { return this._g(':delete'); }
    public set delete(v: BooleanValue | undefined) { this._s(':delete', v); }
    /** Metadata Copy. Serialized as `:copy` */
    public get copy(): BooleanValue | undefined { return this._g(':copy'); }
    public set copy(v: BooleanValue | undefined) { this._s(':copy', v); }
    /** Metadata Paste All. Serialized as `:pasteAll` */
    public get pasteAll(): BooleanValue | undefined { return this._g(':pasteAll'); }
    public set pasteAll(v: BooleanValue | undefined) { this._s(':pasteAll', v); }
    /** Metadata Paste Formulas. Serialized as `:pasteFormulas` */
    public get pasteFormulas(): BooleanValue | undefined { return this._g(':pasteFormulas'); }
    public set pasteFormulas(v: BooleanValue | undefined) { this._s(':pasteFormulas', v); }
    /** Metadata Paste Special Values. Serialized as `:pasteValues` */
    public get pasteValues(): BooleanValue | undefined { return this._g(':pasteValues'); }
    public set pasteValues(v: BooleanValue | undefined) { this._s(':pasteValues', v); }
    /** Metadata Paste Formats. Serialized as `:pasteFormats` */
    public get pasteFormats(): BooleanValue | undefined { return this._g(':pasteFormats'); }
    public set pasteFormats(v: BooleanValue | undefined) { this._s(':pasteFormats', v); }
    /** Metadata Paste Comments. Serialized as `:pasteComments` */
    public get pasteComments(): BooleanValue | undefined { return this._g(':pasteComments'); }
    public set pasteComments(v: BooleanValue | undefined) { this._s(':pasteComments', v); }
    /** Metadata Paste Data Validation. Serialized as `:pasteDataValidation` */
    public get pasteDataValidation(): BooleanValue | undefined { return this._g(':pasteDataValidation'); }
    public set pasteDataValidation(v: BooleanValue | undefined) { this._s(':pasteDataValidation', v); }
    /** Metadata Paste Borders. Serialized as `:pasteBorders` */
    public get pasteBorders(): BooleanValue | undefined { return this._g(':pasteBorders'); }
    public set pasteBorders(v: BooleanValue | undefined) { this._s(':pasteBorders', v); }
    /** Metadata Paste Column Widths. Serialized as `:pasteColWidths` */
    public get pasteColWidths(): BooleanValue | undefined { return this._g(':pasteColWidths'); }
    public set pasteColWidths(v: BooleanValue | undefined) { this._s(':pasteColWidths', v); }
    /** Metadata Paste Number Formats. Serialized as `:pasteNumberFormats` */
    public get pasteNumberFormats(): BooleanValue | undefined { return this._g(':pasteNumberFormats'); }
    public set pasteNumberFormats(v: BooleanValue | undefined) { this._s(':pasteNumberFormats', v); }
    /** Metadata Merge. Serialized as `:merge` */
    public get merge(): BooleanValue | undefined { return this._g(':merge'); }
    public set merge(v: BooleanValue | undefined) { this._s(':merge', v); }
    /** Meatadata Split First. Serialized as `:splitFirst` */
    public get splitFirst(): BooleanValue | undefined { return this._g(':splitFirst'); }
    public set splitFirst(v: BooleanValue | undefined) { this._s(':splitFirst', v); }
    /** Metadata Split All. Serialized as `:splitAll` */
    public get splitAll(): BooleanValue | undefined { return this._g(':splitAll'); }
    public set splitAll(v: BooleanValue | undefined) { this._s(':splitAll', v); }
    /** Metadata Insert Delete. Serialized as `:rowColShift` */
    public get rowColumnShift(): BooleanValue | undefined { return this._g(':rowColShift'); }
    public set rowColumnShift(v: BooleanValue | undefined) { this._s(':rowColShift', v); }
    /** Metadata Clear All. Serialized as `:clearAll` */
    public get clearAll(): BooleanValue | undefined { return this._g(':clearAll'); }
    public set clearAll(v: BooleanValue | undefined) { this._s(':clearAll', v); }
    /** Metadata Clear Formats. Serialized as `:clearFormats` */
    public get clearFormats(): BooleanValue | undefined { return this._g(':clearFormats'); }
    public set clearFormats(v: BooleanValue | undefined) { this._s(':clearFormats', v); }
    /** Metadata Clear Contents. Serialized as `:clearContents` */
    public get clearContents(): BooleanValue | undefined { return this._g(':clearContents'); }
    public set clearContents(v: BooleanValue | undefined) { this._s(':clearContents', v); }
    /** Metadata Clear Comments. Serialized as `:clearComments` */
    public get clearComments(): BooleanValue | undefined { return this._g(':clearComments'); }
    public set clearComments(v: BooleanValue | undefined) { this._s(':clearComments', v); }
    /** Metadata Formula Assignment. Serialized as `:assign` */
    public get assign(): BooleanValue | undefined { return this._g(':assign'); }
    public set assign(v: BooleanValue | undefined) { this._s(':assign', v); }
    /** Metadata Coercion. Serialized as `:coerce` */
    public get coerce(): BooleanValue | undefined { return this._g(':coerce'); }
    public set coerce(v: BooleanValue | undefined) { this._s(':coerce', v); }
    /** Adjust Metadata. Serialized as `:adjust` */
    public get adjust(): BooleanValue | undefined { return this._g(':adjust'); }
    public set adjust(v: BooleanValue | undefined) { this._s(':adjust', v); }
    /** Cell Metadata. Serialized as `:cellMeta` */
    public get cellMeta(): BooleanValue | undefined { return this._g(':cellMeta'); }
    public set cellMeta(v: BooleanValue | undefined) { this._s(':cellMeta', v); }

}
/** Defines the MetadataBlocksType Class. */
export abstract class MetadataBlocksType extends OxmlCompositeElement<MetadataBlock> {

    public static override _A = [':count',];
    /** Metadata Block Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Value Metadata. Serialized as `x:valueMetadata` */
export class ValueMetadata extends MetadataBlocksType {

    public static override _Q = 'x:valueMetadata';

}
/** Cell Metadata. Serialized as `x:cellMetadata` */
export class CellMetadata extends MetadataBlocksType {

    public static override _Q = 'x:cellMetadata';

}
/** Future Metadata. Serialized as `x:futureMetadata` */
export class FutureMetadata extends OxmlCompositeElement<FutureMetadataBlock | ExtensionList> {

    public static override _Q = 'x:futureMetadata';
    public static override _A = [':name',':count',];
    /** Metadata Type Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Future Metadata Block Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** MDX Metadata Information. Serialized as `x:mdxMetadata` */
export class MdxMetadata extends OxmlCompositeElement<Mdx> {

    public static override _Q = 'x:mdxMetadata';
    public static override _A = [':count',];
    /** MDX Metadata Record Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Metadata String Store. Serialized as `x:metadataStrings` */
export class MetadataStrings extends OxmlCompositeElement<CharacterValue> {

    public static override _Q = 'x:metadataStrings';
    public static override _A = [':count',];
    /** MDX Metadata String Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Metadata Types Collection. Serialized as `x:metadataTypes` */
export class MetadataTypes extends OxmlCompositeElement<MetadataType> {

    public static override _Q = 'x:metadataTypes';
    public static override _A = [':count',];
    /** Metadata Type Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** OLE Object. Serialized as `x:oleObject` */
export class OleObject extends OxmlCompositeElement<EmbeddedObjectProperties> {

    public static override _Q = 'x:oleObject';
    public static override _A = [':progId',':dvAspect',':link',':oleUpdate',':autoLoad',':shapeId','r:id',];
    /** OLE ProgId. Serialized as `:progId` */
    public get progId(): StringValue | undefined { return this._g(':progId'); }
    public set progId(v: StringValue | undefined) { this._s(':progId', v); }
    /** Data or View Aspect. Serialized as `:dvAspect` */
    public get dataOrViewAspect(): DataViewAspectValues | undefined { return this._g(':dvAspect'); }
    public set dataOrViewAspect(v: DataViewAspectValues | undefined) { this._s(':dvAspect', v); }
    /** OLE Link Moniker. Serialized as `:link` */
    public get link(): StringValue | undefined { return this._g(':link'); }
    public set link(v: StringValue | undefined) { this._s(':link', v); }
    /** OLE Update. Serialized as `:oleUpdate` */
    public get oleUpdate(): OleUpdateValues | undefined { return this._g(':oleUpdate'); }
    public set oleUpdate(v: OleUpdateValues | undefined) { this._s(':oleUpdate', v); }
    /** Auto Load. Serialized as `:autoLoad` */
    public get autoLoad(): BooleanValue | undefined { return this._g(':autoLoad'); }
    public set autoLoad(v: BooleanValue | undefined) { this._s(':autoLoad', v); }
    /** Shape Id. Serialized as `:shapeId` */
    public get shapeId(): UInt32Value | undefined { return this._g(':shapeId'); }
    public set shapeId(v: UInt32Value | undefined) { this._s(':shapeId', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns EmbeddedObjectProperties. */
    public get embeddedObjectProperties(): EmbeddedObjectProperties | undefined { return this._f(EmbeddedObjectProperties); }

}
/** Custom Sheet View. Serialized as `x:customSheetView` */
export class CustomSheetView extends OxmlCompositeElement<Pane | Selection | RowBreaks | ColumnBreaks | PageMargins | PrintOptions | PageSetup | HeaderFooter | AutoFilter | ExtensionList> {

    public static override _Q = 'x:customSheetView';
    public static override _A = [':guid',':scale',':colorId',':showPageBreaks',':showFormulas',':showGridLines',':showRowCol',':outlineSymbols',':zeroValues',':fitToPage',':printArea',':filter',':showAutoFilter',':hiddenRows',':hiddenColumns',':state',':filterUnique',':view',':showRuler',':topLeftCell',];
    /** GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** Print Scale. Serialized as `:scale` */
    public get scale(): UInt32Value | undefined { return this._g(':scale'); }
    public set scale(v: UInt32Value | undefined) { this._s(':scale', v); }
    /** Color Id. Serialized as `:colorId` */
    public get colorId(): UInt32Value | undefined { return this._g(':colorId'); }
    public set colorId(v: UInt32Value | undefined) { this._s(':colorId', v); }
    /** Show Page Breaks. Serialized as `:showPageBreaks` */
    public get showPageBreaks(): BooleanValue | undefined { return this._g(':showPageBreaks'); }
    public set showPageBreaks(v: BooleanValue | undefined) { this._s(':showPageBreaks', v); }
    /** Show Formulas. Serialized as `:showFormulas` */
    public get showFormulas(): BooleanValue | undefined { return this._g(':showFormulas'); }
    public set showFormulas(v: BooleanValue | undefined) { this._s(':showFormulas', v); }
    /** Show Grid Lines. Serialized as `:showGridLines` */
    public get showGridLines(): BooleanValue | undefined { return this._g(':showGridLines'); }
    public set showGridLines(v: BooleanValue | undefined) { this._s(':showGridLines', v); }
    /** Show Headers. Serialized as `:showRowCol` */
    public get showRowColumn(): BooleanValue | undefined { return this._g(':showRowCol'); }
    public set showRowColumn(v: BooleanValue | undefined) { this._s(':showRowCol', v); }
    /** Show Outline Symbols. Serialized as `:outlineSymbols` */
    public get outlineSymbols(): BooleanValue | undefined { return this._g(':outlineSymbols'); }
    public set outlineSymbols(v: BooleanValue | undefined) { this._s(':outlineSymbols', v); }
    /** Show Zero Values. Serialized as `:zeroValues` */
    public get zeroValues(): BooleanValue | undefined { return this._g(':zeroValues'); }
    public set zeroValues(v: BooleanValue | undefined) { this._s(':zeroValues', v); }
    /** Fit To Page. Serialized as `:fitToPage` */
    public get fitToPage(): BooleanValue | undefined { return this._g(':fitToPage'); }
    public set fitToPage(v: BooleanValue | undefined) { this._s(':fitToPage', v); }
    /** Print Area Defined. Serialized as `:printArea` */
    public get printArea(): BooleanValue | undefined { return this._g(':printArea'); }
    public set printArea(v: BooleanValue | undefined) { this._s(':printArea', v); }
    /** Filtered List. Serialized as `:filter` */
    public get filter(): BooleanValue | undefined { return this._g(':filter'); }
    public set filter(v: BooleanValue | undefined) { this._s(':filter', v); }
    /** Show AutoFitler Drop Down Controls. Serialized as `:showAutoFilter` */
    public get showAutoFilter(): BooleanValue | undefined { return this._g(':showAutoFilter'); }
    public set showAutoFilter(v: BooleanValue | undefined) { this._s(':showAutoFilter', v); }
    /** Hidden Rows. Serialized as `:hiddenRows` */
    public get hiddenRows(): BooleanValue | undefined { return this._g(':hiddenRows'); }
    public set hiddenRows(v: BooleanValue | undefined) { this._s(':hiddenRows', v); }
    /** Hidden Columns. Serialized as `:hiddenColumns` */
    public get hiddenColumns(): BooleanValue | undefined { return this._g(':hiddenColumns'); }
    public set hiddenColumns(v: BooleanValue | undefined) { this._s(':hiddenColumns', v); }
    /** Visible State. Serialized as `:state` */
    public get state(): SheetStateValues | undefined { return this._g(':state'); }
    public set state(v: SheetStateValues | undefined) { this._s(':state', v); }
    /** Filter. Serialized as `:filterUnique` */
    public get filterUnique(): BooleanValue | undefined { return this._g(':filterUnique'); }
    public set filterUnique(v: BooleanValue | undefined) { this._s(':filterUnique', v); }
    /** View Type. Serialized as `:view` */
    public get view(): SheetViewValues | undefined { return this._g(':view'); }
    public set view(v: SheetViewValues | undefined) { this._s(':view', v); }
    /** Show Ruler. Serialized as `:showRuler` */
    public get showRuler(): BooleanValue | undefined { return this._g(':showRuler'); }
    public set showRuler(v: BooleanValue | undefined) { this._s(':showRuler', v); }
    /** Top Left Visible Cell. Serialized as `:topLeftCell` */
    public get topLeftCell(): StringValue | undefined { return this._g(':topLeftCell'); }
    public set topLeftCell(v: StringValue | undefined) { this._s(':topLeftCell', v); }
    /** Pane Split Information. */
    public get pane(): Pane | undefined { return this._f(Pane); }
    /** Selection. */
    public get selection(): Selection | undefined { return this._f(Selection); }
    /** Horizontal Page Breaks. */
    public get rowBreaks(): RowBreaks | undefined { return this._f(RowBreaks); }
    /** Vertical Page Breaks. */
    public get columnBreaks(): ColumnBreaks | undefined { return this._f(ColumnBreaks); }
    /** Page Margins. */
    public get pageMargins(): PageMargins | undefined { return this._f(PageMargins); }
    /** Print Options. */
    public get printOptions(): PrintOptions | undefined { return this._f(PrintOptions); }
    /** Page Setup Settings. */
    public get pageSetup(): PageSetup | undefined { return this._f(PageSetup); }
    /** Header Footer Settings. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** AutoFilter Settings. */
    public get autoFilter(): AutoFilter | undefined { return this._f(AutoFilter); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Worksheet View. Serialized as `x:sheetView` */
export class SheetView extends OxmlCompositeElement<Pane | Selection | PivotSelection | ExtensionList> {

    public static override _Q = 'x:sheetView';
    public static override _A = [':windowProtection',':showFormulas',':showGridLines',':showRowColHeaders',':showZeros',':rightToLeft',':tabSelected',':showRuler',':showOutlineSymbols',':defaultGridColor',':showWhiteSpace',':view',':topLeftCell',':colorId',':zoomScale',':zoomScaleNormal',':zoomScaleSheetLayoutView',':zoomScalePageLayoutView',':workbookViewId',];
    /** Window Protection. Serialized as `:windowProtection` */
    public get windowProtection(): BooleanValue | undefined { return this._g(':windowProtection'); }
    public set windowProtection(v: BooleanValue | undefined) { this._s(':windowProtection', v); }
    /** Show Formulas. Serialized as `:showFormulas` */
    public get showFormulas(): BooleanValue | undefined { return this._g(':showFormulas'); }
    public set showFormulas(v: BooleanValue | undefined) { this._s(':showFormulas', v); }
    /** Show Grid Lines. Serialized as `:showGridLines` */
    public get showGridLines(): BooleanValue | undefined { return this._g(':showGridLines'); }
    public set showGridLines(v: BooleanValue | undefined) { this._s(':showGridLines', v); }
    /** Show Headers. Serialized as `:showRowColHeaders` */
    public get showRowColHeaders(): BooleanValue | undefined { return this._g(':showRowColHeaders'); }
    public set showRowColHeaders(v: BooleanValue | undefined) { this._s(':showRowColHeaders', v); }
    /** Show Zero Values. Serialized as `:showZeros` */
    public get showZeros(): BooleanValue | undefined { return this._g(':showZeros'); }
    public set showZeros(v: BooleanValue | undefined) { this._s(':showZeros', v); }
    /** Right To Left. Serialized as `:rightToLeft` */
    public get rightToLeft(): BooleanValue | undefined { return this._g(':rightToLeft'); }
    public set rightToLeft(v: BooleanValue | undefined) { this._s(':rightToLeft', v); }
    /** Sheet Tab Selected. Serialized as `:tabSelected` */
    public get tabSelected(): BooleanValue | undefined { return this._g(':tabSelected'); }
    public set tabSelected(v: BooleanValue | undefined) { this._s(':tabSelected', v); }
    /** Show Ruler. Serialized as `:showRuler` */
    public get showRuler(): BooleanValue | undefined { return this._g(':showRuler'); }
    public set showRuler(v: BooleanValue | undefined) { this._s(':showRuler', v); }
    /** Show Outline Symbols. Serialized as `:showOutlineSymbols` */
    public get showOutlineSymbols(): BooleanValue | undefined { return this._g(':showOutlineSymbols'); }
    public set showOutlineSymbols(v: BooleanValue | undefined) { this._s(':showOutlineSymbols', v); }
    /** Default Grid Color. Serialized as `:defaultGridColor` */
    public get defaultGridColor(): BooleanValue | undefined { return this._g(':defaultGridColor'); }
    public set defaultGridColor(v: BooleanValue | undefined) { this._s(':defaultGridColor', v); }
    /** Show White Space. Serialized as `:showWhiteSpace` */
    public get showWhiteSpace(): BooleanValue | undefined { return this._g(':showWhiteSpace'); }
    public set showWhiteSpace(v: BooleanValue | undefined) { this._s(':showWhiteSpace', v); }
    /** View Type. Serialized as `:view` */
    public get view(): SheetViewValues | undefined { return this._g(':view'); }
    public set view(v: SheetViewValues | undefined) { this._s(':view', v); }
    /** Top Left Visible Cell. Serialized as `:topLeftCell` */
    public get topLeftCell(): StringValue | undefined { return this._g(':topLeftCell'); }
    public set topLeftCell(v: StringValue | undefined) { this._s(':topLeftCell', v); }
    /** Color Id. Serialized as `:colorId` */
    public get colorId(): UInt32Value | undefined { return this._g(':colorId'); }
    public set colorId(v: UInt32Value | undefined) { this._s(':colorId', v); }
    /** Zoom Scale. Serialized as `:zoomScale` */
    public get zoomScale(): UInt32Value | undefined { return this._g(':zoomScale'); }
    public set zoomScale(v: UInt32Value | undefined) { this._s(':zoomScale', v); }
    /** Zoom Scale Normal View. Serialized as `:zoomScaleNormal` */
    public get zoomScaleNormal(): UInt32Value | undefined { return this._g(':zoomScaleNormal'); }
    public set zoomScaleNormal(v: UInt32Value | undefined) { this._s(':zoomScaleNormal', v); }
    /** Zoom Scale Page Break Preview. Serialized as `:zoomScaleSheetLayoutView` */
    public get zoomScaleSheetLayoutView(): UInt32Value | undefined { return this._g(':zoomScaleSheetLayoutView'); }
    public set zoomScaleSheetLayoutView(v: UInt32Value | undefined) { this._s(':zoomScaleSheetLayoutView', v); }
    /** Zoom Scale Page Layout View. Serialized as `:zoomScalePageLayoutView` */
    public get zoomScalePageLayoutView(): UInt32Value | undefined { return this._g(':zoomScalePageLayoutView'); }
    public set zoomScalePageLayoutView(v: UInt32Value | undefined) { this._s(':zoomScalePageLayoutView', v); }
    /** Workbook View Index. Serialized as `:workbookViewId` */
    public get workbookViewId(): UInt32Value | undefined { return this._g(':workbookViewId'); }
    public set workbookViewId(v: UInt32Value | undefined) { this._s(':workbookViewId', v); }
    /** View Pane. */
    public get pane(): Pane | undefined { return this._f(Pane); }

}
/** Data Validation. Serialized as `x:dataValidation` */
export class DataValidation extends OxmlCompositeElement<X12acList | Formula1 | Formula2> {

    public static override _Q = 'x:dataValidation';
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
    /** Returns Formula1. */
    public get formula1(): Formula1 | undefined { return this._f(Formula1); }
    /** Returns Formula2. */
    public get formula2(): Formula2 | undefined { return this._f(Formula2); }

}
/** Merged Cell. Serialized as `x:mergeCell` */
export class MergeCell extends OxmlLeafElement {

    public static override _Q = 'x:mergeCell';
    public static override _A = [':ref',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Ignored Error. Serialized as `x:ignoredError` */
export class IgnoredError extends OxmlLeafElement {

    public static override _Q = 'x:ignoredError';
    public static override _A = [':sqref',':evalError',':twoDigitTextYear',':numberStoredAsText',':formula',':formulaRange',':unlockedFormula',':emptyCellReference',':listDataValidation',':calculatedColumn',];
    /** Sequence of References. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }
    /** Evaluation Error. Serialized as `:evalError` */
    public get evalError(): BooleanValue | undefined { return this._g(':evalError'); }
    public set evalError(v: BooleanValue | undefined) { this._s(':evalError', v); }
    /** Two Digit Text Year. Serialized as `:twoDigitTextYear` */
    public get twoDigitTextYear(): BooleanValue | undefined { return this._g(':twoDigitTextYear'); }
    public set twoDigitTextYear(v: BooleanValue | undefined) { this._s(':twoDigitTextYear', v); }
    /** Number Stored As Text. Serialized as `:numberStoredAsText` */
    public get numberStoredAsText(): BooleanValue | undefined { return this._g(':numberStoredAsText'); }
    public set numberStoredAsText(v: BooleanValue | undefined) { this._s(':numberStoredAsText', v); }
    /** Formula. Serialized as `:formula` */
    public get formula(): BooleanValue | undefined { return this._g(':formula'); }
    public set formula(v: BooleanValue | undefined) { this._s(':formula', v); }
    /** Formula Range. Serialized as `:formulaRange` */
    public get formulaRange(): BooleanValue | undefined { return this._g(':formulaRange'); }
    public set formulaRange(v: BooleanValue | undefined) { this._s(':formulaRange', v); }
    /** Unlocked Formula. Serialized as `:unlockedFormula` */
    public get unlockedFormula(): BooleanValue | undefined { return this._g(':unlockedFormula'); }
    public set unlockedFormula(v: BooleanValue | undefined) { this._s(':unlockedFormula', v); }
    /** Empty Cell Reference. Serialized as `:emptyCellReference` */
    public get emptyCellReference(): BooleanValue | undefined { return this._g(':emptyCellReference'); }
    public set emptyCellReference(v: BooleanValue | undefined) { this._s(':emptyCellReference', v); }
    /** List Data Validation. Serialized as `:listDataValidation` */
    public get listDataValidation(): BooleanValue | undefined { return this._g(':listDataValidation'); }
    public set listDataValidation(v: BooleanValue | undefined) { this._s(':listDataValidation', v); }
    /** Calculated Column. Serialized as `:calculatedColumn` */
    public get calculatedColumn(): BooleanValue | undefined { return this._g(':calculatedColumn'); }
    public set calculatedColumn(v: BooleanValue | undefined) { this._s(':calculatedColumn', v); }

}
/** Embedded Control. Serialized as `x:control` */
export class Control extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'x:control';
    public static override _A = [':shapeId','r:id',':name',];
    /** Shape Id. Serialized as `:shapeId` */
    public get shapeId(): UInt32Value | undefined { return this._g(':shapeId'); }
    public set shapeId(v: UInt32Value | undefined) { this._s(':shapeId', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Control Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Input Cells. Serialized as `x:inputCells` */
export class InputCells extends OxmlLeafElement {

    public static override _Q = 'x:inputCells';
    public static override _A = [':r',':deleted',':undone',':val',':numFmtId',];
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Deleted. Serialized as `:deleted` */
    public get deleted(): BooleanValue | undefined { return this._g(':deleted'); }
    public set deleted(v: BooleanValue | undefined) { this._s(':deleted', v); }
    /** Undone. Serialized as `:undone` */
    public get undone(): BooleanValue | undefined { return this._g(':undone'); }
    public set undone(v: BooleanValue | undefined) { this._s(':undone', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }
    /** Number Format Id. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }

}
/** Custom Chart Sheet View. Serialized as `x:customSheetView` */
export class CustomChartsheetView extends OxmlCompositeElement<PageMargins | ChartSheetPageSetup | HeaderFooter> {

    public static override _Q = 'x:customSheetView';
    public static override _A = [':guid',':scale',':state',':zoomToFit',];
    /** GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** Print Scale. Serialized as `:scale` */
    public get scale(): UInt32Value | undefined { return this._g(':scale'); }
    public set scale(v: UInt32Value | undefined) { this._s(':scale', v); }
    /** Visible State. Serialized as `:state` */
    public get state(): SheetStateValues | undefined { return this._g(':state'); }
    public set state(v: SheetStateValues | undefined) { this._s(':state', v); }
    /** Zoom To Fit. Serialized as `:zoomToFit` */
    public get zoomToFit(): BooleanValue | undefined { return this._g(':zoomToFit'); }
    public set zoomToFit(v: BooleanValue | undefined) { this._s(':zoomToFit', v); }
    /** Returns PageMargins. */
    public get pageMargins(): PageMargins | undefined { return this._f(PageMargins); }
    /** Chart Sheet Page Setup. */
    public get chartSheetPageSetup(): ChartSheetPageSetup | undefined { return this._f(ChartSheetPageSetup); }
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }

}
/** Chart Sheet View. Serialized as `x:sheetView` */
export class ChartSheetView extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:sheetView';
    public static override _A = [':tabSelected',':zoomScale',':workbookViewId',':zoomToFit',];
    /** Sheet Tab Selected. Serialized as `:tabSelected` */
    public get tabSelected(): BooleanValue | undefined { return this._g(':tabSelected'); }
    public set tabSelected(v: BooleanValue | undefined) { this._s(':tabSelected', v); }
    /** Window Zoom Scale. Serialized as `:zoomScale` */
    public get zoomScale(): UInt32Value | undefined { return this._g(':zoomScale'); }
    public set zoomScale(v: UInt32Value | undefined) { this._s(':zoomScale', v); }
    /** Workbook View Id. Serialized as `:workbookViewId` */
    public get workbookViewId(): UInt32Value | undefined { return this._g(':workbookViewId'); }
    public set workbookViewId(v: UInt32Value | undefined) { this._s(':workbookViewId', v); }
    /** Zoom To Fit. Serialized as `:zoomToFit` */
    public get zoomToFit(): BooleanValue | undefined { return this._g(':zoomToFit'); }
    public set zoomToFit(v: BooleanValue | undefined) { this._s(':zoomToFit', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Table Part. Serialized as `x:tablePart` */
export class TablePart extends OxmlLeafElement {

    public static override _Q = 'x:tablePart';
    public static override _A = ['r:id',];
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Web Publishing Item. Serialized as `x:webPublishItem` */
export class WebPublishItem extends OxmlLeafElement {

    public static override _Q = 'x:webPublishItem';
    public static override _A = [':id',':divId',':sourceType',':sourceRef',':sourceObject',':destinationFile',':title',':autoRepublish',];
    /** Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Destination Bookmark. Serialized as `:divId` */
    public get divId(): StringValue | undefined { return this._g(':divId'); }
    public set divId(v: StringValue | undefined) { this._s(':divId', v); }
    /** Web Source Type. Serialized as `:sourceType` */
    public get sourceType(): WebSourceValues | undefined { return this._g(':sourceType'); }
    public set sourceType(v: WebSourceValues | undefined) { this._s(':sourceType', v); }
    /** Source Id. Serialized as `:sourceRef` */
    public get sourceRef(): StringValue | undefined { return this._g(':sourceRef'); }
    public set sourceRef(v: StringValue | undefined) { this._s(':sourceRef', v); }
    /** Source Object Name. Serialized as `:sourceObject` */
    public get sourceObject(): StringValue | undefined { return this._g(':sourceObject'); }
    public set sourceObject(v: StringValue | undefined) { this._s(':sourceObject', v); }
    /** Destination File Name. Serialized as `:destinationFile` */
    public get destinationFile(): StringValue | undefined { return this._g(':destinationFile'); }
    public set destinationFile(v: StringValue | undefined) { this._s(':destinationFile', v); }
    /** Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Automatically Publish. Serialized as `:autoRepublish` */
    public get autoRepublish(): BooleanValue | undefined { return this._g(':autoRepublish'); }
    public set autoRepublish(v: BooleanValue | undefined) { this._s(':autoRepublish', v); }

}
/** Custom Property. Serialized as `x:customPr` */
export class CustomProperty extends OxmlLeafElement {

    public static override _Q = 'x:customPr';
    public static override _A = [':name','r:id',];
    /** Custom Property Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Chart Sheet Page Setup. Serialized as `x:pageSetup` */
export class ChartSheetPageSetup extends OxmlLeafElement {

    public static override _Q = 'x:pageSetup';
    public static override _A = [':paperSize',':firstPageNumber',':orientation',':usePrinterDefaults',':blackAndWhite',':draft',':useFirstPageNumber',':horizontalDpi',':verticalDpi',':copies','r:id',];
    /** Paper Size. Serialized as `:paperSize` */
    public get paperSize(): UInt32Value | undefined { return this._g(':paperSize'); }
    public set paperSize(v: UInt32Value | undefined) { this._s(':paperSize', v); }
    /** First Page Number. Serialized as `:firstPageNumber` */
    public get firstPageNumber(): UInt32Value | undefined { return this._g(':firstPageNumber'); }
    public set firstPageNumber(v: UInt32Value | undefined) { this._s(':firstPageNumber', v); }
    /** Orientation. Serialized as `:orientation` */
    public get orientation(): OrientationValues | undefined { return this._g(':orientation'); }
    public set orientation(v: OrientationValues | undefined) { this._s(':orientation', v); }
    /** Use Printer Defaults. Serialized as `:usePrinterDefaults` */
    public get usePrinterDefaults(): BooleanValue | undefined { return this._g(':usePrinterDefaults'); }
    public set usePrinterDefaults(v: BooleanValue | undefined) { this._s(':usePrinterDefaults', v); }
    /** Black And White. Serialized as `:blackAndWhite` */
    public get blackAndWhite(): BooleanValue | undefined { return this._g(':blackAndWhite'); }
    public set blackAndWhite(v: BooleanValue | undefined) { this._s(':blackAndWhite', v); }
    /** Draft. Serialized as `:draft` */
    public get draft(): BooleanValue | undefined { return this._g(':draft'); }
    public set draft(v: BooleanValue | undefined) { this._s(':draft', v); }
    /** Use First Page Number. Serialized as `:useFirstPageNumber` */
    public get useFirstPageNumber(): BooleanValue | undefined { return this._g(':useFirstPageNumber'); }
    public set useFirstPageNumber(v: BooleanValue | undefined) { this._s(':useFirstPageNumber', v); }
    /** Horizontal DPI. Serialized as `:horizontalDpi` */
    public get horizontalDpi(): UInt32Value | undefined { return this._g(':horizontalDpi'); }
    public set horizontalDpi(v: UInt32Value | undefined) { this._s(':horizontalDpi', v); }
    /** Vertical DPI. Serialized as `:verticalDpi` */
    public get verticalDpi(): UInt32Value | undefined { return this._g(':verticalDpi'); }
    public set verticalDpi(v: UInt32Value | undefined) { this._s(':verticalDpi', v); }
    /** Number Of Copies. Serialized as `:copies` */
    public get copies(): UInt32Value | undefined { return this._g(':copies'); }
    public set copies(v: UInt32Value | undefined) { this._s(':copies', v); }
    /** Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Cell Watch Item. Serialized as `x:cellWatch` */
export class CellWatch extends OxmlLeafElement {

    public static override _Q = 'x:cellWatch';
    public static override _A = [':r',];
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }

}
/** Protected Range. Serialized as `x:protectedRange` */
export class ProtectedRange extends OxmlLeafElement {

    public static override _Q = 'x:protectedRange';
    public static override _A = [':password',':algorithmName',':hashValue',':saltValue',':spinCount',':sqref',':name',':securityDescriptor',];
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
    /** sqref. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** securityDescriptor. Serialized as `:securityDescriptor` */
    public get securityDescriptor(): StringValue | undefined { return this._g(':securityDescriptor'); }
    public set securityDescriptor(v: StringValue | undefined) { this._s(':securityDescriptor', v); }

}
/** Scenario. Serialized as `x:scenario` */
export class Scenario extends OxmlCompositeElement<InputCells> {

    public static override _Q = 'x:scenario';
    public static override _A = [':name',':locked',':hidden',':count',':user',':comment',];
    /** Scenario Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Scenario Locked. Serialized as `:locked` */
    public get locked(): BooleanValue | undefined { return this._g(':locked'); }
    public set locked(v: BooleanValue | undefined) { this._s(':locked', v); }
    /** Hidden Scenario. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Changing Cell Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** User Name. Serialized as `:user` */
    public get user(): StringValue | undefined { return this._g(':user'); }
    public set user(v: StringValue | undefined) { this._s(':user', v); }
    /** Scenario Comment. Serialized as `:comment` */
    public get comment(): StringValue | undefined { return this._g(':comment'); }
    public set comment(v: StringValue | undefined) { this._s(':comment', v); }

}
/** Conditional Format Value Object. Serialized as `x:cfvo` */
export class ConditionalFormatValueObject extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:cfvo';
    public static override _A = [':type',':val',':gte',];
    /** Type. Serialized as `:type` */
    public get type(): ConditionalFormatValueObjectValues | undefined { return this._g(':type'); }
    public set type(v: ConditionalFormatValueObjectValues | undefined) { this._s(':type', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }
    /** Greater Than Or Equal. Serialized as `:gte` */
    public get greaterThanOrEqual(): BooleanValue | undefined { return this._g(':gte'); }
    public set greaterThanOrEqual(v: BooleanValue | undefined) { this._s(':gte', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Hyperlink. Serialized as `x:hyperlink` */
export class Hyperlink extends OxmlLeafElement {

    public static override _Q = 'x:hyperlink';
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
/** Conditional Formatting Rule. Serialized as `x:cfRule` */
export class ConditionalFormattingRule extends OxmlCompositeElement<Formula | ColorScale | DataBar | IconSet | ConditionalFormattingRuleExtensionList> {

    public static override _Q = 'x:cfRule';
    public static override _A = [':type',':dxfId',':priority',':stopIfTrue',':aboveAverage',':percent',':bottom',':operator',':text',':timePeriod',':rank',':stdDev',':equalAverage',];
    /** Type. Serialized as `:type` */
    public get type(): ConditionalFormatValues | undefined { return this._g(':type'); }
    public set type(v: ConditionalFormatValues | undefined) { this._s(':type', v); }
    /** Differential Formatting Id. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** Priority. Serialized as `:priority` */
    public get priority(): Int32Value | undefined { return this._g(':priority'); }
    public set priority(v: Int32Value | undefined) { this._s(':priority', v); }
    /** Stop If True. Serialized as `:stopIfTrue` */
    public get stopIfTrue(): BooleanValue | undefined { return this._g(':stopIfTrue'); }
    public set stopIfTrue(v: BooleanValue | undefined) { this._s(':stopIfTrue', v); }
    /** Above Or Below Average. Serialized as `:aboveAverage` */
    public get aboveAverage(): BooleanValue | undefined { return this._g(':aboveAverage'); }
    public set aboveAverage(v: BooleanValue | undefined) { this._s(':aboveAverage', v); }
    /** Top 10 Percent. Serialized as `:percent` */
    public get percent(): BooleanValue | undefined { return this._g(':percent'); }
    public set percent(v: BooleanValue | undefined) { this._s(':percent', v); }
    /** Bottom N. Serialized as `:bottom` */
    public get bottom(): BooleanValue | undefined { return this._g(':bottom'); }
    public set bottom(v: BooleanValue | undefined) { this._s(':bottom', v); }
    /** Operator. Serialized as `:operator` */
    public get operator(): ConditionalFormattingOperatorValues | undefined { return this._g(':operator'); }
    public set operator(v: ConditionalFormattingOperatorValues | undefined) { this._s(':operator', v); }
    /** Text. Serialized as `:text` */
    public get text(): StringValue | undefined { return this._g(':text'); }
    public set text(v: StringValue | undefined) { this._s(':text', v); }
    /** Time Period. Serialized as `:timePeriod` */
    public get timePeriod(): TimePeriodValues | undefined { return this._g(':timePeriod'); }
    public set timePeriod(v: TimePeriodValues | undefined) { this._s(':timePeriod', v); }
    /** Rank. Serialized as `:rank` */
    public get rank(): UInt32Value | undefined { return this._g(':rank'); }
    public set rank(v: UInt32Value | undefined) { this._s(':rank', v); }
    /** StdDev. Serialized as `:stdDev` */
    public get stdDev(): Int32Value | undefined { return this._g(':stdDev'); }
    public set stdDev(v: Int32Value | undefined) { this._s(':stdDev', v); }
    /** Equal Average. Serialized as `:equalAverage` */
    public get equalAverage(): BooleanValue | undefined { return this._g(':equalAverage'); }
    public set equalAverage(v: BooleanValue | undefined) { this._s(':equalAverage', v); }

}
/** AutoFilter Settings. Serialized as `x:autoFilter` */
export class AutoFilter extends OxmlCompositeElement<FilterColumn | SortState | ExtensionList> {

    public static override _Q = 'x:autoFilter';
    public static override _A = [':ref',];
    /** Cell or Range Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Header Footer Settings. Serialized as `x:headerFooter` */
export class HeaderFooter extends OxmlCompositeElement<OddHeader | OddFooter | EvenHeader | EvenFooter | FirstHeader | FirstFooter> {

    public static override _Q = 'x:headerFooter';
    public static override _A = [':differentOddEven',':differentFirst',':scaleWithDoc',':alignWithMargins',];
    /** Different Odd Even Header Footer. Serialized as `:differentOddEven` */
    public get differentOddEven(): BooleanValue | undefined { return this._g(':differentOddEven'); }
    public set differentOddEven(v: BooleanValue | undefined) { this._s(':differentOddEven', v); }
    /** Different First Page. Serialized as `:differentFirst` */
    public get differentFirst(): BooleanValue | undefined { return this._g(':differentFirst'); }
    public set differentFirst(v: BooleanValue | undefined) { this._s(':differentFirst', v); }
    /** Scale Header and Footer With Document. Serialized as `:scaleWithDoc` */
    public get scaleWithDoc(): BooleanValue | undefined { return this._g(':scaleWithDoc'); }
    public set scaleWithDoc(v: BooleanValue | undefined) { this._s(':scaleWithDoc', v); }
    /** Align Margins. Serialized as `:alignWithMargins` */
    public get alignWithMargins(): BooleanValue | undefined { return this._g(':alignWithMargins'); }
    public set alignWithMargins(v: BooleanValue | undefined) { this._s(':alignWithMargins', v); }
    /** Odd Header. */
    public get oddHeader(): OddHeader | undefined { return this._f(OddHeader); }
    /** Odd Page Footer. */
    public get oddFooter(): OddFooter | undefined { return this._f(OddFooter); }
    /** Even Page Header. */
    public get evenHeader(): EvenHeader | undefined { return this._f(EvenHeader); }
    /** Even Page Footer. */
    public get evenFooter(): EvenFooter | undefined { return this._f(EvenFooter); }
    /** First Page Header. */
    public get firstHeader(): FirstHeader | undefined { return this._f(FirstHeader); }
    /** First Page Footer. */
    public get firstFooter(): FirstFooter | undefined { return this._f(FirstFooter); }

}
/** Page Setup Settings. Serialized as `x:pageSetup` */
export class PageSetup extends OxmlLeafElement {

    public static override _Q = 'x:pageSetup';
    public static override _A = [':paperSize',':scale',':firstPageNumber',':fitToWidth',':fitToHeight',':pageOrder',':orientation',':usePrinterDefaults',':blackAndWhite',':draft',':cellComments',':useFirstPageNumber',':errors',':horizontalDpi',':verticalDpi',':copies','r:id',];
    /** Paper Size. Serialized as `:paperSize` */
    public get paperSize(): UInt32Value | undefined { return this._g(':paperSize'); }
    public set paperSize(v: UInt32Value | undefined) { this._s(':paperSize', v); }
    /** Print Scale. Serialized as `:scale` */
    public get scale(): UInt32Value | undefined { return this._g(':scale'); }
    public set scale(v: UInt32Value | undefined) { this._s(':scale', v); }
    /** First Page Number. Serialized as `:firstPageNumber` */
    public get firstPageNumber(): UInt32Value | undefined { return this._g(':firstPageNumber'); }
    public set firstPageNumber(v: UInt32Value | undefined) { this._s(':firstPageNumber', v); }
    /** Fit To Width. Serialized as `:fitToWidth` */
    public get fitToWidth(): UInt32Value | undefined { return this._g(':fitToWidth'); }
    public set fitToWidth(v: UInt32Value | undefined) { this._s(':fitToWidth', v); }
    /** Fit To Height. Serialized as `:fitToHeight` */
    public get fitToHeight(): UInt32Value | undefined { return this._g(':fitToHeight'); }
    public set fitToHeight(v: UInt32Value | undefined) { this._s(':fitToHeight', v); }
    /** Page Order. Serialized as `:pageOrder` */
    public get pageOrder(): PageOrderValues | undefined { return this._g(':pageOrder'); }
    public set pageOrder(v: PageOrderValues | undefined) { this._s(':pageOrder', v); }
    /** Orientation. Serialized as `:orientation` */
    public get orientation(): OrientationValues | undefined { return this._g(':orientation'); }
    public set orientation(v: OrientationValues | undefined) { this._s(':orientation', v); }
    /** Use Printer Defaults. Serialized as `:usePrinterDefaults` */
    public get usePrinterDefaults(): BooleanValue | undefined { return this._g(':usePrinterDefaults'); }
    public set usePrinterDefaults(v: BooleanValue | undefined) { this._s(':usePrinterDefaults', v); }
    /** Black And White. Serialized as `:blackAndWhite` */
    public get blackAndWhite(): BooleanValue | undefined { return this._g(':blackAndWhite'); }
    public set blackAndWhite(v: BooleanValue | undefined) { this._s(':blackAndWhite', v); }
    /** Draft. Serialized as `:draft` */
    public get draft(): BooleanValue | undefined { return this._g(':draft'); }
    public set draft(v: BooleanValue | undefined) { this._s(':draft', v); }
    /** Print Cell Comments. Serialized as `:cellComments` */
    public get cellComments(): CellCommentsValues | undefined { return this._g(':cellComments'); }
    public set cellComments(v: CellCommentsValues | undefined) { this._s(':cellComments', v); }
    /** Use First Page Number. Serialized as `:useFirstPageNumber` */
    public get useFirstPageNumber(): BooleanValue | undefined { return this._g(':useFirstPageNumber'); }
    public set useFirstPageNumber(v: BooleanValue | undefined) { this._s(':useFirstPageNumber', v); }
    /** Print Error Handling. Serialized as `:errors` */
    public get errors(): PrintErrorValues | undefined { return this._g(':errors'); }
    public set errors(v: PrintErrorValues | undefined) { this._s(':errors', v); }
    /** Horizontal DPI. Serialized as `:horizontalDpi` */
    public get horizontalDpi(): UInt32Value | undefined { return this._g(':horizontalDpi'); }
    public set horizontalDpi(v: UInt32Value | undefined) { this._s(':horizontalDpi', v); }
    /** Vertical DPI. Serialized as `:verticalDpi` */
    public get verticalDpi(): UInt32Value | undefined { return this._g(':verticalDpi'); }
    public set verticalDpi(v: UInt32Value | undefined) { this._s(':verticalDpi', v); }
    /** Number Of Copies. Serialized as `:copies` */
    public get copies(): UInt32Value | undefined { return this._g(':copies'); }
    public set copies(v: UInt32Value | undefined) { this._s(':copies', v); }
    /** Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Print Options. Serialized as `x:printOptions` */
export class PrintOptions extends OxmlLeafElement {

    public static override _Q = 'x:printOptions';
    public static override _A = [':horizontalCentered',':verticalCentered',':headings',':gridLines',':gridLinesSet',];
    /** Horizontal Centered. Serialized as `:horizontalCentered` */
    public get horizontalCentered(): BooleanValue | undefined { return this._g(':horizontalCentered'); }
    public set horizontalCentered(v: BooleanValue | undefined) { this._s(':horizontalCentered', v); }
    /** Vertical Centered. Serialized as `:verticalCentered` */
    public get verticalCentered(): BooleanValue | undefined { return this._g(':verticalCentered'); }
    public set verticalCentered(v: BooleanValue | undefined) { this._s(':verticalCentered', v); }
    /** Print Headings. Serialized as `:headings` */
    public get headings(): BooleanValue | undefined { return this._g(':headings'); }
    public set headings(v: BooleanValue | undefined) { this._s(':headings', v); }
    /** Print Grid Lines. Serialized as `:gridLines` */
    public get gridLines(): BooleanValue | undefined { return this._g(':gridLines'); }
    public set gridLines(v: BooleanValue | undefined) { this._s(':gridLines', v); }
    /** Grid Lines Set. Serialized as `:gridLinesSet` */
    public get gridLinesSet(): BooleanValue | undefined { return this._g(':gridLinesSet'); }
    public set gridLinesSet(v: BooleanValue | undefined) { this._s(':gridLinesSet', v); }

}
/** Page Margins. Serialized as `x:pageMargins` */
export class PageMargins extends OxmlLeafElement {

    public static override _Q = 'x:pageMargins';
    public static override _A = [':left',':right',':top',':bottom',':header',':footer',];
    /** Left Page Margin. Serialized as `:left` */
    public get left(): DoubleValue | undefined { return this._g(':left'); }
    public set left(v: DoubleValue | undefined) { this._s(':left', v); }
    /** Right Page Margin. Serialized as `:right` */
    public get right(): DoubleValue | undefined { return this._g(':right'); }
    public set right(v: DoubleValue | undefined) { this._s(':right', v); }
    /** Top Page Margin. Serialized as `:top` */
    public get top(): DoubleValue | undefined { return this._g(':top'); }
    public set top(v: DoubleValue | undefined) { this._s(':top', v); }
    /** Bottom Page Margin. Serialized as `:bottom` */
    public get bottom(): DoubleValue | undefined { return this._g(':bottom'); }
    public set bottom(v: DoubleValue | undefined) { this._s(':bottom', v); }
    /** Header Page Margin. Serialized as `:header` */
    public get header(): DoubleValue | undefined { return this._g(':header'); }
    public set header(v: DoubleValue | undefined) { this._s(':header', v); }
    /** Footer Page Margin. Serialized as `:footer` */
    public get footer(): DoubleValue | undefined { return this._g(':footer'); }
    public set footer(v: DoubleValue | undefined) { this._s(':footer', v); }

}
/** Defines the PageBreakType Class. */
export abstract class PageBreakType extends OxmlCompositeElement<Break> {

    public static override _A = [':count',':manualBreakCount',];
    /** Page Break Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Manual Break Count. Serialized as `:manualBreakCount` */
    public get manualBreakCount(): UInt32Value | undefined { return this._g(':manualBreakCount'); }
    public set manualBreakCount(v: UInt32Value | undefined) { this._s(':manualBreakCount', v); }

}
/** Vertical Page Breaks. Serialized as `x:colBreaks` */
export class ColumnBreaks extends PageBreakType {

    public static override _Q = 'x:colBreaks';

}
/** Horizontal Page Breaks. Serialized as `x:rowBreaks` */
export class RowBreaks extends PageBreakType {

    public static override _Q = 'x:rowBreaks';

}
/** Data Consolidation Reference. Serialized as `x:dataRef` */
export class DataReference extends OxmlLeafElement {

    public static override _Q = 'x:dataRef';
    public static override _A = [':ref',':name',':sheet','r:id',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Named Range. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Sheet Name. Serialized as `:sheet` */
    public get sheet(): StringValue | undefined { return this._g(':sheet'); }
    public set sheet(v: StringValue | undefined) { this._s(':sheet', v); }
    /** relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Break. Serialized as `x:brk` */
export class Break extends OxmlLeafElement {

    public static override _Q = 'x:brk';
    public static override _A = [':id',':min',':max',':man',':pt',];
    /** Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Minimum. Serialized as `:min` */
    public get min(): UInt32Value | undefined { return this._g(':min'); }
    public set min(v: UInt32Value | undefined) { this._s(':min', v); }
    /** Maximum. Serialized as `:max` */
    public get max(): UInt32Value | undefined { return this._g(':max'); }
    public set max(v: UInt32Value | undefined) { this._s(':max', v); }
    /** Manual Page Break. Serialized as `:man` */
    public get manualPageBreak(): BooleanValue | undefined { return this._g(':man'); }
    public set manualPageBreak(v: BooleanValue | undefined) { this._s(':man', v); }
    /** Pivot-Created Page Break. Serialized as `:pt` */
    public get pivotTablePageBreak(): BooleanValue | undefined { return this._g(':pt'); }
    public set pivotTablePageBreak(v: BooleanValue | undefined) { this._s(':pt', v); }

}
/** PivotTable Selection. Serialized as `x:pivotSelection` */
export class PivotSelection extends OxmlCompositeElement<PivotArea> {

    public static override _Q = 'x:pivotSelection';
    public static override _A = [':pane',':showHeader',':label',':data',':extendable',':count',':axis',':dimension',':start',':min',':max',':activeRow',':activeCol',':previousRow',':previousCol',':click','r:id',];
    /** Pane. Serialized as `:pane` */
    public get pane(): PaneValues | undefined { return this._g(':pane'); }
    public set pane(v: PaneValues | undefined) { this._s(':pane', v); }
    /** Show Header. Serialized as `:showHeader` */
    public get showHeader(): BooleanValue | undefined { return this._g(':showHeader'); }
    public set showHeader(v: BooleanValue | undefined) { this._s(':showHeader', v); }
    /** Label. Serialized as `:label` */
    public get label(): BooleanValue | undefined { return this._g(':label'); }
    public set label(v: BooleanValue | undefined) { this._s(':label', v); }
    /** Data Selection. Serialized as `:data` */
    public get data(): BooleanValue | undefined { return this._g(':data'); }
    public set data(v: BooleanValue | undefined) { this._s(':data', v); }
    /** Extendable. Serialized as `:extendable` */
    public get extendable(): BooleanValue | undefined { return this._g(':extendable'); }
    public set extendable(v: BooleanValue | undefined) { this._s(':extendable', v); }
    /** Selection Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Axis. Serialized as `:axis` */
    public get axis(): PivotTableAxisValues | undefined { return this._g(':axis'); }
    public set axis(v: PivotTableAxisValues | undefined) { this._s(':axis', v); }
    /** Dimension. Serialized as `:dimension` */
    public get dimension(): UInt32Value | undefined { return this._g(':dimension'); }
    public set dimension(v: UInt32Value | undefined) { this._s(':dimension', v); }
    /** Start. Serialized as `:start` */
    public get start(): UInt32Value | undefined { return this._g(':start'); }
    public set start(v: UInt32Value | undefined) { this._s(':start', v); }
    /** Minimum. Serialized as `:min` */
    public get min(): UInt32Value | undefined { return this._g(':min'); }
    public set min(v: UInt32Value | undefined) { this._s(':min', v); }
    /** Maximum. Serialized as `:max` */
    public get max(): UInt32Value | undefined { return this._g(':max'); }
    public set max(v: UInt32Value | undefined) { this._s(':max', v); }
    /** Active Row. Serialized as `:activeRow` */
    public get activeRow(): UInt32Value | undefined { return this._g(':activeRow'); }
    public set activeRow(v: UInt32Value | undefined) { this._s(':activeRow', v); }
    /** Active Column. Serialized as `:activeCol` */
    public get activeColumn(): UInt32Value | undefined { return this._g(':activeCol'); }
    public set activeColumn(v: UInt32Value | undefined) { this._s(':activeCol', v); }
    /** Previous Row. Serialized as `:previousRow` */
    public get previousRow(): UInt32Value | undefined { return this._g(':previousRow'); }
    public set previousRow(v: UInt32Value | undefined) { this._s(':previousRow', v); }
    /** Previous Column Selection. Serialized as `:previousCol` */
    public get previousColumn(): UInt32Value | undefined { return this._g(':previousCol'); }
    public set previousColumn(v: UInt32Value | undefined) { this._s(':previousCol', v); }
    /** Click Count. Serialized as `:click` */
    public get click(): UInt32Value | undefined { return this._g(':click'); }
    public set click(v: UInt32Value | undefined) { this._s(':click', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Pivot Area. */
    public get pivotArea(): PivotArea | undefined { return this._f(PivotArea); }

}
/** Selection. Serialized as `x:selection` */
export class Selection extends OxmlLeafElement {

    public static override _Q = 'x:selection';
    public static override _A = [':pane',':activeCell',':activeCellId',':sqref',];
    /** Pane. Serialized as `:pane` */
    public get pane(): PaneValues | undefined { return this._g(':pane'); }
    public set pane(v: PaneValues | undefined) { this._s(':pane', v); }
    /** Active Cell Location. Serialized as `:activeCell` */
    public get activeCell(): StringValue | undefined { return this._g(':activeCell'); }
    public set activeCell(v: StringValue | undefined) { this._s(':activeCell', v); }
    /** Active Cell Index. Serialized as `:activeCellId` */
    public get activeCellId(): UInt32Value | undefined { return this._g(':activeCellId'); }
    public set activeCellId(v: UInt32Value | undefined) { this._s(':activeCellId', v); }
    /** Sequence of References. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }

}
/** View Pane. Serialized as `x:pane` */
export class Pane extends OxmlLeafElement {

    public static override _Q = 'x:pane';
    public static override _A = [':xSplit',':ySplit',':topLeftCell',':activePane',':state',];
    /** Horizontal Split Position. Serialized as `:xSplit` */
    public get horizontalSplit(): DoubleValue | undefined { return this._g(':xSplit'); }
    public set horizontalSplit(v: DoubleValue | undefined) { this._s(':xSplit', v); }
    /** Vertical Split Position. Serialized as `:ySplit` */
    public get verticalSplit(): DoubleValue | undefined { return this._g(':ySplit'); }
    public set verticalSplit(v: DoubleValue | undefined) { this._s(':ySplit', v); }
    /** Top Left Visible Cell. Serialized as `:topLeftCell` */
    public get topLeftCell(): StringValue | undefined { return this._g(':topLeftCell'); }
    public set topLeftCell(v: StringValue | undefined) { this._s(':topLeftCell', v); }
    /** Active Pane. Serialized as `:activePane` */
    public get activePane(): PaneValues | undefined { return this._g(':activePane'); }
    public set activePane(v: PaneValues | undefined) { this._s(':activePane', v); }
    /** Split State. Serialized as `:state` */
    public get state(): PaneStateValues | undefined { return this._g(':state'); }
    public set state(v: PaneStateValues | undefined) { this._s(':state', v); }

}
/** Page Setup Properties. Serialized as `x:pageSetUpPr` */
export class PageSetupProperties extends OxmlLeafElement {

    public static override _Q = 'x:pageSetUpPr';
    public static override _A = [':autoPageBreaks',':fitToPage',];
    /** Show Auto Page Breaks. Serialized as `:autoPageBreaks` */
    public get autoPageBreaks(): BooleanValue | undefined { return this._g(':autoPageBreaks'); }
    public set autoPageBreaks(v: BooleanValue | undefined) { this._s(':autoPageBreaks', v); }
    /** Fit To Page. Serialized as `:fitToPage` */
    public get fitToPage(): BooleanValue | undefined { return this._g(':fitToPage'); }
    public set fitToPage(v: BooleanValue | undefined) { this._s(':fitToPage', v); }

}
/** Outline Properties. Serialized as `x:outlinePr` */
export class OutlineProperties extends OxmlLeafElement {

    public static override _Q = 'x:outlinePr';
    public static override _A = [':applyStyles',':summaryBelow',':summaryRight',':showOutlineSymbols',];
    /** Apply Styles in Outline. Serialized as `:applyStyles` */
    public get applyStyles(): BooleanValue | undefined { return this._g(':applyStyles'); }
    public set applyStyles(v: BooleanValue | undefined) { this._s(':applyStyles', v); }
    /** Summary Below. Serialized as `:summaryBelow` */
    public get summaryBelow(): BooleanValue | undefined { return this._g(':summaryBelow'); }
    public set summaryBelow(v: BooleanValue | undefined) { this._s(':summaryBelow', v); }
    /** Summary Right. Serialized as `:summaryRight` */
    public get summaryRight(): BooleanValue | undefined { return this._g(':summaryRight'); }
    public set summaryRight(v: BooleanValue | undefined) { this._s(':summaryRight', v); }
    /** Show Outline Symbols. Serialized as `:showOutlineSymbols` */
    public get showOutlineSymbols(): BooleanValue | undefined { return this._g(':showOutlineSymbols'); }
    public set showOutlineSymbols(v: BooleanValue | undefined) { this._s(':showOutlineSymbols', v); }

}
/** Column Width and Formatting. Serialized as `x:col` */
export class Column extends OxmlLeafElement {

    public static override _Q = 'x:col';
    public static override _A = [':min',':max',':width',':style',':hidden',':bestFit',':customWidth',':phonetic',':outlineLevel',':collapsed',];
    /** Minimum Column. Serialized as `:min` */
    public get min(): UInt32Value | undefined { return this._g(':min'); }
    public set min(v: UInt32Value | undefined) { this._s(':min', v); }
    /** Maximum Column. Serialized as `:max` */
    public get max(): UInt32Value | undefined { return this._g(':max'); }
    public set max(v: UInt32Value | undefined) { this._s(':max', v); }
    /** Column Width. Serialized as `:width` */
    public get width(): DoubleValue | undefined { return this._g(':width'); }
    public set width(v: DoubleValue | undefined) { this._s(':width', v); }
    /** Style. Serialized as `:style` */
    public get style(): UInt32Value | undefined { return this._g(':style'); }
    public set style(v: UInt32Value | undefined) { this._s(':style', v); }
    /** Hidden Columns. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Best Fit Column Width. Serialized as `:bestFit` */
    public get bestFit(): BooleanValue | undefined { return this._g(':bestFit'); }
    public set bestFit(v: BooleanValue | undefined) { this._s(':bestFit', v); }
    /** Custom Width. Serialized as `:customWidth` */
    public get customWidth(): BooleanValue | undefined { return this._g(':customWidth'); }
    public set customWidth(v: BooleanValue | undefined) { this._s(':customWidth', v); }
    /** Show Phonetic Information. Serialized as `:phonetic` */
    public get phonetic(): BooleanValue | undefined { return this._g(':phonetic'); }
    public set phonetic(v: BooleanValue | undefined) { this._s(':phonetic', v); }
    /** Outline Level. Serialized as `:outlineLevel` */
    public get outlineLevel(): ByteValue | undefined { return this._g(':outlineLevel'); }
    public set outlineLevel(v: ByteValue | undefined) { this._s(':outlineLevel', v); }
    /** Collapsed. Serialized as `:collapsed` */
    public get collapsed(): BooleanValue | undefined { return this._g(':collapsed'); }
    public set collapsed(v: BooleanValue | undefined) { this._s(':collapsed', v); }

}
/** Row. Serialized as `x:row` */
export class Row extends OxmlCompositeElement<Cell | ExtensionList> {

    public static override _Q = 'x:row';
    public static override _A = [':r',':spans',':s',':customFormat',':ht',':hidden',':customHeight',':outlineLevel',':collapsed',':thickTop',':thickBot',':ph','x14ac:dyDescent',];
    /** Row Index. Serialized as `:r` */
    public get rowIndex(): UInt32Value | undefined { return this._g(':r'); }
    public set rowIndex(v: UInt32Value | undefined) { this._s(':r', v); }
    /** Spans. Serialized as `:spans` */
    public get spans(): ListValue<StringValue> | undefined { return this._g(':spans'); }
    public set spans(v: ListValue<StringValue> | undefined) { this._s(':spans', v); }
    /** Style Index. Serialized as `:s` */
    public get styleIndex(): UInt32Value | undefined { return this._g(':s'); }
    public set styleIndex(v: UInt32Value | undefined) { this._s(':s', v); }
    /** Custom Format. Serialized as `:customFormat` */
    public get customFormat(): BooleanValue | undefined { return this._g(':customFormat'); }
    public set customFormat(v: BooleanValue | undefined) { this._s(':customFormat', v); }
    /** Row Height. Serialized as `:ht` */
    public get height(): DoubleValue | undefined { return this._g(':ht'); }
    public set height(v: DoubleValue | undefined) { this._s(':ht', v); }
    /** Hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Custom Height. Serialized as `:customHeight` */
    public get customHeight(): BooleanValue | undefined { return this._g(':customHeight'); }
    public set customHeight(v: BooleanValue | undefined) { this._s(':customHeight', v); }
    /** Outline Level. Serialized as `:outlineLevel` */
    public get outlineLevel(): ByteValue | undefined { return this._g(':outlineLevel'); }
    public set outlineLevel(v: ByteValue | undefined) { this._s(':outlineLevel', v); }
    /** Collapsed. Serialized as `:collapsed` */
    public get collapsed(): BooleanValue | undefined { return this._g(':collapsed'); }
    public set collapsed(v: BooleanValue | undefined) { this._s(':collapsed', v); }
    /** Thick Top Border. Serialized as `:thickTop` */
    public get thickTop(): BooleanValue | undefined { return this._g(':thickTop'); }
    public set thickTop(v: BooleanValue | undefined) { this._s(':thickTop', v); }
    /** Thick Bottom. Serialized as `:thickBot` */
    public get thickBot(): BooleanValue | undefined { return this._g(':thickBot'); }
    public set thickBot(v: BooleanValue | undefined) { this._s(':thickBot', v); }
    /** Show Phonetic. Serialized as `:ph` */
    public get showPhonetic(): BooleanValue | undefined { return this._g(':ph'); }
    public set showPhonetic(v: BooleanValue | undefined) { this._s(':ph', v); }
    /** dyDescent. Serialized as `x14ac:dyDescent` */
    public get dyDescent(): DoubleValue | undefined { return this._g('x14ac:dyDescent'); }
    public set dyDescent(v: DoubleValue | undefined) { this._s('x14ac:dyDescent', v); }

}
/** User Information. Serialized as `x:userInfo` */
export class UserInfo extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:userInfo';
    public static override _A = [':guid',':name',':id',':dateTime',];
    /** User Revisions GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** User Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** User Id. Serialized as `:id` */
    public get id(): Int32Value | undefined { return this._g(':id'); }
    public set id(v: Int32Value | undefined) { this._s(':id', v); }
    /** Date Time. Serialized as `:dateTime` */
    public get dateTime(): DateTimeValue | undefined { return this._g(':dateTime'); }
    public set dateTime(v: DateTimeValue | undefined) { this._s(':dateTime', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Formula. Serialized as `x:f` */
export class CellFormula extends OxmlLeafTextElement {

    public static override _Q = 'x:f';
    public static override _A = [':t',':aca',':ref',':dt2D',':dtr',':del1',':del2',':r1',':r2',':ca',':si',':bx','xml:space',];
    /** Formula Type. Serialized as `:t` */
    public get formulaType(): CellFormulaValues | undefined { return this._g(':t'); }
    public set formulaType(v: CellFormulaValues | undefined) { this._s(':t', v); }
    /** Always Calculate Array. Serialized as `:aca` */
    public get alwaysCalculateArray(): BooleanValue | undefined { return this._g(':aca'); }
    public set alwaysCalculateArray(v: BooleanValue | undefined) { this._s(':aca', v); }
    /** Range of Cells. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Data Table 2-D. Serialized as `:dt2D` */
    public get dataTable2D(): BooleanValue | undefined { return this._g(':dt2D'); }
    public set dataTable2D(v: BooleanValue | undefined) { this._s(':dt2D', v); }
    /** Data Table Row. Serialized as `:dtr` */
    public get dataTableRow(): BooleanValue | undefined { return this._g(':dtr'); }
    public set dataTableRow(v: BooleanValue | undefined) { this._s(':dtr', v); }
    /** Input 1 Deleted. Serialized as `:del1` */
    public get input1Deleted(): BooleanValue | undefined { return this._g(':del1'); }
    public set input1Deleted(v: BooleanValue | undefined) { this._s(':del1', v); }
    /** Input 2 Deleted. Serialized as `:del2` */
    public get input2Deleted(): BooleanValue | undefined { return this._g(':del2'); }
    public set input2Deleted(v: BooleanValue | undefined) { this._s(':del2', v); }
    /** Data Table Cell 1. Serialized as `:r1` */
    public get r1(): StringValue | undefined { return this._g(':r1'); }
    public set r1(v: StringValue | undefined) { this._s(':r1', v); }
    /** Input Cell 2. Serialized as `:r2` */
    public get r2(): StringValue | undefined { return this._g(':r2'); }
    public set r2(v: StringValue | undefined) { this._s(':r2', v); }
    /** Calculate Cell. Serialized as `:ca` */
    public get calculateCell(): BooleanValue | undefined { return this._g(':ca'); }
    public set calculateCell(v: BooleanValue | undefined) { this._s(':ca', v); }
    /** Shared Group Index. Serialized as `:si` */
    public get sharedIndex(): UInt32Value | undefined { return this._g(':si'); }
    public set sharedIndex(v: UInt32Value | undefined) { this._s(':si', v); }
    /** Assigns Value to Name. Serialized as `:bx` */
    public get bx(): BooleanValue | undefined { return this._g(':bx'); }
    public set bx(v: BooleanValue | undefined) { this._s(':bx', v); }
    /** Content Contains Significant Whitespace. Serialized as `xml:space` */
    public get space(): SpaceProcessingModeValues | undefined { return this._g('xml:space'); }
    public set space(v: SpaceProcessingModeValues | undefined) { this._s('xml:space', v); }

}
/** Sheet Id. Serialized as `x:sheetId` */
export class SheetId extends OxmlLeafElement {

    public static override _Q = 'x:sheetId';
    public static override _A = [':val',];
    /** Sheet Id. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the DifferentialFormatType Class. */
export abstract class DifferentialFormatType extends OxmlCompositeElement<Font | NumberingFormat | Fill | Alignment | Border | Protection | ExtensionList> {

    /** Font Properties. */
    public get font(): Font | undefined { return this._f(Font); }
    /** Number Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Fill. */
    public get fill(): Fill | undefined { return this._f(Fill); }
    /** Alignment. */
    public get alignment(): Alignment | undefined { return this._f(Alignment); }
    /** Border Properties. */
    public get border(): Border | undefined { return this._f(Border); }
    /** Protection Properties. */
    public get protection(): Protection | undefined { return this._f(Protection); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Formatting. Serialized as `x:dxf` */
export class DifferentialFormat extends DifferentialFormatType {

    public static override _Q = 'x:dxf';

}
/** New Formatting Information. Serialized as `x:ndxf` */
export class NewDifferentialFormat extends DifferentialFormatType {

    public static override _Q = 'x:ndxf';

}
/** Old Formatting Information. Serialized as `x:odxf` */
export class OldDifferentialFormat extends DifferentialFormatType {

    public static override _Q = 'x:odxf';

}
/** New Cell Data. Serialized as `x:nc` */
export class NewCell extends OxmlCompositeElement<CellFormula | CellValue | InlineString | ExtensionList> {

    public static override _Q = 'x:nc';
    public static override _A = [':r',':s',':t',':cm',':vm',':ph',];
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Style Index. Serialized as `:s` */
    public get styleIndex(): UInt32Value | undefined { return this._g(':s'); }
    public set styleIndex(v: UInt32Value | undefined) { this._s(':s', v); }
    /** Cell Data Type. Serialized as `:t` */
    public get dataType(): CellValues | undefined { return this._g(':t'); }
    public set dataType(v: CellValues | undefined) { this._s(':t', v); }
    /** Cell Metadata Index. Serialized as `:cm` */
    public get cellMetaIndex(): UInt32Value | undefined { return this._g(':cm'); }
    public set cellMetaIndex(v: UInt32Value | undefined) { this._s(':cm', v); }
    /** Value Metadata Index. Serialized as `:vm` */
    public get valueMetaIndex(): UInt32Value | undefined { return this._g(':vm'); }
    public set valueMetaIndex(v: UInt32Value | undefined) { this._s(':vm', v); }
    /** Show Phonetic. Serialized as `:ph` */
    public get showPhonetic(): BooleanValue | undefined { return this._g(':ph'); }
    public set showPhonetic(v: BooleanValue | undefined) { this._s(':ph', v); }
    /** Formula. */
    public get cellFormula(): CellFormula | undefined { return this._f(CellFormula); }
    /** Cell Value. */
    public get cellValue(): CellValue | undefined { return this._f(CellValue); }
    /** Rich Text Inline. */
    public get inlineString(): InlineString | undefined { return this._f(InlineString); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the CellType Class. */
export abstract class CellType extends OxmlCompositeElement<CellFormula | CellValue | InlineString | ExtensionList> {

    public static override _A = [':r',':s',':t',':cm',':vm',':ph',];
    /** Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Style Index. Serialized as `:s` */
    public get styleIndex(): UInt32Value | undefined { return this._g(':s'); }
    public set styleIndex(v: UInt32Value | undefined) { this._s(':s', v); }
    /** Cell Data Type. Serialized as `:t` */
    public get dataType(): CellValues | undefined { return this._g(':t'); }
    public set dataType(v: CellValues | undefined) { this._s(':t', v); }
    /** Cell Metadata Index. Serialized as `:cm` */
    public get cellMetaIndex(): UInt32Value | undefined { return this._g(':cm'); }
    public set cellMetaIndex(v: UInt32Value | undefined) { this._s(':cm', v); }
    /** Value Metadata Index. Serialized as `:vm` */
    public get valueMetaIndex(): UInt32Value | undefined { return this._g(':vm'); }
    public set valueMetaIndex(v: UInt32Value | undefined) { this._s(':vm', v); }
    /** Show Phonetic. Serialized as `:ph` */
    public get showPhonetic(): BooleanValue | undefined { return this._g(':ph'); }
    public set showPhonetic(v: BooleanValue | undefined) { this._s(':ph', v); }
    /** Formula. */
    public get cellFormula(): CellFormula | undefined { return this._f(CellFormula); }
    /** Cell Value. */
    public get cellValue(): CellValue | undefined { return this._f(CellValue); }
    /** Rich Text Inline. */
    public get inlineString(): InlineString | undefined { return this._f(InlineString); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Cell. Serialized as `x:c` */
export class Cell extends CellType {

    public static override _Q = 'x:c';

}
/** Old Cell Data. Serialized as `x:oc` */
export class OldCell extends CellType {

    public static override _Q = 'x:oc';

}
/** Undo. Serialized as `x:undo` */
export class Undo extends OxmlLeafElement {

    public static override _Q = 'x:undo';
    public static override _A = [':index',':exp',':ref3D',':array',':v',':nf',':cs',':dr',':dn',':r',':sId',];
    /** Index. Serialized as `:index` */
    public get index(): UInt32Value | undefined { return this._g(':index'); }
    public set index(v: UInt32Value | undefined) { this._s(':index', v); }
    /** Expression. Serialized as `:exp` */
    public get expression(): FormulaExpressionValues | undefined { return this._g(':exp'); }
    public set expression(v: FormulaExpressionValues | undefined) { this._s(':exp', v); }
    /** Reference 3D. Serialized as `:ref3D` */
    public get reference3D(): BooleanValue | undefined { return this._g(':ref3D'); }
    public set reference3D(v: BooleanValue | undefined) { this._s(':ref3D', v); }
    /** Array Entered. Serialized as `:array` */
    public get array(): BooleanValue | undefined { return this._g(':array'); }
    public set array(v: BooleanValue | undefined) { this._s(':array', v); }
    /** Value Needed. Serialized as `:v` */
    public get val(): BooleanValue | undefined { return this._g(':v'); }
    public set val(v: BooleanValue | undefined) { this._s(':v', v); }
    /** Defined Name Formula. Serialized as `:nf` */
    public get definedNameFormula(): BooleanValue | undefined { return this._g(':nf'); }
    public set definedNameFormula(v: BooleanValue | undefined) { this._s(':nf', v); }
    /** Cross Sheet Move. Serialized as `:cs` */
    public get crossSheetMove(): BooleanValue | undefined { return this._g(':cs'); }
    public set crossSheetMove(v: BooleanValue | undefined) { this._s(':cs', v); }
    /** Range. Serialized as `:dr` */
    public get deletedRange(): StringValue | undefined { return this._g(':dr'); }
    public set deletedRange(v: StringValue | undefined) { this._s(':dr', v); }
    /** Defined Name. Serialized as `:dn` */
    public get definedName(): StringValue | undefined { return this._g(':dn'); }
    public set definedName(v: StringValue | undefined) { this._s(':dn', v); }
    /** Cell Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Sheet Id. Serialized as `:sId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sId', v); }

}
/** Reviewed. Serialized as `x:reviewed` */
export class Reviewed extends OxmlLeafElement {

    public static override _Q = 'x:reviewed';
    public static override _A = [':rId',];
    /** revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }

}
/** Reviewed List. Serialized as `x:reviewedList` */
export class ReviewedList extends OxmlCompositeElement<Reviewed> {

    public static override _Q = 'x:reviewedList';
    public static override _A = [':count',];
    /** Reviewed Revisions Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Sheet Id Map. Serialized as `x:sheetIdMap` */
export class SheetIdMap extends OxmlCompositeElement<SheetId> {

    public static override _Q = 'x:sheetIdMap';
    public static override _A = [':count',];
    /** Sheet Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Revision Merge Conflict. Serialized as `x:rcft` */
export class RevisionConflict extends OxmlLeafElement {

    public static override _Q = 'x:rcft';
    public static override _A = [':rId',':ua',':ra',':sheetId',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }

}
/** Revision Query Table. Serialized as `x:rqt` */
export class RevisionQueryTable extends OxmlLeafElement {

    public static override _Q = 'x:rqt';
    public static override _A = [':sheetId',':ref',':fieldId',];
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** QueryTable Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Field Id. Serialized as `:fieldId` */
    public get fieldId(): UInt32Value | undefined { return this._g(':fieldId'); }
    public set fieldId(v: UInt32Value | undefined) { this._s(':fieldId', v); }

}
/** Revision Cell Comment. Serialized as `x:rcmt` */
export class RevisionComment extends OxmlLeafElement {

    public static override _Q = 'x:rcmt';
    public static override _A = [':sheetId',':cell',':guid',':action',':alwaysShow',':old',':hiddenRow',':hiddenColumn',':author',':oldLength',':newLength',];
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Cell. Serialized as `:cell` */
    public get cell(): StringValue | undefined { return this._g(':cell'); }
    public set cell(v: StringValue | undefined) { this._s(':cell', v); }
    /** GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** User Action. Serialized as `:action` */
    public get action(): RevisionActionValues | undefined { return this._g(':action'); }
    public set action(v: RevisionActionValues | undefined) { this._s(':action', v); }
    /** Always Show Comment. Serialized as `:alwaysShow` */
    public get alwaysShow(): BooleanValue | undefined { return this._g(':alwaysShow'); }
    public set alwaysShow(v: BooleanValue | undefined) { this._s(':alwaysShow', v); }
    /** Old Comment. Serialized as `:old` */
    public get old(): BooleanValue | undefined { return this._g(':old'); }
    public set old(v: BooleanValue | undefined) { this._s(':old', v); }
    /** Comment In Hidden Row. Serialized as `:hiddenRow` */
    public get hiddenRow(): BooleanValue | undefined { return this._g(':hiddenRow'); }
    public set hiddenRow(v: BooleanValue | undefined) { this._s(':hiddenRow', v); }
    /** Hidden Column. Serialized as `:hiddenColumn` */
    public get hiddenColumn(): BooleanValue | undefined { return this._g(':hiddenColumn'); }
    public set hiddenColumn(v: BooleanValue | undefined) { this._s(':hiddenColumn', v); }
    /** Author. Serialized as `:author` */
    public get author(): StringValue | undefined { return this._g(':author'); }
    public set author(v: StringValue | undefined) { this._s(':author', v); }
    /** Original Comment Length. Serialized as `:oldLength` */
    public get oldLength(): UInt32Value | undefined { return this._g(':oldLength'); }
    public set oldLength(v: UInt32Value | undefined) { this._s(':oldLength', v); }
    /** New Comment Length. Serialized as `:newLength` */
    public get newLength(): UInt32Value | undefined { return this._g(':newLength'); }
    public set newLength(v: UInt32Value | undefined) { this._s(':newLength', v); }

}
/** Revision Defined Name. Serialized as `x:rdn` */
export class RevisionDefinedName extends OxmlCompositeElement<Formula | OldFormula | ExtensionList> {

    public static override _Q = 'x:rdn';
    public static override _A = [':rId',':ua',':ra',':localSheetId',':customView',':name',':function',':oldFunction',':functionGroupId',':oldFunctionGroupId',':shortcutKey',':oldShortcutKey',':hidden',':oldHidden',':customMenu',':oldCustomMenu',':description',':oldDescription',':help',':oldHelp',':statusBar',':oldStatusBar',':comment',':oldComment',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Local Name Sheet Id. Serialized as `:localSheetId` */
    public get localSheetId(): UInt32Value | undefined { return this._g(':localSheetId'); }
    public set localSheetId(v: UInt32Value | undefined) { this._s(':localSheetId', v); }
    /** Custom View. Serialized as `:customView` */
    public get customView(): BooleanValue | undefined { return this._g(':customView'); }
    public set customView(v: BooleanValue | undefined) { this._s(':customView', v); }
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Function. Serialized as `:function` */
    public get function(): BooleanValue | undefined { return this._g(':function'); }
    public set function(v: BooleanValue | undefined) { this._s(':function', v); }
    /** Old Function. Serialized as `:oldFunction` */
    public get oldFunction(): BooleanValue | undefined { return this._g(':oldFunction'); }
    public set oldFunction(v: BooleanValue | undefined) { this._s(':oldFunction', v); }
    /** Function Group Id. Serialized as `:functionGroupId` */
    public get functionGroupId(): ByteValue | undefined { return this._g(':functionGroupId'); }
    public set functionGroupId(v: ByteValue | undefined) { this._s(':functionGroupId', v); }
    /** Old Function Group Id. Serialized as `:oldFunctionGroupId` */
    public get oldFunctionGroupId(): ByteValue | undefined { return this._g(':oldFunctionGroupId'); }
    public set oldFunctionGroupId(v: ByteValue | undefined) { this._s(':oldFunctionGroupId', v); }
    /** Shortcut Key. Serialized as `:shortcutKey` */
    public get shortcutKey(): ByteValue | undefined { return this._g(':shortcutKey'); }
    public set shortcutKey(v: ByteValue | undefined) { this._s(':shortcutKey', v); }
    /** Old Short Cut Key. Serialized as `:oldShortcutKey` */
    public get oldShortcutKey(): ByteValue | undefined { return this._g(':oldShortcutKey'); }
    public set oldShortcutKey(v: ByteValue | undefined) { this._s(':oldShortcutKey', v); }
    /** Named Range Hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Old Hidden. Serialized as `:oldHidden` */
    public get oldHidden(): BooleanValue | undefined { return this._g(':oldHidden'); }
    public set oldHidden(v: BooleanValue | undefined) { this._s(':oldHidden', v); }
    /** New Custom Menu. Serialized as `:customMenu` */
    public get customMenu(): StringValue | undefined { return this._g(':customMenu'); }
    public set customMenu(v: StringValue | undefined) { this._s(':customMenu', v); }
    /** Old Custom Menu Text. Serialized as `:oldCustomMenu` */
    public get oldCustomMenu(): StringValue | undefined { return this._g(':oldCustomMenu'); }
    public set oldCustomMenu(v: StringValue | undefined) { this._s(':oldCustomMenu', v); }
    /** Description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** Old Description. Serialized as `:oldDescription` */
    public get oldDescription(): StringValue | undefined { return this._g(':oldDescription'); }
    public set oldDescription(v: StringValue | undefined) { this._s(':oldDescription', v); }
    /** New Help Topic. Serialized as `:help` */
    public get help(): StringValue | undefined { return this._g(':help'); }
    public set help(v: StringValue | undefined) { this._s(':help', v); }
    /** Old Help Topic. Serialized as `:oldHelp` */
    public get oldHelp(): StringValue | undefined { return this._g(':oldHelp'); }
    public set oldHelp(v: StringValue | undefined) { this._s(':oldHelp', v); }
    /** Status Bar. Serialized as `:statusBar` */
    public get statusBar(): StringValue | undefined { return this._g(':statusBar'); }
    public set statusBar(v: StringValue | undefined) { this._s(':statusBar', v); }
    /** Old Status Bar. Serialized as `:oldStatusBar` */
    public get oldStatusBar(): StringValue | undefined { return this._g(':oldStatusBar'); }
    public set oldStatusBar(v: StringValue | undefined) { this._s(':oldStatusBar', v); }
    /** Name Comment. Serialized as `:comment` */
    public get comment(): StringValue | undefined { return this._g(':comment'); }
    public set comment(v: StringValue | undefined) { this._s(':comment', v); }
    /** Old Name Comment. Serialized as `:oldComment` */
    public get oldComment(): StringValue | undefined { return this._g(':oldComment'); }
    public set oldComment(v: StringValue | undefined) { this._s(':oldComment', v); }
    /** Formula. */
    public get formula(): Formula | undefined { return this._f(Formula); }
    /** Old Formula. */
    public get oldFormula(): OldFormula | undefined { return this._f(OldFormula); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Revision AutoFormat. Serialized as `x:raf` */
export class RevisionAutoFormat extends OxmlLeafElement {

    public static override _Q = 'x:raf';
    public static override _A = [':sheetId',':autoFormatId',':applyNumberFormats',':applyBorderFormats',':applyFontFormats',':applyPatternFormats',':applyAlignmentFormats',':applyWidthHeightFormats',':ref',];
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
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
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Revision Format. Serialized as `x:rfmt` */
export class RevisionFormat extends OxmlCompositeElement<DifferentialFormat | ExtensionList> {

    public static override _Q = 'x:rfmt';
    public static override _A = [':sheetId',':xfDxf',':s',':sqref',':start',':length',];
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Row or Column Formatting Change. Serialized as `:xfDxf` */
    public get rowOrColumnAffected(): BooleanValue | undefined { return this._g(':xfDxf'); }
    public set rowOrColumnAffected(v: BooleanValue | undefined) { this._s(':xfDxf', v); }
    /** Style. Serialized as `:s` */
    public get styleAffected(): BooleanValue | undefined { return this._g(':s'); }
    public set styleAffected(v: BooleanValue | undefined) { this._s(':s', v); }
    /** Sequence Of References. Serialized as `:sqref` */
    public get sequenceOfReferences(): ListValue<StringValue> | undefined { return this._g(':sqref'); }
    public set sequenceOfReferences(v: ListValue<StringValue> | undefined) { this._s(':sqref', v); }
    /** Start index. Serialized as `:start` */
    public get start(): UInt32Value | undefined { return this._g(':start'); }
    public set start(v: UInt32Value | undefined) { this._s(':start', v); }
    /** Length. Serialized as `:length` */
    public get length(): UInt32Value | undefined { return this._g(':length'); }
    public set length(v: UInt32Value | undefined) { this._s(':length', v); }
    /** Formatting. */
    public get differentialFormat(): DifferentialFormat | undefined { return this._f(DifferentialFormat); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Revision Cell Change. Serialized as `x:rcc` */
export class RevisionCellChange extends OxmlCompositeElement<OldCell | NewCell | OldDifferentialFormat | NewDifferentialFormat | ExtensionList> {

    public static override _Q = 'x:rcc';
    public static override _A = [':rId',':ua',':ra',':sId',':odxf',':xfDxf',':s',':dxf',':numFmtId',':quotePrefix',':oldQuotePrefix',':ph',':oldPh',':endOfListFormulaUpdate',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Sheet Id. Serialized as `:sId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sId', v); }
    /** Old Formatting. Serialized as `:odxf` */
    public get oldFormatting(): BooleanValue | undefined { return this._g(':odxf'); }
    public set oldFormatting(v: BooleanValue | undefined) { this._s(':odxf', v); }
    /** Row Column Formatting Change. Serialized as `:xfDxf` */
    public get rowColumnFormattingAffected(): BooleanValue | undefined { return this._g(':xfDxf'); }
    public set rowColumnFormattingAffected(v: BooleanValue | undefined) { this._s(':xfDxf', v); }
    /** Style Revision. Serialized as `:s` */
    public get styleRevision(): BooleanValue | undefined { return this._g(':s'); }
    public set styleRevision(v: BooleanValue | undefined) { this._s(':s', v); }
    /** Formatting. Serialized as `:dxf` */
    public get format(): BooleanValue | undefined { return this._g(':dxf'); }
    public set format(v: BooleanValue | undefined) { this._s(':dxf', v); }
    /** Number Format Id. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** Quote Prefix. Serialized as `:quotePrefix` */
    public get quotePrefix(): BooleanValue | undefined { return this._g(':quotePrefix'); }
    public set quotePrefix(v: BooleanValue | undefined) { this._s(':quotePrefix', v); }
    /** Old Quote Prefix. Serialized as `:oldQuotePrefix` */
    public get oldQuotePrefix(): BooleanValue | undefined { return this._g(':oldQuotePrefix'); }
    public set oldQuotePrefix(v: BooleanValue | undefined) { this._s(':oldQuotePrefix', v); }
    /** Phonetic Text. Serialized as `:ph` */
    public get hasPhoneticText(): BooleanValue | undefined { return this._g(':ph'); }
    public set hasPhoneticText(v: BooleanValue | undefined) { this._s(':ph', v); }
    /** Old Phonetic Text. Serialized as `:oldPh` */
    public get oldPhoneticText(): BooleanValue | undefined { return this._g(':oldPh'); }
    public set oldPhoneticText(v: BooleanValue | undefined) { this._s(':oldPh', v); }
    /** End of List  Formula Update. Serialized as `:endOfListFormulaUpdate` */
    public get endOfListFormulaUpdate(): BooleanValue | undefined { return this._g(':endOfListFormulaUpdate'); }
    public set endOfListFormulaUpdate(v: BooleanValue | undefined) { this._s(':endOfListFormulaUpdate', v); }
    /** Old Cell Data. */
    public get oldCell(): OldCell | undefined { return this._f(OldCell); }
    /** New Cell Data. */
    public get newCell(): NewCell | undefined { return this._f(NewCell); }
    /** Old Formatting Information. */
    public get oldDifferentialFormat(): OldDifferentialFormat | undefined { return this._f(OldDifferentialFormat); }
    /** New Formatting Information. */
    public get newDifferentialFormat(): NewDifferentialFormat | undefined { return this._f(NewDifferentialFormat); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Revision Insert Sheet. Serialized as `x:ris` */
export class RevisionInsertSheet extends OxmlLeafElement {

    public static override _Q = 'x:ris';
    public static override _A = [':rId',':ua',':ra',':sheetId',':name',':sheetPosition',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Sheet Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Sheet Position. Serialized as `:sheetPosition` */
    public get sheetPosition(): UInt32Value | undefined { return this._g(':sheetPosition'); }
    public set sheetPosition(v: UInt32Value | undefined) { this._s(':sheetPosition', v); }

}
/** Revision Sheet Name. Serialized as `x:rsnm` */
export class RevisionSheetName extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:rsnm';
    public static override _A = [':rId',':ua',':ra',':sheetId',':oldName',':newName',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Old Sheet Name. Serialized as `:oldName` */
    public get oldName(): StringValue | undefined { return this._g(':oldName'); }
    public set oldName(v: StringValue | undefined) { this._s(':oldName', v); }
    /** New Sheet Name. Serialized as `:newName` */
    public get newName(): StringValue | undefined { return this._g(':newName'); }
    public set newName(v: StringValue | undefined) { this._s(':newName', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Revision Custom View. Serialized as `x:rcv` */
export class RevisionCustomView extends OxmlLeafElement {

    public static override _Q = 'x:rcv';
    public static override _A = [':guid',':action',];
    /** GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** User Action. Serialized as `:action` */
    public get action(): RevisionActionValues | undefined { return this._g(':action'); }
    public set action(v: RevisionActionValues | undefined) { this._s(':action', v); }

}
/** Revision Cell Move. Serialized as `x:rm` */
export class RevisionMove extends OxmlCompositeElement<Undo | RevisionCellChange | RevisionFormat> {

    public static override _Q = 'x:rm';
    public static override _A = [':rId',':ua',':ra',':sheetId',':source',':destination',':sourceSheetId',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Sheet Id. Serialized as `:sheetId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sheetId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sheetId', v); }
    /** Source. Serialized as `:source` */
    public get source(): StringValue | undefined { return this._g(':source'); }
    public set source(v: StringValue | undefined) { this._s(':source', v); }
    /** Destination. Serialized as `:destination` */
    public get destination(): StringValue | undefined { return this._g(':destination'); }
    public set destination(v: StringValue | undefined) { this._s(':destination', v); }
    /** Source Sheet Id. Serialized as `:sourceSheetId` */
    public get sourceSheetId(): UInt32Value | undefined { return this._g(':sourceSheetId'); }
    public set sourceSheetId(v: UInt32Value | undefined) { this._s(':sourceSheetId', v); }

}
/** Revision Row Column Insert Delete. Serialized as `x:rrc` */
export class RevisionRowColumn extends OxmlCompositeElement<Undo | RevisionCellChange | RevisionFormat> {

    public static override _Q = 'x:rrc';
    public static override _A = [':rId',':ua',':ra',':sId',':eol',':ref',':action',':edge',];
    /** Revision Id. Serialized as `:rId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':rId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':rId', v); }
    /** Revision From Rejection. Serialized as `:ua` */
    public get ua(): BooleanValue | undefined { return this._g(':ua'); }
    public set ua(v: BooleanValue | undefined) { this._s(':ua', v); }
    /** Revision Undo Rejected. Serialized as `:ra` */
    public get ra(): BooleanValue | undefined { return this._g(':ra'); }
    public set ra(v: BooleanValue | undefined) { this._s(':ra', v); }
    /** Sheet Id. Serialized as `:sId` */
    public get sheetId(): UInt32Value | undefined { return this._g(':sId'); }
    public set sheetId(v: UInt32Value | undefined) { this._s(':sId', v); }
    /** End Of List. Serialized as `:eol` */
    public get endOfList(): BooleanValue | undefined { return this._g(':eol'); }
    public set endOfList(v: BooleanValue | undefined) { this._s(':eol', v); }
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** User Action. Serialized as `:action` */
    public get action(): RowColumnActionValues | undefined { return this._g(':action'); }
    public set action(v: RowColumnActionValues | undefined) { this._s(':action', v); }
    /** Edge Deleted. Serialized as `:edge` */
    public get edge(): BooleanValue | undefined { return this._g(':edge'); }
    public set edge(v: BooleanValue | undefined) { this._s(':edge', v); }

}
/** Header. Serialized as `x:header` */
export class Header extends OxmlCompositeElement<SheetIdMap | ReviewedList | ExtensionList> {

    public static override _Q = 'x:header';
    public static override _A = [':guid',':dateTime',':maxSheetId',':userName','r:id',':minRId',':maxRId',];
    /** GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** Date Time. Serialized as `:dateTime` */
    public get dateTime(): DateTimeValue | undefined { return this._g(':dateTime'); }
    public set dateTime(v: DateTimeValue | undefined) { this._s(':dateTime', v); }
    /** Last Sheet Id. Serialized as `:maxSheetId` */
    public get maxSheetId(): UInt32Value | undefined { return this._g(':maxSheetId'); }
    public set maxSheetId(v: UInt32Value | undefined) { this._s(':maxSheetId', v); }
    /** User Name. Serialized as `:userName` */
    public get userName(): StringValue | undefined { return this._g(':userName'); }
    public set userName(v: StringValue | undefined) { this._s(':userName', v); }
    /** Relationship ID. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Minimum Revision Id. Serialized as `:minRId` */
    public get minRevisionId(): UInt32Value | undefined { return this._g(':minRId'); }
    public set minRevisionId(v: UInt32Value | undefined) { this._s(':minRId', v); }
    /** Max Revision Id. Serialized as `:maxRId` */
    public get maxRevisionId(): UInt32Value | undefined { return this._g(':maxRId'); }
    public set maxRevisionId(v: UInt32Value | undefined) { this._s(':maxRId', v); }
    /** Sheet Id Map. */
    public get sheetIdMap(): SheetIdMap | undefined { return this._f(SheetIdMap); }
    /** Reviewed List. */
    public get reviewedList(): ReviewedList | undefined { return this._f(ReviewedList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Phonetic Properties. Serialized as `x:phoneticPr` */
export class PhoneticProperties extends OxmlLeafElement {

    public static override _Q = 'x:phoneticPr';
    public static override _A = [':fontId',':type',':alignment',];
    /** Font Id. Serialized as `:fontId` */
    public get fontId(): UInt32Value | undefined { return this._g(':fontId'); }
    public set fontId(v: UInt32Value | undefined) { this._s(':fontId', v); }
    /** Character Type. Serialized as `:type` */
    public get type(): PhoneticValues | undefined { return this._g(':type'); }
    public set type(v: PhoneticValues | undefined) { this._s(':type', v); }
    /** Alignment. Serialized as `:alignment` */
    public get alignment(): PhoneticAlignmentValues | undefined { return this._g(':alignment'); }
    public set alignment(v: PhoneticAlignmentValues | undefined) { this._s(':alignment', v); }

}
/** Phonetic Run. Serialized as `x:rPh` */
export class PhoneticRun extends OxmlCompositeElement<Text> {

    public static override _Q = 'x:rPh';
    public static override _A = [':sb',':eb',];
    /** Base Text Start Index. Serialized as `:sb` */
    public get baseTextStartIndex(): UInt32Value | undefined { return this._g(':sb'); }
    public set baseTextStartIndex(v: UInt32Value | undefined) { this._s(':sb', v); }
    /** Base Text End Index. Serialized as `:eb` */
    public get endingBaseIndex(): UInt32Value | undefined { return this._g(':eb'); }
    public set endingBaseIndex(v: UInt32Value | undefined) { this._s(':eb', v); }
    /** Text. */
    public get text(): Text | undefined { return this._f(Text); }

}
/** Rich Text Run. Serialized as `x:r` */
export class Run extends OxmlCompositeElement<RunProperties | Text> {

    public static override _Q = 'x:r';
    /** Run Properties. */
    public get runProperties(): RunProperties | undefined { return this._f(RunProperties); }
    /** Text. */
    public get text(): Text | undefined { return this._f(Text); }

}
/** Run Properties. Serialized as `x:rPr` */
export class RunProperties extends OxmlCompositeElement<Bold | Italic | Strike | Condense | Extend | Outline | Shadow | Underline | VerticalTextAlignment | FontSize | Color | RunFont | FontFamily | RunPropertyCharSet | FontScheme> {

    public static override _Q = 'x:rPr';

}
/** Font Scheme. Serialized as `x:scheme` */
export class FontScheme extends OxmlLeafElement {

    public static override _Q = 'x:scheme';
    public static override _A = [':val',];
    /** Font Scheme. Serialized as `:val` */
    public get val(): FontSchemeValues | undefined { return this._g(':val'); }
    public set val(v: FontSchemeValues | undefined) { this._s(':val', v); }

}
/** Defines the InternationalPropertyType Class. */
export abstract class InternationalPropertyType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Character Set. Serialized as `x:charset` */
export class RunPropertyCharSet extends InternationalPropertyType {

    public static override _Q = 'x:charset';

}
/** Font Family. Serialized as `x:family` */
export class FontFamily extends InternationalPropertyType {

    public static override _Q = 'x:family';

}
/** Font. Serialized as `x:rFont` */
export class RunFont extends OxmlLeafElement {

    public static override _Q = 'x:rFont';
    public static override _A = [':val',];
    /** String Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

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
/** Background Color. Serialized as `x:bgColor` */
export class BackgroundColor extends ColorType {

    public static override _Q = 'x:bgColor';

}
/** Foreground Color. Serialized as `x:fgColor` */
export class ForegroundColor extends ColorType {

    public static override _Q = 'x:fgColor';

}
/** Sheet Tab Color. Serialized as `x:tabColor` */
export class TabColor extends ColorType {

    public static override _Q = 'x:tabColor';

}
/** Text Color. Serialized as `x:color` */
export class Color extends ColorType {

    public static override _Q = 'x:color';

}
/** Font Size. Serialized as `x:sz` */
export class FontSize extends OxmlLeafElement {

    public static override _Q = 'x:sz';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Vertical Alignment. Serialized as `x:vertAlign` */
export class VerticalTextAlignment extends OxmlLeafElement {

    public static override _Q = 'x:vertAlign';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): VerticalAlignmentRunValues | undefined { return this._g(':val'); }
    public set val(v: VerticalAlignmentRunValues | undefined) { this._s(':val', v); }

}
/** Underline. Serialized as `x:u` */
export class Underline extends OxmlLeafElement {

    public static override _Q = 'x:u';
    public static override _A = [':val',];
    /** Underline Value. Serialized as `:val` */
    public get val(): UnderlineValues | undefined { return this._g(':val'); }
    public set val(v: UnderlineValues | undefined) { this._s(':val', v); }

}
/** Defines the BooleanPropertyType Class. */
export abstract class BooleanPropertyType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Shadow. Serialized as `x:shadow` */
export class Shadow extends BooleanPropertyType {

    public static override _Q = 'x:shadow';

}
/** Outline. Serialized as `x:outline` */
export class Outline extends BooleanPropertyType {

    public static override _Q = 'x:outline';

}
/** Extend. Serialized as `x:extend` */
export class Extend extends BooleanPropertyType {

    public static override _Q = 'x:extend';

}
/** Condense. Serialized as `x:condense` */
export class Condense extends BooleanPropertyType {

    public static override _Q = 'x:condense';

}
/** Strike Through. Serialized as `x:strike` */
export class Strike extends BooleanPropertyType {

    public static override _Q = 'x:strike';

}
/** Italic. Serialized as `x:i` */
export class Italic extends BooleanPropertyType {

    public static override _Q = 'x:i';

}
/** Bold. Serialized as `x:b` */
export class Bold extends BooleanPropertyType {

    public static override _Q = 'x:b';

}
/** Defines the RstType Class. */
export abstract class RstType extends OxmlCompositeElement<Text | Run | PhoneticRun | PhoneticProperties> {

    /** Text. */
    public get text(): Text | undefined { return this._f(Text); }

}
/** Comment Text. Serialized as `x:text` */
export class CommentText extends RstType {

    public static override _Q = 'x:text';

}
/** Rich Text Inline. Serialized as `x:is` */
export class InlineString extends RstType {

    public static override _Q = 'x:is';

}
/** String Item. Serialized as `x:si` */
export class SharedStringItem extends RstType {

    public static override _Q = 'x:si';

}
/** QueryTable Field. Serialized as `x:queryTableField` */
export class QueryTableField extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:queryTableField';
    public static override _A = [':id',':name',':dataBound',':rowNumbers',':fillFormulas',':clipped',':tableColumnId',];
    /** Field Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Data Bound Column. Serialized as `:dataBound` */
    public get dataBound(): BooleanValue | undefined { return this._g(':dataBound'); }
    public set dataBound(v: BooleanValue | undefined) { this._s(':dataBound', v); }
    /** Row Numbers. Serialized as `:rowNumbers` */
    public get rowNumbers(): BooleanValue | undefined { return this._g(':rowNumbers'); }
    public set rowNumbers(v: BooleanValue | undefined) { this._s(':rowNumbers', v); }
    /** Fill This Formula On Refresh. Serialized as `:fillFormulas` */
    public get fillFormulas(): BooleanValue | undefined { return this._g(':fillFormulas'); }
    public set fillFormulas(v: BooleanValue | undefined) { this._s(':fillFormulas', v); }
    /** Clipped Column. Serialized as `:clipped` */
    public get clipped(): BooleanValue | undefined { return this._g(':clipped'); }
    public set clipped(v: BooleanValue | undefined) { this._s(':clipped', v); }
    /** Table Column Id. Serialized as `:tableColumnId` */
    public get tableColumnId(): UInt32Value | undefined { return this._g(':tableColumnId'); }
    public set tableColumnId(v: UInt32Value | undefined) { this._s(':tableColumnId', v); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Deleted Field. Serialized as `x:deletedField` */
export class DeletedField extends OxmlLeafElement {

    public static override _Q = 'x:deletedField';
    public static override _A = [':name',];
    /** Deleted Fields Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Deleted Fields. Serialized as `x:queryTableDeletedFields` */
export class QueryTableDeletedFields extends OxmlCompositeElement<DeletedField> {

    public static override _Q = 'x:queryTableDeletedFields';
    public static override _A = [':count',];
    /** Deleted Fields Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Query table fields. Serialized as `x:queryTableFields` */
export class QueryTableFields extends OxmlCompositeElement<QueryTableField> {

    public static override _Q = 'x:queryTableFields';
    public static override _A = [':count',];
    /** Column Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Reference. Serialized as `x:reference` */
export class PivotAreaReference extends OxmlCompositeElement<FieldItem | ExtensionList> {

    public static override _Q = 'x:reference';
    public static override _A = [':field',':count',':selected',':byPosition',':relative',':defaultSubtotal',':sumSubtotal',':countASubtotal',':avgSubtotal',':maxSubtotal',':minSubtotal',':productSubtotal',':countSubtotal',':stdDevSubtotal',':stdDevPSubtotal',':varSubtotal',':varPSubtotal',];
    /** Field Index. Serialized as `:field` */
    public get field(): UInt32Value | undefined { return this._g(':field'); }
    public set field(v: UInt32Value | undefined) { this._s(':field', v); }
    /** Item Index Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Selected. Serialized as `:selected` */
    public get selected(): BooleanValue | undefined { return this._g(':selected'); }
    public set selected(v: BooleanValue | undefined) { this._s(':selected', v); }
    /** Positional Reference. Serialized as `:byPosition` */
    public get byPosition(): BooleanValue | undefined { return this._g(':byPosition'); }
    public set byPosition(v: BooleanValue | undefined) { this._s(':byPosition', v); }
    /** Relative Reference. Serialized as `:relative` */
    public get relative(): BooleanValue | undefined { return this._g(':relative'); }
    public set relative(v: BooleanValue | undefined) { this._s(':relative', v); }
    /** Include Default Filter. Serialized as `:defaultSubtotal` */
    public get defaultSubtotal(): BooleanValue | undefined { return this._g(':defaultSubtotal'); }
    public set defaultSubtotal(v: BooleanValue | undefined) { this._s(':defaultSubtotal', v); }
    /** Include Sum Filter. Serialized as `:sumSubtotal` */
    public get sumSubtotal(): BooleanValue | undefined { return this._g(':sumSubtotal'); }
    public set sumSubtotal(v: BooleanValue | undefined) { this._s(':sumSubtotal', v); }
    /** Include CountA Filter. Serialized as `:countASubtotal` */
    public get countASubtotal(): BooleanValue | undefined { return this._g(':countASubtotal'); }
    public set countASubtotal(v: BooleanValue | undefined) { this._s(':countASubtotal', v); }
    /** Include Average Filter. Serialized as `:avgSubtotal` */
    public get averageSubtotal(): BooleanValue | undefined { return this._g(':avgSubtotal'); }
    public set averageSubtotal(v: BooleanValue | undefined) { this._s(':avgSubtotal', v); }
    /** Include Maximum Filter. Serialized as `:maxSubtotal` */
    public get maxSubtotal(): BooleanValue | undefined { return this._g(':maxSubtotal'); }
    public set maxSubtotal(v: BooleanValue | undefined) { this._s(':maxSubtotal', v); }
    /** Include Minimum Filter. Serialized as `:minSubtotal` */
    public get minSubtotal(): BooleanValue | undefined { return this._g(':minSubtotal'); }
    public set minSubtotal(v: BooleanValue | undefined) { this._s(':minSubtotal', v); }
    /** Include Product Filter. Serialized as `:productSubtotal` */
    public get applyProductInSubtotal(): BooleanValue | undefined { return this._g(':productSubtotal'); }
    public set applyProductInSubtotal(v: BooleanValue | undefined) { this._s(':productSubtotal', v); }
    /** Include Count Subtotal. Serialized as `:countSubtotal` */
    public get countSubtotal(): BooleanValue | undefined { return this._g(':countSubtotal'); }
    public set countSubtotal(v: BooleanValue | undefined) { this._s(':countSubtotal', v); }
    /** Include StdDev Filter. Serialized as `:stdDevSubtotal` */
    public get applyStandardDeviationInSubtotal(): BooleanValue | undefined { return this._g(':stdDevSubtotal'); }
    public set applyStandardDeviationInSubtotal(v: BooleanValue | undefined) { this._s(':stdDevSubtotal', v); }
    /** Include StdDevP Filter. Serialized as `:stdDevPSubtotal` */
    public get applyStandardDeviationPInSubtotal(): BooleanValue | undefined { return this._g(':stdDevPSubtotal'); }
    public set applyStandardDeviationPInSubtotal(v: BooleanValue | undefined) { this._s(':stdDevPSubtotal', v); }
    /** Include Var Filter. Serialized as `:varSubtotal` */
    public get applyVarianceInSubtotal(): BooleanValue | undefined { return this._g(':varSubtotal'); }
    public set applyVarianceInSubtotal(v: BooleanValue | undefined) { this._s(':varSubtotal', v); }
    /** Include VarP Filter. Serialized as `:varPSubtotal` */
    public get applyVariancePInSubtotal(): BooleanValue | undefined { return this._g(':varPSubtotal'); }
    public set applyVariancePInSubtotal(v: BooleanValue | undefined) { this._s(':varPSubtotal', v); }

}
/** References. Serialized as `x:references` */
export class PivotAreaReferences extends OxmlCompositeElement<PivotAreaReference> {

    public static override _Q = 'x:references';
    public static override _A = [':count',];
    /** Pivot Filter Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Page Field. Serialized as `x:pageField` */
export class PageField extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x:pageField';
    public static override _A = [':fld',':item',':hier',':name',':cap',];
    /** Field. Serialized as `:fld` */
    public get field(): Int32Value | undefined { return this._g(':fld'); }
    public set field(v: Int32Value | undefined) { this._s(':fld', v); }
    /** Item Index. Serialized as `:item` */
    public get item(): UInt32Value | undefined { return this._g(':item'); }
    public set item(v: UInt32Value | undefined) { this._s(':item', v); }
    /** OLAP Hierarchy Index. Serialized as `:hier` */
    public get hierarchy(): Int32Value | undefined { return this._g(':hier'); }
    public set hierarchy(v: Int32Value | undefined) { this._s(':hier', v); }
    /** Hierarchy Unique Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Hierarchy Display Name. Serialized as `:cap` */
    public get caption(): StringValue | undefined { return this._g(':cap'); }
    public set caption(v: StringValue | undefined) { this._s(':cap', v); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** OLAP Group Items. Serialized as `x:groupItems` */
export class GroupItems extends OxmlCompositeElement<MissingItem | NumberItem | BooleanItem | ErrorItem | StringItem | DateTimeItem> {

    public static override _Q = 'x:groupItems';
    public static override _A = [':count',];
    /** Items Created Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Discrete Grouping Properties. Serialized as `x:discretePr` */
export class DiscreteProperties extends OxmlCompositeElement<FieldItem> {

    public static override _Q = 'x:discretePr';
    public static override _A = [':count',];
    /** Mapping Index Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Range Grouping Properties. Serialized as `x:rangePr` */
export class RangeProperties extends OxmlLeafElement {

    public static override _Q = 'x:rangePr';
    public static override _A = [':autoStart',':autoEnd',':groupBy',':startNum',':endNum',':startDate',':endDate',':groupInterval',];
    /** Source Data Set Beginning Range. Serialized as `:autoStart` */
    public get autoStart(): BooleanValue | undefined { return this._g(':autoStart'); }
    public set autoStart(v: BooleanValue | undefined) { this._s(':autoStart', v); }
    /** Source Data Ending Range. Serialized as `:autoEnd` */
    public get autoEnd(): BooleanValue | undefined { return this._g(':autoEnd'); }
    public set autoEnd(v: BooleanValue | undefined) { this._s(':autoEnd', v); }
    /** Group By. Serialized as `:groupBy` */
    public get groupBy(): GroupByValues | undefined { return this._g(':groupBy'); }
    public set groupBy(v: GroupByValues | undefined) { this._s(':groupBy', v); }
    /** Numeric Grouping Start Value. Serialized as `:startNum` */
    public get startNumber(): DoubleValue | undefined { return this._g(':startNum'); }
    public set startNumber(v: DoubleValue | undefined) { this._s(':startNum', v); }
    /** Numeric Grouping End Value. Serialized as `:endNum` */
    public get endNum(): DoubleValue | undefined { return this._g(':endNum'); }
    public set endNum(v: DoubleValue | undefined) { this._s(':endNum', v); }
    /** Date Grouping Start Value. Serialized as `:startDate` */
    public get startDate(): DateTimeValue | undefined { return this._g(':startDate'); }
    public set startDate(v: DateTimeValue | undefined) { this._s(':startDate', v); }
    /** Date Grouping End Value. Serialized as `:endDate` */
    public get endDate(): DateTimeValue | undefined { return this._g(':endDate'); }
    public set endDate(v: DateTimeValue | undefined) { this._s(':endDate', v); }
    /** Grouping Interval. Serialized as `:groupInterval` */
    public get groupInterval(): DoubleValue | undefined { return this._g(':groupInterval'); }
    public set groupInterval(v: DoubleValue | undefined) { this._s(':groupInterval', v); }

}
/** PivotCache Hierarchy. Serialized as `x:cacheHierarchy` */
export class CacheHierarchy extends OxmlCompositeElement<FieldsUsage | GroupLevels | CacheHierarchyExtensionList> {

    public static override _Q = 'x:cacheHierarchy';
    public static override _A = [':uniqueName',':caption',':measure',':set',':parentSet',':iconSet',':attribute',':time',':keyAttribute',':defaultMemberUniqueName',':allUniqueName',':allCaption',':dimensionUniqueName',':displayFolder',':measureGroup',':measures',':count',':oneField',':memberValueDatatype',':unbalanced',':unbalancedGroup',':hidden',];
    /** uniqueName. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** caption. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** measure. Serialized as `:measure` */
    public get measure(): BooleanValue | undefined { return this._g(':measure'); }
    public set measure(v: BooleanValue | undefined) { this._s(':measure', v); }
    /** set. Serialized as `:set` */
    public get set(): BooleanValue | undefined { return this._g(':set'); }
    public set set(v: BooleanValue | undefined) { this._s(':set', v); }
    /** parentSet. Serialized as `:parentSet` */
    public get parentSet(): UInt32Value | undefined { return this._g(':parentSet'); }
    public set parentSet(v: UInt32Value | undefined) { this._s(':parentSet', v); }
    /** iconSet. Serialized as `:iconSet` */
    public get iconSet(): Int32Value | undefined { return this._g(':iconSet'); }
    public set iconSet(v: Int32Value | undefined) { this._s(':iconSet', v); }
    /** attribute. Serialized as `:attribute` */
    public get attribute(): BooleanValue | undefined { return this._g(':attribute'); }
    public set attribute(v: BooleanValue | undefined) { this._s(':attribute', v); }
    /** time. Serialized as `:time` */
    public get time(): BooleanValue | undefined { return this._g(':time'); }
    public set time(v: BooleanValue | undefined) { this._s(':time', v); }
    /** keyAttribute. Serialized as `:keyAttribute` */
    public get keyAttribute(): BooleanValue | undefined { return this._g(':keyAttribute'); }
    public set keyAttribute(v: BooleanValue | undefined) { this._s(':keyAttribute', v); }
    /** defaultMemberUniqueName. Serialized as `:defaultMemberUniqueName` */
    public get defaultMemberUniqueName(): StringValue | undefined { return this._g(':defaultMemberUniqueName'); }
    public set defaultMemberUniqueName(v: StringValue | undefined) { this._s(':defaultMemberUniqueName', v); }
    /** allUniqueName. Serialized as `:allUniqueName` */
    public get allUniqueName(): StringValue | undefined { return this._g(':allUniqueName'); }
    public set allUniqueName(v: StringValue | undefined) { this._s(':allUniqueName', v); }
    /** allCaption. Serialized as `:allCaption` */
    public get allCaption(): StringValue | undefined { return this._g(':allCaption'); }
    public set allCaption(v: StringValue | undefined) { this._s(':allCaption', v); }
    /** dimensionUniqueName. Serialized as `:dimensionUniqueName` */
    public get dimensionUniqueName(): StringValue | undefined { return this._g(':dimensionUniqueName'); }
    public set dimensionUniqueName(v: StringValue | undefined) { this._s(':dimensionUniqueName', v); }
    /** displayFolder. Serialized as `:displayFolder` */
    public get displayFolder(): StringValue | undefined { return this._g(':displayFolder'); }
    public set displayFolder(v: StringValue | undefined) { this._s(':displayFolder', v); }
    /** measureGroup. Serialized as `:measureGroup` */
    public get measureGroup(): StringValue | undefined { return this._g(':measureGroup'); }
    public set measureGroup(v: StringValue | undefined) { this._s(':measureGroup', v); }
    /** measures. Serialized as `:measures` */
    public get measures(): BooleanValue | undefined { return this._g(':measures'); }
    public set measures(v: BooleanValue | undefined) { this._s(':measures', v); }
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** oneField. Serialized as `:oneField` */
    public get oneField(): BooleanValue | undefined { return this._g(':oneField'); }
    public set oneField(v: BooleanValue | undefined) { this._s(':oneField', v); }
    /** memberValueDatatype. Serialized as `:memberValueDatatype` */
    public get memberValueDatatype(): UInt16Value | undefined { return this._g(':memberValueDatatype'); }
    public set memberValueDatatype(v: UInt16Value | undefined) { this._s(':memberValueDatatype', v); }
    /** unbalanced. Serialized as `:unbalanced` */
    public get unbalanced(): BooleanValue | undefined { return this._g(':unbalanced'); }
    public set unbalanced(v: BooleanValue | undefined) { this._s(':unbalanced', v); }
    /** unbalancedGroup. Serialized as `:unbalancedGroup` */
    public get unbalancedGroup(): BooleanValue | undefined { return this._g(':unbalancedGroup'); }
    public set unbalancedGroup(v: BooleanValue | undefined) { this._s(':unbalancedGroup', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Returns FieldsUsage. */
    public get fieldsUsage(): FieldsUsage | undefined { return this._f(FieldsUsage); }
    /** Returns GroupLevels. */
    public get groupLevels(): GroupLevels | undefined { return this._f(GroupLevels); }
    /** Returns CacheHierarchyExtensionList. */
    public get cacheHierarchyExtensionList(): CacheHierarchyExtensionList | undefined { return this._f(CacheHierarchyExtensionList); }

}
/** PivotTable Advanced Filter. Serialized as `x:filter` */
export class PivotFilter extends OxmlCompositeElement<AutoFilter | PivotFilterExtensionList> {

    public static override _Q = 'x:filter';
    public static override _A = [':fld',':mpFld',':type',':evalOrder',':id',':iMeasureHier',':iMeasureFld',':name',':description',':stringValue1',':stringValue2',];
    /** fld. Serialized as `:fld` */
    public get field(): UInt32Value | undefined { return this._g(':fld'); }
    public set field(v: UInt32Value | undefined) { this._s(':fld', v); }
    /** mpFld. Serialized as `:mpFld` */
    public get memberPropertyFieldId(): UInt32Value | undefined { return this._g(':mpFld'); }
    public set memberPropertyFieldId(v: UInt32Value | undefined) { this._s(':mpFld', v); }
    /** type. Serialized as `:type` */
    public get type(): PivotFilterValues | undefined { return this._g(':type'); }
    public set type(v: PivotFilterValues | undefined) { this._s(':type', v); }
    /** evalOrder. Serialized as `:evalOrder` */
    public get evaluationOrder(): Int32Value | undefined { return this._g(':evalOrder'); }
    public set evaluationOrder(v: Int32Value | undefined) { this._s(':evalOrder', v); }
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** iMeasureHier. Serialized as `:iMeasureHier` */
    public get measureHierarchy(): UInt32Value | undefined { return this._g(':iMeasureHier'); }
    public set measureHierarchy(v: UInt32Value | undefined) { this._s(':iMeasureHier', v); }
    /** iMeasureFld. Serialized as `:iMeasureFld` */
    public get measureField(): UInt32Value | undefined { return this._g(':iMeasureFld'); }
    public set measureField(v: UInt32Value | undefined) { this._s(':iMeasureFld', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** stringValue1. Serialized as `:stringValue1` */
    public get stringValue1(): StringValue | undefined { return this._g(':stringValue1'); }
    public set stringValue1(v: StringValue | undefined) { this._s(':stringValue1', v); }
    /** stringValue2. Serialized as `:stringValue2` */
    public get stringValue2(): StringValue | undefined { return this._g(':stringValue2'); }
    public set stringValue2(v: StringValue | undefined) { this._s(':stringValue2', v); }
    /** Returns AutoFilter. */
    public get autoFilter(): AutoFilter | undefined { return this._f(AutoFilter); }
    /** Returns PivotFilterExtensionList. */
    public get pivotFilterExtensionList(): PivotFilterExtensionList | undefined { return this._f(PivotFilterExtensionList); }

}
/** OLAP Measure Group. Serialized as `x:map` */
export class MeasureDimensionMap extends OxmlLeafElement {

    public static override _Q = 'x:map';
    public static override _A = [':measureGroup',':dimension',];
    /** Measure Group Id. Serialized as `:measureGroup` */
    public get measureGroup(): UInt32Value | undefined { return this._g(':measureGroup'); }
    public set measureGroup(v: UInt32Value | undefined) { this._s(':measureGroup', v); }
    /** Dimension Id. Serialized as `:dimension` */
    public get dimension(): UInt32Value | undefined { return this._g(':dimension'); }
    public set dimension(v: UInt32Value | undefined) { this._s(':dimension', v); }

}
/** OLAP Measure Group. Serialized as `x:measureGroup` */
export class MeasureGroup extends OxmlLeafElement {

    public static override _Q = 'x:measureGroup';
    public static override _A = [':name',':caption',];
    /** Measure Group Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Measure Group Display Name. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }

}
/** OLAP Dimension. Serialized as `x:dimension` */
export class Dimension extends OxmlLeafElement {

    public static override _Q = 'x:dimension';
    public static override _A = [':measure',':name',':uniqueName',':caption',];
    /** Measure. Serialized as `:measure` */
    public get measure(): BooleanValue | undefined { return this._g(':measure'); }
    public set measure(v: BooleanValue | undefined) { this._s(':measure', v); }
    /** Dimension Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Dimension Unique Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** Dimension Display Name. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }

}
/** Member. Serialized as `x:member` */
export class Member extends OxmlLeafElement {

    public static override _Q = 'x:member';
    public static override _A = [':name',];
    /** Hidden Item Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** OLAP Member Property. Serialized as `x:mp` */
export class MemberProperty extends OxmlLeafElement {

    public static override _Q = 'x:mp';
    public static override _A = [':name',':showCell',':showTip',':showAsCaption',':nameLen',':pPos',':pLen',':level',':field',];
    /** OLAP Member Property Unique Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Show Cell. Serialized as `:showCell` */
    public get showCell(): BooleanValue | undefined { return this._g(':showCell'); }
    public set showCell(v: BooleanValue | undefined) { this._s(':showCell', v); }
    /** Show Tooltip. Serialized as `:showTip` */
    public get showTip(): BooleanValue | undefined { return this._g(':showTip'); }
    public set showTip(v: BooleanValue | undefined) { this._s(':showTip', v); }
    /** Show As Caption. Serialized as `:showAsCaption` */
    public get showAsCaption(): BooleanValue | undefined { return this._g(':showAsCaption'); }
    public set showAsCaption(v: BooleanValue | undefined) { this._s(':showAsCaption', v); }
    /** Name Length. Serialized as `:nameLen` */
    public get nameLength(): UInt32Value | undefined { return this._g(':nameLen'); }
    public set nameLength(v: UInt32Value | undefined) { this._s(':nameLen', v); }
    /** Property Name Character Index. Serialized as `:pPos` */
    public get propertyNamePosition(): UInt32Value | undefined { return this._g(':pPos'); }
    public set propertyNamePosition(v: UInt32Value | undefined) { this._s(':pPos', v); }
    /** Property Name Length. Serialized as `:pLen` */
    public get propertyNameLength(): UInt32Value | undefined { return this._g(':pLen'); }
    public set propertyNameLength(v: UInt32Value | undefined) { this._s(':pLen', v); }
    /** Level Index. Serialized as `:level` */
    public get level(): UInt32Value | undefined { return this._g(':level'); }
    public set level(v: UInt32Value | undefined) { this._s(':level', v); }
    /** Field Index. Serialized as `:field` */
    public get field(): UInt32Value | undefined { return this._g(':field'); }
    public set field(v: UInt32Value | undefined) { this._s(':field', v); }

}
/** Defines the HierarchyUsageType Class. */
export abstract class HierarchyUsageType extends OxmlLeafElement {

    public static override _A = [':hierarchyUsage',];
    /** Hierarchy Usage. Serialized as `:hierarchyUsage` */
    public get value(): Int32Value | undefined { return this._g(':hierarchyUsage'); }
    public set value(v: Int32Value | undefined) { this._s(':hierarchyUsage', v); }

}
/** Column OLAP Hierarchies. Serialized as `x:colHierarchyUsage` */
export class ColumnHierarchyUsage extends HierarchyUsageType {

    public static override _Q = 'x:colHierarchyUsage';

}
/** Row OLAP Hierarchies. Serialized as `x:rowHierarchyUsage` */
export class RowHierarchyUsage extends HierarchyUsageType {

    public static override _Q = 'x:rowHierarchyUsage';

}
/** OLAP Hierarchy. Serialized as `x:pivotHierarchy` */
export class PivotHierarchy extends OxmlCompositeElement<MemberProperties | Members | PivotHierarchyExtensionList> {

    public static override _Q = 'x:pivotHierarchy';
    public static override _A = [':outline',':multipleItemSelectionAllowed',':subtotalTop',':showInFieldList',':dragToRow',':dragToCol',':dragToPage',':dragToData',':dragOff',':includeNewItemsInFilter',':caption',];
    /** Outline New Levels. Serialized as `:outline` */
    public get outline(): BooleanValue | undefined { return this._g(':outline'); }
    public set outline(v: BooleanValue | undefined) { this._s(':outline', v); }
    /** Multiple Field Filters. Serialized as `:multipleItemSelectionAllowed` */
    public get multipleItemSelectionAllowed(): BooleanValue | undefined { return this._g(':multipleItemSelectionAllowed'); }
    public set multipleItemSelectionAllowed(v: BooleanValue | undefined) { this._s(':multipleItemSelectionAllowed', v); }
    /** New Levels Subtotals At Top. Serialized as `:subtotalTop` */
    public get subtotalTop(): BooleanValue | undefined { return this._g(':subtotalTop'); }
    public set subtotalTop(v: BooleanValue | undefined) { this._s(':subtotalTop', v); }
    /** Show In Field List. Serialized as `:showInFieldList` */
    public get showInFieldList(): BooleanValue | undefined { return this._g(':showInFieldList'); }
    public set showInFieldList(v: BooleanValue | undefined) { this._s(':showInFieldList', v); }
    /** Drag To Row. Serialized as `:dragToRow` */
    public get dragToRow(): BooleanValue | undefined { return this._g(':dragToRow'); }
    public set dragToRow(v: BooleanValue | undefined) { this._s(':dragToRow', v); }
    /** Drag To Column. Serialized as `:dragToCol` */
    public get dragToColumn(): BooleanValue | undefined { return this._g(':dragToCol'); }
    public set dragToColumn(v: BooleanValue | undefined) { this._s(':dragToCol', v); }
    /** Drag to Page. Serialized as `:dragToPage` */
    public get dragToPage(): BooleanValue | undefined { return this._g(':dragToPage'); }
    public set dragToPage(v: BooleanValue | undefined) { this._s(':dragToPage', v); }
    /** Drag To Data. Serialized as `:dragToData` */
    public get dragToData(): BooleanValue | undefined { return this._g(':dragToData'); }
    public set dragToData(v: BooleanValue | undefined) { this._s(':dragToData', v); }
    /** Drag Off. Serialized as `:dragOff` */
    public get dragOff(): BooleanValue | undefined { return this._g(':dragOff'); }
    public set dragOff(v: BooleanValue | undefined) { this._s(':dragOff', v); }
    /** Inclusive Manual Filter. Serialized as `:includeNewItemsInFilter` */
    public get includeNewItemsInFilter(): BooleanValue | undefined { return this._g(':includeNewItemsInFilter'); }
    public set includeNewItemsInFilter(v: BooleanValue | undefined) { this._s(':includeNewItemsInFilter', v); }
    /** Hierarchy Caption. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** OLAP Member Properties. */
    public get memberProperties(): MemberProperties | undefined { return this._f(MemberProperties); }

}
/** PivotChart Format. Serialized as `x:chartFormat` */
export class ChartFormat extends OxmlCompositeElement<PivotArea> {

    public static override _Q = 'x:chartFormat';
    public static override _A = [':chart',':format',':series',];
    /** Chart Index. Serialized as `:chart` */
    public get chart(): UInt32Value | undefined { return this._g(':chart'); }
    public set chart(v: UInt32Value | undefined) { this._s(':chart', v); }
    /** Pivot Format Id. Serialized as `:format` */
    public get format(): UInt32Value | undefined { return this._g(':format'); }
    public set format(v: UInt32Value | undefined) { this._s(':format', v); }
    /** Series Format. Serialized as `:series` */
    public get series(): BooleanValue | undefined { return this._g(':series'); }
    public set series(v: BooleanValue | undefined) { this._s(':series', v); }
    /** Pivot Table Location Rule. */
    public get pivotArea(): PivotArea | undefined { return this._f(PivotArea); }

}
/** Pivot Areas. Serialized as `x:pivotAreas` */
export class PivotAreas extends OxmlCompositeElement<PivotArea> {

    public static override _Q = 'x:pivotAreas';
    public static override _A = [':count',];
    /** Pivot Area Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Conditional Formatting. Serialized as `x:conditionalFormat` */
export class ConditionalFormat extends OxmlCompositeElement<PivotAreas | ExtensionList> {

    public static override _Q = 'x:conditionalFormat';
    public static override _A = [':scope',':type',':priority',];
    /** Conditional Formatting Scope. Serialized as `:scope` */
    public get scope(): ScopeValues | undefined { return this._g(':scope'); }
    public set scope(v: ScopeValues | undefined) { this._s(':scope', v); }
    /** Conditional Formatting Rule Type. Serialized as `:type` */
    public get type(): RuleValues | undefined { return this._g(':type'); }
    public set type(v: RuleValues | undefined) { this._s(':type', v); }
    /** Priority. Serialized as `:priority` */
    public get priority(): UInt32Value | undefined { return this._g(':priority'); }
    public set priority(v: UInt32Value | undefined) { this._s(':priority', v); }
    /** Pivot Areas. */
    public get pivotAreas(): PivotAreas | undefined { return this._f(PivotAreas); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** PivotTable Format. Serialized as `x:format` */
export class Format extends OxmlCompositeElement<PivotArea | ExtensionList> {

    public static override _Q = 'x:format';
    public static override _A = [':action',':dxfId',];
    /** Format Action. Serialized as `:action` */
    public get action(): FormatActionValues | undefined { return this._g(':action'); }
    public set action(v: FormatActionValues | undefined) { this._s(':action', v); }
    /** Format Id. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }
    /** Pivot Table Location. */
    public get pivotArea(): PivotArea | undefined { return this._f(PivotArea); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Row Items. Serialized as `x:field` */
export class Field extends OxmlLeafElement {

    public static override _Q = 'x:field';
    public static override _A = [':x',];
    /** Field Index. Serialized as `:x` */
    public get index(): Int32Value | undefined { return this._g(':x'); }
    public set index(v: Int32Value | undefined) { this._s(':x', v); }

}
/** Row Items. Serialized as `x:i` */
export class RowItem extends OxmlCompositeElement<MemberPropertyIndex> {

    public static override _Q = 'x:i';
    public static override _A = [':t',':r',':i',];
    /** Item Type. Serialized as `:t` */
    public get itemType(): ItemValues | undefined { return this._g(':t'); }
    public set itemType(v: ItemValues | undefined) { this._s(':t', v); }
    /** Repeated Items Count. Serialized as `:r` */
    public get repeatedItemCount(): UInt32Value | undefined { return this._g(':r'); }
    public set repeatedItemCount(v: UInt32Value | undefined) { this._s(':r', v); }
    /** Data Field Index. Serialized as `:i` */
    public get index(): UInt32Value | undefined { return this._g(':i'); }
    public set index(v: UInt32Value | undefined) { this._s(':i', v); }

}
/** Data Field Item. Serialized as `x:dataField` */
export class DataField extends OxmlCompositeElement<DataFieldExtensionList> {

    public static override _Q = 'x:dataField';
    public static override _A = [':name',':fld',':subtotal',':showDataAs',':baseField',':baseItem',':numFmtId',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** fld. Serialized as `:fld` */
    public get field(): UInt32Value | undefined { return this._g(':fld'); }
    public set field(v: UInt32Value | undefined) { this._s(':fld', v); }
    /** subtotal. Serialized as `:subtotal` */
    public get subtotal(): DataConsolidateFunctionValues | undefined { return this._g(':subtotal'); }
    public set subtotal(v: DataConsolidateFunctionValues | undefined) { this._s(':subtotal', v); }
    /** showDataAs. Serialized as `:showDataAs` */
    public get showDataAs(): ShowDataAsValues | undefined { return this._g(':showDataAs'); }
    public set showDataAs(v: ShowDataAsValues | undefined) { this._s(':showDataAs', v); }
    /** baseField. Serialized as `:baseField` */
    public get baseField(): Int32Value | undefined { return this._g(':baseField'); }
    public set baseField(v: Int32Value | undefined) { this._s(':baseField', v); }
    /** baseItem. Serialized as `:baseItem` */
    public get baseItem(): UInt32Value | undefined { return this._g(':baseItem'); }
    public set baseItem(v: UInt32Value | undefined) { this._s(':baseItem', v); }
    /** numFmtId. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** Returns DataFieldExtensionList. */
    public get dataFieldExtensionList(): DataFieldExtensionList | undefined { return this._f(DataFieldExtensionList); }

}
/** PivotTable Field Item. Serialized as `x:item` */
export class Item extends OxmlLeafElement {

    public static override _Q = 'x:item';
    public static override _A = [':n',':t',':h',':s',':sd',':f',':m',':c',':x',':d',':e',];
    /** Item User Caption. Serialized as `:n` */
    public get itemName(): StringValue | undefined { return this._g(':n'); }
    public set itemName(v: StringValue | undefined) { this._s(':n', v); }
    /** Item Type. Serialized as `:t` */
    public get itemType(): ItemValues | undefined { return this._g(':t'); }
    public set itemType(v: ItemValues | undefined) { this._s(':t', v); }
    /** Hidden. Serialized as `:h` */
    public get hidden(): BooleanValue | undefined { return this._g(':h'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':h', v); }
    /** Character. Serialized as `:s` */
    public get hasStringVlue(): BooleanValue | undefined { return this._g(':s'); }
    public set hasStringVlue(v: BooleanValue | undefined) { this._s(':s', v); }
    /** Hide Details. Serialized as `:sd` */
    public get hideDetails(): BooleanValue | undefined { return this._g(':sd'); }
    public set hideDetails(v: BooleanValue | undefined) { this._s(':sd', v); }
    /** Calculated Member. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Missing. Serialized as `:m` */
    public get missing(): BooleanValue | undefined { return this._g(':m'); }
    public set missing(v: BooleanValue | undefined) { this._s(':m', v); }
    /** Child Items. Serialized as `:c` */
    public get childItems(): BooleanValue | undefined { return this._g(':c'); }
    public set childItems(v: BooleanValue | undefined) { this._s(':c', v); }
    /** Item Index. Serialized as `:x` */
    public get index(): UInt32Value | undefined { return this._g(':x'); }
    public set index(v: UInt32Value | undefined) { this._s(':x', v); }
    /** Expanded. Serialized as `:d` */
    public get expanded(): BooleanValue | undefined { return this._g(':d'); }
    public set expanded(v: BooleanValue | undefined) { this._s(':d', v); }
    /** Drill Across Attributes. Serialized as `:e` */
    public get drillAcrossAttributes(): BooleanValue | undefined { return this._g(':e'); }
    public set drillAcrossAttributes(v: BooleanValue | undefined) { this._s(':e', v); }

}
/** PivotTable Field. Serialized as `x:pivotField` */
export class PivotField extends OxmlCompositeElement<Items | AutoSortScope | PivotFieldExtensionList> {

    public static override _Q = 'x:pivotField';
    public static override _A = [':name',':axis',':dataField',':subtotalCaption',':showDropDowns',':hiddenLevel',':uniqueMemberProperty',':compact',':allDrilled',':numFmtId',':outline',':subtotalTop',':dragToRow',':dragToCol',':multipleItemSelectionAllowed',':dragToPage',':dragToData',':dragOff',':showAll',':insertBlankRow',':serverField',':insertPageBreak',':autoShow',':topAutoShow',':hideNewItems',':measureFilter',':includeNewItemsInFilter',':itemPageCount',':sortType',':dataSourceSort',':nonAutoSortDefault',':rankBy',':defaultSubtotal',':sumSubtotal',':countASubtotal',':avgSubtotal',':maxSubtotal',':minSubtotal',':productSubtotal',':countSubtotal',':stdDevSubtotal',':stdDevPSubtotal',':varSubtotal',':varPSubtotal',':showPropCell',':showPropTip',':showPropAsCaption',':defaultAttributeDrillState',];
    /** Field Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Axis. Serialized as `:axis` */
    public get axis(): PivotTableAxisValues | undefined { return this._g(':axis'); }
    public set axis(v: PivotTableAxisValues | undefined) { this._s(':axis', v); }
    /** Data Field. Serialized as `:dataField` */
    public get dataField(): BooleanValue | undefined { return this._g(':dataField'); }
    public set dataField(v: BooleanValue | undefined) { this._s(':dataField', v); }
    /** Custom Subtotal Caption. Serialized as `:subtotalCaption` */
    public get subtotalCaption(): StringValue | undefined { return this._g(':subtotalCaption'); }
    public set subtotalCaption(v: StringValue | undefined) { this._s(':subtotalCaption', v); }
    /** Show PivotField Header Drop Downs. Serialized as `:showDropDowns` */
    public get showDropDowns(): BooleanValue | undefined { return this._g(':showDropDowns'); }
    public set showDropDowns(v: BooleanValue | undefined) { this._s(':showDropDowns', v); }
    /** Hidden Level. Serialized as `:hiddenLevel` */
    public get hiddenLevel(): BooleanValue | undefined { return this._g(':hiddenLevel'); }
    public set hiddenLevel(v: BooleanValue | undefined) { this._s(':hiddenLevel', v); }
    /** Unique Member Property. Serialized as `:uniqueMemberProperty` */
    public get uniqueMemberProperty(): StringValue | undefined { return this._g(':uniqueMemberProperty'); }
    public set uniqueMemberProperty(v: StringValue | undefined) { this._s(':uniqueMemberProperty', v); }
    /** Compact. Serialized as `:compact` */
    public get compact(): BooleanValue | undefined { return this._g(':compact'); }
    public set compact(v: BooleanValue | undefined) { this._s(':compact', v); }
    /** All Items Expanded. Serialized as `:allDrilled` */
    public get allDrilled(): BooleanValue | undefined { return this._g(':allDrilled'); }
    public set allDrilled(v: BooleanValue | undefined) { this._s(':allDrilled', v); }
    /** Number Format Id. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** Outline Items. Serialized as `:outline` */
    public get outline(): BooleanValue | undefined { return this._g(':outline'); }
    public set outline(v: BooleanValue | undefined) { this._s(':outline', v); }
    /** Subtotals At Top. Serialized as `:subtotalTop` */
    public get subtotalTop(): BooleanValue | undefined { return this._g(':subtotalTop'); }
    public set subtotalTop(v: BooleanValue | undefined) { this._s(':subtotalTop', v); }
    /** Drag To Row. Serialized as `:dragToRow` */
    public get dragToRow(): BooleanValue | undefined { return this._g(':dragToRow'); }
    public set dragToRow(v: BooleanValue | undefined) { this._s(':dragToRow', v); }
    /** Drag To Column. Serialized as `:dragToCol` */
    public get dragToColumn(): BooleanValue | undefined { return this._g(':dragToCol'); }
    public set dragToColumn(v: BooleanValue | undefined) { this._s(':dragToCol', v); }
    /** Multiple Field Filters. Serialized as `:multipleItemSelectionAllowed` */
    public get multipleItemSelectionAllowed(): BooleanValue | undefined { return this._g(':multipleItemSelectionAllowed'); }
    public set multipleItemSelectionAllowed(v: BooleanValue | undefined) { this._s(':multipleItemSelectionAllowed', v); }
    /** Drag Field to Page. Serialized as `:dragToPage` */
    public get dragToPage(): BooleanValue | undefined { return this._g(':dragToPage'); }
    public set dragToPage(v: BooleanValue | undefined) { this._s(':dragToPage', v); }
    /** Field Can Drag to Data. Serialized as `:dragToData` */
    public get dragToData(): BooleanValue | undefined { return this._g(':dragToData'); }
    public set dragToData(v: BooleanValue | undefined) { this._s(':dragToData', v); }
    /** Drag Off. Serialized as `:dragOff` */
    public get dragOff(): BooleanValue | undefined { return this._g(':dragOff'); }
    public set dragOff(v: BooleanValue | undefined) { this._s(':dragOff', v); }
    /** Show All Items. Serialized as `:showAll` */
    public get showAll(): BooleanValue | undefined { return this._g(':showAll'); }
    public set showAll(v: BooleanValue | undefined) { this._s(':showAll', v); }
    /** Insert Blank Row. Serialized as `:insertBlankRow` */
    public get insertBlankRow(): BooleanValue | undefined { return this._g(':insertBlankRow'); }
    public set insertBlankRow(v: BooleanValue | undefined) { this._s(':insertBlankRow', v); }
    /** Server-based Page Field. Serialized as `:serverField` */
    public get serverField(): BooleanValue | undefined { return this._g(':serverField'); }
    public set serverField(v: BooleanValue | undefined) { this._s(':serverField', v); }
    /** Insert Item Page Break. Serialized as `:insertPageBreak` */
    public get insertPageBreak(): BooleanValue | undefined { return this._g(':insertPageBreak'); }
    public set insertPageBreak(v: BooleanValue | undefined) { this._s(':insertPageBreak', v); }
    /** Auto Show. Serialized as `:autoShow` */
    public get autoShow(): BooleanValue | undefined { return this._g(':autoShow'); }
    public set autoShow(v: BooleanValue | undefined) { this._s(':autoShow', v); }
    /** Top Auto Show. Serialized as `:topAutoShow` */
    public get topAutoShow(): BooleanValue | undefined { return this._g(':topAutoShow'); }
    public set topAutoShow(v: BooleanValue | undefined) { this._s(':topAutoShow', v); }
    /** Hide New Items. Serialized as `:hideNewItems` */
    public get hideNewItems(): BooleanValue | undefined { return this._g(':hideNewItems'); }
    public set hideNewItems(v: BooleanValue | undefined) { this._s(':hideNewItems', v); }
    /** Measure Filter. Serialized as `:measureFilter` */
    public get measureFilter(): BooleanValue | undefined { return this._g(':measureFilter'); }
    public set measureFilter(v: BooleanValue | undefined) { this._s(':measureFilter', v); }
    /** Inclusive Manual Filter. Serialized as `:includeNewItemsInFilter` */
    public get includeNewItemsInFilter(): BooleanValue | undefined { return this._g(':includeNewItemsInFilter'); }
    public set includeNewItemsInFilter(v: BooleanValue | undefined) { this._s(':includeNewItemsInFilter', v); }
    /** Items Per Page Count. Serialized as `:itemPageCount` */
    public get itemPageCount(): UInt32Value | undefined { return this._g(':itemPageCount'); }
    public set itemPageCount(v: UInt32Value | undefined) { this._s(':itemPageCount', v); }
    /** Auto Sort Type. Serialized as `:sortType` */
    public get sortType(): FieldSortValues | undefined { return this._g(':sortType'); }
    public set sortType(v: FieldSortValues | undefined) { this._s(':sortType', v); }
    /** Data Source Sort. Serialized as `:dataSourceSort` */
    public get dataSourceSort(): BooleanValue | undefined { return this._g(':dataSourceSort'); }
    public set dataSourceSort(v: BooleanValue | undefined) { this._s(':dataSourceSort', v); }
    /** Auto Sort. Serialized as `:nonAutoSortDefault` */
    public get nonAutoSortDefault(): BooleanValue | undefined { return this._g(':nonAutoSortDefault'); }
    public set nonAutoSortDefault(v: BooleanValue | undefined) { this._s(':nonAutoSortDefault', v); }
    /** Auto Show Rank By. Serialized as `:rankBy` */
    public get rankBy(): UInt32Value | undefined { return this._g(':rankBy'); }
    public set rankBy(v: UInt32Value | undefined) { this._s(':rankBy', v); }
    /** Show Default Subtotal. Serialized as `:defaultSubtotal` */
    public get defaultSubtotal(): BooleanValue | undefined { return this._g(':defaultSubtotal'); }
    public set defaultSubtotal(v: BooleanValue | undefined) { this._s(':defaultSubtotal', v); }
    /** Sum Subtotal. Serialized as `:sumSubtotal` */
    public get sumSubtotal(): BooleanValue | undefined { return this._g(':sumSubtotal'); }
    public set sumSubtotal(v: BooleanValue | undefined) { this._s(':sumSubtotal', v); }
    /** CountA. Serialized as `:countASubtotal` */
    public get countASubtotal(): BooleanValue | undefined { return this._g(':countASubtotal'); }
    public set countASubtotal(v: BooleanValue | undefined) { this._s(':countASubtotal', v); }
    /** Average. Serialized as `:avgSubtotal` */
    public get averageSubTotal(): BooleanValue | undefined { return this._g(':avgSubtotal'); }
    public set averageSubTotal(v: BooleanValue | undefined) { this._s(':avgSubtotal', v); }
    /** Max Subtotal. Serialized as `:maxSubtotal` */
    public get maxSubtotal(): BooleanValue | undefined { return this._g(':maxSubtotal'); }
    public set maxSubtotal(v: BooleanValue | undefined) { this._s(':maxSubtotal', v); }
    /** Min Subtotal. Serialized as `:minSubtotal` */
    public get minSubtotal(): BooleanValue | undefined { return this._g(':minSubtotal'); }
    public set minSubtotal(v: BooleanValue | undefined) { this._s(':minSubtotal', v); }
    /** Product Subtotal. Serialized as `:productSubtotal` */
    public get applyProductInSubtotal(): BooleanValue | undefined { return this._g(':productSubtotal'); }
    public set applyProductInSubtotal(v: BooleanValue | undefined) { this._s(':productSubtotal', v); }
    /** Count. Serialized as `:countSubtotal` */
    public get countSubtotal(): BooleanValue | undefined { return this._g(':countSubtotal'); }
    public set countSubtotal(v: BooleanValue | undefined) { this._s(':countSubtotal', v); }
    /** StdDev Subtotal. Serialized as `:stdDevSubtotal` */
    public get applyStandardDeviationInSubtotal(): BooleanValue | undefined { return this._g(':stdDevSubtotal'); }
    public set applyStandardDeviationInSubtotal(v: BooleanValue | undefined) { this._s(':stdDevSubtotal', v); }
    /** StdDevP Subtotal. Serialized as `:stdDevPSubtotal` */
    public get applyStandardDeviationPInSubtotal(): BooleanValue | undefined { return this._g(':stdDevPSubtotal'); }
    public set applyStandardDeviationPInSubtotal(v: BooleanValue | undefined) { this._s(':stdDevPSubtotal', v); }
    /** Variance Subtotal. Serialized as `:varSubtotal` */
    public get applyVarianceInSubtotal(): BooleanValue | undefined { return this._g(':varSubtotal'); }
    public set applyVarianceInSubtotal(v: BooleanValue | undefined) { this._s(':varSubtotal', v); }
    /** VarP Subtotal. Serialized as `:varPSubtotal` */
    public get applyVariancePInSubtotal(): BooleanValue | undefined { return this._g(':varPSubtotal'); }
    public set applyVariancePInSubtotal(v: BooleanValue | undefined) { this._s(':varPSubtotal', v); }
    /** Show Member Property in Cell. Serialized as `:showPropCell` */
    public get showPropCell(): BooleanValue | undefined { return this._g(':showPropCell'); }
    public set showPropCell(v: BooleanValue | undefined) { this._s(':showPropCell', v); }
    /** Show Member Property ToolTip. Serialized as `:showPropTip` */
    public get showPropertyTooltip(): BooleanValue | undefined { return this._g(':showPropTip'); }
    public set showPropertyTooltip(v: BooleanValue | undefined) { this._s(':showPropTip', v); }
    /** Show As Caption. Serialized as `:showPropAsCaption` */
    public get showPropAsCaption(): BooleanValue | undefined { return this._g(':showPropAsCaption'); }
    public set showPropAsCaption(v: BooleanValue | undefined) { this._s(':showPropAsCaption', v); }
    /** Drill State. Serialized as `:defaultAttributeDrillState` */
    public get defaultAttributeDrillState(): BooleanValue | undefined { return this._g(':defaultAttributeDrillState'); }
    public set defaultAttributeDrillState(v: BooleanValue | undefined) { this._s(':defaultAttributeDrillState', v); }
    /** Field Items. */
    public get items(): Items | undefined { return this._f(Items); }
    /** AutoSort Scope. */
    public get autoSortScope(): AutoSortScope | undefined { return this._f(AutoSortScope); }
    /** Future Feature Data Storage Area. */
    public get pivotFieldExtensionList(): PivotFieldExtensionList | undefined { return this._f(PivotFieldExtensionList); }

}
/** Calculated Member. Serialized as `x:calculatedMember` */
export class CalculatedMember extends OxmlCompositeElement<CalculatedMemberExtensionList> {

    public static override _Q = 'x:calculatedMember';
    public static override _A = [':name',':mdx',':memberName',':hierarchy',':parent',':solveOrder',':set',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** mdx. Serialized as `:mdx` */
    public get mdx(): StringValue | undefined { return this._g(':mdx'); }
    public set mdx(v: StringValue | undefined) { this._s(':mdx', v); }
    /** memberName. Serialized as `:memberName` */
    public get memberName(): StringValue | undefined { return this._g(':memberName'); }
    public set memberName(v: StringValue | undefined) { this._s(':memberName', v); }
    /** hierarchy. Serialized as `:hierarchy` */
    public get hierarchy(): StringValue | undefined { return this._g(':hierarchy'); }
    public set hierarchy(v: StringValue | undefined) { this._s(':hierarchy', v); }
    /** parent. Serialized as `:parent` */
    public get parentName(): StringValue | undefined { return this._g(':parent'); }
    public set parentName(v: StringValue | undefined) { this._s(':parent', v); }
    /** solveOrder. Serialized as `:solveOrder` */
    public get solveOrder(): Int32Value | undefined { return this._g(':solveOrder'); }
    public set solveOrder(v: Int32Value | undefined) { this._s(':solveOrder', v); }
    /** set. Serialized as `:set` */
    public get set(): BooleanValue | undefined { return this._g(':set'); }
    public set set(v: BooleanValue | undefined) { this._s(':set', v); }
    /** Returns CalculatedMemberExtensionList. */
    public get calculatedMemberExtensionList(): CalculatedMemberExtensionList | undefined { return this._f(CalculatedMemberExtensionList); }

}
/** Calculated Item Location. Serialized as `x:pivotArea` */
export class PivotArea extends OxmlCompositeElement<PivotAreaReferences | ExtensionList> {

    public static override _Q = 'x:pivotArea';
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
    public get pivotAreaReferences(): PivotAreaReferences | undefined { return this._f(PivotAreaReferences); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Calculated Item. Serialized as `x:calculatedItem` */
export class CalculatedItem extends OxmlCompositeElement<PivotArea | ExtensionList> {

    public static override _Q = 'x:calculatedItem';
    public static override _A = [':field',':formula',];
    /** Field Index. Serialized as `:field` */
    public get field(): UInt32Value | undefined { return this._g(':field'); }
    public set field(v: UInt32Value | undefined) { this._s(':field', v); }
    /** Calculated Item Formula. Serialized as `:formula` */
    public get formula(): StringValue | undefined { return this._g(':formula'); }
    public set formula(v: StringValue | undefined) { this._s(':formula', v); }
    /** Calculated Item Location. */
    public get pivotArea(): PivotArea | undefined { return this._f(PivotArea); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Query. Serialized as `x:query` */
export class Query extends OxmlCompositeElement<Tuples> {

    public static override _Q = 'x:query';
    public static override _A = [':mdx',];
    /** MDX Query String. Serialized as `:mdx` */
    public get mdx(): StringValue | undefined { return this._g(':mdx'); }
    public set mdx(v: StringValue | undefined) { this._s(':mdx', v); }
    /** Tuples. */
    public get tuples(): Tuples | undefined { return this._f(Tuples); }

}
/** OLAP Set. Serialized as `x:set` */
export class TupleSet extends OxmlCompositeElement<Tuples | SortByTuple> {

    public static override _Q = 'x:set';
    public static override _A = [':count',':maxRank',':setDefinition',':sortType',':queryFailed',];
    /** Number of Tuples. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Maximum Rank Requested. Serialized as `:maxRank` */
    public get maxRank(): Int32Value | undefined { return this._g(':maxRank'); }
    public set maxRank(v: Int32Value | undefined) { this._s(':maxRank', v); }
    /** MDX Set Definition. Serialized as `:setDefinition` */
    public get setDefinition(): StringValue | undefined { return this._g(':setDefinition'); }
    public set setDefinition(v: StringValue | undefined) { this._s(':setDefinition', v); }
    /** Set Sort Order. Serialized as `:sortType` */
    public get sortType(): SortValues | undefined { return this._g(':sortType'); }
    public set sortType(v: SortValues | undefined) { this._s(':sortType', v); }
    /** Query Failed. Serialized as `:queryFailed` */
    public get queryFailed(): BooleanValue | undefined { return this._g(':queryFailed'); }
    public set queryFailed(v: BooleanValue | undefined) { this._s(':queryFailed', v); }

}
/** Tuple. Serialized as `x:tpl` */
export class Tuple extends OxmlLeafElement {

    public static override _Q = 'x:tpl';
    public static override _A = [':fld',':hier',':item',];
    /** Field Index. Serialized as `:fld` */
    public get field(): UInt32Value | undefined { return this._g(':fld'); }
    public set field(v: UInt32Value | undefined) { this._s(':fld', v); }
    /** Hierarchy Index. Serialized as `:hier` */
    public get hierarchy(): UInt32Value | undefined { return this._g(':hier'); }
    public set hierarchy(v: UInt32Value | undefined) { this._s(':hier', v); }
    /** Item Index. Serialized as `:item` */
    public get item(): UInt32Value | undefined { return this._g(':item'); }
    public set item(v: UInt32Value | undefined) { this._s(':item', v); }

}
/** Server Format. Serialized as `x:serverFormat` */
export class ServerFormat extends OxmlLeafElement {

    public static override _Q = 'x:serverFormat';
    public static override _A = [':culture',':format',];
    /** Culture. Serialized as `:culture` */
    public get culture(): StringValue | undefined { return this._g(':culture'); }
    public set culture(v: StringValue | undefined) { this._s(':culture', v); }
    /** Format. Serialized as `:format` */
    public get format(): StringValue | undefined { return this._g(':format'); }
    public set format(v: StringValue | undefined) { this._s(':format', v); }

}
/** Server Formats. Serialized as `x:serverFormats` */
export class ServerFormats extends OxmlCompositeElement<ServerFormat> {

    public static override _Q = 'x:serverFormats';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** OLAP Query Cache. Serialized as `x:queryCache` */
export class QueryCache extends OxmlCompositeElement<Query> {

    public static override _Q = 'x:queryCache';
    public static override _A = [':count',];
    /** Cached Query Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Sets. Serialized as `x:sets` */
export class Sets extends OxmlCompositeElement<TupleSet> {

    public static override _Q = 'x:sets';
    public static override _A = [':count',];
    /** Tuple Set Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Entries. Serialized as `x:entries` */
export class Entries extends OxmlCompositeElement<MissingItem | NumberItem | ErrorItem | StringItem> {

    public static override _Q = 'x:entries';
    public static override _A = [':count',];
    /** Tuple Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** OLAP Group Member. Serialized as `x:groupMember` */
export class GroupMember extends OxmlLeafElement {

    public static override _Q = 'x:groupMember';
    public static override _A = [':uniqueName',':group',];
    /** Group Member Unique Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** Group. Serialized as `:group` */
    public get group(): BooleanValue | undefined { return this._g(':group'); }
    public set group(v: BooleanValue | undefined) { this._s(':group', v); }

}
/** OLAP Group Members. Serialized as `x:groupMembers` */
export class GroupMembers extends OxmlCompositeElement<GroupMember> {

    public static override _Q = 'x:groupMembers';
    public static override _A = [':count',];
    /** Group Member Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** OLAP Group. Serialized as `x:group` */
export class Group extends OxmlCompositeElement<GroupMembers> {

    public static override _Q = 'x:group';
    public static override _A = [':name',':uniqueName',':caption',':uniqueParent',':id',];
    /** Group Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Unique Group Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** Group Caption. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** Parent Unique Name. Serialized as `:uniqueParent` */
    public get uniqueParent(): StringValue | undefined { return this._g(':uniqueParent'); }
    public set uniqueParent(v: StringValue | undefined) { this._s(':uniqueParent', v); }
    /** Group Id. Serialized as `:id` */
    public get id(): Int32Value | undefined { return this._g(':id'); }
    public set id(v: Int32Value | undefined) { this._s(':id', v); }
    /** OLAP Group Members. */
    public get groupMembers(): GroupMembers | undefined { return this._f(GroupMembers); }

}
/** OLAP Level Groups. Serialized as `x:groups` */
export class Groups extends OxmlCompositeElement<Group> {

    public static override _Q = 'x:groups';
    public static override _A = [':count',];
    /** Level Group Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** OLAP Grouping Levels. Serialized as `x:groupLevel` */
export class GroupLevel extends OxmlCompositeElement<Groups | ExtensionList> {

    public static override _Q = 'x:groupLevel';
    public static override _A = [':uniqueName',':caption',':user',':customRollUp',];
    /** Unique Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** Grouping Level Display Name. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** User-Defined Group Level. Serialized as `:user` */
    public get user(): BooleanValue | undefined { return this._g(':user'); }
    public set user(v: BooleanValue | undefined) { this._s(':user', v); }
    /** Custom Roll Up. Serialized as `:customRollUp` */
    public get customRollUp(): BooleanValue | undefined { return this._g(':customRollUp'); }
    public set customRollUp(v: BooleanValue | undefined) { this._s(':customRollUp', v); }
    /** OLAP Level Groups. */
    public get groups(): Groups | undefined { return this._f(Groups); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** PivotCache Field Id. Serialized as `x:fieldUsage` */
export class FieldUsage extends OxmlLeafElement {

    public static override _Q = 'x:fieldUsage';
    public static override _A = [':x',];
    /** Field Index. Serialized as `:x` */
    public get index(): Int32Value | undefined { return this._g(':x'); }
    public set index(v: Int32Value | undefined) { this._s(':x', v); }

}
/** OLAP KPI. Serialized as `x:kpi` */
export class Kpi extends OxmlLeafElement {

    public static override _Q = 'x:kpi';
    public static override _A = [':uniqueName',':caption',':displayFolder',':measureGroup',':parent',':value',':goal',':status',':trend',':weight',];
    /** KPI Unique Name. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** KPI Display Name. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** KPI Display Folder. Serialized as `:displayFolder` */
    public get displayFolder(): StringValue | undefined { return this._g(':displayFolder'); }
    public set displayFolder(v: StringValue | undefined) { this._s(':displayFolder', v); }
    /** KPI Measure Group Name. Serialized as `:measureGroup` */
    public get measureGroup(): StringValue | undefined { return this._g(':measureGroup'); }
    public set measureGroup(v: StringValue | undefined) { this._s(':measureGroup', v); }
    /** Parent KPI. Serialized as `:parent` */
    public get parentKpi(): StringValue | undefined { return this._g(':parent'); }
    public set parentKpi(v: StringValue | undefined) { this._s(':parent', v); }
    /** KPI Value Unique Name. Serialized as `:value` */
    public get value(): StringValue | undefined { return this._g(':value'); }
    public set value(v: StringValue | undefined) { this._s(':value', v); }
    /** KPI Goal Unique Name. Serialized as `:goal` */
    public get goal(): StringValue | undefined { return this._g(':goal'); }
    public set goal(v: StringValue | undefined) { this._s(':goal', v); }
    /** KPI Status Unique Name. Serialized as `:status` */
    public get status(): StringValue | undefined { return this._g(':status'); }
    public set status(v: StringValue | undefined) { this._s(':status', v); }
    /** KPI Trend Unique Name. Serialized as `:trend` */
    public get trend(): StringValue | undefined { return this._g(':trend'); }
    public set trend(v: StringValue | undefined) { this._s(':trend', v); }
    /** KPI Weight Unique Name. Serialized as `:weight` */
    public get weight(): StringValue | undefined { return this._g(':weight'); }
    public set weight(v: StringValue | undefined) { this._s(':weight', v); }

}
/** PivotCache Record. Serialized as `x:r` */
export class PivotCacheRecord extends OxmlCompositeElement<MissingItem | NumberItem | BooleanItem | ErrorItem | StringItem | DateTimeItem | FieldItem> {

    public static override _Q = 'x:r';

}
/** Defines the XType Class. */
export abstract class XType extends OxmlLeafElement {

    public static override _A = [':v',];
    /** Shared Items Index. Serialized as `:v` */
    public get val(): Int32Value | undefined { return this._g(':v'); }
    public set val(v: Int32Value | undefined) { this._s(':v', v); }

}
/** Defines the MemberPropertiesMap Class. Serialized as `x:mpMap` */
export class MemberPropertiesMap extends XType {

    public static override _Q = 'x:mpMap';

}
/** Member Property Indexes. Serialized as `x:x` */
export class MemberPropertyIndex extends XType {

    public static override _Q = 'x:x';

}
/** Defines the TuplesType Class. */
export abstract class TuplesType extends OxmlCompositeElement<Tuple> {

    public static override _A = [':c',];
    /** Member Name Count. Serialized as `:c` */
    public get memberNameCount(): UInt32Value | undefined { return this._g(':c'); }
    public set memberNameCount(v: UInt32Value | undefined) { this._s(':c', v); }

}
/** Sort By Tuple. Serialized as `x:sortByTuple` */
export class SortByTuple extends TuplesType {

    public static override _Q = 'x:sortByTuple';

}
/** Tuples. Serialized as `x:tpls` */
export class Tuples extends TuplesType {

    public static override _Q = 'x:tpls';

}
/** Date Time. Serialized as `x:d` */
export class DateTimeItem extends OxmlCompositeElement<MemberPropertyIndex> {

    public static override _Q = 'x:d';
    public static override _A = [':v',':u',':f',':c',':cp',];
    /** Value. Serialized as `:v` */
    public get val(): DateTimeValue | undefined { return this._g(':v'); }
    public set val(v: DateTimeValue | undefined) { this._s(':v', v); }
    /** Unused Item. Serialized as `:u` */
    public get unused(): BooleanValue | undefined { return this._g(':u'); }
    public set unused(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Calculated Item Value. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Caption. Serialized as `:c` */
    public get caption(): StringValue | undefined { return this._g(':c'); }
    public set caption(v: StringValue | undefined) { this._s(':c', v); }
    /** Member Property Count. Serialized as `:cp` */
    public get propertyCount(): UInt32Value | undefined { return this._g(':cp'); }
    public set propertyCount(v: UInt32Value | undefined) { this._s(':cp', v); }

}
/** Character Value. Serialized as `x:s` */
export class StringItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {

    public static override _Q = 'x:s';
    public static override _A = [':v',':u',':f',':c',':cp',':in',':bc',':fc',':i',':un',':st',':b',];
    /** Value. Serialized as `:v` */
    public get val(): StringValue | undefined { return this._g(':v'); }
    public set val(v: StringValue | undefined) { this._s(':v', v); }
    /** Unused Item. Serialized as `:u` */
    public get unused(): BooleanValue | undefined { return this._g(':u'); }
    public set unused(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Calculated Item. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Item Caption. Serialized as `:c` */
    public get caption(): StringValue | undefined { return this._g(':c'); }
    public set caption(v: StringValue | undefined) { this._s(':c', v); }
    /** Member Property Count. Serialized as `:cp` */
    public get propertyCount(): UInt32Value | undefined { return this._g(':cp'); }
    public set propertyCount(v: UInt32Value | undefined) { this._s(':cp', v); }
    /** Format Index. Serialized as `:in` */
    public get formatIndex(): UInt32Value | undefined { return this._g(':in'); }
    public set formatIndex(v: UInt32Value | undefined) { this._s(':in', v); }
    /** Background Color. Serialized as `:bc` */
    public get backgroundColor(): HexBinaryValue | undefined { return this._g(':bc'); }
    public set backgroundColor(v: HexBinaryValue | undefined) { this._s(':bc', v); }
    /** Foreground Color. Serialized as `:fc` */
    public get foregroundColor(): HexBinaryValue | undefined { return this._g(':fc'); }
    public set foregroundColor(v: HexBinaryValue | undefined) { this._s(':fc', v); }
    /** Italic. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** Underline. Serialized as `:un` */
    public get underline(): BooleanValue | undefined { return this._g(':un'); }
    public set underline(v: BooleanValue | undefined) { this._s(':un', v); }
    /** Strikethrough. Serialized as `:st` */
    public get strikethrough(): BooleanValue | undefined { return this._g(':st'); }
    public set strikethrough(v: BooleanValue | undefined) { this._s(':st', v); }
    /** Bold. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }

}
/** Error Value. Serialized as `x:e` */
export class ErrorItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {

    public static override _Q = 'x:e';
    public static override _A = [':v',':u',':f',':c',':cp',':in',':bc',':fc',':i',':un',':st',':b',];
    /** Value. Serialized as `:v` */
    public get val(): StringValue | undefined { return this._g(':v'); }
    public set val(v: StringValue | undefined) { this._s(':v', v); }
    /** Unused Item. Serialized as `:u` */
    public get unused(): BooleanValue | undefined { return this._g(':u'); }
    public set unused(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Calculated Item. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Item Caption. Serialized as `:c` */
    public get caption(): StringValue | undefined { return this._g(':c'); }
    public set caption(v: StringValue | undefined) { this._s(':c', v); }
    /** Member Property Count. Serialized as `:cp` */
    public get propertyCount(): UInt32Value | undefined { return this._g(':cp'); }
    public set propertyCount(v: UInt32Value | undefined) { this._s(':cp', v); }
    /** Format Index. Serialized as `:in` */
    public get formatIndex(): UInt32Value | undefined { return this._g(':in'); }
    public set formatIndex(v: UInt32Value | undefined) { this._s(':in', v); }
    /** background Color. Serialized as `:bc` */
    public get backgroundColor(): HexBinaryValue | undefined { return this._g(':bc'); }
    public set backgroundColor(v: HexBinaryValue | undefined) { this._s(':bc', v); }
    /** Foreground Color. Serialized as `:fc` */
    public get foregroundColor(): HexBinaryValue | undefined { return this._g(':fc'); }
    public set foregroundColor(v: HexBinaryValue | undefined) { this._s(':fc', v); }
    /** Italic. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** Underline. Serialized as `:un` */
    public get underline(): BooleanValue | undefined { return this._g(':un'); }
    public set underline(v: BooleanValue | undefined) { this._s(':un', v); }
    /** Strikethrough. Serialized as `:st` */
    public get strikethrough(): BooleanValue | undefined { return this._g(':st'); }
    public set strikethrough(v: BooleanValue | undefined) { this._s(':st', v); }
    /** Bold. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }
    /** Tuples. */
    public get tuples(): Tuples | undefined { return this._f(Tuples); }

}
/** Boolean. Serialized as `x:b` */
export class BooleanItem extends OxmlCompositeElement<MemberPropertyIndex> {

    public static override _Q = 'x:b';
    public static override _A = [':v',':u',':f',':c',':cp',];
    /** Value. Serialized as `:v` */
    public get val(): BooleanValue | undefined { return this._g(':v'); }
    public set val(v: BooleanValue | undefined) { this._s(':v', v); }
    /** Unused Item. Serialized as `:u` */
    public get unused(): BooleanValue | undefined { return this._g(':u'); }
    public set unused(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Calculated Item. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Caption. Serialized as `:c` */
    public get caption(): StringValue | undefined { return this._g(':c'); }
    public set caption(v: StringValue | undefined) { this._s(':c', v); }
    /** Member Property Count. Serialized as `:cp` */
    public get propertyCount(): UInt32Value | undefined { return this._g(':cp'); }
    public set propertyCount(v: UInt32Value | undefined) { this._s(':cp', v); }

}
/** Numeric. Serialized as `x:n` */
export class NumberItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {

    public static override _Q = 'x:n';
    public static override _A = [':v',':u',':f',':c',':cp',':in',':bc',':fc',':i',':un',':st',':b',];
    /** Value. Serialized as `:v` */
    public get val(): DoubleValue | undefined { return this._g(':v'); }
    public set val(v: DoubleValue | undefined) { this._s(':v', v); }
    /** Unused Item. Serialized as `:u` */
    public get unused(): BooleanValue | undefined { return this._g(':u'); }
    public set unused(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Calculated Item. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Caption. Serialized as `:c` */
    public get caption(): StringValue | undefined { return this._g(':c'); }
    public set caption(v: StringValue | undefined) { this._s(':c', v); }
    /** Member Property Count. Serialized as `:cp` */
    public get propertyCount(): UInt32Value | undefined { return this._g(':cp'); }
    public set propertyCount(v: UInt32Value | undefined) { this._s(':cp', v); }
    /** Format Index. Serialized as `:in` */
    public get formatIndex(): UInt32Value | undefined { return this._g(':in'); }
    public set formatIndex(v: UInt32Value | undefined) { this._s(':in', v); }
    /** Background Color. Serialized as `:bc` */
    public get backgroundColor(): HexBinaryValue | undefined { return this._g(':bc'); }
    public set backgroundColor(v: HexBinaryValue | undefined) { this._s(':bc', v); }
    /** Foreground Color. Serialized as `:fc` */
    public get foregroundColor(): HexBinaryValue | undefined { return this._g(':fc'); }
    public set foregroundColor(v: HexBinaryValue | undefined) { this._s(':fc', v); }
    /** Italic. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** Underline. Serialized as `:un` */
    public get underline(): BooleanValue | undefined { return this._g(':un'); }
    public set underline(v: BooleanValue | undefined) { this._s(':un', v); }
    /** Strikethrough. Serialized as `:st` */
    public get strikethrough(): BooleanValue | undefined { return this._g(':st'); }
    public set strikethrough(v: BooleanValue | undefined) { this._s(':st', v); }
    /** Bold. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }

}
/** No Value. Serialized as `x:m` */
export class MissingItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {

    public static override _Q = 'x:m';
    public static override _A = [':u',':f',':c',':cp',':in',':bc',':fc',':i',':un',':st',':b',];
    /** Unused Item. Serialized as `:u` */
    public get unused(): BooleanValue | undefined { return this._g(':u'); }
    public set unused(v: BooleanValue | undefined) { this._s(':u', v); }
    /** Calculated Item. Serialized as `:f` */
    public get calculated(): BooleanValue | undefined { return this._g(':f'); }
    public set calculated(v: BooleanValue | undefined) { this._s(':f', v); }
    /** Caption. Serialized as `:c` */
    public get caption(): StringValue | undefined { return this._g(':c'); }
    public set caption(v: StringValue | undefined) { this._s(':c', v); }
    /** Member Property Count. Serialized as `:cp` */
    public get propertyCount(): UInt32Value | undefined { return this._g(':cp'); }
    public set propertyCount(v: UInt32Value | undefined) { this._s(':cp', v); }
    /** Format Index. Serialized as `:in` */
    public get formatIndex(): UInt32Value | undefined { return this._g(':in'); }
    public set formatIndex(v: UInt32Value | undefined) { this._s(':in', v); }
    /** background Color. Serialized as `:bc` */
    public get backgroundColor(): HexBinaryValue | undefined { return this._g(':bc'); }
    public set backgroundColor(v: HexBinaryValue | undefined) { this._s(':bc', v); }
    /** Foreground Color. Serialized as `:fc` */
    public get foregroundColor(): HexBinaryValue | undefined { return this._g(':fc'); }
    public set foregroundColor(v: HexBinaryValue | undefined) { this._s(':fc', v); }
    /** Italic. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** Underline. Serialized as `:un` */
    public get underline(): BooleanValue | undefined { return this._g(':un'); }
    public set underline(v: BooleanValue | undefined) { this._s(':un', v); }
    /** Strikethrough. Serialized as `:st` */
    public get strikethrough(): BooleanValue | undefined { return this._g(':st'); }
    public set strikethrough(v: BooleanValue | undefined) { this._s(':st', v); }
    /** Bold. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }

}
/** Range Set. Serialized as `x:rangeSet` */
export class RangeSet extends OxmlLeafElement {

    public static override _Q = 'x:rangeSet';
    public static override _A = [':i1',':i2',':i3',':i4',':ref',':name',':sheet','r:id',];
    /** Field Item Index Page 1. Serialized as `:i1` */
    public get fieldItemIndexPage1(): UInt32Value | undefined { return this._g(':i1'); }
    public set fieldItemIndexPage1(v: UInt32Value | undefined) { this._s(':i1', v); }
    /** Field Item Index Page 2. Serialized as `:i2` */
    public get fieldItemIndexPage2(): UInt32Value | undefined { return this._g(':i2'); }
    public set fieldItemIndexPage2(v: UInt32Value | undefined) { this._s(':i2', v); }
    /** Field Item index Page 3. Serialized as `:i3` */
    public get fieldItemIndexPage3(): UInt32Value | undefined { return this._g(':i3'); }
    public set fieldItemIndexPage3(v: UInt32Value | undefined) { this._s(':i3', v); }
    /** Field Item Index Page 4. Serialized as `:i4` */
    public get fieldItemIndexPage4(): UInt32Value | undefined { return this._g(':i4'); }
    public set fieldItemIndexPage4(v: UInt32Value | undefined) { this._s(':i4', v); }
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Named Range. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Sheet Name. Serialized as `:sheet` */
    public get sheet(): StringValue | undefined { return this._g(':sheet'); }
    public set sheet(v: StringValue | undefined) { this._s(':sheet', v); }
    /** Relationship Id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Page Item. Serialized as `x:pageItem` */
export class PageItem extends OxmlLeafElement {

    public static override _Q = 'x:pageItem';
    public static override _A = [':name',];
    /** Page Item Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Page Items. Serialized as `x:page` */
export class Page extends OxmlCompositeElement<PageItem> {

    public static override _Q = 'x:page';
    public static override _A = [':count',];
    /** Page Item String Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Range Sets. Serialized as `x:rangeSets` */
export class RangeSets extends OxmlCompositeElement<RangeSet> {

    public static override _Q = 'x:rangeSets';
    public static override _A = [':count',];
    /** Reference and Page Item Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Page Item Values. Serialized as `x:pages` */
export class Pages extends OxmlCompositeElement<Page> {

    public static override _Q = 'x:pages';
    public static override _A = [':count',];
    /** Page Item String Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** PivotCache Field. Serialized as `x:cacheField` */
export class CacheField extends OxmlCompositeElement<SharedItems | FieldGroup | MemberPropertiesMap | CacheFieldExtensionList> {

    public static override _Q = 'x:cacheField';
    public static override _A = [':name',':caption',':propertyName',':serverField',':uniqueList',':numFmtId',':formula',':sqlType',':hierarchy',':level',':databaseField',':mappingCount',':memberPropertyField',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** caption. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** propertyName. Serialized as `:propertyName` */
    public get propertyName(): StringValue | undefined { return this._g(':propertyName'); }
    public set propertyName(v: StringValue | undefined) { this._s(':propertyName', v); }
    /** serverField. Serialized as `:serverField` */
    public get serverField(): BooleanValue | undefined { return this._g(':serverField'); }
    public set serverField(v: BooleanValue | undefined) { this._s(':serverField', v); }
    /** uniqueList. Serialized as `:uniqueList` */
    public get uniqueList(): BooleanValue | undefined { return this._g(':uniqueList'); }
    public set uniqueList(v: BooleanValue | undefined) { this._s(':uniqueList', v); }
    /** numFmtId. Serialized as `:numFmtId` */
    public get numberFormatId(): UInt32Value | undefined { return this._g(':numFmtId'); }
    public set numberFormatId(v: UInt32Value | undefined) { this._s(':numFmtId', v); }
    /** formula. Serialized as `:formula` */
    public get formula(): StringValue | undefined { return this._g(':formula'); }
    public set formula(v: StringValue | undefined) { this._s(':formula', v); }
    /** sqlType. Serialized as `:sqlType` */
    public get sqlType(): Int32Value | undefined { return this._g(':sqlType'); }
    public set sqlType(v: Int32Value | undefined) { this._s(':sqlType', v); }
    /** hierarchy. Serialized as `:hierarchy` */
    public get hierarchy(): Int32Value | undefined { return this._g(':hierarchy'); }
    public set hierarchy(v: Int32Value | undefined) { this._s(':hierarchy', v); }
    /** level. Serialized as `:level` */
    public get level(): UInt32Value | undefined { return this._g(':level'); }
    public set level(v: UInt32Value | undefined) { this._s(':level', v); }
    /** databaseField. Serialized as `:databaseField` */
    public get databaseField(): BooleanValue | undefined { return this._g(':databaseField'); }
    public set databaseField(v: BooleanValue | undefined) { this._s(':databaseField', v); }
    /** mappingCount. Serialized as `:mappingCount` */
    public get mappingCount(): UInt32Value | undefined { return this._g(':mappingCount'); }
    public set mappingCount(v: UInt32Value | undefined) { this._s(':mappingCount', v); }
    /** memberPropertyField. Serialized as `:memberPropertyField` */
    public get memberPropertyField(): BooleanValue | undefined { return this._g(':memberPropertyField'); }
    public set memberPropertyField(v: BooleanValue | undefined) { this._s(':memberPropertyField', v); }
    /** Returns SharedItems. */
    public get sharedItems(): SharedItems | undefined { return this._f(SharedItems); }
    /** Returns FieldGroup. */
    public get fieldGroup(): FieldGroup | undefined { return this._f(FieldGroup); }

}
/** Text Import Field Settings. Serialized as `x:textField` */
export class TextField extends OxmlLeafElement {

    public static override _Q = 'x:textField';
    public static override _A = [':type',':position',];
    /** Field Type. Serialized as `:type` */
    public get type(): ExternalConnectionValues | undefined { return this._g(':type'); }
    public set type(v: ExternalConnectionValues | undefined) { this._s(':type', v); }
    /** Position. Serialized as `:position` */
    public get position(): UInt32Value | undefined { return this._g(':position'); }
    public set position(v: UInt32Value | undefined) { this._s(':position', v); }

}
/** Index. Serialized as `x:x` */
export class FieldItem extends OxmlLeafElement {

    public static override _Q = 'x:x';
    public static override _A = [':v',];
    /** Shared Items Index. Serialized as `:v` */
    public get val(): UInt32Value | undefined { return this._g(':v'); }
    public set val(v: UInt32Value | undefined) { this._s(':v', v); }

}
/** Character Value. Serialized as `x:s` */
export class CharacterValue extends OxmlLeafElement {

    public static override _Q = 'x:s';
    public static override _A = [':v',];
    /** Value. Serialized as `:v` */
    public get val(): StringValue | undefined { return this._g(':v'); }
    public set val(v: StringValue | undefined) { this._s(':v', v); }

}
/** No Value. Serialized as `x:m` */
export class MissingTable extends OxmlLeafElement {

    public static override _Q = 'x:m';

}
/** Parameter Properties. Serialized as `x:parameter` */
export class Parameter extends OxmlLeafElement {

    public static override _Q = 'x:parameter';
    public static override _A = [':name',':sqlType',':parameterType',':refreshOnChange',':prompt',':boolean',':double',':integer',':string',':cell',];
    /** Parameter Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** SQL Data Type. Serialized as `:sqlType` */
    public get sqlType(): Int32Value | undefined { return this._g(':sqlType'); }
    public set sqlType(v: Int32Value | undefined) { this._s(':sqlType', v); }
    /** Parameter Type. Serialized as `:parameterType` */
    public get parameterType(): ParameterValues | undefined { return this._g(':parameterType'); }
    public set parameterType(v: ParameterValues | undefined) { this._s(':parameterType', v); }
    /** Refresh on Change. Serialized as `:refreshOnChange` */
    public get refreshOnChange(): BooleanValue | undefined { return this._g(':refreshOnChange'); }
    public set refreshOnChange(v: BooleanValue | undefined) { this._s(':refreshOnChange', v); }
    /** Parameter Prompt String. Serialized as `:prompt` */
    public get prompt(): StringValue | undefined { return this._g(':prompt'); }
    public set prompt(v: StringValue | undefined) { this._s(':prompt', v); }
    /** Boolean. Serialized as `:boolean` */
    public get boolean(): BooleanValue | undefined { return this._g(':boolean'); }
    public set boolean(v: BooleanValue | undefined) { this._s(':boolean', v); }
    /** Double. Serialized as `:double` */
    public get double(): DoubleValue | undefined { return this._g(':double'); }
    public set double(v: DoubleValue | undefined) { this._s(':double', v); }
    /** Integer. Serialized as `:integer` */
    public get integer(): Int32Value | undefined { return this._g(':integer'); }
    public set integer(v: Int32Value | undefined) { this._s(':integer', v); }
    /** String. Serialized as `:string` */
    public get string(): StringValue | undefined { return this._g(':string'); }
    public set string(v: StringValue | undefined) { this._s(':string', v); }
    /** Cell Reference. Serialized as `:cell` */
    public get cell(): StringValue | undefined { return this._g(':cell'); }
    public set cell(v: StringValue | undefined) { this._s(':cell', v); }

}
/** Tables. Serialized as `x:tables` */
export class Tables extends OxmlCompositeElement<MissingTable | CharacterValue | FieldItem> {

    public static override _Q = 'x:tables';
    public static override _A = [':count',];
    /** Count of Tables. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Connection. Serialized as `x:connection` */
export class Connection extends OxmlCompositeElement<DatabaseProperties | OlapProperties | WebQueryProperties | TextProperties | Parameters | ConnectionExtensionList> {

    public static override _Q = 'x:connection';
    public static override _A = [':id',':sourceFile',':odcFile',':keepAlive',':interval',':name',':description',':type',':reconnectionMethod',':refreshedVersion',':minRefreshableVersion',':savePassword',':new',':deleted',':onlyUseConnectionFile',':background',':refreshOnLoad',':saveData',':credentials',':singleSignOnId',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** sourceFile. Serialized as `:sourceFile` */
    public get sourceFile(): StringValue | undefined { return this._g(':sourceFile'); }
    public set sourceFile(v: StringValue | undefined) { this._s(':sourceFile', v); }
    /** odcFile. Serialized as `:odcFile` */
    public get connectionFile(): StringValue | undefined { return this._g(':odcFile'); }
    public set connectionFile(v: StringValue | undefined) { this._s(':odcFile', v); }
    /** keepAlive. Serialized as `:keepAlive` */
    public get keepAlive(): BooleanValue | undefined { return this._g(':keepAlive'); }
    public set keepAlive(v: BooleanValue | undefined) { this._s(':keepAlive', v); }
    /** interval. Serialized as `:interval` */
    public get interval(): UInt32Value | undefined { return this._g(':interval'); }
    public set interval(v: UInt32Value | undefined) { this._s(':interval', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** type. Serialized as `:type` */
    public get type(): UInt32Value | undefined { return this._g(':type'); }
    public set type(v: UInt32Value | undefined) { this._s(':type', v); }
    /** reconnectionMethod. Serialized as `:reconnectionMethod` */
    public get reconnectionMethod(): UInt32Value | undefined { return this._g(':reconnectionMethod'); }
    public set reconnectionMethod(v: UInt32Value | undefined) { this._s(':reconnectionMethod', v); }
    /** refreshedVersion. Serialized as `:refreshedVersion` */
    public get refreshedVersion(): ByteValue | undefined { return this._g(':refreshedVersion'); }
    public set refreshedVersion(v: ByteValue | undefined) { this._s(':refreshedVersion', v); }
    /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
    public get minRefreshableVersion(): ByteValue | undefined { return this._g(':minRefreshableVersion'); }
    public set minRefreshableVersion(v: ByteValue | undefined) { this._s(':minRefreshableVersion', v); }
    /** savePassword. Serialized as `:savePassword` */
    public get savePassword(): BooleanValue | undefined { return this._g(':savePassword'); }
    public set savePassword(v: BooleanValue | undefined) { this._s(':savePassword', v); }
    /** new. Serialized as `:new` */
    public get new(): BooleanValue | undefined { return this._g(':new'); }
    public set new(v: BooleanValue | undefined) { this._s(':new', v); }
    /** deleted. Serialized as `:deleted` */
    public get deleted(): BooleanValue | undefined { return this._g(':deleted'); }
    public set deleted(v: BooleanValue | undefined) { this._s(':deleted', v); }
    /** onlyUseConnectionFile. Serialized as `:onlyUseConnectionFile` */
    public get onlyUseConnectionFile(): BooleanValue | undefined { return this._g(':onlyUseConnectionFile'); }
    public set onlyUseConnectionFile(v: BooleanValue | undefined) { this._s(':onlyUseConnectionFile', v); }
    /** background. Serialized as `:background` */
    public get background(): BooleanValue | undefined { return this._g(':background'); }
    public set background(v: BooleanValue | undefined) { this._s(':background', v); }
    /** refreshOnLoad. Serialized as `:refreshOnLoad` */
    public get refreshOnLoad(): BooleanValue | undefined { return this._g(':refreshOnLoad'); }
    public set refreshOnLoad(v: BooleanValue | undefined) { this._s(':refreshOnLoad', v); }
    /** saveData. Serialized as `:saveData` */
    public get saveData(): BooleanValue | undefined { return this._g(':saveData'); }
    public set saveData(v: BooleanValue | undefined) { this._s(':saveData', v); }
    /** credentials. Serialized as `:credentials` */
    public get credentials(): CredentialsMethodValues | undefined { return this._g(':credentials'); }
    public set credentials(v: CredentialsMethodValues | undefined) { this._s(':credentials', v); }
    /** singleSignOnId. Serialized as `:singleSignOnId` */
    public get singleSignOnId(): StringValue | undefined { return this._g(':singleSignOnId'); }
    public set singleSignOnId(v: StringValue | undefined) { this._s(':singleSignOnId', v); }
    /** Returns DatabaseProperties. */
    public get databaseProperties(): DatabaseProperties | undefined { return this._f(DatabaseProperties); }
    /** Returns OlapProperties. */
    public get olapProperties(): OlapProperties | undefined { return this._f(OlapProperties); }
    /** Returns WebQueryProperties. */
    public get webQueryProperties(): WebQueryProperties | undefined { return this._f(WebQueryProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Returns Parameters. */
    public get parameters(): Parameters | undefined { return this._f(Parameters); }
    /** Returns ConnectionExtensionList. */
    public get connectionExtensionList(): ConnectionExtensionList | undefined { return this._f(ConnectionExtensionList); }

}
/** XML Mapping. Serialized as `x:DataBinding` */
export class DataBinding extends OxmlCompositeElement {

    public static override _Q = 'x:DataBinding';
    public static override _A = [':DataBindingName',':FileBinding',':ConnectionID',':FileBindingName',':DataBindingLoadMode',];
    /** DataBindingName. Serialized as `:DataBindingName` */
    public get dataBindingName(): StringValue | undefined { return this._g(':DataBindingName'); }
    public set dataBindingName(v: StringValue | undefined) { this._s(':DataBindingName', v); }
    /** FileBinding. Serialized as `:FileBinding` */
    public get fileBinding(): BooleanValue | undefined { return this._g(':FileBinding'); }
    public set fileBinding(v: BooleanValue | undefined) { this._s(':FileBinding', v); }
    /** ConnectionID. Serialized as `:ConnectionID` */
    public get connectionId(): UInt32Value | undefined { return this._g(':ConnectionID'); }
    public set connectionId(v: UInt32Value | undefined) { this._s(':ConnectionID', v); }
    /** FileBindingName. Serialized as `:FileBindingName` */
    public get fileBindingName(): StringValue | undefined { return this._g(':FileBindingName'); }
    public set fileBindingName(v: StringValue | undefined) { this._s(':FileBindingName', v); }
    /** DataBindingLoadMode. Serialized as `:DataBindingLoadMode` */
    public get dataBindingLoadMode(): UInt32Value | undefined { return this._g(':DataBindingLoadMode'); }
    public set dataBindingLoadMode(v: UInt32Value | undefined) { this._s(':DataBindingLoadMode', v); }

}
/** XML Mapping Properties. Serialized as `x:Map` */
export class Map extends OxmlCompositeElement<DataBinding> {

    public static override _Q = 'x:Map';
    public static override _A = [':ID',':Name',':RootElement',':SchemaID',':ShowImportExportValidationErrors',':AutoFit',':Append',':PreserveSortAFLayout',':PreserveFormat',];
    /** XML Mapping ID. Serialized as `:ID` */
    public get iD(): UInt32Value | undefined { return this._g(':ID'); }
    public set iD(v: UInt32Value | undefined) { this._s(':ID', v); }
    /** XML Mapping Name. Serialized as `:Name` */
    public get name(): StringValue | undefined { return this._g(':Name'); }
    public set name(v: StringValue | undefined) { this._s(':Name', v); }
    /** Root Element Name. Serialized as `:RootElement` */
    public get rootElement(): StringValue | undefined { return this._g(':RootElement'); }
    public set rootElement(v: StringValue | undefined) { this._s(':RootElement', v); }
    /** Schema Name. Serialized as `:SchemaID` */
    public get schemaId(): StringValue | undefined { return this._g(':SchemaID'); }
    public set schemaId(v: StringValue | undefined) { this._s(':SchemaID', v); }
    /** Show Validation Errors. Serialized as `:ShowImportExportValidationErrors` */
    public get showImportExportErrors(): BooleanValue | undefined { return this._g(':ShowImportExportValidationErrors'); }
    public set showImportExportErrors(v: BooleanValue | undefined) { this._s(':ShowImportExportValidationErrors', v); }
    /** AutoFit Table on Refresh. Serialized as `:AutoFit` */
    public get autoFit(): BooleanValue | undefined { return this._g(':AutoFit'); }
    public set autoFit(v: BooleanValue | undefined) { this._s(':AutoFit', v); }
    /** Append Data to Table. Serialized as `:Append` */
    public get appendData(): BooleanValue | undefined { return this._g(':Append'); }
    public set appendData(v: BooleanValue | undefined) { this._s(':Append', v); }
    /** Preserve AutoFilter State. Serialized as `:PreserveSortAFLayout` */
    public get preserveAutoFilterState(): BooleanValue | undefined { return this._g(':PreserveSortAFLayout'); }
    public set preserveAutoFilterState(v: BooleanValue | undefined) { this._s(':PreserveSortAFLayout', v); }
    /** Preserve Cell Formatting. Serialized as `:PreserveFormat` */
    public get preserveFormat(): BooleanValue | undefined { return this._g(':PreserveFormat'); }
    public set preserveFormat(v: BooleanValue | undefined) { this._s(':PreserveFormat', v); }
    /** XML Mapping. */
    public get dataBinding(): DataBinding | undefined { return this._f(DataBinding); }

}
/** XML Schema. Serialized as `x:Schema` */
export class Schema extends OxmlCompositeElement {

    public static override _Q = 'x:Schema';
    public static override _A = [':ID',':SchemaRef',':Namespace',];
    /** Schema ID. Serialized as `:ID` */
    public get id(): StringValue | undefined { return this._g(':ID'); }
    public set id(v: StringValue | undefined) { this._s(':ID', v); }
    /** Schema Reference. Serialized as `:SchemaRef` */
    public get schemaReference(): StringValue | undefined { return this._g(':SchemaRef'); }
    public set schemaReference(v: StringValue | undefined) { this._s(':SchemaRef', v); }
    /** Schema Root Namespace. Serialized as `:Namespace` */
    public get namespace(): StringValue | undefined { return this._g(':Namespace'); }
    public set namespace(v: StringValue | undefined) { this._s(':Namespace', v); }

}
/** Defines the XstringType Class. */
export abstract class XstringType extends OxmlLeafTextElement {

    public static override _A = ['xml:space',];
    /** Content Contains Significant Whitespace. Serialized as `xml:space` */
    public get space(): SpaceProcessingModeValues | undefined { return this._g('xml:space'); }
    public set space(v: SpaceProcessingModeValues | undefined) { this._s('xml:space', v); }

}
/** Defines the Formula2 Class. Serialized as `x:formula2` */
export class Formula2 extends XstringType {

    public static override _Q = 'x:formula2';

}
/** Defines the Formula1 Class. Serialized as `x:formula1` */
export class Formula1 extends XstringType {

    public static override _Q = 'x:formula1';

}
/** Strings in Subtopic. Serialized as `x:stp` */
export class Subtopic extends XstringType {

    public static override _Q = 'x:stp';

}
/** DDE Link Value. Serialized as `x:val` */
export class DdeLinkValue extends XstringType {

    public static override _Q = 'x:val';

}
/** First Page Footer. Serialized as `x:firstFooter` */
export class FirstFooter extends XstringType {

    public static override _Q = 'x:firstFooter';

}
/** First Page Header. Serialized as `x:firstHeader` */
export class FirstHeader extends XstringType {

    public static override _Q = 'x:firstHeader';

}
/** Even Page Footer. Serialized as `x:evenFooter` */
export class EvenFooter extends XstringType {

    public static override _Q = 'x:evenFooter';

}
/** Even Page Header. Serialized as `x:evenHeader` */
export class EvenHeader extends XstringType {

    public static override _Q = 'x:evenHeader';

}
/** Odd Page Footer. Serialized as `x:oddFooter` */
export class OddFooter extends XstringType {

    public static override _Q = 'x:oddFooter';

}
/** Odd Header. Serialized as `x:oddHeader` */
export class OddHeader extends XstringType {

    public static override _Q = 'x:oddHeader';

}
/** Old Formula. Serialized as `x:oldFormula` */
export class OldFormula extends XstringType {

    public static override _Q = 'x:oldFormula';

}
/** Formula. Serialized as `x:formula` */
export class Formula extends XstringType {

    public static override _Q = 'x:formula';

}
/** Cell Value. Serialized as `x:v` */
export class CellValue extends XstringType {

    public static override _Q = 'x:v';

}
/** Text. Serialized as `x:t` */
export class Text extends XstringType {

    public static override _Q = 'x:t';

}
/** Author. Serialized as `x:author` */
export class Author extends XstringType {

    public static override _Q = 'x:author';

}
/** Comment. Serialized as `x:comment` */
export class Comment extends OxmlCompositeElement<CommentText | CommentProperties> {

    public static override _Q = 'x:comment';
    public static override _A = [':ref',':authorId',':guid',':shapeId',];
    /** Cell Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Author Id. Serialized as `:authorId` */
    public get authorId(): UInt32Value | undefined { return this._g(':authorId'); }
    public set authorId(v: UInt32Value | undefined) { this._s(':authorId', v); }
    /** Unique Identifier for Comment. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** shapeId. Serialized as `:shapeId` */
    public get shapeId(): UInt32Value | undefined { return this._g(':shapeId'); }
    public set shapeId(v: UInt32Value | undefined) { this._s(':shapeId', v); }
    /** Comment Text. */
    public get commentText(): CommentText | undefined { return this._f(CommentText); }
    /** Returns CommentProperties. */
    public get commentProperties(): CommentProperties | undefined { return this._f(CommentProperties); }

}
/** List of Comments. Serialized as `x:commentList` */
export class CommentList extends OxmlCompositeElement<Comment> {

    public static override _Q = 'x:commentList';

}
/** Authors. Serialized as `x:authors` */
export class Authors extends OxmlCompositeElement<Author> {

    public static override _Q = 'x:authors';

}
/** Cell. Serialized as `x:c` */
export class CalculationCell extends OxmlLeafElement {

    public static override _Q = 'x:c';
    public static override _A = [':r',':i',':s',':l',':t',':a',];
    /** Cell Reference. Serialized as `:r` */
    public get cellReference(): StringValue | undefined { return this._g(':r'); }
    public set cellReference(v: StringValue | undefined) { this._s(':r', v); }
    /** Sheet Id. Serialized as `:i` */
    public get sheetId(): Int32Value | undefined { return this._g(':i'); }
    public set sheetId(v: Int32Value | undefined) { this._s(':i', v); }
    /** Child Chain. Serialized as `:s` */
    public get inChildChain(): BooleanValue | undefined { return this._g(':s'); }
    public set inChildChain(v: BooleanValue | undefined) { this._s(':s', v); }
    /** New Dependency Level. Serialized as `:l` */
    public get newLevel(): BooleanValue | undefined { return this._g(':l'); }
    public set newLevel(v: BooleanValue | undefined) { this._s(':l', v); }
    /** New Thread. Serialized as `:t` */
    public get newThread(): BooleanValue | undefined { return this._g(':t'); }
    public set newThread(v: BooleanValue | undefined) { this._s(':t', v); }
    /** Array. Serialized as `:a` */
    public get array(): BooleanValue | undefined { return this._g(':a'); }
    public set array(v: BooleanValue | undefined) { this._s(':a', v); }

}
/** Custom Filter Criteria. Serialized as `x:customFilter` */
export class CustomFilter extends OxmlLeafElement {

    public static override _Q = 'x:customFilter';
    public static override _A = [':operator',':val',];
    /** Filter Comparison Operator. Serialized as `:operator` */
    public get operator(): FilterOperatorValues | undefined { return this._g(':operator'); }
    public set operator(v: FilterOperatorValues | undefined) { this._s(':operator', v); }
    /** Top or Bottom Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the ExtensionList Class. Serialized as `x:extLst` */
export class ExtensionList extends OxmlCompositeElement<Extension> {

    public static override _Q = 'x:extLst';

}
/** Sort State for Auto Filter. Serialized as `x:sortState` */
export class SortState extends OxmlCompositeElement<X14SortCondition | SortCondition | ExtensionList> {

    public static override _Q = 'x:sortState';
    public static override _A = [':columnSort',':caseSensitive',':sortMethod',':ref',];
    /** Sort by Columns. Serialized as `:columnSort` */
    public get columnSort(): BooleanValue | undefined { return this._g(':columnSort'); }
    public set columnSort(v: BooleanValue | undefined) { this._s(':columnSort', v); }
    /** Case Sensitive. Serialized as `:caseSensitive` */
    public get caseSensitive(): BooleanValue | undefined { return this._g(':caseSensitive'); }
    public set caseSensitive(v: BooleanValue | undefined) { this._s(':caseSensitive', v); }
    /** Sort Method. Serialized as `:sortMethod` */
    public get sortMethod(): SortMethodValues | undefined { return this._g(':sortMethod'); }
    public set sortMethod(v: SortMethodValues | undefined) { this._s(':sortMethod', v); }
    /** Sort Range. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** AutoFilter Column. Serialized as `x:filterColumn` */
export class FilterColumn extends OxmlCompositeElement<Filters | Top10 | X14CustomFilters | CustomFilters | DynamicFilter | ColorFilter | X14IconFilter | IconFilter | ExtensionList> {

    public static override _Q = 'x:filterColumn';
    public static override _A = [':colId',':hiddenButton',':showButton',];
    /** Filter Column Data. Serialized as `:colId` */
    public get columnId(): UInt32Value | undefined { return this._g(':colId'); }
    public set columnId(v: UInt32Value | undefined) { this._s(':colId', v); }
    /** Hidden AutoFilter Button. Serialized as `:hiddenButton` */
    public get hiddenButton(): BooleanValue | undefined { return this._g(':hiddenButton'); }
    public set hiddenButton(v: BooleanValue | undefined) { this._s(':hiddenButton', v); }
    /** Show Filter Button. Serialized as `:showButton` */
    public get showButton(): BooleanValue | undefined { return this._g(':showButton'); }
    public set showButton(v: BooleanValue | undefined) { this._s(':showButton', v); }
    /** Filter Criteria. */
    public get filters(): Filters | undefined { return this._f(Filters); }
    /** Top 10. */
    public get top10(): Top10 | undefined { return this._f(Top10); }
    /** Returns X14CustomFilters. */
    public get customFilters14(): X14CustomFilters | undefined { return this._f(X14CustomFilters); }
    /** Custom Filters. */
    public get customFilters(): CustomFilters | undefined { return this._f(CustomFilters); }
    /** Dynamic Filter. */
    public get dynamicFilter(): DynamicFilter | undefined { return this._f(DynamicFilter); }
    /** Color Filter Criteria. */
    public get colorFilter(): ColorFilter | undefined { return this._f(ColorFilter); }
    /** Returns X14IconFilter. */
    public get iconFilter14(): X14IconFilter | undefined { return this._f(X14IconFilter); }
    /** Icon Filter. */
    public get iconFilter(): IconFilter | undefined { return this._f(IconFilter); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Workbook. Serialized as `x:workbook` */
export class Workbook extends OxmlPartRootElement<FileVersion | FileSharing | WorkbookProperties | X15acAbsolutePath | WorkbookProtection | BookViews | Sheets | FunctionGroups | ExternalReferences | DefinedNames | CalculationProperties | OleSize | CustomWorkbookViews | PivotCaches | WebPublishing | FileRecoveryProperties | WebPublishObjects | WorkbookExtensionList> {

    public static override _Q = 'x:workbook';
    public static override _A = [':conformance',];
    /** conformance. Serialized as `:conformance` */
    public get conformance(): ConformanceClass | undefined { return this._g(':conformance'); }
    public set conformance(v: ConformanceClass | undefined) { this._s(':conformance', v); }
    /** Returns FileVersion. */
    public get fileVersion(): FileVersion | undefined { return this._f(FileVersion); }
    /** Returns FileSharing. */
    public get fileSharing(): FileSharing | undefined { return this._f(FileSharing); }
    /** Returns WorkbookProperties. */
    public get workbookProperties(): WorkbookProperties | undefined { return this._f(WorkbookProperties); }
    /** Returns X15acAbsolutePath. */
    public get absolutePath(): X15acAbsolutePath | undefined { return this._f(X15acAbsolutePath); }
    /** Returns WorkbookProtection. */
    public get workbookProtection(): WorkbookProtection | undefined { return this._f(WorkbookProtection); }
    /** Returns BookViews. */
    public get bookViews(): BookViews | undefined { return this._f(BookViews); }
    /** Returns Sheets. */
    public get sheets(): Sheets | undefined { return this._f(Sheets); }
    /** Returns FunctionGroups. */
    public get functionGroups(): FunctionGroups | undefined { return this._f(FunctionGroups); }
    /** Returns ExternalReferences. */
    public get externalReferences(): ExternalReferences | undefined { return this._f(ExternalReferences); }
    /** Returns DefinedNames. */
    public get definedNames(): DefinedNames | undefined { return this._f(DefinedNames); }
    /** Returns CalculationProperties. */
    public get calculationProperties(): CalculationProperties | undefined { return this._f(CalculationProperties); }
    /** Returns OleSize. */
    public get oleSize(): OleSize | undefined { return this._f(OleSize); }
    /** Returns CustomWorkbookViews. */
    public get customWorkbookViews(): CustomWorkbookViews | undefined { return this._f(CustomWorkbookViews); }
    /** Returns PivotCaches. */
    public get pivotCaches(): PivotCaches | undefined { return this._f(PivotCaches); }
    /** Returns WebPublishing. */
    public get webPublishing(): WebPublishing | undefined { return this._f(WebPublishing); }

}
/** Volatile Dependency Types. Serialized as `x:volTypes` */
export class VolatileTypes extends OxmlPartRootElement<VolatileType | ExtensionList> {

    public static override _Q = 'x:volTypes';

}
/** Table. Serialized as `x:table` */
export class Table extends OxmlPartRootElement<AutoFilter | SortState | TableColumns | TableStyleInfo | TableExtensionList> {

    public static override _Q = 'x:table';
    public static override _A = [':id',':name',':displayName',':comment',':ref',':tableType',':headerRowCount',':insertRow',':insertRowShift',':totalsRowCount',':totalsRowShown',':published',':headerRowDxfId',':dataDxfId',':totalsRowDxfId',':headerRowBorderDxfId',':tableBorderDxfId',':totalsRowBorderDxfId',':headerRowCellStyle',':dataCellStyle',':totalsRowCellStyle',':connectionId',];
    /** Table Id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Table Name. Serialized as `:displayName` */
    public get displayName(): StringValue | undefined { return this._g(':displayName'); }
    public set displayName(v: StringValue | undefined) { this._s(':displayName', v); }
    /** Table Comment. Serialized as `:comment` */
    public get comment(): StringValue | undefined { return this._g(':comment'); }
    public set comment(v: StringValue | undefined) { this._s(':comment', v); }
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Table Type. Serialized as `:tableType` */
    public get tableType(): TableValues | undefined { return this._g(':tableType'); }
    public set tableType(v: TableValues | undefined) { this._s(':tableType', v); }
    /** Header Row Count. Serialized as `:headerRowCount` */
    public get headerRowCount(): UInt32Value | undefined { return this._g(':headerRowCount'); }
    public set headerRowCount(v: UInt32Value | undefined) { this._s(':headerRowCount', v); }
    /** Insert Row Showing. Serialized as `:insertRow` */
    public get insertRow(): BooleanValue | undefined { return this._g(':insertRow'); }
    public set insertRow(v: BooleanValue | undefined) { this._s(':insertRow', v); }
    /** Insert Row Shift. Serialized as `:insertRowShift` */
    public get insertRowShift(): BooleanValue | undefined { return this._g(':insertRowShift'); }
    public set insertRowShift(v: BooleanValue | undefined) { this._s(':insertRowShift', v); }
    /** Totals Row Count. Serialized as `:totalsRowCount` */
    public get totalsRowCount(): UInt32Value | undefined { return this._g(':totalsRowCount'); }
    public set totalsRowCount(v: UInt32Value | undefined) { this._s(':totalsRowCount', v); }
    /** Totals Row Shown. Serialized as `:totalsRowShown` */
    public get totalsRowShown(): BooleanValue | undefined { return this._g(':totalsRowShown'); }
    public set totalsRowShown(v: BooleanValue | undefined) { this._s(':totalsRowShown', v); }
    /** Published. Serialized as `:published` */
    public get published(): BooleanValue | undefined { return this._g(':published'); }
    public set published(v: BooleanValue | undefined) { this._s(':published', v); }
    /** Header Row Format Id. Serialized as `:headerRowDxfId` */
    public get headerRowFormatId(): UInt32Value | undefined { return this._g(':headerRowDxfId'); }
    public set headerRowFormatId(v: UInt32Value | undefined) { this._s(':headerRowDxfId', v); }
    /** Data Area Format Id. Serialized as `:dataDxfId` */
    public get dataFormatId(): UInt32Value | undefined { return this._g(':dataDxfId'); }
    public set dataFormatId(v: UInt32Value | undefined) { this._s(':dataDxfId', v); }
    /** Totals Row Format Id. Serialized as `:totalsRowDxfId` */
    public get totalsRowFormatId(): UInt32Value | undefined { return this._g(':totalsRowDxfId'); }
    public set totalsRowFormatId(v: UInt32Value | undefined) { this._s(':totalsRowDxfId', v); }
    /** Header Row Border Format Id. Serialized as `:headerRowBorderDxfId` */
    public get headerRowBorderFormatId(): UInt32Value | undefined { return this._g(':headerRowBorderDxfId'); }
    public set headerRowBorderFormatId(v: UInt32Value | undefined) { this._s(':headerRowBorderDxfId', v); }
    /** Table Border Format Id. Serialized as `:tableBorderDxfId` */
    public get borderFormatId(): UInt32Value | undefined { return this._g(':tableBorderDxfId'); }
    public set borderFormatId(v: UInt32Value | undefined) { this._s(':tableBorderDxfId', v); }
    /** Totals Row Border Format Id. Serialized as `:totalsRowBorderDxfId` */
    public get totalsRowBorderFormatId(): UInt32Value | undefined { return this._g(':totalsRowBorderDxfId'); }
    public set totalsRowBorderFormatId(v: UInt32Value | undefined) { this._s(':totalsRowBorderDxfId', v); }
    /** Header Row Style. Serialized as `:headerRowCellStyle` */
    public get headerRowCellStyle(): StringValue | undefined { return this._g(':headerRowCellStyle'); }
    public set headerRowCellStyle(v: StringValue | undefined) { this._s(':headerRowCellStyle', v); }
    /** Data Style Name. Serialized as `:dataCellStyle` */
    public get dataCellStyle(): StringValue | undefined { return this._g(':dataCellStyle'); }
    public set dataCellStyle(v: StringValue | undefined) { this._s(':dataCellStyle', v); }
    /** Totals Row Style. Serialized as `:totalsRowCellStyle` */
    public get totalsRowCellStyle(): StringValue | undefined { return this._g(':totalsRowCellStyle'); }
    public set totalsRowCellStyle(v: StringValue | undefined) { this._s(':totalsRowCellStyle', v); }
    /** Connection ID. Serialized as `:connectionId` */
    public get connectionId(): UInt32Value | undefined { return this._g(':connectionId'); }
    public set connectionId(v: UInt32Value | undefined) { this._s(':connectionId', v); }
    /** Table AutoFilter. */
    public get autoFilter(): AutoFilter | undefined { return this._f(AutoFilter); }
    /** Sort State. */
    public get sortState(): SortState | undefined { return this._f(SortState); }
    /** Table Columns. */
    public get tableColumns(): TableColumns | undefined { return this._f(TableColumns); }
    /** Table Style. */
    public get tableStyleInfo(): TableStyleInfo | undefined { return this._f(TableStyleInfo); }
    /** Future Feature Data Storage Area. */
    public get tableExtensionList(): TableExtensionList | undefined { return this._f(TableExtensionList); }

}
/** External Reference. Serialized as `x:externalLink` */
export class ExternalLink extends OxmlPartRootElement<ExternalBook | DdeLink | OleLink | ExtensionList> {

    public static override _Q = 'x:externalLink';

}
/** Style Sheet. Serialized as `x:styleSheet` */
export class Stylesheet extends OxmlPartRootElement<NumberingFormats | Fonts | Fills | Borders | CellStyleFormats | CellFormats | CellStyles | DifferentialFormats | TableStyles | Colors | StylesheetExtensionList> {

    public static override _Q = 'x:styleSheet';
    /** Returns NumberingFormats. */
    public get numberingFormats(): NumberingFormats | undefined { return this._f(NumberingFormats); }
    /** Returns Fonts. */
    public get fonts(): Fonts | undefined { return this._f(Fonts); }
    /** Returns Fills. */
    public get fills(): Fills | undefined { return this._f(Fills); }
    /** Returns Borders. */
    public get borders(): Borders | undefined { return this._f(Borders); }
    /** Returns CellStyleFormats. */
    public get cellStyleFormats(): CellStyleFormats | undefined { return this._f(CellStyleFormats); }
    /** Returns CellFormats. */
    public get cellFormats(): CellFormats | undefined { return this._f(CellFormats); }
    /** Returns CellStyles. */
    public get cellStyles(): CellStyles | undefined { return this._f(CellStyles); }
    /** Returns DifferentialFormats. */
    public get differentialFormats(): DifferentialFormats | undefined { return this._f(DifferentialFormats); }
    /** Returns TableStyles. */
    public get tableStyles(): TableStyles | undefined { return this._f(TableStyles); }
    /** Returns Colors. */
    public get colors(): Colors | undefined { return this._f(Colors); }
    /** Returns StylesheetExtensionList. */
    public get stylesheetExtensionList(): StylesheetExtensionList | undefined { return this._f(StylesheetExtensionList); }

}
/** Single Cells. Serialized as `x:singleXmlCells` */
export class SingleXmlCells extends OxmlPartRootElement<SingleXmlCell> {

    public static override _Q = 'x:singleXmlCells';

}
/** Metadata. Serialized as `x:metadata` */
export class Metadata extends OxmlPartRootElement<MetadataTypes | MetadataStrings | MdxMetadata | FutureMetadata | CellMetadata | ValueMetadata | ExtensionList> {

    public static override _Q = 'x:metadata';
    /** Metadata Types Collection. */
    public get metadataTypes(): MetadataTypes | undefined { return this._f(MetadataTypes); }
    /** Metadata String Store. */
    public get metadataStrings(): MetadataStrings | undefined { return this._f(MetadataStrings); }
    /** MDX Metadata Information. */
    public get mdxMetadata(): MdxMetadata | undefined { return this._f(MdxMetadata); }

}
/** Dialog Sheet. Serialized as `x:dialogsheet` */
export class DialogSheet extends OxmlPartRootElement<SheetProperties | SheetViews | SheetFormatProperties | SheetProtection | CustomSheetViews | PrintOptions | PageMargins | PageSetup | HeaderFooter | Drawing | LegacyDrawing | LegacyDrawingHeaderFooter | DrawingHeaderFooter | OleObjects | Controls | ExtensionList> {

    public static override _Q = 'x:dialogsheet';
    /** Sheet Properties. */
    public get sheetProperties(): SheetProperties | undefined { return this._f(SheetProperties); }
    /** Dialog Sheet Views. */
    public get sheetViews(): SheetViews | undefined { return this._f(SheetViews); }
    /** Dialog Sheet Format Properties. */
    public get sheetFormatProperties(): SheetFormatProperties | undefined { return this._f(SheetFormatProperties); }
    /** Sheet Protection. */
    public get sheetProtection(): SheetProtection | undefined { return this._f(SheetProtection); }
    /** Custom Sheet Views. */
    public get customSheetViews(): CustomSheetViews | undefined { return this._f(CustomSheetViews); }
    /** Print Options. */
    public get printOptions(): PrintOptions | undefined { return this._f(PrintOptions); }
    /** Page Margins. */
    public get pageMargins(): PageMargins | undefined { return this._f(PageMargins); }
    /** Page Setup Settings. */
    public get pageSetup(): PageSetup | undefined { return this._f(PageSetup); }
    /** Header and Footer Settings. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Drawing. */
    public get drawing(): Drawing | undefined { return this._f(Drawing); }
    /** Legacy Drawing. */
    public get legacyDrawing(): LegacyDrawing | undefined { return this._f(LegacyDrawing); }
    /** Legacy Drawing Header Footer. */
    public get legacyDrawingHeaderFooter(): LegacyDrawingHeaderFooter | undefined { return this._f(LegacyDrawingHeaderFooter); }
    /** Returns DrawingHeaderFooter. */
    public get drawingHeaderFooter(): DrawingHeaderFooter | undefined { return this._f(DrawingHeaderFooter); }
    /** Returns OleObjects. */
    public get oleObjects(): OleObjects | undefined { return this._f(OleObjects); }
    /** Returns Controls. */
    public get controls(): Controls | undefined { return this._f(Controls); }
    /** Future Feature Data Storage Area. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Chart Sheet. Serialized as `x:chartsheet` */
export class Chartsheet extends OxmlPartRootElement<ChartSheetProperties | ChartSheetViews | ChartSheetProtection | CustomChartsheetViews | PageMargins | ChartSheetPageSetup | HeaderFooter | Drawing | LegacyDrawing | LegacyDrawingHeaderFooter | DrawingHeaderFooter | Picture | WebPublishItems | ExtensionList> {

    public static override _Q = 'x:chartsheet';
    /** Chart Sheet Properties. */
    public get chartSheetProperties(): ChartSheetProperties | undefined { return this._f(ChartSheetProperties); }
    /** Chart Sheet Views. */
    public get chartSheetViews(): ChartSheetViews | undefined { return this._f(ChartSheetViews); }
    /** Chart Sheet Protection. */
    public get chartSheetProtection(): ChartSheetProtection | undefined { return this._f(ChartSheetProtection); }
    /** Custom Chart Sheet Views. */
    public get customChartsheetViews(): CustomChartsheetViews | undefined { return this._f(CustomChartsheetViews); }
    /** Returns PageMargins. */
    public get pageMargins(): PageMargins | undefined { return this._f(PageMargins); }
    /** Returns ChartSheetPageSetup. */
    public get chartSheetPageSetup(): ChartSheetPageSetup | undefined { return this._f(ChartSheetPageSetup); }
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Drawing. */
    public get drawing(): Drawing | undefined { return this._f(Drawing); }
    /** Returns LegacyDrawing. */
    public get legacyDrawing(): LegacyDrawing | undefined { return this._f(LegacyDrawing); }
    /** Legacy Drawing Reference in  Header Footer. */
    public get legacyDrawingHeaderFooter(): LegacyDrawingHeaderFooter | undefined { return this._f(LegacyDrawingHeaderFooter); }
    /** Returns DrawingHeaderFooter. */
    public get drawingHeaderFooter(): DrawingHeaderFooter | undefined { return this._f(DrawingHeaderFooter); }
    /** Returns Picture. */
    public get picture(): Picture | undefined { return this._f(Picture); }
    /** Returns WebPublishItems. */
    public get webPublishItems(): WebPublishItems | undefined { return this._f(WebPublishItems); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Worksheet. Serialized as `x:worksheet` */
export class Worksheet extends OxmlPartRootElement<SheetProperties | SheetDimension | SheetViews | SheetFormatProperties | Columns | SheetData | SheetCalculationProperties | SheetProtection | ProtectedRanges | Scenarios | AutoFilter | SortState | DataConsolidate | CustomSheetViews | MergeCells | PhoneticProperties | ConditionalFormatting | DataValidations | Hyperlinks | PrintOptions | PageMargins | PageSetup | HeaderFooter | RowBreaks | ColumnBreaks | CustomProperties | CellWatches | IgnoredErrors | Drawing | LegacyDrawing | LegacyDrawingHeaderFooter | DrawingHeaderFooter | Picture | OleObjects | Controls | WebPublishItems | TableParts | WorksheetExtensionList> {

    public static override _Q = 'x:worksheet';
    /** Returns SheetProperties. */
    public get sheetProperties(): SheetProperties | undefined { return this._f(SheetProperties); }
    /** Returns SheetDimension. */
    public get sheetDimension(): SheetDimension | undefined { return this._f(SheetDimension); }
    /** Returns SheetViews. */
    public get sheetViews(): SheetViews | undefined { return this._f(SheetViews); }
    /** Returns SheetFormatProperties. */
    public get sheetFormatProperties(): SheetFormatProperties | undefined { return this._f(SheetFormatProperties); }

}
/** User List. Serialized as `x:users` */
export class Users extends OxmlPartRootElement<UserInfo> {

    public static override _Q = 'x:users';
    public static override _A = [':count',];
    /** Active User Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Revisions. Serialized as `x:revisions` */
export class Revisions extends OxmlPartRootElement<RevisionRowColumn | RevisionMove | RevisionCustomView | RevisionSheetName | RevisionInsertSheet | RevisionCellChange | RevisionFormat | RevisionAutoFormat | RevisionDefinedName | RevisionComment | RevisionQueryTable | RevisionConflict> {

    public static override _Q = 'x:revisions';

}
/** Revision Headers. Serialized as `x:headers` */
export class Headers extends OxmlPartRootElement<Header> {

    public static override _Q = 'x:headers';
    public static override _A = [':guid',':lastGuid',':shared',':diskRevisions',':history',':trackRevisions',':exclusive',':revisionId',':version',':keepChangeHistory',':protected',':preserveHistory',];
    /** Last Revision GUID. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** Last GUID. Serialized as `:lastGuid` */
    public get lastGuid(): StringValue | undefined { return this._g(':lastGuid'); }
    public set lastGuid(v: StringValue | undefined) { this._s(':lastGuid', v); }
    /** Shared Workbook. Serialized as `:shared` */
    public get shared(): BooleanValue | undefined { return this._g(':shared'); }
    public set shared(v: BooleanValue | undefined) { this._s(':shared', v); }
    /** Disk Revisions. Serialized as `:diskRevisions` */
    public get diskRevisions(): BooleanValue | undefined { return this._g(':diskRevisions'); }
    public set diskRevisions(v: BooleanValue | undefined) { this._s(':diskRevisions', v); }
    /** History. Serialized as `:history` */
    public get history(): BooleanValue | undefined { return this._g(':history'); }
    public set history(v: BooleanValue | undefined) { this._s(':history', v); }
    /** Track Revisions. Serialized as `:trackRevisions` */
    public get trackRevisions(): BooleanValue | undefined { return this._g(':trackRevisions'); }
    public set trackRevisions(v: BooleanValue | undefined) { this._s(':trackRevisions', v); }
    /** Exclusive Mode. Serialized as `:exclusive` */
    public get exclusive(): BooleanValue | undefined { return this._g(':exclusive'); }
    public set exclusive(v: BooleanValue | undefined) { this._s(':exclusive', v); }
    /** Revision Id. Serialized as `:revisionId` */
    public get revisionId(): UInt32Value | undefined { return this._g(':revisionId'); }
    public set revisionId(v: UInt32Value | undefined) { this._s(':revisionId', v); }
    /** Version. Serialized as `:version` */
    public get version(): Int32Value | undefined { return this._g(':version'); }
    public set version(v: Int32Value | undefined) { this._s(':version', v); }
    /** Keep Change History. Serialized as `:keepChangeHistory` */
    public get keepChangeHistory(): BooleanValue | undefined { return this._g(':keepChangeHistory'); }
    public set keepChangeHistory(v: BooleanValue | undefined) { this._s(':keepChangeHistory', v); }
    /** Protected. Serialized as `:protected` */
    public get protected(): BooleanValue | undefined { return this._g(':protected'); }
    public set protected(v: BooleanValue | undefined) { this._s(':protected', v); }
    /** Preserve History. Serialized as `:preserveHistory` */
    public get preserveHistory(): UInt32Value | undefined { return this._g(':preserveHistory'); }
    public set preserveHistory(v: UInt32Value | undefined) { this._s(':preserveHistory', v); }

}
/** Shared String Table. Serialized as `x:sst` */
export class SharedStringTable extends OxmlPartRootElement<SharedStringItem | ExtensionList> {

    public static override _Q = 'x:sst';
    public static override _A = [':count',':uniqueCount',];
    /** String Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }
    /** Unique String Count. Serialized as `:uniqueCount` */
    public get uniqueCount(): UInt32Value | undefined { return this._g(':uniqueCount'); }
    public set uniqueCount(v: UInt32Value | undefined) { this._s(':uniqueCount', v); }

}
/** Query Table. Serialized as `x:queryTable` */
export class QueryTable extends OxmlPartRootElement<QueryTableRefresh | QueryTableExtensionList> {

    public static override _Q = 'x:queryTable';
    public static override _A = [':name',':headers',':rowNumbers',':disableRefresh',':backgroundRefresh',':firstBackgroundRefresh',':refreshOnLoad',':growShrinkType',':fillFormulas',':removeDataOnSave',':disableEdit',':preserveFormatting',':adjustColumnWidth',':intermediate',':connectionId',':autoFormatId',':applyNumberFormats',':applyBorderFormats',':applyFontFormats',':applyPatternFormats',':applyAlignmentFormats',':applyWidthHeightFormats',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** headers. Serialized as `:headers` */
    public get headers(): BooleanValue | undefined { return this._g(':headers'); }
    public set headers(v: BooleanValue | undefined) { this._s(':headers', v); }
    /** rowNumbers. Serialized as `:rowNumbers` */
    public get rowNumbers(): BooleanValue | undefined { return this._g(':rowNumbers'); }
    public set rowNumbers(v: BooleanValue | undefined) { this._s(':rowNumbers', v); }
    /** disableRefresh. Serialized as `:disableRefresh` */
    public get disableRefresh(): BooleanValue | undefined { return this._g(':disableRefresh'); }
    public set disableRefresh(v: BooleanValue | undefined) { this._s(':disableRefresh', v); }
    /** backgroundRefresh. Serialized as `:backgroundRefresh` */
    public get backgroundRefresh(): BooleanValue | undefined { return this._g(':backgroundRefresh'); }
    public set backgroundRefresh(v: BooleanValue | undefined) { this._s(':backgroundRefresh', v); }
    /** firstBackgroundRefresh. Serialized as `:firstBackgroundRefresh` */
    public get firstBackgroundRefresh(): BooleanValue | undefined { return this._g(':firstBackgroundRefresh'); }
    public set firstBackgroundRefresh(v: BooleanValue | undefined) { this._s(':firstBackgroundRefresh', v); }
    /** refreshOnLoad. Serialized as `:refreshOnLoad` */
    public get refreshOnLoad(): BooleanValue | undefined { return this._g(':refreshOnLoad'); }
    public set refreshOnLoad(v: BooleanValue | undefined) { this._s(':refreshOnLoad', v); }
    /** growShrinkType. Serialized as `:growShrinkType` */
    public get growShrinkType(): GrowShrinkValues | undefined { return this._g(':growShrinkType'); }
    public set growShrinkType(v: GrowShrinkValues | undefined) { this._s(':growShrinkType', v); }
    /** fillFormulas. Serialized as `:fillFormulas` */
    public get fillFormulas(): BooleanValue | undefined { return this._g(':fillFormulas'); }
    public set fillFormulas(v: BooleanValue | undefined) { this._s(':fillFormulas', v); }
    /** removeDataOnSave. Serialized as `:removeDataOnSave` */
    public get removeDataOnSave(): BooleanValue | undefined { return this._g(':removeDataOnSave'); }
    public set removeDataOnSave(v: BooleanValue | undefined) { this._s(':removeDataOnSave', v); }
    /** disableEdit. Serialized as `:disableEdit` */
    public get disableEdit(): BooleanValue | undefined { return this._g(':disableEdit'); }
    public set disableEdit(v: BooleanValue | undefined) { this._s(':disableEdit', v); }
    /** preserveFormatting. Serialized as `:preserveFormatting` */
    public get preserveFormatting(): BooleanValue | undefined { return this._g(':preserveFormatting'); }
    public set preserveFormatting(v: BooleanValue | undefined) { this._s(':preserveFormatting', v); }
    /** adjustColumnWidth. Serialized as `:adjustColumnWidth` */
    public get adjustColumnWidth(): BooleanValue | undefined { return this._g(':adjustColumnWidth'); }
    public set adjustColumnWidth(v: BooleanValue | undefined) { this._s(':adjustColumnWidth', v); }
    /** intermediate. Serialized as `:intermediate` */
    public get intermediate(): BooleanValue | undefined { return this._g(':intermediate'); }
    public set intermediate(v: BooleanValue | undefined) { this._s(':intermediate', v); }
    /** connectionId. Serialized as `:connectionId` */
    public get connectionId(): UInt32Value | undefined { return this._g(':connectionId'); }
    public set connectionId(v: UInt32Value | undefined) { this._s(':connectionId', v); }
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
    /** Returns QueryTableRefresh. */
    public get queryTableRefresh(): QueryTableRefresh | undefined { return this._f(QueryTableRefresh); }
    /** Returns QueryTableExtensionList. */
    public get queryTableExtensionList(): QueryTableExtensionList | undefined { return this._f(QueryTableExtensionList); }

}
/** PivotTable Definition. Serialized as `x:pivotTableDefinition` */
export class PivotTableDefinition extends OxmlPartRootElement<Location | PivotFields | RowFields | RowItems | ColumnFields | ColumnItems | PageFields | DataFields | Formats | ConditionalFormats | ChartFormats | PivotHierarchies | PivotTableStyle | PivotFilters | RowHierarchiesUsage | ColumnHierarchiesUsage | PivotTableDefinitionExtensionList> {

    public static override _Q = 'x:pivotTableDefinition';
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
    /** Returns Location. */
    public get location(): Location | undefined { return this._f(Location); }
    /** Returns PivotFields. */
    public get pivotFields(): PivotFields | undefined { return this._f(PivotFields); }
    /** Returns RowFields. */
    public get rowFields(): RowFields | undefined { return this._f(RowFields); }
    /** Returns RowItems. */
    public get rowItems(): RowItems | undefined { return this._f(RowItems); }
    /** Returns ColumnFields. */
    public get columnFields(): ColumnFields | undefined { return this._f(ColumnFields); }
    /** Returns ColumnItems. */
    public get columnItems(): ColumnItems | undefined { return this._f(ColumnItems); }
    /** Returns PageFields. */
    public get pageFields(): PageFields | undefined { return this._f(PageFields); }
    /** Returns DataFields. */
    public get dataFields(): DataFields | undefined { return this._f(DataFields); }
    /** Returns Formats. */
    public get formats(): Formats | undefined { return this._f(Formats); }
    /** Returns ConditionalFormats. */
    public get conditionalFormats(): ConditionalFormats | undefined { return this._f(ConditionalFormats); }
    /** Returns ChartFormats. */
    public get chartFormats(): ChartFormats | undefined { return this._f(ChartFormats); }
    /** Returns PivotHierarchies. */
    public get pivotHierarchies(): PivotHierarchies | undefined { return this._f(PivotHierarchies); }
    /** Returns PivotTableStyle. */
    public get pivotTableStyle(): PivotTableStyle | undefined { return this._f(PivotTableStyle); }
    /** Returns PivotFilters. */
    public get pivotFilters(): PivotFilters | undefined { return this._f(PivotFilters); }
    /** Returns RowHierarchiesUsage. */
    public get rowHierarchiesUsage(): RowHierarchiesUsage | undefined { return this._f(RowHierarchiesUsage); }
    /** Returns ColumnHierarchiesUsage. */
    public get columnHierarchiesUsage(): ColumnHierarchiesUsage | undefined { return this._f(ColumnHierarchiesUsage); }
    /** Returns PivotTableDefinitionExtensionList. */
    public get pivotTableDefinitionExtensionList(): PivotTableDefinitionExtensionList | undefined { return this._f(PivotTableDefinitionExtensionList); }

}
/** PivotCache Records. Serialized as `x:pivotCacheRecords` */
export class PivotCacheRecords extends OxmlPartRootElement<PivotCacheRecord | ExtensionList> {

    public static override _Q = 'x:pivotCacheRecords';
    public static override _A = [':count',];
    /** PivotCache Records Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** PivotCache Definition. Serialized as `x:pivotCacheDefinition` */
export class PivotCacheDefinition extends OxmlPartRootElement<CacheSource | CacheFields | CacheHierarchies | Kpis | TupleCache | CalculatedItems | CalculatedMembers | Dimensions | MeasureGroups | Maps | PivotCacheDefinitionExtensionList> {

    public static override _Q = 'x:pivotCacheDefinition';
    public static override _A = ['r:id',':invalid',':saveData',':refreshOnLoad',':optimizeMemory',':enableRefresh',':refreshedBy',':refreshedDateIso',':refreshedDate',':backgroundQuery',':missingItemsLimit',':createdVersion',':refreshedVersion',':minRefreshableVersion',':recordCount',':upgradeOnRefresh',':tupleCache',':supportSubquery',':supportAdvancedDrill',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** invalid. Serialized as `:invalid` */
    public get invalid(): BooleanValue | undefined { return this._g(':invalid'); }
    public set invalid(v: BooleanValue | undefined) { this._s(':invalid', v); }
    /** saveData. Serialized as `:saveData` */
    public get saveData(): BooleanValue | undefined { return this._g(':saveData'); }
    public set saveData(v: BooleanValue | undefined) { this._s(':saveData', v); }
    /** refreshOnLoad. Serialized as `:refreshOnLoad` */
    public get refreshOnLoad(): BooleanValue | undefined { return this._g(':refreshOnLoad'); }
    public set refreshOnLoad(v: BooleanValue | undefined) { this._s(':refreshOnLoad', v); }
    /** optimizeMemory. Serialized as `:optimizeMemory` */
    public get optimizeMemory(): BooleanValue | undefined { return this._g(':optimizeMemory'); }
    public set optimizeMemory(v: BooleanValue | undefined) { this._s(':optimizeMemory', v); }
    /** enableRefresh. Serialized as `:enableRefresh` */
    public get enableRefresh(): BooleanValue | undefined { return this._g(':enableRefresh'); }
    public set enableRefresh(v: BooleanValue | undefined) { this._s(':enableRefresh', v); }
    /** refreshedBy. Serialized as `:refreshedBy` */
    public get refreshedBy(): StringValue | undefined { return this._g(':refreshedBy'); }
    public set refreshedBy(v: StringValue | undefined) { this._s(':refreshedBy', v); }
    /** refreshedDateIso. Serialized as `:refreshedDateIso` */
    public get lastRefreshedDateIso(): DateTimeValue | undefined { return this._g(':refreshedDateIso'); }
    public set lastRefreshedDateIso(v: DateTimeValue | undefined) { this._s(':refreshedDateIso', v); }
    /** refreshedDate. Serialized as `:refreshedDate` */
    public get refreshedDate(): DoubleValue | undefined { return this._g(':refreshedDate'); }
    public set refreshedDate(v: DoubleValue | undefined) { this._s(':refreshedDate', v); }
    /** backgroundQuery. Serialized as `:backgroundQuery` */
    public get backgroundQuery(): BooleanValue | undefined { return this._g(':backgroundQuery'); }
    public set backgroundQuery(v: BooleanValue | undefined) { this._s(':backgroundQuery', v); }
    /** missingItemsLimit. Serialized as `:missingItemsLimit` */
    public get missingItemsLimit(): UInt32Value | undefined { return this._g(':missingItemsLimit'); }
    public set missingItemsLimit(v: UInt32Value | undefined) { this._s(':missingItemsLimit', v); }
    /** createdVersion. Serialized as `:createdVersion` */
    public get createdVersion(): ByteValue | undefined { return this._g(':createdVersion'); }
    public set createdVersion(v: ByteValue | undefined) { this._s(':createdVersion', v); }
    /** refreshedVersion. Serialized as `:refreshedVersion` */
    public get refreshedVersion(): ByteValue | undefined { return this._g(':refreshedVersion'); }
    public set refreshedVersion(v: ByteValue | undefined) { this._s(':refreshedVersion', v); }
    /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
    public get minRefreshableVersion(): ByteValue | undefined { return this._g(':minRefreshableVersion'); }
    public set minRefreshableVersion(v: ByteValue | undefined) { this._s(':minRefreshableVersion', v); }
    /** recordCount. Serialized as `:recordCount` */
    public get recordCount(): UInt32Value | undefined { return this._g(':recordCount'); }
    public set recordCount(v: UInt32Value | undefined) { this._s(':recordCount', v); }
    /** upgradeOnRefresh. Serialized as `:upgradeOnRefresh` */
    public get upgradeOnRefresh(): BooleanValue | undefined { return this._g(':upgradeOnRefresh'); }
    public set upgradeOnRefresh(v: BooleanValue | undefined) { this._s(':upgradeOnRefresh', v); }
    /** tupleCache. Serialized as `:tupleCache` */
    public get isTupleCache(): BooleanValue | undefined { return this._g(':tupleCache'); }
    public set isTupleCache(v: BooleanValue | undefined) { this._s(':tupleCache', v); }
    /** supportSubquery. Serialized as `:supportSubquery` */
    public get supportSubquery(): BooleanValue | undefined { return this._g(':supportSubquery'); }
    public set supportSubquery(v: BooleanValue | undefined) { this._s(':supportSubquery', v); }
    /** supportAdvancedDrill. Serialized as `:supportAdvancedDrill` */
    public get supportAdvancedDrill(): BooleanValue | undefined { return this._g(':supportAdvancedDrill'); }
    public set supportAdvancedDrill(v: BooleanValue | undefined) { this._s(':supportAdvancedDrill', v); }
    /** Returns CacheSource. */
    public get cacheSource(): CacheSource | undefined { return this._f(CacheSource); }
    /** Returns CacheFields. */
    public get cacheFields(): CacheFields | undefined { return this._f(CacheFields); }
    /** Returns CacheHierarchies. */
    public get cacheHierarchies(): CacheHierarchies | undefined { return this._f(CacheHierarchies); }
    /** Returns Kpis. */
    public get kpis(): Kpis | undefined { return this._f(Kpis); }
    /** Returns TupleCache. */
    public get tupleCache(): TupleCache | undefined { return this._f(TupleCache); }
    /** Returns CalculatedItems. */
    public get calculatedItems(): CalculatedItems | undefined { return this._f(CalculatedItems); }
    /** Returns CalculatedMembers. */
    public get calculatedMembers(): CalculatedMembers | undefined { return this._f(CalculatedMembers); }
    /** Returns Dimensions. */
    public get dimensions(): Dimensions | undefined { return this._f(Dimensions); }
    /** Returns MeasureGroups. */
    public get measureGroups(): MeasureGroups | undefined { return this._f(MeasureGroups); }
    /** Returns Maps. */
    public get maps(): Maps | undefined { return this._f(Maps); }
    /** Returns PivotCacheDefinitionExtensionList. */
    public get pivotCacheDefinitionExtensionList(): PivotCacheDefinitionExtensionList | undefined { return this._f(PivotCacheDefinitionExtensionList); }

}
/** Connections. Serialized as `x:connections` */
export class Connections extends OxmlPartRootElement<Connection> {

    public static override _Q = 'x:connections';

}
/** XML Mapping. Serialized as `x:MapInfo` */
export class MapInfo extends OxmlPartRootElement<Schema | Map> {

    public static override _Q = 'x:MapInfo';
    public static override _A = [':SelectionNamespaces',];
    /** Prefix Mappings for XPath Expressions. Serialized as `:SelectionNamespaces` */
    public get selectionNamespaces(): StringValue | undefined { return this._g(':SelectionNamespaces'); }
    public set selectionNamespaces(v: StringValue | undefined) { this._s(':SelectionNamespaces', v); }

}
/** Comments. Serialized as `x:comments` */
export class Comments extends OxmlPartRootElement<Authors | CommentList | ExtensionList> {

    public static override _Q = 'x:comments';
    /** Authors. */
    public get authors(): Authors | undefined { return this._f(Authors); }
    /** List of Comments. */
    public get commentList(): CommentList | undefined { return this._f(CommentList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Calculation Chain Info. Serialized as `x:calcChain` */
export class CalculationChain extends OxmlPartRootElement<CalculationCell | ExtensionList> {

    public static override _Q = 'x:calcChain';

}
/** Extension. Serialized as `x:ext` */
export class Extension extends OxmlCompositeElement {

    public static override _Q = 'x:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}

export function initSpreadsheetNamespace() {
    SheetDataSet._C = {
        'x:sheetData': ExternalSheetData,
    };
    ExternalDefinedNames._C = {
        'x:definedName': ExternalDefinedName,
    };
    SheetNames._C = {
        'x:sheetName': SheetName,
    };
    RichDataPivotCacheGuid._D = {
        ':pivotCacheGuid': new OxmlAttr(':pivotCacheGuid', OxmlType.StringValue),
    };
    PivotCacheDefinitionExtension._C = {
        'x14:pivotCacheDefinition': X14PivotCacheDefinition,
        'x15:pivotCacheDecoupled': X15PivotCacheDecoupled,
        'x15:timelinePivotCacheDefinition': X15TimelinePivotCacheDefinition,
        'x15:pivotCacheIdVersion': X15PivotCacheIdVersion,
        'xxpim:implicitMeasureSupport': XxpimXsdboolean,
        'x:richInfo': RichDataPivotCacheGuid,
        'xxpvi:cacheVersionInfo': XxpviCacheVersionInfo,
    };
    PivotCacheDefinitionExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PivotCacheDefinitionExtensionList._C = {
        'x:ext': PivotCacheDefinitionExtension,
    };
    Maps._C = {
        'x:map': MeasureDimensionMap,
    };
    Maps._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    MeasureGroups._C = {
        'x:measureGroup': MeasureGroup,
    };
    MeasureGroups._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Dimensions._C = {
        'x:dimension': Dimension,
    };
    Dimensions._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CalculatedMembers._C = {
        'x:calculatedMember': CalculatedMember,
    };
    CalculatedMembers._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CalculatedItems._C = {
        'x:calculatedItem': CalculatedItem,
    };
    CalculatedItems._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    TupleCache._C = {
        'x:entries': Entries,
        'x:sets': Sets,
        'x:queryCache': QueryCache,
        'x:serverFormats': ServerFormats,
        'x:extLst': ExtensionList,
    };
    Kpis._C = {
        'x:kpi': Kpi,
    };
    Kpis._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CacheHierarchies._C = {
        'x:cacheHierarchy': CacheHierarchy,
    };
    CacheHierarchies._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CacheFields._C = {
        'x:cacheField': CacheField,
    };
    CacheFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CacheSource._C = {
        'x:worksheetSource': WorksheetSource,
        'x:consolidation': Consolidation,
        'x:extLst': CacheSourceExtensionList,
    };
    CacheSource._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, SourceValuesArray),
        ':connectionId': new OxmlAttr(':connectionId', OxmlType.UInt32Value),
    };
    PivotTableDefinitionExtension._C = {
        'x14:pivotTableDefinition': X14PivotTableDefinition,
        'x15:pivotTableData': X15PivotTableData,
        'x15:pivotTableUISettings': X15PivotTableUISettings,
        'xxpvi:pivotVersionInfo': XxpviPivotVersionInfo,
    };
    PivotTableDefinitionExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PivotTableDefinitionExtensionList._C = {
        'x:ext': PivotTableDefinitionExtension,
    };
    ColumnHierarchiesUsage._C = {
        'x:colHierarchyUsage': ColumnHierarchyUsage,
    };
    ColumnHierarchiesUsage._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RowHierarchiesUsage._C = {
        'x:rowHierarchyUsage': RowHierarchyUsage,
    };
    RowHierarchiesUsage._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotFilters._C = {
        'x:filter': PivotFilter,
    };
    PivotFilters._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotTableStyle._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':showRowHeaders': new OxmlAttr(':showRowHeaders', OxmlType.BooleanValue),
        ':showColHeaders': new OxmlAttr(':showColHeaders', OxmlType.BooleanValue),
        ':showRowStripes': new OxmlAttr(':showRowStripes', OxmlType.BooleanValue),
        ':showColStripes': new OxmlAttr(':showColStripes', OxmlType.BooleanValue),
        ':showLastColumn': new OxmlAttr(':showLastColumn', OxmlType.BooleanValue),
    };
    PivotHierarchies._C = {
        'x:pivotHierarchy': PivotHierarchy,
    };
    PivotHierarchies._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ChartFormats._C = {
        'x:chartFormat': ChartFormat,
    };
    ChartFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConditionalFormats._C = {
        'x:conditionalFormat': ConditionalFormat,
    };
    ConditionalFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Formats._C = {
        'x:format': Format,
    };
    Formats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    DataFields._C = {
        'x:dataField': DataField,
    };
    DataFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PageFields._C = {
        'x:pageField': PageField,
    };
    PageFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ColumnItems._C = {
        'x:i': RowItem,
    };
    ColumnItems._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ColumnFields._C = {
        'x:field': Field,
    };
    ColumnFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RowItems._C = {
        'x:i': RowItem,
    };
    RowItems._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RowFields._C = {
        'x:field': Field,
    };
    RowFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotFields._C = {
        'x:pivotField': PivotField,
    };
    PivotFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Location._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':firstHeaderRow': new OxmlAttr(':firstHeaderRow', OxmlType.UInt32Value),
        ':firstDataRow': new OxmlAttr(':firstDataRow', OxmlType.UInt32Value),
        ':firstDataCol': new OxmlAttr(':firstDataCol', OxmlType.UInt32Value),
        ':rowPageCount': new OxmlAttr(':rowPageCount', OxmlType.UInt32Value),
        ':colPageCount': new OxmlAttr(':colPageCount', OxmlType.UInt32Value),
    };
    WorkbookExtension._C = {
        'x14:definedNames': X14DefinedNames,
        'x14:pivotCaches': X14PivotCaches,
        'x14:slicerCaches': X14SlicerCaches,
        'x15:slicerCaches': X15SlicerCaches,
        'x14:workbookPr': X14WorkbookProperties,
        'x15:pivotCaches': X15PivotCaches,
        'x15:pivotTableReferences': X15PivotTableReferences,
        'x15:timelineCachePivotCaches': X15TimelineCachePivotCaches,
        'x15:timelineCacheRefs': X15TimelineCacheReferences,
        'x15:workbookPr': X15WorkbookProperties,
        'x15:dataModel': X15DataModel,
    };
    WorkbookExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    WorkbookExtensionList._C = {
        'x:ext': WorkbookExtension,
    };
    WebPublishObjects._C = {
        'x:webPublishObject': WebPublishObject,
    };
    WebPublishObjects._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    FileRecoveryProperties._D = {
        ':autoRecover': new OxmlAttr(':autoRecover', OxmlType.BooleanValue),
        ':crashSave': new OxmlAttr(':crashSave', OxmlType.BooleanValue),
        ':dataExtractLoad': new OxmlAttr(':dataExtractLoad', OxmlType.BooleanValue),
        ':repairLoad': new OxmlAttr(':repairLoad', OxmlType.BooleanValue),
    };
    WebPublishing._D = {
        ':css': new OxmlAttr(':css', OxmlType.BooleanValue),
        ':thicket': new OxmlAttr(':thicket', OxmlType.BooleanValue),
        ':longFileNames': new OxmlAttr(':longFileNames', OxmlType.BooleanValue),
        ':vml': new OxmlAttr(':vml', OxmlType.BooleanValue),
        ':allowPng': new OxmlAttr(':allowPng', OxmlType.BooleanValue),
        ':targetScreenSize': new OxmlAttr(':targetScreenSize', OxmlType.EnumValue, TargetScreenSizeValuesArray),
        ':dpi': new OxmlAttr(':dpi', OxmlType.UInt32Value),
        ':codePage': new OxmlAttr(':codePage', OxmlType.UInt32Value),
        ':characterSet': new OxmlAttr(':characterSet', OxmlType.StringValue),
    };
    PivotCaches._C = {
        'x:pivotCache': PivotCache,
    };
    CustomWorkbookViews._C = {
        'x:customWorkbookView': CustomWorkbookView,
    };
    OleSize._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    CalculationProperties._D = {
        ':calcId': new OxmlAttr(':calcId', OxmlType.UInt32Value),
        ':calcMode': new OxmlAttr(':calcMode', OxmlType.EnumValue, CalculateModeValuesArray),
        ':fullCalcOnLoad': new OxmlAttr(':fullCalcOnLoad', OxmlType.BooleanValue),
        ':refMode': new OxmlAttr(':refMode', OxmlType.EnumValue, ReferenceModeValuesArray),
        ':iterate': new OxmlAttr(':iterate', OxmlType.BooleanValue),
        ':iterateCount': new OxmlAttr(':iterateCount', OxmlType.UInt32Value),
        ':iterateDelta': new OxmlAttr(':iterateDelta', OxmlType.DoubleValue),
        ':fullPrecision': new OxmlAttr(':fullPrecision', OxmlType.BooleanValue),
        ':calcCompleted': new OxmlAttr(':calcCompleted', OxmlType.BooleanValue),
        ':calcOnSave': new OxmlAttr(':calcOnSave', OxmlType.BooleanValue),
        ':concurrentCalc': new OxmlAttr(':concurrentCalc', OxmlType.BooleanValue),
        ':concurrentManualCount': new OxmlAttr(':concurrentManualCount', OxmlType.UInt32Value),
        ':forceFullCalc': new OxmlAttr(':forceFullCalc', OxmlType.BooleanValue),
    };
    DefinedNames._C = {
        'x:definedName': DefinedName,
    };
    ExternalReferences._C = {
        'x:externalReference': ExternalReference,
    };
    FunctionGroups._C = {
        'x:functionGroup': FunctionGroup,
    };
    FunctionGroups._D = {
        ':builtInGroupCount': new OxmlAttr(':builtInGroupCount', OxmlType.UInt32Value),
    };
    Sheets._C = {
        'x:sheet': Sheet,
    };
    BookViews._C = {
        'x:workbookView': WorkbookView,
    };
    WorkbookProtection._D = {
        ':workbookPassword': new OxmlAttr(':workbookPassword', OxmlType.HexBinaryValue),
        ':revisionsPassword': new OxmlAttr(':revisionsPassword', OxmlType.HexBinaryValue),
        ':lockStructure': new OxmlAttr(':lockStructure', OxmlType.BooleanValue),
        ':lockWindows': new OxmlAttr(':lockWindows', OxmlType.BooleanValue),
        ':lockRevision': new OxmlAttr(':lockRevision', OxmlType.BooleanValue),
        ':revisionsAlgorithmName': new OxmlAttr(':revisionsAlgorithmName', OxmlType.StringValue),
        ':revisionsHashValue': new OxmlAttr(':revisionsHashValue', OxmlType.Base64BinaryValue),
        ':revisionsSaltValue': new OxmlAttr(':revisionsSaltValue', OxmlType.Base64BinaryValue),
        ':revisionsSpinCount': new OxmlAttr(':revisionsSpinCount', OxmlType.UInt32Value),
        ':workbookAlgorithmName': new OxmlAttr(':workbookAlgorithmName', OxmlType.StringValue),
        ':workbookHashValue': new OxmlAttr(':workbookHashValue', OxmlType.Base64BinaryValue),
        ':workbookSaltValue': new OxmlAttr(':workbookSaltValue', OxmlType.Base64BinaryValue),
        ':workbookSpinCount': new OxmlAttr(':workbookSpinCount', OxmlType.UInt32Value),
    };
    WorkbookProperties._D = {
        ':date1904': new OxmlAttr(':date1904', OxmlType.BooleanValue),
        ':dateCompatibility': new OxmlAttr(':dateCompatibility', OxmlType.BooleanValue),
        ':showObjects': new OxmlAttr(':showObjects', OxmlType.EnumValue, ObjectDisplayValuesArray),
        ':showBorderUnselectedTables': new OxmlAttr(':showBorderUnselectedTables', OxmlType.BooleanValue),
        ':filterPrivacy': new OxmlAttr(':filterPrivacy', OxmlType.BooleanValue),
        ':promptedSolutions': new OxmlAttr(':promptedSolutions', OxmlType.BooleanValue),
        ':showInkAnnotation': new OxmlAttr(':showInkAnnotation', OxmlType.BooleanValue),
        ':backupFile': new OxmlAttr(':backupFile', OxmlType.BooleanValue),
        ':saveExternalLinkValues': new OxmlAttr(':saveExternalLinkValues', OxmlType.BooleanValue),
        ':updateLinks': new OxmlAttr(':updateLinks', OxmlType.EnumValue, UpdateLinksBehaviorValuesArray),
        ':codeName': new OxmlAttr(':codeName', OxmlType.StringValue),
        ':hidePivotFieldList': new OxmlAttr(':hidePivotFieldList', OxmlType.BooleanValue),
        ':showPivotChartFilter': new OxmlAttr(':showPivotChartFilter', OxmlType.BooleanValue),
        ':allowRefreshQuery': new OxmlAttr(':allowRefreshQuery', OxmlType.BooleanValue),
        ':publishItems': new OxmlAttr(':publishItems', OxmlType.BooleanValue),
        ':checkCompatibility': new OxmlAttr(':checkCompatibility', OxmlType.BooleanValue),
        ':autoCompressPictures': new OxmlAttr(':autoCompressPictures', OxmlType.BooleanValue),
        ':refreshAllConnections': new OxmlAttr(':refreshAllConnections', OxmlType.BooleanValue),
        ':defaultThemeVersion': new OxmlAttr(':defaultThemeVersion', OxmlType.UInt32Value),
    };
    FileSharing._D = {
        ':readOnlyRecommended': new OxmlAttr(':readOnlyRecommended', OxmlType.BooleanValue),
        ':userName': new OxmlAttr(':userName', OxmlType.StringValue),
        ':reservationPassword': new OxmlAttr(':reservationPassword', OxmlType.HexBinaryValue),
        ':algorithmName': new OxmlAttr(':algorithmName', OxmlType.StringValue),
        ':hashValue': new OxmlAttr(':hashValue', OxmlType.Base64BinaryValue),
        ':saltValue': new OxmlAttr(':saltValue', OxmlType.Base64BinaryValue),
        ':spinCount': new OxmlAttr(':spinCount', OxmlType.UInt32Value),
    };
    FileVersion._D = {
        ':appName': new OxmlAttr(':appName', OxmlType.StringValue),
        ':lastEdited': new OxmlAttr(':lastEdited', OxmlType.StringValue),
        ':lowestEdited': new OxmlAttr(':lowestEdited', OxmlType.StringValue),
        ':rupBuild': new OxmlAttr(':rupBuild', OxmlType.StringValue),
        ':codeName': new OxmlAttr(':codeName', OxmlType.StringValue),
    };
    StylesheetExtension._C = {
        'x14:dxfs': X14DifferentialFormats,
        'x14:slicerStyles': X14SlicerStyles,
        'x15:dxfs': X15DifferentialFormats,
        'x15:timelineStyles': X15TimelineStyles,
    };
    StylesheetExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    StylesheetExtensionList._C = {
        'x:ext': StylesheetExtension,
    };
    Colors._C = {
        'x:indexedColors': IndexedColors,
        'x:mruColors': MruColors,
    };
    TableStyles._C = {
        'x:tableStyle': TableStyle,
    };
    TableStyles._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':defaultTableStyle': new OxmlAttr(':defaultTableStyle', OxmlType.StringValue),
        ':defaultPivotStyle': new OxmlAttr(':defaultPivotStyle', OxmlType.StringValue),
    };
    DifferentialFormats._C = {
        'x:dxf': DifferentialFormat,
    };
    DifferentialFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CellStyles._C = {
        'x:cellStyle': CellStyle,
    };
    CellStyles._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CellFormats._C = {
        'x:xf': CellFormat,
    };
    CellFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CellStyleFormats._C = {
        'x:xf': CellFormat,
    };
    CellStyleFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Borders._C = {
        'x:border': Border,
    };
    Borders._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Fills._C = {
        'x:fill': Fill,
    };
    Fills._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Fonts._C = {
        'x:font': Font,
    };
    Fonts._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        'x14ac:knownFonts': new OxmlAttr('x14ac:knownFonts', OxmlType.BooleanValue),
    };
    NumberingFormats._C = {
        'x:numFmt': NumberingFormat,
    };
    NumberingFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    WorksheetExtension._C = {
        'x14:conditionalFormattings': X14ConditionalFormattings,
        'x14:dataValidations': X14DataValidations,
        'x14:sparklineGroups': X14SparklineGroups,
        'x14:slicerList': X14SlicerList,
        'x14:protectedRanges': X14ProtectedRanges,
        'x14:ignoredErrors': X14IgnoredErrors,
        'x15:webExtensions': X15WebExtensions,
        'x15:timelineRefs': X15TimelineReferences,
    };
    WorksheetExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    WorksheetExtensionList._C = {
        'x:ext': WorksheetExtension,
    };
    TableParts._C = {
        'x:tablePart': TablePart,
    };
    TableParts._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    IgnoredErrors._C = {
        'x:ignoredError': IgnoredError,
        'x:extLst': ExtensionList,
    };
    CellWatches._C = {
        'x:cellWatch': CellWatch,
    };
    Hyperlinks._C = {
        'x:hyperlink': Hyperlink,
    };
    DataValidations._C = {
        'x:dataValidation': DataValidation,
    };
    DataValidations._D = {
        ':disablePrompts': new OxmlAttr(':disablePrompts', OxmlType.BooleanValue),
        ':xWindow': new OxmlAttr(':xWindow', OxmlType.UInt32Value),
        ':yWindow': new OxmlAttr(':yWindow', OxmlType.UInt32Value),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    MergeCells._C = {
        'x:mergeCell': MergeCell,
    };
    MergeCells._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Scenarios._C = {
        'x:scenario': Scenario,
    };
    Scenarios._D = {
        ':current': new OxmlAttr(':current', OxmlType.UInt32Value),
        ':show': new OxmlAttr(':show', OxmlType.UInt32Value),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
    };
    ProtectedRanges._C = {
        'x:protectedRange': ProtectedRange,
    };
    SheetCalculationProperties._D = {
        ':fullCalcOnLoad': new OxmlAttr(':fullCalcOnLoad', OxmlType.BooleanValue),
    };
    QueryTableExtensionList._C = {
        'x:ext': QueryTableExtension,
    };
    QueryTableRefresh._C = {
        'x:queryTableFields': QueryTableFields,
        'x:queryTableDeletedFields': QueryTableDeletedFields,
        'x:sortState': SortState,
        'x:extLst': ExtensionList,
    };
    QueryTableRefresh._D = {
        ':preserveSortFilterLayout': new OxmlAttr(':preserveSortFilterLayout', OxmlType.BooleanValue),
        ':fieldIdWrapped': new OxmlAttr(':fieldIdWrapped', OxmlType.BooleanValue),
        ':headersInLastRefresh': new OxmlAttr(':headersInLastRefresh', OxmlType.BooleanValue),
        ':minimumVersion': new OxmlAttr(':minimumVersion', OxmlType.ByteValue),
        ':nextId': new OxmlAttr(':nextId', OxmlType.UInt32Value),
        ':unboundColumnsLeft': new OxmlAttr(':unboundColumnsLeft', OxmlType.UInt32Value),
        ':unboundColumnsRight': new OxmlAttr(':unboundColumnsRight', OxmlType.UInt32Value),
    };
    PivotFilterExtensionList._C = {
        'x:ext': PivotFilterExtension,
    };
    DataFieldExtension._C = {
        'x14:dataField': X14DataField,
        'x15:dataField': X15DataField,
    };
    DataFieldExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    DataFieldExtensionList._C = {
        'x:ext': DataFieldExtension,
    };
    CalculatedMemberExtension._C = {
        'x14:calculatedMember': X14CalculatedMember,
        'x15:calculatedMember': X15CalculatedMember,
    };
    CalculatedMemberExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CalculatedMemberExtensionList._C = {
        'x:ext': CalculatedMemberExtension,
    };
    CacheHierarchyExtension._C = {
        'x14:cacheHierarchy': X14CacheHierarchy,
        'x15:cacheHierarchy': X15CacheHierarchy,
    };
    CacheHierarchyExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CacheHierarchyExtensionList._C = {
        'x:ext': CacheHierarchyExtension,
    };
    GroupLevels._C = {
        'x:groupLevel': GroupLevel,
    };
    GroupLevels._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    FieldsUsage._C = {
        'x:fieldUsage': FieldUsage,
    };
    FieldsUsage._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CacheFieldExtension._C = {
        'x14:cacheField': X14CacheField,
        'x15:cachedUniqueNames': X15CachedUniqueNames,
    };
    CacheFieldExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CacheFieldExtensionList._C = {
        'x:ext': CacheFieldExtension,
    };
    FieldGroup._C = {
        'x:rangePr': RangeProperties,
        'x:discretePr': DiscreteProperties,
        'x:groupItems': GroupItems,
    };
    FieldGroup._D = {
        ':par': new OxmlAttr(':par', OxmlType.UInt32Value),
        ':base': new OxmlAttr(':base', OxmlType.UInt32Value),
    };
    SharedItems._C = {
        'x:m': MissingItem,
        'x:n': NumberItem,
        'x:b': BooleanItem,
        'x:e': ErrorItem,
        'x:s': StringItem,
        'x:d': DateTimeItem,
    };
    SharedItems._D = {
        ':containsSemiMixedTypes': new OxmlAttr(':containsSemiMixedTypes', OxmlType.BooleanValue),
        ':containsNonDate': new OxmlAttr(':containsNonDate', OxmlType.BooleanValue),
        ':containsDate': new OxmlAttr(':containsDate', OxmlType.BooleanValue),
        ':containsString': new OxmlAttr(':containsString', OxmlType.BooleanValue),
        ':containsBlank': new OxmlAttr(':containsBlank', OxmlType.BooleanValue),
        ':containsMixedTypes': new OxmlAttr(':containsMixedTypes', OxmlType.BooleanValue),
        ':containsNumber': new OxmlAttr(':containsNumber', OxmlType.BooleanValue),
        ':containsInteger': new OxmlAttr(':containsInteger', OxmlType.BooleanValue),
        ':minValue': new OxmlAttr(':minValue', OxmlType.DoubleValue),
        ':maxValue': new OxmlAttr(':maxValue', OxmlType.DoubleValue),
        ':minDate': new OxmlAttr(':minDate', OxmlType.DateTimeValue),
        ':maxDate': new OxmlAttr(':maxDate', OxmlType.DateTimeValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':longText': new OxmlAttr(':longText', OxmlType.BooleanValue),
    };
    TextFields._C = {
        'x:textField': TextField,
    };
    TextFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConnectionExtension._C = {
        'x14:connection': X14Connection,
        'x15:connection': X15Connection,
    };
    ConnectionExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ConnectionExtensionList._C = {
        'x:ext': ConnectionExtension,
    };
    Parameters._C = {
        'x:parameter': Parameter,
    };
    Parameters._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    TextProperties._C = {
        'x:textFields': TextFields,
    };
    TextProperties._D = {
        ':prompt': new OxmlAttr(':prompt', OxmlType.BooleanValue),
        ':fileType': new OxmlAttr(':fileType', OxmlType.EnumValue, FileTypeValuesArray),
        ':codePage': new OxmlAttr(':codePage', OxmlType.UInt32Value),
        ':characterSet': new OxmlAttr(':characterSet', OxmlType.StringValue),
        ':firstRow': new OxmlAttr(':firstRow', OxmlType.UInt32Value),
        ':sourceFile': new OxmlAttr(':sourceFile', OxmlType.StringValue),
        ':delimited': new OxmlAttr(':delimited', OxmlType.BooleanValue),
        ':decimal': new OxmlAttr(':decimal', OxmlType.StringValue),
        ':thousands': new OxmlAttr(':thousands', OxmlType.StringValue),
        ':tab': new OxmlAttr(':tab', OxmlType.BooleanValue),
        ':space': new OxmlAttr(':space', OxmlType.BooleanValue),
        ':comma': new OxmlAttr(':comma', OxmlType.BooleanValue),
        ':semicolon': new OxmlAttr(':semicolon', OxmlType.BooleanValue),
        ':consecutive': new OxmlAttr(':consecutive', OxmlType.BooleanValue),
        ':qualifier': new OxmlAttr(':qualifier', OxmlType.EnumValue, QualifierValuesArray),
        ':delimiter': new OxmlAttr(':delimiter', OxmlType.StringValue),
    };
    WebQueryProperties._C = {
        'x:tables': Tables,
    };
    WebQueryProperties._D = {
        ':xml': new OxmlAttr(':xml', OxmlType.BooleanValue),
        ':sourceData': new OxmlAttr(':sourceData', OxmlType.BooleanValue),
        ':parsePre': new OxmlAttr(':parsePre', OxmlType.BooleanValue),
        ':consecutive': new OxmlAttr(':consecutive', OxmlType.BooleanValue),
        ':firstRow': new OxmlAttr(':firstRow', OxmlType.BooleanValue),
        ':xl97': new OxmlAttr(':xl97', OxmlType.BooleanValue),
        ':textDates': new OxmlAttr(':textDates', OxmlType.BooleanValue),
        ':xl2000': new OxmlAttr(':xl2000', OxmlType.BooleanValue),
        ':url': new OxmlAttr(':url', OxmlType.StringValue),
        ':post': new OxmlAttr(':post', OxmlType.StringValue),
        ':htmlTables': new OxmlAttr(':htmlTables', OxmlType.BooleanValue),
        ':htmlFormat': new OxmlAttr(':htmlFormat', OxmlType.EnumValue, HtmlFormattingValuesArray),
        ':editPage': new OxmlAttr(':editPage', OxmlType.StringValue),
    };
    OlapProperties._D = {
        ':local': new OxmlAttr(':local', OxmlType.BooleanValue),
        ':localConnection': new OxmlAttr(':localConnection', OxmlType.StringValue),
        ':localRefresh': new OxmlAttr(':localRefresh', OxmlType.BooleanValue),
        ':sendLocale': new OxmlAttr(':sendLocale', OxmlType.BooleanValue),
        ':rowDrillCount': new OxmlAttr(':rowDrillCount', OxmlType.UInt32Value),
        ':serverFill': new OxmlAttr(':serverFill', OxmlType.BooleanValue),
        ':serverNumberFormat': new OxmlAttr(':serverNumberFormat', OxmlType.BooleanValue),
        ':serverFont': new OxmlAttr(':serverFont', OxmlType.BooleanValue),
        ':serverFontColor': new OxmlAttr(':serverFontColor', OxmlType.BooleanValue),
    };
    DatabaseProperties._D = {
        ':connection': new OxmlAttr(':connection', OxmlType.StringValue),
        ':command': new OxmlAttr(':command', OxmlType.StringValue),
        ':serverCommand': new OxmlAttr(':serverCommand', OxmlType.StringValue),
        ':commandType': new OxmlAttr(':commandType', OxmlType.UInt32Value),
    };
    QueryTableExtension._C = {
        'x15:queryTable': X15QueryTable,
    };
    QueryTableExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PivotFilterExtension._C = {
        'x15:pivotFilter': X15PivotFilter,
        'x15:movingPeriodState': X15MovingPeriodState,
    };
    PivotFilterExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SlicerCacheDefinitionExtension._C = {
        'x15:slicerCachePivotTables': X15SlicerCachePivotTables,
        'x15:tableSlicerCache': X15TableSlicerCache,
        'x15:slicerCacheHideItemsWithNoData': X15SlicerCacheHideItemsWithNoData,
    };
    SlicerCacheDefinitionExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    IconFilter._D = {
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    ColorFilter._D = {
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
        ':cellColor': new OxmlAttr(':cellColor', OxmlType.BooleanValue),
    };
    DynamicFilter._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, DynamicFilterValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
        ':maxVal': new OxmlAttr(':maxVal', OxmlType.DoubleValue),
        ':valIso': new OxmlAttr(':valIso', OxmlType.DateTimeValue),
        ':maxValIso': new OxmlAttr(':maxValIso', OxmlType.DateTimeValue),
    };
    CustomFilters._C = {
        'x:customFilter': CustomFilter,
    };
    CustomFilters._D = {
        ':and': new OxmlAttr(':and', OxmlType.BooleanValue),
    };
    Top10._D = {
        ':top': new OxmlAttr(':top', OxmlType.BooleanValue),
        ':percent': new OxmlAttr(':percent', OxmlType.BooleanValue),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
        ':filterVal': new OxmlAttr(':filterVal', OxmlType.DoubleValue),
    };
    Filters._C = {
        'x14:filter': X14Filter,
        'x:filter': Filter,
        'x:dateGroupItem': DateGroupItem,
    };
    Filters._D = {
        ':blank': new OxmlAttr(':blank', OxmlType.BooleanValue),
        ':calendarType': new OxmlAttr(':calendarType', OxmlType.EnumValue, CalendarValuesArray),
    };
    DateGroupItem._D = {
        ':year': new OxmlAttr(':year', OxmlType.UInt16Value),
        ':month': new OxmlAttr(':month', OxmlType.UInt16Value),
        ':day': new OxmlAttr(':day', OxmlType.UInt16Value),
        ':hour': new OxmlAttr(':hour', OxmlType.UInt16Value),
        ':minute': new OxmlAttr(':minute', OxmlType.UInt16Value),
        ':second': new OxmlAttr(':second', OxmlType.UInt16Value),
        ':dateTimeGrouping': new OxmlAttr(':dateTimeGrouping', OxmlType.EnumValue, DateTimeGroupingValuesArray),
    };
    Filter._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    SortCondition._D = {
        ':descending': new OxmlAttr(':descending', OxmlType.BooleanValue),
        ':sortBy': new OxmlAttr(':sortBy', OxmlType.EnumValue, SortByValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':customList': new OxmlAttr(':customList', OxmlType.StringValue),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetValuesArray),
        ':iconId': new OxmlAttr(':iconId', OxmlType.UInt32Value),
    };
    CommentProperties._C = {
        'x:anchor': ObjectAnchor,
    };
    CommentProperties._D = {
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
        ':defaultSize': new OxmlAttr(':defaultSize', OxmlType.BooleanValue),
        ':print': new OxmlAttr(':print', OxmlType.BooleanValue),
        ':disabled': new OxmlAttr(':disabled', OxmlType.BooleanValue),
        ':uiObject': new OxmlAttr(':uiObject', OxmlType.BooleanValue),
        ':autoFill': new OxmlAttr(':autoFill', OxmlType.BooleanValue),
        ':autoLine': new OxmlAttr(':autoLine', OxmlType.BooleanValue),
        ':altText': new OxmlAttr(':altText', OxmlType.StringValue),
        ':textHAlign': new OxmlAttr(':textHAlign', OxmlType.EnumValue, TextHorizontalAlignmentValuesArray),
        ':textVAlign': new OxmlAttr(':textVAlign', OxmlType.EnumValue, TextVerticalAlignmentValuesArray),
        ':lockText': new OxmlAttr(':lockText', OxmlType.BooleanValue),
        ':justLastX': new OxmlAttr(':justLastX', OxmlType.BooleanValue),
        ':autoScale': new OxmlAttr(':autoScale', OxmlType.BooleanValue),
        ':rowHidden': new OxmlAttr(':rowHidden', OxmlType.BooleanValue),
        ':colHidden': new OxmlAttr(':colHidden', OxmlType.BooleanValue),
    };
    CacheSourceExtensionList._C = {
        'x:ext': CacheSourceExtension,
    };
    Consolidation._C = {
        'x:pages': Pages,
        'x:rangeSets': RangeSets,
    };
    Consolidation._D = {
        ':autoPage': new OxmlAttr(':autoPage', OxmlType.BooleanValue),
    };
    WorksheetSource._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sheet': new OxmlAttr(':sheet', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    PivotFieldExtensionList._C = {
        'x:ext': PivotFieldExtension,
    };
    AutoSortScope._C = {
        'x:pivotArea': PivotArea,
    };
    Items._C = {
        'x:item': Item,
    };
    Items._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotHierarchyExtensionList._C = {
        'x:ext': PivotHierarchyExtension,
    };
    Members._C = {
        'x:member': Member,
    };
    Members._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':level': new OxmlAttr(':level', OxmlType.UInt32Value),
    };
    MemberProperties._C = {
        'x:mp': MemberProperty,
    };
    MemberProperties._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CustomProperties._C = {
        'x:customPr': CustomProperty,
    };
    ConditionalFormatting._C = {
        'x:cfRule': ConditionalFormattingRule,
        'x:extLst': ExtensionList,
    };
    ConditionalFormatting._D = {
        ':pivot': new OxmlAttr(':pivot', OxmlType.BooleanValue),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
    };
    DataConsolidate._C = {
        'x:dataRefs': DataReferences,
    };
    DataConsolidate._D = {
        ':function': new OxmlAttr(':function', OxmlType.EnumValue, DataConsolidateFunctionValuesArray),
        ':leftLabels': new OxmlAttr(':leftLabels', OxmlType.BooleanValue),
        ':startLabels': new OxmlAttr(':startLabels', OxmlType.BooleanValue),
        ':topLabels': new OxmlAttr(':topLabels', OxmlType.BooleanValue),
        ':link': new OxmlAttr(':link', OxmlType.BooleanValue),
    };
    SheetData._C = {
        'x:row': Row,
    };
    Columns._C = {
        'x:col': Column,
    };
    SheetDimension._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    Controls._C = {
        'x:control': Control,
    };
    OleObjects._C = {
        'x:oleObject': OleObject,
    };
    CustomSheetViews._C = {
        'x:customSheetView': CustomSheetView,
    };
    SheetProtection._D = {
        ':password': new OxmlAttr(':password', OxmlType.HexBinaryValue),
        ':algorithmName': new OxmlAttr(':algorithmName', OxmlType.StringValue),
        ':hashValue': new OxmlAttr(':hashValue', OxmlType.Base64BinaryValue),
        ':saltValue': new OxmlAttr(':saltValue', OxmlType.Base64BinaryValue),
        ':spinCount': new OxmlAttr(':spinCount', OxmlType.UInt32Value),
        ':sheet': new OxmlAttr(':sheet', OxmlType.BooleanValue),
        ':objects': new OxmlAttr(':objects', OxmlType.BooleanValue),
        ':scenarios': new OxmlAttr(':scenarios', OxmlType.BooleanValue),
        ':formatCells': new OxmlAttr(':formatCells', OxmlType.BooleanValue),
        ':formatColumns': new OxmlAttr(':formatColumns', OxmlType.BooleanValue),
        ':formatRows': new OxmlAttr(':formatRows', OxmlType.BooleanValue),
        ':insertColumns': new OxmlAttr(':insertColumns', OxmlType.BooleanValue),
        ':insertRows': new OxmlAttr(':insertRows', OxmlType.BooleanValue),
        ':insertHyperlinks': new OxmlAttr(':insertHyperlinks', OxmlType.BooleanValue),
        ':deleteColumns': new OxmlAttr(':deleteColumns', OxmlType.BooleanValue),
        ':deleteRows': new OxmlAttr(':deleteRows', OxmlType.BooleanValue),
        ':selectLockedCells': new OxmlAttr(':selectLockedCells', OxmlType.BooleanValue),
        ':sort': new OxmlAttr(':sort', OxmlType.BooleanValue),
        ':autoFilter': new OxmlAttr(':autoFilter', OxmlType.BooleanValue),
        ':pivotTables': new OxmlAttr(':pivotTables', OxmlType.BooleanValue),
        ':selectUnlockedCells': new OxmlAttr(':selectUnlockedCells', OxmlType.BooleanValue),
    };
    SheetFormatProperties._D = {
        ':baseColWidth': new OxmlAttr(':baseColWidth', OxmlType.UInt32Value),
        ':defaultColWidth': new OxmlAttr(':defaultColWidth', OxmlType.DoubleValue),
        ':defaultRowHeight': new OxmlAttr(':defaultRowHeight', OxmlType.DoubleValue),
        ':customHeight': new OxmlAttr(':customHeight', OxmlType.BooleanValue),
        ':zeroHeight': new OxmlAttr(':zeroHeight', OxmlType.BooleanValue),
        ':thickTop': new OxmlAttr(':thickTop', OxmlType.BooleanValue),
        ':thickBottom': new OxmlAttr(':thickBottom', OxmlType.BooleanValue),
        ':outlineLevelRow': new OxmlAttr(':outlineLevelRow', OxmlType.ByteValue),
        ':outlineLevelCol': new OxmlAttr(':outlineLevelCol', OxmlType.ByteValue),
        'x14ac:dyDescent': new OxmlAttr('x14ac:dyDescent', OxmlType.DoubleValue),
    };
    SheetViews._C = {
        'x:sheetView': SheetView,
        'x:extLst': ExtensionList,
    };
    SheetProperties._C = {
        'x:tabColor': TabColor,
        'x:outlinePr': OutlineProperties,
        'x:pageSetUpPr': PageSetupProperties,
    };
    SheetProperties._D = {
        ':syncHorizontal': new OxmlAttr(':syncHorizontal', OxmlType.BooleanValue),
        ':syncVertical': new OxmlAttr(':syncVertical', OxmlType.BooleanValue),
        ':syncRef': new OxmlAttr(':syncRef', OxmlType.StringValue),
        ':transitionEvaluation': new OxmlAttr(':transitionEvaluation', OxmlType.BooleanValue),
        ':transitionEntry': new OxmlAttr(':transitionEntry', OxmlType.BooleanValue),
        ':published': new OxmlAttr(':published', OxmlType.BooleanValue),
        ':codeName': new OxmlAttr(':codeName', OxmlType.StringValue),
        ':filterMode': new OxmlAttr(':filterMode', OxmlType.BooleanValue),
        ':enableFormatConditionsCalculation': new OxmlAttr(':enableFormatConditionsCalculation', OxmlType.BooleanValue),
    };
    DataReferences._C = {
        'x:dataRef': DataReference,
    };
    DataReferences._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConditionalFormattingRuleExtensionList._C = {
        'x:ext': ConditionalFormattingRuleExtension,
    };
    IconSet._C = {
        'x:cfvo': ConditionalFormatValueObject,
    };
    IconSet._D = {
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.EnumValue, IconSetValuesArray),
        ':showValue': new OxmlAttr(':showValue', OxmlType.BooleanValue),
        ':percent': new OxmlAttr(':percent', OxmlType.BooleanValue),
        ':reverse': new OxmlAttr(':reverse', OxmlType.BooleanValue),
    };
    DataBar._C = {
        'x:cfvo': ConditionalFormatValueObject,
        'x:color': Color,
    };
    DataBar._D = {
        ':minLength': new OxmlAttr(':minLength', OxmlType.UInt32Value),
        ':maxLength': new OxmlAttr(':maxLength', OxmlType.UInt32Value),
        ':showValue': new OxmlAttr(':showValue', OxmlType.BooleanValue),
    };
    ColorScale._C = {
        'x:cfvo': ConditionalFormatValueObject,
        'x:color': Color,
    };
    WebPublishItems._C = {
        'x:webPublishItem': WebPublishItem,
    };
    WebPublishItems._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Picture._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    DrawingHeaderFooter._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':lho': new OxmlAttr(':lho', OxmlType.UInt32Value),
        ':lhe': new OxmlAttr(':lhe', OxmlType.UInt32Value),
        ':lhf': new OxmlAttr(':lhf', OxmlType.UInt32Value),
        ':cho': new OxmlAttr(':cho', OxmlType.UInt32Value),
        ':che': new OxmlAttr(':che', OxmlType.UInt32Value),
        ':chf': new OxmlAttr(':chf', OxmlType.UInt32Value),
        ':rho': new OxmlAttr(':rho', OxmlType.UInt32Value),
        ':rhe': new OxmlAttr(':rhe', OxmlType.UInt32Value),
        ':rhf': new OxmlAttr(':rhf', OxmlType.UInt32Value),
        ':lfo': new OxmlAttr(':lfo', OxmlType.UInt32Value),
        ':lfe': new OxmlAttr(':lfe', OxmlType.UInt32Value),
        ':lff': new OxmlAttr(':lff', OxmlType.UInt32Value),
        ':cfo': new OxmlAttr(':cfo', OxmlType.UInt32Value),
        ':cfe': new OxmlAttr(':cfe', OxmlType.UInt32Value),
        ':cff': new OxmlAttr(':cff', OxmlType.UInt32Value),
        ':rfo': new OxmlAttr(':rfo', OxmlType.UInt32Value),
        ':rfe': new OxmlAttr(':rfe', OxmlType.UInt32Value),
        ':rff': new OxmlAttr(':rff', OxmlType.UInt32Value),
    };
    LegacyDrawingType._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Drawing._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    CustomChartsheetViews._C = {
        'x:customSheetView': CustomChartsheetView,
    };
    ChartSheetProtection._D = {
        ':password': new OxmlAttr(':password', OxmlType.HexBinaryValue),
        ':algorithmName': new OxmlAttr(':algorithmName', OxmlType.StringValue),
        ':hashValue': new OxmlAttr(':hashValue', OxmlType.Base64BinaryValue),
        ':saltValue': new OxmlAttr(':saltValue', OxmlType.Base64BinaryValue),
        ':spinCount': new OxmlAttr(':spinCount', OxmlType.UInt32Value),
        ':content': new OxmlAttr(':content', OxmlType.BooleanValue),
        ':objects': new OxmlAttr(':objects', OxmlType.BooleanValue),
    };
    ChartSheetViews._C = {
        'x:sheetView': ChartSheetView,
        'x:extLst': ExtensionList,
    };
    ChartSheetProperties._C = {
        'x:tabColor': TabColor,
    };
    ChartSheetProperties._D = {
        ':published': new OxmlAttr(':published', OxmlType.BooleanValue),
        ':codeName': new OxmlAttr(':codeName', OxmlType.StringValue),
    };
    EmbeddedObjectProperties._C = {
        'x:anchor': ObjectAnchor,
    };
    EmbeddedObjectProperties._D = {
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
        ':defaultSize': new OxmlAttr(':defaultSize', OxmlType.BooleanValue),
        ':print': new OxmlAttr(':print', OxmlType.BooleanValue),
        ':disabled': new OxmlAttr(':disabled', OxmlType.BooleanValue),
        ':uiObject': new OxmlAttr(':uiObject', OxmlType.BooleanValue),
        ':autoFill': new OxmlAttr(':autoFill', OxmlType.BooleanValue),
        ':autoLine': new OxmlAttr(':autoLine', OxmlType.BooleanValue),
        ':autoPict': new OxmlAttr(':autoPict', OxmlType.BooleanValue),
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':altText': new OxmlAttr(':altText', OxmlType.StringValue),
        ':dde': new OxmlAttr(':dde', OxmlType.BooleanValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ControlProperties._C = {
        'x:anchor': ObjectAnchor,
    };
    ControlProperties._D = {
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
        ':defaultSize': new OxmlAttr(':defaultSize', OxmlType.BooleanValue),
        ':print': new OxmlAttr(':print', OxmlType.BooleanValue),
        ':disabled': new OxmlAttr(':disabled', OxmlType.BooleanValue),
        ':recalcAlways': new OxmlAttr(':recalcAlways', OxmlType.BooleanValue),
        ':uiObject': new OxmlAttr(':uiObject', OxmlType.BooleanValue),
        ':autoFill': new OxmlAttr(':autoFill', OxmlType.BooleanValue),
        ':autoLine': new OxmlAttr(':autoLine', OxmlType.BooleanValue),
        ':autoPict': new OxmlAttr(':autoPict', OxmlType.BooleanValue),
        ':macro': new OxmlAttr(':macro', OxmlType.StringValue),
        ':altText': new OxmlAttr(':altText', OxmlType.StringValue),
        ':linkedCell': new OxmlAttr(':linkedCell', OxmlType.StringValue),
        ':listFillRange': new OxmlAttr(':listFillRange', OxmlType.StringValue),
        ':cf': new OxmlAttr(':cf', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    BorderPropertiesType._C = {
        'x:color': Color,
    };
    BorderPropertiesType._D = {
        ':style': new OxmlAttr(':style', OxmlType.EnumValue, BorderStyleValuesArray),
    };
    HorizontalBorder._C = {
        'x:color': Color,
    };
    VerticalBorder._C = {
        'x:color': Color,
    };
    DiagonalBorder._C = {
        'x:color': Color,
    };
    BottomBorder._C = {
        'x:color': Color,
    };
    TopBorder._C = {
        'x:color': Color,
    };
    RightBorder._C = {
        'x:color': Color,
    };
    LeftBorder._C = {
        'x:color': Color,
    };
    EndBorder._C = {
        'x:color': Color,
    };
    StartBorder._C = {
        'x:color': Color,
    };
    OleItem._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':icon': new OxmlAttr(':icon', OxmlType.BooleanValue),
        ':advise': new OxmlAttr(':advise', OxmlType.BooleanValue),
        ':preferPic': new OxmlAttr(':preferPic', OxmlType.BooleanValue),
    };
    TableExtensionList._C = {
        'x:ext': TableExtension,
    };
    TableStyleInfo._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':showFirstColumn': new OxmlAttr(':showFirstColumn', OxmlType.BooleanValue),
        ':showLastColumn': new OxmlAttr(':showLastColumn', OxmlType.BooleanValue),
        ':showRowStripes': new OxmlAttr(':showRowStripes', OxmlType.BooleanValue),
        ':showColumnStripes': new OxmlAttr(':showColumnStripes', OxmlType.BooleanValue),
    };
    TableColumns._C = {
        'x:tableColumn': TableColumn,
    };
    TableColumns._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CacheSourceExtension._C = {
        'x14:sourceConnection': X14SourceConnection,
    };
    CacheSourceExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PivotFieldExtension._C = {
        'x14:pivotField': X14PivotField,
    };
    PivotFieldExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PivotHierarchyExtension._C = {
        'x14:pivotHierarchy': X14PivotHierarchy,
    };
    PivotHierarchyExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ConditionalFormattingRuleExtension._C = {
        'x14:id': X14Id,
    };
    ConditionalFormattingRuleExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    MarkerType._C = {
        'xdr:col': XdrColumnId,
        'xdr:colOff': XdrColumnOffset,
        'xdr:row': XdrRowId,
        'xdr:rowOff': XdrRowOffset,
    };
    ToMarker._C = {
        'xdr:col': XdrColumnId,
        'xdr:colOff': XdrColumnOffset,
        'xdr:row': XdrRowId,
        'xdr:rowOff': XdrRowOffset,
    };
    FromMarker._C = {
        'xdr:col': XdrColumnId,
        'xdr:colOff': XdrColumnOffset,
        'xdr:row': XdrRowId,
        'xdr:rowOff': XdrRowOffset,
    };
    ObjectAnchor._C = {
        'x:from': FromMarker,
        'x:to': ToMarker,
    };
    ObjectAnchor._D = {
        ':moveWithCells': new OxmlAttr(':moveWithCells', OxmlType.BooleanValue),
        ':sizeWithCells': new OxmlAttr(':sizeWithCells', OxmlType.BooleanValue),
        ':z-order': new OxmlAttr(':z-order', OxmlType.UInt32Value),
    };
    TableExtension._C = {
        'x14:table': X14Table,
    };
    TableExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    FunctionGroup._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    DefinedName._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':comment': new OxmlAttr(':comment', OxmlType.StringValue),
        ':customMenu': new OxmlAttr(':customMenu', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':help': new OxmlAttr(':help', OxmlType.StringValue),
        ':statusBar': new OxmlAttr(':statusBar', OxmlType.StringValue),
        ':localSheetId': new OxmlAttr(':localSheetId', OxmlType.UInt32Value),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':function': new OxmlAttr(':function', OxmlType.BooleanValue),
        ':vbProcedure': new OxmlAttr(':vbProcedure', OxmlType.BooleanValue),
        ':xlm': new OxmlAttr(':xlm', OxmlType.BooleanValue),
        ':functionGroupId': new OxmlAttr(':functionGroupId', OxmlType.UInt32Value),
        ':shortcutKey': new OxmlAttr(':shortcutKey', OxmlType.StringValue),
        ':publishToServer': new OxmlAttr(':publishToServer', OxmlType.BooleanValue),
        ':workbookParameter': new OxmlAttr(':workbookParameter', OxmlType.BooleanValue),
    };
    WorkbookView._C = {
        'x:extLst': ExtensionList,
    };
    WorkbookView._D = {
        ':visibility': new OxmlAttr(':visibility', OxmlType.EnumValue, VisibilityValuesArray),
        ':minimized': new OxmlAttr(':minimized', OxmlType.BooleanValue),
        ':showHorizontalScroll': new OxmlAttr(':showHorizontalScroll', OxmlType.BooleanValue),
        ':showVerticalScroll': new OxmlAttr(':showVerticalScroll', OxmlType.BooleanValue),
        ':showSheetTabs': new OxmlAttr(':showSheetTabs', OxmlType.BooleanValue),
        ':xWindow': new OxmlAttr(':xWindow', OxmlType.Int32Value),
        ':yWindow': new OxmlAttr(':yWindow', OxmlType.Int32Value),
        ':windowWidth': new OxmlAttr(':windowWidth', OxmlType.UInt32Value),
        ':windowHeight': new OxmlAttr(':windowHeight', OxmlType.UInt32Value),
        ':tabRatio': new OxmlAttr(':tabRatio', OxmlType.UInt32Value),
        ':firstSheet': new OxmlAttr(':firstSheet', OxmlType.UInt32Value),
        ':activeTab': new OxmlAttr(':activeTab', OxmlType.UInt32Value),
        ':autoFilterDateGrouping': new OxmlAttr(':autoFilterDateGrouping', OxmlType.BooleanValue),
    };
    Sheet._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':state': new OxmlAttr(':state', OxmlType.EnumValue, SheetStateValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    CustomWorkbookView._C = {
        'x:extLst': ExtensionList,
    };
    CustomWorkbookView._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':autoUpdate': new OxmlAttr(':autoUpdate', OxmlType.BooleanValue),
        ':mergeInterval': new OxmlAttr(':mergeInterval', OxmlType.UInt32Value),
        ':changesSavedWin': new OxmlAttr(':changesSavedWin', OxmlType.BooleanValue),
        ':onlySync': new OxmlAttr(':onlySync', OxmlType.BooleanValue),
        ':personalView': new OxmlAttr(':personalView', OxmlType.BooleanValue),
        ':includePrintSettings': new OxmlAttr(':includePrintSettings', OxmlType.BooleanValue),
        ':includeHiddenRowCol': new OxmlAttr(':includeHiddenRowCol', OxmlType.BooleanValue),
        ':maximized': new OxmlAttr(':maximized', OxmlType.BooleanValue),
        ':minimized': new OxmlAttr(':minimized', OxmlType.BooleanValue),
        ':showHorizontalScroll': new OxmlAttr(':showHorizontalScroll', OxmlType.BooleanValue),
        ':showVerticalScroll': new OxmlAttr(':showVerticalScroll', OxmlType.BooleanValue),
        ':showSheetTabs': new OxmlAttr(':showSheetTabs', OxmlType.BooleanValue),
        ':xWindow': new OxmlAttr(':xWindow', OxmlType.Int32Value),
        ':yWindow': new OxmlAttr(':yWindow', OxmlType.Int32Value),
        ':windowWidth': new OxmlAttr(':windowWidth', OxmlType.UInt32Value),
        ':windowHeight': new OxmlAttr(':windowHeight', OxmlType.UInt32Value),
        ':tabRatio': new OxmlAttr(':tabRatio', OxmlType.UInt32Value),
        ':activeSheetId': new OxmlAttr(':activeSheetId', OxmlType.UInt32Value),
        ':showFormulaBar': new OxmlAttr(':showFormulaBar', OxmlType.BooleanValue),
        ':showStatusbar': new OxmlAttr(':showStatusbar', OxmlType.BooleanValue),
        ':showComments': new OxmlAttr(':showComments', OxmlType.EnumValue, CommentsValuesArray),
        ':showObjects': new OxmlAttr(':showObjects', OxmlType.EnumValue, ObjectDisplayValuesArray),
    };
    ExternalReference._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    WebPublishObject._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':divId': new OxmlAttr(':divId', OxmlType.StringValue),
        ':sourceObject': new OxmlAttr(':sourceObject', OxmlType.StringValue),
        ':destinationFile': new OxmlAttr(':destinationFile', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':autoRepublish': new OxmlAttr(':autoRepublish', OxmlType.BooleanValue),
    };
    PivotCache._D = {
        ':cacheId': new OxmlAttr(':cacheId', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    TopicReferences._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':s': new OxmlAttr(':s', OxmlType.UInt32Value),
    };
    Topic._C = {
        'x:v': Xstring,
        'x:stp': Subtopic,
        'x:tr': TopicReferences,
    };
    Topic._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, VolatileValuesArray),
    };
    Main._C = {
        'x:tp': Topic,
    };
    Main._D = {
        ':first': new OxmlAttr(':first', OxmlType.StringValue),
    };
    VolatileType._C = {
        'x:main': Main,
    };
    VolatileType._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, VolatileDependencyValuesArray),
    };
    XmlColumnProperties._C = {
        'x:extLst': ExtensionList,
    };
    XmlColumnProperties._D = {
        ':mapId': new OxmlAttr(':mapId', OxmlType.UInt32Value),
        ':xpath': new OxmlAttr(':xpath', OxmlType.StringValue),
        ':denormalized': new OxmlAttr(':denormalized', OxmlType.BooleanValue),
        ':xmlDataType': new OxmlAttr(':xmlDataType', OxmlType.EnumValue, XmlDataValuesArray),
    };
    TableFormulaType._D = {
        ':array': new OxmlAttr(':array', OxmlType.BooleanValue),
        'xml:space': new OxmlAttr('xml:space', OxmlType.EnumValue, SpaceProcessingModeValuesArray),
    };
    TableColumn._C = {
        'x:calculatedColumnFormula': CalculatedColumnFormula,
        'x:totalsRowFormula': TotalsRowFormula,
        'x:xmlColumnPr': XmlColumnProperties,
        'x:extLst': ExtensionList,
    };
    TableColumn._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':totalsRowFunction': new OxmlAttr(':totalsRowFunction', OxmlType.EnumValue, TotalsRowFunctionValuesArray),
        ':totalsRowLabel': new OxmlAttr(':totalsRowLabel', OxmlType.StringValue),
        ':queryTableFieldId': new OxmlAttr(':queryTableFieldId', OxmlType.UInt32Value),
        ':headerRowDxfId': new OxmlAttr(':headerRowDxfId', OxmlType.UInt32Value),
        ':dataDxfId': new OxmlAttr(':dataDxfId', OxmlType.UInt32Value),
        ':totalsRowDxfId': new OxmlAttr(':totalsRowDxfId', OxmlType.UInt32Value),
        ':headerRowCellStyle': new OxmlAttr(':headerRowCellStyle', OxmlType.StringValue),
        ':dataCellStyle': new OxmlAttr(':dataCellStyle', OxmlType.StringValue),
        ':totalsRowCellStyle': new OxmlAttr(':totalsRowCellStyle', OxmlType.StringValue),
    };
    SheetName._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    OleLink._C = {
        'x:oleItems': OleItems,
    };
    OleLink._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':progId': new OxmlAttr(':progId', OxmlType.StringValue),
    };
    DdeLink._C = {
        'x:ddeItems': DdeItems,
    };
    DdeLink._D = {
        ':ddeService': new OxmlAttr(':ddeService', OxmlType.StringValue),
        ':ddeTopic': new OxmlAttr(':ddeTopic', OxmlType.StringValue),
    };
    ExternalBook._C = {
        'xxl21:alternateUrls': Xxl21ExternalBookAlternateUrls,
        'x:sheetNames': SheetNames,
        'x:definedNames': ExternalDefinedNames,
        'x:sheetDataSet': SheetDataSet,
    };
    ExternalBook._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    OleItems._C = {
        'x:oleItem': OleItem,
        'x14:oleItem': X14OleItem,
    };
    Value._C = {
        'x:val': DdeLinkValue,
    };
    Value._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, DdeValuesArray),
    };
    Values._C = {
        'x:value': Value,
    };
    Values._D = {
        ':rows': new OxmlAttr(':rows', OxmlType.UInt32Value),
        ':cols': new OxmlAttr(':cols', OxmlType.UInt32Value),
    };
    DdeItem._C = {
        'x:values': Values,
    };
    DdeItem._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':ole': new OxmlAttr(':ole', OxmlType.BooleanValue),
        ':advise': new OxmlAttr(':advise', OxmlType.BooleanValue),
        ':preferPic': new OxmlAttr(':preferPic', OxmlType.BooleanValue),
    };
    DdeItems._C = {
        'x:ddeItem': DdeItem,
    };
    ExternalCell._C = {
        'x:v': Xstring,
    };
    ExternalCell._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, CellValuesArray),
        ':vm': new OxmlAttr(':vm', OxmlType.UInt32Value),
    };
    ExternalRow._C = {
        'x:cell': ExternalCell,
    };
    ExternalRow._D = {
        ':r': new OxmlAttr(':r', OxmlType.UInt32Value),
    };
    ExternalSheetData._C = {
        'x:row': ExternalRow,
    };
    ExternalSheetData._D = {
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':refreshError': new OxmlAttr(':refreshError', OxmlType.BooleanValue),
    };
    ExternalDefinedName._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':refersTo': new OxmlAttr(':refersTo', OxmlType.StringValue),
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
    };
    TableStyleElement._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, TableStyleValuesArray),
        ':size': new OxmlAttr(':size', OxmlType.UInt32Value),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
    };
    FontCharSet._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    FontFamilyNumbering._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    FontName._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    CellFormat._C = {
        'x:alignment': Alignment,
        'x:protection': Protection,
        'x:extLst': ExtensionList,
    };
    CellFormat._D = {
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
        ':fontId': new OxmlAttr(':fontId', OxmlType.UInt32Value),
        ':fillId': new OxmlAttr(':fillId', OxmlType.UInt32Value),
        ':borderId': new OxmlAttr(':borderId', OxmlType.UInt32Value),
        ':xfId': new OxmlAttr(':xfId', OxmlType.UInt32Value),
        ':quotePrefix': new OxmlAttr(':quotePrefix', OxmlType.BooleanValue),
        ':pivotButton': new OxmlAttr(':pivotButton', OxmlType.BooleanValue),
        ':applyNumberFormat': new OxmlAttr(':applyNumberFormat', OxmlType.BooleanValue),
        ':applyFont': new OxmlAttr(':applyFont', OxmlType.BooleanValue),
        ':applyFill': new OxmlAttr(':applyFill', OxmlType.BooleanValue),
        ':applyBorder': new OxmlAttr(':applyBorder', OxmlType.BooleanValue),
        ':applyAlignment': new OxmlAttr(':applyAlignment', OxmlType.BooleanValue),
        ':applyProtection': new OxmlAttr(':applyProtection', OxmlType.BooleanValue),
    };
    CellStyle._C = {
        'x:extLst': ExtensionList,
    };
    CellStyle._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':xfId': new OxmlAttr(':xfId', OxmlType.UInt32Value),
        ':builtinId': new OxmlAttr(':builtinId', OxmlType.UInt32Value),
        ':iLevel': new OxmlAttr(':iLevel', OxmlType.UInt32Value),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':customBuiltin': new OxmlAttr(':customBuiltin', OxmlType.BooleanValue),
    };
    RgbColor._D = {
        ':rgb': new OxmlAttr(':rgb', OxmlType.HexBinaryValue),
    };
    TableStyle._C = {
        'x:tableStyleElement': TableStyleElement,
    };
    TableStyle._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':pivot': new OxmlAttr(':pivot', OxmlType.BooleanValue),
        ':table': new OxmlAttr(':table', OxmlType.BooleanValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    MruColors._C = {
        'x:color': Color,
    };
    IndexedColors._C = {
        'x:rgbColor': RgbColor,
    };
    Border._C = {
        'x:start': StartBorder,
        'x:end': EndBorder,
        'x:left': LeftBorder,
        'x:right': RightBorder,
        'x:top': TopBorder,
        'x:bottom': BottomBorder,
        'x:diagonal': DiagonalBorder,
        'x:vertical': VerticalBorder,
        'x:horizontal': HorizontalBorder,
    };
    Border._D = {
        ':diagonalUp': new OxmlAttr(':diagonalUp', OxmlType.BooleanValue),
        ':diagonalDown': new OxmlAttr(':diagonalDown', OxmlType.BooleanValue),
        ':outline': new OxmlAttr(':outline', OxmlType.BooleanValue),
    };
    Fill._C = {
        'x:patternFill': PatternFill,
        'x:gradientFill': GradientFill,
    };
    Font._C = {
        'x:b': Bold,
        'x:i': Italic,
        'x:strike': Strike,
        'x:condense': Condense,
        'x:extend': Extend,
        'x:outline': Outline,
        'x:shadow': Shadow,
        'x:u': Underline,
        'x:vertAlign': VerticalTextAlignment,
        'x:sz': FontSize,
        'x:color': Color,
        'x:name': FontName,
        'x:family': FontFamilyNumbering,
        'x:charset': FontCharSet,
        'x:scheme': FontScheme,
    };
    Protection._D = {
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
    };
    Alignment._D = {
        ':horizontal': new OxmlAttr(':horizontal', OxmlType.EnumValue, HorizontalAlignmentValuesArray),
        ':vertical': new OxmlAttr(':vertical', OxmlType.EnumValue, VerticalAlignmentValuesArray),
        ':textRotation': new OxmlAttr(':textRotation', OxmlType.UInt32Value),
        ':wrapText': new OxmlAttr(':wrapText', OxmlType.BooleanValue),
        ':indent': new OxmlAttr(':indent', OxmlType.UInt32Value),
        ':relativeIndent': new OxmlAttr(':relativeIndent', OxmlType.Int32Value),
        ':justifyLastLine': new OxmlAttr(':justifyLastLine', OxmlType.BooleanValue),
        ':shrinkToFit': new OxmlAttr(':shrinkToFit', OxmlType.BooleanValue),
        ':readingOrder': new OxmlAttr(':readingOrder', OxmlType.UInt32Value),
        ':mergeCell': new OxmlAttr(':mergeCell', OxmlType.StringValue),
    };
    NumberingFormat._D = {
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
        ':formatCode': new OxmlAttr(':formatCode', OxmlType.StringValue),
    };
    GradientStop._C = {
        'x:color': Color,
    };
    GradientStop._D = {
        ':position': new OxmlAttr(':position', OxmlType.DoubleValue),
    };
    GradientFill._C = {
        'x:stop': GradientStop,
    };
    GradientFill._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, GradientValuesArray),
        ':degree': new OxmlAttr(':degree', OxmlType.DoubleValue),
        ':left': new OxmlAttr(':left', OxmlType.DoubleValue),
        ':right': new OxmlAttr(':right', OxmlType.DoubleValue),
        ':top': new OxmlAttr(':top', OxmlType.DoubleValue),
        ':bottom': new OxmlAttr(':bottom', OxmlType.DoubleValue),
    };
    PatternFill._C = {
        'x:fgColor': ForegroundColor,
        'x:bgColor': BackgroundColor,
    };
    PatternFill._D = {
        ':patternType': new OxmlAttr(':patternType', OxmlType.EnumValue, PatternValuesArray),
    };
    XmlProperties._C = {
        'x:extLst': ExtensionList,
    };
    XmlProperties._D = {
        ':mapId': new OxmlAttr(':mapId', OxmlType.UInt32Value),
        ':xpath': new OxmlAttr(':xpath', OxmlType.StringValue),
        ':xmlDataType': new OxmlAttr(':xmlDataType', OxmlType.EnumValue, XmlDataValuesArray),
    };
    XmlCellProperties._C = {
        'x:xmlPr': XmlProperties,
        'x:extLst': ExtensionList,
    };
    XmlCellProperties._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
    };
    SingleXmlCell._C = {
        'x:xmlCellPr': XmlCellProperties,
        'x:extLst': ExtensionList,
    };
    SingleXmlCell._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':connectionId': new OxmlAttr(':connectionId', OxmlType.UInt32Value),
    };
    NameIndex._D = {
        ':x': new OxmlAttr(':x', OxmlType.UInt32Value),
        ':s': new OxmlAttr(':s', OxmlType.BooleanValue),
    };
    MdxKpi._D = {
        ':n': new OxmlAttr(':n', OxmlType.UInt32Value),
        ':np': new OxmlAttr(':np', OxmlType.UInt32Value),
        ':p': new OxmlAttr(':p', OxmlType.EnumValue, MdxKPIPropertyValuesArray),
    };
    MdxMemberProp._D = {
        ':n': new OxmlAttr(':n', OxmlType.UInt32Value),
        ':np': new OxmlAttr(':np', OxmlType.UInt32Value),
    };
    MdxSet._C = {
        'x:n': NameIndex,
    };
    MdxSet._D = {
        ':ns': new OxmlAttr(':ns', OxmlType.UInt32Value),
        ':c': new OxmlAttr(':c', OxmlType.UInt32Value),
        ':o': new OxmlAttr(':o', OxmlType.EnumValue, MdxSetOrderValuesArray),
    };
    MdxTuple._C = {
        'x:n': NameIndex,
    };
    MdxTuple._D = {
        ':c': new OxmlAttr(':c', OxmlType.UInt32Value),
        ':ct': new OxmlAttr(':ct', OxmlType.StringValue),
        ':si': new OxmlAttr(':si', OxmlType.UInt32Value),
        ':fi': new OxmlAttr(':fi', OxmlType.UInt32Value),
        ':bc': new OxmlAttr(':bc', OxmlType.HexBinaryValue),
        ':fc': new OxmlAttr(':fc', OxmlType.HexBinaryValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':st': new OxmlAttr(':st', OxmlType.BooleanValue),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
    };
    Mdx._C = {
        'x:t': MdxTuple,
        'x:ms': MdxSet,
        'x:p': MdxMemberProp,
        'x:k': MdxKpi,
    };
    Mdx._D = {
        ':n': new OxmlAttr(':n', OxmlType.UInt32Value),
        ':f': new OxmlAttr(':f', OxmlType.EnumValue, MdxFunctionValuesArray),
    };
    FutureMetadataBlock._C = {
        'x:extLst': ExtensionList,
    };
    MetadataRecord._D = {
        ':t': new OxmlAttr(':t', OxmlType.UInt32Value),
        ':v': new OxmlAttr(':v', OxmlType.UInt32Value),
    };
    MetadataBlock._C = {
        'x:rc': MetadataRecord,
    };
    MetadataType._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':minSupportedVersion': new OxmlAttr(':minSupportedVersion', OxmlType.UInt32Value),
        ':ghostRow': new OxmlAttr(':ghostRow', OxmlType.BooleanValue),
        ':ghostCol': new OxmlAttr(':ghostCol', OxmlType.BooleanValue),
        ':edit': new OxmlAttr(':edit', OxmlType.BooleanValue),
        ':delete': new OxmlAttr(':delete', OxmlType.BooleanValue),
        ':copy': new OxmlAttr(':copy', OxmlType.BooleanValue),
        ':pasteAll': new OxmlAttr(':pasteAll', OxmlType.BooleanValue),
        ':pasteFormulas': new OxmlAttr(':pasteFormulas', OxmlType.BooleanValue),
        ':pasteValues': new OxmlAttr(':pasteValues', OxmlType.BooleanValue),
        ':pasteFormats': new OxmlAttr(':pasteFormats', OxmlType.BooleanValue),
        ':pasteComments': new OxmlAttr(':pasteComments', OxmlType.BooleanValue),
        ':pasteDataValidation': new OxmlAttr(':pasteDataValidation', OxmlType.BooleanValue),
        ':pasteBorders': new OxmlAttr(':pasteBorders', OxmlType.BooleanValue),
        ':pasteColWidths': new OxmlAttr(':pasteColWidths', OxmlType.BooleanValue),
        ':pasteNumberFormats': new OxmlAttr(':pasteNumberFormats', OxmlType.BooleanValue),
        ':merge': new OxmlAttr(':merge', OxmlType.BooleanValue),
        ':splitFirst': new OxmlAttr(':splitFirst', OxmlType.BooleanValue),
        ':splitAll': new OxmlAttr(':splitAll', OxmlType.BooleanValue),
        ':rowColShift': new OxmlAttr(':rowColShift', OxmlType.BooleanValue),
        ':clearAll': new OxmlAttr(':clearAll', OxmlType.BooleanValue),
        ':clearFormats': new OxmlAttr(':clearFormats', OxmlType.BooleanValue),
        ':clearContents': new OxmlAttr(':clearContents', OxmlType.BooleanValue),
        ':clearComments': new OxmlAttr(':clearComments', OxmlType.BooleanValue),
        ':assign': new OxmlAttr(':assign', OxmlType.BooleanValue),
        ':coerce': new OxmlAttr(':coerce', OxmlType.BooleanValue),
        ':adjust': new OxmlAttr(':adjust', OxmlType.BooleanValue),
        ':cellMeta': new OxmlAttr(':cellMeta', OxmlType.BooleanValue),
    };
    MetadataBlocksType._C = {
        'x:bk': MetadataBlock,
    };
    MetadataBlocksType._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ValueMetadata._C = {
        'x:bk': MetadataBlock,
    };
    CellMetadata._C = {
        'x:bk': MetadataBlock,
    };
    FutureMetadata._C = {
        'x:bk': FutureMetadataBlock,
        'x:extLst': ExtensionList,
    };
    FutureMetadata._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    MdxMetadata._C = {
        'x:mdx': Mdx,
    };
    MdxMetadata._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    MetadataStrings._C = {
        'x:s': CharacterValue,
    };
    MetadataStrings._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    MetadataTypes._C = {
        'x:metadataType': MetadataType,
    };
    MetadataTypes._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    OleObject._C = {
        'x:objectPr': EmbeddedObjectProperties,
    };
    OleObject._D = {
        ':progId': new OxmlAttr(':progId', OxmlType.StringValue),
        ':dvAspect': new OxmlAttr(':dvAspect', OxmlType.EnumValue, DataViewAspectValuesArray),
        ':link': new OxmlAttr(':link', OxmlType.StringValue),
        ':oleUpdate': new OxmlAttr(':oleUpdate', OxmlType.EnumValue, OleUpdateValuesArray),
        ':autoLoad': new OxmlAttr(':autoLoad', OxmlType.BooleanValue),
        ':shapeId': new OxmlAttr(':shapeId', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    CustomSheetView._C = {
        'x:pane': Pane,
        'x:selection': Selection,
        'x:rowBreaks': RowBreaks,
        'x:colBreaks': ColumnBreaks,
        'x:pageMargins': PageMargins,
        'x:printOptions': PrintOptions,
        'x:pageSetup': PageSetup,
        'x:headerFooter': HeaderFooter,
        'x:autoFilter': AutoFilter,
        'x:extLst': ExtensionList,
    };
    CustomSheetView._D = {
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':scale': new OxmlAttr(':scale', OxmlType.UInt32Value),
        ':colorId': new OxmlAttr(':colorId', OxmlType.UInt32Value),
        ':showPageBreaks': new OxmlAttr(':showPageBreaks', OxmlType.BooleanValue),
        ':showFormulas': new OxmlAttr(':showFormulas', OxmlType.BooleanValue),
        ':showGridLines': new OxmlAttr(':showGridLines', OxmlType.BooleanValue),
        ':showRowCol': new OxmlAttr(':showRowCol', OxmlType.BooleanValue),
        ':outlineSymbols': new OxmlAttr(':outlineSymbols', OxmlType.BooleanValue),
        ':zeroValues': new OxmlAttr(':zeroValues', OxmlType.BooleanValue),
        ':fitToPage': new OxmlAttr(':fitToPage', OxmlType.BooleanValue),
        ':printArea': new OxmlAttr(':printArea', OxmlType.BooleanValue),
        ':filter': new OxmlAttr(':filter', OxmlType.BooleanValue),
        ':showAutoFilter': new OxmlAttr(':showAutoFilter', OxmlType.BooleanValue),
        ':hiddenRows': new OxmlAttr(':hiddenRows', OxmlType.BooleanValue),
        ':hiddenColumns': new OxmlAttr(':hiddenColumns', OxmlType.BooleanValue),
        ':state': new OxmlAttr(':state', OxmlType.EnumValue, SheetStateValuesArray),
        ':filterUnique': new OxmlAttr(':filterUnique', OxmlType.BooleanValue),
        ':view': new OxmlAttr(':view', OxmlType.EnumValue, SheetViewValuesArray),
        ':showRuler': new OxmlAttr(':showRuler', OxmlType.BooleanValue),
        ':topLeftCell': new OxmlAttr(':topLeftCell', OxmlType.StringValue),
    };
    SheetView._C = {
        'x:pane': Pane,
        'x:selection': Selection,
        'x:pivotSelection': PivotSelection,
        'x:extLst': ExtensionList,
    };
    SheetView._D = {
        ':windowProtection': new OxmlAttr(':windowProtection', OxmlType.BooleanValue),
        ':showFormulas': new OxmlAttr(':showFormulas', OxmlType.BooleanValue),
        ':showGridLines': new OxmlAttr(':showGridLines', OxmlType.BooleanValue),
        ':showRowColHeaders': new OxmlAttr(':showRowColHeaders', OxmlType.BooleanValue),
        ':showZeros': new OxmlAttr(':showZeros', OxmlType.BooleanValue),
        ':rightToLeft': new OxmlAttr(':rightToLeft', OxmlType.BooleanValue),
        ':tabSelected': new OxmlAttr(':tabSelected', OxmlType.BooleanValue),
        ':showRuler': new OxmlAttr(':showRuler', OxmlType.BooleanValue),
        ':showOutlineSymbols': new OxmlAttr(':showOutlineSymbols', OxmlType.BooleanValue),
        ':defaultGridColor': new OxmlAttr(':defaultGridColor', OxmlType.BooleanValue),
        ':showWhiteSpace': new OxmlAttr(':showWhiteSpace', OxmlType.BooleanValue),
        ':view': new OxmlAttr(':view', OxmlType.EnumValue, SheetViewValuesArray),
        ':topLeftCell': new OxmlAttr(':topLeftCell', OxmlType.StringValue),
        ':colorId': new OxmlAttr(':colorId', OxmlType.UInt32Value),
        ':zoomScale': new OxmlAttr(':zoomScale', OxmlType.UInt32Value),
        ':zoomScaleNormal': new OxmlAttr(':zoomScaleNormal', OxmlType.UInt32Value),
        ':zoomScaleSheetLayoutView': new OxmlAttr(':zoomScaleSheetLayoutView', OxmlType.UInt32Value),
        ':zoomScalePageLayoutView': new OxmlAttr(':zoomScalePageLayoutView', OxmlType.UInt32Value),
        ':workbookViewId': new OxmlAttr(':workbookViewId', OxmlType.UInt32Value),
    };
    DataValidation._C = {
        'x12ac:list': X12acList,
        'x:formula1': Formula1,
        'x:formula2': Formula2,
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
    MergeCell._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    IgnoredError._D = {
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
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
    Control._C = {
        'x:controlPr': ControlProperties,
    };
    Control._D = {
        ':shapeId': new OxmlAttr(':shapeId', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    InputCells._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':deleted': new OxmlAttr(':deleted', OxmlType.BooleanValue),
        ':undone': new OxmlAttr(':undone', OxmlType.BooleanValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
    };
    CustomChartsheetView._C = {
        'x:pageMargins': PageMargins,
        'x:pageSetup': ChartSheetPageSetup,
        'x:headerFooter': HeaderFooter,
    };
    CustomChartsheetView._D = {
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':scale': new OxmlAttr(':scale', OxmlType.UInt32Value),
        ':state': new OxmlAttr(':state', OxmlType.EnumValue, SheetStateValuesArray),
        ':zoomToFit': new OxmlAttr(':zoomToFit', OxmlType.BooleanValue),
    };
    ChartSheetView._C = {
        'x:extLst': ExtensionList,
    };
    ChartSheetView._D = {
        ':tabSelected': new OxmlAttr(':tabSelected', OxmlType.BooleanValue),
        ':zoomScale': new OxmlAttr(':zoomScale', OxmlType.UInt32Value),
        ':workbookViewId': new OxmlAttr(':workbookViewId', OxmlType.UInt32Value),
        ':zoomToFit': new OxmlAttr(':zoomToFit', OxmlType.BooleanValue),
    };
    TablePart._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    WebPublishItem._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':divId': new OxmlAttr(':divId', OxmlType.StringValue),
        ':sourceType': new OxmlAttr(':sourceType', OxmlType.EnumValue, WebSourceValuesArray),
        ':sourceRef': new OxmlAttr(':sourceRef', OxmlType.StringValue),
        ':sourceObject': new OxmlAttr(':sourceObject', OxmlType.StringValue),
        ':destinationFile': new OxmlAttr(':destinationFile', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':autoRepublish': new OxmlAttr(':autoRepublish', OxmlType.BooleanValue),
    };
    CustomProperty._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ChartSheetPageSetup._D = {
        ':paperSize': new OxmlAttr(':paperSize', OxmlType.UInt32Value),
        ':firstPageNumber': new OxmlAttr(':firstPageNumber', OxmlType.UInt32Value),
        ':orientation': new OxmlAttr(':orientation', OxmlType.EnumValue, OrientationValuesArray),
        ':usePrinterDefaults': new OxmlAttr(':usePrinterDefaults', OxmlType.BooleanValue),
        ':blackAndWhite': new OxmlAttr(':blackAndWhite', OxmlType.BooleanValue),
        ':draft': new OxmlAttr(':draft', OxmlType.BooleanValue),
        ':useFirstPageNumber': new OxmlAttr(':useFirstPageNumber', OxmlType.BooleanValue),
        ':horizontalDpi': new OxmlAttr(':horizontalDpi', OxmlType.UInt32Value),
        ':verticalDpi': new OxmlAttr(':verticalDpi', OxmlType.UInt32Value),
        ':copies': new OxmlAttr(':copies', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    CellWatch._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
    };
    ProtectedRange._D = {
        ':password': new OxmlAttr(':password', OxmlType.HexBinaryValue),
        ':algorithmName': new OxmlAttr(':algorithmName', OxmlType.StringValue),
        ':hashValue': new OxmlAttr(':hashValue', OxmlType.Base64BinaryValue),
        ':saltValue': new OxmlAttr(':saltValue', OxmlType.Base64BinaryValue),
        ':spinCount': new OxmlAttr(':spinCount', OxmlType.UInt32Value),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':securityDescriptor': new OxmlAttr(':securityDescriptor', OxmlType.StringValue),
    };
    Scenario._C = {
        'x:inputCells': InputCells,
    };
    Scenario._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':locked': new OxmlAttr(':locked', OxmlType.BooleanValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':user': new OxmlAttr(':user', OxmlType.StringValue),
        ':comment': new OxmlAttr(':comment', OxmlType.StringValue),
    };
    ConditionalFormatValueObject._C = {
        'x:extLst': ExtensionList,
    };
    ConditionalFormatValueObject._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConditionalFormatValueObjectValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
        ':gte': new OxmlAttr(':gte', OxmlType.BooleanValue),
    };
    Hyperlink._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':location': new OxmlAttr(':location', OxmlType.StringValue),
        ':tooltip': new OxmlAttr(':tooltip', OxmlType.StringValue),
        ':display': new OxmlAttr(':display', OxmlType.StringValue),
    };
    ConditionalFormattingRule._C = {
        'x:formula': Formula,
        'x:colorScale': ColorScale,
        'x:dataBar': DataBar,
        'x:iconSet': IconSet,
        'x:extLst': ConditionalFormattingRuleExtensionList,
    };
    ConditionalFormattingRule._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConditionalFormatValuesArray),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
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
    };
    AutoFilter._C = {
        'x:filterColumn': FilterColumn,
        'x:sortState': SortState,
        'x:extLst': ExtensionList,
    };
    AutoFilter._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    HeaderFooter._C = {
        'x:oddHeader': OddHeader,
        'x:oddFooter': OddFooter,
        'x:evenHeader': EvenHeader,
        'x:evenFooter': EvenFooter,
        'x:firstHeader': FirstHeader,
        'x:firstFooter': FirstFooter,
    };
    HeaderFooter._D = {
        ':differentOddEven': new OxmlAttr(':differentOddEven', OxmlType.BooleanValue),
        ':differentFirst': new OxmlAttr(':differentFirst', OxmlType.BooleanValue),
        ':scaleWithDoc': new OxmlAttr(':scaleWithDoc', OxmlType.BooleanValue),
        ':alignWithMargins': new OxmlAttr(':alignWithMargins', OxmlType.BooleanValue),
    };
    PageSetup._D = {
        ':paperSize': new OxmlAttr(':paperSize', OxmlType.UInt32Value),
        ':scale': new OxmlAttr(':scale', OxmlType.UInt32Value),
        ':firstPageNumber': new OxmlAttr(':firstPageNumber', OxmlType.UInt32Value),
        ':fitToWidth': new OxmlAttr(':fitToWidth', OxmlType.UInt32Value),
        ':fitToHeight': new OxmlAttr(':fitToHeight', OxmlType.UInt32Value),
        ':pageOrder': new OxmlAttr(':pageOrder', OxmlType.EnumValue, PageOrderValuesArray),
        ':orientation': new OxmlAttr(':orientation', OxmlType.EnumValue, OrientationValuesArray),
        ':usePrinterDefaults': new OxmlAttr(':usePrinterDefaults', OxmlType.BooleanValue),
        ':blackAndWhite': new OxmlAttr(':blackAndWhite', OxmlType.BooleanValue),
        ':draft': new OxmlAttr(':draft', OxmlType.BooleanValue),
        ':cellComments': new OxmlAttr(':cellComments', OxmlType.EnumValue, CellCommentsValuesArray),
        ':useFirstPageNumber': new OxmlAttr(':useFirstPageNumber', OxmlType.BooleanValue),
        ':errors': new OxmlAttr(':errors', OxmlType.EnumValue, PrintErrorValuesArray),
        ':horizontalDpi': new OxmlAttr(':horizontalDpi', OxmlType.UInt32Value),
        ':verticalDpi': new OxmlAttr(':verticalDpi', OxmlType.UInt32Value),
        ':copies': new OxmlAttr(':copies', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    PrintOptions._D = {
        ':horizontalCentered': new OxmlAttr(':horizontalCentered', OxmlType.BooleanValue),
        ':verticalCentered': new OxmlAttr(':verticalCentered', OxmlType.BooleanValue),
        ':headings': new OxmlAttr(':headings', OxmlType.BooleanValue),
        ':gridLines': new OxmlAttr(':gridLines', OxmlType.BooleanValue),
        ':gridLinesSet': new OxmlAttr(':gridLinesSet', OxmlType.BooleanValue),
    };
    PageMargins._D = {
        ':left': new OxmlAttr(':left', OxmlType.DoubleValue),
        ':right': new OxmlAttr(':right', OxmlType.DoubleValue),
        ':top': new OxmlAttr(':top', OxmlType.DoubleValue),
        ':bottom': new OxmlAttr(':bottom', OxmlType.DoubleValue),
        ':header': new OxmlAttr(':header', OxmlType.DoubleValue),
        ':footer': new OxmlAttr(':footer', OxmlType.DoubleValue),
    };
    PageBreakType._C = {
        'x:brk': Break,
    };
    PageBreakType._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':manualBreakCount': new OxmlAttr(':manualBreakCount', OxmlType.UInt32Value),
    };
    ColumnBreaks._C = {
        'x:brk': Break,
    };
    RowBreaks._C = {
        'x:brk': Break,
    };
    DataReference._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sheet': new OxmlAttr(':sheet', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Break._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':min': new OxmlAttr(':min', OxmlType.UInt32Value),
        ':max': new OxmlAttr(':max', OxmlType.UInt32Value),
        ':man': new OxmlAttr(':man', OxmlType.BooleanValue),
        ':pt': new OxmlAttr(':pt', OxmlType.BooleanValue),
    };
    PivotSelection._C = {
        'x:pivotArea': PivotArea,
    };
    PivotSelection._D = {
        ':pane': new OxmlAttr(':pane', OxmlType.EnumValue, PaneValuesArray),
        ':showHeader': new OxmlAttr(':showHeader', OxmlType.BooleanValue),
        ':label': new OxmlAttr(':label', OxmlType.BooleanValue),
        ':data': new OxmlAttr(':data', OxmlType.BooleanValue),
        ':extendable': new OxmlAttr(':extendable', OxmlType.BooleanValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':axis': new OxmlAttr(':axis', OxmlType.EnumValue, PivotTableAxisValuesArray),
        ':dimension': new OxmlAttr(':dimension', OxmlType.UInt32Value),
        ':start': new OxmlAttr(':start', OxmlType.UInt32Value),
        ':min': new OxmlAttr(':min', OxmlType.UInt32Value),
        ':max': new OxmlAttr(':max', OxmlType.UInt32Value),
        ':activeRow': new OxmlAttr(':activeRow', OxmlType.UInt32Value),
        ':activeCol': new OxmlAttr(':activeCol', OxmlType.UInt32Value),
        ':previousRow': new OxmlAttr(':previousRow', OxmlType.UInt32Value),
        ':previousCol': new OxmlAttr(':previousCol', OxmlType.UInt32Value),
        ':click': new OxmlAttr(':click', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Selection._D = {
        ':pane': new OxmlAttr(':pane', OxmlType.EnumValue, PaneValuesArray),
        ':activeCell': new OxmlAttr(':activeCell', OxmlType.StringValue),
        ':activeCellId': new OxmlAttr(':activeCellId', OxmlType.UInt32Value),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
    };
    Pane._D = {
        ':xSplit': new OxmlAttr(':xSplit', OxmlType.DoubleValue),
        ':ySplit': new OxmlAttr(':ySplit', OxmlType.DoubleValue),
        ':topLeftCell': new OxmlAttr(':topLeftCell', OxmlType.StringValue),
        ':activePane': new OxmlAttr(':activePane', OxmlType.EnumValue, PaneValuesArray),
        ':state': new OxmlAttr(':state', OxmlType.EnumValue, PaneStateValuesArray),
    };
    PageSetupProperties._D = {
        ':autoPageBreaks': new OxmlAttr(':autoPageBreaks', OxmlType.BooleanValue),
        ':fitToPage': new OxmlAttr(':fitToPage', OxmlType.BooleanValue),
    };
    OutlineProperties._D = {
        ':applyStyles': new OxmlAttr(':applyStyles', OxmlType.BooleanValue),
        ':summaryBelow': new OxmlAttr(':summaryBelow', OxmlType.BooleanValue),
        ':summaryRight': new OxmlAttr(':summaryRight', OxmlType.BooleanValue),
        ':showOutlineSymbols': new OxmlAttr(':showOutlineSymbols', OxmlType.BooleanValue),
    };
    Column._D = {
        ':min': new OxmlAttr(':min', OxmlType.UInt32Value),
        ':max': new OxmlAttr(':max', OxmlType.UInt32Value),
        ':width': new OxmlAttr(':width', OxmlType.DoubleValue),
        ':style': new OxmlAttr(':style', OxmlType.UInt32Value),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':bestFit': new OxmlAttr(':bestFit', OxmlType.BooleanValue),
        ':customWidth': new OxmlAttr(':customWidth', OxmlType.BooleanValue),
        ':phonetic': new OxmlAttr(':phonetic', OxmlType.BooleanValue),
        ':outlineLevel': new OxmlAttr(':outlineLevel', OxmlType.ByteValue),
        ':collapsed': new OxmlAttr(':collapsed', OxmlType.BooleanValue),
    };
    Row._C = {
        'x:c': Cell,
        'x:extLst': ExtensionList,
    };
    Row._D = {
        ':r': new OxmlAttr(':r', OxmlType.UInt32Value),
        ':spans': new OxmlAttr(':spans', OxmlType.ListValue),
        ':s': new OxmlAttr(':s', OxmlType.UInt32Value),
        ':customFormat': new OxmlAttr(':customFormat', OxmlType.BooleanValue),
        ':ht': new OxmlAttr(':ht', OxmlType.DoubleValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':customHeight': new OxmlAttr(':customHeight', OxmlType.BooleanValue),
        ':outlineLevel': new OxmlAttr(':outlineLevel', OxmlType.ByteValue),
        ':collapsed': new OxmlAttr(':collapsed', OxmlType.BooleanValue),
        ':thickTop': new OxmlAttr(':thickTop', OxmlType.BooleanValue),
        ':thickBot': new OxmlAttr(':thickBot', OxmlType.BooleanValue),
        ':ph': new OxmlAttr(':ph', OxmlType.BooleanValue),
        'x14ac:dyDescent': new OxmlAttr('x14ac:dyDescent', OxmlType.DoubleValue),
    };
    UserInfo._C = {
        'x:extLst': ExtensionList,
    };
    UserInfo._D = {
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.Int32Value),
        ':dateTime': new OxmlAttr(':dateTime', OxmlType.DateTimeValue),
    };
    CellFormula._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, CellFormulaValuesArray),
        ':aca': new OxmlAttr(':aca', OxmlType.BooleanValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':dt2D': new OxmlAttr(':dt2D', OxmlType.BooleanValue),
        ':dtr': new OxmlAttr(':dtr', OxmlType.BooleanValue),
        ':del1': new OxmlAttr(':del1', OxmlType.BooleanValue),
        ':del2': new OxmlAttr(':del2', OxmlType.BooleanValue),
        ':r1': new OxmlAttr(':r1', OxmlType.StringValue),
        ':r2': new OxmlAttr(':r2', OxmlType.StringValue),
        ':ca': new OxmlAttr(':ca', OxmlType.BooleanValue),
        ':si': new OxmlAttr(':si', OxmlType.UInt32Value),
        ':bx': new OxmlAttr(':bx', OxmlType.BooleanValue),
        'xml:space': new OxmlAttr('xml:space', OxmlType.EnumValue, SpaceProcessingModeValuesArray),
    };
    SheetId._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    DifferentialFormatType._C = {
        'x:font': Font,
        'x:numFmt': NumberingFormat,
        'x:fill': Fill,
        'x:alignment': Alignment,
        'x:border': Border,
        'x:protection': Protection,
        'x:extLst': ExtensionList,
    };
    DifferentialFormat._C = {
        'x:font': Font,
        'x:numFmt': NumberingFormat,
        'x:fill': Fill,
        'x:alignment': Alignment,
        'x:border': Border,
        'x:protection': Protection,
        'x:extLst': ExtensionList,
    };
    NewDifferentialFormat._C = {
        'x:font': Font,
        'x:numFmt': NumberingFormat,
        'x:fill': Fill,
        'x:alignment': Alignment,
        'x:border': Border,
        'x:protection': Protection,
        'x:extLst': ExtensionList,
    };
    OldDifferentialFormat._C = {
        'x:font': Font,
        'x:numFmt': NumberingFormat,
        'x:fill': Fill,
        'x:alignment': Alignment,
        'x:border': Border,
        'x:protection': Protection,
        'x:extLst': ExtensionList,
    };
    NewCell._C = {
        'x:f': CellFormula,
        'x:v': CellValue,
        'x:is': InlineString,
        'x:extLst': ExtensionList,
    };
    NewCell._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':s': new OxmlAttr(':s', OxmlType.UInt32Value),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, CellValuesArray),
        ':cm': new OxmlAttr(':cm', OxmlType.UInt32Value),
        ':vm': new OxmlAttr(':vm', OxmlType.UInt32Value),
        ':ph': new OxmlAttr(':ph', OxmlType.BooleanValue),
    };
    CellType._C = {
        'x:f': CellFormula,
        'x:v': CellValue,
        'x:is': InlineString,
        'x:extLst': ExtensionList,
    };
    CellType._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':s': new OxmlAttr(':s', OxmlType.UInt32Value),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, CellValuesArray),
        ':cm': new OxmlAttr(':cm', OxmlType.UInt32Value),
        ':vm': new OxmlAttr(':vm', OxmlType.UInt32Value),
        ':ph': new OxmlAttr(':ph', OxmlType.BooleanValue),
    };
    Cell._C = {
        'x:f': CellFormula,
        'x:v': CellValue,
        'x:is': InlineString,
        'x:extLst': ExtensionList,
    };
    OldCell._C = {
        'x:f': CellFormula,
        'x:v': CellValue,
        'x:is': InlineString,
        'x:extLst': ExtensionList,
    };
    Undo._D = {
        ':index': new OxmlAttr(':index', OxmlType.UInt32Value),
        ':exp': new OxmlAttr(':exp', OxmlType.EnumValue, FormulaExpressionValuesArray),
        ':ref3D': new OxmlAttr(':ref3D', OxmlType.BooleanValue),
        ':array': new OxmlAttr(':array', OxmlType.BooleanValue),
        ':v': new OxmlAttr(':v', OxmlType.BooleanValue),
        ':nf': new OxmlAttr(':nf', OxmlType.BooleanValue),
        ':cs': new OxmlAttr(':cs', OxmlType.BooleanValue),
        ':dr': new OxmlAttr(':dr', OxmlType.StringValue),
        ':dn': new OxmlAttr(':dn', OxmlType.StringValue),
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':sId': new OxmlAttr(':sId', OxmlType.UInt32Value),
    };
    Reviewed._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
    };
    ReviewedList._C = {
        'x:reviewed': Reviewed,
    };
    ReviewedList._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    SheetIdMap._C = {
        'x:sheetId': SheetId,
    };
    SheetIdMap._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RevisionConflict._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
    };
    RevisionQueryTable._D = {
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':fieldId': new OxmlAttr(':fieldId', OxmlType.UInt32Value),
    };
    RevisionComment._D = {
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':cell': new OxmlAttr(':cell', OxmlType.StringValue),
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':action': new OxmlAttr(':action', OxmlType.EnumValue, RevisionActionValuesArray),
        ':alwaysShow': new OxmlAttr(':alwaysShow', OxmlType.BooleanValue),
        ':old': new OxmlAttr(':old', OxmlType.BooleanValue),
        ':hiddenRow': new OxmlAttr(':hiddenRow', OxmlType.BooleanValue),
        ':hiddenColumn': new OxmlAttr(':hiddenColumn', OxmlType.BooleanValue),
        ':author': new OxmlAttr(':author', OxmlType.StringValue),
        ':oldLength': new OxmlAttr(':oldLength', OxmlType.UInt32Value),
        ':newLength': new OxmlAttr(':newLength', OxmlType.UInt32Value),
    };
    RevisionDefinedName._C = {
        'x:formula': Formula,
        'x:oldFormula': OldFormula,
        'x:extLst': ExtensionList,
    };
    RevisionDefinedName._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':localSheetId': new OxmlAttr(':localSheetId', OxmlType.UInt32Value),
        ':customView': new OxmlAttr(':customView', OxmlType.BooleanValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':function': new OxmlAttr(':function', OxmlType.BooleanValue),
        ':oldFunction': new OxmlAttr(':oldFunction', OxmlType.BooleanValue),
        ':functionGroupId': new OxmlAttr(':functionGroupId', OxmlType.ByteValue),
        ':oldFunctionGroupId': new OxmlAttr(':oldFunctionGroupId', OxmlType.ByteValue),
        ':shortcutKey': new OxmlAttr(':shortcutKey', OxmlType.ByteValue),
        ':oldShortcutKey': new OxmlAttr(':oldShortcutKey', OxmlType.ByteValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':oldHidden': new OxmlAttr(':oldHidden', OxmlType.BooleanValue),
        ':customMenu': new OxmlAttr(':customMenu', OxmlType.StringValue),
        ':oldCustomMenu': new OxmlAttr(':oldCustomMenu', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':oldDescription': new OxmlAttr(':oldDescription', OxmlType.StringValue),
        ':help': new OxmlAttr(':help', OxmlType.StringValue),
        ':oldHelp': new OxmlAttr(':oldHelp', OxmlType.StringValue),
        ':statusBar': new OxmlAttr(':statusBar', OxmlType.StringValue),
        ':oldStatusBar': new OxmlAttr(':oldStatusBar', OxmlType.StringValue),
        ':comment': new OxmlAttr(':comment', OxmlType.StringValue),
        ':oldComment': new OxmlAttr(':oldComment', OxmlType.StringValue),
    };
    RevisionAutoFormat._D = {
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':autoFormatId': new OxmlAttr(':autoFormatId', OxmlType.UInt32Value),
        ':applyNumberFormats': new OxmlAttr(':applyNumberFormats', OxmlType.BooleanValue),
        ':applyBorderFormats': new OxmlAttr(':applyBorderFormats', OxmlType.BooleanValue),
        ':applyFontFormats': new OxmlAttr(':applyFontFormats', OxmlType.BooleanValue),
        ':applyPatternFormats': new OxmlAttr(':applyPatternFormats', OxmlType.BooleanValue),
        ':applyAlignmentFormats': new OxmlAttr(':applyAlignmentFormats', OxmlType.BooleanValue),
        ':applyWidthHeightFormats': new OxmlAttr(':applyWidthHeightFormats', OxmlType.BooleanValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    RevisionFormat._C = {
        'x:dxf': DifferentialFormat,
        'x:extLst': ExtensionList,
    };
    RevisionFormat._D = {
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':xfDxf': new OxmlAttr(':xfDxf', OxmlType.BooleanValue),
        ':s': new OxmlAttr(':s', OxmlType.BooleanValue),
        ':sqref': new OxmlAttr(':sqref', OxmlType.ListValue),
        ':start': new OxmlAttr(':start', OxmlType.UInt32Value),
        ':length': new OxmlAttr(':length', OxmlType.UInt32Value),
    };
    RevisionCellChange._C = {
        'x:oc': OldCell,
        'x:nc': NewCell,
        'x:odxf': OldDifferentialFormat,
        'x:ndxf': NewDifferentialFormat,
        'x:extLst': ExtensionList,
    };
    RevisionCellChange._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':sId': new OxmlAttr(':sId', OxmlType.UInt32Value),
        ':odxf': new OxmlAttr(':odxf', OxmlType.BooleanValue),
        ':xfDxf': new OxmlAttr(':xfDxf', OxmlType.BooleanValue),
        ':s': new OxmlAttr(':s', OxmlType.BooleanValue),
        ':dxf': new OxmlAttr(':dxf', OxmlType.BooleanValue),
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
        ':quotePrefix': new OxmlAttr(':quotePrefix', OxmlType.BooleanValue),
        ':oldQuotePrefix': new OxmlAttr(':oldQuotePrefix', OxmlType.BooleanValue),
        ':ph': new OxmlAttr(':ph', OxmlType.BooleanValue),
        ':oldPh': new OxmlAttr(':oldPh', OxmlType.BooleanValue),
        ':endOfListFormulaUpdate': new OxmlAttr(':endOfListFormulaUpdate', OxmlType.BooleanValue),
    };
    RevisionInsertSheet._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sheetPosition': new OxmlAttr(':sheetPosition', OxmlType.UInt32Value),
    };
    RevisionSheetName._C = {
        'x:extLst': ExtensionList,
    };
    RevisionSheetName._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':oldName': new OxmlAttr(':oldName', OxmlType.StringValue),
        ':newName': new OxmlAttr(':newName', OxmlType.StringValue),
    };
    RevisionCustomView._D = {
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':action': new OxmlAttr(':action', OxmlType.EnumValue, RevisionActionValuesArray),
    };
    RevisionMove._C = {
        'x:undo': Undo,
        'x:rcc': RevisionCellChange,
        'x:rfmt': RevisionFormat,
    };
    RevisionMove._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':sheetId': new OxmlAttr(':sheetId', OxmlType.UInt32Value),
        ':source': new OxmlAttr(':source', OxmlType.StringValue),
        ':destination': new OxmlAttr(':destination', OxmlType.StringValue),
        ':sourceSheetId': new OxmlAttr(':sourceSheetId', OxmlType.UInt32Value),
    };
    RevisionRowColumn._C = {
        'x:undo': Undo,
        'x:rcc': RevisionCellChange,
        'x:rfmt': RevisionFormat,
    };
    RevisionRowColumn._D = {
        ':rId': new OxmlAttr(':rId', OxmlType.UInt32Value),
        ':ua': new OxmlAttr(':ua', OxmlType.BooleanValue),
        ':ra': new OxmlAttr(':ra', OxmlType.BooleanValue),
        ':sId': new OxmlAttr(':sId', OxmlType.UInt32Value),
        ':eol': new OxmlAttr(':eol', OxmlType.BooleanValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':action': new OxmlAttr(':action', OxmlType.EnumValue, RowColumnActionValuesArray),
        ':edge': new OxmlAttr(':edge', OxmlType.BooleanValue),
    };
    Header._C = {
        'x:sheetIdMap': SheetIdMap,
        'x:reviewedList': ReviewedList,
        'x:extLst': ExtensionList,
    };
    Header._D = {
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':dateTime': new OxmlAttr(':dateTime', OxmlType.DateTimeValue),
        ':maxSheetId': new OxmlAttr(':maxSheetId', OxmlType.UInt32Value),
        ':userName': new OxmlAttr(':userName', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':minRId': new OxmlAttr(':minRId', OxmlType.UInt32Value),
        ':maxRId': new OxmlAttr(':maxRId', OxmlType.UInt32Value),
    };
    PhoneticProperties._D = {
        ':fontId': new OxmlAttr(':fontId', OxmlType.UInt32Value),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, PhoneticValuesArray),
        ':alignment': new OxmlAttr(':alignment', OxmlType.EnumValue, PhoneticAlignmentValuesArray),
    };
    PhoneticRun._C = {
        'x:t': Text,
    };
    PhoneticRun._D = {
        ':sb': new OxmlAttr(':sb', OxmlType.UInt32Value),
        ':eb': new OxmlAttr(':eb', OxmlType.UInt32Value),
    };
    Run._C = {
        'x:rPr': RunProperties,
        'x:t': Text,
    };
    RunProperties._C = {
        'x:b': Bold,
        'x:i': Italic,
        'x:strike': Strike,
        'x:condense': Condense,
        'x:extend': Extend,
        'x:outline': Outline,
        'x:shadow': Shadow,
        'x:u': Underline,
        'x:vertAlign': VerticalTextAlignment,
        'x:sz': FontSize,
        'x:color': Color,
        'x:rFont': RunFont,
        'x:family': FontFamily,
        'x:charset': RunPropertyCharSet,
        'x:scheme': FontScheme,
    };
    FontScheme._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, FontSchemeValuesArray),
    };
    InternationalPropertyType._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    RunFont._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ColorType._D = {
        ':auto': new OxmlAttr(':auto', OxmlType.BooleanValue),
        ':indexed': new OxmlAttr(':indexed', OxmlType.UInt32Value),
        ':rgb': new OxmlAttr(':rgb', OxmlType.HexBinaryValue),
        ':theme': new OxmlAttr(':theme', OxmlType.UInt32Value),
        ':tint': new OxmlAttr(':tint', OxmlType.DoubleValue),
    };
    FontSize._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    VerticalTextAlignment._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, VerticalAlignmentRunValuesArray),
    };
    Underline._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, UnderlineValuesArray),
    };
    BooleanPropertyType._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    RstType._C = {
        'x:t': Text,
        'x:r': Run,
        'x:rPh': PhoneticRun,
        'x:phoneticPr': PhoneticProperties,
    };
    CommentText._C = {
        'x:t': Text,
        'x:r': Run,
        'x:rPh': PhoneticRun,
        'x:phoneticPr': PhoneticProperties,
    };
    InlineString._C = {
        'x:t': Text,
        'x:r': Run,
        'x:rPh': PhoneticRun,
        'x:phoneticPr': PhoneticProperties,
    };
    SharedStringItem._C = {
        'x:t': Text,
        'x:r': Run,
        'x:rPh': PhoneticRun,
        'x:phoneticPr': PhoneticProperties,
    };
    QueryTableField._C = {
        'x:extLst': ExtensionList,
    };
    QueryTableField._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':dataBound': new OxmlAttr(':dataBound', OxmlType.BooleanValue),
        ':rowNumbers': new OxmlAttr(':rowNumbers', OxmlType.BooleanValue),
        ':fillFormulas': new OxmlAttr(':fillFormulas', OxmlType.BooleanValue),
        ':clipped': new OxmlAttr(':clipped', OxmlType.BooleanValue),
        ':tableColumnId': new OxmlAttr(':tableColumnId', OxmlType.UInt32Value),
    };
    DeletedField._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    QueryTableDeletedFields._C = {
        'x:deletedField': DeletedField,
    };
    QueryTableDeletedFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    QueryTableFields._C = {
        'x:queryTableField': QueryTableField,
    };
    QueryTableFields._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotAreaReference._C = {
        'x:x': FieldItem,
        'x:extLst': ExtensionList,
    };
    PivotAreaReference._D = {
        ':field': new OxmlAttr(':field', OxmlType.UInt32Value),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':selected': new OxmlAttr(':selected', OxmlType.BooleanValue),
        ':byPosition': new OxmlAttr(':byPosition', OxmlType.BooleanValue),
        ':relative': new OxmlAttr(':relative', OxmlType.BooleanValue),
        ':defaultSubtotal': new OxmlAttr(':defaultSubtotal', OxmlType.BooleanValue),
        ':sumSubtotal': new OxmlAttr(':sumSubtotal', OxmlType.BooleanValue),
        ':countASubtotal': new OxmlAttr(':countASubtotal', OxmlType.BooleanValue),
        ':avgSubtotal': new OxmlAttr(':avgSubtotal', OxmlType.BooleanValue),
        ':maxSubtotal': new OxmlAttr(':maxSubtotal', OxmlType.BooleanValue),
        ':minSubtotal': new OxmlAttr(':minSubtotal', OxmlType.BooleanValue),
        ':productSubtotal': new OxmlAttr(':productSubtotal', OxmlType.BooleanValue),
        ':countSubtotal': new OxmlAttr(':countSubtotal', OxmlType.BooleanValue),
        ':stdDevSubtotal': new OxmlAttr(':stdDevSubtotal', OxmlType.BooleanValue),
        ':stdDevPSubtotal': new OxmlAttr(':stdDevPSubtotal', OxmlType.BooleanValue),
        ':varSubtotal': new OxmlAttr(':varSubtotal', OxmlType.BooleanValue),
        ':varPSubtotal': new OxmlAttr(':varPSubtotal', OxmlType.BooleanValue),
    };
    PivotAreaReferences._C = {
        'x:reference': PivotAreaReference,
    };
    PivotAreaReferences._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PageField._C = {
        'x:extLst': ExtensionList,
    };
    PageField._D = {
        ':fld': new OxmlAttr(':fld', OxmlType.Int32Value),
        ':item': new OxmlAttr(':item', OxmlType.UInt32Value),
        ':hier': new OxmlAttr(':hier', OxmlType.Int32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':cap': new OxmlAttr(':cap', OxmlType.StringValue),
    };
    GroupItems._C = {
        'x:m': MissingItem,
        'x:n': NumberItem,
        'x:b': BooleanItem,
        'x:e': ErrorItem,
        'x:s': StringItem,
        'x:d': DateTimeItem,
    };
    GroupItems._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    DiscreteProperties._C = {
        'x:x': FieldItem,
    };
    DiscreteProperties._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RangeProperties._D = {
        ':autoStart': new OxmlAttr(':autoStart', OxmlType.BooleanValue),
        ':autoEnd': new OxmlAttr(':autoEnd', OxmlType.BooleanValue),
        ':groupBy': new OxmlAttr(':groupBy', OxmlType.EnumValue, GroupByValuesArray),
        ':startNum': new OxmlAttr(':startNum', OxmlType.DoubleValue),
        ':endNum': new OxmlAttr(':endNum', OxmlType.DoubleValue),
        ':startDate': new OxmlAttr(':startDate', OxmlType.DateTimeValue),
        ':endDate': new OxmlAttr(':endDate', OxmlType.DateTimeValue),
        ':groupInterval': new OxmlAttr(':groupInterval', OxmlType.DoubleValue),
    };
    CacheHierarchy._C = {
        'x:fieldsUsage': FieldsUsage,
        'x:groupLevels': GroupLevels,
        'x:extLst': CacheHierarchyExtensionList,
    };
    CacheHierarchy._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':measure': new OxmlAttr(':measure', OxmlType.BooleanValue),
        ':set': new OxmlAttr(':set', OxmlType.BooleanValue),
        ':parentSet': new OxmlAttr(':parentSet', OxmlType.UInt32Value),
        ':iconSet': new OxmlAttr(':iconSet', OxmlType.Int32Value),
        ':attribute': new OxmlAttr(':attribute', OxmlType.BooleanValue),
        ':time': new OxmlAttr(':time', OxmlType.BooleanValue),
        ':keyAttribute': new OxmlAttr(':keyAttribute', OxmlType.BooleanValue),
        ':defaultMemberUniqueName': new OxmlAttr(':defaultMemberUniqueName', OxmlType.StringValue),
        ':allUniqueName': new OxmlAttr(':allUniqueName', OxmlType.StringValue),
        ':allCaption': new OxmlAttr(':allCaption', OxmlType.StringValue),
        ':dimensionUniqueName': new OxmlAttr(':dimensionUniqueName', OxmlType.StringValue),
        ':displayFolder': new OxmlAttr(':displayFolder', OxmlType.StringValue),
        ':measureGroup': new OxmlAttr(':measureGroup', OxmlType.StringValue),
        ':measures': new OxmlAttr(':measures', OxmlType.BooleanValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':oneField': new OxmlAttr(':oneField', OxmlType.BooleanValue),
        ':memberValueDatatype': new OxmlAttr(':memberValueDatatype', OxmlType.UInt16Value),
        ':unbalanced': new OxmlAttr(':unbalanced', OxmlType.BooleanValue),
        ':unbalancedGroup': new OxmlAttr(':unbalancedGroup', OxmlType.BooleanValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
    };
    PivotFilter._C = {
        'x:autoFilter': AutoFilter,
        'x:extLst': PivotFilterExtensionList,
    };
    PivotFilter._D = {
        ':fld': new OxmlAttr(':fld', OxmlType.UInt32Value),
        ':mpFld': new OxmlAttr(':mpFld', OxmlType.UInt32Value),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, PivotFilterValuesArray),
        ':evalOrder': new OxmlAttr(':evalOrder', OxmlType.Int32Value),
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':iMeasureHier': new OxmlAttr(':iMeasureHier', OxmlType.UInt32Value),
        ':iMeasureFld': new OxmlAttr(':iMeasureFld', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':stringValue1': new OxmlAttr(':stringValue1', OxmlType.StringValue),
        ':stringValue2': new OxmlAttr(':stringValue2', OxmlType.StringValue),
    };
    MeasureDimensionMap._D = {
        ':measureGroup': new OxmlAttr(':measureGroup', OxmlType.UInt32Value),
        ':dimension': new OxmlAttr(':dimension', OxmlType.UInt32Value),
    };
    MeasureGroup._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
    };
    Dimension._D = {
        ':measure': new OxmlAttr(':measure', OxmlType.BooleanValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
    };
    Member._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    MemberProperty._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':showCell': new OxmlAttr(':showCell', OxmlType.BooleanValue),
        ':showTip': new OxmlAttr(':showTip', OxmlType.BooleanValue),
        ':showAsCaption': new OxmlAttr(':showAsCaption', OxmlType.BooleanValue),
        ':nameLen': new OxmlAttr(':nameLen', OxmlType.UInt32Value),
        ':pPos': new OxmlAttr(':pPos', OxmlType.UInt32Value),
        ':pLen': new OxmlAttr(':pLen', OxmlType.UInt32Value),
        ':level': new OxmlAttr(':level', OxmlType.UInt32Value),
        ':field': new OxmlAttr(':field', OxmlType.UInt32Value),
    };
    HierarchyUsageType._D = {
        ':hierarchyUsage': new OxmlAttr(':hierarchyUsage', OxmlType.Int32Value),
    };
    PivotHierarchy._C = {
        'x:mps': MemberProperties,
        'x:members': Members,
        'x:extLst': PivotHierarchyExtensionList,
    };
    PivotHierarchy._D = {
        ':outline': new OxmlAttr(':outline', OxmlType.BooleanValue),
        ':multipleItemSelectionAllowed': new OxmlAttr(':multipleItemSelectionAllowed', OxmlType.BooleanValue),
        ':subtotalTop': new OxmlAttr(':subtotalTop', OxmlType.BooleanValue),
        ':showInFieldList': new OxmlAttr(':showInFieldList', OxmlType.BooleanValue),
        ':dragToRow': new OxmlAttr(':dragToRow', OxmlType.BooleanValue),
        ':dragToCol': new OxmlAttr(':dragToCol', OxmlType.BooleanValue),
        ':dragToPage': new OxmlAttr(':dragToPage', OxmlType.BooleanValue),
        ':dragToData': new OxmlAttr(':dragToData', OxmlType.BooleanValue),
        ':dragOff': new OxmlAttr(':dragOff', OxmlType.BooleanValue),
        ':includeNewItemsInFilter': new OxmlAttr(':includeNewItemsInFilter', OxmlType.BooleanValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
    };
    ChartFormat._C = {
        'x:pivotArea': PivotArea,
    };
    ChartFormat._D = {
        ':chart': new OxmlAttr(':chart', OxmlType.UInt32Value),
        ':format': new OxmlAttr(':format', OxmlType.UInt32Value),
        ':series': new OxmlAttr(':series', OxmlType.BooleanValue),
    };
    PivotAreas._C = {
        'x:pivotArea': PivotArea,
    };
    PivotAreas._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ConditionalFormat._C = {
        'x:pivotAreas': PivotAreas,
        'x:extLst': ExtensionList,
    };
    ConditionalFormat._D = {
        ':scope': new OxmlAttr(':scope', OxmlType.EnumValue, ScopeValuesArray),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, RuleValuesArray),
        ':priority': new OxmlAttr(':priority', OxmlType.UInt32Value),
    };
    Format._C = {
        'x:pivotArea': PivotArea,
        'x:extLst': ExtensionList,
    };
    Format._D = {
        ':action': new OxmlAttr(':action', OxmlType.EnumValue, FormatActionValuesArray),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
    };
    Field._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int32Value),
    };
    RowItem._C = {
        'x:x': MemberPropertyIndex,
    };
    RowItem._D = {
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, ItemValuesArray),
        ':r': new OxmlAttr(':r', OxmlType.UInt32Value),
        ':i': new OxmlAttr(':i', OxmlType.UInt32Value),
    };
    DataField._C = {
        'x:extLst': DataFieldExtensionList,
    };
    DataField._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':fld': new OxmlAttr(':fld', OxmlType.UInt32Value),
        ':subtotal': new OxmlAttr(':subtotal', OxmlType.EnumValue, DataConsolidateFunctionValuesArray),
        ':showDataAs': new OxmlAttr(':showDataAs', OxmlType.EnumValue, ShowDataAsValuesArray),
        ':baseField': new OxmlAttr(':baseField', OxmlType.Int32Value),
        ':baseItem': new OxmlAttr(':baseItem', OxmlType.UInt32Value),
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
    };
    Item._D = {
        ':n': new OxmlAttr(':n', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, ItemValuesArray),
        ':h': new OxmlAttr(':h', OxmlType.BooleanValue),
        ':s': new OxmlAttr(':s', OxmlType.BooleanValue),
        ':sd': new OxmlAttr(':sd', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':m': new OxmlAttr(':m', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.BooleanValue),
        ':x': new OxmlAttr(':x', OxmlType.UInt32Value),
        ':d': new OxmlAttr(':d', OxmlType.BooleanValue),
        ':e': new OxmlAttr(':e', OxmlType.BooleanValue),
    };
    PivotField._C = {
        'x:items': Items,
        'x:autoSortScope': AutoSortScope,
        'x:extLst': PivotFieldExtensionList,
    };
    PivotField._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':axis': new OxmlAttr(':axis', OxmlType.EnumValue, PivotTableAxisValuesArray),
        ':dataField': new OxmlAttr(':dataField', OxmlType.BooleanValue),
        ':subtotalCaption': new OxmlAttr(':subtotalCaption', OxmlType.StringValue),
        ':showDropDowns': new OxmlAttr(':showDropDowns', OxmlType.BooleanValue),
        ':hiddenLevel': new OxmlAttr(':hiddenLevel', OxmlType.BooleanValue),
        ':uniqueMemberProperty': new OxmlAttr(':uniqueMemberProperty', OxmlType.StringValue),
        ':compact': new OxmlAttr(':compact', OxmlType.BooleanValue),
        ':allDrilled': new OxmlAttr(':allDrilled', OxmlType.BooleanValue),
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
        ':outline': new OxmlAttr(':outline', OxmlType.BooleanValue),
        ':subtotalTop': new OxmlAttr(':subtotalTop', OxmlType.BooleanValue),
        ':dragToRow': new OxmlAttr(':dragToRow', OxmlType.BooleanValue),
        ':dragToCol': new OxmlAttr(':dragToCol', OxmlType.BooleanValue),
        ':multipleItemSelectionAllowed': new OxmlAttr(':multipleItemSelectionAllowed', OxmlType.BooleanValue),
        ':dragToPage': new OxmlAttr(':dragToPage', OxmlType.BooleanValue),
        ':dragToData': new OxmlAttr(':dragToData', OxmlType.BooleanValue),
        ':dragOff': new OxmlAttr(':dragOff', OxmlType.BooleanValue),
        ':showAll': new OxmlAttr(':showAll', OxmlType.BooleanValue),
        ':insertBlankRow': new OxmlAttr(':insertBlankRow', OxmlType.BooleanValue),
        ':serverField': new OxmlAttr(':serverField', OxmlType.BooleanValue),
        ':insertPageBreak': new OxmlAttr(':insertPageBreak', OxmlType.BooleanValue),
        ':autoShow': new OxmlAttr(':autoShow', OxmlType.BooleanValue),
        ':topAutoShow': new OxmlAttr(':topAutoShow', OxmlType.BooleanValue),
        ':hideNewItems': new OxmlAttr(':hideNewItems', OxmlType.BooleanValue),
        ':measureFilter': new OxmlAttr(':measureFilter', OxmlType.BooleanValue),
        ':includeNewItemsInFilter': new OxmlAttr(':includeNewItemsInFilter', OxmlType.BooleanValue),
        ':itemPageCount': new OxmlAttr(':itemPageCount', OxmlType.UInt32Value),
        ':sortType': new OxmlAttr(':sortType', OxmlType.EnumValue, FieldSortValuesArray),
        ':dataSourceSort': new OxmlAttr(':dataSourceSort', OxmlType.BooleanValue),
        ':nonAutoSortDefault': new OxmlAttr(':nonAutoSortDefault', OxmlType.BooleanValue),
        ':rankBy': new OxmlAttr(':rankBy', OxmlType.UInt32Value),
        ':defaultSubtotal': new OxmlAttr(':defaultSubtotal', OxmlType.BooleanValue),
        ':sumSubtotal': new OxmlAttr(':sumSubtotal', OxmlType.BooleanValue),
        ':countASubtotal': new OxmlAttr(':countASubtotal', OxmlType.BooleanValue),
        ':avgSubtotal': new OxmlAttr(':avgSubtotal', OxmlType.BooleanValue),
        ':maxSubtotal': new OxmlAttr(':maxSubtotal', OxmlType.BooleanValue),
        ':minSubtotal': new OxmlAttr(':minSubtotal', OxmlType.BooleanValue),
        ':productSubtotal': new OxmlAttr(':productSubtotal', OxmlType.BooleanValue),
        ':countSubtotal': new OxmlAttr(':countSubtotal', OxmlType.BooleanValue),
        ':stdDevSubtotal': new OxmlAttr(':stdDevSubtotal', OxmlType.BooleanValue),
        ':stdDevPSubtotal': new OxmlAttr(':stdDevPSubtotal', OxmlType.BooleanValue),
        ':varSubtotal': new OxmlAttr(':varSubtotal', OxmlType.BooleanValue),
        ':varPSubtotal': new OxmlAttr(':varPSubtotal', OxmlType.BooleanValue),
        ':showPropCell': new OxmlAttr(':showPropCell', OxmlType.BooleanValue),
        ':showPropTip': new OxmlAttr(':showPropTip', OxmlType.BooleanValue),
        ':showPropAsCaption': new OxmlAttr(':showPropAsCaption', OxmlType.BooleanValue),
        ':defaultAttributeDrillState': new OxmlAttr(':defaultAttributeDrillState', OxmlType.BooleanValue),
    };
    CalculatedMember._C = {
        'x:extLst': CalculatedMemberExtensionList,
    };
    CalculatedMember._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':mdx': new OxmlAttr(':mdx', OxmlType.StringValue),
        ':memberName': new OxmlAttr(':memberName', OxmlType.StringValue),
        ':hierarchy': new OxmlAttr(':hierarchy', OxmlType.StringValue),
        ':parent': new OxmlAttr(':parent', OxmlType.StringValue),
        ':solveOrder': new OxmlAttr(':solveOrder', OxmlType.Int32Value),
        ':set': new OxmlAttr(':set', OxmlType.BooleanValue),
    };
    PivotArea._C = {
        'x:references': PivotAreaReferences,
        'x:extLst': ExtensionList,
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
    CalculatedItem._C = {
        'x:pivotArea': PivotArea,
        'x:extLst': ExtensionList,
    };
    CalculatedItem._D = {
        ':field': new OxmlAttr(':field', OxmlType.UInt32Value),
        ':formula': new OxmlAttr(':formula', OxmlType.StringValue),
    };
    Query._C = {
        'x:tpls': Tuples,
    };
    Query._D = {
        ':mdx': new OxmlAttr(':mdx', OxmlType.StringValue),
    };
    TupleSet._C = {
        'x:tpls': Tuples,
        'x:sortByTuple': SortByTuple,
    };
    TupleSet._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':maxRank': new OxmlAttr(':maxRank', OxmlType.Int32Value),
        ':setDefinition': new OxmlAttr(':setDefinition', OxmlType.StringValue),
        ':sortType': new OxmlAttr(':sortType', OxmlType.EnumValue, SortValuesArray),
        ':queryFailed': new OxmlAttr(':queryFailed', OxmlType.BooleanValue),
    };
    Tuple._D = {
        ':fld': new OxmlAttr(':fld', OxmlType.UInt32Value),
        ':hier': new OxmlAttr(':hier', OxmlType.UInt32Value),
        ':item': new OxmlAttr(':item', OxmlType.UInt32Value),
    };
    ServerFormat._D = {
        ':culture': new OxmlAttr(':culture', OxmlType.StringValue),
        ':format': new OxmlAttr(':format', OxmlType.StringValue),
    };
    ServerFormats._C = {
        'x:serverFormat': ServerFormat,
    };
    ServerFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    QueryCache._C = {
        'x:query': Query,
    };
    QueryCache._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Sets._C = {
        'x:set': TupleSet,
    };
    Sets._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Entries._C = {
        'x:m': MissingItem,
        'x:n': NumberItem,
        'x:e': ErrorItem,
        'x:s': StringItem,
    };
    Entries._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    GroupMember._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':group': new OxmlAttr(':group', OxmlType.BooleanValue),
    };
    GroupMembers._C = {
        'x:groupMember': GroupMember,
    };
    GroupMembers._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Group._C = {
        'x:groupMembers': GroupMembers,
    };
    Group._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':uniqueParent': new OxmlAttr(':uniqueParent', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.Int32Value),
    };
    Groups._C = {
        'x:group': Group,
    };
    Groups._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    GroupLevel._C = {
        'x:groups': Groups,
        'x:extLst': ExtensionList,
    };
    GroupLevel._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':user': new OxmlAttr(':user', OxmlType.BooleanValue),
        ':customRollUp': new OxmlAttr(':customRollUp', OxmlType.BooleanValue),
    };
    FieldUsage._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int32Value),
    };
    Kpi._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':displayFolder': new OxmlAttr(':displayFolder', OxmlType.StringValue),
        ':measureGroup': new OxmlAttr(':measureGroup', OxmlType.StringValue),
        ':parent': new OxmlAttr(':parent', OxmlType.StringValue),
        ':value': new OxmlAttr(':value', OxmlType.StringValue),
        ':goal': new OxmlAttr(':goal', OxmlType.StringValue),
        ':status': new OxmlAttr(':status', OxmlType.StringValue),
        ':trend': new OxmlAttr(':trend', OxmlType.StringValue),
        ':weight': new OxmlAttr(':weight', OxmlType.StringValue),
    };
    PivotCacheRecord._C = {
        'x:m': MissingItem,
        'x:n': NumberItem,
        'x:b': BooleanItem,
        'x:e': ErrorItem,
        'x:s': StringItem,
        'x:d': DateTimeItem,
        'x:x': FieldItem,
    };
    XType._D = {
        ':v': new OxmlAttr(':v', OxmlType.Int32Value),
    };
    TuplesType._C = {
        'x:tpl': Tuple,
    };
    TuplesType._D = {
        ':c': new OxmlAttr(':c', OxmlType.UInt32Value),
    };
    SortByTuple._C = {
        'x:tpl': Tuple,
    };
    Tuples._C = {
        'x:tpl': Tuple,
    };
    DateTimeItem._C = {
        'x:x': MemberPropertyIndex,
    };
    DateTimeItem._D = {
        ':v': new OxmlAttr(':v', OxmlType.DateTimeValue),
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':cp': new OxmlAttr(':cp', OxmlType.UInt32Value),
    };
    StringItem._C = {
        'x:tpls': Tuples,
        'x:x': MemberPropertyIndex,
    };
    StringItem._D = {
        ':v': new OxmlAttr(':v', OxmlType.StringValue),
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':cp': new OxmlAttr(':cp', OxmlType.UInt32Value),
        ':in': new OxmlAttr(':in', OxmlType.UInt32Value),
        ':bc': new OxmlAttr(':bc', OxmlType.HexBinaryValue),
        ':fc': new OxmlAttr(':fc', OxmlType.HexBinaryValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':un': new OxmlAttr(':un', OxmlType.BooleanValue),
        ':st': new OxmlAttr(':st', OxmlType.BooleanValue),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
    };
    ErrorItem._C = {
        'x:tpls': Tuples,
        'x:x': MemberPropertyIndex,
    };
    ErrorItem._D = {
        ':v': new OxmlAttr(':v', OxmlType.StringValue),
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':cp': new OxmlAttr(':cp', OxmlType.UInt32Value),
        ':in': new OxmlAttr(':in', OxmlType.UInt32Value),
        ':bc': new OxmlAttr(':bc', OxmlType.HexBinaryValue),
        ':fc': new OxmlAttr(':fc', OxmlType.HexBinaryValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':un': new OxmlAttr(':un', OxmlType.BooleanValue),
        ':st': new OxmlAttr(':st', OxmlType.BooleanValue),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
    };
    BooleanItem._C = {
        'x:x': MemberPropertyIndex,
    };
    BooleanItem._D = {
        ':v': new OxmlAttr(':v', OxmlType.BooleanValue),
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':cp': new OxmlAttr(':cp', OxmlType.UInt32Value),
    };
    NumberItem._C = {
        'x:tpls': Tuples,
        'x:x': MemberPropertyIndex,
    };
    NumberItem._D = {
        ':v': new OxmlAttr(':v', OxmlType.DoubleValue),
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':cp': new OxmlAttr(':cp', OxmlType.UInt32Value),
        ':in': new OxmlAttr(':in', OxmlType.UInt32Value),
        ':bc': new OxmlAttr(':bc', OxmlType.HexBinaryValue),
        ':fc': new OxmlAttr(':fc', OxmlType.HexBinaryValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':un': new OxmlAttr(':un', OxmlType.BooleanValue),
        ':st': new OxmlAttr(':st', OxmlType.BooleanValue),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
    };
    MissingItem._C = {
        'x:tpls': Tuples,
        'x:x': MemberPropertyIndex,
    };
    MissingItem._D = {
        ':u': new OxmlAttr(':u', OxmlType.BooleanValue),
        ':f': new OxmlAttr(':f', OxmlType.BooleanValue),
        ':c': new OxmlAttr(':c', OxmlType.StringValue),
        ':cp': new OxmlAttr(':cp', OxmlType.UInt32Value),
        ':in': new OxmlAttr(':in', OxmlType.UInt32Value),
        ':bc': new OxmlAttr(':bc', OxmlType.HexBinaryValue),
        ':fc': new OxmlAttr(':fc', OxmlType.HexBinaryValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':un': new OxmlAttr(':un', OxmlType.BooleanValue),
        ':st': new OxmlAttr(':st', OxmlType.BooleanValue),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
    };
    RangeSet._D = {
        ':i1': new OxmlAttr(':i1', OxmlType.UInt32Value),
        ':i2': new OxmlAttr(':i2', OxmlType.UInt32Value),
        ':i3': new OxmlAttr(':i3', OxmlType.UInt32Value),
        ':i4': new OxmlAttr(':i4', OxmlType.UInt32Value),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sheet': new OxmlAttr(':sheet', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    PageItem._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    Page._C = {
        'x:pageItem': PageItem,
    };
    Page._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    RangeSets._C = {
        'x:rangeSet': RangeSet,
    };
    RangeSets._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Pages._C = {
        'x:page': Page,
    };
    Pages._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    CacheField._C = {
        'x:sharedItems': SharedItems,
        'x:fieldGroup': FieldGroup,
        'x:mpMap': MemberPropertiesMap,
        'x:extLst': CacheFieldExtensionList,
    };
    CacheField._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':propertyName': new OxmlAttr(':propertyName', OxmlType.StringValue),
        ':serverField': new OxmlAttr(':serverField', OxmlType.BooleanValue),
        ':uniqueList': new OxmlAttr(':uniqueList', OxmlType.BooleanValue),
        ':numFmtId': new OxmlAttr(':numFmtId', OxmlType.UInt32Value),
        ':formula': new OxmlAttr(':formula', OxmlType.StringValue),
        ':sqlType': new OxmlAttr(':sqlType', OxmlType.Int32Value),
        ':hierarchy': new OxmlAttr(':hierarchy', OxmlType.Int32Value),
        ':level': new OxmlAttr(':level', OxmlType.UInt32Value),
        ':databaseField': new OxmlAttr(':databaseField', OxmlType.BooleanValue),
        ':mappingCount': new OxmlAttr(':mappingCount', OxmlType.UInt32Value),
        ':memberPropertyField': new OxmlAttr(':memberPropertyField', OxmlType.BooleanValue),
    };
    TextField._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ExternalConnectionValuesArray),
        ':position': new OxmlAttr(':position', OxmlType.UInt32Value),
    };
    FieldItem._D = {
        ':v': new OxmlAttr(':v', OxmlType.UInt32Value),
    };
    CharacterValue._D = {
        ':v': new OxmlAttr(':v', OxmlType.StringValue),
    };
    Parameter._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sqlType': new OxmlAttr(':sqlType', OxmlType.Int32Value),
        ':parameterType': new OxmlAttr(':parameterType', OxmlType.EnumValue, ParameterValuesArray),
        ':refreshOnChange': new OxmlAttr(':refreshOnChange', OxmlType.BooleanValue),
        ':prompt': new OxmlAttr(':prompt', OxmlType.StringValue),
        ':boolean': new OxmlAttr(':boolean', OxmlType.BooleanValue),
        ':double': new OxmlAttr(':double', OxmlType.DoubleValue),
        ':integer': new OxmlAttr(':integer', OxmlType.Int32Value),
        ':string': new OxmlAttr(':string', OxmlType.StringValue),
        ':cell': new OxmlAttr(':cell', OxmlType.StringValue),
    };
    Tables._C = {
        'x:m': MissingTable,
        'x:s': CharacterValue,
        'x:x': FieldItem,
    };
    Tables._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Connection._C = {
        'x:dbPr': DatabaseProperties,
        'x:olapPr': OlapProperties,
        'x:webPr': WebQueryProperties,
        'x:textPr': TextProperties,
        'x:parameters': Parameters,
        'x:extLst': ConnectionExtensionList,
    };
    Connection._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':sourceFile': new OxmlAttr(':sourceFile', OxmlType.StringValue),
        ':odcFile': new OxmlAttr(':odcFile', OxmlType.StringValue),
        ':keepAlive': new OxmlAttr(':keepAlive', OxmlType.BooleanValue),
        ':interval': new OxmlAttr(':interval', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.UInt32Value),
        ':reconnectionMethod': new OxmlAttr(':reconnectionMethod', OxmlType.UInt32Value),
        ':refreshedVersion': new OxmlAttr(':refreshedVersion', OxmlType.ByteValue),
        ':minRefreshableVersion': new OxmlAttr(':minRefreshableVersion', OxmlType.ByteValue),
        ':savePassword': new OxmlAttr(':savePassword', OxmlType.BooleanValue),
        ':new': new OxmlAttr(':new', OxmlType.BooleanValue),
        ':deleted': new OxmlAttr(':deleted', OxmlType.BooleanValue),
        ':onlyUseConnectionFile': new OxmlAttr(':onlyUseConnectionFile', OxmlType.BooleanValue),
        ':background': new OxmlAttr(':background', OxmlType.BooleanValue),
        ':refreshOnLoad': new OxmlAttr(':refreshOnLoad', OxmlType.BooleanValue),
        ':saveData': new OxmlAttr(':saveData', OxmlType.BooleanValue),
        ':credentials': new OxmlAttr(':credentials', OxmlType.EnumValue, CredentialsMethodValuesArray),
        ':singleSignOnId': new OxmlAttr(':singleSignOnId', OxmlType.StringValue),
    };
    DataBinding._D = {
        ':DataBindingName': new OxmlAttr(':DataBindingName', OxmlType.StringValue),
        ':FileBinding': new OxmlAttr(':FileBinding', OxmlType.BooleanValue),
        ':ConnectionID': new OxmlAttr(':ConnectionID', OxmlType.UInt32Value),
        ':FileBindingName': new OxmlAttr(':FileBindingName', OxmlType.StringValue),
        ':DataBindingLoadMode': new OxmlAttr(':DataBindingLoadMode', OxmlType.UInt32Value),
    };
    Map._C = {
        'x:DataBinding': DataBinding,
    };
    Map._D = {
        ':ID': new OxmlAttr(':ID', OxmlType.UInt32Value),
        ':Name': new OxmlAttr(':Name', OxmlType.StringValue),
        ':RootElement': new OxmlAttr(':RootElement', OxmlType.StringValue),
        ':SchemaID': new OxmlAttr(':SchemaID', OxmlType.StringValue),
        ':ShowImportExportValidationErrors': new OxmlAttr(':ShowImportExportValidationErrors', OxmlType.BooleanValue),
        ':AutoFit': new OxmlAttr(':AutoFit', OxmlType.BooleanValue),
        ':Append': new OxmlAttr(':Append', OxmlType.BooleanValue),
        ':PreserveSortAFLayout': new OxmlAttr(':PreserveSortAFLayout', OxmlType.BooleanValue),
        ':PreserveFormat': new OxmlAttr(':PreserveFormat', OxmlType.BooleanValue),
    };
    Schema._D = {
        ':ID': new OxmlAttr(':ID', OxmlType.StringValue),
        ':SchemaRef': new OxmlAttr(':SchemaRef', OxmlType.StringValue),
        ':Namespace': new OxmlAttr(':Namespace', OxmlType.StringValue),
    };
    XstringType._D = {
        'xml:space': new OxmlAttr('xml:space', OxmlType.EnumValue, SpaceProcessingModeValuesArray),
    };
    Comment._C = {
        'x:text': CommentText,
        'x:commentPr': CommentProperties,
    };
    Comment._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':authorId': new OxmlAttr(':authorId', OxmlType.UInt32Value),
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':shapeId': new OxmlAttr(':shapeId', OxmlType.UInt32Value),
    };
    CommentList._C = {
        'x:comment': Comment,
    };
    Authors._C = {
        'x:author': Author,
    };
    CalculationCell._D = {
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':i': new OxmlAttr(':i', OxmlType.Int32Value),
        ':s': new OxmlAttr(':s', OxmlType.BooleanValue),
        ':l': new OxmlAttr(':l', OxmlType.BooleanValue),
        ':t': new OxmlAttr(':t', OxmlType.BooleanValue),
        ':a': new OxmlAttr(':a', OxmlType.BooleanValue),
    };
    CustomFilter._D = {
        ':operator': new OxmlAttr(':operator', OxmlType.EnumValue, FilterOperatorValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ExtensionList._C = {
        'x:ext': Extension,
    };
    SortState._C = {
        'x14:sortCondition': X14SortCondition,
        'x:sortCondition': SortCondition,
        'x:extLst': ExtensionList,
    };
    SortState._D = {
        ':columnSort': new OxmlAttr(':columnSort', OxmlType.BooleanValue),
        ':caseSensitive': new OxmlAttr(':caseSensitive', OxmlType.BooleanValue),
        ':sortMethod': new OxmlAttr(':sortMethod', OxmlType.EnumValue, SortMethodValuesArray),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    FilterColumn._C = {
        'x:filters': Filters,
        'x:top10': Top10,
        'x14:customFilters': X14CustomFilters,
        'x:customFilters': CustomFilters,
        'x:dynamicFilter': DynamicFilter,
        'x:colorFilter': ColorFilter,
        'x14:iconFilter': X14IconFilter,
        'x:iconFilter': IconFilter,
        'x:extLst': ExtensionList,
    };
    FilterColumn._D = {
        ':colId': new OxmlAttr(':colId', OxmlType.UInt32Value),
        ':hiddenButton': new OxmlAttr(':hiddenButton', OxmlType.BooleanValue),
        ':showButton': new OxmlAttr(':showButton', OxmlType.BooleanValue),
    };
    Workbook._C = {
        'x:fileVersion': FileVersion,
        'x:fileSharing': FileSharing,
        'x:workbookPr': WorkbookProperties,
        'x15ac:absPath': X15acAbsolutePath,
        'x:workbookProtection': WorkbookProtection,
        'x:bookViews': BookViews,
        'x:sheets': Sheets,
        'x:functionGroups': FunctionGroups,
        'x:externalReferences': ExternalReferences,
        'x:definedNames': DefinedNames,
        'x:calcPr': CalculationProperties,
        'x:oleSize': OleSize,
        'x:customWorkbookViews': CustomWorkbookViews,
        'x:pivotCaches': PivotCaches,
        'x:webPublishing': WebPublishing,
        'x:fileRecoveryPr': FileRecoveryProperties,
        'x:webPublishObjects': WebPublishObjects,
        'x:extLst': WorkbookExtensionList,
    };
    Workbook._D = {
        ':conformance': new OxmlAttr(':conformance', OxmlType.EnumValue, ConformanceClassArray),
    };
    VolatileTypes._C = {
        'x:volType': VolatileType,
        'x:extLst': ExtensionList,
    };
    Table._C = {
        'x:autoFilter': AutoFilter,
        'x:sortState': SortState,
        'x:tableColumns': TableColumns,
        'x:tableStyleInfo': TableStyleInfo,
        'x:extLst': TableExtensionList,
    };
    Table._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':displayName': new OxmlAttr(':displayName', OxmlType.StringValue),
        ':comment': new OxmlAttr(':comment', OxmlType.StringValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':tableType': new OxmlAttr(':tableType', OxmlType.EnumValue, TableValuesArray),
        ':headerRowCount': new OxmlAttr(':headerRowCount', OxmlType.UInt32Value),
        ':insertRow': new OxmlAttr(':insertRow', OxmlType.BooleanValue),
        ':insertRowShift': new OxmlAttr(':insertRowShift', OxmlType.BooleanValue),
        ':totalsRowCount': new OxmlAttr(':totalsRowCount', OxmlType.UInt32Value),
        ':totalsRowShown': new OxmlAttr(':totalsRowShown', OxmlType.BooleanValue),
        ':published': new OxmlAttr(':published', OxmlType.BooleanValue),
        ':headerRowDxfId': new OxmlAttr(':headerRowDxfId', OxmlType.UInt32Value),
        ':dataDxfId': new OxmlAttr(':dataDxfId', OxmlType.UInt32Value),
        ':totalsRowDxfId': new OxmlAttr(':totalsRowDxfId', OxmlType.UInt32Value),
        ':headerRowBorderDxfId': new OxmlAttr(':headerRowBorderDxfId', OxmlType.UInt32Value),
        ':tableBorderDxfId': new OxmlAttr(':tableBorderDxfId', OxmlType.UInt32Value),
        ':totalsRowBorderDxfId': new OxmlAttr(':totalsRowBorderDxfId', OxmlType.UInt32Value),
        ':headerRowCellStyle': new OxmlAttr(':headerRowCellStyle', OxmlType.StringValue),
        ':dataCellStyle': new OxmlAttr(':dataCellStyle', OxmlType.StringValue),
        ':totalsRowCellStyle': new OxmlAttr(':totalsRowCellStyle', OxmlType.StringValue),
        ':connectionId': new OxmlAttr(':connectionId', OxmlType.UInt32Value),
    };
    ExternalLink._C = {
        'x:externalBook': ExternalBook,
        'x:ddeLink': DdeLink,
        'x:oleLink': OleLink,
        'x:extLst': ExtensionList,
    };
    Stylesheet._C = {
        'x:numFmts': NumberingFormats,
        'x:fonts': Fonts,
        'x:fills': Fills,
        'x:borders': Borders,
        'x:cellStyleXfs': CellStyleFormats,
        'x:cellXfs': CellFormats,
        'x:cellStyles': CellStyles,
        'x:dxfs': DifferentialFormats,
        'x:tableStyles': TableStyles,
        'x:colors': Colors,
        'x:extLst': StylesheetExtensionList,
    };
    SingleXmlCells._C = {
        'x:singleXmlCell': SingleXmlCell,
    };
    Metadata._C = {
        'x:metadataTypes': MetadataTypes,
        'x:metadataStrings': MetadataStrings,
        'x:mdxMetadata': MdxMetadata,
        'x:futureMetadata': FutureMetadata,
        'x:cellMetadata': CellMetadata,
        'x:valueMetadata': ValueMetadata,
        'x:extLst': ExtensionList,
    };
    DialogSheet._C = {
        'x:sheetPr': SheetProperties,
        'x:sheetViews': SheetViews,
        'x:sheetFormatPr': SheetFormatProperties,
        'x:sheetProtection': SheetProtection,
        'x:customSheetViews': CustomSheetViews,
        'x:printOptions': PrintOptions,
        'x:pageMargins': PageMargins,
        'x:pageSetup': PageSetup,
        'x:headerFooter': HeaderFooter,
        'x:drawing': Drawing,
        'x:legacyDrawing': LegacyDrawing,
        'x:legacyDrawingHF': LegacyDrawingHeaderFooter,
        'x:drawingHF': DrawingHeaderFooter,
        'x:oleObjects': OleObjects,
        'x:controls': Controls,
        'x:extLst': ExtensionList,
    };
    Chartsheet._C = {
        'x:sheetPr': ChartSheetProperties,
        'x:sheetViews': ChartSheetViews,
        'x:sheetProtection': ChartSheetProtection,
        'x:customSheetViews': CustomChartsheetViews,
        'x:pageMargins': PageMargins,
        'x:pageSetup': ChartSheetPageSetup,
        'x:headerFooter': HeaderFooter,
        'x:drawing': Drawing,
        'x:legacyDrawing': LegacyDrawing,
        'x:legacyDrawingHF': LegacyDrawingHeaderFooter,
        'x:drawingHF': DrawingHeaderFooter,
        'x:picture': Picture,
        'x:webPublishItems': WebPublishItems,
        'x:extLst': ExtensionList,
    };
    Worksheet._C = {
        'x:sheetPr': SheetProperties,
        'x:dimension': SheetDimension,
        'x:sheetViews': SheetViews,
        'x:sheetFormatPr': SheetFormatProperties,
        'x:cols': Columns,
        'x:sheetData': SheetData,
        'x:sheetCalcPr': SheetCalculationProperties,
        'x:sheetProtection': SheetProtection,
        'x:protectedRanges': ProtectedRanges,
        'x:scenarios': Scenarios,
        'x:autoFilter': AutoFilter,
        'x:sortState': SortState,
        'x:dataConsolidate': DataConsolidate,
        'x:customSheetViews': CustomSheetViews,
        'x:mergeCells': MergeCells,
        'x:phoneticPr': PhoneticProperties,
        'x:conditionalFormatting': ConditionalFormatting,
        'x:dataValidations': DataValidations,
        'x:hyperlinks': Hyperlinks,
        'x:printOptions': PrintOptions,
        'x:pageMargins': PageMargins,
        'x:pageSetup': PageSetup,
        'x:headerFooter': HeaderFooter,
        'x:rowBreaks': RowBreaks,
        'x:colBreaks': ColumnBreaks,
        'x:customProperties': CustomProperties,
        'x:cellWatches': CellWatches,
        'x:ignoredErrors': IgnoredErrors,
        'x:drawing': Drawing,
        'x:legacyDrawing': LegacyDrawing,
        'x:legacyDrawingHF': LegacyDrawingHeaderFooter,
        'x:drawingHF': DrawingHeaderFooter,
        'x:picture': Picture,
        'x:oleObjects': OleObjects,
        'x:controls': Controls,
        'x:webPublishItems': WebPublishItems,
        'x:tableParts': TableParts,
        'x:extLst': WorksheetExtensionList,
    };
    Users._C = {
        'x:userInfo': UserInfo,
    };
    Users._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    Revisions._C = {
        'x:rrc': RevisionRowColumn,
        'x:rm': RevisionMove,
        'x:rcv': RevisionCustomView,
        'x:rsnm': RevisionSheetName,
        'x:ris': RevisionInsertSheet,
        'x:rcc': RevisionCellChange,
        'x:rfmt': RevisionFormat,
        'x:raf': RevisionAutoFormat,
        'x:rdn': RevisionDefinedName,
        'x:rcmt': RevisionComment,
        'x:rqt': RevisionQueryTable,
        'x:rcft': RevisionConflict,
    };
    Headers._C = {
        'x:header': Header,
    };
    Headers._D = {
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':lastGuid': new OxmlAttr(':lastGuid', OxmlType.StringValue),
        ':shared': new OxmlAttr(':shared', OxmlType.BooleanValue),
        ':diskRevisions': new OxmlAttr(':diskRevisions', OxmlType.BooleanValue),
        ':history': new OxmlAttr(':history', OxmlType.BooleanValue),
        ':trackRevisions': new OxmlAttr(':trackRevisions', OxmlType.BooleanValue),
        ':exclusive': new OxmlAttr(':exclusive', OxmlType.BooleanValue),
        ':revisionId': new OxmlAttr(':revisionId', OxmlType.UInt32Value),
        ':version': new OxmlAttr(':version', OxmlType.Int32Value),
        ':keepChangeHistory': new OxmlAttr(':keepChangeHistory', OxmlType.BooleanValue),
        ':protected': new OxmlAttr(':protected', OxmlType.BooleanValue),
        ':preserveHistory': new OxmlAttr(':preserveHistory', OxmlType.UInt32Value),
    };
    SharedStringTable._C = {
        'x:si': SharedStringItem,
        'x:extLst': ExtensionList,
    };
    SharedStringTable._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
        ':uniqueCount': new OxmlAttr(':uniqueCount', OxmlType.UInt32Value),
    };
    QueryTable._C = {
        'x:queryTableRefresh': QueryTableRefresh,
        'x:extLst': QueryTableExtensionList,
    };
    QueryTable._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':headers': new OxmlAttr(':headers', OxmlType.BooleanValue),
        ':rowNumbers': new OxmlAttr(':rowNumbers', OxmlType.BooleanValue),
        ':disableRefresh': new OxmlAttr(':disableRefresh', OxmlType.BooleanValue),
        ':backgroundRefresh': new OxmlAttr(':backgroundRefresh', OxmlType.BooleanValue),
        ':firstBackgroundRefresh': new OxmlAttr(':firstBackgroundRefresh', OxmlType.BooleanValue),
        ':refreshOnLoad': new OxmlAttr(':refreshOnLoad', OxmlType.BooleanValue),
        ':growShrinkType': new OxmlAttr(':growShrinkType', OxmlType.EnumValue, GrowShrinkValuesArray),
        ':fillFormulas': new OxmlAttr(':fillFormulas', OxmlType.BooleanValue),
        ':removeDataOnSave': new OxmlAttr(':removeDataOnSave', OxmlType.BooleanValue),
        ':disableEdit': new OxmlAttr(':disableEdit', OxmlType.BooleanValue),
        ':preserveFormatting': new OxmlAttr(':preserveFormatting', OxmlType.BooleanValue),
        ':adjustColumnWidth': new OxmlAttr(':adjustColumnWidth', OxmlType.BooleanValue),
        ':intermediate': new OxmlAttr(':intermediate', OxmlType.BooleanValue),
        ':connectionId': new OxmlAttr(':connectionId', OxmlType.UInt32Value),
        ':autoFormatId': new OxmlAttr(':autoFormatId', OxmlType.UInt32Value),
        ':applyNumberFormats': new OxmlAttr(':applyNumberFormats', OxmlType.BooleanValue),
        ':applyBorderFormats': new OxmlAttr(':applyBorderFormats', OxmlType.BooleanValue),
        ':applyFontFormats': new OxmlAttr(':applyFontFormats', OxmlType.BooleanValue),
        ':applyPatternFormats': new OxmlAttr(':applyPatternFormats', OxmlType.BooleanValue),
        ':applyAlignmentFormats': new OxmlAttr(':applyAlignmentFormats', OxmlType.BooleanValue),
        ':applyWidthHeightFormats': new OxmlAttr(':applyWidthHeightFormats', OxmlType.BooleanValue),
    };
    PivotTableDefinition._C = {
        'x:location': Location,
        'x:pivotFields': PivotFields,
        'x:rowFields': RowFields,
        'x:rowItems': RowItems,
        'x:colFields': ColumnFields,
        'x:colItems': ColumnItems,
        'x:pageFields': PageFields,
        'x:dataFields': DataFields,
        'x:formats': Formats,
        'x:conditionalFormats': ConditionalFormats,
        'x:chartFormats': ChartFormats,
        'x:pivotHierarchies': PivotHierarchies,
        'x:pivotTableStyleInfo': PivotTableStyle,
        'x:filters': PivotFilters,
        'x:rowHierarchiesUsage': RowHierarchiesUsage,
        'x:colHierarchiesUsage': ColumnHierarchiesUsage,
        'x:extLst': PivotTableDefinitionExtensionList,
    };
    PivotTableDefinition._D = {
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
    PivotCacheRecords._C = {
        'x:r': PivotCacheRecord,
        'x:extLst': ExtensionList,
    };
    PivotCacheRecords._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotCacheDefinition._C = {
        'x:cacheSource': CacheSource,
        'x:cacheFields': CacheFields,
        'x:cacheHierarchies': CacheHierarchies,
        'x:kpis': Kpis,
        'x:tupleCache': TupleCache,
        'x:calculatedItems': CalculatedItems,
        'x:calculatedMembers': CalculatedMembers,
        'x:dimensions': Dimensions,
        'x:measureGroups': MeasureGroups,
        'x:maps': Maps,
        'x:extLst': PivotCacheDefinitionExtensionList,
    };
    PivotCacheDefinition._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':invalid': new OxmlAttr(':invalid', OxmlType.BooleanValue),
        ':saveData': new OxmlAttr(':saveData', OxmlType.BooleanValue),
        ':refreshOnLoad': new OxmlAttr(':refreshOnLoad', OxmlType.BooleanValue),
        ':optimizeMemory': new OxmlAttr(':optimizeMemory', OxmlType.BooleanValue),
        ':enableRefresh': new OxmlAttr(':enableRefresh', OxmlType.BooleanValue),
        ':refreshedBy': new OxmlAttr(':refreshedBy', OxmlType.StringValue),
        ':refreshedDateIso': new OxmlAttr(':refreshedDateIso', OxmlType.DateTimeValue),
        ':refreshedDate': new OxmlAttr(':refreshedDate', OxmlType.DoubleValue),
        ':backgroundQuery': new OxmlAttr(':backgroundQuery', OxmlType.BooleanValue),
        ':missingItemsLimit': new OxmlAttr(':missingItemsLimit', OxmlType.UInt32Value),
        ':createdVersion': new OxmlAttr(':createdVersion', OxmlType.ByteValue),
        ':refreshedVersion': new OxmlAttr(':refreshedVersion', OxmlType.ByteValue),
        ':minRefreshableVersion': new OxmlAttr(':minRefreshableVersion', OxmlType.ByteValue),
        ':recordCount': new OxmlAttr(':recordCount', OxmlType.UInt32Value),
        ':upgradeOnRefresh': new OxmlAttr(':upgradeOnRefresh', OxmlType.BooleanValue),
        ':tupleCache': new OxmlAttr(':tupleCache', OxmlType.BooleanValue),
        ':supportSubquery': new OxmlAttr(':supportSubquery', OxmlType.BooleanValue),
        ':supportAdvancedDrill': new OxmlAttr(':supportAdvancedDrill', OxmlType.BooleanValue),
    };
    Connections._C = {
        'x:connection': Connection,
    };
    MapInfo._C = {
        'x:Schema': Schema,
        'x:Map': Map,
    };
    MapInfo._D = {
        ':SelectionNamespaces': new OxmlAttr(':SelectionNamespaces', OxmlType.StringValue),
    };
    Comments._C = {
        'x:authors': Authors,
        'x:commentList': CommentList,
        'x:extLst': ExtensionList,
    };
    CalculationChain._C = {
        'x:c': CalculationCell,
        'x:extLst': ExtensionList,
    };
    Extension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    return {
        prefix: 'x',
        xmlns: 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    };
}
