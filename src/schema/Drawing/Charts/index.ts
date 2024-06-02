import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { ByteValue } from '../../../framework/types/ByteValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { UInt16Value } from '../../../framework/types/UInt16Value';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { SByteValue } from '../../../framework/types/SByteValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { ColorSchemeIndexValues, ColorSchemeIndexValuesArray } from '../../Drawing';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';import { BooleanFalse as C16r3BooleanFalse } from '../../Office2019/Drawing/Chart';
import { PivotOptions as C14PivotOptions } from '../../Office2010/Drawing/Charts';
import { SketchOptions as C14SketchOptions } from '../../Office2010/Drawing/Charts';
import { PivotSource as C15PivotSource } from '../../Office2013/Drawing/Chart';
import { ExtensionList as AExtensionList } from '../../Drawing';
import { InvertSolidFillFormat as C14InvertSolidFillFormat } from '../../Office2010/Drawing/Charts';
import { FilteredCategoryTitle as C15FilteredCategoryTitle } from '../../Office2013/Drawing/Chart';
import { DataLabelsRange as C15DataLabelsRange } from '../../Office2013/Drawing/Chart';
import { CategoryFilterExceptions as C15CategoryFilterExceptions } from '../../Office2013/Drawing/Chart';
import { FilteredSeriesTitle as C15FilteredSeriesTitle } from '../../Office2013/Drawing/Chart';
import { NumberingFormat as C15NumberingFormat } from '../../Office2013/Drawing/Chart';
import { FilteredSurfaceSeries as C15FilteredSurfaceSeries } from '../../Office2013/Drawing/Chart';
import { FilteredBubbleSeries as C15FilteredBubbleSeries } from '../../Office2013/Drawing/Chart';
import { FilteredAreaSeries as C15FilteredAreaSeries } from '../../Office2013/Drawing/Chart';
import { FilteredBarSeries as C15FilteredBarSeries } from '../../Office2013/Drawing/Chart';
import { FilteredRadarSeries as C15FilteredRadarSeries } from '../../Office2013/Drawing/Chart';
import { FilteredScatterSeries as C15FilteredScatterSeries } from '../../Office2013/Drawing/Chart';
import { FilteredLineSeriesExtension as C15FilteredLineSeriesExtension } from '../../Office2013/Drawing/Chart';
import { ChartText as C15ChartText } from '../../Office2013/Drawing/Chart';
import { DataLabelFieldTable as C15DataLabelFieldTable } from '../../Office2013/Drawing/Chart';
import { ShowDataLabelsRange as C15ShowDataLabelsRange } from '../../Office2013/Drawing/Chart';
import { ShapeProperties as C15ShapeProperties } from '../../Office2013/Drawing/Chart';
import { Layout as C15Layout } from '../../Office2013/Drawing/Chart';
import { ShowLeaderLines as C15ShowLeaderLines } from '../../Office2013/Drawing/Chart';
import { LeaderLines as C15LeaderLines } from '../../Office2013/Drawing/Chart';
import { ExceptionForSave as C15ExceptionForSave } from '../../Office2013/Drawing/Chart';
import { FullReference as C15FullReference } from '../../Office2013/Drawing/Chart';
import { LevelReference as C15LevelReference } from '../../Office2013/Drawing/Chart';
import { FormulaReference as C15FormulaReference } from '../../Office2013/Drawing/Chart';
import { AutoGeneneratedCategories as C15AutoGeneneratedCategories } from '../../Office2013/Drawing/Chart';
import { FilteredPieSeries as C15FilteredPieSeries } from '../../Office2013/Drawing/Chart';
import { Transform2D as ATransform2D } from '../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../Drawing';
import { NoFill as ANoFill } from '../../Drawing';
import { SolidFill as ASolidFill } from '../../Drawing';
import { GradientFill as AGradientFill } from '../../Drawing';
import { BlipFill as ABlipFill } from '../../Drawing';
import { PatternFill as APatternFill } from '../../Drawing';
import { GroupFill as AGroupFill } from '../../Drawing';
import { Outline as AOutline } from '../../Drawing';
import { EffectList as AEffectList } from '../../Drawing';
import { EffectDag as AEffectDag } from '../../Drawing';
import { Scene3DType as AScene3DType } from '../../Drawing';
import { Shape3DType as AShape3DType } from '../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../Drawing';
import { RelativeAnchorSize as CdrRelativeAnchorSize } from '../../Drawing/ChartDrawing';
import { AbsoluteAnchorSize as CdrAbsoluteAnchorSize } from '../../Drawing/ChartDrawing';
import { Style as C14Style } from '../../Office2010/Drawing/Charts';
import { BodyProperties as ABodyProperties } from '../../Drawing';
import { ListStyle as AListStyle } from '../../Drawing';
import { Paragraph as AParagraph } from '../../Drawing';


export enum LayoutTargetValues {
    /** Inner. Serialized value: `inner` */
    Inner = 'inner',
    /** Outer. Serialized value: `outer` */
    Outer = 'outer',
}

export const LayoutTargetValuesArray = [
    LayoutTargetValues.Inner,
    LayoutTargetValues.Outer,
] as const;

export enum LayoutModeValues {
    /** Edge. Serialized value: `edge` */
    Edge = 'edge',
    /** Factor. Serialized value: `factor` */
    Factor = 'factor',
}

export const LayoutModeValuesArray = [
    LayoutModeValues.Edge,
    LayoutModeValues.Factor,
] as const;

export enum SizeRepresentsValues {
    /** Bubble Size Represents Area. Serialized value: `area` */
    Area = 'area',
    /** Bubble Size Represents Width. Serialized value: `w` */
    Width = 'w',
}

export const SizeRepresentsValuesArray = [
    SizeRepresentsValues.Area,
    SizeRepresentsValues.Width,
] as const;

export enum LabelAlignmentValues {
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
}

export const LabelAlignmentValuesArray = [
    LabelAlignmentValues.Center,
    LabelAlignmentValues.Left,
    LabelAlignmentValues.Right,
] as const;

export enum DataLabelPositionValues {
    /** Best Fit. Serialized value: `bestFit` */
    BestFit = 'bestFit',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Inside Base. Serialized value: `inBase` */
    InsideBase = 'inBase',
    /** Inside End. Serialized value: `inEnd` */
    InsideEnd = 'inEnd',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Outside End. Serialized value: `outEnd` */
    OutsideEnd = 'outEnd',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** Top. Serialized value: `t` */
    Top = 't',
}

export const DataLabelPositionValuesArray = [
    DataLabelPositionValues.BestFit,
    DataLabelPositionValues.Bottom,
    DataLabelPositionValues.Center,
    DataLabelPositionValues.InsideBase,
    DataLabelPositionValues.InsideEnd,
    DataLabelPositionValues.Left,
    DataLabelPositionValues.OutsideEnd,
    DataLabelPositionValues.Right,
    DataLabelPositionValues.Top,
] as const;

export enum TrendlineValues {
    /** Exponential. Serialized value: `exp` */
    Exponential = 'exp',
    /** Linear. Serialized value: `linear` */
    Linear = 'linear',
    /** Logarithmic. Serialized value: `log` */
    Logarithmic = 'log',
    /** Moving Average. Serialized value: `movingAvg` */
    MovingAverage = 'movingAvg',
    /** Polynomial. Serialized value: `poly` */
    Polynomial = 'poly',
    /** Power. Serialized value: `power` */
    Power = 'power',
}

export const TrendlineValuesArray = [
    TrendlineValues.Exponential,
    TrendlineValues.Linear,
    TrendlineValues.Logarithmic,
    TrendlineValues.MovingAverage,
    TrendlineValues.Polynomial,
    TrendlineValues.Power,
] as const;

export enum ErrorBarDirectionValues {
    /** X. Serialized value: `x` */
    X = 'x',
    /** Y. Serialized value: `y` */
    Y = 'y',
}

export const ErrorBarDirectionValuesArray = [
    ErrorBarDirectionValues.X,
    ErrorBarDirectionValues.Y,
] as const;

export enum ErrorBarValues {
    /** Both. Serialized value: `both` */
    Both = 'both',
    /** Minus. Serialized value: `minus` */
    Minus = 'minus',
    /** Plus. Serialized value: `plus` */
    Plus = 'plus',
}

export const ErrorBarValuesArray = [
    ErrorBarValues.Both,
    ErrorBarValues.Minus,
    ErrorBarValues.Plus,
] as const;

export enum ErrorValues {
    /** Custom Error Bars. Serialized value: `cust` */
    Custom = 'cust',
    /** Fixed Value. Serialized value: `fixedVal` */
    FixedValue = 'fixedVal',
    /** Percentage. Serialized value: `percentage` */
    Percentage = 'percentage',
    /** Standard Deviation. Serialized value: `stdDev` */
    StandardDeviation = 'stdDev',
    /** Standard Error. Serialized value: `stdErr` */
    StandardError = 'stdErr',
}

export const ErrorValuesArray = [
    ErrorValues.Custom,
    ErrorValues.FixedValue,
    ErrorValues.Percentage,
    ErrorValues.StandardDeviation,
    ErrorValues.StandardError,
] as const;

export enum GroupingValues {
    /** 100% Stacked. Serialized value: `percentStacked` */
    PercentStacked = 'percentStacked',
    /** Standard. Serialized value: `standard` */
    Standard = 'standard',
    /** Stacked. Serialized value: `stacked` */
    Stacked = 'stacked',
}

export const GroupingValuesArray = [
    GroupingValues.PercentStacked,
    GroupingValues.Standard,
    GroupingValues.Stacked,
] as const;

export enum RadarStyleValues {
    /** Standard. Serialized value: `standard` */
    Standard = 'standard',
    /** Marker. Serialized value: `marker` */
    Marker = 'marker',
    /** Filled. Serialized value: `filled` */
    Filled = 'filled',
}

export const RadarStyleValuesArray = [
    RadarStyleValues.Standard,
    RadarStyleValues.Marker,
    RadarStyleValues.Filled,
] as const;

export enum BarGroupingValues {
    /** 100% Stacked. Serialized value: `percentStacked` */
    PercentStacked = 'percentStacked',
    /** Clustered. Serialized value: `clustered` */
    Clustered = 'clustered',
    /** Standard. Serialized value: `standard` */
    Standard = 'standard',
    /** Stacked. Serialized value: `stacked` */
    Stacked = 'stacked',
}

export const BarGroupingValuesArray = [
    BarGroupingValues.PercentStacked,
    BarGroupingValues.Clustered,
    BarGroupingValues.Standard,
    BarGroupingValues.Stacked,
] as const;

export enum BarDirectionValues {
    /** Bar. Serialized value: `bar` */
    Bar = 'bar',
    /** Column. Serialized value: `col` */
    Column = 'col',
}

export const BarDirectionValuesArray = [
    BarDirectionValues.Bar,
    BarDirectionValues.Column,
] as const;

export enum ShapeValues {
    /** Cone. Serialized value: `cone` */
    Cone = 'cone',
    /** Cone to Max. Serialized value: `coneToMax` */
    ConeToMax = 'coneToMax',
    /** Box. Serialized value: `box` */
    Box = 'box',
    /** Cylinder. Serialized value: `cylinder` */
    Cylinder = 'cylinder',
    /** Pyramid. Serialized value: `pyramid` */
    Pyramid = 'pyramid',
    /** Pyramid to Maximum. Serialized value: `pyramidToMax` */
    PyramidToMaximum = 'pyramidToMax',
}

export const ShapeValuesArray = [
    ShapeValues.Cone,
    ShapeValues.ConeToMax,
    ShapeValues.Box,
    ShapeValues.Cylinder,
    ShapeValues.Pyramid,
    ShapeValues.PyramidToMaximum,
] as const;

export enum OfPieValues {
    /** Pie. Serialized value: `pie` */
    Pie = 'pie',
    /** Bar. Serialized value: `bar` */
    Bar = 'bar',
}

export const OfPieValuesArray = [
    OfPieValues.Pie,
    OfPieValues.Bar,
] as const;

export enum AxisPositionValues {
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** Top. Serialized value: `t` */
    Top = 't',
}

export const AxisPositionValuesArray = [
    AxisPositionValues.Bottom,
    AxisPositionValues.Left,
    AxisPositionValues.Right,
    AxisPositionValues.Top,
] as const;

export enum CrossesValues {
    /** Axis Crosses at Zero. Serialized value: `autoZero` */
    AutoZero = 'autoZero',
    /** Maximum. Serialized value: `max` */
    Maximum = 'max',
    /** Minimum. Serialized value: `min` */
    Minimum = 'min',
}

export const CrossesValuesArray = [
    CrossesValues.AutoZero,
    CrossesValues.Maximum,
    CrossesValues.Minimum,
] as const;

export enum CrossBetweenValues {
    /** Between. Serialized value: `between` */
    Between = 'between',
    /** Midpoint of Category. Serialized value: `midCat` */
    MidpointCategory = 'midCat',
}

export const CrossBetweenValuesArray = [
    CrossBetweenValues.Between,
    CrossBetweenValues.MidpointCategory,
] as const;

export enum TickMarkValues {
    /** Cross. Serialized value: `cross` */
    Cross = 'cross',
    /** Inside. Serialized value: `in` */
    Inside = 'in',
    /** None. Serialized value: `none` */
    None = 'none',
    /** Outside. Serialized value: `out` */
    Outside = 'out',
}

export const TickMarkValuesArray = [
    TickMarkValues.Cross,
    TickMarkValues.Inside,
    TickMarkValues.None,
    TickMarkValues.Outside,
] as const;

export enum TickLabelPositionValues {
    /** High. Serialized value: `high` */
    High = 'high',
    /** Low. Serialized value: `low` */
    Low = 'low',
    /** Next To. Serialized value: `nextTo` */
    NextTo = 'nextTo',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const TickLabelPositionValuesArray = [
    TickLabelPositionValues.High,
    TickLabelPositionValues.Low,
    TickLabelPositionValues.NextTo,
    TickLabelPositionValues.None,
] as const;

export enum TimeUnitValues {
    /** Days. Serialized value: `days` */
    Days = 'days',
    /** Months. Serialized value: `months` */
    Months = 'months',
    /** Years. Serialized value: `years` */
    Years = 'years',
}

export const TimeUnitValuesArray = [
    TimeUnitValues.Days,
    TimeUnitValues.Months,
    TimeUnitValues.Years,
] as const;

export enum BuiltInUnitValues {
    /** Hundreds. Serialized value: `hundreds` */
    Hundreds = 'hundreds',
    /** Thousands. Serialized value: `thousands` */
    Thousands = 'thousands',
    /** Ten Thousands. Serialized value: `tenThousands` */
    TenThousands = 'tenThousands',
    /** Hundred Thousands. Serialized value: `hundredThousands` */
    HundredThousands = 'hundredThousands',
    /** Millions. Serialized value: `millions` */
    Millions = 'millions',
    /** Ten Millions. Serialized value: `tenMillions` */
    TenMillions = 'tenMillions',
    /** Hundred Millions. Serialized value: `hundredMillions` */
    HundredMillions = 'hundredMillions',
    /** Billions. Serialized value: `billions` */
    Billions = 'billions',
    /** Trillions. Serialized value: `trillions` */
    Trillions = 'trillions',
}

export const BuiltInUnitValuesArray = [
    BuiltInUnitValues.Hundreds,
    BuiltInUnitValues.Thousands,
    BuiltInUnitValues.TenThousands,
    BuiltInUnitValues.HundredThousands,
    BuiltInUnitValues.Millions,
    BuiltInUnitValues.TenMillions,
    BuiltInUnitValues.HundredMillions,
    BuiltInUnitValues.Billions,
    BuiltInUnitValues.Trillions,
] as const;

export enum PictureFormatValues {
    /** Stretch. Serialized value: `stretch` */
    Stretch = 'stretch',
    /** Stack. Serialized value: `stack` */
    Stack = 'stack',
    /** Stack and Scale. Serialized value: `stackScale` */
    StackScale = 'stackScale',
}

export const PictureFormatValuesArray = [
    PictureFormatValues.Stretch,
    PictureFormatValues.Stack,
    PictureFormatValues.StackScale,
] as const;

export enum OrientationValues {
    /** Maximum to Minimum. Serialized value: `maxMin` */
    MaxMin = 'maxMin',
    /** Minimum to Maximum. Serialized value: `minMax` */
    MinMax = 'minMax',
}

export const OrientationValuesArray = [
    OrientationValues.MaxMin,
    OrientationValues.MinMax,
] as const;

export enum LegendPositionValues {
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Top Right. Serialized value: `tr` */
    TopRight = 'tr',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** Top. Serialized value: `t` */
    Top = 't',
}

export const LegendPositionValuesArray = [
    LegendPositionValues.Bottom,
    LegendPositionValues.TopRight,
    LegendPositionValues.Left,
    LegendPositionValues.Right,
    LegendPositionValues.Top,
] as const;

export enum DisplayBlanksAsValues {
    /** Span. Serialized value: `span` */
    Span = 'span',
    /** Gap. Serialized value: `gap` */
    Gap = 'gap',
    /** Zero. Serialized value: `zero` */
    Zero = 'zero',
}

export const DisplayBlanksAsValuesArray = [
    DisplayBlanksAsValues.Span,
    DisplayBlanksAsValues.Gap,
    DisplayBlanksAsValues.Zero,
] as const;

export enum PageSetupOrientationValues {
    /** Default Page Orientation. Serialized value: `default` */
    Default = 'default',
    /** Portrait Page. Serialized value: `portrait` */
    Portrait = 'portrait',
    /** Landscape Page. Serialized value: `landscape` */
    Landscape = 'landscape',
}

export const PageSetupOrientationValuesArray = [
    PageSetupOrientationValues.Default,
    PageSetupOrientationValues.Portrait,
    PageSetupOrientationValues.Landscape,
] as const;

export enum ScatterStyleValues {
    /** Line. Serialized value: `line` */
    Line = 'line',
    /** Line with Markers. Serialized value: `lineMarker` */
    LineMarker = 'lineMarker',
    /** Marker. Serialized value: `marker` */
    Marker = 'marker',
    /** Smooth. Serialized value: `smooth` */
    Smooth = 'smooth',
    /** Smooth with Markers. Serialized value: `smoothMarker` */
    SmoothMarker = 'smoothMarker',
}

export const ScatterStyleValuesArray = [
    ScatterStyleValues.Line,
    ScatterStyleValues.LineMarker,
    ScatterStyleValues.Marker,
    ScatterStyleValues.Smooth,
    ScatterStyleValues.SmoothMarker,
] as const;

export enum MarkerStyleValues {
    /** undefined. Serialized value: `auto` */
    Auto = 'auto',
    /** Circle. Serialized value: `circle` */
    Circle = 'circle',
    /** Dash. Serialized value: `dash` */
    Dash = 'dash',
    /** Diamond. Serialized value: `diamond` */
    Diamond = 'diamond',
    /** Dot. Serialized value: `dot` */
    Dot = 'dot',
    /** None. Serialized value: `none` */
    None = 'none',
    /** Picture. Serialized value: `picture` */
    Picture = 'picture',
    /** Plus. Serialized value: `plus` */
    Plus = 'plus',
    /** Square. Serialized value: `square` */
    Square = 'square',
    /** Star. Serialized value: `star` */
    Star = 'star',
    /** Triangle. Serialized value: `triangle` */
    Triangle = 'triangle',
    /** X. Serialized value: `x` */
    X = 'x',
}

export const MarkerStyleValuesArray = [
    MarkerStyleValues.Auto,
    MarkerStyleValues.Circle,
    MarkerStyleValues.Dash,
    MarkerStyleValues.Diamond,
    MarkerStyleValues.Dot,
    MarkerStyleValues.None,
    MarkerStyleValues.Picture,
    MarkerStyleValues.Plus,
    MarkerStyleValues.Square,
    MarkerStyleValues.Star,
    MarkerStyleValues.Triangle,
    MarkerStyleValues.X,
] as const;

export enum SplitValues {
    /** Custom Split. Serialized value: `cust` */
    Custom = 'cust',
    /** Split by Percentage. Serialized value: `percent` */
    Percent = 'percent',
    /** Split by Position. Serialized value: `pos` */
    Position = 'pos',
    /** Split by Value. Serialized value: `val` */
    Value = 'val',
}

export const SplitValuesArray = [
    SplitValues.Custom,
    SplitValues.Percent,
    SplitValues.Position,
    SplitValues.Value,
] as const;

/** Extensibility container. Serialized as `c:extLst` */
export class ChartExtensionList extends OxmlCompositeElement<DataDisplayOptions16> {

