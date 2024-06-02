import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { Int32Value } from '../../../framework/types/Int32Value';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { StringValue } from '../../../framework/types/StringValue';
import { HexBinaryValue } from '../../../framework/types/HexBinaryValue';
import { Int64Value } from '../../../framework/types/Int64Value';
import { DateTimeValue } from '../../../framework/types/DateTimeValue';
import { BlackWhiteModeValues, BlackWhiteModeValuesArray } from '../../Drawing';import { Extension as AExtension } from '../../Drawing';
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


export enum OnOffValues {
    /** undefined. Serialized value: `true` */
    True = 'true',
    /** undefined. Serialized value: `false` */
    False = 'false',
    /** undefined. Serialized value: `0` */
    Zero = '0',
    /** undefined. Serialized value: `1` */
    One = '1',
}

export const OnOffValuesArray = [
    OnOffValues.True,
    OnOffValues.False,
    OnOffValues.Zero,
    OnOffValues.One,
] as const;

export enum SchemeColorValues {
    /** undefined. Serialized value: `bg1` */
    BackgroundColor = 'bg1',
    /** undefined. Serialized value: `tx1` */
    TextColor = 'tx1',
    /** undefined. Serialized value: `bg2` */
    AdditionalBackgroundColor = 'bg2',
    /** undefined. Serialized value: `tx2` */
    AdditionalTextColor = 'tx2',
    /** undefined. Serialized value: `accent1` */
    ExtraSchemeColor1 = 'accent1',
    /** undefined. Serialized value: `accent2` */
    ExtraSchemeColor2 = 'accent2',
    /** undefined. Serialized value: `accent3` */
    ExtraSchemeColor3 = 'accent3',
    /** undefined. Serialized value: `accent4` */
    ExtraSchemeColor4 = 'accent4',
    /** undefined. Serialized value: `accent5` */
    ExtraSchemeColor5 = 'accent5',
    /** undefined. Serialized value: `accent6` */
    ExtraSchemeColor6 = 'accent6',
    /** undefined. Serialized value: `hlink` */
    HyperlinkColor = 'hlink',
    /** undefined. Serialized value: `folHlink` */
    FollowedHyperlinkColor = 'folHlink',
    /** undefined. Serialized value: `dk1` */
    MainDarkColor1 = 'dk1',
    /** undefined. Serialized value: `lt1` */
    MainLightColor1 = 'lt1',
    /** undefined. Serialized value: `dk2` */
    MainDarkColor2 = 'dk2',
    /** undefined. Serialized value: `lt2` */
    MainLightColor2 = 'lt2',
    /** undefined. Serialized value: `phClr` */
    AutoColor = 'phClr',
}

export const SchemeColorValuesArray = [
    SchemeColorValues.BackgroundColor,
    SchemeColorValues.TextColor,
    SchemeColorValues.AdditionalBackgroundColor,
    SchemeColorValues.AdditionalTextColor,
    SchemeColorValues.ExtraSchemeColor1,
    SchemeColorValues.ExtraSchemeColor2,
    SchemeColorValues.ExtraSchemeColor3,
    SchemeColorValues.ExtraSchemeColor4,
    SchemeColorValues.ExtraSchemeColor5,
    SchemeColorValues.ExtraSchemeColor6,
    SchemeColorValues.HyperlinkColor,
    SchemeColorValues.FollowedHyperlinkColor,
    SchemeColorValues.MainDarkColor1,
    SchemeColorValues.MainLightColor1,
    SchemeColorValues.MainDarkColor2,
    SchemeColorValues.MainLightColor2,
    SchemeColorValues.AutoColor,
] as const;

export enum RectangleAlignmentValues {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `tl` */
    TopLeft = 'tl',
    /** undefined. Serialized value: `t` */
    Top = 't',
    /** undefined. Serialized value: `tr` */
    TopRight = 'tr',
    /** undefined. Serialized value: `l` */
    Left = 'l',
    /** undefined. Serialized value: `ctr` */
    Center = 'ctr',
    /** undefined. Serialized value: `r` */
    Right = 'r',
    /** undefined. Serialized value: `bl` */
    BottomLeft = 'bl',
    /** undefined. Serialized value: `b` */
    Bottom = 'b',
    /** undefined. Serialized value: `br` */
    BottomRight = 'br',
}

export const RectangleAlignmentValuesArray = [
    RectangleAlignmentValues.None,
    RectangleAlignmentValues.TopLeft,
    RectangleAlignmentValues.Top,
    RectangleAlignmentValues.TopRight,
    RectangleAlignmentValues.Left,
    RectangleAlignmentValues.Center,
    RectangleAlignmentValues.Right,
    RectangleAlignmentValues.BottomLeft,
    RectangleAlignmentValues.Bottom,
    RectangleAlignmentValues.BottomRight,
] as const;

export enum PathShadeTypeValues {
    /** undefined. Serialized value: `shape` */
    Shape = 'shape',
    /** undefined. Serialized value: `circle` */
    Circle = 'circle',
    /** undefined. Serialized value: `rect` */
    Rect = 'rect',
}

export const PathShadeTypeValuesArray = [
    PathShadeTypeValues.Shape,
    PathShadeTypeValues.Circle,
    PathShadeTypeValues.Rect,
] as const;

export enum LineCapValues {
    /** undefined. Serialized value: `rnd` */
    Round = 'rnd',
    /** undefined. Serialized value: `sq` */
    Square = 'sq',
    /** undefined. Serialized value: `flat` */
    Flat = 'flat',
}

export const LineCapValuesArray = [
    LineCapValues.Round,
    LineCapValues.Square,
    LineCapValues.Flat,
] as const;

export enum PresetLineDashValues {
    /** undefined. Serialized value: `solid` */
    Solid = 'solid',
    /** undefined. Serialized value: `dot` */
    Dot = 'dot',
    /** undefined. Serialized value: `sysDot` */
    SysDot = 'sysDot',
    /** undefined. Serialized value: `dash` */
    Dash = 'dash',
    /** undefined. Serialized value: `sysDash` */
    SysDash = 'sysDash',
    /** undefined. Serialized value: `lgDash` */
    LongDash = 'lgDash',
    /** undefined. Serialized value: `dashDot` */
    DashDot = 'dashDot',
    /** undefined. Serialized value: `sysDashDot` */
    SystemDashDot = 'sysDashDot',
    /** undefined. Serialized value: `lgDashDot` */
    LongDashDot = 'lgDashDot',
    /** undefined. Serialized value: `lgDashDotDot` */
    LongDashDotDot = 'lgDashDotDot',
    /** undefined. Serialized value: `sysDashDotDot` */
    SystemDashDotDot = 'sysDashDotDot',
}

export const PresetLineDashValuesArray = [
    PresetLineDashValues.Solid,
    PresetLineDashValues.Dot,
    PresetLineDashValues.SysDot,
    PresetLineDashValues.Dash,
    PresetLineDashValues.SysDash,
    PresetLineDashValues.LongDash,
    PresetLineDashValues.DashDot,
    PresetLineDashValues.SystemDashDot,
    PresetLineDashValues.LongDashDot,
    PresetLineDashValues.LongDashDotDot,
    PresetLineDashValues.SystemDashDotDot,
] as const;

export enum PenAlignmentValues {
    /** undefined. Serialized value: `ctr` */
    Center = 'ctr',
    /** undefined. Serialized value: `in` */
    Inset = 'in',
}

export const PenAlignmentValuesArray = [
    PenAlignmentValues.Center,
    PenAlignmentValues.Inset,
] as const;

export enum CompoundLineValues {
    /** undefined. Serialized value: `sng` */
    Simple = 'sng',
    /** undefined. Serialized value: `dbl` */
    Double = 'dbl',
    /** undefined. Serialized value: `thickThin` */
    ThickThin = 'thickThin',
    /** undefined. Serialized value: `thinThick` */
    ThinThick = 'thinThick',
    /** undefined. Serialized value: `tri` */
    Triple = 'tri',
}

export const CompoundLineValuesArray = [
    CompoundLineValues.Simple,
    CompoundLineValues.Double,
    CompoundLineValues.ThickThin,
    CompoundLineValues.ThinThick,
    CompoundLineValues.Triple,
] as const;

