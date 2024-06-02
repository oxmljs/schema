import { OxmlPartRootElement } from '../../../framework/OxmlPartRootElement';
import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { StringValue } from '../../../framework/types/StringValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { Int64Value } from '../../../framework/types/Int64Value';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { ListValue } from '../../../framework/types/ListValue';
import { DoubleValue } from '../../../framework/types/DoubleValue';
import { BlackWhiteModeValues } from '../../Drawing';
import { PresetMaterialTypeValues } from '../../Drawing';
import { NumberDiagramInfoList as Dgm1611NumberDiagramInfoList } from '../../Office2019/Drawing/Diagram11';
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
export declare enum ColorApplicationMethodValues {
    /** Span. Serialized value: `span` */
    Span = "span",
    /** Cycle. Serialized value: `cycle` */
    Cycle = "cycle",
    /** Repeat. Serialized value: `repeat` */
    Repeat = "repeat"
}
export declare const ColorApplicationMethodValuesArray: readonly [ColorApplicationMethodValues.Span, ColorApplicationMethodValues.Cycle, ColorApplicationMethodValues.Repeat];
export declare enum HueDirectionValues {
    /** Clockwise Hue Direction. Serialized value: `cw` */
    Clockwise = "cw",
    /** Counterclockwise Hue Direction. Serialized value: `ccw` */
    Counterclockwise = "ccw"
}
export declare const HueDirectionValuesArray: readonly [HueDirectionValues.Clockwise, HueDirectionValues.Counterclockwise];
export declare enum PointValues {
    /** Node. Serialized value: `node` */
    Node = "node",
    /** Assistant Element. Serialized value: `asst` */
    Assistant = "asst",
    /** Document. Serialized value: `doc` */
    Document = "doc",
    /** Presentation. Serialized value: `pres` */
    Presentation = "pres",
    /** Parent Transition. Serialized value: `parTrans` */
    ParentTransition = "parTrans",
    /** Sibling Transition. Serialized value: `sibTrans` */
    SiblingTransition = "sibTrans"
}
export declare const PointValuesArray: readonly [PointValues.Node, PointValues.Assistant, PointValues.Document, PointValues.Presentation, PointValues.ParentTransition, PointValues.SiblingTransition];
export declare enum ConnectionValues {
    /** Parent Of. Serialized value: `parOf` */
    ParentOf = "parOf",
    /** Presentation Of. Serialized value: `presOf` */
    PresentationOf = "presOf",
    /** Presentation Parent Of. Serialized value: `presParOf` */
    PresentationParentOf = "presParOf",
    /** Unknown Relationship. Serialized value: `unknownRelationship` */
    UnknownRelationship = "unknownRelationship"
}
export declare const ConnectionValuesArray: readonly [ConnectionValues.ParentOf, ConnectionValues.PresentationOf, ConnectionValues.PresentationParentOf, ConnectionValues.UnknownRelationship];
export declare enum DirectionValues {
    /** Normal Direction. Serialized value: `norm` */
    Normal = "norm",
    /** Reversed Direction. Serialized value: `rev` */
    Reversed = "rev"
}
export declare const DirectionValuesArray: readonly [DirectionValues.Normal, DirectionValues.Reversed];
export declare enum HierarchyBranchStyleValues {
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** Hanging. Serialized value: `hang` */
    Hanging = "hang",
    /** Standard. Serialized value: `std` */
    Standard = "std",
    /** Initial. Serialized value: `init` */
    Initial = "init"
}
export declare const HierarchyBranchStyleValuesArray: readonly [HierarchyBranchStyleValues.Left, HierarchyBranchStyleValues.Right, HierarchyBranchStyleValues.Hanging, HierarchyBranchStyleValues.Standard, HierarchyBranchStyleValues.Initial];
export declare enum AnimateOneByOneValues {
    /** Disable One-by-One. Serialized value: `none` */
    None = "none",
    /** One By One. Serialized value: `one` */
    One = "one",
    /** By Branch One By One. Serialized value: `branch` */
    Branch = "branch"
}
export declare const AnimateOneByOneValuesArray: readonly [AnimateOneByOneValues.None, AnimateOneByOneValues.One, AnimateOneByOneValues.Branch];
export declare enum AnimationLevelStringValues {
    /** Disable Level At Once. Serialized value: `none` */
    None = "none",
    /** By Level Animation. Serialized value: `lvl` */
    Level = "lvl",
    /** From Center Animation. Serialized value: `ctr` */
    Center = "ctr"
}
export declare const AnimationLevelStringValuesArray: readonly [AnimationLevelStringValues.None, AnimationLevelStringValues.Level, AnimationLevelStringValues.Center];
export declare enum ResizeHandlesStringValues {
    /** Exact. Serialized value: `exact` */
    Exact = "exact",
    /** Relative. Serialized value: `rel` */
    Relative = "rel"
}
export declare const ResizeHandlesStringValuesArray: readonly [ResizeHandlesStringValues.Exact, ResizeHandlesStringValues.Relative];
export declare enum AlgorithmValues {
    /** Composite. Serialized value: `composite` */
    Composite = "composite",
    /** Connector Algorithm. Serialized value: `conn` */
    Connector = "conn",
    /** Cycle Algorithm. Serialized value: `cycle` */
    Cycle = "cycle",
    /** Hierarchy Child Algorithm. Serialized value: `hierChild` */
    HierarchyChild = "hierChild",
    /** Hierarchy Root Algorithm. Serialized value: `hierRoot` */
    HierarchyRoot = "hierRoot",
    /** Pyramid Algorithm. Serialized value: `pyra` */
    Pyramid = "pyra",
    /** Linear Algorithm. Serialized value: `lin` */
    Linear = "lin",
    /** Space Algorithm. Serialized value: `sp` */
    Space = "sp",
    /** Text Algorithm. Serialized value: `tx` */
    Text = "tx",
    /** Snake Algorithm. Serialized value: `snake` */
    Snake = "snake"
}
export declare const AlgorithmValuesArray: readonly [AlgorithmValues.Composite, AlgorithmValues.Connector, AlgorithmValues.Cycle, AlgorithmValues.HierarchyChild, AlgorithmValues.HierarchyRoot, AlgorithmValues.Pyramid, AlgorithmValues.Linear, AlgorithmValues.Space, AlgorithmValues.Text, AlgorithmValues.Snake];
export declare enum AxisValues {
    /** Self. Serialized value: `self` */
    Self = "self",
    /** Child. Serialized value: `ch` */
    Child = "ch",
    /** Descendant. Serialized value: `des` */
    Descendant = "des",
    /** Descendant or Self. Serialized value: `desOrSelf` */
    DescendantOrSelf = "desOrSelf",
    /** Parent. Serialized value: `par` */
    Parent = "par",
    /** Ancestor. Serialized value: `ancst` */
    Ancestor = "ancst",
    /** Ancestor or Self. Serialized value: `ancstOrSelf` */
    AncestorOrSelf = "ancstOrSelf",
    /** Follow Sibling. Serialized value: `followSib` */
    FollowSibling = "followSib",
    /** Preceding Sibling. Serialized value: `precedSib` */
    PrecedingSibling = "precedSib",
    /** Follow. Serialized value: `follow` */
    Follow = "follow",
    /** Preceding. Serialized value: `preced` */
    Preceding = "preced",
    /** Root. Serialized value: `root` */
    Root = "root",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const AxisValuesArray: readonly [AxisValues.Self, AxisValues.Child, AxisValues.Descendant, AxisValues.DescendantOrSelf, AxisValues.Parent, AxisValues.Ancestor, AxisValues.AncestorOrSelf, AxisValues.FollowSibling, AxisValues.PrecedingSibling, AxisValues.Follow, AxisValues.Preceding, AxisValues.Root, AxisValues.None];
export declare enum BoolOperatorValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Equal. Serialized value: `equ` */
    Equal = "equ",
    /** Greater Than or Equal to. Serialized value: `gte` */
    GreaterThanOrEqualTo = "gte",
    /** Less Than or Equal to. Serialized value: `lte` */
    LessThanOrEqualTo = "lte"
}
export declare const BoolOperatorValuesArray: readonly [BoolOperatorValues.None, BoolOperatorValues.Equal, BoolOperatorValues.GreaterThanOrEqualTo, BoolOperatorValues.LessThanOrEqualTo];
export declare enum ChildOrderValues {
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Top. Serialized value: `t` */
    Top = "t"
}
export declare const ChildOrderValuesArray: readonly [ChildOrderValues.Bottom, ChildOrderValues.Top];
export declare enum ConstraintValues {
    /** Unknown. Serialized value: `none` */
    None = "none",
    /** Alignment Offset. Serialized value: `alignOff` */
    AlignmentOffset = "alignOff",
    /** Beginning Margin. Serialized value: `begMarg` */
    BeginningMargin = "begMarg",
    /** Bending Distance. Serialized value: `bendDist` */
    BendingDistance = "bendDist",
    /** Beginning Padding. Serialized value: `begPad` */
    BeginningPadding = "begPad",
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Bottom Margin. Serialized value: `bMarg` */
    BottomMargin = "bMarg",
    /** Bottom Offset. Serialized value: `bOff` */
    BottomOffset = "bOff",
    /** Center Height. Serialized value: `ctrX` */
    CenterHeight = "ctrX",
    /** Center X Offset. Serialized value: `ctrXOff` */
    CenterXOffset = "ctrXOff",
    /** Center Width. Serialized value: `ctrY` */
    CenterWidth = "ctrY",
    /** Center Y Offset. Serialized value: `ctrYOff` */
    CenterYOffset = "ctrYOff",
    /** Connection Distance. Serialized value: `connDist` */
    ConnectionDistance = "connDist",
    /** Diameter. Serialized value: `diam` */
    Diameter = "diam",
    /** End Margin. Serialized value: `endMarg` */
    EndMargin = "endMarg",
    /** End Padding. Serialized value: `endPad` */
    EndPadding = "endPad",
    /** Height. Serialized value: `h` */
    Height = "h",
    /** Arrowhead Height. Serialized value: `hArH` */
    ArrowheadHeight = "hArH",
    /** Height Offset. Serialized value: `hOff` */
    HeightOffset = "hOff",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Left Margin. Serialized value: `lMarg` */
    LeftMargin = "lMarg",
    /** Left Offset. Serialized value: `lOff` */
    LeftOffset = "lOff",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** Right Margin. Serialized value: `rMarg` */
    RightMargin = "rMarg",
    /** Right Offset. Serialized value: `rOff` */
    RightOffset = "rOff",
    /** Primary Font Size. Serialized value: `primFontSz` */
    PrimaryFontSize = "primFontSz",
    /** Pyramid Accent Ratio. Serialized value: `pyraAcctRatio` */
    PyramidAccentRatio = "pyraAcctRatio",
    /** Secondary Font Size. Serialized value: `secFontSz` */
    SecondaryFontSize = "secFontSz",
    /** Sibling Spacing. Serialized value: `sibSp` */
    SiblingSpacing = "sibSp",
    /** Secondary Sibling Spacing. Serialized value: `secSibSp` */
    SecondarySiblingSpacing = "secSibSp",
    /** Spacing. Serialized value: `sp` */
    Spacing = "sp",
    /** Stem Thickness. Serialized value: `stemThick` */
    StemThickness = "stemThick",
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Top Margin. Serialized value: `tMarg` */
    TopMargin = "tMarg",
    /** Top Offset. Serialized value: `tOff` */
    TopOffset = "tOff",
    /** User Defined A. Serialized value: `userA` */
    UserDefinedA = "userA",
    /** User Defined B. Serialized value: `userB` */
    UserDefinedB = "userB",
    /** User Defined C. Serialized value: `userC` */
    UserDefinedC = "userC",
    /** User Defined D. Serialized value: `userD` */
    UserDefinedD = "userD",
    /** User Defined E. Serialized value: `userE` */
    UserDefinedE = "userE",
    /** User Defined F. Serialized value: `userF` */
    UserDefinedF = "userF",
    /** User Defined G. Serialized value: `userG` */
    UserDefinedG = "userG",
    /** User Defined H. Serialized value: `userH` */
    UserDefinedH = "userH",
    /** User Defined I. Serialized value: `userI` */
    UserDefinedI = "userI",
    /** User Defined J. Serialized value: `userJ` */
    UserDefinedJ = "userJ",
    /** User Defined K. Serialized value: `userK` */
    UserDefinedK = "userK",
    /** User Defined L. Serialized value: `userL` */
    UserDefinedL = "userL",
    /** User Defined M. Serialized value: `userM` */
    UserDefinedM = "userM",
    /** User Defined N. Serialized value: `userN` */
    UserDefinedN = "userN",
    /** User Defined O. Serialized value: `userO` */
    UserDefinedO = "userO",
    /** User Defined P. Serialized value: `userP` */
    UserDefinedP = "userP",
    /** User Defined Q. Serialized value: `userQ` */
    UserDefinedQ = "userQ",
    /** User Defined R. Serialized value: `userR` */
    UserDefinedR = "userR",
    /** User Defined S. Serialized value: `userS` */
    UserDefinedS = "userS",
    /** User Defined T. Serialized value: `userT` */
    UserDefinedT = "userT",
    /** User Defined U. Serialized value: `userU` */
    UserDefinedU = "userU",
    /** User Defined V. Serialized value: `userV` */
    UserDefinedV = "userV",
    /** User Defined W. Serialized value: `userW` */
    UserDefinedW = "userW",
    /** User Defined X. Serialized value: `userX` */
    UserDefinedX = "userX",
    /** User Defined Y. Serialized value: `userY` */
    UserDefinedY = "userY",
    /** User Defined Z. Serialized value: `userZ` */
    UserDefinedZ = "userZ",
    /** Width. Serialized value: `w` */
    Width = "w",
    /** Arrowhead Width. Serialized value: `wArH` */
    ArrowheadWidth = "wArH",
    /** Width Offset. Serialized value: `wOff` */
    WidthOffset = "wOff"
}
export declare const ConstraintValuesArray: readonly [ConstraintValues.None, ConstraintValues.AlignmentOffset, ConstraintValues.BeginningMargin, ConstraintValues.BendingDistance, ConstraintValues.BeginningPadding, ConstraintValues.Bottom, ConstraintValues.BottomMargin, ConstraintValues.BottomOffset, ConstraintValues.CenterHeight, ConstraintValues.CenterXOffset, ConstraintValues.CenterWidth, ConstraintValues.CenterYOffset, ConstraintValues.ConnectionDistance, ConstraintValues.Diameter, ConstraintValues.EndMargin, ConstraintValues.EndPadding, ConstraintValues.Height, ConstraintValues.ArrowheadHeight, ConstraintValues.HeightOffset, ConstraintValues.Left, ConstraintValues.LeftMargin, ConstraintValues.LeftOffset, ConstraintValues.Right, ConstraintValues.RightMargin, ConstraintValues.RightOffset, ConstraintValues.PrimaryFontSize, ConstraintValues.PyramidAccentRatio, ConstraintValues.SecondaryFontSize, ConstraintValues.SiblingSpacing, ConstraintValues.SecondarySiblingSpacing, ConstraintValues.Spacing, ConstraintValues.StemThickness, ConstraintValues.Top, ConstraintValues.TopMargin, ConstraintValues.TopOffset, ConstraintValues.UserDefinedA, ConstraintValues.UserDefinedB, ConstraintValues.UserDefinedC, ConstraintValues.UserDefinedD, ConstraintValues.UserDefinedE, ConstraintValues.UserDefinedF, ConstraintValues.UserDefinedG, ConstraintValues.UserDefinedH, ConstraintValues.UserDefinedI, ConstraintValues.UserDefinedJ, ConstraintValues.UserDefinedK, ConstraintValues.UserDefinedL, ConstraintValues.UserDefinedM, ConstraintValues.UserDefinedN, ConstraintValues.UserDefinedO, ConstraintValues.UserDefinedP, ConstraintValues.UserDefinedQ, ConstraintValues.UserDefinedR, ConstraintValues.UserDefinedS, ConstraintValues.UserDefinedT, ConstraintValues.UserDefinedU, ConstraintValues.UserDefinedV, ConstraintValues.UserDefinedW, ConstraintValues.UserDefinedX, ConstraintValues.UserDefinedY, ConstraintValues.UserDefinedZ, ConstraintValues.Width, ConstraintValues.ArrowheadWidth, ConstraintValues.WidthOffset];
export declare enum ConstraintRelationshipValues {
    /** Self. Serialized value: `self` */
    Self = "self",
    /** Child. Serialized value: `ch` */
    Child = "ch",
    /** Descendant. Serialized value: `des` */
    Descendant = "des"
}
export declare const ConstraintRelationshipValuesArray: readonly [ConstraintRelationshipValues.Self, ConstraintRelationshipValues.Child, ConstraintRelationshipValues.Descendant];
export declare enum ElementValues {
    /** All. Serialized value: `all` */
    All = "all",
    /** Document. Serialized value: `doc` */
    Document = "doc",
    /** Node. Serialized value: `node` */
    Node = "node",
    /** Normal. Serialized value: `norm` */
    Normal = "norm",
    /** Non Normal. Serialized value: `nonNorm` */
    NonNormal = "nonNorm",
    /** Assistant. Serialized value: `asst` */
    Assistant = "asst",
    /** Non Assistant. Serialized value: `nonAsst` */
    NonAssistant = "nonAsst",
    /** Parent Transition. Serialized value: `parTrans` */
    ParentTransition = "parTrans",
    /** Presentation. Serialized value: `pres` */
    Presentation = "pres",
    /** Sibling Transition. Serialized value: `sibTrans` */
    SiblingTransition = "sibTrans"
}
export declare const ElementValuesArray: readonly [ElementValues.All, ElementValues.Document, ElementValues.Node, ElementValues.Normal, ElementValues.NonNormal, ElementValues.Assistant, ElementValues.NonAssistant, ElementValues.ParentTransition, ElementValues.Presentation, ElementValues.SiblingTransition];
export declare enum ParameterIdValues {
    /** Horizontal Alignment. Serialized value: `horzAlign` */
    HorizontalAlignment = "horzAlign",
    /** Vertical Alignment. Serialized value: `vertAlign` */
    VerticalAlignment = "vertAlign",
    /** Child Direction. Serialized value: `chDir` */
    ChildDirection = "chDir",
    /** Child Alignment. Serialized value: `chAlign` */
    ChildAlignment = "chAlign",
    /** Secondary Child Alignment. Serialized value: `secChAlign` */
    SecondaryChildAlignment = "secChAlign",
    /** Linear Direction. Serialized value: `linDir` */
    LinearDirection = "linDir",
    /** Secondary Linear Direction. Serialized value: `secLinDir` */
    SecondaryLinearDirection = "secLinDir",
    /** Start Element. Serialized value: `stElem` */
    StartElement = "stElem",
    /** Bend Point. Serialized value: `bendPt` */
    BendPoint = "bendPt",
    /** Connection Route. Serialized value: `connRout` */
    ConnectionRoute = "connRout",
    /** Beginning Arrowhead Style. Serialized value: `begSty` */
    BeginningArrowheadStyle = "begSty",
    /** End Style. Serialized value: `endSty` */
    EndStyle = "endSty",
    /** Connector Dimension. Serialized value: `dim` */
    ConnectorDimension = "dim",
    /** Rotation Path. Serialized value: `rotPath` */
    RotationPath = "rotPath",
    /** Center Shape Mapping. Serialized value: `ctrShpMap` */
    CenterShapeMapping = "ctrShpMap",
    /** Node Horizontal Alignment. Serialized value: `nodeHorzAlign` */
    NodeHorizontalAlignment = "nodeHorzAlign",
    /** Node Vertical Alignment. Serialized value: `nodeVertAlign` */
    NodeVerticalAlignment = "nodeVertAlign",
    /** Fallback Scale. Serialized value: `fallback` */
    FallbackScale = "fallback",
    /** Text Direction. Serialized value: `txDir` */
    TextDirection = "txDir",
    /** Pyramid Accent Position. Serialized value: `pyraAcctPos` */
    PyramidAccentPosition = "pyraAcctPos",
    /** Pyramid Accent Text Margin. Serialized value: `pyraAcctTxMar` */
    PyramidAccentTextMargin = "pyraAcctTxMar",
    /** Text Block Direction. Serialized value: `txBlDir` */
    TextBlockDirection = "txBlDir",
    /** Text Anchor Horizontal. Serialized value: `txAnchorHorz` */
    TextAnchorHorizontal = "txAnchorHorz",
    /** Text Anchor Vertical. Serialized value: `txAnchorVert` */
    TextAnchorVertical = "txAnchorVert",
    /** Text Anchor Horizontal With Children. Serialized value: `txAnchorHorzCh` */
    TextAnchorHorizontalWithChildren = "txAnchorHorzCh",
    /** Text Anchor Vertical With Children. Serialized value: `txAnchorVertCh` */
    TextAnchorVerticalWithChildren = "txAnchorVertCh",
    /** Parent Text Left-to-Right Alignment. Serialized value: `parTxLTRAlign` */
    ParentTextLeftToRightAlignment = "parTxLTRAlign",
    /** Parent Text Right-to-Left Alignment. Serialized value: `parTxRTLAlign` */
    ParentTextRightToLeftAlignment = "parTxRTLAlign",
    /** Shape Text Left-to-Right Alignment. Serialized value: `shpTxLTRAlignCh` */
    ShapeTextLeftToRightAlignment = "shpTxLTRAlignCh",
    /** Shape Text Right-to-Left Alignment. Serialized value: `shpTxRTLAlignCh` */
    ShapeTextRightToLeftAlignment = "shpTxRTLAlignCh",
    /** Auto Text Rotation. Serialized value: `autoTxRot` */
    AutoTextRotation = "autoTxRot",
    /** Grow Direction. Serialized value: `grDir` */
    GrowDirection = "grDir",
    /** Flow Direction. Serialized value: `flowDir` */
    FlowDirection = "flowDir",
    /** Continue Direction. Serialized value: `contDir` */
    ContinueDirection = "contDir",
    /** Breakpoint. Serialized value: `bkpt` */
    Breakpoint = "bkpt",
    /** Offset. Serialized value: `off` */
    Offset = "off",
    /** Hierarchy Alignment. Serialized value: `hierAlign` */
    HierarchyAlignment = "hierAlign",
    /** Breakpoint Fixed Value. Serialized value: `bkPtFixedVal` */
    BreakpointFixedValue = "bkPtFixedVal",
    /** Start Bullets At Level. Serialized value: `stBulletLvl` */
    StartBulletsAtLevel = "stBulletLvl",
    /** Start Angle. Serialized value: `stAng` */
    StartAngle = "stAng",
    /** Span Angle. Serialized value: `spanAng` */
    SpanAngle = "spanAng",
    /** Aspect Ratio. Serialized value: `ar` */
    AspectRatio = "ar",
    /** Line Spacing Parent. Serialized value: `lnSpPar` */
    LineSpacingParent = "lnSpPar",
    /** Line Spacing After Parent Paragraph. Serialized value: `lnSpAfParP` */
    LineSpacingAfterParentParagraph = "lnSpAfParP",
    /** Line Spacing Children. Serialized value: `lnSpCh` */
    LineSpacingChildren = "lnSpCh",
    /** Line Spacing After Children Paragraph. Serialized value: `lnSpAfChP` */
    LineSpacingAfterChildrenParagraph = "lnSpAfChP",
    /** Route Shortest Distance. Serialized value: `rtShortDist` */
    RouteShortestDistance = "rtShortDist",
    /** Text Alignment. Serialized value: `alignTx` */
    TextAlignment = "alignTx",
    /** Pyramid Level Node. Serialized value: `pyraLvlNode` */
    PyramidLevelNode = "pyraLvlNode",
    /** Pyramid Accent Background Node. Serialized value: `pyraAcctBkgdNode` */
    PyramidAccentBackgroundNode = "pyraAcctBkgdNode",
    /** Pyramid Accent Text Node. Serialized value: `pyraAcctTxNode` */
    PyramidAccentTextNode = "pyraAcctTxNode",
    /** Source Node. Serialized value: `srcNode` */
    SourceNode = "srcNode",
    /** Destination Node. Serialized value: `dstNode` */
    DestinationNode = "dstNode",
    /** Beginning Points. Serialized value: `begPts` */
    BeginningPoints = "begPts",
    /** End Points. Serialized value: `endPts` */
    EndPoints = "endPts"
}
export declare const ParameterIdValuesArray: readonly [ParameterIdValues.HorizontalAlignment, ParameterIdValues.VerticalAlignment, ParameterIdValues.ChildDirection, ParameterIdValues.ChildAlignment, ParameterIdValues.SecondaryChildAlignment, ParameterIdValues.LinearDirection, ParameterIdValues.SecondaryLinearDirection, ParameterIdValues.StartElement, ParameterIdValues.BendPoint, ParameterIdValues.ConnectionRoute, ParameterIdValues.BeginningArrowheadStyle, ParameterIdValues.EndStyle, ParameterIdValues.ConnectorDimension, ParameterIdValues.RotationPath, ParameterIdValues.CenterShapeMapping, ParameterIdValues.NodeHorizontalAlignment, ParameterIdValues.NodeVerticalAlignment, ParameterIdValues.FallbackScale, ParameterIdValues.TextDirection, ParameterIdValues.PyramidAccentPosition, ParameterIdValues.PyramidAccentTextMargin, ParameterIdValues.TextBlockDirection, ParameterIdValues.TextAnchorHorizontal, ParameterIdValues.TextAnchorVertical, ParameterIdValues.TextAnchorHorizontalWithChildren, ParameterIdValues.TextAnchorVerticalWithChildren, ParameterIdValues.ParentTextLeftToRightAlignment, ParameterIdValues.ParentTextRightToLeftAlignment, ParameterIdValues.ShapeTextLeftToRightAlignment, ParameterIdValues.ShapeTextRightToLeftAlignment, ParameterIdValues.AutoTextRotation, ParameterIdValues.GrowDirection, ParameterIdValues.FlowDirection, ParameterIdValues.ContinueDirection, ParameterIdValues.Breakpoint, ParameterIdValues.Offset, ParameterIdValues.HierarchyAlignment, ParameterIdValues.BreakpointFixedValue, ParameterIdValues.StartBulletsAtLevel, ParameterIdValues.StartAngle, ParameterIdValues.SpanAngle, ParameterIdValues.AspectRatio, ParameterIdValues.LineSpacingParent, ParameterIdValues.LineSpacingAfterParentParagraph, ParameterIdValues.LineSpacingChildren, ParameterIdValues.LineSpacingAfterChildrenParagraph, ParameterIdValues.RouteShortestDistance, ParameterIdValues.TextAlignment, ParameterIdValues.PyramidLevelNode, ParameterIdValues.PyramidAccentBackgroundNode, ParameterIdValues.PyramidAccentTextNode, ParameterIdValues.SourceNode, ParameterIdValues.DestinationNode, ParameterIdValues.BeginningPoints, ParameterIdValues.EndPoints];
export declare enum FunctionValues {
    /** Count. Serialized value: `cnt` */
    Count = "cnt",
    /** Position. Serialized value: `pos` */
    Position = "pos",
    /** Reverse Position. Serialized value: `revPos` */
    ReversePosition = "revPos",
    /** Position Even. Serialized value: `posEven` */
    PositionEven = "posEven",
    /** Position Odd. Serialized value: `posOdd` */
    PositionOdd = "posOdd",
    /** Variable. Serialized value: `var` */
    Variable = "var",
    /** Depth. Serialized value: `depth` */
    Depth = "depth",
    /** Max Depth. Serialized value: `maxDepth` */
    MaxDepth = "maxDepth"
}
export declare const FunctionValuesArray: readonly [FunctionValues.Count, FunctionValues.Position, FunctionValues.ReversePosition, FunctionValues.PositionEven, FunctionValues.PositionOdd, FunctionValues.Variable, FunctionValues.Depth, FunctionValues.MaxDepth];
export declare enum FunctionOperatorValues {
    /** Equal. Serialized value: `equ` */
    Equal = "equ",
    /** Not Equal To. Serialized value: `neq` */
    NotEqualTo = "neq",
    /** Greater Than. Serialized value: `gt` */
    GreaterThan = "gt",
    /** Less Than. Serialized value: `lt` */
    LessThan = "lt",
    /** Greater Than or Equal to. Serialized value: `gte` */
    GreaterThanOrEqualTo = "gte",
    /** Less Than or Equal to. Serialized value: `lte` */
    LessThanOrEqualTo = "lte"
}
export declare const FunctionOperatorValuesArray: readonly [FunctionOperatorValues.Equal, FunctionOperatorValues.NotEqualTo, FunctionOperatorValues.GreaterThan, FunctionOperatorValues.LessThan, FunctionOperatorValues.GreaterThanOrEqualTo, FunctionOperatorValues.LessThanOrEqualTo];
export declare enum HorizontalAlignmentValues {
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const HorizontalAlignmentValuesArray: readonly [HorizontalAlignmentValues.Left, HorizontalAlignmentValues.Center, HorizontalAlignmentValues.Right, HorizontalAlignmentValues.None];
export declare enum ChildDirectionValues {
    /** Horizontal. Serialized value: `horz` */
    Horizontal = "horz",
    /** Vertical. Serialized value: `vert` */
    Vertical = "vert"
}
export declare const ChildDirectionValuesArray: readonly [ChildDirectionValues.Horizontal, ChildDirectionValues.Vertical];
export declare enum ChildAlignmentValues {
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r"
}
export declare const ChildAlignmentValuesArray: readonly [ChildAlignmentValues.Top, ChildAlignmentValues.Bottom, ChildAlignmentValues.Left, ChildAlignmentValues.Right];
export declare enum SecondaryChildAlignmentValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r"
}
export declare const SecondaryChildAlignmentValuesArray: readonly [SecondaryChildAlignmentValues.None, SecondaryChildAlignmentValues.Top, SecondaryChildAlignmentValues.Bottom, SecondaryChildAlignmentValues.Left, SecondaryChildAlignmentValues.Right];
export declare enum LinearDirectionValues {
    /** From Left. Serialized value: `fromL` */
    FromLeft = "fromL",
    /** From Right. Serialized value: `fromR` */
    FromRight = "fromR",
    /** From Top. Serialized value: `fromT` */
    FromTop = "fromT",
    /** From Bottom. Serialized value: `fromB` */
    FromBottom = "fromB"
}
export declare const LinearDirectionValuesArray: readonly [LinearDirectionValues.FromLeft, LinearDirectionValues.FromRight, LinearDirectionValues.FromTop, LinearDirectionValues.FromBottom];
export declare enum SecondaryLinearDirectionValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** From Left. Serialized value: `fromL` */
    FromLeft = "fromL",
    /** From Right. Serialized value: `fromR` */
    FromRight = "fromR",
    /** From Top. Serialized value: `fromT` */
    FromTop = "fromT",
    /** From Bottom. Serialized value: `fromB` */
    FromBottom = "fromB"
}
export declare const SecondaryLinearDirectionValuesArray: readonly [SecondaryLinearDirectionValues.None, SecondaryLinearDirectionValues.FromLeft, SecondaryLinearDirectionValues.FromRight, SecondaryLinearDirectionValues.FromTop, SecondaryLinearDirectionValues.FromBottom];
export declare enum StartingElementValues {
    /** Node. Serialized value: `node` */
    Node = "node",
    /** Transition. Serialized value: `trans` */
    Transition = "trans"
}
export declare const StartingElementValuesArray: readonly [StartingElementValues.Node, StartingElementValues.Transition];
export declare enum RotationPathValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Along Path. Serialized value: `alongPath` */
    AlongPath = "alongPath"
}
export declare const RotationPathValuesArray: readonly [RotationPathValues.None, RotationPathValues.AlongPath];
export declare enum CenterShapeMappingValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** First Node. Serialized value: `fNode` */
    FirstNode = "fNode"
}
export declare const CenterShapeMappingValuesArray: readonly [CenterShapeMappingValues.None, CenterShapeMappingValues.FirstNode];
export declare enum BendPointValues {
    /** Beginning. Serialized value: `beg` */
    Beginning = "beg",
    /** Default. Serialized value: `def` */
    Default = "def",
    /** End. Serialized value: `end` */
    End = "end"
}
export declare const BendPointValuesArray: readonly [BendPointValues.Beginning, BendPointValues.Default, BendPointValues.End];
export declare enum ConnectorRoutingValues {
    /** Straight. Serialized value: `stra` */
    Straight = "stra",
    /** Bending. Serialized value: `bend` */
    Bending = "bend",
    /** Curve. Serialized value: `curve` */
    Curve = "curve",
    /** Long Curve. Serialized value: `longCurve` */
    LongCurve = "longCurve"
}
export declare const ConnectorRoutingValuesArray: readonly [ConnectorRoutingValues.Straight, ConnectorRoutingValues.Bending, ConnectorRoutingValues.Curve, ConnectorRoutingValues.LongCurve];
export declare enum ArrowheadStyleValues {
    /** Auto. Serialized value: `auto` */
    Auto = "auto",
    /** Arrowhead Present. Serialized value: `arr` */
    Arrow = "arr",
    /** No Arrowhead. Serialized value: `noArr` */
    NoArrow = "noArr"
}
export declare const ArrowheadStyleValuesArray: readonly [ArrowheadStyleValues.Auto, ArrowheadStyleValues.Arrow, ArrowheadStyleValues.NoArrow];
export declare enum ConnectorDimensionValues {
    /** 1 Dimension. Serialized value: `1D` */
    OneDimension = "1D",
    /** 2 Dimensions. Serialized value: `2D` */
    TwoDimension = "2D",
    /** Custom. Serialized value: `cust` */
    Custom = "cust"
}
export declare const ConnectorDimensionValuesArray: readonly [ConnectorDimensionValues.OneDimension, ConnectorDimensionValues.TwoDimension, ConnectorDimensionValues.Custom];
export declare enum ConnectorPointValues {
    /** Auto. Serialized value: `auto` */
    Auto = "auto",
    /** Bottom Center. Serialized value: `bCtr` */
    BottomCenter = "bCtr",
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Middle Left. Serialized value: `midL` */
    MiddleLeft = "midL",
    /** Middle Right. Serialized value: `midR` */
    MiddleRight = "midR",
    /** Top Center. Serialized value: `tCtr` */
    TopCenter = "tCtr",
    /** Bottom Left. Serialized value: `bL` */
    BottomLeft = "bL",
    /** Bottom Right. Serialized value: `bR` */
    BottomRight = "bR",
    /** Top Left. Serialized value: `tL` */
    TopLeft = "tL",
    /** Top Right. Serialized value: `tR` */
    TopRight = "tR",
    /** Radial. Serialized value: `radial` */
    Radial = "radial"
}
export declare const ConnectorPointValuesArray: readonly [ConnectorPointValues.Auto, ConnectorPointValues.BottomCenter, ConnectorPointValues.Center, ConnectorPointValues.MiddleLeft, ConnectorPointValues.MiddleRight, ConnectorPointValues.TopCenter, ConnectorPointValues.BottomLeft, ConnectorPointValues.BottomRight, ConnectorPointValues.TopLeft, ConnectorPointValues.TopRight, ConnectorPointValues.Radial];
export declare enum NodeHorizontalAlignmentValues {
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Right. Serialized value: `r` */
    Right = "r"
}
export declare const NodeHorizontalAlignmentValuesArray: readonly [NodeHorizontalAlignmentValues.Left, NodeHorizontalAlignmentValues.Center, NodeHorizontalAlignmentValues.Right];
export declare enum NodeVerticalAlignmentValues {
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Middle. Serialized value: `mid` */
    Middle = "mid",
    /** Bottom. Serialized value: `b` */
    Bottom = "b"
}
export declare const NodeVerticalAlignmentValuesArray: readonly [NodeVerticalAlignmentValues.Top, NodeVerticalAlignmentValues.Middle, NodeVerticalAlignmentValues.Bottom];
export declare enum FallbackDimensionValues {
    /** 1 Dimension. Serialized value: `1D` */
    OneDimension = "1D",
    /** 2 Dimensions. Serialized value: `2D` */
    TwoDimension = "2D"
}
export declare const FallbackDimensionValuesArray: readonly [FallbackDimensionValues.OneDimension, FallbackDimensionValues.TwoDimension];
export declare enum TextDirectionValues {
    /** From Top. Serialized value: `fromT` */
    FromTop = "fromT",
    /** From Bottom. Serialized value: `fromB` */
    FromBottom = "fromB"
}
export declare const TextDirectionValuesArray: readonly [TextDirectionValues.FromTop, TextDirectionValues.FromBottom];
export declare enum PyramidAccentPositionValues {
    /** Before. Serialized value: `bef` */
    Before = "bef",
    /** Pyramid Accent After. Serialized value: `aft` */
    After = "aft"
}
export declare const PyramidAccentPositionValuesArray: readonly [PyramidAccentPositionValues.Before, PyramidAccentPositionValues.After];
export declare enum PyramidAccentTextMarginValues {
    /** Step. Serialized value: `step` */
    Step = "step",
    /** Stack. Serialized value: `stack` */
    Stack = "stack"
}
export declare const PyramidAccentTextMarginValuesArray: readonly [PyramidAccentTextMarginValues.Step, PyramidAccentTextMarginValues.Stack];
export declare enum TextBlockDirectionValues {
    /** Horizontal. Serialized value: `horz` */
    Horizontal = "horz",
    /** Vertical Direction. Serialized value: `vert` */
    Vertical = "vert"
}
export declare const TextBlockDirectionValuesArray: readonly [TextBlockDirectionValues.Horizontal, TextBlockDirectionValues.Vertical];
export declare enum TextAnchorHorizontalValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Center. Serialized value: `ctr` */
    Center = "ctr"
}
export declare const TextAnchorHorizontalValuesArray: readonly [TextAnchorHorizontalValues.None, TextAnchorHorizontalValues.Center];
export declare enum TextAnchorVerticalValues {
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Middle. Serialized value: `mid` */
    Middle = "mid",
    /** Bottom. Serialized value: `b` */
    Bottom = "b"
}
export declare const TextAnchorVerticalValuesArray: readonly [TextAnchorVerticalValues.Top, TextAnchorVerticalValues.Middle, TextAnchorVerticalValues.Bottom];
export declare enum TextAlignmentValues {
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Right. Serialized value: `r` */
    Right = "r"
}
export declare const TextAlignmentValuesArray: readonly [TextAlignmentValues.Left, TextAlignmentValues.Center, TextAlignmentValues.Right];
export declare enum AutoTextRotationValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Upright. Serialized value: `upr` */
    Upright = "upr",
    /** Gravity. Serialized value: `grav` */
    Gravity = "grav"
}
export declare const AutoTextRotationValuesArray: readonly [AutoTextRotationValues.None, AutoTextRotationValues.Upright, AutoTextRotationValues.Gravity];
export declare enum GrowDirectionValues {
    /** Top Left. Serialized value: `tL` */
    TopLeft = "tL",
    /** Top Right. Serialized value: `tR` */
    TopRight = "tR",
    /** Bottom Left. Serialized value: `bL` */
    BottomLeft = "bL",
    /** Bottom Right. Serialized value: `bR` */
    BottomRight = "bR"
}
export declare const GrowDirectionValuesArray: readonly [GrowDirectionValues.TopLeft, GrowDirectionValues.TopRight, GrowDirectionValues.BottomLeft, GrowDirectionValues.BottomRight];
export declare enum FlowDirectionValues {
    /** Row. Serialized value: `row` */
    Row = "row",
    /** Column. Serialized value: `col` */
    Column = "col"
}
export declare const FlowDirectionValuesArray: readonly [FlowDirectionValues.Row, FlowDirectionValues.Column];
export declare enum ContinueDirectionValues {
    /** Reverse Direction. Serialized value: `revDir` */
    ReverseDirection = "revDir",
    /** Same Direction. Serialized value: `sameDir` */
    SameDirection = "sameDir"
}
export declare const ContinueDirectionValuesArray: readonly [ContinueDirectionValues.ReverseDirection, ContinueDirectionValues.SameDirection];
export declare enum BreakpointValues {
    /** End of Canvas. Serialized value: `endCnv` */
    EndCanvas = "endCnv",
    /** Balanced. Serialized value: `bal` */
    Balanced = "bal",
    /** Fixed. Serialized value: `fixed` */
    Fixed = "fixed"
}
export declare const BreakpointValuesArray: readonly [BreakpointValues.EndCanvas, BreakpointValues.Balanced, BreakpointValues.Fixed];
export declare enum OffsetValues {
    /** Center. Serialized value: `ctr` */
    Center = "ctr",
    /** Offset. Serialized value: `off` */
    Offset = "off"
}
export declare const OffsetValuesArray: readonly [OffsetValues.Center, OffsetValues.Offset];
export declare enum HierarchyAlignmentValues {
    /** Top Left. Serialized value: `tL` */
    TopLeft = "tL",
    /** Top Right. Serialized value: `tR` */
    TopRight = "tR",
    /** Top Center Children. Serialized value: `tCtrCh` */
    TopCenterChildren = "tCtrCh",
    /** Top Center Descendants. Serialized value: `tCtrDes` */
    TopCenterDescendants = "tCtrDes",
    /** Bottom Left. Serialized value: `bL` */
    BottomLeft = "bL",
    /** Bottom Right. Serialized value: `bR` */
    BottomRight = "bR",
    /** Bottom Center Child. Serialized value: `bCtrCh` */
    BottomCenterChild = "bCtrCh",
    /** Bottom Center Descendant. Serialized value: `bCtrDes` */
    BottomCenterDescendant = "bCtrDes",
    /** Left Top. Serialized value: `lT` */
    LeftTop = "lT",
    /** Left Bottom. Serialized value: `lB` */
    LeftBottom = "lB",
    /** Left Center Child. Serialized value: `lCtrCh` */
    LeftCenterChild = "lCtrCh",
    /** Left Center Descendant. Serialized value: `lCtrDes` */
    LeftCenterDescendant = "lCtrDes",
    /** Right Top. Serialized value: `rT` */
    RightTop = "rT",
    /** Right Bottom. Serialized value: `rB` */
    RightBottom = "rB",
    /** Right Center Children. Serialized value: `rCtrCh` */
    RightCenterChildren = "rCtrCh",
    /** Right Center Descendants. Serialized value: `rCtrDes` */
    RightCenterDescendants = "rCtrDes"
}
export declare const HierarchyAlignmentValuesArray: readonly [HierarchyAlignmentValues.TopLeft, HierarchyAlignmentValues.TopRight, HierarchyAlignmentValues.TopCenterChildren, HierarchyAlignmentValues.TopCenterDescendants, HierarchyAlignmentValues.BottomLeft, HierarchyAlignmentValues.BottomRight, HierarchyAlignmentValues.BottomCenterChild, HierarchyAlignmentValues.BottomCenterDescendant, HierarchyAlignmentValues.LeftTop, HierarchyAlignmentValues.LeftBottom, HierarchyAlignmentValues.LeftCenterChild, HierarchyAlignmentValues.LeftCenterDescendant, HierarchyAlignmentValues.RightTop, HierarchyAlignmentValues.RightBottom, HierarchyAlignmentValues.RightCenterChildren, HierarchyAlignmentValues.RightCenterDescendants];
export declare enum VariableValues {
    /** Unknown. Serialized value: `none` */
    None = "none",
    /** Organizational Chart Algorithm. Serialized value: `orgChart` */
    OrganizationalChart = "orgChart",
    /** Child Max. Serialized value: `chMax` */
    ChildMax = "chMax",
    /** Child Preference. Serialized value: `chPref` */
    ChildPreference = "chPref",
    /** Bullets Enabled. Serialized value: `bulEnabled` */
    BulletsEnabled = "bulEnabled",
    /** Direction. Serialized value: `dir` */
    Direction = "dir",
    /** Hierarchy Branch. Serialized value: `hierBranch` */
    HierarchyBranch = "hierBranch",
    /** Animate One. Serialized value: `animOne` */
    AnimateOne = "animOne",
    /** Animation Level. Serialized value: `animLvl` */
    AnimationLevel = "animLvl",
    /** Resize Handles. Serialized value: `resizeHandles` */
    ResizeHandles = "resizeHandles"
}
export declare const VariableValuesArray: readonly [VariableValues.None, VariableValues.OrganizationalChart, VariableValues.ChildMax, VariableValues.ChildPreference, VariableValues.BulletsEnabled, VariableValues.Direction, VariableValues.HierarchyBranch, VariableValues.AnimateOne, VariableValues.AnimationLevel, VariableValues.ResizeHandles];
export declare enum OutputShapeValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Connection. Serialized value: `conn` */
    Connection = "conn"
}
export declare const OutputShapeValuesArray: readonly [OutputShapeValues.None, OutputShapeValues.Connection];
export declare enum VerticalAlignmentValues {
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Middle. Serialized value: `mid` */
    Middle = "mid",
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** None. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `top` */
    Top2010 = "top",
    /** undefined. Serialized value: `center` */
    Middle2010 = "center",
    /** undefined. Serialized value: `bottom` */
    Bottom2010 = "bottom"
}
export declare const VerticalAlignmentValuesArray: readonly [VerticalAlignmentValues.Top, VerticalAlignmentValues.Middle, VerticalAlignmentValues.Bottom, VerticalAlignmentValues.None, VerticalAlignmentValues.Top2010, VerticalAlignmentValues.Middle2010, VerticalAlignmentValues.Bottom2010];
/** List of extensions to the CT_DiagramDefintions type.. Serialized as `dgm:extLst` */
export declare class DiagramDefinitionExtensionList extends OxmlCompositeElement<DiagramDefinitionExtension> {
    static _Q: string;
}
/** Defines the SampleDataType Class. */
export declare abstract class SampleDataType extends OxmlCompositeElement<DataModel> {
    static _A: string[];
    /** Use Default. Serialized as `:useDef` */
    get useDefault(): BooleanValue | undefined;
    set useDefault(v: BooleanValue | undefined);
    /** Data Model. */
    get dataModel(): DataModel | undefined;
}
/** Defines the ColorData Class. Serialized as `dgm:clrData` */
export declare class ColorData extends SampleDataType {
    static _Q: string;
}
/** Defines the StyleData Class. Serialized as `dgm:styleData` */
export declare class StyleData extends SampleDataType {
    static _Q: string;
}
/** Defines the SampleData Class. Serialized as `dgm:sampData` */
export declare class SampleData extends SampleDataType {
    static _Q: string;
}
/** Defines the DiagramDefinitionExtension Class. Serialized as `dgm:ext` */
export declare class DiagramDefinitionExtension extends OxmlCompositeElement<Dgm1611NumberDiagramInfoList | Dgm1612TextListStyleType> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns Dgm1611NumberDiagramInfoList. */
    get numberDiagramInfoList(): Dgm1611NumberDiagramInfoList | undefined;
    /** Returns Dgm1612TextListStyleType. */
    get textListStyleType(): Dgm1612TextListStyleType | undefined;
}
/** Defines the PtExtensionList Class. Serialized as `dgm:extLst` */
export declare class PtExtensionList extends OxmlCompositeElement<APtExtension> {
    static _Q: string;
}
/** Text Body. Serialized as `dgm:t` */
export declare class TextBody extends OxmlCompositeElement<ABodyProperties | AListStyle | AParagraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): ABodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): AListStyle | undefined;
}
/** Shape Properties. Serialized as `dgm:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<ATransform2D | ACustomGeometry | APresetGeometry | ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AOutline | AEffectList | AEffectDag | AScene3DType | AShape3DType | AShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): ATransform2D | undefined;
}
/** Property Set. Serialized as `dgm:prSet` */
export declare class PropertySet extends OxmlCompositeElement<PresentationLayoutVariables | Style> {
    static _Q: string;
    static _A: string[];
    /** Presentation Element Identifier. Serialized as `:presAssocID` */
    get presentationElementId(): StringValue | undefined;
    set presentationElementId(v: StringValue | undefined);
    /** Presentation Name. Serialized as `:presName` */
    get presentationName(): StringValue | undefined;
    set presentationName(v: StringValue | undefined);
    /** Presentation Style Label. Serialized as `:presStyleLbl` */
    get presentationStyleLabel(): StringValue | undefined;
    set presentationStyleLabel(v: StringValue | undefined);
    /** Presentation Style Index. Serialized as `:presStyleIdx` */
    get presentationStyleIndex(): Int32Value | undefined;
    set presentationStyleIndex(v: Int32Value | undefined);
    /** Presentation Style Count. Serialized as `:presStyleCnt` */
    get presentationStyleCount(): Int32Value | undefined;
    set presentationStyleCount(v: Int32Value | undefined);
    /** Current Diagram Type. Serialized as `:loTypeId` */
    get layoutTypeId(): StringValue | undefined;
    set layoutTypeId(v: StringValue | undefined);
    /** Current Diagram Category. Serialized as `:loCatId` */
    get layoutCategoryId(): StringValue | undefined;
    set layoutCategoryId(v: StringValue | undefined);
    /** Current Style Type. Serialized as `:qsTypeId` */
    get quickStyleTypeId(): StringValue | undefined;
    set quickStyleTypeId(v: StringValue | undefined);
    /** Current Style Category. Serialized as `:qsCatId` */
    get quickStyleCategoryId(): StringValue | undefined;
    set quickStyleCategoryId(v: StringValue | undefined);
    /** Color Transform Type Identifier. Serialized as `:csTypeId` */
    get colorType(): StringValue | undefined;
    set colorType(v: StringValue | undefined);
    /** Color Transform Category. Serialized as `:csCatId` */
    get colorCategoryId(): StringValue | undefined;
    set colorCategoryId(v: StringValue | undefined);
    /** Coherent 3D Behavior. Serialized as `:coherent3DOff` */
    get coherent3D(): BooleanValue | undefined;
    set coherent3D(v: BooleanValue | undefined);
    /** Placeholder Text. Serialized as `:phldrT` */
    get placeholderText(): StringValue | undefined;
    set placeholderText(v: StringValue | undefined);
    /** Placeholder. Serialized as `:phldr` */
    get placeholder(): BooleanValue | undefined;
    set placeholder(v: BooleanValue | undefined);
    /** Custom Rotation. Serialized as `:custAng` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Custom Vertical Flip. Serialized as `:custFlipVert` */
    get verticalFlip(): BooleanValue | undefined;
    set verticalFlip(v: BooleanValue | undefined);
    /** Custom Horizontal Flip. Serialized as `:custFlipHor` */
    get horizontalFlip(): BooleanValue | undefined;
    set horizontalFlip(v: BooleanValue | undefined);
    /** Fixed Width Override. Serialized as `:custSzX` */
    get fixedWidthOverride(): Int32Value | undefined;
    set fixedWidthOverride(v: Int32Value | undefined);
    /** Fixed Height Override. Serialized as `:custSzY` */
    get fixedHeightOverride(): Int32Value | undefined;
    set fixedHeightOverride(v: Int32Value | undefined);
    /** Width Scale. Serialized as `:custScaleX` */
    get widthScale(): Int32Value | undefined;
    set widthScale(v: Int32Value | undefined);
    /** Height Scale. Serialized as `:custScaleY` */
    get hightScale(): Int32Value | undefined;
    set hightScale(v: Int32Value | undefined);
    /** Text Changed. Serialized as `:custT` */
    get textChanged(): BooleanValue | undefined;
    set textChanged(v: BooleanValue | undefined);
    /** Custom Factor Width. Serialized as `:custLinFactX` */
    get factorWidth(): Int32Value | undefined;
    set factorWidth(v: Int32Value | undefined);
    /** Custom Factor Height. Serialized as `:custLinFactY` */
    get factorHeight(): Int32Value | undefined;
    set factorHeight(v: Int32Value | undefined);
    /** Neighbor Offset Width. Serialized as `:custLinFactNeighborX` */
    get neighborOffsetWidth(): Int32Value | undefined;
    set neighborOffsetWidth(v: Int32Value | undefined);
    /** Neighbor Offset Height. Serialized as `:custLinFactNeighborY` */
    get neighborOffsetHeight(): Int32Value | undefined;
    set neighborOffsetHeight(v: Int32Value | undefined);
    /** Radius Scale. Serialized as `:custRadScaleRad` */
    get radiusScale(): Int32Value | undefined;
    set radiusScale(v: Int32Value | undefined);
    /** Include Angle Scale. Serialized as `:custRadScaleInc` */
    get includeAngleScale(): Int32Value | undefined;
    set includeAngleScale(v: Int32Value | undefined);
    /** Presentation Layout Variables. */
    get presentationLayoutVariables(): PresentationLayoutVariables | undefined;
    /** Shape Style. */
    get style(): Style | undefined;
}
/** Defines the DataModelExtensionList Class. Serialized as `dgm:extLst` */
export declare class DataModelExtensionList extends OxmlCompositeElement<ADataModelExtension> {
    static _Q: string;
}
/** Whole E2O Formatting. Serialized as `dgm:whole` */
export declare class Whole extends OxmlCompositeElement<AOutline | AEffectList | AEffectDag> {
    static _Q: string;
    /** Outline. */
    get outline(): AOutline | undefined;
}
/** Background Formatting. Serialized as `dgm:bg` */
export declare class Background extends OxmlCompositeElement<ANoFill | ASolidFill | AGradientFill | ABlipFill | APatternFill | AGroupFill | AEffectList | AEffectDag> {
    static _Q: string;
}
/** Connection List. Serialized as `dgm:cxnLst` */
export declare class ConnectionList extends OxmlCompositeElement<Connection> {
    static _Q: string;
}
/** Point List. Serialized as `dgm:ptLst` */
export declare class PointList extends OxmlCompositeElement<Point> {
    static _Q: string;
}
/** Style Label. Serialized as `dgm:styleLbl` */
export declare class StyleLabel extends OxmlCompositeElement<Scene3D | Shape3D | TextProperties | Style | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Style Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** 3-D Scene. */
    get scene3D(): Scene3D | undefined;
    /** 3-D Shape Properties. */
    get shape3D(): Shape3D | undefined;
    /** Text Properties. */
    get textProperties(): TextProperties | undefined;
    /** Shape Style. */
    get style(): Style | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Category List. Serialized as `dgm:catLst` */
