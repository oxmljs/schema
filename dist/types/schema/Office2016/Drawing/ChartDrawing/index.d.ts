import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { DoubleValue } from '../../../../framework/types/DoubleValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { IntegerValue } from '../../../../framework/types/IntegerValue';
import { ColorSchemeIndexValues } from '../../../Drawing';
import { BlackWhiteModeValues } from '../../../Drawing';
import { ExtensionList as AExtensionList } from '../../../Drawing';
import { Transform2D as ATransform2D } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { Outline as AOutline } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { Shape3DType as AShape3DType } from '../../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../../Drawing';
import { BodyProperties as ABodyProperties } from '../../../Drawing';
import { ListStyle as AListStyle } from '../../../Drawing';
import { Paragraph as AParagraph } from '../../../Drawing';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../../Drawing';
import { HslColor as AHslColor } from '../../../Drawing';
import { SystemColor as ASystemColor } from '../../../Drawing';
import { SchemeColor as ASchemeColor } from '../../../Drawing';
import { PresetColor as APresetColor } from '../../../Drawing';
export declare enum FormulaDirection {
    /** undefined. Serialized value: `col` */
    Col = "col",
    /** undefined. Serialized value: `row` */
    Row = "row"
}
export declare const FormulaDirectionArray: readonly [FormulaDirection.Col, FormulaDirection.Row];
export declare enum StringDimensionType {
    /** undefined. Serialized value: `cat` */
    Cat = "cat",
    /** undefined. Serialized value: `colorStr` */
    ColorStr = "colorStr",
    /** undefined. Serialized value: `entityId` */
    EntityId = "entityId"
}
export declare const StringDimensionTypeArray: readonly [StringDimensionType.Cat, StringDimensionType.ColorStr, StringDimensionType.EntityId];
export declare enum NumericDimensionType {
    /** undefined. Serialized value: `val` */
    Val = "val",
    /** undefined. Serialized value: `x` */
    X = "x",
    /** undefined. Serialized value: `y` */
    Y = "y",
    /** undefined. Serialized value: `size` */
    Size = "size",
    /** undefined. Serialized value: `colorVal` */
    ColorVal = "colorVal"
}
export declare const NumericDimensionTypeArray: readonly [NumericDimensionType.Val, NumericDimensionType.X, NumericDimensionType.Y, NumericDimensionType.Size, NumericDimensionType.ColorVal];
export declare enum SidePos {
    /** undefined. Serialized value: `l` */
    L = "l",
    /** undefined. Serialized value: `t` */
    T = "t",
    /** undefined. Serialized value: `r` */
    R = "r",
    /** undefined. Serialized value: `b` */
    B = "b"
}
export declare const SidePosArray: readonly [SidePos.L, SidePos.T, SidePos.R, SidePos.B];
export declare enum PosAlign {
    /** undefined. Serialized value: `min` */
    Min = "min",
    /** undefined. Serialized value: `ctr` */
    Ctr = "ctr",
    /** undefined. Serialized value: `max` */
    Max = "max"
}
export declare const PosAlignArray: readonly [PosAlign.Min, PosAlign.Ctr, PosAlign.Max];
export declare enum AxisUnit {
    /** undefined. Serialized value: `hundreds` */
    Hundreds = "hundreds",
    /** undefined. Serialized value: `thousands` */
    Thousands = "thousands",
    /** undefined. Serialized value: `tenThousands` */
    TenThousands = "tenThousands",
    /** undefined. Serialized value: `hundredThousands` */
    HundredThousands = "hundredThousands",
    /** undefined. Serialized value: `millions` */
    Millions = "millions",
    /** undefined. Serialized value: `tenMillions` */
    TenMillions = "tenMillions",
    /** undefined. Serialized value: `hundredMillions` */
    HundredMillions = "hundredMillions",
    /** undefined. Serialized value: `billions` */
    Billions = "billions",
    /** undefined. Serialized value: `trillions` */
    Trillions = "trillions",
    /** undefined. Serialized value: `percentage` */
    Percentage = "percentage"
}
export declare const AxisUnitArray: readonly [AxisUnit.Hundreds, AxisUnit.Thousands, AxisUnit.TenThousands, AxisUnit.HundredThousands, AxisUnit.Millions, AxisUnit.TenMillions, AxisUnit.HundredMillions, AxisUnit.Billions, AxisUnit.Trillions, AxisUnit.Percentage];
export declare enum TickMarksType {
    /** undefined. Serialized value: `in` */
    In = "in",
    /** undefined. Serialized value: `out` */
    Out = "out",
    /** undefined. Serialized value: `cross` */
    Cross = "cross",
    /** undefined. Serialized value: `none` */
    None = "none"
}
export declare const TickMarksTypeArray: readonly [TickMarksType.In, TickMarksType.Out, TickMarksType.Cross, TickMarksType.None];
export declare enum SeriesLayout {
    /** undefined. Serialized value: `boxWhisker` */
    BoxWhisker = "boxWhisker",
    /** undefined. Serialized value: `clusteredColumn` */
    ClusteredColumn = "clusteredColumn",
    /** undefined. Serialized value: `funnel` */
    Funnel = "funnel",
    /** undefined. Serialized value: `paretoLine` */
    ParetoLine = "paretoLine",
    /** undefined. Serialized value: `regionMap` */
    RegionMap = "regionMap",
    /** undefined. Serialized value: `sunburst` */
    Sunburst = "sunburst",
    /** undefined. Serialized value: `treemap` */
    Treemap = "treemap",
    /** undefined. Serialized value: `waterfall` */
    Waterfall = "waterfall"
}
export declare const SeriesLayoutArray: readonly [SeriesLayout.BoxWhisker, SeriesLayout.ClusteredColumn, SeriesLayout.Funnel, SeriesLayout.ParetoLine, SeriesLayout.RegionMap, SeriesLayout.Sunburst, SeriesLayout.Treemap, SeriesLayout.Waterfall];
export declare enum ParentLabelLayoutVal {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `banner` */
    Banner = "banner",
    /** undefined. Serialized value: `overlapping` */
    Overlapping = "overlapping"
}
export declare const ParentLabelLayoutValArray: readonly [ParentLabelLayoutVal.None, ParentLabelLayoutVal.Banner, ParentLabelLayoutVal.Overlapping];
export declare enum RegionLabelLayoutEnum {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `bestFitOnly` */
    BestFitOnly = "bestFitOnly",
    /** undefined. Serialized value: `showAll` */
    ShowAll = "showAll"
}
export declare const RegionLabelLayoutEnumArray: readonly [RegionLabelLayoutEnum.None, RegionLabelLayoutEnum.BestFitOnly, RegionLabelLayoutEnum.ShowAll];
export declare enum IntervalClosedSide {
    /** undefined. Serialized value: `l` */
    L = "l",
    /** undefined. Serialized value: `r` */
    R = "r"
}
export declare const IntervalClosedSideArray: readonly [IntervalClosedSide.L, IntervalClosedSide.R];
export declare enum EntityTypeEnum {
    /** undefined. Serialized value: `Address` */
    Address = "Address",
    /** undefined. Serialized value: `AdminDistrict` */
    AdminDistrict = "AdminDistrict",
    /** undefined. Serialized value: `AdminDistrict2` */
    AdminDistrict2 = "AdminDistrict2",
    /** undefined. Serialized value: `AdminDistrict3` */
    AdminDistrict3 = "AdminDistrict3",
    /** undefined. Serialized value: `Continent` */
    Continent = "Continent",
    /** undefined. Serialized value: `CountryRegion` */
    CountryRegion = "CountryRegion",
    /** undefined. Serialized value: `Locality` */
    Locality = "Locality",
    /** undefined. Serialized value: `Ocean` */
    Ocean = "Ocean",
    /** undefined. Serialized value: `Planet` */
    Planet = "Planet",
    /** undefined. Serialized value: `PostalCode` */
    PostalCode = "PostalCode",
    /** undefined. Serialized value: `Region` */
    Region = "Region",
    /** undefined. Serialized value: `Unsupported` */
    Unsupported = "Unsupported"
}
export declare const EntityTypeEnumArray: readonly [EntityTypeEnum.Address, EntityTypeEnum.AdminDistrict, EntityTypeEnum.AdminDistrict2, EntityTypeEnum.AdminDistrict3, EntityTypeEnum.Continent, EntityTypeEnum.CountryRegion, EntityTypeEnum.Locality, EntityTypeEnum.Ocean, EntityTypeEnum.Planet, EntityTypeEnum.PostalCode, EntityTypeEnum.Region, EntityTypeEnum.Unsupported];
export declare enum GeoProjectionType {
    /** undefined. Serialized value: `mercator` */
    Mercator = "mercator",
    /** undefined. Serialized value: `miller` */
    Miller = "miller",
    /** undefined. Serialized value: `robinson` */
    Robinson = "robinson",
    /** undefined. Serialized value: `albers` */
    Albers = "albers"
}
export declare const GeoProjectionTypeArray: readonly [GeoProjectionType.Mercator, GeoProjectionType.Miller, GeoProjectionType.Robinson, GeoProjectionType.Albers];
export declare enum GeoMappingLevel {
    /** undefined. Serialized value: `dataOnly` */
    DataOnly = "dataOnly",
    /** undefined. Serialized value: `postalCode` */
    PostalCode = "postalCode",
    /** undefined. Serialized value: `county` */
    County = "county",
    /** undefined. Serialized value: `state` */
    State = "state",
    /** undefined. Serialized value: `countryRegion` */
    CountryRegion = "countryRegion",
    /** undefined. Serialized value: `countryRegionList` */
    CountryRegionList = "countryRegionList",
    /** undefined. Serialized value: `world` */
    World = "world"
}
export declare const GeoMappingLevelArray: readonly [GeoMappingLevel.DataOnly, GeoMappingLevel.PostalCode, GeoMappingLevel.County, GeoMappingLevel.State, GeoMappingLevel.CountryRegion, GeoMappingLevel.CountryRegionList, GeoMappingLevel.World];
export declare enum QuartileMethod {
    /** undefined. Serialized value: `inclusive` */
    Inclusive = "inclusive",
    /** undefined. Serialized value: `exclusive` */
    Exclusive = "exclusive"
}
export declare const QuartileMethodArray: readonly [QuartileMethod.Inclusive, QuartileMethod.Exclusive];
export declare enum DataLabelPos {
    /** undefined. Serialized value: `bestFit` */
    BestFit = "bestFit",
    /** undefined. Serialized value: `b` */
    B = "b",
    /** undefined. Serialized value: `ctr` */
    Ctr = "ctr",
    /** undefined. Serialized value: `inBase` */
    InBase = "inBase",
    /** undefined. Serialized value: `inEnd` */
    InEnd = "inEnd",
    /** undefined. Serialized value: `l` */
    L = "l",
    /** undefined. Serialized value: `outEnd` */
    OutEnd = "outEnd",
    /** undefined. Serialized value: `r` */
    R = "r",
    /** undefined. Serialized value: `t` */
    T = "t"
}
export declare const DataLabelPosArray: readonly [DataLabelPos.BestFit, DataLabelPos.B, DataLabelPos.Ctr, DataLabelPos.InBase, DataLabelPos.InEnd, DataLabelPos.L, DataLabelPos.OutEnd, DataLabelPos.R, DataLabelPos.T];
export declare enum PageOrientation {
    /** undefined. Serialized value: `default` */
    Default = "default",
    /** undefined. Serialized value: `portrait` */
    Portrait = "portrait",
    /** undefined. Serialized value: `landscape` */
    Landscape = "landscape"
}
export declare const PageOrientationArray: readonly [PageOrientation.Default, PageOrientation.Portrait, PageOrientation.Landscape];
/** Index of subtotal data point. Serialized as `cx:idx` */
export declare class UnsignedIntegerType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Integer Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the PrintSettings Class. Serialized as `cx:printSettings` */
export declare class PrintSettings extends OxmlCompositeElement<HeaderFooter | PageMargins | PageSetup> {
    static _Q: string;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
    /** Returns PageMargins. */
    get pageMargins(): PageMargins | undefined;
    /** Returns PageSetup. */
    get pageSetup(): PageSetup | undefined;
}
/** Defines the FormatOverrides Class. Serialized as `cx:fmtOvrs` */
export declare class FormatOverrides extends OxmlCompositeElement<FormatOverride> {
    static _Q: string;
}
/** Defines the ColorMappingType Class. Serialized as `cx:clrMapOvr` */
export declare class ColorMappingType extends OxmlCompositeElement<AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Background 1. Serialized as `:bg1` */
    get background1(): ColorSchemeIndexValues | undefined;
    set background1(v: ColorSchemeIndexValues | undefined);
    /** Text 1. Serialized as `:tx1` */
    get text1(): ColorSchemeIndexValues | undefined;
    set text1(v: ColorSchemeIndexValues | undefined);
    /** Background 2. Serialized as `:bg2` */
    get background2(): ColorSchemeIndexValues | undefined;
    set background2(v: ColorSchemeIndexValues | undefined);
    /** Text 2. Serialized as `:tx2` */
    get text2(): ColorSchemeIndexValues | undefined;
    set text2(v: ColorSchemeIndexValues | undefined);
    /** Accent 1. Serialized as `:accent1` */
    get accent1(): ColorSchemeIndexValues | undefined;
    set accent1(v: ColorSchemeIndexValues | undefined);
    /** Accent 2. Serialized as `:accent2` */
    get accent2(): ColorSchemeIndexValues | undefined;
    set accent2(v: ColorSchemeIndexValues | undefined);
    /** Accent 3. Serialized as `:accent3` */
    get accent3(): ColorSchemeIndexValues | undefined;
    set accent3(v: ColorSchemeIndexValues | undefined);
    /** Accent 4. Serialized as `:accent4` */
    get accent4(): ColorSchemeIndexValues | undefined;
    set accent4(v: ColorSchemeIndexValues | undefined);
    /** Accent 5. Serialized as `:accent5` */
    get accent5(): ColorSchemeIndexValues | undefined;
    set accent5(v: ColorSchemeIndexValues | undefined);
    /** Accent 6. Serialized as `:accent6` */
    get accent6(): ColorSchemeIndexValues | undefined;
    set accent6(v: ColorSchemeIndexValues | undefined);
    /** Hyperlink. Serialized as `:hlink` */
    get hyperlink(): ColorSchemeIndexValues | undefined;
    set hyperlink(v: ColorSchemeIndexValues | undefined);
    /** Followed Hyperlink. Serialized as `:folHlink` */
    get followedHyperlink(): ColorSchemeIndexValues | undefined;
    set followedHyperlink(v: ColorSchemeIndexValues | undefined);
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the Chart Class. Serialized as `cx:chart` */
export declare class Chart extends OxmlCompositeElement<ChartTitle | PlotArea | Legend | ExtensionList> {
    static _Q: string;
    /** Returns ChartTitle. */
    get chartTitle(): ChartTitle | undefined;
    /** Returns PlotArea. */
    get plotArea(): PlotArea | undefined;
    /** Returns Legend. */
    get legend(): Legend | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ChartData Class. Serialized as `cx:chartData` */
export declare class ChartData extends OxmlCompositeElement<ExternalData | Data | ExtensionList> {
    static _Q: string;
    /** Returns ExternalData. */
    get externalData(): ExternalData | undefined;
}
/** Defines the PageSetup Class. Serialized as `cx:pageSetup` */
export declare class PageSetup extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** paperSize. Serialized as `:paperSize` */
    get paperSize(): UInt32Value | undefined;
    set paperSize(v: UInt32Value | undefined);
    /** firstPageNumber. Serialized as `:firstPageNumber` */
    get firstPageNumber(): UInt32Value | undefined;
    set firstPageNumber(v: UInt32Value | undefined);
    /** orientation. Serialized as `:orientation` */
    get orientation(): PageOrientation | undefined;
    set orientation(v: PageOrientation | undefined);
    /** blackAndWhite. Serialized as `:blackAndWhite` */
    get blackAndWhite(): BooleanValue | undefined;
    set blackAndWhite(v: BooleanValue | undefined);
    /** draft. Serialized as `:draft` */
    get draft(): BooleanValue | undefined;
    set draft(v: BooleanValue | undefined);
    /** useFirstPageNumber. Serialized as `:useFirstPageNumber` */
    get useFirstPageNumber(): BooleanValue | undefined;
    set useFirstPageNumber(v: BooleanValue | undefined);
    /** horizontalDpi. Serialized as `:horizontalDpi` */
    get horizontalDpi(): Int32Value | undefined;
    set horizontalDpi(v: Int32Value | undefined);
    /** verticalDpi. Serialized as `:verticalDpi` */
    get verticalDpi(): Int32Value | undefined;
    set verticalDpi(v: Int32Value | undefined);
    /** copies. Serialized as `:copies` */
    get copies(): UInt32Value | undefined;
    set copies(v: UInt32Value | undefined);
}
/** Defines the PageMargins Class. Serialized as `cx:pageMargins` */
export declare class PageMargins extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** l. Serialized as `:l` */
    get l(): DoubleValue | undefined;
    set l(v: DoubleValue | undefined);
    /** r. Serialized as `:r` */
    get r(): DoubleValue | undefined;
    set r(v: DoubleValue | undefined);
    /** t. Serialized as `:t` */
    get t(): DoubleValue | undefined;
    set t(v: DoubleValue | undefined);
    /** b. Serialized as `:b` */
    get b(): DoubleValue | undefined;
    set b(v: DoubleValue | undefined);
    /** header. Serialized as `:header` */
    get header(): DoubleValue | undefined;
    set header(v: DoubleValue | undefined);
    /** footer. Serialized as `:footer` */
    get footer(): DoubleValue | undefined;
    set footer(v: DoubleValue | undefined);
}
/** Defines the HeaderFooter Class. Serialized as `cx:headerFooter` */
export declare class HeaderFooter extends OxmlCompositeElement<OddHeaderXsdstring | OddFooterXsdstring | EvenHeaderXsdstring | EvenFooterXsdstring | FirstHeaderXsdstring | FirstFooterXsdstring> {
    static _Q: string;
    static _A: string[];
    /** alignWithMargins. Serialized as `:alignWithMargins` */
    get alignWithMargins(): BooleanValue | undefined;
    set alignWithMargins(v: BooleanValue | undefined);
    /** differentOddEven. Serialized as `:differentOddEven` */
    get differentOddEven(): BooleanValue | undefined;
    set differentOddEven(v: BooleanValue | undefined);
    /** differentFirst. Serialized as `:differentFirst` */
    get differentFirst(): BooleanValue | undefined;
    set differentFirst(v: BooleanValue | undefined);
    /** Returns OddHeaderXsdstring. */
    get oddHeaderXsdstring(): OddHeaderXsdstring | undefined;
    /** Returns OddFooterXsdstring. */
    get oddFooterXsdstring(): OddFooterXsdstring | undefined;
    /** Returns EvenHeaderXsdstring. */
    get evenHeaderXsdstring(): EvenHeaderXsdstring | undefined;
    /** Returns EvenFooterXsdstring. */
    get evenFooterXsdstring(): EvenFooterXsdstring | undefined;
    /** Returns FirstHeaderXsdstring. */
    get firstHeaderXsdstring(): FirstHeaderXsdstring | undefined;
    /** Returns FirstFooterXsdstring. */
    get firstFooterXsdstring(): FirstFooterXsdstring | undefined;
}
/** Defines the FormatOverride Class. Serialized as `cx:fmtOvr` */
export declare class FormatOverride extends OxmlCompositeElement<ShapeProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get idx(): UInt32Value | undefined;
    set idx(v: UInt32Value | undefined);
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Legend Class. Serialized as `cx:legend` */
export declare class Legend extends OxmlCompositeElement<ShapeProperties | TxPrTextBody | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** pos. Serialized as `:pos` */
    get pos(): SidePos | undefined;
    set pos(v: SidePos | undefined);
    /** align. Serialized as `:align` */
    get align(): PosAlign | undefined;
    set align(v: PosAlign | undefined);
    /** overlay. Serialized as `:overlay` */
    get overlay(): BooleanValue | undefined;
    set overlay(v: BooleanValue | undefined);
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the PlotArea Class. Serialized as `cx:plotArea` */
export declare class PlotArea extends OxmlCompositeElement<PlotAreaRegion | Axis | ShapeProperties | ExtensionList> {
    static _Q: string;
    /** Returns PlotAreaRegion. */
    get plotAreaRegion(): PlotAreaRegion | undefined;
}
/** Defines the ChartTitle Class. Serialized as `cx:title` */
export declare class ChartTitle extends OxmlCompositeElement<Text | ShapeProperties | TxPrTextBody | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** pos. Serialized as `:pos` */
    get pos(): SidePos | undefined;
    set pos(v: SidePos | undefined);
    /** align. Serialized as `:align` */
    get align(): PosAlign | undefined;
    set align(v: PosAlign | undefined);
    /** overlay. Serialized as `:overlay` */
    get overlay(): BooleanValue | undefined;
    set overlay(v: BooleanValue | undefined);
    /** Returns Text. */
    get text(): Text | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Axis Class. Serialized as `cx:axis` */
