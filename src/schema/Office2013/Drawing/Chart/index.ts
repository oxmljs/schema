import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { Index as CIndex } from '../../../Drawing/Charts';
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
export class DataLabelFieldTableEntry extends OxmlCompositeElement<TextFieldGuid | Formula | DataLabelFieldTableCache> {

    public static override _Q = 'c15:dlblFTEntry';
    /** Returns TextFieldGuid. */
    public get textFieldGuid(): TextFieldGuid | undefined { return this._f(TextFieldGuid); }
    /** Returns Formula. */
    public get formula(): Formula | undefined { return this._f(Formula); }
    /** Returns DataLabelFieldTableCache. */
    public get dataLabelFieldTableCache(): DataLabelFieldTableCache | undefined { return this._f(DataLabelFieldTableCache); }

}
/** Defines the CategoryFilterException Class. Serialized as `c15:categoryFilterException` */
export class CategoryFilterException extends OxmlCompositeElement<SequenceOfReferences | ShapeProperties | Explosion | InvertIfNegativeBoolean | Bubble3D | Marker | DataLabel> {

    public static override _Q = 'c15:categoryFilterException';
    /** Returns SequenceOfReferences. */
    public get sequenceOfReferences(): SequenceOfReferences | undefined { return this._f(SequenceOfReferences); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns Explosion. */
    public get explosion(): Explosion | undefined { return this._f(Explosion); }
    /** Returns InvertIfNegativeBoolean. */
    public get invertIfNegativeBoolean(): InvertIfNegativeBoolean | undefined { return this._f(InvertIfNegativeBoolean); }
    /** Returns Bubble3D. */
    public get bubble3D(): Bubble3D | undefined { return this._f(Bubble3D); }
    /** Returns Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }
    /** Returns DataLabel. */
    public get dataLabel(): DataLabel | undefined { return this._f(DataLabel); }

}
/** Defines the DataLabel Class. Serialized as `c15:dLbl` */
export class DataLabel extends OxmlCompositeElement<CIndex | CDelete | CLayout | CChartText | CNumberingFormat | CChartShapeProperties | CTextProperties | CDataLabelPosition | CShowLegendKey | CShowValue | CShowCategoryName | CShowSeriesName | CShowPercent | CShowBubbleSize | CSeparator | CDLblExtensionList> {

    public static override _Q = 'c15:dLbl';
    /** Returns CIndex. */
    public get index(): CIndex | undefined { return this._f(CIndex); }

}
/** Defines the Marker Class. Serialized as `c15:marker` */
export class Marker extends OxmlCompositeElement<CSymbol | CSize | CChartShapeProperties | CExtensionList> {

    public static override _Q = 'c15:marker';
    /** Symbol. */
    public get symbol(): CSymbol | undefined { return this._f(CSymbol); }
    /** Size. */
    public get size(): CSize | undefined { return this._f(CSize); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Chart Extensibility. */
    public get extensionList(): CExtensionList | undefined { return this._f(CExtensionList); }

}
/** Defines the Explosion Class. Serialized as `c15:explosion` */
export class Explosion extends OxmlLeafElement {

    public static override _Q = 'c15:explosion';
    public static override _A = [':val',];
    /** Integer Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the StringDataType Class. */
export abstract class StringDataType extends OxmlCompositeElement<CPointCount | CStringPoint | CStrDataExtensionList> {

    /** Returns CPointCount. */
    public get pointCount(): CPointCount | undefined { return this._f(CPointCount); }

}
/** Defines the DataLabelFieldTableCache Class. Serialized as `c15:dlblFieldTableCache` */
export class DataLabelFieldTableCache extends StringDataType {

    public static override _Q = 'c15:dlblFieldTableCache';

}
/** Defines the DataLabelsRangeChache Class. Serialized as `c15:dlblRangeCache` */
export class DataLabelsRangeChache extends StringDataType {

