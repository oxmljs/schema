import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { StringValue } from '../../framework/types/StringValue';
import { DecimalValue } from '../../framework/types/DecimalValue';
import { DateTimeValue } from '../../framework/types/DateTimeValue';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { Emma as EmmaEmma } from '../EMMA';
export declare enum ChannelDataTypeValues {
    /** undefined. Serialized value: `integer` */
    Integer = "integer",
    /** undefined. Serialized value: `decimal` */
    Decimal = "decimal",
    /** undefined. Serialized value: `boolean` */
    Boolean = "boolean"
}
export declare const ChannelDataTypeValuesArray: readonly [ChannelDataTypeValues.Integer, ChannelDataTypeValues.Decimal, ChannelDataTypeValues.Boolean];
export declare enum ChannelValueOrientationValues {
    /** undefined. Serialized value: `+ve` */
    PlusVe = "+ve",
    /** undefined. Serialized value: `-ve` */
    MinusVe = "-ve"
}
export declare const ChannelValueOrientationValuesArray: readonly [ChannelValueOrientationValues.PlusVe, ChannelValueOrientationValues.MinusVe];
export declare enum StandardChannelPropertyNameValues {
    /** undefined. Serialized value: `threshold` */
    Threshold = "threshold",
    /** undefined. Serialized value: `resolution` */
    Resolution = "resolution",
    /** undefined. Serialized value: `quantization` */
    Quantization = "quantization",
    /** undefined. Serialized value: `noise` */
    Noise = "noise",
    /** undefined. Serialized value: `accuracy` */
    Accuracy = "accuracy",
    /** undefined. Serialized value: `crossCoupling` */
    CrossCoupling = "crossCoupling",
    /** undefined. Serialized value: `skew` */
    Skew = "skew",
    /** undefined. Serialized value: `minBandwidth` */
    MinBandwidth = "minBandwidth",
    /** undefined. Serialized value: `peakRate` */
    PeakRate = "peakRate",
    /** undefined. Serialized value: `distortion` */
    Distortion = "distortion"
}
export declare const StandardChannelPropertyNameValuesArray: readonly [StandardChannelPropertyNameValues.Threshold, StandardChannelPropertyNameValues.Resolution, StandardChannelPropertyNameValues.Quantization, StandardChannelPropertyNameValues.Noise, StandardChannelPropertyNameValues.Accuracy, StandardChannelPropertyNameValues.CrossCoupling, StandardChannelPropertyNameValues.Skew, StandardChannelPropertyNameValues.MinBandwidth, StandardChannelPropertyNameValues.PeakRate, StandardChannelPropertyNameValues.Distortion];
export declare enum StandardBrushPropertyNameValues {
    /** undefined. Serialized value: `width` */
    Width = "width",
    /** undefined. Serialized value: `height` */
    Height = "height",
    /** undefined. Serialized value: `color` */
    Color = "color",
    /** undefined. Serialized value: `transparency` */
    Transparency = "transparency",
    /** undefined. Serialized value: `tip` */
    Tip = "tip",
    /** undefined. Serialized value: `rasterOp` */
    RasterOp = "rasterOp",
    /** undefined. Serialized value: `antiAliased` */
    AntiAliased = "antiAliased",
    /** undefined. Serialized value: `fitToCurve` */
    FitToCurve = "fitToCurve",
    /** undefined. Serialized value: `ignorePressure` */
    IgnorePressure = "ignorePressure"
}
export declare const StandardBrushPropertyNameValuesArray: readonly [StandardBrushPropertyNameValues.Width, StandardBrushPropertyNameValues.Height, StandardBrushPropertyNameValues.Color, StandardBrushPropertyNameValues.Transparency, StandardBrushPropertyNameValues.Tip, StandardBrushPropertyNameValues.RasterOp, StandardBrushPropertyNameValues.AntiAliased, StandardBrushPropertyNameValues.FitToCurve, StandardBrushPropertyNameValues.IgnorePressure];
export declare enum StandardChannelNameValues {
    /** undefined. Serialized value: `X` */
    XCoordinate = "X",
    /** undefined. Serialized value: `Y` */
    YCoordinate = "Y",
    /** undefined. Serialized value: `Z` */
    ZCoordinate = "Z",
    /** undefined. Serialized value: `F` */
    PenTipForce = "F",
    /** undefined. Serialized value: `TP` */
    TangentPressure = "TP",
    /** undefined. Serialized value: `BP` */
    ButtonPressure = "BP",
    /** undefined. Serialized value: `S` */
    TipSwitchState = "S",
    /** undefined. Serialized value: `B1` */
    SideButton1State = "B1",
    /** undefined. Serialized value: `B2` */
    SideButton2State = "B2",
    /** undefined. Serialized value: `B3` */
    SideButton3State = "B3",
    /** undefined. Serialized value: `B4` */
    SideButton4State = "B4",
    /** undefined. Serialized value: `E` */
    PenInverted = "E",
    /** undefined. Serialized value: `OTx` */
    TiltAlongXAxis = "OTx",
    /** undefined. Serialized value: `OTy` */
    TiltAlongYAxis = "OTy",
    /** undefined. Serialized value: `OA` */
    PenAzimuthAngle = "OA",
    /** undefined. Serialized value: `OE` */
    PenElevationAngle = "OE",
    /** undefined. Serialized value: `OR` */
    PexAxisRotation = "OR",
    /** undefined. Serialized value: `RP` */
    PitchRotation = "RP",
    /** undefined. Serialized value: `RR` */
    RollRotation = "RR",
    /** undefined. Serialized value: `RY` */
    YawRotation = "RY",
    /** undefined. Serialized value: `C` */
    ColorValue = "C",
    /** undefined. Serialized value: `CR` */
    RedColorValue = "CR",
    /** undefined. Serialized value: `CG` */
    GreenColorValue = "CG",
    /** undefined. Serialized value: `CB` */
    BlueColorValue = "CB",
    /** undefined. Serialized value: `CC` */
    CyanColorValue = "CC",
    /** undefined. Serialized value: `CM` */
    MegentaColorValue = "CM",
    /** undefined. Serialized value: `CY` */
    YellowColorValue = "CY",
    /** undefined. Serialized value: `CK` */
    BlackColorValue = "CK",
    /** undefined. Serialized value: `W` */
    StrokesWidth = "W",
    /** undefined. Serialized value: `T` */
    Time = "T",
    /** undefined. Serialized value: `SN` */
    SerialNumber = "SN",
    /** undefined. Serialized value: `TW` */
    TouchWidth = "TW",
    /** undefined. Serialized value: `TH` */
    TouchHeight = "TH",
    /** undefined. Serialized value: `TC` */
    FingerTouch = "TC"
}
export declare const StandardChannelNameValuesArray: readonly [StandardChannelNameValues.XCoordinate, StandardChannelNameValues.YCoordinate, StandardChannelNameValues.ZCoordinate, StandardChannelNameValues.PenTipForce, StandardChannelNameValues.TangentPressure, StandardChannelNameValues.ButtonPressure, StandardChannelNameValues.TipSwitchState, StandardChannelNameValues.SideButton1State, StandardChannelNameValues.SideButton2State, StandardChannelNameValues.SideButton3State, StandardChannelNameValues.SideButton4State, StandardChannelNameValues.PenInverted, StandardChannelNameValues.TiltAlongXAxis, StandardChannelNameValues.TiltAlongYAxis, StandardChannelNameValues.PenAzimuthAngle, StandardChannelNameValues.PenElevationAngle, StandardChannelNameValues.PexAxisRotation, StandardChannelNameValues.PitchRotation, StandardChannelNameValues.RollRotation, StandardChannelNameValues.YawRotation, StandardChannelNameValues.ColorValue, StandardChannelNameValues.RedColorValue, StandardChannelNameValues.GreenColorValue, StandardChannelNameValues.BlueColorValue, StandardChannelNameValues.CyanColorValue, StandardChannelNameValues.MegentaColorValue, StandardChannelNameValues.YellowColorValue, StandardChannelNameValues.BlackColorValue, StandardChannelNameValues.StrokesWidth, StandardChannelNameValues.Time, StandardChannelNameValues.SerialNumber, StandardChannelNameValues.TouchWidth, StandardChannelNameValues.TouchHeight, StandardChannelNameValues.FingerTouch];
export declare enum StandardLengthUnitsValues {
    /** undefined. Serialized value: `m` */
    Meter = "m",
    /** undefined. Serialized value: `cm` */
    Centimeter = "cm",
    /** undefined. Serialized value: `mm` */
    Millimeter = "mm",
    /** undefined. Serialized value: `in` */
    Inche = "in",
    /** undefined. Serialized value: `pt` */
    Point = "pt",
    /** undefined. Serialized value: `pc` */
    Pica = "pc",
    /** undefined. Serialized value: `em` */
    Em = "em",
    /** undefined. Serialized value: `ex` */
    Ex = "ex"
}
export declare const StandardLengthUnitsValuesArray: readonly [StandardLengthUnitsValues.Meter, StandardLengthUnitsValues.Centimeter, StandardLengthUnitsValues.Millimeter, StandardLengthUnitsValues.Inche, StandardLengthUnitsValues.Point, StandardLengthUnitsValues.Pica, StandardLengthUnitsValues.Em, StandardLengthUnitsValues.Ex];
export declare enum StandardPerLengthUnitsValues {
    /** undefined. Serialized value: `1/m` */
    PerMeter = "1/m",
    /** undefined. Serialized value: `1/cm` */
    PerCentimeter = "1/cm",
    /** undefined. Serialized value: `1/mm` */
    PerMillimeter = "1/mm",
    /** undefined. Serialized value: `1/in` */
    PerInche = "1/in",
    /** undefined. Serialized value: `1/pt` */
    PerPoint = "1/pt",
    /** undefined. Serialized value: `1/pc` */
    PerPica = "1/pc",
    /** undefined. Serialized value: `1/em` */
    PerEm = "1/em",
    /** undefined. Serialized value: `1/ex` */
    PerEx = "1/ex"
}
export declare const StandardPerLengthUnitsValuesArray: readonly [StandardPerLengthUnitsValues.PerMeter, StandardPerLengthUnitsValues.PerCentimeter, StandardPerLengthUnitsValues.PerMillimeter, StandardPerLengthUnitsValues.PerInche, StandardPerLengthUnitsValues.PerPoint, StandardPerLengthUnitsValues.PerPica, StandardPerLengthUnitsValues.PerEm, StandardPerLengthUnitsValues.PerEx];
export declare enum StandardTimeUnitsValues {
    /** undefined. Serialized value: `s` */
    Second = "s",
    /** undefined. Serialized value: `ms` */
    Millisecond = "ms"
}
export declare const StandardTimeUnitsValuesArray: readonly [StandardTimeUnitsValues.Second, StandardTimeUnitsValues.Millisecond];
export declare enum StandardPerTimeUnitsValues {
    /** undefined. Serialized value: `1/s` */
    PerSecond = "1/s",
    /** undefined. Serialized value: `1/ms` */
    PerMillisecond = "1/ms"
}
export declare const StandardPerTimeUnitsValuesArray: readonly [StandardPerTimeUnitsValues.PerSecond, StandardPerTimeUnitsValues.PerMillisecond];
export declare enum StandardMassForceUnitsValues {
    /** undefined. Serialized value: `Kg` */
    Kilogram = "Kg",
    /** undefined. Serialized value: `g` */
    Gram = "g",
    /** undefined. Serialized value: `mg` */
    Milligram = "mg",
    /** undefined. Serialized value: `N` */
    Newton = "N",
    /** undefined. Serialized value: `lb` */
    Pond = "lb"
}
export declare const StandardMassForceUnitsValuesArray: readonly [StandardMassForceUnitsValues.Kilogram, StandardMassForceUnitsValues.Gram, StandardMassForceUnitsValues.Milligram, StandardMassForceUnitsValues.Newton, StandardMassForceUnitsValues.Pond];
export declare enum StandardPerMassForceUnitsValues {
    /** undefined. Serialized value: `1/Kg` */
    PerKilogram = "1/Kg",
    /** undefined. Serialized value: `1/g` */
    PerGram = "1/g",
    /** undefined. Serialized value: `1/mg` */
    PerMilligram = "1/mg",
    /** undefined. Serialized value: `1/N` */
    PerNewton = "1/N",
    /** undefined. Serialized value: `1/lb` */
    PerPond = "1/lb"
}
export declare const StandardPerMassForceUnitsValuesArray: readonly [StandardPerMassForceUnitsValues.PerKilogram, StandardPerMassForceUnitsValues.PerGram, StandardPerMassForceUnitsValues.PerMilligram, StandardPerMassForceUnitsValues.PerNewton, StandardPerMassForceUnitsValues.PerPond];
export declare enum StandardAngleUnitsValues {
    /** undefined. Serialized value: `deg` */
    Degree = "deg",
    /** undefined. Serialized value: `rad` */
    Radian = "rad"
}
export declare const StandardAngleUnitsValuesArray: readonly [StandardAngleUnitsValues.Degree, StandardAngleUnitsValues.Radian];
export declare enum StandardPerAngleUnitsValues {
    /** undefined. Serialized value: `1/deg` */
    PerDegree = "1/deg",
    /** undefined. Serialized value: `1/rad` */
    PerRadian = "1/rad"
}
export declare const StandardPerAngleUnitsValuesArray: readonly [StandardPerAngleUnitsValues.PerDegree, StandardPerAngleUnitsValues.PerRadian];
export declare enum StandardOtherUnitsValues {
    /** undefined. Serialized value: `%` */
    Percentage = "%",
    /** undefined. Serialized value: `dev` */
    DeviceResolution = "dev",
    /** undefined. Serialized value: `none` */
    None = "none"
}
export declare const StandardOtherUnitsValuesArray: readonly [StandardOtherUnitsValues.Percentage, StandardOtherUnitsValues.DeviceResolution, StandardOtherUnitsValues.None];
export declare enum StandardPerOtherUnitsValues {
    /** undefined. Serialized value: `1/%` */
    PerPercentage = "1/%",
    /** undefined. Serialized value: `1/dev` */
    PerDeviceResolution = "1/dev"
}
export declare const StandardPerOtherUnitsValuesArray: readonly [StandardPerOtherUnitsValues.PerPercentage, StandardPerOtherUnitsValues.PerDeviceResolution];
export declare enum TraceTypeValues {
    /** undefined. Serialized value: `penDown` */
    PenDown = "penDown",
    /** undefined. Serialized value: `penUp` */
    PenUp = "penUp",
    /** undefined. Serialized value: `indeterminate` */
    Indeterminate = "indeterminate"
}
export declare const TraceTypeValuesArray: readonly [TraceTypeValues.PenDown, TraceTypeValues.PenUp, TraceTypeValues.Indeterminate];
export declare enum TraceContinuationValues {
    /** undefined. Serialized value: `begin` */
    Begin = "begin",
    /** undefined. Serialized value: `end` */
    End = "end",
    /** undefined. Serialized value: `middle` */
    Middle = "middle"
}
export declare const TraceContinuationValuesArray: readonly [TraceContinuationValues.Begin, TraceContinuationValues.End, TraceContinuationValues.Middle];
export declare enum RasterOperationValues {
    /** undefined. Serialized value: `black` */
    Black = "black",
    /** undefined. Serialized value: `notMergePen` */
    NotMergePen = "notMergePen",
    /** undefined. Serialized value: `maskNotPen` */
    MaskNotPen = "maskNotPen",
    /** undefined. Serialized value: `notCopyPen` */
    NotCopyPen = "notCopyPen",
    /** undefined. Serialized value: `maskPenNot` */
    MaskPenNot = "maskPenNot",
    /** undefined. Serialized value: `not` */
    Not = "not",
    /** undefined. Serialized value: `xOrPen` */
    XOrPen = "xOrPen",
    /** undefined. Serialized value: `notMaskPen` */
    NotMaskPen = "notMaskPen",
    /** undefined. Serialized value: `maskPen` */
    MaskPen = "maskPen",
    /** undefined. Serialized value: `notXOrPen` */
    NotXOrPen = "notXOrPen",
    /** undefined. Serialized value: `noOperation` */
    NoOperation = "noOperation",
    /** undefined. Serialized value: `mergeNotPen` */
    MergeNotPen = "mergeNotPen",
    /** undefined. Serialized value: `copyPen` */
    CopyPen = "copyPen",
    /** undefined. Serialized value: `mergePenNot` */
    MergePenNot = "mergePenNot",
    /** undefined. Serialized value: `mergePen` */
    MergePen = "mergePen",
    /** undefined. Serialized value: `white` */
    White = "white"
}
export declare const RasterOperationValuesArray: readonly [RasterOperationValues.Black, RasterOperationValues.NotMergePen, RasterOperationValues.MaskNotPen, RasterOperationValues.NotCopyPen, RasterOperationValues.MaskPenNot, RasterOperationValues.Not, RasterOperationValues.XOrPen, RasterOperationValues.NotMaskPen, RasterOperationValues.MaskPen, RasterOperationValues.NotXOrPen, RasterOperationValues.NoOperation, RasterOperationValues.MergeNotPen, RasterOperationValues.CopyPen, RasterOperationValues.MergePenNot, RasterOperationValues.MergePen, RasterOperationValues.White];
export declare enum PenTipShapeValues {
    /** undefined. Serialized value: `ellipse` */
    Ellipse = "ellipse",
    /** undefined. Serialized value: `rectangle` */
    Rectangle = "rectangle",
    /** undefined. Serialized value: `drop` */
    Drop = "drop"
}
export declare const PenTipShapeValuesArray: readonly [PenTipShapeValues.Ellipse, PenTipShapeValues.Rectangle, PenTipShapeValues.Drop];
export declare enum MappingTypeValues {
    /** undefined. Serialized value: `identity` */
    Identity = "identity",
    /** undefined. Serialized value: `lookup` */
    Lookup = "lookup",
    /** undefined. Serialized value: `affine` */
    Affine = "affine",
    /** undefined. Serialized value: `mathml` */
    MathML = "mathml",
    /** undefined. Serialized value: `product` */
    Product = "product",
    /** undefined. Serialized value: `unknown` */
    Unknown = "unknown"
}
export declare const MappingTypeValuesArray: readonly [MappingTypeValues.Identity, MappingTypeValues.Lookup, MappingTypeValues.Affine, MappingTypeValues.MathML, MappingTypeValues.Product, MappingTypeValues.Unknown];
export declare enum TableApplyValues {
    /** undefined. Serialized value: `absolute` */
    Absolute = "absolute",
    /** undefined. Serialized value: `relative` */
    Relative = "relative"
}
export declare const TableApplyValuesArray: readonly [TableApplyValues.Absolute, TableApplyValues.Relative];
export declare enum TableInterpolationValues {
    /** undefined. Serialized value: `floor` */
    Floor = "floor",
    /** undefined. Serialized value: `middle` */
    Middle = "middle",
    /** undefined. Serialized value: `ceiling` */
    Ceiling = "ceiling",
    /** undefined. Serialized value: `linear` */
    Linear = "linear",
    /** undefined. Serialized value: `cubic` */
    Cubic = "cubic"
}
export declare const TableInterpolationValuesArray: readonly [TableInterpolationValues.Floor, TableInterpolationValues.Middle, TableInterpolationValues.Ceiling, TableInterpolationValues.Linear, TableInterpolationValues.Cubic];
/** Defines the Definitions Class. Serialized as `inkml:definitions` */
export declare class Definitions extends OxmlCompositeElement<Brush | Canvas | CanvasTransform | Context | InkSource | Mapping | Timestamp | Trace | TraceFormat | TraceGroup | TraceView> {
    static _Q: string;
}
/** Defines the Context Class. Serialized as `inkml:context` */
export declare class Context extends OxmlCompositeElement<Canvas | CanvasTransform | TraceFormat | InkSource | Brush | Timestamp> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** contextRef. Serialized as `:contextRef` */
    get contextRef(): StringValue | undefined;
    set contextRef(v: StringValue | undefined);
    /** canvasRef. Serialized as `:canvasRef` */
    get canvasRef(): StringValue | undefined;
    set canvasRef(v: StringValue | undefined);
    /** canvasTransformRef. Serialized as `:canvasTransformRef` */
    get canvasTransformRef(): StringValue | undefined;
    set canvasTransformRef(v: StringValue | undefined);
    /** traceFormatRef. Serialized as `:traceFormatRef` */
    get traceFromatRef(): StringValue | undefined;
    set traceFromatRef(v: StringValue | undefined);
    /** inkSourceRef. Serialized as `:inkSourceRef` */
    get inkSourceRef(): StringValue | undefined;
    set inkSourceRef(v: StringValue | undefined);
    /** brushRef. Serialized as `:brushRef` */
    get brushRef(): StringValue | undefined;
    set brushRef(v: StringValue | undefined);
    /** timestampRef. Serialized as `:timestampRef` */
    get timestampRef(): StringValue | undefined;
    set timestampRef(v: StringValue | undefined);
    /** Returns Canvas. */
    get canvas(): Canvas | undefined;
    /** Returns CanvasTransform. */
    get canvasTransform(): CanvasTransform | undefined;
    /** Returns TraceFormat. */
    get traceFormat(): TraceFormat | undefined;
    /** Returns InkSource. */
    get inkSource(): InkSource | undefined;
    /** Returns Brush. */
    get brush(): Brush | undefined;
    /** Returns Timestamp. */
    get timestamp(): Timestamp | undefined;
}
/** Defines the TraceView Class. Serialized as `inkml:traceView` */
export declare class TraceView extends OxmlCompositeElement<Annotation | AnnotationXml | TraceView> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** contextRef. Serialized as `:contextRef` */
    get contextRef(): StringValue | undefined;
    set contextRef(v: StringValue | undefined);
    /** traceDataRef. Serialized as `:traceDataRef` */
    get traceDataRef(): StringValue | undefined;
    set traceDataRef(v: StringValue | undefined);
    /** from. Serialized as `:from` */
    get from(): StringValue | undefined;
    set from(v: StringValue | undefined);
    /** to. Serialized as `:to` */
    get to(): StringValue | undefined;
    set to(v: StringValue | undefined);
}
/** Defines the TraceGroup Class. Serialized as `inkml:traceGroup` */
export declare class TraceGroup extends OxmlCompositeElement<Annotation | AnnotationXml | Trace | TraceGroup> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** contextRef. Serialized as `:contextRef` */
    get contextRef(): StringValue | undefined;
    set contextRef(v: StringValue | undefined);
    /** brushRef. Serialized as `:brushRef` */
    get brushRef(): StringValue | undefined;
    set brushRef(v: StringValue | undefined);
}
/** Defines the Trace Class. Serialized as `inkml:trace` */
export declare class Trace extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): TraceTypeValues | undefined;
    set type(v: TraceTypeValues | undefined);
    /** continuation. Serialized as `:continuation` */
    get continuation(): TraceContinuationValues | undefined;
    set continuation(v: TraceContinuationValues | undefined);
    /** priorRef. Serialized as `:priorRef` */
    get priorRef(): StringValue | undefined;
    set priorRef(v: StringValue | undefined);
    /** contextRef. Serialized as `:contextRef` */
    get contextRef(): StringValue | undefined;
    set contextRef(v: StringValue | undefined);
    /** brushRef. Serialized as `:brushRef` */
    get brushRef(): StringValue | undefined;
    set brushRef(v: StringValue | undefined);
    /** duration. Serialized as `:duration` */
    get duration(): DecimalValue | undefined;
    set duration(v: DecimalValue | undefined);
    /** timeOffset. Serialized as `:timeOffset` */
    get timeOffset(): DecimalValue | undefined;
    set timeOffset(v: DecimalValue | undefined);
}
/** Defines the Timestamp Class. Serialized as `inkml:timestamp` */
export declare class Timestamp extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** time. Serialized as `:time` */
    get time(): DecimalValue | undefined;
    set time(v: DecimalValue | undefined);
    /** timestampRef. Serialized as `:timestampRef` */
    get timestampRef(): StringValue | undefined;
    set timestampRef(v: StringValue | undefined);
    /** timeString. Serialized as `:timeString` */
    get timeString(): DateTimeValue | undefined;
    set timeString(v: DateTimeValue | undefined);
    /** timeOffset. Serialized as `:timeOffset` */
    get timeOffset(): DecimalValue | undefined;
    set timeOffset(v: DecimalValue | undefined);
}
/** Defines the Brush Class. Serialized as `inkml:brush` */
export declare class Brush extends OxmlCompositeElement<Annotation | AnnotationXml | BrushProperty> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** brushRef. Serialized as `:brushRef` */
    get brushRef(): StringValue | undefined;
    set brushRef(v: StringValue | undefined);
}
/** Defines the InkSource Class. Serialized as `inkml:inkSource` */
export declare class InkSource extends OxmlCompositeElement<TraceFormat | SampleRate | Latency | ActiveArea | SourceProperty | ChannelProperties> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** manufacturer. Serialized as `:manufacturer` */
    get manufacturer(): StringValue | undefined;
    set manufacturer(v: StringValue | undefined);
    /** model. Serialized as `:model` */
    get model(): StringValue | undefined;
    set model(v: StringValue | undefined);
    /** serialNo. Serialized as `:serialNo` */
    get serialNo(): StringValue | undefined;
    set serialNo(v: StringValue | undefined);
    /** specificationRef. Serialized as `:specificationRef` */
    get specificationRef(): StringValue | undefined;
    set specificationRef(v: StringValue | undefined);
    /** description. Serialized as `:description` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Returns TraceFormat. */
    get traceFormat(): TraceFormat | undefined;
    /** Returns SampleRate. */
    get sampleRate(): SampleRate | undefined;
    /** Returns Latency. */
    get latency(): Latency | undefined;
    /** Returns ActiveArea. */
    get activeArea(): ActiveArea | undefined;
}
/** Defines the CanvasTransform Class. Serialized as `inkml:canvasTransform` */
export declare class CanvasTransform extends OxmlCompositeElement<Mapping> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** invertible. Serialized as `:invertible` */
    get invertible(): BooleanValue | undefined;
    set invertible(v: BooleanValue | undefined);
}
/** Defines the Canvas Class. Serialized as `inkml:canvas` */
export declare class Canvas extends OxmlCompositeElement<TraceFormat> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** traceFormatRef. Serialized as `:traceFormatRef` */
    get traceFormatRef(): StringValue | undefined;
    set traceFormatRef(v: StringValue | undefined);
    /** Returns TraceFormat. */
    get traceFormat(): TraceFormat | undefined;
}
/** Defines the BrushProperty Class. Serialized as `inkml:brushProperty` */
export declare class BrushProperty extends OxmlCompositeElement<Annotation | AnnotationXml> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** value. Serialized as `:value` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
    /** units. Serialized as `:units` */
    get units(): StringValue | undefined;
    set units(v: StringValue | undefined);
}
/** Defines the AnnotationXml Class. Serialized as `inkml:annotationXML` */
export declare class AnnotationXml extends OxmlCompositeElement<EmmaEmma> {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** encoding. Serialized as `:encoding` */
    get encoding(): StringValue | undefined;
    set encoding(v: StringValue | undefined);
    /** href. Serialized as `:href` */
    get href(): StringValue | undefined;
    set href(v: StringValue | undefined);
    /** Returns EmmaEmma. */
    get emma(): EmmaEmma | undefined;
}
/** Defines the Annotation Class. Serialized as `inkml:annotation` */
export declare class Annotation extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** encoding. Serialized as `:encoding` */
    get encoding(): StringValue | undefined;
    set encoding(v: StringValue | undefined);
}
/** Defines the ChannelProperties Class. Serialized as `inkml:channelProperties` */
export declare class ChannelProperties extends OxmlCompositeElement<ChannelProperty> {
    static _Q: string;
}
/** Defines the SourceProperty Class. Serialized as `inkml:srcProperty` */
export declare class SourceProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** value. Serialized as `:value` */
    get value(): DecimalValue | undefined;
    set value(v: DecimalValue | undefined);
    /** units. Serialized as `:units` */
    get units(): StringValue | undefined;
    set units(v: StringValue | undefined);
}
/** Defines the ActiveArea Class. Serialized as `inkml:activeArea` */
export declare class ActiveArea extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** size. Serialized as `:size` */
    get size(): StringValue | undefined;
    set size(v: StringValue | undefined);
    /** height. Serialized as `:height` */
    get height(): DecimalValue | undefined;
    set height(v: DecimalValue | undefined);
    /** width. Serialized as `:width` */
    get width(): DecimalValue | undefined;
    set width(v: DecimalValue | undefined);
    /** units. Serialized as `:units` */
    get units(): StringValue | undefined;
    set units(v: StringValue | undefined);
}
/** Defines the Latency Class. Serialized as `inkml:latency` */
export declare class Latency extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** value. Serialized as `:value` */
    get value(): DecimalValue | undefined;
    set value(v: DecimalValue | undefined);
}
/** Defines the SampleRate Class. Serialized as `inkml:sampleRate` */
export declare class SampleRate extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** uniform. Serialized as `:uniform` */
    get uniform(): BooleanValue | undefined;
    set uniform(v: BooleanValue | undefined);
    /** value. Serialized as `:value` */
    get value(): DecimalValue | undefined;
    set value(v: DecimalValue | undefined);
}
/** Defines the TraceFormat Class. Serialized as `inkml:traceFormat` */
export declare class TraceFormat extends OxmlCompositeElement<Channel | IntermittentChannels> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the ChannelProperty Class. Serialized as `inkml:channelProperty` */
export declare class ChannelProperty extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** channel. Serialized as `:channel` */
    get channel(): StringValue | undefined;
    set channel(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** value. Serialized as `:value` */
    get value(): DecimalValue | undefined;
    set value(v: DecimalValue | undefined);
    /** units. Serialized as `:units` */
    get units(): StringValue | undefined;
    set units(v: StringValue | undefined);
}
/** Defines the IntermittentChannels Class. Serialized as `inkml:intermittentChannels` */
export declare class IntermittentChannels extends OxmlCompositeElement<Channel> {
    static _Q: string;
}
/** Defines the Channel Class. Serialized as `inkml:channel` */
export declare class Channel extends OxmlCompositeElement<Mapping> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): ChannelDataTypeValues | undefined;
    set type(v: ChannelDataTypeValues | undefined);
    /** default. Serialized as `:default` */
    get default(): StringValue | undefined;
    set default(v: StringValue | undefined);
    /** min. Serialized as `:min` */
    get min(): DecimalValue | undefined;
    set min(v: DecimalValue | undefined);
    /** max. Serialized as `:max` */
    get max(): DecimalValue | undefined;
    set max(v: DecimalValue | undefined);
    /** orientation. Serialized as `:orientation` */
    get orientation(): ChannelValueOrientationValues | undefined;
    set orientation(v: ChannelValueOrientationValues | undefined);
    /** respectTo. Serialized as `:respectTo` */
    get respectTo(): StringValue | undefined;
    set respectTo(v: StringValue | undefined);
    /** units. Serialized as `:units` */
    get units(): StringValue | undefined;
    set units(v: StringValue | undefined);
}
/** Defines the Mapping Class. Serialized as `inkml:mapping` */
export declare class Mapping extends OxmlCompositeElement<Bind | Table | Matrix | Mapping> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): MappingTypeValues | undefined;
    set type(v: MappingTypeValues | undefined);
    /** mappingRef. Serialized as `:mappingRef` */
    get mappingRef(): StringValue | undefined;
    set mappingRef(v: StringValue | undefined);
}
/** Defines the Matrix Class. Serialized as `inkml:matrix` */
export declare class Matrix extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the Table Class. Serialized as `inkml:table` */
export declare class Table extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `xml:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** apply. Serialized as `:apply` */
    get apply(): TableApplyValues | undefined;
    set apply(v: TableApplyValues | undefined);
    /** interpolation. Serialized as `:interpolation` */
    get interpolation(): TableInterpolationValues | undefined;
    set interpolation(v: TableInterpolationValues | undefined);
}
/** Defines the Bind Class. Serialized as `inkml:bind` */
export declare class Bind extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** source. Serialized as `:source` */
    get source(): StringValue | undefined;
    set source(v: StringValue | undefined);
    /** target. Serialized as `:target` */
    get target(): StringValue | undefined;
    set target(v: StringValue | undefined);
    /** column. Serialized as `:column` */
    get column(): StringValue | undefined;
    set column(v: StringValue | undefined);
    /** variable. Serialized as `:variable` */
    get variable(): StringValue | undefined;
    set variable(v: StringValue | undefined);
}
/** Defines the Ink Class. Serialized as `inkml:ink` */
export declare class Ink extends OxmlPartRootElement<Annotation | AnnotationXml | Definitions | Context | Trace | TraceGroup | TraceView> {
    static _Q: string;
    static _A: string[];
    /** documentID. Serialized as `:documentID` */
    get documentId(): StringValue | undefined;
    set documentId(v: StringValue | undefined);
}
export declare function initInkMLNamespace(): {
    prefix: string;
    xmlns: string;
};
