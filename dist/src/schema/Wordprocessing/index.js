import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { SpaceProcessingModeValuesArray } from "..";
import { Group as VGroup } from "../Vml";
import { ImageFile as VImageFile } from "../Vml";
import { Line as VLine } from "../Vml";
import { Oval as VOval } from "../Vml";
import { PolyLine as VPolyLine } from "../Vml";
import { Rectangle as VRectangle } from "../Vml";
import { RoundRectangle as VRoundRectangle } from "../Vml";
import { Shape as VShape } from "../Vml";
import { Shapetype as VShapetype } from "../Vml";
import { ShapeDefaults as OShapeDefaults } from "../Vml/Office";
import { ShapeLayout as OShapeLayout } from "../Vml/Office";
import { ConflictInsertion as W14ConflictInsertion } from "../Office2010/Word";
import { ConflictDeletion as W14ConflictDeletion } from "../Office2010/Word";
import { CustomXmlConflictInsertionRangeStart as W14CustomXmlConflictInsertionRangeStart } from "../Office2010/Word";
import { CustomXmlConflictInsertionRangeEnd as W14CustomXmlConflictInsertionRangeEnd } from "../Office2010/Word";
import { CustomXmlConflictDeletionRangeStart as W14CustomXmlConflictDeletionRangeStart } from "../Office2010/Word";
import { CustomXmlConflictDeletionRangeEnd as W14CustomXmlConflictDeletionRangeEnd } from "../Office2010/Word";
import { RunConflictInsertion as W14RunConflictInsertion } from "../Office2010/Word";
import { RunConflictDeletion as W14RunConflictDeletion } from "../Office2010/Word";
import { Background as VBackground } from "../Vml";
import { Paragraph as MParagraph } from "../Math";
import { OfficeMath as MOfficeMath } from "../Math";
import { Accent as MAccent } from "../Math";
import { Bar as MBar } from "../Math";
import { Box as MBox } from "../Math";
import { BorderBox as MBorderBox } from "../Math";
import { Delimiter as MDelimiter } from "../Math";
import { EquationArray as MEquationArray } from "../Math";
import { Fraction as MFraction } from "../Math";
import { MathFunction as MMathFunction } from "../Math";
import { GroupChar as MGroupChar } from "../Math";
import { LimitLower as MLimitLower } from "../Math";
import { LimitUpper as MLimitUpper } from "../Math";
import { Matrix as MMatrix } from "../Math";
import { Nary as MNary } from "../Math";
import { Phantom as MPhantom } from "../Math";
import { Radical as MRadical } from "../Math";
import { PreSubSuper as MPreSubSuper } from "../Math";
import { Subscript as MSubscript } from "../Math";
import { SubSuperscript as MSubSuperscript } from "../Math";
import { Superscript as MSuperscript } from "../Math";
import { Run as MRun } from "../Math";
import { DataBinding as W15DataBinding } from "../Office2013/Word";
import { Color as W15Color } from "../Office2013/Word";
import { Appearance as W15Appearance } from "../Office2013/Word";
import { WebExtensionLinked as W15WebExtensionLinked } from "../Office2013/Word";
import { WebExtensionCreated as W15WebExtensionCreated } from "../Office2013/Word";
import { EntityPickerEmpty as W14EntityPickerEmpty } from "../Office2010/Word";
import { SdtContentCheckBox as W14SdtContentCheckBox } from "../Office2010/Word";
import { SdtRepeatedSection as W15SdtRepeatedSection } from "../Office2013/Word";
import { SdtRepeatedSectionItem as W15SdtRepeatedSectionItem } from "../Office2013/Word";
import { FootnoteColumns as W15FootnoteColumns } from "../Office2013/Word";
import { Glow as W14Glow } from "../Office2010/Word";
import { Shadow as W14Shadow } from "../Office2010/Word";
import { Reflection as W14Reflection } from "../Office2010/Word";
import { TextOutlineEffect as W14TextOutlineEffect } from "../Office2010/Word";
import { FillTextEffect as W14FillTextEffect } from "../Office2010/Word";
import { Scene3D as W14Scene3D } from "../Office2010/Word";
import { Properties3D as W14Properties3D } from "../Office2010/Word";
import { Ligatures as W14Ligatures } from "../Office2010/Word";
import { NumberingFormat as W14NumberingFormat } from "../Office2010/Word";
import { NumberSpacing as W14NumberSpacing } from "../Office2010/Word";
import { StylisticSets as W14StylisticSets } from "../Office2010/Word";
import { ContextualAlternatives as W14ContextualAlternatives } from "../Office2010/Word";
import { MathProperties as MMathProperties } from "../Math";
import { SchemaLibrary as SlSchemaLibrary } from "../CustomXmlSchemaReferences";
import { DocumentId as W14DocumentId } from "../Office2010/Word";
import { DiscardImageEditingData as W14DiscardImageEditingData } from "../Office2010/Word";
import { DefaultImageDpi as W14DefaultImageDpi } from "../Office2010/Word";
import { ConflictMode as W14ConflictMode } from "../Office2010/Word";
import { ChartTrackingRefBased as W15ChartTrackingRefBased } from "../Office2013/Word";
import { PersistentDocumentId as W15PersistentDocumentId } from "../Office2013/Word";
import { Anchor as WpAnchor } from "../Drawing/Wordprocessing";
import { Inline as WpInline } from "../Drawing/Wordprocessing";
import { Arc as VArc } from "../Vml";
import { Curve as VCurve } from "../Vml";
import { OleObject as OOleObject } from "../Vml/Office";
var OnOffOnlyValues = /* @__PURE__ */ ((OnOffOnlyValues2) => {
  OnOffOnlyValues2["On"] = "on";
  OnOffOnlyValues2["Off"] = "off";
  return OnOffOnlyValues2;
})(OnOffOnlyValues || {});
const OnOffOnlyValuesArray = [
  "on" /* On */,
  "off" /* Off */
];
var HighlightColorValues = /* @__PURE__ */ ((HighlightColorValues2) => {
  HighlightColorValues2["Black"] = "black";
  HighlightColorValues2["Blue"] = "blue";
  HighlightColorValues2["Cyan"] = "cyan";
  HighlightColorValues2["Green"] = "green";
  HighlightColorValues2["Magenta"] = "magenta";
  HighlightColorValues2["Red"] = "red";
  HighlightColorValues2["Yellow"] = "yellow";
  HighlightColorValues2["White"] = "white";
  HighlightColorValues2["DarkBlue"] = "darkBlue";
  HighlightColorValues2["DarkCyan"] = "darkCyan";
  HighlightColorValues2["DarkGreen"] = "darkGreen";
  HighlightColorValues2["DarkMagenta"] = "darkMagenta";
  HighlightColorValues2["DarkRed"] = "darkRed";
  HighlightColorValues2["DarkYellow"] = "darkYellow";
  HighlightColorValues2["DarkGray"] = "darkGray";
  HighlightColorValues2["LightGray"] = "lightGray";
  HighlightColorValues2["None"] = "none";
  return HighlightColorValues2;
})(HighlightColorValues || {});
const HighlightColorValuesArray = [
  "black" /* Black */,
  "blue" /* Blue */,
  "cyan" /* Cyan */,
  "green" /* Green */,
  "magenta" /* Magenta */,
  "red" /* Red */,
  "yellow" /* Yellow */,
  "white" /* White */,
  "darkBlue" /* DarkBlue */,
  "darkCyan" /* DarkCyan */,
  "darkGreen" /* DarkGreen */,
  "darkMagenta" /* DarkMagenta */,
  "darkRed" /* DarkRed */,
  "darkYellow" /* DarkYellow */,
  "darkGray" /* DarkGray */,
  "lightGray" /* LightGray */,
  "none" /* None */
];
var AutomaticColorValues = /* @__PURE__ */ ((AutomaticColorValues2) => {
  AutomaticColorValues2["Auto"] = "auto";
  return AutomaticColorValues2;
})(AutomaticColorValues || {});
const AutomaticColorValuesArray = [
  "auto" /* Auto */
];
var UnderlineValues = /* @__PURE__ */ ((UnderlineValues2) => {
  UnderlineValues2["Single"] = "single";
  UnderlineValues2["Words"] = "words";
  UnderlineValues2["Double"] = "double";
  UnderlineValues2["Thick"] = "thick";
  UnderlineValues2["Dotted"] = "dotted";
  UnderlineValues2["DottedHeavy"] = "dottedHeavy";
  UnderlineValues2["Dash"] = "dash";
  UnderlineValues2["DashedHeavy"] = "dashedHeavy";
  UnderlineValues2["DashLong"] = "dashLong";
  UnderlineValues2["DashLongHeavy"] = "dashLongHeavy";
  UnderlineValues2["DotDash"] = "dotDash";
  UnderlineValues2["DashDotHeavy"] = "dashDotHeavy";
  UnderlineValues2["DotDotDash"] = "dotDotDash";
  UnderlineValues2["DashDotDotHeavy"] = "dashDotDotHeavy";
  UnderlineValues2["Wave"] = "wave";
  UnderlineValues2["WavyHeavy"] = "wavyHeavy";
  UnderlineValues2["WavyDouble"] = "wavyDouble";
  UnderlineValues2["None"] = "none";
  return UnderlineValues2;
})(UnderlineValues || {});
const UnderlineValuesArray = [
  "single" /* Single */,
  "words" /* Words */,
  "double" /* Double */,
  "thick" /* Thick */,
  "dotted" /* Dotted */,
  "dottedHeavy" /* DottedHeavy */,
  "dash" /* Dash */,
  "dashedHeavy" /* DashedHeavy */,
  "dashLong" /* DashLong */,
  "dashLongHeavy" /* DashLongHeavy */,
  "dotDash" /* DotDash */,
  "dashDotHeavy" /* DashDotHeavy */,
  "dotDotDash" /* DotDotDash */,
  "dashDotDotHeavy" /* DashDotDotHeavy */,
  "wave" /* Wave */,
  "wavyHeavy" /* WavyHeavy */,
  "wavyDouble" /* WavyDouble */,
  "none" /* None */
];
var TextEffectValues = /* @__PURE__ */ ((TextEffectValues2) => {
  TextEffectValues2["BlinkBackground"] = "blinkBackground";
  TextEffectValues2["Lights"] = "lights";
  TextEffectValues2["AntsBlack"] = "antsBlack";
  TextEffectValues2["AntsRed"] = "antsRed";
  TextEffectValues2["Shimmer"] = "shimmer";
  TextEffectValues2["Sparkle"] = "sparkle";
  TextEffectValues2["None"] = "none";
  return TextEffectValues2;
})(TextEffectValues || {});
const TextEffectValuesArray = [
  "blinkBackground" /* BlinkBackground */,
  "lights" /* Lights */,
  "antsBlack" /* AntsBlack */,
  "antsRed" /* AntsRed */,
  "shimmer" /* Shimmer */,
  "sparkle" /* Sparkle */,
  "none" /* None */
];
var VerticalPositionValues = /* @__PURE__ */ ((VerticalPositionValues2) => {
  VerticalPositionValues2["Baseline"] = "baseline";
  VerticalPositionValues2["Superscript"] = "superscript";
  VerticalPositionValues2["Subscript"] = "subscript";
  return VerticalPositionValues2;
})(VerticalPositionValues || {});
const VerticalPositionValuesArray = [
  "baseline" /* Baseline */,
  "superscript" /* Superscript */,
  "subscript" /* Subscript */
];
var EmphasisMarkValues = /* @__PURE__ */ ((EmphasisMarkValues2) => {
  EmphasisMarkValues2["None"] = "none";
  EmphasisMarkValues2["Dot"] = "dot";
  EmphasisMarkValues2["Comma"] = "comma";
  EmphasisMarkValues2["Circle"] = "circle";
  EmphasisMarkValues2["UnderDot"] = "underDot";
  return EmphasisMarkValues2;
})(EmphasisMarkValues || {});
const EmphasisMarkValuesArray = [
  "none" /* None */,
  "dot" /* Dot */,
  "comma" /* Comma */,
  "circle" /* Circle */,
  "underDot" /* UnderDot */
];
var CombineBracketValues = /* @__PURE__ */ ((CombineBracketValues2) => {
  CombineBracketValues2["None"] = "none";
  CombineBracketValues2["Round"] = "round";
  CombineBracketValues2["Square"] = "square";
  CombineBracketValues2["Angle"] = "angle";
  CombineBracketValues2["Curly"] = "curly";
  return CombineBracketValues2;
})(CombineBracketValues || {});
const CombineBracketValuesArray = [
  "none" /* None */,
  "round" /* Round */,
  "square" /* Square */,
  "angle" /* Angle */,
  "curly" /* Curly */
];
var HorizontalAlignmentValues = /* @__PURE__ */ ((HorizontalAlignmentValues2) => {
  HorizontalAlignmentValues2["Left"] = "left";
  HorizontalAlignmentValues2["Center"] = "center";
  HorizontalAlignmentValues2["Right"] = "right";
  HorizontalAlignmentValues2["Inside"] = "inside";
  HorizontalAlignmentValues2["Outside"] = "outside";
  return HorizontalAlignmentValues2;
})(HorizontalAlignmentValues || {});
const HorizontalAlignmentValuesArray = [
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */,
  "inside" /* Inside */,
  "outside" /* Outside */
];
var VerticalAlignmentValues = /* @__PURE__ */ ((VerticalAlignmentValues2) => {
  VerticalAlignmentValues2["Inline"] = "inline";
  VerticalAlignmentValues2["Top"] = "top";
  VerticalAlignmentValues2["Center"] = "center";
  VerticalAlignmentValues2["Bottom"] = "bottom";
  VerticalAlignmentValues2["Inside"] = "inside";
  VerticalAlignmentValues2["Outside"] = "outside";
  return VerticalAlignmentValues2;
})(VerticalAlignmentValues || {});
const VerticalAlignmentValuesArray = [
  "inline" /* Inline */,
  "top" /* Top */,
  "center" /* Center */,
  "bottom" /* Bottom */,
  "inside" /* Inside */,
  "outside" /* Outside */
];
var HeightRuleValues = /* @__PURE__ */ ((HeightRuleValues2) => {
  HeightRuleValues2["Auto"] = "auto";
  HeightRuleValues2["Exact"] = "exact";
  HeightRuleValues2["AtLeast"] = "atLeast";
  return HeightRuleValues2;
})(HeightRuleValues || {});
const HeightRuleValuesArray = [
  "auto" /* Auto */,
  "exact" /* Exact */,
  "atLeast" /* AtLeast */
];
var TextWrappingValues = /* @__PURE__ */ ((TextWrappingValues2) => {
  TextWrappingValues2["Auto"] = "auto";
  TextWrappingValues2["NotBeside"] = "notBeside";
  TextWrappingValues2["Around"] = "around";
  TextWrappingValues2["Tight"] = "tight";
  TextWrappingValues2["Through"] = "through";
  TextWrappingValues2["None"] = "none";
  return TextWrappingValues2;
})(TextWrappingValues || {});
const TextWrappingValuesArray = [
  "auto" /* Auto */,
  "notBeside" /* NotBeside */,
  "around" /* Around */,
  "tight" /* Tight */,
  "through" /* Through */,
  "none" /* None */
];
var VerticalAnchorValues = /* @__PURE__ */ ((VerticalAnchorValues2) => {
  VerticalAnchorValues2["Text"] = "text";
  VerticalAnchorValues2["Margin"] = "margin";
  VerticalAnchorValues2["Page"] = "page";
  return VerticalAnchorValues2;
})(VerticalAnchorValues || {});
const VerticalAnchorValuesArray = [
  "text" /* Text */,
  "margin" /* Margin */,
  "page" /* Page */
];
var HorizontalAnchorValues = /* @__PURE__ */ ((HorizontalAnchorValues2) => {
  HorizontalAnchorValues2["Text"] = "text";
  HorizontalAnchorValues2["Margin"] = "margin";
  HorizontalAnchorValues2["Page"] = "page";
  return HorizontalAnchorValues2;
})(HorizontalAnchorValues || {});
const HorizontalAnchorValuesArray = [
  "text" /* Text */,
  "margin" /* Margin */,
  "page" /* Page */
];
var DropCapLocationValues = /* @__PURE__ */ ((DropCapLocationValues2) => {
  DropCapLocationValues2["None"] = "none";
  DropCapLocationValues2["Drop"] = "drop";
  DropCapLocationValues2["Margin"] = "margin";
  return DropCapLocationValues2;
})(DropCapLocationValues || {});
const DropCapLocationValuesArray = [
  "none" /* None */,
  "drop" /* Drop */,
  "margin" /* Margin */
];
var TabStopLeaderCharValues = /* @__PURE__ */ ((TabStopLeaderCharValues2) => {
  TabStopLeaderCharValues2["None"] = "none";
  TabStopLeaderCharValues2["Dot"] = "dot";
  TabStopLeaderCharValues2["Hyphen"] = "hyphen";
  TabStopLeaderCharValues2["Underscore"] = "underscore";
  TabStopLeaderCharValues2["Heavy"] = "heavy";
  TabStopLeaderCharValues2["MiddleDot"] = "middleDot";
  return TabStopLeaderCharValues2;
})(TabStopLeaderCharValues || {});
const TabStopLeaderCharValuesArray = [
  "none" /* None */,
  "dot" /* Dot */,
  "hyphen" /* Hyphen */,
  "underscore" /* Underscore */,
  "heavy" /* Heavy */,
  "middleDot" /* MiddleDot */
];
var LineSpacingRuleValues = /* @__PURE__ */ ((LineSpacingRuleValues2) => {
  LineSpacingRuleValues2["Auto"] = "auto";
  LineSpacingRuleValues2["Exact"] = "exact";
  LineSpacingRuleValues2["AtLeast"] = "atLeast";
  return LineSpacingRuleValues2;
})(LineSpacingRuleValues || {});
const LineSpacingRuleValuesArray = [
  "auto" /* Auto */,
  "exact" /* Exact */,
  "atLeast" /* AtLeast */
];
var TableRowAlignmentValues = /* @__PURE__ */ ((TableRowAlignmentValues2) => {
  TableRowAlignmentValues2["Left"] = "left";
  TableRowAlignmentValues2["Center"] = "center";
  TableRowAlignmentValues2["Right"] = "right";
  return TableRowAlignmentValues2;
})(TableRowAlignmentValues || {});
const TableRowAlignmentValuesArray = [
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */
];
var ViewValues = /* @__PURE__ */ ((ViewValues2) => {
  ViewValues2["None"] = "none";
  ViewValues2["Print"] = "print";
  ViewValues2["Outline"] = "outline";
  ViewValues2["MasterPages"] = "masterPages";
  ViewValues2["Normal"] = "normal";
  ViewValues2["Web"] = "web";
  return ViewValues2;
})(ViewValues || {});
const ViewValuesArray = [
  "none" /* None */,
  "print" /* Print */,
  "outline" /* Outline */,
  "masterPages" /* MasterPages */,
  "normal" /* Normal */,
  "web" /* Web */
];
var PresetZoomValues = /* @__PURE__ */ ((PresetZoomValues2) => {
  PresetZoomValues2["None"] = "none";
  PresetZoomValues2["FullPage"] = "fullPage";
  PresetZoomValues2["BestFit"] = "bestFit";
  PresetZoomValues2["TextFit"] = "textFit";
  return PresetZoomValues2;
})(PresetZoomValues || {});
const PresetZoomValuesArray = [
  "none" /* None */,
  "fullPage" /* FullPage */,
  "bestFit" /* BestFit */,
  "textFit" /* TextFit */
];
var ProofingStateValues = /* @__PURE__ */ ((ProofingStateValues2) => {
  ProofingStateValues2["Clean"] = "clean";
  ProofingStateValues2["Dirty"] = "dirty";
  return ProofingStateValues2;
})(ProofingStateValues || {});
const ProofingStateValuesArray = [
  "clean" /* Clean */,
  "dirty" /* Dirty */
];
var DocumentTypeValues = /* @__PURE__ */ ((DocumentTypeValues2) => {
  DocumentTypeValues2["NotSpecified"] = "notSpecified";
  DocumentTypeValues2["Letter"] = "letter";
  DocumentTypeValues2["Email"] = "eMail";
  return DocumentTypeValues2;
})(DocumentTypeValues || {});
const DocumentTypeValuesArray = [
  "notSpecified" /* NotSpecified */,
  "letter" /* Letter */,
  "eMail" /* Email */
];
var DocumentProtectionValues = /* @__PURE__ */ ((DocumentProtectionValues2) => {
  DocumentProtectionValues2["None"] = "none";
  DocumentProtectionValues2["ReadOnly"] = "readOnly";
  DocumentProtectionValues2["Comments"] = "comments";
  DocumentProtectionValues2["TrackedChanges"] = "trackedChanges";
  DocumentProtectionValues2["Forms"] = "forms";
  return DocumentProtectionValues2;
})(DocumentProtectionValues || {});
const DocumentProtectionValuesArray = [
  "none" /* None */,
  "readOnly" /* ReadOnly */,
  "comments" /* Comments */,
  "trackedChanges" /* TrackedChanges */,
  "forms" /* Forms */
];
var MailMergeDocumentValues = /* @__PURE__ */ ((MailMergeDocumentValues2) => {
  MailMergeDocumentValues2["Catalog"] = "catalog";
  MailMergeDocumentValues2["Envelope"] = "envelopes";
  MailMergeDocumentValues2["MailingLabel"] = "mailingLabels";
  MailMergeDocumentValues2["FormLetter"] = "formLetters";
  MailMergeDocumentValues2["Email"] = "email";
  MailMergeDocumentValues2["Fax"] = "fax";
  return MailMergeDocumentValues2;
})(MailMergeDocumentValues || {});
const MailMergeDocumentValuesArray = [
  "catalog" /* Catalog */,
  "envelopes" /* Envelope */,
  "mailingLabels" /* MailingLabel */,
  "formLetters" /* FormLetter */,
  "email" /* Email */,
  "fax" /* Fax */
];
var MailMergeDataValues = /* @__PURE__ */ ((MailMergeDataValues2) => {
  MailMergeDataValues2["TextFile"] = "textFile";
  MailMergeDataValues2["Database"] = "database";
  MailMergeDataValues2["Spreadsheet"] = "spreadsheet";
  MailMergeDataValues2["Query"] = "query";
  MailMergeDataValues2["Odbc"] = "odbc";
  MailMergeDataValues2["Native"] = "native";
  return MailMergeDataValues2;
})(MailMergeDataValues || {});
const MailMergeDataValuesArray = [
  "textFile" /* TextFile */,
  "database" /* Database */,
  "spreadsheet" /* Spreadsheet */,
  "query" /* Query */,
  "odbc" /* Odbc */,
  "native" /* Native */
];
var MailMergeDestinationValues = /* @__PURE__ */ ((MailMergeDestinationValues2) => {
  MailMergeDestinationValues2["NewDocument"] = "newDocument";
  MailMergeDestinationValues2["Printer"] = "printer";
  MailMergeDestinationValues2["Email"] = "email";
  MailMergeDestinationValues2["Fax"] = "fax";
  return MailMergeDestinationValues2;
})(MailMergeDestinationValues || {});
const MailMergeDestinationValuesArray = [
  "newDocument" /* NewDocument */,
  "printer" /* Printer */,
  "email" /* Email */,
  "fax" /* Fax */
];
var MailMergeOdsoFieldValues = /* @__PURE__ */ ((MailMergeOdsoFieldValues2) => {
  MailMergeOdsoFieldValues2["Null"] = "null";
  MailMergeOdsoFieldValues2["DbColumn"] = "dbColumn";
  return MailMergeOdsoFieldValues2;
})(MailMergeOdsoFieldValues || {});
const MailMergeOdsoFieldValuesArray = [
  "null" /* Null */,
  "dbColumn" /* DbColumn */
];
var VerticalTextAlignmentValues = /* @__PURE__ */ ((VerticalTextAlignmentValues2) => {
  VerticalTextAlignmentValues2["Top"] = "top";
  VerticalTextAlignmentValues2["Center"] = "center";
  VerticalTextAlignmentValues2["Baseline"] = "baseline";
  VerticalTextAlignmentValues2["Bottom"] = "bottom";
  VerticalTextAlignmentValues2["Auto"] = "auto";
  return VerticalTextAlignmentValues2;
})(VerticalTextAlignmentValues || {});
const VerticalTextAlignmentValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "baseline" /* Baseline */,
  "bottom" /* Bottom */,
  "auto" /* Auto */
];
var DisplacedByCustomXmlValues = /* @__PURE__ */ ((DisplacedByCustomXmlValues2) => {
  DisplacedByCustomXmlValues2["Next"] = "next";
  DisplacedByCustomXmlValues2["Previous"] = "prev";
  return DisplacedByCustomXmlValues2;
})(DisplacedByCustomXmlValues || {});
const DisplacedByCustomXmlValuesArray = [
  "next" /* Next */,
  "prev" /* Previous */
];
var VerticalMergeRevisionValues = /* @__PURE__ */ ((VerticalMergeRevisionValues2) => {
  VerticalMergeRevisionValues2["Continue"] = "cont";
  VerticalMergeRevisionValues2["Restart"] = "rest";
  return VerticalMergeRevisionValues2;
})(VerticalMergeRevisionValues || {});
const VerticalMergeRevisionValuesArray = [
  "cont" /* Continue */,
  "rest" /* Restart */
];
var TextBoxTightWrapValues = /* @__PURE__ */ ((TextBoxTightWrapValues2) => {
  TextBoxTightWrapValues2["None"] = "none";
  TextBoxTightWrapValues2["AllLines"] = "allLines";
  TextBoxTightWrapValues2["FirstAndLastLine"] = "firstAndLastLine";
  TextBoxTightWrapValues2["FirstLineOnly"] = "firstLineOnly";
  TextBoxTightWrapValues2["LastLineOnly"] = "lastLineOnly";
  return TextBoxTightWrapValues2;
})(TextBoxTightWrapValues || {});
const TextBoxTightWrapValuesArray = [
  "none" /* None */,
  "allLines" /* AllLines */,
  "firstAndLastLine" /* FirstAndLastLine */,
  "firstLineOnly" /* FirstLineOnly */,
  "lastLineOnly" /* LastLineOnly */
];
var FieldCharValues = /* @__PURE__ */ ((FieldCharValues2) => {
  FieldCharValues2["Begin"] = "begin";
  FieldCharValues2["Separate"] = "separate";
  FieldCharValues2["End"] = "end";
  return FieldCharValues2;
})(FieldCharValues || {});
const FieldCharValuesArray = [
  "begin" /* Begin */,
  "separate" /* Separate */,
  "end" /* End */
];
var InfoTextValues = /* @__PURE__ */ ((InfoTextValues2) => {
  InfoTextValues2["Text"] = "text";
  InfoTextValues2["AutoText"] = "autoText";
  return InfoTextValues2;
})(InfoTextValues || {});
const InfoTextValuesArray = [
  "text" /* Text */,
  "autoText" /* AutoText */
];
var TextBoxFormFieldValues = /* @__PURE__ */ ((TextBoxFormFieldValues2) => {
  TextBoxFormFieldValues2["Regular"] = "regular";
  TextBoxFormFieldValues2["Number"] = "number";
  TextBoxFormFieldValues2["Date"] = "date";
  TextBoxFormFieldValues2["CurrentTime"] = "currentTime";
  TextBoxFormFieldValues2["CurrentDate"] = "currentDate";
  TextBoxFormFieldValues2["Calculated"] = "calculated";
  return TextBoxFormFieldValues2;
})(TextBoxFormFieldValues || {});
const TextBoxFormFieldValuesArray = [
  "regular" /* Regular */,
  "number" /* Number */,
  "date" /* Date */,
  "currentTime" /* CurrentTime */,
  "currentDate" /* CurrentDate */,
  "calculated" /* Calculated */
];
var SectionMarkValues = /* @__PURE__ */ ((SectionMarkValues2) => {
  SectionMarkValues2["NextPage"] = "nextPage";
  SectionMarkValues2["NextColumn"] = "nextColumn";
  SectionMarkValues2["Continuous"] = "continuous";
  SectionMarkValues2["EvenPage"] = "evenPage";
  SectionMarkValues2["OddPage"] = "oddPage";
  return SectionMarkValues2;
})(SectionMarkValues || {});
const SectionMarkValuesArray = [
  "nextPage" /* NextPage */,
  "nextColumn" /* NextColumn */,
  "continuous" /* Continuous */,
  "evenPage" /* EvenPage */,
  "oddPage" /* OddPage */
];
var PageOrientationValues = /* @__PURE__ */ ((PageOrientationValues2) => {
  PageOrientationValues2["Portrait"] = "portrait";
  PageOrientationValues2["Landscape"] = "landscape";
  return PageOrientationValues2;
})(PageOrientationValues || {});
const PageOrientationValuesArray = [
  "portrait" /* Portrait */,
  "landscape" /* Landscape */
];
var PageBorderZOrderValues = /* @__PURE__ */ ((PageBorderZOrderValues2) => {
  PageBorderZOrderValues2["Front"] = "front";
  PageBorderZOrderValues2["Back"] = "back";
  return PageBorderZOrderValues2;
})(PageBorderZOrderValues || {});
const PageBorderZOrderValuesArray = [
  "front" /* Front */,
  "back" /* Back */
];
var PageBorderDisplayValues = /* @__PURE__ */ ((PageBorderDisplayValues2) => {
  PageBorderDisplayValues2["AllPages"] = "allPages";
  PageBorderDisplayValues2["FirstPage"] = "firstPage";
  PageBorderDisplayValues2["NotFirstPage"] = "notFirstPage";
  return PageBorderDisplayValues2;
})(PageBorderDisplayValues || {});
const PageBorderDisplayValuesArray = [
  "allPages" /* AllPages */,
  "firstPage" /* FirstPage */,
  "notFirstPage" /* NotFirstPage */
];
var PageBorderOffsetValues = /* @__PURE__ */ ((PageBorderOffsetValues2) => {
  PageBorderOffsetValues2["Page"] = "page";
  PageBorderOffsetValues2["Text"] = "text";
  return PageBorderOffsetValues2;
})(PageBorderOffsetValues || {});
const PageBorderOffsetValuesArray = [
  "page" /* Page */,
  "text" /* Text */
];
var ChapterSeparatorValues = /* @__PURE__ */ ((ChapterSeparatorValues2) => {
  ChapterSeparatorValues2["Hyphen"] = "hyphen";
  ChapterSeparatorValues2["Period"] = "period";
  ChapterSeparatorValues2["Colon"] = "colon";
  ChapterSeparatorValues2["EmDash"] = "emDash";
  ChapterSeparatorValues2["EnDash"] = "enDash";
  return ChapterSeparatorValues2;
})(ChapterSeparatorValues || {});
const ChapterSeparatorValuesArray = [
  "hyphen" /* Hyphen */,
  "period" /* Period */,
  "colon" /* Colon */,
  "emDash" /* EmDash */,
  "enDash" /* EnDash */
];
var LineNumberRestartValues = /* @__PURE__ */ ((LineNumberRestartValues2) => {
  LineNumberRestartValues2["NewPage"] = "newPage";
  LineNumberRestartValues2["NewSection"] = "newSection";
  LineNumberRestartValues2["Continuous"] = "continuous";
  return LineNumberRestartValues2;
})(LineNumberRestartValues || {});
const LineNumberRestartValuesArray = [
  "newPage" /* NewPage */,
  "newSection" /* NewSection */,
  "continuous" /* Continuous */
];
var VerticalJustificationValues = /* @__PURE__ */ ((VerticalJustificationValues2) => {
  VerticalJustificationValues2["Top"] = "top";
  VerticalJustificationValues2["Center"] = "center";
  VerticalJustificationValues2["Both"] = "both";
  VerticalJustificationValues2["Bottom"] = "bottom";
  return VerticalJustificationValues2;
})(VerticalJustificationValues || {});
const VerticalJustificationValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "both" /* Both */,
  "bottom" /* Bottom */
];
var TableVerticalAlignmentValues = /* @__PURE__ */ ((TableVerticalAlignmentValues2) => {
  TableVerticalAlignmentValues2["Top"] = "top";
  TableVerticalAlignmentValues2["Center"] = "center";
  TableVerticalAlignmentValues2["Bottom"] = "bottom";
  return TableVerticalAlignmentValues2;
})(TableVerticalAlignmentValues || {});
const TableVerticalAlignmentValuesArray = [
  "top" /* Top */,
  "center" /* Center */,
  "bottom" /* Bottom */
];
var DocGridValues = /* @__PURE__ */ ((DocGridValues2) => {
  DocGridValues2["Default"] = "default";
  DocGridValues2["Lines"] = "lines";
  DocGridValues2["LinesAndChars"] = "linesAndChars";
  DocGridValues2["SnapToChars"] = "snapToChars";
  return DocGridValues2;
})(DocGridValues || {});
const DocGridValuesArray = [
  "default" /* Default */,
  "lines" /* Lines */,
  "linesAndChars" /* LinesAndChars */,
  "snapToChars" /* SnapToChars */
];
var HeaderFooterValues = /* @__PURE__ */ ((HeaderFooterValues2) => {
  HeaderFooterValues2["Even"] = "even";
  HeaderFooterValues2["Default"] = "default";
  HeaderFooterValues2["First"] = "first";
  return HeaderFooterValues2;
})(HeaderFooterValues || {});
const HeaderFooterValuesArray = [
  "even" /* Even */,
  "default" /* Default */,
  "first" /* First */
];
var FootnoteEndnoteValues = /* @__PURE__ */ ((FootnoteEndnoteValues2) => {
  FootnoteEndnoteValues2["Normal"] = "normal";
  FootnoteEndnoteValues2["Separator"] = "separator";
  FootnoteEndnoteValues2["ContinuationSeparator"] = "continuationSeparator";
  FootnoteEndnoteValues2["ContinuationNotice"] = "continuationNotice";
  return FootnoteEndnoteValues2;
})(FootnoteEndnoteValues || {});
const FootnoteEndnoteValuesArray = [
  "normal" /* Normal */,
  "separator" /* Separator */,
  "continuationSeparator" /* ContinuationSeparator */,
  "continuationNotice" /* ContinuationNotice */
];
var BreakValues = /* @__PURE__ */ ((BreakValues2) => {
  BreakValues2["Page"] = "page";
  BreakValues2["Column"] = "column";
  BreakValues2["TextWrapping"] = "textWrapping";
  return BreakValues2;
})(BreakValues || {});
const BreakValuesArray = [
  "page" /* Page */,
  "column" /* Column */,
  "textWrapping" /* TextWrapping */
];
var BreakTextRestartLocationValues = /* @__PURE__ */ ((BreakTextRestartLocationValues2) => {
  BreakTextRestartLocationValues2["None"] = "none";
  BreakTextRestartLocationValues2["Left"] = "left";
  BreakTextRestartLocationValues2["Right"] = "right";
  BreakTextRestartLocationValues2["All"] = "all";
  return BreakTextRestartLocationValues2;
})(BreakTextRestartLocationValues || {});
const BreakTextRestartLocationValuesArray = [
  "none" /* None */,
  "left" /* Left */,
  "right" /* Right */,
  "all" /* All */
];
var AbsolutePositionTabAlignmentValues = /* @__PURE__ */ ((AbsolutePositionTabAlignmentValues2) => {
  AbsolutePositionTabAlignmentValues2["Left"] = "left";
  AbsolutePositionTabAlignmentValues2["Center"] = "center";
  AbsolutePositionTabAlignmentValues2["Right"] = "right";
  return AbsolutePositionTabAlignmentValues2;
})(AbsolutePositionTabAlignmentValues || {});
const AbsolutePositionTabAlignmentValuesArray = [
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */
];
var AbsolutePositionTabPositioningBaseValues = /* @__PURE__ */ ((AbsolutePositionTabPositioningBaseValues2) => {
  AbsolutePositionTabPositioningBaseValues2["Margin"] = "margin";
  AbsolutePositionTabPositioningBaseValues2["Indent"] = "indent";
  return AbsolutePositionTabPositioningBaseValues2;
})(AbsolutePositionTabPositioningBaseValues || {});
const AbsolutePositionTabPositioningBaseValuesArray = [
  "margin" /* Margin */,
  "indent" /* Indent */
];
var AbsolutePositionTabLeaderCharValues = /* @__PURE__ */ ((AbsolutePositionTabLeaderCharValues2) => {
  AbsolutePositionTabLeaderCharValues2["None"] = "none";
  AbsolutePositionTabLeaderCharValues2["Dot"] = "dot";
  AbsolutePositionTabLeaderCharValues2["Hyphen"] = "hyphen";
  AbsolutePositionTabLeaderCharValues2["Underscore"] = "underscore";
  AbsolutePositionTabLeaderCharValues2["MiddleDot"] = "middleDot";
  return AbsolutePositionTabLeaderCharValues2;
})(AbsolutePositionTabLeaderCharValues || {});
const AbsolutePositionTabLeaderCharValuesArray = [
  "none" /* None */,
  "dot" /* Dot */,
  "hyphen" /* Hyphen */,
  "underscore" /* Underscore */,
  "middleDot" /* MiddleDot */
];
var ProofingErrorValues = /* @__PURE__ */ ((ProofingErrorValues2) => {
  ProofingErrorValues2["SpellStart"] = "spellStart";
  ProofingErrorValues2["SpellEnd"] = "spellEnd";
  ProofingErrorValues2["GrammarStart"] = "gramStart";
  ProofingErrorValues2["GrammarEnd"] = "gramEnd";
  return ProofingErrorValues2;
})(ProofingErrorValues || {});
const ProofingErrorValuesArray = [
  "spellStart" /* SpellStart */,
  "spellEnd" /* SpellEnd */,
  "gramStart" /* GrammarStart */,
  "gramEnd" /* GrammarEnd */
];
var RangePermissionEditingGroupValues = /* @__PURE__ */ ((RangePermissionEditingGroupValues2) => {
  RangePermissionEditingGroupValues2["None"] = "none";
  RangePermissionEditingGroupValues2["Everyone"] = "everyone";
  RangePermissionEditingGroupValues2["Administrators"] = "administrators";
  RangePermissionEditingGroupValues2["Contributors"] = "contributors";
  RangePermissionEditingGroupValues2["Editors"] = "editors";
  RangePermissionEditingGroupValues2["Owners"] = "owners";
  RangePermissionEditingGroupValues2["Current"] = "current";
  return RangePermissionEditingGroupValues2;
})(RangePermissionEditingGroupValues || {});
const RangePermissionEditingGroupValuesArray = [
  "none" /* None */,
  "everyone" /* Everyone */,
  "administrators" /* Administrators */,
  "contributors" /* Contributors */,
  "editors" /* Editors */,
  "owners" /* Owners */,
  "current" /* Current */
];
var FontTypeHintValues = /* @__PURE__ */ ((FontTypeHintValues2) => {
  FontTypeHintValues2["Default"] = "default";
  FontTypeHintValues2["EastAsia"] = "eastAsia";
  FontTypeHintValues2["ComplexScript"] = "cs";
  return FontTypeHintValues2;
})(FontTypeHintValues || {});
const FontTypeHintValuesArray = [
  "default" /* Default */,
  "eastAsia" /* EastAsia */,
  "cs" /* ComplexScript */
];
var ThemeFontValues = /* @__PURE__ */ ((ThemeFontValues2) => {
  ThemeFontValues2["MajorEastAsia"] = "majorEastAsia";
  ThemeFontValues2["MajorBidi"] = "majorBidi";
  ThemeFontValues2["MajorAscii"] = "majorAscii";
  ThemeFontValues2["MajorHighAnsi"] = "majorHAnsi";
  ThemeFontValues2["MinorEastAsia"] = "minorEastAsia";
  ThemeFontValues2["MinorBidi"] = "minorBidi";
  ThemeFontValues2["MinorAscii"] = "minorAscii";
  ThemeFontValues2["MinorHighAnsi"] = "minorHAnsi";
  return ThemeFontValues2;
})(ThemeFontValues || {});
const ThemeFontValuesArray = [
  "majorEastAsia" /* MajorEastAsia */,
  "majorBidi" /* MajorBidi */,
  "majorAscii" /* MajorAscii */,
  "majorHAnsi" /* MajorHighAnsi */,
  "minorEastAsia" /* MinorEastAsia */,
  "minorBidi" /* MinorBidi */,
  "minorAscii" /* MinorAscii */,
  "minorHAnsi" /* MinorHighAnsi */
];
var RubyAlignValues = /* @__PURE__ */ ((RubyAlignValues2) => {
  RubyAlignValues2["Center"] = "center";
  RubyAlignValues2["DistributeLetter"] = "distributeLetter";
  RubyAlignValues2["DistributeSpace"] = "distributeSpace";
  RubyAlignValues2["Left"] = "left";
  RubyAlignValues2["Right"] = "right";
  RubyAlignValues2["RightVertical"] = "rightVertical";
  return RubyAlignValues2;
})(RubyAlignValues || {});
const RubyAlignValuesArray = [
  "center" /* Center */,
  "distributeLetter" /* DistributeLetter */,
  "distributeSpace" /* DistributeSpace */,
  "left" /* Left */,
  "right" /* Right */,
  "rightVertical" /* RightVertical */
];
var LockingValues = /* @__PURE__ */ ((LockingValues2) => {
  LockingValues2["SdtLocked"] = "sdtLocked";
  LockingValues2["ContentLocked"] = "contentLocked";
  LockingValues2["Unlocked"] = "unlocked";
  LockingValues2["SdtContentLocked"] = "sdtContentLocked";
  return LockingValues2;
})(LockingValues || {});
const LockingValuesArray = [
  "sdtLocked" /* SdtLocked */,
  "contentLocked" /* ContentLocked */,
  "unlocked" /* Unlocked */,
  "sdtContentLocked" /* SdtContentLocked */
];
var DateFormatValues = /* @__PURE__ */ ((DateFormatValues2) => {
  DateFormatValues2["Text"] = "text";
  DateFormatValues2["Date"] = "date";
  DateFormatValues2["DateTime"] = "dateTime";
  return DateFormatValues2;
})(DateFormatValues || {});
const DateFormatValuesArray = [
  "text" /* Text */,
  "date" /* Date */,
  "dateTime" /* DateTime */
];
var TableWidthUnitValues = /* @__PURE__ */ ((TableWidthUnitValues2) => {
  TableWidthUnitValues2["Nil"] = "nil";
  TableWidthUnitValues2["Pct"] = "pct";
  TableWidthUnitValues2["Dxa"] = "dxa";
  TableWidthUnitValues2["Auto"] = "auto";
  return TableWidthUnitValues2;
})(TableWidthUnitValues || {});
const TableWidthUnitValuesArray = [
  "nil" /* Nil */,
  "pct" /* Pct */,
  "dxa" /* Dxa */,
  "auto" /* Auto */
];
var TableWidthValues = /* @__PURE__ */ ((TableWidthValues2) => {
  TableWidthValues2["Nil"] = "nil";
  TableWidthValues2["Dxa"] = "dxa";
  return TableWidthValues2;
})(TableWidthValues || {});
const TableWidthValuesArray = [
  "nil" /* Nil */,
  "dxa" /* Dxa */
];
var MergedCellValues = /* @__PURE__ */ ((MergedCellValues2) => {
  MergedCellValues2["Continue"] = "continue";
  MergedCellValues2["Restart"] = "restart";
  return MergedCellValues2;
})(MergedCellValues || {});
const MergedCellValuesArray = [
  "continue" /* Continue */,
  "restart" /* Restart */
];
var TableLayoutValues = /* @__PURE__ */ ((TableLayoutValues2) => {
  TableLayoutValues2["Fixed"] = "fixed";
  TableLayoutValues2["Autofit"] = "autofit";
  return TableLayoutValues2;
})(TableLayoutValues || {});
const TableLayoutValuesArray = [
  "fixed" /* Fixed */,
  "autofit" /* Autofit */
];
var TableOverlapValues = /* @__PURE__ */ ((TableOverlapValues2) => {
  TableOverlapValues2["Never"] = "never";
  TableOverlapValues2["Overlap"] = "overlap";
  return TableOverlapValues2;
})(TableOverlapValues || {});
const TableOverlapValuesArray = [
  "never" /* Never */,
  "overlap" /* Overlap */
];
var FootnotePositionValues = /* @__PURE__ */ ((FootnotePositionValues2) => {
  FootnotePositionValues2["PageBottom"] = "pageBottom";
  FootnotePositionValues2["BeneathText"] = "beneathText";
  FootnotePositionValues2["SectionEnd"] = "sectEnd";
  return FootnotePositionValues2;
})(FootnotePositionValues || {});
const FootnotePositionValuesArray = [
  "pageBottom" /* PageBottom */,
  "beneathText" /* BeneathText */,
  "sectEnd" /* SectionEnd */
];
var EndnotePositionValues = /* @__PURE__ */ ((EndnotePositionValues2) => {
  EndnotePositionValues2["SectionEnd"] = "sectEnd";
  EndnotePositionValues2["DocumentEnd"] = "docEnd";
  return EndnotePositionValues2;
})(EndnotePositionValues || {});
const EndnotePositionValuesArray = [
  "sectEnd" /* SectionEnd */,
  "docEnd" /* DocumentEnd */
];
var RestartNumberValues = /* @__PURE__ */ ((RestartNumberValues2) => {
  RestartNumberValues2["Continuous"] = "continuous";
  RestartNumberValues2["EachSection"] = "eachSect";
  RestartNumberValues2["EachPage"] = "eachPage";
  return RestartNumberValues2;
})(RestartNumberValues || {});
const RestartNumberValuesArray = [
  "continuous" /* Continuous */,
  "eachSect" /* EachSection */,
  "eachPage" /* EachPage */
];
var MailMergeSourceValues = /* @__PURE__ */ ((MailMergeSourceValues2) => {
  MailMergeSourceValues2["Database"] = "database";
  MailMergeSourceValues2["AddressBook"] = "addressBook";
  MailMergeSourceValues2["Document1"] = "document1";
  MailMergeSourceValues2["Document2"] = "document2";
  MailMergeSourceValues2["Text"] = "text";
  MailMergeSourceValues2["Email"] = "email";
  MailMergeSourceValues2["Native"] = "native";
  MailMergeSourceValues2["Legacy"] = "legacy";
  MailMergeSourceValues2["Master"] = "master";
  return MailMergeSourceValues2;
})(MailMergeSourceValues || {});
const MailMergeSourceValuesArray = [
  "database" /* Database */,
  "addressBook" /* AddressBook */,
  "document1" /* Document1 */,
  "document2" /* Document2 */,
  "text" /* Text */,
  "email" /* Email */,
  "native" /* Native */,
  "legacy" /* Legacy */,
  "master" /* Master */
];
var TargetScreenSizeValues = /* @__PURE__ */ ((TargetScreenSizeValues2) => {
  TargetScreenSizeValues2["Sz544x376"] = "544x376";
  TargetScreenSizeValues2["Sz640x480"] = "640x480";
  TargetScreenSizeValues2["Sz720x512"] = "720x512";
  TargetScreenSizeValues2["Sz800x600"] = "800x600";
  TargetScreenSizeValues2["Sz1024x768"] = "1024x768";
  TargetScreenSizeValues2["Sz1152x882"] = "1152x882";
  TargetScreenSizeValues2["Sz1152x900"] = "1152x900";
  TargetScreenSizeValues2["Sz1280x1024"] = "1280x1024";
  TargetScreenSizeValues2["Sz1600x1200"] = "1600x1200";
  TargetScreenSizeValues2["Sz1800x1440"] = "1800x1440";
  TargetScreenSizeValues2["Sz1920x1200"] = "1920x1200";
  return TargetScreenSizeValues2;
})(TargetScreenSizeValues || {});
const TargetScreenSizeValuesArray = [
  "544x376" /* Sz544x376 */,
  "640x480" /* Sz640x480 */,
  "720x512" /* Sz720x512 */,
  "800x600" /* Sz800x600 */,
  "1024x768" /* Sz1024x768 */,
  "1152x882" /* Sz1152x882 */,
  "1152x900" /* Sz1152x900 */,
  "1280x1024" /* Sz1280x1024 */,
  "1600x1200" /* Sz1600x1200 */,
  "1800x1440" /* Sz1800x1440 */,
  "1920x1200" /* Sz1920x1200 */
];
var CharacterSpacingValues = /* @__PURE__ */ ((CharacterSpacingValues2) => {
  CharacterSpacingValues2["DoNotCompress"] = "doNotCompress";
  CharacterSpacingValues2["CompressPunctuation"] = "compressPunctuation";
  CharacterSpacingValues2["CompressPunctuationAndJapaneseKana"] = "compressPunctuationAndJapaneseKana";
  return CharacterSpacingValues2;
})(CharacterSpacingValues || {});
const CharacterSpacingValuesArray = [
  "doNotCompress" /* DoNotCompress */,
  "compressPunctuation" /* CompressPunctuation */,
  "compressPunctuationAndJapaneseKana" /* CompressPunctuationAndJapaneseKana */
];
var ColorSchemeIndexValues = /* @__PURE__ */ ((ColorSchemeIndexValues2) => {
  ColorSchemeIndexValues2["Dark1"] = "dark1";
  ColorSchemeIndexValues2["Light1"] = "light1";
  ColorSchemeIndexValues2["Dark2"] = "dark2";
  ColorSchemeIndexValues2["Light2"] = "light2";
  ColorSchemeIndexValues2["Accent1"] = "accent1";
  ColorSchemeIndexValues2["Accent2"] = "accent2";
  ColorSchemeIndexValues2["Accent3"] = "accent3";
  ColorSchemeIndexValues2["Accent4"] = "accent4";
  ColorSchemeIndexValues2["Accent5"] = "accent5";
  ColorSchemeIndexValues2["Accent6"] = "accent6";
  ColorSchemeIndexValues2["Hyperlink"] = "hyperlink";
  ColorSchemeIndexValues2["FollowedHyperlink"] = "followedHyperlink";
  return ColorSchemeIndexValues2;
})(ColorSchemeIndexValues || {});
const ColorSchemeIndexValuesArray = [
  "dark1" /* Dark1 */,
  "light1" /* Light1 */,
  "dark2" /* Dark2 */,
  "light2" /* Light2 */,
  "accent1" /* Accent1 */,
  "accent2" /* Accent2 */,
  "accent3" /* Accent3 */,
  "accent4" /* Accent4 */,
  "accent5" /* Accent5 */,
  "accent6" /* Accent6 */,
  "hyperlink" /* Hyperlink */,
  "followedHyperlink" /* FollowedHyperlink */
];
var FrameScrollbarVisibilityValues = /* @__PURE__ */ ((FrameScrollbarVisibilityValues2) => {
  FrameScrollbarVisibilityValues2["On"] = "on";
  FrameScrollbarVisibilityValues2["Off"] = "off";
  FrameScrollbarVisibilityValues2["Auto"] = "auto";
  return FrameScrollbarVisibilityValues2;
})(FrameScrollbarVisibilityValues || {});
const FrameScrollbarVisibilityValuesArray = [
  "on" /* On */,
  "off" /* Off */,
  "auto" /* Auto */
];
var FrameLayoutValues = /* @__PURE__ */ ((FrameLayoutValues2) => {
  FrameLayoutValues2["Rows"] = "rows";
  FrameLayoutValues2["Columns"] = "cols";
  FrameLayoutValues2["None"] = "none";
  return FrameLayoutValues2;
})(FrameLayoutValues || {});
const FrameLayoutValuesArray = [
  "rows" /* Rows */,
  "cols" /* Columns */,
  "none" /* None */
];
var LevelSuffixValues = /* @__PURE__ */ ((LevelSuffixValues2) => {
  LevelSuffixValues2["Tab"] = "tab";
  LevelSuffixValues2["Space"] = "space";
  LevelSuffixValues2["Nothing"] = "nothing";
  return LevelSuffixValues2;
})(LevelSuffixValues || {});
const LevelSuffixValuesArray = [
  "tab" /* Tab */,
  "space" /* Space */,
  "nothing" /* Nothing */
];
var MultiLevelValues = /* @__PURE__ */ ((MultiLevelValues2) => {
  MultiLevelValues2["SingleLevel"] = "singleLevel";
  MultiLevelValues2["Multilevel"] = "multilevel";
  MultiLevelValues2["HybridMultilevel"] = "hybridMultilevel";
  return MultiLevelValues2;
})(MultiLevelValues || {});
const MultiLevelValuesArray = [
  "singleLevel" /* SingleLevel */,
  "multilevel" /* Multilevel */,
  "hybridMultilevel" /* HybridMultilevel */
];
var TableStyleOverrideValues = /* @__PURE__ */ ((TableStyleOverrideValues2) => {
  TableStyleOverrideValues2["WholeTable"] = "wholeTable";
  TableStyleOverrideValues2["FirstRow"] = "firstRow";
  TableStyleOverrideValues2["LastRow"] = "lastRow";
  TableStyleOverrideValues2["FirstColumn"] = "firstCol";
  TableStyleOverrideValues2["LastColumn"] = "lastCol";
  TableStyleOverrideValues2["Band1Vertical"] = "band1Vert";
  TableStyleOverrideValues2["Band2Vertical"] = "band2Vert";
  TableStyleOverrideValues2["Band1Horizontal"] = "band1Horz";
  TableStyleOverrideValues2["Band2Horizontal"] = "band2Horz";
  TableStyleOverrideValues2["NorthEastCell"] = "neCell";
  TableStyleOverrideValues2["NorthWestCell"] = "nwCell";
  TableStyleOverrideValues2["SouthEastCell"] = "seCell";
  TableStyleOverrideValues2["SouthWestCell"] = "swCell";
  return TableStyleOverrideValues2;
})(TableStyleOverrideValues || {});
const TableStyleOverrideValuesArray = [
  "wholeTable" /* WholeTable */,
  "firstRow" /* FirstRow */,
  "lastRow" /* LastRow */,
  "firstCol" /* FirstColumn */,
  "lastCol" /* LastColumn */,
  "band1Vert" /* Band1Vertical */,
  "band2Vert" /* Band2Vertical */,
  "band1Horz" /* Band1Horizontal */,
  "band2Horz" /* Band2Horizontal */,
  "neCell" /* NorthEastCell */,
  "nwCell" /* NorthWestCell */,
  "seCell" /* SouthEastCell */,
  "swCell" /* SouthWestCell */
];
var StyleValues = /* @__PURE__ */ ((StyleValues2) => {
  StyleValues2["Paragraph"] = "paragraph";
  StyleValues2["Character"] = "character";
  StyleValues2["Table"] = "table";
  StyleValues2["Numbering"] = "numbering";
  return StyleValues2;
})(StyleValues || {});
const StyleValuesArray = [
  "paragraph" /* Paragraph */,
  "character" /* Character */,
  "table" /* Table */,
  "numbering" /* Numbering */
];
var FontFamilyValues = /* @__PURE__ */ ((FontFamilyValues2) => {
  FontFamilyValues2["Decorative"] = "decorative";
  FontFamilyValues2["Modern"] = "modern";
  FontFamilyValues2["Roman"] = "roman";
  FontFamilyValues2["Script"] = "script";
  FontFamilyValues2["Swiss"] = "swiss";
  FontFamilyValues2["Auto"] = "auto";
  return FontFamilyValues2;
})(FontFamilyValues || {});
const FontFamilyValuesArray = [
  "decorative" /* Decorative */,
  "modern" /* Modern */,
  "roman" /* Roman */,
  "script" /* Script */,
  "swiss" /* Swiss */,
  "auto" /* Auto */
];
var FontPitchValues = /* @__PURE__ */ ((FontPitchValues2) => {
  FontPitchValues2["Fixed"] = "fixed";
  FontPitchValues2["Variable"] = "variable";
  FontPitchValues2["Default"] = "default";
  return FontPitchValues2;
})(FontPitchValues || {});
const FontPitchValuesArray = [
  "fixed" /* Fixed */,
  "variable" /* Variable */,
  "default" /* Default */
];
var ThemeColorValues = /* @__PURE__ */ ((ThemeColorValues2) => {
  ThemeColorValues2["Dark1"] = "dark1";
  ThemeColorValues2["Light1"] = "light1";
  ThemeColorValues2["Dark2"] = "dark2";
  ThemeColorValues2["Light2"] = "light2";
  ThemeColorValues2["Accent1"] = "accent1";
  ThemeColorValues2["Accent2"] = "accent2";
  ThemeColorValues2["Accent3"] = "accent3";
  ThemeColorValues2["Accent4"] = "accent4";
  ThemeColorValues2["Accent5"] = "accent5";
  ThemeColorValues2["Accent6"] = "accent6";
  ThemeColorValues2["Hyperlink"] = "hyperlink";
  ThemeColorValues2["FollowedHyperlink"] = "followedHyperlink";
  ThemeColorValues2["None"] = "none";
  ThemeColorValues2["Background1"] = "background1";
  ThemeColorValues2["Text1"] = "text1";
  ThemeColorValues2["Background2"] = "background2";
  ThemeColorValues2["Text2"] = "text2";
  return ThemeColorValues2;
})(ThemeColorValues || {});
const ThemeColorValuesArray = [
  "dark1" /* Dark1 */,
  "light1" /* Light1 */,
  "dark2" /* Dark2 */,
  "light2" /* Light2 */,
  "accent1" /* Accent1 */,
  "accent2" /* Accent2 */,
  "accent3" /* Accent3 */,
  "accent4" /* Accent4 */,
  "accent5" /* Accent5 */,
  "accent6" /* Accent6 */,
  "hyperlink" /* Hyperlink */,
  "followedHyperlink" /* FollowedHyperlink */,
  "none" /* None */,
  "background1" /* Background1 */,
  "text1" /* Text1 */,
  "background2" /* Background2 */,
  "text2" /* Text2 */
];
var DocPartBehaviorValues = /* @__PURE__ */ ((DocPartBehaviorValues2) => {
  DocPartBehaviorValues2["Content"] = "content";
  DocPartBehaviorValues2["Paragraph"] = "p";
  DocPartBehaviorValues2["Page"] = "pg";
  return DocPartBehaviorValues2;
})(DocPartBehaviorValues || {});
const DocPartBehaviorValuesArray = [
  "content" /* Content */,
  "p" /* Paragraph */,
  "pg" /* Page */
];
var DocPartValues = /* @__PURE__ */ ((DocPartValues2) => {
  DocPartValues2["None"] = "none";
  DocPartValues2["Normal"] = "normal";
  DocPartValues2["AutoExp"] = "autoExp";
  DocPartValues2["Toolbar"] = "toolbar";
  DocPartValues2["Speller"] = "speller";
  DocPartValues2["FormField"] = "formFld";
  DocPartValues2["SdtPlaceholder"] = "bbPlcHdr";
  return DocPartValues2;
})(DocPartValues || {});
const DocPartValuesArray = [
  "none" /* None */,
  "normal" /* Normal */,
  "autoExp" /* AutoExp */,
  "toolbar" /* Toolbar */,
  "speller" /* Speller */,
  "formFld" /* FormField */,
  "bbPlcHdr" /* SdtPlaceholder */
];
var DocPartGalleryValues = /* @__PURE__ */ ((DocPartGalleryValues2) => {
  DocPartGalleryValues2["Placeholder"] = "placeholder";
  DocPartGalleryValues2["Any"] = "any";
  DocPartGalleryValues2["Default"] = "default";
  DocPartGalleryValues2["DocumentPart"] = "docParts";
  DocPartGalleryValues2["CoverPage"] = "coverPg";
  DocPartGalleryValues2["Equation"] = "eq";
  DocPartGalleryValues2["Footer"] = "ftrs";
  DocPartGalleryValues2["Header"] = "hdrs";
  DocPartGalleryValues2["PageNumber"] = "pgNum";
  DocPartGalleryValues2["Table"] = "tbls";
  DocPartGalleryValues2["WaterMark"] = "watermarks";
  DocPartGalleryValues2["AutoText"] = "autoTxt";
  DocPartGalleryValues2["TextBox"] = "txtBox";
  DocPartGalleryValues2["PageNumberTop"] = "pgNumT";
  DocPartGalleryValues2["PageNumberBottom"] = "pgNumB";
  DocPartGalleryValues2["PageNumberMargins"] = "pgNumMargins";
  DocPartGalleryValues2["TableOfContents"] = "tblOfContents";
  DocPartGalleryValues2["Bibliography"] = "bib";
  DocPartGalleryValues2["CustomQuickParts"] = "custQuickParts";
  DocPartGalleryValues2["CustomCoverPage"] = "custCoverPg";
  DocPartGalleryValues2["CustomEquation"] = "custEq";
  DocPartGalleryValues2["CustomFooter"] = "custFtrs";
  DocPartGalleryValues2["CustomHeaders"] = "custHdrs";
  DocPartGalleryValues2["CustomPageNumber"] = "custPgNum";
  DocPartGalleryValues2["CustomTable"] = "custTbls";
  DocPartGalleryValues2["CustomWatermark"] = "custWatermarks";
  DocPartGalleryValues2["CustomAutoText"] = "custAutoTxt";
  DocPartGalleryValues2["CustomTextBox"] = "custTxtBox";
  DocPartGalleryValues2["CustomPageNumberTop"] = "custPgNumT";
  DocPartGalleryValues2["CustomPageNumberBottom"] = "custPgNumB";
  DocPartGalleryValues2["CustomPageNumberMargin"] = "custPgNumMargins";
  DocPartGalleryValues2["CustomTableOfContents"] = "custTblOfContents";
  DocPartGalleryValues2["CustomBibliography"] = "custBib";
  DocPartGalleryValues2["Custom1"] = "custom1";
  DocPartGalleryValues2["Custom2"] = "custom2";
  DocPartGalleryValues2["Custom3"] = "custom3";
  DocPartGalleryValues2["Custom4"] = "custom4";
  DocPartGalleryValues2["Custom5"] = "custom5";
  return DocPartGalleryValues2;
})(DocPartGalleryValues || {});
const DocPartGalleryValuesArray = [
  "placeholder" /* Placeholder */,
  "any" /* Any */,
  "default" /* Default */,
  "docParts" /* DocumentPart */,
  "coverPg" /* CoverPage */,
  "eq" /* Equation */,
  "ftrs" /* Footer */,
  "hdrs" /* Header */,
  "pgNum" /* PageNumber */,
  "tbls" /* Table */,
  "watermarks" /* WaterMark */,
  "autoTxt" /* AutoText */,
  "txtBox" /* TextBox */,
  "pgNumT" /* PageNumberTop */,
  "pgNumB" /* PageNumberBottom */,
  "pgNumMargins" /* PageNumberMargins */,
  "tblOfContents" /* TableOfContents */,
  "bib" /* Bibliography */,
  "custQuickParts" /* CustomQuickParts */,
  "custCoverPg" /* CustomCoverPage */,
  "custEq" /* CustomEquation */,
  "custFtrs" /* CustomFooter */,
  "custHdrs" /* CustomHeaders */,
  "custPgNum" /* CustomPageNumber */,
  "custTbls" /* CustomTable */,
  "custWatermarks" /* CustomWatermark */,
  "custAutoTxt" /* CustomAutoText */,
  "custTxtBox" /* CustomTextBox */,
  "custPgNumT" /* CustomPageNumberTop */,
  "custPgNumB" /* CustomPageNumberBottom */,
  "custPgNumMargins" /* CustomPageNumberMargin */,
  "custTblOfContents" /* CustomTableOfContents */,
  "custBib" /* CustomBibliography */,
  "custom1" /* Custom1 */,
  "custom2" /* Custom2 */,
  "custom3" /* Custom3 */,
  "custom4" /* Custom4 */,
  "custom5" /* Custom5 */
];
var CaptionPositionValues = /* @__PURE__ */ ((CaptionPositionValues2) => {
  CaptionPositionValues2["Above"] = "above";
  CaptionPositionValues2["Below"] = "below";
  return CaptionPositionValues2;
})(CaptionPositionValues || {});
const CaptionPositionValuesArray = [
  "above" /* Above */,
  "below" /* Below */
];
var LevelJustificationValues = /* @__PURE__ */ ((LevelJustificationValues2) => {
  LevelJustificationValues2["Left"] = "left";
  LevelJustificationValues2["Center"] = "center";
  LevelJustificationValues2["Right"] = "right";
  return LevelJustificationValues2;
})(LevelJustificationValues || {});
const LevelJustificationValuesArray = [
  "left" /* Left */,
  "center" /* Center */,
  "right" /* Right */
];
var ShadingPatternValues = /* @__PURE__ */ ((ShadingPatternValues2) => {
  ShadingPatternValues2["Nil"] = "nil";
  ShadingPatternValues2["Clear"] = "clear";
  ShadingPatternValues2["Solid"] = "solid";
  ShadingPatternValues2["HorizontalStripe"] = "horzStripe";
  ShadingPatternValues2["VerticalStripe"] = "vertStripe";
  ShadingPatternValues2["ReverseDiagonalStripe"] = "reverseDiagStripe";
  ShadingPatternValues2["DiagonalStripe"] = "diagStripe";
  ShadingPatternValues2["HorizontalCross"] = "horzCross";
  ShadingPatternValues2["DiagonalCross"] = "diagCross";
  ShadingPatternValues2["ThinHorizontalStripe"] = "thinHorzStripe";
  ShadingPatternValues2["ThinVerticalStripe"] = "thinVertStripe";
  ShadingPatternValues2["ThinReverseDiagonalStripe"] = "thinReverseDiagStripe";
  ShadingPatternValues2["ThinDiagonalStripe"] = "thinDiagStripe";
  ShadingPatternValues2["ThinHorizontalCross"] = "thinHorzCross";
  ShadingPatternValues2["ThinDiagonalCross"] = "thinDiagCross";
  ShadingPatternValues2["Percent5"] = "pct5";
  ShadingPatternValues2["Percent10"] = "pct10";
  ShadingPatternValues2["Percent12"] = "pct12";
  ShadingPatternValues2["Percent15"] = "pct15";
  ShadingPatternValues2["Percent20"] = "pct20";
  ShadingPatternValues2["Percent25"] = "pct25";
  ShadingPatternValues2["Percent30"] = "pct30";
  ShadingPatternValues2["Percent35"] = "pct35";
  ShadingPatternValues2["Percent37"] = "pct37";
  ShadingPatternValues2["Percent40"] = "pct40";
  ShadingPatternValues2["Percent45"] = "pct45";
  ShadingPatternValues2["Percent50"] = "pct50";
  ShadingPatternValues2["Percent55"] = "pct55";
  ShadingPatternValues2["Percent60"] = "pct60";
  ShadingPatternValues2["Percent62"] = "pct62";
  ShadingPatternValues2["Percent65"] = "pct65";
  ShadingPatternValues2["Percent70"] = "pct70";
  ShadingPatternValues2["Percent75"] = "pct75";
  ShadingPatternValues2["Percent80"] = "pct80";
  ShadingPatternValues2["Percent85"] = "pct85";
  ShadingPatternValues2["Percent87"] = "pct87";
  ShadingPatternValues2["Percent90"] = "pct90";
  ShadingPatternValues2["Percent95"] = "pct95";
  return ShadingPatternValues2;
})(ShadingPatternValues || {});
const ShadingPatternValuesArray = [
  "nil" /* Nil */,
  "clear" /* Clear */,
  "solid" /* Solid */,
  "horzStripe" /* HorizontalStripe */,
  "vertStripe" /* VerticalStripe */,
  "reverseDiagStripe" /* ReverseDiagonalStripe */,
  "diagStripe" /* DiagonalStripe */,
  "horzCross" /* HorizontalCross */,
  "diagCross" /* DiagonalCross */,
  "thinHorzStripe" /* ThinHorizontalStripe */,
  "thinVertStripe" /* ThinVerticalStripe */,
  "thinReverseDiagStripe" /* ThinReverseDiagonalStripe */,
  "thinDiagStripe" /* ThinDiagonalStripe */,
  "thinHorzCross" /* ThinHorizontalCross */,
  "thinDiagCross" /* ThinDiagonalCross */,
  "pct5" /* Percent5 */,
  "pct10" /* Percent10 */,
  "pct12" /* Percent12 */,
  "pct15" /* Percent15 */,
  "pct20" /* Percent20 */,
  "pct25" /* Percent25 */,
  "pct30" /* Percent30 */,
  "pct35" /* Percent35 */,
  "pct37" /* Percent37 */,
  "pct40" /* Percent40 */,
  "pct45" /* Percent45 */,
  "pct50" /* Percent50 */,
  "pct55" /* Percent55 */,
  "pct60" /* Percent60 */,
  "pct62" /* Percent62 */,
  "pct65" /* Percent65 */,
  "pct70" /* Percent70 */,
  "pct75" /* Percent75 */,
  "pct80" /* Percent80 */,
  "pct85" /* Percent85 */,
  "pct87" /* Percent87 */,
  "pct90" /* Percent90 */,
  "pct95" /* Percent95 */
];
var StylePaneSortMethodsValues = /* @__PURE__ */ ((StylePaneSortMethodsValues2) => {
  StylePaneSortMethodsValues2["Zero"] = "0000";
  StylePaneSortMethodsValues2["Name"] = "name";
  StylePaneSortMethodsValues2["One"] = "0001";
  StylePaneSortMethodsValues2["Priority"] = "priority";
  StylePaneSortMethodsValues2["Two"] = "0002";
  StylePaneSortMethodsValues2["Font"] = "font";
  StylePaneSortMethodsValues2["Three"] = "0003";
  StylePaneSortMethodsValues2["BasedOn"] = "basedOn";
  StylePaneSortMethodsValues2["Four"] = "0004";
  StylePaneSortMethodsValues2["Type"] = "type";
  StylePaneSortMethodsValues2["Five"] = "0005";
  StylePaneSortMethodsValues2["Default"] = "default";
  return StylePaneSortMethodsValues2;
})(StylePaneSortMethodsValues || {});
const StylePaneSortMethodsValuesArray = [
  "0000" /* Zero */,
  "name" /* Name */,
  "0001" /* One */,
  "priority" /* Priority */,
  "0002" /* Two */,
  "font" /* Font */,
  "0003" /* Three */,
  "basedOn" /* BasedOn */,
  "0004" /* Four */,
  "type" /* Type */,
  "0005" /* Five */,
  "default" /* Default */
];
var DirectionValues = /* @__PURE__ */ ((DirectionValues2) => {
  DirectionValues2["Ltr"] = "ltr";
  DirectionValues2["Rtl"] = "rtl";
  return DirectionValues2;
})(DirectionValues || {});
const DirectionValuesArray = [
  "ltr" /* Ltr */,
  "rtl" /* Rtl */
];
var CalendarValues = /* @__PURE__ */ ((CalendarValues2) => {
  CalendarValues2["Gregorian"] = "gregorian";
  CalendarValues2["Hijri"] = "hijri";
  CalendarValues2["Umalqura"] = "umalqura";
  CalendarValues2["Hebrew"] = "hebrew";
  CalendarValues2["Taiwan"] = "taiwan";
  CalendarValues2["Japan"] = "japan";
  CalendarValues2["Thai"] = "thai";
  CalendarValues2["Korea"] = "korea";
  CalendarValues2["Saka"] = "saka";
  CalendarValues2["GregorianTransliteratedEnglish"] = "gregorianXlitEnglish";
  CalendarValues2["GregorianTransliteratedFrench"] = "gregorianXlitFrench";
  CalendarValues2["GregorianUs"] = "gregorianUs";
  CalendarValues2["GregorianMeFrench"] = "gregorianMeFrench";
  CalendarValues2["GregorianArabic"] = "gregorianArabic";
  CalendarValues2["None"] = "none";
  return CalendarValues2;
})(CalendarValues || {});
const CalendarValuesArray = [
  "gregorian" /* Gregorian */,
  "hijri" /* Hijri */,
  "umalqura" /* Umalqura */,
  "hebrew" /* Hebrew */,
  "taiwan" /* Taiwan */,
  "japan" /* Japan */,
  "thai" /* Thai */,
  "korea" /* Korea */,
  "saka" /* Saka */,
  "gregorianXlitEnglish" /* GregorianTransliteratedEnglish */,
  "gregorianXlitFrench" /* GregorianTransliteratedFrench */,
  "gregorianUs" /* GregorianUs */,
  "gregorianMeFrench" /* GregorianMeFrench */,
  "gregorianArabic" /* GregorianArabic */,
  "none" /* None */
];
var NumberFormatValues = /* @__PURE__ */ ((NumberFormatValues2) => {
  NumberFormatValues2["Decimal"] = "decimal";
  NumberFormatValues2["UpperRoman"] = "upperRoman";
  NumberFormatValues2["LowerRoman"] = "lowerRoman";
  NumberFormatValues2["UpperLetter"] = "upperLetter";
  NumberFormatValues2["LowerLetter"] = "lowerLetter";
  NumberFormatValues2["Ordinal"] = "ordinal";
  NumberFormatValues2["CardinalText"] = "cardinalText";
  NumberFormatValues2["OrdinalText"] = "ordinalText";
  NumberFormatValues2["Hex"] = "hex";
  NumberFormatValues2["Chicago"] = "chicago";
  NumberFormatValues2["IdeographDigital"] = "ideographDigital";
  NumberFormatValues2["JapaneseCounting"] = "japaneseCounting";
  NumberFormatValues2["Aiueo"] = "aiueo";
  NumberFormatValues2["Iroha"] = "iroha";
  NumberFormatValues2["DecimalFullWidth"] = "decimalFullWidth";
  NumberFormatValues2["DecimalHalfWidth"] = "decimalHalfWidth";
  NumberFormatValues2["JapaneseLegal"] = "japaneseLegal";
  NumberFormatValues2["JapaneseDigitalTenThousand"] = "japaneseDigitalTenThousand";
  NumberFormatValues2["DecimalEnclosedCircle"] = "decimalEnclosedCircle";
  NumberFormatValues2["DecimalFullWidth2"] = "decimalFullWidth2";
  NumberFormatValues2["AiueoFullWidth"] = "aiueoFullWidth";
  NumberFormatValues2["IrohaFullWidth"] = "irohaFullWidth";
  NumberFormatValues2["DecimalZero"] = "decimalZero";
  NumberFormatValues2["Bullet"] = "bullet";
  NumberFormatValues2["Ganada"] = "ganada";
  NumberFormatValues2["Chosung"] = "chosung";
  NumberFormatValues2["DecimalEnclosedFullstop"] = "decimalEnclosedFullstop";
  NumberFormatValues2["DecimalEnclosedParen"] = "decimalEnclosedParen";
  NumberFormatValues2["DecimalEnclosedCircleChinese"] = "decimalEnclosedCircleChinese";
  NumberFormatValues2["IdeographEnclosedCircle"] = "ideographEnclosedCircle";
  NumberFormatValues2["IdeographTraditional"] = "ideographTraditional";
  NumberFormatValues2["IdeographZodiac"] = "ideographZodiac";
  NumberFormatValues2["IdeographZodiacTraditional"] = "ideographZodiacTraditional";
  NumberFormatValues2["TaiwaneseCounting"] = "taiwaneseCounting";
  NumberFormatValues2["IdeographLegalTraditional"] = "ideographLegalTraditional";
  NumberFormatValues2["TaiwaneseCountingThousand"] = "taiwaneseCountingThousand";
  NumberFormatValues2["TaiwaneseDigital"] = "taiwaneseDigital";
  NumberFormatValues2["ChineseCounting"] = "chineseCounting";
  NumberFormatValues2["ChineseLegalSimplified"] = "chineseLegalSimplified";
  NumberFormatValues2["ChineseCountingThousand"] = "chineseCountingThousand";
  NumberFormatValues2["KoreanDigital"] = "koreanDigital";
  NumberFormatValues2["KoreanCounting"] = "koreanCounting";
  NumberFormatValues2["KoreanLegal"] = "koreanLegal";
  NumberFormatValues2["KoreanDigital2"] = "koreanDigital2";
  NumberFormatValues2["VietnameseCounting"] = "vietnameseCounting";
  NumberFormatValues2["RussianLower"] = "russianLower";
  NumberFormatValues2["RussianUpper"] = "russianUpper";
  NumberFormatValues2["None"] = "none";
  NumberFormatValues2["NumberInDash"] = "numberInDash";
  NumberFormatValues2["Hebrew1"] = "hebrew1";
  NumberFormatValues2["Hebrew2"] = "hebrew2";
  NumberFormatValues2["ArabicAlpha"] = "arabicAlpha";
  NumberFormatValues2["ArabicAbjad"] = "arabicAbjad";
  NumberFormatValues2["HindiVowels"] = "hindiVowels";
  NumberFormatValues2["HindiConsonants"] = "hindiConsonants";
  NumberFormatValues2["HindiNumbers"] = "hindiNumbers";
  NumberFormatValues2["HindiCounting"] = "hindiCounting";
  NumberFormatValues2["ThaiLetters"] = "thaiLetters";
  NumberFormatValues2["ThaiNumbers"] = "thaiNumbers";
  NumberFormatValues2["ThaiCounting"] = "thaiCounting";
  NumberFormatValues2["BahtText"] = "bahtText";
  NumberFormatValues2["DollarText"] = "dollarText";
  NumberFormatValues2["Custom"] = "custom";
  return NumberFormatValues2;
})(NumberFormatValues || {});
const NumberFormatValuesArray = [
  "decimal" /* Decimal */,
  "upperRoman" /* UpperRoman */,
  "lowerRoman" /* LowerRoman */,
  "upperLetter" /* UpperLetter */,
  "lowerLetter" /* LowerLetter */,
  "ordinal" /* Ordinal */,
  "cardinalText" /* CardinalText */,
  "ordinalText" /* OrdinalText */,
  "hex" /* Hex */,
  "chicago" /* Chicago */,
  "ideographDigital" /* IdeographDigital */,
  "japaneseCounting" /* JapaneseCounting */,
  "aiueo" /* Aiueo */,
  "iroha" /* Iroha */,
  "decimalFullWidth" /* DecimalFullWidth */,
  "decimalHalfWidth" /* DecimalHalfWidth */,
  "japaneseLegal" /* JapaneseLegal */,
  "japaneseDigitalTenThousand" /* JapaneseDigitalTenThousand */,
  "decimalEnclosedCircle" /* DecimalEnclosedCircle */,
  "decimalFullWidth2" /* DecimalFullWidth2 */,
  "aiueoFullWidth" /* AiueoFullWidth */,
  "irohaFullWidth" /* IrohaFullWidth */,
  "decimalZero" /* DecimalZero */,
  "bullet" /* Bullet */,
  "ganada" /* Ganada */,
  "chosung" /* Chosung */,
  "decimalEnclosedFullstop" /* DecimalEnclosedFullstop */,
  "decimalEnclosedParen" /* DecimalEnclosedParen */,
  "decimalEnclosedCircleChinese" /* DecimalEnclosedCircleChinese */,
  "ideographEnclosedCircle" /* IdeographEnclosedCircle */,
  "ideographTraditional" /* IdeographTraditional */,
  "ideographZodiac" /* IdeographZodiac */,
  "ideographZodiacTraditional" /* IdeographZodiacTraditional */,
  "taiwaneseCounting" /* TaiwaneseCounting */,
  "ideographLegalTraditional" /* IdeographLegalTraditional */,
  "taiwaneseCountingThousand" /* TaiwaneseCountingThousand */,
  "taiwaneseDigital" /* TaiwaneseDigital */,
  "chineseCounting" /* ChineseCounting */,
  "chineseLegalSimplified" /* ChineseLegalSimplified */,
  "chineseCountingThousand" /* ChineseCountingThousand */,
  "koreanDigital" /* KoreanDigital */,
  "koreanCounting" /* KoreanCounting */,
  "koreanLegal" /* KoreanLegal */,
  "koreanDigital2" /* KoreanDigital2 */,
  "vietnameseCounting" /* VietnameseCounting */,
  "russianLower" /* RussianLower */,
  "russianUpper" /* RussianUpper */,
  "none" /* None */,
  "numberInDash" /* NumberInDash */,
  "hebrew1" /* Hebrew1 */,
  "hebrew2" /* Hebrew2 */,
  "arabicAlpha" /* ArabicAlpha */,
  "arabicAbjad" /* ArabicAbjad */,
  "hindiVowels" /* HindiVowels */,
  "hindiConsonants" /* HindiConsonants */,
  "hindiNumbers" /* HindiNumbers */,
  "hindiCounting" /* HindiCounting */,
  "thaiLetters" /* ThaiLetters */,
  "thaiNumbers" /* ThaiNumbers */,
  "thaiCounting" /* ThaiCounting */,
  "bahtText" /* BahtText */,
  "dollarText" /* DollarText */,
  "custom" /* Custom */
];
var TextDirectionValues = /* @__PURE__ */ ((TextDirectionValues2) => {
  TextDirectionValues2["LefToRightTopToBottom"] = "lrTb";
  TextDirectionValues2["LeftToRightTopToBottom2010"] = "tb";
  TextDirectionValues2["TopToBottomRightToLeft"] = "tbRl";
  TextDirectionValues2["TopToBottomRightToLeft2010"] = "rl";
  TextDirectionValues2["BottomToTopLeftToRight"] = "btLr";
  TextDirectionValues2["BottomToTopLeftToRight2010"] = "lr";
  TextDirectionValues2["LefttoRightTopToBottomRotated"] = "lrTbV";
  TextDirectionValues2["LeftToRightTopToBottomRotated2010"] = "tbV";
  TextDirectionValues2["TopToBottomRightToLeftRotated"] = "tbRlV";
  TextDirectionValues2["TopToBottomRightToLeftRotated2010"] = "rlV";
  TextDirectionValues2["TopToBottomLeftToRightRotated"] = "tbLrV";
  TextDirectionValues2["TopToBottomLeftToRightRotated2010"] = "lrV";
  return TextDirectionValues2;
})(TextDirectionValues || {});
const TextDirectionValuesArray = [
  "lrTb" /* LefToRightTopToBottom */,
  "tb" /* LeftToRightTopToBottom2010 */,
  "tbRl" /* TopToBottomRightToLeft */,
  "rl" /* TopToBottomRightToLeft2010 */,
  "btLr" /* BottomToTopLeftToRight */,
  "lr" /* BottomToTopLeftToRight2010 */,
  "lrTbV" /* LefttoRightTopToBottomRotated */,
  "tbV" /* LeftToRightTopToBottomRotated2010 */,
  "tbRlV" /* TopToBottomRightToLeftRotated */,
  "rlV" /* TopToBottomRightToLeftRotated2010 */,
  "tbLrV" /* TopToBottomLeftToRightRotated */,
  "lrV" /* TopToBottomLeftToRightRotated2010 */
];
var CryptAlgorithmValues = /* @__PURE__ */ ((CryptAlgorithmValues2) => {
  CryptAlgorithmValues2["TypeAny"] = "typeAny";
  CryptAlgorithmValues2["Custom"] = "custom";
  return CryptAlgorithmValues2;
})(CryptAlgorithmValues || {});
const CryptAlgorithmValuesArray = [
  "typeAny" /* TypeAny */,
  "custom" /* Custom */
];
var CryptAlgorithmClassValues = /* @__PURE__ */ ((CryptAlgorithmClassValues2) => {
  CryptAlgorithmClassValues2["Hash"] = "hash";
  CryptAlgorithmClassValues2["Custom"] = "custom";
  return CryptAlgorithmClassValues2;
})(CryptAlgorithmClassValues || {});
const CryptAlgorithmClassValuesArray = [
  "hash" /* Hash */,
  "custom" /* Custom */
];
var CryptProviderValues = /* @__PURE__ */ ((CryptProviderValues2) => {
  CryptProviderValues2["RsaAdvancedEncryptionStandard"] = "rsaAES";
  CryptProviderValues2["RsaFull"] = "rsaFull";
  CryptProviderValues2["Custom"] = "custom";
  return CryptProviderValues2;
})(CryptProviderValues || {});
const CryptProviderValuesArray = [
  "rsaAES" /* RsaAdvancedEncryptionStandard */,
  "rsaFull" /* RsaFull */,
  "custom" /* Custom */
];
var JustificationValues = /* @__PURE__ */ ((JustificationValues2) => {
  JustificationValues2["Left"] = "left";
  JustificationValues2["Start"] = "start";
  JustificationValues2["Center"] = "center";
  JustificationValues2["Right"] = "right";
  JustificationValues2["End"] = "end";
  JustificationValues2["Both"] = "both";
  JustificationValues2["MediumKashida"] = "mediumKashida";
  JustificationValues2["Distribute"] = "distribute";
  JustificationValues2["NumTab"] = "numTab";
  JustificationValues2["HighKashida"] = "highKashida";
  JustificationValues2["LowKashida"] = "lowKashida";
  JustificationValues2["ThaiDistribute"] = "thaiDistribute";
  return JustificationValues2;
})(JustificationValues || {});
const JustificationValuesArray = [
  "left" /* Left */,
  "start" /* Start */,
  "center" /* Center */,
  "right" /* Right */,
  "end" /* End */,
  "both" /* Both */,
  "mediumKashida" /* MediumKashida */,
  "distribute" /* Distribute */,
  "numTab" /* NumTab */,
  "highKashida" /* HighKashida */,
  "lowKashida" /* LowKashida */,
  "thaiDistribute" /* ThaiDistribute */
];
var TabStopValues = /* @__PURE__ */ ((TabStopValues2) => {
  TabStopValues2["Clear"] = "clear";
  TabStopValues2["Left"] = "left";
  TabStopValues2["Start"] = "start";
  TabStopValues2["Center"] = "center";
  TabStopValues2["Right"] = "right";
  TabStopValues2["End"] = "end";
  TabStopValues2["Decimal"] = "decimal";
  TabStopValues2["Bar"] = "bar";
  TabStopValues2["Number"] = "num";
  return TabStopValues2;
})(TabStopValues || {});
const TabStopValuesArray = [
  "clear" /* Clear */,
  "left" /* Left */,
  "start" /* Start */,
  "center" /* Center */,
  "right" /* Right */,
  "end" /* End */,
  "decimal" /* Decimal */,
  "bar" /* Bar */,
  "num" /* Number */
];
var BorderValues = /* @__PURE__ */ ((BorderValues2) => {
  BorderValues2["Nil"] = "nil";
  BorderValues2["None"] = "none";
  BorderValues2["Single"] = "single";
  BorderValues2["Thick"] = "thick";
  BorderValues2["Double"] = "double";
  BorderValues2["Dotted"] = "dotted";
  BorderValues2["Dashed"] = "dashed";
  BorderValues2["DotDash"] = "dotDash";
  BorderValues2["DotDotDash"] = "dotDotDash";
  BorderValues2["Triple"] = "triple";
  BorderValues2["ThinThickSmallGap"] = "thinThickSmallGap";
  BorderValues2["ThickThinSmallGap"] = "thickThinSmallGap";
  BorderValues2["ThinThickThinSmallGap"] = "thinThickThinSmallGap";
  BorderValues2["ThinThickMediumGap"] = "thinThickMediumGap";
  BorderValues2["ThickThinMediumGap"] = "thickThinMediumGap";
  BorderValues2["ThinThickThinMediumGap"] = "thinThickThinMediumGap";
  BorderValues2["ThinThickLargeGap"] = "thinThickLargeGap";
  BorderValues2["ThickThinLargeGap"] = "thickThinLargeGap";
  BorderValues2["ThinThickThinLargeGap"] = "thinThickThinLargeGap";
  BorderValues2["Wave"] = "wave";
  BorderValues2["DoubleWave"] = "doubleWave";
  BorderValues2["DashSmallGap"] = "dashSmallGap";
  BorderValues2["DashDotStroked"] = "dashDotStroked";
  BorderValues2["ThreeDEmboss"] = "threeDEmboss";
  BorderValues2["ThreeDEngrave"] = "threeDEngrave";
  BorderValues2["Outset"] = "outset";
  BorderValues2["Inset"] = "inset";
  BorderValues2["Apples"] = "apples";
  BorderValues2["ArchedScallops"] = "archedScallops";
  BorderValues2["BabyPacifier"] = "babyPacifier";
  BorderValues2["BabyRattle"] = "babyRattle";
  BorderValues2["Balloons3Colors"] = "balloons3Colors";
  BorderValues2["BalloonsHotAir"] = "balloonsHotAir";
  BorderValues2["BasicBlackDashes"] = "basicBlackDashes";
  BorderValues2["BasicBlackDots"] = "basicBlackDots";
  BorderValues2["BasicBlackSquares"] = "basicBlackSquares";
  BorderValues2["BasicThinLines"] = "basicThinLines";
  BorderValues2["BasicWhiteDashes"] = "basicWhiteDashes";
  BorderValues2["BasicWhiteDots"] = "basicWhiteDots";
  BorderValues2["BasicWhiteSquares"] = "basicWhiteSquares";
  BorderValues2["BasicWideInline"] = "basicWideInline";
  BorderValues2["BasicWideMidline"] = "basicWideMidline";
  BorderValues2["BasicWideOutline"] = "basicWideOutline";
  BorderValues2["Bats"] = "bats";
  BorderValues2["Birds"] = "birds";
  BorderValues2["BirdsFlight"] = "birdsFlight";
  BorderValues2["Cabins"] = "cabins";
  BorderValues2["CakeSlice"] = "cakeSlice";
  BorderValues2["CandyCorn"] = "candyCorn";
  BorderValues2["CelticKnotwork"] = "celticKnotwork";
  BorderValues2["CertificateBanner"] = "certificateBanner";
  BorderValues2["ChainLink"] = "chainLink";
  BorderValues2["ChampagneBottle"] = "champagneBottle";
  BorderValues2["CheckedBarBlack"] = "checkedBarBlack";
  BorderValues2["CheckedBarColor"] = "checkedBarColor";
  BorderValues2["Checkered"] = "checkered";
  BorderValues2["ChristmasTree"] = "christmasTree";
  BorderValues2["CirclesLines"] = "circlesLines";
  BorderValues2["CirclesRectangles"] = "circlesRectangles";
  BorderValues2["ClassicalWave"] = "classicalWave";
  BorderValues2["Clocks"] = "clocks";
  BorderValues2["Compass"] = "compass";
  BorderValues2["Confetti"] = "confetti";
  BorderValues2["ConfettiGrays"] = "confettiGrays";
  BorderValues2["ConfettiOutline"] = "confettiOutline";
  BorderValues2["ConfettiStreamers"] = "confettiStreamers";
  BorderValues2["ConfettiWhite"] = "confettiWhite";
  BorderValues2["CornerTriangles"] = "cornerTriangles";
  BorderValues2["CouponCutoutDashes"] = "couponCutoutDashes";
  BorderValues2["CouponCutoutDots"] = "couponCutoutDots";
  BorderValues2["CrazyMaze"] = "crazyMaze";
  BorderValues2["CreaturesButterfly"] = "creaturesButterfly";
  BorderValues2["CreaturesFish"] = "creaturesFish";
  BorderValues2["CreaturesInsects"] = "creaturesInsects";
  BorderValues2["CreaturesLadyBug"] = "creaturesLadyBug";
  BorderValues2["CrossStitch"] = "crossStitch";
  BorderValues2["Cup"] = "cup";
  BorderValues2["DecoArch"] = "decoArch";
  BorderValues2["DecoArchColor"] = "decoArchColor";
  BorderValues2["DecoBlocks"] = "decoBlocks";
  BorderValues2["DiamondsGray"] = "diamondsGray";
  BorderValues2["DoubleD"] = "doubleD";
  BorderValues2["DoubleDiamonds"] = "doubleDiamonds";
  BorderValues2["Earth1"] = "earth1";
  BorderValues2["Earth2"] = "earth2";
  BorderValues2["EclipsingSquares1"] = "eclipsingSquares1";
  BorderValues2["EclipsingSquares2"] = "eclipsingSquares2";
  BorderValues2["EggsBlack"] = "eggsBlack";
  BorderValues2["Fans"] = "fans";
  BorderValues2["Film"] = "film";
  BorderValues2["Firecrackers"] = "firecrackers";
  BorderValues2["FlowersBlockPrint"] = "flowersBlockPrint";
  BorderValues2["FlowersDaisies"] = "flowersDaisies";
  BorderValues2["FlowersModern1"] = "flowersModern1";
  BorderValues2["FlowersModern2"] = "flowersModern2";
  BorderValues2["FlowersPansy"] = "flowersPansy";
  BorderValues2["FlowersRedRose"] = "flowersRedRose";
  BorderValues2["FlowersRoses"] = "flowersRoses";
  BorderValues2["FlowersTeacup"] = "flowersTeacup";
  BorderValues2["FlowersTiny"] = "flowersTiny";
  BorderValues2["Gems"] = "gems";
  BorderValues2["GingerbreadMan"] = "gingerbreadMan";
  BorderValues2["Gradient"] = "gradient";
  BorderValues2["Handmade1"] = "handmade1";
  BorderValues2["Handmade2"] = "handmade2";
  BorderValues2["HeartBalloon"] = "heartBalloon";
  BorderValues2["HeartGray"] = "heartGray";
  BorderValues2["Hearts"] = "hearts";
  BorderValues2["HeebieJeebies"] = "heebieJeebies";
  BorderValues2["Holly"] = "holly";
  BorderValues2["HouseFunky"] = "houseFunky";
  BorderValues2["Hypnotic"] = "hypnotic";
  BorderValues2["IceCreamCones"] = "iceCreamCones";
  BorderValues2["LightBulb"] = "lightBulb";
  BorderValues2["Lightning1"] = "lightning1";
  BorderValues2["Lightning2"] = "lightning2";
  BorderValues2["MapPins"] = "mapPins";
  BorderValues2["MapleLeaf"] = "mapleLeaf";
  BorderValues2["MapleMuffins"] = "mapleMuffins";
  BorderValues2["Marquee"] = "marquee";
  BorderValues2["MarqueeToothed"] = "marqueeToothed";
  BorderValues2["Moons"] = "moons";
  BorderValues2["Mosaic"] = "mosaic";
  BorderValues2["MusicNotes"] = "musicNotes";
  BorderValues2["Northwest"] = "northwest";
  BorderValues2["Ovals"] = "ovals";
  BorderValues2["Packages"] = "packages";
  BorderValues2["PalmsBlack"] = "palmsBlack";
  BorderValues2["PalmsColor"] = "palmsColor";
  BorderValues2["PaperClips"] = "paperClips";
  BorderValues2["Papyrus"] = "papyrus";
  BorderValues2["PartyFavor"] = "partyFavor";
  BorderValues2["PartyGlass"] = "partyGlass";
  BorderValues2["Pencils"] = "pencils";
  BorderValues2["People"] = "people";
  BorderValues2["PeopleWaving"] = "peopleWaving";
  BorderValues2["PeopleHats"] = "peopleHats";
  BorderValues2["Poinsettias"] = "poinsettias";
  BorderValues2["PostageStamp"] = "postageStamp";
  BorderValues2["Pumpkin1"] = "pumpkin1";
  BorderValues2["PushPinNote2"] = "pushPinNote2";
  BorderValues2["PushPinNote1"] = "pushPinNote1";
  BorderValues2["Pyramids"] = "pyramids";
  BorderValues2["PyramidsAbove"] = "pyramidsAbove";
  BorderValues2["Quadrants"] = "quadrants";
  BorderValues2["Rings"] = "rings";
  BorderValues2["Safari"] = "safari";
  BorderValues2["Sawtooth"] = "sawtooth";
  BorderValues2["SawtoothGray"] = "sawtoothGray";
  BorderValues2["ScaredCat"] = "scaredCat";
  BorderValues2["Seattle"] = "seattle";
  BorderValues2["ShadowedSquares"] = "shadowedSquares";
  BorderValues2["SharksTeeth"] = "sharksTeeth";
  BorderValues2["ShorebirdTracks"] = "shorebirdTracks";
  BorderValues2["Skyrocket"] = "skyrocket";
  BorderValues2["SnowflakeFancy"] = "snowflakeFancy";
  BorderValues2["Snowflakes"] = "snowflakes";
  BorderValues2["Sombrero"] = "sombrero";
  BorderValues2["Southwest"] = "southwest";
  BorderValues2["Stars"] = "stars";
  BorderValues2["StarsTop"] = "starsTop";
  BorderValues2["Stars3d"] = "stars3d";
  BorderValues2["StarsBlack"] = "starsBlack";
  BorderValues2["StarsShadowed"] = "starsShadowed";
  BorderValues2["Sun"] = "sun";
  BorderValues2["Swirligig"] = "swirligig";
  BorderValues2["TornPaper"] = "tornPaper";
  BorderValues2["TornPaperBlack"] = "tornPaperBlack";
  BorderValues2["Trees"] = "trees";
  BorderValues2["TriangleParty"] = "triangleParty";
  BorderValues2["Triangles"] = "triangles";
  BorderValues2["Tribal1"] = "tribal1";
  BorderValues2["Tribal2"] = "tribal2";
  BorderValues2["Tribal3"] = "tribal3";
  BorderValues2["Tribal4"] = "tribal4";
  BorderValues2["Tribal5"] = "tribal5";
  BorderValues2["Tribal6"] = "tribal6";
  BorderValues2["Triangle1"] = "triangle1";
  BorderValues2["Triangle2"] = "triangle2";
  BorderValues2["TriangleCircle1"] = "triangleCircle1";
  BorderValues2["TriangleCircle2"] = "triangleCircle2";
  BorderValues2["Shapes1"] = "shapes1";
  BorderValues2["Shapes2"] = "shapes2";
  BorderValues2["TwistedLines1"] = "twistedLines1";
  BorderValues2["TwistedLines2"] = "twistedLines2";
  BorderValues2["Vine"] = "vine";
  BorderValues2["Waveline"] = "waveline";
  BorderValues2["WeavingAngles"] = "weavingAngles";
  BorderValues2["WeavingBraid"] = "weavingBraid";
  BorderValues2["WeavingRibbon"] = "weavingRibbon";
  BorderValues2["WeavingStrips"] = "weavingStrips";
  BorderValues2["WhiteFlowers"] = "whiteFlowers";
  BorderValues2["Woodwork"] = "woodwork";
  BorderValues2["XIllusions"] = "xIllusions";
  BorderValues2["ZanyTriangles"] = "zanyTriangles";
  BorderValues2["ZigZag"] = "zigZag";
  BorderValues2["ZigZagStitch"] = "zigZagStitch";
  return BorderValues2;
})(BorderValues || {});
const BorderValuesArray = [
  "nil" /* Nil */,
  "none" /* None */,
  "single" /* Single */,
  "thick" /* Thick */,
  "double" /* Double */,
  "dotted" /* Dotted */,
  "dashed" /* Dashed */,
  "dotDash" /* DotDash */,
  "dotDotDash" /* DotDotDash */,
  "triple" /* Triple */,
  "thinThickSmallGap" /* ThinThickSmallGap */,
  "thickThinSmallGap" /* ThickThinSmallGap */,
  "thinThickThinSmallGap" /* ThinThickThinSmallGap */,
  "thinThickMediumGap" /* ThinThickMediumGap */,
  "thickThinMediumGap" /* ThickThinMediumGap */,
  "thinThickThinMediumGap" /* ThinThickThinMediumGap */,
  "thinThickLargeGap" /* ThinThickLargeGap */,
  "thickThinLargeGap" /* ThickThinLargeGap */,
  "thinThickThinLargeGap" /* ThinThickThinLargeGap */,
  "wave" /* Wave */,
  "doubleWave" /* DoubleWave */,
  "dashSmallGap" /* DashSmallGap */,
  "dashDotStroked" /* DashDotStroked */,
  "threeDEmboss" /* ThreeDEmboss */,
  "threeDEngrave" /* ThreeDEngrave */,
  "outset" /* Outset */,
  "inset" /* Inset */,
  "apples" /* Apples */,
  "archedScallops" /* ArchedScallops */,
  "babyPacifier" /* BabyPacifier */,
  "babyRattle" /* BabyRattle */,
  "balloons3Colors" /* Balloons3Colors */,
  "balloonsHotAir" /* BalloonsHotAir */,
  "basicBlackDashes" /* BasicBlackDashes */,
  "basicBlackDots" /* BasicBlackDots */,
  "basicBlackSquares" /* BasicBlackSquares */,
  "basicThinLines" /* BasicThinLines */,
  "basicWhiteDashes" /* BasicWhiteDashes */,
  "basicWhiteDots" /* BasicWhiteDots */,
  "basicWhiteSquares" /* BasicWhiteSquares */,
  "basicWideInline" /* BasicWideInline */,
  "basicWideMidline" /* BasicWideMidline */,
  "basicWideOutline" /* BasicWideOutline */,
  "bats" /* Bats */,
  "birds" /* Birds */,
  "birdsFlight" /* BirdsFlight */,
  "cabins" /* Cabins */,
  "cakeSlice" /* CakeSlice */,
  "candyCorn" /* CandyCorn */,
  "celticKnotwork" /* CelticKnotwork */,
  "certificateBanner" /* CertificateBanner */,
  "chainLink" /* ChainLink */,
  "champagneBottle" /* ChampagneBottle */,
  "checkedBarBlack" /* CheckedBarBlack */,
  "checkedBarColor" /* CheckedBarColor */,
  "checkered" /* Checkered */,
  "christmasTree" /* ChristmasTree */,
  "circlesLines" /* CirclesLines */,
  "circlesRectangles" /* CirclesRectangles */,
  "classicalWave" /* ClassicalWave */,
  "clocks" /* Clocks */,
  "compass" /* Compass */,
  "confetti" /* Confetti */,
  "confettiGrays" /* ConfettiGrays */,
  "confettiOutline" /* ConfettiOutline */,
  "confettiStreamers" /* ConfettiStreamers */,
  "confettiWhite" /* ConfettiWhite */,
  "cornerTriangles" /* CornerTriangles */,
  "couponCutoutDashes" /* CouponCutoutDashes */,
  "couponCutoutDots" /* CouponCutoutDots */,
  "crazyMaze" /* CrazyMaze */,
  "creaturesButterfly" /* CreaturesButterfly */,
  "creaturesFish" /* CreaturesFish */,
  "creaturesInsects" /* CreaturesInsects */,
  "creaturesLadyBug" /* CreaturesLadyBug */,
  "crossStitch" /* CrossStitch */,
  "cup" /* Cup */,
  "decoArch" /* DecoArch */,
  "decoArchColor" /* DecoArchColor */,
  "decoBlocks" /* DecoBlocks */,
  "diamondsGray" /* DiamondsGray */,
  "doubleD" /* DoubleD */,
  "doubleDiamonds" /* DoubleDiamonds */,
  "earth1" /* Earth1 */,
  "earth2" /* Earth2 */,
  "eclipsingSquares1" /* EclipsingSquares1 */,
  "eclipsingSquares2" /* EclipsingSquares2 */,
  "eggsBlack" /* EggsBlack */,
  "fans" /* Fans */,
  "film" /* Film */,
  "firecrackers" /* Firecrackers */,
  "flowersBlockPrint" /* FlowersBlockPrint */,
  "flowersDaisies" /* FlowersDaisies */,
  "flowersModern1" /* FlowersModern1 */,
  "flowersModern2" /* FlowersModern2 */,
  "flowersPansy" /* FlowersPansy */,
  "flowersRedRose" /* FlowersRedRose */,
  "flowersRoses" /* FlowersRoses */,
  "flowersTeacup" /* FlowersTeacup */,
  "flowersTiny" /* FlowersTiny */,
  "gems" /* Gems */,
  "gingerbreadMan" /* GingerbreadMan */,
  "gradient" /* Gradient */,
  "handmade1" /* Handmade1 */,
  "handmade2" /* Handmade2 */,
  "heartBalloon" /* HeartBalloon */,
  "heartGray" /* HeartGray */,
  "hearts" /* Hearts */,
  "heebieJeebies" /* HeebieJeebies */,
  "holly" /* Holly */,
  "houseFunky" /* HouseFunky */,
  "hypnotic" /* Hypnotic */,
  "iceCreamCones" /* IceCreamCones */,
  "lightBulb" /* LightBulb */,
  "lightning1" /* Lightning1 */,
  "lightning2" /* Lightning2 */,
  "mapPins" /* MapPins */,
  "mapleLeaf" /* MapleLeaf */,
  "mapleMuffins" /* MapleMuffins */,
  "marquee" /* Marquee */,
  "marqueeToothed" /* MarqueeToothed */,
  "moons" /* Moons */,
  "mosaic" /* Mosaic */,
  "musicNotes" /* MusicNotes */,
  "northwest" /* Northwest */,
  "ovals" /* Ovals */,
  "packages" /* Packages */,
  "palmsBlack" /* PalmsBlack */,
  "palmsColor" /* PalmsColor */,
  "paperClips" /* PaperClips */,
  "papyrus" /* Papyrus */,
  "partyFavor" /* PartyFavor */,
  "partyGlass" /* PartyGlass */,
  "pencils" /* Pencils */,
  "people" /* People */,
  "peopleWaving" /* PeopleWaving */,
  "peopleHats" /* PeopleHats */,
  "poinsettias" /* Poinsettias */,
  "postageStamp" /* PostageStamp */,
  "pumpkin1" /* Pumpkin1 */,
  "pushPinNote2" /* PushPinNote2 */,
  "pushPinNote1" /* PushPinNote1 */,
  "pyramids" /* Pyramids */,
  "pyramidsAbove" /* PyramidsAbove */,
  "quadrants" /* Quadrants */,
  "rings" /* Rings */,
  "safari" /* Safari */,
  "sawtooth" /* Sawtooth */,
  "sawtoothGray" /* SawtoothGray */,
  "scaredCat" /* ScaredCat */,
  "seattle" /* Seattle */,
  "shadowedSquares" /* ShadowedSquares */,
  "sharksTeeth" /* SharksTeeth */,
  "shorebirdTracks" /* ShorebirdTracks */,
  "skyrocket" /* Skyrocket */,
  "snowflakeFancy" /* SnowflakeFancy */,
  "snowflakes" /* Snowflakes */,
  "sombrero" /* Sombrero */,
  "southwest" /* Southwest */,
  "stars" /* Stars */,
  "starsTop" /* StarsTop */,
  "stars3d" /* Stars3d */,
  "starsBlack" /* StarsBlack */,
  "starsShadowed" /* StarsShadowed */,
  "sun" /* Sun */,
  "swirligig" /* Swirligig */,
  "tornPaper" /* TornPaper */,
  "tornPaperBlack" /* TornPaperBlack */,
  "trees" /* Trees */,
  "triangleParty" /* TriangleParty */,
  "triangles" /* Triangles */,
  "tribal1" /* Tribal1 */,
  "tribal2" /* Tribal2 */,
  "tribal3" /* Tribal3 */,
  "tribal4" /* Tribal4 */,
  "tribal5" /* Tribal5 */,
  "tribal6" /* Tribal6 */,
  "triangle1" /* Triangle1 */,
  "triangle2" /* Triangle2 */,
  "triangleCircle1" /* TriangleCircle1 */,
  "triangleCircle2" /* TriangleCircle2 */,
  "shapes1" /* Shapes1 */,
  "shapes2" /* Shapes2 */,
  "twistedLines1" /* TwistedLines1 */,
  "twistedLines2" /* TwistedLines2 */,
  "vine" /* Vine */,
  "waveline" /* Waveline */,
  "weavingAngles" /* WeavingAngles */,
  "weavingBraid" /* WeavingBraid */,
  "weavingRibbon" /* WeavingRibbon */,
  "weavingStrips" /* WeavingStrips */,
  "whiteFlowers" /* WhiteFlowers */,
  "woodwork" /* Woodwork */,
  "xIllusions" /* XIllusions */,
  "zanyTriangles" /* ZanyTriangles */,
  "zigZag" /* ZigZag */,
  "zigZagStitch" /* ZigZagStitch */
];
var DocumentConformance = /* @__PURE__ */ ((DocumentConformance2) => {
  DocumentConformance2["transitional"] = "transitional";
  DocumentConformance2["strict"] = "strict";
  return DocumentConformance2;
})(DocumentConformance || {});
const DocumentConformanceArray = [
  "transitional" /* transitional */,
  "strict" /* strict */
];
var StrictCharacterSet = /* @__PURE__ */ ((StrictCharacterSet2) => {
  StrictCharacterSet2["chsAnsi"] = "iso-8859-1";
  StrictCharacterSet2["chsMacFfn"] = "macintosh";
  StrictCharacterSet2["chsShiftJIS"] = "shift_jis";
  StrictCharacterSet2["chsHangeul"] = "ks_c-5601-1987";
  StrictCharacterSet2["chsJohab"] = "KS_C-5601-1992";
  StrictCharacterSet2["chsGB2312"] = "GBK";
  StrictCharacterSet2["chsChinese5"] = "Big5";
  StrictCharacterSet2["chsGreek"] = "windows-1253";
  StrictCharacterSet2["chsTurkish"] = "iso-8859-9";
  StrictCharacterSet2["chsVietnamese"] = "windows-1258";
  StrictCharacterSet2["chsHebrew"] = "windows-1255";
  StrictCharacterSet2["chsArabic"] = "windows-1256";
  StrictCharacterSet2["chsBaltic"] = "windows-1257";
  StrictCharacterSet2["chsRussian"] = "windows-1251";
  StrictCharacterSet2["chsThai"] = "windows-874";
  StrictCharacterSet2["chsEastEurope"] = "windows-1250";
  return StrictCharacterSet2;
})(StrictCharacterSet || {});
const StrictCharacterSetArray = [
  "iso-8859-1" /* chsAnsi */,
  "macintosh" /* chsMacFfn */,
  "shift_jis" /* chsShiftJIS */,
  "ks_c-5601-1987" /* chsHangeul */,
  "KS_C-5601-1992" /* chsJohab */,
  "GBK" /* chsGB2312 */,
  "Big5" /* chsChinese5 */,
  "windows-1253" /* chsGreek */,
  "iso-8859-9" /* chsTurkish */,
  "windows-1258" /* chsVietnamese */,
  "windows-1255" /* chsHebrew */,
  "windows-1256" /* chsArabic */,
  "windows-1257" /* chsBaltic */,
  "windows-1251" /* chsRussian */,
  "windows-874" /* chsThai */,
  "windows-1250" /* chsEastEurope */
];
var ObjectDrawAspect = /* @__PURE__ */ ((ObjectDrawAspect2) => {
  ObjectDrawAspect2["content"] = "content";
  ObjectDrawAspect2["icon"] = "icon";
  return ObjectDrawAspect2;
})(ObjectDrawAspect || {});
const ObjectDrawAspectArray = [
  "content" /* content */,
  "icon" /* icon */
];
var ObjectUpdateMode = /* @__PURE__ */ ((ObjectUpdateMode2) => {
  ObjectUpdateMode2["always"] = "always";
  ObjectUpdateMode2["onCall"] = "onCall";
  return ObjectUpdateMode2;
})(ObjectUpdateMode || {});
const ObjectUpdateModeArray = [
  "always" /* always */,
  "onCall" /* onCall */
];
var CompatSettingNameValues = /* @__PURE__ */ ((CompatSettingNameValues2) => {
  CompatSettingNameValues2["CompatibilityMode"] = "compatibilityMode";
  CompatSettingNameValues2["OverrideTableStyleFontSizeAndJustification"] = "overrideTableStyleFontSizeAndJustification";
  CompatSettingNameValues2["EnableOpenTypeFeatures"] = "enableOpenTypeFeatures";
  CompatSettingNameValues2["DoNotFlipMirrorIndents"] = "doNotFlipMirrorIndents";
  CompatSettingNameValues2["DifferentiateMultirowTableHeaders"] = "differentiateMultirowTableHeaders";
  CompatSettingNameValues2["UseWord2013TrackBottomHyphenation"] = "useWord2013TrackBottomHyphenation";
  CompatSettingNameValues2["AllowHyphenationAtTrackBottom"] = "allowHyphenationAtTrackBottom";
  CompatSettingNameValues2["AllowTextAfterFloatingTableBreak"] = "allowTextAfterFloatingTableBreak";
  return CompatSettingNameValues2;
})(CompatSettingNameValues || {});
const CompatSettingNameValuesArray = [
  "compatibilityMode" /* CompatibilityMode */,
  "overrideTableStyleFontSizeAndJustification" /* OverrideTableStyleFontSizeAndJustification */,
  "enableOpenTypeFeatures" /* EnableOpenTypeFeatures */,
  "doNotFlipMirrorIndents" /* DoNotFlipMirrorIndents */,
  "differentiateMultirowTableHeaders" /* DifferentiateMultirowTableHeaders */,
  "useWord2013TrackBottomHyphenation" /* UseWord2013TrackBottomHyphenation */,
  "allowHyphenationAtTrackBottom" /* AllowHyphenationAtTrackBottom */,
  "allowTextAfterFloatingTableBreak" /* AllowTextAfterFloatingTableBreak */
];
class LevelOverride extends OxmlCompositeElement {
  static _Q = "w:lvlOverride";
  static _A = ["w:ilvl"];
  /** Numbering Level ID. Serialized as `w:ilvl` */
  get levelIndex() {
    return this._g("w:ilvl");
  }
  set levelIndex(v) {
    this._s("w:ilvl", v);
  }
  /** Numbering Level Starting Value Override. */
  get startOverrideNumberingValue() {
    return this._f(StartOverrideNumberingValue);
  }
  /** Numbering Level Override Definition. */
  get level() {
    return this._f(Level);
  }
}
class FontRelationshipType extends OxmlLeafElement {
  static _A = ["w:fontKey", "w:subsetted", "r:id"];
  /** fontKey. Serialized as `w:fontKey` */
  get fontKey() {
    return this._g("w:fontKey");
  }
  set fontKey(v) {
    this._s("w:fontKey", v);
  }
  /** subsetted. Serialized as `w:subsetted` */
  get subsetted() {
    return this._g("w:subsetted");
  }
  set subsetted(v) {
    this._s("w:subsetted", v);
  }
  /** Relationship to Part. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class EmbedBoldItalicFont extends FontRelationshipType {
  static _Q = "w:embedBoldItalic";
}
class EmbedItalicFont extends FontRelationshipType {
  static _Q = "w:embedItalic";
}
class EmbedBoldFont extends FontRelationshipType {
  static _Q = "w:embedBold";
}
class EmbedRegularFont extends FontRelationshipType {
  static _Q = "w:embedRegular";
}
class FontSignature extends OxmlLeafElement {
  static _Q = "w:sig";
  static _A = ["w:usb0", "w:usb1", "w:usb2", "w:usb3", "w:csb0", "w:csb1"];
  /** First 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb0` */
  get unicodeSignature0() {
    return this._g("w:usb0");
  }
  set unicodeSignature0(v) {
    this._s("w:usb0", v);
  }
  /** Second 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb1` */
  get unicodeSignature1() {
    return this._g("w:usb1");
  }
  set unicodeSignature1(v) {
    this._s("w:usb1", v);
  }
  /** Third 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb2` */
  get unicodeSignature2() {
    return this._g("w:usb2");
  }
  set unicodeSignature2(v) {
    this._s("w:usb2", v);
  }
  /** Fourth 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb3` */
  get unicodeSignature3() {
    return this._g("w:usb3");
  }
  set unicodeSignature3(v) {
    this._s("w:usb3", v);
  }
  /** Lower 32 Bits of Code Page Bit Field. Serialized as `w:csb0` */
  get codePageSignature0() {
    return this._g("w:csb0");
  }
  set codePageSignature0(v) {
    this._s("w:csb0", v);
  }
  /** Upper 32 Bits of Code Page Bit Field. Serialized as `w:csb1` */
  get codePageSignature1() {
    return this._g("w:csb1");
  }
  set codePageSignature1(v) {
    this._s("w:csb1", v);
  }
}
class Pitch extends OxmlLeafElement {
  static _Q = "w:pitch";
  static _A = ["w:val"];
  /** Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FontFamily extends OxmlLeafElement {
  static _Q = "w:family";
  static _A = ["w:val"];
  /** Font Family Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FontCharSet extends OxmlLeafElement {
  static _Q = "w:charset";
  static _A = ["w:val", "w:characterSet"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** characterSet. Serialized as `w:characterSet` */
  get strictCharacterSet() {
    return this._g("w:characterSet");
  }
  set strictCharacterSet(v) {
    this._s("w:characterSet", v);
  }
}
class Panose1Number extends OxmlLeafElement {
  static _Q = "w:panose1";
  static _A = ["w:val"];
  /** Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PictureBulletBase extends OxmlCompositeElement {
  static _Q = "w:pict";
}
class TargetScreenSize extends OxmlLeafElement {
  static _Q = "w:targetScreenSz";
  static _A = ["w:val"];
  /** Target Screen Size Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class ReadModeInkLockDown extends OxmlLeafElement {
  static _Q = "w:readModeInkLockDown";
  static _A = ["w:actualPg", "w:w", "w:h", "w:fontSz"];
  /** Use Actual Pages, Not Virtual Pages. Serialized as `w:actualPg` */
  get useActualPages() {
    return this._g("w:actualPg");
  }
  set useActualPages(v) {
    this._s("w:actualPg", v);
  }
  /** Virtual Page Width. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** Virtual Page Height. Serialized as `w:h` */
  get height() {
    return this._g("w:h");
  }
  set height(v) {
    this._s("w:h", v);
  }
  /** Font Size Scaling. Serialized as `w:fontSz` */
  get fontSize() {
    return this._g("w:fontSz");
  }
  set fontSize(v) {
    this._s("w:fontSz", v);
  }
}
class Captions extends OxmlCompositeElement {
  static _Q = "w:captions";
}
class ColorSchemeMapping extends OxmlLeafElement {
  static _Q = "w:clrSchemeMapping";
  static _A = ["w:bg1", "w:t1", "w:bg2", "w:t2", "w:accent1", "w:accent2", "w:accent3", "w:accent4", "w:accent5", "w:accent6", "w:hyperlink", "w:followedHyperlink"];
  /** Background 1 Theme Color Mapping. Serialized as `w:bg1` */
  get background1() {
    return this._g("w:bg1");
  }
  set background1(v) {
    this._s("w:bg1", v);
  }
  /** Text 1 Theme Color Mapping. Serialized as `w:t1` */
  get text1() {
    return this._g("w:t1");
  }
  set text1(v) {
    this._s("w:t1", v);
  }
  /** Background 2 Theme Color Mapping. Serialized as `w:bg2` */
  get background2() {
    return this._g("w:bg2");
  }
  set background2(v) {
    this._s("w:bg2", v);
  }
  /** Text 2 Theme Color Mapping. Serialized as `w:t2` */
  get text2() {
    return this._g("w:t2");
  }
  set text2(v) {
    this._s("w:t2", v);
  }
  /** Accent 1 Theme Color Mapping. Serialized as `w:accent1` */
  get accent1() {
    return this._g("w:accent1");
  }
  set accent1(v) {
    this._s("w:accent1", v);
  }
  /** Accent 2 Theme Color Mapping. Serialized as `w:accent2` */
  get accent2() {
    return this._g("w:accent2");
  }
  set accent2(v) {
    this._s("w:accent2", v);
  }
  /** Accent3 Theme Color Mapping. Serialized as `w:accent3` */
  get accent3() {
    return this._g("w:accent3");
  }
  set accent3(v) {
    this._s("w:accent3", v);
  }
  /** Accent4 Theme Color Mapping. Serialized as `w:accent4` */
  get accent4() {
    return this._g("w:accent4");
  }
  set accent4(v) {
    this._s("w:accent4", v);
  }
  /** Accent5 Theme Color Mapping. Serialized as `w:accent5` */
  get accent5() {
    return this._g("w:accent5");
  }
  set accent5(v) {
    this._s("w:accent5", v);
  }
  /** Accent6 Theme Color Mapping. Serialized as `w:accent6` */
  get accent6() {
    return this._g("w:accent6");
  }
  set accent6(v) {
    this._s("w:accent6", v);
  }
  /** Hyperlink Theme Color Mapping. Serialized as `w:hyperlink` */
  get hyperlink() {
    return this._g("w:hyperlink");
  }
  set hyperlink(v) {
    this._s("w:hyperlink", v);
  }
  /** Followed Hyperlink Theme Color Mapping. Serialized as `w:followedHyperlink` */
  get followedHyperlink() {
    return this._g("w:followedHyperlink");
  }
  set followedHyperlink(v) {
    this._s("w:followedHyperlink", v);
  }
}
class Rsids extends OxmlCompositeElement {
  static _Q = "w:rsids";
  /** Original Document Revision Save ID. */
  get rsidRoot() {
    return this._f(RsidRoot);
  }
}
class DocumentVariables extends OxmlCompositeElement {
  static _Q = "w:docVars";
}
class Compatibility extends OxmlCompositeElement {
  static _Q = "w:compat";
  /** Use Simplified Rules For Table Border Conflicts. */
  get useSingleBorderForContiguousCells() {
    return this._f(UseSingleBorderForContiguousCells);
  }
  /** Emulate WordPerfect 6.x Paragraph Justification. */
  get wordPerfectJustification() {
    return this._f(WordPerfectJustification);
  }
  /** Do Not Create Custom Tab Stop for Hanging Indent. */
  get noTabHangIndent() {
    return this._f(NoTabHangIndent);
  }
  /** Do Not Add Leading Between Lines of Text. */
  get noLeading() {
    return this._f(NoLeading);
  }
  /** Add Additional Space Below Baseline For Underlined East Asian Text. */
  get spaceForUnderline() {
    return this._f(SpaceForUnderline);
  }
  /** Do Not Balance Text Columns within a Section. */
  get noColumnBalance() {
    return this._f(NoColumnBalance);
  }
  /** Balance Single Byte and Double Byte Characters. */
  get balanceSingleByteDoubleByteWidth() {
    return this._f(BalanceSingleByteDoubleByteWidth);
  }
  /** Do Not Center Content on Lines With Exact Line Height. */
  get noExtraLineSpacing() {
    return this._f(NoExtraLineSpacing);
  }
  /** Convert Backslash To Yen Sign When Entered. */
  get doNotLeaveBackslashAlone() {
    return this._f(DoNotLeaveBackslashAlone);
  }
  /** Underline All Trailing Spaces. */
  get underlineTrailingSpaces() {
    return this._f(UnderlineTrailingSpaces);
  }
  /** Don't Justify Lines Ending in Soft Line Break. */
  get doNotExpandShiftReturn() {
    return this._f(DoNotExpandShiftReturn);
  }
  /** Only Expand/Condense Text By Whole Points. */
  get spacingInWholePoints() {
    return this._f(SpacingInWholePoints);
  }
  /** Emulate Word 6.0 Line Wrapping for East Asian Text. */
  get lineWrapLikeWord6() {
    return this._f(LineWrapLikeWord6);
  }
  /** Print Body Text before Header/Footer Contents. */
  get printBodyTextBeforeHeader() {
    return this._f(PrintBodyTextBeforeHeader);
  }
  /** Print Colors as Black And White without Dithering. */
  get printColorBlackWhite() {
    return this._f(PrintColorBlackWhite);
  }
  /** Space width. */
  get wordPerfectSpaceWidth() {
    return this._f(WordPerfectSpaceWidth);
  }
  /** Display Page/Column Breaks Present in Frames. */
  get showBreaksInFrames() {
    return this._f(ShowBreaksInFrames);
  }
  /** Increase Priority Of Font Size During Font Substitution. */
  get subFontBySize() {
    return this._f(SubFontBySize);
  }
  /** Ignore Exact Line Height for Last Line on Page. */
  get suppressBottomSpacing() {
    return this._f(SuppressBottomSpacing);
  }
  /** Ignore Minimum and Exact Line Height for First Line on Page. */
  get suppressTopSpacing() {
    return this._f(SuppressTopSpacing);
  }
  /** Ignore Minimum Line Height for First Line on Page. */
  get suppressSpacingAtTopOfPage() {
    return this._f(SuppressSpacingAtTopOfPage);
  }
  /** Emulate WordPerfect 5.x Line Spacing. */
  get suppressTopSpacingWordPerfect() {
    return this._f(SuppressTopSpacingWordPerfect);
  }
  /** Do Not Use Space Before On First Line After a Page Break. */
  get suppressSpacingBeforeAfterPageBreak() {
    return this._f(SuppressSpacingBeforeAfterPageBreak);
  }
  /** Swap Paragraph Borders on Odd Numbered Pages. */
  get swapBordersFacingPages() {
    return this._f(SwapBordersFacingPages);
  }
  /** Treat Backslash Quotation Delimiter as Two Quotation Marks. */
  get convertMailMergeEscape() {
    return this._f(ConvertMailMergeEscape);
  }
  /** Emulate WordPerfect 6.x Font Height Calculation. */
  get truncateFontHeightsLikeWordPerfect() {
    return this._f(TruncateFontHeightsLikeWordPerfect);
  }
  /** Emulate Word 5.x for the Macintosh Small Caps Formatting. */
  get macWordSmallCaps() {
    return this._f(MacWordSmallCaps);
  }
  /** Use Printer Metrics To Display Documents. */
  get usePrinterMetrics() {
    return this._f(UsePrinterMetrics);
  }
  /** Do Not Suppress Paragraph Borders Next To Frames. */
  get doNotSuppressParagraphBorders() {
    return this._f(DoNotSuppressParagraphBorders);
  }
  /** Line Wrap Trailing Spaces. */
  get wrapTrailSpaces() {
    return this._f(WrapTrailSpaces);
  }
  /** Emulate Word 6.x/95/97 Footnote Placement. */
  get footnoteLayoutLikeWord8() {
    return this._f(FootnoteLayoutLikeWord8);
  }
  /** Emulate Word 97 Text Wrapping Around Floating Objects. */
  get shapeLayoutLikeWord8() {
    return this._f(ShapeLayoutLikeWord8);
  }
  /** Align Table Rows Independently. */
  get alignTablesRowByRow() {
    return this._f(AlignTablesRowByRow);
  }
  /** Ignore Width of Last Tab Stop When Aligning Paragraph If It Is Not Left Aligned. */
  get forgetLastTabAlignment() {
    return this._f(ForgetLastTabAlignment);
  }
  /** Add Document Grid Line Pitch To Lines in Table Cells. */
  get adjustLineHeightInTable() {
    return this._f(AdjustLineHeightInTable);
  }
  /** Emulate Word 95 Full-Width Character Spacing. */
  get autoSpaceLikeWord95() {
    return this._f(AutoSpaceLikeWord95);
  }
  /** Do Not Increase Line Height for Raised/Lowered Text. */
  get noSpaceRaiseLower() {
    return this._f(NoSpaceRaiseLower);
  }
  /** Use Fixed Paragraph Spacing for HTML Auto Setting. */
  get doNotUseHTMLParagraphAutoSpacing() {
    return this._f(DoNotUseHTMLParagraphAutoSpacing);
  }
  /** Ignore Space Before Table When Deciding If Table Should Wrap Floating Object. */
  get layoutRawTableWidth() {
    return this._f(LayoutRawTableWidth);
  }
  /** Allow Table Rows to Wrap Inline Objects Independently. */
  get layoutTableRowsApart() {
    return this._f(LayoutTableRowsApart);
  }
  /** Emulate Word 97 East Asian Line Breaking. */
  get useWord97LineBreakRules() {
    return this._f(UseWord97LineBreakRules);
  }
  /** Do Not Allow Floating Tables To Break Across Pages. */
  get doNotBreakWrappedTables() {
    return this._f(DoNotBreakWrappedTables);
  }
  /** Do Not Snap to Document Grid in Table Cells with Objects. */
  get doNotSnapToGridInCell() {
    return this._f(DoNotSnapToGridInCell);
  }
  /** Select Field When First or Last Character Is Selected. */
  get selectFieldWithFirstOrLastChar() {
    return this._f(SelectFieldWithFirstOrLastChar);
  }
  /** Use Legacy Ethiopic and Amharic Line Breaking Rules. */
  get applyBreakingRules() {
    return this._f(ApplyBreakingRules);
  }
  /** Do Not Allow Hanging Punctuation With Character Grid. */
  get doNotWrapTextWithPunctuation() {
    return this._f(DoNotWrapTextWithPunctuation);
  }
  /** Do Not Compress Compressible Characters When Using Document Grid. */
  get doNotUseEastAsianBreakRules() {
    return this._f(DoNotUseEastAsianBreakRules);
  }
  /** Emulate Word 2002 Table Style Rules. */
  get useWord2002TableStyleRules() {
    return this._f(UseWord2002TableStyleRules);
  }
  /** Allow Tables to AutoFit Into Page Margins. */
  get growAutofit() {
    return this._f(GrowAutofit);
  }
  /** Do Not Bypass East Asian/Complex Script Layout Code. */
  get useFarEastLayout() {
    return this._f(UseFarEastLayout);
  }
  /** Do Not Automatically Apply List Paragraph Style To Bulleted/Numbered Text. */
  get useNormalStyleForList() {
    return this._f(UseNormalStyleForList);
  }
  /** Ignore Hanging Indent When Creating Tab Stop After Numbering. */
  get doNotUseIndentAsNumberingTabStop() {
    return this._f(DoNotUseIndentAsNumberingTabStop);
  }
  /** Use Alternate Set of East Asian Line Breaking Rules. */
  get useAltKinsokuLineBreakRules() {
    return this._f(UseAltKinsokuLineBreakRules);
  }
  /** Allow Contextual Spacing of Paragraphs in Tables. */
  get allowSpaceOfSameStyleInTable() {
    return this._f(AllowSpaceOfSameStyleInTable);
  }
  /** Do Not Ignore Floating Objects When Calculating Paragraph Indentation. */
  get doNotSuppressIndentation() {
    return this._f(DoNotSuppressIndentation);
  }
  /** Do Not AutoFit Tables To Fit Next To Wrapped Objects. */
  get doNotAutofitConstrainedTables() {
    return this._f(DoNotAutofitConstrainedTables);
  }
  /** Allow Table Columns To Exceed Preferred Widths of Constituent Cells. */
  get autofitToFirstFixedWidthCell() {
    return this._f(AutofitToFirstFixedWidthCell);
  }
  /** Underline Following Character Following Numbering. */
  get underlineTabInNumberingList() {
    return this._f(UnderlineTabInNumberingList);
  }
  /** Always Use Fixed Width for Hangul Characters. */
  get displayHangulFixedWidth() {
    return this._f(DisplayHangulFixedWidth);
  }
  /** Always Move Paragraph Mark to Page after a Page Break. */
  get splitPageBreakAndParagraphMark() {
    return this._f(SplitPageBreakAndParagraphMark);
  }
  /** Don't Vertically Align Cells Containing Floating Objects. */
  get doNotVerticallyAlignCellWithShape() {
    return this._f(DoNotVerticallyAlignCellWithShape);
  }
  /** Don't Break Table Rows Around Floating Tables. */
  get doNotBreakConstrainedForcedTable() {
    return this._f(DoNotBreakConstrainedForcedTable);
  }
  /** Ignore Vertical Alignment in Textboxes. */
  get doNotVerticallyAlignInTextBox() {
    return this._f(DoNotVerticallyAlignInTextBox);
  }
  /** Use ANSI Kerning Pairs from Fonts. */
  get useAnsiKerningPairs() {
    return this._f(UseAnsiKerningPairs);
  }
  /** Use Cached Paragraph Information for Column Balancing. */
  get cachedColumnBalance() {
    return this._f(CachedColumnBalance);
  }
}
class EndnoteDocumentWideProperties extends OxmlCompositeElement {
  static _Q = "w:endnotePr";
  /** Endnote Placement. */
  get endnotePosition() {
    return this._f(EndnotePosition);
  }
  /** Endnote Numbering Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Footnote and Endnote Numbering Starting Value. */
  get numberingStart() {
    return this._f(NumberingStart);
  }
  /** Footnote and Endnote Numbering Restart Location. */
  get numberingRestart() {
    return this._f(NumberingRestart);
  }
}
class FootnoteDocumentWideProperties extends OxmlCompositeElement {
  static _Q = "w:footnotePr";
  /** Footnote Placement. */
  get footnotePosition() {
    return this._f(FootnotePosition);
  }
  /** Footnote Numbering Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Footnote and Endnote Numbering Starting Value. */
  get numberingStart() {
    return this._f(NumberingStart);
  }
  /** Footnote and Endnote Numbering Restart Location. */
  get numberingRestart() {
    return this._f(NumberingRestart);
  }
}
class ShapeDefaultsType extends OxmlCompositeElement {
}
class ShapeDefaults extends ShapeDefaultsType {
  static _Q = "w:shapeDefaults";
}
class HeaderShapeDefaults extends ShapeDefaultsType {
  static _Q = "w:hdrShapeDefaults";
}
class SaveThroughXslt extends OxmlLeafElement {
  static _Q = "w:saveThroughXslt";
  static _A = ["r:id", "w:solutionID"];
  /** XSL Transformation Location. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Local Identifier for XSL Transform. Serialized as `w:solutionID` */
  get solutionId() {
    return this._g("w:solutionID");
  }
  set solutionId(v) {
    this._s("w:solutionID", v);
  }
}
class NoLineBreaksBeforeKinsoku extends OxmlLeafElement {
  static _Q = "w:noLineBreaksBefore";
  static _A = ["w:lang", "w:val"];
  /** lang. Serialized as `w:lang` */
  get language() {
    return this._g("w:lang");
  }
  set language(v) {
    this._s("w:lang", v);
  }
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class NoLineBreaksAfterKinsoku extends OxmlLeafElement {
  static _Q = "w:noLineBreaksAfter";
  static _A = ["w:lang", "w:val"];
  /** lang. Serialized as `w:lang` */
  get language() {
    return this._g("w:lang");
  }
  set language(v) {
    this._s("w:lang", v);
  }
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class CharacterSpacingControl extends OxmlLeafElement {
  static _Q = "w:characterSpacingControl";
  static _A = ["w:val"];
  /** Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class UnsignedInt7Type extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DisplayVerticalDrawingGrid extends UnsignedInt7Type {
  static _Q = "w:displayVerticalDrawingGridEvery";
}
class DisplayHorizontalDrawingGrid extends UnsignedInt7Type {
  static _Q = "w:displayHorizontalDrawingGridEvery";
}
class SummaryLength extends OxmlLeafElement {
  static _Q = "w:summaryLength";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class ConsecutiveHyphenLimit extends OxmlLeafElement {
  static _Q = "w:consecutiveHyphenLimit";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class NonNegativeShortType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class BookFoldPrintingSheets extends NonNegativeShortType {
  static _Q = "w:bookFoldPrintingSheets";
}
class DefaultTabStop extends NonNegativeShortType {
  static _Q = "w:defaultTabStop";
}
class DocumentProtection extends OxmlLeafElement {
  static _Q = "w:documentProtection";
  static _A = ["w:edit", "w:formatting", "w:enforcement", "w:cryptProviderType", "w:cryptAlgorithmClass", "w:cryptAlgorithmType", "w:cryptAlgorithmSid", "w:cryptSpinCount", "w:cryptProvider", "w:algIdExt", "w:algIdExtSource", "w:cryptProviderTypeExt", "w:cryptProviderTypeExtSource", "w:hash", "w:salt", "w:algorithmName", "w:hashValue", "w:saltValue", "w:spinCount"];
  /** Document Editing Restrictions. Serialized as `w:edit` */
  get edit() {
    return this._g("w:edit");
  }
  set edit(v) {
    this._s("w:edit", v);
  }
  /** Only Allow Formatting With Unlocked Styles. Serialized as `w:formatting` */
  get formatting() {
    return this._g("w:formatting");
  }
  set formatting(v) {
    this._s("w:formatting", v);
  }
  /** Enforce Document Protection Settings. Serialized as `w:enforcement` */
  get enforcement() {
    return this._g("w:enforcement");
  }
  set enforcement(v) {
    this._s("w:enforcement", v);
  }
  /** Cryptographic Provider Type. Serialized as `w:cryptProviderType` */
  get cryptographicProviderType() {
    return this._g("w:cryptProviderType");
  }
  set cryptographicProviderType(v) {
    this._s("w:cryptProviderType", v);
  }
  /** Cryptographic Algorithm Class. Serialized as `w:cryptAlgorithmClass` */
  get cryptographicAlgorithmClass() {
    return this._g("w:cryptAlgorithmClass");
  }
  set cryptographicAlgorithmClass(v) {
    this._s("w:cryptAlgorithmClass", v);
  }
  /** Cryptographic Algorithm Type. Serialized as `w:cryptAlgorithmType` */
  get cryptographicAlgorithmType() {
    return this._g("w:cryptAlgorithmType");
  }
  set cryptographicAlgorithmType(v) {
    this._s("w:cryptAlgorithmType", v);
  }
  /** Cryptographic Hashing Algorithm. Serialized as `w:cryptAlgorithmSid` */
  get cryptographicAlgorithmSid() {
    return this._g("w:cryptAlgorithmSid");
  }
  set cryptographicAlgorithmSid(v) {
    this._s("w:cryptAlgorithmSid", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `w:cryptSpinCount` */
  get cryptographicSpinCount() {
    return this._g("w:cryptSpinCount");
  }
  set cryptographicSpinCount(v) {
    this._s("w:cryptSpinCount", v);
  }
  /** Cryptographic Provider. Serialized as `w:cryptProvider` */
  get cryptographicProvider() {
    return this._g("w:cryptProvider");
  }
  set cryptographicProvider(v) {
    this._s("w:cryptProvider", v);
  }
  /** Cryptographic Algorithm Extensibility. Serialized as `w:algIdExt` */
  get algorithmIdExtensibility() {
    return this._g("w:algIdExt");
  }
  set algorithmIdExtensibility(v) {
    this._s("w:algIdExt", v);
  }
  /** Algorithm Extensibility Source. Serialized as `w:algIdExtSource` */
  get algorithmIdExtensibilitySource() {
    return this._g("w:algIdExtSource");
  }
  set algorithmIdExtensibilitySource(v) {
    this._s("w:algIdExtSource", v);
  }
  /** Cryptographic Provider Type Extensibility. Serialized as `w:cryptProviderTypeExt` */
  get cryptographicProviderTypeExtensibility() {
    return this._g("w:cryptProviderTypeExt");
  }
  set cryptographicProviderTypeExtensibility(v) {
    this._s("w:cryptProviderTypeExt", v);
  }
  /** Provider Type Extensibility Source. Serialized as `w:cryptProviderTypeExtSource` */
  get cryptographicProviderTypeExtSource() {
    return this._g("w:cryptProviderTypeExtSource");
  }
  set cryptographicProviderTypeExtSource(v) {
    this._s("w:cryptProviderTypeExtSource", v);
  }
  /** Password Hash. Serialized as `w:hash` */
  get hash() {
    return this._g("w:hash");
  }
  set hash(v) {
    this._s("w:hash", v);
  }
  /** Salt for Password Verifier. Serialized as `w:salt` */
  get salt() {
    return this._g("w:salt");
  }
  set salt(v) {
    this._s("w:salt", v);
  }
  /** algorithmName. Serialized as `w:algorithmName` */
  get algorithmName() {
    return this._g("w:algorithmName");
  }
  set algorithmName(v) {
    this._s("w:algorithmName", v);
  }
  /** hashValue. Serialized as `w:hashValue` */
  get hashValue() {
    return this._g("w:hashValue");
  }
  set hashValue(v) {
    this._s("w:hashValue", v);
  }
  /** saltValue. Serialized as `w:saltValue` */
  get saltValue() {
    return this._g("w:saltValue");
  }
  set saltValue(v) {
    this._s("w:saltValue", v);
  }
  /** spinCount. Serialized as `w:spinCount` */
  get spinCount() {
    return this._g("w:spinCount");
  }
  set spinCount(v) {
    this._s("w:spinCount", v);
  }
}
class RevisionView extends OxmlLeafElement {
  static _Q = "w:revisionView";
  static _A = ["w:markup", "w:comments", "w:insDel", "w:formatting", "w:inkAnnotations"];
  /** Display Visual Indicator Of Markup Area. Serialized as `w:markup` */
  get markup() {
    return this._g("w:markup");
  }
  set markup(v) {
    this._s("w:markup", v);
  }
  /** Display Comments. Serialized as `w:comments` */
  get comments() {
    return this._g("w:comments");
  }
  set comments(v) {
    this._s("w:comments", v);
  }
  /** Display Content Revisions. Serialized as `w:insDel` */
  get displayRevision() {
    return this._g("w:insDel");
  }
  set displayRevision(v) {
    this._s("w:insDel", v);
  }
  /** Display Formatting Revisions. Serialized as `w:formatting` */
  get formatting() {
    return this._g("w:formatting");
  }
  set formatting(v) {
    this._s("w:formatting", v);
  }
  /** Display Ink Annotations. Serialized as `w:inkAnnotations` */
  get inkAnnotations() {
    return this._g("w:inkAnnotations");
  }
  set inkAnnotations(v) {
    this._s("w:inkAnnotations", v);
  }
}
class MailMerge extends OxmlCompositeElement {
  static _Q = "w:mailMerge";
  /** Source Document Type. */
  get mainDocumentType() {
    return this._f(MainDocumentType);
  }
  /** Query Contains Link to External Query File. */
  get linkToQuery() {
    return this._f(LinkToQuery);
  }
  /** Data Source Type. */
  get dataType() {
    return this._f(DataType);
  }
  /** Data Source Connection String. */
  get connectString() {
    return this._f(ConnectString);
  }
  /** Query For Data Source Records To Merge. */
  get query() {
    return this._f(Query);
  }
  /** Data Source File Path. */
  get dataSourceReference() {
    return this._f(DataSourceReference);
  }
  /** Header Definition File Path. */
  get headerSource() {
    return this._f(HeaderSource);
  }
  /** Remove Blank Lines from Merged Documents. */
  get doNotSuppressBlankLines() {
    return this._f(DoNotSuppressBlankLines);
  }
  /** Merged Document Destination. */
  get destination() {
    return this._f(Destination);
  }
  /** Column Containing E-mail Address. */
  get addressFieldName() {
    return this._f(AddressFieldName);
  }
  /** Merged E-mail or Fax Subject Line. */
  get mailSubject() {
    return this._f(MailSubject);
  }
  /** Merged Document To E-Mail Attachment. */
  get mailAsAttachment() {
    return this._f(MailAsAttachment);
  }
  /** View Merged Data Within Document. */
  get viewMergedData() {
    return this._f(ViewMergedData);
  }
  /** Record Currently Displayed In Merged Document. */
  get activeRecord() {
    return this._f(ActiveRecord);
  }
  /** Mail Merge Error Reporting Setting. */
  get checkErrors() {
    return this._f(CheckErrors);
  }
  /** Office Data Source Object Settings. */
  get dataSourceObject() {
    return this._f(DataSourceObject);
  }
}
class DocumentType extends OxmlLeafElement {
  static _Q = "w:documentType";
  static _A = ["w:val"];
  /** Document Classification Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class StylePaneSortMethods extends OxmlLeafElement {
  static _Q = "w:stylePaneSortMethod";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
}
class StylePaneFormatFilter extends OxmlLeafElement {
  static _Q = "w:stylePaneFormatFilter";
  static _A = ["w:val", "w:allStyles", "w:customStyles", "w:latentStyles", "w:stylesInUse", "w:headingStyles", "w:numberingStyles", "w:tableStyles", "w:directFormattingOnRuns", "w:directFormattingOnParagraphs", "w:directFormattingOnNumbering", "w:directFormattingOnTables", "w:clearFormatting", "w:top3HeadingStyles", "w:visibleStyles", "w:alternateStyleNames"];
  /** val. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
  /** allStyles. Serialized as `w:allStyles` */
  get allStyles() {
    return this._g("w:allStyles");
  }
  set allStyles(v) {
    this._s("w:allStyles", v);
  }
  /** customStyles. Serialized as `w:customStyles` */
  get customStyles() {
    return this._g("w:customStyles");
  }
  set customStyles(v) {
    this._s("w:customStyles", v);
  }
  /** latentStyles. Serialized as `w:latentStyles` */
  get latentStyles() {
    return this._g("w:latentStyles");
  }
  set latentStyles(v) {
    this._s("w:latentStyles", v);
  }
  /** stylesInUse. Serialized as `w:stylesInUse` */
  get stylesInUse() {
    return this._g("w:stylesInUse");
  }
  set stylesInUse(v) {
    this._s("w:stylesInUse", v);
  }
  /** headingStyles. Serialized as `w:headingStyles` */
  get headingStyles() {
    return this._g("w:headingStyles");
  }
  set headingStyles(v) {
    this._s("w:headingStyles", v);
  }
  /** numberingStyles. Serialized as `w:numberingStyles` */
  get numberingStyles() {
    return this._g("w:numberingStyles");
  }
  set numberingStyles(v) {
    this._s("w:numberingStyles", v);
  }
  /** tableStyles. Serialized as `w:tableStyles` */
  get tableStyles() {
    return this._g("w:tableStyles");
  }
  set tableStyles(v) {
    this._s("w:tableStyles", v);
  }
  /** directFormattingOnRuns. Serialized as `w:directFormattingOnRuns` */
  get directFormattingOnRuns() {
    return this._g("w:directFormattingOnRuns");
  }
  set directFormattingOnRuns(v) {
    this._s("w:directFormattingOnRuns", v);
  }
  /** directFormattingOnParagraphs. Serialized as `w:directFormattingOnParagraphs` */
  get directFormattingOnParagraphs() {
    return this._g("w:directFormattingOnParagraphs");
  }
  set directFormattingOnParagraphs(v) {
    this._s("w:directFormattingOnParagraphs", v);
  }
  /** directFormattingOnNumbering. Serialized as `w:directFormattingOnNumbering` */
  get directFormattingOnNumbering() {
    return this._g("w:directFormattingOnNumbering");
  }
  set directFormattingOnNumbering(v) {
    this._s("w:directFormattingOnNumbering", v);
  }
  /** directFormattingOnTables. Serialized as `w:directFormattingOnTables` */
  get directFormattingOnTables() {
    return this._g("w:directFormattingOnTables");
  }
  set directFormattingOnTables(v) {
    this._s("w:directFormattingOnTables", v);
  }
  /** clearFormatting. Serialized as `w:clearFormatting` */
  get clearFormatting() {
    return this._g("w:clearFormatting");
  }
  set clearFormatting(v) {
    this._s("w:clearFormatting", v);
  }
  /** top3HeadingStyles. Serialized as `w:top3HeadingStyles` */
  get top3HeadingStyles() {
    return this._g("w:top3HeadingStyles");
  }
  set top3HeadingStyles(v) {
    this._s("w:top3HeadingStyles", v);
  }
  /** visibleStyles. Serialized as `w:visibleStyles` */
  get visibleStyles() {
    return this._g("w:visibleStyles");
  }
  set visibleStyles(v) {
    this._s("w:visibleStyles", v);
  }
  /** alternateStyleNames. Serialized as `w:alternateStyleNames` */
  get alternateStyleNames() {
    return this._g("w:alternateStyleNames");
  }
  set alternateStyleNames(v) {
    this._s("w:alternateStyleNames", v);
  }
}
class ProofState extends OxmlLeafElement {
  static _Q = "w:proofState";
  static _A = ["w:spelling", "w:grammar"];
  /** Spell Checking State. Serialized as `w:spelling` */
  get spelling() {
    return this._g("w:spelling");
  }
  set spelling(v) {
    this._s("w:spelling", v);
  }
  /** Grammatical Checking State. Serialized as `w:grammar` */
  get grammar() {
    return this._g("w:grammar");
  }
  set grammar(v) {
    this._s("w:grammar", v);
  }
}
class ActiveWritingStyle extends OxmlLeafElement {
  static _Q = "w:activeWritingStyle";
  static _A = ["w:lang", "w:vendorID", "w:dllVersion", "w:nlCheck", "w:checkStyle", "w:appName"];
  /** Writing Style Language. Serialized as `w:lang` */
  get language() {
    return this._g("w:lang");
  }
  set language(v) {
    this._s("w:lang", v);
  }
  /** Grammatical Engine ID. Serialized as `w:vendorID` */
  get vendorID() {
    return this._g("w:vendorID");
  }
  set vendorID(v) {
    this._s("w:vendorID", v);
  }
  /** Grammatical Check Engine Version. Serialized as `w:dllVersion` */
  get dllVersion() {
    return this._g("w:dllVersion");
  }
  set dllVersion(v) {
    this._s("w:dllVersion", v);
  }
  /** Natural Language Grammar Check. Serialized as `w:nlCheck` */
  get naturalLanguageGrammarCheck() {
    return this._g("w:nlCheck");
  }
  set naturalLanguageGrammarCheck(v) {
    this._s("w:nlCheck", v);
  }
  /** Check Stylistic Rules With Grammar. Serialized as `w:checkStyle` */
  get checkStyle() {
    return this._g("w:checkStyle");
  }
  set checkStyle(v) {
    this._s("w:checkStyle", v);
  }
  /** Application Name. Serialized as `w:appName` */
  get applicationName() {
    return this._g("w:appName");
  }
  set applicationName(v) {
    this._s("w:appName", v);
  }
}
class Zoom extends OxmlLeafElement {
  static _Q = "w:zoom";
  static _A = ["w:val", "w:percent"];
  /** Zoom Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Zoom Percentage. Serialized as `w:percent` */
  get percent() {
    return this._g("w:percent");
  }
  set percent(v) {
    this._s("w:percent", v);
  }
}
class View extends OxmlLeafElement {
  static _Q = "w:view";
  static _A = ["w:val"];
  /** Document View Setting  Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class WriteProtection extends OxmlLeafElement {
  static _Q = "w:writeProtection";
  static _A = ["w:recommended", "w:cryptProviderType", "w:cryptAlgorithmClass", "w:cryptAlgorithmType", "w:cryptAlgorithmSid", "w:cryptSpinCount", "w:cryptProvider", "w:algIdExt", "w:algIdExtSource", "w:cryptProviderTypeExt", "w:cryptProviderTypeExtSource", "w:hash", "w:salt", "w:algorithmName", "w:hashValue", "w:saltValue", "w:spinCount"];
  /** Recommend Write Protection in User Interface. Serialized as `w:recommended` */
  get recommended() {
    return this._g("w:recommended");
  }
  set recommended(v) {
    this._s("w:recommended", v);
  }
  /** Cryptographic Provider Type. Serialized as `w:cryptProviderType` */
  get cryptographicProviderType() {
    return this._g("w:cryptProviderType");
  }
  set cryptographicProviderType(v) {
    this._s("w:cryptProviderType", v);
  }
  /** Cryptographic Algorithm Class. Serialized as `w:cryptAlgorithmClass` */
  get cryptographicAlgorithmClass() {
    return this._g("w:cryptAlgorithmClass");
  }
  set cryptographicAlgorithmClass(v) {
    this._s("w:cryptAlgorithmClass", v);
  }
  /** Cryptographic Algorithm Type. Serialized as `w:cryptAlgorithmType` */
  get cryptographicAlgorithmType() {
    return this._g("w:cryptAlgorithmType");
  }
  set cryptographicAlgorithmType(v) {
    this._s("w:cryptAlgorithmType", v);
  }
  /** Cryptographic Hashing Algorithm. Serialized as `w:cryptAlgorithmSid` */
  get cryptographicAlgorithmSid() {
    return this._g("w:cryptAlgorithmSid");
  }
  set cryptographicAlgorithmSid(v) {
    this._s("w:cryptAlgorithmSid", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `w:cryptSpinCount` */
  get cryptographicSpinCount() {
    return this._g("w:cryptSpinCount");
  }
  set cryptographicSpinCount(v) {
    this._s("w:cryptSpinCount", v);
  }
  /** Cryptographic Provider. Serialized as `w:cryptProvider` */
  get cryptographicProvider() {
    return this._g("w:cryptProvider");
  }
  set cryptographicProvider(v) {
    this._s("w:cryptProvider", v);
  }
  /** Cryptographic Algorithm Extensibility. Serialized as `w:algIdExt` */
  get algorithmIdExtensibility() {
    return this._g("w:algIdExt");
  }
  set algorithmIdExtensibility(v) {
    this._s("w:algIdExt", v);
  }
  /** Algorithm Extensibility Source. Serialized as `w:algIdExtSource` */
  get algorithmIdExtensibilitySource() {
    return this._g("w:algIdExtSource");
  }
  set algorithmIdExtensibilitySource(v) {
    this._s("w:algIdExtSource", v);
  }
  /** Cryptographic Provider Type Extensibility. Serialized as `w:cryptProviderTypeExt` */
  get cryptographicProviderTypeExtensibility() {
    return this._g("w:cryptProviderTypeExt");
  }
  set cryptographicProviderTypeExtensibility(v) {
    this._s("w:cryptProviderTypeExt", v);
  }
  /** Provider Type Extensibility Source. Serialized as `w:cryptProviderTypeExtSource` */
  get cryptographicProviderTypeExtSource() {
    return this._g("w:cryptProviderTypeExtSource");
  }
  set cryptographicProviderTypeExtSource(v) {
    this._s("w:cryptProviderTypeExtSource", v);
  }
  /** Password Hash. Serialized as `w:hash` */
  get hash() {
    return this._g("w:hash");
  }
  set hash(v) {
    this._s("w:hash", v);
  }
  /** Salt for Password Verifier. Serialized as `w:salt` */
  get salt() {
    return this._g("w:salt");
  }
  set salt(v) {
    this._s("w:salt", v);
  }
  /** algorithmName. Serialized as `w:algorithmName` */
  get algorithmName() {
    return this._g("w:algorithmName");
  }
  set algorithmName(v) {
    this._s("w:algorithmName", v);
  }
  /** hashValue. Serialized as `w:hashValue` */
  get hashValue() {
    return this._g("w:hashValue");
  }
  set hashValue(v) {
    this._s("w:hashValue", v);
  }
  /** saltValue. Serialized as `w:saltValue` */
  get saltValue() {
    return this._g("w:saltValue");
  }
  set saltValue(v) {
    this._s("w:saltValue", v);
  }
  /** spinCount. Serialized as `w:spinCount` */
  get spinCount() {
    return this._g("w:spinCount");
  }
  set spinCount(v) {
    this._s("w:spinCount", v);
  }
}
class SdtContentText extends OxmlLeafElement {
  static _Q = "w:text";
  static _A = ["w:multiLine"];
  /** Allow Soft Line Breaks. Serialized as `w:multiLine` */
  get multiLine() {
    return this._g("w:multiLine");
  }
  set multiLine(v) {
    this._s("w:multiLine", v);
  }
}
class SdtContentDropDownList extends OxmlCompositeElement {
  static _Q = "w:dropDownList";
  static _A = ["w:lastValue"];
  /** Drop-down List Last Saved Value. Serialized as `w:lastValue` */
  get lastValue() {
    return this._g("w:lastValue");
  }
  set lastValue(v) {
    this._s("w:lastValue", v);
  }
}
class SdtDocPartType extends OxmlCompositeElement {
  /** Document Part Gallery Filter. */
  get docPartGallery() {
    return this._f(DocPartGallery);
  }
  /** Document Part Category Filter. */
  get docPartCategory() {
    return this._f(DocPartCategory);
  }
  /** Built-In Document Part. */
  get docPartUnique() {
    return this._f(DocPartUnique);
  }
}
class SdtContentDocPartList extends SdtDocPartType {
  static _Q = "w:docPartList";
}
class SdtContentDocPartObject extends SdtDocPartType {
  static _Q = "w:docPartObj";
}
class SdtContentDate extends OxmlCompositeElement {
  static _Q = "w:date";
  static _A = ["w:fullDate"];
  /** Last Known Date in XML Schema DateTime Format. Serialized as `w:fullDate` */
  get fullDate() {
    return this._g("w:fullDate");
  }
  set fullDate(v) {
    this._s("w:fullDate", v);
  }
  /** Date Display Mask. */
  get dateFormat() {
    return this._f(DateFormat);
  }
  /** Date Picker Language ID. */
  get languageId() {
    return this._f(LanguageId);
  }
  /** Custom XML Data Date Storage Format. */
  get sdtDateMappingType() {
    return this._f(SdtDateMappingType);
  }
  /** Date Picker Calendar Type. */
  get calendar() {
    return this._f(Calendar);
  }
}
class SdtContentComboBox extends OxmlCompositeElement {
  static _Q = "w:comboBox";
  static _A = ["w:lastValue"];
  /** Combo Box Last Saved Value. Serialized as `w:lastValue` */
  get lastValue() {
    return this._g("w:lastValue");
  }
  set lastValue(v) {
    this._s("w:lastValue", v);
  }
}
class DataBinding extends OxmlLeafElement {
  static _Q = "w:dataBinding";
  static _A = ["w:prefixMappings", "w:xpath", "w:storeItemID"];
  /** XML Namespace Prefix Mappings. Serialized as `w:prefixMappings` */
  get prefixMappings() {
    return this._g("w:prefixMappings");
  }
  set prefixMappings(v) {
    this._s("w:prefixMappings", v);
  }
  /** XPath. Serialized as `w:xpath` */
  get xPath() {
    return this._g("w:xpath");
  }
  set xPath(v) {
    this._s("w:xpath", v);
  }
  /** Custom XML Data Storage ID. Serialized as `w:storeItemID` */
  get storeItemId() {
    return this._g("w:storeItemID");
  }
  set storeItemId(v) {
    this._s("w:storeItemID", v);
  }
}
class SdtPlaceholder extends OxmlCompositeElement {
  static _Q = "w:placeholder";
  /** Document Part Reference. */
  get docPartReference() {
    return this._f(DocPartReference);
  }
}
class Lock extends OxmlLeafElement {
  static _Q = "w:lock";
  static _A = ["w:val"];
  /** Locking Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class ObjectLink extends OxmlLeafElement {
  static _Q = "w:objectLink";
  static _A = ["w:updateMode", "w:lockedField", "w:drawAspect", "r:id", "w:progId", "w:shapeId", "w:fieldCodes"];
  /** updateMode. Serialized as `w:updateMode` */
  get updateMode() {
    return this._g("w:updateMode");
  }
  set updateMode(v) {
    this._s("w:updateMode", v);
  }
  /** lockedField. Serialized as `w:lockedField` */
  get lockedField() {
    return this._g("w:lockedField");
  }
  set lockedField(v) {
    this._s("w:lockedField", v);
  }
  /** drawAspect. Serialized as `w:drawAspect` */
  get drawAspect() {
    return this._g("w:drawAspect");
  }
  set drawAspect(v) {
    this._s("w:drawAspect", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** progId. Serialized as `w:progId` */
  get progId() {
    return this._g("w:progId");
  }
  set progId(v) {
    this._s("w:progId", v);
  }
  /** shapeId. Serialized as `w:shapeId` */
  get shapeId() {
    return this._g("w:shapeId");
  }
  set shapeId(v) {
    this._s("w:shapeId", v);
  }
  /** fieldCodes. Serialized as `w:fieldCodes` */
  get fieldCodes() {
    return this._g("w:fieldCodes");
  }
  set fieldCodes(v) {
    this._s("w:fieldCodes", v);
  }
}
class ObjectEmbed extends OxmlLeafElement {
  static _Q = "w:objectEmbed";
  static _A = ["w:drawAspect", "r:id", "w:progId", "w:shapeId", "w:fieldCodes"];
  /** drawAspect. Serialized as `w:drawAspect` */
  get drawAspect() {
    return this._g("w:drawAspect");
  }
  set drawAspect(v) {
    this._s("w:drawAspect", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** progId. Serialized as `w:progId` */
  get progId() {
    return this._g("w:progId");
  }
  set progId(v) {
    this._s("w:progId", v);
  }
  /** shapeId. Serialized as `w:shapeId` */
  get shapeId() {
    return this._g("w:shapeId");
  }
  set shapeId(v) {
    this._s("w:shapeId", v);
  }
  /** fieldCodes. Serialized as `w:fieldCodes` */
  get fieldCodes() {
    return this._g("w:fieldCodes");
  }
  set fieldCodes(v) {
    this._s("w:fieldCodes", v);
  }
}
class PreviousTableGrid extends OxmlCompositeElement {
  static _Q = "w:tblGrid";
}
class Control extends OxmlLeafElement {
  static _Q = "w:control";
  static _A = ["w:name", "w:shapeid", "r:id"];
  /** Unique Name for Embedded Control. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** Associated VML Data Reference. Serialized as `w:shapeid` */
  get shapeId() {
    return this._g("w:shapeid");
  }
  set shapeId(v) {
    this._s("w:shapeid", v);
  }
  /** Embedded Control Properties Relationship Reference. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class ParagraphProperties extends OxmlCompositeElement {
  static _Q = "w:pPr";
  /** Returns ParagraphStyleId. */
  get paragraphStyleId() {
    return this._f(ParagraphStyleId);
  }
  /** Returns KeepNext. */
  get keepNext() {
    return this._f(KeepNext);
  }
  /** Returns KeepLines. */
  get keepLines() {
    return this._f(KeepLines);
  }
  /** Returns PageBreakBefore. */
  get pageBreakBefore() {
    return this._f(PageBreakBefore);
  }
  /** Returns FrameProperties. */
  get frameProperties() {
    return this._f(FrameProperties);
  }
  /** Returns WidowControl. */
  get widowControl() {
    return this._f(WidowControl);
  }
  /** Returns NumberingProperties. */
  get numberingProperties() {
    return this._f(NumberingProperties);
  }
  /** Returns SuppressLineNumbers. */
  get suppressLineNumbers() {
    return this._f(SuppressLineNumbers);
  }
  /** Returns ParagraphBorders. */
  get paragraphBorders() {
    return this._f(ParagraphBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns SuppressAutoHyphens. */
  get suppressAutoHyphens() {
    return this._f(SuppressAutoHyphens);
  }
  /** Returns Kinsoku. */
  get kinsoku() {
    return this._f(Kinsoku);
  }
  /** Returns WordWrap. */
  get wordWrap() {
    return this._f(WordWrap);
  }
  /** Returns OverflowPunctuation. */
  get overflowPunctuation() {
    return this._f(OverflowPunctuation);
  }
  /** Returns TopLinePunctuation. */
  get topLinePunctuation() {
    return this._f(TopLinePunctuation);
  }
  /** Returns AutoSpaceDE. */
  get autoSpaceDE() {
    return this._f(AutoSpaceDE);
  }
  /** Returns AutoSpaceDN. */
  get autoSpaceDN() {
    return this._f(AutoSpaceDN);
  }
  /** Returns BiDi. */
  get biDi() {
    return this._f(BiDi);
  }
  /** Returns AdjustRightIndent. */
  get adjustRightIndent() {
    return this._f(AdjustRightIndent);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns SpacingBetweenLines. */
  get spacingBetweenLines() {
    return this._f(SpacingBetweenLines);
  }
  /** Returns Indentation. */
  get indentation() {
    return this._f(Indentation);
  }
  /** Returns ContextualSpacing. */
  get contextualSpacing() {
    return this._f(ContextualSpacing);
  }
  /** Returns MirrorIndents. */
  get mirrorIndents() {
    return this._f(MirrorIndents);
  }
  /** Returns SuppressOverlap. */
  get suppressOverlap() {
    return this._f(SuppressOverlap);
  }
  /** Returns Justification. */
  get justification() {
    return this._f(Justification);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TextAlignment. */
  get textAlignment() {
    return this._f(TextAlignment);
  }
  /** Returns TextBoxTightWrap. */
  get textBoxTightWrap() {
    return this._f(TextBoxTightWrap);
  }
  /** Returns OutlineLevel. */
  get outlineLevel() {
    return this._f(OutlineLevel);
  }
  /** Returns DivId. */
  get divId() {
    return this._f(DivId);
  }
  /** Returns ConditionalFormatStyle. */
  get conditionalFormatStyle() {
    return this._f(ConditionalFormatStyle);
  }
  /** Run Properties for the Paragraph Mark. */
  get paragraphMarkRunProperties() {
    return this._f(ParagraphMarkRunProperties);
  }
  /** Section Properties. */
  get sectionProperties() {
    return this._f(SectionProperties);
  }
  /** Returns ParagraphPropertiesChange. */
  get paragraphPropertiesChange() {
    return this._f(ParagraphPropertiesChange);
  }
}
class TableRowPropertiesChange extends OxmlCompositeElement {
  static _Q = "w:trPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Table Row Properties. */
  get previousTableRowProperties() {
    return this._f(PreviousTableRowProperties);
  }
}
class TableRowProperties extends OxmlCompositeElement {
  static _Q = "w:trPr";
}
class TablePropertyExceptions extends OxmlCompositeElement {
  static _Q = "w:tblPrEx";
  /** Preferred Table Width Exception. */
  get tableWidth() {
    return this._f(TableWidth);
  }
  /** Table Alignment Exception. */
  get tableJustification() {
    return this._f(TableJustification);
  }
  /** Table Cell Spacing Exception. */
  get tableCellSpacing() {
    return this._f(TableCellSpacing);
  }
  /** Table Indent from Leading Margin Exception. */
  get tableIndentation() {
    return this._f(TableIndentation);
  }
  /** Table Borders Exceptions. */
  get tableBorders() {
    return this._f(TableBorders);
  }
  /** Table Shading Exception. */
  get shading() {
    return this._f(Shading);
  }
  /** Table Layout Exception. */
  get tableLayout() {
    return this._f(TableLayout);
  }
  /** Table Cell Margin Exceptions. */
  get tableCellMarginDefault() {
    return this._f(TableCellMarginDefault);
  }
  /** Table Style Conditional Formatting Settings Exception. */
  get tableLook() {
    return this._f(TableLook);
  }
  /** Revision Information for Table-Level Property Exceptions. */
  get tablePropertyExceptionsChange() {
    return this._f(TablePropertyExceptionsChange);
  }
}
class TableWidthDxaNilType extends OxmlLeafElement {
  static _A = ["w:w", "w:type"];
  /** w. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
}
class TableCellRightMargin extends TableWidthDxaNilType {
  static _Q = "w:right";
}
class TableCellLeftMargin extends TableWidthDxaNilType {
  static _Q = "w:left";
}
class CompatibilitySetting extends OxmlLeafElement {
  static _Q = "w:compatSetting";
  static _A = ["w:name", "w:uri", "w:val"];
  /** name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** uri. Serialized as `w:uri` */
  get uri() {
    return this._g("w:uri");
  }
  set uri(v) {
    this._s("w:uri", v);
  }
  /** val. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
}
class DocPart extends OxmlCompositeElement {
  static _Q = "w:docPart";
  /** Glossary Document Entry Properties. */
  get docPartProperties() {
    return this._f(DocPartProperties);
  }
  /** Contents of Glossary Document Entry. */
  get docPartBody() {
    return this._f(DocPartBody);
  }
}
class BodyType extends OxmlCompositeElement {
}
class Body extends BodyType {
  static _Q = "w:body";
}
class DocPartBody extends BodyType {
  static _Q = "w:docPartBody";
}
class DocPartProperties extends OxmlCompositeElement {
  static _Q = "w:docPartPr";
  /** Entry Name. */
  get docPartName() {
    return this._f(DocPartName);
  }
  /** Associated Paragraph Style Name. */
  get styleId() {
    return this._f(StyleId);
  }
  /** Entry Categorization. */
  get category() {
    return this._f(Category);
  }
  /** Entry Types. */
  get docPartTypes() {
    return this._f(DocPartTypes);
  }
  /** Entry Insertion Behaviors. */
  get behaviors() {
    return this._f(Behaviors);
  }
  /** Description for Entry. */
  get description() {
    return this._f(Description);
  }
  /** Entry ID. */
  get docPartId() {
    return this._f(DocPartId);
  }
}
class DocPartId extends OxmlLeafElement {
  static _Q = "w:guid";
  static _A = ["w:val"];
  /** GUID Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Behaviors extends OxmlCompositeElement {
  static _Q = "w:behaviors";
}
class DocPartTypes extends OxmlCompositeElement {
  static _Q = "w:types";
  static _A = ["w:all"];
  /** Entry Is Of All Types. Serialized as `w:all` */
  get all() {
    return this._g("w:all");
  }
  set all(v) {
    this._s("w:all", v);
  }
}
class Category extends OxmlCompositeElement {
  static _Q = "w:category";
  /** Category Associated With Entry. */
  get name() {
    return this._f(Name);
  }
  /** Gallery Associated With Entry. */
  get gallery() {
    return this._f(Gallery);
  }
}
class DocPartName extends OxmlLeafElement {
  static _Q = "w:name";
  static _A = ["w:val", "w:decorated"];
  /** Name Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Built-In Entry. Serialized as `w:decorated` */
  get decorated() {
    return this._g("w:decorated");
  }
  set decorated(v) {
    this._s("w:decorated", v);
  }
}
class DocParts extends OxmlCompositeElement {
  static _Q = "w:docParts";
}
class DocumentBackground extends OxmlCompositeElement {
  static _Q = "w:background";
  static _A = ["w:color", "w:themeColor", "w:themeTint", "w:themeShade"];
  /** color. Serialized as `w:color` */
  get color() {
    return this._g("w:color");
  }
  set color(v) {
    this._s("w:color", v);
  }
  /** themeColor. Serialized as `w:themeColor` */
  get themeColor() {
    return this._g("w:themeColor");
  }
  set themeColor(v) {
    this._s("w:themeColor", v);
  }
  /** themeTint. Serialized as `w:themeTint` */
  get themeTint() {
    return this._g("w:themeTint");
  }
  set themeTint(v) {
    this._s("w:themeTint", v);
  }
  /** themeShade. Serialized as `w:themeShade` */
  get themeShade() {
    return this._g("w:themeShade");
  }
  set themeShade(v) {
    this._s("w:themeShade", v);
  }
  /** Returns VBackground. */
  get background() {
    return this._f(VBackground);
  }
}
class AutoCaptions extends OxmlCompositeElement {
  static _Q = "w:autoCaptions";
}
class Caption extends OxmlLeafElement {
  static _Q = "w:caption";
  static _A = ["w:name", "w:pos", "w:chapNum", "w:heading", "w:noLabel", "w:numFmt", "w:sep"];
  /** Caption Type Name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** Automatic Caption Placement. Serialized as `w:pos` */
  get position() {
    return this._g("w:pos");
  }
  set position(v) {
    this._s("w:pos", v);
  }
  /** Include Chapter Number in Field for Caption. Serialized as `w:chapNum` */
  get chapterNumber() {
    return this._g("w:chapNum");
  }
  set chapterNumber(v) {
    this._s("w:chapNum", v);
  }
  /** Style for Chapter Headings. Serialized as `w:heading` */
  get heading() {
    return this._g("w:heading");
  }
  set heading(v) {
    this._s("w:heading", v);
  }
  /** Do Not Include Name In Caption. Serialized as `w:noLabel` */
  get noLabel() {
    return this._g("w:noLabel");
  }
  set noLabel(v) {
    this._s("w:noLabel", v);
  }
  /** Caption Numbering Format. Serialized as `w:numFmt` */
  get numberFormat() {
    return this._g("w:numFmt");
  }
  set numberFormat(v) {
    this._s("w:numFmt", v);
  }
  /** Chapter Number/Item Index Separator. Serialized as `w:sep` */
  get separator() {
    return this._g("w:sep");
  }
  set separator(v) {
    this._s("w:sep", v);
  }
}
class AutoCaption extends OxmlLeafElement {
  static _Q = "w:autoCaption";
  static _A = ["w:name", "w:caption"];
  /** Identifier of Object to be Automatically Captioned. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** Caption Used for Automatic Captioning. Serialized as `w:caption` */
  get caption() {
    return this._g("w:caption");
  }
  set caption(v) {
    this._s("w:caption", v);
  }
}
class Gallery extends OxmlLeafElement {
  static _Q = "w:gallery";
  static _A = ["w:val"];
  /** Gallery Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DocPartType extends OxmlLeafElement {
  static _Q = "w:type";
  static _A = ["w:val"];
  /** Type Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Behavior extends OxmlLeafElement {
  static _Q = "w:behavior";
  static _A = ["w:val"];
  /** Insertion Behavior Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FootnoteEndnoteType extends OxmlCompositeElement {
  static _A = ["w:type", "w:id"];
  /** Footnote/Endnote Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Footnote/Endnote ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class Endnote extends FootnoteEndnoteType {
  static _Q = "w:endnote";
}
class Footnote extends FootnoteEndnoteType {
  static _Q = "w:footnote";
}
class Comment extends OxmlCompositeElement {
  static _Q = "w:comment";
  static _A = ["w:initials", "w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** initials. Serialized as `w:initials` */
  get initials() {
    return this._g("w:initials");
  }
  set initials(v) {
    this._s("w:initials", v);
  }
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class Div extends OxmlCompositeElement {
  static _Q = "w:div";
  static _A = ["w:id"];
  /** div Data ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Data for HTML blockquote Element. */
  get blockQuote() {
    return this._f(BlockQuote);
  }
  /** Data for HTML body Element. */
  get bodyDiv() {
    return this._f(BodyDiv);
  }
  /** Left Margin for HTML div. */
  get leftMarginDiv() {
    return this._f(LeftMarginDiv);
  }
  /** Right Margin for HTML div. */
  get rightMarginDiv() {
    return this._f(RightMarginDiv);
  }
  /** Top Margin for HTML div. */
  get topMarginDiv() {
    return this._f(TopMarginDiv);
  }
  /** Bottom Margin for HTML div. */
  get bottomMarginDiv() {
    return this._f(BottomMarginDiv);
  }
  /** Set of Borders for HTML div. */
  get divBorder() {
    return this._f(DivBorder);
  }
}
class DivsType extends OxmlCompositeElement {
}
class Divs extends DivsType {
  static _Q = "w:divs";
}
class DivsChild extends DivsType {
  static _Q = "w:divsChild";
}
class DivBorder extends OxmlCompositeElement {
  static _Q = "w:divBdr";
  /** Top Border for HTML div. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Left Border for HTML div. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Bottom Border for HTML div. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Right Border for HTML div. */
  get rightBorder() {
    return this._f(RightBorder);
  }
}
class SignedTwipsMeasureType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Positive or Negative Value in Twentieths of a Point. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class BottomMarginDiv extends SignedTwipsMeasureType {
  static _Q = "w:marBottom";
}
class TopMarginDiv extends SignedTwipsMeasureType {
  static _Q = "w:marTop";
}
class RightMarginDiv extends SignedTwipsMeasureType {
  static _Q = "w:marRight";
}
class LeftMarginDiv extends SignedTwipsMeasureType {
  static _Q = "w:marLeft";
}
class Font extends OxmlCompositeElement {
  static _Q = "w:font";
  static _A = ["w:name"];
  /** name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** Returns AltName. */
  get altName() {
    return this._f(AltName);
  }
  /** Returns Panose1Number. */
  get panose1Number() {
    return this._f(Panose1Number);
  }
  /** Returns FontCharSet. */
  get fontCharSet() {
    return this._f(FontCharSet);
  }
  /** Returns FontFamily. */
  get fontFamily() {
    return this._f(FontFamily);
  }
  /** Returns NotTrueType. */
  get notTrueType() {
    return this._f(NotTrueType);
  }
  /** Returns Pitch. */
  get pitch() {
    return this._f(Pitch);
  }
  /** Returns FontSignature. */
  get fontSignature() {
    return this._f(FontSignature);
  }
  /** Returns EmbedRegularFont. */
  get embedRegularFont() {
    return this._f(EmbedRegularFont);
  }
  /** Returns EmbedBoldFont. */
  get embedBoldFont() {
    return this._f(EmbedBoldFont);
  }
  /** Returns EmbedItalicFont. */
  get embedItalicFont() {
    return this._f(EmbedItalicFont);
  }
  /** Returns EmbedBoldItalicFont. */
  get embedBoldItalicFont() {
    return this._f(EmbedBoldItalicFont);
  }
}
class Style extends OxmlCompositeElement {
  static _Q = "w:style";
  static _A = ["w:type", "w:styleId", "w:default", "w:customStyle"];
  /** Style Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Style ID. Serialized as `w:styleId` */
  get styleId() {
    return this._g("w:styleId");
  }
  set styleId(v) {
    this._s("w:styleId", v);
  }
  /** Default Style. Serialized as `w:default` */
  get default() {
    return this._g("w:default");
  }
  set default(v) {
    this._s("w:default", v);
  }
  /** User-Defined Style. Serialized as `w:customStyle` */
  get customStyle() {
    return this._g("w:customStyle");
  }
  set customStyle(v) {
    this._s("w:customStyle", v);
  }
  /** Primary Style Name. */
  get styleName() {
    return this._f(StyleName);
  }
  /** Alternate Style Names. */
  get aliases() {
    return this._f(Aliases);
  }
  /** Parent Style ID. */
  get basedOn() {
    return this._f(BasedOn);
  }
  /** Style For Next Paragraph. */
  get nextParagraphStyle() {
    return this._f(NextParagraphStyle);
  }
  /** Linked Style Reference. */
  get linkedStyle() {
    return this._f(LinkedStyle);
  }
  /** Automatically Merge User Formatting Into Style Definition. */
  get autoRedefine() {
    return this._f(AutoRedefine);
  }
  /** Hide Style From User Interface. */
  get styleHidden() {
    return this._f(StyleHidden);
  }
  /** Optional User Interface Sorting Order. */
  get uIPriority() {
    return this._f(UIPriority);
  }
  /** Hide Style From Main User Interface. */
  get semiHidden() {
    return this._f(SemiHidden);
  }
  /** Remove Semi-Hidden Property When Style Is Used. */
  get unhideWhenUsed() {
    return this._f(UnhideWhenUsed);
  }
  /** Primary Style. */
  get primaryStyle() {
    return this._f(PrimaryStyle);
  }
  /** Style Cannot Be Applied. */
  get locked() {
    return this._f(Locked);
  }
  /** E-Mail Message Text Style. */
  get personal() {
    return this._f(Personal);
  }
  /** E-Mail Message Composition Style. */
  get personalCompose() {
    return this._f(PersonalCompose);
  }
  /** E-Mail Message Reply Style. */
  get personalReply() {
    return this._f(PersonalReply);
  }
  /** Revision Identifier for Style Definition. */
  get rsid() {
    return this._f(Rsid);
  }
  /** Style Paragraph Properties. */
  get styleParagraphProperties() {
    return this._f(StyleParagraphProperties);
  }
  /** Run Properties. */
  get styleRunProperties() {
    return this._f(StyleRunProperties);
  }
  /** Style Table Properties. */
  get styleTableProperties() {
    return this._f(StyleTableProperties);
  }
  /** Style Table Row Properties. */
  get tableStyleConditionalFormattingTableRowProperties() {
    return this._f(TableStyleConditionalFormattingTableRowProperties);
  }
  /** Style Table Cell Properties. */
  get styleTableCellProperties() {
    return this._f(StyleTableCellProperties);
  }
}
class LatentStyles extends OxmlCompositeElement {
  static _Q = "w:latentStyles";
  static _A = ["w:defLockedState", "w:defUIPriority", "w:defSemiHidden", "w:defUnhideWhenUsed", "w:defQFormat", "w:count"];
  /** Default Style Locking Setting. Serialized as `w:defLockedState` */
  get defaultLockedState() {
    return this._g("w:defLockedState");
  }
  set defaultLockedState(v) {
    this._s("w:defLockedState", v);
  }
  /** Default User Interface Priority Setting. Serialized as `w:defUIPriority` */
  get defaultUiPriority() {
    return this._g("w:defUIPriority");
  }
  set defaultUiPriority(v) {
    this._s("w:defUIPriority", v);
  }
  /** Default Semi-Hidden Setting. Serialized as `w:defSemiHidden` */
  get defaultSemiHidden() {
    return this._g("w:defSemiHidden");
  }
  set defaultSemiHidden(v) {
    this._s("w:defSemiHidden", v);
  }
  /** Default Hidden Until Used Setting. Serialized as `w:defUnhideWhenUsed` */
  get defaultUnhideWhenUsed() {
    return this._g("w:defUnhideWhenUsed");
  }
  set defaultUnhideWhenUsed(v) {
    this._s("w:defUnhideWhenUsed", v);
  }
  /** Default Primary Style Setting. Serialized as `w:defQFormat` */
  get defaultPrimaryStyle() {
    return this._g("w:defQFormat");
  }
  set defaultPrimaryStyle(v) {
    this._s("w:defQFormat", v);
  }
  /** Latent Style Count. Serialized as `w:count` */
  get count() {
    return this._g("w:count");
  }
  set count(v) {
    this._s("w:count", v);
  }
}
class DocDefaults extends OxmlCompositeElement {
  static _Q = "w:docDefaults";
  /** Default Run Properties. */
  get runPropertiesDefault() {
    return this._f(RunPropertiesDefault);
  }
  /** Default Paragraph Properties. */
  get paragraphPropertiesDefault() {
    return this._f(ParagraphPropertiesDefault);
  }
}
class LatentStyleExceptionInfo extends OxmlLeafElement {
  static _Q = "w:lsdException";
  static _A = ["w:name", "w:locked", "w:uiPriority", "w:semiHidden", "w:unhideWhenUsed", "w:qFormat"];
  /** Primary Style Name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** Latent Style Locking Setting. Serialized as `w:locked` */
  get locked() {
    return this._g("w:locked");
  }
  set locked(v) {
    this._s("w:locked", v);
  }
  /** Override default sorting order. Serialized as `w:uiPriority` */
  get uiPriority() {
    return this._g("w:uiPriority");
  }
  set uiPriority(v) {
    this._s("w:uiPriority", v);
  }
  /** Semi hidden text override. Serialized as `w:semiHidden` */
  get semiHidden() {
    return this._g("w:semiHidden");
  }
  set semiHidden(v) {
    this._s("w:semiHidden", v);
  }
  /** Unhide when used. Serialized as `w:unhideWhenUsed` */
  get unhideWhenUsed() {
    return this._g("w:unhideWhenUsed");
  }
  set unhideWhenUsed(v) {
    this._s("w:unhideWhenUsed", v);
  }
  /** Latent Style Primary Style Setting. Serialized as `w:qFormat` */
  get primaryStyle() {
    return this._g("w:qFormat");
  }
  set primaryStyle(v) {
    this._s("w:qFormat", v);
  }
}
class TableStyleProperties extends OxmlCompositeElement {
  static _Q = "w:tblStylePr";
  static _A = ["w:type"];
  /** Table Style Conditional Formatting Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Table Style Conditional Formatting Paragraph Properties. */
  get styleParagraphProperties() {
    return this._f(StyleParagraphProperties);
  }
  /** Table Style Conditional Formatting Run Properties. */
  get runPropertiesBaseStyle() {
    return this._f(RunPropertiesBaseStyle);
  }
  /** Table Style Conditional Formatting Table Properties. */
  get tableStyleConditionalFormattingTableProperties() {
    return this._f(TableStyleConditionalFormattingTableProperties);
  }
  /** Table Style Conditional Formatting Table Row Properties. */
  get tableStyleConditionalFormattingTableRowProperties() {
    return this._f(TableStyleConditionalFormattingTableRowProperties);
  }
  /** Table Style Conditional Formatting Table Cell Properties. */
  get tableStyleConditionalFormattingTableCellProperties() {
    return this._f(TableStyleConditionalFormattingTableCellProperties);
  }
}
class StyleTableCellProperties extends OxmlCompositeElement {
  static _Q = "w:tcPr";
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns NoWrap. */
  get noWrap() {
    return this._f(NoWrap);
  }
  /** Returns TableCellMargin. */
  get tableCellMargin() {
    return this._f(TableCellMargin);
  }
  /** Returns TableCellVerticalAlignment. */
  get tableCellVerticalAlignment() {
    return this._f(TableCellVerticalAlignment);
  }
}
class StyleTableProperties extends OxmlCompositeElement {
  static _Q = "w:tblPr";
  /** Returns TableStyleRowBandSize. */
  get tableStyleRowBandSize() {
    return this._f(TableStyleRowBandSize);
  }
  /** Returns TableStyleColumnBandSize. */
  get tableStyleColumnBandSize() {
    return this._f(TableStyleColumnBandSize);
  }
  /** Returns TableJustification. */
  get tableJustification() {
    return this._f(TableJustification);
  }
  /** Returns TableCellSpacing. */
  get tableCellSpacing() {
    return this._f(TableCellSpacing);
  }
  /** Returns TableIndentation. */
  get tableIndentation() {
    return this._f(TableIndentation);
  }
  /** Returns TableBorders. */
  get tableBorders() {
    return this._f(TableBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns TableCellMarginDefault. */
  get tableCellMarginDefault() {
    return this._f(TableCellMarginDefault);
  }
}
class StyleRunProperties extends OxmlCompositeElement {
  static _Q = "w:rPr";
  /** Returns RunFonts. */
  get runFonts() {
    return this._f(RunFonts);
  }
  /** Returns Bold. */
  get bold() {
    return this._f(Bold);
  }
  /** Returns BoldComplexScript. */
  get boldComplexScript() {
    return this._f(BoldComplexScript);
  }
  /** Returns Italic. */
  get italic() {
    return this._f(Italic);
  }
  /** Returns ItalicComplexScript. */
  get italicComplexScript() {
    return this._f(ItalicComplexScript);
  }
  /** Returns Caps. */
  get caps() {
    return this._f(Caps);
  }
  /** Returns SmallCaps. */
  get smallCaps() {
    return this._f(SmallCaps);
  }
  /** Returns Strike. */
  get strike() {
    return this._f(Strike);
  }
  /** Returns DoubleStrike. */
  get doubleStrike() {
    return this._f(DoubleStrike);
  }
  /** Returns Outline. */
  get outline() {
    return this._f(Outline);
  }
  /** Returns Shadow. */
  get shadow() {
    return this._f(Shadow);
  }
  /** Returns Emboss. */
  get emboss() {
    return this._f(Emboss);
  }
  /** Returns Imprint. */
  get imprint() {
    return this._f(Imprint);
  }
  /** Returns NoProof. */
  get noProof() {
    return this._f(NoProof);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns Vanish. */
  get vanish() {
    return this._f(Vanish);
  }
  /** Returns WebHidden. */
  get webHidden() {
    return this._f(WebHidden);
  }
  /** Returns Color. */
  get color() {
    return this._f(Color);
  }
  /** Returns Spacing. */
  get spacing() {
    return this._f(Spacing);
  }
  /** Returns CharacterScale. */
  get characterScale() {
    return this._f(CharacterScale);
  }
  /** Returns Kern. */
  get kern() {
    return this._f(Kern);
  }
  /** Returns Position. */
  get position() {
    return this._f(Position);
  }
  /** Returns FontSize. */
  get fontSize() {
    return this._f(FontSize);
  }
  /** Returns FontSizeComplexScript. */
  get fontSizeComplexScript() {
    return this._f(FontSizeComplexScript);
  }
  /** Returns Underline. */
  get underline() {
    return this._f(Underline);
  }
  /** Returns TextEffect. */
  get textEffect() {
    return this._f(TextEffect);
  }
  /** Returns Border. */
  get border() {
    return this._f(Border);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns FitText. */
  get fitText() {
    return this._f(FitText);
  }
  /** Returns VerticalTextAlignment. */
  get verticalTextAlignment() {
    return this._f(VerticalTextAlignment);
  }
  /** Returns Emphasis. */
  get emphasis() {
    return this._f(Emphasis);
  }
  /** Returns Languages. */
  get languages() {
    return this._f(Languages);
  }
  /** Returns EastAsianLayout. */
  get eastAsianLayout() {
    return this._f(EastAsianLayout);
  }
  /** Returns SpecVanish. */
  get specVanish() {
    return this._f(SpecVanish);
  }
  /** Returns RunPropertiesChange. */
  get runPropertiesChange() {
    return this._f(RunPropertiesChange);
  }
}
class UIPriority extends OxmlLeafElement {
  static _Q = "w:uiPriority";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class StyleName extends OxmlLeafElement {
  static _Q = "w:name";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableStyleConditionalFormattingTableCellProperties extends OxmlCompositeElement {
  static _Q = "w:tcPr";
  /** Returns TableCellBorders. */
  get tableCellBorders() {
    return this._f(TableCellBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns NoWrap. */
  get noWrap() {
    return this._f(NoWrap);
  }
  /** Returns TableCellMargin. */
  get tableCellMargin() {
    return this._f(TableCellMargin);
  }
  /** Returns TableCellVerticalAlignment. */
  get tableCellVerticalAlignment() {
    return this._f(TableCellVerticalAlignment);
  }
}
class TableStyleConditionalFormattingTableRowProperties extends OxmlCompositeElement {
  static _Q = "w:trPr";
}
class TableStyleConditionalFormattingTableProperties extends OxmlCompositeElement {
  static _Q = "w:tblPr";
  /** Returns TableJustification. */
  get tableJustification() {
    return this._f(TableJustification);
  }
  /** Returns TableCellSpacing. */
  get tableCellSpacing() {
    return this._f(TableCellSpacing);
  }
  /** Returns TableIndentation. */
  get tableIndentation() {
    return this._f(TableIndentation);
  }
  /** Returns TableBorders. */
  get tableBorders() {
    return this._f(TableBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns TableCellMarginDefault. */
  get tableCellMarginDefault() {
    return this._f(TableCellMarginDefault);
  }
}
class StyleParagraphProperties extends OxmlCompositeElement {
  static _Q = "w:pPr";
  /** Returns KeepNext. */
  get keepNext() {
    return this._f(KeepNext);
  }
  /** Returns KeepLines. */
  get keepLines() {
    return this._f(KeepLines);
  }
  /** Returns PageBreakBefore. */
  get pageBreakBefore() {
    return this._f(PageBreakBefore);
  }
  /** Returns FrameProperties. */
  get frameProperties() {
    return this._f(FrameProperties);
  }
  /** Returns WidowControl. */
  get widowControl() {
    return this._f(WidowControl);
  }
  /** Returns NumberingProperties. */
  get numberingProperties() {
    return this._f(NumberingProperties);
  }
  /** Returns SuppressLineNumbers. */
  get suppressLineNumbers() {
    return this._f(SuppressLineNumbers);
  }
  /** Returns ParagraphBorders. */
  get paragraphBorders() {
    return this._f(ParagraphBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns SuppressAutoHyphens. */
  get suppressAutoHyphens() {
    return this._f(SuppressAutoHyphens);
  }
  /** Returns Kinsoku. */
  get kinsoku() {
    return this._f(Kinsoku);
  }
  /** Returns WordWrap. */
  get wordWrap() {
    return this._f(WordWrap);
  }
  /** Returns OverflowPunctuation. */
  get overflowPunctuation() {
    return this._f(OverflowPunctuation);
  }
  /** Returns TopLinePunctuation. */
  get topLinePunctuation() {
    return this._f(TopLinePunctuation);
  }
  /** Returns AutoSpaceDE. */
  get autoSpaceDE() {
    return this._f(AutoSpaceDE);
  }
  /** Returns AutoSpaceDN. */
  get autoSpaceDN() {
    return this._f(AutoSpaceDN);
  }
  /** Returns BiDi. */
  get biDi() {
    return this._f(BiDi);
  }
  /** Returns AdjustRightIndent. */
  get adjustRightIndent() {
    return this._f(AdjustRightIndent);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns SpacingBetweenLines. */
  get spacingBetweenLines() {
    return this._f(SpacingBetweenLines);
  }
  /** Returns Indentation. */
  get indentation() {
    return this._f(Indentation);
  }
  /** Returns ContextualSpacing. */
  get contextualSpacing() {
    return this._f(ContextualSpacing);
  }
  /** Returns MirrorIndents. */
  get mirrorIndents() {
    return this._f(MirrorIndents);
  }
  /** Returns SuppressOverlap. */
  get suppressOverlap() {
    return this._f(SuppressOverlap);
  }
  /** Returns Justification. */
  get justification() {
    return this._f(Justification);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TextAlignment. */
  get textAlignment() {
    return this._f(TextAlignment);
  }
  /** Returns TextBoxTightWrap. */
  get textBoxTightWrap() {
    return this._f(TextBoxTightWrap);
  }
  /** Returns OutlineLevel. */
  get outlineLevel() {
    return this._f(OutlineLevel);
  }
  /** Returns ParagraphPropertiesChange. */
  get paragraphPropertiesChange() {
    return this._f(ParagraphPropertiesChange);
  }
}
class NumberingInstance extends OxmlCompositeElement {
  static _Q = "w:num";
  static _A = ["w:numId", "w:durableId"];
  /** numId. Serialized as `w:numId` */
  get numberID() {
    return this._g("w:numId");
  }
  set numberID(v) {
    this._s("w:numId", v);
  }
  /** durableId. Serialized as `w:durableId` */
  get durableId() {
    return this._g("w:durableId");
  }
  set durableId(v) {
    this._s("w:durableId", v);
  }
  /** Returns AbstractNumId. */
  get abstractNumId() {
    return this._f(AbstractNumId);
  }
}
class AbstractNum extends OxmlCompositeElement {
  static _Q = "w:abstractNum";
  static _A = ["w:abstractNumId"];
  /** Abstract Numbering Definition ID. Serialized as `w:abstractNumId` */
  get abstractNumberId() {
    return this._g("w:abstractNumId");
  }
  set abstractNumberId(v) {
    this._s("w:abstractNumId", v);
  }
  /** Abstract Numbering Definition Identifier. */
  get nsid() {
    return this._f(Nsid);
  }
  /** Abstract Numbering Definition Type. */
  get multiLevelType() {
    return this._f(MultiLevelType);
  }
  /** Numbering Template Code. */
  get templateCode() {
    return this._f(TemplateCode);
  }
  /** Abstract Numbering Definition Name. */
  get abstractNumDefinitionName() {
    return this._f(AbstractNumDefinitionName);
  }
  /** Numbering Style Definition. */
  get styleLink() {
    return this._f(StyleLink);
  }
  /** Numbering Style Reference. */
  get numberingStyleLink() {
    return this._f(NumberingStyleLink);
  }
}
class NumberingPictureBullet extends OxmlCompositeElement {
  static _Q = "w:numPicBullet";
  static _A = ["w:numPicBulletId"];
  /** numPicBulletId. Serialized as `w:numPicBulletId` */
  get numberingPictureBulletId() {
    return this._g("w:numPicBulletId");
  }
  set numberingPictureBulletId(v) {
    this._s("w:numPicBulletId", v);
  }
  /** Returns PictureBulletBase. */
  get pictureBulletBase() {
    return this._f(PictureBulletBase);
  }
  /** Returns Drawing. */
  get drawing() {
    return this._f(Drawing);
  }
}
class Level extends OxmlCompositeElement {
  static _Q = "w:lvl";
  static _A = ["w:ilvl", "w:tplc", "w:tentative"];
  /** Numbering Level. Serialized as `w:ilvl` */
  get levelIndex() {
    return this._g("w:ilvl");
  }
  set levelIndex(v) {
    this._s("w:ilvl", v);
  }
  /** Template Code. Serialized as `w:tplc` */
  get templateCode() {
    return this._g("w:tplc");
  }
  set templateCode(v) {
    this._s("w:tplc", v);
  }
  /** Tentative Numbering. Serialized as `w:tentative` */
  get tentative() {
    return this._g("w:tentative");
  }
  set tentative(v) {
    this._s("w:tentative", v);
  }
  /** Starting Value. */
  get startNumberingValue() {
    return this._f(StartNumberingValue);
  }
  /** Numbering Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Restart Numbering Level Symbol. */
  get levelRestart() {
    return this._f(LevelRestart);
  }
  /** Paragraph Style's Associated Numbering Level. */
  get paragraphStyleIdInLevel() {
    return this._f(ParagraphStyleIdInLevel);
  }
  /** Display All Levels Using Arabic Numerals. */
  get isLegalNumberingStyle() {
    return this._f(IsLegalNumberingStyle);
  }
  /** Content Between Numbering Symbol and Paragraph Text. */
  get levelSuffix() {
    return this._f(LevelSuffix);
  }
  /** Numbering Level Text. */
  get levelText() {
    return this._f(LevelText);
  }
  /** Picture Numbering Symbol Definition Reference. */
  get levelPictureBulletId() {
    return this._f(LevelPictureBulletId);
  }
  /** Legacy Numbering Level Properties. */
  get legacyNumbering() {
    return this._f(LegacyNumbering);
  }
  /** Justification. */
  get levelJustification() {
    return this._f(LevelJustification);
  }
  /** Numbering Level Associated Paragraph Properties. */
  get previousParagraphProperties() {
    return this._f(PreviousParagraphProperties);
  }
  /** Numbering Symbol Run Properties. */
  get numberingSymbolRunProperties() {
    return this._f(NumberingSymbolRunProperties);
  }
}
class MultiLevelType extends OxmlLeafElement {
  static _Q = "w:multiLevelType";
  static _A = ["w:val"];
  /** Abstract Numbering Definition Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class NumberingSymbolRunProperties extends OxmlCompositeElement {
  static _Q = "w:rPr";
  /** Returns RunFonts. */
  get runFonts() {
    return this._f(RunFonts);
  }
  /** Returns Bold. */
  get bold() {
    return this._f(Bold);
  }
  /** Returns BoldComplexScript. */
  get boldComplexScript() {
    return this._f(BoldComplexScript);
  }
  /** Returns Italic. */
  get italic() {
    return this._f(Italic);
  }
  /** Returns ItalicComplexScript. */
  get italicComplexScript() {
    return this._f(ItalicComplexScript);
  }
  /** Returns Caps. */
  get caps() {
    return this._f(Caps);
  }
  /** Returns SmallCaps. */
  get smallCaps() {
    return this._f(SmallCaps);
  }
  /** Returns Strike. */
  get strike() {
    return this._f(Strike);
  }
  /** Returns DoubleStrike. */
  get doubleStrike() {
    return this._f(DoubleStrike);
  }
  /** Returns Outline. */
  get outline() {
    return this._f(Outline);
  }
  /** Returns Shadow. */
  get shadow() {
    return this._f(Shadow);
  }
  /** Returns Emboss. */
  get emboss() {
    return this._f(Emboss);
  }
  /** Returns Imprint. */
  get imprint() {
    return this._f(Imprint);
  }
  /** Returns NoProof. */
  get noProof() {
    return this._f(NoProof);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns Vanish. */
  get vanish() {
    return this._f(Vanish);
  }
  /** Returns WebHidden. */
  get webHidden() {
    return this._f(WebHidden);
  }
  /** Returns Color. */
  get color() {
    return this._f(Color);
  }
  /** Returns Spacing. */
  get spacing() {
    return this._f(Spacing);
  }
  /** Returns CharacterScale. */
  get characterScale() {
    return this._f(CharacterScale);
  }
  /** Returns Kern. */
  get kern() {
    return this._f(Kern);
  }
  /** Returns Position. */
  get position() {
    return this._f(Position);
  }
  /** Returns FontSize. */
  get fontSize() {
    return this._f(FontSize);
  }
  /** Returns FontSizeComplexScript. */
  get fontSizeComplexScript() {
    return this._f(FontSizeComplexScript);
  }
  /** Returns Underline. */
  get underline() {
    return this._f(Underline);
  }
  /** Returns TextEffect. */
  get textEffect() {
    return this._f(TextEffect);
  }
  /** Returns Border. */
  get border() {
    return this._f(Border);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns FitText. */
  get fitText() {
    return this._f(FitText);
  }
  /** Returns VerticalTextAlignment. */
  get verticalTextAlignment() {
    return this._f(VerticalTextAlignment);
  }
  /** Returns RightToLeftText. */
  get rightToLeftText() {
    return this._f(RightToLeftText);
  }
  /** Returns ComplexScript. */
  get complexScript() {
    return this._f(ComplexScript);
  }
  /** Returns Emphasis. */
  get emphasis() {
    return this._f(Emphasis);
  }
  /** Returns Languages. */
  get languages() {
    return this._f(Languages);
  }
  /** Returns EastAsianLayout. */
  get eastAsianLayout() {
    return this._f(EastAsianLayout);
  }
  /** Returns SpecVanish. */
  get specVanish() {
    return this._f(SpecVanish);
  }
}
class PreviousParagraphProperties extends OxmlCompositeElement {
  static _Q = "w:pPr";
  /** Returns ParagraphStyleId. */
  get paragraphStyleId() {
    return this._f(ParagraphStyleId);
  }
  /** Returns KeepNext. */
  get keepNext() {
    return this._f(KeepNext);
  }
  /** Returns KeepLines. */
  get keepLines() {
    return this._f(KeepLines);
  }
  /** Returns PageBreakBefore. */
  get pageBreakBefore() {
    return this._f(PageBreakBefore);
  }
  /** Returns FrameProperties. */
  get frameProperties() {
    return this._f(FrameProperties);
  }
  /** Returns WidowControl. */
  get widowControl() {
    return this._f(WidowControl);
  }
  /** Returns NumberingProperties. */
  get numberingProperties() {
    return this._f(NumberingProperties);
  }
  /** Returns SuppressLineNumbers. */
  get suppressLineNumbers() {
    return this._f(SuppressLineNumbers);
  }
  /** Returns ParagraphBorders. */
  get paragraphBorders() {
    return this._f(ParagraphBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns SuppressAutoHyphens. */
  get suppressAutoHyphens() {
    return this._f(SuppressAutoHyphens);
  }
  /** Returns Kinsoku. */
  get kinsoku() {
    return this._f(Kinsoku);
  }
  /** Returns WordWrap. */
  get wordWrap() {
    return this._f(WordWrap);
  }
  /** Returns OverflowPunctuation. */
  get overflowPunctuation() {
    return this._f(OverflowPunctuation);
  }
  /** Returns TopLinePunctuation. */
  get topLinePunctuation() {
    return this._f(TopLinePunctuation);
  }
  /** Returns AutoSpaceDE. */
  get autoSpaceDE() {
    return this._f(AutoSpaceDE);
  }
  /** Returns AutoSpaceDN. */
  get autoSpaceDN() {
    return this._f(AutoSpaceDN);
  }
  /** Returns BiDi. */
  get biDi() {
    return this._f(BiDi);
  }
  /** Returns AdjustRightIndent. */
  get adjustRightIndent() {
    return this._f(AdjustRightIndent);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns SpacingBetweenLines. */
  get spacingBetweenLines() {
    return this._f(SpacingBetweenLines);
  }
  /** Returns Indentation. */
  get indentation() {
    return this._f(Indentation);
  }
  /** Returns ContextualSpacing. */
  get contextualSpacing() {
    return this._f(ContextualSpacing);
  }
  /** Returns MirrorIndents. */
  get mirrorIndents() {
    return this._f(MirrorIndents);
  }
  /** Returns SuppressOverlap. */
  get suppressOverlap() {
    return this._f(SuppressOverlap);
  }
  /** Returns Justification. */
  get justification() {
    return this._f(Justification);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TextAlignment. */
  get textAlignment() {
    return this._f(TextAlignment);
  }
  /** Returns TextBoxTightWrap. */
  get textBoxTightWrap() {
    return this._f(TextBoxTightWrap);
  }
  /** Returns OutlineLevel. */
  get outlineLevel() {
    return this._f(OutlineLevel);
  }
}
class LevelJustification extends OxmlLeafElement {
  static _Q = "w:lvlJc";
  static _A = ["w:val"];
  /** Alignment Type. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
}
class LegacyNumbering extends OxmlLeafElement {
  static _Q = "w:legacy";
  static _A = ["w:legacy", "w:legacySpace", "w:legacyIndent"];
  /** Use Legacy Numbering Properties. Serialized as `w:legacy` */
  get legacy() {
    return this._g("w:legacy");
  }
  set legacy(v) {
    this._s("w:legacy", v);
  }
  /** Legacy Spacing. Serialized as `w:legacySpace` */
  get legacySpace() {
    return this._g("w:legacySpace");
  }
  set legacySpace(v) {
    this._s("w:legacySpace", v);
  }
  /** Legacy Indent. Serialized as `w:legacyIndent` */
  get legacyIndent() {
    return this._g("w:legacyIndent");
  }
  set legacyIndent(v) {
    this._s("w:legacyIndent", v);
  }
}
class LevelText extends OxmlLeafElement {
  static _Q = "w:lvlText";
  static _A = ["w:val", "w:null"];
  /** Level Text. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Level Text Is Null Character. Serialized as `w:null` */
  get null() {
    return this._g("w:null");
  }
  set null(v) {
    this._s("w:null", v);
  }
}
class LevelSuffix extends OxmlLeafElement {
  static _Q = "w:suff";
  static _A = ["w:val"];
  /** Character Type Between Numbering and Text. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Frame extends OxmlCompositeElement {
  static _Q = "w:frame";
  /** Frame Size. */
  get frameSize() {
    return this._f(FrameSize);
  }
  /** Frame Name. */
  get frameName() {
    return this._f(FrameName);
  }
  /** Source File for Frame. */
  get sourceFileReference() {
    return this._f(SourceFileReference);
  }
  /** Left and Right Margin for Frame. */
  get marginWidth() {
    return this._f(MarginWidth);
  }
  /** Top and Bottom Margin for Frame. */
  get marginHeight() {
    return this._f(MarginHeight);
  }
  /** Scrollbar Display Option. */
  get scrollbarVisibility() {
    return this._f(ScrollbarVisibility);
  }
  /** Frame Cannot Be Resized. */
  get noResizeAllowed() {
    return this._f(NoResizeAllowed);
  }
  /** Maintain Link to Existing File. */
  get linkedToFile() {
    return this._f(LinkedToFile);
  }
}
class Frameset extends OxmlCompositeElement {
  static _Q = "w:frameset";
  /** Nested Frameset Size. */
  get frameSize() {
    return this._f(FrameSize);
  }
  /** Frameset Splitter Properties. */
  get framesetSplitbar() {
    return this._f(FramesetSplitbar);
  }
  /** Frameset Layout. */
  get frameLayout() {
    return this._f(FrameLayout);
  }
}
class FrameLayout extends OxmlLeafElement {
  static _Q = "w:frameLayout";
  static _A = ["w:val"];
  /** Frameset Layout Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FramesetSplitbar extends OxmlCompositeElement {
  static _Q = "w:framesetSplitbar";
  /** Frameset Splitter Width. */
  get width() {
    return this._f(Width);
  }
  /** Frameset Splitter Color. */
  get color() {
    return this._f(Color);
  }
  /** Do Not Display Frameset Splitters. */
  get noBorder() {
    return this._f(NoBorder);
  }
  /** Frameset Splitter Border Style. */
  get flatBorders() {
    return this._f(FlatBorders);
  }
}
class TwipsMeasureType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Measurement in Twentieths of a Point. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DrawingGridVerticalOrigin extends TwipsMeasureType {
  static _Q = "w:drawingGridVerticalOrigin";
}
class DrawingGridHorizontalOrigin extends TwipsMeasureType {
  static _Q = "w:drawingGridHorizontalOrigin";
}
class DrawingGridVerticalSpacing extends TwipsMeasureType {
  static _Q = "w:drawingGridVerticalSpacing";
}
class DrawingGridHorizontalSpacing extends TwipsMeasureType {
  static _Q = "w:drawingGridHorizontalSpacing";
}
class HyphenationZone extends TwipsMeasureType {
  static _Q = "w:hyphenationZone";
}
class Width extends TwipsMeasureType {
  static _Q = "w:w";
}
class ScrollbarVisibility extends OxmlLeafElement {
  static _Q = "w:scrollbar";
  static _A = ["w:val"];
  /** Scrollbar Display Option Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PixelsMeasureType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Measurement in Pixels. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class MarginHeight extends PixelsMeasureType {
  static _Q = "w:marH";
}
class MarginWidth extends PixelsMeasureType {
  static _Q = "w:marW";
}
class ParagraphPropertiesDefault extends OxmlCompositeElement {
  static _Q = "w:pPrDefault";
  /** Paragraph Properties. */
  get paragraphPropertiesBaseStyle() {
    return this._f(ParagraphPropertiesBaseStyle);
  }
}
class RunPropertiesDefault extends OxmlCompositeElement {
  static _Q = "w:rPrDefault";
  /** Run Properties. */
  get runPropertiesBaseStyle() {
    return this._f(RunPropertiesBaseStyle);
  }
}
class ParagraphPropertiesBaseStyle extends OxmlCompositeElement {
  static _Q = "w:pPr";
  /** Returns KeepNext. */
  get keepNext() {
    return this._f(KeepNext);
  }
  /** Returns KeepLines. */
  get keepLines() {
    return this._f(KeepLines);
  }
  /** Returns PageBreakBefore. */
  get pageBreakBefore() {
    return this._f(PageBreakBefore);
  }
  /** Returns FrameProperties. */
  get frameProperties() {
    return this._f(FrameProperties);
  }
  /** Returns WidowControl. */
  get widowControl() {
    return this._f(WidowControl);
  }
  /** Returns NumberingProperties. */
  get numberingProperties() {
    return this._f(NumberingProperties);
  }
  /** Returns SuppressLineNumbers. */
  get suppressLineNumbers() {
    return this._f(SuppressLineNumbers);
  }
  /** Returns ParagraphBorders. */
  get paragraphBorders() {
    return this._f(ParagraphBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns SuppressAutoHyphens. */
  get suppressAutoHyphens() {
    return this._f(SuppressAutoHyphens);
  }
  /** Returns Kinsoku. */
  get kinsoku() {
    return this._f(Kinsoku);
  }
  /** Returns WordWrap. */
  get wordWrap() {
    return this._f(WordWrap);
  }
  /** Returns OverflowPunctuation. */
  get overflowPunctuation() {
    return this._f(OverflowPunctuation);
  }
  /** Returns TopLinePunctuation. */
  get topLinePunctuation() {
    return this._f(TopLinePunctuation);
  }
  /** Returns AutoSpaceDE. */
  get autoSpaceDE() {
    return this._f(AutoSpaceDE);
  }
  /** Returns AutoSpaceDN. */
  get autoSpaceDN() {
    return this._f(AutoSpaceDN);
  }
  /** Returns BiDi. */
  get biDi() {
    return this._f(BiDi);
  }
  /** Returns AdjustRightIndent. */
  get adjustRightIndent() {
    return this._f(AdjustRightIndent);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns SpacingBetweenLines. */
  get spacingBetweenLines() {
    return this._f(SpacingBetweenLines);
  }
  /** Returns Indentation. */
  get indentation() {
    return this._f(Indentation);
  }
  /** Returns ContextualSpacing. */
  get contextualSpacing() {
    return this._f(ContextualSpacing);
  }
  /** Returns MirrorIndents. */
  get mirrorIndents() {
    return this._f(MirrorIndents);
  }
  /** Returns SuppressOverlap. */
  get suppressOverlap() {
    return this._f(SuppressOverlap);
  }
  /** Returns Justification. */
  get justification() {
    return this._f(Justification);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TextAlignment. */
  get textAlignment() {
    return this._f(TextAlignment);
  }
  /** Returns TextBoxTightWrap. */
  get textBoxTightWrap() {
    return this._f(TextBoxTightWrap);
  }
  /** Returns OutlineLevel. */
  get outlineLevel() {
    return this._f(OutlineLevel);
  }
}
class RunPropertiesBaseStyle extends OxmlCompositeElement {
  static _Q = "w:rPr";
  /** Returns RunFonts. */
  get runFonts() {
    return this._f(RunFonts);
  }
  /** Returns Bold. */
  get bold() {
    return this._f(Bold);
  }
  /** Returns BoldComplexScript. */
  get boldComplexScript() {
    return this._f(BoldComplexScript);
  }
  /** Returns Italic. */
  get italic() {
    return this._f(Italic);
  }
  /** Returns ItalicComplexScript. */
  get italicComplexScript() {
    return this._f(ItalicComplexScript);
  }
  /** Returns Caps. */
  get caps() {
    return this._f(Caps);
  }
  /** Returns SmallCaps. */
  get smallCaps() {
    return this._f(SmallCaps);
  }
  /** Returns Strike. */
  get strike() {
    return this._f(Strike);
  }
  /** Returns DoubleStrike. */
  get doubleStrike() {
    return this._f(DoubleStrike);
  }
  /** Returns Outline. */
  get outline() {
    return this._f(Outline);
  }
  /** Returns Shadow. */
  get shadow() {
    return this._f(Shadow);
  }
  /** Returns Emboss. */
  get emboss() {
    return this._f(Emboss);
  }
  /** Returns Imprint. */
  get imprint() {
    return this._f(Imprint);
  }
  /** Returns NoProof. */
  get noProof() {
    return this._f(NoProof);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns Vanish. */
  get vanish() {
    return this._f(Vanish);
  }
  /** Returns WebHidden. */
  get webHidden() {
    return this._f(WebHidden);
  }
  /** Returns Color. */
  get color() {
    return this._f(Color);
  }
  /** Returns Spacing. */
  get spacing() {
    return this._f(Spacing);
  }
  /** Returns CharacterScale. */
  get characterScale() {
    return this._f(CharacterScale);
  }
  /** Returns Kern. */
  get kern() {
    return this._f(Kern);
  }
  /** Returns Position. */
  get position() {
    return this._f(Position);
  }
  /** Returns FontSize. */
  get fontSize() {
    return this._f(FontSize);
  }
  /** Returns FontSizeComplexScript. */
  get fontSizeComplexScript() {
    return this._f(FontSizeComplexScript);
  }
  /** Returns Underline. */
  get underline() {
    return this._f(Underline);
  }
  /** Returns TextEffect. */
  get textEffect() {
    return this._f(TextEffect);
  }
  /** Returns Border. */
  get border() {
    return this._f(Border);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns FitText. */
  get fitText() {
    return this._f(FitText);
  }
  /** Returns VerticalTextAlignment. */
  get verticalTextAlignment() {
    return this._f(VerticalTextAlignment);
  }
  /** Returns Emphasis. */
  get emphasis() {
    return this._f(Emphasis);
  }
  /** Returns Languages. */
  get languages() {
    return this._f(Languages);
  }
  /** Returns EastAsianLayout. */
  get eastAsianLayout() {
    return this._f(EastAsianLayout);
  }
  /** Returns SpecVanish. */
  get specVanish() {
    return this._f(SpecVanish);
  }
}
class LongHexNumberType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Long Hexadecimal Number Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TemplateCode extends LongHexNumberType {
  static _Q = "w:tmpl";
}
class Nsid extends LongHexNumberType {
  static _Q = "w:nsid";
}
class Rsid extends LongHexNumberType {
  static _Q = "w:rsid";
}
class RsidRoot extends LongHexNumberType {
  static _Q = "w:rsidRoot";
}
class DocumentVariable extends OxmlLeafElement {
  static _Q = "w:docVar";
  static _A = ["w:name", "w:val"];
  /** Document Variable Name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** Document Variable Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DataSourceObject extends OxmlCompositeElement {
  static _Q = "w:odso";
  /** UDL Connection String. */
  get udlConnectionString() {
    return this._f(UdlConnectionString);
  }
  /** Data Source Table Name. */
  get dataSourceTableName() {
    return this._f(DataSourceTableName);
  }
  /** ODSO Data Source File Path. */
  get sourceReference() {
    return this._f(SourceReference);
  }
  /** Column Delimiter for Data Source. */
  get columnDelimiter() {
    return this._f(ColumnDelimiter);
  }
  /** ODSO Data Source Type. */
  get mailMergeSource() {
    return this._f(MailMergeSource);
  }
  /** First Row of Data Source Contains Column Names. */
  get firstRowHeader() {
    return this._f(FirstRowHeader);
  }
}
class Destination extends OxmlLeafElement {
  static _Q = "w:destination";
  static _A = ["w:val"];
  /** Mail Merge Merged Document Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DataType extends OxmlLeafElement {
  static _Q = "w:dataType";
  static _A = ["w:val"];
  /** Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class MainDocumentType extends OxmlLeafElement {
  static _Q = "w:mainDocumentType";
  static _A = ["w:val"];
  /** Mail Merge Source Document Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FieldMapData extends OxmlCompositeElement {
  static _Q = "w:fieldMapData";
  /** Merge Field Mapping. */
  get mailMergeFieldType() {
    return this._f(MailMergeFieldType);
  }
  /** Data Source Name for Column. */
  get name() {
    return this._f(Name);
  }
  /** Predefined Merge Field Name. */
  get mappedName() {
    return this._f(MappedName);
  }
  /** Index of Column Being Mapped. */
  get columnIndex() {
    return this._f(ColumnIndex);
  }
  /** Merge Field Name Language ID. */
  get languageId() {
    return this._f(LanguageId);
  }
  /** Use Country/Region-Based Address Field Ordering. */
  get dynamicAddress() {
    return this._f(DynamicAddress);
  }
}
class MailMergeSource extends OxmlLeafElement {
  static _Q = "w:type";
  static _A = ["w:val"];
  /** Data Source Type Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class MailMergeFieldType extends OxmlLeafElement {
  static _Q = "w:type";
  static _A = ["w:val"];
  /** Merge Field Mapping Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class RecipientData extends OxmlCompositeElement {
  static _Q = "w:recipientData";
  /** Record Is Included in Mail Merge. */
  get active() {
    return this._f(Active);
  }
  /** Index of Column Containing Unique Values for Record. */
  get columnIndex() {
    return this._f(ColumnIndex);
  }
  /** Unique Value for Record. */
  get uniqueTag() {
    return this._f(UniqueTag);
  }
}
class UniqueTag extends OxmlLeafElement {
  static _Q = "w:uniqueTag";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class UnsignedDecimalNumberType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class ColumnDelimiter extends UnsignedDecimalNumberType {
  static _Q = "w:colDelim";
}
class ColumnIndex extends UnsignedDecimalNumberType {
  static _Q = "w:column";
}
class FootnoteEndnoteSeparatorReferenceType extends OxmlLeafElement {
  static _A = ["w:id"];
  /** Footnote/Endnote ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class EndnoteSpecialReference extends FootnoteEndnoteSeparatorReferenceType {
  static _Q = "w:endnote";
}
class FootnoteSpecialReference extends FootnoteEndnoteSeparatorReferenceType {
  static _Q = "w:footnote";
}
class EndnotePosition extends OxmlLeafElement {
  static _Q = "w:pos";
  static _A = ["w:val"];
  /** Endnote Position Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class NumberingFormat extends OxmlLeafElement {
  static _Q = "w:numFmt";
  static _A = ["w:val", "w:format"];
  /** Numbering Format Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** format. Serialized as `w:format` */
  get format() {
    return this._g("w:format");
  }
  set format(v) {
    this._s("w:format", v);
  }
}
class FootnotePosition extends OxmlLeafElement {
  static _Q = "w:pos";
  static _A = ["w:val"];
  /** Footnote Position Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableGrid extends OxmlCompositeElement {
  static _Q = "w:tblGrid";
}
class TableProperties extends OxmlCompositeElement {
  static _Q = "w:tblPr";
  /** Returns TableStyle. */
  get tableStyle() {
    return this._f(TableStyle);
  }
  /** Returns TablePositionProperties. */
  get tablePositionProperties() {
    return this._f(TablePositionProperties);
  }
  /** Returns TableOverlap. */
  get tableOverlap() {
    return this._f(TableOverlap);
  }
  /** Returns BiDiVisual. */
  get biDiVisual() {
    return this._f(BiDiVisual);
  }
  /** Returns TableWidth. */
  get tableWidth() {
    return this._f(TableWidth);
  }
  /** Returns TableJustification. */
  get tableJustification() {
    return this._f(TableJustification);
  }
  /** Returns TableCellSpacing. */
  get tableCellSpacing() {
    return this._f(TableCellSpacing);
  }
  /** Returns TableIndentation. */
  get tableIndentation() {
    return this._f(TableIndentation);
  }
  /** Returns TableBorders. */
  get tableBorders() {
    return this._f(TableBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns TableLayout. */
  get tableLayout() {
    return this._f(TableLayout);
  }
  /** Returns TableCellMarginDefault. */
  get tableCellMarginDefault() {
    return this._f(TableCellMarginDefault);
  }
  /** Returns TableLook. */
  get tableLook() {
    return this._f(TableLook);
  }
  /** Returns TableCaption. */
  get tableCaption() {
    return this._f(TableCaption);
  }
  /** Returns TableDescription. */
  get tableDescription() {
    return this._f(TableDescription);
  }
  /** Revision Information for Table Properties. */
  get tablePropertiesChange() {
    return this._f(TablePropertiesChange);
  }
}
class TablePropertyExceptionsChange extends OxmlCompositeElement {
  static _Q = "w:tblPrExChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Table-Level Property Exceptions. */
  get previousTablePropertyExceptions() {
    return this._f(PreviousTablePropertyExceptions);
  }
}
class TablePropertiesChange extends OxmlCompositeElement {
  static _Q = "w:tblPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Table Properties. */
  get previousTableProperties() {
    return this._f(PreviousTableProperties);
  }
}
class TableCellProperties extends OxmlCompositeElement {
  static _Q = "w:tcPr";
  /** Returns ConditionalFormatStyle. */
  get conditionalFormatStyle() {
    return this._f(ConditionalFormatStyle);
  }
  /** Returns TableCellWidth. */
  get tableCellWidth() {
    return this._f(TableCellWidth);
  }
  /** Returns GridSpan. */
  get gridSpan() {
    return this._f(GridSpan);
  }
  /** Returns HorizontalMerge. */
  get horizontalMerge() {
    return this._f(HorizontalMerge);
  }
  /** Returns VerticalMerge. */
  get verticalMerge() {
    return this._f(VerticalMerge);
  }
  /** Returns TableCellBorders. */
  get tableCellBorders() {
    return this._f(TableCellBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns NoWrap. */
  get noWrap() {
    return this._f(NoWrap);
  }
  /** Returns TableCellMargin. */
  get tableCellMargin() {
    return this._f(TableCellMargin);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TableCellFitText. */
  get tableCellFitText() {
    return this._f(TableCellFitText);
  }
  /** Returns TableCellVerticalAlignment. */
  get tableCellVerticalAlignment() {
    return this._f(TableCellVerticalAlignment);
  }
  /** Returns HideMark. */
  get hideMark() {
    return this._f(HideMark);
  }
}
class TableCellPropertiesChange extends OxmlCompositeElement {
  static _Q = "w:tcPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Table Cell Properties. */
  get previousTableCellProperties() {
    return this._f(PreviousTableCellProperties);
  }
}
class TableGridChange extends OxmlCompositeElement {
  static _Q = "w:tblGridChange";
  static _A = ["w:id"];
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Table Grid. */
  get previousTableGrid() {
    return this._f(PreviousTableGrid);
  }
}
class GridColumn extends OxmlLeafElement {
  static _Q = "w:gridCol";
  static _A = ["w:w"];
  /** Grid Column Width. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
}
class CustomXmlAttribute extends OxmlLeafElement {
  static _Q = "w:attr";
  static _A = ["w:uri", "w:name", "w:val"];
  /** uri. Serialized as `w:uri` */
  get uri() {
    return this._g("w:uri");
  }
  set uri(v) {
    this._s("w:uri", v);
  }
  /** name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class CustomXmlProperties extends OxmlCompositeElement {
  static _Q = "w:customXmlPr";
  /** Custom XML Element Placeholder Text. */
  get customXmlPlaceholder() {
    return this._f(CustomXmlPlaceholder);
  }
}
class SdtContentRow extends OxmlCompositeElement {
  static _Q = "w:sdtContent";
}
class SdtContentCell extends OxmlCompositeElement {
  static _Q = "w:sdtContent";
}
class SdtContentRunRuby extends OxmlCompositeElement {
  static _Q = "w:sdtContent";
}
class SdtContentRun extends OxmlCompositeElement {
  static _Q = "w:sdtContent";
}
class SdtContentBlock extends OxmlCompositeElement {
  static _Q = "w:sdtContent";
}
class SdtEndCharProperties extends OxmlCompositeElement {
  static _Q = "w:sdtEndPr";
}
class SdtProperties extends OxmlCompositeElement {
  static _Q = "w:sdtPr";
}
class ListItem extends OxmlLeafElement {
  static _Q = "w:listItem";
  static _A = ["w:displayText", "w:value"];
  /** List Entry Display Text. Serialized as `w:displayText` */
  get displayText() {
    return this._g("w:displayText");
  }
  set displayText(v) {
    this._s("w:displayText", v);
  }
  /** List Entry Value. Serialized as `w:value` */
  get value() {
    return this._g("w:value");
  }
  set value(v) {
    this._s("w:value", v);
  }
}
class Calendar extends OxmlLeafElement {
  static _Q = "w:calendar";
  static _A = ["w:val"];
  /** Calendar Type Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class SdtDateMappingType extends OxmlLeafElement {
  static _Q = "w:storeMappedDataAs";
  static _A = ["w:val"];
  /** Date Storage Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class RubyContentType extends OxmlCompositeElement {
}
class RubyBase extends RubyContentType {
  static _Q = "w:rubyBase";
}
class RubyContent extends RubyContentType {
  static _Q = "w:rt";
}
class RubyProperties extends OxmlCompositeElement {
  static _Q = "w:rubyPr";
  /** Phonetic Guide Text Alignment. */
  get rubyAlign() {
    return this._f(RubyAlign);
  }
  /** Phonetic Guide Text Font Size. */
  get phoneticGuideTextFontSize() {
    return this._f(PhoneticGuideTextFontSize);
  }
  /** Distance Between Phonetic Guide Text and Phonetic Guide Base Text. */
  get phoneticGuideRaise() {
    return this._f(PhoneticGuideRaise);
  }
  /** Phonetic Guide Base Text Font Size. */
  get phoneticGuideBaseTextSize() {
    return this._f(PhoneticGuideBaseTextSize);
  }
  /** Language ID for Phonetic Guide. */
  get languageId() {
    return this._f(LanguageId);
  }
  /** Invalidated Field Cache. */
  get dirty() {
    return this._f(Dirty);
  }
}
class LanguageId extends OxmlLeafElement {
  static _Q = "w:lid";
  static _A = ["w:val"];
  /** Language Code. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PhoneticGuideRaise extends OxmlLeafElement {
  static _Q = "w:hpsRaise";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class RubyAlign extends OxmlLeafElement {
  static _Q = "w:rubyAlign";
  static _A = ["w:val"];
  /** Phonetic Guide Text Alignment Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class AltChunkProperties extends OxmlCompositeElement {
  static _Q = "w:altChunkPr";
  /** Keep Source Formatting on Import. */
  get matchSource() {
    return this._f(MatchSource);
  }
}
class ParagraphMarkRunPropertiesChange extends OxmlCompositeElement {
  static _Q = "w:rPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Run Properties for the Paragraph Mark. */
  get previousParagraphMarkRunProperties() {
    return this._f(PreviousParagraphMarkRunProperties);
  }
}
class SectionPropertiesChange extends OxmlCompositeElement {
  static _Q = "w:sectPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Section Properties. */
  get previousSectionProperties() {
    return this._f(PreviousSectionProperties);
  }
}
class Column extends OxmlLeafElement {
  static _Q = "w:col";
  static _A = ["w:w", "w:space"];
  /** Column Width. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** Space Before Following Column. Serialized as `w:space` */
  get space() {
    return this._g("w:space");
  }
  set space(v) {
    this._s("w:space", v);
  }
}
class Format extends OxmlLeafElement {
  static _Q = "w:format";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class MaxLength extends OxmlLeafElement {
  static _Q = "w:maxLength";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TextBoxFormFieldType extends OxmlLeafElement {
  static _Q = "w:type";
  static _A = ["w:val"];
  /** Text Box Form Field Type Values. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class String255Type extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FrameName extends String255Type {
  static _Q = "w:name";
}
class DefaultTextBoxFormFieldString extends String255Type {
  static _Q = "w:default";
}
class ListEntryFormField extends String255Type {
  static _Q = "w:listEntry";
}
class DefaultDropDownListItemIndex extends OxmlLeafElement {
  static _Q = "w:default";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TextInput extends OxmlCompositeElement {
  static _Q = "w:textInput";
  /** Text Box Form Field Type. */
  get textBoxFormFieldType() {
    return this._f(TextBoxFormFieldType);
  }
  /** Default Text Box Form Field String. */
  get defaultTextBoxFormFieldString() {
    return this._f(DefaultTextBoxFormFieldString);
  }
  /** Text Box Form Field Maximum Length. */
  get maxLength() {
    return this._f(MaxLength);
  }
  /** Text Box Form Field Formatting. */
  get format() {
    return this._f(Format);
  }
}
class DropDownListFormField extends OxmlCompositeElement {
  static _Q = "w:ddList";
  /** Drop-Down List Selection. */
  get dropDownListSelection() {
    return this._f(DropDownListSelection);
  }
  /** Default Drop-Down List Item Index. */
  get defaultDropDownListItemIndex() {
    return this._f(DefaultDropDownListItemIndex);
  }
}
class CheckBox extends OxmlCompositeElement {
  static _Q = "w:checkBox";
}
class StatusText extends OxmlLeafElement {
  static _Q = "w:statusText";
  static _A = ["w:type", "w:val"];
  /** Status Text Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Status Text Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class HelpText extends OxmlLeafElement {
  static _Q = "w:helpText";
  static _A = ["w:type", "w:val"];
  /** Help Text Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Help Text Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class MacroNameType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Name of Script Function. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class ExitMacro extends MacroNameType {
  static _Q = "w:exitMacro";
}
class EntryMacro extends MacroNameType {
  static _Q = "w:entryMacro";
}
class FormFieldName extends OxmlLeafElement {
  static _Q = "w:name";
  static _A = ["w:val"];
  /** Form Field Name Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FormFieldData extends OxmlCompositeElement {
  static _Q = "w:ffData";
}
class FieldData extends OxmlLeafTextElement {
  static _Q = "w:fldData";
}
class SectionProperties extends OxmlCompositeElement {
  static _Q = "w:sectPr";
  static _A = ["w:rsidRPr", "w:rsidDel", "w:rsidR", "w:rsidSect"];
  /** Physical Section Mark Character Revision ID. Serialized as `w:rsidRPr` */
  get rsidRPr() {
    return this._g("w:rsidRPr");
  }
  set rsidRPr(v) {
    this._s("w:rsidRPr", v);
  }
  /** Section Deletion Revision ID. Serialized as `w:rsidDel` */
  get rsidDel() {
    return this._g("w:rsidDel");
  }
  set rsidDel(v) {
    this._s("w:rsidDel", v);
  }
  /** Section Addition Revision ID. Serialized as `w:rsidR` */
  get rsidR() {
    return this._g("w:rsidR");
  }
  set rsidR(v) {
    this._s("w:rsidR", v);
  }
  /** Section Properties Revision ID. Serialized as `w:rsidSect` */
  get rsidSect() {
    return this._g("w:rsidSect");
  }
  set rsidSect(v) {
    this._s("w:rsidSect", v);
  }
}
class ParagraphMarkRunProperties extends OxmlCompositeElement {
  static _Q = "w:rPr";
  /** Inserted Paragraph. */
  get inserted() {
    return this._f(Inserted);
  }
  /** Deleted Paragraph. */
  get deleted() {
    return this._f(Deleted);
  }
  /** Move Source Paragraph. */
  get moveFrom() {
    return this._f(MoveFrom);
  }
  /** Move Destination Paragraph. */
  get moveTo() {
    return this._f(MoveTo);
  }
}
class TabStop extends OxmlLeafElement {
  static _Q = "w:tab";
  static _A = ["w:val", "w:leader", "w:pos"];
  /** Tab Stop Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Tab Leader Character. Serialized as `w:leader` */
  get leader() {
    return this._g("w:leader");
  }
  set leader(v) {
    this._s("w:leader", v);
  }
  /** Tab Stop Position. Serialized as `w:pos` */
  get position() {
    return this._g("w:pos");
  }
  set position(v) {
    this._s("w:pos", v);
  }
}
class NumberingChange extends OxmlLeafElement {
  static _Q = "w:numberingChange";
  static _A = ["w:original", "w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** original. Serialized as `w:original` */
  get original() {
    return this._g("w:original");
  }
  set original(v) {
    this._s("w:original", v);
  }
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class NonNegativeDecimalNumberType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class AbstractNumId extends NonNegativeDecimalNumberType {
  static _Q = "w:abstractNumId";
}
class StartNumberingValue extends NonNegativeDecimalNumberType {
  static _Q = "w:start";
}
class NumberingId extends NonNegativeDecimalNumberType {
  static _Q = "w:numId";
}
class NumberingLevelReference extends OxmlLeafElement {
  static _Q = "w:ilvl";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PreviousParagraphMarkRunProperties extends OxmlCompositeElement {
  static _Q = "w:rPr";
  /** Inserted Paragraph. */
  get inserted() {
    return this._f(Inserted);
  }
  /** Deleted Paragraph. */
  get deleted() {
    return this._f(Deleted);
  }
  /** Move Source Paragraph. */
  get moveFrom() {
    return this._f(MoveFrom);
  }
  /** Move Destination Paragraph. */
  get moveTo() {
    return this._f(MoveTo);
  }
}
class PreviousRunProperties extends OxmlCompositeElement {
  static _Q = "w:rPr";
}
class ParagraphPropertiesExtended extends OxmlCompositeElement {
  static _Q = "w:pPr";
  /** Returns ParagraphStyleId. */
  get paragraphStyleId() {
    return this._f(ParagraphStyleId);
  }
  /** Returns KeepNext. */
  get keepNext() {
    return this._f(KeepNext);
  }
  /** Returns KeepLines. */
  get keepLines() {
    return this._f(KeepLines);
  }
  /** Returns PageBreakBefore. */
  get pageBreakBefore() {
    return this._f(PageBreakBefore);
  }
  /** Returns FrameProperties. */
  get frameProperties() {
    return this._f(FrameProperties);
  }
  /** Returns WidowControl. */
  get widowControl() {
    return this._f(WidowControl);
  }
  /** Returns NumberingProperties. */
  get numberingProperties() {
    return this._f(NumberingProperties);
  }
  /** Returns SuppressLineNumbers. */
  get suppressLineNumbers() {
    return this._f(SuppressLineNumbers);
  }
  /** Returns ParagraphBorders. */
  get paragraphBorders() {
    return this._f(ParagraphBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns Tabs. */
  get tabs() {
    return this._f(Tabs);
  }
  /** Returns SuppressAutoHyphens. */
  get suppressAutoHyphens() {
    return this._f(SuppressAutoHyphens);
  }
  /** Returns Kinsoku. */
  get kinsoku() {
    return this._f(Kinsoku);
  }
  /** Returns WordWrap. */
  get wordWrap() {
    return this._f(WordWrap);
  }
  /** Returns OverflowPunctuation. */
  get overflowPunctuation() {
    return this._f(OverflowPunctuation);
  }
  /** Returns TopLinePunctuation. */
  get topLinePunctuation() {
    return this._f(TopLinePunctuation);
  }
  /** Returns AutoSpaceDE. */
  get autoSpaceDE() {
    return this._f(AutoSpaceDE);
  }
  /** Returns AutoSpaceDN. */
  get autoSpaceDN() {
    return this._f(AutoSpaceDN);
  }
  /** Returns BiDi. */
  get biDi() {
    return this._f(BiDi);
  }
  /** Returns AdjustRightIndent. */
  get adjustRightIndent() {
    return this._f(AdjustRightIndent);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns SpacingBetweenLines. */
  get spacingBetweenLines() {
    return this._f(SpacingBetweenLines);
  }
  /** Returns Indentation. */
  get indentation() {
    return this._f(Indentation);
  }
  /** Returns ContextualSpacing. */
  get contextualSpacing() {
    return this._f(ContextualSpacing);
  }
  /** Returns MirrorIndents. */
  get mirrorIndents() {
    return this._f(MirrorIndents);
  }
  /** Returns SuppressOverlap. */
  get suppressOverlap() {
    return this._f(SuppressOverlap);
  }
  /** Returns Justification. */
  get justification() {
    return this._f(Justification);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TextAlignment. */
  get textAlignment() {
    return this._f(TextAlignment);
  }
  /** Returns TextBoxTightWrap. */
  get textBoxTightWrap() {
    return this._f(TextBoxTightWrap);
  }
  /** Returns OutlineLevel. */
  get outlineLevel() {
    return this._f(OutlineLevel);
  }
  /** Returns DivId. */
  get divId() {
    return this._f(DivId);
  }
  /** Returns ConditionalFormatStyle. */
  get conditionalFormatStyle() {
    return this._f(ConditionalFormatStyle);
  }
}
class PreviousSectionProperties extends OxmlCompositeElement {
  static _Q = "w:sectPr";
  static _A = ["w:rsidRPr", "w:rsidDel", "w:rsidR", "w:rsidSect"];
  /** Physical Section Mark Character Revision ID. Serialized as `w:rsidRPr` */
  get rsidRPr() {
    return this._g("w:rsidRPr");
  }
  set rsidRPr(v) {
    this._s("w:rsidRPr", v);
  }
  /** Section Deletion Revision ID. Serialized as `w:rsidDel` */
  get rsidDel() {
    return this._g("w:rsidDel");
  }
  set rsidDel(v) {
    this._s("w:rsidDel", v);
  }
  /** Section Addition Revision ID. Serialized as `w:rsidR` */
  get rsidR() {
    return this._g("w:rsidR");
  }
  set rsidR(v) {
    this._s("w:rsidR", v);
  }
  /** Section Properties Revision ID. Serialized as `w:rsidSect` */
  get rsidSect() {
    return this._g("w:rsidSect");
  }
  set rsidSect(v) {
    this._s("w:rsidSect", v);
  }
  /** Returns FootnoteProperties. */
  get footnoteProperties() {
    return this._f(FootnoteProperties);
  }
  /** Returns EndnoteProperties. */
  get endnoteProperties() {
    return this._f(EndnoteProperties);
  }
  /** Returns SectionType. */
  get sectionType() {
    return this._f(SectionType);
  }
  /** Returns PageSize. */
  get pageSize() {
    return this._f(PageSize);
  }
  /** Returns PageMargin. */
  get pageMargin() {
    return this._f(PageMargin);
  }
  /** Returns PaperSource. */
  get paperSource() {
    return this._f(PaperSource);
  }
  /** Returns PageBorders. */
  get pageBorders() {
    return this._f(PageBorders);
  }
  /** Returns LineNumberType. */
  get lineNumberType() {
    return this._f(LineNumberType);
  }
  /** Returns PageNumberType. */
  get pageNumberType() {
    return this._f(PageNumberType);
  }
  /** Returns Columns. */
  get columns() {
    return this._f(Columns);
  }
  /** Returns FormProtection. */
  get formProtection() {
    return this._f(FormProtection);
  }
  /** Returns VerticalTextAlignmentOnPage. */
  get verticalTextAlignmentOnPage() {
    return this._f(VerticalTextAlignmentOnPage);
  }
  /** Returns NoEndnote. */
  get noEndnote() {
    return this._f(NoEndnote);
  }
  /** Returns TitlePage. */
  get titlePage() {
    return this._f(TitlePage);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns BiDi. */
  get biDi() {
    return this._f(BiDi);
  }
  /** Returns GutterOnRight. */
  get gutterOnRight() {
    return this._f(GutterOnRight);
  }
  /** Returns DocGrid. */
  get docGrid() {
    return this._f(DocGrid);
  }
  /** Returns PrinterSettingsReference. */
  get printerSettingsReference() {
    return this._f(PrinterSettingsReference);
  }
  /** Returns W15FootnoteColumns. */
  get footnoteColumns() {
    return this._f(W15FootnoteColumns);
  }
}
class PreviousTableProperties extends OxmlCompositeElement {
  static _Q = "w:tblPr";
  /** Returns TableStyle. */
  get tableStyle() {
    return this._f(TableStyle);
  }
  /** Returns TablePositionProperties. */
  get tablePositionProperties() {
    return this._f(TablePositionProperties);
  }
  /** Returns TableOverlap. */
  get tableOverlap() {
    return this._f(TableOverlap);
  }
  /** Returns BiDiVisual. */
  get biDiVisual() {
    return this._f(BiDiVisual);
  }
  /** Returns TableWidth. */
  get tableWidth() {
    return this._f(TableWidth);
  }
  /** Returns TableJustification. */
  get tableJustification() {
    return this._f(TableJustification);
  }
  /** Returns TableCellSpacing. */
  get tableCellSpacing() {
    return this._f(TableCellSpacing);
  }
  /** Returns TableIndentation. */
  get tableIndentation() {
    return this._f(TableIndentation);
  }
  /** Returns TableBorders. */
  get tableBorders() {
    return this._f(TableBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns TableLayout. */
  get tableLayout() {
    return this._f(TableLayout);
  }
  /** Returns TableCellMarginDefault. */
  get tableCellMarginDefault() {
    return this._f(TableCellMarginDefault);
  }
  /** Returns TableLook. */
  get tableLook() {
    return this._f(TableLook);
  }
  /** Returns TableCaption. */
  get tableCaption() {
    return this._f(TableCaption);
  }
  /** Returns TableDescription. */
  get tableDescription() {
    return this._f(TableDescription);
  }
}
class PreviousTableRowProperties extends OxmlCompositeElement {
  static _Q = "w:trPr";
}
class PreviousTableCellProperties extends OxmlCompositeElement {
  static _Q = "w:tcPr";
  /** Returns ConditionalFormatStyle. */
  get conditionalFormatStyle() {
    return this._f(ConditionalFormatStyle);
  }
  /** Returns TableCellWidth. */
  get tableCellWidth() {
    return this._f(TableCellWidth);
  }
  /** Returns GridSpan. */
  get gridSpan() {
    return this._f(GridSpan);
  }
  /** Returns HorizontalMerge. */
  get horizontalMerge() {
    return this._f(HorizontalMerge);
  }
  /** Returns VerticalMerge. */
  get verticalMerge() {
    return this._f(VerticalMerge);
  }
  /** Returns TableCellBorders. */
  get tableCellBorders() {
    return this._f(TableCellBorders);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns NoWrap. */
  get noWrap() {
    return this._f(NoWrap);
  }
  /** Returns TableCellMargin. */
  get tableCellMargin() {
    return this._f(TableCellMargin);
  }
  /** Returns TextDirection. */
  get textDirection() {
    return this._f(TextDirection);
  }
  /** Returns TableCellFitText. */
  get tableCellFitText() {
    return this._f(TableCellFitText);
  }
  /** Returns TableCellVerticalAlignment. */
  get tableCellVerticalAlignment() {
    return this._f(TableCellVerticalAlignment);
  }
  /** Returns HideMark. */
  get hideMark() {
    return this._f(HideMark);
  }
}
class PreviousTablePropertyExceptions extends OxmlCompositeElement {
  static _Q = "w:tblPrEx";
  /** Preferred Table Width Exception. */
  get tableWidth() {
    return this._f(TableWidth);
  }
  /** Table Alignment Exception. */
  get tableJustification() {
    return this._f(TableJustification);
  }
  /** Table Cell Spacing Exception. */
  get tableCellSpacing() {
    return this._f(TableCellSpacing);
  }
  /** Table Indent from Leading Margin Exception. */
  get tableIndentation() {
    return this._f(TableIndentation);
  }
  /** Table Borders Exceptions. */
  get tableBorders() {
    return this._f(TableBorders);
  }
  /** Table Shading Exception. */
  get shading() {
    return this._f(Shading);
  }
  /** Table Layout Exception. */
  get tableLayout() {
    return this._f(TableLayout);
  }
  /** Table Cell Margin Exceptions. */
  get tableCellMarginDefault() {
    return this._f(TableCellMarginDefault);
  }
  /** Table Style Conditional Formatting Settings Exception. */
  get tableLook() {
    return this._f(TableLook);
  }
}
class GlossaryDocument extends OxmlPartRootElement {
  static _Q = "w:glossaryDocument";
  /** Document Background. */
  get documentBackground() {
    return this._f(DocumentBackground);
  }
  /** List of Glossary Document Entries. */
  get docParts() {
    return this._f(DocParts);
  }
}
class Document extends OxmlPartRootElement {
  static _Q = "w:document";
  static _A = ["w:conformance"];
  /** conformance. Serialized as `w:conformance` */
  get conformance() {
    return this._g("w:conformance");
  }
  set conformance(v) {
    this._s("w:conformance", v);
  }
  /** Document Background. */
  get documentBackground() {
    return this._f(DocumentBackground);
  }
  /** Returns Body. */
  get body() {
    return this._f(Body);
  }
}
class Styles extends OxmlPartRootElement {
  static _Q = "w:styles";
  /** Document Default Paragraph and Run Properties. */
  get docDefaults() {
    return this._f(DocDefaults);
  }
  /** Latent Style Information. */
  get latentStyles() {
    return this._f(LatentStyles);
  }
}
class Numbering extends OxmlPartRootElement {
  static _Q = "w:numbering";
}
class Fonts extends OxmlPartRootElement {
  static _Q = "w:fonts";
}
class WebSettings extends OxmlPartRootElement {
  static _Q = "w:webSettings";
  /** Returns Frameset. */
  get frameset() {
    return this._f(Frameset);
  }
  /** Returns Divs. */
  get divs() {
    return this._f(Divs);
  }
  /** Returns WebPageEncoding. */
  get webPageEncoding() {
    return this._f(WebPageEncoding);
  }
  /** Returns OptimizeForBrowser. */
  get optimizeForBrowser() {
    return this._f(OptimizeForBrowser);
  }
  /** Returns RelyOnVML. */
  get relyOnVML() {
    return this._f(RelyOnVML);
  }
  /** Returns AllowPNG. */
  get allowPNG() {
    return this._f(AllowPNG);
  }
  /** Returns DoNotRelyOnCSS. */
  get doNotRelyOnCSS() {
    return this._f(DoNotRelyOnCSS);
  }
  /** Returns DoNotSaveAsSingleFile. */
  get doNotSaveAsSingleFile() {
    return this._f(DoNotSaveAsSingleFile);
  }
  /** Returns DoNotOrganizeInFolder. */
  get doNotOrganizeInFolder() {
    return this._f(DoNotOrganizeInFolder);
  }
  /** Returns DoNotUseLongFileNames. */
  get doNotUseLongFileNames() {
    return this._f(DoNotUseLongFileNames);
  }
  /** Returns PixelsPerInch. */
  get pixelsPerInch() {
    return this._f(PixelsPerInch);
  }
  /** Returns TargetScreenSize. */
  get targetScreenSize() {
    return this._f(TargetScreenSize);
  }
}
class Settings extends OxmlPartRootElement {
  static _Q = "w:settings";
  /** Write Protection. */
  get writeProtection() {
    return this._f(WriteProtection);
  }
  /** Document View Setting. */
  get view() {
    return this._f(View);
  }
  /** Magnification Setting. */
  get zoom() {
    return this._f(Zoom);
  }
  /** Remove Personal Information from Document Properties. */
  get removePersonalInformation() {
    return this._f(RemovePersonalInformation);
  }
  /** Remove Date and Time from Annotations. */
  get removeDateAndTime() {
    return this._f(RemoveDateAndTime);
  }
  /** Do Not Display Visual Boundary For Header/Footer or Between Pages. */
  get doNotDisplayPageBoundaries() {
    return this._f(DoNotDisplayPageBoundaries);
  }
  /** Display Background Objects When Displaying Document. */
  get displayBackgroundShape() {
    return this._f(DisplayBackgroundShape);
  }
  /** Print PostScript Codes With Document Text. */
  get printPostScriptOverText() {
    return this._f(PrintPostScriptOverText);
  }
  /** Print Fractional Character Widths. */
  get printFractionalCharacterWidth() {
    return this._f(PrintFractionalCharacterWidth);
  }
  /** Only Print Form Field Content. */
  get printFormsData() {
    return this._f(PrintFormsData);
  }
  /** Embed TrueType Fonts. */
  get embedTrueTypeFonts() {
    return this._f(EmbedTrueTypeFonts);
  }
  /** Embed Common System Fonts. */
  get embedSystemFonts() {
    return this._f(EmbedSystemFonts);
  }
  /** Subset Fonts When Embedding. */
  get saveSubsetFonts() {
    return this._f(SaveSubsetFonts);
  }
  /** Only Save Form Field Content. */
  get saveFormsData() {
    return this._f(SaveFormsData);
  }
  /** Mirror Page Margins. */
  get mirrorMargins() {
    return this._f(MirrorMargins);
  }
  /** Align Paragraph and Table Borders with Page Border. */
  get alignBorderAndEdges() {
    return this._f(AlignBorderAndEdges);
  }
  /** Page Border Excludes Header. */
  get bordersDoNotSurroundHeader() {
    return this._f(BordersDoNotSurroundHeader);
  }
  /** Page Border Excludes Footer. */
  get bordersDoNotSurroundFooter() {
    return this._f(BordersDoNotSurroundFooter);
  }
  /** Position Gutter At Top of Page. */
  get gutterAtTop() {
    return this._f(GutterAtTop);
  }
  /** Do Not Display Visual Indication of Spelling Errors. */
  get hideSpellingErrors() {
    return this._f(HideSpellingErrors);
  }
  /** Do Not Display Visual Indication of Grammatical Errors. */
  get hideGrammaticalErrors() {
    return this._f(HideGrammaticalErrors);
  }
}
class HeaderFooterType extends OxmlCompositeElement {
}
class Footer extends OxmlPartRootElement {
  static _Q = "w:ftr";
}
class Header extends OxmlPartRootElement {
  static _Q = "w:hdr";
}
class Endnotes extends OxmlPartRootElement {
  static _Q = "w:endnotes";
}
class Footnotes extends OxmlPartRootElement {
  static _Q = "w:footnotes";
}
class Comments extends OxmlPartRootElement {
  static _Q = "w:comments";
}
class TextBoxContent extends OxmlCompositeElement {
  static _Q = "w:txbxContent";
}
class Recipients extends OxmlPartRootElement {
  static _Q = "w:recipients";
}
class DocGrid extends OxmlLeafElement {
  static _Q = "w:docGrid";
  static _A = ["w:type", "w:linePitch", "w:charSpace"];
  /** Document Grid Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Document Grid Line Pitch. Serialized as `w:linePitch` */
  get linePitch() {
    return this._g("w:linePitch");
  }
  set linePitch(v) {
    this._s("w:linePitch", v);
  }
  /** Document Grid Character Pitch. Serialized as `w:charSpace` */
  get characterSpace() {
    return this._g("w:charSpace");
  }
  set characterSpace(v) {
    this._s("w:charSpace", v);
  }
}
class VerticalTextAlignmentOnPage extends OxmlLeafElement {
  static _Q = "w:vAlign";
  static _A = ["w:val"];
  /** Vertical Alignment Setting. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Columns extends OxmlCompositeElement {
  static _Q = "w:cols";
  static _A = ["w:equalWidth", "w:space", "w:num", "w:sep"];
  /** Equal Column Widths. Serialized as `w:equalWidth` */
  get equalWidth() {
    return this._g("w:equalWidth");
  }
  set equalWidth(v) {
    this._s("w:equalWidth", v);
  }
  /** Spacing Between Equal Width Columns. Serialized as `w:space` */
  get space() {
    return this._g("w:space");
  }
  set space(v) {
    this._s("w:space", v);
  }
  /** Number of Equal Width Columns. Serialized as `w:num` */
  get columnCount() {
    return this._g("w:num");
  }
  set columnCount(v) {
    this._s("w:num", v);
  }
  /** Draw Line Between Columns. Serialized as `w:sep` */
  get separator() {
    return this._g("w:sep");
  }
  set separator(v) {
    this._s("w:sep", v);
  }
}
class PageNumberType extends OxmlLeafElement {
  static _Q = "w:pgNumType";
  static _A = ["w:fmt", "w:start", "w:chapStyle", "w:chapSep"];
  /** Page Number Format. Serialized as `w:fmt` */
  get format() {
    return this._g("w:fmt");
  }
  set format(v) {
    this._s("w:fmt", v);
  }
  /** Starting Page Number. Serialized as `w:start` */
  get start() {
    return this._g("w:start");
  }
  set start(v) {
    this._s("w:start", v);
  }
  /** Chapter Heading Style. Serialized as `w:chapStyle` */
  get chapterStyle() {
    return this._g("w:chapStyle");
  }
  set chapterStyle(v) {
    this._s("w:chapStyle", v);
  }
  /** Chapter Separator Character. Serialized as `w:chapSep` */
  get chapterSeparator() {
    return this._g("w:chapSep");
  }
  set chapterSeparator(v) {
    this._s("w:chapSep", v);
  }
}
class LineNumberType extends OxmlLeafElement {
  static _Q = "w:lnNumType";
  static _A = ["w:countBy", "w:start", "w:distance", "w:restart"];
  /** Line Number Increments to Display. Serialized as `w:countBy` */
  get countBy() {
    return this._g("w:countBy");
  }
  set countBy(v) {
    this._s("w:countBy", v);
  }
  /** Line Numbering Starting Value. Serialized as `w:start` */
  get start() {
    return this._g("w:start");
  }
  set start(v) {
    this._s("w:start", v);
  }
  /** Distance Between Text and Line Numbering. Serialized as `w:distance` */
  get distance() {
    return this._g("w:distance");
  }
  set distance(v) {
    this._s("w:distance", v);
  }
  /** Line Numbering Restart Setting. Serialized as `w:restart` */
  get restart() {
    return this._g("w:restart");
  }
  set restart(v) {
    this._s("w:restart", v);
  }
}
class PageBorders extends OxmlCompositeElement {
  static _Q = "w:pgBorders";
  static _A = ["w:zOrder", "w:display", "w:offsetFrom"];
  /** Z-Ordering of Page Border. Serialized as `w:zOrder` */
  get zOrder() {
    return this._g("w:zOrder");
  }
  set zOrder(v) {
    this._s("w:zOrder", v);
  }
  /** Pages to Display Page Borders. Serialized as `w:display` */
  get display() {
    return this._g("w:display");
  }
  set display(v) {
    this._s("w:display", v);
  }
  /** Page Border Positioning. Serialized as `w:offsetFrom` */
  get offsetFrom() {
    return this._g("w:offsetFrom");
  }
  set offsetFrom(v) {
    this._s("w:offsetFrom", v);
  }
  /** Top Border. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Left Border. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Bottom Border. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Right Border. */
  get rightBorder() {
    return this._f(RightBorder);
  }
}
class PaperSource extends OxmlLeafElement {
  static _Q = "w:paperSrc";
  static _A = ["w:first", "w:other"];
  /** First Page Printer Tray Code. Serialized as `w:first` */
  get first() {
    return this._g("w:first");
  }
  set first(v) {
    this._s("w:first", v);
  }
  /** Non-First Page Printer Tray Code. Serialized as `w:other` */
  get other() {
    return this._g("w:other");
  }
  set other(v) {
    this._s("w:other", v);
  }
}
class PageMargin extends OxmlLeafElement {
  static _Q = "w:pgMar";
  static _A = ["w:top", "w:right", "w:bottom", "w:left", "w:header", "w:footer", "w:gutter"];
  /** Top Margin Spacing. Serialized as `w:top` */
  get top() {
    return this._g("w:top");
  }
  set top(v) {
    this._s("w:top", v);
  }
  /** Right Margin Spacing. Serialized as `w:right` */
  get right() {
    return this._g("w:right");
  }
  set right(v) {
    this._s("w:right", v);
  }
  /** Page Bottom Spacing. Serialized as `w:bottom` */
  get bottom() {
    return this._g("w:bottom");
  }
  set bottom(v) {
    this._s("w:bottom", v);
  }
  /** Left Margin Spacing. Serialized as `w:left` */
  get left() {
    return this._g("w:left");
  }
  set left(v) {
    this._s("w:left", v);
  }
  /** Spacing to Top of Header. Serialized as `w:header` */
  get header() {
    return this._g("w:header");
  }
  set header(v) {
    this._s("w:header", v);
  }
  /** Spacing to Bottom of Footer. Serialized as `w:footer` */
  get footer() {
    return this._g("w:footer");
  }
  set footer(v) {
    this._s("w:footer", v);
  }
  /** Page Gutter Spacing. Serialized as `w:gutter` */
  get gutter() {
    return this._g("w:gutter");
  }
  set gutter(v) {
    this._s("w:gutter", v);
  }
}
class PageSize extends OxmlLeafElement {
  static _Q = "w:pgSz";
  static _A = ["w:w", "w:h", "w:orient", "w:code"];
  /** Page Width. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** Page Height. Serialized as `w:h` */
  get height() {
    return this._g("w:h");
  }
  set height(v) {
    this._s("w:h", v);
  }
  /** Page Orientation. Serialized as `w:orient` */
  get orient() {
    return this._g("w:orient");
  }
  set orient(v) {
    this._s("w:orient", v);
  }
  /** Printer Paper Code. Serialized as `w:code` */
  get code() {
    return this._g("w:code");
  }
  set code(v) {
    this._s("w:code", v);
  }
}
class SectionType extends OxmlLeafElement {
  static _Q = "w:type";
  static _A = ["w:val"];
  /** Section Type Setting. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class EndnoteProperties extends OxmlCompositeElement {
  static _Q = "w:endnotePr";
  /** Endnote Placement. */
  get endnotePosition() {
    return this._f(EndnotePosition);
  }
  /** Endnote Numbering Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Footnote and Endnote Numbering Starting Value. */
  get numberingStart() {
    return this._f(NumberingStart);
  }
  /** Footnote and Endnote Numbering Restart Location. */
  get numberingRestart() {
    return this._f(NumberingRestart);
  }
}
class FootnoteProperties extends OxmlCompositeElement {
  static _Q = "w:footnotePr";
  /** Footnote Placement. */
  get footnotePosition() {
    return this._f(FootnotePosition);
  }
  /** Footnote Numbering Format. */
  get numberingFormat() {
    return this._f(NumberingFormat);
  }
  /** Footnote and Endnote Numbering Starting Value. */
  get numberingStart() {
    return this._f(NumberingStart);
  }
  /** Footnote and Endnote Numbering Restart Location. */
  get numberingRestart() {
    return this._f(NumberingRestart);
  }
}
class TableLook extends OxmlLeafElement {
  static _Q = "w:tblLook";
  static _A = ["w:val", "w:firstRow", "w:lastRow", "w:firstColumn", "w:lastColumn", "w:noHBand", "w:noVBand"];
  /** val. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
  /** firstRow. Serialized as `w:firstRow` */
  get firstRow() {
    return this._g("w:firstRow");
  }
  set firstRow(v) {
    this._s("w:firstRow", v);
  }
  /** lastRow. Serialized as `w:lastRow` */
  get lastRow() {
    return this._g("w:lastRow");
  }
  set lastRow(v) {
    this._s("w:lastRow", v);
  }
  /** firstColumn. Serialized as `w:firstColumn` */
  get firstColumn() {
    return this._g("w:firstColumn");
  }
  set firstColumn(v) {
    this._s("w:firstColumn", v);
  }
  /** lastColumn. Serialized as `w:lastColumn` */
  get lastColumn() {
    return this._g("w:lastColumn");
  }
  set lastColumn(v) {
    this._s("w:lastColumn", v);
  }
  /** noHBand. Serialized as `w:noHBand` */
  get noHorizontalBand() {
    return this._g("w:noHBand");
  }
  set noHorizontalBand(v) {
    this._s("w:noHBand", v);
  }
  /** noVBand. Serialized as `w:noVBand` */
  get noVerticalBand() {
    return this._g("w:noVBand");
  }
  set noVerticalBand(v) {
    this._s("w:noVBand", v);
  }
}
class AltChunk extends OxmlCompositeElement {
  static _Q = "w:altChunk";
  static _A = ["r:id"];
  /** Relationship to Part. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** External Content Import Properties. */
  get altChunkProperties() {
    return this._f(AltChunkProperties);
  }
}
class NumberingRestart extends OxmlLeafElement {
  static _Q = "w:numRestart";
  static _A = ["w:val"];
  /** Automatic Numbering Restart Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class NumberingStart extends OxmlLeafElement {
  static _Q = "w:numStart";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableCellMarginDefault extends OxmlCompositeElement {
  static _Q = "w:tblCellMar";
  /** Table Cell Top Margin Default. */
  get topMargin() {
    return this._f(TopMargin);
  }
  /** Table Cell Left Margin Default. */
  get tableCellLeftMargin() {
    return this._f(TableCellLeftMargin);
  }
  /** Returns StartMargin. */
  get startMargin() {
    return this._f(StartMargin);
  }
  /** Table Cell Bottom Margin Default. */
  get bottomMargin() {
    return this._f(BottomMargin);
  }
  /** Table Cell Right Margin Default. */
  get tableCellRightMargin() {
    return this._f(TableCellRightMargin);
  }
  /** Returns EndMargin. */
  get endMargin() {
    return this._f(EndMargin);
  }
}
class TableLayout extends OxmlLeafElement {
  static _Q = "w:tblLayout";
  static _A = ["w:type"];
  /** Table Layout Setting. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
}
class TableBorders extends OxmlCompositeElement {
  static _Q = "w:tblBorders";
  /** Table Top Border. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Table Left Border. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Returns StartBorder. */
  get startBorder() {
    return this._f(StartBorder);
  }
  /** Table Bottom Border. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Table Right Border. */
  get rightBorder() {
    return this._f(RightBorder);
  }
  /** Returns EndBorder. */
  get endBorder() {
    return this._f(EndBorder);
  }
  /** Table Inside Horizontal Edges Border. */
  get insideHorizontalBorder() {
    return this._f(InsideHorizontalBorder);
  }
  /** Table Inside Vertical Edges Border. */
  get insideVerticalBorder() {
    return this._f(InsideVerticalBorder);
  }
}
class TableIndentation extends OxmlLeafElement {
  static _Q = "w:tblInd";
  static _A = ["w:w", "w:type"];
  /** w. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
}
class UnsignedDecimalNumberMax3Type extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableStyleColumnBandSize extends UnsignedDecimalNumberMax3Type {
  static _Q = "w:tblStyleColBandSize";
}
class TableStyleRowBandSize extends UnsignedDecimalNumberMax3Type {
  static _Q = "w:tblStyleRowBandSize";
}
class TableOverlap extends OxmlLeafElement {
  static _Q = "w:tblOverlap";
  static _A = ["w:val"];
  /** Floating Table Overlap Setting. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TablePositionProperties extends OxmlLeafElement {
  static _Q = "w:tblpPr";
  static _A = ["w:leftFromText", "w:rightFromText", "w:topFromText", "w:bottomFromText", "w:vertAnchor", "w:horzAnchor", "w:tblpXSpec", "w:tblpX", "w:tblpYSpec", "w:tblpY"];
  /** Distance From Left of Table to Text. Serialized as `w:leftFromText` */
  get leftFromText() {
    return this._g("w:leftFromText");
  }
  set leftFromText(v) {
    this._s("w:leftFromText", v);
  }
  /** (Distance From Right of Table to Text. Serialized as `w:rightFromText` */
  get rightFromText() {
    return this._g("w:rightFromText");
  }
  set rightFromText(v) {
    this._s("w:rightFromText", v);
  }
  /** Distance From Top of Table to Text. Serialized as `w:topFromText` */
  get topFromText() {
    return this._g("w:topFromText");
  }
  set topFromText(v) {
    this._s("w:topFromText", v);
  }
  /** Distance From Bottom of Table to Text. Serialized as `w:bottomFromText` */
  get bottomFromText() {
    return this._g("w:bottomFromText");
  }
  set bottomFromText(v) {
    this._s("w:bottomFromText", v);
  }
  /** Table Vertical Anchor. Serialized as `w:vertAnchor` */
  get verticalAnchor() {
    return this._g("w:vertAnchor");
  }
  set verticalAnchor(v) {
    this._s("w:vertAnchor", v);
  }
  /** Table Horizontal Anchor. Serialized as `w:horzAnchor` */
  get horizontalAnchor() {
    return this._g("w:horzAnchor");
  }
  set horizontalAnchor(v) {
    this._s("w:horzAnchor", v);
  }
  /** Relative Horizontal Alignment From Anchor. Serialized as `w:tblpXSpec` */
  get tablePositionXAlignment() {
    return this._g("w:tblpXSpec");
  }
  set tablePositionXAlignment(v) {
    this._s("w:tblpXSpec", v);
  }
  /** Absolute Horizontal Distance From Anchor. Serialized as `w:tblpX` */
  get tablePositionX() {
    return this._g("w:tblpX");
  }
  set tablePositionX(v) {
    this._s("w:tblpX", v);
  }
  /** Relative Vertical Alignment from Anchor. Serialized as `w:tblpYSpec` */
  get tablePositionYAlignment() {
    return this._g("w:tblpYSpec");
  }
  set tablePositionYAlignment(v) {
    this._s("w:tblpYSpec", v);
  }
  /** Absolute Vertical Distance From Anchor. Serialized as `w:tblpY` */
  get tablePositionY() {
    return this._g("w:tblpY");
  }
  set tablePositionY(v) {
    this._s("w:tblpY", v);
  }
}
class TableJustification extends OxmlLeafElement {
  static _Q = "w:jc";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableRowHeight extends OxmlLeafElement {
  static _Q = "w:trHeight";
  static _A = ["w:val", "w:hRule"];
  /** Table Row Height. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Table Row Height Type. Serialized as `w:hRule` */
  get heightType() {
    return this._g("w:hRule");
  }
  set heightType(v) {
    this._s("w:hRule", v);
  }
}
class DivId extends OxmlLeafElement {
  static _Q = "w:divId";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableCellVerticalAlignment extends OxmlLeafElement {
  static _Q = "w:vAlign";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableCellMargin extends OxmlCompositeElement {
  static _Q = "w:tcMar";
  /** Table Cell Top Margin Exception. */
  get topMargin() {
    return this._f(TopMargin);
  }
  /** Table Cell Left Margin Exception. */
  get leftMargin() {
    return this._f(LeftMargin);
  }
  /** Returns StartMargin. */
  get startMargin() {
    return this._f(StartMargin);
  }
  /** Table Cell Bottom Margin Exception. */
  get bottomMargin() {
    return this._f(BottomMargin);
  }
  /** Table Cell Right Margin Exception. */
  get rightMargin() {
    return this._f(RightMargin);
  }
  /** Returns EndMargin. */
  get endMargin() {
    return this._f(EndMargin);
  }
}
class OnOffOnlyType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PersonalReply extends OnOffOnlyType {
  static _Q = "w:personalReply";
}
class PersonalCompose extends OnOffOnlyType {
  static _Q = "w:personalCompose";
}
class Personal extends OnOffOnlyType {
  static _Q = "w:personal";
}
class Locked extends OnOffOnlyType {
  static _Q = "w:locked";
}
class PrimaryStyle extends OnOffOnlyType {
  static _Q = "w:qFormat";
}
class UnhideWhenUsed extends OnOffOnlyType {
  static _Q = "w:unhideWhenUsed";
}
class SemiHidden extends OnOffOnlyType {
  static _Q = "w:semiHidden";
}
class StyleHidden extends OnOffOnlyType {
  static _Q = "w:hidden";
}
class AutoRedefine extends OnOffOnlyType {
  static _Q = "w:autoRedefine";
}
class FlatBorders extends OnOffOnlyType {
  static _Q = "w:flatBorders";
}
class NoBorder extends OnOffOnlyType {
  static _Q = "w:noBorder";
}
class LinkedToFile extends OnOffOnlyType {
  static _Q = "w:linkedToFile";
}
class NoResizeAllowed extends OnOffOnlyType {
  static _Q = "w:noResizeAllowed";
}
class BiDiVisual extends OnOffOnlyType {
  static _Q = "w:bidiVisual";
}
class TableHeader extends OnOffOnlyType {
  static _Q = "w:tblHeader";
}
class CantSplit extends OnOffOnlyType {
  static _Q = "w:cantSplit";
}
class HideMark extends OnOffOnlyType {
  static _Q = "w:hideMark";
}
class TableCellFitText extends OnOffOnlyType {
  static _Q = "w:tcFitText";
}
class NoWrap extends OnOffOnlyType {
  static _Q = "w:noWrap";
}
class TableCellBorders extends OxmlCompositeElement {
  static _Q = "w:tcBorders";
  /** Table Cell Top Border. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Table Cell Left Border. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Returns StartBorder. */
  get startBorder() {
    return this._f(StartBorder);
  }
  /** Table Cell Bottom Border. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Table Cell Right Border. */
  get rightBorder() {
    return this._f(RightBorder);
  }
  /** Returns EndBorder. */
  get endBorder() {
    return this._f(EndBorder);
  }
  /** Table Cell Inside Horizontal Edges Border. */
  get insideHorizontalBorder() {
    return this._f(InsideHorizontalBorder);
  }
  /** Table Cell Inside Vertical Edges Border. */
  get insideVerticalBorder() {
    return this._f(InsideVerticalBorder);
  }
  /** Table Cell Top Left to Bottom Right Diagonal Border. */
  get topLeftToBottomRightCellBorder() {
    return this._f(TopLeftToBottomRightCellBorder);
  }
  /** Table Cell Top Right to Bottom Left Diagonal Border. */
  get topRightToBottomLeftCellBorder() {
    return this._f(TopRightToBottomLeftCellBorder);
  }
}
class VerticalMerge extends OxmlLeafElement {
  static _Q = "w:vMerge";
  static _A = ["w:val"];
  /** Vertical Merge Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class HorizontalMerge extends OxmlLeafElement {
  static _Q = "w:hMerge";
  static _A = ["w:val"];
  /** Horizontal Merge Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TableWidthType extends OxmlLeafElement {
  static _A = ["w:w", "w:type"];
  /** Table Width Value. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** Table Width Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
}
class RightMargin extends TableWidthType {
  static _Q = "w:right";
}
class LeftMargin extends TableWidthType {
  static _Q = "w:left";
}
class EndMargin extends TableWidthType {
  static _Q = "w:end";
}
class BottomMargin extends TableWidthType {
  static _Q = "w:bottom";
}
class StartMargin extends TableWidthType {
  static _Q = "w:start";
}
class TopMargin extends TableWidthType {
  static _Q = "w:top";
}
class TableWidth extends TableWidthType {
  static _Q = "w:tblW";
}
class TableCellSpacing extends TableWidthType {
  static _Q = "w:tblCellSpacing";
}
class WidthAfterTableRow extends TableWidthType {
  static _Q = "w:wAfter";
}
class WidthBeforeTableRow extends TableWidthType {
  static _Q = "w:wBefore";
}
class TableCellWidth extends TableWidthType {
  static _Q = "w:tcW";
}
class ConditionalFormatStyle extends OxmlLeafElement {
  static _Q = "w:cnfStyle";
  static _A = ["w:val", "w:firstRow", "w:lastRow", "w:firstColumn", "w:lastColumn", "w:oddVBand", "w:evenVBand", "w:oddHBand", "w:evenHBand", "w:firstRowFirstColumn", "w:firstRowLastColumn", "w:lastRowFirstColumn", "w:lastRowLastColumn"];
  /** Conditional Formatting Bit Mask. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** firstRow. Serialized as `w:firstRow` */
  get firstRow() {
    return this._g("w:firstRow");
  }
  set firstRow(v) {
    this._s("w:firstRow", v);
  }
  /** lastRow. Serialized as `w:lastRow` */
  get lastRow() {
    return this._g("w:lastRow");
  }
  set lastRow(v) {
    this._s("w:lastRow", v);
  }
  /** firstColumn. Serialized as `w:firstColumn` */
  get firstColumn() {
    return this._g("w:firstColumn");
  }
  set firstColumn(v) {
    this._s("w:firstColumn", v);
  }
  /** lastColumn. Serialized as `w:lastColumn` */
  get lastColumn() {
    return this._g("w:lastColumn");
  }
  set lastColumn(v) {
    this._s("w:lastColumn", v);
  }
  /** oddVBand. Serialized as `w:oddVBand` */
  get oddVerticalBand() {
    return this._g("w:oddVBand");
  }
  set oddVerticalBand(v) {
    this._s("w:oddVBand", v);
  }
  /** evenVBand. Serialized as `w:evenVBand` */
  get evenVerticalBand() {
    return this._g("w:evenVBand");
  }
  set evenVerticalBand(v) {
    this._s("w:evenVBand", v);
  }
  /** oddHBand. Serialized as `w:oddHBand` */
  get oddHorizontalBand() {
    return this._g("w:oddHBand");
  }
  set oddHorizontalBand(v) {
    this._s("w:oddHBand", v);
  }
  /** evenHBand. Serialized as `w:evenHBand` */
  get evenHorizontalBand() {
    return this._g("w:evenHBand");
  }
  set evenHorizontalBand(v) {
    this._s("w:evenHBand", v);
  }
  /** firstRowFirstColumn. Serialized as `w:firstRowFirstColumn` */
  get firstRowFirstColumn() {
    return this._g("w:firstRowFirstColumn");
  }
  set firstRowFirstColumn(v) {
    this._s("w:firstRowFirstColumn", v);
  }
  /** firstRowLastColumn. Serialized as `w:firstRowLastColumn` */
  get firstRowLastColumn() {
    return this._g("w:firstRowLastColumn");
  }
  set firstRowLastColumn(v) {
    this._s("w:firstRowLastColumn", v);
  }
  /** lastRowFirstColumn. Serialized as `w:lastRowFirstColumn` */
  get lastRowFirstColumn() {
    return this._g("w:lastRowFirstColumn");
  }
  set lastRowFirstColumn(v) {
    this._s("w:lastRowFirstColumn", v);
  }
  /** lastRowLastColumn. Serialized as `w:lastRowLastColumn` */
  get lastRowLastColumn() {
    return this._g("w:lastRowLastColumn");
  }
  set lastRowLastColumn(v) {
    this._s("w:lastRowLastColumn", v);
  }
}
class RelationshipType extends OxmlLeafElement {
  static _A = ["r:id"];
  /** Relationship to Part. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class AttachedTemplate extends RelationshipType {
  static _Q = "w:attachedTemplate";
}
class MovieReference extends RelationshipType {
  static _Q = "w:movie";
}
class SourceFileReference extends RelationshipType {
  static _Q = "w:sourceFileName";
}
class HeaderSource extends RelationshipType {
  static _Q = "w:headerSource";
}
class DataSourceReference extends RelationshipType {
  static _Q = "w:dataSource";
}
class RecipientDataReference extends RelationshipType {
  static _Q = "w:recipientData";
}
class SourceReference extends RelationshipType {
  static _Q = "w:src";
}
class PrinterSettingsReference extends RelationshipType {
  static _Q = "w:printerSettings";
}
class SubDocumentReference extends RelationshipType {
  static _Q = "w:subDoc";
}
class BidirectionalEmbedding extends OxmlCompositeElement {
  static _Q = "w:dir";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
}
class BidirectionalOverride extends OxmlCompositeElement {
  static _Q = "w:bdo";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get value() {
    return this._g("w:val");
  }
  set value(v) {
    this._s("w:val", v);
  }
}
class Hyperlink extends OxmlCompositeElement {
  static _Q = "w:hyperlink";
  static _A = ["w:tgtFrame", "w:tooltip", "w:docLocation", "w:history", "w:anchor", "r:id"];
  /** Hyperlink Target Frame. Serialized as `w:tgtFrame` */
  get targetFrame() {
    return this._g("w:tgtFrame");
  }
  set targetFrame(v) {
    this._s("w:tgtFrame", v);
  }
  /** Associated String. Serialized as `w:tooltip` */
  get tooltip() {
    return this._g("w:tooltip");
  }
  set tooltip(v) {
    this._s("w:tooltip", v);
  }
  /** Location in Target Document. Serialized as `w:docLocation` */
  get docLocation() {
    return this._g("w:docLocation");
  }
  set docLocation(v) {
    this._s("w:docLocation", v);
  }
  /** Add To Viewed Hyperlinks. Serialized as `w:history` */
  get history() {
    return this._g("w:history");
  }
  set history(v) {
    this._s("w:history", v);
  }
  /** Hyperlink Anchor. Serialized as `w:anchor` */
  get anchor() {
    return this._g("w:anchor");
  }
  set anchor(v) {
    this._s("w:anchor", v);
  }
  /** Hyperlink Target. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class SimpleField extends OxmlCompositeElement {
  static _Q = "w:fldSimple";
  static _A = ["w:instr", "w:fldLock", "w:dirty"];
  /** Field Codes. Serialized as `w:instr` */
  get instruction() {
    return this._g("w:instr");
  }
  set instruction(v) {
    this._s("w:instr", v);
  }
  /** Field Should Not Be Recalculated. Serialized as `w:fldLock` */
  get fieldLock() {
    return this._g("w:fldLock");
  }
  set fieldLock(v) {
    this._s("w:fldLock", v);
  }
  /** Field Result Invalidated. Serialized as `w:dirty` */
  get dirty() {
    return this._g("w:dirty");
  }
  set dirty(v) {
    this._s("w:dirty", v);
  }
  /** Custom Field Data. */
  get fieldData() {
    return this._f(FieldData);
  }
}
class CustomXmlRun extends OxmlCompositeElement {
  static _Q = "w:customXml";
}
class SdtCell extends OxmlCompositeElement {
  static _Q = "w:sdt";
  /** Cell-Level Structured Document Tag Content. */
  get sdtContentCell() {
    return this._f(SdtContentCell);
  }
}
class CustomXmlCell extends OxmlCompositeElement {
  static _Q = "w:customXml";
}
class TableCell extends OxmlCompositeElement {
  static _Q = "w:tc";
  /** Table Cell Properties. */
  get tableCellProperties() {
    return this._f(TableCellProperties);
  }
}
class SdtRow extends OxmlCompositeElement {
  static _Q = "w:sdt";
  /** Row-Level Structured Document Tag Content. */
  get sdtContentRow() {
    return this._f(SdtContentRow);
  }
}
class CustomXmlRow extends OxmlCompositeElement {
  static _Q = "w:customXml";
}
class TableRow extends OxmlCompositeElement {
  static _Q = "w:tr";
  static _A = ["w:rsidRPr", "w:rsidR", "w:rsidDel", "w:rsidTr", "w14:paraId", "w14:textId"];
  /** Revision Identifier for Table Row Glyph Formatting. Serialized as `w:rsidRPr` */
  get rsidTableRowMarkRevision() {
    return this._g("w:rsidRPr");
  }
  set rsidTableRowMarkRevision(v) {
    this._s("w:rsidRPr", v);
  }
  /** Revision Identifier for Table Row. Serialized as `w:rsidR` */
  get rsidTableRowAddition() {
    return this._g("w:rsidR");
  }
  set rsidTableRowAddition(v) {
    this._s("w:rsidR", v);
  }
  /** Revision Identifier for Table Row Deletion. Serialized as `w:rsidDel` */
  get rsidTableRowDeletion() {
    return this._g("w:rsidDel");
  }
  set rsidTableRowDeletion(v) {
    this._s("w:rsidDel", v);
  }
  /** Revision Identifier for Table Row Properties. Serialized as `w:rsidTr` */
  get rsidTableRowProperties() {
    return this._g("w:rsidTr");
  }
  set rsidTableRowProperties(v) {
    this._s("w:rsidTr", v);
  }
  /** paraId. Serialized as `w14:paraId` */
  get paragraphId() {
    return this._g("w14:paraId");
  }
  set paragraphId(v) {
    this._s("w14:paraId", v);
  }
  /** textId. Serialized as `w14:textId` */
  get textId() {
    return this._g("w14:textId");
  }
  set textId(v) {
    this._s("w14:textId", v);
  }
  /** Table-Level Property Exceptions. */
  get tablePropertyExceptions() {
    return this._f(TablePropertyExceptions);
  }
  /** Table Row Properties. */
  get tableRowProperties() {
    return this._f(TableRowProperties);
  }
}
class Table extends OxmlCompositeElement {
  static _Q = "w:tbl";
}
class Paragraph extends OxmlCompositeElement {
  static _Q = "w:p";
  static _A = ["w:rsidRPr", "w:rsidR", "w:rsidDel", "w:rsidP", "w:rsidRDefault", "w14:paraId", "w14:textId", "w14:noSpellErr"];
  /** Revision Identifier for Paragraph Glyph Formatting. Serialized as `w:rsidRPr` */
  get rsidParagraphMarkRevision() {
    return this._g("w:rsidRPr");
  }
  set rsidParagraphMarkRevision(v) {
    this._s("w:rsidRPr", v);
  }
  /** Revision Identifier for Paragraph. Serialized as `w:rsidR` */
  get rsidParagraphAddition() {
    return this._g("w:rsidR");
  }
  set rsidParagraphAddition(v) {
    this._s("w:rsidR", v);
  }
  /** Revision Identifier for Paragraph Deletion. Serialized as `w:rsidDel` */
  get rsidParagraphDeletion() {
    return this._g("w:rsidDel");
  }
  set rsidParagraphDeletion(v) {
    this._s("w:rsidDel", v);
  }
  /** Revision Identifier for Paragraph Properties. Serialized as `w:rsidP` */
  get rsidParagraphProperties() {
    return this._g("w:rsidP");
  }
  set rsidParagraphProperties(v) {
    this._s("w:rsidP", v);
  }
  /** Default Revision Identifier for Runs. Serialized as `w:rsidRDefault` */
  get rsidRunAdditionDefault() {
    return this._g("w:rsidRDefault");
  }
  set rsidRunAdditionDefault(v) {
    this._s("w:rsidRDefault", v);
  }
  /** paraId. Serialized as `w14:paraId` */
  get paragraphId() {
    return this._g("w14:paraId");
  }
  set paragraphId(v) {
    this._s("w14:paraId", v);
  }
  /** textId. Serialized as `w14:textId` */
  get textId() {
    return this._g("w14:textId");
  }
  set textId(v) {
    this._s("w14:textId", v);
  }
  /** noSpellErr. Serialized as `w14:noSpellErr` */
  get noSpellError() {
    return this._g("w14:noSpellErr");
  }
  set noSpellError(v) {
    this._s("w14:noSpellErr", v);
  }
  /** Paragraph Properties. */
  get paragraphProperties() {
    return this._f(ParagraphProperties);
  }
}
class SdtBlock extends OxmlCompositeElement {
  static _Q = "w:sdt";
  /** Block-Level Structured Document Tag Content. */
  get sdtContentBlock() {
    return this._f(SdtContentBlock);
  }
}
class CustomXmlBlock extends OxmlCompositeElement {
  static _Q = "w:customXml";
}
class SdtRun extends OxmlCompositeElement {
  static _Q = "w:sdt";
  /** Inline-Level Structured Document Tag Content. */
  get sdtContentRun() {
    return this._f(SdtContentRun);
  }
}
class ContentPart extends OxmlLeafElement {
  static _Q = "w:contentPart";
  static _A = ["r:id"];
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class RunTrackChangeType extends OxmlCompositeElement {
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class MoveToRun extends RunTrackChangeType {
  static _Q = "w:moveTo";
}
class MoveFromRun extends RunTrackChangeType {
  static _Q = "w:moveFrom";
}
class DeletedRun extends RunTrackChangeType {
  static _Q = "w:del";
}
class InsertedRun extends RunTrackChangeType {
  static _Q = "w:ins";
}
class PermEnd extends OxmlLeafElement {
  static _Q = "w:permEnd";
  static _A = ["w:id", "w:displacedByCustomXml"];
  /** Annotation ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Annotation Displaced By Custom XML Markup. Serialized as `w:displacedByCustomXml` */
  get displacedByCustomXml() {
    return this._g("w:displacedByCustomXml");
  }
  set displacedByCustomXml(v) {
    this._s("w:displacedByCustomXml", v);
  }
}
class PermStart extends OxmlLeafElement {
  static _Q = "w:permStart";
  static _A = ["w:edGrp", "w:ed", "w:colFirst", "w:colLast", "w:id", "w:displacedByCustomXml"];
  /** edGrp. Serialized as `w:edGrp` */
  get editorGroup() {
    return this._g("w:edGrp");
  }
  set editorGroup(v) {
    this._s("w:edGrp", v);
  }
  /** ed. Serialized as `w:ed` */
  get ed() {
    return this._g("w:ed");
  }
  set ed(v) {
    this._s("w:ed", v);
  }
  /** colFirst. Serialized as `w:colFirst` */
  get columnFirst() {
    return this._g("w:colFirst");
  }
  set columnFirst(v) {
    this._s("w:colFirst", v);
  }
  /** colLast. Serialized as `w:colLast` */
  get columnLast() {
    return this._g("w:colLast");
  }
  set columnLast(v) {
    this._s("w:colLast", v);
  }
  /** Annotation ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Annotation Displaced By Custom XML Markup. Serialized as `w:displacedByCustomXml` */
  get displacedByCustomXml() {
    return this._g("w:displacedByCustomXml");
  }
  set displacedByCustomXml(v) {
    this._s("w:displacedByCustomXml", v);
  }
}
class ProofError extends OxmlLeafElement {
  static _Q = "w:proofErr";
  static _A = ["w:type"];
  /** Proofing Error Anchor Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
}
class SdtRunRuby extends OxmlCompositeElement {
  static _Q = "w:sdt";
  /** Returns SdtContentRunRuby. */
  get sdtContentRunRuby() {
    return this._f(SdtContentRunRuby);
  }
}
class Run extends OxmlCompositeElement {
  static _Q = "w:r";
  static _A = ["w:rsidRPr", "w:rsidDel", "w:rsidR"];
  /** Revision Identifier for Run Properties. Serialized as `w:rsidRPr` */
  get rsidRunProperties() {
    return this._g("w:rsidRPr");
  }
  set rsidRunProperties(v) {
    this._s("w:rsidRPr", v);
  }
  /** Revision Identifier for Run Deletion. Serialized as `w:rsidDel` */
  get rsidRunDeletion() {
    return this._g("w:rsidDel");
  }
  set rsidRunDeletion(v) {
    this._s("w:rsidDel", v);
  }
  /** Revision Identifier for Run. Serialized as `w:rsidR` */
  get rsidRunAddition() {
    return this._g("w:rsidR");
  }
  set rsidRunAddition(v) {
    this._s("w:rsidR", v);
  }
  /** Run Properties. */
  get runProperties() {
    return this._f(RunProperties);
  }
}
class HyperlinkRuby extends OxmlCompositeElement {
  static _Q = "w:hyperlink";
  static _A = ["w:tgtFrame", "w:tooltip", "w:docLocation", "w:history", "w:anchor", "r:id"];
  /** tgtFrame. Serialized as `w:tgtFrame` */
  get targetFrame() {
    return this._g("w:tgtFrame");
  }
  set targetFrame(v) {
    this._s("w:tgtFrame", v);
  }
  /** tooltip. Serialized as `w:tooltip` */
  get tooltip() {
    return this._g("w:tooltip");
  }
  set tooltip(v) {
    this._s("w:tooltip", v);
  }
  /** docLocation. Serialized as `w:docLocation` */
  get docLocation() {
    return this._g("w:docLocation");
  }
  set docLocation(v) {
    this._s("w:docLocation", v);
  }
  /** history. Serialized as `w:history` */
  get history() {
    return this._g("w:history");
  }
  set history(v) {
    this._s("w:history", v);
  }
  /** anchor. Serialized as `w:anchor` */
  get anchor() {
    return this._g("w:anchor");
  }
  set anchor(v) {
    this._s("w:anchor", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class SimpleFieldRuby extends OxmlCompositeElement {
  static _Q = "w:fldSimple";
  static _A = ["w:instr", "w:fldLock", "w:dirty"];
  /** instr. Serialized as `w:instr` */
  get instruction() {
    return this._g("w:instr");
  }
  set instruction(v) {
    this._s("w:instr", v);
  }
  /** fldLock. Serialized as `w:fldLock` */
  get fieldLock() {
    return this._g("w:fldLock");
  }
  set fieldLock(v) {
    this._s("w:fldLock", v);
  }
  /** dirty. Serialized as `w:dirty` */
  get dirty() {
    return this._g("w:dirty");
  }
  set dirty(v) {
    this._s("w:dirty", v);
  }
  /** Returns FieldData. */
  get fieldData() {
    return this._f(FieldData);
  }
}
class CustomXmlRuby extends OxmlCompositeElement {
  static _Q = "w:customXml";
}
class MathControlMoveType extends OxmlCompositeElement {
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class MoveToMathControl extends MathControlMoveType {
  static _Q = "w:moveTo";
}
class MoveFromMathControl extends MathControlMoveType {
  static _Q = "w:moveFrom";
}
class DeletedMathControl extends OxmlCompositeElement {
  static _Q = "w:del";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class InsertedMathControl extends OxmlCompositeElement {
  static _Q = "w:ins";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class RunProperties extends OxmlCompositeElement {
  static _Q = "w:rPr";
  /** Returns RunStyle. */
  get runStyle() {
    return this._f(RunStyle);
  }
  /** Returns RunFonts. */
  get runFonts() {
    return this._f(RunFonts);
  }
  /** Returns Bold. */
  get bold() {
    return this._f(Bold);
  }
  /** Returns BoldComplexScript. */
  get boldComplexScript() {
    return this._f(BoldComplexScript);
  }
  /** Returns Italic. */
  get italic() {
    return this._f(Italic);
  }
  /** Returns ItalicComplexScript. */
  get italicComplexScript() {
    return this._f(ItalicComplexScript);
  }
  /** Returns Caps. */
  get caps() {
    return this._f(Caps);
  }
  /** Returns SmallCaps. */
  get smallCaps() {
    return this._f(SmallCaps);
  }
  /** Returns Strike. */
  get strike() {
    return this._f(Strike);
  }
  /** Returns DoubleStrike. */
  get doubleStrike() {
    return this._f(DoubleStrike);
  }
  /** Returns Outline. */
  get outline() {
    return this._f(Outline);
  }
  /** Returns Shadow. */
  get shadow() {
    return this._f(Shadow);
  }
  /** Returns Emboss. */
  get emboss() {
    return this._f(Emboss);
  }
  /** Returns Imprint. */
  get imprint() {
    return this._f(Imprint);
  }
  /** Returns NoProof. */
  get noProof() {
    return this._f(NoProof);
  }
  /** Returns SnapToGrid. */
  get snapToGrid() {
    return this._f(SnapToGrid);
  }
  /** Returns Vanish. */
  get vanish() {
    return this._f(Vanish);
  }
  /** Returns WebHidden. */
  get webHidden() {
    return this._f(WebHidden);
  }
  /** Returns Color. */
  get color() {
    return this._f(Color);
  }
  /** Returns Spacing. */
  get spacing() {
    return this._f(Spacing);
  }
  /** Returns CharacterScale. */
  get characterScale() {
    return this._f(CharacterScale);
  }
  /** Returns Kern. */
  get kern() {
    return this._f(Kern);
  }
  /** Returns Position. */
  get position() {
    return this._f(Position);
  }
  /** Returns FontSize. */
  get fontSize() {
    return this._f(FontSize);
  }
  /** Returns FontSizeComplexScript. */
  get fontSizeComplexScript() {
    return this._f(FontSizeComplexScript);
  }
  /** Returns Highlight. */
  get highlight() {
    return this._f(Highlight);
  }
  /** Returns Underline. */
  get underline() {
    return this._f(Underline);
  }
  /** Returns TextEffect. */
  get textEffect() {
    return this._f(TextEffect);
  }
  /** Returns Border. */
  get border() {
    return this._f(Border);
  }
  /** Returns Shading. */
  get shading() {
    return this._f(Shading);
  }
  /** Returns FitText. */
  get fitText() {
    return this._f(FitText);
  }
  /** Returns VerticalTextAlignment. */
  get verticalTextAlignment() {
    return this._f(VerticalTextAlignment);
  }
  /** Returns RightToLeftText. */
  get rightToLeftText() {
    return this._f(RightToLeftText);
  }
  /** Returns ComplexScript. */
  get complexScript() {
    return this._f(ComplexScript);
  }
  /** Returns Emphasis. */
  get emphasis() {
    return this._f(Emphasis);
  }
  /** Returns Languages. */
  get languages() {
    return this._f(Languages);
  }
  /** Returns EastAsianLayout. */
  get eastAsianLayout() {
    return this._f(EastAsianLayout);
  }
  /** Returns SpecVanish. */
  get specVanish() {
    return this._f(SpecVanish);
  }
  /** Returns W14Glow. */
  get glow() {
    return this._f(W14Glow);
  }
  /** Returns W14Shadow. */
  get shadow14() {
    return this._f(W14Shadow);
  }
  /** Returns W14Reflection. */
  get reflection() {
    return this._f(W14Reflection);
  }
  /** Returns W14TextOutlineEffect. */
  get textOutlineEffect() {
    return this._f(W14TextOutlineEffect);
  }
  /** Returns W14FillTextEffect. */
  get fillTextEffect() {
    return this._f(W14FillTextEffect);
  }
  /** Returns W14Scene3D. */
  get scene3D() {
    return this._f(W14Scene3D);
  }
  /** Returns W14Properties3D. */
  get properties3D() {
    return this._f(W14Properties3D);
  }
  /** Returns W14Ligatures. */
  get ligatures() {
    return this._f(W14Ligatures);
  }
  /** Returns W14NumberingFormat. */
  get numberingFormat() {
    return this._f(W14NumberingFormat);
  }
  /** Returns W14NumberSpacing. */
  get numberSpacing() {
    return this._f(W14NumberSpacing);
  }
  /** Returns W14StylisticSets. */
  get stylisticSets() {
    return this._f(W14StylisticSets);
  }
  /** Returns W14ContextualAlternatives. */
  get contextualAlternatives() {
    return this._f(W14ContextualAlternatives);
  }
  /** Returns RunPropertiesChange. */
  get runPropertiesChange() {
    return this._f(RunPropertiesChange);
  }
}
class RunPropertiesChange extends OxmlCompositeElement {
  static _Q = "w:rPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Run Properties. */
  get previousRunProperties() {
    return this._f(PreviousRunProperties);
  }
}
class EastAsianLayout extends OxmlLeafElement {
  static _Q = "w:eastAsianLayout";
  static _A = ["w:id", "w:combine", "w:combineBrackets", "w:vert", "w:vertCompress"];
  /** East Asian Typography Run ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Two Lines in One. Serialized as `w:combine` */
  get combine() {
    return this._g("w:combine");
  }
  set combine(v) {
    this._s("w:combine", v);
  }
  /** Display Brackets Around Two Lines in One. Serialized as `w:combineBrackets` */
  get combineBrackets() {
    return this._g("w:combineBrackets");
  }
  set combineBrackets(v) {
    this._s("w:combineBrackets", v);
  }
  /** Horizontal in Vertical (Rotate Text). Serialized as `w:vert` */
  get vertical() {
    return this._g("w:vert");
  }
  set vertical(v) {
    this._s("w:vert", v);
  }
  /** Compress Rotated Text to Line Height. Serialized as `w:vertCompress` */
  get verticalCompress() {
    return this._g("w:vertCompress");
  }
  set verticalCompress(v) {
    this._s("w:vertCompress", v);
  }
}
class LanguageType extends OxmlLeafElement {
  static _A = ["w:val", "w:eastAsia", "w:bidi"];
  /** Latin Language. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** East Asian Language. Serialized as `w:eastAsia` */
  get eastAsia() {
    return this._g("w:eastAsia");
  }
  set eastAsia(v) {
    this._s("w:eastAsia", v);
  }
  /** Complex Script Language. Serialized as `w:bidi` */
  get bidi() {
    return this._g("w:bidi");
  }
  set bidi(v) {
    this._s("w:bidi", v);
  }
}
class ThemeFontLanguages extends LanguageType {
  static _Q = "w:themeFontLang";
}
class Languages extends LanguageType {
  static _Q = "w:lang";
}
class Emphasis extends OxmlLeafElement {
  static _Q = "w:em";
  static _A = ["w:val"];
  /** Emphasis Mark Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class VerticalTextAlignment extends OxmlLeafElement {
  static _Q = "w:vertAlign";
  static _A = ["w:val"];
  /** Subscript/Superscript Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class FitText extends OxmlLeafElement {
  static _Q = "w:fitText";
  static _A = ["w:val", "w:id"];
  /** Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Fit Text Run ID. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class BorderType extends OxmlLeafElement {
  static _A = ["w:val", "w:color", "w:themeColor", "w:themeTint", "w:themeShade", "w:sz", "w:space", "w:shadow", "w:frame"];
  /** Border Style. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Border Color. Serialized as `w:color` */
  get color() {
    return this._g("w:color");
  }
  set color(v) {
    this._s("w:color", v);
  }
  /** Border Theme Color. Serialized as `w:themeColor` */
  get themeColor() {
    return this._g("w:themeColor");
  }
  set themeColor(v) {
    this._s("w:themeColor", v);
  }
  /** Border Theme Color Tint. Serialized as `w:themeTint` */
  get themeTint() {
    return this._g("w:themeTint");
  }
  set themeTint(v) {
    this._s("w:themeTint", v);
  }
  /** Border Theme Color Shade. Serialized as `w:themeShade` */
  get themeShade() {
    return this._g("w:themeShade");
  }
  set themeShade(v) {
    this._s("w:themeShade", v);
  }
  /** Border Width. Serialized as `w:sz` */
  get size() {
    return this._g("w:sz");
  }
  set size(v) {
    this._s("w:sz", v);
  }
  /** Border Spacing Measurement. Serialized as `w:space` */
  get space() {
    return this._g("w:space");
  }
  set space(v) {
    this._s("w:space", v);
  }
  /** Border Shadow. Serialized as `w:shadow` */
  get shadow() {
    return this._g("w:shadow");
  }
  set shadow(v) {
    this._s("w:shadow", v);
  }
  /** Create Frame Effect. Serialized as `w:frame` */
  get frame() {
    return this._g("w:frame");
  }
  set frame(v) {
    this._s("w:frame", v);
  }
}
class TopRightToBottomLeftCellBorder extends BorderType {
  static _Q = "w:tr2bl";
}
class TopLeftToBottomRightCellBorder extends BorderType {
  static _Q = "w:tl2br";
}
class InsideVerticalBorder extends BorderType {
  static _Q = "w:insideV";
}
class InsideHorizontalBorder extends BorderType {
  static _Q = "w:insideH";
}
class EndBorder extends BorderType {
  static _Q = "w:end";
}
class StartBorder extends BorderType {
  static _Q = "w:start";
}
class BarBorder extends BorderType {
  static _Q = "w:bar";
}
class BetweenBorder extends BorderType {
  static _Q = "w:between";
}
class RightBorder extends BorderType {
  static _Q = "w:right";
}
class BottomBorder extends BorderType {
  static _Q = "w:bottom";
}
class LeftBorder extends BorderType {
  static _Q = "w:left";
}
class TopBorder extends BorderType {
  static _Q = "w:top";
}
class Border extends BorderType {
  static _Q = "w:bdr";
}
class TextEffect extends OxmlLeafElement {
  static _Q = "w:effect";
  static _A = ["w:val"];
  /** Animated Text Effect Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Underline extends OxmlLeafElement {
  static _Q = "w:u";
  static _A = ["w:val", "w:color", "w:themeColor", "w:themeTint", "w:themeShade"];
  /** Underline Style. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Underline Color. Serialized as `w:color` */
  get color() {
    return this._g("w:color");
  }
  set color(v) {
    this._s("w:color", v);
  }
  /** Underline Theme Color. Serialized as `w:themeColor` */
  get themeColor() {
    return this._g("w:themeColor");
  }
  set themeColor(v) {
    this._s("w:themeColor", v);
  }
  /** Underline Theme Color Tint. Serialized as `w:themeTint` */
  get themeTint() {
    return this._g("w:themeTint");
  }
  set themeTint(v) {
    this._s("w:themeTint", v);
  }
  /** Underline Theme Color Shade. Serialized as `w:themeShade` */
  get themeShade() {
    return this._g("w:themeShade");
  }
  set themeShade(v) {
    this._s("w:themeShade", v);
  }
}
class Highlight extends OxmlLeafElement {
  static _Q = "w:highlight";
  static _A = ["w:val"];
  /** Highlighting Color. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class HpsMeasureType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Half Point Measurement. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PhoneticGuideBaseTextSize extends HpsMeasureType {
  static _Q = "w:hpsBaseText";
}
class PhoneticGuideTextFontSize extends HpsMeasureType {
  static _Q = "w:hps";
}
class FormFieldSize extends HpsMeasureType {
  static _Q = "w:size";
}
class FontSizeComplexScript extends HpsMeasureType {
  static _Q = "w:szCs";
}
class FontSize extends HpsMeasureType {
  static _Q = "w:sz";
}
class Position extends OxmlLeafElement {
  static _Q = "w:position";
  static _A = ["w:val"];
  /** Signed Half-Point Measurement. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Kern extends OxmlLeafElement {
  static _Q = "w:kern";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class CharacterScale extends OxmlLeafElement {
  static _Q = "w:w";
  static _A = ["w:val"];
  /** Text Expansion/Compression Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Spacing extends OxmlLeafElement {
  static _Q = "w:spacing";
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Color extends OxmlLeafElement {
  static _Q = "w:color";
  static _A = ["w:val", "w:themeColor", "w:themeTint", "w:themeShade"];
  /** Run Content Color. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Run Content Theme Color. Serialized as `w:themeColor` */
  get themeColor() {
    return this._g("w:themeColor");
  }
  set themeColor(v) {
    this._s("w:themeColor", v);
  }
  /** Run Content Theme Color Tint. Serialized as `w:themeTint` */
  get themeTint() {
    return this._g("w:themeTint");
  }
  set themeTint(v) {
    this._s("w:themeTint", v);
  }
  /** Run Content Theme Color Shade. Serialized as `w:themeShade` */
  get themeShade() {
    return this._g("w:themeShade");
  }
  set themeShade(v) {
    this._s("w:themeShade", v);
  }
}
class RunFonts extends OxmlLeafElement {
  static _Q = "w:rFonts";
  static _A = ["w:hint", "w:ascii", "w:hAnsi", "w:eastAsia", "w:cs", "w:asciiTheme", "w:hAnsiTheme", "w:eastAsiaTheme", "w:cstheme"];
  /** Font Content Type. Serialized as `w:hint` */
  get hint() {
    return this._g("w:hint");
  }
  set hint(v) {
    this._s("w:hint", v);
  }
  /** ASCII Font. Serialized as `w:ascii` */
  get ascii() {
    return this._g("w:ascii");
  }
  set ascii(v) {
    this._s("w:ascii", v);
  }
  /** High ANSI Font. Serialized as `w:hAnsi` */
  get highAnsi() {
    return this._g("w:hAnsi");
  }
  set highAnsi(v) {
    this._s("w:hAnsi", v);
  }
  /** East Asian Font. Serialized as `w:eastAsia` */
  get eastAsia() {
    return this._g("w:eastAsia");
  }
  set eastAsia(v) {
    this._s("w:eastAsia", v);
  }
  /** Complex Script Font. Serialized as `w:cs` */
  get complexScript() {
    return this._g("w:cs");
  }
  set complexScript(v) {
    this._s("w:cs", v);
  }
  /** ASCII Theme Font. Serialized as `w:asciiTheme` */
  get asciiTheme() {
    return this._g("w:asciiTheme");
  }
  set asciiTheme(v) {
    this._s("w:asciiTheme", v);
  }
  /** High ANSI Theme Font. Serialized as `w:hAnsiTheme` */
  get highAnsiTheme() {
    return this._g("w:hAnsiTheme");
  }
  set highAnsiTheme(v) {
    this._s("w:hAnsiTheme", v);
  }
  /** East Asian Theme Font. Serialized as `w:eastAsiaTheme` */
  get eastAsiaTheme() {
    return this._g("w:eastAsiaTheme");
  }
  set eastAsiaTheme(v) {
    this._s("w:eastAsiaTheme", v);
  }
  /** Complex Script Theme Font. Serialized as `w:cstheme` */
  get complexScriptTheme() {
    return this._g("w:cstheme");
  }
  set complexScriptTheme(v) {
    this._s("w:cstheme", v);
  }
}
class String253Type extends OxmlLeafElement {
  static _A = ["w:val"];
  /** val. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class DefaultTableStyle extends String253Type {
  static _Q = "w:defaultTableStyle";
}
class ClickAndTypeStyle extends String253Type {
  static _Q = "w:clickAndTypeStyle";
}
class LinkedStyle extends String253Type {
  static _Q = "w:link";
}
class NextParagraphStyle extends String253Type {
  static _Q = "w:next";
}
class BasedOn extends String253Type {
  static _Q = "w:basedOn";
}
class Aliases extends String253Type {
  static _Q = "w:aliases";
}
class NumberingStyleLink extends String253Type {
  static _Q = "w:numStyleLink";
}
class StyleLink extends String253Type {
  static _Q = "w:styleLink";
}
class AbstractNumDefinitionName extends String253Type {
  static _Q = "w:name";
}
class ParagraphStyleIdInLevel extends String253Type {
  static _Q = "w:pStyle";
}
class TableStyle extends String253Type {
  static _Q = "w:tblStyle";
}
class RunStyle extends String253Type {
  static _Q = "w:rStyle";
}
class PositionalTab extends OxmlLeafElement {
  static _Q = "w:ptab";
  static _A = ["w:alignment", "w:relativeTo", "w:leader"];
  /** Positional Tab Stop Alignment. Serialized as `w:alignment` */
  get alignment() {
    return this._g("w:alignment");
  }
  set alignment(v) {
    this._s("w:alignment", v);
  }
  /** Positional Tab Base. Serialized as `w:relativeTo` */
  get relativeTo() {
    return this._g("w:relativeTo");
  }
  set relativeTo(v) {
    this._s("w:relativeTo", v);
  }
  /** Tab Leader Character. Serialized as `w:leader` */
  get leader() {
    return this._g("w:leader");
  }
  set leader(v) {
    this._s("w:leader", v);
  }
}
class Drawing extends OxmlCompositeElement {
  static _Q = "w:drawing";
  /** Drawing Element Anchor. */
  get anchor() {
    return this._f(WpAnchor);
  }
  /** Inline Drawing Object. */
  get inline() {
    return this._f(WpInline);
  }
}
class FootnoteEndnoteReferenceType extends OxmlLeafElement {
  static _A = ["w:customMarkFollows", "w:id"];
  /** Suppress Footnote/Endnote Reference Mark. Serialized as `w:customMarkFollows` */
  get customMarkFollows() {
    return this._g("w:customMarkFollows");
  }
  set customMarkFollows(v) {
    this._s("w:customMarkFollows", v);
  }
  /** Footnote/Endnote ID Reference. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class EndnoteReference extends FootnoteEndnoteReferenceType {
  static _Q = "w:endnoteReference";
}
class FootnoteReference extends FootnoteEndnoteReferenceType {
  static _Q = "w:footnoteReference";
}
class Ruby extends OxmlCompositeElement {
  static _Q = "w:ruby";
  /** Phonetic Guide Properties. */
  get rubyProperties() {
    return this._f(RubyProperties);
  }
  /** Phonetic Guide Text. */
  get rubyContent() {
    return this._f(RubyContent);
  }
  /** Phonetic Guide Base Text. */
  get rubyBase() {
    return this._f(RubyBase);
  }
}
class FieldChar extends OxmlCompositeElement {
  static _Q = "w:fldChar";
  static _A = ["w:fldCharType", "w:fldLock", "w:dirty"];
  /** Field Character Type. Serialized as `w:fldCharType` */
  get fieldCharType() {
    return this._g("w:fldCharType");
  }
  set fieldCharType(v) {
    this._s("w:fldCharType", v);
  }
  /** Field Should Not Be Recalculated. Serialized as `w:fldLock` */
  get fieldLock() {
    return this._g("w:fldLock");
  }
  set fieldLock(v) {
    this._s("w:fldLock", v);
  }
  /** Field Result Invalidated. Serialized as `w:dirty` */
  get dirty() {
    return this._g("w:dirty");
  }
  set dirty(v) {
    this._s("w:dirty", v);
  }
  /** Custom Field Data. */
  get fieldData() {
    return this._f(FieldData);
  }
  /** Form Field Properties. */
  get formFieldData() {
    return this._f(FormFieldData);
  }
  /** Previous Numbering Field Properties. */
  get numberingChange() {
    return this._f(NumberingChange);
  }
}
class Picture extends OxmlCompositeElement {
  static _Q = "w:pict";
  static _A = ["w14:anchorId"];
  /** anchorId. Serialized as `w14:anchorId` */
  get anchorId() {
    return this._g("w14:anchorId");
  }
  set anchorId(v) {
    this._s("w14:anchorId", v);
  }
}
class EmbeddedObject extends OxmlCompositeElement {
  static _Q = "w:object";
  static _A = ["w:dxaOrig", "w:dyaOrig", "w14:anchorId"];
  /** dxaOrig. Serialized as `w:dxaOrig` */
  get dxaOriginal() {
    return this._g("w:dxaOrig");
  }
  set dxaOriginal(v) {
    this._s("w:dxaOrig", v);
  }
  /** dyaOrig. Serialized as `w:dyaOrig` */
  get dyaOriginal() {
    return this._g("w:dyaOrig");
  }
  set dyaOriginal(v) {
    this._s("w:dyaOrig", v);
  }
  /** anchorId. Serialized as `w14:anchorId` */
  get anchorId() {
    return this._g("w14:anchorId");
  }
  set anchorId(v) {
    this._s("w14:anchorId", v);
  }
}
class SymbolChar extends OxmlLeafElement {
  static _Q = "w:sym";
  static _A = ["w:font", "w:char"];
  /** Symbol Character Font. Serialized as `w:font` */
  get font() {
    return this._g("w:font");
  }
  set font(v) {
    this._s("w:font", v);
  }
  /** Symbol Character Code. Serialized as `w:char` */
  get char() {
    return this._g("w:char");
  }
  set char(v) {
    this._s("w:char", v);
  }
}
class EmptyType extends OxmlLeafElement {
}
class ForceUpgrade extends EmptyType {
  static _Q = "w:forceUpgrade";
}
class SdtContentBibliography extends EmptyType {
  static _Q = "w:bibliography";
}
class SdtContentGroup extends EmptyType {
  static _Q = "w:group";
}
class SdtContentCitation extends EmptyType {
  static _Q = "w:citation";
}
class SdtContentRichText extends EmptyType {
  static _Q = "w:richText";
}
class SdtContentPicture extends EmptyType {
  static _Q = "w:picture";
}
class SdtContentEquation extends EmptyType {
  static _Q = "w:equation";
}
class LastRenderedPageBreak extends EmptyType {
  static _Q = "w:lastRenderedPageBreak";
}
class TabChar extends EmptyType {
  static _Q = "w:tab";
}
class CarriageReturn extends EmptyType {
  static _Q = "w:cr";
}
class PageNumber extends EmptyType {
  static _Q = "w:pgNum";
}
class ContinuationSeparatorMark extends EmptyType {
  static _Q = "w:continuationSeparator";
}
class SeparatorMark extends EmptyType {
  static _Q = "w:separator";
}
class EndnoteReferenceMark extends EmptyType {
  static _Q = "w:endnoteRef";
}
class FootnoteReferenceMark extends EmptyType {
  static _Q = "w:footnoteRef";
}
class AnnotationReferenceMark extends EmptyType {
  static _Q = "w:annotationRef";
}
class YearLong extends EmptyType {
  static _Q = "w:yearLong";
}
class MonthLong extends EmptyType {
  static _Q = "w:monthLong";
}
class DayLong extends EmptyType {
  static _Q = "w:dayLong";
}
class YearShort extends EmptyType {
  static _Q = "w:yearShort";
}
class MonthShort extends EmptyType {
  static _Q = "w:monthShort";
}
class DayShort extends EmptyType {
  static _Q = "w:dayShort";
}
class SoftHyphen extends EmptyType {
  static _Q = "w:softHyphen";
}
class NoBreakHyphen extends EmptyType {
  static _Q = "w:noBreakHyphen";
}
class TextType extends OxmlLeafTextElement {
  static _A = ["xml:space"];
  /** space. Serialized as `xml:space` */
  get space() {
    return this._g("xml:space");
  }
  set space(v) {
    this._s("xml:space", v);
  }
}
class DeletedFieldCode extends TextType {
  static _Q = "w:delInstrText";
}
class FieldCode extends TextType {
  static _Q = "w:instrText";
}
class DeletedText extends TextType {
  static _Q = "w:delText";
}
class Text extends TextType {
  static _Q = "w:t";
}
class Break extends OxmlLeafElement {
  static _Q = "w:br";
  static _A = ["w:type", "w:clear"];
  /** Break Type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Restart Location For Text Wrapping Break. Serialized as `w:clear` */
  get clear() {
    return this._g("w:clear");
  }
  set clear(v) {
    this._s("w:clear", v);
  }
}
class HeaderFooterReferenceType extends OxmlLeafElement {
  static _A = ["w:type", "r:id"];
  /** type. Serialized as `w:type` */
  get type() {
    return this._g("w:type");
  }
  set type(v) {
    this._s("w:type", v);
  }
  /** Relationship to Part. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class FooterReference extends HeaderFooterReferenceType {
  static _Q = "w:footerReference";
}
class HeaderReference extends HeaderFooterReferenceType {
  static _Q = "w:headerReference";
}
class ParagraphPropertiesChange extends OxmlCompositeElement {
  static _Q = "w:pPrChange";
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
  /** Previous Paragraph Properties. */
  get paragraphPropertiesExtended() {
    return this._f(ParagraphPropertiesExtended);
  }
}
class DecimalNumberType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** Decimal Number Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class PixelsPerInch extends DecimalNumberType {
  static _Q = "w:pixelsPerInch";
}
class SdtId extends DecimalNumberType {
  static _Q = "w:id";
}
class NumberingIdMacAtCleanup extends DecimalNumberType {
  static _Q = "w:numIdMacAtCleanup";
}
class StartOverrideNumberingValue extends DecimalNumberType {
  static _Q = "w:startOverride";
}
class LevelPictureBulletId extends DecimalNumberType {
  static _Q = "w:lvlPicBulletId";
}
class LevelRestart extends DecimalNumberType {
  static _Q = "w:lvlRestart";
}
class CheckErrors extends DecimalNumberType {
  static _Q = "w:checkErrors";
}
class ActiveRecord extends DecimalNumberType {
  static _Q = "w:activeRecord";
}
class DropDownListSelection extends DecimalNumberType {
  static _Q = "w:result";
}
class GridAfter extends DecimalNumberType {
  static _Q = "w:gridAfter";
}
class GridBefore extends DecimalNumberType {
  static _Q = "w:gridBefore";
}
class GridSpan extends DecimalNumberType {
  static _Q = "w:gridSpan";
}
class OutlineLevel extends DecimalNumberType {
  static _Q = "w:outlineLvl";
}
class TextBoxTightWrap extends OxmlLeafElement {
  static _Q = "w:textboxTightWrap";
  static _A = ["w:val"];
  /** Lines to Tight Wrap to Paragraph Extents. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TextAlignment extends OxmlLeafElement {
  static _Q = "w:textAlignment";
  static _A = ["w:val"];
  /** Vertical Character Alignment Position. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class TextDirection extends OxmlLeafElement {
  static _Q = "w:textDirection";
  static _A = ["w:val"];
  /** Direction of Text Flow. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Justification extends OxmlLeafElement {
  static _Q = "w:jc";
  static _A = ["w:val"];
  /** Alignment Type. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class Indentation extends OxmlLeafElement {
  static _Q = "w:ind";
  static _A = ["w:left", "w:start", "w:leftChars", "w:startChars", "w:right", "w:end", "w:rightChars", "w:endChars", "w:hanging", "w:hangingChars", "w:firstLine", "w:firstLineChars"];
  /** Left Indentation. Serialized as `w:left` */
  get left() {
    return this._g("w:left");
  }
  set left(v) {
    this._s("w:left", v);
  }
  /** start. Serialized as `w:start` */
  get start() {
    return this._g("w:start");
  }
  set start(v) {
    this._s("w:start", v);
  }
  /** Left Indentation in Character Units. Serialized as `w:leftChars` */
  get leftChars() {
    return this._g("w:leftChars");
  }
  set leftChars(v) {
    this._s("w:leftChars", v);
  }
  /** startChars. Serialized as `w:startChars` */
  get startCharacters() {
    return this._g("w:startChars");
  }
  set startCharacters(v) {
    this._s("w:startChars", v);
  }
  /** Right Indentation. Serialized as `w:right` */
  get right() {
    return this._g("w:right");
  }
  set right(v) {
    this._s("w:right", v);
  }
  /** end. Serialized as `w:end` */
  get end() {
    return this._g("w:end");
  }
  set end(v) {
    this._s("w:end", v);
  }
  /** Right Indentation in Character Units. Serialized as `w:rightChars` */
  get rightChars() {
    return this._g("w:rightChars");
  }
  set rightChars(v) {
    this._s("w:rightChars", v);
  }
  /** endChars. Serialized as `w:endChars` */
  get endCharacters() {
    return this._g("w:endChars");
  }
  set endCharacters(v) {
    this._s("w:endChars", v);
  }
  /** Indentation Removed from First Line. Serialized as `w:hanging` */
  get hanging() {
    return this._g("w:hanging");
  }
  set hanging(v) {
    this._s("w:hanging", v);
  }
  /** Indentation Removed From First Line in Character Units. Serialized as `w:hangingChars` */
  get hangingChars() {
    return this._g("w:hangingChars");
  }
  set hangingChars(v) {
    this._s("w:hangingChars", v);
  }
  /** Additional First Line Indentation. Serialized as `w:firstLine` */
  get firstLine() {
    return this._g("w:firstLine");
  }
  set firstLine(v) {
    this._s("w:firstLine", v);
  }
  /** Additional First Line Indentation in Character Units. Serialized as `w:firstLineChars` */
  get firstLineChars() {
    return this._g("w:firstLineChars");
  }
  set firstLineChars(v) {
    this._s("w:firstLineChars", v);
  }
}
class SpacingBetweenLines extends OxmlLeafElement {
  static _Q = "w:spacing";
  static _A = ["w:before", "w:beforeLines", "w:beforeAutospacing", "w:after", "w:afterLines", "w:afterAutospacing", "w:line", "w:lineRule"];
  /** Spacing Above Paragraph. Serialized as `w:before` */
  get before() {
    return this._g("w:before");
  }
  set before(v) {
    this._s("w:before", v);
  }
  /** Spacing Above Paragraph IN Line Units. Serialized as `w:beforeLines` */
  get beforeLines() {
    return this._g("w:beforeLines");
  }
  set beforeLines(v) {
    this._s("w:beforeLines", v);
  }
  /** Automatically Determine Spacing Above Paragraph. Serialized as `w:beforeAutospacing` */
  get beforeAutoSpacing() {
    return this._g("w:beforeAutospacing");
  }
  set beforeAutoSpacing(v) {
    this._s("w:beforeAutospacing", v);
  }
  /** Spacing Below Paragraph. Serialized as `w:after` */
  get after() {
    return this._g("w:after");
  }
  set after(v) {
    this._s("w:after", v);
  }
  /** Spacing Below Paragraph in Line Units. Serialized as `w:afterLines` */
  get afterLines() {
    return this._g("w:afterLines");
  }
  set afterLines(v) {
    this._s("w:afterLines", v);
  }
  /** Automatically Determine Spacing Below Paragraph. Serialized as `w:afterAutospacing` */
  get afterAutoSpacing() {
    return this._g("w:afterAutospacing");
  }
  set afterAutoSpacing(v) {
    this._s("w:afterAutospacing", v);
  }
  /** Spacing Between Lines in Paragraph. Serialized as `w:line` */
  get line() {
    return this._g("w:line");
  }
  set line(v) {
    this._s("w:line", v);
  }
  /** Type of Spacing Between Lines. Serialized as `w:lineRule` */
  get lineRule() {
    return this._g("w:lineRule");
  }
  set lineRule(v) {
    this._s("w:lineRule", v);
  }
}
class Tabs extends OxmlCompositeElement {
  static _Q = "w:tabs";
}
class Shading extends OxmlLeafElement {
  static _Q = "w:shd";
  static _A = ["w:val", "w:color", "w:themeColor", "w:themeTint", "w:themeShade", "w:fill", "w:themeFill", "w:themeFillTint", "w:themeFillShade"];
  /** Shading Pattern. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
  /** Shading Pattern Color. Serialized as `w:color` */
  get color() {
    return this._g("w:color");
  }
  set color(v) {
    this._s("w:color", v);
  }
  /** Shading Pattern Theme Color. Serialized as `w:themeColor` */
  get themeColor() {
    return this._g("w:themeColor");
  }
  set themeColor(v) {
    this._s("w:themeColor", v);
  }
  /** Shading Pattern Theme Color Tint. Serialized as `w:themeTint` */
  get themeTint() {
    return this._g("w:themeTint");
  }
  set themeTint(v) {
    this._s("w:themeTint", v);
  }
  /** Shading Pattern Theme Color Shade. Serialized as `w:themeShade` */
  get themeShade() {
    return this._g("w:themeShade");
  }
  set themeShade(v) {
    this._s("w:themeShade", v);
  }
  /** Shading Background Color. Serialized as `w:fill` */
  get fill() {
    return this._g("w:fill");
  }
  set fill(v) {
    this._s("w:fill", v);
  }
  /** Shading Background Theme Color. Serialized as `w:themeFill` */
  get themeFill() {
    return this._g("w:themeFill");
  }
  set themeFill(v) {
    this._s("w:themeFill", v);
  }
  /** Shading Background Theme Color Tint. Serialized as `w:themeFillTint` */
  get themeFillTint() {
    return this._g("w:themeFillTint");
  }
  set themeFillTint(v) {
    this._s("w:themeFillTint", v);
  }
  /** Shading Background Theme Color Shade. Serialized as `w:themeFillShade` */
  get themeFillShade() {
    return this._g("w:themeFillShade");
  }
  set themeFillShade(v) {
    this._s("w:themeFillShade", v);
  }
}
class ParagraphBorders extends OxmlCompositeElement {
  static _Q = "w:pBdr";
  /** Paragraph Border Above Identical Paragraphs. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Left Paragraph Border. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Paragraph Border Between Identical Paragraphs. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Right Paragraph Border. */
  get rightBorder() {
    return this._f(RightBorder);
  }
  /** Paragraph Border Between Identical Paragraphs. */
  get betweenBorder() {
    return this._f(BetweenBorder);
  }
  /** Paragraph Border Between Facing Pages. */
  get barBorder() {
    return this._f(BarBorder);
  }
}
class NumberingProperties extends OxmlCompositeElement {
  static _Q = "w:numPr";
  /** Numbering Level Reference. */
  get numberingLevelReference() {
    return this._f(NumberingLevelReference);
  }
  /** Numbering Definition Instance Reference. */
  get numberingId() {
    return this._f(NumberingId);
  }
  /** Previous Paragraph Numbering Properties. */
  get numberingChange() {
    return this._f(NumberingChange);
  }
  /** Inserted Numbering Properties. */
  get inserted() {
    return this._f(Inserted);
  }
}
class FrameProperties extends OxmlLeafElement {
  static _Q = "w:framePr";
  static _A = ["w:dropCap", "w:lines", "w:w", "w:h", "w:vSpace", "w:hSpace", "w:wrap", "w:hAnchor", "w:vAnchor", "w:x", "w:xAlign", "w:y", "w:yAlign", "w:hRule", "w:anchorLock"];
  /** Drop Cap Frame. Serialized as `w:dropCap` */
  get dropCap() {
    return this._g("w:dropCap");
  }
  set dropCap(v) {
    this._s("w:dropCap", v);
  }
  /** Drop Cap Vertical Height in Lines. Serialized as `w:lines` */
  get lines() {
    return this._g("w:lines");
  }
  set lines(v) {
    this._s("w:lines", v);
  }
  /** Frame Width. Serialized as `w:w` */
  get width() {
    return this._g("w:w");
  }
  set width(v) {
    this._s("w:w", v);
  }
  /** Frame Height. Serialized as `w:h` */
  get height() {
    return this._g("w:h");
  }
  set height(v) {
    this._s("w:h", v);
  }
  /** Vertical Frame Padding. Serialized as `w:vSpace` */
  get verticalSpace() {
    return this._g("w:vSpace");
  }
  set verticalSpace(v) {
    this._s("w:vSpace", v);
  }
  /** Horizontal Frame Padding. Serialized as `w:hSpace` */
  get horizontalSpace() {
    return this._g("w:hSpace");
  }
  set horizontalSpace(v) {
    this._s("w:hSpace", v);
  }
  /** Text Wrapping Around Frame. Serialized as `w:wrap` */
  get wrap() {
    return this._g("w:wrap");
  }
  set wrap(v) {
    this._s("w:wrap", v);
  }
  /** Frame Horizontal Positioning Base. Serialized as `w:hAnchor` */
  get horizontalPosition() {
    return this._g("w:hAnchor");
  }
  set horizontalPosition(v) {
    this._s("w:hAnchor", v);
  }
  /** Frame Vertical Positioning Base. Serialized as `w:vAnchor` */
  get verticalPosition() {
    return this._g("w:vAnchor");
  }
  set verticalPosition(v) {
    this._s("w:vAnchor", v);
  }
  /** Absolute Horizontal Position. Serialized as `w:x` */
  get x() {
    return this._g("w:x");
  }
  set x(v) {
    this._s("w:x", v);
  }
  /** Relative Horizontal Position. Serialized as `w:xAlign` */
  get xAlign() {
    return this._g("w:xAlign");
  }
  set xAlign(v) {
    this._s("w:xAlign", v);
  }
  /** Absolute Vertical Position. Serialized as `w:y` */
  get y() {
    return this._g("w:y");
  }
  set y(v) {
    this._s("w:y", v);
  }
  /** Relative Vertical Position. Serialized as `w:yAlign` */
  get yAlign() {
    return this._g("w:yAlign");
  }
  set yAlign(v) {
    this._s("w:yAlign", v);
  }
  /** Frame Height Type. Serialized as `w:hRule` */
  get heightType() {
    return this._g("w:hRule");
  }
  set heightType(v) {
    this._s("w:hRule", v);
  }
  /** Lock Frame Anchor to Paragraph. Serialized as `w:anchorLock` */
  get anchorLock() {
    return this._g("w:anchorLock");
  }
  set anchorLock(v) {
    this._s("w:anchorLock", v);
  }
}
class OnOffType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** On/Off Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class NotTrueType extends OnOffType {
  static _Q = "w:notTrueType";
}
class DoNotUseLongFileNames extends OnOffType {
  static _Q = "w:doNotUseLongFileNames";
}
class DoNotOrganizeInFolder extends OnOffType {
  static _Q = "w:doNotOrganizeInFolder";
}
class DoNotSaveAsSingleFile extends OnOffType {
  static _Q = "w:doNotSaveAsSingleFile";
}
class DoNotRelyOnCSS extends OnOffType {
  static _Q = "w:doNotRelyOnCSS";
}
class AllowPNG extends OnOffType {
  static _Q = "w:allowPNG";
}
class RelyOnVML extends OnOffType {
  static _Q = "w:relyOnVML";
}
class OptimizeForBrowser extends OnOffType {
  static _Q = "w:optimizeForBrowser";
}
class DoNotAutoCompressPictures extends OnOffType {
  static _Q = "w:doNotAutoCompressPictures";
}
class DoNotIncludeSubdocsInStats extends OnOffType {
  static _Q = "w:doNotIncludeSubdocsInStats";
}
class UICompatibleWith97To2003 extends OnOffType {
  static _Q = "w:uiCompat97To2003";
}
class UpdateFieldsOnOpen extends OnOffType {
  static _Q = "w:updateFields";
}
class AlwaysMergeEmptyNamespace extends OnOffType {
  static _Q = "w:alwaysMergeEmptyNamespace";
}
class ShowXmlTags extends OnOffType {
  static _Q = "w:showXMLTags";
}
class UseXsltWhenSaving extends OnOffType {
  static _Q = "w:useXSLTWhenSaving";
}
class SaveXmlDataOnly extends OnOffType {
  static _Q = "w:saveXmlDataOnly";
}
class DoNotDemarcateInvalidXml extends OnOffType {
  static _Q = "w:doNotDemarcateInvalidXml";
}
class AlwaysShowPlaceholderText extends OnOffType {
  static _Q = "w:alwaysShowPlaceholderText";
}
class IgnoreMixedContent extends OnOffType {
  static _Q = "w:ignoreMixedContent";
}
class SaveInvalidXml extends OnOffType {
  static _Q = "w:saveInvalidXml";
}
class DoNotValidateAgainstSchema extends OnOffType {
  static _Q = "w:doNotValidateAgainstSchema";
}
class SavePreviewPicture extends OnOffType {
  static _Q = "w:savePreviewPicture";
}
class StrictFirstAndLastChars extends OnOffType {
  static _Q = "w:strictFirstAndLastChars";
}
class PrintTwoOnOne extends OnOffType {
  static _Q = "w:printTwoOnOne";
}
class NoPunctuationKerning extends OnOffType {
  static _Q = "w:noPunctuationKerning";
}
class DoNotShadeFormData extends OnOffType {
  static _Q = "w:doNotShadeFormData";
}
class DoNotUseMarginsForDrawingGridOrigin extends OnOffType {
  static _Q = "w:doNotUseMarginsForDrawingGridOrigin";
}
class BookFoldPrinting extends OnOffType {
  static _Q = "w:bookFoldPrinting";
}
class BookFoldReversePrinting extends OnOffType {
  static _Q = "w:bookFoldRevPrinting";
}
class EvenAndOddHeaders extends OnOffType {
  static _Q = "w:evenAndOddHeaders";
}
class ShowEnvelope extends OnOffType {
  static _Q = "w:showEnvelope";
}
class DoNotHyphenateCaps extends OnOffType {
  static _Q = "w:doNotHyphenateCaps";
}
class AutoHyphenation extends OnOffType {
  static _Q = "w:autoHyphenation";
}
class StyleLockStylesPart extends OnOffType {
  static _Q = "w:styleLockQFSet";
}
class StyleLockThemesPart extends OnOffType {
  static _Q = "w:styleLockTheme";
}
class AutoFormatOverride extends OnOffType {
  static _Q = "w:autoFormatOverride";
}
class DoNotTrackFormatting extends OnOffType {
  static _Q = "w:doNotTrackFormatting";
}
class DoNotTrackMoves extends OnOffType {
  static _Q = "w:doNotTrackMoves";
}
class TrackRevisions extends OnOffType {
  static _Q = "w:trackRevisions";
}
class LinkStyles extends OnOffType {
  static _Q = "w:linkStyles";
}
class FormsDesign extends OnOffType {
  static _Q = "w:formsDesign";
}
class HideGrammaticalErrors extends OnOffType {
  static _Q = "w:hideGrammaticalErrors";
}
class HideSpellingErrors extends OnOffType {
  static _Q = "w:hideSpellingErrors";
}
class GutterAtTop extends OnOffType {
  static _Q = "w:gutterAtTop";
}
class BordersDoNotSurroundFooter extends OnOffType {
  static _Q = "w:bordersDoNotSurroundFooter";
}
class BordersDoNotSurroundHeader extends OnOffType {
  static _Q = "w:bordersDoNotSurroundHeader";
}
class AlignBorderAndEdges extends OnOffType {
  static _Q = "w:alignBordersAndEdges";
}
class MirrorMargins extends OnOffType {
  static _Q = "w:mirrorMargins";
}
class SaveFormsData extends OnOffType {
  static _Q = "w:saveFormsData";
}
class SaveSubsetFonts extends OnOffType {
  static _Q = "w:saveSubsetFonts";
}
class EmbedSystemFonts extends OnOffType {
  static _Q = "w:embedSystemFonts";
}
class EmbedTrueTypeFonts extends OnOffType {
  static _Q = "w:embedTrueTypeFonts";
}
class PrintFormsData extends OnOffType {
  static _Q = "w:printFormsData";
}
class PrintFractionalCharacterWidth extends OnOffType {
  static _Q = "w:printFractionalCharacterWidth";
}
class PrintPostScriptOverText extends OnOffType {
  static _Q = "w:printPostScriptOverText";
}
class DisplayBackgroundShape extends OnOffType {
  static _Q = "w:displayBackgroundShape";
}
class DoNotDisplayPageBoundaries extends OnOffType {
  static _Q = "w:doNotDisplayPageBoundaries";
}
class RemoveDateAndTime extends OnOffType {
  static _Q = "w:removeDateAndTime";
}
class RemovePersonalInformation extends OnOffType {
  static _Q = "w:removePersonalInformation";
}
class TemporarySdt extends OnOffType {
  static _Q = "w:temporary";
}
class ShowingPlaceholder extends OnOffType {
  static _Q = "w:showingPlcHdr";
}
class CachedColumnBalance extends OnOffType {
  static _Q = "w:cachedColBalance";
}
class UseAnsiKerningPairs extends OnOffType {
  static _Q = "w:useAnsiKerningPairs";
}
class DoNotVerticallyAlignInTextBox extends OnOffType {
  static _Q = "w:doNotVertAlignInTxbx";
}
class DoNotBreakConstrainedForcedTable extends OnOffType {
  static _Q = "w:doNotBreakConstrainedForcedTable";
}
class DoNotVerticallyAlignCellWithShape extends OnOffType {
  static _Q = "w:doNotVertAlignCellWithSp";
}
class SplitPageBreakAndParagraphMark extends OnOffType {
  static _Q = "w:splitPgBreakAndParaMark";
}
class DisplayHangulFixedWidth extends OnOffType {
  static _Q = "w:displayHangulFixedWidth";
}
class UnderlineTabInNumberingList extends OnOffType {
  static _Q = "w:underlineTabInNumList";
}
class AutofitToFirstFixedWidthCell extends OnOffType {
  static _Q = "w:autofitToFirstFixedWidthCell";
}
class DoNotAutofitConstrainedTables extends OnOffType {
  static _Q = "w:doNotAutofitConstrainedTables";
}
class DoNotSuppressIndentation extends OnOffType {
  static _Q = "w:doNotSuppressIndentation";
}
class AllowSpaceOfSameStyleInTable extends OnOffType {
  static _Q = "w:allowSpaceOfSameStyleInTable";
}
class UseAltKinsokuLineBreakRules extends OnOffType {
  static _Q = "w:useAltKinsokuLineBreakRules";
}
class DoNotUseIndentAsNumberingTabStop extends OnOffType {
  static _Q = "w:doNotUseIndentAsNumberingTabStop";
}
class UseNormalStyleForList extends OnOffType {
  static _Q = "w:useNormalStyleForList";
}
class UseFarEastLayout extends OnOffType {
  static _Q = "w:useFELayout";
}
class GrowAutofit extends OnOffType {
  static _Q = "w:growAutofit";
}
class UseWord2002TableStyleRules extends OnOffType {
  static _Q = "w:useWord2002TableStyleRules";
}
class DoNotUseEastAsianBreakRules extends OnOffType {
  static _Q = "w:doNotUseEastAsianBreakRules";
}
class DoNotWrapTextWithPunctuation extends OnOffType {
  static _Q = "w:doNotWrapTextWithPunct";
}
class ApplyBreakingRules extends OnOffType {
  static _Q = "w:applyBreakingRules";
}
class SelectFieldWithFirstOrLastChar extends OnOffType {
  static _Q = "w:selectFldWithFirstOrLastChar";
}
class DoNotSnapToGridInCell extends OnOffType {
  static _Q = "w:doNotSnapToGridInCell";
}
class DoNotBreakWrappedTables extends OnOffType {
  static _Q = "w:doNotBreakWrappedTables";
}
class UseWord97LineBreakRules extends OnOffType {
  static _Q = "w:useWord97LineBreakRules";
}
class LayoutTableRowsApart extends OnOffType {
  static _Q = "w:layoutTableRowsApart";
}
class LayoutRawTableWidth extends OnOffType {
  static _Q = "w:layoutRawTableWidth";
}
class DoNotUseHTMLParagraphAutoSpacing extends OnOffType {
  static _Q = "w:doNotUseHTMLParagraphAutoSpacing";
}
class NoSpaceRaiseLower extends OnOffType {
  static _Q = "w:noSpaceRaiseLower";
}
class AutoSpaceLikeWord95 extends OnOffType {
  static _Q = "w:autoSpaceLikeWord95";
}
class AdjustLineHeightInTable extends OnOffType {
  static _Q = "w:adjustLineHeightInTable";
}
class ForgetLastTabAlignment extends OnOffType {
  static _Q = "w:forgetLastTabAlignment";
}
class AlignTablesRowByRow extends OnOffType {
  static _Q = "w:alignTablesRowByRow";
}
class ShapeLayoutLikeWord8 extends OnOffType {
  static _Q = "w:shapeLayoutLikeWW8";
}
class FootnoteLayoutLikeWord8 extends OnOffType {
  static _Q = "w:footnoteLayoutLikeWW8";
}
class WrapTrailSpaces extends OnOffType {
  static _Q = "w:wrapTrailSpaces";
}
class DoNotSuppressParagraphBorders extends OnOffType {
  static _Q = "w:doNotSuppressParagraphBorders";
}
class UsePrinterMetrics extends OnOffType {
  static _Q = "w:usePrinterMetrics";
}
class MacWordSmallCaps extends OnOffType {
  static _Q = "w:mwSmallCaps";
}
class TruncateFontHeightsLikeWordPerfect extends OnOffType {
  static _Q = "w:truncateFontHeightsLikeWP6";
}
class ConvertMailMergeEscape extends OnOffType {
  static _Q = "w:convMailMergeEsc";
}
class SwapBordersFacingPages extends OnOffType {
  static _Q = "w:swapBordersFacingPages";
}
class SuppressSpacingBeforeAfterPageBreak extends OnOffType {
  static _Q = "w:suppressSpBfAfterPgBrk";
}
class SuppressTopSpacingWordPerfect extends OnOffType {
  static _Q = "w:suppressTopSpacingWP";
}
class SuppressSpacingAtTopOfPage extends OnOffType {
  static _Q = "w:suppressSpacingAtTopOfPage";
}
class SuppressTopSpacing extends OnOffType {
  static _Q = "w:suppressTopSpacing";
}
class SuppressBottomSpacing extends OnOffType {
  static _Q = "w:suppressBottomSpacing";
}
class SubFontBySize extends OnOffType {
  static _Q = "w:subFontBySize";
}
class ShowBreaksInFrames extends OnOffType {
  static _Q = "w:showBreaksInFrames";
}
class WordPerfectSpaceWidth extends OnOffType {
  static _Q = "w:wpSpaceWidth";
}
class PrintColorBlackWhite extends OnOffType {
  static _Q = "w:printColBlack";
}
class PrintBodyTextBeforeHeader extends OnOffType {
  static _Q = "w:printBodyTextBeforeHeader";
}
class LineWrapLikeWord6 extends OnOffType {
  static _Q = "w:lineWrapLikeWord6";
}
class SpacingInWholePoints extends OnOffType {
  static _Q = "w:spacingInWholePoints";
}
class DoNotExpandShiftReturn extends OnOffType {
  static _Q = "w:doNotExpandShiftReturn";
}
class UnderlineTrailingSpaces extends OnOffType {
  static _Q = "w:ulTrailSpace";
}
class DoNotLeaveBackslashAlone extends OnOffType {
  static _Q = "w:doNotLeaveBackslashAlone";
}
class NoExtraLineSpacing extends OnOffType {
  static _Q = "w:noExtraLineSpacing";
}
class BalanceSingleByteDoubleByteWidth extends OnOffType {
  static _Q = "w:balanceSingleByteDoubleByteWidth";
}
class NoColumnBalance extends OnOffType {
  static _Q = "w:noColumnBalance";
}
class SpaceForUnderline extends OnOffType {
  static _Q = "w:spaceForUL";
}
class NoLeading extends OnOffType {
  static _Q = "w:noLeading";
}
class NoTabHangIndent extends OnOffType {
  static _Q = "w:noTabHangInd";
}
class WordPerfectJustification extends OnOffType {
  static _Q = "w:wpJustification";
}
class UseSingleBorderForContiguousCells extends OnOffType {
  static _Q = "w:useSingleBorderforContiguousCells";
}
class BodyDiv extends OnOffType {
  static _Q = "w:bodyDiv";
}
class BlockQuote extends OnOffType {
  static _Q = "w:blockQuote";
}
class IsLegalNumberingStyle extends OnOffType {
  static _Q = "w:isLgl";
}
class ViewMergedData extends OnOffType {
  static _Q = "w:viewMergedData";
}
class MailAsAttachment extends OnOffType {
  static _Q = "w:mailAsAttachment";
}
class DoNotSuppressBlankLines extends OnOffType {
  static _Q = "w:doNotSuppressBlankLines";
}
class LinkToQuery extends OnOffType {
  static _Q = "w:linkToQuery";
}
class FirstRowHeader extends OnOffType {
  static _Q = "w:fHdr";
}
class DynamicAddress extends OnOffType {
  static _Q = "w:dynamicAddress";
}
class Active extends OnOffType {
  static _Q = "w:active";
}
class DocPartUnique extends OnOffType {
  static _Q = "w:docPartUnique";
}
class Dirty extends OnOffType {
  static _Q = "w:dirty";
}
class MatchSource extends OnOffType {
  static _Q = "w:matchSrc";
}
class Checked extends OnOffType {
  static _Q = "w:checked";
}
class DefaultCheckBoxFormFieldState extends OnOffType {
  static _Q = "w:default";
}
class AutomaticallySizeFormField extends OnOffType {
  static _Q = "w:sizeAuto";
}
class CalculateOnExit extends OnOffType {
  static _Q = "w:calcOnExit";
}
class Enabled extends OnOffType {
  static _Q = "w:enabled";
}
class GutterOnRight extends OnOffType {
  static _Q = "w:rtlGutter";
}
class TitlePage extends OnOffType {
  static _Q = "w:titlePg";
}
class NoEndnote extends OnOffType {
  static _Q = "w:noEndnote";
}
class FormProtection extends OnOffType {
  static _Q = "w:formProt";
}
class Hidden extends OnOffType {
  static _Q = "w:hidden";
}
class OfficeMath extends OnOffType {
  static _Q = "w:oMath";
}
class SpecVanish extends OnOffType {
  static _Q = "w:specVanish";
}
class ComplexScript extends OnOffType {
  static _Q = "w:cs";
}
class RightToLeftText extends OnOffType {
  static _Q = "w:rtl";
}
class WebHidden extends OnOffType {
  static _Q = "w:webHidden";
}
class Vanish extends OnOffType {
  static _Q = "w:vanish";
}
class NoProof extends OnOffType {
  static _Q = "w:noProof";
}
class Imprint extends OnOffType {
  static _Q = "w:imprint";
}
class Emboss extends OnOffType {
  static _Q = "w:emboss";
}
class Shadow extends OnOffType {
  static _Q = "w:shadow";
}
class Outline extends OnOffType {
  static _Q = "w:outline";
}
class DoubleStrike extends OnOffType {
  static _Q = "w:dstrike";
}
class Strike extends OnOffType {
  static _Q = "w:strike";
}
class SmallCaps extends OnOffType {
  static _Q = "w:smallCaps";
}
class Caps extends OnOffType {
  static _Q = "w:caps";
}
class ItalicComplexScript extends OnOffType {
  static _Q = "w:iCs";
}
class Italic extends OnOffType {
  static _Q = "w:i";
}
class BoldComplexScript extends OnOffType {
  static _Q = "w:bCs";
}
class Bold extends OnOffType {
  static _Q = "w:b";
}
class SuppressOverlap extends OnOffType {
  static _Q = "w:suppressOverlap";
}
class MirrorIndents extends OnOffType {
  static _Q = "w:mirrorIndents";
}
class ContextualSpacing extends OnOffType {
  static _Q = "w:contextualSpacing";
}
class SnapToGrid extends OnOffType {
  static _Q = "w:snapToGrid";
}
class AdjustRightIndent extends OnOffType {
  static _Q = "w:adjustRightInd";
}
class BiDi extends OnOffType {
  static _Q = "w:bidi";
}
class AutoSpaceDN extends OnOffType {
  static _Q = "w:autoSpaceDN";
}
class AutoSpaceDE extends OnOffType {
  static _Q = "w:autoSpaceDE";
}
class TopLinePunctuation extends OnOffType {
  static _Q = "w:topLinePunct";
}
class OverflowPunctuation extends OnOffType {
  static _Q = "w:overflowPunct";
}
class WordWrap extends OnOffType {
  static _Q = "w:wordWrap";
}
class Kinsoku extends OnOffType {
  static _Q = "w:kinsoku";
}
class SuppressAutoHyphens extends OnOffType {
  static _Q = "w:suppressAutoHyphens";
}
class SuppressLineNumbers extends OnOffType {
  static _Q = "w:suppressLineNumbers";
}
class WidowControl extends OnOffType {
  static _Q = "w:widowControl";
}
class PageBreakBefore extends OnOffType {
  static _Q = "w:pageBreakBefore";
}
class KeepLines extends OnOffType {
  static _Q = "w:keepLines";
}
class KeepNext extends OnOffType {
  static _Q = "w:keepNext";
}
class StringType extends OxmlLeafElement {
  static _A = ["w:val"];
  /** String Value. Serialized as `w:val` */
  get val() {
    return this._g("w:val");
  }
  set val(v) {
    this._s("w:val", v);
  }
}
class AltName extends StringType {
  static _Q = "w:altName";
}
class WebPageEncoding extends StringType {
  static _Q = "w:encoding";
}
class ListSeparator extends StringType {
  static _Q = "w:listSeparator";
}
class DecimalSymbol extends StringType {
  static _Q = "w:decimalSymbol";
}
class AttachedSchema extends StringType {
  static _Q = "w:attachedSchema";
}
class Tag extends StringType {
  static _Q = "w:tag";
}
class SdtAlias extends StringType {
  static _Q = "w:alias";
}
class Description extends StringType {
  static _Q = "w:description";
}
class StyleId extends StringType {
  static _Q = "w:style";
}
class FrameSize extends StringType {
  static _Q = "w:sz";
}
class MailSubject extends StringType {
  static _Q = "w:mailSubject";
}
class AddressFieldName extends StringType {
  static _Q = "w:addressFieldName";
}
class Query extends StringType {
  static _Q = "w:query";
}
class ConnectString extends StringType {
  static _Q = "w:connectString";
}
class DataSourceTableName extends StringType {
  static _Q = "w:table";
}
class UdlConnectionString extends StringType {
  static _Q = "w:udl";
}
class MappedName extends StringType {
  static _Q = "w:mappedName";
}
class Name extends StringType {
  static _Q = "w:name";
}
class TableDescription extends StringType {
  static _Q = "w:tblDescription";
}
class TableCaption extends StringType {
  static _Q = "w:tblCaption";
}
class CustomXmlPlaceholder extends StringType {
  static _Q = "w:placeholder";
}
class DocPartReference extends StringType {
  static _Q = "w:docPart";
}
class DocPartCategory extends StringType {
  static _Q = "w:docPartCategory";
}
class DocPartGallery extends StringType {
  static _Q = "w:docPartGallery";
}
class DateFormat extends StringType {
  static _Q = "w:dateFormat";
}
class ParagraphStyleId extends StringType {
  static _Q = "w:pStyle";
}
class MarkupType extends OxmlLeafElement {
  static _A = ["w:id"];
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class CommentReference extends MarkupType {
  static _Q = "w:commentReference";
}
class CustomXmlMoveToRangeEnd extends MarkupType {
  static _Q = "w:customXmlMoveToRangeEnd";
}
class CustomXmlMoveFromRangeEnd extends MarkupType {
  static _Q = "w:customXmlMoveFromRangeEnd";
}
class CustomXmlDelRangeEnd extends MarkupType {
  static _Q = "w:customXmlDelRangeEnd";
}
class CustomXmlInsRangeEnd extends MarkupType {
  static _Q = "w:customXmlInsRangeEnd";
}
class MoveBookmarkType extends OxmlLeafElement {
  static _A = ["w:author", "w:date", "w:name", "w:colFirst", "w:colLast", "w:displacedByCustomXml", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** colFirst. Serialized as `w:colFirst` */
  get columnFirst() {
    return this._g("w:colFirst");
  }
  set columnFirst(v) {
    this._s("w:colFirst", v);
  }
  /** colLast. Serialized as `w:colLast` */
  get columnLast() {
    return this._g("w:colLast");
  }
  set columnLast(v) {
    this._s("w:colLast", v);
  }
  /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
  get displacedByCustomXml() {
    return this._g("w:displacedByCustomXml");
  }
  set displacedByCustomXml(v) {
    this._s("w:displacedByCustomXml", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class MoveToRangeStart extends MoveBookmarkType {
  static _Q = "w:moveToRangeStart";
}
class MoveFromRangeStart extends MoveBookmarkType {
  static _Q = "w:moveFromRangeStart";
}
class MarkupRangeType extends OxmlLeafElement {
  static _A = ["w:displacedByCustomXml", "w:id"];
  /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
  get displacedByCustomXml() {
    return this._g("w:displacedByCustomXml");
  }
  set displacedByCustomXml(v) {
    this._s("w:displacedByCustomXml", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class MoveToRangeEnd extends MarkupRangeType {
  static _Q = "w:moveToRangeEnd";
}
class MoveFromRangeEnd extends MarkupRangeType {
  static _Q = "w:moveFromRangeEnd";
}
class CommentRangeEnd extends MarkupRangeType {
  static _Q = "w:commentRangeEnd";
}
class CommentRangeStart extends MarkupRangeType {
  static _Q = "w:commentRangeStart";
}
class BookmarkEnd extends MarkupRangeType {
  static _Q = "w:bookmarkEnd";
}
class BookmarkStart extends OxmlLeafElement {
  static _Q = "w:bookmarkStart";
  static _A = ["w:name", "w:colFirst", "w:colLast", "w:displacedByCustomXml", "w:id"];
  /** name. Serialized as `w:name` */
  get name() {
    return this._g("w:name");
  }
  set name(v) {
    this._s("w:name", v);
  }
  /** colFirst. Serialized as `w:colFirst` */
  get columnFirst() {
    return this._g("w:colFirst");
  }
  set columnFirst(v) {
    this._s("w:colFirst", v);
  }
  /** colLast. Serialized as `w:colLast` */
  get columnLast() {
    return this._g("w:colLast");
  }
  set columnLast(v) {
    this._s("w:colLast", v);
  }
  /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
  get displacedByCustomXml() {
    return this._g("w:displacedByCustomXml");
  }
  set displacedByCustomXml(v) {
    this._s("w:displacedByCustomXml", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class CellMerge extends OxmlLeafElement {
  static _Q = "w:cellMerge";
  static _A = ["w:vMerge", "w:vMergeOrig", "w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** vMerge. Serialized as `w:vMerge` */
  get verticalMerge() {
    return this._g("w:vMerge");
  }
  set verticalMerge(v) {
    this._s("w:vMerge", v);
  }
  /** vMergeOrig. Serialized as `w:vMergeOrig` */
  get verticalMergeOriginal() {
    return this._g("w:vMergeOrig");
  }
  set verticalMergeOriginal(v) {
    this._s("w:vMergeOrig", v);
  }
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class TrackChangeType extends OxmlLeafElement {
  static _A = ["w:author", "w:date", "w16du:dateUtc", "w:id"];
  /** author. Serialized as `w:author` */
  get author() {
    return this._g("w:author");
  }
  set author(v) {
    this._s("w:author", v);
  }
  /** date. Serialized as `w:date` */
  get date() {
    return this._g("w:date");
  }
  set date(v) {
    this._s("w:date", v);
  }
  /** dateUtc. Serialized as `w16du:dateUtc` */
  get dateUtc() {
    return this._g("w16du:dateUtc");
  }
  set dateUtc(v) {
    this._s("w16du:dateUtc", v);
  }
  /** Annotation Identifier. Serialized as `w:id` */
  get id() {
    return this._g("w:id");
  }
  set id(v) {
    this._s("w:id", v);
  }
}
class MoveTo extends TrackChangeType {
  static _Q = "w:moveTo";
}
class MoveFrom extends TrackChangeType {
  static _Q = "w:moveFrom";
}
class Deleted extends TrackChangeType {
  static _Q = "w:del";
}
class Inserted extends TrackChangeType {
  static _Q = "w:ins";
}
class CustomXmlMoveToRangeStart extends TrackChangeType {
  static _Q = "w:customXmlMoveToRangeStart";
}
class CustomXmlMoveFromRangeStart extends TrackChangeType {
  static _Q = "w:customXmlMoveFromRangeStart";
}
class CustomXmlDelRangeStart extends TrackChangeType {
  static _Q = "w:customXmlDelRangeStart";
}
class CustomXmlInsRangeStart extends TrackChangeType {
  static _Q = "w:customXmlInsRangeStart";
}
class CellDeletion extends TrackChangeType {
  static _Q = "w:cellDel";
}
class CellInsertion extends TrackChangeType {
  static _Q = "w:cellIns";
}
function initWordprocessingNamespace() {
  LevelOverride._C = {
    "w:startOverride": StartOverrideNumberingValue,
    "w:lvl": Level
  };
  LevelOverride._D = {
    "w:ilvl": new OxmlAttr("w:ilvl", OxmlType.Int32Value)
  };
  FontRelationshipType._D = {
    "w:fontKey": new OxmlAttr("w:fontKey", OxmlType.StringValue),
    "w:subsetted": new OxmlAttr("w:subsetted", OxmlType.OnOffValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  FontSignature._D = {
    "w:usb0": new OxmlAttr("w:usb0", OxmlType.HexBinaryValue),
    "w:usb1": new OxmlAttr("w:usb1", OxmlType.HexBinaryValue),
    "w:usb2": new OxmlAttr("w:usb2", OxmlType.HexBinaryValue),
    "w:usb3": new OxmlAttr("w:usb3", OxmlType.HexBinaryValue),
    "w:csb0": new OxmlAttr("w:csb0", OxmlType.HexBinaryValue),
    "w:csb1": new OxmlAttr("w:csb1", OxmlType.HexBinaryValue)
  };
  Pitch._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, FontPitchValuesArray)
  };
  FontFamily._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, FontFamilyValuesArray)
  };
  FontCharSet._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:characterSet": new OxmlAttr("w:characterSet", OxmlType.EnumValue, StrictCharacterSetArray)
  };
  Panose1Number._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.HexBinaryValue)
  };
  PictureBulletBase._C = {
    "v:group": VGroup,
    "v:image": VImageFile,
    "v:line": VLine,
    "v:oval": VOval,
    "v:polyline": VPolyLine,
    "v:rect": VRectangle,
    "v:roundrect": VRoundRectangle,
    "v:shape": VShape,
    "v:shapetype": VShapetype
  };
  TargetScreenSize._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TargetScreenSizeValuesArray)
  };
  ReadModeInkLockDown._D = {
    "w:actualPg": new OxmlAttr("w:actualPg", OxmlType.OnOffValue),
    "w:w": new OxmlAttr("w:w", OxmlType.UInt32Value),
    "w:h": new OxmlAttr("w:h", OxmlType.UInt32Value),
    "w:fontSz": new OxmlAttr("w:fontSz", OxmlType.StringValue)
  };
  Captions._C = {
    "w:caption": Caption,
    "w:autoCaptions": AutoCaptions
  };
  ColorSchemeMapping._D = {
    "w:bg1": new OxmlAttr("w:bg1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:t1": new OxmlAttr("w:t1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:bg2": new OxmlAttr("w:bg2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:t2": new OxmlAttr("w:t2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:accent1": new OxmlAttr("w:accent1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:accent2": new OxmlAttr("w:accent2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:accent3": new OxmlAttr("w:accent3", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:accent4": new OxmlAttr("w:accent4", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:accent5": new OxmlAttr("w:accent5", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:accent6": new OxmlAttr("w:accent6", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:hyperlink": new OxmlAttr("w:hyperlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    "w:followedHyperlink": new OxmlAttr("w:followedHyperlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray)
  };
  Rsids._C = {
    "w:rsidRoot": RsidRoot,
    "w:rsid": Rsid
  };
  DocumentVariables._C = {
    "w:docVar": DocumentVariable
  };
  Compatibility._C = {
    "w:useSingleBorderforContiguousCells": UseSingleBorderForContiguousCells,
    "w:wpJustification": WordPerfectJustification,
    "w:noTabHangInd": NoTabHangIndent,
    "w:noLeading": NoLeading,
    "w:spaceForUL": SpaceForUnderline,
    "w:noColumnBalance": NoColumnBalance,
    "w:balanceSingleByteDoubleByteWidth": BalanceSingleByteDoubleByteWidth,
    "w:noExtraLineSpacing": NoExtraLineSpacing,
    "w:doNotLeaveBackslashAlone": DoNotLeaveBackslashAlone,
    "w:ulTrailSpace": UnderlineTrailingSpaces,
    "w:doNotExpandShiftReturn": DoNotExpandShiftReturn,
    "w:spacingInWholePoints": SpacingInWholePoints,
    "w:lineWrapLikeWord6": LineWrapLikeWord6,
    "w:printBodyTextBeforeHeader": PrintBodyTextBeforeHeader,
    "w:printColBlack": PrintColorBlackWhite,
    "w:wpSpaceWidth": WordPerfectSpaceWidth,
    "w:showBreaksInFrames": ShowBreaksInFrames,
    "w:subFontBySize": SubFontBySize,
    "w:suppressBottomSpacing": SuppressBottomSpacing,
    "w:suppressTopSpacing": SuppressTopSpacing,
    "w:suppressSpacingAtTopOfPage": SuppressSpacingAtTopOfPage,
    "w:suppressTopSpacingWP": SuppressTopSpacingWordPerfect,
    "w:suppressSpBfAfterPgBrk": SuppressSpacingBeforeAfterPageBreak,
    "w:swapBordersFacingPages": SwapBordersFacingPages,
    "w:convMailMergeEsc": ConvertMailMergeEscape,
    "w:truncateFontHeightsLikeWP6": TruncateFontHeightsLikeWordPerfect,
    "w:mwSmallCaps": MacWordSmallCaps,
    "w:usePrinterMetrics": UsePrinterMetrics,
    "w:doNotSuppressParagraphBorders": DoNotSuppressParagraphBorders,
    "w:wrapTrailSpaces": WrapTrailSpaces,
    "w:footnoteLayoutLikeWW8": FootnoteLayoutLikeWord8,
    "w:shapeLayoutLikeWW8": ShapeLayoutLikeWord8,
    "w:alignTablesRowByRow": AlignTablesRowByRow,
    "w:forgetLastTabAlignment": ForgetLastTabAlignment,
    "w:adjustLineHeightInTable": AdjustLineHeightInTable,
    "w:autoSpaceLikeWord95": AutoSpaceLikeWord95,
    "w:noSpaceRaiseLower": NoSpaceRaiseLower,
    "w:doNotUseHTMLParagraphAutoSpacing": DoNotUseHTMLParagraphAutoSpacing,
    "w:layoutRawTableWidth": LayoutRawTableWidth,
    "w:layoutTableRowsApart": LayoutTableRowsApart,
    "w:useWord97LineBreakRules": UseWord97LineBreakRules,
    "w:doNotBreakWrappedTables": DoNotBreakWrappedTables,
    "w:doNotSnapToGridInCell": DoNotSnapToGridInCell,
    "w:selectFldWithFirstOrLastChar": SelectFieldWithFirstOrLastChar,
    "w:applyBreakingRules": ApplyBreakingRules,
    "w:doNotWrapTextWithPunct": DoNotWrapTextWithPunctuation,
    "w:doNotUseEastAsianBreakRules": DoNotUseEastAsianBreakRules,
    "w:useWord2002TableStyleRules": UseWord2002TableStyleRules,
    "w:growAutofit": GrowAutofit,
    "w:useFELayout": UseFarEastLayout,
    "w:useNormalStyleForList": UseNormalStyleForList,
    "w:doNotUseIndentAsNumberingTabStop": DoNotUseIndentAsNumberingTabStop,
    "w:useAltKinsokuLineBreakRules": UseAltKinsokuLineBreakRules,
    "w:allowSpaceOfSameStyleInTable": AllowSpaceOfSameStyleInTable,
    "w:doNotSuppressIndentation": DoNotSuppressIndentation,
    "w:doNotAutofitConstrainedTables": DoNotAutofitConstrainedTables,
    "w:autofitToFirstFixedWidthCell": AutofitToFirstFixedWidthCell,
    "w:underlineTabInNumList": UnderlineTabInNumberingList,
    "w:displayHangulFixedWidth": DisplayHangulFixedWidth,
    "w:splitPgBreakAndParaMark": SplitPageBreakAndParagraphMark,
    "w:doNotVertAlignCellWithSp": DoNotVerticallyAlignCellWithShape,
    "w:doNotBreakConstrainedForcedTable": DoNotBreakConstrainedForcedTable,
    "w:doNotVertAlignInTxbx": DoNotVerticallyAlignInTextBox,
    "w:useAnsiKerningPairs": UseAnsiKerningPairs,
    "w:cachedColBalance": CachedColumnBalance,
    "w:compatSetting": CompatibilitySetting
  };
  EndnoteDocumentWideProperties._C = {
    "w:pos": EndnotePosition,
    "w:numFmt": NumberingFormat,
    "w:numStart": NumberingStart,
    "w:numRestart": NumberingRestart,
    "w:endnote": EndnoteSpecialReference
  };
  FootnoteDocumentWideProperties._C = {
    "w:pos": FootnotePosition,
    "w:numFmt": NumberingFormat,
    "w:numStart": NumberingStart,
    "w:numRestart": NumberingRestart,
    "w:footnote": FootnoteSpecialReference
  };
  ShapeDefaultsType._C = {
    "o:shapedefaults": OShapeDefaults,
    "o:shapelayout": OShapeLayout
  };
  ShapeDefaults._C = {
    "o:shapedefaults": OShapeDefaults,
    "o:shapelayout": OShapeLayout
  };
  HeaderShapeDefaults._C = {
    "o:shapedefaults": OShapeDefaults,
    "o:shapelayout": OShapeLayout
  };
  SaveThroughXslt._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    "w:solutionID": new OxmlAttr("w:solutionID", OxmlType.StringValue)
  };
  NoLineBreaksBeforeKinsoku._D = {
    "w:lang": new OxmlAttr("w:lang", OxmlType.StringValue),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  NoLineBreaksAfterKinsoku._D = {
    "w:lang": new OxmlAttr("w:lang", OxmlType.StringValue),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  CharacterSpacingControl._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, CharacterSpacingValuesArray)
  };
  UnsignedInt7Type._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  SummaryLength._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  ConsecutiveHyphenLimit._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt16Value)
  };
  NonNegativeShortType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int16Value)
  };
  DocumentProtection._D = {
    "w:edit": new OxmlAttr("w:edit", OxmlType.EnumValue, DocumentProtectionValuesArray),
    "w:formatting": new OxmlAttr("w:formatting", OxmlType.OnOffValue),
    "w:enforcement": new OxmlAttr("w:enforcement", OxmlType.OnOffValue),
    "w:cryptProviderType": new OxmlAttr("w:cryptProviderType", OxmlType.EnumValue, CryptProviderValuesArray),
    "w:cryptAlgorithmClass": new OxmlAttr("w:cryptAlgorithmClass", OxmlType.EnumValue, CryptAlgorithmClassValuesArray),
    "w:cryptAlgorithmType": new OxmlAttr("w:cryptAlgorithmType", OxmlType.EnumValue, CryptAlgorithmValuesArray),
    "w:cryptAlgorithmSid": new OxmlAttr("w:cryptAlgorithmSid", OxmlType.Int32Value),
    "w:cryptSpinCount": new OxmlAttr("w:cryptSpinCount", OxmlType.UInt32Value),
    "w:cryptProvider": new OxmlAttr("w:cryptProvider", OxmlType.StringValue),
    "w:algIdExt": new OxmlAttr("w:algIdExt", OxmlType.HexBinaryValue),
    "w:algIdExtSource": new OxmlAttr("w:algIdExtSource", OxmlType.StringValue),
    "w:cryptProviderTypeExt": new OxmlAttr("w:cryptProviderTypeExt", OxmlType.HexBinaryValue),
    "w:cryptProviderTypeExtSource": new OxmlAttr("w:cryptProviderTypeExtSource", OxmlType.StringValue),
    "w:hash": new OxmlAttr("w:hash", OxmlType.Base64BinaryValue),
    "w:salt": new OxmlAttr("w:salt", OxmlType.Base64BinaryValue),
    "w:algorithmName": new OxmlAttr("w:algorithmName", OxmlType.StringValue),
    "w:hashValue": new OxmlAttr("w:hashValue", OxmlType.Base64BinaryValue),
    "w:saltValue": new OxmlAttr("w:saltValue", OxmlType.Base64BinaryValue),
    "w:spinCount": new OxmlAttr("w:spinCount", OxmlType.Int32Value)
  };
  RevisionView._D = {
    "w:markup": new OxmlAttr("w:markup", OxmlType.OnOffValue),
    "w:comments": new OxmlAttr("w:comments", OxmlType.OnOffValue),
    "w:insDel": new OxmlAttr("w:insDel", OxmlType.OnOffValue),
    "w:formatting": new OxmlAttr("w:formatting", OxmlType.OnOffValue),
    "w:inkAnnotations": new OxmlAttr("w:inkAnnotations", OxmlType.OnOffValue)
  };
  MailMerge._C = {
    "w:mainDocumentType": MainDocumentType,
    "w:linkToQuery": LinkToQuery,
    "w:dataType": DataType,
    "w:connectString": ConnectString,
    "w:query": Query,
    "w:dataSource": DataSourceReference,
    "w:headerSource": HeaderSource,
    "w:doNotSuppressBlankLines": DoNotSuppressBlankLines,
    "w:destination": Destination,
    "w:addressFieldName": AddressFieldName,
    "w:mailSubject": MailSubject,
    "w:mailAsAttachment": MailAsAttachment,
    "w:viewMergedData": ViewMergedData,
    "w:activeRecord": ActiveRecord,
    "w:checkErrors": CheckErrors,
    "w:odso": DataSourceObject
  };
  DocumentType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DocumentTypeValuesArray)
  };
  StylePaneSortMethods._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  StylePaneFormatFilter._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.HexBinaryValue),
    "w:allStyles": new OxmlAttr("w:allStyles", OxmlType.OnOffValue),
    "w:customStyles": new OxmlAttr("w:customStyles", OxmlType.OnOffValue),
    "w:latentStyles": new OxmlAttr("w:latentStyles", OxmlType.OnOffValue),
    "w:stylesInUse": new OxmlAttr("w:stylesInUse", OxmlType.OnOffValue),
    "w:headingStyles": new OxmlAttr("w:headingStyles", OxmlType.OnOffValue),
    "w:numberingStyles": new OxmlAttr("w:numberingStyles", OxmlType.OnOffValue),
    "w:tableStyles": new OxmlAttr("w:tableStyles", OxmlType.OnOffValue),
    "w:directFormattingOnRuns": new OxmlAttr("w:directFormattingOnRuns", OxmlType.OnOffValue),
    "w:directFormattingOnParagraphs": new OxmlAttr("w:directFormattingOnParagraphs", OxmlType.OnOffValue),
    "w:directFormattingOnNumbering": new OxmlAttr("w:directFormattingOnNumbering", OxmlType.OnOffValue),
    "w:directFormattingOnTables": new OxmlAttr("w:directFormattingOnTables", OxmlType.OnOffValue),
    "w:clearFormatting": new OxmlAttr("w:clearFormatting", OxmlType.OnOffValue),
    "w:top3HeadingStyles": new OxmlAttr("w:top3HeadingStyles", OxmlType.OnOffValue),
    "w:visibleStyles": new OxmlAttr("w:visibleStyles", OxmlType.OnOffValue),
    "w:alternateStyleNames": new OxmlAttr("w:alternateStyleNames", OxmlType.OnOffValue)
  };
  ProofState._D = {
    "w:spelling": new OxmlAttr("w:spelling", OxmlType.EnumValue, ProofingStateValuesArray),
    "w:grammar": new OxmlAttr("w:grammar", OxmlType.EnumValue, ProofingStateValuesArray)
  };
  ActiveWritingStyle._D = {
    "w:lang": new OxmlAttr("w:lang", OxmlType.StringValue),
    "w:vendorID": new OxmlAttr("w:vendorID", OxmlType.UInt16Value),
    "w:dllVersion": new OxmlAttr("w:dllVersion", OxmlType.Int32Value),
    "w:nlCheck": new OxmlAttr("w:nlCheck", OxmlType.OnOffValue),
    "w:checkStyle": new OxmlAttr("w:checkStyle", OxmlType.OnOffValue),
    "w:appName": new OxmlAttr("w:appName", OxmlType.StringValue)
  };
  Zoom._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, PresetZoomValuesArray),
    "w:percent": new OxmlAttr("w:percent", OxmlType.StringValue)
  };
  View._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, ViewValuesArray)
  };
  WriteProtection._D = {
    "w:recommended": new OxmlAttr("w:recommended", OxmlType.OnOffValue),
    "w:cryptProviderType": new OxmlAttr("w:cryptProviderType", OxmlType.EnumValue, CryptProviderValuesArray),
    "w:cryptAlgorithmClass": new OxmlAttr("w:cryptAlgorithmClass", OxmlType.EnumValue, CryptAlgorithmClassValuesArray),
    "w:cryptAlgorithmType": new OxmlAttr("w:cryptAlgorithmType", OxmlType.EnumValue, CryptAlgorithmValuesArray),
    "w:cryptAlgorithmSid": new OxmlAttr("w:cryptAlgorithmSid", OxmlType.Int32Value),
    "w:cryptSpinCount": new OxmlAttr("w:cryptSpinCount", OxmlType.UInt32Value),
    "w:cryptProvider": new OxmlAttr("w:cryptProvider", OxmlType.StringValue),
    "w:algIdExt": new OxmlAttr("w:algIdExt", OxmlType.HexBinaryValue),
    "w:algIdExtSource": new OxmlAttr("w:algIdExtSource", OxmlType.StringValue),
    "w:cryptProviderTypeExt": new OxmlAttr("w:cryptProviderTypeExt", OxmlType.HexBinaryValue),
    "w:cryptProviderTypeExtSource": new OxmlAttr("w:cryptProviderTypeExtSource", OxmlType.StringValue),
    "w:hash": new OxmlAttr("w:hash", OxmlType.Base64BinaryValue),
    "w:salt": new OxmlAttr("w:salt", OxmlType.Base64BinaryValue),
    "w:algorithmName": new OxmlAttr("w:algorithmName", OxmlType.StringValue),
    "w:hashValue": new OxmlAttr("w:hashValue", OxmlType.Base64BinaryValue),
    "w:saltValue": new OxmlAttr("w:saltValue", OxmlType.Base64BinaryValue),
    "w:spinCount": new OxmlAttr("w:spinCount", OxmlType.Int32Value)
  };
  SdtContentText._D = {
    "w:multiLine": new OxmlAttr("w:multiLine", OxmlType.OnOffValue)
  };
  SdtContentDropDownList._C = {
    "w:listItem": ListItem
  };
  SdtContentDropDownList._D = {
    "w:lastValue": new OxmlAttr("w:lastValue", OxmlType.StringValue)
  };
  SdtDocPartType._C = {
    "w:docPartGallery": DocPartGallery,
    "w:docPartCategory": DocPartCategory,
    "w:docPartUnique": DocPartUnique
  };
  SdtContentDocPartList._C = {
    "w:docPartGallery": DocPartGallery,
    "w:docPartCategory": DocPartCategory,
    "w:docPartUnique": DocPartUnique
  };
  SdtContentDocPartObject._C = {
    "w:docPartGallery": DocPartGallery,
    "w:docPartCategory": DocPartCategory,
    "w:docPartUnique": DocPartUnique
  };
  SdtContentDate._C = {
    "w:dateFormat": DateFormat,
    "w:lid": LanguageId,
    "w:storeMappedDataAs": SdtDateMappingType,
    "w:calendar": Calendar
  };
  SdtContentDate._D = {
    "w:fullDate": new OxmlAttr("w:fullDate", OxmlType.DateTimeValue)
  };
  SdtContentComboBox._C = {
    "w:listItem": ListItem
  };
  SdtContentComboBox._D = {
    "w:lastValue": new OxmlAttr("w:lastValue", OxmlType.StringValue)
  };
  DataBinding._D = {
    "w:prefixMappings": new OxmlAttr("w:prefixMappings", OxmlType.StringValue),
    "w:xpath": new OxmlAttr("w:xpath", OxmlType.StringValue),
    "w:storeItemID": new OxmlAttr("w:storeItemID", OxmlType.StringValue)
  };
  SdtPlaceholder._C = {
    "w:docPart": DocPartReference
  };
  Lock._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, LockingValuesArray)
  };
  ObjectLink._D = {
    "w:updateMode": new OxmlAttr("w:updateMode", OxmlType.EnumValue, ObjectUpdateModeArray),
    "w:lockedField": new OxmlAttr("w:lockedField", OxmlType.OnOffValue),
    "w:drawAspect": new OxmlAttr("w:drawAspect", OxmlType.EnumValue, ObjectDrawAspectArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    "w:progId": new OxmlAttr("w:progId", OxmlType.StringValue),
    "w:shapeId": new OxmlAttr("w:shapeId", OxmlType.StringValue),
    "w:fieldCodes": new OxmlAttr("w:fieldCodes", OxmlType.StringValue)
  };
  ObjectEmbed._D = {
    "w:drawAspect": new OxmlAttr("w:drawAspect", OxmlType.EnumValue, ObjectDrawAspectArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    "w:progId": new OxmlAttr("w:progId", OxmlType.StringValue),
    "w:shapeId": new OxmlAttr("w:shapeId", OxmlType.StringValue),
    "w:fieldCodes": new OxmlAttr("w:fieldCodes", OxmlType.StringValue)
  };
  PreviousTableGrid._C = {
    "w:gridCol": GridColumn
  };
  Control._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:shapeid": new OxmlAttr("w:shapeid", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ParagraphProperties._C = {
    "w:pStyle": ParagraphStyleId,
    "w:keepNext": KeepNext,
    "w:keepLines": KeepLines,
    "w:pageBreakBefore": PageBreakBefore,
    "w:framePr": FrameProperties,
    "w:widowControl": WidowControl,
    "w:numPr": NumberingProperties,
    "w:suppressLineNumbers": SuppressLineNumbers,
    "w:pBdr": ParagraphBorders,
    "w:shd": Shading,
    "w:tabs": Tabs,
    "w:suppressAutoHyphens": SuppressAutoHyphens,
    "w:kinsoku": Kinsoku,
    "w:wordWrap": WordWrap,
    "w:overflowPunct": OverflowPunctuation,
    "w:topLinePunct": TopLinePunctuation,
    "w:autoSpaceDE": AutoSpaceDE,
    "w:autoSpaceDN": AutoSpaceDN,
    "w:bidi": BiDi,
    "w:adjustRightInd": AdjustRightIndent,
    "w:snapToGrid": SnapToGrid,
    "w:spacing": SpacingBetweenLines,
    "w:ind": Indentation,
    "w:contextualSpacing": ContextualSpacing,
    "w:mirrorIndents": MirrorIndents,
    "w:suppressOverlap": SuppressOverlap,
    "w:jc": Justification,
    "w:textDirection": TextDirection,
    "w:textAlignment": TextAlignment,
    "w:textboxTightWrap": TextBoxTightWrap,
    "w:outlineLvl": OutlineLevel,
    "w:divId": DivId,
    "w:cnfStyle": ConditionalFormatStyle,
    "w:rPr": ParagraphMarkRunProperties,
    "w:sectPr": SectionProperties,
    "w:pPrChange": ParagraphPropertiesChange
  };
  TableRowPropertiesChange._C = {
    "w:trPr": PreviousTableRowProperties
  };
  TableRowPropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  TableRowProperties._C = {
    "w:cnfStyle": ConditionalFormatStyle,
    "w:divId": DivId,
    "w:gridBefore": GridBefore,
    "w:gridAfter": GridAfter,
    "w:wBefore": WidthBeforeTableRow,
    "w:wAfter": WidthAfterTableRow,
    "w:trHeight": TableRowHeight,
    "w:hidden": Hidden,
    "w:cantSplit": CantSplit,
    "w:tblHeader": TableHeader,
    "w:tblCellSpacing": TableCellSpacing,
    "w:jc": TableJustification,
    "w:ins": Inserted,
    "w:del": Deleted,
    "w:trPrChange": TableRowPropertiesChange,
    "w14:conflictIns": W14ConflictInsertion,
    "w14:conflictDel": W14ConflictDeletion
  };
  TablePropertyExceptions._C = {
    "w:tblW": TableWidth,
    "w:jc": TableJustification,
    "w:tblCellSpacing": TableCellSpacing,
    "w:tblInd": TableIndentation,
    "w:tblBorders": TableBorders,
    "w:shd": Shading,
    "w:tblLayout": TableLayout,
    "w:tblCellMar": TableCellMarginDefault,
    "w:tblLook": TableLook,
    "w:tblPrExChange": TablePropertyExceptionsChange
  };
  TableWidthDxaNilType._D = {
    "w:w": new OxmlAttr("w:w", OxmlType.Int16Value),
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, TableWidthValuesArray)
  };
  CompatibilitySetting._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.EnumValue, CompatSettingNameValuesArray),
    "w:uri": new OxmlAttr("w:uri", OxmlType.StringValue),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  DocPart._C = {
    "w:docPartPr": DocPartProperties,
    "w:docPartBody": DocPartBody
  };
  BodyType._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "w:sectPr": SectionProperties
  };
  Body._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "w:sectPr": SectionProperties
  };
  DocPartBody._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "w:sectPr": SectionProperties
  };
  DocPartProperties._C = {
    "w:name": DocPartName,
    "w:style": StyleId,
    "w:category": Category,
    "w:types": DocPartTypes,
    "w:behaviors": Behaviors,
    "w:description": Description,
    "w:guid": DocPartId
  };
  DocPartId._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  Behaviors._C = {
    "w:behavior": Behavior
  };
  DocPartTypes._C = {
    "w:type": DocPartType
  };
  DocPartTypes._D = {
    "w:all": new OxmlAttr("w:all", OxmlType.OnOffValue)
  };
  Category._C = {
    "w:name": Name,
    "w:gallery": Gallery
  };
  DocPartName._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:decorated": new OxmlAttr("w:decorated", OxmlType.OnOffValue)
  };
  DocParts._C = {
    "w:docPart": DocPart
  };
  DocumentBackground._C = {
    "v:background": VBackground
  };
  DocumentBackground._D = {
    "w:color": new OxmlAttr("w:color", OxmlType.StringValue),
    "w:themeColor": new OxmlAttr("w:themeColor", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeTint": new OxmlAttr("w:themeTint", OxmlType.StringValue),
    "w:themeShade": new OxmlAttr("w:themeShade", OxmlType.StringValue)
  };
  AutoCaptions._C = {
    "w:autoCaption": AutoCaption
  };
  Caption._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:pos": new OxmlAttr("w:pos", OxmlType.EnumValue, CaptionPositionValuesArray),
    "w:chapNum": new OxmlAttr("w:chapNum", OxmlType.OnOffValue),
    "w:heading": new OxmlAttr("w:heading", OxmlType.Int32Value),
    "w:noLabel": new OxmlAttr("w:noLabel", OxmlType.OnOffValue),
    "w:numFmt": new OxmlAttr("w:numFmt", OxmlType.EnumValue, NumberFormatValuesArray),
    "w:sep": new OxmlAttr("w:sep", OxmlType.EnumValue, ChapterSeparatorValuesArray)
  };
  AutoCaption._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:caption": new OxmlAttr("w:caption", OxmlType.StringValue)
  };
  Gallery._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DocPartGalleryValuesArray)
  };
  DocPartType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DocPartValuesArray)
  };
  Behavior._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DocPartBehaviorValuesArray)
  };
  FootnoteEndnoteType._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  FootnoteEndnoteType._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, FootnoteEndnoteValuesArray),
    "w:id": new OxmlAttr("w:id", OxmlType.IntegerValue)
  };
  Endnote._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Footnote._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Comment._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd
  };
  Comment._D = {
    "w:initials": new OxmlAttr("w:initials", OxmlType.StringValue),
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  Div._C = {
    "w:blockQuote": BlockQuote,
    "w:bodyDiv": BodyDiv,
    "w:marLeft": LeftMarginDiv,
    "w:marRight": RightMarginDiv,
    "w:marTop": TopMarginDiv,
    "w:marBottom": BottomMarginDiv,
    "w:divBdr": DivBorder,
    "w:divsChild": DivsChild
  };
  Div._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  DivsType._C = {
    "w:div": Div
  };
  Divs._C = {
    "w:div": Div
  };
  DivsChild._C = {
    "w:div": Div
  };
  DivBorder._C = {
    "w:top": TopBorder,
    "w:left": LeftBorder,
    "w:bottom": BottomBorder,
    "w:right": RightBorder
  };
  SignedTwipsMeasureType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  Font._C = {
    "w:altName": AltName,
    "w:panose1": Panose1Number,
    "w:charset": FontCharSet,
    "w:family": FontFamily,
    "w:notTrueType": NotTrueType,
    "w:pitch": Pitch,
    "w:sig": FontSignature,
    "w:embedRegular": EmbedRegularFont,
    "w:embedBold": EmbedBoldFont,
    "w:embedItalic": EmbedItalicFont,
    "w:embedBoldItalic": EmbedBoldItalicFont
  };
  Font._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue)
  };
  Style._C = {
    "w:name": StyleName,
    "w:aliases": Aliases,
    "w:basedOn": BasedOn,
    "w:next": NextParagraphStyle,
    "w:link": LinkedStyle,
    "w:autoRedefine": AutoRedefine,
    "w:hidden": StyleHidden,
    "w:uiPriority": UIPriority,
    "w:semiHidden": SemiHidden,
    "w:unhideWhenUsed": UnhideWhenUsed,
    "w:qFormat": PrimaryStyle,
    "w:locked": Locked,
    "w:personal": Personal,
    "w:personalCompose": PersonalCompose,
    "w:personalReply": PersonalReply,
    "w:rsid": Rsid,
    "w:pPr": StyleParagraphProperties,
    "w:rPr": StyleRunProperties,
    "w:tblPr": StyleTableProperties,
    "w:trPr": TableStyleConditionalFormattingTableRowProperties,
    "w:tcPr": StyleTableCellProperties,
    "w:tblStylePr": TableStyleProperties
  };
  Style._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, StyleValuesArray),
    "w:styleId": new OxmlAttr("w:styleId", OxmlType.StringValue),
    "w:default": new OxmlAttr("w:default", OxmlType.OnOffValue),
    "w:customStyle": new OxmlAttr("w:customStyle", OxmlType.OnOffValue)
  };
  LatentStyles._C = {
    "w:lsdException": LatentStyleExceptionInfo
  };
  LatentStyles._D = {
    "w:defLockedState": new OxmlAttr("w:defLockedState", OxmlType.OnOffValue),
    "w:defUIPriority": new OxmlAttr("w:defUIPriority", OxmlType.Int32Value),
    "w:defSemiHidden": new OxmlAttr("w:defSemiHidden", OxmlType.OnOffValue),
    "w:defUnhideWhenUsed": new OxmlAttr("w:defUnhideWhenUsed", OxmlType.OnOffValue),
    "w:defQFormat": new OxmlAttr("w:defQFormat", OxmlType.OnOffValue),
    "w:count": new OxmlAttr("w:count", OxmlType.Int32Value)
  };
  DocDefaults._C = {
    "w:rPrDefault": RunPropertiesDefault,
    "w:pPrDefault": ParagraphPropertiesDefault
  };
  LatentStyleExceptionInfo._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:locked": new OxmlAttr("w:locked", OxmlType.OnOffValue),
    "w:uiPriority": new OxmlAttr("w:uiPriority", OxmlType.Int32Value),
    "w:semiHidden": new OxmlAttr("w:semiHidden", OxmlType.OnOffValue),
    "w:unhideWhenUsed": new OxmlAttr("w:unhideWhenUsed", OxmlType.OnOffValue),
    "w:qFormat": new OxmlAttr("w:qFormat", OxmlType.OnOffValue)
  };
  TableStyleProperties._C = {
    "w:pPr": StyleParagraphProperties,
    "w:rPr": RunPropertiesBaseStyle,
    "w:tblPr": TableStyleConditionalFormattingTableProperties,
    "w:trPr": TableStyleConditionalFormattingTableRowProperties,
    "w:tcPr": TableStyleConditionalFormattingTableCellProperties
  };
  TableStyleProperties._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, TableStyleOverrideValuesArray)
  };
  StyleTableCellProperties._C = {
    "w:shd": Shading,
    "w:noWrap": NoWrap,
    "w:tcMar": TableCellMargin,
    "w:vAlign": TableCellVerticalAlignment
  };
  StyleTableProperties._C = {
    "w:tblStyleRowBandSize": TableStyleRowBandSize,
    "w:tblStyleColBandSize": TableStyleColumnBandSize,
    "w:jc": TableJustification,
    "w:tblCellSpacing": TableCellSpacing,
    "w:tblInd": TableIndentation,
    "w:tblBorders": TableBorders,
    "w:shd": Shading,
    "w:tblCellMar": TableCellMarginDefault
  };
  StyleRunProperties._C = {
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish,
    "w:rPrChange": RunPropertiesChange
  };
  UIPriority._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  StyleName._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  TableStyleConditionalFormattingTableCellProperties._C = {
    "w:tcBorders": TableCellBorders,
    "w:shd": Shading,
    "w:noWrap": NoWrap,
    "w:tcMar": TableCellMargin,
    "w:vAlign": TableCellVerticalAlignment
  };
  TableStyleConditionalFormattingTableRowProperties._C = {
    "w:hidden": Hidden,
    "w:cantSplit": CantSplit,
    "w:tblHeader": TableHeader,
    "w:tblCellSpacing": TableCellSpacing,
    "w:jc": TableJustification
  };
  TableStyleConditionalFormattingTableProperties._C = {
    "w:jc": TableJustification,
    "w:tblCellSpacing": TableCellSpacing,
    "w:tblInd": TableIndentation,
    "w:tblBorders": TableBorders,
    "w:shd": Shading,
    "w:tblCellMar": TableCellMarginDefault
  };
  StyleParagraphProperties._C = {
    "w:keepNext": KeepNext,
    "w:keepLines": KeepLines,
    "w:pageBreakBefore": PageBreakBefore,
    "w:framePr": FrameProperties,
    "w:widowControl": WidowControl,
    "w:numPr": NumberingProperties,
    "w:suppressLineNumbers": SuppressLineNumbers,
    "w:pBdr": ParagraphBorders,
    "w:shd": Shading,
    "w:tabs": Tabs,
    "w:suppressAutoHyphens": SuppressAutoHyphens,
    "w:kinsoku": Kinsoku,
    "w:wordWrap": WordWrap,
    "w:overflowPunct": OverflowPunctuation,
    "w:topLinePunct": TopLinePunctuation,
    "w:autoSpaceDE": AutoSpaceDE,
    "w:autoSpaceDN": AutoSpaceDN,
    "w:bidi": BiDi,
    "w:adjustRightInd": AdjustRightIndent,
    "w:snapToGrid": SnapToGrid,
    "w:spacing": SpacingBetweenLines,
    "w:ind": Indentation,
    "w:contextualSpacing": ContextualSpacing,
    "w:mirrorIndents": MirrorIndents,
    "w:suppressOverlap": SuppressOverlap,
    "w:jc": Justification,
    "w:textDirection": TextDirection,
    "w:textAlignment": TextAlignment,
    "w:textboxTightWrap": TextBoxTightWrap,
    "w:outlineLvl": OutlineLevel,
    "w:pPrChange": ParagraphPropertiesChange
  };
  NumberingInstance._C = {
    "w:abstractNumId": AbstractNumId,
    "w:lvlOverride": LevelOverride
  };
  NumberingInstance._D = {
    "w:numId": new OxmlAttr("w:numId", OxmlType.Int32Value),
    "w:durableId": new OxmlAttr("w:durableId", OxmlType.Int32Value)
  };
  AbstractNum._C = {
    "w:nsid": Nsid,
    "w:multiLevelType": MultiLevelType,
    "w:tmpl": TemplateCode,
    "w:name": AbstractNumDefinitionName,
    "w:styleLink": StyleLink,
    "w:numStyleLink": NumberingStyleLink,
    "w:lvl": Level
  };
  AbstractNum._D = {
    "w:abstractNumId": new OxmlAttr("w:abstractNumId", OxmlType.Int32Value)
  };
  NumberingPictureBullet._C = {
    "w:pict": PictureBulletBase,
    "w:drawing": Drawing
  };
  NumberingPictureBullet._D = {
    "w:numPicBulletId": new OxmlAttr("w:numPicBulletId", OxmlType.Int32Value)
  };
  Level._C = {
    "w:start": StartNumberingValue,
    "w:numFmt": NumberingFormat,
    "w:lvlRestart": LevelRestart,
    "w:pStyle": ParagraphStyleIdInLevel,
    "w:isLgl": IsLegalNumberingStyle,
    "w:suff": LevelSuffix,
    "w:lvlText": LevelText,
    "w:lvlPicBulletId": LevelPictureBulletId,
    "w:legacy": LegacyNumbering,
    "w:lvlJc": LevelJustification,
    "w:pPr": PreviousParagraphProperties,
    "w:rPr": NumberingSymbolRunProperties
  };
  Level._D = {
    "w:ilvl": new OxmlAttr("w:ilvl", OxmlType.Int32Value),
    "w:tplc": new OxmlAttr("w:tplc", OxmlType.HexBinaryValue),
    "w:tentative": new OxmlAttr("w:tentative", OxmlType.OnOffValue)
  };
  MultiLevelType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MultiLevelValuesArray)
  };
  NumberingSymbolRunProperties._C = {
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:rtl": RightToLeftText,
    "w:cs": ComplexScript,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish
  };
  PreviousParagraphProperties._C = {
    "w:pStyle": ParagraphStyleId,
    "w:keepNext": KeepNext,
    "w:keepLines": KeepLines,
    "w:pageBreakBefore": PageBreakBefore,
    "w:framePr": FrameProperties,
    "w:widowControl": WidowControl,
    "w:numPr": NumberingProperties,
    "w:suppressLineNumbers": SuppressLineNumbers,
    "w:pBdr": ParagraphBorders,
    "w:shd": Shading,
    "w:tabs": Tabs,
    "w:suppressAutoHyphens": SuppressAutoHyphens,
    "w:kinsoku": Kinsoku,
    "w:wordWrap": WordWrap,
    "w:overflowPunct": OverflowPunctuation,
    "w:topLinePunct": TopLinePunctuation,
    "w:autoSpaceDE": AutoSpaceDE,
    "w:autoSpaceDN": AutoSpaceDN,
    "w:bidi": BiDi,
    "w:adjustRightInd": AdjustRightIndent,
    "w:snapToGrid": SnapToGrid,
    "w:spacing": SpacingBetweenLines,
    "w:ind": Indentation,
    "w:contextualSpacing": ContextualSpacing,
    "w:mirrorIndents": MirrorIndents,
    "w:suppressOverlap": SuppressOverlap,
    "w:jc": Justification,
    "w:textDirection": TextDirection,
    "w:textAlignment": TextAlignment,
    "w:textboxTightWrap": TextBoxTightWrap,
    "w:outlineLvl": OutlineLevel
  };
  LevelJustification._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, LevelJustificationValuesArray)
  };
  LegacyNumbering._D = {
    "w:legacy": new OxmlAttr("w:legacy", OxmlType.OnOffValue),
    "w:legacySpace": new OxmlAttr("w:legacySpace", OxmlType.StringValue),
    "w:legacyIndent": new OxmlAttr("w:legacyIndent", OxmlType.StringValue)
  };
  LevelText._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:null": new OxmlAttr("w:null", OxmlType.OnOffValue)
  };
  LevelSuffix._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, LevelSuffixValuesArray)
  };
  Frame._C = {
    "w:sz": FrameSize,
    "w:name": FrameName,
    "w:sourceFileName": SourceFileReference,
    "w:marW": MarginWidth,
    "w:marH": MarginHeight,
    "w:scrollbar": ScrollbarVisibility,
    "w:noResizeAllowed": NoResizeAllowed,
    "w:linkedToFile": LinkedToFile
  };
  Frameset._C = {
    "w:sz": FrameSize,
    "w:framesetSplitbar": FramesetSplitbar,
    "w:frameLayout": FrameLayout,
    "w:frameset": Frameset,
    "w:frame": Frame
  };
  FrameLayout._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, FrameLayoutValuesArray)
  };
  FramesetSplitbar._C = {
    "w:w": Width,
    "w:color": Color,
    "w:noBorder": NoBorder,
    "w:flatBorders": FlatBorders
  };
  TwipsMeasureType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  ScrollbarVisibility._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, FrameScrollbarVisibilityValuesArray)
  };
  PixelsMeasureType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt32Value)
  };
  ParagraphPropertiesDefault._C = {
    "w:pPr": ParagraphPropertiesBaseStyle
  };
  RunPropertiesDefault._C = {
    "w:rPr": RunPropertiesBaseStyle
  };
  ParagraphPropertiesBaseStyle._C = {
    "w:keepNext": KeepNext,
    "w:keepLines": KeepLines,
    "w:pageBreakBefore": PageBreakBefore,
    "w:framePr": FrameProperties,
    "w:widowControl": WidowControl,
    "w:numPr": NumberingProperties,
    "w:suppressLineNumbers": SuppressLineNumbers,
    "w:pBdr": ParagraphBorders,
    "w:shd": Shading,
    "w:tabs": Tabs,
    "w:suppressAutoHyphens": SuppressAutoHyphens,
    "w:kinsoku": Kinsoku,
    "w:wordWrap": WordWrap,
    "w:overflowPunct": OverflowPunctuation,
    "w:topLinePunct": TopLinePunctuation,
    "w:autoSpaceDE": AutoSpaceDE,
    "w:autoSpaceDN": AutoSpaceDN,
    "w:bidi": BiDi,
    "w:adjustRightInd": AdjustRightIndent,
    "w:snapToGrid": SnapToGrid,
    "w:spacing": SpacingBetweenLines,
    "w:ind": Indentation,
    "w:contextualSpacing": ContextualSpacing,
    "w:mirrorIndents": MirrorIndents,
    "w:suppressOverlap": SuppressOverlap,
    "w:jc": Justification,
    "w:textDirection": TextDirection,
    "w:textAlignment": TextAlignment,
    "w:textboxTightWrap": TextBoxTightWrap,
    "w:outlineLvl": OutlineLevel
  };
  RunPropertiesBaseStyle._C = {
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish
  };
  LongHexNumberType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.HexBinaryValue)
  };
  DocumentVariable._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  DataSourceObject._C = {
    "w:udl": UdlConnectionString,
    "w:table": DataSourceTableName,
    "w:src": SourceReference,
    "w:colDelim": ColumnDelimiter,
    "w:type": MailMergeSource,
    "w:fHdr": FirstRowHeader,
    "w:fieldMapData": FieldMapData,
    "w:recipientData": RecipientDataReference
  };
  Destination._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MailMergeDestinationValuesArray)
  };
  DataType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MailMergeDataValuesArray)
  };
  MainDocumentType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MailMergeDocumentValuesArray)
  };
  FieldMapData._C = {
    "w:type": MailMergeFieldType,
    "w:name": Name,
    "w:mappedName": MappedName,
    "w:column": ColumnIndex,
    "w:lid": LanguageId,
    "w:dynamicAddress": DynamicAddress
  };
  MailMergeSource._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MailMergeSourceValuesArray)
  };
  MailMergeFieldType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MailMergeOdsoFieldValuesArray)
  };
  RecipientData._C = {
    "w:active": Active,
    "w:column": ColumnIndex,
    "w:uniqueTag": UniqueTag
  };
  UniqueTag._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Base64BinaryValue)
  };
  UnsignedDecimalNumberType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt32Value)
  };
  FootnoteEndnoteSeparatorReferenceType._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.IntegerValue)
  };
  EndnotePosition._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, EndnotePositionValuesArray)
  };
  NumberingFormat._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, NumberFormatValuesArray),
    "w:format": new OxmlAttr("w:format", OxmlType.StringValue)
  };
  FootnotePosition._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, FootnotePositionValuesArray)
  };
  TableGrid._C = {
    "w:gridCol": GridColumn,
    "w:tblGridChange": TableGridChange
  };
  TableProperties._C = {
    "w:tblStyle": TableStyle,
    "w:tblpPr": TablePositionProperties,
    "w:tblOverlap": TableOverlap,
    "w:bidiVisual": BiDiVisual,
    "w:tblW": TableWidth,
    "w:jc": TableJustification,
    "w:tblCellSpacing": TableCellSpacing,
    "w:tblInd": TableIndentation,
    "w:tblBorders": TableBorders,
    "w:shd": Shading,
    "w:tblLayout": TableLayout,
    "w:tblCellMar": TableCellMarginDefault,
    "w:tblLook": TableLook,
    "w:tblCaption": TableCaption,
    "w:tblDescription": TableDescription,
    "w:tblPrChange": TablePropertiesChange
  };
  TablePropertyExceptionsChange._C = {
    "w:tblPrEx": PreviousTablePropertyExceptions
  };
  TablePropertyExceptionsChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  TablePropertiesChange._C = {
    "w:tblPr": PreviousTableProperties
  };
  TablePropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  TableCellProperties._C = {
    "w:cnfStyle": ConditionalFormatStyle,
    "w:tcW": TableCellWidth,
    "w:gridSpan": GridSpan,
    "w:hMerge": HorizontalMerge,
    "w:vMerge": VerticalMerge,
    "w:tcBorders": TableCellBorders,
    "w:shd": Shading,
    "w:noWrap": NoWrap,
    "w:tcMar": TableCellMargin,
    "w:textDirection": TextDirection,
    "w:tcFitText": TableCellFitText,
    "w:vAlign": TableCellVerticalAlignment,
    "w:hideMark": HideMark,
    "w:cellIns": CellInsertion,
    "w:cellDel": CellDeletion,
    "w:cellMerge": CellMerge,
    "w:tcPrChange": TableCellPropertiesChange
  };
  TableCellPropertiesChange._C = {
    "w:tcPr": PreviousTableCellProperties
  };
  TableCellPropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  TableGridChange._C = {
    "w:tblGrid": PreviousTableGrid
  };
  TableGridChange._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  GridColumn._D = {
    "w:w": new OxmlAttr("w:w", OxmlType.StringValue)
  };
  CustomXmlAttribute._D = {
    "w:uri": new OxmlAttr("w:uri", OxmlType.StringValue),
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  CustomXmlProperties._C = {
    "w:placeholder": CustomXmlPlaceholder,
    "w:attr": CustomXmlAttribute
  };
  SdtContentRow._C = {
    "w:tr": TableRow,
    "w:customXml": CustomXmlRow,
    "w:sdt": SdtRow,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  SdtContentCell._C = {
    "w:tc": TableCell,
    "w:customXml": CustomXmlCell,
    "w:sdt": SdtCell,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  SdtContentRunRuby._C = {
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  SdtContentRun._C = {
    "m:r": MRun,
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  SdtContentBlock._C = {
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  SdtEndCharProperties._C = {
    "w:rPr": RunProperties
  };
  SdtProperties._C = {
    "w:rPr": RunProperties,
    "w:alias": SdtAlias,
    "w:lock": Lock,
    "w:placeholder": SdtPlaceholder,
    "w:showingPlcHdr": ShowingPlaceholder,
    "w:dataBinding": DataBinding,
    "w15:dataBinding": W15DataBinding,
    "w:temporary": TemporarySdt,
    "w:id": SdtId,
    "w:tag": Tag,
    "w15:color": W15Color,
    "w15:appearance": W15Appearance,
    "w15:webExtensionLinked": W15WebExtensionLinked,
    "w15:webExtensionCreated": W15WebExtensionCreated,
    "w:equation": SdtContentEquation,
    "w:comboBox": SdtContentComboBox,
    "w:date": SdtContentDate,
    "w:docPartObj": SdtContentDocPartObject,
    "w:docPartList": SdtContentDocPartList,
    "w:dropDownList": SdtContentDropDownList,
    "w:picture": SdtContentPicture,
    "w:richText": SdtContentRichText,
    "w:text": SdtContentText,
    "w:citation": SdtContentCitation,
    "w:group": SdtContentGroup,
    "w:bibliography": SdtContentBibliography,
    "w14:entityPicker": W14EntityPickerEmpty,
    "w14:checkbox": W14SdtContentCheckBox,
    "w15:repeatingSection": W15SdtRepeatedSection,
    "w15:repeatingSectionItem": W15SdtRepeatedSectionItem
  };
  ListItem._D = {
    "w:displayText": new OxmlAttr("w:displayText", OxmlType.StringValue),
    "w:value": new OxmlAttr("w:value", OxmlType.StringValue)
  };
  Calendar._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, CalendarValuesArray)
  };
  SdtDateMappingType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DateFormatValuesArray)
  };
  RubyContentType._C = {
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  RubyBase._C = {
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  RubyContent._C = {
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  RubyProperties._C = {
    "w:rubyAlign": RubyAlign,
    "w:hps": PhoneticGuideTextFontSize,
    "w:hpsRaise": PhoneticGuideRaise,
    "w:hpsBaseText": PhoneticGuideBaseTextSize,
    "w:lid": LanguageId,
    "w:dirty": Dirty
  };
  LanguageId._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  PhoneticGuideRaise._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int16Value)
  };
  RubyAlign._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, RubyAlignValuesArray)
  };
  AltChunkProperties._C = {
    "w:matchSrc": MatchSource
  };
  ParagraphMarkRunPropertiesChange._C = {
    "w:rPr": PreviousParagraphMarkRunProperties
  };
  ParagraphMarkRunPropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  SectionPropertiesChange._C = {
    "w:sectPr": PreviousSectionProperties
  };
  SectionPropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  Column._D = {
    "w:w": new OxmlAttr("w:w", OxmlType.StringValue),
    "w:space": new OxmlAttr("w:space", OxmlType.StringValue)
  };
  Format._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  MaxLength._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int16Value)
  };
  TextBoxFormFieldType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TextBoxFormFieldValuesArray)
  };
  String255Type._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  DefaultDropDownListItemIndex._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  TextInput._C = {
    "w:type": TextBoxFormFieldType,
    "w:default": DefaultTextBoxFormFieldString,
    "w:maxLength": MaxLength,
    "w:format": Format
  };
  DropDownListFormField._C = {
    "w:result": DropDownListSelection,
    "w:default": DefaultDropDownListItemIndex,
    "w:listEntry": ListEntryFormField
  };
  CheckBox._C = {
    "w:size": FormFieldSize,
    "w:sizeAuto": AutomaticallySizeFormField,
    "w:default": DefaultCheckBoxFormFieldState,
    "w:checked": Checked
  };
  StatusText._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, InfoTextValuesArray),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  HelpText._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, InfoTextValuesArray),
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  MacroNameType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  FormFieldName._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  FormFieldData._C = {
    "w:name": FormFieldName,
    "w:enabled": Enabled,
    "w:calcOnExit": CalculateOnExit,
    "w:entryMacro": EntryMacro,
    "w:exitMacro": ExitMacro,
    "w:helpText": HelpText,
    "w:statusText": StatusText,
    "w:checkBox": CheckBox,
    "w:ddList": DropDownListFormField,
    "w:textInput": TextInput
  };
  SectionProperties._C = {
    "w:headerReference": HeaderReference,
    "w:footerReference": FooterReference,
    "w:footnotePr": FootnoteProperties,
    "w:endnotePr": EndnoteProperties,
    "w:type": SectionType,
    "w:pgSz": PageSize,
    "w:pgMar": PageMargin,
    "w:paperSrc": PaperSource,
    "w:pgBorders": PageBorders,
    "w:lnNumType": LineNumberType,
    "w:pgNumType": PageNumberType,
    "w:cols": Columns,
    "w:formProt": FormProtection,
    "w:vAlign": VerticalTextAlignmentOnPage,
    "w:noEndnote": NoEndnote,
    "w:titlePg": TitlePage,
    "w:textDirection": TextDirection,
    "w:bidi": BiDi,
    "w:rtlGutter": GutterOnRight,
    "w:docGrid": DocGrid,
    "w:printerSettings": PrinterSettingsReference,
    "w15:footnoteColumns": W15FootnoteColumns,
    "w:sectPrChange": SectionPropertiesChange
  };
  SectionProperties._D = {
    "w:rsidRPr": new OxmlAttr("w:rsidRPr", OxmlType.HexBinaryValue),
    "w:rsidDel": new OxmlAttr("w:rsidDel", OxmlType.HexBinaryValue),
    "w:rsidR": new OxmlAttr("w:rsidR", OxmlType.HexBinaryValue),
    "w:rsidSect": new OxmlAttr("w:rsidSect", OxmlType.HexBinaryValue)
  };
  ParagraphMarkRunProperties._C = {
    "w:ins": Inserted,
    "w:del": Deleted,
    "w:moveFrom": MoveFrom,
    "w:moveTo": MoveTo,
    "w14:conflictIns": W14ConflictInsertion,
    "w14:conflictDel": W14ConflictDeletion,
    "w:rStyle": RunStyle,
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:highlight": Highlight,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:rtl": RightToLeftText,
    "w:cs": ComplexScript,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish,
    "w14:glow": W14Glow,
    "w14:shadow": W14Shadow,
    "w14:reflection": W14Reflection,
    "w14:textOutline": W14TextOutlineEffect,
    "w14:textFill": W14FillTextEffect,
    "w14:scene3d": W14Scene3D,
    "w14:props3d": W14Properties3D,
    "w14:ligatures": W14Ligatures,
    "w14:numForm": W14NumberingFormat,
    "w14:numSpacing": W14NumberSpacing,
    "w14:stylisticSets": W14StylisticSets,
    "w14:cntxtAlts": W14ContextualAlternatives,
    "w:oMath": OfficeMath,
    "w:rPrChange": ParagraphMarkRunPropertiesChange
  };
  TabStop._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TabStopValuesArray),
    "w:leader": new OxmlAttr("w:leader", OxmlType.EnumValue, TabStopLeaderCharValuesArray),
    "w:pos": new OxmlAttr("w:pos", OxmlType.Int32Value)
  };
  NumberingChange._D = {
    "w:original": new OxmlAttr("w:original", OxmlType.StringValue),
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  NonNegativeDecimalNumberType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  NumberingLevelReference._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  PreviousParagraphMarkRunProperties._C = {
    "w:ins": Inserted,
    "w:del": Deleted,
    "w:moveFrom": MoveFrom,
    "w:moveTo": MoveTo,
    "w14:conflictIns": W14ConflictInsertion,
    "w14:conflictDel": W14ConflictDeletion,
    "w:rStyle": RunStyle,
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:highlight": Highlight,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:rtl": RightToLeftText,
    "w:cs": ComplexScript,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish,
    "w14:glow": W14Glow,
    "w14:shadow": W14Shadow,
    "w14:reflection": W14Reflection,
    "w14:textOutline": W14TextOutlineEffect,
    "w14:textFill": W14FillTextEffect,
    "w14:scene3d": W14Scene3D,
    "w14:props3d": W14Properties3D,
    "w14:ligatures": W14Ligatures,
    "w14:numForm": W14NumberingFormat,
    "w14:numSpacing": W14NumberSpacing,
    "w14:stylisticSets": W14StylisticSets,
    "w14:cntxtAlts": W14ContextualAlternatives,
    "w:oMath": OfficeMath
  };
  PreviousRunProperties._C = {
    "w:rStyle": RunStyle,
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:highlight": Highlight,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:rtl": RightToLeftText,
    "w:cs": ComplexScript,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish,
    "w14:glow": W14Glow,
    "w14:shadow": W14Shadow,
    "w14:reflection": W14Reflection,
    "w14:textOutline": W14TextOutlineEffect,
    "w14:textFill": W14FillTextEffect,
    "w14:scene3d": W14Scene3D,
    "w14:props3d": W14Properties3D,
    "w14:ligatures": W14Ligatures,
    "w14:numForm": W14NumberingFormat,
    "w14:numSpacing": W14NumberSpacing,
    "w14:stylisticSets": W14StylisticSets,
    "w14:cntxtAlts": W14ContextualAlternatives
  };
  ParagraphPropertiesExtended._C = {
    "w:pStyle": ParagraphStyleId,
    "w:keepNext": KeepNext,
    "w:keepLines": KeepLines,
    "w:pageBreakBefore": PageBreakBefore,
    "w:framePr": FrameProperties,
    "w:widowControl": WidowControl,
    "w:numPr": NumberingProperties,
    "w:suppressLineNumbers": SuppressLineNumbers,
    "w:pBdr": ParagraphBorders,
    "w:shd": Shading,
    "w:tabs": Tabs,
    "w:suppressAutoHyphens": SuppressAutoHyphens,
    "w:kinsoku": Kinsoku,
    "w:wordWrap": WordWrap,
    "w:overflowPunct": OverflowPunctuation,
    "w:topLinePunct": TopLinePunctuation,
    "w:autoSpaceDE": AutoSpaceDE,
    "w:autoSpaceDN": AutoSpaceDN,
    "w:bidi": BiDi,
    "w:adjustRightInd": AdjustRightIndent,
    "w:snapToGrid": SnapToGrid,
    "w:spacing": SpacingBetweenLines,
    "w:ind": Indentation,
    "w:contextualSpacing": ContextualSpacing,
    "w:mirrorIndents": MirrorIndents,
    "w:suppressOverlap": SuppressOverlap,
    "w:jc": Justification,
    "w:textDirection": TextDirection,
    "w:textAlignment": TextAlignment,
    "w:textboxTightWrap": TextBoxTightWrap,
    "w:outlineLvl": OutlineLevel,
    "w:divId": DivId,
    "w:cnfStyle": ConditionalFormatStyle
  };
  PreviousSectionProperties._C = {
    "w:footnotePr": FootnoteProperties,
    "w:endnotePr": EndnoteProperties,
    "w:type": SectionType,
    "w:pgSz": PageSize,
    "w:pgMar": PageMargin,
    "w:paperSrc": PaperSource,
    "w:pgBorders": PageBorders,
    "w:lnNumType": LineNumberType,
    "w:pgNumType": PageNumberType,
    "w:cols": Columns,
    "w:formProt": FormProtection,
    "w:vAlign": VerticalTextAlignmentOnPage,
    "w:noEndnote": NoEndnote,
    "w:titlePg": TitlePage,
    "w:textDirection": TextDirection,
    "w:bidi": BiDi,
    "w:rtlGutter": GutterOnRight,
    "w:docGrid": DocGrid,
    "w:printerSettings": PrinterSettingsReference,
    "w15:footnoteColumns": W15FootnoteColumns
  };
  PreviousSectionProperties._D = {
    "w:rsidRPr": new OxmlAttr("w:rsidRPr", OxmlType.HexBinaryValue),
    "w:rsidDel": new OxmlAttr("w:rsidDel", OxmlType.HexBinaryValue),
    "w:rsidR": new OxmlAttr("w:rsidR", OxmlType.HexBinaryValue),
    "w:rsidSect": new OxmlAttr("w:rsidSect", OxmlType.HexBinaryValue)
  };
  PreviousTableProperties._C = {
    "w:tblStyle": TableStyle,
    "w:tblpPr": TablePositionProperties,
    "w:tblOverlap": TableOverlap,
    "w:bidiVisual": BiDiVisual,
    "w:tblW": TableWidth,
    "w:jc": TableJustification,
    "w:tblCellSpacing": TableCellSpacing,
    "w:tblInd": TableIndentation,
    "w:tblBorders": TableBorders,
    "w:shd": Shading,
    "w:tblLayout": TableLayout,
    "w:tblCellMar": TableCellMarginDefault,
    "w:tblLook": TableLook,
    "w:tblCaption": TableCaption,
    "w:tblDescription": TableDescription
  };
  PreviousTableRowProperties._C = {
    "w:cnfStyle": ConditionalFormatStyle,
    "w:divId": DivId,
    "w:gridBefore": GridBefore,
    "w:gridAfter": GridAfter,
    "w:wBefore": WidthBeforeTableRow,
    "w:wAfter": WidthAfterTableRow,
    "w:trHeight": TableRowHeight,
    "w:hidden": Hidden,
    "w:cantSplit": CantSplit,
    "w:tblHeader": TableHeader,
    "w:tblCellSpacing": TableCellSpacing,
    "w:jc": TableJustification
  };
  PreviousTableCellProperties._C = {
    "w:cnfStyle": ConditionalFormatStyle,
    "w:tcW": TableCellWidth,
    "w:gridSpan": GridSpan,
    "w:hMerge": HorizontalMerge,
    "w:vMerge": VerticalMerge,
    "w:tcBorders": TableCellBorders,
    "w:shd": Shading,
    "w:noWrap": NoWrap,
    "w:tcMar": TableCellMargin,
    "w:textDirection": TextDirection,
    "w:tcFitText": TableCellFitText,
    "w:vAlign": TableCellVerticalAlignment,
    "w:hideMark": HideMark,
    "w:cellIns": CellInsertion,
    "w:cellDel": CellDeletion,
    "w:cellMerge": CellMerge
  };
  PreviousTablePropertyExceptions._C = {
    "w:tblW": TableWidth,
    "w:jc": TableJustification,
    "w:tblCellSpacing": TableCellSpacing,
    "w:tblInd": TableIndentation,
    "w:tblBorders": TableBorders,
    "w:shd": Shading,
    "w:tblLayout": TableLayout,
    "w:tblCellMar": TableCellMarginDefault,
    "w:tblLook": TableLook
  };
  GlossaryDocument._C = {
    "w:background": DocumentBackground,
    "w:docParts": DocParts
  };
  Document._C = {
    "w:background": DocumentBackground,
    "w:body": Body
  };
  Document._D = {
    "w:conformance": new OxmlAttr("w:conformance", OxmlType.EnumValue, DocumentConformanceArray)
  };
  Styles._C = {
    "w:docDefaults": DocDefaults,
    "w:latentStyles": LatentStyles,
    "w:style": Style
  };
  Numbering._C = {
    "w:numPicBullet": NumberingPictureBullet,
    "w:abstractNum": AbstractNum,
    "w:num": NumberingInstance,
    "w:numIdMacAtCleanup": NumberingIdMacAtCleanup
  };
  Fonts._C = {
    "w:font": Font
  };
  WebSettings._C = {
    "w:frameset": Frameset,
    "w:divs": Divs,
    "w:encoding": WebPageEncoding,
    "w:optimizeForBrowser": OptimizeForBrowser,
    "w:relyOnVML": RelyOnVML,
    "w:allowPNG": AllowPNG,
    "w:doNotRelyOnCSS": DoNotRelyOnCSS,
    "w:doNotSaveAsSingleFile": DoNotSaveAsSingleFile,
    "w:doNotOrganizeInFolder": DoNotOrganizeInFolder,
    "w:doNotUseLongFileNames": DoNotUseLongFileNames,
    "w:pixelsPerInch": PixelsPerInch,
    "w:targetScreenSz": TargetScreenSize
  };
  Settings._C = {
    "w:writeProtection": WriteProtection,
    "w:view": View,
    "w:zoom": Zoom,
    "w:removePersonalInformation": RemovePersonalInformation,
    "w:removeDateAndTime": RemoveDateAndTime,
    "w:doNotDisplayPageBoundaries": DoNotDisplayPageBoundaries,
    "w:displayBackgroundShape": DisplayBackgroundShape,
    "w:printPostScriptOverText": PrintPostScriptOverText,
    "w:printFractionalCharacterWidth": PrintFractionalCharacterWidth,
    "w:printFormsData": PrintFormsData,
    "w:embedTrueTypeFonts": EmbedTrueTypeFonts,
    "w:embedSystemFonts": EmbedSystemFonts,
    "w:saveSubsetFonts": SaveSubsetFonts,
    "w:saveFormsData": SaveFormsData,
    "w:mirrorMargins": MirrorMargins,
    "w:alignBordersAndEdges": AlignBorderAndEdges,
    "w:bordersDoNotSurroundHeader": BordersDoNotSurroundHeader,
    "w:bordersDoNotSurroundFooter": BordersDoNotSurroundFooter,
    "w:gutterAtTop": GutterAtTop,
    "w:hideSpellingErrors": HideSpellingErrors,
    "w:hideGrammaticalErrors": HideGrammaticalErrors,
    "w:activeWritingStyle": ActiveWritingStyle,
    "w:proofState": ProofState,
    "w:formsDesign": FormsDesign,
    "w:attachedTemplate": AttachedTemplate,
    "w:linkStyles": LinkStyles,
    "w:stylePaneFormatFilter": StylePaneFormatFilter,
    "w:stylePaneSortMethod": StylePaneSortMethods,
    "w:documentType": DocumentType,
    "w:mailMerge": MailMerge,
    "w:revisionView": RevisionView,
    "w:trackRevisions": TrackRevisions,
    "w:doNotTrackMoves": DoNotTrackMoves,
    "w:doNotTrackFormatting": DoNotTrackFormatting,
    "w:documentProtection": DocumentProtection,
    "w:autoFormatOverride": AutoFormatOverride,
    "w:styleLockTheme": StyleLockThemesPart,
    "w:styleLockQFSet": StyleLockStylesPart,
    "w:defaultTabStop": DefaultTabStop,
    "w:autoHyphenation": AutoHyphenation,
    "w:consecutiveHyphenLimit": ConsecutiveHyphenLimit,
    "w:hyphenationZone": HyphenationZone,
    "w:doNotHyphenateCaps": DoNotHyphenateCaps,
    "w:showEnvelope": ShowEnvelope,
    "w:summaryLength": SummaryLength,
    "w:clickAndTypeStyle": ClickAndTypeStyle,
    "w:defaultTableStyle": DefaultTableStyle,
    "w:evenAndOddHeaders": EvenAndOddHeaders,
    "w:bookFoldRevPrinting": BookFoldReversePrinting,
    "w:bookFoldPrinting": BookFoldPrinting,
    "w:bookFoldPrintingSheets": BookFoldPrintingSheets,
    "w:drawingGridHorizontalSpacing": DrawingGridHorizontalSpacing,
    "w:drawingGridVerticalSpacing": DrawingGridVerticalSpacing,
    "w:displayHorizontalDrawingGridEvery": DisplayHorizontalDrawingGrid,
    "w:displayVerticalDrawingGridEvery": DisplayVerticalDrawingGrid,
    "w:doNotUseMarginsForDrawingGridOrigin": DoNotUseMarginsForDrawingGridOrigin,
    "w:drawingGridHorizontalOrigin": DrawingGridHorizontalOrigin,
    "w:drawingGridVerticalOrigin": DrawingGridVerticalOrigin,
    "w:doNotShadeFormData": DoNotShadeFormData,
    "w:noPunctuationKerning": NoPunctuationKerning,
    "w:characterSpacingControl": CharacterSpacingControl,
    "w:printTwoOnOne": PrintTwoOnOne,
    "w:strictFirstAndLastChars": StrictFirstAndLastChars,
    "w:noLineBreaksAfter": NoLineBreaksAfterKinsoku,
    "w:noLineBreaksBefore": NoLineBreaksBeforeKinsoku,
    "w:savePreviewPicture": SavePreviewPicture,
    "w:doNotValidateAgainstSchema": DoNotValidateAgainstSchema,
    "w:saveInvalidXml": SaveInvalidXml,
    "w:ignoreMixedContent": IgnoreMixedContent,
    "w:alwaysShowPlaceholderText": AlwaysShowPlaceholderText,
    "w:doNotDemarcateInvalidXml": DoNotDemarcateInvalidXml,
    "w:saveXmlDataOnly": SaveXmlDataOnly,
    "w:useXSLTWhenSaving": UseXsltWhenSaving,
    "w:saveThroughXslt": SaveThroughXslt,
    "w:showXMLTags": ShowXmlTags,
    "w:alwaysMergeEmptyNamespace": AlwaysMergeEmptyNamespace,
    "w:updateFields": UpdateFieldsOnOpen,
    "w:hdrShapeDefaults": HeaderShapeDefaults,
    "w:footnotePr": FootnoteDocumentWideProperties,
    "w:endnotePr": EndnoteDocumentWideProperties,
    "w:compat": Compatibility,
    "w:docVars": DocumentVariables,
    "w:rsids": Rsids,
    "m:mathPr": MMathProperties,
    "w:uiCompat97To2003": UICompatibleWith97To2003,
    "w:attachedSchema": AttachedSchema,
    "w:themeFontLang": ThemeFontLanguages,
    "w:clrSchemeMapping": ColorSchemeMapping,
    "w:doNotIncludeSubdocsInStats": DoNotIncludeSubdocsInStats,
    "w:doNotAutoCompressPictures": DoNotAutoCompressPictures,
    "w:forceUpgrade": ForceUpgrade,
    "w:captions": Captions,
    "w:readModeInkLockDown": ReadModeInkLockDown,
    "sl:schemaLibrary": SlSchemaLibrary,
    "w:shapeDefaults": ShapeDefaults,
    "w:decimalSymbol": DecimalSymbol,
    "w:listSeparator": ListSeparator,
    "w14:docId": W14DocumentId,
    "w14:discardImageEditingData": W14DiscardImageEditingData,
    "w14:defaultImageDpi": W14DefaultImageDpi,
    "w14:conflictMode": W14ConflictMode,
    "w15:chartTrackingRefBased": W15ChartTrackingRefBased,
    "w15:docId": W15PersistentDocumentId
  };
  HeaderFooterType._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Footer._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Header._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Endnotes._C = {
    "w:endnote": Endnote
  };
  Footnotes._C = {
    "w:footnote": Footnote
  };
  Comments._C = {
    "w:comment": Comment
  };
  TextBoxContent._C = {
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Recipients._C = {
    "w:recipientData": RecipientData
  };
  DocGrid._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, DocGridValuesArray),
    "w:linePitch": new OxmlAttr("w:linePitch", OxmlType.Int32Value),
    "w:charSpace": new OxmlAttr("w:charSpace", OxmlType.Int32Value)
  };
  VerticalTextAlignmentOnPage._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, VerticalJustificationValuesArray)
  };
  Columns._C = {
    "w:col": Column
  };
  Columns._D = {
    "w:equalWidth": new OxmlAttr("w:equalWidth", OxmlType.OnOffValue),
    "w:space": new OxmlAttr("w:space", OxmlType.StringValue),
    "w:num": new OxmlAttr("w:num", OxmlType.Int16Value),
    "w:sep": new OxmlAttr("w:sep", OxmlType.OnOffValue)
  };
  PageNumberType._D = {
    "w:fmt": new OxmlAttr("w:fmt", OxmlType.EnumValue, NumberFormatValuesArray),
    "w:start": new OxmlAttr("w:start", OxmlType.Int32Value),
    "w:chapStyle": new OxmlAttr("w:chapStyle", OxmlType.ByteValue),
    "w:chapSep": new OxmlAttr("w:chapSep", OxmlType.EnumValue, ChapterSeparatorValuesArray)
  };
  LineNumberType._D = {
    "w:countBy": new OxmlAttr("w:countBy", OxmlType.Int16Value),
    "w:start": new OxmlAttr("w:start", OxmlType.Int16Value),
    "w:distance": new OxmlAttr("w:distance", OxmlType.StringValue),
    "w:restart": new OxmlAttr("w:restart", OxmlType.EnumValue, LineNumberRestartValuesArray)
  };
  PageBorders._C = {
    "w:top": TopBorder,
    "w:left": LeftBorder,
    "w:bottom": BottomBorder,
    "w:right": RightBorder
  };
  PageBorders._D = {
    "w:zOrder": new OxmlAttr("w:zOrder", OxmlType.EnumValue, PageBorderZOrderValuesArray),
    "w:display": new OxmlAttr("w:display", OxmlType.EnumValue, PageBorderDisplayValuesArray),
    "w:offsetFrom": new OxmlAttr("w:offsetFrom", OxmlType.EnumValue, PageBorderOffsetValuesArray)
  };
  PaperSource._D = {
    "w:first": new OxmlAttr("w:first", OxmlType.UInt16Value),
    "w:other": new OxmlAttr("w:other", OxmlType.UInt16Value)
  };
  PageMargin._D = {
    "w:top": new OxmlAttr("w:top", OxmlType.Int32Value),
    "w:right": new OxmlAttr("w:right", OxmlType.UInt32Value),
    "w:bottom": new OxmlAttr("w:bottom", OxmlType.Int32Value),
    "w:left": new OxmlAttr("w:left", OxmlType.UInt32Value),
    "w:header": new OxmlAttr("w:header", OxmlType.UInt32Value),
    "w:footer": new OxmlAttr("w:footer", OxmlType.UInt32Value),
    "w:gutter": new OxmlAttr("w:gutter", OxmlType.UInt32Value)
  };
  PageSize._D = {
    "w:w": new OxmlAttr("w:w", OxmlType.UInt32Value),
    "w:h": new OxmlAttr("w:h", OxmlType.UInt32Value),
    "w:orient": new OxmlAttr("w:orient", OxmlType.EnumValue, PageOrientationValuesArray),
    "w:code": new OxmlAttr("w:code", OxmlType.UInt16Value)
  };
  SectionType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, SectionMarkValuesArray)
  };
  EndnoteProperties._C = {
    "w:pos": EndnotePosition,
    "w:numFmt": NumberingFormat,
    "w:numStart": NumberingStart,
    "w:numRestart": NumberingRestart
  };
  FootnoteProperties._C = {
    "w:pos": FootnotePosition,
    "w:numFmt": NumberingFormat,
    "w:numStart": NumberingStart,
    "w:numRestart": NumberingRestart
  };
  TableLook._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.HexBinaryValue),
    "w:firstRow": new OxmlAttr("w:firstRow", OxmlType.OnOffValue),
    "w:lastRow": new OxmlAttr("w:lastRow", OxmlType.OnOffValue),
    "w:firstColumn": new OxmlAttr("w:firstColumn", OxmlType.OnOffValue),
    "w:lastColumn": new OxmlAttr("w:lastColumn", OxmlType.OnOffValue),
    "w:noHBand": new OxmlAttr("w:noHBand", OxmlType.OnOffValue),
    "w:noVBand": new OxmlAttr("w:noVBand", OxmlType.OnOffValue)
  };
  AltChunk._C = {
    "w:altChunkPr": AltChunkProperties
  };
  AltChunk._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  NumberingRestart._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, RestartNumberValuesArray)
  };
  NumberingStart._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt16Value)
  };
  TableCellMarginDefault._C = {
    "w:top": TopMargin,
    "w:left": TableCellLeftMargin,
    "w:start": StartMargin,
    "w:bottom": BottomMargin,
    "w:right": TableCellRightMargin,
    "w:end": EndMargin
  };
  TableLayout._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, TableLayoutValuesArray)
  };
  TableBorders._C = {
    "w:top": TopBorder,
    "w:left": LeftBorder,
    "w:start": StartBorder,
    "w:bottom": BottomBorder,
    "w:right": RightBorder,
    "w:end": EndBorder,
    "w:insideH": InsideHorizontalBorder,
    "w:insideV": InsideVerticalBorder
  };
  TableIndentation._D = {
    "w:w": new OxmlAttr("w:w", OxmlType.Int32Value),
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, TableWidthUnitValuesArray)
  };
  UnsignedDecimalNumberMax3Type._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  TableOverlap._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TableOverlapValuesArray)
  };
  TablePositionProperties._D = {
    "w:leftFromText": new OxmlAttr("w:leftFromText", OxmlType.Int16Value),
    "w:rightFromText": new OxmlAttr("w:rightFromText", OxmlType.Int16Value),
    "w:topFromText": new OxmlAttr("w:topFromText", OxmlType.Int16Value),
    "w:bottomFromText": new OxmlAttr("w:bottomFromText", OxmlType.Int16Value),
    "w:vertAnchor": new OxmlAttr("w:vertAnchor", OxmlType.EnumValue, VerticalAnchorValuesArray),
    "w:horzAnchor": new OxmlAttr("w:horzAnchor", OxmlType.EnumValue, HorizontalAnchorValuesArray),
    "w:tblpXSpec": new OxmlAttr("w:tblpXSpec", OxmlType.EnumValue, HorizontalAlignmentValuesArray),
    "w:tblpX": new OxmlAttr("w:tblpX", OxmlType.Int32Value),
    "w:tblpYSpec": new OxmlAttr("w:tblpYSpec", OxmlType.EnumValue, VerticalAlignmentValuesArray),
    "w:tblpY": new OxmlAttr("w:tblpY", OxmlType.Int32Value)
  };
  TableJustification._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TableRowAlignmentValuesArray)
  };
  TableRowHeight._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt32Value),
    "w:hRule": new OxmlAttr("w:hRule", OxmlType.EnumValue, HeightRuleValuesArray)
  };
  DivId._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  TableCellVerticalAlignment._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TableVerticalAlignmentValuesArray)
  };
  TableCellMargin._C = {
    "w:top": TopMargin,
    "w:left": LeftMargin,
    "w:start": StartMargin,
    "w:bottom": BottomMargin,
    "w:right": RightMargin,
    "w:end": EndMargin
  };
  OnOffOnlyType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, OnOffOnlyValuesArray)
  };
  TableCellBorders._C = {
    "w:top": TopBorder,
    "w:left": LeftBorder,
    "w:start": StartBorder,
    "w:bottom": BottomBorder,
    "w:right": RightBorder,
    "w:end": EndBorder,
    "w:insideH": InsideHorizontalBorder,
    "w:insideV": InsideVerticalBorder,
    "w:tl2br": TopLeftToBottomRightCellBorder,
    "w:tr2bl": TopRightToBottomLeftCellBorder
  };
  VerticalMerge._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MergedCellValuesArray)
  };
  HorizontalMerge._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, MergedCellValuesArray)
  };
  TableWidthType._D = {
    "w:w": new OxmlAttr("w:w", OxmlType.StringValue),
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, TableWidthUnitValuesArray)
  };
  ConditionalFormatStyle._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:firstRow": new OxmlAttr("w:firstRow", OxmlType.OnOffValue),
    "w:lastRow": new OxmlAttr("w:lastRow", OxmlType.OnOffValue),
    "w:firstColumn": new OxmlAttr("w:firstColumn", OxmlType.OnOffValue),
    "w:lastColumn": new OxmlAttr("w:lastColumn", OxmlType.OnOffValue),
    "w:oddVBand": new OxmlAttr("w:oddVBand", OxmlType.OnOffValue),
    "w:evenVBand": new OxmlAttr("w:evenVBand", OxmlType.OnOffValue),
    "w:oddHBand": new OxmlAttr("w:oddHBand", OxmlType.OnOffValue),
    "w:evenHBand": new OxmlAttr("w:evenHBand", OxmlType.OnOffValue),
    "w:firstRowFirstColumn": new OxmlAttr("w:firstRowFirstColumn", OxmlType.OnOffValue),
    "w:firstRowLastColumn": new OxmlAttr("w:firstRowLastColumn", OxmlType.OnOffValue),
    "w:lastRowFirstColumn": new OxmlAttr("w:lastRowFirstColumn", OxmlType.OnOffValue),
    "w:lastRowLastColumn": new OxmlAttr("w:lastRowLastColumn", OxmlType.OnOffValue)
  };
  RelationshipType._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  BidirectionalEmbedding._C = {
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  BidirectionalEmbedding._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DirectionValuesArray)
  };
  BidirectionalOverride._C = {
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  BidirectionalOverride._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, DirectionValuesArray)
  };
  Hyperlink._C = {
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  Hyperlink._D = {
    "w:tgtFrame": new OxmlAttr("w:tgtFrame", OxmlType.StringValue),
    "w:tooltip": new OxmlAttr("w:tooltip", OxmlType.StringValue),
    "w:docLocation": new OxmlAttr("w:docLocation", OxmlType.StringValue),
    "w:history": new OxmlAttr("w:history", OxmlType.OnOffValue),
    "w:anchor": new OxmlAttr("w:anchor", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SimpleField._C = {
    "w:fldData": FieldData,
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  SimpleField._D = {
    "w:instr": new OxmlAttr("w:instr", OxmlType.StringValue),
    "w:fldLock": new OxmlAttr("w:fldLock", OxmlType.OnOffValue),
    "w:dirty": new OxmlAttr("w:dirty", OxmlType.OnOffValue)
  };
  CustomXmlRun._C = {
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  SdtCell._C = {
    "w:sdtContent": SdtContentCell,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd
  };
  CustomXmlCell._C = {
    "w:tc": TableCell,
    "w:customXml": CustomXmlCell,
    "w:sdt": SdtCell,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  TableCell._C = {
    "w:tcPr": TableCellProperties,
    "w:altChunk": AltChunk,
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  SdtRow._C = {
    "w:sdtContent": SdtContentRow,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd
  };
  CustomXmlRow._C = {
    "w:tr": TableRow,
    "w:customXml": CustomXmlRow,
    "w:sdt": SdtRow,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  TableRow._C = {
    "w:tblPrEx": TablePropertyExceptions,
    "w:trPr": TableRowProperties,
    "w:tc": TableCell,
    "w:customXml": CustomXmlCell,
    "w:sdt": SdtCell,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  TableRow._D = {
    "w:rsidRPr": new OxmlAttr("w:rsidRPr", OxmlType.HexBinaryValue),
    "w:rsidR": new OxmlAttr("w:rsidR", OxmlType.HexBinaryValue),
    "w:rsidDel": new OxmlAttr("w:rsidDel", OxmlType.HexBinaryValue),
    "w:rsidTr": new OxmlAttr("w:rsidTr", OxmlType.HexBinaryValue),
    "w14:paraId": new OxmlAttr("w14:paraId", OxmlType.HexBinaryValue),
    "w14:textId": new OxmlAttr("w14:textId", OxmlType.HexBinaryValue)
  };
  Table._C = {
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:tblPr": TableProperties,
    "w:tblGrid": TableGrid,
    "w:tr": TableRow,
    "w:customXml": CustomXmlRow,
    "w:sdt": SdtRow,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  Paragraph._C = {
    "w:pPr": ParagraphProperties,
    "w:customXml": CustomXmlRun,
    "w:fldSimple": SimpleField,
    "w:hyperlink": Hyperlink,
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding,
    "w:subDoc": SubDocumentReference
  };
  Paragraph._D = {
    "w:rsidRPr": new OxmlAttr("w:rsidRPr", OxmlType.HexBinaryValue),
    "w:rsidR": new OxmlAttr("w:rsidR", OxmlType.HexBinaryValue),
    "w:rsidDel": new OxmlAttr("w:rsidDel", OxmlType.HexBinaryValue),
    "w:rsidP": new OxmlAttr("w:rsidP", OxmlType.HexBinaryValue),
    "w:rsidRDefault": new OxmlAttr("w:rsidRDefault", OxmlType.HexBinaryValue),
    "w14:paraId": new OxmlAttr("w14:paraId", OxmlType.HexBinaryValue),
    "w14:textId": new OxmlAttr("w14:textId", OxmlType.HexBinaryValue),
    "w14:noSpellErr": new OxmlAttr("w14:noSpellErr", OxmlType.OnOffValue)
  };
  SdtBlock._C = {
    "w:sdtContent": SdtContentBlock,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd
  };
  CustomXmlBlock._C = {
    "w:customXml": CustomXmlBlock,
    "w:sdt": SdtBlock,
    "w:p": Paragraph,
    "w:tbl": Table,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion
  };
  SdtRun._C = {
    "w:sdtContent": SdtContentRun,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd
  };
  ContentPart._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  RunTrackChangeType._C = {
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding
  };
  RunTrackChangeType._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  MoveToRun._C = {
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding
  };
  MoveFromRun._C = {
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding
  };
  DeletedRun._C = {
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding
  };
  InsertedRun._C = {
    "w:sdt": SdtRun,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun,
    "w:r": Run,
    "w:bdo": BidirectionalOverride,
    "w:dir": BidirectionalEmbedding
  };
  PermEnd._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.Int32Value),
    "w:displacedByCustomXml": new OxmlAttr("w:displacedByCustomXml", OxmlType.EnumValue, DisplacedByCustomXmlValuesArray)
  };
  PermStart._D = {
    "w:edGrp": new OxmlAttr("w:edGrp", OxmlType.EnumValue, RangePermissionEditingGroupValuesArray),
    "w:ed": new OxmlAttr("w:ed", OxmlType.StringValue),
    "w:colFirst": new OxmlAttr("w:colFirst", OxmlType.Int32Value),
    "w:colLast": new OxmlAttr("w:colLast", OxmlType.Int32Value),
    "w:id": new OxmlAttr("w:id", OxmlType.Int32Value),
    "w:displacedByCustomXml": new OxmlAttr("w:displacedByCustomXml", OxmlType.EnumValue, DisplacedByCustomXmlValuesArray)
  };
  ProofError._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, ProofingErrorValuesArray)
  };
  SdtRunRuby._C = {
    "w:sdtContent": SdtContentRunRuby,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd
  };
  Run._C = {
    "w:rPr": RunProperties,
    "w:br": Break,
    "w:t": Text,
    "w:delText": DeletedText,
    "w:instrText": FieldCode,
    "w:delInstrText": DeletedFieldCode,
    "w:noBreakHyphen": NoBreakHyphen,
    "w:softHyphen": SoftHyphen,
    "w:dayShort": DayShort,
    "w:monthShort": MonthShort,
    "w:yearShort": YearShort,
    "w:dayLong": DayLong,
    "w:monthLong": MonthLong,
    "w:yearLong": YearLong,
    "w:annotationRef": AnnotationReferenceMark,
    "w:footnoteRef": FootnoteReferenceMark,
    "w:endnoteRef": EndnoteReferenceMark,
    "w:separator": SeparatorMark,
    "w:continuationSeparator": ContinuationSeparatorMark,
    "w:sym": SymbolChar,
    "w:pgNum": PageNumber,
    "w:cr": CarriageReturn,
    "w:tab": TabChar,
    "w:object": EmbeddedObject,
    "w:pict": Picture,
    "w:fldChar": FieldChar,
    "w:ruby": Ruby,
    "w:footnoteReference": FootnoteReference,
    "w:endnoteReference": EndnoteReference,
    "w:commentReference": CommentReference,
    "w:drawing": Drawing,
    "w:ptab": PositionalTab,
    "w:lastRenderedPageBreak": LastRenderedPageBreak
  };
  Run._D = {
    "w:rsidRPr": new OxmlAttr("w:rsidRPr", OxmlType.HexBinaryValue),
    "w:rsidDel": new OxmlAttr("w:rsidDel", OxmlType.HexBinaryValue),
    "w:rsidR": new OxmlAttr("w:rsidR", OxmlType.HexBinaryValue)
  };
  HyperlinkRuby._C = {
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  HyperlinkRuby._D = {
    "w:tgtFrame": new OxmlAttr("w:tgtFrame", OxmlType.StringValue),
    "w:tooltip": new OxmlAttr("w:tooltip", OxmlType.StringValue),
    "w:docLocation": new OxmlAttr("w:docLocation", OxmlType.StringValue),
    "w:history": new OxmlAttr("w:history", OxmlType.OnOffValue),
    "w:anchor": new OxmlAttr("w:anchor", OxmlType.StringValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SimpleFieldRuby._C = {
    "w:fldData": FieldData,
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  SimpleFieldRuby._D = {
    "w:instr": new OxmlAttr("w:instr", OxmlType.StringValue),
    "w:fldLock": new OxmlAttr("w:fldLock", OxmlType.OnOffValue),
    "w:dirty": new OxmlAttr("w:dirty", OxmlType.OnOffValue)
  };
  CustomXmlRuby._C = {
    "w:customXml": CustomXmlRuby,
    "w:fldSimple": SimpleFieldRuby,
    "w:hyperlink": HyperlinkRuby,
    "w:r": Run,
    "w:sdt": SdtRunRuby,
    "w:proofErr": ProofError,
    "w:permStart": PermStart,
    "w:permEnd": PermEnd,
    "w:bookmarkStart": BookmarkStart,
    "w:bookmarkEnd": BookmarkEnd,
    "w:commentRangeStart": CommentRangeStart,
    "w:commentRangeEnd": CommentRangeEnd,
    "w:moveFromRangeStart": MoveFromRangeStart,
    "w:moveFromRangeEnd": MoveFromRangeEnd,
    "w:moveToRangeStart": MoveToRangeStart,
    "w:moveToRangeEnd": MoveToRangeEnd,
    "w:customXmlInsRangeStart": CustomXmlInsRangeStart,
    "w:customXmlInsRangeEnd": CustomXmlInsRangeEnd,
    "w:customXmlDelRangeStart": CustomXmlDelRangeStart,
    "w:customXmlDelRangeEnd": CustomXmlDelRangeEnd,
    "w:customXmlMoveFromRangeStart": CustomXmlMoveFromRangeStart,
    "w:customXmlMoveFromRangeEnd": CustomXmlMoveFromRangeEnd,
    "w:customXmlMoveToRangeStart": CustomXmlMoveToRangeStart,
    "w:customXmlMoveToRangeEnd": CustomXmlMoveToRangeEnd,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w:ins": InsertedRun,
    "w:del": DeletedRun,
    "w:moveFrom": MoveFromRun,
    "w:moveTo": MoveToRun,
    "w:contentPart": ContentPart,
    "w14:conflictIns": W14RunConflictInsertion,
    "w14:conflictDel": W14RunConflictDeletion,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "m:acc": MAccent,
    "m:bar": MBar,
    "m:box": MBox,
    "m:borderBox": MBorderBox,
    "m:d": MDelimiter,
    "m:eqArr": MEquationArray,
    "m:f": MFraction,
    "m:func": MMathFunction,
    "m:groupChr": MGroupChar,
    "m:limLow": MLimitLower,
    "m:limUpp": MLimitUpper,
    "m:m": MMatrix,
    "m:nary": MNary,
    "m:phant": MPhantom,
    "m:rad": MRadical,
    "m:sPre": MPreSubSuper,
    "m:sSub": MSubscript,
    "m:sSubSup": MSubSuperscript,
    "m:sSup": MSuperscript,
    "m:r": MRun
  };
  MathControlMoveType._C = {
    "w:rPr": RunProperties,
    "w:ins": InsertedMathControl,
    "w:del": DeletedMathControl
  };
  MathControlMoveType._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  MoveToMathControl._C = {
    "w:rPr": RunProperties,
    "w:ins": InsertedMathControl,
    "w:del": DeletedMathControl
  };
  MoveFromMathControl._C = {
    "w:rPr": RunProperties,
    "w:ins": InsertedMathControl,
    "w:del": DeletedMathControl
  };
  DeletedMathControl._C = {
    "w:rPr": RunProperties
  };
  DeletedMathControl._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  InsertedMathControl._C = {
    "w:rPr": RunProperties,
    "w:del": DeletedMathControl
  };
  InsertedMathControl._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  RunProperties._C = {
    "w:rStyle": RunStyle,
    "w:rFonts": RunFonts,
    "w:b": Bold,
    "w:bCs": BoldComplexScript,
    "w:i": Italic,
    "w:iCs": ItalicComplexScript,
    "w:caps": Caps,
    "w:smallCaps": SmallCaps,
    "w:strike": Strike,
    "w:dstrike": DoubleStrike,
    "w:outline": Outline,
    "w:shadow": Shadow,
    "w:emboss": Emboss,
    "w:imprint": Imprint,
    "w:noProof": NoProof,
    "w:snapToGrid": SnapToGrid,
    "w:vanish": Vanish,
    "w:webHidden": WebHidden,
    "w:color": Color,
    "w:spacing": Spacing,
    "w:w": CharacterScale,
    "w:kern": Kern,
    "w:position": Position,
    "w:sz": FontSize,
    "w:szCs": FontSizeComplexScript,
    "w:highlight": Highlight,
    "w:u": Underline,
    "w:effect": TextEffect,
    "w:bdr": Border,
    "w:shd": Shading,
    "w:fitText": FitText,
    "w:vertAlign": VerticalTextAlignment,
    "w:rtl": RightToLeftText,
    "w:cs": ComplexScript,
    "w:em": Emphasis,
    "w:lang": Languages,
    "w:eastAsianLayout": EastAsianLayout,
    "w:specVanish": SpecVanish,
    "w14:glow": W14Glow,
    "w14:shadow": W14Shadow,
    "w14:reflection": W14Reflection,
    "w14:textOutline": W14TextOutlineEffect,
    "w14:textFill": W14FillTextEffect,
    "w14:scene3d": W14Scene3D,
    "w14:props3d": W14Properties3D,
    "w14:ligatures": W14Ligatures,
    "w14:numForm": W14NumberingFormat,
    "w14:numSpacing": W14NumberSpacing,
    "w14:stylisticSets": W14StylisticSets,
    "w14:cntxtAlts": W14ContextualAlternatives,
    "w:rPrChange": RunPropertiesChange
  };
  RunPropertiesChange._C = {
    "w:rPr": PreviousRunProperties
  };
  RunPropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  EastAsianLayout._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.Int32Value),
    "w:combine": new OxmlAttr("w:combine", OxmlType.OnOffValue),
    "w:combineBrackets": new OxmlAttr("w:combineBrackets", OxmlType.EnumValue, CombineBracketValuesArray),
    "w:vert": new OxmlAttr("w:vert", OxmlType.OnOffValue),
    "w:vertCompress": new OxmlAttr("w:vertCompress", OxmlType.OnOffValue)
  };
  LanguageType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:eastAsia": new OxmlAttr("w:eastAsia", OxmlType.StringValue),
    "w:bidi": new OxmlAttr("w:bidi", OxmlType.StringValue)
  };
  Emphasis._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, EmphasisMarkValuesArray)
  };
  VerticalTextAlignment._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, VerticalPositionValuesArray)
  };
  FitText._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt32Value),
    "w:id": new OxmlAttr("w:id", OxmlType.Int32Value)
  };
  BorderType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, BorderValuesArray),
    "w:color": new OxmlAttr("w:color", OxmlType.StringValue),
    "w:themeColor": new OxmlAttr("w:themeColor", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeTint": new OxmlAttr("w:themeTint", OxmlType.StringValue),
    "w:themeShade": new OxmlAttr("w:themeShade", OxmlType.StringValue),
    "w:sz": new OxmlAttr("w:sz", OxmlType.UInt32Value),
    "w:space": new OxmlAttr("w:space", OxmlType.UInt32Value),
    "w:shadow": new OxmlAttr("w:shadow", OxmlType.OnOffValue),
    "w:frame": new OxmlAttr("w:frame", OxmlType.OnOffValue)
  };
  TextEffect._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TextEffectValuesArray)
  };
  Underline._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, UnderlineValuesArray),
    "w:color": new OxmlAttr("w:color", OxmlType.StringValue),
    "w:themeColor": new OxmlAttr("w:themeColor", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeTint": new OxmlAttr("w:themeTint", OxmlType.StringValue),
    "w:themeShade": new OxmlAttr("w:themeShade", OxmlType.StringValue)
  };
  Highlight._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, HighlightColorValuesArray)
  };
  HpsMeasureType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  Position._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  Kern._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.UInt32Value)
  };
  CharacterScale._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.IntegerValue)
  };
  Spacing._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  Color._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue),
    "w:themeColor": new OxmlAttr("w:themeColor", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeTint": new OxmlAttr("w:themeTint", OxmlType.StringValue),
    "w:themeShade": new OxmlAttr("w:themeShade", OxmlType.StringValue)
  };
  RunFonts._D = {
    "w:hint": new OxmlAttr("w:hint", OxmlType.EnumValue, FontTypeHintValuesArray),
    "w:ascii": new OxmlAttr("w:ascii", OxmlType.StringValue),
    "w:hAnsi": new OxmlAttr("w:hAnsi", OxmlType.StringValue),
    "w:eastAsia": new OxmlAttr("w:eastAsia", OxmlType.StringValue),
    "w:cs": new OxmlAttr("w:cs", OxmlType.StringValue),
    "w:asciiTheme": new OxmlAttr("w:asciiTheme", OxmlType.EnumValue, ThemeFontValuesArray),
    "w:hAnsiTheme": new OxmlAttr("w:hAnsiTheme", OxmlType.EnumValue, ThemeFontValuesArray),
    "w:eastAsiaTheme": new OxmlAttr("w:eastAsiaTheme", OxmlType.EnumValue, ThemeFontValuesArray),
    "w:cstheme": new OxmlAttr("w:cstheme", OxmlType.EnumValue, ThemeFontValuesArray)
  };
  String253Type._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  PositionalTab._D = {
    "w:alignment": new OxmlAttr("w:alignment", OxmlType.EnumValue, AbsolutePositionTabAlignmentValuesArray),
    "w:relativeTo": new OxmlAttr("w:relativeTo", OxmlType.EnumValue, AbsolutePositionTabPositioningBaseValuesArray),
    "w:leader": new OxmlAttr("w:leader", OxmlType.EnumValue, AbsolutePositionTabLeaderCharValuesArray)
  };
  Drawing._C = {
    "wp:anchor": WpAnchor,
    "wp:inline": WpInline
  };
  FootnoteEndnoteReferenceType._D = {
    "w:customMarkFollows": new OxmlAttr("w:customMarkFollows", OxmlType.OnOffValue),
    "w:id": new OxmlAttr("w:id", OxmlType.IntegerValue)
  };
  Ruby._C = {
    "w:rubyPr": RubyProperties,
    "w:rt": RubyContent,
    "w:rubyBase": RubyBase
  };
  FieldChar._C = {
    "w:fldData": FieldData,
    "w:ffData": FormFieldData,
    "w:numberingChange": NumberingChange
  };
  FieldChar._D = {
    "w:fldCharType": new OxmlAttr("w:fldCharType", OxmlType.EnumValue, FieldCharValuesArray),
    "w:fldLock": new OxmlAttr("w:fldLock", OxmlType.OnOffValue),
    "w:dirty": new OxmlAttr("w:dirty", OxmlType.OnOffValue)
  };
  Picture._C = {
    "v:group": VGroup,
    "v:image": VImageFile,
    "v:line": VLine,
    "v:oval": VOval,
    "v:polyline": VPolyLine,
    "v:rect": VRectangle,
    "v:roundrect": VRoundRectangle,
    "v:shape": VShape,
    "v:shapetype": VShapetype,
    "v:arc": VArc,
    "v:curve": VCurve,
    "o:OLEObject": OOleObject,
    "w:movie": MovieReference,
    "w:control": Control
  };
  Picture._D = {
    "w14:anchorId": new OxmlAttr("w14:anchorId", OxmlType.HexBinaryValue)
  };
  EmbeddedObject._C = {
    "v:group": VGroup,
    "v:image": VImageFile,
    "v:line": VLine,
    "v:oval": VOval,
    "v:polyline": VPolyLine,
    "v:rect": VRectangle,
    "v:roundrect": VRoundRectangle,
    "v:shape": VShape,
    "v:shapetype": VShapetype,
    "v:arc": VArc,
    "v:curve": VCurve,
    "o:OLEObject": OOleObject,
    "w:drawing": Drawing,
    "w:control": Control,
    "w:objectEmbed": ObjectEmbed,
    "w:objectLink": ObjectLink
  };
  EmbeddedObject._D = {
    "w:dxaOrig": new OxmlAttr("w:dxaOrig", OxmlType.StringValue),
    "w:dyaOrig": new OxmlAttr("w:dyaOrig", OxmlType.StringValue),
    "w14:anchorId": new OxmlAttr("w14:anchorId", OxmlType.HexBinaryValue)
  };
  SymbolChar._D = {
    "w:font": new OxmlAttr("w:font", OxmlType.StringValue),
    "w:char": new OxmlAttr("w:char", OxmlType.HexBinaryValue)
  };
  TextType._D = {
    "xml:space": new OxmlAttr("xml:space", OxmlType.EnumValue, SpaceProcessingModeValuesArray)
  };
  Break._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, BreakValuesArray),
    "w:clear": new OxmlAttr("w:clear", OxmlType.EnumValue, BreakTextRestartLocationValuesArray)
  };
  HeaderFooterReferenceType._D = {
    "w:type": new OxmlAttr("w:type", OxmlType.EnumValue, HeaderFooterValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ParagraphPropertiesChange._C = {
    "w:pPr": ParagraphPropertiesExtended
  };
  ParagraphPropertiesChange._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  DecimalNumberType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.Int32Value)
  };
  TextBoxTightWrap._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TextBoxTightWrapValuesArray)
  };
  TextAlignment._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, VerticalTextAlignmentValuesArray)
  };
  TextDirection._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, TextDirectionValuesArray)
  };
  Justification._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, JustificationValuesArray)
  };
  Indentation._D = {
    "w:left": new OxmlAttr("w:left", OxmlType.StringValue),
    "w:start": new OxmlAttr("w:start", OxmlType.StringValue),
    "w:leftChars": new OxmlAttr("w:leftChars", OxmlType.Int32Value),
    "w:startChars": new OxmlAttr("w:startChars", OxmlType.Int32Value),
    "w:right": new OxmlAttr("w:right", OxmlType.StringValue),
    "w:end": new OxmlAttr("w:end", OxmlType.StringValue),
    "w:rightChars": new OxmlAttr("w:rightChars", OxmlType.Int32Value),
    "w:endChars": new OxmlAttr("w:endChars", OxmlType.Int32Value),
    "w:hanging": new OxmlAttr("w:hanging", OxmlType.StringValue),
    "w:hangingChars": new OxmlAttr("w:hangingChars", OxmlType.Int32Value),
    "w:firstLine": new OxmlAttr("w:firstLine", OxmlType.StringValue),
    "w:firstLineChars": new OxmlAttr("w:firstLineChars", OxmlType.Int32Value)
  };
  SpacingBetweenLines._D = {
    "w:before": new OxmlAttr("w:before", OxmlType.StringValue),
    "w:beforeLines": new OxmlAttr("w:beforeLines", OxmlType.Int32Value),
    "w:beforeAutospacing": new OxmlAttr("w:beforeAutospacing", OxmlType.OnOffValue),
    "w:after": new OxmlAttr("w:after", OxmlType.StringValue),
    "w:afterLines": new OxmlAttr("w:afterLines", OxmlType.Int32Value),
    "w:afterAutospacing": new OxmlAttr("w:afterAutospacing", OxmlType.OnOffValue),
    "w:line": new OxmlAttr("w:line", OxmlType.StringValue),
    "w:lineRule": new OxmlAttr("w:lineRule", OxmlType.EnumValue, LineSpacingRuleValuesArray)
  };
  Tabs._C = {
    "w:tab": TabStop
  };
  Shading._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.EnumValue, ShadingPatternValuesArray),
    "w:color": new OxmlAttr("w:color", OxmlType.StringValue),
    "w:themeColor": new OxmlAttr("w:themeColor", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeTint": new OxmlAttr("w:themeTint", OxmlType.StringValue),
    "w:themeShade": new OxmlAttr("w:themeShade", OxmlType.StringValue),
    "w:fill": new OxmlAttr("w:fill", OxmlType.StringValue),
    "w:themeFill": new OxmlAttr("w:themeFill", OxmlType.EnumValue, ThemeColorValuesArray),
    "w:themeFillTint": new OxmlAttr("w:themeFillTint", OxmlType.StringValue),
    "w:themeFillShade": new OxmlAttr("w:themeFillShade", OxmlType.StringValue)
  };
  ParagraphBorders._C = {
    "w:top": TopBorder,
    "w:left": LeftBorder,
    "w:bottom": BottomBorder,
    "w:right": RightBorder,
    "w:between": BetweenBorder,
    "w:bar": BarBorder
  };
  NumberingProperties._C = {
    "w:ilvl": NumberingLevelReference,
    "w:numId": NumberingId,
    "w:numberingChange": NumberingChange,
    "w:ins": Inserted
  };
  FrameProperties._D = {
    "w:dropCap": new OxmlAttr("w:dropCap", OxmlType.EnumValue, DropCapLocationValuesArray),
    "w:lines": new OxmlAttr("w:lines", OxmlType.Int32Value),
    "w:w": new OxmlAttr("w:w", OxmlType.StringValue),
    "w:h": new OxmlAttr("w:h", OxmlType.UInt32Value),
    "w:vSpace": new OxmlAttr("w:vSpace", OxmlType.StringValue),
    "w:hSpace": new OxmlAttr("w:hSpace", OxmlType.StringValue),
    "w:wrap": new OxmlAttr("w:wrap", OxmlType.EnumValue, TextWrappingValuesArray),
    "w:hAnchor": new OxmlAttr("w:hAnchor", OxmlType.EnumValue, HorizontalAnchorValuesArray),
    "w:vAnchor": new OxmlAttr("w:vAnchor", OxmlType.EnumValue, VerticalAnchorValuesArray),
    "w:x": new OxmlAttr("w:x", OxmlType.StringValue),
    "w:xAlign": new OxmlAttr("w:xAlign", OxmlType.EnumValue, HorizontalAlignmentValuesArray),
    "w:y": new OxmlAttr("w:y", OxmlType.StringValue),
    "w:yAlign": new OxmlAttr("w:yAlign", OxmlType.EnumValue, VerticalAlignmentValuesArray),
    "w:hRule": new OxmlAttr("w:hRule", OxmlType.EnumValue, HeightRuleValuesArray),
    "w:anchorLock": new OxmlAttr("w:anchorLock", OxmlType.OnOffValue)
  };
  OnOffType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.OnOffValue)
  };
  StringType._D = {
    "w:val": new OxmlAttr("w:val", OxmlType.StringValue)
  };
  MarkupType._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  MoveBookmarkType._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:colFirst": new OxmlAttr("w:colFirst", OxmlType.Int32Value),
    "w:colLast": new OxmlAttr("w:colLast", OxmlType.Int32Value),
    "w:displacedByCustomXml": new OxmlAttr("w:displacedByCustomXml", OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  MarkupRangeType._D = {
    "w:displacedByCustomXml": new OxmlAttr("w:displacedByCustomXml", OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  BookmarkStart._D = {
    "w:name": new OxmlAttr("w:name", OxmlType.StringValue),
    "w:colFirst": new OxmlAttr("w:colFirst", OxmlType.Int32Value),
    "w:colLast": new OxmlAttr("w:colLast", OxmlType.Int32Value),
    "w:displacedByCustomXml": new OxmlAttr("w:displacedByCustomXml", OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  CellMerge._D = {
    "w:vMerge": new OxmlAttr("w:vMerge", OxmlType.EnumValue, VerticalMergeRevisionValuesArray),
    "w:vMergeOrig": new OxmlAttr("w:vMergeOrig", OxmlType.EnumValue, VerticalMergeRevisionValuesArray),
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  TrackChangeType._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  return {
    prefix: "w",
    xmlns: "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  };
}
export {
  AbsolutePositionTabAlignmentValues,
  AbsolutePositionTabAlignmentValuesArray,
  AbsolutePositionTabLeaderCharValues,
  AbsolutePositionTabLeaderCharValuesArray,
  AbsolutePositionTabPositioningBaseValues,
  AbsolutePositionTabPositioningBaseValuesArray,
  AbstractNum,
  AbstractNumDefinitionName,
  AbstractNumId,
  Active,
  ActiveRecord,
  ActiveWritingStyle,
  AddressFieldName,
  AdjustLineHeightInTable,
  AdjustRightIndent,
  Aliases,
  AlignBorderAndEdges,
  AlignTablesRowByRow,
  AllowPNG,
  AllowSpaceOfSameStyleInTable,
  AltChunk,
  AltChunkProperties,
  AltName,
  AlwaysMergeEmptyNamespace,
  AlwaysShowPlaceholderText,
  AnnotationReferenceMark,
  ApplyBreakingRules,
  AttachedSchema,
  AttachedTemplate,
  AutoCaption,
  AutoCaptions,
  AutoFormatOverride,
  AutoHyphenation,
  AutoRedefine,
  AutoSpaceDE,
  AutoSpaceDN,
  AutoSpaceLikeWord95,
  AutofitToFirstFixedWidthCell,
  AutomaticColorValues,
  AutomaticColorValuesArray,
  AutomaticallySizeFormField,
  BalanceSingleByteDoubleByteWidth,
  BarBorder,
  BasedOn,
  Behavior,
  Behaviors,
  BetweenBorder,
  BiDi,
  BiDiVisual,
  BidirectionalEmbedding,
  BidirectionalOverride,
  BlockQuote,
  Body,
  BodyDiv,
  BodyType,
  Bold,
  BoldComplexScript,
  BookFoldPrinting,
  BookFoldPrintingSheets,
  BookFoldReversePrinting,
  BookmarkEnd,
  BookmarkStart,
  Border,
  BorderType,
  BorderValues,
  BorderValuesArray,
  BordersDoNotSurroundFooter,
  BordersDoNotSurroundHeader,
  BottomBorder,
  BottomMargin,
  BottomMarginDiv,
  Break,
  BreakTextRestartLocationValues,
  BreakTextRestartLocationValuesArray,
  BreakValues,
  BreakValuesArray,
  CachedColumnBalance,
  CalculateOnExit,
  Calendar,
  CalendarValues,
  CalendarValuesArray,
  CantSplit,
  Caps,
  Caption,
  CaptionPositionValues,
  CaptionPositionValuesArray,
  Captions,
  CarriageReturn,
  Category,
  CellDeletion,
  CellInsertion,
  CellMerge,
  ChapterSeparatorValues,
  ChapterSeparatorValuesArray,
  CharacterScale,
  CharacterSpacingControl,
  CharacterSpacingValues,
  CharacterSpacingValuesArray,
  CheckBox,
  CheckErrors,
  Checked,
  ClickAndTypeStyle,
  Color,
  ColorSchemeIndexValues,
  ColorSchemeIndexValuesArray,
  ColorSchemeMapping,
  Column,
  ColumnDelimiter,
  ColumnIndex,
  Columns,
  CombineBracketValues,
  CombineBracketValuesArray,
  Comment,
  CommentRangeEnd,
  CommentRangeStart,
  CommentReference,
  Comments,
  CompatSettingNameValues,
  CompatSettingNameValuesArray,
  Compatibility,
  CompatibilitySetting,
  ComplexScript,
  ConditionalFormatStyle,
  ConnectString,
  ConsecutiveHyphenLimit,
  ContentPart,
  ContextualSpacing,
  ContinuationSeparatorMark,
  Control,
  ConvertMailMergeEscape,
  CryptAlgorithmClassValues,
  CryptAlgorithmClassValuesArray,
  CryptAlgorithmValues,
  CryptAlgorithmValuesArray,
  CryptProviderValues,
  CryptProviderValuesArray,
  CustomXmlAttribute,
  CustomXmlBlock,
  CustomXmlCell,
  CustomXmlDelRangeEnd,
  CustomXmlDelRangeStart,
  CustomXmlInsRangeEnd,
  CustomXmlInsRangeStart,
  CustomXmlMoveFromRangeEnd,
  CustomXmlMoveFromRangeStart,
  CustomXmlMoveToRangeEnd,
  CustomXmlMoveToRangeStart,
  CustomXmlPlaceholder,
  CustomXmlProperties,
  CustomXmlRow,
  CustomXmlRuby,
  CustomXmlRun,
  DataBinding,
  DataSourceObject,
  DataSourceReference,
  DataSourceTableName,
  DataType,
  DateFormat,
  DateFormatValues,
  DateFormatValuesArray,
  DayLong,
  DayShort,
  DecimalNumberType,
  DecimalSymbol,
  DefaultCheckBoxFormFieldState,
  DefaultDropDownListItemIndex,
  DefaultTabStop,
  DefaultTableStyle,
  DefaultTextBoxFormFieldString,
  Deleted,
  DeletedFieldCode,
  DeletedMathControl,
  DeletedRun,
  DeletedText,
  Description,
  Destination,
  DirectionValues,
  DirectionValuesArray,
  Dirty,
  DisplacedByCustomXmlValues,
  DisplacedByCustomXmlValuesArray,
  DisplayBackgroundShape,
  DisplayHangulFixedWidth,
  DisplayHorizontalDrawingGrid,
  DisplayVerticalDrawingGrid,
  Div,
  DivBorder,
  DivId,
  Divs,
  DivsChild,
  DivsType,
  DoNotAutoCompressPictures,
  DoNotAutofitConstrainedTables,
  DoNotBreakConstrainedForcedTable,
  DoNotBreakWrappedTables,
  DoNotDemarcateInvalidXml,
  DoNotDisplayPageBoundaries,
  DoNotExpandShiftReturn,
  DoNotHyphenateCaps,
  DoNotIncludeSubdocsInStats,
  DoNotLeaveBackslashAlone,
  DoNotOrganizeInFolder,
  DoNotRelyOnCSS,
  DoNotSaveAsSingleFile,
  DoNotShadeFormData,
  DoNotSnapToGridInCell,
  DoNotSuppressBlankLines,
  DoNotSuppressIndentation,
  DoNotSuppressParagraphBorders,
  DoNotTrackFormatting,
  DoNotTrackMoves,
  DoNotUseEastAsianBreakRules,
  DoNotUseHTMLParagraphAutoSpacing,
  DoNotUseIndentAsNumberingTabStop,
  DoNotUseLongFileNames,
  DoNotUseMarginsForDrawingGridOrigin,
  DoNotValidateAgainstSchema,
  DoNotVerticallyAlignCellWithShape,
  DoNotVerticallyAlignInTextBox,
  DoNotWrapTextWithPunctuation,
  DocDefaults,
  DocGrid,
  DocGridValues,
  DocGridValuesArray,
  DocPart,
  DocPartBehaviorValues,
  DocPartBehaviorValuesArray,
  DocPartBody,
  DocPartCategory,
  DocPartGallery,
  DocPartGalleryValues,
  DocPartGalleryValuesArray,
  DocPartId,
  DocPartName,
  DocPartProperties,
  DocPartReference,
  DocPartType,
  DocPartTypes,
  DocPartUnique,
  DocPartValues,
  DocPartValuesArray,
  DocParts,
  Document,
  DocumentBackground,
  DocumentConformance,
  DocumentConformanceArray,
  DocumentProtection,
  DocumentProtectionValues,
  DocumentProtectionValuesArray,
  DocumentType,
  DocumentTypeValues,
  DocumentTypeValuesArray,
  DocumentVariable,
  DocumentVariables,
  DoubleStrike,
  Drawing,
  DrawingGridHorizontalOrigin,
  DrawingGridHorizontalSpacing,
  DrawingGridVerticalOrigin,
  DrawingGridVerticalSpacing,
  DropCapLocationValues,
  DropCapLocationValuesArray,
  DropDownListFormField,
  DropDownListSelection,
  DynamicAddress,
  EastAsianLayout,
  EmbedBoldFont,
  EmbedBoldItalicFont,
  EmbedItalicFont,
  EmbedRegularFont,
  EmbedSystemFonts,
  EmbedTrueTypeFonts,
  EmbeddedObject,
  Emboss,
  Emphasis,
  EmphasisMarkValues,
  EmphasisMarkValuesArray,
  EmptyType,
  Enabled,
  EndBorder,
  EndMargin,
  Endnote,
  EndnoteDocumentWideProperties,
  EndnotePosition,
  EndnotePositionValues,
  EndnotePositionValuesArray,
  EndnoteProperties,
  EndnoteReference,
  EndnoteReferenceMark,
  EndnoteSpecialReference,
  Endnotes,
  EntryMacro,
  EvenAndOddHeaders,
  ExitMacro,
  FieldChar,
  FieldCharValues,
  FieldCharValuesArray,
  FieldCode,
  FieldData,
  FieldMapData,
  FirstRowHeader,
  FitText,
  FlatBorders,
  Font,
  FontCharSet,
  FontFamily,
  FontFamilyValues,
  FontFamilyValuesArray,
  FontPitchValues,
  FontPitchValuesArray,
  FontRelationshipType,
  FontSignature,
  FontSize,
  FontSizeComplexScript,
  FontTypeHintValues,
  FontTypeHintValuesArray,
  Fonts,
  Footer,
  FooterReference,
  Footnote,
  FootnoteDocumentWideProperties,
  FootnoteEndnoteReferenceType,
  FootnoteEndnoteSeparatorReferenceType,
  FootnoteEndnoteType,
  FootnoteEndnoteValues,
  FootnoteEndnoteValuesArray,
  FootnoteLayoutLikeWord8,
  FootnotePosition,
  FootnotePositionValues,
  FootnotePositionValuesArray,
  FootnoteProperties,
  FootnoteReference,
  FootnoteReferenceMark,
  FootnoteSpecialReference,
  Footnotes,
  ForceUpgrade,
  ForgetLastTabAlignment,
  FormFieldData,
  FormFieldName,
  FormFieldSize,
  FormProtection,
  Format,
  FormsDesign,
  Frame,
  FrameLayout,
  FrameLayoutValues,
  FrameLayoutValuesArray,
  FrameName,
  FrameProperties,
  FrameScrollbarVisibilityValues,
  FrameScrollbarVisibilityValuesArray,
  FrameSize,
  Frameset,
  FramesetSplitbar,
  Gallery,
  GlossaryDocument,
  GridAfter,
  GridBefore,
  GridColumn,
  GridSpan,
  GrowAutofit,
  GutterAtTop,
  GutterOnRight,
  Header,
  HeaderFooterReferenceType,
  HeaderFooterType,
  HeaderFooterValues,
  HeaderFooterValuesArray,
  HeaderReference,
  HeaderShapeDefaults,
  HeaderSource,
  HeightRuleValues,
  HeightRuleValuesArray,
  HelpText,
  Hidden,
  HideGrammaticalErrors,
  HideMark,
  HideSpellingErrors,
  Highlight,
  HighlightColorValues,
  HighlightColorValuesArray,
  HorizontalAlignmentValues,
  HorizontalAlignmentValuesArray,
  HorizontalAnchorValues,
  HorizontalAnchorValuesArray,
  HorizontalMerge,
  HpsMeasureType,
  Hyperlink,
  HyperlinkRuby,
  HyphenationZone,
  IgnoreMixedContent,
  Imprint,
  Indentation,
  InfoTextValues,
  InfoTextValuesArray,
  Inserted,
  InsertedMathControl,
  InsertedRun,
  InsideHorizontalBorder,
  InsideVerticalBorder,
  IsLegalNumberingStyle,
  Italic,
  ItalicComplexScript,
  Justification,
  JustificationValues,
  JustificationValuesArray,
  KeepLines,
  KeepNext,
  Kern,
  Kinsoku,
  LanguageId,
  LanguageType,
  Languages,
  LastRenderedPageBreak,
  LatentStyleExceptionInfo,
  LatentStyles,
  LayoutRawTableWidth,
  LayoutTableRowsApart,
  LeftBorder,
  LeftMargin,
  LeftMarginDiv,
  LegacyNumbering,
  Level,
  LevelJustification,
  LevelJustificationValues,
  LevelJustificationValuesArray,
  LevelOverride,
  LevelPictureBulletId,
  LevelRestart,
  LevelSuffix,
  LevelSuffixValues,
  LevelSuffixValuesArray,
  LevelText,
  LineNumberRestartValues,
  LineNumberRestartValuesArray,
  LineNumberType,
  LineSpacingRuleValues,
  LineSpacingRuleValuesArray,
  LineWrapLikeWord6,
  LinkStyles,
  LinkToQuery,
  LinkedStyle,
  LinkedToFile,
  ListEntryFormField,
  ListItem,
  ListSeparator,
  Lock,
  Locked,
  LockingValues,
  LockingValuesArray,
  LongHexNumberType,
  MacWordSmallCaps,
  MacroNameType,
  MailAsAttachment,
  MailMerge,
  MailMergeDataValues,
  MailMergeDataValuesArray,
  MailMergeDestinationValues,
  MailMergeDestinationValuesArray,
  MailMergeDocumentValues,
  MailMergeDocumentValuesArray,
  MailMergeFieldType,
  MailMergeOdsoFieldValues,
  MailMergeOdsoFieldValuesArray,
  MailMergeSource,
  MailMergeSourceValues,
  MailMergeSourceValuesArray,
  MailSubject,
  MainDocumentType,
  MappedName,
  MarginHeight,
  MarginWidth,
  MarkupRangeType,
  MarkupType,
  MatchSource,
  MathControlMoveType,
  MaxLength,
  MergedCellValues,
  MergedCellValuesArray,
  MirrorIndents,
  MirrorMargins,
  MonthLong,
  MonthShort,
  MoveBookmarkType,
  MoveFrom,
  MoveFromMathControl,
  MoveFromRangeEnd,
  MoveFromRangeStart,
  MoveFromRun,
  MoveTo,
  MoveToMathControl,
  MoveToRangeEnd,
  MoveToRangeStart,
  MoveToRun,
  MovieReference,
  MultiLevelType,
  MultiLevelValues,
  MultiLevelValuesArray,
  Name,
  NextParagraphStyle,
  NoBorder,
  NoBreakHyphen,
  NoColumnBalance,
  NoEndnote,
  NoExtraLineSpacing,
  NoLeading,
  NoLineBreaksAfterKinsoku,
  NoLineBreaksBeforeKinsoku,
  NoProof,
  NoPunctuationKerning,
  NoResizeAllowed,
  NoSpaceRaiseLower,
  NoTabHangIndent,
  NoWrap,
  NonNegativeDecimalNumberType,
  NonNegativeShortType,
  NotTrueType,
  Nsid,
  NumberFormatValues,
  NumberFormatValuesArray,
  Numbering,
  NumberingChange,
  NumberingFormat,
  NumberingId,
  NumberingIdMacAtCleanup,
  NumberingInstance,
  NumberingLevelReference,
  NumberingPictureBullet,
  NumberingProperties,
  NumberingRestart,
  NumberingStart,
  NumberingStyleLink,
  NumberingSymbolRunProperties,
  ObjectDrawAspect,
  ObjectDrawAspectArray,
  ObjectEmbed,
  ObjectLink,
  ObjectUpdateMode,
  ObjectUpdateModeArray,
  OfficeMath,
  OnOffOnlyType,
  OnOffOnlyValues,
  OnOffOnlyValuesArray,
  OnOffType,
  OptimizeForBrowser,
  Outline,
  OutlineLevel,
  OverflowPunctuation,
  PageBorderDisplayValues,
  PageBorderDisplayValuesArray,
  PageBorderOffsetValues,
  PageBorderOffsetValuesArray,
  PageBorderZOrderValues,
  PageBorderZOrderValuesArray,
  PageBorders,
  PageBreakBefore,
  PageMargin,
  PageNumber,
  PageNumberType,
  PageOrientationValues,
  PageOrientationValuesArray,
  PageSize,
  Panose1Number,
  PaperSource,
  Paragraph,
  ParagraphBorders,
  ParagraphMarkRunProperties,
  ParagraphMarkRunPropertiesChange,
  ParagraphProperties,
  ParagraphPropertiesBaseStyle,
  ParagraphPropertiesChange,
  ParagraphPropertiesDefault,
  ParagraphPropertiesExtended,
  ParagraphStyleId,
  ParagraphStyleIdInLevel,
  PermEnd,
  PermStart,
  Personal,
  PersonalCompose,
  PersonalReply,
  PhoneticGuideBaseTextSize,
  PhoneticGuideRaise,
  PhoneticGuideTextFontSize,
  Picture,
  PictureBulletBase,
  Pitch,
  PixelsMeasureType,
  PixelsPerInch,
  Position,
  PositionalTab,
  PresetZoomValues,
  PresetZoomValuesArray,
  PreviousParagraphMarkRunProperties,
  PreviousParagraphProperties,
  PreviousRunProperties,
  PreviousSectionProperties,
  PreviousTableCellProperties,
  PreviousTableGrid,
  PreviousTableProperties,
  PreviousTablePropertyExceptions,
  PreviousTableRowProperties,
  PrimaryStyle,
  PrintBodyTextBeforeHeader,
  PrintColorBlackWhite,
  PrintFormsData,
  PrintFractionalCharacterWidth,
  PrintPostScriptOverText,
  PrintTwoOnOne,
  PrinterSettingsReference,
  ProofError,
  ProofState,
  ProofingErrorValues,
  ProofingErrorValuesArray,
  ProofingStateValues,
  ProofingStateValuesArray,
  Query,
  RangePermissionEditingGroupValues,
  RangePermissionEditingGroupValuesArray,
  ReadModeInkLockDown,
  RecipientData,
  RecipientDataReference,
  Recipients,
  RelationshipType,
  RelyOnVML,
  RemoveDateAndTime,
  RemovePersonalInformation,
  RestartNumberValues,
  RestartNumberValuesArray,
  RevisionView,
  RightBorder,
  RightMargin,
  RightMarginDiv,
  RightToLeftText,
  Rsid,
  RsidRoot,
  Rsids,
  Ruby,
  RubyAlign,
  RubyAlignValues,
  RubyAlignValuesArray,
  RubyBase,
  RubyContent,
  RubyContentType,
  RubyProperties,
  Run,
  RunFonts,
  RunProperties,
  RunPropertiesBaseStyle,
  RunPropertiesChange,
  RunPropertiesDefault,
  RunStyle,
  RunTrackChangeType,
  SaveFormsData,
  SaveInvalidXml,
  SavePreviewPicture,
  SaveSubsetFonts,
  SaveThroughXslt,
  SaveXmlDataOnly,
  ScrollbarVisibility,
  SdtAlias,
  SdtBlock,
  SdtCell,
  SdtContentBibliography,
  SdtContentBlock,
  SdtContentCell,
  SdtContentCitation,
  SdtContentComboBox,
  SdtContentDate,
  SdtContentDocPartList,
  SdtContentDocPartObject,
  SdtContentDropDownList,
  SdtContentEquation,
  SdtContentGroup,
  SdtContentPicture,
  SdtContentRichText,
  SdtContentRow,
  SdtContentRun,
  SdtContentRunRuby,
  SdtContentText,
  SdtDateMappingType,
  SdtDocPartType,
  SdtEndCharProperties,
  SdtId,
  SdtPlaceholder,
  SdtProperties,
  SdtRow,
  SdtRun,
  SdtRunRuby,
  SectionMarkValues,
  SectionMarkValuesArray,
  SectionProperties,
  SectionPropertiesChange,
  SectionType,
  SelectFieldWithFirstOrLastChar,
  SemiHidden,
  SeparatorMark,
  Settings,
  Shading,
  ShadingPatternValues,
  ShadingPatternValuesArray,
  Shadow,
  ShapeDefaults,
  ShapeDefaultsType,
  ShapeLayoutLikeWord8,
  ShowBreaksInFrames,
  ShowEnvelope,
  ShowXmlTags,
  ShowingPlaceholder,
  SignedTwipsMeasureType,
  SimpleField,
  SimpleFieldRuby,
  SmallCaps,
  SnapToGrid,
  SoftHyphen,
  SourceFileReference,
  SourceReference,
  SpaceForUnderline,
  Spacing,
  SpacingBetweenLines,
  SpacingInWholePoints,
  SpecVanish,
  SplitPageBreakAndParagraphMark,
  StartBorder,
  StartMargin,
  StartNumberingValue,
  StartOverrideNumberingValue,
  StatusText,
  StrictCharacterSet,
  StrictCharacterSetArray,
  StrictFirstAndLastChars,
  Strike,
  String253Type,
  String255Type,
  StringType,
  Style,
  StyleHidden,
  StyleId,
  StyleLink,
  StyleLockStylesPart,
  StyleLockThemesPart,
  StyleName,
  StylePaneFormatFilter,
  StylePaneSortMethods,
  StylePaneSortMethodsValues,
  StylePaneSortMethodsValuesArray,
  StyleParagraphProperties,
  StyleRunProperties,
  StyleTableCellProperties,
  StyleTableProperties,
  StyleValues,
  StyleValuesArray,
  Styles,
  SubDocumentReference,
  SubFontBySize,
  SummaryLength,
  SuppressAutoHyphens,
  SuppressBottomSpacing,
  SuppressLineNumbers,
  SuppressOverlap,
  SuppressSpacingAtTopOfPage,
  SuppressSpacingBeforeAfterPageBreak,
  SuppressTopSpacing,
  SuppressTopSpacingWordPerfect,
  SwapBordersFacingPages,
  SymbolChar,
  TabChar,
  TabStop,
  TabStopLeaderCharValues,
  TabStopLeaderCharValuesArray,
  TabStopValues,
  TabStopValuesArray,
  Table,
  TableBorders,
  TableCaption,
  TableCell,
  TableCellBorders,
  TableCellFitText,
  TableCellLeftMargin,
  TableCellMargin,
  TableCellMarginDefault,
  TableCellProperties,
  TableCellPropertiesChange,
  TableCellRightMargin,
  TableCellSpacing,
  TableCellVerticalAlignment,
  TableCellWidth,
  TableDescription,
  TableGrid,
  TableGridChange,
  TableHeader,
  TableIndentation,
  TableJustification,
  TableLayout,
  TableLayoutValues,
  TableLayoutValuesArray,
  TableLook,
  TableOverlap,
  TableOverlapValues,
  TableOverlapValuesArray,
  TablePositionProperties,
  TableProperties,
  TablePropertiesChange,
  TablePropertyExceptions,
  TablePropertyExceptionsChange,
  TableRow,
  TableRowAlignmentValues,
  TableRowAlignmentValuesArray,
  TableRowHeight,
  TableRowProperties,
  TableRowPropertiesChange,
  TableStyle,
  TableStyleColumnBandSize,
  TableStyleConditionalFormattingTableCellProperties,
  TableStyleConditionalFormattingTableProperties,
  TableStyleConditionalFormattingTableRowProperties,
  TableStyleOverrideValues,
  TableStyleOverrideValuesArray,
  TableStyleProperties,
  TableStyleRowBandSize,
  TableVerticalAlignmentValues,
  TableVerticalAlignmentValuesArray,
  TableWidth,
  TableWidthDxaNilType,
  TableWidthType,
  TableWidthUnitValues,
  TableWidthUnitValuesArray,
  TableWidthValues,
  TableWidthValuesArray,
  Tabs,
  Tag,
  TargetScreenSize,
  TargetScreenSizeValues,
  TargetScreenSizeValuesArray,
  TemplateCode,
  TemporarySdt,
  Text,
  TextAlignment,
  TextBoxContent,
  TextBoxFormFieldType,
  TextBoxFormFieldValues,
  TextBoxFormFieldValuesArray,
  TextBoxTightWrap,
  TextBoxTightWrapValues,
  TextBoxTightWrapValuesArray,
  TextDirection,
  TextDirectionValues,
  TextDirectionValuesArray,
  TextEffect,
  TextEffectValues,
  TextEffectValuesArray,
  TextInput,
  TextType,
  TextWrappingValues,
  TextWrappingValuesArray,
  ThemeColorValues,
  ThemeColorValuesArray,
  ThemeFontLanguages,
  ThemeFontValues,
  ThemeFontValuesArray,
  TitlePage,
  TopBorder,
  TopLeftToBottomRightCellBorder,
  TopLinePunctuation,
  TopMargin,
  TopMarginDiv,
  TopRightToBottomLeftCellBorder,
  TrackChangeType,
  TrackRevisions,
  TruncateFontHeightsLikeWordPerfect,
  TwipsMeasureType,
  UICompatibleWith97To2003,
  UIPriority,
  UdlConnectionString,
  Underline,
  UnderlineTabInNumberingList,
  UnderlineTrailingSpaces,
  UnderlineValues,
  UnderlineValuesArray,
  UnhideWhenUsed,
  UniqueTag,
  UnsignedDecimalNumberMax3Type,
  UnsignedDecimalNumberType,
  UnsignedInt7Type,
  UpdateFieldsOnOpen,
  UseAltKinsokuLineBreakRules,
  UseAnsiKerningPairs,
  UseFarEastLayout,
  UseNormalStyleForList,
  UsePrinterMetrics,
  UseSingleBorderForContiguousCells,
  UseWord2002TableStyleRules,
  UseWord97LineBreakRules,
  UseXsltWhenSaving,
  Vanish,
  VerticalAlignmentValues,
  VerticalAlignmentValuesArray,
  VerticalAnchorValues,
  VerticalAnchorValuesArray,
  VerticalJustificationValues,
  VerticalJustificationValuesArray,
  VerticalMerge,
  VerticalMergeRevisionValues,
  VerticalMergeRevisionValuesArray,
  VerticalPositionValues,
  VerticalPositionValuesArray,
  VerticalTextAlignment,
  VerticalTextAlignmentOnPage,
  VerticalTextAlignmentValues,
  VerticalTextAlignmentValuesArray,
  View,
  ViewMergedData,
  ViewValues,
  ViewValuesArray,
  WebHidden,
  WebPageEncoding,
  WebSettings,
  WidowControl,
  Width,
  WidthAfterTableRow,
  WidthBeforeTableRow,
  WordPerfectJustification,
  WordPerfectSpaceWidth,
  WordWrap,
  WrapTrailSpaces,
  WriteProtection,
  YearLong,
  YearShort,
  Zoom,
  initWordprocessingNamespace
};
