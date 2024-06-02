import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { OxmlAttr } from '../../../../framework/OxmlAttr';
import { OxmlType } from '../../../../framework/OxmlType';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt16Value } from '../../../../framework/types/UInt16Value';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { TextVerticalOverflowValues, TextVerticalOverflowValuesArray } from '../../../Drawing';
import { TextHorizontalOverflowValues, TextHorizontalOverflowValuesArray } from '../../../Drawing';
import { TextVerticalValues, TextVerticalValuesArray } from '../../../Drawing';
import { TextWrappingValues, TextWrappingValuesArray } from '../../../Drawing';
import { TextAnchoringTypeValues, TextAnchoringTypeValuesArray } from '../../../Drawing';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../../Drawing';import { PresetTextWrap as APresetTextWrap } from '../../../Drawing';
import { NoAutoFit as ANoAutoFit } from '../../../Drawing';
import { NormalAutoFit as ANormalAutoFit } from '../../../Drawing';
import { ShapeAutoFit as AShapeAutoFit } from '../../../Drawing';
import { Scene3DType as AScene3DType } from '../../../Drawing';
import { Shape3DType as AShape3DType } from '../../../Drawing';
import { FlatText as AFlatText } from '../../../Drawing';
import { ExtensionList as AExtensionList } from '../../../Drawing';
import { TextBoxContent as WTextBoxContent } from '../../../Wordprocessing';
import { LineReference as ALineReference } from '../../../Drawing';
import { FillReference as AFillReference } from '../../../Drawing';
import { EffectReference as AEffectReference } from '../../../Drawing';
import { FontReference as AFontReference } from '../../../Drawing';
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
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../../Drawing';
import { ConnectionShapeLocks as AConnectionShapeLocks } from '../../../Drawing';
import { StartConnection as AStartConnection } from '../../../Drawing';
import { EndConnection as AEndConnection } from '../../../Drawing';
import { ShapeLocks as AShapeLocks } from '../../../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../../Drawing';
import { Extension as AExtension } from '../../../Drawing';


/** Defines the TextBodyProperties Class. Serialized as `wps:bodyPr` */
export class TextBodyProperties extends OxmlCompositeElement<APresetTextWrap | ANoAutoFit | ANormalAutoFit | AShapeAutoFit | AScene3DType | AShape3DType | AFlatText | AExtensionList> {

    public static override _Q = 'wps:bodyPr';
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
/** Defines the LinkedTextBox Class. Serialized as `wps:linkedTxbx` */
export class LinkedTextBox extends OxmlCompositeElement<OfficeArtExtensionList> {

