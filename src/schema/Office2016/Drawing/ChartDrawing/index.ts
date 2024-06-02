import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { DoubleValue } from '../../../../framework/types/DoubleValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { IntegerValue } from '../../../../framework/types/IntegerValue';
import { ColorSchemeIndexValues, ColorSchemeIndexValuesArray } from '../../../Drawing';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { ExtensionList as AExtensionList } from '../../../Drawing';
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


export enum FormulaDirection {
    /** undefined. Serialized value: `col` */
    Col = 'col',
    /** undefined. Serialized value: `row` */
    Row = 'row',
}

export const FormulaDirectionArray = [
    FormulaDirection.Col,
    FormulaDirection.Row,
] as const;

export enum StringDimensionType {
    /** undefined. Serialized value: `cat` */
    Cat = 'cat',
    /** undefined. Serialized value: `colorStr` */
    ColorStr = 'colorStr',
    /** undefined. Serialized value: `entityId` */
    EntityId = 'entityId',
}

export const StringDimensionTypeArray = [
    StringDimensionType.Cat,
    StringDimensionType.ColorStr,
    StringDimensionType.EntityId,
] as const;

export enum NumericDimensionType {
    /** undefined. Serialized value: `val` */
    Val = 'val',
    /** undefined. Serialized value: `x` */
    X = 'x',
    /** undefined. Serialized value: `y` */
    Y = 'y',
    /** undefined. Serialized value: `size` */
    Size = 'size',
    /** undefined. Serialized value: `colorVal` */
    ColorVal = 'colorVal',
}

export const NumericDimensionTypeArray = [
    NumericDimensionType.Val,
    NumericDimensionType.X,
    NumericDimensionType.Y,
    NumericDimensionType.Size,
    NumericDimensionType.ColorVal,
] as const;

export enum SidePos {
    /** undefined. Serialized value: `l` */
    L = 'l',
    /** undefined. Serialized value: `t` */
    T = 't',
    /** undefined. Serialized value: `r` */
    R = 'r',
    /** undefined. Serialized value: `b` */
    B = 'b',
}

export const SidePosArray = [
    SidePos.L,
    SidePos.T,
    SidePos.R,
    SidePos.B,
] as const;

export enum PosAlign {
    /** undefined. Serialized value: `min` */
    Min = 'min',
    /** undefined. Serialized value: `ctr` */
    Ctr = 'ctr',
    /** undefined. Serialized value: `max` */
    Max = 'max',
}

export const PosAlignArray = [
    PosAlign.Min,
    PosAlign.Ctr,
    PosAlign.Max,
] as const;

export enum AxisUnit {
    /** undefined. Serialized value: `hundreds` */
    Hundreds = 'hundreds',
    /** undefined. Serialized value: `thousands` */
    Thousands = 'thousands',
    /** undefined. Serialized value: `tenThousands` */
    TenThousands = 'tenThousands',
    /** undefined. Serialized value: `hundredThousands` */
    HundredThousands = 'hundredThousands',
    /** undefined. Serialized value: `millions` */
    Millions = 'millions',
    /** undefined. Serialized value: `tenMillions` */
    TenMillions = 'tenMillions',
    /** undefined. Serialized value: `hundredMillions` */
    HundredMillions = 'hundredMillions',
    /** undefined. Serialized value: `billions` */
    Billions = 'billions',
    /** undefined. Serialized value: `trillions` */
    Trillions = 'trillions',
    /** undefined. Serialized value: `percentage` */
    Percentage = 'percentage',
}

export const AxisUnitArray = [
    AxisUnit.Hundreds,
    AxisUnit.Thousands,
    AxisUnit.TenThousands,
    AxisUnit.HundredThousands,
    AxisUnit.Millions,
    AxisUnit.TenMillions,
    AxisUnit.HundredMillions,
    AxisUnit.Billions,
    AxisUnit.Trillions,
    AxisUnit.Percentage,
] as const;

export enum TickMarksType {
    /** undefined. Serialized value: `in` */
    In = 'in',
    /** undefined. Serialized value: `out` */
    Out = 'out',
    /** undefined. Serialized value: `cross` */
    Cross = 'cross',
    /** undefined. Serialized value: `none` */
    None = 'none',
}

export const TickMarksTypeArray = [
    TickMarksType.In,
    TickMarksType.Out,
    TickMarksType.Cross,
    TickMarksType.None,
] as const;

export enum SeriesLayout {
    /** undefined. Serialized value: `boxWhisker` */
    BoxWhisker = 'boxWhisker',
    /** undefined. Serialized value: `clusteredColumn` */
    ClusteredColumn = 'clusteredColumn',
    /** undefined. Serialized value: `funnel` */
    Funnel = 'funnel',
    /** undefined. Serialized value: `paretoLine` */
    ParetoLine = 'paretoLine',
    /** undefined. Serialized value: `regionMap` */
    RegionMap = 'regionMap',
    /** undefined. Serialized value: `sunburst` */
    Sunburst = 'sunburst',
    /** undefined. Serialized value: `treemap` */
    Treemap = 'treemap',
    /** undefined. Serialized value: `waterfall` */
    Waterfall = 'waterfall',
}

export const SeriesLayoutArray = [
    SeriesLayout.BoxWhisker,
    SeriesLayout.ClusteredColumn,
    SeriesLayout.Funnel,
    SeriesLayout.ParetoLine,
    SeriesLayout.RegionMap,
    SeriesLayout.Sunburst,
    SeriesLayout.Treemap,
    SeriesLayout.Waterfall,
] as const;

export enum ParentLabelLayoutVal {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `banner` */
    Banner = 'banner',
    /** undefined. Serialized value: `overlapping` */
    Overlapping = 'overlapping',
}

export const ParentLabelLayoutValArray = [
    ParentLabelLayoutVal.None,
    ParentLabelLayoutVal.Banner,
    ParentLabelLayoutVal.Overlapping,
] as const;

export enum RegionLabelLayoutEnum {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `bestFitOnly` */
    BestFitOnly = 'bestFitOnly',
    /** undefined. Serialized value: `showAll` */
    ShowAll = 'showAll',
}

export const RegionLabelLayoutEnumArray = [
    RegionLabelLayoutEnum.None,
    RegionLabelLayoutEnum.BestFitOnly,
    RegionLabelLayoutEnum.ShowAll,
] as const;

export enum IntervalClosedSide {
    /** undefined. Serialized value: `l` */
    L = 'l',
    /** undefined. Serialized value: `r` */
    R = 'r',
}

export const IntervalClosedSideArray = [
    IntervalClosedSide.L,
    IntervalClosedSide.R,
] as const;

export enum EntityTypeEnum {
    /** undefined. Serialized value: `Address` */
    Address = 'Address',
    /** undefined. Serialized value: `AdminDistrict` */
    AdminDistrict = 'AdminDistrict',
    /** undefined. Serialized value: `AdminDistrict2` */
    AdminDistrict2 = 'AdminDistrict2',
    /** undefined. Serialized value: `AdminDistrict3` */
    AdminDistrict3 = 'AdminDistrict3',
    /** undefined. Serialized value: `Continent` */
    Continent = 'Continent',
    /** undefined. Serialized value: `CountryRegion` */
    CountryRegion = 'CountryRegion',
    /** undefined. Serialized value: `Locality` */
    Locality = 'Locality',
    /** undefined. Serialized value: `Ocean` */
    Ocean = 'Ocean',
    /** undefined. Serialized value: `Planet` */
    Planet = 'Planet',
    /** undefined. Serialized value: `PostalCode` */
    PostalCode = 'PostalCode',
    /** undefined. Serialized value: `Region` */
    Region = 'Region',
    /** undefined. Serialized value: `Unsupported` */
    Unsupported = 'Unsupported',
}

export const EntityTypeEnumArray = [
    EntityTypeEnum.Address,
    EntityTypeEnum.AdminDistrict,
    EntityTypeEnum.AdminDistrict2,
    EntityTypeEnum.AdminDistrict3,
    EntityTypeEnum.Continent,
    EntityTypeEnum.CountryRegion,
    EntityTypeEnum.Locality,
    EntityTypeEnum.Ocean,
    EntityTypeEnum.Planet,
    EntityTypeEnum.PostalCode,
    EntityTypeEnum.Region,
    EntityTypeEnum.Unsupported,
] as const;

export enum GeoProjectionType {
    /** undefined. Serialized value: `mercator` */
    Mercator = 'mercator',
    /** undefined. Serialized value: `miller` */
    Miller = 'miller',
    /** undefined. Serialized value: `robinson` */
    Robinson = 'robinson',
    /** undefined. Serialized value: `albers` */
    Albers = 'albers',
}

export const GeoProjectionTypeArray = [
    GeoProjectionType.Mercator,
    GeoProjectionType.Miller,
    GeoProjectionType.Robinson,
    GeoProjectionType.Albers,
] as const;

export enum GeoMappingLevel {
    /** undefined. Serialized value: `dataOnly` */
    DataOnly = 'dataOnly',
    /** undefined. Serialized value: `postalCode` */
    PostalCode = 'postalCode',
    /** undefined. Serialized value: `county` */
    County = 'county',
    /** undefined. Serialized value: `state` */
    State = 'state',
    /** undefined. Serialized value: `countryRegion` */
    CountryRegion = 'countryRegion',
    /** undefined. Serialized value: `countryRegionList` */
    CountryRegionList = 'countryRegionList',
    /** undefined. Serialized value: `world` */
    World = 'world',
}

export const GeoMappingLevelArray = [
    GeoMappingLevel.DataOnly,
    GeoMappingLevel.PostalCode,
    GeoMappingLevel.County,
    GeoMappingLevel.State,
    GeoMappingLevel.CountryRegion,
    GeoMappingLevel.CountryRegionList,
    GeoMappingLevel.World,
] as const;

export enum QuartileMethod {
    /** undefined. Serialized value: `inclusive` */
    Inclusive = 'inclusive',
    /** undefined. Serialized value: `exclusive` */
    Exclusive = 'exclusive',
}

export const QuartileMethodArray = [
    QuartileMethod.Inclusive,
    QuartileMethod.Exclusive,
] as const;

export enum DataLabelPos {
    /** undefined. Serialized value: `bestFit` */
    BestFit = 'bestFit',
    /** undefined. Serialized value: `b` */
    B = 'b',
    /** undefined. Serialized value: `ctr` */
    Ctr = 'ctr',
    /** undefined. Serialized value: `inBase` */
    InBase = 'inBase',
    /** undefined. Serialized value: `inEnd` */
    InEnd = 'inEnd',
    /** undefined. Serialized value: `l` */
    L = 'l',
    /** undefined. Serialized value: `outEnd` */
    OutEnd = 'outEnd',
    /** undefined. Serialized value: `r` */
    R = 'r',
    /** undefined. Serialized value: `t` */
    T = 't',
}

export const DataLabelPosArray = [
    DataLabelPos.BestFit,
    DataLabelPos.B,
    DataLabelPos.Ctr,
    DataLabelPos.InBase,
    DataLabelPos.InEnd,
    DataLabelPos.L,
    DataLabelPos.OutEnd,
    DataLabelPos.R,
    DataLabelPos.T,
] as const;

export enum PageOrientation {
    /** undefined. Serialized value: `default` */
    Default = 'default',
    /** undefined. Serialized value: `portrait` */
    Portrait = 'portrait',
    /** undefined. Serialized value: `landscape` */
    Landscape = 'landscape',
}

export const PageOrientationArray = [
    PageOrientation.Default,
    PageOrientation.Portrait,
    PageOrientation.Landscape,
] as const;

/** Index of subtotal data point. Serialized as `cx:idx` */
export class UnsignedIntegerType extends OxmlLeafElement {

    public static override _Q = 'cx:idx';
    public static override _A = [':val',];
    /** Integer Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the PrintSettings Class. Serialized as `cx:printSettings` */
export class PrintSettings extends OxmlCompositeElement<HeaderFooter | PageMargins | PageSetup> {

    public static override _Q = 'cx:printSettings';
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Returns PageMargins. */
    public get pageMargins(): PageMargins | undefined { return this._f(PageMargins); }
    /** Returns PageSetup. */
    public get pageSetup(): PageSetup | undefined { return this._f(PageSetup); }

}
/** Defines the FormatOverrides Class. Serialized as `cx:fmtOvrs` */
export class FormatOverrides extends OxmlCompositeElement<FormatOverride> {

