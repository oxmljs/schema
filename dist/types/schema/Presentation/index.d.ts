import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { StringValue } from '../../framework/types/StringValue';
import { Base64BinaryValue } from '../../framework/types/Base64BinaryValue';
import { Int32Value } from '../../framework/types/Int32Value';
import { Int64Value } from '../../framework/types/Int64Value';
import { HexBinaryValue } from '../../framework/types/HexBinaryValue';
import { SByteValue } from '../../framework/types/SByteValue';
import { DateTimeValue } from '../../framework/types/DateTimeValue';
import { SingleValue } from '../../framework/types/SingleValue';
import { BlackWhiteModeValues } from '../Drawing';
import { ColorSchemeIndexValues } from '../Drawing';
import { Diagram as ADiagram } from '../Drawing';
import { Chart as AChart } from '../Drawing';
import { DiscardImageEditData as P14DiscardImageEditData } from '../Office2010/PowerPoint';
import { DefaultImageDpi as P14DefaultImageDpi } from '../Office2010/PowerPoint';
import { TextMath as A14TextMath } from '../Office2010/Drawing';
import { ChartTrackingReferenceBased as P15ChartTrackingReferenceBased } from '../Office2013/PowerPoint';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../Drawing';
import { HslColor as AHslColor } from '../Drawing';
import { SystemColor as ASystemColor } from '../Drawing';
import { SchemeColor as ASchemeColor } from '../Drawing';
import { PresetColor as APresetColor } from '../Drawing';
import { SectionProperties as P14SectionProperties } from '../Office2010/PowerPoint';
import { SectionList as P14SectionList } from '../Office2010/PowerPoint';
import { SlideGuideList as P15SlideGuideList } from '../Office2013/PowerPoint';
import { NotesGuideList as P15NotesGuideList } from '../Office2013/PowerPoint';
import { Media as P14Media } from '../Office2010/PowerPoint';
import { ModificationId as P14ModificationId } from '../Office2010/PowerPoint';
import { ThreadingInfo as P15ThreadingInfo } from '../Office2013/PowerPoint';
import { PresenceInfo as P15PresenceInfo } from '../Office2013/PowerPoint';
import { Graphic as AGraphic } from '../Drawing';
import { TransformGroup as ATransformGroup } from '../Drawing';
import { NoFill as ANoFill } from '../Drawing';
import { SolidFill as ASolidFill } from '../Drawing';
import { GradientFill as AGradientFill } from '../Drawing';
import { BlipFill as ABlipFill } from '../Drawing';
import { PatternFill as APatternFill } from '../Drawing';
import { GroupFill as AGroupFill } from '../Drawing';
import { EffectList as AEffectList } from '../Drawing';
import { EffectDag as AEffectDag } from '../Drawing';
import { Scene3DType as AScene3DType } from '../Drawing';
import { ExtensionList as AExtensionList } from '../Drawing';
import { FlashTransition as P14FlashTransition } from '../Office2010/PowerPoint';
import { VortexTransition as P14VortexTransition } from '../Office2010/PowerPoint';
import { SwitchTransition as P14SwitchTransition } from '../Office2010/PowerPoint';
import { FlipTransition as P14FlipTransition } from '../Office2010/PowerPoint';
import { RippleTransition as P14RippleTransition } from '../Office2010/PowerPoint';
import { GlitterTransition as P14GlitterTransition } from '../Office2010/PowerPoint';
import { HoneycombTransition as P14HoneycombTransition } from '../Office2010/PowerPoint';
import { PrismTransition as P14PrismTransition } from '../Office2010/PowerPoint';
import { DoorsTransition as P14DoorsTransition } from '../Office2010/PowerPoint';
import { WindowTransition as P14WindowTransition } from '../Office2010/PowerPoint';
import { ShredTransition as P14ShredTransition } from '../Office2010/PowerPoint';
import { FerrisTransition as P14FerrisTransition } from '../Office2010/PowerPoint';
import { FlythroughTransition as P14FlythroughTransition } from '../Office2010/PowerPoint';
import { WarpTransition as P14WarpTransition } from '../Office2010/PowerPoint';
import { GalleryTransition as P14GalleryTransition } from '../Office2010/PowerPoint';
import { ConveyorTransition as P14ConveyorTransition } from '../Office2010/PowerPoint';
import { PanTransition as P14PanTransition } from '../Office2010/PowerPoint';
import { RevealTransition as P14RevealTransition } from '../Office2010/PowerPoint';
import { WheelReverseTransition as P14WheelReverseTransition } from '../Office2010/PowerPoint';
import { PresetTransition as P15PresetTransition } from '../Office2013/PowerPoint';
import { BrowseMode as P14BrowseMode } from '../Office2010/PowerPoint';
import { LaserColor as P14LaserColor } from '../Office2010/PowerPoint';
import { ShowMediaControls as P14ShowMediaControls } from '../Office2010/PowerPoint';
import { CreationId as P14CreationId } from '../Office2010/PowerPoint';
import { LaserTraceList as P14LaserTraceList } from '../Office2010/PowerPoint';
import { ShowEventRecordList as P14ShowEventRecordList } from '../Office2010/PowerPoint';
import { CommentRelationship as P188CommentRelationship } from '../Office2021/PowerPoint/Comment';
import { ScaleX as AScaleX } from '../Drawing';
import { ScaleY as AScaleY } from '../Drawing';
import { DefaultParagraphProperties as ADefaultParagraphProperties } from '../Drawing';
import { Level1ParagraphProperties as ALevel1ParagraphProperties } from '../Drawing';
import { Level2ParagraphProperties as ALevel2ParagraphProperties } from '../Drawing';
import { Level3ParagraphProperties as ALevel3ParagraphProperties } from '../Drawing';
import { Level4ParagraphProperties as ALevel4ParagraphProperties } from '../Drawing';
import { Level5ParagraphProperties as ALevel5ParagraphProperties } from '../Drawing';
import { Level6ParagraphProperties as ALevel6ParagraphProperties } from '../Drawing';
import { Level7ParagraphProperties as ALevel7ParagraphProperties } from '../Drawing';
import { Level8ParagraphProperties as ALevel8ParagraphProperties } from '../Drawing';
import { Level9ParagraphProperties as ALevel9ParagraphProperties } from '../Drawing';
import { GroupShapeLocks as AGroupShapeLocks } from '../Drawing';
import { NonVisualGroupDrawingShapePropsExtensionList as ANonVisualGroupDrawingShapePropsExtensionList } from '../Drawing';
import { Offset as AOffset } from '../Drawing';
import { Extents as AExtents } from '../Drawing';
import { GraphicFrameLocks as AGraphicFrameLocks } from '../Drawing';
import { Blip as ABlip } from '../Drawing';
import { SourceRectangle as ASourceRectangle } from '../Drawing';
import { Tile as ATile } from '../Drawing';
import { Stretch as AStretch } from '../Drawing';
import { PictureLocks as APictureLocks } from '../Drawing';
import { NonVisualPicturePropertiesExtensionList as ANonVisualPicturePropertiesExtensionList } from '../Drawing';
import { ConnectionShapeLocks as AConnectionShapeLocks } from '../Drawing';
import { StartConnection as AStartConnection } from '../Drawing';
import { EndConnection as AEndConnection } from '../Drawing';
import { BodyProperties as ABodyProperties } from '../Drawing';
import { ListStyle as AListStyle } from '../Drawing';
import { Paragraph as AParagraph } from '../Drawing';
import { LineReference as ALineReference } from '../Drawing';
import { FillReference as AFillReference } from '../Drawing';
import { EffectReference as AEffectReference } from '../Drawing';
import { FontReference as AFontReference } from '../Drawing';
import { Transform2D as ATransform2D } from '../Drawing';
import { CustomGeometry as ACustomGeometry } from '../Drawing';
import { PresetGeometry as APresetGeometry } from '../Drawing';
import { Outline as AOutline } from '../Drawing';
import { Shape3DType as AShape3DType } from '../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../Drawing';
import { AudioFromCD as AAudioFromCD } from '../Drawing';
import { WaveAudioFile as AWaveAudioFile } from '../Drawing';
import { AudioFromFile as AAudioFromFile } from '../Drawing';
import { VideoFromFile as AVideoFromFile } from '../Drawing';
import { QuickTimeFromFile as AQuickTimeFromFile } from '../Drawing';
import { ShapeLocks as AShapeLocks } from '../Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../Drawing';
import { BuildDiagram as ABuildDiagram } from '../Drawing';
import { BuildChart as ABuildChart } from '../Drawing';
import { BookmarkTarget as P14BookmarkTarget } from '../Office2010/PowerPoint';
import { NonVisualContentPartProperties as P14NonVisualContentPartProperties } from '../Office2010/PowerPoint';
import { Transform2D as P14Transform2D } from '../Office2010/PowerPoint';
import { ExtensionListModify as P14ExtensionListModify } from '../Office2010/PowerPoint';
import { MasterColorMapping as AMasterColorMapping } from '../Drawing';
import { OverrideColorMapping as AOverrideColorMapping } from '../Drawing';
export declare enum TransitionSlideDirectionValues {
    /** Transition Slide Direction Enum ( Left ). Serialized value: `l` */
    Left = "l",
    /** Transition Slide Direction Enum ( Up ). Serialized value: `u` */
    Up = "u",
    /** Transition Slide Direction ( Right ). Serialized value: `r` */
    Right = "r",
    /** Transition Slide Direction Enum ( Down ). Serialized value: `d` */
    Down = "d"
}
export declare const TransitionSlideDirectionValuesArray: readonly [TransitionSlideDirectionValues.Left, TransitionSlideDirectionValues.Up, TransitionSlideDirectionValues.Right, TransitionSlideDirectionValues.Down];
export declare enum TransitionCornerDirectionValues {
    /** Transition Corner Direction Enum ( Left-Up ). Serialized value: `lu` */
    LeftUp = "lu",
    /** Transition Corner Direction Enum ( Right-Up ). Serialized value: `ru` */
    RightUp = "ru",
    /** Transition Corner Direction Enum ( Left-Down ). Serialized value: `ld` */
    LeftDown = "ld",
    /** Transition Corner Direction Enum ( Right-Down ). Serialized value: `rd` */
    RightDown = "rd"
}
export declare const TransitionCornerDirectionValuesArray: readonly [TransitionCornerDirectionValues.LeftUp, TransitionCornerDirectionValues.RightUp, TransitionCornerDirectionValues.LeftDown, TransitionCornerDirectionValues.RightDown];
export declare enum TransitionInOutDirectionValues {
    /** Transition In/Out Direction Enum ( Out ). Serialized value: `out` */
    Out = "out",
    /** Transition In/Out Direction Enum ( In ). Serialized value: `in` */
    In = "in"
}
export declare const TransitionInOutDirectionValuesArray: readonly [TransitionInOutDirectionValues.Out, TransitionInOutDirectionValues.In];
export declare enum TransitionSpeedValues {
    /** low. Serialized value: `slow` */
    Slow = "slow",
    /** Medium. Serialized value: `med` */
    Medium = "med",
    /** Fast. Serialized value: `fast` */
    Fast = "fast"
}
export declare const TransitionSpeedValuesArray: readonly [TransitionSpeedValues.Slow, TransitionSpeedValues.Medium, TransitionSpeedValues.Fast];
export declare enum IndefiniteTimeDeclarationValues {
    /** Indefinite Type Enum. Serialized value: `indefinite` */
    Indefinite = "indefinite"
}
export declare const IndefiniteTimeDeclarationValuesArray: readonly [IndefiniteTimeDeclarationValues];
export declare enum IterateValues {
    /** Element. Serialized value: `el` */
    Element = "el",
    /** Word. Serialized value: `wd` */
    Word = "wd",
    /** Letter. Serialized value: `lt` */
    Letter = "lt"
}
export declare const IterateValuesArray: readonly [IterateValues.Element, IterateValues.Word, IterateValues.Letter];
export declare enum ChartSubElementValues {
    /** Chart Build Element Type Enum ( Grid Legend ). Serialized value: `gridLegend` */
    GridLegend = "gridLegend",
    /** Chart Build Element Type Enum ( Series ). Serialized value: `series` */
    Series = "series",
    /** Chart Build Element Type Enum ( Category ). Serialized value: `category` */
    Category = "category",
    /** Chart Build Element Type Enum ( Point in Series ). Serialized value: `ptInSeries` */
    PointInSeries = "ptInSeries",
    /** Chart Build Element Type Enum ( Point in Cat ). Serialized value: `ptInCategory` */
    PointInCategory = "ptInCategory"
}
export declare const ChartSubElementValuesArray: readonly [ChartSubElementValues.GridLegend, ChartSubElementValues.Series, ChartSubElementValues.Category, ChartSubElementValues.PointInSeries, ChartSubElementValues.PointInCategory];
export declare enum TriggerRuntimeNodeValues {
    /** Trigger RunTime Node ( First ). Serialized value: `first` */
    First = "first",
    /** Trigger RunTime Node ( Last ). Serialized value: `last` */
    Last = "last",
    /** Trigger RunTime Node Enum ( All ). Serialized value: `all` */
    All = "all"
}
export declare const TriggerRuntimeNodeValuesArray: readonly [TriggerRuntimeNodeValues.First, TriggerRuntimeNodeValues.Last, TriggerRuntimeNodeValues.All];
export declare enum TimeNodePresetClassValues {
    /** Preset Type Enum ( Entrance ). Serialized value: `entr` */
    Entrance = "entr",
    /** Exit. Serialized value: `exit` */
    Exit = "exit",
    /** Preset Type Enum ( Emphasis ). Serialized value: `emph` */
    Emphasis = "emph",
    /** Preset Type Enum ( Path ). Serialized value: `path` */
    Path = "path",
    /** Preset Type Enum ( Verb ). Serialized value: `verb` */
    Verb = "verb",
    /** Preset Type Enum ( Media Call ). Serialized value: `mediacall` */
    MediaCall = "mediacall"
}
export declare const TimeNodePresetClassValuesArray: readonly [TimeNodePresetClassValues.Entrance, TimeNodePresetClassValues.Exit, TimeNodePresetClassValues.Emphasis, TimeNodePresetClassValues.Path, TimeNodePresetClassValues.Verb, TimeNodePresetClassValues.MediaCall];
export declare enum TimeNodeRestartValues {
    /** Restart Enum ( Always ). Serialized value: `always` */
    Always = "always",
    /** Restart Enum ( When Not Active ). Serialized value: `whenNotActive` */
    WhenNotActive = "whenNotActive",
    /** Restart Enum ( Never ). Serialized value: `never` */
    Never = "never"
}
export declare const TimeNodeRestartValuesArray: readonly [TimeNodeRestartValues.Always, TimeNodeRestartValues.WhenNotActive, TimeNodeRestartValues.Never];
export declare enum TimeNodeFillValues {
    /** Remove. Serialized value: `remove` */
    Remove = "remove",
    /** Freeze. Serialized value: `freeze` */
    Freeze = "freeze",
    /** TimeNode Fill Type Enum ( Hold ). Serialized value: `hold` */
    Hold = "hold",
    /** Transition. Serialized value: `transition` */
    Transition = "transition"
}
export declare const TimeNodeFillValuesArray: readonly [TimeNodeFillValues.Remove, TimeNodeFillValues.Freeze, TimeNodeFillValues.Hold, TimeNodeFillValues.Transition];
export declare enum TimeNodeValues {
    /** Node Type Enum ( Click Effect ). Serialized value: `clickEffect` */
    ClickEffect = "clickEffect",
    /** Node Type Enum ( With Effect ). Serialized value: `withEffect` */
    WithEffect = "withEffect",
    /** Node Type Enum ( After Effect ). Serialized value: `afterEffect` */
    AfterEffect = "afterEffect",
    /** Node Type Enum ( Main Sequence ). Serialized value: `mainSeq` */
    MainSequence = "mainSeq",
    /** Node Type Enum ( Interactive Sequence ). Serialized value: `interactiveSeq` */
    InteractiveSequence = "interactiveSeq",
    /** Node Type Enum ( Click Paragraph ). Serialized value: `clickPar` */
    ClickParagraph = "clickPar",
    /** Node Type Enum ( With Group ). Serialized value: `withGroup` */
    WithGroup = "withGroup",
    /** Node Type Enum ( After Group ). Serialized value: `afterGroup` */
    AfterGroup = "afterGroup",
    /** Node Type Enum ( Timing Root ). Serialized value: `tmRoot` */
    TmingRoot = "tmRoot"
}
export declare const TimeNodeValuesArray: readonly [TimeNodeValues.ClickEffect, TimeNodeValues.WithEffect, TimeNodeValues.AfterEffect, TimeNodeValues.MainSequence, TimeNodeValues.InteractiveSequence, TimeNodeValues.ClickParagraph, TimeNodeValues.WithGroup, TimeNodeValues.AfterGroup, TimeNodeValues.TmingRoot];
export declare enum NextActionValues {
    /** Next Action Type Enum ( None ). Serialized value: `none` */
    None = "none",
    /** Next Action Type Enum ( Seek ). Serialized value: `seek` */
    Seek = "seek"
}
export declare const NextActionValuesArray: readonly [NextActionValues.None, NextActionValues.Seek];
export declare enum PreviousActionValues {
    /** Previous Action Type Enum ( None ). Serialized value: `none` */
    None = "none",
    /** Previous Action Type Enum ( Skip Timed ). Serialized value: `skipTimed` */
    SkipTimed = "skipTimed"
}
export declare const PreviousActionValuesArray: readonly [PreviousActionValues.None, PreviousActionValues.SkipTimed];
export declare enum BehaviorAdditiveValues {
    /** Additive Enum ( Base ). Serialized value: `base` */
    Base = "base",
    /** Additive Enum ( Sum ). Serialized value: `sum` */
    Sum = "sum",
    /** Additive Enum ( Replace ). Serialized value: `repl` */
    Replace = "repl",
    /** Additive Enum ( Multiply ). Serialized value: `mult` */
    Multiply = "mult",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const BehaviorAdditiveValuesArray: readonly [BehaviorAdditiveValues.Base, BehaviorAdditiveValues.Sum, BehaviorAdditiveValues.Replace, BehaviorAdditiveValues.Multiply, BehaviorAdditiveValues.None];
export declare enum BehaviorAccumulateValues {
    /** Accumulate Enum ( None ). Serialized value: `none` */
    None = "none",
    /** Accumulate Enum ( Always ). Serialized value: `always` */
    Always = "always"
}
export declare const BehaviorAccumulateValuesArray: readonly [BehaviorAccumulateValues.None, BehaviorAccumulateValues.Always];
export declare enum BehaviorTransformValues {
    /** Point. Serialized value: `pt` */
    Point = "pt",
    /** Image. Serialized value: `img` */
    Image = "img"
}
export declare const BehaviorTransformValuesArray: readonly [BehaviorTransformValues.Point, BehaviorTransformValues.Image];
export declare enum BehaviorOverrideValues {
    /** Override Enum ( Normal ). Serialized value: `normal` */
    Normal = "normal",
    /** Override Enum ( Child Style ). Serialized value: `childStyle` */
    ChildStyle = "childStyle"
}
export declare const BehaviorOverrideValuesArray: readonly [BehaviorOverrideValues.Normal, BehaviorOverrideValues.ChildStyle];
export declare enum AnimateBehaviorCalculateModeValues {
    /** Calc Mode Enum ( Discrete ). Serialized value: `discrete` */
    Discrete = "discrete",
    /** Calc Mode Enum ( Linear ). Serialized value: `lin` */
    Linear = "lin",
    /** Calc Mode Enum ( Formula ). Serialized value: `fmla` */
    Formula = "fmla"
}
export declare const AnimateBehaviorCalculateModeValuesArray: readonly [AnimateBehaviorCalculateModeValues.Discrete, AnimateBehaviorCalculateModeValues.Linear, AnimateBehaviorCalculateModeValues.Formula];
export declare enum AnimateBehaviorValues {
    /** Value Type Enum ( String ). Serialized value: `str` */
    String = "str",
    /** Value Type Enum ( Number ). Serialized value: `num` */
    Number = "num",
    /** Value Type Enum ( Color ). Serialized value: `clr` */
    Color = "clr"
}
export declare const AnimateBehaviorValuesArray: readonly [AnimateBehaviorValues.String, AnimateBehaviorValues.Number, AnimateBehaviorValues.Color];
export declare enum AnimateColorSpaceValues {
    /** Color Space Enum ( RGB ). Serialized value: `rgb` */
    Rgb = "rgb",
    /** Color Space Enum ( HSL ). Serialized value: `hsl` */
    Hsl = "hsl"
}
export declare const AnimateColorSpaceValuesArray: readonly [AnimateColorSpaceValues.Rgb, AnimateColorSpaceValues.Hsl];
export declare enum AnimateColorDirectionValues {
    /** Direction Enum ( Clockwise ). Serialized value: `cw` */
    Clockwise = "cw",
    /** Counter-Clockwise. Serialized value: `ccw` */
    CounterClockwise = "ccw"
}
export declare const AnimateColorDirectionValuesArray: readonly [AnimateColorDirectionValues.Clockwise, AnimateColorDirectionValues.CounterClockwise];
export declare enum AnimateEffectTransitionValues {
    /** Transition Enum ( In ). Serialized value: `in` */
    In = "in",
    /** Transition Enum ( Out ). Serialized value: `out` */
    Out = "out",
    /** Transition Enum ( None ). Serialized value: `none` */
    None = "none"
}
export declare const AnimateEffectTransitionValuesArray: readonly [AnimateEffectTransitionValues.In, AnimateEffectTransitionValues.Out, AnimateEffectTransitionValues.None];
export declare enum AnimateMotionBehaviorOriginValues {
    /** Origin Enum ( Parent ). Serialized value: `parent` */
    Parent = "parent",
    /** Origin Enum ( Layout ). Serialized value: `layout` */
    Layout = "layout"
}
export declare const AnimateMotionBehaviorOriginValuesArray: readonly [AnimateMotionBehaviorOriginValues.Parent, AnimateMotionBehaviorOriginValues.Layout];
export declare enum AnimateMotionPathEditModeValues {
    /** Path Edit Mode Enum ( Relative ). Serialized value: `relative` */
    Relative = "relative",
    /** Path Edit Mode Enum ( Fixed ). Serialized value: `fixed` */
    Fixed = "fixed"
}
export declare const AnimateMotionPathEditModeValuesArray: readonly [AnimateMotionPathEditModeValues.Relative, AnimateMotionPathEditModeValues.Fixed];
export declare enum CommandValues {
    /** Command Type Enum ( Event ). Serialized value: `evt` */
    Event = "evt",
    /** Command Type Enum ( Call ). Serialized value: `call` */
    Call = "call",
    /** Command Type Enum ( Verb ). Serialized value: `verb` */
    Verb = "verb"
}
export declare const CommandValuesArray: readonly [CommandValues.Event, CommandValues.Call, CommandValues.Verb];
export declare enum ParagraphBuildValues {
    /** All At Once. Serialized value: `allAtOnce` */
    AllAtOnce = "allAtOnce",
    /** Paragraph. Serialized value: `p` */
    Paragraph = "p",
    /** Custom. Serialized value: `cust` */
    Custom = "cust",
    /** Whole. Serialized value: `whole` */
    Whole = "whole"
}
export declare const ParagraphBuildValuesArray: readonly [ParagraphBuildValues.AllAtOnce, ParagraphBuildValues.Paragraph, ParagraphBuildValues.Custom, ParagraphBuildValues.Whole];
export declare enum DiagramBuildValues {
    /** Diagram Build Type Enum ( Whole ). Serialized value: `whole` */
    Whole = "whole",
    /** Diagram Build Type Enum ( Depth By Node ). Serialized value: `depthByNode` */
    DepthByNode = "depthByNode",
    /** Diagram Build Type Enum ( Depth By Branch ). Serialized value: `depthByBranch` */
    DepthByBranch = "depthByBranch",
    /** Diagram Build Type Enum ( Breadth By Node ). Serialized value: `breadthByNode` */
    BreadthByNode = "breadthByNode",
    /** Diagram Build Type Enum ( Breadth By Level ). Serialized value: `breadthByLvl` */
    BreadthByLevel = "breadthByLvl",
    /** Diagram Build Type Enum ( Clockwise ). Serialized value: `cw` */
    Clockwise = "cw",
    /** Diagram Build Type Enum ( Clockwise-In ). Serialized value: `cwIn` */
    ClockwiseIn = "cwIn",
    /** Diagram Build Type Enum ( Clockwise-Out ). Serialized value: `cwOut` */
    ClockwiseOut = "cwOut",
    /** Diagram Build Type Enum ( Counter-Clockwise ). Serialized value: `ccw` */
    CounterClockwise = "ccw",
    /** Diagram Build Type Enum ( Counter-Clockwise-In ). Serialized value: `ccwIn` */
    CounterClockwiseIn = "ccwIn",
    /** Diagram Build Type Enum ( Counter-Clockwise-Out ). Serialized value: `ccwOut` */
    CounterClockwiseOut = "ccwOut",
    /** Diagram Build Type Enum ( In-By-Ring ). Serialized value: `inByRing` */
    InByRing = "inByRing",
    /** Diagram Build Type Enum ( Out-By-Ring ). Serialized value: `outByRing` */
    OutByRing = "outByRing",
    /** Diagram Build Type Enum ( Up ). Serialized value: `up` */
    Up = "up",
    /** Diagram Build Type Enum ( Down ). Serialized value: `down` */
    Down = "down",
    /** Diagram Build Type Enum ( All At Once ). Serialized value: `allAtOnce` */
    AllAtOnce = "allAtOnce",
    /** Diagram Build Type Enum ( Custom ). Serialized value: `cust` */
    Custom = "cust"
}
export declare const DiagramBuildValuesArray: readonly [DiagramBuildValues.Whole, DiagramBuildValues.DepthByNode, DiagramBuildValues.DepthByBranch, DiagramBuildValues.BreadthByNode, DiagramBuildValues.BreadthByLevel, DiagramBuildValues.Clockwise, DiagramBuildValues.ClockwiseIn, DiagramBuildValues.ClockwiseOut, DiagramBuildValues.CounterClockwise, DiagramBuildValues.CounterClockwiseIn, DiagramBuildValues.CounterClockwiseOut, DiagramBuildValues.InByRing, DiagramBuildValues.OutByRing, DiagramBuildValues.Up, DiagramBuildValues.Down, DiagramBuildValues.AllAtOnce, DiagramBuildValues.Custom];
export declare enum OleChartBuildValues {
    /** Chart Build Type Enum ( All At Once ). Serialized value: `allAtOnce` */
    AllAtOnce = "allAtOnce",
    /** Chart Build Type Enum ( Series ). Serialized value: `series` */
    Series = "series",
    /** Chart Build Type Enum ( Category ). Serialized value: `category` */
    Category = "category",
    /** Chart Build Type Enum ( Series Element ). Serialized value: `seriesEl` */
    SeriesElement = "seriesEl",
    /** Chart Build Type Enum ( Category Element ). Serialized value: `categoryEl` */
    CategoryElement = "categoryEl"
}
export declare const OleChartBuildValuesArray: readonly [OleChartBuildValues.AllAtOnce, OleChartBuildValues.Series, OleChartBuildValues.Category, OleChartBuildValues.SeriesElement, OleChartBuildValues.CategoryElement];
export declare enum TimeNodeMasterRelationValues {
    /** TimeNode Master Relation Enum ( Same Click ). Serialized value: `sameClick` */
    SameClick = "sameClick",
    /** TimeNode Master Relation Enum ( Next Click ). Serialized value: `nextClick` */
    NextClick = "nextClick"
}
export declare const TimeNodeMasterRelationValuesArray: readonly [TimeNodeMasterRelationValues.SameClick, TimeNodeMasterRelationValues.NextClick];
export declare enum TimeNodeSyncValues {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** TimeNode Sync Enum ( Can Slip ). Serialized value: `canSlip` */
    CanSlip = "canSlip",
    /** TimeNode Sync Enum ( Locked ). Serialized value: `locked` */
    Locked = "locked"
}
export declare const TimeNodeSyncValuesArray: readonly [TimeNodeSyncValues.None, TimeNodeSyncValues.CanSlip, TimeNodeSyncValues.Locked];
export declare enum DirectionValues {
    /** Horizontal. Serialized value: `horz` */
    Horizontal = "horz",
    /** Vertical. Serialized value: `vert` */
    Vertical = "vert"
}
export declare const DirectionValuesArray: readonly [DirectionValues.Horizontal, DirectionValues.Vertical];
export declare enum OleObjectFollowColorSchemeValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Full. Serialized value: `full` */
    Full = "full",
    /** Text and Background. Serialized value: `textAndBackground` */
    TextAndBackground = "textAndBackground"
}
export declare const OleObjectFollowColorSchemeValuesArray: readonly [OleObjectFollowColorSchemeValues.None, OleObjectFollowColorSchemeValues.Full, OleObjectFollowColorSchemeValues.TextAndBackground];
export declare enum PhotoAlbumLayoutValues {
    /** Fit Photos to Slide. Serialized value: `fitToSlide` */
    FitToSlide = "fitToSlide",
    /** 1 Photo per Slide. Serialized value: `1pic` */
    OnePic = "1pic",
    /** 2 Photos per Slide. Serialized value: `2pic` */
    TwoPic = "2pic",
    /** 4 Photos per Slide. Serialized value: `4pic` */
    FourPic = "4pic",
    /** 1 Photo per Slide with Titles. Serialized value: `1picTitle` */
    OnePicWithTitle = "1picTitle",
    /** 2 Photos per Slide with Titles. Serialized value: `2picTitle` */
    TwoPicWithTitle = "2picTitle",
    /** 4 Photos per Slide with Titles. Serialized value: `4picTitle` */
    FourPicWithTitle = "4picTitle"
}
export declare const PhotoAlbumLayoutValuesArray: readonly [PhotoAlbumLayoutValues.FitToSlide, PhotoAlbumLayoutValues.OnePic, PhotoAlbumLayoutValues.TwoPic, PhotoAlbumLayoutValues.FourPic, PhotoAlbumLayoutValues.OnePicWithTitle, PhotoAlbumLayoutValues.TwoPicWithTitle, PhotoAlbumLayoutValues.FourPicWithTitle];
export declare enum PhotoAlbumFrameShapeValues {
    /** Rectangle Photo Frame. Serialized value: `frameStyle1` */
    FrameStyle1 = "frameStyle1",
    /** Rounded Rectangle Photo Frame. Serialized value: `frameStyle2` */
    FrameStyle2 = "frameStyle2",
    /** Simple White Photo Frame. Serialized value: `frameStyle3` */
    FrameStyle3 = "frameStyle3",
    /** Simple Black Photo Frame. Serialized value: `frameStyle4` */
    FrameStyle4 = "frameStyle4",
    /** Compound Black Photo Frame. Serialized value: `frameStyle5` */
    FrameStyle5 = "frameStyle5",
    /** Center Shadow Photo Frame. Serialized value: `frameStyle6` */
    FrameStyle6 = "frameStyle6",
    /** Soft Edge Photo Frame. Serialized value: `frameStyle7` */
    FrameStyle7 = "frameStyle7"
}
export declare const PhotoAlbumFrameShapeValuesArray: readonly [PhotoAlbumFrameShapeValues.FrameStyle1, PhotoAlbumFrameShapeValues.FrameStyle2, PhotoAlbumFrameShapeValues.FrameStyle3, PhotoAlbumFrameShapeValues.FrameStyle4, PhotoAlbumFrameShapeValues.FrameStyle5, PhotoAlbumFrameShapeValues.FrameStyle6, PhotoAlbumFrameShapeValues.FrameStyle7];
export declare enum SlideSizeValues {
    /** Screen 4x3. Serialized value: `screen4x3` */
    Screen4x3 = "screen4x3",
    /** Letter. Serialized value: `letter` */
    Letter = "letter",
    /** A4. Serialized value: `A4` */
    A4 = "A4",
    /** 35mm Film. Serialized value: `35mm` */
    Film35mm = "35mm",
    /** Overhead. Serialized value: `overhead` */
    Overhead = "overhead",
    /** Banner. Serialized value: `banner` */
    Banner = "banner",
    /** Custom. Serialized value: `custom` */
    Custom = "custom",
    /** Ledger. Serialized value: `ledger` */
    Ledger = "ledger",
    /** A3. Serialized value: `A3` */
    A3 = "A3",
    /** B4ISO. Serialized value: `B4ISO` */
    B4ISO = "B4ISO",
    /** B5ISO. Serialized value: `B5ISO` */
    B5ISO = "B5ISO",
    /** B4JIS. Serialized value: `B4JIS` */
    B4JIS = "B4JIS",
    /** B5JIS. Serialized value: `B5JIS` */
    B5JIS = "B5JIS",
    /** Hagaki Card. Serialized value: `hagakiCard` */
    HagakiCard = "hagakiCard",
    /** Screen 16x9. Serialized value: `screen16x9` */
    Screen16x9 = "screen16x9",
    /** Screen 16x10. Serialized value: `screen16x10` */
    Screen16x10 = "screen16x10"
}
export declare const SlideSizeValuesArray: readonly [SlideSizeValues.Screen4x3, SlideSizeValues.Letter, SlideSizeValues.A4, SlideSizeValues.Film35mm, SlideSizeValues.Overhead, SlideSizeValues.Banner, SlideSizeValues.Custom, SlideSizeValues.Ledger, SlideSizeValues.A3, SlideSizeValues.B4ISO, SlideSizeValues.B5ISO, SlideSizeValues.B4JIS, SlideSizeValues.B5JIS, SlideSizeValues.HagakiCard, SlideSizeValues.Screen16x9, SlideSizeValues.Screen16x10];
export declare enum CryptProviderValues {
    /** RSA AES Encryption Scheme. Serialized value: `rsaAES` */
    RsaAES = "rsaAES",
    /** RSA Full Encryption Scheme. Serialized value: `rsaFull` */
    RsaFull = "rsaFull",
    /** Invalid Encryption Scheme. Serialized value: `invalid` */
    Invalid = "invalid"
}
export declare const CryptProviderValuesArray: readonly [CryptProviderValues.RsaAES, CryptProviderValues.RsaFull, CryptProviderValues.Invalid];
export declare enum CryptAlgorithmClassValues {
    /** Hash Algorithm Class. Serialized value: `hash` */
    Hash = "hash",
    /** Invalid Algorithm Class. Serialized value: `invalid` */
    Invalid = "invalid"
}
export declare const CryptAlgorithmClassValuesArray: readonly [CryptAlgorithmClassValues.Hash, CryptAlgorithmClassValues.Invalid];
export declare enum CryptAlgorithmValues {
    /** Any Algorithm Type. Serialized value: `typeAny` */
    TypeAny = "typeAny",
    /** Invalid Algorithm Type. Serialized value: `invalid` */
    Invalid = "invalid"
}
export declare const CryptAlgorithmValuesArray: readonly [CryptAlgorithmValues.TypeAny, CryptAlgorithmValues.Invalid];
export declare enum HtmlPublishWebBrowserSupportValues {
    /** Browser v4. Serialized value: `v4` */
    V4 = "v4",
    /** Browser v3. Serialized value: `v3` */
    V3 = "v3",
    /** Browser v3v4. Serialized value: `v3v4` */
    V3v4 = "v3v4"
}
export declare const HtmlPublishWebBrowserSupportValuesArray: readonly [HtmlPublishWebBrowserSupportValues.V4, HtmlPublishWebBrowserSupportValues.V3, HtmlPublishWebBrowserSupportValues.V3v4];
export declare enum WebColorValues {
    /** Non-specific Colors. Serialized value: `none` */
    None = "none",
    /** Browser Colors. Serialized value: `browser` */
    Browser = "browser",
    /** Presentation Text Colors. Serialized value: `presentationText` */
    PresentationText = "presentationText",
    /** Presentation Accent Colors. Serialized value: `presentationAccent` */
    PresentationAccent = "presentationAccent",
    /** White Text on Black Colors. Serialized value: `whiteTextOnBlack` */
    WhiteTextOnBlack = "whiteTextOnBlack",
    /** Black Text on White Colors. Serialized value: `blackTextOnWhite` */
    BlackTextOnWhite = "blackTextOnWhite"
}
export declare const WebColorValuesArray: readonly [WebColorValues.None, WebColorValues.Browser, WebColorValues.PresentationText, WebColorValues.PresentationAccent, WebColorValues.WhiteTextOnBlack, WebColorValues.BlackTextOnWhite];
export declare enum WebScreenSizeValues {
    /** HTML/Web Size Enumeration 544x376. Serialized value: `544x376` */
    Sz544x376 = "544x376",
    /** HTML/Web Size Enumeration 640x480. Serialized value: `640x480` */
    Sz640x480 = "640x480",
    /** HTML/Web Size Enumeration 720x515. Serialized value: `720x512` */
    Sz720x512 = "720x512",
    /** HTML/Web Size Enumeration 800x600. Serialized value: `800x600` */
    Sz800x600 = "800x600",
    /** HTML/Web Size Enumeration 1024x768. Serialized value: `1024x768` */
    Sz1024x768 = "1024x768",
    /** HTML/Web Size Enumeration 1152x882. Serialized value: `1152x882` */
    Sz1152x882 = "1152x882",
    /** HTML/Web Size Enumeration 1152x900. Serialized value: `1152x900` */
    Sz1152x900 = "1152x900",
    /** HTML/Web Size Enumeration 1280x1024. Serialized value: `1280x1024` */
    Sz1280x1024 = "1280x1024",
    /** HTML/Web Size Enumeration 1600x1200. Serialized value: `1600x1200` */
    Sz1600x1200 = "1600x1200",
    /** HTML/Web Size Enumeration 1800x1400. Serialized value: `1800x1400` */
    Sz1800x1400 = "1800x1400",
    /** HTML/Web Size Enumeration 1920x1200. Serialized value: `1920x1200` */
    Sz1920x1200 = "1920x1200"
}
export declare const WebScreenSizeValuesArray: readonly [WebScreenSizeValues.Sz544x376, WebScreenSizeValues.Sz640x480, WebScreenSizeValues.Sz720x512, WebScreenSizeValues.Sz800x600, WebScreenSizeValues.Sz1024x768, WebScreenSizeValues.Sz1152x882, WebScreenSizeValues.Sz1152x900, WebScreenSizeValues.Sz1280x1024, WebScreenSizeValues.Sz1600x1200, WebScreenSizeValues.Sz1800x1400, WebScreenSizeValues.Sz1920x1200];
export declare enum PrintOutputValues {
    /** Slides. Serialized value: `slides` */
    Slides = "slides",
    /** 1 Slide / Handout Page. Serialized value: `handouts1` */
    Handouts1 = "handouts1",
    /** 2 Slides / Handout Page. Serialized value: `handouts2` */
    Handouts2 = "handouts2",
    /** 3 Slides / Handout Page. Serialized value: `handouts3` */
    Handouts3 = "handouts3",
    /** 4 Slides / Handout Page. Serialized value: `handouts4` */
    Handouts4 = "handouts4",
    /** 6 Slides / Handout Page. Serialized value: `handouts6` */
    Handouts6 = "handouts6",
    /** 9 Slides / Handout Page. Serialized value: `handouts9` */
    Handouts9 = "handouts9",
    /** Notes. Serialized value: `notes` */
    Notes = "notes",
    /** Outline. Serialized value: `outline` */
    Outline = "outline"
}
export declare const PrintOutputValuesArray: readonly [PrintOutputValues.Slides, PrintOutputValues.Handouts1, PrintOutputValues.Handouts2, PrintOutputValues.Handouts3, PrintOutputValues.Handouts4, PrintOutputValues.Handouts6, PrintOutputValues.Handouts9, PrintOutputValues.Notes, PrintOutputValues.Outline];
export declare enum PrintColorModeValues {
    /** Black and White Mode. Serialized value: `bw` */
    BlackWhite = "bw",
    /** Grayscale Mode. Serialized value: `gray` */
    Gray = "gray",
    /** Color Mode. Serialized value: `clr` */
    Color = "clr"
}
export declare const PrintColorModeValuesArray: readonly [PrintColorModeValues.BlackWhite, PrintColorModeValues.Gray, PrintColorModeValues.Color];
export declare enum PlaceholderValues {
    /** Title. Serialized value: `title` */
    Title = "title",
    /** Body. Serialized value: `body` */
    Body = "body",
    /** Centered Title. Serialized value: `ctrTitle` */
    CenteredTitle = "ctrTitle",
    /** Subtitle. Serialized value: `subTitle` */
    SubTitle = "subTitle",
    /** Date and Time. Serialized value: `dt` */
    DateAndTime = "dt",
    /** Slide Number. Serialized value: `sldNum` */
    SlideNumber = "sldNum",
    /** Footer. Serialized value: `ftr` */
    Footer = "ftr",
    /** Header. Serialized value: `hdr` */
    Header = "hdr",
    /** Object. Serialized value: `obj` */
    Object = "obj",
    /** Chart. Serialized value: `chart` */
    Chart = "chart",
    /** Table. Serialized value: `tbl` */
    Table = "tbl",
    /** Clip Art. Serialized value: `clipArt` */
    ClipArt = "clipArt",
    /** Diagram. Serialized value: `dgm` */
    Diagram = "dgm",
    /** Media. Serialized value: `media` */
    Media = "media",
    /** Slide Image. Serialized value: `sldImg` */
    SlideImage = "sldImg",
    /** Picture. Serialized value: `pic` */
    Picture = "pic"
}
export declare const PlaceholderValuesArray: readonly [PlaceholderValues.Title, PlaceholderValues.Body, PlaceholderValues.CenteredTitle, PlaceholderValues.SubTitle, PlaceholderValues.DateAndTime, PlaceholderValues.SlideNumber, PlaceholderValues.Footer, PlaceholderValues.Header, PlaceholderValues.Object, PlaceholderValues.Chart, PlaceholderValues.Table, PlaceholderValues.ClipArt, PlaceholderValues.Diagram, PlaceholderValues.Media, PlaceholderValues.SlideImage, PlaceholderValues.Picture];
export declare enum PlaceholderSizeValues {
    /** Full. Serialized value: `full` */
    Full = "full",
    /** Half. Serialized value: `half` */
    Half = "half",
    /** Quarter. Serialized value: `quarter` */
    Quarter = "quarter"
}
export declare const PlaceholderSizeValuesArray: readonly [PlaceholderSizeValues.Full, PlaceholderSizeValues.Half, PlaceholderSizeValues.Quarter];
export declare enum SlideLayoutValues {
    /** Slide Layout Type Enumeration ( Title ). Serialized value: `title` */
    Title = "title",
    /** Slide Layout Type Enumeration ( Text ). Serialized value: `tx` */
    Text = "tx",
    /** Slide Layout Type Enumeration ( Two Column Text ). Serialized value: `twoColTx` */
    TwoColumnText = "twoColTx",
    /** Slide Layout Type Enumeration ( Table ). Serialized value: `tbl` */
    Table = "tbl",
    /** Slide Layout Type Enumeration ( Text and Chart ). Serialized value: `txAndChart` */
    TextAndChart = "txAndChart",
    /** Slide Layout Type Enumeration ( Chart and Text ). Serialized value: `chartAndTx` */
    ChartAndText = "chartAndTx",
    /** Slide Layout Type Enumeration ( Diagram ). Serialized value: `dgm` */
    Diagram = "dgm",
    /** Chart. Serialized value: `chart` */
    Chart = "chart",
    /** Text and Clip Art. Serialized value: `txAndClipArt` */
    TextAndClipArt = "txAndClipArt",
    /** Clip Art and Text. Serialized value: `clipArtAndTx` */
    ClipArtAndText = "clipArtAndTx",
    /** Slide Layout Type Enumeration ( Title Only ). Serialized value: `titleOnly` */
    TitleOnly = "titleOnly",
    /** Slide Layout Type Enumeration ( Blank ). Serialized value: `blank` */
    Blank = "blank",
    /** Slide Layout Type Enumeration ( Text and Object ). Serialized value: `txAndObj` */
    TextAndObject = "txAndObj",
    /** Slide Layout Type Enumeration ( Object and Text ). Serialized value: `objAndTx` */
    ObjectAndText = "objAndTx",
    /** Object. Serialized value: `objOnly` */
    ObjectOnly = "objOnly",
    /** Title and Object. Serialized value: `obj` */
    Object = "obj",
    /** Slide Layout Type Enumeration ( Text and Media ). Serialized value: `txAndMedia` */
    TextAndMedia = "txAndMedia",
    /** Slide Layout Type Enumeration ( Media and Text ). Serialized value: `mediaAndTx` */
    MidiaAndText = "mediaAndTx",
    /** Slide Layout Type Enumeration ( Object over Text). Serialized value: `objOverTx` */
    ObjectOverText = "objOverTx",
    /** Slide Layout Type Enumeration ( Text over Object). Serialized value: `txOverObj` */
    TextOverObject = "txOverObj",
    /** Text and Two Objects. Serialized value: `txAndTwoObj` */
    TextAndTwoObjects = "txAndTwoObj",
    /** Two Objects and Text. Serialized value: `twoObjAndTx` */
    TwoObjectsAndText = "twoObjAndTx",
    /** Two Objects over Text. Serialized value: `twoObjOverTx` */
    TwoObjectsOverText = "twoObjOverTx",
    /** Four Objects. Serialized value: `fourObj` */
    FourObjects = "fourObj",
    /** Vertical Text. Serialized value: `vertTx` */
    VerticalText = "vertTx",
    /** Clip Art and Vertical Text. Serialized value: `clipArtAndVertTx` */
    ClipArtAndVerticalText = "clipArtAndVertTx",
    /** Vertical Title and Text. Serialized value: `vertTitleAndTx` */
    VerticalTitleAndText = "vertTitleAndTx",
    /** Vertical Title and Text Over Chart. Serialized value: `vertTitleAndTxOverChart` */
    VerticalTitleAndTextOverChart = "vertTitleAndTxOverChart",
    /** Two Objects. Serialized value: `twoObj` */
    TwoObjects = "twoObj",
    /** Object and Two Object. Serialized value: `objAndTwoObj` */
    ObjectAndTwoObjects = "objAndTwoObj",
    /** Two Objects and Object. Serialized value: `twoObjAndObj` */
    TwoObjectsAndObject = "twoObjAndObj",
    /** Slide Layout Type Enumeration ( Custom ). Serialized value: `cust` */
    Custom = "cust",
    /** Section Header. Serialized value: `secHead` */
    SectionHeader = "secHead",
    /** Two Text and Two Objects. Serialized value: `twoTxTwoObj` */
    TwoTextAndTwoObjects = "twoTxTwoObj",
    /** Title, Object, and Caption. Serialized value: `objTx` */
    ObjectText = "objTx",
    /** Picture and Caption. Serialized value: `picTx` */
    PictureText = "picTx"
}
export declare const SlideLayoutValuesArray: readonly [SlideLayoutValues.Title, SlideLayoutValues.Text, SlideLayoutValues.TwoColumnText, SlideLayoutValues.Table, SlideLayoutValues.TextAndChart, SlideLayoutValues.ChartAndText, SlideLayoutValues.Diagram, SlideLayoutValues.Chart, SlideLayoutValues.TextAndClipArt, SlideLayoutValues.ClipArtAndText, SlideLayoutValues.TitleOnly, SlideLayoutValues.Blank, SlideLayoutValues.TextAndObject, SlideLayoutValues.ObjectAndText, SlideLayoutValues.ObjectOnly, SlideLayoutValues.Object, SlideLayoutValues.TextAndMedia, SlideLayoutValues.MidiaAndText, SlideLayoutValues.ObjectOverText, SlideLayoutValues.TextOverObject, SlideLayoutValues.TextAndTwoObjects, SlideLayoutValues.TwoObjectsAndText, SlideLayoutValues.TwoObjectsOverText, SlideLayoutValues.FourObjects, SlideLayoutValues.VerticalText, SlideLayoutValues.ClipArtAndVerticalText, SlideLayoutValues.VerticalTitleAndText, SlideLayoutValues.VerticalTitleAndTextOverChart, SlideLayoutValues.TwoObjects, SlideLayoutValues.ObjectAndTwoObjects, SlideLayoutValues.TwoObjectsAndObject, SlideLayoutValues.Custom, SlideLayoutValues.SectionHeader, SlideLayoutValues.TwoTextAndTwoObjects, SlideLayoutValues.ObjectText, SlideLayoutValues.PictureText];
export declare enum SplitterBarStateValues {
    /** Min. Serialized value: `minimized` */
    Minimized = "minimized",
    /** Restored. Serialized value: `restored` */
    Restored = "restored",
    /** Max. Serialized value: `maximized` */
    Maximized = "maximized"
}
export declare const SplitterBarStateValuesArray: readonly [SplitterBarStateValues.Minimized, SplitterBarStateValues.Restored, SplitterBarStateValues.Maximized];
export declare enum ViewValues {
    /** Normal Slide View. Serialized value: `sldView` */
    SlideView = "sldView",
    /** Slide Master View. Serialized value: `sldMasterView` */
    SlideMasterView = "sldMasterView",
    /** Notes View. Serialized value: `notesView` */
    NotesView = "notesView",
    /** Handout View. Serialized value: `handoutView` */
    HandoutView = "handoutView",
    /** Notes Master View. Serialized value: `notesMasterView` */
    NotesMasterView = "notesMasterView",
    /** Outline View. Serialized value: `outlineView` */
    OutlineView = "outlineView",
    /** Slide Sorter View. Serialized value: `sldSorterView` */
    SlideSorterView = "sldSorterView",
    /** Slide Thumbnail View. Serialized value: `sldThumbnailView` */
    SlideThumbnailView = "sldThumbnailView"
}
export declare const ViewValuesArray: readonly [ViewValues.SlideView, ViewValues.SlideMasterView, ViewValues.NotesView, ViewValues.HandoutView, ViewValues.NotesMasterView, ViewValues.OutlineView, ViewValues.SlideSorterView, ViewValues.SlideThumbnailView];
export declare enum TriggerEventValues {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** Trigger Event Enum ( On Begin ). Serialized value: `onBegin` */
    OnBegin = "onBegin",
    /** Trigger Event Enum ( On End ). Serialized value: `onEnd` */
    OnEnd = "onEnd",
    /** Trigger Event Enum ( Begin ). Serialized value: `begin` */
    Begin = "begin",
    /** Trigger Event Enum ( End ). Serialized value: `end` */
    End = "end",
    /** Trigger Event Enum ( On Click ). Serialized value: `onClick` */
    OnClick = "onClick",
    /** Trigger Event Enum ( On Double Click ). Serialized value: `onDblClick` */
    OnDoubleClick = "onDblClick",
    /** Trigger Event Enum ( On Mouse Over ). Serialized value: `onMouseOver` */
    OnMouseOver = "onMouseOver",
    /** Trigger Event Enum ( On Mouse Out ). Serialized value: `onMouseOut` */
    OnMouseOut = "onMouseOut",
    /** Trigger Event Enum ( On Next ). Serialized value: `onNext` */
    OnNext = "onNext",
    /** Trigger Event Enum ( On Previous ). Serialized value: `onPrev` */
    OnPrevious = "onPrev",
    /** Trigger Event Enum ( On Stop Audio ). Serialized value: `onStopAudio` */
    OnStopAudio = "onStopAudio",
    /** undefined. Serialized value: `onMediaBookmark` */
    OnMediaBookmark = "onMediaBookmark"
}
export declare const TriggerEventValuesArray: readonly [TriggerEventValues.None, TriggerEventValues.OnBegin, TriggerEventValues.OnEnd, TriggerEventValues.Begin, TriggerEventValues.End, TriggerEventValues.OnClick, TriggerEventValues.OnDoubleClick, TriggerEventValues.OnMouseOver, TriggerEventValues.OnMouseOut, TriggerEventValues.OnNext, TriggerEventValues.OnPrevious, TriggerEventValues.OnStopAudio, TriggerEventValues.OnMediaBookmark];
export declare enum ConformanceClassValues {
    /** undefined. Serialized value: `strict` */
    Strict = "strict",
    /** undefined. Serialized value: `transitional` */
    Transitional = "transitional"
}
export declare const ConformanceClassValuesArray: readonly [ConformanceClassValues.Strict, ConformanceClassValues.Transitional];
/** Defines the SoundAction Class. Serialized as `p:sndAc` */
export declare class SoundAction extends OxmlCompositeElement<StartSoundAction | EndSoundAction> {
    static _Q: string;
    /** Start Sound Action. */
    get startSoundAction(): StartSoundAction | undefined;
    /** Stop Sound Action. */
    get endSoundAction(): EndSoundAction | undefined;
}
/** Defines the ZoomTransition Class. Serialized as `p:zoom` */
export declare class ZoomTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Direction. Serialized as `:dir` */
    get direction(): TransitionInOutDirectionValues | undefined;
    set direction(v: TransitionInOutDirectionValues | undefined);
}
/** Defines the WheelTransition Class. Serialized as `p:wheel` */
export declare class WheelTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Spokes. Serialized as `:spokes` */
    get spokes(): UInt32Value | undefined;
    set spokes(v: UInt32Value | undefined);
}
/** Defines the StripsTransition Class. Serialized as `p:strips` */
export declare class StripsTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Direction. Serialized as `:dir` */
    get direction(): TransitionCornerDirectionValues | undefined;
    set direction(v: TransitionCornerDirectionValues | undefined);
}
/** Defines the SplitTransition Class. Serialized as `p:split` */
export declare class SplitTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Orientation. Serialized as `:orient` */
    get orientation(): DirectionValues | undefined;
    set orientation(v: DirectionValues | undefined);
    /** Direction. Serialized as `:dir` */
    get direction(): TransitionInOutDirectionValues | undefined;
    set direction(v: TransitionInOutDirectionValues | undefined);
}
/** Defines the SideDirectionTransitionType Class. */
export declare abstract class SideDirectionTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** Direction. Serialized as `:dir` */
    get direction(): TransitionSlideDirectionValues | undefined;
    set direction(v: TransitionSlideDirectionValues | undefined);
}
/** Defines the WipeTransition Class. Serialized as `p:wipe` */
export declare class WipeTransition extends SideDirectionTransitionType {
    static _Q: string;
}
/** Defines the PushTransition Class. Serialized as `p:push` */
export declare class PushTransition extends SideDirectionTransitionType {
    static _Q: string;
}
/** Defines the OptionalBlackTransitionType Class. */
export declare abstract class OptionalBlackTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** Transition Through Black. Serialized as `:thruBlk` */
    get throughBlack(): BooleanValue | undefined;
    set throughBlack(v: BooleanValue | undefined);
}
/** Defines the FadeTransition Class. Serialized as `p:fade` */
export declare class FadeTransition extends OptionalBlackTransitionType {
    static _Q: string;
}
/** Defines the CutTransition Class. Serialized as `p:cut` */
export declare class CutTransition extends OptionalBlackTransitionType {
    static _Q: string;
}
/** Defines the EightDirectionTransitionType Class. */
export declare abstract class EightDirectionTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** Direction. Serialized as `:dir` */
    get direction(): StringValue | undefined;
    set direction(v: StringValue | undefined);
}
/** Defines the PullTransition Class. Serialized as `p:pull` */
export declare class PullTransition extends EightDirectionTransitionType {
    static _Q: string;
}
/** Defines the CoverTransition Class. Serialized as `p:cover` */
export declare class CoverTransition extends EightDirectionTransitionType {
    static _Q: string;
}
/** Defines the OrientationTransitionType Class. */
export declare abstract class OrientationTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** Transition Direction. Serialized as `:dir` */
    get direction(): DirectionValues | undefined;
    set direction(v: DirectionValues | undefined);
}
/** Defines the RandomBarTransition Class. Serialized as `p:randomBar` */
export declare class RandomBarTransition extends OrientationTransitionType {
    static _Q: string;
}
/** Defines the CombTransition Class. Serialized as `p:comb` */
export declare class CombTransition extends OrientationTransitionType {
    static _Q: string;
}
/** Defines the CheckerTransition Class. Serialized as `p:checker` */
export declare class CheckerTransition extends OrientationTransitionType {
    static _Q: string;
}
/** Defines the BlindsTransition Class. Serialized as `p:blinds` */
export declare class BlindsTransition extends OrientationTransitionType {
    static _Q: string;
}
/** Graphic Element. Serialized as `p:graphicEl` */
export declare class GraphicElement extends OxmlCompositeElement<ADiagram | AChart> {
    static _Q: string;
    /** Diagram to Animate. */
    get diagram(): ADiagram | undefined;
    /** Chart to Animate. */
    get chart(): AChart | undefined;
}
/** Text Element. Serialized as `p:txEl` */
export declare class TextElement extends OxmlCompositeElement<CharRange | ParagraphIndexRange> {
    static _Q: string;
    /** Character Range. */
    get charRange(): CharRange | undefined;
    /** Paragraph Text Range. */
    get paragraphIndexRange(): ParagraphIndexRange | undefined;
}
/** OLE Chart Element. Serialized as `p:oleChartEl` */
export declare class OleChartElement extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Type. Serialized as `:type` */
    get type(): ChartSubElementValues | undefined;
    set type(v: ChartSubElementValues | undefined);
    /** Level. Serialized as `:lvl` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
}
/** Defines the NotesMasterExtensionList Class. Serialized as `p:extLst` */
export declare class NotesMasterExtensionList extends OxmlCompositeElement<NotesMasterExtension> {
    static _Q: string;
}
/** Defines the HandoutMasterExtensionList Class. Serialized as `p:extLst` */
export declare class HandoutMasterExtensionList extends OxmlCompositeElement<HandoutMasterExtension> {
    static _Q: string;
}
/** Defines the SlideMasterExtensionList Class. Serialized as `p:extLst` */
export declare class SlideMasterExtensionList extends OxmlCompositeElement<SlideMasterExtension> {
    static _Q: string;
}
/** Defines the TextStyles Class. Serialized as `p:txStyles` */
export declare class TextStyles extends OxmlCompositeElement<TitleStyle | BodyStyle | OtherStyle | ExtensionList> {
    static _Q: string;
    /** Slide Master Title Text Style. */
    get titleStyle(): TitleStyle | undefined;
    /** Slide Master Body Text Style. */
    get bodyStyle(): BodyStyle | undefined;
    /** Slide Master Other Text Style. */
    get otherStyle(): OtherStyle | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SlideLayoutIdList Class. Serialized as `p:sldLayoutIdLst` */
export declare class SlideLayoutIdList extends OxmlCompositeElement<SlideLayoutId> {
    static _Q: string;
}
/** Defines the SlideLayoutExtensionList Class. Serialized as `p:extLst` */
export declare class SlideLayoutExtensionList extends OxmlCompositeElement<SlideLayoutExtension> {
    static _Q: string;
}
/** Defines the HeaderFooter Class. Serialized as `p:hf` */
export declare class HeaderFooter extends OxmlCompositeElement<ExtensionListWithModification> {
    static _Q: string;
    static _A: string[];
    /** Slide Number Placeholder. Serialized as `:sldNum` */
    get slideNumber(): BooleanValue | undefined;
    set slideNumber(v: BooleanValue | undefined);
    /** Header Placeholder. Serialized as `:hdr` */
    get header(): BooleanValue | undefined;
    set header(v: BooleanValue | undefined);
    /** Footer Placeholder. Serialized as `:ftr` */
    get footer(): BooleanValue | undefined;
    set footer(v: BooleanValue | undefined);
    /** Date/Time Placeholder. Serialized as `:dt` */
    get dateTime(): BooleanValue | undefined;
    set dateTime(v: BooleanValue | undefined);
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Defines the PresentationPropertiesExtension Class. Serialized as `p:ext` */
export declare class PresentationPropertiesExtension extends OxmlCompositeElement<P14DiscardImageEditData | P14DefaultImageDpi | A14TextMath | P15ChartTrackingReferenceBased> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P14DiscardImageEditData. */
    get discardImageEditData(): P14DiscardImageEditData | undefined;
    /** Returns P14DefaultImageDpi. */
    get defaultImageDpi(): P14DefaultImageDpi | undefined;
    /** Returns A14TextMath. */
    get textMath(): A14TextMath | undefined;
    /** Returns P15ChartTrackingReferenceBased. */
    get chartTrackingReferenceBased(): P15ChartTrackingReferenceBased | undefined;
}
/** Defines the PresentationPropertiesExtensionList Class. Serialized as `p:extLst` */
export declare class PresentationPropertiesExtensionList extends OxmlCompositeElement<PresentationPropertiesExtension> {
    static _Q: string;
}
/** Defines the ColorMostRecentlyUsed Class. Serialized as `p:clrMru` */
export declare class ColorMostRecentlyUsed extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _Q: string;
}
/** Defines the ShowProperties Class. Serialized as `p:showPr` */
export declare class ShowProperties extends OxmlCompositeElement<PresenterSlideMode | BrowseSlideMode | KioskSlideMode | SlideAll | SlideRange | CustomShowReference | PenColor | ShowPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Loop Slide Show. Serialized as `:loop` */
    get loop(): BooleanValue | undefined;
    set loop(v: BooleanValue | undefined);
    /** Show Narration in Slide Show. Serialized as `:showNarration` */
    get showNarration(): BooleanValue | undefined;
    set showNarration(v: BooleanValue | undefined);
    /** Show Animation in Slide Show. Serialized as `:showAnimation` */
    get showAnimation(): BooleanValue | undefined;
    set showAnimation(v: BooleanValue | undefined);
    /** Use Timings in Slide Show. Serialized as `:useTimings` */
    get useTimings(): BooleanValue | undefined;
    set useTimings(v: BooleanValue | undefined);
}
/** Defines the PrintingProperties Class. Serialized as `p:prnPr` */
export declare class PrintingProperties extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Print Output. Serialized as `:prnWhat` */
    get printWhat(): PrintOutputValues | undefined;
    set printWhat(v: PrintOutputValues | undefined);
    /** Print Color Mode. Serialized as `:clrMode` */
    get colorMode(): PrintColorModeValues | undefined;
    set colorMode(v: PrintColorModeValues | undefined);
    /** Print Hidden Slides. Serialized as `:hiddenSlides` */
    get hiddenSlides(): BooleanValue | undefined;
    set hiddenSlides(v: BooleanValue | undefined);
    /** Scale to Fit Paper when printing. Serialized as `:scaleToFitPaper` */
    get scaleToFitPaper(): BooleanValue | undefined;
    set scaleToFitPaper(v: BooleanValue | undefined);
    /** Frame slides when printing. Serialized as `:frameSlides` */
    get frameSlides(): BooleanValue | undefined;
    set frameSlides(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Web Properties. Serialized as `p:webPr` */
export declare class WebProperties extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Show animation in HTML output. Serialized as `:showAnimation` */
    get showAnimation(): BooleanValue | undefined;
    set showAnimation(v: BooleanValue | undefined);
    /** Resize graphics in HTML output. Serialized as `:resizeGraphics` */
    get resizeGraphics(): BooleanValue | undefined;
    set resizeGraphics(v: BooleanValue | undefined);
    /** Allow PNG in HTML output. Serialized as `:allowPng` */
    get allowPng(): BooleanValue | undefined;
    set allowPng(v: BooleanValue | undefined);
    /** Rely on VML for HTML output. Serialized as `:relyOnVml` */
    get relyOnVml(): BooleanValue | undefined;
    set relyOnVml(v: BooleanValue | undefined);
    /** Organize HTML output in folders. Serialized as `:organizeInFolders` */
    get organizeInFolders(): BooleanValue | undefined;
    set organizeInFolders(v: BooleanValue | undefined);
    /** Use long file names in HTML output. Serialized as `:useLongFilenames` */
    get useLongFilenames(): BooleanValue | undefined;
    set useLongFilenames(v: BooleanValue | undefined);
    /** Image size for HTML output. Serialized as `:imgSz` */
    get imageSize(): WebScreenSizeValues | undefined;
    set imageSize(v: WebScreenSizeValues | undefined);
    /** Encoding for HTML output. Serialized as `:encoding` */
    get encoding(): StringValue | undefined;
    set encoding(v: StringValue | undefined);
    /** Slide Navigation Colors for HTML output. Serialized as `:clr` */
    get color(): WebColorValues | undefined;
    set color(v: WebColorValues | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** HTML Publishing Properties. Serialized as `p:htmlPubPr` */
export declare class HtmlPublishProperties extends OxmlCompositeElement<SlideAll | SlideRange | CustomShowReference | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Show Speaker Notes. Serialized as `:showSpeakerNotes` */
    get showSpeakerNotes(): BooleanValue | undefined;
    set showSpeakerNotes(v: BooleanValue | undefined);
    /** Browser Support Target. Serialized as `:pubBrowser` */
    get targetBrowser(): HtmlPublishWebBrowserSupportValues | undefined;
    set targetBrowser(v: HtmlPublishWebBrowserSupportValues | undefined);
    /** Publish Path. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the PresentationExtension Class. Serialized as `p:ext` */
export declare class PresentationExtension extends OxmlCompositeElement<P14SectionProperties | P14SectionList | P15SlideGuideList | P15NotesGuideList> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P14SectionProperties. */
    get sectionProperties(): P14SectionProperties | undefined;
    /** Returns P14SectionList. */
    get sectionList(): P14SectionList | undefined;
    /** Returns P15SlideGuideList. */
    get slideGuideList(): P15SlideGuideList | undefined;
    /** Returns P15NotesGuideList. */
    get notesGuideList(): P15NotesGuideList | undefined;
}
/** Defines the PresentationExtensionList Class. Serialized as `p:extLst` */
export declare class PresentationExtensionList extends OxmlCompositeElement<PresentationExtension> {
    static _Q: string;
}
/** Defines the ModificationVerifier Class. Serialized as `p:modifyVerifier` */
export declare class ModificationVerifier extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Cryptographic Provider Type. Serialized as `:cryptProviderType` */
    get cryptographicProviderType(): CryptProviderValues | undefined;
    set cryptographicProviderType(v: CryptProviderValues | undefined);
    /** Cryptographic Algorithm Class. Serialized as `:cryptAlgorithmClass` */
    get cryptographicAlgorithmClass(): CryptAlgorithmClassValues | undefined;
    set cryptographicAlgorithmClass(v: CryptAlgorithmClassValues | undefined);
    /** Cryptographic Algorithm Type. Serialized as `:cryptAlgorithmType` */
    get cryptographicAlgorithmType(): CryptAlgorithmValues | undefined;
    set cryptographicAlgorithmType(v: CryptAlgorithmValues | undefined);
    /** Cryptographic Hashing Algorithm. Serialized as `:cryptAlgorithmSid` */
    get cryptographicAlgorithmSid(): UInt32Value | undefined;
    set cryptographicAlgorithmSid(v: UInt32Value | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
    get spinCount(): UInt32Value | undefined;
    set spinCount(v: UInt32Value | undefined);
    /** Salt for Password Verifier. Serialized as `:saltData` */
    get saltData(): Base64BinaryValue | undefined;
    set saltData(v: Base64BinaryValue | undefined);
    /** Password Hash. Serialized as `:hashData` */
    get hashData(): StringValue | undefined;
    set hashData(v: StringValue | undefined);
    /** Cryptographic Provider. Serialized as `:cryptProvider` */
    get cryptographicProvider(): StringValue | undefined;
    set cryptographicProvider(v: StringValue | undefined);
    /** Cryptographic Algorithm Extensibility. Serialized as `:algIdExt` */
    get extendedCryptographicAlgorithm(): UInt32Value | undefined;
    set extendedCryptographicAlgorithm(v: UInt32Value | undefined);
    /** Algorithm Extensibility Source. Serialized as `:algIdExtSource` */
    get extendedCryptographicAlgorithmSource(): StringValue | undefined;
    set extendedCryptographicAlgorithmSource(v: StringValue | undefined);
    /** Cryptographic Provider Type Extensibility. Serialized as `:cryptProviderTypeExt` */
    get cryptographicProviderTypeExtensibility(): UInt32Value | undefined;
    set cryptographicProviderTypeExtensibility(v: UInt32Value | undefined);
    /** Provider Type Extensibility Source. Serialized as `:cryptProviderTypeExtSource` */
    get cryptographicProviderTypeExtensibilitySource(): StringValue | undefined;
    set cryptographicProviderTypeExtensibilitySource(v: StringValue | undefined);
    /** algorithmName. Serialized as `:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** hashValue. Serialized as `:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** saltValue. Serialized as `:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** spinValue. Serialized as `:spinValue` */
    get spinValue(): UInt32Value | undefined;
    set spinValue(v: UInt32Value | undefined);
}
/** Defines the Kinsoku Class. Serialized as `p:kinsoku` */
export declare class Kinsoku extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Invalid Kinsoku Start Characters. Serialized as `:invalStChars` */
    get invalidStartChars(): StringValue | undefined;
    set invalidStartChars(v: StringValue | undefined);
    /** Invalid Kinsoku End Characters. Serialized as `:invalEndChars` */
    get invalidEndChars(): StringValue | undefined;
    set invalidEndChars(v: StringValue | undefined);
}
/** Defines the PhotoAlbum Class. Serialized as `p:photoAlbum` */
export declare class PhotoAlbum extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White. Serialized as `:bw` */
    get blackWhite(): BooleanValue | undefined;
    set blackWhite(v: BooleanValue | undefined);
    /** Show/Hide Captions. Serialized as `:showCaptions` */
    get showCaptions(): BooleanValue | undefined;
    set showCaptions(v: BooleanValue | undefined);
    /** Photo Album Layout. Serialized as `:layout` */
    get layout(): PhotoAlbumLayoutValues | undefined;
    set layout(v: PhotoAlbumLayoutValues | undefined);
    /** Frame Type. Serialized as `:frame` */
    get frame(): PhotoAlbumFrameShapeValues | undefined;
    set frame(v: PhotoAlbumFrameShapeValues | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the CustomShowList Class. Serialized as `p:custShowLst` */
export declare class CustomShowList extends OxmlCompositeElement<CustomShow> {
    static _Q: string;
}
/** Defines the EmbeddedFontList Class. Serialized as `p:embeddedFontLst` */
export declare class EmbeddedFontList extends OxmlCompositeElement<EmbeddedFont> {
    static _Q: string;
}
/** Defines the SlideSize Class. Serialized as `p:sldSz` */
export declare class SlideSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Extent Length. Serialized as `:cx` */
    get cx(): Int32Value | undefined;
    set cx(v: Int32Value | undefined);
    /** Extent Width. Serialized as `:cy` */
    get cy(): Int32Value | undefined;
    set cy(v: Int32Value | undefined);
    /** Type of Size. Serialized as `:type` */
    get type(): SlideSizeValues | undefined;
    set type(v: SlideSizeValues | undefined);
}
/** Defines the SlideIdList Class. Serialized as `p:sldIdLst` */
export declare class SlideIdList extends OxmlCompositeElement<SlideId> {
    static _Q: string;
}
/** Defines the HandoutMasterIdList Class. Serialized as `p:handoutMasterIdLst` */
export declare class HandoutMasterIdList extends OxmlCompositeElement<HandoutMasterId> {
    static _Q: string;
    /** Handout Master ID. */
    get handoutMasterId(): HandoutMasterId | undefined;
}
/** Defines the NotesMasterIdList Class. Serialized as `p:notesMasterIdLst` */
export declare class NotesMasterIdList extends OxmlCompositeElement<NotesMasterId> {
    static _Q: string;
    /** Notes Master ID. */
    get notesMasterId(): NotesMasterId | undefined;
}
/** Defines the SlideMasterIdList Class. Serialized as `p:sldMasterIdLst` */
export declare class SlideMasterIdList extends OxmlCompositeElement<SlideMasterId> {
    static _Q: string;
}
/** Defines the CommentExtensionList Class. Serialized as `p:extLst` */
export declare class CommentExtensionList extends OxmlCompositeElement<CommentExtension> {
    static _Q: string;
}
/** Defines the CommentAuthorExtensionList Class. Serialized as `p:extLst` */
export declare class CommentAuthorExtensionList extends OxmlCompositeElement<CommentAuthorExtension> {
    static _Q: string;
}
/** Defines the TimeListType Class. */
export declare abstract class TimeListType extends OxmlLeafElement {
    static _A: string[];
    /** X coordinate. Serialized as `:x` */
    get x(): Int32Value | undefined;
    set x(v: Int32Value | undefined);
    /** Y coordinate. Serialized as `:y` */
    get y(): Int32Value | undefined;
    set y(v: Int32Value | undefined);
}
/** Defines the RotationCenter Class. Serialized as `p:rCtr` */
export declare class RotationCenter extends TimeListType {
    static _Q: string;
}
/** Defines the ToPosition Class. Serialized as `p:to` */
export declare class ToPosition extends TimeListType {
    static _Q: string;
}
/** Defines the FromPosition Class. Serialized as `p:from` */
export declare class FromPosition extends TimeListType {
    static _Q: string;
}
/** Defines the ByPosition Class. Serialized as `p:by` */
export declare class ByPosition extends TimeListType {
    static _Q: string;
}
/** Defines the TimeAnimateValueList Class. Serialized as `p:tavLst` */
export declare class TimeAnimateValueList extends OxmlCompositeElement<TimeAnimateValue> {
    static _Q: string;
}
/** Defines the TimeTypeListType Class. */
export declare abstract class TimeTypeListType extends OxmlCompositeElement<ParallelTimeNode | SequenceTimeNode | ExclusiveTimeNode | Animate | AnimateColor | AnimateEffect | AnimateMotion | AnimateRotation | AnimateScale | Command | SetBehavior | Audio | Video> {
}
/** Defines the SubTimeNodeList Class. Serialized as `p:subTnLst` */
export declare class SubTimeNodeList extends TimeTypeListType {
    static _Q: string;
}
/** Defines the ChildTimeNodeList Class. Serialized as `p:childTnLst` */
export declare class ChildTimeNodeList extends TimeTypeListType {
    static _Q: string;
}
/** Defines the Iterate Class. Serialized as `p:iterate` */
export declare class Iterate extends OxmlCompositeElement<TimeAbsolute | TimePercentage> {
    static _Q: string;
    static _A: string[];
    /** Iterate Type. Serialized as `:type` */
    get type(): IterateValues | undefined;
    set type(v: IterateValues | undefined);
    /** Backwards. Serialized as `:backwards` */
    get backwards(): BooleanValue | undefined;
    set backwards(v: BooleanValue | undefined);
    /** Time Absolute. */
    get timeAbsolute(): TimeAbsolute | undefined;
    /** Time Percentage. */
    get timePercentage(): TimePercentage | undefined;
}
/** Defines the ApplicationNonVisualDrawingPropertiesExtension Class. Serialized as `p:ext` */
export declare class ApplicationNonVisualDrawingPropertiesExtension extends OxmlCompositeElement<P14Media | P14ModificationId> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P14Media. */
    get media(): P14Media | undefined;
    /** Returns P14ModificationId. */
    get modificationId(): P14ModificationId | undefined;
}
/** Defines the ApplicationNonVisualDrawingPropertiesExtensionList Class. Serialized as `p:extLst` */
export declare class ApplicationNonVisualDrawingPropertiesExtensionList extends OxmlCompositeElement<ApplicationNonVisualDrawingPropertiesExtension> {
    static _Q: string;
}
/** Placeholder Shape. Serialized as `p:ph` */
export declare class PlaceholderShape extends OxmlCompositeElement<ExtensionListWithModification> {
    static _Q: string;
    static _A: string[];
    /** Placeholder Type. Serialized as `:type` */
    get type(): PlaceholderValues | undefined;
    set type(v: PlaceholderValues | undefined);
    /** Placeholder Orientation. Serialized as `:orient` */
    get orientation(): DirectionValues | undefined;
    set orientation(v: DirectionValues | undefined);
    /** Placeholder Size. Serialized as `:sz` */
    get size(): PlaceholderSizeValues | undefined;
    set size(v: PlaceholderSizeValues | undefined);
    /** Placeholder Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Placeholder has custom prompt. Serialized as `:hasCustomPrompt` */
    get hasCustomPrompt(): BooleanValue | undefined;
    set hasCustomPrompt(v: BooleanValue | undefined);
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Defines the NotesMasterExtension Class. Serialized as `p:ext` */
export declare class NotesMasterExtension extends OxmlCompositeElement<P15SlideGuideList> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P15SlideGuideList. */
    get slideGuideList(): P15SlideGuideList | undefined;
}
/** Defines the HandoutMasterExtension Class. Serialized as `p:ext` */
export declare class HandoutMasterExtension extends OxmlCompositeElement<P15SlideGuideList> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P15SlideGuideList. */
    get slideGuideList(): P15SlideGuideList | undefined;
}
/** Defines the SlideMasterExtension Class. Serialized as `p:ext` */
export declare class SlideMasterExtension extends OxmlCompositeElement<P15SlideGuideList> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P15SlideGuideList. */
    get slideGuideList(): P15SlideGuideList | undefined;
}
/** Defines the SlideLayoutExtension Class. Serialized as `p:ext` */
export declare class SlideLayoutExtension extends OxmlCompositeElement<P15SlideGuideList> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P15SlideGuideList. */
    get slideGuideList(): P15SlideGuideList | undefined;
}
/** Defines the CommentExtension Class. Serialized as `p:ext` */
export declare class CommentExtension extends OxmlCompositeElement<P15ThreadingInfo> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P15ThreadingInfo. */
    get threadingInfo(): P15ThreadingInfo | undefined;
}
/** Defines the CommentAuthorExtension Class. Serialized as `p:ext` */
export declare class CommentAuthorExtension extends OxmlCompositeElement<P15PresenceInfo> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P15PresenceInfo. */
    get presenceInfo(): P15PresenceInfo | undefined;
}
/** Defines the TimeListSubShapeIdType Class. */
export declare abstract class TimeListSubShapeIdType extends OxmlLeafElement {
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
}
/** Subshape. Serialized as `p:subSp` */
export declare class SubShape extends TimeListSubShapeIdType {
    static _Q: string;
}
/** Ink Target. Serialized as `p:inkTgt` */
export declare class InkTarget extends TimeListSubShapeIdType {
    static _Q: string;
}
/** Shape Target. Serialized as `p:spTgt` */
export declare class ShapeTarget extends OxmlCompositeElement<BackgroundAnimation | SubShape | OleChartElement | TextElement | GraphicElement> {
    static _Q: string;
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** Background. */
    get backgroundAnimation(): BackgroundAnimation | undefined;
    /** Subshape. */
    get subShape(): SubShape | undefined;
    /** OLE Chart Element. */
    get oleChartElement(): OleChartElement | undefined;
    /** Text Element. */
    get textElement(): TextElement | undefined;
    /** Graphic Element. */
    get graphicElement(): GraphicElement | undefined;
}
/** Defines the ShowPropertiesExtensionList Class. Serialized as `p:extLst` */
export declare class ShowPropertiesExtensionList extends OxmlCompositeElement<ShowPropertiesExtension> {
    static _Q: string;
}
/** Connection Shape. Serialized as `p:cxnSp` */
export declare class ConnectionShape extends OxmlCompositeElement<NonVisualConnectionShapeProperties | ShapeProperties | ShapeStyle | ExtensionListWithModification> {
    static _Q: string;
    /** Non-Visual Properties for a Connection Shape. */
    get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Connector Shape Style. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Graphic Frame. Serialized as `p:graphicFrame` */
export declare class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Transform | AGraphic | ExtensionListWithModification> {
    static _Q: string;
    /** Non-Visual Properties for a Graphic Frame. */
    get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined;
    /** 2D Transform for Graphic Frame. */
    get transform(): Transform | undefined;
    /** Returns AGraphic. */
    get graphic(): AGraphic | undefined;
    /** Extension List with Modification Flag. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Shape. Serialized as `p:sp` */
export declare class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | ShapeStyle | TextBody | ExtensionListWithModification> {
    static _Q: string;
    static _A: string[];
    /** Use Background Fill. Serialized as `:useBgFill` */
    get useBackgroundFill(): BooleanValue | undefined;
    set useBackgroundFill(v: BooleanValue | undefined);
    /** Non-Visual Properties for a Shape. */
    get nonVisualShapeProperties(): NonVisualShapeProperties | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Shape Style. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Shape Text Body. */
    get textBody(): TextBody | undefined;
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Group Shape Properties. Serialized as `p:grpSpPr` */
export declare class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): ATransformGroup | undefined;
}
/** Non-Visual Properties for a Group Shape. Serialized as `p:nvGrpSpPr` */
export declare class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties | ApplicationNonVisualDrawingProperties> {
    static _Q: string;
    /** Non-visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Group Shape Drawing Properties. */
    get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined;
    /** Non-Visual Properties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
}
/** Defines the CommonSlideDataExtensionList Class. Serialized as `p:extLst` */
export declare class CommonSlideDataExtensionList extends OxmlCompositeElement<CommonSlideDataExtension> {
    static _Q: string;
}
/** List of controls. Serialized as `p:controls` */
export declare class ControlList extends OxmlCompositeElement<Control> {
    static _Q: string;
}
/** Customer Data List. Serialized as `p:custDataLst` */
export declare class CustomerDataList extends OxmlCompositeElement<CustomerData | CustomerDataTags> {
    static _Q: string;
}
/** Defines the GroupShapeType Class. */
export declare abstract class GroupShapeType extends OxmlCompositeElement<NonVisualGroupShapeProperties | GroupShapeProperties | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ExtensionListWithModification> {
    /** Non-Visual Properties for a Group Shape. */
    get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined;
    /** Group Shape Properties. */
    get groupShapeProperties(): GroupShapeProperties | undefined;
}
/** Group Shape. Serialized as `p:grpSp` */
export declare class GroupShape extends GroupShapeType {
    static _Q: string;
}
/** Shape Tree. Serialized as `p:spTree` */
export declare class ShapeTree extends GroupShapeType {
    static _Q: string;
}
/** Slide Background. Serialized as `p:bg` */
export declare class Background extends OxmlCompositeElement<BackgroundProperties | BackgroundStyleReference> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** Background Properties. */
    get backgroundProperties(): BackgroundProperties | undefined;
    /** Background Style Reference. */
    get backgroundStyleReference(): BackgroundStyleReference | undefined;
}
/** Defines the SlideExtensionList Class. Serialized as `p:extLst` */
export declare class SlideExtensionList extends OxmlCompositeElement<SlideExtension> {
    static _Q: string;
}
/** Slide Timing Information for a Slide. Serialized as `p:timing` */
export declare class Timing extends OxmlCompositeElement<TimeNodeList | BuildList | ExtensionListWithModification> {
    static _Q: string;
    /** Returns TimeNodeList. */
    get timeNodeList(): TimeNodeList | undefined;
    /** Build List. */
    get buildList(): BuildList | undefined;
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Slide Transition. Serialized as `p:transition` */
export declare class Transition extends OxmlCompositeElement<BlindsTransition | CheckerTransition | CircleTransition | DissolveTransition | CombTransition | CoverTransition | CutTransition | DiamondTransition | FadeTransition | NewsflashTransition | PlusTransition | PullTransition | PushTransition | RandomTransition | RandomBarTransition | SplitTransition | StripsTransition | WedgeTransition | WheelTransition | WipeTransition | ZoomTransition | P14FlashTransition | P14VortexTransition | P14SwitchTransition | P14FlipTransition | P14RippleTransition | P14GlitterTransition | P14HoneycombTransition | P14PrismTransition | P14DoorsTransition | P14WindowTransition | P14ShredTransition | P14FerrisTransition | P14FlythroughTransition | P14WarpTransition | P14GalleryTransition | P14ConveyorTransition | P14PanTransition | P14RevealTransition | P14WheelReverseTransition | P15PresetTransition | SoundAction | ExtensionListWithModification> {
    static _Q: string;
    static _A: string[];
    /** spd. Serialized as `:spd` */
    get speed(): TransitionSpeedValues | undefined;
    set speed(v: TransitionSpeedValues | undefined);
    /** dur. Serialized as `p14:dur` */
    get duration(): StringValue | undefined;
    set duration(v: StringValue | undefined);
    /** Specifies whether a mouse click will advance the slide.. Serialized as `:advClick` */
    get advanceOnClick(): BooleanValue | undefined;
    set advanceOnClick(v: BooleanValue | undefined);
    /** advTm. Serialized as `:advTm` */
    get advanceAfterTime(): StringValue | undefined;
    set advanceAfterTime(v: StringValue | undefined);
}
/** Defines the OleObjectLink Class. Serialized as `p:link` */
export declare class OleObjectLink extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Update Linked OLE Objects Automatically. Serialized as `:updateAutomatic` */
    get autoUpdate(): BooleanValue | undefined;
    set autoUpdate(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the OleObjectEmbed Class. Serialized as `p:embed` */
export declare class OleObjectEmbed extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Color Scheme Properties for OLE Object. Serialized as `:followColorScheme` */
    get followColorScheme(): OleObjectFollowColorSchemeValues | undefined;
    set followColorScheme(v: OleObjectFollowColorSchemeValues | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the Picture Class. Serialized as `p:pic` */
export declare class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | ShapeStyle | ExtensionListWithModification> {
    static _Q: string;
    /** Non-Visual Properties for a Picture. */
    get nonVisualPictureProperties(): NonVisualPictureProperties | undefined;
    /** Picture Fill. */
    get blipFill(): BlipFill | undefined;
    /** Returns ShapeProperties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ShapeStyle. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Defines the ShowPropertiesExtension Class. Serialized as `p:ext` */
export declare class ShowPropertiesExtension extends OxmlCompositeElement<P14BrowseMode | P14LaserColor | P14ShowMediaControls> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P14BrowseMode. */
    get browseMode(): P14BrowseMode | undefined;
    /** Returns P14LaserColor. */
    get laserColor(): P14LaserColor | undefined;
    /** Returns P14ShowMediaControls. */
    get showMediaControls(): P14ShowMediaControls | undefined;
}
/** Defines the CommonSlideDataExtension Class. Serialized as `p:ext` */
export declare class CommonSlideDataExtension extends OxmlCompositeElement<P14CreationId> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P14CreationId. */
    get creationId(): P14CreationId | undefined;
}
/** Defines the SlideExtension Class. Serialized as `p:ext` */
export declare class SlideExtension extends OxmlCompositeElement<P14LaserTraceList | P14ShowEventRecordList | P188CommentRelationship> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns P14LaserTraceList. */
    get laserTraceList(): P14LaserTraceList | undefined;
    /** Returns P14ShowEventRecordList. */
    get showEventRecordList(): P14ShowEventRecordList | undefined;
    /** Returns P188CommentRelationship. */
    get commentRelationship(): P188CommentRelationship | undefined;
}
/** Defines the PositiveSize2DType Class. */
export declare abstract class PositiveSize2DType extends OxmlLeafElement {
    static _A: string[];
    /** Extent Length. Serialized as `:cx` */
    get cx(): Int64Value | undefined;
    set cx(v: Int64Value | undefined);
    /** Extent Width. Serialized as `:cy` */
    get cy(): Int64Value | undefined;
    set cy(v: Int64Value | undefined);
}
/** Defines the NotesSize Class. Serialized as `p:notesSz` */
export declare class NotesSize extends PositiveSize2DType {
    static _Q: string;
}
/** Grid Spacing. Serialized as `p:gridSpacing` */
export declare class GridSpacing extends PositiveSize2DType {
    static _Q: string;
}
/** Notes View Properties. Serialized as `p:notesViewPr` */
export declare class NotesViewProperties extends OxmlCompositeElement<CommonSlideViewProperties | ExtensionList> {
    static _Q: string;
    /** Common Slide View Properties. */
    get commonSlideViewProperties(): CommonSlideViewProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Slide Sorter View Properties. Serialized as `p:sorterViewPr` */
export declare class SorterViewProperties extends OxmlCompositeElement<CommonViewProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Show Formatting. Serialized as `:showFormatting` */
    get showFormatting(): BooleanValue | undefined;
    set showFormatting(v: BooleanValue | undefined);
    /** Base properties for Slide Sorter View. */
    get commonViewProperties(): CommonViewProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Notes Text View Properties. Serialized as `p:notesTextViewPr` */
export declare class NotesTextViewProperties extends OxmlCompositeElement<CommonViewProperties | ExtensionList> {
    static _Q: string;
    /** Base properties for Notes View. */
    get commonViewProperties(): CommonViewProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Outline View Properties. Serialized as `p:outlineViewPr` */
export declare class OutlineViewProperties extends OxmlCompositeElement<CommonViewProperties | OutlineViewSlideList | ExtensionList> {
    static _Q: string;
    /** Common View Properties. */
    get commonViewProperties(): CommonViewProperties | undefined;
    /** List of Presentation Slides. */
    get outlineViewSlideList(): OutlineViewSlideList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Slide View Properties. Serialized as `p:slideViewPr` */
export declare class SlideViewProperties extends OxmlCompositeElement<CommonSlideViewProperties | ExtensionList> {
    static _Q: string;
    /** Returns CommonSlideViewProperties. */
    get commonSlideViewProperties(): CommonSlideViewProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Normal View Properties. Serialized as `p:normalViewPr` */
export declare class NormalViewProperties extends OxmlCompositeElement<RestoredLeft | RestoredTop | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Show Outline Icons in Normal View. Serialized as `:showOutlineIcons` */
    get showOutlineIcons(): BooleanValue | undefined;
    set showOutlineIcons(v: BooleanValue | undefined);
    /** Snap Vertical Splitter. Serialized as `:snapVertSplitter` */
    get snapVerticalSplitter(): BooleanValue | undefined;
    set snapVerticalSplitter(v: BooleanValue | undefined);
    /** State of the Vertical Splitter Bar. Serialized as `:vertBarState` */
    get verticalBarState(): SplitterBarStateValues | undefined;
    set verticalBarState(v: SplitterBarStateValues | undefined);
    /** State of the Horizontal Splitter Bar. Serialized as `:horzBarState` */
    get horizontalBarState(): SplitterBarStateValues | undefined;
    set horizontalBarState(v: SplitterBarStateValues | undefined);
    /** Prefer Single View. Serialized as `:preferSingleView` */
    get preferSingleView(): BooleanValue | undefined;
    set preferSingleView(v: BooleanValue | undefined);
    /** Normal View Restored Left Properties. */
    get restoredLeft(): RestoredLeft | undefined;
    /** Normal View Restored Top Properties. */
    get restoredTop(): RestoredTop | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the CommonSlideViewProperties Class. Serialized as `p:cSldViewPr` */
export declare class CommonSlideViewProperties extends OxmlCompositeElement<CommonViewProperties | GuideList> {
    static _Q: string;
    static _A: string[];
    /** Snap Objects to Grid. Serialized as `:snapToGrid` */
    get snapToGrid(): BooleanValue | undefined;
    set snapToGrid(v: BooleanValue | undefined);
    /** Snap Objects to Objects. Serialized as `:snapToObjects` */
    get snapToObjects(): BooleanValue | undefined;
    set snapToObjects(v: BooleanValue | undefined);
    /** Show Guides in View. Serialized as `:showGuides` */
    get showGuides(): BooleanValue | undefined;
    set showGuides(v: BooleanValue | undefined);
    /** Base properties for Slide View. */
    get commonViewProperties(): CommonViewProperties | undefined;
    /** List of Guides. */
    get guideList(): GuideList | undefined;
}
/** List of Guides. Serialized as `p:guideLst` */
export declare class GuideList extends OxmlCompositeElement<Guide> {
    static _Q: string;
}
/** A Guide. Serialized as `p:guide` */
export declare class Guide extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Guide Orientation. Serialized as `:orient` */
    get orientation(): DirectionValues | undefined;
    set orientation(v: DirectionValues | undefined);
    /** Guide Position. Serialized as `:pos` */
    get position(): Int32Value | undefined;
    set position(v: Int32Value | undefined);
}
/** List of Presentation Slides. Serialized as `p:sldLst` */
export declare class OutlineViewSlideList extends OxmlCompositeElement<OutlineViewSlideListEntry> {
    static _Q: string;
}
/** Presentation Slide. Serialized as `p:sld` */
export declare class OutlineViewSlideListEntry extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship Identifier. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Collapsed. Serialized as `:collapse` */
    get collapse(): BooleanValue | undefined;
    set collapse(v: BooleanValue | undefined);
}
/** Base properties for Notes View. Serialized as `p:cViewPr` */
export declare class CommonViewProperties extends OxmlCompositeElement<ScaleFactor | Origin> {
    static _Q: string;
    static _A: string[];
    /** Variable Scale. Serialized as `:varScale` */
    get variableScale(): BooleanValue | undefined;
    set variableScale(v: BooleanValue | undefined);
    /** View Scale. */
    get scaleFactor(): ScaleFactor | undefined;
    /** View Origin. */
    get origin(): Origin | undefined;
}
/** Defines the Point2DType Class. */
export declare abstract class Point2DType extends OxmlLeafElement {
    static _A: string[];
    /** X-Axis Coordinate. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Axis Coordinate. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
}
/** Defines the Position Class. Serialized as `p:pos` */
export declare class Position extends Point2DType {
    static _Q: string;
}
/** View Origin. Serialized as `p:origin` */
export declare class Origin extends Point2DType {
    static _Q: string;
}
/** View Scale. Serialized as `p:scale` */
export declare class ScaleFactor extends OxmlCompositeElement<AScaleX | AScaleY> {
    static _Q: string;
    /** Horizontal Ratio. */
    get scaleX(): AScaleX | undefined;
    /** Vertical Ratio. */
    get scaleY(): AScaleY | undefined;
}
/** Defines the NormalViewPortionType Class. */
export declare abstract class NormalViewPortionType extends OxmlLeafElement {
    static _A: string[];
    /** Normal View Dimension Size. Serialized as `:sz` */
    get size(): Int32Value | undefined;
    set size(v: Int32Value | undefined);
    /** Auto Adjust Normal View. Serialized as `:autoAdjust` */
    get autoAdjust(): BooleanValue | undefined;
    set autoAdjust(v: BooleanValue | undefined);
}
/** Normal View Restored Top Properties. Serialized as `p:restoredTop` */
export declare class RestoredTop extends NormalViewPortionType {
    static _Q: string;
}
/** Normal View Restored Left Properties. Serialized as `p:restoredLeft` */
export declare class RestoredLeft extends NormalViewPortionType {
    static _Q: string;
}
/** Programmable Extensibility Tag. Serialized as `p:tag` */
export declare class Tag extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Common slide data for notes slides. Serialized as `p:cSld` */
export declare class CommonSlideData extends OxmlCompositeElement<Background | ShapeTree | CustomerDataList | ControlList | CommonSlideDataExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Slide Background. */
    get background(): Background | undefined;
    /** Shape Tree. */
    get shapeTree(): ShapeTree | undefined;
    /** Customer Data List. */
    get customerDataList(): CustomerDataList | undefined;
    /** List of controls. */
    get controlList(): ControlList | undefined;
    /** Returns CommonSlideDataExtensionList. */
    get commonSlideDataExtensionList(): CommonSlideDataExtensionList | undefined;
}
/** Slide Layout Id. Serialized as `p:sldLayoutId` */
export declare class SlideLayoutId extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** ID Tag. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** ID Tag. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the TextListStyleType Class. */
export declare abstract class TextListStyleType extends OxmlCompositeElement<ADefaultParagraphProperties | ALevel1ParagraphProperties | ALevel2ParagraphProperties | ALevel3ParagraphProperties | ALevel4ParagraphProperties | ALevel5ParagraphProperties | ALevel6ParagraphProperties | ALevel7ParagraphProperties | ALevel8ParagraphProperties | ALevel9ParagraphProperties | AExtensionList> {
    /** Default Paragraph Style. */
    get defaultParagraphProperties(): ADefaultParagraphProperties | undefined;
    /** List Level 1 Text Style. */
    get level1ParagraphProperties(): ALevel1ParagraphProperties | undefined;
    /** List Level 2 Text Style. */
    get level2ParagraphProperties(): ALevel2ParagraphProperties | undefined;
    /** List Level 3 Text Style. */
    get level3ParagraphProperties(): ALevel3ParagraphProperties | undefined;
    /** List Level 4 Text Style. */
    get level4ParagraphProperties(): ALevel4ParagraphProperties | undefined;
    /** List Level 5 Text Style. */
    get level5ParagraphProperties(): ALevel5ParagraphProperties | undefined;
    /** List Level 6 Text Style. */
    get level6ParagraphProperties(): ALevel6ParagraphProperties | undefined;
    /** List Level 7 Text Style. */
    get level7ParagraphProperties(): ALevel7ParagraphProperties | undefined;
    /** List Level 8 Text Style. */
    get level8ParagraphProperties(): ALevel8ParagraphProperties | undefined;
    /** List Level 9 Text Style. */
    get level9ParagraphProperties(): ALevel9ParagraphProperties | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Defines the NotesStyle Class. Serialized as `p:notesStyle` */
export declare class NotesStyle extends TextListStyleType {
    static _Q: string;
}
/** Defines the DefaultTextStyle Class. Serialized as `p:defaultTextStyle` */
export declare class DefaultTextStyle extends TextListStyleType {
    static _Q: string;
}
/** Slide Master Other Text Style. Serialized as `p:otherStyle` */
export declare class OtherStyle extends TextListStyleType {
    static _Q: string;
}
/** Slide Master Body Text Style. Serialized as `p:bodyStyle` */
export declare class BodyStyle extends TextListStyleType {
    static _Q: string;
}
/** Slide Master Title Text Style. Serialized as `p:titleStyle` */
export declare class TitleStyle extends TextListStyleType {
    static _Q: string;
}
/** Non-Visual Group Shape Drawing Properties. Serialized as `p:cNvGrpSpPr` */
export declare class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns AGroupShapeLocks. */
    get groupShapeLocks(): AGroupShapeLocks | undefined;
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** 2D Transform for Graphic Frame. Serialized as `p:xfrm` */
export declare class Transform extends OxmlCompositeElement<AOffset | AExtents> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Horizontal Flip. Serialized as `:flipH` */
    get horizontalFlip(): BooleanValue | undefined;
    set horizontalFlip(v: BooleanValue | undefined);
    /** Vertical Flip. Serialized as `:flipV` */
    get verticalFlip(): BooleanValue | undefined;
    set verticalFlip(v: BooleanValue | undefined);
    /** Offset. */
    get offset(): AOffset | undefined;
    /** Extents. */
    get extents(): AExtents | undefined;
}
/** Non-Visual Properties for a Graphic Frame. Serialized as `p:nvGraphicFramePr` */
export declare class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties | ApplicationNonVisualDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Graphic Frame Drawing Properties. */
    get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined;
    /** Application Non-Visual Drawing Properties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `p:cNvGraphicFramePr` */
export declare class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {
    static _Q: string;
    /** Graphic Frame Locks. */
    get graphicFrameLocks(): AGraphicFrameLocks | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Picture Fill. Serialized as `p:blipFill` */
export declare class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {
    static _Q: string;
    static _A: string[];
    /** DPI Setting. Serialized as `:dpi` */
    get dpi(): UInt32Value | undefined;
    set dpi(v: UInt32Value | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** Returns ABlip. */
    get blip(): ABlip | undefined;
    /** Source Rectangle. */
    get sourceRectangle(): ASourceRectangle | undefined;
}
/** Non-Visual Properties for a Picture. Serialized as `p:nvPicPr` */
export declare class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties | ApplicationNonVisualDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Picture Drawing Properties. */
    get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined;
    /** Returns ApplicationNonVisualDrawingProperties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
}
/** Non-Visual Picture Drawing Properties. Serialized as `p:cNvPicPr` */
export declare class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    get preferRelativeResize(): BooleanValue | undefined;
    set preferRelativeResize(v: BooleanValue | undefined);
    /** Returns APictureLocks. */
    get pictureLocks(): APictureLocks | undefined;
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined;
}
/** Non-Visual Properties for a Connection Shape. Serialized as `p:nvCxnSpPr` */
export declare class NonVisualConnectionShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectorShapeDrawingProperties | ApplicationNonVisualDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Connector Shape Drawing Properties. */
    get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined;
    /** Application Non-Visual Drawing Properties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
}
/** Non-Visual Connector Shape Drawing Properties. Serialized as `p:cNvCxnSpPr` */
export declare class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {
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
/** Shape Text Body. Serialized as `p:txBody` */
export declare class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Shape Style. Serialized as `p:style` */
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
/** Defines the ShapeProperties Class. Serialized as `p:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Non-Visual Properties for a Shape. Serialized as `p:nvSpPr` */
export declare class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties | ApplicationNonVisualDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Drawing Properties for a Shape. */
    get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined;
    /** Application Non-Visual Drawing Properties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
}
/** Application Non-Visual Drawing Properties. Serialized as `p:nvPr` */
export declare class ApplicationNonVisualDrawingProperties extends OxmlCompositeElement<PlaceholderShape | AAudioFromCD | AWaveAudioFile | AAudioFromFile | AVideoFromFile | AQuickTimeFromFile | CustomerDataList | ApplicationNonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Is a Photo Album. Serialized as `:isPhoto` */
    get isPhoto(): BooleanValue | undefined;
    set isPhoto(v: BooleanValue | undefined);
    /** Is User Drawn. Serialized as `:userDrawn` */
    get userDrawn(): BooleanValue | undefined;
    set userDrawn(v: BooleanValue | undefined);
    /** Placeholder Shape. */
    get placeholderShape(): PlaceholderShape | undefined;
}
/** Non-Visual Drawing Properties for a Shape. Serialized as `p:cNvSpPr` */
export declare class NonVisualShapeDrawingProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {
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
/** Non-Visual Drawing Properties. Serialized as `p:cNvPr` */
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
/** Custom Show. Serialized as `p:custShow` */
export declare class CustomShow extends OxmlCompositeElement<SlideList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Custom Show Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Custom Show ID. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** List of Presentation Slides. */
    get slideList(): SlideList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** List of Presentation Slides. Serialized as `p:sldLst` */
export declare class SlideList extends OxmlCompositeElement<SlideListEntry> {
    static _Q: string;
}
/** Embedded Font. Serialized as `p:embeddedFont` */
export declare class EmbeddedFont extends OxmlCompositeElement<Font | RegularFont | BoldFont | ItalicFont | BoldItalicFont> {
    static _Q: string;
    /** Embedded Font Name. */
    get font(): Font | undefined;
    /** Regular Embedded Font. */
    get regularFont(): RegularFont | undefined;
    /** Bold Embedded Font. */
    get boldFont(): BoldFont | undefined;
    /** Italic Embedded Font. */
    get italicFont(): ItalicFont | undefined;
    /** Bold Italic Embedded Font. */
    get boldItalicFont(): BoldItalicFont | undefined;
}
/** Defines the EmbeddedFontDataIdType Class. */
export declare abstract class EmbeddedFontDataIdType extends OxmlLeafElement {
    static _A: string[];
    /** Relationship Identifier. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Bold Italic Embedded Font. Serialized as `p:boldItalic` */
export declare class BoldItalicFont extends EmbeddedFontDataIdType {
    static _Q: string;
}
/** Italic Embedded Font. Serialized as `p:italic` */
export declare class ItalicFont extends EmbeddedFontDataIdType {
    static _Q: string;
}
/** Bold Embedded Font. Serialized as `p:bold` */
export declare class BoldFont extends EmbeddedFontDataIdType {
    static _Q: string;
}
/** Regular Embedded Font. Serialized as `p:regular` */
export declare class RegularFont extends EmbeddedFontDataIdType {
    static _Q: string;
}
/** Embedded Font Name. Serialized as `p:font` */
export declare class Font extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Text Typeface. Serialized as `:typeface` */
    get typeface(): StringValue | undefined;
    set typeface(v: StringValue | undefined);
    /** Panose Setting. Serialized as `:panose` */
    get panose(): HexBinaryValue | undefined;
    set panose(v: HexBinaryValue | undefined);
    /** Similar Font Family. Serialized as `:pitchFamily` */
    get pitchFamily(): SByteValue | undefined;
    set pitchFamily(v: SByteValue | undefined);
    /** Similar Character Set. Serialized as `:charset` */
    get characterSet(): SByteValue | undefined;
    set characterSet(v: SByteValue | undefined);
}
/** Handout Master ID. Serialized as `p:handoutMasterId` */
export declare class HandoutMasterId extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Relationship Identifier. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Notes Master ID. Serialized as `p:notesMasterId` */
export declare class NotesMasterId extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Relationship Identifier. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Slide Master ID. Serialized as `p:sldMasterId` */
export declare class SlideMasterId extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Slide Master Identifier. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Relationship Identifier. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Slide ID. Serialized as `p:sldId` */
export declare class SlideId extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Slide Identifier. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Relationship Identifier. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Embedded Control. Serialized as `p:control` */
export declare class Control extends OxmlCompositeElement<ExtensionList | Picture> {
    static _Q: string;
    static _A: string[];
    /** spid. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** showAsIcon. Serialized as `:showAsIcon` */
    get showAsIcon(): BooleanValue | undefined;
    set showAsIcon(v: BooleanValue | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** imgW. Serialized as `:imgW` */
    get imageWidth(): Int32Value | undefined;
    set imageWidth(v: Int32Value | undefined);
    /** imgH. Serialized as `:imgH` */
    get imageHeight(): Int32Value | undefined;
    set imageHeight(v: Int32Value | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
    /** Returns Picture. */
    get picture(): Picture | undefined;
}
/** Defines the ExtensionList Class. Serialized as `p:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<Extension> {
    static _Q: string;
}
/** Comment. Serialized as `p:cm` */
export declare class Comment extends OxmlCompositeElement<Position | Text | CommentExtensionList> {
    static _Q: string;
    static _A: string[];
    /** authorId. Serialized as `:authorId` */
    get authorId(): UInt32Value | undefined;
    set authorId(v: UInt32Value | undefined);
    /** dt. Serialized as `:dt` */
    get dateTime(): DateTimeValue | undefined;
    set dateTime(v: DateTimeValue | undefined);
    /** idx. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Returns Position. */
    get position(): Position | undefined;
    /** Returns Text. */
    get text(): Text | undefined;
    /** Returns CommentExtensionList. */
    get commentExtensionList(): CommentExtensionList | undefined;
}
/** Comment Author. Serialized as `p:cmAuthor` */
export declare class CommentAuthor extends OxmlCompositeElement<CommentAuthorExtensionList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** initials. Serialized as `:initials` */
    get initials(): StringValue | undefined;
    set initials(v: StringValue | undefined);
    /** lastIdx. Serialized as `:lastIdx` */
    get lastIndex(): UInt32Value | undefined;
    set lastIndex(v: UInt32Value | undefined);
    /** clrIdx. Serialized as `:clrIdx` */
    get colorIndex(): UInt32Value | undefined;
    set colorIndex(v: UInt32Value | undefined);
    /** Returns CommentAuthorExtensionList. */
    get commentAuthorExtensionList(): CommentAuthorExtensionList | undefined;
}
/** Customer Data Tags. Serialized as `p:tags` */
export declare class CustomerDataTags extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship ID. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Customer Data. Serialized as `p:custData` */
export declare class CustomerData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship ID. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Presentation Slide. Serialized as `p:sld` */
export declare class SlideListEntry extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Relationship ID. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the Color3Type Class. */
export declare abstract class Color3Type extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** To. Serialized as `p:to` */
export declare class ToColor extends Color3Type {
    static _Q: string;
}
/** From. Serialized as `p:from` */
export declare class FromColor extends Color3Type {
    static _Q: string;
}
/** By. Serialized as `p:by` */
export declare class ByColor extends OxmlCompositeElement<RgbColor | HslColor> {
    static _Q: string;
    /** RGB. */
    get rgbColor(): RgbColor | undefined;
    /** HSL. */
    get hslColor(): HslColor | undefined;
}
/** Defines the ExtensionListWithModification Class. Serialized as `p:extLst` */
export declare class ExtensionListWithModification extends OxmlCompositeElement<Extension> {
    static _Q: string;
    static _A: string[];
    /** Modify. Serialized as `:mod` */
    get modify(): BooleanValue | undefined;
    set modify(v: BooleanValue | undefined);
}
/** Build List. Serialized as `p:bldLst` */
export declare class BuildList extends OxmlCompositeElement<BuildParagraph | BuildDiagram | BuildOleChart | BuildGraphics> {
    static _Q: string;
}
/** Build Graphics. Serialized as `p:bldGraphic` */
export declare class BuildGraphics extends OxmlCompositeElement<BuildAsOne | BuildSubElement> {
    static _Q: string;
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** Group ID. Serialized as `:grpId` */
    get groupId(): UInt32Value | undefined;
    set groupId(v: UInt32Value | undefined);
    /** Expand UI. Serialized as `:uiExpand` */
    get uiExpand(): BooleanValue | undefined;
    set uiExpand(v: BooleanValue | undefined);
    /** Build As One. */
    get buildAsOne(): BuildAsOne | undefined;
    /** Build Sub Elements. */
    get buildSubElement(): BuildSubElement | undefined;
}
/** Build OLE Chart. Serialized as `p:bldOleChart` */
export declare class BuildOleChart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** Group ID. Serialized as `:grpId` */
    get groupId(): UInt32Value | undefined;
    set groupId(v: UInt32Value | undefined);
    /** Expand UI. Serialized as `:uiExpand` */
    get uiExpand(): BooleanValue | undefined;
    set uiExpand(v: BooleanValue | undefined);
    /** Build. Serialized as `:bld` */
    get build(): OleChartBuildValues | undefined;
    set build(v: OleChartBuildValues | undefined);
    /** Animate Background. Serialized as `:animBg` */
    get animateBackground(): BooleanValue | undefined;
    set animateBackground(v: BooleanValue | undefined);
}
/** Build Diagram. Serialized as `p:bldDgm` */
export declare class BuildDiagram extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** Group ID. Serialized as `:grpId` */
    get groupId(): UInt32Value | undefined;
    set groupId(v: UInt32Value | undefined);
    /** Expand UI. Serialized as `:uiExpand` */
    get uiExpand(): BooleanValue | undefined;
    set uiExpand(v: BooleanValue | undefined);
    /** Diagram Build Types. Serialized as `:bld` */
    get build(): DiagramBuildValues | undefined;
    set build(v: DiagramBuildValues | undefined);
}
/** Build Paragraph. Serialized as `p:bldP` */
export declare class BuildParagraph extends OxmlCompositeElement<TemplateList> {
    static _Q: string;
    static _A: string[];
    /** Shape ID. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** Group ID. Serialized as `:grpId` */
    get groupId(): UInt32Value | undefined;
    set groupId(v: UInt32Value | undefined);
    /** Expand UI. Serialized as `:uiExpand` */
    get uiExpand(): BooleanValue | undefined;
    set uiExpand(v: BooleanValue | undefined);
    /** Build Types. Serialized as `:build` */
    get build(): ParagraphBuildValues | undefined;
    set build(v: ParagraphBuildValues | undefined);
    /** Build Level. Serialized as `:bldLvl` */
    get buildLevel(): UInt32Value | undefined;
    set buildLevel(v: UInt32Value | undefined);
    /** Animate Background. Serialized as `:animBg` */
    get animateBackground(): BooleanValue | undefined;
    set animateBackground(v: BooleanValue | undefined);
    /** Auto Update Animation Background. Serialized as `:autoUpdateAnimBg` */
    get autoAnimateBackground(): BooleanValue | undefined;
    set autoAnimateBackground(v: BooleanValue | undefined);
    /** Reverse. Serialized as `:rev` */
    get reverse(): BooleanValue | undefined;
    set reverse(v: BooleanValue | undefined);
    /** Auto Advance Time. Serialized as `:advAuto` */
    get autoAdvance(): StringValue | undefined;
    set autoAdvance(v: StringValue | undefined);
    /** Template effects. */
    get templateList(): TemplateList | undefined;
}
/** Build Sub Elements. Serialized as `p:bldSub` */
export declare class BuildSubElement extends OxmlCompositeElement<ABuildDiagram | ABuildChart> {
    static _Q: string;
    /** Build Diagram. */
    get buildDiagram(): ABuildDiagram | undefined;
    /** Build Chart. */
    get buildChart(): ABuildChart | undefined;
}
/** Template effects. Serialized as `p:tmplLst` */
export declare class TemplateList extends OxmlCompositeElement<Template> {
    static _Q: string;
}
/** Template Effects. Serialized as `p:tmpl` */
export declare class Template extends OxmlCompositeElement<TimeNodeList> {
    static _Q: string;
    static _A: string[];
    /** Level. Serialized as `:lvl` */
    get level(): UInt32Value | undefined;
    set level(v: UInt32Value | undefined);
    /** Time Node List. */
    get timeNodeList(): TimeNodeList | undefined;
}
/** Time Node List. Serialized as `p:tnLst` */
export declare class TimeNodeList extends OxmlCompositeElement<ParallelTimeNode> {
    static _Q: string;
    /** Returns ParallelTimeNode. */
    get parallelTimeNode(): ParallelTimeNode | undefined;
}
/** Common Media Node Properties. Serialized as `p:cMediaNode` */
export declare class CommonMediaNode extends OxmlCompositeElement<CommonTimeNode | TargetElement> {
    static _Q: string;
    static _A: string[];
    /** Volume. Serialized as `:vol` */
    get volume(): Int32Value | undefined;
    set volume(v: Int32Value | undefined);
    /** Mute. Serialized as `:mute` */
    get mute(): BooleanValue | undefined;
    set mute(v: BooleanValue | undefined);
    /** Number of Slides. Serialized as `:numSld` */
    get slideCount(): UInt32Value | undefined;
    set slideCount(v: UInt32Value | undefined);
    /** Show When Stopped. Serialized as `:showWhenStopped` */
    get showWhenStopped(): BooleanValue | undefined;
    set showWhenStopped(v: BooleanValue | undefined);
    /** Common Time Node Properties. */
    get commonTimeNode(): CommonTimeNode | undefined;
    /** Returns TargetElement. */
    get targetElement(): TargetElement | undefined;
}
/** Defines the TimeListAnimationVariantType Class. */
export declare abstract class TimeListAnimationVariantType extends OxmlCompositeElement<BooleanVariantValue | IntegerVariantValue | FloatVariantValue | StringVariantValue | ColorValue> {
    /** Boolean Variant. */
    get booleanVariantValue(): BooleanVariantValue | undefined;
    /** Integer. */
    get integerVariantValue(): IntegerVariantValue | undefined;
    /** Float Value. */
    get floatVariantValue(): FloatVariantValue | undefined;
    /** String Value. */
    get stringVariantValue(): StringVariantValue | undefined;
    /** Color Value. */
    get colorValue(): ColorValue | undefined;
}
/** Value. Serialized as `p:val` */
export declare class VariantValue extends TimeListAnimationVariantType {
    static _Q: string;
}
/** To. Serialized as `p:to` */
export declare class ToVariantValue extends TimeListAnimationVariantType {
    static _Q: string;
}
/** Progress. Serialized as `p:progress` */
export declare class Progress extends OxmlCompositeElement<FloatVariantValue> {
    static _Q: string;
    /** Float Value. */
    get floatVariantValue(): FloatVariantValue | undefined;
}
/** Defines the CommonBehavior Class. Serialized as `p:cBhvr` */
export declare class CommonBehavior extends OxmlCompositeElement<CommonTimeNode | TargetElement | AttributeNameList> {
    static _Q: string;
    static _A: string[];
    /** Additive. Serialized as `:additive` */
    get additive(): BehaviorAdditiveValues | undefined;
    set additive(v: BehaviorAdditiveValues | undefined);
    /** Accumulate. Serialized as `:accumulate` */
    get accumulate(): BehaviorAccumulateValues | undefined;
    set accumulate(v: BehaviorAccumulateValues | undefined);
    /** Transform Type. Serialized as `:xfrmType` */
    get transformType(): BehaviorTransformValues | undefined;
    set transformType(v: BehaviorTransformValues | undefined);
    /** From. Serialized as `:from` */
    get from(): StringValue | undefined;
    set from(v: StringValue | undefined);
    /** To. Serialized as `:to` */
    get to(): StringValue | undefined;
    set to(v: StringValue | undefined);
    /** By. Serialized as `:by` */
    get by(): StringValue | undefined;
    set by(v: StringValue | undefined);
    /** Runtime Context. Serialized as `:rctx` */
    get runtimeContext(): StringValue | undefined;
    set runtimeContext(v: StringValue | undefined);
    /** Override. Serialized as `:override` */
    get override(): BehaviorOverrideValues | undefined;
    set override(v: BehaviorOverrideValues | undefined);
    /** Returns CommonTimeNode. */
    get commonTimeNode(): CommonTimeNode | undefined;
    /** Target Element. */
    get targetElement(): TargetElement | undefined;
    /** Attribute Name List. */
    get attributeNameList(): AttributeNameList | undefined;
}
/** HSL. Serialized as `p:hsl` */
export declare class HslColor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Hue. Serialized as `:h` */
    get hue(): Int32Value | undefined;
    set hue(v: Int32Value | undefined);
    /** Saturation. Serialized as `:s` */
    get saturation(): Int32Value | undefined;
    set saturation(v: Int32Value | undefined);
    /** Lightness. Serialized as `:l` */
    get lightness(): Int32Value | undefined;
    set lightness(v: Int32Value | undefined);
}
/** RGB. Serialized as `p:rgb` */
export declare class RgbColor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Red. Serialized as `:r` */
    get red(): Int32Value | undefined;
    set red(v: Int32Value | undefined);
    /** Green. Serialized as `:g` */
    get green(): Int32Value | undefined;
    set green(v: Int32Value | undefined);
    /** Blue. Serialized as `:b` */
    get blue(): Int32Value | undefined;
    set blue(v: Int32Value | undefined);
}
/** Time Animate Value. Serialized as `p:tav` */
export declare class TimeAnimateValue extends OxmlCompositeElement<VariantValue> {
    static _Q: string;
    static _A: string[];
    /** Time. Serialized as `:tm` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
    /** Formula. Serialized as `:fmla` */
    get fomula(): StringValue | undefined;
    set fomula(v: StringValue | undefined);
    /** Value. */
    get variantValue(): VariantValue | undefined;
}
/** Defines the ColorType Class. */
export declare abstract class ColorType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Pen Color for Slide Show. Serialized as `p:penClr` */
export declare class PenColor extends ColorType {
    static _Q: string;
}
/** Color Value. Serialized as `p:clrVal` */
export declare class ColorValue extends ColorType {
    static _Q: string;
}
/** String Value. Serialized as `p:strVal` */
export declare class StringVariantValue extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Float Value. Serialized as `p:fltVal` */
export declare class FloatVariantValue extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): SingleValue | undefined;
    set val(v: SingleValue | undefined);
}
/** Integer. Serialized as `p:intVal` */
export declare class IntegerVariantValue extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Boolean Variant. Serialized as `p:boolVal` */
export declare class BooleanVariantValue extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Attribute Name List. Serialized as `p:attrNameLst` */
export declare class AttributeNameList extends OxmlCompositeElement<AttributeName> {
    static _Q: string;
}
/** Defines the Text Class. Serialized as `p:text` */
export declare class Text extends OxmlLeafTextElement {
    static _Q: string;
}
/** Attribute Name. Serialized as `p:attrName` */
export declare class AttributeName extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the TimeListTimeConditionalListType Class. */
export declare abstract class TimeListTimeConditionalListType extends OxmlCompositeElement<Condition> {
}
/** Defines the EndConditionList Class. Serialized as `p:endCondLst` */
export declare class EndConditionList extends TimeListTimeConditionalListType {
    static _Q: string;
}
/** Defines the StartConditionList Class. Serialized as `p:stCondLst` */
export declare class StartConditionList extends TimeListTimeConditionalListType {
    static _Q: string;
}
/** Next Conditions List. Serialized as `p:nextCondLst` */
export declare class NextConditionList extends TimeListTimeConditionalListType {
    static _Q: string;
}
/** Previous Conditions List. Serialized as `p:prevCondLst` */
export declare class PreviousConditionList extends TimeListTimeConditionalListType {
    static _Q: string;
}
/** Parallel TimeNode. Serialized as `p:cTn` */
export declare class CommonTimeNode extends OxmlCompositeElement<StartConditionList | EndConditionList | EndSync | Iterate | ChildTimeNodeList | SubTimeNodeList> {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** presetID. Serialized as `:presetID` */
    get presetId(): Int32Value | undefined;
    set presetId(v: Int32Value | undefined);
    /** presetClass. Serialized as `:presetClass` */
    get presetClass(): TimeNodePresetClassValues | undefined;
    set presetClass(v: TimeNodePresetClassValues | undefined);
    /** presetSubtype. Serialized as `:presetSubtype` */
    get presetSubtype(): Int32Value | undefined;
    set presetSubtype(v: Int32Value | undefined);
    /** dur. Serialized as `:dur` */
    get duration(): StringValue | undefined;
    set duration(v: StringValue | undefined);
    /** repeatCount. Serialized as `:repeatCount` */
    get repeatCount(): StringValue | undefined;
    set repeatCount(v: StringValue | undefined);
    /** repeatDur. Serialized as `:repeatDur` */
    get repeatDuration(): StringValue | undefined;
    set repeatDuration(v: StringValue | undefined);
    /** spd. Serialized as `:spd` */
    get speed(): Int32Value | undefined;
    set speed(v: Int32Value | undefined);
    /** accel. Serialized as `:accel` */
    get acceleration(): Int32Value | undefined;
    set acceleration(v: Int32Value | undefined);
    /** decel. Serialized as `:decel` */
    get deceleration(): Int32Value | undefined;
    set deceleration(v: Int32Value | undefined);
    /** autoRev. Serialized as `:autoRev` */
    get autoReverse(): BooleanValue | undefined;
    set autoReverse(v: BooleanValue | undefined);
    /** restart. Serialized as `:restart` */
    get restart(): TimeNodeRestartValues | undefined;
    set restart(v: TimeNodeRestartValues | undefined);
    /** fill. Serialized as `:fill` */
    get fill(): TimeNodeFillValues | undefined;
    set fill(v: TimeNodeFillValues | undefined);
    /** syncBehavior. Serialized as `:syncBehavior` */
    get syncBehavior(): TimeNodeSyncValues | undefined;
    set syncBehavior(v: TimeNodeSyncValues | undefined);
    /** tmFilter. Serialized as `:tmFilter` */
    get timeFilter(): StringValue | undefined;
    set timeFilter(v: StringValue | undefined);
    /** evtFilter. Serialized as `:evtFilter` */
    get eventFilter(): StringValue | undefined;
    set eventFilter(v: StringValue | undefined);
    /** display. Serialized as `:display` */
    get display(): BooleanValue | undefined;
    set display(v: BooleanValue | undefined);
    /** masterRel. Serialized as `:masterRel` */
    get masterRelation(): TimeNodeMasterRelationValues | undefined;
    set masterRelation(v: TimeNodeMasterRelationValues | undefined);
    /** bldLvl. Serialized as `:bldLvl` */
    get buildLevel(): Int32Value | undefined;
    set buildLevel(v: Int32Value | undefined);
    /** grpId. Serialized as `:grpId` */
    get groupId(): UInt32Value | undefined;
    set groupId(v: UInt32Value | undefined);
    /** afterEffect. Serialized as `:afterEffect` */
    get afterEffect(): BooleanValue | undefined;
    set afterEffect(v: BooleanValue | undefined);
    /** nodeType. Serialized as `:nodeType` */
    get nodeType(): TimeNodeValues | undefined;
    set nodeType(v: TimeNodeValues | undefined);
    /** nodePh. Serialized as `:nodePh` */
    get nodePlaceholder(): BooleanValue | undefined;
    set nodePlaceholder(v: BooleanValue | undefined);
    /** presetBounceEnd. Serialized as `p14:presetBounceEnd` */
    get presetBounceEnd(): Int32Value | undefined;
    set presetBounceEnd(v: Int32Value | undefined);
    /** Returns StartConditionList. */
    get startConditionList(): StartConditionList | undefined;
    /** Returns EndConditionList. */
    get endConditionList(): EndConditionList | undefined;
    /** Returns EndSync. */
    get endSync(): EndSync | undefined;
    /** Returns Iterate. */
    get iterate(): Iterate | undefined;
    /** Returns ChildTimeNodeList. */
    get childTimeNodeList(): ChildTimeNodeList | undefined;
    /** Returns SubTimeNodeList. */
    get subTimeNodeList(): SubTimeNodeList | undefined;
}
/** Video. Serialized as `p:video` */
export declare class Video extends OxmlCompositeElement<CommonMediaNode> {
    static _Q: string;
    static _A: string[];
    /** Full Screen. Serialized as `:fullScrn` */
    get fullScreen(): BooleanValue | undefined;
    set fullScreen(v: BooleanValue | undefined);
    /** Common Media Node Properties. */
    get commonMediaNode(): CommonMediaNode | undefined;
}
/** Audio. Serialized as `p:audio` */
export declare class Audio extends OxmlCompositeElement<CommonMediaNode> {
    static _Q: string;
    static _A: string[];
    /** Is Narration. Serialized as `:isNarration` */
    get isNarration(): BooleanValue | undefined;
    set isNarration(v: BooleanValue | undefined);
    /** Common Media Node Properties. */
    get commonMediaNode(): CommonMediaNode | undefined;
}
/** Set Time Node Behavior. Serialized as `p:set` */
export declare class SetBehavior extends OxmlCompositeElement<CommonBehavior | ToVariantValue> {
    static _Q: string;
    /** Common Behavior. */
    get commonBehavior(): CommonBehavior | undefined;
    /** To. */
    get toVariantValue(): ToVariantValue | undefined;
}
/** Command. Serialized as `p:cmd` */
export declare class Command extends OxmlCompositeElement<CommonBehavior> {
    static _Q: string;
    static _A: string[];
    /** Command Type. Serialized as `:type` */
    get type(): CommandValues | undefined;
    set type(v: CommandValues | undefined);
    /** Command. Serialized as `:cmd` */
    get commandName(): StringValue | undefined;
    set commandName(v: StringValue | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
}
/** Animate Scale. Serialized as `p:animScale` */
export declare class AnimateScale extends OxmlCompositeElement<CommonBehavior | ByPosition | FromPosition | ToPosition> {
    static _Q: string;
    static _A: string[];
    /** zoomContents. Serialized as `:zoomContents` */
    get zoomContents(): BooleanValue | undefined;
    set zoomContents(v: BooleanValue | undefined);
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    get bounceEnd(): Int32Value | undefined;
    set bounceEnd(v: Int32Value | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
    /** Returns ByPosition. */
    get byPosition(): ByPosition | undefined;
    /** Returns FromPosition. */
    get fromPosition(): FromPosition | undefined;
    /** Returns ToPosition. */
    get toPosition(): ToPosition | undefined;
}
/** Animate Rotation. Serialized as `p:animRot` */
export declare class AnimateRotation extends OxmlCompositeElement<CommonBehavior> {
    static _Q: string;
    static _A: string[];
    /** by. Serialized as `:by` */
    get by(): Int32Value | undefined;
    set by(v: Int32Value | undefined);
    /** from. Serialized as `:from` */
    get from(): Int32Value | undefined;
    set from(v: Int32Value | undefined);
    /** to. Serialized as `:to` */
    get to(): Int32Value | undefined;
    set to(v: Int32Value | undefined);
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    get bounceEnd(): Int32Value | undefined;
    set bounceEnd(v: Int32Value | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
}
/** Animate Motion. Serialized as `p:animMotion` */
export declare class AnimateMotion extends OxmlCompositeElement<CommonBehavior | ByPosition | FromPosition | ToPosition | RotationCenter> {
    static _Q: string;
    static _A: string[];
    /** origin. Serialized as `:origin` */
    get origin(): AnimateMotionBehaviorOriginValues | undefined;
    set origin(v: AnimateMotionBehaviorOriginValues | undefined);
    /** path. Serialized as `:path` */
    get path(): StringValue | undefined;
    set path(v: StringValue | undefined);
    /** pathEditMode. Serialized as `:pathEditMode` */
    get pathEditMode(): AnimateMotionPathEditModeValues | undefined;
    set pathEditMode(v: AnimateMotionPathEditModeValues | undefined);
    /** rAng. Serialized as `:rAng` */
    get relativeAngle(): Int32Value | undefined;
    set relativeAngle(v: Int32Value | undefined);
    /** ptsTypes. Serialized as `:ptsTypes` */
    get pointTypes(): StringValue | undefined;
    set pointTypes(v: StringValue | undefined);
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    get bounceEnd(): Int32Value | undefined;
    set bounceEnd(v: Int32Value | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
    /** Returns ByPosition. */
    get byPosition(): ByPosition | undefined;
    /** Returns FromPosition. */
    get fromPosition(): FromPosition | undefined;
    /** Returns ToPosition. */
    get toPosition(): ToPosition | undefined;
    /** Returns RotationCenter. */
    get rotationCenter(): RotationCenter | undefined;
}
/** Animate Effect. Serialized as `p:animEffect` */
export declare class AnimateEffect extends OxmlCompositeElement<CommonBehavior | Progress> {
    static _Q: string;
    static _A: string[];
    /** Transition. Serialized as `:transition` */
    get transition(): AnimateEffectTransitionValues | undefined;
    set transition(v: AnimateEffectTransitionValues | undefined);
    /** Filter. Serialized as `:filter` */
    get filter(): StringValue | undefined;
    set filter(v: StringValue | undefined);
    /** Property List. Serialized as `:prLst` */
    get propertyList(): StringValue | undefined;
    set propertyList(v: StringValue | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
    /** Progress. */
    get progress(): Progress | undefined;
}
/** Animate Color Behavior. Serialized as `p:animClr` */
export declare class AnimateColor extends OxmlCompositeElement<CommonBehavior | ByColor | FromColor | ToColor> {
    static _Q: string;
    static _A: string[];
    /** Color Space. Serialized as `:clrSpc` */
    get colorSpace(): AnimateColorSpaceValues | undefined;
    set colorSpace(v: AnimateColorSpaceValues | undefined);
    /** Direction. Serialized as `:dir` */
    get direction(): AnimateColorDirectionValues | undefined;
    set direction(v: AnimateColorDirectionValues | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
    /** By. */
    get byColor(): ByColor | undefined;
    /** From. */
    get fromColor(): FromColor | undefined;
    /** To. */
    get toColor(): ToColor | undefined;
}
/** Animate. Serialized as `p:anim` */
export declare class Animate extends OxmlCompositeElement<CommonBehavior | TimeAnimateValueList> {
    static _Q: string;
    static _A: string[];
    /** by. Serialized as `:by` */
    get by(): StringValue | undefined;
    set by(v: StringValue | undefined);
    /** from. Serialized as `:from` */
    get from(): StringValue | undefined;
    set from(v: StringValue | undefined);
    /** to. Serialized as `:to` */
    get to(): StringValue | undefined;
    set to(v: StringValue | undefined);
    /** calcmode. Serialized as `:calcmode` */
    get calculationMode(): AnimateBehaviorCalculateModeValues | undefined;
    set calculationMode(v: AnimateBehaviorCalculateModeValues | undefined);
    /** valueType. Serialized as `:valueType` */
    get valueType(): AnimateBehaviorValues | undefined;
    set valueType(v: AnimateBehaviorValues | undefined);
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    get bounceEnd(): Int32Value | undefined;
    set bounceEnd(v: Int32Value | undefined);
    /** Returns CommonBehavior. */
    get commonBehavior(): CommonBehavior | undefined;
    /** Returns TimeAnimateValueList. */
    get timeAnimateValueList(): TimeAnimateValueList | undefined;
}
/** Exclusive. Serialized as `p:excl` */
export declare class ExclusiveTimeNode extends OxmlCompositeElement<CommonTimeNode> {
    static _Q: string;
    /** Common TimeNode Properties. */
    get commonTimeNode(): CommonTimeNode | undefined;
}
/** Sequence Time Node. Serialized as `p:seq` */
export declare class SequenceTimeNode extends OxmlCompositeElement<CommonTimeNode | PreviousConditionList | NextConditionList> {
    static _Q: string;
    static _A: string[];
    /** Concurrent. Serialized as `:concurrent` */
    get concurrent(): BooleanValue | undefined;
    set concurrent(v: BooleanValue | undefined);
    /** Previous Action. Serialized as `:prevAc` */
    get previousAction(): PreviousActionValues | undefined;
    set previousAction(v: PreviousActionValues | undefined);
    /** Next Action. Serialized as `:nextAc` */
    get nextAction(): NextActionValues | undefined;
    set nextAction(v: NextActionValues | undefined);
    /** Common TimeNode Properties. */
    get commonTimeNode(): CommonTimeNode | undefined;
    /** Previous Conditions List. */
    get previousConditionList(): PreviousConditionList | undefined;
    /** Next Conditions List. */
    get nextConditionList(): NextConditionList | undefined;
}
/** Parallel Time Node. Serialized as `p:par` */
export declare class ParallelTimeNode extends OxmlCompositeElement<CommonTimeNode> {
    static _Q: string;
    /** Parallel TimeNode. */
    get commonTimeNode(): CommonTimeNode | undefined;
}
/** Defines the TimeListConditionalType Class. */
export declare abstract class TimeListConditionalType extends OxmlCompositeElement<TargetElement | TimeNode | RuntimeNodeTrigger> {
    static _A: string[];
    /** Trigger Event. Serialized as `:evt` */
    get event(): TriggerEventValues | undefined;
    set event(v: TriggerEventValues | undefined);
    /** Trigger Delay. Serialized as `:delay` */
    get delay(): StringValue | undefined;
    set delay(v: StringValue | undefined);
    /** Target Element Trigger Choice. */
    get targetElement(): TargetElement | undefined;
    /** Time Node. */
    get timeNode(): TimeNode | undefined;
    /** Runtime Node Trigger Choice. */
    get runtimeNodeTrigger(): RuntimeNodeTrigger | undefined;
}
/** Defines the EndSync Class. Serialized as `p:endSync` */
export declare class EndSync extends TimeListConditionalType {
    static _Q: string;
}
/** Condition. Serialized as `p:cond` */
export declare class Condition extends TimeListConditionalType {
    static _Q: string;
}
/** Runtime Node Trigger Choice. Serialized as `p:rtn` */
export declare class RuntimeNodeTrigger extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): TriggerRuntimeNodeValues | undefined;
    set val(v: TriggerRuntimeNodeValues | undefined);
}
/** Time Node. Serialized as `p:tn` */
export declare class TimeNode extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Target Element Trigger Choice. Serialized as `p:tgtEl` */
export declare class TargetElement extends OxmlCompositeElement<SlideTarget | SoundTarget | ShapeTarget | InkTarget | P14BookmarkTarget> {
    static _Q: string;
    /** Slide Target. */
    get slideTarget(): SlideTarget | undefined;
    /** Sound Target. */
    get soundTarget(): SoundTarget | undefined;
    /** Shape Target. */
    get shapeTarget(): ShapeTarget | undefined;
    /** Ink Target. */
    get inkTarget(): InkTarget | undefined;
    /** Returns P14BookmarkTarget. */
    get bookmarkTarget(): P14BookmarkTarget | undefined;
}
/** Time Percentage. Serialized as `p:tmPct` */
export declare class TimePercentage extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Time Absolute. Serialized as `p:tmAbs` */
export declare class TimeAbsolute extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Time. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Start Sound Action. Serialized as `p:stSnd` */
export declare class StartSoundAction extends OxmlCompositeElement<Sound> {
    static _Q: string;
    static _A: string[];
    /** Loop Sound. Serialized as `:loop` */
    get loop(): BooleanValue | undefined;
    set loop(v: BooleanValue | undefined);
    /** Sound. */
    get sound(): Sound | undefined;
}
/** Defines the EmbeddedWavAudioFileType Class. */
export declare abstract class EmbeddedWavAudioFileType extends OxmlLeafElement {
    static _A: string[];
    /** Embedded Audio File Relationship ID. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Sound Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Recognized Built-In Sound. Serialized as `:builtIn` */
    get builtIn(): BooleanValue | undefined;
    set builtIn(v: BooleanValue | undefined);
}
/** Sound Target. Serialized as `p:sndTgt` */
export declare class SoundTarget extends EmbeddedWavAudioFileType {
    static _Q: string;
}
/** Sound. Serialized as `p:snd` */
export declare class Sound extends EmbeddedWavAudioFileType {
    static _Q: string;
}
/** Defines the ContentPart Class. Serialized as `p:contentPart` */
export declare class ContentPart extends OxmlCompositeElement<P14NonVisualContentPartProperties | P14Transform2D | P14ExtensionListModify> {
    static _Q: string;
    static _A: string[];
    /** bwMode. Serialized as `p14:bwMode` */
    get bwMode(): BlackWhiteModeValues | undefined;
    set bwMode(v: BlackWhiteModeValues | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns P14NonVisualContentPartProperties. */
    get nonVisualContentPartProperties(): P14NonVisualContentPartProperties | undefined;
    /** Returns P14Transform2D. */
    get transform2D(): P14Transform2D | undefined;
    /** Returns P14ExtensionListModify. */
    get extensionListModify(): P14ExtensionListModify | undefined;
}
/** Presentation-wide View Properties. Serialized as `p:viewPr` */
export declare class ViewProperties extends OxmlPartRootElement<NormalViewProperties | SlideViewProperties | OutlineViewProperties | NotesTextViewProperties | SorterViewProperties | NotesViewProperties | GridSpacing | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Last View. Serialized as `:lastView` */
    get lastView(): ViewValues | undefined;
    set lastView(v: ViewValues | undefined);
    /** Show Comments. Serialized as `:showComments` */
    get showComments(): BooleanValue | undefined;
    set showComments(v: BooleanValue | undefined);
    /** Normal View Properties. */
    get normalViewProperties(): NormalViewProperties | undefined;
    /** Slide View Properties. */
    get slideViewProperties(): SlideViewProperties | undefined;
    /** Outline View Properties. */
    get outlineViewProperties(): OutlineViewProperties | undefined;
    /** Notes Text View Properties. */
    get notesTextViewProperties(): NotesTextViewProperties | undefined;
    /** Slide Sorter View Properties. */
    get sorterViewProperties(): SorterViewProperties | undefined;
    /** Notes View Properties. */
    get notesViewProperties(): NotesViewProperties | undefined;
    /** Grid Spacing. */
    get gridSpacing(): GridSpacing | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Programmable Tab List. Serialized as `p:tagLst` */
export declare class TagList extends OxmlPartRootElement<Tag> {
    static _Q: string;
}
/** Slide Synchronization Properties. Serialized as `p:sldSyncPr` */
export declare class SlideSyncProperties extends OxmlPartRootElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Server's Slide File ID. Serialized as `:serverSldId` */
    get serverSlideId(): StringValue | undefined;
    set serverSlideId(v: StringValue | undefined);
    /** Server's Slide File's modification date/time. Serialized as `:serverSldModifiedTime` */
    get serverSlideModifiedTime(): DateTimeValue | undefined;
    set serverSlideModifiedTime(v: DateTimeValue | undefined);
    /** Client Slide Insertion date/time. Serialized as `:clientInsertedTime` */
    get clientInsertedTime(): DateTimeValue | undefined;
    set clientInsertedTime(v: DateTimeValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Notes Slide. Serialized as `p:notes` */
export declare class NotesSlide extends OxmlPartRootElement<CommonSlideData | ColorMapOverride | ExtensionListWithModification> {
    static _Q: string;
    static _A: string[];
    /** Show Master Shapes. Serialized as `:showMasterSp` */
    get showMasterShapes(): BooleanValue | undefined;
    set showMasterShapes(v: BooleanValue | undefined);
    /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
    get showMasterPlaceholderAnimations(): BooleanValue | undefined;
    set showMasterPlaceholderAnimations(v: BooleanValue | undefined);
    /** Common slide data for notes slides. */
    get commonSlideData(): CommonSlideData | undefined;
    /** Color Scheme Map Override. */
    get colorMapOverride(): ColorMapOverride | undefined;
    /** Returns ExtensionListWithModification. */
    get extensionListWithModification(): ExtensionListWithModification | undefined;
}
/** Notes Master. Serialized as `p:notesMaster` */
export declare class NotesMaster extends OxmlPartRootElement<CommonSlideData | ColorMap | HeaderFooter | NotesStyle | NotesMasterExtensionList> {
    static _Q: string;
    /** Returns CommonSlideData. */
    get commonSlideData(): CommonSlideData | undefined;
    /** Color Scheme Map. */
    get colorMap(): ColorMap | undefined;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
    /** Returns NotesStyle. */
    get notesStyle(): NotesStyle | undefined;
    /** Returns NotesMasterExtensionList. */
    get notesMasterExtensionList(): NotesMasterExtensionList | undefined;
}
/** Handout Master. Serialized as `p:handoutMaster` */
export declare class HandoutMaster extends OxmlPartRootElement<CommonSlideData | ColorMap | HeaderFooter | HandoutMasterExtensionList> {
    static _Q: string;
    /** Returns CommonSlideData. */
    get commonSlideData(): CommonSlideData | undefined;
    /** Color Scheme Map. */
    get colorMap(): ColorMap | undefined;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
    /** Returns HandoutMasterExtensionList. */
    get handoutMasterExtensionList(): HandoutMasterExtensionList | undefined;
}
/** Slide Master. Serialized as `p:sldMaster` */
export declare class SlideMaster extends OxmlPartRootElement<CommonSlideData | ColorMap | SlideLayoutIdList | Transition | Timing | HeaderFooter | TextStyles | SlideMasterExtensionList> {
    static _Q: string;
    static _A: string[];
    /** preserve. Serialized as `:preserve` */
    get preserve(): BooleanValue | undefined;
    set preserve(v: BooleanValue | undefined);
    /** Returns CommonSlideData. */
    get commonSlideData(): CommonSlideData | undefined;
    /** Color Scheme Map. */
    get colorMap(): ColorMap | undefined;
    /** Returns SlideLayoutIdList. */
    get slideLayoutIdList(): SlideLayoutIdList | undefined;
    /** Returns Transition. */
    get transition(): Transition | undefined;
    /** Returns Timing. */
    get timing(): Timing | undefined;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
    /** Returns TextStyles. */
    get textStyles(): TextStyles | undefined;
    /** Returns SlideMasterExtensionList. */
    get slideMasterExtensionList(): SlideMasterExtensionList | undefined;
}
/** Slide Layout. Serialized as `p:sldLayout` */
export declare class SlideLayout extends OxmlPartRootElement<CommonSlideData | ColorMapOverride | Transition | Timing | HeaderFooter | SlideLayoutExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Show Master Shapes. Serialized as `:showMasterSp` */
    get showMasterShapes(): BooleanValue | undefined;
    set showMasterShapes(v: BooleanValue | undefined);
    /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
    get showMasterPlaceholderAnimations(): BooleanValue | undefined;
    set showMasterPlaceholderAnimations(v: BooleanValue | undefined);
    /** matchingName. Serialized as `:matchingName` */
    get matchingName(): StringValue | undefined;
    set matchingName(v: StringValue | undefined);
    /** type. Serialized as `:type` */
    get type(): SlideLayoutValues | undefined;
    set type(v: SlideLayoutValues | undefined);
    /** preserve. Serialized as `:preserve` */
    get preserve(): BooleanValue | undefined;
    set preserve(v: BooleanValue | undefined);
    /** userDrawn. Serialized as `:userDrawn` */
    get userDrawn(): BooleanValue | undefined;
    set userDrawn(v: BooleanValue | undefined);
    /** Returns CommonSlideData. */
    get commonSlideData(): CommonSlideData | undefined;
    /** Color Scheme Map Override. */
    get colorMapOverride(): ColorMapOverride | undefined;
    /** Returns Transition. */
    get transition(): Transition | undefined;
    /** Returns Timing. */
    get timing(): Timing | undefined;
    /** Returns HeaderFooter. */
    get headerFooter(): HeaderFooter | undefined;
    /** Returns SlideLayoutExtensionList. */
    get slideLayoutExtensionList(): SlideLayoutExtensionList | undefined;
}
/** Presentation Slide. Serialized as `p:sld` */
export declare class Slide extends OxmlPartRootElement<CommonSlideData | ColorMapOverride | Transition | Timing | SlideExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Show Master Shapes. Serialized as `:showMasterSp` */
    get showMasterShapes(): BooleanValue | undefined;
    set showMasterShapes(v: BooleanValue | undefined);
    /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
    get showMasterPlaceholderAnimations(): BooleanValue | undefined;
    set showMasterPlaceholderAnimations(v: BooleanValue | undefined);
    /** Show Slide in Slide Show. Serialized as `:show` */
    get show(): BooleanValue | undefined;
    set show(v: BooleanValue | undefined);
    /** Common slide data for slides. */
    get commonSlideData(): CommonSlideData | undefined;
    /** Color Scheme Map Override. */
    get colorMapOverride(): ColorMapOverride | undefined;
    /** Slide Transition. */
    get transition(): Transition | undefined;
    /** Slide Timing Information for a Slide. */
    get timing(): Timing | undefined;
    /** Returns SlideExtensionList. */
    get slideExtensionList(): SlideExtensionList | undefined;
}
/** Presentation-wide Properties. Serialized as `p:presentationPr` */
export declare class PresentationProperties extends OxmlPartRootElement<HtmlPublishProperties | WebProperties | PrintingProperties | ShowProperties | ColorMostRecentlyUsed | PresentationPropertiesExtensionList> {
    static _Q: string;
    /** HTML Publishing Properties. */
    get htmlPublishProperties(): HtmlPublishProperties | undefined;
    /** Web Properties. */
    get webProperties(): WebProperties | undefined;
    /** Returns PrintingProperties. */
    get printingProperties(): PrintingProperties | undefined;
    /** Returns ShowProperties. */
    get showProperties(): ShowProperties | undefined;
    /** Returns ColorMostRecentlyUsed. */
    get colorMostRecentlyUsed(): ColorMostRecentlyUsed | undefined;
    /** Returns PresentationPropertiesExtensionList. */
    get presentationPropertiesExtensionList(): PresentationPropertiesExtensionList | undefined;
}
/** Presentation. Serialized as `p:presentation` */
export declare class Presentation extends OxmlPartRootElement<SlideMasterIdList | NotesMasterIdList | HandoutMasterIdList | SlideIdList | SlideSize | NotesSize | EmbeddedFontList | CustomShowList | PhotoAlbum | CustomerDataList | Kinsoku | DefaultTextStyle | ModificationVerifier | PresentationExtensionList> {
    static _Q: string;
    static _A: string[];
    /** serverZoom. Serialized as `:serverZoom` */
    get serverZoom(): Int32Value | undefined;
    set serverZoom(v: Int32Value | undefined);
    /** firstSlideNum. Serialized as `:firstSlideNum` */
    get firstSlideNum(): Int32Value | undefined;
    set firstSlideNum(v: Int32Value | undefined);
    /** showSpecialPlsOnTitleSld. Serialized as `:showSpecialPlsOnTitleSld` */
    get showSpecialPlaceholderOnTitleSlide(): BooleanValue | undefined;
    set showSpecialPlaceholderOnTitleSlide(v: BooleanValue | undefined);
    /** rtl. Serialized as `:rtl` */
    get rightToLeft(): BooleanValue | undefined;
    set rightToLeft(v: BooleanValue | undefined);
    /** removePersonalInfoOnSave. Serialized as `:removePersonalInfoOnSave` */
    get removePersonalInfoOnSave(): BooleanValue | undefined;
    set removePersonalInfoOnSave(v: BooleanValue | undefined);
    /** compatMode. Serialized as `:compatMode` */
    get compatibilityMode(): BooleanValue | undefined;
    set compatibilityMode(v: BooleanValue | undefined);
    /** strictFirstAndLastChars. Serialized as `:strictFirstAndLastChars` */
    get strictFirstAndLastChars(): BooleanValue | undefined;
    set strictFirstAndLastChars(v: BooleanValue | undefined);
    /** embedTrueTypeFonts. Serialized as `:embedTrueTypeFonts` */
    get embedTrueTypeFonts(): BooleanValue | undefined;
    set embedTrueTypeFonts(v: BooleanValue | undefined);
    /** saveSubsetFonts. Serialized as `:saveSubsetFonts` */
    get saveSubsetFonts(): BooleanValue | undefined;
    set saveSubsetFonts(v: BooleanValue | undefined);
    /** autoCompressPictures. Serialized as `:autoCompressPictures` */
    get autoCompressPictures(): BooleanValue | undefined;
    set autoCompressPictures(v: BooleanValue | undefined);
    /** bookmarkIdSeed. Serialized as `:bookmarkIdSeed` */
    get bookmarkIdSeed(): UInt32Value | undefined;
    set bookmarkIdSeed(v: UInt32Value | undefined);
    /** conformance. Serialized as `:conformance` */
    get conformance(): ConformanceClassValues | undefined;
    set conformance(v: ConformanceClassValues | undefined);
    /** Returns SlideMasterIdList. */
    get slideMasterIdList(): SlideMasterIdList | undefined;
    /** Returns NotesMasterIdList. */
    get notesMasterIdList(): NotesMasterIdList | undefined;
    /** Returns HandoutMasterIdList. */
    get handoutMasterIdList(): HandoutMasterIdList | undefined;
    /** Returns SlideIdList. */
    get slideIdList(): SlideIdList | undefined;
    /** Returns SlideSize. */
    get slideSize(): SlideSize | undefined;
    /** Returns NotesSize. */
    get notesSize(): NotesSize | undefined;
    /** Returns EmbeddedFontList. */
    get embeddedFontList(): EmbeddedFontList | undefined;
    /** Returns CustomShowList. */
    get customShowList(): CustomShowList | undefined;
    /** Returns PhotoAlbum. */
    get photoAlbum(): PhotoAlbum | undefined;
    /** Returns CustomerDataList. */
    get customerDataList(): CustomerDataList | undefined;
    /** Returns Kinsoku. */
    get kinsoku(): Kinsoku | undefined;
    /** Returns DefaultTextStyle. */
    get defaultTextStyle(): DefaultTextStyle | undefined;
    /** Returns ModificationVerifier. */
    get modificationVerifier(): ModificationVerifier | undefined;
    /** Returns PresentationExtensionList. */
    get presentationExtensionList(): PresentationExtensionList | undefined;
}
/** Global Element for OLE Objects and Controls. Serialized as `p:oleObj` */
export declare class OleObject extends OxmlCompositeElement<OleObjectEmbed | OleObjectLink | Picture> {
    static _Q: string;
    static _A: string[];
    /** spid. Serialized as `:spid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** showAsIcon. Serialized as `:showAsIcon` */
    get showAsIcon(): BooleanValue | undefined;
    set showAsIcon(v: BooleanValue | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** imgW. Serialized as `:imgW` */
    get imageWidth(): Int32Value | undefined;
    set imageWidth(v: Int32Value | undefined);
    /** imgH. Serialized as `:imgH` */
    get imageHeight(): Int32Value | undefined;
    set imageHeight(v: Int32Value | undefined);
    /** progId. Serialized as `:progId` */
    get progId(): StringValue | undefined;
    set progId(v: StringValue | undefined);
}
/** Comment List. Serialized as `p:cmLst` */
export declare class CommentList extends OxmlPartRootElement<Comment> {
    static _Q: string;
}
/** List of Comment Authors. Serialized as `p:cmAuthorLst` */
export declare class CommentAuthorList extends OxmlPartRootElement<CommentAuthor> {
    static _Q: string;
}
/** Background Style Reference. Serialized as `p:bgRef` */
export declare class BackgroundStyleReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _Q: string;
    static _A: string[];
    /** Style Matrix Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Background Properties. Serialized as `p:bgPr` */
export declare class BackgroundProperties extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AEffectList | AEffectDag | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Shade to Title. Serialized as `:shadeToTitle` */
    get shadeToTitle(): BooleanValue | undefined;
    set shadeToTitle(v: BooleanValue | undefined);
}
/** Color Scheme Map Override. Serialized as `p:clrMapOvr` */
export declare class ColorMapOverride extends OxmlCompositeElement<AMasterColorMapping | AOverrideColorMapping> {
    static _Q: string;
    /** Master Color Mapping. */
    get masterColorMapping(): AMasterColorMapping | undefined;
    /** Override Color Mapping. */
    get overrideColorMapping(): AOverrideColorMapping | undefined;
}
/** Color Scheme Map. Serialized as `p:clrMap` */
export declare class ColorMap extends OxmlCompositeElement<AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Background 1. Serialized as `:bg1` */
    get background1(): ColorSchemeIndexValues | undefined;
    set background1(v: ColorSchemeIndexValues | undefined);
    /** Text 1. Serialized as `:tx1` */
    get text1(): ColorSchemeIndexValues | undefined;
    set text1(v: ColorSchemeIndexValues | undefined);
    /** Background 2. Serialized as `:bg2` */
    get background2(): ColorSchemeIndexValues | undefined;
    set background2(v: ColorSchemeIndexValues | undefined);
    /** Text 2. Serialized as `:tx2` */
    get text2(): ColorSchemeIndexValues | undefined;
    set text2(v: ColorSchemeIndexValues | undefined);
    /** Accent 1. Serialized as `:accent1` */
    get accent1(): ColorSchemeIndexValues | undefined;
    set accent1(v: ColorSchemeIndexValues | undefined);
    /** Accent 2. Serialized as `:accent2` */
    get accent2(): ColorSchemeIndexValues | undefined;
    set accent2(v: ColorSchemeIndexValues | undefined);
    /** Accent 3. Serialized as `:accent3` */
    get accent3(): ColorSchemeIndexValues | undefined;
    set accent3(v: ColorSchemeIndexValues | undefined);
    /** Accent 4. Serialized as `:accent4` */
    get accent4(): ColorSchemeIndexValues | undefined;
    set accent4(v: ColorSchemeIndexValues | undefined);
    /** Accent 5. Serialized as `:accent5` */
    get accent5(): ColorSchemeIndexValues | undefined;
    set accent5(v: ColorSchemeIndexValues | undefined);
    /** Accent 6. Serialized as `:accent6` */
    get accent6(): ColorSchemeIndexValues | undefined;
    set accent6(v: ColorSchemeIndexValues | undefined);
    /** Hyperlink. Serialized as `:hlink` */
    get hyperlink(): ColorSchemeIndexValues | undefined;
    set hyperlink(v: ColorSchemeIndexValues | undefined);
    /** Followed Hyperlink. Serialized as `:folHlink` */
    get followedHyperlink(): ColorSchemeIndexValues | undefined;
    set followedHyperlink(v: ColorSchemeIndexValues | undefined);
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Kiosk Slide Show Mode. Serialized as `p:kiosk` */
export declare class KioskSlideMode extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Restart Show. Serialized as `:restart` */
    get restart(): UInt32Value | undefined;
    set restart(v: UInt32Value | undefined);
}
/** Browse Slide Show Mode. Serialized as `p:browse` */
export declare class BrowseSlideMode extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Show Scroll Bar in Window. Serialized as `:showScrollbar` */
    get showScrollbar(): BooleanValue | undefined;
    set showScrollbar(v: BooleanValue | undefined);
}
/** Extension. Serialized as `p:ext` */
export declare class Extension extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Custom Show. Serialized as `p:custShow` */
export declare class CustomShowReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Custom Show Identifier. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
}
/** Defines the IndexRangeType Class. */
export declare abstract class IndexRangeType extends OxmlLeafElement {
    static _A: string[];
    /** Start. Serialized as `:st` */
    get start(): UInt32Value | undefined;
    set start(v: UInt32Value | undefined);
    /** End. Serialized as `:end` */
    get end(): UInt32Value | undefined;
    set end(v: UInt32Value | undefined);
}
/** Paragraph Text Range. Serialized as `p:pRg` */
export declare class ParagraphIndexRange extends IndexRangeType {
    static _Q: string;
}
/** Character Range. Serialized as `p:charRg` */
export declare class CharRange extends IndexRangeType {
    static _Q: string;
}
/** Slide Range. Serialized as `p:sldRg` */
export declare class SlideRange extends IndexRangeType {
    static _Q: string;
}
/** Defines the EmptyType Class. */
export declare abstract class EmptyType extends OxmlLeafElement {
}
/** Defines the WedgeTransition Class. Serialized as `p:wedge` */
export declare class WedgeTransition extends EmptyType {
    static _Q: string;
}
/** Defines the RandomTransition Class. Serialized as `p:random` */
export declare class RandomTransition extends EmptyType {
    static _Q: string;
}
/** Defines the PlusTransition Class. Serialized as `p:plus` */
export declare class PlusTransition extends EmptyType {
    static _Q: string;
}
/** Defines the NewsflashTransition Class. Serialized as `p:newsflash` */
export declare class NewsflashTransition extends EmptyType {
    static _Q: string;
}
/** Defines the DiamondTransition Class. Serialized as `p:diamond` */
export declare class DiamondTransition extends EmptyType {
    static _Q: string;
}
/** Defines the DissolveTransition Class. Serialized as `p:dissolve` */
export declare class DissolveTransition extends EmptyType {
    static _Q: string;
}
/** Defines the CircleTransition Class. Serialized as `p:circle` */
export declare class CircleTransition extends EmptyType {
    static _Q: string;
}
/** Background. Serialized as `p:bg` */
export declare class BackgroundAnimation extends EmptyType {
    static _Q: string;
}
/** Slide Target. Serialized as `p:sldTgt` */
export declare class SlideTarget extends EmptyType {
    static _Q: string;
}
/** Build As One. Serialized as `p:bldAsOne` */
export declare class BuildAsOne extends EmptyType {
    static _Q: string;
}
/** Stop Sound Action. Serialized as `p:endSnd` */
export declare class EndSoundAction extends EmptyType {
    static _Q: string;
}
/** Presenter Slide Show Mode. Serialized as `p:present` */
export declare class PresenterSlideMode extends EmptyType {
    static _Q: string;
}
/** All Slides. Serialized as `p:sldAll` */
export declare class SlideAll extends EmptyType {
    static _Q: string;
}
export declare function initPresentationNamespace(): {
    prefix: string;
    xmlns: string;
};
