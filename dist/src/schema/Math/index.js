import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { SpaceProcessingModeValuesArray } from "..";
import { CustomXmlRun as WCustomXmlRun } from "../Wordprocessing";
import { SimpleField as WSimpleField } from "../Wordprocessing";
import { Hyperlink as WHyperlink } from "../Wordprocessing";
import { SdtRun as WSdtRun } from "../Wordprocessing";
import { ProofError as WProofError } from "../Wordprocessing";
import { PermStart as WPermStart } from "../Wordprocessing";
import { PermEnd as WPermEnd } from "../Wordprocessing";
import { BookmarkStart as WBookmarkStart } from "../Wordprocessing";
import { BookmarkEnd as WBookmarkEnd } from "../Wordprocessing";
import { CommentRangeStart as WCommentRangeStart } from "../Wordprocessing";
import { CommentRangeEnd as WCommentRangeEnd } from "../Wordprocessing";
import { MoveFromRangeStart as WMoveFromRangeStart } from "../Wordprocessing";
import { MoveFromRangeEnd as WMoveFromRangeEnd } from "../Wordprocessing";
import { MoveToRangeStart as WMoveToRangeStart } from "../Wordprocessing";
import { MoveToRangeEnd as WMoveToRangeEnd } from "../Wordprocessing";
import { CustomXmlInsRangeStart as WCustomXmlInsRangeStart } from "../Wordprocessing";
import { CustomXmlInsRangeEnd as WCustomXmlInsRangeEnd } from "../Wordprocessing";
import { CustomXmlDelRangeStart as WCustomXmlDelRangeStart } from "../Wordprocessing";
import { CustomXmlDelRangeEnd as WCustomXmlDelRangeEnd } from "../Wordprocessing";
import { CustomXmlMoveFromRangeStart as WCustomXmlMoveFromRangeStart } from "../Wordprocessing";
import { CustomXmlMoveFromRangeEnd as WCustomXmlMoveFromRangeEnd } from "../Wordprocessing";
import { CustomXmlMoveToRangeStart as WCustomXmlMoveToRangeStart } from "../Wordprocessing";
import { CustomXmlMoveToRangeEnd as WCustomXmlMoveToRangeEnd } from "../Wordprocessing";
import { CustomXmlConflictInsertionRangeStart as W14CustomXmlConflictInsertionRangeStart } from "../Office2010/Word";
import { CustomXmlConflictInsertionRangeEnd as W14CustomXmlConflictInsertionRangeEnd } from "../Office2010/Word";
import { CustomXmlConflictDeletionRangeStart as W14CustomXmlConflictDeletionRangeStart } from "../Office2010/Word";
import { CustomXmlConflictDeletionRangeEnd as W14CustomXmlConflictDeletionRangeEnd } from "../Office2010/Word";
import { InsertedRun as WInsertedRun } from "../Wordprocessing";
import { DeletedRun as WDeletedRun } from "../Wordprocessing";
import { MoveFromRun as WMoveFromRun } from "../Wordprocessing";
import { MoveToRun as WMoveToRun } from "../Wordprocessing";
import { ContentPart as WContentPart } from "../Wordprocessing";
import { RunConflictInsertion as W14RunConflictInsertion } from "../Office2010/Word";
import { RunConflictDeletion as W14RunConflictDeletion } from "../Office2010/Word";
import { RunProperties as WRunProperties } from "../Wordprocessing";
import { InsertedMathControl as WInsertedMathControl } from "../Wordprocessing";
import { DeletedMathControl as WDeletedMathControl } from "../Wordprocessing";
import { MoveFromMathControl as WMoveFromMathControl } from "../Wordprocessing";
import { MoveToMathControl as WMoveToMathControl } from "../Wordprocessing";
import { Run as WRun } from "../Wordprocessing";
import { Break as WBreak } from "../Wordprocessing";
import { Text as WText } from "../Wordprocessing";
import { DeletedText as WDeletedText } from "../Wordprocessing";
import { FieldCode as WFieldCode } from "../Wordprocessing";
import { DeletedFieldCode as WDeletedFieldCode } from "../Wordprocessing";
import { NoBreakHyphen as WNoBreakHyphen } from "../Wordprocessing";
import { SoftHyphen as WSoftHyphen } from "../Wordprocessing";
import { DayShort as WDayShort } from "../Wordprocessing";
import { MonthShort as WMonthShort } from "../Wordprocessing";
import { YearShort as WYearShort } from "../Wordprocessing";
import { DayLong as WDayLong } from "../Wordprocessing";
import { MonthLong as WMonthLong } from "../Wordprocessing";
import { YearLong as WYearLong } from "../Wordprocessing";
import { AnnotationReferenceMark as WAnnotationReferenceMark } from "../Wordprocessing";
import { FootnoteReferenceMark as WFootnoteReferenceMark } from "../Wordprocessing";
import { EndnoteReferenceMark as WEndnoteReferenceMark } from "../Wordprocessing";
import { SeparatorMark as WSeparatorMark } from "../Wordprocessing";
import { ContinuationSeparatorMark as WContinuationSeparatorMark } from "../Wordprocessing";
import { SymbolChar as WSymbolChar } from "../Wordprocessing";
import { PageNumber as WPageNumber } from "../Wordprocessing";
import { CarriageReturn as WCarriageReturn } from "../Wordprocessing";
import { TabChar as WTabChar } from "../Wordprocessing";
import { EmbeddedObject as WEmbeddedObject } from "../Wordprocessing";
import { Picture as WPicture } from "../Wordprocessing";
import { FieldChar as WFieldChar } from "../Wordprocessing";
import { Ruby as WRuby } from "../Wordprocessing";
import { FootnoteReference as WFootnoteReference } from "../Wordprocessing";
import { EndnoteReference as WEndnoteReference } from "../Wordprocessing";
import { CommentReference as WCommentReference } from "../Wordprocessing";
import { Drawing as WDrawing } from "../Wordprocessing";
import { PositionalTab as WPositionalTab } from "../Wordprocessing";
import { LastRenderedPageBreak as WLastRenderedPageBreak } from "../Wordprocessing";
var HorizontalAlignmentValues = /* @__PURE__ */ ((HorizontalAlignmentValues2) => {
  HorizontalAlignmentValues2["Left"] = "left";
  HorizontalAlignmentValues2["Center"] = "center";
  HorizontalAlignmentValues2["Right"] = "right";
  return HorizontalAlignmentValues2;
})(HorizontalAlignmentValues || {});
const HorizontalAlignmentValuesArray = [
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */
];
var ShapeDelimiterValues = /* @__PURE__ */ ((ShapeDelimiterValues2) => {
  ShapeDelimiterValues2["Centered"] = "centered";
  ShapeDelimiterValues2["Match"] = "match";
  return ShapeDelimiterValues2;
})(ShapeDelimiterValues || {});
const ShapeDelimiterValuesArray = [
  "centered" /* Centered */,
  "match" /* Match */
];
var FractionTypeValues = /* @__PURE__ */ ((FractionTypeValues2) => {
  FractionTypeValues2["Bar"] = "bar";
  FractionTypeValues2["Skewed"] = "skw";
  FractionTypeValues2["Linear"] = "lin";
  FractionTypeValues2["NoBar"] = "noBar";
  return FractionTypeValues2;
})(FractionTypeValues || {});
const FractionTypeValuesArray = [
  "bar" /* Bar */,
  "skw" /* Skewed */,
  "lin" /* Linear */,
  "noBar" /* NoBar */
];
var LimitLocationValues = /* @__PURE__ */ ((LimitLocationValues2) => {
  LimitLocationValues2["UnderOver"] = "undOvr";
  LimitLocationValues2["SubscriptSuperscript"] = "subSup";
  return LimitLocationValues2;
})(LimitLocationValues || {});
const LimitLocationValuesArray = [
  "undOvr" /* UnderOver */,
  "subSup" /* SubscriptSuperscript */
];
var VerticalJustificationValues = /* @__PURE__ */ ((VerticalJustificationValues2) => {
  VerticalJustificationValues2["Top"] = "top";
  VerticalJustificationValues2["Bottom"] = "bot";
  return VerticalJustificationValues2;
})(VerticalJustificationValues || {});
const VerticalJustificationValuesArray = [
  "top" /* Top */,
  "bot" /* Bottom */
];
var ScriptValues = /* @__PURE__ */ ((ScriptValues2) => {
  ScriptValues2["Roman"] = "roman";
  ScriptValues2["Script"] = "script";
  ScriptValues2["Fraktur"] = "fraktur";
  ScriptValues2["DoubleStruck"] = "double-struck";
  ScriptValues2["SansSerif"] = "sans-serif";
  ScriptValues2["Monospace"] = "monospace";
  return ScriptValues2;
})(ScriptValues || {});
const ScriptValuesArray = [
  "roman" /* Roman */,
  "script" /* Script */,
  "fraktur" /* Fraktur */,
  "double-struck" /* DoubleStruck */,
  "sans-serif" /* SansSerif */,
  "monospace" /* Monospace */
];
var StyleValues = /* @__PURE__ */ ((StyleValues2) => {
  StyleValues2["Plain"] = "p";
  StyleValues2["Bold"] = "b";
  StyleValues2["Italic"] = "i";
  StyleValues2["BoldItalic"] = "bi";
  return StyleValues2;
})(StyleValues || {});
const StyleValuesArray = [
  "p" /* Plain */,
  "b" /* Bold */,
  "i" /* Italic */,
  "bi" /* BoldItalic */
];
var JustificationValues = /* @__PURE__ */ ((JustificationValues2) => {
  JustificationValues2["Left"] = "left";
  JustificationValues2["Right"] = "right";
  JustificationValues2["Center"] = "center";
  JustificationValues2["CenterGroup"] = "centerGroup";
  return JustificationValues2;
})(JustificationValues || {});
const JustificationValuesArray = [
  "left" /* Left */,
  "right" /* Right */,
  "center" /* Center */,
  "centerGroup" /* CenterGroup */
];
var BreakBinaryOperatorValues = /* @__PURE__ */ ((BreakBinaryOperatorValues2) => {
  BreakBinaryOperatorValues2["Before"] = "before";
  BreakBinaryOperatorValues2["After"] = "after";
  BreakBinaryOperatorValues2["Repeat"] = "repeat";
  return BreakBinaryOperatorValues2;
})(BreakBinaryOperatorValues || {});
const BreakBinaryOperatorValuesArray = [
  "before" /* Before */,
  "after" /* After */,
  "repeat" /* Repeat */
];
var BreakBinarySubtractionValues = /* @__PURE__ */ ((BreakBinarySubtractionValues2) => {
  BreakBinarySubtractionValues2["MinusMinus"] = "--";
  BreakBinarySubtractionValues2["MinusPlus"] = "-+";
  BreakBinarySubtractionValues2["PlusMinus"] = "+-";
  return BreakBinarySubtractionValues2;
})(BreakBinarySubtractionValues || {});
const BreakBinarySubtractionValuesArray = [
  "--" /* MinusMinus */,
  "-+" /* MinusPlus */,
  "+-" /* PlusMinus */
];
var VerticalAlignmentValues = /* @__PURE__ */ ((VerticalAlignmentValues2) => {
  VerticalAlignmentValues2["Top"] = "top";
  VerticalAlignmentValues2["Center"] = "center";
  VerticalAlignmentValues2["Bottom"] = "bottom";
  VerticalAlignmentValues2["Bot"] = "bot";
  return VerticalAlignmentValues2;
})(VerticalAlignmentValues || {});
const VerticalAlignmentValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "bottom" /* Bottom */,
  "bot" /* Bot */
];
var BooleanValues = /* @__PURE__ */ ((BooleanValues2) => {
  BooleanValues2["True"] = "true";
  BooleanValues2["False"] = "false";
  BooleanValues2["On"] = "on";
  BooleanValues2["Off"] = "off";
  BooleanValues2["Zero"] = "0";
  BooleanValues2["One"] = "1";
  return BooleanValues2;
})(BooleanValues || {});
const BooleanValuesArray = [
  "true" /* True */,
  "false" /* False */,
  "on" /* On */,
  "off" /* Off */,
  "0" /* Zero */,
  "1" /* One */
];
class ParagraphProperties extends OxmlCompositeElement {
  static _Q = "m:oMathParaPr";
  /** Justification. */
  get justification() {
    return this._f(Justification);
  }
}
class BreakBinarySubtraction extends OxmlLeafElement {
  static _Q = "m:brkBinSub";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class BreakBinary extends OxmlLeafElement {
  static _Q = "m:brkBin";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class MathFont extends OxmlLeafElement {
  static _Q = "m:mathFont";
  static _A = ["m:val"];
  /** val. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class OfficeMathJustificationType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class DefaultJustification extends OfficeMathJustificationType {
  static _Q = "m:defJc";
}
class Justification extends OfficeMathJustificationType {
  static _Q = "m:jc";
}
class ArgumentProperties extends OxmlCompositeElement {
  static _Q = "m:argPr";
  /** Argument Size. */
  get argumentSize() {
    return this._f(ArgumentSize);
  }
}
class ArgumentSize extends OxmlLeafElement {
  static _Q = "m:argSz";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class SuperscriptProperties extends OxmlCompositeElement {
  static _Q = "m:sSupPr";
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class SubSuperscriptProperties extends OxmlCompositeElement {
  static _Q = "m:sSubSupPr";
  /** Align Scripts. */
  get alignScripts() {
    return this._f(AlignScripts);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class SubscriptProperties extends OxmlCompositeElement {
  static _Q = "m:sSubPr";
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class PreSubSuperProperties extends OxmlCompositeElement {
  static _Q = "m:sPrePr";
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class RadicalProperties extends OxmlCompositeElement {
  static _Q = "m:radPr";
  /** Hide Degree. */
  get hideDegree() {
    return this._f(HideDegree);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class PhantomProperties extends OxmlCompositeElement {
  static _Q = "m:phantPr";
  /** Phantom Show. */
  get showPhantom() {
    return this._f(ShowPhantom);
  }
  /** Phantom Zero Width. */
  get zeroWidth() {
    return this._f(ZeroWidth);
  }
  /** Phantom Zero Ascent. */
  get zeroAscent() {
    return this._f(ZeroAscent);
  }
  /** Phantom Zero Descent. */
  get zeroDescent() {
    return this._f(ZeroDescent);
  }
  /** Transparent (Phantom). */
  get transparent() {
    return this._f(Transparent);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class NaryProperties extends OxmlCompositeElement {
  static _Q = "m:naryPr";
  /** n-ary Operator Character. */
  get accentChar() {
    return this._f(AccentChar);
  }
  /** n-ary Limit Location. */
  get limitLocation() {
    return this._f(LimitLocation);
  }
  /** n-ary Grow. */
  get growOperators() {
    return this._f(GrowOperators);
  }
  /** Hide Subscript (n-ary). */
  get hideSubArgument() {
    return this._f(HideSubArgument);
  }
  /** Hide Superscript (n-ary). */
  get hideSuperArgument() {
    return this._f(HideSuperArgument);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class LimitLocationType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class NaryLimitLocation extends LimitLocationType {
  static _Q = "m:naryLim";
}
class IntegralLimitLocation extends LimitLocationType {
  static _Q = "m:intLim";
}
class LimitLocation extends LimitLocationType {
  static _Q = "m:limLoc";
}
class MatrixRow extends OxmlCompositeElement {
  static _Q = "m:mr";
}
class MatrixProperties extends OxmlCompositeElement {
  static _Q = "m:mPr";
  /** Matrix Base Justification. */
  get baseJustification() {
    return this._f(BaseJustification);
  }
  /** Hide Placeholders (Matrix). */
  get hidePlaceholder() {
    return this._f(HidePlaceholder);
  }
  /** Row Spacing Rule. */
  get rowSpacingRule() {
    return this._f(RowSpacingRule);
  }
  /** Matrix Column Gap Rule. */
  get columnGapRule() {
    return this._f(ColumnGapRule);
  }
  /** Row Spacing (Matrix). */
  get rowSpacing() {
    return this._f(RowSpacing);
  }
  /** Matrix Column Spacing. */
  get columnSpacing() {
    return this._f(ColumnSpacing);
  }
  /** Matrix Column Gap. */
  get columnGap() {
    return this._f(ColumnGap);
  }
  /** Matrix Columns. */
  get matrixColumns() {
    return this._f(MatrixColumns);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class MatrixColumns extends OxmlCompositeElement {
  static _Q = "m:mcs";
}
class TwipsMeasureType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class WrapIndent extends TwipsMeasureType {
  static _Q = "m:wrapIndent";
}
class IntraSpacing extends TwipsMeasureType {
  static _Q = "m:intraSp";
}
class InterSpacing extends TwipsMeasureType {
  static _Q = "m:interSp";
}
class PostSpacing extends TwipsMeasureType {
  static _Q = "m:postSp";
}
class PreSpacing extends TwipsMeasureType {
  static _Q = "m:preSp";
}
class RightMargin extends TwipsMeasureType {
  static _Q = "m:rMargin";
}
class LeftMargin extends TwipsMeasureType {
  static _Q = "m:lMargin";
}
class ColumnSpacing extends TwipsMeasureType {
  static _Q = "m:cSp";
}
class MatrixColumn extends OxmlCompositeElement {
  static _Q = "m:mc";
  /** Matrix Column Properties. */
  get matrixColumnProperties() {
    return this._f(MatrixColumnProperties);
  }
}
class MatrixColumnProperties extends OxmlCompositeElement {
  static _Q = "m:mcPr";
  /** Matrix Column Count. */
  get matrixColumnCount() {
    return this._f(MatrixColumnCount);
  }
  /** Matrix Column Justification. */
  get matrixColumnJustification() {
    return this._f(MatrixColumnJustification);
  }
}
class MatrixColumnJustification extends OxmlLeafElement {
  static _Q = "m:mcJc";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class MatrixColumnCount extends OxmlLeafElement {
  static _Q = "m:count";
  static _A = ["m:val"];
  /** val. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class LimitUpperProperties extends OxmlCompositeElement {
  static _Q = "m:limUppPr";
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class LimitLowerProperties extends OxmlCompositeElement {
  static _Q = "m:limLowPr";
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class GroupCharProperties extends OxmlCompositeElement {
  static _Q = "m:groupChrPr";
  /** Group Character (Grouping Character). */
  get accentChar() {
    return this._f(AccentChar);
  }
  /** Position (Group Character). */
  get position() {
    return this._f(Position);
  }
  /** Vertical Justification. */
  get verticalJustification() {
    return this._f(VerticalJustification);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class FunctionProperties extends OxmlCompositeElement {
  static _Q = "m:funcPr";
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class FractionProperties extends OxmlCompositeElement {
  static _Q = "m:fPr";
  /** Fraction type. */
  get fractionType() {
    return this._f(FractionType);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class FractionType extends OxmlLeafElement {
  static _Q = "m:type";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class EquationArrayProperties extends OxmlCompositeElement {
  static _Q = "m:eqArrPr";
  /** Equation Array Base Justification. */
  get baseJustification() {
    return this._f(BaseJustification);
  }
  /** Maximum Distribution. */
  get maxDistribution() {
    return this._f(MaxDistribution);
  }
  /** Object Distribution. */
  get objectDistribution() {
    return this._f(ObjectDistribution);
  }
  /** Row Spacing Rule. */
  get rowSpacingRule() {
    return this._f(RowSpacingRule);
  }
  /** Row Spacing (Equation Array). */
  get rowSpacing() {
    return this._f(RowSpacing);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class UnsignedShortType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** val. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class ColumnGap extends UnsignedShortType {
  static _Q = "m:cGp";
}
class RowSpacing extends UnsignedShortType {
  static _Q = "m:rSp";
}
class SpacingRuleType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class ColumnGapRule extends SpacingRuleType {
  static _Q = "m:cGpRule";
}
class RowSpacingRule extends SpacingRuleType {
  static _Q = "m:rSpRule";
}
class BaseJustification extends OxmlLeafElement {
  static _Q = "m:baseJc";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class DelimiterProperties extends OxmlCompositeElement {
  static _Q = "m:dPr";
  /** Delimiter Beginning Character. */
  get beginChar() {
    return this._f(BeginChar);
  }
  /** Delimiter Separator Character. */
  get separatorChar() {
    return this._f(SeparatorChar);
  }
  /** Delimiter Ending Character. */
  get endChar() {
    return this._f(EndChar);
  }
  /** Delimiter Grow. */
  get growOperators() {
    return this._f(GrowOperators);
  }
  /** Shape (Delimiters). */
  get shape() {
    return this._f(Shape);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class Shape extends OxmlLeafElement {
  static _Q = "m:shp";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class BorderBoxProperties extends OxmlCompositeElement {
  static _Q = "m:borderBoxPr";
  /** Hide Top Edge. */
  get hideTop() {
    return this._f(HideTop);
  }
  /** Hide Bottom Edge. */
  get hideBottom() {
    return this._f(HideBottom);
  }
  /** Hide Left Edge. */
  get hideLeft() {
    return this._f(HideLeft);
  }
  /** Hide Right Edge. */
  get hideRight() {
    return this._f(HideRight);
  }
  /** Border Box Strikethrough Horizontal. */
  get strikeHorizontal() {
    return this._f(StrikeHorizontal);
  }
  /** Border Box Strikethrough Vertical. */
  get strikeVertical() {
    return this._f(StrikeVertical);
  }
  /** Border Box Strikethrough Bottom-Left to Top-Right. */
  get strikeBottomLeftToTopRight() {
    return this._f(StrikeBottomLeftToTopRight);
  }
  /** Border Box Strikethrough Top-Left to Bottom-Right. */
  get strikeTopLeftToBottomRight() {
    return this._f(StrikeTopLeftToBottomRight);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class BoxProperties extends OxmlCompositeElement {
  static _Q = "m:boxPr";
  /** Operator Emulator. */
  get operatorEmulator() {
    return this._f(OperatorEmulator);
  }
  /** No Break. */
  get noBreak() {
    return this._f(NoBreak);
  }
  /** Differential. */
  get differential() {
    return this._f(Differential);
  }
  /** Break. */
  get break() {
    return this._f(Break);
  }
  /** Alignment. */
  get alignment() {
    return this._f(Alignment);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class BarProperties extends OxmlCompositeElement {
  static _Q = "m:barPr";
  /** Position (Bar). */
  get position() {
    return this._f(Position);
  }
  /** Returns ControlProperties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class TopBottomType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class VerticalJustification extends TopBottomType {
  static _Q = "m:vertJc";
}
class Position extends TopBottomType {
  static _Q = "m:pos";
}
class OfficeMathArgumentType extends OxmlCompositeElement {
  /** Argument Properties. */
  get argumentProperties() {
    return this._f(ArgumentProperties);
  }
}
class Degree extends OfficeMathArgumentType {
  static _Q = "m:deg";
}
class SuperArgument extends OfficeMathArgumentType {
  static _Q = "m:sup";
}
class SubArgument extends OfficeMathArgumentType {
  static _Q = "m:sub";
}
class Limit extends OfficeMathArgumentType {
  static _Q = "m:lim";
}
class FunctionName extends OfficeMathArgumentType {
  static _Q = "m:fName";
}
class Denominator extends OfficeMathArgumentType {
  static _Q = "m:den";
}
class Numerator extends OfficeMathArgumentType {
  static _Q = "m:num";
}
class Base extends OfficeMathArgumentType {
  static _Q = "m:e";
}
class AccentProperties extends OxmlCompositeElement {
  static _Q = "m:accPr";
  /** Accent Character. */
  get accentChar() {
    return this._f(AccentChar);
  }
  /** Control Properties. */
  get controlProperties() {
    return this._f(ControlProperties);
  }
}
class ControlProperties extends OxmlCompositeElement {
  static _Q = "m:ctrlPr";
}
class CharType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class EndChar extends CharType {
  static _Q = "m:endChr";
}
class SeparatorChar extends CharType {
  static _Q = "m:sepChr";
}
class BeginChar extends CharType {
  static _Q = "m:begChr";
}
class AccentChar extends CharType {
  static _Q = "m:chr";
}
class Text extends OxmlLeafTextElement {
  static _Q = "m:t";
  static _A = ["xml:space"];
  /** space. Serialized as `xml:space` */
  get space() {
    return this._g("xml:space");
  }
  set space(v) {
    this._s("xml:space", v);
  }
}
class RunProperties extends OxmlCompositeElement {
  static _Q = "m:rPr";
  /** Literal. */
  get literal() {
    return this._f(Literal);
  }
}
class Break extends OxmlLeafElement {
  static _Q = "m:brk";
  static _A = ["m:alnAt", "m:val"];
  /** Index of Operator to Align To. Serialized as `m:alnAt` */
  get alignAt() {
    return this._g("m:alnAt");
  }
  set alignAt(v) {
    this._s("m:alnAt", v);
  }
  /** Index of Operator to Align To. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class OnOffType extends OxmlLeafElement {
  static _A = ["m:val"];
  /** value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class WrapRight extends OnOffType {
  static _Q = "m:wrapRight";
}
class DisplayDefaults extends OnOffType {
  static _Q = "m:dispDef";
}
class SmallFraction extends OnOffType {
  static _Q = "m:smallFrac";
}
class AlignScripts extends OnOffType {
  static _Q = "m:alnScr";
}
class HideDegree extends OnOffType {
  static _Q = "m:degHide";
}
class Transparent extends OnOffType {
  static _Q = "m:transp";
}
class ZeroDescent extends OnOffType {
  static _Q = "m:zeroDesc";
}
class ZeroAscent extends OnOffType {
  static _Q = "m:zeroAsc";
}
class ZeroWidth extends OnOffType {
  static _Q = "m:zeroWid";
}
class ShowPhantom extends OnOffType {
  static _Q = "m:show";
}
class HideSuperArgument extends OnOffType {
  static _Q = "m:supHide";
}
class HideSubArgument extends OnOffType {
  static _Q = "m:subHide";
}
class HidePlaceholder extends OnOffType {
  static _Q = "m:plcHide";
}
class ObjectDistribution extends OnOffType {
  static _Q = "m:objDist";
}
class MaxDistribution extends OnOffType {
  static _Q = "m:maxDist";
}
class GrowOperators extends OnOffType {
  static _Q = "m:grow";
}
class StrikeTopLeftToBottomRight extends OnOffType {
  static _Q = "m:strikeTLBR";
}
class StrikeBottomLeftToTopRight extends OnOffType {
  static _Q = "m:strikeBLTR";
}
class StrikeVertical extends OnOffType {
  static _Q = "m:strikeV";
}
class StrikeHorizontal extends OnOffType {
  static _Q = "m:strikeH";
}
class HideRight extends OnOffType {
  static _Q = "m:hideRight";
}
class HideLeft extends OnOffType {
  static _Q = "m:hideLeft";
}
class HideBottom extends OnOffType {
  static _Q = "m:hideBot";
}
class HideTop extends OnOffType {
  static _Q = "m:hideTop";
}
class Differential extends OnOffType {
  static _Q = "m:diff";
}
class NoBreak extends OnOffType {
  static _Q = "m:noBreak";
}
class OperatorEmulator extends OnOffType {
  static _Q = "m:opEmu";
}
class Alignment extends OnOffType {
  static _Q = "m:aln";
}
class NormalText extends OnOffType {
  static _Q = "m:nor";
}
class Literal extends OnOffType {
  static _Q = "m:lit";
}
class MathProperties extends OxmlCompositeElement {
  static _Q = "m:mathPr";
  /** Math Font. */
  get mathFont() {
    return this._f(MathFont);
  }
  /** Break on Binary Operators. */
  get breakBinary() {
    return this._f(BreakBinary);
  }
  /** Break on Binary Subtraction. */
  get breakBinarySubtraction() {
    return this._f(BreakBinarySubtraction);
  }
  /** Small Fraction. */
  get smallFraction() {
    return this._f(SmallFraction);
  }
  /** Use Display Math Defaults. */
  get displayDefaults() {
    return this._f(DisplayDefaults);
  }
  /** Left Margin. */
  get leftMargin() {
    return this._f(LeftMargin);
  }
  /** Right Margin. */
  get rightMargin() {
    return this._f(RightMargin);
  }
  /** Default Justification. */
  get defaultJustification() {
    return this._f(DefaultJustification);
  }
  /** Pre-Equation Spacing. */
  get preSpacing() {
    return this._f(PreSpacing);
  }
  /** Post-Equation Spacing. */
  get postSpacing() {
    return this._f(PostSpacing);
  }
  /** Inter-Equation Spacing. */
  get interSpacing() {
    return this._f(InterSpacing);
  }
  /** Intra-Equation Spacing. */
  get intraSpacing() {
    return this._f(IntraSpacing);
  }
}
class OfficeMath extends OxmlCompositeElement {
  static _Q = "m:oMath";
}
class Paragraph extends OxmlCompositeElement {
  static _Q = "m:oMathPara";
  /** Office Math Paragraph Properties. */
  get paragraphProperties() {
    return this._f(ParagraphProperties);
  }
}
class Superscript extends OxmlCompositeElement {
  static _Q = "m:sSup";
  /** Superscript Properties. */
  get superscriptProperties() {
    return this._f(SuperscriptProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
  /** Superscript (Superscript function). */
  get superArgument() {
    return this._f(SuperArgument);
  }
}
class SubSuperscript extends OxmlCompositeElement {
  static _Q = "m:sSubSup";
  /** Sub-Superscript Properties. */
  get subSuperscriptProperties() {
    return this._f(SubSuperscriptProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
  /** Subscript (Sub-Superscript). */
  get subArgument() {
    return this._f(SubArgument);
  }
  /** Superscript (Sub-Superscript function). */
  get superArgument() {
    return this._f(SuperArgument);
  }
}
class Subscript extends OxmlCompositeElement {
  static _Q = "m:sSub";
  /** Subscript Properties. */
  get subscriptProperties() {
    return this._f(SubscriptProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
  /** Subscript (Subscript function). */
  get subArgument() {
    return this._f(SubArgument);
  }
}
class PreSubSuper extends OxmlCompositeElement {
  static _Q = "m:sPre";
  /** Pre-Sub-Superscript Properties. */
  get preSubSuperProperties() {
    return this._f(PreSubSuperProperties);
  }
  /** Subscript (Pre-Sub-Superscript). */
  get subArgument() {
    return this._f(SubArgument);
  }
  /** Superscript(Pre-Sub-Superscript function). */
  get superArgument() {
    return this._f(SuperArgument);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Radical extends OxmlCompositeElement {
  static _Q = "m:rad";
  /** Radical Properties. */
  get radicalProperties() {
    return this._f(RadicalProperties);
  }
  /** Degree. */
  get degree() {
    return this._f(Degree);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Phantom extends OxmlCompositeElement {
  static _Q = "m:phant";
  /** Phantom Properties. */
  get phantomProperties() {
    return this._f(PhantomProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Nary extends OxmlCompositeElement {
  static _Q = "m:nary";
  /** n-ary Properties. */
  get naryProperties() {
    return this._f(NaryProperties);
  }
  /** Lower limit (n-ary) . */
  get subArgument() {
    return this._f(SubArgument);
  }
  /** Upper limit (n-ary). */
  get superArgument() {
    return this._f(SuperArgument);
  }
  /** Base (Argument). */
  get base() {
    return this._f(Base);
  }
}
class Matrix extends OxmlCompositeElement {
  static _Q = "m:m";
  /** Matrix Properties. */
  get matrixProperties() {
    return this._f(MatrixProperties);
  }
}
class LimitUpper extends OxmlCompositeElement {
  static _Q = "m:limUpp";
  /** Upper Limit Properties. */
  get limitUpperProperties() {
    return this._f(LimitUpperProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
  /** Limit (Upper). */
  get limit() {
    return this._f(Limit);
  }
}
class LimitLower extends OxmlCompositeElement {
  static _Q = "m:limLow";
  /** Lower Limit Properties. */
  get limitLowerProperties() {
    return this._f(LimitLowerProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
  /** Limit (Lower). */
  get limit() {
    return this._f(Limit);
  }
}
class GroupChar extends OxmlCompositeElement {
  static _Q = "m:groupChr";
  /** Group-Character Properties. */
  get groupCharProperties() {
    return this._f(GroupCharProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class MathFunction extends OxmlCompositeElement {
  static _Q = "m:func";
  /** Function Properties. */
  get functionProperties() {
    return this._f(FunctionProperties);
  }
  /** Function Name. */
  get functionName() {
    return this._f(FunctionName);
  }
  /** Base (Argument). */
  get base() {
    return this._f(Base);
  }
}
class Fraction extends OxmlCompositeElement {
  static _Q = "m:f";
  /** Fraction Properties. */
  get fractionProperties() {
    return this._f(FractionProperties);
  }
  /** Numerator. */
  get numerator() {
    return this._f(Numerator);
  }
  /** Denominator. */
  get denominator() {
    return this._f(Denominator);
  }
}
class EquationArray extends OxmlCompositeElement {
  static _Q = "m:eqArr";
  /** Equation Array Properties. */
  get equationArrayProperties() {
    return this._f(EquationArrayProperties);
  }
}
class Delimiter extends OxmlCompositeElement {
  static _Q = "m:d";
  /** Delimiter Properties. */
  get delimiterProperties() {
    return this._f(DelimiterProperties);
  }
}
class BorderBox extends OxmlCompositeElement {
  static _Q = "m:borderBox";
  /** Border Box Properties. */
  get borderBoxProperties() {
    return this._f(BorderBoxProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Box extends OxmlCompositeElement {
  static _Q = "m:box";
  /** Box Properties. */
  get boxProperties() {
    return this._f(BoxProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Bar extends OxmlCompositeElement {
  static _Q = "m:bar";
  /** Bar Properties. */
  get barProperties() {
    return this._f(BarProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Accent extends OxmlCompositeElement {
  static _Q = "m:acc";
  /** Accent Properties. */
  get accentProperties() {
    return this._f(AccentProperties);
  }
  /** Base. */
  get base() {
    return this._f(Base);
  }
}
class Run extends OxmlCompositeElement {
  static _Q = "m:r";
  /** Run Properties. */
  get mathRunProperties() {
    return this._f(RunProperties);
  }
  /** Run Properties. */
  get runProperties() {
    return this._f(WRunProperties);
  }
}
class Style extends OxmlLeafElement {
  static _Q = "m:sty";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
class Script extends OxmlLeafElement {
  static _Q = "m:scr";
  static _A = ["m:val"];
  /** Value. Serialized as `m:val` */
  get val() {
    return this._g("m:val");
  }
  set val(v) {
    this._s("m:val", v);
  }
}
function initMathNamespace() {
  ParagraphProperties._C = {
    "m:jc": Justification
  };
  BreakBinarySubtraction._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, BreakBinarySubtractionValuesArray)
  };
  BreakBinary._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, BreakBinaryOperatorValuesArray)
  };
  MathFont._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.StringValue)
  };
  OfficeMathJustificationType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, JustificationValuesArray)
  };
  ArgumentProperties._C = {
    "m:argSz": ArgumentSize
  };
  ArgumentSize._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.IntegerValue)
  };
  SuperscriptProperties._C = {
    "m:ctrlPr": ControlProperties
  };
  SubSuperscriptProperties._C = {
    "m:alnScr": AlignScripts,
    "m:ctrlPr": ControlProperties
  };
  SubscriptProperties._C = {
    "m:ctrlPr": ControlProperties
  };
  PreSubSuperProperties._C = {
    "m:ctrlPr": ControlProperties
  };
  RadicalProperties._C = {
    "m:degHide": HideDegree,
    "m:ctrlPr": ControlProperties
  };
  PhantomProperties._C = {
    "m:show": ShowPhantom,
    "m:zeroWid": ZeroWidth,
    "m:zeroAsc": ZeroAscent,
    "m:zeroDesc": ZeroDescent,
    "m:transp": Transparent,
    "m:ctrlPr": ControlProperties
  };
  NaryProperties._C = {
    "m:chr": AccentChar,
    "m:limLoc": LimitLocation,
    "m:grow": GrowOperators,
    "m:subHide": HideSubArgument,
    "m:supHide": HideSuperArgument,
    "m:ctrlPr": ControlProperties
  };
  LimitLocationType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, LimitLocationValuesArray)
  };
  MatrixRow._C = {
    "m:e": Base
  };
  MatrixProperties._C = {
    "m:baseJc": BaseJustification,
    "m:plcHide": HidePlaceholder,
    "m:rSpRule": RowSpacingRule,
    "m:cGpRule": ColumnGapRule,
    "m:rSp": RowSpacing,
    "m:cSp": ColumnSpacing,
    "m:cGp": ColumnGap,
    "m:mcs": MatrixColumns,
    "m:ctrlPr": ControlProperties
  };
  MatrixColumns._C = {
    "m:mc": MatrixColumn
  };
  TwipsMeasureType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.UInt32Value)
  };
  MatrixColumn._C = {
    "m:mcPr": MatrixColumnProperties
  };
  MatrixColumnProperties._C = {
    "m:count": MatrixColumnCount,
    "m:mcJc": MatrixColumnJustification
  };
  MatrixColumnJustification._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, HorizontalAlignmentValuesArray)
  };
  MatrixColumnCount._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.IntegerValue)
  };
  LimitUpperProperties._C = {
    "m:ctrlPr": ControlProperties
  };
  LimitLowerProperties._C = {
    "m:ctrlPr": ControlProperties
  };
  GroupCharProperties._C = {
    "m:chr": AccentChar,
    "m:pos": Position,
    "m:vertJc": VerticalJustification,
    "m:ctrlPr": ControlProperties
  };
  FunctionProperties._C = {
    "m:ctrlPr": ControlProperties
  };
  FractionProperties._C = {
    "m:type": FractionType,
    "m:ctrlPr": ControlProperties
  };
  FractionType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, FractionTypeValuesArray)
  };
  EquationArrayProperties._C = {
    "m:baseJc": BaseJustification,
    "m:maxDist": MaxDistribution,
    "m:objDist": ObjectDistribution,
    "m:rSpRule": RowSpacingRule,
    "m:rSp": RowSpacing,
    "m:ctrlPr": ControlProperties
  };
  UnsignedShortType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.UInt16Value)
  };
  SpacingRuleType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.IntegerValue)
  };
  BaseJustification._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, VerticalAlignmentValuesArray)
  };
  DelimiterProperties._C = {
    "m:begChr": BeginChar,
    "m:sepChr": SeparatorChar,
    "m:endChr": EndChar,
    "m:grow": GrowOperators,
    "m:shp": Shape,
    "m:ctrlPr": ControlProperties
  };
  Shape._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, ShapeDelimiterValuesArray)
  };
  BorderBoxProperties._C = {
    "m:hideTop": HideTop,
    "m:hideBot": HideBottom,
    "m:hideLeft": HideLeft,
    "m:hideRight": HideRight,
    "m:strikeH": StrikeHorizontal,
    "m:strikeV": StrikeVertical,
    "m:strikeBLTR": StrikeBottomLeftToTopRight,
    "m:strikeTLBR": StrikeTopLeftToBottomRight,
    "m:ctrlPr": ControlProperties
  };
  BoxProperties._C = {
    "m:opEmu": OperatorEmulator,
    "m:noBreak": NoBreak,
    "m:diff": Differential,
    "m:brk": Break,
    "m:aln": Alignment,
    "m:ctrlPr": ControlProperties
  };
  BarProperties._C = {
    "m:pos": Position,
    "m:ctrlPr": ControlProperties
  };
  TopBottomType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, VerticalJustificationValuesArray)
  };
  OfficeMathArgumentType._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  Degree._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  SuperArgument._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  SubArgument._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  Limit._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  FunctionName._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  Denominator._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  Numerator._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  Base._C = {
    "m:argPr": ArgumentProperties,
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath,
    "m:ctrlPr": ControlProperties
  };
  AccentProperties._C = {
    "m:chr": AccentChar,
    "m:ctrlPr": ControlProperties
  };
  ControlProperties._C = {
    "w:rPr": WRunProperties,
    "w:ins": WInsertedMathControl,
    "w:del": WDeletedMathControl,
    "w:moveFrom": WMoveFromMathControl,
    "w:moveTo": WMoveToMathControl
  };
  CharType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.StringValue)
  };
  Text._D = {
    "xml:space": new OxmlAttr("xml:space", OxmlType.EnumValue, SpaceProcessingModeValuesArray)
  };
  RunProperties._C = {
    "m:lit": Literal,
    "m:nor": NormalText,
    "m:scr": Script,
    "m:sty": Style,
    "m:brk": Break,
    "m:aln": Alignment
  };
  Break._D = {
    "m:alnAt": new OxmlAttr("m:alnAt", OxmlType.IntegerValue),
    "m:val": new OxmlAttr("m:val", OxmlType.IntegerValue)
  };
  OnOffType._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, BooleanValuesArray)
  };
  MathProperties._C = {
    "m:mathFont": MathFont,
    "m:brkBin": BreakBinary,
    "m:brkBinSub": BreakBinarySubtraction,
    "m:smallFrac": SmallFraction,
    "m:dispDef": DisplayDefaults,
    "m:lMargin": LeftMargin,
    "m:rMargin": RightMargin,
    "m:defJc": DefaultJustification,
    "m:preSp": PreSpacing,
    "m:postSp": PostSpacing,
    "m:interSp": InterSpacing,
    "m:intraSp": IntraSpacing,
    "m:wrapIndent": WrapIndent,
    "m:wrapRight": WrapRight,
    "m:intLim": IntegralLimitLocation,
    "m:naryLim": NaryLimitLocation
  };
  OfficeMath._C = {
    "m:acc": Accent,
    "m:bar": Bar,
    "m:box": Box,
    "m:borderBox": BorderBox,
    "m:d": Delimiter,
    "m:eqArr": EquationArray,
    "m:f": Fraction,
    "m:func": MathFunction,
    "m:groupChr": GroupChar,
    "m:limLow": LimitLower,
    "m:limUpp": LimitUpper,
    "m:m": Matrix,
    "m:nary": Nary,
    "m:phant": Phantom,
    "m:rad": Radical,
    "m:sPre": PreSubSuper,
    "m:sSub": Subscript,
    "m:sSubSup": SubSuperscript,
    "m:sSup": Superscript,
    "m:r": Run,
    "w:customXml": WCustomXmlRun,
    "w:fldSimple": WSimpleField,
    "w:hyperlink": WHyperlink,
    "w:sdt": WSdtRun,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": Paragraph,
    "m:oMath": OfficeMath
  };
  Paragraph._C = {
    "m:oMathParaPr": ParagraphProperties,
    "m:oMath": OfficeMath,
    "m:r": Run,
    "w:proofErr": WProofError,
    "w:permStart": WPermStart,
    "w:permEnd": WPermEnd,
    "w:bookmarkStart": WBookmarkStart,
    "w:bookmarkEnd": WBookmarkEnd,
    "w:commentRangeStart": WCommentRangeStart,
    "w:commentRangeEnd": WCommentRangeEnd,
    "w:moveFromRangeStart": WMoveFromRangeStart,
    "w:moveFromRangeEnd": WMoveFromRangeEnd,
    "w:moveToRangeStart": WMoveToRangeStart,
    "w:moveToRangeEnd": WMoveToRangeEnd,
    "w:customXmlInsRangeStart": WCustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": WCustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": WCustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": WCustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": WCustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": WCustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": WCustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": WCustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "w:r": WRun
  };
  Superscript._C = {
    "m:sSupPr": SuperscriptProperties,
    "m:e": Base,
    "m:sup": SuperArgument
  };
  SubSuperscript._C = {
    "m:sSubSupPr": SubSuperscriptProperties,
    "m:e": Base,
    "m:sub": SubArgument,
    "m:sup": SuperArgument
  };
  Subscript._C = {
    "m:sSubPr": SubscriptProperties,
    "m:e": Base,
    "m:sub": SubArgument
  };
  PreSubSuper._C = {
    "m:sPrePr": PreSubSuperProperties,
    "m:sub": SubArgument,
    "m:sup": SuperArgument,
    "m:e": Base
  };
  Radical._C = {
    "m:radPr": RadicalProperties,
    "m:deg": Degree,
    "m:e": Base
  };
  Phantom._C = {
    "m:phantPr": PhantomProperties,
    "m:e": Base
  };
  Nary._C = {
    "m:naryPr": NaryProperties,
    "m:sub": SubArgument,
    "m:sup": SuperArgument,
    "m:e": Base
  };
  Matrix._C = {
    "m:mPr": MatrixProperties,
    "m:mr": MatrixRow
  };
  LimitUpper._C = {
    "m:limUppPr": LimitUpperProperties,
    "m:e": Base,
    "m:lim": Limit
  };
  LimitLower._C = {
    "m:limLowPr": LimitLowerProperties,
    "m:e": Base,
    "m:lim": Limit
  };
  GroupChar._C = {
    "m:groupChrPr": GroupCharProperties,
    "m:e": Base
  };
  MathFunction._C = {
    "m:funcPr": FunctionProperties,
    "m:fName": FunctionName,
    "m:e": Base
  };
  Fraction._C = {
    "m:fPr": FractionProperties,
    "m:num": Numerator,
    "m:den": Denominator
  };
  EquationArray._C = {
    "m:eqArrPr": EquationArrayProperties,
    "m:e": Base
  };
  Delimiter._C = {
    "m:dPr": DelimiterProperties,
    "m:e": Base
  };
  BorderBox._C = {
    "m:borderBoxPr": BorderBoxProperties,
    "m:e": Base
  };
  Box._C = {
    "m:boxPr": BoxProperties,
    "m:e": Base
  };
  Bar._C = {
    "m:barPr": BarProperties,
    "m:e": Base
  };
  Accent._C = {
    "m:accPr": AccentProperties,
    "m:e": Base
  };
  Run._C = {
    "m:rPr": RunProperties,
    "w:rPr": WRunProperties,
    "w:br": WBreak,
    "w:t": WText,
    "w:delText": WDeletedText,
    "w:instrText": WFieldCode,
    "w:delInstrText": WDeletedFieldCode,
    "w:noBreakHyphen": WNoBreakHyphen,
    "w:softHyphen": WSoftHyphen,
    "w:dayShort": WDayShort,
    "w:monthShort": WMonthShort,
    "w:yearShort": WYearShort,
    "w:dayLong": WDayLong,
    "w:monthLong": WMonthLong,
    "w:yearLong": WYearLong,
    "w:annotationRef": WAnnotationReferenceMark,
    "w:footnoteRef": WFootnoteReferenceMark,
    "w:endnoteRef": WEndnoteReferenceMark,
    "w:separator": WSeparatorMark,
    "w:continuationSeparator": WContinuationSeparatorMark,
    "w:sym": WSymbolChar,
    "w:pgNum": WPageNumber,
    "w:cr": WCarriageReturn,
    "w:tab": WTabChar,
    "w:object": WEmbeddedObject,
    "w:pict": WPicture,
    "w:fldChar": WFieldChar,
    "w:ruby": WRuby,
    "w:footnoteReference": WFootnoteReference,
    "w:endnoteReference": WEndnoteReference,
    "w:commentReference": WCommentReference,
    "w:drawing": WDrawing,
    "w:ptab": WPositionalTab,
    "w:lastRenderedPageBreak": WLastRenderedPageBreak,
    "m:t": Text
  };
  Style._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, StyleValuesArray)
  };
  Script._D = {
    "m:val": new OxmlAttr("m:val", OxmlType.EnumValue, ScriptValuesArray)
  };
  return {
    prefix: "m",
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/math"
  };
}
export {
  Accent,
  AccentChar,
  AccentProperties,
  AlignScripts,
  Alignment,
  ArgumentProperties,
  ArgumentSize,
  Bar,
  BarProperties,
  Base,
  BaseJustification,
  BeginChar,
  BooleanValues,
  BooleanValuesArray,
  BorderBox,
  BorderBoxProperties,
  Box,
  BoxProperties,
  Break,
  BreakBinary,
  BreakBinaryOperatorValues,
  BreakBinaryOperatorValuesArray,
  BreakBinarySubtraction,
  BreakBinarySubtractionValues,
  BreakBinarySubtractionValuesArray,
  CharType,
  ColumnGap,
  ColumnGapRule,
  ColumnSpacing,
  ControlProperties,
  DefaultJustification,
  Degree,
  Delimiter,
  DelimiterProperties,
  Denominator,
  Differential,
  DisplayDefaults,
  EndChar,
  EquationArray,
  EquationArrayProperties,
  Fraction,
  FractionProperties,
  FractionType,
  FractionTypeValues,
  FractionTypeValuesArray,
  FunctionName,
  FunctionProperties,
  GroupChar,
  GroupCharProperties,
  GrowOperators,
  HideBottom,
  HideDegree,
  HideLeft,
  HidePlaceholder,
  HideRight,
  HideSubArgument,
  HideSuperArgument,
  HideTop,
  HorizontalAlignmentValues,
  HorizontalAlignmentValuesArray,
  IntegralLimitLocation,
  InterSpacing,
  IntraSpacing,
  Justification,
  JustificationValues,
  JustificationValuesArray,
  LeftMargin,
  Limit,
  LimitLocation,
  LimitLocationType,
  LimitLocationValues,
  LimitLocationValuesArray,
  LimitLower,
  LimitLowerProperties,
  LimitUpper,
  LimitUpperProperties,
  Literal,
  MathFont,
  MathFunction,
  MathProperties,
  Matrix,
  MatrixColumn,
  MatrixColumnCount,
  MatrixColumnJustification,
  MatrixColumnProperties,
  MatrixColumns,
  MatrixProperties,
  MatrixRow,
  MaxDistribution,
  Nary,
  NaryLimitLocation,
  NaryProperties,
  NoBreak,
  NormalText,
  Numerator,
  ObjectDistribution,
  OfficeMath,
  OfficeMathArgumentType,
  OfficeMathJustificationType,
  OnOffType,
  OperatorEmulator,
  Paragraph,
  ParagraphProperties,
  Phantom,
  PhantomProperties,
  Position,
  PostSpacing,
  PreSpacing,
  PreSubSuper,
  PreSubSuperProperties,
  Radical,
  RadicalProperties,
  RightMargin,
  RowSpacing,
  RowSpacingRule,
  Run,
  RunProperties,
  Script,
  ScriptValues,
  ScriptValuesArray,
  SeparatorChar,
  Shape,
  ShapeDelimiterValues,
  ShapeDelimiterValuesArray,
  ShowPhantom,
  SmallFraction,
  SpacingRuleType,
  StrikeBottomLeftToTopRight,
  StrikeHorizontal,
  StrikeTopLeftToBottomRight,
  StrikeVertical,
  Style,
  StyleValues,
  StyleValuesArray,
  SubArgument,
  SubSuperscript,
  SubSuperscriptProperties,
  Subscript,
  SubscriptProperties,
  SuperArgument,
  Superscript,
  SuperscriptProperties,
  Text,
  TopBottomType,
  Transparent,
  TwipsMeasureType,
  UnsignedShortType,
  VerticalAlignmentValues,
  VerticalAlignmentValuesArray,
  VerticalJustification,
  VerticalJustificationValues,
  VerticalJustificationValuesArray,
  WrapIndent,
  WrapRight,
  ZeroAscent,
  ZeroDescent,
  ZeroWidth,
  initMathNamespace
};
