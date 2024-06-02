import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../framework/OxmlLeafTextElement';
import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { StringValue } from '../../../framework/types/StringValue';
import { ByteValue } from '../../../framework/types/ByteValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { UInt16Value } from '../../../framework/types/UInt16Value';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { SByteValue } from '../../../framework/types/SByteValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { ColorSchemeIndexValues } from '../../Drawing';
import { BlackWhiteModeValues } from '../../Drawing';
import { BooleanFalse as C16r3BooleanFalse } from '../../Office2019/Drawing/Chart';
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
export declare enum LayoutTargetValues {
    /** Inner. Serialized value: `inner` */
    Inner = "inner",
    /** Outer. Serialized value: `outer` */
    Outer = "outer"
}
export declare const LayoutTargetValuesArray: readonly [LayoutTargetValues.Inner, LayoutTargetValues.Outer];
export declare enum LayoutModeValues {
    /** Edge. Serialized value: `edge` */
    Edge = "edge",
    /** Factor. Serialized value: `factor` */
    Factor = "factor"
}
export declare const LayoutModeValuesArray: readonly [LayoutModeValues.Edge, LayoutModeValues.Factor];
export declare enum SizeRepresentsValues {
    /** Bubble Size Represents Area. Serialized value: `area` */
    Area = "area",
    /** Bubble Size Represents Width. Serialized value: `w` */
    Width = "w"
}
export declare const SizeRepresentsValuesArray: readonly [SizeRepresentsValues.Area, SizeRepresentsValues.Width];
export declare enum LabelAlignmentValues {
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r"
}
export declare const LabelAlignmentValuesArray: readonly [LabelAlignmentValues.Center, LabelAlignmentValues.Left, LabelAlignmentValues.Right];
export declare enum DataLabelPositionValues {
    /** Best Fit. Serialized value: `bestFit` */
    BestFit = "bestFit",
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Inside Base. Serialized value: `inBase` */
    InsideBase = "inBase",
    /** Inside End. Serialized value: `inEnd` */
    InsideEnd = "inEnd",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Outside End. Serialized value: `outEnd` */
    OutsideEnd = "outEnd",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** Top. Serialized value: `t` */
    Top = "t"
}
export declare const DataLabelPositionValuesArray: readonly [DataLabelPositionValues.BestFit, DataLabelPositionValues.Bottom, DataLabelPositionValues.Center, DataLabelPositionValues.InsideBase, DataLabelPositionValues.InsideEnd, DataLabelPositionValues.Left, DataLabelPositionValues.OutsideEnd, DataLabelPositionValues.Right, DataLabelPositionValues.Top];
export declare enum TrendlineValues {
    /** Exponential. Serialized value: `exp` */
    Exponential = "exp",
    /** Linear. Serialized value: `linear` */
    Linear = "linear",
    /** Logarithmic. Serialized value: `log` */
    Logarithmic = "log",
    /** Moving Average. Serialized value: `movingAvg` */
    MovingAverage = "movingAvg",
    /** Polynomial. Serialized value: `poly` */
    Polynomial = "poly",
    /** Power. Serialized value: `power` */
    Power = "power"
}
export declare const TrendlineValuesArray: readonly [TrendlineValues.Exponential, TrendlineValues.Linear, TrendlineValues.Logarithmic, TrendlineValues.MovingAverage, TrendlineValues.Polynomial, TrendlineValues.Power];
export declare enum ErrorBarDirectionValues {
    /** X. Serialized value: `x` */
    X = "x",
    /** Y. Serialized value: `y` */
    Y = "y"
}
export declare const ErrorBarDirectionValuesArray: readonly [ErrorBarDirectionValues.X, ErrorBarDirectionValues.Y];
export declare enum ErrorBarValues {
    /** Both. Serialized value: `both` */
    Both = "both",
    /** Minus. Serialized value: `minus` */
    Minus = "minus",
    /** Plus. Serialized value: `plus` */
    Plus = "plus"
}
export declare const ErrorBarValuesArray: readonly [ErrorBarValues.Both, ErrorBarValues.Minus, ErrorBarValues.Plus];
export declare enum ErrorValues {
    /** Custom Error Bars. Serialized value: `cust` */
    Custom = "cust",
    /** Fixed Value. Serialized value: `fixedVal` */
    FixedValue = "fixedVal",
    /** Percentage. Serialized value: `percentage` */
    Percentage = "percentage",
    /** Standard Deviation. Serialized value: `stdDev` */
    StandardDeviation = "stdDev",
    /** Standard Error. Serialized value: `stdErr` */
    StandardError = "stdErr"
}
export declare const ErrorValuesArray: readonly [ErrorValues.Custom, ErrorValues.FixedValue, ErrorValues.Percentage, ErrorValues.StandardDeviation, ErrorValues.StandardError];
export declare enum GroupingValues {
    /** 100% Stacked. Serialized value: `percentStacked` */
    PercentStacked = "percentStacked",
    /** Standard. Serialized value: `standard` */
    Standard = "standard",
    /** Stacked. Serialized value: `stacked` */
    Stacked = "stacked"
}
export declare const GroupingValuesArray: readonly [GroupingValues.PercentStacked, GroupingValues.Standard, GroupingValues.Stacked];
export declare enum RadarStyleValues {
    /** Standard. Serialized value: `standard` */
    Standard = "standard",
    /** Marker. Serialized value: `marker` */
    Marker = "marker",
    /** Filled. Serialized value: `filled` */
    Filled = "filled"
}
export declare const RadarStyleValuesArray: readonly [RadarStyleValues.Standard, RadarStyleValues.Marker, RadarStyleValues.Filled];
export declare enum BarGroupingValues {
    /** 100% Stacked. Serialized value: `percentStacked` */
    PercentStacked = "percentStacked",
    /** Clustered. Serialized value: `clustered` */
    Clustered = "clustered",
    /** Standard. Serialized value: `standard` */
    Standard = "standard",
    /** Stacked. Serialized value: `stacked` */
    Stacked = "stacked"
}
export declare const BarGroupingValuesArray: readonly [BarGroupingValues.PercentStacked, BarGroupingValues.Clustered, BarGroupingValues.Standard, BarGroupingValues.Stacked];
export declare enum BarDirectionValues {
    /** Bar. Serialized value: `bar` */
    Bar = "bar",
    /** Column. Serialized value: `col` */
    Column = "col"
}
export declare const BarDirectionValuesArray: readonly [BarDirectionValues.Bar, BarDirectionValues.Column];
export declare enum ShapeValues {
    /** Cone. Serialized value: `cone` */
    Cone = "cone",
    /** Cone to Max. Serialized value: `coneToMax` */
    ConeToMax = "coneToMax",
    /** Box. Serialized value: `box` */
    Box = "box",
    /** Cylinder. Serialized value: `cylinder` */
    Cylinder = "cylinder",
    /** Pyramid. Serialized value: `pyramid` */
    Pyramid = "pyramid",
    /** Pyramid to Maximum. Serialized value: `pyramidToMax` */
    PyramidToMaximum = "pyramidToMax"
}
export declare const ShapeValuesArray: readonly [ShapeValues.Cone, ShapeValues.ConeToMax, ShapeValues.Box, ShapeValues.Cylinder, ShapeValues.Pyramid, ShapeValues.PyramidToMaximum];
export declare enum OfPieValues {
    /** Pie. Serialized value: `pie` */
    Pie = "pie",
    /** Bar. Serialized value: `bar` */
    Bar = "bar"
}
export declare const OfPieValuesArray: readonly [OfPieValues.Pie, OfPieValues.Bar];
export declare enum AxisPositionValues {
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** Top. Serialized value: `t` */
    Top = "t"
}
export declare const AxisPositionValuesArray: readonly [AxisPositionValues.Bottom, AxisPositionValues.Left, AxisPositionValues.Right, AxisPositionValues.Top];
export declare enum CrossesValues {
    /** Axis Crosses at Zero. Serialized value: `autoZero` */
    AutoZero = "autoZero",
    /** Maximum. Serialized value: `max` */
    Maximum = "max",
    /** Minimum. Serialized value: `min` */
    Minimum = "min"
}
export declare const CrossesValuesArray: readonly [CrossesValues.AutoZero, CrossesValues.Maximum, CrossesValues.Minimum];
export declare enum CrossBetweenValues {
    /** Between. Serialized value: `between` */
    Between = "between",
    /** Midpoint of Category. Serialized value: `midCat` */
    MidpointCategory = "midCat"
}
export declare const CrossBetweenValuesArray: readonly [CrossBetweenValues.Between, CrossBetweenValues.MidpointCategory];
export declare enum TickMarkValues {
    /** Cross. Serialized value: `cross` */
    Cross = "cross",
    /** Inside. Serialized value: `in` */
    Inside = "in",
    /** None. Serialized value: `none` */
    None = "none",
    /** Outside. Serialized value: `out` */
    Outside = "out"
}
export declare const TickMarkValuesArray: readonly [TickMarkValues.Cross, TickMarkValues.Inside, TickMarkValues.None, TickMarkValues.Outside];
export declare enum TickLabelPositionValues {
    /** High. Serialized value: `high` */
    High = "high",
    /** Low. Serialized value: `low` */
    Low = "low",
    /** Next To. Serialized value: `nextTo` */
    NextTo = "nextTo",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const TickLabelPositionValuesArray: readonly [TickLabelPositionValues.High, TickLabelPositionValues.Low, TickLabelPositionValues.NextTo, TickLabelPositionValues.None];
export declare enum TimeUnitValues {
    /** Days. Serialized value: `days` */
    Days = "days",
    /** Months. Serialized value: `months` */
    Months = "months",
    /** Years. Serialized value: `years` */
    Years = "years"
}
export declare const TimeUnitValuesArray: readonly [TimeUnitValues.Days, TimeUnitValues.Months, TimeUnitValues.Years];
export declare enum BuiltInUnitValues {
    /** Hundreds. Serialized value: `hundreds` */
    Hundreds = "hundreds",
    /** Thousands. Serialized value: `thousands` */
    Thousands = "thousands",
    /** Ten Thousands. Serialized value: `tenThousands` */
    TenThousands = "tenThousands",
    /** Hundred Thousands. Serialized value: `hundredThousands` */
    HundredThousands = "hundredThousands",
    /** Millions. Serialized value: `millions` */
    Millions = "millions",
    /** Ten Millions. Serialized value: `tenMillions` */
    TenMillions = "tenMillions",
    /** Hundred Millions. Serialized value: `hundredMillions` */
    HundredMillions = "hundredMillions",
    /** Billions. Serialized value: `billions` */
    Billions = "billions",
    /** Trillions. Serialized value: `trillions` */
    Trillions = "trillions"
}
export declare const BuiltInUnitValuesArray: readonly [BuiltInUnitValues.Hundreds, BuiltInUnitValues.Thousands, BuiltInUnitValues.TenThousands, BuiltInUnitValues.HundredThousands, BuiltInUnitValues.Millions, BuiltInUnitValues.TenMillions, BuiltInUnitValues.HundredMillions, BuiltInUnitValues.Billions, BuiltInUnitValues.Trillions];
export declare enum PictureFormatValues {
    /** Stretch. Serialized value: `stretch` */
    Stretch = "stretch",
    /** Stack. Serialized value: `stack` */
    Stack = "stack",
    /** Stack and Scale. Serialized value: `stackScale` */
    StackScale = "stackScale"
}
export declare const PictureFormatValuesArray: readonly [PictureFormatValues.Stretch, PictureFormatValues.Stack, PictureFormatValues.StackScale];
export declare enum OrientationValues {
    /** Maximum to Minimum. Serialized value: `maxMin` */
    MaxMin = "maxMin",
    /** Minimum to Maximum. Serialized value: `minMax` */
    MinMax = "minMax"
}
export declare const OrientationValuesArray: readonly [OrientationValues.MaxMin, OrientationValues.MinMax];
export declare enum LegendPositionValues {
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Top Right. Serialized value: `tr` */
    TopRight = "tr",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** Top. Serialized value: `t` */
    Top = "t"
}
export declare const LegendPositionValuesArray: readonly [LegendPositionValues.Bottom, LegendPositionValues.TopRight, LegendPositionValues.Left, LegendPositionValues.Right, LegendPositionValues.Top];
export declare enum DisplayBlanksAsValues {
    /** Span. Serialized value: `span` */
    Span = "span",
    /** Gap. Serialized value: `gap` */
    Gap = "gap",
    /** Zero. Serialized value: `zero` */
    Zero = "zero"
}
export declare const DisplayBlanksAsValuesArray: readonly [DisplayBlanksAsValues.Span, DisplayBlanksAsValues.Gap, DisplayBlanksAsValues.Zero];
export declare enum PageSetupOrientationValues {
    /** Default Page Orientation. Serialized value: `default` */
    Default = "default",
    /** Portrait Page. Serialized value: `portrait` */
    Portrait = "portrait",
    /** Landscape Page. Serialized value: `landscape` */
    Landscape = "landscape"
}
export declare const PageSetupOrientationValuesArray: readonly [PageSetupOrientationValues.Default, PageSetupOrientationValues.Portrait, PageSetupOrientationValues.Landscape];
export declare enum ScatterStyleValues {
    /** Line. Serialized value: `line` */
    Line = "line",
    /** Line with Markers. Serialized value: `lineMarker` */
    LineMarker = "lineMarker",
    /** Marker. Serialized value: `marker` */
    Marker = "marker",
    /** Smooth. Serialized value: `smooth` */
    Smooth = "smooth",
    /** Smooth with Markers. Serialized value: `smoothMarker` */
    SmoothMarker = "smoothMarker"
}
export declare const ScatterStyleValuesArray: readonly [ScatterStyleValues.Line, ScatterStyleValues.LineMarker, ScatterStyleValues.Marker, ScatterStyleValues.Smooth, ScatterStyleValues.SmoothMarker];
export declare enum MarkerStyleValues {
    /** undefined. Serialized value: `auto` */
    Auto = "auto",
    /** Circle. Serialized value: `circle` */
    Circle = "circle",
    /** Dash. Serialized value: `dash` */
    Dash = "dash",
    /** Diamond. Serialized value: `diamond` */
    Diamond = "diamond",
    /** Dot. Serialized value: `dot` */
    Dot = "dot",
    /** None. Serialized value: `none` */
    None = "none",
    /** Picture. Serialized value: `picture` */
    Picture = "picture",
    /** Plus. Serialized value: `plus` */
    Plus = "plus",
    /** Square. Serialized value: `square` */
    Square = "square",
    /** Star. Serialized value: `star` */
    Star = "star",
    /** Triangle. Serialized value: `triangle` */
    Triangle = "triangle",
    /** X. Serialized value: `x` */
    X = "x"
}
export declare const MarkerStyleValuesArray: readonly [MarkerStyleValues.Auto, MarkerStyleValues.Circle, MarkerStyleValues.Dash, MarkerStyleValues.Diamond, MarkerStyleValues.Dot, MarkerStyleValues.None, MarkerStyleValues.Picture, MarkerStyleValues.Plus, MarkerStyleValues.Square, MarkerStyleValues.Star, MarkerStyleValues.Triangle, MarkerStyleValues.X];
export declare enum SplitValues {
    /** Custom Split. Serialized value: `cust` */
    Custom = "cust",
    /** Split by Percentage. Serialized value: `percent` */
    Percent = "percent",
    /** Split by Position. Serialized value: `pos` */
    Position = "pos",
    /** Split by Value. Serialized value: `val` */
    Value = "val"
}
export declare const SplitValuesArray: readonly [SplitValues.Custom, SplitValues.Percent, SplitValues.Position, SplitValues.Value];
/** Extensibility container. Serialized as `c:extLst` */
export declare class ChartExtensionList extends OxmlCompositeElement<DataDisplayOptions16> {
    static _Q: string;
}
/** The way that blank cells are plotted on a chart.. Serialized as `c:dispBlanksAs` */
export declare class DisplayBlanksAs extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Display Blanks As Value. Serialized as `:val` */
    get val(): DisplayBlanksAsValues | undefined;
    set val(v: DisplayBlanksAsValues | undefined);
}
/** Legend data and formatting. Serialized as `c:legend` */
export declare class Legend extends OxmlCompositeElement<LegendPosition | LegendEntry | Layout | Overlay | ChartShapeProperties | TextProperties | ExtensionList> {
    static _Q: string;
    /** Legend Position. */
    get legendPosition(): LegendPosition | undefined;
}
/** Plot data and formatting. Serialized as `c:plotArea` */
export declare class PlotArea extends OxmlCompositeElement<Layout | AreaChart | Area3DChart | LineChart | Line3DChart | StockChart | RadarChart | ScatterChart | PieChart | Pie3DChart | DoughnutChart | BarChart | Bar3DChart | OfPieChart | SurfaceChart | Surface3DChart | BubbleChart | ValueAxis | CategoryAxis | DateAxis | SeriesAxis | DataTable | ShapeProperties | ExtensionList> {
    static _Q: string;
    /** Layout. */
    get layout(): Layout | undefined;
}
/** Defines the SurfaceType Class. */
export declare abstract class SurfaceType extends OxmlCompositeElement<Thickness | ShapeProperties | PictureOptions | ExtensionList> {
    /** Thickness. */
    get thickness(): Thickness | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Picture Options. */
    get pictureOptions(): PictureOptions | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** 3D back wall formatting. Serialized as `c:backWall` */
export declare class BackWall extends SurfaceType {
    static _Q: string;
}
/** 3D side wall formatting. Serialized as `c:sideWall` */
export declare class SideWall extends SurfaceType {
    static _Q: string;
}
/** 3D floor formatting. Serialized as `c:floor` */
export declare class Floor extends SurfaceType {
    static _Q: string;
}
/** 3D view settings. Serialized as `c:view3D` */
export declare class View3D extends OxmlCompositeElement<RotateX | HeightPercent | RotateY | DepthPercent | RightAngleAxes | Perspective | ExtensionList> {
    static _Q: string;
    /** X Rotation. */
    get rotateX(): RotateX | undefined;
    /** Height Percent. */
    get heightPercent(): HeightPercent | undefined;
    /** Y Rotation. */
    get rotateY(): RotateY | undefined;
    /** Depth Percent. */
    get depthPercent(): DepthPercent | undefined;
    /** Right Angle Axes. */
    get rightAngleAxes(): RightAngleAxes | undefined;
    /** Perspective. */
    get perspective(): Perspective | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** pivot chart format persistence data. Serialized as `c:pivotFmts` */
export declare class PivotFormats extends OxmlCompositeElement<PivotFormat> {
    static _Q: string;
}
/** Defines the DataDisplayOptions16 Class. Serialized as `c:ext` */
export declare class DataDisplayOptions16 extends OxmlCompositeElement<C16r3BooleanFalse> {
    static _Q: string;
    /** Returns C16r3BooleanFalse. */
    get booleanFalse(): C16r3BooleanFalse | undefined;
}
/** Defines the ChartSpaceExtension Class. Serialized as `c:ext` */
export declare class ChartSpaceExtension extends OxmlCompositeElement<C14PivotOptions | C14SketchOptions | C15PivotSource> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C14PivotOptions. */
    get pivotOptions(): C14PivotOptions | undefined;
    /** Returns C14SketchOptions. */
    get sketchOptions(): C14SketchOptions | undefined;
    /** Returns C15PivotSource. */
    get pivotSource(): C15PivotSource | undefined;
}
/** Defines the ChartSpaceExtensionList Class. Serialized as `c:extLst` */
export declare class ChartSpaceExtensionList extends OxmlCompositeElement<ChartSpaceExtension> {
    static _Q: string;
}
/** Defines the PrintSettings Class. Serialized as `c:printSettings` */
export declare class PrintSettings extends OxmlCompositeElement<HeaderFooter | PageMargins | PageSetup | LegacyDrawingHeaderFooter> {
    static _Q: string;
    /** Header and Footer. */
    get headerFooter(): HeaderFooter | undefined;
    /** Page Margins. */
    get pageMargins(): PageMargins | undefined;
    /** Page Setup. */
    get pageSetup(): PageSetup | undefined;
    /** Legacy Drawing for Headers and Footers. */
    get legacyDrawingHeaderFooter(): LegacyDrawingHeaderFooter | undefined;
}
/** Defines the ExternalData Class. Serialized as `c:externalData` */
export declare class ExternalData extends OxmlCompositeElement<AutoUpdate> {
    static _Q: string;
    static _A: string[];
    /** Relationship Reference. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Update Automatically. */
    get autoUpdate(): AutoUpdate | undefined;
}
/** Defines the Chart Class. Serialized as `c:chart` */
export declare class Chart extends OxmlCompositeElement<Title | AutoTitleDeleted | PivotFormats | View3D | Floor | SideWall | BackWall | PlotArea | Legend | PlotVisibleOnly | DisplayBlanksAs | ShowDataLabelsOverMaximum | ChartExtensionList> {
    static _Q: string;
    /** Title data and formatting. */
    get title(): Title | undefined;
    /** True if the chart automatic title has been deleted.. */
    get autoTitleDeleted(): AutoTitleDeleted | undefined;
    /** pivot chart format persistence data. */
    get pivotFormats(): PivotFormats | undefined;
    /** 3D view settings. */
    get view3D(): View3D | undefined;
    /** 3D floor formatting. */
    get floor(): Floor | undefined;
    /** 3D side wall formatting. */
    get sideWall(): SideWall | undefined;
    /** 3D back wall formatting. */
    get backWall(): BackWall | undefined;
    /** Plot data and formatting. */
    get plotArea(): PlotArea | undefined;
    /** Legend data and formatting. */
    get legend(): Legend | undefined;
    /** True if only visible cells are plotted.. */
    get plotVisibleOnly(): PlotVisibleOnly | undefined;
    /** The way that blank cells are plotted on a chart.. */
    get displayBlanksAs(): DisplayBlanksAs | undefined;
    /** True if we should render datalabels over the maximum scale. */
    get showDataLabelsOverMaximum(): ShowDataLabelsOverMaximum | undefined;
    /** Extensibility container. */
    get chartExtensionList(): ChartExtensionList | undefined;
}
/** Defines the Protection Class. Serialized as `c:protection` */
export declare class Protection extends OxmlCompositeElement<ChartObject | Data | Formatting | Selection | UserInterface> {
    static _Q: string;
    /** Chart Object. */
    get chartObject(): ChartObject | undefined;
    /** Data Cannot Be Changed. */
    get data(): Data | undefined;
    /** Formatting. */
    get formatting(): Formatting | undefined;
    /** Selection. */
    get selection(): Selection | undefined;
    /** User Interface. */
    get userInterface(): UserInterface | undefined;
}
/** Defines the PivotSource Class. Serialized as `c:pivotSource` */
export declare class PivotSource extends OxmlCompositeElement<PivotTableName | FormatId | ExtensionList> {
    static _Q: string;
    /** Pivot Name. */
    get pivotTableName(): PivotTableName | undefined;
    /** Format ID. */
    get formatId(): FormatId | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ColorMapOverride Class. Serialized as `c:clrMapOvr` */
export declare class ColorMapOverride extends OxmlCompositeElement<AExtensionList> {
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
/** Defines the Style Class. Serialized as `c:style` */
export declare class Style extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Style Type. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** Defines the EditingLanguage Class. Serialized as `c:lang` */
export declare class EditingLanguage extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language Code. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the ValAxExtensionList Class. Serialized as `c:extLst` */
export declare class ValAxExtensionList extends OxmlCompositeElement<ValAxExtension> {
    static _Q: string;
}
/** Defines the DisplayUnits Class. Serialized as `c:dispUnits` */
export declare class DisplayUnits extends OxmlCompositeElement<CustomDisplayUnit | BuiltInUnit | DisplayUnitsLabel | ExtensionList> {
    static _Q: string;
}
/** Defines the CrossBetween Class. Serialized as `c:crossBetween` */
export declare class CrossBetween extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Cross Between Value. Serialized as `:val` */
    get val(): CrossBetweenValues | undefined;
    set val(v: CrossBetweenValues | undefined);
}
/** Defines the SerAxExtensionList Class. Serialized as `c:extLst` */
export declare class SerAxExtensionList extends OxmlCompositeElement<SerAxExtension> {
    static _Q: string;
}
/** Defines the DateAxExtensionList Class. Serialized as `c:extLst` */
export declare class DateAxExtensionList extends OxmlCompositeElement<DateAxExtension> {
    static _Q: string;
}
/** Defines the AxisUnitType Class. */
export declare abstract class AxisUnitType extends OxmlLeafElement {
    static _A: string[];
    /** Major Unit Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Defines the MinorUnit Class. Serialized as `c:minorUnit` */
export declare class MinorUnit extends AxisUnitType {
    static _Q: string;
}
/** Defines the MajorUnit Class. Serialized as `c:majorUnit` */
export declare class MajorUnit extends AxisUnitType {
    static _Q: string;
}
/** Defines the TimeUnitType Class. */
export declare abstract class TimeUnitType extends OxmlLeafElement {
    static _A: string[];
    /** Time Unit Value. Serialized as `:val` */
    get val(): TimeUnitValues | undefined;
    set val(v: TimeUnitValues | undefined);
}
/** Defines the MinorTimeUnit Class. Serialized as `c:minorTimeUnit` */
export declare class MinorTimeUnit extends TimeUnitType {
    static _Q: string;
}
/** Defines the MajorTimeUnit Class. Serialized as `c:majorTimeUnit` */
export declare class MajorTimeUnit extends TimeUnitType {
    static _Q: string;
}
/** Defines the BaseTimeUnit Class. Serialized as `c:baseTimeUnit` */
export declare class BaseTimeUnit extends TimeUnitType {
    static _Q: string;
}
/** Defines the CatAxExtensionList Class. Serialized as `c:extLst` */
export declare class CatAxExtensionList extends OxmlCompositeElement<CatAxExtension> {
    static _Q: string;
}
/** Defines the SkipType Class. */
export declare abstract class SkipType extends OxmlLeafElement {
    static _A: string[];
    /** Tick Skip Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the TickMarkSkip Class. Serialized as `c:tickMarkSkip` */
export declare class TickMarkSkip extends SkipType {
    static _Q: string;
}
/** Defines the TickLabelSkip Class. Serialized as `c:tickLblSkip` */
export declare class TickLabelSkip extends SkipType {
    static _Q: string;
}
/** Defines the LabelOffset Class. Serialized as `c:lblOffset` */
export declare class LabelOffset extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Label Offset Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Defines the LabelAlignment Class. Serialized as `c:lblAlgn` */
export declare class LabelAlignment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Label Alignment Value. Serialized as `:val` */
    get val(): LabelAlignmentValues | undefined;
    set val(v: LabelAlignmentValues | undefined);
}
/** Defines the Surface3DChartExtensionList Class. Serialized as `c:extLst` */
export declare class Surface3DChartExtensionList extends OxmlCompositeElement<Surface3DChartExtension> {
    static _Q: string;
}
/** Defines the SurfaceChartExtensionList Class. Serialized as `c:extLst` */
export declare class SurfaceChartExtensionList extends OxmlCompositeElement<SurfaceChartExtension> {
    static _Q: string;
}
/** Defines the BubbleChartExtensionList Class. Serialized as `c:extLst` */
export declare class BubbleChartExtensionList extends OxmlCompositeElement<BubbleChartExtension> {
    static _Q: string;
}
/** Defines the SizeRepresents Class. Serialized as `c:sizeRepresents` */
export declare class SizeRepresents extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Size Represents Value. Serialized as `:val` */
    get val(): SizeRepresentsValues | undefined;
    set val(v: SizeRepresentsValues | undefined);
}
/** Defines the BubbleScale Class. Serialized as `c:bubbleScale` */
export declare class BubbleScale extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Bubble Scale Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the BubbleChartSeries Class. Serialized as `c:ser` */
export declare class BubbleChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | InvertIfNegative | DataPoint | DataLabels | Trendline | ErrorBars | XValues | YValues | BubbleSize | Bubble3D | BubbleSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
    /** Returns InvertIfNegative. */
    get invertIfNegative(): InvertIfNegative | undefined;
}
/** Defines the Area3DChartExtensionList Class. Serialized as `c:extLst` */
export declare class Area3DChartExtensionList extends OxmlCompositeElement<Area3DChartExtension> {
    static _Q: string;
}
/** Defines the AreaChartExtensionList Class. Serialized as `c:extLst` */
export declare class AreaChartExtensionList extends OxmlCompositeElement<AreaChartExtension> {
    static _Q: string;
}
/** Defines the Bar3DChartExtensionList Class. Serialized as `c:extLst` */
export declare class Bar3DChartExtensionList extends OxmlCompositeElement<Bar3DChartExtension> {
    static _Q: string;
}
/** Defines the BarChartExtensionList Class. Serialized as `c:extLst` */
export declare class BarChartExtensionList extends OxmlCompositeElement<BarChartExtension> {
    static _Q: string;
}
/** Defines the Overlap Class. Serialized as `c:overlap` */
export declare class Overlap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Overlap Value. Serialized as `:val` */
    get val(): SByteValue | undefined;
    set val(v: SByteValue | undefined);
}
/** Defines the RadarChartExtensionList Class. Serialized as `c:extLst` */
export declare class RadarChartExtensionList extends OxmlCompositeElement<RadarChartExtension> {
    static _Q: string;
}
/** Defines the RadarChartSeries Class. Serialized as `c:ser` */
export declare class RadarChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | Marker | DataPoint | DataLabels | CategoryAxisData | Values | RadarSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
    /** Returns Marker. */
    get marker(): Marker | undefined;
}
/** Defines the RadarStyle Class. Serialized as `c:radarStyle` */
export declare class RadarStyle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Radar Style Value. Serialized as `:val` */
    get val(): RadarStyleValues | undefined;
    set val(v: RadarStyleValues | undefined);
}
/** Defines the ScatterChartExtensionList Class. Serialized as `c:extLst` */
export declare class ScatterChartExtensionList extends OxmlCompositeElement<ScatterChartExtension> {
    static _Q: string;
}
/** Defines the ScatterChartSeries Class. Serialized as `c:ser` */
export declare class ScatterChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | Marker | DataPoint | DataLabels | Trendline | ErrorBars | XValues | YValues | Smooth | ScatterSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns Marker. */
    get marker(): Marker | undefined;
}
/** Defines the ScatterStyle Class. Serialized as `c:scatterStyle` */
export declare class ScatterStyle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Scatter Style Value. Serialized as `:val` */
    get val(): ScatterStyleValues | undefined;
    set val(v: ScatterStyleValues | undefined);
}
/** Defines the Line3DChartExtensionList Class. Serialized as `c:extLst` */
export declare class Line3DChartExtensionList extends OxmlCompositeElement<Line3DChartExtension> {
    static _Q: string;
}
/** Defines the LineChartExtensionList Class. Serialized as `c:extLst` */
export declare class LineChartExtensionList extends OxmlCompositeElement<LineChartExtension> {
    static _Q: string;
}
/** Defines the SurfaceSerExtensionList Class. Serialized as `c:extLst` */
export declare class SurfaceSerExtensionList extends OxmlCompositeElement<SurfaceSerExtension> {
    static _Q: string;
}
/** Defines the BubbleSerExtension Class. Serialized as `c:ext` */
export declare class BubbleSerExtension extends OxmlCompositeElement<C14InvertSolidFillFormat | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C14InvertSolidFillFormat. */
    get invertSolidFillFormat(): C14InvertSolidFillFormat | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the BubbleSerExtensionList Class. Serialized as `c:extLst` */