    public static override _Q = 'c:extLst';

}
/** The way that blank cells are plotted on a chart.. Serialized as `c:dispBlanksAs` */
export class DisplayBlanksAs extends OxmlLeafElement {

    public static override _Q = 'c:dispBlanksAs';
    public static override _A = [':val',];
    /** Display Blanks As Value. Serialized as `:val` */
    public get val(): DisplayBlanksAsValues | undefined { return this._g(':val'); }
    public set val(v: DisplayBlanksAsValues | undefined) { this._s(':val', v); }

}
/** Legend data and formatting. Serialized as `c:legend` */
export class Legend extends OxmlCompositeElement<LegendPosition | LegendEntry | Layout | Overlay | ChartShapeProperties | TextProperties | ExtensionList> {

    public static override _Q = 'c:legend';
    /** Legend Position. */
    public get legendPosition(): LegendPosition | undefined { return this._f(LegendPosition); }

}
/** Plot data and formatting. Serialized as `c:plotArea` */
export class PlotArea extends OxmlCompositeElement<Layout | AreaChart | Area3DChart | LineChart | Line3DChart | StockChart | RadarChart | ScatterChart | PieChart | Pie3DChart | DoughnutChart | BarChart | Bar3DChart | OfPieChart | SurfaceChart | Surface3DChart | BubbleChart | ValueAxis | CategoryAxis | DateAxis | SeriesAxis | DataTable | ShapeProperties | ExtensionList> {

    public static override _Q = 'c:plotArea';
    /** Layout. */
    public get layout(): Layout | undefined { return this._f(Layout); }

}
/** Defines the SurfaceType Class. */
export abstract class SurfaceType extends OxmlCompositeElement<Thickness | ShapeProperties | PictureOptions | ExtensionList> {