    public static override _Q = 'c15:dlblRangeCache';

}
/** Defines the SurfaceChartSeries Class. Serialized as `c15:ser` */
export class SurfaceChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CCategoryAxisData | CValues | CBubble3D | CSurfaceSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }
    /** Returns CCategoryAxisData. */
    public get categoryAxisData(): CCategoryAxisData | undefined { return this._f(CCategoryAxisData); }
    /** Returns CValues. */
    public get values(): CValues | undefined { return this._f(CValues); }
    /** Returns CBubble3D. */
    public get bubble3D(): CBubble3D | undefined { return this._f(CBubble3D); }
    /** Returns CSurfaceSerExtensionList. */
    public get surfaceSerExtensionList(): CSurfaceSerExtensionList | undefined { return this._f(CSurfaceSerExtensionList); }

}
/** Defines the RadarChartSeries Class. Serialized as `c15:ser` */
export class RadarChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CMarker | CDataPoint | CDataLabels | CCategoryAxisData | CValues | CRadarSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }
    /** Returns CMarker. */
    public get marker(): CMarker | undefined { return this._f(CMarker); }

}
/** Defines the BubbleChartSeries Class. Serialized as `c15:ser` */
export class BubbleChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CInvertIfNegative | CDataPoint | CDataLabels | CTrendline | CErrorBars | CXValues | CYValues | CBubbleSize | CBubble3D | CBubbleSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }
    /** Returns CInvertIfNegative. */
    public get invertIfNegative(): CInvertIfNegative | undefined { return this._f(CInvertIfNegative); }

}
/** Defines the PieChartSeries Class. Serialized as `c15:ser` */
export class PieChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CExplosion | CDataPoint | CDataLabels | CCategoryAxisData | CValues | CPieSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }
    /** Returns CExplosion. */
    public get explosion(): CExplosion | undefined { return this._f(CExplosion); }

}
/** Defines the AreaChartSeries Class. Serialized as `c15:ser` */
export class AreaChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CPictureOptions | CDataPoint | CDataLabels | CTrendline | CErrorBars | CCategoryAxisData | CValues | CAreaSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }

}
/** Defines the ScatterChartSeries Class. Serialized as `c15:ser` */
export class ScatterChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CMarker | CDataPoint | CDataLabels | CTrendline | CErrorBars | CXValues | CYValues | CSmooth | CScatterSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CMarker. */
    public get marker(): CMarker | undefined { return this._f(CMarker); }

}
/** Defines the LineChartSeries Class. Serialized as `c15:ser` */
export class LineChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CMarker | CPictureOptions | CDataPoint | CDataLabels | CTrendline | CErrorBars | CCategoryAxisData | CValues | CSmooth | CLineSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CMarker. */
    public get marker(): CMarker | undefined { return this._f(CMarker); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }

}
/** Defines the BarChartSeries Class. Serialized as `c15:ser` */
export class BarChartSeries extends OxmlCompositeElement<CIndex | COrder | CSeriesText | CChartShapeProperties | CInvertIfNegative | CPictureOptions | CDataPoint | CDataLabels | CTrendline | CErrorBars | CCategoryAxisData | CValues | CShape | CBarSerExtensionList> {

    public static override _Q = 'c15:ser';
    /** Index. */
    public get index(): CIndex | undefined { return this._f(CIndex); }
    /** Order. */
    public get order(): COrder | undefined { return this._f(COrder); }
    /** Series Text. */
    public get seriesText(): CSeriesText | undefined { return this._f(CSeriesText); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Returns CInvertIfNegative. */
    public get invertIfNegative(): CInvertIfNegative | undefined { return this._f(CInvertIfNegative); }
    /** Returns CPictureOptions. */
    public get pictureOptions(): CPictureOptions | undefined { return this._f(CPictureOptions); }

}
/** Defines the AxisDataSourceType Class. Serialized as `c15:cat` */
export class AxisDataSourceType extends OxmlCompositeElement<CMultiLevelStringReference | CNumberReference | CNumberLiteral | CStringReference | CStringLiteral> {

    public static override _Q = 'c15:cat';
    /** Multi Level String Reference. */
    public get multiLevelStringReference(): CMultiLevelStringReference | undefined { return this._f(CMultiLevelStringReference); }
    /** Number Reference. */
    public get numberReference(): CNumberReference | undefined { return this._f(CNumberReference); }
    /** Number Literal. */
    public get numberLiteral(): CNumberLiteral | undefined { return this._f(CNumberLiteral); }
    /** Returns CStringReference. */
    public get stringReference(): CStringReference | undefined { return this._f(CStringReference); }
    /** String Literal. */
    public get stringLiteral(): CStringLiteral | undefined { return this._f(CStringLiteral); }

}
/** Defines the TextFieldGuid Class. Serialized as `c15:txfldGUID` */
export class TextFieldGuid extends OxmlLeafTextElement {

    public static override _Q = 'c15:txfldGUID';

}
/** Defines the Formula Class. Serialized as `c15:f` */
export class Formula extends OxmlLeafTextElement {