export declare class BubbleSerExtensionList extends OxmlCompositeElement<BubbleSerExtension> {
    static _Q: string;
}
/** Defines the PieSerExtensionList Class. Serialized as `c:extLst` */
export declare class PieSerExtensionList extends OxmlCompositeElement<PieSerExtension> {
    static _Q: string;
}
/** Defines the AreaSerExtensionList Class. Serialized as `c:extLst` */
export declare class AreaSerExtensionList extends OxmlCompositeElement<AreaSerExtension> {
    static _Q: string;
}
/** Defines the BarSerExtension Class. Serialized as `c:ext` */
export declare class BarSerExtension extends OxmlCompositeElement<C14InvertSolidFillFormat | C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C14InvertSolidFillFormat. */
    get invertSolidFillFormat(): C14InvertSolidFillFormat | undefined;
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the BarSerExtensionList Class. Serialized as `c:extLst` */
export declare class BarSerExtensionList extends OxmlCompositeElement<BarSerExtension> {
    static _Q: string;
}
/** Defines the Shape Class. Serialized as `c:shape` */
export declare class Shape extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape Value. Serialized as `:val` */
    get val(): ShapeValues | undefined;
    set val(v: ShapeValues | undefined);
}
/** Defines the RadarSerExtensionList Class. Serialized as `c:extLst` */
export declare class RadarSerExtensionList extends OxmlCompositeElement<RadarSerExtension> {
    static _Q: string;
}
/** Defines the ScatterSerExtensionList Class. Serialized as `c:extLst` */
export declare class ScatterSerExtensionList extends OxmlCompositeElement<ScatterSerExtension> {
    static _Q: string;
}
/** Defines the LineSerExtensionList Class. Serialized as `c:extLst` */
export declare class LineSerExtensionList extends OxmlCompositeElement<LineSerExtension> {
    static _Q: string;
}
/** Defines the AxisDataSourceType Class. */
export declare abstract class AxisDataSourceType extends OxmlCompositeElement<MultiLevelStringReference | NumberReference | NumberLiteral | StringReference | StringLiteral> {
    /** Multi Level String Reference. */
    get multiLevelStringReference(): MultiLevelStringReference | undefined;
    /** Number Reference. */
    get numberReference(): NumberReference | undefined;
    /** Number Literal. */
    get numberLiteral(): NumberLiteral | undefined;
    /** Returns StringReference. */
    get stringReference(): StringReference | undefined;
    /** String Literal. */
    get stringLiteral(): StringLiteral | undefined;
}
/** Defines the XValues Class. Serialized as `c:xVal` */
export declare class XValues extends AxisDataSourceType {
    static _Q: string;
}
/** Defines the CategoryAxisData Class. Serialized as `c:cat` */
export declare class CategoryAxisData extends AxisDataSourceType {
    static _Q: string;
}
/** Defines the ErrorBars Class. Serialized as `c:errBars` */
export declare class ErrorBars extends OxmlCompositeElement<ErrorDirection | ErrorBarType | ErrorBarValueType | NoEndCap | Plus | Minus | ErrorBarValue | ChartShapeProperties | ExtensionList> {
    static _Q: string;
    /** Error Bar Direction. */
    get errorDirection(): ErrorDirection | undefined;
    /** Error Bar Type. */
    get errorBarType(): ErrorBarType | undefined;
    /** Error Bar Value Type. */
    get errorBarValueType(): ErrorBarValueType | undefined;
    /** No End Cap. */
    get noEndCap(): NoEndCap | undefined;
    /** Plus. */
    get plus(): Plus | undefined;
    /** Minus. */
    get minus(): Minus | undefined;
    /** Error Bar Value. */
    get errorBarValue(): ErrorBarValue | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Trendline Class. Serialized as `c:trendline` */
export declare class Trendline extends OxmlCompositeElement<TrendlineName | ChartShapeProperties | TrendlineType | PolynomialOrder | Period | Forward | Backward | Intercept | DisplayRSquaredValue | DisplayEquation | TrendlineLabel | ExtensionList> {
    static _Q: string;
    /** Trendline Name. */
    get trendlineName(): TrendlineName | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Trendline Type. */
    get trendlineType(): TrendlineType | undefined;
    /** Polynomial Trendline Order. */
    get polynomialOrder(): PolynomialOrder | undefined;
    /** Period. */
    get period(): Period | undefined;
    /** Forward. */
    get forward(): Forward | undefined;
    /** Backward. */
    get backward(): Backward | undefined;
    /** Intercept. */
    get intercept(): Intercept | undefined;
    /** Display R Squared Value. */
    get displayRSquaredValue(): DisplayRSquaredValue | undefined;
    /** Display Equation. */
    get displayEquation(): DisplayEquation | undefined;
    /** Trendline Label. */
    get trendlineLabel(): TrendlineLabel | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DataPoint Class. Serialized as `c:dPt` */
export declare class DataPoint extends OxmlCompositeElement<Index | InvertIfNegative | Marker | Bubble3D | Explosion | ChartShapeProperties | PictureOptions | ExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Invert if Negative. */
    get invertIfNegative(): InvertIfNegative | undefined;
    /** Marker. */
    get marker(): Marker | undefined;
    /** 3D Bubble. */
    get bubble3D(): Bubble3D | undefined;
    /** Explosion. */
    get explosion(): Explosion | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the DLblsExtensionList Class. Serialized as `c:extLst` */
export declare class DLblsExtensionList extends OxmlCompositeElement<DLblsExtension> {
    static _Q: string;
}
/** Defines the DLblExtensionList Class. Serialized as `c:extLst` */
export declare class DLblExtensionList extends OxmlCompositeElement<DLblExtension> {
    static _Q: string;
}
/** Defines the MultiLvlStrRefExtensionList Class. Serialized as `c:extLst` */
export declare class MultiLvlStrRefExtensionList extends OxmlCompositeElement<MultiLvlStrRefExtension> {
    static _Q: string;
}
/** Defines the MultiLevelStringCache Class. Serialized as `c:multiLvlStrCache` */
export declare class MultiLevelStringCache extends OxmlCompositeElement<PointCount | Level | ExtensionList> {
    static _Q: string;
    /** Returns PointCount. */
    get pointCount(): PointCount | undefined;
}
/** Defines the StrRefExtensionList Class. Serialized as `c:extLst` */
export declare class StrRefExtensionList extends OxmlCompositeElement<StrRefExtension> {
    static _Q: string;
}
/** Defines the StrDataExtensionList Class. Serialized as `c:extLst` */
export declare class StrDataExtensionList extends OxmlCompositeElement<StrDataExtension> {
    static _Q: string;
}
/** Defines the NumRefExtensionList Class. Serialized as `c:extLst` */
export declare class NumRefExtensionList extends OxmlCompositeElement<NumRefExtension> {
    static _Q: string;
}
/** Defines the Pie3DChartExtensionList Class. Serialized as `c:extLst` */
export declare class Pie3DChartExtensionList extends OxmlCompositeElement<Pie3DChartExtension> {
    static _Q: string;
}
/** Defines the PieChartExtensionList Class. Serialized as `c:extLst` */
export declare class PieChartExtensionList extends OxmlCompositeElement<PieChartExtension> {
    static _Q: string;
}
/** Defines the StockChartExtensionList Class. Serialized as `c:extLst` */
export declare class StockChartExtensionList extends OxmlCompositeElement<StockChartExtension> {
    static _Q: string;
}
/** Defines the UpDownBars Class. Serialized as `c:upDownBars` */
export declare class UpDownBars extends OxmlCompositeElement<GapWidth | UpBars | DownBars | ExtensionList> {
    static _Q: string;
    /** Gap Width. */
    get gapWidth(): GapWidth | undefined;
    /** Up Bars. */
    get upBars(): UpBars | undefined;
    /** Down Bars. */
    get downBars(): DownBars | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ValAxExtension Class. Serialized as `c:ext` */
export declare class ValAxExtension extends OxmlCompositeElement<C15NumberingFormat> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15NumberingFormat. */
    get numberingFormat(): C15NumberingFormat | undefined;
}
/** Defines the SerAxExtension Class. Serialized as `c:ext` */
export declare class SerAxExtension extends OxmlCompositeElement<C15NumberingFormat> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15NumberingFormat. */
    get numberingFormat(): C15NumberingFormat | undefined;
}
/** Defines the DateAxExtension Class. Serialized as `c:ext` */
export declare class DateAxExtension extends OxmlCompositeElement<C15NumberingFormat> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15NumberingFormat. */
    get numberingFormat(): C15NumberingFormat | undefined;
}
/** Defines the CatAxExtension Class. Serialized as `c:ext` */
export declare class CatAxExtension extends OxmlCompositeElement<C15NumberingFormat> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15NumberingFormat. */
    get numberingFormat(): C15NumberingFormat | undefined;
}
/** Defines the Surface3DChartExtension Class. Serialized as `c:ext` */
export declare class Surface3DChartExtension extends OxmlCompositeElement<C15FilteredSurfaceSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSurfaceSeries. */
    get filteredSurfaceSeries(): C15FilteredSurfaceSeries | undefined;
}
/** Defines the SurfaceChartExtension Class. Serialized as `c:ext` */
export declare class SurfaceChartExtension extends OxmlCompositeElement<C15FilteredSurfaceSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSurfaceSeries. */
    get filteredSurfaceSeries(): C15FilteredSurfaceSeries | undefined;
}
/** Defines the BubbleChartExtension Class. Serialized as `c:ext` */
export declare class BubbleChartExtension extends OxmlCompositeElement<C15FilteredBubbleSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredBubbleSeries. */
    get filteredBubbleSeries(): C15FilteredBubbleSeries | undefined;
}
/** Defines the Area3DChartExtension Class. Serialized as `c:ext` */
export declare class Area3DChartExtension extends OxmlCompositeElement<C15FilteredAreaSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredAreaSeries. */
    get filteredAreaSeries(): C15FilteredAreaSeries | undefined;
}
/** Defines the AreaChartExtension Class. Serialized as `c:ext` */
export declare class AreaChartExtension extends OxmlCompositeElement<C15FilteredAreaSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredAreaSeries. */
    get filteredAreaSeries(): C15FilteredAreaSeries | undefined;
}
/** Defines the Bar3DChartExtension Class. Serialized as `c:ext` */
export declare class Bar3DChartExtension extends OxmlCompositeElement<C15FilteredBarSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredBarSeries. */
    get filteredBarSeries(): C15FilteredBarSeries | undefined;
}
/** Defines the BarChartExtension Class. Serialized as `c:ext` */
export declare class BarChartExtension extends OxmlCompositeElement<C15FilteredBarSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredBarSeries. */
    get filteredBarSeries(): C15FilteredBarSeries | undefined;
}
/** Defines the RadarChartExtension Class. Serialized as `c:ext` */
export declare class RadarChartExtension extends OxmlCompositeElement<C15FilteredRadarSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredRadarSeries. */
    get filteredRadarSeries(): C15FilteredRadarSeries | undefined;
}
/** Defines the ScatterChartExtension Class. Serialized as `c:ext` */
export declare class ScatterChartExtension extends OxmlCompositeElement<C15FilteredScatterSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredScatterSeries. */
    get filteredScatterSeries(): C15FilteredScatterSeries | undefined;
}
/** Defines the Line3DChartExtension Class. Serialized as `c:ext` */
export declare class Line3DChartExtension extends OxmlCompositeElement<C15FilteredLineSeriesExtension> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredLineSeriesExtension. */
    get filteredLineSeriesExtension(): C15FilteredLineSeriesExtension | undefined;
}
/** Defines the LineChartExtension Class. Serialized as `c:ext` */
export declare class LineChartExtension extends OxmlCompositeElement<C15FilteredLineSeriesExtension> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredLineSeriesExtension. */
    get filteredLineSeriesExtension(): C15FilteredLineSeriesExtension | undefined;
}
/** Defines the SurfaceSerExtension Class. Serialized as `c:ext` */
export declare class SurfaceSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the PieSerExtension Class. Serialized as `c:ext` */
export declare class PieSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the AreaSerExtension Class. Serialized as `c:ext` */
export declare class AreaSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the RadarSerExtension Class. Serialized as `c:ext` */
export declare class RadarSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the ScatterSerExtension Class. Serialized as `c:ext` */
export declare class ScatterSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the LineSerExtension Class. Serialized as `c:ext` */
export declare class LineSerExtension extends OxmlCompositeElement<C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15DataLabelsRange | C15CategoryFilterExceptions> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredSeriesTitle. */
    get filteredSeriesTitle(): C15FilteredSeriesTitle | undefined;
    /** Returns C15FilteredCategoryTitle. */
    get filteredCategoryTitle(): C15FilteredCategoryTitle | undefined;
    /** Returns C15DataLabelsRange. */
    get dataLabelsRange(): C15DataLabelsRange | undefined;
    /** Returns C15CategoryFilterExceptions. */
    get categoryFilterExceptions(): C15CategoryFilterExceptions | undefined;
}
/** Defines the DLblsExtension Class. Serialized as `c:ext` */
export declare class DLblsExtension extends OxmlCompositeElement<C15ChartText | C15DataLabelFieldTable | C15ShowDataLabelsRange | C15ShapeProperties | C15Layout | C15ShowLeaderLines | C15LeaderLines> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15ChartText. */
    get chartText(): C15ChartText | undefined;
    /** Returns C15DataLabelFieldTable. */
    get dataLabelFieldTable(): C15DataLabelFieldTable | undefined;
    /** Returns C15ShowDataLabelsRange. */
    get showDataLabelsRange(): C15ShowDataLabelsRange | undefined;
    /** Returns C15ShapeProperties. */
    get shapeProperties(): C15ShapeProperties | undefined;
    /** Returns C15Layout. */
    get layout(): C15Layout | undefined;
    /** Returns C15ShowLeaderLines. */
    get showLeaderLines(): C15ShowLeaderLines | undefined;
    /** Returns C15LeaderLines. */
    get leaderLines(): C15LeaderLines | undefined;
}
/** Defines the DLblExtension Class. Serialized as `c:ext` */
export declare class DLblExtension extends OxmlCompositeElement<C15DataLabelFieldTable | C15ExceptionForSave | C15ShowDataLabelsRange | C15ShapeProperties | C15Layout> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15DataLabelFieldTable. */
    get dataLabelFieldTable(): C15DataLabelFieldTable | undefined;
    /** Returns C15ExceptionForSave. */
    get exceptionForSave(): C15ExceptionForSave | undefined;
    /** Returns C15ShowDataLabelsRange. */
    get showDataLabelsRange(): C15ShowDataLabelsRange | undefined;
    /** Returns C15ShapeProperties. */
    get shapeProperties(): C15ShapeProperties | undefined;
    /** Returns C15Layout. */
    get layout(): C15Layout | undefined;
}
/** Defines the MultiLvlStrRefExtension Class. Serialized as `c:ext` */
export declare class MultiLvlStrRefExtension extends OxmlCompositeElement<C15FullReference | C15LevelReference | C15FormulaReference> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FullReference. */
    get fullReference(): C15FullReference | undefined;
    /** Returns C15LevelReference. */
    get levelReference(): C15LevelReference | undefined;
    /** Returns C15FormulaReference. */
    get formulaReference(): C15FormulaReference | undefined;
}
/** Defines the StrRefExtension Class. Serialized as `c:ext` */
export declare class StrRefExtension extends OxmlCompositeElement<C15FullReference | C15LevelReference | C15FormulaReference> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FullReference. */
    get fullReference(): C15FullReference | undefined;
    /** Returns C15LevelReference. */
    get levelReference(): C15LevelReference | undefined;
    /** Returns C15FormulaReference. */
    get formulaReference(): C15FormulaReference | undefined;
}
/** Defines the StrDataExtension Class. Serialized as `c:ext` */
export declare class StrDataExtension extends OxmlCompositeElement<C15AutoGeneneratedCategories> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15AutoGeneneratedCategories. */
    get autoGeneneratedCategories(): C15AutoGeneneratedCategories | undefined;
}
/** Defines the NumRefExtension Class. Serialized as `c:ext` */
export declare class NumRefExtension extends OxmlCompositeElement<C15FullReference | C15LevelReference | C15FormulaReference> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FullReference. */
    get fullReference(): C15FullReference | undefined;
    /** Returns C15LevelReference. */
    get levelReference(): C15LevelReference | undefined;
    /** Returns C15FormulaReference. */
    get formulaReference(): C15FormulaReference | undefined;
}
/** Defines the Pie3DChartExtension Class. Serialized as `c:ext` */
export declare class Pie3DChartExtension extends OxmlCompositeElement<C15FilteredPieSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredPieSeries. */
    get filteredPieSeries(): C15FilteredPieSeries | undefined;
}
/** Defines the PieChartExtension Class. Serialized as `c:ext` */
export declare class PieChartExtension extends OxmlCompositeElement<C15FilteredPieSeries> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredPieSeries. */
    get filteredPieSeries(): C15FilteredPieSeries | undefined;
}
/** Defines the StockChartExtension Class. Serialized as `c:ext` */
export declare class StockChartExtension extends OxmlCompositeElement<C15FilteredLineSeriesExtension> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns C15FilteredLineSeriesExtension. */
    get filteredLineSeriesExtension(): C15FilteredLineSeriesExtension | undefined;
}
/** Thickness. Serialized as `c:thickness` */
export declare class Thickness extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** String Point. Serialized as `c:pt` */
export declare class StringPoint extends OxmlCompositeElement<NumericValue> {
    static _Q: string;
    static _A: string[];
    /** Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Text Value. */
    get numericValue(): NumericValue | undefined;
}
/** Hole Size. Serialized as `c:holeSize` */
export declare class HoleSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Hole Size Value. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** First Slice Angle. Serialized as `c:firstSliceAng` */
export declare class FirstSliceAngle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** First Slice Angle Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Data Table. Serialized as `c:dTable` */
export declare class DataTable extends OxmlCompositeElement<ShowHorizontalBorder | ShowVerticalBorder | ShowOutlineBorder | ShowKeys | ChartShapeProperties | TextProperties | ExtensionList> {
    static _Q: string;
    /** Show Horizontal Border. */
    get showHorizontalBorder(): ShowHorizontalBorder | undefined;
    /** Show Vertical Border. */
    get showVerticalBorder(): ShowVerticalBorder | undefined;
    /** Show Outline Border. */
    get showOutlineBorder(): ShowOutlineBorder | undefined;
    /** Show Legend Keys. */
    get showKeys(): ShowKeys | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Text Properties. */
    get textProperties(): TextProperties | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Series Axis. Serialized as `c:serAx` */
export declare class SeriesAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | TickLabelSkip | TickMarkSkip | SerAxExtensionList> {
    static _Q: string;
    /** Axis ID. */
    get axisId(): AxisId | undefined;
    /** Scaling. */
    get scaling(): Scaling | undefined;
    /** Delete. */
    get delete(): Delete | undefined;
    /** Axis Position. */
    get axisPosition(): AxisPosition | undefined;
    /** Major Gridlines. */
    get majorGridlines(): MajorGridlines | undefined;
    /** Minor Gridlines. */
    get minorGridlines(): MinorGridlines | undefined;
    /** Title. */
    get title(): Title | undefined;
    /** Number Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Major Tick Mark. */
    get majorTickMark(): MajorTickMark | undefined;
    /** Minor Tick Mark. */
    get minorTickMark(): MinorTickMark | undefined;
    /** Tick Label Position. */
    get tickLabelPosition(): TickLabelPosition | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Crossing Axis ID. */
    get crossingAxis(): CrossingAxis | undefined;
}
/** Date Axis. Serialized as `c:dateAx` */
export declare class DateAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | AutoLabeled | LabelOffset | BaseTimeUnit | MajorUnit | MajorTimeUnit | MinorUnit | MinorTimeUnit | DateAxExtensionList> {
    static _Q: string;
    /** Axis ID. */
    get axisId(): AxisId | undefined;
    /** Scaling. */
    get scaling(): Scaling | undefined;
    /** Delete. */
    get delete(): Delete | undefined;
    /** Axis Position. */
    get axisPosition(): AxisPosition | undefined;
    /** Major Gridlines. */
    get majorGridlines(): MajorGridlines | undefined;
    /** Minor Gridlines. */
    get minorGridlines(): MinorGridlines | undefined;
    /** Title. */
    get title(): Title | undefined;
    /** Number Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Major Tick Mark. */
    get majorTickMark(): MajorTickMark | undefined;
    /** Minor Tick Mark. */
    get minorTickMark(): MinorTickMark | undefined;
    /** Tick Label Position. */
    get tickLabelPosition(): TickLabelPosition | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Crossing Axis ID. */
    get crossingAxis(): CrossingAxis | undefined;
}
/** Category Axis Data. Serialized as `c:catAx` */
export declare class CategoryAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | AutoLabeled | LabelAlignment | LabelOffset | TickLabelSkip | TickMarkSkip | NoMultiLevelLabels | CatAxExtensionList> {
    static _Q: string;
    /** Axis ID. */
    get axisId(): AxisId | undefined;
    /** Scaling. */
    get scaling(): Scaling | undefined;
    /** Delete. */
    get delete(): Delete | undefined;
    /** Axis Position. */
    get axisPosition(): AxisPosition | undefined;
    /** Major Gridlines. */
    get majorGridlines(): MajorGridlines | undefined;
    /** Minor Gridlines. */
    get minorGridlines(): MinorGridlines | undefined;
    /** Title. */
    get title(): Title | undefined;
    /** Number Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Major Tick Mark. */
    get majorTickMark(): MajorTickMark | undefined;
    /** Minor Tick Mark. */
    get minorTickMark(): MinorTickMark | undefined;
    /** Tick Label Position. */
    get tickLabelPosition(): TickLabelPosition | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Crossing Axis ID. */
    get crossingAxis(): CrossingAxis | undefined;
}
/** Value Axis. Serialized as `c:valAx` */
export declare class ValueAxis extends OxmlCompositeElement<AxisId | Scaling | Delete | AxisPosition | MajorGridlines | MinorGridlines | Title | NumberingFormat | MajorTickMark | MinorTickMark | TickLabelPosition | ChartShapeProperties | TextProperties | CrossingAxis | Crosses | CrossesAt | CrossBetween | MajorUnit | MinorUnit | DisplayUnits | ValAxExtensionList> {
    static _Q: string;
    /** Axis ID. */
    get axisId(): AxisId | undefined;
    /** Scaling. */
    get scaling(): Scaling | undefined;
    /** Delete. */
    get delete(): Delete | undefined;
    /** Axis Position. */
    get axisPosition(): AxisPosition | undefined;
    /** Major Gridlines. */
    get majorGridlines(): MajorGridlines | undefined;
    /** Minor Gridlines. */
    get minorGridlines(): MinorGridlines | undefined;
    /** Title. */
    get title(): Title | undefined;
    /** Number Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Major Tick Mark. */
    get majorTickMark(): MajorTickMark | undefined;
    /** Minor Tick Mark. */
    get minorTickMark(): MinorTickMark | undefined;
    /** Tick Label Position. */
    get tickLabelPosition(): TickLabelPosition | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Crossing Axis ID. */
    get crossingAxis(): CrossingAxis | undefined;
}
/** Bubble Charts. Serialized as `c:bubbleChart` */
export declare class BubbleChart extends OxmlCompositeElement<VaryColors | BubbleChartSeries | DataLabels | Bubble3D | BubbleScale | ShowNegativeBubbles | SizeRepresents | AxisId | BubbleChartExtensionList> {
    static _Q: string;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** 3D Surface Charts. Serialized as `c:surface3DChart` */
export declare class Surface3DChart extends OxmlCompositeElement<Wireframe | VaryColors | SurfaceChartSeries | BandFormats | AxisId | Surface3DChartExtensionList> {
    static _Q: string;
    /** Returns Wireframe. */
    get wireframe(): Wireframe | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Surface Charts. Serialized as `c:surfaceChart` */
export declare class SurfaceChart extends OxmlCompositeElement<Wireframe | SurfaceChartSeries | BandFormats | AxisId | SurfaceChartExtensionList> {
    static _Q: string;
    /** Wireframe. */
    get wireframe(): Wireframe | undefined;
}
/** Pie of Pie or Bar of Pie Charts. Serialized as `c:ofPieChart` */
export declare class OfPieChart extends OxmlCompositeElement<OfPieType | VaryColors | PieChartSeries | DataLabels | GapWidth | SplitType | SplitPosition | CustomSplit | SecondPieSize | SeriesLines | ExtensionList> {
    static _Q: string;
    /** Pie of Pie or Bar of Pie Type. */
    get ofPieType(): OfPieType | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** 3D Bar Charts. Serialized as `c:bar3DChart` */
export declare class Bar3DChart extends OxmlCompositeElement<BarDirection | BarGrouping | VaryColors | BarChartSeries | DataLabels | GapWidth | GapDepth | Shape | AxisId | Bar3DChartExtensionList> {
    static _Q: string;
    /** Bar Direction. */
    get barDirection(): BarDirection | undefined;
    /** Bar Grouping. */
    get barGrouping(): BarGrouping | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Bar Charts. Serialized as `c:barChart` */
export declare class BarChart extends OxmlCompositeElement<BarDirection | BarGrouping | VaryColors | BarChartSeries | DataLabels | GapWidth | Overlap | SeriesLines | AxisId | BarChartExtensionList> {
    static _Q: string;
    /** Bar Direction. */
    get barDirection(): BarDirection | undefined;
    /** Bar Grouping. */
    get barGrouping(): BarGrouping | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Doughnut Charts. Serialized as `c:doughnutChart` */
export declare class DoughnutChart extends OxmlCompositeElement<VaryColors | PieChartSeries | DataLabels | FirstSliceAngle | HoleSize | ExtensionList> {
    static _Q: string;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** 3D Pie Charts. Serialized as `c:pie3DChart` */
export declare class Pie3DChart extends OxmlCompositeElement<VaryColors | PieChartSeries | DataLabels | Pie3DChartExtensionList> {
    static _Q: string;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Pie Charts. Serialized as `c:pieChart` */
export declare class PieChart extends OxmlCompositeElement<VaryColors | PieChartSeries | DataLabels | FirstSliceAngle | PieChartExtensionList> {
    static _Q: string;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Scatter Charts. Serialized as `c:scatterChart` */
export declare class ScatterChart extends OxmlCompositeElement<ScatterStyle | VaryColors | ScatterChartSeries | DataLabels | AxisId | ScatterChartExtensionList> {
    static _Q: string;
    /** Returns ScatterStyle. */
    get scatterStyle(): ScatterStyle | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Radar Charts. Serialized as `c:radarChart` */
export declare class RadarChart extends OxmlCompositeElement<RadarStyle | VaryColors | RadarChartSeries | DataLabels | AxisId | RadarChartExtensionList> {
    static _Q: string;
    /** Returns RadarStyle. */
    get radarStyle(): RadarStyle | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Stock Charts. Serialized as `c:stockChart` */
export declare class StockChart extends OxmlCompositeElement<LineChartSeries | DataLabels | DropLines | HighLowLines | UpDownBars | AxisId | StockChartExtensionList> {
    static _Q: string;
}
/** 3D Line Charts. Serialized as `c:line3DChart` */
export declare class Line3DChart extends OxmlCompositeElement<Grouping | VaryColors | LineChartSeries | DataLabels | DropLines | GapDepth | AxisId | Line3DChartExtensionList> {
    static _Q: string;
    /** Grouping. */
    get grouping(): Grouping | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Line Charts. Serialized as `c:lineChart` */
export declare class LineChart extends OxmlCompositeElement<Grouping | VaryColors | LineChartSeries | DataLabels | DropLines | HighLowLines | UpDownBars | ShowMarker | Smooth | AxisId | LineChartExtensionList> {
    static _Q: string;
    /** Grouping. */
    get grouping(): Grouping | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** 3D Area Charts. Serialized as `c:area3DChart` */
export declare class Area3DChart extends OxmlCompositeElement<Grouping | VaryColors | AreaChartSeries | DataLabels | DropLines | GapDepth | AxisId | Area3DChartExtensionList> {
    static _Q: string;
    /** Grouping. */
    get grouping(): Grouping | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Area Charts. Serialized as `c:areaChart` */
export declare class AreaChart extends OxmlCompositeElement<Grouping | VaryColors | AreaChartSeries | DataLabels | DropLines | AxisId | AreaChartExtensionList> {
    static _Q: string;
    /** Grouping. */
    get grouping(): Grouping | undefined;
    /** Returns VaryColors. */
    get varyColors(): VaryColors | undefined;
}
/** Data Label. Serialized as `c:dLbl` */
export declare class DataLabel extends OxmlCompositeElement<Index | Delete | Layout | ChartText | NumberingFormat | ChartShapeProperties | TextProperties | DataLabelPosition | ShowLegendKey | ShowValue | ShowCategoryName | ShowSeriesName | ShowPercent | ShowBubbleSize | Separator | DLblExtensionList> {
    static _Q: string;
    /** Returns Index. */
    get index(): Index | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `c:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Page Setup. Serialized as `c:pageSetup` */
export declare class PageSetup extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Page Size. Serialized as `:paperSize` */
    get paperSize(): UInt32Value | undefined;
    set paperSize(v: UInt32Value | undefined);
    /** First Page Number. Serialized as `:firstPageNumber` */
    get firstPageNumber(): Int32Value | undefined;
    set firstPageNumber(v: Int32Value | undefined);
    /** Orientation. Serialized as `:orientation` */
    get orientation(): PageSetupOrientationValues | undefined;
    set orientation(v: PageSetupOrientationValues | undefined);
    /** Black and White. Serialized as `:blackAndWhite` */
    get blackAndWhite(): BooleanValue | undefined;
    set blackAndWhite(v: BooleanValue | undefined);
    /** Draft. Serialized as `:draft` */
    get draft(): BooleanValue | undefined;
    set draft(v: BooleanValue | undefined);
    /** Use First Page Number. Serialized as `:useFirstPageNumber` */
    get useFirstPageNumber(): BooleanValue | undefined;
    set useFirstPageNumber(v: BooleanValue | undefined);
    /** Horizontal DPI. Serialized as `:horizontalDpi` */
    get horizontalDpi(): Int32Value | undefined;
    set horizontalDpi(v: Int32Value | undefined);
    /** Vertical DPI. Serialized as `:verticalDpi` */
    get verticalDpi(): Int32Value | undefined;
    set verticalDpi(v: Int32Value | undefined);
    /** Copies. Serialized as `:copies` */
    get copies(): UInt32Value | undefined;
    set copies(v: UInt32Value | undefined);
}
/** Page Margins. Serialized as `c:pageMargins` */
export declare class PageMargins extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Left. Serialized as `:l` */
    get left(): DoubleValue | undefined;
    set left(v: DoubleValue | undefined);
    /** Right. Serialized as `:r` */
    get right(): DoubleValue | undefined;
    set right(v: DoubleValue | undefined);
    /** Top. Serialized as `:t` */
    get top(): DoubleValue | undefined;
    set top(v: DoubleValue | undefined);
    /** Bottom. Serialized as `:b` */
    get bottom(): DoubleValue | undefined;
    set bottom(v: DoubleValue | undefined);
    /** Header. Serialized as `:header` */
    get header(): DoubleValue | undefined;
    set header(v: DoubleValue | undefined);
    /** Footer. Serialized as `:footer` */
    get footer(): DoubleValue | undefined;
    set footer(v: DoubleValue | undefined);
}
/** Header and Footer. Serialized as `c:headerFooter` */
export declare class HeaderFooter extends OxmlCompositeElement<OddHeader | OddFooter | EvenHeader | EvenFooter | FirstHeader | FirstFooter> {
    static _Q: string;
    static _A: string[];
    /** Align With Margins. Serialized as `:alignWithMargins` */
    get alignWithMargins(): BooleanValue | undefined;
    set alignWithMargins(v: BooleanValue | undefined);
    /** Different Odd Even. Serialized as `:differentOddEven` */
    get differentOddEven(): BooleanValue | undefined;
    set differentOddEven(v: BooleanValue | undefined);
    /** Different First. Serialized as `:differentFirst` */
    get differentFirst(): BooleanValue | undefined;
    set differentFirst(v: BooleanValue | undefined);
    /** Odd Header. */
    get oddHeader(): OddHeader | undefined;
    /** Odd Footer. */
    get oddFooter(): OddFooter | undefined;
    /** Even Header. */
    get evenHeader(): EvenHeader | undefined;
    /** Even Footer. */
    get evenFooter(): EvenFooter | undefined;
    /** First Header. */
    get firstHeader(): FirstHeader | undefined;
    /** First Footer. */
    get firstFooter(): FirstFooter | undefined;
}
/** Legend Entry. Serialized as `c:legendEntry` */
export declare class LegendEntry extends OxmlCompositeElement<Index | Delete | TextProperties | ExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
}
/** Legend Position. Serialized as `c:legendPos` */
export declare class LegendPosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Legend Position Value. Serialized as `:val` */
    get val(): LegendPositionValues | undefined;
    set val(v: LegendPositionValues | undefined);
}
/** Pivot Format. Serialized as `c:pivotFmt` */
export declare class PivotFormat extends OxmlCompositeElement<Index | ShapeProperties | Marker | DataLabel | ExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Marker. */
    get marker(): Marker | undefined;
    /** Data Label. */
    get dataLabel(): DataLabel | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Axis Orientation. Serialized as `c:orientation` */
export declare class Orientation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Orientation Value. Serialized as `:val` */
    get val(): OrientationValues | undefined;
    set val(v: OrientationValues | undefined);
}
/** Logarithmic Base. Serialized as `c:logBase` */
export declare class LogBase extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Logarithmic Base Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Display Units Label. Serialized as `c:dispUnitsLbl` */
export declare class DisplayUnitsLabel extends OxmlCompositeElement<Layout | ChartText | ChartShapeProperties | TextProperties> {
    static _Q: string;
    /** Layout. */
    get layout(): Layout | undefined;
    /** Returns ChartText. */
    get chartText(): ChartText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
}
/** Built in Display Unit Value. Serialized as `c:builtInUnit` */
export declare class BuiltInUnit extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Built In Unit Value. Serialized as `:val` */
    get val(): BuiltInUnitValues | undefined;
    set val(v: BuiltInUnitValues | undefined);
}
/** Picture Stack Unit. Serialized as `c:pictureStackUnit` */
export declare class PictureStackUnit extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Picture Stack Unit. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Picture Format. Serialized as `c:pictureFormat` */
export declare class PictureFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Picture Format Value. Serialized as `:val` */
    get val(): PictureFormatValues | undefined;
    set val(v: PictureFormatValues | undefined);
}
/** Band Format. Serialized as `c:bandFmt` */
export declare class BandFormat extends OxmlCompositeElement<Index | ChartShapeProperties> {
    static _Q: string;
    /** Returns Index. */
    get index(): Index | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
}
/** Second Pie Size. Serialized as `c:secondPieSize` */
export declare class SecondPieSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Second Pie Size Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Custom Split. Serialized as `c:custSplit` */
export declare class CustomSplit extends OxmlCompositeElement<SecondPiePoint> {
    static _Q: string;
}
/** Split Type. Serialized as `c:splitType` */
export declare class SplitType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Split Type Value. Serialized as `:val` */
    get val(): SplitValues | undefined;
    set val(v: SplitValues | undefined);
}
/** Pie of Pie or Bar of Pie Type. Serialized as `c:ofPieType` */
export declare class OfPieType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Pie of Pie or Bar of Pie Type Value. Serialized as `:val` */
    get val(): OfPieValues | undefined;
    set val(v: OfPieValues | undefined);
}
/** Defines the UpDownBarType Class. */
export declare abstract class UpDownBarType extends OxmlCompositeElement<ChartShapeProperties> {
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
}
/** Down Bars. Serialized as `c:downBars` */
export declare class DownBars extends UpDownBarType {
    static _Q: string;
}
/** Up Bars. Serialized as `c:upBars` */
export declare class UpBars extends UpDownBarType {
    static _Q: string;
}
/** Defines the GapAmountType Class. */
export declare abstract class GapAmountType extends OxmlLeafElement {
    static _A: string[];
    /** Gap Size Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Defines the GapDepth Class. Serialized as `c:gapDepth` */
export declare class GapDepth extends GapAmountType {
    static _Q: string;
}
/** Gap Width. Serialized as `c:gapWidth` */
export declare class GapWidth extends GapAmountType {
    static _Q: string;
}
/** Defines the NumberDataSourceType Class. */
export declare abstract class NumberDataSourceType extends OxmlCompositeElement<NumberReference | NumberLiteral> {
    /** Number Reference. */
    get numberReference(): NumberReference | undefined;
    /** Number Literal. */
    get numberLiteral(): NumberLiteral | undefined;
}
/** Defines the BubbleSize Class. Serialized as `c:bubbleSize` */
export declare class BubbleSize extends NumberDataSourceType {
    static _Q: string;
}
/** Defines the YValues Class. Serialized as `c:yVal` */
export declare class YValues extends NumberDataSourceType {
    static _Q: string;
}
/** Defines the Values Class. Serialized as `c:val` */
export declare class Values extends NumberDataSourceType {
    static _Q: string;
}
/** Minus. Serialized as `c:minus` */
export declare class Minus extends NumberDataSourceType {
    static _Q: string;
}
/** Plus. Serialized as `c:plus` */
export declare class Plus extends NumberDataSourceType {
    static _Q: string;
}
/** Error Bar Value Type. Serialized as `c:errValType` */
export declare class ErrorBarValueType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Error Bar Type Value. Serialized as `:val` */
    get val(): ErrorValues | undefined;
    set val(v: ErrorValues | undefined);
}
/** Error Bar Type. Serialized as `c:errBarType` */
export declare class ErrorBarType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Error Bar Type Value. Serialized as `:val` */
    get val(): ErrorBarValues | undefined;
    set val(v: ErrorBarValues | undefined);
}
/** Error Bar Direction. Serialized as `c:errDir` */
export declare class ErrorDirection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Error Bar Direction Value. Serialized as `:val` */
    get val(): ErrorBarDirectionValues | undefined;
    set val(v: ErrorBarDirectionValues | undefined);
}
/** Trendline Label. Serialized as `c:trendlineLbl` */
export declare class TrendlineLabel extends OxmlCompositeElement<Layout | ChartText | NumberingFormat | ChartShapeProperties | TextProperties | ExtensionList> {
    static _Q: string;
    /** Layout. */
    get layout(): Layout | undefined;
    /** Returns ChartText. */
    get chartText(): ChartText | undefined;
    /** Number Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Period. Serialized as `c:period` */
export declare class Period extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Period Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Polynomial Trendline Order. Serialized as `c:order` */
export declare class PolynomialOrder extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Order Value. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** Trendline Type. Serialized as `c:trendlineType` */
export declare class TrendlineType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Trendline Type Value. Serialized as `:val` */
    get val(): TrendlineValues | undefined;
    set val(v: TrendlineValues | undefined);
}
/** Defines the PictureOptions Class. Serialized as `c:pictureOptions` */
export declare class PictureOptions extends OxmlCompositeElement<ApplyToFront | ApplyToSides | ApplyToEnd | PictureFormat | PictureStackUnit> {
    static _Q: string;
    /** Apply To Front. */
    get applyToFront(): ApplyToFront | undefined;
    /** Apply To Sides. */
    get applyToSides(): ApplyToSides | undefined;
    /** Apply to End. */
    get applyToEnd(): ApplyToEnd | undefined;
    /** Picture Format. */
    get pictureFormat(): PictureFormat | undefined;
    /** Picture Stack Unit. */
    get pictureStackUnit(): PictureStackUnit | undefined;
}
/** Marker. Serialized as `c:marker` */
export declare class Marker extends OxmlCompositeElement<Symbol | Size | ChartShapeProperties | ExtensionList> {
    static _Q: string;
    /** Symbol. */
    get symbol(): Symbol | undefined;
    /** Size. */
    get size(): Size | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Size. Serialized as `c:size` */
export declare class Size extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Marker Size Value. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** Symbol. Serialized as `c:symbol` */
export declare class Symbol extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Marker Style Value. Serialized as `:val` */
    get val(): MarkerStyleValues | undefined;
    set val(v: MarkerStyleValues | undefined);
}
/** Perspective. Serialized as `c:perspective` */
export declare class Perspective extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Perspective Value. Serialized as `:val` */
    get val(): ByteValue | undefined;
    set val(v: ByteValue | undefined);
}
/** Depth Percent. Serialized as `c:depthPercent` */
export declare class DepthPercent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Depth Percent Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Y Rotation. Serialized as `c:rotY` */
export declare class RotateY extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Y Rotation Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Height Percent. Serialized as `c:hPercent` */
export declare class HeightPercent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Height Percent Value. Serialized as `:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** X Rotation. Serialized as `c:rotX` */
export declare class RotateX extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** X Rotation Value. Serialized as `:val` */
    get val(): SByteValue | undefined;
    set val(v: SByteValue | undefined);
}
/** Manual Layout. Serialized as `c:manualLayout` */
export declare class ManualLayout extends OxmlCompositeElement<LayoutTarget | LeftMode | TopMode | WidthMode | HeightMode | Left | Top | Width | Height | ExtensionList> {
    static _Q: string;
    /** Layout Target. */
    get layoutTarget(): LayoutTarget | undefined;
    /** Left Mode. */
    get leftMode(): LeftMode | undefined;
    /** Top Mode. */
    get topMode(): TopMode | undefined;
    /** Width Mode. */
    get widthMode(): WidthMode | undefined;
    /** Height Mode. */
    get heightMode(): HeightMode | undefined;
    /** Left. */
    get left(): Left | undefined;
    /** Top. */
    get top(): Top | undefined;
    /** Width. */
    get width(): Width | undefined;
    /** Height. */
    get height(): Height | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the LayoutModeType Class. */
export declare abstract class LayoutModeType extends OxmlLeafElement {
    static _A: string[];
    /** Layout Mode Value. Serialized as `:val` */
    get val(): LayoutModeValues | undefined;
    set val(v: LayoutModeValues | undefined);
}
/** Height Mode. Serialized as `c:hMode` */
export declare class HeightMode extends LayoutModeType {
    static _Q: string;
}
/** Width Mode. Serialized as `c:wMode` */
export declare class WidthMode extends LayoutModeType {
    static _Q: string;
}
/** Top Mode. Serialized as `c:yMode` */
export declare class TopMode extends LayoutModeType {
    static _Q: string;
}
/** Left Mode. Serialized as `c:xMode` */
export declare class LeftMode extends LayoutModeType {
    static _Q: string;
}
/** Layout Target. Serialized as `c:layoutTarget` */
export declare class LayoutTarget extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Layout Target Value. Serialized as `:val` */
    get val(): LayoutTargetValues | undefined;
    set val(v: LayoutTargetValues | undefined);
}
/** Defines the StringDataType Class. */
export declare abstract class StringDataType extends OxmlCompositeElement<PointCount | StringPoint | StrDataExtensionList> {
    /** Returns PointCount. */
    get pointCount(): PointCount | undefined;
}
/** Defines the StringCache Class. Serialized as `c:strCache` */
export declare class StringCache extends StringDataType {
    static _Q: string;
}
/** String Literal. Serialized as `c:strLit` */
export declare class StringLiteral extends StringDataType {
    static _Q: string;
}
/** Defines the StringReference Class. Serialized as `c:strRef` */
export declare class StringReference extends OxmlCompositeElement<Formula | StringCache | StrRefExtensionList> {
    static _Q: string;
    /** Returns Formula. */
    get formula(): Formula | undefined;
    /** Returns StringCache. */
    get stringCache(): StringCache | undefined;
    /** Returns StrRefExtensionList. */
    get strRefExtensionList(): StrRefExtensionList | undefined;
}
/** Multi Level String Reference. Serialized as `c:multiLvlStrRef` */
export declare class MultiLevelStringReference extends OxmlCompositeElement<Formula | MultiLevelStringCache | MultiLvlStrRefExtensionList> {
    static _Q: string;
    /** Returns Formula. */
    get formula(): Formula | undefined;
    /** Returns MultiLevelStringCache. */
    get multiLevelStringCache(): MultiLevelStringCache | undefined;
    /** Returns MultiLvlStrRefExtensionList. */
    get multiLvlStrRefExtensionList(): MultiLvlStrRefExtensionList | undefined;
}
/** Level. Serialized as `c:lvl` */
export declare class Level extends OxmlCompositeElement<StringPoint> {
    static _Q: string;
}
/** Defines the NumberDataType Class. */
export declare abstract class NumberDataType extends OxmlCompositeElement<FormatCode | PointCount | NumericPoint | ExtensionList> {
    /** Format Code. */
    get formatCode(): FormatCode | undefined;
    /** Point Count. */
    get pointCount(): PointCount | undefined;
}
/** Defines the NumberingCache Class. Serialized as `c:numCache` */
export declare class NumberingCache extends NumberDataType {
    static _Q: string;
}
/** Number Literal. Serialized as `c:numLit` */
export declare class NumberLiteral extends NumberDataType {
    static _Q: string;
}
/** Number Reference. Serialized as `c:numRef` */
export declare class NumberReference extends OxmlCompositeElement<Formula | NumberingCache | NumRefExtensionList> {
    static _Q: string;
    /** Returns Formula. */
    get formula(): Formula | undefined;
    /** Returns NumberingCache. */
    get numberingCache(): NumberingCache | undefined;
    /** Returns NumRefExtensionList. */
    get numRefExtensionList(): NumRefExtensionList | undefined;
}
/** Defines the ExtensionList Class. Serialized as `c:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<Extension> {
    static _Q: string;
}
/** Numeric Point. Serialized as `c:pt` */
export declare class NumericPoint extends OxmlCompositeElement<NumericValue> {
    static _Q: string;
    static _A: string[];
    /** Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Number Format. Serialized as `:formatCode` */
    get formatCode(): StringValue | undefined;
    set formatCode(v: StringValue | undefined);
    /** Numeric Value. */
    get numericValue(): NumericValue | undefined;
}
/** Pivot Name. Serialized as `c:name` */
export declare class PivotTableName extends OxmlLeafTextElement {
    static _Q: string;
}
/** First Footer. Serialized as `c:firstFooter` */
export declare class FirstFooter extends OxmlLeafTextElement {
    static _Q: string;
}
/** First Header. Serialized as `c:firstHeader` */
export declare class FirstHeader extends OxmlLeafTextElement {
    static _Q: string;
}
/** Even Footer. Serialized as `c:evenFooter` */
export declare class EvenFooter extends OxmlLeafTextElement {
    static _Q: string;
}
/** Even Header. Serialized as `c:evenHeader` */
export declare class EvenHeader extends OxmlLeafTextElement {
    static _Q: string;
}
/** Odd Footer. Serialized as `c:oddFooter` */
export declare class OddFooter extends OxmlLeafTextElement {
    static _Q: string;
}
/** Odd Header. Serialized as `c:oddHeader` */
export declare class OddHeader extends OxmlLeafTextElement {
    static _Q: string;
}
/** Format Code. Serialized as `c:formatCode` */
export declare class FormatCode extends OxmlLeafTextElement {
    static _Q: string;
}
/** Numeric Value. Serialized as `c:v` */
export declare class NumericValue extends OxmlLeafTextElement {
    static _Q: string;
}
/** Extension. Serialized as `c:ext` */
export declare class Extension extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** Uniform Resource Identifier. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Defines the RelationshipIdType Class. */
export declare abstract class RelationshipIdType extends OxmlLeafElement {
    static _A: string[];
    /** Relationship Reference. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the UserShapesReference Class. Serialized as `c:userShapes` */
export declare class UserShapesReference extends RelationshipIdType {
    static _Q: string;
}
/** Legacy Drawing for Headers and Footers. Serialized as `c:legacyDrawingHF` */
export declare class LegacyDrawingHeaderFooter extends RelationshipIdType {
    static _Q: string;
}
/** Reference to Chart Part. Serialized as `c:chart` */
export declare class ChartReference extends RelationshipIdType {
    static _Q: string;
}
/** User Shapes. Serialized as `c:userShapes` */
export declare class UserShapes extends OxmlPartRootElement<CdrRelativeAnchorSize | CdrAbsoluteAnchorSize> {
    static _Q: string;
}
/** Chart Space. Serialized as `c:chartSpace` */
export declare class ChartSpace extends OxmlPartRootElement<Date1904 | EditingLanguage | RoundedCorners | C14Style | Style | ColorMapOverride | PivotSource | Protection | Chart | ShapeProperties | TextProperties | ExternalData | PrintSettings | UserShapesReference | ChartSpaceExtensionList> {
    static _Q: string;
    /** Returns Date1904. */
    get date1904(): Date1904 | undefined;
    /** Returns EditingLanguage. */
    get editingLanguage(): EditingLanguage | undefined;
    /** Returns RoundedCorners. */
    get roundedCorners(): RoundedCorners | undefined;
}
/** Defines the DoubleType Class. */
export declare abstract class DoubleType extends OxmlLeafElement {
    static _A: string[];
    /** Floating Point Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Minimum. Serialized as `c:min` */
export declare class MinAxisValue extends DoubleType {
    static _Q: string;
}
/** Maximum. Serialized as `c:max` */
export declare class MaxAxisValue extends DoubleType {
    static _Q: string;
}
/** Custom Display Unit. Serialized as `c:custUnit` */
export declare class CustomDisplayUnit extends DoubleType {
    static _Q: string;
}
/** Split Position. Serialized as `c:splitPos` */
export declare class SplitPosition extends DoubleType {
    static _Q: string;
}
/** Error Bar Value. Serialized as `c:val` */
export declare class ErrorBarValue extends DoubleType {
    static _Q: string;
}
/** Intercept. Serialized as `c:intercept` */
export declare class Intercept extends DoubleType {
    static _Q: string;
}
/** Backward. Serialized as `c:backward` */
export declare class Backward extends DoubleType {
    static _Q: string;
}
/** Forward. Serialized as `c:forward` */
export declare class Forward extends DoubleType {
    static _Q: string;
}
/** Height. Serialized as `c:h` */
export declare class Height extends DoubleType {
    static _Q: string;
}
/** Width. Serialized as `c:w` */
export declare class Width extends DoubleType {
    static _Q: string;
}
/** Top. Serialized as `c:y` */
export declare class Top extends DoubleType {
    static _Q: string;
}
/** Left. Serialized as `c:x` */
export declare class Left extends DoubleType {
    static _Q: string;
}
/** Crossing Value. Serialized as `c:crossesAt` */
export declare class CrossesAt extends DoubleType {
    static _Q: string;
}
/** Crosses. Serialized as `c:crosses` */
export declare class Crosses extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Crosses Value. Serialized as `:val` */
    get val(): CrossesValues | undefined;
    set val(v: CrossesValues | undefined);
}
/** Tick Label Position. Serialized as `c:tickLblPos` */
export declare class TickLabelPosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Tick Label Position Value. Serialized as `:val` */
    get val(): TickLabelPositionValues | undefined;
    set val(v: TickLabelPositionValues | undefined);
}
/** Defines the TickMarkType Class. */
export declare abstract class TickMarkType extends OxmlLeafElement {
    static _A: string[];
    /** Tick Mark Value. Serialized as `:val` */
    get val(): TickMarkValues | undefined;
    set val(v: TickMarkValues | undefined);
}
/** Minor Tick Mark. Serialized as `c:minorTickMark` */
export declare class MinorTickMark extends TickMarkType {
    static _Q: string;
}
/** Major Tick Mark. Serialized as `c:majorTickMark` */
export declare class MajorTickMark extends TickMarkType {
    static _Q: string;
}
/** Title. Serialized as `c:title` */
export declare class Title extends OxmlCompositeElement<ChartText | Layout | Overlay | ChartShapeProperties | TextProperties | ExtensionList> {
    static _Q: string;
    /** Chart Text. */
    get chartText(): ChartText | undefined;
    /** Layout. */
    get layout(): Layout | undefined;
    /** Overlay. */
    get overlay(): Overlay | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns TextProperties. */
    get textProperties(): TextProperties | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Axis Position. Serialized as `c:axPos` */
export declare class AxisPosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Axis Position Value. Serialized as `:val` */
    get val(): AxisPositionValues | undefined;
    set val(v: AxisPositionValues | undefined);
}
/** Scaling. Serialized as `c:scaling` */
export declare class Scaling extends OxmlCompositeElement<LogBase | Orientation | MaxAxisValue | MinAxisValue | ExtensionList> {
    static _Q: string;
    /** Logarithmic Base. */
    get logBase(): LogBase | undefined;
    /** Axis Orientation. */
    get orientation(): Orientation | undefined;
    /** Maximum. */
    get maxAxisValue(): MaxAxisValue | undefined;
    /** Minimum. */
    get minAxisValue(): MinAxisValue | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Band Formats. Serialized as `c:bandFmts` */
export declare class BandFormats extends OxmlCompositeElement<BandFormat> {
    static _Q: string;
}
/** Surface Chart Series. Serialized as `c:ser` */
export declare class SurfaceChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | CategoryAxisData | Values | Bubble3D | SurfaceSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
    /** Returns CategoryAxisData. */
    get categoryAxisData(): CategoryAxisData | undefined;
    /** Returns Values. */
    get values(): Values | undefined;
    /** Returns Bubble3D. */
    get bubble3D(): Bubble3D | undefined;
    /** Returns SurfaceSerExtensionList. */
    get surfaceSerExtensionList(): SurfaceSerExtensionList | undefined;
}
/** Pie Chart Series. Serialized as `c:ser` */
export declare class PieChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | Explosion | DataPoint | DataLabels | CategoryAxisData | Values | PieSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
    /** Returns Explosion. */
    get explosion(): Explosion | undefined;
}
/** Area Chart Series. Serialized as `c:ser` */
export declare class AreaChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | PictureOptions | DataPoint | DataLabels | Trendline | ErrorBars | CategoryAxisData | Values | AreaSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
}
/** Bar Chart Series. Serialized as `c:ser` */
export declare class BarChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | InvertIfNegative | PictureOptions | DataPoint | DataLabels | Trendline | ErrorBars | CategoryAxisData | Values | Shape | BarSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns InvertIfNegative. */
    get invertIfNegative(): InvertIfNegative | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
}
/** Bar Grouping. Serialized as `c:grouping` */
export declare class BarGrouping extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Bar Grouping Value. Serialized as `:val` */
    get val(): BarGroupingValues | undefined;
    set val(v: BarGroupingValues | undefined);
}
/** Bar Direction. Serialized as `c:barDir` */
export declare class BarDirection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Bar Direction Value. Serialized as `:val` */
    get val(): BarDirectionValues | undefined;
    set val(v: BarDirectionValues | undefined);
}
/** Data Labels. Serialized as `c:dLbls` */
export declare class DataLabels extends OxmlCompositeElement<DataLabel | Delete | NumberingFormat | ChartShapeProperties | TextProperties | DataLabelPosition | ShowLegendKey | ShowValue | ShowCategoryName | ShowSeriesName | ShowPercent | ShowBubbleSize | Separator | ShowLeaderLines | LeaderLines | DLblsExtensionList> {
    static _Q: string;
}
/** Defines the LineChartSeries Class. Serialized as `c:ser` */
export declare class LineChartSeries extends OxmlCompositeElement<Index | Order | SeriesText | ChartShapeProperties | Marker | PictureOptions | DataPoint | DataLabels | Trendline | ErrorBars | CategoryAxisData | Values | Smooth | LineSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): Index | undefined;
    /** Order. */
    get order(): Order | undefined;
    /** Series Text. */
    get seriesText(): SeriesText | undefined;
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
    /** Returns Marker. */
    get marker(): Marker | undefined;
    /** Returns PictureOptions. */
    get pictureOptions(): PictureOptions | undefined;
}
/** Grouping. Serialized as `c:grouping` */
export declare class Grouping extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Grouping Value. Serialized as `:val` */
    get val(): GroupingValues | undefined;
    set val(v: GroupingValues | undefined);
}
/** Series Text. Serialized as `c:tx` */
export declare class SeriesText extends OxmlCompositeElement<StringReference | NumericValue> {
    static _Q: string;
    /** Returns StringReference. */
    get stringReference(): StringReference | undefined;
    /** Returns NumericValue. */
    get numericValue(): NumericValue | undefined;
}
/** Defines the UnsignedIntegerType Class. */
export declare abstract class UnsignedIntegerType extends OxmlLeafElement {
    static _A: string[];
    /** Integer Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Format ID. Serialized as `c:fmtId` */
export declare class FormatId extends UnsignedIntegerType {
    static _Q: string;
}
/** Explosion. Serialized as `c:explosion` */
export declare class Explosion extends UnsignedIntegerType {
    static _Q: string;
}
/** Second Pie Point. Serialized as `c:secondPiePt` */
export declare class SecondPiePoint extends UnsignedIntegerType {
    static _Q: string;
}
/** Point Count. Serialized as `c:ptCount` */
export declare class PointCount extends UnsignedIntegerType {
    static _Q: string;
}
/** Crossing Axis ID. Serialized as `c:crossAx` */
export declare class CrossingAxis extends UnsignedIntegerType {
    static _Q: string;
}
/** Axis ID. Serialized as `c:axId` */
export declare class AxisId extends UnsignedIntegerType {
    static _Q: string;
}
/** Order. Serialized as `c:order` */
export declare class Order extends UnsignedIntegerType {
    static _Q: string;
}
/** Index. Serialized as `c:idx` */
export declare class Index extends UnsignedIntegerType {
    static _Q: string;
}
/** Defines the ChartLinesType Class. */
export declare abstract class ChartLinesType extends OxmlCompositeElement<ChartShapeProperties> {
    /** Returns ChartShapeProperties. */
    get chartShapeProperties(): ChartShapeProperties | undefined;
}
/** Defines the HighLowLines Class. Serialized as `c:hiLowLines` */
export declare class HighLowLines extends ChartLinesType {
    static _Q: string;
}
/** Defines the SeriesLines Class. Serialized as `c:serLines` */
export declare class SeriesLines extends ChartLinesType {
    static _Q: string;
}
/** Minor Gridlines. Serialized as `c:minorGridlines` */
export declare class MinorGridlines extends ChartLinesType {
    static _Q: string;
}
/** Major Gridlines. Serialized as `c:majorGridlines` */
export declare class MajorGridlines extends ChartLinesType {
    static _Q: string;
}
/** Drop Lines. Serialized as `c:dropLines` */
export declare class DropLines extends ChartLinesType {
    static _Q: string;
}
/** Leader Lines. Serialized as `c:leaderLines` */
export declare class LeaderLines extends ChartLinesType {
    static _Q: string;
}
/** Defines the ChartText Class. Serialized as `c:tx` */
export declare class ChartText extends OxmlCompositeElement<StringReference | RichText | StringLiteral> {
    static _Q: string;
    /** String Reference. */
    get stringReference(): StringReference | undefined;
    /** Rich Text. */
    get richText(): RichText | undefined;
    /** String Literal. */
    get stringLiteral(): StringLiteral | undefined;
}
/** Layout. Serialized as `c:layout` */
export declare class Layout extends OxmlCompositeElement<ManualLayout | ExtensionList> {
    static _Q: string;
    /** Manual Layout. */
    get manualLayout(): ManualLayout | undefined;
    /** Chart Extensibility. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Formula Class. Serialized as `c:f` */
export declare class Formula extends OxmlLeafTextElement {
    static _Q: string;
}
/** Trendline Name. Serialized as `c:name` */
export declare class TrendlineName extends OxmlLeafTextElement {
    static _Q: string;
}
/** Separator. Serialized as `c:separator` */
export declare class Separator extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the BooleanType Class. */
export declare abstract class BooleanType extends OxmlLeafElement {
    static _A: string[];
    /** Boolean Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** True if we should render datalabels over the maximum scale. Serialized as `c:showDLblsOverMax` */
export declare class ShowDataLabelsOverMaximum extends BooleanType {
    static _Q: string;
}
/** True if only visible cells are plotted.. Serialized as `c:plotVisOnly` */
export declare class PlotVisibleOnly extends BooleanType {
    static _Q: string;
}
/** True if the chart automatic title has been deleted.. Serialized as `c:autoTitleDeleted` */
export declare class AutoTitleDeleted extends BooleanType {
    static _Q: string;
}
/** Defines the RoundedCorners Class. Serialized as `c:roundedCorners` */
export declare class RoundedCorners extends BooleanType {
    static _Q: string;
}
/** Defines the Date1904 Class. Serialized as `c:date1904` */
export declare class Date1904 extends BooleanType {
    static _Q: string;
}
/** Defines the NoMultiLevelLabels Class. Serialized as `c:noMultiLvlLbl` */
export declare class NoMultiLevelLabels extends BooleanType {
    static _Q: string;
}
/** Defines the AutoLabeled Class. Serialized as `c:auto` */
export declare class AutoLabeled extends BooleanType {
    static _Q: string;
}
/** Defines the ShowNegativeBubbles Class. Serialized as `c:showNegBubbles` */
export declare class ShowNegativeBubbles extends BooleanType {
    static _Q: string;
}
/** Defines the ShowMarker Class. Serialized as `c:marker` */
export declare class ShowMarker extends BooleanType {
    static _Q: string;
}
/** Defines the Smooth Class. Serialized as `c:smooth` */
export declare class Smooth extends BooleanType {
    static _Q: string;
}
/** Update Automatically. Serialized as `c:autoUpdate` */
export declare class AutoUpdate extends BooleanType {
    static _Q: string;
}
/** User Interface. Serialized as `c:userInterface` */
export declare class UserInterface extends BooleanType {
    static _Q: string;
}
/** Selection. Serialized as `c:selection` */
export declare class Selection extends BooleanType {
    static _Q: string;
}
/** Formatting. Serialized as `c:formatting` */
export declare class Formatting extends BooleanType {
    static _Q: string;
}
/** Data Cannot Be Changed. Serialized as `c:data` */
export declare class Data extends BooleanType {
    static _Q: string;
}
/** Chart Object. Serialized as `c:chartObject` */
export declare class ChartObject extends BooleanType {
    static _Q: string;
}
/** Apply to End. Serialized as `c:applyToEnd` */
export declare class ApplyToEnd extends BooleanType {
    static _Q: string;
}
/** Apply To Sides. Serialized as `c:applyToSides` */
export declare class ApplyToSides extends BooleanType {
    static _Q: string;
}
/** Apply To Front. Serialized as `c:applyToFront` */
export declare class ApplyToFront extends BooleanType {
    static _Q: string;
}
/** No End Cap. Serialized as `c:noEndCap` */
export declare class NoEndCap extends BooleanType {
    static _Q: string;
}
/** Display Equation. Serialized as `c:dispEq` */
export declare class DisplayEquation extends BooleanType {
    static _Q: string;
}
/** Display R Squared Value. Serialized as `c:dispRSqr` */
export declare class DisplayRSquaredValue extends BooleanType {
    static _Q: string;
}
/** 3D Bubble. Serialized as `c:bubble3D` */
export declare class Bubble3D extends BooleanType {
    static _Q: string;
}
/** Invert if Negative. Serialized as `c:invertIfNegative` */
export declare class InvertIfNegative extends BooleanType {
    static _Q: string;
}
/** Show Legend Keys. Serialized as `c:showKeys` */
export declare class ShowKeys extends BooleanType {
    static _Q: string;
}
/** Show Outline Border. Serialized as `c:showOutline` */
export declare class ShowOutlineBorder extends BooleanType {
    static _Q: string;
}
/** Show Vertical Border. Serialized as `c:showVertBorder` */
export declare class ShowVerticalBorder extends BooleanType {
    static _Q: string;
}
/** Show Horizontal Border. Serialized as `c:showHorzBorder` */
export declare class ShowHorizontalBorder extends BooleanType {
    static _Q: string;
}
/** Right Angle Axes. Serialized as `c:rAngAx` */
export declare class RightAngleAxes extends BooleanType {
    static _Q: string;
}
/** Overlay. Serialized as `c:overlay` */
export declare class Overlay extends BooleanType {
    static _Q: string;
}
/** Delete. Serialized as `c:delete` */
export declare class Delete extends BooleanType {
    static _Q: string;
}
/** Wireframe. Serialized as `c:wireframe` */
export declare class Wireframe extends BooleanType {
    static _Q: string;
}
/** Defines the VaryColors Class. Serialized as `c:varyColors` */
export declare class VaryColors extends BooleanType {
    static _Q: string;
}
/** Show Leader Lines. Serialized as `c:showLeaderLines` */
export declare class ShowLeaderLines extends BooleanType {
    static _Q: string;
}
/** Show Bubble Size. Serialized as `c:showBubbleSize` */
export declare class ShowBubbleSize extends BooleanType {
    static _Q: string;
}
/** Show Percent. Serialized as `c:showPercent` */
export declare class ShowPercent extends BooleanType {
    static _Q: string;
}
/** Show Series Name. Serialized as `c:showSerName` */
export declare class ShowSeriesName extends BooleanType {
    static _Q: string;
}
/** Show Category Name. Serialized as `c:showCatName` */
export declare class ShowCategoryName extends BooleanType {
    static _Q: string;
}
/** Show Value. Serialized as `c:showVal` */
export declare class ShowValue extends BooleanType {
    static _Q: string;
}
/** Show Legend Key. Serialized as `c:showLegendKey` */
export declare class ShowLegendKey extends BooleanType {
    static _Q: string;
}
/** Data Label Position. Serialized as `c:dLblPos` */
export declare class DataLabelPosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Data Label Position Value. Serialized as `:val` */
    get val(): DataLabelPositionValues | undefined;
    set val(v: DataLabelPositionValues | undefined);
}
/** Defines the TextBodyType Class. */
export declare abstract class TextBodyType extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Rich Text. Serialized as `c:rich` */
export declare class RichText extends TextBodyType {
    static _Q: string;
}
/** Defines the TextProperties Class. Serialized as `c:txPr` */
export declare class TextProperties extends TextBodyType {
    static _Q: string;
}
/** Defines the ChartShapeProperties Class. Serialized as `c:spPr` */
export declare class ChartShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Number Format. Serialized as `c:numFmt` */
export declare class NumberingFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Number Format Code. Serialized as `:formatCode` */
    get formatCode(): StringValue | undefined;
    set formatCode(v: StringValue | undefined);
    /** Linked to Source. Serialized as `:sourceLinked` */
    get sourceLinked(): BooleanValue | undefined;
    set sourceLinked(v: BooleanValue | undefined);
}
export declare function initDrawingChartsNamespace(): {
    prefix: string;
    xmlns: string;
};
