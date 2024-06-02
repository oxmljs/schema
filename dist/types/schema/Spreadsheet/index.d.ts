import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
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
import { SpaceProcessingModeValues } from '..';
import { PivotCacheDefinition as X14PivotCacheDefinition } from '../Office2010/Excel';
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
export declare enum FilterOperatorValues {
    /** Equal. Serialized value: `equal` */
    Equal = "equal",
    /** Less Than. Serialized value: `lessThan` */
    LessThan = "lessThan",
    /** Less Than Or Equal. Serialized value: `lessThanOrEqual` */
    LessThanOrEqual = "lessThanOrEqual",
    /** Not Equal. Serialized value: `notEqual` */
    NotEqual = "notEqual",
    /** Greater Than Or Equal. Serialized value: `greaterThanOrEqual` */
    GreaterThanOrEqual = "greaterThanOrEqual",
    /** Greater Than. Serialized value: `greaterThan` */
    GreaterThan = "greaterThan"
}
export declare const FilterOperatorValuesArray: readonly [FilterOperatorValues.Equal, FilterOperatorValues.LessThan, FilterOperatorValues.LessThanOrEqual, FilterOperatorValues.NotEqual, FilterOperatorValues.GreaterThanOrEqual, FilterOperatorValues.GreaterThan];
export declare enum DynamicFilterValues {
    /** Null. Serialized value: `null` */
    Null = "null",
    /** Above Average. Serialized value: `aboveAverage` */
    AboveAverage = "aboveAverage",
    /** Below Average. Serialized value: `belowAverage` */
    BelowAverage = "belowAverage",
    /** Tomorrow. Serialized value: `tomorrow` */
    Tomorrow = "tomorrow",
    /** Today. Serialized value: `today` */
    Today = "today",
    /** Yesterday. Serialized value: `yesterday` */
    Yesterday = "yesterday",
    /** Next Week. Serialized value: `nextWeek` */
    NextWeek = "nextWeek",
    /** This Week. Serialized value: `thisWeek` */
    ThisWeek = "thisWeek",
    /** Last Week. Serialized value: `lastWeek` */
    LastWeek = "lastWeek",
    /** Next Month. Serialized value: `nextMonth` */
    NextMonth = "nextMonth",
    /** This Month. Serialized value: `thisMonth` */
    ThisMonth = "thisMonth",
    /** Last Month. Serialized value: `lastMonth` */
    LastMonth = "lastMonth",
    /** Next Quarter. Serialized value: `nextQuarter` */
    NextQuarter = "nextQuarter",
    /** This Quarter. Serialized value: `thisQuarter` */
    ThisQuarter = "thisQuarter",
    /** Last Quarter. Serialized value: `lastQuarter` */
    LastQuarter = "lastQuarter",
    /** Next Year. Serialized value: `nextYear` */
    NextYear = "nextYear",
    /** This Year. Serialized value: `thisYear` */
    ThisYear = "thisYear",
    /** Last Year. Serialized value: `lastYear` */
    LastYear = "lastYear",
    /** Year To Date. Serialized value: `yearToDate` */
    YearToDate = "yearToDate",
    /** 1st Quarter. Serialized value: `Q1` */
    Quarter1 = "Q1",
    /** 2nd Quarter. Serialized value: `Q2` */
    Quarter2 = "Q2",
    /** 3rd Quarter. Serialized value: `Q3` */
    Quarter3 = "Q3",
    /** 4th Quarter. Serialized value: `Q4` */
    Quarter4 = "Q4",
    /** 1st Month. Serialized value: `M1` */
    January = "M1",
    /** 2nd Month. Serialized value: `M2` */
    February = "M2",
    /** 3rd Month. Serialized value: `M3` */
    March = "M3",
    /** 4th Month. Serialized value: `M4` */
    April = "M4",
    /** 5th Month. Serialized value: `M5` */
    May = "M5",
    /** 6th Month. Serialized value: `M6` */
    June = "M6",
    /** 7th Month. Serialized value: `M7` */
    July = "M7",
    /** 8th Month. Serialized value: `M8` */
    August = "M8",
    /** 9th Month. Serialized value: `M9` */
    September = "M9",
    /** 10th Month. Serialized value: `M10` */
    October = "M10",
    /** 11th Month. Serialized value: `M11` */
    November = "M11",
    /** 12th Month. Serialized value: `M12` */
    December = "M12"
}
export declare const DynamicFilterValuesArray: readonly [DynamicFilterValues.Null, DynamicFilterValues.AboveAverage, DynamicFilterValues.BelowAverage, DynamicFilterValues.Tomorrow, DynamicFilterValues.Today, DynamicFilterValues.Yesterday, DynamicFilterValues.NextWeek, DynamicFilterValues.ThisWeek, DynamicFilterValues.LastWeek, DynamicFilterValues.NextMonth, DynamicFilterValues.ThisMonth, DynamicFilterValues.LastMonth, DynamicFilterValues.NextQuarter, DynamicFilterValues.ThisQuarter, DynamicFilterValues.LastQuarter, DynamicFilterValues.NextYear, DynamicFilterValues.ThisYear, DynamicFilterValues.LastYear, DynamicFilterValues.YearToDate, DynamicFilterValues.Quarter1, DynamicFilterValues.Quarter2, DynamicFilterValues.Quarter3, DynamicFilterValues.Quarter4, DynamicFilterValues.January, DynamicFilterValues.February, DynamicFilterValues.March, DynamicFilterValues.April, DynamicFilterValues.May, DynamicFilterValues.June, DynamicFilterValues.July, DynamicFilterValues.August, DynamicFilterValues.September, DynamicFilterValues.October, DynamicFilterValues.November, DynamicFilterValues.December];
export declare enum IconSetValues {
    /** 3 Arrows. Serialized value: `3Arrows` */
    ThreeArrows = "3Arrows",
    /** 3 Arrows  (Gray). Serialized value: `3ArrowsGray` */
    ThreeArrowsGray = "3ArrowsGray",
    /** 3 Flags. Serialized value: `3Flags` */
    ThreeFlags = "3Flags",
    /** 3 Traffic Lights. Serialized value: `3TrafficLights1` */
    ThreeTrafficLights1 = "3TrafficLights1",
    /** 3 Traffic Lights Black. Serialized value: `3TrafficLights2` */
    ThreeTrafficLights2 = "3TrafficLights2",
    /** 3 Signs. Serialized value: `3Signs` */
    ThreeSigns = "3Signs",
    /** 3 Symbols Circled. Serialized value: `3Symbols` */
    ThreeSymbols = "3Symbols",
    /** 3 Symbols. Serialized value: `3Symbols2` */
    ThreeSymbols2 = "3Symbols2",
    /** 4 Arrows. Serialized value: `4Arrows` */
    FourArrows = "4Arrows",
    /** 4 Arrows (Gray). Serialized value: `4ArrowsGray` */
    FourArrowsGray = "4ArrowsGray",
    /** 4 Red To Black. Serialized value: `4RedToBlack` */
    FourRedToBlack = "4RedToBlack",
    /** 4 Ratings. Serialized value: `4Rating` */
    FourRating = "4Rating",
    /** 4 Traffic Lights. Serialized value: `4TrafficLights` */
    FourTrafficLights = "4TrafficLights",
    /** 5 Arrows. Serialized value: `5Arrows` */
    FiveArrows = "5Arrows",
    /** 5 Arrows (Gray). Serialized value: `5ArrowsGray` */
    FiveArrowsGray = "5ArrowsGray",
    /** 5 Ratings Icon Set. Serialized value: `5Rating` */
    FiveRating = "5Rating",
    /** 5 Quarters. Serialized value: `5Quarters` */
    FiveQuarters = "5Quarters"
}
export declare const IconSetValuesArray: readonly [IconSetValues.ThreeArrows, IconSetValues.ThreeArrowsGray, IconSetValues.ThreeFlags, IconSetValues.ThreeTrafficLights1, IconSetValues.ThreeTrafficLights2, IconSetValues.ThreeSigns, IconSetValues.ThreeSymbols, IconSetValues.ThreeSymbols2, IconSetValues.FourArrows, IconSetValues.FourArrowsGray, IconSetValues.FourRedToBlack, IconSetValues.FourRating, IconSetValues.FourTrafficLights, IconSetValues.FiveArrows, IconSetValues.FiveArrowsGray, IconSetValues.FiveRating, IconSetValues.FiveQuarters];
export declare enum SortByValues {
    /** Value. Serialized value: `value` */
    Value = "value",
    /** Sort by Cell Color. Serialized value: `cellColor` */
    CellColor = "cellColor",
    /** Sort by Font Color. Serialized value: `fontColor` */
    FontColor = "fontColor",
    /** Sort by Icon. Serialized value: `icon` */
    Icon = "icon"
}
export declare const SortByValuesArray: readonly [SortByValues.Value, SortByValues.CellColor, SortByValues.FontColor, SortByValues.Icon];
export declare enum SortMethodValues {
    /** Sort by Stroke. Serialized value: `stroke` */
    Stroke = "stroke",
    /** PinYin Sort. Serialized value: `pinYin` */
    PinYin = "pinYin",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const SortMethodValuesArray: readonly [SortMethodValues.Stroke, SortMethodValues.PinYin, SortMethodValues.None];
export declare enum CalendarValues {
    /** No Calendar Type. Serialized value: `none` */
    None = "none",
    /** Gregorian. Serialized value: `gregorian` */
    Gregorian = "gregorian",
    /** Gregorian (U.S.) Calendar. Serialized value: `gregorianUs` */
    GregorianUs = "gregorianUs",
    /** Japanese Emperor Era Calendar. Serialized value: `japan` */
    Japan = "japan",
    /** Taiwan Era Calendar. Serialized value: `taiwan` */
    Taiwan = "taiwan",
    /** Korean Tangun Era Calendar. Serialized value: `korea` */
    Korea = "korea",
    /** Hijri (Arabic Lunar) Calendar. Serialized value: `hijri` */
    Hijri = "hijri",
    /** Thai Calendar. Serialized value: `thai` */
    Thai = "thai",
    /** Hebrew (Lunar) Calendar. Serialized value: `hebrew` */
    Hebrew = "hebrew",
    /** Gregorian Middle East French Calendar. Serialized value: `gregorianMeFrench` */
    GregorianMiddleEastFrench = "gregorianMeFrench",
    /** Gregorian Arabic Calendar. Serialized value: `gregorianArabic` */
    GregorianArabic = "gregorianArabic",
    /** Gregorian Transliterated English Calendar. Serialized value: `gregorianXlitEnglish` */
    GregorianTransliteratedEnglish = "gregorianXlitEnglish",
    /** Gregorian Transliterated French Calendar. Serialized value: `gregorianXlitFrench` */
    GregorianTransliteratedFrench = "gregorianXlitFrench"
}
export declare const CalendarValuesArray: readonly [CalendarValues.None, CalendarValues.Gregorian, CalendarValues.GregorianUs, CalendarValues.Japan, CalendarValues.Taiwan, CalendarValues.Korea, CalendarValues.Hijri, CalendarValues.Thai, CalendarValues.Hebrew, CalendarValues.GregorianMiddleEastFrench, CalendarValues.GregorianArabic, CalendarValues.GregorianTransliteratedEnglish, CalendarValues.GregorianTransliteratedFrench];
export declare enum DateTimeGroupingValues {
    /** Group by Year. Serialized value: `year` */
    Year = "year",
    /** Month. Serialized value: `month` */
    Month = "month",
    /** Day. Serialized value: `day` */
    Day = "day",
    /** Group by Hour. Serialized value: `hour` */
    Hour = "hour",
    /** Group by Minute. Serialized value: `minute` */
    Minute = "minute",
    /** Second. Serialized value: `second` */
    Second = "second"
}
export declare const DateTimeGroupingValuesArray: readonly [DateTimeGroupingValues.Year, DateTimeGroupingValues.Month, DateTimeGroupingValues.Day, DateTimeGroupingValues.Hour, DateTimeGroupingValues.Minute, DateTimeGroupingValues.Second];
export declare enum HtmlFormattingValues {
    /** No Formatting. Serialized value: `none` */
    None = "none",
    /** Honor Rich Text. Serialized value: `rtf` */
    HonorRichText = "rtf",
    /** All. Serialized value: `all` */
    All = "all"
}
export declare const HtmlFormattingValuesArray: readonly [HtmlFormattingValues.None, HtmlFormattingValues.HonorRichText, HtmlFormattingValues.All];
export declare enum ParameterValues {
    /** Prompt on Refresh. Serialized value: `prompt` */
    Prompt = "prompt",
    /** Value. Serialized value: `value` */
    Value = "value",
    /** Parameter From Cell. Serialized value: `cell` */
    Cell = "cell"
}
export declare const ParameterValuesArray: readonly [ParameterValues.Prompt, ParameterValues.Value, ParameterValues.Cell];
export declare enum FileTypeValues {
    /** Macintosh. Serialized value: `mac` */
    Mac = "mac",
    /** Windows (ANSI). Serialized value: `win` */
    Win = "win",
    /** DOS. Serialized value: `dos` */
    Dos = "dos"
}
export declare const FileTypeValuesArray: readonly [FileTypeValues.Mac, FileTypeValues.Win, FileTypeValues.Dos];
export declare enum QualifierValues {
    /** Double Quote. Serialized value: `doubleQuote` */
    DoubleQuote = "doubleQuote",
    /** Single Quote. Serialized value: `singleQuote` */
    SingleQuote = "singleQuote",
    /** No Text Qualifier. Serialized value: `none` */
    None = "none"
}
export declare const QualifierValuesArray: readonly [QualifierValues.DoubleQuote, QualifierValues.SingleQuote, QualifierValues.None];
export declare enum ExternalConnectionValues {
    /** General. Serialized value: `general` */
    General = "general",
    /** Text. Serialized value: `text` */
    Text = "text",
    /** Month Day Year. Serialized value: `MDY` */
    MonthDayYear = "MDY",
    /** Day Month Year. Serialized value: `DMY` */
    DayMonthYear = "DMY",
    /** Year Month Day. Serialized value: `YMD` */
    YearMonthDay = "YMD",
    /** Month Day Year. Serialized value: `MYD` */
    MonthYearDay = "MYD",
    /** Day Year Month. Serialized value: `DYM` */
    DayYearMonth = "DYM",
    /** Year Day Month. Serialized value: `YDM` */
    YearDayMonth = "YDM",
    /** Skip Field. Serialized value: `skip` */
    Skip = "skip",
    /** East Asian Year Month Day. Serialized value: `EMD` */
    EMD = "EMD"
}
export declare const ExternalConnectionValuesArray: readonly [ExternalConnectionValues.General, ExternalConnectionValues.Text, ExternalConnectionValues.MonthDayYear, ExternalConnectionValues.DayMonthYear, ExternalConnectionValues.YearMonthDay, ExternalConnectionValues.MonthYearDay, ExternalConnectionValues.DayYearMonth, ExternalConnectionValues.YearDayMonth, ExternalConnectionValues.Skip, ExternalConnectionValues.EMD];
export declare enum CredentialsMethodValues {
    /** Integrated Authentication. Serialized value: `integrated` */
    Integrated = "integrated",
    /** No Credentials. Serialized value: `none` */
    None = "none",
    /** Stored Credentials. Serialized value: `stored` */
    Stored = "stored"
}
export declare const CredentialsMethodValuesArray: readonly [CredentialsMethodValues.Integrated, CredentialsMethodValues.None, CredentialsMethodValues.Stored];
export declare enum SourceValues {
    /** Worksheet. Serialized value: `worksheet` */
    Worksheet = "worksheet",
    /** External. Serialized value: `external` */
    External = "external",
    /** Consolidation Ranges. Serialized value: `consolidation` */
    Consolidation = "consolidation",
    /** Scenario Summary Report. Serialized value: `scenario` */
    Scenario = "scenario"
}
export declare const SourceValuesArray: readonly [SourceValues.Worksheet, SourceValues.External, SourceValues.Consolidation, SourceValues.Scenario];
export declare enum GroupByValues {
    /** Group By Numeric Ranges. Serialized value: `range` */
    Range = "range",
    /** Seconds. Serialized value: `seconds` */
    Seconds = "seconds",
    /** Minutes. Serialized value: `minutes` */
    Minutes = "minutes",
    /** Hours. Serialized value: `hours` */
    Hours = "hours",
    /** Days. Serialized value: `days` */
    Days = "days",
    /** Months. Serialized value: `months` */
    Months = "months",
    /** Quarters. Serialized value: `quarters` */
    Quarters = "quarters",
    /** Years. Serialized value: `years` */
    Years = "years"
}
export declare const GroupByValuesArray: readonly [GroupByValues.Range, GroupByValues.Seconds, GroupByValues.Minutes, GroupByValues.Hours, GroupByValues.Days, GroupByValues.Months, GroupByValues.Quarters, GroupByValues.Years];
export declare enum SortValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Ascending. Serialized value: `ascending` */
    Ascending = "ascending",
    /** Descending. Serialized value: `descending` */
    Descending = "descending",
    /** Ascending Alpha. Serialized value: `ascendingAlpha` */
    AscendingAlpha = "ascendingAlpha",
    /** Alphabetic Order Descending. Serialized value: `descendingAlpha` */
    DescendingAlpha = "descendingAlpha",
    /** Ascending Natural. Serialized value: `ascendingNatural` */
    AscendingNatural = "ascendingNatural",
    /** Natural Order Descending. Serialized value: `descendingNatural` */
    DescendingNatural = "descendingNatural"
}
export declare const SortValuesArray: readonly [SortValues.None, SortValues.Ascending, SortValues.Descending, SortValues.AscendingAlpha, SortValues.DescendingAlpha, SortValues.AscendingNatural, SortValues.DescendingNatural];
export declare enum ScopeValues {
    /** Selection. Serialized value: `selection` */
    Selection = "selection",
    /** Data Fields. Serialized value: `data` */
    Data = "data",
    /** Field Intersections. Serialized value: `field` */
    Field = "field"
}
export declare const ScopeValuesArray: readonly [ScopeValues.Selection, ScopeValues.Data, ScopeValues.Field];
export declare enum RuleValues {
    /** Top N None. Serialized value: `none` */
    None = "none",
    /** All. Serialized value: `all` */
    All = "all",
    /** Row Top N. Serialized value: `row` */
    Row = "row",
    /** Column Top N. Serialized value: `column` */
    Column = "column"
}
export declare const RuleValuesArray: readonly [RuleValues.None, RuleValues.All, RuleValues.Row, RuleValues.Column];
export declare enum ShowDataAsValues {
    /** Normal Data Type. Serialized value: `normal` */
    Normal = "normal",
    /** Difference. Serialized value: `difference` */
    Difference = "difference",
    /** Percentage Of. Serialized value: `percent` */
    Percent = "percent",
    /** Percentage Difference. Serialized value: `percentDiff` */
    PercentageDifference = "percentDiff",
    /** Running Total. Serialized value: `runTotal` */
    RunTotal = "runTotal",
    /** Percentage of Row. Serialized value: `percentOfRow` */
    PercentOfRaw = "percentOfRow",
    /** Percent of Column. Serialized value: `percentOfCol` */
    PercentOfColumn = "percentOfCol",
    /** Percentage of Total. Serialized value: `percentOfTotal` */
    PercentOfTotal = "percentOfTotal",
    /** Index. Serialized value: `index` */
    Index = "index"
}
export declare const ShowDataAsValuesArray: readonly [ShowDataAsValues.Normal, ShowDataAsValues.Difference, ShowDataAsValues.Percent, ShowDataAsValues.PercentageDifference, ShowDataAsValues.RunTotal, ShowDataAsValues.PercentOfRaw, ShowDataAsValues.PercentOfColumn, ShowDataAsValues.PercentOfTotal, ShowDataAsValues.Index];
export declare enum ItemValues {
    /** Data. Serialized value: `data` */
    Data = "data",
    /** Default. Serialized value: `default` */
    Default = "default",
    /** Sum. Serialized value: `sum` */
    Sum = "sum",
    /** CountA. Serialized value: `countA` */
    CountA = "countA",
    /** Average. Serialized value: `avg` */
    Average = "avg",
    /** Max. Serialized value: `max` */
    Maximum = "max",
    /** Min. Serialized value: `min` */
    Minimum = "min",
    /** Product. Serialized value: `product` */
    Product = "product",
    /** Count. Serialized value: `count` */
    Count = "count",
    /** stdDev. Serialized value: `stdDev` */
    StandardDeviation = "stdDev",
    /** StdDevP. Serialized value: `stdDevP` */
    StandardDeviationP = "stdDevP",
    /** Var. Serialized value: `var` */
    Variance = "var",
    /** VarP. Serialized value: `varP` */
    VarianceP = "varP",
    /** Grand Total Item. Serialized value: `grand` */
    Grand = "grand",
    /** Blank Pivot Item. Serialized value: `blank` */
    Blank = "blank"
}
export declare const ItemValuesArray: readonly [ItemValues.Data, ItemValues.Default, ItemValues.Sum, ItemValues.CountA, ItemValues.Average, ItemValues.Maximum, ItemValues.Minimum, ItemValues.Product, ItemValues.Count, ItemValues.StandardDeviation, ItemValues.StandardDeviationP, ItemValues.Variance, ItemValues.VarianceP, ItemValues.Grand, ItemValues.Blank];
export declare enum FieldSortValues {
    /** Manual Sort. Serialized value: `manual` */
    Manual = "manual",
    /** Ascending. Serialized value: `ascending` */
    Ascending = "ascending",
    /** Descending. Serialized value: `descending` */
    Descending = "descending"
}
export declare const FieldSortValuesArray: readonly [FieldSortValues.Manual, FieldSortValues.Ascending, FieldSortValues.Descending];
export declare enum PivotFilterValues {
    /** Unknown. Serialized value: `unknown` */
    Unknown = "unknown",
    /** Count. Serialized value: `count` */
    Count = "count",
    /** Percent. Serialized value: `percent` */
    Percent = "percent",
    /** Sum. Serialized value: `sum` */
    Sum = "sum",
    /** Caption Equals. Serialized value: `captionEqual` */
    CaptionEqual = "captionEqual",
    /** Caption Not Equal. Serialized value: `captionNotEqual` */
    CaptionNotEqual = "captionNotEqual",
    /** Caption Begins With. Serialized value: `captionBeginsWith` */
    CaptionBeginsWith = "captionBeginsWith",
    /** Caption Does Not Begin With. Serialized value: `captionNotBeginsWith` */
    CaptionNotBeginsWith = "captionNotBeginsWith",
    /** Caption Ends With. Serialized value: `captionEndsWith` */
    CaptionEndsWith = "captionEndsWith",
    /** Caption Does Not End With. Serialized value: `captionNotEndsWith` */
    CaptionNotEndsWith = "captionNotEndsWith",
    /** Caption Contains. Serialized value: `captionContains` */
    CaptionContains = "captionContains",
    /** Caption Does Not Contain. Serialized value: `captionNotContains` */
    CaptionNotContains = "captionNotContains",
    /** Caption Is Greater Than. Serialized value: `captionGreaterThan` */
    CaptionGreaterThan = "captionGreaterThan",
    /** Caption Is Greater Than Or Equal To. Serialized value: `captionGreaterThanOrEqual` */
    CaptionGreaterThanOrEqual = "captionGreaterThanOrEqual",
    /** Caption Is Less Than. Serialized value: `captionLessThan` */
    CaptionLessThan = "captionLessThan",
    /** Caption Is Less Than Or Equal To. Serialized value: `captionLessThanOrEqual` */
    CaptionLessThanOrEqual = "captionLessThanOrEqual",
    /** Caption Is Between. Serialized value: `captionBetween` */
    CaptionBetween = "captionBetween",
    /** Caption Is Not Between. Serialized value: `captionNotBetween` */
    CaptionNotBetween = "captionNotBetween",
    /** Value Equal. Serialized value: `valueEqual` */
    ValueEqual = "valueEqual",
    /** Value Not Equal. Serialized value: `valueNotEqual` */
    ValueNotEqual = "valueNotEqual",
    /** Value Greater Than. Serialized value: `valueGreaterThan` */
    ValueGreaterThan = "valueGreaterThan",
    /** Value Greater Than Or Equal To. Serialized value: `valueGreaterThanOrEqual` */
    ValueGreaterThanOrEqual = "valueGreaterThanOrEqual",
    /** Value Less Than. Serialized value: `valueLessThan` */
    ValueLessThan = "valueLessThan",
    /** Value Less Than Or Equal To. Serialized value: `valueLessThanOrEqual` */
    ValueLessThanOrEqual = "valueLessThanOrEqual",
    /** Value Between. Serialized value: `valueBetween` */
    ValueBetween = "valueBetween",
    /** Value Not Between. Serialized value: `valueNotBetween` */
    ValueNotBetween = "valueNotBetween",
    /** Date Equals. Serialized value: `dateEqual` */
    DateEqual = "dateEqual",
    /** Date Does Not Equal. Serialized value: `dateNotEqual` */
    DateNotEqual = "dateNotEqual",
    /** Date Older Than. Serialized value: `dateOlderThan` */
    DateOlderThan = "dateOlderThan",
    /** Date Older Than Or Equal. Serialized value: `dateOlderThanOrEqual` */
    DateOlderThanOrEqual = "dateOlderThanOrEqual",
    /** Date Newer Than. Serialized value: `dateNewerThan` */
    DateNewerThan = "dateNewerThan",
    /** Date Newer Than or Equal To. Serialized value: `dateNewerThanOrEqual` */
    DateNewerThanOrEqual = "dateNewerThanOrEqual",
    /** Date Between. Serialized value: `dateBetween` */
    DateBetween = "dateBetween",
    /** Date Not Between. Serialized value: `dateNotBetween` */
    DateNotBetween = "dateNotBetween",
    /** Tomorrow. Serialized value: `tomorrow` */
    Tomorrow = "tomorrow",
    /** Today. Serialized value: `today` */
    Today = "today",
    /** Yesterday. Serialized value: `yesterday` */
    Yesterday = "yesterday",
    /** Next Week. Serialized value: `nextWeek` */
    NextWeek = "nextWeek",
    /** This Week. Serialized value: `thisWeek` */
    ThisWeek = "thisWeek",
    /** Last Week. Serialized value: `lastWeek` */
    LastWeek = "lastWeek",
    /** Next Month. Serialized value: `nextMonth` */
    NextMonth = "nextMonth",
    /** This Month. Serialized value: `thisMonth` */
    ThisMonth = "thisMonth",
    /** Last Month. Serialized value: `lastMonth` */
    LastMonth = "lastMonth",
    /** Next Quarter. Serialized value: `nextQuarter` */
    NextQuarter = "nextQuarter",
    /** This Quarter. Serialized value: `thisQuarter` */
    ThisQuarter = "thisQuarter",
    /** Last Quarter. Serialized value: `lastQuarter` */
    LastQuarter = "lastQuarter",
    /** Next Year. Serialized value: `nextYear` */
    NextYear = "nextYear",
    /** This Year. Serialized value: `thisYear` */
    ThisYear = "thisYear",
    /** Last Year. Serialized value: `lastYear` */
    LastYear = "lastYear",
    /** Year-To-Date. Serialized value: `yearToDate` */
    YearToDate = "yearToDate",
    /** First Quarter. Serialized value: `Q1` */
    Quarter1 = "Q1",
    /** Second Quarter. Serialized value: `Q2` */
    Quarter2 = "Q2",
    /** Third Quarter. Serialized value: `Q3` */
    Quarter3 = "Q3",
    /** Fourth Quarter. Serialized value: `Q4` */
    Quarter4 = "Q4",
    /** January. Serialized value: `M1` */
    January = "M1",
    /** Dates in February. Serialized value: `M2` */
    February = "M2",
    /** Dates in March. Serialized value: `M3` */
    March = "M3",
    /** Dates in April. Serialized value: `M4` */
    April = "M4",
    /** Dates in May. Serialized value: `M5` */
    May = "M5",
    /** Dates in June. Serialized value: `M6` */
    June = "M6",
    /** Dates in July. Serialized value: `M7` */
    July = "M7",
    /** Dates in August. Serialized value: `M8` */
    August = "M8",
    /** Dates in September. Serialized value: `M9` */
    September = "M9",
    /** Dates in October. Serialized value: `M10` */
    October = "M10",
    /** Dates in November. Serialized value: `M11` */
    November = "M11",
    /** Dates in December. Serialized value: `M12` */
    December = "M12"
}
export declare const PivotFilterValuesArray: readonly [PivotFilterValues.Unknown, PivotFilterValues.Count, PivotFilterValues.Percent, PivotFilterValues.Sum, PivotFilterValues.CaptionEqual, PivotFilterValues.CaptionNotEqual, PivotFilterValues.CaptionBeginsWith, PivotFilterValues.CaptionNotBeginsWith, PivotFilterValues.CaptionEndsWith, PivotFilterValues.CaptionNotEndsWith, PivotFilterValues.CaptionContains, PivotFilterValues.CaptionNotContains, PivotFilterValues.CaptionGreaterThan, PivotFilterValues.CaptionGreaterThanOrEqual, PivotFilterValues.CaptionLessThan, PivotFilterValues.CaptionLessThanOrEqual, PivotFilterValues.CaptionBetween, PivotFilterValues.CaptionNotBetween, PivotFilterValues.ValueEqual, PivotFilterValues.ValueNotEqual, PivotFilterValues.ValueGreaterThan, PivotFilterValues.ValueGreaterThanOrEqual, PivotFilterValues.ValueLessThan, PivotFilterValues.ValueLessThanOrEqual, PivotFilterValues.ValueBetween, PivotFilterValues.ValueNotBetween, PivotFilterValues.DateEqual, PivotFilterValues.DateNotEqual, PivotFilterValues.DateOlderThan, PivotFilterValues.DateOlderThanOrEqual, PivotFilterValues.DateNewerThan, PivotFilterValues.DateNewerThanOrEqual, PivotFilterValues.DateBetween, PivotFilterValues.DateNotBetween, PivotFilterValues.Tomorrow, PivotFilterValues.Today, PivotFilterValues.Yesterday, PivotFilterValues.NextWeek, PivotFilterValues.ThisWeek, PivotFilterValues.LastWeek, PivotFilterValues.NextMonth, PivotFilterValues.ThisMonth, PivotFilterValues.LastMonth, PivotFilterValues.NextQuarter, PivotFilterValues.ThisQuarter, PivotFilterValues.LastQuarter, PivotFilterValues.NextYear, PivotFilterValues.ThisYear, PivotFilterValues.LastYear, PivotFilterValues.YearToDate, PivotFilterValues.Quarter1, PivotFilterValues.Quarter2, PivotFilterValues.Quarter3, PivotFilterValues.Quarter4, PivotFilterValues.January, PivotFilterValues.February, PivotFilterValues.March, PivotFilterValues.April, PivotFilterValues.May, PivotFilterValues.June, PivotFilterValues.July, PivotFilterValues.August, PivotFilterValues.September, PivotFilterValues.October, PivotFilterValues.November, PivotFilterValues.December];
export declare enum FormatActionValues {
    /** Blank. Serialized value: `blank` */
    Blank = "blank",
    /** Formatting. Serialized value: `formatting` */
    Formatting = "formatting"
}
export declare const FormatActionValuesArray: readonly [FormatActionValues.Blank, FormatActionValues.Formatting];
export declare enum PivotTableAxisValues {
    /** Row Axis. Serialized value: `axisRow` */
    AxisRow = "axisRow",
    /** Column Axis. Serialized value: `axisCol` */
    AxisColumn = "axisCol",
    /** Include Count Filter. Serialized value: `axisPage` */
    AxisPage = "axisPage",
    /** Values Axis. Serialized value: `axisValues` */
    AxisValues = "axisValues"
}
export declare const PivotTableAxisValuesArray: readonly [PivotTableAxisValues.AxisRow, PivotTableAxisValues.AxisColumn, PivotTableAxisValues.AxisPage, PivotTableAxisValues.AxisValues];
export declare enum GrowShrinkValues {
    /** Insert and Delete On Refresh. Serialized value: `insertDelete` */
    InsertDelete = "insertDelete",
    /** Insert and Clear On Refresh. Serialized value: `insertClear` */
    InsertClear = "insertClear",
    /** Overwrite and Clear On Refresh. Serialized value: `overwriteClear` */
    OverwriteClear = "overwriteClear"
}
export declare const GrowShrinkValuesArray: readonly [GrowShrinkValues.InsertDelete, GrowShrinkValues.InsertClear, GrowShrinkValues.OverwriteClear];
export declare enum PhoneticValues {
    /** Half-Width Katakana. Serialized value: `halfwidthKatakana` */
    HalfWidthKatakana = "halfwidthKatakana",
    /** Full-Width Katakana. Serialized value: `fullwidthKatakana` */
    FullWidthKatakana = "fullwidthKatakana",
    /** Hiragana. Serialized value: `Hiragana` */
    Hiragana = "Hiragana",
    /** No Conversion. Serialized value: `noConversion` */
    NoConversion = "noConversion"
}
export declare const PhoneticValuesArray: readonly [PhoneticValues.HalfWidthKatakana, PhoneticValues.FullWidthKatakana, PhoneticValues.Hiragana, PhoneticValues.NoConversion];
export declare enum PhoneticAlignmentValues {
    /** No Control. Serialized value: `noControl` */
    NoControl = "noControl",
    /** Left Alignment. Serialized value: `left` */
    Left = "left",
    /** Center Alignment. Serialized value: `center` */
    Center = "center",
    /** Distributed. Serialized value: `distributed` */
    Distributed = "distributed"
}
export declare const PhoneticAlignmentValuesArray: readonly [PhoneticAlignmentValues.NoControl, PhoneticAlignmentValues.Left, PhoneticAlignmentValues.Center, PhoneticAlignmentValues.Distributed];
export declare enum RowColumnActionValues {
    /** Insert Row. Serialized value: `insertRow` */
    InsertRow = "insertRow",
    /** Delete Row. Serialized value: `deleteRow` */
    DeleteRow = "deleteRow",
    /** Column Insert. Serialized value: `insertCol` */
    ColumnInsert = "insertCol",
    /** Delete Column. Serialized value: `deleteCol` */
    DeleteColumn = "deleteCol"
}
export declare const RowColumnActionValuesArray: readonly [RowColumnActionValues.InsertRow, RowColumnActionValues.DeleteRow, RowColumnActionValues.ColumnInsert, RowColumnActionValues.DeleteColumn];
export declare enum RevisionActionValues {
    /** Add. Serialized value: `add` */
    Add = "add",
    /** Delete. Serialized value: `delete` */
    Delete = "delete"
}
export declare const RevisionActionValuesArray: readonly [RevisionActionValues.Add, RevisionActionValues.Delete];
export declare enum FormulaExpressionValues {
    /** Reference. Serialized value: `ref` */
    Reference = "ref",
    /** Reference Is Error. Serialized value: `refError` */
    ReferenceError = "refError",
    /** Area. Serialized value: `area` */
    Area = "area",
    /** Area Error. Serialized value: `areaError` */
    AreaError = "areaError",
    /** Computed Area. Serialized value: `computedArea` */
    ComputedArea = "computedArea"
}
export declare const FormulaExpressionValuesArray: readonly [FormulaExpressionValues.Reference, FormulaExpressionValues.ReferenceError, FormulaExpressionValues.Area, FormulaExpressionValues.AreaError, FormulaExpressionValues.ComputedArea];
export declare enum CellFormulaValues {
    /** Normal. Serialized value: `normal` */
    Normal = "normal",
    /** Array Entered. Serialized value: `array` */
    Array = "array",
    /** Table Formula. Serialized value: `dataTable` */
    DataTable = "dataTable",
    /** Shared Formula. Serialized value: `shared` */
    Shared = "shared"
}
export declare const CellFormulaValuesArray: readonly [CellFormulaValues.Normal, CellFormulaValues.Array, CellFormulaValues.DataTable, CellFormulaValues.Shared];
export declare enum PaneValues {
    /** Bottom Right Pane. Serialized value: `bottomRight` */
    BottomRight = "bottomRight",
    /** Top Right Pane. Serialized value: `topRight` */
    TopRight = "topRight",
    /** Bottom Left Pane. Serialized value: `bottomLeft` */
    BottomLeft = "bottomLeft",
    /** Top Left Pane. Serialized value: `topLeft` */
    TopLeft = "topLeft"
}
export declare const PaneValuesArray: readonly [PaneValues.BottomRight, PaneValues.TopRight, PaneValues.BottomLeft, PaneValues.TopLeft];
export declare enum SheetViewValues {
    /** Normal View. Serialized value: `normal` */
    Normal = "normal",
    /** Page Break Preview. Serialized value: `pageBreakPreview` */
    PageBreakPreview = "pageBreakPreview",
    /** Page Layout View. Serialized value: `pageLayout` */
    PageLayout = "pageLayout"
}
export declare const SheetViewValuesArray: readonly [SheetViewValues.Normal, SheetViewValues.PageBreakPreview, SheetViewValues.PageLayout];
export declare enum DataConsolidateFunctionValues {
    /** Average. Serialized value: `average` */
    Average = "average",
    /** Count. Serialized value: `count` */
    Count = "count",
    /** CountNums. Serialized value: `countNums` */
    CountNumbers = "countNums",
    /** Maximum. Serialized value: `max` */
    Maximum = "max",
    /** Minimum. Serialized value: `min` */
    Minimum = "min",
    /** Product. Serialized value: `product` */
    Product = "product",
    /** StdDev. Serialized value: `stdDev` */
    StandardDeviation = "stdDev",
    /** StdDevP. Serialized value: `stdDevp` */
    StandardDeviationP = "stdDevp",
    /** Sum. Serialized value: `sum` */
    Sum = "sum",
    /** Variance. Serialized value: `var` */
    Variance = "var",
    /** VarP. Serialized value: `varp` */
    VarianceP = "varp"
}
export declare const DataConsolidateFunctionValuesArray: readonly [DataConsolidateFunctionValues.Average, DataConsolidateFunctionValues.Count, DataConsolidateFunctionValues.CountNumbers, DataConsolidateFunctionValues.Maximum, DataConsolidateFunctionValues.Minimum, DataConsolidateFunctionValues.Product, DataConsolidateFunctionValues.StandardDeviation, DataConsolidateFunctionValues.StandardDeviationP, DataConsolidateFunctionValues.Sum, DataConsolidateFunctionValues.Variance, DataConsolidateFunctionValues.VarianceP];
export declare enum DataValidationValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Whole Number. Serialized value: `whole` */
    Whole = "whole",
    /** Decimal. Serialized value: `decimal` */
    Decimal = "decimal",
    /** List. Serialized value: `list` */
    List = "list",
    /** Date. Serialized value: `date` */
    Date = "date",
    /** Time. Serialized value: `time` */
    Time = "time",
    /** Text Length. Serialized value: `textLength` */
    TextLength = "textLength",
    /** Custom. Serialized value: `custom` */
    Custom = "custom"
}
export declare const DataValidationValuesArray: readonly [DataValidationValues.None, DataValidationValues.Whole, DataValidationValues.Decimal, DataValidationValues.List, DataValidationValues.Date, DataValidationValues.Time, DataValidationValues.TextLength, DataValidationValues.Custom];
export declare enum DataValidationOperatorValues {
    /** Between. Serialized value: `between` */
    Between = "between",
    /** Not Between. Serialized value: `notBetween` */
    NotBetween = "notBetween",
    /** Equal. Serialized value: `equal` */
    Equal = "equal",
    /** Not Equal. Serialized value: `notEqual` */
    NotEqual = "notEqual",
    /** Less Than. Serialized value: `lessThan` */
    LessThan = "lessThan",
    /** Less Than Or Equal. Serialized value: `lessThanOrEqual` */
    LessThanOrEqual = "lessThanOrEqual",
    /** Greater Than. Serialized value: `greaterThan` */
    GreaterThan = "greaterThan",
    /** Greater Than Or Equal. Serialized value: `greaterThanOrEqual` */
    GreaterThanOrEqual = "greaterThanOrEqual"
}
export declare const DataValidationOperatorValuesArray: readonly [DataValidationOperatorValues.Between, DataValidationOperatorValues.NotBetween, DataValidationOperatorValues.Equal, DataValidationOperatorValues.NotEqual, DataValidationOperatorValues.LessThan, DataValidationOperatorValues.LessThanOrEqual, DataValidationOperatorValues.GreaterThan, DataValidationOperatorValues.GreaterThanOrEqual];
export declare enum DataValidationErrorStyleValues {
    /** Stop Icon. Serialized value: `stop` */
    Stop = "stop",
    /** Warning Icon. Serialized value: `warning` */
    Warning = "warning",
    /** Information Icon. Serialized value: `information` */
    Information = "information"
}
export declare const DataValidationErrorStyleValuesArray: readonly [DataValidationErrorStyleValues.Stop, DataValidationErrorStyleValues.Warning, DataValidationErrorStyleValues.Information];
export declare enum DataValidationImeModeValues {
    /** IME Mode Not Controlled. Serialized value: `noControl` */
    NoControl = "noControl",
    /** IME Off. Serialized value: `off` */
    Off = "off",
    /** IME On. Serialized value: `on` */
    On = "on",
    /** Disabled IME Mode. Serialized value: `disabled` */
    Disabled = "disabled",
    /** Hiragana IME Mode. Serialized value: `hiragana` */
    Hiragana = "hiragana",
    /** Full Katakana IME Mode. Serialized value: `fullKatakana` */
    FullKatakana = "fullKatakana",
    /** Half-Width Katakana. Serialized value: `halfKatakana` */
    HalfKatakana = "halfKatakana",
    /** Full-Width Alpha-Numeric IME Mode. Serialized value: `fullAlpha` */
    FullAlpha = "fullAlpha",
    /** Half Alpha IME. Serialized value: `halfAlpha` */
    HalfAlpha = "halfAlpha",
    /** Full Width Hangul. Serialized value: `fullHangul` */
    FullHangul = "fullHangul",
    /** Half-Width Hangul IME Mode. Serialized value: `halfHangul` */
    HalfHangul = "halfHangul"
}
export declare const DataValidationImeModeValuesArray: readonly [DataValidationImeModeValues.NoControl, DataValidationImeModeValues.Off, DataValidationImeModeValues.On, DataValidationImeModeValues.Disabled, DataValidationImeModeValues.Hiragana, DataValidationImeModeValues.FullKatakana, DataValidationImeModeValues.HalfKatakana, DataValidationImeModeValues.FullAlpha, DataValidationImeModeValues.HalfAlpha, DataValidationImeModeValues.FullHangul, DataValidationImeModeValues.HalfHangul];
export declare enum ConditionalFormatValues {
    /** Expression. Serialized value: `expression` */
    Expression = "expression",
    /** Cell Is. Serialized value: `cellIs` */
    CellIs = "cellIs",
    /** Color Scale. Serialized value: `colorScale` */
    ColorScale = "colorScale",
    /** Data Bar. Serialized value: `dataBar` */
    DataBar = "dataBar",
    /** Icon Set. Serialized value: `iconSet` */
    IconSet = "iconSet",
    /** Top 10. Serialized value: `top10` */
    Top10 = "top10",
    /** Unique Values. Serialized value: `uniqueValues` */
    UniqueValues = "uniqueValues",
    /** Duplicate Values. Serialized value: `duplicateValues` */
    DuplicateValues = "duplicateValues",
    /** Contains Text. Serialized value: `containsText` */
    ContainsText = "containsText",
    /** Does Not Contain Text. Serialized value: `notContainsText` */
    NotContainsText = "notContainsText",
    /** Begins With. Serialized value: `beginsWith` */
    BeginsWith = "beginsWith",
    /** Ends With. Serialized value: `endsWith` */
    EndsWith = "endsWith",
    /** Contains Blanks. Serialized value: `containsBlanks` */
    ContainsBlanks = "containsBlanks",
    /** Contains No Blanks. Serialized value: `notContainsBlanks` */
    NotContainsBlanks = "notContainsBlanks",
    /** Contains Errors. Serialized value: `containsErrors` */
    ContainsErrors = "containsErrors",
    /** Contains No Errors. Serialized value: `notContainsErrors` */
    NotContainsErrors = "notContainsErrors",
    /** Time Period. Serialized value: `timePeriod` */
    TimePeriod = "timePeriod",
    /** Above or Below Average. Serialized value: `aboveAverage` */
    AboveAverage = "aboveAverage"
}
export declare const ConditionalFormatValuesArray: readonly [ConditionalFormatValues.Expression, ConditionalFormatValues.CellIs, ConditionalFormatValues.ColorScale, ConditionalFormatValues.DataBar, ConditionalFormatValues.IconSet, ConditionalFormatValues.Top10, ConditionalFormatValues.UniqueValues, ConditionalFormatValues.DuplicateValues, ConditionalFormatValues.ContainsText, ConditionalFormatValues.NotContainsText, ConditionalFormatValues.BeginsWith, ConditionalFormatValues.EndsWith, ConditionalFormatValues.ContainsBlanks, ConditionalFormatValues.NotContainsBlanks, ConditionalFormatValues.ContainsErrors, ConditionalFormatValues.NotContainsErrors, ConditionalFormatValues.TimePeriod, ConditionalFormatValues.AboveAverage];
export declare enum TimePeriodValues {
    /** Today. Serialized value: `today` */
    Today = "today",
    /** Yesterday. Serialized value: `yesterday` */
    Yesterday = "yesterday",
    /** Tomorrow. Serialized value: `tomorrow` */
    Tomorrow = "tomorrow",
    /** Last 7 Days. Serialized value: `last7Days` */
    Last7Days = "last7Days",
    /** This Month. Serialized value: `thisMonth` */
    ThisMonth = "thisMonth",
    /** Last Month. Serialized value: `lastMonth` */
    LastMonth = "lastMonth",
    /** Next Month. Serialized value: `nextMonth` */
    NextMonth = "nextMonth",
    /** This Week. Serialized value: `thisWeek` */
    ThisWeek = "thisWeek",
    /** Last Week. Serialized value: `lastWeek` */
    LastWeek = "lastWeek",
    /** Next Week. Serialized value: `nextWeek` */
    NextWeek = "nextWeek"
}
export declare const TimePeriodValuesArray: readonly [TimePeriodValues.Today, TimePeriodValues.Yesterday, TimePeriodValues.Tomorrow, TimePeriodValues.Last7Days, TimePeriodValues.ThisMonth, TimePeriodValues.LastMonth, TimePeriodValues.NextMonth, TimePeriodValues.ThisWeek, TimePeriodValues.LastWeek, TimePeriodValues.NextWeek];
export declare enum ConditionalFormattingOperatorValues {
    /** Less Than. Serialized value: `lessThan` */
    LessThan = "lessThan",
    /** Less Than Or Equal. Serialized value: `lessThanOrEqual` */
    LessThanOrEqual = "lessThanOrEqual",
    /** Equal. Serialized value: `equal` */
    Equal = "equal",
    /** Not Equal. Serialized value: `notEqual` */
    NotEqual = "notEqual",
    /** Greater Than Or Equal. Serialized value: `greaterThanOrEqual` */
    GreaterThanOrEqual = "greaterThanOrEqual",
    /** Greater Than. Serialized value: `greaterThan` */
    GreaterThan = "greaterThan",
    /** Between. Serialized value: `between` */
    Between = "between",
    /** Not Between. Serialized value: `notBetween` */
    NotBetween = "notBetween",
    /** Contains. Serialized value: `containsText` */
    ContainsText = "containsText",
    /** Does Not Contain. Serialized value: `notContains` */
    NotContains = "notContains",
    /** Begins With. Serialized value: `beginsWith` */
    BeginsWith = "beginsWith",
    /** Ends With. Serialized value: `endsWith` */
    EndsWith = "endsWith"
}
export declare const ConditionalFormattingOperatorValuesArray: readonly [ConditionalFormattingOperatorValues.LessThan, ConditionalFormattingOperatorValues.LessThanOrEqual, ConditionalFormattingOperatorValues.Equal, ConditionalFormattingOperatorValues.NotEqual, ConditionalFormattingOperatorValues.GreaterThanOrEqual, ConditionalFormattingOperatorValues.GreaterThan, ConditionalFormattingOperatorValues.Between, ConditionalFormattingOperatorValues.NotBetween, ConditionalFormattingOperatorValues.ContainsText, ConditionalFormattingOperatorValues.NotContains, ConditionalFormattingOperatorValues.BeginsWith, ConditionalFormattingOperatorValues.EndsWith];
export declare enum ConditionalFormatValueObjectValues {
    /** Number. Serialized value: `num` */
    Number = "num",
    /** Percent. Serialized value: `percent` */
    Percent = "percent",
    /** Maximum. Serialized value: `max` */
    Max = "max",
    /** Minimum. Serialized value: `min` */
    Min = "min",
    /** Formula. Serialized value: `formula` */
    Formula = "formula",
    /** Percentile. Serialized value: `percentile` */
    Percentile = "percentile"
}
export declare const ConditionalFormatValueObjectValuesArray: readonly [ConditionalFormatValueObjectValues.Number, ConditionalFormatValueObjectValues.Percent, ConditionalFormatValueObjectValues.Max, ConditionalFormatValueObjectValues.Min, ConditionalFormatValueObjectValues.Formula, ConditionalFormatValueObjectValues.Percentile];
export declare enum PageOrderValues {
    /** Down Then Over. Serialized value: `downThenOver` */
    DownThenOver = "downThenOver",
    /** Over Then Down. Serialized value: `overThenDown` */
    OverThenDown = "overThenDown"
}
export declare const PageOrderValuesArray: readonly [PageOrderValues.DownThenOver, PageOrderValues.OverThenDown];
export declare enum OrientationValues {
    /** Default. Serialized value: `default` */
    Default = "default",
    /** Portrait. Serialized value: `portrait` */
    Portrait = "portrait",
    /** Landscape. Serialized value: `landscape` */
    Landscape = "landscape"
}
export declare const OrientationValuesArray: readonly [OrientationValues.Default, OrientationValues.Portrait, OrientationValues.Landscape];
export declare enum CellCommentsValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Print Comments As Displayed. Serialized value: `asDisplayed` */
    AsDisplayed = "asDisplayed",
    /** Print At End. Serialized value: `atEnd` */
    AtEnd = "atEnd"
}
export declare const CellCommentsValuesArray: readonly [CellCommentsValues.None, CellCommentsValues.AsDisplayed, CellCommentsValues.AtEnd];
export declare enum PrintErrorValues {
    /** Display Cell Errors. Serialized value: `displayed` */
    Displayed = "displayed",
    /** Show Cell Errors As Blank. Serialized value: `blank` */
    Blank = "blank",
    /** Dash Cell Errors. Serialized value: `dash` */
    Dash = "dash",
    /** NA. Serialized value: `NA` */
    NA = "NA"
}
export declare const PrintErrorValuesArray: readonly [PrintErrorValues.Displayed, PrintErrorValues.Blank, PrintErrorValues.Dash, PrintErrorValues.NA];
export declare enum DataViewAspectValues {
    /** Object Display Content. Serialized value: `DVASPECT_CONTENT` */
    DataViewAspectContent = "DVASPECT_CONTENT",
    /** Object Display Icon. Serialized value: `DVASPECT_ICON` */
    DataViewAspectIcon = "DVASPECT_ICON"
}
export declare const DataViewAspectValuesArray: readonly [DataViewAspectValues.DataViewAspectContent, DataViewAspectValues.DataViewAspectIcon];
export declare enum OleUpdateValues {
    /** Always Update OLE. Serialized value: `OLEUPDATE_ALWAYS` */
    OleUpdateAlways = "OLEUPDATE_ALWAYS",
    /** Update OLE On Call. Serialized value: `OLEUPDATE_ONCALL` */
    OleUpdateOnCall = "OLEUPDATE_ONCALL"
}
export declare const OleUpdateValuesArray: readonly [OleUpdateValues.OleUpdateAlways, OleUpdateValues.OleUpdateOnCall];
export declare enum WebSourceValues {
    /** All Sheet Content. Serialized value: `sheet` */
    Sheet = "sheet",
    /** Print Area. Serialized value: `printArea` */
    PrintArea = "printArea",
    /** AutoFilter. Serialized value: `autoFilter` */
    AutoFilter = "autoFilter",
    /** Range. Serialized value: `range` */
    Range = "range",
    /** Chart. Serialized value: `chart` */
    Chart = "chart",
    /** PivotTable. Serialized value: `pivotTable` */
    PivotTable = "pivotTable",
    /** QueryTable. Serialized value: `query` */
    Query = "query",
    /** Label. Serialized value: `label` */
    Label = "label"
}
export declare const WebSourceValuesArray: readonly [WebSourceValues.Sheet, WebSourceValues.PrintArea, WebSourceValues.AutoFilter, WebSourceValues.Range, WebSourceValues.Chart, WebSourceValues.PivotTable, WebSourceValues.Query, WebSourceValues.Label];
export declare enum PaneStateValues {
    /** Split. Serialized value: `split` */
    Split = "split",
    /** Frozen. Serialized value: `frozen` */
    Frozen = "frozen",
    /** Frozen Split. Serialized value: `frozenSplit` */
    FrozenSplit = "frozenSplit"
}
export declare const PaneStateValuesArray: readonly [PaneStateValues.Split, PaneStateValues.Frozen, PaneStateValues.FrozenSplit];
export declare enum MdxFunctionValues {
    /** Cube Member. Serialized value: `m` */
    CubeMember = "m",
    /** Cube Value. Serialized value: `v` */
    CubeValue = "v",
    /** Cube Set. Serialized value: `s` */
    CubeSet = "s",
    /** Cube Set Count. Serialized value: `c` */
    CubeSetCount = "c",
    /** Cube Ranked Member. Serialized value: `r` */
    CubeRankedMember = "r",
    /** Cube Member Property. Serialized value: `p` */
    CubeMemberProperty = "p",
    /** Cube KPI Member. Serialized value: `k` */
    CubeKPIMember = "k"
}
export declare const MdxFunctionValuesArray: readonly [MdxFunctionValues.CubeMember, MdxFunctionValues.CubeValue, MdxFunctionValues.CubeSet, MdxFunctionValues.CubeSetCount, MdxFunctionValues.CubeRankedMember, MdxFunctionValues.CubeMemberProperty, MdxFunctionValues.CubeKPIMember];
export declare enum MdxSetOrderValues {
    /** Unsorted. Serialized value: `u` */
    Unsorted = "u",
    /** Ascending. Serialized value: `a` */
    Ascending = "a",
    /** Descending. Serialized value: `d` */
    Descending = "d",
    /** Alpha Ascending Sort Order. Serialized value: `aa` */
    AlphaAscendingSortOrder = "aa",
    /** Alpha Descending Sort Order. Serialized value: `ad` */
    AlphaDescendingSortOrder = "ad",
    /** Natural Ascending. Serialized value: `na` */
    NaturalAscending = "na",
    /** Natural Descending. Serialized value: `nd` */
    NaturalDescending = "nd"
}
export declare const MdxSetOrderValuesArray: readonly [MdxSetOrderValues.Unsorted, MdxSetOrderValues.Ascending, MdxSetOrderValues.Descending, MdxSetOrderValues.AlphaAscendingSortOrder, MdxSetOrderValues.AlphaDescendingSortOrder, MdxSetOrderValues.NaturalAscending, MdxSetOrderValues.NaturalDescending];
export declare enum MdxKPIPropertyValues {
    /** Value. Serialized value: `v` */
    Value = "v",
    /** Goal. Serialized value: `g` */
    Goal = "g",
    /** Status. Serialized value: `s` */
    Status = "s",
    /** Trend. Serialized value: `t` */
    Trend = "t",
    /** Weight. Serialized value: `w` */
    Weight = "w",
    /** Current Time Member. Serialized value: `m` */
    Time = "m"
}
export declare const MdxKPIPropertyValuesArray: readonly [MdxKPIPropertyValues.Value, MdxKPIPropertyValues.Goal, MdxKPIPropertyValues.Status, MdxKPIPropertyValues.Trend, MdxKPIPropertyValues.Weight, MdxKPIPropertyValues.Time];
export declare enum BorderStyleValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Thin Border. Serialized value: `thin` */
    Thin = "thin",
    /** Medium Border. Serialized value: `medium` */
    Medium = "medium",
    /** Dashed. Serialized value: `dashed` */
    Dashed = "dashed",
    /** Dotted. Serialized value: `dotted` */
    Dotted = "dotted",
    /** Thick Line Border. Serialized value: `thick` */
    Thick = "thick",
    /** Double Line. Serialized value: `double` */
    Double = "double",
    /** Hairline Border. Serialized value: `hair` */
    Hair = "hair",
    /** Medium Dashed. Serialized value: `mediumDashed` */
    MediumDashed = "mediumDashed",
    /** Dash Dot. Serialized value: `dashDot` */
    DashDot = "dashDot",
    /** Medium Dash Dot. Serialized value: `mediumDashDot` */
    MediumDashDot = "mediumDashDot",
    /** Dash Dot Dot. Serialized value: `dashDotDot` */
    DashDotDot = "dashDotDot",
    /** Medium Dash Dot Dot. Serialized value: `mediumDashDotDot` */
    MediumDashDotDot = "mediumDashDotDot",
    /** Slant Dash Dot. Serialized value: `slantDashDot` */
    SlantDashDot = "slantDashDot"
}
export declare const BorderStyleValuesArray: readonly [BorderStyleValues.None, BorderStyleValues.Thin, BorderStyleValues.Medium, BorderStyleValues.Dashed, BorderStyleValues.Dotted, BorderStyleValues.Thick, BorderStyleValues.Double, BorderStyleValues.Hair, BorderStyleValues.MediumDashed, BorderStyleValues.DashDot, BorderStyleValues.MediumDashDot, BorderStyleValues.DashDotDot, BorderStyleValues.MediumDashDotDot, BorderStyleValues.SlantDashDot];
export declare enum PatternValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Solid. Serialized value: `solid` */
    Solid = "solid",
    /** Medium Gray. Serialized value: `mediumGray` */
    MediumGray = "mediumGray",
    /** Dary Gray. Serialized value: `darkGray` */
    DarkGray = "darkGray",
    /** Light Gray. Serialized value: `lightGray` */
    LightGray = "lightGray",
    /** Dark Horizontal. Serialized value: `darkHorizontal` */
    DarkHorizontal = "darkHorizontal",
    /** Dark Vertical. Serialized value: `darkVertical` */
    DarkVertical = "darkVertical",
    /** Dark Down. Serialized value: `darkDown` */
    DarkDown = "darkDown",
    /** Dark Up. Serialized value: `darkUp` */
    DarkUp = "darkUp",
    /** Dark Grid. Serialized value: `darkGrid` */
    DarkGrid = "darkGrid",
    /** Dark Trellis. Serialized value: `darkTrellis` */
    DarkTrellis = "darkTrellis",
    /** Light Horizontal. Serialized value: `lightHorizontal` */
    LightHorizontal = "lightHorizontal",
    /** Light Vertical. Serialized value: `lightVertical` */
    LightVertical = "lightVertical",
    /** Light Down. Serialized value: `lightDown` */
    LightDown = "lightDown",
    /** Light Up. Serialized value: `lightUp` */
    LightUp = "lightUp",
    /** Light Grid. Serialized value: `lightGrid` */
    LightGrid = "lightGrid",
    /** Light Trellis. Serialized value: `lightTrellis` */
    LightTrellis = "lightTrellis",
    /** Gray 0.125. Serialized value: `gray125` */
    Gray125 = "gray125",
    /** Gray 0.0625. Serialized value: `gray0625` */
    Gray0625 = "gray0625"
}
export declare const PatternValuesArray: readonly [PatternValues.None, PatternValues.Solid, PatternValues.MediumGray, PatternValues.DarkGray, PatternValues.LightGray, PatternValues.DarkHorizontal, PatternValues.DarkVertical, PatternValues.DarkDown, PatternValues.DarkUp, PatternValues.DarkGrid, PatternValues.DarkTrellis, PatternValues.LightHorizontal, PatternValues.LightVertical, PatternValues.LightDown, PatternValues.LightUp, PatternValues.LightGrid, PatternValues.LightTrellis, PatternValues.Gray125, PatternValues.Gray0625];
export declare enum GradientValues {
    /** Linear Gradient. Serialized value: `linear` */
    Linear = "linear",
    /** Path. Serialized value: `path` */
    Path = "path"
}
export declare const GradientValuesArray: readonly [GradientValues.Linear, GradientValues.Path];
export declare enum HorizontalAlignmentValues {
    /** General Horizontal Alignment. Serialized value: `general` */
    General = "general",
    /** Left Horizontal Alignment. Serialized value: `left` */
    Left = "left",
    /** Centered Horizontal Alignment. Serialized value: `center` */
    Center = "center",
    /** Right Horizontal Alignment. Serialized value: `right` */
    Right = "right",
    /** Fill. Serialized value: `fill` */
    Fill = "fill",
    /** Justify. Serialized value: `justify` */
    Justify = "justify",
    /** Center Continuous Horizontal Alignment. Serialized value: `centerContinuous` */
    CenterContinuous = "centerContinuous",
    /** Distributed Horizontal Alignment. Serialized value: `distributed` */
    Distributed = "distributed"
}
export declare const HorizontalAlignmentValuesArray: readonly [HorizontalAlignmentValues.General, HorizontalAlignmentValues.Left, HorizontalAlignmentValues.Center, HorizontalAlignmentValues.Right, HorizontalAlignmentValues.Fill, HorizontalAlignmentValues.Justify, HorizontalAlignmentValues.CenterContinuous, HorizontalAlignmentValues.Distributed];
export declare enum VerticalAlignmentValues {
    /** Align Top. Serialized value: `top` */
    Top = "top",
    /** Centered Vertical Alignment. Serialized value: `center` */
    Center = "center",
    /** Aligned To Bottom. Serialized value: `bottom` */
    Bottom = "bottom",
    /** Justified Vertically. Serialized value: `justify` */
    Justify = "justify",
    /** Distributed Vertical Alignment. Serialized value: `distributed` */
    Distributed = "distributed"
}
export declare const VerticalAlignmentValuesArray: readonly [VerticalAlignmentValues.Top, VerticalAlignmentValues.Center, VerticalAlignmentValues.Bottom, VerticalAlignmentValues.Justify, VerticalAlignmentValues.Distributed];
export declare enum TableStyleValues {
    /** Whole Table Style. Serialized value: `wholeTable` */
    WholeTable = "wholeTable",
    /** Header Row Style. Serialized value: `headerRow` */
    HeaderRow = "headerRow",
    /** Total Row Style. Serialized value: `totalRow` */
    TotalRow = "totalRow",
    /** First Column Style. Serialized value: `firstColumn` */
    FirstColumn = "firstColumn",
    /** Last Column Style. Serialized value: `lastColumn` */
    LastColumn = "lastColumn",
    /** First Row Stripe Style. Serialized value: `firstRowStripe` */
    FirstRowStripe = "firstRowStripe",
    /** Second Row Stripe Style. Serialized value: `secondRowStripe` */
    SecondRowStripe = "secondRowStripe",
    /** First Column Stripe Style. Serialized value: `firstColumnStripe` */
    FirstColumnStripe = "firstColumnStripe",
    /** Second Column Stripe Style. Serialized value: `secondColumnStripe` */
    SecondColumnStripe = "secondColumnStripe",
    /** First Header Row Style. Serialized value: `firstHeaderCell` */
    FirstHeaderCell = "firstHeaderCell",
    /** Last Header Style. Serialized value: `lastHeaderCell` */
    LastHeaderCell = "lastHeaderCell",
    /** First Total Row Style. Serialized value: `firstTotalCell` */
    FirstTotalCell = "firstTotalCell",
    /** Last Total Row Style. Serialized value: `lastTotalCell` */
    LastTotalCell = "lastTotalCell",
    /** First Subtotal Column Style. Serialized value: `firstSubtotalColumn` */
    FirstSubtotalColumn = "firstSubtotalColumn",
    /** Second Subtotal Column Style. Serialized value: `secondSubtotalColumn` */
    SecondSubtotalColumn = "secondSubtotalColumn",
    /** Third Subtotal Column Style. Serialized value: `thirdSubtotalColumn` */
    ThirdSubtotalColumn = "thirdSubtotalColumn",
    /** First Subtotal Row Style. Serialized value: `firstSubtotalRow` */
    FirstSubtotalRow = "firstSubtotalRow",
    /** Second Subtotal Row Style. Serialized value: `secondSubtotalRow` */
    SecondSubtotalRow = "secondSubtotalRow",
    /** Third Subtotal Row Style. Serialized value: `thirdSubtotalRow` */
    ThirdSubtotalRow = "thirdSubtotalRow",
    /** Blank Row Style. Serialized value: `blankRow` */
    BlankRow = "blankRow",
    /** First Column Subheading Style. Serialized value: `firstColumnSubheading` */
    FirstColumnSubheading = "firstColumnSubheading",
    /** Second Column Subheading Style. Serialized value: `secondColumnSubheading` */
    SecondColumnSubheading = "secondColumnSubheading",
    /** Third Column Subheading Style. Serialized value: `thirdColumnSubheading` */
    ThirdColumnSubheading = "thirdColumnSubheading",
    /** First Row Subheading Style. Serialized value: `firstRowSubheading` */
    FirstRowSubheading = "firstRowSubheading",
    /** Second Row Subheading Style. Serialized value: `secondRowSubheading` */
    SecondRowSubheading = "secondRowSubheading",
    /** Third Row Subheading Style. Serialized value: `thirdRowSubheading` */
    ThirdRowSubheading = "thirdRowSubheading",
    /** Page Field Labels Style. Serialized value: `pageFieldLabels` */
    PageFieldLabels = "pageFieldLabels",
    /** Page Field Values Style. Serialized value: `pageFieldValues` */
    PageFieldValues = "pageFieldValues"
}
export declare const TableStyleValuesArray: readonly [TableStyleValues.WholeTable, TableStyleValues.HeaderRow, TableStyleValues.TotalRow, TableStyleValues.FirstColumn, TableStyleValues.LastColumn, TableStyleValues.FirstRowStripe, TableStyleValues.SecondRowStripe, TableStyleValues.FirstColumnStripe, TableStyleValues.SecondColumnStripe, TableStyleValues.FirstHeaderCell, TableStyleValues.LastHeaderCell, TableStyleValues.FirstTotalCell, TableStyleValues.LastTotalCell, TableStyleValues.FirstSubtotalColumn, TableStyleValues.SecondSubtotalColumn, TableStyleValues.ThirdSubtotalColumn, TableStyleValues.FirstSubtotalRow, TableStyleValues.SecondSubtotalRow, TableStyleValues.ThirdSubtotalRow, TableStyleValues.BlankRow, TableStyleValues.FirstColumnSubheading, TableStyleValues.SecondColumnSubheading, TableStyleValues.ThirdColumnSubheading, TableStyleValues.FirstRowSubheading, TableStyleValues.SecondRowSubheading, TableStyleValues.ThirdRowSubheading, TableStyleValues.PageFieldLabels, TableStyleValues.PageFieldValues];
export declare enum VerticalAlignmentRunValues {
    /** Baseline. Serialized value: `baseline` */
    Baseline = "baseline",
    /** Superscript. Serialized value: `superscript` */
    Superscript = "superscript",
    /** Subscript. Serialized value: `subscript` */
    Subscript = "subscript"
}
export declare const VerticalAlignmentRunValuesArray: readonly [VerticalAlignmentRunValues.Baseline, VerticalAlignmentRunValues.Superscript, VerticalAlignmentRunValues.Subscript];
export declare enum FontSchemeValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Major Font. Serialized value: `major` */
    Major = "major",
    /** Minor Font. Serialized value: `minor` */
    Minor = "minor"
}
export declare const FontSchemeValuesArray: readonly [FontSchemeValues.None, FontSchemeValues.Major, FontSchemeValues.Minor];
export declare enum UnderlineValues {
    /** Single Underline. Serialized value: `single` */
    Single = "single",
    /** Double Underline. Serialized value: `double` */
    Double = "double",
    /** Accounting Single Underline. Serialized value: `singleAccounting` */
    SingleAccounting = "singleAccounting",
    /** Accounting Double Underline. Serialized value: `doubleAccounting` */
    DoubleAccounting = "doubleAccounting",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const UnderlineValuesArray: readonly [UnderlineValues.Single, UnderlineValues.Double, UnderlineValues.SingleAccounting, UnderlineValues.DoubleAccounting, UnderlineValues.None];
export declare enum DdeValues {
    /** Nil. Serialized value: `nil` */
    Nil = "nil",
    /** Boolean. Serialized value: `b` */
    Boolean = "b",
    /** Real Number. Serialized value: `n` */
    RealNumber = "n",
    /** Error. Serialized value: `e` */
    Error = "e",
    /** String. Serialized value: `str` */
    String = "str"
}
export declare const DdeValuesArray: readonly [DdeValues.Nil, DdeValues.Boolean, DdeValues.RealNumber, DdeValues.Error, DdeValues.String];
export declare enum TableValues {
    /** Worksheet. Serialized value: `worksheet` */
    Worksheet = "worksheet",
    /** XML. Serialized value: `xml` */
    Xml = "xml",
    /** Query Table. Serialized value: `queryTable` */
    QueryTable = "queryTable"
}
export declare const TableValuesArray: readonly [TableValues.Worksheet, TableValues.Xml, TableValues.QueryTable];
export declare enum TotalsRowFunctionValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Sum. Serialized value: `sum` */
    Sum = "sum",
    /** Minimum. Serialized value: `min` */
    Minimum = "min",
    /** Maximum. Serialized value: `max` */
    Maximum = "max",
    /** Average. Serialized value: `average` */
    Average = "average",
    /** Non Empty Cell Count. Serialized value: `count` */
    Count = "count",
    /** Count Numbers. Serialized value: `countNums` */
    CountNumbers = "countNums",
    /** StdDev. Serialized value: `stdDev` */
    StandardDeviation = "stdDev",
    /** Var. Serialized value: `var` */
    Variance = "var",
    /** Custom Formula. Serialized value: `custom` */
    Custom = "custom"
}
export declare const TotalsRowFunctionValuesArray: readonly [TotalsRowFunctionValues.None, TotalsRowFunctionValues.Sum, TotalsRowFunctionValues.Minimum, TotalsRowFunctionValues.Maximum, TotalsRowFunctionValues.Average, TotalsRowFunctionValues.Count, TotalsRowFunctionValues.CountNumbers, TotalsRowFunctionValues.StandardDeviation, TotalsRowFunctionValues.Variance, TotalsRowFunctionValues.Custom];
export declare enum XmlDataValues {
    /** String. Serialized value: `string` */
    String = "string",
    /** Normalized String. Serialized value: `normalizedString` */
    NormalizedString = "normalizedString",
    /** Token. Serialized value: `token` */
    Token = "token",
    /** Byte. Serialized value: `byte` */
    Byte = "byte",
    /** Unsigned Byte. Serialized value: `unsignedByte` */
    UnsignedByte = "unsignedByte",
    /** Base 64 Encoded Binary. Serialized value: `base64Binary` */
    Base64Binary = "base64Binary",
    /** Hex Binary. Serialized value: `hexBinary` */
    HexBinary = "hexBinary",
    /** Integer. Serialized value: `integer` */
    Integer = "integer",
    /** Positive Integer. Serialized value: `positiveInteger` */
    PositiveInteger = "positiveInteger",
    /** Negative Integer. Serialized value: `negativeInteger` */
    NegativeInteger = "negativeInteger",
    /** Non Positive Integer. Serialized value: `nonPositiveInteger` */
    NonPositiveInteger = "nonPositiveInteger",
    /** Non Negative Integer. Serialized value: `nonNegativeInteger` */
    NonNegativeInteger = "nonNegativeInteger",
    /** Integer. Serialized value: `int` */
    Int = "int",
    /** Unsigned Integer. Serialized value: `unsignedInt` */
    UnsignedInteger = "unsignedInt",
    /** Long. Serialized value: `long` */
    Long = "long",
    /** Unsigned Long. Serialized value: `unsignedLong` */
    UnsignedLong = "unsignedLong",
    /** Short. Serialized value: `short` */
    Short = "short",
    /** Unsigned Short. Serialized value: `unsignedShort` */
    UnsignedShort = "unsignedShort",
    /** Decimal. Serialized value: `decimal` */
    Decimal = "decimal",
    /** Float. Serialized value: `float` */
    Float = "float",
    /** Double. Serialized value: `double` */
    Double = "double",
    /** Boolean. Serialized value: `boolean` */
    Boolean = "boolean",
    /** Time. Serialized value: `time` */
    Time = "time",
    /** Date Time. Serialized value: `dateTime` */
    DateTime = "dateTime",
    /** Duration. Serialized value: `duration` */
    Duration = "duration",
    /** Date. Serialized value: `date` */
    Date = "date",
    /** gMonth. Serialized value: `gMonth` */
    Gmonth = "gMonth",
    /** gYear. Serialized value: `gYear` */
    Gyear = "gYear",
    /** gYearMonth. Serialized value: `gYearMonth` */
    GYearMonth = "gYearMonth",
    /** gDay. Serialized value: `gDay` */
    Gday = "gDay",
    /** gMonthDays. Serialized value: `gMonthDay` */
    GMonthDay = "gMonthDay",
    /** Name. Serialized value: `Name` */
    Name = "Name",
    /** Qname. Serialized value: `QName` */
    Qname = "QName",
    /** NCName. Serialized value: `NCName` */
    NCName = "NCName",
    /** Any URI. Serialized value: `anyURI` */
    AnyURI = "anyURI",
    /** Language. Serialized value: `language` */
    Language = "language",
    /** ID. Serialized value: `ID` */
    Id = "ID",
    /** IDREF. Serialized value: `IDREF` */
    IdRef = "IDREF",
    /** IDREFS. Serialized value: `IDREFS` */
    IdRefs = "IDREFS",
    /** ENTITY. Serialized value: `ENTITY` */
    Entity = "ENTITY",
    /** ENTITIES. Serialized value: `ENTITIES` */
    Entities = "ENTITIES",
    /** Notation. Serialized value: `NOTATION` */
    Notation = "NOTATION",
    /** NMTOKEN. Serialized value: `NMTOKEN` */
    NMToken = "NMTOKEN",
    /** NMTOKENS. Serialized value: `NMTOKENS` */
    NMTokens = "NMTOKENS",
    /** Any Type. Serialized value: `anyType` */
    AnyType = "anyType"
}
export declare const XmlDataValuesArray: readonly [XmlDataValues.String, XmlDataValues.NormalizedString, XmlDataValues.Token, XmlDataValues.Byte, XmlDataValues.UnsignedByte, XmlDataValues.Base64Binary, XmlDataValues.HexBinary, XmlDataValues.Integer, XmlDataValues.PositiveInteger, XmlDataValues.NegativeInteger, XmlDataValues.NonPositiveInteger, XmlDataValues.NonNegativeInteger, XmlDataValues.Int, XmlDataValues.UnsignedInteger, XmlDataValues.Long, XmlDataValues.UnsignedLong, XmlDataValues.Short, XmlDataValues.UnsignedShort, XmlDataValues.Decimal, XmlDataValues.Float, XmlDataValues.Double, XmlDataValues.Boolean, XmlDataValues.Time, XmlDataValues.DateTime, XmlDataValues.Duration, XmlDataValues.Date, XmlDataValues.Gmonth, XmlDataValues.Gyear, XmlDataValues.GYearMonth, XmlDataValues.Gday, XmlDataValues.GMonthDay, XmlDataValues.Name, XmlDataValues.Qname, XmlDataValues.NCName, XmlDataValues.AnyURI, XmlDataValues.Language, XmlDataValues.Id, XmlDataValues.IdRef, XmlDataValues.IdRefs, XmlDataValues.Entity, XmlDataValues.Entities, XmlDataValues.Notation, XmlDataValues.NMToken, XmlDataValues.NMTokens, XmlDataValues.AnyType];
export declare enum VolatileDependencyValues {
    /** Real Time Data. Serialized value: `realTimeData` */
    RealTimeData = "realTimeData",
    /** OLAP Formulas. Serialized value: `olapFunctions` */
    OlapFunctions = "olapFunctions"
}
export declare const VolatileDependencyValuesArray: readonly [VolatileDependencyValues.RealTimeData, VolatileDependencyValues.OlapFunctions];
export declare enum VolatileValues {
    /** Boolean. Serialized value: `b` */
    Boolean = "b",
    /** Real Number. Serialized value: `n` */
    RealNumber = "n",
    /** Error. Serialized value: `e` */
    Error = "e",
    /** String. Serialized value: `s` */
    String = "s"
}
export declare const VolatileValuesArray: readonly [VolatileValues.Boolean, VolatileValues.RealNumber, VolatileValues.Error, VolatileValues.String];
export declare enum VisibilityValues {
    /** Visible. Serialized value: `visible` */
    Visible = "visible",
    /** Hidden. Serialized value: `hidden` */
    Hidden = "hidden",
    /** Very Hidden. Serialized value: `veryHidden` */
    VeryHidden = "veryHidden"
}
export declare const VisibilityValuesArray: readonly [VisibilityValues.Visible, VisibilityValues.Hidden, VisibilityValues.VeryHidden];
export declare enum CommentsValues {
    /** No Comments. Serialized value: `commNone` */
    CommentNone = "commNone",
    /** Show Comment Indicator. Serialized value: `commIndicator` */
    CommentIndicator = "commIndicator",
    /** Show Comment and Indicator. Serialized value: `commIndAndComment` */
    CommentIndicatorAndComment = "commIndAndComment"
}
export declare const CommentsValuesArray: readonly [CommentsValues.CommentNone, CommentsValues.CommentIndicator, CommentsValues.CommentIndicatorAndComment];
export declare enum ObjectDisplayValues {
    /** All. Serialized value: `all` */
    All = "all",
    /** Show Placeholders. Serialized value: `placeholders` */
    Placeholders = "placeholders",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const ObjectDisplayValuesArray: readonly [ObjectDisplayValues.All, ObjectDisplayValues.Placeholders, ObjectDisplayValues.None];
export declare enum SheetStateValues {
    /** Visible. Serialized value: `visible` */
    Visible = "visible",
    /** Hidden. Serialized value: `hidden` */
    Hidden = "hidden",
    /** Very Hidden. Serialized value: `veryHidden` */
    VeryHidden = "veryHidden"
}
export declare const SheetStateValuesArray: readonly [SheetStateValues.Visible, SheetStateValues.Hidden, SheetStateValues.VeryHidden];
export declare enum UpdateLinksBehaviorValues {
    /** User Set. Serialized value: `userSet` */
    UserSet = "userSet",
    /** Never Update Links. Serialized value: `never` */
    Never = "never",
    /** Always Update Links. Serialized value: `always` */
    Always = "always"
}
export declare const UpdateLinksBehaviorValuesArray: readonly [UpdateLinksBehaviorValues.UserSet, UpdateLinksBehaviorValues.Never, UpdateLinksBehaviorValues.Always];
export declare enum CalculateModeValues {
    /** Manual Calculation Mode. Serialized value: `manual` */
    Manual = "manual",
    /** Automatic. Serialized value: `auto` */
    Auto = "auto",
    /** Automatic Calculation (No Tables). Serialized value: `autoNoTable` */
    AutoNoTable = "autoNoTable"
}
export declare const CalculateModeValuesArray: readonly [CalculateModeValues.Manual, CalculateModeValues.Auto, CalculateModeValues.AutoNoTable];
export declare enum ReferenceModeValues {
    /** A1 Mode. Serialized value: `A1` */
    A1 = "A1",
    /** R1C1 Reference Mode. Serialized value: `R1C1` */
    R1C1 = "R1C1"
}
export declare const ReferenceModeValuesArray: readonly [ReferenceModeValues.A1, ReferenceModeValues.R1C1];
export declare enum TargetScreenSizeValues {
    /** 544 x 376 Resolution. Serialized value: `544x376` */
    Sz544x376 = "544x376",
    /** 640 x 480 Resolution. Serialized value: `640x480` */
    Sz640x480 = "640x480",
    /** 720 x 512 Resolution. Serialized value: `720x512` */
    Sz720x512 = "720x512",
    /** 800 x 600 Resolution. Serialized value: `800x600` */
    Sz800x600 = "800x600",
    /** 1024 x 768 Resolution. Serialized value: `1024x768` */
    Sz1024x768 = "1024x768",
    /** 1152 x 882 Resolution. Serialized value: `1152x882` */
    Sz1152x882 = "1152x882",
    /** 1152 x 900 Resolution. Serialized value: `1152x900` */
    Sz1152x900 = "1152x900",
    /** 1280 x 1024 Resolution. Serialized value: `1280x1024` */
    Sz1280x1024 = "1280x1024",
    /** 1600 x 1200 Resolution. Serialized value: `1600x1200` */
    Sz1600x1200 = "1600x1200",
    /** 1800 x 1440 Resolution. Serialized value: `1800x1440` */
    Sz1800x1440 = "1800x1440",
    /** 1920 x 1200 Resolution. Serialized value: `1920x1200` */
    Sz1920x1200 = "1920x1200"
}
export declare const TargetScreenSizeValuesArray: readonly [TargetScreenSizeValues.Sz544x376, TargetScreenSizeValues.Sz640x480, TargetScreenSizeValues.Sz720x512, TargetScreenSizeValues.Sz800x600, TargetScreenSizeValues.Sz1024x768, TargetScreenSizeValues.Sz1152x882, TargetScreenSizeValues.Sz1152x900, TargetScreenSizeValues.Sz1280x1024, TargetScreenSizeValues.Sz1600x1200, TargetScreenSizeValues.Sz1800x1440, TargetScreenSizeValues.Sz1920x1200];
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
export declare enum CellValues {
    /** Boolean. Serialized value: `b` */
    Boolean = "b",
    /** Number. Serialized value: `n` */
    Number = "n",
    /** Error. Serialized value: `e` */
    Error = "e",
    /** Shared String. Serialized value: `s` */
    SharedString = "s",
    /** String. Serialized value: `str` */
    String = "str",
    /** Inline String. Serialized value: `inlineStr` */
    InlineString = "inlineStr",
    /** undefined. Serialized value: `d` */
    Date = "d"
}
export declare const CellValuesArray: readonly [CellValues.Boolean, CellValues.Number, CellValues.Error, CellValues.SharedString, CellValues.String, CellValues.InlineString, CellValues.Date];
export declare enum PivotAreaValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Normal. Serialized value: `normal` */
    Normal = "normal",
    /** Data. Serialized value: `data` */
    Data = "data",
    /** All. Serialized value: `all` */
    All = "all",
    /** Origin. Serialized value: `origin` */
    Origin = "origin",
    /** Field Button. Serialized value: `button` */
    Button = "button",
    /** Top Right. Serialized value: `topRight` */
    TopRight = "topRight",
    /** undefined. Serialized value: `topEnd` */
    TopEnd = "topEnd"
}
export declare const PivotAreaValuesArray: readonly [PivotAreaValues.None, PivotAreaValues.Normal, PivotAreaValues.Data, PivotAreaValues.All, PivotAreaValues.Origin, PivotAreaValues.Button, PivotAreaValues.TopRight, PivotAreaValues.TopEnd];
export declare enum ConformanceClass {
    /** Office Open XML Strict. Serialized value: `strict` */
    Enumstrict = "strict",
    /** Office Open XML Transitional. Serialized value: `transitional` */
    Enumtransitional = "transitional"
}
export declare const ConformanceClassArray: readonly [ConformanceClass.Enumstrict, ConformanceClass.Enumtransitional];
/** Cached worksheet data associated with supporting book. Serialized as `x:sheetDataSet` */
export declare class SheetDataSet extends OxmlCompositeElement<ExternalSheetData> {
    static _Q: string;
}
/** Defined names associated with supporting book.. Serialized as `x:definedNames` */
export declare class ExternalDefinedNames extends OxmlCompositeElement<ExternalDefinedName> {
    static _Q: string;
}
/** Sheet names of supporting book. Serialized as `x:sheetNames` */
export declare class SheetNames extends OxmlCompositeElement<SheetName> {
    static _Q: string;
}
/** Defines the RichDataPivotCacheGuid Class. Serialized as `x:richInfo` */
export declare class RichDataPivotCacheGuid extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** pivotCacheGuid. Serialized as `:pivotCacheGuid` */
    get pivotCacheGuid(): StringValue | undefined;
    set pivotCacheGuid(v: StringValue | undefined);
}
/** Defines the PivotCacheDefinitionExtension Class. Serialized as `x:ext` */
export declare class PivotCacheDefinitionExtension extends OxmlCompositeElement<X14PivotCacheDefinition | X15PivotCacheDecoupled | X15TimelinePivotCacheDefinition | X15PivotCacheIdVersion | XxpimXsdboolean | RichDataPivotCacheGuid | XxpviCacheVersionInfo> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14PivotCacheDefinition. */
    get pivotCacheDefinition(): X14PivotCacheDefinition | undefined;
    /** Returns X15PivotCacheDecoupled. */
    get pivotCacheDecoupled(): X15PivotCacheDecoupled | undefined;
    /** Returns X15TimelinePivotCacheDefinition. */
    get timelinePivotCacheDefinition(): X15TimelinePivotCacheDefinition | undefined;
    /** Returns X15PivotCacheIdVersion. */
    get pivotCacheIdVersion(): X15PivotCacheIdVersion | undefined;
    /** Returns XxpimXsdboolean. */
    get xsdboolean(): XxpimXsdboolean | undefined;
    /** Returns RichDataPivotCacheGuid. */
    get richDataPivotCacheGuid(): RichDataPivotCacheGuid | undefined;
    /** Returns XxpviCacheVersionInfo. */
    get cacheVersionInfo(): XxpviCacheVersionInfo | undefined;
}
/** Defines the PivotCacheDefinitionExtensionList Class. Serialized as `x:extLst` */
export declare class PivotCacheDefinitionExtensionList extends OxmlCompositeElement<PivotCacheDefinitionExtension> {
    static _Q: string;
}
/** Defines the Maps Class. Serialized as `x:maps` */
export declare class Maps extends OxmlCompositeElement<MeasureDimensionMap> {
    static _Q: string;
    static _A: string[];
    /** Measure Group Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the MeasureGroups Class. Serialized as `x:measureGroups` */
export declare class MeasureGroups extends OxmlCompositeElement<MeasureGroup> {
    static _Q: string;
    static _A: string[];
    /** Measure Group Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Dimensions Class. Serialized as `x:dimensions` */
export declare class Dimensions extends OxmlCompositeElement<Dimension> {
    static _Q: string;
    static _A: string[];
    /** OLAP Dimensions Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CalculatedMembers Class. Serialized as `x:calculatedMembers` */
export declare class CalculatedMembers extends OxmlCompositeElement<CalculatedMember> {
    static _Q: string;
    static _A: string[];
    /** Calculated Members Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CalculatedItems Class. Serialized as `x:calculatedItems` */
export declare class CalculatedItems extends OxmlCompositeElement<CalculatedItem> {
    static _Q: string;
    static _A: string[];
    /** Calculated Item Formula Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the TupleCache Class. Serialized as `x:tupleCache` */
export declare class TupleCache extends OxmlCompositeElement<Entries | Sets | QueryCache | ServerFormats | ExtensionList> {
    static _Q: string;
    /** Entries. */
    get entries(): Entries | undefined;
    /** Sets. */
    get sets(): Sets | undefined;
    /** OLAP Query Cache. */
    get queryCache(): QueryCache | undefined;
    /** Server Formats. */
    get serverFormats(): ServerFormats | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Kpis Class. Serialized as `x:kpis` */
export declare class Kpis extends OxmlCompositeElement<Kpi> {
    static _Q: string;
    static _A: string[];
    /** KPI Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CacheHierarchies Class. Serialized as `x:cacheHierarchies` */
export declare class CacheHierarchies extends OxmlCompositeElement<CacheHierarchy> {
    static _Q: string;
    static _A: string[];
    /** Hierarchy Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CacheFields Class. Serialized as `x:cacheFields` */
export declare class CacheFields extends OxmlCompositeElement<CacheField> {
    static _Q: string;
    static _A: string[];
    /** Field Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CacheSource Class. Serialized as `x:cacheSource` */
export declare class CacheSource extends OxmlCompositeElement<WorksheetSource | Consolidation | CacheSourceExtensionList> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): SourceValues | undefined;
    set type(v: SourceValues | undefined);
    /** connectionId. Serialized as `:connectionId` */
    get connectionId(): UInt32Value | undefined;
    set connectionId(v: UInt32Value | undefined);
    /** Returns WorksheetSource. */
    get worksheetSource(): WorksheetSource | undefined;
    /** Returns Consolidation. */
    get consolidation(): Consolidation | undefined;
    /** Returns CacheSourceExtensionList. */
    get cacheSourceExtensionList(): CacheSourceExtensionList | undefined;
}
/** Defines the PivotTableDefinitionExtension Class. Serialized as `x:ext` */
export declare class PivotTableDefinitionExtension extends OxmlCompositeElement<X14PivotTableDefinition | X15PivotTableData | X15PivotTableUISettings | XxpviPivotVersionInfo> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14PivotTableDefinition. */
    get pivotTableDefinition(): X14PivotTableDefinition | undefined;
    /** Returns X15PivotTableData. */
    get pivotTableData(): X15PivotTableData | undefined;
    /** Returns X15PivotTableUISettings. */
    get pivotTableUISettings(): X15PivotTableUISettings | undefined;
    /** Returns XxpviPivotVersionInfo. */
    get pivotVersionInfo(): XxpviPivotVersionInfo | undefined;
}
/** Defines the PivotTableDefinitionExtensionList Class. Serialized as `x:extLst` */
export declare class PivotTableDefinitionExtensionList extends OxmlCompositeElement<PivotTableDefinitionExtension> {
    static _Q: string;
}
/** Defines the ColumnHierarchiesUsage Class. Serialized as `x:colHierarchiesUsage` */
export declare class ColumnHierarchiesUsage extends OxmlCompositeElement<ColumnHierarchyUsage> {
    static _Q: string;
    static _A: string[];
    /** Items Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the RowHierarchiesUsage Class. Serialized as `x:rowHierarchiesUsage` */
export declare class RowHierarchiesUsage extends OxmlCompositeElement<RowHierarchyUsage> {
    static _Q: string;
    static _A: string[];
    /** Item Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the PivotFilters Class. Serialized as `x:filters` */
export declare class PivotFilters extends OxmlCompositeElement<PivotFilter> {
    static _Q: string;
    static _A: string[];
    /** Pivot Filter Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the PivotTableStyle Class. Serialized as `x:pivotTableStyleInfo` */
export declare class PivotTableStyle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Table Style Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Show Row Header Formatting. Serialized as `:showRowHeaders` */
    get showRowHeaders(): BooleanValue | undefined;
    set showRowHeaders(v: BooleanValue | undefined);
    /** Show Table Style Column Header Formatting. Serialized as `:showColHeaders` */
    get showColumnHeaders(): BooleanValue | undefined;
    set showColumnHeaders(v: BooleanValue | undefined);
    /** Show Row Stripes. Serialized as `:showRowStripes` */
    get showRowStripes(): BooleanValue | undefined;
    set showRowStripes(v: BooleanValue | undefined);
    /** Show Column Stripes. Serialized as `:showColStripes` */
    get showColumnStripes(): BooleanValue | undefined;
    set showColumnStripes(v: BooleanValue | undefined);
    /** Show Last Column. Serialized as `:showLastColumn` */
    get showLastColumn(): BooleanValue | undefined;
    set showLastColumn(v: BooleanValue | undefined);
}
/** Defines the PivotHierarchies Class. Serialized as `x:pivotHierarchies` */
export declare class PivotHierarchies extends OxmlCompositeElement<PivotHierarchy> {
    static _Q: string;
    static _A: string[];
    /** OLAP Hierarchy Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ChartFormats Class. Serialized as `x:chartFormats` */
export declare class ChartFormats extends OxmlCompositeElement<ChartFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ConditionalFormats Class. Serialized as `x:conditionalFormats` */
export declare class ConditionalFormats extends OxmlCompositeElement<ConditionalFormat> {
    static _Q: string;
    static _A: string[];
    /** Conditional Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Formats Class. Serialized as `x:formats` */
export declare class Formats extends OxmlCompositeElement<Format> {
    static _Q: string;
    static _A: string[];
    /** Formats Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the DataFields Class. Serialized as `x:dataFields` */
export declare class DataFields extends OxmlCompositeElement<DataField> {
    static _Q: string;
    static _A: string[];
    /** Data Items Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the PageFields Class. Serialized as `x:pageFields` */
export declare class PageFields extends OxmlCompositeElement<PageField> {
    static _Q: string;
    static _A: string[];
    /** Page Item Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ColumnItems Class. Serialized as `x:colItems` */
export declare class ColumnItems extends OxmlCompositeElement<RowItem> {
    static _Q: string;
    static _A: string[];
    /** Column Item Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ColumnFields Class. Serialized as `x:colFields` */
export declare class ColumnFields extends OxmlCompositeElement<Field> {
    static _Q: string;
    static _A: string[];
    /** Repeated Items Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the RowItems Class. Serialized as `x:rowItems` */
export declare class RowItems extends OxmlCompositeElement<RowItem> {
    static _Q: string;
    static _A: string[];
    /** Items in a Row Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the RowFields Class. Serialized as `x:rowFields` */
export declare class RowFields extends OxmlCompositeElement<Field> {
    static _Q: string;
    static _A: string[];
    /** Repeated Items Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the PivotFields Class. Serialized as `x:pivotFields` */
export declare class PivotFields extends OxmlCompositeElement<PivotField> {
    static _Q: string;
    static _A: string[];
    /** Field Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Location Class. Serialized as `x:location` */
export declare class Location extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** First Header Row. Serialized as `:firstHeaderRow` */
    get firstHeaderRow(): UInt32Value | undefined;
    set firstHeaderRow(v: UInt32Value | undefined);
    /** PivotTable Data First Row. Serialized as `:firstDataRow` */
    get firstDataRow(): UInt32Value | undefined;
    set firstDataRow(v: UInt32Value | undefined);
    /** First Data Column. Serialized as `:firstDataCol` */
    get firstDataColumn(): UInt32Value | undefined;
    set firstDataColumn(v: UInt32Value | undefined);
    /** Rows Per Page Count. Serialized as `:rowPageCount` */
    get rowPageCount(): UInt32Value | undefined;
    set rowPageCount(v: UInt32Value | undefined);
    /** Columns Per Page. Serialized as `:colPageCount` */
    get columnsPerPage(): UInt32Value | undefined;
    set columnsPerPage(v: UInt32Value | undefined);
}
/** Defines the WorkbookExtension Class. Serialized as `x:ext` */
export declare class WorkbookExtension extends OxmlCompositeElement<X14DefinedNames | X14PivotCaches | X14SlicerCaches | X15SlicerCaches | X14WorkbookProperties | X15PivotCaches | X15PivotTableReferences | X15TimelineCachePivotCaches | X15TimelineCacheReferences | X15WorkbookProperties | X15DataModel> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14PivotCaches. */
    get x14PivotCaches(): X14PivotCaches | undefined;
    /** Returns X14SlicerCaches. */
    get x14SlicerCaches(): X14SlicerCaches | undefined;
    /** Returns X15SlicerCaches. */
    get x15SlicerCaches(): X15SlicerCaches | undefined;
    /** Returns X14WorkbookProperties. */
    get x14WorkbookProperties(): X14WorkbookProperties | undefined;
    /** Returns X15PivotCaches. */
    get x15PivotCaches(): X15PivotCaches | undefined;
    /** Returns X15WorkbookProperties. */
    get x15WorkbookProperties(): X15WorkbookProperties | undefined;
    /** Returns X14DefinedNames. */
    get definedNames(): X14DefinedNames | undefined;
    /** Returns X15PivotTableReferences. */
    get pivotTableReferences(): X15PivotTableReferences | undefined;
    /** Returns X15TimelineCachePivotCaches. */
    get timelineCachePivotCaches(): X15TimelineCachePivotCaches | undefined;
    /** Returns X15TimelineCacheReferences. */
    get timelineCacheReferences(): X15TimelineCacheReferences | undefined;
    /** Returns X15DataModel. */
    get dataModel(): X15DataModel | undefined;
}
/** Defines the WorkbookExtensionList Class. Serialized as `x:extLst` */
export declare class WorkbookExtensionList extends OxmlCompositeElement<WorkbookExtension> {
    static _Q: string;
}
/** Defines the WebPublishObjects Class. Serialized as `x:webPublishObjects` */
export declare class WebPublishObjects extends OxmlCompositeElement<WebPublishObject> {
    static _Q: string;
    static _A: string[];
    /** Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the FileRecoveryProperties Class. Serialized as `x:fileRecoveryPr` */
export declare class FileRecoveryProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Auto Recover. Serialized as `:autoRecover` */
    get autoRecover(): BooleanValue | undefined;
    set autoRecover(v: BooleanValue | undefined);
    /** Crash Save. Serialized as `:crashSave` */
    get crashSave(): BooleanValue | undefined;
    set crashSave(v: BooleanValue | undefined);
    /** Data Extract Load. Serialized as `:dataExtractLoad` */
    get dataExtractLoad(): BooleanValue | undefined;
    set dataExtractLoad(v: BooleanValue | undefined);
    /** Repair Load. Serialized as `:repairLoad` */
    get repairLoad(): BooleanValue | undefined;
    set repairLoad(v: BooleanValue | undefined);
}
/** Defines the WebPublishing Class. Serialized as `x:webPublishing` */
export declare class WebPublishing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** css. Serialized as `:css` */
    get useCss(): BooleanValue | undefined;
    set useCss(v: BooleanValue | undefined);
    /** thicket. Serialized as `:thicket` */
    get thicket(): BooleanValue | undefined;
    set thicket(v: BooleanValue | undefined);
    /** longFileNames. Serialized as `:longFileNames` */
    get longFileNames(): BooleanValue | undefined;
    set longFileNames(v: BooleanValue | undefined);
    /** vml. Serialized as `:vml` */
    get useVml(): BooleanValue | undefined;
    set useVml(v: BooleanValue | undefined);
    /** allowPng. Serialized as `:allowPng` */
    get allowPng(): BooleanValue | undefined;
    set allowPng(v: BooleanValue | undefined);
    /** targetScreenSize. Serialized as `:targetScreenSize` */
    get targetScreenSize(): TargetScreenSizeValues | undefined;
    set targetScreenSize(v: TargetScreenSizeValues | undefined);
    /** dpi. Serialized as `:dpi` */
    get dpi(): UInt32Value | undefined;
    set dpi(v: UInt32Value | undefined);
    /** codePage. Serialized as `:codePage` */
    get codePage(): UInt32Value | undefined;
    set codePage(v: UInt32Value | undefined);
    /** characterSet. Serialized as `:characterSet` */
    get characterSet(): StringValue | undefined;
    set characterSet(v: StringValue | undefined);
}
/** Defines the PivotCaches Class. Serialized as `x:pivotCaches` */
export declare class PivotCaches extends OxmlCompositeElement<PivotCache> {
    static _Q: string;
}
/** Defines the CustomWorkbookViews Class. Serialized as `x:customWorkbookViews` */
export declare class CustomWorkbookViews extends OxmlCompositeElement<CustomWorkbookView> {
    static _Q: string;
}
/** Defines the OleSize Class. Serialized as `x:oleSize` */
export declare class OleSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the CalculationProperties Class. Serialized as `x:calcPr` */
export declare class CalculationProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Calculation Id. Serialized as `:calcId` */
    get calculationId(): UInt32Value | undefined;
    set calculationId(v: UInt32Value | undefined);
    /** Calculation Mode. Serialized as `:calcMode` */
    get calculationMode(): CalculateModeValues | undefined;
    set calculationMode(v: CalculateModeValues | undefined);
    /** Full Calculation On Load. Serialized as `:fullCalcOnLoad` */
    get fullCalculationOnLoad(): BooleanValue | undefined;
    set fullCalculationOnLoad(v: BooleanValue | undefined);
    /** Reference Mode. Serialized as `:refMode` */
    get referenceMode(): ReferenceModeValues | undefined;
    set referenceMode(v: ReferenceModeValues | undefined);
    /** Calculation Iteration. Serialized as `:iterate` */
    get iterate(): BooleanValue | undefined;
    set iterate(v: BooleanValue | undefined);
    /** Iteration Count. Serialized as `:iterateCount` */
    get iterateCount(): UInt32Value | undefined;
    set iterateCount(v: UInt32Value | undefined);
    /** Iterative Calculation Delta. Serialized as `:iterateDelta` */
    get iterateDelta(): DoubleValue | undefined;
    set iterateDelta(v: DoubleValue | undefined);
    /** Full Precision Calculation. Serialized as `:fullPrecision` */
    get fullPrecision(): BooleanValue | undefined;
    set fullPrecision(v: BooleanValue | undefined);
    /** Calc Completed. Serialized as `:calcCompleted` */
    get calculationCompleted(): BooleanValue | undefined;
    set calculationCompleted(v: BooleanValue | undefined);
    /** Calculate On Save. Serialized as `:calcOnSave` */
    get calculationOnSave(): BooleanValue | undefined;
    set calculationOnSave(v: BooleanValue | undefined);
    /** Concurrent Calculations. Serialized as `:concurrentCalc` */
    get concurrentCalculation(): BooleanValue | undefined;
    set concurrentCalculation(v: BooleanValue | undefined);
    /** Concurrent Thread Manual Count. Serialized as `:concurrentManualCount` */
    get concurrentManualCount(): UInt32Value | undefined;
    set concurrentManualCount(v: UInt32Value | undefined);
    /** Force Full Calculation. Serialized as `:forceFullCalc` */
    get forceFullCalculation(): BooleanValue | undefined;
    set forceFullCalculation(v: BooleanValue | undefined);
}
/** Defines the DefinedNames Class. Serialized as `x:definedNames` */
export declare class DefinedNames extends OxmlCompositeElement<DefinedName> {
    static _Q: string;
}
/** Defines the ExternalReferences Class. Serialized as `x:externalReferences` */
export declare class ExternalReferences extends OxmlCompositeElement<ExternalReference> {
    static _Q: string;
}
/** Defines the FunctionGroups Class. Serialized as `x:functionGroups` */
export declare class FunctionGroups extends OxmlCompositeElement<FunctionGroup> {
    static _Q: string;
    static _A: string[];
    /** Built-in Function Group Count. Serialized as `:builtInGroupCount` */
    get builtInGroupCount(): UInt32Value | undefined;
    set builtInGroupCount(v: UInt32Value | undefined);
}
/** Defines the Sheets Class. Serialized as `x:sheets` */
export declare class Sheets extends OxmlCompositeElement<Sheet> {
    static _Q: string;
}
/** Defines the BookViews Class. Serialized as `x:bookViews` */
export declare class BookViews extends OxmlCompositeElement<WorkbookView> {
    static _Q: string;
}
/** Defines the WorkbookProtection Class. Serialized as `x:workbookProtection` */
export declare class WorkbookProtection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Workbook Password. Serialized as `:workbookPassword` */
    get workbookPassword(): HexBinaryValue | undefined;
    set workbookPassword(v: HexBinaryValue | undefined);
    /** Revisions Password. Serialized as `:revisionsPassword` */
    get revisionsPassword(): HexBinaryValue | undefined;
    set revisionsPassword(v: HexBinaryValue | undefined);
    /** Lock Structure. Serialized as `:lockStructure` */
    get lockStructure(): BooleanValue | undefined;
    set lockStructure(v: BooleanValue | undefined);
    /** Lock Windows. Serialized as `:lockWindows` */
    get lockWindows(): BooleanValue | undefined;
    set lockWindows(v: BooleanValue | undefined);
    /** Lock Revisions. Serialized as `:lockRevision` */
    get lockRevision(): BooleanValue | undefined;
    set lockRevision(v: BooleanValue | undefined);
    /** Cryptographic Algorithm Name. Serialized as `:revisionsAlgorithmName` */
    get revisionsAlgorithmName(): StringValue | undefined;
    set revisionsAlgorithmName(v: StringValue | undefined);
    /** Password Hash Value. Serialized as `:revisionsHashValue` */
    get revisionsHashValue(): Base64BinaryValue | undefined;
    set revisionsHashValue(v: Base64BinaryValue | undefined);
    /** Salt Value for Password Verifier. Serialized as `:revisionsSaltValue` */
    get revisionsSaltValue(): Base64BinaryValue | undefined;
    set revisionsSaltValue(v: Base64BinaryValue | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `:revisionsSpinCount` */
    get revisionsSpinCount(): UInt32Value | undefined;
    set revisionsSpinCount(v: UInt32Value | undefined);
    /** Cryptographic Algorithm Name. Serialized as `:workbookAlgorithmName` */
    get workbookAlgorithmName(): StringValue | undefined;
    set workbookAlgorithmName(v: StringValue | undefined);
    /** Password Hash Value. Serialized as `:workbookHashValue` */
    get workbookHashValue(): Base64BinaryValue | undefined;
    set workbookHashValue(v: Base64BinaryValue | undefined);
    /** Salt Value for Password Verifier. Serialized as `:workbookSaltValue` */
    get workbookSaltValue(): Base64BinaryValue | undefined;
    set workbookSaltValue(v: Base64BinaryValue | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `:workbookSpinCount` */
    get workbookSpinCount(): UInt32Value | undefined;
    set workbookSpinCount(v: UInt32Value | undefined);
}
/** Defines the WorkbookProperties Class. Serialized as `x:workbookPr` */
export declare class WorkbookProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Date 1904. Serialized as `:date1904` */
    get date1904(): BooleanValue | undefined;
    set date1904(v: BooleanValue | undefined);
    /** dateCompatibility. Serialized as `:dateCompatibility` */
    get dateCompatibility(): BooleanValue | undefined;
    set dateCompatibility(v: BooleanValue | undefined);
    /** Show Objects. Serialized as `:showObjects` */
    get showObjects(): ObjectDisplayValues | undefined;
    set showObjects(v: ObjectDisplayValues | undefined);
    /** Show Border Unselected Table. Serialized as `:showBorderUnselectedTables` */
    get showBorderUnselectedTables(): BooleanValue | undefined;
    set showBorderUnselectedTables(v: BooleanValue | undefined);
    /** Filter Privacy. Serialized as `:filterPrivacy` */
    get filterPrivacy(): BooleanValue | undefined;
    set filterPrivacy(v: BooleanValue | undefined);
    /** Prompted Solutions. Serialized as `:promptedSolutions` */
    get promptedSolutions(): BooleanValue | undefined;
    set promptedSolutions(v: BooleanValue | undefined);
    /** Show Ink Annotations. Serialized as `:showInkAnnotation` */
    get showInkAnnotation(): BooleanValue | undefined;
    set showInkAnnotation(v: BooleanValue | undefined);
    /** Create Backup File. Serialized as `:backupFile` */
    get backupFile(): BooleanValue | undefined;
    set backupFile(v: BooleanValue | undefined);
    /** Save External Link Values. Serialized as `:saveExternalLinkValues` */
    get saveExternalLinkValues(): BooleanValue | undefined;
    set saveExternalLinkValues(v: BooleanValue | undefined);
    /** Update Links Behavior. Serialized as `:updateLinks` */
    get updateLinks(): UpdateLinksBehaviorValues | undefined;
    set updateLinks(v: UpdateLinksBehaviorValues | undefined);
    /** Code Name. Serialized as `:codeName` */
    get codeName(): StringValue | undefined;
    set codeName(v: StringValue | undefined);
    /** Hide Pivot Field List. Serialized as `:hidePivotFieldList` */
    get hidePivotFieldList(): BooleanValue | undefined;
    set hidePivotFieldList(v: BooleanValue | undefined);
    /** Show Pivot Chart Filter. Serialized as `:showPivotChartFilter` */
    get showPivotChartFilter(): BooleanValue | undefined;
    set showPivotChartFilter(v: BooleanValue | undefined);
    /** Allow Refresh Query. Serialized as `:allowRefreshQuery` */
    get allowRefreshQuery(): BooleanValue | undefined;
    set allowRefreshQuery(v: BooleanValue | undefined);
    /** Publish Items. Serialized as `:publishItems` */
    get publishItems(): BooleanValue | undefined;
    set publishItems(v: BooleanValue | undefined);
    /** Check Compatibility On Save. Serialized as `:checkCompatibility` */
    get checkCompatibility(): BooleanValue | undefined;
    set checkCompatibility(v: BooleanValue | undefined);
    /** Auto Compress Pictures. Serialized as `:autoCompressPictures` */
    get autoCompressPictures(): BooleanValue | undefined;
    set autoCompressPictures(v: BooleanValue | undefined);
    /** Refresh all Connections on Open. Serialized as `:refreshAllConnections` */
    get refreshAllConnections(): BooleanValue | undefined;
    set refreshAllConnections(v: BooleanValue | undefined);
    /** Default Theme Version. Serialized as `:defaultThemeVersion` */
    get defaultThemeVersion(): UInt32Value | undefined;
    set defaultThemeVersion(v: UInt32Value | undefined);
}
/** Defines the FileSharing Class. Serialized as `x:fileSharing` */
export declare class FileSharing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Read Only Recommended. Serialized as `:readOnlyRecommended` */
    get readOnlyRecommended(): BooleanValue | undefined;
    set readOnlyRecommended(v: BooleanValue | undefined);
    /** User Name. Serialized as `:userName` */
    get userName(): StringValue | undefined;
    set userName(v: StringValue | undefined);
    /** Write Reservation Password. Serialized as `:reservationPassword` */
    get reservationPassword(): HexBinaryValue | undefined;
    set reservationPassword(v: HexBinaryValue | undefined);
    /** Password hash algorithm. Serialized as `:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** Password hash. Serialized as `:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** Salt for password hash. Serialized as `:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** Spin count for password hash. Serialized as `:spinCount` */
    get spinCount(): UInt32Value | undefined;
    set spinCount(v: UInt32Value | undefined);
}
/** Defines the FileVersion Class. Serialized as `x:fileVersion` */
export declare class FileVersion extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Application Name. Serialized as `:appName` */
    get applicationName(): StringValue | undefined;
    set applicationName(v: StringValue | undefined);
    /** Last Edited Version. Serialized as `:lastEdited` */
    get lastEdited(): StringValue | undefined;
    set lastEdited(v: StringValue | undefined);
    /** Lowest Edited Version. Serialized as `:lowestEdited` */
    get lowestEdited(): StringValue | undefined;
    set lowestEdited(v: StringValue | undefined);
    /** Build Version. Serialized as `:rupBuild` */
    get buildVersion(): StringValue | undefined;
    set buildVersion(v: StringValue | undefined);
    /** Code Name. Serialized as `:codeName` */
    get codeName(): StringValue | undefined;
    set codeName(v: StringValue | undefined);
}
/** Defines the StylesheetExtension Class. Serialized as `x:ext` */
export declare class StylesheetExtension extends OxmlCompositeElement<X14DifferentialFormats | X14SlicerStyles | X15DifferentialFormats | X15TimelineStyles> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14DifferentialFormats. */
    get x14DifferentialFormats(): X14DifferentialFormats | undefined;
    /** Returns X15DifferentialFormats. */
    get x15DifferentialFormats(): X15DifferentialFormats | undefined;
    /** Returns X14SlicerStyles. */
    get slicerStyles(): X14SlicerStyles | undefined;
    /** Returns X15TimelineStyles. */
    get timelineStyles(): X15TimelineStyles | undefined;
}
/** Defines the StylesheetExtensionList Class. Serialized as `x:extLst` */
export declare class StylesheetExtensionList extends OxmlCompositeElement<StylesheetExtension> {
    static _Q: string;
}
/** Defines the Colors Class. Serialized as `x:colors` */
export declare class Colors extends OxmlCompositeElement<IndexedColors | MruColors> {
    static _Q: string;
    /** Color Indexes. */
    get indexedColors(): IndexedColors | undefined;
    /** MRU Colors. */
    get mruColors(): MruColors | undefined;
}
/** Defines the TableStyles Class. Serialized as `x:tableStyles` */
export declare class TableStyles extends OxmlCompositeElement<TableStyle> {
    static _Q: string;
    static _A: string[];
    /** Table Style Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Default Table Style. Serialized as `:defaultTableStyle` */
    get defaultTableStyle(): StringValue | undefined;
    set defaultTableStyle(v: StringValue | undefined);
    /** Default Pivot Style. Serialized as `:defaultPivotStyle` */
    get defaultPivotStyle(): StringValue | undefined;
    set defaultPivotStyle(v: StringValue | undefined);
}
/** Defines the DifferentialFormats Class. Serialized as `x:dxfs` */
export declare class DifferentialFormats extends OxmlCompositeElement<DifferentialFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CellStyles Class. Serialized as `x:cellStyles` */
export declare class CellStyles extends OxmlCompositeElement<CellStyle> {
    static _Q: string;
    static _A: string[];
    /** Style Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CellFormats Class. Serialized as `x:cellXfs` */
export declare class CellFormats extends OxmlCompositeElement<CellFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CellStyleFormats Class. Serialized as `x:cellStyleXfs` */
export declare class CellStyleFormats extends OxmlCompositeElement<CellFormat> {
    static _Q: string;
    static _A: string[];
    /** Style Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Borders Class. Serialized as `x:borders` */
export declare class Borders extends OxmlCompositeElement<Border> {
    static _Q: string;
    static _A: string[];
    /** Border Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Fills Class. Serialized as `x:fills` */
export declare class Fills extends OxmlCompositeElement<Fill> {
    static _Q: string;
    static _A: string[];
    /** Fill Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Fonts Class. Serialized as `x:fonts` */
export declare class Fonts extends OxmlCompositeElement<Font> {
    static _Q: string;
    static _A: string[];
    /** Font Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** knownFonts. Serialized as `x14ac:knownFonts` */
    get knownFonts(): BooleanValue | undefined;
    set knownFonts(v: BooleanValue | undefined);
}
/** Defines the NumberingFormats Class. Serialized as `x:numFmts` */
export declare class NumberingFormats extends OxmlCompositeElement<NumberingFormat> {
    static _Q: string;
    static _A: string[];
    /** Number Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the WorksheetExtension Class. Serialized as `x:ext` */
export declare class WorksheetExtension extends OxmlCompositeElement<X14ConditionalFormattings | X14DataValidations | X14SparklineGroups | X14SlicerList | X14ProtectedRanges | X14IgnoredErrors | X15WebExtensions | X15TimelineReferences> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14ConditionalFormattings. */
    get conditionalFormattings(): X14ConditionalFormattings | undefined;
    /** Returns X14DataValidations. */
    get dataValidations(): X14DataValidations | undefined;
    /** Returns X14SparklineGroups. */
    get sparklineGroups(): X14SparklineGroups | undefined;
    /** Returns X14SlicerList. */
    get slicerList(): X14SlicerList | undefined;
    /** Returns X14ProtectedRanges. */
    get protectedRanges(): X14ProtectedRanges | undefined;
    /** Returns X14IgnoredErrors. */
    get ignoredErrors(): X14IgnoredErrors | undefined;
    /** Returns X15WebExtensions. */
    get webExtensions(): X15WebExtensions | undefined;
    /** Returns X15TimelineReferences. */
    get timelineReferences(): X15TimelineReferences | undefined;
}
/** Defines the WorksheetExtensionList Class. Serialized as `x:extLst` */
export declare class WorksheetExtensionList extends OxmlCompositeElement<WorksheetExtension> {
    static _Q: string;
}
/** Defines the TableParts Class. Serialized as `x:tableParts` */
export declare class TableParts extends OxmlCompositeElement<TablePart> {
    static _Q: string;
    static _A: string[];
    /** Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the IgnoredErrors Class. Serialized as `x:ignoredErrors` */
export declare class IgnoredErrors extends OxmlCompositeElement<IgnoredError | ExtensionList> {
    static _Q: string;
}
/** Defines the CellWatches Class. Serialized as `x:cellWatches` */
export declare class CellWatches extends OxmlCompositeElement<CellWatch> {
    static _Q: string;
}
/** Defines the Hyperlinks Class. Serialized as `x:hyperlinks` */
export declare class Hyperlinks extends OxmlCompositeElement<Hyperlink> {
    static _Q: string;
}
/** Defines the DataValidations Class. Serialized as `x:dataValidations` */
export declare class DataValidations extends OxmlCompositeElement<DataValidation> {
    static _Q: string;
    static _A: string[];
    /** Disable Prompts. Serialized as `:disablePrompts` */
    get disablePrompts(): BooleanValue | undefined;
    set disablePrompts(v: BooleanValue | undefined);
    /** Top Left Corner (X Coodrinate). Serialized as `:xWindow` */
    get xWindow(): UInt32Value | undefined;
    set xWindow(v: UInt32Value | undefined);
    /** Top Left Corner (Y Coordinate). Serialized as `:yWindow` */
    get yWindow(): UInt32Value | undefined;
    set yWindow(v: UInt32Value | undefined);
    /** Data Validation Item Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the MergeCells Class. Serialized as `x:mergeCells` */
export declare class MergeCells extends OxmlCompositeElement<MergeCell> {
    static _Q: string;
    static _A: string[];
    /** Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Scenarios Class. Serialized as `x:scenarios` */
export declare class Scenarios extends OxmlCompositeElement<Scenario> {
    static _Q: string;
    static _A: string[];
    /** Current Scenario. Serialized as `:current` */
    get current(): UInt32Value | undefined;
    set current(v: UInt32Value | undefined);
    /** Last Shown Scenario. Serialized as `:show` */
    get show(): UInt32Value | undefined;
    set show(v: UInt32Value | undefined);
    /** Sequence of References. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
}
/** Defines the ProtectedRanges Class. Serialized as `x:protectedRanges` */
export declare class ProtectedRanges extends OxmlCompositeElement<ProtectedRange> {
    static _Q: string;
}
/** Defines the SheetCalculationProperties Class. Serialized as `x:sheetCalcPr` */
export declare class SheetCalculationProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Full Calculation On Load. Serialized as `:fullCalcOnLoad` */
    get fullCalculationOnLoad(): BooleanValue | undefined;
    set fullCalculationOnLoad(v: BooleanValue | undefined);
}
/** Defines the QueryTableExtensionList Class. Serialized as `x:extLst` */
export declare class QueryTableExtensionList extends OxmlCompositeElement<QueryTableExtension> {
    static _Q: string;
}
/** Defines the QueryTableRefresh Class. Serialized as `x:queryTableRefresh` */
export declare class QueryTableRefresh extends OxmlCompositeElement<QueryTableFields | QueryTableDeletedFields | SortState | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Preserve Sort and Filter Layout. Serialized as `:preserveSortFilterLayout` */
    get preserveSortFilterLayout(): BooleanValue | undefined;
    set preserveSortFilterLayout(v: BooleanValue | undefined);
    /** Next Field Id Wrapped. Serialized as `:fieldIdWrapped` */
    get fieldIdWrapped(): BooleanValue | undefined;
    set fieldIdWrapped(v: BooleanValue | undefined);
    /** Headers In Last Refresh. Serialized as `:headersInLastRefresh` */
    get headersInLastRefresh(): BooleanValue | undefined;
    set headersInLastRefresh(v: BooleanValue | undefined);
    /** Minimum Refresh Version. Serialized as `:minimumVersion` */
    get minimumVersion(): ByteValue | undefined;
    set minimumVersion(v: ByteValue | undefined);
    /** Next field id. Serialized as `:nextId` */
    get nextId(): UInt32Value | undefined;
    set nextId(v: UInt32Value | undefined);
    /** Columns Left. Serialized as `:unboundColumnsLeft` */
    get unboundColumnsLeft(): UInt32Value | undefined;
    set unboundColumnsLeft(v: UInt32Value | undefined);
    /** Columns Right. Serialized as `:unboundColumnsRight` */
    get unboundColumnsRight(): UInt32Value | undefined;
    set unboundColumnsRight(v: UInt32Value | undefined);
    /** Query table fields. */
    get queryTableFields(): QueryTableFields | undefined;
    /** Deleted Fields. */
    get queryTableDeletedFields(): QueryTableDeletedFields | undefined;
    /** Sort State. */
    get sortState(): SortState | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the PivotFilterExtensionList Class. Serialized as `x:extLst` */
export declare class PivotFilterExtensionList extends OxmlCompositeElement<PivotFilterExtension> {
    static _Q: string;
}
/** Defines the DataFieldExtension Class. Serialized as `x:ext` */
export declare class DataFieldExtension extends OxmlCompositeElement<X14DataField | X15DataField> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14DataField. */
    get x14DataField(): X14DataField | undefined;
    /** Returns X15DataField. */
    get x15DataField(): X15DataField | undefined;
}
/** Defines the DataFieldExtensionList Class. Serialized as `x:extLst` */
export declare class DataFieldExtensionList extends OxmlCompositeElement<DataFieldExtension> {
    static _Q: string;
}
/** Defines the CalculatedMemberExtension Class. Serialized as `x:ext` */
export declare class CalculatedMemberExtension extends OxmlCompositeElement<X14CalculatedMember | X15CalculatedMember> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14CalculatedMember. */
    get x14CalculatedMember(): X14CalculatedMember | undefined;
    /** Returns X15CalculatedMember. */
    get x15CalculatedMember(): X15CalculatedMember | undefined;
}
/** Defines the CalculatedMemberExtensionList Class. Serialized as `x:extLst` */
export declare class CalculatedMemberExtensionList extends OxmlCompositeElement<CalculatedMemberExtension> {
    static _Q: string;
}
/** Defines the CacheHierarchyExtension Class. Serialized as `x:ext` */
export declare class CacheHierarchyExtension extends OxmlCompositeElement<X14CacheHierarchy | X15CacheHierarchy> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14CacheHierarchy. */
    get x14CacheHierarchy(): X14CacheHierarchy | undefined;
    /** Returns X15CacheHierarchy. */
    get x15CacheHierarchy(): X15CacheHierarchy | undefined;
}
/** Defines the CacheHierarchyExtensionList Class. Serialized as `x:extLst` */
export declare class CacheHierarchyExtensionList extends OxmlCompositeElement<CacheHierarchyExtension> {
    static _Q: string;
}
/** Defines the GroupLevels Class. Serialized as `x:groupLevels` */
export declare class GroupLevels extends OxmlCompositeElement<GroupLevel> {
    static _Q: string;
    static _A: string[];
    /** Grouping Level Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the FieldsUsage Class. Serialized as `x:fieldsUsage` */
export declare class FieldsUsage extends OxmlCompositeElement<FieldUsage> {
    static _Q: string;
    static _A: string[];
    /** Field Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CacheFieldExtension Class. Serialized as `x:ext` */
export declare class CacheFieldExtension extends OxmlCompositeElement<X14CacheField | X15CachedUniqueNames> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14CacheField. */
    get cacheField(): X14CacheField | undefined;
    /** Returns X15CachedUniqueNames. */
    get cachedUniqueNames(): X15CachedUniqueNames | undefined;
}
/** Defines the CacheFieldExtensionList Class. Serialized as `x:extLst` */
export declare class CacheFieldExtensionList extends OxmlCompositeElement<CacheFieldExtension> {
    static _Q: string;
}
/** Defines the FieldGroup Class. Serialized as `x:fieldGroup` */
export declare class FieldGroup extends OxmlCompositeElement<RangeProperties | DiscreteProperties | GroupItems> {
    static _Q: string;
    static _A: string[];
    /** Parent. Serialized as `:par` */
    get parentId(): UInt32Value | undefined;
    set parentId(v: UInt32Value | undefined);
    /** Field Base. Serialized as `:base` */
    get base(): UInt32Value | undefined;
    set base(v: UInt32Value | undefined);
}
/** Defines the SharedItems Class. Serialized as `x:sharedItems` */
export declare class SharedItems extends OxmlCompositeElement<MissingItem | NumberItem | BooleanItem | ErrorItem | StringItem | DateTimeItem> {
    static _Q: string;
    static _A: string[];
    /** Contains Semi Mixed Data Types. Serialized as `:containsSemiMixedTypes` */
    get containsSemiMixedTypes(): BooleanValue | undefined;
    set containsSemiMixedTypes(v: BooleanValue | undefined);
    /** Contains Non Date. Serialized as `:containsNonDate` */
    get containsNonDate(): BooleanValue | undefined;
    set containsNonDate(v: BooleanValue | undefined);
    /** Contains Date. Serialized as `:containsDate` */
    get containsDate(): BooleanValue | undefined;
    set containsDate(v: BooleanValue | undefined);
    /** Contains String. Serialized as `:containsString` */
    get containsString(): BooleanValue | undefined;
    set containsString(v: BooleanValue | undefined);
    /** Contains Blank. Serialized as `:containsBlank` */
    get containsBlank(): BooleanValue | undefined;
    set containsBlank(v: BooleanValue | undefined);
    /** Contains Mixed Data Types. Serialized as `:containsMixedTypes` */
    get containsMixedTypes(): BooleanValue | undefined;
    set containsMixedTypes(v: BooleanValue | undefined);
    /** Contains Numbers. Serialized as `:containsNumber` */
    get containsNumber(): BooleanValue | undefined;
    set containsNumber(v: BooleanValue | undefined);
    /** Contains Integer. Serialized as `:containsInteger` */
    get containsInteger(): BooleanValue | undefined;
    set containsInteger(v: BooleanValue | undefined);
    /** Minimum Numeric Value. Serialized as `:minValue` */
    get minValue(): DoubleValue | undefined;
    set minValue(v: DoubleValue | undefined);
    /** Maximum Numeric Value. Serialized as `:maxValue` */
    get maxValue(): DoubleValue | undefined;
    set maxValue(v: DoubleValue | undefined);
    /** Minimum Date Time. Serialized as `:minDate` */
    get minDate(): DateTimeValue | undefined;
    set minDate(v: DateTimeValue | undefined);
    /** Maximum Date Time Value. Serialized as `:maxDate` */
    get maxDate(): DateTimeValue | undefined;
    set maxDate(v: DateTimeValue | undefined);
    /** Shared Items Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Long Text. Serialized as `:longText` */
    get longText(): BooleanValue | undefined;
    set longText(v: BooleanValue | undefined);
}
/** Defines the TextFields Class. Serialized as `x:textFields` */
export declare class TextFields extends OxmlCompositeElement<TextField> {
    static _Q: string;
    static _A: string[];
    /** Count of Fields. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ConnectionExtension Class. Serialized as `x:ext` */
export declare class ConnectionExtension extends OxmlCompositeElement<X14Connection | X15Connection> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14Connection. */
    get x14Connection(): X14Connection | undefined;
    /** Returns X15Connection. */
    get x15Connection(): X15Connection | undefined;
}
/** Defines the ConnectionExtensionList Class. Serialized as `x:extLst` */
export declare class ConnectionExtensionList extends OxmlCompositeElement<ConnectionExtension> {
    static _Q: string;
}
/** Defines the Parameters Class. Serialized as `x:parameters` */
export declare class Parameters extends OxmlCompositeElement<Parameter> {
    static _Q: string;
    static _A: string[];
    /** Parameter Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the TextProperties Class. Serialized as `x:textPr` */
export declare class TextProperties extends OxmlCompositeElement<TextFields> {
    static _Q: string;
    static _A: string[];
    /** prompt. Serialized as `:prompt` */
    get prompt(): BooleanValue | undefined;
    set prompt(v: BooleanValue | undefined);
    /** fileType. Serialized as `:fileType` */
    get fileType(): FileTypeValues | undefined;
    set fileType(v: FileTypeValues | undefined);
    /** codePage. Serialized as `:codePage` */
    get codePage(): UInt32Value | undefined;
    set codePage(v: UInt32Value | undefined);
    /** characterSet. Serialized as `:characterSet` */
    get textCharacterSet(): StringValue | undefined;
    set textCharacterSet(v: StringValue | undefined);
    /** firstRow. Serialized as `:firstRow` */
    get firstRow(): UInt32Value | undefined;
    set firstRow(v: UInt32Value | undefined);
    /** sourceFile. Serialized as `:sourceFile` */
    get sourceFile(): StringValue | undefined;
    set sourceFile(v: StringValue | undefined);
    /** delimited. Serialized as `:delimited` */
    get delimited(): BooleanValue | undefined;
    set delimited(v: BooleanValue | undefined);
    /** decimal. Serialized as `:decimal` */
    get decimal(): StringValue | undefined;
    set decimal(v: StringValue | undefined);
    /** thousands. Serialized as `:thousands` */
    get thousands(): StringValue | undefined;
    set thousands(v: StringValue | undefined);
    /** tab. Serialized as `:tab` */
    get tabAsDelimiter(): BooleanValue | undefined;
    set tabAsDelimiter(v: BooleanValue | undefined);
    /** space. Serialized as `:space` */
    get space(): BooleanValue | undefined;
    set space(v: BooleanValue | undefined);
    /** comma. Serialized as `:comma` */
    get comma(): BooleanValue | undefined;
    set comma(v: BooleanValue | undefined);
    /** semicolon. Serialized as `:semicolon` */
    get semicolon(): BooleanValue | undefined;
    set semicolon(v: BooleanValue | undefined);
    /** consecutive. Serialized as `:consecutive` */
    get consecutive(): BooleanValue | undefined;
    set consecutive(v: BooleanValue | undefined);
    /** qualifier. Serialized as `:qualifier` */
    get qualifier(): QualifierValues | undefined;
    set qualifier(v: QualifierValues | undefined);
    /** delimiter. Serialized as `:delimiter` */
    get delimiter(): StringValue | undefined;
    set delimiter(v: StringValue | undefined);
    /** Returns TextFields. */
    get textFields(): TextFields | undefined;
}
/** Defines the WebQueryProperties Class. Serialized as `x:webPr` */
export declare class WebQueryProperties extends OxmlCompositeElement<Tables> {
    static _Q: string;
    static _A: string[];
    /** XML Source. Serialized as `:xml` */
    get xmlSource(): BooleanValue | undefined;
    set xmlSource(v: BooleanValue | undefined);
    /** Import XML Source Data. Serialized as `:sourceData` */
    get sourceData(): BooleanValue | undefined;
    set sourceData(v: BooleanValue | undefined);
    /** Parse PRE. Serialized as `:parsePre` */
    get parsePreTag(): BooleanValue | undefined;
    set parsePreTag(v: BooleanValue | undefined);
    /** Consecutive Delimiters. Serialized as `:consecutive` */
    get consecutive(): BooleanValue | undefined;
    set consecutive(v: BooleanValue | undefined);
    /** Use First Row. Serialized as `:firstRow` */
    get firstRow(): BooleanValue | undefined;
    set firstRow(v: BooleanValue | undefined);
    /** Created in Excel 97. Serialized as `:xl97` */
    get createdInExcel97(): BooleanValue | undefined;
    set createdInExcel97(v: BooleanValue | undefined);
    /** Dates as Text. Serialized as `:textDates` */
    get textDates(): BooleanValue | undefined;
    set textDates(v: BooleanValue | undefined);
    /** Refreshed in Excel 2000. Serialized as `:xl2000` */
    get refreshedInExcel2000(): BooleanValue | undefined;
    set refreshedInExcel2000(v: BooleanValue | undefined);
    /** URL. Serialized as `:url` */
    get url(): StringValue | undefined;
    set url(v: StringValue | undefined);
    /** Web Post. Serialized as `:post` */
    get post(): StringValue | undefined;
    set post(v: StringValue | undefined);
    /** HTML Tables Only. Serialized as `:htmlTables` */
    get htmlTables(): BooleanValue | undefined;
    set htmlTables(v: BooleanValue | undefined);
    /** HTML Formatting Handling. Serialized as `:htmlFormat` */
    get htmlFormat(): HtmlFormattingValues | undefined;
    set htmlFormat(v: HtmlFormattingValues | undefined);
    /** Edit Query URL. Serialized as `:editPage` */
    get editPage(): StringValue | undefined;
    set editPage(v: StringValue | undefined);
    /** Tables. */
    get tables(): Tables | undefined;
}
/** Defines the OlapProperties Class. Serialized as `x:olapPr` */
export declare class OlapProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Local Cube. Serialized as `:local` */
    get local(): BooleanValue | undefined;
    set local(v: BooleanValue | undefined);
    /** Local Cube Connection. Serialized as `:localConnection` */
    get localConnection(): StringValue | undefined;
    set localConnection(v: StringValue | undefined);
    /** Local Refresh. Serialized as `:localRefresh` */
    get localRefresh(): BooleanValue | undefined;
    set localRefresh(v: BooleanValue | undefined);
    /** Send Locale to OLAP. Serialized as `:sendLocale` */
    get sendLocale(): BooleanValue | undefined;
    set sendLocale(v: BooleanValue | undefined);
    /** Drill Through Count. Serialized as `:rowDrillCount` */
    get rowDrillCount(): UInt32Value | undefined;
    set rowDrillCount(v: UInt32Value | undefined);
    /** OLAP Fill Formatting. Serialized as `:serverFill` */
    get serverFill(): BooleanValue | undefined;
    set serverFill(v: BooleanValue | undefined);
    /** OLAP Number Format. Serialized as `:serverNumberFormat` */
    get serverNumberFormat(): BooleanValue | undefined;
    set serverNumberFormat(v: BooleanValue | undefined);
    /** OLAP Server Font. Serialized as `:serverFont` */
    get serverFont(): BooleanValue | undefined;
    set serverFont(v: BooleanValue | undefined);
    /** OLAP Font Formatting. Serialized as `:serverFontColor` */
    get serverFontColor(): BooleanValue | undefined;
    set serverFontColor(v: BooleanValue | undefined);
}
/** Defines the DatabaseProperties Class. Serialized as `x:dbPr` */
export declare class DatabaseProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Connection String. Serialized as `:connection` */
    get connection(): StringValue | undefined;
    set connection(v: StringValue | undefined);
    /** Command Text. Serialized as `:command` */
    get command(): StringValue | undefined;
    set command(v: StringValue | undefined);
    /** Command Text. Serialized as `:serverCommand` */
    get serverCommand(): StringValue | undefined;
    set serverCommand(v: StringValue | undefined);
    /** OLE DB Command Type. Serialized as `:commandType` */
    get commandType(): UInt32Value | undefined;
    set commandType(v: UInt32Value | undefined);
}
/** Defines the QueryTableExtension Class. Serialized as `x:ext` */
export declare class QueryTableExtension extends OxmlCompositeElement<X15QueryTable> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X15QueryTable. */
    get queryTable(): X15QueryTable | undefined;
}
/** Defines the PivotFilterExtension Class. Serialized as `x:ext` */
export declare class PivotFilterExtension extends OxmlCompositeElement<X15PivotFilter | X15MovingPeriodState> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X15PivotFilter. */
    get pivotFilter(): X15PivotFilter | undefined;
    /** Returns X15MovingPeriodState. */
    get movingPeriodState(): X15MovingPeriodState | undefined;
}
/** Defines the SlicerCacheDefinitionExtension Class. Serialized as `x:ext` */
export declare class SlicerCacheDefinitionExtension extends OxmlCompositeElement<X15SlicerCachePivotTables | X15TableSlicerCache | X15SlicerCacheHideItemsWithNoData> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X15SlicerCachePivotTables. */
    get slicerCachePivotTables(): X15SlicerCachePivotTables | undefined;
    /** Returns X15TableSlicerCache. */
    get tableSlicerCache(): X15TableSlicerCache | undefined;
    /** Returns X15SlicerCacheHideItemsWithNoData. */
    get slicerCacheHideItemsWithNoData(): X15SlicerCacheHideItemsWithNoData | undefined;
}
/** Icon Filter. Serialized as `x:iconFilter` */
export declare class IconFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Icon Set. Serialized as `:iconSet` */
    get iconSet(): IconSetValues | undefined;
    set iconSet(v: IconSetValues | undefined);
    /** Icon Id. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Color Filter Criteria. Serialized as `x:colorFilter` */
export declare class ColorFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Differential Format Record Id. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** Filter By Cell Color. Serialized as `:cellColor` */
    get cellColor(): BooleanValue | undefined;
    set cellColor(v: BooleanValue | undefined);
}
/** Dynamic Filter. Serialized as `x:dynamicFilter` */
export declare class DynamicFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Dynamic filter type. Serialized as `:type` */
    get type(): DynamicFilterValues | undefined;
    set type(v: DynamicFilterValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Max Value. Serialized as `:maxVal` */
    get maxVal(): DoubleValue | undefined;
    set maxVal(v: DoubleValue | undefined);
    /** valIso. Serialized as `:valIso` */
    get valIso(): DateTimeValue | undefined;
    set valIso(v: DateTimeValue | undefined);
    /** maxValIso. Serialized as `:maxValIso` */
    get maxValIso(): DateTimeValue | undefined;
    set maxValIso(v: DateTimeValue | undefined);
}
/** Custom Filters. Serialized as `x:customFilters` */
export declare class CustomFilters extends OxmlCompositeElement<CustomFilter> {
    static _Q: string;
    static _A: string[];
    /** And. Serialized as `:and` */
    get and(): BooleanValue | undefined;
    set and(v: BooleanValue | undefined);
}
/** Top 10. Serialized as `x:top10` */
export declare class Top10 extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Top. Serialized as `:top` */
    get top(): BooleanValue | undefined;
    set top(v: BooleanValue | undefined);
    /** Filter by Percent. Serialized as `:percent` */
    get percent(): BooleanValue | undefined;
    set percent(v: BooleanValue | undefined);
    /** Top or Bottom Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Filter Value. Serialized as `:filterVal` */
    get filterValue(): DoubleValue | undefined;
    set filterValue(v: DoubleValue | undefined);
}
/** Filter Criteria. Serialized as `x:filters` */
export declare class Filters extends OxmlCompositeElement<X14Filter | Filter | DateGroupItem> {
    static _Q: string;
    static _A: string[];
    /** Filter by Blank. Serialized as `:blank` */
    get blank(): BooleanValue | undefined;
    set blank(v: BooleanValue | undefined);
    /** Calendar Type. Serialized as `:calendarType` */
    get calendarType(): CalendarValues | undefined;
    set calendarType(v: CalendarValues | undefined);
}
/** Date Grouping. Serialized as `x:dateGroupItem` */
export declare class DateGroupItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Year. Serialized as `:year` */
    get year(): UInt16Value | undefined;
    set year(v: UInt16Value | undefined);
    /** Month. Serialized as `:month` */
    get month(): UInt16Value | undefined;
    set month(v: UInt16Value | undefined);
    /** Day. Serialized as `:day` */
    get day(): UInt16Value | undefined;
    set day(v: UInt16Value | undefined);
    /** Hour. Serialized as `:hour` */
    get hour(): UInt16Value | undefined;
    set hour(v: UInt16Value | undefined);
    /** Minute. Serialized as `:minute` */
    get minute(): UInt16Value | undefined;
    set minute(v: UInt16Value | undefined);
    /** Second. Serialized as `:second` */
    get second(): UInt16Value | undefined;
    set second(v: UInt16Value | undefined);
    /** Date Time Grouping. Serialized as `:dateTimeGrouping` */
    get dateTimeGrouping(): DateTimeGroupingValues | undefined;
    set dateTimeGrouping(v: DateTimeGroupingValues | undefined);
}
/** Filter. Serialized as `x:filter` */
export declare class Filter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Filter Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the SortCondition Class. Serialized as `x:sortCondition` */
export declare class SortCondition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Descending. Serialized as `:descending` */
    get descending(): BooleanValue | undefined;
    set descending(v: BooleanValue | undefined);
    /** Sort By. Serialized as `:sortBy` */
    get sortBy(): SortByValues | undefined;
    set sortBy(v: SortByValues | undefined);
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Custom List. Serialized as `:customList` */
    get customList(): StringValue | undefined;
    set customList(v: StringValue | undefined);
    /** Format Id. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** Icon Set. Serialized as `:iconSet` */
    get iconSet(): IconSetValues | undefined;
    set iconSet(v: IconSetValues | undefined);
    /** Icon Id. Serialized as `:iconId` */
    get iconId(): UInt32Value | undefined;
    set iconId(v: UInt32Value | undefined);
}
/** Defines the CommentProperties Class. Serialized as `x:commentPr` */
export declare class CommentProperties extends OxmlCompositeElement<ObjectAnchor> {
    static _Q: string;
    static _A: string[];
    /** locked. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** defaultSize. Serialized as `:defaultSize` */
    get defaultSize(): BooleanValue | undefined;
    set defaultSize(v: BooleanValue | undefined);
    /** print. Serialized as `:print` */
    get print(): BooleanValue | undefined;
    set print(v: BooleanValue | undefined);
    /** disabled. Serialized as `:disabled` */
    get disabled(): BooleanValue | undefined;
    set disabled(v: BooleanValue | undefined);
    /** uiObject. Serialized as `:uiObject` */
    get uiObject(): BooleanValue | undefined;
    set uiObject(v: BooleanValue | undefined);
    /** autoFill. Serialized as `:autoFill` */
    get autoFill(): BooleanValue | undefined;
    set autoFill(v: BooleanValue | undefined);
    /** autoLine. Serialized as `:autoLine` */
    get autoLine(): BooleanValue | undefined;
    set autoLine(v: BooleanValue | undefined);
    /** altText. Serialized as `:altText` */
    get altText(): StringValue | undefined;
    set altText(v: StringValue | undefined);
    /** textHAlign. Serialized as `:textHAlign` */
    get textHAlign(): TextHorizontalAlignmentValues | undefined;
    set textHAlign(v: TextHorizontalAlignmentValues | undefined);
    /** textVAlign. Serialized as `:textVAlign` */
    get textVAlign(): TextVerticalAlignmentValues | undefined;
    set textVAlign(v: TextVerticalAlignmentValues | undefined);
    /** lockText. Serialized as `:lockText` */
    get lockText(): BooleanValue | undefined;
    set lockText(v: BooleanValue | undefined);
    /** justLastX. Serialized as `:justLastX` */
    get justLastX(): BooleanValue | undefined;
    set justLastX(v: BooleanValue | undefined);
    /** autoScale. Serialized as `:autoScale` */
    get autoScale(): BooleanValue | undefined;
    set autoScale(v: BooleanValue | undefined);
    /** rowHidden. Serialized as `:rowHidden` */
    get rowHidden(): BooleanValue | undefined;
    set rowHidden(v: BooleanValue | undefined);
    /** colHidden. Serialized as `:colHidden` */
    get colHidden(): BooleanValue | undefined;
    set colHidden(v: BooleanValue | undefined);
    /** Returns ObjectAnchor. */
    get objectAnchor(): ObjectAnchor | undefined;
}
/** Defines the CacheSourceExtensionList Class. Serialized as `x:extLst` */
export declare class CacheSourceExtensionList extends OxmlCompositeElement<CacheSourceExtension> {
    static _Q: string;
}
/** Defines the Consolidation Class. Serialized as `x:consolidation` */
export declare class Consolidation extends OxmlCompositeElement<Pages | RangeSets> {
    static _Q: string;
    static _A: string[];
    /** Auto Page. Serialized as `:autoPage` */
    get autoPage(): BooleanValue | undefined;
    set autoPage(v: BooleanValue | undefined);
    /** Page Item Values. */
    get pages(): Pages | undefined;
    /** Range Sets. */
    get rangeSets(): RangeSets | undefined;
}
/** Defines the WorksheetSource Class. Serialized as `x:worksheetSource` */
export declare class WorksheetSource extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Named Range. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Sheet Name. Serialized as `:sheet` */
    get sheet(): StringValue | undefined;
    set sheet(v: StringValue | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Future Feature Data Storage Area. Serialized as `x:extLst` */
export declare class PivotFieldExtensionList extends OxmlCompositeElement<PivotFieldExtension> {
    static _Q: string;
}
/** AutoSort Scope. Serialized as `x:autoSortScope` */
export declare class AutoSortScope extends OxmlCompositeElement<PivotArea> {
    static _Q: string;
    /** Auto Sort Scope. */
    get pivotArea(): PivotArea | undefined;
}
/** Field Items. Serialized as `x:items` */
export declare class Items extends OxmlCompositeElement<Item> {
    static _Q: string;
    static _A: string[];
    /** Field Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Future Feature Data Storage Area. Serialized as `x:extLst` */
export declare class PivotHierarchyExtensionList extends OxmlCompositeElement<PivotHierarchyExtension> {
    static _Q: string;
}
/** Members. Serialized as `x:members` */
export declare class Members extends OxmlCompositeElement<Member> {
    static _Q: string;
    static _A: string[];
    /** Item Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Hierarchy Level. Serialized as `:level` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
}
/** OLAP Member Properties. Serialized as `x:mps` */
export declare class MemberProperties extends OxmlCompositeElement<MemberProperty> {
    static _Q: string;
    static _A: string[];
    /** OLAP Member Properties Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Custom Properties. Serialized as `x:customProperties` */
export declare class CustomProperties extends OxmlCompositeElement<CustomProperty> {
    static _Q: string;
}
/** Conditional Formatting. Serialized as `x:conditionalFormatting` */
export declare class ConditionalFormatting extends OxmlCompositeElement<ConditionalFormattingRule | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** PivotTable Conditional Formatting. Serialized as `:pivot` */
    get pivot(): BooleanValue | undefined;
    set pivot(v: BooleanValue | undefined);
    /** Sequence of References. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
}
/** Data Consolidation. Serialized as `x:dataConsolidate` */
export declare class DataConsolidate extends OxmlCompositeElement<DataReferences> {
    static _Q: string;
    static _A: string[];
    /** Function Index. Serialized as `:function` */
    get function(): DataConsolidateFunctionValues | undefined;
    set function(v: DataConsolidateFunctionValues | undefined);
    /** Use Left Column Labels. Serialized as `:leftLabels` */
    get leftLabels(): BooleanValue | undefined;
    set leftLabels(v: BooleanValue | undefined);
    /** startLabels. Serialized as `:startLabels` */
    get startLabels(): BooleanValue | undefined;
    set startLabels(v: BooleanValue | undefined);
    /** Labels In Top Row. Serialized as `:topLabels` */
    get topLabels(): BooleanValue | undefined;
    set topLabels(v: BooleanValue | undefined);
    /** Link. Serialized as `:link` */
    get link(): BooleanValue | undefined;
    set link(v: BooleanValue | undefined);
    /** Data Consolidation References. */
    get dataReferences(): DataReferences | undefined;
}
/** Sheet Data. Serialized as `x:sheetData` */
export declare class SheetData extends OxmlCompositeElement<Row> {
    static _Q: string;
}
/** Column Information. Serialized as `x:cols` */
export declare class Columns extends OxmlCompositeElement<Column> {
    static _Q: string;
}
/** Macro Sheet Dimensions. Serialized as `x:dimension` */
export declare class SheetDimension extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the Controls Class. Serialized as `x:controls` */
export declare class Controls extends OxmlCompositeElement<Control> {
    static _Q: string;
}
/** Defines the OleObjects Class. Serialized as `x:oleObjects` */
export declare class OleObjects extends OxmlCompositeElement<OleObject> {
    static _Q: string;
}
/** Custom Sheet Views. Serialized as `x:customSheetViews` */
export declare class CustomSheetViews extends OxmlCompositeElement<CustomSheetView> {
    static _Q: string;
}
/** Sheet Protection. Serialized as `x:sheetProtection` */
export declare class SheetProtection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Password. Serialized as `:password` */
    get password(): HexBinaryValue | undefined;
    set password(v: HexBinaryValue | undefined);
    /** Cryptographic Algorithm Name. Serialized as `:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** Password Hash Value. Serialized as `:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** Salt Value for Password Verifier. Serialized as `:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
    get spinCount(): UInt32Value | undefined;
    set spinCount(v: UInt32Value | undefined);
    /** Sheet Locked. Serialized as `:sheet` */
    get sheet(): BooleanValue | undefined;
    set sheet(v: BooleanValue | undefined);
    /** Objects Locked. Serialized as `:objects` */
    get objects(): BooleanValue | undefined;
    set objects(v: BooleanValue | undefined);
    /** Scenarios Locked. Serialized as `:scenarios` */
    get scenarios(): BooleanValue | undefined;
    set scenarios(v: BooleanValue | undefined);
    /** Format Cells Locked. Serialized as `:formatCells` */
    get formatCells(): BooleanValue | undefined;
    set formatCells(v: BooleanValue | undefined);
    /** Format Columns Locked. Serialized as `:formatColumns` */
    get formatColumns(): BooleanValue | undefined;
    set formatColumns(v: BooleanValue | undefined);
    /** Format Rows Locked. Serialized as `:formatRows` */
    get formatRows(): BooleanValue | undefined;
    set formatRows(v: BooleanValue | undefined);
    /** Insert Columns Locked. Serialized as `:insertColumns` */
    get insertColumns(): BooleanValue | undefined;
    set insertColumns(v: BooleanValue | undefined);
    /** Insert Rows Locked. Serialized as `:insertRows` */
    get insertRows(): BooleanValue | undefined;
    set insertRows(v: BooleanValue | undefined);
    /** Insert Hyperlinks Locked. Serialized as `:insertHyperlinks` */
    get insertHyperlinks(): BooleanValue | undefined;
    set insertHyperlinks(v: BooleanValue | undefined);
    /** Delete Columns Locked. Serialized as `:deleteColumns` */
    get deleteColumns(): BooleanValue | undefined;
    set deleteColumns(v: BooleanValue | undefined);
    /** Delete Rows Locked. Serialized as `:deleteRows` */
    get deleteRows(): BooleanValue | undefined;
    set deleteRows(v: BooleanValue | undefined);
    /** Select Locked Cells Locked. Serialized as `:selectLockedCells` */
    get selectLockedCells(): BooleanValue | undefined;
    set selectLockedCells(v: BooleanValue | undefined);
    /** Sort Locked. Serialized as `:sort` */
    get sort(): BooleanValue | undefined;
    set sort(v: BooleanValue | undefined);
    /** AutoFilter Locked. Serialized as `:autoFilter` */
    get autoFilter(): BooleanValue | undefined;
    set autoFilter(v: BooleanValue | undefined);
    /** Pivot Tables Locked. Serialized as `:pivotTables` */
    get pivotTables(): BooleanValue | undefined;
    set pivotTables(v: BooleanValue | undefined);
    /** Select Unlocked Cells Locked. Serialized as `:selectUnlockedCells` */
    get selectUnlockedCells(): BooleanValue | undefined;
    set selectUnlockedCells(v: BooleanValue | undefined);
}
/** Dialog Sheet Format Properties. Serialized as `x:sheetFormatPr` */
export declare class SheetFormatProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Base Column Width. Serialized as `:baseColWidth` */
    get baseColumnWidth(): UInt32Value | undefined;
    set baseColumnWidth(v: UInt32Value | undefined);
    /** Default Column Width. Serialized as `:defaultColWidth` */
    get defaultColumnWidth(): DoubleValue | undefined;
    set defaultColumnWidth(v: DoubleValue | undefined);
    /** Default Row Height. Serialized as `:defaultRowHeight` */
    get defaultRowHeight(): DoubleValue | undefined;
    set defaultRowHeight(v: DoubleValue | undefined);
    /** Custom Height. Serialized as `:customHeight` */
    get customHeight(): BooleanValue | undefined;
    set customHeight(v: BooleanValue | undefined);
    /** Hidden By Default. Serialized as `:zeroHeight` */
    get zeroHeight(): BooleanValue | undefined;
    set zeroHeight(v: BooleanValue | undefined);
    /** Thick Top Border. Serialized as `:thickTop` */
    get thickTop(): BooleanValue | undefined;
    set thickTop(v: BooleanValue | undefined);
    /** Thick Bottom Border. Serialized as `:thickBottom` */
    get thickBottom(): BooleanValue | undefined;
    set thickBottom(v: BooleanValue | undefined);
    /** Maximum Outline Row. Serialized as `:outlineLevelRow` */
    get outlineLevelRow(): ByteValue | undefined;
    set outlineLevelRow(v: ByteValue | undefined);
    /** Column Outline Level. Serialized as `:outlineLevelCol` */
    get outlineLevelColumn(): ByteValue | undefined;
    set outlineLevelColumn(v: ByteValue | undefined);
    /** dyDescent. Serialized as `x14ac:dyDescent` */
    get dyDescent(): DoubleValue | undefined;
    set dyDescent(v: DoubleValue | undefined);
}
/** Dialog Sheet Views. Serialized as `x:sheetViews` */
export declare class SheetViews extends OxmlCompositeElement<SheetView | ExtensionList> {
    static _Q: string;
}
/** Sheet Properties. Serialized as `x:sheetPr` */
export declare class SheetProperties extends OxmlCompositeElement<TabColor | OutlineProperties | PageSetupProperties> {
    static _Q: string;
    static _A: string[];
    /** Synch Horizontal. Serialized as `:syncHorizontal` */
    get syncHorizontal(): BooleanValue | undefined;
    set syncHorizontal(v: BooleanValue | undefined);
    /** Synch Vertical. Serialized as `:syncVertical` */
    get syncVertical(): BooleanValue | undefined;
    set syncVertical(v: BooleanValue | undefined);
    /** Synch Reference. Serialized as `:syncRef` */
    get syncReference(): StringValue | undefined;
    set syncReference(v: StringValue | undefined);
    /** Transition Formula Evaluation. Serialized as `:transitionEvaluation` */
    get transitionEvaluation(): BooleanValue | undefined;
    set transitionEvaluation(v: BooleanValue | undefined);
    /** Transition Formula Entry. Serialized as `:transitionEntry` */
    get transitionEntry(): BooleanValue | undefined;
    set transitionEntry(v: BooleanValue | undefined);
    /** Published. Serialized as `:published` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Code Name. Serialized as `:codeName` */
    get codeName(): StringValue | undefined;
    set codeName(v: StringValue | undefined);
    /** Filter Mode. Serialized as `:filterMode` */
    get filterMode(): BooleanValue | undefined;
    set filterMode(v: BooleanValue | undefined);
    /** Enable Conditional Formatting Calculations. Serialized as `:enableFormatConditionsCalculation` */
    get enableFormatConditionsCalculation(): BooleanValue | undefined;
    set enableFormatConditionsCalculation(v: BooleanValue | undefined);
    /** Sheet Tab Color. */
    get tabColor(): TabColor | undefined;
    /** Outline Properties. */
    get outlineProperties(): OutlineProperties | undefined;
    /** Page Setup Properties. */
    get pageSetupProperties(): PageSetupProperties | undefined;
}
/** Data Consolidation References. Serialized as `x:dataRefs` */
export declare class DataReferences extends OxmlCompositeElement<DataReference> {
    static _Q: string;
    static _A: string[];
    /** Data Consolidation Reference Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ConditionalFormattingRuleExtensionList Class. Serialized as `x:extLst` */
export declare class ConditionalFormattingRuleExtensionList extends OxmlCompositeElement<ConditionalFormattingRuleExtension> {
    static _Q: string;
}
/** Icon Set. Serialized as `x:iconSet` */
export declare class IconSet extends OxmlCompositeElement<ConditionalFormatValueObject> {
    static _Q: string;
    static _A: string[];
    /** Icon Set. Serialized as `:iconSet` */
    get iconSetValue(): IconSetValues | undefined;
    set iconSetValue(v: IconSetValues | undefined);
    /** Show Value. Serialized as `:showValue` */
    get showValue(): BooleanValue | undefined;
    set showValue(v: BooleanValue | undefined);
    /** Percent. Serialized as `:percent` */
    get percent(): BooleanValue | undefined;
    set percent(v: BooleanValue | undefined);
    /** Reverse Icons. Serialized as `:reverse` */
    get reverse(): BooleanValue | undefined;
    set reverse(v: BooleanValue | undefined);
}
/** Data Bar. Serialized as `x:dataBar` */
export declare class DataBar extends OxmlCompositeElement<ConditionalFormatValueObject | Color> {
    static _Q: string;
    static _A: string[];
    /** Minimum Length. Serialized as `:minLength` */
    get minLength(): UInt32Value | undefined;
    set minLength(v: UInt32Value | undefined);
    /** Maximum Length. Serialized as `:maxLength` */
    get maxLength(): UInt32Value | undefined;
    set maxLength(v: UInt32Value | undefined);
    /** Show Values. Serialized as `:showValue` */
    get showValue(): BooleanValue | undefined;
    set showValue(v: BooleanValue | undefined);
}
/** Color Scale. Serialized as `x:colorScale` */
export declare class ColorScale extends OxmlCompositeElement<ConditionalFormatValueObject | Color> {
    static _Q: string;
}
/** Defines the WebPublishItems Class. Serialized as `x:webPublishItems` */
export declare class WebPublishItems extends OxmlCompositeElement<WebPublishItem> {
    static _Q: string;
    static _A: string[];
    /** Web Publishing Items Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the Picture Class. Serialized as `x:picture` */
export declare class Picture extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the DrawingHeaderFooter Class. Serialized as `x:drawingHF` */
export declare class DrawingHeaderFooter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** lho. Serialized as `:lho` */
    get lho(): UInt32Value | undefined;
    set lho(v: UInt32Value | undefined);
    /** lhe. Serialized as `:lhe` */
    get lhe(): UInt32Value | undefined;
    set lhe(v: UInt32Value | undefined);
    /** lhf. Serialized as `:lhf` */
    get lhf(): UInt32Value | undefined;
    set lhf(v: UInt32Value | undefined);
    /** cho. Serialized as `:cho` */
    get cho(): UInt32Value | undefined;
    set cho(v: UInt32Value | undefined);
    /** che. Serialized as `:che` */
    get che(): UInt32Value | undefined;
    set che(v: UInt32Value | undefined);
    /** chf. Serialized as `:chf` */
    get chf(): UInt32Value | undefined;
    set chf(v: UInt32Value | undefined);
    /** rho. Serialized as `:rho` */
    get rho(): UInt32Value | undefined;
    set rho(v: UInt32Value | undefined);
    /** rhe. Serialized as `:rhe` */
    get rhe(): UInt32Value | undefined;
    set rhe(v: UInt32Value | undefined);
    /** rhf. Serialized as `:rhf` */
    get rhf(): UInt32Value | undefined;
    set rhf(v: UInt32Value | undefined);
    /** lfo. Serialized as `:lfo` */
    get lfo(): UInt32Value | undefined;
    set lfo(v: UInt32Value | undefined);
    /** lfe. Serialized as `:lfe` */
    get lfe(): UInt32Value | undefined;
    set lfe(v: UInt32Value | undefined);
    /** lff. Serialized as `:lff` */
    get lff(): UInt32Value | undefined;
    set lff(v: UInt32Value | undefined);
    /** cfo. Serialized as `:cfo` */
    get cfo(): UInt32Value | undefined;
    set cfo(v: UInt32Value | undefined);
    /** cfe. Serialized as `:cfe` */
    get cfe(): UInt32Value | undefined;
    set cfe(v: UInt32Value | undefined);
    /** cff. Serialized as `:cff` */
    get cff(): UInt32Value | undefined;
    set cff(v: UInt32Value | undefined);
    /** rfo. Serialized as `:rfo` */
    get rfo(): UInt32Value | undefined;
    set rfo(v: UInt32Value | undefined);
    /** rfe. Serialized as `:rfe` */
    get rfe(): UInt32Value | undefined;
    set rfe(v: UInt32Value | undefined);
    /** rff. Serialized as `:rff` */
    get rff(): UInt32Value | undefined;
    set rff(v: UInt32Value | undefined);
}
/** Defines the LegacyDrawingType Class. */
export declare abstract class LegacyDrawingType extends OxmlLeafElement {
    static _A: string[];
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Legacy Drawing Reference in  Header Footer. Serialized as `x:legacyDrawingHF` */
export declare class LegacyDrawingHeaderFooter extends LegacyDrawingType {
    static _Q: string;
}
/** Defines the LegacyDrawing Class. Serialized as `x:legacyDrawing` */
export declare class LegacyDrawing extends LegacyDrawingType {
    static _Q: string;
}
/** Drawing. Serialized as `x:drawing` */
export declare class Drawing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Custom Chart Sheet Views. Serialized as `x:customSheetViews` */
export declare class CustomChartsheetViews extends OxmlCompositeElement<CustomChartsheetView> {
    static _Q: string;
}
/** Chart Sheet Protection. Serialized as `x:sheetProtection` */
export declare class ChartSheetProtection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Password. Serialized as `:password` */
    get password(): HexBinaryValue | undefined;
    set password(v: HexBinaryValue | undefined);
    /** Cryptographic Algorithm Name. Serialized as `:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** Password Hash Value. Serialized as `:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** Salt Value for Password Verifier. Serialized as `:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
    get spinCount(): UInt32Value | undefined;
    set spinCount(v: UInt32Value | undefined);
    /** Contents. Serialized as `:content` */
    get content(): BooleanValue | undefined;
    set content(v: BooleanValue | undefined);
    /** Objects Locked. Serialized as `:objects` */
    get objects(): BooleanValue | undefined;
    set objects(v: BooleanValue | undefined);
}
/** Chart Sheet Views. Serialized as `x:sheetViews` */
export declare class ChartSheetViews extends OxmlCompositeElement<ChartSheetView | ExtensionList> {
    static _Q: string;
}
/** Chart Sheet Properties. Serialized as `x:sheetPr` */
export declare class ChartSheetProperties extends OxmlCompositeElement<TabColor> {
    static _Q: string;
    static _A: string[];
    /** Published. Serialized as `:published` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Code Name. Serialized as `:codeName` */
    get codeName(): StringValue | undefined;
    set codeName(v: StringValue | undefined);
    /** Returns TabColor. */
    get tabColor(): TabColor | undefined;
}
/** Defines the EmbeddedObjectProperties Class. Serialized as `x:objectPr` */
export declare class EmbeddedObjectProperties extends OxmlCompositeElement<ObjectAnchor> {
    static _Q: string;
    static _A: string[];
    /** locked. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** defaultSize. Serialized as `:defaultSize` */
    get defaultSize(): BooleanValue | undefined;
    set defaultSize(v: BooleanValue | undefined);
    /** print. Serialized as `:print` */
    get print(): BooleanValue | undefined;
    set print(v: BooleanValue | undefined);
    /** disabled. Serialized as `:disabled` */
    get disabled(): BooleanValue | undefined;
    set disabled(v: BooleanValue | undefined);
    /** uiObject. Serialized as `:uiObject` */
    get uiObject(): BooleanValue | undefined;
    set uiObject(v: BooleanValue | undefined);
    /** autoFill. Serialized as `:autoFill` */
    get autoFill(): BooleanValue | undefined;
    set autoFill(v: BooleanValue | undefined);
    /** autoLine. Serialized as `:autoLine` */
    get autoLine(): BooleanValue | undefined;
    set autoLine(v: BooleanValue | undefined);
    /** autoPict. Serialized as `:autoPict` */
    get autoPict(): BooleanValue | undefined;
    set autoPict(v: BooleanValue | undefined);
    /** macro. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** altText. Serialized as `:altText` */
    get altText(): StringValue | undefined;
    set altText(v: StringValue | undefined);
    /** dde. Serialized as `:dde` */
    get dde(): BooleanValue | undefined;
    set dde(v: BooleanValue | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns ObjectAnchor. */
    get objectAnchor(): ObjectAnchor | undefined;
}
/** Defines the ControlProperties Class. Serialized as `x:controlPr` */
export declare class ControlProperties extends OxmlCompositeElement<ObjectAnchor> {
    static _Q: string;
    static _A: string[];
    /** locked. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** defaultSize. Serialized as `:defaultSize` */
    get defaultSize(): BooleanValue | undefined;
    set defaultSize(v: BooleanValue | undefined);
    /** print. Serialized as `:print` */
    get print(): BooleanValue | undefined;
    set print(v: BooleanValue | undefined);
    /** disabled. Serialized as `:disabled` */
    get disabled(): BooleanValue | undefined;
    set disabled(v: BooleanValue | undefined);
    /** recalcAlways. Serialized as `:recalcAlways` */
    get recalcAlways(): BooleanValue | undefined;
    set recalcAlways(v: BooleanValue | undefined);
    /** uiObject. Serialized as `:uiObject` */
    get uiObject(): BooleanValue | undefined;
    set uiObject(v: BooleanValue | undefined);
    /** autoFill. Serialized as `:autoFill` */
    get autoFill(): BooleanValue | undefined;
    set autoFill(v: BooleanValue | undefined);
    /** autoLine. Serialized as `:autoLine` */
    get autoLine(): BooleanValue | undefined;
    set autoLine(v: BooleanValue | undefined);
    /** autoPict. Serialized as `:autoPict` */
    get autoPict(): BooleanValue | undefined;
    set autoPict(v: BooleanValue | undefined);
    /** macro. Serialized as `:macro` */
    get macro(): StringValue | undefined;
    set macro(v: StringValue | undefined);
    /** altText. Serialized as `:altText` */
    get altText(): StringValue | undefined;
    set altText(v: StringValue | undefined);
    /** linkedCell. Serialized as `:linkedCell` */
    get linkedCell(): StringValue | undefined;
    set linkedCell(v: StringValue | undefined);
    /** listFillRange. Serialized as `:listFillRange` */
    get listFillRange(): StringValue | undefined;
    set listFillRange(v: StringValue | undefined);
    /** cf. Serialized as `:cf` */
    get cf(): StringValue | undefined;
    set cf(v: StringValue | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns ObjectAnchor. */
    get objectAnchor(): ObjectAnchor | undefined;
}
/** Defines the BorderPropertiesType Class. */
export declare abstract class BorderPropertiesType extends OxmlCompositeElement<Color> {
    static _A: string[];
    /** Line Style. Serialized as `:style` */
    get style(): BorderStyleValues | undefined;
    set style(v: BorderStyleValues | undefined);
    /** Color. */
    get color(): Color | undefined;
}
/** Horizontal Inner Borders. Serialized as `x:horizontal` */
export declare class HorizontalBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Vertical Inner Border. Serialized as `x:vertical` */
export declare class VerticalBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Diagonal. Serialized as `x:diagonal` */
export declare class DiagonalBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Bottom Border. Serialized as `x:bottom` */
export declare class BottomBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Top Border. Serialized as `x:top` */
export declare class TopBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Right Border. Serialized as `x:right` */
export declare class RightBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Left Border. Serialized as `x:left` */
export declare class LeftBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Defines the EndBorder Class. Serialized as `x:end` */
export declare class EndBorder extends BorderPropertiesType {
    static _Q: string;
}
/** Defines the StartBorder Class. Serialized as `x:start` */
export declare class StartBorder extends BorderPropertiesType {
    static _Q: string;
}
/** OLE Link Item. Serialized as `x:oleItem` */
export declare class OleItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** OLE Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Icon. Serialized as `:icon` */
    get icon(): BooleanValue | undefined;
    set icon(v: BooleanValue | undefined);
    /** Advise. Serialized as `:advise` */
    get advise(): BooleanValue | undefined;
    set advise(v: BooleanValue | undefined);
    /** Object is an Image. Serialized as `:preferPic` */
    get preferPicture(): BooleanValue | undefined;
    set preferPicture(v: BooleanValue | undefined);
}
/** Future Feature Data Storage Area. Serialized as `x:extLst` */
export declare class TableExtensionList extends OxmlCompositeElement<TableExtension> {
    static _Q: string;
}
/** Table Style. Serialized as `x:tableStyleInfo` */
export declare class TableStyleInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Style Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Show First Column. Serialized as `:showFirstColumn` */
    get showFirstColumn(): BooleanValue | undefined;
    set showFirstColumn(v: BooleanValue | undefined);
    /** Show Last Column. Serialized as `:showLastColumn` */
    get showLastColumn(): BooleanValue | undefined;
    set showLastColumn(v: BooleanValue | undefined);
    /** Show Row Stripes. Serialized as `:showRowStripes` */
    get showRowStripes(): BooleanValue | undefined;
    set showRowStripes(v: BooleanValue | undefined);
    /** Show Column Stripes. Serialized as `:showColumnStripes` */
    get showColumnStripes(): BooleanValue | undefined;
    set showColumnStripes(v: BooleanValue | undefined);
}
/** Table Columns. Serialized as `x:tableColumns` */
export declare class TableColumns extends OxmlCompositeElement<TableColumn> {
    static _Q: string;
    static _A: string[];
    /** Column Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the CacheSourceExtension Class. Serialized as `x:ext` */
export declare class CacheSourceExtension extends OxmlCompositeElement<X14SourceConnection> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14SourceConnection. */
    get sourceConnection(): X14SourceConnection | undefined;
}
/** Defines the PivotFieldExtension Class. Serialized as `x:ext` */
export declare class PivotFieldExtension extends OxmlCompositeElement<X14PivotField> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14PivotField. */
    get pivotField(): X14PivotField | undefined;
}
/** Defines the PivotHierarchyExtension Class. Serialized as `x:ext` */
export declare class PivotHierarchyExtension extends OxmlCompositeElement<X14PivotHierarchy> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14PivotHierarchy. */
    get pivotHierarchy(): X14PivotHierarchy | undefined;
}
/** Defines the ConditionalFormattingRuleExtension Class. Serialized as `x:ext` */
export declare class ConditionalFormattingRuleExtension extends OxmlCompositeElement<X14Id> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14Id. */
    get id(): X14Id | undefined;
}
/** Defines the MarkerType Class. */
export declare abstract class MarkerType extends OxmlCompositeElement<XdrColumnId | XdrColumnOffset | XdrRowId | XdrRowOffset> {
    /** Column). */
    get columnId(): XdrColumnId | undefined;
    /** Column Offset. */
    get columnOffset(): XdrColumnOffset | undefined;
    /** Row. */
    get rowId(): XdrRowId | undefined;
    /** Row Offset. */
    get rowOffset(): XdrRowOffset | undefined;
}
/** Defines the ToMarker Class. Serialized as `x:to` */
export declare class ToMarker extends MarkerType {
    static _Q: string;
}
/** Defines the FromMarker Class. Serialized as `x:from` */
export declare class FromMarker extends MarkerType {
    static _Q: string;
}
/** Defines the ObjectAnchor Class. Serialized as `x:anchor` */
export declare class ObjectAnchor extends OxmlCompositeElement<FromMarker | ToMarker> {
    static _Q: string;
    static _A: string[];
    /** moveWithCells. Serialized as `:moveWithCells` */
    get moveWithCells(): BooleanValue | undefined;
    set moveWithCells(v: BooleanValue | undefined);
    /** sizeWithCells. Serialized as `:sizeWithCells` */
    get sizeWithCells(): BooleanValue | undefined;
    set sizeWithCells(v: BooleanValue | undefined);
    /** z-order. Serialized as `:z-order` */
    get zOrder(): UInt32Value | undefined;
    set zOrder(v: UInt32Value | undefined);
    /** Returns FromMarker. */
    get fromMarker(): FromMarker | undefined;
    /** Returns ToMarker. */
    get toMarker(): ToMarker | undefined;
}
/** Defines the TableExtension Class. Serialized as `x:ext` */
export declare class TableExtension extends OxmlCompositeElement<X14Table> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns X14Table. */
    get table(): X14Table | undefined;
}
/** Function Group. Serialized as `x:functionGroup` */
export declare class FunctionGroup extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defined Name. Serialized as `x:definedName` */
export declare class DefinedName extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** Defined Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Comment. Serialized as `:comment` */
    get comment(): StringValue | undefined;
    set comment(v: StringValue | undefined);
    /** Custom Menu Text. Serialized as `:customMenu` */
    get customMenu(): StringValue | undefined;
    set customMenu(v: StringValue | undefined);
    /** Description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Help. Serialized as `:help` */
    get help(): StringValue | undefined;
    set help(v: StringValue | undefined);
    /** Status Bar. Serialized as `:statusBar` */
    get statusBar(): StringValue | undefined;
    set statusBar(v: StringValue | undefined);
    /** Local Name Sheet Id. Serialized as `:localSheetId` */
    get localSheetId(): UInt32Value | undefined;
    set localSheetId(v: UInt32Value | undefined);
    /** Hidden Name. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Function. Serialized as `:function` */
    get function(): BooleanValue | undefined;
    set function(v: BooleanValue | undefined);
    /** Procedure. Serialized as `:vbProcedure` */
    get vbProcedure(): BooleanValue | undefined;
    set vbProcedure(v: BooleanValue | undefined);
    /** External Function. Serialized as `:xlm` */
    get xlm(): BooleanValue | undefined;
    set xlm(v: BooleanValue | undefined);
    /** Function Group Id. Serialized as `:functionGroupId` */
    get functionGroupId(): UInt32Value | undefined;
    set functionGroupId(v: UInt32Value | undefined);
    /** Shortcut Key. Serialized as `:shortcutKey` */
    get shortcutKey(): StringValue | undefined;
    set shortcutKey(v: StringValue | undefined);
    /** Publish To Server. Serialized as `:publishToServer` */
    get publishToServer(): BooleanValue | undefined;
    set publishToServer(v: BooleanValue | undefined);
    /** Workbook Parameter (Server). Serialized as `:workbookParameter` */
    get workbookParameter(): BooleanValue | undefined;
    set workbookParameter(v: BooleanValue | undefined);
}
/** Workbook View. Serialized as `x:workbookView` */
export declare class WorkbookView extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Visibility. Serialized as `:visibility` */
    get visibility(): VisibilityValues | undefined;
    set visibility(v: VisibilityValues | undefined);
    /** Minimized. Serialized as `:minimized` */
    get minimized(): BooleanValue | undefined;
    set minimized(v: BooleanValue | undefined);
    /** Show Horizontal Scroll. Serialized as `:showHorizontalScroll` */
    get showHorizontalScroll(): BooleanValue | undefined;
    set showHorizontalScroll(v: BooleanValue | undefined);
    /** Show Vertical Scroll. Serialized as `:showVerticalScroll` */
    get showVerticalScroll(): BooleanValue | undefined;
    set showVerticalScroll(v: BooleanValue | undefined);
    /** Show Sheet Tabs. Serialized as `:showSheetTabs` */
    get showSheetTabs(): BooleanValue | undefined;
    set showSheetTabs(v: BooleanValue | undefined);
    /** Upper Left Corner (X Coordinate). Serialized as `:xWindow` */
    get xWindow(): Int32Value | undefined;
    set xWindow(v: Int32Value | undefined);
    /** Upper Left Corner (Y Coordinate). Serialized as `:yWindow` */
    get yWindow(): Int32Value | undefined;
    set yWindow(v: Int32Value | undefined);
    /** Window Width. Serialized as `:windowWidth` */
    get windowWidth(): UInt32Value | undefined;
    set windowWidth(v: UInt32Value | undefined);
    /** Window Height. Serialized as `:windowHeight` */
    get windowHeight(): UInt32Value | undefined;
    set windowHeight(v: UInt32Value | undefined);
    /** Sheet Tab Ratio. Serialized as `:tabRatio` */
    get tabRatio(): UInt32Value | undefined;
    set tabRatio(v: UInt32Value | undefined);
    /** First Sheet. Serialized as `:firstSheet` */
    get firstSheet(): UInt32Value | undefined;
    set firstSheet(v: UInt32Value | undefined);
    /** Active Sheet Index. Serialized as `:activeTab` */
    get activeTab(): UInt32Value | undefined;
    set activeTab(v: UInt32Value | undefined);
    /** AutoFilter Date Grouping. Serialized as `:autoFilterDateGrouping` */
    get autoFilterDateGrouping(): BooleanValue | undefined;
    set autoFilterDateGrouping(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Sheet Information. Serialized as `x:sheet` */
export declare class Sheet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sheet Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Sheet Tab Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Visible State. Serialized as `:state` */
    get state(): SheetStateValues | undefined;
    set state(v: SheetStateValues | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Custom Workbook View. Serialized as `x:customWorkbookView` */
export declare class CustomWorkbookView extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Custom View Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Custom View GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** Auto Update. Serialized as `:autoUpdate` */
    get autoUpdate(): BooleanValue | undefined;
    set autoUpdate(v: BooleanValue | undefined);
    /** Merge Interval. Serialized as `:mergeInterval` */
    get mergeInterval(): UInt32Value | undefined;
    set mergeInterval(v: UInt32Value | undefined);
    /** Changes Saved Win. Serialized as `:changesSavedWin` */
    get changesSavedWin(): BooleanValue | undefined;
    set changesSavedWin(v: BooleanValue | undefined);
    /** Only Synch. Serialized as `:onlySync` */
    get onlySync(): BooleanValue | undefined;
    set onlySync(v: BooleanValue | undefined);
    /** Personal View. Serialized as `:personalView` */
    get personalView(): BooleanValue | undefined;
    set personalView(v: BooleanValue | undefined);
    /** Include Print Settings. Serialized as `:includePrintSettings` */
    get includePrintSettings(): BooleanValue | undefined;
    set includePrintSettings(v: BooleanValue | undefined);
    /** Include Hidden Rows and Columns. Serialized as `:includeHiddenRowCol` */
    get includeHiddenRowColumn(): BooleanValue | undefined;
    set includeHiddenRowColumn(v: BooleanValue | undefined);
    /** Maximized. Serialized as `:maximized` */
    get maximized(): BooleanValue | undefined;
    set maximized(v: BooleanValue | undefined);
    /** Minimized. Serialized as `:minimized` */
    get minimized(): BooleanValue | undefined;
    set minimized(v: BooleanValue | undefined);
    /** Show Horizontal Scroll. Serialized as `:showHorizontalScroll` */
    get showHorizontalScroll(): BooleanValue | undefined;
    set showHorizontalScroll(v: BooleanValue | undefined);
    /** Show Vertical Scroll. Serialized as `:showVerticalScroll` */
    get showVerticalScroll(): BooleanValue | undefined;
    set showVerticalScroll(v: BooleanValue | undefined);
    /** Show Sheet Tabs. Serialized as `:showSheetTabs` */
    get showSheetTabs(): BooleanValue | undefined;
    set showSheetTabs(v: BooleanValue | undefined);
    /** Top Left Corner (X Coordinate). Serialized as `:xWindow` */
    get xWindow(): Int32Value | undefined;
    set xWindow(v: Int32Value | undefined);
    /** Top Left Corner (Y Coordinate). Serialized as `:yWindow` */
    get yWindow(): Int32Value | undefined;
    set yWindow(v: Int32Value | undefined);
    /** Window Width. Serialized as `:windowWidth` */
    get windowWidth(): UInt32Value | undefined;
    set windowWidth(v: UInt32Value | undefined);
    /** Window Height. Serialized as `:windowHeight` */
    get windowHeight(): UInt32Value | undefined;
    set windowHeight(v: UInt32Value | undefined);
    /** Sheet Tab Ratio. Serialized as `:tabRatio` */
    get tabRatio(): UInt32Value | undefined;
    set tabRatio(v: UInt32Value | undefined);
    /** Active Sheet in Book View. Serialized as `:activeSheetId` */
    get activeSheetId(): UInt32Value | undefined;
    set activeSheetId(v: UInt32Value | undefined);
    /** Show Formula Bar. Serialized as `:showFormulaBar` */
    get showFormulaBar(): BooleanValue | undefined;
    set showFormulaBar(v: BooleanValue | undefined);
    /** Show Status Bar. Serialized as `:showStatusbar` */
    get showStatusbar(): BooleanValue | undefined;
    set showStatusbar(v: BooleanValue | undefined);
    /** Show Comments. Serialized as `:showComments` */
    get showComments(): CommentsValues | undefined;
    set showComments(v: CommentsValues | undefined);
    /** Show Objects. Serialized as `:showObjects` */
    get showObjects(): ObjectDisplayValues | undefined;
    set showObjects(v: ObjectDisplayValues | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** External Reference. Serialized as `x:externalReference` */
export declare class ExternalReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Web Publishing Object. Serialized as `x:webPublishObject` */
export declare class WebPublishObject extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Div Id. Serialized as `:divId` */
    get divId(): StringValue | undefined;
    set divId(v: StringValue | undefined);
    /** Source Object. Serialized as `:sourceObject` */
    get sourceObject(): StringValue | undefined;
    set sourceObject(v: StringValue | undefined);
    /** Destination File. Serialized as `:destinationFile` */
    get destinationFile(): StringValue | undefined;
    set destinationFile(v: StringValue | undefined);
    /** Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Auto Republish. Serialized as `:autoRepublish` */
    get autoRepublish(): BooleanValue | undefined;
    set autoRepublish(v: BooleanValue | undefined);
}
/** PivotCache. Serialized as `x:pivotCache` */
export declare class PivotCache extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** PivotCache Id. Serialized as `:cacheId` */
    get cacheId(): UInt32Value | undefined;
    set cacheId(v: UInt32Value | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** References. Serialized as `x:tr` */
export declare class TopicReferences extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Sheet Id. Serialized as `:s` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
}
/** Topic. Serialized as `x:tp` */
export declare class Topic extends OxmlCompositeElement<Xstring | Subtopic | TopicReferences> {
    static _Q: string;
    static _A: string[];
    /** Type. Serialized as `:t` */
    get valueType(): VolatileValues | undefined;
    set valueType(v: VolatileValues | undefined);
    /** Topic Value. */
    get xstring(): Xstring | undefined;
}
/** Main. Serialized as `x:main` */
export declare class Main extends OxmlCompositeElement<Topic> {
    static _Q: string;
    static _A: string[];
    /** First String. Serialized as `:first` */
    get first(): StringValue | undefined;
    set first(v: StringValue | undefined);
}
/** Volatile Dependency Type. Serialized as `x:volType` */
export declare class VolatileType extends OxmlCompositeElement<Main> {
    static _Q: string;
    static _A: string[];
    /** Type. Serialized as `:type` */
    get type(): VolatileDependencyValues | undefined;
    set type(v: VolatileDependencyValues | undefined);
}
/** XML Column Properties. Serialized as `x:xmlColumnPr` */
export declare class XmlColumnProperties extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** XML Map Id. Serialized as `:mapId` */
    get mapId(): UInt32Value | undefined;
    set mapId(v: UInt32Value | undefined);
    /** XPath. Serialized as `:xpath` */
    get xPath(): StringValue | undefined;
    set xPath(v: StringValue | undefined);
    /** Denormalized. Serialized as `:denormalized` */
    get denormalized(): BooleanValue | undefined;
    set denormalized(v: BooleanValue | undefined);
    /** XML Data Type. Serialized as `:xmlDataType` */
    get xmlDataType(): XmlDataValues | undefined;
    set xmlDataType(v: XmlDataValues | undefined);
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the TableFormulaType Class. */
export declare abstract class TableFormulaType extends OxmlLeafTextElement {
    static _A: string[];
    /** Array. Serialized as `:array` */
    get array(): BooleanValue | undefined;
    set array(v: BooleanValue | undefined);
    /** space. Serialized as `xml:space` */
    get space(): SpaceProcessingModeValues | undefined;
    set space(v: SpaceProcessingModeValues | undefined);
}
/** Totals Row Formula. Serialized as `x:totalsRowFormula` */
export declare class TotalsRowFormula extends TableFormulaType {
    static _Q: string;
}
/** Calculated Column Formula. Serialized as `x:calculatedColumnFormula` */
export declare class CalculatedColumnFormula extends TableFormulaType {
    static _Q: string;
}
/** Table Column. Serialized as `x:tableColumn` */
export declare class TableColumn extends OxmlCompositeElement<CalculatedColumnFormula | TotalsRowFormula | XmlColumnProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Table Field Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Unique Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** Column name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Totals Row Function. Serialized as `:totalsRowFunction` */
    get totalsRowFunction(): TotalsRowFunctionValues | undefined;
    set totalsRowFunction(v: TotalsRowFunctionValues | undefined);
    /** Totals Row Label. Serialized as `:totalsRowLabel` */
    get totalsRowLabel(): StringValue | undefined;
    set totalsRowLabel(v: StringValue | undefined);
    /** Query Table Field Id. Serialized as `:queryTableFieldId` */
    get queryTableFieldId(): UInt32Value | undefined;
    set queryTableFieldId(v: UInt32Value | undefined);
    /** Header Row Cell Format Id. Serialized as `:headerRowDxfId` */
    get headerRowDifferentialFormattingId(): UInt32Value | undefined;
    set headerRowDifferentialFormattingId(v: UInt32Value | undefined);
    /** Data and Insert Row Format Id. Serialized as `:dataDxfId` */
    get dataFormatId(): UInt32Value | undefined;
    set dataFormatId(v: UInt32Value | undefined);
    /** Totals Row Format Id. Serialized as `:totalsRowDxfId` */
    get totalsRowDifferentialFormattingId(): UInt32Value | undefined;
    set totalsRowDifferentialFormattingId(v: UInt32Value | undefined);
    /** Header Row Cell Style. Serialized as `:headerRowCellStyle` */
    get headerRowCellStyle(): StringValue | undefined;
    set headerRowCellStyle(v: StringValue | undefined);
    /** Data Area Style Name. Serialized as `:dataCellStyle` */
    get dataCellStyle(): StringValue | undefined;
    set dataCellStyle(v: StringValue | undefined);
    /** Totals Row Style Name. Serialized as `:totalsRowCellStyle` */
    get totalsRowCellStyle(): StringValue | undefined;
    set totalsRowCellStyle(v: StringValue | undefined);
    /** Calculated Column Formula. */
    get calculatedColumnFormula(): CalculatedColumnFormula | undefined;
    /** Totals Row Formula. */
    get totalsRowFormula(): TotalsRowFormula | undefined;
    /** XML Column Properties. */
    get xmlColumnProperties(): XmlColumnProperties | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Value. Serialized as `x:v` */
export declare class Xstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Sheet Name. Serialized as `x:sheetName` */
export declare class SheetName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sheet Name Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** OLE Link. Serialized as `x:oleLink` */
export declare class OleLink extends OxmlCompositeElement<OleItems> {
    static _Q: string;
    static _A: string[];
    /** OLE Link Relationship. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** OLE Link ProgID. Serialized as `:progId` */
    get progId(): StringValue | undefined;
    set progId(v: StringValue | undefined);
    /** OLE Link Items. */
    get oleItems(): OleItems | undefined;
}
/** DDE Connection. Serialized as `x:ddeLink` */
export declare class DdeLink extends OxmlCompositeElement<DdeItems> {
    static _Q: string;
    static _A: string[];
    /** Service name. Serialized as `:ddeService` */
    get ddeService(): StringValue | undefined;
    set ddeService(v: StringValue | undefined);
    /** Topic for DDE server. Serialized as `:ddeTopic` */
    get ddeTopic(): StringValue | undefined;
    set ddeTopic(v: StringValue | undefined);
    /** DDE Items Collection. */
    get ddeItems(): DdeItems | undefined;
}
/** External Workbook. Serialized as `x:externalBook` */
export declare class ExternalBook extends OxmlCompositeElement<Xxl21ExternalBookAlternateUrls | SheetNames | ExternalDefinedNames | SheetDataSet> {
    static _Q: string;
    static _A: string[];
    /** Relationship to supporting book file path. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Alternate URLs and identifiers of the external book. */
    get externalBookAlternateUrls(): Xxl21ExternalBookAlternateUrls | undefined;
    /** Sheet names of supporting book. */
    get sheetNames(): SheetNames | undefined;
    /** Defined names associated with supporting book.. */
    get externalDefinedNames(): ExternalDefinedNames | undefined;
    /** Cached worksheet data associated with supporting book. */
    get sheetDataSet(): SheetDataSet | undefined;
}
/** OLE Link Items. Serialized as `x:oleItems` */
export declare class OleItems extends OxmlCompositeElement<OleItem | X14OleItem> {
    static _Q: string;
}
/** Value. Serialized as `x:value` */
export declare class Value extends OxmlCompositeElement<DdeLinkValue> {
    static _Q: string;
    static _A: string[];
    /** DDE Value Type. Serialized as `:t` */
    get valueType(): DdeValues | undefined;
    set valueType(v: DdeValues | undefined);
    /** DDE Link Value. */
    get ddeLinkValue(): DdeLinkValue | undefined;
}
/** DDE Name Values. Serialized as `x:values` */
export declare class Values extends OxmlCompositeElement<Value> {
    static _Q: string;
    static _A: string[];
    /** Rows. Serialized as `:rows` */
    get rows(): UInt32Value | undefined;
    set rows(v: UInt32Value | undefined);
    /** Columns. Serialized as `:cols` */
    get columns(): UInt32Value | undefined;
    set columns(v: UInt32Value | undefined);
}
/** DDE Item definition. Serialized as `x:ddeItem` */
export declare class DdeItem extends OxmlCompositeElement<Values> {
    static _Q: string;
    static _A: string[];
    /** DDE Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** OLE. Serialized as `:ole` */
    get useOle(): BooleanValue | undefined;
    set useOle(v: BooleanValue | undefined);
    /** Advise. Serialized as `:advise` */
    get advise(): BooleanValue | undefined;
    set advise(v: BooleanValue | undefined);
    /** Data is an Image. Serialized as `:preferPic` */
    get preferPicture(): BooleanValue | undefined;
    set preferPicture(v: BooleanValue | undefined);
    /** DDE Name Values. */
    get values(): Values | undefined;
}
/** DDE Items Collection. Serialized as `x:ddeItems` */
export declare class DdeItems extends OxmlCompositeElement<DdeItem> {
    static _Q: string;
}
/** External Cell Data. Serialized as `x:cell` */
export declare class ExternalCell extends OxmlCompositeElement<Xstring> {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Type. Serialized as `:t` */
    get dataType(): CellValues | undefined;
    set dataType(v: CellValues | undefined);
    /** Value Metadata. Serialized as `:vm` */
    get valueMetaIndex(): UInt32Value | undefined;
    set valueMetaIndex(v: UInt32Value | undefined);
    /** Value. */
    get xstring(): Xstring | undefined;
}
/** Row. Serialized as `x:row` */
export declare class ExternalRow extends OxmlCompositeElement<ExternalCell> {
    static _Q: string;
    static _A: string[];
    /** Row. Serialized as `:r` */
    get rowIndex(): UInt32Value | undefined;
    set rowIndex(v: UInt32Value | undefined);
}
/** External Sheet Data Set. Serialized as `x:sheetData` */
export declare class ExternalSheetData extends OxmlCompositeElement<ExternalRow> {
    static _Q: string;
    static _A: string[];
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Last Refresh Resulted in Error. Serialized as `:refreshError` */
    get refreshError(): BooleanValue | undefined;
    set refreshError(v: BooleanValue | undefined);
}
/** Defined Name. Serialized as `x:definedName` */
export declare class ExternalDefinedName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Defined Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Refers To. Serialized as `:refersTo` */
    get refersTo(): StringValue | undefined;
    set refersTo(v: StringValue | undefined);
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
}
/** Table Style. Serialized as `x:tableStyleElement` */
export declare class TableStyleElement extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Table Style Type. Serialized as `:type` */
    get type(): TableStyleValues | undefined;
    set type(v: TableStyleValues | undefined);
    /** Band Size. Serialized as `:size` */
    get size(): UInt32Value | undefined;
    set size(v: UInt32Value | undefined);
    /** Formatting Id. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
}
/** Character Set. Serialized as `x:charset` */
export declare class FontCharSet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Font Family. Serialized as `x:family` */
export declare class FontFamilyNumbering extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Font Name. Serialized as `x:name` */
export declare class FontName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** String Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Formatting Elements. Serialized as `x:xf` */
export declare class CellFormat extends OxmlCompositeElement<Alignment | Protection | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Number Format Id. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
    /** Font Id. Serialized as `:fontId` */
    get fontId(): UInt32Value | undefined;
    set fontId(v: UInt32Value | undefined);
    /** Fill Id. Serialized as `:fillId` */
    get fillId(): UInt32Value | undefined;
    set fillId(v: UInt32Value | undefined);
    /** Border Id. Serialized as `:borderId` */
    get borderId(): UInt32Value | undefined;
    set borderId(v: UInt32Value | undefined);
    /** Format Id. Serialized as `:xfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** Quote Prefix. Serialized as `:quotePrefix` */
    get quotePrefix(): BooleanValue | undefined;
    set quotePrefix(v: BooleanValue | undefined);
    /** Pivot Button. Serialized as `:pivotButton` */
    get pivotButton(): BooleanValue | undefined;
    set pivotButton(v: BooleanValue | undefined);
    /** Apply Number Format. Serialized as `:applyNumberFormat` */
    get applyNumberFormat(): BooleanValue | undefined;
    set applyNumberFormat(v: BooleanValue | undefined);
    /** Apply Font. Serialized as `:applyFont` */
    get applyFont(): BooleanValue | undefined;
    set applyFont(v: BooleanValue | undefined);
    /** Apply Fill. Serialized as `:applyFill` */
    get applyFill(): BooleanValue | undefined;
    set applyFill(v: BooleanValue | undefined);
    /** Apply Border. Serialized as `:applyBorder` */
    get applyBorder(): BooleanValue | undefined;
    set applyBorder(v: BooleanValue | undefined);
    /** Apply Alignment. Serialized as `:applyAlignment` */
    get applyAlignment(): BooleanValue | undefined;
    set applyAlignment(v: BooleanValue | undefined);
    /** Apply Protection. Serialized as `:applyProtection` */
    get applyProtection(): BooleanValue | undefined;
    set applyProtection(v: BooleanValue | undefined);
    /** Alignment. */
    get alignment(): Alignment | undefined;
    /** Protection. */
    get protection(): Protection | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Cell Style. Serialized as `x:cellStyle` */
export declare class CellStyle extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** User Defined Cell Style. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Format Id. Serialized as `:xfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** Built-In Style Id. Serialized as `:builtinId` */
    get builtinId(): UInt32Value | undefined;
    set builtinId(v: UInt32Value | undefined);
    /** Outline Style. Serialized as `:iLevel` */
    get outlineLevel(): UInt32Value | undefined;
    set outlineLevel(v: UInt32Value | undefined);
    /** Hidden Style. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Custom Built In. Serialized as `:customBuiltin` */
    get customBuiltin(): BooleanValue | undefined;
    set customBuiltin(v: BooleanValue | undefined);
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** RGB Color. Serialized as `x:rgbColor` */
export declare class RgbColor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Alpha Red Green Blue. Serialized as `:rgb` */
    get rgb(): HexBinaryValue | undefined;
    set rgb(v: HexBinaryValue | undefined);
}
/** Table Style. Serialized as `x:tableStyle` */
export declare class TableStyle extends OxmlCompositeElement<TableStyleElement> {
    static _Q: string;
    static _A: string[];
    /** Table Style Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Pivot Style. Serialized as `:pivot` */
    get pivot(): BooleanValue | undefined;
    set pivot(v: BooleanValue | undefined);
    /** Table. Serialized as `:table` */
    get table(): BooleanValue | undefined;
    set table(v: BooleanValue | undefined);
    /** Table Style Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** MRU Colors. Serialized as `x:mruColors` */
export declare class MruColors extends OxmlCompositeElement<Color> {
    static _Q: string;
}
/** Color Indexes. Serialized as `x:indexedColors` */
export declare class IndexedColors extends OxmlCompositeElement<RgbColor> {
    static _Q: string;
}
/** Border Properties. Serialized as `x:border` */
export declare class Border extends OxmlCompositeElement<StartBorder | EndBorder | LeftBorder | RightBorder | TopBorder | BottomBorder | DiagonalBorder | VerticalBorder | HorizontalBorder> {
    static _Q: string;
    static _A: string[];
    /** Diagonal Up. Serialized as `:diagonalUp` */
    get diagonalUp(): BooleanValue | undefined;
    set diagonalUp(v: BooleanValue | undefined);
    /** Diagonal Down. Serialized as `:diagonalDown` */
    get diagonalDown(): BooleanValue | undefined;
    set diagonalDown(v: BooleanValue | undefined);
    /** Outline. Serialized as `:outline` */
    get outline(): BooleanValue | undefined;
    set outline(v: BooleanValue | undefined);
    /** Returns StartBorder. */
    get startBorder(): StartBorder | undefined;
    /** Returns EndBorder. */
    get endBorder(): EndBorder | undefined;
    /** Left Border. */
    get leftBorder(): LeftBorder | undefined;
    /** Right Border. */
    get rightBorder(): RightBorder | undefined;
    /** Top Border. */
    get topBorder(): TopBorder | undefined;
    /** Bottom Border. */
    get bottomBorder(): BottomBorder | undefined;
    /** Diagonal. */
    get diagonalBorder(): DiagonalBorder | undefined;
    /** Vertical Inner Border. */
    get verticalBorder(): VerticalBorder | undefined;
    /** Horizontal Inner Borders. */
    get horizontalBorder(): HorizontalBorder | undefined;
}
/** Fill. Serialized as `x:fill` */
export declare class Fill extends OxmlCompositeElement<PatternFill | GradientFill> {
    static _Q: string;
    /** Pattern. */
    get patternFill(): PatternFill | undefined;
    /** Gradient. */
    get gradientFill(): GradientFill | undefined;
}
/** Font Properties. Serialized as `x:font` */
export declare class Font extends OxmlCompositeElement<Bold | Italic | Strike | Condense | Extend | Outline | Shadow | Underline | VerticalTextAlignment | FontSize | Color | FontName | FontFamilyNumbering | FontCharSet | FontScheme> {
    static _Q: string;
    /** Bold. */
    get bold(): Bold | undefined;
    /** Italic. */
    get italic(): Italic | undefined;
    /** Strike Through. */
    get strike(): Strike | undefined;
    /** Condense. */
    get condense(): Condense | undefined;
    /** Extend. */
    get extend(): Extend | undefined;
    /** Outline. */
    get outline(): Outline | undefined;
    /** Shadow. */
    get shadow(): Shadow | undefined;
    /** Underline. */
    get underline(): Underline | undefined;
    /** Text Vertical Alignment. */
    get verticalTextAlignment(): VerticalTextAlignment | undefined;
    /** Font Size. */
    get fontSize(): FontSize | undefined;
    /** Text Color. */
    get color(): Color | undefined;
    /** Font Name. */
    get fontName(): FontName | undefined;
    /** Font Family. */
    get fontFamilyNumbering(): FontFamilyNumbering | undefined;
    /** Character Set. */
    get fontCharSet(): FontCharSet | undefined;
    /** Scheme. */
    get fontScheme(): FontScheme | undefined;
}
/** Protection. Serialized as `x:protection` */
export declare class Protection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Cell Locked. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** Hidden Cell. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
}
/** Alignment. Serialized as `x:alignment` */
export declare class Alignment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Horizontal Alignment. Serialized as `:horizontal` */
    get horizontal(): HorizontalAlignmentValues | undefined;
    set horizontal(v: HorizontalAlignmentValues | undefined);
    /** Vertical Alignment. Serialized as `:vertical` */
    get vertical(): VerticalAlignmentValues | undefined;
    set vertical(v: VerticalAlignmentValues | undefined);
    /** Text Rotation. Serialized as `:textRotation` */
    get textRotation(): UInt32Value | undefined;
    set textRotation(v: UInt32Value | undefined);
    /** Wrap Text. Serialized as `:wrapText` */
    get wrapText(): BooleanValue | undefined;
    set wrapText(v: BooleanValue | undefined);
    /** Indent. Serialized as `:indent` */
    get indent(): UInt32Value | undefined;
    set indent(v: UInt32Value | undefined);
    /** Relative Indent. Serialized as `:relativeIndent` */
    get relativeIndent(): Int32Value | undefined;
    set relativeIndent(v: Int32Value | undefined);
    /** Justify Last Line. Serialized as `:justifyLastLine` */
    get justifyLastLine(): BooleanValue | undefined;
    set justifyLastLine(v: BooleanValue | undefined);
    /** Shrink To Fit. Serialized as `:shrinkToFit` */
    get shrinkToFit(): BooleanValue | undefined;
    set shrinkToFit(v: BooleanValue | undefined);
    /** Reading Order. Serialized as `:readingOrder` */
    get readingOrder(): UInt32Value | undefined;
    set readingOrder(v: UInt32Value | undefined);
    /** mergeCell. Serialized as `:mergeCell` */
    get mergeCell(): StringValue | undefined;
    set mergeCell(v: StringValue | undefined);
}
/** Number Formats. Serialized as `x:numFmt` */
export declare class NumberingFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Number Format Id. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
    /** Number Format Code. Serialized as `:formatCode` */
    get formatCode(): StringValue | undefined;
    set formatCode(v: StringValue | undefined);
}
/** Gradient Stop. Serialized as `x:stop` */
export declare class GradientStop extends OxmlCompositeElement<Color> {
    static _Q: string;
    static _A: string[];
    /** Gradient Stop Position. Serialized as `:position` */
    get position(): DoubleValue | undefined;
    set position(v: DoubleValue | undefined);
    /** Color. */
    get color(): Color | undefined;
}
/** Gradient. Serialized as `x:gradientFill` */
export declare class GradientFill extends OxmlCompositeElement<GradientStop> {
    static _Q: string;
    static _A: string[];
    /** Gradient Fill Type. Serialized as `:type` */
    get type(): GradientValues | undefined;
    set type(v: GradientValues | undefined);
    /** Linear Gradient Degree. Serialized as `:degree` */
    get degree(): DoubleValue | undefined;
    set degree(v: DoubleValue | undefined);
    /** Left Convergence. Serialized as `:left` */
    get left(): DoubleValue | undefined;
    set left(v: DoubleValue | undefined);
    /** Right Convergence. Serialized as `:right` */
    get right(): DoubleValue | undefined;
    set right(v: DoubleValue | undefined);
    /** Top Gradient Convergence. Serialized as `:top` */
    get top(): DoubleValue | undefined;
    set top(v: DoubleValue | undefined);
    /** Bottom Convergence. Serialized as `:bottom` */
    get bottom(): DoubleValue | undefined;
    set bottom(v: DoubleValue | undefined);
}
/** Pattern. Serialized as `x:patternFill` */
export declare class PatternFill extends OxmlCompositeElement<ForegroundColor | BackgroundColor> {
    static _Q: string;
    static _A: string[];
    /** Pattern Type. Serialized as `:patternType` */
    get patternType(): PatternValues | undefined;
    set patternType(v: PatternValues | undefined);
    /** Foreground Color. */
    get foregroundColor(): ForegroundColor | undefined;
    /** Background Color. */
    get backgroundColor(): BackgroundColor | undefined;
}
/** Column XML Properties. Serialized as `x:xmlPr` */
export declare class XmlProperties extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** XML Map Id. Serialized as `:mapId` */
    get mapId(): UInt32Value | undefined;
    set mapId(v: UInt32Value | undefined);
    /** XPath. Serialized as `:xpath` */
    get xPath(): StringValue | undefined;
    set xPath(v: StringValue | undefined);
    /** XML Data Type. Serialized as `:xmlDataType` */
    get xmlDataType(): XmlDataValues | undefined;
    set xmlDataType(v: XmlDataValues | undefined);
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Cell Properties. Serialized as `x:xmlCellPr` */
export declare class XmlCellProperties extends OxmlCompositeElement<XmlProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Table Field Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Unique Table Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** Column XML Properties. */
    get xmlProperties(): XmlProperties | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Table Properties. Serialized as `x:singleXmlCell` */
export declare class SingleXmlCell extends OxmlCompositeElement<XmlCellProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Table Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Connection ID. Serialized as `:connectionId` */
    get connectionId(): UInt32Value | undefined;
    set connectionId(v: UInt32Value | undefined);
    /** Cell Properties. */
    get xmlCellProperties(): XmlCellProperties | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Member Unique Name Index. Serialized as `x:n` */
export declare class NameIndex extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Index Value. Serialized as `:x` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** String is a Set. Serialized as `:s` */
    get isASet(): BooleanValue | undefined;
    set isASet(v: BooleanValue | undefined);
}
/** KPI MDX Metadata. Serialized as `x:k` */
export declare class MdxKpi extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Member Unique Name Index. Serialized as `:n` */
    get nameIndex(): UInt32Value | undefined;
    set nameIndex(v: UInt32Value | undefined);
    /** KPI Index. Serialized as `:np` */
    get kpiIndex(): UInt32Value | undefined;
    set kpiIndex(v: UInt32Value | undefined);
    /** KPI Property. Serialized as `:p` */
    get kpiProperty(): MdxKPIPropertyValues | undefined;
    set kpiProperty(v: MdxKPIPropertyValues | undefined);
}
/** Member Property MDX Metadata. Serialized as `x:p` */
export declare class MdxMemberProp extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Member Unique Name Index. Serialized as `:n` */
    get nameIndex(): UInt32Value | undefined;
    set nameIndex(v: UInt32Value | undefined);
    /** Property Name Index. Serialized as `:np` */
    get propertyNameIndex(): UInt32Value | undefined;
    set propertyNameIndex(v: UInt32Value | undefined);
}
/** Set MDX Metadata. Serialized as `x:ms` */
export declare class MdxSet extends OxmlCompositeElement<NameIndex> {
    static _Q: string;
    static _A: string[];
    /** Set Definition Index. Serialized as `:ns` */
    get setDefinitionIndex(): UInt32Value | undefined;
    set setDefinitionIndex(v: UInt32Value | undefined);
    /** Sort By Member Index Count. Serialized as `:c` */
    get memberIndexCount(): UInt32Value | undefined;
    set memberIndexCount(v: UInt32Value | undefined);
    /** Set Sort Order. Serialized as `:o` */
    get sortingOrder(): MdxSetOrderValues | undefined;
    set sortingOrder(v: MdxSetOrderValues | undefined);
}
/** Tuple MDX Metadata. Serialized as `x:t` */
export declare class MdxTuple extends OxmlCompositeElement<NameIndex> {
    static _Q: string;
    static _A: string[];
    /** Member Index Count. Serialized as `:c` */
    get memberIndexCount(): UInt32Value | undefined;
    set memberIndexCount(v: UInt32Value | undefined);
    /** Server Formatting Culture Currency. Serialized as `:ct` */
    get cultureCurrency(): StringValue | undefined;
    set cultureCurrency(v: StringValue | undefined);
    /** Server Formatting String Index. Serialized as `:si` */
    get formattingStringIndex(): UInt32Value | undefined;
    set formattingStringIndex(v: UInt32Value | undefined);
    /** Server Formatting Built-In Number Format Index. Serialized as `:fi` */
    get formatIndex(): UInt32Value | undefined;
    set formatIndex(v: UInt32Value | undefined);
    /** Server Formatting Background Color. Serialized as `:bc` */
    get backgroundColor(): HexBinaryValue | undefined;
    set backgroundColor(v: HexBinaryValue | undefined);
    /** Server Formatting Foreground Color. Serialized as `:fc` */
    get foregroundColor(): HexBinaryValue | undefined;
    set foregroundColor(v: HexBinaryValue | undefined);
    /** Server Formatting Italic Font. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** Server Formatting Underline Font. Serialized as `:u` */
    get underline(): BooleanValue | undefined;
    set underline(v: BooleanValue | undefined);
    /** Server Formatting Strikethrough Font. Serialized as `:st` */
    get strikethrough(): BooleanValue | undefined;
    set strikethrough(v: BooleanValue | undefined);
    /** Server Formatting Bold Font. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
}
/** MDX Metadata Record. Serialized as `x:mdx` */
export declare class Mdx extends OxmlCompositeElement<MdxTuple | MdxSet | MdxMemberProp | MdxKpi> {
    static _Q: string;
    static _A: string[];
    /** Connection Name Index. Serialized as `:n` */
    get nameIndex(): UInt32Value | undefined;
    set nameIndex(v: UInt32Value | undefined);
    /** Cube Function Tag. Serialized as `:f` */
    get cubeFunction(): MdxFunctionValues | undefined;
    set cubeFunction(v: MdxFunctionValues | undefined);
    /** Tuple MDX Metadata. */
    get mdxTuple(): MdxTuple | undefined;
    /** Set MDX Metadata. */
    get mdxSet(): MdxSet | undefined;
    /** Member Property MDX Metadata. */
    get mdxMemberProp(): MdxMemberProp | undefined;
    /** KPI MDX Metadata. */
    get mdxKpi(): MdxKpi | undefined;
}
/** Future Metadata Block. Serialized as `x:bk` */
export declare class FutureMetadataBlock extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    /** Future Feature Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Metadata Record. Serialized as `x:rc` */
export declare class MetadataRecord extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Metadata Record Type Index. Serialized as `:t` */
    get typeIndex(): UInt32Value | undefined;
    set typeIndex(v: UInt32Value | undefined);
    /** Metadata Record Value Index. Serialized as `:v` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Metadata Block. Serialized as `x:bk` */
export declare class MetadataBlock extends OxmlCompositeElement<MetadataRecord> {
    static _Q: string;
}
/** Metadata Type Information. Serialized as `x:metadataType` */
export declare class MetadataType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Metadata Type Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Minimum Supported Version. Serialized as `:minSupportedVersion` */
    get minSupportedVersion(): UInt32Value | undefined;
    set minSupportedVersion(v: UInt32Value | undefined);
    /** Metadata Ghost Row. Serialized as `:ghostRow` */
    get ghostRow(): BooleanValue | undefined;
    set ghostRow(v: BooleanValue | undefined);
    /** Metadata Ghost Column. Serialized as `:ghostCol` */
    get ghostColumn(): BooleanValue | undefined;
    set ghostColumn(v: BooleanValue | undefined);
    /** Metadata Edit. Serialized as `:edit` */
    get edit(): BooleanValue | undefined;
    set edit(v: BooleanValue | undefined);
    /** Metadata Cell Value Delete. Serialized as `:delete` */
    get delete(): BooleanValue | undefined;
    set delete(v: BooleanValue | undefined);
    /** Metadata Copy. Serialized as `:copy` */
    get copy(): BooleanValue | undefined;
    set copy(v: BooleanValue | undefined);
    /** Metadata Paste All. Serialized as `:pasteAll` */
    get pasteAll(): BooleanValue | undefined;
    set pasteAll(v: BooleanValue | undefined);
    /** Metadata Paste Formulas. Serialized as `:pasteFormulas` */
    get pasteFormulas(): BooleanValue | undefined;
    set pasteFormulas(v: BooleanValue | undefined);
    /** Metadata Paste Special Values. Serialized as `:pasteValues` */
    get pasteValues(): BooleanValue | undefined;
    set pasteValues(v: BooleanValue | undefined);
    /** Metadata Paste Formats. Serialized as `:pasteFormats` */
    get pasteFormats(): BooleanValue | undefined;
    set pasteFormats(v: BooleanValue | undefined);
    /** Metadata Paste Comments. Serialized as `:pasteComments` */
    get pasteComments(): BooleanValue | undefined;
    set pasteComments(v: BooleanValue | undefined);
    /** Metadata Paste Data Validation. Serialized as `:pasteDataValidation` */
    get pasteDataValidation(): BooleanValue | undefined;
    set pasteDataValidation(v: BooleanValue | undefined);
    /** Metadata Paste Borders. Serialized as `:pasteBorders` */
    get pasteBorders(): BooleanValue | undefined;
    set pasteBorders(v: BooleanValue | undefined);
    /** Metadata Paste Column Widths. Serialized as `:pasteColWidths` */
    get pasteColWidths(): BooleanValue | undefined;
    set pasteColWidths(v: BooleanValue | undefined);
    /** Metadata Paste Number Formats. Serialized as `:pasteNumberFormats` */
    get pasteNumberFormats(): BooleanValue | undefined;
    set pasteNumberFormats(v: BooleanValue | undefined);
    /** Metadata Merge. Serialized as `:merge` */
    get merge(): BooleanValue | undefined;
    set merge(v: BooleanValue | undefined);
    /** Meatadata Split First. Serialized as `:splitFirst` */
    get splitFirst(): BooleanValue | undefined;
    set splitFirst(v: BooleanValue | undefined);
    /** Metadata Split All. Serialized as `:splitAll` */
    get splitAll(): BooleanValue | undefined;
    set splitAll(v: BooleanValue | undefined);
    /** Metadata Insert Delete. Serialized as `:rowColShift` */
    get rowColumnShift(): BooleanValue | undefined;
    set rowColumnShift(v: BooleanValue | undefined);
    /** Metadata Clear All. Serialized as `:clearAll` */
    get clearAll(): BooleanValue | undefined;
    set clearAll(v: BooleanValue | undefined);
    /** Metadata Clear Formats. Serialized as `:clearFormats` */
    get clearFormats(): BooleanValue | undefined;
    set clearFormats(v: BooleanValue | undefined);
    /** Metadata Clear Contents. Serialized as `:clearContents` */
    get clearContents(): BooleanValue | undefined;
    set clearContents(v: BooleanValue | undefined);
    /** Metadata Clear Comments. Serialized as `:clearComments` */
    get clearComments(): BooleanValue | undefined;
    set clearComments(v: BooleanValue | undefined);
    /** Metadata Formula Assignment. Serialized as `:assign` */
    get assign(): BooleanValue | undefined;
    set assign(v: BooleanValue | undefined);
    /** Metadata Coercion. Serialized as `:coerce` */
    get coerce(): BooleanValue | undefined;
    set coerce(v: BooleanValue | undefined);
    /** Adjust Metadata. Serialized as `:adjust` */
    get adjust(): BooleanValue | undefined;
    set adjust(v: BooleanValue | undefined);
    /** Cell Metadata. Serialized as `:cellMeta` */
    get cellMeta(): BooleanValue | undefined;
    set cellMeta(v: BooleanValue | undefined);
}
/** Defines the MetadataBlocksType Class. */
export declare abstract class MetadataBlocksType extends OxmlCompositeElement<MetadataBlock> {
    static _A: string[];
    /** Metadata Block Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Value Metadata. Serialized as `x:valueMetadata` */
export declare class ValueMetadata extends MetadataBlocksType {
    static _Q: string;
}
/** Cell Metadata. Serialized as `x:cellMetadata` */
export declare class CellMetadata extends MetadataBlocksType {
    static _Q: string;
}
/** Future Metadata. Serialized as `x:futureMetadata` */
export declare class FutureMetadata extends OxmlCompositeElement<FutureMetadataBlock | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Metadata Type Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Future Metadata Block Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** MDX Metadata Information. Serialized as `x:mdxMetadata` */
export declare class MdxMetadata extends OxmlCompositeElement<Mdx> {
    static _Q: string;
    static _A: string[];
    /** MDX Metadata Record Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Metadata String Store. Serialized as `x:metadataStrings` */
export declare class MetadataStrings extends OxmlCompositeElement<CharacterValue> {
    static _Q: string;
    static _A: string[];
    /** MDX Metadata String Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Metadata Types Collection. Serialized as `x:metadataTypes` */
export declare class MetadataTypes extends OxmlCompositeElement<MetadataType> {
    static _Q: string;
    static _A: string[];
    /** Metadata Type Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** OLE Object. Serialized as `x:oleObject` */
export declare class OleObject extends OxmlCompositeElement<EmbeddedObjectProperties> {
    static _Q: string;
    static _A: string[];
    /** OLE ProgId. Serialized as `:progId` */
    get progId(): StringValue | undefined;
    set progId(v: StringValue | undefined);
    /** Data or View Aspect. Serialized as `:dvAspect` */
    get dataOrViewAspect(): DataViewAspectValues | undefined;
    set dataOrViewAspect(v: DataViewAspectValues | undefined);
    /** OLE Link Moniker. Serialized as `:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** OLE Update. Serialized as `:oleUpdate` */
    get oleUpdate(): OleUpdateValues | undefined;
    set oleUpdate(v: OleUpdateValues | undefined);
    /** Auto Load. Serialized as `:autoLoad` */
    get autoLoad(): BooleanValue | undefined;
    set autoLoad(v: BooleanValue | undefined);
    /** Shape Id. Serialized as `:shapeId` */
    get shapeId(): UInt32Value | undefined;
    set shapeId(v: UInt32Value | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns EmbeddedObjectProperties. */
    get embeddedObjectProperties(): EmbeddedObjectProperties | undefined;
}
/** Custom Sheet View. Serialized as `x:customSheetView` */
export declare class CustomSheetView extends OxmlCompositeElement<Pane | Selection | RowBreaks | ColumnBreaks | PageMargins | PrintOptions | PageSetup | HeaderFooter | AutoFilter | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** Print Scale. Serialized as `:scale` */
    get scale(): UInt32Value | undefined;
    set scale(v: UInt32Value | undefined);
    /** Color Id. Serialized as `:colorId` */
    get colorId(): UInt32Value | undefined;
    set colorId(v: UInt32Value | undefined);
    /** Show Page Breaks. Serialized as `:showPageBreaks` */
    get showPageBreaks(): BooleanValue | undefined;
    set showPageBreaks(v: BooleanValue | undefined);
    /** Show Formulas. Serialized as `:showFormulas` */
    get showFormulas(): BooleanValue | undefined;
    set showFormulas(v: BooleanValue | undefined);
    /** Show Grid Lines. Serialized as `:showGridLines` */
    get showGridLines(): BooleanValue | undefined;
    set showGridLines(v: BooleanValue | undefined);
    /** Show Headers. Serialized as `:showRowCol` */
    get showRowColumn(): BooleanValue | undefined;
    set showRowColumn(v: BooleanValue | undefined);
    /** Show Outline Symbols. Serialized as `:outlineSymbols` */
    get outlineSymbols(): BooleanValue | undefined;
    set outlineSymbols(v: BooleanValue | undefined);
    /** Show Zero Values. Serialized as `:zeroValues` */
    get zeroValues(): BooleanValue | undefined;
    set zeroValues(v: BooleanValue | undefined);
    /** Fit To Page. Serialized as `:fitToPage` */
    get fitToPage(): BooleanValue | undefined;
    set fitToPage(v: BooleanValue | undefined);
    /** Print Area Defined. Serialized as `:printArea` */
    get printArea(): BooleanValue | undefined;
    set printArea(v: BooleanValue | undefined);
    /** Filtered List. Serialized as `:filter` */
    get filter(): BooleanValue | undefined;
    set filter(v: BooleanValue | undefined);
    /** Show AutoFitler Drop Down Controls. Serialized as `:showAutoFilter` */
    get showAutoFilter(): BooleanValue | undefined;
    set showAutoFilter(v: BooleanValue | undefined);
    /** Hidden Rows. Serialized as `:hiddenRows` */
    get hiddenRows(): BooleanValue | undefined;
    set hiddenRows(v: BooleanValue | undefined);
    /** Hidden Columns. Serialized as `:hiddenColumns` */
    get hiddenColumns(): BooleanValue | undefined;
    set hiddenColumns(v: BooleanValue | undefined);
    /** Visible State. Serialized as `:state` */
    get state(): SheetStateValues | undefined;
    set state(v: SheetStateValues | undefined);
    /** Filter. Serialized as `:filterUnique` */
    get filterUnique(): BooleanValue | undefined;
    set filterUnique(v: BooleanValue | undefined);
    /** View Type. Serialized as `:view` */
    get view(): SheetViewValues | undefined;
    set view(v: SheetViewValues | undefined);
    /** Show Ruler. Serialized as `:showRuler` */
    get showRuler(): BooleanValue | undefined;
    set showRuler(v: BooleanValue | undefined);
    /** Top Left Visible Cell. Serialized as `:topLeftCell` */
    get topLeftCell(): StringValue | undefined;
    set topLeftCell(v: StringValue | undefined);
    /** Pane Split Information. */
    get pane(): Pane | undefined;
    /** Selection. */
    get selection(): Selection | undefined;
    /** Horizontal Page Breaks. */
    get rowBreaks(): RowBreaks | undefined;
    /** Vertical Page Breaks. */
    get columnBreaks(): ColumnBreaks | undefined;
    /** Page Margins. */
    get pageMargins(): PageMargins | undefined;
    /** Print Options. */
    get printOptions(): PrintOptions | undefined;
    /** Page Setup Settings. */
    get pageSetup(): PageSetup | undefined;
    /** Header Footer Settings. */
    get headerFooter(): HeaderFooter | undefined;
    /** AutoFilter Settings. */
    get autoFilter(): AutoFilter | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Worksheet View. Serialized as `x:sheetView` */
export declare class SheetView extends OxmlCompositeElement<Pane | Selection | PivotSelection | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Window Protection. Serialized as `:windowProtection` */
    get windowProtection(): BooleanValue | undefined;
    set windowProtection(v: BooleanValue | undefined);
    /** Show Formulas. Serialized as `:showFormulas` */
    get showFormulas(): BooleanValue | undefined;
    set showFormulas(v: BooleanValue | undefined);
    /** Show Grid Lines. Serialized as `:showGridLines` */
    get showGridLines(): BooleanValue | undefined;
    set showGridLines(v: BooleanValue | undefined);
    /** Show Headers. Serialized as `:showRowColHeaders` */
    get showRowColHeaders(): BooleanValue | undefined;
    set showRowColHeaders(v: BooleanValue | undefined);
    /** Show Zero Values. Serialized as `:showZeros` */
    get showZeros(): BooleanValue | undefined;
    set showZeros(v: BooleanValue | undefined);
    /** Right To Left. Serialized as `:rightToLeft` */
    get rightToLeft(): BooleanValue | undefined;
    set rightToLeft(v: BooleanValue | undefined);
    /** Sheet Tab Selected. Serialized as `:tabSelected` */
    get tabSelected(): BooleanValue | undefined;
    set tabSelected(v: BooleanValue | undefined);
    /** Show Ruler. Serialized as `:showRuler` */
    get showRuler(): BooleanValue | undefined;
    set showRuler(v: BooleanValue | undefined);
    /** Show Outline Symbols. Serialized as `:showOutlineSymbols` */
    get showOutlineSymbols(): BooleanValue | undefined;
    set showOutlineSymbols(v: BooleanValue | undefined);
    /** Default Grid Color. Serialized as `:defaultGridColor` */
    get defaultGridColor(): BooleanValue | undefined;
    set defaultGridColor(v: BooleanValue | undefined);
    /** Show White Space. Serialized as `:showWhiteSpace` */
    get showWhiteSpace(): BooleanValue | undefined;
    set showWhiteSpace(v: BooleanValue | undefined);
    /** View Type. Serialized as `:view` */
    get view(): SheetViewValues | undefined;
    set view(v: SheetViewValues | undefined);
    /** Top Left Visible Cell. Serialized as `:topLeftCell` */
    get topLeftCell(): StringValue | undefined;
    set topLeftCell(v: StringValue | undefined);
    /** Color Id. Serialized as `:colorId` */
    get colorId(): UInt32Value | undefined;
    set colorId(v: UInt32Value | undefined);
    /** Zoom Scale. Serialized as `:zoomScale` */
    get zoomScale(): UInt32Value | undefined;
    set zoomScale(v: UInt32Value | undefined);
    /** Zoom Scale Normal View. Serialized as `:zoomScaleNormal` */
    get zoomScaleNormal(): UInt32Value | undefined;
    set zoomScaleNormal(v: UInt32Value | undefined);
    /** Zoom Scale Page Break Preview. Serialized as `:zoomScaleSheetLayoutView` */
    get zoomScaleSheetLayoutView(): UInt32Value | undefined;
    set zoomScaleSheetLayoutView(v: UInt32Value | undefined);
    /** Zoom Scale Page Layout View. Serialized as `:zoomScalePageLayoutView` */
    get zoomScalePageLayoutView(): UInt32Value | undefined;
    set zoomScalePageLayoutView(v: UInt32Value | undefined);
    /** Workbook View Index. Serialized as `:workbookViewId` */
    get workbookViewId(): UInt32Value | undefined;
    set workbookViewId(v: UInt32Value | undefined);
    /** View Pane. */
    get pane(): Pane | undefined;
}
/** Data Validation. Serialized as `x:dataValidation` */
export declare class DataValidation extends OxmlCompositeElement<X12acList | Formula1 | Formula2> {
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
    /** Returns Formula1. */
    get formula1(): Formula1 | undefined;
    /** Returns Formula2. */
    get formula2(): Formula2 | undefined;
}
/** Merged Cell. Serialized as `x:mergeCell` */
export declare class MergeCell extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Ignored Error. Serialized as `x:ignoredError` */
export declare class IgnoredError extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sequence of References. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
    /** Evaluation Error. Serialized as `:evalError` */
    get evalError(): BooleanValue | undefined;
    set evalError(v: BooleanValue | undefined);
    /** Two Digit Text Year. Serialized as `:twoDigitTextYear` */
    get twoDigitTextYear(): BooleanValue | undefined;
    set twoDigitTextYear(v: BooleanValue | undefined);
    /** Number Stored As Text. Serialized as `:numberStoredAsText` */
    get numberStoredAsText(): BooleanValue | undefined;
    set numberStoredAsText(v: BooleanValue | undefined);
    /** Formula. Serialized as `:formula` */
    get formula(): BooleanValue | undefined;
    set formula(v: BooleanValue | undefined);
    /** Formula Range. Serialized as `:formulaRange` */
    get formulaRange(): BooleanValue | undefined;
    set formulaRange(v: BooleanValue | undefined);
    /** Unlocked Formula. Serialized as `:unlockedFormula` */
    get unlockedFormula(): BooleanValue | undefined;
    set unlockedFormula(v: BooleanValue | undefined);
    /** Empty Cell Reference. Serialized as `:emptyCellReference` */
    get emptyCellReference(): BooleanValue | undefined;
    set emptyCellReference(v: BooleanValue | undefined);
    /** List Data Validation. Serialized as `:listDataValidation` */
    get listDataValidation(): BooleanValue | undefined;
    set listDataValidation(v: BooleanValue | undefined);
    /** Calculated Column. Serialized as `:calculatedColumn` */
    get calculatedColumn(): BooleanValue | undefined;
    set calculatedColumn(v: BooleanValue | undefined);
}
/** Embedded Control. Serialized as `x:control` */
export declare class Control extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    static _A: string[];
    /** Shape Id. Serialized as `:shapeId` */
    get shapeId(): UInt32Value | undefined;
    set shapeId(v: UInt32Value | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Control Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Input Cells. Serialized as `x:inputCells` */
export declare class InputCells extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Deleted. Serialized as `:deleted` */
    get deleted(): BooleanValue | undefined;
    set deleted(v: BooleanValue | undefined);
    /** Undone. Serialized as `:undone` */
    get undone(): BooleanValue | undefined;
    set undone(v: BooleanValue | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Number Format Id. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
}
/** Custom Chart Sheet View. Serialized as `x:customSheetView` */
export declare class CustomChartsheetView extends OxmlCompositeElement<PageMargins | ChartSheetPageSetup | HeaderFooter> {
    static _Q: string;
    static _A: string[];
    /** GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** Print Scale. Serialized as `:scale` */
    get scale(): UInt32Value | undefined;
    set scale(v: UInt32Value | undefined);
    /** Visible State. Serialized as `:state` */
    get state(): SheetStateValues | undefined;
    set state(v: SheetStateValues | undefined);
    /** Zoom To Fit. Serialized as `:zoomToFit` */
    get zoomToFit(): BooleanValue | undefined;
    set zoomToFit(v: BooleanValue | undefined);
    /** Returns PageMargins. */
    get pageMargins(): PageMargins | undefined;
    /** Chart Sheet Page Setup. */
    get chartSheetPageSetup(): ChartSheetPageSetup | undefined;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
}
/** Chart Sheet View. Serialized as `x:sheetView` */
export declare class ChartSheetView extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Sheet Tab Selected. Serialized as `:tabSelected` */
    get tabSelected(): BooleanValue | undefined;
    set tabSelected(v: BooleanValue | undefined);
    /** Window Zoom Scale. Serialized as `:zoomScale` */
    get zoomScale(): UInt32Value | undefined;
    set zoomScale(v: UInt32Value | undefined);
    /** Workbook View Id. Serialized as `:workbookViewId` */
    get workbookViewId(): UInt32Value | undefined;
    set workbookViewId(v: UInt32Value | undefined);
    /** Zoom To Fit. Serialized as `:zoomToFit` */
    get zoomToFit(): BooleanValue | undefined;
    set zoomToFit(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Table Part. Serialized as `x:tablePart` */
export declare class TablePart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Web Publishing Item. Serialized as `x:webPublishItem` */
export declare class WebPublishItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Destination Bookmark. Serialized as `:divId` */
    get divId(): StringValue | undefined;
    set divId(v: StringValue | undefined);
    /** Web Source Type. Serialized as `:sourceType` */
    get sourceType(): WebSourceValues | undefined;
    set sourceType(v: WebSourceValues | undefined);
    /** Source Id. Serialized as `:sourceRef` */
    get sourceRef(): StringValue | undefined;
    set sourceRef(v: StringValue | undefined);
    /** Source Object Name. Serialized as `:sourceObject` */
    get sourceObject(): StringValue | undefined;
    set sourceObject(v: StringValue | undefined);
    /** Destination File Name. Serialized as `:destinationFile` */
    get destinationFile(): StringValue | undefined;
    set destinationFile(v: StringValue | undefined);
    /** Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Automatically Publish. Serialized as `:autoRepublish` */
    get autoRepublish(): BooleanValue | undefined;
    set autoRepublish(v: BooleanValue | undefined);
}
/** Custom Property. Serialized as `x:customPr` */
export declare class CustomProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Custom Property Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Chart Sheet Page Setup. Serialized as `x:pageSetup` */
export declare class ChartSheetPageSetup extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Paper Size. Serialized as `:paperSize` */
    get paperSize(): UInt32Value | undefined;
    set paperSize(v: UInt32Value | undefined);
    /** First Page Number. Serialized as `:firstPageNumber` */
    get firstPageNumber(): UInt32Value | undefined;
    set firstPageNumber(v: UInt32Value | undefined);
    /** Orientation. Serialized as `:orientation` */
    get orientation(): OrientationValues | undefined;
    set orientation(v: OrientationValues | undefined);
    /** Use Printer Defaults. Serialized as `:usePrinterDefaults` */
    get usePrinterDefaults(): BooleanValue | undefined;
    set usePrinterDefaults(v: BooleanValue | undefined);
    /** Black And White. Serialized as `:blackAndWhite` */
    get blackAndWhite(): BooleanValue | undefined;
    set blackAndWhite(v: BooleanValue | undefined);
    /** Draft. Serialized as `:draft` */
    get draft(): BooleanValue | undefined;
    set draft(v: BooleanValue | undefined);
    /** Use First Page Number. Serialized as `:useFirstPageNumber` */
    get useFirstPageNumber(): BooleanValue | undefined;
    set useFirstPageNumber(v: BooleanValue | undefined);
    /** Horizontal DPI. Serialized as `:horizontalDpi` */
    get horizontalDpi(): UInt32Value | undefined;
    set horizontalDpi(v: UInt32Value | undefined);
    /** Vertical DPI. Serialized as `:verticalDpi` */
    get verticalDpi(): UInt32Value | undefined;
    set verticalDpi(v: UInt32Value | undefined);
    /** Number Of Copies. Serialized as `:copies` */
    get copies(): UInt32Value | undefined;
    set copies(v: UInt32Value | undefined);
    /** Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Cell Watch Item. Serialized as `x:cellWatch` */
export declare class CellWatch extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
}
/** Protected Range. Serialized as `x:protectedRange` */
export declare class ProtectedRange extends OxmlLeafElement {
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
    /** sqref. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** securityDescriptor. Serialized as `:securityDescriptor` */
    get securityDescriptor(): StringValue | undefined;
    set securityDescriptor(v: StringValue | undefined);
}
/** Scenario. Serialized as `x:scenario` */
export declare class Scenario extends OxmlCompositeElement<InputCells> {
    static _Q: string;
    static _A: string[];
    /** Scenario Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Scenario Locked. Serialized as `:locked` */
    get locked(): BooleanValue | undefined;
    set locked(v: BooleanValue | undefined);
    /** Hidden Scenario. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Changing Cell Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** User Name. Serialized as `:user` */
    get user(): StringValue | undefined;
    set user(v: StringValue | undefined);
    /** Scenario Comment. Serialized as `:comment` */
    get comment(): StringValue | undefined;
    set comment(v: StringValue | undefined);
}
/** Conditional Format Value Object. Serialized as `x:cfvo` */
export declare class ConditionalFormatValueObject extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Type. Serialized as `:type` */
    get type(): ConditionalFormatValueObjectValues | undefined;
    set type(v: ConditionalFormatValueObjectValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Greater Than Or Equal. Serialized as `:gte` */
    get greaterThanOrEqual(): BooleanValue | undefined;
    set greaterThanOrEqual(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Hyperlink. Serialized as `x:hyperlink` */
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
/** Conditional Formatting Rule. Serialized as `x:cfRule` */
export declare class ConditionalFormattingRule extends OxmlCompositeElement<Formula | ColorScale | DataBar | IconSet | ConditionalFormattingRuleExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Type. Serialized as `:type` */
    get type(): ConditionalFormatValues | undefined;
    set type(v: ConditionalFormatValues | undefined);
    /** Differential Formatting Id. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** Priority. Serialized as `:priority` */
    get priority(): Int32Value | undefined;
    set priority(v: Int32Value | undefined);
    /** Stop If True. Serialized as `:stopIfTrue` */
    get stopIfTrue(): BooleanValue | undefined;
    set stopIfTrue(v: BooleanValue | undefined);
    /** Above Or Below Average. Serialized as `:aboveAverage` */
    get aboveAverage(): BooleanValue | undefined;
    set aboveAverage(v: BooleanValue | undefined);
    /** Top 10 Percent. Serialized as `:percent` */
    get percent(): BooleanValue | undefined;
    set percent(v: BooleanValue | undefined);
    /** Bottom N. Serialized as `:bottom` */
    get bottom(): BooleanValue | undefined;
    set bottom(v: BooleanValue | undefined);
    /** Operator. Serialized as `:operator` */
    get operator(): ConditionalFormattingOperatorValues | undefined;
    set operator(v: ConditionalFormattingOperatorValues | undefined);
    /** Text. Serialized as `:text` */
    get text(): StringValue | undefined;
    set text(v: StringValue | undefined);
    /** Time Period. Serialized as `:timePeriod` */
    get timePeriod(): TimePeriodValues | undefined;
    set timePeriod(v: TimePeriodValues | undefined);
    /** Rank. Serialized as `:rank` */
    get rank(): UInt32Value | undefined;
    set rank(v: UInt32Value | undefined);
    /** StdDev. Serialized as `:stdDev` */
    get stdDev(): Int32Value | undefined;
    set stdDev(v: Int32Value | undefined);
    /** Equal Average. Serialized as `:equalAverage` */
    get equalAverage(): BooleanValue | undefined;
    set equalAverage(v: BooleanValue | undefined);
}
/** AutoFilter Settings. Serialized as `x:autoFilter` */
export declare class AutoFilter extends OxmlCompositeElement<FilterColumn | SortState | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Cell or Range Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Header Footer Settings. Serialized as `x:headerFooter` */
export declare class HeaderFooter extends OxmlCompositeElement<OddHeader | OddFooter | EvenHeader | EvenFooter | FirstHeader | FirstFooter> {
    static _Q: string;
    static _A: string[];
    /** Different Odd Even Header Footer. Serialized as `:differentOddEven` */
    get differentOddEven(): BooleanValue | undefined;
    set differentOddEven(v: BooleanValue | undefined);
    /** Different First Page. Serialized as `:differentFirst` */
    get differentFirst(): BooleanValue | undefined;
    set differentFirst(v: BooleanValue | undefined);
    /** Scale Header and Footer With Document. Serialized as `:scaleWithDoc` */
    get scaleWithDoc(): BooleanValue | undefined;
    set scaleWithDoc(v: BooleanValue | undefined);
    /** Align Margins. Serialized as `:alignWithMargins` */
    get alignWithMargins(): BooleanValue | undefined;
    set alignWithMargins(v: BooleanValue | undefined);
    /** Odd Header. */
    get oddHeader(): OddHeader | undefined;
    /** Odd Page Footer. */
    get oddFooter(): OddFooter | undefined;
    /** Even Page Header. */
    get evenHeader(): EvenHeader | undefined;
    /** Even Page Footer. */
    get evenFooter(): EvenFooter | undefined;
    /** First Page Header. */
    get firstHeader(): FirstHeader | undefined;
    /** First Page Footer. */
    get firstFooter(): FirstFooter | undefined;
}
/** Page Setup Settings. Serialized as `x:pageSetup` */
export declare class PageSetup extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Paper Size. Serialized as `:paperSize` */
    get paperSize(): UInt32Value | undefined;
    set paperSize(v: UInt32Value | undefined);
    /** Print Scale. Serialized as `:scale` */
    get scale(): UInt32Value | undefined;
    set scale(v: UInt32Value | undefined);
    /** First Page Number. Serialized as `:firstPageNumber` */
    get firstPageNumber(): UInt32Value | undefined;
    set firstPageNumber(v: UInt32Value | undefined);
    /** Fit To Width. Serialized as `:fitToWidth` */
    get fitToWidth(): UInt32Value | undefined;
    set fitToWidth(v: UInt32Value | undefined);
    /** Fit To Height. Serialized as `:fitToHeight` */
    get fitToHeight(): UInt32Value | undefined;
    set fitToHeight(v: UInt32Value | undefined);
    /** Page Order. Serialized as `:pageOrder` */
    get pageOrder(): PageOrderValues | undefined;
    set pageOrder(v: PageOrderValues | undefined);
    /** Orientation. Serialized as `:orientation` */
    get orientation(): OrientationValues | undefined;
    set orientation(v: OrientationValues | undefined);
    /** Use Printer Defaults. Serialized as `:usePrinterDefaults` */
    get usePrinterDefaults(): BooleanValue | undefined;
    set usePrinterDefaults(v: BooleanValue | undefined);
    /** Black And White. Serialized as `:blackAndWhite` */
    get blackAndWhite(): BooleanValue | undefined;
    set blackAndWhite(v: BooleanValue | undefined);
    /** Draft. Serialized as `:draft` */
    get draft(): BooleanValue | undefined;
    set draft(v: BooleanValue | undefined);
    /** Print Cell Comments. Serialized as `:cellComments` */
    get cellComments(): CellCommentsValues | undefined;
    set cellComments(v: CellCommentsValues | undefined);
    /** Use First Page Number. Serialized as `:useFirstPageNumber` */
    get useFirstPageNumber(): BooleanValue | undefined;
    set useFirstPageNumber(v: BooleanValue | undefined);
    /** Print Error Handling. Serialized as `:errors` */
    get errors(): PrintErrorValues | undefined;
    set errors(v: PrintErrorValues | undefined);
    /** Horizontal DPI. Serialized as `:horizontalDpi` */
    get horizontalDpi(): UInt32Value | undefined;
    set horizontalDpi(v: UInt32Value | undefined);
    /** Vertical DPI. Serialized as `:verticalDpi` */
    get verticalDpi(): UInt32Value | undefined;
    set verticalDpi(v: UInt32Value | undefined);
    /** Number Of Copies. Serialized as `:copies` */
    get copies(): UInt32Value | undefined;
    set copies(v: UInt32Value | undefined);
    /** Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Print Options. Serialized as `x:printOptions` */
export declare class PrintOptions extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Horizontal Centered. Serialized as `:horizontalCentered` */
    get horizontalCentered(): BooleanValue | undefined;
    set horizontalCentered(v: BooleanValue | undefined);
    /** Vertical Centered. Serialized as `:verticalCentered` */
    get verticalCentered(): BooleanValue | undefined;
    set verticalCentered(v: BooleanValue | undefined);
    /** Print Headings. Serialized as `:headings` */
    get headings(): BooleanValue | undefined;
    set headings(v: BooleanValue | undefined);
    /** Print Grid Lines. Serialized as `:gridLines` */
    get gridLines(): BooleanValue | undefined;
    set gridLines(v: BooleanValue | undefined);
    /** Grid Lines Set. Serialized as `:gridLinesSet` */
    get gridLinesSet(): BooleanValue | undefined;
    set gridLinesSet(v: BooleanValue | undefined);
}
/** Page Margins. Serialized as `x:pageMargins` */
export declare class PageMargins extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Left Page Margin. Serialized as `:left` */
    get left(): DoubleValue | undefined;
    set left(v: DoubleValue | undefined);
    /** Right Page Margin. Serialized as `:right` */
    get right(): DoubleValue | undefined;
    set right(v: DoubleValue | undefined);
    /** Top Page Margin. Serialized as `:top` */
    get top(): DoubleValue | undefined;
    set top(v: DoubleValue | undefined);
    /** Bottom Page Margin. Serialized as `:bottom` */
    get bottom(): DoubleValue | undefined;
    set bottom(v: DoubleValue | undefined);
    /** Header Page Margin. Serialized as `:header` */
    get header(): DoubleValue | undefined;
    set header(v: DoubleValue | undefined);
    /** Footer Page Margin. Serialized as `:footer` */
    get footer(): DoubleValue | undefined;
    set footer(v: DoubleValue | undefined);
}
/** Defines the PageBreakType Class. */
export declare abstract class PageBreakType extends OxmlCompositeElement<Break> {
    static _A: string[];
    /** Page Break Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Manual Break Count. Serialized as `:manualBreakCount` */
    get manualBreakCount(): UInt32Value | undefined;
    set manualBreakCount(v: UInt32Value | undefined);
}
/** Vertical Page Breaks. Serialized as `x:colBreaks` */
export declare class ColumnBreaks extends PageBreakType {
    static _Q: string;
}
/** Horizontal Page Breaks. Serialized as `x:rowBreaks` */
export declare class RowBreaks extends PageBreakType {
    static _Q: string;
}
/** Data Consolidation Reference. Serialized as `x:dataRef` */
export declare class DataReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Named Range. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Sheet Name. Serialized as `:sheet` */
    get sheet(): StringValue | undefined;
    set sheet(v: StringValue | undefined);
    /** relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Break. Serialized as `x:brk` */
export declare class Break extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Minimum. Serialized as `:min` */
    get min(): UInt32Value | undefined;
    set min(v: UInt32Value | undefined);
    /** Maximum. Serialized as `:max` */
    get max(): UInt32Value | undefined;
    set max(v: UInt32Value | undefined);
    /** Manual Page Break. Serialized as `:man` */
    get manualPageBreak(): BooleanValue | undefined;
    set manualPageBreak(v: BooleanValue | undefined);
    /** Pivot-Created Page Break. Serialized as `:pt` */
    get pivotTablePageBreak(): BooleanValue | undefined;
    set pivotTablePageBreak(v: BooleanValue | undefined);
}
/** PivotTable Selection. Serialized as `x:pivotSelection` */
export declare class PivotSelection extends OxmlCompositeElement<PivotArea> {
    static _Q: string;
    static _A: string[];
    /** Pane. Serialized as `:pane` */
    get pane(): PaneValues | undefined;
    set pane(v: PaneValues | undefined);
    /** Show Header. Serialized as `:showHeader` */
    get showHeader(): BooleanValue | undefined;
    set showHeader(v: BooleanValue | undefined);
    /** Label. Serialized as `:label` */
    get label(): BooleanValue | undefined;
    set label(v: BooleanValue | undefined);
    /** Data Selection. Serialized as `:data` */
    get data(): BooleanValue | undefined;
    set data(v: BooleanValue | undefined);
    /** Extendable. Serialized as `:extendable` */
    get extendable(): BooleanValue | undefined;
    set extendable(v: BooleanValue | undefined);
    /** Selection Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Axis. Serialized as `:axis` */
    get axis(): PivotTableAxisValues | undefined;
    set axis(v: PivotTableAxisValues | undefined);
    /** Dimension. Serialized as `:dimension` */
    get dimension(): UInt32Value | undefined;
    set dimension(v: UInt32Value | undefined);
    /** Start. Serialized as `:start` */
    get start(): UInt32Value | undefined;
    set start(v: UInt32Value | undefined);
    /** Minimum. Serialized as `:min` */
    get min(): UInt32Value | undefined;
    set min(v: UInt32Value | undefined);
    /** Maximum. Serialized as `:max` */
    get max(): UInt32Value | undefined;
    set max(v: UInt32Value | undefined);
    /** Active Row. Serialized as `:activeRow` */
    get activeRow(): UInt32Value | undefined;
    set activeRow(v: UInt32Value | undefined);
    /** Active Column. Serialized as `:activeCol` */
    get activeColumn(): UInt32Value | undefined;
    set activeColumn(v: UInt32Value | undefined);
    /** Previous Row. Serialized as `:previousRow` */
    get previousRow(): UInt32Value | undefined;
    set previousRow(v: UInt32Value | undefined);
    /** Previous Column Selection. Serialized as `:previousCol` */
    get previousColumn(): UInt32Value | undefined;
    set previousColumn(v: UInt32Value | undefined);
    /** Click Count. Serialized as `:click` */
    get click(): UInt32Value | undefined;
    set click(v: UInt32Value | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Pivot Area. */
    get pivotArea(): PivotArea | undefined;
}
/** Selection. Serialized as `x:selection` */
export declare class Selection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Pane. Serialized as `:pane` */
    get pane(): PaneValues | undefined;
    set pane(v: PaneValues | undefined);
    /** Active Cell Location. Serialized as `:activeCell` */
    get activeCell(): StringValue | undefined;
    set activeCell(v: StringValue | undefined);
    /** Active Cell Index. Serialized as `:activeCellId` */
    get activeCellId(): UInt32Value | undefined;
    set activeCellId(v: UInt32Value | undefined);
    /** Sequence of References. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
}
/** View Pane. Serialized as `x:pane` */
export declare class Pane extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Horizontal Split Position. Serialized as `:xSplit` */
    get horizontalSplit(): DoubleValue | undefined;
    set horizontalSplit(v: DoubleValue | undefined);
    /** Vertical Split Position. Serialized as `:ySplit` */
    get verticalSplit(): DoubleValue | undefined;
    set verticalSplit(v: DoubleValue | undefined);
    /** Top Left Visible Cell. Serialized as `:topLeftCell` */
    get topLeftCell(): StringValue | undefined;
    set topLeftCell(v: StringValue | undefined);
    /** Active Pane. Serialized as `:activePane` */
    get activePane(): PaneValues | undefined;
    set activePane(v: PaneValues | undefined);
    /** Split State. Serialized as `:state` */
    get state(): PaneStateValues | undefined;
    set state(v: PaneStateValues | undefined);
}
/** Page Setup Properties. Serialized as `x:pageSetUpPr` */
export declare class PageSetupProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Show Auto Page Breaks. Serialized as `:autoPageBreaks` */
    get autoPageBreaks(): BooleanValue | undefined;
    set autoPageBreaks(v: BooleanValue | undefined);
    /** Fit To Page. Serialized as `:fitToPage` */
    get fitToPage(): BooleanValue | undefined;
    set fitToPage(v: BooleanValue | undefined);
}
/** Outline Properties. Serialized as `x:outlinePr` */
export declare class OutlineProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Apply Styles in Outline. Serialized as `:applyStyles` */
    get applyStyles(): BooleanValue | undefined;
    set applyStyles(v: BooleanValue | undefined);
    /** Summary Below. Serialized as `:summaryBelow` */
    get summaryBelow(): BooleanValue | undefined;
    set summaryBelow(v: BooleanValue | undefined);
    /** Summary Right. Serialized as `:summaryRight` */
    get summaryRight(): BooleanValue | undefined;
    set summaryRight(v: BooleanValue | undefined);
    /** Show Outline Symbols. Serialized as `:showOutlineSymbols` */
    get showOutlineSymbols(): BooleanValue | undefined;
    set showOutlineSymbols(v: BooleanValue | undefined);
}
/** Column Width and Formatting. Serialized as `x:col` */
export declare class Column extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Minimum Column. Serialized as `:min` */
    get min(): UInt32Value | undefined;
    set min(v: UInt32Value | undefined);
    /** Maximum Column. Serialized as `:max` */
    get max(): UInt32Value | undefined;
    set max(v: UInt32Value | undefined);
    /** Column Width. Serialized as `:width` */
    get width(): DoubleValue | undefined;
    set width(v: DoubleValue | undefined);
    /** Style. Serialized as `:style` */
    get style(): UInt32Value | undefined;
    set style(v: UInt32Value | undefined);
    /** Hidden Columns. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Best Fit Column Width. Serialized as `:bestFit` */
    get bestFit(): BooleanValue | undefined;
    set bestFit(v: BooleanValue | undefined);
    /** Custom Width. Serialized as `:customWidth` */
    get customWidth(): BooleanValue | undefined;
    set customWidth(v: BooleanValue | undefined);
    /** Show Phonetic Information. Serialized as `:phonetic` */
    get phonetic(): BooleanValue | undefined;
    set phonetic(v: BooleanValue | undefined);
    /** Outline Level. Serialized as `:outlineLevel` */
    get outlineLevel(): ByteValue | undefined;
    set outlineLevel(v: ByteValue | undefined);
    /** Collapsed. Serialized as `:collapsed` */
    get collapsed(): BooleanValue | undefined;
    set collapsed(v: BooleanValue | undefined);
}
/** Row. Serialized as `x:row` */
export declare class Row extends OxmlCompositeElement<Cell | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Row Index. Serialized as `:r` */
    get rowIndex(): UInt32Value | undefined;
    set rowIndex(v: UInt32Value | undefined);
    /** Spans. Serialized as `:spans` */
    get spans(): ListValue<StringValue> | undefined;
    set spans(v: ListValue<StringValue> | undefined);
    /** Style Index. Serialized as `:s` */
    get styleIndex(): UInt32Value | undefined;
    set styleIndex(v: UInt32Value | undefined);
    /** Custom Format. Serialized as `:customFormat` */
    get customFormat(): BooleanValue | undefined;
    set customFormat(v: BooleanValue | undefined);
    /** Row Height. Serialized as `:ht` */
    get height(): DoubleValue | undefined;
    set height(v: DoubleValue | undefined);
    /** Hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Custom Height. Serialized as `:customHeight` */
    get customHeight(): BooleanValue | undefined;
    set customHeight(v: BooleanValue | undefined);
    /** Outline Level. Serialized as `:outlineLevel` */
    get outlineLevel(): ByteValue | undefined;
    set outlineLevel(v: ByteValue | undefined);
    /** Collapsed. Serialized as `:collapsed` */
    get collapsed(): BooleanValue | undefined;
    set collapsed(v: BooleanValue | undefined);
    /** Thick Top Border. Serialized as `:thickTop` */
    get thickTop(): BooleanValue | undefined;
    set thickTop(v: BooleanValue | undefined);
    /** Thick Bottom. Serialized as `:thickBot` */
    get thickBot(): BooleanValue | undefined;
    set thickBot(v: BooleanValue | undefined);
    /** Show Phonetic. Serialized as `:ph` */
    get showPhonetic(): BooleanValue | undefined;
    set showPhonetic(v: BooleanValue | undefined);
    /** dyDescent. Serialized as `x14ac:dyDescent` */
    get dyDescent(): DoubleValue | undefined;
    set dyDescent(v: DoubleValue | undefined);
}
/** User Information. Serialized as `x:userInfo` */
export declare class UserInfo extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** User Revisions GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** User Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** User Id. Serialized as `:id` */
    get id(): Int32Value | undefined;
    set id(v: Int32Value | undefined);
    /** Date Time. Serialized as `:dateTime` */
    get dateTime(): DateTimeValue | undefined;
    set dateTime(v: DateTimeValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Formula. Serialized as `x:f` */
export declare class CellFormula extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** Formula Type. Serialized as `:t` */
    get formulaType(): CellFormulaValues | undefined;
    set formulaType(v: CellFormulaValues | undefined);
    /** Always Calculate Array. Serialized as `:aca` */
    get alwaysCalculateArray(): BooleanValue | undefined;
    set alwaysCalculateArray(v: BooleanValue | undefined);
    /** Range of Cells. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Data Table 2-D. Serialized as `:dt2D` */
    get dataTable2D(): BooleanValue | undefined;
    set dataTable2D(v: BooleanValue | undefined);
    /** Data Table Row. Serialized as `:dtr` */
    get dataTableRow(): BooleanValue | undefined;
    set dataTableRow(v: BooleanValue | undefined);
    /** Input 1 Deleted. Serialized as `:del1` */
    get input1Deleted(): BooleanValue | undefined;
    set input1Deleted(v: BooleanValue | undefined);
    /** Input 2 Deleted. Serialized as `:del2` */
    get input2Deleted(): BooleanValue | undefined;
    set input2Deleted(v: BooleanValue | undefined);
    /** Data Table Cell 1. Serialized as `:r1` */
    get r1(): StringValue | undefined;
    set r1(v: StringValue | undefined);
    /** Input Cell 2. Serialized as `:r2` */
    get r2(): StringValue | undefined;
    set r2(v: StringValue | undefined);
    /** Calculate Cell. Serialized as `:ca` */
    get calculateCell(): BooleanValue | undefined;
    set calculateCell(v: BooleanValue | undefined);
    /** Shared Group Index. Serialized as `:si` */
    get sharedIndex(): UInt32Value | undefined;
    set sharedIndex(v: UInt32Value | undefined);
    /** Assigns Value to Name. Serialized as `:bx` */
    get bx(): BooleanValue | undefined;
    set bx(v: BooleanValue | undefined);
    /** Content Contains Significant Whitespace. Serialized as `xml:space` */
    get space(): SpaceProcessingModeValues | undefined;
    set space(v: SpaceProcessingModeValues | undefined);
}
/** Sheet Id. Serialized as `x:sheetId` */
export declare class SheetId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sheet Id. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the DifferentialFormatType Class. */
export declare abstract class DifferentialFormatType extends OxmlCompositeElement<Font | NumberingFormat | Fill | Alignment | Border | Protection | ExtensionList> {
    /** Font Properties. */
    get font(): Font | undefined;
    /** Number Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Fill. */
    get fill(): Fill | undefined;
    /** Alignment. */
    get alignment(): Alignment | undefined;
    /** Border Properties. */
    get border(): Border | undefined;
    /** Protection Properties. */
    get protection(): Protection | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Formatting. Serialized as `x:dxf` */
export declare class DifferentialFormat extends DifferentialFormatType {
    static _Q: string;
}
/** New Formatting Information. Serialized as `x:ndxf` */
export declare class NewDifferentialFormat extends DifferentialFormatType {
    static _Q: string;
}
/** Old Formatting Information. Serialized as `x:odxf` */
export declare class OldDifferentialFormat extends DifferentialFormatType {
    static _Q: string;
}
/** New Cell Data. Serialized as `x:nc` */
export declare class NewCell extends OxmlCompositeElement<CellFormula | CellValue | InlineString | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Style Index. Serialized as `:s` */
    get styleIndex(): UInt32Value | undefined;
    set styleIndex(v: UInt32Value | undefined);
    /** Cell Data Type. Serialized as `:t` */
    get dataType(): CellValues | undefined;
    set dataType(v: CellValues | undefined);
    /** Cell Metadata Index. Serialized as `:cm` */
    get cellMetaIndex(): UInt32Value | undefined;
    set cellMetaIndex(v: UInt32Value | undefined);
    /** Value Metadata Index. Serialized as `:vm` */
    get valueMetaIndex(): UInt32Value | undefined;
    set valueMetaIndex(v: UInt32Value | undefined);
    /** Show Phonetic. Serialized as `:ph` */
    get showPhonetic(): BooleanValue | undefined;
    set showPhonetic(v: BooleanValue | undefined);
    /** Formula. */
    get cellFormula(): CellFormula | undefined;
    /** Cell Value. */
    get cellValue(): CellValue | undefined;
    /** Rich Text Inline. */
    get inlineString(): InlineString | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the CellType Class. */
export declare abstract class CellType extends OxmlCompositeElement<CellFormula | CellValue | InlineString | ExtensionList> {
    static _A: string[];
    /** Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Style Index. Serialized as `:s` */
    get styleIndex(): UInt32Value | undefined;
    set styleIndex(v: UInt32Value | undefined);
    /** Cell Data Type. Serialized as `:t` */
    get dataType(): CellValues | undefined;
    set dataType(v: CellValues | undefined);
    /** Cell Metadata Index. Serialized as `:cm` */
    get cellMetaIndex(): UInt32Value | undefined;
    set cellMetaIndex(v: UInt32Value | undefined);
    /** Value Metadata Index. Serialized as `:vm` */
    get valueMetaIndex(): UInt32Value | undefined;
    set valueMetaIndex(v: UInt32Value | undefined);
    /** Show Phonetic. Serialized as `:ph` */
    get showPhonetic(): BooleanValue | undefined;
    set showPhonetic(v: BooleanValue | undefined);
    /** Formula. */
    get cellFormula(): CellFormula | undefined;
    /** Cell Value. */
    get cellValue(): CellValue | undefined;
    /** Rich Text Inline. */
    get inlineString(): InlineString | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Cell. Serialized as `x:c` */
export declare class Cell extends CellType {
    static _Q: string;
}
/** Old Cell Data. Serialized as `x:oc` */
export declare class OldCell extends CellType {
    static _Q: string;
}
/** Undo. Serialized as `x:undo` */
export declare class Undo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Index. Serialized as `:index` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Expression. Serialized as `:exp` */
    get expression(): FormulaExpressionValues | undefined;
    set expression(v: FormulaExpressionValues | undefined);
    /** Reference 3D. Serialized as `:ref3D` */
    get reference3D(): BooleanValue | undefined;
    set reference3D(v: BooleanValue | undefined);
    /** Array Entered. Serialized as `:array` */
    get array(): BooleanValue | undefined;
    set array(v: BooleanValue | undefined);
    /** Value Needed. Serialized as `:v` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
    /** Defined Name Formula. Serialized as `:nf` */
    get definedNameFormula(): BooleanValue | undefined;
    set definedNameFormula(v: BooleanValue | undefined);
    /** Cross Sheet Move. Serialized as `:cs` */
    get crossSheetMove(): BooleanValue | undefined;
    set crossSheetMove(v: BooleanValue | undefined);
    /** Range. Serialized as `:dr` */
    get deletedRange(): StringValue | undefined;
    set deletedRange(v: StringValue | undefined);
    /** Defined Name. Serialized as `:dn` */
    get definedName(): StringValue | undefined;
    set definedName(v: StringValue | undefined);
    /** Cell Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Sheet Id. Serialized as `:sId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
}
/** Reviewed. Serialized as `x:reviewed` */
export declare class Reviewed extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
}
/** Reviewed List. Serialized as `x:reviewedList` */
export declare class ReviewedList extends OxmlCompositeElement<Reviewed> {
    static _Q: string;
    static _A: string[];
    /** Reviewed Revisions Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Sheet Id Map. Serialized as `x:sheetIdMap` */
export declare class SheetIdMap extends OxmlCompositeElement<SheetId> {
    static _Q: string;
    static _A: string[];
    /** Sheet Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Revision Merge Conflict. Serialized as `x:rcft` */
export declare class RevisionConflict extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
}
/** Revision Query Table. Serialized as `x:rqt` */
export declare class RevisionQueryTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** QueryTable Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Field Id. Serialized as `:fieldId` */
    get fieldId(): UInt32Value | undefined;
    set fieldId(v: UInt32Value | undefined);
}
/** Revision Cell Comment. Serialized as `x:rcmt` */
export declare class RevisionComment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Cell. Serialized as `:cell` */
    get cell(): StringValue | undefined;
    set cell(v: StringValue | undefined);
    /** GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** User Action. Serialized as `:action` */
    get action(): RevisionActionValues | undefined;
    set action(v: RevisionActionValues | undefined);
    /** Always Show Comment. Serialized as `:alwaysShow` */
    get alwaysShow(): BooleanValue | undefined;
    set alwaysShow(v: BooleanValue | undefined);
    /** Old Comment. Serialized as `:old` */
    get old(): BooleanValue | undefined;
    set old(v: BooleanValue | undefined);
    /** Comment In Hidden Row. Serialized as `:hiddenRow` */
    get hiddenRow(): BooleanValue | undefined;
    set hiddenRow(v: BooleanValue | undefined);
    /** Hidden Column. Serialized as `:hiddenColumn` */
    get hiddenColumn(): BooleanValue | undefined;
    set hiddenColumn(v: BooleanValue | undefined);
    /** Author. Serialized as `:author` */
    get author(): StringValue | undefined;
    set author(v: StringValue | undefined);
    /** Original Comment Length. Serialized as `:oldLength` */
    get oldLength(): UInt32Value | undefined;
    set oldLength(v: UInt32Value | undefined);
    /** New Comment Length. Serialized as `:newLength` */
    get newLength(): UInt32Value | undefined;
    set newLength(v: UInt32Value | undefined);
}
/** Revision Defined Name. Serialized as `x:rdn` */
export declare class RevisionDefinedName extends OxmlCompositeElement<Formula | OldFormula | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Local Name Sheet Id. Serialized as `:localSheetId` */
    get localSheetId(): UInt32Value | undefined;
    set localSheetId(v: UInt32Value | undefined);
    /** Custom View. Serialized as `:customView` */
    get customView(): BooleanValue | undefined;
    set customView(v: BooleanValue | undefined);
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Function. Serialized as `:function` */
    get function(): BooleanValue | undefined;
    set function(v: BooleanValue | undefined);
    /** Old Function. Serialized as `:oldFunction` */
    get oldFunction(): BooleanValue | undefined;
    set oldFunction(v: BooleanValue | undefined);
    /** Function Group Id. Serialized as `:functionGroupId` */
    get functionGroupId(): ByteValue | undefined;
    set functionGroupId(v: ByteValue | undefined);
    /** Old Function Group Id. Serialized as `:oldFunctionGroupId` */
    get oldFunctionGroupId(): ByteValue | undefined;
    set oldFunctionGroupId(v: ByteValue | undefined);
    /** Shortcut Key. Serialized as `:shortcutKey` */
    get shortcutKey(): ByteValue | undefined;
    set shortcutKey(v: ByteValue | undefined);
    /** Old Short Cut Key. Serialized as `:oldShortcutKey` */
    get oldShortcutKey(): ByteValue | undefined;
    set oldShortcutKey(v: ByteValue | undefined);
    /** Named Range Hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Old Hidden. Serialized as `:oldHidden` */
    get oldHidden(): BooleanValue | undefined;
    set oldHidden(v: BooleanValue | undefined);
    /** New Custom Menu. Serialized as `:customMenu` */
    get customMenu(): StringValue | undefined;
    set customMenu(v: StringValue | undefined);
    /** Old Custom Menu Text. Serialized as `:oldCustomMenu` */
    get oldCustomMenu(): StringValue | undefined;
    set oldCustomMenu(v: StringValue | undefined);
    /** Description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Old Description. Serialized as `:oldDescription` */
    get oldDescription(): StringValue | undefined;
    set oldDescription(v: StringValue | undefined);
    /** New Help Topic. Serialized as `:help` */
    get help(): StringValue | undefined;
    set help(v: StringValue | undefined);
    /** Old Help Topic. Serialized as `:oldHelp` */
    get oldHelp(): StringValue | undefined;
    set oldHelp(v: StringValue | undefined);
    /** Status Bar. Serialized as `:statusBar` */
    get statusBar(): StringValue | undefined;
    set statusBar(v: StringValue | undefined);
    /** Old Status Bar. Serialized as `:oldStatusBar` */
    get oldStatusBar(): StringValue | undefined;
    set oldStatusBar(v: StringValue | undefined);
    /** Name Comment. Serialized as `:comment` */
    get comment(): StringValue | undefined;
    set comment(v: StringValue | undefined);
    /** Old Name Comment. Serialized as `:oldComment` */
    get oldComment(): StringValue | undefined;
    set oldComment(v: StringValue | undefined);
    /** Formula. */
    get formula(): Formula | undefined;
    /** Old Formula. */
    get oldFormula(): OldFormula | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Revision AutoFormat. Serialized as `x:raf` */
export declare class RevisionAutoFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
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
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Revision Format. Serialized as `x:rfmt` */
export declare class RevisionFormat extends OxmlCompositeElement<DifferentialFormat | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Row or Column Formatting Change. Serialized as `:xfDxf` */
    get rowOrColumnAffected(): BooleanValue | undefined;
    set rowOrColumnAffected(v: BooleanValue | undefined);
    /** Style. Serialized as `:s` */
    get styleAffected(): BooleanValue | undefined;
    set styleAffected(v: BooleanValue | undefined);
    /** Sequence Of References. Serialized as `:sqref` */
    get sequenceOfReferences(): ListValue<StringValue> | undefined;
    set sequenceOfReferences(v: ListValue<StringValue> | undefined);
    /** Start index. Serialized as `:start` */
    get start(): UInt32Value | undefined;
    set start(v: UInt32Value | undefined);
    /** Length. Serialized as `:length` */
    get length(): UInt32Value | undefined;
    set length(v: UInt32Value | undefined);
    /** Formatting. */
    get differentialFormat(): DifferentialFormat | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Revision Cell Change. Serialized as `x:rcc` */
export declare class RevisionCellChange extends OxmlCompositeElement<OldCell | NewCell | OldDifferentialFormat | NewDifferentialFormat | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Sheet Id. Serialized as `:sId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Old Formatting. Serialized as `:odxf` */
    get oldFormatting(): BooleanValue | undefined;
    set oldFormatting(v: BooleanValue | undefined);
    /** Row Column Formatting Change. Serialized as `:xfDxf` */
    get rowColumnFormattingAffected(): BooleanValue | undefined;
    set rowColumnFormattingAffected(v: BooleanValue | undefined);
    /** Style Revision. Serialized as `:s` */
    get styleRevision(): BooleanValue | undefined;
    set styleRevision(v: BooleanValue | undefined);
    /** Formatting. Serialized as `:dxf` */
    get format(): BooleanValue | undefined;
    set format(v: BooleanValue | undefined);
    /** Number Format Id. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
    /** Quote Prefix. Serialized as `:quotePrefix` */
    get quotePrefix(): BooleanValue | undefined;
    set quotePrefix(v: BooleanValue | undefined);
    /** Old Quote Prefix. Serialized as `:oldQuotePrefix` */
    get oldQuotePrefix(): BooleanValue | undefined;
    set oldQuotePrefix(v: BooleanValue | undefined);
    /** Phonetic Text. Serialized as `:ph` */
    get hasPhoneticText(): BooleanValue | undefined;
    set hasPhoneticText(v: BooleanValue | undefined);
    /** Old Phonetic Text. Serialized as `:oldPh` */
    get oldPhoneticText(): BooleanValue | undefined;
    set oldPhoneticText(v: BooleanValue | undefined);
    /** End of List  Formula Update. Serialized as `:endOfListFormulaUpdate` */
    get endOfListFormulaUpdate(): BooleanValue | undefined;
    set endOfListFormulaUpdate(v: BooleanValue | undefined);
    /** Old Cell Data. */
    get oldCell(): OldCell | undefined;
    /** New Cell Data. */
    get newCell(): NewCell | undefined;
    /** Old Formatting Information. */
    get oldDifferentialFormat(): OldDifferentialFormat | undefined;
    /** New Formatting Information. */
    get newDifferentialFormat(): NewDifferentialFormat | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Revision Insert Sheet. Serialized as `x:ris` */
export declare class RevisionInsertSheet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Sheet Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Sheet Position. Serialized as `:sheetPosition` */
    get sheetPosition(): UInt32Value | undefined;
    set sheetPosition(v: UInt32Value | undefined);
}
/** Revision Sheet Name. Serialized as `x:rsnm` */
export declare class RevisionSheetName extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Old Sheet Name. Serialized as `:oldName` */
    get oldName(): StringValue | undefined;
    set oldName(v: StringValue | undefined);
    /** New Sheet Name. Serialized as `:newName` */
    get newName(): StringValue | undefined;
    set newName(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Revision Custom View. Serialized as `x:rcv` */
export declare class RevisionCustomView extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** User Action. Serialized as `:action` */
    get action(): RevisionActionValues | undefined;
    set action(v: RevisionActionValues | undefined);
}
/** Revision Cell Move. Serialized as `x:rm` */
export declare class RevisionMove extends OxmlCompositeElement<Undo | RevisionCellChange | RevisionFormat> {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Sheet Id. Serialized as `:sheetId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** Source. Serialized as `:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** Destination. Serialized as `:destination` */
    get destination(): StringValue | undefined;
    set destination(v: StringValue | undefined);
    /** Source Sheet Id. Serialized as `:sourceSheetId` */
    get sourceSheetId(): UInt32Value | undefined;
    set sourceSheetId(v: UInt32Value | undefined);
}
/** Revision Row Column Insert Delete. Serialized as `x:rrc` */
export declare class RevisionRowColumn extends OxmlCompositeElement<Undo | RevisionCellChange | RevisionFormat> {
    static _Q: string;
    static _A: string[];
    /** Revision Id. Serialized as `:rId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Revision From Rejection. Serialized as `:ua` */
    get ua(): BooleanValue | undefined;
    set ua(v: BooleanValue | undefined);
    /** Revision Undo Rejected. Serialized as `:ra` */
    get ra(): BooleanValue | undefined;
    set ra(v: BooleanValue | undefined);
    /** Sheet Id. Serialized as `:sId` */
    get sheetId(): UInt32Value | undefined;
    set sheetId(v: UInt32Value | undefined);
    /** End Of List. Serialized as `:eol` */
    get endOfList(): BooleanValue | undefined;
    set endOfList(v: BooleanValue | undefined);
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** User Action. Serialized as `:action` */
    get action(): RowColumnActionValues | undefined;
    set action(v: RowColumnActionValues | undefined);
    /** Edge Deleted. Serialized as `:edge` */
    get edge(): BooleanValue | undefined;
    set edge(v: BooleanValue | undefined);
}
/** Header. Serialized as `x:header` */
export declare class Header extends OxmlCompositeElement<SheetIdMap | ReviewedList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** Date Time. Serialized as `:dateTime` */
    get dateTime(): DateTimeValue | undefined;
    set dateTime(v: DateTimeValue | undefined);
    /** Last Sheet Id. Serialized as `:maxSheetId` */
    get maxSheetId(): UInt32Value | undefined;
    set maxSheetId(v: UInt32Value | undefined);
    /** User Name. Serialized as `:userName` */
    get userName(): StringValue | undefined;
    set userName(v: StringValue | undefined);
    /** Relationship ID. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Minimum Revision Id. Serialized as `:minRId` */
    get minRevisionId(): UInt32Value | undefined;
    set minRevisionId(v: UInt32Value | undefined);
    /** Max Revision Id. Serialized as `:maxRId` */
    get maxRevisionId(): UInt32Value | undefined;
    set maxRevisionId(v: UInt32Value | undefined);
    /** Sheet Id Map. */
    get sheetIdMap(): SheetIdMap | undefined;
    /** Reviewed List. */
    get reviewedList(): ReviewedList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Phonetic Properties. Serialized as `x:phoneticPr` */
export declare class PhoneticProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Font Id. Serialized as `:fontId` */
    get fontId(): UInt32Value | undefined;
    set fontId(v: UInt32Value | undefined);
    /** Character Type. Serialized as `:type` */
    get type(): PhoneticValues | undefined;
    set type(v: PhoneticValues | undefined);
    /** Alignment. Serialized as `:alignment` */
    get alignment(): PhoneticAlignmentValues | undefined;
    set alignment(v: PhoneticAlignmentValues | undefined);
}
/** Phonetic Run. Serialized as `x:rPh` */
export declare class PhoneticRun extends OxmlCompositeElement<Text> {
    static _Q: string;
    static _A: string[];
    /** Base Text Start Index. Serialized as `:sb` */
    get baseTextStartIndex(): UInt32Value | undefined;
    set baseTextStartIndex(v: UInt32Value | undefined);
    /** Base Text End Index. Serialized as `:eb` */
    get endingBaseIndex(): UInt32Value | undefined;
    set endingBaseIndex(v: UInt32Value | undefined);
    /** Text. */
    get text(): Text | undefined;
}
/** Rich Text Run. Serialized as `x:r` */
export declare class Run extends OxmlCompositeElement<RunProperties | Text> {
    static _Q: string;
    /** Run Properties. */
    get runProperties(): RunProperties | undefined;
    /** Text. */
    get text(): Text | undefined;
}
/** Run Properties. Serialized as `x:rPr` */
export declare class RunProperties extends OxmlCompositeElement<Bold | Italic | Strike | Condense | Extend | Outline | Shadow | Underline | VerticalTextAlignment | FontSize | Color | RunFont | FontFamily | RunPropertyCharSet | FontScheme> {
    static _Q: string;
}
/** Font Scheme. Serialized as `x:scheme` */
export declare class FontScheme extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Font Scheme. Serialized as `:val` */
    get val(): FontSchemeValues | undefined;
    set val(v: FontSchemeValues | undefined);
}
/** Defines the InternationalPropertyType Class. */
export declare abstract class InternationalPropertyType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Character Set. Serialized as `x:charset` */
export declare class RunPropertyCharSet extends InternationalPropertyType {
    static _Q: string;
}
/** Font Family. Serialized as `x:family` */
export declare class FontFamily extends InternationalPropertyType {
    static _Q: string;
}
/** Font. Serialized as `x:rFont` */
export declare class RunFont extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** String Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
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
/** Background Color. Serialized as `x:bgColor` */
export declare class BackgroundColor extends ColorType {
    static _Q: string;
}
/** Foreground Color. Serialized as `x:fgColor` */
export declare class ForegroundColor extends ColorType {
    static _Q: string;
}
/** Sheet Tab Color. Serialized as `x:tabColor` */
export declare class TabColor extends ColorType {
    static _Q: string;
}
/** Text Color. Serialized as `x:color` */
export declare class Color extends ColorType {
    static _Q: string;
}
/** Font Size. Serialized as `x:sz` */
export declare class FontSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Vertical Alignment. Serialized as `x:vertAlign` */
export declare class VerticalTextAlignment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): VerticalAlignmentRunValues | undefined;
    set val(v: VerticalAlignmentRunValues | undefined);
}
/** Underline. Serialized as `x:u` */
export declare class Underline extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Underline Value. Serialized as `:val` */
    get val(): UnderlineValues | undefined;
    set val(v: UnderlineValues | undefined);
}
/** Defines the BooleanPropertyType Class. */
export declare abstract class BooleanPropertyType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Shadow. Serialized as `x:shadow` */
export declare class Shadow extends BooleanPropertyType {
    static _Q: string;
}
/** Outline. Serialized as `x:outline` */
export declare class Outline extends BooleanPropertyType {
    static _Q: string;
}
/** Extend. Serialized as `x:extend` */
export declare class Extend extends BooleanPropertyType {
    static _Q: string;
}
/** Condense. Serialized as `x:condense` */
export declare class Condense extends BooleanPropertyType {
    static _Q: string;
}
/** Strike Through. Serialized as `x:strike` */
export declare class Strike extends BooleanPropertyType {
    static _Q: string;
}
/** Italic. Serialized as `x:i` */
export declare class Italic extends BooleanPropertyType {
    static _Q: string;
}
/** Bold. Serialized as `x:b` */
export declare class Bold extends BooleanPropertyType {
    static _Q: string;
}
/** Defines the RstType Class. */
export declare abstract class RstType extends OxmlCompositeElement<Text | Run | PhoneticRun | PhoneticProperties> {
    /** Text. */
    get text(): Text | undefined;
}
/** Comment Text. Serialized as `x:text` */
export declare class CommentText extends RstType {
    static _Q: string;
}
/** Rich Text Inline. Serialized as `x:is` */
export declare class InlineString extends RstType {
    static _Q: string;
}
/** String Item. Serialized as `x:si` */
export declare class SharedStringItem extends RstType {
    static _Q: string;
}
/** QueryTable Field. Serialized as `x:queryTableField` */
export declare class QueryTableField extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Field Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Data Bound Column. Serialized as `:dataBound` */
    get dataBound(): BooleanValue | undefined;
    set dataBound(v: BooleanValue | undefined);
    /** Row Numbers. Serialized as `:rowNumbers` */
    get rowNumbers(): BooleanValue | undefined;
    set rowNumbers(v: BooleanValue | undefined);
    /** Fill This Formula On Refresh. Serialized as `:fillFormulas` */
    get fillFormulas(): BooleanValue | undefined;
    set fillFormulas(v: BooleanValue | undefined);
    /** Clipped Column. Serialized as `:clipped` */
    get clipped(): BooleanValue | undefined;
    set clipped(v: BooleanValue | undefined);
    /** Table Column Id. Serialized as `:tableColumnId` */
    get tableColumnId(): UInt32Value | undefined;
    set tableColumnId(v: UInt32Value | undefined);
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Deleted Field. Serialized as `x:deletedField` */
export declare class DeletedField extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Deleted Fields Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Deleted Fields. Serialized as `x:queryTableDeletedFields` */
export declare class QueryTableDeletedFields extends OxmlCompositeElement<DeletedField> {
    static _Q: string;
    static _A: string[];
    /** Deleted Fields Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Query table fields. Serialized as `x:queryTableFields` */
export declare class QueryTableFields extends OxmlCompositeElement<QueryTableField> {
    static _Q: string;
    static _A: string[];
    /** Column Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Reference. Serialized as `x:reference` */
export declare class PivotAreaReference extends OxmlCompositeElement<FieldItem | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Field Index. Serialized as `:field` */
    get field(): UInt32Value | undefined;
    set field(v: UInt32Value | undefined);
    /** Item Index Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Selected. Serialized as `:selected` */
    get selected(): BooleanValue | undefined;
    set selected(v: BooleanValue | undefined);
    /** Positional Reference. Serialized as `:byPosition` */
    get byPosition(): BooleanValue | undefined;
    set byPosition(v: BooleanValue | undefined);
    /** Relative Reference. Serialized as `:relative` */
    get relative(): BooleanValue | undefined;
    set relative(v: BooleanValue | undefined);
    /** Include Default Filter. Serialized as `:defaultSubtotal` */
    get defaultSubtotal(): BooleanValue | undefined;
    set defaultSubtotal(v: BooleanValue | undefined);
    /** Include Sum Filter. Serialized as `:sumSubtotal` */
    get sumSubtotal(): BooleanValue | undefined;
    set sumSubtotal(v: BooleanValue | undefined);
    /** Include CountA Filter. Serialized as `:countASubtotal` */
    get countASubtotal(): BooleanValue | undefined;
    set countASubtotal(v: BooleanValue | undefined);
    /** Include Average Filter. Serialized as `:avgSubtotal` */
    get averageSubtotal(): BooleanValue | undefined;
    set averageSubtotal(v: BooleanValue | undefined);
    /** Include Maximum Filter. Serialized as `:maxSubtotal` */
    get maxSubtotal(): BooleanValue | undefined;
    set maxSubtotal(v: BooleanValue | undefined);
    /** Include Minimum Filter. Serialized as `:minSubtotal` */
    get minSubtotal(): BooleanValue | undefined;
    set minSubtotal(v: BooleanValue | undefined);
    /** Include Product Filter. Serialized as `:productSubtotal` */
    get applyProductInSubtotal(): BooleanValue | undefined;
    set applyProductInSubtotal(v: BooleanValue | undefined);
    /** Include Count Subtotal. Serialized as `:countSubtotal` */
    get countSubtotal(): BooleanValue | undefined;
    set countSubtotal(v: BooleanValue | undefined);
    /** Include StdDev Filter. Serialized as `:stdDevSubtotal` */
    get applyStandardDeviationInSubtotal(): BooleanValue | undefined;
    set applyStandardDeviationInSubtotal(v: BooleanValue | undefined);
    /** Include StdDevP Filter. Serialized as `:stdDevPSubtotal` */
    get applyStandardDeviationPInSubtotal(): BooleanValue | undefined;
    set applyStandardDeviationPInSubtotal(v: BooleanValue | undefined);
    /** Include Var Filter. Serialized as `:varSubtotal` */
    get applyVarianceInSubtotal(): BooleanValue | undefined;
    set applyVarianceInSubtotal(v: BooleanValue | undefined);
    /** Include VarP Filter. Serialized as `:varPSubtotal` */
    get applyVariancePInSubtotal(): BooleanValue | undefined;
    set applyVariancePInSubtotal(v: BooleanValue | undefined);
}
/** References. Serialized as `x:references` */
export declare class PivotAreaReferences extends OxmlCompositeElement<PivotAreaReference> {
    static _Q: string;
    static _A: string[];
    /** Pivot Filter Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Page Field. Serialized as `x:pageField` */
export declare class PageField extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Field. Serialized as `:fld` */
    get field(): Int32Value | undefined;
    set field(v: Int32Value | undefined);
    /** Item Index. Serialized as `:item` */
    get item(): UInt32Value | undefined;
    set item(v: UInt32Value | undefined);
    /** OLAP Hierarchy Index. Serialized as `:hier` */
    get hierarchy(): Int32Value | undefined;
    set hierarchy(v: Int32Value | undefined);
    /** Hierarchy Unique Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Hierarchy Display Name. Serialized as `:cap` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** OLAP Group Items. Serialized as `x:groupItems` */
export declare class GroupItems extends OxmlCompositeElement<MissingItem | NumberItem | BooleanItem | ErrorItem | StringItem | DateTimeItem> {
    static _Q: string;
    static _A: string[];
    /** Items Created Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Discrete Grouping Properties. Serialized as `x:discretePr` */
export declare class DiscreteProperties extends OxmlCompositeElement<FieldItem> {
    static _Q: string;
    static _A: string[];
    /** Mapping Index Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Range Grouping Properties. Serialized as `x:rangePr` */
export declare class RangeProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Source Data Set Beginning Range. Serialized as `:autoStart` */
    get autoStart(): BooleanValue | undefined;
    set autoStart(v: BooleanValue | undefined);
    /** Source Data Ending Range. Serialized as `:autoEnd` */
    get autoEnd(): BooleanValue | undefined;
    set autoEnd(v: BooleanValue | undefined);
    /** Group By. Serialized as `:groupBy` */
    get groupBy(): GroupByValues | undefined;
    set groupBy(v: GroupByValues | undefined);
    /** Numeric Grouping Start Value. Serialized as `:startNum` */
    get startNumber(): DoubleValue | undefined;
    set startNumber(v: DoubleValue | undefined);
    /** Numeric Grouping End Value. Serialized as `:endNum` */
    get endNum(): DoubleValue | undefined;
    set endNum(v: DoubleValue | undefined);
    /** Date Grouping Start Value. Serialized as `:startDate` */
    get startDate(): DateTimeValue | undefined;
    set startDate(v: DateTimeValue | undefined);
    /** Date Grouping End Value. Serialized as `:endDate` */
    get endDate(): DateTimeValue | undefined;
    set endDate(v: DateTimeValue | undefined);
    /** Grouping Interval. Serialized as `:groupInterval` */
    get groupInterval(): DoubleValue | undefined;
    set groupInterval(v: DoubleValue | undefined);
}
/** PivotCache Hierarchy. Serialized as `x:cacheHierarchy` */
export declare class CacheHierarchy extends OxmlCompositeElement<FieldsUsage | GroupLevels | CacheHierarchyExtensionList> {
    static _Q: string;
    static _A: string[];
    /** uniqueName. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** caption. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** measure. Serialized as `:measure` */
    get measure(): BooleanValue | undefined;
    set measure(v: BooleanValue | undefined);
    /** set. Serialized as `:set` */
    get set(): BooleanValue | undefined;
    set set(v: BooleanValue | undefined);
    /** parentSet. Serialized as `:parentSet` */
    get parentSet(): UInt32Value | undefined;
    set parentSet(v: UInt32Value | undefined);
    /** iconSet. Serialized as `:iconSet` */
    get iconSet(): Int32Value | undefined;
    set iconSet(v: Int32Value | undefined);
    /** attribute. Serialized as `:attribute` */
    get attribute(): BooleanValue | undefined;
    set attribute(v: BooleanValue | undefined);
    /** time. Serialized as `:time` */
    get time(): BooleanValue | undefined;
    set time(v: BooleanValue | undefined);
    /** keyAttribute. Serialized as `:keyAttribute` */
    get keyAttribute(): BooleanValue | undefined;
    set keyAttribute(v: BooleanValue | undefined);
    /** defaultMemberUniqueName. Serialized as `:defaultMemberUniqueName` */
    get defaultMemberUniqueName(): StringValue | undefined;
    set defaultMemberUniqueName(v: StringValue | undefined);
    /** allUniqueName. Serialized as `:allUniqueName` */
    get allUniqueName(): StringValue | undefined;
    set allUniqueName(v: StringValue | undefined);
    /** allCaption. Serialized as `:allCaption` */
    get allCaption(): StringValue | undefined;
    set allCaption(v: StringValue | undefined);
    /** dimensionUniqueName. Serialized as `:dimensionUniqueName` */
    get dimensionUniqueName(): StringValue | undefined;
    set dimensionUniqueName(v: StringValue | undefined);
    /** displayFolder. Serialized as `:displayFolder` */
    get displayFolder(): StringValue | undefined;
    set displayFolder(v: StringValue | undefined);
    /** measureGroup. Serialized as `:measureGroup` */
    get measureGroup(): StringValue | undefined;
    set measureGroup(v: StringValue | undefined);
    /** measures. Serialized as `:measures` */
    get measures(): BooleanValue | undefined;
    set measures(v: BooleanValue | undefined);
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** oneField. Serialized as `:oneField` */
    get oneField(): BooleanValue | undefined;
    set oneField(v: BooleanValue | undefined);
    /** memberValueDatatype. Serialized as `:memberValueDatatype` */
    get memberValueDatatype(): UInt16Value | undefined;
    set memberValueDatatype(v: UInt16Value | undefined);
    /** unbalanced. Serialized as `:unbalanced` */
    get unbalanced(): BooleanValue | undefined;
    set unbalanced(v: BooleanValue | undefined);
    /** unbalancedGroup. Serialized as `:unbalancedGroup` */
    get unbalancedGroup(): BooleanValue | undefined;
    set unbalancedGroup(v: BooleanValue | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Returns FieldsUsage. */
    get fieldsUsage(): FieldsUsage | undefined;
    /** Returns GroupLevels. */
    get groupLevels(): GroupLevels | undefined;
    /** Returns CacheHierarchyExtensionList. */
    get cacheHierarchyExtensionList(): CacheHierarchyExtensionList | undefined;
}
/** PivotTable Advanced Filter. Serialized as `x:filter` */
export declare class PivotFilter extends OxmlCompositeElement<AutoFilter | PivotFilterExtensionList> {
    static _Q: string;
    static _A: string[];
    /** fld. Serialized as `:fld` */
    get field(): UInt32Value | undefined;
    set field(v: UInt32Value | undefined);
    /** mpFld. Serialized as `:mpFld` */
    get memberPropertyFieldId(): UInt32Value | undefined;
    set memberPropertyFieldId(v: UInt32Value | undefined);
    /** type. Serialized as `:type` */
    get type(): PivotFilterValues | undefined;
    set type(v: PivotFilterValues | undefined);
    /** evalOrder. Serialized as `:evalOrder` */
    get evaluationOrder(): Int32Value | undefined;
    set evaluationOrder(v: Int32Value | undefined);
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** iMeasureHier. Serialized as `:iMeasureHier` */
    get measureHierarchy(): UInt32Value | undefined;
    set measureHierarchy(v: UInt32Value | undefined);
    /** iMeasureFld. Serialized as `:iMeasureFld` */
    get measureField(): UInt32Value | undefined;
    set measureField(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** stringValue1. Serialized as `:stringValue1` */
    get stringValue1(): StringValue | undefined;
    set stringValue1(v: StringValue | undefined);
    /** stringValue2. Serialized as `:stringValue2` */
    get stringValue2(): StringValue | undefined;
    set stringValue2(v: StringValue | undefined);
    /** Returns AutoFilter. */
    get autoFilter(): AutoFilter | undefined;
    /** Returns PivotFilterExtensionList. */
    get pivotFilterExtensionList(): PivotFilterExtensionList | undefined;
}
/** OLAP Measure Group. Serialized as `x:map` */
export declare class MeasureDimensionMap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Measure Group Id. Serialized as `:measureGroup` */
    get measureGroup(): UInt32Value | undefined;
    set measureGroup(v: UInt32Value | undefined);
    /** Dimension Id. Serialized as `:dimension` */
    get dimension(): UInt32Value | undefined;
    set dimension(v: UInt32Value | undefined);
}
/** OLAP Measure Group. Serialized as `x:measureGroup` */
export declare class MeasureGroup extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Measure Group Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Measure Group Display Name. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
}
/** OLAP Dimension. Serialized as `x:dimension` */
export declare class Dimension extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Measure. Serialized as `:measure` */
    get measure(): BooleanValue | undefined;
    set measure(v: BooleanValue | undefined);
    /** Dimension Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Dimension Unique Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** Dimension Display Name. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
}
/** Member. Serialized as `x:member` */
export declare class Member extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Hidden Item Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** OLAP Member Property. Serialized as `x:mp` */
export declare class MemberProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** OLAP Member Property Unique Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Show Cell. Serialized as `:showCell` */
    get showCell(): BooleanValue | undefined;
    set showCell(v: BooleanValue | undefined);
    /** Show Tooltip. Serialized as `:showTip` */
    get showTip(): BooleanValue | undefined;
    set showTip(v: BooleanValue | undefined);
    /** Show As Caption. Serialized as `:showAsCaption` */
    get showAsCaption(): BooleanValue | undefined;
    set showAsCaption(v: BooleanValue | undefined);
    /** Name Length. Serialized as `:nameLen` */
    get nameLength(): UInt32Value | undefined;
    set nameLength(v: UInt32Value | undefined);
    /** Property Name Character Index. Serialized as `:pPos` */
    get propertyNamePosition(): UInt32Value | undefined;
    set propertyNamePosition(v: UInt32Value | undefined);
    /** Property Name Length. Serialized as `:pLen` */
    get propertyNameLength(): UInt32Value | undefined;
    set propertyNameLength(v: UInt32Value | undefined);
    /** Level Index. Serialized as `:level` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
    /** Field Index. Serialized as `:field` */
    get field(): UInt32Value | undefined;
    set field(v: UInt32Value | undefined);
}
/** Defines the HierarchyUsageType Class. */
export declare abstract class HierarchyUsageType extends OxmlLeafElement {
    static _A: string[];
    /** Hierarchy Usage. Serialized as `:hierarchyUsage` */
    get value(): Int32Value | undefined;
    set value(v: Int32Value | undefined);
}
/** Column OLAP Hierarchies. Serialized as `x:colHierarchyUsage` */
export declare class ColumnHierarchyUsage extends HierarchyUsageType {
    static _Q: string;
}
/** Row OLAP Hierarchies. Serialized as `x:rowHierarchyUsage` */
export declare class RowHierarchyUsage extends HierarchyUsageType {
    static _Q: string;
}
/** OLAP Hierarchy. Serialized as `x:pivotHierarchy` */
export declare class PivotHierarchy extends OxmlCompositeElement<MemberProperties | Members | PivotHierarchyExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Outline New Levels. Serialized as `:outline` */
    get outline(): BooleanValue | undefined;
    set outline(v: BooleanValue | undefined);
    /** Multiple Field Filters. Serialized as `:multipleItemSelectionAllowed` */
    get multipleItemSelectionAllowed(): BooleanValue | undefined;
    set multipleItemSelectionAllowed(v: BooleanValue | undefined);
    /** New Levels Subtotals At Top. Serialized as `:subtotalTop` */
    get subtotalTop(): BooleanValue | undefined;
    set subtotalTop(v: BooleanValue | undefined);
    /** Show In Field List. Serialized as `:showInFieldList` */
    get showInFieldList(): BooleanValue | undefined;
    set showInFieldList(v: BooleanValue | undefined);
    /** Drag To Row. Serialized as `:dragToRow` */
    get dragToRow(): BooleanValue | undefined;
    set dragToRow(v: BooleanValue | undefined);
    /** Drag To Column. Serialized as `:dragToCol` */
    get dragToColumn(): BooleanValue | undefined;
    set dragToColumn(v: BooleanValue | undefined);
    /** Drag to Page. Serialized as `:dragToPage` */
    get dragToPage(): BooleanValue | undefined;
    set dragToPage(v: BooleanValue | undefined);
    /** Drag To Data. Serialized as `:dragToData` */
    get dragToData(): BooleanValue | undefined;
    set dragToData(v: BooleanValue | undefined);
    /** Drag Off. Serialized as `:dragOff` */
    get dragOff(): BooleanValue | undefined;
    set dragOff(v: BooleanValue | undefined);
    /** Inclusive Manual Filter. Serialized as `:includeNewItemsInFilter` */
    get includeNewItemsInFilter(): BooleanValue | undefined;
    set includeNewItemsInFilter(v: BooleanValue | undefined);
    /** Hierarchy Caption. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** OLAP Member Properties. */
    get memberProperties(): MemberProperties | undefined;
}
/** PivotChart Format. Serialized as `x:chartFormat` */
export declare class ChartFormat extends OxmlCompositeElement<PivotArea> {
    static _Q: string;
    static _A: string[];
    /** Chart Index. Serialized as `:chart` */
    get chart(): UInt32Value | undefined;
    set chart(v: UInt32Value | undefined);
    /** Pivot Format Id. Serialized as `:format` */
    get format(): UInt32Value | undefined;
    set format(v: UInt32Value | undefined);
    /** Series Format. Serialized as `:series` */
    get series(): BooleanValue | undefined;
    set series(v: BooleanValue | undefined);
    /** Pivot Table Location Rule. */
    get pivotArea(): PivotArea | undefined;
}
/** Pivot Areas. Serialized as `x:pivotAreas` */
export declare class PivotAreas extends OxmlCompositeElement<PivotArea> {
    static _Q: string;
    static _A: string[];
    /** Pivot Area Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Conditional Formatting. Serialized as `x:conditionalFormat` */
export declare class ConditionalFormat extends OxmlCompositeElement<PivotAreas | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Conditional Formatting Scope. Serialized as `:scope` */
    get scope(): ScopeValues | undefined;
    set scope(v: ScopeValues | undefined);
    /** Conditional Formatting Rule Type. Serialized as `:type` */
    get type(): RuleValues | undefined;
    set type(v: RuleValues | undefined);
    /** Priority. Serialized as `:priority` */
    get priority(): UInt32Value | undefined;
    set priority(v: UInt32Value | undefined);
    /** Pivot Areas. */
    get pivotAreas(): PivotAreas | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** PivotTable Format. Serialized as `x:format` */
export declare class Format extends OxmlCompositeElement<PivotArea | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Format Action. Serialized as `:action` */
    get action(): FormatActionValues | undefined;
    set action(v: FormatActionValues | undefined);
    /** Format Id. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
    /** Pivot Table Location. */
    get pivotArea(): PivotArea | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Row Items. Serialized as `x:field` */
export declare class Field extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Field Index. Serialized as `:x` */
    get index(): Int32Value | undefined;
    set index(v: Int32Value | undefined);
}
/** Row Items. Serialized as `x:i` */
export declare class RowItem extends OxmlCompositeElement<MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Item Type. Serialized as `:t` */
    get itemType(): ItemValues | undefined;
    set itemType(v: ItemValues | undefined);
    /** Repeated Items Count. Serialized as `:r` */
    get repeatedItemCount(): UInt32Value | undefined;
    set repeatedItemCount(v: UInt32Value | undefined);
    /** Data Field Index. Serialized as `:i` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
}
/** Data Field Item. Serialized as `x:dataField` */
export declare class DataField extends OxmlCompositeElement<DataFieldExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** fld. Serialized as `:fld` */
    get field(): UInt32Value | undefined;
    set field(v: UInt32Value | undefined);
    /** subtotal. Serialized as `:subtotal` */
    get subtotal(): DataConsolidateFunctionValues | undefined;
    set subtotal(v: DataConsolidateFunctionValues | undefined);
    /** showDataAs. Serialized as `:showDataAs` */
    get showDataAs(): ShowDataAsValues | undefined;
    set showDataAs(v: ShowDataAsValues | undefined);
    /** baseField. Serialized as `:baseField` */
    get baseField(): Int32Value | undefined;
    set baseField(v: Int32Value | undefined);
    /** baseItem. Serialized as `:baseItem` */
    get baseItem(): UInt32Value | undefined;
    set baseItem(v: UInt32Value | undefined);
    /** numFmtId. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
    /** Returns DataFieldExtensionList. */
    get dataFieldExtensionList(): DataFieldExtensionList | undefined;
}
/** PivotTable Field Item. Serialized as `x:item` */
export declare class Item extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Item User Caption. Serialized as `:n` */
    get itemName(): StringValue | undefined;
    set itemName(v: StringValue | undefined);
    /** Item Type. Serialized as `:t` */
    get itemType(): ItemValues | undefined;
    set itemType(v: ItemValues | undefined);
    /** Hidden. Serialized as `:h` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Character. Serialized as `:s` */
    get hasStringVlue(): BooleanValue | undefined;
    set hasStringVlue(v: BooleanValue | undefined);
    /** Hide Details. Serialized as `:sd` */
    get hideDetails(): BooleanValue | undefined;
    set hideDetails(v: BooleanValue | undefined);
    /** Calculated Member. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Missing. Serialized as `:m` */
    get missing(): BooleanValue | undefined;
    set missing(v: BooleanValue | undefined);
    /** Child Items. Serialized as `:c` */
    get childItems(): BooleanValue | undefined;
    set childItems(v: BooleanValue | undefined);
    /** Item Index. Serialized as `:x` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Expanded. Serialized as `:d` */
    get expanded(): BooleanValue | undefined;
    set expanded(v: BooleanValue | undefined);
    /** Drill Across Attributes. Serialized as `:e` */
    get drillAcrossAttributes(): BooleanValue | undefined;
    set drillAcrossAttributes(v: BooleanValue | undefined);
}
/** PivotTable Field. Serialized as `x:pivotField` */
export declare class PivotField extends OxmlCompositeElement<Items | AutoSortScope | PivotFieldExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Field Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Axis. Serialized as `:axis` */
    get axis(): PivotTableAxisValues | undefined;
    set axis(v: PivotTableAxisValues | undefined);
    /** Data Field. Serialized as `:dataField` */
    get dataField(): BooleanValue | undefined;
    set dataField(v: BooleanValue | undefined);
    /** Custom Subtotal Caption. Serialized as `:subtotalCaption` */
    get subtotalCaption(): StringValue | undefined;
    set subtotalCaption(v: StringValue | undefined);
    /** Show PivotField Header Drop Downs. Serialized as `:showDropDowns` */
    get showDropDowns(): BooleanValue | undefined;
    set showDropDowns(v: BooleanValue | undefined);
    /** Hidden Level. Serialized as `:hiddenLevel` */
    get hiddenLevel(): BooleanValue | undefined;
    set hiddenLevel(v: BooleanValue | undefined);
    /** Unique Member Property. Serialized as `:uniqueMemberProperty` */
    get uniqueMemberProperty(): StringValue | undefined;
    set uniqueMemberProperty(v: StringValue | undefined);
    /** Compact. Serialized as `:compact` */
    get compact(): BooleanValue | undefined;
    set compact(v: BooleanValue | undefined);
    /** All Items Expanded. Serialized as `:allDrilled` */
    get allDrilled(): BooleanValue | undefined;
    set allDrilled(v: BooleanValue | undefined);
    /** Number Format Id. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
    /** Outline Items. Serialized as `:outline` */
    get outline(): BooleanValue | undefined;
    set outline(v: BooleanValue | undefined);
    /** Subtotals At Top. Serialized as `:subtotalTop` */
    get subtotalTop(): BooleanValue | undefined;
    set subtotalTop(v: BooleanValue | undefined);
    /** Drag To Row. Serialized as `:dragToRow` */
    get dragToRow(): BooleanValue | undefined;
    set dragToRow(v: BooleanValue | undefined);
    /** Drag To Column. Serialized as `:dragToCol` */
    get dragToColumn(): BooleanValue | undefined;
    set dragToColumn(v: BooleanValue | undefined);
    /** Multiple Field Filters. Serialized as `:multipleItemSelectionAllowed` */
    get multipleItemSelectionAllowed(): BooleanValue | undefined;
    set multipleItemSelectionAllowed(v: BooleanValue | undefined);
    /** Drag Field to Page. Serialized as `:dragToPage` */
    get dragToPage(): BooleanValue | undefined;
    set dragToPage(v: BooleanValue | undefined);
    /** Field Can Drag to Data. Serialized as `:dragToData` */
    get dragToData(): BooleanValue | undefined;
    set dragToData(v: BooleanValue | undefined);
    /** Drag Off. Serialized as `:dragOff` */
    get dragOff(): BooleanValue | undefined;
    set dragOff(v: BooleanValue | undefined);
    /** Show All Items. Serialized as `:showAll` */
    get showAll(): BooleanValue | undefined;
    set showAll(v: BooleanValue | undefined);
    /** Insert Blank Row. Serialized as `:insertBlankRow` */
    get insertBlankRow(): BooleanValue | undefined;
    set insertBlankRow(v: BooleanValue | undefined);
    /** Server-based Page Field. Serialized as `:serverField` */
    get serverField(): BooleanValue | undefined;
    set serverField(v: BooleanValue | undefined);
    /** Insert Item Page Break. Serialized as `:insertPageBreak` */
    get insertPageBreak(): BooleanValue | undefined;
    set insertPageBreak(v: BooleanValue | undefined);
    /** Auto Show. Serialized as `:autoShow` */
    get autoShow(): BooleanValue | undefined;
    set autoShow(v: BooleanValue | undefined);
    /** Top Auto Show. Serialized as `:topAutoShow` */
    get topAutoShow(): BooleanValue | undefined;
    set topAutoShow(v: BooleanValue | undefined);
    /** Hide New Items. Serialized as `:hideNewItems` */
    get hideNewItems(): BooleanValue | undefined;
    set hideNewItems(v: BooleanValue | undefined);
    /** Measure Filter. Serialized as `:measureFilter` */
    get measureFilter(): BooleanValue | undefined;
    set measureFilter(v: BooleanValue | undefined);
    /** Inclusive Manual Filter. Serialized as `:includeNewItemsInFilter` */
    get includeNewItemsInFilter(): BooleanValue | undefined;
    set includeNewItemsInFilter(v: BooleanValue | undefined);
    /** Items Per Page Count. Serialized as `:itemPageCount` */
    get itemPageCount(): UInt32Value | undefined;
    set itemPageCount(v: UInt32Value | undefined);
    /** Auto Sort Type. Serialized as `:sortType` */
    get sortType(): FieldSortValues | undefined;
    set sortType(v: FieldSortValues | undefined);
    /** Data Source Sort. Serialized as `:dataSourceSort` */
    get dataSourceSort(): BooleanValue | undefined;
    set dataSourceSort(v: BooleanValue | undefined);
    /** Auto Sort. Serialized as `:nonAutoSortDefault` */
    get nonAutoSortDefault(): BooleanValue | undefined;
    set nonAutoSortDefault(v: BooleanValue | undefined);
    /** Auto Show Rank By. Serialized as `:rankBy` */
    get rankBy(): UInt32Value | undefined;
    set rankBy(v: UInt32Value | undefined);
    /** Show Default Subtotal. Serialized as `:defaultSubtotal` */
    get defaultSubtotal(): BooleanValue | undefined;
    set defaultSubtotal(v: BooleanValue | undefined);
    /** Sum Subtotal. Serialized as `:sumSubtotal` */
    get sumSubtotal(): BooleanValue | undefined;
    set sumSubtotal(v: BooleanValue | undefined);
    /** CountA. Serialized as `:countASubtotal` */
    get countASubtotal(): BooleanValue | undefined;
    set countASubtotal(v: BooleanValue | undefined);
    /** Average. Serialized as `:avgSubtotal` */
    get averageSubTotal(): BooleanValue | undefined;
    set averageSubTotal(v: BooleanValue | undefined);
    /** Max Subtotal. Serialized as `:maxSubtotal` */
    get maxSubtotal(): BooleanValue | undefined;
    set maxSubtotal(v: BooleanValue | undefined);
    /** Min Subtotal. Serialized as `:minSubtotal` */
    get minSubtotal(): BooleanValue | undefined;
    set minSubtotal(v: BooleanValue | undefined);
    /** Product Subtotal. Serialized as `:productSubtotal` */
    get applyProductInSubtotal(): BooleanValue | undefined;
    set applyProductInSubtotal(v: BooleanValue | undefined);
    /** Count. Serialized as `:countSubtotal` */
    get countSubtotal(): BooleanValue | undefined;
    set countSubtotal(v: BooleanValue | undefined);
    /** StdDev Subtotal. Serialized as `:stdDevSubtotal` */
    get applyStandardDeviationInSubtotal(): BooleanValue | undefined;
    set applyStandardDeviationInSubtotal(v: BooleanValue | undefined);
    /** StdDevP Subtotal. Serialized as `:stdDevPSubtotal` */
    get applyStandardDeviationPInSubtotal(): BooleanValue | undefined;
    set applyStandardDeviationPInSubtotal(v: BooleanValue | undefined);
    /** Variance Subtotal. Serialized as `:varSubtotal` */
    get applyVarianceInSubtotal(): BooleanValue | undefined;
    set applyVarianceInSubtotal(v: BooleanValue | undefined);
    /** VarP Subtotal. Serialized as `:varPSubtotal` */
    get applyVariancePInSubtotal(): BooleanValue | undefined;
    set applyVariancePInSubtotal(v: BooleanValue | undefined);
    /** Show Member Property in Cell. Serialized as `:showPropCell` */
    get showPropCell(): BooleanValue | undefined;
    set showPropCell(v: BooleanValue | undefined);
    /** Show Member Property ToolTip. Serialized as `:showPropTip` */
    get showPropertyTooltip(): BooleanValue | undefined;
    set showPropertyTooltip(v: BooleanValue | undefined);
    /** Show As Caption. Serialized as `:showPropAsCaption` */
    get showPropAsCaption(): BooleanValue | undefined;
    set showPropAsCaption(v: BooleanValue | undefined);
    /** Drill State. Serialized as `:defaultAttributeDrillState` */
    get defaultAttributeDrillState(): BooleanValue | undefined;
    set defaultAttributeDrillState(v: BooleanValue | undefined);
    /** Field Items. */
    get items(): Items | undefined;
    /** AutoSort Scope. */
    get autoSortScope(): AutoSortScope | undefined;
    /** Future Feature Data Storage Area. */
    get pivotFieldExtensionList(): PivotFieldExtensionList | undefined;
}
/** Calculated Member. Serialized as `x:calculatedMember` */
export declare class CalculatedMember extends OxmlCompositeElement<CalculatedMemberExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** mdx. Serialized as `:mdx` */
    get mdx(): StringValue | undefined;
    set mdx(v: StringValue | undefined);
    /** memberName. Serialized as `:memberName` */
    get memberName(): StringValue | undefined;
    set memberName(v: StringValue | undefined);
    /** hierarchy. Serialized as `:hierarchy` */
    get hierarchy(): StringValue | undefined;
    set hierarchy(v: StringValue | undefined);
    /** parent. Serialized as `:parent` */
    get parentName(): StringValue | undefined;
    set parentName(v: StringValue | undefined);
    /** solveOrder. Serialized as `:solveOrder` */
    get solveOrder(): Int32Value | undefined;
    set solveOrder(v: Int32Value | undefined);
    /** set. Serialized as `:set` */
    get set(): BooleanValue | undefined;
    set set(v: BooleanValue | undefined);
    /** Returns CalculatedMemberExtensionList. */
    get calculatedMemberExtensionList(): CalculatedMemberExtensionList | undefined;
}
/** Calculated Item Location. Serialized as `x:pivotArea` */
export declare class PivotArea extends OxmlCompositeElement<PivotAreaReferences | ExtensionList> {
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
    get pivotAreaReferences(): PivotAreaReferences | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Calculated Item. Serialized as `x:calculatedItem` */
export declare class CalculatedItem extends OxmlCompositeElement<PivotArea | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Field Index. Serialized as `:field` */
    get field(): UInt32Value | undefined;
    set field(v: UInt32Value | undefined);
    /** Calculated Item Formula. Serialized as `:formula` */
    get formula(): StringValue | undefined;
    set formula(v: StringValue | undefined);
    /** Calculated Item Location. */
    get pivotArea(): PivotArea | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Query. Serialized as `x:query` */
export declare class Query extends OxmlCompositeElement<Tuples> {
    static _Q: string;
    static _A: string[];
    /** MDX Query String. Serialized as `:mdx` */
    get mdx(): StringValue | undefined;
    set mdx(v: StringValue | undefined);
    /** Tuples. */
    get tuples(): Tuples | undefined;
}
/** OLAP Set. Serialized as `x:set` */
export declare class TupleSet extends OxmlCompositeElement<Tuples | SortByTuple> {
    static _Q: string;
    static _A: string[];
    /** Number of Tuples. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Maximum Rank Requested. Serialized as `:maxRank` */
    get maxRank(): Int32Value | undefined;
    set maxRank(v: Int32Value | undefined);
    /** MDX Set Definition. Serialized as `:setDefinition` */
    get setDefinition(): StringValue | undefined;
    set setDefinition(v: StringValue | undefined);
    /** Set Sort Order. Serialized as `:sortType` */
    get sortType(): SortValues | undefined;
    set sortType(v: SortValues | undefined);
    /** Query Failed. Serialized as `:queryFailed` */
    get queryFailed(): BooleanValue | undefined;
    set queryFailed(v: BooleanValue | undefined);
}
/** Tuple. Serialized as `x:tpl` */
export declare class Tuple extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Field Index. Serialized as `:fld` */
    get field(): UInt32Value | undefined;
    set field(v: UInt32Value | undefined);
    /** Hierarchy Index. Serialized as `:hier` */
    get hierarchy(): UInt32Value | undefined;
    set hierarchy(v: UInt32Value | undefined);
    /** Item Index. Serialized as `:item` */
    get item(): UInt32Value | undefined;
    set item(v: UInt32Value | undefined);
}
/** Server Format. Serialized as `x:serverFormat` */
export declare class ServerFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Culture. Serialized as `:culture` */
    get culture(): StringValue | undefined;
    set culture(v: StringValue | undefined);
    /** Format. Serialized as `:format` */
    get format(): StringValue | undefined;
    set format(v: StringValue | undefined);
}
/** Server Formats. Serialized as `x:serverFormats` */
export declare class ServerFormats extends OxmlCompositeElement<ServerFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** OLAP Query Cache. Serialized as `x:queryCache` */
export declare class QueryCache extends OxmlCompositeElement<Query> {
    static _Q: string;
    static _A: string[];
    /** Cached Query Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Sets. Serialized as `x:sets` */
export declare class Sets extends OxmlCompositeElement<TupleSet> {
    static _Q: string;
    static _A: string[];
    /** Tuple Set Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Entries. Serialized as `x:entries` */
export declare class Entries extends OxmlCompositeElement<MissingItem | NumberItem | ErrorItem | StringItem> {
    static _Q: string;
    static _A: string[];
    /** Tuple Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** OLAP Group Member. Serialized as `x:groupMember` */
export declare class GroupMember extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Group Member Unique Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** Group. Serialized as `:group` */
    get group(): BooleanValue | undefined;
    set group(v: BooleanValue | undefined);
}
/** OLAP Group Members. Serialized as `x:groupMembers` */
export declare class GroupMembers extends OxmlCompositeElement<GroupMember> {
    static _Q: string;
    static _A: string[];
    /** Group Member Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** OLAP Group. Serialized as `x:group` */
export declare class Group extends OxmlCompositeElement<GroupMembers> {
    static _Q: string;
    static _A: string[];
    /** Group Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Unique Group Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** Group Caption. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Parent Unique Name. Serialized as `:uniqueParent` */
    get uniqueParent(): StringValue | undefined;
    set uniqueParent(v: StringValue | undefined);
    /** Group Id. Serialized as `:id` */
    get id(): Int32Value | undefined;
    set id(v: Int32Value | undefined);
    /** OLAP Group Members. */
    get groupMembers(): GroupMembers | undefined;
}
/** OLAP Level Groups. Serialized as `x:groups` */
export declare class Groups extends OxmlCompositeElement<Group> {
    static _Q: string;
    static _A: string[];
    /** Level Group Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** OLAP Grouping Levels. Serialized as `x:groupLevel` */
export declare class GroupLevel extends OxmlCompositeElement<Groups | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Unique Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** Grouping Level Display Name. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** User-Defined Group Level. Serialized as `:user` */
    get user(): BooleanValue | undefined;
    set user(v: BooleanValue | undefined);
    /** Custom Roll Up. Serialized as `:customRollUp` */
    get customRollUp(): BooleanValue | undefined;
    set customRollUp(v: BooleanValue | undefined);
    /** OLAP Level Groups. */
    get groups(): Groups | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** PivotCache Field Id. Serialized as `x:fieldUsage` */
export declare class FieldUsage extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Field Index. Serialized as `:x` */
    get index(): Int32Value | undefined;
    set index(v: Int32Value | undefined);
}
/** OLAP KPI. Serialized as `x:kpi` */
export declare class Kpi extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** KPI Unique Name. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** KPI Display Name. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** KPI Display Folder. Serialized as `:displayFolder` */
    get displayFolder(): StringValue | undefined;
    set displayFolder(v: StringValue | undefined);
    /** KPI Measure Group Name. Serialized as `:measureGroup` */
    get measureGroup(): StringValue | undefined;
    set measureGroup(v: StringValue | undefined);
    /** Parent KPI. Serialized as `:parent` */
    get parentKpi(): StringValue | undefined;
    set parentKpi(v: StringValue | undefined);
    /** KPI Value Unique Name. Serialized as `:value` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
    /** KPI Goal Unique Name. Serialized as `:goal` */
    get goal(): StringValue | undefined;
    set goal(v: StringValue | undefined);
    /** KPI Status Unique Name. Serialized as `:status` */
    get status(): StringValue | undefined;
    set status(v: StringValue | undefined);
    /** KPI Trend Unique Name. Serialized as `:trend` */
    get trend(): StringValue | undefined;
    set trend(v: StringValue | undefined);
    /** KPI Weight Unique Name. Serialized as `:weight` */
    get weight(): StringValue | undefined;
    set weight(v: StringValue | undefined);
}
/** PivotCache Record. Serialized as `x:r` */
export declare class PivotCacheRecord extends OxmlCompositeElement<MissingItem | NumberItem | BooleanItem | ErrorItem | StringItem | DateTimeItem | FieldItem> {
    static _Q: string;
}
/** Defines the XType Class. */
export declare abstract class XType extends OxmlLeafElement {
    static _A: string[];
    /** Shared Items Index. Serialized as `:v` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the MemberPropertiesMap Class. Serialized as `x:mpMap` */
export declare class MemberPropertiesMap extends XType {
    static _Q: string;
}
/** Member Property Indexes. Serialized as `x:x` */
export declare class MemberPropertyIndex extends XType {
    static _Q: string;
}
/** Defines the TuplesType Class. */
export declare abstract class TuplesType extends OxmlCompositeElement<Tuple> {
    static _A: string[];
    /** Member Name Count. Serialized as `:c` */
    get memberNameCount(): UInt32Value | undefined;
    set memberNameCount(v: UInt32Value | undefined);
}
/** Sort By Tuple. Serialized as `x:sortByTuple` */
export declare class SortByTuple extends TuplesType {
    static _Q: string;
}
/** Tuples. Serialized as `x:tpls` */
export declare class Tuples extends TuplesType {
    static _Q: string;
}
/** Date Time. Serialized as `x:d` */
export declare class DateTimeItem extends OxmlCompositeElement<MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:v` */
    get val(): DateTimeValue | undefined;
    set val(v: DateTimeValue | undefined);
    /** Unused Item. Serialized as `:u` */
    get unused(): BooleanValue | undefined;
    set unused(v: BooleanValue | undefined);
    /** Calculated Item Value. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Caption. Serialized as `:c` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Member Property Count. Serialized as `:cp` */
    get propertyCount(): UInt32Value | undefined;
    set propertyCount(v: UInt32Value | undefined);
}
/** Character Value. Serialized as `x:s` */
export declare class StringItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:v` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Unused Item. Serialized as `:u` */
    get unused(): BooleanValue | undefined;
    set unused(v: BooleanValue | undefined);
    /** Calculated Item. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Item Caption. Serialized as `:c` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Member Property Count. Serialized as `:cp` */
    get propertyCount(): UInt32Value | undefined;
    set propertyCount(v: UInt32Value | undefined);
    /** Format Index. Serialized as `:in` */
    get formatIndex(): UInt32Value | undefined;
    set formatIndex(v: UInt32Value | undefined);
    /** Background Color. Serialized as `:bc` */
    get backgroundColor(): HexBinaryValue | undefined;
    set backgroundColor(v: HexBinaryValue | undefined);
    /** Foreground Color. Serialized as `:fc` */
    get foregroundColor(): HexBinaryValue | undefined;
    set foregroundColor(v: HexBinaryValue | undefined);
    /** Italic. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** Underline. Serialized as `:un` */
    get underline(): BooleanValue | undefined;
    set underline(v: BooleanValue | undefined);
    /** Strikethrough. Serialized as `:st` */
    get strikethrough(): BooleanValue | undefined;
    set strikethrough(v: BooleanValue | undefined);
    /** Bold. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
}
/** Error Value. Serialized as `x:e` */
export declare class ErrorItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:v` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Unused Item. Serialized as `:u` */
    get unused(): BooleanValue | undefined;
    set unused(v: BooleanValue | undefined);
    /** Calculated Item. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Item Caption. Serialized as `:c` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Member Property Count. Serialized as `:cp` */
    get propertyCount(): UInt32Value | undefined;
    set propertyCount(v: UInt32Value | undefined);
    /** Format Index. Serialized as `:in` */
    get formatIndex(): UInt32Value | undefined;
    set formatIndex(v: UInt32Value | undefined);
    /** background Color. Serialized as `:bc` */
    get backgroundColor(): HexBinaryValue | undefined;
    set backgroundColor(v: HexBinaryValue | undefined);
    /** Foreground Color. Serialized as `:fc` */
    get foregroundColor(): HexBinaryValue | undefined;
    set foregroundColor(v: HexBinaryValue | undefined);
    /** Italic. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** Underline. Serialized as `:un` */
    get underline(): BooleanValue | undefined;
    set underline(v: BooleanValue | undefined);
    /** Strikethrough. Serialized as `:st` */
    get strikethrough(): BooleanValue | undefined;
    set strikethrough(v: BooleanValue | undefined);
    /** Bold. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
    /** Tuples. */
    get tuples(): Tuples | undefined;
}
/** Boolean. Serialized as `x:b` */
export declare class BooleanItem extends OxmlCompositeElement<MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:v` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
    /** Unused Item. Serialized as `:u` */
    get unused(): BooleanValue | undefined;
    set unused(v: BooleanValue | undefined);
    /** Calculated Item. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Caption. Serialized as `:c` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Member Property Count. Serialized as `:cp` */
    get propertyCount(): UInt32Value | undefined;
    set propertyCount(v: UInt32Value | undefined);
}
/** Numeric. Serialized as `x:n` */
export declare class NumberItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:v` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Unused Item. Serialized as `:u` */
    get unused(): BooleanValue | undefined;
    set unused(v: BooleanValue | undefined);
    /** Calculated Item. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Caption. Serialized as `:c` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Member Property Count. Serialized as `:cp` */
    get propertyCount(): UInt32Value | undefined;
    set propertyCount(v: UInt32Value | undefined);
    /** Format Index. Serialized as `:in` */
    get formatIndex(): UInt32Value | undefined;
    set formatIndex(v: UInt32Value | undefined);
    /** Background Color. Serialized as `:bc` */
    get backgroundColor(): HexBinaryValue | undefined;
    set backgroundColor(v: HexBinaryValue | undefined);
    /** Foreground Color. Serialized as `:fc` */
    get foregroundColor(): HexBinaryValue | undefined;
    set foregroundColor(v: HexBinaryValue | undefined);
    /** Italic. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** Underline. Serialized as `:un` */
    get underline(): BooleanValue | undefined;
    set underline(v: BooleanValue | undefined);
    /** Strikethrough. Serialized as `:st` */
    get strikethrough(): BooleanValue | undefined;
    set strikethrough(v: BooleanValue | undefined);
    /** Bold. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
}
/** No Value. Serialized as `x:m` */
export declare class MissingItem extends OxmlCompositeElement<Tuples | MemberPropertyIndex> {
    static _Q: string;
    static _A: string[];
    /** Unused Item. Serialized as `:u` */
    get unused(): BooleanValue | undefined;
    set unused(v: BooleanValue | undefined);
    /** Calculated Item. Serialized as `:f` */
    get calculated(): BooleanValue | undefined;
    set calculated(v: BooleanValue | undefined);
    /** Caption. Serialized as `:c` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** Member Property Count. Serialized as `:cp` */
    get propertyCount(): UInt32Value | undefined;
    set propertyCount(v: UInt32Value | undefined);
    /** Format Index. Serialized as `:in` */
    get formatIndex(): UInt32Value | undefined;
    set formatIndex(v: UInt32Value | undefined);
    /** background Color. Serialized as `:bc` */
    get backgroundColor(): HexBinaryValue | undefined;
    set backgroundColor(v: HexBinaryValue | undefined);
    /** Foreground Color. Serialized as `:fc` */
    get foregroundColor(): HexBinaryValue | undefined;
    set foregroundColor(v: HexBinaryValue | undefined);
    /** Italic. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** Underline. Serialized as `:un` */
    get underline(): BooleanValue | undefined;
    set underline(v: BooleanValue | undefined);
    /** Strikethrough. Serialized as `:st` */
    get strikethrough(): BooleanValue | undefined;
    set strikethrough(v: BooleanValue | undefined);
    /** Bold. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
}
/** Range Set. Serialized as `x:rangeSet` */
export declare class RangeSet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Field Item Index Page 1. Serialized as `:i1` */
    get fieldItemIndexPage1(): UInt32Value | undefined;
    set fieldItemIndexPage1(v: UInt32Value | undefined);
    /** Field Item Index Page 2. Serialized as `:i2` */
    get fieldItemIndexPage2(): UInt32Value | undefined;
    set fieldItemIndexPage2(v: UInt32Value | undefined);
    /** Field Item index Page 3. Serialized as `:i3` */
    get fieldItemIndexPage3(): UInt32Value | undefined;
    set fieldItemIndexPage3(v: UInt32Value | undefined);
    /** Field Item Index Page 4. Serialized as `:i4` */
    get fieldItemIndexPage4(): UInt32Value | undefined;
    set fieldItemIndexPage4(v: UInt32Value | undefined);
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Named Range. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Sheet Name. Serialized as `:sheet` */
    get sheet(): StringValue | undefined;
    set sheet(v: StringValue | undefined);
    /** Relationship Id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Page Item. Serialized as `x:pageItem` */
export declare class PageItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Page Item Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Page Items. Serialized as `x:page` */
export declare class Page extends OxmlCompositeElement<PageItem> {
    static _Q: string;
    static _A: string[];
    /** Page Item String Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Range Sets. Serialized as `x:rangeSets` */
export declare class RangeSets extends OxmlCompositeElement<RangeSet> {
    static _Q: string;
    static _A: string[];
    /** Reference and Page Item Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Page Item Values. Serialized as `x:pages` */
export declare class Pages extends OxmlCompositeElement<Page> {
    static _Q: string;
    static _A: string[];
    /** Page Item String Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** PivotCache Field. Serialized as `x:cacheField` */
export declare class CacheField extends OxmlCompositeElement<SharedItems | FieldGroup | MemberPropertiesMap | CacheFieldExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** caption. Serialized as `:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
    /** propertyName. Serialized as `:propertyName` */
    get propertyName(): StringValue | undefined;
    set propertyName(v: StringValue | undefined);
    /** serverField. Serialized as `:serverField` */
    get serverField(): BooleanValue | undefined;
    set serverField(v: BooleanValue | undefined);
    /** uniqueList. Serialized as `:uniqueList` */
    get uniqueList(): BooleanValue | undefined;
    set uniqueList(v: BooleanValue | undefined);
    /** numFmtId. Serialized as `:numFmtId` */
    get numberFormatId(): UInt32Value | undefined;
    set numberFormatId(v: UInt32Value | undefined);
    /** formula. Serialized as `:formula` */
    get formula(): StringValue | undefined;
    set formula(v: StringValue | undefined);
    /** sqlType. Serialized as `:sqlType` */
    get sqlType(): Int32Value | undefined;
    set sqlType(v: Int32Value | undefined);
    /** hierarchy. Serialized as `:hierarchy` */
    get hierarchy(): Int32Value | undefined;
    set hierarchy(v: Int32Value | undefined);
    /** level. Serialized as `:level` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
    /** databaseField. Serialized as `:databaseField` */
    get databaseField(): BooleanValue | undefined;
    set databaseField(v: BooleanValue | undefined);
    /** mappingCount. Serialized as `:mappingCount` */
    get mappingCount(): UInt32Value | undefined;
    set mappingCount(v: UInt32Value | undefined);
    /** memberPropertyField. Serialized as `:memberPropertyField` */
    get memberPropertyField(): BooleanValue | undefined;
    set memberPropertyField(v: BooleanValue | undefined);
    /** Returns SharedItems. */
    get sharedItems(): SharedItems | undefined;
    /** Returns FieldGroup. */
    get fieldGroup(): FieldGroup | undefined;
}
/** Text Import Field Settings. Serialized as `x:textField` */
export declare class TextField extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Field Type. Serialized as `:type` */
    get type(): ExternalConnectionValues | undefined;
    set type(v: ExternalConnectionValues | undefined);
    /** Position. Serialized as `:position` */
    get position(): UInt32Value | undefined;
    set position(v: UInt32Value | undefined);
}
/** Index. Serialized as `x:x` */
export declare class FieldItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shared Items Index. Serialized as `:v` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Character Value. Serialized as `x:s` */
export declare class CharacterValue extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:v` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** No Value. Serialized as `x:m` */
export declare class MissingTable extends OxmlLeafElement {
    static _Q: string;
}
/** Parameter Properties. Serialized as `x:parameter` */
export declare class Parameter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Parameter Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** SQL Data Type. Serialized as `:sqlType` */
    get sqlType(): Int32Value | undefined;
    set sqlType(v: Int32Value | undefined);
    /** Parameter Type. Serialized as `:parameterType` */
    get parameterType(): ParameterValues | undefined;
    set parameterType(v: ParameterValues | undefined);
    /** Refresh on Change. Serialized as `:refreshOnChange` */
    get refreshOnChange(): BooleanValue | undefined;
    set refreshOnChange(v: BooleanValue | undefined);
    /** Parameter Prompt String. Serialized as `:prompt` */
    get prompt(): StringValue | undefined;
    set prompt(v: StringValue | undefined);
    /** Boolean. Serialized as `:boolean` */
    get boolean(): BooleanValue | undefined;
    set boolean(v: BooleanValue | undefined);
    /** Double. Serialized as `:double` */
    get double(): DoubleValue | undefined;
    set double(v: DoubleValue | undefined);
    /** Integer. Serialized as `:integer` */
    get integer(): Int32Value | undefined;
    set integer(v: Int32Value | undefined);
    /** String. Serialized as `:string` */
    get string(): StringValue | undefined;
    set string(v: StringValue | undefined);
    /** Cell Reference. Serialized as `:cell` */
    get cell(): StringValue | undefined;
    set cell(v: StringValue | undefined);
}
/** Tables. Serialized as `x:tables` */
export declare class Tables extends OxmlCompositeElement<MissingTable | CharacterValue | FieldItem> {
    static _Q: string;
    static _A: string[];
    /** Count of Tables. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Connection. Serialized as `x:connection` */
export declare class Connection extends OxmlCompositeElement<DatabaseProperties | OlapProperties | WebQueryProperties | TextProperties | Parameters | ConnectionExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** sourceFile. Serialized as `:sourceFile` */
    get sourceFile(): StringValue | undefined;
    set sourceFile(v: StringValue | undefined);
    /** odcFile. Serialized as `:odcFile` */
    get connectionFile(): StringValue | undefined;
    set connectionFile(v: StringValue | undefined);
    /** keepAlive. Serialized as `:keepAlive` */
    get keepAlive(): BooleanValue | undefined;
    set keepAlive(v: BooleanValue | undefined);
    /** interval. Serialized as `:interval` */
    get interval(): UInt32Value | undefined;
    set interval(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): UInt32Value | undefined;
    set type(v: UInt32Value | undefined);
    /** reconnectionMethod. Serialized as `:reconnectionMethod` */
    get reconnectionMethod(): UInt32Value | undefined;
    set reconnectionMethod(v: UInt32Value | undefined);
    /** refreshedVersion. Serialized as `:refreshedVersion` */
    get refreshedVersion(): ByteValue | undefined;
    set refreshedVersion(v: ByteValue | undefined);
    /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
    get minRefreshableVersion(): ByteValue | undefined;
    set minRefreshableVersion(v: ByteValue | undefined);
    /** savePassword. Serialized as `:savePassword` */
    get savePassword(): BooleanValue | undefined;
    set savePassword(v: BooleanValue | undefined);
    /** new. Serialized as `:new` */
    get new(): BooleanValue | undefined;
    set new(v: BooleanValue | undefined);
    /** deleted. Serialized as `:deleted` */
    get deleted(): BooleanValue | undefined;
    set deleted(v: BooleanValue | undefined);
    /** onlyUseConnectionFile. Serialized as `:onlyUseConnectionFile` */
    get onlyUseConnectionFile(): BooleanValue | undefined;
    set onlyUseConnectionFile(v: BooleanValue | undefined);
    /** background. Serialized as `:background` */
    get background(): BooleanValue | undefined;
    set background(v: BooleanValue | undefined);
    /** refreshOnLoad. Serialized as `:refreshOnLoad` */
    get refreshOnLoad(): BooleanValue | undefined;
    set refreshOnLoad(v: BooleanValue | undefined);
    /** saveData. Serialized as `:saveData` */
    get saveData(): BooleanValue | undefined;
    set saveData(v: BooleanValue | undefined);
    /** credentials. Serialized as `:credentials` */
    get credentials(): CredentialsMethodValues | undefined;
    set credentials(v: CredentialsMethodValues | undefined);
    /** singleSignOnId. Serialized as `:singleSignOnId` */
    get singleSignOnId(): StringValue | undefined;
    set singleSignOnId(v: StringValue | undefined);
    /** Returns DatabaseProperties. */
    get databaseProperties(): DatabaseProperties | undefined;
    /** Returns OlapProperties. */
    get olapProperties(): OlapProperties | undefined;
    /** Returns WebQueryProperties. */
    get webQueryProperties(): WebQueryProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Returns Parameters. */
    get parameters(): Parameters | undefined;
    /** Returns ConnectionExtensionList. */
    get connectionExtensionList(): ConnectionExtensionList | undefined;
}
/** XML Mapping. Serialized as `x:DataBinding` */
export declare class DataBinding extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** DataBindingName. Serialized as `:DataBindingName` */
    get dataBindingName(): StringValue | undefined;
    set dataBindingName(v: StringValue | undefined);
    /** FileBinding. Serialized as `:FileBinding` */
    get fileBinding(): BooleanValue | undefined;
    set fileBinding(v: BooleanValue | undefined);
    /** ConnectionID. Serialized as `:ConnectionID` */
    get connectionId(): UInt32Value | undefined;
    set connectionId(v: UInt32Value | undefined);
    /** FileBindingName. Serialized as `:FileBindingName` */
    get fileBindingName(): StringValue | undefined;
    set fileBindingName(v: StringValue | undefined);
    /** DataBindingLoadMode. Serialized as `:DataBindingLoadMode` */
    get dataBindingLoadMode(): UInt32Value | undefined;
    set dataBindingLoadMode(v: UInt32Value | undefined);
}
/** XML Mapping Properties. Serialized as `x:Map` */
export declare class Map extends OxmlCompositeElement<DataBinding> {
    static _Q: string;
    static _A: string[];
    /** XML Mapping ID. Serialized as `:ID` */
    get iD(): UInt32Value | undefined;
    set iD(v: UInt32Value | undefined);
    /** XML Mapping Name. Serialized as `:Name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Root Element Name. Serialized as `:RootElement` */
    get rootElement(): StringValue | undefined;
    set rootElement(v: StringValue | undefined);
    /** Schema Name. Serialized as `:SchemaID` */
    get schemaId(): StringValue | undefined;
    set schemaId(v: StringValue | undefined);
    /** Show Validation Errors. Serialized as `:ShowImportExportValidationErrors` */
    get showImportExportErrors(): BooleanValue | undefined;
    set showImportExportErrors(v: BooleanValue | undefined);
    /** AutoFit Table on Refresh. Serialized as `:AutoFit` */
    get autoFit(): BooleanValue | undefined;
    set autoFit(v: BooleanValue | undefined);
    /** Append Data to Table. Serialized as `:Append` */
    get appendData(): BooleanValue | undefined;
    set appendData(v: BooleanValue | undefined);
    /** Preserve AutoFilter State. Serialized as `:PreserveSortAFLayout` */
    get preserveAutoFilterState(): BooleanValue | undefined;
    set preserveAutoFilterState(v: BooleanValue | undefined);
    /** Preserve Cell Formatting. Serialized as `:PreserveFormat` */
    get preserveFormat(): BooleanValue | undefined;
    set preserveFormat(v: BooleanValue | undefined);
    /** XML Mapping. */
    get dataBinding(): DataBinding | undefined;
}
/** XML Schema. Serialized as `x:Schema` */
export declare class Schema extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** Schema ID. Serialized as `:ID` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Schema Reference. Serialized as `:SchemaRef` */
    get schemaReference(): StringValue | undefined;
    set schemaReference(v: StringValue | undefined);
    /** Schema Root Namespace. Serialized as `:Namespace` */
    get namespace(): StringValue | undefined;
    set namespace(v: StringValue | undefined);
}
/** Defines the XstringType Class. */
export declare abstract class XstringType extends OxmlLeafTextElement {
    static _A: string[];
    /** Content Contains Significant Whitespace. Serialized as `xml:space` */
    get space(): SpaceProcessingModeValues | undefined;
    set space(v: SpaceProcessingModeValues | undefined);
}
/** Defines the Formula2 Class. Serialized as `x:formula2` */
export declare class Formula2 extends XstringType {
    static _Q: string;
}
/** Defines the Formula1 Class. Serialized as `x:formula1` */
export declare class Formula1 extends XstringType {
    static _Q: string;
}
/** Strings in Subtopic. Serialized as `x:stp` */
export declare class Subtopic extends XstringType {
    static _Q: string;
}
/** DDE Link Value. Serialized as `x:val` */
export declare class DdeLinkValue extends XstringType {
    static _Q: string;
}
/** First Page Footer. Serialized as `x:firstFooter` */
export declare class FirstFooter extends XstringType {
    static _Q: string;
}
/** First Page Header. Serialized as `x:firstHeader` */
export declare class FirstHeader extends XstringType {
    static _Q: string;
}
/** Even Page Footer. Serialized as `x:evenFooter` */
export declare class EvenFooter extends XstringType {
    static _Q: string;
}
/** Even Page Header. Serialized as `x:evenHeader` */
export declare class EvenHeader extends XstringType {
    static _Q: string;
}
/** Odd Page Footer. Serialized as `x:oddFooter` */
export declare class OddFooter extends XstringType {
    static _Q: string;
}
/** Odd Header. Serialized as `x:oddHeader` */
export declare class OddHeader extends XstringType {
    static _Q: string;
}
/** Old Formula. Serialized as `x:oldFormula` */
export declare class OldFormula extends XstringType {
    static _Q: string;
}
/** Formula. Serialized as `x:formula` */
export declare class Formula extends XstringType {
    static _Q: string;
}
/** Cell Value. Serialized as `x:v` */
export declare class CellValue extends XstringType {
    static _Q: string;
}
/** Text. Serialized as `x:t` */
export declare class Text extends XstringType {
    static _Q: string;
}
/** Author. Serialized as `x:author` */
export declare class Author extends XstringType {
    static _Q: string;
}
/** Comment. Serialized as `x:comment` */
export declare class Comment extends OxmlCompositeElement<CommentText | CommentProperties> {
    static _Q: string;
    static _A: string[];
    /** Cell Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Author Id. Serialized as `:authorId` */
    get authorId(): UInt32Value | undefined;
    set authorId(v: UInt32Value | undefined);
    /** Unique Identifier for Comment. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** shapeId. Serialized as `:shapeId` */
    get shapeId(): UInt32Value | undefined;
    set shapeId(v: UInt32Value | undefined);
    /** Comment Text. */
    get commentText(): CommentText | undefined;
    /** Returns CommentProperties. */
    get commentProperties(): CommentProperties | undefined;
}
/** List of Comments. Serialized as `x:commentList` */
export declare class CommentList extends OxmlCompositeElement<Comment> {
    static _Q: string;
}
/** Authors. Serialized as `x:authors` */
export declare class Authors extends OxmlCompositeElement<Author> {
    static _Q: string;
}
/** Cell. Serialized as `x:c` */
export declare class CalculationCell extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Cell Reference. Serialized as `:r` */
    get cellReference(): StringValue | undefined;
    set cellReference(v: StringValue | undefined);
    /** Sheet Id. Serialized as `:i` */
    get sheetId(): Int32Value | undefined;
    set sheetId(v: Int32Value | undefined);
    /** Child Chain. Serialized as `:s` */
    get inChildChain(): BooleanValue | undefined;
    set inChildChain(v: BooleanValue | undefined);
    /** New Dependency Level. Serialized as `:l` */
    get newLevel(): BooleanValue | undefined;
    set newLevel(v: BooleanValue | undefined);
    /** New Thread. Serialized as `:t` */
    get newThread(): BooleanValue | undefined;
    set newThread(v: BooleanValue | undefined);
    /** Array. Serialized as `:a` */
    get array(): BooleanValue | undefined;
    set array(v: BooleanValue | undefined);
}
/** Custom Filter Criteria. Serialized as `x:customFilter` */
export declare class CustomFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Filter Comparison Operator. Serialized as `:operator` */
    get operator(): FilterOperatorValues | undefined;
    set operator(v: FilterOperatorValues | undefined);
    /** Top or Bottom Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the ExtensionList Class. Serialized as `x:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<Extension> {
    static _Q: string;
}
/** Sort State for Auto Filter. Serialized as `x:sortState` */
export declare class SortState extends OxmlCompositeElement<X14SortCondition | SortCondition | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Sort by Columns. Serialized as `:columnSort` */
    get columnSort(): BooleanValue | undefined;
    set columnSort(v: BooleanValue | undefined);
    /** Case Sensitive. Serialized as `:caseSensitive` */
    get caseSensitive(): BooleanValue | undefined;
    set caseSensitive(v: BooleanValue | undefined);
    /** Sort Method. Serialized as `:sortMethod` */
    get sortMethod(): SortMethodValues | undefined;
    set sortMethod(v: SortMethodValues | undefined);
    /** Sort Range. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** AutoFilter Column. Serialized as `x:filterColumn` */
export declare class FilterColumn extends OxmlCompositeElement<Filters | Top10 | X14CustomFilters | CustomFilters | DynamicFilter | ColorFilter | X14IconFilter | IconFilter | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Filter Column Data. Serialized as `:colId` */
    get columnId(): UInt32Value | undefined;
    set columnId(v: UInt32Value | undefined);
    /** Hidden AutoFilter Button. Serialized as `:hiddenButton` */
    get hiddenButton(): BooleanValue | undefined;
    set hiddenButton(v: BooleanValue | undefined);
    /** Show Filter Button. Serialized as `:showButton` */
    get showButton(): BooleanValue | undefined;
    set showButton(v: BooleanValue | undefined);
    /** Filter Criteria. */
    get filters(): Filters | undefined;
    /** Top 10. */
    get top10(): Top10 | undefined;
    /** Returns X14CustomFilters. */
    get customFilters14(): X14CustomFilters | undefined;
    /** Custom Filters. */
    get customFilters(): CustomFilters | undefined;
    /** Dynamic Filter. */
    get dynamicFilter(): DynamicFilter | undefined;
    /** Color Filter Criteria. */
    get colorFilter(): ColorFilter | undefined;
    /** Returns X14IconFilter. */
    get iconFilter14(): X14IconFilter | undefined;
    /** Icon Filter. */
    get iconFilter(): IconFilter | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Workbook. Serialized as `x:workbook` */
export declare class Workbook extends OxmlPartRootElement<FileVersion | FileSharing | WorkbookProperties | X15acAbsolutePath | WorkbookProtection | BookViews | Sheets | FunctionGroups | ExternalReferences | DefinedNames | CalculationProperties | OleSize | CustomWorkbookViews | PivotCaches | WebPublishing | FileRecoveryProperties | WebPublishObjects | WorkbookExtensionList> {
    static _Q: string;
    static _A: string[];
    /** conformance. Serialized as `:conformance` */
    get conformance(): ConformanceClass | undefined;
    set conformance(v: ConformanceClass | undefined);
    /** Returns FileVersion. */
    get fileVersion(): FileVersion | undefined;
    /** Returns FileSharing. */
    get fileSharing(): FileSharing | undefined;
    /** Returns WorkbookProperties. */
    get workbookProperties(): WorkbookProperties | undefined;
    /** Returns X15acAbsolutePath. */
    get absolutePath(): X15acAbsolutePath | undefined;
    /** Returns WorkbookProtection. */
    get workbookProtection(): WorkbookProtection | undefined;
    /** Returns BookViews. */
    get bookViews(): BookViews | undefined;
    /** Returns Sheets. */
    get sheets(): Sheets | undefined;
    /** Returns FunctionGroups. */
    get functionGroups(): FunctionGroups | undefined;
    /** Returns ExternalReferences. */
    get externalReferences(): ExternalReferences | undefined;
    /** Returns DefinedNames. */
    get definedNames(): DefinedNames | undefined;
    /** Returns CalculationProperties. */
    get calculationProperties(): CalculationProperties | undefined;
    /** Returns OleSize. */
    get oleSize(): OleSize | undefined;
    /** Returns CustomWorkbookViews. */
    get customWorkbookViews(): CustomWorkbookViews | undefined;
    /** Returns PivotCaches. */
    get pivotCaches(): PivotCaches | undefined;
    /** Returns WebPublishing. */
    get webPublishing(): WebPublishing | undefined;
}
/** Volatile Dependency Types. Serialized as `x:volTypes` */
export declare class VolatileTypes extends OxmlPartRootElement<VolatileType | ExtensionList> {
    static _Q: string;
}
/** Table. Serialized as `x:table` */
export declare class Table extends OxmlPartRootElement<AutoFilter | SortState | TableColumns | TableStyleInfo | TableExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Table Id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Table Name. Serialized as `:displayName` */
    get displayName(): StringValue | undefined;
    set displayName(v: StringValue | undefined);
    /** Table Comment. Serialized as `:comment` */
    get comment(): StringValue | undefined;
    set comment(v: StringValue | undefined);
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Table Type. Serialized as `:tableType` */
    get tableType(): TableValues | undefined;
    set tableType(v: TableValues | undefined);
    /** Header Row Count. Serialized as `:headerRowCount` */
    get headerRowCount(): UInt32Value | undefined;
    set headerRowCount(v: UInt32Value | undefined);
    /** Insert Row Showing. Serialized as `:insertRow` */
    get insertRow(): BooleanValue | undefined;
    set insertRow(v: BooleanValue | undefined);
    /** Insert Row Shift. Serialized as `:insertRowShift` */
    get insertRowShift(): BooleanValue | undefined;
    set insertRowShift(v: BooleanValue | undefined);
    /** Totals Row Count. Serialized as `:totalsRowCount` */
    get totalsRowCount(): UInt32Value | undefined;
    set totalsRowCount(v: UInt32Value | undefined);
    /** Totals Row Shown. Serialized as `:totalsRowShown` */
    get totalsRowShown(): BooleanValue | undefined;
    set totalsRowShown(v: BooleanValue | undefined);
    /** Published. Serialized as `:published` */
    get published(): BooleanValue | undefined;
    set published(v: BooleanValue | undefined);
    /** Header Row Format Id. Serialized as `:headerRowDxfId` */
    get headerRowFormatId(): UInt32Value | undefined;
    set headerRowFormatId(v: UInt32Value | undefined);
    /** Data Area Format Id. Serialized as `:dataDxfId` */
    get dataFormatId(): UInt32Value | undefined;
    set dataFormatId(v: UInt32Value | undefined);
    /** Totals Row Format Id. Serialized as `:totalsRowDxfId` */
    get totalsRowFormatId(): UInt32Value | undefined;
    set totalsRowFormatId(v: UInt32Value | undefined);
    /** Header Row Border Format Id. Serialized as `:headerRowBorderDxfId` */
    get headerRowBorderFormatId(): UInt32Value | undefined;
    set headerRowBorderFormatId(v: UInt32Value | undefined);
    /** Table Border Format Id. Serialized as `:tableBorderDxfId` */
    get borderFormatId(): UInt32Value | undefined;
    set borderFormatId(v: UInt32Value | undefined);
    /** Totals Row Border Format Id. Serialized as `:totalsRowBorderDxfId` */
    get totalsRowBorderFormatId(): UInt32Value | undefined;
    set totalsRowBorderFormatId(v: UInt32Value | undefined);
    /** Header Row Style. Serialized as `:headerRowCellStyle` */
    get headerRowCellStyle(): StringValue | undefined;
    set headerRowCellStyle(v: StringValue | undefined);
    /** Data Style Name. Serialized as `:dataCellStyle` */
    get dataCellStyle(): StringValue | undefined;
    set dataCellStyle(v: StringValue | undefined);
    /** Totals Row Style. Serialized as `:totalsRowCellStyle` */
    get totalsRowCellStyle(): StringValue | undefined;
    set totalsRowCellStyle(v: StringValue | undefined);
    /** Connection ID. Serialized as `:connectionId` */
    get connectionId(): UInt32Value | undefined;
    set connectionId(v: UInt32Value | undefined);
    /** Table AutoFilter. */
    get autoFilter(): AutoFilter | undefined;
    /** Sort State. */
    get sortState(): SortState | undefined;
    /** Table Columns. */
    get tableColumns(): TableColumns | undefined;
    /** Table Style. */
    get tableStyleInfo(): TableStyleInfo | undefined;
    /** Future Feature Data Storage Area. */
    get tableExtensionList(): TableExtensionList | undefined;
}
/** External Reference. Serialized as `x:externalLink` */
export declare class ExternalLink extends OxmlPartRootElement<ExternalBook | DdeLink | OleLink | ExtensionList> {
    static _Q: string;
}
/** Style Sheet. Serialized as `x:styleSheet` */
export declare class Stylesheet extends OxmlPartRootElement<NumberingFormats | Fonts | Fills | Borders | CellStyleFormats | CellFormats | CellStyles | DifferentialFormats | TableStyles | Colors | StylesheetExtensionList> {
    static _Q: string;
    /** Returns NumberingFormats. */
    get numberingFormats(): NumberingFormats | undefined;
    /** Returns Fonts. */
    get fonts(): Fonts | undefined;
    /** Returns Fills. */
    get fills(): Fills | undefined;
    /** Returns Borders. */
    get borders(): Borders | undefined;
    /** Returns CellStyleFormats. */
    get cellStyleFormats(): CellStyleFormats | undefined;
    /** Returns CellFormats. */
    get cellFormats(): CellFormats | undefined;
    /** Returns CellStyles. */
    get cellStyles(): CellStyles | undefined;
    /** Returns DifferentialFormats. */
    get differentialFormats(): DifferentialFormats | undefined;
    /** Returns TableStyles. */
    get tableStyles(): TableStyles | undefined;
    /** Returns Colors. */
    get colors(): Colors | undefined;
    /** Returns StylesheetExtensionList. */
    get stylesheetExtensionList(): StylesheetExtensionList | undefined;
}
/** Single Cells. Serialized as `x:singleXmlCells` */
export declare class SingleXmlCells extends OxmlPartRootElement<SingleXmlCell> {
    static _Q: string;
}
/** Metadata. Serialized as `x:metadata` */
export declare class Metadata extends OxmlPartRootElement<MetadataTypes | MetadataStrings | MdxMetadata | FutureMetadata | CellMetadata | ValueMetadata | ExtensionList> {
    static _Q: string;
    /** Metadata Types Collection. */
    get metadataTypes(): MetadataTypes | undefined;
    /** Metadata String Store. */
    get metadataStrings(): MetadataStrings | undefined;
    /** MDX Metadata Information. */
    get mdxMetadata(): MdxMetadata | undefined;
}
/** Dialog Sheet. Serialized as `x:dialogsheet` */
export declare class DialogSheet extends OxmlPartRootElement<SheetProperties | SheetViews | SheetFormatProperties | SheetProtection | CustomSheetViews | PrintOptions | PageMargins | PageSetup | HeaderFooter | Drawing | LegacyDrawing | LegacyDrawingHeaderFooter | DrawingHeaderFooter | OleObjects | Controls | ExtensionList> {
    static _Q: string;
    /** Sheet Properties. */
    get sheetProperties(): SheetProperties | undefined;
    /** Dialog Sheet Views. */
    get sheetViews(): SheetViews | undefined;
    /** Dialog Sheet Format Properties. */
    get sheetFormatProperties(): SheetFormatProperties | undefined;
    /** Sheet Protection. */
    get sheetProtection(): SheetProtection | undefined;
    /** Custom Sheet Views. */
    get customSheetViews(): CustomSheetViews | undefined;
    /** Print Options. */
    get printOptions(): PrintOptions | undefined;
    /** Page Margins. */
    get pageMargins(): PageMargins | undefined;
    /** Page Setup Settings. */
    get pageSetup(): PageSetup | undefined;
    /** Header and Footer Settings. */
    get headerFooter(): HeaderFooter | undefined;
    /** Drawing. */
    get drawing(): Drawing | undefined;
    /** Legacy Drawing. */
    get legacyDrawing(): LegacyDrawing | undefined;
    /** Legacy Drawing Header Footer. */
    get legacyDrawingHeaderFooter(): LegacyDrawingHeaderFooter | undefined;
    /** Returns DrawingHeaderFooter. */
    get drawingHeaderFooter(): DrawingHeaderFooter | undefined;
    /** Returns OleObjects. */
    get oleObjects(): OleObjects | undefined;
    /** Returns Controls. */
    get controls(): Controls | undefined;
    /** Future Feature Data Storage Area. */
    get extensionList(): ExtensionList | undefined;
}
/** Chart Sheet. Serialized as `x:chartsheet` */
export declare class Chartsheet extends OxmlPartRootElement<ChartSheetProperties | ChartSheetViews | ChartSheetProtection | CustomChartsheetViews | PageMargins | ChartSheetPageSetup | HeaderFooter | Drawing | LegacyDrawing | LegacyDrawingHeaderFooter | DrawingHeaderFooter | Picture | WebPublishItems | ExtensionList> {
    static _Q: string;
    /** Chart Sheet Properties. */
    get chartSheetProperties(): ChartSheetProperties | undefined;
    /** Chart Sheet Views. */
    get chartSheetViews(): ChartSheetViews | undefined;
    /** Chart Sheet Protection. */
    get chartSheetProtection(): ChartSheetProtection | undefined;
    /** Custom Chart Sheet Views. */
    get customChartsheetViews(): CustomChartsheetViews | undefined;
    /** Returns PageMargins. */
    get pageMargins(): PageMargins | undefined;
    /** Returns ChartSheetPageSetup. */
    get chartSheetPageSetup(): ChartSheetPageSetup | undefined;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
    /** Drawing. */
    get drawing(): Drawing | undefined;
    /** Returns LegacyDrawing. */
    get legacyDrawing(): LegacyDrawing | undefined;
    /** Legacy Drawing Reference in  Header Footer. */
    get legacyDrawingHeaderFooter(): LegacyDrawingHeaderFooter | undefined;
    /** Returns DrawingHeaderFooter. */
    get drawingHeaderFooter(): DrawingHeaderFooter | undefined;
    /** Returns Picture. */
    get picture(): Picture | undefined;
    /** Returns WebPublishItems. */
    get webPublishItems(): WebPublishItems | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Worksheet. Serialized as `x:worksheet` */
export declare class Worksheet extends OxmlPartRootElement<SheetProperties | SheetDimension | SheetViews | SheetFormatProperties | Columns | SheetData | SheetCalculationProperties | SheetProtection | ProtectedRanges | Scenarios | AutoFilter | SortState | DataConsolidate | CustomSheetViews | MergeCells | PhoneticProperties | ConditionalFormatting | DataValidations | Hyperlinks | PrintOptions | PageMargins | PageSetup | HeaderFooter | RowBreaks | ColumnBreaks | CustomProperties | CellWatches | IgnoredErrors | Drawing | LegacyDrawing | LegacyDrawingHeaderFooter | DrawingHeaderFooter | Picture | OleObjects | Controls | WebPublishItems | TableParts | WorksheetExtensionList> {
    static _Q: string;
    /** Returns SheetProperties. */
    get sheetProperties(): SheetProperties | undefined;
    /** Returns SheetDimension. */
    get sheetDimension(): SheetDimension | undefined;
    /** Returns SheetViews. */
    get sheetViews(): SheetViews | undefined;
    /** Returns SheetFormatProperties. */
    get sheetFormatProperties(): SheetFormatProperties | undefined;
}
/** User List. Serialized as `x:users` */
export declare class Users extends OxmlPartRootElement<UserInfo> {
    static _Q: string;
    static _A: string[];
    /** Active User Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Revisions. Serialized as `x:revisions` */
export declare class Revisions extends OxmlPartRootElement<RevisionRowColumn | RevisionMove | RevisionCustomView | RevisionSheetName | RevisionInsertSheet | RevisionCellChange | RevisionFormat | RevisionAutoFormat | RevisionDefinedName | RevisionComment | RevisionQueryTable | RevisionConflict> {
    static _Q: string;
}
/** Revision Headers. Serialized as `x:headers` */
export declare class Headers extends OxmlPartRootElement<Header> {
    static _Q: string;
    static _A: string[];
    /** Last Revision GUID. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** Last GUID. Serialized as `:lastGuid` */
    get lastGuid(): StringValue | undefined;
    set lastGuid(v: StringValue | undefined);
    /** Shared Workbook. Serialized as `:shared` */
    get shared(): BooleanValue | undefined;
    set shared(v: BooleanValue | undefined);
    /** Disk Revisions. Serialized as `:diskRevisions` */
    get diskRevisions(): BooleanValue | undefined;
    set diskRevisions(v: BooleanValue | undefined);
    /** History. Serialized as `:history` */
    get history(): BooleanValue | undefined;
    set history(v: BooleanValue | undefined);
    /** Track Revisions. Serialized as `:trackRevisions` */
    get trackRevisions(): BooleanValue | undefined;
    set trackRevisions(v: BooleanValue | undefined);
    /** Exclusive Mode. Serialized as `:exclusive` */
    get exclusive(): BooleanValue | undefined;
    set exclusive(v: BooleanValue | undefined);
    /** Revision Id. Serialized as `:revisionId` */
    get revisionId(): UInt32Value | undefined;
    set revisionId(v: UInt32Value | undefined);
    /** Version. Serialized as `:version` */
    get version(): Int32Value | undefined;
    set version(v: Int32Value | undefined);
    /** Keep Change History. Serialized as `:keepChangeHistory` */
    get keepChangeHistory(): BooleanValue | undefined;
    set keepChangeHistory(v: BooleanValue | undefined);
    /** Protected. Serialized as `:protected` */
    get protected(): BooleanValue | undefined;
    set protected(v: BooleanValue | undefined);
    /** Preserve History. Serialized as `:preserveHistory` */
    get preserveHistory(): UInt32Value | undefined;
    set preserveHistory(v: UInt32Value | undefined);
}
/** Shared String Table. Serialized as `x:sst` */
export declare class SharedStringTable extends OxmlPartRootElement<SharedStringItem | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** String Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
    /** Unique String Count. Serialized as `:uniqueCount` */
    get uniqueCount(): UInt32Value | undefined;
    set uniqueCount(v: UInt32Value | undefined);
}
/** Query Table. Serialized as `x:queryTable` */
export declare class QueryTable extends OxmlPartRootElement<QueryTableRefresh | QueryTableExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** headers. Serialized as `:headers` */
    get headers(): BooleanValue | undefined;
    set headers(v: BooleanValue | undefined);
    /** rowNumbers. Serialized as `:rowNumbers` */
    get rowNumbers(): BooleanValue | undefined;
    set rowNumbers(v: BooleanValue | undefined);
    /** disableRefresh. Serialized as `:disableRefresh` */
    get disableRefresh(): BooleanValue | undefined;
    set disableRefresh(v: BooleanValue | undefined);
    /** backgroundRefresh. Serialized as `:backgroundRefresh` */
    get backgroundRefresh(): BooleanValue | undefined;
    set backgroundRefresh(v: BooleanValue | undefined);
    /** firstBackgroundRefresh. Serialized as `:firstBackgroundRefresh` */
    get firstBackgroundRefresh(): BooleanValue | undefined;
    set firstBackgroundRefresh(v: BooleanValue | undefined);
    /** refreshOnLoad. Serialized as `:refreshOnLoad` */
    get refreshOnLoad(): BooleanValue | undefined;
    set refreshOnLoad(v: BooleanValue | undefined);
    /** growShrinkType. Serialized as `:growShrinkType` */
    get growShrinkType(): GrowShrinkValues | undefined;
    set growShrinkType(v: GrowShrinkValues | undefined);
    /** fillFormulas. Serialized as `:fillFormulas` */
    get fillFormulas(): BooleanValue | undefined;
    set fillFormulas(v: BooleanValue | undefined);
    /** removeDataOnSave. Serialized as `:removeDataOnSave` */
    get removeDataOnSave(): BooleanValue | undefined;
    set removeDataOnSave(v: BooleanValue | undefined);
    /** disableEdit. Serialized as `:disableEdit` */
    get disableEdit(): BooleanValue | undefined;
    set disableEdit(v: BooleanValue | undefined);
    /** preserveFormatting. Serialized as `:preserveFormatting` */
    get preserveFormatting(): BooleanValue | undefined;
    set preserveFormatting(v: BooleanValue | undefined);
    /** adjustColumnWidth. Serialized as `:adjustColumnWidth` */
    get adjustColumnWidth(): BooleanValue | undefined;
    set adjustColumnWidth(v: BooleanValue | undefined);
    /** intermediate. Serialized as `:intermediate` */
    get intermediate(): BooleanValue | undefined;
    set intermediate(v: BooleanValue | undefined);
    /** connectionId. Serialized as `:connectionId` */
    get connectionId(): UInt32Value | undefined;
    set connectionId(v: UInt32Value | undefined);
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
    /** Returns QueryTableRefresh. */
    get queryTableRefresh(): QueryTableRefresh | undefined;
    /** Returns QueryTableExtensionList. */
    get queryTableExtensionList(): QueryTableExtensionList | undefined;
}
/** PivotTable Definition. Serialized as `x:pivotTableDefinition` */
export declare class PivotTableDefinition extends OxmlPartRootElement<Location | PivotFields | RowFields | RowItems | ColumnFields | ColumnItems | PageFields | DataFields | Formats | ConditionalFormats | ChartFormats | PivotHierarchies | PivotTableStyle | PivotFilters | RowHierarchiesUsage | ColumnHierarchiesUsage | PivotTableDefinitionExtensionList> {
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
    /** Returns Location. */
    get location(): Location | undefined;
    /** Returns PivotFields. */
    get pivotFields(): PivotFields | undefined;
    /** Returns RowFields. */
    get rowFields(): RowFields | undefined;
    /** Returns RowItems. */
    get rowItems(): RowItems | undefined;
    /** Returns ColumnFields. */
    get columnFields(): ColumnFields | undefined;
    /** Returns ColumnItems. */
    get columnItems(): ColumnItems | undefined;
    /** Returns PageFields. */
    get pageFields(): PageFields | undefined;
    /** Returns DataFields. */
    get dataFields(): DataFields | undefined;
    /** Returns Formats. */
    get formats(): Formats | undefined;
    /** Returns ConditionalFormats. */
    get conditionalFormats(): ConditionalFormats | undefined;
    /** Returns ChartFormats. */
    get chartFormats(): ChartFormats | undefined;
    /** Returns PivotHierarchies. */
    get pivotHierarchies(): PivotHierarchies | undefined;
    /** Returns PivotTableStyle. */
    get pivotTableStyle(): PivotTableStyle | undefined;
    /** Returns PivotFilters. */
    get pivotFilters(): PivotFilters | undefined;
    /** Returns RowHierarchiesUsage. */
    get rowHierarchiesUsage(): RowHierarchiesUsage | undefined;
    /** Returns ColumnHierarchiesUsage. */
    get columnHierarchiesUsage(): ColumnHierarchiesUsage | undefined;
    /** Returns PivotTableDefinitionExtensionList. */
    get pivotTableDefinitionExtensionList(): PivotTableDefinitionExtensionList | undefined;
}
/** PivotCache Records. Serialized as `x:pivotCacheRecords` */
export declare class PivotCacheRecords extends OxmlPartRootElement<PivotCacheRecord | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** PivotCache Records Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** PivotCache Definition. Serialized as `x:pivotCacheDefinition` */
export declare class PivotCacheDefinition extends OxmlPartRootElement<CacheSource | CacheFields | CacheHierarchies | Kpis | TupleCache | CalculatedItems | CalculatedMembers | Dimensions | MeasureGroups | Maps | PivotCacheDefinitionExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** invalid. Serialized as `:invalid` */
    get invalid(): BooleanValue | undefined;
    set invalid(v: BooleanValue | undefined);
    /** saveData. Serialized as `:saveData` */
    get saveData(): BooleanValue | undefined;
    set saveData(v: BooleanValue | undefined);
    /** refreshOnLoad. Serialized as `:refreshOnLoad` */
    get refreshOnLoad(): BooleanValue | undefined;
    set refreshOnLoad(v: BooleanValue | undefined);
    /** optimizeMemory. Serialized as `:optimizeMemory` */
    get optimizeMemory(): BooleanValue | undefined;
    set optimizeMemory(v: BooleanValue | undefined);
    /** enableRefresh. Serialized as `:enableRefresh` */
    get enableRefresh(): BooleanValue | undefined;
    set enableRefresh(v: BooleanValue | undefined);
    /** refreshedBy. Serialized as `:refreshedBy` */
    get refreshedBy(): StringValue | undefined;
    set refreshedBy(v: StringValue | undefined);
    /** refreshedDateIso. Serialized as `:refreshedDateIso` */
    get lastRefreshedDateIso(): DateTimeValue | undefined;
    set lastRefreshedDateIso(v: DateTimeValue | undefined);
    /** refreshedDate. Serialized as `:refreshedDate` */
    get refreshedDate(): DoubleValue | undefined;
    set refreshedDate(v: DoubleValue | undefined);
    /** backgroundQuery. Serialized as `:backgroundQuery` */
    get backgroundQuery(): BooleanValue | undefined;
    set backgroundQuery(v: BooleanValue | undefined);
    /** missingItemsLimit. Serialized as `:missingItemsLimit` */
    get missingItemsLimit(): UInt32Value | undefined;
    set missingItemsLimit(v: UInt32Value | undefined);
    /** createdVersion. Serialized as `:createdVersion` */
    get createdVersion(): ByteValue | undefined;
    set createdVersion(v: ByteValue | undefined);
    /** refreshedVersion. Serialized as `:refreshedVersion` */
    get refreshedVersion(): ByteValue | undefined;
    set refreshedVersion(v: ByteValue | undefined);
    /** minRefreshableVersion. Serialized as `:minRefreshableVersion` */
    get minRefreshableVersion(): ByteValue | undefined;
    set minRefreshableVersion(v: ByteValue | undefined);
    /** recordCount. Serialized as `:recordCount` */
    get recordCount(): UInt32Value | undefined;
    set recordCount(v: UInt32Value | undefined);
    /** upgradeOnRefresh. Serialized as `:upgradeOnRefresh` */
    get upgradeOnRefresh(): BooleanValue | undefined;
    set upgradeOnRefresh(v: BooleanValue | undefined);
    /** tupleCache. Serialized as `:tupleCache` */
    get isTupleCache(): BooleanValue | undefined;
    set isTupleCache(v: BooleanValue | undefined);
    /** supportSubquery. Serialized as `:supportSubquery` */
    get supportSubquery(): BooleanValue | undefined;
    set supportSubquery(v: BooleanValue | undefined);
    /** supportAdvancedDrill. Serialized as `:supportAdvancedDrill` */
    get supportAdvancedDrill(): BooleanValue | undefined;
    set supportAdvancedDrill(v: BooleanValue | undefined);
    /** Returns CacheSource. */
    get cacheSource(): CacheSource | undefined;
    /** Returns CacheFields. */
    get cacheFields(): CacheFields | undefined;
    /** Returns CacheHierarchies. */
    get cacheHierarchies(): CacheHierarchies | undefined;
    /** Returns Kpis. */
    get kpis(): Kpis | undefined;
    /** Returns TupleCache. */
    get tupleCache(): TupleCache | undefined;
    /** Returns CalculatedItems. */
    get calculatedItems(): CalculatedItems | undefined;
    /** Returns CalculatedMembers. */
    get calculatedMembers(): CalculatedMembers | undefined;
    /** Returns Dimensions. */
    get dimensions(): Dimensions | undefined;
    /** Returns MeasureGroups. */
    get measureGroups(): MeasureGroups | undefined;
    /** Returns Maps. */
    get maps(): Maps | undefined;
    /** Returns PivotCacheDefinitionExtensionList. */
    get pivotCacheDefinitionExtensionList(): PivotCacheDefinitionExtensionList | undefined;
}
/** Connections. Serialized as `x:connections` */
export declare class Connections extends OxmlPartRootElement<Connection> {
    static _Q: string;
}
/** XML Mapping. Serialized as `x:MapInfo` */
export declare class MapInfo extends OxmlPartRootElement<Schema | Map> {
    static _Q: string;
    static _A: string[];
    /** Prefix Mappings for XPath Expressions. Serialized as `:SelectionNamespaces` */
    get selectionNamespaces(): StringValue | undefined;
    set selectionNamespaces(v: StringValue | undefined);
}
/** Comments. Serialized as `x:comments` */
export declare class Comments extends OxmlPartRootElement<Authors | CommentList | ExtensionList> {
    static _Q: string;
    /** Authors. */
    get authors(): Authors | undefined;
    /** List of Comments. */
    get commentList(): CommentList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Calculation Chain Info. Serialized as `x:calcChain` */
export declare class CalculationChain extends OxmlPartRootElement<CalculationCell | ExtensionList> {
    static _Q: string;
}
/** Extension. Serialized as `x:ext` */
export declare class Extension extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
export declare function initSpreadsheetNamespace(): {
    prefix: string;
    xmlns: string;
};
