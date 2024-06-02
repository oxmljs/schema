import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { Int64Value } from '../../../framework/types/Int64Value';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { ListValue } from '../../../framework/types/ListValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';
import { PresetMaterialTypeValues, PresetMaterialTypeValuesArray } from '../../Drawing';import { NumberDiagramInfoList as Dgm1611NumberDiagramInfoList } from '../../Office2019/Drawing/Diagram11';
import { TextListStyleType as Dgm1612TextListStyleType } from '../../Office2019/Drawing/Diagram12';
import { PtExtension as APtExtension } from '../../Drawing';
import { BodyProperties as ABodyProperties } from '../../Drawing';
import { ListStyle as AListStyle } from '../../Drawing';
import { Paragraph as AParagraph } from '../../Drawing';
import { Transform2D as ATransform2D } from '../../Drawing';
import { CustomGeometry as ACustomGeometry } from '../../Drawing';
import { PresetGeometry as APresetGeometry } from '../../Drawing';
import { NoFill as ANoFill } from '../../Drawing';
import { SolidFill as ASolidFill } from '../../Drawing';
import { GradientFill as AGradientFill } from '../../Drawing';
import { BlipFill as ABlipFill } from '../../Drawing';
import { PatternFill as APatternFill } from '../../Drawing';
import { GroupFill as AGroupFill } from '../../Drawing';
import { Outline as AOutline } from '../../Drawing';
import { EffectList as AEffectList } from '../../Drawing';
import { EffectDag as AEffectDag } from '../../Drawing';
import { Scene3DType as AScene3DType } from '../../Drawing';
import { Shape3DType as AShape3DType } from '../../Drawing';
import { ShapePropertiesExtensionList as AShapePropertiesExtensionList } from '../../Drawing';
import { DataModelExtension as ADataModelExtension } from '../../Drawing';
import { FlatText as AFlatText } from '../../Drawing';
import { BevelTop as ABevelTop } from '../../Drawing';
import { BevelBottom as ABevelBottom } from '../../Drawing';
import { ExtrusionColor as AExtrusionColor } from '../../Drawing';
import { ContourColor as AContourColor } from '../../Drawing';
import { ExtensionList as AExtensionList } from '../../Drawing';
import { Camera as ACamera } from '../../Drawing';
import { LightRig as ALightRig } from '../../Drawing';
import { Backdrop as ABackdrop } from '../../Drawing';
import { LineReference as ALineReference } from '../../Drawing';
import { FillReference as AFillReference } from '../../Drawing';
import { EffectReference as AEffectReference } from '../../Drawing';
import { FontReference as AFontReference } from '../../Drawing';
import { Extension as AExtension } from '../../Drawing';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../Drawing';
import { HslColor as AHslColor } from '../../Drawing';
import { SystemColor as ASystemColor } from '../../Drawing';
import { SchemeColor as ASchemeColor } from '../../Drawing';
import { PresetColor as APresetColor } from '../../Drawing';


export enum ColorApplicationMethodValues {
    /** Span. Serialized value: `span` */
    Span = 'span',
    /** Cycle. Serialized value: `cycle` */
    Cycle = 'cycle',
    /** Repeat. Serialized value: `repeat` */
    Repeat = 'repeat',
}

export const ColorApplicationMethodValuesArray = [
    ColorApplicationMethodValues.Span,
    ColorApplicationMethodValues.Cycle,
    ColorApplicationMethodValues.Repeat,
] as const;

export enum HueDirectionValues {
    /** Clockwise Hue Direction. Serialized value: `cw` */
    Clockwise = 'cw',
    /** Counterclockwise Hue Direction. Serialized value: `ccw` */
    Counterclockwise = 'ccw',
}

export const HueDirectionValuesArray = [
    HueDirectionValues.Clockwise,
    HueDirectionValues.Counterclockwise,
] as const;

export enum PointValues {
    /** Node. Serialized value: `node` */
    Node = 'node',
    /** Assistant Element. Serialized value: `asst` */
    Assistant = 'asst',
    /** Document. Serialized value: `doc` */
    Document = 'doc',
    /** Presentation. Serialized value: `pres` */
    Presentation = 'pres',
    /** Parent Transition. Serialized value: `parTrans` */
    ParentTransition = 'parTrans',
    /** Sibling Transition. Serialized value: `sibTrans` */
    SiblingTransition = 'sibTrans',
}

export const PointValuesArray = [
    PointValues.Node,
    PointValues.Assistant,
    PointValues.Document,
    PointValues.Presentation,
    PointValues.ParentTransition,
    PointValues.SiblingTransition,
] as const;

export enum ConnectionValues {
    /** Parent Of. Serialized value: `parOf` */
    ParentOf = 'parOf',
    /** Presentation Of. Serialized value: `presOf` */
    PresentationOf = 'presOf',
    /** Presentation Parent Of. Serialized value: `presParOf` */
    PresentationParentOf = 'presParOf',
    /** Unknown Relationship. Serialized value: `unknownRelationship` */
    UnknownRelationship = 'unknownRelationship',
}

export const ConnectionValuesArray = [
    ConnectionValues.ParentOf,
    ConnectionValues.PresentationOf,
    ConnectionValues.PresentationParentOf,
    ConnectionValues.UnknownRelationship,
] as const;

export enum DirectionValues {
    /** Normal Direction. Serialized value: `norm` */
    Normal = 'norm',
    /** Reversed Direction. Serialized value: `rev` */
    Reversed = 'rev',
}

export const DirectionValuesArray = [
    DirectionValues.Normal,
    DirectionValues.Reversed,
] as const;

export enum HierarchyBranchStyleValues {
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** Hanging. Serialized value: `hang` */
    Hanging = 'hang',
    /** Standard. Serialized value: `std` */
    Standard = 'std',
    /** Initial. Serialized value: `init` */
    Initial = 'init',
}

export const HierarchyBranchStyleValuesArray = [
    HierarchyBranchStyleValues.Left,
    HierarchyBranchStyleValues.Right,
    HierarchyBranchStyleValues.Hanging,
    HierarchyBranchStyleValues.Standard,
    HierarchyBranchStyleValues.Initial,
] as const;

export enum AnimateOneByOneValues {
    /** Disable One-by-One. Serialized value: `none` */
    None = 'none',
    /** One By One. Serialized value: `one` */
    One = 'one',
    /** By Branch One By One. Serialized value: `branch` */
    Branch = 'branch',
}

export const AnimateOneByOneValuesArray = [
    AnimateOneByOneValues.None,
    AnimateOneByOneValues.One,
    AnimateOneByOneValues.Branch,
] as const;

export enum AnimationLevelStringValues {
    /** Disable Level At Once. Serialized value: `none` */
    None = 'none',
    /** By Level Animation. Serialized value: `lvl` */
    Level = 'lvl',
    /** From Center Animation. Serialized value: `ctr` */
    Center = 'ctr',
}

export const AnimationLevelStringValuesArray = [
    AnimationLevelStringValues.None,
    AnimationLevelStringValues.Level,
    AnimationLevelStringValues.Center,
] as const;

export enum ResizeHandlesStringValues {
    /** Exact. Serialized value: `exact` */
    Exact = 'exact',
    /** Relative. Serialized value: `rel` */
    Relative = 'rel',
}

export const ResizeHandlesStringValuesArray = [
    ResizeHandlesStringValues.Exact,
    ResizeHandlesStringValues.Relative,
] as const;

export enum AlgorithmValues {
    /** Composite. Serialized value: `composite` */
    Composite = 'composite',
    /** Connector Algorithm. Serialized value: `conn` */
    Connector = 'conn',
    /** Cycle Algorithm. Serialized value: `cycle` */
    Cycle = 'cycle',
    /** Hierarchy Child Algorithm. Serialized value: `hierChild` */
    HierarchyChild = 'hierChild',
    /** Hierarchy Root Algorithm. Serialized value: `hierRoot` */
    HierarchyRoot = 'hierRoot',
    /** Pyramid Algorithm. Serialized value: `pyra` */
    Pyramid = 'pyra',
    /** Linear Algorithm. Serialized value: `lin` */
    Linear = 'lin',
    /** Space Algorithm. Serialized value: `sp` */
    Space = 'sp',
    /** Text Algorithm. Serialized value: `tx` */
    Text = 'tx',
    /** Snake Algorithm. Serialized value: `snake` */
    Snake = 'snake',
}

export const AlgorithmValuesArray = [
    AlgorithmValues.Composite,
    AlgorithmValues.Connector,
    AlgorithmValues.Cycle,
    AlgorithmValues.HierarchyChild,
    AlgorithmValues.HierarchyRoot,
    AlgorithmValues.Pyramid,
    AlgorithmValues.Linear,
    AlgorithmValues.Space,
    AlgorithmValues.Text,
    AlgorithmValues.Snake,
] as const;

export enum AxisValues {
    /** Self. Serialized value: `self` */
    Self = 'self',
    /** Child. Serialized value: `ch` */
    Child = 'ch',
    /** Descendant. Serialized value: `des` */
    Descendant = 'des',
    /** Descendant or Self. Serialized value: `desOrSelf` */
    DescendantOrSelf = 'desOrSelf',
    /** Parent. Serialized value: `par` */
    Parent = 'par',
    /** Ancestor. Serialized value: `ancst` */
    Ancestor = 'ancst',
    /** Ancestor or Self. Serialized value: `ancstOrSelf` */
    AncestorOrSelf = 'ancstOrSelf',
    /** Follow Sibling. Serialized value: `followSib` */
    FollowSibling = 'followSib',
    /** Preceding Sibling. Serialized value: `precedSib` */
    PrecedingSibling = 'precedSib',
    /** Follow. Serialized value: `follow` */
    Follow = 'follow',
    /** Preceding. Serialized value: `preced` */
    Preceding = 'preced',
    /** Root. Serialized value: `root` */
    Root = 'root',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const AxisValuesArray = [
    AxisValues.Self,
    AxisValues.Child,
    AxisValues.Descendant,
    AxisValues.DescendantOrSelf,
    AxisValues.Parent,
    AxisValues.Ancestor,
    AxisValues.AncestorOrSelf,
    AxisValues.FollowSibling,
    AxisValues.PrecedingSibling,
    AxisValues.Follow,
    AxisValues.Preceding,
    AxisValues.Root,
    AxisValues.None,
] as const;

export enum BoolOperatorValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Equal. Serialized value: `equ` */
    Equal = 'equ',
    /** Greater Than or Equal to. Serialized value: `gte` */
    GreaterThanOrEqualTo = 'gte',
    /** Less Than or Equal to. Serialized value: `lte` */
    LessThanOrEqualTo = 'lte',
}

export const BoolOperatorValuesArray = [
    BoolOperatorValues.None,
    BoolOperatorValues.Equal,
    BoolOperatorValues.GreaterThanOrEqualTo,
    BoolOperatorValues.LessThanOrEqualTo,
] as const;

export enum ChildOrderValues {
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Top. Serialized value: `t` */
    Top = 't',
}

export const ChildOrderValuesArray = [
    ChildOrderValues.Bottom,
    ChildOrderValues.Top,
] as const;

export enum ConstraintValues {
    /** Unknown. Serialized value: `none` */
    None = 'none',
    /** Alignment Offset. Serialized value: `alignOff` */
    AlignmentOffset = 'alignOff',
    /** Beginning Margin. Serialized value: `begMarg` */
    BeginningMargin = 'begMarg',
    /** Bending Distance. Serialized value: `bendDist` */
    BendingDistance = 'bendDist',
    /** Beginning Padding. Serialized value: `begPad` */
    BeginningPadding = 'begPad',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Bottom Margin. Serialized value: `bMarg` */
    BottomMargin = 'bMarg',
    /** Bottom Offset. Serialized value: `bOff` */
    BottomOffset = 'bOff',
    /** Center Height. Serialized value: `ctrX` */
    CenterHeight = 'ctrX',
    /** Center X Offset. Serialized value: `ctrXOff` */
    CenterXOffset = 'ctrXOff',
    /** Center Width. Serialized value: `ctrY` */
    CenterWidth = 'ctrY',
    /** Center Y Offset. Serialized value: `ctrYOff` */
    CenterYOffset = 'ctrYOff',
    /** Connection Distance. Serialized value: `connDist` */
    ConnectionDistance = 'connDist',
    /** Diameter. Serialized value: `diam` */
    Diameter = 'diam',
    /** End Margin. Serialized value: `endMarg` */
    EndMargin = 'endMarg',
    /** End Padding. Serialized value: `endPad` */
    EndPadding = 'endPad',
    /** Height. Serialized value: `h` */
    Height = 'h',
    /** Arrowhead Height. Serialized value: `hArH` */
    ArrowheadHeight = 'hArH',
    /** Height Offset. Serialized value: `hOff` */
    HeightOffset = 'hOff',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Left Margin. Serialized value: `lMarg` */
    LeftMargin = 'lMarg',
    /** Left Offset. Serialized value: `lOff` */
    LeftOffset = 'lOff',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** Right Margin. Serialized value: `rMarg` */
    RightMargin = 'rMarg',
    /** Right Offset. Serialized value: `rOff` */
    RightOffset = 'rOff',
    /** Primary Font Size. Serialized value: `primFontSz` */
    PrimaryFontSize = 'primFontSz',
    /** Pyramid Accent Ratio. Serialized value: `pyraAcctRatio` */
    PyramidAccentRatio = 'pyraAcctRatio',
    /** Secondary Font Size. Serialized value: `secFontSz` */
    SecondaryFontSize = 'secFontSz',
    /** Sibling Spacing. Serialized value: `sibSp` */
    SiblingSpacing = 'sibSp',
    /** Secondary Sibling Spacing. Serialized value: `secSibSp` */
    SecondarySiblingSpacing = 'secSibSp',
    /** Spacing. Serialized value: `sp` */
    Spacing = 'sp',
    /** Stem Thickness. Serialized value: `stemThick` */
    StemThickness = 'stemThick',
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Top Margin. Serialized value: `tMarg` */
    TopMargin = 'tMarg',
    /** Top Offset. Serialized value: `tOff` */
    TopOffset = 'tOff',
    /** User Defined A. Serialized value: `userA` */
    UserDefinedA = 'userA',
    /** User Defined B. Serialized value: `userB` */
    UserDefinedB = 'userB',
    /** User Defined C. Serialized value: `userC` */
    UserDefinedC = 'userC',
    /** User Defined D. Serialized value: `userD` */
    UserDefinedD = 'userD',
    /** User Defined E. Serialized value: `userE` */
    UserDefinedE = 'userE',
    /** User Defined F. Serialized value: `userF` */
    UserDefinedF = 'userF',
    /** User Defined G. Serialized value: `userG` */
    UserDefinedG = 'userG',
    /** User Defined H. Serialized value: `userH` */
    UserDefinedH = 'userH',
    /** User Defined I. Serialized value: `userI` */
    UserDefinedI = 'userI',
    /** User Defined J. Serialized value: `userJ` */
    UserDefinedJ = 'userJ',
    /** User Defined K. Serialized value: `userK` */
    UserDefinedK = 'userK',
    /** User Defined L. Serialized value: `userL` */
    UserDefinedL = 'userL',
    /** User Defined M. Serialized value: `userM` */
    UserDefinedM = 'userM',
    /** User Defined N. Serialized value: `userN` */
    UserDefinedN = 'userN',
    /** User Defined O. Serialized value: `userO` */
    UserDefinedO = 'userO',
    /** User Defined P. Serialized value: `userP` */
    UserDefinedP = 'userP',
    /** User Defined Q. Serialized value: `userQ` */
    UserDefinedQ = 'userQ',
    /** User Defined R. Serialized value: `userR` */
    UserDefinedR = 'userR',
    /** User Defined S. Serialized value: `userS` */
    UserDefinedS = 'userS',
    /** User Defined T. Serialized value: `userT` */
    UserDefinedT = 'userT',
    /** User Defined U. Serialized value: `userU` */
    UserDefinedU = 'userU',
    /** User Defined V. Serialized value: `userV` */
    UserDefinedV = 'userV',
    /** User Defined W. Serialized value: `userW` */
    UserDefinedW = 'userW',
    /** User Defined X. Serialized value: `userX` */
    UserDefinedX = 'userX',
    /** User Defined Y. Serialized value: `userY` */
    UserDefinedY = 'userY',
    /** User Defined Z. Serialized value: `userZ` */
    UserDefinedZ = 'userZ',
    /** Width. Serialized value: `w` */
    Width = 'w',
    /** Arrowhead Width. Serialized value: `wArH` */
    ArrowheadWidth = 'wArH',
    /** Width Offset. Serialized value: `wOff` */
    WidthOffset = 'wOff',
}