export enum PresetCameraTypeValues {
    /** undefined. Serialized value: `legacyObliqueTopLeft` */
    LegacyObliqueTopLeft = 'legacyObliqueTopLeft',
    /** undefined. Serialized value: `legacyObliqueTop` */
    LegacyObliqueTop = 'legacyObliqueTop',
    /** undefined. Serialized value: `legacyObliqueTopRight` */
    LegacyObliqueTopRight = 'legacyObliqueTopRight',
    /** undefined. Serialized value: `legacyObliqueLeft` */
    LegacyObliqueLeft = 'legacyObliqueLeft',
    /** undefined. Serialized value: `legacyObliqueFront` */
    LegacyObliqueFront = 'legacyObliqueFront',
    /** undefined. Serialized value: `legacyObliqueRight` */
    LegacyObliqueRight = 'legacyObliqueRight',
    /** undefined. Serialized value: `legacyObliqueBottomLeft` */
    LegacyObliqueBottomLeft = 'legacyObliqueBottomLeft',
    /** undefined. Serialized value: `legacyObliqueBottom` */
    LegacyObliqueBottom = 'legacyObliqueBottom',
    /** undefined. Serialized value: `legacyObliqueBottomRight` */
    LegacyObliqueBottomRight = 'legacyObliqueBottomRight',
    /** undefined. Serialized value: `legacyPerspectiveTopLeft` */
    LegacyPerspectiveTopLeft = 'legacyPerspectiveTopLeft',
    /** undefined. Serialized value: `legacyPerspectiveTop` */
    LegacyPerspectiveTop = 'legacyPerspectiveTop',
    /** undefined. Serialized value: `legacyPerspectiveTopRight` */
    LegacyPerspectiveTopRight = 'legacyPerspectiveTopRight',
    /** undefined. Serialized value: `legacyPerspectiveLeft` */
    LegacyPerspectiveLeft = 'legacyPerspectiveLeft',
    /** undefined. Serialized value: `legacyPerspectiveFront` */
    LegacyPerspectiveFront = 'legacyPerspectiveFront',
    /** undefined. Serialized value: `legacyPerspectiveRight` */
    LegacyPerspectiveRight = 'legacyPerspectiveRight',
    /** undefined. Serialized value: `legacyPerspectiveBottomLeft` */
    LegacyPerspectiveBottomLeft = 'legacyPerspectiveBottomLeft',
    /** undefined. Serialized value: `legacyPerspectiveBottom` */
    LegacyPerspectiveBottom = 'legacyPerspectiveBottom',
    /** undefined. Serialized value: `legacyPerspectiveBottomRight` */
    LegacyPerspectiveBottomRight = 'legacyPerspectiveBottomRight',
    /** undefined. Serialized value: `orthographicFront` */
    OrthographicFront = 'orthographicFront',
    /** undefined. Serialized value: `isometricTopUp` */
    IsometricTopUp = 'isometricTopUp',
    /** undefined. Serialized value: `isometricTopDown` */
    IsometricTopDown = 'isometricTopDown',
    /** undefined. Serialized value: `isometricBottomUp` */
    IsometricBottomUp = 'isometricBottomUp',
    /** undefined. Serialized value: `isometricBottomDown` */
    IsometricBottomDown = 'isometricBottomDown',
    /** undefined. Serialized value: `isometricLeftUp` */
    IsometricLeftUp = 'isometricLeftUp',
    /** undefined. Serialized value: `isometricLeftDown` */
    IsometricLeftDown = 'isometricLeftDown',
    /** undefined. Serialized value: `isometricRightUp` */
    IsometricRightUp = 'isometricRightUp',
    /** undefined. Serialized value: `isometricRightDown` */
    IsometricRightDown = 'isometricRightDown',
    /** undefined. Serialized value: `isometricOffAxis1Left` */
    IsometricOffAxis1Left = 'isometricOffAxis1Left',
    /** undefined. Serialized value: `isometricOffAxis1Right` */
    IsometricOffAxis1Right = 'isometricOffAxis1Right',
    /** undefined. Serialized value: `isometricOffAxis1Top` */
    IsometricOffAxis1Top = 'isometricOffAxis1Top',
    /** undefined. Serialized value: `isometricOffAxis2Left` */
    IsometricOffAxis2Left = 'isometricOffAxis2Left',
    /** undefined. Serialized value: `isometricOffAxis2Right` */
    IsometricOffAxis2Right = 'isometricOffAxis2Right',
    /** undefined. Serialized value: `isometricOffAxis2Top` */
    IsometricOffAxis2Top = 'isometricOffAxis2Top',
    /** undefined. Serialized value: `isometricOffAxis3Left` */
    IsometricOffAxis3Left = 'isometricOffAxis3Left',
    /** undefined. Serialized value: `isometricOffAxis3Right` */
    IsometricOffAxis3Right = 'isometricOffAxis3Right',
    /** undefined. Serialized value: `isometricOffAxis3Bottom` */
    IsometricOffAxis3Bottom = 'isometricOffAxis3Bottom',
    /** undefined. Serialized value: `isometricOffAxis4Left` */
    IsometricOffAxis4Left = 'isometricOffAxis4Left',
    /** undefined. Serialized value: `isometricOffAxis4Right` */
    IsometricOffAxis4Right = 'isometricOffAxis4Right',
    /** undefined. Serialized value: `isometricOffAxis4Bottom` */
    IsometricOffAxis4Bottom = 'isometricOffAxis4Bottom',
    /** undefined. Serialized value: `obliqueTopLeft` */
    ObliqueTopLeft = 'obliqueTopLeft',
    /** undefined. Serialized value: `obliqueTop` */
    ObliqueTop = 'obliqueTop',
    /** undefined. Serialized value: `obliqueTopRight` */
    ObliqueTopRight = 'obliqueTopRight',
    /** undefined. Serialized value: `obliqueLeft` */
    ObliqueLeft = 'obliqueLeft',
    /** undefined. Serialized value: `obliqueRight` */
    ObliqueRight = 'obliqueRight',
    /** undefined. Serialized value: `obliqueBottomLeft` */
    ObliqueBottomLeft = 'obliqueBottomLeft',
    /** undefined. Serialized value: `obliqueBottom` */
    ObliqueBottom = 'obliqueBottom',
    /** undefined. Serialized value: `obliqueBottomRight` */
    ObliqueBottomRight = 'obliqueBottomRight',
    /** undefined. Serialized value: `perspectiveFront` */
    PerspectiveFront = 'perspectiveFront',
    /** undefined. Serialized value: `perspectiveLeft` */
    PerspectiveLeft = 'perspectiveLeft',
    /** undefined. Serialized value: `perspectiveRight` */
    PerspectiveRight = 'perspectiveRight',
    /** undefined. Serialized value: `perspectiveAbove` */
    PerspectiveAbove = 'perspectiveAbove',
    /** undefined. Serialized value: `perspectiveBelow` */
    PerspectiveBelow = 'perspectiveBelow',
    /** undefined. Serialized value: `perspectiveAboveLeftFacing` */
    PerspectiveAboveLeftFacing = 'perspectiveAboveLeftFacing',
    /** undefined. Serialized value: `perspectiveAboveRightFacing` */
    PerspectiveAboveRightFacing = 'perspectiveAboveRightFacing',
    /** undefined. Serialized value: `perspectiveContrastingLeftFacing` */
    PerspectiveContrastingLeftFacing = 'perspectiveContrastingLeftFacing',
    /** undefined. Serialized value: `perspectiveContrastingRightFacing` */
    PerspectiveContrastingRightFacing = 'perspectiveContrastingRightFacing',
    /** undefined. Serialized value: `perspectiveHeroicLeftFacing` */
    PerspectiveHeroicLeftFacing = 'perspectiveHeroicLeftFacing',
    /** undefined. Serialized value: `perspectiveHeroicRightFacing` */
    PerspectiveHeroicRightFacing = 'perspectiveHeroicRightFacing',
    /** undefined. Serialized value: `perspectiveHeroicExtremeLeftFacing` */
    PerspectiveHeroicExtremeLeftFacing = 'perspectiveHeroicExtremeLeftFacing',
    /** undefined. Serialized value: `perspectiveHeroicExtremeRightFacing` */
    PerspectiveHeroicExtremeRightFacing = 'perspectiveHeroicExtremeRightFacing',
    /** undefined. Serialized value: `perspectiveRelaxed` */
    PerspectiveRelaxed = 'perspectiveRelaxed',
    /** undefined. Serialized value: `perspectiveRelaxedModerately` */
    PerspectiveRelaxedModerately = 'perspectiveRelaxedModerately',
}

export const PresetCameraTypeValuesArray = [
    PresetCameraTypeValues.LegacyObliqueTopLeft,
    PresetCameraTypeValues.LegacyObliqueTop,
    PresetCameraTypeValues.LegacyObliqueTopRight,
    PresetCameraTypeValues.LegacyObliqueLeft,
    PresetCameraTypeValues.LegacyObliqueFront,
    PresetCameraTypeValues.LegacyObliqueRight,
    PresetCameraTypeValues.LegacyObliqueBottomLeft,
    PresetCameraTypeValues.LegacyObliqueBottom,
    PresetCameraTypeValues.LegacyObliqueBottomRight,
    PresetCameraTypeValues.LegacyPerspectiveTopLeft,
    PresetCameraTypeValues.LegacyPerspectiveTop,
    PresetCameraTypeValues.LegacyPerspectiveTopRight,
    PresetCameraTypeValues.LegacyPerspectiveLeft,
    PresetCameraTypeValues.LegacyPerspectiveFront,
    PresetCameraTypeValues.LegacyPerspectiveRight,
    PresetCameraTypeValues.LegacyPerspectiveBottomLeft,
    PresetCameraTypeValues.LegacyPerspectiveBottom,
    PresetCameraTypeValues.LegacyPerspectiveBottomRight,
    PresetCameraTypeValues.OrthographicFront,
    PresetCameraTypeValues.IsometricTopUp,
    PresetCameraTypeValues.IsometricTopDown,
    PresetCameraTypeValues.IsometricBottomUp,
    PresetCameraTypeValues.IsometricBottomDown,
    PresetCameraTypeValues.IsometricLeftUp,
    PresetCameraTypeValues.IsometricLeftDown,
    PresetCameraTypeValues.IsometricRightUp,
    PresetCameraTypeValues.IsometricRightDown,
    PresetCameraTypeValues.IsometricOffAxis1Left,
    PresetCameraTypeValues.IsometricOffAxis1Right,
    PresetCameraTypeValues.IsometricOffAxis1Top,
    PresetCameraTypeValues.IsometricOffAxis2Left,
    PresetCameraTypeValues.IsometricOffAxis2Right,
    PresetCameraTypeValues.IsometricOffAxis2Top,
    PresetCameraTypeValues.IsometricOffAxis3Left,
    PresetCameraTypeValues.IsometricOffAxis3Right,
    PresetCameraTypeValues.IsometricOffAxis3Bottom,
    PresetCameraTypeValues.IsometricOffAxis4Left,
    PresetCameraTypeValues.IsometricOffAxis4Right,
    PresetCameraTypeValues.IsometricOffAxis4Bottom,
    PresetCameraTypeValues.ObliqueTopLeft,
    PresetCameraTypeValues.ObliqueTop,
    PresetCameraTypeValues.ObliqueTopRight,
    PresetCameraTypeValues.ObliqueLeft,
    PresetCameraTypeValues.ObliqueRight,
    PresetCameraTypeValues.ObliqueBottomLeft,
    PresetCameraTypeValues.ObliqueBottom,
    PresetCameraTypeValues.ObliqueBottomRight,
    PresetCameraTypeValues.PerspectiveFront,
    PresetCameraTypeValues.PerspectiveLeft,
    PresetCameraTypeValues.PerspectiveRight,
    PresetCameraTypeValues.PerspectiveAbove,
    PresetCameraTypeValues.PerspectiveBelow,
    PresetCameraTypeValues.PerspectiveAboveLeftFacing,
    PresetCameraTypeValues.PerspectiveAboveRightFacing,
    PresetCameraTypeValues.PerspectiveContrastingLeftFacing,
    PresetCameraTypeValues.PerspectiveContrastingRightFacing,
    PresetCameraTypeValues.PerspectiveHeroicLeftFacing,
    PresetCameraTypeValues.PerspectiveHeroicRightFacing,
    PresetCameraTypeValues.PerspectiveHeroicExtremeLeftFacing,
    PresetCameraTypeValues.PerspectiveHeroicExtremeRightFacing,
    PresetCameraTypeValues.PerspectiveRelaxed,
    PresetCameraTypeValues.PerspectiveRelaxedModerately,
] as const;

