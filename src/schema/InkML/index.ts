import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { DecimalValue } from '../../framework/types/DecimalValue';
import { DateTimeValue } from '../../framework/types/DateTimeValue';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { Emma as EmmaEmma } from '../EMMA';


export enum ChannelDataTypeValues {
    /** undefined. Serialized value: `integer` */
    Integer = 'integer',
    /** undefined. Serialized value: `decimal` */
    Decimal = 'decimal',
    /** undefined. Serialized value: `boolean` */
    Boolean = 'boolean',
}

export const ChannelDataTypeValuesArray = [
    ChannelDataTypeValues.Integer,
    ChannelDataTypeValues.Decimal,
    ChannelDataTypeValues.Boolean,
] as const;

export enum ChannelValueOrientationValues {
    /** undefined. Serialized value: `+ve` */
    PlusVe = '+ve',
    /** undefined. Serialized value: `-ve` */
    MinusVe = '-ve',
}

export const ChannelValueOrientationValuesArray = [
    ChannelValueOrientationValues.PlusVe,
    ChannelValueOrientationValues.MinusVe,
] as const;

export enum StandardChannelPropertyNameValues {
    /** undefined. Serialized value: `threshold` */
    Threshold = 'threshold',
    /** undefined. Serialized value: `resolution` */
    Resolution = 'resolution',
    /** undefined. Serialized value: `quantization` */
    Quantization = 'quantization',
    /** undefined. Serialized value: `noise` */
    Noise = 'noise',
    /** undefined. Serialized value: `accuracy` */
    Accuracy = 'accuracy',
    /** undefined. Serialized value: `crossCoupling` */
    CrossCoupling = 'crossCoupling',
    /** undefined. Serialized value: `skew` */
    Skew = 'skew',
    /** undefined. Serialized value: `minBandwidth` */
    MinBandwidth = 'minBandwidth',
    /** undefined. Serialized value: `peakRate` */
    PeakRate = 'peakRate',
    /** undefined. Serialized value: `distortion` */
    Distortion = 'distortion',
}

export const StandardChannelPropertyNameValuesArray = [
    StandardChannelPropertyNameValues.Threshold,
    StandardChannelPropertyNameValues.Resolution,
    StandardChannelPropertyNameValues.Quantization,
    StandardChannelPropertyNameValues.Noise,
    StandardChannelPropertyNameValues.Accuracy,
    StandardChannelPropertyNameValues.CrossCoupling,
    StandardChannelPropertyNameValues.Skew,
    StandardChannelPropertyNameValues.MinBandwidth,
    StandardChannelPropertyNameValues.PeakRate,
    StandardChannelPropertyNameValues.Distortion,
] as const;

export enum StandardBrushPropertyNameValues {
    /** undefined. Serialized value: `width` */
    Width = 'width',
    /** undefined. Serialized value: `height` */
    Height = 'height',
    /** undefined. Serialized value: `color` */
    Color = 'color',
    /** undefined. Serialized value: `transparency` */
    Transparency = 'transparency',
    /** undefined. Serialized value: `tip` */
    Tip = 'tip',
    /** undefined. Serialized value: `rasterOp` */
    RasterOp = 'rasterOp',
    /** undefined. Serialized value: `antiAliased` */
    AntiAliased = 'antiAliased',
    /** undefined. Serialized value: `fitToCurve` */
    FitToCurve = 'fitToCurve',
    /** undefined. Serialized value: `ignorePressure` */
    IgnorePressure = 'ignorePressure',
}

export const StandardBrushPropertyNameValuesArray = [
    StandardBrushPropertyNameValues.Width,
    StandardBrushPropertyNameValues.Height,
    StandardBrushPropertyNameValues.Color,
    StandardBrushPropertyNameValues.Transparency,
    StandardBrushPropertyNameValues.Tip,
    StandardBrushPropertyNameValues.RasterOp,
    StandardBrushPropertyNameValues.AntiAliased,
    StandardBrushPropertyNameValues.FitToCurve,
    StandardBrushPropertyNameValues.IgnorePressure,
] as const;

export enum StandardChannelNameValues {
    /** undefined. Serialized value: `X` */
    XCoordinate = 'X',
    /** undefined. Serialized value: `Y` */
    YCoordinate = 'Y',
    /** undefined. Serialized value: `Z` */
    ZCoordinate = 'Z',
    /** undefined. Serialized value: `F` */
    PenTipForce = 'F',
    /** undefined. Serialized value: `TP` */
    TangentPressure = 'TP',
    /** undefined. Serialized value: `BP` */
    ButtonPressure = 'BP',
    /** undefined. Serialized value: `S` */
    TipSwitchState = 'S',
    /** undefined. Serialized value: `B1` */
    SideButton1State = 'B1',
    /** undefined. Serialized value: `B2` */
    SideButton2State = 'B2',
    /** undefined. Serialized value: `B3` */
    SideButton3State = 'B3',
    /** undefined. Serialized value: `B4` */
    SideButton4State = 'B4',
    /** undefined. Serialized value: `E` */
    PenInverted = 'E',
    /** undefined. Serialized value: `OTx` */
    TiltAlongXAxis = 'OTx',
    /** undefined. Serialized value: `OTy` */
    TiltAlongYAxis = 'OTy',
    /** undefined. Serialized value: `OA` */
    PenAzimuthAngle = 'OA',
    /** undefined. Serialized value: `OE` */
    PenElevationAngle = 'OE',
    /** undefined. Serialized value: `OR` */
    PexAxisRotation = 'OR',
    /** undefined. Serialized value: `RP` */
    PitchRotation = 'RP',
    /** undefined. Serialized value: `RR` */
    RollRotation = 'RR',
    /** undefined. Serialized value: `RY` */
    YawRotation = 'RY',
    /** undefined. Serialized value: `C` */
    ColorValue = 'C',
    /** undefined. Serialized value: `CR` */
    RedColorValue = 'CR',
    /** undefined. Serialized value: `CG` */
    GreenColorValue = 'CG',
    /** undefined. Serialized value: `CB` */
    BlueColorValue = 'CB',
    /** undefined. Serialized value: `CC` */
    CyanColorValue = 'CC',
    /** undefined. Serialized value: `CM` */
    MegentaColorValue = 'CM',
    /** undefined. Serialized value: `CY` */
    YellowColorValue = 'CY',
    /** undefined. Serialized value: `CK` */
    BlackColorValue = 'CK',
    /** undefined. Serialized value: `W` */
    StrokesWidth = 'W',
    /** undefined. Serialized value: `T` */
    Time = 'T',
    /** undefined. Serialized value: `SN` */
    SerialNumber = 'SN',
    /** undefined. Serialized value: `TW` */
    TouchWidth = 'TW',
    /** undefined. Serialized value: `TH` */
    TouchHeight = 'TH',
    /** undefined. Serialized value: `TC` */
    FingerTouch = 'TC',
}

