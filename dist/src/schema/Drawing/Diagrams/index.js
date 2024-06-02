import { OxmlPartRootElement } from "../../../framework/OxmlPartRootElement";
import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../Drawing";
import { PresetMaterialTypeValuesArray } from "../../Drawing";
import { NumberDiagramInfoList as Dgm1611NumberDiagramInfoList } from "../../Office2019/Drawing/Diagram11";
import { TextListStyleType as Dgm1612TextListStyleType } from "../../Office2019/Drawing/Diagram12";
import { PtExtension as APtExtension } from "../../Drawing";
import { BodyProperties as ABodyProperties } from "../../Drawing";
import { ListStyle as AListStyle } from "../../Drawing";
import { Paragraph as AParagraph } from "../../Drawing";
import { Transform2D as ATransform2D } from "../../Drawing";
import { CustomGeometry as ACustomGeometry } from "../../Drawing";
import { PresetGeometry as APresetGeometry } from "../../Drawing";
import { NoFill as ANoFill } from "../../Drawing";
import { SolidFill as ASolidFill } from "../../Drawing";
import { GradientFill as AGradientFill } from "../../Drawing";
import { BlipFill as ABlipFill } from "../../Drawing";
import { PatternFill as APatternFill } from "../../Drawing";
import { GroupFill as AGroupFill } from "../../Drawing";
import { Outline as AOutline } from "../../Drawing";
import { EffectList as AEffectList } from "../../Drawing";
import { EffectDag as AEffectDag } from "../../Drawing";
import { Scene3DType as AScene3DType } from "../../Drawing";
import { Shape3DType as AShape3DType } from "../../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../../Drawing";
import { DataModelExtension as ADataModelExtension } from "../../Drawing";
import { FlatText as AFlatText } from "../../Drawing";
import { BevelTop as ABevelTop } from "../../Drawing";
import { BevelBottom as ABevelBottom } from "../../Drawing";
import { ExtrusionColor as AExtrusionColor } from "../../Drawing";
import { ContourColor as AContourColor } from "../../Drawing";
import { ExtensionList as AExtensionList } from "../../Drawing";
import { Camera as ACamera } from "../../Drawing";
import { LightRig as ALightRig } from "../../Drawing";
import { Backdrop as ABackdrop } from "../../Drawing";
import { LineReference as ALineReference } from "../../Drawing";
import { FillReference as AFillReference } from "../../Drawing";
import { EffectReference as AEffectReference } from "../../Drawing";
import { FontReference as AFontReference } from "../../Drawing";
import { Extension as AExtension } from "../../Drawing";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../Drawing";
import { HslColor as AHslColor } from "../../Drawing";
import { SystemColor as ASystemColor } from "../../Drawing";
import { SchemeColor as ASchemeColor } from "../../Drawing";
import { PresetColor as APresetColor } from "../../Drawing";
var ColorApplicationMethodValues = /* @__PURE__ */ ((ColorApplicationMethodValues2) => {
  ColorApplicationMethodValues2["Span"] = "span";
  ColorApplicationMethodValues2["Cycle"] = "cycle";
  ColorApplicationMethodValues2["Repeat"] = "repeat";
  return ColorApplicationMethodValues2;
})(ColorApplicationMethodValues || {});
const ColorApplicationMethodValuesArray = [
  "span" /* Span */,
  "cycle" /* Cycle */,
  "repeat" /* Repeat */
];
var HueDirectionValues = /* @__PURE__ */ ((HueDirectionValues2) => {
  HueDirectionValues2["Clockwise"] = "cw";
  HueDirectionValues2["Counterclockwise"] = "ccw";
  return HueDirectionValues2;
})(HueDirectionValues || {});
const HueDirectionValuesArray = [
  "cw" /* Clockwise */,
  "ccw" /* Counterclockwise */
];
var PointValues = /* @__PURE__ */ ((PointValues2) => {
  PointValues2["Node"] = "node";
  PointValues2["Assistant"] = "asst";
  PointValues2["Document"] = "doc";
  PointValues2["Presentation"] = "pres";
  PointValues2["ParentTransition"] = "parTrans";
  PointValues2["SiblingTransition"] = "sibTrans";
  return PointValues2;
})(PointValues || {});
const PointValuesArray = [
  "node" /* Node */,
  "asst" /* Assistant */,
  "doc" /* Document */,
  "pres" /* Presentation */,
  "parTrans" /* ParentTransition */,
  "sibTrans" /* SiblingTransition */
];
var ConnectionValues = /* @__PURE__ */ ((ConnectionValues2) => {
  ConnectionValues2["ParentOf"] = "parOf";
  ConnectionValues2["PresentationOf"] = "presOf";
  ConnectionValues2["PresentationParentOf"] = "presParOf";
  ConnectionValues2["UnknownRelationship"] = "unknownRelationship";
  return ConnectionValues2;
})(ConnectionValues || {});
const ConnectionValuesArray = [
  "parOf" /* ParentOf */,
  "presOf" /* PresentationOf */,
  "presParOf" /* PresentationParentOf */,
  "unknownRelationship" /* UnknownRelationship */
];
var DirectionValues = /* @__PURE__ */ ((DirectionValues2) => {
  DirectionValues2["Normal"] = "norm";
  DirectionValues2["Reversed"] = "rev";
  return DirectionValues2;
})(DirectionValues || {});
const DirectionValuesArray = [
  "norm" /* Normal */,
  "rev" /* Reversed */
];
var HierarchyBranchStyleValues = /* @__PURE__ */ ((HierarchyBranchStyleValues2) => {
  HierarchyBranchStyleValues2["Left"] = "l";
  HierarchyBranchStyleValues2["Right"] = "r";
  HierarchyBranchStyleValues2["Hanging"] = "hang";
  HierarchyBranchStyleValues2["Standard"] = "std";
  HierarchyBranchStyleValues2["Initial"] = "init";
  return HierarchyBranchStyleValues2;
})(HierarchyBranchStyleValues || {});
const HierarchyBranchStyleValuesArray = [
  "l" /* Left */,
  "r" /* Right */,
  "hang" /* Hanging */,
  "std" /* Standard */,
  "init" /* Initial */
];
var AnimateOneByOneValues = /* @__PURE__ */ ((AnimateOneByOneValues2) => {
  AnimateOneByOneValues2["None"] = "none";
  AnimateOneByOneValues2["One"] = "one";
  AnimateOneByOneValues2["Branch"] = "branch";
  return AnimateOneByOneValues2;
})(AnimateOneByOneValues || {});
const AnimateOneByOneValuesArray = [
  "none" /* None */,
  "one" /* One */,
  "branch" /* Branch */
];
var AnimationLevelStringValues = /* @__PURE__ */ ((AnimationLevelStringValues2) => {
  AnimationLevelStringValues2["None"] = "none";
  AnimationLevelStringValues2["Level"] = "lvl";
  AnimationLevelStringValues2["Center"] = "ctr";
  return AnimationLevelStringValues2;
})(AnimationLevelStringValues || {});
const AnimationLevelStringValuesArray = [
  "none" /* None */,
  "lvl" /* Level */,
  "ctr" /* Center */
];
var ResizeHandlesStringValues = /* @__PURE__ */ ((ResizeHandlesStringValues2) => {
  ResizeHandlesStringValues2["Exact"] = "exact";
  ResizeHandlesStringValues2["Relative"] = "rel";
  return ResizeHandlesStringValues2;
})(ResizeHandlesStringValues || {});
const ResizeHandlesStringValuesArray = [
  "exact" /* Exact */,
  "rel" /* Relative */
];
var AlgorithmValues = /* @__PURE__ */ ((AlgorithmValues2) => {
  AlgorithmValues2["Composite"] = "composite";
  AlgorithmValues2["Connector"] = "conn";
  AlgorithmValues2["Cycle"] = "cycle";
  AlgorithmValues2["HierarchyChild"] = "hierChild";
  AlgorithmValues2["HierarchyRoot"] = "hierRoot";
  AlgorithmValues2["Pyramid"] = "pyra";
  AlgorithmValues2["Linear"] = "lin";
  AlgorithmValues2["Space"] = "sp";
  AlgorithmValues2["Text"] = "tx";
  AlgorithmValues2["Snake"] = "snake";
  return AlgorithmValues2;
})(AlgorithmValues || {});
const AlgorithmValuesArray = [
  "composite" /* Composite */,
  "conn" /* Connector */,
  "cycle" /* Cycle */,
  "hierChild" /* HierarchyChild */,
  "hierRoot" /* HierarchyRoot */,
  "pyra" /* Pyramid */,
  "lin" /* Linear */,
  "sp" /* Space */,
  "tx" /* Text */,
  "snake" /* Snake */
];
var AxisValues = /* @__PURE__ */ ((AxisValues2) => {
  AxisValues2["Self"] = "self";
  AxisValues2["Child"] = "ch";
  AxisValues2["Descendant"] = "des";
  AxisValues2["DescendantOrSelf"] = "desOrSelf";
  AxisValues2["Parent"] = "par";
  AxisValues2["Ancestor"] = "ancst";
  AxisValues2["AncestorOrSelf"] = "ancstOrSelf";
  AxisValues2["FollowSibling"] = "followSib";
  AxisValues2["PrecedingSibling"] = "precedSib";
  AxisValues2["Follow"] = "follow";
  AxisValues2["Preceding"] = "preced";
  AxisValues2["Root"] = "root";
  AxisValues2["None"] = "none";
  return AxisValues2;
})(AxisValues || {});
const AxisValuesArray = [
  "self" /* Self */,
  "ch" /* Child */,
  "des" /* Descendant */,
  "desOrSelf" /* DescendantOrSelf */,
  "par" /* Parent */,
  "ancst" /* Ancestor */,
  "ancstOrSelf" /* AncestorOrSelf */,
  "followSib" /* FollowSibling */,
  "precedSib" /* PrecedingSibling */,
  "follow" /* Follow */,
  "preced" /* Preceding */,
  "root" /* Root */,
  "none" /* None */
];
var BoolOperatorValues = /* @__PURE__ */ ((BoolOperatorValues2) => {
  BoolOperatorValues2["None"] = "none";
  BoolOperatorValues2["Equal"] = "equ";
  BoolOperatorValues2["GreaterThanOrEqualTo"] = "gte";
  BoolOperatorValues2["LessThanOrEqualTo"] = "lte";
  return BoolOperatorValues2;
})(BoolOperatorValues || {});
const BoolOperatorValuesArray = [
  "none" /* None */,
  "equ" /* Equal */,
  "gte" /* GreaterThanOrEqualTo */,
  "lte" /* LessThanOrEqualTo */
];
var ChildOrderValues = /* @__PURE__ */ ((ChildOrderValues2) => {
  ChildOrderValues2["Bottom"] = "b";
  ChildOrderValues2["Top"] = "t";
  return ChildOrderValues2;
})(ChildOrderValues || {});
const ChildOrderValuesArray = [
  "b" /* Bottom */,
  "t" /* Top */
];
var ConstraintValues = /* @__PURE__ */ ((ConstraintValues2) => {
  ConstraintValues2["None"] = "none";
  ConstraintValues2["AlignmentOffset"] = "alignOff";
  ConstraintValues2["BeginningMargin"] = "begMarg";
  ConstraintValues2["BendingDistance"] = "bendDist";
  ConstraintValues2["BeginningPadding"] = "begPad";
  ConstraintValues2["Bottom"] = "b";
  ConstraintValues2["BottomMargin"] = "bMarg";
  ConstraintValues2["BottomOffset"] = "bOff";
  ConstraintValues2["CenterHeight"] = "ctrX";
  ConstraintValues2["CenterXOffset"] = "ctrXOff";
  ConstraintValues2["CenterWidth"] = "ctrY";
  ConstraintValues2["CenterYOffset"] = "ctrYOff";
  ConstraintValues2["ConnectionDistance"] = "connDist";
  ConstraintValues2["Diameter"] = "diam";
  ConstraintValues2["EndMargin"] = "endMarg";
  ConstraintValues2["EndPadding"] = "endPad";
  ConstraintValues2["Height"] = "h";
  ConstraintValues2["ArrowheadHeight"] = "hArH";
  ConstraintValues2["HeightOffset"] = "hOff";
  ConstraintValues2["Left"] = "l";
  ConstraintValues2["LeftMargin"] = "lMarg";
  ConstraintValues2["LeftOffset"] = "lOff";
  ConstraintValues2["Right"] = "r";
  ConstraintValues2["RightMargin"] = "rMarg";
  ConstraintValues2["RightOffset"] = "rOff";
  ConstraintValues2["PrimaryFontSize"] = "primFontSz";
  ConstraintValues2["PyramidAccentRatio"] = "pyraAcctRatio";
  ConstraintValues2["SecondaryFontSize"] = "secFontSz";
  ConstraintValues2["SiblingSpacing"] = "sibSp";
  ConstraintValues2["SecondarySiblingSpacing"] = "secSibSp";
  ConstraintValues2["Spacing"] = "sp";
  ConstraintValues2["StemThickness"] = "stemThick";
  ConstraintValues2["Top"] = "t";
  ConstraintValues2["TopMargin"] = "tMarg";
  ConstraintValues2["TopOffset"] = "tOff";
  ConstraintValues2["UserDefinedA"] = "userA";
  ConstraintValues2["UserDefinedB"] = "userB";
  ConstraintValues2["UserDefinedC"] = "userC";
  ConstraintValues2["UserDefinedD"] = "userD";
  ConstraintValues2["UserDefinedE"] = "userE";
  ConstraintValues2["UserDefinedF"] = "userF";
  ConstraintValues2["UserDefinedG"] = "userG";
  ConstraintValues2["UserDefinedH"] = "userH";
  ConstraintValues2["UserDefinedI"] = "userI";
  ConstraintValues2["UserDefinedJ"] = "userJ";
  ConstraintValues2["UserDefinedK"] = "userK";
  ConstraintValues2["UserDefinedL"] = "userL";
  ConstraintValues2["UserDefinedM"] = "userM";
  ConstraintValues2["UserDefinedN"] = "userN";
  ConstraintValues2["UserDefinedO"] = "userO";
  ConstraintValues2["UserDefinedP"] = "userP";
  ConstraintValues2["UserDefinedQ"] = "userQ";
  ConstraintValues2["UserDefinedR"] = "userR";
  ConstraintValues2["UserDefinedS"] = "userS";
  ConstraintValues2["UserDefinedT"] = "userT";
  ConstraintValues2["UserDefinedU"] = "userU";
  ConstraintValues2["UserDefinedV"] = "userV";
  ConstraintValues2["UserDefinedW"] = "userW";
  ConstraintValues2["UserDefinedX"] = "userX";
  ConstraintValues2["UserDefinedY"] = "userY";
  ConstraintValues2["UserDefinedZ"] = "userZ";
  ConstraintValues2["Width"] = "w";
  ConstraintValues2["ArrowheadWidth"] = "wArH";
  ConstraintValues2["WidthOffset"] = "wOff";
  return ConstraintValues2;
})(ConstraintValues || {});
const ConstraintValuesArray = [
  "none" /* None */,
  "alignOff" /* AlignmentOffset */,
  "begMarg" /* BeginningMargin */,
  "bendDist" /* BendingDistance */,
  "begPad" /* BeginningPadding */,
  "b" /* Bottom */,
  "bMarg" /* BottomMargin */,
  "bOff" /* BottomOffset */,
  "ctrX" /* CenterHeight */,
  "ctrXOff" /* CenterXOffset */,
  "ctrY" /* CenterWidth */,
  "ctrYOff" /* CenterYOffset */,
  "connDist" /* ConnectionDistance */,
  "diam" /* Diameter */,
  "endMarg" /* EndMargin */,
  "endPad" /* EndPadding */,
  "h" /* Height */,
  "hArH" /* ArrowheadHeight */,
  "hOff" /* HeightOffset */,
  "l" /* Left */,
  "lMarg" /* LeftMargin */,
  "lOff" /* LeftOffset */,
  "r" /* Right */,
  "rMarg" /* RightMargin */,
  "rOff" /* RightOffset */,
  "primFontSz" /* PrimaryFontSize */,
  "pyraAcctRatio" /* PyramidAccentRatio */,
  "secFontSz" /* SecondaryFontSize */,
  "sibSp" /* SiblingSpacing */,
  "secSibSp" /* SecondarySiblingSpacing */,
  "sp" /* Spacing */,
  "stemThick" /* StemThickness */,
  "t" /* Top */,
  "tMarg" /* TopMargin */,
  "tOff" /* TopOffset */,
  "userA" /* UserDefinedA */,
  "userB" /* UserDefinedB */,
  "userC" /* UserDefinedC */,
  "userD" /* UserDefinedD */,
  "userE" /* UserDefinedE */,
  "userF" /* UserDefinedF */,
  "userG" /* UserDefinedG */,
  "userH" /* UserDefinedH */,
  "userI" /* UserDefinedI */,
  "userJ" /* UserDefinedJ */,
  "userK" /* UserDefinedK */,
  "userL" /* UserDefinedL */,
  "userM" /* UserDefinedM */,
  "userN" /* UserDefinedN */,
  "userO" /* UserDefinedO */,
  "userP" /* UserDefinedP */,
  "userQ" /* UserDefinedQ */,
  "userR" /* UserDefinedR */,
  "userS" /* UserDefinedS */,
  "userT" /* UserDefinedT */,
  "userU" /* UserDefinedU */,
  "userV" /* UserDefinedV */,
  "userW" /* UserDefinedW */,
  "userX" /* UserDefinedX */,
  "userY" /* UserDefinedY */,
  "userZ" /* UserDefinedZ */,
  "w" /* Width */,
  "wArH" /* ArrowheadWidth */,
  "wOff" /* WidthOffset */
];
var ConstraintRelationshipValues = /* @__PURE__ */ ((ConstraintRelationshipValues2) => {
  ConstraintRelationshipValues2["Self"] = "self";
  ConstraintRelationshipValues2["Child"] = "ch";
  ConstraintRelationshipValues2["Descendant"] = "des";
  return ConstraintRelationshipValues2;
})(ConstraintRelationshipValues || {});
const ConstraintRelationshipValuesArray = [
  "self" /* Self */,
  "ch" /* Child */,
  "des" /* Descendant */
];
var ElementValues = /* @__PURE__ */ ((ElementValues2) => {
  ElementValues2["All"] = "all";
  ElementValues2["Document"] = "doc";
  ElementValues2["Node"] = "node";
  ElementValues2["Normal"] = "norm";
  ElementValues2["NonNormal"] = "nonNorm";
  ElementValues2["Assistant"] = "asst";
  ElementValues2["NonAssistant"] = "nonAsst";
  ElementValues2["ParentTransition"] = "parTrans";
  ElementValues2["Presentation"] = "pres";
  ElementValues2["SiblingTransition"] = "sibTrans";
  return ElementValues2;
})(ElementValues || {});
const ElementValuesArray = [
  "all" /* All */,
  "doc" /* Document */,
  "node" /* Node */,
  "norm" /* Normal */,
  "nonNorm" /* NonNormal */,
  "asst" /* Assistant */,
  "nonAsst" /* NonAssistant */,
  "parTrans" /* ParentTransition */,
  "pres" /* Presentation */,
  "sibTrans" /* SiblingTransition */
];
var ParameterIdValues = /* @__PURE__ */ ((ParameterIdValues2) => {
  ParameterIdValues2["HorizontalAlignment"] = "horzAlign";
  ParameterIdValues2["VerticalAlignment"] = "vertAlign";
  ParameterIdValues2["ChildDirection"] = "chDir";
  ParameterIdValues2["ChildAlignment"] = "chAlign";
  ParameterIdValues2["SecondaryChildAlignment"] = "secChAlign";
  ParameterIdValues2["LinearDirection"] = "linDir";
  ParameterIdValues2["SecondaryLinearDirection"] = "secLinDir";
  ParameterIdValues2["StartElement"] = "stElem";
  ParameterIdValues2["BendPoint"] = "bendPt";
  ParameterIdValues2["ConnectionRoute"] = "connRout";
  ParameterIdValues2["BeginningArrowheadStyle"] = "begSty";
  ParameterIdValues2["EndStyle"] = "endSty";
  ParameterIdValues2["ConnectorDimension"] = "dim";
  ParameterIdValues2["RotationPath"] = "rotPath";
  ParameterIdValues2["CenterShapeMapping"] = "ctrShpMap";
  ParameterIdValues2["NodeHorizontalAlignment"] = "nodeHorzAlign";
  ParameterIdValues2["NodeVerticalAlignment"] = "nodeVertAlign";
  ParameterIdValues2["FallbackScale"] = "fallback";
  ParameterIdValues2["TextDirection"] = "txDir";
  ParameterIdValues2["PyramidAccentPosition"] = "pyraAcctPos";
  ParameterIdValues2["PyramidAccentTextMargin"] = "pyraAcctTxMar";
  ParameterIdValues2["TextBlockDirection"] = "txBlDir";
  ParameterIdValues2["TextAnchorHorizontal"] = "txAnchorHorz";
  ParameterIdValues2["TextAnchorVertical"] = "txAnchorVert";
  ParameterIdValues2["TextAnchorHorizontalWithChildren"] = "txAnchorHorzCh";
  ParameterIdValues2["TextAnchorVerticalWithChildren"] = "txAnchorVertCh";
  ParameterIdValues2["ParentTextLeftToRightAlignment"] = "parTxLTRAlign";
  ParameterIdValues2["ParentTextRightToLeftAlignment"] = "parTxRTLAlign";
  ParameterIdValues2["ShapeTextLeftToRightAlignment"] = "shpTxLTRAlignCh";
  ParameterIdValues2["ShapeTextRightToLeftAlignment"] = "shpTxRTLAlignCh";
  ParameterIdValues2["AutoTextRotation"] = "autoTxRot";
  ParameterIdValues2["GrowDirection"] = "grDir";
  ParameterIdValues2["FlowDirection"] = "flowDir";
  ParameterIdValues2["ContinueDirection"] = "contDir";
  ParameterIdValues2["Breakpoint"] = "bkpt";
  ParameterIdValues2["Offset"] = "off";
  ParameterIdValues2["HierarchyAlignment"] = "hierAlign";
  ParameterIdValues2["BreakpointFixedValue"] = "bkPtFixedVal";
  ParameterIdValues2["StartBulletsAtLevel"] = "stBulletLvl";
  ParameterIdValues2["StartAngle"] = "stAng";
  ParameterIdValues2["SpanAngle"] = "spanAng";
  ParameterIdValues2["AspectRatio"] = "ar";
  ParameterIdValues2["LineSpacingParent"] = "lnSpPar";
  ParameterIdValues2["LineSpacingAfterParentParagraph"] = "lnSpAfParP";
  ParameterIdValues2["LineSpacingChildren"] = "lnSpCh";
  ParameterIdValues2["LineSpacingAfterChildrenParagraph"] = "lnSpAfChP";
  ParameterIdValues2["RouteShortestDistance"] = "rtShortDist";
  ParameterIdValues2["TextAlignment"] = "alignTx";
  ParameterIdValues2["PyramidLevelNode"] = "pyraLvlNode";
  ParameterIdValues2["PyramidAccentBackgroundNode"] = "pyraAcctBkgdNode";
  ParameterIdValues2["PyramidAccentTextNode"] = "pyraAcctTxNode";
  ParameterIdValues2["SourceNode"] = "srcNode";
  ParameterIdValues2["DestinationNode"] = "dstNode";
  ParameterIdValues2["BeginningPoints"] = "begPts";
  ParameterIdValues2["EndPoints"] = "endPts";
  return ParameterIdValues2;
})(ParameterIdValues || {});
const ParameterIdValuesArray = [
  "horzAlign" /* HorizontalAlignment */,
  "vertAlign" /* VerticalAlignment */,
  "chDir" /* ChildDirection */,
  "chAlign" /* ChildAlignment */,
  "secChAlign" /* SecondaryChildAlignment */,
  "linDir" /* LinearDirection */,
  "secLinDir" /* SecondaryLinearDirection */,
  "stElem" /* StartElement */,
  "bendPt" /* BendPoint */,
  "connRout" /* ConnectionRoute */,
  "begSty" /* BeginningArrowheadStyle */,
  "endSty" /* EndStyle */,
  "dim" /* ConnectorDimension */,
  "rotPath" /* RotationPath */,
  "ctrShpMap" /* CenterShapeMapping */,
  "nodeHorzAlign" /* NodeHorizontalAlignment */,
  "nodeVertAlign" /* NodeVerticalAlignment */,
  "fallback" /* FallbackScale */,
  "txDir" /* TextDirection */,
  "pyraAcctPos" /* PyramidAccentPosition */,
  "pyraAcctTxMar" /* PyramidAccentTextMargin */,
  "txBlDir" /* TextBlockDirection */,
  "txAnchorHorz" /* TextAnchorHorizontal */,
  "txAnchorVert" /* TextAnchorVertical */,
  "txAnchorHorzCh" /* TextAnchorHorizontalWithChildren */,
  "txAnchorVertCh" /* TextAnchorVerticalWithChildren */,
  "parTxLTRAlign" /* ParentTextLeftToRightAlignment */,
  "parTxRTLAlign" /* ParentTextRightToLeftAlignment */,
  "shpTxLTRAlignCh" /* ShapeTextLeftToRightAlignment */,
  "shpTxRTLAlignCh" /* ShapeTextRightToLeftAlignment */,
  "autoTxRot" /* AutoTextRotation */,
  "grDir" /* GrowDirection */,
  "flowDir" /* FlowDirection */,
  "contDir" /* ContinueDirection */,
  "bkpt" /* Breakpoint */,
  "off" /* Offset */,
  "hierAlign" /* HierarchyAlignment */,
  "bkPtFixedVal" /* BreakpointFixedValue */,
  "stBulletLvl" /* StartBulletsAtLevel */,
  "stAng" /* StartAngle */,
  "spanAng" /* SpanAngle */,
  "ar" /* AspectRatio */,
  "lnSpPar" /* LineSpacingParent */,
  "lnSpAfParP" /* LineSpacingAfterParentParagraph */,
  "lnSpCh" /* LineSpacingChildren */,
  "lnSpAfChP" /* LineSpacingAfterChildrenParagraph */,
  "rtShortDist" /* RouteShortestDistance */,
  "alignTx" /* TextAlignment */,
  "pyraLvlNode" /* PyramidLevelNode */,
  "pyraAcctBkgdNode" /* PyramidAccentBackgroundNode */,
  "pyraAcctTxNode" /* PyramidAccentTextNode */,
  "srcNode" /* SourceNode */,
  "dstNode" /* DestinationNode */,
  "begPts" /* BeginningPoints */,
  "endPts" /* EndPoints */
];
var FunctionValues = /* @__PURE__ */ ((FunctionValues2) => {
  FunctionValues2["Count"] = "cnt";
  FunctionValues2["Position"] = "pos";
  FunctionValues2["ReversePosition"] = "revPos";
  FunctionValues2["PositionEven"] = "posEven";
  FunctionValues2["PositionOdd"] = "posOdd";
  FunctionValues2["Variable"] = "var";
  FunctionValues2["Depth"] = "depth";
  FunctionValues2["MaxDepth"] = "maxDepth";
  return FunctionValues2;
})(FunctionValues || {});
const FunctionValuesArray = [
  "cnt" /* Count */,
  "pos" /* Position */,
  "revPos" /* ReversePosition */,
  "posEven" /* PositionEven */,
  "posOdd" /* PositionOdd */,
  "var" /* Variable */,
  "depth" /* Depth */,
  "maxDepth" /* MaxDepth */
];
var FunctionOperatorValues = /* @__PURE__ */ ((FunctionOperatorValues2) => {
  FunctionOperatorValues2["Equal"] = "equ";
  FunctionOperatorValues2["NotEqualTo"] = "neq";
  FunctionOperatorValues2["GreaterThan"] = "gt";
  FunctionOperatorValues2["LessThan"] = "lt";
  FunctionOperatorValues2["GreaterThanOrEqualTo"] = "gte";
  FunctionOperatorValues2["LessThanOrEqualTo"] = "lte";
  return FunctionOperatorValues2;
})(FunctionOperatorValues || {});
const FunctionOperatorValuesArray = [
  "equ" /* Equal */,
  "neq" /* NotEqualTo */,
  "gt" /* GreaterThan */,
  "lt" /* LessThan */,
  "gte" /* GreaterThanOrEqualTo */,
  "lte" /* LessThanOrEqualTo */
];
var HorizontalAlignmentValues = /* @__PURE__ */ ((HorizontalAlignmentValues2) => {
  HorizontalAlignmentValues2["Left"] = "l";
  HorizontalAlignmentValues2["Center"] = "ctr";
  HorizontalAlignmentValues2["Right"] = "r";
  HorizontalAlignmentValues2["None"] = "none";
  return HorizontalAlignmentValues2;
})(HorizontalAlignmentValues || {});
const HorizontalAlignmentValuesArray = [
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */,
  "none" /* None */
];
var ChildDirectionValues = /* @__PURE__ */ ((ChildDirectionValues2) => {
  ChildDirectionValues2["Horizontal"] = "horz";
  ChildDirectionValues2["Vertical"] = "vert";
  return ChildDirectionValues2;
})(ChildDirectionValues || {});
const ChildDirectionValuesArray = [
  "horz" /* Horizontal */,
  "vert" /* Vertical */
];
var ChildAlignmentValues = /* @__PURE__ */ ((ChildAlignmentValues2) => {
  ChildAlignmentValues2["Top"] = "t";
  ChildAlignmentValues2["Bottom"] = "b";
  ChildAlignmentValues2["Left"] = "l";
  ChildAlignmentValues2["Right"] = "r";
  return ChildAlignmentValues2;
})(ChildAlignmentValues || {});
const ChildAlignmentValuesArray = [
  "t" /* Top */,
  "b" /* Bottom */,
  "l" /* Left */,
  "r" /* Right */
];
var SecondaryChildAlignmentValues = /* @__PURE__ */ ((SecondaryChildAlignmentValues2) => {
  SecondaryChildAlignmentValues2["None"] = "none";
  SecondaryChildAlignmentValues2["Top"] = "t";
  SecondaryChildAlignmentValues2["Bottom"] = "b";
  SecondaryChildAlignmentValues2["Left"] = "l";
  SecondaryChildAlignmentValues2["Right"] = "r";
  return SecondaryChildAlignmentValues2;
})(SecondaryChildAlignmentValues || {});
const SecondaryChildAlignmentValuesArray = [
  "none" /* None */,
  "t" /* Top */,
  "b" /* Bottom */,
  "l" /* Left */,
  "r" /* Right */
];
var LinearDirectionValues = /* @__PURE__ */ ((LinearDirectionValues2) => {
  LinearDirectionValues2["FromLeft"] = "fromL";
  LinearDirectionValues2["FromRight"] = "fromR";
  LinearDirectionValues2["FromTop"] = "fromT";
  LinearDirectionValues2["FromBottom"] = "fromB";
  return LinearDirectionValues2;
})(LinearDirectionValues || {});
const LinearDirectionValuesArray = [
  "fromL" /* FromLeft */,
  "fromR" /* FromRight */,
  "fromT" /* FromTop */,
  "fromB" /* FromBottom */
];
var SecondaryLinearDirectionValues = /* @__PURE__ */ ((SecondaryLinearDirectionValues2) => {
  SecondaryLinearDirectionValues2["None"] = "none";
  SecondaryLinearDirectionValues2["FromLeft"] = "fromL";
  SecondaryLinearDirectionValues2["FromRight"] = "fromR";
  SecondaryLinearDirectionValues2["FromTop"] = "fromT";
  SecondaryLinearDirectionValues2["FromBottom"] = "fromB";
  return SecondaryLinearDirectionValues2;
})(SecondaryLinearDirectionValues || {});
const SecondaryLinearDirectionValuesArray = [
  "none" /* None */,
  "fromL" /* FromLeft */,
  "fromR" /* FromRight */,
  "fromT" /* FromTop */,
  "fromB" /* FromBottom */
];
var StartingElementValues = /* @__PURE__ */ ((StartingElementValues2) => {
  StartingElementValues2["Node"] = "node";
  StartingElementValues2["Transition"] = "trans";
  return StartingElementValues2;
})(StartingElementValues || {});
const StartingElementValuesArray = [
  "node" /* Node */,
  "trans" /* Transition */
];
var RotationPathValues = /* @__PURE__ */ ((RotationPathValues2) => {
  RotationPathValues2["None"] = "none";
  RotationPathValues2["AlongPath"] = "alongPath";
  return RotationPathValues2;
})(RotationPathValues || {});
const RotationPathValuesArray = [
  "none" /* None */,
  "alongPath" /* AlongPath */
];
var CenterShapeMappingValues = /* @__PURE__ */ ((CenterShapeMappingValues2) => {
  CenterShapeMappingValues2["None"] = "none";
  CenterShapeMappingValues2["FirstNode"] = "fNode";
  return CenterShapeMappingValues2;
})(CenterShapeMappingValues || {});
const CenterShapeMappingValuesArray = [
  "none" /* None */,
  "fNode" /* FirstNode */
];
var BendPointValues = /* @__PURE__ */ ((BendPointValues2) => {
  BendPointValues2["Beginning"] = "beg";
  BendPointValues2["Default"] = "def";
  BendPointValues2["End"] = "end";
  return BendPointValues2;
})(BendPointValues || {});
const BendPointValuesArray = [
  "beg" /* Beginning */,
  "def" /* Default */,
  "end" /* End */
];
var ConnectorRoutingValues = /* @__PURE__ */ ((ConnectorRoutingValues2) => {
  ConnectorRoutingValues2["Straight"] = "stra";
  ConnectorRoutingValues2["Bending"] = "bend";
  ConnectorRoutingValues2["Curve"] = "curve";
  ConnectorRoutingValues2["LongCurve"] = "longCurve";
  return ConnectorRoutingValues2;
})(ConnectorRoutingValues || {});
const ConnectorRoutingValuesArray = [
  "stra" /* Straight */,
  "bend" /* Bending */,
  "curve" /* Curve */,
  "longCurve" /* LongCurve */
];
var ArrowheadStyleValues = /* @__PURE__ */ ((ArrowheadStyleValues2) => {
  ArrowheadStyleValues2["Auto"] = "auto";
  ArrowheadStyleValues2["Arrow"] = "arr";
  ArrowheadStyleValues2["NoArrow"] = "noArr";
  return ArrowheadStyleValues2;
})(ArrowheadStyleValues || {});
const ArrowheadStyleValuesArray = [
  "auto" /* Auto */,
  "arr" /* Arrow */,
  "noArr" /* NoArrow */
];
var ConnectorDimensionValues = /* @__PURE__ */ ((ConnectorDimensionValues2) => {
  ConnectorDimensionValues2["OneDimension"] = "1D";
  ConnectorDimensionValues2["TwoDimension"] = "2D";
  ConnectorDimensionValues2["Custom"] = "cust";
  return ConnectorDimensionValues2;
})(ConnectorDimensionValues || {});
const ConnectorDimensionValuesArray = [
  "1D" /* OneDimension */,
  "2D" /* TwoDimension */,
  "cust" /* Custom */
];
var ConnectorPointValues = /* @__PURE__ */ ((ConnectorPointValues2) => {
  ConnectorPointValues2["Auto"] = "auto";
  ConnectorPointValues2["BottomCenter"] = "bCtr";
  ConnectorPointValues2["Center"] = "ctr";
  ConnectorPointValues2["MiddleLeft"] = "midL";
  ConnectorPointValues2["MiddleRight"] = "midR";
  ConnectorPointValues2["TopCenter"] = "tCtr";
  ConnectorPointValues2["BottomLeft"] = "bL";
  ConnectorPointValues2["BottomRight"] = "bR";
  ConnectorPointValues2["TopLeft"] = "tL";
  ConnectorPointValues2["TopRight"] = "tR";
  ConnectorPointValues2["Radial"] = "radial";
  return ConnectorPointValues2;
})(ConnectorPointValues || {});
const ConnectorPointValuesArray = [
  "auto" /* Auto */,
  "bCtr" /* BottomCenter */,
  "ctr" /* Center */,
  "midL" /* MiddleLeft */,
  "midR" /* MiddleRight */,
  "tCtr" /* TopCenter */,
  "bL" /* BottomLeft */,
  "bR" /* BottomRight */,
  "tL" /* TopLeft */,
  "tR" /* TopRight */,
  "radial" /* Radial */
];
var NodeHorizontalAlignmentValues = /* @__PURE__ */ ((NodeHorizontalAlignmentValues2) => {
  NodeHorizontalAlignmentValues2["Left"] = "l";
  NodeHorizontalAlignmentValues2["Center"] = "ctr";
  NodeHorizontalAlignmentValues2["Right"] = "r";
  return NodeHorizontalAlignmentValues2;
})(NodeHorizontalAlignmentValues || {});
const NodeHorizontalAlignmentValuesArray = [
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */
];
var NodeVerticalAlignmentValues = /* @__PURE__ */ ((NodeVerticalAlignmentValues2) => {
  NodeVerticalAlignmentValues2["Top"] = "t";
  NodeVerticalAlignmentValues2["Middle"] = "mid";
  NodeVerticalAlignmentValues2["Bottom"] = "b";
  return NodeVerticalAlignmentValues2;
})(NodeVerticalAlignmentValues || {});
const NodeVerticalAlignmentValuesArray = [
  "t" /* Top */,
  "mid" /* Middle */,
  "b" /* Bottom */
];
var FallbackDimensionValues = /* @__PURE__ */ ((FallbackDimensionValues2) => {
  FallbackDimensionValues2["OneDimension"] = "1D";
  FallbackDimensionValues2["TwoDimension"] = "2D";
  return FallbackDimensionValues2;
})(FallbackDimensionValues || {});
const FallbackDimensionValuesArray = [
  "1D" /* OneDimension */,
  "2D" /* TwoDimension */
];
var TextDirectionValues = /* @__PURE__ */ ((TextDirectionValues2) => {
  TextDirectionValues2["FromTop"] = "fromT";
  TextDirectionValues2["FromBottom"] = "fromB";
  return TextDirectionValues2;
})(TextDirectionValues || {});
const TextDirectionValuesArray = [
  "fromT" /* FromTop */,
  "fromB" /* FromBottom */
];
var PyramidAccentPositionValues = /* @__PURE__ */ ((PyramidAccentPositionValues2) => {
  PyramidAccentPositionValues2["Before"] = "bef";
  PyramidAccentPositionValues2["After"] = "aft";
  return PyramidAccentPositionValues2;
})(PyramidAccentPositionValues || {});
const PyramidAccentPositionValuesArray = [
  "bef" /* Before */,
  "aft" /* After */
];
var PyramidAccentTextMarginValues = /* @__PURE__ */ ((PyramidAccentTextMarginValues2) => {
  PyramidAccentTextMarginValues2["Step"] = "step";
  PyramidAccentTextMarginValues2["Stack"] = "stack";
  return PyramidAccentTextMarginValues2;
})(PyramidAccentTextMarginValues || {});
const PyramidAccentTextMarginValuesArray = [
  "step" /* Step */,
  "stack" /* Stack */
];
var TextBlockDirectionValues = /* @__PURE__ */ ((TextBlockDirectionValues2) => {
  TextBlockDirectionValues2["Horizontal"] = "horz";
  TextBlockDirectionValues2["Vertical"] = "vert";
  return TextBlockDirectionValues2;
})(TextBlockDirectionValues || {});
const TextBlockDirectionValuesArray = [
  "horz" /* Horizontal */,
  "vert" /* Vertical */
];
var TextAnchorHorizontalValues = /* @__PURE__ */ ((TextAnchorHorizontalValues2) => {
  TextAnchorHorizontalValues2["None"] = "none";
  TextAnchorHorizontalValues2["Center"] = "ctr";
  return TextAnchorHorizontalValues2;
})(TextAnchorHorizontalValues || {});
const TextAnchorHorizontalValuesArray = [
  "none" /* None */,
  "ctr" /* Center */
];
var TextAnchorVerticalValues = /* @__PURE__ */ ((TextAnchorVerticalValues2) => {
  TextAnchorVerticalValues2["Top"] = "t";
  TextAnchorVerticalValues2["Middle"] = "mid";
  TextAnchorVerticalValues2["Bottom"] = "b";
  return TextAnchorVerticalValues2;
})(TextAnchorVerticalValues || {});
const TextAnchorVerticalValuesArray = [
  "t" /* Top */,
  "mid" /* Middle */,
  "b" /* Bottom */
];
var TextAlignmentValues = /* @__PURE__ */ ((TextAlignmentValues2) => {
  TextAlignmentValues2["Left"] = "l";
  TextAlignmentValues2["Center"] = "ctr";
  TextAlignmentValues2["Right"] = "r";
  return TextAlignmentValues2;
})(TextAlignmentValues || {});
const TextAlignmentValuesArray = [
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */
];
var AutoTextRotationValues = /* @__PURE__ */ ((AutoTextRotationValues2) => {
  AutoTextRotationValues2["None"] = "none";
  AutoTextRotationValues2["Upright"] = "upr";
  AutoTextRotationValues2["Gravity"] = "grav";
  return AutoTextRotationValues2;
})(AutoTextRotationValues || {});
const AutoTextRotationValuesArray = [
  "none" /* None */,
  "upr" /* Upright */,
  "grav" /* Gravity */
];
var GrowDirectionValues = /* @__PURE__ */ ((GrowDirectionValues2) => {
  GrowDirectionValues2["TopLeft"] = "tL";
  GrowDirectionValues2["TopRight"] = "tR";
  GrowDirectionValues2["BottomLeft"] = "bL";
  GrowDirectionValues2["BottomRight"] = "bR";
  return GrowDirectionValues2;
})(GrowDirectionValues || {});
const GrowDirectionValuesArray = [
  "tL" /* TopLeft */,
  "tR" /* TopRight */,
  "bL" /* BottomLeft */,
  "bR" /* BottomRight */
];
var FlowDirectionValues = /* @__PURE__ */ ((FlowDirectionValues2) => {
  FlowDirectionValues2["Row"] = "row";
  FlowDirectionValues2["Column"] = "col";
  return FlowDirectionValues2;
})(FlowDirectionValues || {});
const FlowDirectionValuesArray = [
  "row" /* Row */,
  "col" /* Column */
];
var ContinueDirectionValues = /* @__PURE__ */ ((ContinueDirectionValues2) => {
  ContinueDirectionValues2["ReverseDirection"] = "revDir";
  ContinueDirectionValues2["SameDirection"] = "sameDir";
  return ContinueDirectionValues2;
})(ContinueDirectionValues || {});
const ContinueDirectionValuesArray = [
  "revDir" /* ReverseDirection */,
  "sameDir" /* SameDirection */
];
var BreakpointValues = /* @__PURE__ */ ((BreakpointValues2) => {
  BreakpointValues2["EndCanvas"] = "endCnv";
  BreakpointValues2["Balanced"] = "bal";
  BreakpointValues2["Fixed"] = "fixed";
  return BreakpointValues2;
})(BreakpointValues || {});
const BreakpointValuesArray = [
  "endCnv" /* EndCanvas */,
  "bal" /* Balanced */,
  "fixed" /* Fixed */
];
var OffsetValues = /* @__PURE__ */ ((OffsetValues2) => {
  OffsetValues2["Center"] = "ctr";
  OffsetValues2["Offset"] = "off";
  return OffsetValues2;
})(OffsetValues || {});
const OffsetValuesArray = [
  "ctr" /* Center */,
  "off" /* Offset */
];
var HierarchyAlignmentValues = /* @__PURE__ */ ((HierarchyAlignmentValues2) => {
  HierarchyAlignmentValues2["TopLeft"] = "tL";
  HierarchyAlignmentValues2["TopRight"] = "tR";
  HierarchyAlignmentValues2["TopCenterChildren"] = "tCtrCh";
  HierarchyAlignmentValues2["TopCenterDescendants"] = "tCtrDes";
  HierarchyAlignmentValues2["BottomLeft"] = "bL";
  HierarchyAlignmentValues2["BottomRight"] = "bR";
  HierarchyAlignmentValues2["BottomCenterChild"] = "bCtrCh";
  HierarchyAlignmentValues2["BottomCenterDescendant"] = "bCtrDes";
  HierarchyAlignmentValues2["LeftTop"] = "lT";
  HierarchyAlignmentValues2["LeftBottom"] = "lB";
  HierarchyAlignmentValues2["LeftCenterChild"] = "lCtrCh";
  HierarchyAlignmentValues2["LeftCenterDescendant"] = "lCtrDes";
  HierarchyAlignmentValues2["RightTop"] = "rT";
  HierarchyAlignmentValues2["RightBottom"] = "rB";
  HierarchyAlignmentValues2["RightCenterChildren"] = "rCtrCh";
  HierarchyAlignmentValues2["RightCenterDescendants"] = "rCtrDes";
  return HierarchyAlignmentValues2;
})(HierarchyAlignmentValues || {});
const HierarchyAlignmentValuesArray = [
  "tL" /* TopLeft */,
  "tR" /* TopRight */,
  "tCtrCh" /* TopCenterChildren */,
  "tCtrDes" /* TopCenterDescendants */,
  "bL" /* BottomLeft */,
  "bR" /* BottomRight */,
  "bCtrCh" /* BottomCenterChild */,
  "bCtrDes" /* BottomCenterDescendant */,
  "lT" /* LeftTop */,
  "lB" /* LeftBottom */,
  "lCtrCh" /* LeftCenterChild */,
  "lCtrDes" /* LeftCenterDescendant */,
  "rT" /* RightTop */,
  "rB" /* RightBottom */,
  "rCtrCh" /* RightCenterChildren */,
  "rCtrDes" /* RightCenterDescendants */
];
var VariableValues = /* @__PURE__ */ ((VariableValues2) => {
  VariableValues2["None"] = "none";
  VariableValues2["OrganizationalChart"] = "orgChart";
  VariableValues2["ChildMax"] = "chMax";
  VariableValues2["ChildPreference"] = "chPref";
  VariableValues2["BulletsEnabled"] = "bulEnabled";
  VariableValues2["Direction"] = "dir";
  VariableValues2["HierarchyBranch"] = "hierBranch";
  VariableValues2["AnimateOne"] = "animOne";
  VariableValues2["AnimationLevel"] = "animLvl";
  VariableValues2["ResizeHandles"] = "resizeHandles";
  return VariableValues2;
})(VariableValues || {});
const VariableValuesArray = [
  "none" /* None */,
  "orgChart" /* OrganizationalChart */,
  "chMax" /* ChildMax */,
  "chPref" /* ChildPreference */,
  "bulEnabled" /* BulletsEnabled */,
  "dir" /* Direction */,
  "hierBranch" /* HierarchyBranch */,
  "animOne" /* AnimateOne */,
  "animLvl" /* AnimationLevel */,
  "resizeHandles" /* ResizeHandles */
];
var OutputShapeValues = /* @__PURE__ */ ((OutputShapeValues2) => {
  OutputShapeValues2["None"] = "none";
  OutputShapeValues2["Connection"] = "conn";
  return OutputShapeValues2;
})(OutputShapeValues || {});
const OutputShapeValuesArray = [
  "none" /* None */,
  "conn" /* Connection */
];
var VerticalAlignmentValues = /* @__PURE__ */ ((VerticalAlignmentValues2) => {
  VerticalAlignmentValues2["Top"] = "t";
  VerticalAlignmentValues2["Middle"] = "mid";
  VerticalAlignmentValues2["Bottom"] = "b";
  VerticalAlignmentValues2["None"] = "none";
  VerticalAlignmentValues2["Top2010"] = "top";
  VerticalAlignmentValues2["Middle2010"] = "center";
  VerticalAlignmentValues2["Bottom2010"] = "bottom";
  return VerticalAlignmentValues2;
})(VerticalAlignmentValues || {});
const VerticalAlignmentValuesArray = [
  "t" /* Top */,
  "mid" /* Middle */,
  "b" /* Bottom */,
  "none" /* None */,
  "top" /* Top2010 */,
  "center" /* Middle2010 */,
  "bottom" /* Bottom2010 */
];
class DiagramDefinitionExtensionList extends OxmlCompositeElement {
  static _Q = "dgm:extLst";
}
class SampleDataType extends OxmlCompositeElement {
  static _A = [":useDef"];
  /** Use Default. Serialized as `:useDef` */
  get useDefault() {
    return this._g(":useDef");
  }
  set useDefault(v) {
    this._s(":useDef", v);
  }
  /** Data Model. */
  get dataModel() {
    return this._f(DataModel);
  }
}
class ColorData extends SampleDataType {
  static _Q = "dgm:clrData";
}
class StyleData extends SampleDataType {
  static _Q = "dgm:styleData";
}
class SampleData extends SampleDataType {
  static _Q = "dgm:sampData";
}
class DiagramDefinitionExtension extends OxmlCompositeElement {
  static _Q = "dgm:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns Dgm1611NumberDiagramInfoList. */
  get numberDiagramInfoList() {
    return this._f(Dgm1611NumberDiagramInfoList);
  }
  /** Returns Dgm1612TextListStyleType. */
  get textListStyleType() {
    return this._f(Dgm1612TextListStyleType);
  }
}
class PtExtensionList extends OxmlCompositeElement {
  static _Q = "dgm:extLst";
}
class TextBody extends OxmlCompositeElement {
  static _Q = "dgm:t";
  /** Body Properties. */
  get bodyProperties() {
    return this._f(ABodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(AListStyle);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "dgm:spPr";
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
class PropertySet extends OxmlCompositeElement {
  static _Q = "dgm:prSet";
  static _A = [":presAssocID", ":presName", ":presStyleLbl", ":presStyleIdx", ":presStyleCnt", ":loTypeId", ":loCatId", ":qsTypeId", ":qsCatId", ":csTypeId", ":csCatId", ":coherent3DOff", ":phldrT", ":phldr", ":custAng", ":custFlipVert", ":custFlipHor", ":custSzX", ":custSzY", ":custScaleX", ":custScaleY", ":custT", ":custLinFactX", ":custLinFactY", ":custLinFactNeighborX", ":custLinFactNeighborY", ":custRadScaleRad", ":custRadScaleInc"];
  /** Presentation Element Identifier. Serialized as `:presAssocID` */
  get presentationElementId() {
    return this._g(":presAssocID");
  }
  set presentationElementId(v) {
    this._s(":presAssocID", v);
  }
  /** Presentation Name. Serialized as `:presName` */
  get presentationName() {
    return this._g(":presName");
  }
  set presentationName(v) {
    this._s(":presName", v);
  }
  /** Presentation Style Label. Serialized as `:presStyleLbl` */
  get presentationStyleLabel() {
    return this._g(":presStyleLbl");
  }
  set presentationStyleLabel(v) {
    this._s(":presStyleLbl", v);
  }
  /** Presentation Style Index. Serialized as `:presStyleIdx` */
  get presentationStyleIndex() {
    return this._g(":presStyleIdx");
  }
  set presentationStyleIndex(v) {
    this._s(":presStyleIdx", v);
  }
  /** Presentation Style Count. Serialized as `:presStyleCnt` */
  get presentationStyleCount() {
    return this._g(":presStyleCnt");
  }
  set presentationStyleCount(v) {
    this._s(":presStyleCnt", v);
  }
  /** Current Diagram Type. Serialized as `:loTypeId` */
  get layoutTypeId() {
    return this._g(":loTypeId");
  }
  set layoutTypeId(v) {
    this._s(":loTypeId", v);
  }
  /** Current Diagram Category. Serialized as `:loCatId` */
  get layoutCategoryId() {
    return this._g(":loCatId");
  }
  set layoutCategoryId(v) {
    this._s(":loCatId", v);
  }
  /** Current Style Type. Serialized as `:qsTypeId` */
  get quickStyleTypeId() {
    return this._g(":qsTypeId");
  }
  set quickStyleTypeId(v) {
    this._s(":qsTypeId", v);
  }
  /** Current Style Category. Serialized as `:qsCatId` */
  get quickStyleCategoryId() {
    return this._g(":qsCatId");
  }
  set quickStyleCategoryId(v) {
    this._s(":qsCatId", v);
  }
  /** Color Transform Type Identifier. Serialized as `:csTypeId` */
  get colorType() {
    return this._g(":csTypeId");
  }
  set colorType(v) {
    this._s(":csTypeId", v);
  }
  /** Color Transform Category. Serialized as `:csCatId` */
  get colorCategoryId() {
    return this._g(":csCatId");
  }
  set colorCategoryId(v) {
    this._s(":csCatId", v);
  }
  /** Coherent 3D Behavior. Serialized as `:coherent3DOff` */
  get coherent3D() {
    return this._g(":coherent3DOff");
  }
  set coherent3D(v) {
    this._s(":coherent3DOff", v);
  }
  /** Placeholder Text. Serialized as `:phldrT` */
  get placeholderText() {
    return this._g(":phldrT");
  }
  set placeholderText(v) {
    this._s(":phldrT", v);
  }
  /** Placeholder. Serialized as `:phldr` */
  get placeholder() {
    return this._g(":phldr");
  }
  set placeholder(v) {
    this._s(":phldr", v);
  }
  /** Custom Rotation. Serialized as `:custAng` */
  get rotation() {
    return this._g(":custAng");
  }
  set rotation(v) {
    this._s(":custAng", v);
  }
  /** Custom Vertical Flip. Serialized as `:custFlipVert` */
  get verticalFlip() {
    return this._g(":custFlipVert");
  }
  set verticalFlip(v) {
    this._s(":custFlipVert", v);
  }
  /** Custom Horizontal Flip. Serialized as `:custFlipHor` */
  get horizontalFlip() {
    return this._g(":custFlipHor");
  }
  set horizontalFlip(v) {
    this._s(":custFlipHor", v);
  }
  /** Fixed Width Override. Serialized as `:custSzX` */
  get fixedWidthOverride() {
    return this._g(":custSzX");
  }
  set fixedWidthOverride(v) {
    this._s(":custSzX", v);
  }
  /** Fixed Height Override. Serialized as `:custSzY` */
  get fixedHeightOverride() {
    return this._g(":custSzY");
  }
  set fixedHeightOverride(v) {
    this._s(":custSzY", v);
  }
  /** Width Scale. Serialized as `:custScaleX` */
  get widthScale() {
    return this._g(":custScaleX");
  }
  set widthScale(v) {
    this._s(":custScaleX", v);
  }
  /** Height Scale. Serialized as `:custScaleY` */
  get hightScale() {
    return this._g(":custScaleY");
  }
  set hightScale(v) {
    this._s(":custScaleY", v);
  }
  /** Text Changed. Serialized as `:custT` */
  get textChanged() {
    return this._g(":custT");
  }
  set textChanged(v) {
    this._s(":custT", v);
  }
  /** Custom Factor Width. Serialized as `:custLinFactX` */
  get factorWidth() {
    return this._g(":custLinFactX");
  }
  set factorWidth(v) {
    this._s(":custLinFactX", v);
  }
  /** Custom Factor Height. Serialized as `:custLinFactY` */
  get factorHeight() {
    return this._g(":custLinFactY");
  }
  set factorHeight(v) {
    this._s(":custLinFactY", v);
  }
  /** Neighbor Offset Width. Serialized as `:custLinFactNeighborX` */
  get neighborOffsetWidth() {
    return this._g(":custLinFactNeighborX");
  }
  set neighborOffsetWidth(v) {
    this._s(":custLinFactNeighborX", v);
  }
  /** Neighbor Offset Height. Serialized as `:custLinFactNeighborY` */
  get neighborOffsetHeight() {
    return this._g(":custLinFactNeighborY");
  }
  set neighborOffsetHeight(v) {
    this._s(":custLinFactNeighborY", v);
  }
  /** Radius Scale. Serialized as `:custRadScaleRad` */
  get radiusScale() {
    return this._g(":custRadScaleRad");
  }
  set radiusScale(v) {
    this._s(":custRadScaleRad", v);
  }
  /** Include Angle Scale. Serialized as `:custRadScaleInc` */
  get includeAngleScale() {
    return this._g(":custRadScaleInc");
  }
  set includeAngleScale(v) {
    this._s(":custRadScaleInc", v);
  }
  /** Presentation Layout Variables. */
  get presentationLayoutVariables() {
    return this._f(PresentationLayoutVariables);
  }
  /** Shape Style. */
  get style() {
    return this._f(Style);
  }
}
class DataModelExtensionList extends OxmlCompositeElement {
  static _Q = "dgm:extLst";
}
class Whole extends OxmlCompositeElement {
  static _Q = "dgm:whole";
  /** Outline. */
  get outline() {
    return this._f(AOutline);
  }
}
class Background extends OxmlCompositeElement {
  static _Q = "dgm:bg";
}
class ConnectionList extends OxmlCompositeElement {
  static _Q = "dgm:cxnLst";
}
class PointList extends OxmlCompositeElement {
  static _Q = "dgm:ptLst";
}
class StyleLabel extends OxmlCompositeElement {
  static _Q = "dgm:styleLbl";
  static _A = [":name"];
  /** Style Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** 3-D Scene. */
  get scene3D() {
    return this._f(Scene3D);
  }
  /** 3-D Shape Properties. */
  get shape3D() {
    return this._f(Shape3D);
  }
  /** Text Properties. */
  get textProperties() {
    return this._f(TextProperties);
  }
  /** Shape Style. */
  get style() {
    return this._f(Style);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class StyleDisplayCategories extends OxmlCompositeElement {
  static _Q = "dgm:catLst";
}
class StyleLabelDescription extends OxmlLeafElement {
  static _Q = "dgm:desc";
  static _A = [":lang", ":val"];
  /** Natural Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Description Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class StyleDefinitionTitle extends OxmlLeafElement {
  static _Q = "dgm:title";
  static _A = [":lang", ":val"];
  /** Natural Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Description Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TextProperties extends OxmlCompositeElement {
  static _Q = "dgm:txPr";
  /** Apply 3D shape properties. */
  get shape3DType() {
    return this._f(AShape3DType);
  }
  /** No text in 3D scene. */
  get flatText() {
    return this._f(AFlatText);
  }
}
class Shape3D extends OxmlCompositeElement {
  static _Q = "dgm:sp3d";
  static _A = [":z", ":extrusionH", ":contourW", ":prstMaterial"];
  /** Shape Depth. Serialized as `:z` */
  get z() {
    return this._g(":z");
  }
  set z(v) {
    this._s(":z", v);
  }
  /** Extrusion Height. Serialized as `:extrusionH` */
  get extrusionHeight() {
    return this._g(":extrusionH");
  }
  set extrusionHeight(v) {
    this._s(":extrusionH", v);
  }
  /** Contour Width. Serialized as `:contourW` */
  get contourWidth() {
    return this._g(":contourW");
  }
  set contourWidth(v) {
    this._s(":contourW", v);
  }
  /** Preset Material Type. Serialized as `:prstMaterial` */
  get presetMaterial() {
    return this._g(":prstMaterial");
  }
  set presetMaterial(v) {
    this._s(":prstMaterial", v);
  }
  /** Top Bevel. */
  get bevelTop() {
    return this._f(ABevelTop);
  }
  /** Bottom Bevel. */
  get bevelBottom() {
    return this._f(ABevelBottom);
  }
  /** Extrusion Color. */
  get extrusionColor() {
    return this._f(AExtrusionColor);
  }
  /** Contour Color. */
  get contourColor() {
    return this._f(AContourColor);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class Scene3D extends OxmlCompositeElement {
  static _Q = "dgm:scene3d";
  /** Camera. */
  get camera() {
    return this._f(ACamera);
  }
  /** Light Rig. */
  get lightRig() {
    return this._f(ALightRig);
  }
  /** Backdrop Plane. */
  get backdrop() {
    return this._f(ABackdrop);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class StyleDisplayCategory extends OxmlLeafElement {
  static _Q = "dgm:cat";
  static _A = [":type", ":pri"];
  /** Category Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Priority. Serialized as `:pri` */
  get priority() {
    return this._g(":pri");
  }
  set priority(v) {
    this._s(":pri", v);
  }
}
class ResizeHandles extends OxmlLeafElement {
  static _Q = "dgm:resizeHandles";
  static _A = [":val"];
  /** Shape Resize Style Type. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class AnimationLevel extends OxmlLeafElement {
  static _Q = "dgm:animLvl";
  static _A = [":val"];
  /** Level Animation Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class AnimateOneByOne extends OxmlLeafElement {
  static _Q = "dgm:animOne";
  static _A = [":val"];
  /** One By One Animation Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class HierarchyBranch extends OxmlLeafElement {
  static _Q = "dgm:hierBranch";
  static _A = [":val"];
  /** Organization Chart Branch Style Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Direction extends OxmlLeafElement {
  static _Q = "dgm:dir";
  static _A = [":val"];
  /** Diagram Direction Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BulletEnabled extends OxmlLeafElement {
  static _Q = "dgm:bulletEnabled";
  static _A = [":val"];
  /** Show Insert Bullet Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PreferredNumberOfChildren extends OxmlLeafElement {
  static _Q = "dgm:chPref";
  static _A = [":val"];
  /** Preferred Number of CHildren Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class MaxNumberOfChildren extends OxmlLeafElement {
  static _Q = "dgm:chMax";
  static _A = [":val"];
  /** Maximum Children Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class OrganizationChart extends OxmlLeafElement {
  static _Q = "dgm:orgChart";
  static _A = [":val"];
  /** Show Organization Chart User Interface Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Style extends OxmlCompositeElement {
  static _Q = "dgm:style";
  /** Returns ALineReference. */
  get lineReference() {
    return this._f(ALineReference);
  }
  /** Returns AFillReference. */
  get fillReference() {
    return this._f(AFillReference);
  }
  /** Returns AEffectReference. */
  get effectReference() {
    return this._f(AEffectReference);
  }
  /** Font Reference. */
  get fontReference() {
    return this._f(AFontReference);
  }
}
class CategoryList extends OxmlCompositeElement {
  static _Q = "dgm:catLst";
}
class Description extends OxmlLeafElement {
  static _Q = "dgm:desc";
  static _A = [":lang", ":val"];
  /** Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Title extends OxmlLeafElement {
  static _Q = "dgm:title";
  static _A = [":lang", ":val"];
  /** Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Category extends OxmlLeafElement {
  static _Q = "dgm:cat";
  static _A = [":type", ":pri"];
  /** Category Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Priority. Serialized as `:pri` */
  get priority() {
    return this._g(":pri");
  }
  set priority(v) {
    this._s(":pri", v);
  }
}
class DataModel extends OxmlCompositeElement {
  static _Q = "dgm:dataModel";
  /** Point List. */
  get pointList() {
    return this._f(PointList);
  }
  /** Connection List. */
  get connectionList() {
    return this._f(ConnectionList);
  }
  /** Background Formatting. */
  get background() {
    return this._f(Background);
  }
  /** Whole E2O Formatting. */
  get whole() {
    return this._f(Whole);
  }
  /** Returns DataModelExtensionList. */
  get dataModelExtensionList() {
    return this._f(DataModelExtensionList);
  }
}
class DiagramChooseElse extends OxmlCompositeElement {
  static _Q = "dgm:else";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class DiagramChooseIf extends OxmlCompositeElement {
  static _Q = "dgm:if";
  static _A = [":name", ":axis", ":ptType", ":hideLastTrans", ":st", ":cnt", ":step", ":func", ":arg", ":op", ":val"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Axis. Serialized as `:axis` */
  get axis() {
    return this._g(":axis");
  }
  set axis(v) {
    this._s(":axis", v);
  }
  /** Data Point Type. Serialized as `:ptType` */
  get pointType() {
    return this._g(":ptType");
  }
  set pointType(v) {
    this._s(":ptType", v);
  }
  /** Hide Last Transition. Serialized as `:hideLastTrans` */
  get hideLastTrans() {
    return this._g(":hideLastTrans");
  }
  set hideLastTrans(v) {
    this._s(":hideLastTrans", v);
  }
  /** Start. Serialized as `:st` */
  get start() {
    return this._g(":st");
  }
  set start(v) {
    this._s(":st", v);
  }
  /** Count. Serialized as `:cnt` */
  get count() {
    return this._g(":cnt");
  }
  set count(v) {
    this._s(":cnt", v);
  }
  /** Step. Serialized as `:step` */
  get step() {
    return this._g(":step");
  }
  set step(v) {
    this._s(":step", v);
  }
  /** Function. Serialized as `:func` */
  get function() {
    return this._g(":func");
  }
  set function(v) {
    this._s(":func", v);
  }
  /** Argument. Serialized as `:arg` */
  get argument() {
    return this._g(":arg");
  }
  set argument(v) {
    this._s(":arg", v);
  }
  /** Operator. Serialized as `:op` */
  get operator() {
    return this._g(":op");
  }
  set operator(v) {
    this._s(":op", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Choose extends OxmlCompositeElement {
  static _Q = "dgm:choose";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class LayoutNode extends OxmlCompositeElement {
  static _Q = "dgm:layoutNode";
  static _A = [":name", ":styleLbl", ":chOrder", ":moveWith"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Style Label. Serialized as `:styleLbl` */
  get styleLabel() {
    return this._g(":styleLbl");
  }
  set styleLabel(v) {
    this._s(":styleLbl", v);
  }
  /** Child Order. Serialized as `:chOrder` */
  get childOrder() {
    return this._g(":chOrder");
  }
  set childOrder(v) {
    this._s(":chOrder", v);
  }
  /** Move With. Serialized as `:moveWith` */
  get moveWith() {
    return this._g(":moveWith");
  }
  set moveWith(v) {
    this._s(":moveWith", v);
  }
}
class ForEach extends OxmlCompositeElement {
  static _Q = "dgm:forEach";
  static _A = [":name", ":ref", ":axis", ":ptType", ":hideLastTrans", ":st", ":cnt", ":step"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
  /** Axis. Serialized as `:axis` */
  get axis() {
    return this._g(":axis");
  }
  set axis(v) {
    this._s(":axis", v);
  }
  /** Data Point Type. Serialized as `:ptType` */
  get pointType() {
    return this._g(":ptType");
  }
  set pointType(v) {
    this._s(":ptType", v);
  }
  /** Hide Last Transition. Serialized as `:hideLastTrans` */
  get hideLastTrans() {
    return this._g(":hideLastTrans");
  }
  set hideLastTrans(v) {
    this._s(":hideLastTrans", v);
  }
  /** Start. Serialized as `:st` */
  get start() {
    return this._g(":st");
  }
  set start(v) {
    this._s(":st", v);
  }
  /** Count. Serialized as `:cnt` */
  get count() {
    return this._g(":cnt");
  }
  set count(v) {
    this._s(":cnt", v);
  }
  /** Step. Serialized as `:step` */
  get step() {
    return this._g(":step");
  }
  set step(v) {
    this._s(":step", v);
  }
}
class LayoutVariablePropertySetType extends OxmlCompositeElement {
  /** Show Organization Chart User Interface. */
  get organizationChart() {
    return this._f(OrganizationChart);
  }
  /** Maximum Children. */
  get maxNumberOfChildren() {
    return this._f(MaxNumberOfChildren);
  }
  /** Preferred Number of Children. */
  get preferredNumberOfChildren() {
    return this._f(PreferredNumberOfChildren);
  }
  /** Show Insert Bullet. */
  get bulletEnabled() {
    return this._f(BulletEnabled);
  }
  /** Diagram Direction. */
  get direction() {
    return this._f(Direction);
  }
  /** Organization Chart Branch Style. */
  get hierarchyBranch() {
    return this._f(HierarchyBranch);
  }
  /** One by One Animation String. */
  get animateOneByOne() {
    return this._f(AnimateOneByOne);
  }
  /** Level Animation. */
  get animationLevel() {
    return this._f(AnimationLevel);
  }
  /** Shape Resize Style. */
  get resizeHandles() {
    return this._f(ResizeHandles);
  }
}
class PresentationLayoutVariables extends LayoutVariablePropertySetType {
  static _Q = "dgm:presLayoutVars";
}
class VariableList extends LayoutVariablePropertySetType {
  static _Q = "dgm:varLst";
}
class RuleList extends OxmlCompositeElement {
  static _Q = "dgm:ruleLst";
}
class Constraints extends OxmlCompositeElement {
  static _Q = "dgm:constrLst";
}
class PresentationOf extends OxmlCompositeElement {
  static _Q = "dgm:presOf";
  static _A = [":axis", ":ptType", ":hideLastTrans", ":st", ":cnt", ":step"];
  /** Axis. Serialized as `:axis` */
  get axis() {
    return this._g(":axis");
  }
  set axis(v) {
    this._s(":axis", v);
  }
  /** Data Point Type. Serialized as `:ptType` */
  get pointType() {
    return this._g(":ptType");
  }
  set pointType(v) {
    this._s(":ptType", v);
  }
  /** Hide Last Transition. Serialized as `:hideLastTrans` */
  get hideLastTrans() {
    return this._g(":hideLastTrans");
  }
  set hideLastTrans(v) {
    this._s(":hideLastTrans", v);
  }
  /** Start. Serialized as `:st` */
  get start() {
    return this._g(":st");
  }
  set start(v) {
    this._s(":st", v);
  }
  /** Count. Serialized as `:cnt` */
  get count() {
    return this._g(":cnt");
  }
  set count(v) {
    this._s(":cnt", v);
  }
  /** Step. Serialized as `:step` */
  get step() {
    return this._g(":step");
  }
  set step(v) {
    this._s(":step", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Shape extends OxmlCompositeElement {
  static _Q = "dgm:shape";
  static _A = [":rot", ":type", "r:blip", ":zOrderOff", ":hideGeom", ":lkTxEntry", ":blipPhldr"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Shape Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Relationship to Image Part. Serialized as `r:blip` */
  get blip() {
    return this._g("r:blip");
  }
  set blip(v) {
    this._s("r:blip", v);
  }
  /** Z-Order Offset. Serialized as `:zOrderOff` */
  get zOrderOffset() {
    return this._g(":zOrderOff");
  }
  set zOrderOffset(v) {
    this._s(":zOrderOff", v);
  }
  /** Hide Geometry. Serialized as `:hideGeom` */
  get hideGeometry() {
    return this._g(":hideGeom");
  }
  set hideGeometry(v) {
    this._s(":hideGeom", v);
  }
  /** Prevent Text Editing. Serialized as `:lkTxEntry` */
  get lockedText() {
    return this._g(":lkTxEntry");
  }
  set lockedText(v) {
    this._s(":lkTxEntry", v);
  }
  /** Image Placeholder. Serialized as `:blipPhldr` */
  get blipPlaceholder() {
    return this._g(":blipPhldr");
  }
  set blipPlaceholder(v) {
    this._s(":blipPhldr", v);
  }
  /** Shape Adjust List. */
  get adjustList() {
    return this._f(AdjustList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Algorithm extends OxmlCompositeElement {
  static _Q = "dgm:alg";
  static _A = [":type", ":rev"];
  /** Algorithm Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Revision Number. Serialized as `:rev` */
  get revision() {
    return this._g(":rev");
  }
  set revision(v) {
    this._s(":rev", v);
  }
}
class Parameter extends OxmlLeafElement {
  static _Q = "dgm:param";
  static _A = [":type", ":val"];
  /** Parameter Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class AdjustList extends OxmlCompositeElement {
  static _Q = "dgm:adjLst";
}
class Adjust extends OxmlLeafElement {
  static _Q = "dgm:adj";
  static _A = [":idx", ":val"];
  /** Adjust Handle Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Rule extends OxmlCompositeElement {
  static _Q = "dgm:rule";
  static _A = [":type", ":for", ":forName", ":ptType", ":val", ":fact", ":max"];
  /** Constraint Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** For. Serialized as `:for` */
  get for() {
    return this._g(":for");
  }
  set for(v) {
    this._s(":for", v);
  }
  /** For Name. Serialized as `:forName` */
  get forName() {
    return this._g(":forName");
  }
  set forName(v) {
    this._s(":forName", v);
  }
  /** Data Point Type. Serialized as `:ptType` */
  get pointType() {
    return this._g(":ptType");
  }
  set pointType(v) {
    this._s(":ptType", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Factor. Serialized as `:fact` */
  get fact() {
    return this._g(":fact");
  }
  set fact(v) {
    this._s(":fact", v);
  }
  /** Max Value. Serialized as `:max` */
  get max() {
    return this._g(":max");
  }
  set max(v) {
    this._s(":max", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Constraint extends OxmlCompositeElement {
  static _Q = "dgm:constr";
  static _A = [":type", ":for", ":forName", ":ptType", ":refType", ":refFor", ":refForName", ":refPtType", ":op", ":val", ":fact"];
  /** Constraint Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** For. Serialized as `:for` */
  get for() {
    return this._g(":for");
  }
  set for(v) {
    this._s(":for", v);
  }
  /** For Name. Serialized as `:forName` */
  get forName() {
    return this._g(":forName");
  }
  set forName(v) {
    this._s(":forName", v);
  }
  /** Data Point Type. Serialized as `:ptType` */
  get pointType() {
    return this._g(":ptType");
  }
  set pointType(v) {
    this._s(":ptType", v);
  }
  /** Reference Type. Serialized as `:refType` */
  get referenceType() {
    return this._g(":refType");
  }
  set referenceType(v) {
    this._s(":refType", v);
  }
  /** Reference For. Serialized as `:refFor` */
  get referenceFor() {
    return this._g(":refFor");
  }
  set referenceFor(v) {
    this._s(":refFor", v);
  }
  /** Reference For Name. Serialized as `:refForName` */
  get referenceForName() {
    return this._g(":refForName");
  }
  set referenceForName(v) {
    this._s(":refForName", v);
  }
  /** Reference Point Type. Serialized as `:refPtType` */
  get referencePointType() {
    return this._g(":refPtType");
  }
  set referencePointType(v) {
    this._s(":refPtType", v);
  }
  /** Operator. Serialized as `:op` */
  get operator() {
    return this._g(":op");
  }
  set operator(v) {
    this._s(":op", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Factor. Serialized as `:fact` */
  get fact() {
    return this._g(":fact");
  }
  set fact(v) {
    this._s(":fact", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Connection extends OxmlCompositeElement {
  static _Q = "dgm:cxn";
  static _A = [":modelId", ":type", ":srcId", ":destId", ":srcOrd", ":destOrd", ":parTransId", ":sibTransId", ":presId"];
  /** Model Identifier. Serialized as `:modelId` */
  get modelId() {
    return this._g(":modelId");
  }
  set modelId(v) {
    this._s(":modelId", v);
  }
  /** Point Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Source Identifier. Serialized as `:srcId` */
  get sourceId() {
    return this._g(":srcId");
  }
  set sourceId(v) {
    this._s(":srcId", v);
  }
  /** Destination Identifier. Serialized as `:destId` */
  get destinationId() {
    return this._g(":destId");
  }
  set destinationId(v) {
    this._s(":destId", v);
  }
  /** Source Position. Serialized as `:srcOrd` */
  get sourcePosition() {
    return this._g(":srcOrd");
  }
  set sourcePosition(v) {
    this._s(":srcOrd", v);
  }
  /** Destination Position. Serialized as `:destOrd` */
  get destinationPosition() {
    return this._g(":destOrd");
  }
  set destinationPosition(v) {
    this._s(":destOrd", v);
  }
  /** Parent Transition Identifier. Serialized as `:parTransId` */
  get parentTransitionId() {
    return this._g(":parTransId");
  }
  set parentTransitionId(v) {
    this._s(":parTransId", v);
  }
  /** Sibling Transition Identifier. Serialized as `:sibTransId` */
  get siblingTransitionId() {
    return this._g(":sibTransId");
  }
  set siblingTransitionId(v) {
    this._s(":sibTransId", v);
  }
  /** Presentation Identifier. Serialized as `:presId` */
  get presentationId() {
    return this._g(":presId");
  }
  set presentationId(v) {
    this._s(":presId", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Point extends OxmlCompositeElement {
  static _Q = "dgm:pt";
  static _A = [":modelId", ":type", ":cxnId"];
  /** Model Identifier. Serialized as `:modelId` */
  get modelId() {
    return this._g(":modelId");
  }
  set modelId(v) {
    this._s(":modelId", v);
  }
  /** Point Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Connection Identifier. Serialized as `:cxnId` */
  get connectionId() {
    return this._g(":cxnId");
  }
  set connectionId(v) {
    this._s(":cxnId", v);
  }
  /** Property Set. */
  get propertySet() {
    return this._f(PropertySet);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Text Body. */
  get textBody() {
    return this._f(TextBody);
  }
  /** Returns PtExtensionList. */
  get ptExtensionList() {
    return this._f(PtExtensionList);
  }
}
class ColorTransformStyleLabel extends OxmlCompositeElement {
  static _Q = "dgm:styleLbl";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Fill Color List. */
  get fillColorList() {
    return this._f(FillColorList);
  }
  /** Line Color List. */
  get lineColorList() {
    return this._f(LineColorList);
  }
  /** Effect Color List. */
  get effectColorList() {
    return this._f(EffectColorList);
  }
  /** Text Line Color List. */
  get textLineColorList() {
    return this._f(TextLineColorList);
  }
  /** Text Fill Color List. */
  get textFillColorList() {
    return this._f(TextFillColorList);
  }
  /** Text Effect Color List. */
  get textEffectColorList() {
    return this._f(TextEffectColorList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ColorTransformCategories extends OxmlCompositeElement {
  static _Q = "dgm:catLst";
}
class ColorTransformDescription extends OxmlLeafElement {
  static _Q = "dgm:desc";
  static _A = [":lang", ":val"];
  /** Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Description Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ColorDefinitionTitle extends OxmlLeafElement {
  static _Q = "dgm:title";
  static _A = [":lang", ":val"];
  /** Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Description Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "dgm:extLst";
}
class ColorsType extends OxmlCompositeElement {
  static _A = [":meth", ":hueDir"];
  /** Color Application Method Type. Serialized as `:meth` */
  get method() {
    return this._g(":meth");
  }
  set method(v) {
    this._s(":meth", v);
  }
  /** Hue Direction. Serialized as `:hueDir` */
  get hueDirection() {
    return this._g(":hueDir");
  }
  set hueDirection(v) {
    this._s(":hueDir", v);
  }
}
class TextEffectColorList extends ColorsType {
  static _Q = "dgm:txEffectClrLst";
}
class TextFillColorList extends ColorsType {
  static _Q = "dgm:txFillClrLst";
}
class TextLineColorList extends ColorsType {
  static _Q = "dgm:txLinClrLst";
}
class EffectColorList extends ColorsType {
  static _Q = "dgm:effectClrLst";
}
class LineColorList extends ColorsType {
  static _Q = "dgm:linClrLst";
}
class FillColorList extends ColorsType {
  static _Q = "dgm:fillClrLst";
}
class ColorTransformCategory extends OxmlLeafElement {
  static _Q = "dgm:cat";
  static _A = [":type", ":pri"];
  /** Category Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Priority. Serialized as `:pri` */
  get priority() {
    return this._g(":pri");
  }
  set priority(v) {
    this._s(":pri", v);
  }
}
class StyleDefinitionHeaderList extends OxmlCompositeElement {
  static _Q = "dgm:styleDefHdrLst";
}
class StyleDefinitionHeader extends OxmlCompositeElement {
  static _Q = "dgm:styleDefHdr";
  static _A = [":uniqueId", ":minVer", ":resId"];
  /** Unique Style ID. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** Minimum Version. Serialized as `:minVer` */
  get minVersion() {
    return this._g(":minVer");
  }
  set minVersion(v) {
    this._s(":minVer", v);
  }
  /** Resource ID. Serialized as `:resId` */
  get resourceId() {
    return this._g(":resId");
  }
  set resourceId(v) {
    this._s(":resId", v);
  }
}
class StyleDefinition extends OxmlPartRootElement {
  static _Q = "dgm:styleDef";
  static _A = [":uniqueId", ":minVer"];
  /** Unique Style ID. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** Minimum Version. Serialized as `:minVer` */
  get minVersion() {
    return this._g(":minVer");
  }
  set minVersion(v) {
    this._s(":minVer", v);
  }
}
class RelationshipIds extends OxmlLeafElement {
  static _Q = "dgm:relIds";
  static _A = ["r:dm", "r:lo", "r:qs", "r:cs"];
  /** Explicit Relationship to Diagram Data Part. Serialized as `r:dm` */
  get dataPart() {
    return this._g("r:dm");
  }
  set dataPart(v) {
    this._s("r:dm", v);
  }
  /** Explicit Relationship to Diagram Layout Definition Part. Serialized as `r:lo` */
  get layoutPart() {
    return this._g("r:lo");
  }
  set layoutPart(v) {
    this._s("r:lo", v);
  }
  /** Explicit Relationship to Style Definition Part. Serialized as `r:qs` */
  get stylePart() {
    return this._g("r:qs");
  }
  set stylePart(v) {
    this._s("r:qs", v);
  }
  /** Explicit Relationship to Diagram Colors Part. Serialized as `r:cs` */
  get colorPart() {
    return this._g("r:cs");
  }
  set colorPart(v) {
    this._s("r:cs", v);
  }
}
class LayoutDefinitionHeaderList extends OxmlCompositeElement {
  static _Q = "dgm:layoutDefHdrLst";
}
class LayoutDefinitionHeader extends OxmlCompositeElement {
  static _Q = "dgm:layoutDefHdr";
  static _A = [":uniqueId", ":minVer", ":defStyle", ":resId"];
  /** Unique Identifier. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** Minimum Version. Serialized as `:minVer` */
  get minVersion() {
    return this._g(":minVer");
  }
  set minVersion(v) {
    this._s(":minVer", v);
  }
  /** Default Style. Serialized as `:defStyle` */
  get defaultStyle() {
    return this._g(":defStyle");
  }
  set defaultStyle(v) {
    this._s(":defStyle", v);
  }
  /** Resource Identifier. Serialized as `:resId` */
  get resourceId() {
    return this._g(":resId");
  }
  set resourceId(v) {
    this._s(":resId", v);
  }
}
class LayoutDefinition extends OxmlPartRootElement {
  static _Q = "dgm:layoutDef";
  static _A = [":uniqueId", ":minVer", ":defStyle"];
  /** uniqueId. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** minVer. Serialized as `:minVer` */
  get minVersion() {
    return this._g(":minVer");
  }
  set minVersion(v) {
    this._s(":minVer", v);
  }
  /** defStyle. Serialized as `:defStyle` */
  get defaultStyle() {
    return this._g(":defStyle");
  }
  set defaultStyle(v) {
    this._s(":defStyle", v);
  }
}
class DataModelRoot extends OxmlPartRootElement {
  static _Q = "dgm:dataModel";
  /** Point List. */
  get pointList() {
    return this._f(PointList);
  }
  /** Connection List. */
  get connectionList() {
    return this._f(ConnectionList);
  }
  /** Background Formatting. */
  get background() {
    return this._f(Background);
  }
  /** Whole E2O Formatting. */
  get whole() {
    return this._f(Whole);
  }
  /** Returns DataModelExtensionList. */
  get dataModelExtensionList() {
    return this._f(DataModelExtensionList);
  }
}
class ColorsDefinitionHeaderList extends OxmlCompositeElement {
  static _Q = "dgm:colorsDefHdrLst";
}
class ColorsDefinitionHeader extends OxmlCompositeElement {
  static _Q = "dgm:colorsDefHdr";
  static _A = [":uniqueId", ":minVer", ":resId"];
  /** Unique ID. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** Minimum Version. Serialized as `:minVer` */
  get minVersion() {
    return this._g(":minVer");
  }
  set minVersion(v) {
    this._s(":minVer", v);
  }
  /** Resource ID. Serialized as `:resId` */
  get resourceId() {
    return this._g(":resId");
  }
  set resourceId(v) {
    this._s(":resId", v);
  }
}
class ColorsDefinition extends OxmlPartRootElement {
  static _Q = "dgm:colorsDef";
  static _A = [":uniqueId", ":minVer"];
  /** Unique ID. Serialized as `:uniqueId` */
  get uniqueId() {
    return this._g(":uniqueId");
  }
  set uniqueId(v) {
    this._s(":uniqueId", v);
  }
  /** Minimum Version. Serialized as `:minVer` */
  get minVersion() {
    return this._g(":minVer");
  }
  set minVersion(v) {
    this._s(":minVer", v);
  }
}
function initDrawingDiagramsNamespace() {
  DiagramDefinitionExtensionList._C = {
    "dgm:ext": DiagramDefinitionExtension
  };
  SampleDataType._C = {
    "dgm:dataModel": DataModel
  };
  SampleDataType._D = {
    ":useDef": new OxmlAttr(":useDef", OxmlType.BooleanValue)
  };
  ColorData._C = {
    "dgm:dataModel": DataModel
  };
  StyleData._C = {
    "dgm:dataModel": DataModel
  };
  SampleData._C = {
    "dgm:dataModel": DataModel
  };
  DiagramDefinitionExtension._C = {
    "dgm1611:autoBuNodeInfoLst": Dgm1611NumberDiagramInfoList,
    "dgm1612:lstStyle": Dgm1612TextListStyleType
  };
  DiagramDefinitionExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PtExtensionList._C = {
    "a:ext": APtExtension
  };
  TextBody._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
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
  PropertySet._C = {
    "dgm:presLayoutVars": PresentationLayoutVariables,
    "dgm:style": Style
  };
  PropertySet._D = {
    ":presAssocID": new OxmlAttr(":presAssocID", OxmlType.StringValue),
    ":presName": new OxmlAttr(":presName", OxmlType.StringValue),
    ":presStyleLbl": new OxmlAttr(":presStyleLbl", OxmlType.StringValue),
    ":presStyleIdx": new OxmlAttr(":presStyleIdx", OxmlType.Int32Value),
    ":presStyleCnt": new OxmlAttr(":presStyleCnt", OxmlType.Int32Value),
    ":loTypeId": new OxmlAttr(":loTypeId", OxmlType.StringValue),
    ":loCatId": new OxmlAttr(":loCatId", OxmlType.StringValue),
    ":qsTypeId": new OxmlAttr(":qsTypeId", OxmlType.StringValue),
    ":qsCatId": new OxmlAttr(":qsCatId", OxmlType.StringValue),
    ":csTypeId": new OxmlAttr(":csTypeId", OxmlType.StringValue),
    ":csCatId": new OxmlAttr(":csCatId", OxmlType.StringValue),
    ":coherent3DOff": new OxmlAttr(":coherent3DOff", OxmlType.BooleanValue),
    ":phldrT": new OxmlAttr(":phldrT", OxmlType.StringValue),
    ":phldr": new OxmlAttr(":phldr", OxmlType.BooleanValue),
    ":custAng": new OxmlAttr(":custAng", OxmlType.Int32Value),
    ":custFlipVert": new OxmlAttr(":custFlipVert", OxmlType.BooleanValue),
    ":custFlipHor": new OxmlAttr(":custFlipHor", OxmlType.BooleanValue),
    ":custSzX": new OxmlAttr(":custSzX", OxmlType.Int32Value),
    ":custSzY": new OxmlAttr(":custSzY", OxmlType.Int32Value),
    ":custScaleX": new OxmlAttr(":custScaleX", OxmlType.Int32Value),
    ":custScaleY": new OxmlAttr(":custScaleY", OxmlType.Int32Value),
    ":custT": new OxmlAttr(":custT", OxmlType.BooleanValue),
    ":custLinFactX": new OxmlAttr(":custLinFactX", OxmlType.Int32Value),
    ":custLinFactY": new OxmlAttr(":custLinFactY", OxmlType.Int32Value),
    ":custLinFactNeighborX": new OxmlAttr(":custLinFactNeighborX", OxmlType.Int32Value),
    ":custLinFactNeighborY": new OxmlAttr(":custLinFactNeighborY", OxmlType.Int32Value),
    ":custRadScaleRad": new OxmlAttr(":custRadScaleRad", OxmlType.Int32Value),
    ":custRadScaleInc": new OxmlAttr(":custRadScaleInc", OxmlType.Int32Value)
  };
  DataModelExtensionList._C = {
    "a:ext": ADataModelExtension
  };
  Whole._C = {
    "a:ln": AOutline,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag
  };
  Background._C = {
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag
  };
  ConnectionList._C = {
    "dgm:cxn": Connection
  };
  PointList._C = {
    "dgm:pt": Point
  };
  StyleLabel._C = {
    "dgm:scene3d": Scene3D,
    "dgm:sp3d": Shape3D,
    "dgm:txPr": TextProperties,
    "dgm:style": Style,
    "dgm:extLst": ExtensionList
  };
  StyleLabel._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  StyleDisplayCategories._C = {
    "dgm:cat": StyleDisplayCategory
  };
  StyleLabelDescription._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  StyleDefinitionTitle._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  TextProperties._C = {
    "a:sp3d": AShape3DType,
    "a:flatTx": AFlatText
  };
  Shape3D._C = {
    "a:bevelT": ABevelTop,
    "a:bevelB": ABevelBottom,
    "a:extrusionClr": AExtrusionColor,
    "a:contourClr": AContourColor,
    "a:extLst": AExtensionList
  };
  Shape3D._D = {
    ":z": new OxmlAttr(":z", OxmlType.Int64Value),
    ":extrusionH": new OxmlAttr(":extrusionH", OxmlType.Int64Value),
    ":contourW": new OxmlAttr(":contourW", OxmlType.Int64Value),
    ":prstMaterial": new OxmlAttr(":prstMaterial", OxmlType.EnumValue, PresetMaterialTypeValuesArray)
  };
  Scene3D._C = {
    "a:camera": ACamera,
    "a:lightRig": ALightRig,
    "a:backdrop": ABackdrop,
    "a:extLst": AExtensionList
  };
  StyleDisplayCategory._D = {
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":pri": new OxmlAttr(":pri", OxmlType.UInt32Value)
  };
  ResizeHandles._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, ResizeHandlesStringValuesArray)
  };
  AnimationLevel._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, AnimationLevelStringValuesArray)
  };
  AnimateOneByOne._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, AnimateOneByOneValuesArray)
  };
  HierarchyBranch._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, HierarchyBranchStyleValuesArray)
  };
  Direction._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, DirectionValuesArray)
  };
  BulletEnabled._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  PreferredNumberOfChildren._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  MaxNumberOfChildren._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  OrganizationChart._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  Style._C = {
    "a:lnRef": ALineReference,
    "a:fillRef": AFillReference,
    "a:effectRef": AEffectReference,
    "a:fontRef": AFontReference
  };
  CategoryList._C = {
    "dgm:cat": Category
  };
  Description._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  Title._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  Category._D = {
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":pri": new OxmlAttr(":pri", OxmlType.UInt32Value)
  };
  DataModel._C = {
    "dgm:ptLst": PointList,
    "dgm:cxnLst": ConnectionList,
    "dgm:bg": Background,
    "dgm:whole": Whole,
    "dgm:extLst": DataModelExtensionList
  };
  DiagramChooseElse._C = {
    "dgm:alg": Algorithm,
    "dgm:shape": Shape,
    "dgm:presOf": PresentationOf,
    "dgm:constrLst": Constraints,
    "dgm:ruleLst": RuleList,
    "dgm:forEach": ForEach,
    "dgm:layoutNode": LayoutNode,
    "dgm:choose": Choose,
    "dgm:extLst": ExtensionList
  };
  DiagramChooseElse._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  DiagramChooseIf._C = {
    "dgm:alg": Algorithm,
    "dgm:shape": Shape,
    "dgm:presOf": PresentationOf,
    "dgm:constrLst": Constraints,
    "dgm:ruleLst": RuleList,
    "dgm:forEach": ForEach,
    "dgm:layoutNode": LayoutNode,
    "dgm:choose": Choose,
    "dgm:extLst": ExtensionList
  };
  DiagramChooseIf._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":axis": new OxmlAttr(":axis", OxmlType.EnumValue, AxisValuesArray),
    ":ptType": new OxmlAttr(":ptType", OxmlType.EnumValue, ElementValuesArray),
    ":hideLastTrans": new OxmlAttr(":hideLastTrans", OxmlType.ListValue),
    ":st": new OxmlAttr(":st", OxmlType.ListValue),
    ":cnt": new OxmlAttr(":cnt", OxmlType.ListValue),
    ":step": new OxmlAttr(":step", OxmlType.ListValue),
    ":func": new OxmlAttr(":func", OxmlType.EnumValue, FunctionValuesArray),
    ":arg": new OxmlAttr(":arg", OxmlType.StringValue),
    ":op": new OxmlAttr(":op", OxmlType.EnumValue, FunctionOperatorValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  Choose._C = {
    "dgm:if": DiagramChooseIf,
    "dgm:else": DiagramChooseElse
  };
  Choose._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  LayoutNode._C = {
    "dgm:alg": Algorithm,
    "dgm:shape": Shape,
    "dgm:presOf": PresentationOf,
    "dgm:constrLst": Constraints,
    "dgm:ruleLst": RuleList,
    "dgm:varLst": VariableList,
    "dgm:forEach": ForEach,
    "dgm:layoutNode": LayoutNode,
    "dgm:choose": Choose,
    "dgm:extLst": ExtensionList
  };
  LayoutNode._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":styleLbl": new OxmlAttr(":styleLbl", OxmlType.StringValue),
    ":chOrder": new OxmlAttr(":chOrder", OxmlType.EnumValue, ChildOrderValuesArray),
    ":moveWith": new OxmlAttr(":moveWith", OxmlType.StringValue)
  };
  ForEach._C = {
    "dgm:alg": Algorithm,
    "dgm:shape": Shape,
    "dgm:presOf": PresentationOf,
    "dgm:constrLst": Constraints,
    "dgm:ruleLst": RuleList,
    "dgm:forEach": ForEach,
    "dgm:layoutNode": LayoutNode,
    "dgm:choose": Choose,
    "dgm:extLst": ExtensionList
  };
  ForEach._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue),
    ":axis": new OxmlAttr(":axis", OxmlType.EnumValue, AxisValuesArray),
    ":ptType": new OxmlAttr(":ptType", OxmlType.EnumValue, ElementValuesArray),
    ":hideLastTrans": new OxmlAttr(":hideLastTrans", OxmlType.ListValue),
    ":st": new OxmlAttr(":st", OxmlType.ListValue),
    ":cnt": new OxmlAttr(":cnt", OxmlType.ListValue),
    ":step": new OxmlAttr(":step", OxmlType.ListValue)
  };
  LayoutVariablePropertySetType._C = {
    "dgm:orgChart": OrganizationChart,
    "dgm:chMax": MaxNumberOfChildren,
    "dgm:chPref": PreferredNumberOfChildren,
    "dgm:bulletEnabled": BulletEnabled,
    "dgm:dir": Direction,
    "dgm:hierBranch": HierarchyBranch,
    "dgm:animOne": AnimateOneByOne,
    "dgm:animLvl": AnimationLevel,
    "dgm:resizeHandles": ResizeHandles
  };
  PresentationLayoutVariables._C = {
    "dgm:orgChart": OrganizationChart,
    "dgm:chMax": MaxNumberOfChildren,
    "dgm:chPref": PreferredNumberOfChildren,
    "dgm:bulletEnabled": BulletEnabled,
    "dgm:dir": Direction,
    "dgm:hierBranch": HierarchyBranch,
    "dgm:animOne": AnimateOneByOne,
    "dgm:animLvl": AnimationLevel,
    "dgm:resizeHandles": ResizeHandles
  };
  VariableList._C = {
    "dgm:orgChart": OrganizationChart,
    "dgm:chMax": MaxNumberOfChildren,
    "dgm:chPref": PreferredNumberOfChildren,
    "dgm:bulletEnabled": BulletEnabled,
    "dgm:dir": Direction,
    "dgm:hierBranch": HierarchyBranch,
    "dgm:animOne": AnimateOneByOne,
    "dgm:animLvl": AnimationLevel,
    "dgm:resizeHandles": ResizeHandles
  };
  RuleList._C = {
    "dgm:rule": Rule
  };
  Constraints._C = {
    "dgm:constr": Constraint
  };
  PresentationOf._C = {
    "dgm:extLst": ExtensionList
  };
  PresentationOf._D = {
    ":axis": new OxmlAttr(":axis", OxmlType.EnumValue, AxisValuesArray),
    ":ptType": new OxmlAttr(":ptType", OxmlType.EnumValue, ElementValuesArray),
    ":hideLastTrans": new OxmlAttr(":hideLastTrans", OxmlType.ListValue),
    ":st": new OxmlAttr(":st", OxmlType.ListValue),
    ":cnt": new OxmlAttr(":cnt", OxmlType.ListValue),
    ":step": new OxmlAttr(":step", OxmlType.ListValue)
  };
  Shape._C = {
    "dgm:adjLst": AdjustList,
    "dgm:extLst": ExtensionList
  };
  Shape._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.DoubleValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    "r:blip": new OxmlAttr("r:blip", OxmlType.StringValue),
    ":zOrderOff": new OxmlAttr(":zOrderOff", OxmlType.Int32Value),
    ":hideGeom": new OxmlAttr(":hideGeom", OxmlType.BooleanValue),
    ":lkTxEntry": new OxmlAttr(":lkTxEntry", OxmlType.BooleanValue),
    ":blipPhldr": new OxmlAttr(":blipPhldr", OxmlType.BooleanValue)
  };
  Algorithm._C = {
    "dgm:param": Parameter,
    "dgm:extLst": ExtensionList
  };
  Algorithm._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, AlgorithmValuesArray),
    ":rev": new OxmlAttr(":rev", OxmlType.UInt32Value)
  };
  Parameter._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ParameterIdValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  AdjustList._C = {
    "dgm:adj": Adjust
  };
  Adjust._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue)
  };
  Rule._C = {
    "dgm:extLst": ExtensionList
  };
  Rule._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConstraintValuesArray),
    ":for": new OxmlAttr(":for", OxmlType.EnumValue, ConstraintRelationshipValuesArray),
    ":forName": new OxmlAttr(":forName", OxmlType.StringValue),
    ":ptType": new OxmlAttr(":ptType", OxmlType.EnumValue, ElementValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue),
    ":fact": new OxmlAttr(":fact", OxmlType.DoubleValue),
    ":max": new OxmlAttr(":max", OxmlType.DoubleValue)
  };
  Constraint._C = {
    "dgm:extLst": ExtensionList
  };
  Constraint._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConstraintValuesArray),
    ":for": new OxmlAttr(":for", OxmlType.EnumValue, ConstraintRelationshipValuesArray),
    ":forName": new OxmlAttr(":forName", OxmlType.StringValue),
    ":ptType": new OxmlAttr(":ptType", OxmlType.EnumValue, ElementValuesArray),
    ":refType": new OxmlAttr(":refType", OxmlType.EnumValue, ConstraintValuesArray),
    ":refFor": new OxmlAttr(":refFor", OxmlType.EnumValue, ConstraintRelationshipValuesArray),
    ":refForName": new OxmlAttr(":refForName", OxmlType.StringValue),
    ":refPtType": new OxmlAttr(":refPtType", OxmlType.EnumValue, ElementValuesArray),
    ":op": new OxmlAttr(":op", OxmlType.EnumValue, BoolOperatorValuesArray),
    ":val": new OxmlAttr(":val", OxmlType.DoubleValue),
    ":fact": new OxmlAttr(":fact", OxmlType.DoubleValue)
  };
  Connection._C = {
    "dgm:extLst": ExtensionList
  };
  Connection._D = {
    ":modelId": new OxmlAttr(":modelId", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ConnectionValuesArray),
    ":srcId": new OxmlAttr(":srcId", OxmlType.StringValue),
    ":destId": new OxmlAttr(":destId", OxmlType.StringValue),
    ":srcOrd": new OxmlAttr(":srcOrd", OxmlType.UInt32Value),
    ":destOrd": new OxmlAttr(":destOrd", OxmlType.UInt32Value),
    ":parTransId": new OxmlAttr(":parTransId", OxmlType.StringValue),
    ":sibTransId": new OxmlAttr(":sibTransId", OxmlType.StringValue),
    ":presId": new OxmlAttr(":presId", OxmlType.StringValue)
  };
  Point._C = {
    "dgm:prSet": PropertySet,
    "dgm:spPr": ShapeProperties,
    "dgm:t": TextBody,
    "dgm:extLst": PtExtensionList
  };
  Point._D = {
    ":modelId": new OxmlAttr(":modelId", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, PointValuesArray),
    ":cxnId": new OxmlAttr(":cxnId", OxmlType.StringValue)
  };
  ColorTransformStyleLabel._C = {
    "dgm:fillClrLst": FillColorList,
    "dgm:linClrLst": LineColorList,
    "dgm:effectClrLst": EffectColorList,
    "dgm:txLinClrLst": TextLineColorList,
    "dgm:txFillClrLst": TextFillColorList,
    "dgm:txEffectClrLst": TextEffectColorList,
    "dgm:extLst": ExtensionList
  };
  ColorTransformStyleLabel._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  ColorTransformCategories._C = {
    "dgm:cat": ColorTransformCategory
  };
  ColorTransformDescription._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ColorDefinitionTitle._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "a:ext": AExtension
  };
  ColorsType._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ColorsType._D = {
    ":meth": new OxmlAttr(":meth", OxmlType.EnumValue, ColorApplicationMethodValuesArray),
    ":hueDir": new OxmlAttr(":hueDir", OxmlType.EnumValue, HueDirectionValuesArray)
  };
  TextEffectColorList._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  TextFillColorList._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  TextLineColorList._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  EffectColorList._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  LineColorList._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  FillColorList._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ColorTransformCategory._D = {
    ":type": new OxmlAttr(":type", OxmlType.StringValue),
    ":pri": new OxmlAttr(":pri", OxmlType.UInt32Value)
  };
  StyleDefinitionHeaderList._C = {
    "dgm:styleDefHdr": StyleDefinitionHeader
  };
  StyleDefinitionHeader._C = {
    "dgm:title": StyleDefinitionTitle,
    "dgm:desc": StyleLabelDescription,
    "dgm:catLst": StyleDisplayCategories,
    "dgm:extLst": ExtensionList
  };
  StyleDefinitionHeader._D = {
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue),
    ":resId": new OxmlAttr(":resId", OxmlType.Int32Value)
  };
  StyleDefinition._C = {
    "dgm:title": StyleDefinitionTitle,
    "dgm:desc": StyleLabelDescription,
    "dgm:catLst": StyleDisplayCategories,
    "dgm:scene3d": Scene3D,
    "dgm:styleLbl": StyleLabel,
    "dgm:extLst": ExtensionList
  };
  StyleDefinition._D = {
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue)
  };
  RelationshipIds._D = {
    "r:dm": new OxmlAttr("r:dm", OxmlType.StringValue),
    "r:lo": new OxmlAttr("r:lo", OxmlType.StringValue),
    "r:qs": new OxmlAttr("r:qs", OxmlType.StringValue),
    "r:cs": new OxmlAttr("r:cs", OxmlType.StringValue)
  };
  LayoutDefinitionHeaderList._C = {
    "dgm:layoutDefHdr": LayoutDefinitionHeader
  };
  LayoutDefinitionHeader._C = {
    "dgm:title": Title,
    "dgm:desc": Description,
    "dgm:catLst": CategoryList,
    "dgm:extLst": ExtensionList
  };
  LayoutDefinitionHeader._D = {
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue),
    ":defStyle": new OxmlAttr(":defStyle", OxmlType.StringValue),
    ":resId": new OxmlAttr(":resId", OxmlType.Int32Value)
  };
  LayoutDefinition._C = {
    "dgm:title": Title,
    "dgm:desc": Description,
    "dgm:catLst": CategoryList,
    "dgm:sampData": SampleData,
    "dgm:styleData": StyleData,
    "dgm:clrData": ColorData,
    "dgm:layoutNode": LayoutNode,
    "dgm:extLst": DiagramDefinitionExtensionList
  };
  LayoutDefinition._D = {
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue),
    ":defStyle": new OxmlAttr(":defStyle", OxmlType.StringValue)
  };
  DataModelRoot._C = {
    "dgm:ptLst": PointList,
    "dgm:cxnLst": ConnectionList,
    "dgm:bg": Background,
    "dgm:whole": Whole,
    "dgm:extLst": DataModelExtensionList
  };
  ColorsDefinitionHeaderList._C = {
    "dgm:colorsDefHdr": ColorsDefinitionHeader
  };
  ColorsDefinitionHeader._C = {
    "dgm:title": ColorDefinitionTitle,
    "dgm:desc": ColorTransformDescription,
    "dgm:catLst": ColorTransformCategories,
    "dgm:extLst": ExtensionList
  };
  ColorsDefinitionHeader._D = {
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue),
    ":resId": new OxmlAttr(":resId", OxmlType.Int32Value)
  };
  ColorsDefinition._C = {
    "dgm:title": ColorDefinitionTitle,
    "dgm:desc": ColorTransformDescription,
    "dgm:catLst": ColorTransformCategories,
    "dgm:styleLbl": ColorTransformStyleLabel,
    "dgm:extLst": ExtensionList
  };
  ColorsDefinition._D = {
    ":uniqueId": new OxmlAttr(":uniqueId", OxmlType.StringValue),
    ":minVer": new OxmlAttr(":minVer", OxmlType.StringValue)
  };
  return {
    prefix: "dgm",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/diagram"
  };
}
export {
  Adjust,
  AdjustList,
  Algorithm,
  AlgorithmValues,
  AlgorithmValuesArray,
  AnimateOneByOne,
  AnimateOneByOneValues,
  AnimateOneByOneValuesArray,
  AnimationLevel,
  AnimationLevelStringValues,
  AnimationLevelStringValuesArray,
  ArrowheadStyleValues,
  ArrowheadStyleValuesArray,
  AutoTextRotationValues,
  AutoTextRotationValuesArray,
  AxisValues,
  AxisValuesArray,
  Background,
  BendPointValues,
  BendPointValuesArray,
  BoolOperatorValues,
  BoolOperatorValuesArray,
  BreakpointValues,
  BreakpointValuesArray,
  BulletEnabled,
  Category,
  CategoryList,
  CenterShapeMappingValues,
  CenterShapeMappingValuesArray,
  ChildAlignmentValues,
  ChildAlignmentValuesArray,
  ChildDirectionValues,
  ChildDirectionValuesArray,
  ChildOrderValues,
  ChildOrderValuesArray,
  Choose,
  ColorApplicationMethodValues,
  ColorApplicationMethodValuesArray,
  ColorData,
  ColorDefinitionTitle,
  ColorTransformCategories,
  ColorTransformCategory,
  ColorTransformDescription,
  ColorTransformStyleLabel,
  ColorsDefinition,
  ColorsDefinitionHeader,
  ColorsDefinitionHeaderList,
  ColorsType,
  Connection,
  ConnectionList,
  ConnectionValues,
  ConnectionValuesArray,
  ConnectorDimensionValues,
  ConnectorDimensionValuesArray,
  ConnectorPointValues,
  ConnectorPointValuesArray,
  ConnectorRoutingValues,
  ConnectorRoutingValuesArray,
  Constraint,
  ConstraintRelationshipValues,
  ConstraintRelationshipValuesArray,
  ConstraintValues,
  ConstraintValuesArray,
  Constraints,
  ContinueDirectionValues,
  ContinueDirectionValuesArray,
  DataModel,
  DataModelExtensionList,
  DataModelRoot,
  Description,
  DiagramChooseElse,
  DiagramChooseIf,
  DiagramDefinitionExtension,
  DiagramDefinitionExtensionList,
  Direction,
  DirectionValues,
  DirectionValuesArray,
  EffectColorList,
  ElementValues,
  ElementValuesArray,
  ExtensionList,
  FallbackDimensionValues,
  FallbackDimensionValuesArray,
  FillColorList,
  FlowDirectionValues,
  FlowDirectionValuesArray,
  ForEach,
  FunctionOperatorValues,
  FunctionOperatorValuesArray,
  FunctionValues,
  FunctionValuesArray,
  GrowDirectionValues,
  GrowDirectionValuesArray,
  HierarchyAlignmentValues,
  HierarchyAlignmentValuesArray,
  HierarchyBranch,
  HierarchyBranchStyleValues,
  HierarchyBranchStyleValuesArray,
  HorizontalAlignmentValues,
  HorizontalAlignmentValuesArray,
  HueDirectionValues,
  HueDirectionValuesArray,
  LayoutDefinition,
  LayoutDefinitionHeader,
  LayoutDefinitionHeaderList,
  LayoutNode,
  LayoutVariablePropertySetType,
  LineColorList,
  LinearDirectionValues,
  LinearDirectionValuesArray,
  MaxNumberOfChildren,
  NodeHorizontalAlignmentValues,
  NodeHorizontalAlignmentValuesArray,
  NodeVerticalAlignmentValues,
  NodeVerticalAlignmentValuesArray,
  OffsetValues,
  OffsetValuesArray,
  OrganizationChart,
  OutputShapeValues,
  OutputShapeValuesArray,
  Parameter,
  ParameterIdValues,
  ParameterIdValuesArray,
  Point,
  PointList,
  PointValues,
  PointValuesArray,
  PreferredNumberOfChildren,
  PresentationLayoutVariables,
  PresentationOf,
  PropertySet,
  PtExtensionList,
  PyramidAccentPositionValues,
  PyramidAccentPositionValuesArray,
  PyramidAccentTextMarginValues,
  PyramidAccentTextMarginValuesArray,
  RelationshipIds,
  ResizeHandles,
  ResizeHandlesStringValues,
  ResizeHandlesStringValuesArray,
  RotationPathValues,
  RotationPathValuesArray,
  Rule,
  RuleList,
  SampleData,
  SampleDataType,
  Scene3D,
  SecondaryChildAlignmentValues,
  SecondaryChildAlignmentValuesArray,
  SecondaryLinearDirectionValues,
  SecondaryLinearDirectionValuesArray,
  Shape,
  Shape3D,
  ShapeProperties,
  StartingElementValues,
  StartingElementValuesArray,
  Style,
  StyleData,
  StyleDefinition,
  StyleDefinitionHeader,
  StyleDefinitionHeaderList,
  StyleDefinitionTitle,
  StyleDisplayCategories,
  StyleDisplayCategory,
  StyleLabel,
  StyleLabelDescription,
  TextAlignmentValues,
  TextAlignmentValuesArray,
  TextAnchorHorizontalValues,
  TextAnchorHorizontalValuesArray,
  TextAnchorVerticalValues,
  TextAnchorVerticalValuesArray,
  TextBlockDirectionValues,
  TextBlockDirectionValuesArray,
  TextBody,
  TextDirectionValues,
  TextDirectionValuesArray,
  TextEffectColorList,
  TextFillColorList,
  TextLineColorList,
  TextProperties,
  Title,
  VariableList,
  VariableValues,
  VariableValuesArray,
  VerticalAlignmentValues,
  VerticalAlignmentValuesArray,
  Whole,
  initDrawingDiagramsNamespace
};
