import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../../Drawing";
import { Extension as AExtension } from "../../Drawing";
import { Offset as AOffset } from "../../Drawing";
import { Extents as AExtents } from "../../Drawing";
import { ContentPartLocks as A14ContentPartLocks } from "../../Office2010/Drawing";
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from "../../Office2010/Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { SdtRun as WSdtRun } from "../../Wordprocessing";
import { ProofError as WProofError } from "../../Wordprocessing";
import { PermStart as WPermStart } from "../../Wordprocessing";
import { PermEnd as WPermEnd } from "../../Wordprocessing";
import { BookmarkStart as WBookmarkStart } from "../../Wordprocessing";
import { BookmarkEnd as WBookmarkEnd } from "../../Wordprocessing";
import { CommentRangeStart as WCommentRangeStart } from "../../Wordprocessing";
import { CommentRangeEnd as WCommentRangeEnd } from "../../Wordprocessing";
import { MoveFromRangeStart as WMoveFromRangeStart } from "../../Wordprocessing";
import { MoveFromRangeEnd as WMoveFromRangeEnd } from "../../Wordprocessing";
import { MoveToRangeStart as WMoveToRangeStart } from "../../Wordprocessing";
import { MoveToRangeEnd as WMoveToRangeEnd } from "../../Wordprocessing";
import { CustomXmlInsRangeStart as WCustomXmlInsRangeStart } from "../../Wordprocessing";
import { CustomXmlInsRangeEnd as WCustomXmlInsRangeEnd } from "../../Wordprocessing";
import { CustomXmlDelRangeStart as WCustomXmlDelRangeStart } from "../../Wordprocessing";
import { CustomXmlDelRangeEnd as WCustomXmlDelRangeEnd } from "../../Wordprocessing";
import { CustomXmlMoveFromRangeStart as WCustomXmlMoveFromRangeStart } from "../../Wordprocessing";
import { CustomXmlMoveFromRangeEnd as WCustomXmlMoveFromRangeEnd } from "../../Wordprocessing";
import { CustomXmlMoveToRangeStart as WCustomXmlMoveToRangeStart } from "../../Wordprocessing";
import { CustomXmlMoveToRangeEnd as WCustomXmlMoveToRangeEnd } from "../../Wordprocessing";
import { InsertedRun as WInsertedRun } from "../../Wordprocessing";
import { DeletedRun as WDeletedRun } from "../../Wordprocessing";
import { MoveFromRun as WMoveFromRun } from "../../Wordprocessing";
import { MoveToRun as WMoveToRun } from "../../Wordprocessing";
import { ContentPart as WContentPart } from "../../Wordprocessing";
import { Paragraph as MParagraph } from "../../Math";
import { OfficeMath as MOfficeMath } from "../../Math";
import { Accent as MAccent } from "../../Math";
import { Bar as MBar } from "../../Math";
import { Box as MBox } from "../../Math";
import { BorderBox as MBorderBox } from "../../Math";
import { Delimiter as MDelimiter } from "../../Math";
import { EquationArray as MEquationArray } from "../../Math";
import { Fraction as MFraction } from "../../Math";
import { MathFunction as MMathFunction } from "../../Math";
import { GroupChar as MGroupChar } from "../../Math";
import { LimitLower as MLimitLower } from "../../Math";
import { LimitUpper as MLimitUpper } from "../../Math";
import { Matrix as MMatrix } from "../../Math";
import { Nary as MNary } from "../../Math";
import { Phantom as MPhantom } from "../../Math";
import { Radical as MRadical } from "../../Math";
import { PreSubSuper as MPreSubSuper } from "../../Math";
import { Subscript as MSubscript } from "../../Math";
import { SubSuperscript as MSubSuperscript } from "../../Math";
import { Superscript as MSuperscript } from "../../Math";
import { Run as MRun } from "../../Math";
import { Run as WRun } from "../../Wordprocessing";
import { BidirectionalOverride as WBidirectionalOverride } from "../../Wordprocessing";
import { BidirectionalEmbedding as WBidirectionalEmbedding } from "../../Wordprocessing";
var OnOffValues = /* @__PURE__ */ ((OnOffValues2) => {
  OnOffValues2["True"] = "true";
  OnOffValues2["False"] = "false";
  OnOffValues2["Zero"] = "0";
  OnOffValues2["One"] = "1";
  return OnOffValues2;
})(OnOffValues || {});
const OnOffValuesArray = [
  "true" /* True */,
  "false" /* False */,
  "0" /* Zero */,
  "1" /* One */
];
var SchemeColorValues = /* @__PURE__ */ ((SchemeColorValues2) => {
  SchemeColorValues2["BackgroundColor"] = "bg1";
  SchemeColorValues2["TextColor"] = "tx1";
  SchemeColorValues2["AdditionalBackgroundColor"] = "bg2";
  SchemeColorValues2["AdditionalTextColor"] = "tx2";
  SchemeColorValues2["ExtraSchemeColor1"] = "accent1";
  SchemeColorValues2["ExtraSchemeColor2"] = "accent2";
  SchemeColorValues2["ExtraSchemeColor3"] = "accent3";
  SchemeColorValues2["ExtraSchemeColor4"] = "accent4";
  SchemeColorValues2["ExtraSchemeColor5"] = "accent5";
  SchemeColorValues2["ExtraSchemeColor6"] = "accent6";
  SchemeColorValues2["HyperlinkColor"] = "hlink";
  SchemeColorValues2["FollowedHyperlinkColor"] = "folHlink";
  SchemeColorValues2["MainDarkColor1"] = "dk1";
  SchemeColorValues2["MainLightColor1"] = "lt1";
  SchemeColorValues2["MainDarkColor2"] = "dk2";
  SchemeColorValues2["MainLightColor2"] = "lt2";
  SchemeColorValues2["AutoColor"] = "phClr";
  return SchemeColorValues2;
})(SchemeColorValues || {});
const SchemeColorValuesArray = [
  "bg1" /* BackgroundColor */,
  "tx1" /* TextColor */,
  "bg2" /* AdditionalBackgroundColor */,
  "tx2" /* AdditionalTextColor */,
  "accent1" /* ExtraSchemeColor1 */,
  "accent2" /* ExtraSchemeColor2 */,
  "accent3" /* ExtraSchemeColor3 */,
  "accent4" /* ExtraSchemeColor4 */,
  "accent5" /* ExtraSchemeColor5 */,
  "accent6" /* ExtraSchemeColor6 */,
  "hlink" /* HyperlinkColor */,
  "folHlink" /* FollowedHyperlinkColor */,
  "dk1" /* MainDarkColor1 */,
  "lt1" /* MainLightColor1 */,
  "dk2" /* MainDarkColor2 */,
  "lt2" /* MainLightColor2 */,
  "phClr" /* AutoColor */
];
var RectangleAlignmentValues = /* @__PURE__ */ ((RectangleAlignmentValues2) => {
  RectangleAlignmentValues2["None"] = "none";
  RectangleAlignmentValues2["TopLeft"] = "tl";
  RectangleAlignmentValues2["Top"] = "t";
  RectangleAlignmentValues2["TopRight"] = "tr";
  RectangleAlignmentValues2["Left"] = "l";
  RectangleAlignmentValues2["Center"] = "ctr";
  RectangleAlignmentValues2["Right"] = "r";
  RectangleAlignmentValues2["BottomLeft"] = "bl";
  RectangleAlignmentValues2["Bottom"] = "b";
  RectangleAlignmentValues2["BottomRight"] = "br";
  return RectangleAlignmentValues2;
})(RectangleAlignmentValues || {});
const RectangleAlignmentValuesArray = [
  "none" /* None */,
  "tl" /* TopLeft */,
  "t" /* Top */,
  "tr" /* TopRight */,
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */,
  "bl" /* BottomLeft */,
  "b" /* Bottom */,
  "br" /* BottomRight */
];
var PathShadeTypeValues = /* @__PURE__ */ ((PathShadeTypeValues2) => {
  PathShadeTypeValues2["Shape"] = "shape";
  PathShadeTypeValues2["Circle"] = "circle";
  PathShadeTypeValues2["Rect"] = "rect";
  return PathShadeTypeValues2;
})(PathShadeTypeValues || {});
const PathShadeTypeValuesArray = [
  "shape" /* Shape */,
  "circle" /* Circle */,
  "rect" /* Rect */
];
var LineCapValues = /* @__PURE__ */ ((LineCapValues2) => {
  LineCapValues2["Round"] = "rnd";
  LineCapValues2["Square"] = "sq";
  LineCapValues2["Flat"] = "flat";
  return LineCapValues2;
})(LineCapValues || {});
const LineCapValuesArray = [
  "rnd" /* Round */,
  "sq" /* Square */,
  "flat" /* Flat */
];
var PresetLineDashValues = /* @__PURE__ */ ((PresetLineDashValues2) => {
  PresetLineDashValues2["Solid"] = "solid";
  PresetLineDashValues2["Dot"] = "dot";
  PresetLineDashValues2["SysDot"] = "sysDot";
  PresetLineDashValues2["Dash"] = "dash";
  PresetLineDashValues2["SysDash"] = "sysDash";
  PresetLineDashValues2["LongDash"] = "lgDash";
  PresetLineDashValues2["DashDot"] = "dashDot";
  PresetLineDashValues2["SystemDashDot"] = "sysDashDot";
  PresetLineDashValues2["LongDashDot"] = "lgDashDot";
  PresetLineDashValues2["LongDashDotDot"] = "lgDashDotDot";
  PresetLineDashValues2["SystemDashDotDot"] = "sysDashDotDot";
  return PresetLineDashValues2;
})(PresetLineDashValues || {});
const PresetLineDashValuesArray = [
  "solid" /* Solid */,
  "dot" /* Dot */,
  "sysDot" /* SysDot */,
  "dash" /* Dash */,
  "sysDash" /* SysDash */,
  "lgDash" /* LongDash */,
  "dashDot" /* DashDot */,
  "sysDashDot" /* SystemDashDot */,
  "lgDashDot" /* LongDashDot */,
  "lgDashDotDot" /* LongDashDotDot */,
  "sysDashDotDot" /* SystemDashDotDot */
];
var PenAlignmentValues = /* @__PURE__ */ ((PenAlignmentValues2) => {
  PenAlignmentValues2["Center"] = "ctr";
  PenAlignmentValues2["Inset"] = "in";
  return PenAlignmentValues2;
})(PenAlignmentValues || {});
const PenAlignmentValuesArray = [
  "ctr" /* Center */,
  "in" /* Inset */
];
var CompoundLineValues = /* @__PURE__ */ ((CompoundLineValues2) => {
  CompoundLineValues2["Simple"] = "sng";
  CompoundLineValues2["Double"] = "dbl";
  CompoundLineValues2["ThickThin"] = "thickThin";
  CompoundLineValues2["ThinThick"] = "thinThick";
  CompoundLineValues2["Triple"] = "tri";
  return CompoundLineValues2;
})(CompoundLineValues || {});
const CompoundLineValuesArray = [
  "sng" /* Simple */,
  "dbl" /* Double */,
  "thickThin" /* ThickThin */,
  "thinThick" /* ThinThick */,
  "tri" /* Triple */
];
var PresetCameraTypeValues = /* @__PURE__ */ ((PresetCameraTypeValues2) => {
  PresetCameraTypeValues2["LegacyObliqueTopLeft"] = "legacyObliqueTopLeft";
  PresetCameraTypeValues2["LegacyObliqueTop"] = "legacyObliqueTop";
  PresetCameraTypeValues2["LegacyObliqueTopRight"] = "legacyObliqueTopRight";
  PresetCameraTypeValues2["LegacyObliqueLeft"] = "legacyObliqueLeft";
  PresetCameraTypeValues2["LegacyObliqueFront"] = "legacyObliqueFront";
  PresetCameraTypeValues2["LegacyObliqueRight"] = "legacyObliqueRight";
  PresetCameraTypeValues2["LegacyObliqueBottomLeft"] = "legacyObliqueBottomLeft";
  PresetCameraTypeValues2["LegacyObliqueBottom"] = "legacyObliqueBottom";
  PresetCameraTypeValues2["LegacyObliqueBottomRight"] = "legacyObliqueBottomRight";
  PresetCameraTypeValues2["LegacyPerspectiveTopLeft"] = "legacyPerspectiveTopLeft";
  PresetCameraTypeValues2["LegacyPerspectiveTop"] = "legacyPerspectiveTop";
  PresetCameraTypeValues2["LegacyPerspectiveTopRight"] = "legacyPerspectiveTopRight";
  PresetCameraTypeValues2["LegacyPerspectiveLeft"] = "legacyPerspectiveLeft";
  PresetCameraTypeValues2["LegacyPerspectiveFront"] = "legacyPerspectiveFront";
  PresetCameraTypeValues2["LegacyPerspectiveRight"] = "legacyPerspectiveRight";
  PresetCameraTypeValues2["LegacyPerspectiveBottomLeft"] = "legacyPerspectiveBottomLeft";
  PresetCameraTypeValues2["LegacyPerspectiveBottom"] = "legacyPerspectiveBottom";
  PresetCameraTypeValues2["LegacyPerspectiveBottomRight"] = "legacyPerspectiveBottomRight";
  PresetCameraTypeValues2["OrthographicFront"] = "orthographicFront";
  PresetCameraTypeValues2["IsometricTopUp"] = "isometricTopUp";
  PresetCameraTypeValues2["IsometricTopDown"] = "isometricTopDown";
  PresetCameraTypeValues2["IsometricBottomUp"] = "isometricBottomUp";
  PresetCameraTypeValues2["IsometricBottomDown"] = "isometricBottomDown";
  PresetCameraTypeValues2["IsometricLeftUp"] = "isometricLeftUp";
  PresetCameraTypeValues2["IsometricLeftDown"] = "isometricLeftDown";
  PresetCameraTypeValues2["IsometricRightUp"] = "isometricRightUp";
  PresetCameraTypeValues2["IsometricRightDown"] = "isometricRightDown";
  PresetCameraTypeValues2["IsometricOffAxis1Left"] = "isometricOffAxis1Left";
  PresetCameraTypeValues2["IsometricOffAxis1Right"] = "isometricOffAxis1Right";
  PresetCameraTypeValues2["IsometricOffAxis1Top"] = "isometricOffAxis1Top";
  PresetCameraTypeValues2["IsometricOffAxis2Left"] = "isometricOffAxis2Left";
  PresetCameraTypeValues2["IsometricOffAxis2Right"] = "isometricOffAxis2Right";
  PresetCameraTypeValues2["IsometricOffAxis2Top"] = "isometricOffAxis2Top";
  PresetCameraTypeValues2["IsometricOffAxis3Left"] = "isometricOffAxis3Left";
  PresetCameraTypeValues2["IsometricOffAxis3Right"] = "isometricOffAxis3Right";
  PresetCameraTypeValues2["IsometricOffAxis3Bottom"] = "isometricOffAxis3Bottom";
  PresetCameraTypeValues2["IsometricOffAxis4Left"] = "isometricOffAxis4Left";
  PresetCameraTypeValues2["IsometricOffAxis4Right"] = "isometricOffAxis4Right";
  PresetCameraTypeValues2["IsometricOffAxis4Bottom"] = "isometricOffAxis4Bottom";
  PresetCameraTypeValues2["ObliqueTopLeft"] = "obliqueTopLeft";
  PresetCameraTypeValues2["ObliqueTop"] = "obliqueTop";
  PresetCameraTypeValues2["ObliqueTopRight"] = "obliqueTopRight";
  PresetCameraTypeValues2["ObliqueLeft"] = "obliqueLeft";
  PresetCameraTypeValues2["ObliqueRight"] = "obliqueRight";
  PresetCameraTypeValues2["ObliqueBottomLeft"] = "obliqueBottomLeft";
  PresetCameraTypeValues2["ObliqueBottom"] = "obliqueBottom";
  PresetCameraTypeValues2["ObliqueBottomRight"] = "obliqueBottomRight";
  PresetCameraTypeValues2["PerspectiveFront"] = "perspectiveFront";
  PresetCameraTypeValues2["PerspectiveLeft"] = "perspectiveLeft";
  PresetCameraTypeValues2["PerspectiveRight"] = "perspectiveRight";
  PresetCameraTypeValues2["PerspectiveAbove"] = "perspectiveAbove";
  PresetCameraTypeValues2["PerspectiveBelow"] = "perspectiveBelow";
  PresetCameraTypeValues2["PerspectiveAboveLeftFacing"] = "perspectiveAboveLeftFacing";
  PresetCameraTypeValues2["PerspectiveAboveRightFacing"] = "perspectiveAboveRightFacing";
  PresetCameraTypeValues2["PerspectiveContrastingLeftFacing"] = "perspectiveContrastingLeftFacing";
  PresetCameraTypeValues2["PerspectiveContrastingRightFacing"] = "perspectiveContrastingRightFacing";
  PresetCameraTypeValues2["PerspectiveHeroicLeftFacing"] = "perspectiveHeroicLeftFacing";
  PresetCameraTypeValues2["PerspectiveHeroicRightFacing"] = "perspectiveHeroicRightFacing";
  PresetCameraTypeValues2["PerspectiveHeroicExtremeLeftFacing"] = "perspectiveHeroicExtremeLeftFacing";
  PresetCameraTypeValues2["PerspectiveHeroicExtremeRightFacing"] = "perspectiveHeroicExtremeRightFacing";
  PresetCameraTypeValues2["PerspectiveRelaxed"] = "perspectiveRelaxed";
  PresetCameraTypeValues2["PerspectiveRelaxedModerately"] = "perspectiveRelaxedModerately";
  return PresetCameraTypeValues2;
})(PresetCameraTypeValues || {});
const PresetCameraTypeValuesArray = [
  "legacyObliqueTopLeft" /* LegacyObliqueTopLeft */,
  "legacyObliqueTop" /* LegacyObliqueTop */,
  "legacyObliqueTopRight" /* LegacyObliqueTopRight */,
  "legacyObliqueLeft" /* LegacyObliqueLeft */,
  "legacyObliqueFront" /* LegacyObliqueFront */,
  "legacyObliqueRight" /* LegacyObliqueRight */,
  "legacyObliqueBottomLeft" /* LegacyObliqueBottomLeft */,
  "legacyObliqueBottom" /* LegacyObliqueBottom */,
  "legacyObliqueBottomRight" /* LegacyObliqueBottomRight */,
  "legacyPerspectiveTopLeft" /* LegacyPerspectiveTopLeft */,
  "legacyPerspectiveTop" /* LegacyPerspectiveTop */,
  "legacyPerspectiveTopRight" /* LegacyPerspectiveTopRight */,
  "legacyPerspectiveLeft" /* LegacyPerspectiveLeft */,
  "legacyPerspectiveFront" /* LegacyPerspectiveFront */,
  "legacyPerspectiveRight" /* LegacyPerspectiveRight */,
  "legacyPerspectiveBottomLeft" /* LegacyPerspectiveBottomLeft */,
  "legacyPerspectiveBottom" /* LegacyPerspectiveBottom */,
  "legacyPerspectiveBottomRight" /* LegacyPerspectiveBottomRight */,
  "orthographicFront" /* OrthographicFront */,
  "isometricTopUp" /* IsometricTopUp */,
  "isometricTopDown" /* IsometricTopDown */,
  "isometricBottomUp" /* IsometricBottomUp */,
  "isometricBottomDown" /* IsometricBottomDown */,
  "isometricLeftUp" /* IsometricLeftUp */,
  "isometricLeftDown" /* IsometricLeftDown */,
  "isometricRightUp" /* IsometricRightUp */,
  "isometricRightDown" /* IsometricRightDown */,
  "isometricOffAxis1Left" /* IsometricOffAxis1Left */,
  "isometricOffAxis1Right" /* IsometricOffAxis1Right */,
  "isometricOffAxis1Top" /* IsometricOffAxis1Top */,
  "isometricOffAxis2Left" /* IsometricOffAxis2Left */,
  "isometricOffAxis2Right" /* IsometricOffAxis2Right */,
  "isometricOffAxis2Top" /* IsometricOffAxis2Top */,
  "isometricOffAxis3Left" /* IsometricOffAxis3Left */,
  "isometricOffAxis3Right" /* IsometricOffAxis3Right */,
  "isometricOffAxis3Bottom" /* IsometricOffAxis3Bottom */,
  "isometricOffAxis4Left" /* IsometricOffAxis4Left */,
  "isometricOffAxis4Right" /* IsometricOffAxis4Right */,
  "isometricOffAxis4Bottom" /* IsometricOffAxis4Bottom */,
  "obliqueTopLeft" /* ObliqueTopLeft */,
  "obliqueTop" /* ObliqueTop */,
  "obliqueTopRight" /* ObliqueTopRight */,
  "obliqueLeft" /* ObliqueLeft */,
  "obliqueRight" /* ObliqueRight */,
  "obliqueBottomLeft" /* ObliqueBottomLeft */,
  "obliqueBottom" /* ObliqueBottom */,
  "obliqueBottomRight" /* ObliqueBottomRight */,
  "perspectiveFront" /* PerspectiveFront */,
  "perspectiveLeft" /* PerspectiveLeft */,
  "perspectiveRight" /* PerspectiveRight */,
  "perspectiveAbove" /* PerspectiveAbove */,
  "perspectiveBelow" /* PerspectiveBelow */,
  "perspectiveAboveLeftFacing" /* PerspectiveAboveLeftFacing */,
  "perspectiveAboveRightFacing" /* PerspectiveAboveRightFacing */,
  "perspectiveContrastingLeftFacing" /* PerspectiveContrastingLeftFacing */,
  "perspectiveContrastingRightFacing" /* PerspectiveContrastingRightFacing */,
  "perspectiveHeroicLeftFacing" /* PerspectiveHeroicLeftFacing */,
  "perspectiveHeroicRightFacing" /* PerspectiveHeroicRightFacing */,
  "perspectiveHeroicExtremeLeftFacing" /* PerspectiveHeroicExtremeLeftFacing */,
  "perspectiveHeroicExtremeRightFacing" /* PerspectiveHeroicExtremeRightFacing */,
  "perspectiveRelaxed" /* PerspectiveRelaxed */,
  "perspectiveRelaxedModerately" /* PerspectiveRelaxedModerately */
];
var LightRigTypeValues = /* @__PURE__ */ ((LightRigTypeValues2) => {
  LightRigTypeValues2["LegacyFlat1"] = "legacyFlat1";
  LightRigTypeValues2["LegacyFlat2"] = "legacyFlat2";
  LightRigTypeValues2["LegacyFlat3"] = "legacyFlat3";
  LightRigTypeValues2["LegacyFlat4"] = "legacyFlat4";
  LightRigTypeValues2["LegacyNormal1"] = "legacyNormal1";
  LightRigTypeValues2["LegacyNormal2"] = "legacyNormal2";
  LightRigTypeValues2["LegacyNormal3"] = "legacyNormal3";
  LightRigTypeValues2["LegacyNormal4"] = "legacyNormal4";
  LightRigTypeValues2["LegacyHarsh1"] = "legacyHarsh1";
  LightRigTypeValues2["LegacyHarsh2"] = "legacyHarsh2";
  LightRigTypeValues2["LegacyHarsh3"] = "legacyHarsh3";
  LightRigTypeValues2["LegacyHarsh4"] = "legacyHarsh4";
  LightRigTypeValues2["ThreePoint"] = "threePt";
  LightRigTypeValues2["Balanced"] = "balanced";
  LightRigTypeValues2["Soft"] = "soft";
  LightRigTypeValues2["Harsh"] = "harsh";
  LightRigTypeValues2["Flood"] = "flood";
  LightRigTypeValues2["Contrasting"] = "contrasting";
  LightRigTypeValues2["Morning"] = "morning";
  LightRigTypeValues2["Sunrise"] = "sunrise";
  LightRigTypeValues2["Sunset"] = "sunset";
  LightRigTypeValues2["Chilly"] = "chilly";
  LightRigTypeValues2["Freezing"] = "freezing";
  LightRigTypeValues2["Flat"] = "flat";
  LightRigTypeValues2["TwoPoint"] = "twoPt";
  LightRigTypeValues2["Glow"] = "glow";
  LightRigTypeValues2["BrightRoom"] = "brightRoom";
  return LightRigTypeValues2;
})(LightRigTypeValues || {});
const LightRigTypeValuesArray = [
  "legacyFlat1" /* LegacyFlat1 */,
  "legacyFlat2" /* LegacyFlat2 */,
  "legacyFlat3" /* LegacyFlat3 */,
  "legacyFlat4" /* LegacyFlat4 */,
  "legacyNormal1" /* LegacyNormal1 */,
  "legacyNormal2" /* LegacyNormal2 */,
  "legacyNormal3" /* LegacyNormal3 */,
  "legacyNormal4" /* LegacyNormal4 */,
  "legacyHarsh1" /* LegacyHarsh1 */,
  "legacyHarsh2" /* LegacyHarsh2 */,
  "legacyHarsh3" /* LegacyHarsh3 */,
  "legacyHarsh4" /* LegacyHarsh4 */,
  "threePt" /* ThreePoint */,
  "balanced" /* Balanced */,
  "soft" /* Soft */,
  "harsh" /* Harsh */,
  "flood" /* Flood */,
  "contrasting" /* Contrasting */,
  "morning" /* Morning */,
  "sunrise" /* Sunrise */,
  "sunset" /* Sunset */,
  "chilly" /* Chilly */,
  "freezing" /* Freezing */,
  "flat" /* Flat */,
  "twoPt" /* TwoPoint */,
  "glow" /* Glow */,
  "brightRoom" /* BrightRoom */
];
var LightRigDirectionValues = /* @__PURE__ */ ((LightRigDirectionValues2) => {
  LightRigDirectionValues2["TopLeft"] = "tl";
  LightRigDirectionValues2["Top"] = "t";
  LightRigDirectionValues2["TopRight"] = "tr";
  LightRigDirectionValues2["Left"] = "l";
  LightRigDirectionValues2["Right"] = "r";
  LightRigDirectionValues2["BottomLeft"] = "bl";
  LightRigDirectionValues2["Bottom"] = "b";
  LightRigDirectionValues2["BottomRight"] = "br";
  return LightRigDirectionValues2;
})(LightRigDirectionValues || {});
const LightRigDirectionValuesArray = [
  "tl" /* TopLeft */,
  "t" /* Top */,
  "tr" /* TopRight */,
  "l" /* Left */,
  "r" /* Right */,
  "bl" /* BottomLeft */,
  "b" /* Bottom */,
  "br" /* BottomRight */
];
var BevelPresetTypeValues = /* @__PURE__ */ ((BevelPresetTypeValues2) => {
  BevelPresetTypeValues2["RelaxedInset"] = "relaxedInset";
  BevelPresetTypeValues2["Circle"] = "circle";
  BevelPresetTypeValues2["Slope"] = "slope";
  BevelPresetTypeValues2["Cross"] = "cross";
  BevelPresetTypeValues2["Angle"] = "angle";
  BevelPresetTypeValues2["SoftRound"] = "softRound";
  BevelPresetTypeValues2["Convex"] = "convex";
  BevelPresetTypeValues2["CoolSlant"] = "coolSlant";
  BevelPresetTypeValues2["Divot"] = "divot";
  BevelPresetTypeValues2["Riblet"] = "riblet";
  BevelPresetTypeValues2["HardEdge"] = "hardEdge";
  BevelPresetTypeValues2["ArtDeco"] = "artDeco";
  return BevelPresetTypeValues2;
})(BevelPresetTypeValues || {});
const BevelPresetTypeValuesArray = [
  "relaxedInset" /* RelaxedInset */,
  "circle" /* Circle */,
  "slope" /* Slope */,
  "cross" /* Cross */,
  "angle" /* Angle */,
  "softRound" /* SoftRound */,
  "convex" /* Convex */,
  "coolSlant" /* CoolSlant */,
  "divot" /* Divot */,
  "riblet" /* Riblet */,
  "hardEdge" /* HardEdge */,
  "artDeco" /* ArtDeco */
];
var PresetMaterialTypeValues = /* @__PURE__ */ ((PresetMaterialTypeValues2) => {
  PresetMaterialTypeValues2["LegacyMatte"] = "legacyMatte";
  PresetMaterialTypeValues2["LegacyPlastic"] = "legacyPlastic";
  PresetMaterialTypeValues2["LegacyMetal"] = "legacyMetal";
  PresetMaterialTypeValues2["LegacyWireframe"] = "legacyWireframe";
  PresetMaterialTypeValues2["Matte"] = "matte";
  PresetMaterialTypeValues2["Plastic"] = "plastic";
  PresetMaterialTypeValues2["Metal"] = "metal";
  PresetMaterialTypeValues2["WarmMatte"] = "warmMatte";
  PresetMaterialTypeValues2["TranslucentPowder"] = "translucentPowder";
  PresetMaterialTypeValues2["Powder"] = "powder";
  PresetMaterialTypeValues2["DarkEdge"] = "dkEdge";
  PresetMaterialTypeValues2["SoftEdge"] = "softEdge";
  PresetMaterialTypeValues2["Clear"] = "clear";
  PresetMaterialTypeValues2["Flat"] = "flat";
  PresetMaterialTypeValues2["SoftMetal"] = "softmetal";
  PresetMaterialTypeValues2["None"] = "none";
  return PresetMaterialTypeValues2;
})(PresetMaterialTypeValues || {});
const PresetMaterialTypeValuesArray = [
  "legacyMatte" /* LegacyMatte */,
  "legacyPlastic" /* LegacyPlastic */,
  "legacyMetal" /* LegacyMetal */,
  "legacyWireframe" /* LegacyWireframe */,
  "matte" /* Matte */,
  "plastic" /* Plastic */,
  "metal" /* Metal */,
  "warmMatte" /* WarmMatte */,
  "translucentPowder" /* TranslucentPowder */,
  "powder" /* Powder */,
  "dkEdge" /* DarkEdge */,
  "softEdge" /* SoftEdge */,
  "clear" /* Clear */,
  "flat" /* Flat */,
  "softmetal" /* SoftMetal */,
  "none" /* None */
];
var LigaturesValues = /* @__PURE__ */ ((LigaturesValues2) => {
  LigaturesValues2["None"] = "none";
  LigaturesValues2["Standard"] = "standard";
  LigaturesValues2["Contextual"] = "contextual";
  LigaturesValues2["Historical"] = "historical";
  LigaturesValues2["Discretional"] = "discretional";
  LigaturesValues2["StandardContextual"] = "standardContextual";
  LigaturesValues2["StandardHistorical"] = "standardHistorical";
  LigaturesValues2["ContextualHistorical"] = "contextualHistorical";
  LigaturesValues2["StandardDiscretional"] = "standardDiscretional";
  LigaturesValues2["ContextualDiscretional"] = "contextualDiscretional";
  LigaturesValues2["HistoricalDiscretional"] = "historicalDiscretional";
  LigaturesValues2["StandardContextualHistorical"] = "standardContextualHistorical";
  LigaturesValues2["StandardContextualDiscretional"] = "standardContextualDiscretional";
  LigaturesValues2["StandardHistoricalDiscretional"] = "standardHistoricalDiscretional";
  LigaturesValues2["ContextualHistoricalDiscretional"] = "contextualHistoricalDiscretional";
  LigaturesValues2["All"] = "all";
  return LigaturesValues2;
})(LigaturesValues || {});
const LigaturesValuesArray = [
  "none" /* None */,
  "standard" /* Standard */,
  "contextual" /* Contextual */,
  "historical" /* Historical */,
  "discretional" /* Discretional */,
  "standardContextual" /* StandardContextual */,
  "standardHistorical" /* StandardHistorical */,
  "contextualHistorical" /* ContextualHistorical */,
  "standardDiscretional" /* StandardDiscretional */,
  "contextualDiscretional" /* ContextualDiscretional */,
  "historicalDiscretional" /* HistoricalDiscretional */,
  "standardContextualHistorical" /* StandardContextualHistorical */,
  "standardContextualDiscretional" /* StandardContextualDiscretional */,
  "standardHistoricalDiscretional" /* StandardHistoricalDiscretional */,
  "contextualHistoricalDiscretional" /* ContextualHistoricalDiscretional */,
  "all" /* All */
];
var NumberFormValues = /* @__PURE__ */ ((NumberFormValues2) => {
  NumberFormValues2["Default"] = "default";
  NumberFormValues2["Lining"] = "lining";
  NumberFormValues2["OldStyle"] = "oldStyle";
  return NumberFormValues2;
})(NumberFormValues || {});
const NumberFormValuesArray = [
  "default" /* Default */,
  "lining" /* Lining */,
  "oldStyle" /* OldStyle */
];
var NumberSpacingValues = /* @__PURE__ */ ((NumberSpacingValues2) => {
  NumberSpacingValues2["Default"] = "default";
  NumberSpacingValues2["Proportional"] = "proportional";
  NumberSpacingValues2["Tabular"] = "tabular";
  return NumberSpacingValues2;
})(NumberSpacingValues || {});
const NumberSpacingValuesArray = [
  "default" /* Default */,
  "proportional" /* Proportional */,
  "tabular" /* Tabular */
];
class OfficeArtExtensionList extends OxmlCompositeElement {
  static _Q = "w14:extLst";
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "w14:xfrm";
  static _A = [":rot", ":flipH", ":flipV"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Horizontal Flip. Serialized as `:flipH` */
  get horizontalFlip() {
    return this._g(":flipH");
  }
  set horizontalFlip(v) {
    this._s(":flipH", v);
  }
  /** Vertical Flip. Serialized as `:flipV` */
  get verticalFlip() {
    return this._g(":flipV");
  }
  set verticalFlip(v) {
    this._s(":flipV", v);
  }
  /** Offset. */
  get offset() {
    return this._f(AOffset);
  }
  /** Extents. */
  get extents() {
    return this._f(AExtents);
  }
}
class WordNonVisualContentPartShapeProperties extends OxmlCompositeElement {
  static _Q = "w14:nvContentPartPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualInkContentPartProperties. */
  get nonVisualInkContentPartProperties() {
    return this._f(NonVisualInkContentPartProperties);
  }
}
class NonVisualInkContentPartProperties extends OxmlCompositeElement {
  static _Q = "w14:cNvContentPartPr";
  static _A = [":isComment"];
  /** isComment. Serialized as `:isComment` */
  get isComment() {
    return this._g(":isComment");
  }
  set isComment(v) {
    this._s(":isComment", v);
  }
  /** Returns A14ContentPartLocks. */
  get contentPartLocks() {
    return this._f(A14ContentPartLocks);
  }
  /** Returns A14OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(A14OfficeArtExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "w14:cNvPr";
  static _A = [":id", ":name", ":descr", ":hidden", ":title"];
  /** Application defined unique identifier.. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Description of the drawing element.. Serialized as `:descr` */
  get description() {
    return this._g(":descr");
  }
  set description(v) {
    this._s(":descr", v);
  }
  /** Flag determining to show or hide this element.. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Hyperlink associated with clicking or selecting the element.. */
  get hyperlinkOnClick() {
    return this._f(AHyperlinkOnClick);
  }
  /** Hyperlink associated with hovering over the element.. */
  get hyperlinkOnHover() {
    return this._f(AHyperlinkOnHover);
  }
  /** Future extension. */
  get nonVisualDrawingPropertiesExtensionList() {
    return this._f(ANonVisualDrawingPropertiesExtensionList);
  }
}
class CheckBoxSymbolType extends OxmlLeafElement {
  static _A = ["w14:font", "w14:val"];
  /** font. Serialized as `w14:font` */
  get font() {
    return this._g("w14:font");
  }
  set font(v) {
    this._s("w14:font", v);
  }
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class UncheckedState extends CheckBoxSymbolType {
  static _Q = "w14:uncheckedState";
}
class CheckedState extends CheckBoxSymbolType {
  static _Q = "w14:checkedState";
}
class StyleSet extends OxmlLeafElement {
  static _Q = "w14:styleSet";
  static _A = ["w14:id", "w14:val"];
  /** id. Serialized as `w14:id` */
  get id() {
    return this._g("w14:id");
  }
  set id(v) {
    this._s("w14:id", v);
  }
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class ColorType extends OxmlCompositeElement {
  /** Returns RgbColorModelHex. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Returns SchemeColor. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
}
class ContourColor extends ColorType {
  static _Q = "w14:contourClr";
}
class ExtrusionColor extends ColorType {
  static _Q = "w14:extrusionClr";
}
class BevelType extends OxmlLeafElement {
  static _A = ["w14:w", "w14:h", "w14:prst"];
  /** w. Serialized as `w14:w` */
  get width() {
    return this._g("w14:w");
  }
  set width(v) {
    this._s("w14:w", v);
  }
  /** h. Serialized as `w14:h` */
  get height() {
    return this._g("w14:h");
  }
  set height(v) {
    this._s("w14:h", v);
  }
  /** prst. Serialized as `w14:prst` */
  get presetProfileType() {
    return this._g("w14:prst");
  }
  set presetProfileType(v) {
    this._s("w14:prst", v);
  }
}
class BevelBottom extends BevelType {
  static _Q = "w14:bevelB";
}
class BevelTop extends BevelType {
  static _Q = "w14:bevelT";
}
class LightRig extends OxmlCompositeElement {
  static _Q = "w14:lightRig";
  static _A = ["w14:rig", "w14:dir"];
  /** rig. Serialized as `w14:rig` */
  get lightRigType() {
    return this._g("w14:rig");
  }
  set lightRigType(v) {
    this._s("w14:rig", v);
  }
  /** dir. Serialized as `w14:dir` */
  get lightDirectionType() {
    return this._g("w14:dir");
  }
  set lightDirectionType(v) {
    this._s("w14:dir", v);
  }
  /** Returns SphereCoordinates. */
  get sphereCoordinates() {
    return this._f(SphereCoordinates);
  }
}
class Camera extends OxmlLeafElement {
  static _Q = "w14:camera";
  static _A = ["w14:prst"];
  /** prst. Serialized as `w14:prst` */
  get presetCameraType() {
    return this._g("w14:prst");
  }
  set presetCameraType(v) {
    this._s("w14:prst", v);
  }
}
class SphereCoordinates extends OxmlLeafElement {
  static _Q = "w14:rot";
  static _A = ["w14:lat", "w14:lon", "w14:rev"];
  /** lat. Serialized as `w14:lat` */
  get lattitude() {
    return this._g("w14:lat");
  }
  set lattitude(v) {
    this._s("w14:lat", v);
  }
  /** lon. Serialized as `w14:lon` */
  get longitude() {
    return this._g("w14:lon");
  }
  set longitude(v) {
    this._s("w14:lon", v);
  }
  /** rev. Serialized as `w14:rev` */
  get revolution() {
    return this._g("w14:rev");
  }
  set revolution(v) {
    this._s("w14:rev", v);
  }
}
class GradientStopList extends OxmlCompositeElement {
  static _Q = "w14:gsLst";
}
class FillToRectangle extends OxmlLeafElement {
  static _Q = "w14:fillToRect";
  static _A = ["w14:l", "w14:t", "w14:r", "w14:b"];
  /** l. Serialized as `w14:l` */
  get left() {
    return this._g("w14:l");
  }
  set left(v) {
    this._s("w14:l", v);
  }
  /** t. Serialized as `w14:t` */
  get top() {
    return this._g("w14:t");
  }
  set top(v) {
    this._s("w14:t", v);
  }
  /** r. Serialized as `w14:r` */
  get right() {
    return this._g("w14:r");
  }
  set right(v) {
    this._s("w14:r", v);
  }
  /** b. Serialized as `w14:b` */
  get bottom() {
    return this._g("w14:b");
  }
  set bottom(v) {
    this._s("w14:b", v);
  }
}
class GradientStop extends OxmlCompositeElement {
  static _Q = "w14:gs";
  static _A = ["w14:pos"];
  /** pos. Serialized as `w14:pos` */
  get stopPosition() {
    return this._g("w14:pos");
  }
  set stopPosition(v) {
    this._s("w14:pos", v);
  }
  /** Returns RgbColorModelHex. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Returns SchemeColor. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
}
class SdtContentCheckBox extends OxmlCompositeElement {
  static _Q = "w14:checkbox";
  /** Returns Checked. */
  get checked() {
    return this._f(Checked);
  }
  /** Returns CheckedState. */
  get checkedState() {
    return this._f(CheckedState);
  }
  /** Returns UncheckedState. */
  get uncheckedState() {
    return this._f(UncheckedState);
  }
}
class DefaultImageDpi extends OxmlLeafElement {
  static _Q = "w14:defaultImageDpi";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
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
class CustomXmlConflictDeletionRangeEnd extends MarkupType {
  static _Q = "w14:customXmlConflictDelRangeEnd";
}
class CustomXmlConflictInsertionRangeEnd extends MarkupType {
  static _Q = "w14:customXmlConflictInsRangeEnd";
}
class DocumentId extends OxmlLeafElement {
  static _Q = "w14:docId";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class ContentPart extends OxmlCompositeElement {
  static _Q = "w14:contentPart";
  static _A = ["w14:bwMode", "r:id"];
  /** bwMode. Serialized as `w14:bwMode` */
  get blackWhiteMode() {
    return this._g("w14:bwMode");
  }
  set blackWhiteMode(v) {
    this._s("w14:bwMode", v);
  }
  /** id. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Returns WordNonVisualContentPartShapeProperties. */
  get wordNonVisualContentPartShapeProperties() {
    return this._f(WordNonVisualContentPartShapeProperties);
  }
  /** Returns Transform2D. */
  get transform2D() {
    return this._f(Transform2D);
  }
  /** Returns OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(OfficeArtExtensionList);
  }
}
class OnOffType extends OxmlLeafElement {
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class Checked extends OnOffType {
  static _Q = "w14:checked";
}
class DiscardImageEditingData extends OnOffType {
  static _Q = "w14:discardImageEditingData";
}
class ConflictMode extends OnOffType {
  static _Q = "w14:conflictMode";
}
class ContextualAlternatives extends OnOffType {
  static _Q = "w14:cntxtAlts";
}
class StylisticSets extends OxmlCompositeElement {
  static _Q = "w14:stylisticSets";
}
class NumberSpacing extends OxmlLeafElement {
  static _Q = "w14:numSpacing";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class NumberingFormat extends OxmlLeafElement {
  static _Q = "w14:numForm";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class Ligatures extends OxmlLeafElement {
  static _Q = "w14:ligatures";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class Properties3D extends OxmlCompositeElement {
  static _Q = "w14:props3d";
  static _A = ["w14:extrusionH", "w14:contourW", "w14:prstMaterial"];
  /** extrusionH. Serialized as `w14:extrusionH` */
  get extrusionHeight() {
    return this._g("w14:extrusionH");
  }
  set extrusionHeight(v) {
    this._s("w14:extrusionH", v);
  }
  /** contourW. Serialized as `w14:contourW` */
  get contourWidth() {
    return this._g("w14:contourW");
  }
  set contourWidth(v) {
    this._s("w14:contourW", v);
  }
  /** prstMaterial. Serialized as `w14:prstMaterial` */
  get presetMaterialType() {
    return this._g("w14:prstMaterial");
  }
  set presetMaterialType(v) {
    this._s("w14:prstMaterial", v);
  }
  /** Returns BevelTop. */
  get bevelTop() {
    return this._f(BevelTop);
  }
  /** Returns BevelBottom. */
  get bevelBottom() {
    return this._f(BevelBottom);
  }
  /** Returns ExtrusionColor. */
  get extrusionColor() {
    return this._f(ExtrusionColor);
  }
  /** Returns ContourColor. */
  get contourColor() {
    return this._f(ContourColor);
  }
}
class Scene3D extends OxmlCompositeElement {
  static _Q = "w14:scene3d";
  /** Returns Camera. */
  get camera() {
    return this._f(Camera);
  }
  /** Returns LightRig. */
  get lightRig() {
    return this._f(LightRig);
  }
}
class FillTextEffect extends OxmlCompositeElement {
  static _Q = "w14:textFill";
  /** Returns NoFillEmpty. */
  get noFillEmpty() {
    return this._f(NoFillEmpty);
  }
  /** Returns SolidColorFillProperties. */
  get solidColorFillProperties() {
    return this._f(SolidColorFillProperties);
  }
  /** Returns GradientFillProperties. */
  get gradientFillProperties() {
    return this._f(GradientFillProperties);
  }
}
class TextOutlineEffect extends OxmlCompositeElement {
  static _Q = "w14:textOutline";
  static _A = ["w14:w", "w14:cap", "w14:cmpd", "w14:algn"];
  /** w. Serialized as `w14:w` */
  get lineWidth() {
    return this._g("w14:w");
  }
  set lineWidth(v) {
    this._s("w14:w", v);
  }
  /** cap. Serialized as `w14:cap` */
  get capType() {
    return this._g("w14:cap");
  }
  set capType(v) {
    this._s("w14:cap", v);
  }
  /** cmpd. Serialized as `w14:cmpd` */
  get compound() {
    return this._g("w14:cmpd");
  }
  set compound(v) {
    this._s("w14:cmpd", v);
  }
  /** algn. Serialized as `w14:algn` */
  get alignment() {
    return this._g("w14:algn");
  }
  set alignment(v) {
    this._s("w14:algn", v);
  }
}
class Reflection extends OxmlLeafElement {
  static _Q = "w14:reflection";
  static _A = ["w14:blurRad", "w14:stA", "w14:stPos", "w14:endA", "w14:endPos", "w14:dist", "w14:dir", "w14:fadeDir", "w14:sx", "w14:sy", "w14:kx", "w14:ky", "w14:algn"];
  /** blurRad. Serialized as `w14:blurRad` */
  get blurRadius() {
    return this._g("w14:blurRad");
  }
  set blurRadius(v) {
    this._s("w14:blurRad", v);
  }
  /** stA. Serialized as `w14:stA` */
  get startingOpacity() {
    return this._g("w14:stA");
  }
  set startingOpacity(v) {
    this._s("w14:stA", v);
  }
  /** stPos. Serialized as `w14:stPos` */
  get startPosition() {
    return this._g("w14:stPos");
  }
  set startPosition(v) {
    this._s("w14:stPos", v);
  }
  /** endA. Serialized as `w14:endA` */
  get endingOpacity() {
    return this._g("w14:endA");
  }
  set endingOpacity(v) {
    this._s("w14:endA", v);
  }
  /** endPos. Serialized as `w14:endPos` */
  get endPosition() {
    return this._g("w14:endPos");
  }
  set endPosition(v) {
    this._s("w14:endPos", v);
  }
  /** dist. Serialized as `w14:dist` */
  get distanceFromText() {
    return this._g("w14:dist");
  }
  set distanceFromText(v) {
    this._s("w14:dist", v);
  }
  /** dir. Serialized as `w14:dir` */
  get directionAngle() {
    return this._g("w14:dir");
  }
  set directionAngle(v) {
    this._s("w14:dir", v);
  }
  /** fadeDir. Serialized as `w14:fadeDir` */
  get fadeDirection() {
    return this._g("w14:fadeDir");
  }
  set fadeDirection(v) {
    this._s("w14:fadeDir", v);
  }
  /** sx. Serialized as `w14:sx` */
  get horizontalScalingFactor() {
    return this._g("w14:sx");
  }
  set horizontalScalingFactor(v) {
    this._s("w14:sx", v);
  }
  /** sy. Serialized as `w14:sy` */
  get verticalScalingFactor() {
    return this._g("w14:sy");
  }
  set verticalScalingFactor(v) {
    this._s("w14:sy", v);
  }
  /** kx. Serialized as `w14:kx` */
  get horizontalSkewAngle() {
    return this._g("w14:kx");
  }
  set horizontalSkewAngle(v) {
    this._s("w14:kx", v);
  }
  /** ky. Serialized as `w14:ky` */
  get verticalSkewAngle() {
    return this._g("w14:ky");
  }
  set verticalSkewAngle(v) {
    this._s("w14:ky", v);
  }
  /** algn. Serialized as `w14:algn` */
  get alignment() {
    return this._g("w14:algn");
  }
  set alignment(v) {
    this._s("w14:algn", v);
  }
}
class Shadow extends OxmlCompositeElement {
  static _Q = "w14:shadow";
  static _A = ["w14:blurRad", "w14:dist", "w14:dir", "w14:sx", "w14:sy", "w14:kx", "w14:ky", "w14:algn"];
  /** blurRad. Serialized as `w14:blurRad` */
  get blurRadius() {
    return this._g("w14:blurRad");
  }
  set blurRadius(v) {
    this._s("w14:blurRad", v);
  }
  /** dist. Serialized as `w14:dist` */
  get distanceFromText() {
    return this._g("w14:dist");
  }
  set distanceFromText(v) {
    this._s("w14:dist", v);
  }
  /** dir. Serialized as `w14:dir` */
  get directionAngle() {
    return this._g("w14:dir");
  }
  set directionAngle(v) {
    this._s("w14:dir", v);
  }
  /** sx. Serialized as `w14:sx` */
  get horizontalScalingFactor() {
    return this._g("w14:sx");
  }
  set horizontalScalingFactor(v) {
    this._s("w14:sx", v);
  }
  /** sy. Serialized as `w14:sy` */
  get verticalScalingFactor() {
    return this._g("w14:sy");
  }
  set verticalScalingFactor(v) {
    this._s("w14:sy", v);
  }
  /** kx. Serialized as `w14:kx` */
  get horizontalSkewAngle() {
    return this._g("w14:kx");
  }
  set horizontalSkewAngle(v) {
    this._s("w14:kx", v);
  }
  /** ky. Serialized as `w14:ky` */
  get verticalSkewAngle() {
    return this._g("w14:ky");
  }
  set verticalSkewAngle(v) {
    this._s("w14:ky", v);
  }
  /** algn. Serialized as `w14:algn` */
  get alignment() {
    return this._g("w14:algn");
  }
  set alignment(v) {
    this._s("w14:algn", v);
  }
  /** Returns RgbColorModelHex. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Returns SchemeColor. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
}
class Glow extends OxmlCompositeElement {
  static _Q = "w14:glow";
  static _A = ["w14:rad"];
  /** rad. Serialized as `w14:rad` */
  get glowRadius() {
    return this._g("w14:rad");
  }
  set glowRadius(v) {
    this._s("w14:rad", v);
  }
  /** Returns RgbColorModelHex. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Returns SchemeColor. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
}
class LineJoinMiterProperties extends OxmlLeafElement {
  static _Q = "w14:miter";
  static _A = ["w14:lim"];
  /** lim. Serialized as `w14:lim` */
  get limit() {
    return this._g("w14:lim");
  }
  set limit(v) {
    this._s("w14:lim", v);
  }
}
class PresetLineDashProperties extends OxmlLeafElement {
  static _Q = "w14:prstDash";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class GradientFillProperties extends OxmlCompositeElement {
  static _Q = "w14:gradFill";
  /** Returns GradientStopList. */
  get gradientStopList() {
    return this._f(GradientStopList);
  }
}
class SolidColorFillProperties extends OxmlCompositeElement {
  static _Q = "w14:solidFill";
  /** Returns RgbColorModelHex. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Returns SchemeColor. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
}
class EmptyType extends OxmlLeafElement {
}
class EntityPickerEmpty extends EmptyType {
  static _Q = "w14:entityPicker";
}
class BevelEmpty extends EmptyType {
  static _Q = "w14:bevel";
}
class RoundEmpty extends EmptyType {
  static _Q = "w14:round";
}
class NoFillEmpty extends EmptyType {
  static _Q = "w14:noFill";
}
class PathShadeProperties extends OxmlCompositeElement {
  static _Q = "w14:path";
  static _A = ["w14:path"];
  /** path. Serialized as `w14:path` */
  get path() {
    return this._g("w14:path");
  }
  set path(v) {
    this._s("w14:path", v);
  }
  /** Returns FillToRectangle. */
  get fillToRectangle() {
    return this._f(FillToRectangle);
  }
}
class LinearShadeProperties extends OxmlLeafElement {
  static _Q = "w14:lin";
  static _A = ["w14:ang", "w14:scaled"];
  /** ang. Serialized as `w14:ang` */
  get angle() {
    return this._g("w14:ang");
  }
  set angle(v) {
    this._s("w14:ang", v);
  }
  /** scaled. Serialized as `w14:scaled` */
  get scaled() {
    return this._g("w14:scaled");
  }
  set scaled(v) {
    this._s("w14:scaled", v);
  }
}
class SchemeColor extends OxmlCompositeElement {
  static _Q = "w14:schemeClr";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class RgbColorModelHex extends OxmlCompositeElement {
  static _Q = "w14:srgbClr";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class PercentageType extends OxmlLeafElement {
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class LuminanceModulation extends PercentageType {
  static _Q = "w14:lumMod";
}
class LuminanceOffset extends PercentageType {
  static _Q = "w14:lumOff";
}
class Luminance extends PercentageType {
  static _Q = "w14:lum";
}
class SaturationModulation extends PercentageType {
  static _Q = "w14:satMod";
}
class SaturationOffset extends PercentageType {
  static _Q = "w14:satOff";
}
class Saturation extends PercentageType {
  static _Q = "w14:sat";
}
class HueModulation extends OxmlLeafElement {
  static _Q = "w14:hueMod";
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class PositiveFixedPercentageType extends OxmlLeafElement {
  static _A = ["w14:val"];
  /** val. Serialized as `w14:val` */
  get val() {
    return this._g("w14:val");
  }
  set val(v) {
    this._s("w14:val", v);
  }
}
class Alpha extends PositiveFixedPercentageType {
  static _Q = "w14:alpha";
}
class Shade extends PositiveFixedPercentageType {
  static _Q = "w14:shade";
}
class Tint extends PositiveFixedPercentageType {
  static _Q = "w14:tint";
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
class CustomXmlConflictDeletionRangeStart extends TrackChangeType {
  static _Q = "w14:customXmlConflictDelRangeStart";
}
class CustomXmlConflictInsertionRangeStart extends TrackChangeType {
  static _Q = "w14:customXmlConflictInsRangeStart";
}
class ConflictDeletion extends TrackChangeType {
  static _Q = "w14:conflictDel";
}
class ConflictInsertion extends TrackChangeType {
  static _Q = "w14:conflictIns";
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
class RunConflictDeletion extends RunTrackChangeType {
  static _Q = "w14:conflictDel";
}
class RunConflictInsertion extends RunTrackChangeType {
  static _Q = "w14:conflictIns";
}
function initOffice2010WordNamespace() {
  OfficeArtExtensionList._C = {
    "a:ext": AExtension
  };
  Transform2D._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform2D._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  WordNonVisualContentPartShapeProperties._C = {
    "w14:cNvPr": NonVisualDrawingProperties,
    "w14:cNvContentPartPr": NonVisualInkContentPartProperties
  };
  NonVisualInkContentPartProperties._C = {
    "a14:cpLocks": A14ContentPartLocks,
    "a14:extLst": A14OfficeArtExtensionList
  };
  NonVisualInkContentPartProperties._D = {
    ":isComment": new OxmlAttr(":isComment", OxmlType.BooleanValue)
  };
  NonVisualDrawingProperties._C = {
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkHover": AHyperlinkOnHover,
    "a:extLst": ANonVisualDrawingPropertiesExtensionList
  };
  NonVisualDrawingProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  CheckBoxSymbolType._D = {
    "w14:font": new OxmlAttr("w14:font", OxmlType.StringValue),
    "w14:val": new OxmlAttr("w14:val", OxmlType.HexBinaryValue)
  };
  StyleSet._D = {
    "w14:id": new OxmlAttr("w14:id", OxmlType.UInt32Value),
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, OnOffValuesArray)
  };
  ColorType._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  ContourColor._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  ExtrusionColor._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  BevelType._D = {
    "w14:w": new OxmlAttr("w14:w", OxmlType.Int64Value),
    "w14:h": new OxmlAttr("w14:h", OxmlType.Int64Value),
    "w14:prst": new OxmlAttr("w14:prst", OxmlType.EnumValue, BevelPresetTypeValuesArray)
  };
  LightRig._C = {
    "w14:rot": SphereCoordinates
  };
  LightRig._D = {
    "w14:rig": new OxmlAttr("w14:rig", OxmlType.EnumValue, LightRigTypeValuesArray),
    "w14:dir": new OxmlAttr("w14:dir", OxmlType.EnumValue, LightRigDirectionValuesArray)
  };
  Camera._D = {
    "w14:prst": new OxmlAttr("w14:prst", OxmlType.EnumValue, PresetCameraTypeValuesArray)
  };
  SphereCoordinates._D = {
    "w14:lat": new OxmlAttr("w14:lat", OxmlType.Int32Value),
    "w14:lon": new OxmlAttr("w14:lon", OxmlType.Int32Value),
    "w14:rev": new OxmlAttr("w14:rev", OxmlType.Int32Value)
  };
  GradientStopList._C = {
    "w14:gs": GradientStop
  };
  FillToRectangle._D = {
    "w14:l": new OxmlAttr("w14:l", OxmlType.Int32Value),
    "w14:t": new OxmlAttr("w14:t", OxmlType.Int32Value),
    "w14:r": new OxmlAttr("w14:r", OxmlType.Int32Value),
    "w14:b": new OxmlAttr("w14:b", OxmlType.Int32Value)
  };
  GradientStop._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  GradientStop._D = {
    "w14:pos": new OxmlAttr("w14:pos", OxmlType.Int32Value)
  };
  SdtContentCheckBox._C = {
    "w14:checked": Checked,
    "w14:checkedState": CheckedState,
    "w14:uncheckedState": UncheckedState
  };
  DefaultImageDpi._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.Int32Value)
  };
  MarkupType._D = {
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  DocumentId._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.HexBinaryValue)
  };
  ContentPart._C = {
    "w14:nvContentPartPr": WordNonVisualContentPartShapeProperties,
    "w14:xfrm": Transform2D,
    "w14:extLst": OfficeArtExtensionList
  };
  ContentPart._D = {
    "w14:bwMode": new OxmlAttr("w14:bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  OnOffType._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, OnOffValuesArray)
  };
  StylisticSets._C = {
    "w14:styleSet": StyleSet
  };
  NumberSpacing._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, NumberSpacingValuesArray)
  };
  NumberingFormat._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, NumberFormValuesArray)
  };
  Ligatures._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, LigaturesValuesArray)
  };
  Properties3D._C = {
    "w14:bevelT": BevelTop,
    "w14:bevelB": BevelBottom,
    "w14:extrusionClr": ExtrusionColor,
    "w14:contourClr": ContourColor
  };
  Properties3D._D = {
    "w14:extrusionH": new OxmlAttr("w14:extrusionH", OxmlType.Int64Value),
    "w14:contourW": new OxmlAttr("w14:contourW", OxmlType.Int64Value),
    "w14:prstMaterial": new OxmlAttr("w14:prstMaterial", OxmlType.EnumValue, PresetMaterialTypeValuesArray)
  };
  Scene3D._C = {
    "w14:camera": Camera,
    "w14:lightRig": LightRig
  };
  FillTextEffect._C = {
    "w14:noFill": NoFillEmpty,
    "w14:solidFill": SolidColorFillProperties,
    "w14:gradFill": GradientFillProperties
  };
  TextOutlineEffect._C = {
    "w14:noFill": NoFillEmpty,
    "w14:solidFill": SolidColorFillProperties,
    "w14:gradFill": GradientFillProperties,
    "w14:prstDash": PresetLineDashProperties,
    "w14:round": RoundEmpty,
    "w14:bevel": BevelEmpty,
    "w14:miter": LineJoinMiterProperties
  };
  TextOutlineEffect._D = {
    "w14:w": new OxmlAttr("w14:w", OxmlType.Int32Value),
    "w14:cap": new OxmlAttr("w14:cap", OxmlType.EnumValue, LineCapValuesArray),
    "w14:cmpd": new OxmlAttr("w14:cmpd", OxmlType.EnumValue, CompoundLineValuesArray),
    "w14:algn": new OxmlAttr("w14:algn", OxmlType.EnumValue, PenAlignmentValuesArray)
  };
  Reflection._D = {
    "w14:blurRad": new OxmlAttr("w14:blurRad", OxmlType.Int64Value),
    "w14:stA": new OxmlAttr("w14:stA", OxmlType.Int32Value),
    "w14:stPos": new OxmlAttr("w14:stPos", OxmlType.Int32Value),
    "w14:endA": new OxmlAttr("w14:endA", OxmlType.Int32Value),
    "w14:endPos": new OxmlAttr("w14:endPos", OxmlType.Int32Value),
    "w14:dist": new OxmlAttr("w14:dist", OxmlType.Int64Value),
    "w14:dir": new OxmlAttr("w14:dir", OxmlType.Int32Value),
    "w14:fadeDir": new OxmlAttr("w14:fadeDir", OxmlType.Int32Value),
    "w14:sx": new OxmlAttr("w14:sx", OxmlType.Int32Value),
    "w14:sy": new OxmlAttr("w14:sy", OxmlType.Int32Value),
    "w14:kx": new OxmlAttr("w14:kx", OxmlType.Int32Value),
    "w14:ky": new OxmlAttr("w14:ky", OxmlType.Int32Value),
    "w14:algn": new OxmlAttr("w14:algn", OxmlType.EnumValue, RectangleAlignmentValuesArray)
  };
  Shadow._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  Shadow._D = {
    "w14:blurRad": new OxmlAttr("w14:blurRad", OxmlType.Int64Value),
    "w14:dist": new OxmlAttr("w14:dist", OxmlType.Int64Value),
    "w14:dir": new OxmlAttr("w14:dir", OxmlType.Int32Value),
    "w14:sx": new OxmlAttr("w14:sx", OxmlType.Int32Value),
    "w14:sy": new OxmlAttr("w14:sy", OxmlType.Int32Value),
    "w14:kx": new OxmlAttr("w14:kx", OxmlType.Int32Value),
    "w14:ky": new OxmlAttr("w14:ky", OxmlType.Int32Value),
    "w14:algn": new OxmlAttr("w14:algn", OxmlType.EnumValue, RectangleAlignmentValuesArray)
  };
  Glow._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  Glow._D = {
    "w14:rad": new OxmlAttr("w14:rad", OxmlType.Int64Value)
  };
  LineJoinMiterProperties._D = {
    "w14:lim": new OxmlAttr("w14:lim", OxmlType.Int32Value)
  };
  PresetLineDashProperties._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, PresetLineDashValuesArray)
  };
  GradientFillProperties._C = {
    "w14:gsLst": GradientStopList,
    "w14:lin": LinearShadeProperties,
    "w14:path": PathShadeProperties
  };
  SolidColorFillProperties._C = {
    "w14:srgbClr": RgbColorModelHex,
    "w14:schemeClr": SchemeColor
  };
  PathShadeProperties._C = {
    "w14:fillToRect": FillToRectangle
  };
  PathShadeProperties._D = {
    "w14:path": new OxmlAttr("w14:path", OxmlType.EnumValue, PathShadeTypeValuesArray)
  };
  LinearShadeProperties._D = {
    "w14:ang": new OxmlAttr("w14:ang", OxmlType.Int32Value),
    "w14:scaled": new OxmlAttr("w14:scaled", OxmlType.EnumValue, OnOffValuesArray)
  };
  SchemeColor._C = {
    "w14:tint": Tint,
    "w14:shade": Shade,
    "w14:alpha": Alpha,
    "w14:hueMod": HueModulation,
    "w14:sat": Saturation,
    "w14:satOff": SaturationOffset,
    "w14:satMod": SaturationModulation,
    "w14:lum": Luminance,
    "w14:lumOff": LuminanceOffset,
    "w14:lumMod": LuminanceModulation
  };
  SchemeColor._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.EnumValue, SchemeColorValuesArray)
  };
  RgbColorModelHex._C = {
    "w14:tint": Tint,
    "w14:shade": Shade,
    "w14:alpha": Alpha,
    "w14:hueMod": HueModulation,
    "w14:sat": Saturation,
    "w14:satOff": SaturationOffset,
    "w14:satMod": SaturationModulation,
    "w14:lum": Luminance,
    "w14:lumOff": LuminanceOffset,
    "w14:lumMod": LuminanceModulation
  };
  RgbColorModelHex._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.HexBinaryValue)
  };
  PercentageType._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.Int32Value)
  };
  HueModulation._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.Int32Value)
  };
  PositiveFixedPercentageType._D = {
    "w14:val": new OxmlAttr("w14:val", OxmlType.Int32Value)
  };
  TrackChangeType._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  RunTrackChangeType._C = {
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
    "w14:customXmlConflictInsRangeStart": CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": RunConflictInsertion,
    "w14:conflictDel": RunConflictDeletion,
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
    "w:r": WRun,
    "w:bdo": WBidirectionalOverride,
    "w:dir": WBidirectionalEmbedding
  };
  RunTrackChangeType._D = {
    "w:author": new OxmlAttr("w:author", OxmlType.StringValue),
    "w:date": new OxmlAttr("w:date", OxmlType.DateTimeValue),
    "w16du:dateUtc": new OxmlAttr("w16du:dateUtc", OxmlType.DateTimeValue),
    "w:id": new OxmlAttr("w:id", OxmlType.StringValue)
  };
  RunConflictDeletion._C = {
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
    "w14:customXmlConflictInsRangeStart": CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": RunConflictInsertion,
    "w14:conflictDel": RunConflictDeletion,
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
    "w:r": WRun,
    "w:bdo": WBidirectionalOverride,
    "w:dir": WBidirectionalEmbedding
  };
  RunConflictInsertion._C = {
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
    "w14:customXmlConflictInsRangeStart": CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": CustomXmlConflictDeletionRangeEnd,
    "w:ins": WInsertedRun,
    "w:del": WDeletedRun,
    "w:moveFrom": WMoveFromRun,
    "w:moveTo": WMoveToRun,
    "w:contentPart": WContentPart,
    "w14:conflictIns": RunConflictInsertion,
    "w14:conflictDel": RunConflictDeletion,
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
    "w:r": WRun,
    "w:bdo": WBidirectionalOverride,
    "w:dir": WBidirectionalEmbedding
  };
  return {
    prefix: "w14",
    xmlns: "http://schemas.microsoft.com/office/word/2010/wordml"
  };
}
export {
  Alpha,
  BevelBottom,
  BevelEmpty,
  BevelPresetTypeValues,
  BevelPresetTypeValuesArray,
  BevelTop,
  BevelType,
  Camera,
  CheckBoxSymbolType,
  Checked,
  CheckedState,
  ColorType,
  CompoundLineValues,
  CompoundLineValuesArray,
  ConflictDeletion,
  ConflictInsertion,
  ConflictMode,
  ContentPart,
  ContextualAlternatives,
  ContourColor,
  CustomXmlConflictDeletionRangeEnd,
  CustomXmlConflictDeletionRangeStart,
  CustomXmlConflictInsertionRangeEnd,
  CustomXmlConflictInsertionRangeStart,
  DefaultImageDpi,
  DiscardImageEditingData,
  DocumentId,
  EmptyType,
  EntityPickerEmpty,
  ExtrusionColor,
  FillTextEffect,
  FillToRectangle,
  Glow,
  GradientFillProperties,
  GradientStop,
  GradientStopList,
  HueModulation,
  Ligatures,
  LigaturesValues,
  LigaturesValuesArray,
  LightRig,
  LightRigDirectionValues,
  LightRigDirectionValuesArray,
  LightRigTypeValues,
  LightRigTypeValuesArray,
  LineCapValues,
  LineCapValuesArray,
  LineJoinMiterProperties,
  LinearShadeProperties,
  Luminance,
  LuminanceModulation,
  LuminanceOffset,
  MarkupType,
  NoFillEmpty,
  NonVisualDrawingProperties,
  NonVisualInkContentPartProperties,
  NumberFormValues,
  NumberFormValuesArray,
  NumberSpacing,
  NumberSpacingValues,
  NumberSpacingValuesArray,
  NumberingFormat,
  OfficeArtExtensionList,
  OnOffType,
  OnOffValues,
  OnOffValuesArray,
  PathShadeProperties,
  PathShadeTypeValues,
  PathShadeTypeValuesArray,
  PenAlignmentValues,
  PenAlignmentValuesArray,
  PercentageType,
  PositiveFixedPercentageType,
  PresetCameraTypeValues,
  PresetCameraTypeValuesArray,
  PresetLineDashProperties,
  PresetLineDashValues,
  PresetLineDashValuesArray,
  PresetMaterialTypeValues,
  PresetMaterialTypeValuesArray,
  Properties3D,
  RectangleAlignmentValues,
  RectangleAlignmentValuesArray,
  Reflection,
  RgbColorModelHex,
  RoundEmpty,
  RunConflictDeletion,
  RunConflictInsertion,
  RunTrackChangeType,
  Saturation,
  SaturationModulation,
  SaturationOffset,
  Scene3D,
  SchemeColor,
  SchemeColorValues,
  SchemeColorValuesArray,
  SdtContentCheckBox,
  Shade,
  Shadow,
  SolidColorFillProperties,
  SphereCoordinates,
  StyleSet,
  StylisticSets,
  TextOutlineEffect,
  Tint,
  TrackChangeType,
  Transform2D,
  UncheckedState,
  WordNonVisualContentPartShapeProperties,
  initOffice2010WordNamespace
};