export enum LightRigTypeValues {
    /** undefined. Serialized value: `legacyFlat1` */
    LegacyFlat1 = 'legacyFlat1',
    /** undefined. Serialized value: `legacyFlat2` */
    LegacyFlat2 = 'legacyFlat2',
    /** undefined. Serialized value: `legacyFlat3` */
    LegacyFlat3 = 'legacyFlat3',
    /** undefined. Serialized value: `legacyFlat4` */
    LegacyFlat4 = 'legacyFlat4',
    /** undefined. Serialized value: `legacyNormal1` */
    LegacyNormal1 = 'legacyNormal1',
    /** undefined. Serialized value: `legacyNormal2` */
    LegacyNormal2 = 'legacyNormal2',
    /** undefined. Serialized value: `legacyNormal3` */
    LegacyNormal3 = 'legacyNormal3',
    /** undefined. Serialized value: `legacyNormal4` */
    LegacyNormal4 = 'legacyNormal4',
    /** undefined. Serialized value: `legacyHarsh1` */
    LegacyHarsh1 = 'legacyHarsh1',
    /** undefined. Serialized value: `legacyHarsh2` */
    LegacyHarsh2 = 'legacyHarsh2',
    /** undefined. Serialized value: `legacyHarsh3` */
    LegacyHarsh3 = 'legacyHarsh3',
    /** undefined. Serialized value: `legacyHarsh4` */
    LegacyHarsh4 = 'legacyHarsh4',
    /** undefined. Serialized value: `threePt` */
    ThreePoint = 'threePt',
    /** undefined. Serialized value: `balanced` */
    Balanced = 'balanced',
    /** undefined. Serialized value: `soft` */
    Soft = 'soft',
    /** undefined. Serialized value: `harsh` */
    Harsh = 'harsh',
    /** undefined. Serialized value: `flood` */
    Flood = 'flood',
    /** undefined. Serialized value: `contrasting` */
    Contrasting = 'contrasting',
    /** undefined. Serialized value: `morning` */
    Morning = 'morning',
    /** undefined. Serialized value: `sunrise` */
    Sunrise = 'sunrise',
    /** undefined. Serialized value: `sunset` */
    Sunset = 'sunset',
    /** undefined. Serialized value: `chilly` */
    Chilly = 'chilly',
    /** undefined. Serialized value: `freezing` */
    Freezing = 'freezing',
    /** undefined. Serialized value: `flat` */
    Flat = 'flat',
    /** undefined. Serialized value: `twoPt` */
    TwoPoint = 'twoPt',
    /** undefined. Serialized value: `glow` */
    Glow = 'glow',
    /** undefined. Serialized value: `brightRoom` */
    BrightRoom = 'brightRoom',
}

export const LightRigTypeValuesArray = [
    LightRigTypeValues.LegacyFlat1,
    LightRigTypeValues.LegacyFlat2,
    LightRigTypeValues.LegacyFlat3,
    LightRigTypeValues.LegacyFlat4,
    LightRigTypeValues.LegacyNormal1,
    LightRigTypeValues.LegacyNormal2,
    LightRigTypeValues.LegacyNormal3,
    LightRigTypeValues.LegacyNormal4,
    LightRigTypeValues.LegacyHarsh1,
    LightRigTypeValues.LegacyHarsh2,
    LightRigTypeValues.LegacyHarsh3,
    LightRigTypeValues.LegacyHarsh4,
    LightRigTypeValues.ThreePoint,
    LightRigTypeValues.Balanced,
    LightRigTypeValues.Soft,
    LightRigTypeValues.Harsh,
    LightRigTypeValues.Flood,
    LightRigTypeValues.Contrasting,
    LightRigTypeValues.Morning,
    LightRigTypeValues.Sunrise,
    LightRigTypeValues.Sunset,
    LightRigTypeValues.Chilly,
    LightRigTypeValues.Freezing,
    LightRigTypeValues.Flat,
    LightRigTypeValues.TwoPoint,
    LightRigTypeValues.Glow,
    LightRigTypeValues.BrightRoom,
] as const;

export enum LightRigDirectionValues {
    /** undefined. Serialized value: `tl` */
    TopLeft = 'tl',
    /** undefined. Serialized value: `t` */
    Top = 't',
    /** undefined. Serialized value: `tr` */
    TopRight = 'tr',
    /** undefined. Serialized value: `l` */
    Left = 'l',
    /** undefined. Serialized value: `r` */
    Right = 'r',
    /** undefined. Serialized value: `bl` */
    BottomLeft = 'bl',
    /** undefined. Serialized value: `b` */
    Bottom = 'b',
    /** undefined. Serialized value: `br` */
    BottomRight = 'br',
}

export const LightRigDirectionValuesArray = [
    LightRigDirectionValues.TopLeft,
    LightRigDirectionValues.Top,
    LightRigDirectionValues.TopRight,
    LightRigDirectionValues.Left,
    LightRigDirectionValues.Right,
    LightRigDirectionValues.BottomLeft,
    LightRigDirectionValues.Bottom,
    LightRigDirectionValues.BottomRight,
] as const;

export enum BevelPresetTypeValues {
    /** undefined. Serialized value: `relaxedInset` */
    RelaxedInset = 'relaxedInset',
    /** undefined. Serialized value: `circle` */
    Circle = 'circle',
    /** undefined. Serialized value: `slope` */
    Slope = 'slope',
    /** undefined. Serialized value: `cross` */
    Cross = 'cross',
    /** undefined. Serialized value: `angle` */
    Angle = 'angle',
    /** undefined. Serialized value: `softRound` */
    SoftRound = 'softRound',
    /** undefined. Serialized value: `convex` */
    Convex = 'convex',
    /** undefined. Serialized value: `coolSlant` */
    CoolSlant = 'coolSlant',
    /** undefined. Serialized value: `divot` */
    Divot = 'divot',
    /** undefined. Serialized value: `riblet` */
    Riblet = 'riblet',
    /** undefined. Serialized value: `hardEdge` */
    HardEdge = 'hardEdge',
    /** undefined. Serialized value: `artDeco` */
    ArtDeco = 'artDeco',
}

export const BevelPresetTypeValuesArray = [
    BevelPresetTypeValues.RelaxedInset,
    BevelPresetTypeValues.Circle,
    BevelPresetTypeValues.Slope,
    BevelPresetTypeValues.Cross,
    BevelPresetTypeValues.Angle,
    BevelPresetTypeValues.SoftRound,
    BevelPresetTypeValues.Convex,
    BevelPresetTypeValues.CoolSlant,
    BevelPresetTypeValues.Divot,
    BevelPresetTypeValues.Riblet,
    BevelPresetTypeValues.HardEdge,
    BevelPresetTypeValues.ArtDeco,
] as const;

export enum PresetMaterialTypeValues {
    /** undefined. Serialized value: `legacyMatte` */
    LegacyMatte = 'legacyMatte',
    /** undefined. Serialized value: `legacyPlastic` */
    LegacyPlastic = 'legacyPlastic',
    /** undefined. Serialized value: `legacyMetal` */
    LegacyMetal = 'legacyMetal',
    /** undefined. Serialized value: `legacyWireframe` */
    LegacyWireframe = 'legacyWireframe',
    /** undefined. Serialized value: `matte` */
    Matte = 'matte',
    /** undefined. Serialized value: `plastic` */
    Plastic = 'plastic',
    /** undefined. Serialized value: `metal` */
    Metal = 'metal',
    /** undefined. Serialized value: `warmMatte` */
    WarmMatte = 'warmMatte',
    /** undefined. Serialized value: `translucentPowder` */
    TranslucentPowder = 'translucentPowder',
    /** undefined. Serialized value: `powder` */
    Powder = 'powder',
    /** undefined. Serialized value: `dkEdge` */
    DarkEdge = 'dkEdge',
    /** undefined. Serialized value: `softEdge` */
    SoftEdge = 'softEdge',
    /** undefined. Serialized value: `clear` */
    Clear = 'clear',
    /** undefined. Serialized value: `flat` */
    Flat = 'flat',
    /** undefined. Serialized value: `softmetal` */
    SoftMetal = 'softmetal',
    /** undefined. Serialized value: `none` */
    None = 'none',
}

export const PresetMaterialTypeValuesArray = [
    PresetMaterialTypeValues.LegacyMatte,
    PresetMaterialTypeValues.LegacyPlastic,
    PresetMaterialTypeValues.LegacyMetal,
    PresetMaterialTypeValues.LegacyWireframe,
    PresetMaterialTypeValues.Matte,
    PresetMaterialTypeValues.Plastic,
    PresetMaterialTypeValues.Metal,
    PresetMaterialTypeValues.WarmMatte,
    PresetMaterialTypeValues.TranslucentPowder,
    PresetMaterialTypeValues.Powder,
    PresetMaterialTypeValues.DarkEdge,
    PresetMaterialTypeValues.SoftEdge,
    PresetMaterialTypeValues.Clear,
    PresetMaterialTypeValues.Flat,
    PresetMaterialTypeValues.SoftMetal,
    PresetMaterialTypeValues.None,
] as const;

export enum LigaturesValues {
    /** undefined. Serialized value: `none` */
    None = 'none',
    /** undefined. Serialized value: `standard` */
    Standard = 'standard',
    /** undefined. Serialized value: `contextual` */
    Contextual = 'contextual',
    /** undefined. Serialized value: `historical` */
    Historical = 'historical',
    /** undefined. Serialized value: `discretional` */
    Discretional = 'discretional',
    /** undefined. Serialized value: `standardContextual` */
    StandardContextual = 'standardContextual',
    /** undefined. Serialized value: `standardHistorical` */
    StandardHistorical = 'standardHistorical',
    /** undefined. Serialized value: `contextualHistorical` */
    ContextualHistorical = 'contextualHistorical',
    /** undefined. Serialized value: `standardDiscretional` */
    StandardDiscretional = 'standardDiscretional',
    /** undefined. Serialized value: `contextualDiscretional` */
    ContextualDiscretional = 'contextualDiscretional',
    /** undefined. Serialized value: `historicalDiscretional` */
    HistoricalDiscretional = 'historicalDiscretional',
    /** undefined. Serialized value: `standardContextualHistorical` */
    StandardContextualHistorical = 'standardContextualHistorical',
    /** undefined. Serialized value: `standardContextualDiscretional` */
    StandardContextualDiscretional = 'standardContextualDiscretional',
    /** undefined. Serialized value: `standardHistoricalDiscretional` */
    StandardHistoricalDiscretional = 'standardHistoricalDiscretional',
    /** undefined. Serialized value: `contextualHistoricalDiscretional` */
    ContextualHistoricalDiscretional = 'contextualHistoricalDiscretional',
    /** undefined. Serialized value: `all` */
    All = 'all',
}