export const ConstraintValuesArray = [
    ConstraintValues.None,
    ConstraintValues.AlignmentOffset,
    ConstraintValues.BeginningMargin,
    ConstraintValues.BendingDistance,
    ConstraintValues.BeginningPadding,
    ConstraintValues.Bottom,
    ConstraintValues.BottomMargin,
    ConstraintValues.BottomOffset,
    ConstraintValues.CenterHeight,
    ConstraintValues.CenterXOffset,
    ConstraintValues.CenterWidth,
    ConstraintValues.CenterYOffset,
    ConstraintValues.ConnectionDistance,
    ConstraintValues.Diameter,
    ConstraintValues.EndMargin,
    ConstraintValues.EndPadding,
    ConstraintValues.Height,
    ConstraintValues.ArrowheadHeight,
    ConstraintValues.HeightOffset,
    ConstraintValues.Left,
    ConstraintValues.LeftMargin,
    ConstraintValues.LeftOffset,
    ConstraintValues.Right,
    ConstraintValues.RightMargin,
    ConstraintValues.RightOffset,
    ConstraintValues.PrimaryFontSize,
    ConstraintValues.PyramidAccentRatio,
    ConstraintValues.SecondaryFontSize,
    ConstraintValues.SiblingSpacing,
    ConstraintValues.SecondarySiblingSpacing,
    ConstraintValues.Spacing,
    ConstraintValues.StemThickness,
    ConstraintValues.Top,
    ConstraintValues.TopMargin,
    ConstraintValues.TopOffset,
    ConstraintValues.UserDefinedA,
    ConstraintValues.UserDefinedB,
    ConstraintValues.UserDefinedC,
    ConstraintValues.UserDefinedD,
    ConstraintValues.UserDefinedE,
    ConstraintValues.UserDefinedF,
    ConstraintValues.UserDefinedG,
    ConstraintValues.UserDefinedH,
    ConstraintValues.UserDefinedI,
    ConstraintValues.UserDefinedJ,
    ConstraintValues.UserDefinedK,
    ConstraintValues.UserDefinedL,
    ConstraintValues.UserDefinedM,
    ConstraintValues.UserDefinedN,
    ConstraintValues.UserDefinedO,
    ConstraintValues.UserDefinedP,
    ConstraintValues.UserDefinedQ,
    ConstraintValues.UserDefinedR,
    ConstraintValues.UserDefinedS,
    ConstraintValues.UserDefinedT,
    ConstraintValues.UserDefinedU,
    ConstraintValues.UserDefinedV,
    ConstraintValues.UserDefinedW,
    ConstraintValues.UserDefinedX,
    ConstraintValues.UserDefinedY,
    ConstraintValues.UserDefinedZ,
    ConstraintValues.Width,
    ConstraintValues.ArrowheadWidth,
    ConstraintValues.WidthOffset,
] as const;

export enum ConstraintRelationshipValues {
    /** Self. Serialized value: `self` */
    Self = 'self',
    /** Child. Serialized value: `ch` */
    Child = 'ch',
    /** Descendant. Serialized value: `des` */
    Descendant = 'des',
}

export const ConstraintRelationshipValuesArray = [
    ConstraintRelationshipValues.Self,
    ConstraintRelationshipValues.Child,
    ConstraintRelationshipValues.Descendant,
] as const;

export enum ElementValues {
    /** All. Serialized value: `all` */
    All = 'all',
    /** Document. Serialized value: `doc` */
    Document = 'doc',
    /** Node. Serialized value: `node` */
    Node = 'node',
    /** Normal. Serialized value: `norm` */
    Normal = 'norm',
    /** Non Normal. Serialized value: `nonNorm` */
    NonNormal = 'nonNorm',
    /** Assistant. Serialized value: `asst` */
    Assistant = 'asst',
    /** Non Assistant. Serialized value: `nonAsst` */
    NonAssistant = 'nonAsst',
    /** Parent Transition. Serialized value: `parTrans` */
    ParentTransition = 'parTrans',
    /** Presentation. Serialized value: `pres` */
    Presentation = 'pres',
    /** Sibling Transition. Serialized value: `sibTrans` */
    SiblingTransition = 'sibTrans',
}

export const ElementValuesArray = [
    ElementValues.All,
    ElementValues.Document,
    ElementValues.Node,
    ElementValues.Normal,
    ElementValues.NonNormal,
    ElementValues.Assistant,
    ElementValues.NonAssistant,
    ElementValues.ParentTransition,
    ElementValues.Presentation,
    ElementValues.SiblingTransition,
] as const;

export enum ParameterIdValues {
    /** Horizontal Alignment. Serialized value: `horzAlign` */
    HorizontalAlignment = 'horzAlign',
    /** Vertical Alignment. Serialized value: `vertAlign` */
    VerticalAlignment = 'vertAlign',
    /** Child Direction. Serialized value: `chDir` */
    ChildDirection = 'chDir',
    /** Child Alignment. Serialized value: `chAlign` */
    ChildAlignment = 'chAlign',
    /** Secondary Child Alignment. Serialized value: `secChAlign` */
    SecondaryChildAlignment = 'secChAlign',
    /** Linear Direction. Serialized value: `linDir` */
    LinearDirection = 'linDir',
    /** Secondary Linear Direction. Serialized value: `secLinDir` */
    SecondaryLinearDirection = 'secLinDir',
    /** Start Element. Serialized value: `stElem` */
    StartElement = 'stElem',
    /** Bend Point. Serialized value: `bendPt` */
    BendPoint = 'bendPt',
    /** Connection Route. Serialized value: `connRout` */
    ConnectionRoute = 'connRout',
    /** Beginning Arrowhead Style. Serialized value: `begSty` */
    BeginningArrowheadStyle = 'begSty',
    /** End Style. Serialized value: `endSty` */
    EndStyle = 'endSty',
    /** Connector Dimension. Serialized value: `dim` */
    ConnectorDimension = 'dim',
    /** Rotation Path. Serialized value: `rotPath` */
    RotationPath = 'rotPath',
    /** Center Shape Mapping. Serialized value: `ctrShpMap` */
    CenterShapeMapping = 'ctrShpMap',
    /** Node Horizontal Alignment. Serialized value: `nodeHorzAlign` */
    NodeHorizontalAlignment = 'nodeHorzAlign',
    /** Node Vertical Alignment. Serialized value: `nodeVertAlign` */
    NodeVerticalAlignment = 'nodeVertAlign',
    /** Fallback Scale. Serialized value: `fallback` */
    FallbackScale = 'fallback',
    /** Text Direction. Serialized value: `txDir` */
    TextDirection = 'txDir',
    /** Pyramid Accent Position. Serialized value: `pyraAcctPos` */
    PyramidAccentPosition = 'pyraAcctPos',
    /** Pyramid Accent Text Margin. Serialized value: `pyraAcctTxMar` */
    PyramidAccentTextMargin = 'pyraAcctTxMar',
    /** Text Block Direction. Serialized value: `txBlDir` */
    TextBlockDirection = 'txBlDir',
    /** Text Anchor Horizontal. Serialized value: `txAnchorHorz` */
    TextAnchorHorizontal = 'txAnchorHorz',
    /** Text Anchor Vertical. Serialized value: `txAnchorVert` */
    TextAnchorVertical = 'txAnchorVert',
    /** Text Anchor Horizontal With Children. Serialized value: `txAnchorHorzCh` */
    TextAnchorHorizontalWithChildren = 'txAnchorHorzCh',
    /** Text Anchor Vertical With Children. Serialized value: `txAnchorVertCh` */
    TextAnchorVerticalWithChildren = 'txAnchorVertCh',
    /** Parent Text Left-to-Right Alignment. Serialized value: `parTxLTRAlign` */
    ParentTextLeftToRightAlignment = 'parTxLTRAlign',
    /** Parent Text Right-to-Left Alignment. Serialized value: `parTxRTLAlign` */
    ParentTextRightToLeftAlignment = 'parTxRTLAlign',
    /** Shape Text Left-to-Right Alignment. Serialized value: `shpTxLTRAlignCh` */
    ShapeTextLeftToRightAlignment = 'shpTxLTRAlignCh',
    /** Shape Text Right-to-Left Alignment. Serialized value: `shpTxRTLAlignCh` */
    ShapeTextRightToLeftAlignment = 'shpTxRTLAlignCh',
    /** Auto Text Rotation. Serialized value: `autoTxRot` */
    AutoTextRotation = 'autoTxRot',
    /** Grow Direction. Serialized value: `grDir` */
    GrowDirection = 'grDir',
    /** Flow Direction. Serialized value: `flowDir` */
    FlowDirection = 'flowDir',
    /** Continue Direction. Serialized value: `contDir` */
    ContinueDirection = 'contDir',
    /** Breakpoint. Serialized value: `bkpt` */
    Breakpoint = 'bkpt',
    /** Offset. Serialized value: `off` */
    Offset = 'off',
    /** Hierarchy Alignment. Serialized value: `hierAlign` */
    HierarchyAlignment = 'hierAlign',
    /** Breakpoint Fixed Value. Serialized value: `bkPtFixedVal` */
    BreakpointFixedValue = 'bkPtFixedVal',
    /** Start Bullets At Level. Serialized value: `stBulletLvl` */
    StartBulletsAtLevel = 'stBulletLvl',
    /** Start Angle. Serialized value: `stAng` */
    StartAngle = 'stAng',
    /** Span Angle. Serialized value: `spanAng` */
    SpanAngle = 'spanAng',
    /** Aspect Ratio. Serialized value: `ar` */
    AspectRatio = 'ar',
    /** Line Spacing Parent. Serialized value: `lnSpPar` */
    LineSpacingParent = 'lnSpPar',
    /** Line Spacing After Parent Paragraph. Serialized value: `lnSpAfParP` */
    LineSpacingAfterParentParagraph = 'lnSpAfParP',
    /** Line Spacing Children. Serialized value: `lnSpCh` */
    LineSpacingChildren = 'lnSpCh',
    /** Line Spacing After Children Paragraph. Serialized value: `lnSpAfChP` */
    LineSpacingAfterChildrenParagraph = 'lnSpAfChP',
    /** Route Shortest Distance. Serialized value: `rtShortDist` */
    RouteShortestDistance = 'rtShortDist',
    /** Text Alignment. Serialized value: `alignTx` */
    TextAlignment = 'alignTx',
    /** Pyramid Level Node. Serialized value: `pyraLvlNode` */
    PyramidLevelNode = 'pyraLvlNode',
    /** Pyramid Accent Background Node. Serialized value: `pyraAcctBkgdNode` */
    PyramidAccentBackgroundNode = 'pyraAcctBkgdNode',
    /** Pyramid Accent Text Node. Serialized value: `pyraAcctTxNode` */
    PyramidAccentTextNode = 'pyraAcctTxNode',
    /** Source Node. Serialized value: `srcNode` */
    SourceNode = 'srcNode',
    /** Destination Node. Serialized value: `dstNode` */
    DestinationNode = 'dstNode',
    /** Beginning Points. Serialized value: `begPts` */
    BeginningPoints = 'begPts',
    /** End Points. Serialized value: `endPts` */
    EndPoints = 'endPts',
}

export const ParameterIdValuesArray = [
    ParameterIdValues.HorizontalAlignment,
    ParameterIdValues.VerticalAlignment,
    ParameterIdValues.ChildDirection,
    ParameterIdValues.ChildAlignment,
    ParameterIdValues.SecondaryChildAlignment,
    ParameterIdValues.LinearDirection,
    ParameterIdValues.SecondaryLinearDirection,
    ParameterIdValues.StartElement,
    ParameterIdValues.BendPoint,
    ParameterIdValues.ConnectionRoute,
    ParameterIdValues.BeginningArrowheadStyle,
    ParameterIdValues.EndStyle,
    ParameterIdValues.ConnectorDimension,
    ParameterIdValues.RotationPath,
    ParameterIdValues.CenterShapeMapping,
    ParameterIdValues.NodeHorizontalAlignment,
    ParameterIdValues.NodeVerticalAlignment,
    ParameterIdValues.FallbackScale,
    ParameterIdValues.TextDirection,
    ParameterIdValues.PyramidAccentPosition,
    ParameterIdValues.PyramidAccentTextMargin,
    ParameterIdValues.TextBlockDirection,
    ParameterIdValues.TextAnchorHorizontal,
    ParameterIdValues.TextAnchorVertical,
    ParameterIdValues.TextAnchorHorizontalWithChildren,
    ParameterIdValues.TextAnchorVerticalWithChildren,
    ParameterIdValues.ParentTextLeftToRightAlignment,
    ParameterIdValues.ParentTextRightToLeftAlignment,
    ParameterIdValues.ShapeTextLeftToRightAlignment,
    ParameterIdValues.ShapeTextRightToLeftAlignment,
    ParameterIdValues.AutoTextRotation,
    ParameterIdValues.GrowDirection,
    ParameterIdValues.FlowDirection,
    ParameterIdValues.ContinueDirection,
    ParameterIdValues.Breakpoint,
    ParameterIdValues.Offset,
    ParameterIdValues.HierarchyAlignment,
    ParameterIdValues.BreakpointFixedValue,
    ParameterIdValues.StartBulletsAtLevel,
    ParameterIdValues.StartAngle,
    ParameterIdValues.SpanAngle,
    ParameterIdValues.AspectRatio,
    ParameterIdValues.LineSpacingParent,
    ParameterIdValues.LineSpacingAfterParentParagraph,
    ParameterIdValues.LineSpacingChildren,
    ParameterIdValues.LineSpacingAfterChildrenParagraph,
    ParameterIdValues.RouteShortestDistance,
    ParameterIdValues.TextAlignment,
    ParameterIdValues.PyramidLevelNode,
    ParameterIdValues.PyramidAccentBackgroundNode,
    ParameterIdValues.PyramidAccentTextNode,
    ParameterIdValues.SourceNode,
    ParameterIdValues.DestinationNode,
    ParameterIdValues.BeginningPoints,
    ParameterIdValues.EndPoints,
] as const;

export enum FunctionValues {
    /** Count. Serialized value: `cnt` */
    Count = 'cnt',
    /** Position. Serialized value: `pos` */
    Position = 'pos',
    /** Reverse Position. Serialized value: `revPos` */
    ReversePosition = 'revPos',
    /** Position Even. Serialized value: `posEven` */
    PositionEven = 'posEven',
    /** Position Odd. Serialized value: `posOdd` */
    PositionOdd = 'posOdd',
    /** Variable. Serialized value: `var` */
    Variable = 'var',
    /** Depth. Serialized value: `depth` */
    Depth = 'depth',
    /** Max Depth. Serialized value: `maxDepth` */
    MaxDepth = 'maxDepth',
}

