import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { Index as CIndex } from "../../../Drawing/Charts";
import { Delete as CDelete } from "../../../Drawing/Charts";
import { Layout as CLayout } from "../../../Drawing/Charts";
import { ChartText as CChartText } from "../../../Drawing/Charts";
import { NumberingFormat as CNumberingFormat } from "../../../Drawing/Charts";
import { ChartShapeProperties as CChartShapeProperties } from "../../../Drawing/Charts";
import { TextProperties as CTextProperties } from "../../../Drawing/Charts";
import { DataLabelPosition as CDataLabelPosition } from "../../../Drawing/Charts";
import { ShowLegendKey as CShowLegendKey } from "../../../Drawing/Charts";
import { ShowValue as CShowValue } from "../../../Drawing/Charts";
import { ShowCategoryName as CShowCategoryName } from "../../../Drawing/Charts";
import { ShowSeriesName as CShowSeriesName } from "../../../Drawing/Charts";
import { ShowPercent as CShowPercent } from "../../../Drawing/Charts";
import { ShowBubbleSize as CShowBubbleSize } from "../../../Drawing/Charts";
import { Separator as CSeparator } from "../../../Drawing/Charts";
import { DLblExtensionList as CDLblExtensionList } from "../../../Drawing/Charts";
import { Symbol as CSymbol } from "../../../Drawing/Charts";
import { Size as CSize } from "../../../Drawing/Charts";
import { ExtensionList as CExtensionList } from "../../../Drawing/Charts";
import { PointCount as CPointCount } from "../../../Drawing/Charts";
import { StringPoint as CStringPoint } from "../../../Drawing/Charts";
import { StrDataExtensionList as CStrDataExtensionList } from "../../../Drawing/Charts";
import { Order as COrder } from "../../../Drawing/Charts";
import { SeriesText as CSeriesText } from "../../../Drawing/Charts";
import { PictureOptions as CPictureOptions } from "../../../Drawing/Charts";
import { CategoryAxisData as CCategoryAxisData } from "../../../Drawing/Charts";
import { Values as CValues } from "../../../Drawing/Charts";
import { Bubble3D as CBubble3D } from "../../../Drawing/Charts";
import { SurfaceSerExtensionList as CSurfaceSerExtensionList } from "../../../Drawing/Charts";
import { Marker as CMarker } from "../../../Drawing/Charts";
import { DataPoint as CDataPoint } from "../../../Drawing/Charts";
import { DataLabels as CDataLabels } from "../../../Drawing/Charts";
import { RadarSerExtensionList as CRadarSerExtensionList } from "../../../Drawing/Charts";
import { InvertIfNegative as CInvertIfNegative } from "../../../Drawing/Charts";
import { Trendline as CTrendline } from "../../../Drawing/Charts";
import { ErrorBars as CErrorBars } from "../../../Drawing/Charts";
import { XValues as CXValues } from "../../../Drawing/Charts";
import { YValues as CYValues } from "../../../Drawing/Charts";
import { BubbleSize as CBubbleSize } from "../../../Drawing/Charts";
import { BubbleSerExtensionList as CBubbleSerExtensionList } from "../../../Drawing/Charts";
import { Explosion as CExplosion } from "../../../Drawing/Charts";
import { PieSerExtensionList as CPieSerExtensionList } from "../../../Drawing/Charts";
import { AreaSerExtensionList as CAreaSerExtensionList } from "../../../Drawing/Charts";
import { Smooth as CSmooth } from "../../../Drawing/Charts";
import { ScatterSerExtensionList as CScatterSerExtensionList } from "../../../Drawing/Charts";
import { LineSerExtensionList as CLineSerExtensionList } from "../../../Drawing/Charts";
import { Shape as CShape } from "../../../Drawing/Charts";
import { BarSerExtensionList as CBarSerExtensionList } from "../../../Drawing/Charts";
import { MultiLevelStringReference as CMultiLevelStringReference } from "../../../Drawing/Charts";
import { NumberReference as CNumberReference } from "../../../Drawing/Charts";
import { NumberLiteral as CNumberLiteral } from "../../../Drawing/Charts";
import { StringReference as CStringReference } from "../../../Drawing/Charts";
import { StringLiteral as CStringLiteral } from "../../../Drawing/Charts";
import { RichText as CRichText } from "../../../Drawing/Charts";
import { ManualLayout as CManualLayout } from "../../../Drawing/Charts";
import { Transform2D as ATransform2D } from "../../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../../Drawing";
import { NoFill as ANoFill } from "../../../Drawing";
import { SolidFill as ASolidFill } from "../../../Drawing";
import { GradientFill as AGradientFill } from "../../../Drawing";
import { BlipFill as ABlipFill } from "../../../Drawing";
import { PatternFill as APatternFill } from "../../../Drawing";
import { GroupFill as AGroupFill } from "../../../Drawing";
import { Outline as AOutline } from "../../../Drawing";
import { EffectList as AEffectList } from "../../../Drawing";
import { EffectDag as AEffectDag } from "../../../Drawing";
import { Scene3DType as AScene3DType } from "../../../Drawing";
import { Shape3DType as AShape3DType } from "../../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../../Drawing";
import { PivotTableName as CPivotTableName } from "../../../Drawing/Charts";
import { FormatId as CFormatId } from "../../../Drawing/Charts";
class DataLabelFieldTableEntry extends OxmlCompositeElement {
  static _Q = "c15:dlblFTEntry";
  /** Returns TextFieldGuid. */
  get textFieldGuid() {
    return this._f(TextFieldGuid);
  }
  /** Returns Formula. */
  get formula() {
    return this._f(Formula);
  }
  /** Returns DataLabelFieldTableCache. */
  get dataLabelFieldTableCache() {
    return this._f(DataLabelFieldTableCache);
  }
}
class CategoryFilterException extends OxmlCompositeElement {
  static _Q = "c15:categoryFilterException";
  /** Returns SequenceOfReferences. */
  get sequenceOfReferences() {
    return this._f(SequenceOfReferences);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns Explosion. */
  get explosion() {
    return this._f(Explosion);
  }
  /** Returns InvertIfNegativeBoolean. */
  get invertIfNegativeBoolean() {
    return this._f(InvertIfNegativeBoolean);
  }
  /** Returns Bubble3D. */
  get bubble3D() {
    return this._f(Bubble3D);
  }
  /** Returns Marker. */
  get marker() {
    return this._f(Marker);
  }
  /** Returns DataLabel. */
  get dataLabel() {
    return this._f(DataLabel);
  }
}
class DataLabel extends OxmlCompositeElement {
  static _Q = "c15:dLbl";
  /** Returns CIndex. */
  get index() {
    return this._f(CIndex);
  }
}
class Marker extends OxmlCompositeElement {
  static _Q = "c15:marker";
  /** Symbol. */
  get symbol() {
    return this._f(CSymbol);
  }
  /** Size. */
  get size() {
    return this._f(CSize);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(CExtensionList);
  }
}
class Explosion extends OxmlLeafElement {
  static _Q = "c15:explosion";
  static _A = [":val"];
  /** Integer Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class StringDataType extends OxmlCompositeElement {
  /** Returns CPointCount. */
  get pointCount() {
    return this._f(CPointCount);
  }
}
class DataLabelFieldTableCache extends StringDataType {
  static _Q = "c15:dlblFieldTableCache";
}
class DataLabelsRangeChache extends StringDataType {
  static _Q = "c15:dlblRangeCache";
}
class SurfaceChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
  /** Returns CCategoryAxisData. */
  get categoryAxisData() {
    return this._f(CCategoryAxisData);
  }
  /** Returns CValues. */
  get values() {
    return this._f(CValues);
  }
  /** Returns CBubble3D. */
  get bubble3D() {
    return this._f(CBubble3D);
  }
  /** Returns CSurfaceSerExtensionList. */
  get surfaceSerExtensionList() {
    return this._f(CSurfaceSerExtensionList);
  }
}
class RadarChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
  /** Returns CMarker. */
  get marker() {
    return this._f(CMarker);
  }
}
class BubbleChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
  /** Returns CInvertIfNegative. */
  get invertIfNegative() {
    return this._f(CInvertIfNegative);
  }
}
class PieChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
  /** Returns CExplosion. */
  get explosion() {
    return this._f(CExplosion);
  }
}
class AreaChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
}
class ScatterChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CMarker. */
  get marker() {
    return this._f(CMarker);
  }
}
class LineChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CMarker. */
  get marker() {
    return this._f(CMarker);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
}
class BarChartSeries extends OxmlCompositeElement {
  static _Q = "c15:ser";
  /** Index. */
  get index() {
    return this._f(CIndex);
  }
  /** Order. */
  get order() {
    return this._f(COrder);
  }
  /** Series Text. */
  get seriesText() {
    return this._f(CSeriesText);
  }
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
  /** Returns CInvertIfNegative. */
  get invertIfNegative() {
    return this._f(CInvertIfNegative);
  }
  /** Returns CPictureOptions. */
  get pictureOptions() {
    return this._f(CPictureOptions);
  }
}
class AxisDataSourceType extends OxmlCompositeElement {
  static _Q = "c15:cat";
  /** Multi Level String Reference. */
  get multiLevelStringReference() {
    return this._f(CMultiLevelStringReference);
  }
  /** Number Reference. */
  get numberReference() {
    return this._f(CNumberReference);
  }
  /** Number Literal. */
  get numberLiteral() {
    return this._f(CNumberLiteral);
  }
  /** Returns CStringReference. */
  get stringReference() {
    return this._f(CStringReference);
  }
  /** String Literal. */
  get stringLiteral() {
    return this._f(CStringLiteral);
  }
}
class TextFieldGuid extends OxmlLeafTextElement {
  static _Q = "c15:txfldGUID";
}
class Formula extends OxmlLeafTextElement {
  static _Q = "c15:f";
}
class SequenceOfReferences extends OxmlLeafTextElement {
  static _Q = "c15:sqref";
}
class LeaderLines extends OxmlCompositeElement {
  static _Q = "c15:leaderLines";
  /** Returns CChartShapeProperties. */
  get chartShapeProperties() {
    return this._f(CChartShapeProperties);
  }
}
class ChartText extends OxmlCompositeElement {
  static _Q = "c15:tx";
  /** String Reference. */
  get stringReference() {
    return this._f(CStringReference);
  }
  /** Rich Text. */
  get richText() {
    return this._f(CRichText);
  }
  /** String Literal. */
  get stringLiteral() {
    return this._f(CStringLiteral);
  }
}
class BooleanType extends OxmlLeafElement {
  static _A = [":val"];
  /** Boolean Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Bubble3D extends BooleanType {
  static _Q = "c15:bubble3D";
}
class InvertIfNegativeBoolean extends BooleanType {
  static _Q = "c15:invertIfNegative";
}
class AutoGeneneratedCategories extends BooleanType {
  static _Q = "c15:autoCat";
}
class ShowLeaderLines extends BooleanType {
  static _Q = "c15:showLeaderLines";
}
class ShowDataLabelsRange extends BooleanType {
  static _Q = "c15:showDataLabelsRange";
}
class ExceptionForSave extends BooleanType {
  static _Q = "c15:xForSave";
}
class DataLabelFieldTable extends OxmlCompositeElement {
  static _Q = "c15:dlblFieldTable";
}
class CategoryFilterExceptions extends OxmlCompositeElement {
  static _Q = "c15:categoryFilterExceptions";
}
class DataLabelsRange extends OxmlCompositeElement {
  static _Q = "c15:datalabelsRange";
  /** Returns Formula. */
  get formula() {
    return this._f(Formula);
  }
  /** Returns DataLabelsRangeChache. */
  get dataLabelsRangeChache() {
    return this._f(DataLabelsRangeChache);
  }
}
class FilteredSurfaceSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredSurfaceSeries";
  /** Returns SurfaceChartSeries. */
  get surfaceChartSeries() {
    return this._f(SurfaceChartSeries);
  }
}
class FilteredScatterSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredScatterSeries";
  /** Returns ScatterChartSeries. */
  get scatterChartSeries() {
    return this._f(ScatterChartSeries);
  }
}
class FilteredRadarSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredRadarSeries";
  /** Returns RadarChartSeries. */
  get radarChartSeries() {
    return this._f(RadarChartSeries);
  }
}
class FilteredPieSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredPieSeries";
  /** Returns PieChartSeries. */
  get pieChartSeries() {
    return this._f(PieChartSeries);
  }
}
class FilteredLineSeriesExtension extends OxmlCompositeElement {
  static _Q = "c15:filteredLineSeries";
  /** Returns LineChartSeries. */
  get lineChartSeries() {
    return this._f(LineChartSeries);
  }
}
class FilteredBubbleSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredBubbleSeries";
  /** Returns BubbleChartSeries. */
  get bubbleChartSeries() {
    return this._f(BubbleChartSeries);
  }
}
class FilteredBarSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredBarSeries";
  /** Returns BarChartSeries. */
  get barChartSeries() {
    return this._f(BarChartSeries);
  }
}
class FilteredAreaSeries extends OxmlCompositeElement {
  static _Q = "c15:filteredAreaSeries";
  /** Returns AreaChartSeries. */
  get areaChartSeries() {
    return this._f(AreaChartSeries);
  }
}
class FilteredCategoryTitle extends OxmlCompositeElement {
  static _Q = "c15:filteredCategoryTitle";
  /** Returns AxisDataSourceType. */
  get axisDataSourceType() {
    return this._f(AxisDataSourceType);
  }
}
class FilteredSeriesTitle extends OxmlCompositeElement {
  static _Q = "c15:filteredSeriesTitle";
  /** Returns ChartText. */
  get chartText() {
    return this._f(ChartText);
  }
}
class FormulaReference extends OxmlCompositeElement {
  static _Q = "c15:formulaRef";
  /** Returns SequenceOfReferences. */
  get sequenceOfReferences() {
    return this._f(SequenceOfReferences);
  }
}
class LevelReference extends OxmlCompositeElement {
  static _Q = "c15:levelRef";
  /** Returns SequenceOfReferences. */
  get sequenceOfReferences() {
    return this._f(SequenceOfReferences);
  }
}
class FullReference extends OxmlCompositeElement {
  static _Q = "c15:fullRef";
  /** Returns SequenceOfReferences. */
  get sequenceOfReferences() {
    return this._f(SequenceOfReferences);
  }
}
class Layout extends OxmlCompositeElement {
  static _Q = "c15:layout";
  /** Manual Layout. */
  get manualLayout() {
    return this._f(CManualLayout);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(CExtensionList);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "c15:spPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Individual Objects. */
  get transform2D() {
    return this._f(ATransform2D);
  }
}
class NumberingFormat extends OxmlLeafElement {
  static _Q = "c15:numFmt";
  static _A = [":formatCode", ":sourceLinked"];
  /** Number Format Code. Serialized as `:formatCode` */
  get formatCode() {
    return this._g(":formatCode");
  }
  set formatCode(v) {
    this._s(":formatCode", v);
  }
  /** Linked to Source. Serialized as `:sourceLinked` */
  get sourceLinked() {
    return this._g(":sourceLinked");
  }
  set sourceLinked(v) {
    this._s(":sourceLinked", v);
  }
}
class PivotSource extends OxmlCompositeElement {
  static _Q = "c15:pivotSource";
  /** Pivot Name. */
  get pivotTableName() {
    return this._f(CPivotTableName);
  }
  /** Format ID. */
  get formatId() {
    return this._f(CFormatId);
  }
  /** Chart Extensibility. */
  get extensionList() {
    return this._f(CExtensionList);
  }
}
function initOffice2013DrawingChartNamespace() {
  DataLabelFieldTableEntry._C = {
    "c15:txfldGUID": TextFieldGuid,
    "c15:f": Formula,
    "c15:dlblFieldTableCache": DataLabelFieldTableCache
  };
  CategoryFilterException._C = {
    "c15:sqref": SequenceOfReferences,
    "c15:spPr": ShapeProperties,
    "c15:explosion": Explosion,
    "c15:invertIfNegative": InvertIfNegativeBoolean,
    "c15:bubble3D": Bubble3D,
    "c15:marker": Marker,
    "c15:dLbl": DataLabel
  };
  DataLabel._C = {
    "c:idx": CIndex,
    "c:delete": CDelete,
    "c:layout": CLayout,
    "c:tx": CChartText,
    "c:numFmt": CNumberingFormat,
    "c:spPr": CChartShapeProperties,
    "c:txPr": CTextProperties,
    "c:dLblPos": CDataLabelPosition,
    "c:showLegendKey": CShowLegendKey,
    "c:showVal": CShowValue,
    "c:showCatName": CShowCategoryName,
    "c:showSerName": CShowSeriesName,
    "c:showPercent": CShowPercent,
    "c:showBubbleSize": CShowBubbleSize,
    "c:separator": CSeparator,
    "c:extLst": CDLblExtensionList
  };
  Marker._C = {
    "c:symbol": CSymbol,
    "c:size": CSize,
    "c:spPr": CChartShapeProperties,
    "c:extLst": CExtensionList
  };
  Explosion._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  StringDataType._C = {
    "c:ptCount": CPointCount,
    "c:pt": CStringPoint,
    "c:extLst": CStrDataExtensionList
  };
  DataLabelFieldTableCache._C = {
    "c:ptCount": CPointCount,
    "c:pt": CStringPoint,
    "c:extLst": CStrDataExtensionList
  };
  DataLabelsRangeChache._C = {
    "c:ptCount": CPointCount,
    "c:pt": CStringPoint,
    "c:extLst": CStrDataExtensionList
  };
  SurfaceChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:pictureOptions": CPictureOptions,
    "c:cat": CCategoryAxisData,
    "c:val": CValues,
    "c:bubble3D": CBubble3D,
    "c:extLst": CSurfaceSerExtensionList
  };
  RadarChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:pictureOptions": CPictureOptions,
    "c:marker": CMarker,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:cat": CCategoryAxisData,
    "c:val": CValues,
    "c:extLst": CRadarSerExtensionList
  };
  BubbleChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:pictureOptions": CPictureOptions,
    "c:invertIfNegative": CInvertIfNegative,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:trendline": CTrendline,
    "c:errBars": CErrorBars,
    "c:xVal": CXValues,
    "c:yVal": CYValues,
    "c:bubbleSize": CBubbleSize,
    "c:bubble3D": CBubble3D,
    "c:extLst": CBubbleSerExtensionList
  };
  PieChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:pictureOptions": CPictureOptions,
    "c:explosion": CExplosion,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:cat": CCategoryAxisData,
    "c:val": CValues,
    "c:extLst": CPieSerExtensionList
  };
  AreaChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:pictureOptions": CPictureOptions,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:trendline": CTrendline,
    "c:errBars": CErrorBars,
    "c:cat": CCategoryAxisData,
    "c:val": CValues,
    "c:extLst": CAreaSerExtensionList
  };
  ScatterChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:marker": CMarker,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:trendline": CTrendline,
    "c:errBars": CErrorBars,
    "c:xVal": CXValues,
    "c:yVal": CYValues,
    "c:smooth": CSmooth,
    "c:extLst": CScatterSerExtensionList
  };
  LineChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:marker": CMarker,
    "c:pictureOptions": CPictureOptions,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:trendline": CTrendline,
    "c:errBars": CErrorBars,
    "c:cat": CCategoryAxisData,
    "c:val": CValues,
    "c:smooth": CSmooth,
    "c:extLst": CLineSerExtensionList
  };
  BarChartSeries._C = {
    "c:idx": CIndex,
    "c:order": COrder,
    "c:tx": CSeriesText,
    "c:spPr": CChartShapeProperties,
    "c:invertIfNegative": CInvertIfNegative,
    "c:pictureOptions": CPictureOptions,
    "c:dPt": CDataPoint,
    "c:dLbls": CDataLabels,
    "c:trendline": CTrendline,
    "c:errBars": CErrorBars,
    "c:cat": CCategoryAxisData,
    "c:val": CValues,
    "c:shape": CShape,
    "c:extLst": CBarSerExtensionList
  };
  AxisDataSourceType._C = {
    "c:multiLvlStrRef": CMultiLevelStringReference,
    "c:numRef": CNumberReference,
    "c:numLit": CNumberLiteral,
    "c:strRef": CStringReference,
    "c:strLit": CStringLiteral
  };
  LeaderLines._C = {
    "c:spPr": CChartShapeProperties
  };
  ChartText._C = {
    "c:strRef": CStringReference,
    "c:rich": CRichText,
    "c:strLit": CStringLiteral
  };
  BooleanType._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  DataLabelFieldTable._C = {
    "c15:dlblFTEntry": DataLabelFieldTableEntry
  };
  CategoryFilterExceptions._C = {
    "c15:categoryFilterException": CategoryFilterException
  };
  DataLabelsRange._C = {
    "c15:f": Formula,
    "c15:dlblRangeCache": DataLabelsRangeChache
  };
  FilteredSurfaceSeries._C = {
    "c15:ser": SurfaceChartSeries
  };
  FilteredScatterSeries._C = {
    "c15:ser": ScatterChartSeries
  };
  FilteredRadarSeries._C = {
    "c15:ser": RadarChartSeries
  };
  FilteredPieSeries._C = {
    "c15:ser": PieChartSeries
  };
  FilteredLineSeriesExtension._C = {
    "c15:ser": LineChartSeries
  };
  FilteredBubbleSeries._C = {
    "c15:ser": BubbleChartSeries
  };
  FilteredBarSeries._C = {
    "c15:ser": BarChartSeries
  };
  FilteredAreaSeries._C = {
    "c15:ser": AreaChartSeries
  };
  FilteredCategoryTitle._C = {
    "c15:cat": AxisDataSourceType
  };
  FilteredSeriesTitle._C = {
    "c15:tx": ChartText
  };
  FormulaReference._C = {
    "c15:sqref": SequenceOfReferences
  };
  LevelReference._C = {
    "c15:sqref": SequenceOfReferences
  };
  FullReference._C = {
    "c15:sqref": SequenceOfReferences
  };
  Layout._C = {
    "c:manualLayout": CManualLayout,
    "c:extLst": CExtensionList
  };
  ShapeProperties._C = {
    "a:xfrm": ATransform2D,
    "a:custGeom": ACustomGeometry,
    "a:prstGeom": APresetGeometry,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:sp3d": AShape3DType,
    "a:extLst": AShapePropertiesExtensionList
  };
  ShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  NumberingFormat._D = {
    ":formatCode": new OxmlAttr(":formatCode", OxmlType.StringValue),
    ":sourceLinked": new OxmlAttr(":sourceLinked", OxmlType.BooleanValue)
  };
  PivotSource._C = {
    "c:name": CPivotTableName,
    "c:fmtId": CFormatId,
    "c:extLst": CExtensionList
  };
  return {
    prefix: "c15",
    xmlns: "http://schemas.microsoft.com/office/drawing/2012/chart"
  };
}
export {
  AreaChartSeries,
  AutoGeneneratedCategories,
  AxisDataSourceType,
  BarChartSeries,
  BooleanType,
  Bubble3D,
  BubbleChartSeries,
  CategoryFilterException,
  CategoryFilterExceptions,
  ChartText,
  DataLabel,
  DataLabelFieldTable,
  DataLabelFieldTableCache,
  DataLabelFieldTableEntry,
  DataLabelsRange,
  DataLabelsRangeChache,
  ExceptionForSave,
  Explosion,
  FilteredAreaSeries,
  FilteredBarSeries,
  FilteredBubbleSeries,
  FilteredCategoryTitle,
  FilteredLineSeriesExtension,
  FilteredPieSeries,
  FilteredRadarSeries,
  FilteredScatterSeries,
  FilteredSeriesTitle,
  FilteredSurfaceSeries,
  Formula,
  FormulaReference,
  FullReference,
  InvertIfNegativeBoolean,
  Layout,
  LeaderLines,
  LevelReference,
  LineChartSeries,
  Marker,
  NumberingFormat,
  PieChartSeries,
  PivotSource,
  RadarChartSeries,
  ScatterChartSeries,
  SequenceOfReferences,
  ShapeProperties,
  ShowDataLabelsRange,
  ShowLeaderLines,
  StringDataType,
  SurfaceChartSeries,
  TextFieldGuid,
  initOffice2013DrawingChartNamespace
};