export const LigaturesValuesArray = [
    LigaturesValues.None,
    LigaturesValues.Standard,
    LigaturesValues.Contextual,
    LigaturesValues.Historical,
    LigaturesValues.Discretional,
    LigaturesValues.StandardContextual,
    LigaturesValues.StandardHistorical,
    LigaturesValues.ContextualHistorical,
    LigaturesValues.StandardDiscretional,
    LigaturesValues.ContextualDiscretional,
    LigaturesValues.HistoricalDiscretional,
    LigaturesValues.StandardContextualHistorical,
    LigaturesValues.StandardContextualDiscretional,
    LigaturesValues.StandardHistoricalDiscretional,
    LigaturesValues.ContextualHistoricalDiscretional,
    LigaturesValues.All,
] as const;

export enum NumberFormValues {
    /** undefined. Serialized value: `default` */
    Default = 'default',
    /** undefined. Serialized value: `lining` */
    Lining = 'lining',
    /** undefined. Serialized value: `oldStyle` */
    OldStyle = 'oldStyle',
}

export const NumberFormValuesArray = [
    NumberFormValues.Default,
    NumberFormValues.Lining,
    NumberFormValues.OldStyle,
] as const;

export enum NumberSpacingValues {
    /** undefined. Serialized value: `default` */
    Default = 'default',
    /** undefined. Serialized value: `proportional` */
    Proportional = 'proportional',
    /** undefined. Serialized value: `tabular` */
    Tabular = 'tabular',
}

export const NumberSpacingValuesArray = [
    NumberSpacingValues.Default,
    NumberSpacingValues.Proportional,
    NumberSpacingValues.Tabular,
] as const;

/** Defines the OfficeArtExtensionList Class. Serialized as `w14:extLst` */
export class OfficeArtExtensionList extends OxmlCompositeElement<AExtension> {

    public static override _Q = 'w14:extLst';

}
/** Defines the Transform2D Class. Serialized as `w14:xfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'w14:xfrm';
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
/** Defines the WordNonVisualContentPartShapeProperties Class. Serialized as `w14:nvContentPartPr` */
export class WordNonVisualContentPartShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties> {

    public static override _Q = 'w14:nvContentPartPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualInkContentPartProperties. */
    public get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined { return this._f(NonVisualInkContentPartProperties); }

}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `w14:cNvContentPartPr` */
export class NonVisualInkContentPartProperties extends OxmlCompositeElement<A14ContentPartLocks | A14OfficeArtExtensionList> {

    public static override _Q = 'w14:cNvContentPartPr';
    public static override _A = [':isComment',];
    /** isComment. Serialized as `:isComment` */
    public get isComment(): BooleanValue | undefined { return this._g(':isComment'); }
    public set isComment(v: BooleanValue | undefined) { this._s(':isComment', v); }
    /** Returns A14ContentPartLocks. */
    public get contentPartLocks(): A14ContentPartLocks | undefined { return this._f(A14ContentPartLocks); }
    /** Returns A14OfficeArtExtensionList. */
    public get officeArtExtensionList(): A14OfficeArtExtensionList | undefined { return this._f(A14OfficeArtExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `w14:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'w14:cNvPr';
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
/** Defines the CheckBoxSymbolType Class. */
export abstract class CheckBoxSymbolType extends OxmlLeafElement {

    public static override _A = ['w14:font','w14:val',];
    /** font. Serialized as `w14:font` */
    public get font(): StringValue | undefined { return this._g('w14:font'); }
    public set font(v: StringValue | undefined) { this._s('w14:font', v); }
    /** val. Serialized as `w14:val` */
    public get val(): HexBinaryValue | undefined { return this._g('w14:val'); }
    public set val(v: HexBinaryValue | undefined) { this._s('w14:val', v); }

}
/** Defines the UncheckedState Class. Serialized as `w14:uncheckedState` */
export class UncheckedState extends CheckBoxSymbolType {

    public static override _Q = 'w14:uncheckedState';

}
/** Defines the CheckedState Class. Serialized as `w14:checkedState` */
export class CheckedState extends CheckBoxSymbolType {

    public static override _Q = 'w14:checkedState';

}
/** Defines the StyleSet Class. Serialized as `w14:styleSet` */
export class StyleSet extends OxmlLeafElement {

    public static override _Q = 'w14:styleSet';
    public static override _A = ['w14:id','w14:val',];
    /** id. Serialized as `w14:id` */
    public get id(): UInt32Value | undefined { return this._g('w14:id'); }
    public set id(v: UInt32Value | undefined) { this._s('w14:id', v); }
    /** val. Serialized as `w14:val` */
    public get val(): OnOffValues | undefined { return this._g('w14:val'); }
    public set val(v: OnOffValues | undefined) { this._s('w14:val', v); }

}
/** Defines the ColorType Class. */
export abstract class ColorType extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {

    /** Returns RgbColorModelHex. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Returns SchemeColor. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }

}
/** Defines the ContourColor Class. Serialized as `w14:contourClr` */
export class ContourColor extends ColorType {

    public static override _Q = 'w14:contourClr';

}
/** Defines the ExtrusionColor Class. Serialized as `w14:extrusionClr` */
export class ExtrusionColor extends ColorType {

    public static override _Q = 'w14:extrusionClr';

}
/** Defines the BevelType Class. */
export abstract class BevelType extends OxmlLeafElement {

    public static override _A = ['w14:w','w14:h','w14:prst',];
    /** w. Serialized as `w14:w` */
    public get width(): Int64Value | undefined { return this._g('w14:w'); }
    public set width(v: Int64Value | undefined) { this._s('w14:w', v); }
    /** h. Serialized as `w14:h` */
    public get height(): Int64Value | undefined { return this._g('w14:h'); }
    public set height(v: Int64Value | undefined) { this._s('w14:h', v); }
    /** prst. Serialized as `w14:prst` */
    public get presetProfileType(): BevelPresetTypeValues | undefined { return this._g('w14:prst'); }
    public set presetProfileType(v: BevelPresetTypeValues | undefined) { this._s('w14:prst', v); }

}
/** Defines the BevelBottom Class. Serialized as `w14:bevelB` */
export class BevelBottom extends BevelType {

    public static override _Q = 'w14:bevelB';

}
/** Defines the BevelTop Class. Serialized as `w14:bevelT` */
export class BevelTop extends BevelType {

    public static override _Q = 'w14:bevelT';

}
/** Defines the LightRig Class. Serialized as `w14:lightRig` */
export class LightRig extends OxmlCompositeElement<SphereCoordinates> {

    public static override _Q = 'w14:lightRig';
    public static override _A = ['w14:rig','w14:dir',];
    /** rig. Serialized as `w14:rig` */
    public get lightRigType(): LightRigTypeValues | undefined { return this._g('w14:rig'); }
    public set lightRigType(v: LightRigTypeValues | undefined) { this._s('w14:rig', v); }
    /** dir. Serialized as `w14:dir` */
    public get lightDirectionType(): LightRigDirectionValues | undefined { return this._g('w14:dir'); }
    public set lightDirectionType(v: LightRigDirectionValues | undefined) { this._s('w14:dir', v); }
    /** Returns SphereCoordinates. */
    public get sphereCoordinates(): SphereCoordinates | undefined { return this._f(SphereCoordinates); }

}
/** Defines the Camera Class. Serialized as `w14:camera` */
export class Camera extends OxmlLeafElement {

    public static override _Q = 'w14:camera';
    public static override _A = ['w14:prst',];
    /** prst. Serialized as `w14:prst` */
    public get presetCameraType(): PresetCameraTypeValues | undefined { return this._g('w14:prst'); }
    public set presetCameraType(v: PresetCameraTypeValues | undefined) { this._s('w14:prst', v); }

}
/** Defines the SphereCoordinates Class. Serialized as `w14:rot` */
export class SphereCoordinates extends OxmlLeafElement {

    public static override _Q = 'w14:rot';
    public static override _A = ['w14:lat','w14:lon','w14:rev',];
    /** lat. Serialized as `w14:lat` */
    public get lattitude(): Int32Value | undefined { return this._g('w14:lat'); }
    public set lattitude(v: Int32Value | undefined) { this._s('w14:lat', v); }
    /** lon. Serialized as `w14:lon` */
    public get longitude(): Int32Value | undefined { return this._g('w14:lon'); }
    public set longitude(v: Int32Value | undefined) { this._s('w14:lon', v); }
    /** rev. Serialized as `w14:rev` */
    public get revolution(): Int32Value | undefined { return this._g('w14:rev'); }
    public set revolution(v: Int32Value | undefined) { this._s('w14:rev', v); }

}
/** Defines the GradientStopList Class. Serialized as `w14:gsLst` */
export class GradientStopList extends OxmlCompositeElement<GradientStop> {

    public static override _Q = 'w14:gsLst';

}
/** Defines the FillToRectangle Class. Serialized as `w14:fillToRect` */
export class FillToRectangle extends OxmlLeafElement {

    public static override _Q = 'w14:fillToRect';
    public static override _A = ['w14:l','w14:t','w14:r','w14:b',];
    /** l. Serialized as `w14:l` */
    public get left(): Int32Value | undefined { return this._g('w14:l'); }
    public set left(v: Int32Value | undefined) { this._s('w14:l', v); }
    /** t. Serialized as `w14:t` */
    public get top(): Int32Value | undefined { return this._g('w14:t'); }
    public set top(v: Int32Value | undefined) { this._s('w14:t', v); }
    /** r. Serialized as `w14:r` */
    public get right(): Int32Value | undefined { return this._g('w14:r'); }
    public set right(v: Int32Value | undefined) { this._s('w14:r', v); }
    /** b. Serialized as `w14:b` */
    public get bottom(): Int32Value | undefined { return this._g('w14:b'); }
    public set bottom(v: Int32Value | undefined) { this._s('w14:b', v); }

}
/** Defines the GradientStop Class. Serialized as `w14:gs` */
export class GradientStop extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {

    public static override _Q = 'w14:gs';
    public static override _A = ['w14:pos',];
    /** pos. Serialized as `w14:pos` */
    public get stopPosition(): Int32Value | undefined { return this._g('w14:pos'); }
    public set stopPosition(v: Int32Value | undefined) { this._s('w14:pos', v); }
    /** Returns RgbColorModelHex. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Returns SchemeColor. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }

}
/** Defines the SdtContentCheckBox Class. Serialized as `w14:checkbox` */
export class SdtContentCheckBox extends OxmlCompositeElement<Checked | CheckedState | UncheckedState> {

    public static override _Q = 'w14:checkbox';
    /** Returns Checked. */
    public get checked(): Checked | undefined { return this._f(Checked); }
    /** Returns CheckedState. */
    public get checkedState(): CheckedState | undefined { return this._f(CheckedState); }
    /** Returns UncheckedState. */
    public get uncheckedState(): UncheckedState | undefined { return this._f(UncheckedState); }

}
/** Defines the DefaultImageDpi Class. Serialized as `w14:defaultImageDpi` */
export class DefaultImageDpi extends OxmlLeafElement {

    public static override _Q = 'w14:defaultImageDpi';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): Int32Value | undefined { return this._g('w14:val'); }
    public set val(v: Int32Value | undefined) { this._s('w14:val', v); }

}
/** Defines the MarkupType Class. */
export abstract class MarkupType extends OxmlLeafElement {

    public static override _A = ['w:id',];
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Defines the CustomXmlConflictDeletionRangeEnd Class. Serialized as `w14:customXmlConflictDelRangeEnd` */
export class CustomXmlConflictDeletionRangeEnd extends MarkupType {

    public static override _Q = 'w14:customXmlConflictDelRangeEnd';

}
/** Defines the CustomXmlConflictInsertionRangeEnd Class. Serialized as `w14:customXmlConflictInsRangeEnd` */
export class CustomXmlConflictInsertionRangeEnd extends MarkupType {

    public static override _Q = 'w14:customXmlConflictInsRangeEnd';

}
/** Defines the DocumentId Class. Serialized as `w14:docId` */
export class DocumentId extends OxmlLeafElement {

    public static override _Q = 'w14:docId';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): HexBinaryValue | undefined { return this._g('w14:val'); }
    public set val(v: HexBinaryValue | undefined) { this._s('w14:val', v); }

}
/** Defines the ContentPart Class. Serialized as `w14:contentPart` */
export class ContentPart extends OxmlCompositeElement<WordNonVisualContentPartShapeProperties | Transform2D | OfficeArtExtensionList> {

    public static override _Q = 'w14:contentPart';
    public static override _A = ['w14:bwMode','r:id',];
    /** bwMode. Serialized as `w14:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g('w14:bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s('w14:bwMode', v); }
    /** id. Serialized as `r:id` */
    public get relationshipId(): StringValue | undefined { return this._g('r:id'); }
    public set relationshipId(v: StringValue | undefined) { this._s('r:id', v); }
    /** Returns WordNonVisualContentPartShapeProperties. */
    public get wordNonVisualContentPartShapeProperties(): WordNonVisualContentPartShapeProperties | undefined { return this._f(WordNonVisualContentPartShapeProperties); }
    /** Returns Transform2D. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }
    /** Returns OfficeArtExtensionList. */
    public get officeArtExtensionList(): OfficeArtExtensionList | undefined { return this._f(OfficeArtExtensionList); }

}
/** Defines the OnOffType Class. */
export abstract class OnOffType extends OxmlLeafElement {

    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): OnOffValues | undefined { return this._g('w14:val'); }
    public set val(v: OnOffValues | undefined) { this._s('w14:val', v); }

}
/** Defines the Checked Class. Serialized as `w14:checked` */
export class Checked extends OnOffType {

    public static override _Q = 'w14:checked';

}
/** Defines the DiscardImageEditingData Class. Serialized as `w14:discardImageEditingData` */
export class DiscardImageEditingData extends OnOffType {

    public static override _Q = 'w14:discardImageEditingData';

}
/** Defines the ConflictMode Class. Serialized as `w14:conflictMode` */
export class ConflictMode extends OnOffType {

    public static override _Q = 'w14:conflictMode';

}
/** Defines the ContextualAlternatives Class. Serialized as `w14:cntxtAlts` */
export class ContextualAlternatives extends OnOffType {

    public static override _Q = 'w14:cntxtAlts';

}
/** Defines the StylisticSets Class. Serialized as `w14:stylisticSets` */
export class StylisticSets extends OxmlCompositeElement<StyleSet> {

    public static override _Q = 'w14:stylisticSets';

}
/** Defines the NumberSpacing Class. Serialized as `w14:numSpacing` */
export class NumberSpacing extends OxmlLeafElement {

    public static override _Q = 'w14:numSpacing';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): NumberSpacingValues | undefined { return this._g('w14:val'); }
    public set val(v: NumberSpacingValues | undefined) { this._s('w14:val', v); }

}
/** Defines the NumberingFormat Class. Serialized as `w14:numForm` */
export class NumberingFormat extends OxmlLeafElement {

