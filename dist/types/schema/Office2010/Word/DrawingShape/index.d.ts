import { OxmlCompositeElement } from '../../../../framework/OxmlCompositeElement';
import { Int32Value } from '../../../../framework/types/Int32Value';
import { BooleanValue } from '../../../../framework/types/BooleanValue';
import { UInt16Value } from '../../../../framework/types/UInt16Value';
import { UInt32Value } from '../../../../framework/types/UInt32Value';
import { StringValue } from '../../../../framework/types/StringValue';
import { TextVerticalOverflowValues } from '../../../Drawing';
import { TextHorizontalOverflowValues } from '../../../Drawing';
import { TextVerticalValues } from '../../../Drawing';
import { TextWrappingValues } from '../../../Drawing';
import { TextAnchoringTypeValues } from '../../../Drawing';
import { BlackWhiteModeValues } from '../../../Drawing';
import { PresetTextWrap as APresetTextWrap } from '../../../Drawing';
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
/** Defines the LinkedTextBox Class. Serialized as `wps:linkedTxbx` */
export declare class LinkedTextBox extends OxmlCompositeElement<OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt16Value | undefined;
    set id(v: UInt16Value | undefined);
    /** seq. Serialized as `:seq` */
    get sequence(): UInt16Value | undefined;
    set sequence(v: UInt16Value | undefined);
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the TextBoxInfo2 Class. Serialized as `wps:txbx` */
export declare class TextBoxInfo2 extends OxmlCompositeElement<WTextBoxContent | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt16Value | undefined;
    set id(v: UInt16Value | undefined);
    /** Returns WTextBoxContent. */
    get textBoxContent(): WTextBoxContent | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the ShapeStyle Class. Serialized as `wps:style` */
export declare class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {
    static _Q: string;
    /** Returns ALineReference. */
    get lineReference(): ALineReference | undefined;
    /** Returns AFillReference. */
    get fillReference(): AFillReference | undefined;
    /** Returns AEffectReference. */
    get effectReference(): AEffectReference | undefined;
    /** Font Reference. */
    get fontReference(): AFontReference | undefined;
}
/** Defines the ShapeProperties Class. Serialized as `wps:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Defines the NonVisualConnectorProperties Class. Serialized as `wps:cNvCnPr` */
export declare class NonVisualConnectorProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {
    static _Q: string;
    /** Connection Shape Locks. */
    get connectionShapeLocks(): AConnectionShapeLocks | undefined;
    /** Connection Start. */
    get startConnection(): AStartConnection | undefined;
    /** Connection End. */
    get endConnection(): AEndConnection | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the NonVisualDrawingShapeProperties Class. Serialized as `wps:cNvSpPr` */
export declare class NonVisualDrawingShapeProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Text Box. Serialized as `:txBox` */
    get textBox(): BooleanValue | undefined;
    set textBox(v: BooleanValue | undefined);
    /** Shape Locks. */
    get shapeLocks(): AShapeLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `wps:cNvPr` */
export declare class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Application defined unique identifier.. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Description of the drawing element.. Serialized as `:descr` */
    get description(): StringValue | undefined;
    set description(v: StringValue | undefined);
    /** Flag determining to show or hide this element.. Serialized as `:hidden` */
    get hidden(): BooleanValue | undefined;
    set hidden(v: BooleanValue | undefined);
    /** Title. Serialized as `:title` */
    get title(): StringValue | undefined;
    set title(v: StringValue | undefined);
    /** Hyperlink associated with clicking or selecting the element.. */
    get hyperlinkOnClick(): AHyperlinkOnClick | undefined;
    /** Hyperlink associated with hovering over the element.. */
    get hyperlinkOnHover(): AHyperlinkOnHover | undefined;
    /** Future extension. */
    get nonVisualDrawingPropertiesExtensionList(): ANonVisualDrawingPropertiesExtensionList | undefined;
}
/** Defines the OfficeArtExtensionList Class. Serialized as `wps:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the WordprocessingShape Class. Serialized as `wps:wsp` */
export declare class WordprocessingShape extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualDrawingShapeProperties | NonVisualConnectorProperties | ShapeProperties | ShapeStyle | OfficeArtExtensionList | TextBoxInfo2 | LinkedTextBox | TextBodyProperties> {
    static _Q: string;
    static _A: string[];
    /** normalEastAsianFlow. Serialized as `:normalEastAsianFlow` */
    get normalEastAsianFlow(): BooleanValue | undefined;
    set normalEastAsianFlow(v: BooleanValue | undefined);
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
}
export declare function initOffice2010WordDrawingShapeNamespace(): {
    prefix: string;
    xmlns: string;
};
