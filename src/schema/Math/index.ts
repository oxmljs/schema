import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { UInt16Value } from '../../framework/types/UInt16Value';
import { SpaceProcessingModeValues, SpaceProcessingModeValuesArray } from '..';import { CustomXmlRun as WCustomXmlRun } from '../Wordprocessing';
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


export enum HorizontalAlignmentValues {
    /** Left Justification. Serialized value: `left` */
    Left = 'left',
    /** Center. Serialized value: `center` */
    Center = 'center',
    /** Right. Serialized value: `right` */
    Right = 'right',
}

export const HorizontalAlignmentValuesArray = [
    HorizontalAlignmentValues.Left,
    HorizontalAlignmentValues.Center,
    HorizontalAlignmentValues.Right,
] as const;

export enum ShapeDelimiterValues {
    /** Centered (Delimiters). Serialized value: `centered` */
    Centered = 'centered',
    /** Match. Serialized value: `match` */
    Match = 'match',
}

export const ShapeDelimiterValuesArray = [
    ShapeDelimiterValues.Centered,
    ShapeDelimiterValues.Match,
] as const;

export enum FractionTypeValues {
    /** Bar Fraction. Serialized value: `bar` */
    Bar = 'bar',
    /** Skewed. Serialized value: `skw` */
    Skewed = 'skw',
    /** Linear Fraction. Serialized value: `lin` */
    Linear = 'lin',
    /** No-Bar Fraction (Stack). Serialized value: `noBar` */
    NoBar = 'noBar',
}

export const FractionTypeValuesArray = [
    FractionTypeValues.Bar,
    FractionTypeValues.Skewed,
    FractionTypeValues.Linear,
    FractionTypeValues.NoBar,
] as const;

export enum LimitLocationValues {
    /** Under-Over location. Serialized value: `undOvr` */
    UnderOver = 'undOvr',
    /** Subscript-Superscript location. Serialized value: `subSup` */
    SubscriptSuperscript = 'subSup',
}

export const LimitLocationValuesArray = [
    LimitLocationValues.UnderOver,
    LimitLocationValues.SubscriptSuperscript,
] as const;

export enum VerticalJustificationValues {
    /** Top. Serialized value: `top` */
    Top = 'top',
    /** Bottom Alignment. Serialized value: `bot` */
    Bottom = 'bot',
}

export const VerticalJustificationValuesArray = [
    VerticalJustificationValues.Top,
    VerticalJustificationValues.Bottom,
] as const;

export enum ScriptValues {
    /** Roman. Serialized value: `roman` */
    Roman = 'roman',
    /** Script. Serialized value: `script` */
    Script = 'script',
    /** Fraktur. Serialized value: `fraktur` */
    Fraktur = 'fraktur',
    /** double-struck. Serialized value: `double-struck` */
    DoubleStruck = 'double-struck',
    /** Sans-Serif. Serialized value: `sans-serif` */
    SansSerif = 'sans-serif',
    /** Monospace. Serialized value: `monospace` */
    Monospace = 'monospace',
}

export const ScriptValuesArray = [
    ScriptValues.Roman,
    ScriptValues.Script,
    ScriptValues.Fraktur,
    ScriptValues.DoubleStruck,
    ScriptValues.SansSerif,
    ScriptValues.Monospace,
] as const;

export enum StyleValues {
    /** Plain. Serialized value: `p` */
    Plain = 'p',
    /** Bold. Serialized value: `b` */
    Bold = 'b',
    /** Italic. Serialized value: `i` */
    Italic = 'i',
    /** Bold-Italic. Serialized value: `bi` */
    BoldItalic = 'bi',
}

export const StyleValuesArray = [
    StyleValues.Plain,
    StyleValues.Bold,
    StyleValues.Italic,
    StyleValues.BoldItalic,
] as const;

export enum JustificationValues {
    /** Left Justification. Serialized value: `left` */
    Left = 'left',
    /** Right. Serialized value: `right` */
    Right = 'right',
    /** Center (Equation). Serialized value: `center` */
    Center = 'center',
    /** Centered as Group (Equations). Serialized value: `centerGroup` */
    CenterGroup = 'centerGroup',
}

export const JustificationValuesArray = [
    JustificationValues.Left,
    JustificationValues.Right,
    JustificationValues.Center,
    JustificationValues.CenterGroup,
] as const;

export enum BreakBinaryOperatorValues {
    /** Before. Serialized value: `before` */
    Before = 'before',
    /** After. Serialized value: `after` */
    After = 'after',
    /** Repeat. Serialized value: `repeat` */
    Repeat = 'repeat',
}

export const BreakBinaryOperatorValuesArray = [
    BreakBinaryOperatorValues.Before,
    BreakBinaryOperatorValues.After,
    BreakBinaryOperatorValues.Repeat,
] as const;

export enum BreakBinarySubtractionValues {
    /** Minus Minus. Serialized value: `--` */
    MinusMinus = '--',
    /** Minus Plus. Serialized value: `-+` */
    MinusPlus = '-+',
    /** Plus Minus. Serialized value: `+-` */
    PlusMinus = '+-',
}

export const BreakBinarySubtractionValuesArray = [
    BreakBinarySubtractionValues.MinusMinus,
    BreakBinarySubtractionValues.MinusPlus,
    BreakBinarySubtractionValues.PlusMinus,
] as const;

export enum VerticalAlignmentValues {
    /** Top. Serialized value: `top` */
    Top = 'top',
    /** Center (Function). Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** Bottom Alignment. Serialized value: `bot` */
    Bot = 'bot',
}

export const VerticalAlignmentValuesArray = [
    VerticalAlignmentValues.Top,
    VerticalAlignmentValues.Center,
    VerticalAlignmentValues.Bottom,
    VerticalAlignmentValues.Bot,
] as const;

export enum BooleanValues {
    /** undefined. Serialized value: `true` */
    True = 'true',
    /** undefined. Serialized value: `false` */
    False = 'false',
    /** On. Serialized value: `on` */
    On = 'on',
    /** Off. Serialized value: `off` */
    Off = 'off',
    /** undefined. Serialized value: `0` */
    Zero = '0',
    /** undefined. Serialized value: `1` */
    One = '1',
}

export const BooleanValuesArray = [
    BooleanValues.True,
    BooleanValues.False,
    BooleanValues.On,
    BooleanValues.Off,
    BooleanValues.Zero,
    BooleanValues.One,
] as const;

/** Office Math Paragraph Properties. Serialized as `m:oMathParaPr` */
export class ParagraphProperties extends OxmlCompositeElement<Justification> {

    public static override _Q = 'm:oMathParaPr';
    /** Justification. */
    public get justification(): Justification | undefined { return this._f(Justification); }

}
/** Break on Binary Subtraction. Serialized as `m:brkBinSub` */
export class BreakBinarySubtraction extends OxmlLeafElement {

    public static override _Q = 'm:brkBinSub';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): BreakBinarySubtractionValues | undefined { return this._g('m:val'); }
    public set val(v: BreakBinarySubtractionValues | undefined) { this._s('m:val', v); }

}
/** Break on Binary Operators. Serialized as `m:brkBin` */
export class BreakBinary extends OxmlLeafElement {

    public static override _Q = 'm:brkBin';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): BreakBinaryOperatorValues | undefined { return this._g('m:val'); }
    public set val(v: BreakBinaryOperatorValues | undefined) { this._s('m:val', v); }

}
/** Math Font. Serialized as `m:mathFont` */
export class MathFont extends OxmlLeafElement {

