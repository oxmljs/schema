import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
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
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../Drawing';
import { ColorSchemeIndexValues, ColorSchemeIndexValuesArray } from '../Drawing';import { Diagram as ADiagram } from '../Drawing';
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


export enum TransitionSlideDirectionValues {
    /** Transition Slide Direction Enum ( Left ). Serialized value: `l` */
    Left = 'l',
    /** Transition Slide Direction Enum ( Up ). Serialized value: `u` */
    Up = 'u',
    /** Transition Slide Direction ( Right ). Serialized value: `r` */
    Right = 'r',
    /** Transition Slide Direction Enum ( Down ). Serialized value: `d` */
    Down = 'd',
}

export const TransitionSlideDirectionValuesArray = [
    TransitionSlideDirectionValues.Left,
    TransitionSlideDirectionValues.Up,
    TransitionSlideDirectionValues.Right,
    TransitionSlideDirectionValues.Down,
] as const;

export enum TransitionCornerDirectionValues {
    /** Transition Corner Direction Enum ( Left-Up ). Serialized value: `lu` */
    LeftUp = 'lu',
    /** Transition Corner Direction Enum ( Right-Up ). Serialized value: `ru` */
    RightUp = 'ru',
    /** Transition Corner Direction Enum ( Left-Down ). Serialized value: `ld` */
    LeftDown = 'ld',
    /** Transition Corner Direction Enum ( Right-Down ). Serialized value: `rd` */
    RightDown = 'rd',
}

export const TransitionCornerDirectionValuesArray = [
    TransitionCornerDirectionValues.LeftUp,
    TransitionCornerDirectionValues.RightUp,
    TransitionCornerDirectionValues.LeftDown,
    TransitionCornerDirectionValues.RightDown,
] as const;

export enum TransitionInOutDirectionValues {
    /** Transition In/Out Direction Enum ( Out ). Serialized value: `out` */
    Out = 'out',
    /** Transition In/Out Direction Enum ( In ). Serialized value: `in` */
    In = 'in',
}

export const TransitionInOutDirectionValuesArray = [
    TransitionInOutDirectionValues.Out,
    TransitionInOutDirectionValues.In,
] as const;

export enum TransitionSpeedValues {
    /** low. Serialized value: `slow` */
    Slow = 'slow',
    /** Medium. Serialized value: `med` */
    Medium = 'med',
    /** Fast. Serialized value: `fast` */
    Fast = 'fast',
}

export const TransitionSpeedValuesArray = [
    TransitionSpeedValues.Slow,
    TransitionSpeedValues.Medium,
    TransitionSpeedValues.Fast,
] as const;

export enum IndefiniteTimeDeclarationValues {
    /** Indefinite Type Enum. Serialized value: `indefinite` */
    Indefinite = 'indefinite',
}

export const IndefiniteTimeDeclarationValuesArray = [
    IndefiniteTimeDeclarationValues.Indefinite,
] as const;

export enum IterateValues {
    /** Element. Serialized value: `el` */
    Element = 'el',
    /** Word. Serialized value: `wd` */
    Word = 'wd',
    /** Letter. Serialized value: `lt` */
    Letter = 'lt',
}

export const IterateValuesArray = [
    IterateValues.Element,
    IterateValues.Word,
    IterateValues.Letter,
] as const;

export enum ChartSubElementValues {
    /** Chart Build Element Type Enum ( Grid Legend ). Serialized value: `gridLegend` */
    GridLegend = 'gridLegend',
    /** Chart Build Element Type Enum ( Series ). Serialized value: `series` */
    Series = 'series',
    /** Chart Build Element Type Enum ( Category ). Serialized value: `category` */
    Category = 'category',
    /** Chart Build Element Type Enum ( Point in Series ). Serialized value: `ptInSeries` */
    PointInSeries = 'ptInSeries',
    /** Chart Build Element Type Enum ( Point in Cat ). Serialized value: `ptInCategory` */
    PointInCategory = 'ptInCategory',
}

export const ChartSubElementValuesArray = [
    ChartSubElementValues.GridLegend,
    ChartSubElementValues.Series,
    ChartSubElementValues.Category,
    ChartSubElementValues.PointInSeries,
    ChartSubElementValues.PointInCategory,
] as const;

export enum TriggerRuntimeNodeValues {
    /** Trigger RunTime Node ( First ). Serialized value: `first` */
    First = 'first',
    /** Trigger RunTime Node ( Last ). Serialized value: `last` */
    Last = 'last',
    /** Trigger RunTime Node Enum ( All ). Serialized value: `all` */
    All = 'all',
}

export const TriggerRuntimeNodeValuesArray = [
    TriggerRuntimeNodeValues.First,
    TriggerRuntimeNodeValues.Last,
    TriggerRuntimeNodeValues.All,
] as const;

export enum TimeNodePresetClassValues {
    /** Preset Type Enum ( Entrance ). Serialized value: `entr` */
    Entrance = 'entr',
    /** Exit. Serialized value: `exit` */
    Exit = 'exit',
    /** Preset Type Enum ( Emphasis ). Serialized value: `emph` */
    Emphasis = 'emph',
    /** Preset Type Enum ( Path ). Serialized value: `path` */
    Path = 'path',
    /** Preset Type Enum ( Verb ). Serialized value: `verb` */
    Verb = 'verb',
    /** Preset Type Enum ( Media Call ). Serialized value: `mediacall` */
    MediaCall = 'mediacall',
}

export const TimeNodePresetClassValuesArray = [
    TimeNodePresetClassValues.Entrance,
    TimeNodePresetClassValues.Exit,
    TimeNodePresetClassValues.Emphasis,
    TimeNodePresetClassValues.Path,
    TimeNodePresetClassValues.Verb,
    TimeNodePresetClassValues.MediaCall,
] as const;

export enum TimeNodeRestartValues {
    /** Restart Enum ( Always ). Serialized value: `always` */
    Always = 'always',
    /** Restart Enum ( When Not Active ). Serialized value: `whenNotActive` */
    WhenNotActive = 'whenNotActive',
    /** Restart Enum ( Never ). Serialized value: `never` */
    Never = 'never',
}

export const TimeNodeRestartValuesArray = [
    TimeNodeRestartValues.Always,
    TimeNodeRestartValues.WhenNotActive,
    TimeNodeRestartValues.Never,
] as const;

export enum TimeNodeFillValues {
    /** Remove. Serialized value: `remove` */
    Remove = 'remove',
    /** Freeze. Serialized value: `freeze` */
    Freeze = 'freeze',
    /** TimeNode Fill Type Enum ( Hold ). Serialized value: `hold` */
    Hold = 'hold',
    /** Transition. Serialized value: `transition` */
    Transition = 'transition',
}

export const TimeNodeFillValuesArray = [
    TimeNodeFillValues.Remove,
    TimeNodeFillValues.Freeze,
    TimeNodeFillValues.Hold,
    TimeNodeFillValues.Transition,
] as const;

export enum TimeNodeValues {
    /** Node Type Enum ( Click Effect ). Serialized value: `clickEffect` */
    ClickEffect = 'clickEffect',
    /** Node Type Enum ( With Effect ). Serialized value: `withEffect` */
    WithEffect = 'withEffect',
    /** Node Type Enum ( After Effect ). Serialized value: `afterEffect` */
    AfterEffect = 'afterEffect',
    /** Node Type Enum ( Main Sequence ). Serialized value: `mainSeq` */
    MainSequence = 'mainSeq',
    /** Node Type Enum ( Interactive Sequence ). Serialized value: `interactiveSeq` */
    InteractiveSequence = 'interactiveSeq',
    /** Node Type Enum ( Click Paragraph ). Serialized value: `clickPar` */
    ClickParagraph = 'clickPar',
    /** Node Type Enum ( With Group ). Serialized value: `withGroup` */
    WithGroup = 'withGroup',
    /** Node Type Enum ( After Group ). Serialized value: `afterGroup` */
    AfterGroup = 'afterGroup',
    /** Node Type Enum ( Timing Root ). Serialized value: `tmRoot` */
    TmingRoot = 'tmRoot',
}

export const TimeNodeValuesArray = [
    TimeNodeValues.ClickEffect,
    TimeNodeValues.WithEffect,
    TimeNodeValues.AfterEffect,
    TimeNodeValues.MainSequence,
    TimeNodeValues.InteractiveSequence,
    TimeNodeValues.ClickParagraph,
    TimeNodeValues.WithGroup,
    TimeNodeValues.AfterGroup,
    TimeNodeValues.TmingRoot,
] as const;

export enum NextActionValues {
    /** Next Action Type Enum ( None ). Serialized value: `none` */
    None = 'none',
    /** Next Action Type Enum ( Seek ). Serialized value: `seek` */
    Seek = 'seek',
}

export const NextActionValuesArray = [
    NextActionValues.None,
    NextActionValues.Seek,
] as const;

export enum PreviousActionValues {
    /** Previous Action Type Enum ( None ). Serialized value: `none` */
    None = 'none',
    /** Previous Action Type Enum ( Skip Timed ). Serialized value: `skipTimed` */
    SkipTimed = 'skipTimed',
}

export const PreviousActionValuesArray = [
    PreviousActionValues.None,
    PreviousActionValues.SkipTimed,
] as const;

export enum BehaviorAdditiveValues {
    /** Additive Enum ( Base ). Serialized value: `base` */
    Base = 'base',
    /** Additive Enum ( Sum ). Serialized value: `sum` */
    Sum = 'sum',
    /** Additive Enum ( Replace ). Serialized value: `repl` */
    Replace = 'repl',
    /** Additive Enum ( Multiply ). Serialized value: `mult` */
    Multiply = 'mult',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const BehaviorAdditiveValuesArray = [
    BehaviorAdditiveValues.Base,
    BehaviorAdditiveValues.Sum,
    BehaviorAdditiveValues.Replace,
    BehaviorAdditiveValues.Multiply,
    BehaviorAdditiveValues.None,
] as const;

export enum BehaviorAccumulateValues {
    /** Accumulate Enum ( None ). Serialized value: `none` */
    None = 'none',
    /** Accumulate Enum ( Always ). Serialized value: `always` */
    Always = 'always',
}

export const BehaviorAccumulateValuesArray = [
    BehaviorAccumulateValues.None,
    BehaviorAccumulateValues.Always,
] as const;

export enum BehaviorTransformValues {
    /** Point. Serialized value: `pt` */
    Point = 'pt',
    /** Image. Serialized value: `img` */
    Image = 'img',
}

export const BehaviorTransformValuesArray = [
    BehaviorTransformValues.Point,
    BehaviorTransformValues.Image,
] as const;

export enum BehaviorOverrideValues {
    /** Override Enum ( Normal ). Serialized value: `normal` */
    Normal = 'normal',
    /** Override Enum ( Child Style ). Serialized value: `childStyle` */
    ChildStyle = 'childStyle',
}

export const BehaviorOverrideValuesArray = [
    BehaviorOverrideValues.Normal,
    BehaviorOverrideValues.ChildStyle,
] as const;

export enum AnimateBehaviorCalculateModeValues {
    /** Calc Mode Enum ( Discrete ). Serialized value: `discrete` */
    Discrete = 'discrete',
    /** Calc Mode Enum ( Linear ). Serialized value: `lin` */
    Linear = 'lin',
    /** Calc Mode Enum ( Formula ). Serialized value: `fmla` */
    Formula = 'fmla',
}

export const AnimateBehaviorCalculateModeValuesArray = [
    AnimateBehaviorCalculateModeValues.Discrete,
    AnimateBehaviorCalculateModeValues.Linear,
    AnimateBehaviorCalculateModeValues.Formula,
] as const;

export enum AnimateBehaviorValues {
    /** Value Type Enum ( String ). Serialized value: `str` */
    String = 'str',
    /** Value Type Enum ( Number ). Serialized value: `num` */
    Number = 'num',
    /** Value Type Enum ( Color ). Serialized value: `clr` */
    Color = 'clr',
}

export const AnimateBehaviorValuesArray = [
    AnimateBehaviorValues.String,
    AnimateBehaviorValues.Number,
    AnimateBehaviorValues.Color,
] as const;

export enum AnimateColorSpaceValues {
    /** Color Space Enum ( RGB ). Serialized value: `rgb` */
    Rgb = 'rgb',
    /** Color Space Enum ( HSL ). Serialized value: `hsl` */
    Hsl = 'hsl',
}

export const AnimateColorSpaceValuesArray = [
    AnimateColorSpaceValues.Rgb,
    AnimateColorSpaceValues.Hsl,
] as const;

export enum AnimateColorDirectionValues {
    /** Direction Enum ( Clockwise ). Serialized value: `cw` */
    Clockwise = 'cw',
    /** Counter-Clockwise. Serialized value: `ccw` */
    CounterClockwise = 'ccw',
}

export const AnimateColorDirectionValuesArray = [
    AnimateColorDirectionValues.Clockwise,
    AnimateColorDirectionValues.CounterClockwise,
] as const;

export enum AnimateEffectTransitionValues {
    /** Transition Enum ( In ). Serialized value: `in` */
    In = 'in',
    /** Transition Enum ( Out ). Serialized value: `out` */
    Out = 'out',
    /** Transition Enum ( None ). Serialized value: `none` */
    None = 'none',
}

export const AnimateEffectTransitionValuesArray = [
    AnimateEffectTransitionValues.In,
    AnimateEffectTransitionValues.Out,
    AnimateEffectTransitionValues.None,
] as const;

export enum AnimateMotionBehaviorOriginValues {
    /** Origin Enum ( Parent ). Serialized value: `parent` */
    Parent = 'parent',
    /** Origin Enum ( Layout ). Serialized value: `layout` */
    Layout = 'layout',
}

export const AnimateMotionBehaviorOriginValuesArray = [
    AnimateMotionBehaviorOriginValues.Parent,
    AnimateMotionBehaviorOriginValues.Layout,
] as const;

export enum AnimateMotionPathEditModeValues {
    /** Path Edit Mode Enum ( Relative ). Serialized value: `relative` */
    Relative = 'relative',
    /** Path Edit Mode Enum ( Fixed ). Serialized value: `fixed` */
    Fixed = 'fixed',
}

export const AnimateMotionPathEditModeValuesArray = [
    AnimateMotionPathEditModeValues.Relative,
    AnimateMotionPathEditModeValues.Fixed,
] as const;

export enum CommandValues {
    /** Command Type Enum ( Event ). Serialized value: `evt` */
    Event = 'evt',
    /** Command Type Enum ( Call ). Serialized value: `call` */
    Call = 'call',
    /** Command Type Enum ( Verb ). Serialized value: `verb` */
    Verb = 'verb',
}

export const CommandValuesArray = [
    CommandValues.Event,
    CommandValues.Call,
    CommandValues.Verb,
] as const;

export enum ParagraphBuildValues {
    /** All At Once. Serialized value: `allAtOnce` */
    AllAtOnce = 'allAtOnce',
    /** Paragraph. Serialized value: `p` */
    Paragraph = 'p',
    /** Custom. Serialized value: `cust` */
    Custom = 'cust',
    /** Whole. Serialized value: `whole` */
    Whole = 'whole',
}

export const ParagraphBuildValuesArray = [
    ParagraphBuildValues.AllAtOnce,
    ParagraphBuildValues.Paragraph,
    ParagraphBuildValues.Custom,
    ParagraphBuildValues.Whole,
] as const;

export enum DiagramBuildValues {
    /** Diagram Build Type Enum ( Whole ). Serialized value: `whole` */
    Whole = 'whole',
    /** Diagram Build Type Enum ( Depth By Node ). Serialized value: `depthByNode` */
    DepthByNode = 'depthByNode',
    /** Diagram Build Type Enum ( Depth By Branch ). Serialized value: `depthByBranch` */
    DepthByBranch = 'depthByBranch',
    /** Diagram Build Type Enum ( Breadth By Node ). Serialized value: `breadthByNode` */
    BreadthByNode = 'breadthByNode',
    /** Diagram Build Type Enum ( Breadth By Level ). Serialized value: `breadthByLvl` */
    BreadthByLevel = 'breadthByLvl',
    /** Diagram Build Type Enum ( Clockwise ). Serialized value: `cw` */
    Clockwise = 'cw',
    /** Diagram Build Type Enum ( Clockwise-In ). Serialized value: `cwIn` */
    ClockwiseIn = 'cwIn',
    /** Diagram Build Type Enum ( Clockwise-Out ). Serialized value: `cwOut` */
    ClockwiseOut = 'cwOut',
    /** Diagram Build Type Enum ( Counter-Clockwise ). Serialized value: `ccw` */
    CounterClockwise = 'ccw',
    /** Diagram Build Type Enum ( Counter-Clockwise-In ). Serialized value: `ccwIn` */
    CounterClockwiseIn = 'ccwIn',
    /** Diagram Build Type Enum ( Counter-Clockwise-Out ). Serialized value: `ccwOut` */
    CounterClockwiseOut = 'ccwOut',
    /** Diagram Build Type Enum ( In-By-Ring ). Serialized value: `inByRing` */
    InByRing = 'inByRing',
    /** Diagram Build Type Enum ( Out-By-Ring ). Serialized value: `outByRing` */
    OutByRing = 'outByRing',
    /** Diagram Build Type Enum ( Up ). Serialized value: `up` */
    Up = 'up',
    /** Diagram Build Type Enum ( Down ). Serialized value: `down` */
    Down = 'down',
    /** Diagram Build Type Enum ( All At Once ). Serialized value: `allAtOnce` */
    AllAtOnce = 'allAtOnce',
    /** Diagram Build Type Enum ( Custom ). Serialized value: `cust` */
    Custom = 'cust',
}

export const DiagramBuildValuesArray = [
    DiagramBuildValues.Whole,
    DiagramBuildValues.DepthByNode,
    DiagramBuildValues.DepthByBranch,
    DiagramBuildValues.BreadthByNode,
    DiagramBuildValues.BreadthByLevel,
    DiagramBuildValues.Clockwise,
    DiagramBuildValues.ClockwiseIn,
    DiagramBuildValues.ClockwiseOut,
    DiagramBuildValues.CounterClockwise,
    DiagramBuildValues.CounterClockwiseIn,
    DiagramBuildValues.CounterClockwiseOut,
    DiagramBuildValues.InByRing,
    DiagramBuildValues.OutByRing,
    DiagramBuildValues.Up,
    DiagramBuildValues.Down,
    DiagramBuildValues.AllAtOnce,
    DiagramBuildValues.Custom,
] as const;

export enum OleChartBuildValues {
    /** Chart Build Type Enum ( All At Once ). Serialized value: `allAtOnce` */
    AllAtOnce = 'allAtOnce',
    /** Chart Build Type Enum ( Series ). Serialized value: `series` */
    Series = 'series',
    /** Chart Build Type Enum ( Category ). Serialized value: `category` */
    Category = 'category',
    /** Chart Build Type Enum ( Series Element ). Serialized value: `seriesEl` */
    SeriesElement = 'seriesEl',
    /** Chart Build Type Enum ( Category Element ). Serialized value: `categoryEl` */
    CategoryElement = 'categoryEl',
}

export const OleChartBuildValuesArray = [
    OleChartBuildValues.AllAtOnce,
    OleChartBuildValues.Series,
    OleChartBuildValues.Category,
    OleChartBuildValues.SeriesElement,
    OleChartBuildValues.CategoryElement,
] as const;

export enum TimeNodeMasterRelationValues {
    /** TimeNode Master Relation Enum ( Same Click ). Serialized value: `sameClick` */
    SameClick = 'sameClick',
    /** TimeNode Master Relation Enum ( Next Click ). Serialized value: `nextClick` */
    NextClick = 'nextClick',
}

export const TimeNodeMasterRelationValuesArray = [
    TimeNodeMasterRelationValues.SameClick,
    TimeNodeMasterRelationValues.NextClick,
] as const;

export enum TimeNodeSyncValues {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** TimeNode Sync Enum ( Can Slip ). Serialized value: `canSlip` */
    CanSlip = 'canSlip',
    /** TimeNode Sync Enum ( Locked ). Serialized value: `locked` */
    Locked = 'locked',
}

export const TimeNodeSyncValuesArray = [
    TimeNodeSyncValues.None,
    TimeNodeSyncValues.CanSlip,
    TimeNodeSyncValues.Locked,
] as const;

export enum DirectionValues {
    /** Horizontal. Serialized value: `horz` */
    Horizontal = 'horz',
    /** Vertical. Serialized value: `vert` */
    Vertical = 'vert',
}

export const DirectionValuesArray = [
    DirectionValues.Horizontal,
    DirectionValues.Vertical,
] as const;

export enum OleObjectFollowColorSchemeValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Full. Serialized value: `full` */
    Full = 'full',
    /** Text and Background. Serialized value: `textAndBackground` */
    TextAndBackground = 'textAndBackground',
}

export const OleObjectFollowColorSchemeValuesArray = [
    OleObjectFollowColorSchemeValues.None,
    OleObjectFollowColorSchemeValues.Full,
    OleObjectFollowColorSchemeValues.TextAndBackground,
] as const;

export enum PhotoAlbumLayoutValues {
    /** Fit Photos to Slide. Serialized value: `fitToSlide` */
    FitToSlide = 'fitToSlide',
    /** 1 Photo per Slide. Serialized value: `1pic` */
    OnePic = '1pic',
    /** 2 Photos per Slide. Serialized value: `2pic` */
    TwoPic = '2pic',
    /** 4 Photos per Slide. Serialized value: `4pic` */
    FourPic = '4pic',
    /** 1 Photo per Slide with Titles. Serialized value: `1picTitle` */
    OnePicWithTitle = '1picTitle',
    /** 2 Photos per Slide with Titles. Serialized value: `2picTitle` */
    TwoPicWithTitle = '2picTitle',
    /** 4 Photos per Slide with Titles. Serialized value: `4picTitle` */
    FourPicWithTitle = '4picTitle',
}

export const PhotoAlbumLayoutValuesArray = [
    PhotoAlbumLayoutValues.FitToSlide,
    PhotoAlbumLayoutValues.OnePic,
    PhotoAlbumLayoutValues.TwoPic,
    PhotoAlbumLayoutValues.FourPic,
    PhotoAlbumLayoutValues.OnePicWithTitle,
    PhotoAlbumLayoutValues.TwoPicWithTitle,
    PhotoAlbumLayoutValues.FourPicWithTitle,
] as const;

export enum PhotoAlbumFrameShapeValues {
    /** Rectangle Photo Frame. Serialized value: `frameStyle1` */
    FrameStyle1 = 'frameStyle1',
    /** Rounded Rectangle Photo Frame. Serialized value: `frameStyle2` */
    FrameStyle2 = 'frameStyle2',
    /** Simple White Photo Frame. Serialized value: `frameStyle3` */
    FrameStyle3 = 'frameStyle3',
    /** Simple Black Photo Frame. Serialized value: `frameStyle4` */
    FrameStyle4 = 'frameStyle4',
    /** Compound Black Photo Frame. Serialized value: `frameStyle5` */
    FrameStyle5 = 'frameStyle5',
    /** Center Shadow Photo Frame. Serialized value: `frameStyle6` */
    FrameStyle6 = 'frameStyle6',
    /** Soft Edge Photo Frame. Serialized value: `frameStyle7` */
    FrameStyle7 = 'frameStyle7',
}

export const PhotoAlbumFrameShapeValuesArray = [
    PhotoAlbumFrameShapeValues.FrameStyle1,
    PhotoAlbumFrameShapeValues.FrameStyle2,
    PhotoAlbumFrameShapeValues.FrameStyle3,
    PhotoAlbumFrameShapeValues.FrameStyle4,
    PhotoAlbumFrameShapeValues.FrameStyle5,
    PhotoAlbumFrameShapeValues.FrameStyle6,
    PhotoAlbumFrameShapeValues.FrameStyle7,
] as const;

export enum SlideSizeValues {
    /** Screen 4x3. Serialized value: `screen4x3` */
    Screen4x3 = 'screen4x3',
    /** Letter. Serialized value: `letter` */
    Letter = 'letter',
    /** A4. Serialized value: `A4` */
    A4 = 'A4',
    /** 35mm Film. Serialized value: `35mm` */
    Film35mm = '35mm',
    /** Overhead. Serialized value: `overhead` */
    Overhead = 'overhead',
    /** Banner. Serialized value: `banner` */
    Banner = 'banner',
    /** Custom. Serialized value: `custom` */
    Custom = 'custom',
    /** Ledger. Serialized value: `ledger` */
    Ledger = 'ledger',
    /** A3. Serialized value: `A3` */
    A3 = 'A3',
    /** B4ISO. Serialized value: `B4ISO` */
    B4ISO = 'B4ISO',
    /** B5ISO. Serialized value: `B5ISO` */
    B5ISO = 'B5ISO',
    /** B4JIS. Serialized value: `B4JIS` */
    B4JIS = 'B4JIS',
    /** B5JIS. Serialized value: `B5JIS` */
    B5JIS = 'B5JIS',
    /** Hagaki Card. Serialized value: `hagakiCard` */
    HagakiCard = 'hagakiCard',
    /** Screen 16x9. Serialized value: `screen16x9` */
    Screen16x9 = 'screen16x9',
    /** Screen 16x10. Serialized value: `screen16x10` */
    Screen16x10 = 'screen16x10',
}

export const SlideSizeValuesArray = [
    SlideSizeValues.Screen4x3,
    SlideSizeValues.Letter,
    SlideSizeValues.A4,
    SlideSizeValues.Film35mm,
    SlideSizeValues.Overhead,
    SlideSizeValues.Banner,
    SlideSizeValues.Custom,
    SlideSizeValues.Ledger,
    SlideSizeValues.A3,
    SlideSizeValues.B4ISO,
    SlideSizeValues.B5ISO,
    SlideSizeValues.B4JIS,
    SlideSizeValues.B5JIS,
    SlideSizeValues.HagakiCard,
    SlideSizeValues.Screen16x9,
    SlideSizeValues.Screen16x10,
] as const;

export enum CryptProviderValues {
    /** RSA AES Encryption Scheme. Serialized value: `rsaAES` */
    RsaAES = 'rsaAES',
    /** RSA Full Encryption Scheme. Serialized value: `rsaFull` */
    RsaFull = 'rsaFull',
    /** Invalid Encryption Scheme. Serialized value: `invalid` */
    Invalid = 'invalid',
}

export const CryptProviderValuesArray = [
    CryptProviderValues.RsaAES,
    CryptProviderValues.RsaFull,
    CryptProviderValues.Invalid,
] as const;

export enum CryptAlgorithmClassValues {
    /** Hash Algorithm Class. Serialized value: `hash` */
    Hash = 'hash',
    /** Invalid Algorithm Class. Serialized value: `invalid` */
    Invalid = 'invalid',
}

export const CryptAlgorithmClassValuesArray = [
    CryptAlgorithmClassValues.Hash,
    CryptAlgorithmClassValues.Invalid,
] as const;

export enum CryptAlgorithmValues {
    /** Any Algorithm Type. Serialized value: `typeAny` */
    TypeAny = 'typeAny',
    /** Invalid Algorithm Type. Serialized value: `invalid` */
    Invalid = 'invalid',
}

export const CryptAlgorithmValuesArray = [
    CryptAlgorithmValues.TypeAny,
    CryptAlgorithmValues.Invalid,
] as const;

export enum HtmlPublishWebBrowserSupportValues {
    /** Browser v4. Serialized value: `v4` */
    V4 = 'v4',
    /** Browser v3. Serialized value: `v3` */
    V3 = 'v3',
    /** Browser v3v4. Serialized value: `v3v4` */
    V3v4 = 'v3v4',
}

export const HtmlPublishWebBrowserSupportValuesArray = [
    HtmlPublishWebBrowserSupportValues.V4,
    HtmlPublishWebBrowserSupportValues.V3,
    HtmlPublishWebBrowserSupportValues.V3v4,
] as const;

export enum WebColorValues {
    /** Non-specific Colors. Serialized value: `none` */
    None = 'none',
    /** Browser Colors. Serialized value: `browser` */
    Browser = 'browser',
    /** Presentation Text Colors. Serialized value: `presentationText` */
    PresentationText = 'presentationText',
    /** Presentation Accent Colors. Serialized value: `presentationAccent` */
    PresentationAccent = 'presentationAccent',
    /** White Text on Black Colors. Serialized value: `whiteTextOnBlack` */
    WhiteTextOnBlack = 'whiteTextOnBlack',
    /** Black Text on White Colors. Serialized value: `blackTextOnWhite` */
    BlackTextOnWhite = 'blackTextOnWhite',
}

export const WebColorValuesArray = [
    WebColorValues.None,
    WebColorValues.Browser,
    WebColorValues.PresentationText,
    WebColorValues.PresentationAccent,
    WebColorValues.WhiteTextOnBlack,
    WebColorValues.BlackTextOnWhite,
] as const;

export enum WebScreenSizeValues {
    /** HTML/Web Size Enumeration 544x376. Serialized value: `544x376` */
    Sz544x376 = '544x376',
    /** HTML/Web Size Enumeration 640x480. Serialized value: `640x480` */
    Sz640x480 = '640x480',
    /** HTML/Web Size Enumeration 720x515. Serialized value: `720x512` */
    Sz720x512 = '720x512',
    /** HTML/Web Size Enumeration 800x600. Serialized value: `800x600` */
    Sz800x600 = '800x600',
    /** HTML/Web Size Enumeration 1024x768. Serialized value: `1024x768` */
    Sz1024x768 = '1024x768',
    /** HTML/Web Size Enumeration 1152x882. Serialized value: `1152x882` */
    Sz1152x882 = '1152x882',
    /** HTML/Web Size Enumeration 1152x900. Serialized value: `1152x900` */
    Sz1152x900 = '1152x900',
    /** HTML/Web Size Enumeration 1280x1024. Serialized value: `1280x1024` */
    Sz1280x1024 = '1280x1024',
    /** HTML/Web Size Enumeration 1600x1200. Serialized value: `1600x1200` */
    Sz1600x1200 = '1600x1200',
    /** HTML/Web Size Enumeration 1800x1400. Serialized value: `1800x1400` */
    Sz1800x1400 = '1800x1400',
    /** HTML/Web Size Enumeration 1920x1200. Serialized value: `1920x1200` */
    Sz1920x1200 = '1920x1200',
}

export const WebScreenSizeValuesArray = [
    WebScreenSizeValues.Sz544x376,
    WebScreenSizeValues.Sz640x480,
    WebScreenSizeValues.Sz720x512,
    WebScreenSizeValues.Sz800x600,
    WebScreenSizeValues.Sz1024x768,
    WebScreenSizeValues.Sz1152x882,
    WebScreenSizeValues.Sz1152x900,
    WebScreenSizeValues.Sz1280x1024,
    WebScreenSizeValues.Sz1600x1200,
    WebScreenSizeValues.Sz1800x1400,
    WebScreenSizeValues.Sz1920x1200,
] as const;

