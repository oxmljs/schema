import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { ByteValue } from '../../../framework/types/ByteValue';
import { PivotFilterValues, PivotFilterValuesArray } from '../../Spreadsheet';
import { FileTypeValues, FileTypeValuesArray } from '../../Spreadsheet';
import { QualifierValues, QualifierValuesArray } from '../../Spreadsheet';
import { TabularSlicerCacheSortOrderValues, TabularSlicerCacheSortOrderValuesArray } from '../../Office2010/Excel';
import { SlicerCacheCrossFilterValues, SlicerCacheCrossFilterValuesArray } from '../../Office2010/Excel';import { FilterColumn as XFilterColumn } from '../../Spreadsheet';
import { SortState as XSortState } from '../../Spreadsheet';
import { ExtensionList as XExtensionList } from '../../Spreadsheet';
import { Extension as XExtension } from '../../Spreadsheet';
import { TextFields as XTextFields } from '../../Spreadsheet';
import { Formula as XneFormula } from '../../Office/Excel';
import { SlicerCachePivotTable as X14SlicerCachePivotTable } from '../../Office2010/Excel';
import { SlicerCache as X14SlicerCache } from '../../Office2010/Excel';
import { DifferentialFormat as XDifferentialFormat } from '../../Spreadsheet';
import { PivotCache as XPivotCache } from '../../Spreadsheet';


export enum TimelineStyleType {
    /** undefined. Serialized value: `selectionLabel` */
    SelectionLabel = 'selectionLabel',
    /** undefined. Serialized value: `timeLevel` */
    TimeLevel = 'timeLevel',
    /** undefined. Serialized value: `periodLabel1` */
    PeriodLabel1 = 'periodLabel1',
    /** undefined. Serialized value: `periodLabel2` */
    PeriodLabel2 = 'periodLabel2',
    /** undefined. Serialized value: `selectedTimeBlock` */
    SelectedTimeBlock = 'selectedTimeBlock',
    /** undefined. Serialized value: `unselectedTimeBlock` */
    UnselectedTimeBlock = 'unselectedTimeBlock',
    /** undefined. Serialized value: `selectedTimeBlockSpace` */
    SelectedTimeBlockSpace = 'selectedTimeBlockSpace',
}

export const TimelineStyleTypeArray = [
    TimelineStyleType.SelectionLabel,
    TimelineStyleType.TimeLevel,
    TimelineStyleType.PeriodLabel1,
    TimelineStyleType.PeriodLabel2,
    TimelineStyleType.SelectedTimeBlock,
    TimelineStyleType.UnselectedTimeBlock,
    TimelineStyleType.SelectedTimeBlockSpace,
] as const;

export enum CalculatedMemberNumberFormat {
    /** undefined. Serialized value: `default` */
    Default = 'default',
    /** undefined. Serialized value: `number` */
    Number = 'number',
    /** undefined. Serialized value: `percent` */
    Percent = 'percent',
}

export const CalculatedMemberNumberFormatArray = [
    CalculatedMemberNumberFormat.Default,
    CalculatedMemberNumberFormat.Number,
    CalculatedMemberNumberFormat.Percent,
] as const;

export enum SXVCellType {
    /** undefined. Serialized value: `b` */
    Boolean = 'b',
    /** undefined. Serialized value: `n` */
    Number = 'n',
    /** undefined. Serialized value: `e` */
    Error = 'e',
    /** undefined. Serialized value: `str` */
    String = 'str',
    /** undefined. Serialized value: `d` */
    Date = 'd',
    /** undefined. Serialized value: `bl` */
    Blank = 'bl',
}

export const SXVCellTypeArray = [
    SXVCellType.Boolean,
    SXVCellType.Number,
    SXVCellType.Error,
    SXVCellType.String,
    SXVCellType.Date,
    SXVCellType.Blank,
] as const;

export enum MovingPeriodStep {
    /** undefined. Serialized value: `year` */
    Year = 'year',
    /** undefined. Serialized value: `quarter` */
    Quarter = 'quarter',
    /** undefined. Serialized value: `month` */
    Month = 'month',
    /** undefined. Serialized value: `week` */
    Week = 'week',
    /** undefined. Serialized value: `day` */
    Day = 'day',
}

export const MovingPeriodStepArray = [
    MovingPeriodStep.Year,
    MovingPeriodStep.Quarter,
    MovingPeriodStep.Month,
    MovingPeriodStep.Week,
    MovingPeriodStep.Day,
] as const;

export enum QuestionType {
    /** undefined. Serialized value: `checkBox` */
    CheckBox = 'checkBox',
    /** undefined. Serialized value: `choice` */
    Choice = 'choice',
    /** undefined. Serialized value: `date` */
    Date = 'date',
    /** undefined. Serialized value: `time` */
    Time = 'time',
    /** undefined. Serialized value: `multipleLinesOfText` */
    MultipleLinesOfText = 'multipleLinesOfText',
    /** undefined. Serialized value: `number` */
    Number = 'number',
    /** undefined. Serialized value: `singleLineOfText` */
    SingleLineOfText = 'singleLineOfText',
}

export const QuestionTypeArray = [
    QuestionType.CheckBox,
    QuestionType.Choice,
    QuestionType.Date,
    QuestionType.Time,
    QuestionType.MultipleLinesOfText,
    QuestionType.Number,
    QuestionType.SingleLineOfText,
] as const;

export enum QuestionFormat {
    /** undefined. Serialized value: `generalDate` */
    GeneralDate = 'generalDate',
    /** undefined. Serialized value: `longDate` */
    LongDate = 'longDate',
    /** undefined. Serialized value: `shortDate` */
    ShortDate = 'shortDate',
    /** undefined. Serialized value: `longTime` */
    LongTime = 'longTime',
    /** undefined. Serialized value: `shortTime` */
    ShortTime = 'shortTime',
    /** undefined. Serialized value: `generalNumber` */
    GeneralNumber = 'generalNumber',
    /** undefined. Serialized value: `standard` */
    Standard = 'standard',
    /** undefined. Serialized value: `fixed` */
    Fixed = 'fixed',
    /** undefined. Serialized value: `percent` */
    Percent = 'percent',
    /** undefined. Serialized value: `currency` */
    Currency = 'currency',
}

export const QuestionFormatArray = [
    QuestionFormat.GeneralDate,
    QuestionFormat.LongDate,
    QuestionFormat.ShortDate,
    QuestionFormat.LongTime,
    QuestionFormat.ShortTime,
    QuestionFormat.GeneralNumber,
    QuestionFormat.Standard,
    QuestionFormat.Fixed,
    QuestionFormat.Percent,
    QuestionFormat.Currency,
] as const;

export enum SurveyPosition {
    /** undefined. Serialized value: `absolute` */
    Absolute = 'absolute',
    /** undefined. Serialized value: `fixed` */
    Fixed = 'fixed',
    /** undefined. Serialized value: `relative` */
    Relative = 'relative',
    /** undefined. Serialized value: `static` */
    Static = 'static',
    /** undefined. Serialized value: `inherit` */
    Inherit = 'inherit',
}

export const SurveyPositionArray = [
    SurveyPosition.Absolute,
    SurveyPosition.Fixed,
    SurveyPosition.Relative,
    SurveyPosition.Static,
    SurveyPosition.Inherit,
] as const;

/** Defines the PivotRow Class. Serialized as `x15:pivotRow` */
export class PivotRow extends OxmlCompositeElement<PivotValueCell> {

    public static override _Q = 'x15:pivotRow';
    public static override _A = [':r',':count',];
    /** r. Serialized as `:r` */
    public get reference(): UInt32Value | undefined { return this._g(':r'); }
    public set reference(v: UInt32Value | undefined) { this._s(':r', v); }
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the TimelineState Class. Serialized as `x15:state` */
export class TimelineState extends OxmlCompositeElement<SelectionTimelineRange | BoundsTimelineRange | MovingPeriodState | ExtensionList> {

