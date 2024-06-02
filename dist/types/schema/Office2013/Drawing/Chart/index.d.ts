import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { BlackWhiteModeValues } from '../../../Drawing';
import { Index as CIndex } from '../../../Drawing/Charts';
import { Delete as CDelete } from '../../../Drawing/Charts';
import { Layout as CLayout } from '../../../Drawing/Charts';
import { ChartText as CChartText } from '../../../Drawing/Charts';
import { NumberingFormat as CNumberingFormat } from '../../../Drawing/Charts';
import { ChartShapeProperties as CChartShapeProperties } from '../../../Drawing/Charts';
import { TextProperties as CTextProperties } from '../../../Drawing/Charts';
import { DataLabelPosition as CDataLabelPosition } from '../../../Drawing/Charts';
import { ShowLegendKey as CShowLegendKey } from '../../../Drawing/Charts';
import { ShowValue as CShowValue } from '../../../Drawing/Charts';
import { ShowCategoryName as CShowCategoryName } from '../../../Drawing/Charts';
import { ShowSeriesName as CShowSeriesName } from '../../../Drawing/Charts';
import { ShowPercent as CShowPercent } from '../../../Drawing/Charts';
import { ShowBubbleSize as CShowBubbleSize } from '../../../Drawing/Charts';
import { Separator as CSeparator } from '../../../Drawing/Charts';
import { DLblExtensionList as CDLblExtensionList } from '../../../Drawing/Charts';
import { Symbol as CSymbol } from '../../../Drawing/Charts';
import { Size as CSize } from '../../../Drawing/Charts';
import { ExtensionList as CExtensionList } from '../../../Drawing/Charts';
import { PointCount as CPointCount } from '../../../Drawing/Charts';
import { StringPoint as CStringPoint } from '../../../Drawing/Charts';
import { StrDataExtensionList as CStrDataExtensionList } from '../../../Drawing/Charts';
import { Order as COrder } from '../../../Drawing/Charts';
import { SeriesText as CSeriesText } from '../../../Drawing/Charts';
import { PictureOptions as CPictureOptions } from '../../../Drawing/Charts';
import { CategoryAxisData as CCategoryAxisData } from '../../../Drawing/Charts';
import { Values as CValues } from '../../../Drawing/Charts';
import { Bubble3D as CBubble3D } from '../../../Drawing/Charts';
import { SurfaceSerExtensionList as CSurfaceSerExtensionList } from '../../../Drawing/Charts';
import { Marker as CMarker } from '../../../Drawing/Charts';
import { DataPoint as CDataPoint } from '../../../Drawing/Charts';
import { DataLabels as CDataLabels } from '../../../Drawing/Charts';
import { RadarSerExtensionList as CRadarSerExtensionList } from '../../../Drawing/Charts';
import { InvertIfNegative as CInvertIfNegative } from '../../../Drawing/Charts';
import { Trendline as CTrendline } from '../../../Drawing/Charts';
import { ErrorBars as CErrorBars } from '../../../Drawing/Charts';
import { XValues as CXValues } from '../../../Drawing/Charts';
import { YValues as CYValues } from '../../../Drawing/Charts';
import { BubbleSize as CBubbleSize } from '../../../Drawing/Charts';
import { BubbleSerExtensionList as CBubbleSerExtensionList } from '../../../Drawing/Charts';
import { Explosion as CExplosion } from '../../../Drawing/Charts';
import { PieSerExtensionList as CPieSerExtensionList } from '../../../Drawing/Charts';
import { AreaSerExtensionList as CAreaSerExtensionList } from '../../../Drawing/Charts';
import { Smooth as CSmooth } from '../../../Drawing/Charts';
import { ScatterSerExtensionList as CScatterSerExtensionList } from '../../../Drawing/Charts';
import { LineSerExtensionList as CLineSerExtensionList } from '../../../Drawing/Charts';
import { Shape as CShape } from '../../../Drawing/Charts';
import { BarSerExtensionList as CBarSerExtensionList } from '../../../Drawing/Charts';
import { MultiLevelStringReference as CMultiLevelStringReference } from '../../../Drawing/Charts';
import { NumberReference as CNumberReference } from '../../../Drawing/Charts';
import { NumberLiteral as CNumberLiteral } from '../../../Drawing/Charts';
import { StringReference as CStringReference } from '../../../Drawing/Charts';
import { StringLiteral as CStringLiteral } from '../../../Drawing/Charts';
import { RichText as CRichText } from '../../../Drawing/Charts';
import { ManualLayout as CManualLayout } from '../../../Drawing/Charts';
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
import { PivotTableName as CPivotTableName } from '../../../Drawing/Charts';
import { FormatId as CFormatId } from '../../../Drawing/Charts';
/** Defines the DataLabelFieldTableEntry Class. Serialized as `c15:dlblFTEntry` */
export declare class DataLabelFieldTableEntry extends OxmlCompositeElement<TextFieldGuid | Formula | DataLabelFieldTableCache> {
    static _Q: string;
    /** Returns TextFieldGuid. */
    get textFieldGuid(): TextFieldGuid | undefined;
    /** Returns Formula. */
    get formula(): Formula | undefined;
    /** Returns DataLabelFieldTableCache. */
    get dataLabelFieldTableCache(): DataLabelFieldTableCache | undefined;
}
/** Defines the CategoryFilterException Class. Serialized as `c15:categoryFilterException` */
export declare class CategoryFilterException extends OxmlCompositeElement<SequenceOfReferences | ShapeProperties | Explosion | InvertIfNegativeBoolean | Bubble3D | Marker | DataLabel> {
    static _Q: string;
    /** Returns SequenceOfReferences. */
    get sequenceOfReferences(): SequenceOfReferences | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns Explosion. */
    get explosion(): Explosion | undefined;
    /** Returns InvertIfNegativeBoolean. */
    get invertIfNegativeBoolean(): InvertIfNegativeBoolean | undefined;
    /** Returns Bubble3D. */
    get bubble3D(): Bubble3D | undefined;
    /** Returns Marker. */
    get marker(): Marker | undefined;
    /** Returns DataLabel. */
    get dataLabel(): DataLabel | undefined;
}
/** Defines the DataLabel Class. Serialized as `c15:dLbl` */
export declare class DataLabel extends OxmlCompositeElement<CIndex | CDelete | CLayout | CChartText | CNumberingFormat | CChartShapeProperties | CTextProperties | CDataLabelPosition | CShowLegendKey | CShowValue | CShowCategoryName | CShowSeriesName | CShowPercent | CShowBubbleSize | CSeparator | CDLblExtensionList> {
    static _Q: string;
    /** Returns CIndex. */
    get index(): CIndex | undefined;
}
/** Defines the Marker Class. Serialized as `c15:marker` */
export declare class Marker extends OxmlCompositeElement<CSymbol | CSize | CChartShapeProperties | CExtensionList> {
    static _Q: string;
    /** Symbol. */
    get symbol(): CSymbol | undefined;
    /** Size. */
    get size(): CSize | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Chart Extensibility. */
    get extensionList(): CExtensionList | undefined;
}
/** Defines the Explosion Class. Serialized as `c15:explosion` */
export declare class Explosion extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Integer Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the StringDataType Class. */
export declare abstract class StringDataType extends OxmlCompositeElement<CPointCount | CStringPoint | CStrDataExtensionList> {
    /** Returns CPointCount. */
    get pointCount(): CPointCount | undefined;
}
/** Defines the DataLabelFieldTableCache Class. Serialized as `c15:dlblFieldTableCache` */
export declare class DataLabelFieldTableCache extends StringDataType {
    static _Q: string;
}
/** Defines the DataLabelsRangeChache Class. Serialized as `c15:dlblRangeCache` */
export declare class DataLabelsRangeChache extends StringDataType {
    static _Q: string;
}
/** Defines the SurfaceChartSeries Class. Serialized as `c15:ser` */
export declare class SurfaceChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CCategoryAxisData | CValues | CBubble3D | CSurfaceSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
    /** Returns CCategoryAxisData. */
    get categoryAxisData(): CCategoryAxisData | undefined;
    /** Returns CValues. */
    get values(): CValues | undefined;
    /** Returns CBubble3D. */
    get bubble3D(): CBubble3D | undefined;
    /** Returns CSurfaceSerExtensionList. */
    get surfaceSerExtensionList(): CSurfaceSerExtensionList | undefined;
}
/** Defines the RadarChartSeries Class. Serialized as `c15:ser` */
export declare class RadarChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CMarker | CDataPoint | CDataLabels | CCategoryAxisData | CValues | CRadarSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
    /** Returns CMarker. */
    get marker(): CMarker | undefined;
}
/** Defines the BubbleChartSeries Class. Serialized as `c15:ser` */
export declare class BubbleChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CInvertIfNegative | CDataPoint | CDataLabels | CTrendline | CErrorBars | CXValues | CYValues | CBubbleSize | CBubble3D | CBubbleSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
    /** Returns CInvertIfNegative. */
    get invertIfNegative(): CInvertIfNegative | undefined;
}
/** Defines the PieChartSeries Class. Serialized as `c15:ser` */
export declare class PieChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CExplosion | CDataPoint | CDataLabels | CCategoryAxisData | CValues | CPieSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
    /** Returns CExplosion. */
    get explosion(): CExplosion | undefined;
}
/** Defines the AreaChartSeries Class. Serialized as `c15:ser` */
export declare class AreaChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CDataPoint | CDataLabels | CTrendline | CErrorBars | CCategoryAxisData | CValues | CAreaSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
}
/** Defines the ScatterChartSeries Class. Serialized as `c15:ser` */
export declare class ScatterChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CMarker | CDataPoint | CDataLabels | CTrendline | CErrorBars | CXValues | CYValues | CSmooth | CScatterSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CMarker. */
    get marker(): CMarker | undefined;
}
/** Defines the LineChartSeries Class. Serialized as `c15:ser` */
export declare class LineChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CMarker | CPictureOptions | CDataPoint | CDataLabels | CTrendline | CErrorBars | CCategoryAxisData | CValues | CSmooth | CLineSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CMarker. */
    get marker(): CMarker | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
}
/** Defines the BarChartSeries Class. Serialized as `c15:ser` */
export declare class BarChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CInvertIfNegative | CPictureOptions | CDataPoint | CDataLabels | CTrendline | CErrorBars | CCategoryAxisData | CValues | CShape | CBarSerExtensionList> {
    static _Q: string;
    /** Index. */
    get index(): CIndex | undefined;
    /** Order. */
    get order(): COrder | undefined;
    /** Series Text. */
    get seriesText(): CSeriesText | undefined;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
    /** Returns CInvertIfNegative. */
    get invertIfNegative(): CInvertIfNegative | undefined;
    /** Returns CPictureOptions. */
    get pictureOptions(): CPictureOptions | undefined;
}
/** Defines the AxisDataSourceType Class. Serialized as `c15:cat` */
export declare class AxisDataSourceType extends OxmlCompositeElement<CMultiLevelStringReference | CNumberReference | CNumberLiteral | CStringReference | CStringLiteral> {
    static _Q: string;
    /** Multi Level String Reference. */
    get multiLevelStringReference(): CMultiLevelStringReference | undefined;
    /** Number Reference. */
    get numberReference(): CNumberReference | undefined;
    /** Number Literal. */
    get numberLiteral(): CNumberLiteral | undefined;
    /** Returns CStringReference. */
    get stringReference(): CStringReference | undefined;
    /** String Literal. */
    get stringLiteral(): CStringLiteral | undefined;
}
/** Defines the TextFieldGuid Class. Serialized as `c15:txfldGUID` */
export declare class TextFieldGuid extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the Formula Class. Serialized as `c15:f` */
export declare class Formula extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the SequenceOfReferences Class. Serialized as `c15:sqref` */
export declare class SequenceOfReferences extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the LeaderLines Class. Serialized as `c15:leaderLines` */
export declare class LeaderLines extends OxmlCompositeElement<CChartShapeProperties> {
    static _Q: string;
    /** Returns CChartShapeProperties. */
    get chartShapeProperties(): CChartShapeProperties | undefined;
}
/** Defines the ChartText Class. Serialized as `c15:tx` */
export declare class ChartText extends OxmlCompositeElement<CStringReference | CRichText | CStringLiteral> {
    static _Q: string;
    /** String Reference. */
    get stringReference(): CStringReference | undefined;
    /** Rich Text. */
    get richText(): CRichText | undefined;
    /** String Literal. */
    get stringLiteral(): CStringLiteral | undefined;
}
/** Defines the BooleanType Class. */
export declare abstract class BooleanType extends OxmlLeafElement {
    static _A: string[];
    /** Boolean Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the Bubble3D Class. Serialized as `c15:bubble3D` */
export declare class Bubble3D extends BooleanType {
    static _Q: string;
}
/** Defines the InvertIfNegativeBoolean Class. Serialized as `c15:invertIfNegative` */
export declare class InvertIfNegativeBoolean extends BooleanType {
    static _Q: string;
}
/** Defines the AutoGeneneratedCategories Class. Serialized as `c15:autoCat` */
export declare class AutoGeneneratedCategories extends BooleanType {
    static _Q: string;
}
/** Defines the ShowLeaderLines Class. Serialized as `c15:showLeaderLines` */
export declare class ShowLeaderLines extends BooleanType {
    static _Q: string;
}
/** Defines the ShowDataLabelsRange Class. Serialized as `c15:showDataLabelsRange` */
export declare class ShowDataLabelsRange extends BooleanType {
    static _Q: string;
}
/** Defines the ExceptionForSave Class. Serialized as `c15:xForSave` */
export declare class ExceptionForSave extends BooleanType {
    static _Q: string;
}
/** Defines the DataLabelFieldTable Class. Serialized as `c15:dlblFieldTable` */
export declare class DataLabelFieldTable extends OxmlCompositeElement<DataLabelFieldTableEntry> {
    static _Q: string;
}
/** Defines the CategoryFilterExceptions Class. Serialized as `c15:categoryFilterExceptions` */
export declare class CategoryFilterExceptions extends OxmlCompositeElement<CategoryFilterException> {
    static _Q: string;
}
/** Defines the DataLabelsRange Class. Serialized as `c15:datalabelsRange` */
export declare class DataLabelsRange extends OxmlCompositeElement<Formula | DataLabelsRangeChache> {
    static _Q: string;
    /** Returns Formula. */
    get formula(): Formula | undefined;
    /** Returns DataLabelsRangeChache. */
    get dataLabelsRangeChache(): DataLabelsRangeChache | undefined;
}
/** Defines the FilteredSurfaceSeries Class. Serialized as `c15:filteredSurfaceSeries` */
export declare class FilteredSurfaceSeries extends OxmlCompositeElement<SurfaceChartSeries> {
    static _Q: string;
    /** Returns SurfaceChartSeries. */
    get surfaceChartSeries(): SurfaceChartSeries | undefined;
}
/** Defines the FilteredScatterSeries Class. Serialized as `c15:filteredScatterSeries` */
export declare class FilteredScatterSeries extends OxmlCompositeElement<ScatterChartSeries> {
    static _Q: string;
    /** Returns ScatterChartSeries. */
    get scatterChartSeries(): ScatterChartSeries | undefined;
}
/** Defines the FilteredRadarSeries Class. Serialized as `c15:filteredRadarSeries` */
export declare class FilteredRadarSeries extends OxmlCompositeElement<RadarChartSeries> {
    static _Q: string;
    /** Returns RadarChartSeries. */
    get radarChartSeries(): RadarChartSeries | undefined;
}
/** Defines the FilteredPieSeries Class. Serialized as `c15:filteredPieSeries` */
export declare class FilteredPieSeries extends OxmlCompositeElement<PieChartSeries> {
    static _Q: string;
    /** Returns PieChartSeries. */
    get pieChartSeries(): PieChartSeries | undefined;
}
/** Defines the FilteredLineSeriesExtension Class. Serialized as `c15:filteredLineSeries` */
export declare class FilteredLineSeriesExtension extends OxmlCompositeElement<LineChartSeries> {
    static _Q: string;
    /** Returns LineChartSeries. */
    get lineChartSeries(): LineChartSeries | undefined;
}
/** Defines the FilteredBubbleSeries Class. Serialized as `c15:filteredBubbleSeries` */
export declare class FilteredBubbleSeries extends OxmlCompositeElement<BubbleChartSeries> {
    static _Q: string;
    /** Returns BubbleChartSeries. */
    get bubbleChartSeries(): BubbleChartSeries | undefined;
}
/** Defines the FilteredBarSeries Class. Serialized as `c15:filteredBarSeries` */
export declare class FilteredBarSeries extends OxmlCompositeElement<BarChartSeries> {
    static _Q: string;
    /** Returns BarChartSeries. */
    get barChartSeries(): BarChartSeries | undefined;
}
/** Defines the FilteredAreaSeries Class. Serialized as `c15:filteredAreaSeries` */
export declare class FilteredAreaSeries extends OxmlCompositeElement<AreaChartSeries> {
    static _Q: string;
    /** Returns AreaChartSeries. */
    get areaChartSeries(): AreaChartSeries | undefined;
}
/** Defines the FilteredCategoryTitle Class. Serialized as `c15:filteredCategoryTitle` */
export declare class FilteredCategoryTitle extends OxmlCompositeElement<AxisDataSourceType> {
    static _Q: string;
    /** Returns AxisDataSourceType. */
    get axisDataSourceType(): AxisDataSourceType | undefined;
}
/** Defines the FilteredSeriesTitle Class. Serialized as `c15:filteredSeriesTitle` */
export declare class FilteredSeriesTitle extends OxmlCompositeElement<ChartText> {
    static _Q: string;
    /** Returns ChartText. */
    get chartText(): ChartText | undefined;
}
/** Defines the FormulaReference Class. Serialized as `c15:formulaRef` */
export declare class FormulaReference extends OxmlCompositeElement<SequenceOfReferences> {
    static _Q: string;
    /** Returns SequenceOfReferences. */
    get sequenceOfReferences(): SequenceOfReferences | undefined;
}
/** Defines the LevelReference Class. Serialized as `c15:levelRef` */
export declare class LevelReference extends OxmlCompositeElement<SequenceOfReferences> {
    static _Q: string;
    /** Returns SequenceOfReferences. */
    get sequenceOfReferences(): SequenceOfReferences | undefined;
}
/** Defines the FullReference Class. Serialized as `c15:fullRef` */
export declare class FullReference extends OxmlCompositeElement<SequenceOfReferences> {
    static _Q: string;
    /** Returns SequenceOfReferences. */
    get sequenceOfReferences(): SequenceOfReferences | undefined;
}
/** Defines the Layout Class. Serialized as `c15:layout` */
export declare class Layout extends OxmlCompositeElement<CManualLayout | CExtensionList> {
    static _Q: string;
    /** Manual Layout. */
    get manualLayout(): CManualLayout | undefined;
    /** Chart Extensibility. */
    get extensionList(): CExtensionList | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `c15:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the NumberingFormat Class. Serialized as `c15:numFmt` */
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
/** Defines the PivotSource Class. Serialized as `c15:pivotSource` */
export declare class PivotSource extends OxmlCompositeElement<CPivotTableName | CFormatId | CExtensionList> {
    static _Q: string;
    /** Pivot Name. */
    get pivotTableName(): CPivotTableName | undefined;
    /** Format ID. */
    get formatId(): CFormatId | undefined;
    /** Chart Extensibility. */
    get extensionList(): CExtensionList | undefined;
}
export declare function initOffice2013DrawingChartNamespace(): {
    prefix: string;
    xmlns: string;
};