export const StandardChannelNameValuesArray = [
    StandardChannelNameValues.XCoordinate,
    StandardChannelNameValues.YCoordinate,
    StandardChannelNameValues.ZCoordinate,
    StandardChannelNameValues.PenTipForce,
    StandardChannelNameValues.TangentPressure,
    StandardChannelNameValues.ButtonPressure,
    StandardChannelNameValues.TipSwitchState,
    StandardChannelNameValues.SideButton1State,
    StandardChannelNameValues.SideButton2State,
    StandardChannelNameValues.SideButton3State,
    StandardChannelNameValues.SideButton4State,
    StandardChannelNameValues.PenInverted,
    StandardChannelNameValues.TiltAlongXAxis,
    StandardChannelNameValues.TiltAlongYAxis,
    StandardChannelNameValues.PenAzimuthAngle,
    StandardChannelNameValues.PenElevationAngle,
    StandardChannelNameValues.PexAxisRotation,
    StandardChannelNameValues.PitchRotation,
    StandardChannelNameValues.RollRotation,
    StandardChannelNameValues.YawRotation,
    StandardChannelNameValues.ColorValue,
    StandardChannelNameValues.RedColorValue,
    StandardChannelNameValues.GreenColorValue,
    StandardChannelNameValues.BlueColorValue,
    StandardChannelNameValues.CyanColorValue,
    StandardChannelNameValues.MegentaColorValue,
    StandardChannelNameValues.YellowColorValue,
    StandardChannelNameValues.BlackColorValue,
    StandardChannelNameValues.StrokesWidth,
    StandardChannelNameValues.Time,
    StandardChannelNameValues.SerialNumber,
    StandardChannelNameValues.TouchWidth,
    StandardChannelNameValues.TouchHeight,
    StandardChannelNameValues.FingerTouch,
] as const;

export enum StandardLengthUnitsValues {
    /** undefined. Serialized value: `m` */
    Meter = 'm',
    /** undefined. Serialized value: `cm` */
    Centimeter = 'cm',
    /** undefined. Serialized value: `mm` */
    Millimeter = 'mm',
    /** undefined. Serialized value: `in` */
    Inche = 'in',
    /** undefined. Serialized value: `pt` */
    Point = 'pt',
    /** undefined. Serialized value: `pc` */
    Pica = 'pc',
    /** undefined. Serialized value: `em` */
    Em = 'em',
    /** undefined. Serialized value: `ex` */
    Ex = 'ex',
}

export const StandardLengthUnitsValuesArray = [
    StandardLengthUnitsValues.Meter,
    StandardLengthUnitsValues.Centimeter,
    StandardLengthUnitsValues.Millimeter,
    StandardLengthUnitsValues.Inche,
    StandardLengthUnitsValues.Point,
    StandardLengthUnitsValues.Pica,
    StandardLengthUnitsValues.Em,
    StandardLengthUnitsValues.Ex,
] as const;

export enum StandardPerLengthUnitsValues {
    /** undefined. Serialized value: `1/m` */
    PerMeter = '1/m',
    /** undefined. Serialized value: `1/cm` */
    PerCentimeter = '1/cm',
    /** undefined. Serialized value: `1/mm` */
    PerMillimeter = '1/mm',
    /** undefined. Serialized value: `1/in` */
    PerInche = '1/in',
    /** undefined. Serialized value: `1/pt` */
    PerPoint = '1/pt',
    /** undefined. Serialized value: `1/pc` */
    PerPica = '1/pc',
    /** undefined. Serialized value: `1/em` */
    PerEm = '1/em',
    /** undefined. Serialized value: `1/ex` */
    PerEx = '1/ex',
}

export const StandardPerLengthUnitsValuesArray = [
    StandardPerLengthUnitsValues.PerMeter,
    StandardPerLengthUnitsValues.PerCentimeter,
    StandardPerLengthUnitsValues.PerMillimeter,
    StandardPerLengthUnitsValues.PerInche,
    StandardPerLengthUnitsValues.PerPoint,
    StandardPerLengthUnitsValues.PerPica,
    StandardPerLengthUnitsValues.PerEm,
    StandardPerLengthUnitsValues.PerEx,
] as const;

export enum StandardTimeUnitsValues {
    /** undefined. Serialized value: `s` */
    Second = 's',
    /** undefined. Serialized value: `ms` */
    Millisecond = 'ms',
}

export const StandardTimeUnitsValuesArray = [
    StandardTimeUnitsValues.Second,
    StandardTimeUnitsValues.Millisecond,
] as const;

export enum StandardPerTimeUnitsValues {
    /** undefined. Serialized value: `1/s` */
    PerSecond = '1/s',
    /** undefined. Serialized value: `1/ms` */
    PerMillisecond = '1/ms',
}

export const StandardPerTimeUnitsValuesArray = [
    StandardPerTimeUnitsValues.PerSecond,
    StandardPerTimeUnitsValues.PerMillisecond,
] as const;

export enum StandardMassForceUnitsValues {
    /** undefined. Serialized value: `Kg` */
    Kilogram = 'Kg',
    /** undefined. Serialized value: `g` */
    Gram = 'g',
    /** undefined. Serialized value: `mg` */
    Milligram = 'mg',
    /** undefined. Serialized value: `N` */
    Newton = 'N',
    /** undefined. Serialized value: `lb` */
    Pond = 'lb',
}

export const StandardMassForceUnitsValuesArray = [
    StandardMassForceUnitsValues.Kilogram,
    StandardMassForceUnitsValues.Gram,
    StandardMassForceUnitsValues.Milligram,
    StandardMassForceUnitsValues.Newton,
    StandardMassForceUnitsValues.Pond,
] as const;

export enum StandardPerMassForceUnitsValues {
    /** undefined. Serialized value: `1/Kg` */
    PerKilogram = '1/Kg',
    /** undefined. Serialized value: `1/g` */
    PerGram = '1/g',
    /** undefined. Serialized value: `1/mg` */
    PerMilligram = '1/mg',
    /** undefined. Serialized value: `1/N` */
    PerNewton = '1/N',
    /** undefined. Serialized value: `1/lb` */
    PerPond = '1/lb',
}