    public static override _Q = 'wps:linkedTxbx';
    public static override _A = [':id',':seq',];
    /** id. Serialized as `:id` */
    public get id(): UInt16Value | undefined { return this._g(':id'); }
    public set id(v: UInt16Value | undefined) { this._s(':id', v); }
    /** seq. Serialized as `:seq` */
    public get sequence(): UInt16Value | undefined { return this._g(':seq'); }
    public set sequence(v: UInt16Value | undefined) { this._s(':seq', v); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the TextBoxInfo2 Class. Serialized as `wps:txbx` */
export class TextBoxInfo2 extends OxmlCompositeElement<WTextBoxContent | OfficeArtExtensionList> {

    public static override _Q = 'wps:txbx';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): UInt16Value | undefined { return this._g(':id'); }
    public set id(v: UInt16Value | undefined) { this._s(':id', v); }
    /** Returns WTextBoxContent. */
    public get textBoxContent(): WTextBoxContent | undefined { return this._f(WTextBoxContent); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the ShapeStyle Class. Serialized as `wps:style` */
export class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'wps:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}
/** Defines the ShapeProperties Class. Serialized as `wps:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'wps:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Defines the NonVisualConnectorProperties Class. Serialized as `wps:cNvCnPr` */
export class NonVisualConnectorProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {

    public static override _Q = 'wps:cNvCnPr';
    /** Connection Shape Locks. */
    public get connectionShapeLocks(): AConnectionShapeLocks | undefined { return this._f(AConnectionShapeLocks); }
    /** Connection Start. */
    public get startConnection(): AStartConnection | undefined { return this._f(AStartConnection); }
    /** Connection End. */
    public get endConnection(): AEndConnection | undefined { return this._f(AEndConnection); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the NonVisualDrawingShapeProperties Class. Serialized as `wps:cNvSpPr` */
export class NonVisualDrawingShapeProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {

    public static override _Q = 'wps:cNvSpPr';
    public static override _A = [':txBox',];
    /** Text Box. Serialized as `:txBox` */
    public get textBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set textBox(v: BooleanValue | undefined) { this._s(':txBox', v); }
    /** Shape Locks. */
    public get shapeLocks(): AShapeLocks | undefined { return this._f(AShapeLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `wps:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'wps:cNvPr';
    public static override _A = [':id',':name',':descr',':hidden',':title',];
    /** Application defined unique identifier.. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Description of the drawing element.. Serialized as `:descr` */
    public get description(): StringValue | undefined { return this._g(':descr'); }
    public set description(v: StringValue | undefined) { this._s(':descr', v); }
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    public get hidden(): BooleanValue | undefined { return this._g(':hidden'); }
    public set hidden(v: BooleanValue | undefined) { this._s(':hidden', v); }
    /** Title. Serialized as `:title` */
    public get title(): StringValue | undefined { return this._g(':title'); }
    public set title(v: StringValue | undefined) { this._s(':title', v); }
    /** Hyperlink associated with clicking or selecting the element.. */
    public get hyperlinkOnClick(): AHyperlinkOnClick | undefined { return this._f(AHyperlinkOnClick); }
    /** Hyperlink associated with hovering over the element.. */
    public get hyperlinkOnHover(): AHyperlinkOnHover | undefined { return this._f(AHyperlinkOnHover); }
    /** Future extension. */
    public get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined { return this._f(ANonVisualDrawingPropertiesExtensionList); }

}
/** Defines the OfficeArtExtensionList Class. Serialized as `wps:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'wps:extLst';

}
/** Defines the WordprocessingShape Class. Serialized as `wps:wsp` */
export class WordprocessingShape extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualDrawingShapeProperties | NonVisualConnectorProperties | ShapeProperties | ShapeStyle | OfficeArtExtensionList | TextBoxInfo2 | LinkedTextBox | TextBodyProperties> {

    public static override _Q = 'wps:wsp';
    public static override _A = [':normalEastAsianFlow',];
    /** normalEastAsianFlow. Serialized as `:normalEastAsianFlow` */
    public get normalEastAsianFlow(): BooleanValue | undefined { return this._g(':normalEastAsianFlow'); }
    public set normalEastAsianFlow(v: BooleanValue | undefined) { this._s(':normalEastAsianFlow', v); }
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }

}

export function initOffice2010WordDrawingShapeNamespace() {
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
    LinkedTextBox._C = {
        'wps:extLst': OfficeArtExtensionList,
    };
    LinkedTextBox._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt16Value),
        ':seq': new OxmlAttr(':seq', OxmlType.UInt16Value),
    };
    TextBoxInfo2._C = {
        'w:txbxContent': WTextBoxContent,
        'wps:extLst': OfficeArtExtensionList,
    };
    TextBoxInfo2._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt16Value),
    };
    ShapeStyle._C = {
        'a:lnRef': ALineReference,
        'a:fillRef': AFillReference,
        'a:effectRef': AEffectReference,
        'a:fontRef': AFontReference,
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
    NonVisualConnectorProperties._C = {
        'a:cxnSpLocks': AConnectionShapeLocks,
        'a:stCxn': AStartConnection,
        'a:endCxn': AEndConnection,
        'a:extLst': AExtensionList,
    };
    NonVisualDrawingShapeProperties._C = {
        'a:spLocks': AShapeLocks,
        'a:extLst': AExtensionList,
    };
    NonVisualDrawingShapeProperties._D = {
        ':txBox': new OxmlAttr(':txBox', OxmlType.BooleanValue),
    };
    NonVisualDrawingProperties._C = {
        'a:hlinkClick': AHyperlinkOnClick,
        'a:hlinkHover': AHyperlinkOnHover,
        'a:extLst': ANonVisualDrawingPropertiesExtensionList,
    };
    NonVisualDrawingProperties._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    WordprocessingShape._C = {
        'wps:cNvPr': NonVisualDrawingProperties,
        'wps:cNvSpPr': NonVisualDrawingShapeProperties,
        'wps:cNvCnPr': NonVisualConnectorProperties,
        'wps:spPr': ShapeProperties,
        'wps:style': ShapeStyle,
        'wps:extLst': OfficeArtExtensionList,
        'wps:txbx': TextBoxInfo2,
        'wps:linkedTxbx': LinkedTextBox,
        'wps:bodyPr': TextBodyProperties,
    };
    WordprocessingShape._D = {
        ':normalEastAsianFlow': new OxmlAttr(':normalEastAsianFlow', OxmlType.BooleanValue),
    };
    return {
        prefix: 'wps',
        xmlns: 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape',
    };
}