export declare class StyleDisplayCategories extends OxmlCompositeElement<StyleDisplayCategory> {
    static _Q: string;
}
/** Style Label Description. Serialized as `dgm:desc` */
export declare class StyleLabelDescription extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Natural Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Description Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Title. Serialized as `dgm:title` */
export declare class StyleDefinitionTitle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Natural Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Description Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Text Properties. Serialized as `dgm:txPr` */
export declare class TextProperties extends OxmlCompositeElement<AShape3DType | AFlatText> {
    static _Q: string;
    /** Apply 3D shape properties. */
    get shape3DType(): AShape3DType | undefined;
    /** No text in 3D scene. */
    get flatText(): AFlatText | undefined;
}
/** 3-D Shape Properties. Serialized as `dgm:sp3d` */
export declare class Shape3D extends OxmlCompositeElement<ABevelTop | ABevelBottom | AExtrusionColor | AContourColor | AExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Shape Depth. Serialized as `:z` */
    get z(): Int64Value | undefined;
    set z(v: Int64Value | undefined);
    /** Extrusion Height. Serialized as `:extrusionH` */
    get extrusionHeight(): Int64Value | undefined;
    set extrusionHeight(v: Int64Value | undefined);
    /** Contour Width. Serialized as `:contourW` */
    get contourWidth(): Int64Value | undefined;
    set contourWidth(v: Int64Value | undefined);
    /** Preset Material Type. Serialized as `:prstMaterial` */
    get presetMaterial(): PresetMaterialTypeValues | undefined;
    set presetMaterial(v: PresetMaterialTypeValues | undefined);
    /** Top Bevel. */
    get bevelTop(): ABevelTop | undefined;
    /** Bottom Bevel. */
    get bevelBottom(): ABevelBottom | undefined;
    /** Extrusion Color. */
    get extrusionColor(): AExtrusionColor | undefined;
    /** Contour Color. */
    get contourColor(): AContourColor | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** 3-D Scene. Serialized as `dgm:scene3d` */