    public static override _Q = 'w14:numForm';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): NumberFormValues | undefined { return this._g('w14:val'); }
    public set val(v: NumberFormValues | undefined) { this._s('w14:val', v); }

}
/** Defines the Ligatures Class. Serialized as `w14:ligatures` */
export class Ligatures extends OxmlLeafElement {

    public static override _Q = 'w14:ligatures';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): LigaturesValues | undefined { return this._g('w14:val'); }
    public set val(v: LigaturesValues | undefined) { this._s('w14:val', v); }

}
/** Defines the Properties3D Class. Serialized as `w14:props3d` */
export class Properties3D extends OxmlCompositeElement<BevelTop | BevelBottom | ExtrusionColor | ContourColor> {

    public static override _Q = 'w14:props3d';
    public static override _A = ['w14:extrusionH','w14:contourW','w14:prstMaterial',];
    /** extrusionH. Serialized as `w14:extrusionH` */
    public get extrusionHeight(): Int64Value | undefined { return this._g('w14:extrusionH'); }
    public set extrusionHeight(v: Int64Value | undefined) { this._s('w14:extrusionH', v); }
    /** contourW. Serialized as `w14:contourW` */
    public get contourWidth(): Int64Value | undefined { return this._g('w14:contourW'); }
    public set contourWidth(v: Int64Value | undefined) { this._s('w14:contourW', v); }
    /** prstMaterial. Serialized as `w14:prstMaterial` */
    public get presetMaterialType(): PresetMaterialTypeValues | undefined { return this._g('w14:prstMaterial'); }
    public set presetMaterialType(v: PresetMaterialTypeValues | undefined) { this._s('w14:prstMaterial', v); }
    /** Returns BevelTop. */
    public get bevelTop(): BevelTop | undefined { return this._f(BevelTop); }
    /** Returns BevelBottom. */
    public get bevelBottom(): BevelBottom | undefined { return this._f(BevelBottom); }
    /** Returns ExtrusionColor. */
    public get extrusionColor(): ExtrusionColor | undefined { return this._f(ExtrusionColor); }
    /** Returns ContourColor. */
    public get contourColor(): ContourColor | undefined { return this._f(ContourColor); }

}
/** Defines the Scene3D Class. Serialized as `w14:scene3d` */
export class Scene3D extends OxmlCompositeElement<Camera | LightRig> {

    public static override _Q = 'w14:scene3d';
    /** Returns Camera. */
    public get camera(): Camera | undefined { return this._f(Camera); }
    /** Returns LightRig. */
    public get lightRig(): LightRig | undefined { return this._f(LightRig); }

}
/** Defines the FillTextEffect Class. Serialized as `w14:textFill` */
export class FillTextEffect extends OxmlCompositeElement<NoFillEmpty | SolidColorFillProperties | GradientFillProperties> {

    public static override _Q = 'w14:textFill';
    /** Returns NoFillEmpty. */
    public get noFillEmpty(): NoFillEmpty | undefined { return this._f(NoFillEmpty); }
    /** Returns SolidColorFillProperties. */
    public get solidColorFillProperties(): SolidColorFillProperties | undefined { return this._f(SolidColorFillProperties); }
    /** Returns GradientFillProperties. */
    public get gradientFillProperties(): GradientFillProperties | undefined { return this._f(GradientFillProperties); }

}
/** Defines the TextOutlineEffect Class. Serialized as `w14:textOutline` */
export class TextOutlineEffect extends OxmlCompositeElement<NoFillEmpty | SolidColorFillProperties | GradientFillProperties | PresetLineDashProperties | RoundEmpty | BevelEmpty | LineJoinMiterProperties> {

    public static override _Q = 'w14:textOutline';
    public static override _A = ['w14:w','w14:cap','w14:cmpd','w14:algn',];
    /** w. Serialized as `w14:w` */
    public get lineWidth(): Int32Value | undefined { return this._g('w14:w'); }
    public set lineWidth(v: Int32Value | undefined) { this._s('w14:w', v); }
    /** cap. Serialized as `w14:cap` */
    public get capType(): LineCapValues | undefined { return this._g('w14:cap'); }
    public set capType(v: LineCapValues | undefined) { this._s('w14:cap', v); }
    /** cmpd. Serialized as `w14:cmpd` */
    public get compound(): CompoundLineValues | undefined { return this._g('w14:cmpd'); }
    public set compound(v: CompoundLineValues | undefined) { this._s('w14:cmpd', v); }
    /** algn. Serialized as `w14:algn` */
    public get alignment(): PenAlignmentValues | undefined { return this._g('w14:algn'); }
    public set alignment(v: PenAlignmentValues | undefined) { this._s('w14:algn', v); }

}
/** Defines the Reflection Class. Serialized as `w14:reflection` */
export class Reflection extends OxmlLeafElement {

