import { OxmlPartRootElement } from '../../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { ByteValue } from '../../../../framework/types/ByteValue';
import { ListValue } from '../../../../framework/types/ListValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { SByteValue } from '../../../../framework/types/SByteValue';
import { UInt16Value } from '../../../../framework/types/UInt16Value';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { TextVerticalOverflowValues } from '../../../Drawing';
import { TextHorizontalOverflowValues } from '../../../Drawing';
import { TextVerticalValues } from '../../../Drawing';
import { TextWrappingValues } from '../../../Drawing';
import { TextAnchoringTypeValues } from '../../../Drawing';
import { TextUnderlineValues } from '../../../Drawing';
import { TextStrikeValues } from '../../../Drawing';
import { TextCapsValues } from '../../../Drawing';
import { BlackWhiteModeValues } from '../../../Drawing';
import { FontCollectionIndexValues } from '../../../Drawing';
import { PresetTextWrap as APresetTextWrap } from '../../../Drawing';
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
export declare enum ColorStyleMethodEnum {
    /** undefined. Serialized value: `cycle` */
    Cycle = "cycle",
    /** undefined. Serialized value: `withinLinear` */
    WithinLinear = "withinLinear",
    /** undefined. Serialized value: `acrossLinear` */
    AcrossLinear = "acrossLinear",
    /** undefined. Serialized value: `withinLinearReversed` */
    WithinLinearReversed = "withinLinearReversed",
    /** undefined. Serialized value: `acrossLinearReversed` */
    AcrossLinearReversed = "acrossLinearReversed"
}
export declare const ColorStyleMethodEnumArray: readonly [ColorStyleMethodEnum.Cycle, ColorStyleMethodEnum.WithinLinear, ColorStyleMethodEnum.AcrossLinear, ColorStyleMethodEnum.WithinLinearReversed, ColorStyleMethodEnum.AcrossLinearReversed];
export declare enum StyleReferenceModifierEnum {
    /** undefined. Serialized value: `ignoreCSTransforms` */
    IgnoreCSTransforms = "ignoreCSTransforms"
}
export declare const StyleReferenceModifierEnumArray: readonly [StyleReferenceModifierEnum];
export declare enum StyleColorEnum {
    /** undefined. Serialized value: `auto` */
    Automatic = "auto"
}
export declare const StyleColorEnumArray: readonly [StyleColorEnum];
export declare enum StyleEntryModifierEnum {
    /** undefined. Serialized value: `allowNoFillOverride` */
    AllowNoFillOverride = "allowNoFillOverride",
    /** undefined. Serialized value: `allowNoLineOverride` */
    AllowNoLineOverride = "allowNoLineOverride"
}
export declare const StyleEntryModifierEnumArray: readonly [StyleEntryModifierEnum.AllowNoFillOverride, StyleEntryModifierEnum.AllowNoLineOverride];
export declare enum MarkerStyle {
    /** undefined. Serialized value: `circle` */
    Circle = "circle",
    /** undefined. Serialized value: `dash` */
    Dash = "dash",
    /** undefined. Serialized value: `diamond` */
    Diamond = "diamond",
    /** undefined. Serialized value: `dot` */
    Dot = "dot",
    /** undefined. Serialized value: `plus` */
    Plus = "plus",
    /** undefined. Serialized value: `square` */
    Square = "square",
    /** undefined. Serialized value: `star` */
    Star = "star",
    /** undefined. Serialized value: `triangle` */
    Triangle = "triangle",
    /** undefined. Serialized value: `x` */
    X = "x"
}
export declare const MarkerStyleArray: readonly [MarkerStyle.Circle, MarkerStyle.Dash, MarkerStyle.Diamond, MarkerStyle.Dot, MarkerStyle.Plus, MarkerStyle.Square, MarkerStyle.Star, MarkerStyle.Triangle, MarkerStyle.X];
export declare enum Boolean {
    /** undefined. Serialized value: `false` */
    False = "false",
    /** undefined. Serialized value: `true` */
    True = "true",
    /** undefined. Serialized value: `ninch` */
    Ninch = "ninch"
}
export declare const BooleanArray: readonly [Boolean.False, Boolean.True, Boolean.Ninch];
export declare enum TickMarkNinch {
    /** undefined. Serialized value: `cross` */
    Cross = "cross",
    /** undefined. Serialized value: `inside` */
    Inside = "inside",
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `outside` */
    Outside = "outside",
    /** undefined. Serialized value: `ninch` */
    Ninch = "ninch"
}
export declare const TickMarkNinchArray: readonly [TickMarkNinch.Cross, TickMarkNinch.Inside, TickMarkNinch.None, TickMarkNinch.Outside, TickMarkNinch.Ninch];
export declare enum TickLabelPositionNinch {
    /** undefined. Serialized value: `high` */
    High = "high",
    /** undefined. Serialized value: `low` */
    Low = "low",
    /** undefined. Serialized value: `nextToAxis` */
    NextToAxis = "nextToAxis",
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `ninch` */
    Ninch = "ninch"
}
export declare const TickLabelPositionNinchArray: readonly [TickLabelPositionNinch.High, TickLabelPositionNinch.Low, TickLabelPositionNinch.NextToAxis, TickLabelPositionNinch.None, TickLabelPositionNinch.Ninch];
export declare enum DataLabelsPosition {
    /** undefined. Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `insideEnd` */
    InsideEnd = "insideEnd",
    /** undefined. Serialized value: `insideBase` */
    InsideBase = "insideBase",
    /** undefined. Serialized value: `outsideEnd` */
    OutsideEnd = "outsideEnd",
    /** undefined. Serialized value: `ninch` */
    Ninch = "ninch"
}
export declare const DataLabelsPositionArray: readonly [DataLabelsPosition.Center, DataLabelsPosition.InsideEnd, DataLabelsPosition.InsideBase, DataLabelsPosition.OutsideEnd, DataLabelsPosition.Ninch];
export declare enum LegendPosition {
    /** undefined. Serialized value: `right` */
    Right = "right",
    /** undefined. Serialized value: `top` */
    Top = "top",
    /** undefined. Serialized value: `left` */
    Left = "left",
    /** undefined. Serialized value: `bottom` */
    Bottom = "bottom",
    /** undefined. Serialized value: `ninch` */
    Ninch = "ninch"
}
export declare const LegendPositionArray: readonly [LegendPosition.Right, LegendPosition.Top, LegendPosition.Left, LegendPosition.Bottom, LegendPosition.Ninch];
export declare enum TitlePosition {
    /** undefined. Serialized value: `above` */
    Above = "above",
    /** undefined. Serialized value: `overlay` */
    Overlay = "overlay",
    /** undefined. Serialized value: `off` */
    Off = "off",
    /** undefined. Serialized value: `ninch` */
    Ninch = "ninch"
}
export declare const TitlePositionArray: readonly [TitlePosition.Above, TitlePosition.Overlay, TitlePosition.Off, TitlePosition.Ninch];
/** Defines the MarkerLayoutProperties Class. Serialized as `cs:dataPointMarkerLayout` */
export declare class MarkerLayoutProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** symbol. Serialized as `:symbol` */
    get symbol(): MarkerStyle | undefined;
    set symbol(v: MarkerStyle | undefined);
    /** size. Serialized as `:size` */
    get size(): ByteValue | undefined;
    set size(v: ByteValue | undefined);
}
/** Defines the StyleEntry Class. */
export declare abstract class StyleEntry extends OxmlCompositeElement<LineReference | LineWidthScale | FillReference | EffectReference | FontReference | ShapeProperties | TextCharacterPropertiesType | TextBodyProperties | OfficeArtExtensionList> {
    static _A: string[];
    /** mods. Serialized as `:mods` */
    get modifiers(): ListValue<StringValue> | undefined;
    set modifiers(v: ListValue<StringValue> | undefined);
    /** Returns LineReference. */
    get lineReference(): LineReference | undefined;
    /** Returns LineWidthScale. */
    get lineWidthScale(): LineWidthScale | undefined;
    /** Returns FillReference. */
    get fillReference(): FillReference | undefined;
    /** Returns EffectReference. */
    get effectReference(): EffectReference | undefined;
    /** Returns FontReference. */
    get fontReference(): FontReference | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns TextCharacterPropertiesType. */
    get textCharacterPropertiesType(): TextCharacterPropertiesType | undefined;
    /** Returns TextBodyProperties. */
    get textBodyProperties(): TextBodyProperties | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the Wall Class. Serialized as `cs:wall` */
export declare class Wall extends StyleEntry {
    static _Q: string;
}
/** Defines the ValueAxis Class. Serialized as `cs:valueAxis` */
export declare class ValueAxis extends StyleEntry {
    static _Q: string;
}
/** Defines the UpBar Class. Serialized as `cs:upBar` */
export declare class UpBar extends StyleEntry {
    static _Q: string;
}
/** Defines the TrendlineLabel Class. Serialized as `cs:trendlineLabel` */
export declare class TrendlineLabel extends StyleEntry {
    static _Q: string;
}
/** Defines the TrendlineStyle Class. Serialized as `cs:trendline` */
export declare class TrendlineStyle extends StyleEntry {
    static _Q: string;
}
/** Defines the TitleStyle Class. Serialized as `cs:title` */
export declare class TitleStyle extends StyleEntry {
    static _Q: string;
}
/** Defines the SeriesLine Class. Serialized as `cs:seriesLine` */
export declare class SeriesLine extends StyleEntry {
    static _Q: string;
}
/** Defines the SeriesAxis Class. Serialized as `cs:seriesAxis` */
export declare class SeriesAxis extends StyleEntry {
    static _Q: string;
}
/** Defines the PlotArea3D Class. Serialized as `cs:plotArea3D` */
export declare class PlotArea3D extends StyleEntry {
    static _Q: string;
}
/** Defines the PlotArea Class. Serialized as `cs:plotArea` */
export declare class PlotArea extends StyleEntry {
    static _Q: string;
}
/** Defines the LegendStyle Class. Serialized as `cs:legend` */
export declare class LegendStyle extends StyleEntry {
    static _Q: string;
}
/** Defines the LeaderLine Class. Serialized as `cs:leaderLine` */
export declare class LeaderLine extends StyleEntry {
    static _Q: string;
}
/** Defines the HiLoLine Class. Serialized as `cs:hiLoLine` */
export declare class HiLoLine extends StyleEntry {
    static _Q: string;
}
/** Defines the GridlineMinor Class. Serialized as `cs:gridlineMinor` */
export declare class GridlineMinor extends StyleEntry {
    static _Q: string;
}
/** Defines the GridlineMajor Class. Serialized as `cs:gridlineMajor` */
export declare class GridlineMajor extends StyleEntry {
    static _Q: string;
}
/** Defines the Floor Class. Serialized as `cs:floor` */
export declare class Floor extends StyleEntry {
    static _Q: string;
}
/** Defines the ErrorBar Class. Serialized as `cs:errorBar` */
export declare class ErrorBar extends StyleEntry {
    static _Q: string;
}
/** Defines the DropLine Class. Serialized as `cs:dropLine` */
export declare class DropLine extends StyleEntry {
    static _Q: string;
}
/** Defines the DownBar Class. Serialized as `cs:downBar` */
export declare class DownBar extends StyleEntry {
    static _Q: string;
}
/** Defines the DataTableStyle Class. Serialized as `cs:dataTable` */
export declare class DataTableStyle extends StyleEntry {
    static _Q: string;
}
/** Defines the DataPointWireframe Class. Serialized as `cs:dataPointWireframe` */
export declare class DataPointWireframe extends StyleEntry {
    static _Q: string;
}
/** Defines the DataPointMarker Class. Serialized as `cs:dataPointMarker` */
export declare class DataPointMarker extends StyleEntry {
    static _Q: string;
}
/** Defines the DataPointLine Class. Serialized as `cs:dataPointLine` */
export declare class DataPointLine extends StyleEntry {
    static _Q: string;
}
/** Defines the DataPoint3D Class. Serialized as `cs:dataPoint3D` */
export declare class DataPoint3D extends StyleEntry {
    static _Q: string;
}
/** Defines the DataPoint Class. Serialized as `cs:dataPoint` */
export declare class DataPoint extends StyleEntry {
    static _Q: string;
}
/** Defines the DataLabelCallout Class. Serialized as `cs:dataLabelCallout` */
export declare class DataLabelCallout extends StyleEntry {
    static _Q: string;
}
/** Defines the DataLabel Class. Serialized as `cs:dataLabel` */
export declare class DataLabel extends StyleEntry {
    static _Q: string;
}
/** Defines the ChartArea Class. Serialized as `cs:chartArea` */
export declare class ChartArea extends StyleEntry {
    static _Q: string;
}
/** Defines the CategoryAxis Class. Serialized as `cs:categoryAxis` */
export declare class CategoryAxis extends StyleEntry {
    static _Q: string;
}
/** Defines the AxisTitle Class. Serialized as `cs:axisTitle` */
export declare class AxisTitle extends StyleEntry {
    static _Q: string;
}
/** Defines the View3DProperties Class. Serialized as `cs:view3D` */
export declare class View3DProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** rotX. Serialized as `:rotX` */
    get rotX(): SByteValue | undefined;
    set rotX(v: SByteValue | undefined);
    /** rotY. Serialized as `:rotY` */
    get rotY(): UInt16Value | undefined;
    set rotY(v: UInt16Value | undefined);
    /** rAngAx. Serialized as `:rAngAx` */
    get rightAngleAxes(): Boolean | undefined;
    set rightAngleAxes(v: Boolean | undefined);
    /** perspective. Serialized as `:perspective` */
    get perspective(): ByteValue | undefined;
    set perspective(v: ByteValue | undefined);
    /** heightPercent. Serialized as `:heightPercent` */
    get heightPercent(): UInt16Value | undefined;
    set heightPercent(v: UInt16Value | undefined);
    /** depthPercent. Serialized as `:depthPercent` */
    get depthPercent(): UInt16Value | undefined;
    set depthPercent(v: UInt16Value | undefined);
}
/** Defines the Trendline Class. Serialized as `cs:trendline` */
export declare class Trendline extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** add. Serialized as `:add` */
    get add(): Boolean | undefined;
    set add(v: Boolean | undefined);
    /** equation. Serialized as `:equation` */
    get equation(): Boolean | undefined;
    set equation(v: Boolean | undefined);
    /** rsquared. Serialized as `:rsquared` */
    get rSquared(): Boolean | undefined;
    set rSquared(v: Boolean | undefined);
}
/** Defines the Title Class. Serialized as `cs:title` */
export declare class Title extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** position. Serialized as `:position` */
    get position(): TitlePosition | undefined;
    set position(v: TitlePosition | undefined);
}
/** Defines the Legend Class. Serialized as `cs:legend` */
export declare class Legend extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** visible. Serialized as `:visible` */
    get visible(): Boolean | undefined;
    set visible(v: Boolean | undefined);
    /** includeInLayout. Serialized as `:includeInLayout` */
    get includeInLayout(): Boolean | undefined;
    set includeInLayout(v: Boolean | undefined);
    /** position. Serialized as `:position` */
    get position(): LegendPosition | undefined;
    set position(v: LegendPosition | undefined);
}
/** Defines the DataTable Class. Serialized as `cs:dataTable` */
export declare class DataTable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** legendKeys. Serialized as `:legendKeys` */
    get legendKeys(): Boolean | undefined;
    set legendKeys(v: Boolean | undefined);
    /** horizontalBorder. Serialized as `:horizontalBorder` */
    get horizontalBorder(): Boolean | undefined;
    set horizontalBorder(v: Boolean | undefined);
    /** verticalBorder. Serialized as `:verticalBorder` */
    get verticalBorder(): Boolean | undefined;
    set verticalBorder(v: Boolean | undefined);
    /** outlineBorder. Serialized as `:outlineBorder` */
    get outlineBorder(): Boolean | undefined;
    set outlineBorder(v: Boolean | undefined);
}
/** Defines the DataLabels Class. Serialized as `cs:dataLabels` */
export declare class DataLabels extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** position. Serialized as `:position` */
    get position(): DataLabelsPosition | undefined;
    set position(v: DataLabelsPosition | undefined);
    /** value. Serialized as `:value` */
    get value(): Boolean | undefined;
    set value(v: Boolean | undefined);
    /** seriesName. Serialized as `:seriesName` */
    get seriesName(): Boolean | undefined;
    set seriesName(v: Boolean | undefined);
    /** categoryName. Serialized as `:categoryName` */
    get categoryName(): Boolean | undefined;
    set categoryName(v: Boolean | undefined);
    /** legendKey. Serialized as `:legendKey` */
    get legendKey(): Boolean | undefined;
    set legendKey(v: Boolean | undefined);
    /** percentage. Serialized as `:percentage` */
    get percentage(): Boolean | undefined;
    set percentage(v: Boolean | undefined);
}
/** Defines the DataSeries Class. Serialized as `cs:dataSeries` */
export declare class DataSeries extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** overlap. Serialized as `:overlap` */
    get overlap(): SByteValue | undefined;
    set overlap(v: SByteValue | undefined);
    /** gapWidth. Serialized as `:gapWidth` */
    get gapWidth(): UInt16Value | undefined;
    set gapWidth(v: UInt16Value | undefined);
    /** gapDepth. Serialized as `:gapDepth` */
    get gapDepth(): UInt16Value | undefined;
    set gapDepth(v: UInt16Value | undefined);
    /** doughnutHoleSize. Serialized as `:doughnutHoleSize` */
    get doughnutHoleSize(): ByteValue | undefined;
    set doughnutHoleSize(v: ByteValue | undefined);
    /** markerVisible. Serialized as `:markerVisible` */
    get markerVisible(): Boolean | undefined;
    set markerVisible(v: Boolean | undefined);
    /** hiloLines. Serialized as `:hiloLines` */
    get hiloLines(): Boolean | undefined;
    set hiloLines(v: Boolean | undefined);
    /** dropLines. Serialized as `:dropLines` */
    get dropLines(): Boolean | undefined;
    set dropLines(v: Boolean | undefined);
    /** seriesLines. Serialized as `:seriesLines` */
    get seriesLines(): Boolean | undefined;
    set seriesLines(v: Boolean | undefined);
}
/** Defines the AxisProperties Class. */
export declare abstract class AxisProperties extends OxmlLeafElement {
    static _A: string[];
    /** visible. Serialized as `:visible` */
    get visible(): Boolean | undefined;
    set visible(v: Boolean | undefined);
    /** majorTick. Serialized as `:majorTick` */
    get majorTick(): TickMarkNinch | undefined;
    set majorTick(v: TickMarkNinch | undefined);
    /** minorTick. Serialized as `:minorTick` */
    get minorTickProp(): TickMarkNinch | undefined;
    set minorTickProp(v: TickMarkNinch | undefined);
    /** labelPosition. Serialized as `:labelPosition` */
    get labelPosition(): TickLabelPositionNinch | undefined;
    set labelPosition(v: TickLabelPositionNinch | undefined);
    /** majorGridlines. Serialized as `:majorGridlines` */
    get majorGridlines(): Boolean | undefined;
    set majorGridlines(v: Boolean | undefined);
    /** minorGridlines. Serialized as `:minorGridlines` */
    get minorGridlinesProp(): Boolean | undefined;
    set minorGridlinesProp(v: Boolean | undefined);
    /** title. Serialized as `:title` */
    get titleProp(): Boolean | undefined;
    set titleProp(v: Boolean | undefined);
}
/** Defines the ValueAxisProperties Class. Serialized as `cs:valueAxis` */
export declare class ValueAxisProperties extends AxisProperties {
    static _Q: string;
}
/** Defines the SeriesAxisProperties Class. Serialized as `cs:seriesAxis` */
export declare class SeriesAxisProperties extends AxisProperties {
    static _Q: string;
}
/** Defines the CategoryAxisProperties Class. Serialized as `cs:categoryAxis` */
export declare class CategoryAxisProperties extends AxisProperties {
    static _Q: string;
}
/** Defines the TextBodyProperties Class. Serialized as `cs:bodyPr` */
export declare class TextBodyProperties extends OxmlCompositeElement<APresetTextWrap | ANoAutoFit | ANormalAutoFit | AShapeAutoFit | AScene3DType | AShape3DType | AFlatText | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
    get useParagraphSpacing(): BooleanValue | undefined;
    set useParagraphSpacing(v: BooleanValue | undefined);
    /** Text Vertical Overflow. Serialized as `:vertOverflow` */
    get verticalOverflow(): TextVerticalOverflowValues | undefined;
    set verticalOverflow(v: TextVerticalOverflowValues | undefined);
    /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
    get horizontalOverflow(): TextHorizontalOverflowValues | undefined;
    set horizontalOverflow(v: TextHorizontalOverflowValues | undefined);
    /** Vertical Text. Serialized as `:vert` */
    get vertical(): TextVerticalValues | undefined;
    set vertical(v: TextVerticalValues | undefined);
    /** Text Wrapping Type. Serialized as `:wrap` */
    get wrap(): TextWrappingValues | undefined;
    set wrap(v: TextWrappingValues | undefined);
    /** Left Inset. Serialized as `:lIns` */
    get leftInset(): Int32Value | undefined;
    set leftInset(v: Int32Value | undefined);
    /** Top Inset. Serialized as `:tIns` */
    get topInset(): Int32Value | undefined;
    set topInset(v: Int32Value | undefined);
    /** Right Inset. Serialized as `:rIns` */
    get rightInset(): Int32Value | undefined;
    set rightInset(v: Int32Value | undefined);
    /** Bottom Inset. Serialized as `:bIns` */
    get bottomInset(): Int32Value | undefined;
    set bottomInset(v: Int32Value | undefined);
    /** Number of Columns. Serialized as `:numCol` */
    get columnCount(): Int32Value | undefined;
    set columnCount(v: Int32Value | undefined);
    /** Space Between Columns. Serialized as `:spcCol` */
    get columnSpacing(): Int32Value | undefined;
    set columnSpacing(v: Int32Value | undefined);
    /** Columns Right-To-Left. Serialized as `:rtlCol` */
    get rightToLeftColumns(): BooleanValue | undefined;
    set rightToLeftColumns(v: BooleanValue | undefined);
    /** From WordArt. Serialized as `:fromWordArt` */
    get fromWordArt(): BooleanValue | undefined;
    set fromWordArt(v: BooleanValue | undefined);
    /** Anchor. Serialized as `:anchor` */
    get anchor(): TextAnchoringTypeValues | undefined;
    set anchor(v: TextAnchoringTypeValues | undefined);
    /** Anchor Center. Serialized as `:anchorCtr` */
    get anchorCenter(): BooleanValue | undefined;
    set anchorCenter(v: BooleanValue | undefined);
    /** Force Anti-Alias. Serialized as `:forceAA` */
    get forceAntiAlias(): BooleanValue | undefined;
    set forceAntiAlias(v: BooleanValue | undefined);
    /** Text Upright. Serialized as `:upright` */
    get upRight(): BooleanValue | undefined;
    set upRight(v: BooleanValue | undefined);
    /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
    get compatibleLineSpacing(): BooleanValue | undefined;
    set compatibleLineSpacing(v: BooleanValue | undefined);
    /** Preset Text Shape. */
    get presetTextWrap(): APresetTextWrap | undefined;
}
/** Defines the TextCharacterPropertiesType Class. Serialized as `cs:defRPr` */
export declare class TextCharacterPropertiesType extends OxmlCompositeElement<AOutline | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AHighlight | AUnderlineFollowsText | AUnderline | AUnderlineFillText | AUnderlineFill | ALatinFont | AEastAsianFont | AComplexScriptFont | ASymbolFont | AHyperlinkOnClick | AHyperlinkOnMouseOver | ARightToLeft | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** kumimoji. Serialized as `:kumimoji` */
    get kumimoji(): BooleanValue | undefined;
    set kumimoji(v: BooleanValue | undefined);
    /** lang. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** altLang. Serialized as `:altLang` */
    get alternativeLanguage(): StringValue | undefined;
    set alternativeLanguage(v: StringValue | undefined);
    /** sz. Serialized as `:sz` */
    get fontSize(): Int32Value | undefined;
    set fontSize(v: Int32Value | undefined);
    /** b. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
    /** i. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** u. Serialized as `:u` */
    get underline(): TextUnderlineValues | undefined;
    set underline(v: TextUnderlineValues | undefined);
    /** strike. Serialized as `:strike` */
    get strike(): TextStrikeValues | undefined;
    set strike(v: TextStrikeValues | undefined);
    /** kern. Serialized as `:kern` */
    get kerning(): Int32Value | undefined;
    set kerning(v: Int32Value | undefined);
    /** cap. Serialized as `:cap` */
    get capital(): TextCapsValues | undefined;
    set capital(v: TextCapsValues | undefined);
    /** spc. Serialized as `:spc` */
    get spacing(): Int32Value | undefined;
    set spacing(v: Int32Value | undefined);
    /** normalizeH. Serialized as `:normalizeH` */
    get normalizeHeight(): BooleanValue | undefined;
    set normalizeHeight(v: BooleanValue | undefined);
    /** baseline. Serialized as `:baseline` */
    get baseline(): Int32Value | undefined;
    set baseline(v: Int32Value | undefined);
    /** noProof. Serialized as `:noProof` */
    get noProof(): BooleanValue | undefined;
    set noProof(v: BooleanValue | undefined);
    /** dirty. Serialized as `:dirty` */
    get dirty(): BooleanValue | undefined;
    set dirty(v: BooleanValue | undefined);
    /** err. Serialized as `:err` */
    get spellingError(): BooleanValue | undefined;
    set spellingError(v: BooleanValue | undefined);
    /** smtClean. Serialized as `:smtClean` */
    get smartTagClean(): BooleanValue | undefined;
    set smartTagClean(v: BooleanValue | undefined);
    /** smtId. Serialized as `:smtId` */
    get smartTagId(): UInt32Value | undefined;
    set smartTagId(v: UInt32Value | undefined);
    /** bmk. Serialized as `:bmk` */
    get bookmark(): StringValue | undefined;
    set bookmark(v: StringValue | undefined);
    /** Returns AOutline. */
    get outline(): AOutline | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `cs:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the FontReference Class. Serialized as `cs:fontRef` */
export declare class FontReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor | StyleColor> {
    static _Q: string;
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get index(): FontCollectionIndexValues | undefined;
    set index(v: FontCollectionIndexValues | undefined);
    /** mods. Serialized as `:mods` */
    get modifiers(): ListValue<StringValue> | undefined;
    set modifiers(v: ListValue<StringValue> | undefined);
}
/** Defines the LineWidthScale Class. Serialized as `cs:lineWidthScale` */
export declare class LineWidthScale extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the StyleReference Class. */
export declare abstract class StyleReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor | StyleColor> {
    static _A: string[];
    /** idx. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** mods. Serialized as `:mods` */
    get modifiers(): ListValue<StringValue> | undefined;
    set modifiers(v: ListValue<StringValue> | undefined);
}
/** Defines the EffectReference Class. Serialized as `cs:effectRef` */
export declare class EffectReference extends StyleReference {
    static _Q: string;
}
/** Defines the FillReference Class. Serialized as `cs:fillRef` */
export declare class FillReference extends StyleReference {
    static _Q: string;
}
/** Defines the LineReference Class. Serialized as `cs:lnRef` */
export declare class LineReference extends StyleReference {
    static _Q: string;
}
/** Defines the StyleColor Class. Serialized as `cs:styleClr` */
export declare class StyleColor extends OxmlCompositeElement<ATint | AShade | AComplement | AInverse | AGray | AAlpha | AAlphaOffset | AAlphaModulation | AHue | AHueOffset | AHueModulation | ASaturation | ASaturationOffset | ASaturationModulation | ALuminance | ALuminanceOffset | ALuminanceModulation | ARed | ARedOffset | ARedModulation | AGreen | AGreenOffset | AGreenModulation | ABlue | ABlueOffset | ABlueModulation | AGamma | AInverseGamma> {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the OfficeArtExtensionList Class. Serialized as `cs:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the ColorStyleVariation Class. Serialized as `cs:variation` */
export declare class ColorStyleVariation extends OxmlCompositeElement<ATint | AShade | AComplement | AInverse | AGray | AAlpha | AAlphaOffset | AAlphaModulation | AHue | AHueOffset | AHueModulation | ASaturation | ASaturationOffset | ASaturationModulation | ALuminance | ALuminanceOffset | ALuminanceModulation | ARed | ARedOffset | ARedModulation | AGreen | AGreenOffset | AGreenModulation | ABlue | ABlueOffset | ABlueModulation | AGamma | AInverseGamma> {
    static _Q: string;
}
/** Defines the ChartStyle Class. Serialized as `cs:chartStyle` */
export declare class ChartStyle extends OxmlPartRootElement<AxisTitle | CategoryAxis | ChartArea | DataLabel | DataLabelCallout | DataPoint | DataPoint3D | DataPointLine | DataPointMarker | MarkerLayoutProperties | DataPointWireframe | DataTableStyle | DownBar | DropLine | ErrorBar | Floor | GridlineMajor | GridlineMinor | HiLoLine | LeaderLine | LegendStyle | PlotArea | PlotArea3D | SeriesAxis | SeriesLine | TitleStyle | TrendlineStyle | TrendlineLabel | UpBar | ValueAxis | Wall | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Returns AxisTitle. */
    get axisTitle(): AxisTitle | undefined;
    /** Returns CategoryAxis. */
    get categoryAxis(): CategoryAxis | undefined;
    /** Returns ChartArea. */
    get chartArea(): ChartArea | undefined;
    /** Returns DataLabel. */
    get dataLabel(): DataLabel | undefined;
    /** Returns DataLabelCallout. */
    get dataLabelCallout(): DataLabelCallout | undefined;
    /** Returns DataPoint. */
    get dataPoint(): DataPoint | undefined;
    /** Returns DataPoint3D. */
    get dataPoint3D(): DataPoint3D | undefined;
    /** Returns DataPointLine. */
    get dataPointLine(): DataPointLine | undefined;
    /** Returns DataPointMarker. */
    get dataPointMarker(): DataPointMarker | undefined;
    /** Returns MarkerLayoutProperties. */
    get markerLayoutProperties(): MarkerLayoutProperties | undefined;
    /** Returns DataPointWireframe. */
    get dataPointWireframe(): DataPointWireframe | undefined;
    /** Returns DataTableStyle. */
    get dataTableStyle(): DataTableStyle | undefined;
    /** Returns DownBar. */
    get downBar(): DownBar | undefined;
    /** Returns DropLine. */
    get dropLine(): DropLine | undefined;
    /** Returns ErrorBar. */
    get errorBar(): ErrorBar | undefined;
    /** Returns Floor. */
    get floor(): Floor | undefined;
    /** Returns GridlineMajor. */
    get gridlineMajor(): GridlineMajor | undefined;
    /** Returns GridlineMinor. */
    get gridlineMinor(): GridlineMinor | undefined;
    /** Returns HiLoLine. */
    get hiLoLine(): HiLoLine | undefined;
    /** Returns LeaderLine. */
    get leaderLine(): LeaderLine | undefined;
    /** Returns LegendStyle. */
    get legendStyle(): LegendStyle | undefined;
    /** Returns PlotArea. */
    get plotArea(): PlotArea | undefined;
    /** Returns PlotArea3D. */
    get plotArea3D(): PlotArea3D | undefined;
    /** Returns SeriesAxis. */
    get seriesAxis(): SeriesAxis | undefined;
    /** Returns SeriesLine. */
    get seriesLine(): SeriesLine | undefined;
    /** Returns TitleStyle. */
    get titleStyle(): TitleStyle | undefined;
    /** Returns TrendlineStyle. */
    get trendlineStyle(): TrendlineStyle | undefined;
    /** Returns TrendlineLabel. */
    get trendlineLabel(): TrendlineLabel | undefined;
    /** Returns UpBar. */
    get upBar(): UpBar | undefined;
    /** Returns ValueAxis. */
    get valueAxis(): ValueAxis | undefined;
    /** Returns Wall. */
    get wall(): Wall | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the ColorStyle Class. Serialized as `cs:colorStyle` */
export declare class ColorStyle extends OxmlPartRootElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor | ColorStyleVariation | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** meth. Serialized as `:meth` */
    get method(): StringValue | undefined;
    set method(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
}
export declare function initOffice2013DrawingChartStyleNamespace(): {
    prefix: string;
    xmlns: string;
};
