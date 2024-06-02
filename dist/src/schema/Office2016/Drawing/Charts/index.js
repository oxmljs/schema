import { OxmlCompositeElement } from "../../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../../framework/OxmlLeafElement";
import { OxmlLeafTextElement } from "../../../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../../../framework/OxmlAttr";
import { OxmlType } from "../../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../../Drawing";
import { PointCount as CPointCount } from "../../../Drawing/Charts";
import { Level as CLevel } from "../../../Drawing/Charts";
import { ExtensionList as CExtensionList } from "../../../Drawing/Charts";
import { StringPoint as CStringPoint } from "../../../Drawing/Charts";
import { StrDataExtensionList as CStrDataExtensionList } from "../../../Drawing/Charts";
import { FormatCode as CFormatCode } from "../../../Drawing/Charts";
import { NumericPoint as CNumericPoint } from "../../../Drawing/Charts";
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
class ChartDataPointUniqueIDMapEntry extends OxmlCompositeElement {
  static _Q = "c16:ptentry";
  /** Returns XsdunsignedInt. */
  get xsdunsignedInt() {
    return this._f(XsdunsignedInt);
  }
  /** Returns UniqueID. */
  get uniqueID() {
    return this._f(UniqueID);
  }
}
class XsdunsignedInt extends OxmlLeafTextElement {
  static _Q = "c16:ptidx";
}
class BooleanFalse extends OxmlLeafElement {
  static _Q = "c16:showExpandCollapseFieldButtons";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class LiteralDataChart extends OxmlLeafElement {
  static _Q = "c16:literalDataChart";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class MultiLvlStrFilteredLiteralCache extends OxmlCompositeElement {
  static _Q = "c16:filteredLitCache";
  /** Returns MultiLvlStrData. */
  get multiLvlStrData() {
    return this._f(MultiLvlStrData);
  }
}
class MultiLvlStrData extends OxmlCompositeElement {
  static _Q = "c16:multiLvlStrCache";
  /** Returns CPointCount. */
  get pointCount() {
    return this._f(CPointCount);
  }
}
class StrFilteredLiteralCache extends OxmlCompositeElement {
  static _Q = "c16:filteredLitCache";
  /** Returns StringDataType. */
  get stringDataType() {
    return this._f(StringDataType);
  }
}
class StringDataType extends OxmlCompositeElement {
  static _Q = "c16:strCache";
  /** Returns CPointCount. */
  get pointCount() {
    return this._f(CPointCount);
  }
}
class NumFilteredLiteralCache extends OxmlCompositeElement {
  static _Q = "c16:filteredLitCache";
  /** Returns NumberDataType. */
  get numberDataType() {
    return this._f(NumberDataType);
  }
}
class NumberDataType extends OxmlCompositeElement {
  static _Q = "c16:numCache";
  /** Format Code. */
  get formatCode() {
    return this._f(CFormatCode);
  }
  /** Point Count. */
  get pointCount() {
    return this._f(CPointCount);
  }
}
class CategoryFilterException extends OxmlCompositeElement {
  static _Q = "c16:categoryFilterException";
  /** Returns UniqueIdChartUniqueID. */
  get uniqueIdChartUniqueID() {
    return this._f(UniqueIdChartUniqueID);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns UnsignedIntegerType. */
  get unsignedIntegerType() {
    return this._f(UnsignedIntegerType);
  }
  /** Returns InvertIfNegativeBoolean. */
  get invertIfNegativeBoolean() {
    return this._f(InvertIfNegativeBoolean);
  }
  /** Returns Bubble3DBoolean. */
  get bubble3DBoolean() {
    return this._f(Bubble3DBoolean);
  }
  /** Returns Marker. */
  get marker() {
    return this._f(Marker);
  }
  /** Returns DLbl. */
  get dLbl() {
    return this._f(DLbl);
  }
}
class UniqueIDChart extends OxmlLeafElement {
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class UniqueID extends UniqueIDChart {
  static _Q = "c16:uniqueID";
}
class UniqueIdChartUniqueID extends UniqueIDChart {
  static _Q = "c16:uniqueId";
}
class ChartDataPointUniqueIDMap extends OxmlCompositeElement {
  static _Q = "c16:datapointuniqueidmap";
}
class PivotOptions16 extends OxmlCompositeElement {
  static _Q = "c16:pivotOptions16";
  /** Returns BooleanFalse. */
  get booleanFalse() {
    return this._f(BooleanFalse);
  }
}
class CategoryFilterExceptions extends OxmlCompositeElement {
  static _Q = "c16:categoryFilterExceptions";
}
class DLbl extends OxmlCompositeElement {
  static _Q = "c16:dLbl";
  /** Returns CIndex. */
  get index() {
    return this._f(CIndex);
  }
}
class Marker extends OxmlCompositeElement {
  static _Q = "c16:marker";
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
class Bubble3DBoolean extends BooleanType {
  static _Q = "c16:bubble3D";
}
class InvertIfNegativeBoolean extends BooleanType {
  static _Q = "c16:invertIfNegative";
}
class UnsignedIntegerType extends OxmlLeafElement {
  static _Q = "c16:explosion";
  static _A = [":val"];
  /** Integer Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "c16:spPr";
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
function initOffice2016DrawingChartsNamespace() {
  ChartDataPointUniqueIDMapEntry._C = {
    "c16:ptidx": XsdunsignedInt,
    "c16:uniqueID": UniqueID
  };
  BooleanFalse._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  LiteralDataChart._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  MultiLvlStrFilteredLiteralCache._C = {
    "c16:multiLvlStrCache": MultiLvlStrData
  };
  MultiLvlStrData._C = {
    "c:ptCount": CPointCount,
    "c:lvl": CLevel,
    "c:extLst": CExtensionList
  };
  StrFilteredLiteralCache._C = {
    "c16:strCache": StringDataType
  };
  StringDataType._C = {
    "c:ptCount": CPointCount,
    "c:pt": CStringPoint,
    "c:extLst": CStrDataExtensionList
  };
  NumFilteredLiteralCache._C = {
    "c16:numCache": NumberDataType
  };
  NumberDataType._C = {
    "c:formatCode": CFormatCode,
    "c:ptCount": CPointCount,
    "c:pt": CNumericPoint,
    "c:extLst": CExtensionList
  };
  CategoryFilterException._C = {
    "c16:uniqueId": UniqueIdChartUniqueID,
    "c16:spPr": ShapeProperties,
    "c16:explosion": UnsignedIntegerType,
    "c16:invertIfNegative": InvertIfNegativeBoolean,
    "c16:bubble3D": Bubble3DBoolean,
    "c16:marker": Marker,
    "c16:dLbl": DLbl
  };
  UniqueIDChart._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ChartDataPointUniqueIDMap._C = {
    "c16:ptentry": ChartDataPointUniqueIDMapEntry
  };
  PivotOptions16._C = {
    "c16:showExpandCollapseFieldButtons": BooleanFalse
  };
  CategoryFilterExceptions._C = {
    "c16:categoryFilterException": CategoryFilterException
  };
  DLbl._C = {
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
  BooleanType._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  UnsignedIntegerType._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
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
  return {
    prefix: "c16",
    xmlns: "http://schemas.microsoft.com/office/drawing/2014/chart"
  };
}
export {
  BooleanFalse,
  BooleanType,
  Bubble3DBoolean,
  CategoryFilterException,
  CategoryFilterExceptions,
  ChartDataPointUniqueIDMap,
  ChartDataPointUniqueIDMapEntry,
  DLbl,
  InvertIfNegativeBoolean,
  LiteralDataChart,
  Marker,
  MultiLvlStrData,
  MultiLvlStrFilteredLiteralCache,
  NumFilteredLiteralCache,
  NumberDataType,
  PivotOptions16,
  ShapeProperties,
  StrFilteredLiteralCache,
  StringDataType,
  UniqueID,
  UniqueIDChart,
  UniqueIdChartUniqueID,
  UnsignedIntegerType,
  XsdunsignedInt,
  initOffice2016DrawingChartsNamespace
};