    public static override _Q = 'c15:f';

}
/** Defines the SequenceOfReferences Class. Serialized as `c15:sqref` */
export class SequenceOfReferences extends OxmlLeafTextElement {

    public static override _Q = 'c15:sqref';

}
/** Defines the LeaderLines Class. Serialized as `c15:leaderLines` */
export class LeaderLines extends OxmlCompositeElement<CChartShapeProperties> {

    public static override _Q = 'c15:leaderLines';
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }

}
/** Defines the ChartText Class. Serialized as `c15:tx` */
export class ChartText extends OxmlCompositeElement<CStringReference | CRichText | CStringLiteral> {

    public static override _Q = 'c15:tx';
    /** String Reference. */
    public get stringReference(): CStringReference | undefined { return this._f(CStringReference); }
    /** Rich Text. */
    public get richText(): CRichText | undefined { return this._f(CRichText); }
    /** String Literal. */
    public get stringLiteral(): CStringLiteral | undefined { return this._f(CStringLiteral); }

}
/** Defines the BooleanType Class. */
export abstract class BooleanType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Boolean Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the Bubble3D Class. Serialized as `c15:bubble3D` */
export class Bubble3D extends BooleanType {

    public static override _Q = 'c15:bubble3D';

}
/** Defines the InvertIfNegativeBoolean Class. Serialized as `c15:invertIfNegative` */
export class InvertIfNegativeBoolean extends BooleanType {

    public static override _Q = 'c15:invertIfNegative';

}
/** Defines the AutoGeneneratedCategories Class. Serialized as `c15:autoCat` */
export class AutoGeneneratedCategories extends BooleanType {

    public static override _Q = 'c15:autoCat';

}
/** Defines the ShowLeaderLines Class. Serialized as `c15:showLeaderLines` */
export class ShowLeaderLines extends BooleanType {

    public static override _Q = 'c15:showLeaderLines';

}
/** Defines the ShowDataLabelsRange Class. Serialized as `c15:showDataLabelsRange` */
export class ShowDataLabelsRange extends BooleanType {

    public static override _Q = 'c15:showDataLabelsRange';

}
/** Defines the ExceptionForSave Class. Serialized as `c15:xForSave` */
export class ExceptionForSave extends BooleanType {

    public static override _Q = 'c15:xForSave';

}
/** Defines the DataLabelFieldTable Class. Serialized as `c15:dlblFieldTable` */
export class DataLabelFieldTable extends OxmlCompositeElement<DataLabelFieldTableEntry> {

    public static override _Q = 'c15:dlblFieldTable';

}
/** Defines the CategoryFilterExceptions Class. Serialized as `c15:categoryFilterExceptions` */
export class CategoryFilterExceptions extends OxmlCompositeElement<CategoryFilterException> {

    public static override _Q = 'c15:categoryFilterExceptions';

}
/** Defines the DataLabelsRange Class. Serialized as `c15:datalabelsRange` */
export class DataLabelsRange extends OxmlCompositeElement<Formula | DataLabelsRangeChache> {

    public static override _Q = 'c15:datalabelsRange';
    /** Returns Formula. */
    public get formula(): Formula | undefined { return this._f(Formula); }
    /** Returns DataLabelsRangeChache. */
    public get dataLabelsRangeChache(): DataLabelsRangeChache | undefined { return this._f(DataLabelsRangeChache); }

}
/** Defines the FilteredSurfaceSeries Class. Serialized as `c15:filteredSurfaceSeries` */
export class FilteredSurfaceSeries extends OxmlCompositeElement<SurfaceChartSeries> {

    public static override _Q = 'c15:filteredSurfaceSeries';
    /** Returns SurfaceChartSeries. */
    public get surfaceChartSeries(): SurfaceChartSeries | undefined { return this._f(SurfaceChartSeries); }

}
/** Defines the FilteredScatterSeries Class. Serialized as `c15:filteredScatterSeries` */
export class FilteredScatterSeries extends OxmlCompositeElement<ScatterChartSeries> {

    public static override _Q = 'c15:filteredScatterSeries';
    /** Returns ScatterChartSeries. */
    public get scatterChartSeries(): ScatterChartSeries | undefined { return this._f(ScatterChartSeries); }

}
/** Defines the FilteredRadarSeries Class. Serialized as `c15:filteredRadarSeries` */
export class FilteredRadarSeries extends OxmlCompositeElement<RadarChartSeries> {