export const FunctionValuesArray = [
    FunctionValues.Count,
    FunctionValues.Position,
    FunctionValues.ReversePosition,
    FunctionValues.PositionEven,
    FunctionValues.PositionOdd,
    FunctionValues.Variable,
    FunctionValues.Depth,
    FunctionValues.MaxDepth,
] as const;

export enum FunctionOperatorValues {
    /** Equal. Serialized value: `equ` */
    Equal = 'equ',
    /** Not Equal To. Serialized value: `neq` */
    NotEqualTo = 'neq',
    /** Greater Than. Serialized value: `gt` */
    GreaterThan = 'gt',
    /** Less Than. Serialized value: `lt` */
    LessThan = 'lt',
    /** Greater Than or Equal to. Serialized value: `gte` */
    GreaterThanOrEqualTo = 'gte',
    /** Less Than or Equal to. Serialized value: `lte` */
    LessThanOrEqualTo = 'lte',
}

export const FunctionOperatorValuesArray = [
    FunctionOperatorValues.Equal,
    FunctionOperatorValues.NotEqualTo,
    FunctionOperatorValues.GreaterThan,
    FunctionOperatorValues.LessThan,
    FunctionOperatorValues.GreaterThanOrEqualTo,
    FunctionOperatorValues.LessThanOrEqualTo,
] as const;

export enum HorizontalAlignmentValues {
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const HorizontalAlignmentValuesArray = [
    HorizontalAlignmentValues.Left,
    HorizontalAlignmentValues.Center,
    HorizontalAlignmentValues.Right,
    HorizontalAlignmentValues.None,
] as const;

export enum ChildDirectionValues {
    /** Horizontal. Serialized value: `horz` */
    Horizontal = 'horz',
    /** Vertical. Serialized value: `vert` */
    Vertical = 'vert',
}

export const ChildDirectionValuesArray = [
    ChildDirectionValues.Horizontal,
    ChildDirectionValues.Vertical,
] as const;

export enum ChildAlignmentValues {
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
}

export const ChildAlignmentValuesArray = [
    ChildAlignmentValues.Top,
    ChildAlignmentValues.Bottom,
    ChildAlignmentValues.Left,
    ChildAlignmentValues.Right,
] as const;

export enum SecondaryChildAlignmentValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
}

export const SecondaryChildAlignmentValuesArray = [
    SecondaryChildAlignmentValues.None,
    SecondaryChildAlignmentValues.Top,
    SecondaryChildAlignmentValues.Bottom,
    SecondaryChildAlignmentValues.Left,
    SecondaryChildAlignmentValues.Right,
] as const;

export enum LinearDirectionValues {
    /** From Left. Serialized value: `fromL` */
    FromLeft = 'fromL',
    /** From Right. Serialized value: `fromR` */
    FromRight = 'fromR',
    /** From Top. Serialized value: `fromT` */
    FromTop = 'fromT',
    /** From Bottom. Serialized value: `fromB` */
    FromBottom = 'fromB',
}

export const LinearDirectionValuesArray = [
    LinearDirectionValues.FromLeft,
    LinearDirectionValues.FromRight,
    LinearDirectionValues.FromTop,
    LinearDirectionValues.FromBottom,
] as const;

export enum SecondaryLinearDirectionValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** From Left. Serialized value: `fromL` */
    FromLeft = 'fromL',
    /** From Right. Serialized value: `fromR` */
    FromRight = 'fromR',
    /** From Top. Serialized value: `fromT` */
    FromTop = 'fromT',
    /** From Bottom. Serialized value: `fromB` */
    FromBottom = 'fromB',
}

export const SecondaryLinearDirectionValuesArray = [
    SecondaryLinearDirectionValues.None,
    SecondaryLinearDirectionValues.FromLeft,
    SecondaryLinearDirectionValues.FromRight,
    SecondaryLinearDirectionValues.FromTop,
    SecondaryLinearDirectionValues.FromBottom,
] as const;

export enum StartingElementValues {
    /** Node. Serialized value: `node` */
    Node = 'node',
    /** Transition. Serialized value: `trans` */
    Transition = 'trans',
}

export const StartingElementValuesArray = [
    StartingElementValues.Node,
    StartingElementValues.Transition,
] as const;

export enum RotationPathValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Along Path. Serialized value: `alongPath` */
    AlongPath = 'alongPath',
}

export const RotationPathValuesArray = [
    RotationPathValues.None,
    RotationPathValues.AlongPath,
] as const;

export enum CenterShapeMappingValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** First Node. Serialized value: `fNode` */
    FirstNode = 'fNode',
}

export const CenterShapeMappingValuesArray = [
    CenterShapeMappingValues.None,
    CenterShapeMappingValues.FirstNode,
] as const;

export enum BendPointValues {
    /** Beginning. Serialized value: `beg` */
    Beginning = 'beg',
    /** Default. Serialized value: `def` */
    Default = 'def',
    /** End. Serialized value: `end` */
    End = 'end',
}

export const BendPointValuesArray = [
    BendPointValues.Beginning,
    BendPointValues.Default,
    BendPointValues.End,
] as const;

export enum ConnectorRoutingValues {
    /** Straight. Serialized value: `stra` */
    Straight = 'stra',
    /** Bending. Serialized value: `bend` */
    Bending = 'bend',
    /** Curve. Serialized value: `curve` */
    Curve = 'curve',
    /** Long Curve. Serialized value: `longCurve` */
    LongCurve = 'longCurve',
}

export const ConnectorRoutingValuesArray = [
    ConnectorRoutingValues.Straight,
    ConnectorRoutingValues.Bending,
    ConnectorRoutingValues.Curve,
    ConnectorRoutingValues.LongCurve,
] as const;

export enum ArrowheadStyleValues {
    /** Auto. Serialized value: `auto` */
    Auto = 'auto',
    /** Arrowhead Present. Serialized value: `arr` */
    Arrow = 'arr',
    /** No Arrowhead. Serialized value: `noArr` */
    NoArrow = 'noArr',
}

export const ArrowheadStyleValuesArray = [
    ArrowheadStyleValues.Auto,
    ArrowheadStyleValues.Arrow,
    ArrowheadStyleValues.NoArrow,
] as const;

export enum ConnectorDimensionValues {
    /** 1 Dimension. Serialized value: `1D` */
    OneDimension = '1D',
    /** 2 Dimensions. Serialized value: `2D` */
    TwoDimension = '2D',
    /** Custom. Serialized value: `cust` */
    Custom = 'cust',
}

export const ConnectorDimensionValuesArray = [
    ConnectorDimensionValues.OneDimension,
    ConnectorDimensionValues.TwoDimension,
    ConnectorDimensionValues.Custom,
] as const;

export enum ConnectorPointValues {
    /** Auto. Serialized value: `auto` */
    Auto = 'auto',
    /** Bottom Center. Serialized value: `bCtr` */
    BottomCenter = 'bCtr',
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Middle Left. Serialized value: `midL` */
    MiddleLeft = 'midL',
    /** Middle Right. Serialized value: `midR` */
    MiddleRight = 'midR',
    /** Top Center. Serialized value: `tCtr` */
    TopCenter = 'tCtr',
    /** Bottom Left. Serialized value: `bL` */
    BottomLeft = 'bL',
    /** Bottom Right. Serialized value: `bR` */
    BottomRight = 'bR',
    /** Top Left. Serialized value: `tL` */
    TopLeft = 'tL',
    /** Top Right. Serialized value: `tR` */
    TopRight = 'tR',
    /** Radial. Serialized value: `radial` */
    Radial = 'radial',
}

export const ConnectorPointValuesArray = [
    ConnectorPointValues.Auto,
    ConnectorPointValues.BottomCenter,
    ConnectorPointValues.Center,
    ConnectorPointValues.MiddleLeft,
    ConnectorPointValues.MiddleRight,
    ConnectorPointValues.TopCenter,
    ConnectorPointValues.BottomLeft,
    ConnectorPointValues.BottomRight,
    ConnectorPointValues.TopLeft,
    ConnectorPointValues.TopRight,
    ConnectorPointValues.Radial,
] as const;

export enum NodeHorizontalAlignmentValues {
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Right. Serialized value: `r` */
    Right = 'r',
}

export const NodeHorizontalAlignmentValuesArray = [
    NodeHorizontalAlignmentValues.Left,
    NodeHorizontalAlignmentValues.Center,
    NodeHorizontalAlignmentValues.Right,
] as const;

export enum NodeVerticalAlignmentValues {
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Middle. Serialized value: `mid` */
    Middle = 'mid',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
}

export const NodeVerticalAlignmentValuesArray = [
    NodeVerticalAlignmentValues.Top,
    NodeVerticalAlignmentValues.Middle,
    NodeVerticalAlignmentValues.Bottom,
] as const;

export enum FallbackDimensionValues {
    /** 1 Dimension. Serialized value: `1D` */
    OneDimension = '1D',
    /** 2 Dimensions. Serialized value: `2D` */
    TwoDimension = '2D',
}

export const FallbackDimensionValuesArray = [
    FallbackDimensionValues.OneDimension,
    FallbackDimensionValues.TwoDimension,
] as const;

export enum TextDirectionValues {
    /** From Top. Serialized value: `fromT` */
    FromTop = 'fromT',
    /** From Bottom. Serialized value: `fromB` */
    FromBottom = 'fromB',
}

export const TextDirectionValuesArray = [
    TextDirectionValues.FromTop,
    TextDirectionValues.FromBottom,
] as const;

export enum PyramidAccentPositionValues {
    /** Before. Serialized value: `bef` */
    Before = 'bef',
    /** Pyramid Accent After. Serialized value: `aft` */
    After = 'aft',
}

export const PyramidAccentPositionValuesArray = [
    PyramidAccentPositionValues.Before,
    PyramidAccentPositionValues.After,
] as const;

export enum PyramidAccentTextMarginValues {
    /** Step. Serialized value: `step` */
    Step = 'step',
    /** Stack. Serialized value: `stack` */
    Stack = 'stack',
}

export const PyramidAccentTextMarginValuesArray = [
    PyramidAccentTextMarginValues.Step,
    PyramidAccentTextMarginValues.Stack,
] as const;

export enum TextBlockDirectionValues {
    /** Horizontal. Serialized value: `horz` */
    Horizontal = 'horz',
    /** Vertical Direction. Serialized value: `vert` */
    Vertical = 'vert',
}

export const TextBlockDirectionValuesArray = [
    TextBlockDirectionValues.Horizontal,
    TextBlockDirectionValues.Vertical,
] as const;

export enum TextAnchorHorizontalValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
}

export const TextAnchorHorizontalValuesArray = [
    TextAnchorHorizontalValues.None,
    TextAnchorHorizontalValues.Center,
] as const;

export enum TextAnchorVerticalValues {
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Middle. Serialized value: `mid` */
    Middle = 'mid',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
}

export const TextAnchorVerticalValuesArray = [
    TextAnchorVerticalValues.Top,
    TextAnchorVerticalValues.Middle,
    TextAnchorVerticalValues.Bottom,
] as const;

export enum TextAlignmentValues {
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Right. Serialized value: `r` */
    Right = 'r',
}

export const TextAlignmentValuesArray = [
    TextAlignmentValues.Left,
    TextAlignmentValues.Center,
    TextAlignmentValues.Right,
] as const;

export enum AutoTextRotationValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Upright. Serialized value: `upr` */
    Upright = 'upr',
    /** Gravity. Serialized value: `grav` */
    Gravity = 'grav',
}

export const AutoTextRotationValuesArray = [
    AutoTextRotationValues.None,
    AutoTextRotationValues.Upright,
    AutoTextRotationValues.Gravity,
] as const;

export enum GrowDirectionValues {
    /** Top Left. Serialized value: `tL` */
    TopLeft = 'tL',
    /** Top Right. Serialized value: `tR` */
    TopRight = 'tR',
    /** Bottom Left. Serialized value: `bL` */
    BottomLeft = 'bL',
    /** Bottom Right. Serialized value: `bR` */
    BottomRight = 'bR',
}

export const GrowDirectionValuesArray = [
    GrowDirectionValues.TopLeft,
    GrowDirectionValues.TopRight,
    GrowDirectionValues.BottomLeft,
    GrowDirectionValues.BottomRight,
] as const;

export enum FlowDirectionValues {
    /** Row. Serialized value: `row` */
    Row = 'row',
    /** Column. Serialized value: `col` */
    Column = 'col',
}

export const FlowDirectionValuesArray = [
    FlowDirectionValues.Row,
    FlowDirectionValues.Column,
] as const;

export enum ContinueDirectionValues {
    /** Reverse Direction. Serialized value: `revDir` */
    ReverseDirection = 'revDir',
    /** Same Direction. Serialized value: `sameDir` */
    SameDirection = 'sameDir',
}

export const ContinueDirectionValuesArray = [
    ContinueDirectionValues.ReverseDirection,
    ContinueDirectionValues.SameDirection,
] as const;

export enum BreakpointValues {
    /** End of Canvas. Serialized value: `endCnv` */
    EndCanvas = 'endCnv',
    /** Balanced. Serialized value: `bal` */
    Balanced = 'bal',
    /** Fixed. Serialized value: `fixed` */
    Fixed = 'fixed',
}

export const BreakpointValuesArray = [
    BreakpointValues.EndCanvas,
    BreakpointValues.Balanced,
    BreakpointValues.Fixed,
] as const;

export enum OffsetValues {
    /** Center. Serialized value: `ctr` */
    Center = 'ctr',
    /** Offset. Serialized value: `off` */
    Offset = 'off',
}

export const OffsetValuesArray = [
    OffsetValues.Center,
    OffsetValues.Offset,
] as const;

export enum HierarchyAlignmentValues {
    /** Top Left. Serialized value: `tL` */
    TopLeft = 'tL',
    /** Top Right. Serialized value: `tR` */
    TopRight = 'tR',
    /** Top Center Children. Serialized value: `tCtrCh` */
    TopCenterChildren = 'tCtrCh',
    /** Top Center Descendants. Serialized value: `tCtrDes` */
    TopCenterDescendants = 'tCtrDes',
    /** Bottom Left. Serialized value: `bL` */
    BottomLeft = 'bL',
    /** Bottom Right. Serialized value: `bR` */
    BottomRight = 'bR',
    /** Bottom Center Child. Serialized value: `bCtrCh` */
    BottomCenterChild = 'bCtrCh',
    /** Bottom Center Descendant. Serialized value: `bCtrDes` */
    BottomCenterDescendant = 'bCtrDes',
    /** Left Top. Serialized value: `lT` */
    LeftTop = 'lT',
    /** Left Bottom. Serialized value: `lB` */
    LeftBottom = 'lB',
    /** Left Center Child. Serialized value: `lCtrCh` */
    LeftCenterChild = 'lCtrCh',
    /** Left Center Descendant. Serialized value: `lCtrDes` */
    LeftCenterDescendant = 'lCtrDes',
    /** Right Top. Serialized value: `rT` */
    RightTop = 'rT',
    /** Right Bottom. Serialized value: `rB` */
    RightBottom = 'rB',
    /** Right Center Children. Serialized value: `rCtrCh` */
    RightCenterChildren = 'rCtrCh',
    /** Right Center Descendants. Serialized value: `rCtrDes` */
    RightCenterDescendants = 'rCtrDes',
}

