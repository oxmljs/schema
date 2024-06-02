import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { BlackWhiteModeValues } from '../../Drawing';
import { Extension as AExtension } from '../../Drawing';
import { Offset as AOffset } from '../../Drawing';
import { Extents as AExtents } from '../../Drawing';
import { ContentPartLocks as A14ContentPartLocks } from '../../Office2010/Drawing';
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from '../../Office2010/Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { SdtRun as WSdtRun } from '../../Wordprocessing';
import { ProofError as WProofError } from '../../Wordprocessing';
import { PermStart as WPermStart } from '../../Wordprocessing';
import { PermEnd as WPermEnd } from '../../Wordprocessing';
import { BookmarkStart as WBookmarkStart } from '../../Wordprocessing';
import { BookmarkEnd as WBookmarkEnd } from '../../Wordprocessing';
import { CommentRangeStart as WCommentRangeStart } from '../../Wordprocessing';
import { CommentRangeEnd as WCommentRangeEnd } from '../../Wordprocessing';
import { MoveFromRangeStart as WMoveFromRangeStart } from '../../Wordprocessing';
import { MoveFromRangeEnd as WMoveFromRangeEnd } from '../../Wordprocessing';
import { MoveToRangeStart as WMoveToRangeStart } from '../../Wordprocessing';
import { MoveToRangeEnd as WMoveToRangeEnd } from '../../Wordprocessing';
import { CustomXmlInsRangeStart as WCustomXmlInsRangeStart } from '../../Wordprocessing';
import { CustomXmlInsRangeEnd as WCustomXmlInsRangeEnd } from '../../Wordprocessing';
import { CustomXmlDelRangeStart as WCustomXmlDelRangeStart } from '../../Wordprocessing';
import { CustomXmlDelRangeEnd as WCustomXmlDelRangeEnd } from '../../Wordprocessing';
import { CustomXmlMoveFromRangeStart as WCustomXmlMoveFromRangeStart } from '../../Wordprocessing';
import { CustomXmlMoveFromRangeEnd as WCustomXmlMoveFromRangeEnd } from '../../Wordprocessing';
import { CustomXmlMoveToRangeStart as WCustomXmlMoveToRangeStart } from '../../Wordprocessing';
import { CustomXmlMoveToRangeEnd as WCustomXmlMoveToRangeEnd } from '../../Wordprocessing';
import { InsertedRun as WInsertedRun } from '../../Wordprocessing';
import { DeletedRun as WDeletedRun } from '../../Wordprocessing';
import { MoveFromRun as WMoveFromRun } from '../../Wordprocessing';
import { MoveToRun as WMoveToRun } from '../../Wordprocessing';
import { ContentPart as WContentPart } from '../../Wordprocessing';
import { Paragraph as MParagraph } from '../../Math';
import { OfficeMath as MOfficeMath } from '../../Math';
import { Accent as MAccent } from '../../Math';
import { Bar as MBar } from '../../Math';
import { Box as MBox } from '../../Math';
import { BorderBox as MBorderBox } from '../../Math';
import { Delimiter as MDelimiter } from '../../Math';
import { EquationArray as MEquationArray } from '../../Math';
import { Fraction as MFraction } from '../../Math';
import { MathFunction as MMathFunction } from '../../Math';
import { GroupChar as MGroupChar } from '../../Math';
import { LimitLower as MLimitLower } from '../../Math';
import { LimitUpper as MLimitUpper } from '../../Math';
import { Matrix as MMatrix } from '../../Math';
import { Nary as MNary } from '../../Math';
import { Phantom as MPhantom } from '../../Math';
import { Radical as MRadical } from '../../Math';
import { PreSubSuper as MPreSubSuper } from '../../Math';
import { Subscript as MSubscript } from '../../Math';
import { SubSuperscript as MSubSuperscript } from '../../Math';
import { Superscript as MSuperscript } from '../../Math';
import { Run as MRun } from '../../Math';
import { Run as WRun } from '../../Wordprocessing';
import { BidirectionalOverride as WBidirectionalOverride } from '../../Wordprocessing';
import { BidirectionalEmbedding as WBidirectionalEmbedding } from '../../Wordprocessing';
export declare enum OnOffValues {
    /** undefined. Serialized value: `true` */
    True = "true",
    /** undefined. Serialized value: `false` */
    False = "false",
    /** undefined. Serialized value: `0` */
    Zero = "0",
    /** undefined. Serialized value: `1` */
    One = "1"
}
export declare const OnOffValuesArray: readonly [OnOffValues.True, OnOffValues.False, OnOffValues.Zero, OnOffValues.One];
export declare enum SchemeColorValues {
    /** undefined. Serialized value: `bg1` */
    BackgroundColor = "bg1",
    /** undefined. Serialized value: `tx1` */
    TextColor = "tx1",
    /** undefined. Serialized value: `bg2` */
    AdditionalBackgroundColor = "bg2",
    /** undefined. Serialized value: `tx2` */
    AdditionalTextColor = "tx2",
    /** undefined. Serialized value: `accent1` */
    ExtraSchemeColor1 = "accent1",
    /** undefined. Serialized value: `accent2` */
    ExtraSchemeColor2 = "accent2",
    /** undefined. Serialized value: `accent3` */
    ExtraSchemeColor3 = "accent3",
    /** undefined. Serialized value: `accent4` */
    ExtraSchemeColor4 = "accent4",
    /** undefined. Serialized value: `accent5` */
    ExtraSchemeColor5 = "accent5",
    /** undefined. Serialized value: `accent6` */
    ExtraSchemeColor6 = "accent6",
    /** undefined. Serialized value: `hlink` */
    HyperlinkColor = "hlink",
    /** undefined. Serialized value: `folHlink` */
    FollowedHyperlinkColor = "folHlink",
    /** undefined. Serialized value: `dk1` */
    MainDarkColor1 = "dk1",
    /** undefined. Serialized value: `lt1` */
    MainLightColor1 = "lt1",
    /** undefined. Serialized value: `dk2` */
    MainDarkColor2 = "dk2",
    /** undefined. Serialized value: `lt2` */
    MainLightColor2 = "lt2",
    /** undefined. Serialized value: `phClr` */
    AutoColor = "phClr"
}
export declare const SchemeColorValuesArray: readonly [SchemeColorValues.BackgroundColor, SchemeColorValues.TextColor, SchemeColorValues.AdditionalBackgroundColor, SchemeColorValues.AdditionalTextColor, SchemeColorValues.ExtraSchemeColor1, SchemeColorValues.ExtraSchemeColor2, SchemeColorValues.ExtraSchemeColor3, SchemeColorValues.ExtraSchemeColor4, SchemeColorValues.ExtraSchemeColor5, SchemeColorValues.ExtraSchemeColor6, SchemeColorValues.HyperlinkColor, SchemeColorValues.FollowedHyperlinkColor, SchemeColorValues.MainDarkColor1, SchemeColorValues.MainLightColor1, SchemeColorValues.MainDarkColor2, SchemeColorValues.MainLightColor2, SchemeColorValues.AutoColor];
export declare enum RectangleAlignmentValues {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `tl` */
    TopLeft = "tl",
    /** undefined. Serialized value: `t` */
    Top = "t",
    /** undefined. Serialized value: `tr` */
    TopRight = "tr",
    /** undefined. Serialized value: `l` */
    Left = "l",
    /** undefined. Serialized value: `ctr` */
    Center = "ctr",
    /** undefined. Serialized value: `r` */
    Right = "r",
    /** undefined. Serialized value: `bl` */
    BottomLeft = "bl",
    /** undefined. Serialized value: `b` */
    Bottom = "b",
    /** undefined. Serialized value: `br` */
    BottomRight = "br"
}
export declare const RectangleAlignmentValuesArray: readonly [RectangleAlignmentValues.None, RectangleAlignmentValues.TopLeft, RectangleAlignmentValues.Top, RectangleAlignmentValues.TopRight, RectangleAlignmentValues.Left, RectangleAlignmentValues.Center, RectangleAlignmentValues.Right, RectangleAlignmentValues.BottomLeft, RectangleAlignmentValues.Bottom, RectangleAlignmentValues.BottomRight];
export declare enum PathShadeTypeValues {
    /** undefined. Serialized value: `shape` */
    Shape = "shape",
    /** undefined. Serialized value: `circle` */
    Circle = "circle",
    /** undefined. Serialized value: `rect` */
    Rect = "rect"
}
export declare const PathShadeTypeValuesArray: readonly [PathShadeTypeValues.Shape, PathShadeTypeValues.Circle, PathShadeTypeValues.Rect];
export declare enum LineCapValues {
    /** undefined. Serialized value: `rnd` */
    Round = "rnd",
    /** undefined. Serialized value: `sq` */
    Square = "sq",
    /** undefined. Serialized value: `flat` */
    Flat = "flat"
}
export declare const LineCapValuesArray: readonly [LineCapValues.Round, LineCapValues.Square, LineCapValues.Flat];
export declare enum PresetLineDashValues {
    /** undefined. Serialized value: `solid` */
    Solid = "solid",
    /** undefined. Serialized value: `dot` */
    Dot = "dot",
    /** undefined. Serialized value: `sysDot` */
    SysDot = "sysDot",
    /** undefined. Serialized value: `dash` */
    Dash = "dash",
    /** undefined. Serialized value: `sysDash` */
    SysDash = "sysDash",
    /** undefined. Serialized value: `lgDash` */
    LongDash = "lgDash",
    /** undefined. Serialized value: `dashDot` */
    DashDot = "dashDot",
    /** undefined. Serialized value: `sysDashDot` */
    SystemDashDot = "sysDashDot",
    /** undefined. Serialized value: `lgDashDot` */
    LongDashDot = "lgDashDot",
    /** undefined. Serialized value: `lgDashDotDot` */
    LongDashDotDot = "lgDashDotDot",
    /** undefined. Serialized value: `sysDashDotDot` */
    SystemDashDotDot = "sysDashDotDot"
}
export declare const PresetLineDashValuesArray: readonly [PresetLineDashValues.Solid, PresetLineDashValues.Dot, PresetLineDashValues.SysDot, PresetLineDashValues.Dash, PresetLineDashValues.SysDash, PresetLineDashValues.LongDash, PresetLineDashValues.DashDot, PresetLineDashValues.SystemDashDot, PresetLineDashValues.LongDashDot, PresetLineDashValues.LongDashDotDot, PresetLineDashValues.SystemDashDotDot];
export declare enum PenAlignmentValues {
    /** undefined. Serialized value: `ctr` */
    Center = "ctr",
    /** undefined. Serialized value: `in` */
    Inset = "in"
}
export declare const PenAlignmentValuesArray: readonly [PenAlignmentValues.Center, PenAlignmentValues.Inset];
export declare enum CompoundLineValues {
    /** undefined. Serialized value: `sng` */
    Simple = "sng",
    /** undefined. Serialized value: `dbl` */
    Double = "dbl",
    /** undefined. Serialized value: `thickThin` */
    ThickThin = "thickThin",
    /** undefined. Serialized value: `thinThick` */
    ThinThick = "thinThick",
    /** undefined. Serialized value: `tri` */
    Triple = "tri"
}
export declare const CompoundLineValuesArray: readonly [CompoundLineValues.Simple, CompoundLineValues.Double, CompoundLineValues.ThickThin, CompoundLineValues.ThinThick, CompoundLineValues.Triple];
export declare enum PresetCameraTypeValues {
    /** undefined. Serialized value: `legacyObliqueTopLeft` */
    LegacyObliqueTopLeft = "legacyObliqueTopLeft",
    /** undefined. Serialized value: `legacyObliqueTop` */
    LegacyObliqueTop = "legacyObliqueTop",
    /** undefined. Serialized value: `legacyObliqueTopRight` */
    LegacyObliqueTopRight = "legacyObliqueTopRight",
    /** undefined. Serialized value: `legacyObliqueLeft` */
    LegacyObliqueLeft = "legacyObliqueLeft",
    /** undefined. Serialized value: `legacyObliqueFront` */
    LegacyObliqueFront = "legacyObliqueFront",
    /** undefined. Serialized value: `legacyObliqueRight` */
    LegacyObliqueRight = "legacyObliqueRight",
    /** undefined. Serialized value: `legacyObliqueBottomLeft` */
    LegacyObliqueBottomLeft = "legacyObliqueBottomLeft",
    /** undefined. Serialized value: `legacyObliqueBottom` */
    LegacyObliqueBottom = "legacyObliqueBottom",
    /** undefined. Serialized value: `legacyObliqueBottomRight` */
    LegacyObliqueBottomRight = "legacyObliqueBottomRight",
    /** undefined. Serialized value: `legacyPerspectiveTopLeft` */
    LegacyPerspectiveTopLeft = "legacyPerspectiveTopLeft",
    /** undefined. Serialized value: `legacyPerspectiveTop` */
    LegacyPerspectiveTop = "legacyPerspectiveTop",
    /** undefined. Serialized value: `legacyPerspectiveTopRight` */
    LegacyPerspectiveTopRight = "legacyPerspectiveTopRight",
    /** undefined. Serialized value: `legacyPerspectiveLeft` */
    LegacyPerspectiveLeft = "legacyPerspectiveLeft",
    /** undefined. Serialized value: `legacyPerspectiveFront` */
    LegacyPerspectiveFront = "legacyPerspectiveFront",
    /** undefined. Serialized value: `legacyPerspectiveRight` */
    LegacyPerspectiveRight = "legacyPerspectiveRight",
    /** undefined. Serialized value: `legacyPerspectiveBottomLeft` */
    LegacyPerspectiveBottomLeft = "legacyPerspectiveBottomLeft",
    /** undefined. Serialized value: `legacyPerspectiveBottom` */
    LegacyPerspectiveBottom = "legacyPerspectiveBottom",
    /** undefined. Serialized value: `legacyPerspectiveBottomRight` */
    LegacyPerspectiveBottomRight = "legacyPerspectiveBottomRight",
    /** undefined. Serialized value: `orthographicFront` */
    OrthographicFront = "orthographicFront",
    /** undefined. Serialized value: `isometricTopUp` */
    IsometricTopUp = "isometricTopUp",
    /** undefined. Serialized value: `isometricTopDown` */
    IsometricTopDown = "isometricTopDown",
    /** undefined. Serialized value: `isometricBottomUp` */
    IsometricBottomUp = "isometricBottomUp",
    /** undefined. Serialized value: `isometricBottomDown` */
    IsometricBottomDown = "isometricBottomDown",
    /** undefined. Serialized value: `isometricLeftUp` */
    IsometricLeftUp = "isometricLeftUp",
    /** undefined. Serialized value: `isometricLeftDown` */
    IsometricLeftDown = "isometricLeftDown",
    /** undefined. Serialized value: `isometricRightUp` */
    IsometricRightUp = "isometricRightUp",
    /** undefined. Serialized value: `isometricRightDown` */
    IsometricRightDown = "isometricRightDown",
    /** undefined. Serialized value: `isometricOffAxis1Left` */
    IsometricOffAxis1Left = "isometricOffAxis1Left",
    /** undefined. Serialized value: `isometricOffAxis1Right` */
    IsometricOffAxis1Right = "isometricOffAxis1Right",
    /** undefined. Serialized value: `isometricOffAxis1Top` */
    IsometricOffAxis1Top = "isometricOffAxis1Top",
    /** undefined. Serialized value: `isometricOffAxis2Left` */
    IsometricOffAxis2Left = "isometricOffAxis2Left",
    /** undefined. Serialized value: `isometricOffAxis2Right` */
    IsometricOffAxis2Right = "isometricOffAxis2Right",
    /** undefined. Serialized value: `isometricOffAxis2Top` */
    IsometricOffAxis2Top = "isometricOffAxis2Top",
    /** undefined. Serialized value: `isometricOffAxis3Left` */
    IsometricOffAxis3Left = "isometricOffAxis3Left",
    /** undefined. Serialized value: `isometricOffAxis3Right` */
    IsometricOffAxis3Right = "isometricOffAxis3Right",
    /** undefined. Serialized value: `isometricOffAxis3Bottom` */
    IsometricOffAxis3Bottom = "isometricOffAxis3Bottom",
    /** undefined. Serialized value: `isometricOffAxis4Left` */
    IsometricOffAxis4Left = "isometricOffAxis4Left",
    /** undefined. Serialized value: `isometricOffAxis4Right` */
    IsometricOffAxis4Right = "isometricOffAxis4Right",
    /** undefined. Serialized value: `isometricOffAxis4Bottom` */
    IsometricOffAxis4Bottom = "isometricOffAxis4Bottom",
    /** undefined. Serialized value: `obliqueTopLeft` */
    ObliqueTopLeft = "obliqueTopLeft",
    /** undefined. Serialized value: `obliqueTop` */
    ObliqueTop = "obliqueTop",
    /** undefined. Serialized value: `obliqueTopRight` */
    ObliqueTopRight = "obliqueTopRight",
    /** undefined. Serialized value: `obliqueLeft` */
    ObliqueLeft = "obliqueLeft",
    /** undefined. Serialized value: `obliqueRight` */
    ObliqueRight = "obliqueRight",
    /** undefined. Serialized value: `obliqueBottomLeft` */
    ObliqueBottomLeft = "obliqueBottomLeft",
    /** undefined. Serialized value: `obliqueBottom` */
    ObliqueBottom = "obliqueBottom",
    /** undefined. Serialized value: `obliqueBottomRight` */
    ObliqueBottomRight = "obliqueBottomRight",
    /** undefined. Serialized value: `perspectiveFront` */
    PerspectiveFront = "perspectiveFront",
    /** undefined. Serialized value: `perspectiveLeft` */
    PerspectiveLeft = "perspectiveLeft",
    /** undefined. Serialized value: `perspectiveRight` */
    PerspectiveRight = "perspectiveRight",
    /** undefined. Serialized value: `perspectiveAbove` */
    PerspectiveAbove = "perspectiveAbove",
    /** undefined. Serialized value: `perspectiveBelow` */
    PerspectiveBelow = "perspectiveBelow",
    /** undefined. Serialized value: `perspectiveAboveLeftFacing` */
    PerspectiveAboveLeftFacing = "perspectiveAboveLeftFacing",
    /** undefined. Serialized value: `perspectiveAboveRightFacing` */
    PerspectiveAboveRightFacing = "perspectiveAboveRightFacing",
    /** undefined. Serialized value: `perspectiveContrastingLeftFacing` */
    PerspectiveContrastingLeftFacing = "perspectiveContrastingLeftFacing",
    /** undefined. Serialized value: `perspectiveContrastingRightFacing` */
    PerspectiveContrastingRightFacing = "perspectiveContrastingRightFacing",
    /** undefined. Serialized value: `perspectiveHeroicLeftFacing` */
    PerspectiveHeroicLeftFacing = "perspectiveHeroicLeftFacing",
    /** undefined. Serialized value: `perspectiveHeroicRightFacing` */
    PerspectiveHeroicRightFacing = "perspectiveHeroicRightFacing",
    /** undefined. Serialized value: `perspectiveHeroicExtremeLeftFacing` */
    PerspectiveHeroicExtremeLeftFacing = "perspectiveHeroicExtremeLeftFacing",
    /** undefined. Serialized value: `perspectiveHeroicExtremeRightFacing` */
    PerspectiveHeroicExtremeRightFacing = "perspectiveHeroicExtremeRightFacing",
    /** undefined. Serialized value: `perspectiveRelaxed` */
    PerspectiveRelaxed = "perspectiveRelaxed",
    /** undefined. Serialized value: `perspectiveRelaxedModerately` */
    PerspectiveRelaxedModerately = "perspectiveRelaxedModerately"
}
export declare const PresetCameraTypeValuesArray: readonly [PresetCameraTypeValues.LegacyObliqueTopLeft, PresetCameraTypeValues.LegacyObliqueTop, PresetCameraTypeValues.LegacyObliqueTopRight, PresetCameraTypeValues.LegacyObliqueLeft, PresetCameraTypeValues.LegacyObliqueFront, PresetCameraTypeValues.LegacyObliqueRight, PresetCameraTypeValues.LegacyObliqueBottomLeft, PresetCameraTypeValues.LegacyObliqueBottom, PresetCameraTypeValues.LegacyObliqueBottomRight, PresetCameraTypeValues.LegacyPerspectiveTopLeft, PresetCameraTypeValues.LegacyPerspectiveTop, PresetCameraTypeValues.LegacyPerspectiveTopRight, PresetCameraTypeValues.LegacyPerspectiveLeft, PresetCameraTypeValues.LegacyPerspectiveFront, PresetCameraTypeValues.LegacyPerspectiveRight, PresetCameraTypeValues.LegacyPerspectiveBottomLeft, PresetCameraTypeValues.LegacyPerspectiveBottom, PresetCameraTypeValues.LegacyPerspectiveBottomRight, PresetCameraTypeValues.OrthographicFront, PresetCameraTypeValues.IsometricTopUp, PresetCameraTypeValues.IsometricTopDown, PresetCameraTypeValues.IsometricBottomUp, PresetCameraTypeValues.IsometricBottomDown, PresetCameraTypeValues.IsometricLeftUp, PresetCameraTypeValues.IsometricLeftDown, PresetCameraTypeValues.IsometricRightUp, PresetCameraTypeValues.IsometricRightDown, PresetCameraTypeValues.IsometricOffAxis1Left, PresetCameraTypeValues.IsometricOffAxis1Right, PresetCameraTypeValues.IsometricOffAxis1Top, PresetCameraTypeValues.IsometricOffAxis2Left, PresetCameraTypeValues.IsometricOffAxis2Right, PresetCameraTypeValues.IsometricOffAxis2Top, PresetCameraTypeValues.IsometricOffAxis3Left, PresetCameraTypeValues.IsometricOffAxis3Right, PresetCameraTypeValues.IsometricOffAxis3Bottom, PresetCameraTypeValues.IsometricOffAxis4Left, PresetCameraTypeValues.IsometricOffAxis4Right, PresetCameraTypeValues.IsometricOffAxis4Bottom, PresetCameraTypeValues.ObliqueTopLeft, PresetCameraTypeValues.ObliqueTop, PresetCameraTypeValues.ObliqueTopRight, PresetCameraTypeValues.ObliqueLeft, PresetCameraTypeValues.ObliqueRight, PresetCameraTypeValues.ObliqueBottomLeft, PresetCameraTypeValues.ObliqueBottom, PresetCameraTypeValues.ObliqueBottomRight, PresetCameraTypeValues.PerspectiveFront, PresetCameraTypeValues.PerspectiveLeft, PresetCameraTypeValues.PerspectiveRight, PresetCameraTypeValues.PerspectiveAbove, PresetCameraTypeValues.PerspectiveBelow, PresetCameraTypeValues.PerspectiveAboveLeftFacing, PresetCameraTypeValues.PerspectiveAboveRightFacing, PresetCameraTypeValues.PerspectiveContrastingLeftFacing, PresetCameraTypeValues.PerspectiveContrastingRightFacing, PresetCameraTypeValues.PerspectiveHeroicLeftFacing, PresetCameraTypeValues.PerspectiveHeroicRightFacing, PresetCameraTypeValues.PerspectiveHeroicExtremeLeftFacing, PresetCameraTypeValues.PerspectiveHeroicExtremeRightFacing, PresetCameraTypeValues.PerspectiveRelaxed, PresetCameraTypeValues.PerspectiveRelaxedModerately];
export declare enum LightRigTypeValues {
    /** undefined. Serialized value: `legacyFlat1` */
    LegacyFlat1 = "legacyFlat1",
    /** undefined. Serialized value: `legacyFlat2` */
    LegacyFlat2 = "legacyFlat2",
    /** undefined. Serialized value: `legacyFlat3` */
    LegacyFlat3 = "legacyFlat3",
    /** undefined. Serialized value: `legacyFlat4` */
    LegacyFlat4 = "legacyFlat4",
    /** undefined. Serialized value: `legacyNormal1` */
    LegacyNormal1 = "legacyNormal1",
    /** undefined. Serialized value: `legacyNormal2` */
    LegacyNormal2 = "legacyNormal2",
    /** undefined. Serialized value: `legacyNormal3` */
    LegacyNormal3 = "legacyNormal3",
    /** undefined. Serialized value: `legacyNormal4` */
    LegacyNormal4 = "legacyNormal4",
    /** undefined. Serialized value: `legacyHarsh1` */
    LegacyHarsh1 = "legacyHarsh1",
    /** undefined. Serialized value: `legacyHarsh2` */
    LegacyHarsh2 = "legacyHarsh2",
    /** undefined. Serialized value: `legacyHarsh3` */
    LegacyHarsh3 = "legacyHarsh3",
    /** undefined. Serialized value: `legacyHarsh4` */
    LegacyHarsh4 = "legacyHarsh4",
    /** undefined. Serialized value: `threePt` */
    ThreePoint = "threePt",
    /** undefined. Serialized value: `balanced` */
    Balanced = "balanced",
    /** undefined. Serialized value: `soft` */
    Soft = "soft",
    /** undefined. Serialized value: `harsh` */
    Harsh = "harsh",
    /** undefined. Serialized value: `flood` */
    Flood = "flood",
    /** undefined. Serialized value: `contrasting` */
    Contrasting = "contrasting",
    /** undefined. Serialized value: `morning` */
    Morning = "morning",
    /** undefined. Serialized value: `sunrise` */
    Sunrise = "sunrise",
    /** undefined. Serialized value: `sunset` */
    Sunset = "sunset",
    /** undefined. Serialized value: `chilly` */
    Chilly = "chilly",
    /** undefined. Serialized value: `freezing` */
    Freezing = "freezing",
    /** undefined. Serialized value: `flat` */
    Flat = "flat",
    /** undefined. Serialized value: `twoPt` */
    TwoPoint = "twoPt",
    /** undefined. Serialized value: `glow` */
    Glow = "glow",
    /** undefined. Serialized value: `brightRoom` */
    BrightRoom = "brightRoom"
}
export declare const LightRigTypeValuesArray: readonly [LightRigTypeValues.LegacyFlat1, LightRigTypeValues.LegacyFlat2, LightRigTypeValues.LegacyFlat3, LightRigTypeValues.LegacyFlat4, LightRigTypeValues.LegacyNormal1, LightRigTypeValues.LegacyNormal2, LightRigTypeValues.LegacyNormal3, LightRigTypeValues.LegacyNormal4, LightRigTypeValues.LegacyHarsh1, LightRigTypeValues.LegacyHarsh2, LightRigTypeValues.LegacyHarsh3, LightRigTypeValues.LegacyHarsh4, LightRigTypeValues.ThreePoint, LightRigTypeValues.Balanced, LightRigTypeValues.Soft, LightRigTypeValues.Harsh, LightRigTypeValues.Flood, LightRigTypeValues.Contrasting, LightRigTypeValues.Morning, LightRigTypeValues.Sunrise, LightRigTypeValues.Sunset, LightRigTypeValues.Chilly, LightRigTypeValues.Freezing, LightRigTypeValues.Flat, LightRigTypeValues.TwoPoint, LightRigTypeValues.Glow, LightRigTypeValues.BrightRoom];
export declare enum LightRigDirectionValues {
    /** undefined. Serialized value: `tl` */
    TopLeft = "tl",
    /** undefined. Serialized value: `t` */
    Top = "t",
    /** undefined. Serialized value: `tr` */
    TopRight = "tr",
    /** undefined. Serialized value: `l` */
    Left = "l",
    /** undefined. Serialized value: `r` */
    Right = "r",
    /** undefined. Serialized value: `bl` */
    BottomLeft = "bl",
    /** undefined. Serialized value: `b` */
    Bottom = "b",
    /** undefined. Serialized value: `br` */
    BottomRight = "br"
}
export declare const LightRigDirectionValuesArray: readonly [LightRigDirectionValues.TopLeft, LightRigDirectionValues.Top, LightRigDirectionValues.TopRight, LightRigDirectionValues.Left, LightRigDirectionValues.Right, LightRigDirectionValues.BottomLeft, LightRigDirectionValues.Bottom, LightRigDirectionValues.BottomRight];
export declare enum BevelPresetTypeValues {
    /** undefined. Serialized value: `relaxedInset` */
    RelaxedInset = "relaxedInset",
    /** undefined. Serialized value: `circle` */
    Circle = "circle",
    /** undefined. Serialized value: `slope` */
    Slope = "slope",
    /** undefined. Serialized value: `cross` */
    Cross = "cross",
    /** undefined. Serialized value: `angle` */
    Angle = "angle",
    /** undefined. Serialized value: `softRound` */
    SoftRound = "softRound",
    /** undefined. Serialized value: `convex` */
    Convex = "convex",
    /** undefined. Serialized value: `coolSlant` */
    CoolSlant = "coolSlant",
    /** undefined. Serialized value: `divot` */
    Divot = "divot",
    /** undefined. Serialized value: `riblet` */
    Riblet = "riblet",
    /** undefined. Serialized value: `hardEdge` */
    HardEdge = "hardEdge",
    /** undefined. Serialized value: `artDeco` */
    ArtDeco = "artDeco"
}
export declare const BevelPresetTypeValuesArray: readonly [BevelPresetTypeValues.RelaxedInset, BevelPresetTypeValues.Circle, BevelPresetTypeValues.Slope, BevelPresetTypeValues.Cross, BevelPresetTypeValues.Angle, BevelPresetTypeValues.SoftRound, BevelPresetTypeValues.Convex, BevelPresetTypeValues.CoolSlant, BevelPresetTypeValues.Divot, BevelPresetTypeValues.Riblet, BevelPresetTypeValues.HardEdge, BevelPresetTypeValues.ArtDeco];
export declare enum PresetMaterialTypeValues {
    /** undefined. Serialized value: `legacyMatte` */
    LegacyMatte = "legacyMatte",
    /** undefined. Serialized value: `legacyPlastic` */
    LegacyPlastic = "legacyPlastic",
    /** undefined. Serialized value: `legacyMetal` */
    LegacyMetal = "legacyMetal",
    /** undefined. Serialized value: `legacyWireframe` */
    LegacyWireframe = "legacyWireframe",
    /** undefined. Serialized value: `matte` */
    Matte = "matte",
    /** undefined. Serialized value: `plastic` */
    Plastic = "plastic",
    /** undefined. Serialized value: `metal` */
    Metal = "metal",
    /** undefined. Serialized value: `warmMatte` */
    WarmMatte = "warmMatte",
    /** undefined. Serialized value: `translucentPowder` */
    TranslucentPowder = "translucentPowder",
    /** undefined. Serialized value: `powder` */
    Powder = "powder",
    /** undefined. Serialized value: `dkEdge` */
    DarkEdge = "dkEdge",
    /** undefined. Serialized value: `softEdge` */
    SoftEdge = "softEdge",
    /** undefined. Serialized value: `clear` */
    Clear = "clear",
    /** undefined. Serialized value: `flat` */
    Flat = "flat",
    /** undefined. Serialized value: `softmetal` */
    SoftMetal = "softmetal",
    /** undefined. Serialized value: `none` */
    None = "none"
}
export declare const PresetMaterialTypeValuesArray: readonly [PresetMaterialTypeValues.LegacyMatte, PresetMaterialTypeValues.LegacyPlastic, PresetMaterialTypeValues.LegacyMetal, PresetMaterialTypeValues.LegacyWireframe, PresetMaterialTypeValues.Matte, PresetMaterialTypeValues.Plastic, PresetMaterialTypeValues.Metal, PresetMaterialTypeValues.WarmMatte, PresetMaterialTypeValues.TranslucentPowder, PresetMaterialTypeValues.Powder, PresetMaterialTypeValues.DarkEdge, PresetMaterialTypeValues.SoftEdge, PresetMaterialTypeValues.Clear, PresetMaterialTypeValues.Flat, PresetMaterialTypeValues.SoftMetal, PresetMaterialTypeValues.None];
export declare enum LigaturesValues {
    /** undefined. Serialized value: `none` */
    None = "none",
    /** undefined. Serialized value: `standard` */
    Standard = "standard",
    /** undefined. Serialized value: `contextual` */
    Contextual = "contextual",
    /** undefined. Serialized value: `historical` */
    Historical = "historical",
    /** undefined. Serialized value: `discretional` */
    Discretional = "discretional",
    /** undefined. Serialized value: `standardContextual` */
    StandardContextual = "standardContextual",
    /** undefined. Serialized value: `standardHistorical` */
    StandardHistorical = "standardHistorical",
    /** undefined. Serialized value: `contextualHistorical` */
    ContextualHistorical = "contextualHistorical",
    /** undefined. Serialized value: `standardDiscretional` */
    StandardDiscretional = "standardDiscretional",
    /** undefined. Serialized value: `contextualDiscretional` */
    ContextualDiscretional = "contextualDiscretional",
    /** undefined. Serialized value: `historicalDiscretional` */
    HistoricalDiscretional = "historicalDiscretional",
    /** undefined. Serialized value: `standardContextualHistorical` */
    StandardContextualHistorical = "standardContextualHistorical",
    /** undefined. Serialized value: `standardContextualDiscretional` */
    StandardContextualDiscretional = "standardContextualDiscretional",
    /** undefined. Serialized value: `standardHistoricalDiscretional` */
    StandardHistoricalDiscretional = "standardHistoricalDiscretional",
    /** undefined. Serialized value: `contextualHistoricalDiscretional` */
    ContextualHistoricalDiscretional = "contextualHistoricalDiscretional",
    /** undefined. Serialized value: `all` */
    All = "all"
}
export declare const LigaturesValuesArray: readonly [LigaturesValues.None, LigaturesValues.Standard, LigaturesValues.Contextual, LigaturesValues.Historical, LigaturesValues.Discretional, LigaturesValues.StandardContextual, LigaturesValues.StandardHistorical, LigaturesValues.ContextualHistorical, LigaturesValues.StandardDiscretional, LigaturesValues.ContextualDiscretional, LigaturesValues.HistoricalDiscretional, LigaturesValues.StandardContextualHistorical, LigaturesValues.StandardContextualDiscretional, LigaturesValues.StandardHistoricalDiscretional, LigaturesValues.ContextualHistoricalDiscretional, LigaturesValues.All];
export declare enum NumberFormValues {
    /** undefined. Serialized value: `default` */
    Default = "default",
    /** undefined. Serialized value: `lining` */
    Lining = "lining",
    /** undefined. Serialized value: `oldStyle` */
    OldStyle = "oldStyle"
}
export declare const NumberFormValuesArray: readonly [NumberFormValues.Default, NumberFormValues.Lining, NumberFormValues.OldStyle];
export declare enum NumberSpacingValues {
    /** undefined. Serialized value: `default` */
    Default = "default",
    /** undefined. Serialized value: `proportional` */
    Proportional = "proportional",
    /** undefined. Serialized value: `tabular` */
    Tabular = "tabular"
}
export declare const NumberSpacingValuesArray: readonly [NumberSpacingValues.Default, NumberSpacingValues.Proportional, NumberSpacingValues.Tabular];
/** Defines the OfficeArtExtensionList Class. Serialized as `w14:extLst` */
export declare class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {
    static _Q: string;
}
/** Defines the Transform2D Class. Serialized as `w14:xfrm` */
export declare class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {
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
/** Defines the WordNonVisualContentPartShapeProperties Class. Serialized as `w14:nvContentPartPr` */
export declare class WordNonVisualContentPartShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualInkContentPartProperties. */
    get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined;
}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `w14:cNvContentPartPr` */
export declare class NonVisualInkContentPartProperties extends OxmlCompositeElement<A14ContentPartLocks | A14OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** isComment. Serialized as `:isComment` */
    get isComment(): BooleanValue | undefined;
    set isComment(v: BooleanValue | undefined);
    /** Returns A14ContentPartLocks. */
    get contentPartLocks(): A14ContentPartLocks | undefined;
    /** Returns A14OfficeArtExtensionList. */
    get officeArtExtensionList(): A14OfficeArtExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `w14:cNvPr` */
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
/** Defines the CheckBoxSymbolType Class. */
export declare abstract class CheckBoxSymbolType extends OxmlLeafElement {
    static _A: string[];
    /** font. Serialized as `w14:font` */
    get font(): StringValue | undefined;
    set font(v: StringValue | undefined);
    /** val. Serialized as `w14:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
}
/** Defines the UncheckedState Class. Serialized as `w14:uncheckedState` */
export declare class UncheckedState extends CheckBoxSymbolType {
    static _Q: string;
}
/** Defines the CheckedState Class. Serialized as `w14:checkedState` */
export declare class CheckedState extends CheckBoxSymbolType {
    static _Q: string;
}
/** Defines the StyleSet Class. Serialized as `w14:styleSet` */
export declare class StyleSet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `w14:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** val. Serialized as `w14:val` */
    get val(): OnOffValues | undefined;
    set val(v: OnOffValues | undefined);
}
/** Defines the ColorType Class. */
export declare abstract class ColorType extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {
    /** Returns RgbColorModelHex. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Returns SchemeColor. */
    get schemeColor(): SchemeColor | undefined;
}
/** Defines the ContourColor Class. Serialized as `w14:contourClr` */
export declare class ContourColor extends ColorType {
    static _Q: string;
}
/** Defines the ExtrusionColor Class. Serialized as `w14:extrusionClr` */
export declare class ExtrusionColor extends ColorType {
    static _Q: string;
}
/** Defines the BevelType Class. */
export declare abstract class BevelType extends OxmlLeafElement {
    static _A: string[];
    /** w. Serialized as `w14:w` */
    get width(): Int64Value | undefined;
    set width(v: Int64Value | undefined);
    /** h. Serialized as `w14:h` */
    get height(): Int64Value | undefined;
    set height(v: Int64Value | undefined);
    /** prst. Serialized as `w14:prst` */
    get presetProfileType(): BevelPresetTypeValues | undefined;
    set presetProfileType(v: BevelPresetTypeValues | undefined);
}
/** Defines the BevelBottom Class. Serialized as `w14:bevelB` */
export declare class BevelBottom extends BevelType {
    static _Q: string;
}
/** Defines the BevelTop Class. Serialized as `w14:bevelT` */
export declare class BevelTop extends BevelType {
    static _Q: string;
}
/** Defines the LightRig Class. Serialized as `w14:lightRig` */
export declare class LightRig extends OxmlCompositeElement<SphereCoordinates> {
    static _Q: string;
    static _A: string[];
    /** rig. Serialized as `w14:rig` */
    get lightRigType(): LightRigTypeValues | undefined;
    set lightRigType(v: LightRigTypeValues | undefined);
    /** dir. Serialized as `w14:dir` */
    get lightDirectionType(): LightRigDirectionValues | undefined;
    set lightDirectionType(v: LightRigDirectionValues | undefined);
    /** Returns SphereCoordinates. */
    get sphereCoordinates(): SphereCoordinates | undefined;
}
/** Defines the Camera Class. Serialized as `w14:camera` */
export declare class Camera extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** prst. Serialized as `w14:prst` */
    get presetCameraType(): PresetCameraTypeValues | undefined;
    set presetCameraType(v: PresetCameraTypeValues | undefined);
}
/** Defines the SphereCoordinates Class. Serialized as `w14:rot` */
export declare class SphereCoordinates extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** lat. Serialized as `w14:lat` */
    get lattitude(): Int32Value | undefined;
    set lattitude(v: Int32Value | undefined);
    /** lon. Serialized as `w14:lon` */
    get longitude(): Int32Value | undefined;
    set longitude(v: Int32Value | undefined);
    /** rev. Serialized as `w14:rev` */
    get revolution(): Int32Value | undefined;
    set revolution(v: Int32Value | undefined);
}
/** Defines the GradientStopList Class. Serialized as `w14:gsLst` */
export declare class GradientStopList extends OxmlCompositeElement<GradientStop> {
    static _Q: string;
}
/** Defines the FillToRectangle Class. Serialized as `w14:fillToRect` */
export declare class FillToRectangle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** l. Serialized as `w14:l` */
    get left(): Int32Value | undefined;
    set left(v: Int32Value | undefined);
    /** t. Serialized as `w14:t` */
    get top(): Int32Value | undefined;
    set top(v: Int32Value | undefined);
    /** r. Serialized as `w14:r` */
    get right(): Int32Value | undefined;
    set right(v: Int32Value | undefined);
    /** b. Serialized as `w14:b` */
    get bottom(): Int32Value | undefined;
    set bottom(v: Int32Value | undefined);
}
/** Defines the GradientStop Class. Serialized as `w14:gs` */
export declare class GradientStop extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {
    static _Q: string;
    static _A: string[];
    /** pos. Serialized as `w14:pos` */
    get stopPosition(): Int32Value | undefined;
    set stopPosition(v: Int32Value | undefined);
    /** Returns RgbColorModelHex. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Returns SchemeColor. */
    get schemeColor(): SchemeColor | undefined;
}
/** Defines the SdtContentCheckBox Class. Serialized as `w14:checkbox` */
export declare class SdtContentCheckBox extends OxmlCompositeElement<Checked | CheckedState | UncheckedState> {
    static _Q: string;
    /** Returns Checked. */
    get checked(): Checked | undefined;
    /** Returns CheckedState. */
    get checkedState(): CheckedState | undefined;
    /** Returns UncheckedState. */
    get uncheckedState(): UncheckedState | undefined;
}
/** Defines the DefaultImageDpi Class. Serialized as `w14:defaultImageDpi` */
export declare class DefaultImageDpi extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the MarkupType Class. */
export declare abstract class MarkupType extends OxmlLeafElement {
    static _A: string[];
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the CustomXmlConflictDeletionRangeEnd Class. Serialized as `w14:customXmlConflictDelRangeEnd` */
export declare class CustomXmlConflictDeletionRangeEnd extends MarkupType {
    static _Q: string;
}
/** Defines the CustomXmlConflictInsertionRangeEnd Class. Serialized as `w14:customXmlConflictInsRangeEnd` */
export declare class CustomXmlConflictInsertionRangeEnd extends MarkupType {
    static _Q: string;
}
/** Defines the DocumentId Class. Serialized as `w14:docId` */
export declare class DocumentId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
}
/** Defines the ContentPart Class. Serialized as `w14:contentPart` */
export declare class ContentPart extends OxmlCompositeElement<WordNonVisualContentPartShapeProperties | Transform2D | OfficeArtExtensionList> {
    static _Q: string;
    static _A: string[];
    /** bwMode. Serialized as `w14:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** id. Serialized as `r:id` */
    get relationshipId(): StringValue | undefined;
    set relationshipId(v: StringValue | undefined);
    /** Returns WordNonVisualContentPartShapeProperties. */
    get wordNonVisualContentPartShapeProperties(): WordNonVisualContentPartShapeProperties | undefined;
    /** Returns Transform2D. */
    get transform2D(): Transform2D | undefined;
    /** Returns OfficeArtExtensionList. */
    get officeArtExtensionList(): OfficeArtExtensionList | undefined;
}
/** Defines the OnOffType Class. */
export declare abstract class OnOffType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): OnOffValues | undefined;
    set val(v: OnOffValues | undefined);
}
/** Defines the Checked Class. Serialized as `w14:checked` */
export declare class Checked extends OnOffType {
    static _Q: string;
}
/** Defines the DiscardImageEditingData Class. Serialized as `w14:discardImageEditingData` */
export declare class DiscardImageEditingData extends OnOffType {
    static _Q: string;
}
/** Defines the ConflictMode Class. Serialized as `w14:conflictMode` */
export declare class ConflictMode extends OnOffType {
    static _Q: string;
}
/** Defines the ContextualAlternatives Class. Serialized as `w14:cntxtAlts` */
export declare class ContextualAlternatives extends OnOffType {
    static _Q: string;
}
/** Defines the StylisticSets Class. Serialized as `w14:stylisticSets` */
export declare class StylisticSets extends OxmlCompositeElement<StyleSet> {
    static _Q: string;
}
/** Defines the NumberSpacing Class. Serialized as `w14:numSpacing` */
export declare class NumberSpacing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): NumberSpacingValues | undefined;
    set val(v: NumberSpacingValues | undefined);
}
/** Defines the NumberingFormat Class. Serialized as `w14:numForm` */
export declare class NumberingFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): NumberFormValues | undefined;
    set val(v: NumberFormValues | undefined);
}
/** Defines the Ligatures Class. Serialized as `w14:ligatures` */
export declare class Ligatures extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): LigaturesValues | undefined;
    set val(v: LigaturesValues | undefined);
}
/** Defines the Properties3D Class. Serialized as `w14:props3d` */
export declare class Properties3D extends OxmlCompositeElement<BevelTop | BevelBottom | ExtrusionColor | ContourColor> {
    static _Q: string;
    static _A: string[];
    /** extrusionH. Serialized as `w14:extrusionH` */
    get extrusionHeight(): Int64Value | undefined;
    set extrusionHeight(v: Int64Value | undefined);
    /** contourW. Serialized as `w14:contourW` */
    get contourWidth(): Int64Value | undefined;
    set contourWidth(v: Int64Value | undefined);
    /** prstMaterial. Serialized as `w14:prstMaterial` */
    get presetMaterialType(): PresetMaterialTypeValues | undefined;
    set presetMaterialType(v: PresetMaterialTypeValues | undefined);
    /** Returns BevelTop. */
    get bevelTop(): BevelTop | undefined;
    /** Returns BevelBottom. */
    get bevelBottom(): BevelBottom | undefined;
    /** Returns ExtrusionColor. */
    get extrusionColor(): ExtrusionColor | undefined;
    /** Returns ContourColor. */
    get contourColor(): ContourColor | undefined;
}
/** Defines the Scene3D Class. Serialized as `w14:scene3d` */
export declare class Scene3D extends OxmlCompositeElement<Camera | LightRig> {
    static _Q: string;
    /** Returns Camera. */
    get camera(): Camera | undefined;
    /** Returns LightRig. */
    get lightRig(): LightRig | undefined;
}
/** Defines the FillTextEffect Class. Serialized as `w14:textFill` */
export declare class FillTextEffect extends OxmlCompositeElement<NoFillEmpty | SolidColorFillProperties | GradientFillProperties> {
    static _Q: string;
    /** Returns NoFillEmpty. */
    get noFillEmpty(): NoFillEmpty | undefined;
    /** Returns SolidColorFillProperties. */
    get solidColorFillProperties(): SolidColorFillProperties | undefined;
    /** Returns GradientFillProperties. */
    get gradientFillProperties(): GradientFillProperties | undefined;
}
/** Defines the TextOutlineEffect Class. Serialized as `w14:textOutline` */
export declare class TextOutlineEffect extends OxmlCompositeElement<NoFillEmpty | SolidColorFillProperties | GradientFillProperties | PresetLineDashProperties | RoundEmpty | BevelEmpty | LineJoinMiterProperties> {
    static _Q: string;
    static _A: string[];
    /** w. Serialized as `w14:w` */
    get lineWidth(): Int32Value | undefined;
    set lineWidth(v: Int32Value | undefined);
    /** cap. Serialized as `w14:cap` */
    get capType(): LineCapValues | undefined;
    set capType(v: LineCapValues | undefined);
    /** cmpd. Serialized as `w14:cmpd` */
    get compound(): CompoundLineValues | undefined;
    set compound(v: CompoundLineValues | undefined);
    /** algn. Serialized as `w14:algn` */
    get alignment(): PenAlignmentValues | undefined;
    set alignment(v: PenAlignmentValues | undefined);
}
/** Defines the Reflection Class. Serialized as `w14:reflection` */
export declare class Reflection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** blurRad. Serialized as `w14:blurRad` */
    get blurRadius(): Int64Value | undefined;
    set blurRadius(v: Int64Value | undefined);
    /** stA. Serialized as `w14:stA` */
    get startingOpacity(): Int32Value | undefined;
    set startingOpacity(v: Int32Value | undefined);
    /** stPos. Serialized as `w14:stPos` */
    get startPosition(): Int32Value | undefined;
    set startPosition(v: Int32Value | undefined);
    /** endA. Serialized as `w14:endA` */
    get endingOpacity(): Int32Value | undefined;
    set endingOpacity(v: Int32Value | undefined);
    /** endPos. Serialized as `w14:endPos` */
    get endPosition(): Int32Value | undefined;
    set endPosition(v: Int32Value | undefined);
    /** dist. Serialized as `w14:dist` */
    get distanceFromText(): Int64Value | undefined;
    set distanceFromText(v: Int64Value | undefined);
    /** dir. Serialized as `w14:dir` */
    get directionAngle(): Int32Value | undefined;
    set directionAngle(v: Int32Value | undefined);
    /** fadeDir. Serialized as `w14:fadeDir` */
    get fadeDirection(): Int32Value | undefined;
    set fadeDirection(v: Int32Value | undefined);
    /** sx. Serialized as `w14:sx` */
    get horizontalScalingFactor(): Int32Value | undefined;
    set horizontalScalingFactor(v: Int32Value | undefined);
    /** sy. Serialized as `w14:sy` */
    get verticalScalingFactor(): Int32Value | undefined;
    set verticalScalingFactor(v: Int32Value | undefined);
    /** kx. Serialized as `w14:kx` */
    get horizontalSkewAngle(): Int32Value | undefined;
    set horizontalSkewAngle(v: Int32Value | undefined);
    /** ky. Serialized as `w14:ky` */
    get verticalSkewAngle(): Int32Value | undefined;
    set verticalSkewAngle(v: Int32Value | undefined);
    /** algn. Serialized as `w14:algn` */
    get alignment(): RectangleAlignmentValues | undefined;
    set alignment(v: RectangleAlignmentValues | undefined);
}
/** Defines the Shadow Class. Serialized as `w14:shadow` */
export declare class Shadow extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {
    static _Q: string;
    static _A: string[];
    /** blurRad. Serialized as `w14:blurRad` */
    get blurRadius(): Int64Value | undefined;
    set blurRadius(v: Int64Value | undefined);
    /** dist. Serialized as `w14:dist` */
    get distanceFromText(): Int64Value | undefined;
    set distanceFromText(v: Int64Value | undefined);
    /** dir. Serialized as `w14:dir` */
    get directionAngle(): Int32Value | undefined;
    set directionAngle(v: Int32Value | undefined);
    /** sx. Serialized as `w14:sx` */
    get horizontalScalingFactor(): Int32Value | undefined;
    set horizontalScalingFactor(v: Int32Value | undefined);
    /** sy. Serialized as `w14:sy` */
    get verticalScalingFactor(): Int32Value | undefined;
    set verticalScalingFactor(v: Int32Value | undefined);
    /** kx. Serialized as `w14:kx` */
    get horizontalSkewAngle(): Int32Value | undefined;
    set horizontalSkewAngle(v: Int32Value | undefined);
    /** ky. Serialized as `w14:ky` */
    get verticalSkewAngle(): Int32Value | undefined;
    set verticalSkewAngle(v: Int32Value | undefined);
    /** algn. Serialized as `w14:algn` */
    get alignment(): RectangleAlignmentValues | undefined;
    set alignment(v: RectangleAlignmentValues | undefined);
    /** Returns RgbColorModelHex. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Returns SchemeColor. */
    get schemeColor(): SchemeColor | undefined;
}
/** Defines the Glow Class. Serialized as `w14:glow` */
export declare class Glow extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {
    static _Q: string;
    static _A: string[];
    /** rad. Serialized as `w14:rad` */
    get glowRadius(): Int64Value | undefined;
    set glowRadius(v: Int64Value | undefined);
    /** Returns RgbColorModelHex. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Returns SchemeColor. */
    get schemeColor(): SchemeColor | undefined;
}
/** Defines the LineJoinMiterProperties Class. Serialized as `w14:miter` */
export declare class LineJoinMiterProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** lim. Serialized as `w14:lim` */
    get limit(): Int32Value | undefined;
    set limit(v: Int32Value | undefined);
}
/** Defines the PresetLineDashProperties Class. Serialized as `w14:prstDash` */
export declare class PresetLineDashProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): PresetLineDashValues | undefined;
    set val(v: PresetLineDashValues | undefined);
}
/** Defines the GradientFillProperties Class. Serialized as `w14:gradFill` */
export declare class GradientFillProperties extends OxmlCompositeElement<GradientStopList | LinearShadeProperties | PathShadeProperties> {
    static _Q: string;
    /** Returns GradientStopList. */
    get gradientStopList(): GradientStopList | undefined;
}
/** Defines the SolidColorFillProperties Class. Serialized as `w14:solidFill` */
export declare class SolidColorFillProperties extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {
    static _Q: string;
    /** Returns RgbColorModelHex. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Returns SchemeColor. */
    get schemeColor(): SchemeColor | undefined;
}
/** Defines the EmptyType Class. */
export declare abstract class EmptyType extends OxmlLeafElement {
}
/** Defines the EntityPickerEmpty Class. Serialized as `w14:entityPicker` */
export declare class EntityPickerEmpty extends EmptyType {
    static _Q: string;
}
/** Defines the BevelEmpty Class. Serialized as `w14:bevel` */
export declare class BevelEmpty extends EmptyType {
    static _Q: string;
}
/** Defines the RoundEmpty Class. Serialized as `w14:round` */
export declare class RoundEmpty extends EmptyType {
    static _Q: string;
}
/** Defines the NoFillEmpty Class. Serialized as `w14:noFill` */
export declare class NoFillEmpty extends EmptyType {
    static _Q: string;
}
/** Defines the PathShadeProperties Class. Serialized as `w14:path` */
export declare class PathShadeProperties extends OxmlCompositeElement<FillToRectangle> {
    static _Q: string;
    static _A: string[];
    /** path. Serialized as `w14:path` */
    get path(): PathShadeTypeValues | undefined;
    set path(v: PathShadeTypeValues | undefined);
    /** Returns FillToRectangle. */
    get fillToRectangle(): FillToRectangle | undefined;
}
/** Defines the LinearShadeProperties Class. Serialized as `w14:lin` */
export declare class LinearShadeProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** ang. Serialized as `w14:ang` */
    get angle(): Int32Value | undefined;
    set angle(v: Int32Value | undefined);
    /** scaled. Serialized as `w14:scaled` */
    get scaled(): OnOffValues | undefined;
    set scaled(v: OnOffValues | undefined);
}
/** Defines the SchemeColor Class. Serialized as `w14:schemeClr` */
export declare class SchemeColor extends OxmlCompositeElement<Tint | Shade | Alpha | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation> {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): SchemeColorValues | undefined;
    set val(v: SchemeColorValues | undefined);
}
/** Defines the RgbColorModelHex Class. Serialized as `w14:srgbClr` */
export declare class RgbColorModelHex extends OxmlCompositeElement<Tint | Shade | Alpha | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation> {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
}
/** Defines the PercentageType Class. */
export declare abstract class PercentageType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the LuminanceModulation Class. Serialized as `w14:lumMod` */
export declare class LuminanceModulation extends PercentageType {
    static _Q: string;
}
/** Defines the LuminanceOffset Class. Serialized as `w14:lumOff` */
export declare class LuminanceOffset extends PercentageType {
    static _Q: string;
}
/** Defines the Luminance Class. Serialized as `w14:lum` */
export declare class Luminance extends PercentageType {
    static _Q: string;
}
/** Defines the SaturationModulation Class. Serialized as `w14:satMod` */
export declare class SaturationModulation extends PercentageType {
    static _Q: string;
}
/** Defines the SaturationOffset Class. Serialized as `w14:satOff` */
export declare class SaturationOffset extends PercentageType {
    static _Q: string;
}
/** Defines the Saturation Class. Serialized as `w14:sat` */
export declare class Saturation extends PercentageType {
    static _Q: string;
}
/** Defines the HueModulation Class. Serialized as `w14:hueMod` */
export declare class HueModulation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the PositiveFixedPercentageType Class. */
export declare abstract class PositiveFixedPercentageType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w14:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the Alpha Class. Serialized as `w14:alpha` */
export declare class Alpha extends PositiveFixedPercentageType {
    static _Q: string;
}
/** Defines the Shade Class. Serialized as `w14:shade` */
export declare class Shade extends PositiveFixedPercentageType {
    static _Q: string;
}
/** Defines the Tint Class. Serialized as `w14:tint` */
export declare class Tint extends PositiveFixedPercentageType {
    static _Q: string;
}
/** Defines the TrackChangeType Class. */
export declare abstract class TrackChangeType extends OxmlLeafElement {
    static _A: string[];
    /** author. Serialized as `w:author` */
    get author(): StringValue | undefined;
    set author(v: StringValue | undefined);
    /** date. Serialized as `w:date` */
    get date(): DateTimeValue | undefined;
    set date(v: DateTimeValue | undefined);
    /** dateUtc. Serialized as `w16du:dateUtc` */
    get dateUtc(): DateTimeValue | undefined;
    set dateUtc(v: DateTimeValue | undefined);
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the CustomXmlConflictDeletionRangeStart Class. Serialized as `w14:customXmlConflictDelRangeStart` */
export declare class CustomXmlConflictDeletionRangeStart extends TrackChangeType {
    static _Q: string;
}
/** Defines the CustomXmlConflictInsertionRangeStart Class. Serialized as `w14:customXmlConflictInsRangeStart` */
export declare class CustomXmlConflictInsertionRangeStart extends TrackChangeType {
    static _Q: string;
}
/** Defines the ConflictDeletion Class. Serialized as `w14:conflictDel` */
export declare class ConflictDeletion extends TrackChangeType {
    static _Q: string;
}
/** Defines the ConflictInsertion Class. Serialized as `w14:conflictIns` */
export declare class ConflictInsertion extends TrackChangeType {
    static _Q: string;
}
/** Defines the RunTrackChangeType Class. */
export declare abstract class RunTrackChangeType extends OxmlCompositeElement<WSdtRun | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | CustomXmlConflictInsertionRangeStart | CustomXmlConflictInsertionRangeEnd | CustomXmlConflictDeletionRangeStart | CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | RunConflictInsertion | RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | WRun | WBidirectionalOverride | WBidirectionalEmbedding> {
    static _A: string[];
    /** author. Serialized as `w:author` */
    get author(): StringValue | undefined;
    set author(v: StringValue | undefined);
    /** date. Serialized as `w:date` */
    get date(): DateTimeValue | undefined;
    set date(v: DateTimeValue | undefined);
    /** dateUtc. Serialized as `w16du:dateUtc` */
    get dateUtc(): DateTimeValue | undefined;
    set dateUtc(v: DateTimeValue | undefined);
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the RunConflictDeletion Class. Serialized as `w14:conflictDel` */
export declare class RunConflictDeletion extends RunTrackChangeType {
    static _Q: string;
}
/** Defines the RunConflictInsertion Class. Serialized as `w14:conflictIns` */
export declare class RunConflictInsertion extends RunTrackChangeType {
    static _Q: string;
}
export declare function initOffice2010WordNamespace(): {
    prefix: string;
    xmlns: string;
};
