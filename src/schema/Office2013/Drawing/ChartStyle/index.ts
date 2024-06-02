import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { ByteValue } from '../../../../framework/types/ByteValue';
import { ListValue } from '../../../../framework/types/ListValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { SByteValue } from '../../../../framework/types/SByteValue';
import { UInt16Value } from '../../../../framework/types/UInt16Value';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { TextVerticalOverflowValues, TextVerticalOverflowValuesArray } from '../../../Drawing';
import { TextHorizontalOverflowValues, TextHorizontalOverflowValuesArray } from '../../../Drawing';
import { TextVerticalValues, TextVerticalValuesArray } from '../../../Drawing';
import { TextWrappingValues, TextWrappingValuesArray } from '../../../Drawing';
import { TextAnchoringTypeValues, TextAnchoringTypeValuesArray } from '../../../Drawing';
import { TextUnderlineValues, TextUnderlineValuesArray } from '../../../Drawing';
import { TextStrikeValues, TextStrikeValuesArray } from '../../../Drawing';
import { TextCapsValues, TextCapsValuesArray } from '../../../Drawing';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';
import { FontCollectionIndexValues, FontCollectionIndexValuesArray } from '../../../Drawing';import { PresetTextWrap as APresetTextWrap } from '../../../Drawing';
import { NoAutoFit as ANoAutoFit } from '../../../Drawing';
import { NormalAutoFit as ANormalAutoFit } from '../../../Drawing';
import { ShapeAutoFit as AShapeAutoFit } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { Shape3DType as AShape3DType } from '../../../Drawing';
import { FlatText as AFlatText } from '../../../Drawing';
import { ExtensionList as AExtensionList } from '../../../Drawing';
import { Outline as AOutline } from '../../../Drawing';
import { NoFill as ANoFill } from '../../../Drawing';
import { SolidFill as ASolidFill } from '../../../Drawing';
import { GradientFill as AGradientFill } from '../../../Drawing';
import { BlipFill as ABlipFill } from '../../../Drawing';
import { PatternFill as APatternFill } from '../../../Drawing';
import { GroupFill as AGroupFill } from '../../../Drawing';
import { EffectList as AEffectList } from '../../../Drawing';
import { EffectDag as AEffectDag } from '../../../Drawing';
import { Highlight as AHighlight } from '../../../Drawing';
import { UnderlineFollowsText as AUnderlineFollowsText } from '../../../Drawing';
import { Underline as AUnderline } from '../../../Drawing';
import { UnderlineFillText as AUnderlineFillText } from '../../../Drawing';
import { UnderlineFill as AUnderlineFill } from '../../../Drawing';
import { LatinFont as ALatinFont } from '../../../Drawing';
import { EastAsianFont as AEastAsianFont } from '../../../Drawing';
import { ComplexScriptFont as AComplexScriptFont } from '../../../Drawing';
import { SymbolFont as ASymbolFont } from '../../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../../Drawing';
import { HyperlinkOnMouseOver as AHyperlinkOnMouseOver } from '../../../Drawing';
import { RightToLeft as ARightToLeft } from '../../../Drawing';
import { Transform2D as ATransform2D } from '../../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../../Drawing';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../../Drawing';
import { HslColor as AHslColor } from '../../../Drawing';
import { SystemColor as ASystemColor } from '../../../Drawing';
import { SchemeColor as ASchemeColor } from '../../../Drawing';
import { PresetColor as APresetColor } from '../../../Drawing';
import { Tint as ATint } from '../../../Drawing';
import { Shade as AShade } from '../../../Drawing';
import { Complement as AComplement } from '../../../Drawing';
import { Inverse as AInverse } from '../../../Drawing';
import { Gray as AGray } from '../../../Drawing';
import { Alpha as AAlpha } from '../../../Drawing';
import { AlphaOffset as AAlphaOffset } from '../../../Drawing';
import { AlphaModulation as AAlphaModulation } from '../../../Drawing';
import { Hue as AHue } from '../../../Drawing';
import { HueOffset as AHueOffset } from '../../../Drawing';
import { HueModulation as AHueModulation } from '../../../Drawing';
import { Saturation as ASaturation } from '../../../Drawing';
import { SaturationOffset as ASaturationOffset } from '../../../Drawing';
import { SaturationModulation as ASaturationModulation } from '../../../Drawing';
import { Luminance as ALuminance } from '../../../Drawing';
import { LuminanceOffset as ALuminanceOffset } from '../../../Drawing';
import { LuminanceModulation as ALuminanceModulation } from '../../../Drawing';
import { Red as ARed } from '../../../Drawing';
import { RedOffset as ARedOffset } from '../../../Drawing';
import { RedModulation as ARedModulation } from '../../../Drawing';
import { Green as AGreen } from '../../../Drawing';
import { GreenOffset as AGreenOffset } from '../../../Drawing';
import { GreenModulation as AGreenModulation } from '../../../Drawing';
import { Blue as ABlue } from '../../../Drawing';
import { BlueOffset as ABlueOffset } from '../../../Drawing';
import { BlueModulation as ABlueModulation } from '../../../Drawing';
import { Gamma as AGamma } from '../../../Drawing';
import { InverseGamma as AInverseGamma } from '../../../Drawing';
import { Extension as AExtension } from '../../../Drawing';


export enum ColorStyleMethodEnum {
    /** undefined. Serialized value: `cycle` */
    Cycle = 'cycle',
    /** undefined. Serialized value: `withinLinear` */
    WithinLinear = 'withinLinear',
    /** undefined. Serialized value: `acrossLinear` */
    AcrossLinear = 'acrossLinear',
    /** undefined. Serialized value: `withinLinearReversed` */
    WithinLinearReversed = 'withinLinearReversed',
    /** undefined. Serialized value: `acrossLinearReversed` */
    AcrossLinearReversed = 'acrossLinearReversed',
}

export const ColorStyleMethodEnumArray = [
    ColorStyleMethodEnum.Cycle,
    ColorStyleMethodEnum.WithinLinear,
    ColorStyleMethodEnum.AcrossLinear,
    ColorStyleMethodEnum.WithinLinearReversed,
    ColorStyleMethodEnum.AcrossLinearReversed,
] as const;

export enum StyleReferenceModifierEnum {
    /** undefined. Serialized value: `ignoreCSTransforms` */
    IgnoreCSTransforms = 'ignoreCSTransforms',
}

export const StyleReferenceModifierEnumArray = [
    StyleReferenceModifierEnum.IgnoreCSTransforms,
] as const;

export enum StyleColorEnum {
    /** undefined. Serialized value: `auto` */
    Automatic = 'auto',
}

export const StyleColorEnumArray = [
    StyleColorEnum.Automatic,
] as const;

export enum StyleEntryModifierEnum {
    /** undefined. Serialized value: `allowNoFillOverride` */
    AllowNoFillOverride = 'allowNoFillOverride',
    /** undefined. Serialized value: `allowNoLineOverride` */
    AllowNoLineOverride = 'allowNoLineOverride',
}

export const StyleEntryModifierEnumArray = [
    StyleEntryModifierEnum.AllowNoFillOverride,
    StyleEntryModifierEnum.AllowNoLineOverride,
] as const;

export enum MarkerStyle {
    /** undefined. Serialized value: `circle` */
    Circle = 'circle',
    /** undefined. Serialized value: `dash` */
    Dash = 'dash',
    /** undefined. Serialized value: `diamond` */
    Diamond = 'diamond',
    /** undefined. Serialized value: `dot` */
    Dot = 'dot',
    /** undefined. Serialized value: `plus` */
    Plus = 'plus',
    /** undefined. Serialized value: `square` */
    Square = 'square',
    /** undefined. Serialized value: `star` */
    Star = 'star',
    /** undefined. Serialized value: `triangle` */
    Triangle = 'triangle',
    /** undefined. Serialized value: `x` */
    X = 'x',
}