export enum PrintOutputValues {
    /** Slides. Serialized value: `slides` */
    Slides = 'slides',
    /** 1 Slide / Handout Page. Serialized value: `handouts1` */
    Handouts1 = 'handouts1',
    /** 2 Slides / Handout Page. Serialized value: `handouts2` */
    Handouts2 = 'handouts2',
    /** 3 Slides / Handout Page. Serialized value: `handouts3` */
    Handouts3 = 'handouts3',
    /** 4 Slides / Handout Page. Serialized value: `handouts4` */
    Handouts4 = 'handouts4',
    /** 6 Slides / Handout Page. Serialized value: `handouts6` */
    Handouts6 = 'handouts6',
    /** 9 Slides / Handout Page. Serialized value: `handouts9` */
    Handouts9 = 'handouts9',
    /** Notes. Serialized value: `notes` */
    Notes = 'notes',
    /** Outline. Serialized value: `outline` */
    Outline = 'outline',
}

export const PrintOutputValuesArray = [
    PrintOutputValues.Slides,
    PrintOutputValues.Handouts1,
    PrintOutputValues.Handouts2,
    PrintOutputValues.Handouts3,
    PrintOutputValues.Handouts4,
    PrintOutputValues.Handouts6,
    PrintOutputValues.Handouts9,
    PrintOutputValues.Notes,
    PrintOutputValues.Outline,
] as const;

export enum PrintColorModeValues {
    /** Black and White Mode. Serialized value: `bw` */
    BlackWhite = 'bw',
    /** Grayscale Mode. Serialized value: `gray` */
    Gray = 'gray',
    /** Color Mode. Serialized value: `clr` */
    Color = 'clr',
}

export const PrintColorModeValuesArray = [
    PrintColorModeValues.BlackWhite,
    PrintColorModeValues.Gray,
    PrintColorModeValues.Color,
] as const;

export enum PlaceholderValues {
    /** Title. Serialized value: `title` */
    Title = 'title',
    /** Body. Serialized value: `body` */
    Body = 'body',
    /** Centered Title. Serialized value: `ctrTitle` */
    CenteredTitle = 'ctrTitle',
    /** Subtitle. Serialized value: `subTitle` */
    SubTitle = 'subTitle',
    /** Date and Time. Serialized value: `dt` */
    DateAndTime = 'dt',
    /** Slide Number. Serialized value: `sldNum` */
    SlideNumber = 'sldNum',
    /** Footer. Serialized value: `ftr` */
    Footer = 'ftr',
    /** Header. Serialized value: `hdr` */
    Header = 'hdr',
    /** Object. Serialized value: `obj` */
    Object = 'obj',
    /** Chart. Serialized value: `chart` */
    Chart = 'chart',
    /** Table. Serialized value: `tbl` */
    Table = 'tbl',
    /** Clip Art. Serialized value: `clipArt` */
    ClipArt = 'clipArt',
    /** Diagram. Serialized value: `dgm` */
    Diagram = 'dgm',
    /** Media. Serialized value: `media` */
    Media = 'media',
    /** Slide Image. Serialized value: `sldImg` */
    SlideImage = 'sldImg',
    /** Picture. Serialized value: `pic` */
    Picture = 'pic',
}

export const PlaceholderValuesArray = [
    PlaceholderValues.Title,
    PlaceholderValues.Body,
    PlaceholderValues.CenteredTitle,
    PlaceholderValues.SubTitle,
    PlaceholderValues.DateAndTime,
    PlaceholderValues.SlideNumber,
    PlaceholderValues.Footer,
    PlaceholderValues.Header,
    PlaceholderValues.Object,
    PlaceholderValues.Chart,
    PlaceholderValues.Table,
    PlaceholderValues.ClipArt,
    PlaceholderValues.Diagram,
    PlaceholderValues.Media,
    PlaceholderValues.SlideImage,
    PlaceholderValues.Picture,
] as const;

export enum PlaceholderSizeValues {
    /** Full. Serialized value: `full` */
    Full = 'full',
    /** Half. Serialized value: `half` */
    Half = 'half',
    /** Quarter. Serialized value: `quarter` */
    Quarter = 'quarter',
}

export const PlaceholderSizeValuesArray = [
    PlaceholderSizeValues.Full,
    PlaceholderSizeValues.Half,
    PlaceholderSizeValues.Quarter,
] as const;

export enum SlideLayoutValues {
    /** Slide Layout Type Enumeration ( Title ). Serialized value: `title` */
    Title = 'title',
    /** Slide Layout Type Enumeration ( Text ). Serialized value: `tx` */
    Text = 'tx',
    /** Slide Layout Type Enumeration ( Two Column Text ). Serialized value: `twoColTx` */
    TwoColumnText = 'twoColTx',
    /** Slide Layout Type Enumeration ( Table ). Serialized value: `tbl` */
    Table = 'tbl',
    /** Slide Layout Type Enumeration ( Text and Chart ). Serialized value: `txAndChart` */
    TextAndChart = 'txAndChart',
    /** Slide Layout Type Enumeration ( Chart and Text ). Serialized value: `chartAndTx` */
    ChartAndText = 'chartAndTx',
    /** Slide Layout Type Enumeration ( Diagram ). Serialized value: `dgm` */
    Diagram = 'dgm',
    /** Chart. Serialized value: `chart` */
    Chart = 'chart',
    /** Text and Clip Art. Serialized value: `txAndClipArt` */
    TextAndClipArt = 'txAndClipArt',
    /** Clip Art and Text. Serialized value: `clipArtAndTx` */
    ClipArtAndText = 'clipArtAndTx',
    /** Slide Layout Type Enumeration ( Title Only ). Serialized value: `titleOnly` */
    TitleOnly = 'titleOnly',
    /** Slide Layout Type Enumeration ( Blank ). Serialized value: `blank` */
    Blank = 'blank',
    /** Slide Layout Type Enumeration ( Text and Object ). Serialized value: `txAndObj` */
    TextAndObject = 'txAndObj',
    /** Slide Layout Type Enumeration ( Object and Text ). Serialized value: `objAndTx` */
    ObjectAndText = 'objAndTx',
    /** Object. Serialized value: `objOnly` */
    ObjectOnly = 'objOnly',
    /** Title and Object. Serialized value: `obj` */
    Object = 'obj',
    /** Slide Layout Type Enumeration ( Text and Media ). Serialized value: `txAndMedia` */
    TextAndMedia = 'txAndMedia',
    /** Slide Layout Type Enumeration ( Media and Text ). Serialized value: `mediaAndTx` */
    MidiaAndText = 'mediaAndTx',
    /** Slide Layout Type Enumeration ( Object over Text). Serialized value: `objOverTx` */
    ObjectOverText = 'objOverTx',
    /** Slide Layout Type Enumeration ( Text over Object). Serialized value: `txOverObj` */
    TextOverObject = 'txOverObj',
    /** Text and Two Objects. Serialized value: `txAndTwoObj` */
    TextAndTwoObjects = 'txAndTwoObj',
    /** Two Objects and Text. Serialized value: `twoObjAndTx` */
    TwoObjectsAndText = 'twoObjAndTx',
    /** Two Objects over Text. Serialized value: `twoObjOverTx` */
    TwoObjectsOverText = 'twoObjOverTx',
    /** Four Objects. Serialized value: `fourObj` */
    FourObjects = 'fourObj',
    /** Vertical Text. Serialized value: `vertTx` */
    VerticalText = 'vertTx',
    /** Clip Art and Vertical Text. Serialized value: `clipArtAndVertTx` */
    ClipArtAndVerticalText = 'clipArtAndVertTx',
    /** Vertical Title and Text. Serialized value: `vertTitleAndTx` */
    VerticalTitleAndText = 'vertTitleAndTx',
    /** Vertical Title and Text Over Chart. Serialized value: `vertTitleAndTxOverChart` */
    VerticalTitleAndTextOverChart = 'vertTitleAndTxOverChart',
    /** Two Objects. Serialized value: `twoObj` */
    TwoObjects = 'twoObj',
    /** Object and Two Object. Serialized value: `objAndTwoObj` */
    ObjectAndTwoObjects = 'objAndTwoObj',
    /** Two Objects and Object. Serialized value: `twoObjAndObj` */
    TwoObjectsAndObject = 'twoObjAndObj',
    /** Slide Layout Type Enumeration ( Custom ). Serialized value: `cust` */
    Custom = 'cust',
    /** Section Header. Serialized value: `secHead` */
    SectionHeader = 'secHead',
    /** Two Text and Two Objects. Serialized value: `twoTxTwoObj` */
    TwoTextAndTwoObjects = 'twoTxTwoObj',
    /** Title, Object, and Caption. Serialized value: `objTx` */
    ObjectText = 'objTx',
    /** Picture and Caption. Serialized value: `picTx` */
    PictureText = 'picTx',
}

export const SlideLayoutValuesArray = [
    SlideLayoutValues.Title,
    SlideLayoutValues.Text,
    SlideLayoutValues.TwoColumnText,
    SlideLayoutValues.Table,
    SlideLayoutValues.TextAndChart,
    SlideLayoutValues.ChartAndText,
    SlideLayoutValues.Diagram,
    SlideLayoutValues.Chart,
    SlideLayoutValues.TextAndClipArt,
    SlideLayoutValues.ClipArtAndText,
    SlideLayoutValues.TitleOnly,
    SlideLayoutValues.Blank,
    SlideLayoutValues.TextAndObject,
    SlideLayoutValues.ObjectAndText,
    SlideLayoutValues.ObjectOnly,
    SlideLayoutValues.Object,
    SlideLayoutValues.TextAndMedia,
    SlideLayoutValues.MidiaAndText,
    SlideLayoutValues.ObjectOverText,
    SlideLayoutValues.TextOverObject,
    SlideLayoutValues.TextAndTwoObjects,
    SlideLayoutValues.TwoObjectsAndText,
    SlideLayoutValues.TwoObjectsOverText,
    SlideLayoutValues.FourObjects,
    SlideLayoutValues.VerticalText,
    SlideLayoutValues.ClipArtAndVerticalText,
    SlideLayoutValues.VerticalTitleAndText,
    SlideLayoutValues.VerticalTitleAndTextOverChart,
    SlideLayoutValues.TwoObjects,
    SlideLayoutValues.ObjectAndTwoObjects,
    SlideLayoutValues.TwoObjectsAndObject,
    SlideLayoutValues.Custom,
    SlideLayoutValues.SectionHeader,
    SlideLayoutValues.TwoTextAndTwoObjects,
    SlideLayoutValues.ObjectText,
    SlideLayoutValues.PictureText,
] as const;

export enum SplitterBarStateValues {
    /** Min. Serialized value: `minimized` */
    Minimized = 'minimized',
    /** Restored. Serialized value: `restored` */
    Restored = 'restored',
    /** Max. Serialized value: `maximized` */
    Maximized = 'maximized',
}

export const SplitterBarStateValuesArray = [
    SplitterBarStateValues.Minimized,
    SplitterBarStateValues.Restored,
    SplitterBarStateValues.Maximized,
] as const;

export enum ViewValues {
    /** Normal Slide View. Serialized value: `sldView` */
    SlideView = 'sldView',
    /** Slide Master View. Serialized value: `sldMasterView` */
    SlideMasterView = 'sldMasterView',
    /** Notes View. Serialized value: `notesView` */
    NotesView = 'notesView',
    /** Handout View. Serialized value: `handoutView` */
    HandoutView = 'handoutView',
    /** Notes Master View. Serialized value: `notesMasterView` */
    NotesMasterView = 'notesMasterView',
    /** Outline View. Serialized value: `outlineView` */
    OutlineView = 'outlineView',
    /** Slide Sorter View. Serialized value: `sldSorterView` */
    SlideSorterView = 'sldSorterView',
    /** Slide Thumbnail View. Serialized value: `sldThumbnailView` */
    SlideThumbnailView = 'sldThumbnailView',
}

export const ViewValuesArray = [
    ViewValues.SlideView,
    ViewValues.SlideMasterView,
    ViewValues.NotesView,
    ViewValues.HandoutView,
    ViewValues.NotesMasterView,
    ViewValues.OutlineView,
    ViewValues.SlideSorterView,
    ViewValues.SlideThumbnailView,
] as const;

export enum TriggerEventValues {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** Trigger Event Enum ( On Begin ). Serialized value: `onBegin` */
    OnBegin = 'onBegin',
    /** Trigger Event Enum ( On End ). Serialized value: `onEnd` */
    OnEnd = 'onEnd',
    /** Trigger Event Enum ( Begin ). Serialized value: `begin` */
    Begin = 'begin',
    /** Trigger Event Enum ( End ). Serialized value: `end` */
    End = 'end',
    /** Trigger Event Enum ( On Click ). Serialized value: `onClick` */
    OnClick = 'onClick',
    /** Trigger Event Enum ( On Double Click ). Serialized value: `onDblClick` */
    OnDoubleClick = 'onDblClick',
    /** Trigger Event Enum ( On Mouse Over ). Serialized value: `onMouseOver` */
    OnMouseOver = 'onMouseOver',
    /** Trigger Event Enum ( On Mouse Out ). Serialized value: `onMouseOut` */
    OnMouseOut = 'onMouseOut',
    /** Trigger Event Enum ( On Next ). Serialized value: `onNext` */
    OnNext = 'onNext',
    /** Trigger Event Enum ( On Previous ). Serialized value: `onPrev` */
    OnPrevious = 'onPrev',
    /** Trigger Event Enum ( On Stop Audio ). Serialized value: `onStopAudio` */
    OnStopAudio = 'onStopAudio',
    /** undefined. Serialized value: `onMediaBookmark` */
    OnMediaBookmark = 'onMediaBookmark',
}

export const TriggerEventValuesArray = [
    TriggerEventValues.None,
    TriggerEventValues.OnBegin,
    TriggerEventValues.OnEnd,
    TriggerEventValues.Begin,
    TriggerEventValues.End,
    TriggerEventValues.OnClick,
    TriggerEventValues.OnDoubleClick,
    TriggerEventValues.OnMouseOver,
    TriggerEventValues.OnMouseOut,
    TriggerEventValues.OnNext,
    TriggerEventValues.OnPrevious,
    TriggerEventValues.OnStopAudio,
    TriggerEventValues.OnMediaBookmark,
] as const;

export enum ConformanceClassValues {
    /** undefined. Serialized value: `strict` */
    Strict = 'strict',
    /** undefined. Serialized value: `transitional` */
    Transitional = 'transitional',
}

export const ConformanceClassValuesArray = [
    ConformanceClassValues.Strict,
    ConformanceClassValues.Transitional,
] as const;

/** Defines the SoundAction Class. Serialized as `p:sndAc` */
export class SoundAction extends OxmlCompositeElement<StartSoundAction | EndSoundAction> {

    public static override _Q = 'p:sndAc';
    /** Start Sound Action. */
    public get startSoundAction(): StartSoundAction | undefined { return this._f(StartSoundAction); }
    /** Stop Sound Action. */
    public get endSoundAction(): EndSoundAction | undefined { return this._f(EndSoundAction); }

}
/** Defines the ZoomTransition Class. Serialized as `p:zoom` */
export class ZoomTransition extends OxmlLeafElement {

    public static override _Q = 'p:zoom';
    public static override _A = [':dir',];
    /** Direction. Serialized as `:dir` */
    public get direction(): TransitionInOutDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionInOutDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the WheelTransition Class. Serialized as `p:wheel` */
export class WheelTransition extends OxmlLeafElement {

    public static override _Q = 'p:wheel';
    public static override _A = [':spokes',];
    /** Spokes. Serialized as `:spokes` */
    public get spokes(): UInt32Value | undefined { return this._g(':spokes'); }
    public set spokes(v: UInt32Value | undefined) { this._s(':spokes', v); }

}
/** Defines the StripsTransition Class. Serialized as `p:strips` */
export class StripsTransition extends OxmlLeafElement {

    public static override _Q = 'p:strips';
    public static override _A = [':dir',];
    /** Direction. Serialized as `:dir` */
    public get direction(): TransitionCornerDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionCornerDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the SplitTransition Class. Serialized as `p:split` */
export class SplitTransition extends OxmlLeafElement {

    public static override _Q = 'p:split';
    public static override _A = [':orient',':dir',];
    /** Orientation. Serialized as `:orient` */
    public get orientation(): DirectionValues | undefined { return this._g(':orient'); }
    public set orientation(v: DirectionValues | undefined) { this._s(':orient', v); }
    /** Direction. Serialized as `:dir` */
    public get direction(): TransitionInOutDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionInOutDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the SideDirectionTransitionType Class. */
export abstract class SideDirectionTransitionType extends OxmlLeafElement {

    public static override _A = [':dir',];
    /** Direction. Serialized as `:dir` */
    public get direction(): TransitionSlideDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionSlideDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the WipeTransition Class. Serialized as `p:wipe` */
export class WipeTransition extends SideDirectionTransitionType {

    public static override _Q = 'p:wipe';

}
/** Defines the PushTransition Class. Serialized as `p:push` */
export class PushTransition extends SideDirectionTransitionType {

    public static override _Q = 'p:push';

}
/** Defines the OptionalBlackTransitionType Class. */
export abstract class OptionalBlackTransitionType extends OxmlLeafElement {

    public static override _A = [':thruBlk',];
    /** Transition Through Black. Serialized as `:thruBlk` */
    public get throughBlack(): BooleanValue | undefined { return this._g(':thruBlk'); }
    public set throughBlack(v: BooleanValue | undefined) { this._s(':thruBlk', v); }

}
/** Defines the FadeTransition Class. Serialized as `p:fade` */
export class FadeTransition extends OptionalBlackTransitionType {

    public static override _Q = 'p:fade';

}
/** Defines the CutTransition Class. Serialized as `p:cut` */
export class CutTransition extends OptionalBlackTransitionType {

    public static override _Q = 'p:cut';

}
/** Defines the EightDirectionTransitionType Class. */
export abstract class EightDirectionTransitionType extends OxmlLeafElement {

    public static override _A = [':dir',];
    /** Direction. Serialized as `:dir` */
    public get direction(): StringValue | undefined { return this._g(':dir'); }
    public set direction(v: StringValue | undefined) { this._s(':dir', v); }

}
/** Defines the PullTransition Class. Serialized as `p:pull` */
export class PullTransition extends EightDirectionTransitionType {

    public static override _Q = 'p:pull';

}
/** Defines the CoverTransition Class. Serialized as `p:cover` */
export class CoverTransition extends EightDirectionTransitionType {

    public static override _Q = 'p:cover';

}
/** Defines the OrientationTransitionType Class. */
export abstract class OrientationTransitionType extends OxmlLeafElement {

    public static override _A = [':dir',];
    /** Transition Direction. Serialized as `:dir` */
    public get direction(): DirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: DirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the RandomBarTransition Class. Serialized as `p:randomBar` */
export class RandomBarTransition extends OrientationTransitionType {

    public static override _Q = 'p:randomBar';

}
/** Defines the CombTransition Class. Serialized as `p:comb` */
export class CombTransition extends OrientationTransitionType {

    public static override _Q = 'p:comb';

}
/** Defines the CheckerTransition Class. Serialized as `p:checker` */
export class CheckerTransition extends OrientationTransitionType {

    public static override _Q = 'p:checker';

}
/** Defines the BlindsTransition Class. Serialized as `p:blinds` */
export class BlindsTransition extends OrientationTransitionType {

    public static override _Q = 'p:blinds';

}
/** Graphic Element. Serialized as `p:graphicEl` */
export class GraphicElement extends OxmlCompositeElement<ADiagram | AChart> {

    public static override _Q = 'p:graphicEl';
    /** Diagram to Animate. */
    public get diagram(): ADiagram | undefined { return this._f(ADiagram); }
    /** Chart to Animate. */
    public get chart(): AChart | undefined { return this._f(AChart); }

}
/** Text Element. Serialized as `p:txEl` */
export class TextElement extends OxmlCompositeElement<CharRange | ParagraphIndexRange> {

    public static override _Q = 'p:txEl';
    /** Character Range. */
    public get charRange(): CharRange | undefined { return this._f(CharRange); }
    /** Paragraph Text Range. */
    public get paragraphIndexRange(): ParagraphIndexRange | undefined { return this._f(ParagraphIndexRange); }

}
/** OLE Chart Element. Serialized as `p:oleChartEl` */
export class OleChartElement extends OxmlLeafElement {

    public static override _Q = 'p:oleChartEl';
    public static override _A = [':type',':lvl',];
    /** Type. Serialized as `:type` */
    public get type(): ChartSubElementValues | undefined { return this._g(':type'); }
    public set type(v: ChartSubElementValues | undefined) { this._s(':type', v); }
    /** Level. Serialized as `:lvl` */
    public get level(): UInt32Value | undefined { return this._g(':lvl'); }
    public set level(v: UInt32Value | undefined) { this._s(':lvl', v); }

}
/** Defines the NotesMasterExtensionList Class. Serialized as `p:extLst` */
export class NotesMasterExtensionList extends OxmlCompositeElement<NotesMasterExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the HandoutMasterExtensionList Class. Serialized as `p:extLst` */
export class HandoutMasterExtensionList extends OxmlCompositeElement<HandoutMasterExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the SlideMasterExtensionList Class. Serialized as `p:extLst` */
export class SlideMasterExtensionList extends OxmlCompositeElement<SlideMasterExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the TextStyles Class. Serialized as `p:txStyles` */
export class TextStyles extends OxmlCompositeElement<TitleStyle | BodyStyle | OtherStyle | ExtensionList> {

