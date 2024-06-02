import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../../framework/OxmlLeafElement';
import { OxmlLeafTextElement } from '../../../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { StringValue } from '../../../../framework/types/StringValue';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { PointCount as CPointCount } from '../../../Drawing/Charts';
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
export class ChartDataPointUniqueIDMapEntry extends OxmlCompositeElement<XsdunsignedInt | UniqueID> {

    public static override _Q = 'c16:ptentry';
    /** Returns XsdunsignedInt. */
    public get xsdunsignedInt(): XsdunsignedInt | undefined { return this._f(XsdunsignedInt); }
    /** Returns UniqueID. */
    public get uniqueID(): UniqueID | undefined { return this._f(UniqueID); }

}
/** Defines the XsdunsignedInt Class. Serialized as `c16:ptidx` */
export class XsdunsignedInt extends OxmlLeafTextElement {

    public static override _Q = 'c16:ptidx';

}
/** Defines the BooleanFalse Class. Serialized as `c16:showExpandCollapseFieldButtons` */
export class BooleanFalse extends OxmlLeafElement {

    public static override _Q = 'c16:showExpandCollapseFieldButtons';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the LiteralDataChart Class. Serialized as `c16:literalDataChart` */
export class LiteralDataChart extends OxmlLeafElement {

    public static override _Q = 'c16:literalDataChart';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the MultiLvlStrFilteredLiteralCache Class. Serialized as `c16:filteredLitCache` */
export class MultiLvlStrFilteredLiteralCache extends OxmlCompositeElement<MultiLvlStrData> {

    public static override _Q = 'c16:filteredLitCache';
    /** Returns MultiLvlStrData. */
    public get multiLvlStrData(): MultiLvlStrData | undefined { return this._f(MultiLvlStrData); }

}
/** Defines the MultiLvlStrData Class. Serialized as `c16:multiLvlStrCache` */
export class MultiLvlStrData extends OxmlCompositeElement<CPointCount | CLevel | CExtensionList> {

    public static override _Q = 'c16:multiLvlStrCache';
    /** Returns CPointCount. */
    public get pointCount(): CPointCount | undefined { return this._f(CPointCount); }

}
/** Defines the StrFilteredLiteralCache Class. Serialized as `c16:filteredLitCache` */
export class StrFilteredLiteralCache extends OxmlCompositeElement<StringDataType> {

    public static override _Q = 'c16:filteredLitCache';
    /** Returns StringDataType. */
    public get stringDataType(): StringDataType | undefined { return this._f(StringDataType); }

}
/** Defines the StringDataType Class. Serialized as `c16:strCache` */
export class StringDataType extends OxmlCompositeElement<CPointCount | CStringPoint | CStrDataExtensionList> {

    public static override _Q = 'c16:strCache';
    /** Returns CPointCount. */
    public get pointCount(): CPointCount | undefined { return this._f(CPointCount); }

}
/** Defines the NumFilteredLiteralCache Class. Serialized as `c16:filteredLitCache` */
export class NumFilteredLiteralCache extends OxmlCompositeElement<NumberDataType> {

    public static override _Q = 'c16:filteredLitCache';
    /** Returns NumberDataType. */
    public get numberDataType(): NumberDataType | undefined { return this._f(NumberDataType); }

}
/** Defines the NumberDataType Class. Serialized as `c16:numCache` */
export class NumberDataType extends OxmlCompositeElement<CFormatCode | CPointCount | CNumericPoint | CExtensionList> {

    public static override _Q = 'c16:numCache';
    /** Format Code. */
    public get formatCode(): CFormatCode | undefined { return this._f(CFormatCode); }
    /** Point Count. */
    public get pointCount(): CPointCount | undefined { return this._f(CPointCount); }

}
/** Defines the CategoryFilterException Class. Serialized as `c16:categoryFilterException` */
export class CategoryFilterException extends OxmlCompositeElement<UniqueIdChartUniqueID | ShapeProperties | UnsignedIntegerType | InvertIfNegativeBoolean | Bubble3DBoolean | Marker | DLbl> {

    public static override _Q = 'c16:categoryFilterException';
    /** Returns UniqueIdChartUniqueID. */
    public get uniqueIdChartUniqueID(): UniqueIdChartUniqueID | undefined { return this._f(UniqueIdChartUniqueID); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns UnsignedIntegerType. */
    public get unsignedIntegerType(): UnsignedIntegerType | undefined { return this._f(UnsignedIntegerType); }
    /** Returns InvertIfNegativeBoolean. */
    public get invertIfNegativeBoolean(): InvertIfNegativeBoolean | undefined { return this._f(InvertIfNegativeBoolean); }
    /** Returns Bubble3DBoolean. */
    public get bubble3DBoolean(): Bubble3DBoolean | undefined { return this._f(Bubble3DBoolean); }
    /** Returns Marker. */
    public get marker(): Marker | undefined { return this._f(Marker); }
    /** Returns DLbl. */
    public get dLbl(): DLbl | undefined { return this._f(DLbl); }

}
/** Defines the UniqueIDChart Class. */
export abstract class UniqueIDChart extends OxmlLeafElement {

    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the UniqueID Class. Serialized as `c16:uniqueID` */
export class UniqueID extends UniqueIDChart {