    public static override _Q = 'c15:filteredRadarSeries';
    /** Returns RadarChartSeries. */
    public get radarChartSeries(): RadarChartSeries | undefined { return this._f(RadarChartSeries); }

}
/** Defines the FilteredPieSeries Class. Serialized as `c15:filteredPieSeries` */
export class FilteredPieSeries extends OxmlCompositeElement<PieChartSeries> {

    public static override _Q = 'c15:filteredPieSeries';
    /** Returns PieChartSeries. */
    public get pieChartSeries(): PieChartSeries | undefined { return this._f(PieChartSeries); }

}
/** Defines the FilteredLineSeriesExtension Class. Serialized as `c15:filteredLineSeries` */
export class FilteredLineSeriesExtension extends OxmlCompositeElement<LineChartSeries> {

    public static override _Q = 'c15:filteredLineSeries';
    /** Returns LineChartSeries. */
    public get lineChartSeries(): LineChartSeries | undefined { return this._f(LineChartSeries); }

}
/** Defines the FilteredBubbleSeries Class. Serialized as `c15:filteredBubbleSeries` */
export class FilteredBubbleSeries extends OxmlCompositeElement<BubbleChartSeries> {

    public static override _Q = 'c15:filteredBubbleSeries';
    /** Returns BubbleChartSeries. */
    public get bubbleChartSeries(): BubbleChartSeries | undefined { return this._f(BubbleChartSeries); }

}
/** Defines the FilteredBarSeries Class. Serialized as `c15:filteredBarSeries` */
export class FilteredBarSeries extends OxmlCompositeElement<BarChartSeries> {

    public static override _Q = 'c15:filteredBarSeries';
    /** Returns BarChartSeries. */
    public get barChartSeries(): BarChartSeries | undefined { return this._f(BarChartSeries); }

}
/** Defines the FilteredAreaSeries Class. Serialized as `c15:filteredAreaSeries` */
export class FilteredAreaSeries extends OxmlCompositeElement<AreaChartSeries> {

    public static override _Q = 'c15:filteredAreaSeries';
    /** Returns AreaChartSeries. */
    public get areaChartSeries(): AreaChartSeries | undefined { return this._f(AreaChartSeries); }

}
/** Defines the FilteredCategoryTitle Class. Serialized as `c15:filteredCategoryTitle` */
export class FilteredCategoryTitle extends OxmlCompositeElement<AxisDataSourceType> {

    public static override _Q = 'c15:filteredCategoryTitle';
    /** Returns AxisDataSourceType. */
    public get axisDataSourceType(): AxisDataSourceType | undefined { return this._f(AxisDataSourceType); }

}
/** Defines the FilteredSeriesTitle Class. Serialized as `c15:filteredSeriesTitle` */
export class FilteredSeriesTitle extends OxmlCompositeElement<ChartText> {

    public static override _Q = 'c15:filteredSeriesTitle';
    /** Returns ChartText. */
    public get chartText(): ChartText | undefined { return this._f(ChartText); }

}
/** Defines the FormulaReference Class. Serialized as `c15:formulaRef` */
export class FormulaReference extends OxmlCompositeElement<SequenceOfReferences> {

    public static override _Q = 'c15:formulaRef';
    /** Returns SequenceOfReferences. */
    public get sequenceOfReferences(): SequenceOfReferences | undefined { return this._f(SequenceOfReferences); }

}
/** Defines the LevelReference Class. Serialized as `c15:levelRef` */
export class LevelReference extends OxmlCompositeElement<SequenceOfReferences> {

    public static override _Q = 'c15:levelRef';
    /** Returns SequenceOfReferences. */
    public get sequenceOfReferences(): SequenceOfReferences | undefined { return this._f(SequenceOfReferences); }

}
/** Defines the FullReference Class. Serialized as `c15:fullRef` */
export class FullReference extends OxmlCompositeElement<SequenceOfReferences> {

    public static override _Q = 'c15:fullRef';
    /** Returns SequenceOfReferences. */
    public get sequenceOfReferences(): SequenceOfReferences | undefined { return this._f(SequenceOfReferences); }

}
/** Defines the Layout Class. Serialized as `c15:layout` */
export class Layout extends OxmlCompositeElement<CManualLayout | CExtensionList> {

