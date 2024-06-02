import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { StringValue } from '../../framework/types/StringValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { UInt16Value } from '../../framework/types/UInt16Value';
import { SpaceProcessingModeValues } from '..';
import { CustomXmlRun as WCustomXmlRun } from '../Wordprocessing';
import { SimpleField as WSimpleField } from '../Wordprocessing';
import { Hyperlink as WHyperlink } from '../Wordprocessing';
import { SdtRun as WSdtRun } from '../Wordprocessing';
import { ProofError as WProofError } from '../Wordprocessing';
import { PermStart as WPermStart } from '../Wordprocessing';
import { PermEnd as WPermEnd } from '../Wordprocessing';
import { BookmarkStart as WBookmarkStart } from '../Wordprocessing';
import { BookmarkEnd as WBookmarkEnd } from '../Wordprocessing';
import { CommentRangeStart as WCommentRangeStart } from '../Wordprocessing';
import { CommentRangeEnd as WCommentRangeEnd } from '../Wordprocessing';
import { MoveFromRangeStart as WMoveFromRangeStart } from '../Wordprocessing';
import { MoveFromRangeEnd as WMoveFromRangeEnd } from '../Wordprocessing';
import { MoveToRangeStart as WMoveToRangeStart } from '../Wordprocessing';
import { MoveToRangeEnd as WMoveToRangeEnd } from '../Wordprocessing';
import { CustomXmlInsRangeStart as WCustomXmlInsRangeStart } from '../Wordprocessing';
import { CustomXmlInsRangeEnd as WCustomXmlInsRangeEnd } from '../Wordprocessing';
import { CustomXmlDelRangeStart as WCustomXmlDelRangeStart } from '../Wordprocessing';
import { CustomXmlDelRangeEnd as WCustomXmlDelRangeEnd } from '../Wordprocessing';
import { CustomXmlMoveFromRangeStart as WCustomXmlMoveFromRangeStart } from '../Wordprocessing';
import { CustomXmlMoveFromRangeEnd as WCustomXmlMoveFromRangeEnd } from '../Wordprocessing';
import { CustomXmlMoveToRangeStart as WCustomXmlMoveToRangeStart } from '../Wordprocessing';
import { CustomXmlMoveToRangeEnd as WCustomXmlMoveToRangeEnd } from '../Wordprocessing';
import { CustomXmlConflictInsertionRangeStart as W14CustomXmlConflictInsertionRangeStart } from '../Office2010/Word';
import { CustomXmlConflictInsertionRangeEnd as W14CustomXmlConflictInsertionRangeEnd } from '../Office2010/Word';
import { CustomXmlConflictDeletionRangeStart as W14CustomXmlConflictDeletionRangeStart } from '../Office2010/Word';
import { CustomXmlConflictDeletionRangeEnd as W14CustomXmlConflictDeletionRangeEnd } from '../Office2010/Word';
import { InsertedRun as WInsertedRun } from '../Wordprocessing';
import { DeletedRun as WDeletedRun } from '../Wordprocessing';
import { MoveFromRun as WMoveFromRun } from '../Wordprocessing';
import { MoveToRun as WMoveToRun } from '../Wordprocessing';
import { ContentPart as WContentPart } from '../Wordprocessing';
import { RunConflictInsertion as W14RunConflictInsertion } from '../Office2010/Word';
import { RunConflictDeletion as W14RunConflictDeletion } from '../Office2010/Word';
import { RunProperties as WRunProperties } from '../Wordprocessing';
import { InsertedMathControl as WInsertedMathControl } from '../Wordprocessing';
import { DeletedMathControl as WDeletedMathControl } from '../Wordprocessing';
import { MoveFromMathControl as WMoveFromMathControl } from '../Wordprocessing';
import { MoveToMathControl as WMoveToMathControl } from '../Wordprocessing';
import { Run as WRun } from '../Wordprocessing';
import { Break as WBreak } from '../Wordprocessing';
import { Text as WText } from '../Wordprocessing';
import { DeletedText as WDeletedText } from '../Wordprocessing';
import { FieldCode as WFieldCode } from '../Wordprocessing';
import { DeletedFieldCode as WDeletedFieldCode } from '../Wordprocessing';
import { NoBreakHyphen as WNoBreakHyphen } from '../Wordprocessing';
import { SoftHyphen as WSoftHyphen } from '../Wordprocessing';
import { DayShort as WDayShort } from '../Wordprocessing';
import { MonthShort as WMonthShort } from '../Wordprocessing';
import { YearShort as WYearShort } from '../Wordprocessing';
import { DayLong as WDayLong } from '../Wordprocessing';
import { MonthLong as WMonthLong } from '../Wordprocessing';
import { YearLong as WYearLong } from '../Wordprocessing';
import { AnnotationReferenceMark as WAnnotationReferenceMark } from '../Wordprocessing';
import { FootnoteReferenceMark as WFootnoteReferenceMark } from '../Wordprocessing';
import { EndnoteReferenceMark as WEndnoteReferenceMark } from '../Wordprocessing';
import { SeparatorMark as WSeparatorMark } from '../Wordprocessing';
import { ContinuationSeparatorMark as WContinuationSeparatorMark } from '../Wordprocessing';
import { SymbolChar as WSymbolChar } from '../Wordprocessing';
import { PageNumber as WPageNumber } from '../Wordprocessing';
import { CarriageReturn as WCarriageReturn } from '../Wordprocessing';
import { TabChar as WTabChar } from '../Wordprocessing';
import { EmbeddedObject as WEmbeddedObject } from '../Wordprocessing';
import { Picture as WPicture } from '../Wordprocessing';
import { FieldChar as WFieldChar } from '../Wordprocessing';
import { Ruby as WRuby } from '../Wordprocessing';
import { FootnoteReference as WFootnoteReference } from '../Wordprocessing';
import { EndnoteReference as WEndnoteReference } from '../Wordprocessing';
import { CommentReference as WCommentReference } from '../Wordprocessing';
import { Drawing as WDrawing } from '../Wordprocessing';
import { PositionalTab as WPositionalTab } from '../Wordprocessing';
import { LastRenderedPageBreak as WLastRenderedPageBreak } from '../Wordprocessing';
export declare enum HorizontalAlignmentValues {
    /** Left Justification. Serialized value: `left` */
    Left = "left",
    /** Center. Serialized value: `center` */
    Center = "center",
    /** Right. Serialized value: `right` */
    Right = "right"
}
export declare const HorizontalAlignmentValuesArray: readonly [HorizontalAlignmentValues.Left, HorizontalAlignmentValues.Center, HorizontalAlignmentValues.Right];
export declare enum ShapeDelimiterValues {
    /** Centered (Delimiters). Serialized value: `centered` */
    Centered = "centered",
    /** Match. Serialized value: `match` */
    Match = "match"
}
export declare const ShapeDelimiterValuesArray: readonly [ShapeDelimiterValues.Centered, ShapeDelimiterValues.Match];
export declare enum FractionTypeValues {
    /** Bar Fraction. Serialized value: `bar` */
    Bar = "bar",
    /** Skewed. Serialized value: `skw` */
    Skewed = "skw",
    /** Linear Fraction. Serialized value: `lin` */
    Linear = "lin",
    /** No-Bar Fraction (Stack). Serialized value: `noBar` */
    NoBar = "noBar"
}
export declare const FractionTypeValuesArray: readonly [FractionTypeValues.Bar, FractionTypeValues.Skewed, FractionTypeValues.Linear, FractionTypeValues.NoBar];
export declare enum LimitLocationValues {
    /** Under-Over location. Serialized value: `undOvr` */
    UnderOver = "undOvr",
    /** Subscript-Superscript location. Serialized value: `subSup` */
    SubscriptSuperscript = "subSup"
}
export declare const LimitLocationValuesArray: readonly [LimitLocationValues.UnderOver, LimitLocationValues.SubscriptSuperscript];
export declare enum VerticalJustificationValues {
    /** Top. Serialized value: `top` */
    Top = "top",
    /** Bottom Alignment. Serialized value: `bot` */
    Bottom = "bot"
}
export declare const VerticalJustificationValuesArray: readonly [VerticalJustificationValues.Top, VerticalJustificationValues.Bottom];
export declare enum ScriptValues {
    /** Roman. Serialized value: `roman` */
    Roman = "roman",
    /** Script. Serialized value: `script` */
    Script = "script",
    /** Fraktur. Serialized value: `fraktur` */
    Fraktur = "fraktur",
    /** double-struck. Serialized value: `double-struck` */
    DoubleStruck = "double-struck",
    /** Sans-Serif. Serialized value: `sans-serif` */
    SansSerif = "sans-serif",
    /** Monospace. Serialized value: `monospace` */
    Monospace = "monospace"
}
export declare const ScriptValuesArray: readonly [ScriptValues.Roman, ScriptValues.Script, ScriptValues.Fraktur, ScriptValues.DoubleStruck, ScriptValues.SansSerif, ScriptValues.Monospace];
export declare enum StyleValues {
    /** Plain. Serialized value: `p` */
    Plain = "p",
    /** Bold. Serialized value: `b` */
    Bold = "b",
    /** Italic. Serialized value: `i` */
    Italic = "i",
    /** Bold-Italic. Serialized value: `bi` */
    BoldItalic = "bi"
}
export declare const StyleValuesArray: readonly [StyleValues.Plain, StyleValues.Bold, StyleValues.Italic, StyleValues.BoldItalic];
export declare enum JustificationValues {
    /** Left Justification. Serialized value: `left` */
    Left = "left",
    /** Right. Serialized value: `right` */
    Right = "right",
    /** Center (Equation). Serialized value: `center` */
    Center = "center",
    /** Centered as Group (Equations). Serialized value: `centerGroup` */
    CenterGroup = "centerGroup"
}
export declare const JustificationValuesArray: readonly [JustificationValues.Left, JustificationValues.Right, JustificationValues.Center, JustificationValues.CenterGroup];
export declare enum BreakBinaryOperatorValues {
    /** Before. Serialized value: `before` */
    Before = "before",
    /** After. Serialized value: `after` */
    After = "after",
    /** Repeat. Serialized value: `repeat` */
    Repeat = "repeat"
}
export declare const BreakBinaryOperatorValuesArray: readonly [BreakBinaryOperatorValues.Before, BreakBinaryOperatorValues.After, BreakBinaryOperatorValues.Repeat];
export declare enum BreakBinarySubtractionValues {
    /** Minus Minus. Serialized value: `--` */
    MinusMinus = "--",
    /** Minus Plus. Serialized value: `-+` */
    MinusPlus = "-+",
    /** Plus Minus. Serialized value: `+-` */
    PlusMinus = "+-"
}
export declare const BreakBinarySubtractionValuesArray: readonly [BreakBinarySubtractionValues.MinusMinus, BreakBinarySubtractionValues.MinusPlus, BreakBinarySubtractionValues.PlusMinus];
export declare enum VerticalAlignmentValues {
    /** Top. Serialized value: `top` */
    Top = "top",
    /** Center (Function). Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `bottom` */
    Bottom = "bottom",
    /** Bottom Alignment. Serialized value: `bot` */
    Bot = "bot"
}
export declare const VerticalAlignmentValuesArray: readonly [VerticalAlignmentValues.Top, VerticalAlignmentValues.Center, VerticalAlignmentValues.Bottom, VerticalAlignmentValues.Bot];
export declare enum BooleanValues {
    /** undefined. Serialized value: `true` */
    True = "true",
    /** undefined. Serialized value: `false` */
    False = "false",
    /** On. Serialized value: `on` */
    On = "on",
    /** Off. Serialized value: `off` */
    Off = "off",
    /** undefined. Serialized value: `0` */
    Zero = "0",
    /** undefined. Serialized value: `1` */
    One = "1"
}
export declare const BooleanValuesArray: readonly [BooleanValues.True, BooleanValues.False, BooleanValues.On, BooleanValues.Off, BooleanValues.Zero, BooleanValues.One];
/** Office Math Paragraph Properties. Serialized as `m:oMathParaPr` */
export declare class ParagraphProperties extends OxmlCompositeElement<Justification> {
    static _Q: string;
    /** Justification. */
    get justification(): Justification | undefined;
}
/** Break on Binary Subtraction. Serialized as `m:brkBinSub` */
export declare class BreakBinarySubtraction extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): BreakBinarySubtractionValues | undefined;
    set val(v: BreakBinarySubtractionValues | undefined);
}
/** Break on Binary Operators. Serialized as `m:brkBin` */
export declare class BreakBinary extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): BreakBinaryOperatorValues | undefined;
    set val(v: BreakBinaryOperatorValues | undefined);
}
/** Math Font. Serialized as `m:mathFont` */
export declare class MathFont extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `m:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the OfficeMathJustificationType Class. */
export declare abstract class OfficeMathJustificationType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): JustificationValues | undefined;
    set val(v: JustificationValues | undefined);
}
/** Default Justification. Serialized as `m:defJc` */
export declare class DefaultJustification extends OfficeMathJustificationType {
    static _Q: string;
}
/** Justification. Serialized as `m:jc` */
export declare class Justification extends OfficeMathJustificationType {
    static _Q: string;
}
/** Argument Properties. Serialized as `m:argPr` */
export declare class ArgumentProperties extends OxmlCompositeElement<ArgumentSize> {
    static _Q: string;
    /** Argument Size. */
    get argumentSize(): ArgumentSize | undefined;
}
/** Argument Size. Serialized as `m:argSz` */
export declare class ArgumentSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): IntegerValue | undefined;
    set val(v: IntegerValue | undefined);
}
/** Superscript Properties. Serialized as `m:sSupPr` */
export declare class SuperscriptProperties extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Sub-Superscript Properties. Serialized as `m:sSubSupPr` */
export declare class SubSuperscriptProperties extends OxmlCompositeElement<AlignScripts | ControlProperties> {
    static _Q: string;
    /** Align Scripts. */
    get alignScripts(): AlignScripts | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Subscript Properties. Serialized as `m:sSubPr` */
export declare class SubscriptProperties extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Pre-Sub-Superscript Properties. Serialized as `m:sPrePr` */
export declare class PreSubSuperProperties extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Radical Properties. Serialized as `m:radPr` */
export declare class RadicalProperties extends OxmlCompositeElement<HideDegree | ControlProperties> {
    static _Q: string;
    /** Hide Degree. */
    get hideDegree(): HideDegree | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Phantom Properties. Serialized as `m:phantPr` */
export declare class PhantomProperties extends OxmlCompositeElement<ShowPhantom | ZeroWidth | ZeroAscent | ZeroDescent | Transparent | ControlProperties> {
    static _Q: string;
    /** Phantom Show. */
    get showPhantom(): ShowPhantom | undefined;
    /** Phantom Zero Width. */
    get zeroWidth(): ZeroWidth | undefined;
    /** Phantom Zero Ascent. */
    get zeroAscent(): ZeroAscent | undefined;
    /** Phantom Zero Descent. */
    get zeroDescent(): ZeroDescent | undefined;
    /** Transparent (Phantom). */
    get transparent(): Transparent | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** n-ary Properties. Serialized as `m:naryPr` */
export declare class NaryProperties extends OxmlCompositeElement<AccentChar | LimitLocation | GrowOperators | HideSubArgument | HideSuperArgument | ControlProperties> {
    static _Q: string;
    /** n-ary Operator Character. */
    get accentChar(): AccentChar | undefined;
    /** n-ary Limit Location. */
    get limitLocation(): LimitLocation | undefined;
    /** n-ary Grow. */
    get growOperators(): GrowOperators | undefined;
    /** Hide Subscript (n-ary). */
    get hideSubArgument(): HideSubArgument | undefined;
    /** Hide Superscript (n-ary). */
    get hideSuperArgument(): HideSuperArgument | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Defines the LimitLocationType Class. */
export declare abstract class LimitLocationType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): LimitLocationValues | undefined;
    set val(v: LimitLocationValues | undefined);
}
/** n-ary Limit Location. Serialized as `m:naryLim` */
export declare class NaryLimitLocation extends LimitLocationType {
    static _Q: string;
}
/** Integral Limit Locations. Serialized as `m:intLim` */
export declare class IntegralLimitLocation extends LimitLocationType {
    static _Q: string;
}
/** n-ary Limit Location. Serialized as `m:limLoc` */
export declare class LimitLocation extends LimitLocationType {
    static _Q: string;
}
/** Matrix Row. Serialized as `m:mr` */
export declare class MatrixRow extends OxmlCompositeElement<Base> {
    static _Q: string;
}
/** Matrix Properties. Serialized as `m:mPr` */
export declare class MatrixProperties extends OxmlCompositeElement<BaseJustification | HidePlaceholder | RowSpacingRule | ColumnGapRule | RowSpacing | ColumnSpacing | ColumnGap | MatrixColumns | ControlProperties> {
    static _Q: string;
    /** Matrix Base Justification. */
    get baseJustification(): BaseJustification | undefined;
    /** Hide Placeholders (Matrix). */
    get hidePlaceholder(): HidePlaceholder | undefined;
    /** Row Spacing Rule. */
    get rowSpacingRule(): RowSpacingRule | undefined;
    /** Matrix Column Gap Rule. */
    get columnGapRule(): ColumnGapRule | undefined;
    /** Row Spacing (Matrix). */
    get rowSpacing(): RowSpacing | undefined;
    /** Matrix Column Spacing. */
    get columnSpacing(): ColumnSpacing | undefined;
    /** Matrix Column Gap. */
    get columnGap(): ColumnGap | undefined;
    /** Matrix Columns. */
    get matrixColumns(): MatrixColumns | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Matrix Columns. Serialized as `m:mcs` */
export declare class MatrixColumns extends OxmlCompositeElement<MatrixColumn> {
    static _Q: string;
}
/** Defines the TwipsMeasureType Class. */
export declare abstract class TwipsMeasureType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Wrap Indent. Serialized as `m:wrapIndent` */
export declare class WrapIndent extends TwipsMeasureType {
    static _Q: string;
}
/** Intra-Equation Spacing. Serialized as `m:intraSp` */
export declare class IntraSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Inter-Equation Spacing. Serialized as `m:interSp` */
export declare class InterSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Post-Equation Spacing. Serialized as `m:postSp` */
export declare class PostSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Pre-Equation Spacing. Serialized as `m:preSp` */
export declare class PreSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Right Margin. Serialized as `m:rMargin` */
export declare class RightMargin extends TwipsMeasureType {
    static _Q: string;
}
/** Left Margin. Serialized as `m:lMargin` */
export declare class LeftMargin extends TwipsMeasureType {
    static _Q: string;
}
/** Matrix Column Spacing. Serialized as `m:cSp` */
export declare class ColumnSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Matrix Column. Serialized as `m:mc` */
export declare class MatrixColumn extends OxmlCompositeElement<MatrixColumnProperties> {
    static _Q: string;
    /** Matrix Column Properties. */
    get matrixColumnProperties(): MatrixColumnProperties | undefined;
}
/** Matrix Column Properties. Serialized as `m:mcPr` */
export declare class MatrixColumnProperties extends OxmlCompositeElement<MatrixColumnCount | MatrixColumnJustification> {
    static _Q: string;
    /** Matrix Column Count. */
    get matrixColumnCount(): MatrixColumnCount | undefined;
    /** Matrix Column Justification. */
    get matrixColumnJustification(): MatrixColumnJustification | undefined;
}
/** Matrix Column Justification. Serialized as `m:mcJc` */
export declare class MatrixColumnJustification extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): HorizontalAlignmentValues | undefined;
    set val(v: HorizontalAlignmentValues | undefined);
}
/** Matrix Column Count. Serialized as `m:count` */
export declare class MatrixColumnCount extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `m:val` */
    get val(): IntegerValue | undefined;
    set val(v: IntegerValue | undefined);
}
/** Upper Limit Properties. Serialized as `m:limUppPr` */
export declare class LimitUpperProperties extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Lower Limit Properties. Serialized as `m:limLowPr` */
export declare class LimitLowerProperties extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Group-Character Properties. Serialized as `m:groupChrPr` */
export declare class GroupCharProperties extends OxmlCompositeElement<AccentChar | Position | VerticalJustification | ControlProperties> {
    static _Q: string;
    /** Group Character (Grouping Character). */
    get accentChar(): AccentChar | undefined;
    /** Position (Group Character). */
    get position(): Position | undefined;
    /** Vertical Justification. */
    get verticalJustification(): VerticalJustification | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Function Properties. Serialized as `m:funcPr` */
export declare class FunctionProperties extends OxmlCompositeElement<ControlProperties> {
    static _Q: string;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Fraction Properties. Serialized as `m:fPr` */
export declare class FractionProperties extends OxmlCompositeElement<FractionType | ControlProperties> {
    static _Q: string;
    /** Fraction type. */
    get fractionType(): FractionType | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Fraction type. Serialized as `m:type` */
export declare class FractionType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): FractionTypeValues | undefined;
    set val(v: FractionTypeValues | undefined);
}
/** Equation Array Properties. Serialized as `m:eqArrPr` */
export declare class EquationArrayProperties extends OxmlCompositeElement<BaseJustification | MaxDistribution | ObjectDistribution | RowSpacingRule | RowSpacing | ControlProperties> {
    static _Q: string;
    /** Equation Array Base Justification. */
    get baseJustification(): BaseJustification | undefined;
    /** Maximum Distribution. */
    get maxDistribution(): MaxDistribution | undefined;
    /** Object Distribution. */
    get objectDistribution(): ObjectDistribution | undefined;
    /** Row Spacing Rule. */
    get rowSpacingRule(): RowSpacingRule | undefined;
    /** Row Spacing (Equation Array). */
    get rowSpacing(): RowSpacing | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Defines the UnsignedShortType Class. */
export declare abstract class UnsignedShortType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `m:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Matrix Column Gap. Serialized as `m:cGp` */
export declare class ColumnGap extends UnsignedShortType {
    static _Q: string;
}
/** Row Spacing (Equation Array). Serialized as `m:rSp` */
export declare class RowSpacing extends UnsignedShortType {
    static _Q: string;
}
/** Defines the SpacingRuleType Class. */
export declare abstract class SpacingRuleType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): IntegerValue | undefined;
    set val(v: IntegerValue | undefined);
}
/** Matrix Column Gap Rule. Serialized as `m:cGpRule` */
export declare class ColumnGapRule extends SpacingRuleType {
    static _Q: string;
}
/** Row Spacing Rule. Serialized as `m:rSpRule` */
export declare class RowSpacingRule extends SpacingRuleType {
    static _Q: string;
}
/** Equation Array Base Justification. Serialized as `m:baseJc` */
export declare class BaseJustification extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): VerticalAlignmentValues | undefined;
    set val(v: VerticalAlignmentValues | undefined);
}
/** Delimiter Properties. Serialized as `m:dPr` */
export declare class DelimiterProperties extends OxmlCompositeElement<BeginChar | SeparatorChar | EndChar | GrowOperators | Shape | ControlProperties> {
    static _Q: string;
    /** Delimiter Beginning Character. */
    get beginChar(): BeginChar | undefined;
    /** Delimiter Separator Character. */
    get separatorChar(): SeparatorChar | undefined;
    /** Delimiter Ending Character. */
    get endChar(): EndChar | undefined;
    /** Delimiter Grow. */
    get growOperators(): GrowOperators | undefined;
    /** Shape (Delimiters). */
    get shape(): Shape | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Shape (Delimiters). Serialized as `m:shp` */
export declare class Shape extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): ShapeDelimiterValues | undefined;
    set val(v: ShapeDelimiterValues | undefined);
}
/** Border Box Properties. Serialized as `m:borderBoxPr` */
export declare class BorderBoxProperties extends OxmlCompositeElement<HideTop | HideBottom | HideLeft | HideRight | StrikeHorizontal | StrikeVertical | StrikeBottomLeftToTopRight | StrikeTopLeftToBottomRight | ControlProperties> {
    static _Q: string;
    /** Hide Top Edge. */
    get hideTop(): HideTop | undefined;
    /** Hide Bottom Edge. */
    get hideBottom(): HideBottom | undefined;
    /** Hide Left Edge. */
    get hideLeft(): HideLeft | undefined;
    /** Hide Right Edge. */
    get hideRight(): HideRight | undefined;
    /** Border Box Strikethrough Horizontal. */
    get strikeHorizontal(): StrikeHorizontal | undefined;
    /** Border Box Strikethrough Vertical. */
    get strikeVertical(): StrikeVertical | undefined;
    /** Border Box Strikethrough Bottom-Left to Top-Right. */
    get strikeBottomLeftToTopRight(): StrikeBottomLeftToTopRight | undefined;
    /** Border Box Strikethrough Top-Left to Bottom-Right. */
    get strikeTopLeftToBottomRight(): StrikeTopLeftToBottomRight | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Box Properties. Serialized as `m:boxPr` */
export declare class BoxProperties extends OxmlCompositeElement<OperatorEmulator | NoBreak | Differential | Break | Alignment | ControlProperties> {
    static _Q: string;
    /** Operator Emulator. */
    get operatorEmulator(): OperatorEmulator | undefined;
    /** No Break. */
    get noBreak(): NoBreak | undefined;
    /** Differential. */
    get differential(): Differential | undefined;
    /** Break. */
    get break(): Break | undefined;
    /** Alignment. */
    get alignment(): Alignment | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Bar Properties. Serialized as `m:barPr` */
export declare class BarProperties extends OxmlCompositeElement<Position | ControlProperties> {
    static _Q: string;
    /** Position (Bar). */
    get position(): Position | undefined;
    /** Returns ControlProperties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Defines the TopBottomType Class. */
export declare abstract class TopBottomType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): VerticalJustificationValues | undefined;
    set val(v: VerticalJustificationValues | undefined);
}
/** Vertical Justification. Serialized as `m:vertJc` */
export declare class VerticalJustification extends TopBottomType {
    static _Q: string;
}
/** Position (Bar). Serialized as `m:pos` */
export declare class Position extends TopBottomType {
    static _Q: string;
}
/** Defines the OfficeMathArgumentType Class. */
export declare abstract class OfficeMathArgumentType extends OxmlCompositeElement<ArgumentProperties | Accent | Bar | Box | BorderBox | Delimiter | EquationArray | Fraction | MathFunction | GroupChar | LimitLower | LimitUpper | Matrix | Nary | Phantom | Radical | PreSubSuper | Subscript | SubSuperscript | Superscript | Run | WCustomXmlRun | WSimpleField | WHyperlink | WSdtRun | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | W14RunConflictInsertion | W14RunConflictDeletion | Paragraph | OfficeMath | ControlProperties> {
    /** Argument Properties. */
    get argumentProperties(): ArgumentProperties | undefined;
}
/** Degree. Serialized as `m:deg` */
export declare class Degree extends OfficeMathArgumentType {
    static _Q: string;
}
/** Upper limit (n-ary). Serialized as `m:sup` */
export declare class SuperArgument extends OfficeMathArgumentType {
    static _Q: string;
}
/** Lower limit (n-ary) . Serialized as `m:sub` */
export declare class SubArgument extends OfficeMathArgumentType {
    static _Q: string;
}
/** Limit (Lower). Serialized as `m:lim` */
export declare class Limit extends OfficeMathArgumentType {
    static _Q: string;
}
/** Function Name. Serialized as `m:fName` */
export declare class FunctionName extends OfficeMathArgumentType {
    static _Q: string;
}
/** Denominator. Serialized as `m:den` */
export declare class Denominator extends OfficeMathArgumentType {
    static _Q: string;
}
/** Numerator. Serialized as `m:num` */
export declare class Numerator extends OfficeMathArgumentType {
    static _Q: string;
}
/** Base. Serialized as `m:e` */
export declare class Base extends OfficeMathArgumentType {
    static _Q: string;
}
/** Accent Properties. Serialized as `m:accPr` */
export declare class AccentProperties extends OxmlCompositeElement<AccentChar | ControlProperties> {
    static _Q: string;
    /** Accent Character. */
    get accentChar(): AccentChar | undefined;
    /** Control Properties. */
    get controlProperties(): ControlProperties | undefined;
}
/** Control Properties. Serialized as `m:ctrlPr` */
export declare class ControlProperties extends OxmlCompositeElement<WRunProperties | WInsertedMathControl | WDeletedMathControl | WMoveFromMathControl | WMoveToMathControl> {
    static _Q: string;
}
/** Defines the CharType Class. */
export declare abstract class CharType extends OxmlLeafElement {
    static _A: string[];
    /** value. Serialized as `m:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Delimiter Ending Character. Serialized as `m:endChr` */
export declare class EndChar extends CharType {
    static _Q: string;
}
/** Delimiter Separator Character. Serialized as `m:sepChr` */
export declare class SeparatorChar extends CharType {
    static _Q: string;
}
/** Delimiter Beginning Character. Serialized as `m:begChr` */
export declare class BeginChar extends CharType {
    static _Q: string;
}
/** Accent Character. Serialized as `m:chr` */
export declare class AccentChar extends CharType {
    static _Q: string;
}
/** Text. Serialized as `m:t` */
export declare class Text extends OxmlLeafTextElement {
    static _Q: string;
    static _A: string[];
    /** space. Serialized as `xml:space` */
    get space(): SpaceProcessingModeValues | undefined;
    set space(v: SpaceProcessingModeValues | undefined);
}
/** Run Properties. Serialized as `m:rPr` */
export declare class RunProperties extends OxmlCompositeElement<Literal | NormalText | Script | Style | Break | Alignment> {
    static _Q: string;
    /** Literal. */
    get literal(): Literal | undefined;
}
/** Break. Serialized as `m:brk` */
export declare class Break extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Index of Operator to Align To. Serialized as `m:alnAt` */
    get alignAt(): IntegerValue | undefined;
    set alignAt(v: IntegerValue | undefined);
    /** Index of Operator to Align To. Serialized as `m:val` */
    get val(): IntegerValue | undefined;
    set val(v: IntegerValue | undefined);
}
/** Defines the OnOffType Class. */
export declare abstract class OnOffType extends OxmlLeafElement {
    static _A: string[];
    /** value. Serialized as `m:val` */
    get val(): BooleanValues | undefined;
    set val(v: BooleanValues | undefined);
}
/** Wrap Right. Serialized as `m:wrapRight` */
export declare class WrapRight extends OnOffType {
    static _Q: string;
}
/** Use Display Math Defaults. Serialized as `m:dispDef` */
export declare class DisplayDefaults extends OnOffType {
    static _Q: string;
}
/** Small Fraction. Serialized as `m:smallFrac` */
export declare class SmallFraction extends OnOffType {
    static _Q: string;
}
/** Align Scripts. Serialized as `m:alnScr` */
export declare class AlignScripts extends OnOffType {
    static _Q: string;
}
/** Hide Degree. Serialized as `m:degHide` */
export declare class HideDegree extends OnOffType {
    static _Q: string;
}
/** Transparent (Phantom). Serialized as `m:transp` */
export declare class Transparent extends OnOffType {
    static _Q: string;
}
/** Phantom Zero Descent. Serialized as `m:zeroDesc` */
export declare class ZeroDescent extends OnOffType {
    static _Q: string;
}
/** Phantom Zero Ascent. Serialized as `m:zeroAsc` */
export declare class ZeroAscent extends OnOffType {
    static _Q: string;
}
/** Phantom Zero Width. Serialized as `m:zeroWid` */
export declare class ZeroWidth extends OnOffType {
    static _Q: string;
}
/** Phantom Show. Serialized as `m:show` */
export declare class ShowPhantom extends OnOffType {
    static _Q: string;
}
/** Hide Superscript (n-ary). Serialized as `m:supHide` */
export declare class HideSuperArgument extends OnOffType {
    static _Q: string;
}
/** Hide Subscript (n-ary). Serialized as `m:subHide` */
export declare class HideSubArgument extends OnOffType {
    static _Q: string;
}
/** Hide Placeholders (Matrix). Serialized as `m:plcHide` */
export declare class HidePlaceholder extends OnOffType {
    static _Q: string;
}
/** Object Distribution. Serialized as `m:objDist` */
export declare class ObjectDistribution extends OnOffType {
    static _Q: string;
}
/** Maximum Distribution. Serialized as `m:maxDist` */
export declare class MaxDistribution extends OnOffType {
    static _Q: string;
}
/** Delimiter Grow. Serialized as `m:grow` */
export declare class GrowOperators extends OnOffType {
    static _Q: string;
}
/** Border Box Strikethrough Top-Left to Bottom-Right. Serialized as `m:strikeTLBR` */
export declare class StrikeTopLeftToBottomRight extends OnOffType {
    static _Q: string;
}
/** Border Box Strikethrough Bottom-Left to Top-Right. Serialized as `m:strikeBLTR` */
export declare class StrikeBottomLeftToTopRight extends OnOffType {
    static _Q: string;
}
/** Border Box Strikethrough Vertical. Serialized as `m:strikeV` */
export declare class StrikeVertical extends OnOffType {
    static _Q: string;
}
/** Border Box Strikethrough Horizontal. Serialized as `m:strikeH` */
export declare class StrikeHorizontal extends OnOffType {
    static _Q: string;
}
/** Hide Right Edge. Serialized as `m:hideRight` */
export declare class HideRight extends OnOffType {
    static _Q: string;
}
/** Hide Left Edge. Serialized as `m:hideLeft` */
export declare class HideLeft extends OnOffType {
    static _Q: string;
}
/** Hide Bottom Edge. Serialized as `m:hideBot` */
export declare class HideBottom extends OnOffType {
    static _Q: string;
}
/** Hide Top Edge. Serialized as `m:hideTop` */
export declare class HideTop extends OnOffType {
    static _Q: string;
}
/** Differential. Serialized as `m:diff` */
export declare class Differential extends OnOffType {
    static _Q: string;
}
/** No Break. Serialized as `m:noBreak` */
export declare class NoBreak extends OnOffType {
    static _Q: string;
}
/** Operator Emulator. Serialized as `m:opEmu` */
export declare class OperatorEmulator extends OnOffType {
    static _Q: string;
}
/** Align. Serialized as `m:aln` */
export declare class Alignment extends OnOffType {
    static _Q: string;
}
/** Normal Text. Serialized as `m:nor` */
export declare class NormalText extends OnOffType {
    static _Q: string;
}
/** Literal. Serialized as `m:lit` */
export declare class Literal extends OnOffType {
    static _Q: string;
}
/** Math Properties. Serialized as `m:mathPr` */
export declare class MathProperties extends OxmlCompositeElement<MathFont | BreakBinary | BreakBinarySubtraction | SmallFraction | DisplayDefaults | LeftMargin | RightMargin | DefaultJustification | PreSpacing | PostSpacing | InterSpacing | IntraSpacing | WrapIndent | WrapRight | IntegralLimitLocation | NaryLimitLocation> {
    static _Q: string;
    /** Math Font. */
    get mathFont(): MathFont | undefined;
    /** Break on Binary Operators. */
    get breakBinary(): BreakBinary | undefined;
    /** Break on Binary Subtraction. */
    get breakBinarySubtraction(): BreakBinarySubtraction | undefined;
    /** Small Fraction. */
    get smallFraction(): SmallFraction | undefined;
    /** Use Display Math Defaults. */
    get displayDefaults(): DisplayDefaults | undefined;
    /** Left Margin. */
    get leftMargin(): LeftMargin | undefined;
    /** Right Margin. */
    get rightMargin(): RightMargin | undefined;
    /** Default Justification. */
    get defaultJustification(): DefaultJustification | undefined;
    /** Pre-Equation Spacing. */
    get preSpacing(): PreSpacing | undefined;
    /** Post-Equation Spacing. */
    get postSpacing(): PostSpacing | undefined;
    /** Inter-Equation Spacing. */
    get interSpacing(): InterSpacing | undefined;
    /** Intra-Equation Spacing. */
    get intraSpacing(): IntraSpacing | undefined;
}
/** Defines the OfficeMath Class. Serialized as `m:oMath` */
export declare class OfficeMath extends OxmlCompositeElement<Accent | Bar | Box | BorderBox | Delimiter | EquationArray | Fraction | MathFunction | GroupChar | LimitLower | LimitUpper | Matrix | Nary | Phantom | Radical | PreSubSuper | Subscript | SubSuperscript | Superscript | Run | WCustomXmlRun | WSimpleField | WHyperlink | WSdtRun | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | W14RunConflictInsertion | W14RunConflictDeletion | Paragraph | OfficeMath> {
    static _Q: string;
}
/** Defines the Paragraph Class. Serialized as `m:oMathPara` */
export declare class Paragraph extends OxmlCompositeElement<ParagraphProperties | OfficeMath | Run | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | W14RunConflictInsertion | W14RunConflictDeletion | WRun> {
    static _Q: string;
    /** Office Math Paragraph Properties. */
    get paragraphProperties(): ParagraphProperties | undefined;
}
/** Superscript Function. Serialized as `m:sSup` */
export declare class Superscript extends OxmlCompositeElement<SuperscriptProperties | Base | SuperArgument> {
    static _Q: string;
    /** Superscript Properties. */
    get superscriptProperties(): SuperscriptProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
    /** Superscript (Superscript function). */
    get superArgument(): SuperArgument | undefined;
}
/** Sub-Superscript Function. Serialized as `m:sSubSup` */
export declare class SubSuperscript extends OxmlCompositeElement<SubSuperscriptProperties | Base | SubArgument | SuperArgument> {
    static _Q: string;
    /** Sub-Superscript Properties. */
    get subSuperscriptProperties(): SubSuperscriptProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
    /** Subscript (Sub-Superscript). */
    get subArgument(): SubArgument | undefined;
    /** Superscript (Sub-Superscript function). */
    get superArgument(): SuperArgument | undefined;
}
/** Subscript Function. Serialized as `m:sSub` */
export declare class Subscript extends OxmlCompositeElement<SubscriptProperties | Base | SubArgument> {
    static _Q: string;
    /** Subscript Properties. */
    get subscriptProperties(): SubscriptProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
    /** Subscript (Subscript function). */
    get subArgument(): SubArgument | undefined;
}
/** Pre-Sub-Superscript Function. Serialized as `m:sPre` */
export declare class PreSubSuper extends OxmlCompositeElement<PreSubSuperProperties | SubArgument | SuperArgument | Base> {
    static _Q: string;
    /** Pre-Sub-Superscript Properties. */
    get preSubSuperProperties(): PreSubSuperProperties | undefined;
    /** Subscript (Pre-Sub-Superscript). */
    get subArgument(): SubArgument | undefined;
    /** Superscript(Pre-Sub-Superscript function). */
    get superArgument(): SuperArgument | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Radical Function. Serialized as `m:rad` */
export declare class Radical extends OxmlCompositeElement<RadicalProperties | Degree | Base> {
    static _Q: string;
    /** Radical Properties. */
    get radicalProperties(): RadicalProperties | undefined;
    /** Degree. */
    get degree(): Degree | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Phantom Function. Serialized as `m:phant` */
export declare class Phantom extends OxmlCompositeElement<PhantomProperties | Base> {
    static _Q: string;
    /** Phantom Properties. */
    get phantomProperties(): PhantomProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** n-ary Operator Function. Serialized as `m:nary` */
export declare class Nary extends OxmlCompositeElement<NaryProperties | SubArgument | SuperArgument | Base> {
    static _Q: string;
    /** n-ary Properties. */
    get naryProperties(): NaryProperties | undefined;
    /** Lower limit (n-ary) . */
    get subArgument(): SubArgument | undefined;
    /** Upper limit (n-ary). */
    get superArgument(): SuperArgument | undefined;
    /** Base (Argument). */
    get base(): Base | undefined;
}
/** Matrix Function. Serialized as `m:m` */
export declare class Matrix extends OxmlCompositeElement<MatrixProperties | MatrixRow> {
    static _Q: string;
    /** Matrix Properties. */
    get matrixProperties(): MatrixProperties | undefined;
}
/** Upper-Limit Function. Serialized as `m:limUpp` */
export declare class LimitUpper extends OxmlCompositeElement<LimitUpperProperties | Base | Limit> {
    static _Q: string;
    /** Upper Limit Properties. */
    get limitUpperProperties(): LimitUpperProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
    /** Limit (Upper). */
    get limit(): Limit | undefined;
}
/** Lower-Limit Function. Serialized as `m:limLow` */
export declare class LimitLower extends OxmlCompositeElement<LimitLowerProperties | Base | Limit> {
    static _Q: string;
    /** Lower Limit Properties. */
    get limitLowerProperties(): LimitLowerProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
    /** Limit (Lower). */
    get limit(): Limit | undefined;
}
/** Group-Character Function. Serialized as `m:groupChr` */
export declare class GroupChar extends OxmlCompositeElement<GroupCharProperties | Base> {
    static _Q: string;
    /** Group-Character Properties. */
    get groupCharProperties(): GroupCharProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Function Apply Function. Serialized as `m:func` */
export declare class MathFunction extends OxmlCompositeElement<FunctionProperties | FunctionName | Base> {
    static _Q: string;
    /** Function Properties. */
    get functionProperties(): FunctionProperties | undefined;
    /** Function Name. */
    get functionName(): FunctionName | undefined;
    /** Base (Argument). */
    get base(): Base | undefined;
}
/** Fraction Function. Serialized as `m:f` */
export declare class Fraction extends OxmlCompositeElement<FractionProperties | Numerator | Denominator> {
    static _Q: string;
    /** Fraction Properties. */
    get fractionProperties(): FractionProperties | undefined;
    /** Numerator. */
    get numerator(): Numerator | undefined;
    /** Denominator. */
    get denominator(): Denominator | undefined;
}
/** Equation-Array Function. Serialized as `m:eqArr` */
export declare class EquationArray extends OxmlCompositeElement<EquationArrayProperties | Base> {
    static _Q: string;
    /** Equation Array Properties. */
    get equationArrayProperties(): EquationArrayProperties | undefined;
}
/** Delimiter Function. Serialized as `m:d` */
export declare class Delimiter extends OxmlCompositeElement<DelimiterProperties | Base> {
    static _Q: string;
    /** Delimiter Properties. */
    get delimiterProperties(): DelimiterProperties | undefined;
}
/** Border-Box Function. Serialized as `m:borderBox` */
export declare class BorderBox extends OxmlCompositeElement<BorderBoxProperties | Base> {
    static _Q: string;
    /** Border Box Properties. */
    get borderBoxProperties(): BorderBoxProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Box Function. Serialized as `m:box` */
export declare class Box extends OxmlCompositeElement<BoxProperties | Base> {
    static _Q: string;
    /** Box Properties. */
    get boxProperties(): BoxProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Bar. Serialized as `m:bar` */
export declare class Bar extends OxmlCompositeElement<BarProperties | Base> {
    static _Q: string;
    /** Bar Properties. */
    get barProperties(): BarProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Accent. Serialized as `m:acc` */
export declare class Accent extends OxmlCompositeElement<AccentProperties | Base> {
    static _Q: string;
    /** Accent Properties. */
    get accentProperties(): AccentProperties | undefined;
    /** Base. */
    get base(): Base | undefined;
}
/** Defines the Run Class. Serialized as `m:r` */
export declare class Run extends OxmlCompositeElement<RunProperties | WRunProperties | WBreak | WText | WDeletedText | WFieldCode | WDeletedFieldCode | WNoBreakHyphen | WSoftHyphen | WDayShort | WMonthShort | WYearShort | WDayLong | WMonthLong | WYearLong | WAnnotationReferenceMark | WFootnoteReferenceMark | WEndnoteReferenceMark | WSeparatorMark | WContinuationSeparatorMark | WSymbolChar | WPageNumber | WCarriageReturn | WTabChar | WEmbeddedObject | WPicture | WFieldChar | WRuby | WFootnoteReference | WEndnoteReference | WCommentReference | WDrawing | WPositionalTab | WLastRenderedPageBreak | Text> {
    static _Q: string;
    /** Run Properties. */
    get mathRunProperties(): RunProperties | undefined;
    /** Run Properties. */
    get runProperties(): WRunProperties | undefined;
}
/** style. Serialized as `m:sty` */
export declare class Style extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): StyleValues | undefined;
    set val(v: StyleValues | undefined);
}
/** Script. Serialized as `m:scr` */
export declare class Script extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `m:val` */
    get val(): ScriptValues | undefined;
    set val(v: ScriptValues | undefined);
}
export declare function initMathNamespace(): {
    prefix: string;
    xmlns: string;
};