export const StandardPerMassForceUnitsValuesArray = [
    StandardPerMassForceUnitsValues.PerKilogram,
    StandardPerMassForceUnitsValues.PerGram,
    StandardPerMassForceUnitsValues.PerMilligram,
    StandardPerMassForceUnitsValues.PerNewton,
    StandardPerMassForceUnitsValues.PerPond,
] as const;

export enum StandardAngleUnitsValues {
    /** undefined. Serialized value: `deg` */
    Degree = 'deg',
    /** undefined. Serialized value: `rad` */
    Radian = 'rad',
}

export const StandardAngleUnitsValuesArray = [
    StandardAngleUnitsValues.Degree,
    StandardAngleUnitsValues.Radian,
] as const;

export enum StandardPerAngleUnitsValues {
    /** undefined. Serialized value: `1/deg` */
    PerDegree = '1/deg',
    /** undefined. Serialized value: `1/rad` */
    PerRadian = '1/rad',
}

export const StandardPerAngleUnitsValuesArray = [
    StandardPerAngleUnitsValues.PerDegree,
    StandardPerAngleUnitsValues.PerRadian,
] as const;

export enum StandardOtherUnitsValues {
    /** undefined. Serialized value: `%` */
    Percentage = '%',
    /** undefined. Serialized value: `dev` */
    DeviceResolution = 'dev',
    /** undefined. Serialized value: `none` */
    None = 'none',
}

export const StandardOtherUnitsValuesArray = [
    StandardOtherUnitsValues.Percentage,
    StandardOtherUnitsValues.DeviceResolution,
    StandardOtherUnitsValues.None,
] as const;

export enum StandardPerOtherUnitsValues {
    /** undefined. Serialized value: `1/%` */
    PerPercentage = '1/%',
    /** undefined. Serialized value: `1/dev` */
    PerDeviceResolution = '1/dev',
}

export const StandardPerOtherUnitsValuesArray = [
    StandardPerOtherUnitsValues.PerPercentage,
    StandardPerOtherUnitsValues.PerDeviceResolution,
] as const;

export enum TraceTypeValues {
    /** undefined. Serialized value: `penDown` */
    PenDown = 'penDown',
    /** undefined. Serialized value: `penUp` */
    PenUp = 'penUp',
    /** undefined. Serialized value: `indeterminate` */
    Indeterminate = 'indeterminate',
}

export const TraceTypeValuesArray = [
    TraceTypeValues.PenDown,
    TraceTypeValues.PenUp,
    TraceTypeValues.Indeterminate,
] as const;

export enum TraceContinuationValues {
    /** undefined. Serialized value: `begin` */
    Begin = 'begin',
    /** undefined. Serialized value: `end` */
    End = 'end',
    /** undefined. Serialized value: `middle` */
    Middle = 'middle',
}

export const TraceContinuationValuesArray = [
    TraceContinuationValues.Begin,
    TraceContinuationValues.End,
    TraceContinuationValues.Middle,
] as const;

export enum RasterOperationValues {
    /** undefined. Serialized value: `black` */
    Black = 'black',
    /** undefined. Serialized value: `notMergePen` */
    NotMergePen = 'notMergePen',
    /** undefined. Serialized value: `maskNotPen` */
    MaskNotPen = 'maskNotPen',
    /** undefined. Serialized value: `notCopyPen` */
    NotCopyPen = 'notCopyPen',
    /** undefined. Serialized value: `maskPenNot` */
    MaskPenNot = 'maskPenNot',
    /** undefined. Serialized value: `not` */
    Not = 'not',
    /** undefined. Serialized value: `xOrPen` */
    XOrPen = 'xOrPen',
    /** undefined. Serialized value: `notMaskPen` */
    NotMaskPen = 'notMaskPen',
    /** undefined. Serialized value: `maskPen` */
    MaskPen = 'maskPen',
    /** undefined. Serialized value: `notXOrPen` */
    NotXOrPen = 'notXOrPen',
    /** undefined. Serialized value: `noOperation` */
    NoOperation = 'noOperation',
    /** undefined. Serialized value: `mergeNotPen` */
    MergeNotPen = 'mergeNotPen',
    /** undefined. Serialized value: `copyPen` */
    CopyPen = 'copyPen',
    /** undefined. Serialized value: `mergePenNot` */
    MergePenNot = 'mergePenNot',
    /** undefined. Serialized value: `mergePen` */
    MergePen = 'mergePen',
    /** undefined. Serialized value: `white` */
    White = 'white',
}

export const RasterOperationValuesArray = [
    RasterOperationValues.Black,
    RasterOperationValues.NotMergePen,
    RasterOperationValues.MaskNotPen,
    RasterOperationValues.NotCopyPen,
    RasterOperationValues.MaskPenNot,
    RasterOperationValues.Not,
    RasterOperationValues.XOrPen,
    RasterOperationValues.NotMaskPen,
    RasterOperationValues.MaskPen,
    RasterOperationValues.NotXOrPen,
    RasterOperationValues.NoOperation,
    RasterOperationValues.MergeNotPen,
    RasterOperationValues.CopyPen,
    RasterOperationValues.MergePenNot,
    RasterOperationValues.MergePen,
    RasterOperationValues.White,
] as const;

export enum PenTipShapeValues {
    /** undefined. Serialized value: `ellipse` */
    Ellipse = 'ellipse',
    /** undefined. Serialized value: `rectangle` */
    Rectangle = 'rectangle',
    /** undefined. Serialized value: `drop` */
    Drop = 'drop',
}

export const PenTipShapeValuesArray = [
    PenTipShapeValues.Ellipse,
    PenTipShapeValues.Rectangle,
    PenTipShapeValues.Drop,
] as const;

export enum MappingTypeValues {
    /** undefined. Serialized value: `identity` */
    Identity = 'identity',
    /** undefined. Serialized value: `lookup` */
    Lookup = 'lookup',
    /** undefined. Serialized value: `affine` */
    Affine = 'affine',
    /** undefined. Serialized value: `mathml` */
    MathML = 'mathml',
    /** undefined. Serialized value: `product` */
    Product = 'product',
    /** undefined. Serialized value: `unknown` */
    Unknown = 'unknown',
}

export const MappingTypeValuesArray = [
    MappingTypeValues.Identity,
    MappingTypeValues.Lookup,
    MappingTypeValues.Affine,
    MappingTypeValues.MathML,
    MappingTypeValues.Product,
    MappingTypeValues.Unknown,
] as const;