    public static override _Q = 'x15:state';
    public static override _A = [':singleRangeFilterState',':minimalRefreshVersion',':lastRefreshVersion',':pivotCacheId',':filterType',':filterId',':filterTabId',':filterPivotName',];
    /** singleRangeFilterState. Serialized as `:singleRangeFilterState` */
    public get singleRangeFilterState(): BooleanValue | undefined { return this._g(':singleRangeFilterState'); }
    public set singleRangeFilterState(v: BooleanValue | undefined) { this._s(':singleRangeFilterState', v); }
    /** minimalRefreshVersion. Serialized as `:minimalRefreshVersion` */
    public get minimalRefreshVersion(): UInt32Value | undefined { return this._g(':minimalRefreshVersion'); }
    public set minimalRefreshVersion(v: UInt32Value | undefined) { this._s(':minimalRefreshVersion', v); }
    /** lastRefreshVersion. Serialized as `:lastRefreshVersion` */
    public get lastRefreshVersion(): UInt32Value | undefined { return this._g(':lastRefreshVersion'); }
    public set lastRefreshVersion(v: UInt32Value | undefined) { this._s(':lastRefreshVersion', v); }
    /** pivotCacheId. Serialized as `:pivotCacheId` */
    public get pivotCacheId(): UInt32Value | undefined { return this._g(':pivotCacheId'); }
    public set pivotCacheId(v: UInt32Value | undefined) { this._s(':pivotCacheId', v); }
    /** filterType. Serialized as `:filterType` */
    public get filterType(): PivotFilterValues | undefined { return this._g(':filterType'); }
    public set filterType(v: PivotFilterValues | undefined) { this._s(':filterType', v); }
    /** filterId. Serialized as `:filterId` */
    public get filterId(): UInt32Value | undefined { return this._g(':filterId'); }
    public set filterId(v: UInt32Value | undefined) { this._s(':filterId', v); }
    /** filterTabId. Serialized as `:filterTabId` */
    public get filterTabId(): UInt32Value | undefined { return this._g(':filterTabId'); }
    public set filterTabId(v: UInt32Value | undefined) { this._s(':filterTabId', v); }
    /** filterPivotName. Serialized as `:filterPivotName` */
    public get filterPivotName(): StringValue | undefined { return this._g(':filterPivotName'); }
    public set filterPivotName(v: StringValue | undefined) { this._s(':filterPivotName', v); }
    /** Returns SelectionTimelineRange. */
    public get selectionTimelineRange(): SelectionTimelineRange | undefined { return this._f(SelectionTimelineRange); }
    /** Returns BoundsTimelineRange. */
    public get boundsTimelineRange(): BoundsTimelineRange | undefined { return this._f(BoundsTimelineRange); }
    /** Returns MovingPeriodState. */
    public get movingPeriodState(): MovingPeriodState | undefined { return this._f(MovingPeriodState); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the TimelineCachePivotTables Class. Serialized as `x15:pivotTables` */
export class TimelineCachePivotTables extends OxmlCompositeElement<TimelineCachePivotTable> {

    public static override _Q = 'x15:pivotTables';

}
/** Defines the AutoFilter Class. Serialized as `x15:autoFilter` */
export class AutoFilter extends OxmlCompositeElement<XFilterColumn | XSortState | XExtensionList> {

    public static override _Q = 'x15:autoFilter';
    public static override _A = [':ref',];
    /** Cell or Range Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the TimelineRange Class. */
export abstract class TimelineRange extends OxmlLeafElement {

    public static override _A = [':startDate',':endDate',];
    /** startDate. Serialized as `:startDate` */
    public get startDate(): DateTimeValue | undefined { return this._g(':startDate'); }
    public set startDate(v: DateTimeValue | undefined) { this._s(':startDate', v); }
    /** endDate. Serialized as `:endDate` */
    public get endDate(): DateTimeValue | undefined { return this._g(':endDate'); }
    public set endDate(v: DateTimeValue | undefined) { this._s(':endDate', v); }

}
/** Defines the BoundsTimelineRange Class. Serialized as `x15:bounds` */
export class BoundsTimelineRange extends TimelineRange {

    public static override _Q = 'x15:bounds';

}
/** Defines the SelectionTimelineRange Class. Serialized as `x15:selection` */
export class SelectionTimelineRange extends TimelineRange {

    public static override _Q = 'x15:selection';

}
/** Defines the TimelineCachePivotTable Class. Serialized as `x15:pivotTable` */
export class TimelineCachePivotTable extends OxmlLeafElement {

    public static override _Q = 'x15:pivotTable';
    public static override _A = [':tabId',':name',];
    /** tabId. Serialized as `:tabId` */
    public get tabId(): UInt32Value | undefined { return this._g(':tabId'); }
    public set tabId(v: UInt32Value | undefined) { this._s(':tabId', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the Timeline Class. Serialized as `x15:timeline` */
export class Timeline extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x15:timeline';
    public static override _A = [':name',':cache',':caption',':showHeader',':showSelectionLabel',':showTimeLevel',':showHorizontalScrollbar',':level',':selectionLevel',':scrollPosition',':style',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** cache. Serialized as `:cache` */
    public get cache(): StringValue | undefined { return this._g(':cache'); }
    public set cache(v: StringValue | undefined) { this._s(':cache', v); }
    /** caption. Serialized as `:caption` */
    public get caption(): StringValue | undefined { return this._g(':caption'); }
    public set caption(v: StringValue | undefined) { this._s(':caption', v); }
    /** showHeader. Serialized as `:showHeader` */
    public get showHeader(): BooleanValue | undefined { return this._g(':showHeader'); }
    public set showHeader(v: BooleanValue | undefined) { this._s(':showHeader', v); }
    /** showSelectionLabel. Serialized as `:showSelectionLabel` */
    public get showSelectionLabel(): BooleanValue | undefined { return this._g(':showSelectionLabel'); }
    public set showSelectionLabel(v: BooleanValue | undefined) { this._s(':showSelectionLabel', v); }
    /** showTimeLevel. Serialized as `:showTimeLevel` */
    public get showTimeLevel(): BooleanValue | undefined { return this._g(':showTimeLevel'); }
    public set showTimeLevel(v: BooleanValue | undefined) { this._s(':showTimeLevel', v); }
    /** showHorizontalScrollbar. Serialized as `:showHorizontalScrollbar` */
    public get showHorizontalScrollbar(): BooleanValue | undefined { return this._g(':showHorizontalScrollbar'); }
    public set showHorizontalScrollbar(v: BooleanValue | undefined) { this._s(':showHorizontalScrollbar', v); }
    /** level. Serialized as `:level` */
    public get level(): UInt32Value | undefined { return this._g(':level'); }
    public set level(v: UInt32Value | undefined) { this._s(':level', v); }
    /** selectionLevel. Serialized as `:selectionLevel` */
    public get selectionLevel(): UInt32Value | undefined { return this._g(':selectionLevel'); }
    public set selectionLevel(v: UInt32Value | undefined) { this._s(':selectionLevel', v); }
    /** scrollPosition. Serialized as `:scrollPosition` */
    public get scrollPosition(): DateTimeValue | undefined { return this._g(':scrollPosition'); }
    public set scrollPosition(v: DateTimeValue | undefined) { this._s(':scrollPosition', v); }
    /** style. Serialized as `:style` */
    public get style(): StringValue | undefined { return this._g(':style'); }
    public set style(v: StringValue | undefined) { this._s(':style', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SurveyQuestion Class. Serialized as `x15:question` */
export class SurveyQuestion extends OxmlCompositeElement<QuestionPrSurveyElementPr | ExtensionList> {

    public static override _Q = 'x15:question';
    public static override _A = [':binding',':text',':type',':format',':helpText',':required',':defaultValue',':decimalPlaces',':rowSource',];
    /** binding. Serialized as `:binding` */
    public get binding(): UInt32Value | undefined { return this._g(':binding'); }
    public set binding(v: UInt32Value | undefined) { this._s(':binding', v); }
    /** text. Serialized as `:text` */
    public get text(): StringValue | undefined { return this._g(':text'); }
    public set text(v: StringValue | undefined) { this._s(':text', v); }
    /** type. Serialized as `:type` */
    public get type(): QuestionType | undefined { return this._g(':type'); }
    public set type(v: QuestionType | undefined) { this._s(':type', v); }
    /** format. Serialized as `:format` */
    public get format(): QuestionFormat | undefined { return this._g(':format'); }
    public set format(v: QuestionFormat | undefined) { this._s(':format', v); }
    /** helpText. Serialized as `:helpText` */
    public get helpText(): StringValue | undefined { return this._g(':helpText'); }
    public set helpText(v: StringValue | undefined) { this._s(':helpText', v); }
    /** required. Serialized as `:required` */
    public get required(): BooleanValue | undefined { return this._g(':required'); }
    public set required(v: BooleanValue | undefined) { this._s(':required', v); }
    /** defaultValue. Serialized as `:defaultValue` */
    public get defaultValue(): StringValue | undefined { return this._g(':defaultValue'); }
    public set defaultValue(v: StringValue | undefined) { this._s(':defaultValue', v); }
    /** decimalPlaces. Serialized as `:decimalPlaces` */
    public get decimalPlaces(): UInt32Value | undefined { return this._g(':decimalPlaces'); }
    public set decimalPlaces(v: UInt32Value | undefined) { this._s(':decimalPlaces', v); }
    /** rowSource. Serialized as `:rowSource` */
    public get rowSource(): StringValue | undefined { return this._g(':rowSource'); }
    public set rowSource(v: StringValue | undefined) { this._s(':rowSource', v); }
    /** Returns QuestionPrSurveyElementPr. */
    public get questionPrSurveyElementPr(): QuestionPrSurveyElementPr | undefined { return this._f(QuestionPrSurveyElementPr); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SurveyQuestions Class. Serialized as `x15:questions` */
export class SurveyQuestions extends OxmlCompositeElement<QuestionsPrSurveyElementPr | SurveyQuestion> {

    public static override _Q = 'x15:questions';
    /** Returns QuestionsPrSurveyElementPr. */
    public get questionsPrSurveyElementPr(): QuestionsPrSurveyElementPr | undefined { return this._f(QuestionsPrSurveyElementPr); }

}
/** Defines the OpenXmlSurveyElementPrElement Class. */
export abstract class OpenXmlSurveyElementPrElement extends OxmlCompositeElement<ExtensionList> {

    public static override _A = [':cssClass',':bottom',':top',':left',':right',':width',':height',':position',];
    /** cssClass. Serialized as `:cssClass` */
    public get cssClass(): StringValue | undefined { return this._g(':cssClass'); }
    public set cssClass(v: StringValue | undefined) { this._s(':cssClass', v); }
    /** bottom. Serialized as `:bottom` */
    public get bottom(): Int32Value | undefined { return this._g(':bottom'); }
    public set bottom(v: Int32Value | undefined) { this._s(':bottom', v); }
    /** top. Serialized as `:top` */
    public get top(): Int32Value | undefined { return this._g(':top'); }
    public set top(v: Int32Value | undefined) { this._s(':top', v); }
    /** left. Serialized as `:left` */
    public get left(): Int32Value | undefined { return this._g(':left'); }
    public set left(v: Int32Value | undefined) { this._s(':left', v); }
    /** right. Serialized as `:right` */
    public get right(): Int32Value | undefined { return this._g(':right'); }
    public set right(v: Int32Value | undefined) { this._s(':right', v); }
    /** width. Serialized as `:width` */
    public get width(): UInt32Value | undefined { return this._g(':width'); }
    public set width(v: UInt32Value | undefined) { this._s(':width', v); }
    /** height. Serialized as `:height` */
    public get height(): UInt32Value | undefined { return this._g(':height'); }
    public set height(v: UInt32Value | undefined) { this._s(':height', v); }
    /** position. Serialized as `:position` */
    public get position(): SurveyPosition | undefined { return this._g(':position'); }
    public set position(v: SurveyPosition | undefined) { this._s(':position', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the QuestionPrSurveyElementPr Class. Serialized as `x15:questionPr` */
export class QuestionPrSurveyElementPr extends OpenXmlSurveyElementPrElement {

    public static override _Q = 'x15:questionPr';

}
/** Defines the QuestionsPrSurveyElementPr Class. Serialized as `x15:questionsPr` */
export class QuestionsPrSurveyElementPr extends OpenXmlSurveyElementPrElement {

    public static override _Q = 'x15:questionsPr';

}
/** Defines the DescriptionPrSurveyElementPr Class. Serialized as `x15:descriptionPr` */
export class DescriptionPrSurveyElementPr extends OpenXmlSurveyElementPrElement {

    public static override _Q = 'x15:descriptionPr';

}
/** Defines the TitlePrSurveyElementPr Class. Serialized as `x15:titlePr` */
export class TitlePrSurveyElementPr extends OpenXmlSurveyElementPrElement {

    public static override _Q = 'x15:titlePr';

}
/** Defines the SurveyPrSurveyElementPr Class. Serialized as `x15:surveyPr` */
export class SurveyPrSurveyElementPr extends OpenXmlSurveyElementPrElement {

    public static override _Q = 'x15:surveyPr';

}
/** Defines the SlicerCacheOlapLevelName Class. Serialized as `x15:slicerCacheOlapLevelName` */
export class SlicerCacheOlapLevelName extends OxmlLeafElement {

    public static override _Q = 'x15:slicerCacheOlapLevelName';
    public static override _A = [':uniqueName',':count',];
    /** uniqueName. Serialized as `:uniqueName` */
    public get uniqueName(): StringValue | undefined { return this._g(':uniqueName'); }
    public set uniqueName(v: StringValue | undefined) { this._s(':uniqueName', v); }
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the ServerFormat Class. Serialized as `x15:serverFormat` */
export class ServerFormat extends OxmlLeafElement {

    public static override _Q = 'x15:serverFormat';
    public static override _A = [':culture',':format',];
    /** Culture. Serialized as `:culture` */
    public get culture(): StringValue | undefined { return this._g(':culture'); }
    public set culture(v: StringValue | undefined) { this._s(':culture', v); }
    /** Format. Serialized as `:format` */
    public get format(): StringValue | undefined { return this._g(':format'); }
    public set format(v: StringValue | undefined) { this._s(':format', v); }

}
/** Defines the PivotTableServerFormats Class. Serialized as `x15:pivotTableServerFormats` */
export class PivotTableServerFormats extends OxmlCompositeElement<ServerFormat> {

    public static override _Q = 'x15:pivotTableServerFormats';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the PivotValueCellExtra Class. Serialized as `x15:x` */
export class PivotValueCellExtra extends OxmlLeafElement {

    public static override _Q = 'x15:x';
    public static override _A = [':in',':bc',':fc',':i',':un',':st',':b',];
    /** in. Serialized as `:in` */
    public get formatIndex(): UInt32Value | undefined { return this._g(':in'); }
    public set formatIndex(v: UInt32Value | undefined) { this._s(':in', v); }
    /** bc. Serialized as `:bc` */
    public get backgroundColor(): HexBinaryValue | undefined { return this._g(':bc'); }
    public set backgroundColor(v: HexBinaryValue | undefined) { this._s(':bc', v); }
    /** fc. Serialized as `:fc` */
    public get foregroundColor(): HexBinaryValue | undefined { return this._g(':fc'); }
    public set foregroundColor(v: HexBinaryValue | undefined) { this._s(':fc', v); }
    /** i. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** un. Serialized as `:un` */
    public get underline(): BooleanValue | undefined { return this._g(':un'); }
    public set underline(v: BooleanValue | undefined) { this._s(':un', v); }
    /** st. Serialized as `:st` */
    public get strikethrough(): BooleanValue | undefined { return this._g(':st'); }
    public set strikethrough(v: BooleanValue | undefined) { this._s(':st', v); }
    /** b. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }

}
/** Defines the Xstring Class. Serialized as `x15:v` */
export class Xstring extends OxmlLeafTextElement {

    public static override _Q = 'x15:v';

}
/** Defines the PivotValueCell Class. Serialized as `x15:c` */
export class PivotValueCell extends OxmlCompositeElement<Xstring | PivotValueCellExtra> {

    public static override _Q = 'x15:c';
    public static override _A = [':i',':t',];
    /** i. Serialized as `:i` */
    public get item(): UInt32Value | undefined { return this._g(':i'); }
    public set item(v: UInt32Value | undefined) { this._s(':i', v); }
    /** t. Serialized as `:t` */
    public get text(): SXVCellType | undefined { return this._g(':t'); }
    public set text(v: SXVCellType | undefined) { this._s(':t', v); }
    /** Returns Xstring. */
    public get xstring(): Xstring | undefined { return this._f(Xstring); }
    /** Returns PivotValueCellExtra. */
    public get pivotValueCellExtra(): PivotValueCellExtra | undefined { return this._f(PivotValueCellExtra); }

}
/** Defines the ModelRelationships Class. Serialized as `x15:modelRelationships` */
export class ModelRelationships extends OxmlCompositeElement<ModelRelationship> {

    public static override _Q = 'x15:modelRelationships';

}
/** Defines the ModelTables Class. Serialized as `x15:modelTables` */
export class ModelTables extends OxmlCompositeElement<ModelTable> {

    public static override _Q = 'x15:modelTables';

}
/** Defines the ModelRelationship Class. Serialized as `x15:modelRelationship` */
export class ModelRelationship extends OxmlLeafElement {

    public static override _Q = 'x15:modelRelationship';
    public static override _A = [':fromTable',':fromColumn',':toTable',':toColumn',];
    /** fromTable. Serialized as `:fromTable` */
    public get fromTable(): StringValue | undefined { return this._g(':fromTable'); }
    public set fromTable(v: StringValue | undefined) { this._s(':fromTable', v); }
    /** fromColumn. Serialized as `:fromColumn` */
    public get fromColumn(): StringValue | undefined { return this._g(':fromColumn'); }
    public set fromColumn(v: StringValue | undefined) { this._s(':fromColumn', v); }
    /** toTable. Serialized as `:toTable` */
    public get toTable(): StringValue | undefined { return this._g(':toTable'); }
    public set toTable(v: StringValue | undefined) { this._s(':toTable', v); }
    /** toColumn. Serialized as `:toColumn` */
    public get toColumn(): StringValue | undefined { return this._g(':toColumn'); }
    public set toColumn(v: StringValue | undefined) { this._s(':toColumn', v); }

}
/** Defines the ModelTable Class. Serialized as `x15:modelTable` */
export class ModelTable extends OxmlLeafElement {

    public static override _Q = 'x15:modelTable';
    public static override _A = [':id',':name',':connection',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** connection. Serialized as `:connection` */
    public get connection(): StringValue | undefined { return this._g(':connection'); }
    public set connection(v: StringValue | undefined) { this._s(':connection', v); }

}
/** Defines the CachedUniqueName Class. Serialized as `x15:cachedUniqueName` */
export class CachedUniqueName extends OxmlLeafElement {

    public static override _Q = 'x15:cachedUniqueName';
    public static override _A = [':index',':name',];
    /** index. Serialized as `:index` */
    public get index(): UInt32Value | undefined { return this._g(':index'); }
    public set index(v: UInt32Value | undefined) { this._s(':index', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the ExtensionList Class. Serialized as `x15:extLst` */
export class ExtensionList extends OxmlCompositeElement<XExtension> {

    public static override _Q = 'x15:extLst';

}
/** Defines the FieldListActiveTabTopLevelEntity Class. Serialized as `x15:activeTabTopLevelEntity` */
export class FieldListActiveTabTopLevelEntity extends OxmlLeafElement {

    public static override _Q = 'x15:activeTabTopLevelEntity';
    public static override _A = [':name',':type',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** type. Serialized as `:type` */
    public get type(): UInt32Value | undefined { return this._g(':type'); }
    public set type(v: UInt32Value | undefined) { this._s(':type', v); }

}
/** Defines the DataFeedProperties Class. Serialized as `x15:dataFeedPr` */
export class DataFeedProperties extends OxmlCompositeElement<DbTables> {

    public static override _Q = 'x15:dataFeedPr';
    public static override _A = [':connection',];
    /** connection. Serialized as `:connection` */
    public get connection(): StringValue | undefined { return this._g(':connection'); }
    public set connection(v: StringValue | undefined) { this._s(':connection', v); }
    /** Returns DbTables. */
    public get dbTables(): DbTables | undefined { return this._f(DbTables); }

}
/** Defines the OleDbPrpoperties Class. Serialized as `x15:oledbPr` */
export class OleDbPrpoperties extends OxmlCompositeElement<DbTables | DbCommand> {

    public static override _Q = 'x15:oledbPr';
    public static override _A = [':connection',];
    /** connection. Serialized as `:connection` */
    public get connection(): StringValue | undefined { return this._g(':connection'); }
    public set connection(v: StringValue | undefined) { this._s(':connection', v); }
    /** Returns DbTables. */
    public get dbTables(): DbTables | undefined { return this._f(DbTables); }
    /** Returns DbCommand. */
    public get dbCommand(): DbCommand | undefined { return this._f(DbCommand); }

}
/** Defines the RangeProperties Class. Serialized as `x15:rangePr` */
export class RangeProperties extends OxmlLeafElement {

    public static override _Q = 'x15:rangePr';
    public static override _A = [':sourceName',];
    /** sourceName. Serialized as `:sourceName` */
    public get sourceName(): StringValue | undefined { return this._g(':sourceName'); }
    public set sourceName(v: StringValue | undefined) { this._s(':sourceName', v); }

}
/** Defines the ModelTextProperties Class. Serialized as `x15:modelTextPr` */
export class ModelTextProperties extends OxmlLeafElement {

    public static override _Q = 'x15:modelTextPr';
    public static override _A = [':headers',];
    /** headers. Serialized as `:headers` */
    public get headers(): BooleanValue | undefined { return this._g(':headers'); }
    public set headers(v: BooleanValue | undefined) { this._s(':headers', v); }

}
/** Defines the TextProperties Class. Serialized as `x15:textPr` */
export class TextProperties extends OxmlCompositeElement<XTextFields> {

    public static override _Q = 'x15:textPr';
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
    /** Returns XTextFields. */
    public get textFields(): XTextFields | undefined { return this._f(XTextFields); }

}
/** Defines the DbCommand Class. Serialized as `x15:dbCommand` */
export class DbCommand extends OxmlLeafElement {

    public static override _Q = 'x15:dbCommand';
    public static override _A = [':text',];
    /** text. Serialized as `:text` */
    public get text(): StringValue | undefined { return this._g(':text'); }
    public set text(v: StringValue | undefined) { this._s(':text', v); }

}
/** Defines the DbTables Class. Serialized as `x15:dbTables` */
export class DbTables extends OxmlCompositeElement<DbTable> {

    public static override _Q = 'x15:dbTables';

}
/** Defines the DbTable Class. Serialized as `x15:dbTable` */
export class DbTable extends OxmlLeafElement {

    public static override _Q = 'x15:dbTable';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the TimelineStyleElements Class. Serialized as `x15:timelineStyleElements` */
export class TimelineStyleElements extends OxmlCompositeElement<TimelineStyleElement> {

    public static override _Q = 'x15:timelineStyleElements';

}
/** Defines the TimelineStyleElement Class. Serialized as `x15:timelineStyleElement` */
export class TimelineStyleElement extends OxmlLeafElement {

    public static override _Q = 'x15:timelineStyleElement';
    public static override _A = [':type',':dxfId',];
    /** type. Serialized as `:type` */
    public get type(): TimelineStyleType | undefined { return this._g(':type'); }
    public set type(v: TimelineStyleType | undefined) { this._s(':type', v); }
    /** dxfId. Serialized as `:dxfId` */
    public get formatId(): UInt32Value | undefined { return this._g(':dxfId'); }
    public set formatId(v: UInt32Value | undefined) { this._s(':dxfId', v); }

}
/** Defines the TimelineStyle Class. Serialized as `x15:timelineStyle` */
export class TimelineStyle extends OxmlCompositeElement<TimelineStyleElements> {

    public static override _Q = 'x15:timelineStyle';
    public static override _A = [':name',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Returns TimelineStyleElements. */
    public get timelineStyleElements(): TimelineStyleElements | undefined { return this._f(TimelineStyleElements); }

}
/** Defines the TimelineReference Class. Serialized as `x15:timelineRef` */
export class TimelineReference extends OxmlLeafElement {

    public static override _Q = 'x15:timelineRef';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the TimelineCacheReference Class. Serialized as `x15:timelineCacheRef` */
export class TimelineCacheReference extends OxmlLeafElement {

    public static override _Q = 'x15:timelineCacheRef';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the WebExtension Class. Serialized as `x15:webExtension` */
export class WebExtension extends OxmlCompositeElement<XneFormula> {

    public static override _Q = 'x15:webExtension';
    public static override _A = [':appRef',];
    /** appRef. Serialized as `:appRef` */
    public get applicationReference(): StringValue | undefined { return this._g(':appRef'); }
    public set applicationReference(v: StringValue | undefined) { this._s(':appRef', v); }
    /** Returns XneFormula. */
    public get formula(): XneFormula | undefined { return this._f(XneFormula); }

}
/** Defines the PivotTableReference Class. Serialized as `x15:pivotTableReference` */
export class PivotTableReference extends OxmlLeafElement {

    public static override _Q = 'x15:pivotTableReference';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the TimelineCacheDefinition Class. Serialized as `x15:timelineCacheDefinition` */
export class TimelineCacheDefinition extends OxmlPartRootElement<TimelineCachePivotTables | TimelineState | ExtensionList> {

    public static override _Q = 'x15:timelineCacheDefinition';
    public static override _A = [':name',':sourceName',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** sourceName. Serialized as `:sourceName` */
    public get sourceName(): StringValue | undefined { return this._g(':sourceName'); }
    public set sourceName(v: StringValue | undefined) { this._s(':sourceName', v); }
    /** Returns TimelineCachePivotTables. */
    public get timelineCachePivotTables(): TimelineCachePivotTables | undefined { return this._f(TimelineCachePivotTables); }
    /** Returns TimelineState. */
    public get timelineState(): TimelineState | undefined { return this._f(TimelineState); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Timelines Class. Serialized as `x15:timelines` */
export class Timelines extends OxmlPartRootElement<Timeline> {

    public static override _Q = 'x15:timelines';

}
/** Defines the Survey Class. Serialized as `x15:survey` */
export class Survey extends OxmlCompositeElement<SurveyPrSurveyElementPr | TitlePrSurveyElementPr | DescriptionPrSurveyElementPr | SurveyQuestions | ExtensionList> {

    public static override _Q = 'x15:survey';
    public static override _A = [':id',':guid',':title',':description',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** guid. Serialized as `:guid` */
    public get guid(): StringValue | undefined { return this._g(':guid'); }
    public set guid(v: StringValue | undefined) { this._s(':guid', v); }
    /** title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** Returns SurveyPrSurveyElementPr. */
    public get surveyPrSurveyElementPr(): SurveyPrSurveyElementPr | undefined { return this._f(SurveyPrSurveyElementPr); }
    /** Returns TitlePrSurveyElementPr. */
    public get titlePrSurveyElementPr(): TitlePrSurveyElementPr | undefined { return this._f(TitlePrSurveyElementPr); }
    /** Returns DescriptionPrSurveyElementPr. */
    public get descriptionPrSurveyElementPr(): DescriptionPrSurveyElementPr | undefined { return this._f(DescriptionPrSurveyElementPr); }
    /** Returns SurveyQuestions. */
    public get surveyQuestions(): SurveyQuestions | undefined { return this._f(SurveyQuestions); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SlicerCachePivotTables Class. Serialized as `x15:slicerCachePivotTables` */
export class SlicerCachePivotTables extends OxmlCompositeElement<X14SlicerCachePivotTable> {

    public static override _Q = 'x15:slicerCachePivotTables';

}
/** Defines the SlicerCacheHideItemsWithNoData Class. Serialized as `x15:slicerCacheHideItemsWithNoData` */
export class SlicerCacheHideItemsWithNoData extends OxmlCompositeElement<SlicerCacheOlapLevelName> {

    public static override _Q = 'x15:slicerCacheHideItemsWithNoData';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the TableSlicerCache Class. Serialized as `x15:tableSlicerCache` */
export class TableSlicerCache extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'x15:tableSlicerCache';
    public static override _A = [':tableId',':column',':sortOrder',':customListSort',':crossFilter',];
    /** tableId. Serialized as `:tableId` */
    public get tableId(): UInt32Value | undefined { return this._g(':tableId'); }
    public set tableId(v: UInt32Value | undefined) { this._s(':tableId', v); }
    /** column. Serialized as `:column` */
    public get column(): UInt32Value | undefined { return this._g(':column'); }
    public set column(v: UInt32Value | undefined) { this._s(':column', v); }
    /** sortOrder. Serialized as `:sortOrder` */
    public get sortOrder(): TabularSlicerCacheSortOrderValues | undefined { return this._g(':sortOrder'); }
    public set sortOrder(v: TabularSlicerCacheSortOrderValues | undefined) { this._s(':sortOrder', v); }
    /** customListSort. Serialized as `:customListSort` */
    public get customListSort(): BooleanValue | undefined { return this._g(':customListSort'); }
    public set customListSort(v: BooleanValue | undefined) { this._s(':customListSort', v); }
    /** crossFilter. Serialized as `:crossFilter` */
    public get crossFilter(): SlicerCacheCrossFilterValues | undefined { return this._g(':crossFilter'); }
    public set crossFilter(v: SlicerCacheCrossFilterValues | undefined) { this._s(':crossFilter', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SlicerCaches Class. Serialized as `x15:slicerCaches` */
export class SlicerCaches extends OxmlCompositeElement<X14SlicerCache> {

    public static override _Q = 'x15:slicerCaches';

}
/** Defines the MovingPeriodState Class. Serialized as `x15:movingPeriodState` */
export class MovingPeriodState extends OxmlLeafElement {

    public static override _Q = 'x15:movingPeriodState';
    public static override _A = [':referenceDateBegin',':referencePeriod',':referenceMultiple',':movingPeriod',':movingMultiple',];
    /** referenceDateBegin. Serialized as `:referenceDateBegin` */
    public get referenceDateBegin(): DateTimeValue | undefined { return this._g(':referenceDateBegin'); }
    public set referenceDateBegin(v: DateTimeValue | undefined) { this._s(':referenceDateBegin', v); }
    /** referencePeriod. Serialized as `:referencePeriod` */
    public get referencePeriod(): MovingPeriodStep | undefined { return this._g(':referencePeriod'); }
    public set referencePeriod(v: MovingPeriodStep | undefined) { this._s(':referencePeriod', v); }
    /** referenceMultiple. Serialized as `:referenceMultiple` */
    public get referenceMultiple(): UInt32Value | undefined { return this._g(':referenceMultiple'); }
    public set referenceMultiple(v: UInt32Value | undefined) { this._s(':referenceMultiple', v); }
    /** movingPeriod. Serialized as `:movingPeriod` */
    public get movingPeriod(): MovingPeriodStep | undefined { return this._g(':movingPeriod'); }
    public set movingPeriod(v: MovingPeriodStep | undefined) { this._s(':movingPeriod', v); }
    /** movingMultiple. Serialized as `:movingMultiple` */
    public get movingMultiple(): UInt32Value | undefined { return this._g(':movingMultiple'); }
    public set movingMultiple(v: UInt32Value | undefined) { this._s(':movingMultiple', v); }

}
/** Defines the DataField Class. Serialized as `x15:dataField` */
export class DataField extends OxmlLeafElement {

    public static override _Q = 'x15:dataField';
    public static override _A = [':isCountDistinct',];
    /** isCountDistinct. Serialized as `:isCountDistinct` */
    public get isCountDistinct(): BooleanValue | undefined { return this._g(':isCountDistinct'); }
    public set isCountDistinct(v: BooleanValue | undefined) { this._s(':isCountDistinct', v); }

}
/** Defines the PivotCacheDecoupled Class. Serialized as `x15:pivotCacheDecoupled` */
export class PivotCacheDecoupled extends OxmlLeafElement {

    public static override _Q = 'x15:pivotCacheDecoupled';
    public static override _A = [':decoupled',];
    /** decoupled. Serialized as `:decoupled` */
    public get decoupled(): BooleanValue | undefined { return this._g(':decoupled'); }
    public set decoupled(v: BooleanValue | undefined) { this._s(':decoupled', v); }

}
/** Defines the PivotTableData Class. Serialized as `x15:pivotTableData` */
export class PivotTableData extends OxmlCompositeElement<PivotRow> {

    public static override _Q = 'x15:pivotTableData';
    public static override _A = [':rowCount',':columnCount',':cacheId',];
    /** rowCount. Serialized as `:rowCount` */
    public get rowCount(): UInt32Value | undefined { return this._g(':rowCount'); }
    public set rowCount(v: UInt32Value | undefined) { this._s(':rowCount', v); }
    /** columnCount. Serialized as `:columnCount` */
    public get columnCount(): UInt32Value | undefined { return this._g(':columnCount'); }
    public set columnCount(v: UInt32Value | undefined) { this._s(':columnCount', v); }
    /** cacheId. Serialized as `:cacheId` */
    public get cacheId(): UInt32Value | undefined { return this._g(':cacheId'); }
    public set cacheId(v: UInt32Value | undefined) { this._s(':cacheId', v); }

}
/** Defines the DataModel Class. Serialized as `x15:dataModel` */
export class DataModel extends OxmlCompositeElement<ModelTables | ModelRelationships | ExtensionList> {

    public static override _Q = 'x15:dataModel';
    public static override _A = [':minVersionLoad',];
    /** minVersionLoad. Serialized as `:minVersionLoad` */
    public get minVersionLoad(): ByteValue | undefined { return this._g(':minVersionLoad'); }
    public set minVersionLoad(v: ByteValue | undefined) { this._s(':minVersionLoad', v); }
    /** Returns ModelTables. */
    public get modelTables(): ModelTables | undefined { return this._f(ModelTables); }
    /** Returns ModelRelationships. */
    public get modelRelationships(): ModelRelationships | undefined { return this._f(ModelRelationships); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the PivotCacheIdVersion Class. Serialized as `x15:pivotCacheIdVersion` */
export class PivotCacheIdVersion extends OxmlLeafElement {

    public static override _Q = 'x15:pivotCacheIdVersion';
    public static override _A = [':cacheIdSupportedVersion',':cacheIdCreatedVersion',];
    /** cacheIdSupportedVersion. Serialized as `:cacheIdSupportedVersion` */
    public get cacheIdSupportedVersion(): ByteValue | undefined { return this._g(':cacheIdSupportedVersion'); }
    public set cacheIdSupportedVersion(v: ByteValue | undefined) { this._s(':cacheIdSupportedVersion', v); }
    /** cacheIdCreatedVersion. Serialized as `:cacheIdCreatedVersion` */
    public get cacheIdCreatedVersion(): ByteValue | undefined { return this._g(':cacheIdCreatedVersion'); }
    public set cacheIdCreatedVersion(v: ByteValue | undefined) { this._s(':cacheIdCreatedVersion', v); }

}
/** Defines the TimelinePivotCacheDefinition Class. Serialized as `x15:timelinePivotCacheDefinition` */
export class TimelinePivotCacheDefinition extends OxmlLeafElement {

    public static override _Q = 'x15:timelinePivotCacheDefinition';
    public static override _A = [':timelineData',];
    /** timelineData. Serialized as `:timelineData` */
    public get timelineData(): BooleanValue | undefined { return this._g(':timelineData'); }
    public set timelineData(v: BooleanValue | undefined) { this._s(':timelineData', v); }

}
/** Defines the CacheHierarchy Class. Serialized as `x15:cacheHierarchy` */
export class CacheHierarchy extends OxmlLeafElement {

    public static override _Q = 'x15:cacheHierarchy';
    public static override _A = [':aggregatedColumn',];
    /** aggregatedColumn. Serialized as `:aggregatedColumn` */
    public get aggregatedColumn(): Int32Value | undefined { return this._g(':aggregatedColumn'); }
    public set aggregatedColumn(v: Int32Value | undefined) { this._s(':aggregatedColumn', v); }

}
/** Defines the CachedUniqueNames Class. Serialized as `x15:cachedUniqueNames` */
export class CachedUniqueNames extends OxmlCompositeElement<CachedUniqueName> {

    public static override _Q = 'x15:cachedUniqueNames';

}
/** Defines the PivotFilter Class. Serialized as `x15:pivotFilter` */
export class PivotFilter extends OxmlLeafElement {

    public static override _Q = 'x15:pivotFilter';
    public static override _A = [':useWholeDay',];
    /** useWholeDay. Serialized as `:useWholeDay` */
    public get useWholeDay(): BooleanValue | undefined { return this._g(':useWholeDay'); }
    public set useWholeDay(v: BooleanValue | undefined) { this._s(':useWholeDay', v); }

}
/** Defines the PivotTableUISettings Class. Serialized as `x15:pivotTableUISettings` */
export class PivotTableUISettings extends OxmlCompositeElement<FieldListActiveTabTopLevelEntity | ExtensionList> {

    public static override _Q = 'x15:pivotTableUISettings';
    public static override _A = [':sourceDataName',':relNeededHidden',];
    /** sourceDataName. Serialized as `:sourceDataName` */
    public get sourceDataName(): StringValue | undefined { return this._g(':sourceDataName'); }
    public set sourceDataName(v: StringValue | undefined) { this._s(':sourceDataName', v); }
    /** relNeededHidden. Serialized as `:relNeededHidden` */
    public get relNeededHidden(): BooleanValue | undefined { return this._g(':relNeededHidden'); }
    public set relNeededHidden(v: BooleanValue | undefined) { this._s(':relNeededHidden', v); }

}
/** Defines the CalculatedMember Class. Serialized as `x15:calculatedMember` */
export class CalculatedMember extends OxmlLeafElement {

    public static override _Q = 'x15:calculatedMember';
    public static override _A = [':measureGroup',':numberFormat',':measure',];
    /** measureGroup. Serialized as `:measureGroup` */
    public get measureGroup(): StringValue | undefined { return this._g(':measureGroup'); }
    public set measureGroup(v: StringValue | undefined) { this._s(':measureGroup', v); }
    /** numberFormat. Serialized as `:numberFormat` */
    public get numberFormat(): CalculatedMemberNumberFormat | undefined { return this._g(':numberFormat'); }
    public set numberFormat(v: CalculatedMemberNumberFormat | undefined) { this._s(':numberFormat', v); }
    /** measure. Serialized as `:measure` */
    public get measure(): BooleanValue | undefined { return this._g(':measure'); }
    public set measure(v: BooleanValue | undefined) { this._s(':measure', v); }

}
/** Defines the Connection Class. Serialized as `x15:connection` */
export class Connection extends OxmlCompositeElement<TextProperties | ModelTextProperties | RangeProperties | OleDbPrpoperties | DataFeedProperties> {

    public static override _Q = 'x15:connection';
    public static override _A = [':id',':model',':excludeFromRefreshAll',':autoDelete',':usedByAddin',];
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** model. Serialized as `:model` */
    public get model(): BooleanValue | undefined { return this._g(':model'); }
    public set model(v: BooleanValue | undefined) { this._s(':model', v); }
    /** excludeFromRefreshAll. Serialized as `:excludeFromRefreshAll` */
    public get excludeFromRefreshAll(): BooleanValue | undefined { return this._g(':excludeFromRefreshAll'); }
    public set excludeFromRefreshAll(v: BooleanValue | undefined) { this._s(':excludeFromRefreshAll', v); }
    /** autoDelete. Serialized as `:autoDelete` */
    public get autoDelete(): BooleanValue | undefined { return this._g(':autoDelete'); }
    public set autoDelete(v: BooleanValue | undefined) { this._s(':autoDelete', v); }
    /** usedByAddin. Serialized as `:usedByAddin` */
    public get usedByAddin(): BooleanValue | undefined { return this._g(':usedByAddin'); }
    public set usedByAddin(v: BooleanValue | undefined) { this._s(':usedByAddin', v); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Returns ModelTextProperties. */
    public get modelTextProperties(): ModelTextProperties | undefined { return this._f(ModelTextProperties); }
    /** Returns RangeProperties. */
    public get rangeProperties(): RangeProperties | undefined { return this._f(RangeProperties); }
    /** Returns OleDbPrpoperties. */
    public get oleDbPrpoperties(): OleDbPrpoperties | undefined { return this._f(OleDbPrpoperties); }
    /** Returns DataFeedProperties. */
    public get dataFeedProperties(): DataFeedProperties | undefined { return this._f(DataFeedProperties); }

}
/** Defines the DifferentialFormats Class. Serialized as `x15:dxfs` */
export class DifferentialFormats extends OxmlCompositeElement<XDifferentialFormat> {

    public static override _Q = 'x15:dxfs';
    public static override _A = [':count',];
    /** Format Count. Serialized as `:count` */
    public get count(): UInt32Value | undefined { return this._g(':count'); }
    public set count(v: UInt32Value | undefined) { this._s(':count', v); }

}
/** Defines the TimelineStyles Class. Serialized as `x15:timelineStyles` */
export class TimelineStyles extends OxmlCompositeElement<TimelineStyle> {

    public static override _Q = 'x15:timelineStyles';
    public static override _A = [':defaultTimelineStyle',];
    /** defaultTimelineStyle. Serialized as `:defaultTimelineStyle` */
    public get defaultTimelineStyle(): StringValue | undefined { return this._g(':defaultTimelineStyle'); }
    public set defaultTimelineStyle(v: StringValue | undefined) { this._s(':defaultTimelineStyle', v); }

}
/** Defines the WorkbookProperties Class. Serialized as `x15:workbookPr` */
export class WorkbookProperties extends OxmlLeafElement {

    public static override _Q = 'x15:workbookPr';
    public static override _A = [':chartTrackingRefBase',];
    /** chartTrackingRefBase. Serialized as `:chartTrackingRefBase` */
    public get chartTrackingReferenceBase(): BooleanValue | undefined { return this._g(':chartTrackingRefBase'); }
    public set chartTrackingReferenceBase(v: BooleanValue | undefined) { this._s(':chartTrackingRefBase', v); }

}
/** Defines the TimelineReferences Class. Serialized as `x15:timelineRefs` */
export class TimelineReferences extends OxmlCompositeElement<TimelineReference> {

    public static override _Q = 'x15:timelineRefs';

}
/** Defines the TimelineCacheReferences Class. Serialized as `x15:timelineCacheRefs` */
export class TimelineCacheReferences extends OxmlCompositeElement<TimelineCacheReference> {

    public static override _Q = 'x15:timelineCacheRefs';

}
/** Defines the WebExtensions Class. Serialized as `x15:webExtensions` */
export class WebExtensions extends OxmlCompositeElement<WebExtension> {

    public static override _Q = 'x15:webExtensions';

}
/** Defines the QueryTable Class. Serialized as `x15:queryTable` */
export class QueryTable extends OxmlLeafElement {

    public static override _Q = 'x15:queryTable';
    public static override _A = [':clipped',':sourceDataName',':drillThrough',];
    /** clipped. Serialized as `:clipped` */
    public get clipped(): BooleanValue | undefined { return this._g(':clipped'); }
    public set clipped(v: BooleanValue | undefined) { this._s(':clipped', v); }
    /** sourceDataName. Serialized as `:sourceDataName` */
    public get sourceDataName(): StringValue | undefined { return this._g(':sourceDataName'); }
    public set sourceDataName(v: StringValue | undefined) { this._s(':sourceDataName', v); }
    /** drillThrough. Serialized as `:drillThrough` */
    public get drillThrough(): BooleanValue | undefined { return this._g(':drillThrough'); }
    public set drillThrough(v: BooleanValue | undefined) { this._s(':drillThrough', v); }

}
/** Defines the PivotTableReferences Class. Serialized as `x15:pivotTableReferences` */
export class PivotTableReferences extends OxmlCompositeElement<PivotTableReference> {

    public static override _Q = 'x15:pivotTableReferences';

}
/** Defines the OpenXmlPivotCachesElement Class. */
export abstract class OpenXmlPivotCachesElement extends OxmlCompositeElement<XPivotCache> {


}
/** Defines the TimelineCachePivotCaches Class. Serialized as `x15:timelineCachePivotCaches` */
export class TimelineCachePivotCaches extends OpenXmlPivotCachesElement {

    public static override _Q = 'x15:timelineCachePivotCaches';

}
/** Defines the PivotCaches Class. Serialized as `x15:pivotCaches` */
export class PivotCaches extends OpenXmlPivotCachesElement {

    public static override _Q = 'x15:pivotCaches';

}

export function initOffice2013ExcelNamespace() {
    PivotRow._C = {
        'x15:c': PivotValueCell,
    };
    PivotRow._D = {
        ':r': new OxmlAttr(':r', OxmlType.UInt32Value),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    TimelineState._C = {
        'x15:selection': SelectionTimelineRange,
        'x15:bounds': BoundsTimelineRange,
        'x15:movingPeriodState': MovingPeriodState,
        'x15:extLst': ExtensionList,
    };
    TimelineState._D = {
        ':singleRangeFilterState': new OxmlAttr(':singleRangeFilterState', OxmlType.BooleanValue),
        ':minimalRefreshVersion': new OxmlAttr(':minimalRefreshVersion', OxmlType.UInt32Value),
        ':lastRefreshVersion': new OxmlAttr(':lastRefreshVersion', OxmlType.UInt32Value),
        ':pivotCacheId': new OxmlAttr(':pivotCacheId', OxmlType.UInt32Value),
        ':filterType': new OxmlAttr(':filterType', OxmlType.EnumValue, PivotFilterValuesArray),
        ':filterId': new OxmlAttr(':filterId', OxmlType.UInt32Value),
        ':filterTabId': new OxmlAttr(':filterTabId', OxmlType.UInt32Value),
        ':filterPivotName': new OxmlAttr(':filterPivotName', OxmlType.StringValue),
    };
    TimelineCachePivotTables._C = {
        'x15:pivotTable': TimelineCachePivotTable,
    };
    AutoFilter._C = {
        'x:filterColumn': XFilterColumn,
        'x:sortState': XSortState,
        'x:extLst': XExtensionList,
    };
    AutoFilter._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    TimelineRange._D = {
        ':startDate': new OxmlAttr(':startDate', OxmlType.DateTimeValue),
        ':endDate': new OxmlAttr(':endDate', OxmlType.DateTimeValue),
    };
    TimelineCachePivotTable._D = {
        ':tabId': new OxmlAttr(':tabId', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    Timeline._C = {
        'x15:extLst': ExtensionList,
    };
    Timeline._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':cache': new OxmlAttr(':cache', OxmlType.StringValue),
        ':caption': new OxmlAttr(':caption', OxmlType.StringValue),
        ':showHeader': new OxmlAttr(':showHeader', OxmlType.BooleanValue),
        ':showSelectionLabel': new OxmlAttr(':showSelectionLabel', OxmlType.BooleanValue),
        ':showTimeLevel': new OxmlAttr(':showTimeLevel', OxmlType.BooleanValue),
        ':showHorizontalScrollbar': new OxmlAttr(':showHorizontalScrollbar', OxmlType.BooleanValue),
        ':level': new OxmlAttr(':level', OxmlType.UInt32Value),
        ':selectionLevel': new OxmlAttr(':selectionLevel', OxmlType.UInt32Value),
        ':scrollPosition': new OxmlAttr(':scrollPosition', OxmlType.DateTimeValue),
        ':style': new OxmlAttr(':style', OxmlType.StringValue),
    };
    SurveyQuestion._C = {
        'x15:questionPr': QuestionPrSurveyElementPr,
        'x15:extLst': ExtensionList,
    };
    SurveyQuestion._D = {
        ':binding': new OxmlAttr(':binding', OxmlType.UInt32Value),
        ':text': new OxmlAttr(':text', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, QuestionTypeArray),
        ':format': new OxmlAttr(':format', OxmlType.EnumValue, QuestionFormatArray),
        ':helpText': new OxmlAttr(':helpText', OxmlType.StringValue),
        ':required': new OxmlAttr(':required', OxmlType.BooleanValue),
        ':defaultValue': new OxmlAttr(':defaultValue', OxmlType.StringValue),
        ':decimalPlaces': new OxmlAttr(':decimalPlaces', OxmlType.UInt32Value),
        ':rowSource': new OxmlAttr(':rowSource', OxmlType.StringValue),
    };
    SurveyQuestions._C = {
        'x15:questionsPr': QuestionsPrSurveyElementPr,
        'x15:question': SurveyQuestion,
    };
    OpenXmlSurveyElementPrElement._C = {
        'x15:extLst': ExtensionList,
    };
    OpenXmlSurveyElementPrElement._D = {
        ':cssClass': new OxmlAttr(':cssClass', OxmlType.StringValue),
        ':bottom': new OxmlAttr(':bottom', OxmlType.Int32Value),
        ':top': new OxmlAttr(':top', OxmlType.Int32Value),
        ':left': new OxmlAttr(':left', OxmlType.Int32Value),
        ':right': new OxmlAttr(':right', OxmlType.Int32Value),
        ':width': new OxmlAttr(':width', OxmlType.UInt32Value),
        ':height': new OxmlAttr(':height', OxmlType.UInt32Value),
        ':position': new OxmlAttr(':position', OxmlType.EnumValue, SurveyPositionArray),
    };
    QuestionPrSurveyElementPr._C = {
        'x15:extLst': ExtensionList,
    };
    QuestionsPrSurveyElementPr._C = {
        'x15:extLst': ExtensionList,
    };
    DescriptionPrSurveyElementPr._C = {
        'x15:extLst': ExtensionList,
    };
    TitlePrSurveyElementPr._C = {
        'x15:extLst': ExtensionList,
    };
    SurveyPrSurveyElementPr._C = {
        'x15:extLst': ExtensionList,
    };
    SlicerCacheOlapLevelName._D = {
        ':uniqueName': new OxmlAttr(':uniqueName', OxmlType.StringValue),
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    ServerFormat._D = {
        ':culture': new OxmlAttr(':culture', OxmlType.StringValue),
        ':format': new OxmlAttr(':format', OxmlType.StringValue),
    };
    PivotTableServerFormats._C = {
        'x15:serverFormat': ServerFormat,
    };
    PivotTableServerFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    PivotValueCellExtra._D = {
        ':in': new OxmlAttr(':in', OxmlType.UInt32Value),
        ':bc': new OxmlAttr(':bc', OxmlType.HexBinaryValue),
        ':fc': new OxmlAttr(':fc', OxmlType.HexBinaryValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':un': new OxmlAttr(':un', OxmlType.BooleanValue),
        ':st': new OxmlAttr(':st', OxmlType.BooleanValue),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
    };
    PivotValueCell._C = {
        'x15:v': Xstring,
        'x15:x': PivotValueCellExtra,
    };
    PivotValueCell._D = {
        ':i': new OxmlAttr(':i', OxmlType.UInt32Value),
        ':t': new OxmlAttr(':t', OxmlType.EnumValue, SXVCellTypeArray),
    };
    ModelRelationships._C = {
        'x15:modelRelationship': ModelRelationship,
    };
    ModelTables._C = {
        'x15:modelTable': ModelTable,
    };
    ModelRelationship._D = {
        ':fromTable': new OxmlAttr(':fromTable', OxmlType.StringValue),
        ':fromColumn': new OxmlAttr(':fromColumn', OxmlType.StringValue),
        ':toTable': new OxmlAttr(':toTable', OxmlType.StringValue),
        ':toColumn': new OxmlAttr(':toColumn', OxmlType.StringValue),
    };
    ModelTable._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':connection': new OxmlAttr(':connection', OxmlType.StringValue),
    };
    CachedUniqueName._D = {
        ':index': new OxmlAttr(':index', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    ExtensionList._C = {
        'x:ext': XExtension,
    };
    FieldListActiveTabTopLevelEntity._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.UInt32Value),
    };
    DataFeedProperties._C = {
        'x15:dbTables': DbTables,
    };
    DataFeedProperties._D = {
        ':connection': new OxmlAttr(':connection', OxmlType.StringValue),
    };
    OleDbPrpoperties._C = {
        'x15:dbTables': DbTables,
        'x15:dbCommand': DbCommand,
    };
    OleDbPrpoperties._D = {
        ':connection': new OxmlAttr(':connection', OxmlType.StringValue),
    };
    RangeProperties._D = {
        ':sourceName': new OxmlAttr(':sourceName', OxmlType.StringValue),
    };
    ModelTextProperties._D = {
        ':headers': new OxmlAttr(':headers', OxmlType.BooleanValue),
    };
    TextProperties._C = {
        'x:textFields': XTextFields,
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
    DbCommand._D = {
        ':text': new OxmlAttr(':text', OxmlType.StringValue),
    };
    DbTables._C = {
        'x15:dbTable': DbTable,
    };
    DbTable._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    TimelineStyleElements._C = {
        'x15:timelineStyleElement': TimelineStyleElement,
    };
    TimelineStyleElement._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, TimelineStyleTypeArray),
        ':dxfId': new OxmlAttr(':dxfId', OxmlType.UInt32Value),
    };
    TimelineStyle._C = {
        'x15:timelineStyleElements': TimelineStyleElements,
    };
    TimelineStyle._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    TimelineReference._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    TimelineCacheReference._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    WebExtension._C = {
        'xne:f': XneFormula,
    };
    WebExtension._D = {
        ':appRef': new OxmlAttr(':appRef', OxmlType.StringValue),
    };
    PivotTableReference._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    TimelineCacheDefinition._C = {
        'x15:pivotTables': TimelineCachePivotTables,
        'x15:state': TimelineState,
        'x15:extLst': ExtensionList,
    };
    TimelineCacheDefinition._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':sourceName': new OxmlAttr(':sourceName', OxmlType.StringValue),
    };
    Timelines._C = {
        'x15:timeline': Timeline,
    };
    Survey._C = {
        'x15:surveyPr': SurveyPrSurveyElementPr,
        'x15:titlePr': TitlePrSurveyElementPr,
        'x15:descriptionPr': DescriptionPrSurveyElementPr,
        'x15:questions': SurveyQuestions,
        'x15:extLst': ExtensionList,
    };
    Survey._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':guid': new OxmlAttr(':guid', OxmlType.StringValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
    };
    SlicerCachePivotTables._C = {
        'x14:pivotTable': X14SlicerCachePivotTable,
    };
    SlicerCacheHideItemsWithNoData._C = {
        'x15:slicerCacheOlapLevelName': SlicerCacheOlapLevelName,
    };
    SlicerCacheHideItemsWithNoData._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    TableSlicerCache._C = {
        'x15:extLst': ExtensionList,
    };
    TableSlicerCache._D = {
        ':tableId': new OxmlAttr(':tableId', OxmlType.UInt32Value),
        ':column': new OxmlAttr(':column', OxmlType.UInt32Value),
        ':sortOrder': new OxmlAttr(':sortOrder', OxmlType.EnumValue, TabularSlicerCacheSortOrderValuesArray),
        ':customListSort': new OxmlAttr(':customListSort', OxmlType.BooleanValue),
        ':crossFilter': new OxmlAttr(':crossFilter', OxmlType.EnumValue, SlicerCacheCrossFilterValuesArray),
    };
    SlicerCaches._C = {
        'x14:slicerCache': X14SlicerCache,
    };
    MovingPeriodState._D = {
        ':referenceDateBegin': new OxmlAttr(':referenceDateBegin', OxmlType.DateTimeValue),
        ':referencePeriod': new OxmlAttr(':referencePeriod', OxmlType.EnumValue, MovingPeriodStepArray),
        ':referenceMultiple': new OxmlAttr(':referenceMultiple', OxmlType.UInt32Value),
        ':movingPeriod': new OxmlAttr(':movingPeriod', OxmlType.EnumValue, MovingPeriodStepArray),
        ':movingMultiple': new OxmlAttr(':movingMultiple', OxmlType.UInt32Value),
    };
    DataField._D = {
        ':isCountDistinct': new OxmlAttr(':isCountDistinct', OxmlType.BooleanValue),
    };
    PivotCacheDecoupled._D = {
        ':decoupled': new OxmlAttr(':decoupled', OxmlType.BooleanValue),
    };
    PivotTableData._C = {
        'x15:pivotRow': PivotRow,
    };
    PivotTableData._D = {
        ':rowCount': new OxmlAttr(':rowCount', OxmlType.UInt32Value),
        ':columnCount': new OxmlAttr(':columnCount', OxmlType.UInt32Value),
        ':cacheId': new OxmlAttr(':cacheId', OxmlType.UInt32Value),
    };
    DataModel._C = {
        'x15:modelTables': ModelTables,
        'x15:modelRelationships': ModelRelationships,
        'x15:extLst': ExtensionList,
    };
    DataModel._D = {
        ':minVersionLoad': new OxmlAttr(':minVersionLoad', OxmlType.ByteValue),
    };
    PivotCacheIdVersion._D = {
        ':cacheIdSupportedVersion': new OxmlAttr(':cacheIdSupportedVersion', OxmlType.ByteValue),
        ':cacheIdCreatedVersion': new OxmlAttr(':cacheIdCreatedVersion', OxmlType.ByteValue),
    };
    TimelinePivotCacheDefinition._D = {
        ':timelineData': new OxmlAttr(':timelineData', OxmlType.BooleanValue),
    };
    CacheHierarchy._D = {
        ':aggregatedColumn': new OxmlAttr(':aggregatedColumn', OxmlType.Int32Value),
    };
    CachedUniqueNames._C = {
        'x15:cachedUniqueName': CachedUniqueName,
    };
    PivotFilter._D = {
        ':useWholeDay': new OxmlAttr(':useWholeDay', OxmlType.BooleanValue),
    };
    PivotTableUISettings._C = {
        'x15:activeTabTopLevelEntity': FieldListActiveTabTopLevelEntity,
        'x15:extLst': ExtensionList,
    };
    PivotTableUISettings._D = {
        ':sourceDataName': new OxmlAttr(':sourceDataName', OxmlType.StringValue),
        ':relNeededHidden': new OxmlAttr(':relNeededHidden', OxmlType.BooleanValue),
    };
    CalculatedMember._D = {
        ':measureGroup': new OxmlAttr(':measureGroup', OxmlType.StringValue),
        ':numberFormat': new OxmlAttr(':numberFormat', OxmlType.EnumValue, CalculatedMemberNumberFormatArray),
        ':measure': new OxmlAttr(':measure', OxmlType.BooleanValue),
    };
    Connection._C = {
        'x15:textPr': TextProperties,
        'x15:modelTextPr': ModelTextProperties,
        'x15:rangePr': RangeProperties,
        'x15:oledbPr': OleDbPrpoperties,
        'x15:dataFeedPr': DataFeedProperties,
    };
    Connection._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':model': new OxmlAttr(':model', OxmlType.BooleanValue),
        ':excludeFromRefreshAll': new OxmlAttr(':excludeFromRefreshAll', OxmlType.BooleanValue),
        ':autoDelete': new OxmlAttr(':autoDelete', OxmlType.BooleanValue),
        ':usedByAddin': new OxmlAttr(':usedByAddin', OxmlType.BooleanValue),
    };
    DifferentialFormats._C = {
        'x:dxf': XDifferentialFormat,
    };
    DifferentialFormats._D = {
        ':count': new OxmlAttr(':count', OxmlType.UInt32Value),
    };
    TimelineStyles._C = {
        'x15:timelineStyle': TimelineStyle,
    };
    TimelineStyles._D = {
        ':defaultTimelineStyle': new OxmlAttr(':defaultTimelineStyle', OxmlType.StringValue),
    };
    WorkbookProperties._D = {
        ':chartTrackingRefBase': new OxmlAttr(':chartTrackingRefBase', OxmlType.BooleanValue),
    };
    TimelineReferences._C = {
        'x15:timelineRef': TimelineReference,
    };
    TimelineCacheReferences._C = {
        'x15:timelineCacheRef': TimelineCacheReference,
    };
    WebExtensions._C = {
        'x15:webExtension': WebExtension,
    };
    QueryTable._D = {
        ':clipped': new OxmlAttr(':clipped', OxmlType.BooleanValue),
        ':sourceDataName': new OxmlAttr(':sourceDataName', OxmlType.StringValue),
        ':drillThrough': new OxmlAttr(':drillThrough', OxmlType.BooleanValue),
    };
    PivotTableReferences._C = {
        'x15:pivotTableReference': PivotTableReference,
    };
    OpenXmlPivotCachesElement._C = {
        'x:pivotCache': XPivotCache,
    };
    TimelineCachePivotCaches._C = {
        'x:pivotCache': XPivotCache,
    };
    PivotCaches._C = {
        'x:pivotCache': XPivotCache,
    };
    return {
        prefix: 'x15',
        xmlns: 'http://schemas.microsoft.com/office/spreadsheetml/2010/11/main',
    };
}