export const MarkerStyleArray = [
    MarkerStyle.Circle,
    MarkerStyle.Dash,
    MarkerStyle.Diamond,
    MarkerStyle.Dot,
    MarkerStyle.Plus,
    MarkerStyle.Square,
    MarkerStyle.Star,
    MarkerStyle.Triangle,
    MarkerStyle.X,
] as const;

export enum Boolean {
    /** undefined. Serialized value: `false` */
    False = 'false',
    /** undefined. Serialized value: `true` */
    True = 'true',
    /** undefined. Serialized value: `ninch` */
    Ninch = 'ninch',
}

export const BooleanArray = [
    Boolean.False,
    Boolean.True,
    Boolean.Ninch,
] as const;

export enum TickMarkNinch {
    /** undefined. Serialized value: `cross` */
    Cross = 'cross',
    /** undefined. Serialized value: `inside` */
    Inside = 'inside',
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `outside` */
    Outside = 'outside',
    /** undefined. Serialized value: `ninch` */
    Ninch = 'ninch',
}

export const TickMarkNinchArray = [
    TickMarkNinch.Cross,
    TickMarkNinch.Inside,
    TickMarkNinch.None,
    TickMarkNinch.Outside,
    TickMarkNinch.Ninch,
] as const;

export enum TickLabelPositionNinch {
    /** undefined. Serialized value: `high` */
    High = 'high',
    /** undefined. Serialized value: `low` */
    Low = 'low',
    /** undefined. Serialized value: `nextToAxis` */
    NextToAxis = 'nextToAxis',
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `ninch` */
    Ninch = 'ninch',
}

export const TickLabelPositionNinchArray = [
    TickLabelPositionNinch.High,
    TickLabelPositionNinch.Low,
    TickLabelPositionNinch.NextToAxis,
    TickLabelPositionNinch.None,
    TickLabelPositionNinch.Ninch,
] as const;

export enum DataLabelsPosition {
    /** undefined. Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `insideEnd` */
    InsideEnd = 'insideEnd',
    /** undefined. Serialized value: `insideBase` */
    InsideBase = 'insideBase',
    /** undefined. Serialized value: `outsideEnd` */
    OutsideEnd = 'outsideEnd',
    /** undefined. Serialized value: `ninch` */
    Ninch = 'ninch',
}

export const DataLabelsPositionArray = [
    DataLabelsPosition.Center,
    DataLabelsPosition.InsideEnd,
    DataLabelsPosition.InsideBase,
    DataLabelsPosition.OutsideEnd,
    DataLabelsPosition.Ninch,
] as const;

export enum LegendPosition {
    /** undefined. Serialized value: `right` */
    Right = 'right',
    /** undefined. Serialized value: `top` */
    Top = 'top',
    /** undefined. Serialized value: `left` */
    Left = 'left',
    /** undefined. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** undefined. Serialized value: `ninch` */
    Ninch = 'ninch',
}

export const LegendPositionArray = [
    LegendPosition.Right,
    LegendPosition.Top,
    LegendPosition.Left,
    LegendPosition.Bottom,
    LegendPosition.Ninch,
] as const;

export enum TitlePosition {
    /** undefined. Serialized value: `above` */
    Above = 'above',
    /** undefined. Serialized value: `overlay` */
    Overlay = 'overlay',
    /** undefined. Serialized value: `off` */
    Off = 'off',
    /** undefined. Serialized value: `ninch` */
    Ninch = 'ninch',
}

export const TitlePositionArray = [
    TitlePosition.Above,
    TitlePosition.Overlay,
    TitlePosition.Off,
    TitlePosition.Ninch,
] as const;

/** Defines the MarkerLayoutProperties Class. Serialized as `cs:dataPointMarkerLayout` */
export class MarkerLayoutProperties extends OxmlLeafElement {

    public static override _Q = 'cs:dataPointMarkerLayout';
    public static override _A = [':symbol',':size',];
    /** symbol. Serialized as `:symbol` */
    public get symbol(): MarkerStyle | undefined { return this._g(':symbol'); }
    public set symbol(v: MarkerStyle | undefined) { this._s(':symbol', v); }
    /** size. Serialized as `:size` */
    public get size(): ByteValue | undefined { return this._g(':size'); }
    public set size(v: ByteValue | undefined) { this._s(':size', v); }

}
/** Defines the StyleEntry Class. */
export abstract class StyleEntry extends OxmlCompositeElement<LineReference | LineWidthScale | FillReference | EffectReference | FontReference | ShapeProperties | TextCharacterPropertiesType | TextBodyProperties | OfficeArtExtensionList> {