    public static override _Q = 'm:mathFont';
    public static override _A = ['m:val',];
    /** val. Serialized as `m:val` */
    public get val(): StringValue | undefined { return this._g('m:val'); }
    public set val(v: StringValue | undefined) { this._s('m:val', v); }

}
/** Defines the OfficeMathJustificationType Class. */
export abstract class OfficeMathJustificationType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): JustificationValues | undefined { return this._g('m:val'); }
    public set val(v: JustificationValues | undefined) { this._s('m:val', v); }

}
/** Default Justification. Serialized as `m:defJc` */
export class DefaultJustification extends OfficeMathJustificationType {

    public static override _Q = 'm:defJc';

}
/** Justification. Serialized as `m:jc` */
export class Justification extends OfficeMathJustificationType {

    public static override _Q = 'm:jc';

}
/** Argument Properties. Serialized as `m:argPr` */
export class ArgumentProperties extends OxmlCompositeElement<ArgumentSize> {

    public static override _Q = 'm:argPr';
    /** Argument Size. */
    public get argumentSize(): ArgumentSize | undefined { return this._f(ArgumentSize); }

}
/** Argument Size. Serialized as `m:argSz` */
export class ArgumentSize extends OxmlLeafElement {

    public static override _Q = 'm:argSz';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): IntegerValue | undefined { return this._g('m:val'); }
    public set val(v: IntegerValue | undefined) { this._s('m:val', v); }

}
/** Superscript Properties. Serialized as `m:sSupPr` */
export class SuperscriptProperties extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'm:sSupPr';
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Sub-Superscript Properties. Serialized as `m:sSubSupPr` */
export class SubSuperscriptProperties extends OxmlCompositeElement<AlignScripts | ControlProperties> {