    public static override _Q = 'cx:fmtOvrs';

}
/** Defines the ColorMappingType Class. Serialized as `cx:clrMapOvr` */
export class ColorMappingType extends OxmlCompositeElement<AExtensionList> {

    public static override _Q = 'cx:clrMapOvr';
    public static override _A = [':bg1',':tx1',':bg2',':tx2',':accent1',':accent2',':accent3',':accent4',':accent5',':accent6',':hlink',':folHlink',];
    /** Background 1. Serialized as `:bg1` */
    public get background1(): ColorSchemeIndexValues | undefined { return this._g(':bg1'); }
    public set background1(v: ColorSchemeIndexValues | undefined) { this._s(':bg1', v); }
    /** Text 1. Serialized as `:tx1` */
    public get text1(): ColorSchemeIndexValues | undefined { return this._g(':tx1'); }
    public set text1(v: ColorSchemeIndexValues | undefined) { this._s(':tx1', v); }
    /** Background 2. Serialized as `:bg2` */
    public get background2(): ColorSchemeIndexValues | undefined { return this._g(':bg2'); }
    public set background2(v: ColorSchemeIndexValues | undefined) { this._s(':bg2', v); }
    /** Text 2. Serialized as `:tx2` */
    public get text2(): ColorSchemeIndexValues | undefined { return this._g(':tx2'); }
    public set text2(v: ColorSchemeIndexValues | undefined) { this._s(':tx2', v); }
    /** Accent 1. Serialized as `:accent1` */
    public get accent1(): ColorSchemeIndexValues | undefined { return this._g(':accent1'); }
    public set accent1(v: ColorSchemeIndexValues | undefined) { this._s(':accent1', v); }
    /** Accent 2. Serialized as `:accent2` */
    public get accent2(): ColorSchemeIndexValues | undefined { return this._g(':accent2'); }
    public set accent2(v: ColorSchemeIndexValues | undefined) { this._s(':accent2', v); }
    /** Accent 3. Serialized as `:accent3` */
    public get accent3(): ColorSchemeIndexValues | undefined { return this._g(':accent3'); }
    public set accent3(v: ColorSchemeIndexValues | undefined) { this._s(':accent3', v); }
    /** Accent 4. Serialized as `:accent4` */
    public get accent4(): ColorSchemeIndexValues | undefined { return this._g(':accent4'); }
    public set accent4(v: ColorSchemeIndexValues | undefined) { this._s(':accent4', v); }
    /** Accent 5. Serialized as `:accent5` */
    public get accent5(): ColorSchemeIndexValues | undefined { return this._g(':accent5'); }
    public set accent5(v: ColorSchemeIndexValues | undefined) { this._s(':accent5', v); }
    /** Accent 6. Serialized as `:accent6` */
    public get accent6(): ColorSchemeIndexValues | undefined { return this._g(':accent6'); }
    public set accent6(v: ColorSchemeIndexValues | undefined) { this._s(':accent6', v); }
    /** Hyperlink. Serialized as `:hlink` */
    public get hyperlink(): ColorSchemeIndexValues | undefined { return this._g(':hlink'); }
    public set hyperlink(v: ColorSchemeIndexValues | undefined) { this._s(':hlink', v); }
    /** Followed Hyperlink. Serialized as `:folHlink` */
    public get followedHyperlink(): ColorSchemeIndexValues | undefined { return this._g(':folHlink'); }
    public set followedHyperlink(v: ColorSchemeIndexValues | undefined) { this._s(':folHlink', v); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the Chart Class. Serialized as `cx:chart` */
export class Chart extends OxmlCompositeElement<ChartTitle | PlotArea | Legend | ExtensionList> {

    public static override _Q = 'cx:chart';
    /** Returns ChartTitle. */
    public get chartTitle(): ChartTitle | undefined { return this._f(ChartTitle); }
    /** Returns PlotArea. */
    public get plotArea(): PlotArea | undefined { return this._f(PlotArea); }
    /** Returns Legend. */
    public get legend(): Legend | undefined { return this._f(Legend); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ChartData Class. Serialized as `cx:chartData` */
export class ChartData extends OxmlCompositeElement<ExternalData | Data | ExtensionList> {

    public static override _Q = 'cx:chartData';
    /** Returns ExternalData. */
    public get externalData(): ExternalData | undefined { return this._f(ExternalData); }

}
/** Defines the PageSetup Class. Serialized as `cx:pageSetup` */
export class PageSetup extends OxmlLeafElement {

    public static override _Q = 'cx:pageSetup';
    public static override _A = [':paperSize',':firstPageNumber',':orientation',':blackAndWhite',':draft',':useFirstPageNumber',':horizontalDpi',':verticalDpi',':copies',];
    /** paperSize. Serialized as `:paperSize` */
    public get paperSize(): UInt32Value | undefined { return this._g(':paperSize'); }
    public set paperSize(v: UInt32Value | undefined) { this._s(':paperSize', v); }
    /** firstPageNumber. Serialized as `:firstPageNumber` */
    public get firstPageNumber(): UInt32Value | undefined { return this._g(':firstPageNumber'); }
    public set firstPageNumber(v: UInt32Value | undefined) { this._s(':firstPageNumber', v); }
    /** orientation. Serialized as `:orientation` */
    public get orientation(): PageOrientation | undefined { return this._g(':orientation'); }
    public set orientation(v: PageOrientation | undefined) { this._s(':orientation', v); }
    /** blackAndWhite. Serialized as `:blackAndWhite` */
    public get blackAndWhite(): BooleanValue | undefined { return this._g(':blackAndWhite'); }
    public set blackAndWhite(v: BooleanValue | undefined) { this._s(':blackAndWhite', v); }
    /** draft. Serialized as `:draft` */
    public get draft(): BooleanValue | undefined { return this._g(':draft'); }
    public set draft(v: BooleanValue | undefined) { this._s(':draft', v); }
    /** useFirstPageNumber. Serialized as `:useFirstPageNumber` */
    public get useFirstPageNumber(): BooleanValue | undefined { return this._g(':useFirstPageNumber'); }
    public set useFirstPageNumber(v: BooleanValue | undefined) { this._s(':useFirstPageNumber', v); }
    /** horizontalDpi. Serialized as `:horizontalDpi` */
    public get horizontalDpi(): Int32Value | undefined { return this._g(':horizontalDpi'); }
    public set horizontalDpi(v: Int32Value | undefined) { this._s(':horizontalDpi', v); }
    /** verticalDpi. Serialized as `:verticalDpi` */
    public get verticalDpi(): Int32Value | undefined { return this._g(':verticalDpi'); }
    public set verticalDpi(v: Int32Value | undefined) { this._s(':verticalDpi', v); }
    /** copies. Serialized as `:copies` */
    public get copies(): UInt32Value | undefined { return this._g(':copies'); }
    public set copies(v: UInt32Value | undefined) { this._s(':copies', v); }

}
/** Defines the PageMargins Class. Serialized as `cx:pageMargins` */
export class PageMargins extends OxmlLeafElement {

    public static override _Q = 'cx:pageMargins';
    public static override _A = [':l',':r',':t',':b',':header',':footer',];
    /** l. Serialized as `:l` */
    public get l(): DoubleValue | undefined { return this._g(':l'); }
    public set l(v: DoubleValue | undefined) { this._s(':l', v); }
    /** r. Serialized as `:r` */
    public get r(): DoubleValue | undefined { return this._g(':r'); }
    public set r(v: DoubleValue | undefined) { this._s(':r', v); }
    /** t. Serialized as `:t` */
    public get t(): DoubleValue | undefined { return this._g(':t'); }
    public set t(v: DoubleValue | undefined) { this._s(':t', v); }
    /** b. Serialized as `:b` */
    public get b(): DoubleValue | undefined { return this._g(':b'); }
    public set b(v: DoubleValue | undefined) { this._s(':b', v); }
    /** header. Serialized as `:header` */
    public get header(): DoubleValue | undefined { return this._g(':header'); }
    public set header(v: DoubleValue | undefined) { this._s(':header', v); }
    /** footer. Serialized as `:footer` */
    public get footer(): DoubleValue | undefined { return this._g(':footer'); }
    public set footer(v: DoubleValue | undefined) { this._s(':footer', v); }

}
/** Defines the HeaderFooter Class. Serialized as `cx:headerFooter` */
export class HeaderFooter extends OxmlCompositeElement<OddHeaderXsdstring | OddFooterXsdstring | EvenHeaderXsdstring | EvenFooterXsdstring | FirstHeaderXsdstring | FirstFooterXsdstring> {

    public static override _Q = 'cx:headerFooter';
    public static override _A = [':alignWithMargins',':differentOddEven',':differentFirst',];
    /** alignWithMargins. Serialized as `:alignWithMargins` */
    public get alignWithMargins(): BooleanValue | undefined { return this._g(':alignWithMargins'); }
    public set alignWithMargins(v: BooleanValue | undefined) { this._s(':alignWithMargins', v); }
    /** differentOddEven. Serialized as `:differentOddEven` */
    public get differentOddEven(): BooleanValue | undefined { return this._g(':differentOddEven'); }
    public set differentOddEven(v: BooleanValue | undefined) { this._s(':differentOddEven', v); }
    /** differentFirst. Serialized as `:differentFirst` */
    public get differentFirst(): BooleanValue | undefined { return this._g(':differentFirst'); }
    public set differentFirst(v: BooleanValue | undefined) { this._s(':differentFirst', v); }
    /** Returns OddHeaderXsdstring. */
    public get oddHeaderXsdstring(): OddHeaderXsdstring | undefined { return this._f(OddHeaderXsdstring); }
    /** Returns OddFooterXsdstring. */
    public get oddFooterXsdstring(): OddFooterXsdstring | undefined { return this._f(OddFooterXsdstring); }
    /** Returns EvenHeaderXsdstring. */
    public get evenHeaderXsdstring(): EvenHeaderXsdstring | undefined { return this._f(EvenHeaderXsdstring); }
    /** Returns EvenFooterXsdstring. */
    public get evenFooterXsdstring(): EvenFooterXsdstring | undefined { return this._f(EvenFooterXsdstring); }
    /** Returns FirstHeaderXsdstring. */
    public get firstHeaderXsdstring(): FirstHeaderXsdstring | undefined { return this._f(FirstHeaderXsdstring); }
    /** Returns FirstFooterXsdstring. */
    public get firstFooterXsdstring(): FirstFooterXsdstring | undefined { return this._f(FirstFooterXsdstring); }

}
/** Defines the FormatOverride Class. Serialized as `cx:fmtOvr` */
export class FormatOverride extends OxmlCompositeElement<ShapeProperties | ExtensionList> {

    public static override _Q = 'cx:fmtOvr';
    public static override _A = [':idx',];
    /** idx. Serialized as `:idx` */
    public get idx(): UInt32Value | undefined { return this._g(':idx'); }
    public set idx(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Legend Class. Serialized as `cx:legend` */
export class Legend extends OxmlCompositeElement<ShapeProperties | TxPrTextBody | ExtensionList> {

    public static override _Q = 'cx:legend';
    public static override _A = [':pos',':align',':overlay',];
    /** pos. Serialized as `:pos` */
    public get pos(): SidePos | undefined { return this._g(':pos'); }
    public set pos(v: SidePos | undefined) { this._s(':pos', v); }
    /** align. Serialized as `:align` */
    public get align(): PosAlign | undefined { return this._g(':align'); }
    public set align(v: PosAlign | undefined) { this._s(':align', v); }
    /** overlay. Serialized as `:overlay` */
    public get overlay(): BooleanValue | undefined { return this._g(':overlay'); }
    public set overlay(v: BooleanValue | undefined) { this._s(':overlay', v); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the PlotArea Class. Serialized as `cx:plotArea` */
export class PlotArea extends OxmlCompositeElement<PlotAreaRegion | Axis | ShapeProperties | ExtensionList> {

    public static override _Q = 'cx:plotArea';
    /** Returns PlotAreaRegion. */
    public get plotAreaRegion(): PlotAreaRegion | undefined { return this._f(PlotAreaRegion); }

}
/** Defines the ChartTitle Class. Serialized as `cx:title` */
export class ChartTitle extends OxmlCompositeElement<Text | ShapeProperties | TxPrTextBody | ExtensionList> {

    public static override _Q = 'cx:title';
    public static override _A = [':pos',':align',':overlay',];
    /** pos. Serialized as `:pos` */
    public get pos(): SidePos | undefined { return this._g(':pos'); }
    public set pos(v: SidePos | undefined) { this._s(':pos', v); }
    /** align. Serialized as `:align` */
    public get align(): PosAlign | undefined { return this._g(':align'); }
    public set align(v: PosAlign | undefined) { this._s(':align', v); }
    /** overlay. Serialized as `:overlay` */
    public get overlay(): BooleanValue | undefined { return this._g(':overlay'); }
    public set overlay(v: BooleanValue | undefined) { this._s(':overlay', v); }
    /** Returns Text. */
    public get text(): Text | undefined { return this._f(Text); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Axis Class. Serialized as `cx:axis` */
export class Axis extends OxmlCompositeElement<CategoryAxisScaling | ValueAxisScaling | AxisTitle | AxisUnits | MajorGridlinesGridlines | MinorGridlinesGridlines | MajorTickMarksTickMarks | MinorTickMarksTickMarks | TickLabels | NumberFormat | ShapeProperties | TxPrTextBody | ExtensionList> {

    public static override _Q = 'cx:axis';
    public static override _A = [':id',':hidden',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }

}
/** Defines the PlotAreaRegion Class. Serialized as `cx:plotAreaRegion` */
export class PlotAreaRegion extends OxmlCompositeElement<PlotSurface | Series | ExtensionList> {

    public static override _Q = 'cx:plotAreaRegion';
    /** Returns PlotSurface. */
    public get plotSurface(): PlotSurface | undefined { return this._f(PlotSurface); }

}
/** Defines the Series Class. Serialized as `cx:series` */
export class Series extends OxmlCompositeElement<Text | ShapeProperties | ValueColors | ValueColorPositions | DataPoint | DataLabels | DataId | SeriesLayoutProperties | AxisId | ExtensionList> {

    public static override _Q = 'cx:series';
    public static override _A = [':layoutId',':hidden',':ownerIdx',':uniqueId',':formatIdx',];
    /** layoutId. Serialized as `:layoutId` */
    public get layoutId(): SeriesLayout | undefined { return this._g(':layoutId'); }
    public set layoutId(v: SeriesLayout | undefined) { this._s(':layoutId', v); }
    /** hidden. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** ownerIdx. Serialized as `:ownerIdx` */
    public get ownerIdx(): UInt32Value | undefined { return this._g(':ownerIdx'); }
    public set ownerIdx(v: UInt32Value | undefined) { this._s(':ownerIdx', v); }
    /** uniqueId. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** formatIdx. Serialized as `:formatIdx` */
    public get formatIdx(): UInt32Value | undefined { return this._g(':formatIdx'); }
    public set formatIdx(v: UInt32Value | undefined) { this._s(':formatIdx', v); }
    /** Returns Text. */
    public get text(): Text | undefined { return this._f(Text); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ValueColors. */
    public get valueColors(): ValueColors | undefined { return this._f(ValueColors); }
    /** Returns ValueColorPositions. */
    public get valueColorPositions(): ValueColorPositions | undefined { return this._f(ValueColorPositions); }

}
/** Defines the PlotSurface Class. Serialized as `cx:plotSurface` */
export class PlotSurface extends OxmlCompositeElement<ShapeProperties | ExtensionList> {

    public static override _Q = 'cx:plotSurface';
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the AxisId Class. Serialized as `cx:axisId` */
export class AxisId extends OxmlLeafTextElement {

    public static override _Q = 'cx:axisId';

}
/** Defines the SeriesLayoutProperties Class. Serialized as `cx:layoutPr` */
export class SeriesLayoutProperties extends OxmlCompositeElement<ParentLabelLayout | RegionLabelLayout | SeriesElementVisibilities | Aggregation | Binning | Geography | Statistics | Subtotals | ExtensionList> {

    public static override _Q = 'cx:layoutPr';
    /** Returns ParentLabelLayout. */
    public get parentLabelLayout(): ParentLabelLayout | undefined { return this._f(ParentLabelLayout); }
    /** Returns RegionLabelLayout. */
    public get regionLabelLayout(): RegionLabelLayout | undefined { return this._f(RegionLabelLayout); }
    /** Returns SeriesElementVisibilities. */
    public get seriesElementVisibilities(): SeriesElementVisibilities | undefined { return this._f(SeriesElementVisibilities); }

}
/** Defines the DataId Class. Serialized as `cx:dataId` */
export class DataId extends OxmlLeafElement {

    public static override _Q = 'cx:dataId';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the DataLabels Class. Serialized as `cx:dataLabels` */
export class DataLabels extends OxmlCompositeElement<NumberFormat | ShapeProperties | TxPrTextBody | DataLabelVisibilities | SeparatorXsdstring | DataLabel | DataLabelHidden | ExtensionList> {

    public static override _Q = 'cx:dataLabels';
    public static override _A = [':pos',];
    /** pos. Serialized as `:pos` */
    public get pos(): DataLabelPos | undefined { return this._g(':pos'); }
    public set pos(v: DataLabelPos | undefined) { this._s(':pos', v); }
    /** Returns NumberFormat. */
    public get numberFormat(): NumberFormat | undefined { return this._f(NumberFormat); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns DataLabelVisibilities. */
    public get dataLabelVisibilities(): DataLabelVisibilities | undefined { return this._f(DataLabelVisibilities); }
    /** Returns SeparatorXsdstring. */
    public get separatorXsdstring(): SeparatorXsdstring | undefined { return this._f(SeparatorXsdstring); }

}
/** Defines the DataPoint Class. Serialized as `cx:dataPt` */
export class DataPoint extends OxmlCompositeElement<ShapeProperties | ExtensionList> {

    public static override _Q = 'cx:dataPt';
    public static override _A = [':idx',];
    /** idx. Serialized as `:idx` */
    public get idx(): UInt32Value | undefined { return this._g(':idx'); }
    public set idx(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ValueColorPositions Class. Serialized as `cx:valueColorPositions` */
export class ValueColorPositions extends OxmlCompositeElement<MinValueColorEndPosition | ValueColorMiddlePosition | MaxValueColorEndPosition> {

    public static override _Q = 'cx:valueColorPositions';
    public static override _A = [':count',];
    /** count. Serialized as `:count` */
    public get count(): Int32Value | undefined { return this._g(':count'); }
    public set count(v: Int32Value | undefined) { this._s(':count', v); }
    /** Returns MinValueColorEndPosition. */
    public get minValueColorEndPosition(): MinValueColorEndPosition | undefined { return this._f(MinValueColorEndPosition); }
    /** Returns ValueColorMiddlePosition. */
    public get valueColorMiddlePosition(): ValueColorMiddlePosition | undefined { return this._f(ValueColorMiddlePosition); }
    /** Returns MaxValueColorEndPosition. */
    public get maxValueColorEndPosition(): MaxValueColorEndPosition | undefined { return this._f(MaxValueColorEndPosition); }

}
/** Defines the ValueColors Class. Serialized as `cx:valueColors` */
export class ValueColors extends OxmlCompositeElement<MinColorSolidColorFillProperties | MidColorSolidColorFillProperties | MaxColorSolidColorFillProperties> {

    public static override _Q = 'cx:valueColors';
    /** Returns MinColorSolidColorFillProperties. */
    public get minColorSolidColorFillProperties(): MinColorSolidColorFillProperties | undefined { return this._f(MinColorSolidColorFillProperties); }
    /** Returns MidColorSolidColorFillProperties. */
    public get midColorSolidColorFillProperties(): MidColorSolidColorFillProperties | undefined { return this._f(MidColorSolidColorFillProperties); }
    /** Returns MaxColorSolidColorFillProperties. */
    public get maxColorSolidColorFillProperties(): MaxColorSolidColorFillProperties | undefined { return this._f(MaxColorSolidColorFillProperties); }

}
/** Defines the DataLabelHidden Class. Serialized as `cx:dataLabelHidden` */
export class DataLabelHidden extends OxmlLeafElement {

    public static override _Q = 'cx:dataLabelHidden';
    public static override _A = [':idx',];
    /** idx. Serialized as `:idx` */
    public get idx(): UInt32Value | undefined { return this._g(':idx'); }
    public set idx(v: UInt32Value | undefined) { this._s(':idx', v); }

}
/** Defines the DataLabel Class. Serialized as `cx:dataLabel` */
export class DataLabel extends OxmlCompositeElement<NumberFormat | ShapeProperties | TxPrTextBody | DataLabelVisibilities | SeparatorXsdstring | ExtensionList> {

    public static override _Q = 'cx:dataLabel';
    public static override _A = [':idx',':pos',];
    /** idx. Serialized as `:idx` */
    public get idx(): UInt32Value | undefined { return this._g(':idx'); }
    public set idx(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** pos. Serialized as `:pos` */
    public get pos(): DataLabelPos | undefined { return this._g(':pos'); }
    public set pos(v: DataLabelPos | undefined) { this._s(':pos', v); }
    /** Returns NumberFormat. */
    public get numberFormat(): NumberFormat | undefined { return this._f(NumberFormat); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns DataLabelVisibilities. */
    public get dataLabelVisibilities(): DataLabelVisibilities | undefined { return this._f(DataLabelVisibilities); }
    /** Returns SeparatorXsdstring. */
    public get separatorXsdstring(): SeparatorXsdstring | undefined { return this._f(SeparatorXsdstring); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DataLabelVisibilities Class. Serialized as `cx:visibility` */
export class DataLabelVisibilities extends OxmlLeafElement {

    public static override _Q = 'cx:visibility';
    public static override _A = [':seriesName',':categoryName',':value',];
    /** seriesName. Serialized as `:seriesName` */
    public get seriesName(): BooleanValue | undefined { return this._g(':seriesName'); }
    public set seriesName(v: BooleanValue | undefined) { this._s(':seriesName', v); }
    /** categoryName. Serialized as `:categoryName` */
    public get categoryName(): BooleanValue | undefined { return this._g(':categoryName'); }
    public set categoryName(v: BooleanValue | undefined) { this._s(':categoryName', v); }
    /** value. Serialized as `:value` */
    public get value(): BooleanValue | undefined { return this._g(':value'); }
    public set value(v: BooleanValue | undefined) { this._s(':value', v); }

}
/** Defines the ValueColorMiddlePosition Class. Serialized as `cx:mid` */
export class ValueColorMiddlePosition extends OxmlCompositeElement<NumberColorPosition | PercentageColorPosition> {

    public static override _Q = 'cx:mid';
    /** Returns NumberColorPosition. */
    public get numberColorPosition(): NumberColorPosition | undefined { return this._f(NumberColorPosition); }
    /** Returns PercentageColorPosition. */
    public get percentageColorPosition(): PercentageColorPosition | undefined { return this._f(PercentageColorPosition); }

}
/** Defines the OpenXmlValueColorEndPositionElement Class. */
export abstract class OpenXmlValueColorEndPositionElement extends OxmlCompositeElement<ExtremeValueColorPosition | NumberColorPosition | PercentageColorPosition> {

    /** Returns ExtremeValueColorPosition. */
    public get extremeValueColorPosition(): ExtremeValueColorPosition | undefined { return this._f(ExtremeValueColorPosition); }
    /** Returns NumberColorPosition. */
    public get numberColorPosition(): NumberColorPosition | undefined { return this._f(NumberColorPosition); }
    /** Returns PercentageColorPosition. */
    public get percentageColorPosition(): PercentageColorPosition | undefined { return this._f(PercentageColorPosition); }

}
/** Defines the MaxValueColorEndPosition Class. Serialized as `cx:max` */
export class MaxValueColorEndPosition extends OpenXmlValueColorEndPositionElement {

    public static override _Q = 'cx:max';

}
/** Defines the MinValueColorEndPosition Class. Serialized as `cx:min` */
export class MinValueColorEndPosition extends OpenXmlValueColorEndPositionElement {

    public static override _Q = 'cx:min';

}
/** Defines the PercentageColorPosition Class. Serialized as `cx:percent` */
export class PercentageColorPosition extends OxmlLeafElement {

    public static override _Q = 'cx:percent';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Defines the NumberColorPosition Class. Serialized as `cx:number` */
export class NumberColorPosition extends OxmlLeafElement {

    public static override _Q = 'cx:number';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Defines the ExtremeValueColorPosition Class. Serialized as `cx:extremeValue` */
export class ExtremeValueColorPosition extends OxmlLeafElement {

    public static override _Q = 'cx:extremeValue';

}
/** Defines the Subtotals Class. Serialized as `cx:subtotals` */
export class Subtotals extends OxmlCompositeElement<UnsignedIntegerType> {

    public static override _Q = 'cx:subtotals';

}
/** Defines the Statistics Class. Serialized as `cx:statistics` */
export class Statistics extends OxmlLeafElement {

    public static override _Q = 'cx:statistics';
    public static override _A = [':quartileMethod',];
    /** quartileMethod. Serialized as `:quartileMethod` */
    public get quartileMethod(): QuartileMethod | undefined { return this._g(':quartileMethod'); }
    public set quartileMethod(v: QuartileMethod | undefined) { this._s(':quartileMethod', v); }

}
/** Defines the Geography Class. Serialized as `cx:geography` */
export class Geography extends OxmlCompositeElement<GeoCache> {

    public static override _Q = 'cx:geography';
    public static override _A = [':projectionType',':viewedRegionType',':cultureLanguage',':cultureRegion',':attribution',];
    /** projectionType. Serialized as `:projectionType` */
    public get projectionType(): GeoProjectionType | undefined { return this._g(':projectionType'); }
    public set projectionType(v: GeoProjectionType | undefined) { this._s(':projectionType', v); }
    /** viewedRegionType. Serialized as `:viewedRegionType` */
    public get viewedRegionType(): GeoMappingLevel | undefined { return this._g(':viewedRegionType'); }
    public set viewedRegionType(v: GeoMappingLevel | undefined) { this._s(':viewedRegionType', v); }
    /** cultureLanguage. Serialized as `:cultureLanguage` */
    public get cultureLanguage(): StringValue | undefined { return this._g(':cultureLanguage'); }
    public set cultureLanguage(v: StringValue | undefined) { this._s(':cultureLanguage', v); }
    /** cultureRegion. Serialized as `:cultureRegion` */
    public get cultureRegion(): StringValue | undefined { return this._g(':cultureRegion'); }
    public set cultureRegion(v: StringValue | undefined) { this._s(':cultureRegion', v); }
    /** attribution. Serialized as `:attribution` */
    public get attribution(): StringValue | undefined { return this._g(':attribution'); }
    public set attribution(v: StringValue | undefined) { this._s(':attribution', v); }
    /** Returns GeoCache. */
    public get geoCache(): GeoCache | undefined { return this._f(GeoCache); }

}
/** Defines the Binning Class. Serialized as `cx:binning` */
export class Binning extends OxmlCompositeElement<Xsddouble | BinCountXsdunsignedInt> {

    public static override _Q = 'cx:binning';
    public static override _A = [':intervalClosed',':underflow',':overflow',];
    /** intervalClosed. Serialized as `:intervalClosed` */
    public get intervalClosed(): IntervalClosedSide | undefined { return this._g(':intervalClosed'); }
    public set intervalClosed(v: IntervalClosedSide | undefined) { this._s(':intervalClosed', v); }
    /** underflow. Serialized as `:underflow` */
    public get underflow(): StringValue | undefined { return this._g(':underflow'); }
    public set underflow(v: StringValue | undefined) { this._s(':underflow', v); }
    /** overflow. Serialized as `:overflow` */
    public get overflow(): StringValue | undefined { return this._g(':overflow'); }
    public set overflow(v: StringValue | undefined) { this._s(':overflow', v); }
    /** Returns Xsddouble. */
    public get xsddouble(): Xsddouble | undefined { return this._f(Xsddouble); }
    /** Returns BinCountXsdunsignedInt. */
    public get binCountXsdunsignedInt(): BinCountXsdunsignedInt | undefined { return this._f(BinCountXsdunsignedInt); }

}
/** Defines the Aggregation Class. Serialized as `cx:aggregation` */
export class Aggregation extends OxmlLeafElement {

    public static override _Q = 'cx:aggregation';

}
/** Defines the SeriesElementVisibilities Class. Serialized as `cx:visibility` */
export class SeriesElementVisibilities extends OxmlLeafElement {

    public static override _Q = 'cx:visibility';
    public static override _A = [':connectorLines',':meanLine',':meanMarker',':nonoutliers',':outliers',];
    /** connectorLines. Serialized as `:connectorLines` */
    public get connectorLines(): BooleanValue | undefined { return this._g(':connectorLines'); }
    public set connectorLines(v: BooleanValue | undefined) { this._s(':connectorLines', v); }
    /** meanLine. Serialized as `:meanLine` */
    public get meanLine(): BooleanValue | undefined { return this._g(':meanLine'); }
    public set meanLine(v: BooleanValue | undefined) { this._s(':meanLine', v); }
    /** meanMarker. Serialized as `:meanMarker` */
    public get meanMarker(): BooleanValue | undefined { return this._g(':meanMarker'); }
    public set meanMarker(v: BooleanValue | undefined) { this._s(':meanMarker', v); }
    /** nonoutliers. Serialized as `:nonoutliers` */
    public get nonoutliers(): BooleanValue | undefined { return this._g(':nonoutliers'); }
    public set nonoutliers(v: BooleanValue | undefined) { this._s(':nonoutliers', v); }
    /** outliers. Serialized as `:outliers` */
    public get outliers(): BooleanValue | undefined { return this._g(':outliers'); }
    public set outliers(v: BooleanValue | undefined) { this._s(':outliers', v); }

}
/** Defines the RegionLabelLayout Class. Serialized as `cx:regionLabelLayout` */
export class RegionLabelLayout extends OxmlLeafElement {

    public static override _Q = 'cx:regionLabelLayout';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): RegionLabelLayoutEnum | undefined { return this._g(':val'); }
    public set val(v: RegionLabelLayoutEnum | undefined) { this._s(':val', v); }

}
/** Defines the ParentLabelLayout Class. Serialized as `cx:parentLabelLayout` */
export class ParentLabelLayout extends OxmlLeafElement {

    public static override _Q = 'cx:parentLabelLayout';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get parentLabelLayoutVal(): ParentLabelLayoutVal | undefined { return this._g(':val'); }
    public set parentLabelLayoutVal(v: ParentLabelLayoutVal | undefined) { this._s(':val', v); }

}
/** Defines the GeoCache Class. Serialized as `cx:geoCache` */
export class GeoCache extends OxmlCompositeElement<Xsdbase64Binary | Clear> {

    public static override _Q = 'cx:geoCache';
    public static override _A = [':provider',];
    /** provider. Serialized as `:provider` */
    public get provider(): StringValue | undefined { return this._g(':provider'); }
    public set provider(v: StringValue | undefined) { this._s(':provider', v); }

}
/** Defines the Clear Class. Serialized as `cx:clear` */
export class Clear extends OxmlCompositeElement<GeoLocationQueryResults | GeoDataEntityQueryResults | GeoDataPointToEntityQueryResults | GeoChildEntitiesQueryResults | GeoParentEntitiesQueryResults> {

    public static override _Q = 'cx:clear';
    /** Returns GeoLocationQueryResults. */
    public get geoLocationQueryResults(): GeoLocationQueryResults | undefined { return this._f(GeoLocationQueryResults); }
    /** Returns GeoDataEntityQueryResults. */
    public get geoDataEntityQueryResults(): GeoDataEntityQueryResults | undefined { return this._f(GeoDataEntityQueryResults); }
    /** Returns GeoDataPointToEntityQueryResults. */
    public get geoDataPointToEntityQueryResults(): GeoDataPointToEntityQueryResults | undefined { return this._f(GeoDataPointToEntityQueryResults); }
    /** Returns GeoChildEntitiesQueryResults. */
    public get geoChildEntitiesQueryResults(): GeoChildEntitiesQueryResults | undefined { return this._f(GeoChildEntitiesQueryResults); }
    /** Returns GeoParentEntitiesQueryResults. */
    public get geoParentEntitiesQueryResults(): GeoParentEntitiesQueryResults | undefined { return this._f(GeoParentEntitiesQueryResults); }

}
/** Defines the Xsdbase64Binary Class. Serialized as `cx:binary` */
export class Xsdbase64Binary extends OxmlLeafTextElement {

    public static override _Q = 'cx:binary';

}
/** Defines the GeoParentEntitiesQueryResults Class. Serialized as `cx:geoParentEntitiesQueryResults` */
export class GeoParentEntitiesQueryResults extends OxmlCompositeElement<GeoParentEntitiesQueryResult> {

    public static override _Q = 'cx:geoParentEntitiesQueryResults';

}
/** Defines the GeoChildEntitiesQueryResults Class. Serialized as `cx:geoChildEntitiesQueryResults` */
export class GeoChildEntitiesQueryResults extends OxmlCompositeElement<GeoChildEntitiesQueryResult> {

    public static override _Q = 'cx:geoChildEntitiesQueryResults';

}
/** Defines the GeoDataPointToEntityQueryResults Class. Serialized as `cx:geoDataPointToEntityQueryResults` */
export class GeoDataPointToEntityQueryResults extends OxmlCompositeElement<GeoDataPointToEntityQueryResult> {

    public static override _Q = 'cx:geoDataPointToEntityQueryResults';

}
/** Defines the GeoDataEntityQueryResults Class. Serialized as `cx:geoDataEntityQueryResults` */
export class GeoDataEntityQueryResults extends OxmlCompositeElement<GeoDataEntityQueryResult> {

    public static override _Q = 'cx:geoDataEntityQueryResults';

}
/** Defines the GeoLocationQueryResults Class. Serialized as `cx:geoLocationQueryResults` */
export class GeoLocationQueryResults extends OxmlCompositeElement<GeoLocationQueryResult> {

    public static override _Q = 'cx:geoLocationQueryResults';

}
/** Defines the GeoParentEntitiesQueryResult Class. Serialized as `cx:geoParentEntitiesQueryResult` */
export class GeoParentEntitiesQueryResult extends OxmlCompositeElement<GeoParentEntitiesQuery | GeoEntity | GeoParentEntity> {

    public static override _Q = 'cx:geoParentEntitiesQueryResult';
    /** Returns GeoParentEntitiesQuery. */
    public get geoParentEntitiesQuery(): GeoParentEntitiesQuery | undefined { return this._f(GeoParentEntitiesQuery); }
    /** Returns GeoEntity. */
    public get geoEntity(): GeoEntity | undefined { return this._f(GeoEntity); }
    /** Returns GeoParentEntity. */
    public get geoParentEntity(): GeoParentEntity | undefined { return this._f(GeoParentEntity); }

}
/** Defines the GeoParentEntity Class. Serialized as `cx:geoParentEntity` */
export class GeoParentEntity extends OxmlLeafElement {

    public static override _Q = 'cx:geoParentEntity';
    public static override _A = [':entityId',];
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }

}
/** Defines the GeoEntity Class. Serialized as `cx:geoEntity` */
export class GeoEntity extends OxmlLeafElement {

    public static override _Q = 'cx:geoEntity';
    public static override _A = [':entityName',':entityType',];
    /** entityName. Serialized as `:entityName` */
    public get entityName(): StringValue | undefined { return this._g(':entityName'); }
    public set entityName(v: StringValue | undefined) { this._s(':entityName', v); }
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }

}
/** Defines the GeoParentEntitiesQuery Class. Serialized as `cx:geoParentEntitiesQuery` */
export class GeoParentEntitiesQuery extends OxmlLeafElement {

    public static override _Q = 'cx:geoParentEntitiesQuery';
    public static override _A = [':entityId',];
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }

}
/** Defines the GeoChildEntitiesQueryResult Class. Serialized as `cx:geoChildEntitiesQueryResult` */
export class GeoChildEntitiesQueryResult extends OxmlCompositeElement<GeoChildEntitiesQuery | GeoChildEntities> {

    public static override _Q = 'cx:geoChildEntitiesQueryResult';
    /** Returns GeoChildEntitiesQuery. */
    public get geoChildEntitiesQuery(): GeoChildEntitiesQuery | undefined { return this._f(GeoChildEntitiesQuery); }
    /** Returns GeoChildEntities. */
    public get geoChildEntities(): GeoChildEntities | undefined { return this._f(GeoChildEntities); }

}
/** Defines the GeoChildEntities Class. Serialized as `cx:geoChildEntities` */
export class GeoChildEntities extends OxmlCompositeElement<GeoHierarchyEntity> {

    public static override _Q = 'cx:geoChildEntities';

}
/** Defines the GeoChildEntitiesQuery Class. Serialized as `cx:geoChildEntitiesQuery` */
export class GeoChildEntitiesQuery extends OxmlCompositeElement<GeoChildTypes> {

    public static override _Q = 'cx:geoChildEntitiesQuery';
    public static override _A = [':entityId',];
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }
    /** Returns GeoChildTypes. */
    public get geoChildTypes(): GeoChildTypes | undefined { return this._f(GeoChildTypes); }

}
/** Defines the GeoHierarchyEntity Class. Serialized as `cx:geoHierarchyEntity` */
export class GeoHierarchyEntity extends OxmlLeafElement {

    public static override _Q = 'cx:geoHierarchyEntity';
    public static override _A = [':entityName',':entityId',':entityType',];
    /** entityName. Serialized as `:entityName` */
    public get entityName(): StringValue | undefined { return this._g(':entityName'); }
    public set entityName(v: StringValue | undefined) { this._s(':entityName', v); }
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }

}
/** Defines the GeoChildTypes Class. Serialized as `cx:geoChildTypes` */
export class GeoChildTypes extends OxmlCompositeElement<EntityType> {

    public static override _Q = 'cx:geoChildTypes';

}
/** Defines the EntityType Class. Serialized as `cx:entityType` */
export class EntityType extends OxmlLeafTextElement {

    public static override _Q = 'cx:entityType';

}
/** Defines the GeoDataPointToEntityQueryResult Class. Serialized as `cx:geoDataPointToEntityQueryResult` */
export class GeoDataPointToEntityQueryResult extends OxmlCompositeElement<GeoDataPointQuery | GeoDataPointToEntityQuery> {

    public static override _Q = 'cx:geoDataPointToEntityQueryResult';
    /** Returns GeoDataPointQuery. */
    public get geoDataPointQuery(): GeoDataPointQuery | undefined { return this._f(GeoDataPointQuery); }
    /** Returns GeoDataPointToEntityQuery. */
    public get geoDataPointToEntityQuery(): GeoDataPointToEntityQuery | undefined { return this._f(GeoDataPointToEntityQuery); }

}
/** Defines the GeoDataPointToEntityQuery Class. Serialized as `cx:geoDataPointToEntityQuery` */
export class GeoDataPointToEntityQuery extends OxmlLeafElement {

    public static override _Q = 'cx:geoDataPointToEntityQuery';
    public static override _A = [':entityType',':entityId',];
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }

}
/** Defines the GeoDataPointQuery Class. Serialized as `cx:geoDataPointQuery` */
export class GeoDataPointQuery extends OxmlLeafElement {

    public static override _Q = 'cx:geoDataPointQuery';
    public static override _A = [':entityType',':latitude',':longitude',];
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }
    /** latitude. Serialized as `:latitude` */
    public get latitude(): DoubleValue | undefined { return this._g(':latitude'); }
    public set latitude(v: DoubleValue | undefined) { this._s(':latitude', v); }
    /** longitude. Serialized as `:longitude` */
    public get longitude(): DoubleValue | undefined { return this._g(':longitude'); }
    public set longitude(v: DoubleValue | undefined) { this._s(':longitude', v); }

}
/** Defines the GeoDataEntityQueryResult Class. Serialized as `cx:geoDataEntityQueryResult` */
export class GeoDataEntityQueryResult extends OxmlCompositeElement<GeoDataEntityQuery | GeoData> {

    public static override _Q = 'cx:geoDataEntityQueryResult';
    /** Returns GeoDataEntityQuery. */
    public get geoDataEntityQuery(): GeoDataEntityQuery | undefined { return this._f(GeoDataEntityQuery); }
    /** Returns GeoData. */
    public get geoData(): GeoData | undefined { return this._f(GeoData); }

}
/** Defines the GeoData Class. Serialized as `cx:geoData` */
export class GeoData extends OxmlCompositeElement<GeoPolygons | Copyrights> {

    public static override _Q = 'cx:geoData';
    public static override _A = [':entityName',':entityId',':east',':west',':north',':south',];
    /** entityName. Serialized as `:entityName` */
    public get entityName(): StringValue | undefined { return this._g(':entityName'); }
    public set entityName(v: StringValue | undefined) { this._s(':entityName', v); }
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }
    /** east. Serialized as `:east` */
    public get east(): DoubleValue | undefined { return this._g(':east'); }
    public set east(v: DoubleValue | undefined) { this._s(':east', v); }
    /** west. Serialized as `:west` */
    public get west(): DoubleValue | undefined { return this._g(':west'); }
    public set west(v: DoubleValue | undefined) { this._s(':west', v); }
    /** north. Serialized as `:north` */
    public get north(): DoubleValue | undefined { return this._g(':north'); }
    public set north(v: DoubleValue | undefined) { this._s(':north', v); }
    /** south. Serialized as `:south` */
    public get south(): DoubleValue | undefined { return this._g(':south'); }
    public set south(v: DoubleValue | undefined) { this._s(':south', v); }
    /** Returns GeoPolygons. */
    public get geoPolygons(): GeoPolygons | undefined { return this._f(GeoPolygons); }
    /** Returns Copyrights. */
    public get copyrights(): Copyrights | undefined { return this._f(Copyrights); }

}
/** Defines the GeoDataEntityQuery Class. Serialized as `cx:geoDataEntityQuery` */
export class GeoDataEntityQuery extends OxmlLeafElement {

    public static override _Q = 'cx:geoDataEntityQuery';
    public static override _A = [':entityType',':entityId',];
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }
    /** entityId. Serialized as `:entityId` */
    public get entityId(): StringValue | undefined { return this._g(':entityId'); }
    public set entityId(v: StringValue | undefined) { this._s(':entityId', v); }

}
/** Defines the Copyrights Class. Serialized as `cx:copyrights` */
export class Copyrights extends OxmlCompositeElement<CopyrightXsdstring> {

    public static override _Q = 'cx:copyrights';

}
/** Defines the GeoPolygons Class. Serialized as `cx:geoPolygons` */
export class GeoPolygons extends OxmlCompositeElement<GeoPolygon> {

    public static override _Q = 'cx:geoPolygons';

}
/** Defines the GeoPolygon Class. Serialized as `cx:geoPolygon` */
export class GeoPolygon extends OxmlLeafElement {

    public static override _Q = 'cx:geoPolygon';
    public static override _A = [':polygonId',':numPoints',':pcaRings',];
    /** polygonId. Serialized as `:polygonId` */
    public get polygonId(): StringValue | undefined { return this._g(':polygonId'); }
    public set polygonId(v: StringValue | undefined) { this._s(':polygonId', v); }
    /** numPoints. Serialized as `:numPoints` */
    public get numPoints(): IntegerValue | undefined { return this._g(':numPoints'); }
    public set numPoints(v: IntegerValue | undefined) { this._s(':numPoints', v); }
    /** pcaRings. Serialized as `:pcaRings` */
    public get pcaRings(): StringValue | undefined { return this._g(':pcaRings'); }
    public set pcaRings(v: StringValue | undefined) { this._s(':pcaRings', v); }

}
/** Defines the GeoLocationQueryResult Class. Serialized as `cx:geoLocationQueryResult` */
export class GeoLocationQueryResult extends OxmlCompositeElement<GeoLocationQuery | GeoLocations> {

    public static override _Q = 'cx:geoLocationQueryResult';
    /** Returns GeoLocationQuery. */
    public get geoLocationQuery(): GeoLocationQuery | undefined { return this._f(GeoLocationQuery); }
    /** Returns GeoLocations. */
    public get geoLocations(): GeoLocations | undefined { return this._f(GeoLocations); }

}
/** Defines the GeoLocations Class. Serialized as `cx:geoLocations` */
export class GeoLocations extends OxmlCompositeElement<GeoLocation> {

    public static override _Q = 'cx:geoLocations';
    /** Returns GeoLocation. */
    public get geoLocation(): GeoLocation | undefined { return this._f(GeoLocation); }

}
/** Defines the GeoLocationQuery Class. Serialized as `cx:geoLocationQuery` */
export class GeoLocationQuery extends OxmlLeafElement {

    public static override _Q = 'cx:geoLocationQuery';
    public static override _A = [':countryRegion',':adminDistrict1',':adminDistrict2',':postalCode',':entityType',];
    /** countryRegion. Serialized as `:countryRegion` */
    public get countryRegion(): StringValue | undefined { return this._g(':countryRegion'); }
    public set countryRegion(v: StringValue | undefined) { this._s(':countryRegion', v); }
    /** adminDistrict1. Serialized as `:adminDistrict1` */
    public get adminDistrict1(): StringValue | undefined { return this._g(':adminDistrict1'); }
    public set adminDistrict1(v: StringValue | undefined) { this._s(':adminDistrict1', v); }
    /** adminDistrict2. Serialized as `:adminDistrict2` */
    public get adminDistrict2(): StringValue | undefined { return this._g(':adminDistrict2'); }
    public set adminDistrict2(v: StringValue | undefined) { this._s(':adminDistrict2', v); }
    /** postalCode. Serialized as `:postalCode` */
    public get postalCode(): StringValue | undefined { return this._g(':postalCode'); }
    public set postalCode(v: StringValue | undefined) { this._s(':postalCode', v); }
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }

}
/** Defines the GeoLocation Class. Serialized as `cx:geoLocation` */
export class GeoLocation extends OxmlCompositeElement<Address> {

    public static override _Q = 'cx:geoLocation';
    public static override _A = [':latitude',':longitude',':entityName',':entityType',];
    /** latitude. Serialized as `:latitude` */
    public get latitude(): DoubleValue | undefined { return this._g(':latitude'); }
    public set latitude(v: DoubleValue | undefined) { this._s(':latitude', v); }
    /** longitude. Serialized as `:longitude` */
    public get longitude(): DoubleValue | undefined { return this._g(':longitude'); }
    public set longitude(v: DoubleValue | undefined) { this._s(':longitude', v); }
    /** entityName. Serialized as `:entityName` */
    public get entityName(): StringValue | undefined { return this._g(':entityName'); }
    public set entityName(v: StringValue | undefined) { this._s(':entityName', v); }
    /** entityType. Serialized as `:entityType` */
    public get entityType(): EntityTypeEnum | undefined { return this._g(':entityType'); }
    public set entityType(v: EntityTypeEnum | undefined) { this._s(':entityType', v); }
    /** Returns Address. */
    public get address(): Address | undefined { return this._f(Address); }

}
/** Defines the Address Class. Serialized as `cx:address` */
export class Address extends OxmlLeafElement {

    public static override _Q = 'cx:address';
    public static override _A = [':address1',':countryRegion',':adminDistrict1',':adminDistrict2',':postalCode',':locality',':isoCountryCode',];
    /** address1. Serialized as `:address1` */
    public get address1(): StringValue | undefined { return this._g(':address1'); }
    public set address1(v: StringValue | undefined) { this._s(':address1', v); }
    /** countryRegion. Serialized as `:countryRegion` */
    public get countryRegion(): StringValue | undefined { return this._g(':countryRegion'); }
    public set countryRegion(v: StringValue | undefined) { this._s(':countryRegion', v); }
    /** adminDistrict1. Serialized as `:adminDistrict1` */
    public get adminDistrict1(): StringValue | undefined { return this._g(':adminDistrict1'); }
    public set adminDistrict1(v: StringValue | undefined) { this._s(':adminDistrict1', v); }
    /** adminDistrict2. Serialized as `:adminDistrict2` */
    public get adminDistrict2(): StringValue | undefined { return this._g(':adminDistrict2'); }
    public set adminDistrict2(v: StringValue | undefined) { this._s(':adminDistrict2', v); }
    /** postalCode. Serialized as `:postalCode` */
    public get postalCode(): StringValue | undefined { return this._g(':postalCode'); }
    public set postalCode(v: StringValue | undefined) { this._s(':postalCode', v); }
    /** locality. Serialized as `:locality` */
    public get locality(): StringValue | undefined { return this._g(':locality'); }
    public set locality(v: StringValue | undefined) { this._s(':locality', v); }
    /** isoCountryCode. Serialized as `:isoCountryCode` */
    public get isoCountryCode(): StringValue | undefined { return this._g(':isoCountryCode'); }
    public set isoCountryCode(v: StringValue | undefined) { this._s(':isoCountryCode', v); }

}
/** Defines the Xsddouble Class. Serialized as `cx:binSize` */
export class Xsddouble extends OxmlLeafTextElement {

    public static override _Q = 'cx:binSize';

}
/** Defines the NumberFormat Class. Serialized as `cx:numFmt` */
export class NumberFormat extends OxmlLeafElement {

    public static override _Q = 'cx:numFmt';
    public static override _A = [':formatCode',':sourceLinked',];
    /** formatCode. Serialized as `:formatCode` */
    public get formatCode(): StringValue | undefined { return this._g(':formatCode'); }
    public set formatCode(v: StringValue | undefined) { this._s(':formatCode', v); }
    /** sourceLinked. Serialized as `:sourceLinked` */
    public get sourceLinked(): BooleanValue | undefined { return this._g(':sourceLinked'); }
    public set sourceLinked(v: BooleanValue | undefined) { this._s(':sourceLinked', v); }

}
/** Defines the TickLabels Class. Serialized as `cx:tickLabels` */
export class TickLabels extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'cx:tickLabels';
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the OpenXmlTickMarksElement Class. */
export abstract class OpenXmlTickMarksElement extends OxmlCompositeElement<ExtensionList> {

    public static override _A = [':type',];
    /** type. Serialized as `:type` */
    public get type(): TickMarksType | undefined { return this._g(':type'); }
    public set type(v: TickMarksType | undefined) { this._s(':type', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the MinorTickMarksTickMarks Class. Serialized as `cx:minorTickMarks` */
export class MinorTickMarksTickMarks extends OpenXmlTickMarksElement {

    public static override _Q = 'cx:minorTickMarks';

}
/** Defines the MajorTickMarksTickMarks Class. Serialized as `cx:majorTickMarks` */
export class MajorTickMarksTickMarks extends OpenXmlTickMarksElement {

    public static override _Q = 'cx:majorTickMarks';

}
/** Defines the OpenXmlGridlinesElement Class. */
export abstract class OpenXmlGridlinesElement extends OxmlCompositeElement<ShapeProperties | ExtensionList> {

    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the MinorGridlinesGridlines Class. Serialized as `cx:minorGridlines` */
export class MinorGridlinesGridlines extends OpenXmlGridlinesElement {

    public static override _Q = 'cx:minorGridlines';

}
/** Defines the MajorGridlinesGridlines Class. Serialized as `cx:majorGridlines` */
export class MajorGridlinesGridlines extends OpenXmlGridlinesElement {

    public static override _Q = 'cx:majorGridlines';

}
/** Defines the AxisUnits Class. Serialized as `cx:units` */
export class AxisUnits extends OxmlCompositeElement<AxisUnitsLabel | ExtensionList> {

    public static override _Q = 'cx:units';
    public static override _A = [':unit',];
    /** unit. Serialized as `:unit` */
    public get unit(): AxisUnit | undefined { return this._g(':unit'); }
    public set unit(v: AxisUnit | undefined) { this._s(':unit', v); }
    /** Returns AxisUnitsLabel. */
    public get axisUnitsLabel(): AxisUnitsLabel | undefined { return this._f(AxisUnitsLabel); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the AxisTitle Class. Serialized as `cx:title` */
export class AxisTitle extends OxmlCompositeElement<Text | ShapeProperties | TxPrTextBody | ExtensionList> {

    public static override _Q = 'cx:title';
    /** Returns Text. */
    public get text(): Text | undefined { return this._f(Text); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ValueAxisScaling Class. Serialized as `cx:valScaling` */
export class ValueAxisScaling extends OxmlLeafElement {

    public static override _Q = 'cx:valScaling';
    public static override _A = [':max',':min',':majorUnit',':minorUnit',];
    /** max. Serialized as `:max` */
    public get max(): StringValue | undefined { return this._g(':max'); }
    public set max(v: StringValue | undefined) { this._s(':max', v); }
    /** min. Serialized as `:min` */
    public get min(): StringValue | undefined { return this._g(':min'); }
    public set min(v: StringValue | undefined) { this._s(':min', v); }
    /** majorUnit. Serialized as `:majorUnit` */
    public get majorUnit(): StringValue | undefined { return this._g(':majorUnit'); }
    public set majorUnit(v: StringValue | undefined) { this._s(':majorUnit', v); }
    /** minorUnit. Serialized as `:minorUnit` */
    public get minorUnit(): StringValue | undefined { return this._g(':minorUnit'); }
    public set minorUnit(v: StringValue | undefined) { this._s(':minorUnit', v); }

}
/** Defines the CategoryAxisScaling Class. Serialized as `cx:catScaling` */
export class CategoryAxisScaling extends OxmlLeafElement {

    public static override _Q = 'cx:catScaling';
    public static override _A = [':gapWidth',];
    /** gapWidth. Serialized as `:gapWidth` */
    public get gapWidth(): StringValue | undefined { return this._g(':gapWidth'); }
    public set gapWidth(v: StringValue | undefined) { this._s(':gapWidth', v); }

}
/** Defines the AxisUnitsLabel Class. Serialized as `cx:unitsLabel` */
export class AxisUnitsLabel extends OxmlCompositeElement<Text | ShapeProperties | TxPrTextBody | ExtensionList> {

    public static override _Q = 'cx:unitsLabel';
    /** Returns Text. */
    public get text(): Text | undefined { return this._f(Text); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ShapeProperties Class. Serialized as `cx:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'cx:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the Text Class. Serialized as `cx:tx` */
export class Text extends OxmlCompositeElement<TextData | RichTextBody> {

    public static override _Q = 'cx:tx';
    /** Returns TextData. */
    public get textData(): TextData | undefined { return this._f(TextData); }
    /** Returns RichTextBody. */
    public get richTextBody(): RichTextBody | undefined { return this._f(RichTextBody); }

}
/** Defines the TextBodyType Class. */
export abstract class TextBodyType extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Defines the TxPrTextBody Class. Serialized as `cx:txPr` */
export class TxPrTextBody extends TextBodyType {

    public static override _Q = 'cx:txPr';

}
/** Defines the RichTextBody Class. Serialized as `cx:rich` */
export class RichTextBody extends TextBodyType {

    public static override _Q = 'cx:rich';

}
/** Defines the TextData Class. Serialized as `cx:txData` */
export class TextData extends OxmlCompositeElement<Formula | VXsdstring> {

    public static override _Q = 'cx:txData';

}
/** Defines the FirstFooterXsdstring Class. Serialized as `cx:firstFooter` */
export class FirstFooterXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:firstFooter';

}
/** Defines the FirstHeaderXsdstring Class. Serialized as `cx:firstHeader` */
export class FirstHeaderXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:firstHeader';

}
/** Defines the EvenFooterXsdstring Class. Serialized as `cx:evenFooter` */
export class EvenFooterXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:evenFooter';

}
/** Defines the EvenHeaderXsdstring Class. Serialized as `cx:evenHeader` */
export class EvenHeaderXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:evenHeader';

}
/** Defines the OddFooterXsdstring Class. Serialized as `cx:oddFooter` */
export class OddFooterXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:oddFooter';

}
/** Defines the OddHeaderXsdstring Class. Serialized as `cx:oddHeader` */
export class OddHeaderXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:oddHeader';

}
/** Defines the SeparatorXsdstring Class. Serialized as `cx:separator` */
export class SeparatorXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:separator';

}
/** Defines the CopyrightXsdstring Class. Serialized as `cx:copyright` */
export class CopyrightXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:copyright';

}
/** Defines the VXsdstring Class. Serialized as `cx:v` */
export class VXsdstring extends OxmlLeafTextElement {

    public static override _Q = 'cx:v';

}
/** Defines the Data Class. Serialized as `cx:data` */
export class Data extends OxmlCompositeElement<NumericDimension | StringDimension | ExtensionList> {

    public static override _Q = 'cx:data';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }

}
/** Defines the ExternalData Class. Serialized as `cx:externalData` */
export class ExternalData extends OxmlLeafElement {

    public static override _Q = 'cx:externalData';
    public static override _A = ['r:id','cx:autoUpdate',];
    /** RelId of the relationship for the external data. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** True if the external link should automatically update. Serialized as `cx:autoUpdate` */
    public get autoUpdate(): BooleanValue | undefined { return this._g('cx:autoUpdate'); }
    public set autoUpdate(v: BooleanValue | undefined) { this._s('cx:autoUpdate', v); }

}
/** Defines the ExtensionList Class. Serialized as `cx:extLst` */
export class ExtensionList extends OxmlCompositeElement<Extension2> {

    public static override _Q = 'cx:extLst';

}
/** Defines the StringDimension Class. Serialized as `cx:strDim` */
export class StringDimension extends OxmlCompositeElement<Formula | NfFormula | StringLevel> {

    public static override _Q = 'cx:strDim';
    public static override _A = [':type',];
    /** type. Serialized as `:type` */
    public get type(): StringDimensionType | undefined { return this._g(':type'); }
    public set type(v: StringDimensionType | undefined) { this._s(':type', v); }

}
/** Defines the NumericDimension Class. Serialized as `cx:numDim` */
export class NumericDimension extends OxmlCompositeElement<Formula | NfFormula | NumericLevel> {

    public static override _Q = 'cx:numDim';
    public static override _A = [':type',];
    /** type. Serialized as `:type` */
    public get type(): NumericDimensionType | undefined { return this._g(':type'); }
    public set type(v: NumericDimensionType | undefined) { this._s(':type', v); }

}
/** Defines the NumericLevel Class. Serialized as `cx:lvl` */
export class NumericLevel extends OxmlCompositeElement<NumericValue> {

    public static override _Q = 'cx:lvl';
    public static override _A = [':ptCount',':formatCode',':name',];
    /** ptCount. Serialized as `:ptCount` */
    public get ptCount(): UInt32Value | undefined { return this._g(':ptCount'); }
    public set ptCount(v: UInt32Value | undefined) { this._s(':ptCount', v); }
    /** formatCode. Serialized as `:formatCode` */
    public get formatCode(): StringValue | undefined { return this._g(':formatCode'); }
    public set formatCode(v: StringValue | undefined) { this._s(':formatCode', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the NumericValue Class. Serialized as `cx:pt` */
export class NumericValue extends OxmlLeafTextElement {

    public static override _Q = 'cx:pt';
    public static override _A = [':idx',];
    /** idx. Serialized as `:idx` */
    public get idx(): UInt32Value | undefined { return this._g(':idx'); }
    public set idx(v: UInt32Value | undefined) { this._s(':idx', v); }

}
/** Defines the StringLevel Class. Serialized as `cx:lvl` */
export class StringLevel extends OxmlCompositeElement<ChartStringValue> {

    public static override _Q = 'cx:lvl';
    public static override _A = [':ptCount',':name',];
    /** ptCount. Serialized as `:ptCount` */
    public get ptCount(): UInt32Value | undefined { return this._g(':ptCount'); }
    public set ptCount(v: UInt32Value | undefined) { this._s(':ptCount', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Defines the OpenXmlFormulaElement Class. */
export abstract class OpenXmlFormulaElement extends OxmlLeafTextElement {

    public static override _A = [':dir',];
    /** dir. Serialized as `:dir` */
    public get dir(): FormulaDirection | undefined { return this._g(':dir'); }
    public set dir(v: FormulaDirection | undefined) { this._s(':dir', v); }

}
/** Defines the NfFormula Class. Serialized as `cx:nf` */
export class NfFormula extends OpenXmlFormulaElement {

    public static override _Q = 'cx:nf';

}
/** Defines the Formula Class. Serialized as `cx:f` */
export class Formula extends OpenXmlFormulaElement {

    public static override _Q = 'cx:f';

}
/** Defines the ChartStringValue Class. Serialized as `cx:pt` */
export class ChartStringValue extends OxmlLeafTextElement {

    public static override _Q = 'cx:pt';
    public static override _A = [':idx',];
    /** idx. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }

}
/** Defines the OpenXmlSolidColorFillPropertiesElement Class. */
export abstract class OpenXmlSolidColorFillPropertiesElement extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Defines the MaxColorSolidColorFillProperties Class. Serialized as `cx:maxColor` */
export class MaxColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {

    public static override _Q = 'cx:maxColor';

}
/** Defines the MidColorSolidColorFillProperties Class. Serialized as `cx:midColor` */
export class MidColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {

    public static override _Q = 'cx:midColor';

}
/** Defines the MinColorSolidColorFillProperties Class. Serialized as `cx:minColor` */
export class MinColorSolidColorFillProperties extends OpenXmlSolidColorFillPropertiesElement {

    public static override _Q = 'cx:minColor';

}
/** Defines the Extension2 Class. Serialized as `cx:ext` */
export class Extension2 extends OxmlCompositeElement {

    public static override _Q = 'cx:ext';
    public static override _A = [':uri',];
    /** uri. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}
/** Defines the BinCountXsdunsignedInt Class. Serialized as `cx:binCount` */
export class BinCountXsdunsignedInt extends OxmlLeafTextElement {

    public static override _Q = 'cx:binCount';

}
/** Defines the Openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3XsdunsignedInt Class. Serialized as `cx:openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3` */
export class Openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3XsdunsignedInt extends OxmlLeafTextElement {

    public static override _Q = 'cx:openxmlsdk_49BECFFA_3B03_4D13_8272_D6CCB22579E3';

}
/** Defines the RelId Class. Serialized as `cx:chart` */
export class RelId extends OxmlLeafElement {

    public static override _Q = 'cx:chart';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the ChartSpace Class. Serialized as `cx:chartSpace` */
export class ChartSpace extends OxmlPartRootElement<ChartData | Chart | ShapeProperties | TxPrTextBody | ColorMappingType | FormatOverrides | PrintSettings | ExtensionList> {

    public static override _Q = 'cx:chartSpace';
    /** Returns ChartData. */
    public get chartData(): ChartData | undefined { return this._f(ChartData); }
    /** Returns Chart. */
    public get chart(): Chart | undefined { return this._f(Chart); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TxPrTextBody. */
    public get txPrTextBody(): TxPrTextBody | undefined { return this._f(TxPrTextBody); }
    /** Returns ColorMappingType. */
    public get colorMappingType(): ColorMappingType | undefined { return this._f(ColorMappingType); }
    /** Returns FormatOverrides. */
    public get formatOverrides(): FormatOverrides | undefined { return this._f(FormatOverrides); }
    /** Returns PrintSettings. */
    public get printSettings(): PrintSettings | undefined { return this._f(PrintSettings); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}

export function initOffice2016DrawingChartDrawingNamespace() {
    UnsignedIntegerType._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    PrintSettings._C = {
        'cx:headerFooter': HeaderFooter,
        'cx:pageMargins': PageMargins,
        'cx:pageSetup': PageSetup,
    };
    FormatOverrides._C = {
        'cx:fmtOvr': FormatOverride,
    };
    ColorMappingType._C = {
        'a:extLst': AExtensionList,
    };
    ColorMappingType._D = {
        ':bg1': new OxmlAttr(':bg1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':tx1': new OxmlAttr(':tx1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':bg2': new OxmlAttr(':bg2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':tx2': new OxmlAttr(':tx2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent1': new OxmlAttr(':accent1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent2': new OxmlAttr(':accent2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent3': new OxmlAttr(':accent3', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent4': new OxmlAttr(':accent4', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent5': new OxmlAttr(':accent5', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent6': new OxmlAttr(':accent6', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':hlink': new OxmlAttr(':hlink', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':folHlink': new OxmlAttr(':folHlink', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    };
    Chart._C = {
        'cx:title': ChartTitle,
        'cx:plotArea': PlotArea,
        'cx:legend': Legend,
        'cx:extLst': ExtensionList,
    };
    ChartData._C = {
        'cx:externalData': ExternalData,
        'cx:data': Data,
        'cx:extLst': ExtensionList,
    };
    PageSetup._D = {
        ':paperSize': new OxmlAttr(':paperSize', OxmlType.UInt32Value),
        ':firstPageNumber': new OxmlAttr(':firstPageNumber', OxmlType.UInt32Value),
        ':orientation': new OxmlAttr(':orientation', OxmlType.EnumValue, PageOrientationArray),
        ':blackAndWhite': new OxmlAttr(':blackAndWhite', OxmlType.BooleanValue),
        ':draft': new OxmlAttr(':draft', OxmlType.BooleanValue),
        ':useFirstPageNumber': new OxmlAttr(':useFirstPageNumber', OxmlType.BooleanValue),
        ':horizontalDpi': new OxmlAttr(':horizontalDpi', OxmlType.Int32Value),
        ':verticalDpi': new OxmlAttr(':verticalDpi', OxmlType.Int32Value),
        ':copies': new OxmlAttr(':copies', OxmlType.UInt32Value),
    };
    PageMargins._D = {
        ':l': new OxmlAttr(':l', OxmlType.DoubleValue),
        ':r': new OxmlAttr(':r', OxmlType.DoubleValue),
        ':t': new OxmlAttr(':t', OxmlType.DoubleValue),
        ':b': new OxmlAttr(':b', OxmlType.DoubleValue),
        ':header': new OxmlAttr(':header', OxmlType.DoubleValue),
        ':footer': new OxmlAttr(':footer', OxmlType.DoubleValue),
    };
    HeaderFooter._C = {
        'cx:oddHeader': OddHeaderXsdstring,
        'cx:oddFooter': OddFooterXsdstring,
        'cx:evenHeader': EvenHeaderXsdstring,
        'cx:evenFooter': EvenFooterXsdstring,
        'cx:firstHeader': FirstHeaderXsdstring,
        'cx:firstFooter': FirstFooterXsdstring,
    };
    HeaderFooter._D = {
        ':alignWithMargins': new OxmlAttr(':alignWithMargins', OxmlType.BooleanValue),
        ':differentOddEven': new OxmlAttr(':differentOddEven', OxmlType.BooleanValue),
        ':differentFirst': new OxmlAttr(':differentFirst', OxmlType.BooleanValue),
    };
    FormatOverride._C = {
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    FormatOverride._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    Legend._C = {
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:extLst': ExtensionList,
    };
    Legend._D = {
        ':pos': new OxmlAttr(':pos', OxmlType.EnumValue, SidePosArray),
        ':align': new OxmlAttr(':align', OxmlType.EnumValue, PosAlignArray),
        ':overlay': new OxmlAttr(':overlay', OxmlType.BooleanValue),
    };
    PlotArea._C = {
        'cx:plotAreaRegion': PlotAreaRegion,
        'cx:axis': Axis,
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    ChartTitle._C = {
        'cx:tx': Text,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:extLst': ExtensionList,
    };
    ChartTitle._D = {
        ':pos': new OxmlAttr(':pos', OxmlType.EnumValue, SidePosArray),
        ':align': new OxmlAttr(':align', OxmlType.EnumValue, PosAlignArray),
        ':overlay': new OxmlAttr(':overlay', OxmlType.BooleanValue),
    };
    Axis._C = {
        'cx:catScaling': CategoryAxisScaling,
        'cx:valScaling': ValueAxisScaling,
        'cx:title': AxisTitle,
        'cx:units': AxisUnits,
        'cx:majorGridlines': MajorGridlinesGridlines,
        'cx:minorGridlines': MinorGridlinesGridlines,
        'cx:majorTickMarks': MajorTickMarksTickMarks,
        'cx:minorTickMarks': MinorTickMarksTickMarks,
        'cx:tickLabels': TickLabels,
        'cx:numFmt': NumberFormat,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:extLst': ExtensionList,
    };
    Axis._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
    };
    PlotAreaRegion._C = {
        'cx:plotSurface': PlotSurface,
        'cx:series': Series,
        'cx:extLst': ExtensionList,
    };
    Series._C = {
        'cx:tx': Text,
        'cx:spPr': ShapeProperties,
        'cx:valueColors': ValueColors,
        'cx:valueColorPositions': ValueColorPositions,
        'cx:dataPt': DataPoint,
        'cx:dataLabels': DataLabels,
        'cx:dataId': DataId,
        'cx:layoutPr': SeriesLayoutProperties,
        'cx:axisId': AxisId,
        'cx:extLst': ExtensionList,
    };
    Series._D = {
        ':layoutId': new OxmlAttr(':layoutId', OxmlType.EnumValue, SeriesLayoutArray),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':ownerIdx': new OxmlAttr(':ownerIdx', OxmlType.UInt32Value),
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':formatIdx': new OxmlAttr(':formatIdx', OxmlType.UInt32Value),
    };
    PlotSurface._C = {
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    SeriesLayoutProperties._C = {
        'cx:parentLabelLayout': ParentLabelLayout,
        'cx:regionLabelLayout': RegionLabelLayout,
        'cx:visibility': SeriesElementVisibilities,
        'cx:aggregation': Aggregation,
        'cx:binning': Binning,
        'cx:geography': Geography,
        'cx:statistics': Statistics,
        'cx:subtotals': Subtotals,
        'cx:extLst': ExtensionList,
    };
    DataId._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    DataLabels._C = {
        'cx:numFmt': NumberFormat,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:visibility': DataLabelVisibilities,
        'cx:separator': SeparatorXsdstring,
        'cx:dataLabel': DataLabel,
        'cx:dataLabelHidden': DataLabelHidden,
        'cx:extLst': ExtensionList,
    };
    DataLabels._D = {
        ':pos': new OxmlAttr(':pos', OxmlType.EnumValue, DataLabelPosArray),
    };
    DataPoint._C = {
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    DataPoint._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    ValueColorPositions._C = {
        'cx:min': MinValueColorEndPosition,
        'cx:mid': ValueColorMiddlePosition,
        'cx:max': MaxValueColorEndPosition,
    };
    ValueColorPositions._D = {
        ':count': new OxmlAttr(':count', OxmlType.Int32Value),
    };
    ValueColors._C = {
        'cx:minColor': MinColorSolidColorFillProperties,
        'cx:midColor': MidColorSolidColorFillProperties,
        'cx:maxColor': MaxColorSolidColorFillProperties,
    };
    DataLabelHidden._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    DataLabel._C = {
        'cx:numFmt': NumberFormat,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:visibility': DataLabelVisibilities,
        'cx:separator': SeparatorXsdstring,
        'cx:extLst': ExtensionList,
    };
    DataLabel._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
        ':pos': new OxmlAttr(':pos', OxmlType.EnumValue, DataLabelPosArray),
    };
    DataLabelVisibilities._D = {
        ':seriesName': new OxmlAttr(':seriesName', OxmlType.BooleanValue),
        ':categoryName': new OxmlAttr(':categoryName', OxmlType.BooleanValue),
        ':value': new OxmlAttr(':value', OxmlType.BooleanValue),
    };
    ValueColorMiddlePosition._C = {
        'cx:number': NumberColorPosition,
        'cx:percent': PercentageColorPosition,
    };
    OpenXmlValueColorEndPositionElement._C = {
        'cx:extremeValue': ExtremeValueColorPosition,
        'cx:number': NumberColorPosition,
        'cx:percent': PercentageColorPosition,
    };
    MaxValueColorEndPosition._C = {
        'cx:extremeValue': ExtremeValueColorPosition,
        'cx:number': NumberColorPosition,
        'cx:percent': PercentageColorPosition,
    };
    MinValueColorEndPosition._C = {
        'cx:extremeValue': ExtremeValueColorPosition,
        'cx:number': NumberColorPosition,
        'cx:percent': PercentageColorPosition,
    };
    PercentageColorPosition._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    NumberColorPosition._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    Subtotals._C = {
        'cx:idx': UnsignedIntegerType,
    };
    Statistics._D = {
        ':quartileMethod': new OxmlAttr(':quartileMethod', OxmlType.EnumValue, QuartileMethodArray),
    };
    Geography._C = {
        'cx:geoCache': GeoCache,
    };
    Geography._D = {
        ':projectionType': new OxmlAttr(':projectionType', OxmlType.EnumValue, GeoProjectionTypeArray),
        ':viewedRegionType': new OxmlAttr(':viewedRegionType', OxmlType.EnumValue, GeoMappingLevelArray),
        ':cultureLanguage': new OxmlAttr(':cultureLanguage', OxmlType.StringValue),
        ':cultureRegion': new OxmlAttr(':cultureRegion', OxmlType.StringValue),
        ':attribution': new OxmlAttr(':attribution', OxmlType.StringValue),
    };
    Binning._C = {
        'cx:binSize': Xsddouble,
        'cx:binCount': BinCountXsdunsignedInt,
    };
    Binning._D = {
        ':intervalClosed': new OxmlAttr(':intervalClosed', OxmlType.EnumValue, IntervalClosedSideArray),
        ':underflow': new OxmlAttr(':underflow', OxmlType.StringValue),
        ':overflow': new OxmlAttr(':overflow', OxmlType.StringValue),
    };
    SeriesElementVisibilities._D = {
        ':connectorLines': new OxmlAttr(':connectorLines', OxmlType.BooleanValue),
        ':meanLine': new OxmlAttr(':meanLine', OxmlType.BooleanValue),
        ':meanMarker': new OxmlAttr(':meanMarker', OxmlType.BooleanValue),
        ':nonoutliers': new OxmlAttr(':nonoutliers', OxmlType.BooleanValue),
        ':outliers': new OxmlAttr(':outliers', OxmlType.BooleanValue),
    };
    RegionLabelLayout._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, RegionLabelLayoutEnumArray),
    };
    ParentLabelLayout._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ParentLabelLayoutValArray),
    };
    GeoCache._C = {
        'cx:binary': Xsdbase64Binary,
        'cx:clear': Clear,
    };
    GeoCache._D = {
        ':provider': new OxmlAttr(':provider', OxmlType.StringValue),
    };
    Clear._C = {
        'cx:geoLocationQueryResults': GeoLocationQueryResults,
        'cx:geoDataEntityQueryResults': GeoDataEntityQueryResults,
        'cx:geoDataPointToEntityQueryResults': GeoDataPointToEntityQueryResults,
        'cx:geoChildEntitiesQueryResults': GeoChildEntitiesQueryResults,
        'cx:geoParentEntitiesQueryResults': GeoParentEntitiesQueryResults,
    };
    GeoParentEntitiesQueryResults._C = {
        'cx:geoParentEntitiesQueryResult': GeoParentEntitiesQueryResult,
    };
    GeoChildEntitiesQueryResults._C = {
        'cx:geoChildEntitiesQueryResult': GeoChildEntitiesQueryResult,
    };
    GeoDataPointToEntityQueryResults._C = {
        'cx:geoDataPointToEntityQueryResult': GeoDataPointToEntityQueryResult,
    };
    GeoDataEntityQueryResults._C = {
        'cx:geoDataEntityQueryResult': GeoDataEntityQueryResult,
    };
    GeoLocationQueryResults._C = {
        'cx:geoLocationQueryResult': GeoLocationQueryResult,
    };
    GeoParentEntitiesQueryResult._C = {
        'cx:geoParentEntitiesQuery': GeoParentEntitiesQuery,
        'cx:geoEntity': GeoEntity,
        'cx:geoParentEntity': GeoParentEntity,
    };
    GeoParentEntity._D = {
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
    };
    GeoEntity._D = {
        ':entityName': new OxmlAttr(':entityName', OxmlType.StringValue),
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
    };
    GeoParentEntitiesQuery._D = {
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
    };
    GeoChildEntitiesQueryResult._C = {
        'cx:geoChildEntitiesQuery': GeoChildEntitiesQuery,
        'cx:geoChildEntities': GeoChildEntities,
    };
    GeoChildEntities._C = {
        'cx:geoHierarchyEntity': GeoHierarchyEntity,
    };
    GeoChildEntitiesQuery._C = {
        'cx:geoChildTypes': GeoChildTypes,
    };
    GeoChildEntitiesQuery._D = {
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
    };
    GeoHierarchyEntity._D = {
        ':entityName': new OxmlAttr(':entityName', OxmlType.StringValue),
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
    };
    GeoChildTypes._C = {
        'cx:entityType': EntityType,
    };
    GeoDataPointToEntityQueryResult._C = {
        'cx:geoDataPointQuery': GeoDataPointQuery,
        'cx:geoDataPointToEntityQuery': GeoDataPointToEntityQuery,
    };
    GeoDataPointToEntityQuery._D = {
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
    };
    GeoDataPointQuery._D = {
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
        ':latitude': new OxmlAttr(':latitude', OxmlType.DoubleValue),
        ':longitude': new OxmlAttr(':longitude', OxmlType.DoubleValue),
    };
    GeoDataEntityQueryResult._C = {
        'cx:geoDataEntityQuery': GeoDataEntityQuery,
        'cx:geoData': GeoData,
    };
    GeoData._C = {
        'cx:geoPolygons': GeoPolygons,
        'cx:copyrights': Copyrights,
    };
    GeoData._D = {
        ':entityName': new OxmlAttr(':entityName', OxmlType.StringValue),
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
        ':east': new OxmlAttr(':east', OxmlType.DoubleValue),
        ':west': new OxmlAttr(':west', OxmlType.DoubleValue),
        ':north': new OxmlAttr(':north', OxmlType.DoubleValue),
        ':south': new OxmlAttr(':south', OxmlType.DoubleValue),
    };
    GeoDataEntityQuery._D = {
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
        ':entityId': new OxmlAttr(':entityId', OxmlType.StringValue),
    };
    Copyrights._C = {
        'cx:copyright': CopyrightXsdstring,
    };
    GeoPolygons._C = {
        'cx:geoPolygon': GeoPolygon,
    };
    GeoPolygon._D = {
        ':polygonId': new OxmlAttr(':polygonId', OxmlType.StringValue),
        ':numPoints': new OxmlAttr(':numPoints', OxmlType.IntegerValue),
        ':pcaRings': new OxmlAttr(':pcaRings', OxmlType.StringValue),
    };
    GeoLocationQueryResult._C = {
        'cx:geoLocationQuery': GeoLocationQuery,
        'cx:geoLocations': GeoLocations,
    };
    GeoLocations._C = {
        'cx:geoLocation': GeoLocation,
    };
    GeoLocationQuery._D = {
        ':countryRegion': new OxmlAttr(':countryRegion', OxmlType.StringValue),
        ':adminDistrict1': new OxmlAttr(':adminDistrict1', OxmlType.StringValue),
        ':adminDistrict2': new OxmlAttr(':adminDistrict2', OxmlType.StringValue),
        ':postalCode': new OxmlAttr(':postalCode', OxmlType.StringValue),
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
    };
    GeoLocation._C = {
        'cx:address': Address,
    };
    GeoLocation._D = {
        ':latitude': new OxmlAttr(':latitude', OxmlType.DoubleValue),
        ':longitude': new OxmlAttr(':longitude', OxmlType.DoubleValue),
        ':entityName': new OxmlAttr(':entityName', OxmlType.StringValue),
        ':entityType': new OxmlAttr(':entityType', OxmlType.EnumValue, EntityTypeEnumArray),
    };
    Address._D = {
        ':address1': new OxmlAttr(':address1', OxmlType.StringValue),
        ':countryRegion': new OxmlAttr(':countryRegion', OxmlType.StringValue),
        ':adminDistrict1': new OxmlAttr(':adminDistrict1', OxmlType.StringValue),
        ':adminDistrict2': new OxmlAttr(':adminDistrict2', OxmlType.StringValue),
        ':postalCode': new OxmlAttr(':postalCode', OxmlType.StringValue),
        ':locality': new OxmlAttr(':locality', OxmlType.StringValue),
        ':isoCountryCode': new OxmlAttr(':isoCountryCode', OxmlType.StringValue),
    };
    NumberFormat._D = {
        ':formatCode': new OxmlAttr(':formatCode', OxmlType.StringValue),
        ':sourceLinked': new OxmlAttr(':sourceLinked', OxmlType.BooleanValue),
    };
    TickLabels._C = {
        'cx:extLst': ExtensionList,
    };
    OpenXmlTickMarksElement._C = {
        'cx:extLst': ExtensionList,
    };
    OpenXmlTickMarksElement._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, TickMarksTypeArray),
    };
    MinorTickMarksTickMarks._C = {
        'cx:extLst': ExtensionList,
    };
    MajorTickMarksTickMarks._C = {
        'cx:extLst': ExtensionList,
    };
    OpenXmlGridlinesElement._C = {
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    MinorGridlinesGridlines._C = {
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    MajorGridlinesGridlines._C = {
        'cx:spPr': ShapeProperties,
        'cx:extLst': ExtensionList,
    };
    AxisUnits._C = {
        'cx:unitsLabel': AxisUnitsLabel,
        'cx:extLst': ExtensionList,
    };
    AxisUnits._D = {
        ':unit': new OxmlAttr(':unit', OxmlType.EnumValue, AxisUnitArray),
    };
    AxisTitle._C = {
        'cx:tx': Text,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:extLst': ExtensionList,
    };
    ValueAxisScaling._D = {
        ':max': new OxmlAttr(':max', OxmlType.StringValue),
        ':min': new OxmlAttr(':min', OxmlType.StringValue),
        ':majorUnit': new OxmlAttr(':majorUnit', OxmlType.StringValue),
        ':minorUnit': new OxmlAttr(':minorUnit', OxmlType.StringValue),
    };
    CategoryAxisScaling._D = {
        ':gapWidth': new OxmlAttr(':gapWidth', OxmlType.StringValue),
    };
    AxisUnitsLabel._C = {
        'cx:tx': Text,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:extLst': ExtensionList,
    };
    ShapeProperties._C = {
        'a:xfrm': ATransform2D,
        'a:custGeom': ACustomGeometry,
        'a:prstGeom': APresetGeometry,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:extLst': AShapePropertiesExtensionList,
    };
    ShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    Text._C = {
        'cx:txData': TextData,
        'cx:rich': RichTextBody,
    };
    TextBodyType._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    TxPrTextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    RichTextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    TextData._C = {
        'cx:f': Formula,
        'cx:v': VXsdstring,
    };
    Data._C = {
        'cx:numDim': NumericDimension,
        'cx:strDim': StringDimension,
        'cx:extLst': ExtensionList,
    };
    Data._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
    };
    ExternalData._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        'cx:autoUpdate': new OxmlAttr('cx:autoUpdate', OxmlType.BooleanValue),
    };
    ExtensionList._C = {
        'cx:ext': Extension2,
    };
    StringDimension._C = {
        'cx:f': Formula,
        'cx:nf': NfFormula,
        'cx:lvl': StringLevel,
    };
    StringDimension._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, StringDimensionTypeArray),
    };
    NumericDimension._C = {
        'cx:f': Formula,
        'cx:nf': NfFormula,
        'cx:lvl': NumericLevel,
    };
    NumericDimension._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, NumericDimensionTypeArray),
    };
    NumericLevel._C = {
        'cx:pt': NumericValue,
    };
    NumericLevel._D = {
        ':ptCount': new OxmlAttr(':ptCount', OxmlType.UInt32Value),
        ':formatCode': new OxmlAttr(':formatCode', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    NumericValue._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    StringLevel._C = {
        'cx:pt': ChartStringValue,
    };
    StringLevel._D = {
        ':ptCount': new OxmlAttr(':ptCount', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    OpenXmlFormulaElement._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, FormulaDirectionArray),
    };
    ChartStringValue._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    OpenXmlSolidColorFillPropertiesElement._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    MaxColorSolidColorFillProperties._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    MidColorSolidColorFillProperties._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    MinColorSolidColorFillProperties._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    Extension2._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    RelId._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ChartSpace._C = {
        'cx:chartData': ChartData,
        'cx:chart': Chart,
        'cx:spPr': ShapeProperties,
        'cx:txPr': TxPrTextBody,
        'cx:clrMapOvr': ColorMappingType,
        'cx:fmtOvrs': FormatOverrides,
        'cx:printSettings': PrintSettings,
        'cx:extLst': ExtensionList,
    };
    return {
        prefix: 'cx',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2014/chartex',
    };
}