    public static override _A = [':mods',];
    /** mods. Serialized as `:mods` */
    public get modifiers(): ListValue<StringValue> | undefined { return this._g(':mods'); }
    public set modifiers(v: ListValue<StringValue> | undefined) { this._s(':mods', v); }
    /** Returns LineReference. */
    public get lineReference(): LineReference | undefined { return this._f(LineReference); }
    /** Returns LineWidthScale. */
    public get lineWidthScale(): LineWidthScale | undefined { return this._f(LineWidthScale); }
    /** Returns FillReference. */
    public get fillReference(): FillReference | undefined { return this._f(FillReference); }
    /** Returns EffectReference. */
    public get effectReference(): EffectReference | undefined { return this._f(EffectReference); }
    /** Returns FontReference. */
    public get fontReference(): FontReference | undefined { return this._f(FontReference); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns TextCharacterPropertiesType. */
    public get textCharacterPropertiesType(): TextCharacterPropertiesType | undefined { return this._f(TextCharacterPropertiesType); }
    /** Returns TextBodyProperties. */
    public get textBodyProperties(): TextBodyProperties | undefined { return this._f(TextBodyProperties); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the Wall Class. Serialized as `cs:wall` */
export class Wall extends StyleEntry {

    public static override _Q = 'cs:wall';

}
/** Defines the ValueAxis Class. Serialized as `cs:valueAxis` */
export class ValueAxis extends StyleEntry {

    public static override _Q = 'cs:valueAxis';

}
/** Defines the UpBar Class. Serialized as `cs:upBar` */
export class UpBar extends StyleEntry {

    public static override _Q = 'cs:upBar';

}
/** Defines the TrendlineLabel Class. Serialized as `cs:trendlineLabel` */
export class TrendlineLabel extends StyleEntry {

    public static override _Q = 'cs:trendlineLabel';

}
/** Defines the TrendlineStyle Class. Serialized as `cs:trendline` */
export class TrendlineStyle extends StyleEntry {

    public static override _Q = 'cs:trendline';

}
/** Defines the TitleStyle Class. Serialized as `cs:title` */
export class TitleStyle extends StyleEntry {

    public static override _Q = 'cs:title';

}
/** Defines the SeriesLine Class. Serialized as `cs:seriesLine` */
export class SeriesLine extends StyleEntry {

    public static override _Q = 'cs:seriesLine';

}
/** Defines the SeriesAxis Class. Serialized as `cs:seriesAxis` */
export class SeriesAxis extends StyleEntry {

    public static override _Q = 'cs:seriesAxis';

}
/** Defines the PlotArea3D Class. Serialized as `cs:plotArea3D` */
export class PlotArea3D extends StyleEntry {

    public static override _Q = 'cs:plotArea3D';

}
/** Defines the PlotArea Class. Serialized as `cs:plotArea` */
export class PlotArea extends StyleEntry {

    public static override _Q = 'cs:plotArea';

}
/** Defines the LegendStyle Class. Serialized as `cs:legend` */
export class LegendStyle extends StyleEntry {

    public static override _Q = 'cs:legend';

}
/** Defines the LeaderLine Class. Serialized as `cs:leaderLine` */
export class LeaderLine extends StyleEntry {

    public static override _Q = 'cs:leaderLine';

}
/** Defines the HiLoLine Class. Serialized as `cs:hiLoLine` */
export class HiLoLine extends StyleEntry {

    public static override _Q = 'cs:hiLoLine';

}
/** Defines the GridlineMinor Class. Serialized as `cs:gridlineMinor` */
export class GridlineMinor extends StyleEntry {

    public static override _Q = 'cs:gridlineMinor';

}
/** Defines the GridlineMajor Class. Serialized as `cs:gridlineMajor` */
export class GridlineMajor extends StyleEntry {

    public static override _Q = 'cs:gridlineMajor';

}
/** Defines the Floor Class. Serialized as `cs:floor` */
export class Floor extends StyleEntry {

    public static override _Q = 'cs:floor';

}
/** Defines the ErrorBar Class. Serialized as `cs:errorBar` */
export class ErrorBar extends StyleEntry {

    public static override _Q = 'cs:errorBar';

}
/** Defines the DropLine Class. Serialized as `cs:dropLine` */
export class DropLine extends StyleEntry {

    public static override _Q = 'cs:dropLine';

}
/** Defines the DownBar Class. Serialized as `cs:downBar` */
export class DownBar extends StyleEntry {

    public static override _Q = 'cs:downBar';

}
/** Defines the DataTableStyle Class. Serialized as `cs:dataTable` */
export class DataTableStyle extends StyleEntry {

    public static override _Q = 'cs:dataTable';

}
/** Defines the DataPointWireframe Class. Serialized as `cs:dataPointWireframe` */
export class DataPointWireframe extends StyleEntry {

    public static override _Q = 'cs:dataPointWireframe';

}
/** Defines the DataPointMarker Class. Serialized as `cs:dataPointMarker` */
export class DataPointMarker extends StyleEntry {

    public static override _Q = 'cs:dataPointMarker';

}
/** Defines the DataPointLine Class. Serialized as `cs:dataPointLine` */
export class DataPointLine extends StyleEntry {

    public static override _Q = 'cs:dataPointLine';

}
/** Defines the DataPoint3D Class. Serialized as `cs:dataPoint3D` */
export class DataPoint3D extends StyleEntry {

    public static override _Q = 'cs:dataPoint3D';

}
/** Defines the DataPoint Class. Serialized as `cs:dataPoint` */
export class DataPoint extends StyleEntry {

    public static override _Q = 'cs:dataPoint';

}
/** Defines the DataLabelCallout Class. Serialized as `cs:dataLabelCallout` */
export class DataLabelCallout extends StyleEntry {

    public static override _Q = 'cs:dataLabelCallout';

}
/** Defines the DataLabel Class. Serialized as `cs:dataLabel` */
export class DataLabel extends StyleEntry {

    public static override _Q = 'cs:dataLabel';

}
/** Defines the ChartArea Class. Serialized as `cs:chartArea` */
export class ChartArea extends StyleEntry {

    public static override _Q = 'cs:chartArea';

}
/** Defines the CategoryAxis Class. Serialized as `cs:categoryAxis` */
export class CategoryAxis extends StyleEntry {

    public static override _Q = 'cs:categoryAxis';

}
/** Defines the AxisTitle Class. Serialized as `cs:axisTitle` */
export class AxisTitle extends StyleEntry {

    public static override _Q = 'cs:axisTitle';

}
/** Defines the View3DProperties Class. Serialized as `cs:view3D` */
export class View3DProperties extends OxmlLeafElement {

    public static override _Q = 'cs:view3D';
    public static override _A = [':rotX',':rotY',':rAngAx',':perspective',':heightPercent',':depthPercent',];
    /** rotX. Serialized as `:rotX` */
    public get rotX(): SByteValue | undefined { return this._g(':rotX'); }
    public set rotX(v: SByteValue | undefined) { this._s(':rotX', v); }
    /** rotY. Serialized as `:rotY` */
    public get rotY(): UInt16Value | undefined { return this._g(':rotY'); }
    public set rotY(v: UInt16Value | undefined) { this._s(':rotY', v); }
    /** rAngAx. Serialized as `:rAngAx` */
    public get rightAngleAxes(): Boolean | undefined { return this._g(':rAngAx'); }
    public set rightAngleAxes(v: Boolean | undefined) { this._s(':rAngAx', v); }
    /** perspective. Serialized as `:perspective` */
    public get perspective(): ByteValue | undefined { return this._g(':perspective'); }
    public set perspective(v: ByteValue | undefined) { this._s(':perspective', v); }
    /** heightPercent. Serialized as `:heightPercent` */
    public get heightPercent(): UInt16Value | undefined { return this._g(':heightPercent'); }
    public set heightPercent(v: UInt16Value | undefined) { this._s(':heightPercent', v); }
    /** depthPercent. Serialized as `:depthPercent` */
    public get depthPercent(): UInt16Value | undefined { return this._g(':depthPercent'); }
    public set depthPercent(v: UInt16Value | undefined) { this._s(':depthPercent', v); }

}
/** Defines the Trendline Class. Serialized as `cs:trendline` */
export class Trendline extends OxmlLeafElement {

    public static override _Q = 'cs:trendline';
    public static override _A = [':add',':equation',':rsquared',];
    /** add. Serialized as `:add` */
    public get add(): Boolean | undefined { return this._g(':add'); }
    public set add(v: Boolean | undefined) { this._s(':add', v); }
    /** equation. Serialized as `:equation` */
    public get equation(): Boolean | undefined { return this._g(':equation'); }
    public set equation(v: Boolean | undefined) { this._s(':equation', v); }
    /** rsquared. Serialized as `:rsquared` */
    public get rSquared(): Boolean | undefined { return this._g(':rsquared'); }
    public set rSquared(v: Boolean | undefined) { this._s(':rsquared', v); }

}
/** Defines the Title Class. Serialized as `cs:title` */
export class Title extends OxmlLeafElement {

    public static override _Q = 'cs:title';
    public static override _A = [':position',];
    /** position. Serialized as `:position` */
    public get position(): TitlePosition | undefined { return this._g(':position'); }
    public set position(v: TitlePosition | undefined) { this._s(':position', v); }

}
/** Defines the Legend Class. Serialized as `cs:legend` */
export class Legend extends OxmlLeafElement {

    public static override _Q = 'cs:legend';
    public static override _A = [':visible',':includeInLayout',':position',];
    /** visible. Serialized as `:visible` */
    public get visible(): Boolean | undefined { return this._g(':visible'); }
    public set visible(v: Boolean | undefined) { this._s(':visible', v); }
    /** includeInLayout. Serialized as `:includeInLayout` */
    public get includeInLayout(): Boolean | undefined { return this._g(':includeInLayout'); }
    public set includeInLayout(v: Boolean | undefined) { this._s(':includeInLayout', v); }
    /** position. Serialized as `:position` */
    public get position(): LegendPosition | undefined { return this._g(':position'); }
    public set position(v: LegendPosition | undefined) { this._s(':position', v); }

}
/** Defines the DataTable Class. Serialized as `cs:dataTable` */
export class DataTable extends OxmlLeafElement {

    public static override _Q = 'cs:dataTable';
    public static override _A = [':legendKeys',':horizontalBorder',':verticalBorder',':outlineBorder',];
    /** legendKeys. Serialized as `:legendKeys` */
    public get legendKeys(): Boolean | undefined { return this._g(':legendKeys'); }
    public set legendKeys(v: Boolean | undefined) { this._s(':legendKeys', v); }
    /** horizontalBorder. Serialized as `:horizontalBorder` */
    public get horizontalBorder(): Boolean | undefined { return this._g(':horizontalBorder'); }
    public set horizontalBorder(v: Boolean | undefined) { this._s(':horizontalBorder', v); }
    /** verticalBorder. Serialized as `:verticalBorder` */
    public get verticalBorder(): Boolean | undefined { return this._g(':verticalBorder'); }
    public set verticalBorder(v: Boolean | undefined) { this._s(':verticalBorder', v); }
    /** outlineBorder. Serialized as `:outlineBorder` */
    public get outlineBorder(): Boolean | undefined { return this._g(':outlineBorder'); }
    public set outlineBorder(v: Boolean | undefined) { this._s(':outlineBorder', v); }

}
/** Defines the DataLabels Class. Serialized as `cs:dataLabels` */
export class DataLabels extends OxmlLeafElement {

    public static override _Q = 'cs:dataLabels';
    public static override _A = [':position',':value',':seriesName',':categoryName',':legendKey',':percentage',];
    /** position. Serialized as `:position` */
    public get position(): DataLabelsPosition | undefined { return this._g(':position'); }
    public set position(v: DataLabelsPosition | undefined) { this._s(':position', v); }
    /** value. Serialized as `:value` */
    public get value(): Boolean | undefined { return this._g(':value'); }
    public set value(v: Boolean | undefined) { this._s(':value', v); }
    /** seriesName. Serialized as `:seriesName` */
    public get seriesName(): Boolean | undefined { return this._g(':seriesName'); }
    public set seriesName(v: Boolean | undefined) { this._s(':seriesName', v); }
    /** categoryName. Serialized as `:categoryName` */
    public get categoryName(): Boolean | undefined { return this._g(':categoryName'); }
    public set categoryName(v: Boolean | undefined) { this._s(':categoryName', v); }
    /** legendKey. Serialized as `:legendKey` */
    public get legendKey(): Boolean | undefined { return this._g(':legendKey'); }
    public set legendKey(v: Boolean | undefined) { this._s(':legendKey', v); }
    /** percentage. Serialized as `:percentage` */
    public get percentage(): Boolean | undefined { return this._g(':percentage'); }
    public set percentage(v: Boolean | undefined) { this._s(':percentage', v); }

}
/** Defines the DataSeries Class. Serialized as `cs:dataSeries` */
export class DataSeries extends OxmlLeafElement {

    public static override _Q = 'cs:dataSeries';
    public static override _A = [':overlap',':gapWidth',':gapDepth',':doughnutHoleSize',':markerVisible',':hiloLines',':dropLines',':seriesLines',];
    /** overlap. Serialized as `:overlap` */
    public get overlap(): SByteValue | undefined { return this._g(':overlap'); }
    public set overlap(v: SByteValue | undefined) { this._s(':overlap', v); }
    /** gapWidth. Serialized as `:gapWidth` */
    public get gapWidth(): UInt16Value | undefined { return this._g(':gapWidth'); }
    public set gapWidth(v: UInt16Value | undefined) { this._s(':gapWidth', v); }
    /** gapDepth. Serialized as `:gapDepth` */
    public get gapDepth(): UInt16Value | undefined { return this._g(':gapDepth'); }
    public set gapDepth(v: UInt16Value | undefined) { this._s(':gapDepth', v); }
    /** doughnutHoleSize. Serialized as `:doughnutHoleSize` */
    public get doughnutHoleSize(): ByteValue | undefined { return this._g(':doughnutHoleSize'); }
    public set doughnutHoleSize(v: ByteValue | undefined) { this._s(':doughnutHoleSize', v); }
    /** markerVisible. Serialized as `:markerVisible` */
    public get markerVisible(): Boolean | undefined { return this._g(':markerVisible'); }
    public set markerVisible(v: Boolean | undefined) { this._s(':markerVisible', v); }
    /** hiloLines. Serialized as `:hiloLines` */
    public get hiloLines(): Boolean | undefined { return this._g(':hiloLines'); }
    public set hiloLines(v: Boolean | undefined) { this._s(':hiloLines', v); }
    /** dropLines. Serialized as `:dropLines` */
    public get dropLines(): Boolean | undefined { return this._g(':dropLines'); }
    public set dropLines(v: Boolean | undefined) { this._s(':dropLines', v); }
    /** seriesLines. Serialized as `:seriesLines` */
    public get seriesLines(): Boolean | undefined { return this._g(':seriesLines'); }
    public set seriesLines(v: Boolean | undefined) { this._s(':seriesLines', v); }

}
/** Defines the AxisProperties Class. */
export abstract class AxisProperties extends OxmlLeafElement {

    public static override _A = [':visible',':majorTick',':minorTick',':labelPosition',':majorGridlines',':minorGridlines',':title',];
    /** visible. Serialized as `:visible` */
    public get visible(): Boolean | undefined { return this._g(':visible'); }
    public set visible(v: Boolean | undefined) { this._s(':visible', v); }
    /** majorTick. Serialized as `:majorTick` */
    public get majorTick(): TickMarkNinch | undefined { return this._g(':majorTick'); }
    public set majorTick(v: TickMarkNinch | undefined) { this._s(':majorTick', v); }
    /** minorTick. Serialized as `:minorTick` */
    public get minorTickProp(): TickMarkNinch | undefined { return this._g(':minorTick'); }
    public set minorTickProp(v: TickMarkNinch | undefined) { this._s(':minorTick', v); }
    /** labelPosition. Serialized as `:labelPosition` */
    public get labelPosition(): TickLabelPositionNinch | undefined { return this._g(':labelPosition'); }
    public set labelPosition(v: TickLabelPositionNinch | undefined) { this._s(':labelPosition', v); }
    /** majorGridlines. Serialized as `:majorGridlines` */
    public get majorGridlines(): Boolean | undefined { return this._g(':majorGridlines'); }
    public set majorGridlines(v: Boolean | undefined) { this._s(':majorGridlines', v); }
    /** minorGridlines. Serialized as `:minorGridlines` */
    public get minorGridlinesProp(): Boolean | undefined { return this._g(':minorGridlines'); }
    public set minorGridlinesProp(v: Boolean | undefined) { this._s(':minorGridlines', v); }
    /** title. Serialized as `:title` */
    public get titleProp(): Boolean | undefined { return this._g(':title'); }
    public set titleProp(v: Boolean | undefined) { this._s(':title', v); }

}
/** Defines the ValueAxisProperties Class. Serialized as `cs:valueAxis` */
export class ValueAxisProperties extends AxisProperties {

    public static override _Q = 'cs:valueAxis';

}
/** Defines the SeriesAxisProperties Class. Serialized as `cs:seriesAxis` */
export class SeriesAxisProperties extends AxisProperties {

    public static override _Q = 'cs:seriesAxis';

}
/** Defines the CategoryAxisProperties Class. Serialized as `cs:categoryAxis` */
export class CategoryAxisProperties extends AxisProperties {

    public static override _Q = 'cs:categoryAxis';

}
/** Defines the TextBodyProperties Class. Serialized as `cs:bodyPr` */
export class TextBodyProperties extends OxmlCompositeElement<APresetTextWrap | ANoAutoFit | ANormalAutoFit | AShapeAutoFit | AScene3DType | AShape3DType | AFlatText | AExtensionList> {

    public static override _Q = 'cs:bodyPr';
    public static override _A = [':rot',':spcFirstLastPara',':vertOverflow',':horzOverflow',':vert',':wrap',':lIns',':tIns',':rIns',':bIns',':numCol',':spcCol',':rtlCol',':fromWordArt',':anchor',':anchorCtr',':forceAA',':upright',':compatLnSpc',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): Int32Value | undefined { return this._g(':rot'); }
    public set rotation(v: Int32Value | undefined) { this._s(':rot', v); }
    /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
    public get useParagraphSpacing(): BooleanValue | undefined { return this._g(':spcFirstLastPara'); }
    public set useParagraphSpacing(v: BooleanValue | undefined) { this._s(':spcFirstLastPara', v); }
    /** Text Vertical Overflow. Serialized as `:vertOverflow` */
    public get verticalOverflow(): TextVerticalOverflowValues | undefined { return this._g(':vertOverflow'); }
    public set verticalOverflow(v: TextVerticalOverflowValues | undefined) { this._s(':vertOverflow', v); }
    /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
    public get horizontalOverflow(): TextHorizontalOverflowValues | undefined { return this._g(':horzOverflow'); }
    public set horizontalOverflow(v: TextHorizontalOverflowValues | undefined) { this._s(':horzOverflow', v); }
    /** Vertical Text. Serialized as `:vert` */
    public get vertical(): TextVerticalValues | undefined { return this._g(':vert'); }
    public set vertical(v: TextVerticalValues | undefined) { this._s(':vert', v); }
    /** Text Wrapping Type. Serialized as `:wrap` */
    public get wrap(): TextWrappingValues | undefined { return this._g(':wrap'); }
    public set wrap(v: TextWrappingValues | undefined) { this._s(':wrap', v); }
    /** Left Inset. Serialized as `:lIns` */
    public get leftInset(): Int32Value | undefined { return this._g(':lIns'); }
    public set leftInset(v: Int32Value | undefined) { this._s(':lIns', v); }
    /** Top Inset. Serialized as `:tIns` */
    public get topInset(): Int32Value | undefined { return this._g(':tIns'); }
    public set topInset(v: Int32Value | undefined) { this._s(':tIns', v); }
    /** Right Inset. Serialized as `:rIns` */
    public get rightInset(): Int32Value | undefined { return this._g(':rIns'); }
    public set rightInset(v: Int32Value | undefined) { this._s(':rIns', v); }
    /** Bottom Inset. Serialized as `:bIns` */
    public get bottomInset(): Int32Value | undefined { return this._g(':bIns'); }
    public set bottomInset(v: Int32Value | undefined) { this._s(':bIns', v); }
    /** Number of Columns. Serialized as `:numCol` */
    public get columnCount(): Int32Value | undefined { return this._g(':numCol'); }
    public set columnCount(v: Int32Value | undefined) { this._s(':numCol', v); }
    /** Space Between Columns. Serialized as `:spcCol` */
    public get columnSpacing(): Int32Value | undefined { return this._g(':spcCol'); }
    public set columnSpacing(v: Int32Value | undefined) { this._s(':spcCol', v); }
    /** Columns Right-To-Left. Serialized as `:rtlCol` */
    public get rightToLeftColumns(): BooleanValue | undefined { return this._g(':rtlCol'); }
    public set rightToLeftColumns(v: BooleanValue | undefined) { this._s(':rtlCol', v); }
    /** From WordArt. Serialized as `:fromWordArt` */
    public get fromWordArt(): BooleanValue | undefined { return this._g(':fromWordArt'); }
    public set fromWordArt(v: BooleanValue | undefined) { this._s(':fromWordArt', v); }
    /** Anchor. Serialized as `:anchor` */
    public get anchor(): TextAnchoringTypeValues | undefined { return this._g(':anchor'); }
    public set anchor(v: TextAnchoringTypeValues | undefined) { this._s(':anchor', v); }
    /** Anchor Center. Serialized as `:anchorCtr` */
    public get anchorCenter(): BooleanValue | undefined { return this._g(':anchorCtr'); }
    public set anchorCenter(v: BooleanValue | undefined) { this._s(':anchorCtr', v); }
    /** Force Anti-Alias. Serialized as `:forceAA` */
    public get forceAntiAlias(): BooleanValue | undefined { return this._g(':forceAA'); }
    public set forceAntiAlias(v: BooleanValue | undefined) { this._s(':forceAA', v); }
    /** Text Upright. Serialized as `:upright` */
    public get upRight(): BooleanValue | undefined { return this._g(':upright'); }
    public set upRight(v: BooleanValue | undefined) { this._s(':upright', v); }
    /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
    public get compatibleLineSpacing(): BooleanValue | undefined { return this._g(':compatLnSpc'); }
    public set compatibleLineSpacing(v: BooleanValue | undefined) { this._s(':compatLnSpc', v); }
    /** Preset Text Shape. */
    public get presetTextWrap(): APresetTextWrap | undefined { return this._f(APresetTextWrap); }

}
/** Defines the TextCharacterPropertiesType Class. Serialized as `cs:defRPr` */
export class TextCharacterPropertiesType extends OxmlCompositeElement<AOutline | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AHighlight | AUnderlineFollowsText | AUnderline | AUnderlineFillText | AUnderlineFill | ALatinFont | AEastAsianFont | AComplexScriptFont | ASymbolFont | AHyperlinkOnClick | AHyperlinkOnMouseOver | ARightToLeft | AExtensionList> {

    public static override _Q = 'cs:defRPr';
    public static override _A = [':kumimoji',':lang',':altLang',':sz',':b',':i',':u',':strike',':kern',':cap',':spc',':normalizeH',':baseline',':noProof',':dirty',':err',':smtClean',':smtId',':bmk',];
    /** kumimoji. Serialized as `:kumimoji` */
    public get kumimoji(): BooleanValue | undefined { return this._g(':kumimoji'); }
    public set kumimoji(v: BooleanValue | undefined) { this._s(':kumimoji', v); }
    /** lang. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** altLang. Serialized as `:altLang` */
    public get alternativeLanguage(): StringValue | undefined { return this._g(':altLang'); }
    public set alternativeLanguage(v: StringValue | undefined) { this._s(':altLang', v); }
    /** sz. Serialized as `:sz` */
    public get fontSize(): Int32Value | undefined { return this._g(':sz'); }
    public set fontSize(v: Int32Value | undefined) { this._s(':sz', v); }
    /** b. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }
    /** i. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** u. Serialized as `:u` */
    public get underline(): TextUnderlineValues | undefined { return this._g(':u'); }
    public set underline(v: TextUnderlineValues | undefined) { this._s(':u', v); }
    /** strike. Serialized as `:strike` */
    public get strike(): TextStrikeValues | undefined { return this._g(':strike'); }
    public set strike(v: TextStrikeValues | undefined) { this._s(':strike', v); }
    /** kern. Serialized as `:kern` */
    public get kerning(): Int32Value | undefined { return this._g(':kern'); }
    public set kerning(v: Int32Value | undefined) { this._s(':kern', v); }
    /** cap. Serialized as `:cap` */
    public get capital(): TextCapsValues | undefined { return this._g(':cap'); }
    public set capital(v: TextCapsValues | undefined) { this._s(':cap', v); }
    /** spc. Serialized as `:spc` */
    public get spacing(): Int32Value | undefined { return this._g(':spc'); }
    public set spacing(v: Int32Value | undefined) { this._s(':spc', v); }
    /** normalizeH. Serialized as `:normalizeH` */
    public get normalizeHeight(): BooleanValue | undefined { return this._g(':normalizeH'); }
    public set normalizeHeight(v: BooleanValue | undefined) { this._s(':normalizeH', v); }
    /** baseline. Serialized as `:baseline` */
    public get baseline(): Int32Value | undefined { return this._g(':baseline'); }
    public set baseline(v: Int32Value | undefined) { this._s(':baseline', v); }
    /** noProof. Serialized as `:noProof` */
    public get noProof(): BooleanValue | undefined { return this._g(':noProof'); }
    public set noProof(v: BooleanValue | undefined) { this._s(':noProof', v); }
    /** dirty. Serialized as `:dirty` */
    public get dirty(): BooleanValue | undefined { return this._g(':dirty'); }
    public set dirty(v: BooleanValue | undefined) { this._s(':dirty', v); }
    /** err. Serialized as `:err` */
    public get spellingError(): BooleanValue | undefined { return this._g(':err'); }
    public set spellingError(v: BooleanValue | undefined) { this._s(':err', v); }
    /** smtClean. Serialized as `:smtClean` */
    public get smartTagClean(): BooleanValue | undefined { return this._g(':smtClean'); }
    public set smartTagClean(v: BooleanValue | undefined) { this._s(':smtClean', v); }
    /** smtId. Serialized as `:smtId` */
    public get smartTagId(): UInt32Value | undefined { return this._g(':smtId'); }
    public set smartTagId(v: UInt32Value | undefined) { this._s(':smtId', v); }
    /** bmk. Serialized as `:bmk` */
    public get bookmark(): StringValue | undefined { return this._g(':bmk'); }
    public set bookmark(v: StringValue | undefined) { this._s(':bmk', v); }
    /** Returns AOutline. */
    public get outline(): AOutline | undefined { return this._f(AOutline); }

}
/** Defines the ShapeProperties Class. Serialized as `cs:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'cs:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the FontReference Class. Serialized as `cs:fontRef` */
export class FontReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor | StyleColor> {

    public static override _Q = 'cs:fontRef';
    public static override _A = [':idx',':mods',];
    /** idx. Serialized as `:idx` */
    public get index(): FontCollectionIndexValues | undefined { return this._g(':idx'); }
    public set index(v: FontCollectionIndexValues | undefined) { this._s(':idx', v); }
    /** mods. Serialized as `:mods` */
    public get modifiers(): ListValue<StringValue> | undefined { return this._g(':mods'); }
    public set modifiers(v: ListValue<StringValue> | undefined) { this._s(':mods', v); }

}
/** Defines the LineWidthScale Class. Serialized as `cs:lineWidthScale` */
export class LineWidthScale extends OxmlLeafTextElement {

    public static override _Q = 'cs:lineWidthScale';

}
/** Defines the StyleReference Class. */
export abstract class StyleReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor | StyleColor> {

    public static override _A = [':idx',':mods',];
    /** idx. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** mods. Serialized as `:mods` */
    public get modifiers(): ListValue<StringValue> | undefined { return this._g(':mods'); }
    public set modifiers(v: ListValue<StringValue> | undefined) { this._s(':mods', v); }

}
/** Defines the EffectReference Class. Serialized as `cs:effectRef` */
export class EffectReference extends StyleReference {

    public static override _Q = 'cs:effectRef';

}
/** Defines the FillReference Class. Serialized as `cs:fillRef` */
export class FillReference extends StyleReference {

    public static override _Q = 'cs:fillRef';

}
/** Defines the LineReference Class. Serialized as `cs:lnRef` */
export class LineReference extends StyleReference {

    public static override _Q = 'cs:lnRef';

}
/** Defines the StyleColor Class. Serialized as `cs:styleClr` */
export class StyleColor extends OxmlCompositeElement<ATint | AShade | AComplement | AInverse | AGray | AAlpha | AAlphaOffset | AAlphaModulation | AHue | AHueOffset | AHueModulation | ASaturation | ASaturationOffset | ASaturationModulation | ALuminance | ALuminanceOffset | ALuminanceModulation | ARed | ARedOffset | ARedModulation | AGreen | AGreenOffset | AGreenModulation | ABlue | ABlueOffset | ABlueModulation | AGamma | AInverseGamma> {

    public static override _Q = 'cs:styleClr';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `cs:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'cs:extLst';

}
/** Defines the ColorStyleVariation Class. Serialized as `cs:variation` */
export class ColorStyleVariation extends OxmlCompositeElement<ATint | AShade | AComplement | AInverse | AGray | AAlpha | AAlphaOffset | AAlphaModulation | AHue | AHueOffset | AHueModulation | ASaturation | ASaturationOffset | ASaturationModulation | ALuminance | ALuminanceOffset | ALuminanceModulation | ARed | ARedOffset | ARedModulation | AGreen | AGreenOffset | AGreenModulation | ABlue | ABlueOffset | ABlueModulation | AGamma | AInverseGamma> {

    public static override _Q = 'cs:variation';

}
/** Defines the ChartStyle Class. Serialized as `cs:chartStyle` */
export class ChartStyle extends OxmlPartRootElement<AxisTitle | CategoryAxis | ChartArea | DataLabel | DataLabelCallout | DataPoint | DataPoint3D | DataPointLine | DataPointMarker | MarkerLayoutProperties | DataPointWireframe | DataTableStyle | DownBar | DropLine | ErrorBar | Floor | GridlineMajor | GridlineMinor | HiLoLine | LeaderLine | LegendStyle | PlotArea | PlotArea3D | SeriesAxis | SeriesLine | TitleStyle | TrendlineStyle | TrendlineLabel | UpBar | ValueAxis | Wall | OfficeArtExtensionList> {

    public static override _Q = 'cs:chartStyle';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Returns AxisTitle. */
    public get axisTitle(): AxisTitle | undefined { return this._f(AxisTitle); }
    /** Returns CategoryAxis. */
    public get categoryAxis(): CategoryAxis | undefined { return this._f(CategoryAxis); }
    /** Returns ChartArea. */
    public get chartArea(): ChartArea | undefined { return this._f(ChartArea); }
    /** Returns DataLabel. */
    public get dataLabel(): DataLabel | undefined { return this._f(DataLabel); }
    /** Returns DataLabelCallout. */
    public get dataLabelCallout(): DataLabelCallout | undefined { return this._f(DataLabelCallout); }
    /** Returns DataPoint. */
    public get dataPoint(): DataPoint | undefined { return this._f(DataPoint); }
    /** Returns DataPoint3D. */
    public get dataPoint3D(): DataPoint3D | undefined { return this._f(DataPoint3D); }
    /** Returns DataPointLine. */
    public get dataPointLine(): DataPointLine | undefined { return this._f(DataPointLine); }
    /** Returns DataPointMarker. */
    public get dataPointMarker(): DataPointMarker | undefined { return this._f(DataPointMarker); }
    /** Returns MarkerLayoutProperties. */
    public get markerLayoutProperties(): MarkerLayoutProperties | undefined { return this._f(MarkerLayoutProperties); }
    /** Returns DataPointWireframe. */
    public get dataPointWireframe(): DataPointWireframe | undefined { return this._f(DataPointWireframe); }
    /** Returns DataTableStyle. */
    public get dataTableStyle(): DataTableStyle | undefined { return this._f(DataTableStyle); }
    /** Returns DownBar. */
    public get downBar(): DownBar | undefined { return this._f(DownBar); }
    /** Returns DropLine. */
    public get dropLine(): DropLine | undefined { return this._f(DropLine); }
    /** Returns ErrorBar. */
    public get errorBar(): ErrorBar | undefined { return this._f(ErrorBar); }
    /** Returns Floor. */
    public get floor(): Floor | undefined { return this._f(Floor); }
    /** Returns GridlineMajor. */
    public get gridlineMajor(): GridlineMajor | undefined { return this._f(GridlineMajor); }
    /** Returns GridlineMinor. */
    public get gridlineMinor(): GridlineMinor | undefined { return this._f(GridlineMinor); }
    /** Returns HiLoLine. */
    public get hiLoLine(): HiLoLine | undefined { return this._f(HiLoLine); }
    /** Returns LeaderLine. */
    public get leaderLine(): LeaderLine | undefined { return this._f(LeaderLine); }
    /** Returns LegendStyle. */
    public get legendStyle(): LegendStyle | undefined { return this._f(LegendStyle); }
    /** Returns PlotArea. */
    public get plotArea(): PlotArea | undefined { return this._f(PlotArea); }
    /** Returns PlotArea3D. */
    public get plotArea3D(): PlotArea3D | undefined { return this._f(PlotArea3D); }
    /** Returns SeriesAxis. */
    public get seriesAxis(): SeriesAxis | undefined { return this._f(SeriesAxis); }
    /** Returns SeriesLine. */
    public get seriesLine(): SeriesLine | undefined { return this._f(SeriesLine); }
    /** Returns TitleStyle. */
    public get titleStyle(): TitleStyle | undefined { return this._f(TitleStyle); }
    /** Returns TrendlineStyle. */
    public get trendlineStyle(): TrendlineStyle | undefined { return this._f(TrendlineStyle); }
    /** Returns TrendlineLabel. */
    public get trendlineLabel(): TrendlineLabel | undefined { return this._f(TrendlineLabel); }
    /** Returns UpBar. */
    public get upBar(): UpBar | undefined { return this._f(UpBar); }
    /** Returns ValueAxis. */
    public get valueAxis(): ValueAxis | undefined { return this._f(ValueAxis); }
    /** Returns Wall. */
    public get wall(): Wall | undefined { return this._f(Wall); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the ColorStyle Class. Serialized as `cs:colorStyle` */
export class ColorStyle extends OxmlPartRootElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor | ColorStyleVariation | OfficeArtExtensionList> {

    public static override _Q = 'cs:colorStyle';
    public static override _A = [':meth',':id',];
    /** meth. Serialized as `:meth` */
    public get method(): StringValue | undefined { return this._g(':meth'); }
    public set method(v: StringValue | undefined) { this._s(':meth', v); }
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }

}

export function initOffice2013DrawingChartStyleNamespace() {
    MarkerLayoutProperties._D = {
        ':symbol': new OxmlAttr(':symbol', OxmlType.EnumValue, MarkerStyleArray),
        ':size': new OxmlAttr(':size', OxmlType.ByteValue),
    };
    StyleEntry._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    StyleEntry._D = {
        ':mods': new OxmlAttr(':mods', OxmlType.ListValue),
    };
    Wall._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    ValueAxis._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    UpBar._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    TrendlineLabel._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    TrendlineStyle._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    TitleStyle._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    SeriesLine._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    SeriesAxis._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    PlotArea3D._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    PlotArea._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    LegendStyle._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    LeaderLine._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    HiLoLine._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    GridlineMinor._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    GridlineMajor._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    Floor._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    ErrorBar._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DropLine._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DownBar._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataTableStyle._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataPointWireframe._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataPointMarker._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataPointLine._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataPoint3D._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataPoint._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataLabelCallout._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    DataLabel._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    ChartArea._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    CategoryAxis._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    AxisTitle._C = {
        'cs:lnRef': LineReference,
        'cs:lineWidthScale': LineWidthScale,
        'cs:fillRef': FillReference,
        'cs:effectRef': EffectReference,
        'cs:fontRef': FontReference,
        'cs:spPr': ShapeProperties,
        'cs:defRPr': TextCharacterPropertiesType,
        'cs:bodyPr': TextBodyProperties,
        'cs:extLst': OfficeArtExtensionList,
    };
    View3DProperties._D = {
        ':rotX': new OxmlAttr(':rotX', OxmlType.SByteValue),
        ':rotY': new OxmlAttr(':rotY', OxmlType.UInt16Value),
        ':rAngAx': new OxmlAttr(':rAngAx', OxmlType.EnumValue, BooleanArray),
        ':perspective': new OxmlAttr(':perspective', OxmlType.ByteValue),
        ':heightPercent': new OxmlAttr(':heightPercent', OxmlType.UInt16Value),
        ':depthPercent': new OxmlAttr(':depthPercent', OxmlType.UInt16Value),
    };
    Trendline._D = {
        ':add': new OxmlAttr(':add', OxmlType.EnumValue, BooleanArray),
        ':equation': new OxmlAttr(':equation', OxmlType.EnumValue, BooleanArray),
        ':rsquared': new OxmlAttr(':rsquared', OxmlType.EnumValue, BooleanArray),
    };
    Title._D = {
        ':position': new OxmlAttr(':position', OxmlType.EnumValue, TitlePositionArray),
    };
    Legend._D = {
        ':visible': new OxmlAttr(':visible', OxmlType.EnumValue, BooleanArray),
        ':includeInLayout': new OxmlAttr(':includeInLayout', OxmlType.EnumValue, BooleanArray),
        ':position': new OxmlAttr(':position', OxmlType.EnumValue, LegendPositionArray),
    };
    DataTable._D = {
        ':legendKeys': new OxmlAttr(':legendKeys', OxmlType.EnumValue, BooleanArray),
        ':horizontalBorder': new OxmlAttr(':horizontalBorder', OxmlType.EnumValue, BooleanArray),
        ':verticalBorder': new OxmlAttr(':verticalBorder', OxmlType.EnumValue, BooleanArray),
        ':outlineBorder': new OxmlAttr(':outlineBorder', OxmlType.EnumValue, BooleanArray),
    };
    DataLabels._D = {
        ':position': new OxmlAttr(':position', OxmlType.EnumValue, DataLabelsPositionArray),
        ':value': new OxmlAttr(':value', OxmlType.EnumValue, BooleanArray),
        ':seriesName': new OxmlAttr(':seriesName', OxmlType.EnumValue, BooleanArray),
        ':categoryName': new OxmlAttr(':categoryName', OxmlType.EnumValue, BooleanArray),
        ':legendKey': new OxmlAttr(':legendKey', OxmlType.EnumValue, BooleanArray),
        ':percentage': new OxmlAttr(':percentage', OxmlType.EnumValue, BooleanArray),
    };
    DataSeries._D = {
        ':overlap': new OxmlAttr(':overlap', OxmlType.SByteValue),
        ':gapWidth': new OxmlAttr(':gapWidth', OxmlType.UInt16Value),
        ':gapDepth': new OxmlAttr(':gapDepth', OxmlType.UInt16Value),
        ':doughnutHoleSize': new OxmlAttr(':doughnutHoleSize', OxmlType.ByteValue),
        ':markerVisible': new OxmlAttr(':markerVisible', OxmlType.EnumValue, BooleanArray),
        ':hiloLines': new OxmlAttr(':hiloLines', OxmlType.EnumValue, BooleanArray),
        ':dropLines': new OxmlAttr(':dropLines', OxmlType.EnumValue, BooleanArray),
        ':seriesLines': new OxmlAttr(':seriesLines', OxmlType.EnumValue, BooleanArray),
    };
    AxisProperties._D = {
        ':visible': new OxmlAttr(':visible', OxmlType.EnumValue, BooleanArray),
        ':majorTick': new OxmlAttr(':majorTick', OxmlType.EnumValue, TickMarkNinchArray),
        ':minorTick': new OxmlAttr(':minorTick', OxmlType.EnumValue, TickMarkNinchArray),
        ':labelPosition': new OxmlAttr(':labelPosition', OxmlType.EnumValue, TickLabelPositionNinchArray),
        ':majorGridlines': new OxmlAttr(':majorGridlines', OxmlType.EnumValue, BooleanArray),
        ':minorGridlines': new OxmlAttr(':minorGridlines', OxmlType.EnumValue, BooleanArray),
        ':title': new OxmlAttr(':title', OxmlType.EnumValue, BooleanArray),
    };
    TextBodyProperties._C = {
        'a:prstTxWarp': APresetTextWrap,
        'a:noAutofit': ANoAutoFit,
        'a:normAutofit': ANormalAutoFit,
        'a:spAutoFit': AShapeAutoFit,
        'a:scene3d': AScene3DType,
        'a:sp3d': AShape3DType,
        'a:flatTx': AFlatText,
        'a:extLst': AExtensionList,
    };
    TextBodyProperties._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':spcFirstLastPara': new OxmlAttr(':spcFirstLastPara', OxmlType.BooleanValue),
        ':vertOverflow': new OxmlAttr(':vertOverflow', OxmlType.EnumValue, TextVerticalOverflowValuesArray),
        ':horzOverflow': new OxmlAttr(':horzOverflow', OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
        ':vert': new OxmlAttr(':vert', OxmlType.EnumValue, TextVerticalValuesArray),
        ':wrap': new OxmlAttr(':wrap', OxmlType.EnumValue, TextWrappingValuesArray),
        ':lIns': new OxmlAttr(':lIns', OxmlType.Int32Value),
        ':tIns': new OxmlAttr(':tIns', OxmlType.Int32Value),
        ':rIns': new OxmlAttr(':rIns', OxmlType.Int32Value),
        ':bIns': new OxmlAttr(':bIns', OxmlType.Int32Value),
        ':numCol': new OxmlAttr(':numCol', OxmlType.Int32Value),
        ':spcCol': new OxmlAttr(':spcCol', OxmlType.Int32Value),
        ':rtlCol': new OxmlAttr(':rtlCol', OxmlType.BooleanValue),
        ':fromWordArt': new OxmlAttr(':fromWordArt', OxmlType.BooleanValue),
        ':anchor': new OxmlAttr(':anchor', OxmlType.EnumValue, TextAnchoringTypeValuesArray),
        ':anchorCtr': new OxmlAttr(':anchorCtr', OxmlType.BooleanValue),
        ':forceAA': new OxmlAttr(':forceAA', OxmlType.BooleanValue),
        ':upright': new OxmlAttr(':upright', OxmlType.BooleanValue),
        ':compatLnSpc': new OxmlAttr(':compatLnSpc', OxmlType.BooleanValue),
    };
    TextCharacterPropertiesType._C = {
        'a:ln': AOutline,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:highlight': AHighlight,
        'a:uLnTx': AUnderlineFollowsText,
        'a:uLn': AUnderline,
        'a:uFillTx': AUnderlineFillText,
        'a:uFill': AUnderlineFill,
        'a:latin': ALatinFont,
        'a:ea': AEastAsianFont,
        'a:cs': AComplexScriptFont,
        'a:sym': ASymbolFont,
        'a:hlinkClick': AHyperlinkOnClick,
        'a:hlinkMouseOver': AHyperlinkOnMouseOver,
        'a:rtl': ARightToLeft,
        'a:extLst': AExtensionList,
    };
    TextCharacterPropertiesType._D = {
        ':kumimoji': new OxmlAttr(':kumimoji', OxmlType.BooleanValue),
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':altLang': new OxmlAttr(':altLang', OxmlType.StringValue),
        ':sz': new OxmlAttr(':sz', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':u': new OxmlAttr(':u', OxmlType.EnumValue, TextUnderlineValuesArray),
        ':strike': new OxmlAttr(':strike', OxmlType.EnumValue, TextStrikeValuesArray),
        ':kern': new OxmlAttr(':kern', OxmlType.Int32Value),
        ':cap': new OxmlAttr(':cap', OxmlType.EnumValue, TextCapsValuesArray),
        ':spc': new OxmlAttr(':spc', OxmlType.Int32Value),
        ':normalizeH': new OxmlAttr(':normalizeH', OxmlType.BooleanValue),
        ':baseline': new OxmlAttr(':baseline', OxmlType.Int32Value),
        ':noProof': new OxmlAttr(':noProof', OxmlType.BooleanValue),
        ':dirty': new OxmlAttr(':dirty', OxmlType.BooleanValue),
        ':err': new OxmlAttr(':err', OxmlType.BooleanValue),
        ':smtClean': new OxmlAttr(':smtClean', OxmlType.BooleanValue),
        ':smtId': new OxmlAttr(':smtId', OxmlType.UInt32Value),
        ':bmk': new OxmlAttr(':bmk', OxmlType.StringValue),
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
    FontReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
        'cs:styleClr': StyleColor,
    };
    FontReference._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.EnumValue, FontCollectionIndexValuesArray),
        ':mods': new OxmlAttr(':mods', OxmlType.ListValue),
    };
    StyleReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
        'cs:styleClr': StyleColor,
    };
    StyleReference._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
        ':mods': new OxmlAttr(':mods', OxmlType.ListValue),
    };
    EffectReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
        'cs:styleClr': StyleColor,
    };
    FillReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
        'cs:styleClr': StyleColor,
    };
    LineReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
        'cs:styleClr': StyleColor,
    };
    StyleColor._C = {
        'a:tint': ATint,
        'a:shade': AShade,
        'a:comp': AComplement,
        'a:inv': AInverse,
        'a:gray': AGray,
        'a:alpha': AAlpha,
        'a:alphaOff': AAlphaOffset,
        'a:alphaMod': AAlphaModulation,
        'a:hue': AHue,
        'a:hueOff': AHueOffset,
        'a:hueMod': AHueModulation,
        'a:sat': ASaturation,
        'a:satOff': ASaturationOffset,
        'a:satMod': ASaturationModulation,
        'a:lum': ALuminance,
        'a:lumOff': ALuminanceOffset,
        'a:lumMod': ALuminanceModulation,
        'a:red': ARed,
        'a:redOff': ARedOffset,
        'a:redMod': ARedModulation,
        'a:green': AGreen,
        'a:greenOff': AGreenOffset,
        'a:greenMod': AGreenModulation,
        'a:blue': ABlue,
        'a:blueOff': ABlueOffset,
        'a:blueMod': ABlueModulation,
        'a:gamma': AGamma,
        'a:invGamma': AInverseGamma,
    };
    StyleColor._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    ColorStyleVariation._C = {
        'a:tint': ATint,
        'a:shade': AShade,
        'a:comp': AComplement,
        'a:inv': AInverse,
        'a:gray': AGray,
        'a:alpha': AAlpha,
        'a:alphaOff': AAlphaOffset,
        'a:alphaMod': AAlphaModulation,
        'a:hue': AHue,
        'a:hueOff': AHueOffset,
        'a:hueMod': AHueModulation,
        'a:sat': ASaturation,
        'a:satOff': ASaturationOffset,
        'a:satMod': ASaturationModulation,
        'a:lum': ALuminance,
        'a:lumOff': ALuminanceOffset,
        'a:lumMod': ALuminanceModulation,
        'a:red': ARed,
        'a:redOff': ARedOffset,
        'a:redMod': ARedModulation,
        'a:green': AGreen,
        'a:greenOff': AGreenOffset,
        'a:greenMod': AGreenModulation,
        'a:blue': ABlue,
        'a:blueOff': ABlueOffset,
        'a:blueMod': ABlueModulation,
        'a:gamma': AGamma,
        'a:invGamma': AInverseGamma,
    };
    ChartStyle._C = {
        'cs:axisTitle': AxisTitle,
        'cs:categoryAxis': CategoryAxis,
        'cs:chartArea': ChartArea,
        'cs:dataLabel': DataLabel,
        'cs:dataLabelCallout': DataLabelCallout,
        'cs:dataPoint': DataPoint,
        'cs:dataPoint3D': DataPoint3D,
        'cs:dataPointLine': DataPointLine,
        'cs:dataPointMarker': DataPointMarker,
        'cs:dataPointMarkerLayout': MarkerLayoutProperties,
        'cs:dataPointWireframe': DataPointWireframe,
        'cs:dataTable': DataTableStyle,
        'cs:downBar': DownBar,
        'cs:dropLine': DropLine,
        'cs:errorBar': ErrorBar,
        'cs:floor': Floor,
        'cs:gridlineMajor': GridlineMajor,
        'cs:gridlineMinor': GridlineMinor,
        'cs:hiLoLine': HiLoLine,
        'cs:leaderLine': LeaderLine,
        'cs:legend': LegendStyle,
        'cs:plotArea': PlotArea,
        'cs:plotArea3D': PlotArea3D,
        'cs:seriesAxis': SeriesAxis,
        'cs:seriesLine': SeriesLine,
        'cs:title': TitleStyle,
        'cs:trendline': TrendlineStyle,
        'cs:trendlineLabel': TrendlineLabel,
        'cs:upBar': UpBar,
        'cs:valueAxis': ValueAxis,
        'cs:wall': Wall,
        'cs:extLst': OfficeArtExtensionList,
    };
    ChartStyle._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
    };
    ColorStyle._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
        'cs:variation': ColorStyleVariation,
        'cs:extLst': OfficeArtExtensionList,
    };
    ColorStyle._D = {
        ':meth': new OxmlAttr(':meth', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
    };
    return {
        prefix: 'cs',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2012/chartStyle',
    };
}