    public static override _Q = 'w14:reflection';
    public static override _A = ['w14:blurRad','w14:stA','w14:stPos','w14:endA','w14:endPos','w14:dist','w14:dir','w14:fadeDir','w14:sx','w14:sy','w14:kx','w14:ky','w14:algn',];
    /** blurRad. Serialized as `w14:blurRad` */
    public get blurRadius(): Int64Value | undefined { return this._g('w14:blurRad'); }
    public set blurRadius(v: Int64Value | undefined) { this._s('w14:blurRad', v); }
    /** stA. Serialized as `w14:stA` */
    public get startingOpacity(): Int32Value | undefined { return this._g('w14:stA'); }
    public set startingOpacity(v: Int32Value | undefined) { this._s('w14:stA', v); }
    /** stPos. Serialized as `w14:stPos` */
    public get startPosition(): Int32Value | undefined { return this._g('w14:stPos'); }
    public set startPosition(v: Int32Value | undefined) { this._s('w14:stPos', v); }
    /** endA. Serialized as `w14:endA` */
    public get endingOpacity(): Int32Value | undefined { return this._g('w14:endA'); }
    public set endingOpacity(v: Int32Value | undefined) { this._s('w14:endA', v); }
    /** endPos. Serialized as `w14:endPos` */
    public get endPosition(): Int32Value | undefined { return this._g('w14:endPos'); }
    public set endPosition(v: Int32Value | undefined) { this._s('w14:endPos', v); }
    /** dist. Serialized as `w14:dist` */
    public get distanceFromText(): Int64Value | undefined { return this._g('w14:dist'); }
    public set distanceFromText(v: Int64Value | undefined) { this._s('w14:dist', v); }
    /** dir. Serialized as `w14:dir` */
    public get directionAngle(): Int32Value | undefined { return this._g('w14:dir'); }
    public set directionAngle(v: Int32Value | undefined) { this._s('w14:dir', v); }
    /** fadeDir. Serialized as `w14:fadeDir` */
    public get fadeDirection(): Int32Value | undefined { return this._g('w14:fadeDir'); }
    public set fadeDirection(v: Int32Value | undefined) { this._s('w14:fadeDir', v); }
    /** sx. Serialized as `w14:sx` */
    public get horizontalScalingFactor(): Int32Value | undefined { return this._g('w14:sx'); }
    public set horizontalScalingFactor(v: Int32Value | undefined) { this._s('w14:sx', v); }
    /** sy. Serialized as `w14:sy` */
    public get verticalScalingFactor(): Int32Value | undefined { return this._g('w14:sy'); }
    public set verticalScalingFactor(v: Int32Value | undefined) { this._s('w14:sy', v); }
    /** kx. Serialized as `w14:kx` */
    public get horizontalSkewAngle(): Int32Value | undefined { return this._g('w14:kx'); }
    public set horizontalSkewAngle(v: Int32Value | undefined) { this._s('w14:kx', v); }
    /** ky. Serialized as `w14:ky` */
    public get verticalSkewAngle(): Int32Value | undefined { return this._g('w14:ky'); }
    public set verticalSkewAngle(v: Int32Value | undefined) { this._s('w14:ky', v); }
    /** algn. Serialized as `w14:algn` */
    public get alignment(): RectangleAlignmentValues | undefined { return this._g('w14:algn'); }
    public set alignment(v: RectangleAlignmentValues | undefined) { this._s('w14:algn', v); }

}
/** Defines the Shadow Class. Serialized as `w14:shadow` */
export class Shadow extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {

    public static override _Q = 'w14:shadow';
    public static override _A = ['w14:blurRad','w14:dist','w14:dir','w14:sx','w14:sy','w14:kx','w14:ky','w14:algn',];
    /** blurRad. Serialized as `w14:blurRad` */
    public get blurRadius(): Int64Value | undefined { return this._g('w14:blurRad'); }
    public set blurRadius(v: Int64Value | undefined) { this._s('w14:blurRad', v); }
    /** dist. Serialized as `w14:dist` */
    public get distanceFromText(): Int64Value | undefined { return this._g('w14:dist'); }
    public set distanceFromText(v: Int64Value | undefined) { this._s('w14:dist', v); }
    /** dir. Serialized as `w14:dir` */
    public get directionAngle(): Int32Value | undefined { return this._g('w14:dir'); }
    public set directionAngle(v: Int32Value | undefined) { this._s('w14:dir', v); }
    /** sx. Serialized as `w14:sx` */
    public get horizontalScalingFactor(): Int32Value | undefined { return this._g('w14:sx'); }
    public set horizontalScalingFactor(v: Int32Value | undefined) { this._s('w14:sx', v); }
    /** sy. Serialized as `w14:sy` */
    public get verticalScalingFactor(): Int32Value | undefined { return this._g('w14:sy'); }
    public set verticalScalingFactor(v: Int32Value | undefined) { this._s('w14:sy', v); }
    /** kx. Serialized as `w14:kx` */
    public get horizontalSkewAngle(): Int32Value | undefined { return this._g('w14:kx'); }
    public set horizontalSkewAngle(v: Int32Value | undefined) { this._s('w14:kx', v); }
    /** ky. Serialized as `w14:ky` */
    public get verticalSkewAngle(): Int32Value | undefined { return this._g('w14:ky'); }
    public set verticalSkewAngle(v: Int32Value | undefined) { this._s('w14:ky', v); }
    /** algn. Serialized as `w14:algn` */
    public get alignment(): RectangleAlignmentValues | undefined { return this._g('w14:algn'); }
    public set alignment(v: RectangleAlignmentValues | undefined) { this._s('w14:algn', v); }
    /** Returns RgbColorModelHex. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Returns SchemeColor. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }

}
/** Defines the Glow Class. Serialized as `w14:glow` */
export class Glow extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {

    public static override _Q = 'w14:glow';
    public static override _A = ['w14:rad',];
    /** rad. Serialized as `w14:rad` */
    public get glowRadius(): Int64Value | undefined { return this._g('w14:rad'); }
    public set glowRadius(v: Int64Value | undefined) { this._s('w14:rad', v); }
    /** Returns RgbColorModelHex. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Returns SchemeColor. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }

}
/** Defines the LineJoinMiterProperties Class. Serialized as `w14:miter` */
export class LineJoinMiterProperties extends OxmlLeafElement {

    public static override _Q = 'w14:miter';
    public static override _A = ['w14:lim',];
    /** lim. Serialized as `w14:lim` */
    public get limit(): Int32Value | undefined { return this._g('w14:lim'); }
    public set limit(v: Int32Value | undefined) { this._s('w14:lim', v); }

}
/** Defines the PresetLineDashProperties Class. Serialized as `w14:prstDash` */
export class PresetLineDashProperties extends OxmlLeafElement {

    public static override _Q = 'w14:prstDash';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): PresetLineDashValues | undefined { return this._g('w14:val'); }
    public set val(v: PresetLineDashValues | undefined) { this._s('w14:val', v); }

}
/** Defines the GradientFillProperties Class. Serialized as `w14:gradFill` */
export class GradientFillProperties extends OxmlCompositeElement<GradientStopList | LinearShadeProperties | PathShadeProperties> {

    public static override _Q = 'w14:gradFill';
    /** Returns GradientStopList. */
    public get gradientStopList(): GradientStopList | undefined { return this._f(GradientStopList); }

}
/** Defines the SolidColorFillProperties Class. Serialized as `w14:solidFill` */
export class SolidColorFillProperties extends OxmlCompositeElement<RgbColorModelHex | SchemeColor> {

    public static override _Q = 'w14:solidFill';
    /** Returns RgbColorModelHex. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Returns SchemeColor. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Defines the EntityPickerEmpty Class. Serialized as `w14:entityPicker` */
export class EntityPickerEmpty extends EmptyType {

    public static override _Q = 'w14:entityPicker';

}
/** Defines the BevelEmpty Class. Serialized as `w14:bevel` */
export class BevelEmpty extends EmptyType {

    public static override _Q = 'w14:bevel';

}
/** Defines the RoundEmpty Class. Serialized as `w14:round` */
export class RoundEmpty extends EmptyType {

    public static override _Q = 'w14:round';

}
/** Defines the NoFillEmpty Class. Serialized as `w14:noFill` */
export class NoFillEmpty extends EmptyType {

    public static override _Q = 'w14:noFill';

}
/** Defines the PathShadeProperties Class. Serialized as `w14:path` */
export class PathShadeProperties extends OxmlCompositeElement<FillToRectangle> {

    public static override _Q = 'w14:path';
    public static override _A = ['w14:path',];
    /** path. Serialized as `w14:path` */
    public get path(): PathShadeTypeValues | undefined { return this._g('w14:path'); }
    public set path(v: PathShadeTypeValues | undefined) { this._s('w14:path', v); }
    /** Returns FillToRectangle. */
    public get fillToRectangle(): FillToRectangle | undefined { return this._f(FillToRectangle); }

}
/** Defines the LinearShadeProperties Class. Serialized as `w14:lin` */
export class LinearShadeProperties extends OxmlLeafElement {

    public static override _Q = 'w14:lin';
    public static override _A = ['w14:ang','w14:scaled',];
    /** ang. Serialized as `w14:ang` */
    public get angle(): Int32Value | undefined { return this._g('w14:ang'); }
    public set angle(v: Int32Value | undefined) { this._s('w14:ang', v); }
    /** scaled. Serialized as `w14:scaled` */
    public get scaled(): OnOffValues | undefined { return this._g('w14:scaled'); }
    public set scaled(v: OnOffValues | undefined) { this._s('w14:scaled', v); }

}
/** Defines the SchemeColor Class. Serialized as `w14:schemeClr` */
export class SchemeColor extends OxmlCompositeElement<Tint | Shade | Alpha | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation> {

    public static override _Q = 'w14:schemeClr';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): SchemeColorValues | undefined { return this._g('w14:val'); }
    public set val(v: SchemeColorValues | undefined) { this._s('w14:val', v); }

}
/** Defines the RgbColorModelHex Class. Serialized as `w14:srgbClr` */
export class RgbColorModelHex extends OxmlCompositeElement<Tint | Shade | Alpha | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation> {

    public static override _Q = 'w14:srgbClr';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): HexBinaryValue | undefined { return this._g('w14:val'); }
    public set val(v: HexBinaryValue | undefined) { this._s('w14:val', v); }

}
/** Defines the PercentageType Class. */
export abstract class PercentageType extends OxmlLeafElement {

    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): Int32Value | undefined { return this._g('w14:val'); }
    public set val(v: Int32Value | undefined) { this._s('w14:val', v); }

}
/** Defines the LuminanceModulation Class. Serialized as `w14:lumMod` */
export class LuminanceModulation extends PercentageType {