export declare class Axis extends OxmlCompositeElement<CategoryAxisScaling | ValueAxisScaling | AxisTitle | AxisUnits | MajorGridlinesGridlines | MinorGridlinesGridlines | MajorTickMarksTickMarks | MinorTickMarksTickMarks | TickLabels | NumberFormat | ShapeProperties | TxPrTextBody | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
}
/** Defines the PlotAreaRegion Class. Serialized as `cx:plotAreaRegion` */
export declare class PlotAreaRegion extends OxmlCompositeElement<PlotSurface | Series | ExtensionList> {
    static _Q: string;
    /** Returns PlotSurface. */
    get plotSurface(): PlotSurface | undefined;
}
/** Defines the Series Class. Serialized as `cx:series` */
export declare class Series extends OxmlCompositeElement<Text | ShapeProperties | ValueColors | ValueColorPositions | DataPoint | DataLabels | DataId | SeriesLayoutProperties | AxisId | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** layoutId. Serialized as `:layoutId` */
    get layoutId(): SeriesLayout | undefined;
    set layoutId(v: SeriesLayout | undefined);
    /** hidden. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** ownerIdx. Serialized as `:ownerIdx` */
    get ownerIdx(): UInt32Value | undefined;
    set ownerIdx(v: UInt32Value | undefined);
    /** uniqueId. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** formatIdx. Serialized as `:formatIdx` */
    get formatIdx(): UInt32Value | undefined;
    set formatIdx(v: UInt32Value | undefined);
    /** Returns Text. */
    get text(): Text | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ValueColors. */
    get valueColors(): ValueColors | undefined;
    /** Returns ValueColorPositions. */
    get valueColorPositions(): ValueColorPositions | undefined;
}
/** Defines the PlotSurface Class. Serialized as `cx:plotSurface` */
export declare class PlotSurface extends OxmlCompositeElement<ShapeProperties | ExtensionList> {
    static _Q: string;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the AxisId Class. Serialized as `cx:axisId` */
export declare class AxisId extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the SeriesLayoutProperties Class. Serialized as `cx:layoutPr` */
export declare class SeriesLayoutProperties extends OxmlCompositeElement<ParentLabelLayout | RegionLabelLayout | SeriesElementVisibilities | Aggregation | Binning | Geography | Statistics | Subtotals | ExtensionList> {
    static _Q: string;
    /** Returns ParentLabelLayout. */
    get parentLabelLayout(): ParentLabelLayout | undefined;
    /** Returns RegionLabelLayout. */
    get regionLabelLayout(): RegionLabelLayout | undefined;
    /** Returns SeriesElementVisibilities. */
    get seriesElementVisibilities(): SeriesElementVisibilities | undefined;
}
/** Defines the DataId Class. Serialized as `cx:dataId` */
export declare class DataId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the DataLabels Class. Serialized as `cx:dataLabels` */
export declare class DataLabels extends OxmlCompositeElement<NumberFormat | ShapeProperties | TxPrTextBody | DataLabelVisibilities | SeparatorXsdstring | DataLabel | DataLabelHidden | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** pos. Serialized as `:pos` */
    get pos(): DataLabelPos | undefined;
    set pos(v: DataLabelPos | undefined);
    /** Returns NumberFormat. */
    get numberFormat(): NumberFormat | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns DataLabelVisibilities. */
    get dataLabelVisibilities(): DataLabelVisibilities | undefined;
    /** Returns SeparatorXsdstring. */
    get separatorXsdstring(): SeparatorXsdstring | undefined;
}
/** Defines the DataPoint Class. Serialized as `cx:dataPt` */
export declare class DataPoint extends OxmlCompositeElement<ShapeProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get idx(): UInt32Value | undefined;
    set idx(v: UInt32Value | undefined);
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ValueColorPositions Class. Serialized as `cx:valueColorPositions` */
export declare class ValueColorPositions extends OxmlCompositeElement<MinValueColorEndPosition | ValueColorMiddlePosition | MaxValueColorEndPosition> {
    static _Q: string;
    static _A: string[];
    /** count. Serialized as `:count` */
    get count(): Int32Value | undefined;
    set count(v: Int32Value | undefined);
    /** Returns MinValueColorEndPosition. */
    get minValueColorEndPosition(): MinValueColorEndPosition | undefined;
    /** Returns ValueColorMiddlePosition. */
    get valueColorMiddlePosition(): ValueColorMiddlePosition | undefined;
    /** Returns MaxValueColorEndPosition. */
    get maxValueColorEndPosition(): MaxValueColorEndPosition | undefined;
}
/** Defines the ValueColors Class. Serialized as `cx:valueColors` */
export declare class ValueColors extends OxmlCompositeElement<MinColorSolidColorFillProperties | MidColorSolidColorFillProperties | MaxColorSolidColorFillProperties> {
    static _Q: string;
    /** Returns MinColorSolidColorFillProperties. */
    get minColorSolidColorFillProperties(): MinColorSolidColorFillProperties | undefined;
    /** Returns MidColorSolidColorFillProperties. */
    get midColorSolidColorFillProperties(): MidColorSolidColorFillProperties | undefined;
    /** Returns MaxColorSolidColorFillProperties. */
    get maxColorSolidColorFillProperties(): MaxColorSolidColorFillProperties | undefined;
}
/** Defines the DataLabelHidden Class. Serialized as `cx:dataLabelHidden` */
export declare class DataLabelHidden extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get idx(): UInt32Value | undefined;
    set idx(v: UInt32Value | undefined);
}
/** Defines the DataLabel Class. Serialized as `cx:dataLabel` */
export declare class DataLabel extends OxmlCompositeElement<NumberFormat | ShapeProperties | TxPrTextBody | DataLabelVisibilities | SeparatorXsdstring | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get idx(): UInt32Value | undefined;
    set idx(v: UInt32Value | undefined);
    /** pos. Serialized as `:pos` */
    get pos(): DataLabelPos | undefined;
    set pos(v: DataLabelPos | undefined);
    /** Returns NumberFormat. */
    get numberFormat(): NumberFormat | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns DataLabelVisibilities. */
    get dataLabelVisibilities(): DataLabelVisibilities | undefined;
    /** Returns SeparatorXsdstring. */
    get separatorXsdstring(): SeparatorXsdstring | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DataLabelVisibilities Class. Serialized as `cx:visibility` */