export enum TableApplyValues {
    /** undefined. Serialized value: `absolute` */
    Absolute = 'absolute',
    /** undefined. Serialized value: `relative` */
    Relative = 'relative',
}

export const TableApplyValuesArray = [
    TableApplyValues.Absolute,
    TableApplyValues.Relative,
] as const;

export enum TableInterpolationValues {
    /** undefined. Serialized value: `floor` */
    Floor = 'floor',
    /** undefined. Serialized value: `middle` */
    Middle = 'middle',
    /** undefined. Serialized value: `ceiling` */
    Ceiling = 'ceiling',
    /** undefined. Serialized value: `linear` */
    Linear = 'linear',
    /** undefined. Serialized value: `cubic` */
    Cubic = 'cubic',
}

export const TableInterpolationValuesArray = [
    TableInterpolationValues.Floor,
    TableInterpolationValues.Middle,
    TableInterpolationValues.Ceiling,
    TableInterpolationValues.Linear,
    TableInterpolationValues.Cubic,
] as const;

/** Defines the Definitions Class. Serialized as `inkml:definitions` */
export class Definitions extends OxmlCompositeElement<Brush | Canvas | CanvasTransform | Context | InkSource | Mapping | Timestamp | Trace | TraceFormat | TraceGroup | TraceView> {

    public static override _Q = 'inkml:definitions';

}
/** Defines the Context Class. Serialized as `inkml:context` */
export class Context extends OxmlCompositeElement<Canvas | CanvasTransform | TraceFormat | InkSource | Brush | Timestamp> {

    public static override _Q = 'inkml:context';
    public static override _A = ['xml:id',':contextRef',':canvasRef',':canvasTransformRef',':traceFormatRef',':inkSourceRef',':brushRef',':timestampRef',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** contextRef. Serialized as `:contextRef` */
    public get contextRef(): StringValue | undefined { return this._g(':contextRef'); }
    public set contextRef(v: StringValue | undefined) { this._s(':contextRef', v); }
    /** canvasRef. Serialized as `:canvasRef` */
    public get canvasRef(): StringValue | undefined { return this._g(':canvasRef'); }
    public set canvasRef(v: StringValue | undefined) { this._s(':canvasRef', v); }
    /** canvasTransformRef. Serialized as `:canvasTransformRef` */
    public get canvasTransformRef(): StringValue | undefined { return this._g(':canvasTransformRef'); }
    public set canvasTransformRef(v: StringValue | undefined) { this._s(':canvasTransformRef', v); }
    /** traceFormatRef. Serialized as `:traceFormatRef` */
    public get traceFromatRef(): StringValue | undefined { return this._g(':traceFormatRef'); }
    public set traceFromatRef(v: StringValue | undefined) { this._s(':traceFormatRef', v); }
    /** inkSourceRef. Serialized as `:inkSourceRef` */
    public get inkSourceRef(): StringValue | undefined { return this._g(':inkSourceRef'); }
    public set inkSourceRef(v: StringValue | undefined) { this._s(':inkSourceRef', v); }
    /** brushRef. Serialized as `:brushRef` */
    public get brushRef(): StringValue | undefined { return this._g(':brushRef'); }
    public set brushRef(v: StringValue | undefined) { this._s(':brushRef', v); }
    /** timestampRef. Serialized as `:timestampRef` */
    public get timestampRef(): StringValue | undefined { return this._g(':timestampRef'); }
    public set timestampRef(v: StringValue | undefined) { this._s(':timestampRef', v); }
    /** Returns Canvas. */
    public get canvas(): Canvas | undefined { return this._f(Canvas); }
    /** Returns CanvasTransform. */
    public get canvasTransform(): CanvasTransform | undefined { return this._f(CanvasTransform); }
    /** Returns TraceFormat. */
    public get traceFormat(): TraceFormat | undefined { return this._f(TraceFormat); }
    /** Returns InkSource. */
    public get inkSource(): InkSource | undefined { return this._f(InkSource); }
    /** Returns Brush. */
    public get brush(): Brush | undefined { return this._f(Brush); }
    /** Returns Timestamp. */
    public get timestamp(): Timestamp | undefined { return this._f(Timestamp); }

}
/** Defines the TraceView Class. Serialized as `inkml:traceView` */
export class TraceView extends OxmlCompositeElement<Annotation | AnnotationXml | TraceView> {

    public static override _Q = 'inkml:traceView';
    public static override _A = ['xml:id',':contextRef',':traceDataRef',':from',':to',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** contextRef. Serialized as `:contextRef` */
    public get contextRef(): StringValue | undefined { return this._g(':contextRef'); }
    public set contextRef(v: StringValue | undefined) { this._s(':contextRef', v); }
    /** traceDataRef. Serialized as `:traceDataRef` */
    public get traceDataRef(): StringValue | undefined { return this._g(':traceDataRef'); }
    public set traceDataRef(v: StringValue | undefined) { this._s(':traceDataRef', v); }
    /** from. Serialized as `:from` */
    public get from(): StringValue | undefined { return this._g(':from'); }
    public set from(v: StringValue | undefined) { this._s(':from', v); }
    /** to. Serialized as `:to` */
    public get to(): StringValue | undefined { return this._g(':to'); }
    public set to(v: StringValue | undefined) { this._s(':to', v); }

}
/** Defines the TraceGroup Class. Serialized as `inkml:traceGroup` */
export class TraceGroup extends OxmlCompositeElement<Annotation | AnnotationXml | Trace | TraceGroup> {

    public static override _Q = 'inkml:traceGroup';
    public static override _A = ['xml:id',':contextRef',':brushRef',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** contextRef. Serialized as `:contextRef` */
    public get contextRef(): StringValue | undefined { return this._g(':contextRef'); }
    public set contextRef(v: StringValue | undefined) { this._s(':contextRef', v); }
    /** brushRef. Serialized as `:brushRef` */
    public get brushRef(): StringValue | undefined { return this._g(':brushRef'); }
    public set brushRef(v: StringValue | undefined) { this._s(':brushRef', v); }

}
/** Defines the Trace Class. Serialized as `inkml:trace` */
export class Trace extends OxmlLeafTextElement {