export declare class Scene3D extends OxmlCompositeElement<ACamera | ALightRig | ABackdrop | AExtensionList> {
    static _Q: string;
    /** Camera. */
    get camera(): ACamera | undefined;
    /** Light Rig. */
    get lightRig(): ALightRig | undefined;
    /** Backdrop Plane. */
    get backdrop(): ABackdrop | undefined;
    /** Returns AExtensionList. */
    get extensionList(): AExtensionList | undefined;
}
/** Category. Serialized as `dgm:cat` */
export declare class StyleDisplayCategory extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Category Type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Priority. Serialized as `:pri` */
    get priority(): UInt32Value | undefined;
    set priority(v: UInt32Value | undefined);
}
/** Shape Resize Style. Serialized as `dgm:resizeHandles` */
export declare class ResizeHandles extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape Resize Style Type. Serialized as `:val` */
    get val(): ResizeHandlesStringValues | undefined;
    set val(v: ResizeHandlesStringValues | undefined);
}
/** Level Animation. Serialized as `dgm:animLvl` */
export declare class AnimationLevel extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Level Animation Value. Serialized as `:val` */
    get val(): AnimationLevelStringValues | undefined;
    set val(v: AnimationLevelStringValues | undefined);
}
/** One by One Animation String. Serialized as `dgm:animOne` */
export declare class AnimateOneByOne extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** One By One Animation Value. Serialized as `:val` */
    get val(): AnimateOneByOneValues | undefined;
    set val(v: AnimateOneByOneValues | undefined);
}
/** Organization Chart Branch Style. Serialized as `dgm:hierBranch` */
export declare class HierarchyBranch extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Organization Chart Branch Style Value. Serialized as `:val` */
    get val(): HierarchyBranchStyleValues | undefined;
    set val(v: HierarchyBranchStyleValues | undefined);
}
/** Diagram Direction. Serialized as `dgm:dir` */
export declare class Direction extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Diagram Direction Value. Serialized as `:val` */
    get val(): DirectionValues | undefined;
    set val(v: DirectionValues | undefined);
}
/** Show Insert Bullet. Serialized as `dgm:bulletEnabled` */
export declare class BulletEnabled extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Show Insert Bullet Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Preferred Number of Children. Serialized as `dgm:chPref` */
export declare class PreferredNumberOfChildren extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Preferred Number of CHildren Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Maximum Children. Serialized as `dgm:chMax` */
export declare class MaxNumberOfChildren extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Maximum Children Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Show Organization Chart User Interface. Serialized as `dgm:orgChart` */
export declare class OrganizationChart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Show Organization Chart User Interface Value. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Shape Style. Serialized as `dgm:style` */
export declare class Style extends OxmlCompositeElement<ALineReference | AFillReference | AEffectReference | AFontReference> {
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
/** Category List. Serialized as `dgm:catLst` */
export declare class CategoryList extends OxmlCompositeElement<Category> {
    static _Q: string;
}
/** Description. Serialized as `dgm:desc` */
export declare class Description extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Title. Serialized as `dgm:title` */
export declare class Title extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Category. Serialized as `dgm:cat` */
export declare class Category extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Category Type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Priority. Serialized as `:pri` */
    get priority(): UInt32Value | undefined;
    set priority(v: UInt32Value | undefined);
}
/** Data Model. Serialized as `dgm:dataModel` */
export declare class DataModel extends OxmlCompositeElement<PointList | ConnectionList | Background | Whole | DataModelExtensionList> {
    static _Q: string;
    /** Point List. */
    get pointList(): PointList | undefined;
    /** Connection List. */
    get connectionList(): ConnectionList | undefined;
    /** Background Formatting. */
    get background(): Background | undefined;
    /** Whole E2O Formatting. */
    get whole(): Whole | undefined;
    /** Returns DataModelExtensionList. */
    get dataModelExtensionList(): DataModelExtensionList | undefined;
}
/** Else. Serialized as `dgm:else` */
export declare class DiagramChooseElse extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | ForEach | LayoutNode | Choose | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** If. Serialized as `dgm:if` */
export declare class DiagramChooseIf extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | ForEach | LayoutNode | Choose | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Axis. Serialized as `:axis` */
    get axis(): AxisValues | undefined;
    set axis(v: AxisValues | undefined);
    /** Data Point Type. Serialized as `:ptType` */
    get pointType(): ElementValues | undefined;
    set pointType(v: ElementValues | undefined);
    /** Hide Last Transition. Serialized as `:hideLastTrans` */
    get hideLastTrans(): ListValue<BooleanValue> | undefined;
    set hideLastTrans(v: ListValue<BooleanValue> | undefined);
    /** Start. Serialized as `:st` */
    get start(): ListValue<Int32Value> | undefined;
    set start(v: ListValue<Int32Value> | undefined);
    /** Count. Serialized as `:cnt` */
    get count(): ListValue<UInt32Value> | undefined;
    set count(v: ListValue<UInt32Value> | undefined);
    /** Step. Serialized as `:step` */
    get step(): ListValue<Int32Value> | undefined;
    set step(v: ListValue<Int32Value> | undefined);
    /** Function. Serialized as `:func` */
    get function(): FunctionValues | undefined;
    set function(v: FunctionValues | undefined);
    /** Argument. Serialized as `:arg` */
    get argument(): StringValue | undefined;
    set argument(v: StringValue | undefined);
    /** Operator. Serialized as `:op` */
    get operator(): FunctionOperatorValues | undefined;
    set operator(v: FunctionOperatorValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Choose Element. Serialized as `dgm:choose` */
export declare class Choose extends OxmlCompositeElement<DiagramChooseIf | DiagramChooseElse> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Layout Node. Serialized as `dgm:layoutNode` */
export declare class LayoutNode extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | VariableList | ForEach | LayoutNode | Choose | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Style Label. Serialized as `:styleLbl` */
    get styleLabel(): StringValue | undefined;
    set styleLabel(v: StringValue | undefined);
    /** Child Order. Serialized as `:chOrder` */
    get childOrder(): ChildOrderValues | undefined;
    set childOrder(v: ChildOrderValues | undefined);
    /** Move With. Serialized as `:moveWith` */
    get moveWith(): StringValue | undefined;
    set moveWith(v: StringValue | undefined);
}
/** For Each. Serialized as `dgm:forEach` */
export declare class ForEach extends OxmlCompositeElement<Algorithm | Shape | PresentationOf | Constraints | RuleList | ForEach | LayoutNode | Choose | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
    /** Axis. Serialized as `:axis` */
    get axis(): AxisValues | undefined;
    set axis(v: AxisValues | undefined);
    /** Data Point Type. Serialized as `:ptType` */
    get pointType(): ElementValues | undefined;
    set pointType(v: ElementValues | undefined);
    /** Hide Last Transition. Serialized as `:hideLastTrans` */
    get hideLastTrans(): ListValue<BooleanValue> | undefined;
    set hideLastTrans(v: ListValue<BooleanValue> | undefined);
    /** Start. Serialized as `:st` */
    get start(): ListValue<Int32Value> | undefined;
    set start(v: ListValue<Int32Value> | undefined);
    /** Count. Serialized as `:cnt` */
    get count(): ListValue<UInt32Value> | undefined;
    set count(v: ListValue<UInt32Value> | undefined);
    /** Step. Serialized as `:step` */
    get step(): ListValue<Int32Value> | undefined;
    set step(v: ListValue<Int32Value> | undefined);
}
/** Defines the LayoutVariablePropertySetType Class. */
export declare abstract class LayoutVariablePropertySetType extends OxmlCompositeElement<OrganizationChart | MaxNumberOfChildren | PreferredNumberOfChildren | BulletEnabled | Direction | HierarchyBranch | AnimateOneByOne | AnimationLevel | ResizeHandles> {
    /** Show Organization Chart User Interface. */
    get organizationChart(): OrganizationChart | undefined;
    /** Maximum Children. */
    get maxNumberOfChildren(): MaxNumberOfChildren | undefined;
    /** Preferred Number of Children. */
    get preferredNumberOfChildren(): PreferredNumberOfChildren | undefined;
    /** Show Insert Bullet. */
    get bulletEnabled(): BulletEnabled | undefined;
    /** Diagram Direction. */
    get direction(): Direction | undefined;
    /** Organization Chart Branch Style. */
    get hierarchyBranch(): HierarchyBranch | undefined;
    /** One by One Animation String. */
    get animateOneByOne(): AnimateOneByOne | undefined;
    /** Level Animation. */
    get animationLevel(): AnimationLevel | undefined;
    /** Shape Resize Style. */
    get resizeHandles(): ResizeHandles | undefined;
}
/** Presentation Layout Variables. Serialized as `dgm:presLayoutVars` */
export declare class PresentationLayoutVariables extends LayoutVariablePropertySetType {
    static _Q: string;
}
/** Variable List. Serialized as `dgm:varLst` */
export declare class VariableList extends LayoutVariablePropertySetType {
    static _Q: string;
}
/** Rule List. Serialized as `dgm:ruleLst` */
export declare class RuleList extends OxmlCompositeElement<Rule> {
    static _Q: string;
}
/** Constraint List. Serialized as `dgm:constrLst` */
export declare class Constraints extends OxmlCompositeElement<Constraint> {
    static _Q: string;
}
/** Presentation Of. Serialized as `dgm:presOf` */
export declare class PresentationOf extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Axis. Serialized as `:axis` */
    get axis(): AxisValues | undefined;
    set axis(v: AxisValues | undefined);
    /** Data Point Type. Serialized as `:ptType` */
    get pointType(): ElementValues | undefined;
    set pointType(v: ElementValues | undefined);
    /** Hide Last Transition. Serialized as `:hideLastTrans` */
    get hideLastTrans(): ListValue<BooleanValue> | undefined;
    set hideLastTrans(v: ListValue<BooleanValue> | undefined);
    /** Start. Serialized as `:st` */
    get start(): ListValue<Int32Value> | undefined;
    set start(v: ListValue<Int32Value> | undefined);
    /** Count. Serialized as `:cnt` */
    get count(): ListValue<UInt32Value> | undefined;
    set count(v: ListValue<UInt32Value> | undefined);
    /** Step. Serialized as `:step` */
    get step(): ListValue<Int32Value> | undefined;
    set step(v: ListValue<Int32Value> | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Shape. Serialized as `dgm:shape` */
export declare class Shape extends OxmlCompositeElement<AdjustList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): DoubleValue | undefined;
    set rotation(v: DoubleValue | undefined);
    /** Shape Type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Relationship to Image Part. Serialized as `r:blip` */
    get blip(): StringValue | undefined;
    set blip(v: StringValue | undefined);
    /** Z-Order Offset. Serialized as `:zOrderOff` */
    get zOrderOffset(): Int32Value | undefined;
    set zOrderOffset(v: Int32Value | undefined);
    /** Hide Geometry. Serialized as `:hideGeom` */
    get hideGeometry(): BooleanValue | undefined;
    set hideGeometry(v: BooleanValue | undefined);
    /** Prevent Text Editing. Serialized as `:lkTxEntry` */
    get lockedText(): BooleanValue | undefined;
    set lockedText(v: BooleanValue | undefined);
    /** Image Placeholder. Serialized as `:blipPhldr` */
    get blipPlaceholder(): BooleanValue | undefined;
    set blipPlaceholder(v: BooleanValue | undefined);
    /** Shape Adjust List. */
    get adjustList(): AdjustList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Algorithm. Serialized as `dgm:alg` */
