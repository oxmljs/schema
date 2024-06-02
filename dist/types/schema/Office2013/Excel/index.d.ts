import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { ByteValue } from '../../../framework/types/ByteValue';
import { PivotFilterValues } from '../../Spreadsheet';
import { FileTypeValues } from '../../Spreadsheet';
import { QualifierValues } from '../../Spreadsheet';
import { TabularSlicerCacheSortOrderValues } from '../../Office2010/Excel';
import { SlicerCacheCrossFilterValues } from '../../Office2010/Excel';
import { FilterColumn as XFilterColumn } from '../../Spreadsheet';
import { SortState as XSortState } from '../../Spreadsheet';
import { ExtensionList as XExtensionList } from '../../Spreadsheet';
import { Extension as XExtension } from '../../Spreadsheet';
import { TextFields as XTextFields } from '../../Spreadsheet';
import { Formula as XneFormula } from '../../Office/Excel';
import { SlicerCachePivotTable as X14SlicerCachePivotTable } from '../../Office2010/Excel';
import { SlicerCache as X14SlicerCache } from '../../Office2010/Excel';
import { DifferentialFormat as XDifferentialFormat } from '../../Spreadsheet';
import { PivotCache as XPivotCache } from '../../Spreadsheet';
export declare enum TimelineStyleType {
    /** undefined. Serialized value: `selectionLabel` */
    SelectionLabel = "selectionLabel",
    /** undefined. Serialized value: `timeLevel` */
    TimeLevel = "timeLevel",
    /** undefined. Serialized value: `periodLabel1` */
    PeriodLabel1 = "periodLabel1",
    /** undefined. Serialized value: `periodLabel2` */
    PeriodLabel2 = "periodLabel2",
    /** undefined. Serialized value: `selectedTimeBlock` */
    SelectedTimeBlock = "selectedTimeBlock",
    /** undefined. Serialized value: `unselectedTimeBlock` */
    UnselectedTimeBlock = "unselectedTimeBlock",
    /** undefined. Serialized value: `selectedTimeBlockSpace` */
    SelectedTimeBlockSpace = "selectedTimeBlockSpace"
}
export declare const TimelineStyleTypeArray: readonly [TimelineStyleType.SelectionLabel, TimelineStyleType.TimeLevel, TimelineStyleType.PeriodLabel1, TimelineStyleType.PeriodLabel2, TimelineStyleType.SelectedTimeBlock, TimelineStyleType.UnselectedTimeBlock, TimelineStyleType.SelectedTimeBlockSpace];
export declare enum CalculatedMemberNumberFormat {
    /** undefined. Serialized value: `default` */
    Default = "default",
    /** undefined. Serialized value: `number` */
    Number = "number",
    /** undefined. Serialized value: `percent` */
    Percent = "percent"
}
export declare const CalculatedMemberNumberFormatArray: readonly [CalculatedMemberNumberFormat.Default, CalculatedMemberNumberFormat.Number, CalculatedMemberNumberFormat.Percent];
export declare enum SXVCellType {
    /** undefined. Serialized value: `b` */
    Boolean = "b",
    /** undefined. Serialized value: `n` */
    Number = "n",
    /** undefined. Serialized value: `e` */
    Error = "e",
    /** undefined. Serialized value: `str` */
    String = "str",
    /** undefined. Serialized value: `d` */
    Date = "d",
    /** undefined. Serialized value: `bl` */
    Blank = "bl"
}
export declare const SXVCellTypeArray: readonly [SXVCellType.Boolean, SXVCellType.Number, SXVCellType.Error, SXVCellType.String, SXVCellType.Date, SXVCellType.Blank];
export declare enum MovingPeriodStep {
    /** undefined. Serialized value: `year` */
    Year = "year",
    /** undefined. Serialized value: `quarter` */
    Quarter = "quarter",
    /** undefined. Serialized value: `month` */
    Month = "month",
    /** undefined. Serialized value: `week` */
    Week = "week",
    /** undefined. Serialized value: `day` */
    Day = "day"
}
export declare const MovingPeriodStepArray: readonly [MovingPeriodStep.Year, MovingPeriodStep.Quarter, MovingPeriodStep.Month, MovingPeriodStep.Week, MovingPeriodStep.Day];
export declare enum QuestionType {
    /** undefined. Serialized value: `checkBox` */
    CheckBox = "checkBox",
    /** undefined. Serialized value: `choice` */
    Choice = "choice",
    /** undefined. Serialized value: `date` */
    Date = "date",
    /** undefined. Serialized value: `time` */
    Time = "time",
    /** undefined. Serialized value: `multipleLinesOfText` */
    MultipleLinesOfText = "multipleLinesOfText",
    /** undefined. Serialized value: `number` */
    Number = "number",
    /** undefined. Serialized value: `singleLineOfText` */
    SingleLineOfText = "singleLineOfText"
}
export declare const QuestionTypeArray: readonly [QuestionType.CheckBox, QuestionType.Choice, QuestionType.Date, QuestionType.Time, QuestionType.MultipleLinesOfText, QuestionType.Number, QuestionType.SingleLineOfText];
export declare enum QuestionFormat {
    /** undefined. Serialized value: `generalDate` */
    GeneralDate = "generalDate",
    /** undefined. Serialized value: `longDate` */
    LongDate = "longDate",
    /** undefined. Serialized value: `shortDate` */
    ShortDate = "shortDate",
    /** undefined. Serialized value: `longTime` */
    LongTime = "longTime",
    /** undefined. Serialized value: `shortTime` */
    ShortTime = "shortTime",
    /** undefined. Serialized value: `generalNumber` */
    GeneralNumber = "generalNumber",
    /** undefined. Serialized value: `standard` */
    Standard = "standard",
    /** undefined. Serialized value: `fixed` */
    Fixed = "fixed",
    /** undefined. Serialized value: `percent` */
    Percent = "percent",
    /** undefined. Serialized value: `currency` */
    Currency = "currency"
}
export declare const QuestionFormatArray: readonly [QuestionFormat.GeneralDate, QuestionFormat.LongDate, QuestionFormat.ShortDate, QuestionFormat.LongTime, QuestionFormat.ShortTime, QuestionFormat.GeneralNumber, QuestionFormat.Standard, QuestionFormat.Fixed, QuestionFormat.Percent, QuestionFormat.Currency];
export declare enum SurveyPosition {
    /** undefined. Serialized value: `absolute` */
    Absolute = "absolute",
    /** undefined. Serialized value: `fixed` */
    Fixed = "fixed",
    /** undefined. Serialized value: `relative` */
    Relative = "relative",
    /** undefined. Serialized value: `static` */
    Static = "static",
    /** undefined. Serialized value: `inherit` */
    Inherit = "inherit"
}
export declare const SurveyPositionArray: readonly [SurveyPosition.Absolute, SurveyPosition.Fixed, SurveyPosition.Relative, SurveyPosition.Static, SurveyPosition.Inherit];
/** Defines the PivotRow Class. Serialized as `x15:pivotRow` */
export declare class PivotRow extends OxmlCompositeElement<PivotValueCell> {
    static _Q: string;
    static _A: string[];
    /** r. Serialized as `:r` */
    get reference(): UInt32Value | undefined;
    set reference(v: UInt32Value | undefined);
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the TimelineState Class. Serialized as `x15:state` */
export declare class TimelineState extends OxmlCompositeElement<SelectionTimelineRange | BoundsTimelineRange | MovingPeriodState | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** singleRangeFilterState. Serialized as `:singleRangeFilterState` */
    get singleRangeFilterState(): BooleanValue | undefined;
    set singleRangeFilterState(v: BooleanValue | undefined);
    /** minimalRefreshVersion. Serialized as `:minimalRefreshVersion` */
    get minimalRefreshVersion(): UInt32Value | undefined;
    set minimalRefreshVersion(v: UInt32Value | undefined);
    /** lastRefreshVersion. Serialized as `:lastRefreshVersion` */
    get lastRefreshVersion(): UInt32Value | undefined;
    set lastRefreshVersion(v: UInt32Value | undefined);
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    get pivotCacheId(): UInt32Value | undefined;
    set pivotCacheId(v: UInt32Value | undefined);
    /** filterType. Serialized as `:filterType` */
    get filterType(): PivotFilterValues | undefined;
    set filterType(v: PivotFilterValues | undefined);
    /** filterId. Serialized as `:filterId` */
    get filterId(): UInt32Value | undefined;
    set filterId(v: UInt32Value | undefined);
    /** filterTabId. Serialized as `:filterTabId` */
    get filterTabId(): UInt32Value | undefined;
    set filterTabId(v: UInt32Value | undefined);
    /** filterPivotName. Serialized as `:filterPivotName` */
    get filterPivotName(): StringValue | undefined;
    set filterPivotName(v: StringValue | undefined);
    /** Returns SelectionTimelineRange. */
    get selectionTimelineRange(): SelectionTimelineRange | undefined;
    /** Returns BoundsTimelineRange. */
    get boundsTimelineRange(): BoundsTimelineRange | undefined;
    /** Returns MovingPeriodState. */
    get movingPeriodState(): MovingPeriodState | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the TimelineCachePivotTables Class. Serialized as `x15:pivotTables` */
export declare class TimelineCachePivotTables extends OxmlCompositeElement<TimelineCachePivotTable> {
    static _Q: string;
}
/** Defines the AutoFilter Class. Serialized as `x15:autoFilter` */
export declare class AutoFilter extends OxmlCompositeElement<XFilterColumn | XSortState | XExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Cell or Range Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the TimelineRange Class. */
export declare abstract class TimelineRange extends OxmlLeafElement {
    static _A: string[];
    /** startDate. Serialized as `:startDate` */
    get startDate(): DateTimeValue | undefined;
    set startDate(v: DateTimeValue | undefined);
    /** endDate. Serialized as `:endDate` */
    get endDate(): DateTimeValue | undefined;
    set endDate(v: DateTimeValue | undefined);
}
/** Defines the BoundsTimelineRange Class. Serialized as `x15:bounds` */
export declare class BoundsTimelineRange extends TimelineRange {
    static _Q: string;
}
/** Defines the SelectionTimelineRange Class. Serialized as `x15:selection` */
export declare class SelectionTimelineRange extends TimelineRange {
    static _Q: string;
}
/** Defines the TimelineCachePivotTable Class. Serialized as `x15:pivotTable` */
export declare class TimelineCachePivotTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** tabId. Serialized as `:tabId` */
    get tabId(): UInt32Value | undefined;
    set tabId(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the Timeline Class. Serialized as `x15:timeline` */
export declare class Timeline extends OxmlCompositeElement<ExtensionList> {
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
    /** showHeader. Serialized as `:showHeader` */
    get showHeader(): BooleanValue | undefined;
    set showHeader(v: BooleanValue | undefined);
    /** showSelectionLabel. Serialized as `:showSelectionLabel` */
    get showSelectionLabel(): BooleanValue | undefined;
    set showSelectionLabel(v: BooleanValue | undefined);
    /** showTimeLevel. Serialized as `:showTimeLevel` */
    get showTimeLevel(): BooleanValue | undefined;
    set showTimeLevel(v: BooleanValue | undefined);
    /** showHorizontalScrollbar. Serialized as `:showHorizontalScrollbar` */
    get showHorizontalScrollbar(): BooleanValue | undefined;
    set showHorizontalScrollbar(v: BooleanValue | undefined);
    /** level. Serialized as `:level` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
    /** selectionLevel. Serialized as `:selectionLevel` */
    get selectionLevel(): UInt32Value | undefined;
    set selectionLevel(v: UInt32Value | undefined);
    /** scrollPosition. Serialized as `:scrollPosition` */
    get scrollPosition(): DateTimeValue | undefined;
    set scrollPosition(v: DateTimeValue | undefined);
    /** style. Serialized as `:style` */
    get style(): StringValue | undefined;
    set style(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SurveyQuestion Class. Serialized as `x15:question` */
export declare class SurveyQuestion extends OxmlCompositeElement<QuestionPrSurveyElementPr | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** binding. Serialized as `:binding` */
    get binding(): UInt32Value | undefined;
    set binding(v: UInt32Value | undefined);
    /** text. Serialized as `:text` */
    get text(): StringValue | undefined;
    set text(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): QuestionType | undefined;
    set type(v: QuestionType | undefined);
    /** format. Serialized as `:format` */
    get format(): QuestionFormat | undefined;
    set format(v: QuestionFormat | undefined);
    /** helpText. Serialized as `:helpText` */
    get helpText(): StringValue | undefined;
    set helpText(v: StringValue | undefined);
    /** required. Serialized as `:required` */
    get required(): BooleanValue | undefined;
    set required(v: BooleanValue | undefined);
    /** defaultValue. Serialized as `:defaultValue` */
    get defaultValue(): StringValue | undefined;
    set defaultValue(v: StringValue | undefined);
    /** decimalPlaces. Serialized as `:decimalPlaces` */
    get decimalPlaces(): UInt32Value | undefined;
    set decimalPlaces(v: UInt32Value | undefined);
    /** rowSource. Serialized as `:rowSource` */
    get rowSource(): StringValue | undefined;
    set rowSource(v: StringValue | undefined);
    /** Returns QuestionPrSurveyElementPr. */
    get questionPrSurveyElementPr(): QuestionPrSurveyElementPr | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SurveyQuestions Class. Serialized as `x15:questions` */
export declare class SurveyQuestions extends OxmlCompositeElement<QuestionsPrSurveyElementPr | SurveyQuestion> {
    static _Q: string;
    /** Returns QuestionsPrSurveyElementPr. */
    get questionsPrSurveyElementPr(): QuestionsPrSurveyElementPr | undefined;
}
/** Defines the OpenXmlSurveyElementPrElement Class. */
export declare abstract class OpenXmlSurveyElementPrElement extends OxmlCompositeElement<ExtensionList> {
    static _A: string[];
    /** cssClass. Serialized as `:cssClass` */
    get cssClass(): StringValue | undefined;
    set cssClass(v: StringValue | undefined);
    /** bottom. Serialized as `:bottom` */
    get bottom(): Int32Value | undefined;
    set bottom(v: Int32Value | undefined);
    /** top. Serialized as `:top` */
    get top(): Int32Value | undefined;
    set top(v: Int32Value | undefined);
    /** left. Serialized as `:left` */
    get left(): Int32Value | undefined;
    set left(v: Int32Value | undefined);
    /** right. Serialized as `:right` */
    get right(): Int32Value | undefined;
    set right(v: Int32Value | undefined);
    /** width. Serialized as `:width` */
    get width(): UInt32Value | undefined;
    set width(v: UInt32Value | undefined);
    /** height. Serialized as `:height` */
    get height(): UInt32Value | undefined;
    set height(v: UInt32Value | undefined);
    /** position. Serialized as `:position` */
    get position(): SurveyPosition | undefined;
    set position(v: SurveyPosition | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the QuestionPrSurveyElementPr Class. Serialized as `x15:questionPr` */
export declare class QuestionPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
    static _Q: string;
}
/** Defines the QuestionsPrSurveyElementPr Class. Serialized as `x15:questionsPr` */
export declare class QuestionsPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
    static _Q: string;
}
/** Defines the DescriptionPrSurveyElementPr Class. Serialized as `x15:descriptionPr` */
export declare class DescriptionPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
    static _Q: string;
}
/** Defines the TitlePrSurveyElementPr Class. Serialized as `x15:titlePr` */
export declare class TitlePrSurveyElementPr extends OpenXmlSurveyElementPrElement {
    static _Q: string;
}
/** Defines the SurveyPrSurveyElementPr Class. Serialized as `x15:surveyPr` */
export declare class SurveyPrSurveyElementPr extends OpenXmlSurveyElementPrElement {
    static _Q: string;
}
/** Defines the SlicerCacheOlapLevelName Class. Serialized as `x15:slicerCacheOlapLevelName` */
export declare class SlicerCacheOlapLevelName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** uniqueName. Serialized as `:uniqueName` */
    get uniqueName(): StringValue | undefined;
    set uniqueName(v: StringValue | undefined);
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the ServerFormat Class. Serialized as `x15:serverFormat` */
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
/** Defines the PivotTableServerFormats Class. Serialized as `x15:pivotTableServerFormats` */
export declare class PivotTableServerFormats extends OxmlCompositeElement<ServerFormat> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the PivotValueCellExtra Class. Serialized as `x15:x` */
export declare class PivotValueCellExtra extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** in. Serialized as `:in` */
    get formatIndex(): UInt32Value | undefined;
    set formatIndex(v: UInt32Value | undefined);
    /** bc. Serialized as `:bc` */
    get backgroundColor(): HexBinaryValue | undefined;
    set backgroundColor(v: HexBinaryValue | undefined);
    /** fc. Serialized as `:fc` */
    get foregroundColor(): HexBinaryValue | undefined;
    set foregroundColor(v: HexBinaryValue | undefined);
    /** i. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** un. Serialized as `:un` */
    get underline(): BooleanValue | undefined;
    set underline(v: BooleanValue | undefined);
    /** st. Serialized as `:st` */
    get strikethrough(): BooleanValue | undefined;
    set strikethrough(v: BooleanValue | undefined);
    /** b. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
}
/** Defines the Xstring Class. Serialized as `x15:v` */
export declare class Xstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the PivotValueCell Class. Serialized as `x15:c` */
export declare class PivotValueCell extends OxmlCompositeElement<Xstring | PivotValueCellExtra> {
    static _Q: string;
    static _A: string[];
    /** i. Serialized as `:i` */
    get item(): UInt32Value | undefined;
    set item(v: UInt32Value | undefined);
    /** t. Serialized as `:t` */
    get text(): SXVCellType | undefined;
    set text(v: SXVCellType | undefined);
    /** Returns Xstring. */
    get xstring(): Xstring | undefined;
    /** Returns PivotValueCellExtra. */
    get pivotValueCellExtra(): PivotValueCellExtra | undefined;
}
/** Defines the ModelRelationships Class. Serialized as `x15:modelRelationships` */
export declare class ModelRelationships extends OxmlCompositeElement<ModelRelationship> {
    static _Q: string;
}
/** Defines the ModelTables Class. Serialized as `x15:modelTables` */
export declare class ModelTables extends OxmlCompositeElement<ModelTable> {
    static _Q: string;
}
/** Defines the ModelRelationship Class. Serialized as `x15:modelRelationship` */
export declare class ModelRelationship extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** fromTable. Serialized as `:fromTable` */
    get fromTable(): StringValue | undefined;
    set fromTable(v: StringValue | undefined);
    /** fromColumn. Serialized as `:fromColumn` */
    get fromColumn(): StringValue | undefined;
    set fromColumn(v: StringValue | undefined);
    /** toTable. Serialized as `:toTable` */
    get toTable(): StringValue | undefined;
    set toTable(v: StringValue | undefined);
    /** toColumn. Serialized as `:toColumn` */
    get toColumn(): StringValue | undefined;
    set toColumn(v: StringValue | undefined);
}
/** Defines the ModelTable Class. Serialized as `x15:modelTable` */
export declare class ModelTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** connection. Serialized as `:connection` */
    get connection(): StringValue | undefined;
    set connection(v: StringValue | undefined);
}
/** Defines the CachedUniqueName Class. Serialized as `x15:cachedUniqueName` */
export declare class CachedUniqueName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** index. Serialized as `:index` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the ExtensionList Class. Serialized as `x15:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<XExtension> {
    static _Q: string;
}
/** Defines the FieldListActiveTabTopLevelEntity Class. Serialized as `x15:activeTabTopLevelEntity` */
export declare class FieldListActiveTabTopLevelEntity extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): UInt32Value | undefined;
    set type(v: UInt32Value | undefined);
}
/** Defines the DataFeedProperties Class. Serialized as `x15:dataFeedPr` */
export declare class DataFeedProperties extends OxmlCompositeElement<DbTables> {
    static _Q: string;
    static _A: string[];
    /** connection. Serialized as `:connection` */
    get connection(): StringValue | undefined;
    set connection(v: StringValue | undefined);
    /** Returns DbTables. */
    get dbTables(): DbTables | undefined;
}
/** Defines the OleDbPrpoperties Class. Serialized as `x15:oledbPr` */
export declare class OleDbPrpoperties extends OxmlCompositeElement<DbTables | DbCommand> {
    static _Q: string;
    static _A: string[];
    /** connection. Serialized as `:connection` */
    get connection(): StringValue | undefined;
    set connection(v: StringValue | undefined);
    /** Returns DbTables. */
    get dbTables(): DbTables | undefined;
    /** Returns DbCommand. */
    get dbCommand(): DbCommand | undefined;
}
/** Defines the RangeProperties Class. Serialized as `x15:rangePr` */
export declare class RangeProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** sourceName. Serialized as `:sourceName` */
    get sourceName(): StringValue | undefined;
    set sourceName(v: StringValue | undefined);
}
/** Defines the ModelTextProperties Class. Serialized as `x15:modelTextPr` */
export declare class ModelTextProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** headers. Serialized as `:headers` */
    get headers(): BooleanValue | undefined;
    set headers(v: BooleanValue | undefined);
}
/** Defines the TextProperties Class. Serialized as `x15:textPr` */
export declare class TextProperties extends OxmlCompositeElement<XTextFields> {
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
    /** Returns XTextFields. */
    get textFields(): XTextFields | undefined;
}
/** Defines the DbCommand Class. Serialized as `x15:dbCommand` */
export declare class DbCommand extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** text. Serialized as `:text` */
    get text(): StringValue | undefined;
    set text(v: StringValue | undefined);
}
/** Defines the DbTables Class. Serialized as `x15:dbTables` */
export declare class DbTables extends OxmlCompositeElement<DbTable> {
    static _Q: string;
}
/** Defines the DbTable Class. Serialized as `x15:dbTable` */
export declare class DbTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the TimelineStyleElements Class. Serialized as `x15:timelineStyleElements` */
export declare class TimelineStyleElements extends OxmlCompositeElement<TimelineStyleElement> {
    static _Q: string;
}
/** Defines the TimelineStyleElement Class. Serialized as `x15:timelineStyleElement` */
export declare class TimelineStyleElement extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): TimelineStyleType | undefined;
    set type(v: TimelineStyleType | undefined);
    /** dxfId. Serialized as `:dxfId` */
    get formatId(): UInt32Value | undefined;
    set formatId(v: UInt32Value | undefined);
}
/** Defines the TimelineStyle Class. Serialized as `x15:timelineStyle` */
export declare class TimelineStyle extends OxmlCompositeElement<TimelineStyleElements> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns TimelineStyleElements. */
    get timelineStyleElements(): TimelineStyleElements | undefined;
}
/** Defines the TimelineReference Class. Serialized as `x15:timelineRef` */
export declare class TimelineReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the TimelineCacheReference Class. Serialized as `x15:timelineCacheRef` */
export declare class TimelineCacheReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the WebExtension Class. Serialized as `x15:webExtension` */
export declare class WebExtension extends OxmlCompositeElement<XneFormula> {
    static _Q: string;
    static _A: string[];
    /** appRef. Serialized as `:appRef` */
    get applicationReference(): StringValue | undefined;
    set applicationReference(v: StringValue | undefined);
    /** Returns XneFormula. */
    get formula(): XneFormula | undefined;
}
/** Defines the PivotTableReference Class. Serialized as `x15:pivotTableReference` */
export declare class PivotTableReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the TimelineCacheDefinition Class. Serialized as `x15:timelineCacheDefinition` */
export declare class TimelineCacheDefinition extends OxmlPartRootElement<TimelineCachePivotTables | TimelineState | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** sourceName. Serialized as `:sourceName` */
    get sourceName(): StringValue | undefined;
    set sourceName(v: StringValue | undefined);
    /** Returns TimelineCachePivotTables. */
    get timelineCachePivotTables(): TimelineCachePivotTables | undefined;
    /** Returns TimelineState. */
    get timelineState(): TimelineState | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Timelines Class. Serialized as `x15:timelines` */
export declare class Timelines extends OxmlPartRootElement<Timeline> {
    static _Q: string;
}
/** Defines the Survey Class. Serialized as `x15:survey` */
export declare class Survey extends OxmlCompositeElement<SurveyPrSurveyElementPr | TitlePrSurveyElementPr | DescriptionPrSurveyElementPr | SurveyQuestions | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** guid. Serialized as `:guid` */
    get guid(): StringValue | undefined;
    set guid(v: StringValue | undefined);
    /** title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Returns SurveyPrSurveyElementPr. */
    get surveyPrSurveyElementPr(): SurveyPrSurveyElementPr | undefined;
    /** Returns TitlePrSurveyElementPr. */
    get titlePrSurveyElementPr(): TitlePrSurveyElementPr | undefined;
    /** Returns DescriptionPrSurveyElementPr. */
    get descriptionPrSurveyElementPr(): DescriptionPrSurveyElementPr | undefined;
    /** Returns SurveyQuestions. */
    get surveyQuestions(): SurveyQuestions | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SlicerCachePivotTables Class. Serialized as `x15:slicerCachePivotTables` */
export declare class SlicerCachePivotTables extends OxmlCompositeElement<X14SlicerCachePivotTable> {
    static _Q: string;
}
/** Defines the SlicerCacheHideItemsWithNoData Class. Serialized as `x15:slicerCacheHideItemsWithNoData` */
export declare class SlicerCacheHideItemsWithNoData extends OxmlCompositeElement<SlicerCacheOlapLevelName> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the TableSlicerCache Class. Serialized as `x15:tableSlicerCache` */
export declare class TableSlicerCache extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** tableId. Serialized as `:tableId` */
    get tableId(): UInt32Value | undefined;
    set tableId(v: UInt32Value | undefined);
    /** column. Serialized as `:column` */
    get column(): UInt32Value | undefined;
    set column(v: UInt32Value | undefined);
    /** sortOrder. Serialized as `:sortOrder` */
    get sortOrder(): TabularSlicerCacheSortOrderValues | undefined;
    set sortOrder(v: TabularSlicerCacheSortOrderValues | undefined);
    /** customListSort. Serialized as `:customListSort` */
    get customListSort(): BooleanValue | undefined;
    set customListSort(v: BooleanValue | undefined);
    /** crossFilter. Serialized as `:crossFilter` */
    get crossFilter(): SlicerCacheCrossFilterValues | undefined;
    set crossFilter(v: SlicerCacheCrossFilterValues | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SlicerCaches Class. Serialized as `x15:slicerCaches` */
export declare class SlicerCaches extends OxmlCompositeElement<X14SlicerCache> {
    static _Q: string;
}
/** Defines the MovingPeriodState Class. Serialized as `x15:movingPeriodState` */
export declare class MovingPeriodState extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** referenceDateBegin. Serialized as `:referenceDateBegin` */
    get referenceDateBegin(): DateTimeValue | undefined;
    set referenceDateBegin(v: DateTimeValue | undefined);
    /** referencePeriod. Serialized as `:referencePeriod` */
    get referencePeriod(): MovingPeriodStep | undefined;
    set referencePeriod(v: MovingPeriodStep | undefined);
    /** referenceMultiple. Serialized as `:referenceMultiple` */
    get referenceMultiple(): UInt32Value | undefined;
    set referenceMultiple(v: UInt32Value | undefined);
    /** movingPeriod. Serialized as `:movingPeriod` */
    get movingPeriod(): MovingPeriodStep | undefined;
    set movingPeriod(v: MovingPeriodStep | undefined);
    /** movingMultiple. Serialized as `:movingMultiple` */
    get movingMultiple(): UInt32Value | undefined;
    set movingMultiple(v: UInt32Value | undefined);
}
/** Defines the DataField Class. Serialized as `x15:dataField` */
export declare class DataField extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** isCountDistinct. Serialized as `:isCountDistinct` */
    get isCountDistinct(): BooleanValue | undefined;
    set isCountDistinct(v: BooleanValue | undefined);
}
/** Defines the PivotCacheDecoupled Class. Serialized as `x15:pivotCacheDecoupled` */
export declare class PivotCacheDecoupled extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** decoupled. Serialized as `:decoupled` */
    get decoupled(): BooleanValue | undefined;
    set decoupled(v: BooleanValue | undefined);
}
/** Defines the PivotTableData Class. Serialized as `x15:pivotTableData` */
export declare class PivotTableData extends OxmlCompositeElement<PivotRow> {
    static _Q: string;
    static _A: string[];
    /** rowCount. Serialized as `:rowCount` */
    get rowCount(): UInt32Value | undefined;
    set rowCount(v: UInt32Value | undefined);
    /** columnCount. Serialized as `:columnCount` */
    get columnCount(): UInt32Value | undefined;
    set columnCount(v: UInt32Value | undefined);
    /** cacheId. Serialized as `:cacheId` */
    get cacheId(): UInt32Value | undefined;
    set cacheId(v: UInt32Value | undefined);
}
/** Defines the DataModel Class. Serialized as `x15:dataModel` */
export declare class DataModel extends OxmlCompositeElement<ModelTables | ModelRelationships | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** minVersionLoad. Serialized as `:minVersionLoad` */
    get minVersionLoad(): ByteValue | undefined;
    set minVersionLoad(v: ByteValue | undefined);
    /** Returns ModelTables. */
    get modelTables(): ModelTables | undefined;
    /** Returns ModelRelationships. */
    get modelRelationships(): ModelRelationships | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the PivotCacheIdVersion Class. Serialized as `x15:pivotCacheIdVersion` */
export declare class PivotCacheIdVersion extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** cacheIdSupportedVersion. Serialized as `:cacheIdSupportedVersion` */
    get cacheIdSupportedVersion(): ByteValue | undefined;
    set cacheIdSupportedVersion(v: ByteValue | undefined);
    /** cacheIdCreatedVersion. Serialized as `:cacheIdCreatedVersion` */
    get cacheIdCreatedVersion(): ByteValue | undefined;
    set cacheIdCreatedVersion(v: ByteValue | undefined);
}
/** Defines the TimelinePivotCacheDefinition Class. Serialized as `x15:timelinePivotCacheDefinition` */
export declare class TimelinePivotCacheDefinition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** timelineData. Serialized as `:timelineData` */
    get timelineData(): BooleanValue | undefined;
    set timelineData(v: BooleanValue | undefined);
}
/** Defines the CacheHierarchy Class. Serialized as `x15:cacheHierarchy` */
export declare class CacheHierarchy extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** aggregatedColumn. Serialized as `:aggregatedColumn` */
    get aggregatedColumn(): Int32Value | undefined;
    set aggregatedColumn(v: Int32Value | undefined);
}
/** Defines the CachedUniqueNames Class. Serialized as `x15:cachedUniqueNames` */
export declare class CachedUniqueNames extends OxmlCompositeElement<CachedUniqueName> {
    static _Q: string;
}
/** Defines the PivotFilter Class. Serialized as `x15:pivotFilter` */
export declare class PivotFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** useWholeDay. Serialized as `:useWholeDay` */
    get useWholeDay(): BooleanValue | undefined;
    set useWholeDay(v: BooleanValue | undefined);
}
/** Defines the PivotTableUISettings Class. Serialized as `x15:pivotTableUISettings` */
export declare class PivotTableUISettings extends OxmlCompositeElement<FieldListActiveTabTopLevelEntity | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** sourceDataName. Serialized as `:sourceDataName` */
    get sourceDataName(): StringValue | undefined;
    set sourceDataName(v: StringValue | undefined);
    /** relNeededHidden. Serialized as `:relNeededHidden` */
    get relNeededHidden(): BooleanValue | undefined;
    set relNeededHidden(v: BooleanValue | undefined);
}
/** Defines the CalculatedMember Class. Serialized as `x15:calculatedMember` */
export declare class CalculatedMember extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** measureGroup. Serialized as `:measureGroup` */
    get measureGroup(): StringValue | undefined;
    set measureGroup(v: StringValue | undefined);
    /** numberFormat. Serialized as `:numberFormat` */
    get numberFormat(): CalculatedMemberNumberFormat | undefined;
    set numberFormat(v: CalculatedMemberNumberFormat | undefined);
    /** measure. Serialized as `:measure` */
    get measure(): BooleanValue | undefined;
    set measure(v: BooleanValue | undefined);
}
/** Defines the Connection Class. Serialized as `x15:connection` */
export declare class Connection extends OxmlCompositeElement<TextProperties | ModelTextProperties | RangeProperties | OleDbPrpoperties | DataFeedProperties> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** model. Serialized as `:model` */
    get model(): BooleanValue | undefined;
    set model(v: BooleanValue | undefined);
    /** excludeFromRefreshAll. Serialized as `:excludeFromRefreshAll` */
    get excludeFromRefreshAll(): BooleanValue | undefined;
    set excludeFromRefreshAll(v: BooleanValue | undefined);
    /** autoDelete. Serialized as `:autoDelete` */
    get autoDelete(): BooleanValue | undefined;
    set autoDelete(v: BooleanValue | undefined);
    /** usedByAddin. Serialized as `:usedByAddin` */
    get usedByAddin(): BooleanValue | undefined;
    set usedByAddin(v: BooleanValue | undefined);
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Returns ModelTextProperties. */
    get modelTextProperties(): ModelTextProperties | undefined;
    /** Returns RangeProperties. */
    get rangeProperties(): RangeProperties | undefined;
    /** Returns OleDbPrpoperties. */
    get oleDbPrpoperties(): OleDbPrpoperties | undefined;
    /** Returns DataFeedProperties. */
    get dataFeedProperties(): DataFeedProperties | undefined;
}
/** Defines the DifferentialFormats Class. Serialized as `x15:dxfs` */
export declare class DifferentialFormats extends OxmlCompositeElement<XDifferentialFormat> {
    static _Q: string;
    static _A: string[];
    /** Format Count. Serialized as `:count` */
    get count(): UInt32Value | undefined;
    set count(v: UInt32Value | undefined);
}
/** Defines the TimelineStyles Class. Serialized as `x15:timelineStyles` */
export declare class TimelineStyles extends OxmlCompositeElement<TimelineStyle> {
    static _Q: string;
    static _A: string[];
    /** defaultTimelineStyle. Serialized as `:defaultTimelineStyle` */
    get defaultTimelineStyle(): StringValue | undefined;
    set defaultTimelineStyle(v: StringValue | undefined);
}
/** Defines the WorkbookProperties Class. Serialized as `x15:workbookPr` */
export declare class WorkbookProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** chartTrackingRefBase. Serialized as `:chartTrackingRefBase` */
    get chartTrackingReferenceBase(): BooleanValue | undefined;
    set chartTrackingReferenceBase(v: BooleanValue | undefined);
}
/** Defines the TimelineReferences Class. Serialized as `x15:timelineRefs` */
export declare class TimelineReferences extends OxmlCompositeElement<TimelineReference> {
    static _Q: string;
}
/** Defines the TimelineCacheReferences Class. Serialized as `x15:timelineCacheRefs` */
export declare class TimelineCacheReferences extends OxmlCompositeElement<TimelineCacheReference> {
    static _Q: string;
}
/** Defines the WebExtensions Class. Serialized as `x15:webExtensions` */
export declare class WebExtensions extends OxmlCompositeElement<WebExtension> {
    static _Q: string;
}
/** Defines the QueryTable Class. Serialized as `x15:queryTable` */
export declare class QueryTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** clipped. Serialized as `:clipped` */
    get clipped(): BooleanValue | undefined;
    set clipped(v: BooleanValue | undefined);
    /** sourceDataName. Serialized as `:sourceDataName` */
    get sourceDataName(): StringValue | undefined;
    set sourceDataName(v: StringValue | undefined);
    /** drillThrough. Serialized as `:drillThrough` */
    get drillThrough(): BooleanValue | undefined;
    set drillThrough(v: BooleanValue | undefined);
}
/** Defines the PivotTableReferences Class. Serialized as `x15:pivotTableReferences` */
export declare class PivotTableReferences extends OxmlCompositeElement<PivotTableReference> {
    static _Q: string;
}
/** Defines the OpenXmlPivotCachesElement Class. */
export declare abstract class OpenXmlPivotCachesElement extends OxmlCompositeElement<XPivotCache> {
}
/** Defines the TimelineCachePivotCaches Class. Serialized as `x15:timelineCachePivotCaches` */
export declare class TimelineCachePivotCaches extends OpenXmlPivotCachesElement {
    static _Q: string;
}
/** Defines the PivotCaches Class. Serialized as `x15:pivotCaches` */
export declare class PivotCaches extends OpenXmlPivotCachesElement {
    static _Q: string;
}
export declare function initOffice2013ExcelNamespace(): {
    prefix: string;
    xmlns: string;
};