    public static override _Q = 'inkml:trace';
    public static override _A = ['xml:id',':type',':continuation',':priorRef',':contextRef',':brushRef',':duration',':timeOffset',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** type. Serialized as `:type` */
    public get type(): TraceTypeValues | undefined { return this._g(':type'); }
    public set type(v: TraceTypeValues | undefined) { this._s(':type', v); }
    /** continuation. Serialized as `:continuation` */
    public get continuation(): TraceContinuationValues | undefined { return this._g(':continuation'); }
    public set continuation(v: TraceContinuationValues | undefined) { this._s(':continuation', v); }
    /** priorRef. Serialized as `:priorRef` */
    public get priorRef(): StringValue | undefined { return this._g(':priorRef'); }
    public set priorRef(v: StringValue | undefined) { this._s(':priorRef', v); }
    /** contextRef. Serialized as `:contextRef` */
    public get contextRef(): StringValue | undefined { return this._g(':contextRef'); }
    public set contextRef(v: StringValue | undefined) { this._s(':contextRef', v); }
    /** brushRef. Serialized as `:brushRef` */
    public get brushRef(): StringValue | undefined { return this._g(':brushRef'); }
    public set brushRef(v: StringValue | undefined) { this._s(':brushRef', v); }
    /** duration. Serialized as `:duration` */
    public get duration(): DecimalValue | undefined { return this._g(':duration'); }
    public set duration(v: DecimalValue | undefined) { this._s(':duration', v); }
    /** timeOffset. Serialized as `:timeOffset` */
    public get timeOffset(): DecimalValue | undefined { return this._g(':timeOffset'); }
    public set timeOffset(v: DecimalValue | undefined) { this._s(':timeOffset', v); }

}
/** Defines the Timestamp Class. Serialized as `inkml:timestamp` */
export class Timestamp extends OxmlLeafElement {

    public static override _Q = 'inkml:timestamp';
    public static override _A = ['xml:id',':time',':timestampRef',':timeString',':timeOffset',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** time. Serialized as `:time` */
    public get time(): DecimalValue | undefined { return this._g(':time'); }
    public set time(v: DecimalValue | undefined) { this._s(':time', v); }
    /** timestampRef. Serialized as `:timestampRef` */
    public get timestampRef(): StringValue | undefined { return this._g(':timestampRef'); }
    public set timestampRef(v: StringValue | undefined) { this._s(':timestampRef', v); }
    /** timeString. Serialized as `:timeString` */
    public get timeString(): DateTimeValue | undefined { return this._g(':timeString'); }
    public set timeString(v: DateTimeValue | undefined) { this._s(':timeString', v); }
    /** timeOffset. Serialized as `:timeOffset` */
    public get timeOffset(): DecimalValue | undefined { return this._g(':timeOffset'); }
    public set timeOffset(v: DecimalValue | undefined) { this._s(':timeOffset', v); }

}
/** Defines the Brush Class. Serialized as `inkml:brush` */
export class Brush extends OxmlCompositeElement<Annotation | AnnotationXml | BrushProperty> {

    public static override _Q = 'inkml:brush';
    public static override _A = ['xml:id',':brushRef',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** brushRef. Serialized as `:brushRef` */
    public get brushRef(): StringValue | undefined { return this._g(':brushRef'); }
    public set brushRef(v: StringValue | undefined) { this._s(':brushRef', v); }

}
/** Defines the InkSource Class. Serialized as `inkml:inkSource` */
export class InkSource extends OxmlCompositeElement<TraceFormat | SampleRate | Latency | ActiveArea | SourceProperty | ChannelProperties> {

    public static override _Q = 'inkml:inkSource';
    public static override _A = ['xml:id',':manufacturer',':model',':serialNo',':specificationRef',':description',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** manufacturer. Serialized as `:manufacturer` */
    public get manufacturer(): StringValue | undefined { return this._g(':manufacturer'); }
    public set manufacturer(v: StringValue | undefined) { this._s(':manufacturer', v); }
    /** model. Serialized as `:model` */
    public get model(): StringValue | undefined { return this._g(':model'); }
    public set model(v: StringValue | undefined) { this._s(':model', v); }
    /** serialNo. Serialized as `:serialNo` */
    public get serialNo(): StringValue | undefined { return this._g(':serialNo'); }
    public set serialNo(v: StringValue | undefined) { this._s(':serialNo', v); }
    /** specificationRef. Serialized as `:specificationRef` */
    public get specificationRef(): StringValue | undefined { return this._g(':specificationRef'); }
    public set specificationRef(v: StringValue | undefined) { this._s(':specificationRef', v); }
    /** description. Serialized as `:description` */
    public get description(): StringValue | undefined { return this._g(':description'); }
    public set description(v: StringValue | undefined) { this._s(':description', v); }
    /** Returns TraceFormat. */
    public get traceFormat(): TraceFormat | undefined { return this._f(TraceFormat); }
    /** Returns SampleRate. */
    public get sampleRate(): SampleRate | undefined { return this._f(SampleRate); }
    /** Returns Latency. */
    public get latency(): Latency | undefined { return this._f(Latency); }
    /** Returns ActiveArea. */
    public get activeArea(): ActiveArea | undefined { return this._f(ActiveArea); }

}
/** Defines the CanvasTransform Class. Serialized as `inkml:canvasTransform` */
export class CanvasTransform extends OxmlCompositeElement<Mapping> {

    public static override _Q = 'inkml:canvasTransform';
    public static override _A = ['xml:id',':invertible',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** invertible. Serialized as `:invertible` */
    public get invertible(): BooleanValue | undefined { return this._g(':invertible'); }
    public set invertible(v: BooleanValue | undefined) { this._s(':invertible', v); }

}
/** Defines the Canvas Class. Serialized as `inkml:canvas` */
export class Canvas extends OxmlCompositeElement<TraceFormat> {

    public static override _Q = 'inkml:canvas';
    public static override _A = ['xml:id',':traceFormatRef',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** traceFormatRef. Serialized as `:traceFormatRef` */
    public get traceFormatRef(): StringValue | undefined { return this._g(':traceFormatRef'); }
    public set traceFormatRef(v: StringValue | undefined) { this._s(':traceFormatRef', v); }
    /** Returns TraceFormat. */
    public get traceFormat(): TraceFormat | undefined { return this._f(TraceFormat); }

}
/** Defines the BrushProperty Class. Serialized as `inkml:brushProperty` */
export class BrushProperty extends OxmlCompositeElement<Annotation | AnnotationXml> {

    public static override _Q = 'inkml:brushProperty';
    public static override _A = [':name',':value',':units',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** value. Serialized as `:value` */
    public get value(): StringValue | undefined { return this._g(':value'); }
    public set value(v: StringValue | undefined) { this._s(':value', v); }
    /** units. Serialized as `:units` */
    public get units(): StringValue | undefined { return this._g(':units'); }
    public set units(v: StringValue | undefined) { this._s(':units', v); }

}
/** Defines the AnnotationXml Class. Serialized as `inkml:annotationXML` */
export class AnnotationXml extends OxmlCompositeElement<EmmaEmma> {