export declare class Algorithm extends OxmlCompositeElement<Parameter | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Algorithm Type. Serialized as `:type` */
    get type(): AlgorithmValues | undefined;
    set type(v: AlgorithmValues | undefined);
    /** Revision Number. Serialized as `:rev` */
    get revision(): UInt32Value | undefined;
    set revision(v: UInt32Value | undefined);
}
/** Parameter. Serialized as `dgm:param` */
export declare class Parameter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Parameter Type. Serialized as `:type` */
    get type(): ParameterIdValues | undefined;
    set type(v: ParameterIdValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Shape Adjust List. Serialized as `dgm:adjLst` */
export declare class AdjustList extends OxmlCompositeElement<Adjust> {
    static _Q: string;
}
/** Shape Adjust. Serialized as `dgm:adj` */
export declare class Adjust extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Adjust Handle Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
}
/** Rule. Serialized as `dgm:rule` */
export declare class Rule extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Constraint Type. Serialized as `:type` */
    get type(): ConstraintValues | undefined;
    set type(v: ConstraintValues | undefined);
    /** For. Serialized as `:for` */
    get for(): ConstraintRelationshipValues | undefined;
    set for(v: ConstraintRelationshipValues | undefined);
    /** For Name. Serialized as `:forName` */
    get forName(): StringValue | undefined;
    set forName(v: StringValue | undefined);
    /** Data Point Type. Serialized as `:ptType` */
    get pointType(): ElementValues | undefined;
    set pointType(v: ElementValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Factor. Serialized as `:fact` */
    get fact(): DoubleValue | undefined;
    set fact(v: DoubleValue | undefined);
    /** Max Value. Serialized as `:max` */
    get max(): DoubleValue | undefined;
    set max(v: DoubleValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Constraint. Serialized as `dgm:constr` */
export declare class Constraint extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Constraint Type. Serialized as `:type` */
    get type(): ConstraintValues | undefined;
    set type(v: ConstraintValues | undefined);
    /** For. Serialized as `:for` */
    get for(): ConstraintRelationshipValues | undefined;
    set for(v: ConstraintRelationshipValues | undefined);
    /** For Name. Serialized as `:forName` */
    get forName(): StringValue | undefined;
    set forName(v: StringValue | undefined);
    /** Data Point Type. Serialized as `:ptType` */
    get pointType(): ElementValues | undefined;
    set pointType(v: ElementValues | undefined);
    /** Reference Type. Serialized as `:refType` */
    get referenceType(): ConstraintValues | undefined;
    set referenceType(v: ConstraintValues | undefined);
    /** Reference For. Serialized as `:refFor` */
    get referenceFor(): ConstraintRelationshipValues | undefined;
    set referenceFor(v: ConstraintRelationshipValues | undefined);
    /** Reference For Name. Serialized as `:refForName` */
    get referenceForName(): StringValue | undefined;
    set referenceForName(v: StringValue | undefined);
    /** Reference Point Type. Serialized as `:refPtType` */
    get referencePointType(): ElementValues | undefined;
    set referencePointType(v: ElementValues | undefined);
    /** Operator. Serialized as `:op` */
    get operator(): BoolOperatorValues | undefined;
    set operator(v: BoolOperatorValues | undefined);
    /** Value. Serialized as `:val` */
    get val(): DoubleValue | undefined;
    set val(v: DoubleValue | undefined);
    /** Factor. Serialized as `:fact` */
    get fact(): DoubleValue | undefined;
    set fact(v: DoubleValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Connection. Serialized as `dgm:cxn` */
export declare class Connection extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Model Identifier. Serialized as `:modelId` */
    get modelId(): StringValue | undefined;
    set modelId(v: StringValue | undefined);
    /** Point Type. Serialized as `:type` */
    get type(): ConnectionValues | undefined;
    set type(v: ConnectionValues | undefined);
    /** Source Identifier. Serialized as `:srcId` */
    get sourceId(): StringValue | undefined;
    set sourceId(v: StringValue | undefined);
    /** Destination Identifier. Serialized as `:destId` */
    get destinationId(): StringValue | undefined;
    set destinationId(v: StringValue | undefined);
    /** Source Position. Serialized as `:srcOrd` */
    get sourcePosition(): UInt32Value | undefined;
    set sourcePosition(v: UInt32Value | undefined);
    /** Destination Position. Serialized as `:destOrd` */
    get destinationPosition(): UInt32Value | undefined;
    set destinationPosition(v: UInt32Value | undefined);
    /** Parent Transition Identifier. Serialized as `:parTransId` */
    get parentTransitionId(): StringValue | undefined;
    set parentTransitionId(v: StringValue | undefined);
    /** Sibling Transition Identifier. Serialized as `:sibTransId` */
    get siblingTransitionId(): StringValue | undefined;
    set siblingTransitionId(v: StringValue | undefined);
    /** Presentation Identifier. Serialized as `:presId` */
    get presentationId(): StringValue | undefined;
    set presentationId(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Point. Serialized as `dgm:pt` */
export declare class Point extends OxmlCompositeElement<PropertySet | ShapeProperties | TextBody | PtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Model Identifier. Serialized as `:modelId` */
    get modelId(): StringValue | undefined;
    set modelId(v: StringValue | undefined);
    /** Point Type. Serialized as `:type` */
    get type(): PointValues | undefined;
    set type(v: PointValues | undefined);
    /** Connection Identifier. Serialized as `:cxnId` */
    get connectionId(): StringValue | undefined;
    set connectionId(v: StringValue | undefined);
    /** Property Set. */
    get propertySet(): PropertySet | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Text Body. */
    get textBody(): TextBody | undefined;
    /** Returns PtExtensionList. */
    get ptExtensionList(): PtExtensionList | undefined;
}
/** Style Label. Serialized as `dgm:styleLbl` */
export declare class ColorTransformStyleLabel extends OxmlCompositeElement<FillColorList | LineColorList | EffectColorList | TextLineColorList | TextFillColorList | TextEffectColorList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Fill Color List. */
    get fillColorList(): FillColorList | undefined;
    /** Line Color List. */
    get lineColorList(): LineColorList | undefined;
    /** Effect Color List. */
    get effectColorList(): EffectColorList | undefined;
    /** Text Line Color List. */
    get textLineColorList(): TextLineColorList | undefined;
    /** Text Fill Color List. */
    get textFillColorList(): TextFillColorList | undefined;
    /** Text Effect Color List. */
    get textEffectColorList(): TextEffectColorList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Color Transform Category List. Serialized as `dgm:catLst` */
export declare class ColorTransformCategories extends OxmlCompositeElement<ColorTransformCategory> {
    static _Q: string;
}
/** Description. Serialized as `dgm:desc` */
export declare class ColorTransformDescription extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Description Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Title. Serialized as `dgm:title` */
export declare class ColorDefinitionTitle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Description Value. Serialized as `:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the ExtensionList Class. Serialized as `dgm:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the ColorsType Class. */
export declare abstract class ColorsType extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _A: string[];
    /** Color Application Method Type. Serialized as `:meth` */
    get method(): ColorApplicationMethodValues | undefined;
    set method(v: ColorApplicationMethodValues | undefined);
    /** Hue Direction. Serialized as `:hueDir` */
    get hueDirection(): HueDirectionValues | undefined;
    set hueDirection(v: HueDirectionValues | undefined);
}
/** Text Effect Color List. Serialized as `dgm:txEffectClrLst` */
export declare class TextEffectColorList extends ColorsType {
    static _Q: string;
}
/** Text Fill Color List. Serialized as `dgm:txFillClrLst` */
export declare class TextFillColorList extends ColorsType {
    static _Q: string;
}
/** Text Line Color List. Serialized as `dgm:txLinClrLst` */
export declare class TextLineColorList extends ColorsType {
    static _Q: string;
}
/** Effect Color List. Serialized as `dgm:effectClrLst` */
export declare class EffectColorList extends ColorsType {
    static _Q: string;
}
/** Line Color List. Serialized as `dgm:linClrLst` */
export declare class LineColorList extends ColorsType {
    static _Q: string;
}
/** Fill Color List. Serialized as `dgm:fillClrLst` */
export declare class FillColorList extends ColorsType {
    static _Q: string;
}
/** Color Transform Category. Serialized as `dgm:cat` */
export declare class ColorTransformCategory extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Category Type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Priority. Serialized as `:pri` */
    get priority(): UInt32Value | undefined;
    set priority(v: UInt32Value | undefined);
}
/** List of Style Definition Headers. Serialized as `dgm:styleDefHdrLst` */
export declare class StyleDefinitionHeaderList extends OxmlCompositeElement<StyleDefinitionHeader> {
    static _Q: string;
}
/** Style Definition Header. Serialized as `dgm:styleDefHdr` */
export declare class StyleDefinitionHeader extends OxmlCompositeElement<StyleDefinitionTitle | StyleLabelDescription | StyleDisplayCategories | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Unique Style ID. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** Minimum Version. Serialized as `:minVer` */
    get minVersion(): StringValue | undefined;
    set minVersion(v: StringValue | undefined);
    /** Resource ID. Serialized as `:resId` */
    get resourceId(): Int32Value | undefined;
    set resourceId(v: Int32Value | undefined);
}
/** Style Definition. Serialized as `dgm:styleDef` */
export declare class StyleDefinition extends OxmlPartRootElement<StyleDefinitionTitle | StyleLabelDescription | StyleDisplayCategories | Scene3D | StyleLabel | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Unique Style ID. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** Minimum Version. Serialized as `:minVer` */
    get minVersion(): StringValue | undefined;
    set minVersion(v: StringValue | undefined);
}
/** Explicit Relationships to Diagram Parts. Serialized as `dgm:relIds` */
export declare class RelationshipIds extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Explicit Relationship to Diagram Data Part. Serialized as `r:dm` */
    get dataPart(): StringValue | undefined;
    set dataPart(v: StringValue | undefined);
    /** Explicit Relationship to Diagram Layout Definition Part. Serialized as `r:lo` */
    get layoutPart(): StringValue | undefined;
    set layoutPart(v: StringValue | undefined);
    /** Explicit Relationship to Style Definition Part. Serialized as `r:qs` */
    get stylePart(): StringValue | undefined;
    set stylePart(v: StringValue | undefined);
    /** Explicit Relationship to Diagram Colors Part. Serialized as `r:cs` */
    get colorPart(): StringValue | undefined;
    set colorPart(v: StringValue | undefined);
}
/** Diagram Layout Header List. Serialized as `dgm:layoutDefHdrLst` */
export declare class LayoutDefinitionHeaderList extends OxmlCompositeElement<LayoutDefinitionHeader> {
    static _Q: string;
}
/** Layout Definition Header. Serialized as `dgm:layoutDefHdr` */
export declare class LayoutDefinitionHeader extends OxmlCompositeElement<Title | Description | CategoryList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Unique Identifier. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** Minimum Version. Serialized as `:minVer` */
    get minVersion(): StringValue | undefined;
    set minVersion(v: StringValue | undefined);
    /** Default Style. Serialized as `:defStyle` */
    get defaultStyle(): StringValue | undefined;
    set defaultStyle(v: StringValue | undefined);
    /** Resource Identifier. Serialized as `:resId` */
    get resourceId(): Int32Value | undefined;
    set resourceId(v: Int32Value | undefined);
}
/** Layout Definition. Serialized as `dgm:layoutDef` */
export declare class LayoutDefinition extends OxmlPartRootElement<Title | Description | CategoryList | SampleData | StyleData | ColorData | LayoutNode | DiagramDefinitionExtensionList> {
    static _Q: string;
    static _A: string[];
    /** uniqueId. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** minVer. Serialized as `:minVer` */
    get minVersion(): StringValue | undefined;
    set minVersion(v: StringValue | undefined);
    /** defStyle. Serialized as `:defStyle` */
    get defaultStyle(): StringValue | undefined;
    set defaultStyle(v: StringValue | undefined);
}
/** Data Model. Serialized as `dgm:dataModel` */
export declare class DataModelRoot extends OxmlPartRootElement<PointList | ConnectionList | Background | Whole | DataModelExtensionList> {
    static _Q: string;
    /** Point List. */
    get pointList(): PointList | undefined;
    /** Connection List. */
    get connectionList(): ConnectionList | undefined;
    /** Background Formatting. */
    get background(): Background | undefined;
    /** Whole E2O Formatting. */
    get whole(): Whole | undefined;
    /** Returns DataModelExtensionList. */
    get dataModelExtensionList(): DataModelExtensionList | undefined;
}
/** Color Transform Header List. Serialized as `dgm:colorsDefHdrLst` */
export declare class ColorsDefinitionHeaderList extends OxmlCompositeElement<ColorsDefinitionHeader> {
    static _Q: string;
}
/** Color Transform Header. Serialized as `dgm:colorsDefHdr` */
export declare class ColorsDefinitionHeader extends OxmlCompositeElement<ColorDefinitionTitle | ColorTransformDescription | ColorTransformCategories | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Unique ID. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** Minimum Version. Serialized as `:minVer` */
    get minVersion(): StringValue | undefined;
    set minVersion(v: StringValue | undefined);
    /** Resource ID. Serialized as `:resId` */
    get resourceId(): Int32Value | undefined;
    set resourceId(v: Int32Value | undefined);
}
/** Color Transform Definitions. Serialized as `dgm:colorsDef` */
export declare class ColorsDefinition extends OxmlPartRootElement<ColorDefinitionTitle | ColorTransformDescription | ColorTransformCategories | ColorTransformStyleLabel | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Unique ID. Serialized as `:uniqueId` */
    get uniqueId(): StringValue | undefined;
    set uniqueId(v: StringValue | undefined);
    /** Minimum Version. Serialized as `:minVer` */
    get minVersion(): StringValue | undefined;
    set minVersion(v: StringValue | undefined);
}
export declare function initDrawingDiagramsNamespace(): {
    prefix: string;
    xmlns: string;
};