export const HierarchyAlignmentValuesArray = [
    HierarchyAlignmentValues.TopLeft,
    HierarchyAlignmentValues.TopRight,
    HierarchyAlignmentValues.TopCenterChildren,
    HierarchyAlignmentValues.TopCenterDescendants,
    HierarchyAlignmentValues.BottomLeft,
    HierarchyAlignmentValues.BottomRight,
    HierarchyAlignmentValues.BottomCenterChild,
    HierarchyAlignmentValues.BottomCenterDescendant,
    HierarchyAlignmentValues.LeftTop,
    HierarchyAlignmentValues.LeftBottom,
    HierarchyAlignmentValues.LeftCenterChild,
    HierarchyAlignmentValues.LeftCenterDescendant,
    HierarchyAlignmentValues.RightTop,
    HierarchyAlignmentValues.RightBottom,
    HierarchyAlignmentValues.RightCenterChildren,
    HierarchyAlignmentValues.RightCenterDescendants,
] as const;

export enum VariableValues {
    /** Unknown. Serialized value: `none` */
    None = 'none',
    /** Organizational Chart Algorithm. Serialized value: `orgChart` */
    OrganizationalChart = 'orgChart',
    /** Child Max. Serialized value: `chMax` */
    ChildMax = 'chMax',
    /** Child Preference. Serialized value: `chPref` */
    ChildPreference = 'chPref',
    /** Bullets Enabled. Serialized value: `bulEnabled` */
    BulletsEnabled = 'bulEnabled',
    /** Direction. Serialized value: `dir` */
    Direction = 'dir',
    /** Hierarchy Branch. Serialized value: `hierBranch` */
    HierarchyBranch = 'hierBranch',
    /** Animate One. Serialized value: `animOne` */
    AnimateOne = 'animOne',
    /** Animation Level. Serialized value: `animLvl` */
    AnimationLevel = 'animLvl',
    /** Resize Handles. Serialized value: `resizeHandles` */
    ResizeHandles = 'resizeHandles',
}

export const VariableValuesArray = [
    VariableValues.None,
    VariableValues.OrganizationalChart,
    VariableValues.ChildMax,
    VariableValues.ChildPreference,
    VariableValues.BulletsEnabled,
    VariableValues.Direction,
    VariableValues.HierarchyBranch,
    VariableValues.AnimateOne,
    VariableValues.AnimationLevel,
    VariableValues.ResizeHandles,
] as const;

export enum OutputShapeValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Connection. Serialized value: `conn` */
    Connection = 'conn',
}

export const OutputShapeValuesArray = [
    OutputShapeValues.None,
    OutputShapeValues.Connection,
] as const;

export enum VerticalAlignmentValues {
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Middle. Serialized value: `mid` */
    Middle = 'mid',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** None. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `top` */
    Top2010 = 'top',
    /** undefined. Serialized value: `center` */
    Middle2010 = 'center',
    /** undefined. Serialized value: `bottom` */
    Bottom2010 = 'bottom',
}

export const VerticalAlignmentValuesArray = [
    VerticalAlignmentValues.Top,
    VerticalAlignmentValues.Middle,
    VerticalAlignmentValues.Bottom,
    VerticalAlignmentValues.None,
    VerticalAlignmentValues.Top2010,
    VerticalAlignmentValues.Middle2010,
    VerticalAlignmentValues.Bottom2010,
] as const;

/** List of extensions to the CT_DiagramDefintions type.. Serialized as `dgm:extLst` */
export class DiagramDefinitionExtensionList extends OxmlCompositeElement<DiagramDefinitionExtension> {

    public static override _Q = 'dgm:extLst';

}
/** Defines the SampleDataType Class. */
export abstract class SampleDataType extends OxmlCompositeElement<DataModel> {

    public static override _A = [':useDef',];
    /** Use Default. Serialized as `:useDef` */
    public get useDefault(): BooleanValue | undefined { return this._g(':useDef'); }
    public set useDefault(v: BooleanValue | undefined) { this._s(':useDef', v); }
    /** Data Model. */
    public get dataModel(): DataModel | undefined { return this._f(DataModel); }

}
/** Defines the ColorData Class. Serialized as `dgm:clrData` */
export class ColorData extends SampleDataType {

    public static override _Q = 'dgm:clrData';

}
/** Defines the StyleData Class. Serialized as `dgm:styleData` */
export class StyleData extends SampleDataType {

    public static override _Q = 'dgm:styleData';

}
/** Defines the SampleData Class. Serialized as `dgm:sampData` */
export class SampleData extends SampleDataType {

    public static override _Q = 'dgm:sampData';

}
/** Defines the DiagramDefinitionExtension Class. Serialized as `dgm:ext` */
export class DiagramDefinitionExtension extends OxmlCompositeElement<Dgm1611NumberDiagramInfoList | Dgm1612TextListStyleType> {

    public static override _Q = 'dgm:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns Dgm1611NumberDiagramInfoList. */
    public get numberDiagramInfoList(): Dgm1611NumberDiagramInfoList | undefined { return this._f(Dgm1611NumberDiagramInfoList); }
    /** Returns Dgm1612TextListStyleType. */
    public get textListStyleType(): Dgm1612TextListStyleType | undefined { return this._f(Dgm1612TextListStyleType); }

}
/** Defines the PtExtensionList Class. Serialized as `dgm:extLst` */
export class PtExtensionList extends OxmlCompositeElement<APtExtension> {

    public static override _Q = 'dgm:extLst';

}
/** Text Body. Serialized as `dgm:t` */
export class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {

    public static override _Q = 'dgm:t';
    /** Body Properties. */
    public get bodyProperties(): ABodyProperties | undefined { return this._f(ABodyProperties); }
    /** Text List Styles. */
    public get listStyle(): AListStyle | undefined { return this._f(AListStyle); }

}
/** Shape Properties. Serialized as `dgm:spPr` */
export class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {

    public static override _Q = 'dgm:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): ATransform2D | undefined { return this._f(ATransform2D); }

}
/** Property Set. Serialized as `dgm:prSet` */
export class PropertySet extends OxmlCompositeElement<PresentationLayoutVariables | Style> {

    public static override _Q = 'dgm:prSet';
    public static override _A = [':presAssocID',':presName',':presStyleLbl',':presStyleIdx',':presStyleCnt',':loTypeId',':loCatId',':qsTypeId',':qsCatId',':csTypeId',':csCatId',':coherent3DOff',':phldrT',':phldr',':custAng',':custFlipVert',':custFlipHor',':custSzX',':custSzY',':custScaleX',':custScaleY',':custT',':custLinFactX',':custLinFactY',':custLinFactNeighborX',':custLinFactNeighborY',':custRadScaleRad',':custRadScaleInc',];
    /** Presentation Element Identifier. Serialized as `:presAssocID` */
    public get presentationElementId(): StringValue | undefined { return this._g(':presAssocID'); }
    public set presentationElementId(v: StringValue | undefined) { this._s(':presAssocID', v); }
    /** Presentation Name. Serialized as `:presName` */
    public get presentationName(): StringValue | undefined { return this._g(':presName'); }
    public set presentationName(v: StringValue | undefined) { this._s(':presName', v); }
    /** Presentation Style Label. Serialized as `:presStyleLbl` */
    public get presentationStyleLabel(): StringValue | undefined { return this._g(':presStyleLbl'); }
    public set presentationStyleLabel(v: StringValue | undefined) { this._s(':presStyleLbl', v); }
    /** Presentation Style Index. Serialized as `:presStyleIdx` */
    public get presentationStyleIndex(): Int32Value | undefined { return this._g(':presStyleIdx'); }
    public set presentationStyleIndex(v: Int32Value | undefined) { this._s(':presStyleIdx', v); }
    /** Presentation Style Count. Serialized as `:presStyleCnt` */
    public get presentationStyleCount(): Int32Value | undefined { return this._g(':presStyleCnt'); }
    public set presentationStyleCount(v: Int32Value | undefined) { this._s(':presStyleCnt', v); }
    /** Current Diagram Type. Serialized as `:loTypeId` */
    public get layoutTypeId(): StringValue | undefined { return this._g(':loTypeId'); }
    public set layoutTypeId(v: StringValue | undefined) { this._s(':loTypeId', v); }
    /** Current Diagram Category. Serialized as `:loCatId` */
    public get layoutCategoryId(): StringValue | undefined { return this._g(':loCatId'); }
    public set layoutCategoryId(v: StringValue | undefined) { this._s(':loCatId', v); }
    /** Current Style Type. Serialized as `:qsTypeId` */
    public get quickStyleTypeId(): StringValue | undefined { return this._g(':qsTypeId'); }
    public set quickStyleTypeId(v: StringValue | undefined) { this._s(':qsTypeId', v); }
    /** Current Style Category. Serialized as `:qsCatId` */
    public get quickStyleCategoryId(): StringValue | undefined { return this._g(':qsCatId'); }
    public set quickStyleCategoryId(v: StringValue | undefined) { this._s(':qsCatId', v); }
    /** Color Transform Type Identifier. Serialized as `:csTypeId` */
    public get colorType(): StringValue | undefined { return this._g(':csTypeId'); }
    public set colorType(v: StringValue | undefined) { this._s(':csTypeId', v); }
    /** Color Transform Category. Serialized as `:csCatId` */
    public get colorCategoryId(): StringValue | undefined { return this._g(':csCatId'); }
    public set colorCategoryId(v: StringValue | undefined) { this._s(':csCatId', v); }
    /** Coherent 3D Behavior. Serialized as `:coherent3DOff` */
    public get coherent3D(): BooleanValue | undefined { return this._g(':coherent3DOff'); }
    public set coherent3D(v: BooleanValue | undefined) { this._s(':coherent3DOff', v); }
    /** Placeholder Text. Serialized as `:phldrT` */
    public get placeholderText(): StringValue | undefined { return this._g(':phldrT'); }
    public set placeholderText(v: StringValue | undefined) { this._s(':phldrT', v); }
    /** Placeholder. Serialized as `:phldr` */
    public get placeholder(): BooleanValue | undefined { return this._g(':phldr'); }
    public set placeholder(v: BooleanValue | undefined) { this._s(':phldr', v); }
    /** Custom Rotation. Serialized as `:custAng` */
    public get rotation(): Int32Value | undefined { return this._g(':custAng'); }
    public set rotation(v: Int32Value | undefined) { this._s(':custAng', v); }
    /** Custom Vertical Flip. Serialized as `:custFlipVert` */
    public get verticalFlip(): BooleanValue | undefined { return this._g(':custFlipVert'); }
    public set verticalFlip(v: BooleanValue | undefined) { this._s(':custFlipVert', v); }
    /** Custom Horizontal Flip. Serialized as `:custFlipHor` */
    public get horizontalFlip(): BooleanValue | undefined { return this._g(':custFlipHor'); }
    public set horizontalFlip(v: BooleanValue | undefined) { this._s(':custFlipHor', v); }
    /** Fixed Width Override. Serialized as `:custSzX` */
    public get fixedWidthOverride(): Int32Value | undefined { return this._g(':custSzX'); }
    public set fixedWidthOverride(v: Int32Value | undefined) { this._s(':custSzX', v); }
    /** Fixed Height Override. Serialized as `:custSzY` */
    public get fixedHeightOverride(): Int32Value | undefined { return this._g(':custSzY'); }
    public set fixedHeightOverride(v: Int32Value | undefined) { this._s(':custSzY', v); }
    /** Width Scale. Serialized as `:custScaleX` */
    public get widthScale(): Int32Value | undefined { return this._g(':custScaleX'); }
    public set widthScale(v: Int32Value | undefined) { this._s(':custScaleX', v); }
    /** Height Scale. Serialized as `:custScaleY` */
    public get hightScale(): Int32Value | undefined { return this._g(':custScaleY'); }
    public set hightScale(v: Int32Value | undefined) { this._s(':custScaleY', v); }
    /** Text Changed. Serialized as `:custT` */
    public get textChanged(): BooleanValue | undefined { return this._g(':custT'); }
    public set textChanged(v: BooleanValue | undefined) { this._s(':custT', v); }
    /** Custom Factor Width. Serialized as `:custLinFactX` */
    public get factorWidth(): Int32Value | undefined { return this._g(':custLinFactX'); }
    public set factorWidth(v: Int32Value | undefined) { this._s(':custLinFactX', v); }
    /** Custom Factor Height. Serialized as `:custLinFactY` */
    public get factorHeight(): Int32Value | undefined { return this._g(':custLinFactY'); }
    public set factorHeight(v: Int32Value | undefined) { this._s(':custLinFactY', v); }
    /** Neighbor Offset Width. Serialized as `:custLinFactNeighborX` */
    public get neighborOffsetWidth(): Int32Value | undefined { return this._g(':custLinFactNeighborX'); }
    public set neighborOffsetWidth(v: Int32Value | undefined) { this._s(':custLinFactNeighborX', v); }
    /** Neighbor Offset Height. Serialized as `:custLinFactNeighborY` */
    public get neighborOffsetHeight(): Int32Value | undefined { return this._g(':custLinFactNeighborY'); }
    public set neighborOffsetHeight(v: Int32Value | undefined) { this._s(':custLinFactNeighborY', v); }
    /** Radius Scale. Serialized as `:custRadScaleRad` */
    public get radiusScale(): Int32Value | undefined { return this._g(':custRadScaleRad'); }
    public set radiusScale(v: Int32Value | undefined) { this._s(':custRadScaleRad', v); }
    /** Include Angle Scale. Serialized as `:custRadScaleInc` */
    public get includeAngleScale(): Int32Value | undefined { return this._g(':custRadScaleInc'); }
    public set includeAngleScale(v: Int32Value | undefined) { this._s(':custRadScaleInc', v); }
    /** Presentation Layout Variables. */
    public get presentationLayoutVariables(): PresentationLayoutVariables | undefined { return this._f(PresentationLayoutVariables); }
    /** Shape Style. */
    public get style(): Style | undefined { return this._f(Style); }

}
/** Defines the DataModelExtensionList Class. Serialized as `dgm:extLst` */
export class DataModelExtensionList extends OxmlCompositeElement<ADataModelExtension> {

    public static override _Q = 'dgm:extLst';

}
/** Whole E2O Formatting. Serialized as `dgm:whole` */
export class Whole extends OxmlCompositeElement<AOutline | AEffectList | AEffectDag> {

    public static override _Q = 'dgm:whole';
    /** Outline. */
    public get outline(): AOutline | undefined { return this._f(AOutline); }

}
/** Background Formatting. Serialized as `dgm:bg` */
export class Background extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag> {

    public static override _Q = 'dgm:bg';

}
/** Connection List. Serialized as `dgm:cxnLst` */
export class ConnectionList extends OxmlCompositeElement<Connection> {

    public static override _Q = 'dgm:cxnLst';

}
/** Point List. Serialized as `dgm:ptLst` */
export class PointList extends OxmlCompositeElement<Point> {

    public static override _Q = 'dgm:ptLst';

}
/** Style Label. Serialized as `dgm:styleLbl` */
export class StyleLabel extends OxmlCompositeElement<Scene3D | Shape3D | TextProperties | Style | ExtensionList> {