    public static override _Q = 'inkml:annotationXML';
    public static override _A = [':type',':encoding',':href',];
    /** type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** encoding. Serialized as `:encoding` */
    public get encoding(): StringValue | undefined { return this._g(':encoding'); }
    public set encoding(v: StringValue | undefined) { this._s(':encoding', v); }
    /** href. Serialized as `:href` */
    public get href(): StringValue | undefined { return this._g(':href'); }
    public set href(v: StringValue | undefined) { this._s(':href', v); }
    /** Returns EmmaEmma. */
    public get emma(): EmmaEmma | undefined { return this._f(EmmaEmma); }

}
/** Defines the Annotation Class. Serialized as `inkml:annotation` */
export class Annotation extends OxmlLeafTextElement {

    public static override _Q = 'inkml:annotation';
    public static override _A = [':type',':encoding',];
    /** type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** encoding. Serialized as `:encoding` */
    public get encoding(): StringValue | undefined { return this._g(':encoding'); }
    public set encoding(v: StringValue | undefined) { this._s(':encoding', v); }

}
/** Defines the ChannelProperties Class. Serialized as `inkml:channelProperties` */
export class ChannelProperties extends OxmlCompositeElement<ChannelProperty> {

    public static override _Q = 'inkml:channelProperties';

}
/** Defines the SourceProperty Class. Serialized as `inkml:srcProperty` */
export class SourceProperty extends OxmlLeafElement {

    public static override _Q = 'inkml:srcProperty';
    public static override _A = [':name',':value',':units',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** value. Serialized as `:value` */
    public get value(): DecimalValue | undefined { return this._g(':value'); }
    public set value(v: DecimalValue | undefined) { this._s(':value', v); }
    /** units. Serialized as `:units` */
    public get units(): StringValue | undefined { return this._g(':units'); }
    public set units(v: StringValue | undefined) { this._s(':units', v); }

}
/** Defines the ActiveArea Class. Serialized as `inkml:activeArea` */
export class ActiveArea extends OxmlLeafElement {

    public static override _Q = 'inkml:activeArea';
    public static override _A = [':size',':height',':width',':units',];
    /** size. Serialized as `:size` */
    public get size(): StringValue | undefined { return this._g(':size'); }
    public set size(v: StringValue | undefined) { this._s(':size', v); }
    /** height. Serialized as `:height` */
    public get height(): DecimalValue | undefined { return this._g(':height'); }
    public set height(v: DecimalValue | undefined) { this._s(':height', v); }
    /** width. Serialized as `:width` */
    public get width(): DecimalValue | undefined { return this._g(':width'); }
    public set width(v: DecimalValue | undefined) { this._s(':width', v); }
    /** units. Serialized as `:units` */
    public get units(): StringValue | undefined { return this._g(':units'); }
    public set units(v: StringValue | undefined) { this._s(':units', v); }

}
/** Defines the Latency Class. Serialized as `inkml:latency` */
export class Latency extends OxmlLeafElement {

    public static override _Q = 'inkml:latency';
    public static override _A = [':value',];
    /** value. Serialized as `:value` */
    public get value(): DecimalValue | undefined { return this._g(':value'); }
    public set value(v: DecimalValue | undefined) { this._s(':value', v); }

}
/** Defines the SampleRate Class. Serialized as `inkml:sampleRate` */
export class SampleRate extends OxmlLeafElement {

    public static override _Q = 'inkml:sampleRate';
    public static override _A = [':uniform',':value',];
    /** uniform. Serialized as `:uniform` */
    public get uniform(): BooleanValue | undefined { return this._g(':uniform'); }
    public set uniform(v: BooleanValue | undefined) { this._s(':uniform', v); }
    /** value. Serialized as `:value` */
    public get value(): DecimalValue | undefined { return this._g(':value'); }
    public set value(v: DecimalValue | undefined) { this._s(':value', v); }

}
/** Defines the TraceFormat Class. Serialized as `inkml:traceFormat` */
export class TraceFormat extends OxmlCompositeElement<Channel | IntermittentChannels> {

    public static override _Q = 'inkml:traceFormat';
    public static override _A = ['xml:id',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }

}
/** Defines the ChannelProperty Class. Serialized as `inkml:channelProperty` */
export class ChannelProperty extends OxmlLeafElement {