    public static override _Q = 'p:txStyles';
    /** Slide Master Title Text Style. */
    public get titleStyle(): TitleStyle | undefined { return this._f(TitleStyle); }
    /** Slide Master Body Text Style. */
    public get bodyStyle(): BodyStyle | undefined { return this._f(BodyStyle); }
    /** Slide Master Other Text Style. */
    public get otherStyle(): OtherStyle | undefined { return this._f(OtherStyle); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SlideLayoutIdList Class. Serialized as `p:sldLayoutIdLst` */
export class SlideLayoutIdList extends OxmlCompositeElement<SlideLayoutId> {

    public static override _Q = 'p:sldLayoutIdLst';

}
/** Defines the SlideLayoutExtensionList Class. Serialized as `p:extLst` */
export class SlideLayoutExtensionList extends OxmlCompositeElement<SlideLayoutExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the HeaderFooter Class. Serialized as `p:hf` */
export class HeaderFooter extends OxmlCompositeElement<ExtensionListWithModification> {

    public static override _Q = 'p:hf';
    public static override _A = [':sldNum',':hdr',':ftr',':dt',];
    /** Slide Number Placeholder. Serialized as `:sldNum` */
    public get slideNumber(): BooleanValue | undefined { return this._g(':sldNum'); }
    public set slideNumber(v: BooleanValue | undefined) { this._s(':sldNum', v); }
    /** Header Placeholder. Serialized as `:hdr` */
    public get header(): BooleanValue | undefined { return this._g(':hdr'); }
    public set header(v: BooleanValue | undefined) { this._s(':hdr', v); }
    /** Footer Placeholder. Serialized as `:ftr` */
    public get footer(): BooleanValue | undefined { return this._g(':ftr'); }
    public set footer(v: BooleanValue | undefined) { this._s(':ftr', v); }
    /** Date/Time Placeholder. Serialized as `:dt` */
    public get dateTime(): BooleanValue | undefined { return this._g(':dt'); }
    public set dateTime(v: BooleanValue | undefined) { this._s(':dt', v); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Defines the PresentationPropertiesExtension Class. Serialized as `p:ext` */
export class PresentationPropertiesExtension extends OxmlCompositeElement<P14DiscardImageEditData | P14DefaultImageDpi | A14TextMath | P15ChartTrackingReferenceBased> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P14DiscardImageEditData. */
    public get discardImageEditData(): P14DiscardImageEditData | undefined { return this._f(P14DiscardImageEditData); }
    /** Returns P14DefaultImageDpi. */
    public get defaultImageDpi(): P14DefaultImageDpi | undefined { return this._f(P14DefaultImageDpi); }
    /** Returns A14TextMath. */
    public get textMath(): A14TextMath | undefined { return this._f(A14TextMath); }
    /** Returns P15ChartTrackingReferenceBased. */
    public get chartTrackingReferenceBased(): P15ChartTrackingReferenceBased | undefined { return this._f(P15ChartTrackingReferenceBased); }

}
/** Defines the PresentationPropertiesExtensionList Class. Serialized as `p:extLst` */
export class PresentationPropertiesExtensionList extends OxmlCompositeElement<PresentationPropertiesExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the ColorMostRecentlyUsed Class. Serialized as `p:clrMru` */
export class ColorMostRecentlyUsed extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _Q = 'p:clrMru';

}
/** Defines the ShowProperties Class. Serialized as `p:showPr` */
export class ShowProperties extends OxmlCompositeElement<PresenterSlideMode | BrowseSlideMode | KioskSlideMode | SlideAll | SlideRange | CustomShowReference | PenColor | ShowPropertiesExtensionList> {

    public static override _Q = 'p:showPr';
    public static override _A = [':loop',':showNarration',':showAnimation',':useTimings',];
    /** Loop Slide Show. Serialized as `:loop` */
    public get loop(): BooleanValue | undefined { return this._g(':loop'); }
    public set loop(v: BooleanValue | undefined) { this._s(':loop', v); }
    /** Show Narration in Slide Show. Serialized as `:showNarration` */
    public get showNarration(): BooleanValue | undefined { return this._g(':showNarration'); }
    public set showNarration(v: BooleanValue | undefined) { this._s(':showNarration', v); }
    /** Show Animation in Slide Show. Serialized as `:showAnimation` */
    public get showAnimation(): BooleanValue | undefined { return this._g(':showAnimation'); }
    public set showAnimation(v: BooleanValue | undefined) { this._s(':showAnimation', v); }
    /** Use Timings in Slide Show. Serialized as `:useTimings` */
    public get useTimings(): BooleanValue | undefined { return this._g(':useTimings'); }
    public set useTimings(v: BooleanValue | undefined) { this._s(':useTimings', v); }

}
/** Defines the PrintingProperties Class. Serialized as `p:prnPr` */
export class PrintingProperties extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:prnPr';
    public static override _A = [':prnWhat',':clrMode',':hiddenSlides',':scaleToFitPaper',':frameSlides',];
    /** Print Output. Serialized as `:prnWhat` */
    public get printWhat(): PrintOutputValues | undefined { return this._g(':prnWhat'); }
    public set printWhat(v: PrintOutputValues | undefined) { this._s(':prnWhat', v); }
    /** Print Color Mode. Serialized as `:clrMode` */
    public get colorMode(): PrintColorModeValues | undefined { return this._g(':clrMode'); }
    public set colorMode(v: PrintColorModeValues | undefined) { this._s(':clrMode', v); }
    /** Print Hidden Slides. Serialized as `:hiddenSlides` */
    public get hiddenSlides(): BooleanValue | undefined { return this._g(':hiddenSlides'); }
    public set hiddenSlides(v: BooleanValue | undefined) { this._s(':hiddenSlides', v); }
    /** Scale to Fit Paper when printing. Serialized as `:scaleToFitPaper` */
    public get scaleToFitPaper(): BooleanValue | undefined { return this._g(':scaleToFitPaper'); }
    public set scaleToFitPaper(v: BooleanValue | undefined) { this._s(':scaleToFitPaper', v); }
    /** Frame slides when printing. Serialized as `:frameSlides` */
    public get frameSlides(): BooleanValue | undefined { return this._g(':frameSlides'); }
    public set frameSlides(v: BooleanValue | undefined) { this._s(':frameSlides', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Web Properties. Serialized as `p:webPr` */
export class WebProperties extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:webPr';
    public static override _A = [':showAnimation',':resizeGraphics',':allowPng',':relyOnVml',':organizeInFolders',':useLongFilenames',':imgSz',':encoding',':clr',];
    /** Show animation in HTML output. Serialized as `:showAnimation` */
    public get showAnimation(): BooleanValue | undefined { return this._g(':showAnimation'); }
    public set showAnimation(v: BooleanValue | undefined) { this._s(':showAnimation', v); }
    /** Resize graphics in HTML output. Serialized as `:resizeGraphics` */
    public get resizeGraphics(): BooleanValue | undefined { return this._g(':resizeGraphics'); }
    public set resizeGraphics(v: BooleanValue | undefined) { this._s(':resizeGraphics', v); }
    /** Allow PNG in HTML output. Serialized as `:allowPng` */
    public get allowPng(): BooleanValue | undefined { return this._g(':allowPng'); }
    public set allowPng(v: BooleanValue | undefined) { this._s(':allowPng', v); }
    /** Rely on VML for HTML output. Serialized as `:relyOnVml` */
    public get relyOnVml(): BooleanValue | undefined { return this._g(':relyOnVml'); }
    public set relyOnVml(v: BooleanValue | undefined) { this._s(':relyOnVml', v); }
    /** Organize HTML output in folders. Serialized as `:organizeInFolders` */
    public get organizeInFolders(): BooleanValue | undefined { return this._g(':organizeInFolders'); }
    public set organizeInFolders(v: BooleanValue | undefined) { this._s(':organizeInFolders', v); }
    /** Use long file names in HTML output. Serialized as `:useLongFilenames` */
    public get useLongFilenames(): BooleanValue | undefined { return this._g(':useLongFilenames'); }
    public set useLongFilenames(v: BooleanValue | undefined) { this._s(':useLongFilenames', v); }
    /** Image size for HTML output. Serialized as `:imgSz` */
    public get imageSize(): WebScreenSizeValues | undefined { return this._g(':imgSz'); }
    public set imageSize(v: WebScreenSizeValues | undefined) { this._s(':imgSz', v); }
    /** Encoding for HTML output. Serialized as `:encoding` */
    public get encoding(): StringValue | undefined { return this._g(':encoding'); }
    public set encoding(v: StringValue | undefined) { this._s(':encoding', v); }
    /** Slide Navigation Colors for HTML output. Serialized as `:clr` */
    public get color(): WebColorValues | undefined { return this._g(':clr'); }
    public set color(v: WebColorValues | undefined) { this._s(':clr', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** HTML Publishing Properties. Serialized as `p:htmlPubPr` */
export class HtmlPublishProperties extends OxmlCompositeElement<SlideAll | SlideRange | CustomShowReference | ExtensionList> {

    public static override _Q = 'p:htmlPubPr';
    public static override _A = [':showSpeakerNotes',':pubBrowser','r:id',];
    /** Show Speaker Notes. Serialized as `:showSpeakerNotes` */
    public get showSpeakerNotes(): BooleanValue | undefined { return this._g(':showSpeakerNotes'); }
    public set showSpeakerNotes(v: BooleanValue | undefined) { this._s(':showSpeakerNotes', v); }
    /** Browser Support Target. Serialized as `:pubBrowser` */
    public get targetBrowser(): HtmlPublishWebBrowserSupportValues | undefined { return this._g(':pubBrowser'); }
    public set targetBrowser(v: HtmlPublishWebBrowserSupportValues | undefined) { this._s(':pubBrowser', v); }
    /** Publish Path. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the PresentationExtension Class. Serialized as `p:ext` */
export class PresentationExtension extends OxmlCompositeElement<P14SectionProperties | P14SectionList | P15SlideGuideList | P15NotesGuideList> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P14SectionProperties. */
    public get sectionProperties(): P14SectionProperties | undefined { return this._f(P14SectionProperties); }
    /** Returns P14SectionList. */
    public get sectionList(): P14SectionList | undefined { return this._f(P14SectionList); }
    /** Returns P15SlideGuideList. */
    public get slideGuideList(): P15SlideGuideList | undefined { return this._f(P15SlideGuideList); }
    /** Returns P15NotesGuideList. */
    public get notesGuideList(): P15NotesGuideList | undefined { return this._f(P15NotesGuideList); }

}
/** Defines the PresentationExtensionList Class. Serialized as `p:extLst` */
export class PresentationExtensionList extends OxmlCompositeElement<PresentationExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the ModificationVerifier Class. Serialized as `p:modifyVerifier` */
export class ModificationVerifier extends OxmlLeafElement {

    public static override _Q = 'p:modifyVerifier';
    public static override _A = [':cryptProviderType',':cryptAlgorithmClass',':cryptAlgorithmType',':cryptAlgorithmSid',':spinCount',':saltData',':hashData',':cryptProvider',':algIdExt',':algIdExtSource',':cryptProviderTypeExt',':cryptProviderTypeExtSource',':algorithmName',':hashValue',':saltValue',':spinValue',];
    /** Cryptographic Provider Type. Serialized as `:cryptProviderType` */
    public get cryptographicProviderType(): CryptProviderValues | undefined { return this._g(':cryptProviderType'); }
    public set cryptographicProviderType(v: CryptProviderValues | undefined) { this._s(':cryptProviderType', v); }
    /** Cryptographic Algorithm Class. Serialized as `:cryptAlgorithmClass` */
    public get cryptographicAlgorithmClass(): CryptAlgorithmClassValues | undefined { return this._g(':cryptAlgorithmClass'); }
    public set cryptographicAlgorithmClass(v: CryptAlgorithmClassValues | undefined) { this._s(':cryptAlgorithmClass', v); }
    /** Cryptographic Algorithm Type. Serialized as `:cryptAlgorithmType` */
    public get cryptographicAlgorithmType(): CryptAlgorithmValues | undefined { return this._g(':cryptAlgorithmType'); }
    public set cryptographicAlgorithmType(v: CryptAlgorithmValues | undefined) { this._s(':cryptAlgorithmType', v); }
    /** Cryptographic Hashing Algorithm. Serialized as `:cryptAlgorithmSid` */
    public get cryptographicAlgorithmSid(): UInt32Value | undefined { return this._g(':cryptAlgorithmSid'); }
    public set cryptographicAlgorithmSid(v: UInt32Value | undefined) { this._s(':cryptAlgorithmSid', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `:spinCount` */
    public get spinCount(): UInt32Value | undefined { return this._g(':spinCount'); }
    public set spinCount(v: UInt32Value | undefined) { this._s(':spinCount', v); }
    /** Salt for Password Verifier. Serialized as `:saltData` */
    public get saltData(): Base64BinaryValue | undefined { return this._g(':saltData'); }
    public set saltData(v: Base64BinaryValue | undefined) { this._s(':saltData', v); }
    /** Password Hash. Serialized as `:hashData` */
    public get hashData(): StringValue | undefined { return this._g(':hashData'); }
    public set hashData(v: StringValue | undefined) { this._s(':hashData', v); }
    /** Cryptographic Provider. Serialized as `:cryptProvider` */
    public get cryptographicProvider(): StringValue | undefined { return this._g(':cryptProvider'); }
    public set cryptographicProvider(v: StringValue | undefined) { this._s(':cryptProvider', v); }
    /** Cryptographic Algorithm Extensibility. Serialized as `:algIdExt` */
    public get extendedCryptographicAlgorithm(): UInt32Value | undefined { return this._g(':algIdExt'); }
    public set extendedCryptographicAlgorithm(v: UInt32Value | undefined) { this._s(':algIdExt', v); }
    /** Algorithm Extensibility Source. Serialized as `:algIdExtSource` */
    public get extendedCryptographicAlgorithmSource(): StringValue | undefined { return this._g(':algIdExtSource'); }
    public set extendedCryptographicAlgorithmSource(v: StringValue | undefined) { this._s(':algIdExtSource', v); }
    /** Cryptographic Provider Type Extensibility. Serialized as `:cryptProviderTypeExt` */
    public get cryptographicProviderTypeExtensibility(): UInt32Value | undefined { return this._g(':cryptProviderTypeExt'); }
    public set cryptographicProviderTypeExtensibility(v: UInt32Value | undefined) { this._s(':cryptProviderTypeExt', v); }
    /** Provider Type Extensibility Source. Serialized as `:cryptProviderTypeExtSource` */
    public get cryptographicProviderTypeExtensibilitySource(): StringValue | undefined { return this._g(':cryptProviderTypeExtSource'); }
    public set cryptographicProviderTypeExtensibilitySource(v: StringValue | undefined) { this._s(':cryptProviderTypeExtSource', v); }
    /** algorithmName. Serialized as `:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g(':algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s(':algorithmName', v); }
    /** hashValue. Serialized as `:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g(':hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s(':hashValue', v); }
    /** saltValue. Serialized as `:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g(':saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s(':saltValue', v); }
    /** spinValue. Serialized as `:spinValue` */
    public get spinValue(): UInt32Value | undefined { return this._g(':spinValue'); }
    public set spinValue(v: UInt32Value | undefined) { this._s(':spinValue', v); }

}
/** Defines the Kinsoku Class. Serialized as `p:kinsoku` */
export class Kinsoku extends OxmlLeafElement {

    public static override _Q = 'p:kinsoku';
    public static override _A = [':lang',':invalStChars',':invalEndChars',];
    /** Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Invalid Kinsoku Start Characters. Serialized as `:invalStChars` */
    public get invalidStartChars(): StringValue | undefined { return this._g(':invalStChars'); }
    public set invalidStartChars(v: StringValue | undefined) { this._s(':invalStChars', v); }
    /** Invalid Kinsoku End Characters. Serialized as `:invalEndChars` */
    public get invalidEndChars(): StringValue | undefined { return this._g(':invalEndChars'); }
    public set invalidEndChars(v: StringValue | undefined) { this._s(':invalEndChars', v); }

}
/** Defines the PhotoAlbum Class. Serialized as `p:photoAlbum` */
export class PhotoAlbum extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:photoAlbum';
    public static override _A = [':bw',':showCaptions',':layout',':frame',];
    /** Black and White. Serialized as `:bw` */
    public get blackWhite(): BooleanValue | undefined { return this._g(':bw'); }
    public set blackWhite(v: BooleanValue | undefined) { this._s(':bw', v); }
    /** Show/Hide Captions. Serialized as `:showCaptions` */
    public get showCaptions(): BooleanValue | undefined { return this._g(':showCaptions'); }
    public set showCaptions(v: BooleanValue | undefined) { this._s(':showCaptions', v); }
    /** Photo Album Layout. Serialized as `:layout` */
    public get layout(): PhotoAlbumLayoutValues | undefined { return this._g(':layout'); }
    public set layout(v: PhotoAlbumLayoutValues | undefined) { this._s(':layout', v); }
    /** Frame Type. Serialized as `:frame` */
    public get frame(): PhotoAlbumFrameShapeValues | undefined { return this._g(':frame'); }
    public set frame(v: PhotoAlbumFrameShapeValues | undefined) { this._s(':frame', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the CustomShowList Class. Serialized as `p:custShowLst` */
export class CustomShowList extends OxmlCompositeElement<CustomShow> {

    public static override _Q = 'p:custShowLst';

}
/** Defines the EmbeddedFontList Class. Serialized as `p:embeddedFontLst` */
export class EmbeddedFontList extends OxmlCompositeElement<EmbeddedFont> {

    public static override _Q = 'p:embeddedFontLst';

}
/** Defines the SlideSize Class. Serialized as `p:sldSz` */
export class SlideSize extends OxmlLeafElement {

    public static override _Q = 'p:sldSz';
    public static override _A = [':cx',':cy',':type',];
    /** Extent Length. Serialized as `:cx` */
    public get cx(): Int32Value | undefined { return this._g(':cx'); }
    public set cx(v: Int32Value | undefined) { this._s(':cx', v); }
    /** Extent Width. Serialized as `:cy` */
    public get cy(): Int32Value | undefined { return this._g(':cy'); }
    public set cy(v: Int32Value | undefined) { this._s(':cy', v); }
    /** Type of Size. Serialized as `:type` */
    public get type(): SlideSizeValues | undefined { return this._g(':type'); }
    public set type(v: SlideSizeValues | undefined) { this._s(':type', v); }

}
/** Defines the SlideIdList Class. Serialized as `p:sldIdLst` */
export class SlideIdList extends OxmlCompositeElement<SlideId> {

    public static override _Q = 'p:sldIdLst';

}
/** Defines the HandoutMasterIdList Class. Serialized as `p:handoutMasterIdLst` */
export class HandoutMasterIdList extends OxmlCompositeElement<HandoutMasterId> {

    public static override _Q = 'p:handoutMasterIdLst';
    /** Handout Master ID. */
    public get handoutMasterId(): HandoutMasterId | undefined { return this._f(HandoutMasterId); }

}
/** Defines the NotesMasterIdList Class. Serialized as `p:notesMasterIdLst` */
export class NotesMasterIdList extends OxmlCompositeElement<NotesMasterId> {

    public static override _Q = 'p:notesMasterIdLst';
    /** Notes Master ID. */
    public get notesMasterId(): NotesMasterId | undefined { return this._f(NotesMasterId); }

}
/** Defines the SlideMasterIdList Class. Serialized as `p:sldMasterIdLst` */
export class SlideMasterIdList extends OxmlCompositeElement<SlideMasterId> {

    public static override _Q = 'p:sldMasterIdLst';

}
/** Defines the CommentExtensionList Class. Serialized as `p:extLst` */
export class CommentExtensionList extends OxmlCompositeElement<CommentExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the CommentAuthorExtensionList Class. Serialized as `p:extLst` */
export class CommentAuthorExtensionList extends OxmlCompositeElement<CommentAuthorExtension> {

    public static override _Q = 'p:extLst';

}
/** Defines the TimeListType Class. */
export abstract class TimeListType extends OxmlLeafElement {

    public static override _A = [':x',':y',];
    /** X coordinate. Serialized as `:x` */
    public get x(): Int32Value | undefined { return this._g(':x'); }
    public set x(v: Int32Value | undefined) { this._s(':x', v); }
    /** Y coordinate. Serialized as `:y` */
    public get y(): Int32Value | undefined { return this._g(':y'); }
    public set y(v: Int32Value | undefined) { this._s(':y', v); }

}
/** Defines the RotationCenter Class. Serialized as `p:rCtr` */
export class RotationCenter extends TimeListType {

    public static override _Q = 'p:rCtr';

}
/** Defines the ToPosition Class. Serialized as `p:to` */
export class ToPosition extends TimeListType {

    public static override _Q = 'p:to';

}
/** Defines the FromPosition Class. Serialized as `p:from` */
export class FromPosition extends TimeListType {

    public static override _Q = 'p:from';

}
/** Defines the ByPosition Class. Serialized as `p:by` */
export class ByPosition extends TimeListType {

    public static override _Q = 'p:by';

}
/** Defines the TimeAnimateValueList Class. Serialized as `p:tavLst` */
export class TimeAnimateValueList extends OxmlCompositeElement<TimeAnimateValue> {

    public static override _Q = 'p:tavLst';

}
/** Defines the TimeTypeListType Class. */
export abstract class TimeTypeListType extends OxmlCompositeElement<ParallelTimeNode | SequenceTimeNode | ExclusiveTimeNode | Animate | AnimateColor | AnimateEffect | AnimateMotion | AnimateRotation | AnimateScale | Command | SetBehavior | Audio | Video> {


}
/** Defines the SubTimeNodeList Class. Serialized as `p:subTnLst` */
export class SubTimeNodeList extends TimeTypeListType {

    public static override _Q = 'p:subTnLst';

}
/** Defines the ChildTimeNodeList Class. Serialized as `p:childTnLst` */
export class ChildTimeNodeList extends TimeTypeListType {

    public static override _Q = 'p:childTnLst';

}
/** Defines the Iterate Class. Serialized as `p:iterate` */
export class Iterate extends OxmlCompositeElement<TimeAbsolute | TimePercentage> {

    public static override _Q = 'p:iterate';
    public static override _A = [':type',':backwards',];
    /** Iterate Type. Serialized as `:type` */
    public get type(): IterateValues | undefined { return this._g(':type'); }
    public set type(v: IterateValues | undefined) { this._s(':type', v); }
    /** Backwards. Serialized as `:backwards` */
    public get backwards(): BooleanValue | undefined { return this._g(':backwards'); }
    public set backwards(v: BooleanValue | undefined) { this._s(':backwards', v); }
    /** Time Absolute. */
    public get timeAbsolute(): TimeAbsolute | undefined { return this._f(TimeAbsolute); }
    /** Time Percentage. */
    public get timePercentage(): TimePercentage | undefined { return this._f(TimePercentage); }

}
/** Defines the ApplicationNonVisualDrawingPropertiesExtension Class. Serialized as `p:ext` */
export class ApplicationNonVisualDrawingPropertiesExtension extends OxmlCompositeElement<P14Media | P14ModificationId> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P14Media. */
    public get media(): P14Media | undefined { return this._f(P14Media); }
    /** Returns P14ModificationId. */
    public get modificationId(): P14ModificationId | undefined { return this._f(P14ModificationId); }

}
/** Defines the ApplicationNonVisualDrawingPropertiesExtensionList Class. Serialized as `p:extLst` */
export class ApplicationNonVisualDrawingPropertiesExtensionList extends OxmlCompositeElement<ApplicationNonVisualDrawingPropertiesExtension> {

    public static override _Q = 'p:extLst';

}
/** Placeholder Shape. Serialized as `p:ph` */
export class PlaceholderShape extends OxmlCompositeElement<ExtensionListWithModification> {

    public static override _Q = 'p:ph';
    public static override _A = [':type',':orient',':sz',':idx',':hasCustomPrompt',];
    /** Placeholder Type. Serialized as `:type` */
    public get type(): PlaceholderValues | undefined { return this._g(':type'); }
    public set type(v: PlaceholderValues | undefined) { this._s(':type', v); }
    /** Placeholder Orientation. Serialized as `:orient` */
    public get orientation(): DirectionValues | undefined { return this._g(':orient'); }
    public set orientation(v: DirectionValues | undefined) { this._s(':orient', v); }
    /** Placeholder Size. Serialized as `:sz` */
    public get size(): PlaceholderSizeValues | undefined { return this._g(':sz'); }
    public set size(v: PlaceholderSizeValues | undefined) { this._s(':sz', v); }
    /** Placeholder Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Placeholder has custom prompt. Serialized as `:hasCustomPrompt` */
    public get hasCustomPrompt(): BooleanValue | undefined { return this._g(':hasCustomPrompt'); }
    public set hasCustomPrompt(v: BooleanValue | undefined) { this._s(':hasCustomPrompt', v); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Defines the NotesMasterExtension Class. Serialized as `p:ext` */
export class NotesMasterExtension extends OxmlCompositeElement<P15SlideGuideList> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P15SlideGuideList. */
    public get slideGuideList(): P15SlideGuideList | undefined { return this._f(P15SlideGuideList); }

}
/** Defines the HandoutMasterExtension Class. Serialized as `p:ext` */
export class HandoutMasterExtension extends OxmlCompositeElement<P15SlideGuideList> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P15SlideGuideList. */
    public get slideGuideList(): P15SlideGuideList | undefined { return this._f(P15SlideGuideList); }

}
/** Defines the SlideMasterExtension Class. Serialized as `p:ext` */
export class SlideMasterExtension extends OxmlCompositeElement<P15SlideGuideList> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P15SlideGuideList. */
    public get slideGuideList(): P15SlideGuideList | undefined { return this._f(P15SlideGuideList); }

}
/** Defines the SlideLayoutExtension Class. Serialized as `p:ext` */
export class SlideLayoutExtension extends OxmlCompositeElement<P15SlideGuideList> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P15SlideGuideList. */
    public get slideGuideList(): P15SlideGuideList | undefined { return this._f(P15SlideGuideList); }

}
/** Defines the CommentExtension Class. Serialized as `p:ext` */
export class CommentExtension extends OxmlCompositeElement<P15ThreadingInfo> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P15ThreadingInfo. */
    public get threadingInfo(): P15ThreadingInfo | undefined { return this._f(P15ThreadingInfo); }

}
/** Defines the CommentAuthorExtension Class. Serialized as `p:ext` */
export class CommentAuthorExtension extends OxmlCompositeElement<P15PresenceInfo> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P15PresenceInfo. */
    public get presenceInfo(): P15PresenceInfo | undefined { return this._f(P15PresenceInfo); }

}
/** Defines the TimeListSubShapeIdType Class. */
export abstract class TimeListSubShapeIdType extends OxmlLeafElement {

    public static override _A = [':spid',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }

}
/** Subshape. Serialized as `p:subSp` */
export class SubShape extends TimeListSubShapeIdType {

    public static override _Q = 'p:subSp';

}
/** Ink Target. Serialized as `p:inkTgt` */
export class InkTarget extends TimeListSubShapeIdType {

    public static override _Q = 'p:inkTgt';

}
/** Shape Target. Serialized as `p:spTgt` */
export class ShapeTarget extends OxmlCompositeElement<BackgroundAnimation | SubShape | OleChartElement | TextElement | GraphicElement> {

    public static override _Q = 'p:spTgt';
    public static override _A = [':spid',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** Background. */
    public get backgroundAnimation(): BackgroundAnimation | undefined { return this._f(BackgroundAnimation); }
    /** Subshape. */
    public get subShape(): SubShape | undefined { return this._f(SubShape); }
    /** OLE Chart Element. */
    public get oleChartElement(): OleChartElement | undefined { return this._f(OleChartElement); }
    /** Text Element. */
    public get textElement(): TextElement | undefined { return this._f(TextElement); }
    /** Graphic Element. */
    public get graphicElement(): GraphicElement | undefined { return this._f(GraphicElement); }

}
/** Defines the ShowPropertiesExtensionList Class. Serialized as `p:extLst` */
export class ShowPropertiesExtensionList extends OxmlCompositeElement<ShowPropertiesExtension> {

    public static override _Q = 'p:extLst';

}
/** Connection Shape. Serialized as `p:cxnSp` */
export class ConnectionShape extends OxmlCompositeElement<NonVisualConnectionShapeProperties | ShapeProperties | ShapeStyle | ExtensionListWithModification> {

    public static override _Q = 'p:cxnSp';
    /** Non-Visual Properties for a Connection Shape. */
    public get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined { return this._f(NonVisualConnectionShapeProperties); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Connector Shape Style. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Graphic Frame. Serialized as `p:graphicFrame` */
export class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Transform | AGraphic | ExtensionListWithModification> {

    public static override _Q = 'p:graphicFrame';
    /** Non-Visual Properties for a Graphic Frame. */
    public get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined { return this._f(NonVisualGraphicFrameProperties); }
    /** 2D Transform for Graphic Frame. */
    public get transform(): Transform | undefined { return this._f(Transform); }
    /** Returns AGraphic. */
    public get graphic(): AGraphic | undefined { return this._f(AGraphic); }
    /** Extension List with Modification Flag. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Shape. Serialized as `p:sp` */
export class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | ShapeStyle | TextBody | ExtensionListWithModification> {

    public static override _Q = 'p:sp';
    public static override _A = [':useBgFill',];
    /** Use Background Fill. Serialized as `:useBgFill` */
    public get useBackgroundFill(): BooleanValue | undefined { return this._g(':useBgFill'); }
    public set useBackgroundFill(v: BooleanValue | undefined) { this._s(':useBgFill', v); }
    /** Non-Visual Properties for a Shape. */
    public get nonVisualShapeProperties(): NonVisualShapeProperties | undefined { return this._f(NonVisualShapeProperties); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Shape Style. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Shape Text Body. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Group Shape Properties. Serialized as `p:grpSpPr` */
export class GroupShapeProperties extends OxmlCompositeElement<ATransformGroup | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag | AScene3DType | AExtensionList> {

    public static override _Q = 'p:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): ATransformGroup | undefined { return this._f(ATransformGroup); }

}
/** Non-Visual Properties for a Group Shape. Serialized as `p:nvGrpSpPr` */
export class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties | ApplicationNonVisualDrawingProperties> {

    public static override _Q = 'p:nvGrpSpPr';
    /** Non-visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Group Shape Drawing Properties. */
    public get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined { return this._f(NonVisualGroupShapeDrawingProperties); }
    /** Non-Visual Properties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }

}
/** Defines the CommonSlideDataExtensionList Class. Serialized as `p:extLst` */
export class CommonSlideDataExtensionList extends OxmlCompositeElement<CommonSlideDataExtension> {

    public static override _Q = 'p:extLst';

}
/** List of controls. Serialized as `p:controls` */
export class ControlList extends OxmlCompositeElement<Control> {

    public static override _Q = 'p:controls';

}
/** Customer Data List. Serialized as `p:custDataLst` */
export class CustomerDataList extends OxmlCompositeElement<CustomerData | CustomerDataTags> {

    public static override _Q = 'p:custDataLst';

}
/** Defines the GroupShapeType Class. */
export abstract class GroupShapeType extends OxmlCompositeElement<NonVisualGroupShapeProperties | GroupShapeProperties | Shape | GroupShape | GraphicFrame | ConnectionShape | Picture | ContentPart | ExtensionListWithModification> {

    /** Non-Visual Properties for a Group Shape. */
    public get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined { return this._f(NonVisualGroupShapeProperties); }
    /** Group Shape Properties. */
    public get groupShapeProperties(): GroupShapeProperties | undefined { return this._f(GroupShapeProperties); }

}
/** Group Shape. Serialized as `p:grpSp` */
export class GroupShape extends GroupShapeType {

    public static override _Q = 'p:grpSp';

}
/** Shape Tree. Serialized as `p:spTree` */
export class ShapeTree extends GroupShapeType {

    public static override _Q = 'p:spTree';

}
/** Slide Background. Serialized as `p:bg` */
export class Background extends OxmlCompositeElement<BackgroundProperties | BackgroundStyleReference> {

    public static override _Q = 'p:bg';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** Background Properties. */
    public get backgroundProperties(): BackgroundProperties | undefined { return this._f(BackgroundProperties); }
    /** Background Style Reference. */
    public get backgroundStyleReference(): BackgroundStyleReference | undefined { return this._f(BackgroundStyleReference); }

}
/** Defines the SlideExtensionList Class. Serialized as `p:extLst` */
export class SlideExtensionList extends OxmlCompositeElement<SlideExtension> {

    public static override _Q = 'p:extLst';

}
/** Slide Timing Information for a Slide. Serialized as `p:timing` */
export class Timing extends OxmlCompositeElement<TimeNodeList | BuildList | ExtensionListWithModification> {

    public static override _Q = 'p:timing';
    /** Returns TimeNodeList. */
    public get timeNodeList(): TimeNodeList | undefined { return this._f(TimeNodeList); }
    /** Build List. */
    public get buildList(): BuildList | undefined { return this._f(BuildList); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Slide Transition. Serialized as `p:transition` */
export class Transition extends OxmlCompositeElement<BlindsTransition | CheckerTransition | CircleTransition | DissolveTransition | CombTransition | CoverTransition | CutTransition | DiamondTransition | FadeTransition | NewsflashTransition | PlusTransition | PullTransition | PushTransition | RandomTransition | RandomBarTransition | SplitTransition | StripsTransition | WedgeTransition | WheelTransition | WipeTransition | ZoomTransition | P14FlashTransition | P14VortexTransition | P14SwitchTransition | P14FlipTransition | P14RippleTransition | P14GlitterTransition | P14HoneycombTransition | P14PrismTransition | P14DoorsTransition | P14WindowTransition | P14ShredTransition | P14FerrisTransition | P14FlythroughTransition | P14WarpTransition | P14GalleryTransition | P14ConveyorTransition | P14PanTransition | P14RevealTransition | P14WheelReverseTransition | P15PresetTransition | SoundAction | ExtensionListWithModification> {

    public static override _Q = 'p:transition';
    public static override _A = [':spd','p14:dur',':advClick',':advTm',];
    /** spd. Serialized as `:spd` */
    public get speed(): TransitionSpeedValues | undefined { return this._g(':spd'); }
    public set speed(v: TransitionSpeedValues | undefined) { this._s(':spd', v); }
    /** dur. Serialized as `p14:dur` */
    public get duration(): StringValue | undefined { return this._g('p14:dur'); }
    public set duration(v: StringValue | undefined) { this._s('p14:dur', v); }
    /** Specifies whether a mouse click will advance the slide.. Serialized as `:advClick` */
    public get advanceOnClick(): BooleanValue | undefined { return this._g(':advClick'); }
    public set advanceOnClick(v: BooleanValue | undefined) { this._s(':advClick', v); }
    /** advTm. Serialized as `:advTm` */
    public get advanceAfterTime(): StringValue | undefined { return this._g(':advTm'); }
    public set advanceAfterTime(v: StringValue | undefined) { this._s(':advTm', v); }

}
/** Defines the OleObjectLink Class. Serialized as `p:link` */
export class OleObjectLink extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:link';
    public static override _A = [':updateAutomatic',];
    /** Update Linked OLE Objects Automatically. Serialized as `:updateAutomatic` */
    public get autoUpdate(): BooleanValue | undefined { return this._g(':updateAutomatic'); }
    public set autoUpdate(v: BooleanValue | undefined) { this._s(':updateAutomatic', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the OleObjectEmbed Class. Serialized as `p:embed` */
export class OleObjectEmbed extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:embed';
    public static override _A = [':followColorScheme',];
    /** Color Scheme Properties for OLE Object. Serialized as `:followColorScheme` */
    public get followColorScheme(): OleObjectFollowColorSchemeValues | undefined { return this._g(':followColorScheme'); }
    public set followColorScheme(v: OleObjectFollowColorSchemeValues | undefined) { this._s(':followColorScheme', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the Picture Class. Serialized as `p:pic` */
export class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | ShapeStyle | ExtensionListWithModification> {

    public static override _Q = 'p:pic';
    /** Non-Visual Properties for a Picture. */
    public get nonVisualPictureProperties(): NonVisualPictureProperties | undefined { return this._f(NonVisualPictureProperties); }
    /** Picture Fill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Returns ShapeProperties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ShapeStyle. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Defines the ShowPropertiesExtension Class. Serialized as `p:ext` */
export class ShowPropertiesExtension extends OxmlCompositeElement<P14BrowseMode | P14LaserColor | P14ShowMediaControls> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P14BrowseMode. */
    public get browseMode(): P14BrowseMode | undefined { return this._f(P14BrowseMode); }
    /** Returns P14LaserColor. */
    public get laserColor(): P14LaserColor | undefined { return this._f(P14LaserColor); }
    /** Returns P14ShowMediaControls. */
    public get showMediaControls(): P14ShowMediaControls | undefined { return this._f(P14ShowMediaControls); }

}
/** Defines the CommonSlideDataExtension Class. Serialized as `p:ext` */
export class CommonSlideDataExtension extends OxmlCompositeElement<P14CreationId> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P14CreationId. */
    public get creationId(): P14CreationId | undefined { return this._f(P14CreationId); }

}
/** Defines the SlideExtension Class. Serialized as `p:ext` */
export class SlideExtension extends OxmlCompositeElement<P14LaserTraceList | P14ShowEventRecordList | P188CommentRelationship> {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns P14LaserTraceList. */
    public get laserTraceList(): P14LaserTraceList | undefined { return this._f(P14LaserTraceList); }
    /** Returns P14ShowEventRecordList. */
    public get showEventRecordList(): P14ShowEventRecordList | undefined { return this._f(P14ShowEventRecordList); }
    /** Returns P188CommentRelationship. */
    public get commentRelationship(): P188CommentRelationship | undefined { return this._f(P188CommentRelationship); }

}
/** Defines the PositiveSize2DType Class. */
export abstract class PositiveSize2DType extends OxmlLeafElement {

    public static override _A = [':cx',':cy',];
    /** Extent Length. Serialized as `:cx` */
    public get cx(): Int64Value | undefined { return this._g(':cx'); }
    public set cx(v: Int64Value | undefined) { this._s(':cx', v); }
    /** Extent Width. Serialized as `:cy` */
    public get cy(): Int64Value | undefined { return this._g(':cy'); }
    public set cy(v: Int64Value | undefined) { this._s(':cy', v); }

}
/** Defines the NotesSize Class. Serialized as `p:notesSz` */
export class NotesSize extends PositiveSize2DType {

    public static override _Q = 'p:notesSz';

}
/** Grid Spacing. Serialized as `p:gridSpacing` */
export class GridSpacing extends PositiveSize2DType {

    public static override _Q = 'p:gridSpacing';

}
/** Notes View Properties. Serialized as `p:notesViewPr` */
export class NotesViewProperties extends OxmlCompositeElement<CommonSlideViewProperties | ExtensionList> {

    public static override _Q = 'p:notesViewPr';
    /** Common Slide View Properties. */
    public get commonSlideViewProperties(): CommonSlideViewProperties | undefined { return this._f(CommonSlideViewProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Slide Sorter View Properties. Serialized as `p:sorterViewPr` */
export class SorterViewProperties extends OxmlCompositeElement<CommonViewProperties | ExtensionList> {

    public static override _Q = 'p:sorterViewPr';
    public static override _A = [':showFormatting',];
    /** Show Formatting. Serialized as `:showFormatting` */
    public get showFormatting(): BooleanValue | undefined { return this._g(':showFormatting'); }
    public set showFormatting(v: BooleanValue | undefined) { this._s(':showFormatting', v); }
    /** Base properties for Slide Sorter View. */
    public get commonViewProperties(): CommonViewProperties | undefined { return this._f(CommonViewProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Notes Text View Properties. Serialized as `p:notesTextViewPr` */
export class NotesTextViewProperties extends OxmlCompositeElement<CommonViewProperties | ExtensionList> {

    public static override _Q = 'p:notesTextViewPr';
    /** Base properties for Notes View. */
    public get commonViewProperties(): CommonViewProperties | undefined { return this._f(CommonViewProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Outline View Properties. Serialized as `p:outlineViewPr` */
export class OutlineViewProperties extends OxmlCompositeElement<CommonViewProperties | OutlineViewSlideList | ExtensionList> {

    public static override _Q = 'p:outlineViewPr';
    /** Common View Properties. */
    public get commonViewProperties(): CommonViewProperties | undefined { return this._f(CommonViewProperties); }
    /** List of Presentation Slides. */
    public get outlineViewSlideList(): OutlineViewSlideList | undefined { return this._f(OutlineViewSlideList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Slide View Properties. Serialized as `p:slideViewPr` */
export class SlideViewProperties extends OxmlCompositeElement<CommonSlideViewProperties | ExtensionList> {

    public static override _Q = 'p:slideViewPr';
    /** Returns CommonSlideViewProperties. */
    public get commonSlideViewProperties(): CommonSlideViewProperties | undefined { return this._f(CommonSlideViewProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Normal View Properties. Serialized as `p:normalViewPr` */
export class NormalViewProperties extends OxmlCompositeElement<RestoredLeft | RestoredTop | ExtensionList> {

    public static override _Q = 'p:normalViewPr';
    public static override _A = [':showOutlineIcons',':snapVertSplitter',':vertBarState',':horzBarState',':preferSingleView',];
    /** Show Outline Icons in Normal View. Serialized as `:showOutlineIcons` */
    public get showOutlineIcons(): BooleanValue | undefined { return this._g(':showOutlineIcons'); }
    public set showOutlineIcons(v: BooleanValue | undefined) { this._s(':showOutlineIcons', v); }
    /** Snap Vertical Splitter. Serialized as `:snapVertSplitter` */
    public get snapVerticalSplitter(): BooleanValue | undefined { return this._g(':snapVertSplitter'); }
    public set snapVerticalSplitter(v: BooleanValue | undefined) { this._s(':snapVertSplitter', v); }
    /** State of the Vertical Splitter Bar. Serialized as `:vertBarState` */
    public get verticalBarState(): SplitterBarStateValues | undefined { return this._g(':vertBarState'); }
    public set verticalBarState(v: SplitterBarStateValues | undefined) { this._s(':vertBarState', v); }
    /** State of the Horizontal Splitter Bar. Serialized as `:horzBarState` */
    public get horizontalBarState(): SplitterBarStateValues | undefined { return this._g(':horzBarState'); }
    public set horizontalBarState(v: SplitterBarStateValues | undefined) { this._s(':horzBarState', v); }
    /** Prefer Single View. Serialized as `:preferSingleView` */
    public get preferSingleView(): BooleanValue | undefined { return this._g(':preferSingleView'); }
    public set preferSingleView(v: BooleanValue | undefined) { this._s(':preferSingleView', v); }
    /** Normal View Restored Left Properties. */
    public get restoredLeft(): RestoredLeft | undefined { return this._f(RestoredLeft); }
    /** Normal View Restored Top Properties. */
    public get restoredTop(): RestoredTop | undefined { return this._f(RestoredTop); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the CommonSlideViewProperties Class. Serialized as `p:cSldViewPr` */
export class CommonSlideViewProperties extends OxmlCompositeElement<CommonViewProperties | GuideList> {

    public static override _Q = 'p:cSldViewPr';
    public static override _A = [':snapToGrid',':snapToObjects',':showGuides',];
    /** Snap Objects to Grid. Serialized as `:snapToGrid` */
    public get snapToGrid(): BooleanValue | undefined { return this._g(':snapToGrid'); }
    public set snapToGrid(v: BooleanValue | undefined) { this._s(':snapToGrid', v); }
    /** Snap Objects to Objects. Serialized as `:snapToObjects` */
    public get snapToObjects(): BooleanValue | undefined { return this._g(':snapToObjects'); }
    public set snapToObjects(v: BooleanValue | undefined) { this._s(':snapToObjects', v); }
    /** Show Guides in View. Serialized as `:showGuides` */
    public get showGuides(): BooleanValue | undefined { return this._g(':showGuides'); }
    public set showGuides(v: BooleanValue | undefined) { this._s(':showGuides', v); }
    /** Base properties for Slide View. */
    public get commonViewProperties(): CommonViewProperties | undefined { return this._f(CommonViewProperties); }
    /** List of Guides. */
    public get guideList(): GuideList | undefined { return this._f(GuideList); }

}
/** List of Guides. Serialized as `p:guideLst` */
export class GuideList extends OxmlCompositeElement<Guide> {

    public static override _Q = 'p:guideLst';

}
/** A Guide. Serialized as `p:guide` */
export class Guide extends OxmlLeafElement {

    public static override _Q = 'p:guide';
    public static override _A = [':orient',':pos',];
    /** Guide Orientation. Serialized as `:orient` */
    public get orientation(): DirectionValues | undefined { return this._g(':orient'); }
    public set orientation(v: DirectionValues | undefined) { this._s(':orient', v); }
    /** Guide Position. Serialized as `:pos` */
    public get position(): Int32Value | undefined { return this._g(':pos'); }
    public set position(v: Int32Value | undefined) { this._s(':pos', v); }

}
/** List of Presentation Slides. Serialized as `p:sldLst` */
export class OutlineViewSlideList extends OxmlCompositeElement<OutlineViewSlideListEntry> {

    public static override _Q = 'p:sldLst';

}
/** Presentation Slide. Serialized as `p:sld` */
export class OutlineViewSlideListEntry extends OxmlLeafElement {

    public static override _Q = 'p:sld';
    public static override _A = ['r:id',':collapse',];
    /** Relationship Identifier. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Collapsed. Serialized as `:collapse` */
    public get collapse(): BooleanValue | undefined { return this._g(':collapse'); }
    public set collapse(v: BooleanValue | undefined) { this._s(':collapse', v); }

}
/** Base properties for Notes View. Serialized as `p:cViewPr` */
export class CommonViewProperties extends OxmlCompositeElement<ScaleFactor | Origin> {

    public static override _Q = 'p:cViewPr';
    public static override _A = [':varScale',];
    /** Variable Scale. Serialized as `:varScale` */
    public get variableScale(): BooleanValue | undefined { return this._g(':varScale'); }
    public set variableScale(v: BooleanValue | undefined) { this._s(':varScale', v); }
    /** View Scale. */
    public get scaleFactor(): ScaleFactor | undefined { return this._f(ScaleFactor); }
    /** View Origin. */
    public get origin(): Origin | undefined { return this._f(Origin); }

}
/** Defines the Point2DType Class. */
export abstract class Point2DType extends OxmlLeafElement {

    public static override _A = [':x',':y',];
    /** X-Axis Coordinate. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Axis Coordinate. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }

}
/** Defines the Position Class. Serialized as `p:pos` */
export class Position extends Point2DType {

    public static override _Q = 'p:pos';

}
/** View Origin. Serialized as `p:origin` */
export class Origin extends Point2DType {

    public static override _Q = 'p:origin';

}
/** View Scale. Serialized as `p:scale` */
export class ScaleFactor extends OxmlCompositeElement<AScaleX | AScaleY> {

    public static override _Q = 'p:scale';
    /** Horizontal Ratio. */
    public get scaleX(): AScaleX | undefined { return this._f(AScaleX); }
    /** Vertical Ratio. */
    public get scaleY(): AScaleY | undefined { return this._f(AScaleY); }

}
/** Defines the NormalViewPortionType Class. */
export abstract class NormalViewPortionType extends OxmlLeafElement {

    public static override _A = [':sz',':autoAdjust',];
    /** Normal View Dimension Size. Serialized as `:sz` */
    public get size(): Int32Value | undefined { return this._g(':sz'); }
    public set size(v: Int32Value | undefined) { this._s(':sz', v); }
    /** Auto Adjust Normal View. Serialized as `:autoAdjust` */
    public get autoAdjust(): BooleanValue | undefined { return this._g(':autoAdjust'); }
    public set autoAdjust(v: BooleanValue | undefined) { this._s(':autoAdjust', v); }

}
/** Normal View Restored Top Properties. Serialized as `p:restoredTop` */
export class RestoredTop extends NormalViewPortionType {

    public static override _Q = 'p:restoredTop';

}
/** Normal View Restored Left Properties. Serialized as `p:restoredLeft` */
export class RestoredLeft extends NormalViewPortionType {

    public static override _Q = 'p:restoredLeft';

}
/** Programmable Extensibility Tag. Serialized as `p:tag` */
export class Tag extends OxmlLeafElement {

    public static override _Q = 'p:tag';
    public static override _A = [':name',':val',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Common slide data for notes slides. Serialized as `p:cSld` */
export class CommonSlideData extends OxmlCompositeElement<Background | ShapeTree | CustomerDataList | ControlList | CommonSlideDataExtensionList> {

    public static override _Q = 'p:cSld';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Slide Background. */
    public get background(): Background | undefined { return this._f(Background); }
    /** Shape Tree. */
    public get shapeTree(): ShapeTree | undefined { return this._f(ShapeTree); }
    /** Customer Data List. */
    public get customerDataList(): CustomerDataList | undefined { return this._f(CustomerDataList); }
    /** List of controls. */
    public get controlList(): ControlList | undefined { return this._f(ControlList); }
    /** Returns CommonSlideDataExtensionList. */
    public get commonSlideDataExtensionList(): CommonSlideDataExtensionList | undefined { return this._f(CommonSlideDataExtensionList); }

}
/** Slide Layout Id. Serialized as `p:sldLayoutId` */
export class SlideLayoutId extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:sldLayoutId';
    public static override _A = [':id','r:id',];
    /** ID Tag. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** ID Tag. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the TextListStyleType Class. */
export abstract class TextListStyleType extends OxmlCompositeElement<ADefaultParagraphProperties | ALevel1ParagraphProperties | ALevel2ParagraphProperties | ALevel3ParagraphProperties | ALevel4ParagraphProperties | ALevel5ParagraphProperties | ALevel6ParagraphProperties | ALevel7ParagraphProperties | ALevel8ParagraphProperties | ALevel9ParagraphProperties | AExtensionList> {

    /** Default Paragraph Style. */
    public get defaultParagraphProperties(): ADefaultParagraphProperties | undefined { return this._f(ADefaultParagraphProperties); }
    /** List Level 1 Text Style. */
    public get level1ParagraphProperties(): ALevel1ParagraphProperties | undefined { return this._f(ALevel1ParagraphProperties); }
    /** List Level 2 Text Style. */
    public get level2ParagraphProperties(): ALevel2ParagraphProperties | undefined { return this._f(ALevel2ParagraphProperties); }
    /** List Level 3 Text Style. */
    public get level3ParagraphProperties(): ALevel3ParagraphProperties | undefined { return this._f(ALevel3ParagraphProperties); }
    /** List Level 4 Text Style. */
    public get level4ParagraphProperties(): ALevel4ParagraphProperties | undefined { return this._f(ALevel4ParagraphProperties); }
    /** List Level 5 Text Style. */
    public get level5ParagraphProperties(): ALevel5ParagraphProperties | undefined { return this._f(ALevel5ParagraphProperties); }
    /** List Level 6 Text Style. */
    public get level6ParagraphProperties(): ALevel6ParagraphProperties | undefined { return this._f(ALevel6ParagraphProperties); }
    /** List Level 7 Text Style. */
    public get level7ParagraphProperties(): ALevel7ParagraphProperties | undefined { return this._f(ALevel7ParagraphProperties); }
    /** List Level 8 Text Style. */
    public get level8ParagraphProperties(): ALevel8ParagraphProperties | undefined { return this._f(ALevel8ParagraphProperties); }
    /** List Level 9 Text Style. */
    public get level9ParagraphProperties(): ALevel9ParagraphProperties | undefined { return this._f(ALevel9ParagraphProperties); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Defines the NotesStyle Class. Serialized as `p:notesStyle` */
export class NotesStyle extends TextListStyleType {

    public static override _Q = 'p:notesStyle';

}
/** Defines the DefaultTextStyle Class. Serialized as `p:defaultTextStyle` */
export class DefaultTextStyle extends TextListStyleType {

    public static override _Q = 'p:defaultTextStyle';

}
/** Slide Master Other Text Style. Serialized as `p:otherStyle` */
export class OtherStyle extends TextListStyleType {

    public static override _Q = 'p:otherStyle';

}
/** Slide Master Body Text Style. Serialized as `p:bodyStyle` */
export class BodyStyle extends TextListStyleType {

    public static override _Q = 'p:bodyStyle';

}
/** Slide Master Title Text Style. Serialized as `p:titleStyle` */
export class TitleStyle extends TextListStyleType {

    public static override _Q = 'p:titleStyle';

}
/** Non-Visual Group Shape Drawing Properties. Serialized as `p:cNvGrpSpPr` */
export class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<AGroupShapeLocks | ANonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'p:cNvGrpSpPr';
    /** Returns AGroupShapeLocks. */
    public get groupShapeLocks(): AGroupShapeLocks | undefined { return this._f(AGroupShapeLocks); }
    /** Returns ANonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): ANonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(ANonVisualGroupDrawingShapePropsExtensionList); }

}
/** 2D Transform for Graphic Frame. Serialized as `p:xfrm` */
export class Transform extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'p:xfrm';
    public static override _A = [':rot',':flipH',':flipV',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): Int32Value | undefined { return this._g(':rot'); }
    public set rotation(v: Int32Value | undefined) { this._s(':rot', v); }
    /** Horizontal Flip. Serialized as `:flipH` */
    public get horizontalFlip(): BooleanValue | undefined { return this._g(':flipH'); }
    public set horizontalFlip(v: BooleanValue | undefined) { this._s(':flipH', v); }
    /** Vertical Flip. Serialized as `:flipV` */
    public get verticalFlip(): BooleanValue | undefined { return this._g(':flipV'); }
    public set verticalFlip(v: BooleanValue | undefined) { this._s(':flipV', v); }
    /** Offset. */
    public get offset(): AOffset | undefined { return this._f(AOffset); }
    /** Extents. */
    public get extents(): AExtents | undefined { return this._f(AExtents); }

}
/** Non-Visual Properties for a Graphic Frame. Serialized as `p:nvGraphicFramePr` */
export class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties | ApplicationNonVisualDrawingProperties> {

    public static override _Q = 'p:nvGraphicFramePr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Graphic Frame Drawing Properties. */
    public get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined { return this._f(NonVisualGraphicFrameDrawingProperties); }
    /** Application Non-Visual Drawing Properties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }

}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `p:cNvGraphicFramePr` */
export class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<AGraphicFrameLocks | AExtensionList> {

    public static override _Q = 'p:cNvGraphicFramePr';
    /** Graphic Frame Locks. */
    public get graphicFrameLocks(): AGraphicFrameLocks | undefined { return this._f(AGraphicFrameLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Picture Fill. Serialized as `p:blipFill` */
export class BlipFill extends OxmlCompositeElement<ABlip | ASourceRectangle | ATile | AStretch> {

    public static override _Q = 'p:blipFill';
    public static override _A = [':dpi',':rotWithShape',];
    /** DPI Setting. Serialized as `:dpi` */
    public get dpi(): UInt32Value | undefined { return this._g(':dpi'); }
    public set dpi(v: UInt32Value | undefined) { this._s(':dpi', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** Returns ABlip. */
    public get blip(): ABlip | undefined { return this._f(ABlip); }
    /** Source Rectangle. */
    public get sourceRectangle(): ASourceRectangle | undefined { return this._f(ASourceRectangle); }

}
/** Non-Visual Properties for a Picture. Serialized as `p:nvPicPr` */
export class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties | ApplicationNonVisualDrawingProperties> {

    public static override _Q = 'p:nvPicPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Picture Drawing Properties. */
    public get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined { return this._f(NonVisualPictureDrawingProperties); }
    /** Returns ApplicationNonVisualDrawingProperties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }

}
/** Non-Visual Picture Drawing Properties. Serialized as `p:cNvPicPr` */
export class NonVisualPictureDrawingProperties extends OxmlCompositeElement<APictureLocks | ANonVisualPicturePropertiesExtensionList> {

    public static override _Q = 'p:cNvPicPr';
    public static override _A = [':preferRelativeResize',];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    public get preferRelativeResize(): BooleanValue | undefined { return this._g(':preferRelativeResize'); }
    public set preferRelativeResize(v: BooleanValue | undefined) { this._s(':preferRelativeResize', v); }
    /** Returns APictureLocks. */
    public get pictureLocks(): APictureLocks | undefined { return this._f(APictureLocks); }
    /** Returns ANonVisualPicturePropertiesExtensionList. */
    public get nonVisualPicturePropertiesExtensionList(): ANonVisualPicturePropertiesExtensionList | undefined { return this._f(ANonVisualPicturePropertiesExtensionList); }

}
/** Non-Visual Properties for a Connection Shape. Serialized as `p:nvCxnSpPr` */
export class NonVisualConnectionShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectorShapeDrawingProperties | ApplicationNonVisualDrawingProperties> {

    public static override _Q = 'p:nvCxnSpPr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Connector Shape Drawing Properties. */
    public get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined { return this._f(NonVisualConnectorShapeDrawingProperties); }
    /** Application Non-Visual Drawing Properties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }

}
/** Non-Visual Connector Shape Drawing Properties. Serialized as `p:cNvCxnSpPr` */
export class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<AConnectionShapeLocks | AStartConnection | AEndConnection | AExtensionList> {

    public static override _Q = 'p:cNvCxnSpPr';
    /** Connection Shape Locks. */
    public get connectionShapeLocks(): AConnectionShapeLocks | undefined { return this._f(AConnectionShapeLocks); }
    /** Connection Start. */
    public get startConnection(): AStartConnection | undefined { return this._f(AStartConnection); }
    /** Connection End. */
    public get endConnection(): AEndConnection | undefined { return this._f(AEndConnection); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Shape Text Body. Serialized as `p:txBody` */
export class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    public static override _Q = 'p:txBody';
    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Shape Style. Serialized as `p:style` */
export class ShapeStyle extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'p:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}
/** Defines the ShapeProperties Class. Serialized as `p:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'p:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Non-Visual Properties for a Shape. Serialized as `p:nvSpPr` */
export class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties | ApplicationNonVisualDrawingProperties> {

    public static override _Q = 'p:nvSpPr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Drawing Properties for a Shape. */
    public get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined { return this._f(NonVisualShapeDrawingProperties); }
    /** Application Non-Visual Drawing Properties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }

}
/** Application Non-Visual Drawing Properties. Serialized as `p:nvPr` */
export class ApplicationNonVisualDrawingProperties extends OxmlCompositeElement<PlaceholderShape | AAudioFromCD | AWaveAudioFile | AAudioFromFile | AVideoFromFile | AQuickTimeFromFile | CustomerDataList | ApplicationNonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'p:nvPr';
    public static override _A = [':isPhoto',':userDrawn',];
    /** Is a Photo Album. Serialized as `:isPhoto` */
    public get isPhoto(): BooleanValue | undefined { return this._g(':isPhoto'); }
    public set isPhoto(v: BooleanValue | undefined) { this._s(':isPhoto', v); }
    /** Is User Drawn. Serialized as `:userDrawn` */
    public get userDrawn(): BooleanValue | undefined { return this._g(':userDrawn'); }
    public set userDrawn(v: BooleanValue | undefined) { this._s(':userDrawn', v); }
    /** Placeholder Shape. */
    public get placeholderShape(): PlaceholderShape | undefined { return this._f(PlaceholderShape); }

}
/** Non-Visual Drawing Properties for a Shape. Serialized as `p:cNvSpPr` */
export class NonVisualShapeDrawingProperties extends OxmlCompositeElement<AShapeLocks | AExtensionList> {

    public static override _Q = 'p:cNvSpPr';
    public static override _A = [':txBox',];
    /** Text Box. Serialized as `:txBox` */
    public get textBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set textBox(v: BooleanValue | undefined) { this._s(':txBox', v); }
    /** Shape Locks. */
    public get shapeLocks(): AShapeLocks | undefined { return this._f(AShapeLocks); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Non-Visual Drawing Properties. Serialized as `p:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'p:cNvPr';
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
/** Custom Show. Serialized as `p:custShow` */
export class CustomShow extends OxmlCompositeElement<SlideList | ExtensionList> {

    public static override _Q = 'p:custShow';
    public static override _A = [':name',':id',];
    /** Custom Show Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Custom Show ID. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** List of Presentation Slides. */
    public get slideList(): SlideList | undefined { return this._f(SlideList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** List of Presentation Slides. Serialized as `p:sldLst` */
export class SlideList extends OxmlCompositeElement<SlideListEntry> {

    public static override _Q = 'p:sldLst';

}
/** Embedded Font. Serialized as `p:embeddedFont` */
export class EmbeddedFont extends OxmlCompositeElement<Font | RegularFont | BoldFont | ItalicFont | BoldItalicFont> {

    public static override _Q = 'p:embeddedFont';
    /** Embedded Font Name. */
    public get font(): Font | undefined { return this._f(Font); }
    /** Regular Embedded Font. */
    public get regularFont(): RegularFont | undefined { return this._f(RegularFont); }
    /** Bold Embedded Font. */
    public get boldFont(): BoldFont | undefined { return this._f(BoldFont); }
    /** Italic Embedded Font. */
    public get italicFont(): ItalicFont | undefined { return this._f(ItalicFont); }
    /** Bold Italic Embedded Font. */
    public get boldItalicFont(): BoldItalicFont | undefined { return this._f(BoldItalicFont); }

}
/** Defines the EmbeddedFontDataIdType Class. */
export abstract class EmbeddedFontDataIdType extends OxmlLeafElement {

    public static override _A = ['r:id',];
    /** Relationship Identifier. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Bold Italic Embedded Font. Serialized as `p:boldItalic` */
export class BoldItalicFont extends EmbeddedFontDataIdType {

    public static override _Q = 'p:boldItalic';

}
/** Italic Embedded Font. Serialized as `p:italic` */
export class ItalicFont extends EmbeddedFontDataIdType {

    public static override _Q = 'p:italic';

}
/** Bold Embedded Font. Serialized as `p:bold` */
export class BoldFont extends EmbeddedFontDataIdType {

    public static override _Q = 'p:bold';

}
/** Regular Embedded Font. Serialized as `p:regular` */
export class RegularFont extends EmbeddedFontDataIdType {

    public static override _Q = 'p:regular';

}
/** Embedded Font Name. Serialized as `p:font` */
export class Font extends OxmlLeafElement {

    public static override _Q = 'p:font';
    public static override _A = [':typeface',':panose',':pitchFamily',':charset',];
    /** Text Typeface. Serialized as `:typeface` */
    public get typeface(): StringValue | undefined { return this._g(':typeface'); }
    public set typeface(v: StringValue | undefined) { this._s(':typeface', v); }
    /** Panose Setting. Serialized as `:panose` */
    public get panose(): HexBinaryValue | undefined { return this._g(':panose'); }
    public set panose(v: HexBinaryValue | undefined) { this._s(':panose', v); }
    /** Similar Font Family. Serialized as `:pitchFamily` */
    public get pitchFamily(): SByteValue | undefined { return this._g(':pitchFamily'); }
    public set pitchFamily(v: SByteValue | undefined) { this._s(':pitchFamily', v); }
    /** Similar Character Set. Serialized as `:charset` */
    public get characterSet(): SByteValue | undefined { return this._g(':charset'); }
    public set characterSet(v: SByteValue | undefined) { this._s(':charset', v); }

}
/** Handout Master ID. Serialized as `p:handoutMasterId` */
export class HandoutMasterId extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:handoutMasterId';
    public static override _A = ['r:id',];
    /** Relationship Identifier. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Notes Master ID. Serialized as `p:notesMasterId` */
export class NotesMasterId extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:notesMasterId';
    public static override _A = ['r:id',];
    /** Relationship Identifier. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Slide Master ID. Serialized as `p:sldMasterId` */
export class SlideMasterId extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:sldMasterId';
    public static override _A = [':id','r:id',];
    /** Slide Master Identifier. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Relationship Identifier. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Slide ID. Serialized as `p:sldId` */
export class SlideId extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p:sldId';
    public static override _A = [':id','r:id',];
    /** Slide Identifier. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Relationship Identifier. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Embedded Control. Serialized as `p:control` */
export class Control extends OxmlCompositeElement<ExtensionList | Picture> {

    public static override _Q = 'p:control';
    public static override _A = [':spid',':name',':showAsIcon','r:id',':imgW',':imgH',];
    /** spid. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** showAsIcon. Serialized as `:showAsIcon` */
    public get showAsIcon(): BooleanValue | undefined { return this._g(':showAsIcon'); }
    public set showAsIcon(v: BooleanValue | undefined) { this._s(':showAsIcon', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** imgW. Serialized as `:imgW` */
    public get imageWidth(): Int32Value | undefined { return this._g(':imgW'); }
    public set imageWidth(v: Int32Value | undefined) { this._s(':imgW', v); }
    /** imgH. Serialized as `:imgH` */
    public get imageHeight(): Int32Value | undefined { return this._g(':imgH'); }
    public set imageHeight(v: Int32Value | undefined) { this._s(':imgH', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }
    /** Returns Picture. */
    public get picture(): Picture | undefined { return this._f(Picture); }

}
/** Defines the ExtensionList Class. Serialized as `p:extLst` */
export class ExtensionList extends OxmlCompositeElement<Extension> {

    public static override _Q = 'p:extLst';

}
/** Comment. Serialized as `p:cm` */
export class Comment extends OxmlCompositeElement<Position | Text | CommentExtensionList> {

    public static override _Q = 'p:cm';
    public static override _A = [':authorId',':dt',':idx',];
    /** authorId. Serialized as `:authorId` */
    public get authorId(): UInt32Value | undefined { return this._g(':authorId'); }
    public set authorId(v: UInt32Value | undefined) { this._s(':authorId', v); }
    /** dt. Serialized as `:dt` */
    public get dateTime(): DateTimeValue | undefined { return this._g(':dt'); }
    public set dateTime(v: DateTimeValue | undefined) { this._s(':dt', v); }
    /** idx. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Returns Position. */
    public get position(): Position | undefined { return this._f(Position); }
    /** Returns Text. */
    public get text(): Text | undefined { return this._f(Text); }
    /** Returns CommentExtensionList. */
    public get commentExtensionList(): CommentExtensionList | undefined { return this._f(CommentExtensionList); }

}
/** Comment Author. Serialized as `p:cmAuthor` */
export class CommentAuthor extends OxmlCompositeElement<CommentAuthorExtensionList> {

    public static override _Q = 'p:cmAuthor';
    public static override _A = [':id',':name',':initials',':lastIdx',':clrIdx',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** initials. Serialized as `:initials` */
    public get initials(): StringValue | undefined { return this._g(':initials'); }
    public set initials(v: StringValue | undefined) { this._s(':initials', v); }
    /** lastIdx. Serialized as `:lastIdx` */
    public get lastIndex(): UInt32Value | undefined { return this._g(':lastIdx'); }
    public set lastIndex(v: UInt32Value | undefined) { this._s(':lastIdx', v); }
    /** clrIdx. Serialized as `:clrIdx` */
    public get colorIndex(): UInt32Value | undefined { return this._g(':clrIdx'); }
    public set colorIndex(v: UInt32Value | undefined) { this._s(':clrIdx', v); }
    /** Returns CommentAuthorExtensionList. */
    public get commentAuthorExtensionList(): CommentAuthorExtensionList | undefined { return this._f(CommentAuthorExtensionList); }

}
/** Customer Data Tags. Serialized as `p:tags` */
export class CustomerDataTags extends OxmlLeafElement {

    public static override _Q = 'p:tags';
    public static override _A = ['r:id',];
    /** Relationship ID. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Customer Data. Serialized as `p:custData` */
export class CustomerData extends OxmlLeafElement {

    public static override _Q = 'p:custData';
    public static override _A = ['r:id',];
    /** Relationship ID. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Presentation Slide. Serialized as `p:sld` */
export class SlideListEntry extends OxmlLeafElement {

    public static override _Q = 'p:sld';
    public static override _A = ['r:id',];
    /** Relationship ID. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the Color3Type Class. */
export abstract class Color3Type extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** To. Serialized as `p:to` */
export class ToColor extends Color3Type {

    public static override _Q = 'p:to';

}
/** From. Serialized as `p:from` */
export class FromColor extends Color3Type {

    public static override _Q = 'p:from';

}
/** By. Serialized as `p:by` */
export class ByColor extends OxmlCompositeElement<RgbColor | HslColor> {

    public static override _Q = 'p:by';
    /** RGB. */
    public get rgbColor(): RgbColor | undefined { return this._f(RgbColor); }
    /** HSL. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }

}
/** Defines the ExtensionListWithModification Class. Serialized as `p:extLst` */
export class ExtensionListWithModification extends OxmlCompositeElement<Extension> {

    public static override _Q = 'p:extLst';
    public static override _A = [':mod',];
    /** Modify. Serialized as `:mod` */
    public get modify(): BooleanValue | undefined { return this._g(':mod'); }
    public set modify(v: BooleanValue | undefined) { this._s(':mod', v); }

}
/** Build List. Serialized as `p:bldLst` */
export class BuildList extends OxmlCompositeElement<BuildParagraph | BuildDiagram | BuildOleChart | BuildGraphics> {

    public static override _Q = 'p:bldLst';

}
/** Build Graphics. Serialized as `p:bldGraphic` */
export class BuildGraphics extends OxmlCompositeElement<BuildAsOne | BuildSubElement> {

    public static override _Q = 'p:bldGraphic';
    public static override _A = [':spid',':grpId',':uiExpand',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** Group ID. Serialized as `:grpId` */
    public get groupId(): UInt32Value | undefined { return this._g(':grpId'); }
    public set groupId(v: UInt32Value | undefined) { this._s(':grpId', v); }
    /** Expand UI. Serialized as `:uiExpand` */
    public get uiExpand(): BooleanValue | undefined { return this._g(':uiExpand'); }
    public set uiExpand(v: BooleanValue | undefined) { this._s(':uiExpand', v); }
    /** Build As One. */
    public get buildAsOne(): BuildAsOne | undefined { return this._f(BuildAsOne); }
    /** Build Sub Elements. */
    public get buildSubElement(): BuildSubElement | undefined { return this._f(BuildSubElement); }

}
/** Build OLE Chart. Serialized as `p:bldOleChart` */
export class BuildOleChart extends OxmlLeafElement {

    public static override _Q = 'p:bldOleChart';
    public static override _A = [':spid',':grpId',':uiExpand',':bld',':animBg',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** Group ID. Serialized as `:grpId` */
    public get groupId(): UInt32Value | undefined { return this._g(':grpId'); }
    public set groupId(v: UInt32Value | undefined) { this._s(':grpId', v); }
    /** Expand UI. Serialized as `:uiExpand` */
    public get uiExpand(): BooleanValue | undefined { return this._g(':uiExpand'); }
    public set uiExpand(v: BooleanValue | undefined) { this._s(':uiExpand', v); }
    /** Build. Serialized as `:bld` */
    public get build(): OleChartBuildValues | undefined { return this._g(':bld'); }
    public set build(v: OleChartBuildValues | undefined) { this._s(':bld', v); }
    /** Animate Background. Serialized as `:animBg` */
    public get animateBackground(): BooleanValue | undefined { return this._g(':animBg'); }
    public set animateBackground(v: BooleanValue | undefined) { this._s(':animBg', v); }

}
/** Build Diagram. Serialized as `p:bldDgm` */
export class BuildDiagram extends OxmlLeafElement {

    public static override _Q = 'p:bldDgm';
    public static override _A = [':spid',':grpId',':uiExpand',':bld',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** Group ID. Serialized as `:grpId` */
    public get groupId(): UInt32Value | undefined { return this._g(':grpId'); }
    public set groupId(v: UInt32Value | undefined) { this._s(':grpId', v); }
    /** Expand UI. Serialized as `:uiExpand` */
    public get uiExpand(): BooleanValue | undefined { return this._g(':uiExpand'); }
    public set uiExpand(v: BooleanValue | undefined) { this._s(':uiExpand', v); }
    /** Diagram Build Types. Serialized as `:bld` */
    public get build(): DiagramBuildValues | undefined { return this._g(':bld'); }
    public set build(v: DiagramBuildValues | undefined) { this._s(':bld', v); }

}
/** Build Paragraph. Serialized as `p:bldP` */
export class BuildParagraph extends OxmlCompositeElement<TemplateList> {

    public static override _Q = 'p:bldP';
    public static override _A = [':spid',':grpId',':uiExpand',':build',':bldLvl',':animBg',':autoUpdateAnimBg',':rev',':advAuto',];
    /** Shape ID. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** Group ID. Serialized as `:grpId` */
    public get groupId(): UInt32Value | undefined { return this._g(':grpId'); }
    public set groupId(v: UInt32Value | undefined) { this._s(':grpId', v); }
    /** Expand UI. Serialized as `:uiExpand` */
    public get uiExpand(): BooleanValue | undefined { return this._g(':uiExpand'); }
    public set uiExpand(v: BooleanValue | undefined) { this._s(':uiExpand', v); }
    /** Build Types. Serialized as `:build` */
    public get build(): ParagraphBuildValues | undefined { return this._g(':build'); }
    public set build(v: ParagraphBuildValues | undefined) { this._s(':build', v); }
    /** Build Level. Serialized as `:bldLvl` */
    public get buildLevel(): UInt32Value | undefined { return this._g(':bldLvl'); }
    public set buildLevel(v: UInt32Value | undefined) { this._s(':bldLvl', v); }
    /** Animate Background. Serialized as `:animBg` */
    public get animateBackground(): BooleanValue | undefined { return this._g(':animBg'); }
    public set animateBackground(v: BooleanValue | undefined) { this._s(':animBg', v); }
    /** Auto Update Animation Background. Serialized as `:autoUpdateAnimBg` */
    public get autoAnimateBackground(): BooleanValue | undefined { return this._g(':autoUpdateAnimBg'); }
    public set autoAnimateBackground(v: BooleanValue | undefined) { this._s(':autoUpdateAnimBg', v); }
    /** Reverse. Serialized as `:rev` */
    public get reverse(): BooleanValue | undefined { return this._g(':rev'); }
    public set reverse(v: BooleanValue | undefined) { this._s(':rev', v); }
    /** Auto Advance Time. Serialized as `:advAuto` */
    public get autoAdvance(): StringValue | undefined { return this._g(':advAuto'); }
    public set autoAdvance(v: StringValue | undefined) { this._s(':advAuto', v); }
    /** Template effects. */
    public get templateList(): TemplateList | undefined { return this._f(TemplateList); }

}
/** Build Sub Elements. Serialized as `p:bldSub` */
export class BuildSubElement extends OxmlCompositeElement<ABuildDiagram | ABuildChart> {

    public static override _Q = 'p:bldSub';
    /** Build Diagram. */
    public get buildDiagram(): ABuildDiagram | undefined { return this._f(ABuildDiagram); }
    /** Build Chart. */
    public get buildChart(): ABuildChart | undefined { return this._f(ABuildChart); }

}
/** Template effects. Serialized as `p:tmplLst` */
export class TemplateList extends OxmlCompositeElement<Template> {

    public static override _Q = 'p:tmplLst';

}
/** Template Effects. Serialized as `p:tmpl` */
export class Template extends OxmlCompositeElement<TimeNodeList> {

    public static override _Q = 'p:tmpl';
    public static override _A = [':lvl',];
    /** Level. Serialized as `:lvl` */
    public get level(): UInt32Value | undefined { return this._g(':lvl'); }
    public set level(v: UInt32Value | undefined) { this._s(':lvl', v); }
    /** Time Node List. */
    public get timeNodeList(): TimeNodeList | undefined { return this._f(TimeNodeList); }

}
/** Time Node List. Serialized as `p:tnLst` */
export class TimeNodeList extends OxmlCompositeElement<ParallelTimeNode> {

    public static override _Q = 'p:tnLst';
    /** Returns ParallelTimeNode. */
    public get parallelTimeNode(): ParallelTimeNode | undefined { return this._f(ParallelTimeNode); }

}
/** Common Media Node Properties. Serialized as `p:cMediaNode` */
export class CommonMediaNode extends OxmlCompositeElement<CommonTimeNode | TargetElement> {

    public static override _Q = 'p:cMediaNode';
    public static override _A = [':vol',':mute',':numSld',':showWhenStopped',];
    /** Volume. Serialized as `:vol` */
    public get volume(): Int32Value | undefined { return this._g(':vol'); }
    public set volume(v: Int32Value | undefined) { this._s(':vol', v); }
    /** Mute. Serialized as `:mute` */
    public get mute(): BooleanValue | undefined { return this._g(':mute'); }
    public set mute(v: BooleanValue | undefined) { this._s(':mute', v); }
    /** Number of Slides. Serialized as `:numSld` */
    public get slideCount(): UInt32Value | undefined { return this._g(':numSld'); }
    public set slideCount(v: UInt32Value | undefined) { this._s(':numSld', v); }
    /** Show When Stopped. Serialized as `:showWhenStopped` */
    public get showWhenStopped(): BooleanValue | undefined { return this._g(':showWhenStopped'); }
    public set showWhenStopped(v: BooleanValue | undefined) { this._s(':showWhenStopped', v); }
    /** Common Time Node Properties. */
    public get commonTimeNode(): CommonTimeNode | undefined { return this._f(CommonTimeNode); }
    /** Returns TargetElement. */
    public get targetElement(): TargetElement | undefined { return this._f(TargetElement); }

}
/** Defines the TimeListAnimationVariantType Class. */
export abstract class TimeListAnimationVariantType extends OxmlCompositeElement<BooleanVariantValue | IntegerVariantValue | FloatVariantValue | StringVariantValue | ColorValue> {

    /** Boolean Variant. */
    public get booleanVariantValue(): BooleanVariantValue | undefined { return this._f(BooleanVariantValue); }
    /** Integer. */
    public get integerVariantValue(): IntegerVariantValue | undefined { return this._f(IntegerVariantValue); }
    /** Float Value. */
    public get floatVariantValue(): FloatVariantValue | undefined { return this._f(FloatVariantValue); }
    /** String Value. */
    public get stringVariantValue(): StringVariantValue | undefined { return this._f(StringVariantValue); }
    /** Color Value. */
    public get colorValue(): ColorValue | undefined { return this._f(ColorValue); }

}
/** Value. Serialized as `p:val` */
export class VariantValue extends TimeListAnimationVariantType {

    public static override _Q = 'p:val';

}
/** To. Serialized as `p:to` */
export class ToVariantValue extends TimeListAnimationVariantType {

    public static override _Q = 'p:to';

}
/** Progress. Serialized as `p:progress` */
export class Progress extends OxmlCompositeElement<FloatVariantValue> {

    public static override _Q = 'p:progress';
    /** Float Value. */
    public get floatVariantValue(): FloatVariantValue | undefined { return this._f(FloatVariantValue); }

}
/** Defines the CommonBehavior Class. Serialized as `p:cBhvr` */
export class CommonBehavior extends OxmlCompositeElement<CommonTimeNode | TargetElement | AttributeNameList> {

    public static override _Q = 'p:cBhvr';
    public static override _A = [':additive',':accumulate',':xfrmType',':from',':to',':by',':rctx',':override',];
    /** Additive. Serialized as `:additive` */
    public get additive(): BehaviorAdditiveValues | undefined { return this._g(':additive'); }
    public set additive(v: BehaviorAdditiveValues | undefined) { this._s(':additive', v); }
    /** Accumulate. Serialized as `:accumulate` */
    public get accumulate(): BehaviorAccumulateValues | undefined { return this._g(':accumulate'); }
    public set accumulate(v: BehaviorAccumulateValues | undefined) { this._s(':accumulate', v); }
    /** Transform Type. Serialized as `:xfrmType` */
    public get transformType(): BehaviorTransformValues | undefined { return this._g(':xfrmType'); }
    public set transformType(v: BehaviorTransformValues | undefined) { this._s(':xfrmType', v); }
    /** From. Serialized as `:from` */
    public get from(): StringValue | undefined { return this._g(':from'); }
    public set from(v: StringValue | undefined) { this._s(':from', v); }
    /** To. Serialized as `:to` */
    public get to(): StringValue | undefined { return this._g(':to'); }
    public set to(v: StringValue | undefined) { this._s(':to', v); }
    /** By. Serialized as `:by` */
    public get by(): StringValue | undefined { return this._g(':by'); }
    public set by(v: StringValue | undefined) { this._s(':by', v); }
    /** Runtime Context. Serialized as `:rctx` */
    public get runtimeContext(): StringValue | undefined { return this._g(':rctx'); }
    public set runtimeContext(v: StringValue | undefined) { this._s(':rctx', v); }
    /** Override. Serialized as `:override` */
    public get override(): BehaviorOverrideValues | undefined { return this._g(':override'); }
    public set override(v: BehaviorOverrideValues | undefined) { this._s(':override', v); }
    /** Returns CommonTimeNode. */
    public get commonTimeNode(): CommonTimeNode | undefined { return this._f(CommonTimeNode); }
    /** Target Element. */
    public get targetElement(): TargetElement | undefined { return this._f(TargetElement); }
    /** Attribute Name List. */
    public get attributeNameList(): AttributeNameList | undefined { return this._f(AttributeNameList); }

}
/** HSL. Serialized as `p:hsl` */
export class HslColor extends OxmlLeafElement {

    public static override _Q = 'p:hsl';
    public static override _A = [':h',':s',':l',];
    /** Hue. Serialized as `:h` */
    public get hue(): Int32Value | undefined { return this._g(':h'); }
    public set hue(v: Int32Value | undefined) { this._s(':h', v); }
    /** Saturation. Serialized as `:s` */
    public get saturation(): Int32Value | undefined { return this._g(':s'); }
    public set saturation(v: Int32Value | undefined) { this._s(':s', v); }
    /** Lightness. Serialized as `:l` */
    public get lightness(): Int32Value | undefined { return this._g(':l'); }
    public set lightness(v: Int32Value | undefined) { this._s(':l', v); }

}
/** RGB. Serialized as `p:rgb` */
export class RgbColor extends OxmlLeafElement {

    public static override _Q = 'p:rgb';
    public static override _A = [':r',':g',':b',];
    /** Red. Serialized as `:r` */
    public get red(): Int32Value | undefined { return this._g(':r'); }
    public set red(v: Int32Value | undefined) { this._s(':r', v); }
    /** Green. Serialized as `:g` */
    public get green(): Int32Value | undefined { return this._g(':g'); }
    public set green(v: Int32Value | undefined) { this._s(':g', v); }
    /** Blue. Serialized as `:b` */
    public get blue(): Int32Value | undefined { return this._g(':b'); }
    public set blue(v: Int32Value | undefined) { this._s(':b', v); }

}
/** Time Animate Value. Serialized as `p:tav` */
export class TimeAnimateValue extends OxmlCompositeElement<VariantValue> {

    public static override _Q = 'p:tav';
    public static override _A = [':tm',':fmla',];
    /** Time. Serialized as `:tm` */
    public get time(): StringValue | undefined { return this._g(':tm'); }
    public set time(v: StringValue | undefined) { this._s(':tm', v); }
    /** Formula. Serialized as `:fmla` */
    public get fomula(): StringValue | undefined { return this._g(':fmla'); }
    public set fomula(v: StringValue | undefined) { this._s(':fmla', v); }
    /** Value. */
    public get variantValue(): VariantValue | undefined { return this._f(VariantValue); }

}
/** Defines the ColorType Class. */
export abstract class ColorType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Pen Color for Slide Show. Serialized as `p:penClr` */
export class PenColor extends ColorType {

    public static override _Q = 'p:penClr';

}
/** Color Value. Serialized as `p:clrVal` */
export class ColorValue extends ColorType {

    public static override _Q = 'p:clrVal';

}
/** String Value. Serialized as `p:strVal` */
export class StringVariantValue extends OxmlLeafElement {

    public static override _Q = 'p:strVal';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Float Value. Serialized as `p:fltVal` */
export class FloatVariantValue extends OxmlLeafElement {

    public static override _Q = 'p:fltVal';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): SingleValue | undefined { return this._g(':val'); }
    public set val(v: SingleValue | undefined) { this._s(':val', v); }

}
/** Integer. Serialized as `p:intVal` */
export class IntegerVariantValue extends OxmlLeafElement {

    public static override _Q = 'p:intVal';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Boolean Variant. Serialized as `p:boolVal` */
export class BooleanVariantValue extends OxmlLeafElement {

    public static override _Q = 'p:boolVal';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Attribute Name List. Serialized as `p:attrNameLst` */
export class AttributeNameList extends OxmlCompositeElement<AttributeName> {

    public static override _Q = 'p:attrNameLst';

}
/** Defines the Text Class. Serialized as `p:text` */
export class Text extends OxmlLeafTextElement {

    public static override _Q = 'p:text';

}
/** Attribute Name. Serialized as `p:attrName` */
export class AttributeName extends OxmlLeafTextElement {

    public static override _Q = 'p:attrName';

}
/** Defines the TimeListTimeConditionalListType Class. */
export abstract class TimeListTimeConditionalListType extends OxmlCompositeElement<Condition> {


}
/** Defines the EndConditionList Class. Serialized as `p:endCondLst` */
export class EndConditionList extends TimeListTimeConditionalListType {

    public static override _Q = 'p:endCondLst';

}
/** Defines the StartConditionList Class. Serialized as `p:stCondLst` */
export class StartConditionList extends TimeListTimeConditionalListType {

    public static override _Q = 'p:stCondLst';

}
/** Next Conditions List. Serialized as `p:nextCondLst` */
export class NextConditionList extends TimeListTimeConditionalListType {

    public static override _Q = 'p:nextCondLst';

}
/** Previous Conditions List. Serialized as `p:prevCondLst` */
export class PreviousConditionList extends TimeListTimeConditionalListType {

    public static override _Q = 'p:prevCondLst';

}
/** Parallel TimeNode. Serialized as `p:cTn` */
export class CommonTimeNode extends OxmlCompositeElement<StartConditionList | EndConditionList | EndSync | Iterate | ChildTimeNodeList | SubTimeNodeList> {

    public static override _Q = 'p:cTn';
    public static override _A = [':id',':presetID',':presetClass',':presetSubtype',':dur',':repeatCount',':repeatDur',':spd',':accel',':decel',':autoRev',':restart',':fill',':syncBehavior',':tmFilter',':evtFilter',':display',':masterRel',':bldLvl',':grpId',':afterEffect',':nodeType',':nodePh','p14:presetBounceEnd',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** presetID. Serialized as `:presetID` */
    public get presetId(): Int32Value | undefined { return this._g(':presetID'); }
    public set presetId(v: Int32Value | undefined) { this._s(':presetID', v); }
    /** presetClass. Serialized as `:presetClass` */
    public get presetClass(): TimeNodePresetClassValues | undefined { return this._g(':presetClass'); }
    public set presetClass(v: TimeNodePresetClassValues | undefined) { this._s(':presetClass', v); }
    /** presetSubtype. Serialized as `:presetSubtype` */
    public get presetSubtype(): Int32Value | undefined { return this._g(':presetSubtype'); }
    public set presetSubtype(v: Int32Value | undefined) { this._s(':presetSubtype', v); }
    /** dur. Serialized as `:dur` */
    public get duration(): StringValue | undefined { return this._g(':dur'); }
    public set duration(v: StringValue | undefined) { this._s(':dur', v); }
    /** repeatCount. Serialized as `:repeatCount` */
    public get repeatCount(): StringValue | undefined { return this._g(':repeatCount'); }
    public set repeatCount(v: StringValue | undefined) { this._s(':repeatCount', v); }
    /** repeatDur. Serialized as `:repeatDur` */
    public get repeatDuration(): StringValue | undefined { return this._g(':repeatDur'); }
    public set repeatDuration(v: StringValue | undefined) { this._s(':repeatDur', v); }
    /** spd. Serialized as `:spd` */
    public get speed(): Int32Value | undefined { return this._g(':spd'); }
    public set speed(v: Int32Value | undefined) { this._s(':spd', v); }
    /** accel. Serialized as `:accel` */
    public get acceleration(): Int32Value | undefined { return this._g(':accel'); }
    public set acceleration(v: Int32Value | undefined) { this._s(':accel', v); }
    /** decel. Serialized as `:decel` */
    public get deceleration(): Int32Value | undefined { return this._g(':decel'); }
    public set deceleration(v: Int32Value | undefined) { this._s(':decel', v); }
    /** autoRev. Serialized as `:autoRev` */
    public get autoReverse(): BooleanValue | undefined { return this._g(':autoRev'); }
    public set autoReverse(v: BooleanValue | undefined) { this._s(':autoRev', v); }
    /** restart. Serialized as `:restart` */
    public get restart(): TimeNodeRestartValues | undefined { return this._g(':restart'); }
    public set restart(v: TimeNodeRestartValues | undefined) { this._s(':restart', v); }
    /** fill. Serialized as `:fill` */
    public get fill(): TimeNodeFillValues | undefined { return this._g(':fill'); }
    public set fill(v: TimeNodeFillValues | undefined) { this._s(':fill', v); }
    /** syncBehavior. Serialized as `:syncBehavior` */
    public get syncBehavior(): TimeNodeSyncValues | undefined { return this._g(':syncBehavior'); }
    public set syncBehavior(v: TimeNodeSyncValues | undefined) { this._s(':syncBehavior', v); }
    /** tmFilter. Serialized as `:tmFilter` */
    public get timeFilter(): StringValue | undefined { return this._g(':tmFilter'); }
    public set timeFilter(v: StringValue | undefined) { this._s(':tmFilter', v); }
    /** evtFilter. Serialized as `:evtFilter` */
    public get eventFilter(): StringValue | undefined { return this._g(':evtFilter'); }
    public set eventFilter(v: StringValue | undefined) { this._s(':evtFilter', v); }
    /** display. Serialized as `:display` */
    public get display(): BooleanValue | undefined { return this._g(':display'); }
    public set display(v: BooleanValue | undefined) { this._s(':display', v); }
    /** masterRel. Serialized as `:masterRel` */
    public get masterRelation(): TimeNodeMasterRelationValues | undefined { return this._g(':masterRel'); }
    public set masterRelation(v: TimeNodeMasterRelationValues | undefined) { this._s(':masterRel', v); }
    /** bldLvl. Serialized as `:bldLvl` */
    public get buildLevel(): Int32Value | undefined { return this._g(':bldLvl'); }
    public set buildLevel(v: Int32Value | undefined) { this._s(':bldLvl', v); }
    /** grpId. Serialized as `:grpId` */
    public get groupId(): UInt32Value | undefined { return this._g(':grpId'); }
    public set groupId(v: UInt32Value | undefined) { this._s(':grpId', v); }
    /** afterEffect. Serialized as `:afterEffect` */
    public get afterEffect(): BooleanValue | undefined { return this._g(':afterEffect'); }
    public set afterEffect(v: BooleanValue | undefined) { this._s(':afterEffect', v); }
    /** nodeType. Serialized as `:nodeType` */
    public get nodeType(): TimeNodeValues | undefined { return this._g(':nodeType'); }
    public set nodeType(v: TimeNodeValues | undefined) { this._s(':nodeType', v); }
    /** nodePh. Serialized as `:nodePh` */
    public get nodePlaceholder(): BooleanValue | undefined { return this._g(':nodePh'); }
    public set nodePlaceholder(v: BooleanValue | undefined) { this._s(':nodePh', v); }
    /** presetBounceEnd. Serialized as `p14:presetBounceEnd` */
    public get presetBounceEnd(): Int32Value | undefined { return this._g('p14:presetBounceEnd'); }
    public set presetBounceEnd(v: Int32Value | undefined) { this._s('p14:presetBounceEnd', v); }
    /** Returns StartConditionList. */
    public get startConditionList(): StartConditionList | undefined { return this._f(StartConditionList); }
    /** Returns EndConditionList. */
    public get endConditionList(): EndConditionList | undefined { return this._f(EndConditionList); }
    /** Returns EndSync. */
    public get endSync(): EndSync | undefined { return this._f(EndSync); }
    /** Returns Iterate. */
    public get iterate(): Iterate | undefined { return this._f(Iterate); }
    /** Returns ChildTimeNodeList. */
    public get childTimeNodeList(): ChildTimeNodeList | undefined { return this._f(ChildTimeNodeList); }
    /** Returns SubTimeNodeList. */
    public get subTimeNodeList(): SubTimeNodeList | undefined { return this._f(SubTimeNodeList); }

}
/** Video. Serialized as `p:video` */
export class Video extends OxmlCompositeElement<CommonMediaNode> {

    public static override _Q = 'p:video';
    public static override _A = [':fullScrn',];
    /** Full Screen. Serialized as `:fullScrn` */
    public get fullScreen(): BooleanValue | undefined { return this._g(':fullScrn'); }
    public set fullScreen(v: BooleanValue | undefined) { this._s(':fullScrn', v); }
    /** Common Media Node Properties. */
    public get commonMediaNode(): CommonMediaNode | undefined { return this._f(CommonMediaNode); }

}
/** Audio. Serialized as `p:audio` */
export class Audio extends OxmlCompositeElement<CommonMediaNode> {

    public static override _Q = 'p:audio';
    public static override _A = [':isNarration',];
    /** Is Narration. Serialized as `:isNarration` */
    public get isNarration(): BooleanValue | undefined { return this._g(':isNarration'); }
    public set isNarration(v: BooleanValue | undefined) { this._s(':isNarration', v); }
    /** Common Media Node Properties. */
    public get commonMediaNode(): CommonMediaNode | undefined { return this._f(CommonMediaNode); }

}
/** Set Time Node Behavior. Serialized as `p:set` */
export class SetBehavior extends OxmlCompositeElement<CommonBehavior | ToVariantValue> {

    public static override _Q = 'p:set';
    /** Common Behavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }
    /** To. */
    public get toVariantValue(): ToVariantValue | undefined { return this._f(ToVariantValue); }

}
/** Command. Serialized as `p:cmd` */
export class Command extends OxmlCompositeElement<CommonBehavior> {

    public static override _Q = 'p:cmd';
    public static override _A = [':type',':cmd',];
    /** Command Type. Serialized as `:type` */
    public get type(): CommandValues | undefined { return this._g(':type'); }
    public set type(v: CommandValues | undefined) { this._s(':type', v); }
    /** Command. Serialized as `:cmd` */
    public get commandName(): StringValue | undefined { return this._g(':cmd'); }
    public set commandName(v: StringValue | undefined) { this._s(':cmd', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }

}
/** Animate Scale. Serialized as `p:animScale` */
export class AnimateScale extends OxmlCompositeElement<CommonBehavior | ByPosition | FromPosition | ToPosition> {

    public static override _Q = 'p:animScale';
    public static override _A = [':zoomContents','p14:bounceEnd',];
    /** zoomContents. Serialized as `:zoomContents` */
    public get zoomContents(): BooleanValue | undefined { return this._g(':zoomContents'); }
    public set zoomContents(v: BooleanValue | undefined) { this._s(':zoomContents', v); }
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    public get bounceEnd(): Int32Value | undefined { return this._g('p14:bounceEnd'); }
    public set bounceEnd(v: Int32Value | undefined) { this._s('p14:bounceEnd', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }
    /** Returns ByPosition. */
    public get byPosition(): ByPosition | undefined { return this._f(ByPosition); }
    /** Returns FromPosition. */
    public get fromPosition(): FromPosition | undefined { return this._f(FromPosition); }
    /** Returns ToPosition. */
    public get toPosition(): ToPosition | undefined { return this._f(ToPosition); }

}
/** Animate Rotation. Serialized as `p:animRot` */
export class AnimateRotation extends OxmlCompositeElement<CommonBehavior> {

    public static override _Q = 'p:animRot';
    public static override _A = [':by',':from',':to','p14:bounceEnd',];
    /** by. Serialized as `:by` */
    public get by(): Int32Value | undefined { return this._g(':by'); }
    public set by(v: Int32Value | undefined) { this._s(':by', v); }
    /** from. Serialized as `:from` */
    public get from(): Int32Value | undefined { return this._g(':from'); }
    public set from(v: Int32Value | undefined) { this._s(':from', v); }
    /** to. Serialized as `:to` */
    public get to(): Int32Value | undefined { return this._g(':to'); }
    public set to(v: Int32Value | undefined) { this._s(':to', v); }
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    public get bounceEnd(): Int32Value | undefined { return this._g('p14:bounceEnd'); }
    public set bounceEnd(v: Int32Value | undefined) { this._s('p14:bounceEnd', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }

}
/** Animate Motion. Serialized as `p:animMotion` */
export class AnimateMotion extends OxmlCompositeElement<CommonBehavior | ByPosition | FromPosition | ToPosition | RotationCenter> {

    public static override _Q = 'p:animMotion';
    public static override _A = [':origin',':path',':pathEditMode',':rAng',':ptsTypes','p14:bounceEnd',];
    /** origin. Serialized as `:origin` */
    public get origin(): AnimateMotionBehaviorOriginValues | undefined { return this._g(':origin'); }
    public set origin(v: AnimateMotionBehaviorOriginValues | undefined) { this._s(':origin', v); }
    /** path. Serialized as `:path` */
    public get path(): StringValue | undefined { return this._g(':path'); }
    public set path(v: StringValue | undefined) { this._s(':path', v); }
    /** pathEditMode. Serialized as `:pathEditMode` */
    public get pathEditMode(): AnimateMotionPathEditModeValues | undefined { return this._g(':pathEditMode'); }
    public set pathEditMode(v: AnimateMotionPathEditModeValues | undefined) { this._s(':pathEditMode', v); }
    /** rAng. Serialized as `:rAng` */
    public get relativeAngle(): Int32Value | undefined { return this._g(':rAng'); }
    public set relativeAngle(v: Int32Value | undefined) { this._s(':rAng', v); }
    /** ptsTypes. Serialized as `:ptsTypes` */
    public get pointTypes(): StringValue | undefined { return this._g(':ptsTypes'); }
    public set pointTypes(v: StringValue | undefined) { this._s(':ptsTypes', v); }
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    public get bounceEnd(): Int32Value | undefined { return this._g('p14:bounceEnd'); }
    public set bounceEnd(v: Int32Value | undefined) { this._s('p14:bounceEnd', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }
    /** Returns ByPosition. */
    public get byPosition(): ByPosition | undefined { return this._f(ByPosition); }
    /** Returns FromPosition. */
    public get fromPosition(): FromPosition | undefined { return this._f(FromPosition); }
    /** Returns ToPosition. */
    public get toPosition(): ToPosition | undefined { return this._f(ToPosition); }
    /** Returns RotationCenter. */
    public get rotationCenter(): RotationCenter | undefined { return this._f(RotationCenter); }

}
/** Animate Effect. Serialized as `p:animEffect` */
export class AnimateEffect extends OxmlCompositeElement<CommonBehavior | Progress> {

    public static override _Q = 'p:animEffect';
    public static override _A = [':transition',':filter',':prLst',];
    /** Transition. Serialized as `:transition` */
    public get transition(): AnimateEffectTransitionValues | undefined { return this._g(':transition'); }
    public set transition(v: AnimateEffectTransitionValues | undefined) { this._s(':transition', v); }
    /** Filter. Serialized as `:filter` */
    public get filter(): StringValue | undefined { return this._g(':filter'); }
    public set filter(v: StringValue | undefined) { this._s(':filter', v); }
    /** Property List. Serialized as `:prLst` */
    public get propertyList(): StringValue | undefined { return this._g(':prLst'); }
    public set propertyList(v: StringValue | undefined) { this._s(':prLst', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }
    /** Progress. */
    public get progress(): Progress | undefined { return this._f(Progress); }

}
/** Animate Color Behavior. Serialized as `p:animClr` */
export class AnimateColor extends OxmlCompositeElement<CommonBehavior | ByColor | FromColor | ToColor> {

    public static override _Q = 'p:animClr';
    public static override _A = [':clrSpc',':dir',];
    /** Color Space. Serialized as `:clrSpc` */
    public get colorSpace(): AnimateColorSpaceValues | undefined { return this._g(':clrSpc'); }
    public set colorSpace(v: AnimateColorSpaceValues | undefined) { this._s(':clrSpc', v); }
    /** Direction. Serialized as `:dir` */
    public get direction(): AnimateColorDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: AnimateColorDirectionValues | undefined) { this._s(':dir', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }
    /** By. */
    public get byColor(): ByColor | undefined { return this._f(ByColor); }
    /** From. */
    public get fromColor(): FromColor | undefined { return this._f(FromColor); }
    /** To. */
    public get toColor(): ToColor | undefined { return this._f(ToColor); }

}
/** Animate. Serialized as `p:anim` */
export class Animate extends OxmlCompositeElement<CommonBehavior | TimeAnimateValueList> {

    public static override _Q = 'p:anim';
    public static override _A = [':by',':from',':to',':calcmode',':valueType','p14:bounceEnd',];
    /** by. Serialized as `:by` */
    public get by(): StringValue | undefined { return this._g(':by'); }
    public set by(v: StringValue | undefined) { this._s(':by', v); }
    /** from. Serialized as `:from` */
    public get from(): StringValue | undefined { return this._g(':from'); }
    public set from(v: StringValue | undefined) { this._s(':from', v); }
    /** to. Serialized as `:to` */
    public get to(): StringValue | undefined { return this._g(':to'); }
    public set to(v: StringValue | undefined) { this._s(':to', v); }
    /** calcmode. Serialized as `:calcmode` */
    public get calculationMode(): AnimateBehaviorCalculateModeValues | undefined { return this._g(':calcmode'); }
    public set calculationMode(v: AnimateBehaviorCalculateModeValues | undefined) { this._s(':calcmode', v); }
    /** valueType. Serialized as `:valueType` */
    public get valueType(): AnimateBehaviorValues | undefined { return this._g(':valueType'); }
    public set valueType(v: AnimateBehaviorValues | undefined) { this._s(':valueType', v); }
    /** bounceEnd. Serialized as `p14:bounceEnd` */
    public get bounceEnd(): Int32Value | undefined { return this._g('p14:bounceEnd'); }
    public set bounceEnd(v: Int32Value | undefined) { this._s('p14:bounceEnd', v); }
    /** Returns CommonBehavior. */
    public get commonBehavior(): CommonBehavior | undefined { return this._f(CommonBehavior); }
    /** Returns TimeAnimateValueList. */
    public get timeAnimateValueList(): TimeAnimateValueList | undefined { return this._f(TimeAnimateValueList); }

}
/** Exclusive. Serialized as `p:excl` */
export class ExclusiveTimeNode extends OxmlCompositeElement<CommonTimeNode> {

    public static override _Q = 'p:excl';
    /** Common TimeNode Properties. */
    public get commonTimeNode(): CommonTimeNode | undefined { return this._f(CommonTimeNode); }

}
/** Sequence Time Node. Serialized as `p:seq` */
export class SequenceTimeNode extends OxmlCompositeElement<CommonTimeNode | PreviousConditionList | NextConditionList> {

    public static override _Q = 'p:seq';
    public static override _A = [':concurrent',':prevAc',':nextAc',];
    /** Concurrent. Serialized as `:concurrent` */
    public get concurrent(): BooleanValue | undefined { return this._g(':concurrent'); }
    public set concurrent(v: BooleanValue | undefined) { this._s(':concurrent', v); }
    /** Previous Action. Serialized as `:prevAc` */
    public get previousAction(): PreviousActionValues | undefined { return this._g(':prevAc'); }
    public set previousAction(v: PreviousActionValues | undefined) { this._s(':prevAc', v); }
    /** Next Action. Serialized as `:nextAc` */
    public get nextAction(): NextActionValues | undefined { return this._g(':nextAc'); }
    public set nextAction(v: NextActionValues | undefined) { this._s(':nextAc', v); }
    /** Common TimeNode Properties. */
    public get commonTimeNode(): CommonTimeNode | undefined { return this._f(CommonTimeNode); }
    /** Previous Conditions List. */
    public get previousConditionList(): PreviousConditionList | undefined { return this._f(PreviousConditionList); }
    /** Next Conditions List. */
    public get nextConditionList(): NextConditionList | undefined { return this._f(NextConditionList); }

}
/** Parallel Time Node. Serialized as `p:par` */
export class ParallelTimeNode extends OxmlCompositeElement<CommonTimeNode> {

    public static override _Q = 'p:par';
    /** Parallel TimeNode. */
    public get commonTimeNode(): CommonTimeNode | undefined { return this._f(CommonTimeNode); }

}
/** Defines the TimeListConditionalType Class. */
export abstract class TimeListConditionalType extends OxmlCompositeElement<TargetElement | TimeNode | RuntimeNodeTrigger> {

    public static override _A = [':evt',':delay',];
    /** Trigger Event. Serialized as `:evt` */
    public get event(): TriggerEventValues | undefined { return this._g(':evt'); }
    public set event(v: TriggerEventValues | undefined) { this._s(':evt', v); }
    /** Trigger Delay. Serialized as `:delay` */
    public get delay(): StringValue | undefined { return this._g(':delay'); }
    public set delay(v: StringValue | undefined) { this._s(':delay', v); }
    /** Target Element Trigger Choice. */
    public get targetElement(): TargetElement | undefined { return this._f(TargetElement); }
    /** Time Node. */
    public get timeNode(): TimeNode | undefined { return this._f(TimeNode); }
    /** Runtime Node Trigger Choice. */
    public get runtimeNodeTrigger(): RuntimeNodeTrigger | undefined { return this._f(RuntimeNodeTrigger); }

}
/** Defines the EndSync Class. Serialized as `p:endSync` */
export class EndSync extends TimeListConditionalType {

    public static override _Q = 'p:endSync';

}
/** Condition. Serialized as `p:cond` */
export class Condition extends TimeListConditionalType {

    public static override _Q = 'p:cond';

}
/** Runtime Node Trigger Choice. Serialized as `p:rtn` */
export class RuntimeNodeTrigger extends OxmlLeafElement {

    public static override _Q = 'p:rtn';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): TriggerRuntimeNodeValues | undefined { return this._g(':val'); }
    public set val(v: TriggerRuntimeNodeValues | undefined) { this._s(':val', v); }

}
/** Time Node. Serialized as `p:tn` */
export class TimeNode extends OxmlLeafElement {

    public static override _Q = 'p:tn';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Target Element Trigger Choice. Serialized as `p:tgtEl` */
export class TargetElement extends OxmlCompositeElement<SlideTarget | SoundTarget | ShapeTarget | InkTarget | P14BookmarkTarget> {

    public static override _Q = 'p:tgtEl';
    /** Slide Target. */
    public get slideTarget(): SlideTarget | undefined { return this._f(SlideTarget); }
    /** Sound Target. */
    public get soundTarget(): SoundTarget | undefined { return this._f(SoundTarget); }
    /** Shape Target. */
    public get shapeTarget(): ShapeTarget | undefined { return this._f(ShapeTarget); }
    /** Ink Target. */
    public get inkTarget(): InkTarget | undefined { return this._f(InkTarget); }
    /** Returns P14BookmarkTarget. */
    public get bookmarkTarget(): P14BookmarkTarget | undefined { return this._f(P14BookmarkTarget); }

}
/** Time Percentage. Serialized as `p:tmPct` */
export class TimePercentage extends OxmlLeafElement {

    public static override _Q = 'p:tmPct';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Time Absolute. Serialized as `p:tmAbs` */
export class TimeAbsolute extends OxmlLeafElement {

    public static override _Q = 'p:tmAbs';
    public static override _A = [':val',];
    /** Time. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Start Sound Action. Serialized as `p:stSnd` */
export class StartSoundAction extends OxmlCompositeElement<Sound> {

    public static override _Q = 'p:stSnd';
    public static override _A = [':loop',];
    /** Loop Sound. Serialized as `:loop` */
    public get loop(): BooleanValue | undefined { return this._g(':loop'); }
    public set loop(v: BooleanValue | undefined) { this._s(':loop', v); }
    /** Sound. */
    public get sound(): Sound | undefined { return this._f(Sound); }

}
/** Defines the EmbeddedWavAudioFileType Class. */
export abstract class EmbeddedWavAudioFileType extends OxmlLeafElement {

    public static override _A = ['r:embed',':name',':builtIn',];
    /** Embedded Audio File Relationship ID. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Sound Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Recognized Built-In Sound. Serialized as `:builtIn` */
    public get builtIn(): BooleanValue | undefined { return this._g(':builtIn'); }
    public set builtIn(v: BooleanValue | undefined) { this._s(':builtIn', v); }

}
/** Sound Target. Serialized as `p:sndTgt` */
export class SoundTarget extends EmbeddedWavAudioFileType {

    public static override _Q = 'p:sndTgt';

}
/** Sound. Serialized as `p:snd` */
export class Sound extends EmbeddedWavAudioFileType {

    public static override _Q = 'p:snd';

}
/** Defines the ContentPart Class. Serialized as `p:contentPart` */
export class ContentPart extends OxmlCompositeElement<P14NonVisualContentPartProperties | P14Transform2D | P14ExtensionListModify> {

    public static override _Q = 'p:contentPart';
    public static override _A = ['p14:bwMode','r:id',];
    /** bwMode. Serialized as `p14:bwMode` */
    public get bwMode(): BlackWhiteModeValues | undefined { return this._g('p14:bwMode'); }
    public set bwMode(v: BlackWhiteModeValues | undefined) { this._s('p14:bwMode', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns P14NonVisualContentPartProperties. */
    public get nonVisualContentPartProperties(): P14NonVisualContentPartProperties | undefined { return this._f(P14NonVisualContentPartProperties); }
    /** Returns P14Transform2D. */
    public get transform2D(): P14Transform2D | undefined { return this._f(P14Transform2D); }
    /** Returns P14ExtensionListModify. */
    public get extensionListModify(): P14ExtensionListModify | undefined { return this._f(P14ExtensionListModify); }

}
/** Presentation-wide View Properties. Serialized as `p:viewPr` */
export class ViewProperties extends OxmlPartRootElement<NormalViewProperties | SlideViewProperties | OutlineViewProperties | NotesTextViewProperties | SorterViewProperties | NotesViewProperties | GridSpacing | ExtensionList> {

    public static override _Q = 'p:viewPr';
    public static override _A = [':lastView',':showComments',];
    /** Last View. Serialized as `:lastView` */
    public get lastView(): ViewValues | undefined { return this._g(':lastView'); }
    public set lastView(v: ViewValues | undefined) { this._s(':lastView', v); }
    /** Show Comments. Serialized as `:showComments` */
    public get showComments(): BooleanValue | undefined { return this._g(':showComments'); }
    public set showComments(v: BooleanValue | undefined) { this._s(':showComments', v); }
    /** Normal View Properties. */
    public get normalViewProperties(): NormalViewProperties | undefined { return this._f(NormalViewProperties); }
    /** Slide View Properties. */
    public get slideViewProperties(): SlideViewProperties | undefined { return this._f(SlideViewProperties); }
    /** Outline View Properties. */
    public get outlineViewProperties(): OutlineViewProperties | undefined { return this._f(OutlineViewProperties); }
    /** Notes Text View Properties. */
    public get notesTextViewProperties(): NotesTextViewProperties | undefined { return this._f(NotesTextViewProperties); }
    /** Slide Sorter View Properties. */
    public get sorterViewProperties(): SorterViewProperties | undefined { return this._f(SorterViewProperties); }
    /** Notes View Properties. */
    public get notesViewProperties(): NotesViewProperties | undefined { return this._f(NotesViewProperties); }
    /** Grid Spacing. */
    public get gridSpacing(): GridSpacing | undefined { return this._f(GridSpacing); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Programmable Tab List. Serialized as `p:tagLst` */
export class TagList extends OxmlPartRootElement<Tag> {

    public static override _Q = 'p:tagLst';

}
/** Slide Synchronization Properties. Serialized as `p:sldSyncPr` */
export class SlideSyncProperties extends OxmlPartRootElement<ExtensionList> {

    public static override _Q = 'p:sldSyncPr';
    public static override _A = [':serverSldId',':serverSldModifiedTime',':clientInsertedTime',];
    /** Server's Slide File ID. Serialized as `:serverSldId` */
    public get serverSlideId(): StringValue | undefined { return this._g(':serverSldId'); }
    public set serverSlideId(v: StringValue | undefined) { this._s(':serverSldId', v); }
    /** Server's Slide File's modification date/time. Serialized as `:serverSldModifiedTime` */
    public get serverSlideModifiedTime(): DateTimeValue | undefined { return this._g(':serverSldModifiedTime'); }
    public set serverSlideModifiedTime(v: DateTimeValue | undefined) { this._s(':serverSldModifiedTime', v); }
    /** Client Slide Insertion date/time. Serialized as `:clientInsertedTime` */
    public get clientInsertedTime(): DateTimeValue | undefined { return this._g(':clientInsertedTime'); }
    public set clientInsertedTime(v: DateTimeValue | undefined) { this._s(':clientInsertedTime', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Notes Slide. Serialized as `p:notes` */
export class NotesSlide extends OxmlPartRootElement<CommonSlideData | ColorMapOverride | ExtensionListWithModification> {

    public static override _Q = 'p:notes';
    public static override _A = [':showMasterSp',':showMasterPhAnim',];
    /** Show Master Shapes. Serialized as `:showMasterSp` */
    public get showMasterShapes(): BooleanValue | undefined { return this._g(':showMasterSp'); }
    public set showMasterShapes(v: BooleanValue | undefined) { this._s(':showMasterSp', v); }
    /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
    public get showMasterPlaceholderAnimations(): BooleanValue | undefined { return this._g(':showMasterPhAnim'); }
    public set showMasterPlaceholderAnimations(v: BooleanValue | undefined) { this._s(':showMasterPhAnim', v); }
    /** Common slide data for notes slides. */
    public get commonSlideData(): CommonSlideData | undefined { return this._f(CommonSlideData); }
    /** Color Scheme Map Override. */
    public get colorMapOverride(): ColorMapOverride | undefined { return this._f(ColorMapOverride); }
    /** Returns ExtensionListWithModification. */
    public get extensionListWithModification(): ExtensionListWithModification | undefined { return this._f(ExtensionListWithModification); }

}
/** Notes Master. Serialized as `p:notesMaster` */
export class NotesMaster extends OxmlPartRootElement<CommonSlideData | ColorMap | HeaderFooter | NotesStyle | NotesMasterExtensionList> {

    public static override _Q = 'p:notesMaster';
    /** Returns CommonSlideData. */
    public get commonSlideData(): CommonSlideData | undefined { return this._f(CommonSlideData); }
    /** Color Scheme Map. */
    public get colorMap(): ColorMap | undefined { return this._f(ColorMap); }
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Returns NotesStyle. */
    public get notesStyle(): NotesStyle | undefined { return this._f(NotesStyle); }
    /** Returns NotesMasterExtensionList. */
    public get notesMasterExtensionList(): NotesMasterExtensionList | undefined { return this._f(NotesMasterExtensionList); }

}
/** Handout Master. Serialized as `p:handoutMaster` */
export class HandoutMaster extends OxmlPartRootElement<CommonSlideData | ColorMap | HeaderFooter | HandoutMasterExtensionList> {

    public static override _Q = 'p:handoutMaster';
    /** Returns CommonSlideData. */
    public get commonSlideData(): CommonSlideData | undefined { return this._f(CommonSlideData); }
    /** Color Scheme Map. */
    public get colorMap(): ColorMap | undefined { return this._f(ColorMap); }
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Returns HandoutMasterExtensionList. */
    public get handoutMasterExtensionList(): HandoutMasterExtensionList | undefined { return this._f(HandoutMasterExtensionList); }

}
/** Slide Master. Serialized as `p:sldMaster` */
export class SlideMaster extends OxmlPartRootElement<CommonSlideData | ColorMap | SlideLayoutIdList | Transition | Timing | HeaderFooter | TextStyles | SlideMasterExtensionList> {

    public static override _Q = 'p:sldMaster';
    public static override _A = [':preserve',];
    /** preserve. Serialized as `:preserve` */
    public get preserve(): BooleanValue | undefined { return this._g(':preserve'); }
    public set preserve(v: BooleanValue | undefined) { this._s(':preserve', v); }
    /** Returns CommonSlideData. */
    public get commonSlideData(): CommonSlideData | undefined { return this._f(CommonSlideData); }
    /** Color Scheme Map. */
    public get colorMap(): ColorMap | undefined { return this._f(ColorMap); }
    /** Returns SlideLayoutIdList. */
    public get slideLayoutIdList(): SlideLayoutIdList | undefined { return this._f(SlideLayoutIdList); }
    /** Returns Transition. */
    public get transition(): Transition | undefined { return this._f(Transition); }
    /** Returns Timing. */
    public get timing(): Timing | undefined { return this._f(Timing); }
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Returns TextStyles. */
    public get textStyles(): TextStyles | undefined { return this._f(TextStyles); }
    /** Returns SlideMasterExtensionList. */
    public get slideMasterExtensionList(): SlideMasterExtensionList | undefined { return this._f(SlideMasterExtensionList); }

}
/** Slide Layout. Serialized as `p:sldLayout` */
export class SlideLayout extends OxmlPartRootElement<CommonSlideData | ColorMapOverride | Transition | Timing | HeaderFooter | SlideLayoutExtensionList> {

    public static override _Q = 'p:sldLayout';
    public static override _A = [':showMasterSp',':showMasterPhAnim',':matchingName',':type',':preserve',':userDrawn',];
    /** Show Master Shapes. Serialized as `:showMasterSp` */
    public get showMasterShapes(): BooleanValue | undefined { return this._g(':showMasterSp'); }
    public set showMasterShapes(v: BooleanValue | undefined) { this._s(':showMasterSp', v); }
    /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
    public get showMasterPlaceholderAnimations(): BooleanValue | undefined { return this._g(':showMasterPhAnim'); }
    public set showMasterPlaceholderAnimations(v: BooleanValue | undefined) { this._s(':showMasterPhAnim', v); }
    /** matchingName. Serialized as `:matchingName` */
    public get matchingName(): StringValue | undefined { return this._g(':matchingName'); }
    public set matchingName(v: StringValue | undefined) { this._s(':matchingName', v); }
    /** type. Serialized as `:type` */
    public get type(): SlideLayoutValues | undefined { return this._g(':type'); }
    public set type(v: SlideLayoutValues | undefined) { this._s(':type', v); }
    /** preserve. Serialized as `:preserve` */
    public get preserve(): BooleanValue | undefined { return this._g(':preserve'); }
    public set preserve(v: BooleanValue | undefined) { this._s(':preserve', v); }
    /** userDrawn. Serialized as `:userDrawn` */
    public get userDrawn(): BooleanValue | undefined { return this._g(':userDrawn'); }
    public set userDrawn(v: BooleanValue | undefined) { this._s(':userDrawn', v); }
    /** Returns CommonSlideData. */
    public get commonSlideData(): CommonSlideData | undefined { return this._f(CommonSlideData); }
    /** Color Scheme Map Override. */
    public get colorMapOverride(): ColorMapOverride | undefined { return this._f(ColorMapOverride); }
    /** Returns Transition. */
    public get transition(): Transition | undefined { return this._f(Transition); }
    /** Returns Timing. */
    public get timing(): Timing | undefined { return this._f(Timing); }
    /** Returns HeaderFooter. */
    public get headerFooter(): HeaderFooter | undefined { return this._f(HeaderFooter); }
    /** Returns SlideLayoutExtensionList. */
    public get slideLayoutExtensionList(): SlideLayoutExtensionList | undefined { return this._f(SlideLayoutExtensionList); }

}
/** Presentation Slide. Serialized as `p:sld` */
export class Slide extends OxmlPartRootElement<CommonSlideData | ColorMapOverride | Transition | Timing | SlideExtensionList> {

    public static override _Q = 'p:sld';
    public static override _A = [':showMasterSp',':showMasterPhAnim',':show',];
    /** Show Master Shapes. Serialized as `:showMasterSp` */
    public get showMasterShapes(): BooleanValue | undefined { return this._g(':showMasterSp'); }
    public set showMasterShapes(v: BooleanValue | undefined) { this._s(':showMasterSp', v); }
    /** Show Master Placeholder Animations. Serialized as `:showMasterPhAnim` */
    public get showMasterPlaceholderAnimations(): BooleanValue | undefined { return this._g(':showMasterPhAnim'); }
    public set showMasterPlaceholderAnimations(v: BooleanValue | undefined) { this._s(':showMasterPhAnim', v); }
    /** Show Slide in Slide Show. Serialized as `:show` */
    public get show(): BooleanValue | undefined { return this._g(':show'); }
    public set show(v: BooleanValue | undefined) { this._s(':show', v); }
    /** Common slide data for slides. */
    public get commonSlideData(): CommonSlideData | undefined { return this._f(CommonSlideData); }
    /** Color Scheme Map Override. */
    public get colorMapOverride(): ColorMapOverride | undefined { return this._f(ColorMapOverride); }
    /** Slide Transition. */
    public get transition(): Transition | undefined { return this._f(Transition); }
    /** Slide Timing Information for a Slide. */
    public get timing(): Timing | undefined { return this._f(Timing); }
    /** Returns SlideExtensionList. */
    public get slideExtensionList(): SlideExtensionList | undefined { return this._f(SlideExtensionList); }

}
/** Presentation-wide Properties. Serialized as `p:presentationPr` */
export class PresentationProperties extends OxmlPartRootElement<HtmlPublishProperties | WebProperties | PrintingProperties | ShowProperties | ColorMostRecentlyUsed | PresentationPropertiesExtensionList> {

    public static override _Q = 'p:presentationPr';
    /** HTML Publishing Properties. */
    public get htmlPublishProperties(): HtmlPublishProperties | undefined { return this._f(HtmlPublishProperties); }
    /** Web Properties. */
    public get webProperties(): WebProperties | undefined { return this._f(WebProperties); }
    /** Returns PrintingProperties. */
    public get printingProperties(): PrintingProperties | undefined { return this._f(PrintingProperties); }
    /** Returns ShowProperties. */
    public get showProperties(): ShowProperties | undefined { return this._f(ShowProperties); }
    /** Returns ColorMostRecentlyUsed. */
    public get colorMostRecentlyUsed(): ColorMostRecentlyUsed | undefined { return this._f(ColorMostRecentlyUsed); }
    /** Returns PresentationPropertiesExtensionList. */
    public get presentationPropertiesExtensionList(): PresentationPropertiesExtensionList | undefined { return this._f(PresentationPropertiesExtensionList); }

}
/** Presentation. Serialized as `p:presentation` */
export class Presentation extends OxmlPartRootElement<SlideMasterIdList | NotesMasterIdList | HandoutMasterIdList | SlideIdList | SlideSize | NotesSize | EmbeddedFontList | CustomShowList | PhotoAlbum | CustomerDataList | Kinsoku | DefaultTextStyle | ModificationVerifier | PresentationExtensionList> {

    public static override _Q = 'p:presentation';
    public static override _A = [':serverZoom',':firstSlideNum',':showSpecialPlsOnTitleSld',':rtl',':removePersonalInfoOnSave',':compatMode',':strictFirstAndLastChars',':embedTrueTypeFonts',':saveSubsetFonts',':autoCompressPictures',':bookmarkIdSeed',':conformance',];
    /** serverZoom. Serialized as `:serverZoom` */
    public get serverZoom(): Int32Value | undefined { return this._g(':serverZoom'); }
    public set serverZoom(v: Int32Value | undefined) { this._s(':serverZoom', v); }
    /** firstSlideNum. Serialized as `:firstSlideNum` */
    public get firstSlideNum(): Int32Value | undefined { return this._g(':firstSlideNum'); }
    public set firstSlideNum(v: Int32Value | undefined) { this._s(':firstSlideNum', v); }
    /** showSpecialPlsOnTitleSld. Serialized as `:showSpecialPlsOnTitleSld` */
    public get showSpecialPlaceholderOnTitleSlide(): BooleanValue | undefined { return this._g(':showSpecialPlsOnTitleSld'); }
    public set showSpecialPlaceholderOnTitleSlide(v: BooleanValue | undefined) { this._s(':showSpecialPlsOnTitleSld', v); }
    /** rtl. Serialized as `:rtl` */
    public get rightToLeft(): BooleanValue | undefined { return this._g(':rtl'); }
    public set rightToLeft(v: BooleanValue | undefined) { this._s(':rtl', v); }
    /** removePersonalInfoOnSave. Serialized as `:removePersonalInfoOnSave` */
    public get removePersonalInfoOnSave(): BooleanValue | undefined { return this._g(':removePersonalInfoOnSave'); }
    public set removePersonalInfoOnSave(v: BooleanValue | undefined) { this._s(':removePersonalInfoOnSave', v); }
    /** compatMode. Serialized as `:compatMode` */
    public get compatibilityMode(): BooleanValue | undefined { return this._g(':compatMode'); }
    public set compatibilityMode(v: BooleanValue | undefined) { this._s(':compatMode', v); }
    /** strictFirstAndLastChars. Serialized as `:strictFirstAndLastChars` */
    public get strictFirstAndLastChars(): BooleanValue | undefined { return this._g(':strictFirstAndLastChars'); }
    public set strictFirstAndLastChars(v: BooleanValue | undefined) { this._s(':strictFirstAndLastChars', v); }
    /** embedTrueTypeFonts. Serialized as `:embedTrueTypeFonts` */
    public get embedTrueTypeFonts(): BooleanValue | undefined { return this._g(':embedTrueTypeFonts'); }
    public set embedTrueTypeFonts(v: BooleanValue | undefined) { this._s(':embedTrueTypeFonts', v); }
    /** saveSubsetFonts. Serialized as `:saveSubsetFonts` */
    public get saveSubsetFonts(): BooleanValue | undefined { return this._g(':saveSubsetFonts'); }
    public set saveSubsetFonts(v: BooleanValue | undefined) { this._s(':saveSubsetFonts', v); }
    /** autoCompressPictures. Serialized as `:autoCompressPictures` */
    public get autoCompressPictures(): BooleanValue | undefined { return this._g(':autoCompressPictures'); }
    public set autoCompressPictures(v: BooleanValue | undefined) { this._s(':autoCompressPictures', v); }
    /** bookmarkIdSeed. Serialized as `:bookmarkIdSeed` */
    public get bookmarkIdSeed(): UInt32Value | undefined { return this._g(':bookmarkIdSeed'); }
    public set bookmarkIdSeed(v: UInt32Value | undefined) { this._s(':bookmarkIdSeed', v); }
    /** conformance. Serialized as `:conformance` */
    public get conformance(): ConformanceClassValues | undefined { return this._g(':conformance'); }
    public set conformance(v: ConformanceClassValues | undefined) { this._s(':conformance', v); }
    /** Returns SlideMasterIdList. */
    public get slideMasterIdList(): SlideMasterIdList | undefined { return this._f(SlideMasterIdList); }
    /** Returns NotesMasterIdList. */
    public get notesMasterIdList(): NotesMasterIdList | undefined { return this._f(NotesMasterIdList); }
    /** Returns HandoutMasterIdList. */
    public get handoutMasterIdList(): HandoutMasterIdList | undefined { return this._f(HandoutMasterIdList); }
    /** Returns SlideIdList. */
    public get slideIdList(): SlideIdList | undefined { return this._f(SlideIdList); }
    /** Returns SlideSize. */
    public get slideSize(): SlideSize | undefined { return this._f(SlideSize); }
    /** Returns NotesSize. */
    public get notesSize(): NotesSize | undefined { return this._f(NotesSize); }
    /** Returns EmbeddedFontList. */
    public get embeddedFontList(): EmbeddedFontList | undefined { return this._f(EmbeddedFontList); }
    /** Returns CustomShowList. */
    public get customShowList(): CustomShowList | undefined { return this._f(CustomShowList); }
    /** Returns PhotoAlbum. */
    public get photoAlbum(): PhotoAlbum | undefined { return this._f(PhotoAlbum); }
    /** Returns CustomerDataList. */
    public get customerDataList(): CustomerDataList | undefined { return this._f(CustomerDataList); }
    /** Returns Kinsoku. */
    public get kinsoku(): Kinsoku | undefined { return this._f(Kinsoku); }
    /** Returns DefaultTextStyle. */
    public get defaultTextStyle(): DefaultTextStyle | undefined { return this._f(DefaultTextStyle); }
    /** Returns ModificationVerifier. */
    public get modificationVerifier(): ModificationVerifier | undefined { return this._f(ModificationVerifier); }
    /** Returns PresentationExtensionList. */
    public get presentationExtensionList(): PresentationExtensionList | undefined { return this._f(PresentationExtensionList); }

}
/** Global Element for OLE Objects and Controls. Serialized as `p:oleObj` */
export class OleObject extends OxmlCompositeElement<OleObjectEmbed | OleObjectLink | Picture> {

    public static override _Q = 'p:oleObj';
    public static override _A = [':spid',':name',':showAsIcon','r:id',':imgW',':imgH',':progId',];
    /** spid. Serialized as `:spid` */
    public get shapeId(): StringValue | undefined { return this._g(':spid'); }
    public set shapeId(v: StringValue | undefined) { this._s(':spid', v); }
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** showAsIcon. Serialized as `:showAsIcon` */
    public get showAsIcon(): BooleanValue | undefined { return this._g(':showAsIcon'); }
    public set showAsIcon(v: BooleanValue | undefined) { this._s(':showAsIcon', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** imgW. Serialized as `:imgW` */
    public get imageWidth(): Int32Value | undefined { return this._g(':imgW'); }
    public set imageWidth(v: Int32Value | undefined) { this._s(':imgW', v); }
    /** imgH. Serialized as `:imgH` */
    public get imageHeight(): Int32Value | undefined { return this._g(':imgH'); }
    public set imageHeight(v: Int32Value | undefined) { this._s(':imgH', v); }
    /** progId. Serialized as `:progId` */
    public get progId(): StringValue | undefined { return this._g(':progId'); }
    public set progId(v: StringValue | undefined) { this._s(':progId', v); }

}
/** Comment List. Serialized as `p:cmLst` */
export class CommentList extends OxmlPartRootElement<Comment> {

    public static override _Q = 'p:cmLst';

}
/** List of Comment Authors. Serialized as `p:cmAuthorLst` */
export class CommentAuthorList extends OxmlPartRootElement<CommentAuthor> {

    public static override _Q = 'p:cmAuthorLst';

}
/** Background Style Reference. Serialized as `p:bgRef` */
export class BackgroundStyleReference extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _Q = 'p:bgRef';
    public static override _A = [':idx',];
    /** Style Matrix Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Background Properties. Serialized as `p:bgPr` */
export class BackgroundProperties extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AEffectList | AEffectDag | ExtensionList> {

    public static override _Q = 'p:bgPr';
    public static override _A = [':shadeToTitle',];
    /** Shade to Title. Serialized as `:shadeToTitle` */
    public get shadeToTitle(): BooleanValue | undefined { return this._g(':shadeToTitle'); }
    public set shadeToTitle(v: BooleanValue | undefined) { this._s(':shadeToTitle', v); }

}
/** Color Scheme Map Override. Serialized as `p:clrMapOvr` */
export class ColorMapOverride extends OxmlCompositeElement<AMasterColorMapping | AOverrideColorMapping> {

    public static override _Q = 'p:clrMapOvr';
    /** Master Color Mapping. */
    public get masterColorMapping(): AMasterColorMapping | undefined { return this._f(AMasterColorMapping); }
    /** Override Color Mapping. */
    public get overrideColorMapping(): AOverrideColorMapping | undefined { return this._f(AOverrideColorMapping); }

}
/** Color Scheme Map. Serialized as `p:clrMap` */
export class ColorMap extends OxmlCompositeElement<AExtensionList> {

    public static override _Q = 'p:clrMap';
    public static override _A = [':bg1',':tx1',':bg2',':tx2',':accent1',':accent2',':accent3',':accent4',':accent5',':accent6',':hlink',':folHlink',];
    /** Background 1. Serialized as `:bg1` */
    public get background1(): ColorSchemeIndexValues | undefined { return this._g(':bg1'); }
    public set background1(v: ColorSchemeIndexValues | undefined) { this._s(':bg1', v); }
    /** Text 1. Serialized as `:tx1` */
    public get text1(): ColorSchemeIndexValues | undefined { return this._g(':tx1'); }
    public set text1(v: ColorSchemeIndexValues | undefined) { this._s(':tx1', v); }
    /** Background 2. Serialized as `:bg2` */
    public get background2(): ColorSchemeIndexValues | undefined { return this._g(':bg2'); }
    public set background2(v: ColorSchemeIndexValues | undefined) { this._s(':bg2', v); }
    /** Text 2. Serialized as `:tx2` */
    public get text2(): ColorSchemeIndexValues | undefined { return this._g(':tx2'); }
    public set text2(v: ColorSchemeIndexValues | undefined) { this._s(':tx2', v); }
    /** Accent 1. Serialized as `:accent1` */
    public get accent1(): ColorSchemeIndexValues | undefined { return this._g(':accent1'); }
    public set accent1(v: ColorSchemeIndexValues | undefined) { this._s(':accent1', v); }
    /** Accent 2. Serialized as `:accent2` */
    public get accent2(): ColorSchemeIndexValues | undefined { return this._g(':accent2'); }
    public set accent2(v: ColorSchemeIndexValues | undefined) { this._s(':accent2', v); }
    /** Accent 3. Serialized as `:accent3` */
    public get accent3(): ColorSchemeIndexValues | undefined { return this._g(':accent3'); }
    public set accent3(v: ColorSchemeIndexValues | undefined) { this._s(':accent3', v); }
    /** Accent 4. Serialized as `:accent4` */
    public get accent4(): ColorSchemeIndexValues | undefined { return this._g(':accent4'); }
    public set accent4(v: ColorSchemeIndexValues | undefined) { this._s(':accent4', v); }
    /** Accent 5. Serialized as `:accent5` */
    public get accent5(): ColorSchemeIndexValues | undefined { return this._g(':accent5'); }
    public set accent5(v: ColorSchemeIndexValues | undefined) { this._s(':accent5', v); }
    /** Accent 6. Serialized as `:accent6` */
    public get accent6(): ColorSchemeIndexValues | undefined { return this._g(':accent6'); }
    public set accent6(v: ColorSchemeIndexValues | undefined) { this._s(':accent6', v); }
    /** Hyperlink. Serialized as `:hlink` */
    public get hyperlink(): ColorSchemeIndexValues | undefined { return this._g(':hlink'); }
    public set hyperlink(v: ColorSchemeIndexValues | undefined) { this._s(':hlink', v); }
    /** Followed Hyperlink. Serialized as `:folHlink` */
    public get followedHyperlink(): ColorSchemeIndexValues | undefined { return this._g(':folHlink'); }
    public set followedHyperlink(v: ColorSchemeIndexValues | undefined) { this._s(':folHlink', v); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Kiosk Slide Show Mode. Serialized as `p:kiosk` */
export class KioskSlideMode extends OxmlLeafElement {

    public static override _Q = 'p:kiosk';
    public static override _A = [':restart',];
    /** Restart Show. Serialized as `:restart` */
    public get restart(): UInt32Value | undefined { return this._g(':restart'); }
    public set restart(v: UInt32Value | undefined) { this._s(':restart', v); }

}
/** Browse Slide Show Mode. Serialized as `p:browse` */
export class BrowseSlideMode extends OxmlLeafElement {

    public static override _Q = 'p:browse';
    public static override _A = [':showScrollbar',];
    /** Show Scroll Bar in Window. Serialized as `:showScrollbar` */
    public get showScrollbar(): BooleanValue | undefined { return this._g(':showScrollbar'); }
    public set showScrollbar(v: BooleanValue | undefined) { this._s(':showScrollbar', v); }

}
/** Extension. Serialized as `p:ext` */
export class Extension extends OxmlCompositeElement {

    public static override _Q = 'p:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}
/** Custom Show. Serialized as `p:custShow` */
export class CustomShowReference extends OxmlLeafElement {

    public static override _Q = 'p:custShow';
    public static override _A = [':id',];
    /** Custom Show Identifier. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }

}
/** Defines the IndexRangeType Class. */
export abstract class IndexRangeType extends OxmlLeafElement {

    public static override _A = [':st',':end',];
    /** Start. Serialized as `:st` */
    public get start(): UInt32Value | undefined { return this._g(':st'); }
    public set start(v: UInt32Value | undefined) { this._s(':st', v); }
    /** End. Serialized as `:end` */
    public get end(): UInt32Value | undefined { return this._g(':end'); }
    public set end(v: UInt32Value | undefined) { this._s(':end', v); }

}
/** Paragraph Text Range. Serialized as `p:pRg` */
export class ParagraphIndexRange extends IndexRangeType {

    public static override _Q = 'p:pRg';

}
/** Character Range. Serialized as `p:charRg` */
export class CharRange extends IndexRangeType {

    public static override _Q = 'p:charRg';

}
/** Slide Range. Serialized as `p:sldRg` */
export class SlideRange extends IndexRangeType {

    public static override _Q = 'p:sldRg';

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Defines the WedgeTransition Class. Serialized as `p:wedge` */
export class WedgeTransition extends EmptyType {

    public static override _Q = 'p:wedge';

}
/** Defines the RandomTransition Class. Serialized as `p:random` */
export class RandomTransition extends EmptyType {

    public static override _Q = 'p:random';

}
/** Defines the PlusTransition Class. Serialized as `p:plus` */
export class PlusTransition extends EmptyType {

    public static override _Q = 'p:plus';

}
/** Defines the NewsflashTransition Class. Serialized as `p:newsflash` */
export class NewsflashTransition extends EmptyType {

    public static override _Q = 'p:newsflash';

}
/** Defines the DiamondTransition Class. Serialized as `p:diamond` */
export class DiamondTransition extends EmptyType {

    public static override _Q = 'p:diamond';

}
/** Defines the DissolveTransition Class. Serialized as `p:dissolve` */
export class DissolveTransition extends EmptyType {

    public static override _Q = 'p:dissolve';

}
/** Defines the CircleTransition Class. Serialized as `p:circle` */
export class CircleTransition extends EmptyType {

    public static override _Q = 'p:circle';

}
/** Background. Serialized as `p:bg` */
export class BackgroundAnimation extends EmptyType {

    public static override _Q = 'p:bg';

}
/** Slide Target. Serialized as `p:sldTgt` */
export class SlideTarget extends EmptyType {

    public static override _Q = 'p:sldTgt';

}
/** Build As One. Serialized as `p:bldAsOne` */
export class BuildAsOne extends EmptyType {

    public static override _Q = 'p:bldAsOne';

}
/** Stop Sound Action. Serialized as `p:endSnd` */
export class EndSoundAction extends EmptyType {

    public static override _Q = 'p:endSnd';

}
/** Presenter Slide Show Mode. Serialized as `p:present` */
export class PresenterSlideMode extends EmptyType {

    public static override _Q = 'p:present';

}
/** All Slides. Serialized as `p:sldAll` */
export class SlideAll extends EmptyType {

    public static override _Q = 'p:sldAll';

}

export function initPresentationNamespace() {
    SoundAction._C = {
        'p:stSnd': StartSoundAction,
        'p:endSnd': EndSoundAction,
    };
    ZoomTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionInOutDirectionValuesArray),
    };
    WheelTransition._D = {
        ':spokes': new OxmlAttr(':spokes', OxmlType.UInt32Value),
    };
    StripsTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionCornerDirectionValuesArray),
    };
    SplitTransition._D = {
        ':orient': new OxmlAttr(':orient', OxmlType.EnumValue, DirectionValuesArray),
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionInOutDirectionValuesArray),
    };
    SideDirectionTransitionType._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionSlideDirectionValuesArray),
    };
    OptionalBlackTransitionType._D = {
        ':thruBlk': new OxmlAttr(':thruBlk', OxmlType.BooleanValue),
    };
    EightDirectionTransitionType._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.StringValue),
    };
    OrientationTransitionType._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, DirectionValuesArray),
    };
    GraphicElement._C = {
        'a:dgm': ADiagram,
        'a:chart': AChart,
    };
    TextElement._C = {
        'p:charRg': CharRange,
        'p:pRg': ParagraphIndexRange,
    };
    OleChartElement._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ChartSubElementValuesArray),
        ':lvl': new OxmlAttr(':lvl', OxmlType.UInt32Value),
    };
    NotesMasterExtensionList._C = {
        'p:ext': NotesMasterExtension,
    };
    HandoutMasterExtensionList._C = {
        'p:ext': HandoutMasterExtension,
    };
    SlideMasterExtensionList._C = {
        'p:ext': SlideMasterExtension,
    };
    TextStyles._C = {
        'p:titleStyle': TitleStyle,
        'p:bodyStyle': BodyStyle,
        'p:otherStyle': OtherStyle,
        'p:extLst': ExtensionList,
    };
    SlideLayoutIdList._C = {
        'p:sldLayoutId': SlideLayoutId,
    };
    SlideLayoutExtensionList._C = {
        'p:ext': SlideLayoutExtension,
    };
    HeaderFooter._C = {
        'p:extLst': ExtensionListWithModification,
    };
    HeaderFooter._D = {
        ':sldNum': new OxmlAttr(':sldNum', OxmlType.BooleanValue),
        ':hdr': new OxmlAttr(':hdr', OxmlType.BooleanValue),
        ':ftr': new OxmlAttr(':ftr', OxmlType.BooleanValue),
        ':dt': new OxmlAttr(':dt', OxmlType.BooleanValue),
    };
    PresentationPropertiesExtension._C = {
        'p14:discardImageEditData': P14DiscardImageEditData,
        'p14:defaultImageDpi': P14DefaultImageDpi,
        'a14:m': A14TextMath,
        'p15:chartTrackingRefBased': P15ChartTrackingReferenceBased,
    };
    PresentationPropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PresentationPropertiesExtensionList._C = {
        'p:ext': PresentationPropertiesExtension,
    };
    ColorMostRecentlyUsed._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ShowProperties._C = {
        'p:present': PresenterSlideMode,
        'p:browse': BrowseSlideMode,
        'p:kiosk': KioskSlideMode,
        'p:sldAll': SlideAll,
        'p:sldRg': SlideRange,
        'p:custShow': CustomShowReference,
        'p:penClr': PenColor,
        'p:extLst': ShowPropertiesExtensionList,
    };
    ShowProperties._D = {
        ':loop': new OxmlAttr(':loop', OxmlType.BooleanValue),
        ':showNarration': new OxmlAttr(':showNarration', OxmlType.BooleanValue),
        ':showAnimation': new OxmlAttr(':showAnimation', OxmlType.BooleanValue),
        ':useTimings': new OxmlAttr(':useTimings', OxmlType.BooleanValue),
    };
    PrintingProperties._C = {
        'p:extLst': ExtensionList,
    };
    PrintingProperties._D = {
        ':prnWhat': new OxmlAttr(':prnWhat', OxmlType.EnumValue, PrintOutputValuesArray),
        ':clrMode': new OxmlAttr(':clrMode', OxmlType.EnumValue, PrintColorModeValuesArray),
        ':hiddenSlides': new OxmlAttr(':hiddenSlides', OxmlType.BooleanValue),
        ':scaleToFitPaper': new OxmlAttr(':scaleToFitPaper', OxmlType.BooleanValue),
        ':frameSlides': new OxmlAttr(':frameSlides', OxmlType.BooleanValue),
    };
    WebProperties._C = {
        'p:extLst': ExtensionList,
    };
    WebProperties._D = {
        ':showAnimation': new OxmlAttr(':showAnimation', OxmlType.BooleanValue),
        ':resizeGraphics': new OxmlAttr(':resizeGraphics', OxmlType.BooleanValue),
        ':allowPng': new OxmlAttr(':allowPng', OxmlType.BooleanValue),
        ':relyOnVml': new OxmlAttr(':relyOnVml', OxmlType.BooleanValue),
        ':organizeInFolders': new OxmlAttr(':organizeInFolders', OxmlType.BooleanValue),
        ':useLongFilenames': new OxmlAttr(':useLongFilenames', OxmlType.BooleanValue),
        ':imgSz': new OxmlAttr(':imgSz', OxmlType.EnumValue, WebScreenSizeValuesArray),
        ':encoding': new OxmlAttr(':encoding', OxmlType.StringValue),
        ':clr': new OxmlAttr(':clr', OxmlType.EnumValue, WebColorValuesArray),
    };
    HtmlPublishProperties._C = {
        'p:sldAll': SlideAll,
        'p:sldRg': SlideRange,
        'p:custShow': CustomShowReference,
        'p:extLst': ExtensionList,
    };
    HtmlPublishProperties._D = {
        ':showSpeakerNotes': new OxmlAttr(':showSpeakerNotes', OxmlType.BooleanValue),
        ':pubBrowser': new OxmlAttr(':pubBrowser', OxmlType.EnumValue, HtmlPublishWebBrowserSupportValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    PresentationExtension._C = {
        'p14:sectionPr': P14SectionProperties,
        'p14:sectionLst': P14SectionList,
        'p15:sldGuideLst': P15SlideGuideList,
        'p15:notesGuideLst': P15NotesGuideList,
    };
    PresentationExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PresentationExtensionList._C = {
        'p:ext': PresentationExtension,
    };
    ModificationVerifier._D = {
        ':cryptProviderType': new OxmlAttr(':cryptProviderType', OxmlType.EnumValue, CryptProviderValuesArray),
        ':cryptAlgorithmClass': new OxmlAttr(':cryptAlgorithmClass', OxmlType.EnumValue, CryptAlgorithmClassValuesArray),
        ':cryptAlgorithmType': new OxmlAttr(':cryptAlgorithmType', OxmlType.EnumValue, CryptAlgorithmValuesArray),
        ':cryptAlgorithmSid': new OxmlAttr(':cryptAlgorithmSid', OxmlType.UInt32Value),
        ':spinCount': new OxmlAttr(':spinCount', OxmlType.UInt32Value),
        ':saltData': new OxmlAttr(':saltData', OxmlType.Base64BinaryValue),
        ':hashData': new OxmlAttr(':hashData', OxmlType.StringValue),
        ':cryptProvider': new OxmlAttr(':cryptProvider', OxmlType.StringValue),
        ':algIdExt': new OxmlAttr(':algIdExt', OxmlType.UInt32Value),
        ':algIdExtSource': new OxmlAttr(':algIdExtSource', OxmlType.StringValue),
        ':cryptProviderTypeExt': new OxmlAttr(':cryptProviderTypeExt', OxmlType.UInt32Value),
        ':cryptProviderTypeExtSource': new OxmlAttr(':cryptProviderTypeExtSource', OxmlType.StringValue),
        ':algorithmName': new OxmlAttr(':algorithmName', OxmlType.StringValue),
        ':hashValue': new OxmlAttr(':hashValue', OxmlType.Base64BinaryValue),
        ':saltValue': new OxmlAttr(':saltValue', OxmlType.Base64BinaryValue),
        ':spinValue': new OxmlAttr(':spinValue', OxmlType.UInt32Value),
    };
    Kinsoku._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':invalStChars': new OxmlAttr(':invalStChars', OxmlType.StringValue),
        ':invalEndChars': new OxmlAttr(':invalEndChars', OxmlType.StringValue),
    };
    PhotoAlbum._C = {
        'p:extLst': ExtensionList,
    };
    PhotoAlbum._D = {
        ':bw': new OxmlAttr(':bw', OxmlType.BooleanValue),
        ':showCaptions': new OxmlAttr(':showCaptions', OxmlType.BooleanValue),
        ':layout': new OxmlAttr(':layout', OxmlType.EnumValue, PhotoAlbumLayoutValuesArray),
        ':frame': new OxmlAttr(':frame', OxmlType.EnumValue, PhotoAlbumFrameShapeValuesArray),
    };
    CustomShowList._C = {
        'p:custShow': CustomShow,
    };
    EmbeddedFontList._C = {
        'p:embeddedFont': EmbeddedFont,
    };
    SlideSize._D = {
        ':cx': new OxmlAttr(':cx', OxmlType.Int32Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int32Value),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, SlideSizeValuesArray),
    };
    SlideIdList._C = {
        'p:sldId': SlideId,
    };
    HandoutMasterIdList._C = {
        'p:handoutMasterId': HandoutMasterId,
    };
    NotesMasterIdList._C = {
        'p:notesMasterId': NotesMasterId,
    };
    SlideMasterIdList._C = {
        'p:sldMasterId': SlideMasterId,
    };
    CommentExtensionList._C = {
        'p:ext': CommentExtension,
    };
    CommentAuthorExtensionList._C = {
        'p:ext': CommentAuthorExtension,
    };
    TimeListType._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int32Value),
        ':y': new OxmlAttr(':y', OxmlType.Int32Value),
    };
    TimeAnimateValueList._C = {
        'p:tav': TimeAnimateValue,
    };
    TimeTypeListType._C = {
        'p:par': ParallelTimeNode,
        'p:seq': SequenceTimeNode,
        'p:excl': ExclusiveTimeNode,
        'p:anim': Animate,
        'p:animClr': AnimateColor,
        'p:animEffect': AnimateEffect,
        'p:animMotion': AnimateMotion,
        'p:animRot': AnimateRotation,
        'p:animScale': AnimateScale,
        'p:cmd': Command,
        'p:set': SetBehavior,
        'p:audio': Audio,
        'p:video': Video,
    };
    SubTimeNodeList._C = {
        'p:par': ParallelTimeNode,
        'p:seq': SequenceTimeNode,
        'p:excl': ExclusiveTimeNode,
        'p:anim': Animate,
        'p:animClr': AnimateColor,
        'p:animEffect': AnimateEffect,
        'p:animMotion': AnimateMotion,
        'p:animRot': AnimateRotation,
        'p:animScale': AnimateScale,
        'p:cmd': Command,
        'p:set': SetBehavior,
        'p:audio': Audio,
        'p:video': Video,
    };
    ChildTimeNodeList._C = {
        'p:par': ParallelTimeNode,
        'p:seq': SequenceTimeNode,
        'p:excl': ExclusiveTimeNode,
        'p:anim': Animate,
        'p:animClr': AnimateColor,
        'p:animEffect': AnimateEffect,
        'p:animMotion': AnimateMotion,
        'p:animRot': AnimateRotation,
        'p:animScale': AnimateScale,
        'p:cmd': Command,
        'p:set': SetBehavior,
        'p:audio': Audio,
        'p:video': Video,
    };
    Iterate._C = {
        'p:tmAbs': TimeAbsolute,
        'p:tmPct': TimePercentage,
    };
    Iterate._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, IterateValuesArray),
        ':backwards': new OxmlAttr(':backwards', OxmlType.BooleanValue),
    };
    ApplicationNonVisualDrawingPropertiesExtension._C = {
        'p14:media': P14Media,
        'p14:modId': P14ModificationId,
    };
    ApplicationNonVisualDrawingPropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ApplicationNonVisualDrawingPropertiesExtensionList._C = {
        'p:ext': ApplicationNonVisualDrawingPropertiesExtension,
    };
    PlaceholderShape._C = {
        'p:extLst': ExtensionListWithModification,
    };
    PlaceholderShape._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, PlaceholderValuesArray),
        ':orient': new OxmlAttr(':orient', OxmlType.EnumValue, DirectionValuesArray),
        ':sz': new OxmlAttr(':sz', OxmlType.EnumValue, PlaceholderSizeValuesArray),
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
        ':hasCustomPrompt': new OxmlAttr(':hasCustomPrompt', OxmlType.BooleanValue),
    };
    NotesMasterExtension._C = {
        'p15:sldGuideLst': P15SlideGuideList,
    };
    NotesMasterExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    HandoutMasterExtension._C = {
        'p15:sldGuideLst': P15SlideGuideList,
    };
    HandoutMasterExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SlideMasterExtension._C = {
        'p15:sldGuideLst': P15SlideGuideList,
    };
    SlideMasterExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SlideLayoutExtension._C = {
        'p15:sldGuideLst': P15SlideGuideList,
    };
    SlideLayoutExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CommentExtension._C = {
        'p15:threadingInfo': P15ThreadingInfo,
    };
    CommentExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CommentAuthorExtension._C = {
        'p15:presenceInfo': P15PresenceInfo,
    };
    CommentAuthorExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    TimeListSubShapeIdType._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
    };
    ShapeTarget._C = {
        'p:bg': BackgroundAnimation,
        'p:subSp': SubShape,
        'p:oleChartEl': OleChartElement,
        'p:txEl': TextElement,
        'p:graphicEl': GraphicElement,
    };
    ShapeTarget._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
    };
    ShowPropertiesExtensionList._C = {
        'p:ext': ShowPropertiesExtension,
    };
    ConnectionShape._C = {
        'p:nvCxnSpPr': NonVisualConnectionShapeProperties,
        'p:spPr': ShapeProperties,
        'p:style': ShapeStyle,
        'p:extLst': ExtensionListWithModification,
    };
    GraphicFrame._C = {
        'p:nvGraphicFramePr': NonVisualGraphicFrameProperties,
        'p:xfrm': Transform,
        'a:graphic': AGraphic,
        'p:extLst': ExtensionListWithModification,
    };
    Shape._C = {
        'p:nvSpPr': NonVisualShapeProperties,
        'p:spPr': ShapeProperties,
        'p:style': ShapeStyle,
        'p:txBody': TextBody,
        'p:extLst': ExtensionListWithModification,
    };
    Shape._D = {
        ':useBgFill': new OxmlAttr(':useBgFill', OxmlType.BooleanValue),
    };
    GroupShapeProperties._C = {
        'a:xfrm': ATransformGroup,
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'a:scene3d': AScene3DType,
        'a:extLst': AExtensionList,
    };
    GroupShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    NonVisualGroupShapeProperties._C = {
        'p:cNvPr': NonVisualDrawingProperties,
        'p:cNvGrpSpPr': NonVisualGroupShapeDrawingProperties,
        'p:nvPr': ApplicationNonVisualDrawingProperties,
    };
    CommonSlideDataExtensionList._C = {
        'p:ext': CommonSlideDataExtension,
    };
    ControlList._C = {
        'p:control': Control,
    };
    CustomerDataList._C = {
        'p:custData': CustomerData,
        'p:tags': CustomerDataTags,
    };
    GroupShapeType._C = {
        'p:nvGrpSpPr': NonVisualGroupShapeProperties,
        'p:grpSpPr': GroupShapeProperties,
        'p:sp': Shape,
        'p:grpSp': GroupShape,
        'p:graphicFrame': GraphicFrame,
        'p:cxnSp': ConnectionShape,
        'p:pic': Picture,
        'p:contentPart': ContentPart,
        'p:extLst': ExtensionListWithModification,
    };
    GroupShape._C = {
        'p:nvGrpSpPr': NonVisualGroupShapeProperties,
        'p:grpSpPr': GroupShapeProperties,
        'p:sp': Shape,
        'p:grpSp': GroupShape,
        'p:graphicFrame': GraphicFrame,
        'p:cxnSp': ConnectionShape,
        'p:pic': Picture,
        'p:contentPart': ContentPart,
        'p:extLst': ExtensionListWithModification,
    };
    ShapeTree._C = {
        'p:nvGrpSpPr': NonVisualGroupShapeProperties,
        'p:grpSpPr': GroupShapeProperties,
        'p:sp': Shape,
        'p:grpSp': GroupShape,
        'p:graphicFrame': GraphicFrame,
        'p:cxnSp': ConnectionShape,
        'p:pic': Picture,
        'p:contentPart': ContentPart,
        'p:extLst': ExtensionListWithModification,
    };
    Background._C = {
        'p:bgPr': BackgroundProperties,
        'p:bgRef': BackgroundStyleReference,
    };
    Background._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    SlideExtensionList._C = {
        'p:ext': SlideExtension,
    };
    Timing._C = {
        'p:tnLst': TimeNodeList,
        'p:bldLst': BuildList,
        'p:extLst': ExtensionListWithModification,
    };
    Transition._C = {
        'p:blinds': BlindsTransition,
        'p:checker': CheckerTransition,
        'p:circle': CircleTransition,
        'p:dissolve': DissolveTransition,
        'p:comb': CombTransition,
        'p:cover': CoverTransition,
        'p:cut': CutTransition,
        'p:diamond': DiamondTransition,
        'p:fade': FadeTransition,
        'p:newsflash': NewsflashTransition,
        'p:plus': PlusTransition,
        'p:pull': PullTransition,
        'p:push': PushTransition,
        'p:random': RandomTransition,
        'p:randomBar': RandomBarTransition,
        'p:split': SplitTransition,
        'p:strips': StripsTransition,
        'p:wedge': WedgeTransition,
        'p:wheel': WheelTransition,
        'p:wipe': WipeTransition,
        'p:zoom': ZoomTransition,
        'p14:flash': P14FlashTransition,
        'p14:vortex': P14VortexTransition,
        'p14:switch': P14SwitchTransition,
        'p14:flip': P14FlipTransition,
        'p14:ripple': P14RippleTransition,
        'p14:glitter': P14GlitterTransition,
        'p14:honeycomb': P14HoneycombTransition,
        'p14:prism': P14PrismTransition,
        'p14:doors': P14DoorsTransition,
        'p14:window': P14WindowTransition,
        'p14:shred': P14ShredTransition,
        'p14:ferris': P14FerrisTransition,
        'p14:flythrough': P14FlythroughTransition,
        'p14:warp': P14WarpTransition,
        'p14:gallery': P14GalleryTransition,
        'p14:conveyor': P14ConveyorTransition,
        'p14:pan': P14PanTransition,
        'p14:reveal': P14RevealTransition,
        'p14:wheelReverse': P14WheelReverseTransition,
        'p15:prstTrans': P15PresetTransition,
        'p:sndAc': SoundAction,
        'p:extLst': ExtensionListWithModification,
    };
    Transition._D = {
        ':spd': new OxmlAttr(':spd', OxmlType.EnumValue, TransitionSpeedValuesArray),
        'p14:dur': new OxmlAttr('p14:dur', OxmlType.StringValue),
        ':advClick': new OxmlAttr(':advClick', OxmlType.BooleanValue),
        ':advTm': new OxmlAttr(':advTm', OxmlType.StringValue),
    };
    OleObjectLink._C = {
        'p:extLst': ExtensionList,
    };
    OleObjectLink._D = {
        ':updateAutomatic': new OxmlAttr(':updateAutomatic', OxmlType.BooleanValue),
    };
    OleObjectEmbed._C = {
        'p:extLst': ExtensionList,
    };
    OleObjectEmbed._D = {
        ':followColorScheme': new OxmlAttr(':followColorScheme', OxmlType.EnumValue, OleObjectFollowColorSchemeValuesArray),
    };
    Picture._C = {
        'p:nvPicPr': NonVisualPictureProperties,
        'p:blipFill': BlipFill,
        'p:spPr': ShapeProperties,
        'p:style': ShapeStyle,
        'p:extLst': ExtensionListWithModification,
    };
    ShowPropertiesExtension._C = {
        'p14:browseMode': P14BrowseMode,
        'p14:laserClr': P14LaserColor,
        'p14:showMediaCtrls': P14ShowMediaControls,
    };
    ShowPropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CommonSlideDataExtension._C = {
        'p14:creationId': P14CreationId,
    };
    CommonSlideDataExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    SlideExtension._C = {
        'p14:laserTraceLst': P14LaserTraceList,
        'p14:showEvtLst': P14ShowEventRecordList,
        'p188:commentRel': P188CommentRelationship,
    };
    SlideExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PositiveSize2DType._D = {
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
    };
    NotesViewProperties._C = {
        'p:cSldViewPr': CommonSlideViewProperties,
        'p:extLst': ExtensionList,
    };
    SorterViewProperties._C = {
        'p:cViewPr': CommonViewProperties,
        'p:extLst': ExtensionList,
    };
    SorterViewProperties._D = {
        ':showFormatting': new OxmlAttr(':showFormatting', OxmlType.BooleanValue),
    };
    NotesTextViewProperties._C = {
        'p:cViewPr': CommonViewProperties,
        'p:extLst': ExtensionList,
    };
    OutlineViewProperties._C = {
        'p:cViewPr': CommonViewProperties,
        'p:sldLst': OutlineViewSlideList,
        'p:extLst': ExtensionList,
    };
    SlideViewProperties._C = {
        'p:cSldViewPr': CommonSlideViewProperties,
        'p:extLst': ExtensionList,
    };
    NormalViewProperties._C = {
        'p:restoredLeft': RestoredLeft,
        'p:restoredTop': RestoredTop,
        'p:extLst': ExtensionList,
    };
    NormalViewProperties._D = {
        ':showOutlineIcons': new OxmlAttr(':showOutlineIcons', OxmlType.BooleanValue),
        ':snapVertSplitter': new OxmlAttr(':snapVertSplitter', OxmlType.BooleanValue),
        ':vertBarState': new OxmlAttr(':vertBarState', OxmlType.EnumValue, SplitterBarStateValuesArray),
        ':horzBarState': new OxmlAttr(':horzBarState', OxmlType.EnumValue, SplitterBarStateValuesArray),
        ':preferSingleView': new OxmlAttr(':preferSingleView', OxmlType.BooleanValue),
    };
    CommonSlideViewProperties._C = {
        'p:cViewPr': CommonViewProperties,
        'p:guideLst': GuideList,
    };
    CommonSlideViewProperties._D = {
        ':snapToGrid': new OxmlAttr(':snapToGrid', OxmlType.BooleanValue),
        ':snapToObjects': new OxmlAttr(':snapToObjects', OxmlType.BooleanValue),
        ':showGuides': new OxmlAttr(':showGuides', OxmlType.BooleanValue),
    };
    GuideList._C = {
        'p:guide': Guide,
    };
    Guide._D = {
        ':orient': new OxmlAttr(':orient', OxmlType.EnumValue, DirectionValuesArray),
        ':pos': new OxmlAttr(':pos', OxmlType.Int32Value),
    };
    OutlineViewSlideList._C = {
        'p:sld': OutlineViewSlideListEntry,
    };
    OutlineViewSlideListEntry._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':collapse': new OxmlAttr(':collapse', OxmlType.BooleanValue),
    };
    CommonViewProperties._C = {
        'p:scale': ScaleFactor,
        'p:origin': Origin,
    };
    CommonViewProperties._D = {
        ':varScale': new OxmlAttr(':varScale', OxmlType.BooleanValue),
    };
    Point2DType._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    ScaleFactor._C = {
        'a:sx': AScaleX,
        'a:sy': AScaleY,
    };
    NormalViewPortionType._D = {
        ':sz': new OxmlAttr(':sz', OxmlType.Int32Value),
        ':autoAdjust': new OxmlAttr(':autoAdjust', OxmlType.BooleanValue),
    };
    Tag._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    CommonSlideData._C = {
        'p:bg': Background,
        'p:spTree': ShapeTree,
        'p:custDataLst': CustomerDataList,
        'p:controls': ControlList,
        'p:extLst': CommonSlideDataExtensionList,
    };
    CommonSlideData._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    SlideLayoutId._C = {
        'p:extLst': ExtensionList,
    };
    SlideLayoutId._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    TextListStyleType._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
    };
    NotesStyle._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
    };
    DefaultTextStyle._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
    };
    OtherStyle._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
    };
    BodyStyle._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
    };
    TitleStyle._C = {
        'a:defPPr': ADefaultParagraphProperties,
        'a:lvl1pPr': ALevel1ParagraphProperties,
        'a:lvl2pPr': ALevel2ParagraphProperties,
        'a:lvl3pPr': ALevel3ParagraphProperties,
        'a:lvl4pPr': ALevel4ParagraphProperties,
        'a:lvl5pPr': ALevel5ParagraphProperties,
        'a:lvl6pPr': ALevel6ParagraphProperties,
        'a:lvl7pPr': ALevel7ParagraphProperties,
        'a:lvl8pPr': ALevel8ParagraphProperties,
        'a:lvl9pPr': ALevel9ParagraphProperties,
        'a:extLst': AExtensionList,
    };
    NonVisualGroupShapeDrawingProperties._C = {
        'a:grpSpLocks': AGroupShapeLocks,
        'a:extLst': ANonVisualGroupDrawingShapePropsExtensionList,
    };
    Transform._C = {
        'a:off': AOffset,
        'a:ext': AExtents,
    };
    Transform._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    NonVisualGraphicFrameProperties._C = {
        'p:cNvPr': NonVisualDrawingProperties,
        'p:cNvGraphicFramePr': NonVisualGraphicFrameDrawingProperties,
        'p:nvPr': ApplicationNonVisualDrawingProperties,
    };
    NonVisualGraphicFrameDrawingProperties._C = {
        'a:graphicFrameLocks': AGraphicFrameLocks,
        'a:extLst': AExtensionList,
    };
    BlipFill._C = {
        'a:blip': ABlip,
        'a:srcRect': ASourceRectangle,
        'a:tile': ATile,
        'a:stretch': AStretch,
    };
    BlipFill._D = {
        ':dpi': new OxmlAttr(':dpi', OxmlType.UInt32Value),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    NonVisualPictureProperties._C = {
        'p:cNvPr': NonVisualDrawingProperties,
        'p:cNvPicPr': NonVisualPictureDrawingProperties,
        'p:nvPr': ApplicationNonVisualDrawingProperties,
    };
    NonVisualPictureDrawingProperties._C = {
        'a:picLocks': APictureLocks,
        'a:extLst': ANonVisualPicturePropertiesExtensionList,
    };
    NonVisualPictureDrawingProperties._D = {
        ':preferRelativeResize': new OxmlAttr(':preferRelativeResize', OxmlType.BooleanValue),
    };
    NonVisualConnectionShapeProperties._C = {
        'p:cNvPr': NonVisualDrawingProperties,
        'p:cNvCxnSpPr': NonVisualConnectorShapeDrawingProperties,
        'p:nvPr': ApplicationNonVisualDrawingProperties,
    };
    NonVisualConnectorShapeDrawingProperties._C = {
        'a:cxnSpLocks': AConnectionShapeLocks,
        'a:stCxn': AStartConnection,
        'a:endCxn': AEndConnection,
        'a:extLst': AExtensionList,
    };
    TextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
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
    NonVisualShapeProperties._C = {
        'p:cNvPr': NonVisualDrawingProperties,
        'p:cNvSpPr': NonVisualShapeDrawingProperties,
        'p:nvPr': ApplicationNonVisualDrawingProperties,
    };
    ApplicationNonVisualDrawingProperties._C = {
        'p:ph': PlaceholderShape,
        'a:audioCd': AAudioFromCD,
        'a:wavAudioFile': AWaveAudioFile,
        'a:audioFile': AAudioFromFile,
        'a:videoFile': AVideoFromFile,
        'a:quickTimeFile': AQuickTimeFromFile,
        'p:custDataLst': CustomerDataList,
        'p:extLst': ApplicationNonVisualDrawingPropertiesExtensionList,
    };
    ApplicationNonVisualDrawingProperties._D = {
        ':isPhoto': new OxmlAttr(':isPhoto', OxmlType.BooleanValue),
        ':userDrawn': new OxmlAttr(':userDrawn', OxmlType.BooleanValue),
    };
    NonVisualShapeDrawingProperties._C = {
        'a:spLocks': AShapeLocks,
        'a:extLst': AExtensionList,
    };
    NonVisualShapeDrawingProperties._D = {
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
    CustomShow._C = {
        'p:sldLst': SlideList,
        'p:extLst': ExtensionList,
    };
    CustomShow._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
    };
    SlideList._C = {
        'p:sld': SlideListEntry,
    };
    EmbeddedFont._C = {
        'p:font': Font,
        'p:regular': RegularFont,
        'p:bold': BoldFont,
        'p:italic': ItalicFont,
        'p:boldItalic': BoldItalicFont,
    };
    EmbeddedFontDataIdType._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Font._D = {
        ':typeface': new OxmlAttr(':typeface', OxmlType.StringValue),
        ':panose': new OxmlAttr(':panose', OxmlType.HexBinaryValue),
        ':pitchFamily': new OxmlAttr(':pitchFamily', OxmlType.SByteValue),
        ':charset': new OxmlAttr(':charset', OxmlType.SByteValue),
    };
    HandoutMasterId._C = {
        'p:extLst': ExtensionList,
    };
    HandoutMasterId._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    NotesMasterId._C = {
        'p:extLst': ExtensionList,
    };
    NotesMasterId._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SlideMasterId._C = {
        'p:extLst': ExtensionList,
    };
    SlideMasterId._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SlideId._C = {
        'p:extLst': ExtensionList,
    };
    SlideId._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Control._C = {
        'p:extLst': ExtensionList,
        'p:pic': Picture,
    };
    Control._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':showAsIcon': new OxmlAttr(':showAsIcon', OxmlType.BooleanValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':imgW': new OxmlAttr(':imgW', OxmlType.Int32Value),
        ':imgH': new OxmlAttr(':imgH', OxmlType.Int32Value),
    };
    ExtensionList._C = {
        'p:ext': Extension,
    };
    Comment._C = {
        'p:pos': Position,
        'p:text': Text,
        'p:extLst': CommentExtensionList,
    };
    Comment._D = {
        ':authorId': new OxmlAttr(':authorId', OxmlType.UInt32Value),
        ':dt': new OxmlAttr(':dt', OxmlType.DateTimeValue),
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    CommentAuthor._C = {
        'p:extLst': CommentAuthorExtensionList,
    };
    CommentAuthor._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':initials': new OxmlAttr(':initials', OxmlType.StringValue),
        ':lastIdx': new OxmlAttr(':lastIdx', OxmlType.UInt32Value),
        ':clrIdx': new OxmlAttr(':clrIdx', OxmlType.UInt32Value),
    };
    CustomerDataTags._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    CustomerData._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SlideListEntry._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    Color3Type._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ToColor._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    FromColor._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ByColor._C = {
        'p:rgb': RgbColor,
        'p:hsl': HslColor,
    };
    ExtensionListWithModification._C = {
        'p:ext': Extension,
    };
    ExtensionListWithModification._D = {
        ':mod': new OxmlAttr(':mod', OxmlType.BooleanValue),
    };
    BuildList._C = {
        'p:bldP': BuildParagraph,
        'p:bldDgm': BuildDiagram,
        'p:bldOleChart': BuildOleChart,
        'p:bldGraphic': BuildGraphics,
    };
    BuildGraphics._C = {
        'p:bldAsOne': BuildAsOne,
        'p:bldSub': BuildSubElement,
    };
    BuildGraphics._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
        ':grpId': new OxmlAttr(':grpId', OxmlType.UInt32Value),
        ':uiExpand': new OxmlAttr(':uiExpand', OxmlType.BooleanValue),
    };
    BuildOleChart._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
        ':grpId': new OxmlAttr(':grpId', OxmlType.UInt32Value),
        ':uiExpand': new OxmlAttr(':uiExpand', OxmlType.BooleanValue),
        ':bld': new OxmlAttr(':bld', OxmlType.EnumValue, OleChartBuildValuesArray),
        ':animBg': new OxmlAttr(':animBg', OxmlType.BooleanValue),
    };
    BuildDiagram._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
        ':grpId': new OxmlAttr(':grpId', OxmlType.UInt32Value),
        ':uiExpand': new OxmlAttr(':uiExpand', OxmlType.BooleanValue),
        ':bld': new OxmlAttr(':bld', OxmlType.EnumValue, DiagramBuildValuesArray),
    };
    BuildParagraph._C = {
        'p:tmplLst': TemplateList,
    };
    BuildParagraph._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
        ':grpId': new OxmlAttr(':grpId', OxmlType.UInt32Value),
        ':uiExpand': new OxmlAttr(':uiExpand', OxmlType.BooleanValue),
        ':build': new OxmlAttr(':build', OxmlType.EnumValue, ParagraphBuildValuesArray),
        ':bldLvl': new OxmlAttr(':bldLvl', OxmlType.UInt32Value),
        ':animBg': new OxmlAttr(':animBg', OxmlType.BooleanValue),
        ':autoUpdateAnimBg': new OxmlAttr(':autoUpdateAnimBg', OxmlType.BooleanValue),
        ':rev': new OxmlAttr(':rev', OxmlType.BooleanValue),
        ':advAuto': new OxmlAttr(':advAuto', OxmlType.StringValue),
    };
    BuildSubElement._C = {
        'a:bldDgm': ABuildDiagram,
        'a:bldChart': ABuildChart,
    };
    TemplateList._C = {
        'p:tmpl': Template,
    };
    Template._C = {
        'p:tnLst': TimeNodeList,
    };
    Template._D = {
        ':lvl': new OxmlAttr(':lvl', OxmlType.UInt32Value),
    };
    TimeNodeList._C = {
        'p:par': ParallelTimeNode,
    };
    CommonMediaNode._C = {
        'p:cTn': CommonTimeNode,
        'p:tgtEl': TargetElement,
    };
    CommonMediaNode._D = {
        ':vol': new OxmlAttr(':vol', OxmlType.Int32Value),
        ':mute': new OxmlAttr(':mute', OxmlType.BooleanValue),
        ':numSld': new OxmlAttr(':numSld', OxmlType.UInt32Value),
        ':showWhenStopped': new OxmlAttr(':showWhenStopped', OxmlType.BooleanValue),
    };
    TimeListAnimationVariantType._C = {
        'p:boolVal': BooleanVariantValue,
        'p:intVal': IntegerVariantValue,
        'p:fltVal': FloatVariantValue,
        'p:strVal': StringVariantValue,
        'p:clrVal': ColorValue,
    };
    VariantValue._C = {
        'p:boolVal': BooleanVariantValue,
        'p:intVal': IntegerVariantValue,
        'p:fltVal': FloatVariantValue,
        'p:strVal': StringVariantValue,
        'p:clrVal': ColorValue,
    };
    ToVariantValue._C = {
        'p:boolVal': BooleanVariantValue,
        'p:intVal': IntegerVariantValue,
        'p:fltVal': FloatVariantValue,
        'p:strVal': StringVariantValue,
        'p:clrVal': ColorValue,
    };
    Progress._C = {
        'p:fltVal': FloatVariantValue,
    };
    CommonBehavior._C = {
        'p:cTn': CommonTimeNode,
        'p:tgtEl': TargetElement,
        'p:attrNameLst': AttributeNameList,
    };
    CommonBehavior._D = {
        ':additive': new OxmlAttr(':additive', OxmlType.EnumValue, BehaviorAdditiveValuesArray),
        ':accumulate': new OxmlAttr(':accumulate', OxmlType.EnumValue, BehaviorAccumulateValuesArray),
        ':xfrmType': new OxmlAttr(':xfrmType', OxmlType.EnumValue, BehaviorTransformValuesArray),
        ':from': new OxmlAttr(':from', OxmlType.StringValue),
        ':to': new OxmlAttr(':to', OxmlType.StringValue),
        ':by': new OxmlAttr(':by', OxmlType.StringValue),
        ':rctx': new OxmlAttr(':rctx', OxmlType.StringValue),
        ':override': new OxmlAttr(':override', OxmlType.EnumValue, BehaviorOverrideValuesArray),
    };
    HslColor._D = {
        ':h': new OxmlAttr(':h', OxmlType.Int32Value),
        ':s': new OxmlAttr(':s', OxmlType.Int32Value),
        ':l': new OxmlAttr(':l', OxmlType.Int32Value),
    };
    RgbColor._D = {
        ':r': new OxmlAttr(':r', OxmlType.Int32Value),
        ':g': new OxmlAttr(':g', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.Int32Value),
    };
    TimeAnimateValue._C = {
        'p:val': VariantValue,
    };
    TimeAnimateValue._D = {
        ':tm': new OxmlAttr(':tm', OxmlType.StringValue),
        ':fmla': new OxmlAttr(':fmla', OxmlType.StringValue),
    };
    ColorType._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    PenColor._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ColorValue._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    StringVariantValue._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    FloatVariantValue._D = {
        ':val': new OxmlAttr(':val', OxmlType.SingleValue),
    };
    IntegerVariantValue._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    BooleanVariantValue._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    AttributeNameList._C = {
        'p:attrName': AttributeName,
    };
    TimeListTimeConditionalListType._C = {
        'p:cond': Condition,
    };
    EndConditionList._C = {
        'p:cond': Condition,
    };
    StartConditionList._C = {
        'p:cond': Condition,
    };
    NextConditionList._C = {
        'p:cond': Condition,
    };
    PreviousConditionList._C = {
        'p:cond': Condition,
    };
    CommonTimeNode._C = {
        'p:stCondLst': StartConditionList,
        'p:endCondLst': EndConditionList,
        'p:endSync': EndSync,
        'p:iterate': Iterate,
        'p:childTnLst': ChildTimeNodeList,
        'p:subTnLst': SubTimeNodeList,
    };
    CommonTimeNode._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':presetID': new OxmlAttr(':presetID', OxmlType.Int32Value),
        ':presetClass': new OxmlAttr(':presetClass', OxmlType.EnumValue, TimeNodePresetClassValuesArray),
        ':presetSubtype': new OxmlAttr(':presetSubtype', OxmlType.Int32Value),
        ':dur': new OxmlAttr(':dur', OxmlType.StringValue),
        ':repeatCount': new OxmlAttr(':repeatCount', OxmlType.StringValue),
        ':repeatDur': new OxmlAttr(':repeatDur', OxmlType.StringValue),
        ':spd': new OxmlAttr(':spd', OxmlType.Int32Value),
        ':accel': new OxmlAttr(':accel', OxmlType.Int32Value),
        ':decel': new OxmlAttr(':decel', OxmlType.Int32Value),
        ':autoRev': new OxmlAttr(':autoRev', OxmlType.BooleanValue),
        ':restart': new OxmlAttr(':restart', OxmlType.EnumValue, TimeNodeRestartValuesArray),
        ':fill': new OxmlAttr(':fill', OxmlType.EnumValue, TimeNodeFillValuesArray),
        ':syncBehavior': new OxmlAttr(':syncBehavior', OxmlType.EnumValue, TimeNodeSyncValuesArray),
        ':tmFilter': new OxmlAttr(':tmFilter', OxmlType.StringValue),
        ':evtFilter': new OxmlAttr(':evtFilter', OxmlType.StringValue),
        ':display': new OxmlAttr(':display', OxmlType.BooleanValue),
        ':masterRel': new OxmlAttr(':masterRel', OxmlType.EnumValue, TimeNodeMasterRelationValuesArray),
        ':bldLvl': new OxmlAttr(':bldLvl', OxmlType.Int32Value),
        ':grpId': new OxmlAttr(':grpId', OxmlType.UInt32Value),
        ':afterEffect': new OxmlAttr(':afterEffect', OxmlType.BooleanValue),
        ':nodeType': new OxmlAttr(':nodeType', OxmlType.EnumValue, TimeNodeValuesArray),
        ':nodePh': new OxmlAttr(':nodePh', OxmlType.BooleanValue),
        'p14:presetBounceEnd': new OxmlAttr('p14:presetBounceEnd', OxmlType.Int32Value),
    };
    Video._C = {
        'p:cMediaNode': CommonMediaNode,
    };
    Video._D = {
        ':fullScrn': new OxmlAttr(':fullScrn', OxmlType.BooleanValue),
    };
    Audio._C = {
        'p:cMediaNode': CommonMediaNode,
    };
    Audio._D = {
        ':isNarration': new OxmlAttr(':isNarration', OxmlType.BooleanValue),
    };
    SetBehavior._C = {
        'p:cBhvr': CommonBehavior,
        'p:to': ToVariantValue,
    };
    Command._C = {
        'p:cBhvr': CommonBehavior,
    };
    Command._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, CommandValuesArray),
        ':cmd': new OxmlAttr(':cmd', OxmlType.StringValue),
    };
    AnimateScale._C = {
        'p:cBhvr': CommonBehavior,
        'p:by': ByPosition,
        'p:from': FromPosition,
        'p:to': ToPosition,
    };
    AnimateScale._D = {
        ':zoomContents': new OxmlAttr(':zoomContents', OxmlType.BooleanValue),
        'p14:bounceEnd': new OxmlAttr('p14:bounceEnd', OxmlType.Int32Value),
    };
    AnimateRotation._C = {
        'p:cBhvr': CommonBehavior,
    };
    AnimateRotation._D = {
        ':by': new OxmlAttr(':by', OxmlType.Int32Value),
        ':from': new OxmlAttr(':from', OxmlType.Int32Value),
        ':to': new OxmlAttr(':to', OxmlType.Int32Value),
        'p14:bounceEnd': new OxmlAttr('p14:bounceEnd', OxmlType.Int32Value),
    };
    AnimateMotion._C = {
        'p:cBhvr': CommonBehavior,
        'p:by': ByPosition,
        'p:from': FromPosition,
        'p:to': ToPosition,
        'p:rCtr': RotationCenter,
    };
    AnimateMotion._D = {
        ':origin': new OxmlAttr(':origin', OxmlType.EnumValue, AnimateMotionBehaviorOriginValuesArray),
        ':path': new OxmlAttr(':path', OxmlType.StringValue),
        ':pathEditMode': new OxmlAttr(':pathEditMode', OxmlType.EnumValue, AnimateMotionPathEditModeValuesArray),
        ':rAng': new OxmlAttr(':rAng', OxmlType.Int32Value),
        ':ptsTypes': new OxmlAttr(':ptsTypes', OxmlType.StringValue),
        'p14:bounceEnd': new OxmlAttr('p14:bounceEnd', OxmlType.Int32Value),
    };
    AnimateEffect._C = {
        'p:cBhvr': CommonBehavior,
        'p:progress': Progress,
    };
    AnimateEffect._D = {
        ':transition': new OxmlAttr(':transition', OxmlType.EnumValue, AnimateEffectTransitionValuesArray),
        ':filter': new OxmlAttr(':filter', OxmlType.StringValue),
        ':prLst': new OxmlAttr(':prLst', OxmlType.StringValue),
    };
    AnimateColor._C = {
        'p:cBhvr': CommonBehavior,
        'p:by': ByColor,
        'p:from': FromColor,
        'p:to': ToColor,
    };
    AnimateColor._D = {
        ':clrSpc': new OxmlAttr(':clrSpc', OxmlType.EnumValue, AnimateColorSpaceValuesArray),
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, AnimateColorDirectionValuesArray),
    };
    Animate._C = {
        'p:cBhvr': CommonBehavior,
        'p:tavLst': TimeAnimateValueList,
    };
    Animate._D = {
        ':by': new OxmlAttr(':by', OxmlType.StringValue),
        ':from': new OxmlAttr(':from', OxmlType.StringValue),
        ':to': new OxmlAttr(':to', OxmlType.StringValue),
        ':calcmode': new OxmlAttr(':calcmode', OxmlType.EnumValue, AnimateBehaviorCalculateModeValuesArray),
        ':valueType': new OxmlAttr(':valueType', OxmlType.EnumValue, AnimateBehaviorValuesArray),
        'p14:bounceEnd': new OxmlAttr('p14:bounceEnd', OxmlType.Int32Value),
    };
    ExclusiveTimeNode._C = {
        'p:cTn': CommonTimeNode,
    };
    SequenceTimeNode._C = {
        'p:cTn': CommonTimeNode,
        'p:prevCondLst': PreviousConditionList,
        'p:nextCondLst': NextConditionList,
    };
    SequenceTimeNode._D = {
        ':concurrent': new OxmlAttr(':concurrent', OxmlType.BooleanValue),
        ':prevAc': new OxmlAttr(':prevAc', OxmlType.EnumValue, PreviousActionValuesArray),
        ':nextAc': new OxmlAttr(':nextAc', OxmlType.EnumValue, NextActionValuesArray),
    };
    ParallelTimeNode._C = {
        'p:cTn': CommonTimeNode,
    };
    TimeListConditionalType._C = {
        'p:tgtEl': TargetElement,
        'p:tn': TimeNode,
        'p:rtn': RuntimeNodeTrigger,
    };
    TimeListConditionalType._D = {
        ':evt': new OxmlAttr(':evt', OxmlType.EnumValue, TriggerEventValuesArray),
        ':delay': new OxmlAttr(':delay', OxmlType.StringValue),
    };
    EndSync._C = {
        'p:tgtEl': TargetElement,
        'p:tn': TimeNode,
        'p:rtn': RuntimeNodeTrigger,
    };
    Condition._C = {
        'p:tgtEl': TargetElement,
        'p:tn': TimeNode,
        'p:rtn': RuntimeNodeTrigger,
    };
    RuntimeNodeTrigger._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, TriggerRuntimeNodeValuesArray),
    };
    TimeNode._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    TargetElement._C = {
        'p:sldTgt': SlideTarget,
        'p:sndTgt': SoundTarget,
        'p:spTgt': ShapeTarget,
        'p:inkTgt': InkTarget,
        'p14:bmkTgt': P14BookmarkTarget,
    };
    TimePercentage._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    TimeAbsolute._D = {
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    StartSoundAction._C = {
        'p:snd': Sound,
    };
    StartSoundAction._D = {
        ':loop': new OxmlAttr(':loop', OxmlType.BooleanValue),
    };
    EmbeddedWavAudioFileType._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':builtIn': new OxmlAttr(':builtIn', OxmlType.BooleanValue),
    };
    ContentPart._C = {
        'p14:nvContentPartPr': P14NonVisualContentPartProperties,
        'p14:xfrm': P14Transform2D,
        'p14:extLst': P14ExtensionListModify,
    };
    ContentPart._D = {
        'p14:bwMode': new OxmlAttr('p14:bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ViewProperties._C = {
        'p:normalViewPr': NormalViewProperties,
        'p:slideViewPr': SlideViewProperties,
        'p:outlineViewPr': OutlineViewProperties,
        'p:notesTextViewPr': NotesTextViewProperties,
        'p:sorterViewPr': SorterViewProperties,
        'p:notesViewPr': NotesViewProperties,
        'p:gridSpacing': GridSpacing,
        'p:extLst': ExtensionList,
    };
    ViewProperties._D = {
        ':lastView': new OxmlAttr(':lastView', OxmlType.EnumValue, ViewValuesArray),
        ':showComments': new OxmlAttr(':showComments', OxmlType.BooleanValue),
    };
    TagList._C = {
        'p:tag': Tag,
    };
    SlideSyncProperties._C = {
        'p:extLst': ExtensionList,
    };
    SlideSyncProperties._D = {
        ':serverSldId': new OxmlAttr(':serverSldId', OxmlType.StringValue),
        ':serverSldModifiedTime': new OxmlAttr(':serverSldModifiedTime', OxmlType.DateTimeValue),
        ':clientInsertedTime': new OxmlAttr(':clientInsertedTime', OxmlType.DateTimeValue),
    };
    NotesSlide._C = {
        'p:cSld': CommonSlideData,
        'p:clrMapOvr': ColorMapOverride,
        'p:extLst': ExtensionListWithModification,
    };
    NotesSlide._D = {
        ':showMasterSp': new OxmlAttr(':showMasterSp', OxmlType.BooleanValue),
        ':showMasterPhAnim': new OxmlAttr(':showMasterPhAnim', OxmlType.BooleanValue),
    };
    NotesMaster._C = {
        'p:cSld': CommonSlideData,
        'p:clrMap': ColorMap,
        'p:hf': HeaderFooter,
        'p:notesStyle': NotesStyle,
        'p:extLst': NotesMasterExtensionList,
    };
    HandoutMaster._C = {
        'p:cSld': CommonSlideData,
        'p:clrMap': ColorMap,
        'p:hf': HeaderFooter,
        'p:extLst': HandoutMasterExtensionList,
    };
    SlideMaster._C = {
        'p:cSld': CommonSlideData,
        'p:clrMap': ColorMap,
        'p:sldLayoutIdLst': SlideLayoutIdList,
        'p:transition': Transition,
        'p:timing': Timing,
        'p:hf': HeaderFooter,
        'p:txStyles': TextStyles,
        'p:extLst': SlideMasterExtensionList,
    };
    SlideMaster._D = {
        ':preserve': new OxmlAttr(':preserve', OxmlType.BooleanValue),
    };
    SlideLayout._C = {
        'p:cSld': CommonSlideData,
        'p:clrMapOvr': ColorMapOverride,
        'p:transition': Transition,
        'p:timing': Timing,
        'p:hf': HeaderFooter,
        'p:extLst': SlideLayoutExtensionList,
    };
    SlideLayout._D = {
        ':showMasterSp': new OxmlAttr(':showMasterSp', OxmlType.BooleanValue),
        ':showMasterPhAnim': new OxmlAttr(':showMasterPhAnim', OxmlType.BooleanValue),
        ':matchingName': new OxmlAttr(':matchingName', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, SlideLayoutValuesArray),
        ':preserve': new OxmlAttr(':preserve', OxmlType.BooleanValue),
        ':userDrawn': new OxmlAttr(':userDrawn', OxmlType.BooleanValue),
    };
    Slide._C = {
        'p:cSld': CommonSlideData,
        'p:clrMapOvr': ColorMapOverride,
        'p:transition': Transition,
        'p:timing': Timing,
        'p:extLst': SlideExtensionList,
    };
    Slide._D = {
        ':showMasterSp': new OxmlAttr(':showMasterSp', OxmlType.BooleanValue),
        ':showMasterPhAnim': new OxmlAttr(':showMasterPhAnim', OxmlType.BooleanValue),
        ':show': new OxmlAttr(':show', OxmlType.BooleanValue),
    };
    PresentationProperties._C = {
        'p:htmlPubPr': HtmlPublishProperties,
        'p:webPr': WebProperties,
        'p:prnPr': PrintingProperties,
        'p:showPr': ShowProperties,
        'p:clrMru': ColorMostRecentlyUsed,
        'p:extLst': PresentationPropertiesExtensionList,
    };
    Presentation._C = {
        'p:sldMasterIdLst': SlideMasterIdList,
        'p:notesMasterIdLst': NotesMasterIdList,
        'p:handoutMasterIdLst': HandoutMasterIdList,
        'p:sldIdLst': SlideIdList,
        'p:sldSz': SlideSize,
        'p:notesSz': NotesSize,
        'p:embeddedFontLst': EmbeddedFontList,
        'p:custShowLst': CustomShowList,
        'p:photoAlbum': PhotoAlbum,
        'p:custDataLst': CustomerDataList,
        'p:kinsoku': Kinsoku,
        'p:defaultTextStyle': DefaultTextStyle,
        'p:modifyVerifier': ModificationVerifier,
        'p:extLst': PresentationExtensionList,
    };
    Presentation._D = {
        ':serverZoom': new OxmlAttr(':serverZoom', OxmlType.Int32Value),
        ':firstSlideNum': new OxmlAttr(':firstSlideNum', OxmlType.Int32Value),
        ':showSpecialPlsOnTitleSld': new OxmlAttr(':showSpecialPlsOnTitleSld', OxmlType.BooleanValue),
        ':rtl': new OxmlAttr(':rtl', OxmlType.BooleanValue),
        ':removePersonalInfoOnSave': new OxmlAttr(':removePersonalInfoOnSave', OxmlType.BooleanValue),
        ':compatMode': new OxmlAttr(':compatMode', OxmlType.BooleanValue),
        ':strictFirstAndLastChars': new OxmlAttr(':strictFirstAndLastChars', OxmlType.BooleanValue),
        ':embedTrueTypeFonts': new OxmlAttr(':embedTrueTypeFonts', OxmlType.BooleanValue),
        ':saveSubsetFonts': new OxmlAttr(':saveSubsetFonts', OxmlType.BooleanValue),
        ':autoCompressPictures': new OxmlAttr(':autoCompressPictures', OxmlType.BooleanValue),
        ':bookmarkIdSeed': new OxmlAttr(':bookmarkIdSeed', OxmlType.UInt32Value),
        ':conformance': new OxmlAttr(':conformance', OxmlType.EnumValue, ConformanceClassValuesArray),
    };
    OleObject._C = {
        'p:embed': OleObjectEmbed,
        'p:link': OleObjectLink,
        'p:pic': Picture,
    };
    OleObject._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':showAsIcon': new OxmlAttr(':showAsIcon', OxmlType.BooleanValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':imgW': new OxmlAttr(':imgW', OxmlType.Int32Value),
        ':imgH': new OxmlAttr(':imgH', OxmlType.Int32Value),
        ':progId': new OxmlAttr(':progId', OxmlType.StringValue),
    };
    CommentList._C = {
        'p:cm': Comment,
    };
    CommentAuthorList._C = {
        'p:cmAuthor': CommentAuthor,
    };
    BackgroundStyleReference._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    BackgroundStyleReference._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    BackgroundProperties._C = {
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
        'p:extLst': ExtensionList,
    };
    BackgroundProperties._D = {
        ':shadeToTitle': new OxmlAttr(':shadeToTitle', OxmlType.BooleanValue),
    };
    ColorMapOverride._C = {
        'a:masterClrMapping': AMasterColorMapping,
        'a:overrideClrMapping': AOverrideColorMapping,
    };
    ColorMap._C = {
        'a:extLst': AExtensionList,
    };
    ColorMap._D = {
        ':bg1': new OxmlAttr(':bg1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':tx1': new OxmlAttr(':tx1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':bg2': new OxmlAttr(':bg2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':tx2': new OxmlAttr(':tx2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent1': new OxmlAttr(':accent1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent2': new OxmlAttr(':accent2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent3': new OxmlAttr(':accent3', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent4': new OxmlAttr(':accent4', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent5': new OxmlAttr(':accent5', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':accent6': new OxmlAttr(':accent6', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':hlink': new OxmlAttr(':hlink', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        ':folHlink': new OxmlAttr(':folHlink', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    };
    KioskSlideMode._D = {
        ':restart': new OxmlAttr(':restart', OxmlType.UInt32Value),
    };
    BrowseSlideMode._D = {
        ':showScrollbar': new OxmlAttr(':showScrollbar', OxmlType.BooleanValue),
    };
    Extension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    CustomShowReference._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
    };
    IndexRangeType._D = {
        ':st': new OxmlAttr(':st', OxmlType.UInt32Value),
        ':end': new OxmlAttr(':end', OxmlType.UInt32Value),
    };
    return {
        prefix: 'p',
        xmlns: 'http://schemas.openxmlformats.org/presentationml/2006/main',
    };
}