    public static override _Q = 'w14:lumMod';

}
/** Defines the LuminanceOffset Class. Serialized as `w14:lumOff` */
export class LuminanceOffset extends PercentageType {

    public static override _Q = 'w14:lumOff';

}
/** Defines the Luminance Class. Serialized as `w14:lum` */
export class Luminance extends PercentageType {

    public static override _Q = 'w14:lum';

}
/** Defines the SaturationModulation Class. Serialized as `w14:satMod` */
export class SaturationModulation extends PercentageType {

    public static override _Q = 'w14:satMod';

}
/** Defines the SaturationOffset Class. Serialized as `w14:satOff` */
export class SaturationOffset extends PercentageType {

    public static override _Q = 'w14:satOff';

}
/** Defines the Saturation Class. Serialized as `w14:sat` */
export class Saturation extends PercentageType {

    public static override _Q = 'w14:sat';

}
/** Defines the HueModulation Class. Serialized as `w14:hueMod` */
export class HueModulation extends OxmlLeafElement {

    public static override _Q = 'w14:hueMod';
    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): Int32Value | undefined { return this._g('w14:val'); }
    public set val(v: Int32Value | undefined) { this._s('w14:val', v); }

}
/** Defines the PositiveFixedPercentageType Class. */
export abstract class PositiveFixedPercentageType extends OxmlLeafElement {

    public static override _A = ['w14:val',];
    /** val. Serialized as `w14:val` */
    public get val(): Int32Value | undefined { return this._g('w14:val'); }
    public set val(v: Int32Value | undefined) { this._s('w14:val', v); }

}
/** Defines the Alpha Class. Serialized as `w14:alpha` */
export class Alpha extends PositiveFixedPercentageType {

    public static override _Q = 'w14:alpha';

}
/** Defines the Shade Class. Serialized as `w14:shade` */
export class Shade extends PositiveFixedPercentageType {

    public static override _Q = 'w14:shade';

}
/** Defines the Tint Class. Serialized as `w14:tint` */
export class Tint extends PositiveFixedPercentageType {

    public static override _Q = 'w14:tint';

}
/** Defines the TrackChangeType Class. */
export abstract class TrackChangeType extends OxmlLeafElement {

    public static override _A = ['w:author','w:date','w16du:dateUtc','w:id',];
    /** author. Serialized as `w:author` */
    public get author(): StringValue | undefined { return this._g('w:author'); }
    public set author(v: StringValue | undefined) { this._s('w:author', v); }
    /** date. Serialized as `w:date` */
    public get date(): DateTimeValue | undefined { return this._g('w:date'); }
    public set date(v: DateTimeValue | undefined) { this._s('w:date', v); }
    /** dateUtc. Serialized as `w16du:dateUtc` */
    public get dateUtc(): DateTimeValue | undefined { return this._g('w16du:dateUtc'); }
    public set dateUtc(v: DateTimeValue | undefined) { this._s('w16du:dateUtc', v); }
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Defines the CustomXmlConflictDeletionRangeStart Class. Serialized as `w14:customXmlConflictDelRangeStart` */
export class CustomXmlConflictDeletionRangeStart extends TrackChangeType {

    public static override _Q = 'w14:customXmlConflictDelRangeStart';

}
/** Defines the CustomXmlConflictInsertionRangeStart Class. Serialized as `w14:customXmlConflictInsRangeStart` */
export class CustomXmlConflictInsertionRangeStart extends TrackChangeType {

    public static override _Q = 'w14:customXmlConflictInsRangeStart';

}
/** Defines the ConflictDeletion Class. Serialized as `w14:conflictDel` */
export class ConflictDeletion extends TrackChangeType {

    public static override _Q = 'w14:conflictDel';

}
/** Defines the ConflictInsertion Class. Serialized as `w14:conflictIns` */
export class ConflictInsertion extends TrackChangeType {

    public static override _Q = 'w14:conflictIns';

}
/** Defines the RunTrackChangeType Class. */
export abstract class RunTrackChangeType extends OxmlCompositeElement<WSdtRun | WProofError | WPermStart | WPermEnd | WBookmarkStart | WBookmarkEnd | WCommentRangeStart | WCommentRangeEnd | WMoveFromRangeStart | WMoveFromRangeEnd | WMoveToRangeStart | WMoveToRangeEnd | WCustomXmlInsRangeStart | WCustomXmlInsRangeEnd | WCustomXmlDelRangeStart | WCustomXmlDelRangeEnd | WCustomXmlMoveFromRangeStart | WCustomXmlMoveFromRangeEnd | WCustomXmlMoveToRangeStart | WCustomXmlMoveToRangeEnd | CustomXmlConflictInsertionRangeStart | CustomXmlConflictInsertionRangeEnd | CustomXmlConflictDeletionRangeStart | CustomXmlConflictDeletionRangeEnd | WInsertedRun | WDeletedRun | WMoveFromRun | WMoveToRun | WContentPart | RunConflictInsertion | RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | WRun | WBidirectionalOverride | WBidirectionalEmbedding> {

    public static override _A = ['w:author','w:date','w16du:dateUtc','w:id',];
    /** author. Serialized as `w:author` */
    public get author(): StringValue | undefined { return this._g('w:author'); }
    public set author(v: StringValue | undefined) { this._s('w:author', v); }
    /** date. Serialized as `w:date` */
    public get date(): DateTimeValue | undefined { return this._g('w:date'); }
    public set date(v: DateTimeValue | undefined) { this._s('w:date', v); }
    /** dateUtc. Serialized as `w16du:dateUtc` */
    public get dateUtc(): DateTimeValue | undefined { return this._g('w16du:dateUtc'); }
    public set dateUtc(v: DateTimeValue | undefined) { this._s('w16du:dateUtc', v); }
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Defines the RunConflictDeletion Class. Serialized as `w14:conflictDel` */
export class RunConflictDeletion extends RunTrackChangeType {

    public static override _Q = 'w14:conflictDel';

}
/** Defines the RunConflictInsertion Class. Serialized as `w14:conflictIns` */
export class RunConflictInsertion extends RunTrackChangeType {