    /** Thickness. */
    public get thickness(): Thickness | undefined { return this._f(Thickness); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Picture Options. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** 3D back wall formatting. Serialized as `c:backWall` */
export class BackWall extends SurfaceType {

    public static override _Q = 'c:backWall';

}
/** 3D side wall formatting. Serialized as `c:sideWall` */
export class SideWall extends SurfaceType {

    public static override _Q = 'c:sideWall';

}
/** 3D floor formatting. Serialized as `c:floor` */
export class Floor extends SurfaceType {

    public static override _Q = 'c:floor';

}
/** 3D view settings. Serialized as `c:view3D` */
export class View3D extends OxmlCompositeElement<RotateX | HeightPercent | RotateY | DepthPercent | RightAngleAxes | Perspective | ExtensionList> {

    public static override _Q = 'c:view3D';
    /** X Rotation. */
    public get rotateX(): RotateX | undefined { return this._f(RotateX); }
    /** Height Percent. */
    public get heightPercent(): HeightPercent | undefined { return this._f(HeightPercent); }
    /** Y Rotation. */
    public get rotateY(): RotateY | undefined { return this._f(RotateY); }
    /** Depth Percent. */
    public get depthPercent(): DepthPercent | undefined { return this._f(DepthPercent); }
    /** Right Angle Axes. */
    public get rightAngleAxes(): RightAngleAxes | undefined { return this._f(RightAngleAxes); }
    /** Perspective. */
    public get perspective(): Perspective | undefined { return this._f(Perspective); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** pivot chart format persistence data. Serialized as `c:pivotFmts` */
export class PivotFormats extends OxmlCompositeElement<PivotFormat> {

    public static override _Q = 'c:pivotFmts';

}
/** Defines the DataDisplayOptions16 Class. Serialized as `c:ext` */
export class DataDisplayOptions16 extends OxmlCompositeElement<C16r3BooleanFalse> {

    public static override _Q = 'c:ext';
    /** Returns C16r3BooleanFalse. */
    public get booleanFalse(): C16r3BooleanFalse | undefined { return this._f(C16r3BooleanFalse); }

}
/** Defines the ChartSpaceExtension Class. Serialized as `c:ext` */
export class ChartSpaceExtension extends OxmlCompositeElement<C14PivotOptions | C14SketchOptions | C15PivotSource> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C14PivotOptions. */
    public get pivotOptions(): C14PivotOptions | undefined { return this._f(C14PivotOptions); }
    /** Returns C14SketchOptions. */
    public get sketchOptions(): C14SketchOptions | undefined { return this._f(C14SketchOptions); }
    /** Returns C15PivotSource. */
    public get pivotSource(): C15PivotSource | undefined { return this._f(C15PivotSource); }

}
/** Defines the ChartSpaceExtensionList Class. Serialized as `c:extLst` */
export class ChartSpaceExtensionList extends OxmlCompositeElement<ChartSpaceExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the PrintSettings Class. Serialized as `c:printSettings` */
export class PrintSettings extends OxmlCompositeElement<HeaderFooter | PageMargins | PageSetup | LegacyDrawingHeaderFooter> {

    public static override _Q = 'c:printSettings';
    /** Header and Footer. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Page Margins. */
    public get pageMargins(): PageMargins | undefined { return this._f(PageMargins); }
    /** Page Setup. */
    public get pageSetup(): PageSetup | undefined { return this._f(PageSetup); }
    /** Legacy Drawing for Headers and Footers. */
    public get legacyDrawingHeaderFooter(): LegacyDrawingHeaderFooter | undefined { return this._f(LegacyDrawingHeaderFooter); }

}
/** Defines the ExternalData Class. Serialized as `c:externalData` */
export class ExternalData extends OxmlCompositeElement<AutoUpdate> {

    public static override _Q = 'c:externalData';
    public static override _A = ['r:id',];
    /** Relationship Reference. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Update Automatically. */
    public get autoUpdate(): AutoUpdate | undefined { return this._f(AutoUpdate); }

}
/** Defines the Chart Class. Serialized as `c:chart` */
export class Chart extends OxmlCompositeElement<Title | AutoTitleDeleted | PivotFormats | View3D | Floor | SideWall | BackWall | PlotArea | Legend | PlotVisibleOnly | DisplayBlanksAs | ShowDataLabelsOverMaximum | ChartExtensionList> {

    public static override _Q = 'c:chart';
    /** Title data and formatting. */
    public get title(): Title | undefined { return this._f(Title); }
    /** True if the chart automatic title has been deleted.. */
    public get autoTitleDeleted(): AutoTitleDeleted | undefined { return this._f(AutoTitleDeleted); }
    /** pivot chart format persistence data. */
    public get pivotFormats(): PivotFormats | undefined { return this._f(PivotFormats); }
    /** 3D view settings. */
    public get view3D(): View3D | undefined { return this._f(View3D); }
    /** 3D floor formatting. */
    public get floor(): Floor | undefined { return this._f(Floor); }
    /** 3D side wall formatting. */
    public get sideWall(): SideWall | undefined { return this._f(SideWall); }
    /** 3D back wall formatting. */
    public get backWall(): BackWall | undefined { return this._f(BackWall); }
    /** Plot data and formatting. */
    public get plotArea(): PlotArea | undefined { return this._f(PlotArea); }
    /** Legend data and formatting. */
    public get legend(): Legend | undefined { return this._f(Legend); }
    /** True if only visible cells are plotted.. */
    public get plotVisibleOnly(): PlotVisibleOnly | undefined { return this._f(PlotVisibleOnly); }
    /** The way that blank cells are plotted on a chart.. */
    public get displayBlanksAs(): DisplayBlanksAs | undefined { return this._f(DisplayBlanksAs); }
    /** True if we should render datalabels over the maximum scale. */
    public get showDataLabelsOverMaximum(): ShowDataLabelsOverMaximum | undefined { return this._f(ShowDataLabelsOverMaximum); }
    /** Extensibility container. */
    public get chartExtensionList(): ChartExtensionList | undefined { return this._f(ChartExtensionList); }

}
/** Defines the Protection Class. Serialized as `c:protection` */
export class Protection extends OxmlCompositeElement<ChartObject | Data | Formatting | Selection | UserInterface> {

    public static override _Q = 'c:protection';
    /** Chart Object. */
    public get chartObject(): ChartObject | undefined { return this._f(ChartObject); }
    /** Data Cannot Be Changed. */
    public get data(): Data | undefined { return this._f(Data); }
    /** Formatting. */
    public get formatting(): Formatting | undefined { return this._f(Formatting); }
    /** Selection. */
    public get selection(): Selection | undefined { return this._f(Selection); }
    /** User Interface. */
    public get userInterface(): UserInterface | undefined { return this._f(UserInterface); }

}
/** Defines the PivotSource Class. Serialized as `c:pivotSource` */
export class PivotSource extends OxmlCompositeElement<PivotTableName | FormatId | ExtensionList> {

    public static override _Q = 'c:pivotSource';
    /** Pivot Name. */
    public get pivotTableName(): PivotTableName | undefined { return this._f(PivotTableName); }
    /** Format ID. */
    public get formatId(): FormatId | undefined { return this._f(FormatId); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ColorMapOverride Class. Serialized as `c:clrMapOvr` */
export class ColorMapOverride extends OxmlCompositeElement<AExtensionList> {

    public static override _Q = 'c:clrMapOvr';
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
/** Defines the Style Class. Serialized as `c:style` */
export class Style extends OxmlLeafElement {

    public static override _Q = 'c:style';
    public static override _A = [':val',];
    /** Style Type. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** Defines the EditingLanguage Class. Serialized as `c:lang` */
export class EditingLanguage extends OxmlLeafElement {

    public static override _Q = 'c:lang';
    public static override _A = [':val',];
    /** Language Code. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the ValAxExtensionList Class. Serialized as `c:extLst` */
export class ValAxExtensionList extends OxmlCompositeElement<ValAxExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the DisplayUnits Class. Serialized as `c:dispUnits` */
export class DisplayUnits extends OxmlCompositeElement<CustomDisplayUnit | BuiltInUnit | DisplayUnitsLabel | ExtensionList> {

    public static override _Q = 'c:dispUnits';

}
/** Defines the CrossBetween Class. Serialized as `c:crossBetween` */
export class CrossBetween extends OxmlLeafElement {

    public static override _Q = 'c:crossBetween';
    public static override _A = [':val',];
    /** Cross Between Value. Serialized as `:val` */
    public get val(): CrossBetweenValues | undefined { return this._g(':val'); }
    public set val(v: CrossBetweenValues | undefined) { this._s(':val', v); }

}
/** Defines the SerAxExtensionList Class. Serialized as `c:extLst` */
export class SerAxExtensionList extends OxmlCompositeElement<SerAxExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the DateAxExtensionList Class. Serialized as `c:extLst` */
export class DateAxExtensionList extends OxmlCompositeElement<DateAxExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the AxisUnitType Class. */
export abstract class AxisUnitType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Major Unit Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Defines the MinorUnit Class. Serialized as `c:minorUnit` */
export class MinorUnit extends AxisUnitType {

    public static override _Q = 'c:minorUnit';

}
/** Defines the MajorUnit Class. Serialized as `c:majorUnit` */
export class MajorUnit extends AxisUnitType {

    public static override _Q = 'c:majorUnit';

}
/** Defines the TimeUnitType Class. */
export abstract class TimeUnitType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Time Unit Value. Serialized as `:val` */
    public get val(): TimeUnitValues | undefined { return this._g(':val'); }
    public set val(v: TimeUnitValues | undefined) { this._s(':val', v); }

}
/** Defines the MinorTimeUnit Class. Serialized as `c:minorTimeUnit` */
export class MinorTimeUnit extends TimeUnitType {

    public static override _Q = 'c:minorTimeUnit';

}
/** Defines the MajorTimeUnit Class. Serialized as `c:majorTimeUnit` */
export class MajorTimeUnit extends TimeUnitType {

    public static override _Q = 'c:majorTimeUnit';

}
/** Defines the BaseTimeUnit Class. Serialized as `c:baseTimeUnit` */
export class BaseTimeUnit extends TimeUnitType {

    public static override _Q = 'c:baseTimeUnit';

}
/** Defines the CatAxExtensionList Class. Serialized as `c:extLst` */
export class CatAxExtensionList extends OxmlCompositeElement<CatAxExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the SkipType Class. */
export abstract class SkipType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Tick Skip Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Defines the TickMarkSkip Class. Serialized as `c:tickMarkSkip` */
export class TickMarkSkip extends SkipType {

    public static override _Q = 'c:tickMarkSkip';

}
/** Defines the TickLabelSkip Class. Serialized as `c:tickLblSkip` */
export class TickLabelSkip extends SkipType {

    public static override _Q = 'c:tickLblSkip';

}
/** Defines the LabelOffset Class. Serialized as `c:lblOffset` */
export class LabelOffset extends OxmlLeafElement {

    public static override _Q = 'c:lblOffset';
    public static override _A = [':val',];
    /** Label Offset Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** Defines the LabelAlignment Class. Serialized as `c:lblAlgn` */
export class LabelAlignment extends OxmlLeafElement {

    public static override _Q = 'c:lblAlgn';
    public static override _A = [':val',];
    /** Label Alignment Value. Serialized as `:val` */
    public get val(): LabelAlignmentValues | undefined { return this._g(':val'); }
    public set val(v: LabelAlignmentValues | undefined) { this._s(':val', v); }

}
/** Defines the Surface3DChartExtensionList Class. Serialized as `c:extLst` */
export class Surface3DChartExtensionList extends OxmlCompositeElement<Surface3DChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the SurfaceChartExtensionList Class. Serialized as `c:extLst` */
export class SurfaceChartExtensionList extends OxmlCompositeElement<SurfaceChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the BubbleChartExtensionList Class. Serialized as `c:extLst` */
export class BubbleChartExtensionList extends OxmlCompositeElement<BubbleChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the SizeRepresents Class. Serialized as `c:sizeRepresents` */
export class SizeRepresents extends OxmlLeafElement {

    public static override _Q = 'c:sizeRepresents';
    public static override _A = [':val',];
    /** Size Represents Value. Serialized as `:val` */
    public get val(): SizeRepresentsValues | undefined { return this._g(':val'); }
    public set val(v: SizeRepresentsValues | undefined) { this._s(':val', v); }

}
/** Defines the BubbleScale Class. Serialized as `c:bubbleScale` */
export class BubbleScale extends OxmlLeafElement {

    public static override _Q = 'c:bubbleScale';
    public static override _A = [':val',];
    /** Bubble Scale Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the BubbleChartSeries Class. Serialized as `c:ser` */
export class BubbleChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | InvertIfNegative | DataPoint | DataLabels | Trendline | ErrorBars | XValues | YValues | BubbleSize | Bubble3D | BubbleSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }
    /** Returns InvertIfNegative. */
    public get invertIfNegative(): InvertIfNegative | undefined { return this._f(InvertIfNegative); }

}
/** Defines the Area3DChartExtensionList Class. Serialized as `c:extLst` */
export class Area3DChartExtensionList extends OxmlCompositeElement<Area3DChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the AreaChartExtensionList Class. Serialized as `c:extLst` */
export class AreaChartExtensionList extends OxmlCompositeElement<AreaChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the Bar3DChartExtensionList Class. Serialized as `c:extLst` */
export class Bar3DChartExtensionList extends OxmlCompositeElement<Bar3DChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the BarChartExtensionList Class. Serialized as `c:extLst` */
export class BarChartExtensionList extends OxmlCompositeElement<BarChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the Overlap Class. Serialized as `c:overlap` */
export class Overlap extends OxmlLeafElement {

    public static override _Q = 'c:overlap';
    public static override _A = [':val',];
    /** Overlap Value. Serialized as `:val` */
    public get val(): SByteValue | undefined { return this._g(':val'); }
    public set val(v: SByteValue | undefined) { this._s(':val', v); }

}
/** Defines the RadarChartExtensionList Class. Serialized as `c:extLst` */
export class RadarChartExtensionList extends OxmlCompositeElement<RadarChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the RadarChartSeries Class. Serialized as `c:ser` */
export class RadarChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | Marker | DataPoint | DataLabels | CategoryAxisData | Values | RadarSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }
    /** Returns Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }

}
/** Defines the RadarStyle Class. Serialized as `c:radarStyle` */
export class RadarStyle extends OxmlLeafElement {

    public static override _Q = 'c:radarStyle';
    public static override _A = [':val',];
    /** Radar Style Value. Serialized as `:val` */
    public get val(): RadarStyleValues | undefined { return this._g(':val'); }
    public set val(v: RadarStyleValues | undefined) { this._s(':val', v); }

}
/** Defines the ScatterChartExtensionList Class. Serialized as `c:extLst` */
export class ScatterChartExtensionList extends OxmlCompositeElement<ScatterChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the ScatterChartSeries Class. Serialized as `c:ser` */
export class ScatterChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | Marker | DataPoint | DataLabels | Trendline | ErrorBars | XValues | YValues | Smooth | ScatterSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }

}
/** Defines the ScatterStyle Class. Serialized as `c:scatterStyle` */
export class ScatterStyle extends OxmlLeafElement {

    public static override _Q = 'c:scatterStyle';
    public static override _A = [':val',];
    /** Scatter Style Value. Serialized as `:val` */
    public get val(): ScatterStyleValues | undefined { return this._g(':val'); }
    public set val(v: ScatterStyleValues | undefined) { this._s(':val', v); }

}
/** Defines the Line3DChartExtensionList Class. Serialized as `c:extLst` */
export class Line3DChartExtensionList extends OxmlCompositeElement<Line3DChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the LineChartExtensionList Class. Serialized as `c:extLst` */
export class LineChartExtensionList extends OxmlCompositeElement<LineChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the SurfaceSerExtensionList Class. Serialized as `c:extLst` */
export class SurfaceSerExtensionList extends OxmlCompositeElement<SurfaceSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the BubbleSerExtension Class. Serialized as `c:ext` */
export class BubbleSerExtension extends OxmlCompositeElement<C14InvertSolidFillFormat | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C14InvertSolidFillFormat. */
    public get invertSolidFillFormat(): C14InvertSolidFillFormat | undefined { return this._f(C14InvertSolidFillFormat); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the BubbleSerExtensionList Class. Serialized as `c:extLst` */
export class BubbleSerExtensionList extends OxmlCompositeElement<BubbleSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the PieSerExtensionList Class. Serialized as `c:extLst` */
export class PieSerExtensionList extends OxmlCompositeElement<PieSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the AreaSerExtensionList Class. Serialized as `c:extLst` */
export class AreaSerExtensionList extends OxmlCompositeElement<AreaSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the BarSerExtension Class. Serialized as `c:ext` */
export class BarSerExtension extends OxmlCompositeElement<C14InvertSolidFillFormat | C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C14InvertSolidFillFormat. */
    public get invertSolidFillFormat(): C14InvertSolidFillFormat | undefined { return this._f(C14InvertSolidFillFormat); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the BarSerExtensionList Class. Serialized as `c:extLst` */
export class BarSerExtensionList extends OxmlCompositeElement<BarSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the Shape Class. Serialized as `c:shape` */
export class Shape extends OxmlLeafElement {

    public static override _Q = 'c:shape';
    public static override _A = [':val',];
    /** Shape Value. Serialized as `:val` */
    public get val(): ShapeValues | undefined { return this._g(':val'); }
    public set val(v: ShapeValues | undefined) { this._s(':val', v); }

}
/** Defines the RadarSerExtensionList Class. Serialized as `c:extLst` */
export class RadarSerExtensionList extends OxmlCompositeElement<RadarSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the ScatterSerExtensionList Class. Serialized as `c:extLst` */
export class ScatterSerExtensionList extends OxmlCompositeElement<ScatterSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the LineSerExtensionList Class. Serialized as `c:extLst` */
export class LineSerExtensionList extends OxmlCompositeElement<LineSerExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the AxisDataSourceType Class. */
export abstract class AxisDataSourceType extends OxmlCompositeElement<MultiLevelStringReference | NumberReference | NumberLiteral | StringReference | StringLiteral> {

    /** Multi Level String Reference. */
    public get multiLevelStringReference(): MultiLevelStringReference | undefined { return this._f(MultiLevelStringReference); }
    /** Number Reference. */
    public get numberReference(): NumberReference | undefined { return this._f(NumberReference); }
    /** Number Literal. */
    public get numberLiteral(): NumberLiteral | undefined { return this._f(NumberLiteral); }
    /** Returns StringReference. */
    public get stringReference(): StringReference | undefined { return this._f(StringReference); }
    /** String Literal. */
    public get stringLiteral(): StringLiteral | undefined { return this._f(StringLiteral); }

}
/** Defines the XValues Class. Serialized as `c:xVal` */
export class XValues extends AxisDataSourceType {

    public static override _Q = 'c:xVal';

}
/** Defines the CategoryAxisData Class. Serialized as `c:cat` */
export class CategoryAxisData extends AxisDataSourceType {

    public static override _Q = 'c:cat';

}
/** Defines the ErrorBars Class. Serialized as `c:errBars` */
export class ErrorBars extends OxmlCompositeElement<ErrorDirection | ErrorBarType | ErrorBarValueType | NoEndCap | Plus | Minus | ErrorBarValue | ChartShapeProperties | ExtensionList> {

    public static override _Q = 'c:errBars';
    /** Error Bar Direction. */
    public get errorDirection(): ErrorDirection | undefined { return this._f(ErrorDirection); }
    /** Error Bar Type. */
    public get errorBarType(): ErrorBarType | undefined { return this._f(ErrorBarType); }
    /** Error Bar Value Type. */
    public get errorBarValueType(): ErrorBarValueType | undefined { return this._f(ErrorBarValueType); }
    /** No End Cap. */
    public get noEndCap(): NoEndCap | undefined { return this._f(NoEndCap); }
    /** Plus. */
    public get plus(): Plus | undefined { return this._f(Plus); }
    /** Minus. */
    public get minus(): Minus | undefined { return this._f(Minus); }
    /** Error Bar Value. */
    public get errorBarValue(): ErrorBarValue | undefined { return this._f(ErrorBarValue); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Trendline Class. Serialized as `c:trendline` */
export class Trendline extends OxmlCompositeElement<TrendlineName | ChartShapeProperties | TrendlineType | PolynomialOrder | Period | Forward | Backward | Intercept | DisplayRSquaredValue | DisplayEquation | TrendlineLabel | ExtensionList> {

    public static override _Q = 'c:trendline';
    /** Trendline Name. */
    public get trendlineName(): TrendlineName | undefined { return this._f(TrendlineName); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Trendline Type. */
    public get trendlineType(): TrendlineType | undefined { return this._f(TrendlineType); }
    /** Polynomial Trendline Order. */
    public get polynomialOrder(): PolynomialOrder | undefined { return this._f(PolynomialOrder); }
    /** Period. */
    public get period(): Period | undefined { return this._f(Period); }
    /** Forward. */
    public get forward(): Forward | undefined { return this._f(Forward); }
    /** Backward. */
    public get backward(): Backward | undefined { return this._f(Backward); }
    /** Intercept. */
    public get intercept(): Intercept | undefined { return this._f(Intercept); }
    /** Display R Squared Value. */
    public get displayRSquaredValue(): DisplayRSquaredValue | undefined { return this._f(DisplayRSquaredValue); }
    /** Display Equation. */
    public get displayEquation(): DisplayEquation | undefined { return this._f(DisplayEquation); }
    /** Trendline Label. */
    public get trendlineLabel(): TrendlineLabel | undefined { return this._f(TrendlineLabel); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DataPoint Class. Serialized as `c:dPt` */
export class DataPoint extends OxmlCompositeElement<Index | InvertIfNegative | Marker | Bubble3D | Explosion | ChartShapeProperties | PictureOptions | ExtensionList> {

    public static override _Q = 'c:dPt';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Invert if Negative. */
    public get invertIfNegative(): InvertIfNegative | undefined { return this._f(InvertIfNegative); }
    /** Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }
    /** 3D Bubble. */
    public get bubble3D(): Bubble3D | undefined { return this._f(Bubble3D); }
    /** Explosion. */
    public get explosion(): Explosion | undefined { return this._f(Explosion); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the DLblsExtensionList Class. Serialized as `c:extLst` */
export class DLblsExtensionList extends OxmlCompositeElement<DLblsExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the DLblExtensionList Class. Serialized as `c:extLst` */
export class DLblExtensionList extends OxmlCompositeElement<DLblExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the MultiLvlStrRefExtensionList Class. Serialized as `c:extLst` */
export class MultiLvlStrRefExtensionList extends OxmlCompositeElement<MultiLvlStrRefExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the MultiLevelStringCache Class. Serialized as `c:multiLvlStrCache` */
export class MultiLevelStringCache extends OxmlCompositeElement<PointCount | Level | ExtensionList> {

    public static override _Q = 'c:multiLvlStrCache';
    /** Returns PointCount. */
    public get pointCount(): PointCount | undefined { return this._f(PointCount); }

}
/** Defines the StrRefExtensionList Class. Serialized as `c:extLst` */
export class StrRefExtensionList extends OxmlCompositeElement<StrRefExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the StrDataExtensionList Class. Serialized as `c:extLst` */
export class StrDataExtensionList extends OxmlCompositeElement<StrDataExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the NumRefExtensionList Class. Serialized as `c:extLst` */
export class NumRefExtensionList extends OxmlCompositeElement<NumRefExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the Pie3DChartExtensionList Class. Serialized as `c:extLst` */
export class Pie3DChartExtensionList extends OxmlCompositeElement<Pie3DChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the PieChartExtensionList Class. Serialized as `c:extLst` */
export class PieChartExtensionList extends OxmlCompositeElement<PieChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the StockChartExtensionList Class. Serialized as `c:extLst` */
export class StockChartExtensionList extends OxmlCompositeElement<StockChartExtension> {

    public static override _Q = 'c:extLst';

}
/** Defines the UpDownBars Class. Serialized as `c:upDownBars` */
export class UpDownBars extends OxmlCompositeElement<GapWidth | UpBars | DownBars | ExtensionList> {

    public static override _Q = 'c:upDownBars';
    /** Gap Width. */
    public get gapWidth(): GapWidth | undefined { return this._f(GapWidth); }
    /** Up Bars. */
    public get upBars(): UpBars | undefined { return this._f(UpBars); }
    /** Down Bars. */
    public get downBars(): DownBars | undefined { return this._f(DownBars); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ValAxExtension Class. Serialized as `c:ext` */
export class ValAxExtension extends OxmlCompositeElement<C15NumberingFormat> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15NumberingFormat. */
    public get numberingFormat(): C15NumberingFormat | undefined { return this._f(C15NumberingFormat); }

}
/** Defines the SerAxExtension Class. Serialized as `c:ext` */
export class SerAxExtension extends OxmlCompositeElement<C15NumberingFormat> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15NumberingFormat. */
    public get numberingFormat(): C15NumberingFormat | undefined { return this._f(C15NumberingFormat); }

}
/** Defines the DateAxExtension Class. Serialized as `c:ext` */
export class DateAxExtension extends OxmlCompositeElement<C15NumberingFormat> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15NumberingFormat. */
    public get numberingFormat(): C15NumberingFormat | undefined { return this._f(C15NumberingFormat); }

}
/** Defines the CatAxExtension Class. Serialized as `c:ext` */
export class CatAxExtension extends OxmlCompositeElement<C15NumberingFormat> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15NumberingFormat. */
    public get numberingFormat(): C15NumberingFormat | undefined { return this._f(C15NumberingFormat); }

}
/** Defines the Surface3DChartExtension Class. Serialized as `c:ext` */
export class Surface3DChartExtension extends OxmlCompositeElement<C15FilteredSurfaceSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSurfaceSeries. */
    public get filteredSurfaceSeries(): C15FilteredSurfaceSeries | undefined { return this._f(C15FilteredSurfaceSeries); }

}
/** Defines the SurfaceChartExtension Class. Serialized as `c:ext` */
export class SurfaceChartExtension extends OxmlCompositeElement<C15FilteredSurfaceSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSurfaceSeries. */
    public get filteredSurfaceSeries(): C15FilteredSurfaceSeries | undefined { return this._f(C15FilteredSurfaceSeries); }

}
/** Defines the BubbleChartExtension Class. Serialized as `c:ext` */
export class BubbleChartExtension extends OxmlCompositeElement<C15FilteredBubbleSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredBubbleSeries. */
    public get filteredBubbleSeries(): C15FilteredBubbleSeries | undefined { return this._f(C15FilteredBubbleSeries); }

}
/** Defines the Area3DChartExtension Class. Serialized as `c:ext` */
export class Area3DChartExtension extends OxmlCompositeElement<C15FilteredAreaSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredAreaSeries. */
    public get filteredAreaSeries(): C15FilteredAreaSeries | undefined { return this._f(C15FilteredAreaSeries); }

}
/** Defines the AreaChartExtension Class. Serialized as `c:ext` */
export class AreaChartExtension extends OxmlCompositeElement<C15FilteredAreaSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredAreaSeries. */
    public get filteredAreaSeries(): C15FilteredAreaSeries | undefined { return this._f(C15FilteredAreaSeries); }

}
/** Defines the Bar3DChartExtension Class. Serialized as `c:ext` */
export class Bar3DChartExtension extends OxmlCompositeElement<C15FilteredBarSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredBarSeries. */
    public get filteredBarSeries(): C15FilteredBarSeries | undefined { return this._f(C15FilteredBarSeries); }

}
/** Defines the BarChartExtension Class. Serialized as `c:ext` */
export class BarChartExtension extends OxmlCompositeElement<C15FilteredBarSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredBarSeries. */
    public get filteredBarSeries(): C15FilteredBarSeries | undefined { return this._f(C15FilteredBarSeries); }

}
/** Defines the RadarChartExtension Class. Serialized as `c:ext` */
export class RadarChartExtension extends OxmlCompositeElement<C15FilteredRadarSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredRadarSeries. */
    public get filteredRadarSeries(): C15FilteredRadarSeries | undefined { return this._f(C15FilteredRadarSeries); }

}
/** Defines the ScatterChartExtension Class. Serialized as `c:ext` */
export class ScatterChartExtension extends OxmlCompositeElement<C15FilteredScatterSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredScatterSeries. */
    public get filteredScatterSeries(): C15FilteredScatterSeries | undefined { return this._f(C15FilteredScatterSeries); }

}
/** Defines the Line3DChartExtension Class. Serialized as `c:ext` */
export class Line3DChartExtension extends OxmlCompositeElement<C15FilteredLineSeriesExtension> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredLineSeriesExtension. */
    public get filteredLineSeriesExtension(): C15FilteredLineSeriesExtension | undefined { return this._f(C15FilteredLineSeriesExtension); }

}
/** Defines the LineChartExtension Class. Serialized as `c:ext` */
export class LineChartExtension extends OxmlCompositeElement<C15FilteredLineSeriesExtension> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredLineSeriesExtension. */
    public get filteredLineSeriesExtension(): C15FilteredLineSeriesExtension | undefined { return this._f(C15FilteredLineSeriesExtension); }

}
/** Defines the SurfaceSerExtension Class. Serialized as `c:ext` */
export class SurfaceSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the PieSerExtension Class. Serialized as `c:ext` */
export class PieSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the AreaSerExtension Class. Serialized as `c:ext` */
export class AreaSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the RadarSerExtension Class. Serialized as `c:ext` */
export class RadarSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the ScatterSerExtension Class. Serialized as `c:ext` */
export class ScatterSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the LineSerExtension Class. Serialized as `c:ext` */
export class LineSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredSeriesTitle. */
    public get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined { return this._f(C15FilteredSeriesTitle); }
    /** Returns C15FilteredCategoryTitle. */
    public get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined { return this._f(C15FilteredCategoryTitle); }
    /** Returns C15DataLabelsRange. */
    public get dataLabelsRange(): C15DataLabelsRange | undefined { return this._f(C15DataLabelsRange); }
    /** Returns C15CategoryFilterExceptions. */
    public get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined { return this._f(C15CategoryFilterExceptions); }

}
/** Defines the DLblsExtension Class. Serialized as `c:ext` */
export class DLblsExtension extends OxmlCompositeElement<C15ChartText | C15DataLabelFieldTable | C15ShowDataLabelsRange | C15ShapeProperties | C15Layout | C15ShowLeaderLines | C15LeaderLines> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15ChartText. */
    public get chartText(): C15ChartText | undefined { return this._f(C15ChartText); }
    /** Returns C15DataLabelFieldTable. */
    public get dataLabelFieldTable(): C15DataLabelFieldTable | undefined { return this._f(C15DataLabelFieldTable); }
    /** Returns C15ShowDataLabelsRange. */
    public get showDataLabelsRange(): C15ShowDataLabelsRange | undefined { return this._f(C15ShowDataLabelsRange); }
    /** Returns C15ShapeProperties. */
    public get shapeProperties(): C15ShapeProperties | undefined { return this._f(C15ShapeProperties); }
    /** Returns C15Layout. */
    public get layout(): C15Layout | undefined { return this._f(C15Layout); }
    /** Returns C15ShowLeaderLines. */
    public get showLeaderLines(): C15ShowLeaderLines | undefined { return this._f(C15ShowLeaderLines); }
    /** Returns C15LeaderLines. */
    public get leaderLines(): C15LeaderLines | undefined { return this._f(C15LeaderLines); }

}
/** Defines the DLblExtension Class. Serialized as `c:ext` */
export class DLblExtension extends OxmlCompositeElement<C15DataLabelFieldTable | C15ExceptionForSave | C15ShowDataLabelsRange | C15ShapeProperties | C15Layout> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15DataLabelFieldTable. */
    public get dataLabelFieldTable(): C15DataLabelFieldTable | undefined { return this._f(C15DataLabelFieldTable); }
    /** Returns C15ExceptionForSave. */
    public get exceptionForSave(): C15ExceptionForSave | undefined { return this._f(C15ExceptionForSave); }
    /** Returns C15ShowDataLabelsRange. */
    public get showDataLabelsRange(): C15ShowDataLabelsRange | undefined { return this._f(C15ShowDataLabelsRange); }
    /** Returns C15ShapeProperties. */
    public get shapeProperties(): C15ShapeProperties | undefined { return this._f(C15ShapeProperties); }
    /** Returns C15Layout. */
    public get layout(): C15Layout | undefined { return this._f(C15Layout); }

}
/** Defines the MultiLvlStrRefExtension Class. Serialized as `c:ext` */
export class MultiLvlStrRefExtension extends OxmlCompositeElement<C15FullReference | C15LevelReference | C15FormulaReference> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FullReference. */
    public get fullReference(): C15FullReference | undefined { return this._f(C15FullReference); }
    /** Returns C15LevelReference. */
    public get levelReference(): C15LevelReference | undefined { return this._f(C15LevelReference); }
    /** Returns C15FormulaReference. */
    public get formulaReference(): C15FormulaReference | undefined { return this._f(C15FormulaReference); }

}
/** Defines the StrRefExtension Class. Serialized as `c:ext` */
export class StrRefExtension extends OxmlCompositeElement<C15FullReference | C15LevelReference | C15FormulaReference> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FullReference. */
    public get fullReference(): C15FullReference | undefined { return this._f(C15FullReference); }
    /** Returns C15LevelReference. */
    public get levelReference(): C15LevelReference | undefined { return this._f(C15LevelReference); }
    /** Returns C15FormulaReference. */
    public get formulaReference(): C15FormulaReference | undefined { return this._f(C15FormulaReference); }

}
/** Defines the StrDataExtension Class. Serialized as `c:ext` */
export class StrDataExtension extends OxmlCompositeElement<C15AutoGeneneratedCategories> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15AutoGeneneratedCategories. */
    public get autoGeneneratedCategories(): C15AutoGeneneratedCategories | undefined { return this._f(C15AutoGeneneratedCategories); }

}
/** Defines the NumRefExtension Class. Serialized as `c:ext` */
export class NumRefExtension extends OxmlCompositeElement<C15FullReference | C15LevelReference | C15FormulaReference> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FullReference. */
    public get fullReference(): C15FullReference | undefined { return this._f(C15FullReference); }
    /** Returns C15LevelReference. */
    public get levelReference(): C15LevelReference | undefined { return this._f(C15LevelReference); }
    /** Returns C15FormulaReference. */
    public get formulaReference(): C15FormulaReference | undefined { return this._f(C15FormulaReference); }

}
/** Defines the Pie3DChartExtension Class. Serialized as `c:ext` */
export class Pie3DChartExtension extends OxmlCompositeElement<C15FilteredPieSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredPieSeries. */
    public get filteredPieSeries(): C15FilteredPieSeries | undefined { return this._f(C15FilteredPieSeries); }

}
/** Defines the PieChartExtension Class. Serialized as `c:ext` */
export class PieChartExtension extends OxmlCompositeElement<C15FilteredPieSeries> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredPieSeries. */
    public get filteredPieSeries(): C15FilteredPieSeries | undefined { return this._f(C15FilteredPieSeries); }

}
/** Defines the StockChartExtension Class. Serialized as `c:ext` */
export class StockChartExtension extends OxmlCompositeElement<C15FilteredLineSeriesExtension> {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns C15FilteredLineSeriesExtension. */
    public get filteredLineSeriesExtension(): C15FilteredLineSeriesExtension | undefined { return this._f(C15FilteredLineSeriesExtension); }

}
/** Thickness. Serialized as `c:thickness` */
export class Thickness extends OxmlLeafElement {

    public static override _Q = 'c:thickness';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** String Point. Serialized as `c:pt` */
export class StringPoint extends OxmlCompositeElement<NumericValue> {

    public static override _Q = 'c:pt';
    public static override _A = [':idx',];
    /** Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Text Value. */
    public get numericValue(): NumericValue | undefined { return this._f(NumericValue); }

}
/** Hole Size. Serialized as `c:holeSize` */
export class HoleSize extends OxmlLeafElement {

    public static override _Q = 'c:holeSize';
    public static override _A = [':val',];
    /** Hole Size Value. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** First Slice Angle. Serialized as `c:firstSliceAng` */
export class FirstSliceAngle extends OxmlLeafElement {

    public static override _Q = 'c:firstSliceAng';
    public static override _A = [':val',];
    /** First Slice Angle Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** Data Table. Serialized as `c:dTable` */
export class DataTable extends OxmlCompositeElement<ShowHorizontalBorder | ShowVerticalBorder | ShowOutlineBorder | ShowKeys | ChartShapeProperties | TextProperties | ExtensionList> {