    public static override _Q = 'c15:layout';
    /** Manual Layout. */
    public get manualLayout(): CManualLayout | undefined { return this._f(CManualLayout); }
    /** Chart Extensibility. */
    public get extensionList(): CExtensionList | undefined { return this._f(CExtensionList); }

}
/** Defines the ShapeProperties Class. Serialized as `c15:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'c15:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the NumberingFormat Class. Serialized as `c15:numFmt` */
export class NumberingFormat extends OxmlLeafElement {

    public static override _Q = 'c15:numFmt';
    public static override _A = [':formatCode',':sourceLinked',];
    /** Number Format Code. Serialized as `:formatCode` */
    public get formatCode(): StringValue | undefined { return this._g(':formatCode'); }
    public set formatCode(v: StringValue | undefined) { this._s(':formatCode', v); }
    /** Linked to Source. Serialized as `:sourceLinked` */
    public get sourceLinked(): BooleanValue | undefined { return this._g(':sourceLinked'); }
    public set sourceLinked(v: BooleanValue | undefined) { this._s(':sourceLinked', v); }

}
/** Defines the PivotSource Class. Serialized as `c15:pivotSource` */
export class PivotSource extends OxmlCompositeElement<CPivotTableName | CFormatId | CExtensionList> {

    public static override _Q = 'c15:pivotSource';
    /** Pivot Name. */
    public get pivotTableName(): CPivotTableName | undefined { return this._f(CPivotTableName); }
    /** Format ID. */
    public get formatId(): CFormatId | undefined { return this._f(CFormatId); }
    /** Chart Extensibility. */
    public get extensionList(): CExtensionList | undefined { return this._f(CExtensionList); }

}