    public static override _Q = 'c16:uniqueID';

}
/** Defines the UniqueIdChartUniqueID Class. Serialized as `c16:uniqueId` */
export class UniqueIdChartUniqueID extends UniqueIDChart {

    public static override _Q = 'c16:uniqueId';

}
/** Defines the ChartDataPointUniqueIDMap Class. Serialized as `c16:datapointuniqueidmap` */
export class ChartDataPointUniqueIDMap extends OxmlCompositeElement<ChartDataPointUniqueIDMapEntry> {

    public static override _Q = 'c16:datapointuniqueidmap';

}
/** Defines the PivotOptions16 Class. Serialized as `c16:pivotOptions16` */
export class PivotOptions16 extends OxmlCompositeElement<BooleanFalse> {

    public static override _Q = 'c16:pivotOptions16';
    /** Returns BooleanFalse. */
    public get booleanFalse(): BooleanFalse | undefined { return this._f(BooleanFalse); }

}
/** Defines the CategoryFilterExceptions Class. Serialized as `c16:categoryFilterExceptions` */
export class CategoryFilterExceptions extends OxmlCompositeElement<CategoryFilterException> {

    public static override _Q = 'c16:categoryFilterExceptions';

}
/** Defines the DLbl Class. Serialized as `c16:dLbl` */
export class DLbl extends OxmlCompositeElement<CIndex | CDelete | CLayout | CChartText | CNumberingFormat | CChartShapeProperties | CTextProperties | CDataLabelPosition | CShowLegendKey | CShowValue | CShowCategoryName | CShowSeriesName | CShowPercent | CShowBubbleSize | CSeparator | CDLblExtensionList> {

    public static override _Q = 'c16:dLbl';
    /** Returns CIndex. */
    public get index(): CIndex | undefined { return this._f(CIndex); }

}
/** Defines the Marker Class. Serialized as `c16:marker` */
export class Marker extends OxmlCompositeElement<CSymbol | CSize | CChartShapeProperties | CExtensionList> {

    public static override _Q = 'c16:marker';
    /** Symbol. */
    public get symbol(): CSymbol | undefined { return this._f(CSymbol); }
    /** Size. */
    public get size(): CSize | undefined { return this._f(CSize); }
    /** Returns CChartShapeProperties. */
    public get chartShapeProperties(): CChartShapeProperties | undefined { return this._f(CChartShapeProperties); }
    /** Chart Extensibility. */
    public get extensionList(): CExtensionList | undefined { return this._f(CExtensionList); }

}
/** Defines the BooleanType Class. */
export abstract class BooleanType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Boolean Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the Bubble3DBoolean Class. Serialized as `c16:bubble3D` */
export class Bubble3DBoolean extends BooleanType {

    public static override _Q = 'c16:bubble3D';

}
/** Defines the InvertIfNegativeBoolean Class. Serialized as `c16:invertIfNegative` */
export class InvertIfNegativeBoolean extends BooleanType {

    public static override _Q = 'c16:invertIfNegative';

}
/** Defines the UnsignedIntegerType Class. Serialized as `c16:explosion` */
export class UnsignedIntegerType extends OxmlLeafElement {

    public static override _Q = 'c16:explosion';
    public static override _A = [':val',];
    /** Integer Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the ShapeProperties Class. Serialized as `c16:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'c16:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}

export function initOffice2016DrawingChartsNamespace() {
    ChartDataPointUniqueIDMapEntry._C = {
        'c16:ptidx': XsdunsignedInt,
        'c16:uniqueID': UniqueID,
    };
    BooleanFalse._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    LiteralDataChart._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    MultiLvlStrFilteredLiteralCache._C = {
        'c16:multiLvlStrCache': MultiLvlStrData,
    };
    MultiLvlStrData._C = {
        'c:ptCount': CPointCount,
        'c:lvl': CLevel,
        'c:extLst': CExtensionList,
    };
    StrFilteredLiteralCache._C = {
        'c16:strCache': StringDataType,
    };
    StringDataType._C = {
        'c:ptCount': CPointCount,
        'c:pt': CStringPoint,
        'c:extLst': CStrDataExtensionList,
    };
    NumFilteredLiteralCache._C = {
        'c16:numCache': NumberDataType,
    };
    NumberDataType._C = {
        'c:formatCode': CFormatCode,
        'c:ptCount': CPointCount,
        'c:pt': CNumericPoint,
        'c:extLst': CExtensionList,
    };
    CategoryFilterException._C = {
        'c16:uniqueId': UniqueIdChartUniqueID,
        'c16:spPr': ShapeProperties,
        'c16:explosion': UnsignedIntegerType,
        'c16:invertIfNegative': InvertIfNegativeBoolean,
        'c16:bubble3D': Bubble3DBoolean,
        'c16:marker': Marker,
        'c16:dLbl': DLbl,
    };
    UniqueIDChart._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ChartDataPointUniqueIDMap._C = {
        'c16:ptentry': ChartDataPointUniqueIDMapEntry,
    };
    PivotOptions16._C = {
        'c16:showExpandCollapseFieldButtons': BooleanFalse,
    };
    CategoryFilterExceptions._C = {
        'c16:categoryFilterException': CategoryFilterException,
    };
    DLbl._C = {
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
    BooleanType._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    UnsignedIntegerType._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
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
    return {
        prefix: 'c16',
        xmlns: 'http://schemas.microsoft.com/office/drawing/2014/chart',
    };
}
