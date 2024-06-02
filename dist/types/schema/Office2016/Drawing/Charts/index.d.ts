import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BlackWhiteModeValues } from '../../../Drawing';
import { PointCount as CPointCount } from '../../../Drawing/Charts';
import { Level as CLevel } from '../../../Drawing/Charts';
import { ExtensionList as CExtensionList } from '../../../Drawing/Charts';
import { StringPoint as CStringPoint } from '../../../Drawing/Charts';
import { StrDataExtensionList as CStrDataExtensionList } from '../../../Drawing/Charts';
import { FormatCode as CFormatCode } from '../../../Drawing/Charts';
import { NumericPoint as CNumericPoint } from '../../../Drawing/Charts';
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
/** Defines the ChartDataPointUniqueIDMapEntry Class. Serialized as `c16:ptentry` */
export declare class ChartDataPointUniqueIDMapEntry extends OxmlCompositeElement<XsdunsignedInt | UniqueID> {
    static _Q: string;
    /** Returns XsdunsignedInt. */
    get xsdunsignedInt(): XsdunsignedInt | undefined;
    /** Returns UniqueID. */
    get uniqueID(): UniqueID | undefined;
}
/** Defines the XsdunsignedInt Class. Serialized as `c16:ptidx` */
export declare class XsdunsignedInt extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the BooleanFalse Class. Serialized as `c16:showExpandCollapseFieldButtons` */
export declare class BooleanFalse extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the LiteralDataChart Class. Serialized as `c16:literalDataChart` */
export declare class LiteralDataChart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the MultiLvlStrFilteredLiteralCache Class. Serialized as `c16:filteredLitCache` */
export declare class MultiLvlStrFilteredLiteralCache extends OxmlCompositeElement<MultiLvlStrData> {
    static _Q: string;
    /** Returns MultiLvlStrData. */
    get multiLvlStrData(): MultiLvlStrData | undefined;
}
/** Defines the MultiLvlStrData Class. Serialized as `c16:multiLvlStrCache` */
export declare class MultiLvlStrData extends OxmlCompositeElement<CPointCount | CLevel | CExtensionList> {
    static _Q: string;
    /** Returns CPointCount. */
    get pointCount(): CPointCount | undefined;
}
/** Defines the StrFilteredLiteralCache Class. Serialized as `c16:filteredLitCache` */
export declare class StrFilteredLiteralCache extends OxmlCompositeElement<StringDataType> {
    static _Q: string;
    /** Returns StringDataType. */
    get stringDataType(): StringDataType | undefined;
}
/** Defines the StringDataType Class. Serialized as `c16:strCache` */
export declare class StringDataType extends OxmlCompositeElement<CPointCount | CStringPoint | CStrDataExtensionList> {
    static _Q: string;
    /** Returns CPointCount. */
    get pointCount(): CPointCount | undefined;
}
/** Defines the NumFilteredLiteralCache Class. Serialized as `c16:filteredLitCache` */
export declare class NumFilteredLiteralCache extends OxmlCompositeElement<NumberDataType> {
    static _Q: string;
    /** Returns NumberDataType. */
    get numberDataType(): NumberDataType | undefined;
}
/** Defines the NumberDataType Class. Serialized as `c16:numCache` */
export declare class NumberDataType extends OxmlCompositeElement<CFormatCode | CPointCount | CNumericPoint | CExtensionList> {
    static _Q: string;
    /** Format Code. */
    get formatCode(): CFormatCode | undefined;
    /** Point Count. */
    get pointCount(): CPointCount | undefined;
}
/** Defines the CategoryFilterException Class. Serialized as `c16:categoryFilterException` */
export declare class CategoryFilterException extends OxmlCompositeElement<UniqueIdChartUniqueID | ShapeProperties | UnsignedIntegerType | InvertIfNegativeBoolean | Bubble3DBoolean | Marker | DLbl> {
    static _Q: string;
    /** Returns UniqueIdChartUniqueID. */
    get uniqueIdChartUniqueID(): UniqueIdChartUniqueID | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns UnsignedIntegerType. */
    get unsignedIntegerType(): UnsignedIntegerType | undefined;
    /** Returns InvertIfNegativeBoolean. */
    get invertIfNegativeBoolean(): InvertIfNegativeBoolean | undefined;
    /** Returns Bubble3DBoolean. */
    get bubble3DBoolean(): Bubble3DBoolean | undefined;
    /** Returns Marker. */
    get marker(): Marker | undefined;
    /** Returns DLbl. */
    get dLbl(): DLbl | undefined;
}
/** Defines the UniqueIDChart Class. */
export declare abstract class UniqueIDChart extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the UniqueID Class. Serialized as `c16:uniqueID` */
export declare class UniqueID extends UniqueIDChart {
    static _Q: string;
}
/** Defines the UniqueIdChartUniqueID Class. Serialized as `c16:uniqueId` */
export declare class UniqueIdChartUniqueID extends UniqueIDChart {
    static _Q: string;
}
/** Defines the ChartDataPointUniqueIDMap Class. Serialized as `c16:datapointuniqueidmap` */
export declare class ChartDataPointUniqueIDMap extends OxmlCompositeElement<ChartDataPointUniqueIDMapEntry> {
    static _Q: string;
}
/** Defines the PivotOptions16 Class. Serialized as `c16:pivotOptions16` */
export declare class PivotOptions16 extends OxmlCompositeElement<BooleanFalse> {
    static _Q: string;
    /** Returns BooleanFalse. */
    get booleanFalse(): BooleanFalse | undefined;
}
/** Defines the CategoryFilterExceptions Class. Serialized as `c16:categoryFilterExceptions` */
export declare class CategoryFilterExceptions extends OxmlCompositeElement<CategoryFilterException> {
    static _Q: string;
}
/** Defines the DLbl Class. Serialized as `c16:dLbl` */
export declare class DLbl extends OxmlCompositeElement<CIndex | CDelete | CLayout | CChartText | CNumberingFormat | CChartShapeProperties | CTextProperties | CDataLabelPosition | CShowLegendKey | CShowValue | CShowCategoryName | CShowSeriesName | CShowPercent | CShowBubbleSize | CSeparator | CDLblExtensionList> {
    static _Q: string;
    /** Returns CIndex. */
    get index(): CIndex | undefined;
}
/** Defines the Marker Class. Serialized as `c16:marker` */
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
/** Defines the BooleanType Class. */
export declare abstract class BooleanType extends OxmlLeafElement {
    static _A: string[];
    /** Boolean Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the Bubble3DBoolean Class. Serialized as `c16:bubble3D` */
export declare class Bubble3DBoolean extends BooleanType {
    static _Q: string;
}
/** Defines the InvertIfNegativeBoolean Class. Serialized as `c16:invertIfNegative` */
export declare class InvertIfNegativeBoolean extends BooleanType {
    static _Q: string;
}
/** Defines the UnsignedIntegerType Class. Serialized as `c16:explosion` */
export declare class UnsignedIntegerType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Integer Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the ShapeProperties Class. Serialized as `c16:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
export declare function initOffice2016DrawingChartsNamespace(): {
    prefix: string;
    xmlns: string;
};