    public static override _Q = 'dgm:styleLbl';
    public static override _A = [':name',];
    /** Style Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** 3-D Scene. */
    public get scene3D(): Scene3D | undefined { return this._f(Scene3D); }
    /** 3-D Shape Properties. */
    public get shape3D(): Shape3D | undefined { return this._f(Shape3D); }
    /** Text Properties. */
    public get textProperties(): TextProperties | undefined { return this._f(TextProperties); }
    /** Shape Style. */
    public get style(): Style | undefined { return this._f(Style); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Category List. Serialized as `dgm:catLst` */
export class StyleDisplayCategories extends OxmlCompositeElement<StyleDisplayCategory> {

    public static override _Q = 'dgm:catLst';

}
/** Style Label Description. Serialized as `dgm:desc` */
export class StyleLabelDescription extends OxmlLeafElement {

    public static override _Q = 'dgm:desc';
    public static override _A = [':lang',':val',];
    /** Natural Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Description Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Title. Serialized as `dgm:title` */
export class StyleDefinitionTitle extends OxmlLeafElement {

    public static override _Q = 'dgm:title';
    public static override _A = [':lang',':val',];
    /** Natural Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Description Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Text Properties. Serialized as `dgm:txPr` */
export class TextProperties extends OxmlCompositeElement<AShape3DType | AFlatText> {

    public static override _Q = 'dgm:txPr';
    /** Apply 3D shape properties. */
    public get shape3DType(): AShape3DType | undefined { return this._f(AShape3DType); }
    /** No text in 3D scene. */
    public get flatText(): AFlatText | undefined { return this._f(AFlatText); }

}
/** 3-D Shape Properties. Serialized as `dgm:sp3d` */
export class Shape3D extends OxmlCompositeElement<ABevelTop | ABevelBottom | AExtrusionColor | AContourColor | AExtensionList> {

    public static override _Q = 'dgm:sp3d';
    public static override _A = [':z',':extrusionH',':contourW',':prstMaterial',];
    /** Shape Depth. Serialized as `:z` */
    public get z(): Int64Value | undefined { return this._g(':z'); }
    public set z(v: Int64Value | undefined) { this._s(':z', v); }
    /** Extrusion Height. Serialized as `:extrusionH` */
    public get extrusionHeight(): Int64Value | undefined { return this._g(':extrusionH'); }
    public set extrusionHeight(v: Int64Value | undefined) { this._s(':extrusionH', v); }
    /** Contour Width. Serialized as `:contourW` */
    public get contourWidth(): Int64Value | undefined { return this._g(':contourW'); }
    public set contourWidth(v: Int64Value | undefined) { this._s(':contourW', v); }
    /** Preset Material Type. Serialized as `:prstMaterial` */
    public get presetMaterial(): PresetMaterialTypeValues | undefined { return this._g(':prstMaterial'); }
    public set presetMaterial(v: PresetMaterialTypeValues | undefined) { this._s(':prstMaterial', v); }
    /** Top Bevel. */
    public get bevelTop(): ABevelTop | undefined { return this._f(ABevelTop); }
    /** Bottom Bevel. */
    public get bevelBottom(): ABevelBottom | undefined { return this._f(ABevelBottom); }
    /** Extrusion Color. */
    public get extrusionColor(): AExtrusionColor | undefined { return this._f(AExtrusionColor); }
    /** Contour Color. */
    public get contourColor(): AContourColor | undefined { return this._f(AContourColor); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** 3-D Scene. Serialized as `dgm:scene3d` */
export class Scene3D extends OxmlCompositeElement<ACamera | ALightRig | ABackdrop | AExtensionList> {

    public static override _Q = 'dgm:scene3d';
    /** Camera. */
    public get camera(): ACamera | undefined { return this._f(ACamera); }
    /** Light Rig. */
    public get lightRig(): ALightRig | undefined { return this._f(ALightRig); }
    /** Backdrop Plane. */
    public get backdrop(): ABackdrop | undefined { return this._f(ABackdrop); }
    /** Returns AExtensionList. */
    public get extensionList(): AExtensionList | undefined { return this._f(AExtensionList); }

}
/** Category. Serialized as `dgm:cat` */
export class StyleDisplayCategory extends OxmlLeafElement {

    public static override _Q = 'dgm:cat';
    public static override _A = [':type',':pri',];
    /** Category Type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Priority. Serialized as `:pri` */
    public get priority(): UInt32Value | undefined { return this._g(':pri'); }
    public set priority(v: UInt32Value | undefined) { this._s(':pri', v); }

}
/** Shape Resize Style. Serialized as `dgm:resizeHandles` */
export class ResizeHandles extends OxmlLeafElement {

    public static override _Q = 'dgm:resizeHandles';
    public static override _A = [':val',];
    /** Shape Resize Style Type. Serialized as `:val` */
    public get val(): ResizeHandlesStringValues | undefined { return this._g(':val'); }
    public set val(v: ResizeHandlesStringValues | undefined) { this._s(':val', v); }

}
/** Level Animation. Serialized as `dgm:animLvl` */
export class AnimationLevel extends OxmlLeafElement {

    public static override _Q = 'dgm:animLvl';
    public static override _A = [':val',];
    /** Level Animation Value. Serialized as `:val` */
    public get val(): AnimationLevelStringValues | undefined { return this._g(':val'); }
    public set val(v: AnimationLevelStringValues | undefined) { this._s(':val', v); }

}
/** One by One Animation String. Serialized as `dgm:animOne` */
export class AnimateOneByOne extends OxmlLeafElement {

    public static override _Q = 'dgm:animOne';
    public static override _A = [':val',];
    /** One By One Animation Value. Serialized as `:val` */
    public get val(): AnimateOneByOneValues | undefined { return this._g(':val'); }
    public set val(v: AnimateOneByOneValues | undefined) { this._s(':val', v); }

}
/** Organization Chart Branch Style. Serialized as `dgm:hierBranch` */
export class HierarchyBranch extends OxmlLeafElement {

    public static override _Q = 'dgm:hierBranch';
    public static override _A = [':val',];
    /** Organization Chart Branch Style Value. Serialized as `:val` */
    public get val(): HierarchyBranchStyleValues | undefined { return this._g(':val'); }
    public set val(v: HierarchyBranchStyleValues | undefined) { this._s(':val', v); }

}
/** Diagram Direction. Serialized as `dgm:dir` */
export class Direction extends OxmlLeafElement {

    public static override _Q = 'dgm:dir';
    public static override _A = [':val',];
    /** Diagram Direction Value. Serialized as `:val` */
    public get val(): DirectionValues | undefined { return this._g(':val'); }
    public set val(v: DirectionValues | undefined) { this._s(':val', v); }

}
/** Show Insert Bullet. Serialized as `dgm:bulletEnabled` */
export class BulletEnabled extends OxmlLeafElement {

    public static override _Q = 'dgm:bulletEnabled';
    public static override _A = [':val',];
    /** Show Insert Bullet Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Preferred Number of Children. Serialized as `dgm:chPref` */
export class PreferredNumberOfChildren extends OxmlLeafElement {

    public static override _Q = 'dgm:chPref';
    public static override _A = [':val',];
    /** Preferred Number of CHildren Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Maximum Children. Serialized as `dgm:chMax` */
export class MaxNumberOfChildren extends OxmlLeafElement {

    public static override _Q = 'dgm:chMax';
    public static override _A = [':val',];
    /** Maximum Children Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Show Organization Chart User Interface. Serialized as `dgm:orgChart` */
export class OrganizationChart extends OxmlLeafElement {

    public static override _Q = 'dgm:orgChart';
    public static override _A = [':val',];
    /** Show Organization Chart User Interface Value. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Shape Style. Serialized as `dgm:style` */
export class Style extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {

    public static override _Q = 'dgm:style';
    /** Returns ALineReference. */
    public get lineReference(): ALineReference | undefined { return this._f(ALineReference); }
    /** Returns AFillReference. */
    public get fillReference(): AFillReference | undefined { return this._f(AFillReference); }
    /** Returns AEffectReference. */
    public get effectReference(): AEffectReference | undefined { return this._f(AEffectReference); }
    /** Font Reference. */
    public get fontReference(): AFontReference | undefined { return this._f(AFontReference); }

}
/** Category List. Serialized as `dgm:catLst` */
export class CategoryList extends OxmlCompositeElement<Category> {

    public static override _Q = 'dgm:catLst';

}
/** Description. Serialized as `dgm:desc` */
export class Description extends OxmlLeafElement {

    public static override _Q = 'dgm:desc';
    public static override _A = [':lang',':val',];
    /** Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Title. Serialized as `dgm:title` */
export class Title extends OxmlLeafElement {

    public static override _Q = 'dgm:title';
    public static override _A = [':lang',':val',];
    /** Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Category. Serialized as `dgm:cat` */
export class Category extends OxmlLeafElement {

    public static override _Q = 'dgm:cat';
    public static override _A = [':type',':pri',];
    /** Category Type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Priority. Serialized as `:pri` */
    public get priority(): UInt32Value | undefined { return this._g(':pri'); }
    public set priority(v: UInt32Value | undefined) { this._s(':pri', v); }

}
/** Data Model. Serialized as `dgm:dataModel` */
export class DataModel extends OxmlCompositeElement<PointList | ConnectionList | Background | Whole | DataModelExtensionList> {

    public static override _Q = 'dgm:dataModel';
    /** Point List. */
    public get pointList(): PointList | undefined { return this._f(PointList); }
    /** Connection List. */
    public get connectionList(): ConnectionList | undefined { return this._f(ConnectionList); }
    /** Background Formatting. */
    public get background(): Background | undefined { return this._f(Background); }
    /** Whole E2O Formatting. */
    public get whole(): Whole | undefined { return this._f(Whole); }
    /** Returns DataModelExtensionList. */
    public get dataModelExtensionList(): DataModelExtensionList | undefined { return this._f(DataModelExtensionList); }

}
/** Else. Serialized as `dgm:else` */
export class DiagramChooseElse extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | ForEach | LayoutNode | Choose | ExtensionList> {

    public static override _Q = 'dgm:else';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** If. Serialized as `dgm:if` */
export class DiagramChooseIf extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | ForEach | LayoutNode | Choose | ExtensionList> {

    public static override _Q = 'dgm:if';
    public static override _A = [':name',':axis',':ptType',':hideLastTrans',':st',':cnt',':step',':func',':arg',':op',':val',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Axis. Serialized as `:axis` */
    public get axis(): AxisValues | undefined { return this._g(':axis'); }
    public set axis(v: AxisValues | undefined) { this._s(':axis', v); }
    /** Data Point Type. Serialized as `:ptType` */
    public get pointType(): ElementValues | undefined { return this._g(':ptType'); }
    public set pointType(v: ElementValues | undefined) { this._s(':ptType', v); }
    /** Hide Last Transition. Serialized as `:hideLastTrans` */
    public get hideLastTrans(): ListValue<BooleanValue> | undefined { return this._g(':hideLastTrans'); }
    public set hideLastTrans(v: ListValue<BooleanValue> | undefined) { this._s(':hideLastTrans', v); }
    /** Start. Serialized as `:st` */
    public get start(): ListValue<Int32Value> | undefined { return this._g(':st'); }
    public set start(v: ListValue<Int32Value> | undefined) { this._s(':st', v); }
    /** Count. Serialized as `:cnt` */
    public get count(): ListValue<UInt32Value> | undefined { return this._g(':cnt'); }
    public set count(v: ListValue<UInt32Value> | undefined) { this._s(':cnt', v); }
    /** Step. Serialized as `:step` */
    public get step(): ListValue<Int32Value> | undefined { return this._g(':step'); }
    public set step(v: ListValue<Int32Value> | undefined) { this._s(':step', v); }
    /** Function. Serialized as `:func` */
    public get function(): FunctionValues | undefined { return this._g(':func'); }
    public set function(v: FunctionValues | undefined) { this._s(':func', v); }
    /** Argument. Serialized as `:arg` */
    public get argument(): StringValue | undefined { return this._g(':arg'); }
    public set argument(v: StringValue | undefined) { this._s(':arg', v); }
    /** Operator. Serialized as `:op` */
    public get operator(): FunctionOperatorValues | undefined { return this._g(':op'); }
    public set operator(v: FunctionOperatorValues | undefined) { this._s(':op', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Choose Element. Serialized as `dgm:choose` */
export class Choose extends OxmlCompositeElement<DiagramChooseIf | DiagramChooseElse> {

    public static override _Q = 'dgm:choose';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Layout Node. Serialized as `dgm:layoutNode` */
export class LayoutNode extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | VariableList | ForEach | LayoutNode | Choose | ExtensionList> {

    public static override _Q = 'dgm:layoutNode';
    public static override _A = [':name',':styleLbl',':chOrder',':moveWith',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Style Label. Serialized as `:styleLbl` */
    public get styleLabel(): StringValue | undefined { return this._g(':styleLbl'); }
    public set styleLabel(v: StringValue | undefined) { this._s(':styleLbl', v); }
    /** Child Order. Serialized as `:chOrder` */
    public get childOrder(): ChildOrderValues | undefined { return this._g(':chOrder'); }
    public set childOrder(v: ChildOrderValues | undefined) { this._s(':chOrder', v); }
    /** Move With. Serialized as `:moveWith` */
    public get moveWith(): StringValue | undefined { return this._g(':moveWith'); }
    public set moveWith(v: StringValue | undefined) { this._s(':moveWith', v); }

}
/** For Each. Serialized as `dgm:forEach` */
export class ForEach extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | ForEach | LayoutNode | Choose | ExtensionList> {

    public static override _Q = 'dgm:forEach';
    public static override _A = [':name',':ref',':axis',':ptType',':hideLastTrans',':st',':cnt',':step',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }
    /** Axis. Serialized as `:axis` */
    public get axis(): AxisValues | undefined { return this._g(':axis'); }
    public set axis(v: AxisValues | undefined) { this._s(':axis', v); }
    /** Data Point Type. Serialized as `:ptType` */
    public get pointType(): ElementValues | undefined { return this._g(':ptType'); }
    public set pointType(v: ElementValues | undefined) { this._s(':ptType', v); }
    /** Hide Last Transition. Serialized as `:hideLastTrans` */
    public get hideLastTrans(): ListValue<BooleanValue> | undefined { return this._g(':hideLastTrans'); }
    public set hideLastTrans(v: ListValue<BooleanValue> | undefined) { this._s(':hideLastTrans', v); }
    /** Start. Serialized as `:st` */
    public get start(): ListValue<Int32Value> | undefined { return this._g(':st'); }
    public set start(v: ListValue<Int32Value> | undefined) { this._s(':st', v); }
    /** Count. Serialized as `:cnt` */
    public get count(): ListValue<UInt32Value> | undefined { return this._g(':cnt'); }
    public set count(v: ListValue<UInt32Value> | undefined) { this._s(':cnt', v); }
    /** Step. Serialized as `:step` */
    public get step(): ListValue<Int32Value> | undefined { return this._g(':step'); }
    public set step(v: ListValue<Int32Value> | undefined) { this._s(':step', v); }

}
/** Defines the LayoutVariablePropertySetType Class. */
export abstract class LayoutVariablePropertySetType extends OxmlCompositeElement<OrganizationChart | MaxNumberOfChildren | PreferredNumberOfChildren | BulletEnabled | Direction | HierarchyBranch | AnimateOneByOne | AnimationLevel | ResizeHandles> {

    /** Show Organization Chart User Interface. */
    public get organizationChart(): OrganizationChart | undefined { return this._f(OrganizationChart); }
    /** Maximum Children. */
    public get maxNumberOfChildren(): MaxNumberOfChildren | undefined { return this._f(MaxNumberOfChildren); }
    /** Preferred Number of Children. */
    public get preferredNumberOfChildren(): PreferredNumberOfChildren | undefined { return this._f(PreferredNumberOfChildren); }
    /** Show Insert Bullet. */
    public get bulletEnabled(): BulletEnabled | undefined { return this._f(BulletEnabled); }
    /** Diagram Direction. */
    public get direction(): Direction | undefined { return this._f(Direction); }
    /** Organization Chart Branch Style. */
    public get hierarchyBranch(): HierarchyBranch | undefined { return this._f(HierarchyBranch); }
    /** One by One Animation String. */
    public get animateOneByOne(): AnimateOneByOne | undefined { return this._f(AnimateOneByOne); }
    /** Level Animation. */
    public get animationLevel(): AnimationLevel | undefined { return this._f(AnimationLevel); }
    /** Shape Resize Style. */
    public get resizeHandles(): ResizeHandles | undefined { return this._f(ResizeHandles); }

}
/** Presentation Layout Variables. Serialized as `dgm:presLayoutVars` */
export class PresentationLayoutVariables extends LayoutVariablePropertySetType {

    public static override _Q = 'dgm:presLayoutVars';

}
/** Variable List. Serialized as `dgm:varLst` */
export class VariableList extends LayoutVariablePropertySetType {

    public static override _Q = 'dgm:varLst';

}
/** Rule List. Serialized as `dgm:ruleLst` */
export class RuleList extends OxmlCompositeElement<Rule> {

    public static override _Q = 'dgm:ruleLst';

}
/** Constraint List. Serialized as `dgm:constrLst` */
export class Constraints extends OxmlCompositeElement<Constraint> {

    public static override _Q = 'dgm:constrLst';

}
/** Presentation Of. Serialized as `dgm:presOf` */
export class PresentationOf extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'dgm:presOf';
    public static override _A = [':axis',':ptType',':hideLastTrans',':st',':cnt',':step',];
    /** Axis. Serialized as `:axis` */
    public get axis(): AxisValues | undefined { return this._g(':axis'); }
    public set axis(v: AxisValues | undefined) { this._s(':axis', v); }
    /** Data Point Type. Serialized as `:ptType` */
    public get pointType(): ElementValues | undefined { return this._g(':ptType'); }
    public set pointType(v: ElementValues | undefined) { this._s(':ptType', v); }
    /** Hide Last Transition. Serialized as `:hideLastTrans` */
    public get hideLastTrans(): ListValue<BooleanValue> | undefined { return this._g(':hideLastTrans'); }
    public set hideLastTrans(v: ListValue<BooleanValue> | undefined) { this._s(':hideLastTrans', v); }
    /** Start. Serialized as `:st` */
    public get start(): ListValue<Int32Value> | undefined { return this._g(':st'); }
    public set start(v: ListValue<Int32Value> | undefined) { this._s(':st', v); }
    /** Count. Serialized as `:cnt` */
    public get count(): ListValue<UInt32Value> | undefined { return this._g(':cnt'); }
    public set count(v: ListValue<UInt32Value> | undefined) { this._s(':cnt', v); }
    /** Step. Serialized as `:step` */
    public get step(): ListValue<Int32Value> | undefined { return this._g(':step'); }
    public set step(v: ListValue<Int32Value> | undefined) { this._s(':step', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Shape. Serialized as `dgm:shape` */
export class Shape extends OxmlCompositeElement<AdjustList | ExtensionList> {

    public static override _Q = 'dgm:shape';
    public static override _A = [':rot',':type','r:blip',':zOrderOff',':hideGeom',':lkTxEntry',':blipPhldr',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): DoubleValue | undefined { return this._g(':rot'); }
    public set rotation(v: DoubleValue | undefined) { this._s(':rot', v); }
    /** Shape Type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Relationship to Image Part. Serialized as `r:blip` */
    public get blip(): StringValue | undefined { return this._g('r:blip'); }
    public set blip(v: StringValue | undefined) { this._s('r:blip', v); }
    /** Z-Order Offset. Serialized as `:zOrderOff` */
    public get zOrderOffset(): Int32Value | undefined { return this._g(':zOrderOff'); }
    public set zOrderOffset(v: Int32Value | undefined) { this._s(':zOrderOff', v); }
    /** Hide Geometry. Serialized as `:hideGeom` */
    public get hideGeometry(): BooleanValue | undefined { return this._g(':hideGeom'); }
    public set hideGeometry(v: BooleanValue | undefined) { this._s(':hideGeom', v); }
    /** Prevent Text Editing. Serialized as `:lkTxEntry` */
    public get lockedText(): BooleanValue | undefined { return this._g(':lkTxEntry'); }
    public set lockedText(v: BooleanValue | undefined) { this._s(':lkTxEntry', v); }
    /** Image Placeholder. Serialized as `:blipPhldr` */
    public get blipPlaceholder(): BooleanValue | undefined { return this._g(':blipPhldr'); }
    public set blipPlaceholder(v: BooleanValue | undefined) { this._s(':blipPhldr', v); }
    /** Shape Adjust List. */
    public get adjustList(): AdjustList | undefined { return this._f(AdjustList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Algorithm. Serialized as `dgm:alg` */
export class Algorithm extends OxmlCompositeElement<Parameter | ExtensionList> {

    public static override _Q = 'dgm:alg';
    public static override _A = [':type',':rev',];
    /** Algorithm Type. Serialized as `:type` */
    public get type(): AlgorithmValues | undefined { return this._g(':type'); }
    public set type(v: AlgorithmValues | undefined) { this._s(':type', v); }
    /** Revision Number. Serialized as `:rev` */
    public get revision(): UInt32Value | undefined { return this._g(':rev'); }
    public set revision(v: UInt32Value | undefined) { this._s(':rev', v); }

}
/** Parameter. Serialized as `dgm:param` */
export class Parameter extends OxmlLeafElement {

    public static override _Q = 'dgm:param';
    public static override _A = [':type',':val',];
    /** Parameter Type. Serialized as `:type` */
    public get type(): ParameterIdValues | undefined { return this._g(':type'); }
    public set type(v: ParameterIdValues | undefined) { this._s(':type', v); }
    /** Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Shape Adjust List. Serialized as `dgm:adjLst` */
export class AdjustList extends OxmlCompositeElement<Adjust> {

    public static override _Q = 'dgm:adjLst';

}
/** Shape Adjust. Serialized as `dgm:adj` */
export class Adjust extends OxmlLeafElement {

    public static override _Q = 'dgm:adj';
    public static override _A = [':idx',':val',];
    /** Adjust Handle Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }

}
/** Rule. Serialized as `dgm:rule` */
export class Rule extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'dgm:rule';
    public static override _A = [':type',':for',':forName',':ptType',':val',':fact',':max',];
    /** Constraint Type. Serialized as `:type` */
    public get type(): ConstraintValues | undefined { return this._g(':type'); }
    public set type(v: ConstraintValues | undefined) { this._s(':type', v); }
    /** For. Serialized as `:for` */
    public get for(): ConstraintRelationshipValues | undefined { return this._g(':for'); }
    public set for(v: ConstraintRelationshipValues | undefined) { this._s(':for', v); }
    /** For Name. Serialized as `:forName` */
    public get forName(): StringValue | undefined { return this._g(':forName'); }
    public set forName(v: StringValue | undefined) { this._s(':forName', v); }
    /** Data Point Type. Serialized as `:ptType` */
    public get pointType(): ElementValues | undefined { return this._g(':ptType'); }
    public set pointType(v: ElementValues | undefined) { this._s(':ptType', v); }
    /** Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }
    /** Factor. Serialized as `:fact` */
    public get fact(): DoubleValue | undefined { return this._g(':fact'); }
    public set fact(v: DoubleValue | undefined) { this._s(':fact', v); }
    /** Max Value. Serialized as `:max` */
    public get max(): DoubleValue | undefined { return this._g(':max'); }
    public set max(v: DoubleValue | undefined) { this._s(':max', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Constraint. Serialized as `dgm:constr` */
export class Constraint extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'dgm:constr';
    public static override _A = [':type',':for',':forName',':ptType',':refType',':refFor',':refForName',':refPtType',':op',':val',':fact',];
    /** Constraint Type. Serialized as `:type` */
    public get type(): ConstraintValues | undefined { return this._g(':type'); }
    public set type(v: ConstraintValues | undefined) { this._s(':type', v); }
    /** For. Serialized as `:for` */
    public get for(): ConstraintRelationshipValues | undefined { return this._g(':for'); }
    public set for(v: ConstraintRelationshipValues | undefined) { this._s(':for', v); }
    /** For Name. Serialized as `:forName` */
    public get forName(): StringValue | undefined { return this._g(':forName'); }
    public set forName(v: StringValue | undefined) { this._s(':forName', v); }
    /** Data Point Type. Serialized as `:ptType` */
    public get pointType(): ElementValues | undefined { return this._g(':ptType'); }
    public set pointType(v: ElementValues | undefined) { this._s(':ptType', v); }
    /** Reference Type. Serialized as `:refType` */
    public get referenceType(): ConstraintValues | undefined { return this._g(':refType'); }
    public set referenceType(v: ConstraintValues | undefined) { this._s(':refType', v); }
    /** Reference For. Serialized as `:refFor` */
    public get referenceFor(): ConstraintRelationshipValues | undefined { return this._g(':refFor'); }
    public set referenceFor(v: ConstraintRelationshipValues | undefined) { this._s(':refFor', v); }
    /** Reference For Name. Serialized as `:refForName` */
    public get referenceForName(): StringValue | undefined { return this._g(':refForName'); }
    public set referenceForName(v: StringValue | undefined) { this._s(':refForName', v); }
    /** Reference Point Type. Serialized as `:refPtType` */
    public get referencePointType(): ElementValues | undefined { return this._g(':refPtType'); }
    public set referencePointType(v: ElementValues | undefined) { this._s(':refPtType', v); }
    /** Operator. Serialized as `:op` */
    public get operator(): BoolOperatorValues | undefined { return this._g(':op'); }
    public set operator(v: BoolOperatorValues | undefined) { this._s(':op', v); }
    /** Value. Serialized as `:val` */
    public get val(): DoubleValue | undefined { return this._g(':val'); }
    public set val(v: DoubleValue | undefined) { this._s(':val', v); }
    /** Factor. Serialized as `:fact` */
    public get fact(): DoubleValue | undefined { return this._g(':fact'); }
    public set fact(v: DoubleValue | undefined) { this._s(':fact', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Connection. Serialized as `dgm:cxn` */
export class Connection extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'dgm:cxn';
    public static override _A = [':modelId',':type',':srcId',':destId',':srcOrd',':destOrd',':parTransId',':sibTransId',':presId',];
    /** Model Identifier. Serialized as `:modelId` */
    public get modelId(): StringValue | undefined { return this._g(':modelId'); }
    public set modelId(v: StringValue | undefined) { this._s(':modelId', v); }
    /** Point Type. Serialized as `:type` */
    public get type(): ConnectionValues | undefined { return this._g(':type'); }
    public set type(v: ConnectionValues | undefined) { this._s(':type', v); }
    /** Source Identifier. Serialized as `:srcId` */
    public get sourceId(): StringValue | undefined { return this._g(':srcId'); }
    public set sourceId(v: StringValue | undefined) { this._s(':srcId', v); }
    /** Destination Identifier. Serialized as `:destId` */
    public get destinationId(): StringValue | undefined { return this._g(':destId'); }
    public set destinationId(v: StringValue | undefined) { this._s(':destId', v); }
    /** Source Position. Serialized as `:srcOrd` */
    public get sourcePosition(): UInt32Value | undefined { return this._g(':srcOrd'); }
    public set sourcePosition(v: UInt32Value | undefined) { this._s(':srcOrd', v); }
    /** Destination Position. Serialized as `:destOrd` */
    public get destinationPosition(): UInt32Value | undefined { return this._g(':destOrd'); }
    public set destinationPosition(v: UInt32Value | undefined) { this._s(':destOrd', v); }
    /** Parent Transition Identifier. Serialized as `:parTransId` */
    public get parentTransitionId(): StringValue | undefined { return this._g(':parTransId'); }
    public set parentTransitionId(v: StringValue | undefined) { this._s(':parTransId', v); }
    /** Sibling Transition Identifier. Serialized as `:sibTransId` */
    public get siblingTransitionId(): StringValue | undefined { return this._g(':sibTransId'); }
    public set siblingTransitionId(v: StringValue | undefined) { this._s(':sibTransId', v); }
    /** Presentation Identifier. Serialized as `:presId` */
    public get presentationId(): StringValue | undefined { return this._g(':presId'); }
    public set presentationId(v: StringValue | undefined) { this._s(':presId', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Point. Serialized as `dgm:pt` */
export class Point extends OxmlCompositeElement<PropertySet | ShapeProperties | TextBody | PtExtensionList> {

    public static override _Q = 'dgm:pt';
    public static override _A = [':modelId',':type',':cxnId',];
    /** Model Identifier. Serialized as `:modelId` */
    public get modelId(): StringValue | undefined { return this._g(':modelId'); }
    public set modelId(v: StringValue | undefined) { this._s(':modelId', v); }
    /** Point Type. Serialized as `:type` */
    public get type(): PointValues | undefined { return this._g(':type'); }
    public set type(v: PointValues | undefined) { this._s(':type', v); }
    /** Connection Identifier. Serialized as `:cxnId` */
    public get connectionId(): StringValue | undefined { return this._g(':cxnId'); }
    public set connectionId(v: StringValue | undefined) { this._s(':cxnId', v); }
    /** Property Set. */
    public get propertySet(): PropertySet | undefined { return this._f(PropertySet); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Text Body. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }
    /** Returns PtExtensionList. */
    public get ptExtensionList(): PtExtensionList | undefined { return this._f(PtExtensionList); }

}
/** Style Label. Serialized as `dgm:styleLbl` */
export class ColorTransformStyleLabel extends OxmlCompositeElement<FillColorList | LineColorList | EffectColorList | TextLineColorList | TextFillColorList | TextEffectColorList | ExtensionList> {

    public static override _Q = 'dgm:styleLbl';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Fill Color List. */
    public get fillColorList(): FillColorList | undefined { return this._f(FillColorList); }
    /** Line Color List. */
    public get lineColorList(): LineColorList | undefined { return this._f(LineColorList); }
    /** Effect Color List. */
    public get effectColorList(): EffectColorList | undefined { return this._f(EffectColorList); }
    /** Text Line Color List. */
    public get textLineColorList(): TextLineColorList | undefined { return this._f(TextLineColorList); }
    /** Text Fill Color List. */
    public get textFillColorList(): TextFillColorList | undefined { return this._f(TextFillColorList); }
    /** Text Effect Color List. */
    public get textEffectColorList(): TextEffectColorList | undefined { return this._f(TextEffectColorList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Color Transform Category List. Serialized as `dgm:catLst` */
export class ColorTransformCategories extends OxmlCompositeElement<ColorTransformCategory> {

    public static override _Q = 'dgm:catLst';

}
/** Description. Serialized as `dgm:desc` */
export class ColorTransformDescription extends OxmlLeafElement {

    public static override _Q = 'dgm:desc';
    public static override _A = [':lang',':val',];
    /** Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Description Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Title. Serialized as `dgm:title` */
export class ColorDefinitionTitle extends OxmlLeafElement {

    public static override _Q = 'dgm:title';
    public static override _A = [':lang',':val',];
    /** Language. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** Description Value. Serialized as `:val` */
    public get val(): StringValue | undefined { return this._g(':val'); }
    public set val(v: StringValue | undefined) { this._s(':val', v); }

}
/** Defines the ExtensionList Class. Serialized as `dgm:extLst` */
export class ExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'dgm:extLst';

}
/** Defines the ColorsType Class. */
export abstract class ColorsType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _A = [':meth',':hueDir',];
    /** Color Application Method Type. Serialized as `:meth` */
    public get method(): ColorApplicationMethodValues | undefined { return this._g(':meth'); }
    public set method(v: ColorApplicationMethodValues | undefined) { this._s(':meth', v); }
    /** Hue Direction. Serialized as `:hueDir` */
    public get hueDirection(): HueDirectionValues | undefined { return this._g(':hueDir'); }
    public set hueDirection(v: HueDirectionValues | undefined) { this._s(':hueDir', v); }

}
/** Text Effect Color List. Serialized as `dgm:txEffectClrLst` */
export class TextEffectColorList extends ColorsType {

    public static override _Q = 'dgm:txEffectClrLst';

}
/** Text Fill Color List. Serialized as `dgm:txFillClrLst` */
export class TextFillColorList extends ColorsType {

    public static override _Q = 'dgm:txFillClrLst';

}
/** Text Line Color List. Serialized as `dgm:txLinClrLst` */
export class TextLineColorList extends ColorsType {

    public static override _Q = 'dgm:txLinClrLst';

}
/** Effect Color List. Serialized as `dgm:effectClrLst` */
export class EffectColorList extends ColorsType {

    public static override _Q = 'dgm:effectClrLst';

}
/** Line Color List. Serialized as `dgm:linClrLst` */
export class LineColorList extends ColorsType {

    public static override _Q = 'dgm:linClrLst';

}
/** Fill Color List. Serialized as `dgm:fillClrLst` */
export class FillColorList extends ColorsType {

    public static override _Q = 'dgm:fillClrLst';

}
/** Color Transform Category. Serialized as `dgm:cat` */
export class ColorTransformCategory extends OxmlLeafElement {

    public static override _Q = 'dgm:cat';
    public static override _A = [':type',':pri',];
    /** Category Type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Priority. Serialized as `:pri` */
    public get priority(): UInt32Value | undefined { return this._g(':pri'); }
    public set priority(v: UInt32Value | undefined) { this._s(':pri', v); }

}
/** List of Style Definition Headers. Serialized as `dgm:styleDefHdrLst` */
export class StyleDefinitionHeaderList extends OxmlCompositeElement<StyleDefinitionHeader> {

    public static override _Q = 'dgm:styleDefHdrLst';

}
/** Style Definition Header. Serialized as `dgm:styleDefHdr` */
export class StyleDefinitionHeader extends OxmlCompositeElement<StyleDefinitionTitle | StyleLabelDescription | StyleDisplayCategories | ExtensionList> {

    public static override _Q = 'dgm:styleDefHdr';
    public static override _A = [':uniqueId',':minVer',':resId',];
    /** Unique Style ID. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** Minimum Version. Serialized as `:minVer` */
    public get minVersion(): StringValue | undefined { return this._g(':minVer'); }
    public set minVersion(v: StringValue | undefined) { this._s(':minVer', v); }
    /** Resource ID. Serialized as `:resId` */
    public get resourceId(): Int32Value | undefined { return this._g(':resId'); }
    public set resourceId(v: Int32Value | undefined) { this._s(':resId', v); }

}
/** Style Definition. Serialized as `dgm:styleDef` */
export class StyleDefinition extends OxmlPartRootElement<StyleDefinitionTitle | StyleLabelDescription | StyleDisplayCategories | Scene3D | StyleLabel | ExtensionList> {

    public static override _Q = 'dgm:styleDef';
    public static override _A = [':uniqueId',':minVer',];
    /** Unique Style ID. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** Minimum Version. Serialized as `:minVer` */
    public get minVersion(): StringValue | undefined { return this._g(':minVer'); }
    public set minVersion(v: StringValue | undefined) { this._s(':minVer', v); }

}
/** Explicit Relationships to Diagram Parts. Serialized as `dgm:relIds` */
export class RelationshipIds extends OxmlLeafElement {

    public static override _Q = 'dgm:relIds';
    public static override _A = ['r:dm','r:lo','r:qs','r:cs',];
    /** Explicit Relationship to Diagram Data Part. Serialized as `r:dm` */
    public get dataPart(): StringValue | undefined { return this._g('r:dm'); }
    public set dataPart(v: StringValue | undefined) { this._s('r:dm', v); }
    /** Explicit Relationship to Diagram Layout Definition Part. Serialized as `r:lo` */
    public get layoutPart(): StringValue | undefined { return this._g('r:lo'); }
    public set layoutPart(v: StringValue | undefined) { this._s('r:lo', v); }
    /** Explicit Relationship to Style Definition Part. Serialized as `r:qs` */
    public get stylePart(): StringValue | undefined { return this._g('r:qs'); }
    public set stylePart(v: StringValue | undefined) { this._s('r:qs', v); }
    /** Explicit Relationship to Diagram Colors Part. Serialized as `r:cs` */
    public get colorPart(): StringValue | undefined { return this._g('r:cs'); }
    public set colorPart(v: StringValue | undefined) { this._s('r:cs', v); }

}
/** Diagram Layout Header List. Serialized as `dgm:layoutDefHdrLst` */
export class LayoutDefinitionHeaderList extends OxmlCompositeElement<LayoutDefinitionHeader> {

    public static override _Q = 'dgm:layoutDefHdrLst';

}
/** Layout Definition Header. Serialized as `dgm:layoutDefHdr` */
export class LayoutDefinitionHeader extends OxmlCompositeElement<Title | Description | CategoryList | ExtensionList> {

    public static override _Q = 'dgm:layoutDefHdr';
    public static override _A = [':uniqueId',':minVer',':defStyle',':resId',];
    /** Unique Identifier. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** Minimum Version. Serialized as `:minVer` */
    public get minVersion(): StringValue | undefined { return this._g(':minVer'); }
    public set minVersion(v: StringValue | undefined) { this._s(':minVer', v); }
    /** Default Style. Serialized as `:defStyle` */
    public get defaultStyle(): StringValue | undefined { return this._g(':defStyle'); }
    public set defaultStyle(v: StringValue | undefined) { this._s(':defStyle', v); }
    /** Resource Identifier. Serialized as `:resId` */
    public get resourceId(): Int32Value | undefined { return this._g(':resId'); }
    public set resourceId(v: Int32Value | undefined) { this._s(':resId', v); }

}
/** Layout Definition. Serialized as `dgm:layoutDef` */
export class LayoutDefinition extends OxmlPartRootElement<Title | Description | CategoryList | SampleData | StyleData | ColorData | LayoutNode | DiagramDefinitionExtensionList> {

    public static override _Q = 'dgm:layoutDef';
    public static override _A = [':uniqueId',':minVer',':defStyle',];
    /** uniqueId. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** minVer. Serialized as `:minVer` */
    public get minVersion(): StringValue | undefined { return this._g(':minVer'); }
    public set minVersion(v: StringValue | undefined) { this._s(':minVer', v); }
    /** defStyle. Serialized as `:defStyle` */
    public get defaultStyle(): StringValue | undefined { return this._g(':defStyle'); }
    public set defaultStyle(v: StringValue | undefined) { this._s(':defStyle', v); }

}
/** Data Model. Serialized as `dgm:dataModel` */
export class DataModelRoot extends OxmlPartRootElement<PointList | ConnectionList | Background | Whole | DataModelExtensionList> {

    public static override _Q = 'dgm:dataModel';
    /** Point List. */
    public get pointList(): PointList | undefined { return this._f(PointList); }
    /** Connection List. */
    public get connectionList(): ConnectionList | undefined { return this._f(ConnectionList); }
    /** Background Formatting. */
    public get background(): Background | undefined { return this._f(Background); }
    /** Whole E2O Formatting. */
    public get whole(): Whole | undefined { return this._f(Whole); }
    /** Returns DataModelExtensionList. */
    public get dataModelExtensionList(): DataModelExtensionList | undefined { return this._f(DataModelExtensionList); }

}
/** Color Transform Header List. Serialized as `dgm:colorsDefHdrLst` */
export class ColorsDefinitionHeaderList extends OxmlCompositeElement<ColorsDefinitionHeader> {

    public static override _Q = 'dgm:colorsDefHdrLst';

}
/** Color Transform Header. Serialized as `dgm:colorsDefHdr` */
export class ColorsDefinitionHeader extends OxmlCompositeElement<ColorDefinitionTitle | ColorTransformDescription | ColorTransformCategories | ExtensionList> {

    public static override _Q = 'dgm:colorsDefHdr';
    public static override _A = [':uniqueId',':minVer',':resId',];
    /** Unique ID. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** Minimum Version. Serialized as `:minVer` */
    public get minVersion(): StringValue | undefined { return this._g(':minVer'); }
    public set minVersion(v: StringValue | undefined) { this._s(':minVer', v); }
    /** Resource ID. Serialized as `:resId` */
    public get resourceId(): Int32Value | undefined { return this._g(':resId'); }
    public set resourceId(v: Int32Value | undefined) { this._s(':resId', v); }

}
/** Color Transform Definitions. Serialized as `dgm:colorsDef` */
export class ColorsDefinition extends OxmlPartRootElement<ColorDefinitionTitle | ColorTransformDescription | ColorTransformCategories | ColorTransformStyleLabel | ExtensionList> {

    public static override _Q = 'dgm:colorsDef';
    public static override _A = [':uniqueId',':minVer',];
    /** Unique ID. Serialized as `:uniqueId` */
    public get uniqueId(): StringValue | undefined { return this._g(':uniqueId'); }
    public set uniqueId(v: StringValue | undefined) { this._s(':uniqueId', v); }
    /** Minimum Version. Serialized as `:minVer` */
    public get minVersion(): StringValue | undefined { return this._g(':minVer'); }
    public set minVersion(v: StringValue | undefined) { this._s(':minVer', v); }

}

export function initDrawingDiagramsNamespace() {
    DiagramDefinitionExtensionList._C = {
        'dgm:ext': DiagramDefinitionExtension,
    };
    SampleDataType._C = {
        'dgm:dataModel': DataModel,
    };
    SampleDataType._D = {
        ':useDef': new OxmlAttr(':useDef', OxmlType.BooleanValue),
    };
    ColorData._C = {
        'dgm:dataModel': DataModel,
    };
    StyleData._C = {
        'dgm:dataModel': DataModel,
    };
    SampleData._C = {
        'dgm:dataModel': DataModel,
    };
    DiagramDefinitionExtension._C = {
        'dgm1611:autoBuNodeInfoLst': Dgm1611NumberDiagramInfoList,
        'dgm1612:lstStyle': Dgm1612TextListStyleType,
    };
    DiagramDefinitionExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PtExtensionList._C = {
        'a:ext': APtExtension,
    };
    TextBody._C = {
        'a:bodyPr': ABodyProperties,
        'a:lstStyle': AListStyle,
        'a:p': AParagraph,
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
    PropertySet._C = {
        'dgm:presLayoutVars': PresentationLayoutVariables,
        'dgm:style': Style,
    };
    PropertySet._D = {
        ':presAssocID': new OxmlAttr(':presAssocID', OxmlType.StringValue),
        ':presName': new OxmlAttr(':presName', OxmlType.StringValue),
        ':presStyleLbl': new OxmlAttr(':presStyleLbl', OxmlType.StringValue),
        ':presStyleIdx': new OxmlAttr(':presStyleIdx', OxmlType.Int32Value),
        ':presStyleCnt': new OxmlAttr(':presStyleCnt', OxmlType.Int32Value),
        ':loTypeId': new OxmlAttr(':loTypeId', OxmlType.StringValue),
        ':loCatId': new OxmlAttr(':loCatId', OxmlType.StringValue),
        ':qsTypeId': new OxmlAttr(':qsTypeId', OxmlType.StringValue),
        ':qsCatId': new OxmlAttr(':qsCatId', OxmlType.StringValue),
        ':csTypeId': new OxmlAttr(':csTypeId', OxmlType.StringValue),
        ':csCatId': new OxmlAttr(':csCatId', OxmlType.StringValue),
        ':coherent3DOff': new OxmlAttr(':coherent3DOff', OxmlType.BooleanValue),
        ':phldrT': new OxmlAttr(':phldrT', OxmlType.StringValue),
        ':phldr': new OxmlAttr(':phldr', OxmlType.BooleanValue),
        ':custAng': new OxmlAttr(':custAng', OxmlType.Int32Value),
        ':custFlipVert': new OxmlAttr(':custFlipVert', OxmlType.BooleanValue),
        ':custFlipHor': new OxmlAttr(':custFlipHor', OxmlType.BooleanValue),
        ':custSzX': new OxmlAttr(':custSzX', OxmlType.Int32Value),
        ':custSzY': new OxmlAttr(':custSzY', OxmlType.Int32Value),
        ':custScaleX': new OxmlAttr(':custScaleX', OxmlType.Int32Value),
        ':custScaleY': new OxmlAttr(':custScaleY', OxmlType.Int32Value),
        ':custT': new OxmlAttr(':custT', OxmlType.BooleanValue),
        ':custLinFactX': new OxmlAttr(':custLinFactX', OxmlType.Int32Value),
        ':custLinFactY': new OxmlAttr(':custLinFactY', OxmlType.Int32Value),
        ':custLinFactNeighborX': new OxmlAttr(':custLinFactNeighborX', OxmlType.Int32Value),
        ':custLinFactNeighborY': new OxmlAttr(':custLinFactNeighborY', OxmlType.Int32Value),
        ':custRadScaleRad': new OxmlAttr(':custRadScaleRad', OxmlType.Int32Value),
        ':custRadScaleInc': new OxmlAttr(':custRadScaleInc', OxmlType.Int32Value),
    };
    DataModelExtensionList._C = {
        'a:ext': ADataModelExtension,
    };
    Whole._C = {
        'a:ln': AOutline,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
    };
    Background._C = {
        'a:noFill': ANoFill,
        'a:solidFill': ASolidFill,
        'a:gradFill': AGradientFill,
        'a:blipFill': ABlipFill,
        'a:pattFill': APatternFill,
        'a:grpFill': AGroupFill,
        'a:effectLst': AEffectList,
        'a:effectDag': AEffectDag,
    };
    ConnectionList._C = {
        'dgm:cxn': Connection,
    };
    PointList._C = {
        'dgm:pt': Point,
    };
    StyleLabel._C = {
        'dgm:scene3d': Scene3D,
        'dgm:sp3d': Shape3D,
        'dgm:txPr': TextProperties,
        'dgm:style': Style,
        'dgm:extLst': ExtensionList,
    };
    StyleLabel._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    StyleDisplayCategories._C = {
        'dgm:cat': StyleDisplayCategory,
    };
    StyleLabelDescription._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    StyleDefinitionTitle._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    TextProperties._C = {
        'a:sp3d': AShape3DType,
        'a:flatTx': AFlatText,
    };
    Shape3D._C = {
        'a:bevelT': ABevelTop,
        'a:bevelB': ABevelBottom,
        'a:extrusionClr': AExtrusionColor,
        'a:contourClr': AContourColor,
        'a:extLst': AExtensionList,
    };
    Shape3D._D = {
        ':z': new OxmlAttr(':z', OxmlType.Int64Value),
        ':extrusionH': new OxmlAttr(':extrusionH', OxmlType.Int64Value),
        ':contourW': new OxmlAttr(':contourW', OxmlType.Int64Value),
        ':prstMaterial': new OxmlAttr(':prstMaterial', OxmlType.EnumValue, PresetMaterialTypeValuesArray),
    };
    Scene3D._C = {
        'a:camera': ACamera,
        'a:lightRig': ALightRig,
        'a:backdrop': ABackdrop,
        'a:extLst': AExtensionList,
    };
    StyleDisplayCategory._D = {
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':pri': new OxmlAttr(':pri', OxmlType.UInt32Value),
    };
    ResizeHandles._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, ResizeHandlesStringValuesArray),
    };
    AnimationLevel._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, AnimationLevelStringValuesArray),
    };
    AnimateOneByOne._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, AnimateOneByOneValuesArray),
    };
    HierarchyBranch._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, HierarchyBranchStyleValuesArray),
    };
    Direction._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, DirectionValuesArray),
    };
    BulletEnabled._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    PreferredNumberOfChildren._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    MaxNumberOfChildren._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    OrganizationChart._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    Style._C = {
        'a:lnRef': ALineReference,
        'a:fillRef': AFillReference,
        'a:effectRef': AEffectReference,
        'a:fontRef': AFontReference,
    };
    CategoryList._C = {
        'dgm:cat': Category,
    };
    Description._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    Title._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    Category._D = {
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':pri': new OxmlAttr(':pri', OxmlType.UInt32Value),
    };
    DataModel._C = {
        'dgm:ptLst': PointList,
        'dgm:cxnLst': ConnectionList,
        'dgm:bg': Background,
        'dgm:whole': Whole,
        'dgm:extLst': DataModelExtensionList,
    };
    DiagramChooseElse._C = {
        'dgm:alg': Algorithm,
        'dgm:shape': Shape,
        'dgm:presOf': PresentationOf,
        'dgm:constrLst': Constraints,
        'dgm:ruleLst': RuleList,
        'dgm:forEach': ForEach,
        'dgm:layoutNode': LayoutNode,
        'dgm:choose': Choose,
        'dgm:extLst': ExtensionList,
    };
    DiagramChooseElse._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    DiagramChooseIf._C = {
        'dgm:alg': Algorithm,
        'dgm:shape': Shape,
        'dgm:presOf': PresentationOf,
        'dgm:constrLst': Constraints,
        'dgm:ruleLst': RuleList,
        'dgm:forEach': ForEach,
        'dgm:layoutNode': LayoutNode,
        'dgm:choose': Choose,
        'dgm:extLst': ExtensionList,
    };
    DiagramChooseIf._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':axis': new OxmlAttr(':axis', OxmlType.EnumValue, AxisValuesArray),
        ':ptType': new OxmlAttr(':ptType', OxmlType.EnumValue, ElementValuesArray),
        ':hideLastTrans': new OxmlAttr(':hideLastTrans', OxmlType.ListValue),
        ':st': new OxmlAttr(':st', OxmlType.ListValue),
        ':cnt': new OxmlAttr(':cnt', OxmlType.ListValue),
        ':step': new OxmlAttr(':step', OxmlType.ListValue),
        ':func': new OxmlAttr(':func', OxmlType.EnumValue, FunctionValuesArray),
        ':arg': new OxmlAttr(':arg', OxmlType.StringValue),
        ':op': new OxmlAttr(':op', OxmlType.EnumValue, FunctionOperatorValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    Choose._C = {
        'dgm:if': DiagramChooseIf,
        'dgm:else': DiagramChooseElse,
    };
    Choose._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    LayoutNode._C = {
        'dgm:alg': Algorithm,
        'dgm:shape': Shape,
        'dgm:presOf': PresentationOf,
        'dgm:constrLst': Constraints,
        'dgm:ruleLst': RuleList,
        'dgm:varLst': VariableList,
        'dgm:forEach': ForEach,
        'dgm:layoutNode': LayoutNode,
        'dgm:choose': Choose,
        'dgm:extLst': ExtensionList,
    };
    LayoutNode._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':styleLbl': new OxmlAttr(':styleLbl', OxmlType.StringValue),
        ':chOrder': new OxmlAttr(':chOrder', OxmlType.EnumValue, ChildOrderValuesArray),
        ':moveWith': new OxmlAttr(':moveWith', OxmlType.StringValue),
    };
    ForEach._C = {
        'dgm:alg': Algorithm,
        'dgm:shape': Shape,
        'dgm:presOf': PresentationOf,
        'dgm:constrLst': Constraints,
        'dgm:ruleLst': RuleList,
        'dgm:forEach': ForEach,
        'dgm:layoutNode': LayoutNode,
        'dgm:choose': Choose,
        'dgm:extLst': ExtensionList,
    };
    ForEach._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
        ':axis': new OxmlAttr(':axis', OxmlType.EnumValue, AxisValuesArray),
        ':ptType': new OxmlAttr(':ptType', OxmlType.EnumValue, ElementValuesArray),
        ':hideLastTrans': new OxmlAttr(':hideLastTrans', OxmlType.ListValue),
        ':st': new OxmlAttr(':st', OxmlType.ListValue),
        ':cnt': new OxmlAttr(':cnt', OxmlType.ListValue),
        ':step': new OxmlAttr(':step', OxmlType.ListValue),
    };
    LayoutVariablePropertySetType._C = {
        'dgm:orgChart': OrganizationChart,
        'dgm:chMax': MaxNumberOfChildren,
        'dgm:chPref': PreferredNumberOfChildren,
        'dgm:bulletEnabled': BulletEnabled,
        'dgm:dir': Direction,
        'dgm:hierBranch': HierarchyBranch,
        'dgm:animOne': AnimateOneByOne,
        'dgm:animLvl': AnimationLevel,
        'dgm:resizeHandles': ResizeHandles,
    };
    PresentationLayoutVariables._C = {
        'dgm:orgChart': OrganizationChart,
        'dgm:chMax': MaxNumberOfChildren,
        'dgm:chPref': PreferredNumberOfChildren,
        'dgm:bulletEnabled': BulletEnabled,
        'dgm:dir': Direction,
        'dgm:hierBranch': HierarchyBranch,
        'dgm:animOne': AnimateOneByOne,
        'dgm:animLvl': AnimationLevel,
        'dgm:resizeHandles': ResizeHandles,
    };
    VariableList._C = {
        'dgm:orgChart': OrganizationChart,
        'dgm:chMax': MaxNumberOfChildren,
        'dgm:chPref': PreferredNumberOfChildren,
        'dgm:bulletEnabled': BulletEnabled,
        'dgm:dir': Direction,
        'dgm:hierBranch': HierarchyBranch,
        'dgm:animOne': AnimateOneByOne,
        'dgm:animLvl': AnimationLevel,
        'dgm:resizeHandles': ResizeHandles,
    };
    RuleList._C = {
        'dgm:rule': Rule,
    };
    Constraints._C = {
        'dgm:constr': Constraint,
    };
    PresentationOf._C = {
        'dgm:extLst': ExtensionList,
    };
    PresentationOf._D = {
        ':axis': new OxmlAttr(':axis', OxmlType.EnumValue, AxisValuesArray),
        ':ptType': new OxmlAttr(':ptType', OxmlType.EnumValue, ElementValuesArray),
        ':hideLastTrans': new OxmlAttr(':hideLastTrans', OxmlType.ListValue),
        ':st': new OxmlAttr(':st', OxmlType.ListValue),
        ':cnt': new OxmlAttr(':cnt', OxmlType.ListValue),
        ':step': new OxmlAttr(':step', OxmlType.ListValue),
    };
    Shape._C = {
        'dgm:adjLst': AdjustList,
        'dgm:extLst': ExtensionList,
    };
    Shape._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.DoubleValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        'r:blip': new OxmlAttr('r:blip', OxmlType.StringValue),
        ':zOrderOff': new OxmlAttr(':zOrderOff', OxmlType.Int32Value),
        ':hideGeom': new OxmlAttr(':hideGeom', OxmlType.BooleanValue),
        ':lkTxEntry': new OxmlAttr(':lkTxEntry', OxmlType.BooleanValue),
        ':blipPhldr': new OxmlAttr(':blipPhldr', OxmlType.BooleanValue),
    };
    Algorithm._C = {
        'dgm:param': Parameter,
        'dgm:extLst': ExtensionList,
    };
    Algorithm._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, AlgorithmValuesArray),
        ':rev': new OxmlAttr(':rev', OxmlType.UInt32Value),
    };
    Parameter._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ParameterIdValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    AdjustList._C = {
        'dgm:adj': Adjust,
    };
    Adjust._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
    };
    Rule._C = {
        'dgm:extLst': ExtensionList,
    };
    Rule._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConstraintValuesArray),
        ':for': new OxmlAttr(':for', OxmlType.EnumValue, ConstraintRelationshipValuesArray),
        ':forName': new OxmlAttr(':forName', OxmlType.StringValue),
        ':ptType': new OxmlAttr(':ptType', OxmlType.EnumValue, ElementValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
        ':fact': new OxmlAttr(':fact', OxmlType.DoubleValue),
        ':max': new OxmlAttr(':max', OxmlType.DoubleValue),
    };
    Constraint._C = {
        'dgm:extLst': ExtensionList,
    };
    Constraint._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConstraintValuesArray),
        ':for': new OxmlAttr(':for', OxmlType.EnumValue, ConstraintRelationshipValuesArray),
        ':forName': new OxmlAttr(':forName', OxmlType.StringValue),
        ':ptType': new OxmlAttr(':ptType', OxmlType.EnumValue, ElementValuesArray),
        ':refType': new OxmlAttr(':refType', OxmlType.EnumValue, ConstraintValuesArray),
        ':refFor': new OxmlAttr(':refFor', OxmlType.EnumValue, ConstraintRelationshipValuesArray),
        ':refForName': new OxmlAttr(':refForName', OxmlType.StringValue),
        ':refPtType': new OxmlAttr(':refPtType', OxmlType.EnumValue, ElementValuesArray),
        ':op': new OxmlAttr(':op', OxmlType.EnumValue, BoolOperatorValuesArray),
        ':val': new OxmlAttr(':val', OxmlType.DoubleValue),
        ':fact': new OxmlAttr(':fact', OxmlType.DoubleValue),
    };
    Connection._C = {
        'dgm:extLst': ExtensionList,
    };
    Connection._D = {
        ':modelId': new OxmlAttr(':modelId', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, ConnectionValuesArray),
        ':srcId': new OxmlAttr(':srcId', OxmlType.StringValue),
        ':destId': new OxmlAttr(':destId', OxmlType.StringValue),
        ':srcOrd': new OxmlAttr(':srcOrd', OxmlType.UInt32Value),
        ':destOrd': new OxmlAttr(':destOrd', OxmlType.UInt32Value),
        ':parTransId': new OxmlAttr(':parTransId', OxmlType.StringValue),
        ':sibTransId': new OxmlAttr(':sibTransId', OxmlType.StringValue),
        ':presId': new OxmlAttr(':presId', OxmlType.StringValue),
    };
    Point._C = {
        'dgm:prSet': PropertySet,
        'dgm:spPr': ShapeProperties,
        'dgm:t': TextBody,
        'dgm:extLst': PtExtensionList,
    };
    Point._D = {
        ':modelId': new OxmlAttr(':modelId', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, PointValuesArray),
        ':cxnId': new OxmlAttr(':cxnId', OxmlType.StringValue),
    };
    ColorTransformStyleLabel._C = {
        'dgm:fillClrLst': FillColorList,
        'dgm:linClrLst': LineColorList,
        'dgm:effectClrLst': EffectColorList,
        'dgm:txLinClrLst': TextLineColorList,
        'dgm:txFillClrLst': TextFillColorList,
        'dgm:txEffectClrLst': TextEffectColorList,
        'dgm:extLst': ExtensionList,
    };
    ColorTransformStyleLabel._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    ColorTransformCategories._C = {
        'dgm:cat': ColorTransformCategory,
    };
    ColorTransformDescription._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ColorDefinitionTitle._D = {
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':val': new OxmlAttr(':val', OxmlType.StringValue),
    };
    ExtensionList._C = {
        'a:ext': AExtension,
    };
    ColorsType._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ColorsType._D = {
        ':meth': new OxmlAttr(':meth', OxmlType.EnumValue, ColorApplicationMethodValuesArray),
        ':hueDir': new OxmlAttr(':hueDir', OxmlType.EnumValue, HueDirectionValuesArray),
    };
    TextEffectColorList._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    TextFillColorList._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    TextLineColorList._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    EffectColorList._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    LineColorList._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    FillColorList._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    ColorTransformCategory._D = {
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
        ':pri': new OxmlAttr(':pri', OxmlType.UInt32Value),
    };
    StyleDefinitionHeaderList._C = {
        'dgm:styleDefHdr': StyleDefinitionHeader,
    };
    StyleDefinitionHeader._C = {
        'dgm:title': StyleDefinitionTitle,
        'dgm:desc': StyleLabelDescription,
        'dgm:catLst': StyleDisplayCategories,
        'dgm:extLst': ExtensionList,
    };
    StyleDefinitionHeader._D = {
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
        ':resId': new OxmlAttr(':resId', OxmlType.Int32Value),
    };
    StyleDefinition._C = {
        'dgm:title': StyleDefinitionTitle,
        'dgm:desc': StyleLabelDescription,
        'dgm:catLst': StyleDisplayCategories,
        'dgm:scene3d': Scene3D,
        'dgm:styleLbl': StyleLabel,
        'dgm:extLst': ExtensionList,
    };
    StyleDefinition._D = {
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
    };
    RelationshipIds._D = {
        'r:dm': new OxmlAttr('r:dm', OxmlType.StringValue),
        'r:lo': new OxmlAttr('r:lo', OxmlType.StringValue),
        'r:qs': new OxmlAttr('r:qs', OxmlType.StringValue),
        'r:cs': new OxmlAttr('r:cs', OxmlType.StringValue),
    };
    LayoutDefinitionHeaderList._C = {
        'dgm:layoutDefHdr': LayoutDefinitionHeader,
    };
    LayoutDefinitionHeader._C = {
        'dgm:title': Title,
        'dgm:desc': Description,
        'dgm:catLst': CategoryList,
        'dgm:extLst': ExtensionList,
    };
    LayoutDefinitionHeader._D = {
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
        ':defStyle': new OxmlAttr(':defStyle', OxmlType.StringValue),
        ':resId': new OxmlAttr(':resId', OxmlType.Int32Value),
    };
    LayoutDefinition._C = {
        'dgm:title': Title,
        'dgm:desc': Description,
        'dgm:catLst': CategoryList,
        'dgm:sampData': SampleData,
        'dgm:styleData': StyleData,
        'dgm:clrData': ColorData,
        'dgm:layoutNode': LayoutNode,
        'dgm:extLst': DiagramDefinitionExtensionList,
    };
    LayoutDefinition._D = {
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
        ':defStyle': new OxmlAttr(':defStyle', OxmlType.StringValue),
    };
    DataModelRoot._C = {
        'dgm:ptLst': PointList,
        'dgm:cxnLst': ConnectionList,
        'dgm:bg': Background,
        'dgm:whole': Whole,
        'dgm:extLst': DataModelExtensionList,
    };
    ColorsDefinitionHeaderList._C = {
        'dgm:colorsDefHdr': ColorsDefinitionHeader,
    };
    ColorsDefinitionHeader._C = {
        'dgm:title': ColorDefinitionTitle,
        'dgm:desc': ColorTransformDescription,
        'dgm:catLst': ColorTransformCategories,
        'dgm:extLst': ExtensionList,
    };
    ColorsDefinitionHeader._D = {
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
        ':resId': new OxmlAttr(':resId', OxmlType.Int32Value),
    };
    ColorsDefinition._C = {
        'dgm:title': ColorDefinitionTitle,
        'dgm:desc': ColorTransformDescription,
        'dgm:catLst': ColorTransformCategories,
        'dgm:styleLbl': ColorTransformStyleLabel,
        'dgm:extLst': ExtensionList,
    };
    ColorsDefinition._D = {
        ':uniqueId': new OxmlAttr(':uniqueId', OxmlType.StringValue),
        ':minVer': new OxmlAttr(':minVer', OxmlType.StringValue),
    };
    return {
        prefix: 'dgm',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/diagram',
    };
}