    public static override _Q = 'inkml:channelProperty';
    public static override _A = [':channel',':name',':value',':units',];
    /** channel. Serialized as `:channel` */
    public get channel(): StringValue | undefined { return this._g(':channel'); }
    public set channel(v: StringValue | undefined) { this._s(':channel', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** value. Serialized as `:value` */
    public get value(): DecimalValue | undefined { return this._g(':value'); }
    public set value(v: DecimalValue | undefined) { this._s(':value', v); }
    /** units. Serialized as `:units` */
    public get units(): StringValue | undefined { return this._g(':units'); }
    public set units(v: StringValue | undefined) { this._s(':units', v); }

}
/** Defines the IntermittentChannels Class. Serialized as `inkml:intermittentChannels` */
export class IntermittentChannels extends OxmlCompositeElement<Channel> {

    public static override _Q = 'inkml:intermittentChannels';

}
/** Defines the Channel Class. Serialized as `inkml:channel` */
export class Channel extends OxmlCompositeElement<Mapping> {

    public static override _Q = 'inkml:channel';
    public static override _A = ['xml:id',':name',':type',':default',':min',':max',':orientation',':respectTo',':units',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** type. Serialized as `:type` */
    public get type(): ChannelDataTypeValues | undefined { return this._g(':type'); }
    public set type(v: ChannelDataTypeValues | undefined) { this._s(':type', v); }
    /** default. Serialized as `:default` */
    public get default(): StringValue | undefined { return this._g(':default'); }
    public set default(v: StringValue | undefined) { this._s(':default', v); }
    /** min. Serialized as `:min` */
    public get min(): DecimalValue | undefined { return this._g(':min'); }
    public set min(v: DecimalValue | undefined) { this._s(':min', v); }
    /** max. Serialized as `:max` */
    public get max(): DecimalValue | undefined { return this._g(':max'); }
    public set max(v: DecimalValue | undefined) { this._s(':max', v); }
    /** orientation. Serialized as `:orientation` */
    public get orientation(): ChannelValueOrientationValues | undefined { return this._g(':orientation'); }
    public set orientation(v: ChannelValueOrientationValues | undefined) { this._s(':orientation', v); }
    /** respectTo. Serialized as `:respectTo` */
    public get respectTo(): StringValue | undefined { return this._g(':respectTo'); }
    public set respectTo(v: StringValue | undefined) { this._s(':respectTo', v); }
    /** units. Serialized as `:units` */
    public get units(): StringValue | undefined { return this._g(':units'); }
    public set units(v: StringValue | undefined) { this._s(':units', v); }

}
/** Defines the Mapping Class. Serialized as `inkml:mapping` */
export class Mapping extends OxmlCompositeElement<Bind | Table | Matrix | Mapping> {

    public static override _Q = 'inkml:mapping';
    public static override _A = ['xml:id',':type',':mappingRef',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** type. Serialized as `:type` */
    public get type(): MappingTypeValues | undefined { return this._g(':type'); }
    public set type(v: MappingTypeValues | undefined) { this._s(':type', v); }
    /** mappingRef. Serialized as `:mappingRef` */
    public get mappingRef(): StringValue | undefined { return this._g(':mappingRef'); }
    public set mappingRef(v: StringValue | undefined) { this._s(':mappingRef', v); }

}
/** Defines the Matrix Class. Serialized as `inkml:matrix` */
export class Matrix extends OxmlLeafTextElement {

    public static override _Q = 'inkml:matrix';
    public static override _A = ['xml:id',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }

}
/** Defines the Table Class. Serialized as `inkml:table` */
export class Table extends OxmlLeafTextElement {

    public static override _Q = 'inkml:table';
    public static override _A = ['xml:id',':apply',':interpolation',];
    /** id. Serialized as `xml:id` */
    public get id(): StringValue | undefined { return this._g('xml:id'); }
    public set id(v: StringValue | undefined) { this._s('xml:id', v); }
    /** apply. Serialized as `:apply` */
    public get apply(): TableApplyValues | undefined { return this._g(':apply'); }
    public set apply(v: TableApplyValues | undefined) { this._s(':apply', v); }
    /** interpolation. Serialized as `:interpolation` */
    public get interpolation(): TableInterpolationValues | undefined { return this._g(':interpolation'); }
    public set interpolation(v: TableInterpolationValues | undefined) { this._s(':interpolation', v); }

}
/** Defines the Bind Class. Serialized as `inkml:bind` */
export class Bind extends OxmlLeafElement {

    public static override _Q = 'inkml:bind';
    public static override _A = [':source',':target',':column',':variable',];
    /** source. Serialized as `:source` */
    public get source(): StringValue | undefined { return this._g(':source'); }
    public set source(v: StringValue | undefined) { this._s(':source', v); }
    /** target. Serialized as `:target` */
    public get target(): StringValue | undefined { return this._g(':target'); }
    public set target(v: StringValue | undefined) { this._s(':target', v); }
    /** column. Serialized as `:column` */
    public get column(): StringValue | undefined { return this._g(':column'); }
    public set column(v: StringValue | undefined) { this._s(':column', v); }
    /** variable. Serialized as `:variable` */
    public get variable(): StringValue | undefined { return this._g(':variable'); }
    public set variable(v: StringValue | undefined) { this._s(':variable', v); }

}
/** Defines the Ink Class. Serialized as `inkml:ink` */
export class Ink extends OxmlPartRootElement<Annotation | AnnotationXml | Definitions | Context | Trace | TraceGroup | TraceView> {

    public static override _Q = 'inkml:ink';
    public static override _A = [':documentID',];
    /** documentID. Serialized as `:documentID` */
    public get documentId(): StringValue | undefined { return this._g(':documentID'); }
    public set documentId(v: StringValue | undefined) { this._s(':documentID', v); }

}

export function initInkMLNamespace() {
    Definitions._C = {
        'inkml:brush': Brush,
        'inkml:canvas': Canvas,
        'inkml:canvasTransform': CanvasTransform,
        'inkml:context': Context,
        'inkml:inkSource': InkSource,
        'inkml:mapping': Mapping,
        'inkml:timestamp': Timestamp,
        'inkml:trace': Trace,
        'inkml:traceFormat': TraceFormat,
        'inkml:traceGroup': TraceGroup,
        'inkml:traceView': TraceView,
    };
    Context._C = {
        'inkml:canvas': Canvas,
        'inkml:canvasTransform': CanvasTransform,
        'inkml:traceFormat': TraceFormat,
        'inkml:inkSource': InkSource,
        'inkml:brush': Brush,
        'inkml:timestamp': Timestamp,
    };
    Context._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':contextRef': new OxmlAttr(':contextRef', OxmlType.StringValue),
        ':canvasRef': new OxmlAttr(':canvasRef', OxmlType.StringValue),
        ':canvasTransformRef': new OxmlAttr(':canvasTransformRef', OxmlType.StringValue),
        ':traceFormatRef': new OxmlAttr(':traceFormatRef', OxmlType.StringValue),
        ':inkSourceRef': new OxmlAttr(':inkSourceRef', OxmlType.StringValue),
        ':brushRef': new OxmlAttr(':brushRef', OxmlType.StringValue),
        ':timestampRef': new OxmlAttr(':timestampRef', OxmlType.StringValue),
    };
    TraceView._C = {
        'inkml:annotation': Annotation,
        'inkml:annotationXML': AnnotationXml,
        'inkml:traceView': TraceView,
    };
    TraceView._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':contextRef': new OxmlAttr(':contextRef', OxmlType.StringValue),
        ':traceDataRef': new OxmlAttr(':traceDataRef', OxmlType.StringValue),
        ':from': new OxmlAttr(':from', OxmlType.StringValue),
        ':to': new OxmlAttr(':to', OxmlType.StringValue),
    };
    TraceGroup._C = {
        'inkml:annotation': Annotation,
        'inkml:annotationXML': AnnotationXml,
        'inkml:trace': Trace,
        'inkml:traceGroup': TraceGroup,
    };
    TraceGroup._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':contextRef': new OxmlAttr(':contextRef', OxmlType.StringValue),
        ':brushRef': new OxmlAttr(':brushRef', OxmlType.StringValue),
    };
    Trace._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, TraceTypeValuesArray),
        ':continuation': new OxmlAttr(':continuation', OxmlType.EnumValue, TraceContinuationValuesArray),
        ':priorRef': new OxmlAttr(':priorRef', OxmlType.StringValue),
        ':contextRef': new OxmlAttr(':contextRef', OxmlType.StringValue),
        ':brushRef': new OxmlAttr(':brushRef', OxmlType.StringValue),
        ':duration': new OxmlAttr(':duration', OxmlType.DecimalValue),
        ':timeOffset': new OxmlAttr(':timeOffset', OxmlType.DecimalValue),
    };
    Timestamp._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':time': new OxmlAttr(':time', OxmlType.DecimalValue),
        ':timestampRef': new OxmlAttr(':timestampRef', OxmlType.StringValue),
        ':timeString': new OxmlAttr(':timeString', OxmlType.DateTimeValue),
        ':timeOffset': new OxmlAttr(':timeOffset', OxmlType.DecimalValue),
    };
    Brush._C = {
        'inkml:annotation': Annotation,
        'inkml:annotationXML': AnnotationXml,
        'inkml:brushProperty': BrushProperty,
    };
    Brush._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':brushRef': new OxmlAttr(':brushRef', OxmlType.StringValue),
    };
    InkSource._C = {
        'inkml:traceFormat': TraceFormat,
        'inkml:sampleRate': SampleRate,
        'inkml:latency': Latency,
        'inkml:activeArea': ActiveArea,
        'inkml:srcProperty': SourceProperty,
        'inkml:channelProperties': ChannelProperties,
    };
    InkSource._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':manufacturer': new OxmlAttr(':manufacturer', OxmlType.StringValue),
        ':model': new OxmlAttr(':model', OxmlType.StringValue),
        ':serialNo': new OxmlAttr(':serialNo', OxmlType.StringValue),
        ':specificationRef': new OxmlAttr(':specificationRef', OxmlType.StringValue),
        ':description': new OxmlAttr(':description', OxmlType.StringValue),
    };
    CanvasTransform._C = {
        'inkml:mapping': Mapping,
    };
    CanvasTransform._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':invertible': new OxmlAttr(':invertible', OxmlType.BooleanValue),
    };
    Canvas._C = {
        'inkml:traceFormat': TraceFormat,
    };
    Canvas._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':traceFormatRef': new OxmlAttr(':traceFormatRef', OxmlType.StringValue),
    };
    BrushProperty._C = {
        'inkml:annotation': Annotation,
        'inkml:annotationXML': AnnotationXml,
    };
    BrushProperty._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':value': new OxmlAttr(':value', OxmlType.StringValue),
        ':units': new OxmlAttr(':units', OxmlType.StringValue),
    };
    AnnotationXml._C = {
        'emma:emma': EmmaEmma,
    };
    AnnotationXml._D = {
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':encoding': new OxmlAttr(':encoding', OxmlType.StringValue),
        ':href': new OxmlAttr(':href', OxmlType.StringValue),
    };
    Annotation._D = {
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':encoding': new OxmlAttr(':encoding', OxmlType.StringValue),
    };
    ChannelProperties._C = {
        'inkml:channelProperty': ChannelProperty,
    };
    SourceProperty._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':value': new OxmlAttr(':value', OxmlType.DecimalValue),
        ':units': new OxmlAttr(':units', OxmlType.StringValue),
    };
    ActiveArea._D = {
        ':size': new OxmlAttr(':size', OxmlType.StringValue),
        ':height': new OxmlAttr(':height', OxmlType.DecimalValue),
        ':width': new OxmlAttr(':width', OxmlType.DecimalValue),
        ':units': new OxmlAttr(':units', OxmlType.StringValue),
    };
    Latency._D = {
        ':value': new OxmlAttr(':value', OxmlType.DecimalValue),
    };
    SampleRate._D = {
        ':uniform': new OxmlAttr(':uniform', OxmlType.BooleanValue),
        ':value': new OxmlAttr(':value', OxmlType.DecimalValue),
    };
    TraceFormat._C = {
        'inkml:channel': Channel,
        'inkml:intermittentChannels': IntermittentChannels,
    };
    TraceFormat._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
    };
    ChannelProperty._D = {
        ':channel': new OxmlAttr(':channel', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':value': new OxmlAttr(':value', OxmlType.DecimalValue),
        ':units': new OxmlAttr(':units', OxmlType.StringValue),
    };
    IntermittentChannels._C = {
        'inkml:channel': Channel,
    };
    Channel._C = {
        'inkml:mapping': Mapping,
    };
    Channel._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ChannelDataTypeValuesArray),
        ':default': new OxmlAttr(':default', OxmlType.StringValue),
        ':min': new OxmlAttr(':min', OxmlType.DecimalValue),
        ':max': new OxmlAttr(':max', OxmlType.DecimalValue),
        ':orientation': new OxmlAttr(':orientation', OxmlType.EnumValue, ChannelValueOrientationValuesArray),
        ':respectTo': new OxmlAttr(':respectTo', OxmlType.StringValue),
        ':units': new OxmlAttr(':units', OxmlType.StringValue),
    };
    Mapping._C = {
        'inkml:bind': Bind,
        'inkml:table': Table,
        'inkml:matrix': Matrix,
        'inkml:mapping': Mapping,
    };
    Mapping._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, MappingTypeValuesArray),
        ':mappingRef': new OxmlAttr(':mappingRef', OxmlType.StringValue),
    };
    Matrix._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
    };
    Table._D = {
        'xml:id': new OxmlAttr('xml:id', OxmlType.StringValue),
        ':apply': new OxmlAttr(':apply', OxmlType.EnumValue, TableApplyValuesArray),
        ':interpolation': new OxmlAttr(':interpolation', OxmlType.EnumValue, TableInterpolationValuesArray),
    };
    Bind._D = {
        ':source': new OxmlAttr(':source', OxmlType.StringValue),
        ':target': new OxmlAttr(':target', OxmlType.StringValue),
        ':column': new OxmlAttr(':column', OxmlType.StringValue),
        ':variable': new OxmlAttr(':variable', OxmlType.StringValue),
    };
    Ink._C = {
        'inkml:annotation': Annotation,
        'inkml:annotationXML': AnnotationXml,
        'inkml:definitions': Definitions,
        'inkml:context': Context,
        'inkml:trace': Trace,
        'inkml:traceGroup': TraceGroup,
        'inkml:traceView': TraceView,
    };
    Ink._D = {
        ':documentID': new OxmlAttr(':documentID', OxmlType.StringValue),
    };
    return {
        prefix: 'inkml',
        xmlns: 'http://www.w3.org/2003/InkML',
    };
}