export declare class DataLabelVisibilities extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** seriesName. Serialized as `:seriesName` */
    get seriesName(): BooleanValue | undefined;
    set seriesName(v: BooleanValue | undefined);
    /** categoryName. Serialized as `:categoryName` */
    get categoryName(): BooleanValue | undefined;
    set categoryName(v: BooleanValue | undefined);
    /** value. Serialized as `:value` */
    get value(): BooleanValue | undefined;
    set value(v: BooleanValue | undefined);
}
/** Defines the ValueColorMiddlePosition Class. Serialized as `cx:mid` */
export declare class ValueColorMiddlePosition extends OxmlCompositeElement<NumberColorPosition | PercentageColorPosition> {
    static _Q: string;
    /** Returns NumberColorPosition. */
    get numberColorPosition(): NumberColorPosition | undefined;
    /** Returns PercentageColorPosition. */
    get percentageColorPosition(): PercentageColorPosition | undefined;
}
/** Defines the OpenXmlValueColorEndPositionElement Class. */
export declare abstract class OpenXmlValueColorEndPositionElement extends OxmlCompositeElement<ExtremeValueColorPosition | NumberColorPosition | PercentageColorPosition> {
    /** Returns ExtremeValueColorPosition. */
    get extremeValueColorPosition(): ExtremeValueColorPosition | undefined;
    /** Returns NumberColorPosition. */
    get numberColorPosition(): NumberColorPosition | undefined;
    /** Returns PercentageColorPosition. */
    get percentageColorPosition(): PercentageColorPosition | undefined;
}
/** Defines the MaxValueColorEndPosition Class. Serialized as `cx:max` */
export declare class MaxValueColorEndPosition extends OpenXmlValueColorEndPositionElement {
    static _Q: string;
}
/** Defines the MinValueColorEndPosition Class. Serialized as `cx:min` */
export declare class MinValueColorEndPosition extends OpenXmlValueColorEndPositionElement {
    static _Q: string;
}
/** Defines the PercentageColorPosition Class. Serialized as `cx:percent` */
export declare class PercentageColorPosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Defines the NumberColorPosition Class. Serialized as `cx:number` */
export declare class NumberColorPosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Defines the ExtremeValueColorPosition Class. Serialized as `cx:extremeValue` */
export declare class ExtremeValueColorPosition extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the Subtotals Class. Serialized as `cx:subtotals` */
export declare class Subtotals extends OxmlCompositeElement<UnsignedIntegerType> {
    static _Q: string;
}
/** Defines the Statistics Class. Serialized as `cx:statistics` */
export declare class Statistics extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** quartileMethod. Serialized as `:quartileMethod` */
    get quartileMethod(): QuartileMethod | undefined;
    set quartileMethod(v: QuartileMethod | undefined);
}
/** Defines the Geography Class. Serialized as `cx:geography` */
export declare class Geography extends OxmlCompositeElement<GeoCache> {
    static _Q: string;
    static _A: string[];
    /** projectionType. Serialized as `:projectionType` */
    get projectionType(): GeoProjectionType | undefined;
    set projectionType(v: GeoProjectionType | undefined);
    /** viewedRegionType. Serialized as `:viewedRegionType` */
    get viewedRegionType(): GeoMappingLevel | undefined;
    set viewedRegionType(v: GeoMappingLevel | undefined);
    /** cultureLanguage. Serialized as `:cultureLanguage` */
    get cultureLanguage(): StringValue | undefined;
    set cultureLanguage(v: StringValue | undefined);
    /** cultureRegion. Serialized as `:cultureRegion` */
    get cultureRegion(): StringValue | undefined;
    set cultureRegion(v: StringValue | undefined);
    /** attribution. Serialized as `:attribution` */
    get attribution(): StringValue | undefined;
    set attribution(v: StringValue | undefined);
    /** Returns GeoCache. */
    get geoCache(): GeoCache | undefined;
}
/** Defines the Binning Class. Serialized as `cx:binning` */
export declare class Binning extends OxmlCompositeElement<Xsddouble | BinCountXsdunsignedInt> {
    static _Q: string;
    static _A: string[];
    /** intervalClosed. Serialized as `:intervalClosed` */
    get intervalClosed(): IntervalClosedSide | undefined;
    set intervalClosed(v: IntervalClosedSide | undefined);
    /** underflow. Serialized as `:underflow` */
    get underflow(): StringValue | undefined;
    set underflow(v: StringValue | undefined);
    /** overflow. Serialized as `:overflow` */
    get overflow(): StringValue | undefined;
    set overflow(v: StringValue | undefined);
    /** Returns Xsddouble. */
    get xsddouble(): Xsddouble | undefined;
    /** Returns BinCountXsdunsignedInt. */
    get binCountXsdunsignedInt(): BinCountXsdunsignedInt | undefined;
}
/** Defines the Aggregation Class. Serialized as `cx:aggregation` */
export declare class Aggregation extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the SeriesElementVisibilities Class. Serialized as `cx:visibility` */
export declare class SeriesElementVisibilities extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** connectorLines. Serialized as `:connectorLines` */
    get connectorLines(): BooleanValue | undefined;
    set connectorLines(v: BooleanValue | undefined);
    /** meanLine. Serialized as `:meanLine` */
    get meanLine(): BooleanValue | undefined;
    set meanLine(v: BooleanValue | undefined);
    /** meanMarker. Serialized as `:meanMarker` */
    get meanMarker(): BooleanValue | undefined;
    set meanMarker(v: BooleanValue | undefined);
    /** nonoutliers. Serialized as `:nonoutliers` */
    get nonoutliers(): BooleanValue | undefined;
    set nonoutliers(v: BooleanValue | undefined);
    /** outliers. Serialized as `:outliers` */
    get outliers(): BooleanValue | undefined;
    set outliers(v: BooleanValue | undefined);
}
/** Defines the RegionLabelLayout Class. Serialized as `cx:regionLabelLayout` */
export declare class RegionLabelLayout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): RegionLabelLayoutEnum | undefined;
    set val(v: RegionLabelLayoutEnum | undefined);
}
/** Defines the ParentLabelLayout Class. Serialized as `cx:parentLabelLayout` */
export declare class ParentLabelLayout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get parentLabelLayoutVal(): ParentLabelLayoutVal | undefined;
    set parentLabelLayoutVal(v: ParentLabelLayoutVal | undefined);
}
/** Defines the GeoCache Class. Serialized as `cx:geoCache` */
export declare class GeoCache extends OxmlCompositeElement<Xsdbase64Binary | Clear> {
    static _Q: string;
    static _A: string[];
    /** provider. Serialized as `:provider` */
    get provider(): StringValue | undefined;
    set provider(v: StringValue | undefined);
}
/** Defines the Clear Class. Serialized as `cx:clear` */
export declare class Clear extends OxmlCompositeElement<GeoLocationQueryResults | GeoDataEntityQueryResults | GeoDataPointToEntityQueryResults | GeoChildEntitiesQueryResults | GeoParentEntitiesQueryResults> {
    static _Q: string;
    /** Returns GeoLocationQueryResults. */
    get geoLocationQueryResults(): GeoLocationQueryResults | undefined;
    /** Returns GeoDataEntityQueryResults. */
    get geoDataEntityQueryResults(): GeoDataEntityQueryResults | undefined;
    /** Returns GeoDataPointToEntityQueryResults. */
    get geoDataPointToEntityQueryResults(): GeoDataPointToEntityQueryResults | undefined;
    /** Returns GeoChildEntitiesQueryResults. */
    get geoChildEntitiesQueryResults(): GeoChildEntitiesQueryResults | undefined;
    /** Returns GeoParentEntitiesQueryResults. */
    get geoParentEntitiesQueryResults(): GeoParentEntitiesQueryResults | undefined;
}
/** Defines the Xsdbase64Binary Class. Serialized as `cx:binary` */
export declare class Xsdbase64Binary extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the GeoParentEntitiesQueryResults Class. Serialized as `cx:geoParentEntitiesQueryResults` */
export declare class GeoParentEntitiesQueryResults extends OxmlCompositeElement<GeoParentEntitiesQueryResult> {
    static _Q: string;
}
/** Defines the GeoChildEntitiesQueryResults Class. Serialized as `cx:geoChildEntitiesQueryResults` */
export declare class GeoChildEntitiesQueryResults extends OxmlCompositeElement<GeoChildEntitiesQueryResult> {
    static _Q: string;
}
/** Defines the GeoDataPointToEntityQueryResults Class. Serialized as `cx:geoDataPointToEntityQueryResults` */
export declare class GeoDataPointToEntityQueryResults extends OxmlCompositeElement<GeoDataPointToEntityQueryResult> {
    static _Q: string;
}
/** Defines the GeoDataEntityQueryResults Class. Serialized as `cx:geoDataEntityQueryResults` */
export declare class GeoDataEntityQueryResults extends OxmlCompositeElement<GeoDataEntityQueryResult> {
    static _Q: string;
}
/** Defines the GeoLocationQueryResults Class. Serialized as `cx:geoLocationQueryResults` */
export declare class GeoLocationQueryResults extends OxmlCompositeElement<GeoLocationQueryResult> {
    static _Q: string;
}
/** Defines the GeoParentEntitiesQueryResult Class. Serialized as `cx:geoParentEntitiesQueryResult` */
export declare class GeoParentEntitiesQueryResult extends OxmlCompositeElement<GeoParentEntitiesQuery | GeoEntity | GeoParentEntity> {
    static _Q: string;
    /** Returns GeoParentEntitiesQuery. */
    get geoParentEntitiesQuery(): GeoParentEntitiesQuery | undefined;
    /** Returns GeoEntity. */
    get geoEntity(): GeoEntity | undefined;
    /** Returns GeoParentEntity. */
    get geoParentEntity(): GeoParentEntity | undefined;
}
/** Defines the GeoParentEntity Class. Serialized as `cx:geoParentEntity` */
export declare class GeoParentEntity extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
}
/** Defines the GeoEntity Class. Serialized as `cx:geoEntity` */
export declare class GeoEntity extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityName. Serialized as `:entityName` */
    get entityName(): StringValue | undefined;
    set entityName(v: StringValue | undefined);
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
}
/** Defines the GeoParentEntitiesQuery Class. Serialized as `cx:geoParentEntitiesQuery` */
export declare class GeoParentEntitiesQuery extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
}
/** Defines the GeoChildEntitiesQueryResult Class. Serialized as `cx:geoChildEntitiesQueryResult` */
export declare class GeoChildEntitiesQueryResult extends OxmlCompositeElement<GeoChildEntitiesQuery | GeoChildEntities> {
    static _Q: string;
    /** Returns GeoChildEntitiesQuery. */
    get geoChildEntitiesQuery(): GeoChildEntitiesQuery | undefined;
    /** Returns GeoChildEntities. */
    get geoChildEntities(): GeoChildEntities | undefined;
}
/** Defines the GeoChildEntities Class. Serialized as `cx:geoChildEntities` */
export declare class GeoChildEntities extends OxmlCompositeElement<GeoHierarchyEntity> {
    static _Q: string;
}
/** Defines the GeoChildEntitiesQuery Class. Serialized as `cx:geoChildEntitiesQuery` */
export declare class GeoChildEntitiesQuery extends OxmlCompositeElement<GeoChildTypes> {
    static _Q: string;
    static _A: string[];
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
    /** Returns GeoChildTypes. */
    get geoChildTypes(): GeoChildTypes | undefined;
}
/** Defines the GeoHierarchyEntity Class. Serialized as `cx:geoHierarchyEntity` */
export declare class GeoHierarchyEntity extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityName. Serialized as `:entityName` */
    get entityName(): StringValue | undefined;
    set entityName(v: StringValue | undefined);
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
}
/** Defines the GeoChildTypes Class. Serialized as `cx:geoChildTypes` */
export declare class GeoChildTypes extends OxmlCompositeElement<EntityType> {
    static _Q: string;
}
/** Defines the EntityType Class. Serialized as `cx:entityType` */
export declare class EntityType extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the GeoDataPointToEntityQueryResult Class. Serialized as `cx:geoDataPointToEntityQueryResult` */
export declare class GeoDataPointToEntityQueryResult extends OxmlCompositeElement<GeoDataPointQuery | GeoDataPointToEntityQuery> {
    static _Q: string;
    /** Returns GeoDataPointQuery. */
    get geoDataPointQuery(): GeoDataPointQuery | undefined;
    /** Returns GeoDataPointToEntityQuery. */
    get geoDataPointToEntityQuery(): GeoDataPointToEntityQuery | undefined;
}
/** Defines the GeoDataPointToEntityQuery Class. Serialized as `cx:geoDataPointToEntityQuery` */
export declare class GeoDataPointToEntityQuery extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
}
/** Defines the GeoDataPointQuery Class. Serialized as `cx:geoDataPointQuery` */
export declare class GeoDataPointQuery extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
    /** latitude. Serialized as `:latitude` */
    get latitude(): DoubleValue | undefined;
    set latitude(v: DoubleValue | undefined);
    /** longitude. Serialized as `:longitude` */
    get longitude(): DoubleValue | undefined;
    set longitude(v: DoubleValue | undefined);
}
/** Defines the GeoDataEntityQueryResult Class. Serialized as `cx:geoDataEntityQueryResult` */
export declare class GeoDataEntityQueryResult extends OxmlCompositeElement<GeoDataEntityQuery | GeoData> {
    static _Q: string;
    /** Returns GeoDataEntityQuery. */
    get geoDataEntityQuery(): GeoDataEntityQuery | undefined;
    /** Returns GeoData. */
    get geoData(): GeoData | undefined;
}
/** Defines the GeoData Class. Serialized as `cx:geoData` */
export declare class GeoData extends OxmlCompositeElement<GeoPolygons | Copyrights> {
    static _Q: string;
    static _A: string[];
    /** entityName. Serialized as `:entityName` */
    get entityName(): StringValue | undefined;
    set entityName(v: StringValue | undefined);
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
    /** east. Serialized as `:east` */
    get east(): DoubleValue | undefined;
    set east(v: DoubleValue | undefined);
    /** west. Serialized as `:west` */
    get west(): DoubleValue | undefined;
    set west(v: DoubleValue | undefined);
    /** north. Serialized as `:north` */
    get north(): DoubleValue | undefined;
    set north(v: DoubleValue | undefined);
    /** south. Serialized as `:south` */
    get south(): DoubleValue | undefined;
    set south(v: DoubleValue | undefined);
    /** Returns GeoPolygons. */
    get geoPolygons(): GeoPolygons | undefined;
    /** Returns Copyrights. */
    get copyrights(): Copyrights | undefined;
}
/** Defines the GeoDataEntityQuery Class. Serialized as `cx:geoDataEntityQuery` */
export declare class GeoDataEntityQuery extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
    /** entityId. Serialized as `:entityId` */
    get entityId(): StringValue | undefined;
    set entityId(v: StringValue | undefined);
}
/** Defines the Copyrights Class. Serialized as `cx:copyrights` */
export declare class Copyrights extends OxmlCompositeElement<CopyrightXsdstring> {
    static _Q: string;
}
/** Defines the GeoPolygons Class. Serialized as `cx:geoPolygons` */
export declare class GeoPolygons extends OxmlCompositeElement<GeoPolygon> {
    static _Q: string;
}
/** Defines the GeoPolygon Class. Serialized as `cx:geoPolygon` */
export declare class GeoPolygon extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** polygonId. Serialized as `:polygonId` */
    get polygonId(): StringValue | undefined;
    set polygonId(v: StringValue | undefined);
    /** numPoints. Serialized as `:numPoints` */
    get numPoints(): IntegerValue | undefined;
    set numPoints(v: IntegerValue | undefined);
    /** pcaRings. Serialized as `:pcaRings` */
    get pcaRings(): StringValue | undefined;
    set pcaRings(v: StringValue | undefined);
}
/** Defines the GeoLocationQueryResult Class. Serialized as `cx:geoLocationQueryResult` */
export declare class GeoLocationQueryResult extends OxmlCompositeElement<GeoLocationQuery | GeoLocations> {
    static _Q: string;
    /** Returns GeoLocationQuery. */
    get geoLocationQuery(): GeoLocationQuery | undefined;
    /** Returns GeoLocations. */
    get geoLocations(): GeoLocations | undefined;
}
/** Defines the GeoLocations Class. Serialized as `cx:geoLocations` */
export declare class GeoLocations extends OxmlCompositeElement<GeoLocation> {
    static _Q: string;
    /** Returns GeoLocation. */
    get geoLocation(): GeoLocation | undefined;
}
/** Defines the GeoLocationQuery Class. Serialized as `cx:geoLocationQuery` */
export declare class GeoLocationQuery extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** countryRegion. Serialized as `:countryRegion` */
    get countryRegion(): StringValue | undefined;
    set countryRegion(v: StringValue | undefined);
    /** adminDistrict1. Serialized as `:adminDistrict1` */
    get adminDistrict1(): StringValue | undefined;
    set adminDistrict1(v: StringValue | undefined);
    /** adminDistrict2. Serialized as `:adminDistrict2` */
    get adminDistrict2(): StringValue | undefined;
    set adminDistrict2(v: StringValue | undefined);
    /** postalCode. Serialized as `:postalCode` */
    get postalCode(): StringValue | undefined;
    set postalCode(v: StringValue | undefined);
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
}
/** Defines the GeoLocation Class. Serialized as `cx:geoLocation` */
export declare class GeoLocation extends OxmlCompositeElement<Address> {
    static _Q: string;
    static _A: string[];
    /** latitude. Serialized as `:latitude` */
    get latitude(): DoubleValue | undefined;
    set latitude(v: DoubleValue | undefined);
    /** longitude. Serialized as `:longitude` */
    get longitude(): DoubleValue | undefined;
    set longitude(v: DoubleValue | undefined);
    /** entityName. Serialized as `:entityName` */
    get entityName(): StringValue | undefined;
    set entityName(v: StringValue | undefined);
    /** entityType. Serialized as `:entityType` */
    get entityType(): EntityTypeEnum | undefined;
    set entityType(v: EntityTypeEnum | undefined);
    /** Returns Address. */
    get address(): Address | undefined;
}
/** Defines the Address Class. Serialized as `cx:address` */
export declare class Address extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** address1. Serialized as `:address1` */
    get address1(): StringValue | undefined;
    set address1(v: StringValue | undefined);
    /** countryRegion. Serialized as `:countryRegion` */
    get countryRegion(): StringValue | undefined;
    set countryRegion(v: StringValue | undefined);
    /** adminDistrict1. Serialized as `:adminDistrict1` */
    get adminDistrict1(): StringValue | undefined;
    set adminDistrict1(v: StringValue | undefined);
    /** adminDistrict2. Serialized as `:adminDistrict2` */
    get adminDistrict2(): StringValue | undefined;
    set adminDistrict2(v: StringValue | undefined);
    /** postalCode. Serialized as `:postalCode` */
    get postalCode(): StringValue | undefined;
    set postalCode(v: StringValue | undefined);
    /** locality. Serialized as `:locality` */
    get locality(): StringValue | undefined;
    set locality(v: StringValue | undefined);
    /** isoCountryCode. Serialized as `:isoCountryCode` */
    get isoCountryCode(): StringValue | undefined;
    set isoCountryCode(v: StringValue | undefined);
}
/** Defines the Xsddouble Class. Serialized as `cx:binSize` */
export declare class Xsddouble extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the NumberFormat Class. Serialized as `cx:numFmt` */
export declare class NumberFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** formatCode. Serialized as `:formatCode` */
    get formatCode(): StringValue | undefined;
    set formatCode(v: StringValue | undefined);
    /** sourceLinked. Serialized as `:sourceLinked` */
    get sourceLinked(): BooleanValue | undefined;
    set sourceLinked(v: BooleanValue | undefined);
}
/** Defines the TickLabels Class. Serialized as `cx:tickLabels` */
export declare class TickLabels extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the OpenXmlTickMarksElement Class. */
export declare abstract class OpenXmlTickMarksElement extends OxmlCompositeElement<ExtensionList> {
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): TickMarksType | undefined;
    set type(v: TickMarksType | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the MinorTickMarksTickMarks Class. Serialized as `cx:minorTickMarks` */
export declare class MinorTickMarksTickMarks extends OpenXmlTickMarksElement {
    static _Q: string;
}
/** Defines the MajorTickMarksTickMarks Class. Serialized as `cx:majorTickMarks` */
export declare class MajorTickMarksTickMarks extends OpenXmlTickMarksElement {
    static _Q: string;
}
/** Defines the OpenXmlGridlinesElement Class. */
export declare abstract class OpenXmlGridlinesElement extends OxmlCompositeElement<ShapeProperties | ExtensionList> {
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the MinorGridlinesGridlines Class. Serialized as `cx:minorGridlines` */
export declare class MinorGridlinesGridlines extends OpenXmlGridlinesElement {
    static _Q: string;
}
/** Defines the MajorGridlinesGridlines Class. Serialized as `cx:majorGridlines` */
export declare class MajorGridlinesGridlines extends OpenXmlGridlinesElement {
    static _Q: string;
}
/** Defines the AxisUnits Class. Serialized as `cx:units` */
export declare class AxisUnits extends OxmlCompositeElement<AxisUnitsLabel | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** unit. Serialized as `:unit` */
    get unit(): AxisUnit | undefined;
    set unit(v: AxisUnit | undefined);
    /** Returns AxisUnitsLabel. */
    get axisUnitsLabel(): AxisUnitsLabel | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the AxisTitle Class. Serialized as `cx:title` */
export declare class AxisTitle extends OxmlCompositeElement<Text | ShapeProperties | TxPrTextBody | ExtensionList> {
    static _Q: string;
    /** Returns Text. */
    get text(): Text | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ValueAxisScaling Class. Serialized as `cx:valScaling` */
export declare class ValueAxisScaling extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** max. Serialized as `:max` */
    get max(): StringValue | undefined;
    set max(v: StringValue | undefined);
    /** min. Serialized as `:min` */
    get min(): StringValue | undefined;
    set min(v: StringValue | undefined);
    /** majorUnit. Serialized as `:majorUnit` */
    get majorUnit(): StringValue | undefined;
    set majorUnit(v: StringValue | undefined);
    /** minorUnit. Serialized as `:minorUnit` */
    get minorUnit(): StringValue | undefined;
    set minorUnit(v: StringValue | undefined);
}
/** Defines the CategoryAxisScaling Class. Serialized as `cx:catScaling` */
export declare class CategoryAxisScaling extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** gapWidth. Serialized as `:gapWidth` */
    get gapWidth(): StringValue | undefined;
    set gapWidth(v: StringValue | undefined);
}
/** Defines the AxisUnitsLabel Class. Serialized as `cx:unitsLabel` */
export declare class AxisUnitsLabel extends OxmlCompositeElement<Text | ShapeProperties | TxPrTextBody | ExtensionList> {
    static _Q: string;
    /** Returns Text. */
    get text(): Text | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `cx:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the Text Class. Serialized as `cx:tx` */
export declare class Text extends OxmlCompositeElement<TextData | RichTextBody> {
    static _Q: string;
    /** Returns TextData. */
    get textData(): TextData | undefined;
    /** Returns RichTextBody. */
    get richTextBody(): RichTextBody | undefined;
}
/** Defines the TextBodyType Class. */
export declare abstract class TextBodyType extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Defines the TxPrTextBody Class. Serialized as `cx:txPr` */
export declare class TxPrTextBody extends TextBodyType {
    static _Q: string;
}
/** Defines the RichTextBody Class. Serialized as `cx:rich` */
export declare class RichTextBody extends TextBodyType {
    static _Q: string;
}
/** Defines the TextData Class. Serialized as `cx:txData` */
export declare class TextData extends OxmlCompositeElement<Formula | VXsdstring> {
    static _Q: string;
}
/** Defines the FirstFooterXsdstring Class. Serialized as `cx:firstFooter` */
export declare class FirstFooterXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the FirstHeaderXsdstring Class. Serialized as `cx:firstHeader` */
export declare class FirstHeaderXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EvenFooterXsdstring Class. Serialized as `cx:evenFooter` */
export declare class EvenFooterXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the EvenHeaderXsdstring Class. Serialized as `cx:evenHeader` */
export declare class EvenHeaderXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the OddFooterXsdstring Class. Serialized as `cx:oddFooter` */
export declare class OddFooterXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the OddHeaderXsdstring Class. Serialized as `cx:oddHeader` */
export declare class OddHeaderXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the SeparatorXsdstring Class. Serialized as `cx:separator` */
export declare class SeparatorXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the CopyrightXsdstring Class. Serialized as `cx:copyright` */
export declare class CopyrightXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the VXsdstring Class. Serialized as `cx:v` */
export declare class VXsdstring extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Data Class. Serialized as `cx:data` */
export declare class Data extends OxmlCompositeElement<NumericDimension | StringDimension | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
}
/** Defines the ExternalData Class. Serialized as `cx:externalData` */
export declare class ExternalData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** RelId of the relationship for the external data. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** True if the external link should automatically update. Serialized as `cx:autoUpdate` */
    get autoUpdate(): BooleanValue | undefined;
    set autoUpdate(v: BooleanValue | undefined);
}
/** Defines the ExtensionList Class. Serialized as `cx:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<Extension2> {
    static _Q: string;
}
/** Defines the StringDimension Class. Serialized as `cx:strDim` */
export declare class StringDimension extends OxmlCompositeElement<Formula | NfFormula | StringLevel> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): StringDimensionType | undefined;
    set type(v: StringDimensionType | undefined);
}
/** Defines the NumericDimension Class. Serialized as `cx:numDim` */
export declare class NumericDimension extends OxmlCompositeElement<Formula | NfFormula | NumericLevel> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): NumericDimensionType | undefined;
    set type(v: NumericDimensionType | undefined);
}
/** Defines the NumericLevel Class. Serialized as `cx:lvl` */
export declare class NumericLevel extends OxmlCompositeElement<NumericValue> {
    static _Q: string;
    static _A: string[];
    /** ptCount. Serialized as `:ptCount` */
    get ptCount(): UInt32Value | undefined;
    set ptCount(v: UInt32Value | undefined);
    /** formatCode. Serialized as `:formatCode` */
    get formatCode(): StringValue | undefined;
    set formatCode(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the NumericValue Class. Serialized as `cx:pt` */
export declare class NumericValue extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get idx(): UInt32Value | undefined;
    set idx(v: UInt32Value | undefined);
}
/** Defines the StringLevel Class. Serialized as `cx:lvl` */
export declare class StringLevel extends OxmlCompositeElement<ChartStringValue> {
    static _Q: string;
    static _A: string[];
    /** ptCount. Serialized as `:ptCount` */
    get ptCount(): UInt32Value | undefined;
    set ptCount(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Defines the OpenXmlFormulaElement Class. */
export declare abstract class OpenXmlFormulaElement extends OxmlLeafTextElement {
    static _A: string[];
    /** dir. Serialized as `:dir` */
    get dir(): FormulaDirection | undefined;
    set dir(v: FormulaDirection | undefined);
}
/** Defines the NfFormula Class. Serialized as `cx:nf` */
export declare class NfFormula extends OpenXmlFormulaElement {
    static _Q: string;
}
/** Defines the Formula Class. Serialized as `cx:f` */
export declare class Formula extends OpenXmlFormulaElement {
    static _Q: string;
}
/** Defines the ChartStringValue Class. Serialized as `cx:pt` */
export declare class ChartStringValue extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
}
/** Defines the OpenXmlSolidColorFillPropertiesElement Class. */
export declare abstract class OpenXmlSolidColorFillPropertiesElement extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Defines the MaxColorSolidColorFillProperties Class. Serialized as `cx:maxColor` */
export declare class MaxColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {
    static _Q: string;
}
/** Defines the MidColorSolidColorFillProperties Class. Serialized as `cx:midColor` */
export declare class MidColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {
    static _Q: string;
}
/** Defines the MinColorSolidColorFillProperties Class. Serialized as `cx:minColor` */
export declare class MinColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {
    static _Q: string;
}
/** Defines the Extension2 Class. Serialized as `cx:ext` */
export declare class Extension2 extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** uri. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Defines the BinCountXsdunsignedInt Class. Serialized as `cx:binCount` */
export declare class BinCountXsdunsignedInt extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3XsdunsignedInt Class. Serialized as `cx:openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3` */
export declare class Openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3XsdunsignedInt extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the RelId Class. Serialized as `cx:chart` */
export declare class RelId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the ChartSpace Class. Serialized as `cx:chartSpace` */
export declare class ChartSpace extends OxmlPartRootElement<ChartData | Chart | ShapeProperties | TxPrTextBody | ColorMappingType | FormatOverrides | PrintSettings | ExtensionList> {
    static _Q: string;
    /** Returns ChartData. */
    get chartData(): ChartData | undefined;
    /** Returns Chart. */
    get chart(): Chart | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TxPrTextBody. */
    get txPrTextBody(): TxPrTextBody | undefined;
    /** Returns ColorMappingType. */
    get colorMappingType(): ColorMappingType | undefined;
    /** Returns FormatOverrides. */
    get formatOverrides(): FormatOverrides | undefined;
    /** Returns PrintSettings. */
    get printSettings(): PrintSettings | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
export declare function initOffice2016DrawingChartDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