export function initOffice2013DrawingChartNamespace() {
    DataLabelFieldTableEntry._C = {
        'c15:txfldGUID': TextFieldGuid,
        'c15:f': Formula,
        'c15:dlblFieldTableCache': DataLabelFieldTableCache,
    };
    CategoryFilterException._C = {
        'c15:sqref': SequenceOfReferences,
        'c15:spPr': ShapeProperties,
        'c15:explosion': Explosion,
        'c15:invertIfNegative': InvertIfNegativeBoolean,
        'c15:bubble3D': Bubble3D,
        'c15:marker': Marker,
        'c15:dLbl': DataLabel,
    };
    DataLabel._C = {
        'c:idx': CIndex,
        'c:delete': CDelete,
        'c:layout': CLayout,
        'c:tx': CChartText,
        'c:numFmt': CNumberingFormat,
        'c:spPr': CChartShapeProperties,
        'c:txPr': CTextProperties,
        'c:dLblPos': CDataLabelPosition,
        'c:showLegendKey': CShowLegendKey,
        'c:showVal': CShowValue,
        'c:showCatName': CShowCategoryName,
        'c:showSerName': CShowSeriesName,
        'c:showPercent': CShowPercent,
        'c:showBubbleSize': CShowBubbleSize,
        'c:separator': CSeparator,
        'c:extLst': CDLblExtensionList,
    };
    Marker._C = {
        'c:symbol': CSymbol,
        'c:size': CSize,
        'c:spPr': CChartShapeProperties,
        'c:extLst': CExtensionList,
    };
    Explosion._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    StringDataType._C = {
        'c:ptCount': CPointCount,
        'c:pt': CStringPoint,
        'c:extLst': CStrDataExtensionList,
    };
    DataLabelFieldTableCache._C = {
        'c:ptCount': CPointCount,
        'c:pt': CStringPoint,
        'c:extLst': CStrDataExtensionList,
    };
    DataLabelsRangeChache._C = {
        'c:ptCount': CPointCount,
        'c:pt': CStringPoint,
        'c:extLst': CStrDataExtensionList,
    };
    SurfaceChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:pictureOptions': CPictureOptions,
        'c:cat': CCategoryAxisData,
        'c:val': CValues,
        'c:bubble3D': CBubble3D,
        'c:extLst': CSurfaceSerExtensionList,
    };
    RadarChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:pictureOptions': CPictureOptions,
        'c:marker': CMarker,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:cat': CCategoryAxisData,
        'c:val': CValues,
        'c:extLst': CRadarSerExtensionList,
    };
    BubbleChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:pictureOptions': CPictureOptions,
        'c:invertIfNegative': CInvertIfNegative,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:trendline': CTrendline,
        'c:errBars': CErrorBars,
        'c:xVal': CXValues,
        'c:yVal': CYValues,
        'c:bubbleSize': CBubbleSize,
        'c:bubble3D': CBubble3D,
        'c:extLst': CBubbleSerExtensionList,
    };
    PieChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:pictureOptions': CPictureOptions,
        'c:explosion': CExplosion,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:cat': CCategoryAxisData,
        'c:val': CValues,
        'c:extLst': CPieSerExtensionList,
    };
    AreaChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:pictureOptions': CPictureOptions,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:trendline': CTrendline,
        'c:errBars': CErrorBars,
        'c:cat': CCategoryAxisData,
        'c:val': CValues,
        'c:extLst': CAreaSerExtensionList,
    };
    ScatterChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:marker': CMarker,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:trendline': CTrendline,
        'c:errBars': CErrorBars,
        'c:xVal': CXValues,
        'c:yVal': CYValues,
        'c:smooth': CSmooth,
        'c:extLst': CScatterSerExtensionList,
    };
    LineChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:marker': CMarker,
        'c:pictureOptions': CPictureOptions,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:trendline': CTrendline,
        'c:errBars': CErrorBars,
        'c:cat': CCategoryAxisData,
        'c:val': CValues,
        'c:smooth': CSmooth,
        'c:extLst': CLineSerExtensionList,
    };
    BarChartSeries._C = {
        'c:idx': CIndex,
        'c:order': COrder,
        'c:tx': CSeriesText,
        'c:spPr': CChartShapeProperties,
        'c:invertIfNegative': CInvertIfNegative,
        'c:pictureOptions': CPictureOptions,
        'c:dPt': CDataPoint,
        'c:dLbls': CDataLabels,
        'c:trendline': CTrendline,
        'c:errBars': CErrorBars,
        'c:cat': CCategoryAxisData,
        'c:val': CValues,
        'c:shape': CShape,
        'c:extLst': CBarSerExtensionList,
    };
    AxisDataSourceType._C = {
        'c:multiLvlStrRef': CMultiLevelStringReference,
        'c:numRef': CNumberReference,
        'c:numLit': CNumberLiteral,
        'c:strRef': CStringReference,
        'c:strLit': CStringLiteral,
    };
    LeaderLines._C = {
        'c:spPr': CChartShapeProperties,
    };
    ChartText._C = {
        'c:strRef': CStringReference,
        'c:rich': CRichText,
        'c:strLit': CStringLiteral,
    };
    BooleanType._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    DataLabelFieldTable._C = {
        'c15:dlblFTEntry': DataLabelFieldTableEntry,
    };
    CategoryFilterExceptions._C = {
        'c15:categoryFilterException': CategoryFilterException,
    };
    DataLabelsRange._C = {
        'c15:f': Formula,
        'c15:dlblRangeCache': DataLabelsRangeChache,
    };
    FilteredSurfaceSeries._C = {
        'c15:ser': SurfaceChartSeries,
    };
    FilteredScatterSeries._C = {
        'c15:ser': ScatterChartSeries,
    };
    FilteredRadarSeries._C = {
        'c15:ser': RadarChartSeries,
    };
    FilteredPieSeries._C = {
        'c15:ser': PieChartSeries,
    };
    FilteredLineSeriesExtension._C = {
        'c15:ser': LineChartSeries,
    };
    FilteredBubbleSeries._C = {
        'c15:ser': BubbleChartSeries,
    };
    FilteredBarSeries._C = {
        'c15:ser': BarChartSeries,
    };
    FilteredAreaSeries._C = {
        'c15:ser': AreaChartSeries,
    };
    FilteredCategoryTitle._C = {
        'c15:cat': AxisDataSourceType,
    };
    FilteredSeriesTitle._C = {
        'c15:tx': ChartText,
    };
    FormulaReference._C = {
        'c15:sqref': SequenceOfReferences,
    };
    LevelReference._C = {
        'c15:sqref': SequenceOfReferences,
    };
    FullReference._C = {
        'c15:sqref': SequenceOfReferences,
    };
    Layout._C = {
        'c:manualLayout': CManualLayout,
        'c:extLst': CExtensionList,
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
    NumberingFormat._D = {
        ':formatCode': new OxmlAttr(':formatCode', OxmlType.StringValue),
        ':sourceLinked': new OxmlAttr(':sourceLinked', OxmlType.BooleanValue),
    };
    PivotSource._C = {
        'c:name': CPivotTableName,
        'c:fmtId': CFormatId,
        'c:extLst': CExtensionList,
    };
    return {
        prefix: 'c15',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2012/chart',
    };
}