    public static override _Q = 'c:dTable';
    /** Show Horizontal Border. */
    public get showHorizontalBorder(): ShowHorizontalBorder | undefined { return this._f(ShowHorizontalBorder); }
    /** Show Vertical Border. */
    public get showVerticalBorder(): ShowVerticalBorder | undefined { return this._f(ShowVerticalBorder); }
    /** Show Outline Border. */
    public get showOutlineBorder(): ShowOutlineBorder | undefined { return this._f(ShowOutlineBorder); }
    /** Show Legend Keys. */
    public get showKeys(): ShowKeys | undefined { return this._f(ShowKeys); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Text Properties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Series Axis. Serialized as `c:serAx` */
export class SeriesAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | TickLabelSkip | TickMarkSkip | SerAxExtensionList> {

    public static override _Q = 'c:serAx';
    /** Axis ID. */
    public get axisId(): AxisId | undefined { return this._f(AxisId); }
    /** Scaling. */
    public get scaling(): Scaling | undefined { return this._f(Scaling); }
    /** Delete. */
    public get delete(): Delete | undefined { return this._f(Delete); }
    /** Axis Position. */
    public get axisPosition(): AxisPosition | undefined { return this._f(AxisPosition); }
    /** Major Gridlines. */
    public get majorGridlines(): MajorGridlines | undefined { return this._f(MajorGridlines); }
    /** Minor Gridlines. */
    public get minorGridlines(): MinorGridlines | undefined { return this._f(MinorGridlines); }
    /** Title. */
    public get title(): Title | undefined { return this._f(Title); }
    /** Number Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Major Tick Mark. */
    public get majorTickMark(): MajorTickMark | undefined { return this._f(MajorTickMark); }
    /** Minor Tick Mark. */
    public get minorTickMark(): MinorTickMark | undefined { return this._f(MinorTickMark); }
    /** Tick Label Position. */
    public get tickLabelPosition(): TickLabelPosition | undefined { return this._f(TickLabelPosition); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Crossing Axis ID. */
    public get crossingAxis(): CrossingAxis | undefined { return this._f(CrossingAxis); }

}
/** Date Axis. Serialized as `c:dateAx` */
export class DateAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | AutoLabeled | LabelOffset | BaseTimeUnit | MajorUnit | MajorTimeUnit | MinorUnit | MinorTimeUnit | DateAxExtensionList> {

    public static override _Q = 'c:dateAx';
    /** Axis ID. */
    public get axisId(): AxisId | undefined { return this._f(AxisId); }
    /** Scaling. */
    public get scaling(): Scaling | undefined { return this._f(Scaling); }
    /** Delete. */
    public get delete(): Delete | undefined { return this._f(Delete); }
    /** Axis Position. */
    public get axisPosition(): AxisPosition | undefined { return this._f(AxisPosition); }
    /** Major Gridlines. */
    public get majorGridlines(): MajorGridlines | undefined { return this._f(MajorGridlines); }
    /** Minor Gridlines. */
    public get minorGridlines(): MinorGridlines | undefined { return this._f(MinorGridlines); }
    /** Title. */
    public get title(): Title | undefined { return this._f(Title); }
    /** Number Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Major Tick Mark. */
    public get majorTickMark(): MajorTickMark | undefined { return this._f(MajorTickMark); }
    /** Minor Tick Mark. */
    public get minorTickMark(): MinorTickMark | undefined { return this._f(MinorTickMark); }
    /** Tick Label Position. */
    public get tickLabelPosition(): TickLabelPosition | undefined { return this._f(TickLabelPosition); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Crossing Axis ID. */
    public get crossingAxis(): CrossingAxis | undefined { return this._f(CrossingAxis); }

}
/** Category Axis Data. Serialized as `c:catAx` */
export class CategoryAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | AutoLabeled | LabelAlignment | LabelOffset | TickLabelSkip | TickMarkSkip | NoMultiLevelLabels | CatAxExtensionList> {

    public static override _Q = 'c:catAx';
    /** Axis ID. */
    public get axisId(): AxisId | undefined { return this._f(AxisId); }
    /** Scaling. */
    public get scaling(): Scaling | undefined { return this._f(Scaling); }
    /** Delete. */
    public get delete(): Delete | undefined { return this._f(Delete); }
    /** Axis Position. */
    public get axisPosition(): AxisPosition | undefined { return this._f(AxisPosition); }
    /** Major Gridlines. */
    public get majorGridlines(): MajorGridlines | undefined { return this._f(MajorGridlines); }
    /** Minor Gridlines. */
    public get minorGridlines(): MinorGridlines | undefined { return this._f(MinorGridlines); }
    /** Title. */
    public get title(): Title | undefined { return this._f(Title); }
    /** Number Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Major Tick Mark. */
    public get majorTickMark(): MajorTickMark | undefined { return this._f(MajorTickMark); }
    /** Minor Tick Mark. */
    public get minorTickMark(): MinorTickMark | undefined { return this._f(MinorTickMark); }
    /** Tick Label Position. */
    public get tickLabelPosition(): TickLabelPosition | undefined { return this._f(TickLabelPosition); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Crossing Axis ID. */
    public get crossingAxis(): CrossingAxis | undefined { return this._f(CrossingAxis); }

}
/** Value Axis. Serialized as `c:valAx` */
export class ValueAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | CrossBetween | MajorUnit | MinorUnit | DisplayUnits | ValAxExtensionList> {

    public static override _Q = 'c:valAx';
    /** Axis ID. */
    public get axisId(): AxisId | undefined { return this._f(AxisId); }
    /** Scaling. */
    public get scaling(): Scaling | undefined { return this._f(Scaling); }
    /** Delete. */
    public get delete(): Delete | undefined { return this._f(Delete); }
    /** Axis Position. */
    public get axisPosition(): AxisPosition | undefined { return this._f(AxisPosition); }
    /** Major Gridlines. */
    public get majorGridlines(): MajorGridlines | undefined { return this._f(MajorGridlines); }
    /** Minor Gridlines. */
    public get minorGridlines(): MinorGridlines | undefined { return this._f(MinorGridlines); }
    /** Title. */
    public get title(): Title | undefined { return this._f(Title); }
    /** Number Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Major Tick Mark. */
    public get majorTickMark(): MajorTickMark | undefined { return this._f(MajorTickMark); }
    /** Minor Tick Mark. */
    public get minorTickMark(): MinorTickMark | undefined { return this._f(MinorTickMark); }
    /** Tick Label Position. */
    public get tickLabelPosition(): TickLabelPosition | undefined { return this._f(TickLabelPosition); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Crossing Axis ID. */
    public get crossingAxis(): CrossingAxis | undefined { return this._f(CrossingAxis); }

}
/** Bubble Charts. Serialized as `c:bubbleChart` */
export class BubbleChart extends OxmlCompositeElement<VaryColors | BubbleChartSeries | DataLabels | Bubble3D | BubbleScale | ShowNegativeBubbles | SizeRepresents | AxisId | BubbleChartExtensionList> {

    public static override _Q = 'c:bubbleChart';
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** 3D Surface Charts. Serialized as `c:surface3DChart` */
export class Surface3DChart extends OxmlCompositeElement<Wireframe | VaryColors | SurfaceChartSeries | BandFormats | AxisId | Surface3DChartExtensionList> {

    public static override _Q = 'c:surface3DChart';
    /** Returns Wireframe. */
    public get wireframe(): Wireframe | undefined { return this._f(Wireframe); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Surface Charts. Serialized as `c:surfaceChart` */
export class SurfaceChart extends OxmlCompositeElement<Wireframe | SurfaceChartSeries | BandFormats | AxisId | SurfaceChartExtensionList> {

    public static override _Q = 'c:surfaceChart';
    /** Wireframe. */
    public get wireframe(): Wireframe | undefined { return this._f(Wireframe); }

}
/** Pie of Pie or Bar of Pie Charts. Serialized as `c:ofPieChart` */
export class OfPieChart extends OxmlCompositeElement<OfPieType | VaryColors | PieChartSeries | DataLabels | GapWidth | SplitType | SplitPosition | CustomSplit | SecondPieSize | SeriesLines | ExtensionList> {

    public static override _Q = 'c:ofPieChart';
    /** Pie of Pie or Bar of Pie Type. */
    public get ofPieType(): OfPieType | undefined { return this._f(OfPieType); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** 3D Bar Charts. Serialized as `c:bar3DChart` */
export class Bar3DChart extends OxmlCompositeElement<BarDirection | BarGrouping | VaryColors | BarChartSeries | DataLabels | GapWidth | GapDepth | Shape | AxisId | Bar3DChartExtensionList> {

    public static override _Q = 'c:bar3DChart';
    /** Bar Direction. */
    public get barDirection(): BarDirection | undefined { return this._f(BarDirection); }
    /** Bar Grouping. */
    public get barGrouping(): BarGrouping | undefined { return this._f(BarGrouping); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Bar Charts. Serialized as `c:barChart` */
export class BarChart extends OxmlCompositeElement<BarDirection | BarGrouping | VaryColors | BarChartSeries | DataLabels | GapWidth | Overlap | SeriesLines | AxisId | BarChartExtensionList> {

    public static override _Q = 'c:barChart';
    /** Bar Direction. */
    public get barDirection(): BarDirection | undefined { return this._f(BarDirection); }
    /** Bar Grouping. */
    public get barGrouping(): BarGrouping | undefined { return this._f(BarGrouping); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Doughnut Charts. Serialized as `c:doughnutChart` */
export class DoughnutChart extends OxmlCompositeElement<VaryColors | PieChartSeries | DataLabels | FirstSliceAngle | HoleSize | ExtensionList> {

    public static override _Q = 'c:doughnutChart';
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** 3D Pie Charts. Serialized as `c:pie3DChart` */
export class Pie3DChart extends OxmlCompositeElement<VaryColors | PieChartSeries | DataLabels | Pie3DChartExtensionList> {

    public static override _Q = 'c:pie3DChart';
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Pie Charts. Serialized as `c:pieChart` */
export class PieChart extends OxmlCompositeElement<VaryColors | PieChartSeries | DataLabels | FirstSliceAngle | PieChartExtensionList> {

    public static override _Q = 'c:pieChart';
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Scatter Charts. Serialized as `c:scatterChart` */
export class ScatterChart extends OxmlCompositeElement<ScatterStyle | VaryColors | ScatterChartSeries | DataLabels | AxisId | ScatterChartExtensionList> {

    public static override _Q = 'c:scatterChart';
    /** Returns ScatterStyle. */
    public get scatterStyle(): ScatterStyle | undefined { return this._f(ScatterStyle); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Radar Charts. Serialized as `c:radarChart` */
export class RadarChart extends OxmlCompositeElement<RadarStyle | VaryColors | RadarChartSeries | DataLabels | AxisId | RadarChartExtensionList> {

    public static override _Q = 'c:radarChart';
    /** Returns RadarStyle. */
    public get radarStyle(): RadarStyle | undefined { return this._f(RadarStyle); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Stock Charts. Serialized as `c:stockChart` */
export class StockChart extends OxmlCompositeElement<LineChartSeries | DataLabels | DropLines | HighLowLines | UpDownBars | AxisId | StockChartExtensionList> {

    public static override _Q = 'c:stockChart';

}
/** 3D Line Charts. Serialized as `c:line3DChart` */
export class Line3DChart extends OxmlCompositeElement<Grouping | VaryColors | LineChartSeries | DataLabels | DropLines | GapDepth | AxisId | Line3DChartExtensionList> {

    public static override _Q = 'c:line3DChart';
    /** Grouping. */
    public get grouping(): Grouping | undefined { return this._f(Grouping); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Line Charts. Serialized as `c:lineChart` */
export class LineChart extends OxmlCompositeElement<Grouping | VaryColors | LineChartSeries | DataLabels | DropLines | HighLowLines | UpDownBars | ShowMarker | Smooth | AxisId | LineChartExtensionList> {

    public static override _Q = 'c:lineChart';
    /** Grouping. */
    public get grouping(): Grouping | undefined { return this._f(Grouping); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** 3D Area Charts. Serialized as `c:area3DChart` */
export class Area3DChart extends OxmlCompositeElement<Grouping | VaryColors | AreaChartSeries | DataLabels | DropLines | GapDepth | AxisId | Area3DChartExtensionList> {

    public static override _Q = 'c:area3DChart';
    /** Grouping. */
    public get grouping(): Grouping | undefined { return this._f(Grouping); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Area Charts. Serialized as `c:areaChart` */
export class AreaChart extends OxmlCompositeElement<Grouping | VaryColors | AreaChartSeries | DataLabels | DropLines | AxisId | AreaChartExtensionList> {

    public static override _Q = 'c:areaChart';
    /** Grouping. */
    public get grouping(): Grouping | undefined { return this._f(Grouping); }
    /** Returns VaryColors. */
    public get varyColors(): VaryColors | undefined { return this._f(VaryColors); }

}
/** Data Label. Serialized as `c:dLbl` */
export class DataLabel extends OxmlCompositeElement<Index | Delete | Layout | ChartText | NumberingFormat | ChartShapeProperties | TextProperties | DataLabelPosition | ShowLegendKey | ShowValue | ShowCategoryName | ShowSeriesName | ShowPercent | ShowBubbleSize | Separator | DLblExtensionList> {

    public static override _Q = 'c:dLbl';
    /** Returns Index. */
    public get index(): Index | undefined { return this._f(Index); }

}
/** Defines the ShapeProperties Class. Serialized as `c:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'c:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Page Setup. Serialized as `c:pageSetup` */
export class PageSetup extends OxmlLeafElement {

    public static override _Q = 'c:pageSetup';
    public static override _A = [':paperSize',':firstPageNumber',':orientation',':blackAndWhite',':draft',':useFirstPageNumber',':horizontalDpi',':verticalDpi',':copies',];
    /** Page Size. Serialized as `:paperSize` */
    public get paperSize(): UInt32Value | undefined { return this._g(':paperSize'); }
    public set paperSize(v: UInt32Value | undefined) { this._s(':paperSize', v); }
    /** First Page Number. Serialized as `:firstPageNumber` */
    public get firstPageNumber(): Int32Value | undefined { return this._g(':firstPageNumber'); }
    public set firstPageNumber(v: Int32Value | undefined) { this._s(':firstPageNumber', v); }
    /** Orientation. Serialized as `:orientation` */
    public get orientation(): PageSetupOrientationValues | undefined { return this._g(':orientation'); }
    public set orientation(v: PageSetupOrientationValues | undefined) { this._s(':orientation', v); }
    /** Black and White. Serialized as `:blackAndWhite` */
    public get blackAndWhite(): BooleanValue | undefined { return this._g(':blackAndWhite'); }
    public set blackAndWhite(v: BooleanValue | undefined) { this._s(':blackAndWhite', v); }
    /** Draft. Serialized as `:draft` */
    public get draft(): BooleanValue | undefined { return this._g(':draft'); }
    public set draft(v: BooleanValue | undefined) { this._s(':draft', v); }
    /** Use First Page Number. Serialized as `:useFirstPageNumber` */
    public get useFirstPageNumber(): BooleanValue | undefined { return this._g(':useFirstPageNumber'); }
    public set useFirstPageNumber(v: BooleanValue | undefined) { this._s(':useFirstPageNumber', v); }
    /** Horizontal DPI. Serialized as `:horizontalDpi` */
    public get horizontalDpi(): Int32Value | undefined { return this._g(':horizontalDpi'); }
    public set horizontalDpi(v: Int32Value | undefined) { this._s(':horizontalDpi', v); }
    /** Vertical DPI. Serialized as `:verticalDpi` */
    public get verticalDpi(): Int32Value | undefined { return this._g(':verticalDpi'); }
    public set verticalDpi(v: Int32Value | undefined) { this._s(':verticalDpi', v); }
    /** Copies. Serialized as `:copies` */
    public get copies(): UInt32Value | undefined { return this._g(':copies'); }
    public set copies(v: UInt32Value | undefined) { this._s(':copies', v); }

}
/** Page Margins. Serialized as `c:pageMargins` */
export class PageMargins extends OxmlLeafElement {

    public static override _Q = 'c:pageMargins';
    public static override _A = [':l',':r',':t',':b',':header',':footer',];
    /** Left. Serialized as `:l` */
    public get left(): DoubleValue | undefined { return this._g(':l'); }
    public set left(v: DoubleValue | undefined) { this._s(':l', v); }
    /** Right. Serialized as `:r` */
    public get right(): DoubleValue | undefined { return this._g(':r'); }
    public set right(v: DoubleValue | undefined) { this._s(':r', v); }
    /** Top. Serialized as `:t` */
    public get top(): DoubleValue | undefined { return this._g(':t'); }
    public set top(v: DoubleValue | undefined) { this._s(':t', v); }
    /** Bottom. Serialized as `:b` */
    public get bottom(): DoubleValue | undefined { return this._g(':b'); }
    public set bottom(v: DoubleValue | undefined) { this._s(':b', v); }
    /** Header. Serialized as `:header` */
    public get header(): DoubleValue | undefined { return this._g(':header'); }
    public set header(v: DoubleValue | undefined) { this._s(':header', v); }
    /** Footer. Serialized as `:footer` */
    public get footer(): DoubleValue | undefined { return this._g(':footer'); }
    public set footer(v: DoubleValue | undefined) { this._s(':footer', v); }

}
/** Header and Footer. Serialized as `c:headerFooter` */
export class HeaderFooter extends OxmlCompositeElement<OddHeader | OddFooter | EvenHeader | EvenFooter | FirstHeader | FirstFooter> {

    public static override _Q = 'c:headerFooter';
    public static override _A = [':alignWithMargins',':differentOddEven',':differentFirst',];
    /** Align With Margins. Serialized as `:alignWithMargins` */
    public get alignWithMargins(): BooleanValue | undefined { return this._g(':alignWithMargins'); }
    public set alignWithMargins(v: BooleanValue | undefined) { this._s(':alignWithMargins', v); }
    /** Different Odd Even. Serialized as `:differentOddEven` */
    public get differentOddEven(): BooleanValue | undefined { return this._g(':differentOddEven'); }
    public set differentOddEven(v: BooleanValue | undefined) { this._s(':differentOddEven', v); }
    /** Different First. Serialized as `:differentFirst` */
    public get differentFirst(): BooleanValue | undefined { return this._g(':differentFirst'); }
    public set differentFirst(v: BooleanValue | undefined) { this._s(':differentFirst', v); }
    /** Odd Header. */
    public get oddHeader(): OddHeader | undefined { return this._f(OddHeader); }
    /** Odd Footer. */
    public get oddFooter(): OddFooter | undefined { return this._f(OddFooter); }
    /** Even Header. */
    public get evenHeader(): EvenHeader | undefined { return this._f(EvenHeader); }
    /** Even Footer. */
    public get evenFooter(): EvenFooter | undefined { return this._f(EvenFooter); }
    /** First Header. */
    public get firstHeader(): FirstHeader | undefined { return this._f(FirstHeader); }
    /** First Footer. */
    public get firstFooter(): FirstFooter | undefined { return this._f(FirstFooter); }

}
/** Legend Entry. Serialized as `c:legendEntry` */
export class LegendEntry extends OxmlCompositeElement<Index | Delete | TextProperties | ExtensionList> {

    public static override _Q = 'c:legendEntry';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }

}
/** Legend Position. Serialized as `c:legendPos` */
export class LegendPosition extends OxmlLeafElement {

    public static override _Q = 'c:legendPos';
    public static override _A = [':val',];
    /** Legend Position Value. Serialized as `:val` */
    public get val(): LegendPositionValues | undefined { return this._g(':val'); }
    public set val(v: LegendPositionValues | undefined) { this._s(':val', v); }

}
/** Pivot Format. Serialized as `c:pivotFmt` */
export class PivotFormat extends OxmlCompositeElement<Index | ShapeProperties | Marker | DataLabel | ExtensionList> {

    public static override _Q = 'c:pivotFmt';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }
    /** Data Label. */
    public get dataLabel(): DataLabel | undefined { return this._f(DataLabel); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Axis Orientation. Serialized as `c:orientation` */
export class Orientation extends OxmlLeafElement {

    public static override _Q = 'c:orientation';
    public static override _A = [':val',];
    /** Orientation Value. Serialized as `:val` */
    public get val(): OrientationValues | undefined { return this._g(':val'); }
    public set val(v: OrientationValues | undefined) { this._s(':val', v); }

}
/** Logarithmic Base. Serialized as `c:logBase` */
export class LogBase extends OxmlLeafElement {

    public static override _Q = 'c:logBase';
    public static override _A = [':val',];
    /** Logarithmic Base Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Display Units Label. Serialized as `c:dispUnitsLbl` */
export class DisplayUnitsLabel extends OxmlCompositeElement<Layout | ChartText | ChartShapeProperties | TextProperties> {

    public static override _Q = 'c:dispUnitsLbl';
    /** Layout. */
    public get layout(): Layout | undefined { return this._f(Layout); }
    /** Returns ChartText. */
    public get chartText(): ChartText | undefined { return this._f(ChartText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }

}
/** Built in Display Unit Value. Serialized as `c:builtInUnit` */
export class BuiltInUnit extends OxmlLeafElement {

    public static override _Q = 'c:builtInUnit';
    public static override _A = [':val',];
    /** Built In Unit Value. Serialized as `:val` */
    public get val(): BuiltInUnitValues | undefined { return this._g(':val'); }
    public set val(v: BuiltInUnitValues | undefined) { this._s(':val', v); }

}
/** Picture Stack Unit. Serialized as `c:pictureStackUnit` */
export class PictureStackUnit extends OxmlLeafElement {

    public static override _Q = 'c:pictureStackUnit';
    public static override _A = [':val',];
    /** Picture Stack Unit. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Picture Format. Serialized as `c:pictureFormat` */
export class PictureFormat extends OxmlLeafElement {

    public static override _Q = 'c:pictureFormat';
    public static override _A = [':val',];
    /** Picture Format Value. Serialized as `:val` */
    public get val(): PictureFormatValues | undefined { return this._g(':val'); }
    public set val(v: PictureFormatValues | undefined) { this._s(':val', v); }

}
/** Band Format. Serialized as `c:bandFmt` */
export class BandFormat extends OxmlCompositeElement<Index | ChartShapeProperties> {

    public static override _Q = 'c:bandFmt';
    /** Returns Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }

}
/** Second Pie Size. Serialized as `c:secondPieSize` */
export class SecondPieSize extends OxmlLeafElement {

    public static override _Q = 'c:secondPieSize';
    public static override _A = [':val',];
    /** Second Pie Size Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** Custom Split. Serialized as `c:custSplit` */
export class CustomSplit extends OxmlCompositeElement<SecondPiePoint> {

    public static override _Q = 'c:custSplit';

}
/** Split Type. Serialized as `c:splitType` */
export class SplitType extends OxmlLeafElement {

    public static override _Q = 'c:splitType';
    public static override _A = [':val',];
    /** Split Type Value. Serialized as `:val` */
    public get val(): SplitValues | undefined { return this._g(':val'); }
    public set val(v: SplitValues | undefined) { this._s(':val', v); }

}
/** Pie of Pie or Bar of Pie Type. Serialized as `c:ofPieType` */
export class OfPieType extends OxmlLeafElement {

    public static override _Q = 'c:ofPieType';
    public static override _A = [':val',];
    /** Pie of Pie or Bar of Pie Type Value. Serialized as `:val` */
    public get val(): OfPieValues | undefined { return this._g(':val'); }
    public set val(v: OfPieValues | undefined) { this._s(':val', v); }

}
/** Defines the UpDownBarType Class. */
export abstract class UpDownBarType extends OxmlCompositeElement<ChartShapeProperties> {

    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }

}
/** Down Bars. Serialized as `c:downBars` */
export class DownBars extends UpDownBarType {

    public static override _Q = 'c:downBars';

}
/** Up Bars. Serialized as `c:upBars` */
export class UpBars extends UpDownBarType {

    public static override _Q = 'c:upBars';

}
/** Defines the GapAmountType Class. */
export abstract class GapAmountType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Gap Size Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** Defines the GapDepth Class. Serialized as `c:gapDepth` */
export class GapDepth extends GapAmountType {

    public static override _Q = 'c:gapDepth';

}
/** Gap Width. Serialized as `c:gapWidth` */
export class GapWidth extends GapAmountType {

    public static override _Q = 'c:gapWidth';

}
/** Defines the NumberDataSourceType Class. */
export abstract class NumberDataSourceType extends OxmlCompositeElement<NumberReference | NumberLiteral> {

    /** Number Reference. */
    public get numberReference(): NumberReference | undefined { return this._f(NumberReference); }
    /** Number Literal. */
    public get numberLiteral(): NumberLiteral | undefined { return this._f(NumberLiteral); }

}
/** Defines the BubbleSize Class. Serialized as `c:bubbleSize` */
export class BubbleSize extends NumberDataSourceType {

    public static override _Q = 'c:bubbleSize';

}
/** Defines the YValues Class. Serialized as `c:yVal` */
export class YValues extends NumberDataSourceType {

    public static override _Q = 'c:yVal';

}
/** Defines the Values Class. Serialized as `c:val` */
export class Values extends NumberDataSourceType {

    public static override _Q = 'c:val';

}
/** Minus. Serialized as `c:minus` */
export class Minus extends NumberDataSourceType {

    public static override _Q = 'c:minus';

}
/** Plus. Serialized as `c:plus` */
export class Plus extends NumberDataSourceType {

    public static override _Q = 'c:plus';

}
/** Error Bar Value Type. Serialized as `c:errValType` */
export class ErrorBarValueType extends OxmlLeafElement {

    public static override _Q = 'c:errValType';
    public static override _A = [':val',];
    /** Error Bar Type Value. Serialized as `:val` */
    public get val(): ErrorValues | undefined { return this._g(':val'); }
    public set val(v: ErrorValues | undefined) { this._s(':val', v); }

}
/** Error Bar Type. Serialized as `c:errBarType` */
export class ErrorBarType extends OxmlLeafElement {

    public static override _Q = 'c:errBarType';
    public static override _A = [':val',];
    /** Error Bar Type Value. Serialized as `:val` */
    public get val(): ErrorBarValues | undefined { return this._g(':val'); }
    public set val(v: ErrorBarValues | undefined) { this._s(':val', v); }

}
/** Error Bar Direction. Serialized as `c:errDir` */
export class ErrorDirection extends OxmlLeafElement {

    public static override _Q = 'c:errDir';
    public static override _A = [':val',];
    /** Error Bar Direction Value. Serialized as `:val` */
    public get val(): ErrorBarDirectionValues | undefined { return this._g(':val'); }
    public set val(v: ErrorBarDirectionValues | undefined) { this._s(':val', v); }

}
/** Trendline Label. Serialized as `c:trendlineLbl` */
export class TrendlineLabel extends OxmlCompositeElement<Layout | ChartText | NumberingFormat | ChartShapeProperties | TextProperties | ExtensionList> {

    public static override _Q = 'c:trendlineLbl';
    /** Layout. */
    public get layout(): Layout | undefined { return this._f(Layout); }
    /** Returns ChartText. */
    public get chartText(): ChartText | undefined { return this._f(ChartText); }
    /** Number Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Period. Serialized as `c:period` */
export class Period extends OxmlLeafElement {

    public static override _Q = 'c:period';
    public static override _A = [':val',];
    /** Period Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Polynomial Trendline Order. Serialized as `c:order` */
export class PolynomialOrder extends OxmlLeafElement {

    public static override _Q = 'c:order';
    public static override _A = [':val',];
    /** Order Value. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** Trendline Type. Serialized as `c:trendlineType` */
export class TrendlineType extends OxmlLeafElement {

    public static override _Q = 'c:trendlineType';
    public static override _A = [':val',];
    /** Trendline Type Value. Serialized as `:val` */
    public get val(): TrendlineValues | undefined { return this._g(':val'); }
    public set val(v: TrendlineValues | undefined) { this._s(':val', v); }

}
/** Defines the PictureOptions Class. Serialized as `c:pictureOptions` */
export class PictureOptions extends OxmlCompositeElement<ApplyToFront | ApplyToSides | ApplyToEnd | PictureFormat | PictureStackUnit> {

    public static override _Q = 'c:pictureOptions';
    /** Apply To Front. */
    public get applyToFront(): ApplyToFront | undefined { return this._f(ApplyToFront); }
    /** Apply To Sides. */
    public get applyToSides(): ApplyToSides | undefined { return this._f(ApplyToSides); }
    /** Apply to End. */
    public get applyToEnd(): ApplyToEnd | undefined { return this._f(ApplyToEnd); }
    /** Picture Format. */
    public get pictureFormat(): PictureFormat | undefined { return this._f(PictureFormat); }
    /** Picture Stack Unit. */
    public get pictureStackUnit(): PictureStackUnit | undefined { return this._f(PictureStackUnit); }

}
/** Marker. Serialized as `c:marker` */
export class Marker extends OxmlCompositeElement<Symbol | Size | ChartShapeProperties | ExtensionList> {

    public static override _Q = 'c:marker';
    /** Symbol. */
    public get symbol(): Symbol | undefined { return this._f(Symbol); }
    /** Size. */
    public get size(): Size | undefined { return this._f(Size); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Size. Serialized as `c:size` */
export class Size extends OxmlLeafElement {

    public static override _Q = 'c:size';
    public static override _A = [':val',];
    /** Marker Size Value. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** Symbol. Serialized as `c:symbol` */
export class Symbol extends OxmlLeafElement {

    public static override _Q = 'c:symbol';
    public static override _A = [':val',];
    /** Marker Style Value. Serialized as `:val` */
    public get val(): MarkerStyleValues | undefined { return this._g(':val'); }
    public set val(v: MarkerStyleValues | undefined) { this._s(':val', v); }

}
/** Perspective. Serialized as `c:perspective` */
export class Perspective extends OxmlLeafElement {

    public static override _Q = 'c:perspective';
    public static override _A = [':val',];
    /** Perspective Value. Serialized as `:val` */
    public get val(): ByteValue | undefined { return this._g(':val'); }
    public set val(v: ByteValue | undefined) { this._s(':val', v); }

}
/** Depth Percent. Serialized as `c:depthPercent` */
export class DepthPercent extends OxmlLeafElement {

    public static override _Q = 'c:depthPercent';
    public static override _A = [':val',];
    /** Depth Percent Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** Y Rotation. Serialized as `c:rotY` */
export class RotateY extends OxmlLeafElement {

    public static override _Q = 'c:rotY';
    public static override _A = [':val',];
    /** Y Rotation Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** Height Percent. Serialized as `c:hPercent` */
export class HeightPercent extends OxmlLeafElement {

    public static override _Q = 'c:hPercent';
    public static override _A = [':val',];
    /** Height Percent Value. Serialized as `:val` */
    public get val(): UInt16Value | undefined { return this._g(':val'); }
    public set val(v: UInt16Value | undefined) { this._s(':val', v); }

}
/** X Rotation. Serialized as `c:rotX` */
export class RotateX extends OxmlLeafElement {

    public static override _Q = 'c:rotX';
    public static override _A = [':val',];
    /** X Rotation Value. Serialized as `:val` */
    public get val(): SByteValue | undefined { return this._g(':val'); }
    public set val(v: SByteValue | undefined) { this._s(':val', v); }

}
/** Manual Layout. Serialized as `c:manualLayout` */
export class ManualLayout extends OxmlCompositeElement<LayoutTarget | LeftMode | TopMode | WidthMode | HeightMode | Left | Top | Width | Height | ExtensionList> {

    public static override _Q = 'c:manualLayout';
    /** Layout Target. */
    public get layoutTarget(): LayoutTarget | undefined { return this._f(LayoutTarget); }
    /** Left Mode. */
    public get leftMode(): LeftMode | undefined { return this._f(LeftMode); }
    /** Top Mode. */
    public get topMode(): TopMode | undefined { return this._f(TopMode); }
    /** Width Mode. */
    public get widthMode(): WidthMode | undefined { return this._f(WidthMode); }
    /** Height Mode. */
    public get heightMode(): HeightMode | undefined { return this._f(HeightMode); }
    /** Left. */
    public get left(): Left | undefined { return this._f(Left); }
    /** Top. */
    public get top(): Top | undefined { return this._f(Top); }
    /** Width. */
    public get width(): Width | undefined { return this._f(Width); }
    /** Height. */
    public get height(): Height | undefined { return this._f(Height); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the LayoutModeType Class. */
export abstract class LayoutModeType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Layout Mode Value. Serialized as `:val` */
    public get val(): LayoutModeValues | undefined { return this._g(':val'); }
    public set val(v: LayoutModeValues | undefined) { this._s(':val', v); }

}
/** Height Mode. Serialized as `c:hMode` */
export class HeightMode extends LayoutModeType {

    public static override _Q = 'c:hMode';

}
/** Width Mode. Serialized as `c:wMode` */
export class WidthMode extends LayoutModeType {

    public static override _Q = 'c:wMode';

}
/** Top Mode. Serialized as `c:yMode` */
export class TopMode extends LayoutModeType {

    public static override _Q = 'c:yMode';

}
/** Left Mode. Serialized as `c:xMode` */
export class LeftMode extends LayoutModeType {

    public static override _Q = 'c:xMode';

}
/** Layout Target. Serialized as `c:layoutTarget` */
export class LayoutTarget extends OxmlLeafElement {

    public static override _Q = 'c:layoutTarget';
    public static override _A = [':val',];
    /** Layout Target Value. Serialized as `:val` */
    public get val(): LayoutTargetValues | undefined { return this._g(':val'); }
    public set val(v: LayoutTargetValues | undefined) { this._s(':val', v); }

}
/** Defines the StringDataType Class. */
export abstract class StringDataType extends OxmlCompositeElement<PointCount | StringPoint | StrDataExtensionList> {

    /** Returns PointCount. */
    public get pointCount(): PointCount | undefined { return this._f(PointCount); }

}
/** Defines the StringCache Class. Serialized as `c:strCache` */
export class StringCache extends StringDataType {

    public static override _Q = 'c:strCache';

}
/** String Literal. Serialized as `c:strLit` */
export class StringLiteral extends StringDataType {

    public static override _Q = 'c:strLit';

}
/** Defines the StringReference Class. Serialized as `c:strRef` */
export class StringReference extends OxmlCompositeElement<Formula | StringCache | StrRefExtensionList> {

    public static override _Q = 'c:strRef';
    /** Returns Formula. */
    public get formula(): Formula | undefined { return this._f(Formula); }
    /** Returns StringCache. */
    public get stringCache(): StringCache | undefined { return this._f(StringCache); }
    /** Returns StrRefExtensionList. */
    public get strRefExtensionList(): StrRefExtensionList | undefined { return this._f(StrRefExtensionList); }

}
/** Multi Level String Reference. Serialized as `c:multiLvlStrRef` */
export class MultiLevelStringReference extends OxmlCompositeElement<Formula | MultiLevelStringCache | MultiLvlStrRefExtensionList> {

    public static override _Q = 'c:multiLvlStrRef';
    /** Returns Formula. */
    public get formula(): Formula | undefined { return this._f(Formula); }
    /** Returns MultiLevelStringCache. */
    public get multiLevelStringCache(): MultiLevelStringCache | undefined { return this._f(MultiLevelStringCache); }
    /** Returns MultiLvlStrRefExtensionList. */
    public get multiLvlStrRefExtensionList(): MultiLvlStrRefExtensionList | undefined { return this._f(MultiLvlStrRefExtensionList); }

}
/** Level. Serialized as `c:lvl` */
export class Level extends OxmlCompositeElement<StringPoint> {

    public static override _Q = 'c:lvl';

}
/** Defines the NumberDataType Class. */
export abstract class NumberDataType extends OxmlCompositeElement<FormatCode | PointCount | NumericPoint | ExtensionList> {

    /** Format Code. */
    public get formatCode(): FormatCode | undefined { return this._f(FormatCode); }
    /** Point Count. */
    public get pointCount(): PointCount | undefined { return this._f(PointCount); }

}
/** Defines the NumberingCache Class. Serialized as `c:numCache` */
export class NumberingCache extends NumberDataType {

    public static override _Q = 'c:numCache';

}
/** Number Literal. Serialized as `c:numLit` */
export class NumberLiteral extends NumberDataType {

    public static override _Q = 'c:numLit';

}
/** Number Reference. Serialized as `c:numRef` */
export class NumberReference extends OxmlCompositeElement<Formula | NumberingCache | NumRefExtensionList> {

    public static override _Q = 'c:numRef';
    /** Returns Formula. */
    public get formula(): Formula | undefined { return this._f(Formula); }
    /** Returns NumberingCache. */
    public get numberingCache(): NumberingCache | undefined { return this._f(NumberingCache); }
    /** Returns NumRefExtensionList. */
    public get numRefExtensionList(): NumRefExtensionList | undefined { return this._f(NumRefExtensionList); }

}
/** Defines the ExtensionList Class. Serialized as `c:extLst` */
export class ExtensionList extends OxmlCompositeElement<Extension> {

    public static override _Q = 'c:extLst';

}
/** Numeric Point. Serialized as `c:pt` */
export class NumericPoint extends OxmlCompositeElement<NumericValue> {

    public static override _Q = 'c:pt';
    public static override _A = [':idx',':formatCode',];
    /** Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Number Format. Serialized as `:formatCode` */
    public get formatCode(): StringValue | undefined { return this._g(':formatCode'); }
    public set formatCode(v: StringValue | undefined) { this._s(':formatCode', v); }
    /** Numeric Value. */
    public get numericValue(): NumericValue | undefined { return this._f(NumericValue); }

}
/** Pivot Name. Serialized as `c:name` */
export class PivotTableName extends OxmlLeafTextElement {

    public static override _Q = 'c:name';

}
/** First Footer. Serialized as `c:firstFooter` */
export class FirstFooter extends OxmlLeafTextElement {

    public static override _Q = 'c:firstFooter';

}
/** First Header. Serialized as `c:firstHeader` */
export class FirstHeader extends OxmlLeafTextElement {

    public static override _Q = 'c:firstHeader';

}
/** Even Footer. Serialized as `c:evenFooter` */
export class EvenFooter extends OxmlLeafTextElement {

    public static override _Q = 'c:evenFooter';

}
/** Even Header. Serialized as `c:evenHeader` */
export class EvenHeader extends OxmlLeafTextElement {

    public static override _Q = 'c:evenHeader';

}
/** Odd Footer. Serialized as `c:oddFooter` */
export class OddFooter extends OxmlLeafTextElement {

    public static override _Q = 'c:oddFooter';

}
/** Odd Header. Serialized as `c:oddHeader` */
export class OddHeader extends OxmlLeafTextElement {

    public static override _Q = 'c:oddHeader';

}
/** Format Code. Serialized as `c:formatCode` */
export class FormatCode extends OxmlLeafTextElement {

    public static override _Q = 'c:formatCode';

}
/** Numeric Value. Serialized as `c:v` */
export class NumericValue extends OxmlLeafTextElement {

    public static override _Q = 'c:v';

}
/** Extension. Serialized as `c:ext` */
export class Extension extends OxmlCompositeElement {

    public static override _Q = 'c:ext';
    public static override _A = [':uri',];
    /** Uniform Resource Identifier. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}
/** Defines the RelationshipIdType Class. */
export abstract class RelationshipIdType extends OxmlLeafElement {

    public static override _A = ['r:id',];
    /** Relationship Reference. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the UserShapesReference Class. Serialized as `c:userShapes` */
export class UserShapesReference extends RelationshipIdType {

    public static override _Q = 'c:userShapes';

}
/** Legacy Drawing for Headers and Footers. Serialized as `c:legacyDrawingHF` */
export class LegacyDrawingHeaderFooter extends RelationshipIdType {

    public static override _Q = 'c:legacyDrawingHF';

}
/** Reference to Chart Part. Serialized as `c:chart` */
export class ChartReference extends RelationshipIdType {

    public static override _Q = 'c:chart';

}
/** User Shapes. Serialized as `c:userShapes` */
export class UserShapes extends OxmlPartRootElement<CdrRelativeAnchorSize | CdrAbsoluteAnchorSize> {

    public static override _Q = 'c:userShapes';

}
/** Chart Space. Serialized as `c:chartSpace` */
export class ChartSpace extends OxmlPartRootElement<Date1904 | EditingLanguage | RoundedCorners | C14Style | Style | ColorMapOverride | PivotSource | Protection | Chart | ShapeProperties | TextProperties | ExternalData | PrintSettings | UserShapesReference | ChartSpaceExtensionList> {

    public static override _Q = 'c:chartSpace';
    /** Returns Date1904. */
    public get date1904(): Date1904 | undefined { return this._f(Date1904); }
    /** Returns EditingLanguage. */
    public get editingLanguage(): EditingLanguage | undefined { return this._f(EditingLanguage); }
    /** Returns RoundedCorners. */
    public get roundedCorners(): RoundedCorners | undefined { return this._f(RoundedCorners); }

}
/** Defines the DoubleType Class. */
export abstract class DoubleType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Floating Point Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Minimum. Serialized as `c:min` */
export class MinAxisValue extends DoubleType {

    public static override _Q = 'c:min';

}
/** Maximum. Serialized as `c:max` */
export class MaxAxisValue extends DoubleType {

    public static override _Q = 'c:max';

}
/** Custom Display Unit. Serialized as `c:custUnit` */
export class CustomDisplayUnit extends DoubleType {

    public static override _Q = 'c:custUnit';

}
/** Split Position. Serialized as `c:splitPos` */
export class SplitPosition extends DoubleType {

    public static override _Q = 'c:splitPos';

}
/** Error Bar Value. Serialized as `c:val` */
export class ErrorBarValue extends DoubleType {

    public static override _Q = 'c:val';

}
/** Intercept. Serialized as `c:intercept` */
export class Intercept extends DoubleType {

    public static override _Q = 'c:intercept';

}
/** Backward. Serialized as `c:backward` */
export class Backward extends DoubleType {

    public static override _Q = 'c:backward';

}
/** Forward. Serialized as `c:forward` */
export class Forward extends DoubleType {

    public static override _Q = 'c:forward';

}
/** Height. Serialized as `c:h` */
export class Height extends DoubleType {

    public static override _Q = 'c:h';

}
/** Width. Serialized as `c:w` */
export class Width extends DoubleType {

    public static override _Q = 'c:w';

}
/** Top. Serialized as `c:y` */
export class Top extends DoubleType {

    public static override _Q = 'c:y';

}
/** Left. Serialized as `c:x` */
export class Left extends DoubleType {

    public static override _Q = 'c:x';

}
/** Crossing Value. Serialized as `c:crossesAt` */
export class CrossesAt extends DoubleType {

    public static override _Q = 'c:crossesAt';

}
/** Crosses. Serialized as `c:crosses` */
export class Crosses extends OxmlLeafElement {

    public static override _Q = 'c:crosses';
    public static override _A = [':val',];
    /** Crosses Value. Serialized as `:val` */
    public get val(): CrossesValues | undefined { return this._g(':val'); }
    public set val(v: CrossesValues | undefined) { this._s(':val', v); }

}
/** Tick Label Position. Serialized as `c:tickLblPos` */
export class TickLabelPosition extends OxmlLeafElement {

    public static override _Q = 'c:tickLblPos';
    public static override _A = [':val',];
    /** Tick Label Position Value. Serialized as `:val` */
    public get val(): TickLabelPositionValues | undefined { return this._g(':val'); }
    public set val(v: TickLabelPositionValues | undefined) { this._s(':val', v); }

}
/** Defines the TickMarkType Class. */
export abstract class TickMarkType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Tick Mark Value. Serialized as `:val` */
    public get val(): TickMarkValues | undefined { return this._g(':val'); }
    public set val(v: TickMarkValues | undefined) { this._s(':val', v); }

}
/** Minor Tick Mark. Serialized as `c:minorTickMark` */
export class MinorTickMark extends TickMarkType {

    public static override _Q = 'c:minorTickMark';

}
/** Major Tick Mark. Serialized as `c:majorTickMark` */
export class MajorTickMark extends TickMarkType {

    public static override _Q = 'c:majorTickMark';

}
/** Title. Serialized as `c:title` */
export class Title extends OxmlCompositeElement<ChartText | Layout | Overlay | ChartShapeProperties | TextProperties | ExtensionList> {

    public static override _Q = 'c:title';
    /** Chart Text. */
    public get chartText(): ChartText | undefined { return this._f(ChartText); }
    /** Layout. */
    public get layout(): Layout | undefined { return this._f(Layout); }
    /** Overlay. */
    public get overlay(): Overlay | undefined { return this._f(Overlay); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns TextProperties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Axis Position. Serialized as `c:axPos` */
export class AxisPosition extends OxmlLeafElement {

    public static override _Q = 'c:axPos';
    public static override _A = [':val',];
    /** Axis Position Value. Serialized as `:val` */
    public get val(): AxisPositionValues | undefined { return this._g(':val'); }
    public set val(v: AxisPositionValues | undefined) { this._s(':val', v); }

}
/** Scaling. Serialized as `c:scaling` */
export class Scaling extends OxmlCompositeElement<LogBase | Orientation | MaxAxisValue | MinAxisValue | ExtensionList> {

    public static override _Q = 'c:scaling';
    /** Logarithmic Base. */
    public get logBase(): LogBase | undefined { return this._f(LogBase); }
    /** Axis Orientation. */
    public get orientation(): Orientation | undefined { return this._f(Orientation); }
    /** Maximum. */
    public get maxAxisValue(): MaxAxisValue | undefined { return this._f(MaxAxisValue); }
    /** Minimum. */
    public get minAxisValue(): MinAxisValue | undefined { return this._f(MinAxisValue); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Band Formats. Serialized as `c:bandFmts` */
export class BandFormats extends OxmlCompositeElement<BandFormat> {

    public static override _Q = 'c:bandFmts';

}
/** Surface Chart Series. Serialized as `c:ser` */
export class SurfaceChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | CategoryAxisData | Values | Bubble3D | SurfaceSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }
    /** Returns CategoryAxisData. */
    public get categoryAxisData(): CategoryAxisData | undefined { return this._f(CategoryAxisData); }
    /** Returns Values. */
    public get values(): Values | undefined { return this._f(Values); }
    /** Returns Bubble3D. */
    public get bubble3D(): Bubble3D | undefined { return this._f(Bubble3D); }
    /** Returns SurfaceSerExtensionList. */
    public get surfaceSerExtensionList(): SurfaceSerExtensionList | undefined { return this._f(SurfaceSerExtensionList); }

}
/** Pie Chart Series. Serialized as `c:ser` */
export class PieChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | Explosion | DataPoint | DataLabels | CategoryAxisData | Values | PieSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }
    /** Returns Explosion. */
    public get explosion(): Explosion | undefined { return this._f(Explosion); }

}
/** Area Chart Series. Serialized as `c:ser` */
export class AreaChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | DataPoint | DataLabels | Trendline | ErrorBars | CategoryAxisData | Values | AreaSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }

}
/** Bar Chart Series. Serialized as `c:ser` */
export class BarChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | InvertIfNegative | PictureOptions | DataPoint | DataLabels | Trendline | ErrorBars | CategoryAxisData | Values | Shape | BarSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns InvertIfNegative. */
    public get invertIfNegative(): InvertIfNegative | undefined { return this._f(InvertIfNegative); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }

}
/** Bar Grouping. Serialized as `c:grouping` */
export class BarGrouping extends OxmlLeafElement {

    public static override _Q = 'c:grouping';
    public static override _A = [':val',];
    /** Bar Grouping Value. Serialized as `:val` */
    public get val(): BarGroupingValues | undefined { return this._g(':val'); }
    public set val(v: BarGroupingValues | undefined) { this._s(':val', v); }

}
/** Bar Direction. Serialized as `c:barDir` */
export class BarDirection extends OxmlLeafElement {

    public static override _Q = 'c:barDir';
    public static override _A = [':val',];
    /** Bar Direction Value. Serialized as `:val` */
    public get val(): BarDirectionValues | undefined { return this._g(':val'); }
    public set val(v: BarDirectionValues | undefined) { this._s(':val', v); }

}
/** Data Labels. Serialized as `c:dLbls` */
export class DataLabels extends OxmlCompositeElement<DataLabel | Delete | NumberingFormat | ChartShapeProperties | TextProperties | DataLabelPosition | ShowLegendKey | ShowValue | ShowCategoryName | ShowSeriesName | ShowPercent | ShowBubbleSize | Separator | ShowLeaderLines | LeaderLines | DLblsExtensionList> {

    public static override _Q = 'c:dLbls';

}
/** Defines the LineChartSeries Class. Serialized as `c:ser` */
export class LineChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | Marker | PictureOptions | DataPoint | DataLabels | Trendline | ErrorBars | CategoryAxisData | Values | Smooth | LineSerExtensionList> {

    public static override _Q = 'c:ser';
    /** Index. */
    public get index(): Index | undefined { return this._f(Index); }
    /** Order. */
    public get order(): Order | undefined { return this._f(Order); }
    /** Series Text. */
    public get seriesText(): SeriesText | undefined { return this._f(SeriesText); }
    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }
    /** Returns Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }
    /** Returns PictureOptions. */
    public get pictureOptions(): PictureOptions | undefined { return this._f(PictureOptions); }

}
/** Grouping. Serialized as `c:grouping` */
export class Grouping extends OxmlLeafElement {

    public static override _Q = 'c:grouping';
    public static override _A = [':val',];
    /** Grouping Value. Serialized as `:val` */
    public get val(): GroupingValues | undefined { return this._g(':val'); }
    public set val(v: GroupingValues | undefined) { this._s(':val', v); }

}
/** Series Text. Serialized as `c:tx` */
export class SeriesText extends OxmlCompositeElement<StringReference | NumericValue> {

    public static override _Q = 'c:tx';
    /** Returns StringReference. */
    public get stringReference(): StringReference | undefined { return this._f(StringReference); }
    /** Returns NumericValue. */
    public get numericValue(): NumericValue | undefined { return this._f(NumericValue); }

}
/** Defines the UnsignedIntegerType Class. */
export abstract class UnsignedIntegerType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Integer Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Format ID. Serialized as `c:fmtId` */
export class FormatId extends UnsignedIntegerType {

    public static override _Q = 'c:fmtId';

}
/** Explosion. Serialized as `c:explosion` */
export class Explosion extends UnsignedIntegerType {

    public static override _Q = 'c:explosion';

}
/** Second Pie Point. Serialized as `c:secondPiePt` */
export class SecondPiePoint extends UnsignedIntegerType {

    public static override _Q = 'c:secondPiePt';

}
/** Point Count. Serialized as `c:ptCount` */
export class PointCount extends UnsignedIntegerType {

    public static override _Q = 'c:ptCount';

}
/** Crossing Axis ID. Serialized as `c:crossAx` */
export class CrossingAxis extends UnsignedIntegerType {

    public static override _Q = 'c:crossAx';

}
/** Axis ID. Serialized as `c:axId` */
export class AxisId extends UnsignedIntegerType {

    public static override _Q = 'c:axId';

}
/** Order. Serialized as `c:order` */
export class Order extends UnsignedIntegerType {

    public static override _Q = 'c:order';

}
/** Index. Serialized as `c:idx` */
export class Index extends UnsignedIntegerType {

    public static override _Q = 'c:idx';

}
/** Defines the ChartLinesType Class. */
export abstract class ChartLinesType extends OxmlCompositeElement<ChartShapeProperties> {

    /** Returns ChartShapeProperties. */
    public get chartShapeProperties(): ChartShapeProperties | undefined { return this._f(ChartShapeProperties); }

}
/** Defines the HighLowLines Class. Serialized as `c:hiLowLines` */
export class HighLowLines extends ChartLinesType {

    public static override _Q = 'c:hiLowLines';

}
/** Defines the SeriesLines Class. Serialized as `c:serLines` */
export class SeriesLines extends ChartLinesType {

    public static override _Q = 'c:serLines';

}
/** Minor Gridlines. Serialized as `c:minorGridlines` */
export class MinorGridlines extends ChartLinesType {

    public static override _Q = 'c:minorGridlines';

}
/** Major Gridlines. Serialized as `c:majorGridlines` */
export class MajorGridlines extends ChartLinesType {

    public static override _Q = 'c:majorGridlines';

}
/** Drop Lines. Serialized as `c:dropLines` */
export class DropLines extends ChartLinesType {

    public static override _Q = 'c:dropLines';

}
/** Leader Lines. Serialized as `c:leaderLines` */
export class LeaderLines extends ChartLinesType {

    public static override _Q = 'c:leaderLines';

}
/** Defines the ChartText Class. Serialized as `c:tx` */
export class ChartText extends OxmlCompositeElement<StringReference | RichText | StringLiteral> {

    public static override _Q = 'c:tx';
    /** String Reference. */
    public get stringReference(): StringReference | undefined { return this._f(StringReference); }
    /** Rich Text. */
    public get richText(): RichText | undefined { return this._f(RichText); }
    /** String Literal. */
    public get stringLiteral(): StringLiteral | undefined { return this._f(StringLiteral); }

}
/** Layout. Serialized as `c:layout` */
export class Layout extends OxmlCompositeElement<ManualLayout | ExtensionList> {

    public static override _Q = 'c:layout';
    /** Manual Layout. */
    public get manualLayout(): ManualLayout | undefined { return this._f(ManualLayout); }
    /** Chart Extensibility. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Formula Class. Serialized as `c:f` */
export class Formula extends OxmlLeafTextElement {

    public static override _Q = 'c:f';

}
/** Trendline Name. Serialized as `c:name` */
export class TrendlineName extends OxmlLeafTextElement {

    public static override _Q = 'c:name';

}
/** Separator. Serialized as `c:separator` */
export class Separator extends OxmlLeafTextElement {

    public static override _Q = 'c:separator';

}
/** Defines the BooleanType Class. */
export abstract class BooleanType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Boolean Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** True if we should render datalabels over the maximum scale. Serialized as `c:showDLblsOverMax` */
export class ShowDataLabelsOverMaximum extends BooleanType {

    public static override _Q = 'c:showDLblsOverMax';

}
/** True if only visible cells are plotted.. Serialized as `c:plotVisOnly` */
export class PlotVisibleOnly extends BooleanType {

    public static override _Q = 'c:plotVisOnly';

}
/** True if the chart automatic title has been deleted.. Serialized as `c:autoTitleDeleted` */
export class AutoTitleDeleted extends BooleanType {

    public static override _Q = 'c:autoTitleDeleted';

}
/** Defines the RoundedCorners Class. Serialized as `c:roundedCorners` */
export class RoundedCorners extends BooleanType {

    public static override _Q = 'c:roundedCorners';

}
/** Defines the Date1904 Class. Serialized as `c:date1904` */
export class Date1904 extends BooleanType {

    public static override _Q = 'c:date1904';

}
/** Defines the NoMultiLevelLabels Class. Serialized as `c:noMultiLvlLbl` */
export class NoMultiLevelLabels extends BooleanType {

    public static override _Q = 'c:noMultiLvlLbl';

}
/** Defines the AutoLabeled Class. Serialized as `c:auto` */
export class AutoLabeled extends BooleanType {

    public static override _Q = 'c:auto';

}
/** Defines the ShowNegativeBubbles Class. Serialized as `c:showNegBubbles` */
export class ShowNegativeBubbles extends BooleanType {

    public static override _Q = 'c:showNegBubbles';

}
/** Defines the ShowMarker Class. Serialized as `c:marker` */
export class ShowMarker extends BooleanType {

    public static override _Q = 'c:marker';

}
/** Defines the Smooth Class. Serialized as `c:smooth` */
export class Smooth extends BooleanType {

    public static override _Q = 'c:smooth';

}
/** Update Automatically. Serialized as `c:autoUpdate` */
export class AutoUpdate extends BooleanType {

    public static override _Q = 'c:autoUpdate';

}
/** User Interface. Serialized as `c:userInterface` */
export class UserInterface extends BooleanType {

    public static override _Q = 'c:userInterface';

}
/** Selection. Serialized as `c:selection` */
export class Selection extends BooleanType {

    public static override _Q = 'c:selection';

}
/** Formatting. Serialized as `c:formatting` */
export class Formatting extends BooleanType {

    public static override _Q = 'c:formatting';

}
/** Data Cannot Be Changed. Serialized as `c:data` */
export class Data extends BooleanType {

    public static override _Q = 'c:data';

}
/** Chart Object. Serialized as `c:chartObject` */
export class ChartObject extends BooleanType {

    public static override _Q = 'c:chartObject';

}
/** Apply to End. Serialized as `c:applyToEnd` */
export class ApplyToEnd extends BooleanType {

    public static override _Q = 'c:applyToEnd';

}
/** Apply To Sides. Serialized as `c:applyToSides` */
export class ApplyToSides extends BooleanType {

    public static override _Q = 'c:applyToSides';

}
/** Apply To Front. Serialized as `c:applyToFront` */
export class ApplyToFront extends BooleanType {

    public static override _Q = 'c:applyToFront';

}
/** No End Cap. Serialized as `c:noEndCap` */
export class NoEndCap extends BooleanType {

    public static override _Q = 'c:noEndCap';

}
/** Display Equation. Serialized as `c:dispEq` */
export class DisplayEquation extends BooleanType {

    public static override _Q = 'c:dispEq';

}
/** Display R Squared Value. Serialized as `c:dispRSqr` */
export class DisplayRSquaredValue extends BooleanType {

    public static override _Q = 'c:dispRSqr';

}
/** 3D Bubble. Serialized as `c:bubble3D` */
export class Bubble3D extends BooleanType {

    public static override _Q = 'c:bubble3D';

}
/** Invert if Negative. Serialized as `c:invertIfNegative` */
export class InvertIfNegative extends BooleanType {

    public static override _Q = 'c:invertIfNegative';

}
/** Show Legend Keys. Serialized as `c:showKeys` */
export class ShowKeys extends BooleanType {

    public static override _Q = 'c:showKeys';

}
/** Show Outline Border. Serialized as `c:showOutline` */
export class ShowOutlineBorder extends BooleanType {

    public static override _Q = 'c:showOutline';

}
/** Show Vertical Border. Serialized as `c:showVertBorder` */
export class ShowVerticalBorder extends BooleanType {

    public static override _Q = 'c:showVertBorder';

}
/** Show Horizontal Border. Serialized as `c:showHorzBorder` */
export class ShowHorizontalBorder extends BooleanType {

    public static override _Q = 'c:showHorzBorder';

}
/** Right Angle Axes. Serialized as `c:rAngAx` */
export class RightAngleAxes extends BooleanType {

    public static override _Q = 'c:rAngAx';

}
/** Overlay. Serialized as `c:overlay` */
export class Overlay extends BooleanType {

    public static override _Q = 'c:overlay';

}
/** Delete. Serialized as `c:delete` */
export class Delete extends BooleanType {

    public static override _Q = 'c:delete';

}
/** Wireframe. Serialized as `c:wireframe` */
export class Wireframe extends BooleanType {

    public static override _Q = 'c:wireframe';

}
/** Defines the VaryColors Class. Serialized as `c:varyColors` */
export class VaryColors extends BooleanType {

    public static override _Q = 'c:varyColors';

}
/** Show Leader Lines. Serialized as `c:showLeaderLines` */
export class ShowLeaderLines extends BooleanType {

    public static override _Q = 'c:showLeaderLines';

}
/** Show Bubble Size. Serialized as `c:showBubbleSize` */
export class ShowBubbleSize extends BooleanType {

    public static override _Q = 'c:showBubbleSize';

}
/** Show Percent. Serialized as `c:showPercent` */
export class ShowPercent extends BooleanType {

    public static override _Q = 'c:showPercent';

}
/** Show Series Name. Serialized as `c:showSerName` */
export class ShowSeriesName extends BooleanType {

    public static override _Q = 'c:showSerName';

}
/** Show Category Name. Serialized as `c:showCatName` */
export class ShowCategoryName extends BooleanType {

    public static override _Q = 'c:showCatName';

}
/** Show Value. Serialized as `c:showVal` */
export class ShowValue extends BooleanType {

    public static override _Q = 'c:showVal';

}
/** Show Legend Key. Serialized as `c:showLegendKey` */
export class ShowLegendKey extends BooleanType {

    public static override _Q = 'c:showLegendKey';

}
/** Data Label Position. Serialized as `c:dLblPos` */
export class DataLabelPosition extends OxmlLeafElement {

    public static override _Q = 'c:dLblPos';
    public static override _A = [':val',];
    /** Data Label Position Value. Serialized as `:val` */
    public get val(): DataLabelPositionValues | undefined { return this._g(':val'); }
    public set val(v: DataLabelPositionValues | undefined) { this._s(':val', v); }

}
/** Defines the TextBodyType Class. */
export abstract class TextBodyType extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Rich Text. Serialized as `c:rich` */
export class RichText extends TextBodyType {

    public static override _Q = 'c:rich';

}
/** Defines the TextProperties Class. Serialized as `c:txPr` */
export class TextProperties extends TextBodyType {

    public static override _Q = 'c:txPr';

}
/** Defines the ChartShapeProperties Class. Serialized as `c:spPr` */
export class ChartShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AExtensionList> {

    public static override _Q = 'c:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Number Format. Serialized as `c:numFmt` */
export class NumberingFormat extends OxmlLeafElement {

    public static override _Q = 'c:numFmt';
    public static override _A = [':formatCode',':sourceLinked',];
    /** Number Format Code. Serialized as `:formatCode` */
    public get formatCode(): StringValue | undefined { return this._g(':formatCode'); }
    public set formatCode(v: StringValue | undefined) { this._s(':formatCode', v); }
    /** Linked to Source. Serialized as `:sourceLinked` */
    public get sourceLinked(): BooleanValue | undefined { return this._g(':sourceLinked'); }
    public set sourceLinked(v: BooleanValue | undefined) { this._s(':sourceLinked', v); }

}

export function initDrawingChartsNamespace() {
    ChartExtensionList._C = {
        'c:ext': DataDisplayOptions16,
    };
    DisplayBlanksAs._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, DisplayBlanksAsValuesArray),
    };
    Legend._C = {
        'c:legendPos': LegendPosition,
        'c:legendEntry': LegendEntry,
        'c:layout': Layout,
        'c:overlay': Overlay,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:extLst': ExtensionList,
    };
    PlotArea._C = {
        'c:layout': Layout,
        'c:areaChart': AreaChart,
        'c:area3DChart': Area3DChart,
        'c:lineChart': LineChart,
        'c:line3DChart': Line3DChart,
        'c:stockChart': StockChart,
        'c:radarChart': RadarChart,
        'c:scatterChart': ScatterChart,
        'c:pieChart': PieChart,
        'c:pie3DChart': Pie3DChart,
        'c:doughnutChart': DoughnutChart,
        'c:barChart': BarChart,
        'c:bar3DChart': Bar3DChart,
        'c:ofPieChart': OfPieChart,
        'c:surfaceChart': SurfaceChart,
        'c:surface3DChart': Surface3DChart,
        'c:bubbleChart': BubbleChart,
        'c:valAx': ValueAxis,
        'c:catAx': CategoryAxis,
        'c:dateAx': DateAxis,
        'c:serAx': SeriesAxis,
        'c:dTable': DataTable,
        'c:spPr': ShapeProperties,
        'c:extLst': ExtensionList,
    };
    SurfaceType._C = {
        'c:thickness': Thickness,
        'c:spPr': ShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:extLst': ExtensionList,
    };
    BackWall._C = {
        'c:thickness': Thickness,
        'c:spPr': ShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:extLst': ExtensionList,
    };
    SideWall._C = {
        'c:thickness': Thickness,
        'c:spPr': ShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:extLst': ExtensionList,
    };
    Floor._C = {
        'c:thickness': Thickness,
        'c:spPr': ShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:extLst': ExtensionList,
    };
    View3D._C = {
        'c:rotX': RotateX,
        'c:hPercent': HeightPercent,
        'c:rotY': RotateY,
        'c:depthPercent': DepthPercent,
        'c:rAngAx': RightAngleAxes,
        'c:perspective': Perspective,
        'c:extLst': ExtensionList,
    };
    PivotFormats._C = {
        'c:pivotFmt': PivotFormat,
    };
    DataDisplayOptions16._C = {
        'c16r3:dispNaAsBlank': C16r3BooleanFalse,
    };
    ChartSpaceExtension._C = {
        'c14:pivotOptions': C14PivotOptions,
        'c14:sketchOptions': C14SketchOptions,
        'c15:pivotSource': C15PivotSource,
    };
    ChartSpaceExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ChartSpaceExtensionList._C = {
        'c:ext': ChartSpaceExtension,
    };
    PrintSettings._C = {
        'c:headerFooter': HeaderFooter,
        'c:pageMargins': PageMargins,
        'c:pageSetup': PageSetup,
        'c:legacyDrawingHF': LegacyDrawingHeaderFooter,
    };
    ExternalData._C = {
        'c:autoUpdate': AutoUpdate,
    };
    ExternalData._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Chart._C = {
        'c:title': Title,
        'c:autoTitleDeleted': AutoTitleDeleted,
        'c:pivotFmts': PivotFormats,
        'c:view3D': View3D,
        'c:floor': Floor,
        'c:sideWall': SideWall,
        'c:backWall': BackWall,
        'c:plotArea': PlotArea,
        'c:legend': Legend,
        'c:plotVisOnly': PlotVisibleOnly,
        'c:dispBlanksAs': DisplayBlanksAs,
        'c:showDLblsOverMax': ShowDataLabelsOverMaximum,
        'c:extLst': ChartExtensionList,
    };
    Protection._C = {
        'c:chartObject': ChartObject,
        'c:data': Data,
        'c:formatting': Formatting,
        'c:selection': Selection,
        'c:userInterface': UserInterface,
    };
    PivotSource._C = {
        'c:name': PivotTableName,
        'c:fmtId': FormatId,
        'c:extLst': ExtensionList,
    };
    ColorMapOverride._C = {
        'a:extLst': AExtensionList,
    };
    ColorMapOverride._D = {
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
    Style._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    EditingLanguage._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ValAxExtensionList._C = {
        'c:ext': ValAxExtension,
    };
    DisplayUnits._C = {
        'c:custUnit': CustomDisplayUnit,
        'c:builtInUnit': BuiltInUnit,
        'c:dispUnitsLbl': DisplayUnitsLabel,
        'c:extLst': ExtensionList,
    };
    CrossBetween._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, CrossBetweenValuesArray),
    };
    SerAxExtensionList._C = {
        'c:ext': SerAxExtension,
    };
    DateAxExtensionList._C = {
        'c:ext': DateAxExtension,
    };
    AxisUnitType._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    TimeUnitType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, TimeUnitValuesArray),
    };
    CatAxExtensionList._C = {
        'c:ext': CatAxExtension,
    };
    SkipType._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    LabelOffset._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    LabelAlignment._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, LabelAlignmentValuesArray),
    };
    Surface3DChartExtensionList._C = {
        'c:ext': Surface3DChartExtension,
    };
    SurfaceChartExtensionList._C = {
        'c:ext': SurfaceChartExtension,
    };
    BubbleChartExtensionList._C = {
        'c:ext': BubbleChartExtension,
    };
    SizeRepresents._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, SizeRepresentsValuesArray),
    };
    BubbleScale._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    BubbleChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:invertIfNegative': InvertIfNegative,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:trendline': Trendline,
        'c:errBars': ErrorBars,
        'c:xVal': XValues,
        'c:yVal': YValues,
        'c:bubbleSize': BubbleSize,
        'c:bubble3D': Bubble3D,
        'c:extLst': BubbleSerExtensionList,
    };
    Area3DChartExtensionList._C = {
        'c:ext': Area3DChartExtension,
    };
    AreaChartExtensionList._C = {
        'c:ext': AreaChartExtension,
    };
    Bar3DChartExtensionList._C = {
        'c:ext': Bar3DChartExtension,
    };
    BarChartExtensionList._C = {
        'c:ext': BarChartExtension,
    };
    Overlap._D = {
        ':val': new OxmlAttr(':val', OxmlType.SByteValue),
    };
    RadarChartExtensionList._C = {
        'c:ext': RadarChartExtension,
    };
    RadarChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:marker': Marker,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:cat': CategoryAxisData,
        'c:val': Values,
        'c:extLst': RadarSerExtensionList,
    };
    RadarStyle._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, RadarStyleValuesArray),
    };
    ScatterChartExtensionList._C = {
        'c:ext': ScatterChartExtension,
    };
    ScatterChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:marker': Marker,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:trendline': Trendline,
        'c:errBars': ErrorBars,
        'c:xVal': XValues,
        'c:yVal': YValues,
        'c:smooth': Smooth,
        'c:extLst': ScatterSerExtensionList,
    };
    ScatterStyle._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ScatterStyleValuesArray),
    };
    Line3DChartExtensionList._C = {
        'c:ext': Line3DChartExtension,
    };
    LineChartExtensionList._C = {
        'c:ext': LineChartExtension,
    };
    SurfaceSerExtensionList._C = {
        'c:ext': SurfaceSerExtension,
    };
    BubbleSerExtension._C = {
        'c14:invertSolidFillFmt': C14InvertSolidFillFormat,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    BubbleSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    BubbleSerExtensionList._C = {
        'c:ext': BubbleSerExtension,
    };
    PieSerExtensionList._C = {
        'c:ext': PieSerExtension,
    };
    AreaSerExtensionList._C = {
        'c:ext': AreaSerExtension,
    };
    BarSerExtension._C = {
        'c14:invertSolidFillFmt': C14InvertSolidFillFormat,
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    BarSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    BarSerExtensionList._C = {
        'c:ext': BarSerExtension,
    };
    Shape._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ShapeValuesArray),
    };
    RadarSerExtensionList._C = {
        'c:ext': RadarSerExtension,
    };
    ScatterSerExtensionList._C = {
        'c:ext': ScatterSerExtension,
    };
    LineSerExtensionList._C = {
        'c:ext': LineSerExtension,
    };
    AxisDataSourceType._C = {
        'c:multiLvlStrRef': MultiLevelStringReference,
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
        'c:strRef': StringReference,
        'c:strLit': StringLiteral,
    };
    XValues._C = {
        'c:multiLvlStrRef': MultiLevelStringReference,
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
        'c:strRef': StringReference,
        'c:strLit': StringLiteral,
    };
    CategoryAxisData._C = {
        'c:multiLvlStrRef': MultiLevelStringReference,
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
        'c:strRef': StringReference,
        'c:strLit': StringLiteral,
    };
    ErrorBars._C = {
        'c:errDir': ErrorDirection,
        'c:errBarType': ErrorBarType,
        'c:errValType': ErrorBarValueType,
        'c:noEndCap': NoEndCap,
        'c:plus': Plus,
        'c:minus': Minus,
        'c:val': ErrorBarValue,
        'c:spPr': ChartShapeProperties,
        'c:extLst': ExtensionList,
    };
    Trendline._C = {
        'c:name': TrendlineName,
        'c:spPr': ChartShapeProperties,
        'c:trendlineType': TrendlineType,
        'c:order': PolynomialOrder,
        'c:period': Period,
        'c:forward': Forward,
        'c:backward': Backward,
        'c:intercept': Intercept,
        'c:dispRSqr': DisplayRSquaredValue,
        'c:dispEq': DisplayEquation,
        'c:trendlineLbl': TrendlineLabel,
        'c:extLst': ExtensionList,
    };
    DataPoint._C = {
        'c:idx': Index,
        'c:invertIfNegative': InvertIfNegative,
        'c:marker': Marker,
        'c:bubble3D': Bubble3D,
        'c:explosion': Explosion,
        'c:spPr': ChartShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:extLst': ExtensionList,
    };
    DLblsExtensionList._C = {
        'c:ext': DLblsExtension,
    };
    DLblExtensionList._C = {
        'c:ext': DLblExtension,
    };
    MultiLvlStrRefExtensionList._C = {
        'c:ext': MultiLvlStrRefExtension,
    };
    MultiLevelStringCache._C = {
        'c:ptCount': PointCount,
        'c:lvl': Level,
        'c:extLst': ExtensionList,
    };
    StrRefExtensionList._C = {
        'c:ext': StrRefExtension,
    };
    StrDataExtensionList._C = {
        'c:ext': StrDataExtension,
    };
    NumRefExtensionList._C = {
        'c:ext': NumRefExtension,
    };
    Pie3DChartExtensionList._C = {
        'c:ext': Pie3DChartExtension,
    };
    PieChartExtensionList._C = {
        'c:ext': PieChartExtension,
    };
    StockChartExtensionList._C = {
        'c:ext': StockChartExtension,
    };
    UpDownBars._C = {
        'c:gapWidth': GapWidth,
        'c:upBars': UpBars,
        'c:downBars': DownBars,
        'c:extLst': ExtensionList,
    };
    ValAxExtension._C = {
        'c15:numFmt': C15NumberingFormat,
    };
    ValAxExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SerAxExtension._C = {
        'c15:numFmt': C15NumberingFormat,
    };
    SerAxExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    DateAxExtension._C = {
        'c15:numFmt': C15NumberingFormat,
    };
    DateAxExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CatAxExtension._C = {
        'c15:numFmt': C15NumberingFormat,
    };
    CatAxExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    Surface3DChartExtension._C = {
        'c15:filteredSurfaceSeries': C15FilteredSurfaceSeries,
    };
    Surface3DChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SurfaceChartExtension._C = {
        'c15:filteredSurfaceSeries': C15FilteredSurfaceSeries,
    };
    SurfaceChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    BubbleChartExtension._C = {
        'c15:filteredBubbleSeries': C15FilteredBubbleSeries,
    };
    BubbleChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    Area3DChartExtension._C = {
        'c15:filteredAreaSeries': C15FilteredAreaSeries,
    };
    Area3DChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    AreaChartExtension._C = {
        'c15:filteredAreaSeries': C15FilteredAreaSeries,
    };
    AreaChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    Bar3DChartExtension._C = {
        'c15:filteredBarSeries': C15FilteredBarSeries,
    };
    Bar3DChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    BarChartExtension._C = {
        'c15:filteredBarSeries': C15FilteredBarSeries,
    };
    BarChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    RadarChartExtension._C = {
        'c15:filteredRadarSeries': C15FilteredRadarSeries,
    };
    RadarChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ScatterChartExtension._C = {
        'c15:filteredScatterSeries': C15FilteredScatterSeries,
    };
    ScatterChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    Line3DChartExtension._C = {
        'c15:filteredLineSeries': C15FilteredLineSeriesExtension,
    };
    Line3DChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    LineChartExtension._C = {
        'c15:filteredLineSeries': C15FilteredLineSeriesExtension,
    };
    LineChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SurfaceSerExtension._C = {
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    SurfaceSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PieSerExtension._C = {
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    PieSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    AreaSerExtension._C = {
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    AreaSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    RadarSerExtension._C = {
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    RadarSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ScatterSerExtension._C = {
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    ScatterSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    LineSerExtension._C = {
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
    };
    LineSerExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    DLblsExtension._C = {
        'c15:tx': C15ChartText,
        'c15:dlblFieldTable': C15DataLabelFieldTable,
        'c15:showDataLabelsRange': C15ShowDataLabelsRange,
        'c15:spPr': C15ShapeProperties,
        'c15:layout': C15Layout,
        'c15:showLeaderLines': C15ShowLeaderLines,
        'c15:leaderLines': C15LeaderLines,
    };
    DLblsExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    DLblExtension._C = {
        'c15:dlblFieldTable': C15DataLabelFieldTable,
        'c15:xForSave': C15ExceptionForSave,
        'c15:showDataLabelsRange': C15ShowDataLabelsRange,
        'c15:spPr': C15ShapeProperties,
        'c15:layout': C15Layout,
    };
    DLblExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    MultiLvlStrRefExtension._C = {
        'c15:fullRef': C15FullReference,
        'c15:levelRef': C15LevelReference,
        'c15:formulaRef': C15FormulaReference,
    };
    MultiLvlStrRefExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    StrRefExtension._C = {
        'c15:fullRef': C15FullReference,
        'c15:levelRef': C15LevelReference,
        'c15:formulaRef': C15FormulaReference,
    };
    StrRefExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    StrDataExtension._C = {
        'c15:autoCat': C15AutoGeneneratedCategories,
    };
    StrDataExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    NumRefExtension._C = {
        'c15:fullRef': C15FullReference,
        'c15:levelRef': C15LevelReference,
        'c15:formulaRef': C15FormulaReference,
    };
    NumRefExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    Pie3DChartExtension._C = {
        'c15:filteredPieSeries': C15FilteredPieSeries,
    };
    Pie3DChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PieChartExtension._C = {
        'c15:filteredPieSeries': C15FilteredPieSeries,
    };
    PieChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    StockChartExtension._C = {
        'c15:filteredLineSeries': C15FilteredLineSeriesExtension,
    };
    StockChartExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    Thickness._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    StringPoint._C = {
        'c:v': NumericValue,
    };
    StringPoint._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    HoleSize._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    FirstSliceAngle._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    DataTable._C = {
        'c:showHorzBorder': ShowHorizontalBorder,
        'c:showVertBorder': ShowVerticalBorder,
        'c:showOutline': ShowOutlineBorder,
        'c:showKeys': ShowKeys,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:extLst': ExtensionList,
    };
    SeriesAxis._C = {
        'c:axId': AxisId,
        'c:scaling': Scaling,
        'c:delete': Delete,
        'c:axPos': AxisPosition,
        'c:majorGridlines': MajorGridlines,
        'c:minorGridlines': MinorGridlines,
        'c:title': Title,
        'c:numFmt': NumberingFormat,
        'c:majorTickMark': MajorTickMark,
        'c:minorTickMark': MinorTickMark,
        'c:tickLblPos': TickLabelPosition,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:crossAx': CrossingAxis,
        'c:crosses': Crosses,
        'c:crossesAt': CrossesAt,
        'c:tickLblSkip': TickLabelSkip,
        'c:tickMarkSkip': TickMarkSkip,
        'c:extLst': SerAxExtensionList,
    };
    DateAxis._C = {
        'c:axId': AxisId,
        'c:scaling': Scaling,
        'c:delete': Delete,
        'c:axPos': AxisPosition,
        'c:majorGridlines': MajorGridlines,
        'c:minorGridlines': MinorGridlines,
        'c:title': Title,
        'c:numFmt': NumberingFormat,
        'c:majorTickMark': MajorTickMark,
        'c:minorTickMark': MinorTickMark,
        'c:tickLblPos': TickLabelPosition,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:crossAx': CrossingAxis,
        'c:crosses': Crosses,
        'c:crossesAt': CrossesAt,
        'c:auto': AutoLabeled,
        'c:lblOffset': LabelOffset,
        'c:baseTimeUnit': BaseTimeUnit,
        'c:majorUnit': MajorUnit,
        'c:majorTimeUnit': MajorTimeUnit,
        'c:minorUnit': MinorUnit,
        'c:minorTimeUnit': MinorTimeUnit,
        'c:extLst': DateAxExtensionList,
    };
    CategoryAxis._C = {
        'c:axId': AxisId,
        'c:scaling': Scaling,
        'c:delete': Delete,
        'c:axPos': AxisPosition,
        'c:majorGridlines': MajorGridlines,
        'c:minorGridlines': MinorGridlines,
        'c:title': Title,
        'c:numFmt': NumberingFormat,
        'c:majorTickMark': MajorTickMark,
        'c:minorTickMark': MinorTickMark,
        'c:tickLblPos': TickLabelPosition,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:crossAx': CrossingAxis,
        'c:crosses': Crosses,
        'c:crossesAt': CrossesAt,
        'c:auto': AutoLabeled,
        'c:lblAlgn': LabelAlignment,
        'c:lblOffset': LabelOffset,
        'c:tickLblSkip': TickLabelSkip,
        'c:tickMarkSkip': TickMarkSkip,
        'c:noMultiLvlLbl': NoMultiLevelLabels,
        'c:extLst': CatAxExtensionList,
    };
    ValueAxis._C = {
        'c:axId': AxisId,
        'c:scaling': Scaling,
        'c:delete': Delete,
        'c:axPos': AxisPosition,
        'c:majorGridlines': MajorGridlines,
        'c:minorGridlines': MinorGridlines,
        'c:title': Title,
        'c:numFmt': NumberingFormat,
        'c:majorTickMark': MajorTickMark,
        'c:minorTickMark': MinorTickMark,
        'c:tickLblPos': TickLabelPosition,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:crossAx': CrossingAxis,
        'c:crosses': Crosses,
        'c:crossesAt': CrossesAt,
        'c:crossBetween': CrossBetween,
        'c:majorUnit': MajorUnit,
        'c:minorUnit': MinorUnit,
        'c:dispUnits': DisplayUnits,
        'c:extLst': ValAxExtensionList,
    };
    BubbleChart._C = {
        'c:varyColors': VaryColors,
        'c:ser': BubbleChartSeries,
        'c:dLbls': DataLabels,
        'c:bubble3D': Bubble3D,
        'c:bubbleScale': BubbleScale,
        'c:showNegBubbles': ShowNegativeBubbles,
        'c:sizeRepresents': SizeRepresents,
        'c:axId': AxisId,
        'c:extLst': BubbleChartExtensionList,
    };
    Surface3DChart._C = {
        'c:wireframe': Wireframe,
        'c:varyColors': VaryColors,
        'c:ser': SurfaceChartSeries,
        'c:bandFmts': BandFormats,
        'c:axId': AxisId,
        'c:extLst': Surface3DChartExtensionList,
    };
    SurfaceChart._C = {
        'c:wireframe': Wireframe,
        'c:ser': SurfaceChartSeries,
        'c:bandFmts': BandFormats,
        'c:axId': AxisId,
        'c:extLst': SurfaceChartExtensionList,
    };
    OfPieChart._C = {
        'c:ofPieType': OfPieType,
        'c:varyColors': VaryColors,
        'c:ser': PieChartSeries,
        'c:dLbls': DataLabels,
        'c:gapWidth': GapWidth,
        'c:splitType': SplitType,
        'c:splitPos': SplitPosition,
        'c:custSplit': CustomSplit,
        'c:secondPieSize': SecondPieSize,
        'c:serLines': SeriesLines,
        'c:extLst': ExtensionList,
    };
    Bar3DChart._C = {
        'c:barDir': BarDirection,
        'c:grouping': BarGrouping,
        'c:varyColors': VaryColors,
        'c:ser': BarChartSeries,
        'c:dLbls': DataLabels,
        'c:gapWidth': GapWidth,
        'c:gapDepth': GapDepth,
        'c:shape': Shape,
        'c:axId': AxisId,
        'c:extLst': Bar3DChartExtensionList,
    };
    BarChart._C = {
        'c:barDir': BarDirection,
        'c:grouping': BarGrouping,
        'c:varyColors': VaryColors,
        'c:ser': BarChartSeries,
        'c:dLbls': DataLabels,
        'c:gapWidth': GapWidth,
        'c:overlap': Overlap,
        'c:serLines': SeriesLines,
        'c:axId': AxisId,
        'c:extLst': BarChartExtensionList,
    };
    DoughnutChart._C = {
        'c:varyColors': VaryColors,
        'c:ser': PieChartSeries,
        'c:dLbls': DataLabels,
        'c:firstSliceAng': FirstSliceAngle,
        'c:holeSize': HoleSize,
        'c:extLst': ExtensionList,
    };
    Pie3DChart._C = {
        'c:varyColors': VaryColors,
        'c:ser': PieChartSeries,
        'c:dLbls': DataLabels,
        'c:extLst': Pie3DChartExtensionList,
    };
    PieChart._C = {
        'c:varyColors': VaryColors,
        'c:ser': PieChartSeries,
        'c:dLbls': DataLabels,
        'c:firstSliceAng': FirstSliceAngle,
        'c:extLst': PieChartExtensionList,
    };
    ScatterChart._C = {
        'c:scatterStyle': ScatterStyle,
        'c:varyColors': VaryColors,
        'c:ser': ScatterChartSeries,
        'c:dLbls': DataLabels,
        'c:axId': AxisId,
        'c:extLst': ScatterChartExtensionList,
    };
    RadarChart._C = {
        'c:radarStyle': RadarStyle,
        'c:varyColors': VaryColors,
        'c:ser': RadarChartSeries,
        'c:dLbls': DataLabels,
        'c:axId': AxisId,
        'c:extLst': RadarChartExtensionList,
    };
    StockChart._C = {
        'c:ser': LineChartSeries,
        'c:dLbls': DataLabels,
        'c:dropLines': DropLines,
        'c:hiLowLines': HighLowLines,
        'c:upDownBars': UpDownBars,
        'c:axId': AxisId,
        'c:extLst': StockChartExtensionList,
    };
    Line3DChart._C = {
        'c:grouping': Grouping,
        'c:varyColors': VaryColors,
        'c:ser': LineChartSeries,
        'c:dLbls': DataLabels,
        'c:dropLines': DropLines,
        'c:gapDepth': GapDepth,
        'c:axId': AxisId,
        'c:extLst': Line3DChartExtensionList,
    };
    LineChart._C = {
        'c:grouping': Grouping,
        'c:varyColors': VaryColors,
        'c:ser': LineChartSeries,
        'c:dLbls': DataLabels,
        'c:dropLines': DropLines,
        'c:hiLowLines': HighLowLines,
        'c:upDownBars': UpDownBars,
        'c:marker': ShowMarker,
        'c:smooth': Smooth,
        'c:axId': AxisId,
        'c:extLst': LineChartExtensionList,
    };
    Area3DChart._C = {
        'c:grouping': Grouping,
        'c:varyColors': VaryColors,
        'c:ser': AreaChartSeries,
        'c:dLbls': DataLabels,
        'c:dropLines': DropLines,
        'c:gapDepth': GapDepth,
        'c:axId': AxisId,
        'c:extLst': Area3DChartExtensionList,
    };
    AreaChart._C = {
        'c:grouping': Grouping,
        'c:varyColors': VaryColors,
        'c:ser': AreaChartSeries,
        'c:dLbls': DataLabels,
        'c:dropLines': DropLines,
        'c:axId': AxisId,
        'c:extLst': AreaChartExtensionList,
    };
    DataLabel._C = {
        'c:idx': Index,
        'c:delete': Delete,
        'c:layout': Layout,
        'c:tx': ChartText,
        'c:numFmt': NumberingFormat,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:dLblPos': DataLabelPosition,
        'c:showLegendKey': ShowLegendKey,
        'c:showVal': ShowValue,
        'c:showCatName': ShowCategoryName,
        'c:showSerName': ShowSeriesName,
        'c:showPercent': ShowPercent,
        'c:showBubbleSize': ShowBubbleSize,
        'c:separator': Separator,
        'c:extLst': DLblExtensionList,
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
    PageSetup._D = {
        ':paperSize': new OxmlAttr(':paperSize', OxmlType.UInt32Value),
        ':firstPageNumber': new OxmlAttr(':firstPageNumber', OxmlType.Int32Value),
        ':orientation': new OxmlAttr(':orientation', OxmlType.EnumValue, PageSetupOrientationValuesArray),
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
        'c:oddHeader': OddHeader,
        'c:oddFooter': OddFooter,
        'c:evenHeader': EvenHeader,
        'c:evenFooter': EvenFooter,
        'c:firstHeader': FirstHeader,
        'c:firstFooter': FirstFooter,
    };
    HeaderFooter._D = {
        ':alignWithMargins': new OxmlAttr(':alignWithMargins', OxmlType.BooleanValue),
        ':differentOddEven': new OxmlAttr(':differentOddEven', OxmlType.BooleanValue),
        ':differentFirst': new OxmlAttr(':differentFirst', OxmlType.BooleanValue),
    };
    LegendEntry._C = {
        'c:idx': Index,
        'c:delete': Delete,
        'c:txPr': TextProperties,
        'c:extLst': ExtensionList,
    };
    LegendPosition._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, LegendPositionValuesArray),
    };
    PivotFormat._C = {
        'c:idx': Index,
        'c:spPr': ShapeProperties,
        'c:marker': Marker,
        'c:dLbl': DataLabel,
        'c:extLst': ExtensionList,
    };
    Orientation._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, OrientationValuesArray),
    };
    LogBase._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    DisplayUnitsLabel._C = {
        'c:layout': Layout,
        'c:tx': ChartText,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
    };
    BuiltInUnit._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, BuiltInUnitValuesArray),
    };
    PictureStackUnit._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    PictureFormat._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, PictureFormatValuesArray),
    };
    BandFormat._C = {
        'c:idx': Index,
        'c:spPr': ChartShapeProperties,
    };
    SecondPieSize._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    CustomSplit._C = {
        'c:secondPiePt': SecondPiePoint,
    };
    SplitType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, SplitValuesArray),
    };
    OfPieType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, OfPieValuesArray),
    };
    UpDownBarType._C = {
        'c:spPr': ChartShapeProperties,
    };
    DownBars._C = {
        'c:spPr': ChartShapeProperties,
    };
    UpBars._C = {
        'c:spPr': ChartShapeProperties,
    };
    GapAmountType._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    NumberDataSourceType._C = {
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
    };
    BubbleSize._C = {
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
    };
    YValues._C = {
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
    };
    Values._C = {
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
    };
    Minus._C = {
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
    };
    Plus._C = {
        'c:numRef': NumberReference,
        'c:numLit': NumberLiteral,
    };
    ErrorBarValueType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ErrorValuesArray),
    };
    ErrorBarType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ErrorBarValuesArray),
    };
    ErrorDirection._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ErrorBarDirectionValuesArray),
    };
    TrendlineLabel._C = {
        'c:layout': Layout,
        'c:tx': ChartText,
        'c:numFmt': NumberingFormat,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:extLst': ExtensionList,
    };
    Period._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    PolynomialOrder._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    TrendlineType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, TrendlineValuesArray),
    };
    PictureOptions._C = {
        'c:applyToFront': ApplyToFront,
        'c:applyToSides': ApplyToSides,
        'c:applyToEnd': ApplyToEnd,
        'c:pictureFormat': PictureFormat,
        'c:pictureStackUnit': PictureStackUnit,
    };
    Marker._C = {
        'c:symbol': Symbol,
        'c:size': Size,
        'c:spPr': ChartShapeProperties,
        'c:extLst': ExtensionList,
    };
    Size._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    Symbol._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, MarkerStyleValuesArray),
    };
    Perspective._D = {
        ':val': new OxmlAttr(':val', OxmlType.ByteValue),
    };
    DepthPercent._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    RotateY._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    HeightPercent._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt16Value),
    };
    RotateX._D = {
        ':val': new OxmlAttr(':val', OxmlType.SByteValue),
    };
    ManualLayout._C = {
        'c:layoutTarget': LayoutTarget,
        'c:xMode': LeftMode,
        'c:yMode': TopMode,
        'c:wMode': WidthMode,
        'c:hMode': HeightMode,
        'c:x': Left,
        'c:y': Top,
        'c:w': Width,
        'c:h': Height,
        'c:extLst': ExtensionList,
    };
    LayoutModeType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, LayoutModeValuesArray),
    };
    LayoutTarget._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, LayoutTargetValuesArray),
    };
    StringDataType._C = {
        'c:ptCount': PointCount,
        'c:pt': StringPoint,
        'c:extLst': StrDataExtensionList,
    };
    StringCache._C = {
        'c:ptCount': PointCount,
        'c:pt': StringPoint,
        'c:extLst': StrDataExtensionList,
    };
    StringLiteral._C = {
        'c:ptCount': PointCount,
        'c:pt': StringPoint,
        'c:extLst': StrDataExtensionList,
    };
    StringReference._C = {
        'c:f': Formula,
        'c:strCache': StringCache,
        'c:extLst': StrRefExtensionList,
    };
    MultiLevelStringReference._C = {
        'c:f': Formula,
        'c:multiLvlStrCache': MultiLevelStringCache,
        'c:extLst': MultiLvlStrRefExtensionList,
    };
    Level._C = {
        'c:pt': StringPoint,
    };
    NumberDataType._C = {
        'c:formatCode': FormatCode,
        'c:ptCount': PointCount,
        'c:pt': NumericPoint,
        'c:extLst': ExtensionList,
    };
    NumberingCache._C = {
        'c:formatCode': FormatCode,
        'c:ptCount': PointCount,
        'c:pt': NumericPoint,
        'c:extLst': ExtensionList,
    };
    NumberLiteral._C = {
        'c:formatCode': FormatCode,
        'c:ptCount': PointCount,
        'c:pt': NumericPoint,
        'c:extLst': ExtensionList,
    };
    NumberReference._C = {
        'c:f': Formula,
        'c:numCache': NumberingCache,
        'c:extLst': NumRefExtensionList,
    };
    ExtensionList._C = {
        'c:ext': Extension,
    };
    NumericPoint._C = {
        'c:v': NumericValue,
    };
    NumericPoint._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
        ':formatCode': new OxmlAttr(':formatCode', OxmlType.StringValue),
    };
    Extension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    RelationshipIdType._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    UserShapes._C = {
        'cdr:relSizeAnchor': CdrRelativeAnchorSize,
        'cdr:absSizeAnchor': CdrAbsoluteAnchorSize,
    };
    ChartSpace._C = {
        'c:date1904': Date1904,
        'c:lang': EditingLanguage,
        'c:roundedCorners': RoundedCorners,
        'c14:style': C14Style,
        'c:style': Style,
        'c:clrMapOvr': ColorMapOverride,
        'c:pivotSource': PivotSource,
        'c:protection': Protection,
        'c:chart': Chart,
        'c:spPr': ShapeProperties,
        'c:txPr': TextProperties,
        'c:externalData': ExternalData,
        'c:printSettings': PrintSettings,
        'c:userShapes': UserShapesReference,
        'c:extLst': ChartSpaceExtensionList,
    };
    DoubleType._D = {
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    Crosses._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, CrossesValuesArray),
    };
    TickLabelPosition._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, TickLabelPositionValuesArray),
    };
    TickMarkType._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, TickMarkValuesArray),
    };
    Title._C = {
        'c:tx': ChartText,
        'c:layout': Layout,
        'c:overlay': Overlay,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:extLst': ExtensionList,
    };
    AxisPosition._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, AxisPositionValuesArray),
    };
    Scaling._C = {
        'c:logBase': LogBase,
        'c:orientation': Orientation,
        'c:max': MaxAxisValue,
        'c:min': MinAxisValue,
        'c:extLst': ExtensionList,
    };
    BandFormats._C = {
        'c:bandFmt': BandFormat,
    };
    SurfaceChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:cat': CategoryAxisData,
        'c:val': Values,
        'c:bubble3D': Bubble3D,
        'c:extLst': SurfaceSerExtensionList,
    };
    PieChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:explosion': Explosion,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:cat': CategoryAxisData,
        'c:val': Values,
        'c:extLst': PieSerExtensionList,
    };
    AreaChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:pictureOptions': PictureOptions,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:trendline': Trendline,
        'c:errBars': ErrorBars,
        'c:cat': CategoryAxisData,
        'c:val': Values,
        'c:extLst': AreaSerExtensionList,
    };
    BarChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:invertIfNegative': InvertIfNegative,
        'c:pictureOptions': PictureOptions,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:trendline': Trendline,
        'c:errBars': ErrorBars,
        'c:cat': CategoryAxisData,
        'c:val': Values,
        'c:shape': Shape,
        'c:extLst': BarSerExtensionList,
    };
    BarGrouping._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, BarGroupingValuesArray),
    };
    BarDirection._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, BarDirectionValuesArray),
    };
    DataLabels._C = {
        'c:dLbl': DataLabel,
        'c:delete': Delete,
        'c:numFmt': NumberingFormat,
        'c:spPr': ChartShapeProperties,
        'c:txPr': TextProperties,
        'c:dLblPos': DataLabelPosition,
        'c:showLegendKey': ShowLegendKey,
        'c:showVal': ShowValue,
        'c:showCatName': ShowCategoryName,
        'c:showSerName': ShowSeriesName,
        'c:showPercent': ShowPercent,
        'c:showBubbleSize': ShowBubbleSize,
        'c:separator': Separator,
        'c:showLeaderLines': ShowLeaderLines,
        'c:leaderLines': LeaderLines,
        'c:extLst': DLblsExtensionList,
    };
    LineChartSeries._C = {
        'c:idx': Index,
        'c:order': Order,
        'c:tx': SeriesText,
        'c:spPr': ChartShapeProperties,
        'c:marker': Marker,
        'c:pictureOptions': PictureOptions,
        'c:dPt': DataPoint,
        'c:dLbls': DataLabels,
        'c:trendline': Trendline,
        'c:errBars': ErrorBars,
        'c:cat': CategoryAxisData,
        'c:val': Values,
        'c:smooth': Smooth,
        'c:extLst': LineSerExtensionList,
    };
    Grouping._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, GroupingValuesArray),
    };
    SeriesText._C = {
        'c:strRef': StringReference,
        'c:v': NumericValue,
    };
    UnsignedIntegerType._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    ChartLinesType._C = {
        'c:spPr': ChartShapeProperties,
    };
    HighLowLines._C = {
        'c:spPr': ChartShapeProperties,
    };
    SeriesLines._C = {
        'c:spPr': ChartShapeProperties,
    };
    MinorGridlines._C = {
        'c:spPr': ChartShapeProperties,
    };
    MajorGridlines._C = {
        'c:spPr': ChartShapeProperties,
    };
    DropLines._C = {
        'c:spPr': ChartShapeProperties,
    };
    LeaderLines._C = {
        'c:spPr': ChartShapeProperties,
    };
    ChartText._C = {
        'c:strRef': StringReference,
        'c:rich': RichText,
        'c:strLit': StringLiteral,
    };
    Layout._C = {
        'c:manualLayout': ManualLayout,
        'c:extLst': ExtensionList,
    };
    BooleanType._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    DataLabelPosition._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, DataLabelPositionValuesArray),
    };
    TextBodyType._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    RichText._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    TextProperties._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
    };
    ChartShapeProperties._C = {
        'a:xfrm': ATransform2D,
        'a:custGeom': ACustomGeometry,
        'a:prstGeom': APresetGeometry,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:extLst': AExtensionList,
    };
    ChartShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    NumberingFormat._D = {
        ':formatCode': new OxmlAttr(':formatCode', OxmlType.StringValue),
        ':sourceLinked': new OxmlAttr(':sourceLinked', OxmlType.BooleanValue),
    };
    return {
        prefix: 'c',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/chart',
    };
}
