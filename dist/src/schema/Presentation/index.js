import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { BlackWhiteModeValuesArray } from "../Drawing";
import { ColorSchemeIndexValuesArray } from "../Drawing";
import { Diagram as ADiagram } from "../Drawing";
import { Chart as AChart } from "../Drawing";
import { DiscardImageEditData as P14DiscardImageEditData } from "../Office2010/PowerPoint";
import { DefaultImageDpi as P14DefaultImageDpi } from "../Office2010/PowerPoint";
import { TextMath as A14TextMath } from "../Office2010/Drawing";
import { ChartTrackingReferenceBased as P15ChartTrackingReferenceBased } from "../Office2013/PowerPoint";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../Drawing";
import { HslColor as AHslColor } from "../Drawing";
import { SystemColor as ASystemColor } from "../Drawing";
import { SchemeColor as ASchemeColor } from "../Drawing";
import { PresetColor as APresetColor } from "../Drawing";
import { SectionProperties as P14SectionProperties } from "../Office2010/PowerPoint";
import { SectionList as P14SectionList } from "../Office2010/PowerPoint";
import { SlideGuideList as P15SlideGuideList } from "../Office2013/PowerPoint";
import { NotesGuideList as P15NotesGuideList } from "../Office2013/PowerPoint";
import { Media as P14Media } from "../Office2010/PowerPoint";
import { ModificationId as P14ModificationId } from "../Office2010/PowerPoint";
import { ThreadingInfo as P15ThreadingInfo } from "../Office2013/PowerPoint";
import { PresenceInfo as P15PresenceInfo } from "../Office2013/PowerPoint";
import { Graphic as AGraphic } from "../Drawing";
import { TransformGroup as ATransformGroup } from "../Drawing";
import { NoFill as ANoFill } from "../Drawing";
import { SolidFill as ASolidFill } from "../Drawing";
import { GradientFill as AGradientFill } from "../Drawing";
import { BlipFill as ABlipFill } from "../Drawing";
import { PatternFill as APatternFill } from "../Drawing";
import { GroupFill as AGroupFill } from "../Drawing";
import { EffectList as AEffectList } from "../Drawing";
import { EffectDag as AEffectDag } from "../Drawing";
import { Scene3DType as AScene3DType } from "../Drawing";
import { ExtensionList as AExtensionList } from "../Drawing";
import { FlashTransition as P14FlashTransition } from "../Office2010/PowerPoint";
import { VortexTransition as P14VortexTransition } from "../Office2010/PowerPoint";
import { SwitchTransition as P14SwitchTransition } from "../Office2010/PowerPoint";
import { FlipTransition as P14FlipTransition } from "../Office2010/PowerPoint";
import { RippleTransition as P14RippleTransition } from "../Office2010/PowerPoint";
import { GlitterTransition as P14GlitterTransition } from "../Office2010/PowerPoint";
import { HoneycombTransition as P14HoneycombTransition } from "../Office2010/PowerPoint";
import { PrismTransition as P14PrismTransition } from "../Office2010/PowerPoint";
import { DoorsTransition as P14DoorsTransition } from "../Office2010/PowerPoint";
import { WindowTransition as P14WindowTransition } from "../Office2010/PowerPoint";
import { ShredTransition as P14ShredTransition } from "../Office2010/PowerPoint";
import { FerrisTransition as P14FerrisTransition } from "../Office2010/PowerPoint";
import { FlythroughTransition as P14FlythroughTransition } from "../Office2010/PowerPoint";
import { WarpTransition as P14WarpTransition } from "../Office2010/PowerPoint";
import { GalleryTransition as P14GalleryTransition } from "../Office2010/PowerPoint";
import { ConveyorTransition as P14ConveyorTransition } from "../Office2010/PowerPoint";
import { PanTransition as P14PanTransition } from "../Office2010/PowerPoint";
import { RevealTransition as P14RevealTransition } from "../Office2010/PowerPoint";
import { WheelReverseTransition as P14WheelReverseTransition } from "../Office2010/PowerPoint";
import { PresetTransition as P15PresetTransition } from "../Office2013/PowerPoint";
import { BrowseMode as P14BrowseMode } from "../Office2010/PowerPoint";
import { LaserColor as P14LaserColor } from "../Office2010/PowerPoint";
import { ShowMediaControls as P14ShowMediaControls } from "../Office2010/PowerPoint";
import { CreationId as P14CreationId } from "../Office2010/PowerPoint";
import { LaserTraceList as P14LaserTraceList } from "../Office2010/PowerPoint";
import { ShowEventRecordList as P14ShowEventRecordList } from "../Office2010/PowerPoint";
import { CommentRelationship as P188CommentRelationship } from "../Office2021/PowerPoint/Comment";
import { ScaleX as AScaleX } from "../Drawing";
import { ScaleY as AScaleY } from "../Drawing";
import { DefaultParagraphProperties as ADefaultParagraphProperties } from "../Drawing";
import { Level1ParagraphProperties as ALevel1ParagraphProperties } from "../Drawing";
import { Level2ParagraphProperties as ALevel2ParagraphProperties } from "../Drawing";
import { Level3ParagraphProperties as ALevel3ParagraphProperties } from "../Drawing";
import { Level4ParagraphProperties as ALevel4ParagraphProperties } from "../Drawing";
import { Level5ParagraphProperties as ALevel5ParagraphProperties } from "../Drawing";
import { Level6ParagraphProperties as ALevel6ParagraphProperties } from "../Drawing";
import { Level7ParagraphProperties as ALevel7ParagraphProperties } from "../Drawing";
import { Level8ParagraphProperties as ALevel8ParagraphProperties } from "../Drawing";
import { Level9ParagraphProperties as ALevel9ParagraphProperties } from "../Drawing";
import { GroupShapeLocks as AGroupShapeLocks } from "../Drawing";
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from "../Drawing";
import { Offset as AOffset } from "../Drawing";
import { Extents as AExtents } from "../Drawing";
import { GraphicFrameLocks as AGraphicFrameLocks } from "../Drawing";
import { Blip as ABlip } from "../Drawing";
import { SourceRectangle as ASourceRectangle } from "../Drawing";
import { Tile as ATile } from "../Drawing";
import { Stretch as AStretch } from "../Drawing";
import { PictureLocks as APictureLocks } from "../Drawing";
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from "../Drawing";
import { ConnectionShapeLocks as AConnectionShapeLocks } from "../Drawing";
import { StartConnection as AStartConnection } from "../Drawing";
import { EndConnection as AEndConnection } from "../Drawing";
import { BodyProperties as ABodyProperties } from "../Drawing";
import { ListStyle as AListStyle } from "../Drawing";
import { Paragraph as AParagraph } from "../Drawing";
import { LineReference as ALineReference } from "../Drawing";
import { FillReference as AFillReference } from "../Drawing";
import { EffectReference as AEffectReference } from "../Drawing";
import { FontReference as AFontReference } from "../Drawing";
import { Transform2D as ATransform2D } from "../Drawing";
import { CustomGeometry as ACustomGeometry } from "../Drawing";
import { PresetGeometry as APresetGeometry } from "../Drawing";
import { Outline as AOutline } from "../Drawing";
import { Shape3DType as AShape3DType } from "../Drawing";
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from "../Drawing";
import { AudioFromCD as AAudioFromCD } from "../Drawing";
import { WaveAudioFile as AWaveAudioFile } from "../Drawing";
import { AudioFromFile as AAudioFromFile } from "../Drawing";
import { VideoFromFile as AVideoFromFile } from "../Drawing";
import { QuickTimeFromFile as AQuickTimeFromFile } from "../Drawing";
import { ShapeLocks as AShapeLocks } from "../Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../Drawing";
import { BuildDiagram as ABuildDiagram } from "../Drawing";
import { BuildChart as ABuildChart } from "../Drawing";
import { BookmarkTarget as P14BookmarkTarget } from "../Office2010/PowerPoint";
import { NonVisualContentPartProperties as P14NonVisualContentPartProperties } from "../Office2010/PowerPoint";
import { Transform2D as P14Transform2D } from "../Office2010/PowerPoint";
import { ExtensionListModify as P14ExtensionListModify } from "../Office2010/PowerPoint";
import { MasterColorMapping as AMasterColorMapping } from "../Drawing";
import { OverrideColorMapping as AOverrideColorMapping } from "../Drawing";
var TransitionSlideDirectionValues = /* @__PURE__ */ ((TransitionSlideDirectionValues2) => {
  TransitionSlideDirectionValues2["Left"] = "l";
  TransitionSlideDirectionValues2["Up"] = "u";
  TransitionSlideDirectionValues2["Right"] = "r";
  TransitionSlideDirectionValues2["Down"] = "d";
  return TransitionSlideDirectionValues2;
})(TransitionSlideDirectionValues || {});
const TransitionSlideDirectionValuesArray = [
  "l" /* Left */,
  "u" /* Up */,
  "r" /* Right */,
  "d" /* Down */
];
var TransitionCornerDirectionValues = /* @__PURE__ */ ((TransitionCornerDirectionValues2) => {
  TransitionCornerDirectionValues2["LeftUp"] = "lu";
  TransitionCornerDirectionValues2["RightUp"] = "ru";
  TransitionCornerDirectionValues2["LeftDown"] = "ld";
  TransitionCornerDirectionValues2["RightDown"] = "rd";
  return TransitionCornerDirectionValues2;
})(TransitionCornerDirectionValues || {});
const TransitionCornerDirectionValuesArray = [
  "lu" /* LeftUp */,
  "ru" /* RightUp */,
  "ld" /* LeftDown */,
  "rd" /* RightDown */
];
var TransitionInOutDirectionValues = /* @__PURE__ */ ((TransitionInOutDirectionValues2) => {
  TransitionInOutDirectionValues2["Out"] = "out";
  TransitionInOutDirectionValues2["In"] = "in";
  return TransitionInOutDirectionValues2;
})(TransitionInOutDirectionValues || {});
const TransitionInOutDirectionValuesArray = [
  "out" /* Out */,
  "in" /* In */
];
var TransitionSpeedValues = /* @__PURE__ */ ((TransitionSpeedValues2) => {
  TransitionSpeedValues2["Slow"] = "slow";
  TransitionSpeedValues2["Medium"] = "med";
  TransitionSpeedValues2["Fast"] = "fast";
  return TransitionSpeedValues2;
})(TransitionSpeedValues || {});
const TransitionSpeedValuesArray = [
  "slow" /* Slow */,
  "med" /* Medium */,
  "fast" /* Fast */
];
var IndefiniteTimeDeclarationValues = /* @__PURE__ */ ((IndefiniteTimeDeclarationValues2) => {
  IndefiniteTimeDeclarationValues2["Indefinite"] = "indefinite";
  return IndefiniteTimeDeclarationValues2;
})(IndefiniteTimeDeclarationValues || {});
const IndefiniteTimeDeclarationValuesArray = [
  "indefinite" /* Indefinite */
];
var IterateValues = /* @__PURE__ */ ((IterateValues2) => {
  IterateValues2["Element"] = "el";
  IterateValues2["Word"] = "wd";
  IterateValues2["Letter"] = "lt";
  return IterateValues2;
})(IterateValues || {});
const IterateValuesArray = [
  "el" /* Element */,
  "wd" /* Word */,
  "lt" /* Letter */
];
var ChartSubElementValues = /* @__PURE__ */ ((ChartSubElementValues2) => {
  ChartSubElementValues2["GridLegend"] = "gridLegend";
  ChartSubElementValues2["Series"] = "series";
  ChartSubElementValues2["Category"] = "category";
  ChartSubElementValues2["PointInSeries"] = "ptInSeries";
  ChartSubElementValues2["PointInCategory"] = "ptInCategory";
  return ChartSubElementValues2;
})(ChartSubElementValues || {});
const ChartSubElementValuesArray = [
  "gridLegend" /* GridLegend */,
  "series" /* Series */,
  "category" /* Category */,
  "ptInSeries" /* PointInSeries */,
  "ptInCategory" /* PointInCategory */
];
var TriggerRuntimeNodeValues = /* @__PURE__ */ ((TriggerRuntimeNodeValues2) => {
  TriggerRuntimeNodeValues2["First"] = "first";
  TriggerRuntimeNodeValues2["Last"] = "last";
  TriggerRuntimeNodeValues2["All"] = "all";
  return TriggerRuntimeNodeValues2;
})(TriggerRuntimeNodeValues || {});
const TriggerRuntimeNodeValuesArray = [
  "first" /* First */,
  "last" /* Last */,
  "all" /* All */
];
var TimeNodePresetClassValues = /* @__PURE__ */ ((TimeNodePresetClassValues2) => {
  TimeNodePresetClassValues2["Entrance"] = "entr";
  TimeNodePresetClassValues2["Exit"] = "exit";
  TimeNodePresetClassValues2["Emphasis"] = "emph";
  TimeNodePresetClassValues2["Path"] = "path";
  TimeNodePresetClassValues2["Verb"] = "verb";
  TimeNodePresetClassValues2["MediaCall"] = "mediacall";
  return TimeNodePresetClassValues2;
})(TimeNodePresetClassValues || {});
const TimeNodePresetClassValuesArray = [
  "entr" /* Entrance */,
  "exit" /* Exit */,
  "emph" /* Emphasis */,
  "path" /* Path */,
  "verb" /* Verb */,
  "mediacall" /* MediaCall */
];
var TimeNodeRestartValues = /* @__PURE__ */ ((TimeNodeRestartValues2) => {
  TimeNodeRestartValues2["Always"] = "always";
  TimeNodeRestartValues2["WhenNotActive"] = "whenNotActive";
  TimeNodeRestartValues2["Never"] = "never";
  return TimeNodeRestartValues2;
})(TimeNodeRestartValues || {});
const TimeNodeRestartValuesArray = [
  "always" /* Always */,
  "whenNotActive" /* WhenNotActive */,
  "never" /* Never */
];
var TimeNodeFillValues = /* @__PURE__ */ ((TimeNodeFillValues2) => {
  TimeNodeFillValues2["Remove"] = "remove";
  TimeNodeFillValues2["Freeze"] = "freeze";
  TimeNodeFillValues2["Hold"] = "hold";
  TimeNodeFillValues2["Transition"] = "transition";
  return TimeNodeFillValues2;
})(TimeNodeFillValues || {});
const TimeNodeFillValuesArray = [
  "remove" /* Remove */,
  "freeze" /* Freeze */,
  "hold" /* Hold */,
  "transition" /* Transition */
];
var TimeNodeValues = /* @__PURE__ */ ((TimeNodeValues2) => {
  TimeNodeValues2["ClickEffect"] = "clickEffect";
  TimeNodeValues2["WithEffect"] = "withEffect";
  TimeNodeValues2["AfterEffect"] = "afterEffect";
  TimeNodeValues2["MainSequence"] = "mainSeq";
  TimeNodeValues2["InteractiveSequence"] = "interactiveSeq";
  TimeNodeValues2["ClickParagraph"] = "clickPar";
  TimeNodeValues2["WithGroup"] = "withGroup";
  TimeNodeValues2["AfterGroup"] = "afterGroup";
  TimeNodeValues2["TmingRoot"] = "tmRoot";
  return TimeNodeValues2;
})(TimeNodeValues || {});
const TimeNodeValuesArray = [
  "clickEffect" /* ClickEffect */,
  "withEffect" /* WithEffect */,
  "afterEffect" /* AfterEffect */,
  "mainSeq" /* MainSequence */,
  "interactiveSeq" /* InteractiveSequence */,
  "clickPar" /* ClickParagraph */,
  "withGroup" /* WithGroup */,
  "afterGroup" /* AfterGroup */,
  "tmRoot" /* TmingRoot */
];
var NextActionValues = /* @__PURE__ */ ((NextActionValues2) => {
  NextActionValues2["None"] = "none";
  NextActionValues2["Seek"] = "seek";
  return NextActionValues2;
})(NextActionValues || {});
const NextActionValuesArray = [
  "none" /* None */,
  "seek" /* Seek */
];
var PreviousActionValues = /* @__PURE__ */ ((PreviousActionValues2) => {
  PreviousActionValues2["None"] = "none";
  PreviousActionValues2["SkipTimed"] = "skipTimed";
  return PreviousActionValues2;
})(PreviousActionValues || {});
const PreviousActionValuesArray = [
  "none" /* None */,
  "skipTimed" /* SkipTimed */
];
var BehaviorAdditiveValues = /* @__PURE__ */ ((BehaviorAdditiveValues2) => {
  BehaviorAdditiveValues2["Base"] = "base";
  BehaviorAdditiveValues2["Sum"] = "sum";
  BehaviorAdditiveValues2["Replace"] = "repl";
  BehaviorAdditiveValues2["Multiply"] = "mult";
  BehaviorAdditiveValues2["None"] = "none";
  return BehaviorAdditiveValues2;
})(BehaviorAdditiveValues || {});
const BehaviorAdditiveValuesArray = [
  "base" /* Base */,
  "sum" /* Sum */,
  "repl" /* Replace */,
  "mult" /* Multiply */,
  "none" /* None */
];
var BehaviorAccumulateValues = /* @__PURE__ */ ((BehaviorAccumulateValues2) => {
  BehaviorAccumulateValues2["None"] = "none";
  BehaviorAccumulateValues2["Always"] = "always";
  return BehaviorAccumulateValues2;
})(BehaviorAccumulateValues || {});
const BehaviorAccumulateValuesArray = [
  "none" /* None */,
  "always" /* Always */
];
var BehaviorTransformValues = /* @__PURE__ */ ((BehaviorTransformValues2) => {
  BehaviorTransformValues2["Point"] = "pt";
  BehaviorTransformValues2["Image"] = "img";
  return BehaviorTransformValues2;
})(BehaviorTransformValues || {});
const BehaviorTransformValuesArray = [
  "pt" /* Point */,
  "img" /* Image */
];
var BehaviorOverrideValues = /* @__PURE__ */ ((BehaviorOverrideValues2) => {
  BehaviorOverrideValues2["Normal"] = "normal";
  BehaviorOverrideValues2["ChildStyle"] = "childStyle";
  return BehaviorOverrideValues2;
})(BehaviorOverrideValues || {});
const BehaviorOverrideValuesArray = [
  "normal" /* Normal */,
  "childStyle" /* ChildStyle */
];
var AnimateBehaviorCalculateModeValues = /* @__PURE__ */ ((AnimateBehaviorCalculateModeValues2) => {
  AnimateBehaviorCalculateModeValues2["Discrete"] = "discrete";
  AnimateBehaviorCalculateModeValues2["Linear"] = "lin";
  AnimateBehaviorCalculateModeValues2["Formula"] = "fmla";
  return AnimateBehaviorCalculateModeValues2;
})(AnimateBehaviorCalculateModeValues || {});
const AnimateBehaviorCalculateModeValuesArray = [
  "discrete" /* Discrete */,
  "lin" /* Linear */,
  "fmla" /* Formula */
];
var AnimateBehaviorValues = /* @__PURE__ */ ((AnimateBehaviorValues2) => {
  AnimateBehaviorValues2["String"] = "str";
  AnimateBehaviorValues2["Number"] = "num";
  AnimateBehaviorValues2["Color"] = "clr";
  return AnimateBehaviorValues2;
})(AnimateBehaviorValues || {});
const AnimateBehaviorValuesArray = [
  "str" /* String */,
  "num" /* Number */,
  "clr" /* Color */
];
var AnimateColorSpaceValues = /* @__PURE__ */ ((AnimateColorSpaceValues2) => {
  AnimateColorSpaceValues2["Rgb"] = "rgb";
  AnimateColorSpaceValues2["Hsl"] = "hsl";
  return AnimateColorSpaceValues2;
})(AnimateColorSpaceValues || {});
const AnimateColorSpaceValuesArray = [
  "rgb" /* Rgb */,
  "hsl" /* Hsl */
];
var AnimateColorDirectionValues = /* @__PURE__ */ ((AnimateColorDirectionValues2) => {
  AnimateColorDirectionValues2["Clockwise"] = "cw";
  AnimateColorDirectionValues2["CounterClockwise"] = "ccw";
  return AnimateColorDirectionValues2;
})(AnimateColorDirectionValues || {});
const AnimateColorDirectionValuesArray = [
  "cw" /* Clockwise */,
  "ccw" /* CounterClockwise */
];
var AnimateEffectTransitionValues = /* @__PURE__ */ ((AnimateEffectTransitionValues2) => {
  AnimateEffectTransitionValues2["In"] = "in";
  AnimateEffectTransitionValues2["Out"] = "out";
  AnimateEffectTransitionValues2["None"] = "none";
  return AnimateEffectTransitionValues2;
})(AnimateEffectTransitionValues || {});
const AnimateEffectTransitionValuesArray = [
  "in" /* In */,
  "out" /* Out */,
  "none" /* None */
];
var AnimateMotionBehaviorOriginValues = /* @__PURE__ */ ((AnimateMotionBehaviorOriginValues2) => {
  AnimateMotionBehaviorOriginValues2["Parent"] = "parent";
  AnimateMotionBehaviorOriginValues2["Layout"] = "layout";
  return AnimateMotionBehaviorOriginValues2;
})(AnimateMotionBehaviorOriginValues || {});
const AnimateMotionBehaviorOriginValuesArray = [
  "parent" /* Parent */,
  "layout" /* Layout */
];
var AnimateMotionPathEditModeValues = /* @__PURE__ */ ((AnimateMotionPathEditModeValues2) => {
  AnimateMotionPathEditModeValues2["Relative"] = "relative";
  AnimateMotionPathEditModeValues2["Fixed"] = "fixed";
  return AnimateMotionPathEditModeValues2;
})(AnimateMotionPathEditModeValues || {});
const AnimateMotionPathEditModeValuesArray = [
  "relative" /* Relative */,
  "fixed" /* Fixed */
];
var CommandValues = /* @__PURE__ */ ((CommandValues2) => {
  CommandValues2["Event"] = "evt";
  CommandValues2["Call"] = "call";
  CommandValues2["Verb"] = "verb";
  return CommandValues2;
})(CommandValues || {});
const CommandValuesArray = [
  "evt" /* Event */,
  "call" /* Call */,
  "verb" /* Verb */
];
var ParagraphBuildValues = /* @__PURE__ */ ((ParagraphBuildValues2) => {
  ParagraphBuildValues2["AllAtOnce"] = "allAtOnce";
  ParagraphBuildValues2["Paragraph"] = "p";
  ParagraphBuildValues2["Custom"] = "cust";
  ParagraphBuildValues2["Whole"] = "whole";
  return ParagraphBuildValues2;
})(ParagraphBuildValues || {});
const ParagraphBuildValuesArray = [
  "allAtOnce" /* AllAtOnce */,
  "p" /* Paragraph */,
  "cust" /* Custom */,
  "whole" /* Whole */
];
var DiagramBuildValues = /* @__PURE__ */ ((DiagramBuildValues2) => {
  DiagramBuildValues2["Whole"] = "whole";
  DiagramBuildValues2["DepthByNode"] = "depthByNode";
  DiagramBuildValues2["DepthByBranch"] = "depthByBranch";
  DiagramBuildValues2["BreadthByNode"] = "breadthByNode";
  DiagramBuildValues2["BreadthByLevel"] = "breadthByLvl";
  DiagramBuildValues2["Clockwise"] = "cw";
  DiagramBuildValues2["ClockwiseIn"] = "cwIn";
  DiagramBuildValues2["ClockwiseOut"] = "cwOut";
  DiagramBuildValues2["CounterClockwise"] = "ccw";
  DiagramBuildValues2["CounterClockwiseIn"] = "ccwIn";
  DiagramBuildValues2["CounterClockwiseOut"] = "ccwOut";
  DiagramBuildValues2["InByRing"] = "inByRing";
  DiagramBuildValues2["OutByRing"] = "outByRing";
  DiagramBuildValues2["Up"] = "up";
  DiagramBuildValues2["Down"] = "down";
  DiagramBuildValues2["AllAtOnce"] = "allAtOnce";
  DiagramBuildValues2["Custom"] = "cust";
  return DiagramBuildValues2;
})(DiagramBuildValues || {});
const DiagramBuildValuesArray = [
  "whole" /* Whole */,
  "depthByNode" /* DepthByNode */,
  "depthByBranch" /* DepthByBranch */,
  "breadthByNode" /* BreadthByNode */,
  "breadthByLvl" /* BreadthByLevel */,
  "cw" /* Clockwise */,
  "cwIn" /* ClockwiseIn */,
  "cwOut" /* ClockwiseOut */,
  "ccw" /* CounterClockwise */,
  "ccwIn" /* CounterClockwiseIn */,
  "ccwOut" /* CounterClockwiseOut */,
  "inByRing" /* InByRing */,
  "outByRing" /* OutByRing */,
  "up" /* Up */,
  "down" /* Down */,
  "allAtOnce" /* AllAtOnce */,
  "cust" /* Custom */
];
var OleChartBuildValues = /* @__PURE__ */ ((OleChartBuildValues2) => {
  OleChartBuildValues2["AllAtOnce"] = "allAtOnce";
  OleChartBuildValues2["Series"] = "series";
  OleChartBuildValues2["Category"] = "category";
  OleChartBuildValues2["SeriesElement"] = "seriesEl";
  OleChartBuildValues2["CategoryElement"] = "categoryEl";
  return OleChartBuildValues2;
})(OleChartBuildValues || {});
const OleChartBuildValuesArray = [
  "allAtOnce" /* AllAtOnce */,
  "series" /* Series */,
  "category" /* Category */,
  "seriesEl" /* SeriesElement */,
  "categoryEl" /* CategoryElement */
];
var TimeNodeMasterRelationValues = /* @__PURE__ */ ((TimeNodeMasterRelationValues2) => {
  TimeNodeMasterRelationValues2["SameClick"] = "sameClick";
  TimeNodeMasterRelationValues2["NextClick"] = "nextClick";
  return TimeNodeMasterRelationValues2;
})(TimeNodeMasterRelationValues || {});
const TimeNodeMasterRelationValuesArray = [
  "sameClick" /* SameClick */,
  "nextClick" /* NextClick */
];
var TimeNodeSyncValues = /* @__PURE__ */ ((TimeNodeSyncValues2) => {
  TimeNodeSyncValues2["None"] = "none";
  TimeNodeSyncValues2["CanSlip"] = "canSlip";
  TimeNodeSyncValues2["Locked"] = "locked";
  return TimeNodeSyncValues2;
})(TimeNodeSyncValues || {});
const TimeNodeSyncValuesArray = [
  "none" /* None */,
  "canSlip" /* CanSlip */,
  "locked" /* Locked */
];
var DirectionValues = /* @__PURE__ */ ((DirectionValues2) => {
  DirectionValues2["Horizontal"] = "horz";
  DirectionValues2["Vertical"] = "vert";
  return DirectionValues2;
})(DirectionValues || {});
const DirectionValuesArray = [
  "horz" /* Horizontal */,
  "vert" /* Vertical */
];
var OleObjectFollowColorSchemeValues = /* @__PURE__ */ ((OleObjectFollowColorSchemeValues2) => {
  OleObjectFollowColorSchemeValues2["None"] = "none";
  OleObjectFollowColorSchemeValues2["Full"] = "full";
  OleObjectFollowColorSchemeValues2["TextAndBackground"] = "textAndBackground";
  return OleObjectFollowColorSchemeValues2;
})(OleObjectFollowColorSchemeValues || {});
const OleObjectFollowColorSchemeValuesArray = [
  "none" /* None */,
  "full" /* Full */,
  "textAndBackground" /* TextAndBackground */
];
var PhotoAlbumLayoutValues = /* @__PURE__ */ ((PhotoAlbumLayoutValues2) => {
  PhotoAlbumLayoutValues2["FitToSlide"] = "fitToSlide";
  PhotoAlbumLayoutValues2["OnePic"] = "1pic";
  PhotoAlbumLayoutValues2["TwoPic"] = "2pic";
  PhotoAlbumLayoutValues2["FourPic"] = "4pic";
  PhotoAlbumLayoutValues2["OnePicWithTitle"] = "1picTitle";
  PhotoAlbumLayoutValues2["TwoPicWithTitle"] = "2picTitle";
  PhotoAlbumLayoutValues2["FourPicWithTitle"] = "4picTitle";
  return PhotoAlbumLayoutValues2;
})(PhotoAlbumLayoutValues || {});
const PhotoAlbumLayoutValuesArray = [
  "fitToSlide" /* FitToSlide */,
  "1pic" /* OnePic */,
  "2pic" /* TwoPic */,
  "4pic" /* FourPic */,
  "1picTitle" /* OnePicWithTitle */,
  "2picTitle" /* TwoPicWithTitle */,
  "4picTitle" /* FourPicWithTitle */
];
var PhotoAlbumFrameShapeValues = /* @__PURE__ */ ((PhotoAlbumFrameShapeValues2) => {
  PhotoAlbumFrameShapeValues2["FrameStyle1"] = "frameStyle1";
  PhotoAlbumFrameShapeValues2["FrameStyle2"] = "frameStyle2";
  PhotoAlbumFrameShapeValues2["FrameStyle3"] = "frameStyle3";
  PhotoAlbumFrameShapeValues2["FrameStyle4"] = "frameStyle4";
  PhotoAlbumFrameShapeValues2["FrameStyle5"] = "frameStyle5";
  PhotoAlbumFrameShapeValues2["FrameStyle6"] = "frameStyle6";
  PhotoAlbumFrameShapeValues2["FrameStyle7"] = "frameStyle7";
  return PhotoAlbumFrameShapeValues2;
})(PhotoAlbumFrameShapeValues || {});
const PhotoAlbumFrameShapeValuesArray = [
  "frameStyle1" /* FrameStyle1 */,
  "frameStyle2" /* FrameStyle2 */,
  "frameStyle3" /* FrameStyle3 */,
  "frameStyle4" /* FrameStyle4 */,
  "frameStyle5" /* FrameStyle5 */,
  "frameStyle6" /* FrameStyle6 */,
  "frameStyle7" /* FrameStyle7 */
];
var SlideSizeValues = /* @__PURE__ */ ((SlideSizeValues2) => {
  SlideSizeValues2["Screen4x3"] = "screen4x3";
  SlideSizeValues2["Letter"] = "letter";
  SlideSizeValues2["A4"] = "A4";
  SlideSizeValues2["Film35mm"] = "35mm";
  SlideSizeValues2["Overhead"] = "overhead";
  SlideSizeValues2["Banner"] = "banner";
  SlideSizeValues2["Custom"] = "custom";
  SlideSizeValues2["Ledger"] = "ledger";
  SlideSizeValues2["A3"] = "A3";
  SlideSizeValues2["B4ISO"] = "B4ISO";
  SlideSizeValues2["B5ISO"] = "B5ISO";
  SlideSizeValues2["B4JIS"] = "B4JIS";
  SlideSizeValues2["B5JIS"] = "B5JIS";
  SlideSizeValues2["HagakiCard"] = "hagakiCard";
  SlideSizeValues2["Screen16x9"] = "screen16x9";
  SlideSizeValues2["Screen16x10"] = "screen16x10";
  return SlideSizeValues2;
})(SlideSizeValues || {});
const SlideSizeValuesArray = [
  "screen4x3" /* Screen4x3 */,
  "letter" /* Letter */,
  "A4" /* A4 */,
  "35mm" /* Film35mm */,
  "overhead" /* Overhead */,
  "banner" /* Banner */,
  "custom" /* Custom */,
  "ledger" /* Ledger */,
  "A3" /* A3 */,
  "B4ISO" /* B4ISO */,
  "B5ISO" /* B5ISO */,
  "B4JIS" /* B4JIS */,
  "B5JIS" /* B5JIS */,
  "hagakiCard" /* HagakiCard */,
  "screen16x9" /* Screen16x9 */,
  "screen16x10" /* Screen16x10 */
];
var CryptProviderValues = /* @__PURE__ */ ((CryptProviderValues2) => {
  CryptProviderValues2["RsaAES"] = "rsaAES";
  CryptProviderValues2["RsaFull"] = "rsaFull";
  CryptProviderValues2["Invalid"] = "invalid";
  return CryptProviderValues2;
})(CryptProviderValues || {});
const CryptProviderValuesArray = [
  "rsaAES" /* RsaAES */,
  "rsaFull" /* RsaFull */,
  "invalid" /* Invalid */
];
var CryptAlgorithmClassValues = /* @__PURE__ */ ((CryptAlgorithmClassValues2) => {
  CryptAlgorithmClassValues2["Hash"] = "hash";
  CryptAlgorithmClassValues2["Invalid"] = "invalid";
  return CryptAlgorithmClassValues2;
})(CryptAlgorithmClassValues || {});
const CryptAlgorithmClassValuesArray = [
  "hash" /* Hash */,
  "invalid" /* Invalid */
];
var CryptAlgorithmValues = /* @__PURE__ */ ((CryptAlgorithmValues2) => {
  CryptAlgorithmValues2["TypeAny"] = "typeAny";
  CryptAlgorithmValues2["Invalid"] = "invalid";
  return CryptAlgorithmValues2;
})(CryptAlgorithmValues || {});
const CryptAlgorithmValuesArray = [
  "typeAny" /* TypeAny */,
  "invalid" /* Invalid */
];
var HtmlPublishWebBrowserSupportValues = /* @__PURE__ */ ((HtmlPublishWebBrowserSupportValues2) => {
  HtmlPublishWebBrowserSupportValues2["V4"] = "v4";
  HtmlPublishWebBrowserSupportValues2["V3"] = "v3";
  HtmlPublishWebBrowserSupportValues2["V3v4"] = "v3v4";
  return HtmlPublishWebBrowserSupportValues2;
})(HtmlPublishWebBrowserSupportValues || {});
const HtmlPublishWebBrowserSupportValuesArray = [
  "v4" /* V4 */,
  "v3" /* V3 */,
  "v3v4" /* V3v4 */
];
var WebColorValues = /* @__PURE__ */ ((WebColorValues2) => {
  WebColorValues2["None"] = "none";
  WebColorValues2["Browser"] = "browser";
  WebColorValues2["PresentationText"] = "presentationText";
  WebColorValues2["PresentationAccent"] = "presentationAccent";
  WebColorValues2["WhiteTextOnBlack"] = "whiteTextOnBlack";
  WebColorValues2["BlackTextOnWhite"] = "blackTextOnWhite";
  return WebColorValues2;
})(WebColorValues || {});
const WebColorValuesArray = [
  "none" /* None */,
  "browser" /* Browser */,
  "presentationText" /* PresentationText */,
  "presentationAccent" /* PresentationAccent */,
  "whiteTextOnBlack" /* WhiteTextOnBlack */,
  "blackTextOnWhite" /* BlackTextOnWhite */
];
var WebScreenSizeValues = /* @__PURE__ */ ((WebScreenSizeValues2) => {
  WebScreenSizeValues2["Sz544x376"] = "544x376";
  WebScreenSizeValues2["Sz640x480"] = "640x480";
  WebScreenSizeValues2["Sz720x512"] = "720x512";
  WebScreenSizeValues2["Sz800x600"] = "800x600";
  WebScreenSizeValues2["Sz1024x768"] = "1024x768";
  WebScreenSizeValues2["Sz1152x882"] = "1152x882";
  WebScreenSizeValues2["Sz1152x900"] = "1152x900";
  WebScreenSizeValues2["Sz1280x1024"] = "1280x1024";
  WebScreenSizeValues2["Sz1600x1200"] = "1600x1200";
  WebScreenSizeValues2["Sz1800x1400"] = "1800x1400";
  WebScreenSizeValues2["Sz1920x1200"] = "1920x1200";
  return WebScreenSizeValues2;
})(WebScreenSizeValues || {});
const WebScreenSizeValuesArray = [
  "544x376" /* Sz544x376 */,
  "640x480" /* Sz640x480 */,
  "720x512" /* Sz720x512 */,
  "800x600" /* Sz800x600 */,
  "1024x768" /* Sz1024x768 */,
  "1152x882" /* Sz1152x882 */,
  "1152x900" /* Sz1152x900 */,
  "1280x1024" /* Sz1280x1024 */,
  "1600x1200" /* Sz1600x1200 */,
  "1800x1400" /* Sz1800x1400 */,
  "1920x1200" /* Sz1920x1200 */
];
var PrintOutputValues = /* @__PURE__ */ ((PrintOutputValues2) => {
  PrintOutputValues2["Slides"] = "slides";
  PrintOutputValues2["Handouts1"] = "handouts1";
  PrintOutputValues2["Handouts2"] = "handouts2";
  PrintOutputValues2["Handouts3"] = "handouts3";
  PrintOutputValues2["Handouts4"] = "handouts4";
  PrintOutputValues2["Handouts6"] = "handouts6";
  PrintOutputValues2["Handouts9"] = "handouts9";
  PrintOutputValues2["Notes"] = "notes";
  PrintOutputValues2["Outline"] = "outline";
  return PrintOutputValues2;
})(PrintOutputValues || {});
const PrintOutputValuesArray = [
  "slides" /* Slides */,
  "handouts1" /* Handouts1 */,
  "handouts2" /* Handouts2 */,
  "handouts3" /* Handouts3 */,
  "handouts4" /* Handouts4 */,
  "handouts6" /* Handouts6 */,
  "handouts9" /* Handouts9 */,
  "notes" /* Notes */,
  "outline" /* Outline */
];
var PrintColorModeValues = /* @__PURE__ */ ((PrintColorModeValues2) => {
  PrintColorModeValues2["BlackWhite"] = "bw";
  PrintColorModeValues2["Gray"] = "gray";
  PrintColorModeValues2["Color"] = "clr";
  return PrintColorModeValues2;
})(PrintColorModeValues || {});
const PrintColorModeValuesArray = [
  "bw" /* BlackWhite */,
  "gray" /* Gray */,
  "clr" /* Color */
];
var PlaceholderValues = /* @__PURE__ */ ((PlaceholderValues2) => {
  PlaceholderValues2["Title"] = "title";
  PlaceholderValues2["Body"] = "body";
  PlaceholderValues2["CenteredTitle"] = "ctrTitle";
  PlaceholderValues2["SubTitle"] = "subTitle";
  PlaceholderValues2["DateAndTime"] = "dt";
  PlaceholderValues2["SlideNumber"] = "sldNum";
  PlaceholderValues2["Footer"] = "ftr";
  PlaceholderValues2["Header"] = "hdr";
  PlaceholderValues2["Object"] = "obj";
  PlaceholderValues2["Chart"] = "chart";
  PlaceholderValues2["Table"] = "tbl";
  PlaceholderValues2["ClipArt"] = "clipArt";
  PlaceholderValues2["Diagram"] = "dgm";
  PlaceholderValues2["Media"] = "media";
  PlaceholderValues2["SlideImage"] = "sldImg";
  PlaceholderValues2["Picture"] = "pic";
  return PlaceholderValues2;
})(PlaceholderValues || {});
const PlaceholderValuesArray = [
  "title" /* Title */,
  "body" /* Body */,
  "ctrTitle" /* CenteredTitle */,
  "subTitle" /* SubTitle */,
  "dt" /* DateAndTime */,
  "sldNum" /* SlideNumber */,
  "ftr" /* Footer */,
  "hdr" /* Header */,
  "obj" /* Object */,
  "chart" /* Chart */,
  "tbl" /* Table */,
  "clipArt" /* ClipArt */,
  "dgm" /* Diagram */,
  "media" /* Media */,
  "sldImg" /* SlideImage */,
  "pic" /* Picture */
];
var PlaceholderSizeValues = /* @__PURE__ */ ((PlaceholderSizeValues2) => {
  PlaceholderSizeValues2["Full"] = "full";
  PlaceholderSizeValues2["Half"] = "half";
  PlaceholderSizeValues2["Quarter"] = "quarter";
  return PlaceholderSizeValues2;
})(PlaceholderSizeValues || {});
const PlaceholderSizeValuesArray = [
  "full" /* Full */,
  "half" /* Half */,
  "quarter" /* Quarter */
];
var SlideLayoutValues = /* @__PURE__ */ ((SlideLayoutValues2) => {
  SlideLayoutValues2["Title"] = "title";
  SlideLayoutValues2["Text"] = "tx";
  SlideLayoutValues2["TwoColumnText"] = "twoColTx";
  SlideLayoutValues2["Table"] = "tbl";
  SlideLayoutValues2["TextAndChart"] = "txAndChart";
  SlideLayoutValues2["ChartAndText"] = "chartAndTx";
  SlideLayoutValues2["Diagram"] = "dgm";
  SlideLayoutValues2["Chart"] = "chart";
  SlideLayoutValues2["TextAndClipArt"] = "txAndClipArt";
  SlideLayoutValues2["ClipArtAndText"] = "clipArtAndTx";
  SlideLayoutValues2["TitleOnly"] = "titleOnly";
  SlideLayoutValues2["Blank"] = "blank";
  SlideLayoutValues2["TextAndObject"] = "txAndObj";
  SlideLayoutValues2["ObjectAndText"] = "objAndTx";
  SlideLayoutValues2["ObjectOnly"] = "objOnly";
  SlideLayoutValues2["Object"] = "obj";
  SlideLayoutValues2["TextAndMedia"] = "txAndMedia";
  SlideLayoutValues2["MidiaAndText"] = "mediaAndTx";
  SlideLayoutValues2["ObjectOverText"] = "objOverTx";
  SlideLayoutValues2["TextOverObject"] = "txOverObj";
  SlideLayoutValues2["TextAndTwoObjects"] = "txAndTwoObj";
  SlideLayoutValues2["TwoObjectsAndText"] = "twoObjAndTx";
  SlideLayoutValues2["TwoObjectsOverText"] = "twoObjOverTx";
  SlideLayoutValues2["FourObjects"] = "fourObj";
  SlideLayoutValues2["VerticalText"] = "vertTx";
  SlideLayoutValues2["ClipArtAndVerticalText"] = "clipArtAndVertTx";
  SlideLayoutValues2["VerticalTitleAndText"] = "vertTitleAndTx";
  SlideLayoutValues2["VerticalTitleAndTextOverChart"] = "vertTitleAndTxOverChart";
  SlideLayoutValues2["TwoObjects"] = "twoObj";
  SlideLayoutValues2["ObjectAndTwoObjects"] = "objAndTwoObj";
  SlideLayoutValues2["TwoObjectsAndObject"] = "twoObjAndObj";
  SlideLayoutValues2["Custom"] = "cust";
  SlideLayoutValues2["SectionHeader"] = "secHead";
  SlideLayoutValues2["TwoTextAndTwoObjects"] = "twoTxTwoObj";
  SlideLayoutValues2["ObjectText"] = "objTx";
  SlideLayoutValues2["PictureText"] = "picTx";
  return SlideLayoutValues2;
})(SlideLayoutValues || {});
const SlideLayoutValuesArray = [
  "title" /* Title */,
  "tx" /* Text */,
  "twoColTx" /* TwoColumnText */,
  "tbl" /* Table */,
  "txAndChart" /* TextAndChart */,
  "chartAndTx" /* ChartAndText */,
  "dgm" /* Diagram */,
  "chart" /* Chart */,
  "txAndClipArt" /* TextAndClipArt */,
  "clipArtAndTx" /* ClipArtAndText */,
  "titleOnly" /* TitleOnly */,
  "blank" /* Blank */,
  "txAndObj" /* TextAndObject */,
  "objAndTx" /* ObjectAndText */,
  "objOnly" /* ObjectOnly */,
  "obj" /* Object */,
  "txAndMedia" /* TextAndMedia */,
  "mediaAndTx" /* MidiaAndText */,
  "objOverTx" /* ObjectOverText */,
  "txOverObj" /* TextOverObject */,
  "txAndTwoObj" /* TextAndTwoObjects */,
  "twoObjAndTx" /* TwoObjectsAndText */,
  "twoObjOverTx" /* TwoObjectsOverText */,
  "fourObj" /* FourObjects */,
  "vertTx" /* VerticalText */,
  "clipArtAndVertTx" /* ClipArtAndVerticalText */,
  "vertTitleAndTx" /* VerticalTitleAndText */,
  "vertTitleAndTxOverChart" /* VerticalTitleAndTextOverChart */,
  "twoObj" /* TwoObjects */,
  "objAndTwoObj" /* ObjectAndTwoObjects */,
  "twoObjAndObj" /* TwoObjectsAndObject */,
  "cust" /* Custom */,
  "secHead" /* SectionHeader */,
  "twoTxTwoObj" /* TwoTextAndTwoObjects */,
  "objTx" /* ObjectText */,
  "picTx" /* PictureText */
];
var SplitterBarStateValues = /* @__PURE__ */ ((SplitterBarStateValues2) => {
  SplitterBarStateValues2["Minimized"] = "minimized";
  SplitterBarStateValues2["Restored"] = "restored";
  SplitterBarStateValues2["Maximized"] = "maximized";
  return SplitterBarStateValues2;
})(SplitterBarStateValues || {});
const SplitterBarStateValuesArray = [
  "minimized" /* Minimized */,
  "restored" /* Restored */,
  "maximized" /* Maximized */
];
var ViewValues = /* @__PURE__ */ ((ViewValues2) => {
  ViewValues2["SlideView"] = "sldView";
  ViewValues2["SlideMasterView"] = "sldMasterView";
  ViewValues2["NotesView"] = "notesView";
  ViewValues2["HandoutView"] = "handoutView";
  ViewValues2["NotesMasterView"] = "notesMasterView";
  ViewValues2["OutlineView"] = "outlineView";
  ViewValues2["SlideSorterView"] = "sldSorterView";
  ViewValues2["SlideThumbnailView"] = "sldThumbnailView";
  return ViewValues2;
})(ViewValues || {});
const ViewValuesArray = [
  "sldView" /* SlideView */,
  "sldMasterView" /* SlideMasterView */,
  "notesView" /* NotesView */,
  "handoutView" /* HandoutView */,
  "notesMasterView" /* NotesMasterView */,
  "outlineView" /* OutlineView */,
  "sldSorterView" /* SlideSorterView */,
  "sldThumbnailView" /* SlideThumbnailView */
];
var TriggerEventValues = /* @__PURE__ */ ((TriggerEventValues2) => {
  TriggerEventValues2["None"] = "none";
  TriggerEventValues2["OnBegin"] = "onBegin";
  TriggerEventValues2["OnEnd"] = "onEnd";
  TriggerEventValues2["Begin"] = "begin";
  TriggerEventValues2["End"] = "end";
  TriggerEventValues2["OnClick"] = "onClick";
  TriggerEventValues2["OnDoubleClick"] = "onDblClick";
  TriggerEventValues2["OnMouseOver"] = "onMouseOver";
  TriggerEventValues2["OnMouseOut"] = "onMouseOut";
  TriggerEventValues2["OnNext"] = "onNext";
  TriggerEventValues2["OnPrevious"] = "onPrev";
  TriggerEventValues2["OnStopAudio"] = "onStopAudio";
  TriggerEventValues2["OnMediaBookmark"] = "onMediaBookmark";
  return TriggerEventValues2;
})(TriggerEventValues || {});
const TriggerEventValuesArray = [
  "none" /* None */,
  "onBegin" /* OnBegin */,
  "onEnd" /* OnEnd */,
  "begin" /* Begin */,
  "end" /* End */,
  "onClick" /* OnClick */,
  "onDblClick" /* OnDoubleClick */,
  "onMouseOver" /* OnMouseOver */,
  "onMouseOut" /* OnMouseOut */,
  "onNext" /* OnNext */,
  "onPrev" /* OnPrevious */,
  "onStopAudio" /* OnStopAudio */,
  "onMediaBookmark" /* OnMediaBookmark */
];
var ConformanceClassValues = /* @__PURE__ */ ((ConformanceClassValues2) => {
  ConformanceClassValues2["Strict"] = "strict";
  ConformanceClassValues2["Transitional"] = "transitional";
  return ConformanceClassValues2;
})(ConformanceClassValues || {});
const ConformanceClassValuesArray = [
  "strict" /* Strict */,
  "transitional" /* Transitional */
];
class SoundAction extends OxmlCompositeElement {
  static _Q = "p:sndAc";
  /** Start Sound Action. */
  get startSoundAction() {
    return this._f(StartSoundAction);
  }
  /** Stop Sound Action. */
  get endSoundAction() {
    return this._f(EndSoundAction);
  }
}
class ZoomTransition extends OxmlLeafElement {
  static _Q = "p:zoom";
  static _A = [":dir"];
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class WheelTransition extends OxmlLeafElement {
  static _Q = "p:wheel";
  static _A = [":spokes"];
  /** Spokes. Serialized as `:spokes` */
  get spokes() {
    return this._g(":spokes");
  }
  set spokes(v) {
    this._s(":spokes", v);
  }
}
class StripsTransition extends OxmlLeafElement {
  static _Q = "p:strips";
  static _A = [":dir"];
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class SplitTransition extends OxmlLeafElement {
  static _Q = "p:split";
  static _A = [":orient", ":dir"];
  /** Orientation. Serialized as `:orient` */
  get orientation() {
    return this._g(":orient");
  }
  set orientation(v) {
    this._s(":orient", v);
  }
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class SideDirectionTransitionType extends OxmlLeafElement {
  static _A = [":dir"];
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class WipeTransition extends SideDirectionTransitionType {
  static _Q = "p:wipe";
}
class PushTransition extends SideDirectionTransitionType {
  static _Q = "p:push";
}
class OptionalBlackTransitionType extends OxmlLeafElement {
  static _A = [":thruBlk"];
  /** Transition Through Black. Serialized as `:thruBlk` */
  get throughBlack() {
    return this._g(":thruBlk");
  }
  set throughBlack(v) {
    this._s(":thruBlk", v);
  }
}
class FadeTransition extends OptionalBlackTransitionType {
  static _Q = "p:fade";
}
class CutTransition extends OptionalBlackTransitionType {
  static _Q = "p:cut";
}
class EightDirectionTransitionType extends OxmlLeafElement {
  static _A = [":dir"];
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class PullTransition extends EightDirectionTransitionType {
  static _Q = "p:pull";
}
class CoverTransition extends EightDirectionTransitionType {
  static _Q = "p:cover";
}
class OrientationTransitionType extends OxmlLeafElement {
  static _A = [":dir"];
  /** Transition Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class RandomBarTransition extends OrientationTransitionType {
  static _Q = "p:randomBar";
}
class CombTransition extends OrientationTransitionType {
  static _Q = "p:comb";
}
class CheckerTransition extends OrientationTransitionType {
  static _Q = "p:checker";
}
class BlindsTransition extends OrientationTransitionType {
  static _Q = "p:blinds";
}
class GraphicElement extends OxmlCompositeElement {
  static _Q = "p:graphicEl";
  /** Diagram to Animate. */
  get diagram() {
    return this._f(ADiagram);
  }
  /** Chart to Animate. */
  get chart() {
    return this._f(AChart);
  }
}
class TextElement extends OxmlCompositeElement {
  static _Q = "p:txEl";
  /** Character Range. */
  get charRange() {
    return this._f(CharRange);
  }
  /** Paragraph Text Range. */
  get paragraphIndexRange() {
    return this._f(ParagraphIndexRange);
  }
}
class OleChartElement extends OxmlLeafElement {
  static _Q = "p:oleChartEl";
  static _A = [":type", ":lvl"];
  /** Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Level. Serialized as `:lvl` */
  get level() {
    return this._g(":lvl");
  }
  set level(v) {
    this._s(":lvl", v);
  }
}
class NotesMasterExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class HandoutMasterExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class SlideMasterExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class TextStyles extends OxmlCompositeElement {
  static _Q = "p:txStyles";
  /** Slide Master Title Text Style. */
  get titleStyle() {
    return this._f(TitleStyle);
  }
  /** Slide Master Body Text Style. */
  get bodyStyle() {
    return this._f(BodyStyle);
  }
  /** Slide Master Other Text Style. */
  get otherStyle() {
    return this._f(OtherStyle);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlideLayoutIdList extends OxmlCompositeElement {
  static _Q = "p:sldLayoutIdLst";
}
class SlideLayoutExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class HeaderFooter extends OxmlCompositeElement {
  static _Q = "p:hf";
  static _A = [":sldNum", ":hdr", ":ftr", ":dt"];
  /** Slide Number Placeholder. Serialized as `:sldNum` */
  get slideNumber() {
    return this._g(":sldNum");
  }
  set slideNumber(v) {
    this._s(":sldNum", v);
  }
  /** Header Placeholder. Serialized as `:hdr` */
  get header() {
    return this._g(":hdr");
  }
  set header(v) {
    this._s(":hdr", v);
  }
  /** Footer Placeholder. Serialized as `:ftr` */
  get footer() {
    return this._g(":ftr");
  }
  set footer(v) {
    this._s(":ftr", v);
  }
  /** Date/Time Placeholder. Serialized as `:dt` */
  get dateTime() {
    return this._g(":dt");
  }
  set dateTime(v) {
    this._s(":dt", v);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class PresentationPropertiesExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P14DiscardImageEditData. */
  get discardImageEditData() {
    return this._f(P14DiscardImageEditData);
  }
  /** Returns P14DefaultImageDpi. */
  get defaultImageDpi() {
    return this._f(P14DefaultImageDpi);
  }
  /** Returns A14TextMath. */
  get textMath() {
    return this._f(A14TextMath);
  }
  /** Returns P15ChartTrackingReferenceBased. */
  get chartTrackingReferenceBased() {
    return this._f(P15ChartTrackingReferenceBased);
  }
}
class PresentationPropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class ColorMostRecentlyUsed extends OxmlCompositeElement {
  static _Q = "p:clrMru";
}
class ShowProperties extends OxmlCompositeElement {
  static _Q = "p:showPr";
  static _A = [":loop", ":showNarration", ":showAnimation", ":useTimings"];
  /** Loop Slide Show. Serialized as `:loop` */
  get loop() {
    return this._g(":loop");
  }
  set loop(v) {
    this._s(":loop", v);
  }
  /** Show Narration in Slide Show. Serialized as `:showNarration` */
  get showNarration() {
    return this._g(":showNarration");
  }
  set showNarration(v) {
    this._s(":showNarration", v);
  }
  /** Show Animation in Slide Show. Serialized as `:showAnimation` */
  get showAnimation() {
    return this._g(":showAnimation");
  }
  set showAnimation(v) {
    this._s(":showAnimation", v);
  }
  /** Use Timings in Slide Show. Serialized as `:useTimings` */
  get useTimings() {
    return this._g(":useTimings");
  }
  set useTimings(v) {
    this._s(":useTimings", v);
  }
}
class PrintingProperties extends OxmlCompositeElement {
  static _Q = "p:prnPr";
  static _A = [":prnWhat", ":clrMode", ":hiddenSlides", ":scaleToFitPaper", ":frameSlides"];
  /** Print Output. Serialized as `:prnWhat` */
  get printWhat() {
    return this._g(":prnWhat");
  }
  set printWhat(v) {
    this._s(":prnWhat", v);
  }
  /** Print Color Mode. Serialized as `:clrMode` */
  get colorMode() {
    return this._g(":clrMode");
  }
  set colorMode(v) {
    this._s(":clrMode", v);
  }
  /** Print Hidden Slides. Serialized as `:hiddenSlides` */
  get hiddenSlides() {
    return this._g(":hiddenSlides");
  }
  set hiddenSlides(v) {
    this._s(":hiddenSlides", v);
  }
  /** Scale to Fit Paper when printing. Serialized as `:scaleToFitPaper` */
  get scaleToFitPaper() {
    return this._g(":scaleToFitPaper");
  }
  set scaleToFitPaper(v) {
    this._s(":scaleToFitPaper", v);
  }
  /** Frame slides when printing. Serialized as `:frameSlides` */
  get frameSlides() {
    return this._g(":frameSlides");
  }
  set frameSlides(v) {
    this._s(":frameSlides", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class WebProperties extends OxmlCompositeElement {
  static _Q = "p:webPr";
  static _A = [":showAnimation", ":resizeGraphics", ":allowPng", ":relyOnVml", ":organizeInFolders", ":useLongFilenames", ":imgSz", ":encoding", ":clr"];
  /** Show animation in HTML output. Serialized as `:showAnimation` */
  get showAnimation() {
    return this._g(":showAnimation");
  }
  set showAnimation(v) {
    this._s(":showAnimation", v);
  }
  /** Resize graphics in HTML output. Serialized as `:resizeGraphics` */
  get resizeGraphics() {
    return this._g(":resizeGraphics");
  }
  set resizeGraphics(v) {
    this._s(":resizeGraphics", v);
  }
  /** Allow PNG in HTML output. Serialized as `:allowPng` */
  get allowPng() {
    return this._g(":allowPng");
  }
  set allowPng(v) {
    this._s(":allowPng", v);
  }
  /** Rely on VML for HTML output. Serialized as `:relyOnVml` */
  get relyOnVml() {
    return this._g(":relyOnVml");
  }
  set relyOnVml(v) {
    this._s(":relyOnVml", v);
  }
  /** Organize HTML output in folders. Serialized as `:organizeInFolders` */
  get organizeInFolders() {
    return this._g(":organizeInFolders");
  }
  set organizeInFolders(v) {
    this._s(":organizeInFolders", v);
  }
  /** Use long file names in HTML output. Serialized as `:useLongFilenames` */
  get useLongFilenames() {
    return this._g(":useLongFilenames");
  }
  set useLongFilenames(v) {
    this._s(":useLongFilenames", v);
  }
  /** Image size for HTML output. Serialized as `:imgSz` */
  get imageSize() {
    return this._g(":imgSz");
  }
  set imageSize(v) {
    this._s(":imgSz", v);
  }
  /** Encoding for HTML output. Serialized as `:encoding` */
  get encoding() {
    return this._g(":encoding");
  }
  set encoding(v) {
    this._s(":encoding", v);
  }
  /** Slide Navigation Colors for HTML output. Serialized as `:clr` */
  get color() {
    return this._g(":clr");
  }
  set color(v) {
    this._s(":clr", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class HtmlPublishProperties extends OxmlCompositeElement {
  static _Q = "p:htmlPubPr";
  static _A = [":showSpeakerNotes", ":pubBrowser", "r:id"];
  /** Show Speaker Notes. Serialized as `:showSpeakerNotes` */
  get showSpeakerNotes() {
    return this._g(":showSpeakerNotes");
  }
  set showSpeakerNotes(v) {
    this._s(":showSpeakerNotes", v);
  }
  /** Browser Support Target. Serialized as `:pubBrowser` */
  get targetBrowser() {
    return this._g(":pubBrowser");
  }
  set targetBrowser(v) {
    this._s(":pubBrowser", v);
  }
  /** Publish Path. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class PresentationExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P14SectionProperties. */
  get sectionProperties() {
    return this._f(P14SectionProperties);
  }
  /** Returns P14SectionList. */
  get sectionList() {
    return this._f(P14SectionList);
  }
  /** Returns P15SlideGuideList. */
  get slideGuideList() {
    return this._f(P15SlideGuideList);
  }
  /** Returns P15NotesGuideList. */
  get notesGuideList() {
    return this._f(P15NotesGuideList);
  }
}
class PresentationExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class ModificationVerifier extends OxmlLeafElement {
  static _Q = "p:modifyVerifier";
  static _A = [":cryptProviderType", ":cryptAlgorithmClass", ":cryptAlgorithmType", ":cryptAlgorithmSid", ":spinCount", ":saltData", ":hashData", ":cryptProvider", ":algIdExt", ":algIdExtSource", ":cryptProviderTypeExt", ":cryptProviderTypeExtSource", ":algorithmName", ":hashValue", ":saltValue", ":spinValue"];
  /** Cryptographic Provider Type. Serialized as `:cryptProviderType` */
  get cryptographicProviderType() {
    return this._g(":cryptProviderType");
  }
  set cryptographicProviderType(v) {
    this._s(":cryptProviderType", v);
  }
  /** Cryptographic Algorithm Class. Serialized as `:cryptAlgorithmClass` */
  get cryptographicAlgorithmClass() {
    return this._g(":cryptAlgorithmClass");
  }
  set cryptographicAlgorithmClass(v) {
    this._s(":cryptAlgorithmClass", v);
  }
  /** Cryptographic Algorithm Type. Serialized as `:cryptAlgorithmType` */
  get cryptographicAlgorithmType() {
    return this._g(":cryptAlgorithmType");
  }
  set cryptographicAlgorithmType(v) {
    this._s(":cryptAlgorithmType", v);
  }
  /** Cryptographic Hashing Algorithm. Serialized as `:cryptAlgorithmSid` */
  get cryptographicAlgorithmSid() {
    return this._g(":cryptAlgorithmSid");
  }
  set cryptographicAlgorithmSid(v) {
    this._s(":cryptAlgorithmSid", v);
  }
  /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
  get spinCount() {
    return this._g(":spinCount");
  }
  set spinCount(v) {
    this._s(":spinCount", v);
  }
  /** Salt for Password Verifier. Serialized as `:saltData` */
  get saltData() {
    return this._g(":saltData");
  }
  set saltData(v) {
    this._s(":saltData", v);
  }
  /** Password Hash. Serialized as `:hashData` */
  get hashData() {
    return this._g(":hashData");
  }
  set hashData(v) {
    this._s(":hashData", v);
  }
  /** Cryptographic Provider. Serialized as `:cryptProvider` */
  get cryptographicProvider() {
    return this._g(":cryptProvider");
  }
  set cryptographicProvider(v) {
    this._s(":cryptProvider", v);
  }
  /** Cryptographic Algorithm Extensibility. Serialized as `:algIdExt` */
  get extendedCryptographicAlgorithm() {
    return this._g(":algIdExt");
  }
  set extendedCryptographicAlgorithm(v) {
    this._s(":algIdExt", v);
  }
  /** Algorithm Extensibility Source. Serialized as `:algIdExtSource` */
  get extendedCryptographicAlgorithmSource() {
    return this._g(":algIdExtSource");
  }
  set extendedCryptographicAlgorithmSource(v) {
    this._s(":algIdExtSource", v);
  }
  /** Cryptographic Provider Type Extensibility. Serialized as `:cryptProviderTypeExt` */
  get cryptographicProviderTypeExtensibility() {
    return this._g(":cryptProviderTypeExt");
  }
  set cryptographicProviderTypeExtensibility(v) {
    this._s(":cryptProviderTypeExt", v);
  }
  /** Provider Type Extensibility Source. Serialized as `:cryptProviderTypeExtSource` */
  get cryptographicProviderTypeExtensibilitySource() {
    return this._g(":cryptProviderTypeExtSource");
  }
  set cryptographicProviderTypeExtensibilitySource(v) {
    this._s(":cryptProviderTypeExtSource", v);
  }
  /** algorithmName. Serialized as `:algorithmName` */
  get algorithmName() {
    return this._g(":algorithmName");
  }
  set algorithmName(v) {
    this._s(":algorithmName", v);
  }
  /** hashValue. Serialized as `:hashValue` */
  get hashValue() {
    return this._g(":hashValue");
  }
  set hashValue(v) {
    this._s(":hashValue", v);
  }
  /** saltValue. Serialized as `:saltValue` */
  get saltValue() {
    return this._g(":saltValue");
  }
  set saltValue(v) {
    this._s(":saltValue", v);
  }
  /** spinValue. Serialized as `:spinValue` */
  get spinValue() {
    return this._g(":spinValue");
  }
  set spinValue(v) {
    this._s(":spinValue", v);
  }
}
class Kinsoku extends OxmlLeafElement {
  static _Q = "p:kinsoku";
  static _A = [":lang", ":invalStChars", ":invalEndChars"];
  /** Language. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** Invalid Kinsoku Start Characters. Serialized as `:invalStChars` */
  get invalidStartChars() {
    return this._g(":invalStChars");
  }
  set invalidStartChars(v) {
    this._s(":invalStChars", v);
  }
  /** Invalid Kinsoku End Characters. Serialized as `:invalEndChars` */
  get invalidEndChars() {
    return this._g(":invalEndChars");
  }
  set invalidEndChars(v) {
    this._s(":invalEndChars", v);
  }
}
class PhotoAlbum extends OxmlCompositeElement {
  static _Q = "p:photoAlbum";
  static _A = [":bw", ":showCaptions", ":layout", ":frame"];
  /** Black and White. Serialized as `:bw` */
  get blackWhite() {
    return this._g(":bw");
  }
  set blackWhite(v) {
    this._s(":bw", v);
  }
  /** Show/Hide Captions. Serialized as `:showCaptions` */
  get showCaptions() {
    return this._g(":showCaptions");
  }
  set showCaptions(v) {
    this._s(":showCaptions", v);
  }
  /** Photo Album Layout. Serialized as `:layout` */
  get layout() {
    return this._g(":layout");
  }
  set layout(v) {
    this._s(":layout", v);
  }
  /** Frame Type. Serialized as `:frame` */
  get frame() {
    return this._g(":frame");
  }
  set frame(v) {
    this._s(":frame", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CustomShowList extends OxmlCompositeElement {
  static _Q = "p:custShowLst";
}
class EmbeddedFontList extends OxmlCompositeElement {
  static _Q = "p:embeddedFontLst";
}
class SlideSize extends OxmlLeafElement {
  static _Q = "p:sldSz";
  static _A = [":cx", ":cy", ":type"];
  /** Extent Length. Serialized as `:cx` */
  get cx() {
    return this._g(":cx");
  }
  set cx(v) {
    this._s(":cx", v);
  }
  /** Extent Width. Serialized as `:cy` */
  get cy() {
    return this._g(":cy");
  }
  set cy(v) {
    this._s(":cy", v);
  }
  /** Type of Size. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
}
class SlideIdList extends OxmlCompositeElement {
  static _Q = "p:sldIdLst";
}
class HandoutMasterIdList extends OxmlCompositeElement {
  static _Q = "p:handoutMasterIdLst";
  /** Handout Master ID. */
  get handoutMasterId() {
    return this._f(HandoutMasterId);
  }
}
class NotesMasterIdList extends OxmlCompositeElement {
  static _Q = "p:notesMasterIdLst";
  /** Notes Master ID. */
  get notesMasterId() {
    return this._f(NotesMasterId);
  }
}
class SlideMasterIdList extends OxmlCompositeElement {
  static _Q = "p:sldMasterIdLst";
}
class CommentExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class CommentAuthorExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class TimeListType extends OxmlLeafElement {
  static _A = [":x", ":y"];
  /** X coordinate. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y coordinate. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
}
class RotationCenter extends TimeListType {
  static _Q = "p:rCtr";
}
class ToPosition extends TimeListType {
  static _Q = "p:to";
}
class FromPosition extends TimeListType {
  static _Q = "p:from";
}
class ByPosition extends TimeListType {
  static _Q = "p:by";
}
class TimeAnimateValueList extends OxmlCompositeElement {
  static _Q = "p:tavLst";
}
class TimeTypeListType extends OxmlCompositeElement {
}
class SubTimeNodeList extends TimeTypeListType {
  static _Q = "p:subTnLst";
}
class ChildTimeNodeList extends TimeTypeListType {
  static _Q = "p:childTnLst";
}
class Iterate extends OxmlCompositeElement {
  static _Q = "p:iterate";
  static _A = [":type", ":backwards"];
  /** Iterate Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Backwards. Serialized as `:backwards` */
  get backwards() {
    return this._g(":backwards");
  }
  set backwards(v) {
    this._s(":backwards", v);
  }
  /** Time Absolute. */
  get timeAbsolute() {
    return this._f(TimeAbsolute);
  }
  /** Time Percentage. */
  get timePercentage() {
    return this._f(TimePercentage);
  }
}
class ApplicationNonVisualDrawingPropertiesExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P14Media. */
  get media() {
    return this._f(P14Media);
  }
  /** Returns P14ModificationId. */
  get modificationId() {
    return this._f(P14ModificationId);
  }
}
class ApplicationNonVisualDrawingPropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class PlaceholderShape extends OxmlCompositeElement {
  static _Q = "p:ph";
  static _A = [":type", ":orient", ":sz", ":idx", ":hasCustomPrompt"];
  /** Placeholder Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Placeholder Orientation. Serialized as `:orient` */
  get orientation() {
    return this._g(":orient");
  }
  set orientation(v) {
    this._s(":orient", v);
  }
  /** Placeholder Size. Serialized as `:sz` */
  get size() {
    return this._g(":sz");
  }
  set size(v) {
    this._s(":sz", v);
  }
  /** Placeholder Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** Placeholder has custom prompt. Serialized as `:hasCustomPrompt` */
  get hasCustomPrompt() {
    return this._g(":hasCustomPrompt");
  }
  set hasCustomPrompt(v) {
    this._s(":hasCustomPrompt", v);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class NotesMasterExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P15SlideGuideList. */
  get slideGuideList() {
    return this._f(P15SlideGuideList);
  }
}
class HandoutMasterExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P15SlideGuideList. */
  get slideGuideList() {
    return this._f(P15SlideGuideList);
  }
}
class SlideMasterExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P15SlideGuideList. */
  get slideGuideList() {
    return this._f(P15SlideGuideList);
  }
}
class SlideLayoutExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P15SlideGuideList. */
  get slideGuideList() {
    return this._f(P15SlideGuideList);
  }
}
class CommentExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P15ThreadingInfo. */
  get threadingInfo() {
    return this._f(P15ThreadingInfo);
  }
}
class CommentAuthorExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P15PresenceInfo. */
  get presenceInfo() {
    return this._f(P15PresenceInfo);
  }
}
class TimeListSubShapeIdType extends OxmlLeafElement {
  static _A = [":spid"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
}
class SubShape extends TimeListSubShapeIdType {
  static _Q = "p:subSp";
}
class InkTarget extends TimeListSubShapeIdType {
  static _Q = "p:inkTgt";
}
class ShapeTarget extends OxmlCompositeElement {
  static _Q = "p:spTgt";
  static _A = [":spid"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** Background. */
  get backgroundAnimation() {
    return this._f(BackgroundAnimation);
  }
  /** Subshape. */
  get subShape() {
    return this._f(SubShape);
  }
  /** OLE Chart Element. */
  get oleChartElement() {
    return this._f(OleChartElement);
  }
  /** Text Element. */
  get textElement() {
    return this._f(TextElement);
  }
  /** Graphic Element. */
  get graphicElement() {
    return this._f(GraphicElement);
  }
}
class ShowPropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class ConnectionShape extends OxmlCompositeElement {
  static _Q = "p:cxnSp";
  /** Non-Visual Properties for a Connection Shape. */
  get nonVisualConnectionShapeProperties() {
    return this._f(NonVisualConnectionShapeProperties);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Connector Shape Style. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class GraphicFrame extends OxmlCompositeElement {
  static _Q = "p:graphicFrame";
  /** Non-Visual Properties for a Graphic Frame. */
  get nonVisualGraphicFrameProperties() {
    return this._f(NonVisualGraphicFrameProperties);
  }
  /** 2D Transform for Graphic Frame. */
  get transform() {
    return this._f(Transform);
  }
  /** Returns AGraphic. */
  get graphic() {
    return this._f(AGraphic);
  }
  /** Extension List with Modification Flag. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class Shape extends OxmlCompositeElement {
  static _Q = "p:sp";
  static _A = [":useBgFill"];
  /** Use Background Fill. Serialized as `:useBgFill` */
  get useBackgroundFill() {
    return this._g(":useBgFill");
  }
  set useBackgroundFill(v) {
    this._s(":useBgFill", v);
  }
  /** Non-Visual Properties for a Shape. */
  get nonVisualShapeProperties() {
    return this._f(NonVisualShapeProperties);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Shape Style. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Shape Text Body. */
  get textBody() {
    return this._f(TextBody);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class GroupShapeProperties extends OxmlCompositeElement {
  static _Q = "p:grpSpPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Grouped Objects. */
  get transformGroup() {
    return this._f(ATransformGroup);
  }
}
class NonVisualGroupShapeProperties extends OxmlCompositeElement {
  static _Q = "p:nvGrpSpPr";
  /** Non-visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Group Shape Drawing Properties. */
  get nonVisualGroupShapeDrawingProperties() {
    return this._f(NonVisualGroupShapeDrawingProperties);
  }
  /** Non-Visual Properties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
}
class CommonSlideDataExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class ControlList extends OxmlCompositeElement {
  static _Q = "p:controls";
}
class CustomerDataList extends OxmlCompositeElement {
  static _Q = "p:custDataLst";
}
class GroupShapeType extends OxmlCompositeElement {
  /** Non-Visual Properties for a Group Shape. */
  get nonVisualGroupShapeProperties() {
    return this._f(NonVisualGroupShapeProperties);
  }
  /** Group Shape Properties. */
  get groupShapeProperties() {
    return this._f(GroupShapeProperties);
  }
}
class GroupShape extends GroupShapeType {
  static _Q = "p:grpSp";
}
class ShapeTree extends GroupShapeType {
  static _Q = "p:spTree";
}
class Background extends OxmlCompositeElement {
  static _Q = "p:bg";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** Background Properties. */
  get backgroundProperties() {
    return this._f(BackgroundProperties);
  }
  /** Background Style Reference. */
  get backgroundStyleReference() {
    return this._f(BackgroundStyleReference);
  }
}
class SlideExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class Timing extends OxmlCompositeElement {
  static _Q = "p:timing";
  /** Returns TimeNodeList. */
  get timeNodeList() {
    return this._f(TimeNodeList);
  }
  /** Build List. */
  get buildList() {
    return this._f(BuildList);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class Transition extends OxmlCompositeElement {
  static _Q = "p:transition";
  static _A = [":spd", "p14:dur", ":advClick", ":advTm"];
  /** spd. Serialized as `:spd` */
  get speed() {
    return this._g(":spd");
  }
  set speed(v) {
    this._s(":spd", v);
  }
  /** dur. Serialized as `p14:dur` */
  get duration() {
    return this._g("p14:dur");
  }
  set duration(v) {
    this._s("p14:dur", v);
  }
  /** Specifies whether a mouse click will advance the slide.. Serialized as `:advClick` */
  get advanceOnClick() {
    return this._g(":advClick");
  }
  set advanceOnClick(v) {
    this._s(":advClick", v);
  }
  /** advTm. Serialized as `:advTm` */
  get advanceAfterTime() {
    return this._g(":advTm");
  }
  set advanceAfterTime(v) {
    this._s(":advTm", v);
  }
}
class OleObjectLink extends OxmlCompositeElement {
  static _Q = "p:link";
  static _A = [":updateAutomatic"];
  /** Update Linked OLE Objects Automatically. Serialized as `:updateAutomatic` */
  get autoUpdate() {
    return this._g(":updateAutomatic");
  }
  set autoUpdate(v) {
    this._s(":updateAutomatic", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class OleObjectEmbed extends OxmlCompositeElement {
  static _Q = "p:embed";
  static _A = [":followColorScheme"];
  /** Color Scheme Properties for OLE Object. Serialized as `:followColorScheme` */
  get followColorScheme() {
    return this._g(":followColorScheme");
  }
  set followColorScheme(v) {
    this._s(":followColorScheme", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Picture extends OxmlCompositeElement {
  static _Q = "p:pic";
  /** Non-Visual Properties for a Picture. */
  get nonVisualPictureProperties() {
    return this._f(NonVisualPictureProperties);
  }
  /** Picture Fill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Returns ShapeProperties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ShapeStyle. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class ShowPropertiesExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P14BrowseMode. */
  get browseMode() {
    return this._f(P14BrowseMode);
  }
  /** Returns P14LaserColor. */
  get laserColor() {
    return this._f(P14LaserColor);
  }
  /** Returns P14ShowMediaControls. */
  get showMediaControls() {
    return this._f(P14ShowMediaControls);
  }
}
class CommonSlideDataExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P14CreationId. */
  get creationId() {
    return this._f(P14CreationId);
  }
}
class SlideExtension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns P14LaserTraceList. */
  get laserTraceList() {
    return this._f(P14LaserTraceList);
  }
  /** Returns P14ShowEventRecordList. */
  get showEventRecordList() {
    return this._f(P14ShowEventRecordList);
  }
  /** Returns P188CommentRelationship. */
  get commentRelationship() {
    return this._f(P188CommentRelationship);
  }
}
class PositiveSize2DType extends OxmlLeafElement {
  static _A = [":cx", ":cy"];
  /** Extent Length. Serialized as `:cx` */
  get cx() {
    return this._g(":cx");
  }
  set cx(v) {
    this._s(":cx", v);
  }
  /** Extent Width. Serialized as `:cy` */
  get cy() {
    return this._g(":cy");
  }
  set cy(v) {
    this._s(":cy", v);
  }
}
class NotesSize extends PositiveSize2DType {
  static _Q = "p:notesSz";
}
class GridSpacing extends PositiveSize2DType {
  static _Q = "p:gridSpacing";
}
class NotesViewProperties extends OxmlCompositeElement {
  static _Q = "p:notesViewPr";
  /** Common Slide View Properties. */
  get commonSlideViewProperties() {
    return this._f(CommonSlideViewProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SorterViewProperties extends OxmlCompositeElement {
  static _Q = "p:sorterViewPr";
  static _A = [":showFormatting"];
  /** Show Formatting. Serialized as `:showFormatting` */
  get showFormatting() {
    return this._g(":showFormatting");
  }
  set showFormatting(v) {
    this._s(":showFormatting", v);
  }
  /** Base properties for Slide Sorter View. */
  get commonViewProperties() {
    return this._f(CommonViewProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NotesTextViewProperties extends OxmlCompositeElement {
  static _Q = "p:notesTextViewPr";
  /** Base properties for Notes View. */
  get commonViewProperties() {
    return this._f(CommonViewProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class OutlineViewProperties extends OxmlCompositeElement {
  static _Q = "p:outlineViewPr";
  /** Common View Properties. */
  get commonViewProperties() {
    return this._f(CommonViewProperties);
  }
  /** List of Presentation Slides. */
  get outlineViewSlideList() {
    return this._f(OutlineViewSlideList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlideViewProperties extends OxmlCompositeElement {
  static _Q = "p:slideViewPr";
  /** Returns CommonSlideViewProperties. */
  get commonSlideViewProperties() {
    return this._f(CommonSlideViewProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NormalViewProperties extends OxmlCompositeElement {
  static _Q = "p:normalViewPr";
  static _A = [":showOutlineIcons", ":snapVertSplitter", ":vertBarState", ":horzBarState", ":preferSingleView"];
  /** Show Outline Icons in Normal View. Serialized as `:showOutlineIcons` */
  get showOutlineIcons() {
    return this._g(":showOutlineIcons");
  }
  set showOutlineIcons(v) {
    this._s(":showOutlineIcons", v);
  }
  /** Snap Vertical Splitter. Serialized as `:snapVertSplitter` */
  get snapVerticalSplitter() {
    return this._g(":snapVertSplitter");
  }
  set snapVerticalSplitter(v) {
    this._s(":snapVertSplitter", v);
  }
  /** State of the Vertical Splitter Bar. Serialized as `:vertBarState` */
  get verticalBarState() {
    return this._g(":vertBarState");
  }
  set verticalBarState(v) {
    this._s(":vertBarState", v);
  }
  /** State of the Horizontal Splitter Bar. Serialized as `:horzBarState` */
  get horizontalBarState() {
    return this._g(":horzBarState");
  }
  set horizontalBarState(v) {
    this._s(":horzBarState", v);
  }
  /** Prefer Single View. Serialized as `:preferSingleView` */
  get preferSingleView() {
    return this._g(":preferSingleView");
  }
  set preferSingleView(v) {
    this._s(":preferSingleView", v);
  }
  /** Normal View Restored Left Properties. */
  get restoredLeft() {
    return this._f(RestoredLeft);
  }
  /** Normal View Restored Top Properties. */
  get restoredTop() {
    return this._f(RestoredTop);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class CommonSlideViewProperties extends OxmlCompositeElement {
  static _Q = "p:cSldViewPr";
  static _A = [":snapToGrid", ":snapToObjects", ":showGuides"];
  /** Snap Objects to Grid. Serialized as `:snapToGrid` */
  get snapToGrid() {
    return this._g(":snapToGrid");
  }
  set snapToGrid(v) {
    this._s(":snapToGrid", v);
  }
  /** Snap Objects to Objects. Serialized as `:snapToObjects` */
  get snapToObjects() {
    return this._g(":snapToObjects");
  }
  set snapToObjects(v) {
    this._s(":snapToObjects", v);
  }
  /** Show Guides in View. Serialized as `:showGuides` */
  get showGuides() {
    return this._g(":showGuides");
  }
  set showGuides(v) {
    this._s(":showGuides", v);
  }
  /** Base properties for Slide View. */
  get commonViewProperties() {
    return this._f(CommonViewProperties);
  }
  /** List of Guides. */
  get guideList() {
    return this._f(GuideList);
  }
}
class GuideList extends OxmlCompositeElement {
  static _Q = "p:guideLst";
}
class Guide extends OxmlLeafElement {
  static _Q = "p:guide";
  static _A = [":orient", ":pos"];
  /** Guide Orientation. Serialized as `:orient` */
  get orientation() {
    return this._g(":orient");
  }
  set orientation(v) {
    this._s(":orient", v);
  }
  /** Guide Position. Serialized as `:pos` */
  get position() {
    return this._g(":pos");
  }
  set position(v) {
    this._s(":pos", v);
  }
}
class OutlineViewSlideList extends OxmlCompositeElement {
  static _Q = "p:sldLst";
}
class OutlineViewSlideListEntry extends OxmlLeafElement {
  static _Q = "p:sld";
  static _A = ["r:id", ":collapse"];
  /** Relationship Identifier. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Collapsed. Serialized as `:collapse` */
  get collapse() {
    return this._g(":collapse");
  }
  set collapse(v) {
    this._s(":collapse", v);
  }
}
class CommonViewProperties extends OxmlCompositeElement {
  static _Q = "p:cViewPr";
  static _A = [":varScale"];
  /** Variable Scale. Serialized as `:varScale` */
  get variableScale() {
    return this._g(":varScale");
  }
  set variableScale(v) {
    this._s(":varScale", v);
  }
  /** View Scale. */
  get scaleFactor() {
    return this._f(ScaleFactor);
  }
  /** View Origin. */
  get origin() {
    return this._f(Origin);
  }
}
class Point2DType extends OxmlLeafElement {
  static _A = [":x", ":y"];
  /** X-Axis Coordinate. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y-Axis Coordinate. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
}
class Position extends Point2DType {
  static _Q = "p:pos";
}
class Origin extends Point2DType {
  static _Q = "p:origin";
}
class ScaleFactor extends OxmlCompositeElement {
  static _Q = "p:scale";
  /** Horizontal Ratio. */
  get scaleX() {
    return this._f(AScaleX);
  }
  /** Vertical Ratio. */
  get scaleY() {
    return this._f(AScaleY);
  }
}
class NormalViewPortionType extends OxmlLeafElement {
  static _A = [":sz", ":autoAdjust"];
  /** Normal View Dimension Size. Serialized as `:sz` */
  get size() {
    return this._g(":sz");
  }
  set size(v) {
    this._s(":sz", v);
  }
  /** Auto Adjust Normal View. Serialized as `:autoAdjust` */
  get autoAdjust() {
    return this._g(":autoAdjust");
  }
  set autoAdjust(v) {
    this._s(":autoAdjust", v);
  }
}
class RestoredTop extends NormalViewPortionType {
  static _Q = "p:restoredTop";
}
class RestoredLeft extends NormalViewPortionType {
  static _Q = "p:restoredLeft";
}
class Tag extends OxmlLeafElement {
  static _Q = "p:tag";
  static _A = [":name", ":val"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class CommonSlideData extends OxmlCompositeElement {
  static _Q = "p:cSld";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Slide Background. */
  get background() {
    return this._f(Background);
  }
  /** Shape Tree. */
  get shapeTree() {
    return this._f(ShapeTree);
  }
  /** Customer Data List. */
  get customerDataList() {
    return this._f(CustomerDataList);
  }
  /** List of controls. */
  get controlList() {
    return this._f(ControlList);
  }
  /** Returns CommonSlideDataExtensionList. */
  get commonSlideDataExtensionList() {
    return this._f(CommonSlideDataExtensionList);
  }
}
class SlideLayoutId extends OxmlCompositeElement {
  static _Q = "p:sldLayoutId";
  static _A = [":id", "r:id"];
  /** ID Tag. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** ID Tag. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TextListStyleType extends OxmlCompositeElement {
  /** Default Paragraph Style. */
  get defaultParagraphProperties() {
    return this._f(ADefaultParagraphProperties);
  }
  /** List Level 1 Text Style. */
  get level1ParagraphProperties() {
    return this._f(ALevel1ParagraphProperties);
  }
  /** List Level 2 Text Style. */
  get level2ParagraphProperties() {
    return this._f(ALevel2ParagraphProperties);
  }
  /** List Level 3 Text Style. */
  get level3ParagraphProperties() {
    return this._f(ALevel3ParagraphProperties);
  }
  /** List Level 4 Text Style. */
  get level4ParagraphProperties() {
    return this._f(ALevel4ParagraphProperties);
  }
  /** List Level 5 Text Style. */
  get level5ParagraphProperties() {
    return this._f(ALevel5ParagraphProperties);
  }
  /** List Level 6 Text Style. */
  get level6ParagraphProperties() {
    return this._f(ALevel6ParagraphProperties);
  }
  /** List Level 7 Text Style. */
  get level7ParagraphProperties() {
    return this._f(ALevel7ParagraphProperties);
  }
  /** List Level 8 Text Style. */
  get level8ParagraphProperties() {
    return this._f(ALevel8ParagraphProperties);
  }
  /** List Level 9 Text Style. */
  get level9ParagraphProperties() {
    return this._f(ALevel9ParagraphProperties);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NotesStyle extends TextListStyleType {
  static _Q = "p:notesStyle";
}
class DefaultTextStyle extends TextListStyleType {
  static _Q = "p:defaultTextStyle";
}
class OtherStyle extends TextListStyleType {
  static _Q = "p:otherStyle";
}
class BodyStyle extends TextListStyleType {
  static _Q = "p:bodyStyle";
}
class TitleStyle extends TextListStyleType {
  static _Q = "p:titleStyle";
}
class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:cNvGrpSpPr";
  /** Returns AGroupShapeLocks. */
  get groupShapeLocks() {
    return this._f(AGroupShapeLocks);
  }
  /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
  get nonVisualGroupDrawingShapePropsExtensionList() {
    return this._f(ANonVisualGroupDrawingShapePropsExtensionList);
  }
}
class Transform extends OxmlCompositeElement {
  static _Q = "p:xfrm";
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
class NonVisualGraphicFrameProperties extends OxmlCompositeElement {
  static _Q = "p:nvGraphicFramePr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Graphic Frame Drawing Properties. */
  get nonVisualGraphicFrameDrawingProperties() {
    return this._f(NonVisualGraphicFrameDrawingProperties);
  }
  /** Application Non-Visual Drawing Properties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
}
class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:cNvGraphicFramePr";
  /** Graphic Frame Locks. */
  get graphicFrameLocks() {
    return this._f(AGraphicFrameLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class BlipFill extends OxmlCompositeElement {
  static _Q = "p:blipFill";
  static _A = [":dpi", ":rotWithShape"];
  /** DPI Setting. Serialized as `:dpi` */
  get dpi() {
    return this._g(":dpi");
  }
  set dpi(v) {
    this._s(":dpi", v);
  }
  /** Rotate With Shape. Serialized as `:rotWithShape` */
  get rotateWithShape() {
    return this._g(":rotWithShape");
  }
  set rotateWithShape(v) {
    this._s(":rotWithShape", v);
  }
  /** Returns ABlip. */
  get blip() {
    return this._f(ABlip);
  }
  /** Source Rectangle. */
  get sourceRectangle() {
    return this._f(ASourceRectangle);
  }
}
class NonVisualPictureProperties extends OxmlCompositeElement {
  static _Q = "p:nvPicPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Picture Drawing Properties. */
  get nonVisualPictureDrawingProperties() {
    return this._f(NonVisualPictureDrawingProperties);
  }
  /** Returns ApplicationNonVisualDrawingProperties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
}
class NonVisualPictureDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:cNvPicPr";
  static _A = [":preferRelativeResize"];
  /** preferRelativeResize. Serialized as `:preferRelativeResize` */
  get preferRelativeResize() {
    return this._g(":preferRelativeResize");
  }
  set preferRelativeResize(v) {
    this._s(":preferRelativeResize", v);
  }
  /** Returns APictureLocks. */
  get pictureLocks() {
    return this._f(APictureLocks);
  }
  /** Returns ANonVisualPicturePropertiesExtensionList. */
  get nonVisualPicturePropertiesExtensionList() {
    return this._f(ANonVisualPicturePropertiesExtensionList);
  }
}
class NonVisualConnectionShapeProperties extends OxmlCompositeElement {
  static _Q = "p:nvCxnSpPr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Connector Shape Drawing Properties. */
  get nonVisualConnectorShapeDrawingProperties() {
    return this._f(NonVisualConnectorShapeDrawingProperties);
  }
  /** Application Non-Visual Drawing Properties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
}
class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:cNvCxnSpPr";
  /** Connection Shape Locks. */
  get connectionShapeLocks() {
    return this._f(AConnectionShapeLocks);
  }
  /** Connection Start. */
  get startConnection() {
    return this._f(AStartConnection);
  }
  /** Connection End. */
  get endConnection() {
    return this._f(AEndConnection);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class TextBody extends OxmlCompositeElement {
  static _Q = "p:txBody";
  /** Body Properties. */
  get bodyProperties() {
    return this._f(ABodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(AListStyle);
  }
}
class ShapeStyle extends OxmlCompositeElement {
  static _Q = "p:style";
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
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "p:spPr";
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
class NonVisualShapeProperties extends OxmlCompositeElement {
  static _Q = "p:nvSpPr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Drawing Properties for a Shape. */
  get nonVisualShapeDrawingProperties() {
    return this._f(NonVisualShapeDrawingProperties);
  }
  /** Application Non-Visual Drawing Properties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
}
class ApplicationNonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:nvPr";
  static _A = [":isPhoto", ":userDrawn"];
  /** Is a Photo Album. Serialized as `:isPhoto` */
  get isPhoto() {
    return this._g(":isPhoto");
  }
  set isPhoto(v) {
    this._s(":isPhoto", v);
  }
  /** Is User Drawn. Serialized as `:userDrawn` */
  get userDrawn() {
    return this._g(":userDrawn");
  }
  set userDrawn(v) {
    this._s(":userDrawn", v);
  }
  /** Placeholder Shape. */
  get placeholderShape() {
    return this._f(PlaceholderShape);
  }
}
class NonVisualShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:cNvSpPr";
  static _A = [":txBox"];
  /** Text Box. Serialized as `:txBox` */
  get textBox() {
    return this._g(":txBox");
  }
  set textBox(v) {
    this._s(":txBox", v);
  }
  /** Shape Locks. */
  get shapeLocks() {
    return this._f(AShapeLocks);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "p:cNvPr";
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
class CustomShow extends OxmlCompositeElement {
  static _Q = "p:custShow";
  static _A = [":name", ":id"];
  /** Custom Show Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Custom Show ID. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** List of Presentation Slides. */
  get slideList() {
    return this._f(SlideList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlideList extends OxmlCompositeElement {
  static _Q = "p:sldLst";
}
class EmbeddedFont extends OxmlCompositeElement {
  static _Q = "p:embeddedFont";
  /** Embedded Font Name. */
  get font() {
    return this._f(Font);
  }
  /** Regular Embedded Font. */
  get regularFont() {
    return this._f(RegularFont);
  }
  /** Bold Embedded Font. */
  get boldFont() {
    return this._f(BoldFont);
  }
  /** Italic Embedded Font. */
  get italicFont() {
    return this._f(ItalicFont);
  }
  /** Bold Italic Embedded Font. */
  get boldItalicFont() {
    return this._f(BoldItalicFont);
  }
}
class EmbeddedFontDataIdType extends OxmlLeafElement {
  static _A = ["r:id"];
  /** Relationship Identifier. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class BoldItalicFont extends EmbeddedFontDataIdType {
  static _Q = "p:boldItalic";
}
class ItalicFont extends EmbeddedFontDataIdType {
  static _Q = "p:italic";
}
class BoldFont extends EmbeddedFontDataIdType {
  static _Q = "p:bold";
}
class RegularFont extends EmbeddedFontDataIdType {
  static _Q = "p:regular";
}
class Font extends OxmlLeafElement {
  static _Q = "p:font";
  static _A = [":typeface", ":panose", ":pitchFamily", ":charset"];
  /** Text Typeface. Serialized as `:typeface` */
  get typeface() {
    return this._g(":typeface");
  }
  set typeface(v) {
    this._s(":typeface", v);
  }
  /** Panose Setting. Serialized as `:panose` */
  get panose() {
    return this._g(":panose");
  }
  set panose(v) {
    this._s(":panose", v);
  }
  /** Similar Font Family. Serialized as `:pitchFamily` */
  get pitchFamily() {
    return this._g(":pitchFamily");
  }
  set pitchFamily(v) {
    this._s(":pitchFamily", v);
  }
  /** Similar Character Set. Serialized as `:charset` */
  get characterSet() {
    return this._g(":charset");
  }
  set characterSet(v) {
    this._s(":charset", v);
  }
}
class HandoutMasterId extends OxmlCompositeElement {
  static _Q = "p:handoutMasterId";
  static _A = ["r:id"];
  /** Relationship Identifier. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NotesMasterId extends OxmlCompositeElement {
  static _Q = "p:notesMasterId";
  static _A = ["r:id"];
  /** Relationship Identifier. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlideMasterId extends OxmlCompositeElement {
  static _Q = "p:sldMasterId";
  static _A = [":id", "r:id"];
  /** Slide Master Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Relationship Identifier. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SlideId extends OxmlCompositeElement {
  static _Q = "p:sldId";
  static _A = [":id", "r:id"];
  /** Slide Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Relationship Identifier. Serialized as `r:id` */
  get relationshipId() {
    return this._g("r:id");
  }
  set relationshipId(v) {
    this._s("r:id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Control extends OxmlCompositeElement {
  static _Q = "p:control";
  static _A = [":spid", ":name", ":showAsIcon", "r:id", ":imgW", ":imgH"];
  /** spid. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** showAsIcon. Serialized as `:showAsIcon` */
  get showAsIcon() {
    return this._g(":showAsIcon");
  }
  set showAsIcon(v) {
    this._s(":showAsIcon", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** imgW. Serialized as `:imgW` */
  get imageWidth() {
    return this._g(":imgW");
  }
  set imageWidth(v) {
    this._s(":imgW", v);
  }
  /** imgH. Serialized as `:imgH` */
  get imageHeight() {
    return this._g(":imgH");
  }
  set imageHeight(v) {
    this._s(":imgH", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
  /** Returns Picture. */
  get picture() {
    return this._f(Picture);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p:extLst";
}
class Comment extends OxmlCompositeElement {
  static _Q = "p:cm";
  static _A = [":authorId", ":dt", ":idx"];
  /** authorId. Serialized as `:authorId` */
  get authorId() {
    return this._g(":authorId");
  }
  set authorId(v) {
    this._s(":authorId", v);
  }
  /** dt. Serialized as `:dt` */
  get dateTime() {
    return this._g(":dt");
  }
  set dateTime(v) {
    this._s(":dt", v);
  }
  /** idx. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** Returns Position. */
  get position() {
    return this._f(Position);
  }
  /** Returns Text. */
  get text() {
    return this._f(Text);
  }
  /** Returns CommentExtensionList. */
  get commentExtensionList() {
    return this._f(CommentExtensionList);
  }
}
class CommentAuthor extends OxmlCompositeElement {
  static _Q = "p:cmAuthor";
  static _A = [":id", ":name", ":initials", ":lastIdx", ":clrIdx"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** initials. Serialized as `:initials` */
  get initials() {
    return this._g(":initials");
  }
  set initials(v) {
    this._s(":initials", v);
  }
  /** lastIdx. Serialized as `:lastIdx` */
  get lastIndex() {
    return this._g(":lastIdx");
  }
  set lastIndex(v) {
    this._s(":lastIdx", v);
  }
  /** clrIdx. Serialized as `:clrIdx` */
  get colorIndex() {
    return this._g(":clrIdx");
  }
  set colorIndex(v) {
    this._s(":clrIdx", v);
  }
  /** Returns CommentAuthorExtensionList. */
  get commentAuthorExtensionList() {
    return this._f(CommentAuthorExtensionList);
  }
}
class CustomerDataTags extends OxmlLeafElement {
  static _Q = "p:tags";
  static _A = ["r:id"];
  /** Relationship ID. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class CustomerData extends OxmlLeafElement {
  static _Q = "p:custData";
  static _A = ["r:id"];
  /** Relationship ID. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class SlideListEntry extends OxmlLeafElement {
  static _Q = "p:sld";
  static _A = ["r:id"];
  /** Relationship ID. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
}
class Color3Type extends OxmlCompositeElement {
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class ToColor extends Color3Type {
  static _Q = "p:to";
}
class FromColor extends Color3Type {
  static _Q = "p:from";
}
class ByColor extends OxmlCompositeElement {
  static _Q = "p:by";
  /** RGB. */
  get rgbColor() {
    return this._f(RgbColor);
  }
  /** HSL. */
  get hslColor() {
    return this._f(HslColor);
  }
}
class ExtensionListWithModification extends OxmlCompositeElement {
  static _Q = "p:extLst";
  static _A = [":mod"];
  /** Modify. Serialized as `:mod` */
  get modify() {
    return this._g(":mod");
  }
  set modify(v) {
    this._s(":mod", v);
  }
}
class BuildList extends OxmlCompositeElement {
  static _Q = "p:bldLst";
}
class BuildGraphics extends OxmlCompositeElement {
  static _Q = "p:bldGraphic";
  static _A = [":spid", ":grpId", ":uiExpand"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** Group ID. Serialized as `:grpId` */
  get groupId() {
    return this._g(":grpId");
  }
  set groupId(v) {
    this._s(":grpId", v);
  }
  /** Expand UI. Serialized as `:uiExpand` */
  get uiExpand() {
    return this._g(":uiExpand");
  }
  set uiExpand(v) {
    this._s(":uiExpand", v);
  }
  /** Build As One. */
  get buildAsOne() {
    return this._f(BuildAsOne);
  }
  /** Build Sub Elements. */
  get buildSubElement() {
    return this._f(BuildSubElement);
  }
}
class BuildOleChart extends OxmlLeafElement {
  static _Q = "p:bldOleChart";
  static _A = [":spid", ":grpId", ":uiExpand", ":bld", ":animBg"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** Group ID. Serialized as `:grpId` */
  get groupId() {
    return this._g(":grpId");
  }
  set groupId(v) {
    this._s(":grpId", v);
  }
  /** Expand UI. Serialized as `:uiExpand` */
  get uiExpand() {
    return this._g(":uiExpand");
  }
  set uiExpand(v) {
    this._s(":uiExpand", v);
  }
  /** Build. Serialized as `:bld` */
  get build() {
    return this._g(":bld");
  }
  set build(v) {
    this._s(":bld", v);
  }
  /** Animate Background. Serialized as `:animBg` */
  get animateBackground() {
    return this._g(":animBg");
  }
  set animateBackground(v) {
    this._s(":animBg", v);
  }
}
class BuildDiagram extends OxmlLeafElement {
  static _Q = "p:bldDgm";
  static _A = [":spid", ":grpId", ":uiExpand", ":bld"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** Group ID. Serialized as `:grpId` */
  get groupId() {
    return this._g(":grpId");
  }
  set groupId(v) {
    this._s(":grpId", v);
  }
  /** Expand UI. Serialized as `:uiExpand` */
  get uiExpand() {
    return this._g(":uiExpand");
  }
  set uiExpand(v) {
    this._s(":uiExpand", v);
  }
  /** Diagram Build Types. Serialized as `:bld` */
  get build() {
    return this._g(":bld");
  }
  set build(v) {
    this._s(":bld", v);
  }
}
class BuildParagraph extends OxmlCompositeElement {
  static _Q = "p:bldP";
  static _A = [":spid", ":grpId", ":uiExpand", ":build", ":bldLvl", ":animBg", ":autoUpdateAnimBg", ":rev", ":advAuto"];
  /** Shape ID. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** Group ID. Serialized as `:grpId` */
  get groupId() {
    return this._g(":grpId");
  }
  set groupId(v) {
    this._s(":grpId", v);
  }
  /** Expand UI. Serialized as `:uiExpand` */
  get uiExpand() {
    return this._g(":uiExpand");
  }
  set uiExpand(v) {
    this._s(":uiExpand", v);
  }
  /** Build Types. Serialized as `:build` */
  get build() {
    return this._g(":build");
  }
  set build(v) {
    this._s(":build", v);
  }
  /** Build Level. Serialized as `:bldLvl` */
  get buildLevel() {
    return this._g(":bldLvl");
  }
  set buildLevel(v) {
    this._s(":bldLvl", v);
  }
  /** Animate Background. Serialized as `:animBg` */
  get animateBackground() {
    return this._g(":animBg");
  }
  set animateBackground(v) {
    this._s(":animBg", v);
  }
  /** Auto Update Animation Background. Serialized as `:autoUpdateAnimBg` */
  get autoAnimateBackground() {
    return this._g(":autoUpdateAnimBg");
  }
  set autoAnimateBackground(v) {
    this._s(":autoUpdateAnimBg", v);
  }
  /** Reverse. Serialized as `:rev` */
  get reverse() {
    return this._g(":rev");
  }
  set reverse(v) {
    this._s(":rev", v);
  }
  /** Auto Advance Time. Serialized as `:advAuto` */
  get autoAdvance() {
    return this._g(":advAuto");
  }
  set autoAdvance(v) {
    this._s(":advAuto", v);
  }
  /** Template effects. */
  get templateList() {
    return this._f(TemplateList);
  }
}
class BuildSubElement extends OxmlCompositeElement {
  static _Q = "p:bldSub";
  /** Build Diagram. */
  get buildDiagram() {
    return this._f(ABuildDiagram);
  }
  /** Build Chart. */
  get buildChart() {
    return this._f(ABuildChart);
  }
}
class TemplateList extends OxmlCompositeElement {
  static _Q = "p:tmplLst";
}
class Template extends OxmlCompositeElement {
  static _Q = "p:tmpl";
  static _A = [":lvl"];
  /** Level. Serialized as `:lvl` */
  get level() {
    return this._g(":lvl");
  }
  set level(v) {
    this._s(":lvl", v);
  }
  /** Time Node List. */
  get timeNodeList() {
    return this._f(TimeNodeList);
  }
}
class TimeNodeList extends OxmlCompositeElement {
  static _Q = "p:tnLst";
  /** Returns ParallelTimeNode. */
  get parallelTimeNode() {
    return this._f(ParallelTimeNode);
  }
}
class CommonMediaNode extends OxmlCompositeElement {
  static _Q = "p:cMediaNode";
  static _A = [":vol", ":mute", ":numSld", ":showWhenStopped"];
  /** Volume. Serialized as `:vol` */
  get volume() {
    return this._g(":vol");
  }
  set volume(v) {
    this._s(":vol", v);
  }
  /** Mute. Serialized as `:mute` */
  get mute() {
    return this._g(":mute");
  }
  set mute(v) {
    this._s(":mute", v);
  }
  /** Number of Slides. Serialized as `:numSld` */
  get slideCount() {
    return this._g(":numSld");
  }
  set slideCount(v) {
    this._s(":numSld", v);
  }
  /** Show When Stopped. Serialized as `:showWhenStopped` */
  get showWhenStopped() {
    return this._g(":showWhenStopped");
  }
  set showWhenStopped(v) {
    this._s(":showWhenStopped", v);
  }
  /** Common Time Node Properties. */
  get commonTimeNode() {
    return this._f(CommonTimeNode);
  }
  /** Returns TargetElement. */
  get targetElement() {
    return this._f(TargetElement);
  }
}
class TimeListAnimationVariantType extends OxmlCompositeElement {
  /** Boolean Variant. */
  get booleanVariantValue() {
    return this._f(BooleanVariantValue);
  }
  /** Integer. */
  get integerVariantValue() {
    return this._f(IntegerVariantValue);
  }
  /** Float Value. */
  get floatVariantValue() {
    return this._f(FloatVariantValue);
  }
  /** String Value. */
  get stringVariantValue() {
    return this._f(StringVariantValue);
  }
  /** Color Value. */
  get colorValue() {
    return this._f(ColorValue);
  }
}
class VariantValue extends TimeListAnimationVariantType {
  static _Q = "p:val";
}
class ToVariantValue extends TimeListAnimationVariantType {
  static _Q = "p:to";
}
class Progress extends OxmlCompositeElement {
  static _Q = "p:progress";
  /** Float Value. */
  get floatVariantValue() {
    return this._f(FloatVariantValue);
  }
}
class CommonBehavior extends OxmlCompositeElement {
  static _Q = "p:cBhvr";
  static _A = [":additive", ":accumulate", ":xfrmType", ":from", ":to", ":by", ":rctx", ":override"];
  /** Additive. Serialized as `:additive` */
  get additive() {
    return this._g(":additive");
  }
  set additive(v) {
    this._s(":additive", v);
  }
  /** Accumulate. Serialized as `:accumulate` */
  get accumulate() {
    return this._g(":accumulate");
  }
  set accumulate(v) {
    this._s(":accumulate", v);
  }
  /** Transform Type. Serialized as `:xfrmType` */
  get transformType() {
    return this._g(":xfrmType");
  }
  set transformType(v) {
    this._s(":xfrmType", v);
  }
  /** From. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** To. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
  /** By. Serialized as `:by` */
  get by() {
    return this._g(":by");
  }
  set by(v) {
    this._s(":by", v);
  }
  /** Runtime Context. Serialized as `:rctx` */
  get runtimeContext() {
    return this._g(":rctx");
  }
  set runtimeContext(v) {
    this._s(":rctx", v);
  }
  /** Override. Serialized as `:override` */
  get override() {
    return this._g(":override");
  }
  set override(v) {
    this._s(":override", v);
  }
  /** Returns CommonTimeNode. */
  get commonTimeNode() {
    return this._f(CommonTimeNode);
  }
  /** Target Element. */
  get targetElement() {
    return this._f(TargetElement);
  }
  /** Attribute Name List. */
  get attributeNameList() {
    return this._f(AttributeNameList);
  }
}
class HslColor extends OxmlLeafElement {
  static _Q = "p:hsl";
  static _A = [":h", ":s", ":l"];
  /** Hue. Serialized as `:h` */
  get hue() {
    return this._g(":h");
  }
  set hue(v) {
    this._s(":h", v);
  }
  /** Saturation. Serialized as `:s` */
  get saturation() {
    return this._g(":s");
  }
  set saturation(v) {
    this._s(":s", v);
  }
  /** Lightness. Serialized as `:l` */
  get lightness() {
    return this._g(":l");
  }
  set lightness(v) {
    this._s(":l", v);
  }
}
class RgbColor extends OxmlLeafElement {
  static _Q = "p:rgb";
  static _A = [":r", ":g", ":b"];
  /** Red. Serialized as `:r` */
  get red() {
    return this._g(":r");
  }
  set red(v) {
    this._s(":r", v);
  }
  /** Green. Serialized as `:g` */
  get green() {
    return this._g(":g");
  }
  set green(v) {
    this._s(":g", v);
  }
  /** Blue. Serialized as `:b` */
  get blue() {
    return this._g(":b");
  }
  set blue(v) {
    this._s(":b", v);
  }
}
class TimeAnimateValue extends OxmlCompositeElement {
  static _Q = "p:tav";
  static _A = [":tm", ":fmla"];
  /** Time. Serialized as `:tm` */
  get time() {
    return this._g(":tm");
  }
  set time(v) {
    this._s(":tm", v);
  }
  /** Formula. Serialized as `:fmla` */
  get fomula() {
    return this._g(":fmla");
  }
  set fomula(v) {
    this._s(":fmla", v);
  }
  /** Value. */
  get variantValue() {
    return this._f(VariantValue);
  }
}
class ColorType extends OxmlCompositeElement {
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class PenColor extends ColorType {
  static _Q = "p:penClr";
}
class ColorValue extends ColorType {
  static _Q = "p:clrVal";
}
class StringVariantValue extends OxmlLeafElement {
  static _Q = "p:strVal";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class FloatVariantValue extends OxmlLeafElement {
  static _Q = "p:fltVal";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class IntegerVariantValue extends OxmlLeafElement {
  static _Q = "p:intVal";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BooleanVariantValue extends OxmlLeafElement {
  static _Q = "p:boolVal";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class AttributeNameList extends OxmlCompositeElement {
  static _Q = "p:attrNameLst";
}
class Text extends OxmlLeafTextElement {
  static _Q = "p:text";
}
class AttributeName extends OxmlLeafTextElement {
  static _Q = "p:attrName";
}
class TimeListTimeConditionalListType extends OxmlCompositeElement {
}
class EndConditionList extends TimeListTimeConditionalListType {
  static _Q = "p:endCondLst";
}
class StartConditionList extends TimeListTimeConditionalListType {
  static _Q = "p:stCondLst";
}
class NextConditionList extends TimeListTimeConditionalListType {
  static _Q = "p:nextCondLst";
}
class PreviousConditionList extends TimeListTimeConditionalListType {
  static _Q = "p:prevCondLst";
}
class CommonTimeNode extends OxmlCompositeElement {
  static _Q = "p:cTn";
  static _A = [":id", ":presetID", ":presetClass", ":presetSubtype", ":dur", ":repeatCount", ":repeatDur", ":spd", ":accel", ":decel", ":autoRev", ":restart", ":fill", ":syncBehavior", ":tmFilter", ":evtFilter", ":display", ":masterRel", ":bldLvl", ":grpId", ":afterEffect", ":nodeType", ":nodePh", "p14:presetBounceEnd"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** presetID. Serialized as `:presetID` */
  get presetId() {
    return this._g(":presetID");
  }
  set presetId(v) {
    this._s(":presetID", v);
  }
  /** presetClass. Serialized as `:presetClass` */
  get presetClass() {
    return this._g(":presetClass");
  }
  set presetClass(v) {
    this._s(":presetClass", v);
  }
  /** presetSubtype. Serialized as `:presetSubtype` */
  get presetSubtype() {
    return this._g(":presetSubtype");
  }
  set presetSubtype(v) {
    this._s(":presetSubtype", v);
  }
  /** dur. Serialized as `:dur` */
  get duration() {
    return this._g(":dur");
  }
  set duration(v) {
    this._s(":dur", v);
  }
  /** repeatCount. Serialized as `:repeatCount` */
  get repeatCount() {
    return this._g(":repeatCount");
  }
  set repeatCount(v) {
    this._s(":repeatCount", v);
  }
  /** repeatDur. Serialized as `:repeatDur` */
  get repeatDuration() {
    return this._g(":repeatDur");
  }
  set repeatDuration(v) {
    this._s(":repeatDur", v);
  }
  /** spd. Serialized as `:spd` */
  get speed() {
    return this._g(":spd");
  }
  set speed(v) {
    this._s(":spd", v);
  }
  /** accel. Serialized as `:accel` */
  get acceleration() {
    return this._g(":accel");
  }
  set acceleration(v) {
    this._s(":accel", v);
  }
  /** decel. Serialized as `:decel` */
  get deceleration() {
    return this._g(":decel");
  }
  set deceleration(v) {
    this._s(":decel", v);
  }
  /** autoRev. Serialized as `:autoRev` */
  get autoReverse() {
    return this._g(":autoRev");
  }
  set autoReverse(v) {
    this._s(":autoRev", v);
  }
  /** restart. Serialized as `:restart` */
  get restart() {
    return this._g(":restart");
  }
  set restart(v) {
    this._s(":restart", v);
  }
  /** fill. Serialized as `:fill` */
  get fill() {
    return this._g(":fill");
  }
  set fill(v) {
    this._s(":fill", v);
  }
  /** syncBehavior. Serialized as `:syncBehavior` */
  get syncBehavior() {
    return this._g(":syncBehavior");
  }
  set syncBehavior(v) {
    this._s(":syncBehavior", v);
  }
  /** tmFilter. Serialized as `:tmFilter` */
  get timeFilter() {
    return this._g(":tmFilter");
  }
  set timeFilter(v) {
    this._s(":tmFilter", v);
  }
  /** evtFilter. Serialized as `:evtFilter` */
  get eventFilter() {
    return this._g(":evtFilter");
  }
  set eventFilter(v) {
    this._s(":evtFilter", v);
  }
  /** display. Serialized as `:display` */
  get display() {
    return this._g(":display");
  }
  set display(v) {
    this._s(":display", v);
  }
  /** masterRel. Serialized as `:masterRel` */
  get masterRelation() {
    return this._g(":masterRel");
  }
  set masterRelation(v) {
    this._s(":masterRel", v);
  }
  /** bldLvl. Serialized as `:bldLvl` */
  get buildLevel() {
    return this._g(":bldLvl");
  }
  set buildLevel(v) {
    this._s(":bldLvl", v);
  }
  /** grpId. Serialized as `:grpId` */
  get groupId() {
    return this._g(":grpId");
  }
  set groupId(v) {
    this._s(":grpId", v);
  }
  /** afterEffect. Serialized as `:afterEffect` */
  get afterEffect() {
    return this._g(":afterEffect");
  }
  set afterEffect(v) {
    this._s(":afterEffect", v);
  }
  /** nodeType. Serialized as `:nodeType` */
  get nodeType() {
    return this._g(":nodeType");
  }
  set nodeType(v) {
    this._s(":nodeType", v);
  }
  /** nodePh. Serialized as `:nodePh` */
  get nodePlaceholder() {
    return this._g(":nodePh");
  }
  set nodePlaceholder(v) {
    this._s(":nodePh", v);
  }
  /** presetBounceEnd. Serialized as `p14:presetBounceEnd` */
  get presetBounceEnd() {
    return this._g("p14:presetBounceEnd");
  }
  set presetBounceEnd(v) {
    this._s("p14:presetBounceEnd", v);
  }
  /** Returns StartConditionList. */
  get startConditionList() {
    return this._f(StartConditionList);
  }
  /** Returns EndConditionList. */
  get endConditionList() {
    return this._f(EndConditionList);
  }
  /** Returns EndSync. */
  get endSync() {
    return this._f(EndSync);
  }
  /** Returns Iterate. */
  get iterate() {
    return this._f(Iterate);
  }
  /** Returns ChildTimeNodeList. */
  get childTimeNodeList() {
    return this._f(ChildTimeNodeList);
  }
  /** Returns SubTimeNodeList. */
  get subTimeNodeList() {
    return this._f(SubTimeNodeList);
  }
}
class Video extends OxmlCompositeElement {
  static _Q = "p:video";
  static _A = [":fullScrn"];
  /** Full Screen. Serialized as `:fullScrn` */
  get fullScreen() {
    return this._g(":fullScrn");
  }
  set fullScreen(v) {
    this._s(":fullScrn", v);
  }
  /** Common Media Node Properties. */
  get commonMediaNode() {
    return this._f(CommonMediaNode);
  }
}
class Audio extends OxmlCompositeElement {
  static _Q = "p:audio";
  static _A = [":isNarration"];
  /** Is Narration. Serialized as `:isNarration` */
  get isNarration() {
    return this._g(":isNarration");
  }
  set isNarration(v) {
    this._s(":isNarration", v);
  }
  /** Common Media Node Properties. */
  get commonMediaNode() {
    return this._f(CommonMediaNode);
  }
}
class SetBehavior extends OxmlCompositeElement {
  static _Q = "p:set";
  /** Common Behavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
  /** To. */
  get toVariantValue() {
    return this._f(ToVariantValue);
  }
}
class Command extends OxmlCompositeElement {
  static _Q = "p:cmd";
  static _A = [":type", ":cmd"];
  /** Command Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Command. Serialized as `:cmd` */
  get commandName() {
    return this._g(":cmd");
  }
  set commandName(v) {
    this._s(":cmd", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
}
class AnimateScale extends OxmlCompositeElement {
  static _Q = "p:animScale";
  static _A = [":zoomContents", "p14:bounceEnd"];
  /** zoomContents. Serialized as `:zoomContents` */
  get zoomContents() {
    return this._g(":zoomContents");
  }
  set zoomContents(v) {
    this._s(":zoomContents", v);
  }
  /** bounceEnd. Serialized as `p14:bounceEnd` */
  get bounceEnd() {
    return this._g("p14:bounceEnd");
  }
  set bounceEnd(v) {
    this._s("p14:bounceEnd", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
  /** Returns ByPosition. */
  get byPosition() {
    return this._f(ByPosition);
  }
  /** Returns FromPosition. */
  get fromPosition() {
    return this._f(FromPosition);
  }
  /** Returns ToPosition. */
  get toPosition() {
    return this._f(ToPosition);
  }
}
class AnimateRotation extends OxmlCompositeElement {
  static _Q = "p:animRot";
  static _A = [":by", ":from", ":to", "p14:bounceEnd"];
  /** by. Serialized as `:by` */
  get by() {
    return this._g(":by");
  }
  set by(v) {
    this._s(":by", v);
  }
  /** from. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** to. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
  /** bounceEnd. Serialized as `p14:bounceEnd` */
  get bounceEnd() {
    return this._g("p14:bounceEnd");
  }
  set bounceEnd(v) {
    this._s("p14:bounceEnd", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
}
class AnimateMotion extends OxmlCompositeElement {
  static _Q = "p:animMotion";
  static _A = [":origin", ":path", ":pathEditMode", ":rAng", ":ptsTypes", "p14:bounceEnd"];
  /** origin. Serialized as `:origin` */
  get origin() {
    return this._g(":origin");
  }
  set origin(v) {
    this._s(":origin", v);
  }
  /** path. Serialized as `:path` */
  get path() {
    return this._g(":path");
  }
  set path(v) {
    this._s(":path", v);
  }
  /** pathEditMode. Serialized as `:pathEditMode` */
  get pathEditMode() {
    return this._g(":pathEditMode");
  }
  set pathEditMode(v) {
    this._s(":pathEditMode", v);
  }
  /** rAng. Serialized as `:rAng` */
  get relativeAngle() {
    return this._g(":rAng");
  }
  set relativeAngle(v) {
    this._s(":rAng", v);
  }
  /** ptsTypes. Serialized as `:ptsTypes` */
  get pointTypes() {
    return this._g(":ptsTypes");
  }
  set pointTypes(v) {
    this._s(":ptsTypes", v);
  }
  /** bounceEnd. Serialized as `p14:bounceEnd` */
  get bounceEnd() {
    return this._g("p14:bounceEnd");
  }
  set bounceEnd(v) {
    this._s("p14:bounceEnd", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
  /** Returns ByPosition. */
  get byPosition() {
    return this._f(ByPosition);
  }
  /** Returns FromPosition. */
  get fromPosition() {
    return this._f(FromPosition);
  }
  /** Returns ToPosition. */
  get toPosition() {
    return this._f(ToPosition);
  }
  /** Returns RotationCenter. */
  get rotationCenter() {
    return this._f(RotationCenter);
  }
}
class AnimateEffect extends OxmlCompositeElement {
  static _Q = "p:animEffect";
  static _A = [":transition", ":filter", ":prLst"];
  /** Transition. Serialized as `:transition` */
  get transition() {
    return this._g(":transition");
  }
  set transition(v) {
    this._s(":transition", v);
  }
  /** Filter. Serialized as `:filter` */
  get filter() {
    return this._g(":filter");
  }
  set filter(v) {
    this._s(":filter", v);
  }
  /** Property List. Serialized as `:prLst` */
  get propertyList() {
    return this._g(":prLst");
  }
  set propertyList(v) {
    this._s(":prLst", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
  /** Progress. */
  get progress() {
    return this._f(Progress);
  }
}
class AnimateColor extends OxmlCompositeElement {
  static _Q = "p:animClr";
  static _A = [":clrSpc", ":dir"];
  /** Color Space. Serialized as `:clrSpc` */
  get colorSpace() {
    return this._g(":clrSpc");
  }
  set colorSpace(v) {
    this._s(":clrSpc", v);
  }
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
  /** By. */
  get byColor() {
    return this._f(ByColor);
  }
  /** From. */
  get fromColor() {
    return this._f(FromColor);
  }
  /** To. */
  get toColor() {
    return this._f(ToColor);
  }
}
class Animate extends OxmlCompositeElement {
  static _Q = "p:anim";
  static _A = [":by", ":from", ":to", ":calcmode", ":valueType", "p14:bounceEnd"];
  /** by. Serialized as `:by` */
  get by() {
    return this._g(":by");
  }
  set by(v) {
    this._s(":by", v);
  }
  /** from. Serialized as `:from` */
  get from() {
    return this._g(":from");
  }
  set from(v) {
    this._s(":from", v);
  }
  /** to. Serialized as `:to` */
  get to() {
    return this._g(":to");
  }
  set to(v) {
    this._s(":to", v);
  }
  /** calcmode. Serialized as `:calcmode` */
  get calculationMode() {
    return this._g(":calcmode");
  }
  set calculationMode(v) {
    this._s(":calcmode", v);
  }
  /** valueType. Serialized as `:valueType` */
  get valueType() {
    return this._g(":valueType");
  }
  set valueType(v) {
    this._s(":valueType", v);
  }
  /** bounceEnd. Serialized as `p14:bounceEnd` */
  get bounceEnd() {
    return this._g("p14:bounceEnd");
  }
  set bounceEnd(v) {
    this._s("p14:bounceEnd", v);
  }
  /** Returns CommonBehavior. */
  get commonBehavior() {
    return this._f(CommonBehavior);
  }
  /** Returns TimeAnimateValueList. */
  get timeAnimateValueList() {
    return this._f(TimeAnimateValueList);
  }
}
class ExclusiveTimeNode extends OxmlCompositeElement {
  static _Q = "p:excl";
  /** Common TimeNode Properties. */
  get commonTimeNode() {
    return this._f(CommonTimeNode);
  }
}
class SequenceTimeNode extends OxmlCompositeElement {
  static _Q = "p:seq";
  static _A = [":concurrent", ":prevAc", ":nextAc"];
  /** Concurrent. Serialized as `:concurrent` */
  get concurrent() {
    return this._g(":concurrent");
  }
  set concurrent(v) {
    this._s(":concurrent", v);
  }
  /** Previous Action. Serialized as `:prevAc` */
  get previousAction() {
    return this._g(":prevAc");
  }
  set previousAction(v) {
    this._s(":prevAc", v);
  }
  /** Next Action. Serialized as `:nextAc` */
  get nextAction() {
    return this._g(":nextAc");
  }
  set nextAction(v) {
    this._s(":nextAc", v);
  }
  /** Common TimeNode Properties. */
  get commonTimeNode() {
    return this._f(CommonTimeNode);
  }
  /** Previous Conditions List. */
  get previousConditionList() {
    return this._f(PreviousConditionList);
  }
  /** Next Conditions List. */
  get nextConditionList() {
    return this._f(NextConditionList);
  }
}
class ParallelTimeNode extends OxmlCompositeElement {
  static _Q = "p:par";
  /** Parallel TimeNode. */
  get commonTimeNode() {
    return this._f(CommonTimeNode);
  }
}
class TimeListConditionalType extends OxmlCompositeElement {
  static _A = [":evt", ":delay"];
  /** Trigger Event. Serialized as `:evt` */
  get event() {
    return this._g(":evt");
  }
  set event(v) {
    this._s(":evt", v);
  }
  /** Trigger Delay. Serialized as `:delay` */
  get delay() {
    return this._g(":delay");
  }
  set delay(v) {
    this._s(":delay", v);
  }
  /** Target Element Trigger Choice. */
  get targetElement() {
    return this._f(TargetElement);
  }
  /** Time Node. */
  get timeNode() {
    return this._f(TimeNode);
  }
  /** Runtime Node Trigger Choice. */
  get runtimeNodeTrigger() {
    return this._f(RuntimeNodeTrigger);
  }
}
class EndSync extends TimeListConditionalType {
  static _Q = "p:endSync";
}
class Condition extends TimeListConditionalType {
  static _Q = "p:cond";
}
class RuntimeNodeTrigger extends OxmlLeafElement {
  static _Q = "p:rtn";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TimeNode extends OxmlLeafElement {
  static _Q = "p:tn";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TargetElement extends OxmlCompositeElement {
  static _Q = "p:tgtEl";
  /** Slide Target. */
  get slideTarget() {
    return this._f(SlideTarget);
  }
  /** Sound Target. */
  get soundTarget() {
    return this._f(SoundTarget);
  }
  /** Shape Target. */
  get shapeTarget() {
    return this._f(ShapeTarget);
  }
  /** Ink Target. */
  get inkTarget() {
    return this._f(InkTarget);
  }
  /** Returns P14BookmarkTarget. */
  get bookmarkTarget() {
    return this._f(P14BookmarkTarget);
  }
}
class TimePercentage extends OxmlLeafElement {
  static _Q = "p:tmPct";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TimeAbsolute extends OxmlLeafElement {
  static _Q = "p:tmAbs";
  static _A = [":val"];
  /** Time. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class StartSoundAction extends OxmlCompositeElement {
  static _Q = "p:stSnd";
  static _A = [":loop"];
  /** Loop Sound. Serialized as `:loop` */
  get loop() {
    return this._g(":loop");
  }
  set loop(v) {
    this._s(":loop", v);
  }
  /** Sound. */
  get sound() {
    return this._f(Sound);
  }
}
class EmbeddedWavAudioFileType extends OxmlLeafElement {
  static _A = ["r:embed", ":name", ":builtIn"];
  /** Embedded Audio File Relationship ID. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
  /** Sound Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Recognized Built-In Sound. Serialized as `:builtIn` */
  get builtIn() {
    return this._g(":builtIn");
  }
  set builtIn(v) {
    this._s(":builtIn", v);
  }
}
class SoundTarget extends EmbeddedWavAudioFileType {
  static _Q = "p:sndTgt";
}
class Sound extends EmbeddedWavAudioFileType {
  static _Q = "p:snd";
}
class ContentPart extends OxmlCompositeElement {
  static _Q = "p:contentPart";
  static _A = ["p14:bwMode", "r:id"];
  /** bwMode. Serialized as `p14:bwMode` */
  get bwMode() {
    return this._g("p14:bwMode");
  }
  set bwMode(v) {
    this._s("p14:bwMode", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** Returns P14NonVisualContentPartProperties. */
  get nonVisualContentPartProperties() {
    return this._f(P14NonVisualContentPartProperties);
  }
  /** Returns P14Transform2D. */
  get transform2D() {
    return this._f(P14Transform2D);
  }
  /** Returns P14ExtensionListModify. */
  get extensionListModify() {
    return this._f(P14ExtensionListModify);
  }
}
class ViewProperties extends OxmlPartRootElement {
  static _Q = "p:viewPr";
  static _A = [":lastView", ":showComments"];
  /** Last View. Serialized as `:lastView` */
  get lastView() {
    return this._g(":lastView");
  }
  set lastView(v) {
    this._s(":lastView", v);
  }
  /** Show Comments. Serialized as `:showComments` */
  get showComments() {
    return this._g(":showComments");
  }
  set showComments(v) {
    this._s(":showComments", v);
  }
  /** Normal View Properties. */
  get normalViewProperties() {
    return this._f(NormalViewProperties);
  }
  /** Slide View Properties. */
  get slideViewProperties() {
    return this._f(SlideViewProperties);
  }
  /** Outline View Properties. */
  get outlineViewProperties() {
    return this._f(OutlineViewProperties);
  }
  /** Notes Text View Properties. */
  get notesTextViewProperties() {
    return this._f(NotesTextViewProperties);
  }
  /** Slide Sorter View Properties. */
  get sorterViewProperties() {
    return this._f(SorterViewProperties);
  }
  /** Notes View Properties. */
  get notesViewProperties() {
    return this._f(NotesViewProperties);
  }
  /** Grid Spacing. */
  get gridSpacing() {
    return this._f(GridSpacing);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TagList extends OxmlPartRootElement {
  static _Q = "p:tagLst";
}
class SlideSyncProperties extends OxmlPartRootElement {
  static _Q = "p:sldSyncPr";
  static _A = [":serverSldId", ":serverSldModifiedTime", ":clientInsertedTime"];
  /** Server's Slide File ID. Serialized as `:serverSldId` */
  get serverSlideId() {
    return this._g(":serverSldId");
  }
  set serverSlideId(v) {
    this._s(":serverSldId", v);
  }
  /** Server's Slide File's modification date/time. Serialized as `:serverSldModifiedTime` */
  get serverSlideModifiedTime() {
    return this._g(":serverSldModifiedTime");
  }
  set serverSlideModifiedTime(v) {
    this._s(":serverSldModifiedTime", v);
  }
  /** Client Slide Insertion date/time. Serialized as `:clientInsertedTime` */
  get clientInsertedTime() {
    return this._g(":clientInsertedTime");
  }
  set clientInsertedTime(v) {
    this._s(":clientInsertedTime", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NotesSlide extends OxmlPartRootElement {
  static _Q = "p:notes";
  static _A = [":showMasterSp", ":showMasterPhAnim"];
  /** Show Master Shapes. Serialized as `:showMasterSp` */
  get showMasterShapes() {
    return this._g(":showMasterSp");
  }
  set showMasterShapes(v) {
    this._s(":showMasterSp", v);
  }
  /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
  get showMasterPlaceholderAnimations() {
    return this._g(":showMasterPhAnim");
  }
  set showMasterPlaceholderAnimations(v) {
    this._s(":showMasterPhAnim", v);
  }
  /** Common slide data for notes slides. */
  get commonSlideData() {
    return this._f(CommonSlideData);
  }
  /** Color Scheme Map Override. */
  get colorMapOverride() {
    return this._f(ColorMapOverride);
  }
  /** Returns ExtensionListWithModification. */
  get extensionListWithModification() {
    return this._f(ExtensionListWithModification);
  }
}
class NotesMaster extends OxmlPartRootElement {
  static _Q = "p:notesMaster";
  /** Returns CommonSlideData. */
  get commonSlideData() {
    return this._f(CommonSlideData);
  }
  /** Color Scheme Map. */
  get colorMap() {
    return this._f(ColorMap);
  }
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Returns NotesStyle. */
  get notesStyle() {
    return this._f(NotesStyle);
  }
  /** Returns NotesMasterExtensionList. */
  get notesMasterExtensionList() {
    return this._f(NotesMasterExtensionList);
  }
}
class HandoutMaster extends OxmlPartRootElement {
  static _Q = "p:handoutMaster";
  /** Returns CommonSlideData. */
  get commonSlideData() {
    return this._f(CommonSlideData);
  }
  /** Color Scheme Map. */
  get colorMap() {
    return this._f(ColorMap);
  }
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Returns HandoutMasterExtensionList. */
  get handoutMasterExtensionList() {
    return this._f(HandoutMasterExtensionList);
  }
}
class SlideMaster extends OxmlPartRootElement {
  static _Q = "p:sldMaster";
  static _A = [":preserve"];
  /** preserve. Serialized as `:preserve` */
  get preserve() {
    return this._g(":preserve");
  }
  set preserve(v) {
    this._s(":preserve", v);
  }
  /** Returns CommonSlideData. */
  get commonSlideData() {
    return this._f(CommonSlideData);
  }
  /** Color Scheme Map. */
  get colorMap() {
    return this._f(ColorMap);
  }
  /** Returns SlideLayoutIdList. */
  get slideLayoutIdList() {
    return this._f(SlideLayoutIdList);
  }
  /** Returns Transition. */
  get transition() {
    return this._f(Transition);
  }
  /** Returns Timing. */
  get timing() {
    return this._f(Timing);
  }
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Returns TextStyles. */
  get textStyles() {
    return this._f(TextStyles);
  }
  /** Returns SlideMasterExtensionList. */
  get slideMasterExtensionList() {
    return this._f(SlideMasterExtensionList);
  }
}
class SlideLayout extends OxmlPartRootElement {
  static _Q = "p:sldLayout";
  static _A = [":showMasterSp", ":showMasterPhAnim", ":matchingName", ":type", ":preserve", ":userDrawn"];
  /** Show Master Shapes. Serialized as `:showMasterSp` */
  get showMasterShapes() {
    return this._g(":showMasterSp");
  }
  set showMasterShapes(v) {
    this._s(":showMasterSp", v);
  }
  /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
  get showMasterPlaceholderAnimations() {
    return this._g(":showMasterPhAnim");
  }
  set showMasterPlaceholderAnimations(v) {
    this._s(":showMasterPhAnim", v);
  }
  /** matchingName. Serialized as `:matchingName` */
  get matchingName() {
    return this._g(":matchingName");
  }
  set matchingName(v) {
    this._s(":matchingName", v);
  }
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** preserve. Serialized as `:preserve` */
  get preserve() {
    return this._g(":preserve");
  }
  set preserve(v) {
    this._s(":preserve", v);
  }
  /** userDrawn. Serialized as `:userDrawn` */
  get userDrawn() {
    return this._g(":userDrawn");
  }
  set userDrawn(v) {
    this._s(":userDrawn", v);
  }
  /** Returns CommonSlideData. */
  get commonSlideData() {
    return this._f(CommonSlideData);
  }
  /** Color Scheme Map Override. */
  get colorMapOverride() {
    return this._f(ColorMapOverride);
  }
  /** Returns Transition. */
  get transition() {
    return this._f(Transition);
  }
  /** Returns Timing. */
  get timing() {
    return this._f(Timing);
  }
  /** Returns HeaderFooter. */
  get headerFooter() {
    return this._f(HeaderFooter);
  }
  /** Returns SlideLayoutExtensionList. */
  get slideLayoutExtensionList() {
    return this._f(SlideLayoutExtensionList);
  }
}
class Slide extends OxmlPartRootElement {
  static _Q = "p:sld";
  static _A = [":showMasterSp", ":showMasterPhAnim", ":show"];
  /** Show Master Shapes. Serialized as `:showMasterSp` */
  get showMasterShapes() {
    return this._g(":showMasterSp");
  }
  set showMasterShapes(v) {
    this._s(":showMasterSp", v);
  }
  /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
  get showMasterPlaceholderAnimations() {
    return this._g(":showMasterPhAnim");
  }
  set showMasterPlaceholderAnimations(v) {
    this._s(":showMasterPhAnim", v);
  }
  /** Show Slide in Slide Show. Serialized as `:show` */
  get show() {
    return this._g(":show");
  }
  set show(v) {
    this._s(":show", v);
  }
  /** Common slide data for slides. */
  get commonSlideData() {
    return this._f(CommonSlideData);
  }
  /** Color Scheme Map Override. */
  get colorMapOverride() {
    return this._f(ColorMapOverride);
  }
  /** Slide Transition. */
  get transition() {
    return this._f(Transition);
  }
  /** Slide Timing Information for a Slide. */
  get timing() {
    return this._f(Timing);
  }
  /** Returns SlideExtensionList. */
  get slideExtensionList() {
    return this._f(SlideExtensionList);
  }
}
class PresentationProperties extends OxmlPartRootElement {
  static _Q = "p:presentationPr";
  /** HTML Publishing Properties. */
  get htmlPublishProperties() {
    return this._f(HtmlPublishProperties);
  }
  /** Web Properties. */
  get webProperties() {
    return this._f(WebProperties);
  }
  /** Returns PrintingProperties. */
  get printingProperties() {
    return this._f(PrintingProperties);
  }
  /** Returns ShowProperties. */
  get showProperties() {
    return this._f(ShowProperties);
  }
  /** Returns ColorMostRecentlyUsed. */
  get colorMostRecentlyUsed() {
    return this._f(ColorMostRecentlyUsed);
  }
  /** Returns PresentationPropertiesExtensionList. */
  get presentationPropertiesExtensionList() {
    return this._f(PresentationPropertiesExtensionList);
  }
}
class Presentation extends OxmlPartRootElement {
  static _Q = "p:presentation";
  static _A = [":serverZoom", ":firstSlideNum", ":showSpecialPlsOnTitleSld", ":rtl", ":removePersonalInfoOnSave", ":compatMode", ":strictFirstAndLastChars", ":embedTrueTypeFonts", ":saveSubsetFonts", ":autoCompressPictures", ":bookmarkIdSeed", ":conformance"];
  /** serverZoom. Serialized as `:serverZoom` */
  get serverZoom() {
    return this._g(":serverZoom");
  }
  set serverZoom(v) {
    this._s(":serverZoom", v);
  }
  /** firstSlideNum. Serialized as `:firstSlideNum` */
  get firstSlideNum() {
    return this._g(":firstSlideNum");
  }
  set firstSlideNum(v) {
    this._s(":firstSlideNum", v);
  }
  /** showSpecialPlsOnTitleSld. Serialized as `:showSpecialPlsOnTitleSld` */
  get showSpecialPlaceholderOnTitleSlide() {
    return this._g(":showSpecialPlsOnTitleSld");
  }
  set showSpecialPlaceholderOnTitleSlide(v) {
    this._s(":showSpecialPlsOnTitleSld", v);
  }
  /** rtl. Serialized as `:rtl` */
  get rightToLeft() {
    return this._g(":rtl");
  }
  set rightToLeft(v) {
    this._s(":rtl", v);
  }
  /** removePersonalInfoOnSave. Serialized as `:removePersonalInfoOnSave` */
  get removePersonalInfoOnSave() {
    return this._g(":removePersonalInfoOnSave");
  }
  set removePersonalInfoOnSave(v) {
    this._s(":removePersonalInfoOnSave", v);
  }
  /** compatMode. Serialized as `:compatMode` */
  get compatibilityMode() {
    return this._g(":compatMode");
  }
  set compatibilityMode(v) {
    this._s(":compatMode", v);
  }
  /** strictFirstAndLastChars. Serialized as `:strictFirstAndLastChars` */
  get strictFirstAndLastChars() {
    return this._g(":strictFirstAndLastChars");
  }
  set strictFirstAndLastChars(v) {
    this._s(":strictFirstAndLastChars", v);
  }
  /** embedTrueTypeFonts. Serialized as `:embedTrueTypeFonts` */
  get embedTrueTypeFonts() {
    return this._g(":embedTrueTypeFonts");
  }
  set embedTrueTypeFonts(v) {
    this._s(":embedTrueTypeFonts", v);
  }
  /** saveSubsetFonts. Serialized as `:saveSubsetFonts` */
  get saveSubsetFonts() {
    return this._g(":saveSubsetFonts");
  }
  set saveSubsetFonts(v) {
    this._s(":saveSubsetFonts", v);
  }
  /** autoCompressPictures. Serialized as `:autoCompressPictures` */
  get autoCompressPictures() {
    return this._g(":autoCompressPictures");
  }
  set autoCompressPictures(v) {
    this._s(":autoCompressPictures", v);
  }
  /** bookmarkIdSeed. Serialized as `:bookmarkIdSeed` */
  get bookmarkIdSeed() {
    return this._g(":bookmarkIdSeed");
  }
  set bookmarkIdSeed(v) {
    this._s(":bookmarkIdSeed", v);
  }
  /** conformance. Serialized as `:conformance` */
  get conformance() {
    return this._g(":conformance");
  }
  set conformance(v) {
    this._s(":conformance", v);
  }
  /** Returns SlideMasterIdList. */
  get slideMasterIdList() {
    return this._f(SlideMasterIdList);
  }
  /** Returns NotesMasterIdList. */
  get notesMasterIdList() {
    return this._f(NotesMasterIdList);
  }
  /** Returns HandoutMasterIdList. */
  get handoutMasterIdList() {
    return this._f(HandoutMasterIdList);
  }
  /** Returns SlideIdList. */
  get slideIdList() {
    return this._f(SlideIdList);
  }
  /** Returns SlideSize. */
  get slideSize() {
    return this._f(SlideSize);
  }
  /** Returns NotesSize. */
  get notesSize() {
    return this._f(NotesSize);
  }
  /** Returns EmbeddedFontList. */
  get embeddedFontList() {
    return this._f(EmbeddedFontList);
  }
  /** Returns CustomShowList. */
  get customShowList() {
    return this._f(CustomShowList);
  }
  /** Returns PhotoAlbum. */
  get photoAlbum() {
    return this._f(PhotoAlbum);
  }
  /** Returns CustomerDataList. */
  get customerDataList() {
    return this._f(CustomerDataList);
  }
  /** Returns Kinsoku. */
  get kinsoku() {
    return this._f(Kinsoku);
  }
  /** Returns DefaultTextStyle. */
  get defaultTextStyle() {
    return this._f(DefaultTextStyle);
  }
  /** Returns ModificationVerifier. */
  get modificationVerifier() {
    return this._f(ModificationVerifier);
  }
  /** Returns PresentationExtensionList. */
  get presentationExtensionList() {
    return this._f(PresentationExtensionList);
  }
}
class OleObject extends OxmlCompositeElement {
  static _Q = "p:oleObj";
  static _A = [":spid", ":name", ":showAsIcon", "r:id", ":imgW", ":imgH", ":progId"];
  /** spid. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** showAsIcon. Serialized as `:showAsIcon` */
  get showAsIcon() {
    return this._g(":showAsIcon");
  }
  set showAsIcon(v) {
    this._s(":showAsIcon", v);
  }
  /** id. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** imgW. Serialized as `:imgW` */
  get imageWidth() {
    return this._g(":imgW");
  }
  set imageWidth(v) {
    this._s(":imgW", v);
  }
  /** imgH. Serialized as `:imgH` */
  get imageHeight() {
    return this._g(":imgH");
  }
  set imageHeight(v) {
    this._s(":imgH", v);
  }
  /** progId. Serialized as `:progId` */
  get progId() {
    return this._g(":progId");
  }
  set progId(v) {
    this._s(":progId", v);
  }
}
class CommentList extends OxmlPartRootElement {
  static _Q = "p:cmLst";
}
class CommentAuthorList extends OxmlPartRootElement {
  static _Q = "p:cmAuthorLst";
}
class BackgroundStyleReference extends OxmlCompositeElement {
  static _Q = "p:bgRef";
  static _A = [":idx"];
  /** Style Matrix Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class BackgroundProperties extends OxmlCompositeElement {
  static _Q = "p:bgPr";
  static _A = [":shadeToTitle"];
  /** Shade to Title. Serialized as `:shadeToTitle` */
  get shadeToTitle() {
    return this._g(":shadeToTitle");
  }
  set shadeToTitle(v) {
    this._s(":shadeToTitle", v);
  }
}
class ColorMapOverride extends OxmlCompositeElement {
  static _Q = "p:clrMapOvr";
  /** Master Color Mapping. */
  get masterColorMapping() {
    return this._f(AMasterColorMapping);
  }
  /** Override Color Mapping. */
  get overrideColorMapping() {
    return this._f(AOverrideColorMapping);
  }
}
class ColorMap extends OxmlCompositeElement {
  static _Q = "p:clrMap";
  static _A = [":bg1", ":tx1", ":bg2", ":tx2", ":accent1", ":accent2", ":accent3", ":accent4", ":accent5", ":accent6", ":hlink", ":folHlink"];
  /** Background 1. Serialized as `:bg1` */
  get background1() {
    return this._g(":bg1");
  }
  set background1(v) {
    this._s(":bg1", v);
  }
  /** Text 1. Serialized as `:tx1` */
  get text1() {
    return this._g(":tx1");
  }
  set text1(v) {
    this._s(":tx1", v);
  }
  /** Background 2. Serialized as `:bg2` */
  get background2() {
    return this._g(":bg2");
  }
  set background2(v) {
    this._s(":bg2", v);
  }
  /** Text 2. Serialized as `:tx2` */
  get text2() {
    return this._g(":tx2");
  }
  set text2(v) {
    this._s(":tx2", v);
  }
  /** Accent 1. Serialized as `:accent1` */
  get accent1() {
    return this._g(":accent1");
  }
  set accent1(v) {
    this._s(":accent1", v);
  }
  /** Accent 2. Serialized as `:accent2` */
  get accent2() {
    return this._g(":accent2");
  }
  set accent2(v) {
    this._s(":accent2", v);
  }
  /** Accent 3. Serialized as `:accent3` */
  get accent3() {
    return this._g(":accent3");
  }
  set accent3(v) {
    this._s(":accent3", v);
  }
  /** Accent 4. Serialized as `:accent4` */
  get accent4() {
    return this._g(":accent4");
  }
  set accent4(v) {
    this._s(":accent4", v);
  }
  /** Accent 5. Serialized as `:accent5` */
  get accent5() {
    return this._g(":accent5");
  }
  set accent5(v) {
    this._s(":accent5", v);
  }
  /** Accent 6. Serialized as `:accent6` */
  get accent6() {
    return this._g(":accent6");
  }
  set accent6(v) {
    this._s(":accent6", v);
  }
  /** Hyperlink. Serialized as `:hlink` */
  get hyperlink() {
    return this._g(":hlink");
  }
  set hyperlink(v) {
    this._s(":hlink", v);
  }
  /** Followed Hyperlink. Serialized as `:folHlink` */
  get followedHyperlink() {
    return this._g(":folHlink");
  }
  set followedHyperlink(v) {
    this._s(":folHlink", v);
  }
  /** Returns AExtensionList. */
  get extensionList() {
    return this._f(AExtensionList);
  }
}
class KioskSlideMode extends OxmlLeafElement {
  static _Q = "p:kiosk";
  static _A = [":restart"];
  /** Restart Show. Serialized as `:restart` */
  get restart() {
    return this._g(":restart");
  }
  set restart(v) {
    this._s(":restart", v);
  }
}
class BrowseSlideMode extends OxmlLeafElement {
  static _Q = "p:browse";
  static _A = [":showScrollbar"];
  /** Show Scroll Bar in Window. Serialized as `:showScrollbar` */
  get showScrollbar() {
    return this._g(":showScrollbar");
  }
  set showScrollbar(v) {
    this._s(":showScrollbar", v);
  }
}
class Extension extends OxmlCompositeElement {
  static _Q = "p:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
class CustomShowReference extends OxmlLeafElement {
  static _Q = "p:custShow";
  static _A = [":id"];
  /** Custom Show Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class IndexRangeType extends OxmlLeafElement {
  static _A = [":st", ":end"];
  /** Start. Serialized as `:st` */
  get start() {
    return this._g(":st");
  }
  set start(v) {
    this._s(":st", v);
  }
  /** End. Serialized as `:end` */
  get end() {
    return this._g(":end");
  }
  set end(v) {
    this._s(":end", v);
  }
}
class ParagraphIndexRange extends IndexRangeType {
  static _Q = "p:pRg";
}
class CharRange extends IndexRangeType {
  static _Q = "p:charRg";
}
class SlideRange extends IndexRangeType {
  static _Q = "p:sldRg";
}
class EmptyType extends OxmlLeafElement {
}
class WedgeTransition extends EmptyType {
  static _Q = "p:wedge";
}
class RandomTransition extends EmptyType {
  static _Q = "p:random";
}
class PlusTransition extends EmptyType {
  static _Q = "p:plus";
}
class NewsflashTransition extends EmptyType {
  static _Q = "p:newsflash";
}
class DiamondTransition extends EmptyType {
  static _Q = "p:diamond";
}
class DissolveTransition extends EmptyType {
  static _Q = "p:dissolve";
}
class CircleTransition extends EmptyType {
  static _Q = "p:circle";
}
class BackgroundAnimation extends EmptyType {
  static _Q = "p:bg";
}
class SlideTarget extends EmptyType {
  static _Q = "p:sldTgt";
}
class BuildAsOne extends EmptyType {
  static _Q = "p:bldAsOne";
}
class EndSoundAction extends EmptyType {
  static _Q = "p:endSnd";
}
class PresenterSlideMode extends EmptyType {
  static _Q = "p:present";
}
class SlideAll extends EmptyType {
  static _Q = "p:sldAll";
}
function initPresentationNamespace() {
  SoundAction._C = {
    "p:stSnd": StartSoundAction,
    "p:endSnd": EndSoundAction
  };
  ZoomTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionInOutDirectionValuesArray)
  };
  WheelTransition._D = {
    ":spokes": new OxmlAttr(":spokes", OxmlType.UInt32Value)
  };
  StripsTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionCornerDirectionValuesArray)
  };
  SplitTransition._D = {
    ":orient": new OxmlAttr(":orient", OxmlType.EnumValue, DirectionValuesArray),
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionInOutDirectionValuesArray)
  };
  SideDirectionTransitionType._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionSlideDirectionValuesArray)
  };
  OptionalBlackTransitionType._D = {
    ":thruBlk": new OxmlAttr(":thruBlk", OxmlType.BooleanValue)
  };
  EightDirectionTransitionType._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.StringValue)
  };
  OrientationTransitionType._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, DirectionValuesArray)
  };
  GraphicElement._C = {
    "a:dgm": ADiagram,
    "a:chart": AChart
  };
  TextElement._C = {
    "p:charRg": CharRange,
    "p:pRg": ParagraphIndexRange
  };
  OleChartElement._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, ChartSubElementValuesArray),
    ":lvl": new OxmlAttr(":lvl", OxmlType.UInt32Value)
  };
  NotesMasterExtensionList._C = {
    "p:ext": NotesMasterExtension
  };
  HandoutMasterExtensionList._C = {
    "p:ext": HandoutMasterExtension
  };
  SlideMasterExtensionList._C = {
    "p:ext": SlideMasterExtension
  };
  TextStyles._C = {
    "p:titleStyle": TitleStyle,
    "p:bodyStyle": BodyStyle,
    "p:otherStyle": OtherStyle,
    "p:extLst": ExtensionList
  };
  SlideLayoutIdList._C = {
    "p:sldLayoutId": SlideLayoutId
  };
  SlideLayoutExtensionList._C = {
    "p:ext": SlideLayoutExtension
  };
  HeaderFooter._C = {
    "p:extLst": ExtensionListWithModification
  };
  HeaderFooter._D = {
    ":sldNum": new OxmlAttr(":sldNum", OxmlType.BooleanValue),
    ":hdr": new OxmlAttr(":hdr", OxmlType.BooleanValue),
    ":ftr": new OxmlAttr(":ftr", OxmlType.BooleanValue),
    ":dt": new OxmlAttr(":dt", OxmlType.BooleanValue)
  };
  PresentationPropertiesExtension._C = {
    "p14:discardImageEditData": P14DiscardImageEditData,
    "p14:defaultImageDpi": P14DefaultImageDpi,
    "a14:m": A14TextMath,
    "p15:chartTrackingRefBased": P15ChartTrackingReferenceBased
  };
  PresentationPropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PresentationPropertiesExtensionList._C = {
    "p:ext": PresentationPropertiesExtension
  };
  ColorMostRecentlyUsed._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ShowProperties._C = {
    "p:present": PresenterSlideMode,
    "p:browse": BrowseSlideMode,
    "p:kiosk": KioskSlideMode,
    "p:sldAll": SlideAll,
    "p:sldRg": SlideRange,
    "p:custShow": CustomShowReference,
    "p:penClr": PenColor,
    "p:extLst": ShowPropertiesExtensionList
  };
  ShowProperties._D = {
    ":loop": new OxmlAttr(":loop", OxmlType.BooleanValue),
    ":showNarration": new OxmlAttr(":showNarration", OxmlType.BooleanValue),
    ":showAnimation": new OxmlAttr(":showAnimation", OxmlType.BooleanValue),
    ":useTimings": new OxmlAttr(":useTimings", OxmlType.BooleanValue)
  };
  PrintingProperties._C = {
    "p:extLst": ExtensionList
  };
  PrintingProperties._D = {
    ":prnWhat": new OxmlAttr(":prnWhat", OxmlType.EnumValue, PrintOutputValuesArray),
    ":clrMode": new OxmlAttr(":clrMode", OxmlType.EnumValue, PrintColorModeValuesArray),
    ":hiddenSlides": new OxmlAttr(":hiddenSlides", OxmlType.BooleanValue),
    ":scaleToFitPaper": new OxmlAttr(":scaleToFitPaper", OxmlType.BooleanValue),
    ":frameSlides": new OxmlAttr(":frameSlides", OxmlType.BooleanValue)
  };
  WebProperties._C = {
    "p:extLst": ExtensionList
  };
  WebProperties._D = {
    ":showAnimation": new OxmlAttr(":showAnimation", OxmlType.BooleanValue),
    ":resizeGraphics": new OxmlAttr(":resizeGraphics", OxmlType.BooleanValue),
    ":allowPng": new OxmlAttr(":allowPng", OxmlType.BooleanValue),
    ":relyOnVml": new OxmlAttr(":relyOnVml", OxmlType.BooleanValue),
    ":organizeInFolders": new OxmlAttr(":organizeInFolders", OxmlType.BooleanValue),
    ":useLongFilenames": new OxmlAttr(":useLongFilenames", OxmlType.BooleanValue),
    ":imgSz": new OxmlAttr(":imgSz", OxmlType.EnumValue, WebScreenSizeValuesArray),
    ":encoding": new OxmlAttr(":encoding", OxmlType.StringValue),
    ":clr": new OxmlAttr(":clr", OxmlType.EnumValue, WebColorValuesArray)
  };
  HtmlPublishProperties._C = {
    "p:sldAll": SlideAll,
    "p:sldRg": SlideRange,
    "p:custShow": CustomShowReference,
    "p:extLst": ExtensionList
  };
  HtmlPublishProperties._D = {
    ":showSpeakerNotes": new OxmlAttr(":showSpeakerNotes", OxmlType.BooleanValue),
    ":pubBrowser": new OxmlAttr(":pubBrowser", OxmlType.EnumValue, HtmlPublishWebBrowserSupportValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  PresentationExtension._C = {
    "p14:sectionPr": P14SectionProperties,
    "p14:sectionLst": P14SectionList,
    "p15:sldGuideLst": P15SlideGuideList,
    "p15:notesGuideLst": P15NotesGuideList
  };
  PresentationExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PresentationExtensionList._C = {
    "p:ext": PresentationExtension
  };
  ModificationVerifier._D = {
    ":cryptProviderType": new OxmlAttr(":cryptProviderType", OxmlType.EnumValue, CryptProviderValuesArray),
    ":cryptAlgorithmClass": new OxmlAttr(":cryptAlgorithmClass", OxmlType.EnumValue, CryptAlgorithmClassValuesArray),
    ":cryptAlgorithmType": new OxmlAttr(":cryptAlgorithmType", OxmlType.EnumValue, CryptAlgorithmValuesArray),
    ":cryptAlgorithmSid": new OxmlAttr(":cryptAlgorithmSid", OxmlType.UInt32Value),
    ":spinCount": new OxmlAttr(":spinCount", OxmlType.UInt32Value),
    ":saltData": new OxmlAttr(":saltData", OxmlType.Base64BinaryValue),
    ":hashData": new OxmlAttr(":hashData", OxmlType.StringValue),
    ":cryptProvider": new OxmlAttr(":cryptProvider", OxmlType.StringValue),
    ":algIdExt": new OxmlAttr(":algIdExt", OxmlType.UInt32Value),
    ":algIdExtSource": new OxmlAttr(":algIdExtSource", OxmlType.StringValue),
    ":cryptProviderTypeExt": new OxmlAttr(":cryptProviderTypeExt", OxmlType.UInt32Value),
    ":cryptProviderTypeExtSource": new OxmlAttr(":cryptProviderTypeExtSource", OxmlType.StringValue),
    ":algorithmName": new OxmlAttr(":algorithmName", OxmlType.StringValue),
    ":hashValue": new OxmlAttr(":hashValue", OxmlType.Base64BinaryValue),
    ":saltValue": new OxmlAttr(":saltValue", OxmlType.Base64BinaryValue),
    ":spinValue": new OxmlAttr(":spinValue", OxmlType.UInt32Value)
  };
  Kinsoku._D = {
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":invalStChars": new OxmlAttr(":invalStChars", OxmlType.StringValue),
    ":invalEndChars": new OxmlAttr(":invalEndChars", OxmlType.StringValue)
  };
  PhotoAlbum._C = {
    "p:extLst": ExtensionList
  };
  PhotoAlbum._D = {
    ":bw": new OxmlAttr(":bw", OxmlType.BooleanValue),
    ":showCaptions": new OxmlAttr(":showCaptions", OxmlType.BooleanValue),
    ":layout": new OxmlAttr(":layout", OxmlType.EnumValue, PhotoAlbumLayoutValuesArray),
    ":frame": new OxmlAttr(":frame", OxmlType.EnumValue, PhotoAlbumFrameShapeValuesArray)
  };
  CustomShowList._C = {
    "p:custShow": CustomShow
  };
  EmbeddedFontList._C = {
    "p:embeddedFont": EmbeddedFont
  };
  SlideSize._D = {
    ":cx": new OxmlAttr(":cx", OxmlType.Int32Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int32Value),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, SlideSizeValuesArray)
  };
  SlideIdList._C = {
    "p:sldId": SlideId
  };
  HandoutMasterIdList._C = {
    "p:handoutMasterId": HandoutMasterId
  };
  NotesMasterIdList._C = {
    "p:notesMasterId": NotesMasterId
  };
  SlideMasterIdList._C = {
    "p:sldMasterId": SlideMasterId
  };
  CommentExtensionList._C = {
    "p:ext": CommentExtension
  };
  CommentAuthorExtensionList._C = {
    "p:ext": CommentAuthorExtension
  };
  TimeListType._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int32Value),
    ":y": new OxmlAttr(":y", OxmlType.Int32Value)
  };
  TimeAnimateValueList._C = {
    "p:tav": TimeAnimateValue
  };
  TimeTypeListType._C = {
    "p:par": ParallelTimeNode,
    "p:seq": SequenceTimeNode,
    "p:excl": ExclusiveTimeNode,
    "p:anim": Animate,
    "p:animClr": AnimateColor,
    "p:animEffect": AnimateEffect,
    "p:animMotion": AnimateMotion,
    "p:animRot": AnimateRotation,
    "p:animScale": AnimateScale,
    "p:cmd": Command,
    "p:set": SetBehavior,
    "p:audio": Audio,
    "p:video": Video
  };
  SubTimeNodeList._C = {
    "p:par": ParallelTimeNode,
    "p:seq": SequenceTimeNode,
    "p:excl": ExclusiveTimeNode,
    "p:anim": Animate,
    "p:animClr": AnimateColor,
    "p:animEffect": AnimateEffect,
    "p:animMotion": AnimateMotion,
    "p:animRot": AnimateRotation,
    "p:animScale": AnimateScale,
    "p:cmd": Command,
    "p:set": SetBehavior,
    "p:audio": Audio,
    "p:video": Video
  };
  ChildTimeNodeList._C = {
    "p:par": ParallelTimeNode,
    "p:seq": SequenceTimeNode,
    "p:excl": ExclusiveTimeNode,
    "p:anim": Animate,
    "p:animClr": AnimateColor,
    "p:animEffect": AnimateEffect,
    "p:animMotion": AnimateMotion,
    "p:animRot": AnimateRotation,
    "p:animScale": AnimateScale,
    "p:cmd": Command,
    "p:set": SetBehavior,
    "p:audio": Audio,
    "p:video": Video
  };
  Iterate._C = {
    "p:tmAbs": TimeAbsolute,
    "p:tmPct": TimePercentage
  };
  Iterate._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, IterateValuesArray),
    ":backwards": new OxmlAttr(":backwards", OxmlType.BooleanValue)
  };
  ApplicationNonVisualDrawingPropertiesExtension._C = {
    "p14:media": P14Media,
    "p14:modId": P14ModificationId
  };
  ApplicationNonVisualDrawingPropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ApplicationNonVisualDrawingPropertiesExtensionList._C = {
    "p:ext": ApplicationNonVisualDrawingPropertiesExtension
  };
  PlaceholderShape._C = {
    "p:extLst": ExtensionListWithModification
  };
  PlaceholderShape._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, PlaceholderValuesArray),
    ":orient": new OxmlAttr(":orient", OxmlType.EnumValue, DirectionValuesArray),
    ":sz": new OxmlAttr(":sz", OxmlType.EnumValue, PlaceholderSizeValuesArray),
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value),
    ":hasCustomPrompt": new OxmlAttr(":hasCustomPrompt", OxmlType.BooleanValue)
  };
  NotesMasterExtension._C = {
    "p15:sldGuideLst": P15SlideGuideList
  };
  NotesMasterExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  HandoutMasterExtension._C = {
    "p15:sldGuideLst": P15SlideGuideList
  };
  HandoutMasterExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SlideMasterExtension._C = {
    "p15:sldGuideLst": P15SlideGuideList
  };
  SlideMasterExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SlideLayoutExtension._C = {
    "p15:sldGuideLst": P15SlideGuideList
  };
  SlideLayoutExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CommentExtension._C = {
    "p15:threadingInfo": P15ThreadingInfo
  };
  CommentExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CommentAuthorExtension._C = {
    "p15:presenceInfo": P15PresenceInfo
  };
  CommentAuthorExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  TimeListSubShapeIdType._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue)
  };
  ShapeTarget._C = {
    "p:bg": BackgroundAnimation,
    "p:subSp": SubShape,
    "p:oleChartEl": OleChartElement,
    "p:txEl": TextElement,
    "p:graphicEl": GraphicElement
  };
  ShapeTarget._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue)
  };
  ShowPropertiesExtensionList._C = {
    "p:ext": ShowPropertiesExtension
  };
  ConnectionShape._C = {
    "p:nvCxnSpPr": NonVisualConnectionShapeProperties,
    "p:spPr": ShapeProperties,
    "p:style": ShapeStyle,
    "p:extLst": ExtensionListWithModification
  };
  GraphicFrame._C = {
    "p:nvGraphicFramePr": NonVisualGraphicFrameProperties,
    "p:xfrm": Transform,
    "a:graphic": AGraphic,
    "p:extLst": ExtensionListWithModification
  };
  Shape._C = {
    "p:nvSpPr": NonVisualShapeProperties,
    "p:spPr": ShapeProperties,
    "p:style": ShapeStyle,
    "p:txBody": TextBody,
    "p:extLst": ExtensionListWithModification
  };
  Shape._D = {
    ":useBgFill": new OxmlAttr(":useBgFill", OxmlType.BooleanValue)
  };
  GroupShapeProperties._C = {
    "a:xfrm": ATransformGroup,
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:grpFill": AGroupFill,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "a:scene3d": AScene3DType,
    "a:extLst": AExtensionList
  };
  GroupShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  NonVisualGroupShapeProperties._C = {
    "p:cNvPr": NonVisualDrawingProperties,
    "p:cNvGrpSpPr": NonVisualGroupShapeDrawingProperties,
    "p:nvPr": ApplicationNonVisualDrawingProperties
  };
  CommonSlideDataExtensionList._C = {
    "p:ext": CommonSlideDataExtension
  };
  ControlList._C = {
    "p:control": Control
  };
  CustomerDataList._C = {
    "p:custData": CustomerData,
    "p:tags": CustomerDataTags
  };
  GroupShapeType._C = {
    "p:nvGrpSpPr": NonVisualGroupShapeProperties,
    "p:grpSpPr": GroupShapeProperties,
    "p:sp": Shape,
    "p:grpSp": GroupShape,
    "p:graphicFrame": GraphicFrame,
    "p:cxnSp": ConnectionShape,
    "p:pic": Picture,
    "p:contentPart": ContentPart,
    "p:extLst": ExtensionListWithModification
  };
  GroupShape._C = {
    "p:nvGrpSpPr": NonVisualGroupShapeProperties,
    "p:grpSpPr": GroupShapeProperties,
    "p:sp": Shape,
    "p:grpSp": GroupShape,
    "p:graphicFrame": GraphicFrame,
    "p:cxnSp": ConnectionShape,
    "p:pic": Picture,
    "p:contentPart": ContentPart,
    "p:extLst": ExtensionListWithModification
  };
  ShapeTree._C = {
    "p:nvGrpSpPr": NonVisualGroupShapeProperties,
    "p:grpSpPr": GroupShapeProperties,
    "p:sp": Shape,
    "p:grpSp": GroupShape,
    "p:graphicFrame": GraphicFrame,
    "p:cxnSp": ConnectionShape,
    "p:pic": Picture,
    "p:contentPart": ContentPart,
    "p:extLst": ExtensionListWithModification
  };
  Background._C = {
    "p:bgPr": BackgroundProperties,
    "p:bgRef": BackgroundStyleReference
  };
  Background._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  SlideExtensionList._C = {
    "p:ext": SlideExtension
  };
  Timing._C = {
    "p:tnLst": TimeNodeList,
    "p:bldLst": BuildList,
    "p:extLst": ExtensionListWithModification
  };
  Transition._C = {
    "p:blinds": BlindsTransition,
    "p:checker": CheckerTransition,
    "p:circle": CircleTransition,
    "p:dissolve": DissolveTransition,
    "p:comb": CombTransition,
    "p:cover": CoverTransition,
    "p:cut": CutTransition,
    "p:diamond": DiamondTransition,
    "p:fade": FadeTransition,
    "p:newsflash": NewsflashTransition,
    "p:plus": PlusTransition,
    "p:pull": PullTransition,
    "p:push": PushTransition,
    "p:random": RandomTransition,
    "p:randomBar": RandomBarTransition,
    "p:split": SplitTransition,
    "p:strips": StripsTransition,
    "p:wedge": WedgeTransition,
    "p:wheel": WheelTransition,
    "p:wipe": WipeTransition,
    "p:zoom": ZoomTransition,
    "p14:flash": P14FlashTransition,
    "p14:vortex": P14VortexTransition,
    "p14:switch": P14SwitchTransition,
    "p14:flip": P14FlipTransition,
    "p14:ripple": P14RippleTransition,
    "p14:glitter": P14GlitterTransition,
    "p14:honeycomb": P14HoneycombTransition,
    "p14:prism": P14PrismTransition,
    "p14:doors": P14DoorsTransition,
    "p14:window": P14WindowTransition,
    "p14:shred": P14ShredTransition,
    "p14:ferris": P14FerrisTransition,
    "p14:flythrough": P14FlythroughTransition,
    "p14:warp": P14WarpTransition,
    "p14:gallery": P14GalleryTransition,
    "p14:conveyor": P14ConveyorTransition,
    "p14:pan": P14PanTransition,
    "p14:reveal": P14RevealTransition,
    "p14:wheelReverse": P14WheelReverseTransition,
    "p15:prstTrans": P15PresetTransition,
    "p:sndAc": SoundAction,
    "p:extLst": ExtensionListWithModification
  };
  Transition._D = {
    ":spd": new OxmlAttr(":spd", OxmlType.EnumValue, TransitionSpeedValuesArray),
    "p14:dur": new OxmlAttr("p14:dur", OxmlType.StringValue),
    ":advClick": new OxmlAttr(":advClick", OxmlType.BooleanValue),
    ":advTm": new OxmlAttr(":advTm", OxmlType.StringValue)
  };
  OleObjectLink._C = {
    "p:extLst": ExtensionList
  };
  OleObjectLink._D = {
    ":updateAutomatic": new OxmlAttr(":updateAutomatic", OxmlType.BooleanValue)
  };
  OleObjectEmbed._C = {
    "p:extLst": ExtensionList
  };
  OleObjectEmbed._D = {
    ":followColorScheme": new OxmlAttr(":followColorScheme", OxmlType.EnumValue, OleObjectFollowColorSchemeValuesArray)
  };
  Picture._C = {
    "p:nvPicPr": NonVisualPictureProperties,
    "p:blipFill": BlipFill,
    "p:spPr": ShapeProperties,
    "p:style": ShapeStyle,
    "p:extLst": ExtensionListWithModification
  };
  ShowPropertiesExtension._C = {
    "p14:browseMode": P14BrowseMode,
    "p14:laserClr": P14LaserColor,
    "p14:showMediaCtrls": P14ShowMediaControls
  };
  ShowPropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CommonSlideDataExtension._C = {
    "p14:creationId": P14CreationId
  };
  CommonSlideDataExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  SlideExtension._C = {
    "p14:laserTraceLst": P14LaserTraceList,
    "p14:showEvtLst": P14ShowEventRecordList,
    "p188:commentRel": P188CommentRelationship
  };
  SlideExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PositiveSize2DType._D = {
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value)
  };
  NotesViewProperties._C = {
    "p:cSldViewPr": CommonSlideViewProperties,
    "p:extLst": ExtensionList
  };
  SorterViewProperties._C = {
    "p:cViewPr": CommonViewProperties,
    "p:extLst": ExtensionList
  };
  SorterViewProperties._D = {
    ":showFormatting": new OxmlAttr(":showFormatting", OxmlType.BooleanValue)
  };
  NotesTextViewProperties._C = {
    "p:cViewPr": CommonViewProperties,
    "p:extLst": ExtensionList
  };
  OutlineViewProperties._C = {
    "p:cViewPr": CommonViewProperties,
    "p:sldLst": OutlineViewSlideList,
    "p:extLst": ExtensionList
  };
  SlideViewProperties._C = {
    "p:cSldViewPr": CommonSlideViewProperties,
    "p:extLst": ExtensionList
  };
  NormalViewProperties._C = {
    "p:restoredLeft": RestoredLeft,
    "p:restoredTop": RestoredTop,
    "p:extLst": ExtensionList
  };
  NormalViewProperties._D = {
    ":showOutlineIcons": new OxmlAttr(":showOutlineIcons", OxmlType.BooleanValue),
    ":snapVertSplitter": new OxmlAttr(":snapVertSplitter", OxmlType.BooleanValue),
    ":vertBarState": new OxmlAttr(":vertBarState", OxmlType.EnumValue, SplitterBarStateValuesArray),
    ":horzBarState": new OxmlAttr(":horzBarState", OxmlType.EnumValue, SplitterBarStateValuesArray),
    ":preferSingleView": new OxmlAttr(":preferSingleView", OxmlType.BooleanValue)
  };
  CommonSlideViewProperties._C = {
    "p:cViewPr": CommonViewProperties,
    "p:guideLst": GuideList
  };
  CommonSlideViewProperties._D = {
    ":snapToGrid": new OxmlAttr(":snapToGrid", OxmlType.BooleanValue),
    ":snapToObjects": new OxmlAttr(":snapToObjects", OxmlType.BooleanValue),
    ":showGuides": new OxmlAttr(":showGuides", OxmlType.BooleanValue)
  };
  GuideList._C = {
    "p:guide": Guide
  };
  Guide._D = {
    ":orient": new OxmlAttr(":orient", OxmlType.EnumValue, DirectionValuesArray),
    ":pos": new OxmlAttr(":pos", OxmlType.Int32Value)
  };
  OutlineViewSlideList._C = {
    "p:sld": OutlineViewSlideListEntry
  };
  OutlineViewSlideListEntry._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":collapse": new OxmlAttr(":collapse", OxmlType.BooleanValue)
  };
  CommonViewProperties._C = {
    "p:scale": ScaleFactor,
    "p:origin": Origin
  };
  CommonViewProperties._D = {
    ":varScale": new OxmlAttr(":varScale", OxmlType.BooleanValue)
  };
  Point2DType._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  ScaleFactor._C = {
    "a:sx": AScaleX,
    "a:sy": AScaleY
  };
  NormalViewPortionType._D = {
    ":sz": new OxmlAttr(":sz", OxmlType.Int32Value),
    ":autoAdjust": new OxmlAttr(":autoAdjust", OxmlType.BooleanValue)
  };
  Tag._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  CommonSlideData._C = {
    "p:bg": Background,
    "p:spTree": ShapeTree,
    "p:custDataLst": CustomerDataList,
    "p:controls": ControlList,
    "p:extLst": CommonSlideDataExtensionList
  };
  CommonSlideData._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  SlideLayoutId._C = {
    "p:extLst": ExtensionList
  };
  SlideLayoutId._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  TextListStyleType._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
  };
  NotesStyle._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
  };
  DefaultTextStyle._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
  };
  OtherStyle._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
  };
  BodyStyle._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
  };
  TitleStyle._C = {
    "a:defPPr": ADefaultParagraphProperties,
    "a:lvl1pPr": ALevel1ParagraphProperties,
    "a:lvl2pPr": ALevel2ParagraphProperties,
    "a:lvl3pPr": ALevel3ParagraphProperties,
    "a:lvl4pPr": ALevel4ParagraphProperties,
    "a:lvl5pPr": ALevel5ParagraphProperties,
    "a:lvl6pPr": ALevel6ParagraphProperties,
    "a:lvl7pPr": ALevel7ParagraphProperties,
    "a:lvl8pPr": ALevel8ParagraphProperties,
    "a:lvl9pPr": ALevel9ParagraphProperties,
    "a:extLst": AExtensionList
  };
  NonVisualGroupShapeDrawingProperties._C = {
    "a:grpSpLocks": AGroupShapeLocks,
    "a:extLst": ANonVisualGroupDrawingShapePropsExtensionList
  };
  Transform._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  NonVisualGraphicFrameProperties._C = {
    "p:cNvPr": NonVisualDrawingProperties,
    "p:cNvGraphicFramePr": NonVisualGraphicFrameDrawingProperties,
    "p:nvPr": ApplicationNonVisualDrawingProperties
  };
  NonVisualGraphicFrameDrawingProperties._C = {
    "a:graphicFrameLocks": AGraphicFrameLocks,
    "a:extLst": AExtensionList
  };
  BlipFill._C = {
    "a:blip": ABlip,
    "a:srcRect": ASourceRectangle,
    "a:tile": ATile,
    "a:stretch": AStretch
  };
  BlipFill._D = {
    ":dpi": new OxmlAttr(":dpi", OxmlType.UInt32Value),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  NonVisualPictureProperties._C = {
    "p:cNvPr": NonVisualDrawingProperties,
    "p:cNvPicPr": NonVisualPictureDrawingProperties,
    "p:nvPr": ApplicationNonVisualDrawingProperties
  };
  NonVisualPictureDrawingProperties._C = {
    "a:picLocks": APictureLocks,
    "a:extLst": ANonVisualPicturePropertiesExtensionList
  };
  NonVisualPictureDrawingProperties._D = {
    ":preferRelativeResize": new OxmlAttr(":preferRelativeResize", OxmlType.BooleanValue)
  };
  NonVisualConnectionShapeProperties._C = {
    "p:cNvPr": NonVisualDrawingProperties,
    "p:cNvCxnSpPr": NonVisualConnectorShapeDrawingProperties,
    "p:nvPr": ApplicationNonVisualDrawingProperties
  };
  NonVisualConnectorShapeDrawingProperties._C = {
    "a:cxnSpLocks": AConnectionShapeLocks,
    "a:stCxn": AStartConnection,
    "a:endCxn": AEndConnection,
    "a:extLst": AExtensionList
  };
  TextBody._C = {
    "a:bodyPr": ABodyProperties,
    "a:lstStyle": AListStyle,
    "a:p": AParagraph
  };
  ShapeStyle._C = {
    "a:lnRef": ALineReference,
    "a:fillRef": AFillReference,
    "a:effectRef": AEffectReference,
    "a:fontRef": AFontReference
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
  NonVisualShapeProperties._C = {
    "p:cNvPr": NonVisualDrawingProperties,
    "p:cNvSpPr": NonVisualShapeDrawingProperties,
    "p:nvPr": ApplicationNonVisualDrawingProperties
  };
  ApplicationNonVisualDrawingProperties._C = {
    "p:ph": PlaceholderShape,
    "a:audioCd": AAudioFromCD,
    "a:wavAudioFile": AWaveAudioFile,
    "a:audioFile": AAudioFromFile,
    "a:videoFile": AVideoFromFile,
    "a:quickTimeFile": AQuickTimeFromFile,
    "p:custDataLst": CustomerDataList,
    "p:extLst": ApplicationNonVisualDrawingPropertiesExtensionList
  };
  ApplicationNonVisualDrawingProperties._D = {
    ":isPhoto": new OxmlAttr(":isPhoto", OxmlType.BooleanValue),
    ":userDrawn": new OxmlAttr(":userDrawn", OxmlType.BooleanValue)
  };
  NonVisualShapeDrawingProperties._C = {
    "a:spLocks": AShapeLocks,
    "a:extLst": AExtensionList
  };
  NonVisualShapeDrawingProperties._D = {
    ":txBox": new OxmlAttr(":txBox", OxmlType.BooleanValue)
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
  CustomShow._C = {
    "p:sldLst": SlideList,
    "p:extLst": ExtensionList
  };
  CustomShow._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value)
  };
  SlideList._C = {
    "p:sld": SlideListEntry
  };
  EmbeddedFont._C = {
    "p:font": Font,
    "p:regular": RegularFont,
    "p:bold": BoldFont,
    "p:italic": ItalicFont,
    "p:boldItalic": BoldItalicFont
  };
  EmbeddedFontDataIdType._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Font._D = {
    ":typeface": new OxmlAttr(":typeface", OxmlType.StringValue),
    ":panose": new OxmlAttr(":panose", OxmlType.HexBinaryValue),
    ":pitchFamily": new OxmlAttr(":pitchFamily", OxmlType.SByteValue),
    ":charset": new OxmlAttr(":charset", OxmlType.SByteValue)
  };
  HandoutMasterId._C = {
    "p:extLst": ExtensionList
  };
  HandoutMasterId._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  NotesMasterId._C = {
    "p:extLst": ExtensionList
  };
  NotesMasterId._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SlideMasterId._C = {
    "p:extLst": ExtensionList
  };
  SlideMasterId._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SlideId._C = {
    "p:extLst": ExtensionList
  };
  SlideId._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Control._C = {
    "p:extLst": ExtensionList,
    "p:pic": Picture
  };
  Control._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":showAsIcon": new OxmlAttr(":showAsIcon", OxmlType.BooleanValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":imgW": new OxmlAttr(":imgW", OxmlType.Int32Value),
    ":imgH": new OxmlAttr(":imgH", OxmlType.Int32Value)
  };
  ExtensionList._C = {
    "p:ext": Extension
  };
  Comment._C = {
    "p:pos": Position,
    "p:text": Text,
    "p:extLst": CommentExtensionList
  };
  Comment._D = {
    ":authorId": new OxmlAttr(":authorId", OxmlType.UInt32Value),
    ":dt": new OxmlAttr(":dt", OxmlType.DateTimeValue),
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  CommentAuthor._C = {
    "p:extLst": CommentAuthorExtensionList
  };
  CommentAuthor._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":initials": new OxmlAttr(":initials", OxmlType.StringValue),
    ":lastIdx": new OxmlAttr(":lastIdx", OxmlType.UInt32Value),
    ":clrIdx": new OxmlAttr(":clrIdx", OxmlType.UInt32Value)
  };
  CustomerDataTags._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  CustomerData._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  SlideListEntry._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  Color3Type._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ToColor._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  FromColor._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ByColor._C = {
    "p:rgb": RgbColor,
    "p:hsl": HslColor
  };
  ExtensionListWithModification._C = {
    "p:ext": Extension
  };
  ExtensionListWithModification._D = {
    ":mod": new OxmlAttr(":mod", OxmlType.BooleanValue)
  };
  BuildList._C = {
    "p:bldP": BuildParagraph,
    "p:bldDgm": BuildDiagram,
    "p:bldOleChart": BuildOleChart,
    "p:bldGraphic": BuildGraphics
  };
  BuildGraphics._C = {
    "p:bldAsOne": BuildAsOne,
    "p:bldSub": BuildSubElement
  };
  BuildGraphics._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue),
    ":grpId": new OxmlAttr(":grpId", OxmlType.UInt32Value),
    ":uiExpand": new OxmlAttr(":uiExpand", OxmlType.BooleanValue)
  };
  BuildOleChart._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue),
    ":grpId": new OxmlAttr(":grpId", OxmlType.UInt32Value),
    ":uiExpand": new OxmlAttr(":uiExpand", OxmlType.BooleanValue),
    ":bld": new OxmlAttr(":bld", OxmlType.EnumValue, OleChartBuildValuesArray),
    ":animBg": new OxmlAttr(":animBg", OxmlType.BooleanValue)
  };
  BuildDiagram._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue),
    ":grpId": new OxmlAttr(":grpId", OxmlType.UInt32Value),
    ":uiExpand": new OxmlAttr(":uiExpand", OxmlType.BooleanValue),
    ":bld": new OxmlAttr(":bld", OxmlType.EnumValue, DiagramBuildValuesArray)
  };
  BuildParagraph._C = {
    "p:tmplLst": TemplateList
  };
  BuildParagraph._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue),
    ":grpId": new OxmlAttr(":grpId", OxmlType.UInt32Value),
    ":uiExpand": new OxmlAttr(":uiExpand", OxmlType.BooleanValue),
    ":build": new OxmlAttr(":build", OxmlType.EnumValue, ParagraphBuildValuesArray),
    ":bldLvl": new OxmlAttr(":bldLvl", OxmlType.UInt32Value),
    ":animBg": new OxmlAttr(":animBg", OxmlType.BooleanValue),
    ":autoUpdateAnimBg": new OxmlAttr(":autoUpdateAnimBg", OxmlType.BooleanValue),
    ":rev": new OxmlAttr(":rev", OxmlType.BooleanValue),
    ":advAuto": new OxmlAttr(":advAuto", OxmlType.StringValue)
  };
  BuildSubElement._C = {
    "a:bldDgm": ABuildDiagram,
    "a:bldChart": ABuildChart
  };
  TemplateList._C = {
    "p:tmpl": Template
  };
  Template._C = {
    "p:tnLst": TimeNodeList
  };
  Template._D = {
    ":lvl": new OxmlAttr(":lvl", OxmlType.UInt32Value)
  };
  TimeNodeList._C = {
    "p:par": ParallelTimeNode
  };
  CommonMediaNode._C = {
    "p:cTn": CommonTimeNode,
    "p:tgtEl": TargetElement
  };
  CommonMediaNode._D = {
    ":vol": new OxmlAttr(":vol", OxmlType.Int32Value),
    ":mute": new OxmlAttr(":mute", OxmlType.BooleanValue),
    ":numSld": new OxmlAttr(":numSld", OxmlType.UInt32Value),
    ":showWhenStopped": new OxmlAttr(":showWhenStopped", OxmlType.BooleanValue)
  };
  TimeListAnimationVariantType._C = {
    "p:boolVal": BooleanVariantValue,
    "p:intVal": IntegerVariantValue,
    "p:fltVal": FloatVariantValue,
    "p:strVal": StringVariantValue,
    "p:clrVal": ColorValue
  };
  VariantValue._C = {
    "p:boolVal": BooleanVariantValue,
    "p:intVal": IntegerVariantValue,
    "p:fltVal": FloatVariantValue,
    "p:strVal": StringVariantValue,
    "p:clrVal": ColorValue
  };
  ToVariantValue._C = {
    "p:boolVal": BooleanVariantValue,
    "p:intVal": IntegerVariantValue,
    "p:fltVal": FloatVariantValue,
    "p:strVal": StringVariantValue,
    "p:clrVal": ColorValue
  };
  Progress._C = {
    "p:fltVal": FloatVariantValue
  };
  CommonBehavior._C = {
    "p:cTn": CommonTimeNode,
    "p:tgtEl": TargetElement,
    "p:attrNameLst": AttributeNameList
  };
  CommonBehavior._D = {
    ":additive": new OxmlAttr(":additive", OxmlType.EnumValue, BehaviorAdditiveValuesArray),
    ":accumulate": new OxmlAttr(":accumulate", OxmlType.EnumValue, BehaviorAccumulateValuesArray),
    ":xfrmType": new OxmlAttr(":xfrmType", OxmlType.EnumValue, BehaviorTransformValuesArray),
    ":from": new OxmlAttr(":from", OxmlType.StringValue),
    ":to": new OxmlAttr(":to", OxmlType.StringValue),
    ":by": new OxmlAttr(":by", OxmlType.StringValue),
    ":rctx": new OxmlAttr(":rctx", OxmlType.StringValue),
    ":override": new OxmlAttr(":override", OxmlType.EnumValue, BehaviorOverrideValuesArray)
  };
  HslColor._D = {
    ":h": new OxmlAttr(":h", OxmlType.Int32Value),
    ":s": new OxmlAttr(":s", OxmlType.Int32Value),
    ":l": new OxmlAttr(":l", OxmlType.Int32Value)
  };
  RgbColor._D = {
    ":r": new OxmlAttr(":r", OxmlType.Int32Value),
    ":g": new OxmlAttr(":g", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.Int32Value)
  };
  TimeAnimateValue._C = {
    "p:val": VariantValue
  };
  TimeAnimateValue._D = {
    ":tm": new OxmlAttr(":tm", OxmlType.StringValue),
    ":fmla": new OxmlAttr(":fmla", OxmlType.StringValue)
  };
  ColorType._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  PenColor._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  ColorValue._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  StringVariantValue._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  FloatVariantValue._D = {
    ":val": new OxmlAttr(":val", OxmlType.SingleValue)
  };
  IntegerVariantValue._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  BooleanVariantValue._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  AttributeNameList._C = {
    "p:attrName": AttributeName
  };
  TimeListTimeConditionalListType._C = {
    "p:cond": Condition
  };
  EndConditionList._C = {
    "p:cond": Condition
  };
  StartConditionList._C = {
    "p:cond": Condition
  };
  NextConditionList._C = {
    "p:cond": Condition
  };
  PreviousConditionList._C = {
    "p:cond": Condition
  };
  CommonTimeNode._C = {
    "p:stCondLst": StartConditionList,
    "p:endCondLst": EndConditionList,
    "p:endSync": EndSync,
    "p:iterate": Iterate,
    "p:childTnLst": ChildTimeNodeList,
    "p:subTnLst": SubTimeNodeList
  };
  CommonTimeNode._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":presetID": new OxmlAttr(":presetID", OxmlType.Int32Value),
    ":presetClass": new OxmlAttr(":presetClass", OxmlType.EnumValue, TimeNodePresetClassValuesArray),
    ":presetSubtype": new OxmlAttr(":presetSubtype", OxmlType.Int32Value),
    ":dur": new OxmlAttr(":dur", OxmlType.StringValue),
    ":repeatCount": new OxmlAttr(":repeatCount", OxmlType.StringValue),
    ":repeatDur": new OxmlAttr(":repeatDur", OxmlType.StringValue),
    ":spd": new OxmlAttr(":spd", OxmlType.Int32Value),
    ":accel": new OxmlAttr(":accel", OxmlType.Int32Value),
    ":decel": new OxmlAttr(":decel", OxmlType.Int32Value),
    ":autoRev": new OxmlAttr(":autoRev", OxmlType.BooleanValue),
    ":restart": new OxmlAttr(":restart", OxmlType.EnumValue, TimeNodeRestartValuesArray),
    ":fill": new OxmlAttr(":fill", OxmlType.EnumValue, TimeNodeFillValuesArray),
    ":syncBehavior": new OxmlAttr(":syncBehavior", OxmlType.EnumValue, TimeNodeSyncValuesArray),
    ":tmFilter": new OxmlAttr(":tmFilter", OxmlType.StringValue),
    ":evtFilter": new OxmlAttr(":evtFilter", OxmlType.StringValue),
    ":display": new OxmlAttr(":display", OxmlType.BooleanValue),
    ":masterRel": new OxmlAttr(":masterRel", OxmlType.EnumValue, TimeNodeMasterRelationValuesArray),
    ":bldLvl": new OxmlAttr(":bldLvl", OxmlType.Int32Value),
    ":grpId": new OxmlAttr(":grpId", OxmlType.UInt32Value),
    ":afterEffect": new OxmlAttr(":afterEffect", OxmlType.BooleanValue),
    ":nodeType": new OxmlAttr(":nodeType", OxmlType.EnumValue, TimeNodeValuesArray),
    ":nodePh": new OxmlAttr(":nodePh", OxmlType.BooleanValue),
    "p14:presetBounceEnd": new OxmlAttr("p14:presetBounceEnd", OxmlType.Int32Value)
  };
  Video._C = {
    "p:cMediaNode": CommonMediaNode
  };
  Video._D = {
    ":fullScrn": new OxmlAttr(":fullScrn", OxmlType.BooleanValue)
  };
  Audio._C = {
    "p:cMediaNode": CommonMediaNode
  };
  Audio._D = {
    ":isNarration": new OxmlAttr(":isNarration", OxmlType.BooleanValue)
  };
  SetBehavior._C = {
    "p:cBhvr": CommonBehavior,
    "p:to": ToVariantValue
  };
  Command._C = {
    "p:cBhvr": CommonBehavior
  };
  Command._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, CommandValuesArray),
    ":cmd": new OxmlAttr(":cmd", OxmlType.StringValue)
  };
  AnimateScale._C = {
    "p:cBhvr": CommonBehavior,
    "p:by": ByPosition,
    "p:from": FromPosition,
    "p:to": ToPosition
  };
  AnimateScale._D = {
    ":zoomContents": new OxmlAttr(":zoomContents", OxmlType.BooleanValue),
    "p14:bounceEnd": new OxmlAttr("p14:bounceEnd", OxmlType.Int32Value)
  };
  AnimateRotation._C = {
    "p:cBhvr": CommonBehavior
  };
  AnimateRotation._D = {
    ":by": new OxmlAttr(":by", OxmlType.Int32Value),
    ":from": new OxmlAttr(":from", OxmlType.Int32Value),
    ":to": new OxmlAttr(":to", OxmlType.Int32Value),
    "p14:bounceEnd": new OxmlAttr("p14:bounceEnd", OxmlType.Int32Value)
  };
  AnimateMotion._C = {
    "p:cBhvr": CommonBehavior,
    "p:by": ByPosition,
    "p:from": FromPosition,
    "p:to": ToPosition,
    "p:rCtr": RotationCenter
  };
  AnimateMotion._D = {
    ":origin": new OxmlAttr(":origin", OxmlType.EnumValue, AnimateMotionBehaviorOriginValuesArray),
    ":path": new OxmlAttr(":path", OxmlType.StringValue),
    ":pathEditMode": new OxmlAttr(":pathEditMode", OxmlType.EnumValue, AnimateMotionPathEditModeValuesArray),
    ":rAng": new OxmlAttr(":rAng", OxmlType.Int32Value),
    ":ptsTypes": new OxmlAttr(":ptsTypes", OxmlType.StringValue),
    "p14:bounceEnd": new OxmlAttr("p14:bounceEnd", OxmlType.Int32Value)
  };
  AnimateEffect._C = {
    "p:cBhvr": CommonBehavior,
    "p:progress": Progress
  };
  AnimateEffect._D = {
    ":transition": new OxmlAttr(":transition", OxmlType.EnumValue, AnimateEffectTransitionValuesArray),
    ":filter": new OxmlAttr(":filter", OxmlType.StringValue),
    ":prLst": new OxmlAttr(":prLst", OxmlType.StringValue)
  };
  AnimateColor._C = {
    "p:cBhvr": CommonBehavior,
    "p:by": ByColor,
    "p:from": FromColor,
    "p:to": ToColor
  };
  AnimateColor._D = {
    ":clrSpc": new OxmlAttr(":clrSpc", OxmlType.EnumValue, AnimateColorSpaceValuesArray),
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, AnimateColorDirectionValuesArray)
  };
  Animate._C = {
    "p:cBhvr": CommonBehavior,
    "p:tavLst": TimeAnimateValueList
  };
  Animate._D = {
    ":by": new OxmlAttr(":by", OxmlType.StringValue),
    ":from": new OxmlAttr(":from", OxmlType.StringValue),
    ":to": new OxmlAttr(":to", OxmlType.StringValue),
    ":calcmode": new OxmlAttr(":calcmode", OxmlType.EnumValue, AnimateBehaviorCalculateModeValuesArray),
    ":valueType": new OxmlAttr(":valueType", OxmlType.EnumValue, AnimateBehaviorValuesArray),
    "p14:bounceEnd": new OxmlAttr("p14:bounceEnd", OxmlType.Int32Value)
  };
  ExclusiveTimeNode._C = {
    "p:cTn": CommonTimeNode
  };
  SequenceTimeNode._C = {
    "p:cTn": CommonTimeNode,
    "p:prevCondLst": PreviousConditionList,
    "p:nextCondLst": NextConditionList
  };
  SequenceTimeNode._D = {
    ":concurrent": new OxmlAttr(":concurrent", OxmlType.BooleanValue),
    ":prevAc": new OxmlAttr(":prevAc", OxmlType.EnumValue, PreviousActionValuesArray),
    ":nextAc": new OxmlAttr(":nextAc", OxmlType.EnumValue, NextActionValuesArray)
  };
  ParallelTimeNode._C = {
    "p:cTn": CommonTimeNode
  };
  TimeListConditionalType._C = {
    "p:tgtEl": TargetElement,
    "p:tn": TimeNode,
    "p:rtn": RuntimeNodeTrigger
  };
  TimeListConditionalType._D = {
    ":evt": new OxmlAttr(":evt", OxmlType.EnumValue, TriggerEventValuesArray),
    ":delay": new OxmlAttr(":delay", OxmlType.StringValue)
  };
  EndSync._C = {
    "p:tgtEl": TargetElement,
    "p:tn": TimeNode,
    "p:rtn": RuntimeNodeTrigger
  };
  Condition._C = {
    "p:tgtEl": TargetElement,
    "p:tn": TimeNode,
    "p:rtn": RuntimeNodeTrigger
  };
  RuntimeNodeTrigger._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, TriggerRuntimeNodeValuesArray)
  };
  TimeNode._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  TargetElement._C = {
    "p:sldTgt": SlideTarget,
    "p:sndTgt": SoundTarget,
    "p:spTgt": ShapeTarget,
    "p:inkTgt": InkTarget,
    "p14:bmkTgt": P14BookmarkTarget
  };
  TimePercentage._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  TimeAbsolute._D = {
    ":val": new OxmlAttr(":val", OxmlType.StringValue)
  };
  StartSoundAction._C = {
    "p:snd": Sound
  };
  StartSoundAction._D = {
    ":loop": new OxmlAttr(":loop", OxmlType.BooleanValue)
  };
  EmbeddedWavAudioFileType._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":builtIn": new OxmlAttr(":builtIn", OxmlType.BooleanValue)
  };
  ContentPart._C = {
    "p14:nvContentPartPr": P14NonVisualContentPartProperties,
    "p14:xfrm": P14Transform2D,
    "p14:extLst": P14ExtensionListModify
  };
  ContentPart._D = {
    "p14:bwMode": new OxmlAttr("p14:bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue)
  };
  ViewProperties._C = {
    "p:normalViewPr": NormalViewProperties,
    "p:slideViewPr": SlideViewProperties,
    "p:outlineViewPr": OutlineViewProperties,
    "p:notesTextViewPr": NotesTextViewProperties,
    "p:sorterViewPr": SorterViewProperties,
    "p:notesViewPr": NotesViewProperties,
    "p:gridSpacing": GridSpacing,
    "p:extLst": ExtensionList
  };
  ViewProperties._D = {
    ":lastView": new OxmlAttr(":lastView", OxmlType.EnumValue, ViewValuesArray),
    ":showComments": new OxmlAttr(":showComments", OxmlType.BooleanValue)
  };
  TagList._C = {
    "p:tag": Tag
  };
  SlideSyncProperties._C = {
    "p:extLst": ExtensionList
  };
  SlideSyncProperties._D = {
    ":serverSldId": new OxmlAttr(":serverSldId", OxmlType.StringValue),
    ":serverSldModifiedTime": new OxmlAttr(":serverSldModifiedTime", OxmlType.DateTimeValue),
    ":clientInsertedTime": new OxmlAttr(":clientInsertedTime", OxmlType.DateTimeValue)
  };
  NotesSlide._C = {
    "p:cSld": CommonSlideData,
    "p:clrMapOvr": ColorMapOverride,
    "p:extLst": ExtensionListWithModification
  };
  NotesSlide._D = {
    ":showMasterSp": new OxmlAttr(":showMasterSp", OxmlType.BooleanValue),
    ":showMasterPhAnim": new OxmlAttr(":showMasterPhAnim", OxmlType.BooleanValue)
  };
  NotesMaster._C = {
    "p:cSld": CommonSlideData,
    "p:clrMap": ColorMap,
    "p:hf": HeaderFooter,
    "p:notesStyle": NotesStyle,
    "p:extLst": NotesMasterExtensionList
  };
  HandoutMaster._C = {
    "p:cSld": CommonSlideData,
    "p:clrMap": ColorMap,
    "p:hf": HeaderFooter,
    "p:extLst": HandoutMasterExtensionList
  };
  SlideMaster._C = {
    "p:cSld": CommonSlideData,
    "p:clrMap": ColorMap,
    "p:sldLayoutIdLst": SlideLayoutIdList,
    "p:transition": Transition,
    "p:timing": Timing,
    "p:hf": HeaderFooter,
    "p:txStyles": TextStyles,
    "p:extLst": SlideMasterExtensionList
  };
  SlideMaster._D = {
    ":preserve": new OxmlAttr(":preserve", OxmlType.BooleanValue)
  };
  SlideLayout._C = {
    "p:cSld": CommonSlideData,
    "p:clrMapOvr": ColorMapOverride,
    "p:transition": Transition,
    "p:timing": Timing,
    "p:hf": HeaderFooter,
    "p:extLst": SlideLayoutExtensionList
  };
  SlideLayout._D = {
    ":showMasterSp": new OxmlAttr(":showMasterSp", OxmlType.BooleanValue),
    ":showMasterPhAnim": new OxmlAttr(":showMasterPhAnim", OxmlType.BooleanValue),
    ":matchingName": new OxmlAttr(":matchingName", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, SlideLayoutValuesArray),
    ":preserve": new OxmlAttr(":preserve", OxmlType.BooleanValue),
    ":userDrawn": new OxmlAttr(":userDrawn", OxmlType.BooleanValue)
  };
  Slide._C = {
    "p:cSld": CommonSlideData,
    "p:clrMapOvr": ColorMapOverride,
    "p:transition": Transition,
    "p:timing": Timing,
    "p:extLst": SlideExtensionList
  };
  Slide._D = {
    ":showMasterSp": new OxmlAttr(":showMasterSp", OxmlType.BooleanValue),
    ":showMasterPhAnim": new OxmlAttr(":showMasterPhAnim", OxmlType.BooleanValue),
    ":show": new OxmlAttr(":show", OxmlType.BooleanValue)
  };
  PresentationProperties._C = {
    "p:htmlPubPr": HtmlPublishProperties,
    "p:webPr": WebProperties,
    "p:prnPr": PrintingProperties,
    "p:showPr": ShowProperties,
    "p:clrMru": ColorMostRecentlyUsed,
    "p:extLst": PresentationPropertiesExtensionList
  };
  Presentation._C = {
    "p:sldMasterIdLst": SlideMasterIdList,
    "p:notesMasterIdLst": NotesMasterIdList,
    "p:handoutMasterIdLst": HandoutMasterIdList,
    "p:sldIdLst": SlideIdList,
    "p:sldSz": SlideSize,
    "p:notesSz": NotesSize,
    "p:embeddedFontLst": EmbeddedFontList,
    "p:custShowLst": CustomShowList,
    "p:photoAlbum": PhotoAlbum,
    "p:custDataLst": CustomerDataList,
    "p:kinsoku": Kinsoku,
    "p:defaultTextStyle": DefaultTextStyle,
    "p:modifyVerifier": ModificationVerifier,
    "p:extLst": PresentationExtensionList
  };
  Presentation._D = {
    ":serverZoom": new OxmlAttr(":serverZoom", OxmlType.Int32Value),
    ":firstSlideNum": new OxmlAttr(":firstSlideNum", OxmlType.Int32Value),
    ":showSpecialPlsOnTitleSld": new OxmlAttr(":showSpecialPlsOnTitleSld", OxmlType.BooleanValue),
    ":rtl": new OxmlAttr(":rtl", OxmlType.BooleanValue),
    ":removePersonalInfoOnSave": new OxmlAttr(":removePersonalInfoOnSave", OxmlType.BooleanValue),
    ":compatMode": new OxmlAttr(":compatMode", OxmlType.BooleanValue),
    ":strictFirstAndLastChars": new OxmlAttr(":strictFirstAndLastChars", OxmlType.BooleanValue),
    ":embedTrueTypeFonts": new OxmlAttr(":embedTrueTypeFonts", OxmlType.BooleanValue),
    ":saveSubsetFonts": new OxmlAttr(":saveSubsetFonts", OxmlType.BooleanValue),
    ":autoCompressPictures": new OxmlAttr(":autoCompressPictures", OxmlType.BooleanValue),
    ":bookmarkIdSeed": new OxmlAttr(":bookmarkIdSeed", OxmlType.UInt32Value),
    ":conformance": new OxmlAttr(":conformance", OxmlType.EnumValue, ConformanceClassValuesArray)
  };
  OleObject._C = {
    "p:embed": OleObjectEmbed,
    "p:link": OleObjectLink,
    "p:pic": Picture
  };
  OleObject._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":showAsIcon": new OxmlAttr(":showAsIcon", OxmlType.BooleanValue),
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":imgW": new OxmlAttr(":imgW", OxmlType.Int32Value),
    ":imgH": new OxmlAttr(":imgH", OxmlType.Int32Value),
    ":progId": new OxmlAttr(":progId", OxmlType.StringValue)
  };
  CommentList._C = {
    "p:cm": Comment
  };
  CommentAuthorList._C = {
    "p:cmAuthor": CommentAuthor
  };
  BackgroundStyleReference._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  BackgroundStyleReference._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  BackgroundProperties._C = {
    "a:noFill": ANoFill,
    "a:solidFill": ASolidFill,
    "a:gradFill": AGradientFill,
    "a:blipFill": ABlipFill,
    "a:pattFill": APatternFill,
    "a:effectLst": AEffectList,
    "a:effectDag": AEffectDag,
    "p:extLst": ExtensionList
  };
  BackgroundProperties._D = {
    ":shadeToTitle": new OxmlAttr(":shadeToTitle", OxmlType.BooleanValue)
  };
  ColorMapOverride._C = {
    "a:masterClrMapping": AMasterColorMapping,
    "a:overrideClrMapping": AOverrideColorMapping
  };
  ColorMap._C = {
    "a:extLst": AExtensionList
  };
  ColorMap._D = {
    ":bg1": new OxmlAttr(":bg1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":tx1": new OxmlAttr(":tx1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":bg2": new OxmlAttr(":bg2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":tx2": new OxmlAttr(":tx2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent1": new OxmlAttr(":accent1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent2": new OxmlAttr(":accent2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent3": new OxmlAttr(":accent3", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent4": new OxmlAttr(":accent4", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent5": new OxmlAttr(":accent5", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent6": new OxmlAttr(":accent6", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":hlink": new OxmlAttr(":hlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":folHlink": new OxmlAttr(":folHlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray)
  };
  KioskSlideMode._D = {
    ":restart": new OxmlAttr(":restart", OxmlType.UInt32Value)
  };
  BrowseSlideMode._D = {
    ":showScrollbar": new OxmlAttr(":showScrollbar", OxmlType.BooleanValue)
  };
  Extension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  CustomShowReference._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value)
  };
  IndexRangeType._D = {
    ":st": new OxmlAttr(":st", OxmlType.UInt32Value),
    ":end": new OxmlAttr(":end", OxmlType.UInt32Value)
  };
  return {
    prefix: "p",
    xmlns: "http://schemas.openxmlformats.org/presentationml/2006/main"
  };
}
export {
  Animate,
  AnimateBehaviorCalculateModeValues,
  AnimateBehaviorCalculateModeValuesArray,
  AnimateBehaviorValues,
  AnimateBehaviorValuesArray,
  AnimateColor,
  AnimateColorDirectionValues,
  AnimateColorDirectionValuesArray,
  AnimateColorSpaceValues,
  AnimateColorSpaceValuesArray,
  AnimateEffect,
  AnimateEffectTransitionValues,
  AnimateEffectTransitionValuesArray,
  AnimateMotion,
  AnimateMotionBehaviorOriginValues,
  AnimateMotionBehaviorOriginValuesArray,
  AnimateMotionPathEditModeValues,
  AnimateMotionPathEditModeValuesArray,
  AnimateRotation,
  AnimateScale,
  ApplicationNonVisualDrawingProperties,
  ApplicationNonVisualDrawingPropertiesExtension,
  ApplicationNonVisualDrawingPropertiesExtensionList,
  AttributeName,
  AttributeNameList,
  Audio,
  Background,
  BackgroundAnimation,
  BackgroundProperties,
  BackgroundStyleReference,
  BehaviorAccumulateValues,
  BehaviorAccumulateValuesArray,
  BehaviorAdditiveValues,
  BehaviorAdditiveValuesArray,
  BehaviorOverrideValues,
  BehaviorOverrideValuesArray,
  BehaviorTransformValues,
  BehaviorTransformValuesArray,
  BlindsTransition,
  BlipFill,
  BodyStyle,
  BoldFont,
  BoldItalicFont,
  BooleanVariantValue,
  BrowseSlideMode,
  BuildAsOne,
  BuildDiagram,
  BuildGraphics,
  BuildList,
  BuildOleChart,
  BuildParagraph,
  BuildSubElement,
  ByColor,
  ByPosition,
  CharRange,
  ChartSubElementValues,
  ChartSubElementValuesArray,
  CheckerTransition,
  ChildTimeNodeList,
  CircleTransition,
  Color3Type,
  ColorMap,
  ColorMapOverride,
  ColorMostRecentlyUsed,
  ColorType,
  ColorValue,
  CombTransition,
  Command,
  CommandValues,
  CommandValuesArray,
  Comment,
  CommentAuthor,
  CommentAuthorExtension,
  CommentAuthorExtensionList,
  CommentAuthorList,
  CommentExtension,
  CommentExtensionList,
  CommentList,
  CommonBehavior,
  CommonMediaNode,
  CommonSlideData,
  CommonSlideDataExtension,
  CommonSlideDataExtensionList,
  CommonSlideViewProperties,
  CommonTimeNode,
  CommonViewProperties,
  Condition,
  ConformanceClassValues,
  ConformanceClassValuesArray,
  ConnectionShape,
  ContentPart,
  Control,
  ControlList,
  CoverTransition,
  CryptAlgorithmClassValues,
  CryptAlgorithmClassValuesArray,
  CryptAlgorithmValues,
  CryptAlgorithmValuesArray,
  CryptProviderValues,
  CryptProviderValuesArray,
  CustomShow,
  CustomShowList,
  CustomShowReference,
  CustomerData,
  CustomerDataList,
  CustomerDataTags,
  CutTransition,
  DefaultTextStyle,
  DiagramBuildValues,
  DiagramBuildValuesArray,
  DiamondTransition,
  DirectionValues,
  DirectionValuesArray,
  DissolveTransition,
  EightDirectionTransitionType,
  EmbeddedFont,
  EmbeddedFontDataIdType,
  EmbeddedFontList,
  EmbeddedWavAudioFileType,
  EmptyType,
  EndConditionList,
  EndSoundAction,
  EndSync,
  ExclusiveTimeNode,
  Extension,
  ExtensionList,
  ExtensionListWithModification,
  FadeTransition,
  FloatVariantValue,
  Font,
  FromColor,
  FromPosition,
  GraphicElement,
  GraphicFrame,
  GridSpacing,
  GroupShape,
  GroupShapeProperties,
  GroupShapeType,
  Guide,
  GuideList,
  HandoutMaster,
  HandoutMasterExtension,
  HandoutMasterExtensionList,
  HandoutMasterId,
  HandoutMasterIdList,
  HeaderFooter,
  HslColor,
  HtmlPublishProperties,
  HtmlPublishWebBrowserSupportValues,
  HtmlPublishWebBrowserSupportValuesArray,
  IndefiniteTimeDeclarationValues,
  IndefiniteTimeDeclarationValuesArray,
  IndexRangeType,
  InkTarget,
  IntegerVariantValue,
  ItalicFont,
  Iterate,
  IterateValues,
  IterateValuesArray,
  Kinsoku,
  KioskSlideMode,
  ModificationVerifier,
  NewsflashTransition,
  NextActionValues,
  NextActionValuesArray,
  NextConditionList,
  NonVisualConnectionShapeProperties,
  NonVisualConnectorShapeDrawingProperties,
  NonVisualDrawingProperties,
  NonVisualGraphicFrameDrawingProperties,
  NonVisualGraphicFrameProperties,
  NonVisualGroupShapeDrawingProperties,
  NonVisualGroupShapeProperties,
  NonVisualPictureDrawingProperties,
  NonVisualPictureProperties,
  NonVisualShapeDrawingProperties,
  NonVisualShapeProperties,
  NormalViewPortionType,
  NormalViewProperties,
  NotesMaster,
  NotesMasterExtension,
  NotesMasterExtensionList,
  NotesMasterId,
  NotesMasterIdList,
  NotesSize,
  NotesSlide,
  NotesStyle,
  NotesTextViewProperties,
  NotesViewProperties,
  OleChartBuildValues,
  OleChartBuildValuesArray,
  OleChartElement,
  OleObject,
  OleObjectEmbed,
  OleObjectFollowColorSchemeValues,
  OleObjectFollowColorSchemeValuesArray,
  OleObjectLink,
  OptionalBlackTransitionType,
  OrientationTransitionType,
  Origin,
  OtherStyle,
  OutlineViewProperties,
  OutlineViewSlideList,
  OutlineViewSlideListEntry,
  ParagraphBuildValues,
  ParagraphBuildValuesArray,
  ParagraphIndexRange,
  ParallelTimeNode,
  PenColor,
  PhotoAlbum,
  PhotoAlbumFrameShapeValues,
  PhotoAlbumFrameShapeValuesArray,
  PhotoAlbumLayoutValues,
  PhotoAlbumLayoutValuesArray,
  Picture,
  PlaceholderShape,
  PlaceholderSizeValues,
  PlaceholderSizeValuesArray,
  PlaceholderValues,
  PlaceholderValuesArray,
  PlusTransition,
  Point2DType,
  Position,
  PositiveSize2DType,
  Presentation,
  PresentationExtension,
  PresentationExtensionList,
  PresentationProperties,
  PresentationPropertiesExtension,
  PresentationPropertiesExtensionList,
  PresenterSlideMode,
  PreviousActionValues,
  PreviousActionValuesArray,
  PreviousConditionList,
  PrintColorModeValues,
  PrintColorModeValuesArray,
  PrintOutputValues,
  PrintOutputValuesArray,
  PrintingProperties,
  Progress,
  PullTransition,
  PushTransition,
  RandomBarTransition,
  RandomTransition,
  RegularFont,
  RestoredLeft,
  RestoredTop,
  RgbColor,
  RotationCenter,
  RuntimeNodeTrigger,
  ScaleFactor,
  SequenceTimeNode,
  SetBehavior,
  Shape,
  ShapeProperties,
  ShapeStyle,
  ShapeTarget,
  ShapeTree,
  ShowProperties,
  ShowPropertiesExtension,
  ShowPropertiesExtensionList,
  SideDirectionTransitionType,
  Slide,
  SlideAll,
  SlideExtension,
  SlideExtensionList,
  SlideId,
  SlideIdList,
  SlideLayout,
  SlideLayoutExtension,
  SlideLayoutExtensionList,
  SlideLayoutId,
  SlideLayoutIdList,
  SlideLayoutValues,
  SlideLayoutValuesArray,
  SlideList,
  SlideListEntry,
  SlideMaster,
  SlideMasterExtension,
  SlideMasterExtensionList,
  SlideMasterId,
  SlideMasterIdList,
  SlideRange,
  SlideSize,
  SlideSizeValues,
  SlideSizeValuesArray,
  SlideSyncProperties,
  SlideTarget,
  SlideViewProperties,
  SorterViewProperties,
  Sound,
  SoundAction,
  SoundTarget,
  SplitTransition,
  SplitterBarStateValues,
  SplitterBarStateValuesArray,
  StartConditionList,
  StartSoundAction,
  StringVariantValue,
  StripsTransition,
  SubShape,
  SubTimeNodeList,
  Tag,
  TagList,
  TargetElement,
  Template,
  TemplateList,
  Text,
  TextBody,
  TextElement,
  TextListStyleType,
  TextStyles,
  TimeAbsolute,
  TimeAnimateValue,
  TimeAnimateValueList,
  TimeListAnimationVariantType,
  TimeListConditionalType,
  TimeListSubShapeIdType,
  TimeListTimeConditionalListType,
  TimeListType,
  TimeNode,
  TimeNodeFillValues,
  TimeNodeFillValuesArray,
  TimeNodeList,
  TimeNodeMasterRelationValues,
  TimeNodeMasterRelationValuesArray,
  TimeNodePresetClassValues,
  TimeNodePresetClassValuesArray,
  TimeNodeRestartValues,
  TimeNodeRestartValuesArray,
  TimeNodeSyncValues,
  TimeNodeSyncValuesArray,
  TimeNodeValues,
  TimeNodeValuesArray,
  TimePercentage,
  TimeTypeListType,
  Timing,
  TitleStyle,
  ToColor,
  ToPosition,
  ToVariantValue,
  Transform,
  Transition,
  TransitionCornerDirectionValues,
  TransitionCornerDirectionValuesArray,
  TransitionInOutDirectionValues,
  TransitionInOutDirectionValuesArray,
  TransitionSlideDirectionValues,
  TransitionSlideDirectionValuesArray,
  TransitionSpeedValues,
  TransitionSpeedValuesArray,
  TriggerEventValues,
  TriggerEventValuesArray,
  TriggerRuntimeNodeValues,
  TriggerRuntimeNodeValuesArray,
  VariantValue,
  Video,
  ViewProperties,
  ViewValues,
  ViewValuesArray,
  WebColorValues,
  WebColorValuesArray,
  WebProperties,
  WebScreenSizeValues,
  WebScreenSizeValuesArray,
  WedgeTransition,
  WheelTransition,
  WipeTransition,
  ZoomTransition,
  initPresentationNamespace
};