    public static override _Q = 'm:sSubSupPr';
    /** Align Scripts. */
    public get alignScripts(): AlignScripts | undefined { return this._f(AlignScripts); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Subscript Properties. Serialized as `m:sSubPr` */
export class SubscriptProperties extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'm:sSubPr';
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Pre-Sub-Superscript Properties. Serialized as `m:sPrePr` */
export class PreSubSuperProperties extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'm:sPrePr';
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Radical Properties. Serialized as `m:radPr` */
export class RadicalProperties extends OxmlCompositeElement<HideDegree | ControlProperties> {

    public static override _Q = 'm:radPr';
    /** Hide Degree. */
    public get hideDegree(): HideDegree | undefined { return this._f(HideDegree); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Phantom Properties. Serialized as `m:phantPr` */
export class PhantomProperties extends OxmlCompositeElement<ShowPhantom | ZeroWidth | ZeroAscent | ZeroDescent | Transparent | ControlProperties> {

    public static override _Q = 'm:phantPr';
    /** Phantom Show. */
    public get showPhantom(): ShowPhantom | undefined { return this._f(ShowPhantom); }
    /** Phantom Zero Width. */
    public get zeroWidth(): ZeroWidth | undefined { return this._f(ZeroWidth); }
    /** Phantom Zero Ascent. */
    public get zeroAscent(): ZeroAscent | undefined { return this._f(ZeroAscent); }
    /** Phantom Zero Descent. */
    public get zeroDescent(): ZeroDescent | undefined { return this._f(ZeroDescent); }
    /** Transparent (Phantom). */
    public get transparent(): Transparent | undefined { return this._f(Transparent); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** n-ary Properties. Serialized as `m:naryPr` */
export class NaryProperties extends OxmlCompositeElement<AccentChar | LimitLocation | GrowOperators | HideSubArgument | HideSuperArgument | ControlProperties> {

    public static override _Q = 'm:naryPr';
    /** n-ary Operator Character. */
    public get accentChar(): AccentChar | undefined { return this._f(AccentChar); }
    /** n-ary Limit Location. */
    public get limitLocation(): LimitLocation | undefined { return this._f(LimitLocation); }
    /** n-ary Grow. */
    public get growOperators(): GrowOperators | undefined { return this._f(GrowOperators); }
    /** Hide Subscript (n-ary). */
    public get hideSubArgument(): HideSubArgument | undefined { return this._f(HideSubArgument); }
    /** Hide Superscript (n-ary). */
    public get hideSuperArgument(): HideSuperArgument | undefined { return this._f(HideSuperArgument); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Defines the LimitLocationType Class. */
export abstract class LimitLocationType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): LimitLocationValues | undefined { return this._g('m:val'); }
    public set val(v: LimitLocationValues | undefined) { this._s('m:val', v); }

}
/** n-ary Limit Location. Serialized as `m:naryLim` */
export class NaryLimitLocation extends LimitLocationType {

    public static override _Q = 'm:naryLim';

}
/** Integral Limit Locations. Serialized as `m:intLim` */
export class IntegralLimitLocation extends LimitLocationType {

    public static override _Q = 'm:intLim';

}
/** n-ary Limit Location. Serialized as `m:limLoc` */
export class LimitLocation extends LimitLocationType {

    public static override _Q = 'm:limLoc';

}
/** Matrix Row. Serialized as `m:mr` */
export class MatrixRow extends OxmlCompositeElement<Base> {

    public static override _Q = 'm:mr';

}
/** Matrix Properties. Serialized as `m:mPr` */
export class MatrixProperties extends OxmlCompositeElement<BaseJustification | HidePlaceholder | RowSpacingRule | ColumnGapRule | RowSpacing | ColumnSpacing | ColumnGap | MatrixColumns | ControlProperties> {

    public static override _Q = 'm:mPr';
    /** Matrix Base Justification. */
    public get baseJustification(): BaseJustification | undefined { return this._f(BaseJustification); }
    /** Hide Placeholders (Matrix). */
    public get hidePlaceholder(): HidePlaceholder | undefined { return this._f(HidePlaceholder); }
    /** Row Spacing Rule. */
    public get rowSpacingRule(): RowSpacingRule | undefined { return this._f(RowSpacingRule); }
    /** Matrix Column Gap Rule. */
    public get columnGapRule(): ColumnGapRule | undefined { return this._f(ColumnGapRule); }
    /** Row Spacing (Matrix). */
    public get rowSpacing(): RowSpacing | undefined { return this._f(RowSpacing); }
    /** Matrix Column Spacing. */
    public get columnSpacing(): ColumnSpacing | undefined { return this._f(ColumnSpacing); }
    /** Matrix Column Gap. */
    public get columnGap(): ColumnGap | undefined { return this._f(ColumnGap); }
    /** Matrix Columns. */
    public get matrixColumns(): MatrixColumns | undefined { return this._f(MatrixColumns); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Matrix Columns. Serialized as `m:mcs` */
export class MatrixColumns extends OxmlCompositeElement<MatrixColumn> {

    public static override _Q = 'm:mcs';

}
/** Defines the TwipsMeasureType Class. */
export abstract class TwipsMeasureType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): UInt32Value | undefined { return this._g('m:val'); }
    public set val(v: UInt32Value | undefined) { this._s('m:val', v); }

}
/** Wrap Indent. Serialized as `m:wrapIndent` */
export class WrapIndent extends TwipsMeasureType {

    public static override _Q = 'm:wrapIndent';

}
/** Intra-Equation Spacing. Serialized as `m:intraSp` */
export class IntraSpacing extends TwipsMeasureType {

    public static override _Q = 'm:intraSp';

}
/** Inter-Equation Spacing. Serialized as `m:interSp` */
export class InterSpacing extends TwipsMeasureType {

    public static override _Q = 'm:interSp';

}
/** Post-Equation Spacing. Serialized as `m:postSp` */
export class PostSpacing extends TwipsMeasureType {

    public static override _Q = 'm:postSp';

}
/** Pre-Equation Spacing. Serialized as `m:preSp` */
export class PreSpacing extends TwipsMeasureType {

    public static override _Q = 'm:preSp';

}
/** Right Margin. Serialized as `m:rMargin` */
export class RightMargin extends TwipsMeasureType {

    public static override _Q = 'm:rMargin';

}
/** Left Margin. Serialized as `m:lMargin` */
export class LeftMargin extends TwipsMeasureType {

    public static override _Q = 'm:lMargin';

}
/** Matrix Column Spacing. Serialized as `m:cSp` */
export class ColumnSpacing extends TwipsMeasureType {

    public static override _Q = 'm:cSp';

}
/** Matrix Column. Serialized as `m:mc` */
export class MatrixColumn extends OxmlCompositeElement<MatrixColumnProperties> {

    public static override _Q = 'm:mc';
    /** Matrix Column Properties. */
    public get matrixColumnProperties(): MatrixColumnProperties | undefined { return this._f(MatrixColumnProperties); }

}
/** Matrix Column Properties. Serialized as `m:mcPr` */
export class MatrixColumnProperties extends OxmlCompositeElement<MatrixColumnCount | MatrixColumnJustification> {

    public static override _Q = 'm:mcPr';
    /** Matrix Column Count. */
    public get matrixColumnCount(): MatrixColumnCount | undefined { return this._f(MatrixColumnCount); }
    /** Matrix Column Justification. */
    public get matrixColumnJustification(): MatrixColumnJustification | undefined { return this._f(MatrixColumnJustification); }

}
/** Matrix Column Justification. Serialized as `m:mcJc` */
export class MatrixColumnJustification extends OxmlLeafElement {

    public static override _Q = 'm:mcJc';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): HorizontalAlignmentValues | undefined { return this._g('m:val'); }
    public set val(v: HorizontalAlignmentValues | undefined) { this._s('m:val', v); }

}
/** Matrix Column Count. Serialized as `m:count` */
export class MatrixColumnCount extends OxmlLeafElement {

    public static override _Q = 'm:count';
    public static override _A = ['m:val',];
    /** val. Serialized as `m:val` */
    public get val(): IntegerValue | undefined { return this._g('m:val'); }
    public set val(v: IntegerValue | undefined) { this._s('m:val', v); }

}
/** Upper Limit Properties. Serialized as `m:limUppPr` */
export class LimitUpperProperties extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'm:limUppPr';
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Lower Limit Properties. Serialized as `m:limLowPr` */
export class LimitLowerProperties extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'm:limLowPr';
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Group-Character Properties. Serialized as `m:groupChrPr` */
export class GroupCharProperties extends OxmlCompositeElement<AccentChar | Position | VerticalJustification | ControlProperties> {

    public static override _Q = 'm:groupChrPr';
    /** Group Character (Grouping Character). */
    public get accentChar(): AccentChar | undefined { return this._f(AccentChar); }
    /** Position (Group Character). */
    public get position(): Position | undefined { return this._f(Position); }
    /** Vertical Justification. */
    public get verticalJustification(): VerticalJustification | undefined { return this._f(VerticalJustification); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Function Properties. Serialized as `m:funcPr` */
export class FunctionProperties extends OxmlCompositeElement<ControlProperties> {

    public static override _Q = 'm:funcPr';
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Fraction Properties. Serialized as `m:fPr` */
export class FractionProperties extends OxmlCompositeElement<FractionType | ControlProperties> {

    public static override _Q = 'm:fPr';
    /** Fraction type. */
    public get fractionType(): FractionType | undefined { return this._f(FractionType); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Fraction type. Serialized as `m:type` */
export class FractionType extends OxmlLeafElement {

    public static override _Q = 'm:type';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): FractionTypeValues | undefined { return this._g('m:val'); }
    public set val(v: FractionTypeValues | undefined) { this._s('m:val', v); }

}
/** Equation Array Properties. Serialized as `m:eqArrPr` */
export class EquationArrayProperties extends OxmlCompositeElement<BaseJustification | MaxDistribution | ObjectDistribution | RowSpacingRule | RowSpacing | ControlProperties> {

    public static override _Q = 'm:eqArrPr';
    /** Equation Array Base Justification. */
    public get baseJustification(): BaseJustification | undefined { return this._f(BaseJustification); }
    /** Maximum Distribution. */
    public get maxDistribution(): MaxDistribution | undefined { return this._f(MaxDistribution); }
    /** Object Distribution. */
    public get objectDistribution(): ObjectDistribution | undefined { return this._f(ObjectDistribution); }
    /** Row Spacing Rule. */
    public get rowSpacingRule(): RowSpacingRule | undefined { return this._f(RowSpacingRule); }
    /** Row Spacing (Equation Array). */
    public get rowSpacing(): RowSpacing | undefined { return this._f(RowSpacing); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Defines the UnsignedShortType Class. */
export abstract class UnsignedShortType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** val. Serialized as `m:val` */
    public get val(): UInt16Value | undefined { return this._g('m:val'); }
    public set val(v: UInt16Value | undefined) { this._s('m:val', v); }

}
/** Matrix Column Gap. Serialized as `m:cGp` */
export class ColumnGap extends UnsignedShortType {

    public static override _Q = 'm:cGp';

}
/** Row Spacing (Equation Array). Serialized as `m:rSp` */
export class RowSpacing extends UnsignedShortType {

    public static override _Q = 'm:rSp';

}
/** Defines the SpacingRuleType Class. */
export abstract class SpacingRuleType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): IntegerValue | undefined { return this._g('m:val'); }
    public set val(v: IntegerValue | undefined) { this._s('m:val', v); }

}
/** Matrix Column Gap Rule. Serialized as `m:cGpRule` */
export class ColumnGapRule extends SpacingRuleType {

    public static override _Q = 'm:cGpRule';

}
/** Row Spacing Rule. Serialized as `m:rSpRule` */
export class RowSpacingRule extends SpacingRuleType {

    public static override _Q = 'm:rSpRule';

}
/** Equation Array Base Justification. Serialized as `m:baseJc` */
export class BaseJustification extends OxmlLeafElement {

    public static override _Q = 'm:baseJc';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): VerticalAlignmentValues | undefined { return this._g('m:val'); }
    public set val(v: VerticalAlignmentValues | undefined) { this._s('m:val', v); }

}
/** Delimiter Properties. Serialized as `m:dPr` */
export class DelimiterProperties extends OxmlCompositeElement<BeginChar | SeparatorChar | EndChar | GrowOperators | Shape | ControlProperties> {

    public static override _Q = 'm:dPr';
    /** Delimiter Beginning Character. */
    public get beginChar(): BeginChar | undefined { return this._f(BeginChar); }
    /** Delimiter Separator Character. */
    public get separatorChar(): SeparatorChar | undefined { return this._f(SeparatorChar); }
    /** Delimiter Ending Character. */
    public get endChar(): EndChar | undefined { return this._f(EndChar); }
    /** Delimiter Grow. */
    public get growOperators(): GrowOperators | undefined { return this._f(GrowOperators); }
    /** Shape (Delimiters). */
    public get shape(): Shape | undefined { return this._f(Shape); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Shape (Delimiters). Serialized as `m:shp` */
export class Shape extends OxmlLeafElement {

    public static override _Q = 'm:shp';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): ShapeDelimiterValues | undefined { return this._g('m:val'); }
    public set val(v: ShapeDelimiterValues | undefined) { this._s('m:val', v); }

}
/** Border Box Properties. Serialized as `m:borderBoxPr` */
export class BorderBoxProperties extends OxmlCompositeElement<HideTop | HideBottom | HideLeft | HideRight | StrikeHorizontal | StrikeVertical | StrikeBottomLeftToTopRight | StrikeTopLeftToBottomRight | ControlProperties> {

    public static override _Q = 'm:borderBoxPr';
    /** Hide Top Edge. */
    public get hideTop(): HideTop | undefined { return this._f(HideTop); }
    /** Hide Bottom Edge. */
    public get hideBottom(): HideBottom | undefined { return this._f(HideBottom); }
    /** Hide Left Edge. */
    public get hideLeft(): HideLeft | undefined { return this._f(HideLeft); }
    /** Hide Right Edge. */
    public get hideRight(): HideRight | undefined { return this._f(HideRight); }
    /** Border Box Strikethrough Horizontal. */
    public get strikeHorizontal(): StrikeHorizontal | undefined { return this._f(StrikeHorizontal); }
    /** Border Box Strikethrough Vertical. */
    public get strikeVertical(): StrikeVertical | undefined { return this._f(StrikeVertical); }
    /** Border Box Strikethrough Bottom-Left to Top-Right. */
    public get strikeBottomLeftToTopRight(): StrikeBottomLeftToTopRight | undefined { return this._f(StrikeBottomLeftToTopRight); }
    /** Border Box Strikethrough Top-Left to Bottom-Right. */
    public get strikeTopLeftToBottomRight(): StrikeTopLeftToBottomRight | undefined { return this._f(StrikeTopLeftToBottomRight); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Box Properties. Serialized as `m:boxPr` */
export class BoxProperties extends OxmlCompositeElement<OperatorEmulator | NoBreak | Differential | Break | Alignment | ControlProperties> {

    public static override _Q = 'm:boxPr';
    /** Operator Emulator. */
    public get operatorEmulator(): OperatorEmulator | undefined { return this._f(OperatorEmulator); }
    /** No Break. */
    public get noBreak(): NoBreak | undefined { return this._f(NoBreak); }
    /** Differential. */
    public get differential(): Differential | undefined { return this._f(Differential); }
    /** Break. */
    public get break(): Break | undefined { return this._f(Break); }
    /** Alignment. */
    public get alignment(): Alignment | undefined { return this._f(Alignment); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Bar Properties. Serialized as `m:barPr` */
export class BarProperties extends OxmlCompositeElement<Position | ControlProperties> {

    public static override _Q = 'm:barPr';
    /** Position (Bar). */
    public get position(): Position | undefined { return this._f(Position); }
    /** Returns ControlProperties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Defines the TopBottomType Class. */
export abstract class TopBottomType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): VerticalJustificationValues | undefined { return this._g('m:val'); }
    public set val(v: VerticalJustificationValues | undefined) { this._s('m:val', v); }

}
/** Vertical Justification. Serialized as `m:vertJc` */
export class VerticalJustification extends TopBottomType {

    public static override _Q = 'm:vertJc';

}
/** Position (Bar). Serialized as `m:pos` */
export class Position extends TopBottomType {

    public static override _Q = 'm:pos';

}
/** Defines the OfficeMathArgumentType Class. */
export abstract class OfficeMathArgumentType extends OxmlCompositeElement<ArgumentProperties | Accent | Bar | Box | BorderBox | Delimiter | EquationArray | Fraction | MathFunction | GroupChar | LimitLower | LimitUpper | Matrix | Nary | Phantom | Radical | PreSubSuper | Subscript | SubSuperscript | Superscript | Run | WCustomXmlRun | WSimpleField | WHyperlink | WSdtRun | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | W14RunConflictInsertion | W14RunConflictDeletion | Paragraph | OfficeMath | ControlProperties> {

    /** Argument Properties. */
    public get argumentProperties(): ArgumentProperties | undefined { return this._f(ArgumentProperties); }

}
/** Degree. Serialized as `m:deg` */
export class Degree extends OfficeMathArgumentType {

    public static override _Q = 'm:deg';

}
/** Upper limit (n-ary). Serialized as `m:sup` */
export class SuperArgument extends OfficeMathArgumentType {

    public static override _Q = 'm:sup';

}
/** Lower limit (n-ary) . Serialized as `m:sub` */
export class SubArgument extends OfficeMathArgumentType {

    public static override _Q = 'm:sub';

}
/** Limit (Lower). Serialized as `m:lim` */
export class Limit extends OfficeMathArgumentType {

    public static override _Q = 'm:lim';

}
/** Function Name. Serialized as `m:fName` */
export class FunctionName extends OfficeMathArgumentType {

    public static override _Q = 'm:fName';

}
/** Denominator. Serialized as `m:den` */
export class Denominator extends OfficeMathArgumentType {

    public static override _Q = 'm:den';

}
/** Numerator. Serialized as `m:num` */
export class Numerator extends OfficeMathArgumentType {

    public static override _Q = 'm:num';

}
/** Base. Serialized as `m:e` */
export class Base extends OfficeMathArgumentType {

    public static override _Q = 'm:e';

}
/** Accent Properties. Serialized as `m:accPr` */
export class AccentProperties extends OxmlCompositeElement<AccentChar | ControlProperties> {

    public static override _Q = 'm:accPr';
    /** Accent Character. */
    public get accentChar(): AccentChar | undefined { return this._f(AccentChar); }
    /** Control Properties. */
    public get controlProperties(): ControlProperties | undefined { return this._f(ControlProperties); }

}
/** Control Properties. Serialized as `m:ctrlPr` */
export class ControlProperties extends OxmlCompositeElement<WRunProperties | WInsertedMathControl | WDeletedMathControl | WMoveFromMathControl | WMoveToMathControl> {

    public static override _Q = 'm:ctrlPr';

}
/** Defines the CharType Class. */
export abstract class CharType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** value. Serialized as `m:val` */
    public get val(): StringValue | undefined { return this._g('m:val'); }
    public set val(v: StringValue | undefined) { this._s('m:val', v); }

}
/** Delimiter Ending Character. Serialized as `m:endChr` */
export class EndChar extends CharType {

    public static override _Q = 'm:endChr';

}
/** Delimiter Separator Character. Serialized as `m:sepChr` */
export class SeparatorChar extends CharType {

    public static override _Q = 'm:sepChr';

}
/** Delimiter Beginning Character. Serialized as `m:begChr` */
export class BeginChar extends CharType {

    public static override _Q = 'm:begChr';

}
/** Accent Character. Serialized as `m:chr` */
export class AccentChar extends CharType {

    public static override _Q = 'm:chr';

}
/** Text. Serialized as `m:t` */
export class Text extends OxmlLeafTextElement {

    public static override _Q = 'm:t';
    public static override _A = ['xml:space',];
    /** space. Serialized as `xml:space` */
    public get space(): SpaceProcessingModeValues | undefined { return this._g('xml:space'); }
    public set space(v: SpaceProcessingModeValues | undefined) { this._s('xml:space', v); }

}
/** Run Properties. Serialized as `m:rPr` */
export class RunProperties extends OxmlCompositeElement<Literal | NormalText | Script | Style | Break | Alignment> {

    public static override _Q = 'm:rPr';
    /** Literal. */
    public get literal(): Literal | undefined { return this._f(Literal); }

}
/** Break. Serialized as `m:brk` */
export class Break extends OxmlLeafElement {

    public static override _Q = 'm:brk';
    public static override _A = ['m:alnAt','m:val',];
    /** Index of Operator to Align To. Serialized as `m:alnAt` */
    public get alignAt(): IntegerValue | undefined { return this._g('m:alnAt'); }
    public set alignAt(v: IntegerValue | undefined) { this._s('m:alnAt', v); }
    /** Index of Operator to Align To. Serialized as `m:val` */
    public get val(): IntegerValue | undefined { return this._g('m:val'); }
    public set val(v: IntegerValue | undefined) { this._s('m:val', v); }

}
/** Defines the OnOffType Class. */
export abstract class OnOffType extends OxmlLeafElement {

    public static override _A = ['m:val',];
    /** value. Serialized as `m:val` */
    public get val(): BooleanValues | undefined { return this._g('m:val'); }
    public set val(v: BooleanValues | undefined) { this._s('m:val', v); }

}
/** Wrap Right. Serialized as `m:wrapRight` */
export class WrapRight extends OnOffType {

    public static override _Q = 'm:wrapRight';

}
/** Use Display Math Defaults. Serialized as `m:dispDef` */
export class DisplayDefaults extends OnOffType {

    public static override _Q = 'm:dispDef';

}
/** Small Fraction. Serialized as `m:smallFrac` */
export class SmallFraction extends OnOffType {

    public static override _Q = 'm:smallFrac';

}
/** Align Scripts. Serialized as `m:alnScr` */
export class AlignScripts extends OnOffType {

    public static override _Q = 'm:alnScr';

}
/** Hide Degree. Serialized as `m:degHide` */
export class HideDegree extends OnOffType {

    public static override _Q = 'm:degHide';

}
/** Transparent (Phantom). Serialized as `m:transp` */
export class Transparent extends OnOffType {

    public static override _Q = 'm:transp';

}
/** Phantom Zero Descent. Serialized as `m:zeroDesc` */
export class ZeroDescent extends OnOffType {

    public static override _Q = 'm:zeroDesc';

}
/** Phantom Zero Ascent. Serialized as `m:zeroAsc` */
export class ZeroAscent extends OnOffType {

    public static override _Q = 'm:zeroAsc';

}
/** Phantom Zero Width. Serialized as `m:zeroWid` */
export class ZeroWidth extends OnOffType {

    public static override _Q = 'm:zeroWid';

}
/** Phantom Show. Serialized as `m:show` */
export class ShowPhantom extends OnOffType {

    public static override _Q = 'm:show';

}
/** Hide Superscript (n-ary). Serialized as `m:supHide` */
export class HideSuperArgument extends OnOffType {

    public static override _Q = 'm:supHide';

}
/** Hide Subscript (n-ary). Serialized as `m:subHide` */
export class HideSubArgument extends OnOffType {

    public static override _Q = 'm:subHide';

}
/** Hide Placeholders (Matrix). Serialized as `m:plcHide` */
export class HidePlaceholder extends OnOffType {

    public static override _Q = 'm:plcHide';

}
/** Object Distribution. Serialized as `m:objDist` */
export class ObjectDistribution extends OnOffType {

    public static override _Q = 'm:objDist';

}
/** Maximum Distribution. Serialized as `m:maxDist` */
export class MaxDistribution extends OnOffType {

    public static override _Q = 'm:maxDist';

}
/** Delimiter Grow. Serialized as `m:grow` */
export class GrowOperators extends OnOffType {

    public static override _Q = 'm:grow';

}
/** Border Box Strikethrough Top-Left to Bottom-Right. Serialized as `m:strikeTLBR` */
export class StrikeTopLeftToBottomRight extends OnOffType {

    public static override _Q = 'm:strikeTLBR';

}
/** Border Box Strikethrough Bottom-Left to Top-Right. Serialized as `m:strikeBLTR` */
export class StrikeBottomLeftToTopRight extends OnOffType {

    public static override _Q = 'm:strikeBLTR';

}
/** Border Box Strikethrough Vertical. Serialized as `m:strikeV` */
export class StrikeVertical extends OnOffType {

    public static override _Q = 'm:strikeV';

}
/** Border Box Strikethrough Horizontal. Serialized as `m:strikeH` */
export class StrikeHorizontal extends OnOffType {

    public static override _Q = 'm:strikeH';

}
/** Hide Right Edge. Serialized as `m:hideRight` */
export class HideRight extends OnOffType {

    public static override _Q = 'm:hideRight';

}
/** Hide Left Edge. Serialized as `m:hideLeft` */
export class HideLeft extends OnOffType {

    public static override _Q = 'm:hideLeft';

}
/** Hide Bottom Edge. Serialized as `m:hideBot` */
export class HideBottom extends OnOffType {

    public static override _Q = 'm:hideBot';

}
/** Hide Top Edge. Serialized as `m:hideTop` */
export class HideTop extends OnOffType {

    public static override _Q = 'm:hideTop';

}
/** Differential. Serialized as `m:diff` */
export class Differential extends OnOffType {

    public static override _Q = 'm:diff';

}
/** No Break. Serialized as `m:noBreak` */
export class NoBreak extends OnOffType {

    public static override _Q = 'm:noBreak';

}
/** Operator Emulator. Serialized as `m:opEmu` */
export class OperatorEmulator extends OnOffType {

    public static override _Q = 'm:opEmu';

}
/** Align. Serialized as `m:aln` */
export class Alignment extends OnOffType {

    public static override _Q = 'm:aln';

}
/** Normal Text. Serialized as `m:nor` */
export class NormalText extends OnOffType {

    public static override _Q = 'm:nor';

}
/** Literal. Serialized as `m:lit` */
export class Literal extends OnOffType {

    public static override _Q = 'm:lit';

}
/** Math Properties. Serialized as `m:mathPr` */
export class MathProperties extends OxmlCompositeElement<MathFont | BreakBinary | BreakBinarySubtraction | SmallFraction | DisplayDefaults | LeftMargin | RightMargin | DefaultJustification | PreSpacing | PostSpacing | InterSpacing | IntraSpacing | WrapIndent | WrapRight | IntegralLimitLocation | NaryLimitLocation> {

    public static override _Q = 'm:mathPr';
    /** Math Font. */
    public get mathFont(): MathFont | undefined { return this._f(MathFont); }
    /** Break on Binary Operators. */
    public get breakBinary(): BreakBinary | undefined { return this._f(BreakBinary); }
    /** Break on Binary Subtraction. */
    public get breakBinarySubtraction(): BreakBinarySubtraction | undefined { return this._f(BreakBinarySubtraction); }
    /** Small Fraction. */
    public get smallFraction(): SmallFraction | undefined { return this._f(SmallFraction); }
    /** Use Display Math Defaults. */
    public get displayDefaults(): DisplayDefaults | undefined { return this._f(DisplayDefaults); }
    /** Left Margin. */
    public get leftMargin(): LeftMargin | undefined { return this._f(LeftMargin); }
    /** Right Margin. */
    public get rightMargin(): RightMargin | undefined { return this._f(RightMargin); }
    /** Default Justification. */
    public get defaultJustification(): DefaultJustification | undefined { return this._f(DefaultJustification); }
    /** Pre-Equation Spacing. */
    public get preSpacing(): PreSpacing | undefined { return this._f(PreSpacing); }
    /** Post-Equation Spacing. */
    public get postSpacing(): PostSpacing | undefined { return this._f(PostSpacing); }
    /** Inter-Equation Spacing. */
    public get interSpacing(): InterSpacing | undefined { return this._f(InterSpacing); }
    /** Intra-Equation Spacing. */
    public get intraSpacing(): IntraSpacing | undefined { return this._f(IntraSpacing); }

}
/** Defines the OfficeMath Class. Serialized as `m:oMath` */
export class OfficeMath extends OxmlCompositeElement<Accent | Bar | Box | BorderBox | Delimiter | EquationArray | Fraction | MathFunction | GroupChar | LimitLower | LimitUpper | Matrix | Nary | Phantom | Radical | PreSubSuper | Subscript | SubSuperscript | Superscript | Run | WCustomXmlRun | WSimpleField | WHyperlink | WSdtRun | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | W14RunConflictInsertion | W14RunConflictDeletion | Paragraph | OfficeMath> {

    public static override _Q = 'm:oMath';

}
/** Defines the Paragraph Class. Serialized as `m:oMathPara` */
export class Paragraph extends OxmlCompositeElement<ParagraphProperties | OfficeMath | Run | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | W14RunConflictInsertion | W14RunConflictDeletion | WRun> {

    public static override _Q = 'm:oMathPara';
    /** Office Math Paragraph Properties. */
    public get paragraphProperties(): ParagraphProperties | undefined { return this._f(ParagraphProperties); }

}
/** Superscript Function. Serialized as `m:sSup` */
export class Superscript extends OxmlCompositeElement<SuperscriptProperties | Base | SuperArgument> {

    public static override _Q = 'm:sSup';
    /** Superscript Properties. */
    public get superscriptProperties(): SuperscriptProperties | undefined { return this._f(SuperscriptProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }
    /** Superscript (Superscript function). */
    public get superArgument(): SuperArgument | undefined { return this._f(SuperArgument); }

}
/** Sub-Superscript Function. Serialized as `m:sSubSup` */
export class SubSuperscript extends OxmlCompositeElement<SubSuperscriptProperties | Base | SubArgument | SuperArgument> {

    public static override _Q = 'm:sSubSup';
    /** Sub-Superscript Properties. */
    public get subSuperscriptProperties(): SubSuperscriptProperties | undefined { return this._f(SubSuperscriptProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }
    /** Subscript (Sub-Superscript). */
    public get subArgument(): SubArgument | undefined { return this._f(SubArgument); }
    /** Superscript (Sub-Superscript function). */
    public get superArgument(): SuperArgument | undefined { return this._f(SuperArgument); }

}
/** Subscript Function. Serialized as `m:sSub` */
export class Subscript extends OxmlCompositeElement<SubscriptProperties | Base | SubArgument> {

    public static override _Q = 'm:sSub';
    /** Subscript Properties. */
    public get subscriptProperties(): SubscriptProperties | undefined { return this._f(SubscriptProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }
    /** Subscript (Subscript function). */
    public get subArgument(): SubArgument | undefined { return this._f(SubArgument); }

}
/** Pre-Sub-Superscript Function. Serialized as `m:sPre` */
export class PreSubSuper extends OxmlCompositeElement<PreSubSuperProperties | SubArgument | SuperArgument | Base> {

    public static override _Q = 'm:sPre';
    /** Pre-Sub-Superscript Properties. */
    public get preSubSuperProperties(): PreSubSuperProperties | undefined { return this._f(PreSubSuperProperties); }
    /** Subscript (Pre-Sub-Superscript). */
    public get subArgument(): SubArgument | undefined { return this._f(SubArgument); }
    /** Superscript(Pre-Sub-Superscript function). */
    public get superArgument(): SuperArgument | undefined { return this._f(SuperArgument); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Radical Function. Serialized as `m:rad` */
export class Radical extends OxmlCompositeElement<RadicalProperties | Degree | Base> {

    public static override _Q = 'm:rad';
    /** Radical Properties. */
    public get radicalProperties(): RadicalProperties | undefined { return this._f(RadicalProperties); }
    /** Degree. */
    public get degree(): Degree | undefined { return this._f(Degree); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Phantom Function. Serialized as `m:phant` */
export class Phantom extends OxmlCompositeElement<PhantomProperties | Base> {

    public static override _Q = 'm:phant';
    /** Phantom Properties. */
    public get phantomProperties(): PhantomProperties | undefined { return this._f(PhantomProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** n-ary Operator Function. Serialized as `m:nary` */
export class Nary extends OxmlCompositeElement<NaryProperties | SubArgument | SuperArgument | Base> {

    public static override _Q = 'm:nary';
    /** n-ary Properties. */
    public get naryProperties(): NaryProperties | undefined { return this._f(NaryProperties); }
    /** Lower limit (n-ary) . */
    public get subArgument(): SubArgument | undefined { return this._f(SubArgument); }
    /** Upper limit (n-ary). */
    public get superArgument(): SuperArgument | undefined { return this._f(SuperArgument); }
    /** Base (Argument). */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Matrix Function. Serialized as `m:m` */
export class Matrix extends OxmlCompositeElement<MatrixProperties | MatrixRow> {

    public static override _Q = 'm:m';
    /** Matrix Properties. */
    public get matrixProperties(): MatrixProperties | undefined { return this._f(MatrixProperties); }

}
/** Upper-Limit Function. Serialized as `m:limUpp` */
export class LimitUpper extends OxmlCompositeElement<LimitUpperProperties | Base | Limit> {

    public static override _Q = 'm:limUpp';
    /** Upper Limit Properties. */
    public get limitUpperProperties(): LimitUpperProperties | undefined { return this._f(LimitUpperProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }
    /** Limit (Upper). */
    public get limit(): Limit | undefined { return this._f(Limit); }

}
/** Lower-Limit Function. Serialized as `m:limLow` */
export class LimitLower extends OxmlCompositeElement<LimitLowerProperties | Base | Limit> {

    public static override _Q = 'm:limLow';
    /** Lower Limit Properties. */
    public get limitLowerProperties(): LimitLowerProperties | undefined { return this._f(LimitLowerProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }
    /** Limit (Lower). */
    public get limit(): Limit | undefined { return this._f(Limit); }

}
/** Group-Character Function. Serialized as `m:groupChr` */
export class GroupChar extends OxmlCompositeElement<GroupCharProperties | Base> {

    public static override _Q = 'm:groupChr';
    /** Group-Character Properties. */
    public get groupCharProperties(): GroupCharProperties | undefined { return this._f(GroupCharProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Function Apply Function. Serialized as `m:func` */
export class MathFunction extends OxmlCompositeElement<FunctionProperties | FunctionName | Base> {

    public static override _Q = 'm:func';
    /** Function Properties. */
    public get functionProperties(): FunctionProperties | undefined { return this._f(FunctionProperties); }
    /** Function Name. */
    public get functionName(): FunctionName | undefined { return this._f(FunctionName); }
    /** Base (Argument). */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Fraction Function. Serialized as `m:f` */
export class Fraction extends OxmlCompositeElement<FractionProperties | Numerator | Denominator> {

    public static override _Q = 'm:f';
    /** Fraction Properties. */
    public get fractionProperties(): FractionProperties | undefined { return this._f(FractionProperties); }
    /** Numerator. */
    public get numerator(): Numerator | undefined { return this._f(Numerator); }
    /** Denominator. */
    public get denominator(): Denominator | undefined { return this._f(Denominator); }

}
/** Equation-Array Function. Serialized as `m:eqArr` */
export class EquationArray extends OxmlCompositeElement<EquationArrayProperties | Base> {

    public static override _Q = 'm:eqArr';
    /** Equation Array Properties. */
    public get equationArrayProperties(): EquationArrayProperties | undefined { return this._f(EquationArrayProperties); }

}
/** Delimiter Function. Serialized as `m:d` */
export class Delimiter extends OxmlCompositeElement<DelimiterProperties | Base> {

    public static override _Q = 'm:d';
    /** Delimiter Properties. */
    public get delimiterProperties(): DelimiterProperties | undefined { return this._f(DelimiterProperties); }

}
/** Border-Box Function. Serialized as `m:borderBox` */
export class BorderBox extends OxmlCompositeElement<BorderBoxProperties | Base> {

    public static override _Q = 'm:borderBox';
    /** Border Box Properties. */
    public get borderBoxProperties(): BorderBoxProperties | undefined { return this._f(BorderBoxProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Box Function. Serialized as `m:box` */
export class Box extends OxmlCompositeElement<BoxProperties | Base> {

    public static override _Q = 'm:box';
    /** Box Properties. */
    public get boxProperties(): BoxProperties | undefined { return this._f(BoxProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Bar. Serialized as `m:bar` */
export class Bar extends OxmlCompositeElement<BarProperties | Base> {

    public static override _Q = 'm:bar';
    /** Bar Properties. */
    public get barProperties(): BarProperties | undefined { return this._f(BarProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Accent. Serialized as `m:acc` */
export class Accent extends OxmlCompositeElement<AccentProperties | Base> {

    public static override _Q = 'm:acc';
    /** Accent Properties. */
    public get accentProperties(): AccentProperties | undefined { return this._f(AccentProperties); }
    /** Base. */
    public get base(): Base | undefined { return this._f(Base); }

}
/** Defines the Run Class. Serialized as `m:r` */
export class Run extends OxmlCompositeElement<RunProperties | WRunProperties | WBreak | WText | WDeletedText | WFieldCode | WDeletedFieldCode | WNoBreakHyphen | WSoftHyphen | WDayShort | WMonthShort | WYearShort | WDayLong | WMonthLong | WYearLong | WAnnotationReferenceMark | WFootnoteReferenceMark | WEndnoteReferenceMark | WSeparatorMark | WContinuationSeparatorMark | WSymbolChar | WPageNumber | WCarriageReturn | WTabChar | WEmbeddedObject | WPicture | WFieldChar | WRuby | WFootnoteReference | WEndnoteReference | WCommentReference | WDrawing | WPositionalTab | WLastRenderedPageBreak | Text> {

    public static override _Q = 'm:r';
    /** Run Properties. */
    public get mathRunProperties(): RunProperties | undefined { return this._f(RunProperties); }
    /** Run Properties. */
    public get runProperties(): WRunProperties | undefined { return this._f(WRunProperties); }

}
/** style. Serialized as `m:sty` */
export class Style extends OxmlLeafElement {

    public static override _Q = 'm:sty';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): StyleValues | undefined { return this._g('m:val'); }
    public set val(v: StyleValues | undefined) { this._s('m:val', v); }

}
/** Script. Serialized as `m:scr` */
export class Script extends OxmlLeafElement {

    public static override _Q = 'm:scr';
    public static override _A = ['m:val',];
    /** Value. Serialized as `m:val` */
    public get val(): ScriptValues | undefined { return this._g('m:val'); }
    public set val(v: ScriptValues | undefined) { this._s('m:val', v); }

}

export function initMathNamespace() {
    ParagraphProperties._C = {
        'm:jc': Justification,
    };
    BreakBinarySubtraction._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, BreakBinarySubtractionValuesArray),
    };
    BreakBinary._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, BreakBinaryOperatorValuesArray),
    };
    MathFont._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.StringValue),
    };
    OfficeMathJustificationType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, JustificationValuesArray),
    };
    ArgumentProperties._C = {
        'm:argSz': ArgumentSize,
    };
    ArgumentSize._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.IntegerValue),
    };
    SuperscriptProperties._C = {
        'm:ctrlPr': ControlProperties,
    };
    SubSuperscriptProperties._C = {
        'm:alnScr': AlignScripts,
        'm:ctrlPr': ControlProperties,
    };
    SubscriptProperties._C = {
        'm:ctrlPr': ControlProperties,
    };
    PreSubSuperProperties._C = {
        'm:ctrlPr': ControlProperties,
    };
    RadicalProperties._C = {
        'm:degHide': HideDegree,
        'm:ctrlPr': ControlProperties,
    };
    PhantomProperties._C = {
        'm:show': ShowPhantom,
        'm:zeroWid': ZeroWidth,
        'm:zeroAsc': ZeroAscent,
        'm:zeroDesc': ZeroDescent,
        'm:transp': Transparent,
        'm:ctrlPr': ControlProperties,
    };
    NaryProperties._C = {
        'm:chr': AccentChar,
        'm:limLoc': LimitLocation,
        'm:grow': GrowOperators,
        'm:subHide': HideSubArgument,
        'm:supHide': HideSuperArgument,
        'm:ctrlPr': ControlProperties,
    };
    LimitLocationType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, LimitLocationValuesArray),
    };
    MatrixRow._C = {
        'm:e': Base,
    };
    MatrixProperties._C = {
        'm:baseJc': BaseJustification,
        'm:plcHide': HidePlaceholder,
        'm:rSpRule': RowSpacingRule,
        'm:cGpRule': ColumnGapRule,
        'm:rSp': RowSpacing,
        'm:cSp': ColumnSpacing,
        'm:cGp': ColumnGap,
        'm:mcs': MatrixColumns,
        'm:ctrlPr': ControlProperties,
    };
    MatrixColumns._C = {
        'm:mc': MatrixColumn,
    };
    TwipsMeasureType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.UInt32Value),
    };
    MatrixColumn._C = {
        'm:mcPr': MatrixColumnProperties,
    };
    MatrixColumnProperties._C = {
        'm:count': MatrixColumnCount,
        'm:mcJc': MatrixColumnJustification,
    };
    MatrixColumnJustification._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, HorizontalAlignmentValuesArray),
    };
    MatrixColumnCount._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.IntegerValue),
    };
    LimitUpperProperties._C = {
        'm:ctrlPr': ControlProperties,
    };
    LimitLowerProperties._C = {
        'm:ctrlPr': ControlProperties,
    };
    GroupCharProperties._C = {
        'm:chr': AccentChar,
        'm:pos': Position,
        'm:vertJc': VerticalJustification,
        'm:ctrlPr': ControlProperties,
    };
    FunctionProperties._C = {
        'm:ctrlPr': ControlProperties,
    };
    FractionProperties._C = {
        'm:type': FractionType,
        'm:ctrlPr': ControlProperties,
    };
    FractionType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, FractionTypeValuesArray),
    };
    EquationArrayProperties._C = {
        'm:baseJc': BaseJustification,
        'm:maxDist': MaxDistribution,
        'm:objDist': ObjectDistribution,
        'm:rSpRule': RowSpacingRule,
        'm:rSp': RowSpacing,
        'm:ctrlPr': ControlProperties,
    };
    UnsignedShortType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.UInt16Value),
    };
    SpacingRuleType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.IntegerValue),
    };
    BaseJustification._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, VerticalAlignmentValuesArray),
    };
    DelimiterProperties._C = {
        'm:begChr': BeginChar,
        'm:sepChr': SeparatorChar,
        'm:endChr': EndChar,
        'm:grow': GrowOperators,
        'm:shp': Shape,
        'm:ctrlPr': ControlProperties,
    };
    Shape._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, ShapeDelimiterValuesArray),
    };
    BorderBoxProperties._C = {
        'm:hideTop': HideTop,
        'm:hideBot': HideBottom,
        'm:hideLeft': HideLeft,
        'm:hideRight': HideRight,
        'm:strikeH': StrikeHorizontal,
        'm:strikeV': StrikeVertical,
        'm:strikeBLTR': StrikeBottomLeftToTopRight,
        'm:strikeTLBR': StrikeTopLeftToBottomRight,
        'm:ctrlPr': ControlProperties,
    };
    BoxProperties._C = {
        'm:opEmu': OperatorEmulator,
        'm:noBreak': NoBreak,
        'm:diff': Differential,
        'm:brk': Break,
        'm:aln': Alignment,
        'm:ctrlPr': ControlProperties,
    };
    BarProperties._C = {
        'm:pos': Position,
        'm:ctrlPr': ControlProperties,
    };
    TopBottomType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, VerticalJustificationValuesArray),
    };
    OfficeMathArgumentType._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    Degree._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    SuperArgument._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    SubArgument._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    Limit._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    FunctionName._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    Denominator._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    Numerator._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    Base._C = {
        'm:argPr': ArgumentProperties,
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
        'm:ctrlPr': ControlProperties,
    };
    AccentProperties._C = {
        'm:chr': AccentChar,
        'm:ctrlPr': ControlProperties,
    };
    ControlProperties._C = {
        'w:rPr': WRunProperties,
        'w:ins': WInsertedMathControl,
        'w:del': WDeletedMathControl,
        'w:moveFrom': WMoveFromMathControl,
        'w:moveTo': WMoveToMathControl,
    };
    CharType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.StringValue),
    };
    Text._D = {
        'xml:space': new OxmlAttr('xml:space', OxmlType.EnumValue, SpaceProcessingModeValuesArray),
    };
    RunProperties._C = {
        'm:lit': Literal,
        'm:nor': NormalText,
        'm:scr': Script,
        'm:sty': Style,
        'm:brk': Break,
        'm:aln': Alignment,
    };
    Break._D = {
        'm:alnAt': new OxmlAttr('m:alnAt', OxmlType.IntegerValue),
        'm:val': new OxmlAttr('m:val', OxmlType.IntegerValue),
    };
    OnOffType._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, BooleanValuesArray),
    };
    MathProperties._C = {
        'm:mathFont': MathFont,
        'm:brkBin': BreakBinary,
        'm:brkBinSub': BreakBinarySubtraction,
        'm:smallFrac': SmallFraction,
        'm:dispDef': DisplayDefaults,
        'm:lMargin': LeftMargin,
        'm:rMargin': RightMargin,
        'm:defJc': DefaultJustification,
        'm:preSp': PreSpacing,
        'm:postSp': PostSpacing,
        'm:interSp': InterSpacing,
        'm:intraSp': IntraSpacing,
        'm:wrapIndent': WrapIndent,
        'm:wrapRight': WrapRight,
        'm:intLim': IntegralLimitLocation,
        'm:naryLim': NaryLimitLocation,
    };
    OfficeMath._C = {
        'm:acc': Accent,
        'm:bar': Bar,
        'm:box': Box,
        'm:borderBox': BorderBox,
        'm:d': Delimiter,
        'm:eqArr': EquationArray,
        'm:f': Fraction,
        'm:func': MathFunction,
        'm:groupChr': GroupChar,
        'm:limLow': LimitLower,
        'm:limUpp': LimitUpper,
        'm:m': Matrix,
        'm:nary': Nary,
        'm:phant': Phantom,
        'm:rad': Radical,
        'm:sPre': PreSubSuper,
        'm:sSub': Subscript,
        'm:sSubSup': SubSuperscript,
        'm:sSup': Superscript,
        'm:r': Run,
        'w:customXml': WCustomXmlRun,
        'w:fldSimple': WSimpleField,
        'w:hyperlink': WHyperlink,
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'm:oMathPara': Paragraph,
        'm:oMath': OfficeMath,
    };
    Paragraph._C = {
        'm:oMathParaPr': ParagraphProperties,
        'm:oMath': OfficeMath,
        'm:r': Run,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'w:r': WRun,
    };
    Superscript._C = {
        'm:sSupPr': SuperscriptProperties,
        'm:e': Base,
        'm:sup': SuperArgument,
    };
    SubSuperscript._C = {
        'm:sSubSupPr': SubSuperscriptProperties,
        'm:e': Base,
        'm:sub': SubArgument,
        'm:sup': SuperArgument,
    };
    Subscript._C = {
        'm:sSubPr': SubscriptProperties,
        'm:e': Base,
        'm:sub': SubArgument,
    };
    PreSubSuper._C = {
        'm:sPrePr': PreSubSuperProperties,
        'm:sub': SubArgument,
        'm:sup': SuperArgument,
        'm:e': Base,
    };
    Radical._C = {
        'm:radPr': RadicalProperties,
        'm:deg': Degree,
        'm:e': Base,
    };
    Phantom._C = {
        'm:phantPr': PhantomProperties,
        'm:e': Base,
    };
    Nary._C = {
        'm:naryPr': NaryProperties,
        'm:sub': SubArgument,
        'm:sup': SuperArgument,
        'm:e': Base,
    };
    Matrix._C = {
        'm:mPr': MatrixProperties,
        'm:mr': MatrixRow,
    };
    LimitUpper._C = {
        'm:limUppPr': LimitUpperProperties,
        'm:e': Base,
        'm:lim': Limit,
    };
    LimitLower._C = {
        'm:limLowPr': LimitLowerProperties,
        'm:e': Base,
        'm:lim': Limit,
    };
    GroupChar._C = {
        'm:groupChrPr': GroupCharProperties,
        'm:e': Base,
    };
    MathFunction._C = {
        'm:funcPr': FunctionProperties,
        'm:fName': FunctionName,
        'm:e': Base,
    };
    Fraction._C = {
        'm:fPr': FractionProperties,
        'm:num': Numerator,
        'm:den': Denominator,
    };
    EquationArray._C = {
        'm:eqArrPr': EquationArrayProperties,
        'm:e': Base,
    };
    Delimiter._C = {
        'm:dPr': DelimiterProperties,
        'm:e': Base,
    };
    BorderBox._C = {
        'm:borderBoxPr': BorderBoxProperties,
        'm:e': Base,
    };
    Box._C = {
        'm:boxPr': BoxProperties,
        'm:e': Base,
    };
    Bar._C = {
        'm:barPr': BarProperties,
        'm:e': Base,
    };
    Accent._C = {
        'm:accPr': AccentProperties,
        'm:e': Base,
    };
    Run._C = {
        'm:rPr': RunProperties,
        'w:rPr': WRunProperties,
        'w:br': WBreak,
        'w:t': WText,
        'w:delText': WDeletedText,
        'w:instrText': WFieldCode,
        'w:delInstrText': WDeletedFieldCode,
        'w:noBreakHyphen': WNoBreakHyphen,
        'w:softHyphen': WSoftHyphen,
        'w:dayShort': WDayShort,
        'w:monthShort': WMonthShort,
        'w:yearShort': WYearShort,
        'w:dayLong': WDayLong,
        'w:monthLong': WMonthLong,
        'w:yearLong': WYearLong,
        'w:annotationRef': WAnnotationReferenceMark,
        'w:footnoteRef': WFootnoteReferenceMark,
        'w:endnoteRef': WEndnoteReferenceMark,
        'w:separator': WSeparatorMark,
        'w:continuationSeparator': WContinuationSeparatorMark,
        'w:sym': WSymbolChar,
        'w:pgNum': WPageNumber,
        'w:cr': WCarriageReturn,
        'w:tab': WTabChar,
        'w:object': WEmbeddedObject,
        'w:pict': WPicture,
        'w:fldChar': WFieldChar,
        'w:ruby': WRuby,
        'w:footnoteReference': WFootnoteReference,
        'w:endnoteReference': WEndnoteReference,
        'w:commentReference': WCommentReference,
        'w:drawing': WDrawing,
        'w:ptab': WPositionalTab,
        'w:lastRenderedPageBreak': WLastRenderedPageBreak,
        'm:t': Text,
    };
    Style._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, StyleValuesArray),
    };
    Script._D = {
        'm:val': new OxmlAttr('m:val', OxmlType.EnumValue, ScriptValuesArray),
    };
    return {
        prefix: 'm',
        xmlns: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
    };
}