    public static override _Q = 'w14:conflictIns';

}

export function initOffice2010WordNamespace() {
    OfficeArtExtensionList._C = {
        'a:ext': AExtension,
    };
    Transform2D._C = {
        'a:off': AOffset,
        'a:ext': AExtents,
    };
    Transform2D._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    WordNonVisualContentPartShapeProperties._C = {
        'w14:cNvPr': NonVisualDrawingProperties,
        'w14:cNvContentPartPr': NonVisualInkContentPartProperties,
    };
    NonVisualInkContentPartProperties._C = {
        'a14:cpLocks': A14ContentPartLocks,
        'a14:extLst': A14OfficeArtExtensionList,
    };
    NonVisualInkContentPartProperties._D = {
        ':isComment': new OxmlAttr(':isComment', OxmlType.BooleanValue),
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
    CheckBoxSymbolType._D = {
        'w14:font': new OxmlAttr('w14:font', OxmlType.StringValue),
        'w14:val': new OxmlAttr('w14:val', OxmlType.HexBinaryValue),
    };
    StyleSet._D = {
        'w14:id': new OxmlAttr('w14:id', OxmlType.UInt32Value),
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, OnOffValuesArray),
    };
    ColorType._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    ContourColor._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    ExtrusionColor._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    BevelType._D = {
        'w14:w': new OxmlAttr('w14:w', OxmlType.Int64Value),
        'w14:h': new OxmlAttr('w14:h', OxmlType.Int64Value),
        'w14:prst': new OxmlAttr('w14:prst', OxmlType.EnumValue, BevelPresetTypeValuesArray),
    };
    LightRig._C = {
        'w14:rot': SphereCoordinates,
    };
    LightRig._D = {
        'w14:rig': new OxmlAttr('w14:rig', OxmlType.EnumValue, LightRigTypeValuesArray),
        'w14:dir': new OxmlAttr('w14:dir', OxmlType.EnumValue, LightRigDirectionValuesArray),
    };
    Camera._D = {
        'w14:prst': new OxmlAttr('w14:prst', OxmlType.EnumValue, PresetCameraTypeValuesArray),
    };
    SphereCoordinates._D = {
        'w14:lat': new OxmlAttr('w14:lat', OxmlType.Int32Value),
        'w14:lon': new OxmlAttr('w14:lon', OxmlType.Int32Value),
        'w14:rev': new OxmlAttr('w14:rev', OxmlType.Int32Value),
    };
    GradientStopList._C = {
        'w14:gs': GradientStop,
    };
    FillToRectangle._D = {
        'w14:l': new OxmlAttr('w14:l', OxmlType.Int32Value),
        'w14:t': new OxmlAttr('w14:t', OxmlType.Int32Value),
        'w14:r': new OxmlAttr('w14:r', OxmlType.Int32Value),
        'w14:b': new OxmlAttr('w14:b', OxmlType.Int32Value),
    };
    GradientStop._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    GradientStop._D = {
        'w14:pos': new OxmlAttr('w14:pos', OxmlType.Int32Value),
    };
    SdtContentCheckBox._C = {
        'w14:checked': Checked,
        'w14:checkedState': CheckedState,
        'w14:uncheckedState': UncheckedState,
    };
    DefaultImageDpi._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.Int32Value),
    };
    MarkupType._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    DocumentId._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.HexBinaryValue),
    };
    ContentPart._C = {
        'w14:nvContentPartPr': WordNonVisualContentPartShapeProperties,
        'w14:xfrm': Transform2D,
        'w14:extLst': OfficeArtExtensionList,
    };
    ContentPart._D = {
        'w14:bwMode': new OxmlAttr('w14:bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    OnOffType._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, OnOffValuesArray),
    };
    StylisticSets._C = {
        'w14:styleSet': StyleSet,
    };
    NumberSpacing._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, NumberSpacingValuesArray),
    };
    NumberingFormat._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, NumberFormValuesArray),
    };
    Ligatures._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, LigaturesValuesArray),
    };
    Properties3D._C = {
        'w14:bevelT': BevelTop,
        'w14:bevelB': BevelBottom,
        'w14:extrusionClr': ExtrusionColor,
        'w14:contourClr': ContourColor,
    };
    Properties3D._D = {
        'w14:extrusionH': new OxmlAttr('w14:extrusionH', OxmlType.Int64Value),
        'w14:contourW': new OxmlAttr('w14:contourW', OxmlType.Int64Value),
        'w14:prstMaterial': new OxmlAttr('w14:prstMaterial', OxmlType.EnumValue, PresetMaterialTypeValuesArray),
    };
    Scene3D._C = {
        'w14:camera': Camera,
        'w14:lightRig': LightRig,
    };
    FillTextEffect._C = {
        'w14:noFill': NoFillEmpty,
        'w14:solidFill': SolidColorFillProperties,
        'w14:gradFill': GradientFillProperties,
    };
    TextOutlineEffect._C = {
        'w14:noFill': NoFillEmpty,
        'w14:solidFill': SolidColorFillProperties,
        'w14:gradFill': GradientFillProperties,
        'w14:prstDash': PresetLineDashProperties,
        'w14:round': RoundEmpty,
        'w14:bevel': BevelEmpty,
        'w14:miter': LineJoinMiterProperties,
    };
    TextOutlineEffect._D = {
        'w14:w': new OxmlAttr('w14:w', OxmlType.Int32Value),
        'w14:cap': new OxmlAttr('w14:cap', OxmlType.EnumValue, LineCapValuesArray),
        'w14:cmpd': new OxmlAttr('w14:cmpd', OxmlType.EnumValue, CompoundLineValuesArray),
        'w14:algn': new OxmlAttr('w14:algn', OxmlType.EnumValue, PenAlignmentValuesArray),
    };
    Reflection._D = {
        'w14:blurRad': new OxmlAttr('w14:blurRad', OxmlType.Int64Value),
        'w14:stA': new OxmlAttr('w14:stA', OxmlType.Int32Value),
        'w14:stPos': new OxmlAttr('w14:stPos', OxmlType.Int32Value),
        'w14:endA': new OxmlAttr('w14:endA', OxmlType.Int32Value),
        'w14:endPos': new OxmlAttr('w14:endPos', OxmlType.Int32Value),
        'w14:dist': new OxmlAttr('w14:dist', OxmlType.Int64Value),
        'w14:dir': new OxmlAttr('w14:dir', OxmlType.Int32Value),
        'w14:fadeDir': new OxmlAttr('w14:fadeDir', OxmlType.Int32Value),
        'w14:sx': new OxmlAttr('w14:sx', OxmlType.Int32Value),
        'w14:sy': new OxmlAttr('w14:sy', OxmlType.Int32Value),
        'w14:kx': new OxmlAttr('w14:kx', OxmlType.Int32Value),
        'w14:ky': new OxmlAttr('w14:ky', OxmlType.Int32Value),
        'w14:algn': new OxmlAttr('w14:algn', OxmlType.EnumValue, RectangleAlignmentValuesArray),
    };
    Shadow._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    Shadow._D = {
        'w14:blurRad': new OxmlAttr('w14:blurRad', OxmlType.Int64Value),
        'w14:dist': new OxmlAttr('w14:dist', OxmlType.Int64Value),
        'w14:dir': new OxmlAttr('w14:dir', OxmlType.Int32Value),
        'w14:sx': new OxmlAttr('w14:sx', OxmlType.Int32Value),
        'w14:sy': new OxmlAttr('w14:sy', OxmlType.Int32Value),
        'w14:kx': new OxmlAttr('w14:kx', OxmlType.Int32Value),
        'w14:ky': new OxmlAttr('w14:ky', OxmlType.Int32Value),
        'w14:algn': new OxmlAttr('w14:algn', OxmlType.EnumValue, RectangleAlignmentValuesArray),
    };
    Glow._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    Glow._D = {
        'w14:rad': new OxmlAttr('w14:rad', OxmlType.Int64Value),
    };
    LineJoinMiterProperties._D = {
        'w14:lim': new OxmlAttr('w14:lim', OxmlType.Int32Value),
    };
    PresetLineDashProperties._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, PresetLineDashValuesArray),
    };
    GradientFillProperties._C = {
        'w14:gsLst': GradientStopList,
        'w14:lin': LinearShadeProperties,
        'w14:path': PathShadeProperties,
    };
    SolidColorFillProperties._C = {
        'w14:srgbClr': RgbColorModelHex,
        'w14:schemeClr': SchemeColor,
    };
    PathShadeProperties._C = {
        'w14:fillToRect': FillToRectangle,
    };
    PathShadeProperties._D = {
        'w14:path': new OxmlAttr('w14:path', OxmlType.EnumValue, PathShadeTypeValuesArray),
    };
    LinearShadeProperties._D = {
        'w14:ang': new OxmlAttr('w14:ang', OxmlType.Int32Value),
        'w14:scaled': new OxmlAttr('w14:scaled', OxmlType.EnumValue, OnOffValuesArray),
    };
    SchemeColor._C = {
        'w14:tint': Tint,
        'w14:shade': Shade,
        'w14:alpha': Alpha,
        'w14:hueMod': HueModulation,
        'w14:sat': Saturation,
        'w14:satOff': SaturationOffset,
        'w14:satMod': SaturationModulation,
        'w14:lum': Luminance,
        'w14:lumOff': LuminanceOffset,
        'w14:lumMod': LuminanceModulation,
    };
    SchemeColor._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.EnumValue, SchemeColorValuesArray),
    };
    RgbColorModelHex._C = {
        'w14:tint': Tint,
        'w14:shade': Shade,
        'w14:alpha': Alpha,
        'w14:hueMod': HueModulation,
        'w14:sat': Saturation,
        'w14:satOff': SaturationOffset,
        'w14:satMod': SaturationModulation,
        'w14:lum': Luminance,
        'w14:lumOff': LuminanceOffset,
        'w14:lumMod': LuminanceModulation,
    };
    RgbColorModelHex._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.HexBinaryValue),
    };
    PercentageType._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.Int32Value),
    };
    HueModulation._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.Int32Value),
    };
    PositiveFixedPercentageType._D = {
        'w14:val': new OxmlAttr('w14:val', OxmlType.Int32Value),
    };
    TrackChangeType._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    RunTrackChangeType._C = {
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': RunConflictInsertion,
        'w14:conflictDel': RunConflictDeletion,
        'm:oMathPara': MParagraph,
        'm:oMath': MOfficeMath,
        'm:acc': MAccent,
        'm:bar': MBar,
        'm:box': MBox,
        'm:borderBox': MBorderBox,
        'm:d': MDelimiter,
        'm:eqArr': MEquationArray,
        'm:f': MFraction,
        'm:func': MMathFunction,
        'm:groupChr': MGroupChar,
        'm:limLow': MLimitLower,
        'm:limUpp': MLimitUpper,
        'm:m': MMatrix,
        'm:nary': MNary,
        'm:phant': MPhantom,
        'm:rad': MRadical,
        'm:sPre': MPreSubSuper,
        'm:sSub': MSubscript,
        'm:sSubSup': MSubSuperscript,
        'm:sSup': MSuperscript,
        'm:r': MRun,
        'w:r': WRun,
        'w:bdo': WBidirectionalOverride,
        'w:dir': WBidirectionalEmbedding,
    };
    RunTrackChangeType._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    RunConflictDeletion._C = {
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': RunConflictInsertion,
        'w14:conflictDel': RunConflictDeletion,
        'm:oMathPara': MParagraph,
        'm:oMath': MOfficeMath,
        'm:acc': MAccent,
        'm:bar': MBar,
        'm:box': MBox,
        'm:borderBox': MBorderBox,
        'm:d': MDelimiter,
        'm:eqArr': MEquationArray,
        'm:f': MFraction,
        'm:func': MMathFunction,
        'm:groupChr': MGroupChar,
        'm:limLow': MLimitLower,
        'm:limUpp': MLimitUpper,
        'm:m': MMatrix,
        'm:nary': MNary,
        'm:phant': MPhantom,
        'm:rad': MRadical,
        'm:sPre': MPreSubSuper,
        'm:sSub': MSubscript,
        'm:sSubSup': MSubSuperscript,
        'm:sSup': MSuperscript,
        'm:r': MRun,
        'w:r': WRun,
        'w:bdo': WBidirectionalOverride,
        'w:dir': WBidirectionalEmbedding,
    };
    RunConflictInsertion._C = {
        'w:sdt': WSdtRun,
        'w:proofErr': WProofError,
        'w:permStart': WPermStart,
        'w:permEnd': WPermEnd,
        'w:bookmarkStart': WBookmarkStart,
        'w:bookmarkEnd': WBookmarkEnd,
        'w:commentRangeStart': WCommentRangeStart,
        'w:commentRangeEnd': WCommentRangeEnd,
        'w:moveFromRangeStart': WMoveFromRangeStart,
        'w:moveFromRangeEnd': WMoveFromRangeEnd,
        'w:moveToRangeStart': WMoveToRangeStart,
        'w:moveToRangeEnd': WMoveToRangeEnd,
        'w:customXmlInsRangeStart': WCustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': WCustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': WCustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': WCustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': WCustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': WCustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': WCustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': WCustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': CustomXmlConflictDeletionRangeEnd,
        'w:ins': WInsertedRun,
        'w:del': WDeletedRun,
        'w:moveFrom': WMoveFromRun,
        'w:moveTo': WMoveToRun,
        'w:contentPart': WContentPart,
        'w14:conflictIns': RunConflictInsertion,
        'w14:conflictDel': RunConflictDeletion,
        'm:oMathPara': MParagraph,
        'm:oMath': MOfficeMath,
        'm:acc': MAccent,
        'm:bar': MBar,
        'm:box': MBox,
        'm:borderBox': MBorderBox,
        'm:d': MDelimiter,
        'm:eqArr': MEquationArray,
        'm:f': MFraction,
        'm:func': MMathFunction,
        'm:groupChr': MGroupChar,
        'm:limLow': MLimitLower,
        'm:limUpp': MLimitUpper,
        'm:m': MMatrix,
        'm:nary': MNary,
        'm:phant': MPhantom,
        'm:rad': MRadical,
        'm:sPre': MPreSubSuper,
        'm:sSub': MSubscript,
        'm:sSubSup': MSubSuperscript,
        'm:sSup': MSuperscript,
        'm:r': MRun,
        'w:r': WRun,
        'w:bdo': WBidirectionalOverride,
        'w:dir': WBidirectionalEmbedding,
    };
    return {
        prefix: 'w14',
        xmlns: 'http://schemas.microsoft.com/office/word/2010/wordml',
    };
}
